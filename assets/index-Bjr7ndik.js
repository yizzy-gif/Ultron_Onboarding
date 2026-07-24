(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function i(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=i(l);fetch(l.href,d)}})();function d0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ud={exports:{}},Ya={},pd={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V1;function uy(){if(V1)return Fe;V1=1;var e=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),p=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),b=Symbol.iterator;function k(E){return E===null||typeof E!="object"?null:(E=b&&E[b]||E["@@iterator"],typeof E=="function"?E:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,C={};function N(E,A,q){this.props=E,this.context=A,this.refs=C,this.updater=q||S}N.prototype.isReactComponent={},N.prototype.setState=function(E,A){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,A,"setState")},N.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function $(){}$.prototype=N.prototype;function M(E,A,q){this.props=E,this.context=A,this.refs=C,this.updater=q||S}var j=M.prototype=new $;j.constructor=M,_(j,N.prototype),j.isPureReactComponent=!0;var O=Array.isArray,L=Object.prototype.hasOwnProperty,R={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function z(E,A,q){var Z,ie={},ue=null,H=null;if(A!=null)for(Z in A.ref!==void 0&&(H=A.ref),A.key!==void 0&&(ue=""+A.key),A)L.call(A,Z)&&!I.hasOwnProperty(Z)&&(ie[Z]=A[Z]);var T=arguments.length-2;if(T===1)ie.children=q;else if(1<T){for(var ne=Array(T),fe=0;fe<T;fe++)ne[fe]=arguments[fe+2];ie.children=ne}if(E&&E.defaultProps)for(Z in T=E.defaultProps,T)ie[Z]===void 0&&(ie[Z]=T[Z]);return{$$typeof:e,type:E,key:ue,ref:H,props:ie,_owner:R.current}}function W(E,A){return{$$typeof:e,type:E.type,key:A,ref:E.ref,props:E.props,_owner:E._owner}}function G(E){return typeof E=="object"&&E!==null&&E.$$typeof===e}function Q(E){var A={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(q){return A[q]})}var B=/\/+/g;function Y(E,A){return typeof E=="object"&&E!==null&&E.key!=null?Q(""+E.key):A.toString(36)}function ee(E,A,q,Z,ie){var ue=typeof E;(ue==="undefined"||ue==="boolean")&&(E=null);var H=!1;if(E===null)H=!0;else switch(ue){case"string":case"number":H=!0;break;case"object":switch(E.$$typeof){case e:case a:H=!0}}if(H)return H=E,ie=ie(H),E=Z===""?"."+Y(H,0):Z,O(ie)?(q="",E!=null&&(q=E.replace(B,"$&/")+"/"),ee(ie,A,q,"",function(fe){return fe})):ie!=null&&(G(ie)&&(ie=W(ie,q+(!ie.key||H&&H.key===ie.key?"":(""+ie.key).replace(B,"$&/")+"/")+E)),A.push(ie)),1;if(H=0,Z=Z===""?".":Z+":",O(E))for(var T=0;T<E.length;T++){ue=E[T];var ne=Z+Y(ue,T);H+=ee(ue,A,q,ne,ie)}else if(ne=k(E),typeof ne=="function")for(E=ne.call(E),T=0;!(ue=E.next()).done;)ue=ue.value,ne=Z+Y(ue,T++),H+=ee(ue,A,q,ne,ie);else if(ue==="object")throw A=String(E),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return H}function oe(E,A,q){if(E==null)return E;var Z=[],ie=0;return ee(E,Z,"","",function(ue){return A.call(q,ue,ie++)}),Z}function le(E){if(E._status===-1){var A=E._result;A=A(),A.then(function(q){(E._status===0||E._status===-1)&&(E._status=1,E._result=q)},function(q){(E._status===0||E._status===-1)&&(E._status=2,E._result=q)}),E._status===-1&&(E._status=0,E._result=A)}if(E._status===1)return E._result.default;throw E._result}var re={current:null},X={transition:null},D={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:X,ReactCurrentOwner:R};function V(){throw Error("act(...) is not supported in production builds of React.")}return Fe.Children={map:oe,forEach:function(E,A,q){oe(E,function(){A.apply(this,arguments)},q)},count:function(E){var A=0;return oe(E,function(){A++}),A},toArray:function(E){return oe(E,function(A){return A})||[]},only:function(E){if(!G(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},Fe.Component=N,Fe.Fragment=i,Fe.Profiler=l,Fe.PureComponent=M,Fe.StrictMode=s,Fe.Suspense=v,Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,Fe.act=V,Fe.cloneElement=function(E,A,q){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var Z=_({},E.props),ie=E.key,ue=E.ref,H=E._owner;if(A!=null){if(A.ref!==void 0&&(ue=A.ref,H=R.current),A.key!==void 0&&(ie=""+A.key),E.type&&E.type.defaultProps)var T=E.type.defaultProps;for(ne in A)L.call(A,ne)&&!I.hasOwnProperty(ne)&&(Z[ne]=A[ne]===void 0&&T!==void 0?T[ne]:A[ne])}var ne=arguments.length-2;if(ne===1)Z.children=q;else if(1<ne){T=Array(ne);for(var fe=0;fe<ne;fe++)T[fe]=arguments[fe+2];Z.children=T}return{$$typeof:e,type:E.type,key:ie,ref:ue,props:Z,_owner:H}},Fe.createContext=function(E){return E={$$typeof:p,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:d,_context:E},E.Consumer=E},Fe.createElement=z,Fe.createFactory=function(E){var A=z.bind(null,E);return A.type=E,A},Fe.createRef=function(){return{current:null}},Fe.forwardRef=function(E){return{$$typeof:m,render:E}},Fe.isValidElement=G,Fe.lazy=function(E){return{$$typeof:x,_payload:{_status:-1,_result:E},_init:le}},Fe.memo=function(E,A){return{$$typeof:y,type:E,compare:A===void 0?null:A}},Fe.startTransition=function(E){var A=X.transition;X.transition={};try{E()}finally{X.transition=A}},Fe.unstable_act=V,Fe.useCallback=function(E,A){return re.current.useCallback(E,A)},Fe.useContext=function(E){return re.current.useContext(E)},Fe.useDebugValue=function(){},Fe.useDeferredValue=function(E){return re.current.useDeferredValue(E)},Fe.useEffect=function(E,A){return re.current.useEffect(E,A)},Fe.useId=function(){return re.current.useId()},Fe.useImperativeHandle=function(E,A,q){return re.current.useImperativeHandle(E,A,q)},Fe.useInsertionEffect=function(E,A){return re.current.useInsertionEffect(E,A)},Fe.useLayoutEffect=function(E,A){return re.current.useLayoutEffect(E,A)},Fe.useMemo=function(E,A){return re.current.useMemo(E,A)},Fe.useReducer=function(E,A,q){return re.current.useReducer(E,A,q)},Fe.useRef=function(E){return re.current.useRef(E)},Fe.useState=function(E){return re.current.useState(E)},Fe.useSyncExternalStore=function(E,A,q){return re.current.useSyncExternalStore(E,A,q)},Fe.useTransition=function(){return re.current.useTransition()},Fe.version="18.3.1",Fe}var G1;function yu(){return G1||(G1=1,pd.exports=uy()),pd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y1;function py(){if(Y1)return Ya;Y1=1;var e=yu(),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(m,v,y){var x,b={},k=null,S=null;y!==void 0&&(k=""+y),v.key!==void 0&&(k=""+v.key),v.ref!==void 0&&(S=v.ref);for(x in v)s.call(v,x)&&!d.hasOwnProperty(x)&&(b[x]=v[x]);if(m&&m.defaultProps)for(x in v=m.defaultProps,v)b[x]===void 0&&(b[x]=v[x]);return{$$typeof:a,type:m,key:k,ref:S,props:b,_owner:l.current}}return Ya.Fragment=i,Ya.jsx=p,Ya.jsxs=p,Ya}var K1;function hy(){return K1||(K1=1,ud.exports=py()),ud.exports}var r=hy(),g=yu();const tn=d0(g);var Ls={},hd={exports:{}},Kt={},fd={exports:{}},md={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q1;function fy(){return Q1||(Q1=1,(function(e){function a(X,D){var V=X.length;X.push(D);e:for(;0<V;){var E=V-1>>>1,A=X[E];if(0<l(A,D))X[E]=D,X[V]=A,V=E;else break e}}function i(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var D=X[0],V=X.pop();if(V!==D){X[0]=V;e:for(var E=0,A=X.length,q=A>>>1;E<q;){var Z=2*(E+1)-1,ie=X[Z],ue=Z+1,H=X[ue];if(0>l(ie,V))ue<A&&0>l(H,ie)?(X[E]=H,X[ue]=V,E=ue):(X[E]=ie,X[Z]=V,E=Z);else if(ue<A&&0>l(H,V))X[E]=H,X[ue]=V,E=ue;else break e}}return D}function l(X,D){var V=X.sortIndex-D.sortIndex;return V!==0?V:X.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var p=Date,m=p.now();e.unstable_now=function(){return p.now()-m}}var v=[],y=[],x=1,b=null,k=3,S=!1,_=!1,C=!1,N=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(X){for(var D=i(y);D!==null;){if(D.callback===null)s(y);else if(D.startTime<=X)s(y),D.sortIndex=D.expirationTime,a(v,D);else break;D=i(y)}}function O(X){if(C=!1,j(X),!_)if(i(v)!==null)_=!0,le(L);else{var D=i(y);D!==null&&re(O,D.startTime-X)}}function L(X,D){_=!1,C&&(C=!1,$(z),z=-1),S=!0;var V=k;try{for(j(D),b=i(v);b!==null&&(!(b.expirationTime>D)||X&&!Q());){var E=b.callback;if(typeof E=="function"){b.callback=null,k=b.priorityLevel;var A=E(b.expirationTime<=D);D=e.unstable_now(),typeof A=="function"?b.callback=A:b===i(v)&&s(v),j(D)}else s(v);b=i(v)}if(b!==null)var q=!0;else{var Z=i(y);Z!==null&&re(O,Z.startTime-D),q=!1}return q}finally{b=null,k=V,S=!1}}var R=!1,I=null,z=-1,W=5,G=-1;function Q(){return!(e.unstable_now()-G<W)}function B(){if(I!==null){var X=e.unstable_now();G=X;var D=!0;try{D=I(!0,X)}finally{D?Y():(R=!1,I=null)}}else R=!1}var Y;if(typeof M=="function")Y=function(){M(B)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,oe=ee.port2;ee.port1.onmessage=B,Y=function(){oe.postMessage(null)}}else Y=function(){N(B,0)};function le(X){I=X,R||(R=!0,Y())}function re(X,D){z=N(function(){X(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(X){X.callback=null},e.unstable_continueExecution=function(){_||S||(_=!0,le(L))},e.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<X?Math.floor(1e3/X):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_getFirstCallbackNode=function(){return i(v)},e.unstable_next=function(X){switch(k){case 1:case 2:case 3:var D=3;break;default:D=k}var V=k;k=D;try{return X()}finally{k=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(X,D){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var V=k;k=X;try{return D()}finally{k=V}},e.unstable_scheduleCallback=function(X,D,V){var E=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?E+V:E):V=E,X){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=V+A,X={id:x++,callback:D,priorityLevel:X,startTime:V,expirationTime:A,sortIndex:-1},V>E?(X.sortIndex=V,a(y,X),i(v)===null&&X===i(y)&&(C?($(z),z=-1):C=!0,re(O,V-E))):(X.sortIndex=A,a(v,X),_||S||(_=!0,le(L))),X},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(X){var D=k;return function(){var V=k;k=D;try{return X.apply(this,arguments)}finally{k=V}}}})(md)),md}var Z1;function my(){return Z1||(Z1=1,fd.exports=fy()),fd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X1;function gy(){if(X1)return Kt;X1=1;var e=yu(),a=my();function i(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(t,n){p(t,n),p(t+"Capture",n)}function p(t,n){for(l[t]=n,t=0;t<n.length;t++)s.add(n[t])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},b={};function k(t){return v.call(b,t)?!0:v.call(x,t)?!1:y.test(t)?b[t]=!0:(x[t]=!0,!1)}function S(t,n,o,c){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _(t,n,o,c){if(n===null||typeof n>"u"||S(t,n,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function C(t,n,o,c,u,h,w){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=c,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=n,this.sanitizeURL=h,this.removeEmptyString=w}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){N[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];N[n]=new C(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){N[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){N[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){N[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){N[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){N[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){N[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){N[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function M(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace($,M);N[n]=new C(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace($,M);N[n]=new C(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace($,M);N[n]=new C(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){N[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),N.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){N[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function j(t,n,o,c){var u=N.hasOwnProperty(n)?N[n]:null;(u!==null?u.type!==0:c||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(_(n,o,u,c)&&(o=null),c||u===null?k(n)&&(o===null?t.removeAttribute(n):t.setAttribute(n,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(n=u.attributeName,c=u.attributeNamespace,o===null?t.removeAttribute(n):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,c?t.setAttributeNS(c,n,o):t.setAttribute(n,o))))}var O=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),R=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),Q=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),X=Symbol.iterator;function D(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var V=Object.assign,E;function A(t){if(E===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||""}return`
`+E+t}var q=!1;function Z(t,n){if(!t||q)return"";q=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(te){var c=te}Reflect.construct(t,[],n)}else{try{n.call()}catch(te){c=te}t.call(n.prototype)}else{try{throw Error()}catch(te){c=te}t()}}catch(te){if(te&&c&&typeof te.stack=="string"){for(var u=te.stack.split(`
`),h=c.stack.split(`
`),w=u.length-1,P=h.length-1;1<=w&&0<=P&&u[w]!==h[P];)P--;for(;1<=w&&0<=P;w--,P--)if(u[w]!==h[P]){if(w!==1||P!==1)do if(w--,P--,0>P||u[w]!==h[P]){var F=`
`+u[w].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=w&&0<=P);break}}}finally{q=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?A(t):""}function ie(t){switch(t.tag){case 5:return A(t.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function ue(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case R:return"Portal";case W:return"Profiler";case z:return"StrictMode";case Y:return"Suspense";case ee:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Q:return(t.displayName||"Context")+".Consumer";case G:return(t._context.displayName||"Context")+".Provider";case B:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case oe:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case le:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}function H(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(n);case 8:return n===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function T(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ne(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function fe(t){var n=ne(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),c=""+t[n];if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(w){c=""+w,h.call(this,w)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ce(t){t._valueTracker||(t._valueTracker=fe(t))}function me(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var o=n.getValue(),c="";return t&&(c=ne(t)?t.checked?"true":"false":t.value),t=c,t!==o?(n.setValue(t),!0):!1}function we(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xe(t,n){var o=n.checked;return V({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function Re(t,n){var o=n.defaultValue==null?"":n.defaultValue,c=n.checked!=null?n.checked:n.defaultChecked;o=T(n.value!=null?n.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ze(t,n){n=n.checked,n!=null&&j(t,"checked",n,!1)}function Ve(t,n){ze(t,n);var o=T(n.value),c=n.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?$e(t,n.type,o):n.hasOwnProperty("defaultValue")&&$e(t,n.type,T(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function Oe(t,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var c=n.type;if(!(c!=="submit"&&c!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,o||n===t.value||(t.value=n),t.defaultValue=n}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function $e(t,n,o){(n!=="number"||we(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var We=Array.isArray;function Qe(t,n,o,c){if(t=t.options,n){n={};for(var u=0;u<o.length;u++)n["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=n.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&c&&(t[o].defaultSelected=!0)}else{for(o=""+T(o),n=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,c&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function dt(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return V({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function De(t,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(We(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}t._wrapperState={initialValue:T(o)}}function gt(t,n){var o=T(n.value),c=T(n.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),n.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function et(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function It(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rt(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?It(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ft,Hn=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,c,u){MSApp.execUnsafeLocalFunction(function(){return t(n,o,c,u)})}:t})(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(Ft=Ft||document.createElement("div"),Ft.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ft.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function mn(t,n){if(n){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=n;return}}t.textContent=n}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ua=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(t){ua.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Mn[n]=Mn[t]})});function ae(t,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||Mn.hasOwnProperty(t)&&Mn[t]?(""+n).trim():n+"px"}function de(t,n){t=t.style;for(var o in n)if(n.hasOwnProperty(o)){var c=o.indexOf("--")===0,u=ae(o,n[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,u):t[o]=u}}var ye=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ee(t,n){if(n){if(ye[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function He(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _t=null;function Rn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ln=null,Xn=null,hr=null;function cp(t){if(t=Ta(t)){if(typeof Ln!="function")throw Error(i(280));var n=t.stateNode;n&&(n=qi(n),Ln(t.stateNode,t.type,n))}}function dp(t){Xn?hr?hr.push(t):hr=[t]:Xn=t}function up(){if(Xn){var t=Xn,n=hr;if(hr=Xn=null,cp(t),n)for(t=0;t<n.length;t++)cp(n[t])}}function pp(t,n){return t(n)}function hp(){}var Ml=!1;function fp(t,n,o){if(Ml)return t(n,o);Ml=!0;try{return pp(t,n,o)}finally{Ml=!1,(Xn!==null||hr!==null)&&(hp(),up())}}function pa(t,n){var o=t.stateNode;if(o===null)return null;var c=qi(o);if(c===null)return null;o=c[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var Rl=!1;if(m)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){Rl=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{Rl=!1}function vv(t,n,o,c,u,h,w,P,F){var te=Array.prototype.slice.call(arguments,3);try{n.apply(o,te)}catch(he){this.onError(he)}}var fa=!1,_i=null,Ci=!1,Ll=null,xv={onError:function(t){fa=!0,_i=t}};function yv(t,n,o,c,u,h,w,P,F){fa=!1,_i=null,vv.apply(xv,arguments)}function wv(t,n,o,c,u,h,w,P,F){if(yv.apply(this,arguments),fa){if(fa){var te=_i;fa=!1,_i=null}else throw Error(i(198));Ci||(Ci=!0,Ll=te)}}function Ur(t){var n=t,o=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(o=n.return),t=n.return;while(t)}return n.tag===3?o:null}function mp(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function gp(t){if(Ur(t)!==t)throw Error(i(188))}function bv(t){var n=t.alternate;if(!n){if(n=Ur(t),n===null)throw Error(i(188));return n!==t?null:t}for(var o=t,c=n;;){var u=o.return;if(u===null)break;var h=u.alternate;if(h===null){if(c=u.return,c!==null){o=c;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===o)return gp(u),t;if(h===c)return gp(u),n;h=h.sibling}throw Error(i(188))}if(o.return!==c.return)o=u,c=h;else{for(var w=!1,P=u.child;P;){if(P===o){w=!0,o=u,c=h;break}if(P===c){w=!0,c=u,o=h;break}P=P.sibling}if(!w){for(P=h.child;P;){if(P===o){w=!0,o=h,c=u;break}if(P===c){w=!0,c=h,o=u;break}P=P.sibling}if(!w)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?t:n}function vp(t){return t=bv(t),t!==null?xp(t):null}function xp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=xp(t);if(n!==null)return n;t=t.sibling}return null}var yp=a.unstable_scheduleCallback,wp=a.unstable_cancelCallback,kv=a.unstable_shouldYield,_v=a.unstable_requestPaint,pt=a.unstable_now,Cv=a.unstable_getCurrentPriorityLevel,Al=a.unstable_ImmediatePriority,bp=a.unstable_UserBlockingPriority,ji=a.unstable_NormalPriority,jv=a.unstable_LowPriority,kp=a.unstable_IdlePriority,Si=null,Un=null;function Sv(t){if(Un&&typeof Un.onCommitFiberRoot=="function")try{Un.onCommitFiberRoot(Si,t,void 0,(t.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:Rv,Nv=Math.log,Mv=Math.LN2;function Rv(t){return t>>>=0,t===0?32:31-(Nv(t)/Mv|0)|0}var Ni=64,Mi=4194304;function ma(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ri(t,n){var o=t.pendingLanes;if(o===0)return 0;var c=0,u=t.suspendedLanes,h=t.pingedLanes,w=o&268435455;if(w!==0){var P=w&~u;P!==0?c=ma(P):(h&=w,h!==0&&(c=ma(h)))}else w=o&~u,w!==0?c=ma(w):h!==0&&(c=ma(h));if(c===0)return 0;if(n!==0&&n!==c&&(n&u)===0&&(u=c&-c,h=n&-n,u>=h||u===16&&(h&4194240)!==0))return n;if((c&4)!==0&&(c|=o&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=c;0<n;)o=31-An(n),u=1<<o,c|=t[o],n&=~u;return c}function Lv(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Av(t,n){for(var o=t.suspendedLanes,c=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var w=31-An(h),P=1<<w,F=u[w];F===-1?((P&o)===0||(P&c)!==0)&&(u[w]=Lv(P,n)):F<=n&&(t.expiredLanes|=P),h&=~P}}function $l(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _p(){var t=Ni;return Ni<<=1,(Ni&4194240)===0&&(Ni=64),t}function Tl(t){for(var n=[],o=0;31>o;o++)n.push(t);return n}function ga(t,n,o){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-An(n),t[n]=o}function $v(t,n){var o=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-An(o),h=1<<u;n[u]=0,c[u]=-1,t[u]=-1,o&=~h}}function Il(t,n){var o=t.entangledLanes|=n;for(t=t.entanglements;o;){var c=31-An(o),u=1<<c;u&n|t[c]&n&&(t[c]|=n),o&=~u}}var Xe=0;function Cp(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var jp,El,Sp,Np,Mp,Pl=!1,Li=[],fr=null,mr=null,gr=null,va=new Map,xa=new Map,vr=[],Tv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rp(t,n){switch(t){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":va.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(n.pointerId)}}function ya(t,n,o,c,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:o,eventSystemFlags:c,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Ta(n),n!==null&&El(n)),t):(t.eventSystemFlags|=c,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Iv(t,n,o,c,u){switch(n){case"focusin":return fr=ya(fr,t,n,o,c,u),!0;case"dragenter":return mr=ya(mr,t,n,o,c,u),!0;case"mouseover":return gr=ya(gr,t,n,o,c,u),!0;case"pointerover":var h=u.pointerId;return va.set(h,ya(va.get(h)||null,t,n,o,c,u)),!0;case"gotpointercapture":return h=u.pointerId,xa.set(h,ya(xa.get(h)||null,t,n,o,c,u)),!0}return!1}function Lp(t){var n=qr(t.target);if(n!==null){var o=Ur(n);if(o!==null){if(n=o.tag,n===13){if(n=mp(o),n!==null){t.blockedOn=n,Mp(t.priority,function(){Sp(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ai(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var o=Ol(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);_t=c,o.target.dispatchEvent(c),_t=null}else return n=Ta(o),n!==null&&El(n),t.blockedOn=o,!1;n.shift()}return!0}function Ap(t,n,o){Ai(t)&&o.delete(n)}function Ev(){Pl=!1,fr!==null&&Ai(fr)&&(fr=null),mr!==null&&Ai(mr)&&(mr=null),gr!==null&&Ai(gr)&&(gr=null),va.forEach(Ap),xa.forEach(Ap)}function wa(t,n){t.blockedOn===n&&(t.blockedOn=null,Pl||(Pl=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ev)))}function ba(t){function n(u){return wa(u,t)}if(0<Li.length){wa(Li[0],t);for(var o=1;o<Li.length;o++){var c=Li[o];c.blockedOn===t&&(c.blockedOn=null)}}for(fr!==null&&wa(fr,t),mr!==null&&wa(mr,t),gr!==null&&wa(gr,t),va.forEach(n),xa.forEach(n),o=0;o<vr.length;o++)c=vr[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<vr.length&&(o=vr[0],o.blockedOn===null);)Lp(o),o.blockedOn===null&&vr.shift()}var xo=O.ReactCurrentBatchConfig,$i=!0;function Pv(t,n,o,c){var u=Xe,h=xo.transition;xo.transition=null;try{Xe=1,zl(t,n,o,c)}finally{Xe=u,xo.transition=h}}function zv(t,n,o,c){var u=Xe,h=xo.transition;xo.transition=null;try{Xe=4,zl(t,n,o,c)}finally{Xe=u,xo.transition=h}}function zl(t,n,o,c){if($i){var u=Ol(t,n,o,c);if(u===null)tc(t,n,c,Ti,o),Rp(t,c);else if(Iv(u,t,n,o,c))c.stopPropagation();else if(Rp(t,c),n&4&&-1<Tv.indexOf(t)){for(;u!==null;){var h=Ta(u);if(h!==null&&jp(h),h=Ol(t,n,o,c),h===null&&tc(t,n,c,Ti,o),h===u)break;u=h}u!==null&&c.stopPropagation()}else tc(t,n,c,null,o)}}var Ti=null;function Ol(t,n,o,c){if(Ti=null,t=Rn(c),t=qr(t),t!==null)if(n=Ur(t),n===null)t=null;else if(o=n.tag,o===13){if(t=mp(n),t!==null)return t;t=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return Ti=t,null}function $p(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cv()){case Al:return 1;case bp:return 4;case ji:case jv:return 16;case kp:return 536870912;default:return 16}default:return 16}}var xr=null,Dl=null,Ii=null;function Tp(){if(Ii)return Ii;var t,n=Dl,o=n.length,c,u="value"in xr?xr.value:xr.textContent,h=u.length;for(t=0;t<o&&n[t]===u[t];t++);var w=o-t;for(c=1;c<=w&&n[o-c]===u[h-c];c++);return Ii=u.slice(t,1<c?1-c:void 0)}function Ei(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Pi(){return!0}function Ip(){return!1}function nn(t){function n(o,c,u,h,w){this._reactName=o,this._targetInst=u,this.type=c,this.nativeEvent=h,this.target=w,this.currentTarget=null;for(var P in t)t.hasOwnProperty(P)&&(o=t[P],this[P]=o?o(h):h[P]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Pi:Ip,this.isPropagationStopped=Ip,this}return V(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),n}var yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=nn(yo),ka=V({},yo,{view:0,detail:0}),Ov=nn(ka),Bl,Wl,_a,zi=V({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ul,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_a&&(_a&&t.type==="mousemove"?(Bl=t.screenX-_a.screenX,Wl=t.screenY-_a.screenY):Wl=Bl=0,_a=t),Bl)},movementY:function(t){return"movementY"in t?t.movementY:Wl}}),Ep=nn(zi),Dv=V({},zi,{dataTransfer:0}),Fv=nn(Dv),Bv=V({},ka,{relatedTarget:0}),Hl=nn(Bv),Wv=V({},yo,{animationName:0,elapsedTime:0,pseudoElement:0}),Hv=nn(Wv),Uv=V({},yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qv=nn(Uv),Vv=V({},yo,{data:0}),Pp=nn(Vv),Gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Kv[t])?!!n[t]:!1}function Ul(){return Qv}var Zv=V({},ka,{key:function(t){if(t.key){var n=Gv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ei(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ul,charCode:function(t){return t.type==="keypress"?Ei(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ei(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xv=nn(Zv),Jv=V({},zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zp=nn(Jv),ex=V({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ul}),tx=nn(ex),nx=V({},yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),rx=nn(nx),ox=V({},zi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ax=nn(ox),ix=[9,13,27,32],ql=m&&"CompositionEvent"in window,Ca=null;m&&"documentMode"in document&&(Ca=document.documentMode);var sx=m&&"TextEvent"in window&&!Ca,Op=m&&(!ql||Ca&&8<Ca&&11>=Ca),Dp=" ",Fp=!1;function Bp(t,n){switch(t){case"keyup":return ix.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wo=!1;function lx(t,n){switch(t){case"compositionend":return Wp(n);case"keypress":return n.which!==32?null:(Fp=!0,Dp);case"textInput":return t=n.data,t===Dp&&Fp?null:t;default:return null}}function cx(t,n){if(wo)return t==="compositionend"||!ql&&Bp(t,n)?(t=Tp(),Ii=Dl=xr=null,wo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Op&&n.locale!=="ko"?null:n.data;default:return null}}var dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!dx[t.type]:n==="textarea"}function Up(t,n,o,c){dp(c),n=Wi(n,"onChange"),0<n.length&&(o=new Fl("onChange","change",null,o,c),t.push({event:o,listeners:n}))}var ja=null,Sa=null;function ux(t){lh(t,0)}function Oi(t){var n=jo(t);if(me(n))return t}function px(t,n){if(t==="change")return n}var qp=!1;if(m){var Vl;if(m){var Gl="oninput"in document;if(!Gl){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),Gl=typeof Vp.oninput=="function"}Vl=Gl}else Vl=!1;qp=Vl&&(!document.documentMode||9<document.documentMode)}function Gp(){ja&&(ja.detachEvent("onpropertychange",Yp),Sa=ja=null)}function Yp(t){if(t.propertyName==="value"&&Oi(Sa)){var n=[];Up(n,Sa,t,Rn(t)),fp(ux,n)}}function hx(t,n,o){t==="focusin"?(Gp(),ja=n,Sa=o,ja.attachEvent("onpropertychange",Yp)):t==="focusout"&&Gp()}function fx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Oi(Sa)}function mx(t,n){if(t==="click")return Oi(n)}function gx(t,n){if(t==="input"||t==="change")return Oi(n)}function vx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:vx;function Na(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var o=Object.keys(t),c=Object.keys(n);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var u=o[c];if(!v.call(n,u)||!$n(t[u],n[u]))return!1}return!0}function Kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qp(t,n){var o=Kp(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=n&&c>=n)return{node:o,offset:n-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Kp(o)}}function Zp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Zp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Xp(){for(var t=window,n=we();n instanceof t.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)t=n.contentWindow;else break;n=we(t.document)}return n}function Yl(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function xx(t){var n=Xp(),o=t.focusedElem,c=t.selectionRange;if(n!==o&&o&&o.ownerDocument&&Zp(o.ownerDocument.documentElement,o)){if(c!==null&&Yl(o)){if(n=c.start,t=c.end,t===void 0&&(t=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(t,o.value.length);else if(t=(n=o.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,h=Math.min(c.start,u);c=c.end===void 0?h:Math.min(c.end,u),!t.extend&&h>c&&(u=c,c=h,h=u),u=Qp(o,h);var w=Qp(o,c);u&&w&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),t.removeAllRanges(),h>c?(t.addRange(n),t.extend(w.node,w.offset)):(n.setEnd(w.node,w.offset),t.addRange(n)))}}for(n=[],t=o;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)t=n[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yx=m&&"documentMode"in document&&11>=document.documentMode,bo=null,Kl=null,Ma=null,Ql=!1;function Jp(t,n,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ql||bo==null||bo!==we(c)||(c=bo,"selectionStart"in c&&Yl(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ma&&Na(Ma,c)||(Ma=c,c=Wi(Kl,"onSelect"),0<c.length&&(n=new Fl("onSelect","select",null,n,o),t.push({event:n,listeners:c}),n.target=bo)))}function Di(t,n){var o={};return o[t.toLowerCase()]=n.toLowerCase(),o["Webkit"+t]="webkit"+n,o["Moz"+t]="moz"+n,o}var ko={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionend:Di("Transition","TransitionEnd")},Zl={},eh={};m&&(eh=document.createElement("div").style,"AnimationEvent"in window||(delete ko.animationend.animation,delete ko.animationiteration.animation,delete ko.animationstart.animation),"TransitionEvent"in window||delete ko.transitionend.transition);function Fi(t){if(Zl[t])return Zl[t];if(!ko[t])return t;var n=ko[t],o;for(o in n)if(n.hasOwnProperty(o)&&o in eh)return Zl[t]=n[o];return t}var th=Fi("animationend"),nh=Fi("animationiteration"),rh=Fi("animationstart"),oh=Fi("transitionend"),ah=new Map,ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(t,n){ah.set(t,n),d(n,[t])}for(var Xl=0;Xl<ih.length;Xl++){var Jl=ih[Xl],wx=Jl.toLowerCase(),bx=Jl[0].toUpperCase()+Jl.slice(1);yr(wx,"on"+bx)}yr(th,"onAnimationEnd"),yr(nh,"onAnimationIteration"),yr(rh,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr(oh,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function sh(t,n,o){var c=t.type||"unknown-event";t.currentTarget=o,wv(c,n,void 0,t),t.currentTarget=null}function lh(t,n){n=(n&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],u=c.event;c=c.listeners;e:{var h=void 0;if(n)for(var w=c.length-1;0<=w;w--){var P=c[w],F=P.instance,te=P.currentTarget;if(P=P.listener,F!==h&&u.isPropagationStopped())break e;sh(u,P,te),h=F}else for(w=0;w<c.length;w++){if(P=c[w],F=P.instance,te=P.currentTarget,P=P.listener,F!==h&&u.isPropagationStopped())break e;sh(u,P,te),h=F}}}if(Ci)throw t=Ll,Ci=!1,Ll=null,t}function ot(t,n){var o=n[sc];o===void 0&&(o=n[sc]=new Set);var c=t+"__bubble";o.has(c)||(ch(n,t,2,!1),o.add(c))}function ec(t,n,o){var c=0;n&&(c|=4),ch(o,t,c,n)}var Bi="_reactListening"+Math.random().toString(36).slice(2);function La(t){if(!t[Bi]){t[Bi]=!0,s.forEach(function(o){o!=="selectionchange"&&(kx.has(o)||ec(o,!1,t),ec(o,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Bi]||(n[Bi]=!0,ec("selectionchange",!1,n))}}function ch(t,n,o,c){switch($p(n)){case 1:var u=Pv;break;case 4:u=zv;break;default:u=zl}o=u.bind(null,n,o,t),u=void 0,!Rl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),c?u!==void 0?t.addEventListener(n,o,{capture:!0,passive:u}):t.addEventListener(n,o,!0):u!==void 0?t.addEventListener(n,o,{passive:u}):t.addEventListener(n,o,!1)}function tc(t,n,o,c,u){var h=c;if((n&1)===0&&(n&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var P=c.stateNode.containerInfo;if(P===u||P.nodeType===8&&P.parentNode===u)break;if(w===4)for(w=c.return;w!==null;){var F=w.tag;if((F===3||F===4)&&(F=w.stateNode.containerInfo,F===u||F.nodeType===8&&F.parentNode===u))return;w=w.return}for(;P!==null;){if(w=qr(P),w===null)return;if(F=w.tag,F===5||F===6){c=h=w;continue e}P=P.parentNode}}c=c.return}fp(function(){var te=h,he=Rn(o),ge=[];e:{var pe=ah.get(t);if(pe!==void 0){var be=Fl,_e=t;switch(t){case"keypress":if(Ei(o)===0)break e;case"keydown":case"keyup":be=Xv;break;case"focusin":_e="focus",be=Hl;break;case"focusout":_e="blur",be=Hl;break;case"beforeblur":case"afterblur":be=Hl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=Ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=Fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=tx;break;case th:case nh:case rh:be=Hv;break;case oh:be=rx;break;case"scroll":be=Ov;break;case"wheel":be=ax;break;case"copy":case"cut":case"paste":be=qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=zp}var Ce=(n&4)!==0,ht=!Ce&&t==="scroll",K=Ce?pe!==null?pe+"Capture":null:pe;Ce=[];for(var U=te,J;U!==null;){J=U;var ve=J.stateNode;if(J.tag===5&&ve!==null&&(J=ve,K!==null&&(ve=pa(U,K),ve!=null&&Ce.push(Aa(U,ve,J)))),ht)break;U=U.return}0<Ce.length&&(pe=new be(pe,_e,null,o,he),ge.push({event:pe,listeners:Ce}))}}if((n&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",be=t==="mouseout"||t==="pointerout",pe&&o!==_t&&(_e=o.relatedTarget||o.fromElement)&&(qr(_e)||_e[Jn]))break e;if((be||pe)&&(pe=he.window===he?he:(pe=he.ownerDocument)?pe.defaultView||pe.parentWindow:window,be?(_e=o.relatedTarget||o.toElement,be=te,_e=_e?qr(_e):null,_e!==null&&(ht=Ur(_e),_e!==ht||_e.tag!==5&&_e.tag!==6)&&(_e=null)):(be=null,_e=te),be!==_e)){if(Ce=Ep,ve="onMouseLeave",K="onMouseEnter",U="mouse",(t==="pointerout"||t==="pointerover")&&(Ce=zp,ve="onPointerLeave",K="onPointerEnter",U="pointer"),ht=be==null?pe:jo(be),J=_e==null?pe:jo(_e),pe=new Ce(ve,U+"leave",be,o,he),pe.target=ht,pe.relatedTarget=J,ve=null,qr(he)===te&&(Ce=new Ce(K,U+"enter",_e,o,he),Ce.target=J,Ce.relatedTarget=ht,ve=Ce),ht=ve,be&&_e)t:{for(Ce=be,K=_e,U=0,J=Ce;J;J=_o(J))U++;for(J=0,ve=K;ve;ve=_o(ve))J++;for(;0<U-J;)Ce=_o(Ce),U--;for(;0<J-U;)K=_o(K),J--;for(;U--;){if(Ce===K||K!==null&&Ce===K.alternate)break t;Ce=_o(Ce),K=_o(K)}Ce=null}else Ce=null;be!==null&&dh(ge,pe,be,Ce,!1),_e!==null&&ht!==null&&dh(ge,ht,_e,Ce,!0)}}e:{if(pe=te?jo(te):window,be=pe.nodeName&&pe.nodeName.toLowerCase(),be==="select"||be==="input"&&pe.type==="file")var je=px;else if(Hp(pe))if(qp)je=gx;else{je=fx;var Ne=hx}else(be=pe.nodeName)&&be.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(je=mx);if(je&&(je=je(t,te))){Up(ge,je,o,he);break e}Ne&&Ne(t,pe,te),t==="focusout"&&(Ne=pe._wrapperState)&&Ne.controlled&&pe.type==="number"&&$e(pe,"number",pe.value)}switch(Ne=te?jo(te):window,t){case"focusin":(Hp(Ne)||Ne.contentEditable==="true")&&(bo=Ne,Kl=te,Ma=null);break;case"focusout":Ma=Kl=bo=null;break;case"mousedown":Ql=!0;break;case"contextmenu":case"mouseup":case"dragend":Ql=!1,Jp(ge,o,he);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":Jp(ge,o,he)}var Me;if(ql)e:{switch(t){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else wo?Bp(t,o)&&(Le="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(Le="onCompositionStart");Le&&(Op&&o.locale!=="ko"&&(wo||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&wo&&(Me=Tp()):(xr=he,Dl="value"in xr?xr.value:xr.textContent,wo=!0)),Ne=Wi(te,Le),0<Ne.length&&(Le=new Pp(Le,t,null,o,he),ge.push({event:Le,listeners:Ne}),Me?Le.data=Me:(Me=Wp(o),Me!==null&&(Le.data=Me)))),(Me=sx?lx(t,o):cx(t,o))&&(te=Wi(te,"onBeforeInput"),0<te.length&&(he=new Pp("onBeforeInput","beforeinput",null,o,he),ge.push({event:he,listeners:te}),he.data=Me))}lh(ge,n)})}function Aa(t,n,o){return{instance:t,listener:n,currentTarget:o}}function Wi(t,n){for(var o=n+"Capture",c=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=pa(t,o),h!=null&&c.unshift(Aa(t,h,u)),h=pa(t,n),h!=null&&c.push(Aa(t,h,u))),t=t.return}return c}function _o(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dh(t,n,o,c,u){for(var h=n._reactName,w=[];o!==null&&o!==c;){var P=o,F=P.alternate,te=P.stateNode;if(F!==null&&F===c)break;P.tag===5&&te!==null&&(P=te,u?(F=pa(o,h),F!=null&&w.unshift(Aa(o,F,P))):u||(F=pa(o,h),F!=null&&w.push(Aa(o,F,P)))),o=o.return}w.length!==0&&t.push({event:n,listeners:w})}var _x=/\r\n?/g,Cx=/\u0000|\uFFFD/g;function uh(t){return(typeof t=="string"?t:""+t).replace(_x,`
`).replace(Cx,"")}function Hi(t,n,o){if(n=uh(n),uh(t)!==n&&o)throw Error(i(425))}function Ui(){}var nc=null,rc=null;function oc(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ac=typeof setTimeout=="function"?setTimeout:void 0,jx=typeof clearTimeout=="function"?clearTimeout:void 0,ph=typeof Promise=="function"?Promise:void 0,Sx=typeof queueMicrotask=="function"?queueMicrotask:typeof ph<"u"?function(t){return ph.resolve(null).then(t).catch(Nx)}:ac;function Nx(t){setTimeout(function(){throw t})}function ic(t,n){var o=n,c=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(c===0){t.removeChild(u),ba(n);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=u}while(o);ba(n)}function wr(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function hh(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return t;n--}else o==="/$"&&n++}t=t.previousSibling}return null}var Co=Math.random().toString(36).slice(2),qn="__reactFiber$"+Co,$a="__reactProps$"+Co,Jn="__reactContainer$"+Co,sc="__reactEvents$"+Co,Mx="__reactListeners$"+Co,Rx="__reactHandles$"+Co;function qr(t){var n=t[qn];if(n)return n;for(var o=t.parentNode;o;){if(n=o[Jn]||o[qn]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(t=hh(t);t!==null;){if(o=t[qn])return o;t=hh(t)}return n}t=o,o=t.parentNode}return null}function Ta(t){return t=t[qn]||t[Jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function jo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function qi(t){return t[$a]||null}var lc=[],So=-1;function br(t){return{current:t}}function at(t){0>So||(t.current=lc[So],lc[So]=null,So--)}function tt(t,n){So++,lc[So]=t.current,t.current=n}var kr={},Et=br(kr),Ut=br(!1),Vr=kr;function No(t,n){var o=t.type.contextTypes;if(!o)return kr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===n)return c.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in o)u[h]=n[h];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=u),u}function qt(t){return t=t.childContextTypes,t!=null}function Vi(){at(Ut),at(Et)}function fh(t,n,o){if(Et.current!==kr)throw Error(i(168));tt(Et,n),tt(Ut,o)}function mh(t,n,o){var c=t.stateNode;if(n=n.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var u in c)if(!(u in n))throw Error(i(108,H(t)||"Unknown",u));return V({},o,c)}function Gi(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kr,Vr=Et.current,tt(Et,t),tt(Ut,Ut.current),!0}function gh(t,n,o){var c=t.stateNode;if(!c)throw Error(i(169));o?(t=mh(t,n,Vr),c.__reactInternalMemoizedMergedChildContext=t,at(Ut),at(Et),tt(Et,t)):at(Ut),tt(Ut,o)}var er=null,Yi=!1,cc=!1;function vh(t){er===null?er=[t]:er.push(t)}function Lx(t){Yi=!0,vh(t)}function _r(){if(!cc&&er!==null){cc=!0;var t=0,n=Xe;try{var o=er;for(Xe=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}er=null,Yi=!1}catch(u){throw er!==null&&(er=er.slice(t+1)),yp(Al,_r),u}finally{Xe=n,cc=!1}}return null}var Mo=[],Ro=0,Ki=null,Qi=0,gn=[],vn=0,Gr=null,tr=1,nr="";function Yr(t,n){Mo[Ro++]=Qi,Mo[Ro++]=Ki,Ki=t,Qi=n}function xh(t,n,o){gn[vn++]=tr,gn[vn++]=nr,gn[vn++]=Gr,Gr=t;var c=tr;t=nr;var u=32-An(c)-1;c&=~(1<<u),o+=1;var h=32-An(n)+u;if(30<h){var w=u-u%5;h=(c&(1<<w)-1).toString(32),c>>=w,u-=w,tr=1<<32-An(n)+u|o<<u|c,nr=h+t}else tr=1<<h|o<<u|c,nr=t}function dc(t){t.return!==null&&(Yr(t,1),xh(t,1,0))}function uc(t){for(;t===Ki;)Ki=Mo[--Ro],Mo[Ro]=null,Qi=Mo[--Ro],Mo[Ro]=null;for(;t===Gr;)Gr=gn[--vn],gn[vn]=null,nr=gn[--vn],gn[vn]=null,tr=gn[--vn],gn[vn]=null}var rn=null,on=null,st=!1,Tn=null;function yh(t,n){var o=bn(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=t,n=t.deletions,n===null?(t.deletions=[o],t.flags|=16):n.push(o)}function wh(t,n){switch(t.tag){case 5:var o=t.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,rn=t,on=wr(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,rn=t,on=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=Gr!==null?{id:tr,overflow:nr}:null,t.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=bn(18,null,null,0),o.stateNode=n,o.return=t,t.child=o,rn=t,on=null,!0):!1;default:return!1}}function pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hc(t){if(st){var n=on;if(n){var o=n;if(!wh(t,n)){if(pc(t))throw Error(i(418));n=wr(o.nextSibling);var c=rn;n&&wh(t,n)?yh(c,o):(t.flags=t.flags&-4097|2,st=!1,rn=t)}}else{if(pc(t))throw Error(i(418));t.flags=t.flags&-4097|2,st=!1,rn=t}}}function bh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;rn=t}function Zi(t){if(t!==rn)return!1;if(!st)return bh(t),st=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!oc(t.type,t.memoizedProps)),n&&(n=on)){if(pc(t))throw kh(),Error(i(418));for(;n;)yh(t,n),n=wr(n.nextSibling)}if(bh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(n===0){on=wr(t.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}t=t.nextSibling}on=null}}else on=rn?wr(t.stateNode.nextSibling):null;return!0}function kh(){for(var t=on;t;)t=wr(t.nextSibling)}function Lo(){on=rn=null,st=!1}function fc(t){Tn===null?Tn=[t]:Tn.push(t)}var Ax=O.ReactCurrentBatchConfig;function Ia(t,n,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var c=o.stateNode}if(!c)throw Error(i(147,t));var u=c,h=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===h?n.ref:(n=function(w){var P=u.refs;w===null?delete P[h]:P[h]=w},n._stringRef=h,n)}if(typeof t!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,t))}return t}function Xi(t,n){throw t=Object.prototype.toString.call(n),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function _h(t){var n=t._init;return n(t._payload)}function Ch(t){function n(K,U){if(t){var J=K.deletions;J===null?(K.deletions=[U],K.flags|=16):J.push(U)}}function o(K,U){if(!t)return null;for(;U!==null;)n(K,U),U=U.sibling;return null}function c(K,U){for(K=new Map;U!==null;)U.key!==null?K.set(U.key,U):K.set(U.index,U),U=U.sibling;return K}function u(K,U){return K=Ar(K,U),K.index=0,K.sibling=null,K}function h(K,U,J){return K.index=J,t?(J=K.alternate,J!==null?(J=J.index,J<U?(K.flags|=2,U):J):(K.flags|=2,U)):(K.flags|=1048576,U)}function w(K){return t&&K.alternate===null&&(K.flags|=2),K}function P(K,U,J,ve){return U===null||U.tag!==6?(U=ad(J,K.mode,ve),U.return=K,U):(U=u(U,J),U.return=K,U)}function F(K,U,J,ve){var je=J.type;return je===I?he(K,U,J.props.children,ve,J.key):U!==null&&(U.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===le&&_h(je)===U.type)?(ve=u(U,J.props),ve.ref=Ia(K,U,J),ve.return=K,ve):(ve=ks(J.type,J.key,J.props,null,K.mode,ve),ve.ref=Ia(K,U,J),ve.return=K,ve)}function te(K,U,J,ve){return U===null||U.tag!==4||U.stateNode.containerInfo!==J.containerInfo||U.stateNode.implementation!==J.implementation?(U=id(J,K.mode,ve),U.return=K,U):(U=u(U,J.children||[]),U.return=K,U)}function he(K,U,J,ve,je){return U===null||U.tag!==7?(U=no(J,K.mode,ve,je),U.return=K,U):(U=u(U,J),U.return=K,U)}function ge(K,U,J){if(typeof U=="string"&&U!==""||typeof U=="number")return U=ad(""+U,K.mode,J),U.return=K,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case L:return J=ks(U.type,U.key,U.props,null,K.mode,J),J.ref=Ia(K,null,U),J.return=K,J;case R:return U=id(U,K.mode,J),U.return=K,U;case le:var ve=U._init;return ge(K,ve(U._payload),J)}if(We(U)||D(U))return U=no(U,K.mode,J,null),U.return=K,U;Xi(K,U)}return null}function pe(K,U,J,ve){var je=U!==null?U.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return je!==null?null:P(K,U,""+J,ve);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case L:return J.key===je?F(K,U,J,ve):null;case R:return J.key===je?te(K,U,J,ve):null;case le:return je=J._init,pe(K,U,je(J._payload),ve)}if(We(J)||D(J))return je!==null?null:he(K,U,J,ve,null);Xi(K,J)}return null}function be(K,U,J,ve,je){if(typeof ve=="string"&&ve!==""||typeof ve=="number")return K=K.get(J)||null,P(U,K,""+ve,je);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case L:return K=K.get(ve.key===null?J:ve.key)||null,F(U,K,ve,je);case R:return K=K.get(ve.key===null?J:ve.key)||null,te(U,K,ve,je);case le:var Ne=ve._init;return be(K,U,J,Ne(ve._payload),je)}if(We(ve)||D(ve))return K=K.get(J)||null,he(U,K,ve,je,null);Xi(U,ve)}return null}function _e(K,U,J,ve){for(var je=null,Ne=null,Me=U,Le=U=0,St=null;Me!==null&&Le<J.length;Le++){Me.index>Le?(St=Me,Me=null):St=Me.sibling;var Ke=pe(K,Me,J[Le],ve);if(Ke===null){Me===null&&(Me=St);break}t&&Me&&Ke.alternate===null&&n(K,Me),U=h(Ke,U,Le),Ne===null?je=Ke:Ne.sibling=Ke,Ne=Ke,Me=St}if(Le===J.length)return o(K,Me),st&&Yr(K,Le),je;if(Me===null){for(;Le<J.length;Le++)Me=ge(K,J[Le],ve),Me!==null&&(U=h(Me,U,Le),Ne===null?je=Me:Ne.sibling=Me,Ne=Me);return st&&Yr(K,Le),je}for(Me=c(K,Me);Le<J.length;Le++)St=be(Me,K,Le,J[Le],ve),St!==null&&(t&&St.alternate!==null&&Me.delete(St.key===null?Le:St.key),U=h(St,U,Le),Ne===null?je=St:Ne.sibling=St,Ne=St);return t&&Me.forEach(function($r){return n(K,$r)}),st&&Yr(K,Le),je}function Ce(K,U,J,ve){var je=D(J);if(typeof je!="function")throw Error(i(150));if(J=je.call(J),J==null)throw Error(i(151));for(var Ne=je=null,Me=U,Le=U=0,St=null,Ke=J.next();Me!==null&&!Ke.done;Le++,Ke=J.next()){Me.index>Le?(St=Me,Me=null):St=Me.sibling;var $r=pe(K,Me,Ke.value,ve);if($r===null){Me===null&&(Me=St);break}t&&Me&&$r.alternate===null&&n(K,Me),U=h($r,U,Le),Ne===null?je=$r:Ne.sibling=$r,Ne=$r,Me=St}if(Ke.done)return o(K,Me),st&&Yr(K,Le),je;if(Me===null){for(;!Ke.done;Le++,Ke=J.next())Ke=ge(K,Ke.value,ve),Ke!==null&&(U=h(Ke,U,Le),Ne===null?je=Ke:Ne.sibling=Ke,Ne=Ke);return st&&Yr(K,Le),je}for(Me=c(K,Me);!Ke.done;Le++,Ke=J.next())Ke=be(Me,K,Le,Ke.value,ve),Ke!==null&&(t&&Ke.alternate!==null&&Me.delete(Ke.key===null?Le:Ke.key),U=h(Ke,U,Le),Ne===null?je=Ke:Ne.sibling=Ke,Ne=Ke);return t&&Me.forEach(function(dy){return n(K,dy)}),st&&Yr(K,Le),je}function ht(K,U,J,ve){if(typeof J=="object"&&J!==null&&J.type===I&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case L:e:{for(var je=J.key,Ne=U;Ne!==null;){if(Ne.key===je){if(je=J.type,je===I){if(Ne.tag===7){o(K,Ne.sibling),U=u(Ne,J.props.children),U.return=K,K=U;break e}}else if(Ne.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===le&&_h(je)===Ne.type){o(K,Ne.sibling),U=u(Ne,J.props),U.ref=Ia(K,Ne,J),U.return=K,K=U;break e}o(K,Ne);break}else n(K,Ne);Ne=Ne.sibling}J.type===I?(U=no(J.props.children,K.mode,ve,J.key),U.return=K,K=U):(ve=ks(J.type,J.key,J.props,null,K.mode,ve),ve.ref=Ia(K,U,J),ve.return=K,K=ve)}return w(K);case R:e:{for(Ne=J.key;U!==null;){if(U.key===Ne)if(U.tag===4&&U.stateNode.containerInfo===J.containerInfo&&U.stateNode.implementation===J.implementation){o(K,U.sibling),U=u(U,J.children||[]),U.return=K,K=U;break e}else{o(K,U);break}else n(K,U);U=U.sibling}U=id(J,K.mode,ve),U.return=K,K=U}return w(K);case le:return Ne=J._init,ht(K,U,Ne(J._payload),ve)}if(We(J))return _e(K,U,J,ve);if(D(J))return Ce(K,U,J,ve);Xi(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,U!==null&&U.tag===6?(o(K,U.sibling),U=u(U,J),U.return=K,K=U):(o(K,U),U=ad(J,K.mode,ve),U.return=K,K=U),w(K)):o(K,U)}return ht}var Ao=Ch(!0),jh=Ch(!1),Ji=br(null),es=null,$o=null,mc=null;function gc(){mc=$o=es=null}function vc(t){var n=Ji.current;at(Ji),t._currentValue=n}function xc(t,n,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,c!==null&&(c.childLanes|=n)):c!==null&&(c.childLanes&n)!==n&&(c.childLanes|=n),t===o)break;t=t.return}}function To(t,n){es=t,mc=$o=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(Vt=!0),t.firstContext=null)}function xn(t){var n=t._currentValue;if(mc!==t)if(t={context:t,memoizedValue:n,next:null},$o===null){if(es===null)throw Error(i(308));$o=t,es.dependencies={lanes:0,firstContext:t}}else $o=$o.next=t;return n}var Kr=null;function yc(t){Kr===null?Kr=[t]:Kr.push(t)}function Sh(t,n,o,c){var u=n.interleaved;return u===null?(o.next=o,yc(n)):(o.next=u.next,u.next=o),n.interleaved=o,rr(t,c)}function rr(t,n){t.lanes|=n;var o=t.alternate;for(o!==null&&(o.lanes|=n),o=t,t=t.return;t!==null;)t.childLanes|=n,o=t.alternate,o!==null&&(o.childLanes|=n),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Cr=!1;function wc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nh(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function or(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function jr(t,n,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Ye&2)!==0){var u=c.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),c.pending=n,rr(t,o)}return u=c.interleaved,u===null?(n.next=n,yc(c)):(n.next=u.next,u.next=n),c.interleaved=n,rr(t,o)}function ts(t,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var c=n.lanes;c&=t.pendingLanes,o|=c,n.lanes=o,Il(t,o)}}function Mh(t,n){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var u=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?u=h=w:h=h.next=w,o=o.next}while(o!==null);h===null?u=h=n:h=h.next=n}else u=h=n;o={baseState:c.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=n:t.next=n,o.lastBaseUpdate=n}function ns(t,n,o,c){var u=t.updateQueue;Cr=!1;var h=u.firstBaseUpdate,w=u.lastBaseUpdate,P=u.shared.pending;if(P!==null){u.shared.pending=null;var F=P,te=F.next;F.next=null,w===null?h=te:w.next=te,w=F;var he=t.alternate;he!==null&&(he=he.updateQueue,P=he.lastBaseUpdate,P!==w&&(P===null?he.firstBaseUpdate=te:P.next=te,he.lastBaseUpdate=F))}if(h!==null){var ge=u.baseState;w=0,he=te=F=null,P=h;do{var pe=P.lane,be=P.eventTime;if((c&pe)===pe){he!==null&&(he=he.next={eventTime:be,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var _e=t,Ce=P;switch(pe=n,be=o,Ce.tag){case 1:if(_e=Ce.payload,typeof _e=="function"){ge=_e.call(be,ge,pe);break e}ge=_e;break e;case 3:_e.flags=_e.flags&-65537|128;case 0:if(_e=Ce.payload,pe=typeof _e=="function"?_e.call(be,ge,pe):_e,pe==null)break e;ge=V({},ge,pe);break e;case 2:Cr=!0}}P.callback!==null&&P.lane!==0&&(t.flags|=64,pe=u.effects,pe===null?u.effects=[P]:pe.push(P))}else be={eventTime:be,lane:pe,tag:P.tag,payload:P.payload,callback:P.callback,next:null},he===null?(te=he=be,F=ge):he=he.next=be,w|=pe;if(P=P.next,P===null){if(P=u.shared.pending,P===null)break;pe=P,P=pe.next,pe.next=null,u.lastBaseUpdate=pe,u.shared.pending=null}}while(!0);if(he===null&&(F=ge),u.baseState=F,u.firstBaseUpdate=te,u.lastBaseUpdate=he,n=u.shared.interleaved,n!==null){u=n;do w|=u.lane,u=u.next;while(u!==n)}else h===null&&(u.shared.lanes=0);Xr|=w,t.lanes=w,t.memoizedState=ge}}function Rh(t,n,o){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var c=t[n],u=c.callback;if(u!==null){if(c.callback=null,c=o,typeof u!="function")throw Error(i(191,u));u.call(c)}}}var Ea={},Vn=br(Ea),Pa=br(Ea),za=br(Ea);function Qr(t){if(t===Ea)throw Error(i(174));return t}function bc(t,n){switch(tt(za,n),tt(Pa,t),tt(Vn,Ea),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:rt(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=rt(n,t)}at(Vn),tt(Vn,n)}function Io(){at(Vn),at(Pa),at(za)}function Lh(t){Qr(za.current);var n=Qr(Vn.current),o=rt(n,t.type);n!==o&&(tt(Pa,t),tt(Vn,o))}function kc(t){Pa.current===t&&(at(Vn),at(Pa))}var lt=br(0);function rs(t){for(var n=t;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var _c=[];function Cc(){for(var t=0;t<_c.length;t++)_c[t]._workInProgressVersionPrimary=null;_c.length=0}var os=O.ReactCurrentDispatcher,jc=O.ReactCurrentBatchConfig,Zr=0,ct=null,wt=null,Ct=null,as=!1,Oa=!1,Da=0,$x=0;function Pt(){throw Error(i(321))}function Sc(t,n){if(n===null)return!1;for(var o=0;o<n.length&&o<t.length;o++)if(!$n(t[o],n[o]))return!1;return!0}function Nc(t,n,o,c,u,h){if(Zr=h,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,os.current=t===null||t.memoizedState===null?Px:zx,t=o(c,u),Oa){h=0;do{if(Oa=!1,Da=0,25<=h)throw Error(i(301));h+=1,Ct=wt=null,n.updateQueue=null,os.current=Ox,t=o(c,u)}while(Oa)}if(os.current=ls,n=wt!==null&&wt.next!==null,Zr=0,Ct=wt=ct=null,as=!1,n)throw Error(i(300));return t}function Mc(){var t=Da!==0;return Da=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?ct.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function yn(){if(wt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var n=Ct===null?ct.memoizedState:Ct.next;if(n!==null)Ct=n,wt=t;else{if(t===null)throw Error(i(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Ct===null?ct.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function Fa(t,n){return typeof n=="function"?n(t):n}function Rc(t){var n=yn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var c=wt,u=c.baseQueue,h=o.pending;if(h!==null){if(u!==null){var w=u.next;u.next=h.next,h.next=w}c.baseQueue=u=h,o.pending=null}if(u!==null){h=u.next,c=c.baseState;var P=w=null,F=null,te=h;do{var he=te.lane;if((Zr&he)===he)F!==null&&(F=F.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),c=te.hasEagerState?te.eagerState:t(c,te.action);else{var ge={lane:he,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};F===null?(P=F=ge,w=c):F=F.next=ge,ct.lanes|=he,Xr|=he}te=te.next}while(te!==null&&te!==h);F===null?w=c:F.next=P,$n(c,n.memoizedState)||(Vt=!0),n.memoizedState=c,n.baseState=w,n.baseQueue=F,o.lastRenderedState=c}if(t=o.interleaved,t!==null){u=t;do h=u.lane,ct.lanes|=h,Xr|=h,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function Lc(t){var n=yn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var c=o.dispatch,u=o.pending,h=n.memoizedState;if(u!==null){o.pending=null;var w=u=u.next;do h=t(h,w.action),w=w.next;while(w!==u);$n(h,n.memoizedState)||(Vt=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),o.lastRenderedState=h}return[h,c]}function Ah(){}function $h(t,n){var o=ct,c=yn(),u=n(),h=!$n(c.memoizedState,u);if(h&&(c.memoizedState=u,Vt=!0),c=c.queue,Ac(Eh.bind(null,o,c,t),[t]),c.getSnapshot!==n||h||Ct!==null&&Ct.memoizedState.tag&1){if(o.flags|=2048,Ba(9,Ih.bind(null,o,c,u,n),void 0,null),jt===null)throw Error(i(349));(Zr&30)!==0||Th(o,n,u)}return u}function Th(t,n,o){t.flags|=16384,t={getSnapshot:n,value:o},n=ct.updateQueue,n===null?(n={lastEffect:null,stores:null},ct.updateQueue=n,n.stores=[t]):(o=n.stores,o===null?n.stores=[t]:o.push(t))}function Ih(t,n,o,c){n.value=o,n.getSnapshot=c,Ph(n)&&zh(t)}function Eh(t,n,o){return o(function(){Ph(n)&&zh(t)})}function Ph(t){var n=t.getSnapshot;t=t.value;try{var o=n();return!$n(t,o)}catch{return!0}}function zh(t){var n=rr(t,1);n!==null&&zn(n,t,1,-1)}function Oh(t){var n=Gn();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},n.queue=t,t=t.dispatch=Ex.bind(null,ct,t),[n.memoizedState,t]}function Ba(t,n,o,c){return t={tag:t,create:n,destroy:o,deps:c,next:null},n=ct.updateQueue,n===null?(n={lastEffect:null,stores:null},ct.updateQueue=n,n.lastEffect=t.next=t):(o=n.lastEffect,o===null?n.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,n.lastEffect=t)),t}function Dh(){return yn().memoizedState}function is(t,n,o,c){var u=Gn();ct.flags|=t,u.memoizedState=Ba(1|n,o,void 0,c===void 0?null:c)}function ss(t,n,o,c){var u=yn();c=c===void 0?null:c;var h=void 0;if(wt!==null){var w=wt.memoizedState;if(h=w.destroy,c!==null&&Sc(c,w.deps)){u.memoizedState=Ba(n,o,h,c);return}}ct.flags|=t,u.memoizedState=Ba(1|n,o,h,c)}function Fh(t,n){return is(8390656,8,t,n)}function Ac(t,n){return ss(2048,8,t,n)}function Bh(t,n){return ss(4,2,t,n)}function Wh(t,n){return ss(4,4,t,n)}function Hh(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Uh(t,n,o){return o=o!=null?o.concat([t]):null,ss(4,4,Hh.bind(null,n,t),o)}function $c(){}function qh(t,n){var o=yn();n=n===void 0?null:n;var c=o.memoizedState;return c!==null&&n!==null&&Sc(n,c[1])?c[0]:(o.memoizedState=[t,n],t)}function Vh(t,n){var o=yn();n=n===void 0?null:n;var c=o.memoizedState;return c!==null&&n!==null&&Sc(n,c[1])?c[0]:(t=t(),o.memoizedState=[t,n],t)}function Gh(t,n,o){return(Zr&21)===0?(t.baseState&&(t.baseState=!1,Vt=!0),t.memoizedState=o):($n(o,n)||(o=_p(),ct.lanes|=o,Xr|=o,t.baseState=!0),n)}function Tx(t,n){var o=Xe;Xe=o!==0&&4>o?o:4,t(!0);var c=jc.transition;jc.transition={};try{t(!1),n()}finally{Xe=o,jc.transition=c}}function Yh(){return yn().memoizedState}function Ix(t,n,o){var c=Rr(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Kh(t))Qh(n,o);else if(o=Sh(t,n,o,c),o!==null){var u=Wt();zn(o,t,c,u),Zh(o,n,c)}}function Ex(t,n,o){var c=Rr(t),u={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Kh(t))Qh(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var w=n.lastRenderedState,P=h(w,o);if(u.hasEagerState=!0,u.eagerState=P,$n(P,w)){var F=n.interleaved;F===null?(u.next=u,yc(n)):(u.next=F.next,F.next=u),n.interleaved=u;return}}catch{}finally{}o=Sh(t,n,u,c),o!==null&&(u=Wt(),zn(o,t,c,u),Zh(o,n,c))}}function Kh(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function Qh(t,n){Oa=as=!0;var o=t.pending;o===null?n.next=n:(n.next=o.next,o.next=n),t.pending=n}function Zh(t,n,o){if((o&4194240)!==0){var c=n.lanes;c&=t.pendingLanes,o|=c,n.lanes=o,Il(t,o)}}var ls={readContext:xn,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},Px={readContext:xn,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:xn,useEffect:Fh,useImperativeHandle:function(t,n,o){return o=o!=null?o.concat([t]):null,is(4194308,4,Hh.bind(null,n,t),o)},useLayoutEffect:function(t,n){return is(4194308,4,t,n)},useInsertionEffect:function(t,n){return is(4,2,t,n)},useMemo:function(t,n){var o=Gn();return n=n===void 0?null:n,t=t(),o.memoizedState=[t,n],t},useReducer:function(t,n,o){var c=Gn();return n=o!==void 0?o(n):n,c.memoizedState=c.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},c.queue=t,t=t.dispatch=Ix.bind(null,ct,t),[c.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:Oh,useDebugValue:$c,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=Oh(!1),n=t[0];return t=Tx.bind(null,t[1]),Gn().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,o){var c=ct,u=Gn();if(st){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),jt===null)throw Error(i(349));(Zr&30)!==0||Th(c,n,o)}u.memoizedState=o;var h={value:o,getSnapshot:n};return u.queue=h,Fh(Eh.bind(null,c,h,t),[t]),c.flags|=2048,Ba(9,Ih.bind(null,c,h,o,n),void 0,null),o},useId:function(){var t=Gn(),n=jt.identifierPrefix;if(st){var o=nr,c=tr;o=(c&~(1<<32-An(c)-1)).toString(32)+o,n=":"+n+"R"+o,o=Da++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=$x++,n=":"+n+"r"+o.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},zx={readContext:xn,useCallback:qh,useContext:xn,useEffect:Ac,useImperativeHandle:Uh,useInsertionEffect:Bh,useLayoutEffect:Wh,useMemo:Vh,useReducer:Rc,useRef:Dh,useState:function(){return Rc(Fa)},useDebugValue:$c,useDeferredValue:function(t){var n=yn();return Gh(n,wt.memoizedState,t)},useTransition:function(){var t=Rc(Fa)[0],n=yn().memoizedState;return[t,n]},useMutableSource:Ah,useSyncExternalStore:$h,useId:Yh,unstable_isNewReconciler:!1},Ox={readContext:xn,useCallback:qh,useContext:xn,useEffect:Ac,useImperativeHandle:Uh,useInsertionEffect:Bh,useLayoutEffect:Wh,useMemo:Vh,useReducer:Lc,useRef:Dh,useState:function(){return Lc(Fa)},useDebugValue:$c,useDeferredValue:function(t){var n=yn();return wt===null?n.memoizedState=t:Gh(n,wt.memoizedState,t)},useTransition:function(){var t=Lc(Fa)[0],n=yn().memoizedState;return[t,n]},useMutableSource:Ah,useSyncExternalStore:$h,useId:Yh,unstable_isNewReconciler:!1};function In(t,n){if(t&&t.defaultProps){n=V({},n),t=t.defaultProps;for(var o in t)n[o]===void 0&&(n[o]=t[o]);return n}return n}function Tc(t,n,o,c){n=t.memoizedState,o=o(c,n),o=o==null?n:V({},n,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var cs={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,n,o){t=t._reactInternals;var c=Wt(),u=Rr(t),h=or(c,u);h.payload=n,o!=null&&(h.callback=o),n=jr(t,h,u),n!==null&&(zn(n,t,u,c),ts(n,t,u))},enqueueReplaceState:function(t,n,o){t=t._reactInternals;var c=Wt(),u=Rr(t),h=or(c,u);h.tag=1,h.payload=n,o!=null&&(h.callback=o),n=jr(t,h,u),n!==null&&(zn(n,t,u,c),ts(n,t,u))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var o=Wt(),c=Rr(t),u=or(o,c);u.tag=2,n!=null&&(u.callback=n),n=jr(t,u,c),n!==null&&(zn(n,t,c,o),ts(n,t,c))}};function Xh(t,n,o,c,u,h,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,h,w):n.prototype&&n.prototype.isPureReactComponent?!Na(o,c)||!Na(u,h):!0}function Jh(t,n,o){var c=!1,u=kr,h=n.contextType;return typeof h=="object"&&h!==null?h=xn(h):(u=qt(n)?Vr:Et.current,c=n.contextTypes,h=(c=c!=null)?No(t,u):kr),n=new n(o,h),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=cs,t.stateNode=n,n._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),n}function e1(t,n,o,c){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,c),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,c),n.state!==t&&cs.enqueueReplaceState(n,n.state,null)}function Ic(t,n,o,c){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},wc(t);var h=n.contextType;typeof h=="object"&&h!==null?u.context=xn(h):(h=qt(n)?Vr:Et.current,u.context=No(t,h)),u.state=t.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Tc(t,n,h,o),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&cs.enqueueReplaceState(u,u.state,null),ns(t,o,u,c),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function Eo(t,n){try{var o="",c=n;do o+=ie(c),c=c.return;while(c);var u=o}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:n,stack:u,digest:null}}function Ec(t,n,o){return{value:t,source:null,stack:o??null,digest:n??null}}function Pc(t,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var Dx=typeof WeakMap=="function"?WeakMap:Map;function t1(t,n,o){o=or(-1,o),o.tag=3,o.payload={element:null};var c=n.value;return o.callback=function(){gs||(gs=!0,Zc=c),Pc(t,n)},o}function n1(t,n,o){o=or(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var u=n.value;o.payload=function(){return c(u)},o.callback=function(){Pc(t,n)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Pc(t,n),typeof c!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var w=n.stack;this.componentDidCatch(n.value,{componentStack:w!==null?w:""})}),o}function r1(t,n,o){var c=t.pingCache;if(c===null){c=t.pingCache=new Dx;var u=new Set;c.set(n,u)}else u=c.get(n),u===void 0&&(u=new Set,c.set(n,u));u.has(o)||(u.add(o),t=Jx.bind(null,t,n,o),n.then(t,t))}function o1(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function a1(t,n,o,c,u){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=or(-1,1),n.tag=2,jr(o,n,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var Fx=O.ReactCurrentOwner,Vt=!1;function Bt(t,n,o,c){n.child=t===null?jh(n,null,o,c):Ao(n,t.child,o,c)}function i1(t,n,o,c,u){o=o.render;var h=n.ref;return To(n,u),c=Nc(t,n,o,c,h,u),o=Mc(),t!==null&&!Vt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,ar(t,n,u)):(st&&o&&dc(n),n.flags|=1,Bt(t,n,c,u),n.child)}function s1(t,n,o,c,u){if(t===null){var h=o.type;return typeof h=="function"&&!od(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=h,l1(t,n,h,c,u)):(t=ks(o.type,null,c,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,(t.lanes&u)===0){var w=h.memoizedProps;if(o=o.compare,o=o!==null?o:Na,o(w,c)&&t.ref===n.ref)return ar(t,n,u)}return n.flags|=1,t=Ar(h,c),t.ref=n.ref,t.return=n,n.child=t}function l1(t,n,o,c,u){if(t!==null){var h=t.memoizedProps;if(Na(h,c)&&t.ref===n.ref)if(Vt=!1,n.pendingProps=c=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Vt=!0);else return n.lanes=t.lanes,ar(t,n,u)}return zc(t,n,o,c,u)}function c1(t,n,o){var c=n.pendingProps,u=c.children,h=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(zo,an),an|=o;else{if((o&1073741824)===0)return t=h!==null?h.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,tt(zo,an),an|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:o,tt(zo,an),an|=c}else h!==null?(c=h.baseLanes|o,n.memoizedState=null):c=o,tt(zo,an),an|=c;return Bt(t,n,u,o),n.child}function d1(t,n){var o=n.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function zc(t,n,o,c,u){var h=qt(o)?Vr:Et.current;return h=No(n,h),To(n,u),o=Nc(t,n,o,c,h,u),c=Mc(),t!==null&&!Vt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,ar(t,n,u)):(st&&c&&dc(n),n.flags|=1,Bt(t,n,o,u),n.child)}function u1(t,n,o,c,u){if(qt(o)){var h=!0;Gi(n)}else h=!1;if(To(n,u),n.stateNode===null)us(t,n),Jh(n,o,c),Ic(n,o,c,u),c=!0;else if(t===null){var w=n.stateNode,P=n.memoizedProps;w.props=P;var F=w.context,te=o.contextType;typeof te=="object"&&te!==null?te=xn(te):(te=qt(o)?Vr:Et.current,te=No(n,te));var he=o.getDerivedStateFromProps,ge=typeof he=="function"||typeof w.getSnapshotBeforeUpdate=="function";ge||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(P!==c||F!==te)&&e1(n,w,c,te),Cr=!1;var pe=n.memoizedState;w.state=pe,ns(n,c,w,u),F=n.memoizedState,P!==c||pe!==F||Ut.current||Cr?(typeof he=="function"&&(Tc(n,o,he,c),F=n.memoizedState),(P=Cr||Xh(n,o,P,c,pe,F,te))?(ge||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(n.flags|=4194308)):(typeof w.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=c,n.memoizedState=F),w.props=c,w.state=F,w.context=te,c=P):(typeof w.componentDidMount=="function"&&(n.flags|=4194308),c=!1)}else{w=n.stateNode,Nh(t,n),P=n.memoizedProps,te=n.type===n.elementType?P:In(n.type,P),w.props=te,ge=n.pendingProps,pe=w.context,F=o.contextType,typeof F=="object"&&F!==null?F=xn(F):(F=qt(o)?Vr:Et.current,F=No(n,F));var be=o.getDerivedStateFromProps;(he=typeof be=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(P!==ge||pe!==F)&&e1(n,w,c,F),Cr=!1,pe=n.memoizedState,w.state=pe,ns(n,c,w,u);var _e=n.memoizedState;P!==ge||pe!==_e||Ut.current||Cr?(typeof be=="function"&&(Tc(n,o,be,c),_e=n.memoizedState),(te=Cr||Xh(n,o,te,c,pe,_e,F)||!1)?(he||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,_e,F),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,_e,F)),typeof w.componentDidUpdate=="function"&&(n.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof w.componentDidUpdate!="function"||P===t.memoizedProps&&pe===t.memoizedState||(n.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&pe===t.memoizedState||(n.flags|=1024),n.memoizedProps=c,n.memoizedState=_e),w.props=c,w.state=_e,w.context=F,c=te):(typeof w.componentDidUpdate!="function"||P===t.memoizedProps&&pe===t.memoizedState||(n.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&pe===t.memoizedState||(n.flags|=1024),c=!1)}return Oc(t,n,o,c,h,u)}function Oc(t,n,o,c,u,h){d1(t,n);var w=(n.flags&128)!==0;if(!c&&!w)return u&&gh(n,o,!1),ar(t,n,h);c=n.stateNode,Fx.current=n;var P=w&&typeof o.getDerivedStateFromError!="function"?null:c.render();return n.flags|=1,t!==null&&w?(n.child=Ao(n,t.child,null,h),n.child=Ao(n,null,P,h)):Bt(t,n,P,h),n.memoizedState=c.state,u&&gh(n,o,!0),n.child}function p1(t){var n=t.stateNode;n.pendingContext?fh(t,n.pendingContext,n.pendingContext!==n.context):n.context&&fh(t,n.context,!1),bc(t,n.containerInfo)}function h1(t,n,o,c,u){return Lo(),fc(u),n.flags|=256,Bt(t,n,o,c),n.child}var Dc={dehydrated:null,treeContext:null,retryLane:0};function Fc(t){return{baseLanes:t,cachePool:null,transitions:null}}function f1(t,n,o){var c=n.pendingProps,u=lt.current,h=!1,w=(n.flags&128)!==0,P;if((P=w)||(P=t!==null&&t.memoizedState===null?!1:(u&2)!==0),P?(h=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),tt(lt,u&1),t===null)return hc(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(w=c.children,t=c.fallback,h?(c=n.mode,h=n.child,w={mode:"hidden",children:w},(c&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=w):h=_s(w,c,0,null),t=no(t,c,o,null),h.return=n,t.return=n,h.sibling=t,n.child=h,n.child.memoizedState=Fc(o),n.memoizedState=Dc,t):Bc(n,w));if(u=t.memoizedState,u!==null&&(P=u.dehydrated,P!==null))return Bx(t,n,w,c,P,u,o);if(h){h=c.fallback,w=n.mode,u=t.child,P=u.sibling;var F={mode:"hidden",children:c.children};return(w&1)===0&&n.child!==u?(c=n.child,c.childLanes=0,c.pendingProps=F,n.deletions=null):(c=Ar(u,F),c.subtreeFlags=u.subtreeFlags&14680064),P!==null?h=Ar(P,h):(h=no(h,w,o,null),h.flags|=2),h.return=n,c.return=n,c.sibling=h,n.child=c,c=h,h=n.child,w=t.child.memoizedState,w=w===null?Fc(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},h.memoizedState=w,h.childLanes=t.childLanes&~o,n.memoizedState=Dc,c}return h=t.child,t=h.sibling,c=Ar(h,{mode:"visible",children:c.children}),(n.mode&1)===0&&(c.lanes=o),c.return=n,c.sibling=null,t!==null&&(o=n.deletions,o===null?(n.deletions=[t],n.flags|=16):o.push(t)),n.child=c,n.memoizedState=null,c}function Bc(t,n){return n=_s({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function ds(t,n,o,c){return c!==null&&fc(c),Ao(n,t.child,null,o),t=Bc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Bx(t,n,o,c,u,h,w){if(o)return n.flags&256?(n.flags&=-257,c=Ec(Error(i(422))),ds(t,n,w,c)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(h=c.fallback,u=n.mode,c=_s({mode:"visible",children:c.children},u,0,null),h=no(h,u,w,null),h.flags|=2,c.return=n,h.return=n,c.sibling=h,n.child=c,(n.mode&1)!==0&&Ao(n,t.child,null,w),n.child.memoizedState=Fc(w),n.memoizedState=Dc,h);if((n.mode&1)===0)return ds(t,n,w,null);if(u.data==="$!"){if(c=u.nextSibling&&u.nextSibling.dataset,c)var P=c.dgst;return c=P,h=Error(i(419)),c=Ec(h,c,void 0),ds(t,n,w,c)}if(P=(w&t.childLanes)!==0,Vt||P){if(c=jt,c!==null){switch(w&-w){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(c.suspendedLanes|w))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,rr(t,u),zn(c,t,u,-1))}return rd(),c=Ec(Error(i(421))),ds(t,n,w,c)}return u.data==="$?"?(n.flags|=128,n.child=t.child,n=ey.bind(null,t),u._reactRetry=n,null):(t=h.treeContext,on=wr(u.nextSibling),rn=n,st=!0,Tn=null,t!==null&&(gn[vn++]=tr,gn[vn++]=nr,gn[vn++]=Gr,tr=t.id,nr=t.overflow,Gr=n),n=Bc(n,c.children),n.flags|=4096,n)}function m1(t,n,o){t.lanes|=n;var c=t.alternate;c!==null&&(c.lanes|=n),xc(t.return,n,o)}function Wc(t,n,o,c,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=o,h.tailMode=u)}function g1(t,n,o){var c=n.pendingProps,u=c.revealOrder,h=c.tail;if(Bt(t,n,c.children,o),c=lt.current,(c&2)!==0)c=c&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&m1(t,o,n);else if(t.tag===19)m1(t,o,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(tt(lt,c),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(o=n.child,u=null;o!==null;)t=o.alternate,t!==null&&rs(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=n.child,n.child=null):(u=o.sibling,o.sibling=null),Wc(n,!1,u,o,h);break;case"backwards":for(o=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&rs(t)===null){n.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}Wc(n,!0,o,null,h);break;case"together":Wc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function us(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function ar(t,n,o){if(t!==null&&(n.dependencies=t.dependencies),Xr|=n.lanes,(o&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(i(153));if(n.child!==null){for(t=n.child,o=Ar(t,t.pendingProps),n.child=o,o.return=n;t.sibling!==null;)t=t.sibling,o=o.sibling=Ar(t,t.pendingProps),o.return=n;o.sibling=null}return n.child}function Wx(t,n,o){switch(n.tag){case 3:p1(n),Lo();break;case 5:Lh(n);break;case 1:qt(n.type)&&Gi(n);break;case 4:bc(n,n.stateNode.containerInfo);break;case 10:var c=n.type._context,u=n.memoizedProps.value;tt(Ji,c._currentValue),c._currentValue=u;break;case 13:if(c=n.memoizedState,c!==null)return c.dehydrated!==null?(tt(lt,lt.current&1),n.flags|=128,null):(o&n.child.childLanes)!==0?f1(t,n,o):(tt(lt,lt.current&1),t=ar(t,n,o),t!==null?t.sibling:null);tt(lt,lt.current&1);break;case 19:if(c=(o&n.childLanes)!==0,(t.flags&128)!==0){if(c)return g1(t,n,o);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),tt(lt,lt.current),c)break;return null;case 22:case 23:return n.lanes=0,c1(t,n,o)}return ar(t,n,o)}var v1,Hc,x1,y1;v1=function(t,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Hc=function(){},x1=function(t,n,o,c){var u=t.memoizedProps;if(u!==c){t=n.stateNode,Qr(Vn.current);var h=null;switch(o){case"input":u=xe(t,u),c=xe(t,c),h=[];break;case"select":u=V({},u,{value:void 0}),c=V({},c,{value:void 0}),h=[];break;case"textarea":u=dt(t,u),c=dt(t,c),h=[];break;default:typeof u.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Ui)}Ee(o,c);var w;o=null;for(te in u)if(!c.hasOwnProperty(te)&&u.hasOwnProperty(te)&&u[te]!=null)if(te==="style"){var P=u[te];for(w in P)P.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(l.hasOwnProperty(te)?h||(h=[]):(h=h||[]).push(te,null));for(te in c){var F=c[te];if(P=u!=null?u[te]:void 0,c.hasOwnProperty(te)&&F!==P&&(F!=null||P!=null))if(te==="style")if(P){for(w in P)!P.hasOwnProperty(w)||F&&F.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in F)F.hasOwnProperty(w)&&P[w]!==F[w]&&(o||(o={}),o[w]=F[w])}else o||(h||(h=[]),h.push(te,o)),o=F;else te==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,P=P?P.__html:void 0,F!=null&&P!==F&&(h=h||[]).push(te,F)):te==="children"?typeof F!="string"&&typeof F!="number"||(h=h||[]).push(te,""+F):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(l.hasOwnProperty(te)?(F!=null&&te==="onScroll"&&ot("scroll",t),h||P===F||(h=[])):(h=h||[]).push(te,F))}o&&(h=h||[]).push("style",o);var te=h;(n.updateQueue=te)&&(n.flags|=4)}},y1=function(t,n,o,c){o!==c&&(n.flags|=4)};function Wa(t,n){if(!st)switch(t.tailMode){case"hidden":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function zt(t){var n=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(n)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,c|=u.subtreeFlags&14680064,c|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,c|=u.subtreeFlags,c|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=c,t.childLanes=o,n}function Hx(t,n,o){var c=n.pendingProps;switch(uc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(n),null;case 1:return qt(n.type)&&Vi(),zt(n),null;case 3:return c=n.stateNode,Io(),at(Ut),at(Et),Cc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Zi(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tn!==null&&(ed(Tn),Tn=null))),Hc(t,n),zt(n),null;case 5:kc(n);var u=Qr(za.current);if(o=n.type,t!==null&&n.stateNode!=null)x1(t,n,o,c,u),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!c){if(n.stateNode===null)throw Error(i(166));return zt(n),null}if(t=Qr(Vn.current),Zi(n)){c=n.stateNode,o=n.type;var h=n.memoizedProps;switch(c[qn]=n,c[$a]=h,t=(n.mode&1)!==0,o){case"dialog":ot("cancel",c),ot("close",c);break;case"iframe":case"object":case"embed":ot("load",c);break;case"video":case"audio":for(u=0;u<Ra.length;u++)ot(Ra[u],c);break;case"source":ot("error",c);break;case"img":case"image":case"link":ot("error",c),ot("load",c);break;case"details":ot("toggle",c);break;case"input":Re(c,h),ot("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},ot("invalid",c);break;case"textarea":De(c,h),ot("invalid",c)}Ee(o,h),u=null;for(var w in h)if(h.hasOwnProperty(w)){var P=h[w];w==="children"?typeof P=="string"?c.textContent!==P&&(h.suppressHydrationWarning!==!0&&Hi(c.textContent,P,t),u=["children",P]):typeof P=="number"&&c.textContent!==""+P&&(h.suppressHydrationWarning!==!0&&Hi(c.textContent,P,t),u=["children",""+P]):l.hasOwnProperty(w)&&P!=null&&w==="onScroll"&&ot("scroll",c)}switch(o){case"input":ce(c),Oe(c,h,!0);break;case"textarea":ce(c),et(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=Ui)}c=u,n.updateQueue=c,c!==null&&(n.flags|=4)}else{w=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=It(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=w.createElement(o,{is:c.is}):(t=w.createElement(o),o==="select"&&(w=t,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):t=w.createElementNS(t,o),t[qn]=n,t[$a]=c,v1(t,n,!1,!1),n.stateNode=t;e:{switch(w=He(o,c),o){case"dialog":ot("cancel",t),ot("close",t),u=c;break;case"iframe":case"object":case"embed":ot("load",t),u=c;break;case"video":case"audio":for(u=0;u<Ra.length;u++)ot(Ra[u],t);u=c;break;case"source":ot("error",t),u=c;break;case"img":case"image":case"link":ot("error",t),ot("load",t),u=c;break;case"details":ot("toggle",t),u=c;break;case"input":Re(t,c),u=xe(t,c),ot("invalid",t);break;case"option":u=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},u=V({},c,{value:void 0}),ot("invalid",t);break;case"textarea":De(t,c),u=dt(t,c),ot("invalid",t);break;default:u=c}Ee(o,u),P=u;for(h in P)if(P.hasOwnProperty(h)){var F=P[h];h==="style"?de(t,F):h==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Hn(t,F)):h==="children"?typeof F=="string"?(o!=="textarea"||F!=="")&&mn(t,F):typeof F=="number"&&mn(t,""+F):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?F!=null&&h==="onScroll"&&ot("scroll",t):F!=null&&j(t,h,F,w))}switch(o){case"input":ce(t),Oe(t,c,!1);break;case"textarea":ce(t),et(t);break;case"option":c.value!=null&&t.setAttribute("value",""+T(c.value));break;case"select":t.multiple=!!c.multiple,h=c.value,h!=null?Qe(t,!!c.multiple,h,!1):c.defaultValue!=null&&Qe(t,!!c.multiple,c.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=Ui)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return zt(n),null;case 6:if(t&&n.stateNode!=null)y1(t,n,t.memoizedProps,c);else{if(typeof c!="string"&&n.stateNode===null)throw Error(i(166));if(o=Qr(za.current),Qr(Vn.current),Zi(n)){if(c=n.stateNode,o=n.memoizedProps,c[qn]=n,(h=c.nodeValue!==o)&&(t=rn,t!==null))switch(t.tag){case 3:Hi(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hi(c.nodeValue,o,(t.mode&1)!==0)}h&&(n.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[qn]=n,n.stateNode=c}return zt(n),null;case 13:if(at(lt),c=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&on!==null&&(n.mode&1)!==0&&(n.flags&128)===0)kh(),Lo(),n.flags|=98560,h=!1;else if(h=Zi(n),c!==null&&c.dehydrated!==null){if(t===null){if(!h)throw Error(i(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[qn]=n}else Lo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;zt(n),h=!1}else Tn!==null&&(ed(Tn),Tn=null),h=!0;if(!h)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=o,n):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(lt.current&1)!==0?bt===0&&(bt=3):rd())),n.updateQueue!==null&&(n.flags|=4),zt(n),null);case 4:return Io(),Hc(t,n),t===null&&La(n.stateNode.containerInfo),zt(n),null;case 10:return vc(n.type._context),zt(n),null;case 17:return qt(n.type)&&Vi(),zt(n),null;case 19:if(at(lt),h=n.memoizedState,h===null)return zt(n),null;if(c=(n.flags&128)!==0,w=h.rendering,w===null)if(c)Wa(h,!1);else{if(bt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(w=rs(t),w!==null){for(n.flags|=128,Wa(h,!1),c=w.updateQueue,c!==null&&(n.updateQueue=c,n.flags|=4),n.subtreeFlags=0,c=o,o=n.child;o!==null;)h=o,t=c,h.flags&=14680066,w=h.alternate,w===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=w.childLanes,h.lanes=w.lanes,h.child=w.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=w.memoizedProps,h.memoizedState=w.memoizedState,h.updateQueue=w.updateQueue,h.type=w.type,t=w.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return tt(lt,lt.current&1|2),n.child}t=t.sibling}h.tail!==null&&pt()>Oo&&(n.flags|=128,c=!0,Wa(h,!1),n.lanes=4194304)}else{if(!c)if(t=rs(w),t!==null){if(n.flags|=128,c=!0,o=t.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),Wa(h,!0),h.tail===null&&h.tailMode==="hidden"&&!w.alternate&&!st)return zt(n),null}else 2*pt()-h.renderingStartTime>Oo&&o!==1073741824&&(n.flags|=128,c=!0,Wa(h,!1),n.lanes=4194304);h.isBackwards?(w.sibling=n.child,n.child=w):(o=h.last,o!==null?o.sibling=w:n.child=w,h.last=w)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=pt(),n.sibling=null,o=lt.current,tt(lt,c?o&1|2:o&1),n):(zt(n),null);case 22:case 23:return nd(),c=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(n.flags|=8192),c&&(n.mode&1)!==0?(an&1073741824)!==0&&(zt(n),n.subtreeFlags&6&&(n.flags|=8192)):zt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function Ux(t,n){switch(uc(n),n.tag){case 1:return qt(n.type)&&Vi(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Io(),at(Ut),at(Et),Cc(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return kc(n),null;case 13:if(at(lt),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Lo()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return at(lt),null;case 4:return Io(),null;case 10:return vc(n.type._context),null;case 22:case 23:return nd(),null;case 24:return null;default:return null}}var ps=!1,Ot=!1,qx=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Po(t,n){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){ut(t,n,c)}else o.current=null}function Uc(t,n,o){try{o()}catch(c){ut(t,n,c)}}var w1=!1;function Vx(t,n){if(nc=$i,t=Xp(),Yl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var u=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var w=0,P=-1,F=-1,te=0,he=0,ge=t,pe=null;t:for(;;){for(var be;ge!==o||u!==0&&ge.nodeType!==3||(P=w+u),ge!==h||c!==0&&ge.nodeType!==3||(F=w+c),ge.nodeType===3&&(w+=ge.nodeValue.length),(be=ge.firstChild)!==null;)pe=ge,ge=be;for(;;){if(ge===t)break t;if(pe===o&&++te===u&&(P=w),pe===h&&++he===c&&(F=w),(be=ge.nextSibling)!==null)break;ge=pe,pe=ge.parentNode}ge=be}o=P===-1||F===-1?null:{start:P,end:F}}else o=null}o=o||{start:0,end:0}}else o=null;for(rc={focusedElem:t,selectionRange:o},$i=!1,ke=n;ke!==null;)if(n=ke,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,ke=t;else for(;ke!==null;){n=ke;try{var _e=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(_e!==null){var Ce=_e.memoizedProps,ht=_e.memoizedState,K=n.stateNode,U=K.getSnapshotBeforeUpdate(n.elementType===n.type?Ce:In(n.type,Ce),ht);K.__reactInternalSnapshotBeforeUpdate=U}break;case 3:var J=n.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(ve){ut(n,n.return,ve)}if(t=n.sibling,t!==null){t.return=n.return,ke=t;break}ke=n.return}return _e=w1,w1=!1,_e}function Ha(t,n,o){var c=n.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var u=c=c.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&Uc(n,o,h)}u=u.next}while(u!==c)}}function hs(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==n)}}function qc(t){var n=t.ref;if(n!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof n=="function"?n(t):n.current=t}}function b1(t){var n=t.alternate;n!==null&&(t.alternate=null,b1(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[qn],delete n[$a],delete n[sc],delete n[Mx],delete n[Rx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function k1(t){return t.tag===5||t.tag===3||t.tag===4}function _1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vc(t,n,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(t,n):o.insertBefore(t,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(t,o)):(n=o,n.appendChild(t)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=Ui));else if(c!==4&&(t=t.child,t!==null))for(Vc(t,n,o),t=t.sibling;t!==null;)Vc(t,n,o),t=t.sibling}function Gc(t,n,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,n?o.insertBefore(t,n):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Gc(t,n,o),t=t.sibling;t!==null;)Gc(t,n,o),t=t.sibling}var $t=null,En=!1;function Sr(t,n,o){for(o=o.child;o!==null;)C1(t,n,o),o=o.sibling}function C1(t,n,o){if(Un&&typeof Un.onCommitFiberUnmount=="function")try{Un.onCommitFiberUnmount(Si,o)}catch{}switch(o.tag){case 5:Ot||Po(o,n);case 6:var c=$t,u=En;$t=null,Sr(t,n,o),$t=c,En=u,$t!==null&&(En?(t=$t,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):$t.removeChild(o.stateNode));break;case 18:$t!==null&&(En?(t=$t,o=o.stateNode,t.nodeType===8?ic(t.parentNode,o):t.nodeType===1&&ic(t,o),ba(t)):ic($t,o.stateNode));break;case 4:c=$t,u=En,$t=o.stateNode.containerInfo,En=!0,Sr(t,n,o),$t=c,En=u;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){u=c=c.next;do{var h=u,w=h.destroy;h=h.tag,w!==void 0&&((h&2)!==0||(h&4)!==0)&&Uc(o,n,w),u=u.next}while(u!==c)}Sr(t,n,o);break;case 1:if(!Ot&&(Po(o,n),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(P){ut(o,n,P)}Sr(t,n,o);break;case 21:Sr(t,n,o);break;case 22:o.mode&1?(Ot=(c=Ot)||o.memoizedState!==null,Sr(t,n,o),Ot=c):Sr(t,n,o);break;default:Sr(t,n,o)}}function j1(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new qx),n.forEach(function(c){var u=ty.bind(null,t,c);o.has(c)||(o.add(c),c.then(u,u))})}}function Pn(t,n){var o=n.deletions;if(o!==null)for(var c=0;c<o.length;c++){var u=o[c];try{var h=t,w=n,P=w;e:for(;P!==null;){switch(P.tag){case 5:$t=P.stateNode,En=!1;break e;case 3:$t=P.stateNode.containerInfo,En=!0;break e;case 4:$t=P.stateNode.containerInfo,En=!0;break e}P=P.return}if($t===null)throw Error(i(160));C1(h,w,u),$t=null,En=!1;var F=u.alternate;F!==null&&(F.return=null),u.return=null}catch(te){ut(u,n,te)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)S1(n,t),n=n.sibling}function S1(t,n){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(n,t),Yn(t),c&4){try{Ha(3,t,t.return),hs(3,t)}catch(Ce){ut(t,t.return,Ce)}try{Ha(5,t,t.return)}catch(Ce){ut(t,t.return,Ce)}}break;case 1:Pn(n,t),Yn(t),c&512&&o!==null&&Po(o,o.return);break;case 5:if(Pn(n,t),Yn(t),c&512&&o!==null&&Po(o,o.return),t.flags&32){var u=t.stateNode;try{mn(u,"")}catch(Ce){ut(t,t.return,Ce)}}if(c&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,w=o!==null?o.memoizedProps:h,P=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{P==="input"&&h.type==="radio"&&h.name!=null&&ze(u,h),He(P,w);var te=He(P,h);for(w=0;w<F.length;w+=2){var he=F[w],ge=F[w+1];he==="style"?de(u,ge):he==="dangerouslySetInnerHTML"?Hn(u,ge):he==="children"?mn(u,ge):j(u,he,ge,te)}switch(P){case"input":Ve(u,h);break;case"textarea":gt(u,h);break;case"select":var pe=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var be=h.value;be!=null?Qe(u,!!h.multiple,be,!1):pe!==!!h.multiple&&(h.defaultValue!=null?Qe(u,!!h.multiple,h.defaultValue,!0):Qe(u,!!h.multiple,h.multiple?[]:"",!1))}u[$a]=h}catch(Ce){ut(t,t.return,Ce)}}break;case 6:if(Pn(n,t),Yn(t),c&4){if(t.stateNode===null)throw Error(i(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch(Ce){ut(t,t.return,Ce)}}break;case 3:if(Pn(n,t),Yn(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ba(n.containerInfo)}catch(Ce){ut(t,t.return,Ce)}break;case 4:Pn(n,t),Yn(t);break;case 13:Pn(n,t),Yn(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Qc=pt())),c&4&&j1(t);break;case 22:if(he=o!==null&&o.memoizedState!==null,t.mode&1?(Ot=(te=Ot)||he,Pn(n,t),Ot=te):Pn(n,t),Yn(t),c&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!he&&(t.mode&1)!==0)for(ke=t,he=t.child;he!==null;){for(ge=ke=he;ke!==null;){switch(pe=ke,be=pe.child,pe.tag){case 0:case 11:case 14:case 15:Ha(4,pe,pe.return);break;case 1:Po(pe,pe.return);var _e=pe.stateNode;if(typeof _e.componentWillUnmount=="function"){c=pe,o=pe.return;try{n=c,_e.props=n.memoizedProps,_e.state=n.memoizedState,_e.componentWillUnmount()}catch(Ce){ut(c,o,Ce)}}break;case 5:Po(pe,pe.return);break;case 22:if(pe.memoizedState!==null){R1(ge);continue}}be!==null?(be.return=pe,ke=be):R1(ge)}he=he.sibling}e:for(he=null,ge=t;;){if(ge.tag===5){if(he===null){he=ge;try{u=ge.stateNode,te?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(P=ge.stateNode,F=ge.memoizedProps.style,w=F!=null&&F.hasOwnProperty("display")?F.display:null,P.style.display=ae("display",w))}catch(Ce){ut(t,t.return,Ce)}}}else if(ge.tag===6){if(he===null)try{ge.stateNode.nodeValue=te?"":ge.memoizedProps}catch(Ce){ut(t,t.return,Ce)}}else if((ge.tag!==22&&ge.tag!==23||ge.memoizedState===null||ge===t)&&ge.child!==null){ge.child.return=ge,ge=ge.child;continue}if(ge===t)break e;for(;ge.sibling===null;){if(ge.return===null||ge.return===t)break e;he===ge&&(he=null),ge=ge.return}he===ge&&(he=null),ge.sibling.return=ge.return,ge=ge.sibling}}break;case 19:Pn(n,t),Yn(t),c&4&&j1(t);break;case 21:break;default:Pn(n,t),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{e:{for(var o=t.return;o!==null;){if(k1(o)){var c=o;break e}o=o.return}throw Error(i(160))}switch(c.tag){case 5:var u=c.stateNode;c.flags&32&&(mn(u,""),c.flags&=-33);var h=_1(t);Gc(t,h,u);break;case 3:case 4:var w=c.stateNode.containerInfo,P=_1(t);Vc(t,P,w);break;default:throw Error(i(161))}}catch(F){ut(t,t.return,F)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Gx(t,n,o){ke=t,N1(t)}function N1(t,n,o){for(var c=(t.mode&1)!==0;ke!==null;){var u=ke,h=u.child;if(u.tag===22&&c){var w=u.memoizedState!==null||ps;if(!w){var P=u.alternate,F=P!==null&&P.memoizedState!==null||Ot;P=ps;var te=Ot;if(ps=w,(Ot=F)&&!te)for(ke=u;ke!==null;)w=ke,F=w.child,w.tag===22&&w.memoizedState!==null?L1(u):F!==null?(F.return=w,ke=F):L1(u);for(;h!==null;)ke=h,N1(h),h=h.sibling;ke=u,ps=P,Ot=te}M1(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,ke=h):M1(t)}}function M1(t){for(;ke!==null;){var n=ke;if((n.flags&8772)!==0){var o=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ot||hs(5,n);break;case 1:var c=n.stateNode;if(n.flags&4&&!Ot)if(o===null)c.componentDidMount();else{var u=n.elementType===n.type?o.memoizedProps:In(n.type,o.memoizedProps);c.componentDidUpdate(u,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=n.updateQueue;h!==null&&Rh(n,h,c);break;case 3:var w=n.updateQueue;if(w!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}Rh(n,w,o)}break;case 5:var P=n.stateNode;if(o===null&&n.flags&4){o=P;var F=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&o.focus();break;case"img":F.src&&(o.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var te=n.alternate;if(te!==null){var he=te.memoizedState;if(he!==null){var ge=he.dehydrated;ge!==null&&ba(ge)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Ot||n.flags&512&&qc(n)}catch(pe){ut(n,n.return,pe)}}if(n===t){ke=null;break}if(o=n.sibling,o!==null){o.return=n.return,ke=o;break}ke=n.return}}function R1(t){for(;ke!==null;){var n=ke;if(n===t){ke=null;break}var o=n.sibling;if(o!==null){o.return=n.return,ke=o;break}ke=n.return}}function L1(t){for(;ke!==null;){var n=ke;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{hs(4,n)}catch(F){ut(n,o,F)}break;case 1:var c=n.stateNode;if(typeof c.componentDidMount=="function"){var u=n.return;try{c.componentDidMount()}catch(F){ut(n,u,F)}}var h=n.return;try{qc(n)}catch(F){ut(n,h,F)}break;case 5:var w=n.return;try{qc(n)}catch(F){ut(n,w,F)}}}catch(F){ut(n,n.return,F)}if(n===t){ke=null;break}var P=n.sibling;if(P!==null){P.return=n.return,ke=P;break}ke=n.return}}var Yx=Math.ceil,fs=O.ReactCurrentDispatcher,Yc=O.ReactCurrentOwner,wn=O.ReactCurrentBatchConfig,Ye=0,jt=null,vt=null,Tt=0,an=0,zo=br(0),bt=0,Ua=null,Xr=0,ms=0,Kc=0,qa=null,Gt=null,Qc=0,Oo=1/0,ir=null,gs=!1,Zc=null,Nr=null,vs=!1,Mr=null,xs=0,Va=0,Xc=null,ys=-1,ws=0;function Wt(){return(Ye&6)!==0?pt():ys!==-1?ys:ys=pt()}function Rr(t){return(t.mode&1)===0?1:(Ye&2)!==0&&Tt!==0?Tt&-Tt:Ax.transition!==null?(ws===0&&(ws=_p()),ws):(t=Xe,t!==0||(t=window.event,t=t===void 0?16:$p(t.type)),t)}function zn(t,n,o,c){if(50<Va)throw Va=0,Xc=null,Error(i(185));ga(t,o,c),((Ye&2)===0||t!==jt)&&(t===jt&&((Ye&2)===0&&(ms|=o),bt===4&&Lr(t,Tt)),Yt(t,c),o===1&&Ye===0&&(n.mode&1)===0&&(Oo=pt()+500,Yi&&_r()))}function Yt(t,n){var o=t.callbackNode;Av(t,n);var c=Ri(t,t===jt?Tt:0);if(c===0)o!==null&&wp(o),t.callbackNode=null,t.callbackPriority=0;else if(n=c&-c,t.callbackPriority!==n){if(o!=null&&wp(o),n===1)t.tag===0?Lx($1.bind(null,t)):vh($1.bind(null,t)),Sx(function(){(Ye&6)===0&&_r()}),o=null;else{switch(Cp(c)){case 1:o=Al;break;case 4:o=bp;break;case 16:o=ji;break;case 536870912:o=kp;break;default:o=ji}o=F1(o,A1.bind(null,t))}t.callbackPriority=n,t.callbackNode=o}}function A1(t,n){if(ys=-1,ws=0,(Ye&6)!==0)throw Error(i(327));var o=t.callbackNode;if(Do()&&t.callbackNode!==o)return null;var c=Ri(t,t===jt?Tt:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||n)n=bs(t,c);else{n=c;var u=Ye;Ye|=2;var h=I1();(jt!==t||Tt!==n)&&(ir=null,Oo=pt()+500,eo(t,n));do try{Zx();break}catch(P){T1(t,P)}while(!0);gc(),fs.current=h,Ye=u,vt!==null?n=0:(jt=null,Tt=0,n=bt)}if(n!==0){if(n===2&&(u=$l(t),u!==0&&(c=u,n=Jc(t,u))),n===1)throw o=Ua,eo(t,0),Lr(t,c),Yt(t,pt()),o;if(n===6)Lr(t,c);else{if(u=t.current.alternate,(c&30)===0&&!Kx(u)&&(n=bs(t,c),n===2&&(h=$l(t),h!==0&&(c=h,n=Jc(t,h))),n===1))throw o=Ua,eo(t,0),Lr(t,c),Yt(t,pt()),o;switch(t.finishedWork=u,t.finishedLanes=c,n){case 0:case 1:throw Error(i(345));case 2:to(t,Gt,ir);break;case 3:if(Lr(t,c),(c&130023424)===c&&(n=Qc+500-pt(),10<n)){if(Ri(t,0)!==0)break;if(u=t.suspendedLanes,(u&c)!==c){Wt(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=ac(to.bind(null,t,Gt,ir),n);break}to(t,Gt,ir);break;case 4:if(Lr(t,c),(c&4194240)===c)break;for(n=t.eventTimes,u=-1;0<c;){var w=31-An(c);h=1<<w,w=n[w],w>u&&(u=w),c&=~h}if(c=u,c=pt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Yx(c/1960))-c,10<c){t.timeoutHandle=ac(to.bind(null,t,Gt,ir),c);break}to(t,Gt,ir);break;case 5:to(t,Gt,ir);break;default:throw Error(i(329))}}}return Yt(t,pt()),t.callbackNode===o?A1.bind(null,t):null}function Jc(t,n){var o=qa;return t.current.memoizedState.isDehydrated&&(eo(t,n).flags|=256),t=bs(t,n),t!==2&&(n=Gt,Gt=o,n!==null&&ed(n)),t}function ed(t){Gt===null?Gt=t:Gt.push.apply(Gt,t)}function Kx(t){for(var n=t;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var u=o[c],h=u.getSnapshot;u=u.value;try{if(!$n(h(),u))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Lr(t,n){for(n&=~Kc,n&=~ms,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var o=31-An(n),c=1<<o;t[o]=-1,n&=~c}}function $1(t){if((Ye&6)!==0)throw Error(i(327));Do();var n=Ri(t,0);if((n&1)===0)return Yt(t,pt()),null;var o=bs(t,n);if(t.tag!==0&&o===2){var c=$l(t);c!==0&&(n=c,o=Jc(t,c))}if(o===1)throw o=Ua,eo(t,0),Lr(t,n),Yt(t,pt()),o;if(o===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,to(t,Gt,ir),Yt(t,pt()),null}function td(t,n){var o=Ye;Ye|=1;try{return t(n)}finally{Ye=o,Ye===0&&(Oo=pt()+500,Yi&&_r())}}function Jr(t){Mr!==null&&Mr.tag===0&&(Ye&6)===0&&Do();var n=Ye;Ye|=1;var o=wn.transition,c=Xe;try{if(wn.transition=null,Xe=1,t)return t()}finally{Xe=c,wn.transition=o,Ye=n,(Ye&6)===0&&_r()}}function nd(){an=zo.current,at(zo)}function eo(t,n){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,jx(o)),vt!==null)for(o=vt.return;o!==null;){var c=o;switch(uc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Vi();break;case 3:Io(),at(Ut),at(Et),Cc();break;case 5:kc(c);break;case 4:Io();break;case 13:at(lt);break;case 19:at(lt);break;case 10:vc(c.type._context);break;case 22:case 23:nd()}o=o.return}if(jt=t,vt=t=Ar(t.current,null),Tt=an=n,bt=0,Ua=null,Kc=ms=Xr=0,Gt=qa=null,Kr!==null){for(n=0;n<Kr.length;n++)if(o=Kr[n],c=o.interleaved,c!==null){o.interleaved=null;var u=c.next,h=o.pending;if(h!==null){var w=h.next;h.next=u,c.next=w}o.pending=c}Kr=null}return t}function T1(t,n){do{var o=vt;try{if(gc(),os.current=ls,as){for(var c=ct.memoizedState;c!==null;){var u=c.queue;u!==null&&(u.pending=null),c=c.next}as=!1}if(Zr=0,Ct=wt=ct=null,Oa=!1,Da=0,Yc.current=null,o===null||o.return===null){bt=1,Ua=n,vt=null;break}e:{var h=t,w=o.return,P=o,F=n;if(n=Tt,P.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var te=F,he=P,ge=he.tag;if((he.mode&1)===0&&(ge===0||ge===11||ge===15)){var pe=he.alternate;pe?(he.updateQueue=pe.updateQueue,he.memoizedState=pe.memoizedState,he.lanes=pe.lanes):(he.updateQueue=null,he.memoizedState=null)}var be=o1(w);if(be!==null){be.flags&=-257,a1(be,w,P,h,n),be.mode&1&&r1(h,te,n),n=be,F=te;var _e=n.updateQueue;if(_e===null){var Ce=new Set;Ce.add(F),n.updateQueue=Ce}else _e.add(F);break e}else{if((n&1)===0){r1(h,te,n),rd();break e}F=Error(i(426))}}else if(st&&P.mode&1){var ht=o1(w);if(ht!==null){(ht.flags&65536)===0&&(ht.flags|=256),a1(ht,w,P,h,n),fc(Eo(F,P));break e}}h=F=Eo(F,P),bt!==4&&(bt=2),qa===null?qa=[h]:qa.push(h),h=w;do{switch(h.tag){case 3:h.flags|=65536,n&=-n,h.lanes|=n;var K=t1(h,F,n);Mh(h,K);break e;case 1:P=F;var U=h.type,J=h.stateNode;if((h.flags&128)===0&&(typeof U.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(Nr===null||!Nr.has(J)))){h.flags|=65536,n&=-n,h.lanes|=n;var ve=n1(h,P,n);Mh(h,ve);break e}}h=h.return}while(h!==null)}P1(o)}catch(je){n=je,vt===o&&o!==null&&(vt=o=o.return);continue}break}while(!0)}function I1(){var t=fs.current;return fs.current=ls,t===null?ls:t}function rd(){(bt===0||bt===3||bt===2)&&(bt=4),jt===null||(Xr&268435455)===0&&(ms&268435455)===0||Lr(jt,Tt)}function bs(t,n){var o=Ye;Ye|=2;var c=I1();(jt!==t||Tt!==n)&&(ir=null,eo(t,n));do try{Qx();break}catch(u){T1(t,u)}while(!0);if(gc(),Ye=o,fs.current=c,vt!==null)throw Error(i(261));return jt=null,Tt=0,bt}function Qx(){for(;vt!==null;)E1(vt)}function Zx(){for(;vt!==null&&!kv();)E1(vt)}function E1(t){var n=D1(t.alternate,t,an);t.memoizedProps=t.pendingProps,n===null?P1(t):vt=n,Yc.current=null}function P1(t){var n=t;do{var o=n.alternate;if(t=n.return,(n.flags&32768)===0){if(o=Hx(o,n,an),o!==null){vt=o;return}}else{if(o=Ux(o,n),o!==null){o.flags&=32767,vt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,vt=null;return}}if(n=n.sibling,n!==null){vt=n;return}vt=n=t}while(n!==null);bt===0&&(bt=5)}function to(t,n,o){var c=Xe,u=wn.transition;try{wn.transition=null,Xe=1,Xx(t,n,o,c)}finally{wn.transition=u,Xe=c}return null}function Xx(t,n,o,c){do Do();while(Mr!==null);if((Ye&6)!==0)throw Error(i(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if($v(t,h),t===jt&&(vt=jt=null,Tt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||vs||(vs=!0,F1(ji,function(){return Do(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=wn.transition,wn.transition=null;var w=Xe;Xe=1;var P=Ye;Ye|=4,Yc.current=null,Vx(t,o),S1(o,t),xx(rc),$i=!!nc,rc=nc=null,t.current=o,Gx(o),_v(),Ye=P,Xe=w,wn.transition=h}else t.current=o;if(vs&&(vs=!1,Mr=t,xs=u),h=t.pendingLanes,h===0&&(Nr=null),Sv(o.stateNode),Yt(t,pt()),n!==null)for(c=t.onRecoverableError,o=0;o<n.length;o++)u=n[o],c(u.value,{componentStack:u.stack,digest:u.digest});if(gs)throw gs=!1,t=Zc,Zc=null,t;return(xs&1)!==0&&t.tag!==0&&Do(),h=t.pendingLanes,(h&1)!==0?t===Xc?Va++:(Va=0,Xc=t):Va=0,_r(),null}function Do(){if(Mr!==null){var t=Cp(xs),n=wn.transition,o=Xe;try{if(wn.transition=null,Xe=16>t?16:t,Mr===null)var c=!1;else{if(t=Mr,Mr=null,xs=0,(Ye&6)!==0)throw Error(i(331));var u=Ye;for(Ye|=4,ke=t.current;ke!==null;){var h=ke,w=h.child;if((ke.flags&16)!==0){var P=h.deletions;if(P!==null){for(var F=0;F<P.length;F++){var te=P[F];for(ke=te;ke!==null;){var he=ke;switch(he.tag){case 0:case 11:case 15:Ha(8,he,h)}var ge=he.child;if(ge!==null)ge.return=he,ke=ge;else for(;ke!==null;){he=ke;var pe=he.sibling,be=he.return;if(b1(he),he===te){ke=null;break}if(pe!==null){pe.return=be,ke=pe;break}ke=be}}}var _e=h.alternate;if(_e!==null){var Ce=_e.child;if(Ce!==null){_e.child=null;do{var ht=Ce.sibling;Ce.sibling=null,Ce=ht}while(Ce!==null)}}ke=h}}if((h.subtreeFlags&2064)!==0&&w!==null)w.return=h,ke=w;else e:for(;ke!==null;){if(h=ke,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ha(9,h,h.return)}var K=h.sibling;if(K!==null){K.return=h.return,ke=K;break e}ke=h.return}}var U=t.current;for(ke=U;ke!==null;){w=ke;var J=w.child;if((w.subtreeFlags&2064)!==0&&J!==null)J.return=w,ke=J;else e:for(w=U;ke!==null;){if(P=ke,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:hs(9,P)}}catch(je){ut(P,P.return,je)}if(P===w){ke=null;break e}var ve=P.sibling;if(ve!==null){ve.return=P.return,ke=ve;break e}ke=P.return}}if(Ye=u,_r(),Un&&typeof Un.onPostCommitFiberRoot=="function")try{Un.onPostCommitFiberRoot(Si,t)}catch{}c=!0}return c}finally{Xe=o,wn.transition=n}}return!1}function z1(t,n,o){n=Eo(o,n),n=t1(t,n,1),t=jr(t,n,1),n=Wt(),t!==null&&(ga(t,1,n),Yt(t,n))}function ut(t,n,o){if(t.tag===3)z1(t,t,o);else for(;n!==null;){if(n.tag===3){z1(n,t,o);break}else if(n.tag===1){var c=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Nr===null||!Nr.has(c))){t=Eo(o,t),t=n1(n,t,1),n=jr(n,t,1),t=Wt(),n!==null&&(ga(n,1,t),Yt(n,t));break}}n=n.return}}function Jx(t,n,o){var c=t.pingCache;c!==null&&c.delete(n),n=Wt(),t.pingedLanes|=t.suspendedLanes&o,jt===t&&(Tt&o)===o&&(bt===4||bt===3&&(Tt&130023424)===Tt&&500>pt()-Qc?eo(t,0):Kc|=o),Yt(t,n)}function O1(t,n){n===0&&((t.mode&1)===0?n=1:(n=Mi,Mi<<=1,(Mi&130023424)===0&&(Mi=4194304)));var o=Wt();t=rr(t,n),t!==null&&(ga(t,n,o),Yt(t,o))}function ey(t){var n=t.memoizedState,o=0;n!==null&&(o=n.retryLane),O1(t,o)}function ty(t,n){var o=0;switch(t.tag){case 13:var c=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(i(314))}c!==null&&c.delete(n),O1(t,o)}var D1;D1=function(t,n,o){if(t!==null)if(t.memoizedProps!==n.pendingProps||Ut.current)Vt=!0;else{if((t.lanes&o)===0&&(n.flags&128)===0)return Vt=!1,Wx(t,n,o);Vt=(t.flags&131072)!==0}else Vt=!1,st&&(n.flags&1048576)!==0&&xh(n,Qi,n.index);switch(n.lanes=0,n.tag){case 2:var c=n.type;us(t,n),t=n.pendingProps;var u=No(n,Et.current);To(n,o),u=Nc(null,n,c,t,u,o);var h=Mc();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,qt(c)?(h=!0,Gi(n)):h=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,wc(n),u.updater=cs,n.stateNode=u,u._reactInternals=n,Ic(n,c,t,o),n=Oc(null,n,c,!0,h,o)):(n.tag=0,st&&h&&dc(n),Bt(null,n,u,o),n=n.child),n;case 16:c=n.elementType;e:{switch(us(t,n),t=n.pendingProps,u=c._init,c=u(c._payload),n.type=c,u=n.tag=ry(c),t=In(c,t),u){case 0:n=zc(null,n,c,t,o);break e;case 1:n=u1(null,n,c,t,o);break e;case 11:n=i1(null,n,c,t,o);break e;case 14:n=s1(null,n,c,In(c.type,t),o);break e}throw Error(i(306,c,""))}return n;case 0:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:In(c,u),zc(t,n,c,u,o);case 1:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:In(c,u),u1(t,n,c,u,o);case 3:e:{if(p1(n),t===null)throw Error(i(387));c=n.pendingProps,h=n.memoizedState,u=h.element,Nh(t,n),ns(n,c,null,o);var w=n.memoizedState;if(c=w.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){u=Eo(Error(i(423)),n),n=h1(t,n,c,o,u);break e}else if(c!==u){u=Eo(Error(i(424)),n),n=h1(t,n,c,o,u);break e}else for(on=wr(n.stateNode.containerInfo.firstChild),rn=n,st=!0,Tn=null,o=jh(n,null,c,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Lo(),c===u){n=ar(t,n,o);break e}Bt(t,n,c,o)}n=n.child}return n;case 5:return Lh(n),t===null&&hc(n),c=n.type,u=n.pendingProps,h=t!==null?t.memoizedProps:null,w=u.children,oc(c,u)?w=null:h!==null&&oc(c,h)&&(n.flags|=32),d1(t,n),Bt(t,n,w,o),n.child;case 6:return t===null&&hc(n),null;case 13:return f1(t,n,o);case 4:return bc(n,n.stateNode.containerInfo),c=n.pendingProps,t===null?n.child=Ao(n,null,c,o):Bt(t,n,c,o),n.child;case 11:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:In(c,u),i1(t,n,c,u,o);case 7:return Bt(t,n,n.pendingProps,o),n.child;case 8:return Bt(t,n,n.pendingProps.children,o),n.child;case 12:return Bt(t,n,n.pendingProps.children,o),n.child;case 10:e:{if(c=n.type._context,u=n.pendingProps,h=n.memoizedProps,w=u.value,tt(Ji,c._currentValue),c._currentValue=w,h!==null)if($n(h.value,w)){if(h.children===u.children&&!Ut.current){n=ar(t,n,o);break e}}else for(h=n.child,h!==null&&(h.return=n);h!==null;){var P=h.dependencies;if(P!==null){w=h.child;for(var F=P.firstContext;F!==null;){if(F.context===c){if(h.tag===1){F=or(-1,o&-o),F.tag=2;var te=h.updateQueue;if(te!==null){te=te.shared;var he=te.pending;he===null?F.next=F:(F.next=he.next,he.next=F),te.pending=F}}h.lanes|=o,F=h.alternate,F!==null&&(F.lanes|=o),xc(h.return,o,n),P.lanes|=o;break}F=F.next}}else if(h.tag===10)w=h.type===n.type?null:h.child;else if(h.tag===18){if(w=h.return,w===null)throw Error(i(341));w.lanes|=o,P=w.alternate,P!==null&&(P.lanes|=o),xc(w,o,n),w=h.sibling}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===n){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}Bt(t,n,u.children,o),n=n.child}return n;case 9:return u=n.type,c=n.pendingProps.children,To(n,o),u=xn(u),c=c(u),n.flags|=1,Bt(t,n,c,o),n.child;case 14:return c=n.type,u=In(c,n.pendingProps),u=In(c.type,u),s1(t,n,c,u,o);case 15:return l1(t,n,n.type,n.pendingProps,o);case 17:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:In(c,u),us(t,n),n.tag=1,qt(c)?(t=!0,Gi(n)):t=!1,To(n,o),Jh(n,c,u),Ic(n,c,u,o),Oc(null,n,c,!0,t,o);case 19:return g1(t,n,o);case 22:return c1(t,n,o)}throw Error(i(156,n.tag))};function F1(t,n){return yp(t,n)}function ny(t,n,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,n,o,c){return new ny(t,n,o,c)}function od(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ry(t){if(typeof t=="function")return od(t)?1:0;if(t!=null){if(t=t.$$typeof,t===B)return 11;if(t===oe)return 14}return 2}function Ar(t,n){var o=t.alternate;return o===null?(o=bn(t.tag,n,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=n,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,n=t.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function ks(t,n,o,c,u,h){var w=2;if(c=t,typeof t=="function")od(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case I:return no(o.children,u,h,n);case z:w=8,u|=8;break;case W:return t=bn(12,o,n,u|2),t.elementType=W,t.lanes=h,t;case Y:return t=bn(13,o,n,u),t.elementType=Y,t.lanes=h,t;case ee:return t=bn(19,o,n,u),t.elementType=ee,t.lanes=h,t;case re:return _s(o,u,h,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G:w=10;break e;case Q:w=9;break e;case B:w=11;break e;case oe:w=14;break e;case le:w=16,c=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return n=bn(w,o,n,u),n.elementType=t,n.type=c,n.lanes=h,n}function no(t,n,o,c){return t=bn(7,t,c,n),t.lanes=o,t}function _s(t,n,o,c){return t=bn(22,t,c,n),t.elementType=re,t.lanes=o,t.stateNode={isHidden:!1},t}function ad(t,n,o){return t=bn(6,t,null,n),t.lanes=o,t}function id(t,n,o){return n=bn(4,t.children!==null?t.children:[],t.key,n),n.lanes=o,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function oy(t,n,o,c,u){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=c,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function sd(t,n,o,c,u,h,w,P,F){return t=new oy(t,n,o,P,F),n===1?(n=1,h===!0&&(n|=8)):n=0,h=bn(3,null,null,n),t.current=h,h.stateNode=t,h.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},wc(h),t}function ay(t,n,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:c==null?null:""+c,children:t,containerInfo:n,implementation:o}}function B1(t){if(!t)return kr;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(i(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(qt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(t.tag===1){var o=t.type;if(qt(o))return mh(t,o,n)}return n}function W1(t,n,o,c,u,h,w,P,F){return t=sd(o,c,!0,t,u,h,w,P,F),t.context=B1(null),o=t.current,c=Wt(),u=Rr(o),h=or(c,u),h.callback=n??null,jr(o,h,u),t.current.lanes=u,ga(t,u,c),Yt(t,c),t}function Cs(t,n,o,c){var u=n.current,h=Wt(),w=Rr(u);return o=B1(o),n.context===null?n.context=o:n.pendingContext=o,n=or(h,w),n.payload={element:t},c=c===void 0?null:c,c!==null&&(n.callback=c),t=jr(u,n,w),t!==null&&(zn(t,u,w,h),ts(t,u,w)),w}function js(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function H1(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<n?o:n}}function ld(t,n){H1(t,n),(t=t.alternate)&&H1(t,n)}function iy(){return null}var U1=typeof reportError=="function"?reportError:function(t){console.error(t)};function cd(t){this._internalRoot=t}Ss.prototype.render=cd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(i(409));Cs(t,n,null,null)},Ss.prototype.unmount=cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Jr(function(){Cs(null,t,null,null)}),n[Jn]=null}};function Ss(t){this._internalRoot=t}Ss.prototype.unstable_scheduleHydration=function(t){if(t){var n=Np();t={blockedOn:null,target:t,priority:n};for(var o=0;o<vr.length&&n!==0&&n<vr[o].priority;o++);vr.splice(o,0,t),o===0&&Lp(t)}};function dd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ns(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function q1(){}function sy(t,n,o,c,u){if(u){if(typeof c=="function"){var h=c;c=function(){var te=js(w);h.call(te)}}var w=W1(n,c,t,0,null,!1,!1,"",q1);return t._reactRootContainer=w,t[Jn]=w.current,La(t.nodeType===8?t.parentNode:t),Jr(),w}for(;u=t.lastChild;)t.removeChild(u);if(typeof c=="function"){var P=c;c=function(){var te=js(F);P.call(te)}}var F=sd(t,0,!1,null,null,!1,!1,"",q1);return t._reactRootContainer=F,t[Jn]=F.current,La(t.nodeType===8?t.parentNode:t),Jr(function(){Cs(n,F,o,c)}),F}function Ms(t,n,o,c,u){var h=o._reactRootContainer;if(h){var w=h;if(typeof u=="function"){var P=u;u=function(){var F=js(w);P.call(F)}}Cs(n,w,t,u)}else w=sy(o,n,t,u,c);return js(w)}jp=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var o=ma(n.pendingLanes);o!==0&&(Il(n,o|1),Yt(n,pt()),(Ye&6)===0&&(Oo=pt()+500,_r()))}break;case 13:Jr(function(){var c=rr(t,1);if(c!==null){var u=Wt();zn(c,t,1,u)}}),ld(t,1)}},El=function(t){if(t.tag===13){var n=rr(t,134217728);if(n!==null){var o=Wt();zn(n,t,134217728,o)}ld(t,134217728)}},Sp=function(t){if(t.tag===13){var n=Rr(t),o=rr(t,n);if(o!==null){var c=Wt();zn(o,t,n,c)}ld(t,n)}},Np=function(){return Xe},Mp=function(t,n){var o=Xe;try{return Xe=t,n()}finally{Xe=o}},Ln=function(t,n,o){switch(n){case"input":if(Ve(t,o),n=o.name,o.type==="radio"&&n!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var c=o[n];if(c!==t&&c.form===t.form){var u=qi(c);if(!u)throw Error(i(90));me(c),Ve(c,u)}}}break;case"textarea":gt(t,o);break;case"select":n=o.value,n!=null&&Qe(t,!!o.multiple,n,!1)}},pp=td,hp=Jr;var ly={usingClientEntryPoint:!1,Events:[Ta,jo,qi,dp,up,td]},Ga={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cy={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vp(t),t===null?null:t.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||iy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rs.isDisabled&&Rs.supportsFiber)try{Si=Rs.inject(cy),Un=Rs}catch{}}return Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ly,Kt.createPortal=function(t,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dd(n))throw Error(i(200));return ay(t,n,null,o)},Kt.createRoot=function(t,n){if(!dd(t))throw Error(i(299));var o=!1,c="",u=U1;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=sd(t,1,!1,null,null,o,!1,c,u),t[Jn]=n.current,La(t.nodeType===8?t.parentNode:t),new cd(n)},Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=vp(n),t=t===null?null:t.stateNode,t},Kt.flushSync=function(t){return Jr(t)},Kt.hydrate=function(t,n,o){if(!Ns(n))throw Error(i(200));return Ms(null,t,n,!0,o)},Kt.hydrateRoot=function(t,n,o){if(!dd(t))throw Error(i(405));var c=o!=null&&o.hydratedSources||null,u=!1,h="",w=U1;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),n=W1(n,null,t,1,o??null,u,!1,h,w),t[Jn]=n.current,La(t),c)for(t=0;t<c.length;t++)o=c[t],u=o._getVersion,u=u(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,u]:n.mutableSourceEagerHydrationData.push(o,u);return new Ss(n)},Kt.render=function(t,n,o){if(!Ns(n))throw Error(i(200));return Ms(null,t,n,!1,o)},Kt.unmountComponentAtNode=function(t){if(!Ns(t))throw Error(i(40));return t._reactRootContainer?(Jr(function(){Ms(null,null,t,!1,function(){t._reactRootContainer=null,t[Jn]=null})}),!0):!1},Kt.unstable_batchedUpdates=td,Kt.unstable_renderSubtreeIntoContainer=function(t,n,o,c){if(!Ns(o))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return Ms(t,n,o,!1,c)},Kt.version="18.3.1-next-f1338f8080-20240426",Kt}var J1;function u0(){if(J1)return hd.exports;J1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(a){console.error(a)}}return e(),hd.exports=gy(),hd.exports}var ef;function vy(){if(ef)return Ls;ef=1;var e=u0();return Ls.createRoot=e.createRoot,Ls.hydrateRoot=e.hydrateRoot,Ls}var xy=vy();const yy=d0(xy);function p0(e){var a,i,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(a=0;a<l;a++)e[a]&&(i=p0(e[a]))&&(s&&(s+=" "),s+=i)}else for(i in e)e[i]&&(s&&(s+=" "),s+=i);return s}function se(){for(var e,a,i=0,s="",l=arguments.length;i<l;i++)(e=arguments[i])&&(a=p0(e))&&(s&&(s+=" "),s+=a);return s}const mo=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 5V19M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};mo.displayName="PlusIcon";const wy="_root_7uomf_13",by="_sm_7uomf_82",ky="_md_7uomf_88",_y="_lg_7uomf_94",Cy="_horizontal_7uomf_107",jy="_alignStart_7uomf_121",Sy="_vertical_7uomf_125",Ny="_inner_7uomf_131",My="_iconSlot_7uomf_146",Ry="_label_7uomf_163",ro={root:wy,sm:by,md:ky,lg:_y,horizontal:Cy,alignStart:jy,vertical:Sy,inner:Ny,iconSlot:My,label:Ry};function tf(e){return typeof e=="number"?`${e}px`:e}const Ly=g.forwardRef(({size:e="md",layout:a="horizontal",align:i="center",label:s="Add",hideLabel:l=!1,icon:d,height:p,borderRadius:m,className:v,style:y,disabled:x,type:b="button",...k},S)=>{const _=d??r.jsx(mo,{size:"100%"}),C={};return p!==void 0&&(C["--area-min-height"]=tf(p)),m!==void 0&&(C["--area-radius"]=tf(m)),r.jsx("button",{ref:S,type:b,className:se(ro.root,ro[e],ro[a],i==="start"&&ro.alignStart,v),disabled:x,"data-size":e,"data-layout":a,style:{...C,...y},...k,children:r.jsxs("span",{className:ro.inner,children:[r.jsx("span",{className:ro.iconSlot,"aria-hidden":"true",children:_}),!l&&s&&r.jsx("span",{className:ro.label,children:s})]})})});Ly.displayName="AreaButton";const Ay="_root_b29pw_8",$y="_image_b29pw_33",Ty="_initials_b29pw_40",Iy="_iconSlot_b29pw_52",Tr={root:Ay,image:$y,initials:Ty,iconSlot:Iy,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function Ey({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function Py(e){const a=e.trim().split(/\s+/).filter(l=>/[\p{L}\p{N}]/u.test(l));if(a.length===0)return"";if(a.length===1)return a[0].charAt(0).toUpperCase();const i=a[0].charAt(0),s=a[a.length-1].charAt(0);return(i+s).toUpperCase()}const Wn=g.forwardRef(({src:e,alt:a,initials:i,name:s,icon:l,size:d="md",color:p="neutral",variant:m="subtle",shape:v="circle",className:y,...x},b)=>{const[k,S]=g.useState(!1),_=!!e&&!k,C=(i==null?void 0:i.slice(0,2).toUpperCase())??(s?Py(s):"");let N;return _?N=r.jsx("img",{src:e,alt:a??"",className:Tr.image,onError:()=>S(!0),draggable:!1},e):C?N=r.jsx("span",{className:Tr.initials,"aria-hidden":a?void 0:!0,children:C}):N=r.jsx("span",{className:Tr.iconSlot,"aria-hidden":"true",children:l??r.jsx(Ey,{})}),r.jsx("span",{ref:b,"data-size":d,"data-color":p,"data-variant":m,"data-shape":v,className:se(Tr.root,Tr[`size-${d}`],Tr[`color-${p}`],Tr[`variant-${m}`],Tr[`shape-${v}`],y),...x,children:N})});Wn.displayName="Avatar";const zy="_root_uqz3u_7",Oy={root:zy},Ht=g.forwardRef(({as:e="span",className:a,children:i,...s},l)=>r.jsx(e,{ref:l,className:se(Oy.root,a),...s,children:i}));Ht.displayName="Eyebrow";const Dy="_root_1tnwf_15",Fy={root:Dy},By=g.forwardRef(({scale:e="paragraph-md",placeholder:a="Type something…",value:i,defaultValue:s="",onChange:l,readOnly:d=!1,disabled:p=!1,className:m,onInput:v,...y},x)=>{const b=i!==void 0,k=g.useRef(null),[S,_]=g.useState(()=>b?!i:!s),C=g.useCallback(j=>{k.current=j,typeof x=="function"?x(j):x&&(x.current=j)},[x]);g.useEffect(()=>{!b&&k.current&&s&&(k.current.textContent=s,_(!s))},[]),g.useEffect(()=>{b&&k.current&&(k.current.textContent??"")!==i&&(k.current.textContent=i??"",_(!(i??"")))},[i,b]);const N=j=>{const O=j.currentTarget.textContent??"";_(O===""),l==null||l(O),v==null||v(j)},$=j=>{j.preventDefault();const O=j.clipboardData.getData("text/plain");document.execCommand("insertText",!1,O)},M=!p&&!d;return r.jsx("span",{ref:C,contentEditable:M?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":a,"aria-disabled":p||void 0,"aria-readonly":d||void 0,"data-scale":e,"data-empty":S||void 0,"data-placeholder":a,"data-disabled":p||void 0,"data-readonly":d||void 0,className:se(Fy.root,m),onInput:N,onPaste:$,...y})});By.displayName="TypeBox";const Wy="_root_1brpy_12",Hy="_ghost_1brpy_27",Uy="_path_1brpy_32",Ka={root:Wy,"ai-spin":"_ai-spin_1brpy_1",ghost:Hy,"ai-morph":"_ai-morph_1brpy_1",path:Uy,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},qy={xs:16,sm:24,md:32,lg:48,xl:64},Vy={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},nf="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",As=e=>e==="inverse"||e==="inverse-light",Gy=e=>e==="stroke"||e==="stroke-light",wu=g.forwardRef(({size:e="md",variant:a="gradient-fill",state:i="loading",className:s,style:l,"aria-label":d,...p},m)=>{const v=g.useId().replace(/[^a-z0-9]/gi,""),y=`aigrad-${v}`,x=`aiglow-${v}`,b=typeof e=="string",k=b?qy[e]:e,S=b?Vy[e]:k<=16?1.75:k<=24?1.5:k<=32?1.25:1.1,_=a==="gradient-fill"?`url(#${y})`:As(a)?"currentColor":"none",C=As(a)?"none":Gy(a)?"currentColor":`url(#${y})`,N="currentColor",$=a!=="stroke"&&a!=="stroke-light"&&!As(a);return r.jsxs("svg",{ref:m,width:k,height:k,viewBox:"0 0 24 24",fill:"none",className:se(Ka.root,Ka[`variant-${a}`],Ka[`state-${i}`],s),style:l,"data-state":i,"aria-label":d??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...p,children:[!As(a)&&r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:y,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[r.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),r.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),r.jsxs("filter",{id:x,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[r.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{in:"blur"}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),r.jsx("path",{d:nf,stroke:N,strokeWidth:S*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:Ka.ghost}),r.jsx("path",{d:nf,fill:_,stroke:C==="none"?void 0:C,strokeWidth:C==="none"?void 0:S,strokeLinecap:"round",strokeLinejoin:"round",filter:$?`url(#${x})`:void 0,className:Ka.path})]})});wu.displayName="AILoader";const Yy="_root_10act_14",Ky="_hovered_10act_68",Qy="_loading_10act_69",Zy="_sm_10act_90",Xy="_md_10act_98",Jy="_lg_10act_106",e3="_dark_10act_116",t3="_icon_10act_122",Fo={root:Yy,hovered:Ky,loading:Qy,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:Zy,md:Xy,lg:Jy,dark:e3,icon:t3},rf={sm:12,md:14,lg:18};function n3({size:e,light:a}){return r.jsxs("svg",{width:e,height:e,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!a&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{stopColor:"#8C4FE2"}),r.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),r.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),r.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:a?"white":"url(#ai-core-btn-sparkle)"})]})}const h0=g.forwardRef(({size:e="md",dark:a,loading:i,className:s,onMouseEnter:l,onMouseLeave:d,...p},m)=>{const[v,y]=g.useState(!1);return r.jsx("button",{ref:m,className:se(Fo.root,Fo[e],a&&Fo.dark,i?Fo.loading:v&&Fo.hovered,s),"aria-busy":i||void 0,onMouseEnter:x=>{y(!0),l==null||l(x)},onMouseLeave:x=>{y(!1),d==null||d(x)},...p,children:r.jsx("span",{className:Fo.icon,children:i?r.jsx(wu,{size:rf[e],variant:a?"inverse-light":"gradient-fill"}):r.jsx(n3,{size:rf[e],light:a})})})});h0.displayName="AICoreButton";const r3="_root_1qx4u_9",o3="_star_1qx4u_34",gd={root:r3,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:o3},a3="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",f0=g.forwardRef(({size:e="sm",className:a,...i},s)=>r.jsx("span",{ref:s,"data-size":e,"aria-hidden":"true",className:se(gd.root,gd[`size-${e}`],a),...i,children:r.jsx("svg",{viewBox:"0 0 24 24",className:gd.star,fill:"none","aria-hidden":"true",children:r.jsx("path",{d:a3,fill:"currentColor"})})}));f0.displayName="AIAvatar";const i3="_shell_lalw3_21",s3="_wrapper_lalw3_58",l3="_card_lalw3_65",c3="_cardClip_lalw3_94",d3="_textarea_lalw3_160",u3="_actions_lalw3_203",Go={shell:i3,wrapper:s3,card:l3,cardClip:c3,textarea:d3,actions:u3},m0=g.forwardRef(({className:e,children:a,...i},s)=>r.jsx("div",{ref:s,className:se(Go.shell,e),...i,children:a}));m0.displayName="AIComposer";function p3(e,a){typeof e=="function"?e(a):e&&(e.current=a)}const g0=g.forwardRef(({value:e,onChange:a,onSubmit:i,maxRows:s=5,radius:l="sm",placeholder:d="Ask AI anything…",className:p,onKeyDown:m,disabled:v,children:y,style:x,...b},k)=>{const S=g.useRef(null);g.useEffect(()=>{const M=S.current;M&&(M.style.height="auto",M.style.height=`${M.scrollHeight}px`)},[e]);const _=g.useCallback(M=>a(M.target.value),[a]),C=g.useCallback(M=>{m==null||m(M),!M.defaultPrevented&&M.key==="Enter"&&!M.shiftKey&&i&&(M.preventDefault(),i())},[m,i]),N=g.useCallback(M=>{S.current=M,p3(k,M)},[k]),$={...x??{},"--ai-composer-max-rows":s};return r.jsx("div",{className:se(Go.wrapper,p),"data-radius":l,children:r.jsx("div",{className:Go.card,children:r.jsxs("div",{className:Go.cardClip,children:[r.jsx("textarea",{...b,ref:N,className:Go.textarea,rows:1,value:e,onChange:_,onKeyDown:C,placeholder:d,disabled:v,style:$}),y!=null&&r.jsx("div",{className:Go.actions,children:y})]})})})});g0.displayName="AIComposerInput";const h3="_root_fv0gc_10",f3="_simple_fv0gc_28",m3="_float_fv0gc_83",of={root:h3,simple:f3,float:m3},g3=g.forwardRef(({variant:e="simple",className:a,children:i,...s},l)=>r.jsx("section",{ref:l,"data-variant":e,className:se(of.root,of[e],a),...s,children:i}));g3.displayName="AIConversation";const v3="_fadeFrame_1l0ib_19",x3="_scroller_1l0ib_32",y3="_content_1l0ib_89",w3="_messageBlock_1l0ib_108",b3="_messageBlockAi_1l0ib_116",k3="_inboundBlock_1l0ib_128",_3="_inboundLoader_1l0ib_136",C3="_inboundLoaderLabel_1l0ib_146",j3="_outboundBlock_1l0ib_153",S3="_outboundHeader_1l0ib_161",N3="_messageBlockUser_1l0ib_168",M3="_aiThreadOutboundIn_1l0ib_1",R3="_messageBody_1l0ib_182",L3="_messageBodyAi_1l0ib_193",A3="_messageBodyUser_1l0ib_200",$3="_label_1l0ib_159",T3="_labelAi_1l0ib_221",I3="_labelUser_1l0ib_159",E3="_labelAvatar_1l0ib_224",P3="_labelText_1l0ib_237",z3="_timestamp_1l0ib_244",O3="_timestampAi_1l0ib_259",D3="_timestampUser_1l0ib_260",F3="_timestampInline_1l0ib_270",B3="_aiThreadOutboundFadeIn_1l0ib_1",Be={fadeFrame:v3,scroller:x3,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:y3,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:w3,messageBlockAi:b3,inboundBlock:k3,inboundLoader:_3,inboundLoaderLabel:C3,outboundBlock:j3,outboundHeader:S3,messageBlockUser:N3,aiThreadOutboundIn:M3,messageBody:R3,messageBodyAi:L3,messageBodyUser:A3,label:$3,labelAi:T3,labelUser:I3,labelAvatar:E3,labelText:P3,timestamp:z3,timestampAi:O3,timestampUser:D3,timestampInline:F3,aiThreadOutboundFadeIn:B3},af=8;function W3(e,a){typeof e=="function"?e(a):e&&(e.current=a)}const H3=g.forwardRef(({density:e="comfortable",padding:a="md",autoScroll:i=!0,autoScrollThreshold:s=80,className:l,children:d,...p},m)=>{const v=g.useRef(null),y=g.useRef(null),x=g.useRef(!0),[b,k]=g.useState(!1),[S,_]=g.useState(!1),C=g.useCallback(N=>{v.current=N,W3(m,N)},[m]);return g.useEffect(()=>{const N=v.current,$=y.current;if(!N||!$)return;const M=()=>{const{scrollTop:I,scrollHeight:z,clientHeight:W}=N;return z-I-W<s},j=I=>{N.scrollTo({top:N.scrollHeight,behavior:I?"smooth":"auto"})},O=()=>{const{scrollTop:I,scrollHeight:z,clientHeight:W}=N,G=I>af,Q=z-I-W>af;k(B=>B===G?B:G),_(B=>B===Q?B:Q)};i&&(j(!1),x.current=!0),O();const L=()=>{x.current=M(),O()};N.addEventListener("scroll",L,{passive:!0});const R=new ResizeObserver(()=>{i&&x.current&&j(!0),O()});return R.observe($),R.observe(N),()=>{N.removeEventListener("scroll",L),R.disconnect()}},[i,s]),r.jsx("div",{className:Be.fadeFrame,"data-fade-top":b,"data-fade-bottom":S,children:r.jsx("div",{ref:C,className:se(Be.scroller,Be[`padding-${a}`],l),...p,children:r.jsx("div",{ref:y,className:se(Be.content,Be[`density-${e}`]),children:d})})})});H3.displayName="AIThread";const cl=g.forwardRef(({align:e="ai",avatar:a,className:i,children:s,...l},d)=>r.jsxs("div",{ref:d,className:se(Be.label,e==="user"?Be.labelUser:Be.labelAi,i),...l,children:[a!=null&&r.jsx("span",{className:Be.labelAvatar,children:a}),r.jsx("span",{className:Be.labelText,children:s})]}));cl.displayName="AILabel";const U3=e=>e.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function q3(e,a){if(typeof e=="string")return{text:e};const i=e instanceof Date?e:new Date(e);return Number.isNaN(i.getTime())?null:{text:a(i),iso:i.toISOString()}}const hi=g.forwardRef(({value:e,align:a="ai",format:i=U3,inline:s=!1,className:l,...d},p)=>{const m=g.useMemo(()=>q3(e,i),[e,i]);return m?r.jsx("time",{ref:p,className:se(Be.timestamp,s?Be.timestampInline:a==="user"?Be.timestampUser:Be.timestampAi,l),dateTime:m.iso,...d,children:m.text}):null});hi.displayName="AITimestamp";function V3(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?r.jsx(hi,{align:"ai",value:e}):e}function G3(e){return e==null?null:typeof e=="string"||typeof e=="number"?r.jsx(cl,{align:"ai",children:e}):e}const Y3=g.forwardRef(({label:e,time:a,className:i,children:s,...l},d)=>r.jsxs("div",{ref:d,"data-author":"ai",className:se(Be.messageBlock,Be.messageBlockAi,i),...l,children:[G3(e),r.jsx("div",{className:se(Be.messageBody,Be.messageBodyAi),children:s}),V3(a)]}));Y3.displayName="AIAssistantMessage";function K3(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?r.jsx(hi,{align:"user",value:e}):e}function Q3(e){return e==null?null:typeof e=="string"||typeof e=="number"?r.jsx(cl,{align:"user",children:e}):e}const Z3=g.forwardRef(({label:e,time:a,className:i,children:s,...l},d)=>r.jsxs("div",{ref:d,"data-author":"user",className:se(Be.messageBlock,Be.messageBlockUser,i),...l,children:[Q3(e),r.jsx("div",{className:se(Be.messageBody,Be.messageBodyUser),children:s}),K3(a)]}));Z3.displayName="AIUserMessage";function X3(e){return e===!1?null:e==null||e===!0?r.jsx(f0,{size:"sm"}):e}function J3(e,a){return e==null&&a==null?null:typeof e=="string"||typeof e=="number"||e==null?r.jsx(cl,{align:"ai",avatar:a,children:e}):e}const e5=g.forwardRef(({avatar:e,label:a="Teambridge AI",activity:i,actions:s,loading:l=!1,loaderLabel:d="Thinking…",className:p,children:m,...v},y)=>{const x=X3(e),b=J3(a,x);return r.jsxs("div",{ref:y,"data-author":"ai",className:se(Be.messageBlock,Be.messageBlockAi,Be.inboundBlock,p),...v,children:[b,i,m!=null&&r.jsx("div",{className:se(Be.messageBody,Be.messageBodyAi),children:m}),l&&r.jsxs("div",{className:Be.inboundLoader,"aria-live":"polite",children:[r.jsx(wu,{size:"xs"}),d!=null&&r.jsx("span",{className:Be.inboundLoaderLabel,children:d})]}),s]})});e5.displayName="AIInboundMessage";function t5(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const n5=g.forwardRef(({label:e="You",time:a,timeFormat:i,className:s,children:l,...d},p)=>{const m=a==null?null:t5(a)?r.jsx(hi,{value:a,format:i,inline:!0}):a,v=e==null?null:typeof e=="string"||typeof e=="number"?r.jsx("span",{className:Be.labelText,children:e}):e,y=v!=null||m!=null;return r.jsxs("div",{ref:p,"data-author":"user",className:se(Be.messageBlock,Be.messageBlockUser,Be.outboundBlock,s),...d,children:[y&&r.jsxs("div",{className:se(Be.label,Be.labelUser,Be.outboundHeader),children:[v,m]}),r.jsx("div",{className:se(Be.messageBody,Be.messageBodyUser),children:l})]})});n5.displayName="AIOutboundMessage";const Sn=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Sn.displayName="ChevronDownIcon";const r5="_root_1j4eq_8",o5="_header_1j4eq_17",a5="_headerSummary_1j4eq_53",i5="_aiTrailSummaryFade_1j4eq_1",s5="_aiTrailHeaderAppend_1j4eq_1",l5="_aiTrailEllipsis_1j4eq_1",c5="_headerCurrent_1j4eq_128",d5="_headerChevron_1j4eq_159",u5="_headerChevronExpanded_1j4eq_173",p5="_body_1j4eq_187",h5="_bodyExpanded_1j4eq_200",f5="_bodyCollapsed_1j4eq_201",m5="_bodyInner_1j4eq_203",g5="_bodyContent_1j4eq_187",v5="_step_1j4eq_225",x5="_stepIcon_1j4eq_242",y5="_stepAnimating_1j4eq_256",w5="_aiTrailStepPulse_1j4eq_1",b5="_stepBody_1j4eq_267",k5="_stepHead_1j4eq_282",_5="_stepLabel_1j4eq_286",C5="_stepSeparator_1j4eq_288",j5="_stepDetail_1j4eq_292",S5="_subToggle_1j4eq_302",N5="_subToggleCount_1j4eq_335",M5="_subToggleChevron_1j4eq_339",R5="_subActivityWrap_1j4eq_358",L5="_subActivityExpanded_1j4eq_364",A5="_subActivityCollapsed_1j4eq_365",$5="_subActivityClip_1j4eq_367",T5="_subActivityList_1j4eq_378",I5="_subActivity_1j4eq_358",E5="_aiTrailSubActivityType_1j4eq_1",P5="_aiTrailSubActivityFade_1j4eq_1",Je={root:r5,header:o5,headerSummary:a5,aiTrailSummaryFade:i5,aiTrailHeaderAppend:s5,aiTrailEllipsis:l5,headerCurrent:c5,headerChevron:d5,headerChevronExpanded:u5,body:p5,bodyExpanded:h5,bodyCollapsed:f5,bodyInner:m5,bodyContent:g5,step:v5,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:x5,stepAnimating:y5,aiTrailStepPulse:w5,stepBody:b5,stepHead:k5,stepLabel:_5,stepSeparator:C5,stepDetail:j5,subToggle:S5,subToggleCount:N5,subToggleChevron:M5,subActivityWrap:R5,subActivityExpanded:L5,subActivityCollapsed:A5,subActivityClip:$5,subActivityList:T5,subActivity:I5,aiTrailSubActivityType:E5,aiTrailSubActivityFade:P5},bu=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};bu.displayName="MessageDotsSquareIcon";function Xs({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Xs.displayName="SearchMdIcon";function Or({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const ku=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};ku.displayName="Globe01Icon";const v0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};v0.displayName="Code02Icon";function x0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}x0.displayName="Tool01Icon";const hn=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M20 6L9 17L4 12",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},Jo=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:a}),r.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};Jo.displayName="AlertCircleIcon";const z5={thinking:r.jsx(bu,{size:14}),tool:r.jsx(x0,{size:14}),search:r.jsx(Xs,{size:14}),file:r.jsx(Or,{size:14}),web:r.jsx(ku,{size:14}),code:r.jsx(v0,{size:14}),content:r.jsx(hn,{size:14})},dl=g.forwardRef(({type:e,status:a="done",detail:i,icon:s,subActivities:l,groupState:d="done",className:p,children:m,...v},y)=>{const x=a==="active"&&d==="live",b=a==="active"&&d==="live",k=a==="active"||a==="error",[S,_]=g.useState(null),C=S!==null?S:k;g.useEffect(()=>{_(null)},[a]);const N=g.useCallback(()=>_(!C),[C]),$=!!l&&l.length>0,M=(l==null?void 0:l.length)??0,j=a==="error"?r.jsx(Jo,{size:14}):s??z5[e];return r.jsxs("div",{ref:y,"data-step-type":e,"data-step-status":a,className:se(Je.step,Je[`step-${a}`],x&&Je.stepAnimating,p),...v,children:[r.jsx("span",{className:Je.stepIcon,"aria-hidden":!0,children:j}),r.jsxs("span",{className:Je.stepBody,children:[r.jsxs("span",{className:Je.stepHead,children:[r.jsx("span",{className:Je.stepLabel,children:m}),i!=null&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:Je.stepSeparator,"aria-hidden":!0,children:" · "}),r.jsx("span",{className:Je.stepDetail,children:i})]}),$&&r.jsxs("button",{type:"button",className:Je.subToggle,onClick:N,"aria-expanded":C,"aria-label":C?`Collapse ${M} sub-steps`:`Expand ${M} sub-steps`,"data-expanded":C||void 0,children:[r.jsx("span",{className:Je.subToggleCount,children:M}),r.jsx("span",{className:Je.subToggleChevron,"aria-hidden":!0,children:r.jsx(Sn,{size:10})})]})]}),$&&r.jsx(r.Fragment,{children:r.jsx("div",{className:se(Je.subActivityWrap,C?Je.subActivityExpanded:Je.subActivityCollapsed),"aria-hidden":!C,children:r.jsx("div",{className:Je.subActivityClip,children:r.jsx("ul",{className:Je.subActivityList,"data-animating":b||void 0,children:l.map((O,L)=>r.jsx("li",{className:Je.subActivity,children:O},L))})})})})]})]})});dl.displayName="AIActivityStep";function sf(e){return e==="error"}function O5(e,a,i,s,l,d){if(e==="live")return i.length===0?a===1?"1 step":`${a} steps`:r.jsx("span",{className:l,children:i[s]??i[i.length-1]},s);const p=e==="error"?"Stopped":d?`Thought for ${d}`:"Thought";if(i.length===0){const m=a===1?"1 step":`${a} steps`;return`${p} · ${m}`}return r.jsxs(r.Fragment,{children:[p,i.map((m,v)=>r.jsxs(g.Fragment,{children:[" · ",m]},v))]})}const _u=g.forwardRef(({state:e="live",expanded:a,defaultExpanded:i,onToggle:s,duration:l,summary:d,className:p,children:m,...v},y)=>{const x=a!==void 0,[b,k]=g.useState(i??sf(e)),[S,_]=g.useState(!1);g.useEffect(()=>{x||S||k(sf(e))},[e,x,S]);const C=x?!!a:b,N=g.useCallback(()=>{const R=!C;x||(k(R),_(!0)),s==null||s(R)},[C,x,s]),{enhancedChildren:$,stepCount:M,stepLabels:j,currentLabelIdx:O}=g.useMemo(()=>{let R=0;const I=[];let z=-1;return{enhancedChildren:g.Children.map(m,G=>{if(!g.isValidElement(G))return G;const Q=G.props;if(!("type"in Q||"status"in Q))return G;R+=1;const Y=Q.status??"done";return Y==="pending"?null:(Q.children!=null&&(I.push(Q.children),Y==="active"&&(z=I.length-1)),D5(G,e))}),stepCount:R,stepLabels:I,currentLabelIdx:z>=0?z:I.length-1}},[m,e]),L=d??O5(e,M,j,O,Je.headerCurrent,l);return r.jsxs("div",{ref:y,"data-state":e,"data-expanded":C,className:se(Je.root,p),...v,children:[r.jsxs("button",{type:"button",className:Je.header,onClick:N,"aria-expanded":C,"aria-label":C?"Collapse activity trail":"Expand activity trail",children:[r.jsx("span",{className:Je.headerSummary,children:L},`${e}-${O}`),r.jsx("span",{className:se(Je.headerChevron,C&&Je.headerChevronExpanded),"aria-hidden":!0,children:r.jsx(Sn,{size:14})})]}),r.jsx("div",{className:se(Je.body,C?Je.bodyExpanded:Je.bodyCollapsed),"aria-hidden":!C,children:r.jsx("div",{className:Je.bodyInner,children:r.jsxs("div",{className:Je.bodyContent,children:[$,e==="done"&&r.jsx(dl,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});_u.displayName="AIActivityTrail";function D5(e,a){return g.cloneElement(e,{groupState:a})}var fi=u0();const F5="_wrapper_3tqlm_10",B5="_tooltip_3tqlm_22",W5="_portal_3tqlm_23",H5="_top_3tqlm_61",U5="_bottom_3tqlm_71",q5="_left_3tqlm_81",V5="_right_3tqlm_91",$s={wrapper:F5,tooltip:B5,portal:W5,top:H5,bottom:U5,left:q5,right:V5},pr=({content:e,placement:a="top",delay:i=0,disabled:s=!1,maxWidth:l=280,offset:d=0,children:p})=>{const[m,v]=g.useState(!1),[y,x]=g.useState({top:0,left:0}),b=g.useRef(null),k=g.useRef(),S=g.useId(),_=g.useCallback(()=>{if(!b.current)return;const j=b.current.getBoundingClientRect(),O=6+d;let L=0,R=0;switch(a){case"top":L=j.top-O,R=j.left+j.width/2;break;case"bottom":L=j.bottom+O,R=j.left+j.width/2;break;case"left":L=j.top+j.height/2,R=j.left-O;break;case"right":L=j.top+j.height/2,R=j.right+O;break}x({top:L,left:R})},[a,d]),C=g.useCallback(()=>{s||(_(),clearTimeout(k.current),i>0?k.current=setTimeout(()=>v(!0),i):v(!0))},[s,i,_]),N=g.useCallback(()=>{clearTimeout(k.current),v(!1)},[]);g.useEffect(()=>{if(!m)return;const j=()=>_();return window.addEventListener("scroll",j,!0),window.addEventListener("resize",j),()=>{window.removeEventListener("scroll",j,!0),window.removeEventListener("resize",j)}},[m,_]);const $=tn.cloneElement(p,{"aria-describedby":m?S:void 0}),M=r.jsx("span",{id:S,role:"tooltip",className:se($s.tooltip,$s[a],$s.portal),"data-visible":m||void 0,style:{top:y.top,left:y.left,maxWidth:l!==void 0?l:void 0},children:e});return r.jsxs("span",{ref:b,className:$s.wrapper,onMouseEnter:C,onMouseLeave:N,onFocus:C,onBlur:N,children:[$,fi.createPortal(M,document.body)]})};pr.displayName="Tooltip";const G5="_root_v8mqg_9",Y5="_hover_v8mqg_21",vd={root:G5,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:Y5};function K5(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const y0=g.forwardRef(({visibility:e="always",align:a="start",time:i,timeFormat:s,className:l,children:d,...p},m)=>{const v=i==null?null:K5(i)?r.jsx(hi,{value:i,format:s,inline:!0}):i,y=b=>{if(!g.isValidElement(b))return b;const k=b;if(k.type===pr)return k;const S=k.props["aria-label"];return S?r.jsx(pr,{content:S,placement:"top",delay:150,children:k}):k},x=g.Children.map(d,b=>{if(g.isValidElement(b)&&b.type===g.Fragment){const k=b.props.children;return g.Children.map(k,y)}return y(b)});return r.jsxs("div",{ref:m,"data-visibility":e,"data-align":a,className:se(vd.root,vd[`align-${a}`],e==="hover"&&vd.hover,l),...p,children:[x,v]})});y0.displayName="AIMessageActions";const Q5="_card_1apq1_17",Z5="_header_1apq1_69",X5="_iconBadge_1apq1_74",J5="_iconInner_1apq1_89",e4="_headerText_1apq1_100",t4="_headerTopRow_1apq1_109",n4="_eyebrow_1apq1_115",r4="_title_1apq1_124",o4="_subtitle_1apq1_130",a4="_headerTrailing_1apq1_135",i4="_body_1apq1_141",s4="_footer_1apq1_152",l4="_footerEnd_1apq1_157",c4="_metaRow_1apq1_162",d4="_metaItem_1apq1_170",u4="_resultHero_1apq1_180",p4="_resultHeadline_1apq1_185",h4="_resultDetail_1apq1_191",f4="_clauses_1apq1_205",m4="_clause_1apq1_205",g4="_clauseLabel_1apq1_215",v4="_clauseBody_1apq1_225",x4="_badgeExecuting_1apq1_245",nt={card:Q5,header:Z5,iconBadge:X5,iconInner:J5,headerText:e4,headerTopRow:t4,eyebrow:n4,title:r4,subtitle:o4,headerTrailing:a4,body:i4,footer:s4,footerEnd:l4,metaRow:c4,metaItem:d4,resultHero:u4,resultHeadline:p4,resultDetail:h4,clauses:f4,clause:m4,clauseLabel:g4,clauseBody:v4,badgeExecuting:x4},Zn=g.forwardRef(({tone:e="neutral",accent:a=!0,fill:i=!1,icon:s,eyebrow:l,title:d,subtitle:p,trailing:m,footer:v,footerEnd:y=!1,className:x,children:b,...k},S)=>{const _=l!=null||m!=null,C=_||d!=null||p!=null,N=s!=null||C;return r.jsxs("div",{ref:S,"data-tone":e,"data-accent":a||void 0,"data-fill":i||void 0,"data-icon":s!=null||void 0,className:se(nt.card,x),...k,children:[N&&r.jsxs("div",{className:nt.header,children:[s!=null&&r.jsx("span",{className:se(nt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx("span",{className:nt.iconInner,children:s})}),C&&r.jsxs("div",{className:nt.headerText,children:[_&&r.jsxs("div",{className:nt.headerTopRow,children:[l!=null&&r.jsx("span",{className:nt.eyebrow,children:l}),m!=null&&r.jsx("span",{className:nt.headerTrailing,children:m})]}),d!=null&&r.jsx("span",{className:nt.title,children:d}),p!=null&&r.jsx("span",{className:nt.subtitle,children:p})]})]}),b!=null&&r.jsx("div",{className:nt.body,children:b}),v!=null&&r.jsx("div",{className:se(nt.footer,y&&nt.footerEnd),children:v})]})});Zn.displayName="UltronCard";const y4="_root_zkkgh_6",w4="_sm_zkkgh_24",b4="_md_zkkgh_33",k4="_lg_zkkgh_42",_4="_neutral_zkkgh_53",C4="_blue_zkkgh_66",j4="_azure_zkkgh_79",S4="_purple_zkkgh_92",N4="_pink_zkkgh_105",M4="_red_zkkgh_118",R4="_orange_zkkgh_131",L4="_yellow_zkkgh_144",A4="_matcha_zkkgh_157",$4="_green_zkkgh_170",T4="_subtle_zkkgh_184",I4="_outline_zkkgh_190",E4="_solid_zkkgh_196",P4="_dot_zkkgh_203",z4="_icon_zkkgh_212",O4="_dismiss_zkkgh_224",oo={root:y4,sm:w4,md:b4,lg:k4,neutral:_4,blue:C4,azure:j4,purple:S4,pink:N4,red:M4,orange:R4,yellow:L4,matcha:A4,green:$4,subtle:T4,outline:I4,solid:E4,dot:P4,icon:z4,dismiss:O4},mi=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},D4={sm:10,md:12,lg:14},jn=g.forwardRef(({variant:e="subtle",color:a="neutral",size:i="md",dot:s,leadingIcon:l,dismissible:d,onDismiss:p,className:m,children:v,...y},x)=>r.jsxs("span",{ref:x,className:se(oo.root,oo[i],oo[a],oo[e],m),...y,children:[s&&r.jsx("span",{className:oo.dot,"aria-hidden":"true"}),l&&r.jsx("span",{className:se(oo.icon,"alloy-icon-slot"),"aria-hidden":"true",children:l}),v,d&&r.jsx("button",{type:"button",className:oo.dismiss,"aria-label":"Remove",onClick:b=>{b.stopPropagation(),p==null||p()},children:r.jsx(mi,{size:D4[i]})})]}));jn.displayName="Tag";function w0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}w0.displayName="SlashCircle01Icon";const Cu=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};Cu.displayName="EyeIcon";function ul({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}ul.displayName="Target01Icon";function Cn({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Cn.displayName="ClockIcon";const gi=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};gi.displayName="RefreshCw04Icon";const pn=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,fill:"none"}),r.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};pn.displayName="CheckCircleIcon";function pl({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}pl.displayName="Save01Icon";const F4={sm:11,md:12,lg:14},B4={ignored:{label:"Ignored",color:"neutral",Icon:w0},monitored:{label:"Monitored",color:"blue",Icon:Cu},recommended:{label:"Recommended",color:"purple",Icon:ul},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:Cn},executing:{label:"Executing",color:"azure",Icon:gi},completed:{label:"Completed",color:"green",Icon:pn},saved:{label:"Saved",color:"matcha",Icon:pl}},go=g.forwardRef(({status:e,size:a="sm",label:i,className:s,...l},d)=>{const p=B4[e],m=p.Icon;return r.jsx(jn,{ref:d,color:p.color,size:a,variant:"subtle",leadingIcon:r.jsx(m,{size:F4[a]}),className:se(e==="executing"&&nt.badgeExecuting,s),...l,children:i??p.label})});go.displayName="UltronStatusBadge";function hl({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}hl.displayName="Bell01Icon";const W4=g.forwardRef(({title:e,icon:a,eyebrow:i="Event",meta:s,status:l,tone:d="neutral",children:p,...m},v)=>r.jsx(Zn,{ref:v,tone:d,eyebrow:i,title:e,icon:a??r.jsx(hl,{size:14}),trailing:l?r.jsx(go,{status:l}):void 0,...m,children:((s==null?void 0:s.length)||p)&&r.jsxs(r.Fragment,{children:[s!=null&&s.length?r.jsx("div",{className:nt.metaRow,children:s.map((y,x)=>r.jsxs("span",{className:nt.metaItem,children:[y.icon&&r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:y.icon}),y.label]},x))}):null,p]})}));W4.displayName="UltronEventCard";const H4=g.forwardRef(({eyebrow:e="Understanding",icon:a,entities:i,tone:s="info",children:l,...d},p)=>r.jsxs(Zn,{ref:p,tone:s,eyebrow:e,icon:a??r.jsx(bu,{size:14}),...d,children:[l,i&&r.jsx("div",{className:nt.metaRow,children:i})]}));H4.displayName="UltronUnderstandingCard";const U4={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},q4=g.forwardRef(({eyebrow:e="Decision",icon:a,factors:i,tone:s="warning",children:l,...d},p)=>r.jsxs(Zn,{ref:p,tone:s,eyebrow:e,icon:a??r.jsx(ul,{size:14}),...d,children:[l,i!=null&&i.length?r.jsx("div",{className:nt.metaRow,children:i.map((m,v)=>r.jsx(jn,{size:"sm",color:U4[s],variant:"subtle",children:m},v))}):null]}));q4.displayName="UltronDecisionCard";const V4="_root_ou64w_8",G4="_xs_ou64w_75",Y4="_sm_ou64w_84",K4="_md_ou64w_93",Q4="_lg_ou64w_102",Z4="_xl_ou64w_111",X4="_iconOnly_ou64w_122",J4="_primary_ou64w_132",ew="_secondary_ou64w_148",tw="_tertiary_ou64w_167",nw="_ghost_ou64w_185",rw="_destructive_ou64w_203",ow="_destructiveSecondary_ou64w_221",aw="_artwork_ou64w_69",iw="_label_ou64w_254",sw="_spinner_ou64w_69",lw="_light_ou64w_281",Jt={root:V4,xs:G4,sm:Y4,md:K4,lg:Q4,xl:Z4,iconOnly:X4,primary:J4,secondary:ew,tertiary:tw,ghost:nw,destructive:rw,destructiveSecondary:ow,artwork:aw,label:iw,spinner:sw,"alloy-spin":"_alloy-spin_ou64w_1",light:lw},cw={primary:Jt.primary,secondary:Jt.secondary,tertiary:Jt.tertiary,ghost:Jt.ghost,destructive:Jt.destructive,"destructive-secondary":Jt.destructiveSecondary},Te=g.forwardRef(({variant:e="primary",size:a="md",loading:i=!1,leadingArtwork:s,trailingArtwork:l,iconOnly:d=!1,className:p,children:m,disabled:v,...y},x)=>{const b=v||i;return r.jsxs("button",{ref:x,className:se(Jt.root,cw[e],Jt[a],d&&Jt.iconOnly,p),disabled:b,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":e,"data-size":a,...y,children:[i&&r.jsx("span",{className:Jt.spinner,"aria-hidden":"true"}),!i&&d&&r.jsx("span",{className:se(Jt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:m}),!i&&!d&&r.jsxs(r.Fragment,{children:[s&&r.jsx("span",{className:se(Jt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:s}),m&&r.jsx("span",{className:Jt.label,children:m}),l&&r.jsx("span",{className:se(Jt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l})]})]})});Te.displayName="Button";function b0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}b0.displayName="XCircleIcon";const dw=g.forwardRef(({eyebrow:e="Recommendation",icon:a,actions:i,onIgnore:s,ignoreLabel:l="Ignore",tone:d="info",children:p,...m},v)=>{const y=r.jsxs(r.Fragment,{children:[i.map((x,b)=>r.jsx(Te,{size:"sm",variant:x.variant??(b===0?"primary":"secondary"),leadingArtwork:x.icon,loading:x.loading,onClick:x.onClick,children:x.label},b)),s&&r.jsx(Te,{size:"sm",variant:"ghost",leadingArtwork:r.jsx(b0,{size:16}),onClick:s,children:l})]});return r.jsx(Zn,{ref:v,tone:d,eyebrow:e,icon:a??r.jsx(ul,{size:14}),footer:y,...m,children:p})});dw.displayName="UltronRecommendationCard";function ju({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}ju.displayName="Lock01Icon";const uw=g.forwardRef(({title:e,eyebrow:a="Approval required",icon:i,approveLabel:s="Approve & send",onApprove:l,approving:d=!1,cancelLabel:p="Cancel",onCancel:m,editLabel:v="Edit",onEdit:y,tone:x="warning",children:b,...k},S)=>{const _=r.jsxs(r.Fragment,{children:[m&&r.jsx(Te,{size:"md",variant:"ghost",onClick:m,children:p}),y&&r.jsx(Te,{size:"md",variant:"secondary",onClick:y,children:v}),r.jsx(Te,{size:"md",variant:"primary",leadingArtwork:r.jsx(hn,{size:18}),loading:d,onClick:l,children:s})]});return r.jsx(Zn,{ref:S,tone:x,eyebrow:a,title:e,icon:i??r.jsx(ju,{size:14}),trailing:r.jsx(go,{status:"awaiting-approval"}),footer:_,footerEnd:!0,...k,children:b})});uw.displayName="UltronApprovalCard";const pw=g.forwardRef(({eyebrow:e="Working",icon:a,steps:i,state:s="live",duration:l,tone:d="info",...p},m)=>r.jsx(Zn,{ref:m,tone:d,eyebrow:e,icon:a??r.jsx(gi,{size:14}),trailing:r.jsx(go,{status:s==="done"?"completed":"executing"}),...p,children:r.jsx(_u,{state:s,duration:l,children:i.map((v,y)=>r.jsx(dl,{type:v.type??"tool",status:v.status??"pending",detail:v.detail,subActivities:v.subActivities,children:v.label},y))})}));pw.displayName="UltronExecutionCard";const hw=g.forwardRef(({headline:e,detail:a,avatar:i,status:s="completed",tone:l="success",footer:d,...p},m)=>r.jsx(Zn,{ref:m,tone:l,fill:!0,accent:!1,trailing:r.jsx(go,{status:s}),footer:d,...p,children:r.jsxs("div",{className:nt.resultHero,children:[r.jsx("span",{className:se(nt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:i??r.jsx(pn,{size:18})}),r.jsxs("div",{children:[r.jsx("div",{className:nt.resultHeadline,children:e}),a!=null&&r.jsx("div",{className:nt.resultDetail,children:a})]})]})}));hw.displayName="UltronResultCard";function k0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}k0.displayName="ZapIcon";const fw=g.forwardRef(({title:e="Want Ultron to handle this automatically next time?",eyebrow:a="Save as workflow",icon:i,saveLabel:s="Save as workflow",onSave:l,saving:d=!1,dismissLabel:p="Not now",onDismiss:m,tone:v="info",children:y,...x},b)=>{const k=r.jsxs(r.Fragment,{children:[r.jsx(Te,{size:"md",variant:"primary",leadingArtwork:r.jsx(pl,{size:18}),loading:d,onClick:l,children:s}),m&&r.jsx(Te,{size:"md",variant:"ghost",onClick:m,children:p})]});return r.jsx(Zn,{ref:b,tone:v,fill:!0,accent:!1,eyebrow:a,title:e,icon:i??r.jsx(k0,{size:14}),footer:k,...x,children:y})});fw.displayName="UltronWorkflowSaveCard";const _0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};_0.displayName="GitBranch01Icon";function xd({label:e,children:a}){return r.jsxs("div",{className:nt.clause,children:[r.jsx("span",{className:nt.clauseLabel,children:e}),r.jsx("span",{className:nt.clauseBody,children:a})]})}const mw=g.forwardRef(({name:e,eyebrow:a="Workflow",icon:i,when:s,conditions:l,actions:d,status:p,footer:m,tone:v="info",...y},x)=>r.jsx(Zn,{ref:x,tone:v,eyebrow:a,title:e,icon:i??r.jsx(_0,{size:14}),trailing:p?r.jsx(go,{status:p}):void 0,footer:m,...y,children:r.jsxs("div",{className:nt.clauses,children:[r.jsx(xd,{label:"When",children:s}),r.jsx(xd,{label:"If",children:l}),r.jsx(xd,{label:"Then",children:d})]})}));mw.displayName="UltronWorkflowPreviewCard";const gw="_root_1nyuz_6",vw="_sm_1nyuz_20",xw="_md_1nyuz_29",yw="_lg_1nyuz_38",ww="_divider_1nyuz_48",bw="_interactive_1nyuz_53",kw="_disabled_1nyuz_60",_w="_destructive_1nyuz_64",Cw="_selected_1nyuz_78",jw="_label_1nyuz_87",Sw="_description_1nyuz_97",Nw="_leadingSlot_1nyuz_101",Mw="_trailingSlot_1nyuz_102",Rw="_content_1nyuz_115",Lw="_taSwitch_1nyuz_167",Aw="_taSwitchThumb_1nyuz_188",$w="_taCheckbox_1nyuz_203",Tw="_taRadio_1nyuz_226",Iw="_taRadioDot_1nyuz_244",Ew="_taExpand_1nyuz_252",Pw="_taStatus_1nyuz_266",zw="_taStatus_success_1nyuz_273",Ow="_taStatus_warning_1nyuz_274",Dw="_taStatus_error_1nyuz_275",Fw="_taStatus_info_1nyuz_276",xt={root:gw,sm:vw,md:xw,lg:yw,divider:ww,interactive:bw,disabled:kw,destructive:_w,selected:Cw,label:jw,description:Sw,leadingSlot:Nw,trailingSlot:Mw,content:Rw,taSwitch:Lw,taSwitchThumb:Aw,taCheckbox:$w,taRadio:Tw,taRadioDot:Iw,taExpand:Ew,taStatus:Pw,taStatus_success:zw,taStatus_warning:Ow,taStatus_error:Dw,taStatus_info:Fw},fn=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};fn.displayName="ChevronRightIcon";const Su=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Su.displayName="ArrowUpRightIcon";const Bw="_root_4qytd_5",Ww="_neutral_4qytd_25",Hw="_primary_4qytd_30",Uw="_success_4qytd_35",qw="_warning_4qytd_40",Vw="_error_4qytd_45",Gw="_info_4qytd_50",lf={root:Bw,neutral:Ww,primary:Hw,success:Uw,warning:qw,error:Vw,info:Gw},ia=g.forwardRef(({variant:e="neutral",className:a,children:i,...s},l)=>r.jsx("span",{ref:l,className:se(lf.root,lf[e],a),...s,children:i}));ia.displayName="Badge";const Yw=({checked:e})=>r.jsx("span",{className:xt.taSwitch,"data-checked":e||void 0,"aria-hidden":"true",children:r.jsx("span",{className:xt.taSwitchThumb})}),Kw=({checked:e})=>r.jsx("span",{className:xt.taCheckbox,"data-checked":e||void 0,"aria-hidden":"true",children:e&&r.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:r.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),Qw=({checked:e})=>r.jsx("span",{className:xt.taRadio,"data-checked":e||void 0,"aria-hidden":"true",children:e&&r.jsx("span",{className:xt.taRadioDot})}),Zw=({count:e,label:a})=>{const i=e!==void 0?String(e):a;return i?r.jsx(ia,{"aria-hidden":"true",children:i}):null},Xw=({expanded:e})=>r.jsx("span",{className:xt.taExpand,"data-expanded":e||void 0,"aria-hidden":"true",children:r.jsx(fn,{size:16,color:"currentColor"})}),Jw=({variant:e})=>r.jsx("span",{className:se(xt.taStatus,xt[`taStatus_${e}`]),"aria-hidden":"true"}),e6=new Set(["badge","status"]),un=g.forwardRef(({label:e,description:a,leadingSlot:i,trailingSlot:s,trailingAction:l,checked:d,defaultChecked:p=!1,onCheckedChange:m,badgeCount:v,badgeLabel:y,expanded:x=!1,statusVariant:b="success",divider:k=!0,size:S="md",interactive:_,selected:C=!1,destructive:N=!1,disabled:$=!1,className:M,onClick:j,onKeyDown:O,...L},R)=>{const I=l==="switch"||l==="checkbox"||l==="radio",[z,W]=g.useState(p),G=I?d!==void 0?d:z:!1,Q=_||!!j||I||l!==void 0&&!e6.has(l),B=l==="switch"?"switch":l==="checkbox"?"checkbox":l==="radio"?"radio":Q?"button":void 0,Y=g.useCallback(le=>{if(!$){if(I){const re=!G;d===void 0&&W(re),m==null||m(re)}j==null||j(le)}},[$,I,G,d,m,j]),ee=g.useCallback(le=>{Q&&!$&&(le.key==="Enter"||le.key===" ")&&(le.preventDefault(),Y(le)),O==null||O(le)},[Q,$,Y,O]),oe=s??(()=>{if(!l)return null;switch(l){case"chevron":return r.jsx(fn,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return r.jsx(Su,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return r.jsx(Yw,{checked:G});case"checkbox":return r.jsx(Kw,{checked:G});case"radio":return r.jsx(Qw,{checked:G});case"badge":return r.jsx(Zw,{count:v,label:y});case"expand":return r.jsx(Xw,{expanded:x});case"status":return r.jsx(Jw,{variant:b});default:return null}})();return r.jsxs("div",{ref:R,role:B,tabIndex:Q&&!$?0:void 0,"aria-checked":I?G:void 0,"aria-selected":C||void 0,"aria-disabled":$||void 0,"data-selected":C||void 0,"data-disabled":$||void 0,"data-destructive":N||void 0,"data-trailing-action":l??void 0,className:se(xt.root,xt[S],k&&xt.divider,Q&&xt.interactive,C&&xt.selected,N&&xt.destructive,$&&xt.disabled,M),onClick:$?void 0:Y,onKeyDown:ee,...L,children:[i&&r.jsx("div",{className:xt.leadingSlot,children:i}),r.jsxs("div",{className:xt.content,children:[r.jsx("span",{className:xt.label,children:e}),a&&r.jsx("span",{className:xt.description,children:a})]}),oe&&r.jsx("div",{className:xt.trailingSlot,children:oe})]})});un.displayName="ListItem";const t6=g.forwardRef(({title:e,meta:a,icon:i,status:s,...l},d)=>r.jsx(un,{ref:d,label:e,description:a,leadingSlot:i?r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:i}):void 0,trailingSlot:r.jsx(go,{status:s}),...l}));t6.displayName="UltronActivityStreamItem";const n6="_root_1sz1z_7",r6="_status_1sz1z_50",yd={root:n6,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:r6},Nu=g.forwardRef(({disabled:e=!1,size:a="md",escapeTarget:i,onEscape:s,className:l,children:d,...p},m)=>{const v=g.useRef(null),[y,x]=g.useState(""),b=g.Children.map(d,k=>{if(!g.isValidElement(k))return k;const S=k.props;return g.cloneElement(k,{groupDisabled:e||!!S.groupDisabled})});return g.useEffect(()=>{if(!i||!s)return;const k=S=>{S.key==="Escape"&&s()};return i.addEventListener("keydown",k),()=>i.removeEventListener("keydown",k)},[i,s]),g.useCallback(k=>x(k),[]),r.jsxs("div",{ref:m,"data-size":a,className:se(yd.root,yd[`size-${a}`],l),...p,children:[b,r.jsx("span",{ref:v,className:yd.status,role:"status","aria-live":"polite",children:y})]})});Nu.displayName="ComposerActions";function wd({size:e=24,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})}const Mu=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Mu.displayName="SearchSmIcon";const Ws=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ws.displayName="Trash03Icon";const C0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};C0.displayName="SunIcon";const j0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};j0.displayName="ArrowNarrowRightIcon";function lo({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function cf({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function o6({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const Js=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Js.displayName="ChevronSelectorVerticalIcon";const co=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:a}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:a,strokeWidth:d,strokeLinecap:"round",strokeLinejoin:"round"})]})};co.displayName="ClipboardCheckIcon";const S0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.25:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:a,strokeWidth:d})})};S0.displayName="SettingsGearIcon";const N0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 6L9 12L15 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};N0.displayName="ChevronLeftIcon";const M0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3 3L21 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};M0.displayName="EyeOffIcon";const R0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};R0.displayName="StopIcon";const L0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};L0.displayName="RecordingIcon";const A0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};A0.displayName="BankIcon";function fl({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}fl.displayName="ArrowNarrowUpIcon";function $0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}$0.displayName="ArrowNarrowDownIcon";function Ru({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ru.displayName="Microphone02Icon";const ea=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};ea.displayName="AlertTriangleIcon";const T0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};T0.displayName="BankNote01Icon";const I0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V6.5M2 5V17C2 18.1046 4.46243 19 7.5 19M7.5 11C7.33145 11 7.16468 10.9972 7 10.9918C4.19675 10.9 2 10.0433 2 9M7.5 15C4.46243 15 2 14.1046 2 13M22 11.5C22 12.6046 19.5376 13.5 16.5 13.5C13.4624 13.5 11 12.6046 11 11.5M22 11.5C22 10.3954 19.5376 9.5 16.5 9.5C13.4624 9.5 11 10.3954 11 11.5M22 11.5V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11.5M22 15.25C22 16.3546 19.5376 17.25 16.5 17.25C13.4624 17.25 11 16.3546 11 15.25",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};I0.displayName="CoinsStacked03Icon";function E0({size:e=16,color:a="currentColor",...i}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[r.jsx("path",{d:"M12 2V22",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const Lu=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Lu.displayName="Map01Icon";const P0=({size:e=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M16.5 9.5L7.5 4.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};P0.displayName="PackageIcon";const z0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};z0.displayName="ThumbsUpIcon";const O0=({size:e=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};O0.displayName="ThumbsDownIcon";function Au({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 21V15.6C15 15.0399 15 14.7599 14.891 14.546C14.7951 14.3578 14.6422 14.2049 14.454 14.109C14.2401 14 13.9601 14 13.4 14H10.6C10.0399 14 9.75992 14 9.54601 14.109C9.35785 14.2049 9.20487 14.3578 9.10899 14.546C9 14.7599 9 15.0399 9 15.6V21M3 7C3 8.65685 4.34315 10 6 10C7.65685 10 9 8.65685 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 8.65685 16.3431 10 18 10C19.6569 10 21 8.65685 21 7M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Au.displayName="Building02Icon";function $u({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}$u.displayName="Building05Icon";function vi({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}vi.displayName="CheckVerified01Icon";function D0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}D0.displayName="Copy01Icon";function F0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z",fill:a})})}F0.displayName="DotsVerticalIcon";function B0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}B0.displayName="Edit02Icon";function Tu({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12.7076 18.3639L11.2933 19.7781C9.34072 21.7308 6.1749 21.7308 4.22228 19.7781C2.26966 17.8255 2.26966 14.6597 4.22228 12.7071L5.63649 11.2929M18.3644 12.7071L19.7786 11.2929C21.7312 9.34024 21.7312 6.17441 19.7786 4.22179C17.826 2.26917 14.6602 2.26917 12.7076 4.22179L11.2933 5.636M8.50045 15.4999L15.5005 8.49994",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Tu.displayName="Link01Icon";function ml({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}ml.displayName="LinkExternal01Icon";function W0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 4.6C15 4.03995 15 3.75992 14.891 3.54601C14.7951 3.35785 14.6422 3.20487 14.454 3.10899C14.2401 3 13.9601 3 13.4 3H10.6C10.0399 3 9.75992 3 9.54601 3.10899C9.35785 3.20487 9.20487 3.35785 9.10899 3.54601C9 3.75992 9 4.03995 9 4.6V7.4C9 7.96005 9 8.24008 8.89101 8.45399C8.79513 8.64215 8.64215 8.79513 8.45399 8.89101C8.24008 9 7.96005 9 7.4 9H4.6C4.03995 9 3.75992 9 3.54601 9.10899C3.35785 9.20487 3.20487 9.35785 3.10899 9.54601C3 9.75992 3 10.0399 3 10.6V13.4C3 13.9601 3 14.2401 3.10899 14.454C3.20487 14.6422 3.35785 14.7951 3.54601 14.891C3.75992 15 4.03995 15 4.6 15H7.4C7.96005 15 8.24008 15 8.45399 15.109C8.64215 15.2049 8.79513 15.3578 8.89101 15.546C9 15.7599 9 16.0399 9 16.6V19.4C9 19.9601 9 20.2401 9.10899 20.454C9.20487 20.6422 9.35785 20.7951 9.54601 20.891C9.75992 21 10.0399 21 10.6 21H13.4C13.9601 21 14.2401 21 14.454 20.891C14.6422 20.7951 14.7951 20.6422 14.891 20.454C15 20.2401 15 19.9601 15 19.4V16.6C15 16.0399 15 15.7599 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109C15.7599 15 16.0399 15 16.6 15H19.4C19.9601 15 20.2401 15 20.454 14.891C20.6422 14.7951 20.7951 14.6422 20.891 14.454C21 14.2401 21 13.9601 21 13.4V10.6C21 10.0399 21 9.75992 20.891 9.54601C20.7951 9.35785 20.6422 9.20487 20.454 9.10899C20.2401 9 19.9601 9 19.4 9L16.6 9C16.0399 9 15.7599 9 15.546 8.89101C15.3578 8.79513 15.2049 8.64215 15.109 8.45399C15 8.24008 15 7.96005 15 7.4V4.6Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}W0.displayName="MedicalCrossIcon";function el({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}el.displayName="MessageCircle02Icon";function Iu({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Iu.displayName="MinusIcon";function H0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}H0.displayName="Moon01Icon";function U0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}U0.displayName="Pin01Icon";function q0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M8.8125 10.4167L10.9375 12.5278L15.7188 7.77778M20.5 21.5V7.56667C20.5 5.79317 20.5 4.90642 20.1526 4.22903C19.847 3.63318 19.3594 3.14875 18.7596 2.84515C18.0778 2.5 17.1852 2.5 15.4 2.5H8.6C6.81483 2.5 5.92225 2.5 5.24041 2.84515C4.64064 3.14875 4.15301 3.63318 3.84742 4.22903C3.5 4.90642 3.5 5.79317 3.5 7.56667V21.5L6.42188 19.3889L9.07812 21.5L12 19.3889L14.9219 21.5L17.5781 19.3889L20.5 21.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}q0.displayName="ReceiptCheckIcon";function V0({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}V0.displayName="Trash01Icon";function Qd({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Qd.displayName="UploadCloud01Icon";function si({size:e=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}si.displayName="XCloseIcon";const a6="_base_i93xz_11",i6="_icon_i93xz_45",s6="_sendReady_i93xz_65",l6="_sendStreaming_i93xz_66",c6="_sendDisabled_i93xz_67",d6="_sendError_i93xz_68",u6="_attachIdle_i93xz_131",p6="_attachDisabled_i93xz_145",h6="_attachError_i93xz_152",f6="_voiceIdle_i93xz_165",m6="_voiceRecording_i93xz_179",g6="_voiceDisabled_i93xz_189",v6="_iconStack_i93xz_200",x6="_iconLayer_i93xz_209",ft={base:a6,icon:i6,sendReady:s6,sendStreaming:l6,sendDisabled:c6,sendError:d6,attachIdle:u6,attachDisabled:p6,attachError:h6,voiceIdle:f6,voiceRecording:m6,voiceDisabled:g6,iconStack:v6,iconLayer:x6},y6={hidden:void 0,ready:ft.sendReady,"disabled-invalid":ft.sendDisabled,streaming:ft.sendStreaming,error:ft.sendError},w6=(e,a,i)=>{switch(e){case"ready":return"Send message";case"disabled-invalid":return a?`Cannot send: ${a}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},sa=g.forwardRef(({state:e,onSend:a,onStop:i,onRetry:s,invalidReason:l,errorMessage:d,groupDisabled:p,className:m,style:v,...y},x)=>{const b=g.useRef(null),k=g.useRef(null),S=g.useCallback(j=>{k.current=j,typeof x=="function"?x(j):x&&(x.current=j)},[x]),_=g.useCallback(()=>{if(e==="ready"){a==null||a();return}if(e==="streaming"){i==null||i();return}if(e==="error"){const j=k.current;j&&(j.dataset.pressed="true",b.current&&clearTimeout(b.current),b.current=setTimeout(()=>{j.dataset.pressed="false"},140)),s==null||s()}},[e,a,i,s]);if(e==="hidden")return null;const C=!p&&(e==="ready"||e==="streaming"||e==="error"),N=w6(e,l,d),$=e==="disabled-invalid"?l??"Cannot send":e==="error"?d??"Send failed — click to retry":null,M=r.jsx("button",{ref:S,type:"button","data-composer-action":"send","data-state":e,className:se(ft.base,y6[e],m),style:v,"aria-label":N,disabled:!C,onClick:_,...y,children:r.jsxs("span",{className:ft.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[r.jsx("span",{className:ft.iconLayer,"data-active":e==="ready"||e==="disabled-invalid"?"true":"false",children:r.jsx(fl,{size:"100%",strokeWidth:2})}),r.jsx("span",{className:ft.iconLayer,"data-active":e==="streaming"?"true":"false",children:r.jsx(R0,{size:"100%",strokeWidth:1.75})}),r.jsx("span",{className:ft.iconLayer,"data-active":e==="error"?"true":"false",children:r.jsx(gi,{size:"100%",strokeWidth:2})})]})});return $?r.jsx(pr,{content:$,placement:"top",children:M}):M});sa.displayName="ComposerSendButton";const b6={idle:ft.attachIdle,disabled:ft.attachDisabled,error:ft.attachError},k6=(e,a,i)=>{switch(e){case"idle":return"Add attachment";case"disabled":return a?`Attachments unavailable: ${a}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},G0=g.forwardRef(({state:e,onSelect:a,accept:i,multiple:s=!0,disabledReason:l,errorMessage:d,groupDisabled:p,className:m,style:v,...y},x)=>{const b=g.useRef(null),k=g.useCallback(()=>{var M;(e==="idle"||e==="error")&&((M=b.current)==null||M.click())},[e]),S=g.useCallback(M=>{const j=M.target.files;j&&j.length>0&&(a==null||a(j)),M.target.value=""},[a]),_=!p&&e!=="disabled",C=k6(e,l,d),N=e==="disabled"?l??"Attachments unavailable":e==="error"?d??"Attachment failed":null,$=r.jsxs("button",{ref:x,type:"button","data-composer-action":"attachment","data-state":e,className:se(ft.base,b6[e],m),style:v,"aria-label":C,disabled:!_,onClick:k,...y,children:[r.jsx("span",{className:ft.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:r.jsx(mo,{size:"100%",strokeWidth:2})}),r.jsx("input",{ref:b,type:"file",accept:i,multiple:s,onChange:S,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return N?r.jsx(pr,{content:N,placement:"top",children:$}):$});G0.displayName="ComposerAttachment";const _6={idle:ft.voiceIdle,recording:ft.voiceRecording,disabled:ft.voiceDisabled},C6=(e,a)=>{switch(e){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return a?`Voice unavailable: ${a}`:"Voice unavailable"}},Y0=g.forwardRef(({state:e,onStartRecording:a,onStopRecording:i,disabledReason:s,groupDisabled:l,className:d,style:p,...m},v)=>{const y=g.useCallback(()=>{if(e==="idle"){a==null||a();return}if(e==="recording"){i==null||i();return}},[e,a,i]),x=!l&&e!=="disabled",b=C6(e,s),k=e==="disabled"?s??"Voice unavailable":null,S=r.jsx("button",{ref:v,type:"button","data-composer-action":"voice","data-state":e,className:se(ft.base,_6[e],d),style:p,"aria-label":b,"aria-pressed":e==="recording"||void 0,disabled:!x,onClick:y,...m,children:r.jsxs("span",{className:ft.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[r.jsx("span",{className:ft.iconLayer,"data-active":e!=="recording"?"true":"false",children:r.jsx(Ru,{size:"100%",strokeWidth:1.5})}),r.jsx("span",{className:ft.iconLayer,"data-active":e==="recording"?"true":"false",children:r.jsx(L0,{size:"100%",strokeWidth:1.5})})]})});return k?r.jsx(pr,{content:k,placement:"top",children:S}):S});Y0.displayName="ComposerVoiceButton";const j6=g.forwardRef(({value:e,onChange:a,onSubmit:i,placeholder:s="Ask Ultron…",sending:l=!1,disabled:d=!1,voice:p=!0,maxRows:m=4,radius:v="lg",leadingActions:y,className:x},b)=>{const k=l?"streaming":e.trim().length===0?"hidden":"ready";return r.jsx(m0,{className:x,style:{flex:"0 0 auto"},children:r.jsx(g0,{ref:b,value:e,onChange:a,onSubmit:i,placeholder:s,maxRows:m,radius:v,disabled:d,children:r.jsxs(Nu,{size:"md",disabled:d,children:[y,p&&r.jsx(Y0,{state:d?"disabled":"idle"}),r.jsx(sa,{state:k,onSend:i,onStop:i})]})})})});j6.displayName="UltronCommandBar";const S6=g.forwardRef(({stages:e,state:a="live",duration:i,...s},l)=>r.jsx(_u,{ref:l,state:a,duration:i,...s,children:e.map((d,p)=>r.jsx(dl,{type:d.type??"content",status:d.status??"pending",icon:d.icon,detail:d.detail,children:d.label},p))}));S6.displayName="UltronThreadTimeline";const N6="_root_ghwhu_10",M6="_badge_ghwhu_27",R6="_badgeIcon_ghwhu_38",L6="_green_ghwhu_59",A6="_yellow_ghwhu_60",$6="_matcha_ghwhu_61",T6="_purple_ghwhu_62",I6="_blue_ghwhu_63",E6="_azure_ghwhu_64",P6="_red_ghwhu_65",z6="_orange_ghwhu_66",O6="_pink_ghwhu_67",D6="_slate_ghwhu_68",F6="_content_ghwhu_73",B6="_label_ghwhu_83",W6="_valueRow_ghwhu_97",H6="_change_ghwhu_106",U6="_value_ghwhu_97",sr={root:N6,badge:M6,badgeIcon:R6,green:L6,yellow:A6,matcha:$6,purple:T6,blue:I6,azure:E6,red:P6,orange:z6,pink:O6,slate:D6,content:F6,label:B6,valueRow:W6,change:H6,value:U6},q6=g.forwardRef(({color:e="slate",icon:a,label:i,value:s,change:l,className:d,...p},m)=>r.jsxs("div",{ref:m,className:se(sr.root,d),...p,children:[r.jsx("div",{className:se(sr.badge,sr[e]),"aria-hidden":"true",children:r.jsx("span",{className:sr.badgeIcon,children:a})}),r.jsxs("div",{className:sr.content,children:[r.jsx("span",{className:sr.label,children:i}),r.jsxs("div",{className:sr.valueRow,children:[r.jsx("span",{className:sr.value,children:s}),l!=null&&r.jsx("span",{className:sr.change,children:l})]})]})]}));q6.displayName="DataCard";const V6="_root_d0j6n_7",G6="_icon_d0j6n_21",Y6="_text_d0j6n_33",K6="_positive_d0j6n_41",Q6="_warning_d0j6n_45",Z6="_negative_d0j6n_49",Ts={root:V6,icon:G6,text:Y6,positive:K6,warning:Q6,negative:Z6};function X6(e){return e==="up"?"positive":"negative"}const J6=g.forwardRef((e,a)=>{const{mode:i,value:s,className:l,...d}=e,p=i==="trend"?e.severity??X6(e.trend):e.severity,{severity:m,...v}=d,y=i==="trend"?(({trend:b,severity:k,...S})=>S)(v):v,x=i==="trend"?e.trend==="up"?fl:$0:null;return r.jsxs("span",{ref:a,className:se(Ts.root,Ts[p],l),...y,children:[r.jsx("span",{className:Ts.text,children:s}),x&&r.jsx("span",{className:Ts.icon,"aria-hidden":"true",children:r.jsx(x,{size:14})})]})});J6.displayName="ValueChangeLabel";const e9="_root_1lq10_1",t9="_horizontal_1lq10_9",n9="_vertical_1lq10_15",r9="_solid_1lq10_32",o9="_dashed_1lq10_36",Is={root:e9,horizontal:t9,vertical:n9,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:r9,dashed:o9},a9=g.forwardRef(({thickness:e=1,orientation:a="horizontal",variant:i="solid",className:s,...l},d)=>r.jsx("hr",{ref:d,role:"separator","aria-orientation":a,className:se(Is.root,Is[`thickness-${e}`],Is[a],Is[i],s),...l}));a9.displayName="Divider";const i9="_overlay_vxgy2_9",s9="_dialogOverlayIn_vxgy2_1",l9="_dialogOverlayOut_vxgy2_1",c9="_dialog_vxgy2_38",d9="_dialogIn_vxgy2_1",u9="_dialogOut_vxgy2_1",p9="_sm_vxgy2_88",h9="_md_vxgy2_89",f9="_lg_vxgy2_90",m9="_header_vxgy2_95",g9="_title_vxgy2_107",v9="_closeBtn_vxgy2_120",x9="_content_vxgy2_152",y9="_footer_vxgy2_163",Dr={overlay:i9,dialogOverlayIn:s9,dialogOverlayOut:l9,dialog:c9,dialogIn:d9,dialogOut:u9,sm:p9,md:h9,lg:f9,header:m9,title:g9,closeBtn:v9,content:x9,footer:y9},w9=g.forwardRef(({onClose:e,children:a,className:i,...s},l)=>r.jsxs("div",{ref:l,className:se(Dr.header,i),...s,children:[r.jsx("span",{className:Dr.title,children:a}),e&&r.jsx("button",{type:"button",className:Dr.closeBtn,onClick:e,"aria-label":"Close",children:r.jsx(mi,{size:16})})]}));w9.displayName="DialogHeader";const b9=g.forwardRef(({children:e,className:a,...i},s)=>r.jsx("div",{ref:s,className:se(Dr.content,a),...i,children:e}));b9.displayName="DialogContent";const k9=g.forwardRef(({children:e,className:a,...i},s)=>r.jsx("div",{ref:s,className:se(Dr.footer,a),...i,children:e}));k9.displayName="DialogFooter";function _9({open:e,onClose:a,size:i="sm",children:s,"aria-label":l,"aria-labelledby":d}){const p=g.useRef(null),m=180,[v,y]=g.useState(e);return g.useEffect(()=>{if(e){y(!0);return}const x=setTimeout(()=>y(!1),m);return()=>clearTimeout(x)},[e]),g.useEffect(()=>{if(!e)return;const x=b=>{b.key==="Escape"&&a()};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[e,a]),g.useEffect(()=>{if(!e)return;const x=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=x}},[e]),v?fi.createPortal(r.jsx("div",{className:Dr.overlay,"data-state":e?"open":"closed",role:"dialog","aria-modal":"true","aria-label":l,"aria-labelledby":d,onMouseDown:x=>{x.target===x.currentTarget&&a()},children:r.jsx("div",{ref:p,className:se(Dr.dialog,Dr[i]),"data-state":e?"open":"closed",children:s})}),document.body):null}const C9="_root_1dntq_7",j9="_badge_1dntq_57",S9="_badgeIconSlot_1dntq_74",N9="_content_1dntq_82",M9="_text_1dntq_90",R9="_title_1dntq_99",L9="_description_1dntq_120",A9="_actions_1dntq_131",$9="_dot_1dntq_137",T9="_actionLink_1dntq_144",I9="_primaryAction_1dntq_162",E9="_trailing_1dntq_170",Dt={root:C9,badge:j9,badgeIconSlot:S9,content:N9,text:M9,title:R9,description:L9,actions:A9,dot:$9,actionLink:T9,primaryAction:I9,trailing:E9},P9=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),z9=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),O9=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),df=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),D9={error:P9,warning:O9,success:z9,info:df,feature:df},K0=g.forwardRef(({status:e="info",variant:a="lighter",size:i="sm",title:s,description:l,action:d,onAction:p,learnMore:m,onLearnMore:v,onDismiss:y,className:x,...b},k)=>{const S=D9[e],_=i==="lg",C=y?r.jsx(Te,{variant:"ghost",size:"xs",iconOnly:!0,onClick:y,"aria-label":"Dismiss",children:r.jsx(mi,{size:12})}):null;return r.jsxs("div",{ref:k,role:"alert",className:se(Dt.root,x),"data-status":e,"data-variant":a,"data-size":i,...b,children:[r.jsx("span",{className:Dt.badge,"aria-hidden":"true",children:r.jsx("span",{className:se("alloy-icon-slot",Dt.badgeIconSlot),children:r.jsx(S,{})})}),_?r.jsxs("div",{className:Dt.content,children:[r.jsxs("div",{className:Dt.text,children:[r.jsx("p",{className:Dt.title,children:s}),l&&r.jsx("p",{className:Dt.description,children:l})]}),(d||m)&&r.jsxs("div",{className:Dt.actions,children:[d&&r.jsx("button",{type:"button",className:se(Dt.actionLink,Dt.primaryAction),onClick:p,children:d}),d&&m&&r.jsx("span",{className:Dt.dot,"aria-hidden":"true",children:"·"}),m&&r.jsx("button",{type:"button",className:Dt.actionLink,onClick:v,children:m})]})]}):r.jsx("p",{className:Dt.title,children:s}),_?C:(d||y)&&r.jsxs("div",{className:Dt.trailing,children:[d&&r.jsx("button",{type:"button",className:se(Dt.actionLink,Dt.primaryAction),onClick:p,children:d}),C]})]})});K0.displayName="Alert";const F9="_stack_x4xl7_11",B9="_item_x4xl7_28",W9="_itemExiting_x4xl7_33",Zd={stack:F9,item:B9,itemExiting:W9},H9=g.createContext(null);function U9({id:e,title:a,description:i,status:s,variant:l,size:d,action:p,onAction:m,duration:v,exiting:y,onRemove:x}){const b=g.useCallback(()=>x(e),[e,x]);return r.jsx("div",{className:se(Zd.item,y&&Zd.itemExiting),onAnimationEnd:y?b:void 0,children:r.jsx(K0,{status:s,variant:l,size:d,title:a,description:i,action:p,onAction:m,onDismiss:b,style:{width:"100%"}})})}function q9({toasts:e,onStartExit:a,onRemove:i}){return g.useEffect(()=>{const s=[];return e.forEach(l=>{l.duration>0&&!l.exiting&&s.push(setTimeout(()=>a(l.id),l.duration))}),()=>s.forEach(clearTimeout)},[e,a]),e.length===0?null:fi.createPortal(r.jsx("div",{className:Zd.stack,"aria-live":"polite","aria-atomic":"false",children:e.map(s=>r.jsx(U9,{...s,onRemove:i},s.id))}),document.body)}function V9({children:e}){const[a,i]=g.useState([]),s=g.useRef(0),l=g.useCallback(m=>{const v=`toast-${++s.current}`;return i(y=>[...y,{id:v,title:m.title,description:m.description,status:m.status??"info",variant:m.variant??"stroke",size:m.size??"sm",action:m.action,onAction:m.onAction,duration:m.duration??4e3,exiting:!1}]),v},[]),d=g.useCallback(m=>{i(v=>v.map(y=>y.id===m?{...y,exiting:!0}:y))},[]),p=g.useCallback(m=>{i(v=>v.filter(y=>y.id!==m))},[]);return r.jsxs(H9.Provider,{value:{addToast:l,removeToast:d},children:[e,r.jsx(q9,{toasts:a,onStartExit:d,onRemove:p})]})}const G9="_root_1s0ek_5",Y9="_list_1s0ek_11",K9="_item_1s0ek_23",Q9="_separator_1s0ek_31",Z9="_link_1s0ek_47",X9="_current_1s0ek_68",J9="_iconSlot_1s0ek_76",Kn={root:G9,list:Y9,item:K9,separator:Q9,link:Z9,current:X9,iconSlot:J9},e8=()=>r.jsx("span",{className:Kn.separator,"aria-hidden":"true",children:"/"}),t8=()=>r.jsx("span",{className:Kn.separator,"aria-hidden":"true",children:r.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),n8=g.forwardRef(({items:e,separator:a="slash",className:i,...s},l)=>{const d=a==="chevron"?t8:e8;return r.jsx("nav",{ref:l,"aria-label":"Breadcrumb",className:se(Kn.root,i),...s,children:r.jsx("ol",{className:Kn.list,children:e.map((p,m)=>{const v=m===e.length-1,y=!v&&(!!p.href||!!p.onClick);return r.jsxs("li",{className:Kn.item,children:[m>0&&r.jsx(d,{}),y?r.jsxs("a",{href:p.href,onClick:p.onClick,className:Kn.link,"aria-label":p.label,children:[p.icon&&r.jsx("span",{className:se(Kn.iconSlot,"alloy-icon-slot"),children:p.icon}),r.jsx("span",{children:p.label})]}):r.jsxs("span",{className:se(Kn.link,v&&Kn.current),"aria-current":v?"page":void 0,children:[p.icon&&r.jsx("span",{className:se(Kn.iconSlot,"alloy-icon-slot"),children:p.icon}),r.jsx("span",{children:p.label})]})]},m)})})})});n8.displayName="Breadcrumb";const r8="_root_139vz_6",o8="_divider_139vz_14",a8="_item_139vz_19",i8="_label_139vz_25",s8="_description_139vz_26",l8="_chevron_139vz_27",c8="_iconSlot_139vz_28",d8="_hitTarget_139vz_32",u8="_size_sm_139vz_37",p8="_size_md_139vz_43",h8="_size_lg_139vz_49",f8="_header_139vz_59",m8="_headerContent_139vz_59",g8="_checkboxWrap_139vz_60",v8="_labelBlock_139vz_157",x8="_trailingSlot_139vz_60",y8="_body_139vz_199",w8="_bodyInner_139vz_209",b8="_bodyContent_139vz_214",Rt={root:r8,divider:o8,item:a8,label:i8,description:s8,chevron:l8,iconSlot:c8,hitTarget:d8,size_sm:u8,size_md:p8,size_lg:h8,header:f8,headerContent:m8,checkboxWrap:g8,labelBlock:v8,trailingSlot:x8,body:y8,bodyInner:w8,bodyContent:b8},k8="_root_17t97_6",_8="_disabled_17t97_12",C8="_sm_17t97_18",j8="_md_17t97_26",S8="_lg_17t97_34",N8="_controlWrap_17t97_43",M8="_input_17t97_52",R8="_box_17t97_67",L8="_boxChecked_17t97_96",A8="_boxError_17t97_106",$8="_labelWrap_17t97_116",T8="_label_17t97_116",I8="_error_17t97_138",E8="_required_17t97_140",P8="_description_17t97_145",sn={root:k8,disabled:_8,sm:C8,md:j8,lg:S8,controlWrap:N8,input:M8,box:R8,boxChecked:L8,boxError:A8,labelWrap:$8,label:T8,error:I8,required:E8,description:P8},Q0=g.forwardRef(({checked:e,defaultChecked:a=!1,indeterminate:i=!1,onChange:s,disabled:l,error:d,size:p="md",label:m,description:v,id:y,name:x,value:b,required:k,className:S},_)=>{const C=g.useId(),N=y??C,$=g.useRef(null);g.useEffect(()=>{$.current&&($.current.indeterminate=i)},[i]);const M=e!==void 0,[j,O]=g.useState(a),L=M?e:j,R=z=>{M||O(z.target.checked),s==null||s(z.target.checked)},I=L||i;return r.jsxs("div",{className:se(sn.root,sn[p],l&&sn.disabled,d&&sn.error,S),children:[r.jsxs("div",{className:sn.controlWrap,children:[r.jsx("input",{ref:z=>{$.current=z,typeof _=="function"?_(z):_&&(_.current=z)},type:"checkbox",id:N,name:x,value:b,checked:L,disabled:l,required:k,"aria-invalid":d||void 0,onChange:R,className:sn.input}),r.jsx("span",{className:se(sn.box,I&&sn.boxChecked,d&&sn.boxError),"aria-hidden":"true",children:i?r.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:r.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):L?r.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:r.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(m||v)&&r.jsxs("div",{className:sn.labelWrap,children:[m&&r.jsxs("label",{htmlFor:N,className:sn.label,children:[m,k&&r.jsx("span",{className:sn.required,"aria-hidden":"true",children:" *"})]}),v&&r.jsx("span",{className:sn.description,children:v})]})]})});Q0.displayName="Checkbox";const Z0=g.createContext(null),Xd=g.createContext(0),X0=g.forwardRef(({type:e="multiple",collapsible:a=!0,value:i,defaultValue:s,onValueChange:l,divider:d=!0,size:p="md",disabled:m=!1,className:v,children:y,...x},b)=>{const k=g.useMemo(()=>Array.isArray(s)?new Set(s):typeof s=="string"?new Set([s]):new Set,[]),[S,_]=g.useState(k),C=i!==void 0,N=g.useMemo(()=>C?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:S,[C,i,S]),$=g.useCallback(O=>N.has(O),[N]),M=g.useCallback(O=>{const L=new Set(N);e==="single"?L.has(O)?a&&L.delete(O):(L.clear(),L.add(O)):L.has(O)?L.delete(O):L.add(O),C||_(L),l&&l(e==="single"?L.values().next().value??"":Array.from(L))},[N,e,a,C,l]),j=g.useMemo(()=>({type:e,collapsible:a,size:p,disabled:m,isExpanded:$,toggle:M}),[e,a,p,m,$,M]);return r.jsx("div",{ref:b,"data-accordion-root":"","data-divider":d||void 0,"data-disabled":m||void 0,"data-size":p,className:se(Rt.root,d&&Rt.divider,v),...x,children:r.jsx(Z0.Provider,{value:j,children:r.jsx(Xd.Provider,{value:0,children:y})})})});X0.displayName="Accordion";function Es(e,a){const i=e.closest("[data-accordion-root]");if(!i)return;const s=e.getAttribute("data-accordion-depth"),l=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${s}"]`)).filter(m=>m.closest("[data-accordion-root]")===i);if(l.length===0)return;const d=l.indexOf(e);let p;switch(a){case"first":p=l[0];break;case"last":p=l[l.length-1];break;case"next":p=l[(d+1)%l.length];break;case"prev":p=l[(d-1+l.length)%l.length];break}p.focus()}const J0=g.forwardRef(({value:e,label:a,description:i,icon:s,leadingSlot:l,trailingSlot:d,chevronPosition:p="leading",selectable:m=!1,checked:v,defaultChecked:y=!1,indeterminate:x=!1,onCheckedChange:b,expanded:k,defaultExpanded:S=!1,onExpandedChange:_,disabled:C=!1,size:N,className:$,children:M,...j},O)=>{const L=g.useContext(Z0),R=g.useContext(Xd),I=L!==null,z=N??(L==null?void 0:L.size)??"md",W=C||(L==null?void 0:L.disabled)||!1,[G,Q]=g.useState(S);let B;I?B=e!==void 0?L.isExpanded(e):!1:k!==void 0?B=k:B=G;const Y=g.useCallback(()=>{if(W)return;if(I){if(e===void 0)return;const A=L.isExpanded(e);L.toggle(e);const q=L.type==="single"&&!L.collapsible&&A?!0:!A;_==null||_(q);return}const E=!B;k===void 0&&Q(E),_==null||_(E)},[W,I,L,e,B,k,_]),ee=g.useCallback(E=>b==null?void 0:b(E),[b]),oe=g.useCallback(E=>{if(E.key==="Enter"||E.key===" "){E.preventDefault(),Y();return}if(I)switch(E.key){case"ArrowDown":E.preventDefault(),Es(E.currentTarget,"next");break;case"ArrowUp":E.preventDefault(),Es(E.currentTarget,"prev");break;case"Home":E.preventDefault(),Es(E.currentTarget,"first");break;case"End":E.preventDefault(),Es(E.currentTarget,"last");break}},[Y,I]),le=g.useId(),re=`${le}-header`,X=`${le}-body`,D=z==="sm"?16:z==="md"?18:20,V=l??r.jsxs(r.Fragment,{children:[m&&r.jsx("span",{className:Rt.checkboxWrap,children:r.jsx(Q0,{size:z,checked:v,defaultChecked:y,indeterminate:x,disabled:W,onChange:ee})}),s&&r.jsx("span",{className:Rt.iconSlot,"aria-hidden":"true",children:s})]});return r.jsxs("div",{ref:O,"data-accordion-item":"","data-expanded":B||void 0,"data-disabled":W||void 0,"data-size":z,"data-depth":R,className:se(Rt.item,Rt[`size_${z}`],$),style:{"--accordion-depth":R},...j,children:[r.jsxs("div",{className:Rt.header,children:[r.jsx("button",{type:"button",id:re,"data-accordion-header-button":"","data-accordion-depth":R,className:Rt.hitTarget,"aria-expanded":B,"aria-controls":X,"aria-disabled":W||void 0,disabled:W,onClick:Y,onKeyDown:oe}),r.jsxs("div",{className:Rt.headerContent,children:[p==="leading"&&r.jsx("span",{className:Rt.chevron,"aria-hidden":"true",children:r.jsx(fn,{size:D,color:"currentColor"})}),V,r.jsxs("div",{className:Rt.labelBlock,children:[r.jsx("span",{className:Rt.label,children:a}),i&&r.jsx("span",{className:Rt.description,children:i})]}),d&&r.jsx("div",{className:Rt.trailingSlot,children:d}),p==="trailing"&&r.jsx("span",{className:Rt.chevron,"aria-hidden":"true",children:r.jsx(fn,{size:D,color:"currentColor"})})]})]}),r.jsx("div",{id:X,role:"region","aria-labelledby":re,className:Rt.body,"aria-hidden":!B,children:r.jsx("div",{className:Rt.bodyInner,children:r.jsx("div",{className:Rt.bodyContent,children:r.jsx(Xd.Provider,{value:R+1,children:M})})})})]})});J0.displayName="AccordionItem";const z8="_root_1vgip_7",O8="_fullWidth_1vgip_12",D8="_panel_1vgip_19",F8="_panelInner_1vgip_73",B8="_item_1vgip_81",W8="_groupHeading_1vgip_87",H8="_groupHeadingSm_1vgip_96",U8="_groupHeadingLabel_1vgip_100",q8="_groupHeadingCollapsible_1vgip_112",V8="_groupChevron_1vgip_125",G8="_groupDivider_1vgip_139",Fn={root:z8,fullWidth:O8,panel:D8,panelInner:F8,item:B8,groupHeading:W8,groupHeadingSm:H8,groupHeadingLabel:U8,groupHeadingCollapsible:q8,groupChevron:V8,groupDivider:G8};function Y8({group:e,size:a,closeOnSelect:i,onClose:s}){const[l,d]=g.useState(e.defaultExpanded??!0);return r.jsxs("div",{children:[e.heading&&r.jsxs("div",{className:se(Fn.groupHeading,a==="sm"&&Fn.groupHeadingSm,e.collapsible&&Fn.groupHeadingCollapsible),onClick:e.collapsible?()=>d(p=>!p):void 0,"aria-expanded":e.collapsible?l:void 0,children:[r.jsx("span",{className:Fn.groupHeadingLabel,children:e.heading}),e.collapsible&&r.jsx("span",{className:Fn.groupChevron,"data-expanded":l||void 0,"aria-hidden":"true",children:r.jsx(fn,{size:12})})]}),l&&r.jsx("div",{role:"group","aria-label":e.heading,children:e.options.map((p,m)=>{const v=p.trailingAction==="switch"||p.trailingAction==="checkbox"||p.trailingAction==="radio";return r.jsx(un,{role:"menuitem",size:a,label:p.label,description:p.description,leadingSlot:p.leadingSlot,trailingAction:p.trailingAction,trailingSlot:p.trailingSlot,disabled:p.disabled,destructive:p.destructive,selected:p.selected,checked:p.checked,defaultChecked:p.defaultChecked,onCheckedChange:p.onCheckedChange,badgeCount:p.badgeCount,badgeLabel:p.badgeLabel,expanded:p.expanded,statusVariant:p.statusVariant,divider:p.divider??!1,className:Fn.item,onClick:()=>{var y;(y=p.onClick)==null||y.call(p),i&&!v&&s()}},p.id)})})]})}const Eu=g.forwardRef(({trigger:e,groups:a,size:i="sm",width:s=260,placement:l="bottom-start",open:d,defaultOpen:p=!1,onOpenChange:m,disabled:v=!1,closeOnSelect:y=!0,fullWidth:x=!1,className:b,...k},S)=>{const[_,C]=g.useState(p),N=g.useRef(null),$=d!==void 0?d:_,M=g.useCallback(O=>{N.current=O,S&&(typeof S=="function"?S(O):S.current=O)},[S]),j=g.useCallback(O=>{d===void 0&&C(O),m==null||m(O)},[d,m]);return g.useEffect(()=>{if(!$)return;const O=L=>{var R;(R=N.current)!=null&&R.contains(L.target)||j(!1)};return document.addEventListener("mousedown",O),()=>document.removeEventListener("mousedown",O)},[$,j]),g.useEffect(()=>{if(!$)return;const O=L=>{L.key==="Escape"&&j(!1)};return document.addEventListener("keydown",O),()=>document.removeEventListener("keydown",O)},[$,j]),r.jsxs("div",{ref:M,className:se(Fn.root,x&&Fn.fullWidth,b),...k,children:[r.jsx("div",{style:{display:x?"flex":"inline-flex",width:x?"100%":void 0},"aria-haspopup":"menu","aria-expanded":$,tabIndex:v?-1:0,onClick:v?void 0:()=>j(!$),onKeyDown:v?void 0:O=>{(O.key==="Enter"||O.key===" ")&&(O.preventDefault(),j(!$))},children:e}),r.jsx("div",{className:Fn.panel,"data-open":$||void 0,"data-placement":l,style:{width:typeof s=="number"?`${s}px`:s},role:"menu","aria-orientation":"vertical",children:r.jsx("div",{className:Fn.panelInner,children:a.map((O,L)=>r.jsxs("div",{children:[L>0&&r.jsx("div",{className:Fn.groupDivider,"aria-hidden":"true"}),r.jsx(Y8,{group:O,size:i,closeOnSelect:y,onClose:()=>j(!1)})]},O.id))})})]})});Eu.displayName="DropdownMenu";const K8="_hiddenInput_7w2s5_8",Q8="_area_7w2s5_19",Z8="_uploadIcon_7w2s5_53",X8="_textBlock_7w2s5_59",J8="_title_7w2s5_67",eb="_description_7w2s5_76",tb="_fileRow_7w2s5_88",nb="_fileIcon_7w2s5_96",rb="_fileName_7w2s5_101",ob="_successIcon_7w2s5_115",ab="_removeBtn_7w2s5_121",ib="_progressWrap_7w2s5_145",sb="_progressBar_7w2s5_153",lb="_progressFill_7w2s5_161",cb="_progressLabel_7w2s5_168",db="_errorRow_7w2s5_178",ub="_errorIcon_7w2s5_186",pb="_errorText_7w2s5_192",hb="_areaMulti_7w2s5_206",fb="_multiDropZone_7w2s5_214",mb="_fileList_7w2s5_244",gb="_fileListItem_7w2s5_254",vb="_inline_7w2s5_267",xb="_inlineIcon_7w2s5_309",yb="_inlineText_7w2s5_330",wb="_inlineProgress_7w2s5_353",bb="_inlineProgressFill_7w2s5_363",Ge={hiddenInput:K8,area:Q8,uploadIcon:Z8,textBlock:X8,title:J8,description:eb,fileRow:tb,fileIcon:nb,fileName:rb,successIcon:ob,removeBtn:ab,progressWrap:ib,progressBar:sb,progressFill:lb,progressLabel:cb,errorRow:db,errorIcon:ub,errorText:pb,areaMulti:hb,multiDropZone:fb,fileList:mb,fileListItem:gb,inline:vb,inlineIcon:xb,inlineText:yb,inlineProgress:wb,inlineProgressFill:bb};function bd(e){const a=e.name.lastIndexOf(".");return a!==-1?e.name.slice(a+1).toUpperCase():e.type?(e.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const eg=g.forwardRef(({variant:e="area",multiple:a=!1,state:i="empty",progress:s=0,file:l,files:d,errorMessage:p,title:m="Choose a file or drag & drop it here.",description:v="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:y,onFileSelect:x,onFilesSelect:b,onClear:k,onRemoveFile:S,fieldVariant:_="outlined",browseButtonVariant:C="tertiary",disabled:N=!1,className:$,...M},j)=>{const O=g.useRef(null),[L,R]=g.useState(!1),I=!N&&(a||i==="empty"),z=g.useCallback(()=>{var re;!N&&(a||i==="empty")&&((re=O.current)==null||re.click())},[N,a,i]),W=g.useCallback(re=>{var X;if(a){const D=re.target.files?Array.from(re.target.files):[];D.length&&(b==null||b(D))}else{const D=(X=re.target.files)==null?void 0:X[0];D&&(x==null||x(D))}re.target.value=""},[a,x,b]),G=g.useCallback(re=>{re.preventDefault(),I&&R(!0)},[I]),Q=g.useCallback(()=>R(!1),[]),B=g.useCallback(re=>{var X;if(re.preventDefault(),R(!1),!!I)if(a){const D=re.dataTransfer.files?Array.from(re.dataTransfer.files):[];D.length&&(b==null||b(D))}else{const D=(X=re.dataTransfer.files)==null?void 0:X[0];D&&(x==null||x(D))}},[I,a,x,b]),Y=r.jsx("input",{ref:O,type:"file",className:Ge.hiddenInput,accept:y,multiple:a,disabled:N,"aria-hidden":"true",tabIndex:-1,onChange:W}),ee=l?r.jsxs("div",{className:Ge.fileRow,children:[r.jsx("span",{className:`${Ge.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Or,{size:16})}),r.jsx("span",{className:Ge.fileName,children:l.name}),r.jsx(jn,{size:"sm",variant:"subtle",children:bd(l)}),i==="complete"&&r.jsx("span",{className:`${Ge.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(pn,{size:16})}),r.jsx("button",{type:"button",className:Ge.removeBtn,onClick:k,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(Ws,{size:14})})})]}):null;if(e==="area"){if(a){const re=d??[];return r.jsxs("div",{ref:j,className:se(Ge.areaMulti,$),"data-drag-over":L||void 0,"data-disabled":N||void 0,onDragOver:G,onDragLeave:Q,onDrop:B,...M,children:[Y,r.jsxs("div",{className:Ge.multiDropZone,children:[r.jsx("span",{className:`${Ge.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(wd,{size:24})}),r.jsxs("div",{className:Ge.textBlock,children:[r.jsx("p",{className:Ge.title,children:m}),r.jsx("p",{className:Ge.description,children:v})]}),r.jsx(Te,{variant:C,size:"sm",onClick:z,disabled:N,children:"Browse Files"})]}),re.length>0&&r.jsx("ul",{className:Ge.fileList,"aria-label":"Selected files",children:re.map((X,D)=>r.jsxs("li",{className:Ge.fileListItem,children:[r.jsx("span",{className:`${Ge.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Or,{size:16})}),r.jsx("span",{className:Ge.fileName,children:X.name}),r.jsx(jn,{size:"sm",variant:"subtle",children:bd(X)}),r.jsx("button",{type:"button",className:Ge.removeBtn,onClick:()=>S==null?void 0:S(D),"aria-label":`Remove ${X.name}`,disabled:N,children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(Ws,{size:14})})})]},`${X.name}-${D}`))})]})}return r.jsxs("div",{ref:j,className:se(Ge.area,$),"data-state":i,"data-drag-over":L||void 0,"data-disabled":N||void 0,onDragOver:G,onDragLeave:Q,onDrop:B,...M,children:[Y,i==="empty"&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:`${Ge.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(wd,{size:24})}),r.jsxs("div",{className:Ge.textBlock,children:[r.jsx("p",{className:Ge.title,children:m}),r.jsx("p",{className:Ge.description,children:v})]}),r.jsx(Te,{variant:C,size:"sm",onClick:z,disabled:N,children:"Browse File"})]}),i==="uploading"&&r.jsxs(r.Fragment,{children:[ee,r.jsxs("div",{className:Ge.progressWrap,children:[r.jsx("div",{className:Ge.progressBar,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:Ge.progressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})}),r.jsxs("p",{className:Ge.progressLabel,children:[s,"% uploaded"]})]})]}),i==="complete"&&ee,i==="error"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:Ge.errorRow,children:[r.jsx("span",{className:`${Ge.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Jo,{size:20})}),r.jsx("p",{className:Ge.errorText,children:p??"Upload failed. Please try again."})]}),r.jsx(Te,{variant:"tertiary",size:"sm",onClick:z,disabled:N,children:"Try Again"})]})]})}const oe={empty:r.jsx(wd,{size:16}),uploading:r.jsx(Or,{size:16}),complete:r.jsx(pn,{size:16}),error:r.jsx(Jo,{size:16})}[i],le=(i==="uploading"||i==="complete")&&!!l;return r.jsxs("div",{ref:j,className:se(Ge.inline,$),"data-state":i,"data-field-variant":_,"data-disabled":N||void 0,...M,children:[Y,r.jsx("span",{className:`${Ge.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:oe}),r.jsxs("span",{className:Ge.inlineText,"data-has-file":le?"":void 0,children:[i==="empty"&&m,i==="uploading"&&(l==null?void 0:l.name),i==="complete"&&(l==null?void 0:l.name),i==="error"&&(p??"Upload failed. Please try again.")]}),le&&r.jsx(jn,{size:"sm",variant:"subtle",children:bd(l)}),(i==="uploading"||i==="complete"||i==="error")&&r.jsx("button",{type:"button",className:Ge.removeBtn,onClick:k,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(Ws,{size:14})})}),i==="empty"&&r.jsx(Te,{variant:C,size:"xs",onClick:z,disabled:N,children:"Browse"}),i==="uploading"&&r.jsx("div",{className:Ge.inlineProgress,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:Ge.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})})]})});eg.displayName="FileUploader";const kb="_wrapper_127v8_8",_b="_labelRow_127v8_16",Cb="_label_127v8_16",jb="_required_127v8_28",Sb="_labelIcon_127v8_36",Nb="_sm_127v8_46",Mb="_md_127v8_47",Rb="_lg_127v8_48",Lb="_shell_127v8_44",Ab="_outlined_127v8_75",$b="_underlined_127v8_102",Tb="_float_127v8_147",Ib="_leadingSlot_127v8_181",Eb="_trailingSlot_127v8_193",Pb="_trailingActionWrap_127v8_206",zb="_trailingActionBtn_127v8_213",Ob="_successTrailingSlot_127v8_234",Db="_errorTrailingSlot_127v8_239",Fb="_control_127v8_251",Bb="_selectValue_127v8_297",Wb="_selectPlaceholder_127v8_303",Hb="_selectChevron_127v8_307",Ub="_selectChevronOpen_127v8_312",qb="_textareaShell_127v8_315",Vb="_textareaControl_127v8_334",Gb="_footer_127v8_351",Yb="_footerRow_127v8_363",Kb="_footerError_127v8_364",Qb="_footerSuccess_127v8_365",Zb="_footerIcon_127v8_368",Xb="_wrapperHorizontal_127v8_378",Jb="_horizontalLabelCol_127v8_384",e7="_horizontalLabelHint_127v8_393",t7="_horizontalControlCol_127v8_402",n7="_msContainer_127v8_416",r7="_msShell_127v8_425",o7="_msOpen_127v8_440",a7="_msDisabled_127v8_447",i7="_msBody_127v8_450",s7="_msPlaceholder_127v8_459",l7="_msChevron_127v8_469",c7="_msChevronOpen_127v8_480",d7="_msPanel_127v8_483",Ae={wrapper:kb,labelRow:_b,label:Cb,required:jb,labelIcon:Sb,sm:Nb,md:Mb,lg:Rb,shell:Lb,outlined:Ab,underlined:$b,float:Tb,leadingSlot:Ib,trailingSlot:Eb,trailingActionWrap:Pb,trailingActionBtn:zb,successTrailingSlot:Ob,errorTrailingSlot:Db,control:Fb,selectValue:Bb,selectPlaceholder:Wb,selectChevron:Hb,selectChevronOpen:Ub,textareaShell:qb,textareaControl:Vb,footer:Gb,footerRow:Yb,footerError:Kb,footerSuccess:Qb,footerIcon:Zb,wrapperHorizontal:Xb,horizontalLabelCol:Jb,horizontalLabelHint:e7,horizontalControlCol:t7,msContainer:n7,msShell:r7,msOpen:o7,msDisabled:a7,msBody:i7,msPlaceholder:s7,msChevron:l7,msChevronOpen:c7,msPanel:d7};function la({label:e,labelIcon:a,labelDescription:i,hint:s,error:l,success:d,required:p,htmlFor:m,layout:v="vertical",labelWidth:y=160,className:x,children:b}){const k=l??d??s,S=l?"error":d?"success":"hint",_=k?r.jsxs("p",{className:se(Ae.footer,S==="error"&&Ae.footerError,S==="success"&&Ae.footerSuccess),role:S==="error"?"alert":void 0,"aria-live":S==="error"?"assertive":void 0,children:[S==="hint"&&r.jsx("span",{className:`${Ae.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Jo,{size:12})}),k]}):null,C=e!=null?r.jsxs("div",{className:Ae.labelRow,children:[r.jsx("label",{className:Ae.label,htmlFor:m,children:e}),p&&r.jsx("span",{className:Ae.required,"aria-hidden":"true",children:"*"}),a&&r.jsx("span",{className:`${Ae.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:a})]}):null;if(v==="horizontal"){const N={width:typeof y=="number"?`${y}px`:y};return r.jsxs("div",{className:se(Ae.wrapper,Ae.wrapperHorizontal,x),children:[(C||i)&&r.jsxs("div",{className:Ae.horizontalLabelCol,style:N,children:[C,i&&r.jsx("p",{className:Ae.horizontalLabelHint,children:i})]}),r.jsxs("div",{className:Ae.horizontalControlCol,children:[b,_]})]})}return r.jsxs("div",{className:se(Ae.wrapper,x),children:[C,b,_]})}function xi({variant:e="outlined",size:a="md",error:i,success:s,disabled:l,readOnly:d,leadingIcon:p,trailingIcon:m,trailingAction:v,isTextarea:y,focused:x,className:b,children:k}){const S=a==="sm"?14:a==="lg"?18:16,_=s&&!i&&!m&&!v?r.jsx(pn,{size:S}):null,C=i&&!m&&!v?r.jsx(Jo,{size:S}):null,N=!!p,$=!!(m||v||_||C);return r.jsxs("div",{className:se(Ae.shell,Ae[e],Ae[a],y&&Ae.textareaShell,b),"data-error":i||void 0,"data-success":s||void 0,"data-disabled":l||void 0,"data-readonly":d||void 0,"data-focused":x||void 0,"data-has-leading":N||void 0,"data-has-trailing":$||void 0,children:[p&&r.jsx("span",{className:se(Ae.leadingSlot,"alloy-icon-slot"),children:p}),k,v?r.jsx("span",{className:Ae.trailingActionWrap,children:v}):m||_||C?r.jsx("span",{className:se(Ae.trailingSlot,"alloy-icon-slot",_&&Ae.successTrailingSlot,C&&Ae.errorTrailingSlot),children:m??_??C}):null]})}const Pu=g.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:p="outlined",size:m="md",type:v="text",leadingIcon:y,trailingIcon:x,layout:b,labelWidth:k,labelDescription:S,id:_,disabled:C,readOnly:N,className:$,...M},j)=>{const O=g.useId(),L=_??O;return r.jsx(la,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:L,layout:b,labelWidth:k,labelDescription:S,className:$,children:r.jsx(xi,{variant:p,size:m,error:!!s,success:!!l,disabled:C,readOnly:N,leadingIcon:y,trailingIcon:x,children:r.jsx("input",{ref:j,id:L,type:v,disabled:C,readOnly:N,"aria-invalid":s?!0:void 0,"aria-describedby":i||s||l?`${L}-footer`:void 0,className:se(Ae.control),...M})})})});Pu.displayName="TextField";const u7=g.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:p="outlined",size:m="md",leadingIcon:v,trailingIcon:y,layout:x,labelWidth:b,labelDescription:k,id:S,disabled:_,readOnly:C,className:N,...$},M)=>{const j=g.useId(),O=S??j;return r.jsx(la,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:O,layout:x,labelWidth:b,labelDescription:k,className:N,children:r.jsx(xi,{variant:p,size:m,error:!!s,success:!!l,disabled:_,readOnly:C,leadingIcon:v,trailingIcon:y,isTextarea:!0,children:r.jsx("textarea",{ref:M,id:O,disabled:_,readOnly:C,"aria-invalid":s?!0:void 0,className:se(Ae.control,Ae.textareaControl),...$})})})});u7.displayName="TextArea";const p7={sm:"sm",md:"md",lg:"lg"},tg=g.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:p="outlined",size:m="md",leadingIcon:v,layout:y,labelWidth:x,labelDescription:b,options:k,value:S,defaultValue:_="",onChange:C,placeholder:N="Select an option…",disabled:$,readOnly:M,id:j,className:O},L)=>{var D;const R=g.useId(),I=j??R,z=S!==void 0,[W,G]=g.useState(_),Q=z?S:W,B=g.useCallback(V=>{z||G(V),C==null||C(V)},[z,C]),[Y,ee]=g.useState(!1),oe=(D=k.find(V=>V.value===Q))==null?void 0:D.label,le=m==="sm"?14:m==="lg"?18:16,re=p7[m],X=r.jsx(xi,{variant:p,size:m,error:!!s,success:!!l,disabled:$,readOnly:M,focused:Y,leadingIcon:v,trailingIcon:r.jsx("span",{className:se(Ae.selectChevron,Y&&Ae.selectChevronOpen),"aria-hidden":"true",children:r.jsx(Sn,{size:le})}),children:r.jsx("span",{className:se(Ae.control,Ae.selectValue,!oe&&Ae.selectPlaceholder),children:oe??N})});return r.jsx(la,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:I,layout:y,labelWidth:x,labelDescription:b,className:O,children:r.jsx(Eu,{ref:L,id:I,fullWidth:!0,trigger:X,groups:[{id:"options",options:k.map(V=>({id:V.value,label:V.label,disabled:V.disabled,selected:V.value===Q,onClick:()=>B(V.value)}))}],size:re,width:"100%",placement:"bottom-start",open:Y,onOpenChange:ee,disabled:$||M})})});tg.displayName="SelectField";const h7=g.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:p="outlined",size:m="md",leadingIcon:v,layout:y,labelWidth:x,labelDescription:b,id:k,disabled:S,readOnly:_,className:C,...N},$)=>{const M=g.useId(),j=k??M,[O,L]=g.useState(!1),R=m==="sm"?14:m==="lg"?18:16;return r.jsx(la,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:j,layout:y,labelWidth:x,labelDescription:b,className:C,children:r.jsx(xi,{variant:p,size:m,error:!!s,success:!!l,disabled:S,readOnly:_,leadingIcon:v,trailingAction:r.jsx("button",{type:"button",className:`${Ae.trailingActionBtn} alloy-icon-slot`,onClick:()=>L(I=>!I),tabIndex:S?-1:0,"aria-label":O?"Hide password":"Show password","aria-pressed":O,children:O?r.jsx(M0,{size:R}):r.jsx(Cu,{size:R})}),children:r.jsx("input",{ref:$,id:j,type:O?"text":"password",disabled:S,readOnly:_,"aria-invalid":s?!0:void 0,autoComplete:"current-password",className:se(Ae.control),...N})})})});h7.displayName="PasswordField";const ng=g.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:p="outlined",size:m="md",onClear:v,onChange:y,layout:x,labelWidth:b,labelDescription:k,id:S,value:_,defaultValue:C,disabled:N,readOnly:$,className:M,...j},O)=>{const L=g.useId(),R=S??L,I=m==="sm"?14:m==="lg"?18:16,z=_!==void 0?String(_).length>0:void 0,W=g.useCallback(G=>{y==null||y(G)},[y]);return r.jsx(la,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:R,layout:x,labelWidth:b,labelDescription:k,className:M,children:r.jsx(xi,{variant:p,size:m,error:!!s,success:!!l,disabled:N,readOnly:$,leadingIcon:r.jsx(Mu,{size:I}),trailingAction:z?r.jsx("button",{type:"button",className:`${Ae.trailingActionBtn} alloy-icon-slot`,onClick:v,tabIndex:N?-1:0,"aria-label":"Clear search",children:r.jsx(mi,{size:I})}):void 0,children:r.jsx("input",{ref:O,id:R,type:"search",value:_,defaultValue:C,disabled:N,readOnly:$,"aria-invalid":s?!0:void 0,onChange:W,className:se(Ae.control),...j})})})});ng.displayName="SearchField";const rg=g.forwardRef((e,a)=>r.jsx(Pu,{ref:a,type:"email",autoComplete:"email",inputMode:"email",...e}));rg.displayName="EmailField";const og=g.forwardRef((e,a)=>r.jsx(Pu,{ref:a,type:"number",inputMode:"numeric",...e}));og.displayName="NumberField";const f7={sm:"sm",md:"sm",lg:"md"},m7={sm:"sm",md:"md",lg:"lg"},g7=g.forwardRef(({label:e,labelIcon:a,hint:i,error:s,success:l,required:d,variant:p="outlined",size:m="md",layout:v,labelWidth:y,labelDescription:x,options:b,value:k,defaultValue:S=[],onChange:_,placeholder:C="Select options…",disabled:N,readOnly:$,id:M,className:j},O)=>{const L=g.useId(),R=M??L,I=`${R}-list`,z=g.useRef(null),W=k!==void 0,[G,Q]=g.useState(S),B=W?k:G,Y=g.useCallback(A=>{W||Q(A),_==null||_(A)},[W,_]),[ee,oe]=g.useState(!1);g.useEffect(()=>{if(!ee)return;const A=Z=>{z.current&&!z.current.contains(Z.target)&&oe(!1)},q=Z=>{Z.key==="Escape"&&oe(!1)};return document.addEventListener("mousedown",A),document.addEventListener("keydown",q),()=>{document.removeEventListener("mousedown",A),document.removeEventListener("keydown",q)}},[ee]);const le=A=>{if(N||$)return;const q=B.includes(A)?B.filter(Z=>Z!==A):[...B,A];Y(q)},re=A=>{N||$||((A.key==="Enter"||A.key===" ")&&(A.preventDefault(),oe(q=>!q)),A.key==="Backspace"&&B.length>0&&!ee&&Y(B.slice(0,-1)))},X=m==="sm"?14:m==="lg"?18:16,D=f7[m],V=m7[m],E=Object.fromEntries(b.map(A=>[A.value,A.label]));return r.jsx(la,{label:e,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:R,layout:v,labelWidth:y,labelDescription:x,className:j,children:r.jsxs("div",{ref:z,className:Ae.msContainer,children:[r.jsxs("div",{ref:O,id:R,role:"combobox","aria-haspopup":"listbox","aria-expanded":ee,"aria-controls":I,"aria-disabled":N||void 0,tabIndex:N?-1:0,className:se(Ae.msShell,Ae[p],Ae[m],ee&&Ae.msOpen,N&&Ae.msDisabled),"data-error":s?!0:void 0,"data-success":l&&!s?!0:void 0,"data-disabled":N||void 0,onClick:()=>{!N&&!$&&oe(A=>!A)},onKeyDown:re,children:[r.jsx("div",{className:Ae.msBody,children:B.length===0?r.jsx("span",{className:Ae.msPlaceholder,children:C}):B.map(A=>r.jsx(jn,{size:D,variant:"subtle",dismissible:!N&&!$,onDismiss:()=>Y(B.filter(q=>q!==A)),children:E[A]??A},A))}),r.jsx("span",{className:se(Ae.msChevron,"alloy-icon-slot",ee&&Ae.msChevronOpen),children:r.jsx(Sn,{size:X})})]}),ee&&r.jsx("div",{id:I,role:"listbox","aria-multiselectable":"true","aria-label":typeof e=="string"?e:"Options",className:Ae.msPanel,children:b.map(A=>{const q=B.includes(A.value);return r.jsx(un,{label:A.label,size:V,trailingAction:"checkbox",checked:q,disabled:A.disabled,role:"option","aria-selected":q,onMouseDown:Z=>{Z.preventDefault()},onCheckedChange:()=>{A.disabled||le(A.value)}},A.value)})})]})})});g7.displayName="MultiSelectField";const v7="_root_1249j_6",x7="_pageControls_1249j_14",y7="_pageBtn_1249j_21",w7="_ellipsis_1249j_36",b7="_rowsGroup_1249j_51",k7="_rowsSelect_1249j_58",_7="_countText_1249j_64",C7="_groupLabel_1249j_74",j7="_goToGroup_1249j_84",S7="_goToInput_1249j_91",On={root:v7,pageControls:x7,pageBtn:y7,ellipsis:w7,rowsGroup:b7,rowsSelect:k7,countText:_7,groupLabel:C7,goToGroup:j7,goToInput:S7};function N7(e,a,i){if(a<=1)return[1];const s=Math.max(2,e-i),l=Math.min(a-1,e+i),d=[1];s>2&&d.push("ellipsis");for(let p=s;p<=l;p++)d.push(p);return l<a-1&&d.push("ellipsis"),a>1&&d.push(a),d}const M7=g.forwardRef(({page:e,totalPages:a,onPageChange:i,showRowsPerPage:s=!1,rowsPerPage:l,rowsPerPageOptions:d=[10,25,50,100],onRowsPerPageChange:p,showGoToPage:m=!1,totalCount:v,siblingCount:y=1,size:x="sm",disabled:b=!1,className:k,...S},_)=>{const[C,N]=g.useState(""),$=x,M=x,j=x==="sm"?14:16,O=N7(e,a,y),L=g.useCallback(z=>{const W=Math.min(Math.max(1,z),a);W!==e&&i(W)},[e,a,i]),R=g.useCallback(z=>{if(z.key==="Enter"){const W=parseInt(C,10);isNaN(W)||L(W),N("")}},[C,L]),I=v!=null&&l!=null?`${(e-1)*l+1}–${Math.min(e*l,v)} of ${v}`:null;return r.jsxs("nav",{ref:_,"aria-label":"Pagination",className:se(On.root,k),"data-size":x,...S,children:[s&&r.jsxs("div",{className:On.rowsGroup,children:[r.jsx("span",{className:On.groupLabel,children:"Rows per page"}),r.jsx("div",{className:On.rowsSelect,children:r.jsx(tg,{size:M,value:l,disabled:b,"aria-label":"Rows per page",onChange:z=>p==null?void 0:p(Number(z.target.value)),children:d.map(z=>r.jsx("option",{value:z,children:z},z))})})]}),I&&r.jsx("span",{className:On.countText,"aria-live":"polite",children:I}),r.jsxs("div",{className:On.pageControls,role:"group","aria-label":"Page navigation",children:[r.jsx(Te,{variant:"ghost",size:$,iconOnly:!0,"aria-label":"Previous page",disabled:b||e<=1,onClick:()=>L(e-1),children:r.jsx(N0,{size:j})}),O.map((z,W)=>z==="ellipsis"?r.jsx("span",{className:On.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${W}`):r.jsx(Te,{variant:z===e?"secondary":"ghost",size:$,"aria-label":`Page ${z}`,"aria-current":z===e?"page":void 0,disabled:b,onClick:()=>L(z),className:On.pageBtn,children:z},z)),r.jsx(Te,{variant:"ghost",size:$,iconOnly:!0,"aria-label":"Next page",disabled:b||e>=a,onClick:()=>L(e+1),children:r.jsx(fn,{size:j})})]}),m&&r.jsxs("div",{className:On.goToGroup,children:[r.jsx("span",{className:On.groupLabel,children:"Go to"}),r.jsx("div",{className:On.goToInput,children:r.jsx(og,{size:M,value:C,placeholder:String(e),min:1,max:a,disabled:b,"aria-label":"Go to page number",onChange:z=>N(z.target.value),onKeyDown:R})})]})]})});M7.displayName="Pagination";const R7="_root_1vx33_6",L7="_fullWidth_1vx33_18",A7="_item_1vx33_23",$7="_indicator_1vx33_28",T7="_sm_1vx33_46",I7="_md_1vx33_54",E7="_lg_1vx33_62",P7="_itemSelected_1vx33_109",z7="_itemIcon_1vx33_115",O7="_itemLabel_1vx33_127",Pr={root:R7,fullWidth:L7,item:A7,indicator:$7,sm:T7,md:I7,lg:E7,itemSelected:P7,itemIcon:z7,itemLabel:O7},ag=g.createContext(null);function D7(e){const a=g.useContext(ag);if(!a)throw new Error(`<${e}> must be rendered inside <SegmentedControl>`);return a}const ig=g.forwardRef(({value:e,leadingIcon:a,className:i,children:s,disabled:l,onClick:d,...p},m)=>{const{value:v,onChange:y,disabled:x,name:b}=D7("SegmentedControl.Item"),k=v===e,S=x||!!l;return r.jsxs("button",{ref:m,type:"button",role:"radio","aria-checked":k,name:b,disabled:S,className:se(Pr.item,k&&Pr.itemSelected,i),onClick:_=>{S||y(e),d==null||d(_)},...p,children:[a&&r.jsx("span",{className:se(Pr.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),s!==void 0&&r.jsx("span",{className:Pr.itemLabel,children:s})]})});ig.displayName="SegmentedControl.Item";const sg=g.forwardRef(({value:e,defaultValue:a="",onChange:i,size:s="md",disabled:l=!1,fullWidth:d=!1,className:p,children:m,...v},y)=>{const[x,b]=g.useState(a),k=e!==void 0,S=k?e:x,_=g.useId(),C=g.useRef(null);g.useLayoutEffect(()=>{const $=C.current;if(!$)return;const M=$.querySelector('[aria-checked="true"]');M&&($.style.setProperty("--sc-indicator-x",`${M.offsetLeft}px`),$.style.setProperty("--sc-indicator-w",`${M.offsetWidth}px`))},[S,s]);const N=$=>{k||b($),i==null||i($)};return r.jsx(ag.Provider,{value:{value:S,onChange:N,disabled:l,name:_},children:r.jsxs("div",{ref:$=>{C.current=$,typeof y=="function"?y($):y&&(y.current=$)},role:"radiogroup",className:se(Pr.root,Pr[s],d&&Pr.fullWidth,p),...v,children:[r.jsx("span",{className:Pr.indicator,"aria-hidden":"true"}),m]})})});sg.displayName="SegmentedControl";Object.assign(sg,{Item:ig});const F7="_root_fkv0x_6",B7="_sm_fkv0x_26",W7="_md_fkv0x_33",H7="_lg_fkv0x_40",U7="_dot_fkv0x_49",q7="_success_fkv0x_58",V7="_warning_fkv0x_65",G7="_error_fkv0x_72",Y7="_info_fkv0x_79",K7="_neutral_fkv0x_86",Q7="_pending_fkv0x_93",Ps={root:F7,sm:B7,md:W7,lg:H7,dot:U7,success:q7,warning:V7,error:G7,info:Y7,neutral:K7,pending:Q7},li=g.forwardRef(({status:e="neutral",size:a="md",dot:i=!0,className:s,children:l,...d},p)=>r.jsxs("span",{ref:p,className:se(Ps.root,Ps[a],Ps[e],s),...d,children:[i&&r.jsx("span",{className:Ps.dot,"aria-hidden":"true"}),l]}));li.displayName="StatusTag";const Z7="_root_1m8t5_6",X7="_underline_1m8t5_15",J7="_background_1m8t5_21",ek="_underlineIndicator_1m8t5_26",tk="_md_1m8t5_43",nk="_lg_1m8t5_44",rk="_tab_1m8t5_42",ok="_tabSelected_1m8t5_77",ak="_tabIcon_1m8t5_99",ik="_tabLabel_1m8t5_111",sk="_tabBadge_1m8t5_116",lk="_tabLabelEditable_1m8t5_123",ck="_tabLabelInput_1m8t5_128",dk="_addTab_1m8t5_147",uk="_addTabIcon_1m8t5_160",en={root:Z7,underline:X7,background:J7,underlineIndicator:ek,md:tk,lg:nk,tab:rk,tabSelected:ok,tabIcon:ak,tabLabel:ik,tabBadge:sk,tabLabelEditable:lk,tabLabelInput:ck,addTab:dk,addTabIcon:uk},lg=g.createContext(null);function cg(e){const a=g.useContext(lg);if(!a)throw new Error(`<${e}> must be rendered inside <Tabs>`);return a}const dg=g.forwardRef(({value:e,leadingIcon:a,trailingBadge:i,disabled:s,editable:l=!1,autoEdit:d=!1,onLabelChange:p,onClick:m,className:v,children:y,...x},b)=>{const{value:k,onChange:S,disabled:_,name:C}=cg("Tabs.Tab"),N=k===e,$=_||!!s,M=typeof y=="string"?y:"",[j,O]=g.useState(d&&l),[L,R]=g.useState(M),I=g.useRef(null);g.useEffect(()=>{if(j){const B=I.current;B&&(B.focus(),B.select())}},[j]),g.useEffect(()=>{d&&l&&!j&&(R(typeof y=="string"?y:""),O(!0))},[d,l]);const z=()=>{const B=L.trim();B&&B!==M&&(p==null||p(B)),O(!1)},W=()=>{R(M),O(!1)},G=B=>{!l||$||(B.stopPropagation(),R(M),O(!0))},Q=B=>{B.key==="Enter"?(B.preventDefault(),z()):B.key==="Escape"&&(B.preventDefault(),W())};return r.jsxs("button",{ref:b,type:"button",role:"tab","aria-selected":N,name:C,disabled:$,className:se(en.tab,N&&en.tabSelected,v),onClick:B=>{j||($||S(e),m==null||m(B))},...x,children:[a&&r.jsx("span",{className:se(en.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),j?r.jsx("input",{ref:I,type:"text",value:L,onChange:B=>R(B.target.value),onKeyDown:Q,onBlur:z,onClick:B=>B.stopPropagation(),className:en.tabLabelInput,"aria-label":"Tab name",size:Math.max(L.length,1)}):y!==void 0&&r.jsx("span",{className:se(en.tabLabel,l&&en.tabLabelEditable),onDoubleClick:G,children:y}),i&&!j&&r.jsx("span",{className:en.tabBadge,children:i})]})});dg.displayName="Tabs.Tab";const pk=()=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),ug=g.forwardRef(({className:e,onClick:a,"aria-label":i="Add tab",...s},l)=>{const{disabled:d}=cg("Tabs.AddTab");return r.jsx("button",{ref:l,type:"button","aria-label":i,disabled:d,className:se(en.tab,en.addTab,e),onClick:a,...s,children:r.jsx("span",{className:se(en.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx(pk,{})})})});ug.displayName="Tabs.AddTab";const pg=g.forwardRef(({variant:e="underline",size:a="md",value:i,defaultValue:s="",onChange:l,disabled:d=!1,className:p,children:m,...v},y)=>{const[x,b]=g.useState(s),k=i!==void 0,S=k?i:x,_=g.useId(),C=g.useRef(null);g.useLayoutEffect(()=>{const $=C.current;if(!$||e!=="underline")return;const M=$.querySelector('[aria-selected="true"]');M&&($.style.setProperty("--tab-indicator-x",`${M.offsetLeft}px`),$.style.setProperty("--tab-indicator-w",`${M.offsetWidth}px`))},[S,e]);const N=$=>{k||b($),l==null||l($)};return r.jsx(lg.Provider,{value:{value:S,onChange:N,disabled:d,variant:e,size:a,name:_},children:r.jsxs("div",{ref:$=>{C.current=$,typeof y=="function"?y($):y&&(y.current=$)},role:"tablist",className:se(en.root,en[e],en[a],p),...v,children:[e==="underline"&&r.jsx("span",{className:en.underlineIndicator,"aria-hidden":"true"}),m]})})});pg.displayName="Tabs";Object.assign(pg,{Tab:dg,AddTab:ug});const hk="_selectedBorder_1ypeg_7",fk="_selectedFill_1ypeg_12",uf={selectedBorder:hk,selectedFill:fk},mk=g.forwardRef(({selected:e=!1,defaultVariant:a="secondary",selectionStyle:i="border",onSelectedChange:s,onClick:l,className:d,...p},m)=>{const v=x=>{s==null||s(!e),l==null||l(x)},y=e?i==="fill"?uf.selectedFill:uf.selectedBorder:void 0;return r.jsx(Te,{ref:m,variant:a,"aria-pressed":e,className:se(y,d),onClick:v,...p})});mk.displayName="ToggleButton";const gk="_root_mcb75_6",vk="_disabled_mcb75_13",xk="_sm_mcb75_20",yk="_md_mcb75_31",wk="_lg_mcb75_42",bk="_track_mcb75_54",kk="_trackChecked_mcb75_90",_k="_thumb_mcb75_100",Ck="_labelWrap_mcb75_117",jk="_label_mcb75_117",Sk="_description_mcb75_139",lr={root:gk,disabled:vk,sm:xk,md:yk,lg:wk,track:bk,trackChecked:kk,thumb:_k,labelWrap:Ck,label:jk,description:Sk},Nk=g.forwardRef(({checked:e,defaultChecked:a=!1,onChange:i,disabled:s,size:l="md",label:d,description:p,id:m,name:v,value:y,className:x},b)=>{const k=g.useId(),S=m??k,_=`${S}-label`,C=e!==void 0,[N,$]=g.useState(a),M=C?e:N,j=()=>{if(s)return;const L=!M;C||$(L),i==null||i(L)},O=L=>{(L.key===" "||L.key==="Enter")&&(L.preventDefault(),j())};return r.jsxs("div",{className:se(lr.root,lr[l],s&&lr.disabled,x),children:[r.jsx("button",{ref:b,type:"button",role:"switch",id:S,"aria-checked":M,"aria-labelledby":d?_:void 0,"aria-disabled":s||void 0,tabIndex:s?-1:0,disabled:s,name:v,value:y,className:se(lr.track,M&&lr.trackChecked),"data-checked":M||void 0,"data-disabled":s||void 0,onClick:j,onKeyDown:O,children:r.jsx("span",{className:lr.thumb})}),(d||p)&&r.jsxs("div",{className:lr.labelWrap,children:[d&&r.jsx("label",{id:_,htmlFor:S,className:lr.label,children:d}),p&&r.jsx("span",{className:lr.description,children:p})]})]})});Nk.displayName="Switch";const Mk="_root_104n4_5",Rk="_disabled_104n4_11",Lk="_sm_104n4_17",Ak="_md_104n4_25",$k="_lg_104n4_33",Tk="_controlWrap_104n4_41",Ik="_input_104n4_50",Ek="_ring_104n4_65",Pk="_ringChecked_104n4_90",zk="_ringError_104n4_94",Ok="_dot_104n4_104",Dk="_labelWrap_104n4_112",Fk="_label_104n4_112",Bk="_error_104n4_130",Wk="_required_104n4_132",Hk="_description_104n4_137",Qt={root:Mk,disabled:Rk,sm:Lk,md:Ak,lg:$k,controlWrap:Tk,input:Ik,ring:Ek,ringChecked:Pk,ringError:zk,dot:Ok,labelWrap:Dk,label:Fk,error:Bk,required:Wk,description:Hk},Uk=g.forwardRef(({value:e,checked:a,onChange:i,disabled:s,error:l,size:d="md",label:p,description:m,id:v,name:y,required:x,className:b},k)=>{const S=g.useId(),_=v??S;return r.jsxs("div",{className:se(Qt.root,Qt[d],s&&Qt.disabled,l&&Qt.error,b),children:[r.jsxs("div",{className:Qt.controlWrap,children:[r.jsx("input",{ref:k,type:"radio",id:_,name:y,value:e,checked:a,disabled:s,required:x,"aria-invalid":l||void 0,onChange:()=>i==null?void 0:i(e),className:Qt.input}),r.jsx("span",{className:se(Qt.ring,a&&Qt.ringChecked,l&&Qt.ringError),"aria-hidden":"true",children:a&&r.jsx("span",{className:Qt.dot})})]}),(p||m)&&r.jsxs("div",{className:Qt.labelWrap,children:[p&&r.jsxs("label",{htmlFor:_,className:Qt.label,children:[p,x&&r.jsx("span",{className:Qt.required,"aria-hidden":"true",children:" *"})]}),m&&r.jsx("span",{className:Qt.description,children:m})]})]})});Uk.displayName="Radio";const qk="_table_1ad04_8",Vk="_sm_1ad04_16",Gk="_row_1ad04_30",Yk="_head_1ad04_47",Kk="_headLabel_1ad04_82",Qk="_sortBtn_1ad04_96",Zk="_sortIcon_1ad04_119",Xk="_cell_1ad04_142",Jk="_cellText_1ad04_175",e_="_cellStack_1ad04_203",t_="_cellStackPrimary_1ad04_210",n_="_cellStackSecondary_1ad04_221",r_="_cellActions_1ad04_233",o_="_cellControl_1ad04_240",a_="_addCell_1ad04_251",i_="_addRowCell_1ad04_264",s_="_addRowLabel_1ad04_276",At={table:qk,sm:Vk,row:Gk,head:Yk,headLabel:Kk,sortBtn:Qk,sortIcon:Zk,cell:Xk,cellText:Jk,cellStack:e_,cellStackPrimary:t_,cellStackSecondary:n_,cellActions:r_,cellControl:o_,addCell:a_,addRowCell:i_,addRowLabel:s_},hg=g.createContext({addColumn:!1,addRow:!1}),fg=()=>g.useContext(hg),l_=g.forwardRef(({size:e="md",interaction:a="row",addColumn:i=!1,addRow:s=!1,onAddColumn:l,onAddRow:d,className:p,children:m,...v},y)=>{const x=g.useMemo(()=>({addColumn:i,addRow:s,onAddColumn:l,onAddRow:d}),[i,s,l,d]);return r.jsx(hg.Provider,{value:x,children:r.jsx("table",{ref:y,className:se(At.table,e==="sm"&&At.sm,p),"data-interaction":a,...v,children:m})})});l_.displayName="Table";const mg=g.forwardRef(({align:e="left",sort:a,onSort:i,hoverable:s,selected:l,className:d,children:p,...m},v)=>{const y=a!==void 0;return r.jsx("th",{ref:v,className:se(At.head,d),"data-align":e!=="left"?e:void 0,"data-hoverable":!y&&s?!0:void 0,"data-selected":l||void 0,"aria-selected":l,scope:"col","aria-sort":a==="asc"?"ascending":a==="desc"?"descending":y?"none":void 0,...m,children:y?r.jsxs("button",{type:"button",className:At.sortBtn,onClick:i,"aria-label":typeof p=="string"?`Sort by ${p}`:void 0,children:[p,r.jsx("span",{className:At.sortIcon,"data-sort":a!=="none"?a:void 0,"aria-hidden":"true",children:r.jsx(Sn,{size:12,strokeWidth:2})})]}):r.jsx("span",{className:At.headLabel,children:p})})});mg.displayName="TableHead";const c_=g.forwardRef(({children:e,...a},i)=>{const{addColumn:s,onAddColumn:l}=fg(),d=s?g.Children.map(e,(p,m)=>{if(!g.isValidElement(p)||m!==0)return p;const v=g.Children.toArray(p.props.children);return g.cloneElement(p,{},[...v,r.jsx(mg,{hoverable:!0,onClick:l,className:At.addCell,"aria-label":"Add column",children:r.jsx(mo,{size:14,strokeWidth:2})},"__add_col_head")])}):e;return r.jsx("thead",{ref:i,...a,children:d})});c_.displayName="TableHeader";const gg=g.forwardRef(({hoverable:e=!0,selected:a,className:i,children:s,...l},d)=>r.jsx("tr",{ref:d,className:se(At.row,i),"data-hoverable":e||void 0,"data-selected":a||void 0,"aria-selected":a,...l,children:s}));gg.displayName="TableRow";const Jd=g.forwardRef(({align:e="left",compact:a,hoverable:i=!0,selected:s,className:l,children:d,...p},m)=>r.jsx("td",{ref:m,className:se(At.cell,l),"data-align":e!=="left"?e:void 0,"data-compact":a||void 0,"data-hoverable":i||void 0,"data-selected":s||void 0,"aria-selected":s,...p,children:d}));Jd.displayName="TableCell";const d_=g.forwardRef(({children:e,...a},i)=>{const{addColumn:s,addRow:l,onAddRow:d}=fg(),p=s?g.Children.map(e,m=>{if(!g.isValidElement(m))return m;const v=g.Children.toArray(m.props.children);return g.cloneElement(m,{},[...v,r.jsx(Jd,{"aria-hidden":"true",className:At.addCell},"__add_col_pad")])}):e;return r.jsxs("tbody",{ref:i,...a,children:[p,l&&r.jsx(gg,{hoverable:!1,children:r.jsx(Jd,{colSpan:999,onClick:d,className:At.addRowCell,"aria-label":"Add row",children:r.jsxs("span",{className:At.addRowLabel,children:[r.jsx(mo,{size:14,strokeWidth:2}),"Add row"]})})})]})});d_.displayName="TableBody";const u_=g.forwardRef(({variant:e="primary",size:a="md",wrap:i,className:s,children:l,...d},p)=>r.jsx("span",{ref:p,className:se(At.cellText,s),"data-variant":e!=="primary"?e:void 0,"data-size":a!=="md"?a:void 0,"data-wrap":i||void 0,...d,children:l}));u_.displayName="CellText";const p_=g.forwardRef(({primary:e,secondary:a,className:i,...s},l)=>r.jsxs("div",{ref:l,className:se(At.cellStack,i),...s,children:[r.jsx("span",{className:At.cellStackPrimary,children:e}),a&&r.jsx("span",{className:At.cellStackSecondary,children:a})]}));p_.displayName="CellStack";const h_=g.forwardRef(({size:e="sm",...a},i)=>r.jsx(jn,{ref:i,size:e,...a}));h_.displayName="CellTag";const f_=g.forwardRef(({size:e="sm",...a},i)=>r.jsx(li,{ref:i,size:e,...a}));f_.displayName="CellStatusTag";const m_=g.forwardRef(({className:e,children:a,...i},s)=>r.jsx("div",{ref:s,className:se(At.cellActions,e),...i,children:a}));m_.displayName="CellActions";const g_=g.forwardRef(({className:e,children:a,...i},s)=>r.jsx("div",{ref:s,className:se(At.cellControl,e),...i,children:a}));g_.displayName="CellControl";const v_="_root_1afcs_8",x_="_secondary_1afcs_23",y_="_header_1afcs_28",w_="_headerText_1afcs_36",b_="_title_1afcs_43",k_="_subtitle_1afcs_52",__="_action_1afcs_61",C_="_hero_1afcs_66",j_="_heroValue_1afcs_74",S_="_heroCaption_1afcs_83",N_="_heroChange_1afcs_89",M_="_body_1afcs_95",R_="_legend_1afcs_103",ln={root:v_,secondary:x_,header:y_,headerText:w_,title:b_,subtitle:k_,action:__,hero:C_,heroValue:j_,heroCaption:S_,heroChange:N_,body:M_,legend:R_},L_=g.forwardRef(({title:e,subtitle:a,action:i,value:s,valueChange:l,valueCaption:d,legend:p,secondary:m,children:v,className:y,...x},b)=>r.jsxs("div",{ref:b,className:se(ln.root,m&&ln.secondary,y),...x,children:[r.jsxs("div",{className:ln.header,children:[r.jsxs("div",{className:ln.headerText,children:[r.jsx("h3",{className:ln.title,children:e}),a&&r.jsx("p",{className:ln.subtitle,children:a})]}),i&&r.jsx("div",{className:ln.action,children:i})]}),(s!==void 0||l||d)&&r.jsxs("div",{className:ln.hero,children:[s!==void 0&&r.jsx("span",{className:ln.heroValue,children:s}),l&&r.jsx("span",{className:ln.heroChange,children:l}),d&&r.jsx("span",{className:ln.heroCaption,children:d})]}),r.jsx("div",{className:ln.body,children:v}),p&&r.jsx("div",{className:ln.legend,children:p})]}));L_.displayName="ChartCard";const A_="_root_je8nq_7",$_="_item_je8nq_17",T_="_swatch_je8nq_23",I_="_label_je8nq_29",E_="_bookend_je8nq_33",Bo={root:A_,item:$_,swatch:T_,label:I_,bookend:E_},vg=g.forwardRef(({items:e,before:a,after:i,variant:s="square",swatchSize:l=12,className:d,...p},m)=>r.jsxs("div",{ref:m,className:se(Bo.root,d),...p,children:[a&&r.jsx("span",{className:Bo.bookend,children:a}),e.map((v,y)=>{const x=s==="line"?{width:l+4,height:2,background:v.color,borderRadius:1}:s==="dot"?{width:l-2,height:l-2,background:v.color,borderRadius:"50%"}:{width:l,height:l,background:v.color};return r.jsxs("span",{className:Bo.item,children:[r.jsx("span",{className:Bo.swatch,style:x,"aria-hidden":"true"}),v.label!==void 0&&r.jsx("span",{className:Bo.label,children:v.label})]},y)}),i&&r.jsx("span",{className:Bo.bookend,children:i})]}));vg.displayName="ChartLegend";const P_="_root_igkx4_5",z_="_svgWrap_igkx4_13",O_="_svg_igkx4_13",D_="_gridLine_igkx4_23",F_="_axisLabel_igkx4_28",B_="_legendWrap_igkx4_43",W_="_legendItem_igkx4_51",H_="_legendDot_igkx4_57",U_="_legendLabel_igkx4_64",q_="_tooltip_igkx4_71",V_="_tooltipLabel_igkx4_85",G_="_tooltipRow_igkx4_95",Y_="_tooltipDot_igkx4_101",K_="_tooltipSeries_igkx4_108",Q_="_tooltipValue_igkx4_115",Pe={root:P_,svgWrap:z_,svg:O_,gridLine:D_,axisLabel:F_,legendWrap:B_,legendItem:W_,legendDot:H_,legendLabel:U_,tooltip:q_,tooltipLabel:V_,tooltipRow:G_,tooltipDot:Y_,tooltipSeries:K_,tooltipValue:Q_},Z_=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function kd(e){if(e===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(e))),i=e/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function Wo(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}const X_=g.forwardRef(({series:e,labels:a,variant:i="grouped",height:s=260,showGrid:l=!0,showLegend:d=!0,yUnit:p="",barRadius:m=2,colors:v,gradientFrom:y="#8c4fe2",gradientTo:x="#446cff",formatTooltipValue:b,stackStyle:k="gradient-each",capColor:S,className:_,...C},N)=>{var H,T,ne,fe;const $=v&&v.length>0?v:Z_,M=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[j,O]=g.useState({visible:!1,x:0,y:0,label:"",items:[]}),L=g.useRef(null),[R,I]=g.useState(540);g.useEffect(()=>{const ce=L.current;if(!ce)return;const me=new ResizeObserver(xe=>{var ze;const Re=(ze=xe[0])==null?void 0:ze.contentRect.width;Re>0&&I(Math.floor(Re))});me.observe(ce);const we=Math.floor(ce.getBoundingClientRect().width);return we>0&&I(we),()=>me.disconnect()},[]);const z=44,W=0,G=20,Q=20,B=R,Y=s,ee=B-z-W,oe=Y-G-Q,le=5,re=e.map((ce,me)=>ce.color??$[me%$.length]);let X=0;i==="stacked"?a.forEach((ce,me)=>{const we=e.reduce((xe,Re)=>xe+(Re.data[me]??0),0);we>X&&(X=we)}):i==="horizontal"?X=Math.max(...((H=e[0])==null?void 0:H.data)??[0]):e.forEach(ce=>ce.data.forEach(me=>{me>X&&(X=me)}));const D=kd(X),V=Array.from({length:le+1},(ce,me)=>D*(me/le)).reverse(),E=ce=>Q+oe-ce/D*oe,A=ee/a.length,q=3,Z=i==="grouped"?Math.max(4,(A-q*(e.length+1))/e.length):A,ie=()=>O(ce=>({...ce,visible:!1})),ue=g.useCallback(ce=>{const me=ce.currentTarget.getBoundingClientRect(),we=ce.clientX-me.left,xe=Math.floor((we-z)/A);if(xe<0||xe>=a.length){ie();return}const Re=e.map((ze,Ve)=>({color:re[Ve],series:ze.label,value:ze.data[xe]??0}));O({visible:!0,x:ce.clientX+12,y:ce.clientY-8,label:a[xe],items:Re})},[e,a,A,re,z]);if(i==="gradient"){const ce=((T=e[0])==null?void 0:T.data)??[],me=((ne=e[0])==null?void 0:ne.label)??"",we=44,xe=0,Re=20,ze=20,Ve=Math.max(B-we-xe,1),Oe=Y-Re-ze,$e=Math.max(0,...ce),We=$e>0?kd($e):10,Qe=5,dt=Array.from({length:Qe+1},(de,ye)=>We*ye/Qe),De=de=>Re+Oe-de/We*Oe,gt=Ve/Math.max(1,ce.length),et=de=>we+gt*de,It=de=>we+gt*(de+1),rt=de=>we+gt*(de+.5),Ft=ce.length===0?"":ce.map((de,ye)=>{const Ee=De(de);return`M ${et(ye)} ${Ee} L ${It(ye)} ${Ee}`}).join(" "),Hn=[];ce.forEach((de,ye)=>{if(de<=0)return;const Ee=De(de);Hn.push({x:et(ye),y:Ee,width:Math.max(It(ye)-et(ye),0),height:Re+Oe-Ee})});const Mn=Math.max(1,Math.ceil(45/gt)),ua=a.length-1,ae=b??(de=>`${Wo(de)}${p}`);return r.jsxs("div",{ref:N,className:se(Pe.root,_),...C,children:[r.jsx("div",{ref:L,className:Pe.svgWrap,children:r.jsxs("svg",{width:B,height:Y,viewBox:`0 0 ${B} ${Y}`,className:Pe.svg,onMouseLeave:ie,onMouseMove:de=>{const ye=de.currentTarget.getBoundingClientRect(),Ee=de.clientX-ye.left,He=Math.floor((Ee-we)/gt);if(He<0||He>=ce.length){ie();return}O({visible:!0,x:de.clientX+12,y:de.clientY-8,label:a[He]??"",items:[{color:x,series:me,value:ce[He]??0}]})},children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${M}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:y}),r.jsx("stop",{offset:"100%",stopColor:x})]}),r.jsxs("linearGradient",{id:`${M}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:y,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:x,stopOpacity:"0"})]})]}),dt.map((de,ye)=>r.jsxs("g",{children:[l&&r.jsx("line",{x1:0,x2:B-xe,y1:De(de),y2:De(de),className:Pe.gridLine}),r.jsxs("text",{x:0,y:De(de)-6,className:Pe.axisLabel,textAnchor:"start",children:[Wo(de),p]})]},`t-${ye}`)),Hn.map((de,ye)=>r.jsx("rect",{x:de.x,y:de.y,width:de.width,height:de.height,fill:`url(#${M}-fill)`},`b-${ye}`)),Ft&&r.jsx("path",{d:Ft,fill:"none",stroke:`url(#${M}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),j.visible&&(()=>{var _t;const de=(_t=L.current)==null?void 0:_t.getBoundingClientRect();if(!de)return null;const ye=j.x-12-de.left,Ee=Math.floor((ye-we)/gt);if(Ee<0||Ee>=ce.length)return null;const He=ce[Ee]??0;return He<=0?null:r.jsx("circle",{cx:rt(Ee),cy:De(He),r:4,fill:x,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),a.map((de,ye)=>{const Ee=ye===0,He=ye===ua;if(!(Ee||He)&&ye%Mn!==0)return null;const Rn=Ee?we:He?B-xe:rt(ye),Ln=Ee?"start":He?"end":"middle";return r.jsx("text",{x:Rn,y:Y-ze+18,className:Pe.axisLabel,textAnchor:Ln,children:de},`xl-${ye}`)})]})}),j.visible&&j.items.length>0&&r.jsxs("div",{className:Pe.tooltip,style:{left:j.x,top:j.y},children:[r.jsx("div",{className:Pe.tooltipLabel,children:j.label}),j.items.map(de=>r.jsxs("div",{className:Pe.tooltipRow,children:[r.jsx("span",{className:Pe.tooltipDot,style:{background:de.color}}),r.jsx("span",{className:Pe.tooltipSeries,children:de.series}),r.jsx("span",{className:Pe.tooltipValue,children:ae(de.value)})]},de.series))]})]})}if(i==="horizontal"){const ce=((fe=e[0])==null?void 0:fe.data)??[],me=kd(Math.max(...ce,1)),we=28,xe=10,Re=120,Ve=B-Re-44,Oe=a.length*(we+xe)+xe;return r.jsxs("div",{ref:N,className:se(Pe.root,_),...C,children:[r.jsx("div",{ref:L,className:Pe.svgWrap,children:r.jsx("svg",{width:B,height:Oe,viewBox:`0 0 ${B} ${Oe}`,className:Pe.svg,onMouseLeave:ie,onMouseMove:$e=>{var De;const We=$e.currentTarget.getBoundingClientRect(),Qe=$e.clientY-We.top,dt=Math.floor(Qe/(we+xe));if(dt<0||dt>=a.length){ie();return}O({visible:!0,x:$e.clientX+12,y:$e.clientY-8,label:a[dt],items:[{color:re[0],series:((De=e[0])==null?void 0:De.label)??"",value:ce[dt]??0}]})},children:a.map(($e,We)=>{const Qe=xe+We*(we+xe),dt=ce[We]??0,De=dt/me*Ve;return r.jsxs("g",{children:[r.jsx("text",{x:Re-8,y:Qe+we/2+4,className:Pe.axisLabel,textAnchor:"end",children:$e}),r.jsx("rect",{x:Re,y:Qe,width:De,height:we,rx:m,fill:re[0]}),r.jsxs("text",{x:Re+De+6,y:Qe+we/2+4,className:Pe.axisLabel,textAnchor:"start",children:[Wo(dt),p]})]},We)})})}),j.visible&&r.jsxs("div",{className:Pe.tooltip,style:{left:j.x,top:j.y},children:[r.jsx("div",{className:Pe.tooltipLabel,children:j.label}),j.items.map($e=>r.jsxs("div",{className:Pe.tooltipRow,children:[r.jsx("span",{className:Pe.tooltipDot,style:{background:$e.color}}),r.jsx("span",{className:Pe.tooltipSeries,children:$e.series}),r.jsxs("span",{className:Pe.tooltipValue,children:[Wo($e.value),p]})]},$e.series))]})]})}return r.jsxs("div",{ref:N,className:se(Pe.root,_),...C,children:[r.jsx("div",{ref:L,className:Pe.svgWrap,children:r.jsxs("svg",{width:B,height:Y,viewBox:`0 0 ${B} ${Y}`,className:Pe.svg,onMouseMove:ue,onMouseLeave:ie,children:[r.jsx("defs",{children:re.flatMap((ce,me)=>[r.jsxs("linearGradient",{id:`${M}-fill-${me}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:ce,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:ce,stopOpacity:"0"})]},`soft-${me}`),r.jsxs("linearGradient",{id:`${M}-fill-strong-${me}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:ce,stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:ce,stopOpacity:"0"})]},`strong-${me}`)])}),V.map(ce=>{const me=E(ce);return r.jsxs("g",{children:[l&&r.jsx("line",{x1:0,y1:me,x2:B-W,y2:me,className:Pe.gridLine}),r.jsxs("text",{x:0,y:me-6,className:Pe.axisLabel,textAnchor:"start",children:[Wo(ce),p]})]},ce)}),a.map((ce,me)=>{const we=z+me*A;if(i==="stacked"){let ze=0;const Ve=e.map((De,gt)=>{const et=De.data[me]??0,It=et/D*oe,rt=E(ze+et);return ze+=et,{si:gt,value:et,barH:It,y:rt}}),Oe=we+(A-Z)/2,$e=Ve.filter(De=>De.value>0),We=$e.length>0?$e[0].si:-1,Qe=$e.length>0?$e[$e.length-1]:null,dt=S??(Qe?re[Qe.si]:"transparent");return r.jsxs("g",{children:[Ve.map(({si:De,value:gt,barH:et,y:It})=>{if(gt<=0)return null;if(k==="mono-scale"){const rt=De===We;return r.jsx("rect",{x:Oe,y:It,width:Z,height:et,fill:rt?`url(#${M}-fill-strong-${De})`:re[De]},`fill-${De}`)}return r.jsx("rect",{x:Oe,y:It,width:Z,height:et,fill:`url(#${M}-fill-${De})`},`fill-${De}`)}),k==="mono-scale"?Qe&&r.jsx("line",{x1:Oe,x2:Oe+Z,y1:Qe.y,y2:Qe.y,stroke:dt,strokeWidth:2,strokeLinecap:"butt"}):Ve.map(({si:De,value:gt,y:et})=>gt>0?r.jsx("line",{x1:Oe,x2:Oe+Z,y1:et,y2:et,stroke:re[De],strokeWidth:2,strokeLinecap:"butt"},`cap-${De}`):null)]},me)}const xe=e.length*Z+(e.length-1)*q,Re=we+(A-xe)/2;return r.jsx("g",{children:e.map((ze,Ve)=>{const Oe=ze.data[me]??0;if(Oe<=0)return null;const $e=Oe/D*oe,We=Re+Ve*(Z+q),Qe=E(Oe);return r.jsxs("g",{children:[r.jsx("rect",{x:We,y:Qe,width:Z,height:$e,fill:`url(#${M}-fill-${Ve})`}),r.jsx("line",{x1:We,x2:We+Z,y1:Qe,y2:Qe,stroke:re[Ve],strokeWidth:2,strokeLinecap:"butt"})]},Ve)})},me)}),(()=>{const me=Math.max(1,Math.ceil(45/A)),we=a.length-1;return a.map((xe,Re)=>{const ze=Re===0,Ve=Re===we;if(!(ze||Ve)&&Re%me!==0)return null;const $e=ze?z:Ve?B-W:z+A*(Re+.5),We=ze?"start":Ve?"end":"middle";return r.jsx("text",{x:$e,y:Y-G+18,className:Pe.axisLabel,textAnchor:We,children:xe},`xl-${Re}`)})})()]})}),d&&e.length>1&&r.jsx("div",{className:Pe.legendWrap,children:e.map((ce,me)=>r.jsxs("div",{className:Pe.legendItem,children:[r.jsx("span",{className:Pe.legendDot,style:{background:re[me]}}),r.jsx("span",{className:Pe.legendLabel,children:ce.label})]},ce.label))}),j.visible&&r.jsxs("div",{className:Pe.tooltip,style:{left:j.x,top:j.y},children:[r.jsx("div",{className:Pe.tooltipLabel,children:j.label}),j.items.map(ce=>r.jsxs("div",{className:Pe.tooltipRow,children:[r.jsx("span",{className:Pe.tooltipDot,style:{background:ce.color}}),r.jsx("span",{className:Pe.tooltipSeries,children:ce.series}),r.jsxs("span",{className:Pe.tooltipValue,children:[Wo(ce.value),p]})]},ce.series))]})]})});X_.displayName="BarChart";const J_="_root_1crij_5",eC="_svgWrap_1crij_13",tC="_svg_1crij_13",nC="_gridLine_1crij_23",rC="_axisLabelY_1crij_35 _axisLabel_1crij_28",oC="_axisLabelX_1crij_39 _axisLabel_1crij_28",aC="_legendWrap_1crij_51",iC="_tooltip_1crij_76",sC="_tooltipLabel_1crij_95",lC="_tooltipRow_1crij_105",cC="_tooltipDot_1crij_111",dC="_tooltipSeries_1crij_118",uC="_tooltipValue_1crij_125",cn={root:J_,svgWrap:eC,svg:tC,gridLine:nC,axisLabelY:rC,axisLabelX:oC,legendWrap:aC,tooltip:iC,tooltipLabel:sC,tooltipRow:lC,tooltipDot:cC,tooltipSeries:dC,tooltipValue:uC};function pC(e){if(e===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(e))),i=e/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function pf(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}function hC(e,a=.35){if(e.length<2)return"";let i=`M ${e[0][0]} ${e[0][1]}`;for(let s=0;s<e.length-1;s++){const[l,d]=e[s],[p,m]=e[s+1],v=(p-l)*a;i+=` C ${l+v} ${d}, ${p-v} ${m}, ${p} ${m}`}return i}const fC=g.forwardRef(({series:e,labels:a,height:i=260,showGrid:s=!0,showLegend:l=!0,gradientFrom:d="#8c4fe2",gradientTo:p="#446cff",yUnit:m="",yTickCount:v=5,className:y,...x},b)=>{const[k,S]=g.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),_=`line-grad-${Math.random().toString(36).slice(2,9)}`,C=g.useRef(null),[N,$]=g.useState(540);g.useEffect(()=>{const D=C.current;if(!D)return;const V=new ResizeObserver(A=>{var Z;const q=(Z=A[0])==null?void 0:Z.contentRect.width;q>0&&$(Math.floor(q))});V.observe(D);const E=Math.floor(D.getBoundingClientRect().width);return E>0&&$(E),()=>V.disconnect()},[]);const M=44,j=20,O=20,L=N,R=i,I=L-M,z=R-j-O,W=`url(#${_}-stroke)`,G=D=>D.color??W,Q=e.flatMap(D=>D.data),B=pC(Math.max(...Q,1)),Y=Array.from({length:v+1},(D,V)=>B*(V/v)).reverse(),ee=D=>O+z-D/B*z,oe=D=>a.length>1?M+D/(a.length-1)*I:M+I/2,le=D=>D.map((V,E)=>[oe(E),ee(V)]),re=()=>S(D=>({...D,visible:!1})),X=g.useCallback(D=>{const V=D.currentTarget.getBoundingClientRect(),A=D.clientX-V.left-M,q=I/Math.max(a.length-1,1),Z=Math.round(A/q),ie=Math.max(0,Math.min(Z,a.length-1)),ue=e.map(H=>({color:H.color??p,series:H.label,value:H.data[ie]??0}));S({visible:!0,index:ie,x:D.clientX+12,y:D.clientY-8,label:a[ie],items:ue})},[e,a,p,I,M]);return r.jsxs("div",{ref:b,className:se(cn.root,y),...x,children:[r.jsx("div",{ref:C,className:cn.svgWrap,children:r.jsxs("svg",{width:L,height:R,viewBox:`0 0 ${L} ${R}`,className:cn.svg,onMouseMove:X,onMouseLeave:re,children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${_}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:d}),r.jsx("stop",{offset:"100%",stopColor:p})]}),r.jsxs("linearGradient",{id:`${_}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[r.jsx("stop",{offset:"0%",stopColor:p,stopOpacity:"0.05"}),r.jsx("stop",{offset:"50%",stopColor:p}),r.jsx("stop",{offset:"100%",stopColor:p,stopOpacity:"0.05"})]}),r.jsxs("filter",{id:`${_}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[r.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),r.jsx("feOffset",{dy:"4"}),r.jsx("feComponentTransfer",{children:r.jsx("feFuncA",{type:"linear",slope:"0.3"})}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),r.jsx("clipPath",{id:`${_}-clip`,children:r.jsx("rect",{x:M,y:O,width:I,height:z,rx:6,ry:6})})]}),Y.map(D=>{const V=ee(D);return r.jsxs("g",{children:[s&&r.jsx("line",{x1:0,y1:V,x2:L,y2:V,className:cn.gridLine}),r.jsxs("text",{x:0,y:V-6,className:cn.axisLabelY,textAnchor:"start",children:[pf(D),m]})]},D)}),r.jsx("g",{clipPath:`url(#${_}-clip)`,children:e.map((D,V)=>{const E=le(D.data),A=hC(E);return r.jsx("path",{d:A,fill:"none",stroke:G(D),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},V)})}),(()=>{const D=k.index>=0?k.index:0,V=oe(D),E=k.visible&&k.index>=0,A="transform 200ms var(--ease-default, ease-out)";return r.jsx("g",{style:{pointerEvents:"none",opacity:E?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:r.jsxs("g",{style:{transform:`translateX(${V}px)`,transition:A},children:[r.jsx("line",{x1:0,x2:0,y1:O,y2:O+z,stroke:p,strokeWidth:2,strokeLinecap:"round",opacity:.5}),e.map((q,Z)=>{const ie=q.data[D]??0,ue=ee(ie),H=q.color??p;return r.jsx("g",{style:{transform:`translateY(${ue}px)`,transition:A},children:r.jsx("circle",{cx:0,cy:0,r:4,fill:H,filter:`url(#${_}-pin-shadow)`})},Z)})]})})})(),(()=>{const V=a.length>1?I/(a.length-1):I,E=Math.max(1,Math.ceil(45/Math.max(V,1))),A=a.length-1;return a.map((q,Z)=>{const ie=Z===0,ue=Z===A;if(!(ie||ue)&&Z%E!==0)return null;const T=ie?M:ue?L:oe(Z),ne=ie?"start":ue?"end":"middle";return r.jsx("text",{x:T,y:R-j+14,className:cn.axisLabelX,textAnchor:ne,children:q},q)})})()]})}),l&&e.length>0&&r.jsx("div",{className:cn.legendWrap,children:r.jsx(vg,{variant:"line",items:e.map(D=>({color:D.color??p,label:D.label}))})}),k.visible&&r.jsxs("div",{className:cn.tooltip,style:{left:k.x,top:k.y},children:[r.jsx("div",{className:cn.tooltipLabel,children:k.label}),k.items.map(D=>r.jsxs("div",{className:cn.tooltipRow,children:[r.jsx("span",{className:cn.tooltipDot,style:{background:D.color}}),r.jsx("span",{className:cn.tooltipSeries,children:D.series}),r.jsxs("span",{className:cn.tooltipValue,children:[pf(D.value),m]})]},D.series))]})]})});fC.displayName="LineChart";const mC="_root_3tq2n_5",gC="_chartWrap_3tq2n_14",vC="_svg_3tq2n_18",xC="_centerText_3tq2n_23",yC="_statLegend_3tq2n_31",wC="_statItem_3tq2n_37",bC="_statBar_3tq2n_44",kC="_statText_3tq2n_50",_C="_statValue_3tq2n_56",CC="_statLabel_3tq2n_65",jC="_listLegend_3tq2n_72",SC="_legendItem_3tq2n_79",NC="_legendDot_3tq2n_85",MC="_legendLabel_3tq2n_92",RC="_legendValue_3tq2n_99",LC="_tooltip_3tq2n_107",AC="_tooltipLabel_3tq2n_118",$C="_tooltipValue_3tq2n_124",Nt={root:mC,chartWrap:gC,svg:vC,centerText:xC,statLegend:yC,statItem:wC,statBar:bC,statText:kC,statValue:_C,statLabel:CC,listLegend:jC,legendItem:SC,legendDot:NC,legendLabel:MC,legendValue:RC,tooltip:LC,tooltipLabel:AC,tooltipValue:$C},hf=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],TC=g.forwardRef(({segments:e,innerRadius:a=60,size:i=200,showLegend:s=!0,legendVariant:l="list",unit:d="%",centerLabel:p,className:m,...v},y)=>{const[x,b]=g.useState({visible:!1,x:0,y:0,label:"",value:""}),k=e.map((L,R)=>L.color??hf[R%hf.length]),S=e.reduce((L,R)=>L+R.value,0),_=i/2,C=i/2,N=i*.15,$=(i-N)/2-2,M=2*Math.PI*$;let j=-M/4;const O=e.map((L,R)=>{const z=(S>0?L.value/S:0)*M,W=`${z} ${M-z}`,G=-j;return j+=z,{dashArray:W,dashOffset:G,color:k[R],...L}});return r.jsxs("div",{ref:y,className:se(Nt.root,m),...v,children:[r.jsx("div",{className:Nt.chartWrap,children:r.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:Nt.svg,children:[r.jsx("circle",{cx:_,cy:C,r:$,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:N}),O.map((L,R)=>r.jsx("circle",{cx:_,cy:C,r:$,fill:"none",stroke:L.color,strokeWidth:N,strokeDasharray:L.dashArray,strokeDashoffset:L.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:I=>{const z=S>0?Math.round(L.value/S*100):0;b({visible:!0,x:I.clientX+12,y:I.clientY-8,label:L.label,value:`${z}${d}`})},onMouseLeave:()=>b(I=>({...I,visible:!1}))},R)),p&&a>0&&r.jsx("text",{x:_,y:C+6,textAnchor:"middle",className:Nt.centerText,children:p})]})}),s&&l==="stat"&&r.jsx("div",{className:Nt.statLegend,children:e.map((L,R)=>{const I=S>0?Math.round(L.value/S*100):0;return r.jsxs("div",{className:Nt.statItem,children:[r.jsx("span",{className:Nt.statBar,style:{background:k[R]}}),r.jsxs("div",{className:Nt.statText,children:[r.jsxs("span",{className:Nt.statValue,children:[I,d]}),r.jsx("span",{className:Nt.statLabel,children:L.label})]})]},L.label)})}),s&&l==="list"&&r.jsx("div",{className:Nt.listLegend,children:e.map((L,R)=>{const I=S>0?Math.round(L.value/S*100):0;return r.jsxs("div",{className:Nt.legendItem,children:[r.jsx("span",{className:Nt.legendDot,style:{background:k[R]}}),r.jsx("span",{className:Nt.legendLabel,children:L.label}),r.jsxs("span",{className:Nt.legendValue,children:[I,d]})]},L.label)})}),x.visible&&r.jsxs("div",{className:Nt.tooltip,style:{left:x.x,top:x.y},children:[r.jsx("div",{className:Nt.tooltipLabel,children:x.label}),r.jsx("div",{className:Nt.tooltipValue,children:x.value})]})]})});TC.displayName="DonutChart";const IC="_root_bqpf6_5",EC="_svgWrap_bqpf6_10",PC="_svg_bqpf6_10",zC="_axisLabel_bqpf6_19",OC="_tooltip_bqpf6_25",Ho={root:IC,svgWrap:EC,svg:PC,axisLabel:zC,tooltip:OC};function DC(e){return e<.35?"var(--Alloy-green-100)":e<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const FC=g.forwardRef(({cells:e,rows:a,cols:i,colorScale:s=DC,cellRadius:l=4,cellGap:d=4,showTooltip:p=!0,className:m,...v},y)=>{const[x,b]=g.useState({visible:!1,x:0,y:0,content:""}),k=g.useRef(null),[S,_]=g.useState(540);g.useEffect(()=>{const R=k.current;if(!R)return;const I=new ResizeObserver(W=>{var Q;const G=(Q=W[0])==null?void 0:Q.contentRect.width;G>0&&_(Math.floor(G))});I.observe(R);const z=Math.floor(R.getBoundingClientRect().width);return z>0&&_(z),()=>I.disconnect()},[]);const C=32,N=16,$=S,M=$-C-d,j=Math.max(4,(M-(i.length-1)*d)/i.length),O=a.length*(N+d)+d+24,L=new Map;return e.forEach(R=>L.set(`${R.row}__${R.col}`,R)),r.jsxs("div",{ref:y,className:se(Ho.root,m),...v,children:[r.jsx("div",{ref:k,className:Ho.svgWrap,children:r.jsxs("svg",{width:$,height:O,viewBox:`0 0 ${$} ${O}`,className:Ho.svg,onMouseLeave:()=>b(R=>({...R,visible:!1})),children:[i.map((R,I)=>{const z=C+d+I*(j+d)+j/2;return r.jsx("text",{x:z,y:12,className:Ho.axisLabel,textAnchor:"middle",children:R},R)}),a.map((R,I)=>{const z=24+I*(N+d);return r.jsxs("g",{children:[r.jsx("text",{x:C-4,y:z+N/2+4,className:Ho.axisLabel,textAnchor:"end",children:R}),i.map((W,G)=>{const Q=L.get(`${R}__${W}`),B=(Q==null?void 0:Q.value)??0,Y=s(B),ee=C+d+G*(j+d);return r.jsx("rect",{x:ee,y:z,width:j,height:N,rx:l,fill:Y,style:{cursor:"pointer"},onMouseEnter:oe=>{if(!p)return;const le=(Q==null?void 0:Q.label)??`${R} / ${W}: ${Math.round(B*100)}%`;b({visible:!0,x:oe.clientX+12,y:oe.clientY-8,content:le})},onMouseLeave:()=>b(oe=>({...oe,visible:!1}))},W)})]},R)})]})}),x.visible&&r.jsx("div",{className:Ho.tooltip,style:{left:x.x,top:x.y},children:x.content})]})});FC.displayName="HeatMap";const BC="_root_18572_6",WC="_gridWrap_18572_14",HC="_grid_18572_14",UC="_cell_18572_27",qC="_legend_18572_33",VC="_legendSquare_18572_43",GC="_tooltip_18572_49",Ir={root:BC,gridWrap:WC,grid:HC,cell:UC,legend:qC,legendSquare:VC,tooltip:GC},YC=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function KC(e,a){if(e<=0)return 0;const i=e/Math.max(1,a);return i<=.25?1:i<=.5?2:i<=.75?3:4}const QC=g.forwardRef(({days:e,levelColors:a=YC,cellSize:i=14,cellGap:s=3,cellRadius:l=2,fillWidth:d=!1,showLegend:p=!0,maxCount:m,formatTooltip:v,ariaLabel:y,className:x,...b},k)=>{const[S,_]=g.useState({visible:!1,x:0,y:0,content:""}),C=m??Math.max(1,...e.map(j=>j.count)),N=[];for(let j=0;j<e.length;j+=7)N.push(e.slice(j,j+7));const $=d?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${N.length}, minmax(0, 1fr))`,gap:`${s}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${s}px`},M=d?"100%":i;return r.jsxs("div",{ref:k,className:se(Ir.root,x),...b,children:[r.jsx("div",{className:Ir.gridWrap,children:r.jsx("div",{role:"img","aria-label":y??`Activity heatmap with max ${C} on the busiest day`,className:Ir.grid,style:$,onMouseLeave:()=>_(j=>({...j,visible:!1})),children:N.map((j,O)=>Array.from({length:7},(L,R)=>{const I=j[R];if(!I)return r.jsx("span",{className:Ir.cell,style:{width:i,height:i,borderRadius:l,background:a[0]}},`${O}-${R}`);const z=KC(I.count,C),W=v?v(I,z):`${I.label??I.date}: ${I.count} activation${I.count===1?"":"s"}`;return r.jsx("span",{className:Ir.cell,style:{width:M,height:i,borderRadius:l,background:a[z]},onMouseMove:G=>_({visible:!0,x:G.clientX,y:G.clientY,content:W}),onMouseLeave:()=>_(G=>({...G,visible:!1}))},`${O}-${R}`)}))})}),p&&r.jsxs("div",{className:Ir.legend,children:[r.jsx("span",{children:"Less"}),[0,1,2,3,4].map(j=>r.jsx("span",{className:Ir.legendSquare,style:{background:a[j],borderRadius:l}},j)),r.jsx("span",{children:"More"})]}),S.visible&&r.jsx("div",{className:Ir.tooltip,style:{left:S.x,top:S.y},children:S.content})]})});QC.displayName="ActivityHeatMap";const ZC="_root_14edh_5",XC="_track_14edh_17",JC="_segment_14edh_28",ej="_legend_14edh_49",tj="_legendRow_14edh_58",nj="_legendDot_14edh_68",rj="_legendLabel_14edh_74",oj="_legendValue_14edh_78",aj="_tooltip_14edh_84",ij="_tooltipLabel_14edh_100",sj="_tooltipValueRow_14edh_105",lj="_tooltipDot_14edh_114",kn={root:ZC,track:XC,segment:JC,legend:ej,legendRow:tj,legendDot:nj,legendLabel:rj,legendValue:oj,tooltip:aj,tooltipLabel:ij,tooltipValueRow:sj,tooltipDot:lj},cj=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],Uo={r:140,g:79,b:226},_d={r:68,g:108,b:255};function ff(e){const a=Math.max(0,Math.min(100,e))/100,i=Math.round(Uo.r+(_d.r-Uo.r)*a),s=Math.round(Uo.g+(_d.g-Uo.g)*a),l=Math.round(Uo.b+(_d.b-Uo.b)*a);return`rgb(${i}, ${s}, ${l})`}const dj=g.forwardRef(({segments:e,colors:a=cj,aiGradient:i=!1,height:s,showLegend:l=!1,flat:d=!1,ariaLabel:p,className:m,...v},y)=>{const[x,b]=g.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),k=e.reduce((N,$)=>N+Math.max(0,$.value),0);let S=0;const _=e.map((N,$)=>{const M=Math.max(0,N.value),j=k>0?M/k*100:0,O=k>0?S/k*100:0;S+=M;const L=k>0?S/k*100:0,R=N.color??a[$%a.length],I=d?!0:N.emphasized??$===0;return{...N,pct:j,startPct:O,endPct:L,color:R,emphasized:I}}),C=s!==void 0?{height:typeof s=="number"?`${s}px`:s}:void 0;return r.jsxs("div",{ref:y,className:se(kn.root,m),...v,children:[r.jsx("div",{role:"img","aria-label":p??`Ratio bar: ${e.map(N=>`${N.label} ${N.value}`).join(", ")}`,className:kn.track,style:C,onMouseLeave:()=>b(N=>({...N,visible:!1})),children:_.map(N=>{const $=i?`linear-gradient(to right, ${ff(N.startPct)}, ${ff(N.endPct)})`:N.color;return r.jsx("span",{className:kn.segment,"data-emphasized":N.emphasized||void 0,"data-ai":i||void 0,style:{width:`${N.pct}%`,background:$,"--ratio-hover-bg":N.color},onMouseMove:M=>b({visible:!0,x:M.clientX,y:M.clientY,label:N.label,value:N.value,color:N.color})},N.label)})}),l&&r.jsx("ul",{className:kn.legend,children:_.map(N=>r.jsxs("li",{className:kn.legendRow,children:[r.jsx("span",{className:kn.legendDot,style:{background:N.color}}),r.jsx("span",{className:kn.legendLabel,children:N.label}),r.jsx("span",{className:kn.legendValue,children:N.value.toLocaleString("en-US")})]},N.label))}),x.visible&&r.jsxs("div",{className:kn.tooltip,style:{left:x.x,top:x.y},children:[r.jsx("span",{className:kn.tooltipLabel,children:x.label}),r.jsxs("span",{className:kn.tooltipValueRow,children:[r.jsx("span",{className:kn.tooltipDot,style:{background:x.color}}),x.value.toLocaleString("en-US")]})]})]})});dj.displayName="RatioBar";const uj="_track_1wmly_6",pj="_fill_1wmly_12",mf={track:uj,fill:pj},hj=g.forwardRef(({value:e,max:a=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:s="var(--color-bg-tertiary)",gapColor:l="var(--color-bg-primary)",stripeWidth:d=2,stripeGap:p=1,height:m=12,ariaLabel:v,className:y,style:x,...b},k)=>{const S=d+p,_=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${d}px,
      ${l} ${d}px,
      ${l} ${S}px
    )`,C=Math.max(0,Math.min(a,e)),N=a>0?C/a*100:0;return r.jsx("div",{ref:k,role:"progressbar","aria-label":v??`Progress: ${Math.round(N)}%`,"aria-valuemin":0,"aria-valuemax":a,"aria-valuenow":C,className:se(mf.track,y),style:{height:m,background:`${_}, ${s}`,...x},...b,children:r.jsx("div",{className:mf.fill,style:{width:`${N}%`,background:`${_}, ${i}`}})})});hj.displayName="StripedBar";const fj=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],mj=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function gf(e,a="to right"){const i=e.map(({color:s,position:l})=>`${s} ${l}`).join(", ");return`linear-gradient(${a}, ${i})`}gf(fj),gf(mj);var it="-ms-",ai="-moz-",Ze="-webkit-",xg="comm",gl="rule",zu="decl",gj="@import",vj="@namespace",yg="@keyframes",xj="@layer",wg=Math.abs,Ou=String.fromCharCode,eu=Object.assign;function yj(e,a){return kt(e,0)^45?(((a<<2^kt(e,0))<<2^kt(e,1))<<2^kt(e,2))<<2^kt(e,3):0}function bg(e){return e.trim()}function cr(e,a){return(e=a.exec(e))?e[0]:e}function Ie(e,a,i){return e.replace(a,i)}function Hs(e,a,i){return e.indexOf(a,i)}function kt(e,a){return e.charCodeAt(a)|0}function ho(e,a,i){return e.slice(a,i)}function Dn(e){return e.length}function kg(e){return e.length}function ti(e,a){return a.push(e),e}function wj(e,a){return e.map(a).join("")}function vf(e,a){return e.filter(function(i){return!cr(i,a)})}var vl=1,ta=1,_g=0,Nn=0,yt=0,ca="";function xl(e,a,i,s,l,d,p,m){return{value:e,root:a,parent:i,type:s,props:l,children:d,line:vl,column:ta,length:p,return:"",siblings:m}}function Er(e,a){return eu(xl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},a)}function qo(e){for(;e.root;)e=Er(e.root,{children:[e]});ti(e,e.siblings)}function bj(){return yt}function kj(){return yt=Nn>0?kt(ca,--Nn):0,ta--,yt===10&&(ta=1,vl--),yt}function Bn(){return yt=Nn<_g?kt(ca,Nn++):0,ta++,yt===10&&(ta=1,vl++),yt}function zr(){return kt(ca,Nn)}function Us(){return Nn}function yl(e,a){return ho(ca,e,a)}function ci(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _j(e){return vl=ta=1,_g=Dn(ca=e),Nn=0,[]}function Cj(e){return ca="",e}function Cd(e){return bg(yl(Nn-1,tu(e===91?e+2:e===40?e+1:e)))}function jj(e){for(;(yt=zr())&&yt<33;)Bn();return ci(e)>2||ci(yt)>3?"":" "}function Sj(e,a){for(;--a&&Bn()&&!(yt<48||yt>102||yt>57&&yt<65||yt>70&&yt<97););return yl(e,Us()+(a<6&&zr()==32&&Bn()==32))}function tu(e){for(;Bn();)switch(yt){case e:return Nn;case 34:case 39:e!==34&&e!==39&&tu(yt);break;case 40:e===41&&tu(e);break;case 92:Bn();break}return Nn}function Nj(e,a){for(;Bn()&&e+yt!==57;)if(e+yt===84&&zr()===47)break;return"/*"+yl(a,Nn-1)+"*"+Ou(e===47?e:Bn())}function Mj(e){for(;!ci(zr());)Bn();return yl(e,Nn)}function Rj(e){return Cj(qs("",null,null,null,[""],e=_j(e),0,[0],e))}function qs(e,a,i,s,l,d,p,m,v){for(var y=0,x=0,b=p,k=0,S=0,_=0,C=1,N=1,$=1,M=0,j="",O=l,L=d,R=s,I=j;N;)switch(_=M,M=Bn()){case 40:if(_!=108&&kt(I,b-1)==58){Hs(I+=Ie(Cd(M),"&","&\f"),"&\f",wg(y?m[y-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:I+=Cd(M);break;case 9:case 10:case 13:case 32:I+=jj(_);break;case 92:I+=Sj(Us()-1,7);continue;case 47:switch(zr()){case 42:case 47:ti(Lj(Nj(Bn(),Us()),a,i,v),v),(ci(_||1)==5||ci(zr()||1)==5)&&Dn(I)&&ho(I,-1,void 0)!==" "&&(I+=" ");break;default:I+="/"}break;case 123*C:m[y++]=Dn(I)*$;case 125*C:case 59:case 0:switch(M){case 0:case 125:N=0;case 59+x:$==-1&&(I=Ie(I,/\f/g,"")),S>0&&(Dn(I)-b||C===0&&_===47)&&ti(S>32?yf(I+";",s,i,b-1,v):yf(Ie(I," ","")+";",s,i,b-2,v),v);break;case 59:I+=";";default:if(ti(R=xf(I,a,i,y,x,l,m,j,O=[],L=[],b,d),d),M===123)if(x===0)qs(I,a,R,R,O,d,b,m,L);else{switch(k){case 99:if(kt(I,3)===110)break;case 108:if(kt(I,2)===97)break;default:x=0;case 100:case 109:case 115:}x?qs(e,R,R,s&&ti(xf(e,R,R,0,0,l,m,j,l,O=[],b,L),L),l,L,b,m,s?O:L):qs(I,R,R,R,[""],L,0,m,L)}}y=x=S=0,C=$=1,j=I="",b=p;break;case 58:b=1+Dn(I),S=_;default:if(C<1){if(M==123)--C;else if(M==125&&C++==0&&kj()==125)continue}switch(I+=Ou(M),M*C){case 38:$=x>0?1:(I+="\f",-1);break;case 44:m[y++]=(Dn(I)-1)*$,$=1;break;case 64:zr()===45&&(I+=Cd(Bn())),k=zr(),x=b=Dn(j=I+=Mj(Us())),M++;break;case 45:_===45&&Dn(I)==2&&(C=0)}}return d}function xf(e,a,i,s,l,d,p,m,v,y,x,b){for(var k=l-1,S=l===0?d:[""],_=kg(S),C=0,N=0,$=0;C<s;++C)for(var M=0,j=ho(e,k+1,k=wg(N=p[C])),O=e;M<_;++M)(O=bg(N>0?S[M]+" "+j:Ie(j,/&\f/g,S[M])))&&(v[$++]=O);return xl(e,a,i,l===0?gl:m,v,y,x,b)}function Lj(e,a,i,s){return xl(e,a,i,xg,Ou(bj()),ho(e,2,-2),0,s)}function yf(e,a,i,s,l){return xl(e,a,i,zu,ho(e,0,s),ho(e,s+1,-1),s,l)}function Cg(e,a,i){switch(yj(e,a)){case 5103:return Ze+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ze+e+e;case 4855:return Ze+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return ai+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ze+e+ai+e+it+e+e;case 5936:switch(kt(e,a+11)){case 114:return Ze+e+it+Ie(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ze+e+it+Ie(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ze+e+it+Ie(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ze+e+it+e+e;case 6165:return Ze+e+it+"flex-"+e+e;case 5187:return Ze+e+Ie(e,/(\w+).+(:[^]+)/,Ze+"box-$1$2"+it+"flex-$1$2")+e;case 5443:return Ze+e+it+"flex-item-"+Ie(e,/flex-|-self/g,"")+(cr(e,/flex-|baseline/)?"":it+"grid-row-"+Ie(e,/flex-|-self/g,""))+e;case 4675:return Ze+e+it+"flex-line-pack"+Ie(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ze+e+it+Ie(e,"shrink","negative")+e;case 5292:return Ze+e+it+Ie(e,"basis","preferred-size")+e;case 6060:return Ze+"box-"+Ie(e,"-grow","")+Ze+e+it+Ie(e,"grow","positive")+e;case 4554:return Ze+Ie(e,/([^-])(transform)/g,"$1"+Ze+"$2")+e;case 6187:return Ie(Ie(Ie(e,/(zoom-|grab)/,Ze+"$1"),/(image-set)/,Ze+"$1"),e,"")+e;case 5495:case 3959:return Ie(e,/(image-set\([^]*)/,Ze+"$1$`$1");case 4968:return Ie(Ie(e,/(.+:)(flex-)?(.*)/,Ze+"box-pack:$3"+it+"flex-pack:$3"),/space-between/,"justify")+Ze+e+e;case 4200:if(!cr(e,/flex-|baseline/))return it+"grid-column-align"+ho(e,a)+e;break;case 2592:case 3360:return it+Ie(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(s,l){return a=l,cr(s.props,/grid-\w+-end/)})?~Hs(e+(i=i[a].value),"span",0)?e:it+Ie(e,"-start","")+e+it+"grid-row-span:"+(~Hs(i,"span",0)?cr(i,/\d+/):+cr(i,/\d+/)-+cr(e,/\d+/))+";":it+Ie(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(s){return cr(s.props,/grid-\w+-start/)})?e:it+Ie(Ie(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Ie(e,/(.+)-inline(.+)/,Ze+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dn(e)-1-a>6)switch(kt(e,a+1)){case 109:if(kt(e,a+4)!==45)break;case 102:return Ie(e,/(.+:)(.+)-([^]+)/,"$1"+Ze+"$2-$3$1"+ai+(kt(e,a+3)==108?"$3":"$2-$3"))+e;case 115:return~Hs(e,"stretch",0)?Cg(Ie(e,"stretch","fill-available"),a,i)+e:e}break;case 5152:case 5920:return Ie(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,d,p,m,v,y){return it+l+":"+d+y+(p?it+l+"-span:"+(m?v:+v-+d)+y:"")+e});case 4949:if(kt(e,a+6)===121)return Ie(e,":",":"+Ze)+e;break;case 6444:switch(kt(e,kt(e,14)===45?18:11)){case 120:return Ie(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ze+(kt(e,14)===45?"inline-":"")+"box$3$1"+Ze+"$2$3$1"+it+"$2box$3")+e;case 100:return Ie(e,":",":"+it)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ie(e,"scroll-","scroll-snap-")+e}return e}function tl(e,a){for(var i="",s=0;s<e.length;s++)i+=a(e[s],s,e,a)||"";return i}function Aj(e,a,i,s){switch(e.type){case xj:if(e.children.length)break;case gj:case vj:case zu:return e.return=e.return||e.value;case xg:return"";case yg:return e.return=e.value+"{"+tl(e.children,s)+"}";case gl:if(!Dn(e.value=e.props.join(",")))return""}return Dn(i=tl(e.children,s))?e.return=e.value+"{"+i+"}":""}function $j(e){var a=kg(e);return function(i,s,l,d){for(var p="",m=0;m<a;m++)p+=e[m](i,s,l,d)||"";return p}}function Tj(e){return function(a){a.root||(a=a.return)&&e(a)}}function Ij(e,a,i,s){if(e.length>-1&&!e.return)switch(e.type){case zu:e.return=Cg(e.value,e.length,i);return;case yg:return tl([Er(e,{value:Ie(e.value,"@","@"+Ze)})],s);case gl:if(e.length)return wj(i=e.props,function(l){switch(cr(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qo(Er(e,{props:[Ie(l,/:(read-\w+)/,":"+ai+"$1")]})),qo(Er(e,{props:[l]})),eu(e,{props:vf(i,s)});break;case"::placeholder":qo(Er(e,{props:[Ie(l,/:(plac\w+)/,":"+Ze+"input-$1")]})),qo(Er(e,{props:[Ie(l,/:(plac\w+)/,":"+ai+"$1")]})),qo(Er(e,{props:[Ie(l,/:(plac\w+)/,it+"input-$1")]})),qo(Er(e,{props:[l]})),eu(e,{props:vf(i,s)});break}return""})}}var Ko={},jd,Sd;const na=typeof process<"u"&&Ko!==void 0&&(Ko.REACT_APP_SC_ATTR||Ko.SC_ATTR)||"data-styled",jg="active",Sg="data-styled-version",wl="6.4.2",Du=`/*!sc*/
`,ii=typeof window<"u"&&typeof document<"u";function wf(e){if(typeof process<"u"&&Ko!==void 0){const a=Ko[e];if(a!==void 0&&a!=="")return a!=="false"}}const Ej=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Sd=(jd=wf("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&jd!==void 0?jd:wf("SC_DISABLE_SPEEDY"))!==null&&Sd!==void 0?Sd:typeof process<"u"&&Ko!==void 0&&!1),Ng="sc-keyframes-",Pj={};function yi(e,...a){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${a.length>0?` Args: ${a.join(", ")}`:""}`)}let Vs=new Map,nl=new Map,Gs=1;const ni=e=>{if(Vs.has(e))return Vs.get(e);for(;nl.has(Gs);)Gs++;const a=Gs++;return Vs.set(e,a),nl.set(a,e),a},zj=e=>nl.get(e),Oj=(e,a)=>{Gs=a+1,Vs.set(e,a),nl.set(a,e)},Fu=Object.freeze([]),ra=Object.freeze({});function Mg(e,a,i=ra){return e.theme!==i.theme&&e.theme||a||i.theme}const Dj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Fj=/(^-|-$)/g;function Rg(e){return e.replace(Dj,"-").replace(Fj,"")}const Bj=/(a)(d)/gi,bf=e=>String.fromCharCode(e+(e>25?39:97));function Bu(e){let a,i="";for(a=Math.abs(e);a>52;a=a/52|0)i=bf(a%52)+i;return(bf(a%52)+i).replace(Bj,"$1-$2")}const nu=5381,po=(e,a)=>{let i=a.length;for(;i;)e=33*e^a.charCodeAt(--i);return e},Lg=e=>po(nu,e);function Wu(e){return Bu(Lg(e)>>>0)}function Wj(e){return e.displayName||e.name||"Component"}function ru(e){return typeof e=="string"&&!0}function Hj(e){return ru(e)?`styled.${e}`:`Styled(${Wj(e)})`}const Ag=Symbol.for("react.memo"),Uj=Symbol.for("react.forward_ref"),qj={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Vj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},$g={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gj={[Uj]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Ag]:$g};function kf(e){return("type"in(a=e)&&a.type.$$typeof)===Ag?$g:"$$typeof"in e?Gj[e.$$typeof]:qj;var a}const Yj=Object.defineProperty,Kj=Object.getOwnPropertyNames,Qj=Object.getOwnPropertySymbols,Zj=Object.getOwnPropertyDescriptor,Xj=Object.getPrototypeOf,Jj=Object.prototype;function Tg(e,a,i){if(typeof a!="string"){const s=Xj(a);s&&s!==Jj&&Tg(e,s,i);const l=Kj(a).concat(Qj(a)),d=kf(e),p=kf(a);for(let m=0;m<l.length;++m){const v=l[m];if(!(v in Vj||i&&i[v]||p&&v in p||d&&v in d)){const y=Zj(a,v);try{Yj(e,v,y)}catch{}}}}return e}function wi(e){return typeof e=="function"}const eS=Symbol.for("react.forward_ref");function Hu(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===eS&&"styledComponentId"in e}function ri(e,a){return e&&a?e+" "+a:e||a||""}function rl(e,a){return e.join("")}function di(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ou(e,a,i=!1){if(!i&&!di(e)&&!Array.isArray(e))return a;if(Array.isArray(a))for(let s=0;s<a.length;s++)e[s]=ou(e[s],a[s]);else if(di(a))for(const s in a)e[s]=ou(e[s],a[s]);return e}function Uu(e,a){Object.defineProperty(e,"toString",{value:a})}const tS=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let a=this._cIndex;if(e>this._cGroup)for(let i=this._cGroup;i<e;i++)a+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=e;i--)a-=this.groupSizes[i];return this._cGroup=e,this._cIndex=a,a}insertRules(e,a){if(e>=this.groupSizes.length){const l=this.groupSizes,d=l.length;let p=d;for(;e>=p;)if(p<<=1,p<0)throw yi(16,`${e}`);this.groupSizes=new Uint32Array(p),this.groupSizes.set(l),this.length=p;for(let m=d;m<p;m++)this.groupSizes[m]=0}let i=this.indexOfGroup(e+1),s=0;for(let l=0,d=a.length;l<d;l++)this.tag.insertRule(i,a[l])&&(this.groupSizes[e]++,i++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)}clearGroup(e){if(e<this.length){const a=this.groupSizes[e],i=this.indexOfGroup(e),s=i+a;this.groupSizes[e]=0;for(let l=i;l<s;l++)this.tag.deleteRule(i);a>0&&this._cGroup>e&&(this._cIndex-=a)}}getGroup(e){let a="";if(e>=this.length||this.groupSizes[e]===0)return a;const i=this.groupSizes[e],s=this.indexOfGroup(e),l=s+i;for(let d=s;d<l;d++)a+=this.tag.getRule(d)+Du;return a}},nS=`style[${na}][${Sg}="${wl}"]`,rS=new RegExp(`^${na}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),_f=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,au=e=>{if(!e)return document;if(_f(e))return e;if("getRootNode"in e){const a=e.getRootNode();if(_f(a))return a}return document},oS=(e,a,i)=>{const s=i.split(",");let l;for(let d=0,p=s.length;d<p;d++)(l=s[d])&&e.registerName(a,l)},aS=(e,a)=>{var i;const s=((i=a.textContent)!==null&&i!==void 0?i:"").split(Du),l=[];for(let d=0,p=s.length;d<p;d++){const m=s[d].trim();if(!m)continue;const v=m.match(rS);if(v){const y=0|parseInt(v[1],10),x=v[2];y!==0&&(Oj(x,y),oS(e,x,v[3]),e.getTag().insertRules(y,l)),l.length=0}else l.push(m)}},Nd=e=>{const a=au(e.options.target).querySelectorAll(nS);for(let i=0,s=a.length;i<s;i++){const l=a[i];l&&l.getAttribute(na)!==jg&&(aS(e,l),l.parentNode&&l.parentNode.removeChild(l))}};let Qa=!1;function iS(){if(Qa!==!1)return Qa;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Qa=e.nonce||e.getAttribute("content")||void 0;const a=document.head.querySelector('meta[name="sc-nonce"]');if(a)return Qa=a.getAttribute("content")||void 0}return Qa=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Ig=(e,a)=>{const i=document.head,s=e||i,l=document.createElement("style"),d=(v=>{const y=Array.from(v.querySelectorAll(`style[${na}]`));return y[y.length-1]})(s),p=d!==void 0?d.nextSibling:null;l.setAttribute(na,jg),l.setAttribute(Sg,wl);const m=a||iS();return m&&l.setAttribute("nonce",m),s.insertBefore(l,p),l},sS=class{constructor(e,a){this.element=Ig(e,a),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var s;if(i.sheet)return i.sheet;const l=(s=i.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let d=0,p=l.length;d<p;d++){const m=l[d];if(m.ownerNode===i)return m}throw yi(17)})(this.element),this.length=0}insertRule(e,a){try{return this.sheet.insertRule(a,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const a=this.sheet.cssRules[e];return a&&a.cssText?a.cssText:""}},lS=class{constructor(e,a){this.element=Ig(e,a),this.nodes=this.element.childNodes,this.length=0}insertRule(e,a){if(e<=this.length&&e>=0){const i=document.createTextNode(a);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Cf=ii;const cS={isServer:!ii,useCSSOMInjection:!Ej};class bi{static registerId(a){return ni(a)}constructor(a=ra,i={},s){this.options=Object.assign(Object.assign({},cS),a),this.gs=i,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!a.isServer,!this.server&&ii&&Cf&&(Cf=!1,Nd(this)),Uu(this,()=>(l=>{const d=l.getTag(),{length:p}=d;let m="";for(let v=0;v<p;v++){const y=zj(v);if(y===void 0)continue;const x=l.names.get(y);if(x===void 0||!x.size)continue;const b=d.getGroup(v);if(b.length===0)continue;const k=na+".g"+v+'[id="'+y+'"]';let S="";for(const _ of x)_.length>0&&(S+=_+",");m+=b+k+'{content:"'+S+'"}'+Du}return m})(this))}rehydrate(){!this.server&&ii&&Nd(this)}reconstructWithOptions(a,i=!0){const s=new bi(Object.assign(Object.assign({},this.options),a),this.gs,i&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&ii&&a.target!==this.options.target&&au(this.options.target)!==au(a.target)&&Nd(s),s}allocateGSInstance(a){return this.gs[a]=(this.gs[a]||0)+1}getTag(){return this.tag||(this.tag=(a=(({useCSSOMInjection:i,target:s,nonce:l})=>i?new sS(s,l):new lS(s,l))(this.options),new tS(a)));var a}hasNameForId(a,i){var s,l;return(l=(s=this.names.get(a))===null||s===void 0?void 0:s.has(i))!==null&&l!==void 0&&l}registerName(a,i){ni(a),a.startsWith(Ng)&&this.keyframeIds.add(a);const s=this.names.get(a);s?s.add(i):this.names.set(a,new Set([i]))}insertRules(a,i,s){this.registerName(a,i),this.getTag().insertRules(ni(a),s)}clearNames(a){this.names.has(a)&&this.names.get(a).clear()}clearRules(a){this.getTag().clearGroup(ni(a)),this.clearNames(a)}clearTag(){this.tag=void 0}}const Eg=new WeakSet,dS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function uS(e,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||e in dS||e.startsWith("--")?String(a).trim():a+"px"}const so=47;function jf(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let a="";for(let i=0;i<e.length;i++){const s=e.charCodeAt(i);a+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):e[i]}return a.startsWith("ms-")?"-"+a:a}const Pg=Symbol.for("sc-keyframes");function pS(e){return typeof e=="object"&&e!==null&&Pg in e}function zg(e){return wi(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Og=e=>e==null||e===!1||e==="",hS=Symbol.for("react.client.reference");function Sf(e){return e.$$typeof===hS}function Dg(e,a){for(const i in e){const s=e[i];e.hasOwnProperty(i)&&!Og(s)&&(Array.isArray(s)&&Eg.has(s)||wi(s)?a.push(jf(i)+":",s,";"):di(s)?(a.push(i+" {"),Dg(s,a),a.push("}")):a.push(jf(i)+": "+uS(i,s)+";"))}}function Fr(e,a,i,s,l=[]){if(Og(e))return l;const d=typeof e;if(d==="string")return l.push(e),l;if(d==="function"){if(Sf(e))return l;if(zg(e)&&a){const p=e(a);return Fr(p,a,i,s,l)}return l.push(e),l}if(Array.isArray(e)){for(let p=0;p<e.length;p++)Fr(e[p],a,i,s,l);return l}return Hu(e)?(l.push(`.${e.styledComponentId}`),l):pS(e)?(i?(e.inject(i,s),l.push(e.getName(s))):l.push(e),l):Sf(e)?l:di(e)?e.toString!==Object.prototype.toString?(l.push(e.toString()),l):(Dg(e,l),l):(l.push(e.toString()),l)}const fS=Lg(wl);class mS{constructor(a,i,s){this.rules=a,this.componentId=i,this.baseHash=po(fS,i),this.baseStyle=s,bi.registerId(i)}generateAndInjectStyles(a,i,s){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,i,s):"";{let d="";for(let p=0;p<this.rules.length;p++){const m=this.rules[p];if(typeof m=="string")d+=m;else if(m)if(zg(m)){const v=m(a);typeof v=="string"?d+=v:v!=null&&v!==!1&&(d+=rl(Fr(v,a,i,s)))}else d+=rl(Fr(m,a,i,s))}if(d){this.dynamicNameCache||(this.dynamicNameCache=new Map);const p=s.hash?s.hash+d:d;let m=this.dynamicNameCache.get(p);if(!m){if(m=Bu(po(po(this.baseHash,s.hash),d)>>>0),this.dynamicNameCache.size>=200){const v=this.dynamicNameCache.keys().next().value;v!==void 0&&this.dynamicNameCache.delete(v)}this.dynamicNameCache.set(p,m)}if(!i.hasNameForId(this.componentId,m)){const v=s(d,"."+m,void 0,this.componentId);i.insertRules(this.componentId,m,v)}l=ri(l,m)}}return l}}const gS=/&/g;function Fg(e,a){let i=0;for(;--a>=0&&e.charCodeAt(a)===92;)i++;return!(1&~i)}function Md(e){const a=e.length;let i="",s=0,l=0,d=0,p=!1,m=!1;for(let v=0;v<a;v++){const y=e.charCodeAt(v);if(d!==0||p||y!==so||e.charCodeAt(v+1)!==42)if(p)y===42&&e.charCodeAt(v+1)===so&&(p=!1,v++);else if(y!==34&&y!==39||Fg(e,v)){if(d===0)if(y===123)l++;else if(y===125){if(l--,l<0){m=!0;let x=v+1;for(;x<a;){const b=e.charCodeAt(x);if(b===59||b===10)break;x++}x<a&&e.charCodeAt(x)===59&&x++,l=0,v=x-1,s=x;continue}l===0&&(i+=e.substring(s,v+1),s=v+1)}else y===59&&l===0&&(i+=e.substring(s,v+1),s=v+1)}else d===0?d=y:d===y&&(d=0);else p=!0,v++}return m||l!==0||d!==0?(s<a&&l===0&&d===0&&(i+=e.substring(s)),i):e}function Bg(e,a){const i=a+" ",s=","+i;for(let l=0;l<e.length;l++){const d=e[l];if(d.type==="rule"){d.value=(i+d.value).replaceAll(",",s);const p=d.props,m=[];for(let v=0;v<p.length;v++)m[v]=i+p[v];d.props=m}Array.isArray(d.children)&&d.type!=="@keyframes"&&Bg(d.children,a)}return e}function vS({options:e=ra,plugins:a=Fu}=ra){let i,s,l;const d=(k,S,_)=>_.startsWith(s)&&_.endsWith(s)&&_.replaceAll(s,"").length>0?`.${i}`:k,p=a.slice();p.push(k=>{k.type===gl&&k.value.includes("&")&&(l||(l=new RegExp(`\\${s}\\b`,"g")),k.props[0]=k.props[0].replace(gS,s).replace(l,d))}),e.prefix&&p.push(Ij),p.push(Aj);let m=[];const v=$j(p.concat(Tj(k=>m.push(k)))),y=(k,S="",_="",C="&")=>{i=C,s=S,l=void 0;const N=(function(M){const j=M.indexOf("//")!==-1,O=M.indexOf("}")!==-1;if(!j&&!O)return M;if(!j)return Md(M);const L=M.length;let R="",I=0,z=0,W=0,G=0,Q=0,B=!1;for(;z<L;){const Y=M.charCodeAt(z);if(Y!==34&&Y!==39||Fg(M,z))if(W===0)if(Y===so&&z+1<L&&M.charCodeAt(z+1)===42){for(z+=2;z+1<L&&(M.charCodeAt(z)!==42||M.charCodeAt(z+1)!==so);)z++;z+=2}else if(Y!==40)if(Y!==41)if(G>0)z++;else if(Y===42&&z+1<L&&M.charCodeAt(z+1)===so)R+=M.substring(I,z),z+=2,I=z,B=!0;else if(Y===so&&z+1<L&&M.charCodeAt(z+1)===so){for(R+=M.substring(I,z);z<L&&M.charCodeAt(z)!==10;)z++;I=z,B=!0}else Y===123?Q++:Y===125&&Q--,z++;else G>0&&G--,z++;else G++,z++;else z++;else W===0?W=Y:W===Y&&(W=0),z++}return B?(I<L&&(R+=M.substring(I)),Q===0?R:Md(R)):Q===0?M:Md(M)})(k);let $=Rj(_||S?_+" "+S+" { "+N+" }":N);return e.namespace&&($=Bg($,e.namespace)),m=[],tl($,v),m},x=e;let b=nu;for(let k=0;k<a.length;k++)a[k].name||yi(15),b=po(b,a[k].name);return x!=null&&x.namespace&&(b=po(b,x.namespace)),x!=null&&x.prefix&&(b=po(b,"p")),y.hash=b!==nu?b.toString():"",y}const xS=new bi,iu=vS(),Wg=tn.createContext({shouldForwardProp:void 0,styleSheet:xS,stylis:iu,stylisPlugins:void 0});Wg.Consumer;function Hg(){return tn.useContext(Wg)}const qu=tn.createContext(void 0);qu.Consumer;const Nf=Object.prototype.hasOwnProperty,Rd={};function yS(e,a){const i=typeof e!="string"?"sc":Rg(e);Rd[i]=(Rd[i]||0)+1;const s=i+"-"+Wu(wl+i+Rd[i]);return a?a+"-"+s:s}function wS(e,a,i){const s=Hu(e),l=e,d=!ru(e),{attrs:p=Fu,componentId:m=yS(a.displayName,a.parentComponentId),displayName:v=Hj(e)}=a,y=a.displayName&&a.componentId?Rg(a.displayName)+"-"+a.componentId:a.componentId||m,x=s&&l.attrs?l.attrs.concat(p).filter(Boolean):p;let{shouldForwardProp:b}=a;if(s&&l.shouldForwardProp){const C=l.shouldForwardProp;if(a.shouldForwardProp){const N=a.shouldForwardProp;b=($,M)=>C($,M)&&N($,M)}else b=C}const k=new mS(i,y,s?l.componentStyle:void 0);function S(C,N){return(function($,M,j){const{attrs:O,componentStyle:L,defaultProps:R,foldedComponentIds:I,styledComponentId:z,target:W}=$,G=tn.useContext(qu),Q=Hg(),B=$.shouldForwardProp||Q.shouldForwardProp,Y=Mg(M,G,R)||ra;let ee,oe;{const D=tn.useRef(null),V=D.current;if(V!==null&&V[1]===Y&&V[2]===Q.styleSheet&&V[3]===Q.stylis&&V[7]===L&&(function(E,A,q){const Z=E,ie=A;let ue=0;for(const H in ie)if(Nf.call(ie,H)&&(ue++,Z[H]!==ie[H]))return!1;return ue===q})(V[0],M,V[4]))ee=V[5],oe=V[6];else{ee=(function(A,q,Z){const ie=Object.assign(Object.assign({},q),{className:void 0,theme:Z}),ue=A.length>1;for(let H=0;H<A.length;H++){const T=A[H],ne=wi(T)?T(ue?Object.assign({},ie):ie):T;for(const fe in ne)fe==="className"?ie.className=ri(ie.className,ne[fe]):fe==="style"?ie.style=Object.assign(Object.assign({},ie.style),ne[fe]):fe in q&&q[fe]===void 0||(ie[fe]=ne[fe])}return"className"in q&&typeof q.className=="string"&&(ie.className=ri(ie.className,q.className)),ie})(O,M,Y),oe=(function(A,q,Z,ie){return A.generateAndInjectStyles(q,Z,ie)})(L,ee,Q.styleSheet,Q.stylis);let E=0;for(const A in M)Nf.call(M,A)&&E++;D.current=[M,Y,Q.styleSheet,Q.stylis,E,ee,oe,L]}}const le=ee.as||W,re=(function(D,V,E,A){const q={};for(const Z in D)D[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&D.theme===E||(Z==="forwardedAs"?q.as=D.forwardedAs:A&&!A(Z,V)||(q[Z]=D[Z]));return q})(ee,le,Y,B);let X=ri(I,z);return oe&&(X+=" "+oe),ee.className&&(X+=" "+ee.className),re[ru(le)&&le.includes("-")?"class":"className"]=X,j&&(re.ref=j),g.createElement(le,re)})(_,C,N)}S.displayName=v;let _=tn.forwardRef(S);return _.attrs=x,_.componentStyle=k,_.displayName=v,_.shouldForwardProp=b,_.foldedComponentIds=s?ri(l.foldedComponentIds,l.styledComponentId):"",_.styledComponentId=y,_.target=s?l.target:e,Object.defineProperty(_,"defaultProps",{get(){return this._foldedDefaultProps},set(C){this._foldedDefaultProps=s?(function(N,...$){for(const M of $)ou(N,M,!0);return N})({},l.defaultProps,C):C}}),Uu(_,()=>`.${_.styledComponentId}`),d&&Tg(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}var bS=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Mf(e,a){const i=[e[0]];for(let s=0,l=a.length;s<l;s+=1)i.push(a[s],e[s+1]);return i}const Rf=e=>(Eg.add(e),e);function qe(e,...a){if(wi(e)||di(e))return Rf(Fr(Mf(Fu,[e,...a])));const i=e;return a.length===0&&i.length===1&&typeof i[0]=="string"?Fr(i):Rf(Fr(Mf(i,a)))}function su(e,a,i=ra){if(!a)throw yi(1,a);const s=(l,...d)=>e(a,i,qe(l,...d));return s.attrs=l=>su(e,a,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)})),s.withConfig=l=>su(e,a,Object.assign(Object.assign({},i),l)),s}const Ug=e=>su(wS,e),f=Ug;bS.forEach(e=>{f[e]=Ug(e)});class kS{constructor(a,i){this.instanceRules=new Map,this.rules=a,this.componentId=i,this.isStatic=(function(s){for(let l=0;l<s.length;l+=1){const d=s[l];if(wi(d)&&!Hu(d))return!1}return!0})(a),bi.registerId(this.componentId)}removeStyles(a,i){this.instanceRules.delete(a),this.rebuildGroup(i)}renderStyles(a,i,s,l){const d=this.componentId;if(this.isStatic){if(s.hasNameForId(d,d+a))this.instanceRules.has(a)||this.computeRules(a,i,s,l);else{const m=this.computeRules(a,i,s,l);s.insertRules(d,m.name,m.rules)}return}const p=this.instanceRules.get(a);if(this.computeRules(a,i,s,l),!s.server&&p){const m=p.rules,v=this.instanceRules.get(a).rules;if(m.length===v.length){let y=!0;for(let x=0;x<m.length;x++)if(m[x]!==v[x]){y=!1;break}if(y)return}}this.rebuildGroup(s)}computeRules(a,i,s,l){const d=rl(Fr(this.rules,i,s,l)),p={name:this.componentId+a,rules:l(d,"")};return this.instanceRules.set(a,p),p}rebuildGroup(a){const i=this.componentId;a.clearRules(i);for(const s of this.instanceRules.values())a.insertRules(i,s.name,s.rules)}}function _S(e,...a){const i=qe(e,...a),s=`sc-global-${Wu(JSON.stringify(i))}`,l=new kS(i,s),d=m=>{const v=Hg(),y=tn.useContext(qu);let x;{const b=tn.useRef(null);b.current===null&&(b.current=v.styleSheet.allocateGSInstance(s)),x=b.current}v.styleSheet.server&&p(x,m,v.styleSheet,y,v.stylis);{const b=l.isStatic?[x,v.styleSheet,l]:[x,m,v.styleSheet,y,v.stylis,l],k=tn.useRef(l);tn.useLayoutEffect(()=>{v.styleSheet.server||(k.current!==l&&(v.styleSheet.clearRules(s),k.current=l),p(x,m,v.styleSheet,y,v.stylis))},b),tn.useLayoutEffect(()=>()=>{v.styleSheet.server||l.removeStyles(x,v.styleSheet)},[x,v.styleSheet,l])}return v.styleSheet.server&&l.instanceRules.delete(x),null};function p(m,v,y,x,b){if(l.isStatic)l.renderStyles(m,Pj,y,b);else{const k=Object.assign(Object.assign({},v),{theme:Mg(v,x,d.defaultProps)});l.renderStyles(m,k,y,b)}}return tn.memo(d)}var qg;class CS{constructor(a,i){this[qg]=!0,this.inject=(s,l=iu)=>{const d=this.getName(l);if(!s.hasNameForId(this.id,d)){const p=l(this.rules,d,"@keyframes");s.insertRules(this.id,d,p)}},this.name=a,this.id=Ng+a,this.rules=i,ni(this.id),Uu(this,()=>{throw yi(12,String(this.name))})}getName(a=iu){return a.hash?this.name+Bu(+a.hash>>>0):this.name}}function Se(e,...a){const i=rl(qe(e,...a)),s=Wu(i);return new CS(s,i)}qg=Pg;const Vg=[{workforce_type:"Healthcare / Clinical Staffing",company:{name:"Favorite Healthcare Staffing",founded:1981,parent:"Acacium Group",market_position:"Top-10 US healthcare staffing firm",footprint:"US, Europe, Australia"},worker_types:["Per diem","Travel","Contract / temp-to-perm","Permanent / direct hire"],talent_categories:["Nursing (RN/LPN/CNA)","Allied Health","Non-Clinical","Advanced Practice","Emergency Response"],client_types:["Hospitals","Acute care systems","Surgery centers","Senior living / long-term care","School-based settings"],service_models:["MSP","VMS","Float pool management","Human Capital Management"],tech_footprint:["Worker ATS","Client portal (FMS)","Affiliate vendor portal","Worker mobile app (time/pay)"],access_model:["Workers","Clients","Affiliate vendors"],compliance:["Joint Commission","Credentialing","Immunization tracking","OSHA","Facility-specific training"],narrative:[{label:"Your business",body:"Healthcare staffing with per diem, travel, contract, and permanent placements — plus MSP and vendor management programs. I've set up scheduling and pay structures for each, with room for client facilities and affiliate vendors, not just workers.",tags:["Per diem","Travel","Contract","Permanent","MSP / VMS"]},{label:"Your workforce",body:"RNs, CNAs, LPNs, allied health, advanced practice, and non-clinical roles — nationwide, 24/7, and mobile-first. Shifts, timecards, and urgent fills all work from a phone.",tags:["RN / LPN / CNA","Allied health","Advanced practice","Non-clinical"]},{label:"Your compliance",body:"Credentialing is core to how you operate. I'm tracking licenses across states, compact nursing licenses included, with expirations covered.",tags:["Credentialing","Compact licenses","Immunizations","Joint Commission"]}]},{workforce_type:"Skilled Trades / Construction Labor",company:{name:"BuildForce Trades Group",founded:1998,parent:null,market_position:"Regional trades staffing leader (Mountain West)",footprint:"US Southwest & Mountain West"},worker_types:["Day labor","Project contract","Union dispatch","Direct hire"],talent_categories:["Electricians","Welders / pipefitters","Carpenters","HVAC techs","Heavy equipment operators","General laborers"],client_types:["General contractors","Industrial plants","Commercial developers","Utilities","Municipal / public works"],service_models:["Project-based staffing","Payroll / W-2 hosting","Union hall dispatch coordination","Safety compliance management"],tech_footprint:["Dispatch board","Client project portal","Field clock-in mobile app","Certification tracker"],access_model:["Tradesworkers","Contractors / site supers","Union reps"],compliance:["OSHA 10/30","Trade licensing","Drug screening","Right-to-work / E-Verify","Site safety orientation"],narrative:[{label:"Your business",body:"Skilled trades staffing across the Mountain West — day labor, project contracts, union dispatch, and direct hire. I've set up project-based scheduling with payroll hosting and union dispatch coordination built in, since a two-day pour and a six-month build don't run the same way.",tags:["Day labor","Project contract","Union dispatch","Direct hire"]},{label:"Your workforce",body:"Electricians, welders, carpenters, HVAC techs, and heavy equipment operators working job sites, not desks. Dispatch, field clock-ins, and timecards all work from a phone.",tags:["Electricians","Welders","Carpenters","HVAC","Equipment operators"]},{label:"Your compliance",body:"Nobody steps on a site without the right cards. I'm tracking OSHA 10/30, trade licenses, and drug screens with expirations covered, and E-Verify is built into onboarding.",tags:["OSHA 10/30","Trade licenses","Drug screening","E-Verify"]}]},{workforce_type:"Warehouse / Logistics & Light Industrial",company:{name:"PalletPoint Workforce",founded:2011,parent:"Everline Labor Holdings",market_position:"High-volume light industrial staffing",footprint:"US national, distribution-corridor focused"},worker_types:["Temp (shift)","Temp-to-hire","Seasonal surge","Direct placement"],talent_categories:["Pickers / packers","Forklift operators","Machine operators","Sortation associates","Inventory / cycle count","Shift leads"],client_types:["3PL warehouses","E-commerce fulfillment","Manufacturers","Cold storage","Distribution centers"],service_models:["On-site managed staffing","Volume ramp / peak season","Vendor-on-premise (VOP)","Payroll processing"],tech_footprint:["Shift scheduling app","Client headcount dashboard","Kiosk / badge clock-in","Attendance & reliability scoring"],access_model:["Associates","Warehouse managers","On-site coordinators"],compliance:["Forklift certification (PIT)","I-9 / E-Verify","Safety training","Background check","Workers' comp classification"],narrative:[{label:"Your business",body:"High-volume light industrial staffing — shift temps, temp-to-hire, and seasonal surge across 3PLs, fulfillment centers, and cold storage. I've set up shift-based scheduling that ramps headcount for peak season without breaking your regular fills.",tags:["Shift temps","Temp-to-hire","Seasonal surge","On-site managed"]},{label:"Your workforce",body:"Pickers, packers, forklift operators, and sortation associates running around the clock. Badge and kiosk clock-ins feed attendance and reliability scoring, so no-shows surface before a client feels them.",tags:["Pickers / packers","Forklift operators","Sortation","Shift leads"]},{label:"Your operations",body:"Your clients buy filled shifts, so I'm tracking fill rates and check-ins per site and keeping billing tied to verified hours. Forklift certifications and I-9s are tracked with expirations covered.",tags:["Fill rates","Site check-ins","Forklift certs","I-9 / E-Verify"]}]},{workforce_type:"Security / Guarding Services",company:{name:"Sentinel Guard Solutions",founded:1996,parent:null,market_position:"Contract security & manned guarding provider",footprint:"US national, metro & industrial sites"},worker_types:["Post assignment (regular)","Flex / relief pool","Event / short-term detail","Direct hire"],talent_categories:["Unarmed guards","Armed guards","Mobile patrol officers","Console / CCTV operators","Event security","Site supervisors"],client_types:["Commercial real estate","Industrial / manufacturing sites","Retail / malls","Healthcare campuses","Residential communities","Special events"],service_models:["Managed guarding contract","Post scheduling & coverage","Mobile patrol routes","Payroll & billing reconciliation","Post-order management"],tech_footprint:["Guard scheduling / post board","Client incident portal","GPS tour / checkpoint app","Incident reporting system"],access_model:["Guards / officers","Client site contacts","Field supervisors / dispatch"],compliance:["State guard license / registration","Armed permit & firearms qualification","Background check & fingerprinting","Drug screening","Post-specific training / SOPs"],narrative:[{label:"Your business",body:"Contract security and manned guarding — regular posts, flex relief, mobile patrol routes, and event details. I've set up post-based scheduling alongside patrol routes, since a fixed post and a rolling route don't run the same way.",tags:["Fixed posts","Flex relief","Mobile patrol","Event details"]},{label:"Your workforce",body:"Armed and unarmed guards, patrol officers, console operators, and site supervisors across metro and industrial sites. Armed and unarmed posts carry different pay rates, so I've structured pay by post type.",tags:["Armed guard","Unarmed guard","Console / CCTV","Site supervisors"]},{label:"Your operations",body:"Your reputation runs on every post being covered and no ghost billing — so I'm tracking check-ins against scheduled posts, verifying who's actually on-site, and keeping billing tied to verified hours. Guard licenses and firearms qualifications are tracked with expirations covered.",tags:["Post check-ins","Verified hours","Guard licenses","Firearms quals"]}]},{workforce_type:"Home Care / In-Home Support",company:{name:"Hearthside Home Care",founded:2009,parent:null,market_position:"Non-medical & skilled in-home care agency",footprint:"US regional, franchise-based"},worker_types:["Per visit / hourly","Live-in","On-call pool","Direct hire"],talent_categories:["Home health aides (HHA)","Certified nursing assistants (CNA)","Personal care aides (PCA)","Companions / homemakers","Skilled nurses (RN/LPN)","Care coordinators"],client_types:["Private-pay families","Medicaid / waiver programs","Managed care / insurers","Hospice partners","Assisted living referrals"],service_models:["Managed care scheduling","EVV-compliant visit management","Care plan administration","Payroll & claims billing","Family communication portal"],tech_footprint:["Caregiver visit / EVV mobile app","Family / client portal","Scheduling & matching system","Care plan & notes dashboard"],access_model:["Caregivers","Clients / family members","Care coordinators / case managers"],compliance:["State caregiver certification (HHA/CNA)","EVV (Electronic Visit Verification)","Background check & abuse registry","TB test / health screening","HIPAA & care plan compliance"],narrative:[{label:"Your business",body:"In-home care spanning private-pay families, Medicaid waiver programs, and hospice partners. I've set up visit-based scheduling with care plans attached, since a live-in placement and an hourly visit don't run the same way.",tags:["Private pay","Medicaid / waiver","Hospice partners","Live-in"]},{label:"Your workforce",body:"HHAs, CNAs, PCAs, companions, and skilled nurses working in clients' homes, matched to care plans. Visits, notes, and clock-ins all work from a phone.",tags:["HHA","CNA","PCA","Skilled nurses"]},{label:"Your compliance",body:"EVV isn't optional in your world, so every clock-in doubles as visit verification and your Medicaid billing holds up. Caregiver certifications, TB screenings, and background checks are tracked with expirations covered.",tags:["EVV","Certifications","TB screening","Abuse registry"]}]},{workforce_type:"Agriculture / Seasonal Labor",company:{name:"Harvest Field Labor Co.",founded:2e3,parent:null,market_position:"Seasonal agricultural & H-2A labor provider",footprint:"US agricultural regions (CA, PNW, Southeast)"},worker_types:["Seasonal / harvest crew","H-2A guest worker","Day labor","Crew lead / foreman"],talent_categories:["Field harvesters / pickers","Packing house workers","Irrigation / field techs","Equipment operators","Crew leaders","Grading / sorting staff"],client_types:["Farms & orchards","Packing / processing facilities","Vineyards","Nurseries / greenhouses","Agricultural co-ops"],service_models:["Seasonal crew staffing","H-2A program administration","Transportation & housing coordination","Piece-rate & payroll processing","Farm labor contractor (FLC) services"],tech_footprint:["Crew / field dispatch app","Grower headcount portal","Piece-rate / harvest tracking","Compliance document tracker"],access_model:["Field workers","Growers / farm managers","Crew leaders / foremen"],compliance:["H-2A / visa documentation","I-9 / work authorization","Farm Labor Contractor (FLC) license","Field sanitation & heat illness (OSHA/Cal-OSHA)","Piece-rate & minimum wage compliance"],narrative:[{label:"Your business",body:"Seasonal agricultural labor with H-2A program administration — harvest crews, packing houses, and everything the season demands. I've set up crew-based scheduling with piece-rate pay built in, since a harvest crew and an hourly packing shift don't pay the same way.",tags:["Harvest crews","H-2A program","Packing houses","Piece-rate"]},{label:"Your workforce",body:"Field harvesters, packing workers, equipment operators, and crew leaders who move with the season. Crews dispatch by field and report through their crew leader, all from a phone.",tags:["Harvesters","Packing workers","Equipment operators","Crew leaders"]},{label:"Your compliance",body:"H-2A paperwork can sink a season, so I'm tracking visa documentation, work authorizations, and your FLC license with expirations covered. Piece-rate records stay reconciled against minimum wage automatically.",tags:["Visa docs","FLC license","Heat illness / OSHA","Wage compliance"]}]},{workforce_type:"Hospitality / Events Staffing",company:{name:"Grand Table Hospitality Staff",founded:2003,parent:null,market_position:"Premium events & F&B staffing",footprint:"Major US metro markets"},worker_types:["Per event / gig","On-call pool","Seasonal","Direct hire"],talent_categories:["Servers / banquet staff","Bartenders","Line / prep cooks","Housekeeping","Front desk / concierge","Event captains"],client_types:["Hotels & resorts","Catering companies","Convention centers","Restaurants","Private / corporate events"],service_models:["Event-based staffing","On-call pool management","Managed F&B labor","Payroll & tip reconciliation"],tech_footprint:["Gig scheduling app","Client event booking portal","Geo clock-in / out","Rating & rebooking system"],access_model:["Staff / gig workers","Event planners / venue managers","Agency dispatchers"],compliance:["Food handler / alcohol service permits","I-9 / work authorization","Uniform & appearance standards","Minor labor law (if applicable)","Tip credit / wage compliance"],narrative:[{label:"Your business",body:"Premium events and F&B staffing — per-event gigs, on-call pools, and seasonal placements across hotels, caterers, and venues. I've set up event-based scheduling with tip reconciliation built into pay, since a gala and a hotel shift don't settle the same way.",tags:["Per-event gigs","On-call pool","Seasonal","Tip reconciliation"]},{label:"Your workforce",body:"Servers, bartenders, cooks, housekeepers, and event captains working a different venue every week. Geo clock-ins confirm who is actually on-site, and your top-rated staff surface first for rebooking.",tags:["Servers","Bartenders","Cooks","Event captains"]},{label:"Your operations",body:"Your clients remember who showed up polished and on time — so I'm tracking check-ins per event and keeping billing tied to verified hours. Food handler and alcohol service permits are tracked with expirations covered.",tags:["Geo clock-ins","Event check-ins","Food handler","Alcohol permits"]}]},{workforce_type:"Call Center / BPO Staffing",company:{name:"Vantage Contact Solutions",founded:2012,parent:null,market_position:"Contact center & back-office BPO staffing",footprint:"US + offshore (Philippines, LatAm), remote & site-based"},worker_types:["Temp (campaign)","Temp-to-hire","Seasonal surge","Direct hire","Remote / WFH agent"],talent_categories:["Inbound agents","Outbound / sales agents","Customer support reps","Technical support","Back-office / data entry","Team leads / QA"],client_types:["Telecom / utilities","Retail / e-commerce","Financial services","Healthcare payers","SaaS / tech support","Government programs"],service_models:["Campaign-based staffing","Managed contact center program","Ramp / seasonal surge","WFM (workforce management) support","Payroll & performance reporting"],tech_footprint:["Agent scheduling / WFM tool","Client program dashboard","Remote clock-in & activity monitor","QA / performance scorecards"],access_model:["Agents","Client program managers","Team leads / site supervisors"],compliance:["Background check","I-9 / work authorization","PCI-DSS (payment handling)","HIPAA (healthcare campaigns)","Data security & remote-work policy"],narrative:[{label:"Your business",body:"Contact center and back-office BPO staffing, campaign by campaign — inbound, outbound, and data entry, on-site and offshore. I've set up campaign-based scheduling that handles surge ramps and time zones from the Philippines to LatAm.",tags:["Campaign staffing","Surge ramps","On-site + remote","Offshore"]},{label:"Your workforce",body:"Agents, technical support reps, and team leads split between sites and work-from-home. Remote clock-ins and activity tracking keep a distributed floor visible without hovering.",tags:["Inbound agents","Outbound / sales","Tech support","Team leads / QA"]},{label:"Your compliance",body:"Your campaigns touch payments and health data, so I'm tracking PCI and HIPAA requirements per campaign, not just per worker. Background checks and I-9s are covered, with expirations tracked.",tags:["PCI-DSS","HIPAA","Background checks","I-9"]}]}],jS=[["favorite","health","care","clinic","nurse","nursing","medical","med","rn","lpn","cna","hospital","hospice","allied","acacium","patient"],["build","trade","construct","electric","weld","pipefit","carpenter","hvac","contractor","mason","plumb","union","skilled","labor"],["warehouse","logistic","pallet","fulfillment","distribution","forklift","3pl","industrial","sortation","freight","supply"],["security","guard","sentinel","patrol","protect","protection","surveillance","cctv","safe"],["home","hearth","inhome","homecare","caregiver","companion","pca","hha","senior","elder"],["harvest","farm","field","agri","agriculture","orchard","crop","grower","vineyard","seasonal","h2a","produce"],["hospitality","event","grand","table","catering","banquet","hotel","resort","restaurant","server","bartender","concierge","venue"],["call","contact","bpo","vantage","center","telecom","agent","callcenter","support","outsource"]];function SS(e){const a=e.trim().toLowerCase().replace(/\s+/g,""),i=/^https?:\/\//.test(a)?a:`https://${a}`;try{return new URL(i).hostname.replace(/^www\./,"")}catch{return a}}function NS(e){let a=0;for(let i=0;i<e.length;i+=1)a=a*31+e.charCodeAt(i)>>>0;return a%Vg.length}function MS(e){const a=SS(e);let i=-1,s=0;return jS.forEach((l,d)=>{const p=l.reduce((m,v)=>a.includes(v)?m+1:m,0);p>s&&(s=p,i=d)}),Vg[i>=0?i:NS(a)]}const Lt=(e,a,i)=>Math.max(a,Math.min(i,e)),ur=e=>(e=Lt(e,0,1),e*e*(3-2*e)),Br=e=>e>=48?1:e>=32?1.2:e>=24?1.5:e>=20?1.85:2.3;function Xt(e){const a=Math.sin(e*127.1+311.7)*43758.5453;return a-Math.floor(a)}function lu(e){const a=(e||"#96B9FF").replace("#",""),i=parseInt(a.length===3?a.split("").map(s=>s+s).join(""):a,16);return(i>>16&255)+","+(i>>8&255)+","+(i&255)}function Lf(e,a,i){let s=i.trim();const l=s.match(/var\(\s*(--[^,)]+)/);if(l&&(s=getComputedStyle(a).getPropertyValue(l[1]).trim()||s),s.startsWith("#"))return lu(s);e.fillStyle="#000",e.fillStyle=s;const d=e.fillStyle;if(d.startsWith("#"))return lu(d);const p=d.match(/[\d.]+/g);return p&&p.length>=3?`${+p[0]},${+p[1]},${+p[2]}`:"26,30,38"}function RS(){const[e,a]=g.useState(()=>{try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}});return g.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-color-scheme: dark)")}catch{return}const s=d=>a(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}function LS(e){const[a,i,s]=e.split(",").map(Number);return(.299*a+.587*i+.114*s)/255}function AS(e,a){return e==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:e==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:a,glow:!0}:e==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:a,glow:!0}}const ao=["234,54,38","246,112,44","252,172,54","255,212,76"],$S="176,58,32",TS="198,158,52";function dr(e,a,i){const s=e.split(",").map(Number),l=a.split(",").map(Number);return s.map((d,p)=>Math.round(d+(l[p]-d)*i)).join(",")}function Wr(e,a,i){const{ctx:s,w:l,h:d}=e,p=l/2,m=d/2,y=Math.min(l,d)*.39*.2*(.9+.14*Math.sin(a*1.5)),x=e.size<24,b=Lt(e.alert??0,0,1),k=(M,j)=>M+(j-M)*b,S=.85+.15*Math.sin(a*2.2);if(!x&&e.coreHalo){if(s.save(),i.glow&&b<1){s.globalAlpha=1-b;const M=s.createRadialGradient(p,m,0,p,m,y*3);M.addColorStop(0,"rgba("+i.core+",0.55)"),M.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=M,s.beginPath(),s.arc(p,m,y*3,0,6.2832),s.fill()}else if(!i.glow){const M=y*k(3.2,3),j=s.createRadialGradient(p,m,0,p,m,M);j.addColorStop(0,"rgba("+dr(i.core,ao[1],b)+","+k(.34,.85*S)+")"),j.addColorStop(.5,"rgba("+dr(i.core,ao[2],b)+","+k(.13,.42*S)+")"),j.addColorStop(1,"rgba("+dr(i.core,ao[3],b)+",0)"),s.fillStyle=j,s.beginPath(),s.arc(p,m,M,0,6.2832),s.fill()}s.restore()}const _=i.glow?1:.95,C=Math.max(.8,y*k(1,1.5)),N=y*.1*b;s.save(),s.filter="blur("+Math.max(.4,y*k(.22,.3)).toFixed(2)+"px)";const $=s.createRadialGradient(p-N,m-N,0,p,m,C);$.addColorStop(0,"rgba("+dr(i.core,ao[0],b)+","+k(_,1)+")"),$.addColorStop(.5,"rgba("+dr(i.core,ao[1],b)+","+k(_,1)+")"),$.addColorStop(.82,"rgba("+dr(i.core,ao[2],b)+","+k(_,.97)+")"),$.addColorStop(1,"rgba("+dr(i.core,ao[3],b)+","+k(_,.72)+")"),s.fillStyle=$,s.beginPath(),s.arc(p,m,C,0,6.2832),s.fill(),s.restore()}function Gg(e,a,i){const{ctx:s,w:l,h:d}=e,p=l/2,m=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=[[1.35,.3],[1.05,2.4]],b=a*(y?.5:.16),k=.42,S=Math.cos(k),_=Math.sin(k),C=Math.cos(b),N=Math.sin(b),$=v*.96,M=(W,G,Q)=>{const B=W*C+Q*N,Y=-W*N+Q*C,ee=G,oe=ee*S-Y*_,re=(ee*_+Y*S+1)/2,X=.82+.18*re;return{x:p+B*$*X,y:m+oe*$*X,d:re}},j=(W,G,Q)=>{const B=Math.cos(W),Y=Math.sin(W)*Math.cos(G),ee=Math.sin(W)*Math.sin(G);return[B*Math.cos(Q)+ee*Math.sin(Q),Y,-B*Math.sin(Q)+ee*Math.cos(Q)]};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round",s.lineJoin="round";const O=e.size>=24?64:40,L=y?.9:.3,R=O,I=5.6,z=[];for(let W=0;W<x.length;W++){const G=x[W][0],Q=x[W][1],B=oe=>{const le=j(oe,G,Q);return M(le[0],le[1],le[2])},Y=W%2?1:-1,ee=W*2+Y*a*L;z.push({ptOf:B,head:ee,dir:Y,hp:B(ee)})}z.sort((W,G)=>W.hp.d-G.hp.d);for(const W of z){const G=Math.max(1.2,v*.05)*(.75+.35*W.hp.d),Q=.66*(.45+.55*W.hp.d);s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=G;let B=W.ptOf(W.head);for(let oe=1;oe<=R;oe++){const le=oe/R,re=1-le,X=Q*re*re,D=W.ptOf(W.head-W.dir*le*I);X>.004&&(s.strokeStyle="rgba("+i.dot+","+X+")",s.beginPath(),s.moveTo(B.x,B.y),s.lineTo(D.x,D.y),s.stroke()),B=D}s.restore();const Y=Math.max(.9,v*.062*Br(e.size)*(.65+.5*W.hp.d)),ee=.45+.55*W.hp.d;if(i.glow){const oe=s.createRadialGradient(W.hp.x,W.hp.y,0,W.hp.x,W.hp.y,Y*4.5);oe.addColorStop(0,"rgba("+i.accent+","+.3*ee+")"),oe.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=oe,s.beginPath(),s.arc(W.hp.x,W.hp.y,Y*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,ee+.1)+")",s.beginPath(),s.arc(W.hp.x,W.hp.y,Y,0,6.2832),s.fill()}Wr(e,a,i),s.restore()}function IS(e,a,i){const{ctx:s,w:l,h:d}=e,p=l/2,m=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=[v*.92],b=x.length,k=1,S=y?.9:.3,_=e.size>=24?56:36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let C=0;C<b;C++){const N=x[C],$=C%2?1:-1,M=6.2832/k,j=Math.min(5.6,M*.92);for(let O=0;O<k;O++){const L=C*2+$*a*S+O*M,R=p+Math.cos(L)*N,I=m+Math.sin(L)*N;s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=Math.max(1.2,v*.05);let z=R,W=I;for(let Q=1;Q<=_;Q++){const B=Q/_,Y=.62*(1-B)*(1-B),ee=L-$*B*j,oe=p+Math.cos(ee)*N,le=m+Math.sin(ee)*N;Y>.004&&(s.strokeStyle="rgba("+i.dot+","+Y+")",s.beginPath(),s.moveTo(z,W),s.lineTo(oe,le),s.stroke()),z=oe,W=le}s.restore();const G=Math.max(.9,v*.062*Br(e.size));if(i.glow){const Q=s.createRadialGradient(R,I,0,R,I,G*4.5);Q.addColorStop(0,"rgba("+i.accent+",0.3)"),Q.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=Q,s.beginPath(),s.arc(R,I,G*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+",1)",s.beginPath(),s.arc(R,I,G,0,6.2832),s.fill()}}Wr(e,a,i),s.restore()}function Af(e,a,i){const{ctx:s,w:l,h:d,dpr:p}=e,m=l/2,v=d/2,y=Math.min(l,d)*.39,x=e.state!=="idle",b=Lt(e.alert??0,0,1),k=y*.82,S=(D,V)=>dr(i.dot,dr($S,TS,Lt(Math.hypot(D-m,V-v)/k,0,1)),b),_=e.size>=120,C=_?22:e.size>=32?10:e.size>=20?7:5,N=x?a*.55:a*.22,$=Math.cos(N),M=Math.sin(N),j=.42,O=Math.cos(j),L=Math.sin(j);if(s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",_&&i.glow){const D=s.createRadialGradient(m,v,0,m,v,y*1.02);D.addColorStop(0,"rgba("+i.accent+",0.10)"),D.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=D,s.beginPath(),s.arc(m,v,y*1.02,0,6.2832),s.fill()}const R=[];for(let D=0;D<C;D++){const V=1-(D+.5)/C*2,E=Math.sqrt(Math.max(0,1-V*V)),A=D*2.39996,q=Math.cos(A)*E,Z=V,ie=Math.sin(A)*E,ue=q*$+ie*M,H=-q*M+ie*$,T=Z*O-H*L,ne=Z*L+H*O,fe=(ne+1)/2,ce=.82+.18*fe;R.push({x:m+ue*k*ce,y:v+T*k*ce,d:fe,k:D,vec:[ue,T,ne]})}R.sort((D,V)=>D.d-V.d);const I=D=>{const V=(D[2]+1)/2,E=.82+.18*V;return{x:m+D[0]*k*E,y:v+D[1]*k*E,d:V}},z=(D,V,E)=>{let A=D[0]*V[0]+D[1]*V[1]+D[2]*V[2];A=Lt(A,-1,1);const q=Math.acos(A);if(q<.001)return[D[0],D[1],D[2]];const Z=Math.sin(q),ie=Math.sin((1-E)*q)/Z,ue=Math.sin(E*q)/Z;return[D[0]*ie+V[0]*ue,D[1]*ie+V[1]*ue,D[2]*ie+V[2]*ue]},W={};for(const D of R)W[D.k]=D;const Q=a*(x?1.4:.5),B=Math.floor(Q),Y=Q-B,ee=5,oe=12;s.lineCap="round",s.lineJoin="round";const le=[1.7,9.3,21.5,34.8,48.2],re=Lt(Math.round(e.streamCount??(_?5:4)),0,le.length),X=le.slice(0,re).map(D=>({seed:D}));for(const D of X){const V=A=>{const q=Math.sin(A*12.9898+D.seed)*43758.5453;return Math.floor((q-Math.floor(q))*C)},E=A=>{let q=V(A);return q===V(A-1)&&(q=(q+1)%C),W[q]};for(let A=ee-1;A>=0;A--){const q=B-A;if(q<0)continue;const Z=E(q),ie=E(q+1);if(!Z||!ie||Z===ie)continue;const ue=A===0?Y:1,H=I(z(Z.vec,ie.vec,ue)),T=(Z.d+H.d)/2,ne=A===0?1:Lt(1-(A-1+Y)/(ee-1),0,1),fe=(i.glow?.6:.72)*ne*(.4+.6*T);if(fe<.02)continue;const ce=s.createLinearGradient(Z.x,Z.y,H.x,H.y);ce.addColorStop(0,"rgba("+S(Z.x,Z.y)+",0)"),ce.addColorStop(1,"rgba("+S(H.x,H.y)+","+fe+")"),s.strokeStyle=ce,s.lineWidth=(_?Math.max(1.1*p,y*.018):Math.max(1.2,y*.045))*(.7+.4*T),s.beginPath();for(let me=0;me<=oe;me++){const we=I(z(Z.vec,ie.vec,ue*(me/oe)));me===0?s.moveTo(we.x,we.y):s.lineTo(we.x,we.y)}s.stroke()}}for(const D of R){const V=.5+.5*Math.sin(a*2-D.k*.9),E=(.18+.82*D.d)*(.62+.38*V),A=_?Math.max(.5,(.9+.9*D.d)*p*(.85+.15*V)):y*.058*Br(e.size)*(.6+.5*D.d);if(i.glow){const q=A*4,Z=s.createRadialGradient(D.x,D.y,0,D.x,D.y,q);Z.addColorStop(0,"rgba("+i.accent+","+.24*E+")"),Z.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=Z,s.beginPath(),s.arc(D.x,D.y,q,0,6.2832),s.fill()}s.fillStyle="rgba("+S(D.x,D.y)+","+(.32+.68*E)+")",s.beginPath(),s.arc(D.x,D.y,Math.max(.9,A),0,6.2832),s.fill()}_&&Vu(e,a,i,S),Wr(e,a,i),s.restore()}function Vu(e,a,i,s){const{ctx:l,w:d,h:p,dpr:m}=e,v=d/2,y=p/2,x=Math.min(d,p)*.39,k=e.state!=="idle"?1:.4;for(let S=0;S<46;S++){const _=Xt(S*5.1)<.5?-1:1,C=Xt(S*1.7)*6.2832+a*(.3+Xt(S*3.1)*.6)*_*k,N=x*(.04+.05*Xt(S*4.7))*Math.sin(a*(.8+Xt(S*6)*1)+Xt(S*7)*6.28),$=x*(.5+Xt(S*2.3)*.5)+N,M=v+Math.cos(C)*$,j=y+Math.sin(C)*$,O=.3+.7*(.5+.5*Math.sin(a*(1.4+Xt(S)*2)+Xt(S*2)*6.28)),L=Math.max(.5,(.4+Xt(S*8)*1)*m*(.55+.6*O));if(i.glow){const R=L*6,I=l.createRadialGradient(M,j,0,M,j,R);I.addColorStop(0,"rgba("+i.accent+","+O*.18+")"),I.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=I,l.beginPath(),l.arc(M,j,R,0,6.2832),l.fill()}l.fillStyle="rgba("+s(M,j)+","+O*(i.glow?.8:.42)+")",l.beginPath(),l.arc(M,j,L,0,6.2832),l.fill()}}function ES(e,a,i){const{ctx:s,w:l,h:d,dpr:p}=e,m=l/2,v=d/2,y=Math.min(l,d)*.39,x=e.state!=="idle",b=e.size>=32?11:7,k=y*.12,S=y*.12,_=ur(.5+.5*Math.sin(a*(x?1:.55))),C=x?.34+.66*_:.5+.12*_,N=Math.max(1*p,y*.052),$=-a*(x?.5:.16),M=Math.cos($),j=Math.sin($),O=.42,L=Math.cos(O),R=Math.sin(O);s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round";const I=y*(.52+.44*C),z=Math.max(k+N,I-S),W=[];for(let G=0;G<b;G++){const Q=1-(G+.5)/b*2,B=Math.sqrt(Math.max(0,1-Q*Q)),Y=G*2.39996,ee=Math.cos(Y)*B,oe=Q,le=Math.sin(Y)*B,re=ee*M+le*j,X=-ee*j+le*M,D=oe*L-X*R,E=(oe*R+X*L+1)/2,A=.82+.18*E,q=.5+.5*Math.sin(a*1.6+G*1.3);W.push({x0:m+re*k*A,y0:v+D*k*A,x1:m+re*z*A,y1:v+D*z*A,cx2:m+re*I*A,cy2:v+D*I*A,d:E,shim:q})}W.sort((G,Q)=>G.d-Q.d);for(const G of W){const Q=(x?.4+.45*C:.6)*(.4+.6*G.d)*(.78+.22*G.shim),B=s.createLinearGradient(G.x0,G.y0,G.x1,G.y1);B.addColorStop(0,"rgba("+i.dot+","+Q+")"),B.addColorStop(1,"rgba("+i.accent+",0)"),s.strokeStyle=B,s.lineWidth=N*(.7+.5*G.d),s.beginPath(),s.moveTo(G.x0,G.y0),s.lineTo(G.x1,G.y1),s.stroke();const Y=Math.max(.9,y*.058*Br(e.size)*(.85+.3*C)*(.6+.5*G.d));if(i.glow){const ee=s.createRadialGradient(G.cx2,G.cy2,0,G.cx2,G.cy2,Y*5);ee.addColorStop(0,"rgba("+i.accent+","+.26*Q+")"),ee.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ee,s.beginPath(),s.arc(G.cx2,G.cy2,Y*5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,Q+.1)+")",s.beginPath(),s.arc(G.cx2,G.cy2,Y,0,6.2832),s.fill()}e.size>=120&&Vu(e,a,i,()=>i.dot),Wr(e,a,i),s.restore()}function PS(e,a,i){const{ctx:s,w:l,h:d}=e,p=l/2,m=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=e.size>=32?58:e.size>=20?32:18,b=v*.78,k=y?a*.5:a*.2,S=Math.cos(k),_=Math.sin(k),C=.42,N=Math.cos(C),$=Math.sin(C),M=y?1:.4,j=(B,Y)=>[Math.sin(B)*Math.cos(Y),Math.cos(B),Math.sin(B)*Math.sin(Y)],O=[j(1.4+.5*Math.sin(a*.5*M),a*.6*M),j(1.9+.4*Math.cos(a*.4*M),-a*.5*M+2)],L=.36,R=e.cellCount==null?x:Lt(Math.round(e.cellCount),0,x);let I=null,z=null;(R<x||e.cellBirths)&&(z=Array.from({length:x},(B,Y)=>Y).sort((B,Y)=>Xt(B)-Xt(Y)),I=new Array(x),z.forEach((B,Y)=>{I[B]=Y}));const W=.7,G=.16;if(z&&e.cellBirths&&e.emergeNow!=null){let B=0;for(let Y=0;Y<R;Y++){const ee=z[Y];e.cellBirths.has(ee)||e.cellBirths.set(ee,e.emergeNow+B++*G)}}s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";const Q=[];for(let B=0;B<x;B++){let Y=1;if(I){if(I[B]>=R)continue;if(e.cellBirths){const H=e.cellBirths.get(B);if(H==null||(Y=ur(((e.emergeNow??H+W)-H)/W),Y<=.001))continue}}const ee=1-(B+.5)/x*2,oe=Math.sqrt(Math.max(0,1-ee*ee)),le=B*2.39996,re=Math.cos(le)*oe*Y,X=ee*Y,D=Math.sin(le)*oe*Y;let V=0;for(const H of O){const T=re-H[0],ne=X-H[1],fe=D-H[2];V+=Math.exp(-(T*T+ne*ne+fe*fe)/(2*L*L))}V=Lt(V,0,1);const E=re*S+D*_,A=-re*_+D*S,q=X*N-A*$,ie=(X*$+A*N+1)/2,ue=.82+.18*ie;Q.push({x:p+E*b*ue,y:m+q*b*ue,d:ie,inf:V,g:Y})}Q.sort((B,Y)=>B.d-Y.d);for(const B of Q){const Y=ur(B.inf),ee=Math.max(.6,v*(.05+.06*Y)*Br(e.size)*(.55+.5*B.d))*(.35+.65*B.g),oe=(.16+.84*B.d)*(.45+.55*Y)*B.g,le=1-(1-Math.abs(2*B.d-1))*B.g,re=Math.atan2(B.y-m,B.x-p);s.fillStyle="rgba("+i.dot+","+oe+")",s.beginPath(),s.ellipse(B.x,B.y,Math.max(.35,ee*le),ee,re,0,6.2832),s.fill()}Wr(e,a,i),s.restore()}function zS(e,a,i,s){const{ctx:l,w:d,h:p,dpr:m}=e,v=d/2,y=p/2,x=Math.min(d,p)*.39,b=e.state!=="idle",k=ur(Lt(s/.55,0,1)),S=ur(Lt((s-.3)/.4,0,1)),_=ur(Lt((s-.5)/.5,0,1)),C=e.size>=32?11:7,N=x*.12,$=x*.12,M=ur(.5+.5*Math.sin(a*(b?1:.55))),j=b?.34+.66*M:.5+.12*M,O=Math.max(1*m,x*.052),L=-a*(b?.5:.16),R=Math.cos(L),I=Math.sin(L),z=.42,W=Math.cos(z),G=Math.sin(z),Q=x*(.52+.44*j),B=Math.max(N+O,Q-$),Y=[];for(let H=0;H<C;H++){const T=1-(H+.5)/C*2,ne=Math.sqrt(Math.max(0,1-T*T)),fe=H*2.39996,ce=Math.cos(fe)*ne,me=T,we=Math.sin(fe)*ne,xe=ce*R+we*I,Re=-ce*I+we*R,ze=me*W-Re*G,Oe=(me*G+Re*W+1)/2,$e=.82+.18*Oe,We=.5+.5*Math.sin(a*1.6+H*1.3);Y.push({x0:v+xe*N*$e,y0:y+ze*N*$e,x1:v+xe*B*$e,y1:y+ze*B*$e,cx2:v+xe*Q*$e,cy2:y+ze*Q*$e,d:Oe,shim:We,ux:ce,uy:me,uz:we})}l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",l.lineCap="round";const ee=[...Y].sort((H,T)=>H.d-T.d);for(const H of ee){const T=(b?.4+.45*j:.6)*(.4+.6*H.d)*(.78+.22*H.shim);if(_>.001){const ne=H.x0+(H.x1-H.x0)*_,fe=H.y0+(H.y1-H.y0)*_,ce=l.createLinearGradient(H.x0,H.y0,H.x1,H.y1);ce.addColorStop(0,"rgba("+i.dot+","+T*_+")"),ce.addColorStop(1,"rgba("+i.accent+",0)"),l.strokeStyle=ce,l.lineWidth=O*(.7+.5*H.d),l.beginPath(),l.moveTo(H.x0,H.y0),l.lineTo(ne,fe),l.stroke()}if(S>.001){const ne=Math.max(.9,x*.058*Br(e.size)*(.85+.3*j)*(.6+.5*H.d));if(i.glow){const fe=l.createRadialGradient(H.cx2,H.cy2,0,H.cx2,H.cy2,ne*5);fe.addColorStop(0,"rgba("+i.accent+","+.26*T*S+")"),fe.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=fe,l.beginPath(),l.arc(H.cx2,H.cy2,ne*5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+Math.min(1,T+.1)*S+")",l.beginPath(),l.arc(H.cx2,H.cy2,ne*(.6+.4*S),0,6.2832),l.fill()}}const oe=e.size>=32?58:e.size>=20?32:18,le=x*.78,re=b?a*.5:a*.2,X=Math.cos(re),D=Math.sin(re),V=b?1:.4,E=(H,T)=>[Math.sin(H)*Math.cos(T),Math.cos(H),Math.sin(H)*Math.sin(T)],A=[E(1.4+.5*Math.sin(a*.5*V),a*.6*V),E(1.9+.4*Math.cos(a*.4*V),-a*.5*V+2)],q=.36,Z=e.cellCount==null?oe:Lt(Math.round(e.cellCount),0,oe);let ie=null;if(Z<oe){const H=Array.from({length:oe},(T,ne)=>ne).sort((T,ne)=>Xt(T)-Xt(ne));ie=new Array(oe),H.forEach((T,ne)=>{ie[T]=ne})}const ue=1-S;if(ue>.001||k<1){const H=[];for(let T=0;T<oe;T++){if(ie&&ie[T]>=Z)continue;const ne=1-(T+.5)/oe*2,fe=Math.sqrt(Math.max(0,1-ne*ne)),ce=T*2.39996,me=Math.cos(ce)*fe,we=ne,xe=Math.sin(ce)*fe;let Re=0,ze=-2;for(let rt=0;rt<C;rt++){const Ft=me*Y[rt].ux+we*Y[rt].uy+xe*Y[rt].uz;Ft>ze&&(ze=Ft,Re=rt)}const Ve=Y[Re];let Oe=0;for(const rt of A){const Ft=me-rt[0],Hn=we-rt[1],mn=xe-rt[2];Oe+=Math.exp(-(Ft*Ft+Hn*Hn+mn*mn)/(2*q*q))}Oe=Lt(Oe,0,1);const $e=me*X+xe*D,We=-me*D+xe*X,Qe=we*W-We*G,De=(we*G+We*W+1)/2,gt=.82+.18*De,et=v+$e*le*gt,It=y+Qe*le*gt;H.push({x:et+(Ve.cx2-et)*k,y:It+(Ve.cy2-It)*k,d:De+(Ve.d-De)*k,inf:Oe,f:(1-(1-Math.abs(2*De-1)))*(1-k)+1*k})}H.sort((T,ne)=>T.d-ne.d);for(const T of H){const ne=ur(T.inf),fe=Math.max(.6,x*(.05+.06*ne)*Br(e.size)*(.55+.5*T.d)),ce=(.16+.84*T.d)*(.45+.55*ne)*ue;if(ce<=.003)continue;const me=Math.atan2(T.y-y,T.x-v);l.fillStyle="rgba("+i.dot+","+ce+")",l.beginPath(),l.ellipse(T.x,T.y,Math.max(.35,fe*T.f),fe,me,0,6.2832),l.fill()}}e.size>=120&&_>.001&&(l.globalAlpha=_,Vu(e,a,i,()=>i.dot),l.globalAlpha=1),Wr(e,a,i),l.restore()}function OS(e,a,i){const{ctx:s,w:l,h:d}=e,p=l/2,m=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=e.size>=32?8:e.size>=20?6:5,b=v*.9,k=y?1:.4,S=a*(y?.3:.12),_=a*1*k,C=-a*.7*k+2.2,N=.72,$=(M,j)=>{const O=((M-j+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(O)};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let M=0;M<x;M++){const j=M/x*6.2832+S;let O=Math.exp(-($(j,_)**2)/(2*N*N))+Math.exp(-($(j,C)**2)/(2*N*N));O=Lt(O,0,1);const L=ur(O),R=p+Math.cos(j)*b,I=m+Math.sin(j)*b,z=Math.max(.6,v*(.05+.07*L)*Br(e.size)),W=.38+.62*L;if(i.glow&&L>.25){const G=s.createRadialGradient(R,I,0,R,I,z*4);G.addColorStop(0,"rgba("+i.accent+","+.24*L+")"),G.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=G,s.beginPath(),s.arc(R,I,z*4,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+W+")",s.beginPath(),s.arc(R,I,z,0,6.2832),s.fill()}Wr(e,a,i),s.restore()}function DS(e,a,i){Wr(e,a,i)}const FS={orbit:Gg,orbit2d:IS,circle:Af,lines:ES,magnetic:PS,magnetic2d:OS,pulse:DS,bands:Af};function mt({mark:e="orbit",size:a=16,tone:i="auto",state:s="active",motionSpeed:l=1,accent:d="#96B9FF",color:p,coreHalo:m=!0,coreGradient:v=!1,streamCount:y,cellCount:x,className:b,"aria-label":k}){const S=g.useRef(null),_=RS(),C=g.useRef(0),N=g.useRef(0);N.current=v?1:0;const $=g.useRef(new Map),M=g.useRef(null),j=g.useRef(0);return g.useEffect(()=>{const O=S.current;if(!O)return;const L=O.getContext("2d");if(!L)return;const R=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),I=Math.min(2,window.devicePixelRatio||1),z=Math.max(2,Math.round(a*I)),W=z;O.width=z,O.height=W;const G={ctx:L,w:z,h:W,dpr:I,size:a,state:s,coreHalo:m,alert:C.current,streamCount:y,cellCount:x,cellBirths:x!=null&&!R&&s!=="static"?$.current:void 0},Q=i==="auto"?LS(Lf(L,O,"var(--color-bg-primary)"))<.5?"dark":"light":i,B=AS(Q,lu(d));if(p){const E=Lf(L,O,p);B.dot=E,B.core=E}const Y=FS[e]??Gg,ee=1.15,oe=e==="lines"?1:0,le=e==="lines"||e==="magnetic";(M.current==null||!le||R||s==="static")&&(M.current=oe);const re=E=>{if(C.current+=(N.current-C.current)*.06,Math.abs(C.current-N.current)<.001&&(C.current=N.current),G.alert=C.current,G.emergeNow=performance.now()/1e3,le&&M.current!==oe){const Z=G.emergeNow,ie=Lt(Z-(j.current||Z),0,.1);j.current=Z;const ue=oe>(M.current??0)?1:-1;M.current=Lt((M.current??0)+ue*ie/ee,0,1)}else j.current=G.emergeNow;L.clearRect(0,0,z,W);const A=s==="static"?.62:E,q=M.current??oe;le&&q>.001&&q<.999?zS(G,A,B,q):Y(G,A,B)},X=Lt(l,.4,3);if((R||s==="static")&&(C.current=N.current),re(1.15),R||s==="static")return;let D=0;const V=E=>{re(E/1e3*X),D=requestAnimationFrame(V)};return D=requestAnimationFrame(V),()=>cancelAnimationFrame(D)},[e,a,i,s,l,d,p,m,v,y,x,_]),r.jsx("canvas",{ref:S,width:a,height:a,style:{width:a,height:a,display:"block",flexShrink:0},className:b,role:"img","aria-label":k})}const oa={high:0,medium:1,low:2,none:3};f.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function bl(e){return e.status==="resolved"||e.status==="auto_resolved"||e.status==="workflow_available"?"green":e.status==="analyzing"?"slate":e.status==="in_progress"||e.status==="monitoring"?"blue":e.severity==="high"?"orange":"slate"}f.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;function BS(e,a){if(a)return"Ultron is replying…";switch(e){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const Yg=e=>e.status==="workflow_available"||e.status==="resolved"&&e.workflowOpportunity!=null,Kg=e=>/^(review|adjust|revisit|update)\b/i.test(e),WS=["Revisit","Update","Resolve"],HS=e=>/,|\sand\s/.test(e),US="Approve all",ol="Yes",Qg=e=>{const i=e.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(s=>s.trim()).filter(Boolean);return i.length<2?[]:i.map(s=>s.charAt(0).toUpperCase()+s.slice(1))};f.section`
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
`;function qS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function VS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function GS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function YS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function KS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function QS({size:e=16}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),r.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),r.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function cu({size:e=16}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function ZS({size:e=16}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function XS({size:e=16}){return r.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function JS({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function fo({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function eN({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function tN({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function nN({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function $f({size:e=16}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}const Ld=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],aa={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},Zg={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function Xg(e){const a=Zg[e];return a?[a.role,a.shiftTime,a.location].filter(Boolean).join(" · "):""}function Jg(e){const a=aa[e.id];if(!a||e.title.startsWith(a))return e.title;const i=e.title.split(" ")[0]??"",l=i===i.toUpperCase()?e.title:e.title.charAt(0).toLowerCase()+e.title.slice(1);return`${a} ${l}`}const e2={missed_clockin_james:"james_okoro_2"},Gu=e=>`https://i.pravatar.cc/80?u=${e2[e]??e}`,da=e=>`https://i.pravatar.cc/80?u=${e2[e]??e}`,rN={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},oN=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],t2=e=>rN[e]??oN,n2={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},Tf={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reaching out to Carl Jensen…","Reaching out to Tina Boyd…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20,tools:["engage"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0,tools:["engage"]},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reaching out to Gina Holt…","Reaching out to Renata Cruz…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["task","engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},Yu={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},aN={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},Ku={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},iN={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},sN={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},Ad={detected:e=>e.event,assessment:e=>e.assessment,recommendation:e=>e.recommendation,approval:e=>e.recommendation,execution:e=>e.recommendation,resolution:e=>e.outcome??e.recommendation,monitoring:e=>e.assessment,workflow:e=>e.workflowOpportunity??e.recommendation};function r2(e){const a=i=>i.trim().replace(/[.\s]+$/,"").toLowerCase();return iN[e.id]??e.timeline.map(i=>{var d;const s=((d=Ad[i.state])==null?void 0:d.call(Ad,e))??e.assessment,l=s!=null&&a(s)===a(i.headline);return{icon:sN[i.state]??"clock",headline:i.headline,blocks:s&&!l?[{text:s}]:void 0}})}const Mt=(e,a,i)=>({name:e,match:a,distance:i}),Ue=(e,a,i,s,l,d)=>({seed:e,name:a,preview:i,status:s,tone:l,...d?{conversation:d}:{}}),If=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],lN=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],cN=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],dN=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],o2="An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",io=e=>({from:"ultron",text:o2,time:e}),uN={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:If,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[Mt("Jordan Pierce","4.9 match","3.2 mi"),Mt("Aisha Karim","4.7 match","5.1 mi"),Mt("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:o2,total:20,threads:[Ue("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive",[io("1:52 PM"),{from:"them",text:"Yes — I can take the 2pm.",time:"1:54 PM"},{from:"ultron",text:"You’re confirmed for the 2:00 PM ICU shift at Riverside. Check in at the 3rd-floor ICU desk for handoff.",time:"1:54 PM"},{from:"them",text:"On my way. Thanks!",time:"1:55 PM"}]),Ue("priya_nguyen","Priya Nguyen","“Count me in — confirming now.”","Interested","positive",[io("1:52 PM"),{from:"them",text:"Count me in — confirming now.",time:"1:57 PM"},{from:"ultron",text:"Great — you’re first backup if the 2pm falls through. I’ll ping you the moment another opens.",time:"1:57 PM"},{from:"them",text:"Sounds good.",time:"1:58 PM"}]),Ue("jordan_pierce","Jordan Pierce","“Is this the full ICU wing?”","Chatting","chatting",[io("1:52 PM"),{from:"them",text:"Is this the full ICU wing or step-down?",time:"1:56 PM"},{from:"ultron",text:"Full ICU wing — 12-hour shift, 2:00 PM start.",time:"1:56 PM"},{from:"them",text:"Checking my childcare, give me a few.",time:"1:59 PM"}]),Ue("marcus_lewis","Marcus Lewis","“Any flex on the start? Could do 2:30.”","Chatting","chatting",[io("1:52 PM"),{from:"them",text:"Any flex on the start? Could do 2:30.",time:"1:55 PM"},{from:"ultron",text:"Start is fixed at 2:00 for handoff, but I can flag you first for the next opening.",time:"1:55 PM"},{from:"them",text:"Ok — let me see if I can make 2.",time:"1:58 PM"}]),Ue("lena_reyes","Lena Reyes","“What’s the rate on this one?”","Chatting","chatting",[io("1:52 PM"),{from:"them",text:"What’s the rate on this one?",time:"1:53 PM"},{from:"ultron",text:"$68/hr with the ICU differential included.",time:"1:53 PM"},{from:"them",text:"Tempting — give me an hour to sort a ride.",time:"1:57 PM"}]),Ue("omar_mori","Omar Mori","“Is parking validated?”","Chatting","chatting",[io("1:52 PM"),{from:"them",text:"Is parking validated at Riverside?",time:"1:54 PM"},{from:"ultron",text:"Yes — validated parking in the north garage.",time:"1:54 PM"},{from:"them",text:"Good to know. Still deciding.",time:"1:56 PM"}]),Ue("devon_diaz","Devon Diaz","“Might be a few min late.”","Chatting","chatting",[io("1:52 PM"),{from:"them",text:"I’m on shift til 1 — might be a few min late.",time:"1:55 PM"},{from:"ultron",text:"A few minutes is fine if you make handoff by 2:15. Want me to hold it?",time:"1:55 PM"},{from:"them",text:"Yeah, hold it — I’ll confirm by 1:30.",time:"1:59 PM"}])]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:lN,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[Mt("Renee Wallace","4.9 match","2.4 mi"),Mt("Carl Jensen","4.6 match","4.1 mi"),Mt("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[Ue("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),Ue("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),Ue("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:cN,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[Mt("Dane Mercer","4.8 match","2.1 mi"),Mt("Omar Reyes","4.6 match","3.7 mi"),Mt("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[Ue("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),Ue("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),Ue("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:dN,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[Mt("Jamal Carter","4.7 match","1.8 mi"),Mt("Sara Lindqvist","4.6 match","2.9 mi"),Mt("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[Ue("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),Ue("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),Ue("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[Mt("Theo Park","4.7 match","1.9 mi"),Mt("Gina Holt","4.5 match","3.3 mi"),Mt("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[Ue("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[Ue("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),Ue("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),Ue("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[Mt("Carl Jensen","4.7 match","2.6 mi"),Mt("Tina Boyd","4.5 match","3.9 mi"),Mt("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[Ue("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),Ue("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),Ue("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[Ue("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]},task:{description:"Created the CPR renewal task on Nadia’s profile",query:'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task',fields:[{label:"Task",value:"Renew CPR certification"},{label:"Assignee",value:"Nadia Haddad"},{label:"Step",value:"Upload the updated cert"},{label:"Due",value:"Before next gated shift · Thu 7:00 AM"},{label:"Status",value:"Assigned",emphasis:"success-tag"}]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[Ue("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[Ue("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[Ue("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[Ue("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[Ue("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[Ue("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[Ue("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[Ue("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),Ue("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),Ue("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:If,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[Ue("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),Ue("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},pN={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},hN=e=>/in-app/i.test(e)?"in_app":/sms/i.test(e)?"sms":"auto",Ef=e=>/in-app/i.test(e)?"In-app":/sms/i.test(e)?"SMS":"Preferred channel",Pf=e=>e.split(/\s*\+\s*/).map(a=>a.replace(/\b\w/g,i=>i.toUpperCase())).join(", "),fN={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},du=e=>{const[a,...i]=e.split(" "),s=fN[a];return s?`Will ${s} ${i.join(" ")}`:e};function mN(e,a){if(e==="policy"&&a.policy){const l=a.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:l?`Run the shift against ${a.policy.policiesTotal} active scheduling policies and return the ${l.total} ${l.unit}, ranked by match.`:`Run the case against ${a.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const i=e==="engage"?a.engage:e==="engage-offer"?a.engageOffer:void 0;if(i)return{query:`engage.send(channel="${hN(i.name)}", template="shift_offer", to=matched)`,summary:`${du(i.description)} — ${i.total} ${i.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const s=e==="notify"?a.notify:e==="notify-scheduler"?a.notifyScheduler:void 0;return s?{query:`engage.notify(to="${s.name}", via="${s.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${du(s.description)} (${s.name} · ${s.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function gN(e,a,i,s){var S,_,C,N;if(e==="read"){const $=((S=a.update)==null?void 0:S.recordType)??((_=a.updateClose)==null?void 0:_.recordType);if(!$)return null;const M=$.toLowerCase(),j=[{label:"Type",value:$},{label:"Time",value:((C=Zg[s])==null?void 0:C.shiftTime)??""},{label:"User",value:aa[s]??""},{label:"Clock in",value:""}];return{icon:"read",name:`Read data: ${$}`,description:`Pulled the current ${M} record before planning`,query:`read_data(record="${$}") → current_state`,recordDetails:j,summary:`Read the ${M}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`}}if(e==="match"||e==="credential"||e==="incentive"){const $=(N=a.policy)==null?void 0:N.eligible;if(!$)return null;const M=$.unit.replace(/^eligible\s+/i,"");if(e==="match")return{icon:"search",name:"Match Engine",description:`Ranked qualified ${M} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${$.total} ${$.unit}.`};if(e==="credential")return{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."};const j=$.total>=10;return{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${$.total}) → suggestion`,summary:j?"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached.":"Compared against recent last-minute fills — the pool is thin at this notice, so a bonus is recommended to secure the fill.",recommendation:j?{add:!1,amount:"No bonus",rationale:`${$.total} qualified ${M} available — deep enough to fill without an incentive.`}:{add:!0,amount:"$150 / shift",rationale:`Only ${$.total} qualified ${M} available this close to start — a bonus improves the odds of a confirmed fill.`}}}if(e==="task"){if(!a.task)return null;const{description:$,query:M,fields:j}=a.task;return{icon:"task",name:"Tasks",description:$,query:M,task:{fields:j}}}if(e==="update"||e==="update-close"){const $=e==="update"?a.update:a.updateClose;if(!$)return null;const{description:M,...j}=$;return{icon:"record",name:"Update Data",description:M,updateData:j}}const l=e==="notify"||e==="notify-scheduler",d=e==="notify"?a.notify:e==="notify-scheduler"?a.notifyScheduler:void 0,p=e==="engage"?a.engage:e==="engage-offer"?a.engageOffer:void 0;if(!(e==="policy"&&a.policy||!!p||!!d))return null;const v=e==="policy"?"Policy Engine":l?"Engage: Notification":p.name,y=e==="policy"?a.policy.description:l?d.description:p.description,x=e==="policy"?"shield":l?"bell":"message";if(i==="planning"){const $=e==="policy"?y:du(y),M={icon:x,name:v,description:$,...mN(e,a)};return l?{...M,channel:Pf(d.channel),message:d.message}:p?{...M,channel:Ef(p.name),message:p.message}:e==="policy"?{...M,policies:{total:a.policy.policiesTotal,items:a.policy.policies}}:M}if(e==="policy")return{icon:x,name:v,description:y,policies:{total:a.policy.policiesTotal,items:a.policy.policies},eligible:a.policy.eligible};if(p)return{icon:x,name:v,description:y,channel:Ef(p.name),message:p.message,threads:{total:p.total,moreNoun:"threads",items:p.threads}};const{description:b,...k}=d;return{icon:x,name:v,description:y,channel:Pf(d.channel),notification:k}}function a2(e,a,i="execution"){const s=uN[e];return s?a.map(l=>gN(l,s,i,e)).filter(l=>l!==null):[]}const vN=e=>e.tools??pN[e.icon]??["policy"],zs=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function xN(e){return{id:`detected_${e.id}`,name:e.name,title:e.title,capability:e.capability,status:"analyzing",severity:e.severity??"high",event:e.title.endsWith(".")?e.title:`${e.title}.`,assessment:e.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:e.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:e.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const i2={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},zf=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function Qu(e,a){return zf[a%zf.length]}function yN(e){return e===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function wN(e){return e>=90?"green":e>=80?"blue":e>=70?"orange":"slate"}function s2({record:e}){const a=e.meta.find(l=>/^\d+%\s*match$/i.test(l)),i=a?parseInt(a,10):null,s=a?e.meta.filter(l=>l!==a):e.meta;return r.jsxs(bN,{children:[r.jsx(Wn,{size:"md",src:Gu(e.avatarSeed),name:e.title,alt:e.title}),r.jsxs(kN,{children:[r.jsx(_N,{children:e.title}),r.jsx(CN,{children:[e.eyebrow,...s].join(" · ")})]}),i!=null&&r.jsxs(jN,{"data-tone":wN(i),children:[i,"% match"]}),r.jsx(Te,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:r.jsx(Su,{size:16})})]})}const bN=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,kN=f.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,_N=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,CN=f.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,jN=f.span`
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
`,Of=e=>e.id.startsWith("detected_"),Df=5400,Ff=1100;function SN(e,a){switch(a.type){case"detect":return e.some(i=>i.id===a.thread.id)?e:[a.thread,...e];case"decide":return e.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"commit":return e.map(i=>i.id===a.threadId?{...i,status:"in_progress"}:i);case"reopen":return e.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"resolve":return e.map(i=>i.id===a.threadId?{...i,status:"resolved",outcome:i2[i.id]??i.outcome}:i)}}const NN=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function MN(){const[e,a]=g.useReducer(SN,Ld),[i,s]=g.useState(()=>{var q;const A=Ld.find(Z=>Z.status==="needs_approval"||Z.status==="recommended");return(A==null?void 0:A.id)??((q=Ld[0])==null?void 0:q.id)??null}),[l,d]=g.useState([]),p=A=>{s(A),d(q=>q.includes(A)?q:[...q,A])},m=g.useMemo(()=>{const A=e.map((q,Z)=>({item:q,index:Z}));return NN.map(q=>({id:q.id,label:q.label,threads:A.filter(Z=>q.statuses.includes(Z.item.status)).sort((Z,ie)=>(Z.item.status==="analyzing"?1:0)-(ie.item.status==="analyzing"?1:0)||(Of(ie.item)?1:0)-(Of(Z.item)?1:0)||oa[Z.item.severity]-oa[ie.item.severity]||Z.index-ie.index).map(Z=>Z.item)}))},[e]),v=e.find(A=>A.id===i)??null,[y,x]=g.useState({}),b=i?y[i]??0:0,[k,S]=g.useState([]),[_,C]=g.useState({}),[N,$]=g.useState({}),[M,j]=g.useState([]),O=g.useRef({}),[L,R]=g.useState([]),I=A=>{R(q=>q.includes(A)?q.filter(Z=>Z!==A):[...q,A])},[z,W]=g.useState([]),G=A=>{W(q=>q.includes(A)?q:[...q,A])},[Q,B]=g.useState([]);return{threads:e,groups:m,selectedId:i,selectedThread:v,selectedStage:b,stageById:y,viewedIds:l,analyzedIds:k,outboundByThread:_,chatByThread:N,replyingIds:M,setSelectedId:p,detectRisk:A=>{a({type:"detect",thread:xN(A)})},decide:A=>{p(A),S(q=>q.includes(A)?q:[...q,A]),a({type:"decide",threadId:A})},commit:(A,q)=>{p(A),C(Z=>({...Z,[A]:[...Z[A]??[],q]})),a({type:"commit",threadId:A})},completeRun:A=>{const q=y[A]??0,Z=Yu[A];q===0&&Z?(x(ie=>({...ie,[A]:1})),a({type:"reopen",threadId:A})):(a({type:"resolve",threadId:A}),L.includes(A)&&(G(A),R(ie=>ie.filter(ue=>ue!==A))))},sendMessage:(A,q)=>{const Z=q.trim();if(!Z)return;p(A),$(ue=>({...ue,[A]:[...ue[A]??[],{role:"operator",text:Z}]})),j(ue=>ue.includes(A)?ue:[...ue,A]);const ie=window.setTimeout(()=>{$(ue=>{const H=ue[A]??[],T=H.filter(ne=>ne.role==="ultron").length;return{...ue,[A]:[...H,{role:"ultron",text:Qu(Z,T)}]}}),j(ue=>ue.filter(H=>H!==A)),delete O.current[A]},Ff);O.current[A]=ie},stopReply:A=>{const q=O.current[A];q&&(window.clearTimeout(q),delete O.current[A]),j(Z=>Z.filter(ie=>ie!==A))},refine:A=>{},saveWorkflow:A=>{const q=A.id;p(q),$(ie=>({...ie,[q]:[...ie[q]??[],{role:"operator",text:"Save as workflow"}]})),j(ie=>ie.includes(q)?ie:[...ie,q]);const Z=window.setTimeout(()=>{$(ie=>({...ie,[q]:[...ie[q]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),G(q),j(ie=>ie.filter(ue=>ue!==q)),delete O.current[q]},Ff);O.current[q]=Z},pendingWorkflowIds:L,toggleWorkflowSave:I,savedWorkflowIds:z,markWorkflowSaved:G,revealedNewIds:Q,revealNew:A=>B(q=>q.includes(A)?q:[...q,A])}}const RN={"Acknowledge her":{working:"Acknowledging her",done:"Acknowledged her"},"Add the line item":{working:"Adding the line item",done:"Added the line item"},"Approve Thursday":{working:"Approving Thursday",done:"Approved Thursday"},"Approve for payroll":{working:"Approving for payroll",done:"Approved for payroll"},"Assign a renewal task":{working:"Assigning a renewal task",done:"Assigned a renewal task"},"Assign intake tasks":{working:"Assigning intake tasks",done:"Assigned intake tasks"},"Await his reply":{working:"Awaiting his reply",done:"Got his reply"},"Chase the unconfirmed":{working:"Chasing the unconfirmed",done:"Chased the unconfirmed"},"Claim shift":{working:"Claiming shift",done:"Claimed shift"},"Close the invoice":{working:"Closing the invoice",done:"Closed the invoice"},"Collect confirmations":{working:"Collecting confirmations",done:"Collected confirmations"},"Confirm Sarah Quinn":{working:"Confirming Sarah Quinn",done:"Confirmed Sarah Quinn"},"Confirm alerts":{working:"Confirming alerts",done:"Confirmed alerts"},"Confirm the punch":{working:"Confirming the punch",done:"Confirmed the punch"},"File as a CPR cert":{working:"Filing as a CPR cert",done:"Filed as a CPR cert"},"Fill shift":{working:"Filling shift",done:"Filled shift"},"Fill the Wed shift":{working:"Filling the Wed shift",done:"Filled the Wed shift"},"Flag the 3 shifts at-risk":{working:"Flagging the 3 shifts at-risk",done:"Flagged the 3 shifts at-risk"},"Flag the at-risk shifts":{working:"Flagging the at-risk shifts",done:"Flagged the at-risk shifts"},"Flag the renewal":{working:"Flagging the renewal",done:"Flagged the renewal"},"Follow up":{working:"Following up",done:"Followed up"},"Hold Friday for you":{working:"Holding Friday for you",done:"Held Friday for you"},"Hold for payroll":{working:"Holding for payroll",done:"Held for payroll"},"Invite the top 40 matches":{working:"Inviting the top 40 matches",done:"Invited the top 40 matches"},"Keep standby list":{working:"Keeping standby list",done:"Kept standby list"},"Line up backfills":{working:"Lining up backfills",done:"Lined up backfills"},"Mark Priya qualified":{working:"Marking Priya qualified",done:"Marked Priya qualified"},"Mark the credential verified":{working:"Marking the credential verified",done:"Marked the credential verified"},"Message the best matches":{working:"Messaging the best matches",done:"Messaged the best matches"},"Message the top replacements":{working:"Messaging the top replacements",done:"Messaged the top replacements"},"Message workers to confirm":{working:"Messaging workers to confirm",done:"Messaged workers to confirm"},"Move to the recruiter queue":{working:"Moving to the recruiter queue",done:"Moved to the recruiter queue"},"Notify Sofia":{working:"Notifying Sofia",done:"Notified Sofia"},"Notify scheduler":{working:"Notifying scheduler",done:"Notified scheduler"},"Notify scheduling":{working:"Notifying scheduling",done:"Notified scheduling"},"Notify the location manager":{working:"Notifying the location manager",done:"Notified the location manager"},"Offer to the top matches":{working:"Offering to the top matches",done:"Offered to the top matches"},"Publish the report":{working:"Publishing the report",done:"Published the report"},"Queue readiness summary":{working:"Queueing readiness summary",done:"Queued readiness summary"},"Recalculate the total":{working:"Recalculating the total",done:"Recalculated the total"},"Reconcile the payment":{working:"Reconciling the payment",done:"Reconciled the payment"},"Record the release":{working:"Recording the release",done:"Recorded the release"},"Save draft":{working:"Saving draft",done:"Saved draft"},"Send Luis a welcome":{working:"Sending Luis a welcome",done:"Sent Luis a welcome"},"Send a verification ping":{working:"Sending a verification ping",done:"Sent a verification ping"},"Send a warm intro":{working:"Sending a warm intro",done:"Sent a warm intro"},"Send the birthday note":{working:"Sending the birthday note",done:"Sent the birthday note"},"Text Bianca":{working:"Texting Bianca",done:"Texted Bianca"},"Text James":{working:"Texting James",done:"Texted James"},"Track claims":{working:"Tracking claims",done:"Tracked claims"},"Track responses":{working:"Tracking responses",done:"Tracked responses"},"Update ledger":{working:"Updating ledger",done:"Updated ledger"},"Update the contact":{working:"Updating the contact",done:"Updated the contact"},"Update the roster":{working:"Updating the roster",done:"Updated the roster"},"Update the timesheet":{working:"Updating the timesheet",done:"Updated the timesheet"}};function LN(e,a){const i=RN[e];return!i||a==="plan"?e:a==="done"?i.done:i.working}const AN={search:Xs,read:Xs,message:el,policy:co,shield:co,schedule:co,analytics:o6,clock:pn,monitor:vi,bell:el,record:Or,task:co},$N={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},TN=e=>e.updateData?`Update Data: ${e.updateData.recordType}`:$N[e.icon]??e.name,IN=e=>e.tone==="positive"?"success":e.tone==="chatting"?"info":"neutral",Bf={positive:0,chatting:1,muted:2},EN=f(J0)`
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
`,PN=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,Zu=240;function zN({open:e,onClose:a,title:i="Run details",usage:s}){const[l,d]=g.useState(()=>s.length?"0":""),[p,m]=g.useState(e),[v,y]=g.useState(!1);if(g.useEffect(()=>{if(e){m(!0);let _=0;const C=requestAnimationFrame(()=>{_=requestAnimationFrame(()=>y(!0))});return()=>{cancelAnimationFrame(C),cancelAnimationFrame(_)}}y(!1);const S=setTimeout(()=>m(!1),Zu);return()=>clearTimeout(S)},[e]),!p)return null;const x=s.length,b=`${x} ${x===1?"tool":"tools"} used · tap any to see its query and results`,k=s.map((S,_)=>({entry:S,index:_}));return fi.createPortal(r.jsxs(YN,{role:"dialog","aria-modal":"true","aria-label":i,children:[r.jsx(KN,{$shown:v,onClick:a}),r.jsxs(QN,{$shown:v,children:[r.jsxs(ZN,{children:[r.jsxs(XN,{children:[r.jsx(JN,{children:i}),r.jsx(eM,{children:b})]}),r.jsx(Te,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:a,children:r.jsx(si,{size:18})})]}),r.jsxs(tM,{children:[r.jsx(nM,{"aria-hidden":"true"}),r.jsx(X0,{type:"single",collapsible:!0,value:l,onValueChange:S=>d(typeof S=="string"?S:""),children:k.map(({entry:S,index:_})=>{const C=S.updateData?B0:AN[S.icon];return r.jsx(EN,{value:String(_),label:TN(S),description:S.description,leadingSlot:r.jsx(PN,{"aria-hidden":"true",children:r.jsx(C,{size:18})}),children:r.jsx(rM,{children:r.jsx(ON,{entry:S})})},_)})})]})]})]}),document.body)}function ON({entry:e}){return r.jsxs(r.Fragment,{children:[e.channel&&r.jsxs(dn,{children:[r.jsx(Ht,{children:"Channel"}),r.jsx(Vf,{children:e.channel})]}),e.message&&r.jsxs(dn,{children:[r.jsx(Ht,{children:"Message"}),r.jsx(Hf,{children:e.message})]}),e.recordDetails&&r.jsxs(dn,{children:[r.jsx(Ht,{children:"Record details"}),r.jsx($d,{children:e.recordDetails.map((a,i)=>r.jsx(un,{size:"sm",label:a.label,trailingSlot:r.jsx(Td,{$success:a.emphasis==="success",$placeholder:!a.value,children:a.value||"???"})},i))})]}),e.policies&&r.jsxs(dn,{children:[r.jsx(Ht,{children:`Policies evaluated · ${e.policies.total}`}),r.jsx(gM,{children:e.policies.items.map((a,i)=>r.jsxs(vM,{children:[r.jsx(xM,{"aria-hidden":"true",children:r.jsx(hn,{size:16})}),r.jsx("span",{children:a})]},i))})]}),e.eligible&&r.jsxs(dn,{children:[r.jsx(Ht,{children:`Returned · ${e.eligible.total} ${e.eligible.unit}`}),r.jsx(DN,{candidates:e.eligible.items,total:e.eligible.total,moreNoun:e.eligible.moreNoun})]}),e.threads&&r.jsxs(dn,{children:[r.jsx(Ht,{children:`Threads · ${e.threads.total}`}),r.jsx(qN,{threads:e.threads})]}),e.notification&&r.jsxs(r.Fragment,{children:[r.jsxs(dn,{children:[r.jsx(Ht,{children:"Recipient"}),r.jsx(yM,{children:r.jsx(un,{size:"md",divider:!1,leadingSlot:r.jsx(Wn,{size:"sm",src:da(e.notification.seed),name:e.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:e.notification.name,description:e.notification.role,trailingSlot:r.jsx(Te,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${e.notification.name}'s profile`,children:r.jsx(ml,{size:14})})})})]}),r.jsxs(dn,{children:[r.jsx(Ht,{children:"Message"}),r.jsx(Hf,{children:e.notification.message})]})]}),e.task&&r.jsxs(dn,{children:[r.jsx(Ht,{children:"Task"}),r.jsx($d,{children:e.task.fields.map((a,i)=>r.jsx(un,{size:"sm",label:a.label,trailingSlot:a.emphasis==="success-tag"?r.jsx(li,{status:"success",size:"sm",children:a.value}):r.jsx(Td,{$success:a.emphasis==="success",$placeholder:!a.value,children:a.value||"???"})},i))})]}),e.updateData&&r.jsxs(dn,{children:[r.jsx(Ht,{children:"Record details"}),(e.updateData.groups??[e.updateData.fields??[]]).map((a,i)=>r.jsx($d,{children:a.map((s,l)=>r.jsx(un,{size:"sm",label:s.label,trailingSlot:s.emphasis==="change"&&s.previousValue?r.jsxs(FN,{children:[r.jsx(BN,{children:s.previousValue}),r.jsx(WN,{"aria-hidden":"true",children:"→"}),r.jsx(HN,{children:s.value})]}):s.emphasis==="success-tag"?r.jsx(li,{status:"success",size:"sm",children:s.value}):r.jsx(Td,{$success:s.emphasis==="success",$placeholder:!s.value,children:s.value||"???"})},l))},i))]}),e.recommendation&&r.jsxs(dn,{children:[r.jsx(Ht,{children:"Recommendation"}),r.jsxs(wM,{children:[r.jsxs(Uf,{children:[r.jsx(qf,{children:"Incentive?"}),r.jsx(bM,{$add:e.recommendation.add,children:e.recommendation.add?e.recommendation.amount:"No bonus"})]}),r.jsxs(Uf,{children:[r.jsx(qf,{children:"Reason"}),r.jsx(kM,{children:e.recommendation.rationale})]})]})]}),e.query&&r.jsxs(dn,{children:[r.jsx(Ht,{children:"Query"}),r.jsx(oM,{children:e.query})]}),e.summary&&r.jsxs(dn,{children:[r.jsx(Ht,{children:"What it does"}),r.jsx(Vf,{children:e.summary})]})]})}function DN({candidates:e,total:a,moreNoun:i}){var x;const[s,l]=g.useState(!1),d=e.slice(0,3),p=a-d.length,m=parseFloat(((x=d[d.length-1])==null?void 0:x.match)??"4.5"),v=s?Array.from({length:p},(b,k)=>UN(k,m)):[],y=[...d,...v];return r.jsxs(r.Fragment,{children:[r.jsx(Xu,{children:y.map((b,k)=>r.jsx(un,{size:"sm",leadingSlot:r.jsx(Wn,{size:"sm",src:da(b.name),name:b.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:b.name,trailingSlot:r.jsx(sM,{children:`${b.match} · ${b.distance}`})},k))}),p>0&&r.jsx(l2,{type:"button",onClick:()=>l(b=>!b),"aria-expanded":s,children:s?`Show fewer ${i}`:`+${p} more ${i}`})]})}const Xu=f.div`
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
`,$d=f(Xu)`
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
`,Td=f.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${e=>e.$placeholder?"var(--color-content-disabled)":e.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,FN=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,BN=f.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,WN=f.span`
  color: var(--color-content-tertiary);
`,HN=f.span`
  color: var(--color-success-content);
`,al=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],il=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function UN(e,a){const i=al[e%al.length],s=il[(e*7+3)%il.length],l=Math.max(3,a-(e+1)*.1),d=(4+e*13%90/10).toFixed(1);return{name:`${i} ${s}`,match:`${l.toFixed(1)} match`,distance:`${d} mi`}}const Wf=3;function qN({threads:e}){const[a,i]=g.useState(!1),[s,l]=g.useState(null),d=[...e.items].sort((x,b)=>Bf[x.tone]-Bf[b.tone]),p=Math.max(0,e.total-d.length),m=[...d,...Array.from({length:p},(x,b)=>GN(b))],v=a?m:m.slice(0,Wf),y=m.length-Wf;return r.jsxs(r.Fragment,{children:[r.jsx(Xu,{children:v.map((x,b)=>{var C;const k=!!((C=x.conversation)!=null&&C.length),S=`${x.name}-${b}`,_=k&&s===S;return r.jsxs(lM,{"data-open":_||void 0,children:[r.jsx(un,{size:"md",interactive:k,onClick:k?()=>l(_?null:S):void 0,"aria-expanded":k?_:void 0,leadingSlot:r.jsx(Wn,{size:"sm",src:da(x.seed),name:x.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:x.name,description:x.preview,trailingSlot:r.jsxs(mM,{children:[r.jsx(li,{status:IN(x),size:"sm",children:x.status}),k?r.jsx(cM,{"data-open":_||void 0,children:r.jsx(Sn,{size:16})}):r.jsx(fn,{size:16})]})}),_&&r.jsx(VN,{messages:x.conversation})]},S)})}),y>0&&r.jsx(l2,{type:"button",onClick:()=>i(x=>!x),"aria-expanded":a,children:a?`Show fewer ${e.moreNoun}`:`+${y} more ${e.moreNoun}`})]})}function VN({messages:e}){return r.jsx(uM,{children:e.map((a,i)=>r.jsxs(pM,{$from:a.from,children:[r.jsx(hM,{children:a.text}),r.jsx(fM,{children:a.time})]},i))})}function GN(e){const a=al[e%al.length],i=il[(e*7+3)%il.length],s=`${a} ${i}`;return{seed:s,name:s,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const YN=f.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,KN=f.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${e=>e.$shown?.45:0};
  transition: opacity ${Zu}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,QN=f.div`
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
  transition: transform ${Zu}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; transform: none; }
`,ZN=f.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,XN=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,JN=f.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,eM=f.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,tM=f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,nM=f.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,rM=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,dn=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;function oM({children:e}){const[a,i]=g.useState(!1),s=()=>{var l;(l=navigator.clipboard)==null||l.writeText(e),i(!0),window.setTimeout(()=>i(!1),1600)};return r.jsxs(aM,{children:[r.jsx(iM,{children:e}),r.jsx(Te,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":a?"Copied":"Copy query",onClick:s,children:a?r.jsx(hn,{size:14}):r.jsx(D0,{size:14})})]})}const aM=f.div`
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
`,iM=f.pre`
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
`,sM=f.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,lM=f.div``,cM=f.span`
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
`,uM=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3) var(--space-3);
  animation: ${dM} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,pM=f.div`
  max-width: 80%;
  align-self: ${e=>e.$from==="them"?"flex-start":"flex-end"};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: ${e=>e.$from==="them"?"var(--color-bg-secondary)":"var(--color-info-fill)"};
  color: ${e=>e.$from==="them"?"var(--color-content-primary)":"var(--color-content-inverse)"};
  /* Squared-off tail corner on the side the bubble is anchored to. */
  border-bottom-${e=>e.$from==="them"?"left":"right"}-radius: var(--radius-xs);
`,hM=f.div`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
`,fM=f.div`
  margin-top: 2px;
  font-size: 10px;
  line-height: 1;
  opacity: 0.65;
  text-align: right;
`,mM=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,l2=f.button`
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
`,gM=f.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,vM=f.li`
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
`,xM=f.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,Hf=f.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,yM=f.div`
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
`,wM=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`,Uf=f.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,qf=f.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,bM=f.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${e=>e.$add?"var(--color-success-content)":"var(--color-content-primary)"};
`,kM=f.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,Vf=f.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function _M({milestones:e}){return r.jsx($M,{children:e.map((a,i)=>r.jsx(NM,{milestone:a,last:i===e.length-1},i))})}function c2({milestones:e,typingIndex:a,focusIndex:i,focusBeat:s,collapsed:l,hideActions:d,running:p,animateIn:m,showConnectors:v,reasoning:y}){return r.jsx(CM,{milestones:e,typingIndex:a,focusIndex:i,focusBeat:s,hideActions:d,running:p,defaultCollapsed:l,animateIn:m,showConnectors:v,reasoning:y})}function CM({milestones:e,typingIndex:a,focusIndex:i,focusBeat:s,hideActions:l,running:d,animateIn:p=!0,showConnectors:m=!0,defaultCollapsed:v=!1,reasoning:y=!1}){const[x,b]=g.useState(!1),_=v||y&&!d?e.length:0,C=_>0,N=C&&!x?_:0,$=e.slice(0,_).map(j=>j.headline).join(" · "),M=e.length>0&&N>=e.length;return r.jsx(IM,{$animate:p,children:r.jsxs(PM,{$compact:M,children:[C&&!x&&r.jsx(Kf,{$tight:!0,$last:M,$connected:m,children:r.jsxs(p2,{type:"button","aria-expanded":x,onClick:()=>b(j=>!j),children:[r.jsx(Xf,{"aria-hidden":"true",children:r.jsx(Js,{size:16})}),r.jsx(KM,{children:$})]})}),e.slice(N).map((j,O)=>{var B,Y;const L=N+O,R=d&&typeof i=="number"&&L>i,I=d&&typeof i=="number"&&L===i,z=R?"plan":I?"working":"done",W=!d||typeof i!="number"||L<i-1?"done":L===i-1?"working":"upcoming",G=!!((B=j.progress)!=null&&B.length),Q=L===e.length-1;return r.jsxs(Kf,{$tight:!G,$last:Q,$connected:m,children:[m&&!Q&&W!=="upcoming"&&r.jsx(OM,{"aria-hidden":"true",$state:W,$tight:!G,$superseded:v}),r.jsx(u2,{milestone:j,label:LN(j.headline,z),last:!0,collapsible:!0,placeholder:R,focused:I,startOpen:!d&&x,onCollapse:C&&x&&!I?()=>b(!1):void 0,progressBeat:I?s:void 0,superseded:v,typing:L===a,extra:!R&&((Y=j.usage)!=null&&Y.length)?r.jsx(SM,{usage:j.usage,title:j.headline}):void 0,icon:y&&!d&&!R?r.jsx(Xf,{"aria-hidden":"true",children:r.jsx(Js,{size:16})}):r.jsx(d2,{icon:j.icon,loading:a===L||I||d&&typeof i!="number"&&L===e.length-1,placeholder:R,muted:v})})]},L)}),!l&&!d&&r.jsx(Yo,{time:Qn(e)})]})})}const Gf=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function jM(){const[e,a]=g.useState(0);return g.useEffect(()=>{if(e>=Gf.length-1)return;const i=setTimeout(()=>a(s=>s+1),3200);return()=>clearTimeout(i)},[e]),r.jsxs(r.Fragment,{children:[Gf[e],r.jsxs(EM,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]})}function Qn(e){const i=581+e.reduce((m,v)=>m+v.headline.length,0)%200,s=Math.floor(i/60)%24,l=i%60,d=s<12?"AM":"PM";return`${s%12===0?12:s%12}:${String(l).padStart(2,"0")} ${d}`}function Yo({time:e}){const[a,i]=g.useState(null),s=l=>i(d=>d===l?null:l);return r.jsx(DM,{"data-feedback-actions":!0,children:r.jsxs(y0,{visibility:"always",time:e,children:[r.jsx(Qf,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":a==="up","data-active":a==="up"||void 0,onClick:()=>s("up"),children:r.jsx(z0,{size:14})}),r.jsx(Qf,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":a==="down","data-active":a==="down"||void 0,onClick:()=>s("down"),children:r.jsx(O0,{size:14})}),r.jsx(Te,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:r.jsx(gi,{size:14})})]})})}function SM({usage:e,title:a}){const[i,s]=g.useState(!1);return g.useEffect(()=>{if(!i)return;const l=d=>{d.key==="Escape"&&s(!1)};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[i]),e.length?r.jsxs(FM,{children:[r.jsxs(Te,{variant:"tertiary",size:"xs",trailingArtwork:r.jsx(fn,{size:12}),"aria-haspopup":"dialog","aria-expanded":i,onClick:()=>s(!0),children:[e.length," ",e.length===1?"tool":"tools"," used"]}),r.jsx(zN,{open:i,onClose:()=>s(!1),title:a,usage:e})]}):null}function NM({milestone:e,last:a}){return r.jsxs(qM,{children:[r.jsxs(VM,{children:[r.jsx(d2,{icon:e.icon}),!a&&r.jsx(XM,{})]}),r.jsx(u2,{milestone:e,last:a})]})}function MM({records:e,initial:a=3}){const[i,s]=g.useState(!1),l=i?e:e.slice(0,a),d=e.length-a;return r.jsxs(fR,{children:[l.map((p,m)=>r.jsx(s2,{record:p},m)),d>0&&r.jsx(mR,{type:"button",onClick:()=>s(p=>!p),children:i?"Show less":`Show ${d} more`})]})}function d2({slotRef:e,hidden:a,loading:i,placeholder:s,muted:l}){return s?r.jsx(Zf,{ref:e,"aria-hidden":"true",$hidden:a,$placeholder:!0,children:r.jsx(YM,{})}):r.jsx(Zf,{ref:e,"aria-hidden":"true",$hidden:a,$loading:i,children:r.jsxs(ZM,{viewBox:"0 0 24 24",$loading:i,$muted:l&&!i,children:[r.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),r.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function u2({milestone:e,label:a,last:i,typing:s,icon:l,collapsible:d=!0,extra:p,placeholder:m,focused:v,progressBeat:y,superseded:x,startOpen:b,onCollapse:k}){var Q,B,Y;const S=a??e.headline;if(m)return r.jsx(em,{$last:i,$dim:!0,children:r.jsxs(ui,{as:"div",children:[l,r.jsx(tm,{children:S})]})});const _=!!((Q=e.blocks)!=null&&Q.length),C=!!p,N=!d||!!e.defaultOpen||!!b,[$,M]=g.useState(null),j=!!k,O=j?!0:$??N,L=d&&(_||C),R=!j&&L&&(!s||!!v),I=R&&!!v&&!!((B=e.progress)!=null&&B.length),z=()=>M(()=>!O),W=_&&(j||!d||O),G=C&&(j||!d||O);return r.jsxs(em,{$last:i,children:[r.jsxs(ui,{as:j||L?"button":"div",type:j||L?"button":void 0,$interactive:j||R,"aria-expanded":j?!0:R?O:void 0,onClick:j?k:R?z:void 0,children:[l,r.jsx(tm,{$focused:!!v,children:S}),R&&!v&&r.jsx(JM,{"data-open":O||void 0,"aria-hidden":"true",children:r.jsx(fn,{size:14})})]}),(Y=e.progress)!=null&&Y.length?r.jsx(nR,{$indent:!!l,children:r.jsxs(eR,{children:[I&&r.jsx(tR,{type:"button","aria-expanded":O,"aria-label":O?"Hide details":"Show details",onClick:z,children:O?r.jsx(Iu,{size:16}):r.jsx(mo,{size:16})}),r.jsx(LM,{steps:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,live:!!(s||v),beat:y,superseded:x,showAvatars:O||s||v})]})}):null,W&&r.jsx(dR,{$indent:!!l,children:e.blocks.map((ee,oe)=>r.jsxs(uR,{children:[ee.text&&r.jsx(pR,{children:s?r.jsx(Ju,{text:ee.text}):ee.text}),ee.label&&r.jsx(hR,{children:ee.label}),ee.bullets&&r.jsx(gR,{children:ee.bullets.map((le,re)=>r.jsx("li",{children:le},re))}),ee.checks&&r.jsx(vR,{children:ee.checks.map((le,re)=>r.jsxs("li",{children:[r.jsx(xR,{"aria-hidden":"true"}),r.jsx("span",{children:le})]},re))}),ee.records&&r.jsx(MM,{records:ee.records})]},oe))}),G&&r.jsx(BM,{$indent:!!l,children:p})]})}const RM=1350;function LM({steps:e,avatars:a,avatarsOnSettle:i,reached:s,live:l,showAvatars:d,beat:p,superseded:m}){const v=e.length-1,y=typeof p=="number",[x,b]=g.useState(l?0:v),k=g.useRef(l);g.useEffect(()=>{l&&!k.current&&(k.current=!0,b(0))},[l]),g.useEffect(()=>{if(y||!k.current||x>=v)return;const N=setTimeout(()=>b($=>Math.min($+1,v)),RM);return()=>clearTimeout(N)},[x,v,y]),g.useEffect(()=>{typeof p=="number"&&b(Math.min(p,v))},[p,v]);const S=typeof p=="number"?Math.min(p,v):x,_=S>=v,C=_&&!l;return r.jsxs(rR,{children:[r.jsx(aR,{$done:C,$live:l,$superseded:m,"aria-live":"polite",children:l?r.jsx(Ju,{text:e[S],caret:!1,speed:26}):e[S]},S),d&&(i?_:_||l)&&(a!=null&&a.length)?r.jsx(AM,{seeds:a,total:s}):null]})}const Yf=90;function AM({seeds:e,total:a,max:i=5}){const s=e.slice(0,i),l=Math.max(a??0,e.length),d=l-s.length;return r.jsxs(iR,{"aria-label":`${l} people reached`,children:[s.map((p,m)=>r.jsx(sR,{style:{zIndex:s.length-m,animationDelay:`${m*Yf}ms`},children:r.jsx(Wn,{size:"sm",src:da(p),name:p,alt:""})},p)),d>0&&r.jsxs(lR,{"aria-hidden":"true",style:{animationDelay:`${s.length*Yf}ms`},children:["+",d]})]})}const $M=f.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,TM=Se`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,kl=qe`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,IM=f.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${TM} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${e=>e.$animate===!1&&"animation: none;"}

  ${kl}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,EM=f.span``,PM=f.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. The top padding
     is constant so the first row (the collapse toggle) holds its vertical position
     when the group opens/closes — expanding no longer nudges the accordion down.
     Only the bottom padding tightens for a fully-folded (superseded) recap line. */
  padding-top: var(--space-3);
  padding-bottom: ${e=>e.$compact?"var(--space-1)":"var(--space-3)"};
`,Kf=f.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${e=>e.$last?"0":e.$connected?e.$tight?"var(--space-3)":"var(--space-5)":e.$tight?"0":"var(--space-3)"};
`,zM=Se`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,OM=f.span`
  position: absolute;
  /* Centered on the 32px icon column. */
  left: calc(var(--space-8) / 2);
  top: calc(var(--space-8) + var(--space-1));
  /* Extend down across the inter-row gap — matched to this connected row's gap (tight
     vs generous) — stopping a touch short of the next step's icon so it reads as
     connecting the two. */
  bottom: ${e=>e.$tight?"calc(var(--space-1) - var(--space-3))":"calc(var(--space-1) - var(--space-5))"};
  pointer-events: none;

  ${e=>e.$state==="working"?qe`
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
      `:e.$state==="upcoming"?qe`
        width: 0;
        border-left: 1.5px dashed var(--color-border-opaque);
      `:qe`
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
`,DM=f.div`
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
`,FM=f.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,BM=f.div`
  padding-top: var(--space-2);
  padding-left: ${e=>e.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,Qf=f(Te)`
  &[data-active] { color: var(--color-content-brand); }
`;function Ju({text:e,onDone:a,speed:i=30,caret:s=!0}){const[l,d]=g.useState(0);g.useEffect(()=>{d(0)},[e]),g.useEffect(()=>{if(l>=e.length)return;const m=setTimeout(()=>d(v=>v+1),i);return()=>clearTimeout(m)},[l,e,i]);const p=l>=e.length;return g.useEffect(()=>{p&&(a==null||a())},[p]),r.jsxs(r.Fragment,{children:[e.slice(0,l),s&&r.jsx(HM,{$blink:p,"aria-hidden":"true"}),!p&&r.jsx(UM,{"aria-hidden":"true",children:e.slice(l)})]})}const WM=Se`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,HM=f.span`
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
`,UM=f.span`
  opacity: 0;
`,qM=f.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,VM=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,Zf=f.span`
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
`,YM=f.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${GM} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,p2=f.button`
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
`,Xf=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  /* The collapse toggle always reads in the quiet disabled tone — it's a recap
     affordance, not a step, so it stays out of the way of the live trail. */
  color: var(--color-content-disabled);
`,KM=f.span`
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

  ${p2}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,QM=Se`
  to { transform: rotate(360deg); }
`,Jf=56.5,ZM=f.svg`
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
    stroke-dasharray: ${Jf};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${e=>e.$loading?Jf*.7:0};
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
`,XM=f.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,em=f.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${e=>e.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,ui=f.div`
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
`,tm=f.span`
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

  ${ui}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,JM=f.span`
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
`,eR=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,tR=f.button`
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
`,nR=f.div`
  padding-left: ${e=>e.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,rR=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
`,oR=Se`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,aR=f.div`
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
  ${e=>e.$live&&qe`
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
`,iR=f.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,h2=Se`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,sR=f.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${h2} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,lR=f.span`
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
  animation: ${h2} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,cR=Se`
  from { opacity: 0; }
  to   { opacity: 1; }
`,dR=f.div`
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
`,uR=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,pR=f.p`
  margin: 0;
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,hR=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,fR=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,mR=f.button`
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
`,gR=f.ul`
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
`,vR=f.ul`
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
`,xR=f.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function yR({size:e=20}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const wR=160,f2=g.forwardRef(function({onSend:a,working:i=!1,onStop:s,placeholder:l="Message Ultron…",compact:d=!1},p){const[m,v]=g.useState(""),y=g.useRef(null),x=m.trim().length>0;g.useImperativeHandle(p,()=>({focus:()=>{var C;return(C=y.current)==null?void 0:C.focus()}}),[]);const b=()=>{const C=y.current;C&&(C.style.height="auto",C.style.height=`${Math.min(C.scrollHeight,wR)}px`)},k=()=>{!x||i||(a(m),v(""),requestAnimationFrame(()=>{const C=y.current;C&&(C.style.height="auto")}))},S=C=>{C.preventDefault(),k()},_=C=>{C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),k())};return r.jsxs(bR,{onSubmit:S,$compact:d,children:[r.jsx(kR,{ref:y,rows:1,value:m,placeholder:l,"aria-label":"Message Ultron",$compact:d,onChange:C=>{v(C.target.value),b()},onKeyDown:_}),i?r.jsx(nm,{$float:!0,type:"button",variant:"primary",size:d?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:s,children:r.jsx(yR,{size:d?16:20})}):r.jsx(nm,{type:"submit",variant:"primary",size:d?"xs":"sm",iconOnly:!0,disabled:!x,"aria-label":"Send message",children:r.jsx(fl,{size:d?14:18})})]})}),bR=f.form`
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
`,kR=f.textarea`
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
`,nm=f(Te)`
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
`,rm=450;function ep(e,a){var _;const i=e.status==="needs_approval"||e.status==="recommended",s=i||e.status==="unresolved"||e.status==="monitoring",l=Yu[e.id],d=a===1&&!!l,p=d?l.prompt:n2[e.id]??e.recommendation,m=d?l.record:aN[e.id],v=m?Array.isArray(m)?m:[m]:[],y=e.status==="unresolved"?WS:d?l.actions:e.actions,x=i&&(!d&&(((_=Ku[e.id])==null?void 0:_.length)??0)>1||HS(p)),b=x?US:y[y.length-1],k=x?[]:y.slice(0,-1),S=Yg(e);return{needsDecision:i,actionable:s,onFollowUp:d,followUp:l,prompt:p,records:v,primaryLabel:b,secondaryLabels:k,purple:S}}function om({thread:e,stage:a,expanded:i,detachActionable:s,detachAnalyzing:l,detachTrail:d,onToggle:p,onClose:m,onDecide:v,onAction:y,onRefinement:x,onSaveWorkflow:b}){const[k,S]=g.useState(!1),[_,C]=g.useState(!1),{actionable:N,prompt:$,records:M,primaryLabel:j,purple:O}=ep(e,a),R=e.status==="analyzing"&&!l,I=e.status==="resolved"||e.status==="auto_resolved",z=!s&&(N||O),W=I&&!d,G=s?R:N||R||z,Q=i&&(G||W),B=bl(e),ee=Xg(e.id)||(Q?"":e.assessment),oe=le=>{Kg(le)?x(le):y(e.id,le)};return r.jsxs(ER,{"data-tone":B,$expanded:i,children:[r.jsxs(FR,{children:[r.jsxs(WR,{type:"button","aria-expanded":Q,"aria-label":Q?"Collapse case":"Expand case",onClick:p,children:[r.jsx(Wn,{size:"md",src:Gu(e.id),name:aa[e.id],alt:aa[e.id]??""}),r.jsxs(w2,{children:[r.jsx(b2,{children:Jg(e)}),ee&&r.jsx(k2,{children:ee})]})]}),r.jsx(BR,{variant:"ghost",size:m?"sm":"xs",iconOnly:!0,"aria-label":m?"Open record":Q?"Collapse case":"Expand case",tabIndex:m?void 0:-1,onClick:m??p,children:m?r.jsx(ml,{size:20}):Q?r.jsx(Js,{size:16}):r.jsx(Iu,{size:16})})]}),Q&&W&&r.jsx(HR,{children:r.jsx(UR,{children:r.jsx(_M,{milestones:r2(e)})})}),Q&&G&&r.jsxs(qR,{children:[N&&!s&&r.jsx(_l,{children:$}),N&&!s&&M.length>0&&r.jsx(sL,{children:M.map((le,re)=>r.jsx(s2,{record:le},re))}),R&&r.jsx(_2,{role:"status","aria-live":"polite",children:r.jsx(SR,{thread:e,onDecide:v})}),z&&r.jsxs(tp,{children:[N&&j&&r.jsx(uo,{variant:"primary",size:"sm",onClick:()=>oe(ol),children:ol}),N&&r.jsx(uo,{variant:"tertiary",size:"sm",onClick:()=>x("No"),children:"No"}),N&&r.jsx(N2,{variant:"tertiary",size:"sm","data-selected":_||void 0,onClick:()=>{C(!0),x("Other")},children:"Other"}),O&&(k?r.jsx(Te,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(hn,{size:14}),children:"Saved"}):r.jsx(Te,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(fo,{size:14}),onClick:()=>{b(e),S(!0)},children:"Save as workflow"}))]})]})]})}function am({text:e,speed:a=16,onDone:i,instant:s=!1}){const[l,d]=g.useState(!1);return g.useEffect(()=>{d(!1)},[e]),g.useEffect(()=>{s&&(i==null||i())},[s]),s||l?r.jsx(r.Fragment,{children:e}):r.jsx(Ju,{text:e,speed:a,onDone:()=>{d(!0),i==null||i()}})}function m2({thread:e,stage:a,onAction:i,onRefinement:s,onSaveWorkflow:l,saved:d=!1,saveIntent:p=!1,onToggleSaveWorkflow:m,savedConversationally:v=!1,onSend:y,replying:x=!1,onStop:b,flat:k=!1}){const S=d||p,[_,C]=g.useState(!1),[N,$]=g.useState(!1),[M]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),[j,O]=g.useState(!1),[L,R]=g.useState(!1),I=g.useRef(null);g.useEffect(()=>{var V;L&&((V=I.current)==null||V.focus())},[L]);const z=d||v||j,{actionable:W,onFollowUp:G,prompt:Q,records:B,primaryLabel:Y,purple:ee}=ep(e,a),oe=W&&!G?Ku[e.id]??Qg(Q).map(V=>({label:V})):void 0,le=e.status==="resolved"||e.status==="auto_resolved",re=ee||le,X=V=>{Kg(V)?s(V):i(e.id,V)},D=W&&!(oe&&oe.length>0)&&B.length>0?B[0]:void 0;if(re&&!W){const V=i2[e.id],E=_||!V,A=d&&!v&&!j;return r.jsxs(xL,{$divided:!0,children:[V&&r.jsx(yL,{children:r.jsx(am,{text:V,onDone:()=>C(!0),instant:M})}),E&&!A&&r.jsxs(Qo,{$saved:z,"data-saved":z||void 0,children:[r.jsxs(M2,{children:[r.jsx(R2,{"aria-hidden":"true",children:r.jsx(fo,{size:16})}),r.jsx(L2,{children:r.jsx(am,{text:"Want me to save this as a reusable workflow?",onDone:()=>$(!0),instant:M})})]}),N&&r.jsx(A2,{children:z?r.jsx(uo,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:r.jsx(hn,{size:14}),children:"Saved"}):r.jsx(uo,{variant:"primary",size:"sm",onClick:()=>{O(!0),l(e)},children:"Save workflow"})})]}),E&&A&&r.jsx(v2,{})]})}return r.jsxs(DR,{$flat:k,"data-tone":bl(e),children:[W&&r.jsxs(x2,{children:[r.jsx(_l,{children:Q}),D&&r.jsx(y2,{children:r.jsx(Wn,{size:"md",src:da(D.avatarSeed),name:D.title,alt:D.title})})]}),oe&&oe.length>0?r.jsx(g2,{tasks:oe}):null,r.jsxs(tp,{children:[W&&Y&&r.jsx(uo,{variant:L?"secondary":"primary",size:"sm",onClick:()=>X(ol),children:ol}),W&&r.jsx(uo,{variant:L?"secondary":"tertiary",size:"sm",onClick:()=>s("No"),children:"No"}),W&&r.jsx(N2,{variant:"tertiary",size:"sm","data-selected":L||void 0,onClick:()=>R(!0),children:"Other"}),W&&!G&&r.jsx(vL,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":S,"data-on":S||void 0,leadingArtwork:S?r.jsx(hn,{size:14}):r.jsx(fo,{size:14}),onClick:()=>{d||m==null||m(e.id)},children:"Save as future workflow"})]}),W&&L&&r.jsx(gL,{children:r.jsx(f2,{ref:I,compact:!0,onSend:V=>y==null?void 0:y(V),working:x,onStop:b,placeholder:"Tell Ultron what to do…"})})]})}function _R({thread:e,stage:a,expanded:i,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:p,saveIntent:m=!1,saved:v=!1}){const y=bl(e),x=Xg(e.id)||e.assessment;return r.jsxs(PR,{"data-tone":y,$expanded:i,children:[r.jsxs(zR,{$expanded:i,children:[r.jsx(Wn,{size:"md",src:Gu(e.id),name:aa[e.id],alt:aa[e.id]??""}),r.jsxs(w2,{children:[r.jsx(b2,{children:Jg(e)}),x&&r.jsx(k2,{children:x})]})]}),i&&r.jsx(OR,{children:r.jsx(m2,{flat:!0,thread:e,stage:a,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:p,saveIntent:m,saved:v})})]})}function g2({tasks:e,interactive:a=!0}){return r.jsx(lL,{children:e.map((i,s)=>r.jsx(CR,{task:i,first:s===0,last:s===e.length-1,interactive:a},s))})}function CR({task:e,first:a,last:i,interactive:s=!0}){const[l,d]=g.useState(!1),p=!!e.detail&&s;return r.jsxs(cL,{children:[r.jsx(dL,{"data-first":a||void 0,"data-last":i||void 0,"aria-hidden":"true",children:r.jsx(uL,{})}),r.jsxs(pL,{children:[r.jsxs(hL,{as:p?"button":"div",type:p?"button":void 0,$interactive:p,"aria-expanded":p?l:void 0,onClick:p?()=>d(m=>!m):void 0,children:[r.jsx(j2,{children:e.label}),p&&r.jsx(fL,{"data-open":l||void 0,"aria-hidden":"true",children:r.jsx(fn,{size:14})})]}),l&&p&&r.jsx(mL,{children:e.detail})]})]})}function jR({steps:e,completed:a}){const[i,s]=g.useState(a?e.length:1);g.useEffect(()=>{if(a){s(e.length);return}if(i>=e.length)return;const d=setTimeout(()=>s(p=>p+1),1600);return()=>clearTimeout(d)},[i,e.length,a]);const l=e.slice(0,i);return r.jsx(ZR,{role:"status","aria-live":"polite",children:l.map((d,p)=>{const m=!a&&p===i-1,v=p===l.length-1;return r.jsxs(JR,{children:[r.jsxs(eL,{children:[r.jsx(aL,{$done:!m,"aria-hidden":"true",children:m?r.jsx(iL,{children:r.jsx(mt,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):r.jsx(hn,{size:16})}),!v&&r.jsx(tL,{})]}),r.jsxs(nL,{$last:v,children:[r.jsx(rL,{children:d.headline}),r.jsx(oL,{children:d.detail})]})]},p)})})}function SR({thread:e,onDecide:a,analyzed:i,hideDetail:s,hideTrigger:l}){const[d,p]=g.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(VR,{as:"button",type:"button",$interactive:!0,"aria-expanded":d,onClick:()=>p(m=>!m),children:[r.jsx(mt,{mark:"orbit",size:40,tone:"auto",state:i?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),r.jsxs(YR,{children:[r.jsx(KR,{children:i?"Ultron analyzed this event":"Ultron is analyzing this event"}),!s&&r.jsx(QR,{children:e.assessment})]}),r.jsx(GR,{"data-open":d||void 0,"aria-hidden":"true",children:r.jsx(fn,{size:14})})]}),d&&r.jsx(jR,{steps:t2(e.id),completed:i}),!i&&!l&&r.jsx(C2,{variant:"secondary",size:"sm",onClick:()=>a(e.id),children:"Trigger Needs approval (demo)"})]})}function NR({thread:e,onDecide:a}){return r.jsx(C2,{variant:"secondary",size:"sm",onClick:()=>a(e.id),children:"Trigger Needs approval (demo)"})}function Id(e,a){return{icon:e.icon,headline:e.headline,blocks:e.detail||e.bullets?[{text:e.detail||void 0,bullets:e.bullets}]:void 0,progress:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,usage:a2(a,vN(e))}}function MR(e,a){const i=a2(a,["read","match","policy","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:e.map(s=>`${s.headline} — ${s.detail}`)}],usage:i}}function RR(e,a){const i=r2(e),s=e.timeline.filter(b=>b.done).length,l=s>0?Math.min(s,i.length):i.length,d=[MR(t2(e.id),e.id),...i.slice(0,l)],p=d.length;if(a.length===0){const b=d.map(k=>({kind:"activity",milestone:k}));return(e.status==="in_progress"||e.status==="monitoring")&&(Tf[e.id]??[]).map(k=>Id(k,e.id)).forEach(k=>b.push({kind:"activity",milestone:k})),{items:b,reasoningCount:p}}const m=Yu[e.id],v=[(Tf[e.id]??[]).map(b=>Id(b,e.id)),((m==null?void 0:m.working)??[]).map(b=>Id(b,e.id))],y=b=>b===1&&m?m.prompt:n2[e.id]??e.recommendation,x=d.slice(0,p).map(b=>({kind:"activity",milestone:b}));return a.forEach((b,k)=>{x.push({kind:"question",text:y(k)}),x.push({kind:"message",text:b}),(v[k]??[]).forEach(S=>x.push({kind:"activity",milestone:S})),x.push({kind:"reply",text:yN(k)})}),{items:x,reasoningCount:p}}function LR({thread:e,outbound:a=[],chat:i=[],replying:s=!1,analyzing:l=!1,actionCard:d,footSlot:p,onCompleteRun:m,saveWorkflowFlagged:v=!1}){const y=e.status==="in_progress"||e.status==="monitoring",x=e.status==="resolved"||e.status==="auto_resolved",{items:b,reasoningCount:k}=RR(e,a),S=l||e.status==="in_progress",[_,C]=g.useState(l?Math.min(1,k):S?k:b.length),[N]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),$=a.length>0||y||x?b.length:k,M=e.status==="in_progress"&&a.length>0,[j,O]=g.useState(0);g.useEffect(()=>{O(0)},[_]),g.useEffect(()=>{if(_>=$)return;const H=b[_],T=b[_-1];if((H==null?void 0:H.kind)==="question"||(H==null?void 0:H.kind)==="message"){const ce=setTimeout(()=>C(me=>me+1),0);return()=>clearTimeout(ce)}if((H==null?void 0:H.kind)==="reply"){if(M)return;const ce=setTimeout(()=>C(me=>me+1),rm);return()=>clearTimeout(ce)}if(M&&(T==null?void 0:T.kind)!=="message")return;const ne=(T==null?void 0:T.kind)==="message"?rm:Df,fe=setTimeout(()=>C(ce=>ce+1),ne);return()=>clearTimeout(fe)},[_,$,M]),g.useEffect(()=>{if(!M)return;const H=T=>{var we;if(T.key!=="t"&&T.key!=="T"||T.metaKey||T.ctrlKey||T.altKey)return;const ne=T.target instanceof Element?T.target:null;if(ne&&ne.closest('input, textarea, [contenteditable="true"]'))return;const fe=b[_-1],ce=(fe==null?void 0:fe.kind)==="activity"?((we=fe.milestone.progress)==null?void 0:we.length)??0:0;if((fe==null?void 0:fe.kind)==="activity"&&j<ce-1){O(xe=>xe+1);return}const me=b[_];(me==null?void 0:me.kind)==="activity"?(C(xe=>xe+1),O(0)):m==null||m()};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[M,_,j,m]);const L=b.slice(0,_),R=[];for(const H of L){if(H.kind==="question"){R.push({type:"question",text:H.text});continue}if(H.kind==="message"){R.push({type:"msg",text:H.text});continue}if(H.kind==="reply"){R.push({type:"reply",text:H.text});continue}const T=R[R.length-1];T&&T.type==="acts"?T.milestones.push(H.milestone):R.push({type:"acts",milestones:[H.milestone]})}const I=_<b.length,z=L.length>0&&L[L.length-1].kind==="activity",W=_>=$,[G,Q]=g.useState(!1);g.useEffect(()=>{if(!(W&&z&&(y||l)&&!x)){Q(!1);return}Q(!0);const H=setTimeout(()=>Q(!1),Df);return()=>clearTimeout(H)},[W,z,_,y,l,x]);const B=(y||l)&&(I||G)&&z;let Y=-1;R.forEach((H,T)=>{H.type==="acts"&&(Y=T)});const ee=[];for(const H of b){if(H.kind!=="activity"){ee.push({type:"other"});continue}const T=ee[ee.length-1];T&&T.type==="acts"?T.milestones.push(H.milestone):ee.push({type:"acts",milestones:[H.milestone]})}let oe=-1;ee.forEach((H,T)=>{H.type==="acts"&&(oe=T)});const le=R.findIndex(H=>H.type==="acts"),re=(H,T,ne=T)=>{const fe=R[H],ce=(l||e.status==="in_progress")&&H===oe,me=ee[H],we=ce&&me&&me.type==="acts"?me.milestones:fe.milestones,xe=ce?fe.milestones.length-1:void 0;return r.jsx(c2,{milestones:we,focusIndex:xe,focusBeat:ce&&M?j:void 0,typingIndex:H===oe&&B?fe.milestones.length-1:void 0,collapsed:H<Y,hideActions:ne,running:ce,showConnectors:H!==le,reasoning:H===le,animateIn:!T&&!N})},X=[];for(let H=0;H<R.length;H++){const T=R[H];if(T.type==="question"){X.push({kind:"question",text:T.text});continue}if(T.type==="msg"){X.push({kind:"msg",text:T.text});continue}if(T.type==="reply"){X.push({kind:"response",gi:-1,text:T.text});continue}const ne=R[H+1];ne&&ne.type==="reply"?(X.push({kind:"response",gi:H,text:ne.text}),H++):X.push({kind:"acts",gi:H})}const V=(l||e.status==="in_progress")&&Y>=0||s,E=L.length>0,A=s||y,q=(()=>{for(let H=X.length-1;H>=0;H--){const T=X[H];if(T.kind==="acts"||T.kind==="response"&&T.gi>=0)return H}return-1})(),Z=X.findIndex(H=>H.kind==="question"),ie=Z===le+1?Z:-1,ue=H=>H.kind==="acts"?Qn(R[H.gi].milestones):H.kind==="response"?Qn(H.gi>=0?R[H.gi].milestones:[]):Qn([]);return r.jsxs(r.Fragment,{children:[X.map((H,T)=>{var me,we;const ne=T===q?d:null;if(H.kind==="question"){if(T===ie)return null;const xe=X[T-1],Re=!!xe&&(xe.kind==="acts"||xe.kind==="response")&&T-1!==q,ze=T===Z;return r.jsxs(Pd,{children:[ze?r.jsx(im,{thread:e,saveWorkflowFlagged:v}):r.jsx(TR,{text:H.text,animate:!N}),Re&&r.jsx(Yo,{time:ue(xe)})]},`q${T}`)}if(H.kind==="msg")return r.jsx(IR,{messages:[H.text],animate:!N},`m${T}`);if(H.kind==="acts"){const xe=R[H.gi].milestones,Re=((me=X[T+1])==null?void 0:me.kind)==="question",ze=re(H.gi,!1,!!ne||Re),Ve=T===le,Oe=ne||(Ve&&T+1===ie?r.jsx(im,{thread:e,saveWorkflowFlagged:v}):null);return Ve&&Oe?r.jsxs($L,{children:[ze,Oe,r.jsx(Yo,{time:Qn(xe)})]},`a${T}`):r.jsxs(g.Fragment,{children:[ze,ne&&r.jsxs(Pd,{children:[ne,r.jsx(Yo,{time:Qn(xe)})]})]},`a${T}`)}const fe=H.gi>=0,ce=fe?R[H.gi].milestones:[];return r.jsxs(g.Fragment,{children:[r.jsx(uu,{activity:fe?re(H.gi,!0):void 0,text:H.text,feedbackTime:ne||((we=X[T+1])==null?void 0:we.kind)==="question"?void 0:Qn(ce),showMark:!1,animateIn:!1}),ne&&r.jsxs(Pd,{children:[ne,r.jsx(Yo,{time:Qn(ce)})]})]},`resp${T}`)}),r.jsx(AR,{messages:i,replying:s}),p&&fi.createPortal(E?r.jsxs(NL,{role:A?"status":"img","aria-label":s?"Ultron is replying":V?"Ultron is working":"Ultron",children:[r.jsxs(LL,{"aria-hidden":"true",children:[r.jsx(sm,{$show:V,children:r.jsx(mt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),r.jsx(sm,{$show:!V,children:r.jsx(mt,{mark:"magnetic2d",size:24,tone:"auto",state:A?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),V&&r.jsx(RL,{children:s?"Replying…":r.jsx(jM,{})})]}):null,p),q<0&&d]})}function uu({activity:e,text:a,body:i,feedbackTime:s,active:l=!1,showMark:d=!0,animateIn:p=!0}){const m=!!(e||i||s);return r.jsxs(AL,{children:[m&&r.jsxs(TL,{$animate:p,children:[e,i,s&&r.jsx(Yo,{time:s})]}),d&&r.jsx(IL,{$animate:p,role:l?"status":"img","aria-label":l?"Ultron is working":"Ultron",children:r.jsx(mt,{mark:"magnetic2d",size:24,tone:"auto",state:l?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function Ed(){return[{icon:"clock",headline:"Reviewed your message"}]}function AR({messages:e,replying:a=!1}){return!e.length&&!a?null:r.jsx(SL,{children:e.map((i,s)=>i.role==="operator"?r.jsx($2,{children:r.jsx(I2,{children:r.jsx(E2,{children:i.text})})},s):i.kind==="workflow_saved"?r.jsx(uu,{body:r.jsx($R,{}),feedbackTime:Qn(Ed()),showMark:!1},s):r.jsx(uu,{activity:r.jsx(c2,{milestones:Ed(),collapsed:!0,hideActions:!0}),text:i.text,feedbackTime:Qn(Ed()),showMark:!1},s))})}function $R(){return r.jsx(v2,{})}function v2(){return r.jsxs(Qo,{children:[r.jsxs(M2,{children:[r.jsx(R2,{"aria-hidden":"true",children:r.jsx(fo,{size:16})}),r.jsx(L2,{children:"Workflow saved for future use."})]}),r.jsx(A2,{children:r.jsx(uo,{variant:"secondary",size:"sm",trailingArtwork:r.jsx(ml,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function TR({text:e,animate:a=!0}){return r.jsx(bL,{$animate:a,children:e})}function im({thread:e,saveWorkflowFlagged:a=!1}){const{prompt:i,records:s}=ep(e,0),l=Ku[e.id]??Qg(i).map(p=>({label:p})),d=!(l&&l.length>0)&&s.length>0?s[0]:void 0;return r.jsxs(kL,{"data-tone":bl(e),children:[r.jsxs(x2,{children:[r.jsx(_l,{children:i}),a?r.jsx(pr,{content:"Saved as workflow",children:r.jsx(_L,{"aria-label":"Saved as workflow",children:r.jsx(fo,{size:18})})}):d&&r.jsx(y2,{children:r.jsx(Wn,{size:"md",src:da(d.avatarSeed),name:d.title,alt:d.title})})]}),l&&l.length>0?r.jsx(g2,{tasks:l,interactive:!1}):null]})}function IR({messages:e,animate:a=!0}){return e.length?r.jsx(CL,{children:e.map((i,s)=>r.jsx($2,{children:r.jsx(I2,{$animate:a,children:r.jsx(E2,{children:i})})},s))}):null}const ER=f.div`
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
`,PR=f.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow var(--duration-base) var(--ease-out),
              transform var(--duration-base) var(--ease-out),
              background-color var(--duration-base) var(--ease-out);

  ${e=>e.$expanded?qe`
        background: var(--color-bg-primary);
        border: 1px solid var(--color-border-opaque);
        box-shadow: var(--shadow-below-md);
      `:qe`
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
`,zR=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  ${e=>e.$expanded&&qe`
    border-bottom: 1px solid var(--color-border-opaque);
  `}
`,OR=f.div`
  padding: var(--space-4);
`,DR=f.div`
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
  ${e=>e.$flat&&qe`
    border: none;
    box-shadow: none;
    background: transparent;
    border-radius: 0;
    padding: 0;
    &:hover { transform: none; box-shadow: none; }
  `}
`,x2=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,y2=f.span`
  flex-shrink: 0;
  display: inline-flex;
`,FR=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  /* Extra breathing room above the title; the bottom stays tight to the body. */
  padding: var(--space-4) 0 var(--space-2);
`,BR=f(Te)`
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
`,WR=f.button`
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
`,w2=f.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,b2=f.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,k2=f.span`
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
`,HR=f.div`
  overflow: hidden;
`,UR=f.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,qR=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,_2=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`,VR=f.div`
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
`,GR=f.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;f(_2)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const YR=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,KR=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,QR=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,ZR=f.div`
  display: flex;
  flex-direction: column;
`,XR=Se`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,JR=f.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${XR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,eL=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,tL=f.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,nL=f.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
`,rL=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,oL=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,aL=f.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${e=>e.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,iL=f.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,C2=f(Te)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,sL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,lL=f.div`
  display: flex;
  flex-direction: column;
`,sl="var(--space-8)",cL=f.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,dL=f.div`
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
  &[data-first]::before { top: calc(${sl} / 2); }
  &[data-last]::before { bottom: calc(100% - ${sl} / 2); }
  &[data-first][data-last]::before { display: none; }
`,uL=f.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${sl} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-slate-border-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`,pL=f.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,hL=f.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${sl};
  cursor: ${e=>e.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,j2=f.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,fL=f.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,mL=f.p`
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
`,_l=f.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,S2=Se`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,tp=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${S2} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,gL=f.div`
  animation: ${S2} var(--duration-slow) var(--ease-out);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,uo=f(Te)`
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
`,N2=f(Te)`
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
`,vL=f(Te)`
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
`,xL=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${e=>e.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,yL=f.p`
  margin: 0;
  max-width: 80%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,Qo=f.div`
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

  ${e=>!e.$saved&&qe`
    &:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-below-md);
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`,M2=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,R2=f.span`
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
  ${Qo}:not([data-saved]):hover & { color: var(--color-content-inverse); }
  ${Qo}:not([data-saved]):hover &::after { opacity: 1; }

  /* Saved (settled) card: the glyph quiets to the disabled tone alongside its
     label and button. */
  ${Qo}[data-saved] & { color: var(--color-content-disabled); }
`,L2=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);

  /* Saved (settled) card: the label quiets to the disabled tone alongside the
     glyph and button. */
  ${Qo}[data-saved] & { color: var(--color-content-disabled); }
`,A2=f(tp)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,wL=Se`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,bL=f.p`
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
`,kL=f.div`
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
  ${j2} { color: var(--color-content-disabled); }
`,_L=f.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`,CL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,$2=f.div`
  display: flex;
  justify-content: flex-end;
`,np=Se`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,T2=Se`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,jL=Se`
  from { opacity: 0; }
  to   { opacity: 1; }
`,I2=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: 16px;
  animation: ${np} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,E2=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,SL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;f.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const NL=f.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${T2} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ML=Se`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,RL=f.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${ML} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,LL=f.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,sm=f.span`
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
`,AL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${kl}
`,Pd=f.div`
  display: contents;
  ${kl}
`,$L=f.div`
  display: flex;
  flex-direction: column;
  ${kl}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`,TL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${jL} 380ms var(--ease-out) 160ms both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,IL=f.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${T2} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${np} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
  animation: ${np} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
`;const EL={"Coverage Recovery":lo,"Fill Optimization":lo,Recruiting:lo,Users:lo,Attendance:Cn,"Attendance Recovery":Cn,"Time Off":Cn,Scheduling:Cn,Compliance:vi,Onboarding:co,"Payroll Operations":E0,Invoicing:Or,Reporting:cf,"Marketplace Optimization":cf,Engagement:el,"Autonomous Operations":hl},PL=e=>EL[e]??hl,lm=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],zL=2800,OL=200,DL=6,FL=2200,oi=520;function BL({onDetectRisk:e,deckActive:a=!1,deck:i}){const[s,l]=g.useState(0),d=g.useRef(e);d.current=e;const p=g.useRef(new Set),[m,v]=g.useState(!1),y=g.useRef(null);g.useEffect(()=>{const L=setInterval(()=>l(R=>(R+1)%lm.length),zL);return()=>clearInterval(L)},[]);const x=Math.min(DL,zs.length),[b,k]=g.useState([]),S=g.useRef(0),_=g.useRef(zs.filter(L=>!L.risk)),C=g.useRef(zs.filter(L=>L.risk)),N=g.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),$=()=>5+Math.floor(Math.random()*5),M=()=>{const L=N.current,R=C.current;if(R.length>0&&L.sinceRisk>=L.gap)return L.sinceRisk=0,L.gap=$(),R[L.risk++%R.length];L.sinceRisk+=1;const I=_.current;return I.length>0?I[L.routine++%I.length]:R[L.risk++%R.length]},j=L=>L.risk?"risk":Math.random()<.28?"action":"none",O=g.useRef(null);return g.useEffect(()=>{if(zs.length===0){k([]);return}if(a)return;N.current={routine:0,risk:0,sinceRisk:0,gap:$()},S.current=0;const L=Array.from({length:x},()=>{const z=M();return{key:S.current++,event:z,phase:"in",outcome:j(z),resolved:!0}});if(L.length>0){const z=L[L.length-1];z.resolved=!1,O.current={key:z.key,event:z.event,outcome:z.outcome}}else O.current=null;k(L);const R=[],I=setInterval(()=>{var B;const z=M(),W=S.current++,G=j(z),Q=O.current;Q&&Q.outcome==="risk"&&(v(!0),y.current&&clearTimeout(y.current),y.current=setTimeout(()=>v(!1),2800),p.current.has(Q.event.id)||(p.current.add(Q.event.id),(B=d.current)==null||B.call(d,Q.event))),O.current={key:W,event:z,outcome:G},k(Y=>{const ee=Y.filter(re=>re.phase!=="leaving"),oe=ee.length>=x?ee[0].key:null;return[...Y.map(re=>re.key===oe?{...re,phase:"leaving"}:Q&&re.key===Q.key&&!re.resolved?{...re,resolved:!0}:re),{key:W,event:z,phase:"entering",outcome:G,resolved:!1}]}),R.push(setTimeout(()=>{k(Y=>Y.map(ee=>ee.key===W?{...ee,phase:"in"}:ee))},40)),R.push(setTimeout(()=>{k(Y=>Y.filter(ee=>ee.phase!=="leaving"))},oi))},FL);return()=>{clearInterval(I),R.forEach(clearTimeout),y.current&&clearTimeout(y.current)}},[x,a]),r.jsxs(WL,{children:[r.jsxs(HL,{children:[r.jsx(UL,{children:r.jsx(mt,{mark:"circle",size:OL,tone:"auto",state:"active",coreGradient:m,"aria-label":"Ultron"})}),r.jsx(qL,{children:"Ultron"}),r.jsx(VL,{role:"status","aria-live":"polite",children:r.jsxs(YL,{children:[r.jsx(KL,{children:lm[s]}),r.jsxs(QL,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]},s)})]}),a?r.jsx(XL,{children:i},"deck"):b.length>0&&r.jsx(ZL,{"aria-label":"Live event feed",children:b.map(L=>{const R=PL(L.event.capability);return r.jsx(JL,{"data-phase":L.phase,"aria-hidden":L.phase==="leaving"||void 0,children:r.jsx(eA,{children:r.jsxs(tA,{"data-outcome":L.resolved?L.outcome:"pending",children:[r.jsxs(nA,{children:[r.jsx(rA,{"aria-hidden":"true",children:r.jsx(R,{size:16})}),r.jsxs(oA,{children:[r.jsx(cA,{children:L.event.capability}),r.jsx(dA,{children:L.event.title})]})]}),r.jsx(aA,{children:L.resolved?L.outcome==="risk"?r.jsxs(r.Fragment,{children:[r.jsx(mt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),r.jsx(iA,{children:"Risk detected"})]}):L.outcome==="action"?r.jsxs(r.Fragment,{children:[r.jsx(mt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),r.jsx(lA,{children:"Action required"})]}):r.jsx(sA,{children:"No action needed"}):r.jsx(mt,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},L.key)})},"feed")]})}const WL=f.div`
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
`,rp=Se`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,HL=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${rp} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,UL=f.div`
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
`,qL=f.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,VL=f.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,GL=Se`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,YL=f.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${GL} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,KL=f.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,P2=Se`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,QL=f.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${P2} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,ZL=f.div`
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
  animation: ${rp} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,XL=f.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  animation: ${rp} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,JL=f.div`
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
`,eA=f.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,tA=f.div`
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
`,nA=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,rA=f.span`
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
`,oA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,aA=f.div`
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
    animation: ${P2} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;const iA=f.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,sA=f.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,lA=f.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,cA=f.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,dA=f.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,uA=5e3,pA=5,Ys=320,hA=e=>e.status==="needs_approval"||e.status==="recommended";function fA({threads:e,stageById:a,onAction:i,onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,pendingWorkflowIds:p,savedWorkflowIds:m,onReveal:v,onClose:y}){const[x]=g.useState(()=>e.filter(hA).map((R,I)=>({t:R,index:I})).sort((R,I)=>oa[R.t.severity]-oa[I.t.severity]||R.index-I.index).slice(0,pA).map(({t:R})=>R.id)),[b,k]=g.useState(1),[S,_]=g.useState(new Set),[C,N]=g.useState(new Set),$=g.useRef(new Map);g.useEffect(()=>{if(b>=x.length)return;const R=setTimeout(()=>k(I=>I+1),uA);return()=>clearTimeout(R)},[b,x.length]),g.useEffect(()=>{const R=I=>{I.key==="Escape"&&y()};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[y]),g.useEffect(()=>{const R=$.current;return()=>{R.forEach(I=>clearTimeout(I))}},[]);const M=x.findIndex(R=>!S.has(R));g.useEffect(()=>{if(x.length>0&&M===-1){const R=setTimeout(y,260);return()=>clearTimeout(R)}},[M,x.length,y]);const j=Math.max(b,M+1);g.useEffect(()=>{x.slice(0,j).forEach(R=>v==null?void 0:v(R))},[j]);const O=(R,I)=>{N(W=>new Set(W).add(R.id));const z=setTimeout(()=>{N(W=>{const G=new Set(W);return G.delete(R.id),G}),_(W=>new Set(W).add(R.id)),$.current.delete(R.id),i(R.id,I)},Ys);$.current.set(R.id,z)},L=x.length-S.size;return r.jsxs(mA,{role:"region","aria-label":"New cases",children:[r.jsxs(vA,{children:[r.jsx(Ht,{children:"Needs your decision"}),r.jsx(ia,{children:L}),r.jsx(xA,{}),r.jsx(Te,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Dismiss (Esc)",onClick:y,children:r.jsx(si,{size:16})})]}),r.jsx(gA,{children:r.jsx(yA,{children:x.slice(0,j).map((R,I)=>{if(S.has(R))return null;const z=e.find(W=>W.id===R);return z?r.jsx(bA,{"data-exiting":C.has(R)||void 0,children:r.jsx(_R,{thread:z,stage:a[R]??0,expanded:I===M,onAction:(W,G)=>O(z,G),onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,saveIntent:p.includes(R),saved:m.includes(R)})},R):null})})})]})}const mA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex: 1;
  min-height: 0;
  width: 100%;
  /* The deck lives inside the landing Stage (which centers its text); reset to
     left so card titles / subtitles / prompts read as a normal left-aligned card. */
  text-align: left;
`,gA=f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* Bottom dissolve so a long stack fades into the page foot as it scrolls. */
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
`,vA=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,xA=f.div`
  flex: 1;
`,yA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,wA=Se`
  from { opacity: 0; transform: translateY(var(--space-4)) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,bA=f.div`
  animation: ${wA} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
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
`,kA={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},cm={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},_A=["new","working","done"],CA=280;function jA({threads:e,stageById:a,section:i,analyzedIds:s,outboundByThread:l,chatByThread:d,selectedId:p,onDecide:m,onAction:v,onCompleteRun:y,onRefinement:x,onSaveWorkflow:b,pendingWorkflowIds:k,onToggleSaveWorkflow:S,savedWorkflowIds:_,onSend:C,replyingIds:N,onStop:$,onClose:M,onDetectRisk:j,onRevealNew:O}){const[L,R]=g.useState(!1),I=()=>{L||(R(!0),window.setTimeout(()=>{R(!1),M()},CA))},[z,W]=g.useState(!1);g.useEffect(()=>{if(i!=="live"){W(!1);return}const T=ne=>{if(ne.key!=="t"&&ne.key!=="T"||ne.metaKey||ne.ctrlKey||ne.altKey)return;const fe=ne.target instanceof Element?ne.target:null;fe&&fe.closest('input, textarea, [contenteditable="true"]')||W(ce=>!ce)};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[i]);const G=(T,ne)=>(T.t.status==="analyzing"?1:0)-(ne.t.status==="analyzing"?1:0)||oa[T.t.severity]-oa[ne.t.severity]||T.index-ne.index,Q=e.map((T,ne)=>({t:T,index:ne})).filter(({t:T})=>kA[i].includes(T.status)).sort(G).map(({t:T})=>T.id),[B,Y]=g.useState(()=>p??null),ee=g.useRef({}),oe=g.useRef(null),le=T=>{var ne;T==="Other"&&((ne=oe.current)==null||ne.focus()),x(T)},re=g.useRef(null),X=g.useRef(null),[D,V]=g.useState(null),E=g.useRef(void 0);g.useEffect(()=>{var T;if(E.current===void 0){E.current=p;return}!p||p===E.current||(E.current=p,Y(p),(T=ee.current[p])==null||T.scrollIntoView({behavior:"smooth",block:"start"}))},[p]);const A=_A.includes(i),q=A?p&&Q.includes(p)?p:Q[0]??null:null;g.useEffect(()=>{var $e;const T=re.current,ne=X.current;if(!T||!ne)return;const ce=(($e=window.matchMedia)==null?void 0:$e.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",me=160;let we=!0,xe=T.scrollHeight;const Re=()=>{we=T.scrollHeight-T.scrollTop-T.clientHeight<=me};T.addEventListener("scroll",Re,{passive:!0});let ze=0;const Ve=()=>{ze=performance.now()};T.addEventListener("pointerdown",Ve,{passive:!0});const Oe=new ResizeObserver(()=>{const We=T.scrollHeight,Qe=performance.now()-ze<500;We>xe+1&&we&&!Qe&&T.scrollTo({top:We,behavior:ce}),xe=We});return Oe.observe(ne),()=>{T.removeEventListener("scroll",Re),T.removeEventListener("pointerdown",Ve),Oe.disconnect()}},[q,i]),g.useEffect(()=>{if(!A||!q)return;const T=re.current;if(!T)return;const ne=()=>T.scrollTo({top:T.scrollHeight,behavior:"auto"}),fe=requestAnimationFrame(ne),ce=[80,240,480].map(me=>window.setTimeout(ne,me));return()=>{cancelAnimationFrame(fe),ce.forEach(clearTimeout)}},[q,A]);const Z=q?e.find(T=>T.id===q)??null:null,ie=!!Z&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(Z.status)||Yg(Z)),ue=ie&&Z?Z:null,H=!(ie&&Z&&["needs_approval","recommended","unresolved","monitoring"].includes(Z.status))||!!(Z!=null&&Z.analysisResult);return i==="live"?r.jsx(dm,{$static:!0,children:r.jsx(BL,{onDetectRisk:j,deckActive:z,deck:z?r.jsx(fA,{threads:e,stageById:a,onAction:v,onRefinement:le,onSaveWorkflow:b,onToggleSaveWorkflow:S,pendingWorkflowIds:k,savedWorkflowIds:_,onReveal:O,onClose:()=>W(!1)}):null})},"live"):r.jsxs(dm,{$closing:L,children:[r.jsx(MA,{ref:re,children:A?r.jsx(um,{ref:X,children:q===null?r.jsx(pm,{role:"status",children:cm[i]}):(()=>{const T=e.find(Re=>Re.id===q);if(!T)return null;const ne=T.status==="analyzing",fe=T.status==="resolved"||T.status==="auto_resolved",ce=T.status==="in_progress",me=T.status==="needs_approval"||T.status==="recommended",we=T.status==="monitoring",xe=T.status==="workflow_available";return r.jsxs(r.Fragment,{children:[r.jsx(TA,{children:r.jsx(om,{thread:T,stage:a[T.id]??0,expanded:ce?!1:H,detachActionable:ie,detachAnalyzing:ne,detachTrail:fe||xe,onToggle:()=>{},onClose:I,onDecide:m,onAction:v,onRefinement:le,onSaveWorkflow:b},T.id)}),(ne||me||ce||fe||we||xe)&&r.jsx(LR,{thread:T,outbound:l[T.id]??[],chat:d[T.id]??[],replying:N.includes(T.id),analyzing:ne,footSlot:D,onCompleteRun:()=>y(T.id),saveWorkflowFlagged:k.includes(T.id)||_.includes(T.id),actionCard:ue&&ue.id===T.id?r.jsx(m2,{thread:ue,stage:a[ue.id]??0,onAction:v,onRefinement:le,onSaveWorkflow:b,saveIntent:k.includes(ue.id),onToggleSaveWorkflow:S,saved:_.includes(ue.id),savedConversationally:(d[ue.id]??[]).some(Re=>Re.kind==="workflow_saved"),onSend:Re=>C(ue.id,Re),replying:N.includes(ue.id),onStop:()=>$(ue.id)},`action-${ue.id}`):void 0},T.id)]})})()}):r.jsx(um,{ref:X,children:Q.length===0?r.jsx(pm,{role:"status",children:cm[i]}):Q.map(T=>{const ne=e.find(fe=>fe.id===T);return ne?r.jsx($A,{ref:fe=>{ee.current[T]=fe},children:r.jsx(om,{thread:ne,stage:a[T]??0,expanded:B===T,onToggle:()=>Y(fe=>fe===T?null:T),onDecide:m,onAction:v,onRefinement:x,onSaveWorkflow:b})},T):null})})}),A&&q&&Z&&r.jsx(RA,{children:r.jsxs(LA,{children:[r.jsx(AA,{ref:V}),Z.status==="analyzing"&&!s.includes(Z.id)&&r.jsx(NR,{thread:Z,onDecide:m}),r.jsx(f2,{ref:oe,onSend:T=>C(q,T),working:N.includes(q),onStop:()=>$(q),placeholder:BS(Z.status,N.includes(q))},`composer-${q}`)]})})]},"feed")}const SA=Se`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,NA=Se`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,dm=f.div`
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

  ${e=>!e.$static&&!e.$closing&&qe`
    animation: ${NA} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${e=>e.$closing&&qe`
    animation: ${SA} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,MA=f.div`
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
`,RA=f.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);
`,LA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,AA=f.div`
  display: flex;
  &:empty { display: none; }
`,um=f.div`
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
`,$A=f.div`
  scroll-margin-top: var(--space-5);
`,TA=f.div`
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
`,pm=f.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;function IA({messages:e,replying:a,onSend:i}){const[s,l]=g.useState(""),d=g.useRef(null);g.useEffect(()=>{var y;(y=d.current)==null||y.scrollIntoView({block:"end",behavior:"smooth"})},[e,a]);const p=s.trim().length>0&&!a,m=e.length===0,v=()=>{const y=s.trim();!y||a||(i(y),l(""))};return r.jsxs(EA,{children:[r.jsx(PA,{children:m?r.jsxs(zA,{children:[r.jsx(OA,{"aria-hidden":"true",children:r.jsx(mt,{mark:"circle",size:96,tone:"auto",state:"active","aria-label":"Ultron"})}),r.jsx(DA,{children:"New page"}),r.jsx(FA,{children:"Ask Ultron to set something up, look into a risk, or draft a change."})]}):r.jsxs(BA,{children:[e.map((y,x)=>r.jsx(hm,{"data-from":y.role,children:r.jsx(WA,{"data-from":y.role,children:y.text})},x)),a&&r.jsx(hm,{"data-from":"ultron",children:r.jsxs(UA,{"aria-label":"Ultron is replying",children:[r.jsx(zd,{}),r.jsx(zd,{}),r.jsx(zd,{})]})}),r.jsx("div",{ref:d})]})}),r.jsx(qA,{children:r.jsxs(VA,{onSubmit:y=>{y.preventDefault(),v()},children:[r.jsx(GA,{rows:1,value:s,placeholder:"Ask Ultron anything…","aria-label":"Message Ultron",onChange:y=>l(y.target.value),onKeyDown:y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),v())}}),r.jsx(YA,{children:r.jsx(sa,{state:p?"ready":"disabled-invalid",onSend:v})})]})})]})}const EA=f.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,PA=f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,zA=f.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) var(--space-6);
  text-align: center;
`,OA=f.span`
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
`,DA=f.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,FA=f.p`
  margin: 0;
  max-width: 420px;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,BA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,hm=f.div`
  display: flex;
  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }
`,WA=f.div`
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
`,UA=f.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) 0;
`,zd=f.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${HA} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,qA=f.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  justify-content: center;
`,VA=f.form`
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
`,GA=f.textarea`
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
`,YA=f.div`
  flex-shrink: 0;
  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`,KA={"Shift Drop Recovery":{new:"Shift Replacement Needed",working:"Finding Shift Replacement",done:"Shift Replacement Found"},"Shift Release Recovery":{new:"Released Shift Needs Filling",working:"Filling Released Shift",done:"Released Shift Filled"},"Time-Off Coverage Check":{new:"Time-Off Decision Needed",working:"Checking Time-Off Coverage",done:"Time-Off Handled"},"Document Filing":{new:"Document Needs Filing",working:"Filing Document",done:"Document Filed"},"New Lead Screening":{new:"New Lead to Screen",working:"Screening New Lead",done:"Lead Screened"},"Shift Offer":{new:"Shift Ready to Offer",working:"Offering Shift",done:"Shift Offered"},"Candidate Onboarding":{new:"Onboarding to Start",working:"Onboarding Candidate",done:"Candidate Onboarded"},"Missed Clock-In":{new:"Missed Clock-In to Check",working:"Checking Missed Clock-In",done:"Clock-In Resolved"},"Informal Cancellation":{new:"Cancellation Needs Coverage",working:"Covering Cancellation",done:"Cancellation Covered"},"Bulk Fill":{new:"Shifts Need Filling",working:"Filling Shifts",done:"Shifts Filled"},"Open Timesheet":{new:"Timesheet Needs Fixing",working:"Fixing Timesheet",done:"Timesheet Fixed"},"Invoice Roll-Up":{new:"Charge Needs Billing",working:"Adding Charge to Invoice",done:"Charge Billed"},"Schedule Confirmation":{new:"Schedule Needs Confirming",working:"Confirming Schedule",done:"Schedule Confirmed"},"Birthday Greeting":{new:"Birthday to Send",working:"Sending Birthday Wish",done:"Birthday Sent"},"Scheduled Report":{new:"Report Needs Publishing",working:"Publishing Report",done:"Report Published"},"Clock-In Approval":{new:"Clock-In Needs Approval",working:"Approving Clock-In",done:"Clock-In Approved"},"Profile Update":{new:"Profile Needs Updating",working:"Updating Profile",done:"Profile Updated"},"Autonomous Fill":{new:"Auto-Fill Needs Confirming",working:"Confirming Auto-Fill",done:"Shift Auto-Filled"},"Invoice Reconciliation":{new:"Payment Needs Reconciling",working:"Reconciling Payment",done:"Payment Reconciled"},"Credential Lapse":{new:"Expired Credential to Fix",working:"Renewing Credential",done:"Credential Renewed"}};function fm(e,a){const i=KA[e];return i?a==="done"?i.done:a==="new"?i.new:i.working:e}const pu=32;function QA({onNew:e}){return r.jsxs(ZA,{children:[r.jsx(XA,{"aria-hidden":"true",children:r.jsx(mt,{mark:"circle",size:pu,tone:"auto",state:"active","aria-label":"Ultron"})}),r.jsx(JA,{children:"Ultron"}),r.jsx(e$,{role:"button",tabIndex:0,"aria-label":"New page",onClick:a=>{a.stopPropagation(),e==null||e()},onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),a.stopPropagation(),e==null||e())},children:r.jsx(mo,{size:16})})]})}const ZA=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-width: 0;
  font-family: var(--font-sans);
`,XA=f.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: ${pu}px;
  height: ${pu}px;
`,JA=f.span`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,e$=f.span`
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
`,t$=45;function n$({text:e,className:a}){const[i,s]=g.useState(0);g.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){s(e.length);return}s(0);let p=0;const m=setInterval(()=>{p+=1,s(p),p>=e.length&&clearInterval(m)},t$);return()=>clearInterval(m)},[e]);const l=i>=e.length;return r.jsxs(r$,{className:a,children:[e.slice(0,i),!l&&r.jsx(a$,{"aria-hidden":"true",children:"|"})]})}const r$=f.span`
  white-space: nowrap;
`,o$=Se`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,a$=f.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${o$} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,Od=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function i$(){const e=g.useMemo(()=>["All",...Array.from(new Set(Od.map(l=>l.tag)))],[]),[a,i]=g.useState("All"),s=a==="All"?Od:Od.filter(l=>l.tag===a);return r.jsx(s$,{children:r.jsxs(l$,{children:[r.jsxs(c$,{children:[r.jsx(mt,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),r.jsxs(d$,{children:[r.jsx(u$,{children:"Memory"}),r.jsx(p$,{children:"What Ultron has learned and carries between sessions."})]})]}),r.jsx(h$,{role:"tablist","aria-label":"Filter memories by category",children:e.map(l=>r.jsx(f$,{type:"button",role:"tab","aria-selected":a===l,$active:a===l,onClick:()=>i(l),children:l},l))}),r.jsx(m$,{children:s.map((l,d)=>r.jsx(g$,{children:r.jsxs(v$,{children:[r.jsx(x$,{children:l.title}),r.jsx(y$,{children:l.detail})]})},d))})]})})}const s$=f.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,l$=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,c$=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,d$=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,u$=f.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,p$=f.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,h$=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,f$=f.button`
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
`,m$=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,g$=f.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,v$=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,x$=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,y$=f.span`
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
`;const hu=[{id:"employees",label:"Employees",icon:r.jsx(lo,{size:16})},{id:"shifts",label:"Shifts",icon:r.jsx(Cn,{size:16})},{id:"locations",label:"Locations",icon:r.jsx(Lu,{size:16})},{id:"timesheets",label:"Timesheets",icon:r.jsx(co,{size:16})},{id:"credentials",label:"Credentials",icon:r.jsx(vi,{size:16})}];f.div`
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
`;function w$({collectionId:e}){const a=hu.find(i=>i.id===e)??hu[0];return r.jsxs(b$,{children:[r.jsxs(k$,{children:[r.jsx(_$,{children:a.label}),r.jsx(ia,{children:"Account database"})]}),r.jsxs(C$,{role:"status",children:[r.jsx(j$,{"aria-hidden":"true",children:r.jsx(A0,{size:24})}),r.jsxs(S$,{children:[a.label," — demo stub"]}),r.jsxs(N$,{children:["Connect a data source to browse ",a.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const b$=f.div`
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
`,k$=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,_$=f.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,C$=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,j$=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,S$=f.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,N$=f.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`,mm=72,gm=.58;function _n(e){const a=Math.sin(e*127.1+311.7)*43758.5453;return a-Math.floor(a)}function vm(e,a,i,s){const l=getComputedStyle(a).getPropertyValue(i).trim();if(!l)return s;e.fillStyle="#000",e.fillStyle=l;const d=e.fillStyle;if(d.startsWith("#")){const m=d.slice(1),v=parseInt(m.length===3?m.split("").map(y=>y+y).join(""):m,16);return(v>>16&255)+","+(v>>8&255)+","+(v&255)}const p=d.match(/[\d.]+/g);return p&&p.length>=3?`${+p[0]},${+p[1]},${+p[2]}`:s}const M$=e=>{const[a,i,s]=e.split(",").map(Number);return(.299*a+.587*i+.114*s)/255};function z2({links:e=0}){const a=g.useRef(null),i=g.useRef(0),s=g.useRef(e);return s.current=Math.max(0,Math.min(1,e)),g.useEffect(()=>{const l=a.current;if(!l)return;const d=l.getContext("2d");if(!d)return;const p=Math.min(2,window.devicePixelRatio||1);let m=0,v=0;const y=()=>{m=l.clientWidth,v=l.clientHeight,l.width=Math.max(2,Math.round(m*p)),l.height=Math.max(2,Math.round(v*p)),d.setTransform(p,0,0,p,0,0)};y();const x=new ResizeObserver(y);x.observe(l);const b=vm(d,l,"--color-bg-primary","255,255,255"),k=M$(b)<.5,S=vm(d,l,"--color-content-tertiary",k?"148,163,184":"71,85,105"),_=Array.from({length:mm},(L,R)=>{const I=R%3===0,z=I?1-.5*Math.pow(_n(R*3.1),1.6):_n(R*3.1),W=I?.5*Math.pow(_n(R*5.7),1.6):_n(R*5.7);return{bx:z,by:W,vx:(_n(R*7.3)-.5)*.008,vy:(_n(R*9.9)-.5)*.008,wA:6+_n(R*4.7)*10,wS:.25+_n(R*6.1)*.5,wP:_n(R*8.2)*6.2832,r:.8+_n(R*2.3)*1.6,twS:.8+_n(R)*1.4,twP:_n(R*11.4)*6.2832}}),C=(L,R)=>{const I=((L.bx+L.vx*R)%1+1)%1,z=((L.by+L.vy*R)%1+1)%1,W=I-.5,G=Math.abs(W)*2,Q=G<1e-4?1:(gm+(1-gm)*G)/G;return{x:(.5+W*Q)*m+Math.cos(R*L.wS+L.wP)*L.wA,y:z*v+Math.sin(R*L.wS*.8+L.wP)*L.wA}},N=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),$=L=>{i.current+=(s.current-i.current)*.04,Math.abs(i.current-s.current)<.001&&(i.current=s.current),d.clearRect(0,0,m,v);const R=_.map(I=>C(I,L));for(let I=0;I<mm;I++){const z=_[I],W=.35+.65*(.5+.5*Math.sin(L*z.twS+z.twP)),G=.82+i.current*.18;d.fillStyle="rgba("+S+","+W*G*(k?.55:.42)+")",d.beginPath(),d.arc(R[I].x,R[I].y,z.r*(.7+.3*W),0,6.2832),d.fill()}};if(N)return i.current=s.current,$(1.15),()=>x.disconnect();$(1.15);let M=0;const j=performance.now(),O=L=>{$(1.15+(L-j)/1e3),M=requestAnimationFrame(O)};return M=requestAnimationFrame(O),()=>{cancelAnimationFrame(M),x.disconnect()}},[]),r.jsx(R$,{"aria-hidden":"true",children:r.jsx("canvas",{ref:a})})}const R$=f.div`
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
`,L$=f.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,Os=f.div`
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
`,xm=.025,Za=560,Xa=480,A$=260,$$=.08,T$=.18,I$=.06,E$=350,P$=9,Ks=5,ym=360,z$=560,O$=.055,D$=.03,Ja=320,F$=.84,fu=Ks+1,Qs=[];for(let e=0;e<fu;e++)for(let a=e+1;a<fu;a++)Qs.push([e,a]);const wm=(e,a)=>(e*P$+80*Math.sin(e*.23+a)+50*Math.sin(e*.071+a*1.7)+720)%360,Ds=(e,a)=>{const i=(s,l)=>`${(50+16*Math.sin(e*s+l+a)).toFixed(1)}%`;return`${i(.9,0)} ${i(1.3,2.1)} ${i(1.1,4.2)} ${i(.8,1.3)} / ${i(1.2,3.1)} ${i(.7,.6)} ${i(1.4,5)} ${i(1,2.4)}`},bm=e=>(e=Math.max(0,Math.min(1,e)),e*e*(3-2*e)),Dd=[{nx:-1,ny:0},{nx:1,ny:0},{nx:0,ny:-1},{nx:0,ny:1}];function O2(){const e=g.useRef(null),a=g.useRef(null),i=g.useRef([]),s=g.useRef([]),l=g.useRef([]);return g.useEffect(()=>{const d=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),p=e.current,m=a.current;if(!p||!m)return;const v=Array.from({length:4},()=>Math.random()*Math.PI*2),y=()=>Math.random()*Math.PI*2,x=Array.from({length:Ks},()=>({size:ym+Math.random()*(z$-ym),ax:.3+Math.random()*.16,ay:.3+Math.random()*.16,sx1:.05+Math.random()*.07,px1:y(),sx2:.11+Math.random()*.09,px2:y(),sy1:.05+Math.random()*.07,py1:y(),sy2:.11+Math.random()*.09,py2:y(),bs:.12+Math.random()*.14,bp:y(),mp:y(),cs:.4+Math.random()*2.6}));x.forEach((I,z)=>{const W=s.current[z];W&&(W.style.width=`${I.size.toFixed(0)}px`,W.style.height=`${I.size.toFixed(0)}px`)});const b=(I,z,W)=>{I.style.setProperty("--glow-a",`hsl(${wm(z,v[0]+W).toFixed(1)} 85% 62% / 0.9)`),I.style.setProperty("--glow-b",`hsl(${wm(z,v[1]+W*1.3).toFixed(1)} 85% 58% / 0.8)`),I.style.setProperty("--glow-cx",`${(35+14*Math.sin(z*.4+v[2]+W)).toFixed(1)}%`),I.style.setProperty("--glow-cy",`${(35+14*Math.cos(z*.31+v[3]+W)).toFixed(1)}%`)},k=(I,z,W)=>{const G=new Array(fu).fill(null);for(let Q=0;Q<Ks;Q++){const B=x[Q],Y=s.current[Q];if(!Y)continue;const ee=z*(.5+B.ax*(.68*Math.sin(I*B.sx1+B.px1)+.32*Math.sin(I*B.sx2+B.px2))),oe=W*(.5+B.ay*(.68*Math.sin(I*B.sy1+B.py1)+.32*Math.sin(I*B.sy2+B.py2))),le=O$+D$*(.5+.5*Math.sin(I*B.bs+B.bp));Y.style.transform=`translate(${(ee-B.size/2).toFixed(1)}px, ${(oe-B.size/2).toFixed(1)}px)`,Y.style.opacity=le.toFixed(3),Y.style.borderRadius=Ds(I,B.mp),b(Y,I,B.cs),G[Q+1]={x:ee,y:oe,size:B.size,o:le}}return G},S=(I,z)=>{for(let W=0;W<Qs.length;W++){const G=l.current[W];if(!G)continue;const[Q,B]=Qs[W],Y=z[Q],ee=z[B],oe=Y&&ee?Math.min(Y.o,ee.o):0;if(!Y||!ee||oe<=.005){G.style.opacity="0";continue}const le=ee.x-Y.x,re=ee.y-Y.y,X=Math.hypot(le,re),D=(Y.size+ee.size)/2*F$,V=bm(1-X/D);if(V<=.001){G.style.opacity="0";continue}const E=Math.max(.35,X*.9/Ja),A=.3+.4*V;G.style.transform=`translate(${((Y.x+ee.x)/2-Ja/2).toFixed(1)}px, ${((Y.y+ee.y)/2-Ja/2).toFixed(1)}px) rotate(${Math.atan2(re,le).toFixed(3)}rad) scale(${E.toFixed(3)}, ${A.toFixed(3)})`,G.style.opacity=(oe*V).toFixed(3),G.style.borderRadius=Ds(I,1.1*(W+1)),b(G,I,.23*(W+1))}};if(d){const z=k(2.4,p.clientWidth,p.clientHeight);S(2.4,z);return}let _=null,C=null,N=-1/0,$=0,M=0,j=0;const O=I=>{const z=p.getBoundingClientRect(),W=_===null;_=I.clientX-z.left,C=I.clientY-z.top,N=I.timeStamp,W&&($=_,M=C)};window.addEventListener("pointermove",O,{passive:!0});let L=0;const R=I=>{L=requestAnimationFrame(R);const z=I/1e3,W=p.clientWidth,G=p.clientHeight,Q=k(z,W,G);if(_!==null&&C!==null){$+=(_-$)*xm,M+=(C-M)*xm;const B=I-N<E$?T$:$$;j+=(B-j)*I$,m.style.transform=`translate(${$-Za/2}px, ${M-Za/2}px)`,m.style.opacity=j.toFixed(3),m.style.borderRadius=Ds(z,0),b(m,z,0),Q[0]={x:$,y:M,size:Za,o:j};for(let Y=0;Y<Dd.length;Y++){const ee=i.current[Y];if(!ee)continue;const{nx:oe,ny:le}=Dd[Y],re=oe<0?$:oe>0?W-$:le<0?M:G-M,X=bm(1-re/A$);if(X<=.001){ee.style.opacity="0";continue}const D=oe!==0?oe<0?0:W:$,V=le!==0?le<0?0:G:M,E=Xa*(.5-.22*X),A=.55+.45*X;ee.style.transform=`translate(${D+oe*E-Xa/2}px, ${V+le*E-Xa/2}px) scale(${A.toFixed(3)})`,ee.style.opacity=(j*X).toFixed(3),ee.style.borderRadius=Ds(z,.9*(Y+1)),b(ee,z,.35*(Y+1))}}S(z,Q)};return L=requestAnimationFrame(R),()=>{cancelAnimationFrame(L),window.removeEventListener("pointermove",O)}},[]),r.jsxs(L$,{ref:e,"aria-hidden":"true",children:[Qs.map((d,p)=>r.jsx(Os,{ref:m=>{l.current[p]=m},style:{width:Ja,height:Ja,opacity:0}},`bridge-${p}`)),Array.from({length:Ks},(d,p)=>r.jsx(Os,{ref:m=>{s.current[p]=m},style:{opacity:0}},`ambient-${p}`)),Dd.map((d,p)=>r.jsx(Os,{ref:m=>{i.current[p]=m},style:{width:Xa,height:Xa,opacity:0}},p)),r.jsx(Os,{ref:a,style:{width:Za,height:Za,opacity:0}})]})}function D2({size:e=22,className:a}){return r.jsxs("svg",{width:e,height:e*(80/94),viewBox:"0 0 94 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:a,role:"img","aria-label":"Teambridge",children:[r.jsx("path",{d:"M66.4971 48.5203V58.6884C67.2261 59.1629 67.9007 59.5855 68.5508 59.9754L80.003 66.8496L84.2411 59.7409L72.789 52.8667C70.6209 51.5661 68.5073 50.1045 66.4998 48.523",fill:"currentColor"}),r.jsx("path",{d:"M80.0032 67.5995C79.8699 67.5995 79.7366 67.5641 79.6197 67.4932L68.1675 60.619C67.5065 60.2236 66.8292 59.7955 66.092 59.3183C65.8798 59.1792 65.752 58.9447 65.752 58.6911V48.5312C65.752 48.5121 65.752 48.493 65.752 48.4767C65.7764 48.0867 66.1001 47.7759 66.4973 47.7759C66.6823 47.7759 66.8509 47.844 66.9815 47.9558C68.9537 49.5101 71.0374 50.9471 73.17 52.2287L84.6222 59.1029C84.9758 59.3156 85.09 59.7737 84.8806 60.1309L80.6425 67.2396C80.5418 67.4086 80.3759 67.5341 80.1828 67.5804C80.1229 67.5968 80.0631 67.6022 80.0005 67.6022L80.0032 67.5995ZM67.2426 58.2821C67.8356 58.6639 68.3906 59.0102 68.9346 59.3347L79.7448 65.8244L83.2158 60L72.4029 53.5103C70.6375 52.4496 68.9074 51.288 67.2426 50.0391V58.2821Z",fill:"currentColor"}),r.jsx("path",{d:"M83.7788 39.1704C77.5032 35.1729 74.1628 32.7679 66.5081 23.396V36.4354C70.1124 39.7866 74.8184 43.3423 78.2785 45.6465L88.8656 52.0053L93.1554 44.8039L82.7125 38.5323L83.7788 39.1731V39.1704Z",fill:"currentColor"}),r.jsx("path",{d:"M88.8657 52.7632C88.7297 52.7632 88.5964 52.7277 88.4767 52.6568L77.8896 46.298C77.8896 46.298 77.8706 46.2871 77.8597 46.2789C74.6716 44.1575 69.8785 40.6045 65.9941 36.9942C65.839 36.8497 65.752 36.6479 65.752 36.438V23.3985C65.752 23.0795 65.9532 22.7932 66.2525 22.6841C66.5544 22.5751 66.889 22.6705 67.0903 22.9159C74.8049 32.356 78.08 34.6438 84.1761 38.5267L93.5418 44.152C93.9009 44.3674 94.0178 44.8337 93.8029 45.1909L89.5131 52.3923C89.4098 52.5641 89.2438 52.6895 89.048 52.7386C88.9881 52.755 88.9256 52.7604 88.863 52.7604L88.8657 52.7632ZM78.6812 45.0055L88.6073 50.9662L92.1218 45.0655L82.3263 39.1811C82.2501 39.1347 82.1848 39.0802 82.1332 39.0148C77.1252 35.7835 73.6787 33.1577 67.2644 25.4982V36.1026C71.0428 39.5765 75.7488 43.0504 78.6812 45.0028V45.0055Z",fill:"currentColor"}),r.jsx("path",{d:"M50.9436 78.6185H59.0608V31.6689C56.8846 36.9643 54.1562 42.0143 50.9436 46.6962V78.6185Z",fill:"currentColor"}),r.jsx("path",{d:"M59.0606 79.3953H50.9434C50.5381 79.3953 50.209 79.0463 50.209 78.6182V46.6959C50.209 46.5323 50.2579 46.3714 50.3504 46.2378C53.5277 41.605 56.2316 36.5986 58.3887 31.3578C58.5274 31.0197 58.8729 30.8342 59.2102 30.9079C59.5502 30.9842 59.7951 31.3005 59.7951 31.6686V78.6182C59.7951 79.049 59.4659 79.3953 59.0606 79.3953ZM51.6779 77.8383H58.3261V35.1998C56.4301 39.3036 54.2023 43.241 51.6779 46.9467V77.8383Z",fill:"currentColor"}),r.jsx("path",{d:"M34.4211 78.6186H43.0089V57.2571C40.3376 59.823 37.4515 62.2225 34.4211 64.3985V78.6186Z",fill:"currentColor"}),r.jsx("path",{d:"M42.4076 79.3954H34.3721C33.9722 79.3954 33.6458 79.0464 33.6458 78.6183V64.3982C33.6458 64.1473 33.7573 63.9128 33.9504 63.7656C36.7577 61.6114 39.4344 59.2337 41.9071 56.6951C42.1165 56.4796 42.4266 56.4169 42.6932 56.5424C42.9598 56.6651 43.1339 56.9459 43.1339 57.2568V78.6183C43.1339 79.0491 42.8102 79.3954 42.4076 79.3954ZM35.0984 77.8385H41.6813V59.0483C39.6003 61.0879 37.3942 63.0157 35.0984 64.7936V77.8357V77.8385Z",fill:"currentColor"}),r.jsx("path",{d:"M4.04653 54.0585L0.779541 46.6607C11.3395 41.9734 19.5355 35.8954 25.1446 28.5904C31.1726 20.74 34.2275 11.3818 34.2275 0.777344H42.2984C42.2984 24.5275 29.0699 42.9523 4.04653 54.0612V54.0585Z",fill:"currentColor"}),r.jsx("path",{d:"M4.04671 54.8354C3.95151 54.8354 3.8563 54.819 3.76653 54.7836C3.5734 54.71 3.42106 54.5627 3.33674 54.3718L0.0670215 46.9741C-0.107073 46.5815 0.0697417 46.1206 0.461455 45.9488C10.899 41.3161 18.9971 35.3144 24.5246 28.1158C30.4438 20.4044 33.4469 11.207 33.4469 0.77713C33.4469 0.3463 33.7951 0 34.2222 0H42.2931C42.7229 0 43.0684 0.349027 43.0684 0.77713C43.0684 24.86 29.6821 43.5302 4.3541 54.7727C4.25345 54.8163 4.14736 54.8381 4.04127 54.8381L4.04671 54.8354ZM1.80253 47.0532L4.44115 53.0303C28.4308 42.1477 41.2322 24.3746 41.5151 1.55426H34.9947C34.8479 12.0169 31.7414 21.2688 25.7569 29.0647C20.194 36.3097 12.1367 42.3577 1.79981 47.0559L1.80253 47.0532Z",fill:"currentColor"}),r.jsx("path",{d:"M10.7113 68.821L7.38721 61.4478C19.4514 55.9833 30.4221 47.1595 38.2781 36.6042C46.6047 25.4189 51.0033 13.0285 51.0033 0.7771H59.0743C59.0743 14.7873 54.1207 28.8492 44.7468 41.4442C36.0856 53.0793 23.9996 62.803 10.7113 68.821Z",fill:"currentColor"}),r.jsx("path",{d:"M10.7116 69.5981C10.6191 69.5981 10.5266 69.5817 10.4368 69.549C10.2437 69.4754 10.0887 69.3309 10.0043 69.1427L6.6802 61.7695C6.50339 61.3769 6.67748 60.9161 7.0692 60.7415C19.0164 55.3289 29.8783 46.595 37.6582 36.1433C45.8841 25.0944 50.2311 12.8649 50.2311 0.779816C50.2311 0.348986 50.5792 0.00268555 51.0063 0.00268555H59.0772C59.507 0.00268555 59.8525 0.351712 59.8525 0.779816C59.8525 14.959 54.8446 29.1819 45.37 41.9132C36.6326 53.6519 24.4379 63.4629 11.0299 69.5354C10.9292 69.5817 10.8204 69.6036 10.7116 69.6036V69.5981ZM8.41299 61.8322L11.0979 67.7875C23.9917 61.7995 35.6969 52.3022 44.1269 40.9779C53.226 28.7538 58.117 15.139 58.2965 1.55422H51.7761C51.5939 13.7211 47.1518 25.9861 38.9013 37.0704C31.1215 47.5249 20.3167 56.2942 8.41299 61.8322Z",fill:"currentColor"})]})}const Hr=qe`
  background: color-mix(in srgb, var(--color-bg-primary) 50%, transparent);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid color-mix(in srgb, var(--color-content-primary) 12%, transparent);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 45%, transparent),
    var(--shadow-below-low);
`,F2=qe`
  background: color-mix(in srgb, var(--color-bg-primary) 66%, transparent);
  border-color: var(--color-border-selected);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 60%, transparent),
    var(--shadow-below-md);
`;qe`
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
`;const B$="/Ultron_Onboarding/assets/levis-stadium-CO6biSRl.webp",W$="data:image/webp;base64,UklGRhALAABXRUJQVlA4WAoAAAAQAAAA0gEAVwAAQUxQSPwIAAABsFVrb9jaliAYgiAEgiGEwTaDbQYxg4aByyCLgSAEgiAYwv/QNpblrN67n05ETAD9L7nkx6EKACpHWZn+9YYsDd1njf9yosBa//I/miQYWvn/DSHmepyqqnI81uXGeE3lUV8fJcXFVxQM38aEJZVHPURE6qOsy42FJZVaD5FaS47LzS0ppVRKKTmlGC6FTdCrNQ4JzBzMeIkxshHno6G3SYlewgMedTEKcTsa+uURRzAzm4UlxrhYhVwVve1IPCDVWqtBqLXW9UOq10u8duC6Lp+iwFYTW20N75uq6rlcCPFxNryNBmETWGuNHqLC6WYQsjSYa11s+MT7pq/bFc7S8PawCFlgXaPZEwAMGADKhyd6tfIF7YC+iwJ7TTaMXvnAj4aLtYsfDUM1DfsLv8LXQhaMlmgh6I0fkuAqd/HWMFLjfQCobIVIRCwYq+wB8YUrrveEDeM1jXnAs/IF3ho8Vu47u+qbqLjeEzYMr3wjULY6iGLD8M3DTkR/GkZEhUvlARW+ld+FCq+6dmlXC0ThQG/H3waHuk7U0uddX6DBCLzB48OBEv1F97UH3G5mFZ5bTUxv/zY43kYhEitGhANOt3mUruYXFKsGn2cYhvgHI/iEY2GbDY5bCfSZxRO2UTs3jGCF2+0WKL20YOT2DMMEI1jhWtlig+M90PWkjvBnEBpGLA2Ot1sgAYA8F2SY6SdWOFfuW+A4Uzero8aDTOnj0uB6u4X4UifDYx5WuFfuCeookSGrH8il09XS4Hy9g/ByzoZ1GsGEZ+h4wG8mU25+kK6IJ1Z4b3wD1ADodI0n2TDl4xrDbyHj7KiFORT+5Q5wCzjmYEy6XjrHqF5RMlc/yFNsmHGdj19kPkRv+4vO0sKFBPO2JyYiCnHXN6tddnTOwJhS50sv+w2It0JEfzFtuXBaaQ50NT6BSvbBEeIEOgfSdPoSbwDRH+s8jT9EGJdAvaw8gNTR7i9hUu2K/WnQBgBKdyD+NkxcPlQbXci5OGr+dBbEHmuzeOA13QKiO52phXfNRJkmOfe8xpiKjEB01YhWTCv+Wv0seLvTPexOzppTSilQwtT5zQpLZZpCS6DP/ByQfbRaUkopEB0DJDHRktSsBXf9O91ECw4kB/osc8mbapJohpaok9Xsx0ErkT4zzDXSx2yF1FH7j1ESyUmTPaVUZADiMI10lTFS8hpjfuoI8ItaCE14HoG6uVnpuD3Q1WSmTBeTVe2gfh4jkS6O0RzoPWc120cp0+U0QCJ9TDogExHDcp0hk2W2QhhV6PphxnR5N1J3Lb7uLy2Qkz3QVT6tdFSk64dZy3SVn3Y/RBQtlG6zWS2DKnU2q0rXQ7MBe1N6DQ0AipNCvWKEMKZRZ7NqC3UWs0ZE2eLnPopVGpQ6FljHDnoarXNQfmnsYqfuoEbrmLNjgfVC3bsVmGi3yPcRrcqg2JHMQk82ypOQAMDhQbmPolEeIx2rVSHD02olOizWKcL6OE7Vpqc8Eo+qrnYz6k1GdZb4guggkaXYVE/FSMkyWmUisYj+QhZ0nhsP+XF1mEmvGv3MQsfL6YBNoo2MqR1Po2RCYrTfAz8aLCsPOF2JmdNzGm4AkIedZNtM1JMYsU00qkbJV9gajNtmp4OWDp1Lp6Hy0sKoH6Pjlk4ybjY/RtkVKwYeq1UbxB3tlwoKAI9RxWg3gSe1EavTRoyqp9gwtFnBFX4pWl8Qpyi/ydPsaaGOVszZviGSFxm0/yKn1WG2W4DdcJtEB8UvIb4gjfkx2k2ap9OmWYlZMiluFJOKK53rnIn2Fw1DmpGYqCexQTSC2WJyetnw9chUoQFAGYJoEmAqnp5Gu00yqkTBBNEH668gc+0fUq21GoRaa10/pFrr4xqlWmt9jKkmyeZnzE9HMWrBRI0KEYmJ+Ei4qbXjOVf8ML0d2CCoTRkjHckID4u/MF6JaDdBdnHeVeooUwndnhg8YLt6WqyQ+5ZmtRBRtGnsIGCkaruNZBboNx2ArWuD8TLm7KBmhT89i8KaXpsJzjAuDjiYiJbnAHXFZuuXgO1aeMC40RjtETNs1/42WMubYoM6rtgVep9nyR3UrORbwMmfQlZY//jKdjj5UxTYlzfBCHXYbrbT532S0nNY4Y9VfOj+uwCSI3PMtcE++eIBgOS48JoFI5c3JEY4edBh1fhCaFbNVzZrq0XYTgAt/DIeeRB6SEZ4VHofraDLGLH6oau7FQbtPcEMqHwtrA/B+/RtCDnLc6UPJFbANuSwKpeyWRhTe0jsAClrZF5iKlVxVb6N5C20qfgT20HTgKfVfimZsa84wj58F0rDuIfKTJUuFjtAotluJZfqPdA5Qf4ukr/QJuIrQQcAkoySFfiKmi3O0gTyVSj5ozJPoctLGwHoxhaLmVzYYB7HSB+JP4SbaXOlGYLOouEa5TEAJC9d1Kxw8JvwwG3ECcrNYGqlGSjOEqm3jAKgNS3XnmbQLfKyNQxM3mj3J18Ee1gMaJ+jUP9z3GuTo6QY+SXaOfQXTneIX0MhD9GCzhmELJ8uLp4PovP3IG7uyrdwkIvFhNWfBhMqrpSJ0i9CS/PWvgQNPtiEWL0pk3FxJIGISH4RWpozxK9AmSYiVl8nk/miXjK95TbL+uZpVY1oUWf7N3AyTUWsnp6BBvLTxRnpY54lTkGsvs4vYA/kJVgR7X4yDWYd1jJdLR5Od7sZhaenk3+9lqnfjgYm9SELjU86pJVA18uwltmCxxQ7oqReWqF7tVIdUgP5aSOIdwctk8/4NJMcqDu3McJEzYDG5BFERT20EuhXEH7aSSRTMxlCxM9BrQRyG9LR+qQwmfJzgEQiIuk7B8UxxEVHyRrods2I+KkWbY9kvdu0dRARp9NOInlf1v0QbWiqR80xkH0UI4n0lrWnre8WtREan44BUpjueAARrU+9pnukoRzjmq6ucWFyyelofVpToFvncva0mgJd5Bjjml5jjBzoMy8xpssxciCXYX2eBlpToJseQ0Qcc6m11pKWQDe+xLxXeVv3vAb6DUPMexURqXtemX7BEFOp8rbWkpZANz7s3+x//vtvYOmQU/VCU1U5dv6nA1ZQOCDuAQAAMB4AnQEq0wFYAD5tMJVGpCMiISzoKIANiWlu4MED+AZb5tn4a/QD+OwQD8AP0A/gGqAfgB+gH8AgQD8ALru44Gk8c/wD8AP0T/K/v8HiWAX0iEE98qOfuWHCqjQxmpjzRLZ5962muboXFX52oUTGV1ciNXu060DOJIVOG9dw8ak1a1yOcrKo4AFxoSGMLWO0Fk7gQAJYuoxXP36alwbL/FKXImWQqIZ4zPKGBfH4adYxeHx+xPLmFa69hMWt8WYL/ltn1DhtFSRna9zrTa0WoHDmpQVfwUF5auPIHcxbukX5BRT98xsX2MXmM2sY1rJgdZMDrndfut50gAD9MmI1Dqqzrs45xv//9iPejJp33ezzf/1F9YlvDu1v3VM+T//+xIHlLQ5f9QtMGSJ4DqAAyAdppzCQC5xQeJJZhNBdJxNsMCk1ftYw0Gyz/+yj6BhBcJw+iAui03a9WmTU5ile6HD5HwXTf4GUpf//2iZ0iqIqNr4Gv2kllcwkmHWJkzT/gUf5DU4SnQp8CscxcTPP7+8mqyihLzMZZR6CH9EDyyD4E8THwK/31qcrWlu6Da8Ve4PgbuB26fY0XwMNh6CD+BpmWV+CbaCB23Q1/+pGqTcSIf7r2e8C4AFKMRH8CeDr5sE18RE4ciTEIWQAAAA=",H$="/Ultron_Onboarding/assets/florida-panthers-CzKArKmm.webp",U$="/Ultron_Onboarding/assets/express-healthcare-CyWzv_HP.webp",q$="/Ultron_Onboarding/assets/modsquad-CN5zaz5-.png",V$="/Ultron_Onboarding/assets/titan-medical-group-CzUHaHlx.webp",G$="/Ultron_Onboarding/assets/united-staffing-solutions-CqTdN2IS.webp",Y$=560,B2=320,ki="cubic-bezier(0.22, 1, 0.36, 1)",W2=140,H2={landing:0,workplace:20,loading:40,questions:58},ei=[{key:"pay",prompt:"How are your workers paid?",sub:"So I turn on pay the right way from the start.",options:[{id:"w2",icon:T0,title:"W-2",caption:"Employees on your payroll."},{id:"1099",icon:q0,title:"1099",caption:"Independent contractors."},{id:"both",icon:I0,title:"Both",caption:"A mix of W-2 and 1099."}]},{key:"billing",prompt:"How do you bill clients?",sub:"So I handle billing the way you actually work.",options:[{id:"hourly",icon:Cn,title:"Hourly",caption:"Per hour worked."},{id:"month",icon:E0,title:"By month",caption:"A flat monthly rate."},{id:"post",icon:U0,title:"By post",caption:"Per site or position covered."}]},{key:"worksite",prompt:"Where does your team work?",sub:"So I set up your sites and scheduling to match.",options:[{id:"one",icon:Au,title:"One location",caption:"A single site."},{id:"multi",icon:$u,title:"Multiple locations",caption:"Several of your own sites."},{id:"client",icon:Lu,title:"Client sites",caption:"Out at client locations."}]}];function K$({onComplete:e}){const[a,i]=g.useState("landing"),[s,l]=g.useState({}),[d,p]=g.useState(!1),[m,v]=g.useState(!1),y=Cl(),x=g.useRef(null),b=g.useCallback(L=>{x.current===null&&(v(!0),x.current=window.setTimeout(()=>{L(),v(!1),x.current=null},y?0:B2))},[y]);g.useEffect(()=>()=>{x.current!==null&&window.clearTimeout(x.current)},[]);const k=()=>b(()=>{i("landing"),l({}),p(!1)}),S=()=>b(()=>i("workplace")),_=L=>{l(R=>({...R,...L})),p(!0),b(()=>i("loading"))},C=L=>{const R={...s,...L};if(l(R),R.companyWebsite){e(R);return}b(()=>i("questions"))},N=L=>e({...s,...L}),$=d?1:a==="landing"?0:.4,[M,j]=g.useState(!1),O=M;return r.jsxs(wT,{children:[r.jsx(z2,{links:$}),r.jsx(O2,{}),r.jsx(bT,{type:"button","aria-label":"Restart demo",title:"Restart demo",onClick:k,children:r.jsx(D2,{size:22})}),r.jsx(kT,{children:r.jsxs(_T,{children:[a!=="landing"&&r.jsx(CT,{children:r.jsx(U2,{children:r.jsx(mt,{mark:O?"lines":"magnetic",size:W2,tone:"auto",state:"active",motionSpeed:O?1.7:1,cellCount:H2[a],"aria-label":"Ultron"})})}),r.jsxs(ST,{$exiting:m,children:[a==="landing"&&r.jsx(aT,{onNext:S}),a==="workplace"&&r.jsx(jl,{children:r.jsx(lT,{onAnswer:_})}),a==="loading"&&(s.companyWebsite||s.failedWebsite||s.noWebsite)&&r.jsx(dT,{website:s.companyWebsite,failedWebsite:s.failedWebsite,onDone:C,onProcessingChange:j}),a==="questions"&&r.jsx(gT,{onComplete:N})]})]})})]})}const Q$="Lead the work that matters.",Z$="Show us your company and we'll set up the work.",X$=41e3,km=[{name:"Levi's Stadium",src:B$},{name:"ProCare HR",src:W$},{name:"Florida Panthers",src:H$},{name:"Express Healthcare",src:U$},{name:"ModSquad",src:q$},{name:"Titan Medical Group",src:V$},{name:"United Staffing Solutions",src:G$}],_m=[{quote:"Ultron turned three days of scheduling into ten minutes. It just handles the busywork so my managers don't have to.",name:"Dana Okafor",role:"Director of Operations",org:"Meridian Care",avatarColor:"purple",photo:"https://i.pravatar.cc/160?u=dana.okafor"},{quote:"Every event used to start with a spreadsheet marathon. Now open shifts fill themselves before I've finished my coffee.",name:"Marcus Webb",role:"Event Staffing Manager",org:"Levi's Stadium",avatarColor:"blue",photo:"https://i.pravatar.cc/160?u=marcus.webb"},{quote:"Onboarding a class of forty caregivers used to eat my whole week. Ultron drafts it, I review it, done by lunch.",name:"Priya Raman",role:"VP of People",org:"ProCare HR",avatarColor:"green",photo:"https://i.pravatar.cc/160?u=priya.raman"},{quote:"It caught a credential lapse we'd have missed and reworked the schedule around it before anyone had to call in.",name:"Sofia Delgado",role:"Compliance Lead",org:"Express Healthcare",avatarColor:"orange",photo:"https://i.pravatar.cc/160?u=sofia.delgado"},{quote:"It's like giving every team its own ops coordinator without adding headcount. My leads finally lead again.",name:"Jamie Chen",role:"Workforce Lead",org:"ModSquad",avatarColor:"azure",photo:"https://i.pravatar.cc/160?u=jamie.chen"}],J$=6e3;function eT(){return r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[r.jsx("path",{fill:"#4285F4",d:"M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"}),r.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"}),r.jsx("path",{fill:"#FBBC05",d:"M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9 9 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"}),r.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.346l2.582-2.581C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"})]})}function tT(){return r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[r.jsx("rect",{x:"1",y:"1",width:"7.2",height:"7.2",fill:"#F25022"}),r.jsx("rect",{x:"9.8",y:"1",width:"7.2",height:"7.2",fill:"#7FBA00"}),r.jsx("rect",{x:"1",y:"9.8",width:"7.2",height:"7.2",fill:"#00A4EF"}),r.jsx("rect",{x:"9.8",y:"9.8",width:"7.2",height:"7.2",fill:"#FFB900"})]})}function nT(){return r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{fill:"currentColor",d:"M16.365 1.43c0 1.14-.42 2.2-1.11 2.98-.75.87-1.98 1.54-3.13 1.45-.14-1.12.4-2.29 1.06-3.03.73-.83 2.02-1.44 3.18-1.4zM20.44 17.03c-.56 1.29-1.24 2.57-2.31 3.62-.9.88-1.99 1.98-3.4 1.99-1.36.01-1.71-.9-3.56-.89-1.85.01-2.24.91-3.6.9-1.41-.01-2.44-1-3.34-1.88-2.5-2.47-4.4-6.98-1.83-10.13.9-1.11 2.35-1.81 3.87-1.83 1.42-.02 2.76.96 3.56.96.8 0 2.44-1.18 4.11-1.01.7.03 2.66.28 3.92 2.13-3.4 2.09-2.86 6.72.58 8.04z"})})}const rT=[{id:"google",label:"Continue with Google",mark:eT},{id:"microsoft",label:"Continue with Microsoft",mark:tT},{id:"apple",label:"Continue with Apple",mark:nT}];function oT(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function aT({onNext:e}){const[a,i]=g.useState(!1),[s,l]=g.useState(""),[d,p]=g.useState(null),m=g.useRef(null),v=Cl();return g.useEffect(()=>{const y=window.setTimeout(()=>i(!0),v?0:500);return()=>window.clearTimeout(y)},[v]),g.useEffect(()=>{var y;d&&((y=m.current)==null||y.focus())},[d]),r.jsxs(NT,{children:[r.jsx(RT,{children:r.jsxs(LT,{children:[r.jsx(U2,{children:r.jsx(mt,{mark:"magnetic",size:W2,tone:"auto",state:"active",cellCount:H2.landing,"aria-label":"Ultron"})}),r.jsx(sI,{children:Q$}),a&&r.jsxs(AT,{children:[r.jsx(lI,{children:Z$}),r.jsxs($T,{"aria-label":"Get started",children:[r.jsx(TT,{children:rT.map(y=>{const x=y.mark;return r.jsx(IT,{variant:"secondary",size:"lg",type:"button",leadingArtwork:r.jsx(x,{}),onClick:e,children:y.label},y.id)})}),r.jsx(ET,{"aria-hidden":"true",children:r.jsx(PT,{children:"or start with email"})}),r.jsxs(zT,{noValidate:!0,onSubmit:y=>{y.preventDefault(),s.trim()===""||oT(s)?e():p({text:"That doesn't look like an email — try you@company.com."})},children:[r.jsx(pr,{content:(d==null?void 0:d.text)??"",placement:"top",disabled:!d,children:r.jsx(DT,{ref:m,"aria-label":"Work email",placeholder:"you@company.com",value:s,onChange:y=>{l(y.target.value),d&&p(null)}})}),r.jsx(OT,{variant:"primary",size:"lg",type:"submit",children:"Start for free"}),r.jsx(FT,{children:"No credit card. Free WFM forever. Credits expire — your workspace doesn't."})]})]})]})]})}),r.jsx(MT,{"aria-hidden":"true"}),a&&r.jsx(iT,{})]})}function iT(){const[e,a]=g.useState(0);g.useEffect(()=>{const s=setInterval(()=>a(l=>(l+1)%_m.length),J$);return()=>clearInterval(s)},[]);const i=_m[e];return r.jsx(BT,{children:r.jsxs(WT,{children:[r.jsx(sT,{}),r.jsxs(tI,{children:[r.jsx(nI,{children:`“${i.quote}”`}),r.jsxs(rI,{children:[r.jsx(Wn,{name:i.name,src:i.photo,alt:i.name,color:i.avatarColor,size:"lg"}),r.jsxs(oI,{children:[r.jsx(aI,{children:i.name}),r.jsx(iI,{children:`${i.role} · ${i.org}`})]})]})]},e),r.jsxs(QT,{children:[r.jsx(ZT,{children:"Trusted by frontline operators"}),r.jsxs(JT,{"aria-label":"Operators using Teambridge",children:[r.jsx(Cm,{children:km.map(s=>r.jsx(jm,{src:s.src,alt:s.name,loading:"lazy"},s.name))}),r.jsx(Cm,{"aria-hidden":"true",children:km.map(s=>r.jsx(jm,{src:s.src,alt:"",loading:"lazy"},`${s.name}-dup`))})]})]})]})})}function sT(){const e=yT(X$,1600);return r.jsxs(HT,{children:[r.jsxs(UT,{children:[r.jsx(VT,{"aria-hidden":"true"}),r.jsx(GT,{children:"Ultron Index · Live"})]}),r.jsx(YT,{children:e.toLocaleString("en-US")}),r.jsx(KT,{children:"pieces of work Ultron performed this week"})]})}function lT({onAnswer:e}){const[a,i]=g.useState(""),s=a.trim().length>0,l=()=>{const d=a.trim();d&&e(vT(d)?{companyWebsite:d}:{failedWebsite:d})};return r.jsxs(r.Fragment,{children:[r.jsx(Sl,{children:"Where do you work?"}),r.jsx(uI,{children:"Drop your URL and Ultron will set up Teambridge for your team. No blank slate, no busywork."}),r.jsx(G2,{onSubmit:d=>{d.preventDefault(),l()},children:r.jsxs(Y2,{children:[r.jsx(ZI,{"aria-hidden":"true",children:r.jsx(Tu,{size:18})}),r.jsx(K2,{rows:1,value:a,placeholder:"yourcompany.com","aria-label":"Company website",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),l())}}),r.jsx(Q2,{children:r.jsx(sa,{state:s?"ready":"disabled-invalid",onSend:l})})]})}),r.jsx(XI,{children:r.jsx(Z2,{type:"button",onClick:()=>e({noWebsite:!0}),children:"No website? Pick a workforce instead"})})]})}const Fd=["Scanning your site","Identifying your workforce","Mapping services & clients","Organizing your workspace"],cT=820;function dT({website:e,failedWebsite:a,onDone:i,onProcessingChange:s}){return e?r.jsx(pT,{website:e,onDone:i,onProcessingChange:s}):r.jsx(mT,{failedWebsite:a,onDone:i})}const uT=["worker_types","talent_categories","client_types","service_models","tech_footprint","access_model","compliance"];function pT({website:e,onDone:a,onProcessingChange:i}){const{name:s,host:l}=xT(e),d=Fd.length,[p,m]=g.useState(1),[v,y]=g.useState(!1);g.useEffect(()=>{i==null||i(!v)},[v,i]),g.useEffect(()=>()=>i==null?void 0:i(!1),[i]);const x=g.useMemo(()=>MS(e),[e]),b=g.useMemo(()=>uT.reduce((S,_)=>S+x[_].length,0),[x]);g.useEffect(()=>{const S=_=>{_.key.toLowerCase()==="t"&&(_.preventDefault(),v?a({}):p>=d?y(!0):m(C=>Math.min(C+1,d)))};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[p,v,d,a]);const k=Fd[p-1];return r.jsxs(jl,{$wide:!0,children:[r.jsx(Sl,{children:v?"Nearly there!":`Turning on ${s}`}),r.jsx(Nl,{children:v?"Your free account is taking shape.":"Hang tight — I'm reading your site and getting your workspace ready."}),r.jsxs(wI,{role:"status","aria-live":"polite",children:[r.jsxs(CI,{$running:!v,children:[r.jsx(Tu,{size:14}),l,r.jsx(jI,{"aria-hidden":"true",children:"·"}),v?r.jsxs(SI,{children:[r.jsx(pn,{size:13})," read ",b," signals"]}):r.jsx(NI,{children:`${k}…`},k)]}),r.jsx(bI,{role:"progressbar","aria-valuemin":0,"aria-valuemax":d,"aria-valuenow":v?d:p-1,"aria-label":`Step ${Math.min(p,d)} of ${d}`,$complete:v,children:Fd.map((S,_)=>{const C=v||_+1<p?"done":_+1===p?"working":"pending";return r.jsx(kI,{"data-status":C,children:C!=="pending"&&r.jsx(_I,{$working:C==="working"})},S)})})]}),r.jsx(hT,{learned:x,loading:!v}),v&&r.jsxs(r.Fragment,{children:[r.jsx(HI,{children:r.jsx(Te,{variant:"primary",size:"lg",onClick:()=>a({}),trailingArtwork:r.jsx(j0,{size:18}),children:"Looks good, continue"})}),r.jsx(UI,{children:r.jsx(Z2,{type:"button",onClick:()=>{m(1),y(!1)},children:"Start over"})})]})]})}function hT({learned:e,loading:a}){const{company:i}=e;return r.jsxs(RI,{children:[r.jsxs(LI,{children:[r.jsxs(AI,{children:[r.jsx($I,{"aria-hidden":"true",children:a?r.jsx(Zt,{$w:"20px",$h:"20px",$round:!0}):r.jsx($u,{size:20})}),r.jsx(TI,{children:a?r.jsxs(r.Fragment,{children:[r.jsx(Zt,{$w:"240px",$h:"1em"}),r.jsx(Zt,{$w:"160px",$h:"0.85em"})]}):r.jsxs(r.Fragment,{children:[r.jsx(II,{children:e.workforce_type}),r.jsx(EI,{children:i.name})]})})]}),r.jsx(PI,{children:a?r.jsxs(r.Fragment,{children:[r.jsx(Zt,{$w:"110px",$h:"0.9em"}),r.jsx(Zt,{$w:"150px",$h:"0.9em"}),r.jsx(Zt,{$w:"170px",$h:"0.9em"})]}):r.jsxs(r.Fragment,{children:[r.jsxs(Bd,{children:[r.jsx(Cn,{size:14}),r.jsxs(Wd,{children:["Founded ",i.founded]})]}),i.parent&&r.jsxs(Bd,{children:[r.jsx(Au,{size:14}),r.jsxs(Wd,{children:["Part of ",i.parent]})]}),r.jsxs(Bd,{children:[r.jsx(ku,{size:14}),r.jsx(Wd,{children:i.footprint})]})]})})]}),e.narrative.map((s,l)=>r.jsx(zI,{style:{"--group-i":l+1},children:a?r.jsxs(r.Fragment,{children:[r.jsx(Zt,{$w:"128px",$h:"0.95em"}),r.jsxs(MI,{children:[r.jsx(Zt,{$h:"0.85em"}),r.jsx(Zt,{$h:"0.85em"}),r.jsx(Zt,{$h:"0.85em",$w:"62%"})]}),r.jsxs(Sm,{children:[r.jsx(Zt,{$w:"76px",$h:"20px",$round:!0}),r.jsx(Zt,{$w:"92px",$h:"20px",$round:!0}),r.jsx(Zt,{$w:"64px",$h:"20px",$round:!0})]})]}):r.jsxs(r.Fragment,{children:[r.jsx(OI,{children:s.label}),r.jsx(DI,{children:s.body}),r.jsx(Sm,{children:s.tags.map(d=>r.jsx(jn,{size:"sm",variant:"subtle",color:"neutral",children:d},d))})]})},s.label)),r.jsx(FI,{style:{"--group-i":e.narrative.length+1},children:a?r.jsx(Zt,{$w:"152px",$h:"0.95em"}):r.jsx(BI,{children:"Consider it handled."})})]},a?"readout-loading":"readout-ready")}const fT=[{icon:W0,label:"Travel nurses"},{icon:Ru,label:"Event staff"},{icon:ju,label:"Security guards"},{icon:P0,label:"Warehouse temps"}];function mT({failedWebsite:e,onDone:a}){const[i,s]=g.useState(""),l=i.trim().length>0,d=()=>{const p=i.trim();p&&a({workforceType:p})};return r.jsxs(jl,{children:[e&&r.jsx(WI,{children:"No problem — let's set it up together."}),r.jsx(Sl,{children:"What workforce do you need help with?"}),r.jsx(Nl,{children:"Say it in your own words — or grab one of these."}),r.jsx(pI,{children:fT.map(({icon:p,label:m})=>r.jsxs(hI,{type:"button",onClick:()=>a({workforceType:m}),children:[r.jsx(p,{size:16}),m]},m))}),r.jsx(G2,{onSubmit:p=>{p.preventDefault(),d()},children:r.jsxs(Y2,{children:[r.jsx(K2,{rows:1,value:i,placeholder:"e.g. home-care aides across three cities","aria-label":"Describe your workforce",onChange:p=>s(p.target.value),onKeyDown:p=>{p.key==="Enter"&&!p.shiftKey&&(p.preventDefault(),d())}}),r.jsx(Q2,{children:r.jsx(sa,{state:l?"ready":"disabled-invalid",onSend:d})})]})})]})}function gT({onComplete:e}){const a=Cl(),[i,s]=g.useState(0),l=g.useRef({}),d=ei[i],p=m=>{l.current={...l.current,[d.key]:m.title};const v=i+1;v>=ei.length?e(l.current):s(v)};return r.jsxs(jl,{children:[r.jsx(qI,{role:"progressbar","aria-valuemin":1,"aria-valuemax":ei.length,"aria-valuenow":i+1,"aria-label":`Question ${i+1} of ${ei.length}`,children:ei.map((m,v)=>r.jsx(VI,{"data-filled":v<=i||void 0},m.key))}),r.jsx(Sl,{children:d.prompt}),r.jsx(Nl,{children:d.sub}),r.jsx(GI,{role:"radiogroup","aria-label":d.prompt,children:d.options.map((m,v)=>{const y=m.icon;return r.jsxs(YI,{type:"button",role:"radio","aria-checked":!1,style:{animationDelay:a?"0ms":`${v*70}ms`},onClick:()=>p(m),children:[r.jsx(q2,{"aria-hidden":"true",children:r.jsx(y,{size:20})}),r.jsxs(KI,{children:[r.jsx(fI,{children:m.title}),r.jsx(mI,{children:m.caption})]})]},m.id)})})]},d.key)}function vT(e){const a=e.trim().replace(/\s+/g,"");if(!a)return!1;const i=/^https?:\/\//i.test(a)?a:`https://${a}`;let s;try{s=new URL(i).hostname}catch{return!1}return/^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(s)}function xT(e){const a=e.replace(/\s+/g,""),i=/^https?:\/\//i.test(a)?a:`https://${a}`;let s=a;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),{name:(s.split(".")[0]||s).split(/[-_]/).map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" ")||s,host:s}}function yT(e,a){const i=Cl(),[s,l]=g.useState(i?e:0);return g.useEffect(()=>{if(i){l(e);return}let d=0,p=null;const m=v=>{p===null&&(p=v);const y=Math.min(1,(v-p)/a),x=1-Math.pow(1-y,3);l(Math.round(e*x)),y<1&&(d=window.requestAnimationFrame(m))};return d=window.requestAnimationFrame(m),()=>window.cancelAnimationFrame(d)},[e,a,i]),s}function Cl(){const[e,a]=g.useState(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}});return g.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return}const s=d=>a(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}const wT=f.div`
  /* Anchors the ambient backdrop layer, which fills the frame behind Scroll. */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`,bT=f.button`
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
`,kT=f.main`
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
`,_T=f.div`
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
  ${e=>e.$augment&&qe`
      min-height: 0;
      flex: 1;
      flex-shrink: 1;
      gap: 0;
      padding: 0;
      align-items: stretch;
    `}
`,CT=f.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`,U2=f.span`
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
`,jT=Se`
  from { opacity: 1; }
  to   { opacity: 0; }
`,ST=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${e=>e.$exiting&&qe`
      animation: ${jT} ${B2}ms var(--ease-in) forwards;
    `}

  /* Augment canvas: stretch to fill the frame so the two-column split owns the
     whole height, with its panes scrolling internally. */
  ${e=>e.$augment&&qe`
      flex: 1;
      min-height: 0;
      align-items: stretch;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,NT=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  width: 100%;
`,MT=f.div`
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
`,RT=f.div`
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
`,LT=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-5);
  width: 100%;
  max-width: 400px;
`,op=Se`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,AT=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  width: 100%;
  animation: ${op} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,$T=f.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-4);
  width: 100%;
  max-width: 360px;
`,TT=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,IT=f(Te)`
  && {
    width: 100%;
    ${Hr}
  }
`,ET=f.div`
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
`,PT=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,zT=f.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`,OT=f(Te)`
  && {
    width: 100%;
  }
`,DT=f(rg)`
  && [class*='shell'] {
    ${Hr}
  }
  && input {
    background: transparent;
  }
`,FT=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  text-align: center;
`,BT=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* No surface — the proof content sits directly on the ambient particle
     backdrop; only the padding holds its measure. */
  padding: var(--space-10);
  animation: ${op} var(--duration-slow) var(--ease-out) both;

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
`,WT=f.div`
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
`,HT=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,UT=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,qT=Se`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.35; transform: scale(0.8); }
`,VT=f.span`
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-success-fill);
  flex-shrink: 0;
  animation: ${qT} 2s var(--ease-default) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,GT=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,YT=f.span`
  font-family: var(--font-sans);
  /* Anchors the panel now that there's no card around it. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Hold digit width so the count-up doesn't jitter the caption below. */
  font-variant-numeric: tabular-nums;
`,KT=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,QT=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding-top: var(--space-3);
`,ZT=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,XT=Se`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,JT=f.div`
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
`,Cm=f.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-6);
  padding-right: var(--space-6);
  animation: ${XT} 32s linear infinite;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,jm=f.img`
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
`,eI=Se`
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,tI=f.figure`
  ${Hr}
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
  animation: ${eI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,nI=f.blockquote`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,rI=f.figcaption`
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
`,oI=f.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,aI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,iI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,sI=f.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Pops in (no type-out). */
  animation: ${op} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,lI=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 560px;
`,cI=Se`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,jl=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  /* $wide widens the step for the workforce-type grid so its three cards have
     room to keep each caption on a single line. */
  max-width: ${e=>e.$wide?"1060px":"720px"};
  text-align: center;
  animation: ${cI} ${Y$}ms ${ki} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Sl=f.h1`
  margin: 0;
  font-family: var(--font-sans);
  /* Matches the opening landing headline (Headline) so step titles read consistently. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,Nl=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
  max-width: 520px;
`,dI=Se`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,uI=f(Nl)`
  animation: ${dI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,pI=f.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
`,hI=f.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  ${Hr}
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
    ${F2}
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
`,q2=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  margin-bottom: var(--space-2);
`,fI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,mI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,V2=Se`
  from { opacity: 0; transform: translateY(10px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,gI=Se`
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
`,vI=Se`
  from { background-position: 100% 0; }
  to   { background-position: -100% 0; }
`,xI=Se`
  0%   { transform: scaleX(0); }
  68%  { transform: scaleX(1); }
  100% { transform: scaleX(1); }
`,yI=Se`
  0%   { opacity: 1; }
  35%  { opacity: 0.45; }
  100% { opacity: 1; }
`,wI=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  max-width: 360px;
  margin-top: var(--space-5);
`,bI=f.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;

  ${e=>e.$complete&&qe`
    & > * > * {
      animation: ${yI} 900ms ${ki};
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    & > * > * { animation: none; }
  }
`,kI=f.div`
  flex: 1;
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  overflow: hidden;
`,_I=f.div`
  height: 100%;
  width: 100%;
  border-radius: var(--radius-full);
  background: var(--color-content-primary);

  ${e=>e.$working&&qe`
    /* The working fill draws in from the LEFT edge (scaleX, origin left) on a
       loop — draw, hold, redraw — so the bar stays visibly in motion while it
       waits for the next beat, reading as ongoing work rather than a stall. */
    transform-origin: left center;
    animation: ${xI} ${cT+380}ms ${ki} infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: var(--color-content-primary);
  }
`,CI=f.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  /* While the read is still running the line reads lighter (tertiary); once it
     completes it firms up to secondary alongside the "read N signals" tally. */
  color: ${e=>e.$running?"var(--color-content-tertiary)":"var(--color-content-secondary)"};

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,jI=f.span`
  color: var(--color-content-tertiary);
`,SI=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  color: var(--color-success-content);

  svg { color: var(--color-success-content); }
`,NI=f.span`
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
  animation: ${gI} 1.6s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    color: var(--color-content-tertiary);
    background: none;
    animation: none;
  }
`,Zt=f.span`
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
  animation: ${vI} 1.6s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    background: var(--color-bg-tertiary);
    animation: none;
  }
`,MI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
`,RI=f.div`
  width: 100%;
  max-width: 680px;
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  text-align: left;
`,ap=qe`
  animation: ${V2} var(--duration-base) ${ki} both;
  animation-delay: calc(var(--group-i, 0) * 90ms);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,LI=f.div`
  ${Hr}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${ap}
`,AI=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,$I=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-tertiary);
  color: var(--color-content-primary);
`,TI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,II=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,EI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,PI=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`,Bd=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,Wd=f.span`
  color: var(--color-content-primary);
`,zI=f.div`
  ${Hr}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  ${ap}
`,OI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,DI=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,Sm=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-1);
`,FI=f.div`
  display: flex;
  justify-content: center;
  padding-top: var(--space-2);
  ${ap}
`,BI=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  text-align: center;
`,WI=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 480px;
`,HI=f.div`
  margin-top: var(--space-5);
`,UI=f.div`
  margin-top: var(--space-3);
`,qI=f.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;
  max-width: 140px;
`,VI=f.span`
  flex: 1;
  /* Hairline — deliberately below the 4px grid for a thin progress line. */
  height: 2px;
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  transition: background var(--duration-base) var(--ease-out);

  &[data-filled] {
    background: var(--color-content-primary);
  }
`,GI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 480px;
  margin-top: var(--space-3);
`,YI=f.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  text-align: left;
  ${Hr}
  border-radius: var(--radius-lg);
  cursor: pointer;
  /* fill "backwards" (not "both"): holds the pre-entrance state during the
     stagger delay, but releases transform once the pop finishes — a filled
     animation would keep pinning transform and the hover lift below never
     applies. */
  animation: ${V2} var(--duration-base) ${ki} backwards;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  ${q2} {
    margin-bottom: 0;
  }

  &:hover {
    ${F2}
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
`,KI=f.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,G2=f.form`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  ${Hr}
  border-radius: var(--radius-xl);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,Y2=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
`,QI=Se`
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
`,ZI=f.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary);
  flex-shrink: 0;
  animation: ${QI} var(--duration-base) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,K2=f.textarea`
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
`,Q2=f(Nu)`
  && {
    flex: 0 0 auto;
    width: auto;
    --composer-btn-size: var(--space-8); /* 32px */
    --composer-btn-icon-attach: var(--space-4); /* 16px */
    --composer-btn-icon-send: var(--space-4); /* 16px */
  }
`,XI=f.div`
  margin-top: var(--space-3);
`,Z2=f.button`
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
`;function JI({onEnterApp:e}){return r.jsx(K$,{onComplete:a=>e==null?void 0:e(a)})}const eE=768,tE=`(max-width: ${eE-1}px)`;function ip(e){const[a,i]=g.useState(()=>typeof window>"u"?!1:window.matchMedia(e).matches);return g.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(e),l=d=>i(d.matches);return i(s.matches),s.addEventListener("change",l),()=>s.removeEventListener("change",l)},[e]),a}function nE(){return ip(tE)}const rE="48px",oE="240px",Nm="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",aE=f.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${e=>e.$isExpanded?oE:rE};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${e=>e.$isExpanded?qe`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:qe`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${e=>e.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,iE=f.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${e=>e.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${e=>e.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,sE=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,lE=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,cE=f.button`
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
`,dE=f.div`
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
`,uE=f.span`
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
`,Mm=f.div`
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
`,Hd=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,pE="var(--gradient-ai)",X2=f.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${e=>e.$isActive&&!e.$isAi&&qe`
      background: var(--color-bg-primary, white);
      box-shadow: ${Nm}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${e=>e.$isActive&&e.$isAi&&qe`
      background: ${pE};
      box-shadow: ${Nm}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,J2=f.button`
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
`,ev=f.span`
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
`,tv=f.div`
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
`,hE=f.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,Ud=f.hr`
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
`;const fE=f.button`
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
`,mE=f.div`
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
`,gE=f.span`
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
`;function qd({item:e,isExpanded:a,showNewBadge:i,isAi:s}){const l=e.isActive??!1,d=e.disabled??!1;return r.jsx(X2,{$isActive:l,$isAi:s,children:r.jsxs(J2,{$isActive:l,$isAiActive:l&&!!s,$disabled:d,disabled:d,onClick:d?void 0:e.onClick,"aria-current":l?"page":void 0,title:a?void 0:e.label,children:[r.jsxs(tv,{children:[e.hasUnread&&r.jsx(hE,{}),l&&e.activeIcon?e.activeIcon:e.icon]}),a&&r.jsx(ev,{children:e.label}),a&&i&&r.jsx(ia,{variant:"primary",children:"New"})]})})}function vE({items:e,toolItems:a=[],bottomItems:i=[],workspace:s,user:l,onWorkspaceClick:d,onUserClick:p,onSettingsClick:m,newItemId:v,aiItemId:y}){const[x,b]=g.useState(!1);return r.jsx(aE,{$isExpanded:x,onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),"aria-label":"Primary navigation",children:r.jsxs(iE,{$isExpanded:x,children:[r.jsxs(sE,{children:[r.jsxs(cE,{$isExpanded:x,onClick:d,"aria-label":`Workspace: ${s.name}`,title:x?void 0:s.name,children:[r.jsx(dE,{children:s.logoUrl?r.jsx("img",{src:s.logoUrl,alt:s.name}):s.initial??s.name.charAt(0).toUpperCase()}),x&&r.jsxs(r.Fragment,{children:[r.jsx(uE,{children:s.name}),r.jsx(Mm,{children:r.jsx($f,{})})]})]}),r.jsx(Hd,{children:e.map(k=>r.jsx(qd,{item:k,isExpanded:x,isAi:k.id===y},k.id))}),a.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(Ud,{}),r.jsx(Hd,{children:a.map(k=>r.jsx(qd,{item:k,isExpanded:x,showNewBadge:k.id===v,isAi:k.id===y},k.id))})]})]}),r.jsxs(lE,{children:[i.length>0&&r.jsxs(r.Fragment,{children:[r.jsx(Ud,{}),r.jsx(Hd,{children:i.map(k=>r.jsx(qd,{item:k,isExpanded:x,isAi:k.id===y},k.id))})]}),r.jsx(Ud,{}),r.jsx(X2,{$isActive:!1,children:r.jsxs(J2,{$isActive:!1,onClick:m,"aria-label":"Settings",title:x?void 0:"Settings",children:[r.jsx(tv,{children:r.jsx(nN,{})}),x&&r.jsx(ev,{children:"Settings"})]})}),r.jsxs(fE,{$isExpanded:x,onClick:p,"aria-label":`User: ${l.name}`,title:x?void 0:l.name,children:[r.jsx(mE,{$color:l.avatarColor,children:l.initials}),x&&r.jsxs(r.Fragment,{children:[r.jsx(gE,{children:l.name}),r.jsx(Mm,{children:r.jsx($f,{})})]})]})]})]})})}const xE=270,yE=f.nav`
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
`,wE=f.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,bE=f.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,kE=f.h2`
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
`,_E=f.div`
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
`,CE=f.button`
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
`,jE=f.div`
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
`,SE=f.button`
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
`;const NE=f.span`
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
`,ME=f.div`
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
`,RE=Se`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,LE=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${RE} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,Rm=f.button`
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
`,AE=f.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${e=>e.$outlined&&qe`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,$E=f.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,TE=f.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,IE=f.div`
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
`,EE=f.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,PE=f.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,zE=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,nv=f.div`
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
`;function rv(){return r.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function OE(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const sp={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function DE({item:e}){return r.jsx(un,{label:r.jsx("span",{style:{color:e.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:e.isActive?500:void 0,letterSpacing:"-0.084px"},children:e.label}),leadingSlot:r.jsx(nv,{children:e.icon??r.jsx(rv,{})}),selected:e.isActive,onClick:e.onClick,divider:!1,size:"md","aria-current":e.isActive?"page":void 0,style:sp})}function FE({group:e}){const[a,i]=g.useState(e.defaultExpanded??!0),[s,l]=g.useState(!1),d=e.maxVisible,m=d!=null&&!s&&e.children.length>d?e.children.slice(0,d):e.children,v=e.children.length-m.length;return r.jsxs(AE,{$outlined:e.outlined,children:[r.jsxs(SE,{onClick:()=>i(y=>!y),"aria-expanded":a,children:[r.jsx(ME,{children:a?r.jsx(Sn,{size:16}):r.jsx(fn,{size:16})}),r.jsx(NE,{children:e.label}),e.trailingBadge&&r.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:e.trailingBadge})]}),a&&r.jsxs(LE,{children:[m.map(y=>r.jsx(un,{label:r.jsx("span",{style:{color:y.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:y.isActive?500:void 0,letterSpacing:"-0.084px"},children:y.label}),leadingSlot:r.jsx(nv,{children:y.icon??null}),trailingSlot:y.trailingSlot,selected:y.isActive,onClick:y.onClick,divider:!1,size:"md","aria-current":y.isActive?"page":void 0,style:sp},y.id)),v>0&&r.jsxs(Rm,{type:"button",onClick:()=>l(!0),children:["Show ",v," more"]}),d!=null&&s&&e.children.length>d&&r.jsx(Rm,{type:"button",onClick:()=>l(!1),children:"Show less"})]})]})}function BE({heading:e,isVisible:a,menuEntries:i=[],menuHeader:s,pageEntries:l=[],showSearch:d=!0,searchValue:p="",onSearchChange:m,onFilterClick:v,headerSlot:y,bodyContent:x,width:b=xE,onWidthChange:k,minWidth:S=220,maxWidth:_=520}){const C=x!==void 0,N=g.useRef(null),[$,M]=g.useState(!1);return g.useEffect(()=>{if(!$||!k)return;const j=N.current;if(!j)return;const O=j.getBoundingClientRect().left,L=z=>{const W=Math.min(_,Math.max(S,z.clientX-O));k(W)},R=()=>M(!1);window.addEventListener("mousemove",L),window.addEventListener("mouseup",R);const I=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",R),document.body.style.userSelect=I,document.body.style.cursor=""}},[$,k,S,_]),r.jsxs(yE,{ref:N,$isVisible:a,$width:b,$isResizing:$,"aria-label":"Secondary navigation",children:[r.jsxs(wE,{children:[(e||y)&&r.jsxs(bE,{children:[r.jsx(kE,{children:e}),y]}),d&&!C&&r.jsxs(_E,{children:[r.jsx(ng,{size:"sm",placeholder:"Search...",value:p,onChange:j=>m==null?void 0:m(j.target.value)}),r.jsx(CE,{onClick:v,"aria-label":"Filter",children:r.jsx(OE,{})})]})]}),C?x:r.jsxs(jE,{children:[s,i.map(j=>j.type==="single"?r.jsx(DE,{item:j.item},j.item.id):j.type==="group"?r.jsx(FE,{group:j.group},j.group.id):j.type==="divider"?r.jsx(PE,{},j.id):r.jsx($E,{children:j.label.label},j.label.id))]}),l.length>0&&r.jsxs(TE,{children:[r.jsx(EE,{}),l.map(j=>r.jsx(un,{label:r.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:j.label}),leadingSlot:r.jsx(zE,{children:j.icon??r.jsx(rv,{})}),onClick:j.onClick,selected:j.isActive??!1,divider:!1,size:"md","aria-current":j.isActive?"page":void 0,style:sp},j.id))]}),k&&a&&r.jsx(IE,{$isResizing:$,onMouseDown:j=>{j.preventDefault(),M(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const WE=f.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:e})=>e?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,HE=f.div`
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
`,ov=f.div`
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
`,UE=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,qE=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function VE(){return r.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function Lm(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function Am(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function GE(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function YE({heading:e,actions:a=[],showActivityButton:i=!0,showPonderButton:s=!0,noBorder:l=!1,onActivityClick:d,onPonderClick:p,onDotsClick:m}){const v=a.filter(b=>b.variant==="secondary"),y=a.filter(b=>b.variant==="primary"),x=ip("(prefers-color-scheme: dark)");return r.jsxs(WE,{$noBorder:l,children:[r.jsx(HE,{children:typeof e=="string"?r.jsx(ov,{children:e}):e}),r.jsxs(UE,{children:[r.jsxs(qE,{children:[r.jsx(Te,{variant:"ghost",size:"sm",iconOnly:!0,onClick:m,"aria-label":"More options",title:"More options",children:r.jsx(VE,{})}),v.map(b=>r.jsx(Te,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(Am,{}),trailingArtwork:r.jsx(Lm,{}),onClick:b.onClick,children:b.label},b.id)),y.map(b=>r.jsx(Te,{variant:"primary",size:"sm",leadingArtwork:r.jsx(Am,{}),trailingArtwork:r.jsx(Lm,{}),onClick:b.onClick,children:b.label},b.id))]}),i&&r.jsx(Te,{variant:"ghost",size:"sm",iconOnly:!0,onClick:d,"aria-label":"Activity",title:"Activity",children:r.jsx(GE,{})}),s&&r.jsx(h0,{dark:x,onClick:p,"aria-label":"Ponder AI"})]})]})}const KE=f.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,QE=f.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,ZE=f.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
`,XE=f.main`
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
`,$m="tb:secondary-nav-width",Tm=270,Im=220,Em=520;function JE({items:e,toolItems:a,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:p,onSettingsClick:m,newItemId:v,aiItemId:y,secNavHeading:x,menuEntries:b,menuHeader:k,pageEntries:S,showSearch:_,searchValue:C,onSearchChange:N,onFilterClick:$,headerSlot:M,bodyContent:j,heading:O,actions:L,showActivityButton:R,showPonderButton:I,noBorder:z,onActivityClick:W,onPonderClick:G,onDotsClick:Q,children:B,showSecondaryNav:Y=!0,showTopNav:ee=!0}){const[oe,le]=g.useState(()=>{if(typeof window>"u")return Tm;const re=window.localStorage.getItem($m),X=re?parseInt(re,10):NaN;return Number.isFinite(X)?Math.min(Em,Math.max(Im,X)):Tm});return g.useEffect(()=>{typeof window>"u"||window.localStorage.setItem($m,String(oe))},[oe]),r.jsxs(KE,{children:[r.jsx(vE,{items:e,toolItems:a,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:p,onSettingsClick:m,newItemId:v,aiItemId:y}),r.jsxs(QE,{children:[Y&&r.jsx(BE,{heading:x,menuEntries:b,menuHeader:k,pageEntries:S,isVisible:!0,showSearch:_,searchValue:C,onSearchChange:N,onFilterClick:$,headerSlot:M,bodyContent:j,width:oe,onWidthChange:le,minWidth:Im,maxWidth:Em}),r.jsxs(ZE,{children:[ee&&r.jsx(YE,{heading:O,actions:L,showActivityButton:R,showPonderButton:I,noBorder:z,onActivityClick:W,onPonderClick:G,onDotsClick:Q}),r.jsx(XE,{children:B})]})]})]})}function eP({deadZonePx:e=8,topThresholdPx:a=20,target:i}={}){const[s,l]=g.useState(null),d=g.useRef(0);return g.useEffect(()=>{var y;const p=()=>i?i.scrollTop:typeof window<"u"?window.scrollY:0;d.current=p();const m=()=>{const x=p(),b=x-d.current;Math.abs(b)<e||(b>0&&x>a?l("down"):b<0&&l("up"),d.current=x)},v=i??(typeof window<"u"?window:{});return(y=v.addEventListener)==null||y.call(v,"scroll",m,{passive:!0}),()=>{var x;(x=v.removeEventListener)==null||x.call(v,"scroll",m)}},[e,a,i]),s}const tP=f.button`
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
`,nP=f.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,rP=f.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function Pm({label:e,isOpen:a,onClick:i,ariaLabel:s}){return r.jsxs(tP,{type:"button",$active:a,onClick:i,"aria-haspopup":"dialog","aria-expanded":!!a,"aria-label":s,children:[r.jsx(nP,{children:e}),r.jsx(rP,{children:r.jsx(Sn,{size:14})})]})}const oP=f.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${e=>e.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,aP=f.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: 0 var(--space-3, 12px);
`,iP=f.button`
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
`,sP=f.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,lP=f.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`;function cP({size:e=18}){return r.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const dP=g.forwardRef(function({primaryLabel:a,secondaryLabel:i,tertiaryLabel:s,openOverlay:l,hidden:d,onHamburgerClick:p,onSecondaryClick:m,onTertiaryClick:v},y){return r.jsx(oP,{ref:y,$hidden:d,children:r.jsxs(aP,{children:[r.jsx(iP,{onClick:p,"aria-label":"Open navigation",children:r.jsx(cP,{size:18})}),r.jsxs(sP,{children:[r.jsx(Pm,{label:i??a,isOpen:l==="secondary",onClick:m,ariaLabel:"Choose a section"}),s&&r.jsxs(r.Fragment,{children:[r.jsx(lP,{"aria-hidden":"true",children:"›"}),r.jsx(Pm,{label:s,isOpen:l==="persona",onClick:v??(()=>{}),ariaLabel:"Choose a persona"})]})]})]})})}),uP=Se`
  from { opacity: 0; }
  to { opacity: 1; }
`,pP=f.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${uP} 160ms ease-out;
`;function hP({onDismiss:e}){return g.useEffect(()=>{const a=s=>{s.key==="Escape"&&e()};window.addEventListener("keydown",a);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow=i}},[e]),r.jsx(pP,{onClick:e,"aria-hidden":"true"})}const fP=Se`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,mP=f.div`
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
  animation: ${fP} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,gP=f.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,vP=f.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,xP=f.h2`
  margin: 0;
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,yP=f.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function av({title:e,children:a,ariaLabel:i}){return r.jsxs(mP,{role:"dialog","aria-modal":"true","aria-label":i??e,children:[r.jsx(gP,{children:r.jsx(vP,{"aria-hidden":"true"})}),e&&r.jsx(xP,{children:e}),r.jsx(yP,{children:a})]})}const lp=f.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,Zs=f.div`
  padding: var(--space-3, 12px) var(--space-5, 20px) var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,Zo=f.button`
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
`,ll=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,Xo=f.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,pi=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function wP({moduleLabel:e,entries:a,onSelect:i}){return r.jsx(av,{title:e,ariaLabel:`${e} sections`,children:r.jsx(lp,{children:a.map(s=>{if(s.type==="single"){const d=s.item;return r.jsxs(Zo,{$active:d.isActive,onClick:()=>{var p;(p=d.onClick)==null||p.call(d),i()},"aria-pressed":!!d.isActive,children:[r.jsx(ll,{children:d.icon}),r.jsx(Xo,{children:d.label}),d.isActive&&r.jsx(pi,{"aria-hidden":"true",children:r.jsx(hn,{size:16})})]},d.id)}if(s.type!=="group")return null;const l=s.group;return r.jsxs("div",{children:[r.jsx(Zs,{children:l.label}),l.children.map(d=>r.jsxs(Zo,{$active:d.isActive,$indent:!0,onClick:()=>{var p;(p=d.onClick)==null||p.call(d),i()},"aria-pressed":!!d.isActive,children:[r.jsx(ll,{children:d.icon}),r.jsx(Xo,{children:d.label}),d.isActive&&r.jsx(pi,{"aria-hidden":"true",children:r.jsx(hn,{size:16})})]},d.id))]},l.id)})})})}const bP=f.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,kP=f.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,_P=f.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function CP({personas:e,activeId:a,onSelect:i}){return r.jsx(av,{title:"Personas",ariaLabel:"Choose a persona",children:r.jsx(lp,{children:e.map(s=>{const l=s.id===a;return r.jsxs(Zo,{$active:l,onClick:()=>i(s.id),"aria-pressed":l,children:[r.jsx(Xo,{as:"span",children:r.jsxs(bP,{children:[r.jsx(kP,{children:s.name}),r.jsx(_P,{children:s.role})]})}),l&&r.jsx(pi,{"aria-hidden":"true",children:r.jsx(hn,{size:16})})]},s.id)})})})}const jP=Se`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,SP=f.aside`
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
  animation: ${jP} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,NP=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,MP=f.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,RP=f.button`
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
`,LP=f.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,AP=60;function $P({title:e,onDismiss:a,children:i}){const s=g.useRef(null),l=g.useRef(null);return g.useEffect(()=>{const d=s.current;if(!d)return;const p=v=>{const y=v.touches[0];l.current={x:y.clientX,y:y.clientY}},m=v=>{if(!l.current)return;const y=v.changedTouches[0],x=y.clientX-l.current.x,b=y.clientY-l.current.y;l.current=null,x<-60&&Math.abs(b)<AP&&a()};return d.addEventListener("touchstart",p,{passive:!0}),d.addEventListener("touchend",m),()=>{d.removeEventListener("touchstart",p),d.removeEventListener("touchend",m)}},[a]),r.jsxs(SP,{ref:s,role:"dialog","aria-modal":"true","aria-label":e??"Navigation",children:[r.jsxs(NP,{children:[r.jsx(MP,{children:e??"Navigation"}),r.jsx(RP,{onClick:a,"aria-label":"Close navigation",children:r.jsx(mi,{size:18})})]}),r.jsx(LP,{children:i})]})}const TP=f.div`
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
`,IP=f.input`
  all: unset;
  flex: 1 1 auto;
  min-width: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 15px;
  color: var(--color-content-primary, #151515);

  &::placeholder {
    color: var(--color-content-tertiary, #87919f);
  }
`,EP=f.span`
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
`,PP=f.div`
  margin: var(--space-2, 8px) 0 0;
  border-top: 1px solid var(--color-border-opaque, #e8eaee);
`;function zP({activeId:e,groups:a,currentMenuEntries:i,user:s,onUserClick:l,onSelectModule:d,onDismiss:p}){const[m,v]=g.useState(""),y=m.trim().toLowerCase(),x=S=>S.toLowerCase().includes(y),b=S=>typeof S=="string"?x(S):!0,k=S=>r.jsxs(Zo,{$active:S.isActive,$indent:!0,onClick:()=>{var _;(_=S.onClick)==null||_.call(S),p()},"aria-pressed":!!S.isActive,children:[r.jsx(ll,{children:S.icon}),r.jsx(Xo,{children:S.label}),S.isActive&&r.jsx(pi,{"aria-hidden":"true",children:r.jsx(hn,{size:16})})]},S.id);return r.jsxs($P,{title:"Navigation",onDismiss:p,children:[r.jsxs(TP,{children:[r.jsx(Mu,{size:16}),r.jsx(IP,{type:"search",placeholder:"Search","aria-label":"Search navigation",value:m,onChange:S=>v(S.target.value)})]}),r.jsxs(lp,{children:[a.map(S=>{const _=y?S.items.filter(C=>x(C.label)):S.items;return y&&_.length===0?null:r.jsxs("div",{children:[r.jsx(Zs,{children:S.label}),_.map(C=>{const N=C.id===e;return r.jsxs("div",{children:[r.jsxs(Zo,{$active:N,onClick:()=>{d(C.id),p()},"aria-pressed":N,children:[r.jsx(ll,{children:C.icon}),r.jsx(Xo,{children:C.label}),N&&r.jsx(pi,{"aria-hidden":"true",children:r.jsx(hn,{size:16})})]}),N&&i.length>0&&r.jsx("div",{children:i.map($=>{if($.type==="single")return y&&!b($.item.label)?null:k($.item);if($.type!=="group")return null;const M=$.group,j=y?M.children.filter(O=>b(O.label)):M.children;return y&&j.length===0?null:r.jsxs("div",{children:[r.jsx(Zs,{children:M.label}),j.map(k)]},M.id)})})]},C.id)})]},S.id)}),r.jsx(PP,{"aria-hidden":"true"}),r.jsx(Zs,{children:"Account"}),r.jsxs(Zo,{onClick:()=>{l==null||l(),p()},"aria-label":`User: ${s.name}`,children:[r.jsx(EP,{$color:s.avatarColor,"aria-hidden":"true",children:s.initials}),r.jsx(Xo,{children:s.name})]})]})]})}const zm=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],OP=f.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-primary, #ffffff);
`,DP=f.main`
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
`;function FP(e){const{activeId:a,selectedPersonaId:i,moduleGroups:s,primaryLabel:l,secondaryLabel:d,menuEntries:p,user:m,onUserClick:v,onMobileNavigate:y,onSelectPersona:x,children:b}=e,[k,S]=g.useState(null),_=eP({deadZonePx:8,topThresholdPx:20}),C=k===null&&_==="down",N=g.useMemo(()=>{if(!i)return null;const O=zm.find(L=>L.id===i);return(O==null?void 0:O.name)??null},[i]),$=()=>S(null),M=O=>S(O),j=k!==null;return r.jsxs(OP,{children:[r.jsx(dP,{primaryLabel:l,secondaryLabel:d,tertiaryLabel:N,openOverlay:k,hidden:C,onHamburgerClick:()=>M("drawer"),onSecondaryClick:()=>{M(p.length>0?"secondary":"drawer")},onTertiaryClick:N?()=>M("persona"):void 0}),r.jsx(DP,{children:b}),j&&r.jsx(hP,{onDismiss:$}),k==="secondary"&&r.jsx(wP,{moduleLabel:l,entries:p,onSelect:$}),k==="persona"&&r.jsx(CP,{personas:zm,activeId:i,onSelect:O=>{x(O),$()}}),k==="drawer"&&r.jsx(zP,{activeId:a,groups:s,currentMenuEntries:p,user:m,onUserClick:v,onSelectModule:O=>y(O),onDismiss:$})]})}function BP(e){if(nE()&&e.mobileNav){const i=e.mobileNav;return r.jsx(FP,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:e.menuEntries??[],user:e.user,onUserClick:e.onUserClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,children:e.children})}return r.jsx(JE,{...e})}const WP="/Ultron_Onboarding/assets/policy-icon-active-CyAzaB38.svg",HP="/Ultron_Onboarding/assets/automation-icon-active-C_8ZK5uN.svg",UP=[{name:"Alicia Nguyen",role:"Registered Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Marcus Bell",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"expiring",expiresInDays:21},{name:"Priya Shah",role:"Charge Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Devon Carter",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"valid"},{name:"Sofia Ramirez",role:"Registered Nurse",location:"Methodist Dallas",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"James O'Connor",role:"Licensed Vocational Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Fatima Al-Rashid",role:"Registered Nurse",location:"St. David's North",tenure:"4 yr",credential:"RN License",credentialStatus:"valid"},{name:"Tyler Brooks",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"expiring",expiresInDays:9},{name:"Grace Kim",role:"Charge Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Leon Whitfield",role:"Registered Nurse",location:"St. David's North",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"Hannah Torres",role:"Licensed Vocational Nurse",location:"Methodist Dallas",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Omar Haddad",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"}],qP=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,profile:{roles:["RN","LPN","CNA","Caregiver","Med Aide","Charge Nurse"],locations:["Riverside Clinic","Lakeside Care","Mercy Ward","Home Visits","Northgate Rehab"],credentials:["RN License","BLS","CPR","TB Screening","CNA Certification"]}},{match:/security|guard|patrol|officer|surveillance/i,profile:{roles:["Security Officer","Site Supervisor","Patrol","Console Operator"],locations:["Tower Plaza","North Gate","Event Hall","West Lot","Loading Dock"],credentials:["Guard Card","First Aid","CPR","Baton Permit"]}},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,profile:{roles:["Event Staff","Bartender","Usher","Setup Crew","Concessions","Lead"],locations:["Main Arena","Concourse A","Club Level","North Gate","Back of House"],credentials:["Food Handler","Alcohol Service","Crowd Safety"]}},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,profile:{roles:["Forklift Op","Picker","Loader","Foreman","Yard Lead","Driver"],locations:["Bay 4","Dock 2","Yard","Line A","North Warehouse","Staging"],credentials:["Forklift Cert","OSHA 10","CDL","Safety Orientation"]}}],VP={roles:["Associate","Team Lead","Coordinator","Specialist","Shift Lead"],locations:["Downtown","North Site","West Branch","Central","East Yard"],credentials:["Onboarding","I-9 Verified","Safety Orientation"]},GP=["Maria","James","Sofia","Kenji","Aisha","Diego","Priya","Marcus","Elena","Tomas","Grace","Omar","Hannah","Luis","Nia","Peter","Yuki","Carlos","Fatima","Noah","Ivy","Samuel","Leila","Andre","Mei","Jonah","Zoe","Rashid","Clara","Dev"],YP=["Ellis","Marin","Tanaka","Okafor","Nguyen","Alvarez","Patel","Cole","Rossi","Haddad","Kim","Santos","Weaver","Duval","Bauer","Reyes","Osei","Lindqvist","Mercer","Bianchi","Farah","Novak","Quinn","Abara"],KP=["New","2 wk","1 mo","4 mo","7 mo","1 yr","2 yr","3 yr","5 yr"];function QP(e){let a=e>>>0;return()=>{a|=0,a=a+1831565813|0;let i=Math.imul(a^a>>>15,1|a);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function iv(e){let a=2166136261;for(let i=0;i<e.length;i++)a^=e.charCodeAt(i),a=Math.imul(a,16777619);return a>>>0}function ZP(e){const a=qP.find(i=>i.match.test(e));return a?a.profile:VP}function sv(e,a){const i=ZP(e),s=QP(iv(e||"teambridge")^a),l=m=>m[Math.floor(s()*m.length)],d=[],p=new Set;for(;d.length<a;){const m=`${l(GP)} ${l(YP)}`;if(p.has(m))continue;p.add(m);const v=s()<.16;d.push({name:m,role:l(i.roles),location:l(i.locations),tenure:l(KP),credential:l(i.credentials),credentialStatus:v?"expiring":"valid",...v?{expiresInDays:3+Math.floor(s()*27)}:{}})}return d}const XP=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,shapes:["12-hour shifts, around the clock","Day / night rotation","On-call weekends"]},{match:/security|guard|patrol|officer|surveillance/i,shapes:["24/7 coverage, 8-hour posts","Weekend-heavy events","Overnight-only crew"]},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,shapes:["Event-based, weekends heavy","Split shifts, peak evenings","Game-day surges"]},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,shapes:["Two shifts, Mon–Sat","Peak-season overtime","Early AM dock crew"]}],JP=["9-to-5, weekdays","Rotating shifts","Weekend coverage"];function ez(e){var a;return((a=XP.find(i=>i.match.test(e)))==null?void 0:a.shapes)??JP}function tz(e){const a=sv(e,8),[i,s,l,d]=a,p=4+iv(s.name)%9;return[{kind:"callout",worker:i.name,role:i.role,detail:"Called out for Saturday — the shift needs a fill."},{kind:"expiring",worker:s.name,role:s.role,detail:`${s.credential} expires in ${p} days.`},{kind:"missing",worker:l.name,role:l.role,detail:"Missed a clock-out Tuesday."},{kind:"missing",worker:d.name,role:d.role,detail:"Didn't punch in Thursday."}]}const nz=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Om=["6a–2p","2p–10p","10p–6a"],rz=[4,3,3,4,4,3,3];function oz(e){var l,d;const a=sv(e,12);let i=0;const s=nz.map((p,m)=>{const v=[];for(let y=0;y<rz[m];y++){const x=a[i%a.length].name.split(" ")[0];i++,v.push({time:Om[y%Om.length],who:x})}return{label:p,shifts:v}});return(l=s[5])!=null&&l.shifts[0]&&(s[5].shifts[0]={...s[5].shifts[0],who:"Open",flag:"open"}),(d=s[1])!=null&&d.shifts[0]&&(s[1].shifts[0]={...s[1].shifts[0],flag:"watch"}),s}const az=1100,iz=440,sz=10,Vd=320,lz=720,Gd=2e3,cz=950,dz=[{icon:lo,label:"Build out coverage"},{icon:Cn,label:"Chase open shifts"},{icon:vi,label:"Tidy compliance"}],uz=900,pz=1600,lv=84,mu=81,gu=48,Dm=[{name:"Dana Okafor",photo:"https://i.pravatar.cc/96?u=dana.okafor"},{name:"Marcus Webb",photo:"https://i.pravatar.cc/96?u=marcus.webb"},{name:"Priya Raman",photo:"https://i.pravatar.cc/96?u=priya.raman"},{name:"Sofia Delgado",photo:"https://i.pravatar.cc/96?u=sofia.delgado"}],hz=7,fz=24,Fm=[{where:'Row 34 · "J. & M. Alvarez"',reason:"Two people in one row — we split them out for you to confirm."},{where:"Row 51 · Dana Whitfield",reason:"Home location was blank — pick a site when you get a sec."},{where:'Row 72 · start date "13/40/24"',reason:"That date didn't read — everything else came in fine."}],mz="Let's start with your people. Drop your team roster into this chat — a spreadsheet, a PDF, even a photo of a printed one works. No need to clean it up first; I'll read it, tidy it, and bring everyone in.",gz='Happy to get to that — right after your people are in. Attach your roster here (the paperclip takes spreadsheets, PDFs, or a photo), or tap "Use sample teammates" below to start with a stand-in crew.',Bm="Next: your schedule. Drop your current one into this chat — any format — and I'll turn it into shifts. Or just tell me the shape of your week and I'll build a realistic one.",vz="That's the essentials in place. What would you like me to take on next? I can build out coverage, chase down open shifts, tidy compliance, or anything else on your plate.";function Wm(e){if(!e)return null;const a=e.trim().replace(/\s+/g,""),i=/^https?:\/\//i.test(a)?a:`https://${a}`;let s=a;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),(s.split(".")[0]||s).split(/[-_]/).map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" ")||s}function Hm(e){return e.includes("	")||e.trim().includes(`
`)}function xz(e){var l;const a=e.trim().split(/\s+/),i=((l=a[0])==null?void 0:l[0])??"",s=a.length>1?a[a.length-1][0]:"";return(i+s).toUpperCase()}const yz={};function wz({answers:e=yz,onContinued:a}){const[i,s]=g.useState([]),[l,d]=g.useState(""),[p,m]=g.useState([]),[v,y]=g.useState(null),[x,b]=g.useState("roster"),[k,S]=g.useState(!1),[_,C]=g.useState(null),[N,$]=g.useState(null),[M,j]=g.useState(null),[O,L]=g.useState(!1),[R,I]=g.useState(""),[z,W]=g.useState(!1),[G,Q]=g.useState(!1),[B,Y]=g.useState("delivering"),[ee,oe]=g.useState(0),[le,re]=g.useState(-1),[X,D]=g.useState(""),[V,E]=g.useState(!1),[A]=g.useState(()=>{var ae;return typeof window<"u"&&!!((ae=window.matchMedia)!=null&&ae.call(window,"(prefers-reduced-motion: reduce)").matches)}),[q,Z]=g.useState(()=>{var ae;return typeof window<"u"&&!!((ae=window.matchMedia)!=null&&ae.call(window,"(max-width: 600px)").matches)}),ie=g.useRef([]),ue=g.useRef(null),H=g.useRef(null),T=g.useRef(null),ne=g.useRef(null),fe=g.useMemo(()=>{var ae;return((ae=e.workforceType)==null?void 0:ae.trim())||Wm(e.companyWebsite)||""},[e]),ce=g.useMemo(()=>ez(fe),[fe]),me=g.useMemo(()=>{const ae=Wm(e.companyWebsite),ye=[{kind:"text",text:`Welcome to your ${ae?`${ae} `:""}workspace — I'm Ultron, and I'll be doing the heavy lifting around here. Together we'll bring in your team, shape your schedule, and line up the day-to-day work I can take off your plate.`}];return ye.push({kind:"text",text:mz}),ye.push({kind:"rosterCta"}),ye},[e]),we=(ae,de)=>{ie.current.push(window.setTimeout(de,ae))};g.useEffect(()=>()=>{ie.current.forEach(ae=>window.clearTimeout(ae)),ue.current&&window.clearTimeout(ue.current)},[]),g.useEffect(()=>{var ye;const ae=(ye=window.matchMedia)==null?void 0:ye.call(window,"(max-width: 600px)");if(!ae)return;const de=()=>Z(ae.matches);return de(),ae.addEventListener("change",de),()=>ae.removeEventListener("change",de)},[]);const xe=ae=>{if(C({file:ae,state:"uploading",progress:8}),A){C({file:ae,state:"complete",progress:100});return}we(180,()=>C({file:ae,state:"uploading",progress:38})),we(460,()=>C({file:ae,state:"uploading",progress:74})),we(780,()=>C({file:ae,state:"complete",progress:100}))},Re=ae=>{if($({file:ae,state:"uploading",progress:8}),A){$({file:ae,state:"complete",progress:100});return}we(180,()=>$({file:ae,state:"uploading",progress:38})),we(460,()=>$({file:ae,state:"uploading",progress:74})),we(780,()=>$({file:ae,state:"complete",progress:100}))};g.useEffect(()=>{if(A){oe(me.length),re(-1),Y("ready");return}const ae=[];let de=null;const ye=(He,_t)=>{ae.push(window.setTimeout(_t,He))},Ee=He=>{if(He>=me.length){E(!1),Y("ready");return}E(!0),ye(iz,()=>{E(!1),re(He);const _t=me[He];if(_t.kind!=="text"){ye(lz,()=>{oe(He+1),re(-1),ye(Vd,()=>Ee(He+1))});return}D("");const Rn=_t.text;let Ln=0;de=window.setInterval(()=>{Ln+=1,D(Rn.slice(0,Ln)),Ln>=Rn.length&&(de&&window.clearInterval(de),de=null,ye(Vd,()=>{oe(He+1),re(-1),D(""),ye(Vd,()=>Ee(He+1))}))},sz)})};return Y("delivering"),Ee(0),()=>{ae.forEach(He=>window.clearTimeout(He)),de&&window.clearInterval(de)}},[me,A]),g.useEffect(()=>{if(x==="done")return T.current=window.setTimeout(()=>Q(!0),uz),()=>{T.current&&window.clearTimeout(T.current)}},[x]);const ze=()=>{W(!0),T.current&&window.clearTimeout(T.current),T.current=window.setTimeout(()=>Q(!1),pz)};g.useEffect(()=>{var ae;(ae=ne.current)==null||ae.scrollIntoView({block:"end",behavior:"smooth"})},[i,v,B,ee,le,X,V]);const Ve=(l.trim().length>0||p.length>0)&&v===null,Oe=ae=>{const de=Array.from(ae,ye=>ye.name);m(ye=>[...ye,...de.filter(Ee=>!ye.includes(Ee))])},$e=ae=>m(de=>de.filter(ye=>ye!==ae)),We=(ae,de={})=>{const ye=A?300:de.workingMs??az,Ee=A?200:cz;y(de.workingLabel??"");let He=0;const _t=()=>{var Xn;ue.current&&(window.clearTimeout(ue.current),ue.current=null);const Rn=ae[He];if(!Rn)return;const Ln=He===ae.length-1;if(He+=1,s(hr=>[...hr,Rn]),Ln){y(null),H.current=null,(Xn=de.then)==null||Xn.call(de);return}y(""),ue.current=window.setTimeout(_t,Ee)};H.current=_t,ue.current=window.setTimeout(_t,ye)},Qe=()=>{var ae;q&&((ae=H.current)==null||ae.call(H))},dt=(ae,de=[])=>{i.some(ye=>ye.role==="operator")||a==null||a(),s(ye=>[...ye,{role:"operator",text:ae,...de.length?{attachments:de}:{}}])},De=(ae,de)=>{S(!1),de&&xe(de),We([{role:"ultron",text:`Got it — read ${ae}: ${lv} people, licenses, home locations. 3 columns I didn't recognize; I kept them so nothing's lost.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:`That's ${mu} people in. ${Bm}`},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Bringing your people in…",workingMs:Gd,then:()=>b("schedule")})},gt=()=>{S(!0),We([{role:"ultron",text:`Done — I spun up ${gu} sample teammates that look like your operation. Every one is tagged "Sample" — one tap to remove them when your real roster lands.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:Bm},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Generating sample teammates…",workingMs:Gd,then:()=>b("schedule")})},et=ae=>{ae.file&&Re(ae.file),j({problems:tz(fe),week:oz(fe)});const de=ae.fileName?`Read ${ae.fileName} — turned it into next week's shifts. A few columns I didn't recognize, kept so nothing's lost.`:`Built you a realistic week — ${ae.shape.toLowerCase()}. Here's what's in it.`;We([{role:"ultron",text:de},{role:"ultron",text:"",card:"week"},{role:"ultron",text:vz}],{workingLabel:ae.fileName?"Turning it into shifts…":"Building your week…",workingMs:Gd,then:()=>b("done")})},It=(ae,de=[])=>{if(!ae&&de.length===0||v!==null)return;if(dt(ae,de),x==="roster"){de.length>0?De(de[0],{name:de[0]}):Hm(ae)?De("your pasted roster"):We([{role:"ultron",text:gz}]);return}if(x==="schedule"){de.length>0?et({fileName:de[0],file:{name:de[0]}}):Hm(ae)?et({fileName:"your pasted schedule"}):et({shape:ae});return}L(!0);const ye=i.filter(Ee=>Ee.role==="ultron").length;We([{role:"ultron",text:Qu(ae,ye)}])},rt=()=>{const ae=l.trim();!ae&&p.length===0||v!==null||(It(ae,p),d(""),m([]))},Ft=ae=>{if(!ae||ae.length===0||x!=="roster"||v!==null)return;const de=Array.from(ae),ye=de.map(Ee=>Ee.name);dt("",ye),De(ye[0],{name:de[0].name,type:de[0].type,size:de[0].size})},Hn=ae=>{if(!ae||ae.length===0||x!=="schedule"||v!==null)return;const de=Array.from(ae),ye=de.map(Ee=>Ee.name);dt("",ye),et({fileName:ye[0],file:{name:de[0].name,type:de[0].type,size:de[0].size}})},mn=v!==null?[]:x==="roster"?[{icon:lo,label:"No roster handy? Use sample teammates",onTap:()=>{dt("Use sample teammates"),gt()}}]:x==="schedule"?ce.map(ae=>({icon:Cn,label:ae,onTap:()=>{dt(ae),et({shape:ae})}})):O?[]:dz.map(({icon:ae,label:de})=>({icon:ae,label:de,onTap:()=>It(de)})),Mn=mn.length>0?r.jsx(eD,{"aria-label":"Suggestions",children:mn.map(({icon:ae,label:de,onTap:ye})=>r.jsxs(tD,{type:"button",onClick:ye,children:[ae&&r.jsx(ae,{size:14}),de]},de))}):null,ua=x==="roster"?"Attach your roster, or ask Ultron anything…":x==="schedule"?"Attach your schedule, or describe your week…":"Tell Ultron what to take on next…";return r.jsxs(_z,{children:[r.jsx(z2,{links:1}),r.jsx(O2,{}),r.jsx(Cz,{children:r.jsxs(jz,{children:[r.jsx(Sz,{children:r.jsx(mt,{mark:"magnetic",size:44,tone:"light",state:"active","aria-label":"Ultron"})}),r.jsxs(Nz,{children:[r.jsx(Mz,{children:"Welcome"}),r.jsx(Rz,{children:"Finish your setup, right in the chat"})]})]})}),r.jsx(Lz,{children:r.jsxs(Fz,{children:[r.jsx(Bs,{"data-from":"ultron",children:r.jsxs(qm,{children:[me.slice(0,le>=0?le+1:ee).map((ae,de)=>{if(ae.kind==="rosterCta"){const Ee=x==="roster";return r.jsxs(g.Fragment,{children:[r.jsx(Fs,{children:Ee||_?r.jsxs(Tz,{children:[Ee&&!_&&r.jsx(Iz,{"aria-hidden":"true",children:r.jsx(Ez,{children:[...Dm,...Dm].map((He,_t)=>r.jsx(Pz,{children:r.jsx("img",{src:He.photo,alt:""})},`${He.name}-${_t}`))})}),r.jsx(Um,{"data-roster-flow":Ee&&!_?"":void 0,variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:(_==null?void 0:_.state)??"empty",progress:(_==null?void 0:_.progress)??0,file:(_==null?void 0:_.file)??null,disabled:v!==null&&!_,onFileSelect:He=>Ft([He]),onClear:()=>{}})]}):r.jsxs(Gm,{children:[r.jsx(Ym,{"aria-hidden":"true",children:r.jsx(Qd,{size:16})}),r.jsxs(Km,{children:[r.jsx(Qm,{children:"Roster"}),r.jsx(Zm,{children:"Spreadsheet, PDF, or a photo of a printed one"})]}),r.jsx(Xm,{"aria-hidden":"true",children:r.jsx(pn,{size:18})})]})}),Ee&&B==="ready"&&r.jsx(Fs,{children:Mn})]},`beat-${de}`)}const ye=de===le;return r.jsxs(Vm,{"data-from":"ultron",children:[ye?X:ae.text,ye&&r.jsx(Dz,{"aria-hidden":"true"})]},`beat-${de}`)}),V&&r.jsx(zz,{children:r.jsxs(n0,{"aria-label":"Ultron is typing",children:[r.jsx(Vo,{}),r.jsx(Vo,{}),r.jsx(Vo,{})]})})]})}),i.map((ae,de)=>ae.card?r.jsx(Bs,{"data-from":"ultron",children:r.jsxs(qm,{children:[r.jsx(Fs,{children:ae.card==="roster"?r.jsx(bz,{sample:k}):ae.card==="scheduleCta"?x==="schedule"||N?r.jsx(Um,{variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:(N==null?void 0:N.state)??"empty",progress:(N==null?void 0:N.progress)??0,file:(N==null?void 0:N.file)??null,disabled:v!==null&&!N,onFileSelect:ye=>Hn([ye]),onClear:()=>{}}):r.jsxs(Gm,{children:[r.jsx(Ym,{"aria-hidden":"true",children:r.jsx(Qd,{size:16})}),r.jsxs(Km,{children:[r.jsx(Qm,{children:"Schedule"}),r.jsx(Zm,{children:"Spreadsheet, PDF, or a photo — any format works"})]}),r.jsx(Xm,{"aria-hidden":"true",children:r.jsx(pn,{size:18})})]}):M?r.jsx(kz,{problems:M.problems,week:M.week}):null}),ae.card==="scheduleCta"&&x==="schedule"&&r.jsx(Fs,{children:Mn})]})},de):r.jsx(Bs,{"data-from":ae.role,children:r.jsxs(iD,{"data-from":ae.role,children:[ae.text&&r.jsx(Vm,{"data-from":ae.role,children:ae.text}),ae.attachments&&r.jsx(sD,{children:ae.attachments.map(ye=>r.jsxs(r0,{children:[r.jsx(Or,{size:14}),ye]},ye))})]})},de)),v!==null&&r.jsx(Bs,{"data-from":"ultron",children:r.jsx(KO,{type:"button",onClick:Qe,disabled:!q,"aria-label":v?`${v} Tap to continue.`:"Ultron is replying. Tap to continue.",children:r.jsxs(YO,{children:[r.jsxs(n0,{"aria-hidden":"true",children:[r.jsx(Vo,{}),r.jsx(Vo,{}),r.jsx(Vo,{})]}),v&&r.jsx(XO,{role:"status","aria-live":"polite",children:v}),r.jsx(QO,{"aria-hidden":"true",children:"Tap to continue"})]})})}),r.jsx("div",{ref:ne})]})}),B==="ready"&&r.jsxs(JO,{children:[x==="done"&&Mn,r.jsxs(nD,{onSubmit:ae=>{ae.preventDefault(),rt()},children:[p.length>0&&r.jsx(oD,{"aria-label":"Files to send",children:p.map(ae=>r.jsxs(r0,{children:[r.jsx(Or,{size:14}),ae,r.jsx(aD,{type:"button","aria-label":`Remove ${ae}`,onClick:()=>$e(ae),children:r.jsx(si,{size:12})})]},ae))}),r.jsxs(rD,{children:[r.jsx(o0,{children:r.jsx(G0,{state:"idle",onSelect:Oe})}),r.jsx(lD,{rows:1,value:l,placeholder:ua,"aria-label":"Message Ultron",onChange:ae=>d(ae.target.value),onKeyDown:ae=>{ae.key==="Enter"&&!ae.shiftKey&&(ae.preventDefault(),rt())},onPaste:ae=>{var ye;const de=(ye=ae.clipboardData)==null?void 0:ye.files;de&&de.length>0&&(ae.preventDefault(),Oe(de))}}),r.jsx(o0,{children:r.jsx(sa,{state:Ve?"ready":"disabled-invalid",onSend:rt})})]})]})]}),r.jsx(NO,{}),r.jsx(_9,{open:G,onClose:()=>Q(!1),size:"lg","aria-label":"Unlock your grant",children:r.jsxs(MO,{children:[r.jsx(RO,{"aria-hidden":"true",children:r.jsx(D2,{size:300})}),r.jsx(LO,{type:"button","aria-label":"Close",onClick:()=>Q(!1),children:r.jsx(si,{size:18})}),r.jsxs(AO,{children:[r.jsx($O,{"aria-hidden":"true"})," Your welcome grant"]}),r.jsxs(TO,{"aria-label":"$1,000 of work on us",children:[r.jsxs(IO,{children:[r.jsx(EO,{children:"$"}),"1,000"]}),r.jsxs(PO,{children:["of work",r.jsx("br",{}),r.jsx("strong",{children:"on us"})]})]}),r.jsx(zO,{children:"Turn Ultron loose."}),r.jsx(OO,{children:"Ultron proposes the work. You call the shots. Your first 100,000 credits are covered."}),r.jsxs(DO,{"aria-label":"Grant benefits",children:[r.jsx(Yd,{children:"100,000 credits"}),r.jsx(Yd,{children:"Up to 3 months"}),r.jsx(Yd,{children:"You approve every action"})]}),z?r.jsxs(qO,{role:"status",children:[r.jsx(pn,{size:20}),"You’re set — I’ll text before I act. Your $1,000 grant is live."]}):r.jsxs(FO,{onSubmit:ae=>{ae.preventDefault(),R.trim()&&ze()},children:[r.jsx(BO,{htmlFor:"welcome-grant-phone",children:"Where should Ultron send proposals?"}),r.jsxs(WO,{children:[r.jsx(HO,{id:"welcome-grant-phone",type:"tel",inputMode:"numeric",pattern:"[0-9]*",maxLength:15,value:R,placeholder:"2145550148","aria-label":"Mobile number",autoComplete:"tel",onChange:ae=>I(ae.target.value.replace(/\D/g,""))}),r.jsx(UO,{type:"submit",variant:"tertiary",size:"lg",disabled:!R.trim(),children:"Unlock $1,000"})]})]}),r.jsx(VO,{children:"Proposals only — never spam. Msg & data rates may apply. Reply STOP to opt out."})]})})]})}function bz({sample:e}){const[a,i]=g.useState(!1),[s,l]=g.useState(!0),d=UP.slice(0,6),p=(e?gu:mu)-d.length;return r.jsxs(pv,{"aria-label":e?"Sample teammates":"Roster import result",children:[r.jsxs(Bz,{type:"button","aria-expanded":s,"aria-controls":"welcome-roster-people",onClick:()=>l(m=>!m),children:[e?r.jsx(Wz,{children:r.jsxs(Hz,{children:[gu," sample teammates, ready to run a full week"]})}):r.jsxs(Uz,{children:[r.jsxs(qz,{children:[mu," ",r.jsxs(Vz,{children:["/",lv]})]}),r.jsxs(Gz,{children:[r.jsx(pn,{size:16})," imported clean"]})]}),r.jsx(vu,{$open:s,"aria-hidden":"true",children:r.jsx(Sn,{size:16})})]}),s&&r.jsxs(Yz,{id:"welcome-roster-people","aria-label":e?"Sample teammates":"Imported teammates",children:[d.map((m,v)=>r.jsxs(Kz,{$i:v,children:[r.jsx(Qz,{"aria-hidden":"true",children:xz(m.name)}),r.jsxs(Zz,{children:[r.jsx(Xz,{children:m.name}),r.jsxs(Jz,{children:[m.role," · ",m.location," · ",m.tenure]})]}),m.credentialStatus==="expiring"?r.jsxs(jn,{size:"sm",variant:"subtle",color:"yellow",dot:!0,children:[m.credential," · ",m.expiresInDays,"d"]}):r.jsx(jn,{size:"sm",variant:"subtle",color:"green",children:m.credential}),e&&r.jsx(jn,{size:"sm",variant:"outline",color:"purple",children:"Sample"})]},m.name)),r.jsx(eO,{children:e?`+ ${p} more · every one tagged “Sample”`:`+ ${p} more imported clean`})]}),!e&&r.jsxs(tO,{children:[r.jsxs(nO,{type:"button","aria-expanded":a,"aria-controls":"welcome-roster-review-rows",onClick:()=>i(m=>!m),children:[r.jsxs(rO,{children:[Fm.length," rows kept for review"]}),r.jsxs(oO,{children:[r.jsx(hv,{"aria-hidden":"true",children:r.jsx(ea,{size:15})}),r.jsx(vu,{$open:a,"aria-hidden":"true",children:r.jsx(Sn,{size:16})})]})]}),a&&r.jsx(fv,{id:"welcome-roster-review-rows","aria-label":"Rows held for review",children:Fm.map(m=>r.jsxs(mv,{children:[r.jsx(iO,{"aria-hidden":"true",children:r.jsx(ea,{size:15})}),r.jsxs(gv,{children:[r.jsx(sO,{children:m.where}),r.jsx(lO,{children:m.reason})]})]},m.where))})]})]})}function kz({problems:e,week:a}){const[i,s]=g.useState(!1);return r.jsxs(pv,{"aria-label":"Your week",children:[r.jsxs(cO,{children:[r.jsxs(uO,{children:[r.jsxs(Jm,{children:[r.jsx(e0,{children:hz})," days"]}),r.jsx(pO,{"aria-hidden":"true",children:"·"}),r.jsxs(Jm,{children:[r.jsx(e0,{children:fz})," shifts"]})]}),r.jsxs(dO,{type:"button","aria-expanded":i,"aria-controls":"welcome-week-waiting-rows","aria-label":`${e.length} things waiting in your week`,title:`${e.length} things waiting in your week`,onClick:()=>s(l=>!l),children:[r.jsx(hv,{"aria-hidden":"true",children:r.jsx(ea,{size:15})}),r.jsx(vu,{$open:i,"aria-hidden":"true",children:r.jsx(Sn,{size:16})})]})]}),i&&r.jsx(aO,{id:"welcome-week-waiting-rows","aria-label":"Waiting in your week",children:e.map((l,d)=>r.jsxs(mv,{children:[r.jsx(hO,{$kind:l.kind,"aria-hidden":"true",children:l.kind==="missing"?r.jsx(Cn,{size:15}):r.jsx(ea,{size:15})}),r.jsxs(gv,{children:[r.jsxs(fO,{children:[l.worker," · ",l.role]}),r.jsx(mO,{children:l.detail})]})]},`${l.worker}-${d}`))}),r.jsx(gO,{children:r.jsx(vO,{role:"table","aria-label":"Next week's shifts",children:a.map(l=>r.jsxs(xO,{role:"column",children:[r.jsx(yO,{children:l.label}),l.shifts.map((d,p)=>r.jsxs(wO,{$flag:d.flag,children:[r.jsx(bO,{children:d.time}),r.jsx(kO,{children:d.who})]},`${l.label}-${p}`))]},l.label))})})]})}const _z=f.div`
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
`,cv="color-mix(in srgb, var(--color-bg-primary) 60%, transparent)",dv=qe`
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: ${cv};
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  pointer-events: none;
`,uv=e=>qe`
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  ${e==="down"?"top: 100%;":"bottom: 100%;"}
  height: var(--space-10);
  z-index: 0;
  background: linear-gradient(${e==="down"?"to bottom":"to top"}, ${cv}, transparent);
  pointer-events: none;
`,Cz=f.header`
  flex-shrink: 0;
  position: relative;
  isolation: isolate;
  /* Sit above the scroll area so the fade below paints over its content. */
  z-index: 2;
  background: transparent;

  &::before {
    ${dv}
  }
  &::after {
    ${uv("down")}
  }
`,jz=f.div`
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

  @media (max-width: 600px) {
    gap: var(--space-2);
    padding: var(--space-2) var(--space-4) var(--space-1);
  }
`,Sz=f.span`
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

  @media (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`,Nz=f.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,Mz=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,Rz=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: var(--text-xs);
    line-height: var(--line-height-snug);
  }

  @media (max-width: 600px) and (max-height: 700px) {
    display: none;
  }
`,Lz=f.div`
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,vo=Se`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,Fs=f.div`
  animation: ${vo} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Az=Se`
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
`,$z=Se`
  from { transform: translateX(0); }
  to   { transform: translateX(-192px); }
`,Tz=f.div`
  position: relative;
  width: 100%;
`,Iz=f.div`
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
`,Ez=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  animation: ${$z} 18s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Pz=f.span`
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
`,Um=f(eg)`
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

  & > *:not(input) {
    animation: ${Az} 300ms var(--ease-out) both;
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
`,zz=f.div`
  display: flex;
  justify-content: flex-start;
  animation: ${vo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Oz=Se`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,Dz=f.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-left: 2px;
  vertical-align: -0.15em;
  background: var(--color-content-tertiary);
  animation: ${Oz} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Fz=f.div`
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
`,Bs=f.div`
  display: flex;
  animation: ${vo} var(--duration-slow, 420ms) var(--ease-out) both;

  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,qm=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;

  @media (max-width: 600px) {
    gap: var(--space-2);
  }
`,Vm=f.div`
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

  @media (max-width: 600px) {
    font-size: var(--text-xs);
    line-height: 1.45;

    &[data-from='operator'] {
      padding: var(--space-2) var(--space-3);
    }
  }
`,Gm=f.div`
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
`,Ym=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,Km=f.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,Qm=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,Zm=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-primary);
`,Xm=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
`,pv=f.div`
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
`,Bz=f.button`
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
`,Wz=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,Hz=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,Uz=f.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,qz=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,Vz=f.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-regular);
  color: var(--color-content-tertiary);
`,Gz=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-success-content);

  svg { flex-shrink: 0; }
`,Yz=f.div`
  display: flex;
  flex-direction: column;
`,Kz=f.div`
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
`,Qz=f.span`
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
`,Zz=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  margin-right: auto;
`,Xz=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,Jz=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,eO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  /* Lands just after the last teammate row (6 rows · 80ms + the 120ms base). */
  animation: ${vo} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: 600ms;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,tO=f.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`,nO=f.button`
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
`,rO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,oO=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`,hv=f.span`
  display: inline-flex;
  color: var(--color-warning-content);
`,vu=f.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);
  transform: rotate(${e=>e.$open?"180deg":"0deg"});

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,fv=f.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-2);
  animation: ${vo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,aO=f(fv)`
  padding-top: 0;
  border-top: 1px solid var(--color-border-opaque);
`,mv=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`,iO=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  background: var(--color-warning-bg);
  color: var(--color-warning-content);
`,gv=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,sO=f.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
`,lO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,cO=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`,dO=f.button`
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
`,uO=f.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
`,Jm=f.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-1);
`,e0=f.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,pO=f.span`
  color: var(--color-content-tertiary);
`,hO=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);

  ${e=>e.$kind==="callout"&&qe`
    background: var(--color-error-bg);
    color: var(--color-error-content);
  `}
  ${e=>e.$kind==="expiring"&&qe`
    background: var(--color-warning-bg);
    color: var(--color-warning-content);
  `}
  ${e=>e.$kind==="missing"&&qe`
    background: var(--color-info-bg);
    color: var(--color-info-content);
  `}
`,fO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,mO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,gO=f.div`
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,vO=f.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: var(--space-1);
  width: 100%;
`,xO=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`,yO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-opaque);
`,wO=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  padding: var(--space-2);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-transparent);

  ${e=>e.$flag==="open"&&qe`
    background: var(--color-error-bg);
    border: 1px dashed var(--color-error-content);
  `}
  ${e=>e.$flag==="watch"&&qe`
    background: var(--color-warning-bg);
    border-color: var(--color-warning-content);
  `}

  @media (max-width: 700px) {
    gap: 2px;
    padding: var(--space-1);
    border-radius: var(--radius-sm);
  }
`,bO=f.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`,kO=f.span`
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
`,t0="cubic-bezier(0.22, 1, 0.36, 1)",_O=Se`
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
`,CO=Se`
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
`,jO=Se`
  0%   { opacity: 0; transform: scale(0.88) translateY(36px) rotate(-1deg); }
  70%  { opacity: 1; transform: scale(1.018) translateY(-2px) rotate(0); }
  100% { opacity: 1; transform: scale(1) translateY(0) rotate(0); }
`,SO=Se`
  from { opacity: 1; transform: scale(1) translateY(0); }
  to   { opacity: 0; transform: scale(0.97) translateY(10px); }
`,NO=_S`
  [role='dialog'][aria-label='Unlock your grant'][data-state] {
    background: color-mix(in srgb, black 58%, transparent);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    animation: ${_O} 440ms ${t0} both;

    & > div {
      border: 0;
      background: transparent;
      box-shadow: 0 32px 90px rgba(3, 11, 25, 0.56);
      animation: ${jO} 560ms ${t0} both;
    }
  }

  @media (max-width: 620px) {
    [role='dialog'][aria-label='Unlock your grant'][data-state] {
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
        );
        border-radius: var(--radius-xl);
      }
    }
  }

  [role='dialog'][aria-label='Unlock your grant'][data-state='closed'] {
    animation: ${CO} 170ms var(--ease-default, ease) forwards;

    & > div {
      animation: ${SO} 170ms var(--ease-default, ease) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [role='dialog'][aria-label='Unlock your grant'][data-state],
    [role='dialog'][aria-label='Unlock your grant'][data-state] > div {
      animation: none;
    }
  }
`,MO=f.section`
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
`,RO=f.div`
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
`,LO=f.button`
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
`,AO=f.span`
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
`,$O=f.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--Alloy-matcha-400);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--Alloy-matcha-400) 14%, transparent),
              0 0 20px var(--Alloy-matcha-400);
`,TO=f.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-4);
  margin: var(--space-1) 0;

  @media (max-width: 620px) {
    gap: var(--space-2);
  }
`,IO=f.div`
  font-family: var(--font-sans);
  font-size: clamp(64px, 13vw, 96px);
  font-weight: var(--font-weight-bold);
  line-height: 0.82;
  letter-spacing: -0.075em;
  color: var(--color-bg-always-light);
  text-shadow: 0 0 44px color-mix(in srgb, var(--Alloy-blue-300) 36%, transparent);
  font-variant-numeric: tabular-nums;

  @media (max-width: 620px) {
    font-size: clamp(48px, 17vw, 64px);
  }
`,EO=f.span`
  display: inline-block;
  margin-right: 0.03em;
  font-size: 0.52em;
  vertical-align: 0.42em;
  color: var(--Alloy-matcha-400);
`,PO=f.span`
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
`,zO=f.h2`
  margin: 0;
  /* Keep the headline clear of the close button. */
  padding-right: var(--space-8);
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-bg-always-light);
`,OO=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-200);
  max-width: 520px;
`,DO=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,Yd=f.span`
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
`,FO=f.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,BO=f.label`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--Alloy-slate-300);
`,WO=f.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-3);

  @media (max-width: 520px) {
    flex-direction: column;
  }
`,HO=f.input`
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
`,UO=f(Te)`
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
`,qO=f.div`
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
`,VO=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-400);
`,GO=Se`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,n0=f.div`
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
`,Vo=f.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${GO} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,YO=f.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);

  @media (max-width: 600px) {
    width: 100%;
    gap: var(--space-2);
  }
`,KO=f.button`
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
`,QO=f.span`
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
`,ZO=Se`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,XO=f.span`
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
  animation: ${ZO} 2.4s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: none;
    color: var(--color-content-secondary);
    -webkit-text-fill-color: currentColor;
  }
`,JO=f.div`
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
    ${dv}
  }
  &::after {
    ${uv("up")}
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  /* Mounts only once the opening turn lands — rise it in so it arrives rather
     than pops. */
  animation: ${vo} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (max-width: 600px) {
    gap: var(--space-2);
    padding:
      var(--space-2)
      var(--space-4)
      max(var(--space-3), env(safe-area-inset-bottom));
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,eD=f.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);

  @media (max-width: 600px) {
    flex-wrap: nowrap;
    gap: var(--space-1);
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`,tD=f.button`
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
`,nD=f.form`
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

  @media (max-width: 600px) {
    gap: var(--space-1);
    padding: var(--space-1);
    border-radius: var(--radius-lg);
  }
`,rD=f.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-2);
`,oD=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-1) 0;
`,r0=f.span`
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
`,aD=f.button`
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
`,iD=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 80%;

  &[data-from='operator'] { align-items: flex-end; }
  &[data-from='ultron'] { align-items: flex-start; }
`,sD=f.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--space-2);
`,lD=f.textarea`
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

  @media (max-width: 600px) {
    font-size: var(--text-sm);
    line-height: var(--line-height-snug);
  }
`,o0=f.div`
  flex-shrink: 0;
`;function cD(e){const a=[e.activeId,e.secActiveId];return e.selectedPersonaId&&a.push("persona",e.selectedPersonaId),e.activePageId&&a.push("page",e.activePageId),"#"+a.map(encodeURIComponent).join("/")}function dD(e){const a=e.replace(/^#/,"").trim();if(!a)return{};const i=a.split("/").map(l=>{try{return decodeURIComponent(l)}catch{return l}}),s={};i[0]&&(s.activeId=i[0]),i[1]&&(s.secActiveId=i[1]);for(let l=2;l<i.length-1;l+=2){const d=i[l],p=i[l+1];d==="persona"?s.selectedPersonaId=p:d==="page"&&(s.activePageId=p)}return s}function uD(e,a){const i=g.useRef("");g.useEffect(()=>{const s=()=>{const d=dD(window.location.hash);d.activeId!==void 0&&a.setActiveId(d.activeId),d.secActiveId!==void 0&&a.setSecActiveId(d.secActiveId),a.setSelectedPersonaId(d.selectedPersonaId??null),a.setActivePageId(d.activePageId??null)};window.location.hash&&s();const l=()=>{window.location.hash!==i.current&&s()};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]),g.useEffect(()=>{const s=cD(e);s!==window.location.hash&&(i.current=s,window.history.replaceState(null,"",s))},[e.activeId,e.secActiveId,e.selectedPersonaId,e.activePageId])}const xu="ultron-theme";function pD(){if(typeof window>"u")return null;const e=window.localStorage.getItem(xu);return e==="light"||e==="dark"?e:null}function hD(e){const a=document.documentElement;a.classList.toggle("dark",e==="dark"),a.classList.toggle("light",e==="light")}function fD(){const e=ip("(prefers-color-scheme: dark)"),[a,i]=g.useState(pD);g.useEffect(()=>{hD(a),!(typeof window>"u")&&(a?window.localStorage.setItem(xu,a):window.localStorage.removeItem(xu))},[a]);const s=a??(e?"dark":"light"),l=g.useCallback(()=>{const d=s==="dark"?"light":"dark";i(d===(e?"dark":"light")?null:d)},[s,e]);return{theme:s,toggle:l}}const mD=f.button`
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
`;function gD(){const{theme:e,toggle:a}=fD(),i=e==="dark",s=i?"Switch to light mode":"Switch to dark mode";return r.jsx(mD,{type:"button",onClick:a,"aria-label":s,"aria-pressed":i,title:s,children:i?r.jsx(C0,{size:18}):r.jsx(H0,{size:18})})}const a0=[{id:"ultron",label:"Ultron",icon:r.jsx(mt,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:r.jsx(qS,{})},{id:"engaged",label:"Engaged",icon:r.jsx(VS,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:r.jsx(GS,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:r.jsx(YS,{})},{id:"ai-home",label:"AI Home",icon:r.jsx(KS,{})}],i0=[{id:"apps",label:"Apps",icon:r.jsx(QS,{})}],s0=[{id:"docs",label:"Document Studio",icon:r.jsx(cu,{})},{id:"form",label:"Form",icon:r.jsx(ZS,{})},{id:"tasks",label:"Tasks",icon:r.jsx(XS,{})},{id:"policy",label:"Policy",icon:r.jsx(JS,{}),activeIcon:r.jsx("img",{src:WP,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Automation",icon:r.jsx(fo,{}),activeIcon:r.jsx("img",{src:HP,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:r.jsx(eN,{})},{id:"esign",label:"E-Sign Studio",icon:r.jsx(tN,{})}],vD=f.button`
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
`,xD=Se`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,yD=Se`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,wD=Se`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,bD=f.span`
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
      ${xD} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${yD} 1100ms var(--ease-out, ease-out) both;
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
    animation: ${wD} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,kD=f.button`
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
`;function _D({onDelete:e}){const a=i=>i.stopPropagation();return r.jsx("span",{onClick:a,onKeyDown:a,onMouseDown:a,children:r.jsx(Eu,{placement:"bottom-end",width:168,trigger:r.jsx(kD,{type:"button","aria-label":"Page options",children:r.jsx(F0,{size:16})}),groups:[{id:"actions",options:[{id:"delete",label:"Delete page",destructive:!0,leadingSlot:r.jsx(V0,{size:16}),onClick:e}]}]})})}const CD={needs_attention:r.jsx(ea,{size:16}),live:r.jsx(mt,{mark:"orbit2d",size:32,tone:"auto",state:"active"}),resolved:r.jsx(pn,{size:16})},jD={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function SD({introAnswers:e,onRestartOnboarding:a}={}){const[i,s]=g.useState("ultron"),[l,d]=g.useState("home-overview"),[p,m]=g.useState(null),[v,y]=g.useState(null),[x,b]=g.useState("ultron"),[k,S]=g.useState("employees"),_=MN(),[C,N]=g.useState(!!e),[$,M]=g.useState(!1),[j,O]=g.useState(!e),[L,R]=g.useState([]),[I,z]=g.useState(null),W=g.useRef(0),G=T=>{b("ultron"),N(!1),O(!1),z(T)},Q=()=>{b("ultron"),O(!1),z(null),N(!0)},B=()=>{const T=`page-${W.current++}`;R(ne=>[...ne,{id:T,title:"New page"}]),G(T)},[Y,ee]=g.useState({}),[oe,le]=g.useState({}),re=g.useRef({}),X=(T,ne)=>{const fe=ne.trim();if(!fe)return;const ce=(Y[T]??[]).filter(me=>me.role==="ultron").length;ee(me=>({...me,[T]:[...me[T]??[],{role:"operator",text:fe}]})),le(me=>({...me,[T]:!0})),re.current[T]=window.setTimeout(()=>{ee(me=>({...me,[T]:[...me[T]??[],{role:"ultron",text:Qu(fe,ce)}]})),le(me=>({...me,[T]:!1})),delete re.current[T]},1100)},D=T=>{re.current[T]&&(window.clearTimeout(re.current[T]),delete re.current[T]),R(ne=>ne.filter(fe=>fe.id!==T)),ee(ne=>{const{[T]:fe,...ce}=ne;return ce}),le(ne=>{const{[T]:fe,...ce}=ne;return ce}),I===T&&(z(null),O(!0))},V=j?"live":_.selectedThread?jD[_.selectedThread.status]:"new";uD({activeId:i,secActiveId:l,selectedPersonaId:p,activePageId:v},{setActiveId:s,setSecActiveId:d,setSelectedPersonaId:m,setActivePageId:y});const E=T=>T.map(ne=>({...ne,isActive:ne.id===i,disabled:ne.id!=="ultron",onClick:ne.id==="ultron"?()=>s("ultron"):void 0})),A=[{id:"memory",label:"Memory",icon:r.jsx(pl,{size:16}),isActive:x==="memory",onClick:()=>b("memory")},{id:"settings",label:"Settings",icon:r.jsx(S0,{size:16})}],q=r.jsx(ov,{children:x==="memory"?"Memory":x==="account"?"Account database":"Ultron"}),Z={id:"welcome",label:"Welcome",icon:r.jsx(cu,{}),isActive:C,onClick:Q},ie=L.map(T=>({id:T.id,label:T.title,icon:r.jsx(cu,{}),isActive:I===T.id,onClick:()=>G(T.id),trailingSlot:r.jsx(_D,{onDelete:()=>D(T.id)})})),ue=x==="account"?hu.map(T=>({type:"single",item:{id:T.id,label:T.label,icon:T.icon,isActive:k===T.id,onClick:()=>S(T.id)}})):_.groups.flatMap(T=>{const ne=T.id==="needs_attention"?"new":T.id==="resolved"?"done":"working",fe=T.id==="needs_attention"?T.threads.filter(xe=>xe.status==="analyzing"||_.revealedNewIds.includes(xe.id)):T.threads,ce=T.id==="needs_attention"&&!$||T.id==="live"&&$,me=T.id==="needs_attention"?ie:[],we={type:"group",group:{id:T.id,label:T.id==="needs_attention"?"New":T.label,icon:CD[T.id],trailingBadge:r.jsx(ia,{children:fe.length+(ce?1:0)+me.length}),defaultExpanded:!0,outlined:!1,children:[...ce?[Z]:[],...me,...fe.map(xe=>({id:xe.id,label:xe.id.startsWith("detected_")?r.jsx(n$,{text:fm(xe.name,ne)}):fm(xe.name,ne),icon:ne==="new"?xe.status==="analyzing"?r.jsx(mt,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):r.jsx(mt,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):ne==="working"?r.jsx(mt,{mark:"orbit2d",size:32,tone:"auto",state:xe.status==="in_progress"?"active":"idle","aria-label":"Working"}):r.jsx(mt,{mark:"pulse",size:32,tone:"auto",state:xe.status==="unresolved"?"idle":"static",color:xe.status==="unresolved"?"var(--color-orange-content-tertiary)":_.viewedIds.includes(xe.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:x==="ultron"&&!j&&!I&&V===ne&&_.selectedId===xe.id,onClick:()=>{b("ultron"),N(!1),O(!1),z(null),_.setSelectedId(xe.id)},trailingSlot:_.savedWorkflowIds.includes(xe.id)?r.jsx(pr,{content:"Saved as workflow",placement:"top",children:r.jsx(bD,{"aria-label":"Saved as workflow",children:r.jsx(fo,{})})}):void 0}))]}};return T.id==="resolved"?[{type:"divider",id:"done-divider"},we]:T.id==="live"?[{type:"divider",id:"working-divider"},we]:[we]}),H=[{id:"main",label:"Workspace",items:E(a0)},{id:"tools",label:"Tools",items:E(i0)},{id:"bottom",label:"Apps",items:E(s0)}];return r.jsxs(r.Fragment,{children:[r.jsx(gD,{}),r.jsx(BP,{items:E(a0),toolItems:E(i0),bottomItems:E(s0),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},onSettingsClick:a,newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:ue,menuHeader:x==="ultron"?r.jsx(vD,{$active:j&&!I,onClick:()=>{b("ultron"),N(!1),O(!0),z(null)},"aria-label":"Live — Ultron presence","aria-current":j&&!I?"page":void 0,children:r.jsx(QA,{onNew:B})}):void 0,pageEntries:A,showSecondaryNav:!0,showTopNav:x!=="ultron",showSearch:!1,heading:q,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:i,secActiveId:l,activePageId:v,selectedPersonaId:p,moduleGroups:H,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:T=>{T==="ultron"&&s("ultron")},onSelectPersona:m},children:x==="memory"?r.jsx(i$,{}):x==="account"?r.jsx(w$,{collectionId:k}):C?r.jsx(wz,{answers:e,onContinued:()=>M(!0)}):I?r.jsx(IA,{messages:Y[I]??[],replying:oe[I]??!1,onSend:T=>X(I,T)},I):r.jsx(jA,{threads:_.threads,stageById:_.stageById,section:V,analyzedIds:_.analyzedIds,outboundByThread:_.outboundByThread,chatByThread:_.chatByThread,selectedId:_.selectedId,onDecide:_.decide,onAction:_.commit,onCompleteRun:_.completeRun,onRefinement:_.refine,onSaveWorkflow:_.saveWorkflow,pendingWorkflowIds:_.pendingWorkflowIds,onToggleSaveWorkflow:_.toggleWorkflowSave,savedWorkflowIds:_.savedWorkflowIds,onSend:_.sendMessage,replyingIds:_.replyingIds,onStop:_.stopReply,onClose:()=>{b("ultron"),N(!1),O(!0)},onDetectRisk:_.detectRisk,onRevealNew:_.revealNew})})]})}const l0="cubic-bezier(0.22, 1, 0.36, 1)",c0=Se`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`,ND=Se`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,MD=f.div`
  display: contents;

  nav[aria-label='Primary navigation'] {
    animation: ${c0} 460ms ${l0} both;
  }
  nav[aria-label='Secondary navigation'] {
    animation: ${c0} 500ms ${l0} 90ms both;
  }
  main {
    animation: ${ND} 520ms ease-out 220ms both;
  }

  @media (prefers-reduced-motion: reduce) {
    nav[aria-label='Primary navigation'],
    nav[aria-label='Secondary navigation'],
    main {
      animation: none;
    }
  }
`,Kd="tb:onboarding-complete";function RD(){const[e,a]=g.useState(()=>{try{return window.sessionStorage.getItem(Kd)==="1"}catch{return!1}}),[i,s]=g.useState(null),l=p=>{try{window.sessionStorage.setItem(Kd,"1")}catch{}s(p),a(!0)},d=()=>{try{window.sessionStorage.removeItem(Kd)}catch{}window.location.hash="",window.location.reload()};return e?r.jsx(MD,{children:r.jsx(SD,{introAnswers:i??void 0,onRestartOnboarding:d})}):r.jsx(JI,{onEnterApp:l})}yy.createRoot(document.getElementById("root")).render(r.jsx(tn.StrictMode,{children:r.jsx(V9,{children:r.jsx(RD,{})})}));
