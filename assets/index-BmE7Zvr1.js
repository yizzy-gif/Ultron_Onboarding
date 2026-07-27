(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=i(l);fetch(l.href,d)}})();function $0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ed={exports:{}},li={},Pd={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uf;function Py(){if(uf)return We;uf=1;var e=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),w=Symbol.iterator;function k(T){return T===null||typeof T!="object"?null:(T=w&&T[w]||T["@@iterator"],typeof T=="function"?T:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,j={};function N(T,O,ne){this.props=T,this.context=O,this.refs=j,this.updater=ne||$}N.prototype.isReactComponent={},N.prototype.setState=function(T,O){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,O,"setState")},N.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function M(){}M.prototype=N.prototype;function C(T,O,ne){this.props=T,this.context=O,this.refs=j,this.updater=ne||$}var S=C.prototype=new M;S.constructor=C,_(S,N.prototype),S.isPureReactComponent=!0;var P=Array.isArray,R=Object.prototype.hasOwnProperty,L={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function E(T,O,ne){var q,X={},se=null,F=null;if(O!=null)for(q in O.ref!==void 0&&(F=O.ref),O.key!==void 0&&(se=""+O.key),O)R.call(O,q)&&!A.hasOwnProperty(q)&&(X[q]=O[q]);var z=arguments.length-2;if(z===1)X.children=ne;else if(1<z){for(var ae=Array(z),me=0;me<z;me++)ae[me]=arguments[me+2];X.children=ae}if(T&&T.defaultProps)for(q in z=T.defaultProps,z)X[q]===void 0&&(X[q]=z[q]);return{$$typeof:e,type:T,key:se,ref:F,props:X,_owner:L.current}}function B(T,O){return{$$typeof:e,type:T.type,key:O,ref:T.ref,props:T.props,_owner:T._owner}}function G(T){return typeof T=="object"&&T!==null&&T.$$typeof===e}function Q(T){var O={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ne){return O[ne]})}var U=/\/+/g;function Y(T,O){return typeof T=="object"&&T!==null&&T.key!=null?Q(""+T.key):O.toString(36)}function ee(T,O,ne,q,X){var se=typeof T;(se==="undefined"||se==="boolean")&&(T=null);var F=!1;if(T===null)F=!0;else switch(se){case"string":case"number":F=!0;break;case"object":switch(T.$$typeof){case e:case o:F=!0}}if(F)return F=T,X=X(F),T=q===""?"."+Y(F,0):q,P(X)?(ne="",T!=null&&(ne=T.replace(U,"$&/")+"/"),ee(X,O,ne,"",function(me){return me})):X!=null&&(G(X)&&(X=B(X,ne+(!X.key||F&&F.key===X.key?"":(""+X.key).replace(U,"$&/")+"/")+T)),O.push(X)),1;if(F=0,q=q===""?".":q+":",P(T))for(var z=0;z<T.length;z++){se=T[z];var ae=q+Y(se,z);F+=ee(se,O,ne,ae,X)}else if(ae=k(T),typeof ae=="function")for(T=ae.call(T),z=0;!(se=T.next()).done;)se=se.value,ae=q+Y(se,z++),F+=ee(se,O,ne,ae,X);else if(se==="object")throw O=String(T),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return F}function oe(T,O,ne){if(T==null)return T;var q=[],X=0;return ee(T,q,"","",function(se){return O.call(ne,se,X++)}),q}function ce(T){if(T._status===-1){var O=T._result;O=O(),O.then(function(ne){(T._status===0||T._status===-1)&&(T._status=1,T._result=ne)},function(ne){(T._status===0||T._status===-1)&&(T._status=2,T._result=ne)}),T._status===-1&&(T._status=0,T._result=O)}if(T._status===1)return T._result.default;throw T._result}var le={current:null},K={transition:null},D={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:K,ReactCurrentOwner:L};function W(){throw Error("act(...) is not supported in production builds of React.")}return We.Children={map:oe,forEach:function(T,O,ne){oe(T,function(){O.apply(this,arguments)},ne)},count:function(T){var O=0;return oe(T,function(){O++}),O},toArray:function(T){return oe(T,function(O){return O})||[]},only:function(T){if(!G(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},We.Component=N,We.Fragment=i,We.Profiler=l,We.PureComponent=C,We.StrictMode=s,We.Suspense=v,We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,We.act=W,We.cloneElement=function(T,O,ne){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var q=_({},T.props),X=T.key,se=T.ref,F=T._owner;if(O!=null){if(O.ref!==void 0&&(se=O.ref,F=L.current),O.key!==void 0&&(X=""+O.key),T.type&&T.type.defaultProps)var z=T.type.defaultProps;for(ae in O)R.call(O,ae)&&!A.hasOwnProperty(ae)&&(q[ae]=O[ae]===void 0&&z!==void 0?z[ae]:O[ae])}var ae=arguments.length-2;if(ae===1)q.children=ne;else if(1<ae){z=Array(ae);for(var me=0;me<ae;me++)z[me]=arguments[me+2];q.children=z}return{$$typeof:e,type:T.type,key:X,ref:se,props:q,_owner:F}},We.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:d,_context:T},T.Consumer=T},We.createElement=E,We.createFactory=function(T){var O=E.bind(null,T);return O.type=T,O},We.createRef=function(){return{current:null}},We.forwardRef=function(T){return{$$typeof:m,render:T}},We.isValidElement=G,We.lazy=function(T){return{$$typeof:x,_payload:{_status:-1,_result:T},_init:ce}},We.memo=function(T,O){return{$$typeof:y,type:T,compare:O===void 0?null:O}},We.startTransition=function(T){var O=K.transition;K.transition={};try{T()}finally{K.transition=O}},We.unstable_act=W,We.useCallback=function(T,O){return le.current.useCallback(T,O)},We.useContext=function(T){return le.current.useContext(T)},We.useDebugValue=function(){},We.useDeferredValue=function(T){return le.current.useDeferredValue(T)},We.useEffect=function(T,O){return le.current.useEffect(T,O)},We.useId=function(){return le.current.useId()},We.useImperativeHandle=function(T,O,ne){return le.current.useImperativeHandle(T,O,ne)},We.useInsertionEffect=function(T,O){return le.current.useInsertionEffect(T,O)},We.useLayoutEffect=function(T,O){return le.current.useLayoutEffect(T,O)},We.useMemo=function(T,O){return le.current.useMemo(T,O)},We.useReducer=function(T,O,ne){return le.current.useReducer(T,O,ne)},We.useRef=function(T){return le.current.useRef(T)},We.useState=function(T){return le.current.useState(T)},We.useSyncExternalStore=function(T,O,ne){return le.current.useSyncExternalStore(T,O,ne)},We.useTransition=function(){return le.current.useTransition()},We.version="18.3.1",We}var hf;function Hu(){return hf||(hf=1,Pd.exports=Py()),Pd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf;function zy(){if(pf)return li;pf=1;var e=Hu(),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(m,v,y){var x,w={},k=null,$=null;y!==void 0&&(k=""+y),v.key!==void 0&&(k=""+v.key),v.ref!==void 0&&($=v.ref);for(x in v)s.call(v,x)&&!d.hasOwnProperty(x)&&(w[x]=v[x]);if(m&&m.defaultProps)for(x in v=m.defaultProps,v)w[x]===void 0&&(w[x]=v[x]);return{$$typeof:o,type:m,key:k,ref:$,props:w,_owner:l.current}}return li.Fragment=i,li.jsx=h,li.jsxs=h,li}var ff;function Oy(){return ff||(ff=1,Ed.exports=zy()),Ed.exports}var n=Oy(),g=Hu();const cn=$0(g);var Vs={},zd={exports:{}},rn={},Od={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf;function Dy(){return mf||(mf=1,(function(e){function o(K,D){var W=K.length;K.push(D);e:for(;0<W;){var T=W-1>>>1,O=K[T];if(0<l(O,D))K[T]=D,K[W]=O,W=T;else break e}}function i(K){return K.length===0?null:K[0]}function s(K){if(K.length===0)return null;var D=K[0],W=K.pop();if(W!==D){K[0]=W;e:for(var T=0,O=K.length,ne=O>>>1;T<ne;){var q=2*(T+1)-1,X=K[q],se=q+1,F=K[se];if(0>l(X,W))se<O&&0>l(F,X)?(K[T]=F,K[se]=W,T=se):(K[T]=X,K[q]=W,T=q);else if(se<O&&0>l(F,W))K[T]=F,K[se]=W,T=se;else break e}}return D}function l(K,D){var W=K.sortIndex-D.sortIndex;return W!==0?W:K.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var h=Date,m=h.now();e.unstable_now=function(){return h.now()-m}}var v=[],y=[],x=1,w=null,k=3,$=!1,_=!1,j=!1,N=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(K){for(var D=i(y);D!==null;){if(D.callback===null)s(y);else if(D.startTime<=K)s(y),D.sortIndex=D.expirationTime,o(v,D);else break;D=i(y)}}function P(K){if(j=!1,S(K),!_)if(i(v)!==null)_=!0,ce(R);else{var D=i(y);D!==null&&le(P,D.startTime-K)}}function R(K,D){_=!1,j&&(j=!1,M(E),E=-1),$=!0;var W=k;try{for(S(D),w=i(v);w!==null&&(!(w.expirationTime>D)||K&&!Q());){var T=w.callback;if(typeof T=="function"){w.callback=null,k=w.priorityLevel;var O=T(w.expirationTime<=D);D=e.unstable_now(),typeof O=="function"?w.callback=O:w===i(v)&&s(v),S(D)}else s(v);w=i(v)}if(w!==null)var ne=!0;else{var q=i(y);q!==null&&le(P,q.startTime-D),ne=!1}return ne}finally{w=null,k=W,$=!1}}var L=!1,A=null,E=-1,B=5,G=-1;function Q(){return!(e.unstable_now()-G<B)}function U(){if(A!==null){var K=e.unstable_now();G=K;var D=!0;try{D=A(!0,K)}finally{D?Y():(L=!1,A=null)}}else L=!1}var Y;if(typeof C=="function")Y=function(){C(U)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,oe=ee.port2;ee.port1.onmessage=U,Y=function(){oe.postMessage(null)}}else Y=function(){N(U,0)};function ce(K){A=K,L||(L=!0,Y())}function le(K,D){E=N(function(){K(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(K){K.callback=null},e.unstable_continueExecution=function(){_||$||(_=!0,ce(R))},e.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<K?Math.floor(1e3/K):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_getFirstCallbackNode=function(){return i(v)},e.unstable_next=function(K){switch(k){case 1:case 2:case 3:var D=3;break;default:D=k}var W=k;k=D;try{return K()}finally{k=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(K,D){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var W=k;k=K;try{return D()}finally{k=W}},e.unstable_scheduleCallback=function(K,D,W){var T=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?T+W:T):W=T,K){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=W+O,K={id:x++,callback:D,priorityLevel:K,startTime:W,expirationTime:O,sortIndex:-1},W>T?(K.sortIndex=W,o(y,K),i(v)===null&&K===i(y)&&(j?(M(E),E=-1):j=!0,le(P,W-T))):(K.sortIndex=O,o(v,K),_||$||(_=!0,ce(R))),K},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(K){var D=k;return function(){var W=k;k=D;try{return K.apply(this,arguments)}finally{k=W}}}})(Dd)),Dd}var gf;function Fy(){return gf||(gf=1,Od.exports=Dy()),Od.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf;function By(){if(vf)return rn;vf=1;var e=Hu(),o=Fy();function i(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(t,r){h(t,r),h(t+"Capture",r)}function h(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},w={};function k(t){return v.call(w,t)?!0:v.call(x,t)?!1:y.test(t)?w[t]=!0:(x[t]=!0,!1)}function $(t,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _(t,r,a,c){if(r===null||typeof r>"u"||$(t,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function j(t,r,a,c,u,f,b){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=f,this.removeEmptyString=b}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){N[t]=new j(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];N[r]=new j(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){N[t]=new j(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){N[t]=new j(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){N[t]=new j(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){N[t]=new j(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){N[t]=new j(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){N[t]=new j(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){N[t]=new j(t,5,!1,t.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function C(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(M,C);N[r]=new j(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(M,C);N[r]=new j(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(M,C);N[r]=new j(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){N[t]=new j(t,1,!1,t.toLowerCase(),null,!1,!1)}),N.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){N[t]=new j(t,1,!1,t.toLowerCase(),null,!0,!0)});function S(t,r,a,c){var u=N.hasOwnProperty(r)?N[r]:null;(u!==null?u.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(_(r,a,u,c)&&(a=null),c||u===null?k(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(r=u.attributeName,c=u.attributeNamespace,a===null?t.removeAttribute(r):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,c?t.setAttributeNS(c,r,a):t.setAttribute(r,a))))}var P=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),L=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),Q=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),K=Symbol.iterator;function D(t){return t===null||typeof t!="object"?null:(t=K&&t[K]||t["@@iterator"],typeof t=="function"?t:null)}var W=Object.assign,T;function O(t){if(T===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);T=r&&r[1]||""}return`
`+T+t}var ne=!1;function q(t,r){if(!t||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(te){var c=te}Reflect.construct(t,[],r)}else{try{r.call()}catch(te){c=te}t.call(r.prototype)}else{try{throw Error()}catch(te){c=te}t()}}catch(te){if(te&&c&&typeof te.stack=="string"){for(var u=te.stack.split(`
`),f=c.stack.split(`
`),b=u.length-1,I=f.length-1;1<=b&&0<=I&&u[b]!==f[I];)I--;for(;1<=b&&0<=I;b--,I--)if(u[b]!==f[I]){if(b!==1||I!==1)do if(b--,I--,0>I||u[b]!==f[I]){var H=`
`+u[b].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=b&&0<=I);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?O(t):""}function X(t){switch(t.tag){case 5:return O(t.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return t=q(t.type,!1),t;case 11:return t=q(t.type.render,!1),t;case 1:return t=q(t.type,!0),t;default:return""}}function se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case L:return"Portal";case B:return"Profiler";case E:return"StrictMode";case Y:return"Suspense";case ee:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Q:return(t.displayName||"Context")+".Consumer";case G:return(t._context.displayName||"Context")+".Provider";case U:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case oe:return r=t.displayName||null,r!==null?r:se(t.type)||"Memo";case ce:r=t._payload,t=t._init;try{return se(t(r))}catch{}}return null}function F(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(r);case 8:return r===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function z(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ae(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function me(t){var r=ae(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),c=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,f=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return u.call(this)},set:function(b){c=""+b,f.call(this,b)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function de(t){t._valueTracker||(t._valueTracker=me(t))}function ge(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return t&&(c=ae(t)?t.checked?"true":"false":t.value),t=c,t!==a?(r.setValue(t),!0):!1}function be(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _e(t,r){var a=r.checked;return W({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Le(t,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=z(r.value!=null?r.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ie(t,r){r=r.checked,r!=null&&S(t,"checked",r,!1)}function Oe(t,r){Ie(t,r);var a=z(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?ze(t,r.type,a):r.hasOwnProperty("defaultValue")&&ze(t,r.type,z(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Ee(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function ze(t,r,a){(r!=="number"||be(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Be=Array.isArray;function Ke(t,r,a,c){if(t=t.options,r){r={};for(var u=0;u<a.length;u++)r["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=r.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&c&&(t[a].defaultSelected=!0)}else{for(a=""+z(a),r=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,c&&(t[u].defaultSelected=!0);return}r!==null||t[u].disabled||(r=t[u])}r!==null&&(r.selected=!0)}}function xe(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(i(91));return W({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Se(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(i(92));if(Be(a)){if(1<a.length)throw Error(i(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:z(a)}}function et(t,r){var a=z(r.value),c=z(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function tt(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function rt(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function st(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?rt(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ye,Zn=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,u){MSApp.execUnsafeLocalFunction(function(){return t(r,a,c,u)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ye=Ye||document.createElement("div"),Ye.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ye.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function jn(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},On=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(t){On.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),sr[r]=sr[t]})});function Ao(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||sr.hasOwnProperty(t)&&sr[t]?(""+r).trim():r+"px"}function Ae(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,u=Ao(a,r[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,u):t[a]=u}}var it=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vt(t,r){if(r){if(it[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(i(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(i(61))}if(r.style!=null&&typeof r.style!="object")throw Error(i(62))}}function yt(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lr=null;function cr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oo=null,$r=null,dr=null;function $a(t){if(t=Ga(t)){if(typeof oo!="function")throw Error(i(280));var r=t.stateNode;r&&(r=ss(r),oo(t.stateNode,t.type,r))}}function Di(t){$r?dr?dr.push(t):dr=[t]:$r=t}function Xn(){if($r){var t=$r,r=dr;if(dr=$r=null,$a(t),r)for(t=0;t<r.length;t++)$a(r[t])}}function Rt(t,r){return t(r)}function Fi(){}var re=!1;function ve(t,r,a){if(re)return t(r,a);re=!0;try{return Rt(t,r,a)}finally{re=!1,($r!==null||dr!==null)&&(Fi(),Xn())}}function we(t,r){var a=t.stateNode;if(a===null)return null;var c=ss(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(i(231,r,typeof a));return a}var Xe=!1;if(m)try{var Qe={};Object.defineProperty(Qe,"passive",{get:function(){Xe=!0}}),window.addEventListener("test",Qe,Qe),window.removeEventListener("test",Qe,Qe)}catch{Xe=!1}function Wt(t,r,a,c,u,f,b,I,H){var te=Array.prototype.slice.call(arguments,3);try{r.apply(a,te)}catch(he){this.onError(he)}}var un=!1,hn=null,pn=!1,Ma=null,Wv={onError:function(t){un=!0,hn=t}};function Uv(t,r,a,c,u,f,b,I,H){un=!1,hn=null,Wt.apply(Wv,arguments)}function qv(t,r,a,c,u,f,b,I,H){if(Uv.apply(this,arguments),un){if(un){var te=hn;un=!1,hn=null}else throw Error(i(198));pn||(pn=!0,Ma=te)}}function ao(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function Th(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function Ih(t){if(ao(t)!==t)throw Error(i(188))}function Vv(t){var r=t.alternate;if(!r){if(r=ao(t),r===null)throw Error(i(188));return r!==t?null:t}for(var a=t,c=r;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(c=u.return,c!==null){a=c;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return Ih(u),t;if(f===c)return Ih(u),r;f=f.sibling}throw Error(i(188))}if(a.return!==c.return)a=u,c=f;else{for(var b=!1,I=u.child;I;){if(I===a){b=!0,a=u,c=f;break}if(I===c){b=!0,c=u,a=f;break}I=I.sibling}if(!b){for(I=f.child;I;){if(I===a){b=!0,a=f,c=u;break}if(I===c){b=!0,c=f,a=u;break}I=I.sibling}if(!b)throw Error(i(189))}}if(a.alternate!==c)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?t:r}function Eh(t){return t=Vv(t),t!==null?Ph(t):null}function Ph(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Ph(t);if(r!==null)return r;t=t.sibling}return null}var zh=o.unstable_scheduleCallback,Oh=o.unstable_cancelCallback,Gv=o.unstable_shouldYield,Yv=o.unstable_requestPaint,wt=o.unstable_now,Kv=o.unstable_getCurrentPriorityLevel,tc=o.unstable_ImmediatePriority,Dh=o.unstable_UserBlockingPriority,Bi=o.unstable_NormalPriority,Qv=o.unstable_LowPriority,Fh=o.unstable_IdlePriority,Hi=null,Jn=null;function Zv(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Hi,t,void 0,(t.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:ex,Xv=Math.log,Jv=Math.LN2;function ex(t){return t>>>=0,t===0?32:31-(Xv(t)/Jv|0)|0}var Wi=64,Ui=4194304;function Ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qi(t,r){var a=t.pendingLanes;if(a===0)return 0;var c=0,u=t.suspendedLanes,f=t.pingedLanes,b=a&268435455;if(b!==0){var I=b&~u;I!==0?c=Ra(I):(f&=b,f!==0&&(c=Ra(f)))}else b=a&~u,b!==0?c=Ra(b):f!==0&&(c=Ra(f));if(c===0)return 0;if(r!==0&&r!==c&&(r&u)===0&&(u=c&-c,f=r&-r,u>=f||u===16&&(f&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=c;0<r;)a=31-Dn(r),u=1<<a,c|=t[a],r&=~u;return c}function tx(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nx(t,r){for(var a=t.suspendedLanes,c=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes;0<f;){var b=31-Dn(f),I=1<<b,H=u[b];H===-1?((I&a)===0||(I&c)!==0)&&(u[b]=tx(I,r)):H<=r&&(t.expiredLanes|=I),f&=~I}}function nc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bh(){var t=Wi;return Wi<<=1,(Wi&4194240)===0&&(Wi=64),t}function rc(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function Na(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Dn(r),t[r]=a}function rx(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-Dn(a),f=1<<u;r[u]=0,c[u]=-1,t[u]=-1,a&=~f}}function oc(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var c=31-Dn(a),u=1<<c;u&r|t[c]&r&&(t[c]|=r),a&=~u}}var ot=0;function Hh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Wh,ac,Uh,qh,Vh,ic=!1,Vi=[],Mr=null,Rr=null,Nr=null,La=new Map,Aa=new Map,Lr=[],ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gh(t,r){switch(t){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":La.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(r.pointerId)}}function Ta(t,r,a,c,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[u]},r!==null&&(r=Ga(r),r!==null&&ac(r)),t):(t.eventSystemFlags|=c,r=t.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),t)}function ax(t,r,a,c,u){switch(r){case"focusin":return Mr=Ta(Mr,t,r,a,c,u),!0;case"dragenter":return Rr=Ta(Rr,t,r,a,c,u),!0;case"mouseover":return Nr=Ta(Nr,t,r,a,c,u),!0;case"pointerover":var f=u.pointerId;return La.set(f,Ta(La.get(f)||null,t,r,a,c,u)),!0;case"gotpointercapture":return f=u.pointerId,Aa.set(f,Ta(Aa.get(f)||null,t,r,a,c,u)),!0}return!1}function Yh(t){var r=io(t.target);if(r!==null){var a=ao(r);if(a!==null){if(r=a.tag,r===13){if(r=Th(a),r!==null){t.blockedOn=r,Vh(t.priority,function(){Uh(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gi(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=lc(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);lr=c,a.target.dispatchEvent(c),lr=null}else return r=Ga(a),r!==null&&ac(r),t.blockedOn=a,!1;r.shift()}return!0}function Kh(t,r,a){Gi(t)&&a.delete(r)}function ix(){ic=!1,Mr!==null&&Gi(Mr)&&(Mr=null),Rr!==null&&Gi(Rr)&&(Rr=null),Nr!==null&&Gi(Nr)&&(Nr=null),La.forEach(Kh),Aa.forEach(Kh)}function Ia(t,r){t.blockedOn===r&&(t.blockedOn=null,ic||(ic=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ix)))}function Ea(t){function r(u){return Ia(u,t)}if(0<Vi.length){Ia(Vi[0],t);for(var a=1;a<Vi.length;a++){var c=Vi[a];c.blockedOn===t&&(c.blockedOn=null)}}for(Mr!==null&&Ia(Mr,t),Rr!==null&&Ia(Rr,t),Nr!==null&&Ia(Nr,t),La.forEach(r),Aa.forEach(r),a=0;a<Lr.length;a++)c=Lr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<Lr.length&&(a=Lr[0],a.blockedOn===null);)Yh(a),a.blockedOn===null&&Lr.shift()}var To=P.ReactCurrentBatchConfig,Yi=!0;function sx(t,r,a,c){var u=ot,f=To.transition;To.transition=null;try{ot=1,sc(t,r,a,c)}finally{ot=u,To.transition=f}}function lx(t,r,a,c){var u=ot,f=To.transition;To.transition=null;try{ot=4,sc(t,r,a,c)}finally{ot=u,To.transition=f}}function sc(t,r,a,c){if(Yi){var u=lc(t,r,a,c);if(u===null)jc(t,r,c,Ki,a),Gh(t,c);else if(ax(u,t,r,a,c))c.stopPropagation();else if(Gh(t,c),r&4&&-1<ox.indexOf(t)){for(;u!==null;){var f=Ga(u);if(f!==null&&Wh(f),f=lc(t,r,a,c),f===null&&jc(t,r,c,Ki,a),f===u)break;u=f}u!==null&&c.stopPropagation()}else jc(t,r,c,null,a)}}var Ki=null;function lc(t,r,a,c){if(Ki=null,t=cr(c),t=io(t),t!==null)if(r=ao(t),r===null)t=null;else if(a=r.tag,a===13){if(t=Th(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Ki=t,null}function Qh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kv()){case tc:return 1;case Dh:return 4;case Bi:case Qv:return 16;case Fh:return 536870912;default:return 16}default:return 16}}var Ar=null,cc=null,Qi=null;function Zh(){if(Qi)return Qi;var t,r=cc,a=r.length,c,u="value"in Ar?Ar.value:Ar.textContent,f=u.length;for(t=0;t<a&&r[t]===u[t];t++);var b=a-t;for(c=1;c<=b&&r[a-c]===u[f-c];c++);return Qi=u.slice(t,1<c?1-c:void 0)}function Zi(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Xi(){return!0}function Xh(){return!1}function fn(t){function r(a,c,u,f,b){this._reactName=a,this._targetInst=u,this.type=c,this.nativeEvent=f,this.target=b,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(a=t[I],this[I]=a?a(f):f[I]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xi:Xh,this.isPropagationStopped=Xh,this}return W(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),r}var Io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dc=fn(Io),Pa=W({},Io,{view:0,detail:0}),cx=fn(Pa),uc,hc,za,Ji=W({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==za&&(za&&t.type==="mousemove"?(uc=t.screenX-za.screenX,hc=t.screenY-za.screenY):hc=uc=0,za=t),uc)},movementY:function(t){return"movementY"in t?t.movementY:hc}}),Jh=fn(Ji),dx=W({},Ji,{dataTransfer:0}),ux=fn(dx),hx=W({},Pa,{relatedTarget:0}),pc=fn(hx),px=W({},Io,{animationName:0,elapsedTime:0,pseudoElement:0}),fx=fn(px),mx=W({},Io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gx=fn(mx),vx=W({},Io,{data:0}),ep=fn(vx),xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bx(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=wx[t])?!!r[t]:!1}function fc(){return bx}var kx=W({},Pa,{key:function(t){if(t.key){var r=xx[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Zi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(t){return t.type==="keypress"?Zi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_x=fn(kx),Cx=W({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tp=fn(Cx),jx=W({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),Sx=fn(jx),$x=W({},Io,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mx=fn($x),Rx=W({},Ji,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nx=fn(Rx),Lx=[9,13,27,32],mc=m&&"CompositionEvent"in window,Oa=null;m&&"documentMode"in document&&(Oa=document.documentMode);var Ax=m&&"TextEvent"in window&&!Oa,np=m&&(!mc||Oa&&8<Oa&&11>=Oa),rp=" ",op=!1;function ap(t,r){switch(t){case"keyup":return Lx.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Eo=!1;function Tx(t,r){switch(t){case"compositionend":return ip(r);case"keypress":return r.which!==32?null:(op=!0,rp);case"textInput":return t=r.data,t===rp&&op?null:t;default:return null}}function Ix(t,r){if(Eo)return t==="compositionend"||!mc&&ap(t,r)?(t=Zh(),Qi=cc=Ar=null,Eo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return np&&r.locale!=="ko"?null:r.data;default:return null}}var Ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!Ex[t.type]:r==="textarea"}function lp(t,r,a,c){Di(c),r=os(r,"onChange"),0<r.length&&(a=new dc("onChange","change",null,a,c),t.push({event:a,listeners:r}))}var Da=null,Fa=null;function Px(t){Sp(t,0)}function es(t){var r=Fo(t);if(ge(r))return t}function zx(t,r){if(t==="change")return r}var cp=!1;if(m){var gc;if(m){var vc="oninput"in document;if(!vc){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),vc=typeof dp.oninput=="function"}gc=vc}else gc=!1;cp=gc&&(!document.documentMode||9<document.documentMode)}function up(){Da&&(Da.detachEvent("onpropertychange",hp),Fa=Da=null)}function hp(t){if(t.propertyName==="value"&&es(Fa)){var r=[];lp(r,Fa,t,cr(t)),ve(Px,r)}}function Ox(t,r,a){t==="focusin"?(up(),Da=r,Fa=a,Da.attachEvent("onpropertychange",hp)):t==="focusout"&&up()}function Dx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return es(Fa)}function Fx(t,r){if(t==="click")return es(r)}function Bx(t,r){if(t==="input"||t==="change")return es(r)}function Hx(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Fn=typeof Object.is=="function"?Object.is:Hx;function Ba(t,r){if(Fn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var u=a[c];if(!v.call(r,u)||!Fn(t[u],r[u]))return!1}return!0}function pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fp(t,r){var a=pp(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=r&&c>=r)return{node:a,offset:r-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=pp(a)}}function mp(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?mp(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function gp(){for(var t=window,r=be();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=be(t.document)}return r}function xc(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function Wx(t){var r=gp(),a=t.focusedElem,c=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&mp(a.ownerDocument.documentElement,a)){if(c!==null&&xc(a)){if(r=c.start,t=c.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,f=Math.min(c.start,u);c=c.end===void 0?f:Math.min(c.end,u),!t.extend&&f>c&&(u=c,c=f,f=u),u=fp(a,f);var b=fp(a,c);u&&b&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==b.node||t.focusOffset!==b.offset)&&(r=r.createRange(),r.setStart(u.node,u.offset),t.removeAllRanges(),f>c?(t.addRange(r),t.extend(b.node,b.offset)):(r.setEnd(b.node,b.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ux=m&&"documentMode"in document&&11>=document.documentMode,Po=null,yc=null,Ha=null,wc=!1;function vp(t,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wc||Po==null||Po!==be(c)||(c=Po,"selectionStart"in c&&xc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ha&&Ba(Ha,c)||(Ha=c,c=os(yc,"onSelect"),0<c.length&&(r=new dc("onSelect","select",null,r,a),t.push({event:r,listeners:c}),r.target=Po)))}function ts(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var zo={animationend:ts("Animation","AnimationEnd"),animationiteration:ts("Animation","AnimationIteration"),animationstart:ts("Animation","AnimationStart"),transitionend:ts("Transition","TransitionEnd")},bc={},xp={};m&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete zo.animationend.animation,delete zo.animationiteration.animation,delete zo.animationstart.animation),"TransitionEvent"in window||delete zo.transitionend.transition);function ns(t){if(bc[t])return bc[t];if(!zo[t])return t;var r=zo[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in xp)return bc[t]=r[a];return t}var yp=ns("animationend"),wp=ns("animationiteration"),bp=ns("animationstart"),kp=ns("transitionend"),_p=new Map,Cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,r){_p.set(t,r),d(r,[t])}for(var kc=0;kc<Cp.length;kc++){var _c=Cp[kc],qx=_c.toLowerCase(),Vx=_c[0].toUpperCase()+_c.slice(1);Tr(qx,"on"+Vx)}Tr(yp,"onAnimationEnd"),Tr(wp,"onAnimationIteration"),Tr(bp,"onAnimationStart"),Tr("dblclick","onDoubleClick"),Tr("focusin","onFocus"),Tr("focusout","onBlur"),Tr(kp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wa));function jp(t,r,a){var c=t.type||"unknown-event";t.currentTarget=a,qv(c,r,void 0,t),t.currentTarget=null}function Sp(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],u=c.event;c=c.listeners;e:{var f=void 0;if(r)for(var b=c.length-1;0<=b;b--){var I=c[b],H=I.instance,te=I.currentTarget;if(I=I.listener,H!==f&&u.isPropagationStopped())break e;jp(u,I,te),f=H}else for(b=0;b<c.length;b++){if(I=c[b],H=I.instance,te=I.currentTarget,I=I.listener,H!==f&&u.isPropagationStopped())break e;jp(u,I,te),f=H}}}if(pn)throw t=Ma,pn=!1,Ma=null,t}function ut(t,r){var a=r[Lc];a===void 0&&(a=r[Lc]=new Set);var c=t+"__bubble";a.has(c)||($p(r,t,2,!1),a.add(c))}function Cc(t,r,a){var c=0;r&&(c|=4),$p(a,t,c,r)}var rs="_reactListening"+Math.random().toString(36).slice(2);function Ua(t){if(!t[rs]){t[rs]=!0,s.forEach(function(a){a!=="selectionchange"&&(Gx.has(a)||Cc(a,!1,t),Cc(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[rs]||(r[rs]=!0,Cc("selectionchange",!1,r))}}function $p(t,r,a,c){switch(Qh(r)){case 1:var u=sx;break;case 4:u=lx;break;default:u=sc}a=u.bind(null,r,a,t),u=void 0,!Xe||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),c?u!==void 0?t.addEventListener(r,a,{capture:!0,passive:u}):t.addEventListener(r,a,!0):u!==void 0?t.addEventListener(r,a,{passive:u}):t.addEventListener(r,a,!1)}function jc(t,r,a,c,u){var f=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var I=c.stateNode.containerInfo;if(I===u||I.nodeType===8&&I.parentNode===u)break;if(b===4)for(b=c.return;b!==null;){var H=b.tag;if((H===3||H===4)&&(H=b.stateNode.containerInfo,H===u||H.nodeType===8&&H.parentNode===u))return;b=b.return}for(;I!==null;){if(b=io(I),b===null)return;if(H=b.tag,H===5||H===6){c=f=b;continue e}I=I.parentNode}}c=c.return}ve(function(){var te=f,he=cr(a),pe=[];e:{var ue=_p.get(t);if(ue!==void 0){var ye=dc,Ce=t;switch(t){case"keypress":if(Zi(a)===0)break e;case"keydown":case"keyup":ye=_x;break;case"focusin":Ce="focus",ye=pc;break;case"focusout":Ce="blur",ye=pc;break;case"beforeblur":case"afterblur":ye=pc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=Jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=Sx;break;case yp:case wp:case bp:ye=fx;break;case kp:ye=Mx;break;case"scroll":ye=cx;break;case"wheel":ye=Nx;break;case"copy":case"cut":case"paste":ye=gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=tp}var $e=(r&4)!==0,bt=!$e&&t==="scroll",Z=$e?ue!==null?ue+"Capture":null:ue;$e=[];for(var V=te,J;V!==null;){J=V;var fe=J.stateNode;if(J.tag===5&&fe!==null&&(J=fe,Z!==null&&(fe=we(V,Z),fe!=null&&$e.push(qa(V,fe,J)))),bt)break;V=V.return}0<$e.length&&(ue=new ye(ue,Ce,null,a,he),pe.push({event:ue,listeners:$e}))}}if((r&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",ye=t==="mouseout"||t==="pointerout",ue&&a!==lr&&(Ce=a.relatedTarget||a.fromElement)&&(io(Ce)||Ce[ur]))break e;if((ye||ue)&&(ue=he.window===he?he:(ue=he.ownerDocument)?ue.defaultView||ue.parentWindow:window,ye?(Ce=a.relatedTarget||a.toElement,ye=te,Ce=Ce?io(Ce):null,Ce!==null&&(bt=ao(Ce),Ce!==bt||Ce.tag!==5&&Ce.tag!==6)&&(Ce=null)):(ye=null,Ce=te),ye!==Ce)){if($e=Jh,fe="onMouseLeave",Z="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&($e=tp,fe="onPointerLeave",Z="onPointerEnter",V="pointer"),bt=ye==null?ue:Fo(ye),J=Ce==null?ue:Fo(Ce),ue=new $e(fe,V+"leave",ye,a,he),ue.target=bt,ue.relatedTarget=J,fe=null,io(he)===te&&($e=new $e(Z,V+"enter",Ce,a,he),$e.target=J,$e.relatedTarget=bt,fe=$e),bt=fe,ye&&Ce)t:{for($e=ye,Z=Ce,V=0,J=$e;J;J=Oo(J))V++;for(J=0,fe=Z;fe;fe=Oo(fe))J++;for(;0<V-J;)$e=Oo($e),V--;for(;0<J-V;)Z=Oo(Z),J--;for(;V--;){if($e===Z||Z!==null&&$e===Z.alternate)break t;$e=Oo($e),Z=Oo(Z)}$e=null}else $e=null;ye!==null&&Mp(pe,ue,ye,$e,!1),Ce!==null&&bt!==null&&Mp(pe,bt,Ce,$e,!0)}}e:{if(ue=te?Fo(te):window,ye=ue.nodeName&&ue.nodeName.toLowerCase(),ye==="select"||ye==="input"&&ue.type==="file")var Me=zx;else if(sp(ue))if(cp)Me=Bx;else{Me=Dx;var Re=Ox}else(ye=ue.nodeName)&&ye.toLowerCase()==="input"&&(ue.type==="checkbox"||ue.type==="radio")&&(Me=Fx);if(Me&&(Me=Me(t,te))){lp(pe,Me,a,he);break e}Re&&Re(t,ue,te),t==="focusout"&&(Re=ue._wrapperState)&&Re.controlled&&ue.type==="number"&&ze(ue,"number",ue.value)}switch(Re=te?Fo(te):window,t){case"focusin":(sp(Re)||Re.contentEditable==="true")&&(Po=Re,yc=te,Ha=null);break;case"focusout":Ha=yc=Po=null;break;case"mousedown":wc=!0;break;case"contextmenu":case"mouseup":case"dragend":wc=!1,vp(pe,a,he);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":vp(pe,a,he)}var Ne;if(mc)e:{switch(t){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Eo?ap(t,a)&&(Te="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(np&&a.locale!=="ko"&&(Eo||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Eo&&(Ne=Zh()):(Ar=he,cc="value"in Ar?Ar.value:Ar.textContent,Eo=!0)),Re=os(te,Te),0<Re.length&&(Te=new ep(Te,t,null,a,he),pe.push({event:Te,listeners:Re}),Ne?Te.data=Ne:(Ne=ip(a),Ne!==null&&(Te.data=Ne)))),(Ne=Ax?Tx(t,a):Ix(t,a))&&(te=os(te,"onBeforeInput"),0<te.length&&(he=new ep("onBeforeInput","beforeinput",null,a,he),pe.push({event:he,listeners:te}),he.data=Ne))}Sp(pe,r)})}function qa(t,r,a){return{instance:t,listener:r,currentTarget:a}}function os(t,r){for(var a=r+"Capture",c=[];t!==null;){var u=t,f=u.stateNode;u.tag===5&&f!==null&&(u=f,f=we(t,a),f!=null&&c.unshift(qa(t,f,u)),f=we(t,r),f!=null&&c.push(qa(t,f,u))),t=t.return}return c}function Oo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mp(t,r,a,c,u){for(var f=r._reactName,b=[];a!==null&&a!==c;){var I=a,H=I.alternate,te=I.stateNode;if(H!==null&&H===c)break;I.tag===5&&te!==null&&(I=te,u?(H=we(a,f),H!=null&&b.unshift(qa(a,H,I))):u||(H=we(a,f),H!=null&&b.push(qa(a,H,I)))),a=a.return}b.length!==0&&t.push({event:r,listeners:b})}var Yx=/\r\n?/g,Kx=/\u0000|\uFFFD/g;function Rp(t){return(typeof t=="string"?t:""+t).replace(Yx,`
`).replace(Kx,"")}function as(t,r,a){if(r=Rp(r),Rp(t)!==r&&a)throw Error(i(425))}function is(){}var Sc=null,$c=null;function Mc(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Rc=typeof setTimeout=="function"?setTimeout:void 0,Qx=typeof clearTimeout=="function"?clearTimeout:void 0,Np=typeof Promise=="function"?Promise:void 0,Zx=typeof queueMicrotask=="function"?queueMicrotask:typeof Np<"u"?function(t){return Np.resolve(null).then(t).catch(Xx)}:Rc;function Xx(t){setTimeout(function(){throw t})}function Nc(t,r){var a=r,c=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(c===0){t.removeChild(u),Ea(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=u}while(a);Ea(r)}function Ir(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Lp(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var Do=Math.random().toString(36).slice(2),er="__reactFiber$"+Do,Va="__reactProps$"+Do,ur="__reactContainer$"+Do,Lc="__reactEvents$"+Do,Jx="__reactListeners$"+Do,ey="__reactHandles$"+Do;function io(t){var r=t[er];if(r)return r;for(var a=t.parentNode;a;){if(r=a[ur]||a[er]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=Lp(t);t!==null;){if(a=t[er])return a;t=Lp(t)}return r}t=a,a=t.parentNode}return null}function Ga(t){return t=t[er]||t[ur],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function ss(t){return t[Va]||null}var Ac=[],Bo=-1;function Er(t){return{current:t}}function ht(t){0>Bo||(t.current=Ac[Bo],Ac[Bo]=null,Bo--)}function lt(t,r){Bo++,Ac[Bo]=t.current,t.current=r}var Pr={},Ut=Er(Pr),Xt=Er(!1),so=Pr;function Ho(t,r){var a=t.type.contextTypes;if(!a)return Pr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var u={},f;for(f in a)u[f]=r[f];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=u),u}function Jt(t){return t=t.childContextTypes,t!=null}function ls(){ht(Xt),ht(Ut)}function Ap(t,r,a){if(Ut.current!==Pr)throw Error(i(168));lt(Ut,r),lt(Xt,a)}function Tp(t,r,a){var c=t.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var u in c)if(!(u in r))throw Error(i(108,F(t)||"Unknown",u));return W({},a,c)}function cs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,so=Ut.current,lt(Ut,t),lt(Xt,Xt.current),!0}function Ip(t,r,a){var c=t.stateNode;if(!c)throw Error(i(169));a?(t=Tp(t,r,so),c.__reactInternalMemoizedMergedChildContext=t,ht(Xt),ht(Ut),lt(Ut,t)):ht(Xt),lt(Xt,a)}var hr=null,ds=!1,Tc=!1;function Ep(t){hr===null?hr=[t]:hr.push(t)}function ty(t){ds=!0,Ep(t)}function zr(){if(!Tc&&hr!==null){Tc=!0;var t=0,r=ot;try{var a=hr;for(ot=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}hr=null,ds=!1}catch(u){throw hr!==null&&(hr=hr.slice(t+1)),zh(tc,zr),u}finally{ot=r,Tc=!1}}return null}var Wo=[],Uo=0,us=null,hs=0,Sn=[],$n=0,lo=null,pr=1,fr="";function co(t,r){Wo[Uo++]=hs,Wo[Uo++]=us,us=t,hs=r}function Pp(t,r,a){Sn[$n++]=pr,Sn[$n++]=fr,Sn[$n++]=lo,lo=t;var c=pr;t=fr;var u=32-Dn(c)-1;c&=~(1<<u),a+=1;var f=32-Dn(r)+u;if(30<f){var b=u-u%5;f=(c&(1<<b)-1).toString(32),c>>=b,u-=b,pr=1<<32-Dn(r)+u|a<<u|c,fr=f+t}else pr=1<<f|a<<u|c,fr=t}function Ic(t){t.return!==null&&(co(t,1),Pp(t,1,0))}function Ec(t){for(;t===us;)us=Wo[--Uo],Wo[Uo]=null,hs=Wo[--Uo],Wo[Uo]=null;for(;t===lo;)lo=Sn[--$n],Sn[$n]=null,fr=Sn[--$n],Sn[$n]=null,pr=Sn[--$n],Sn[$n]=null}var mn=null,gn=null,ft=!1,Bn=null;function zp(t,r){var a=Ln(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function Op(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,mn=t,gn=Ir(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,mn=t,gn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=lo!==null?{id:pr,overflow:fr}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Ln(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,mn=t,gn=null,!0):!1;default:return!1}}function Pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zc(t){if(ft){var r=gn;if(r){var a=r;if(!Op(t,r)){if(Pc(t))throw Error(i(418));r=Ir(a.nextSibling);var c=mn;r&&Op(t,r)?zp(c,a):(t.flags=t.flags&-4097|2,ft=!1,mn=t)}}else{if(Pc(t))throw Error(i(418));t.flags=t.flags&-4097|2,ft=!1,mn=t}}}function Dp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function ps(t){if(t!==mn)return!1;if(!ft)return Dp(t),ft=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Mc(t.type,t.memoizedProps)),r&&(r=gn)){if(Pc(t))throw Fp(),Error(i(418));for(;r;)zp(t,r),r=Ir(r.nextSibling)}if(Dp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){gn=Ir(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}gn=null}}else gn=mn?Ir(t.stateNode.nextSibling):null;return!0}function Fp(){for(var t=gn;t;)t=Ir(t.nextSibling)}function qo(){gn=mn=null,ft=!1}function Oc(t){Bn===null?Bn=[t]:Bn.push(t)}var ny=P.ReactCurrentBatchConfig;function Ya(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(i(309));var c=a.stateNode}if(!c)throw Error(i(147,t));var u=c,f=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===f?r.ref:(r=function(b){var I=u.refs;b===null?delete I[f]:I[f]=b},r._stringRef=f,r)}if(typeof t!="string")throw Error(i(284));if(!a._owner)throw Error(i(290,t))}return t}function fs(t,r){throw t=Object.prototype.toString.call(r),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Bp(t){var r=t._init;return r(t._payload)}function Hp(t){function r(Z,V){if(t){var J=Z.deletions;J===null?(Z.deletions=[V],Z.flags|=16):J.push(V)}}function a(Z,V){if(!t)return null;for(;V!==null;)r(Z,V),V=V.sibling;return null}function c(Z,V){for(Z=new Map;V!==null;)V.key!==null?Z.set(V.key,V):Z.set(V.index,V),V=V.sibling;return Z}function u(Z,V){return Z=qr(Z,V),Z.index=0,Z.sibling=null,Z}function f(Z,V,J){return Z.index=J,t?(J=Z.alternate,J!==null?(J=J.index,J<V?(Z.flags|=2,V):J):(Z.flags|=2,V)):(Z.flags|=1048576,V)}function b(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function I(Z,V,J,fe){return V===null||V.tag!==6?(V=Rd(J,Z.mode,fe),V.return=Z,V):(V=u(V,J),V.return=Z,V)}function H(Z,V,J,fe){var Me=J.type;return Me===A?he(Z,V,J.props.children,fe,J.key):V!==null&&(V.elementType===Me||typeof Me=="object"&&Me!==null&&Me.$$typeof===ce&&Bp(Me)===V.type)?(fe=u(V,J.props),fe.ref=Ya(Z,V,J),fe.return=Z,fe):(fe=Os(J.type,J.key,J.props,null,Z.mode,fe),fe.ref=Ya(Z,V,J),fe.return=Z,fe)}function te(Z,V,J,fe){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Nd(J,Z.mode,fe),V.return=Z,V):(V=u(V,J.children||[]),V.return=Z,V)}function he(Z,V,J,fe,Me){return V===null||V.tag!==7?(V=xo(J,Z.mode,fe,Me),V.return=Z,V):(V=u(V,J),V.return=Z,V)}function pe(Z,V,J){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Rd(""+V,Z.mode,J),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case R:return J=Os(V.type,V.key,V.props,null,Z.mode,J),J.ref=Ya(Z,null,V),J.return=Z,J;case L:return V=Nd(V,Z.mode,J),V.return=Z,V;case ce:var fe=V._init;return pe(Z,fe(V._payload),J)}if(Be(V)||D(V))return V=xo(V,Z.mode,J,null),V.return=Z,V;fs(Z,V)}return null}function ue(Z,V,J,fe){var Me=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Me!==null?null:I(Z,V,""+J,fe);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case R:return J.key===Me?H(Z,V,J,fe):null;case L:return J.key===Me?te(Z,V,J,fe):null;case ce:return Me=J._init,ue(Z,V,Me(J._payload),fe)}if(Be(J)||D(J))return Me!==null?null:he(Z,V,J,fe,null);fs(Z,J)}return null}function ye(Z,V,J,fe,Me){if(typeof fe=="string"&&fe!==""||typeof fe=="number")return Z=Z.get(J)||null,I(V,Z,""+fe,Me);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case R:return Z=Z.get(fe.key===null?J:fe.key)||null,H(V,Z,fe,Me);case L:return Z=Z.get(fe.key===null?J:fe.key)||null,te(V,Z,fe,Me);case ce:var Re=fe._init;return ye(Z,V,J,Re(fe._payload),Me)}if(Be(fe)||D(fe))return Z=Z.get(J)||null,he(V,Z,fe,Me,null);fs(V,fe)}return null}function Ce(Z,V,J,fe){for(var Me=null,Re=null,Ne=V,Te=V=0,At=null;Ne!==null&&Te<J.length;Te++){Ne.index>Te?(At=Ne,Ne=null):At=Ne.sibling;var Je=ue(Z,Ne,J[Te],fe);if(Je===null){Ne===null&&(Ne=At);break}t&&Ne&&Je.alternate===null&&r(Z,Ne),V=f(Je,V,Te),Re===null?Me=Je:Re.sibling=Je,Re=Je,Ne=At}if(Te===J.length)return a(Z,Ne),ft&&co(Z,Te),Me;if(Ne===null){for(;Te<J.length;Te++)Ne=pe(Z,J[Te],fe),Ne!==null&&(V=f(Ne,V,Te),Re===null?Me=Ne:Re.sibling=Ne,Re=Ne);return ft&&co(Z,Te),Me}for(Ne=c(Z,Ne);Te<J.length;Te++)At=ye(Ne,Z,Te,J[Te],fe),At!==null&&(t&&At.alternate!==null&&Ne.delete(At.key===null?Te:At.key),V=f(At,V,Te),Re===null?Me=At:Re.sibling=At,Re=At);return t&&Ne.forEach(function(Vr){return r(Z,Vr)}),ft&&co(Z,Te),Me}function $e(Z,V,J,fe){var Me=D(J);if(typeof Me!="function")throw Error(i(150));if(J=Me.call(J),J==null)throw Error(i(151));for(var Re=Me=null,Ne=V,Te=V=0,At=null,Je=J.next();Ne!==null&&!Je.done;Te++,Je=J.next()){Ne.index>Te?(At=Ne,Ne=null):At=Ne.sibling;var Vr=ue(Z,Ne,Je.value,fe);if(Vr===null){Ne===null&&(Ne=At);break}t&&Ne&&Vr.alternate===null&&r(Z,Ne),V=f(Vr,V,Te),Re===null?Me=Vr:Re.sibling=Vr,Re=Vr,Ne=At}if(Je.done)return a(Z,Ne),ft&&co(Z,Te),Me;if(Ne===null){for(;!Je.done;Te++,Je=J.next())Je=pe(Z,Je.value,fe),Je!==null&&(V=f(Je,V,Te),Re===null?Me=Je:Re.sibling=Je,Re=Je);return ft&&co(Z,Te),Me}for(Ne=c(Z,Ne);!Je.done;Te++,Je=J.next())Je=ye(Ne,Z,Te,Je.value,fe),Je!==null&&(t&&Je.alternate!==null&&Ne.delete(Je.key===null?Te:Je.key),V=f(Je,V,Te),Re===null?Me=Je:Re.sibling=Je,Re=Je);return t&&Ne.forEach(function(Ey){return r(Z,Ey)}),ft&&co(Z,Te),Me}function bt(Z,V,J,fe){if(typeof J=="object"&&J!==null&&J.type===A&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case R:e:{for(var Me=J.key,Re=V;Re!==null;){if(Re.key===Me){if(Me=J.type,Me===A){if(Re.tag===7){a(Z,Re.sibling),V=u(Re,J.props.children),V.return=Z,Z=V;break e}}else if(Re.elementType===Me||typeof Me=="object"&&Me!==null&&Me.$$typeof===ce&&Bp(Me)===Re.type){a(Z,Re.sibling),V=u(Re,J.props),V.ref=Ya(Z,Re,J),V.return=Z,Z=V;break e}a(Z,Re);break}else r(Z,Re);Re=Re.sibling}J.type===A?(V=xo(J.props.children,Z.mode,fe,J.key),V.return=Z,Z=V):(fe=Os(J.type,J.key,J.props,null,Z.mode,fe),fe.ref=Ya(Z,V,J),fe.return=Z,Z=fe)}return b(Z);case L:e:{for(Re=J.key;V!==null;){if(V.key===Re)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(Z,V.sibling),V=u(V,J.children||[]),V.return=Z,Z=V;break e}else{a(Z,V);break}else r(Z,V);V=V.sibling}V=Nd(J,Z.mode,fe),V.return=Z,Z=V}return b(Z);case ce:return Re=J._init,bt(Z,V,Re(J._payload),fe)}if(Be(J))return Ce(Z,V,J,fe);if(D(J))return $e(Z,V,J,fe);fs(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,V!==null&&V.tag===6?(a(Z,V.sibling),V=u(V,J),V.return=Z,Z=V):(a(Z,V),V=Rd(J,Z.mode,fe),V.return=Z,Z=V),b(Z)):a(Z,V)}return bt}var Vo=Hp(!0),Wp=Hp(!1),ms=Er(null),gs=null,Go=null,Dc=null;function Fc(){Dc=Go=gs=null}function Bc(t){var r=ms.current;ht(ms),t._currentValue=r}function Hc(t,r,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),t===a)break;t=t.return}}function Yo(t,r){gs=t,Dc=Go=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(en=!0),t.firstContext=null)}function Mn(t){var r=t._currentValue;if(Dc!==t)if(t={context:t,memoizedValue:r,next:null},Go===null){if(gs===null)throw Error(i(308));Go=t,gs.dependencies={lanes:0,firstContext:t}}else Go=Go.next=t;return r}var uo=null;function Wc(t){uo===null?uo=[t]:uo.push(t)}function Up(t,r,a,c){var u=r.interleaved;return u===null?(a.next=a,Wc(r)):(a.next=u.next,u.next=a),r.interleaved=a,mr(t,c)}function mr(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Or=!1;function Uc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qp(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Dr(t,r,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Ze&2)!==0){var u=c.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),c.pending=r,mr(t,a)}return u=c.interleaved,u===null?(r.next=r,Wc(c)):(r.next=u.next,u.next=r),c.interleaved=r,mr(t,a)}function vs(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,oc(t,a)}}function Vp(t,r){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?u=f=b:f=f.next=b,a=a.next}while(a!==null);f===null?u=f=r:f=f.next=r}else u=f=r;a={baseState:c.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function xs(t,r,a,c){var u=t.updateQueue;Or=!1;var f=u.firstBaseUpdate,b=u.lastBaseUpdate,I=u.shared.pending;if(I!==null){u.shared.pending=null;var H=I,te=H.next;H.next=null,b===null?f=te:b.next=te,b=H;var he=t.alternate;he!==null&&(he=he.updateQueue,I=he.lastBaseUpdate,I!==b&&(I===null?he.firstBaseUpdate=te:I.next=te,he.lastBaseUpdate=H))}if(f!==null){var pe=u.baseState;b=0,he=te=H=null,I=f;do{var ue=I.lane,ye=I.eventTime;if((c&ue)===ue){he!==null&&(he=he.next={eventTime:ye,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ce=t,$e=I;switch(ue=r,ye=a,$e.tag){case 1:if(Ce=$e.payload,typeof Ce=="function"){pe=Ce.call(ye,pe,ue);break e}pe=Ce;break e;case 3:Ce.flags=Ce.flags&-65537|128;case 0:if(Ce=$e.payload,ue=typeof Ce=="function"?Ce.call(ye,pe,ue):Ce,ue==null)break e;pe=W({},pe,ue);break e;case 2:Or=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ue=u.effects,ue===null?u.effects=[I]:ue.push(I))}else ye={eventTime:ye,lane:ue,tag:I.tag,payload:I.payload,callback:I.callback,next:null},he===null?(te=he=ye,H=pe):he=he.next=ye,b|=ue;if(I=I.next,I===null){if(I=u.shared.pending,I===null)break;ue=I,I=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);if(he===null&&(H=pe),u.baseState=H,u.firstBaseUpdate=te,u.lastBaseUpdate=he,r=u.shared.interleaved,r!==null){u=r;do b|=u.lane,u=u.next;while(u!==r)}else f===null&&(u.shared.lanes=0);fo|=b,t.lanes=b,t.memoizedState=pe}}function Gp(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var c=t[r],u=c.callback;if(u!==null){if(c.callback=null,c=a,typeof u!="function")throw Error(i(191,u));u.call(c)}}}var Ka={},tr=Er(Ka),Qa=Er(Ka),Za=Er(Ka);function ho(t){if(t===Ka)throw Error(i(174));return t}function qc(t,r){switch(lt(Za,r),lt(Qa,t),lt(tr,Ka),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:st(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=st(r,t)}ht(tr),lt(tr,r)}function Ko(){ht(tr),ht(Qa),ht(Za)}function Yp(t){ho(Za.current);var r=ho(tr.current),a=st(r,t.type);r!==a&&(lt(Qa,t),lt(tr,a))}function Vc(t){Qa.current===t&&(ht(tr),ht(Qa))}var mt=Er(0);function ys(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Gc=[];function Yc(){for(var t=0;t<Gc.length;t++)Gc[t]._workInProgressVersionPrimary=null;Gc.length=0}var ws=P.ReactCurrentDispatcher,Kc=P.ReactCurrentBatchConfig,po=0,gt=null,St=null,Nt=null,bs=!1,Xa=!1,Ja=0,ry=0;function qt(){throw Error(i(321))}function Qc(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!Fn(t[a],r[a]))return!1;return!0}function Zc(t,r,a,c,u,f){if(po=f,gt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ws.current=t===null||t.memoizedState===null?sy:ly,t=a(c,u),Xa){f=0;do{if(Xa=!1,Ja=0,25<=f)throw Error(i(301));f+=1,Nt=St=null,r.updateQueue=null,ws.current=cy,t=a(c,u)}while(Xa)}if(ws.current=Cs,r=St!==null&&St.next!==null,po=0,Nt=St=gt=null,bs=!1,r)throw Error(i(300));return t}function Xc(){var t=Ja!==0;return Ja=0,t}function nr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?gt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Rn(){if(St===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var r=Nt===null?gt.memoizedState:Nt.next;if(r!==null)Nt=r,St=t;else{if(t===null)throw Error(i(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},Nt===null?gt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function ei(t,r){return typeof r=="function"?r(t):r}function Jc(t){var r=Rn(),a=r.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var c=St,u=c.baseQueue,f=a.pending;if(f!==null){if(u!==null){var b=u.next;u.next=f.next,f.next=b}c.baseQueue=u=f,a.pending=null}if(u!==null){f=u.next,c=c.baseState;var I=b=null,H=null,te=f;do{var he=te.lane;if((po&he)===he)H!==null&&(H=H.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),c=te.hasEagerState?te.eagerState:t(c,te.action);else{var pe={lane:he,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};H===null?(I=H=pe,b=c):H=H.next=pe,gt.lanes|=he,fo|=he}te=te.next}while(te!==null&&te!==f);H===null?b=c:H.next=I,Fn(c,r.memoizedState)||(en=!0),r.memoizedState=c,r.baseState=b,r.baseQueue=H,a.lastRenderedState=c}if(t=a.interleaved,t!==null){u=t;do f=u.lane,gt.lanes|=f,fo|=f,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function ed(t){var r=Rn(),a=r.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var c=a.dispatch,u=a.pending,f=r.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do f=t(f,b.action),b=b.next;while(b!==u);Fn(f,r.memoizedState)||(en=!0),r.memoizedState=f,r.baseQueue===null&&(r.baseState=f),a.lastRenderedState=f}return[f,c]}function Kp(){}function Qp(t,r){var a=gt,c=Rn(),u=r(),f=!Fn(c.memoizedState,u);if(f&&(c.memoizedState=u,en=!0),c=c.queue,td(Jp.bind(null,a,c,t),[t]),c.getSnapshot!==r||f||Nt!==null&&Nt.memoizedState.tag&1){if(a.flags|=2048,ti(9,Xp.bind(null,a,c,u,r),void 0,null),Lt===null)throw Error(i(349));(po&30)!==0||Zp(a,r,u)}return u}function Zp(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=gt.updateQueue,r===null?(r={lastEffect:null,stores:null},gt.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function Xp(t,r,a,c){r.value=a,r.getSnapshot=c,e1(r)&&t1(t)}function Jp(t,r,a){return a(function(){e1(r)&&t1(t)})}function e1(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!Fn(t,a)}catch{return!0}}function t1(t){var r=mr(t,1);r!==null&&qn(r,t,1,-1)}function n1(t){var r=nr();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei,lastRenderedState:t},r.queue=t,t=t.dispatch=iy.bind(null,gt,t),[r.memoizedState,t]}function ti(t,r,a,c){return t={tag:t,create:r,destroy:a,deps:c,next:null},r=gt.updateQueue,r===null?(r={lastEffect:null,stores:null},gt.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,r.lastEffect=t)),t}function r1(){return Rn().memoizedState}function ks(t,r,a,c){var u=nr();gt.flags|=t,u.memoizedState=ti(1|r,a,void 0,c===void 0?null:c)}function _s(t,r,a,c){var u=Rn();c=c===void 0?null:c;var f=void 0;if(St!==null){var b=St.memoizedState;if(f=b.destroy,c!==null&&Qc(c,b.deps)){u.memoizedState=ti(r,a,f,c);return}}gt.flags|=t,u.memoizedState=ti(1|r,a,f,c)}function o1(t,r){return ks(8390656,8,t,r)}function td(t,r){return _s(2048,8,t,r)}function a1(t,r){return _s(4,2,t,r)}function i1(t,r){return _s(4,4,t,r)}function s1(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function l1(t,r,a){return a=a!=null?a.concat([t]):null,_s(4,4,s1.bind(null,r,t),a)}function nd(){}function c1(t,r){var a=Rn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Qc(r,c[1])?c[0]:(a.memoizedState=[t,r],t)}function d1(t,r){var a=Rn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Qc(r,c[1])?c[0]:(t=t(),a.memoizedState=[t,r],t)}function u1(t,r,a){return(po&21)===0?(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=a):(Fn(a,r)||(a=Bh(),gt.lanes|=a,fo|=a,t.baseState=!0),r)}function oy(t,r){var a=ot;ot=a!==0&&4>a?a:4,t(!0);var c=Kc.transition;Kc.transition={};try{t(!1),r()}finally{ot=a,Kc.transition=c}}function h1(){return Rn().memoizedState}function ay(t,r,a){var c=Wr(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},p1(t))f1(r,a);else if(a=Up(t,r,a,c),a!==null){var u=Qt();qn(a,t,c,u),m1(a,r,c)}}function iy(t,r,a){var c=Wr(t),u={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(p1(t))f1(r,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=r.lastRenderedReducer,f!==null))try{var b=r.lastRenderedState,I=f(b,a);if(u.hasEagerState=!0,u.eagerState=I,Fn(I,b)){var H=r.interleaved;H===null?(u.next=u,Wc(r)):(u.next=H.next,H.next=u),r.interleaved=u;return}}catch{}finally{}a=Up(t,r,u,c),a!==null&&(u=Qt(),qn(a,t,c,u),m1(a,r,c))}}function p1(t){var r=t.alternate;return t===gt||r!==null&&r===gt}function f1(t,r){Xa=bs=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function m1(t,r,a){if((a&4194240)!==0){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,oc(t,a)}}var Cs={readContext:Mn,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},sy={readContext:Mn,useCallback:function(t,r){return nr().memoizedState=[t,r===void 0?null:r],t},useContext:Mn,useEffect:o1,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,ks(4194308,4,s1.bind(null,r,t),a)},useLayoutEffect:function(t,r){return ks(4194308,4,t,r)},useInsertionEffect:function(t,r){return ks(4,2,t,r)},useMemo:function(t,r){var a=nr();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var c=nr();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},c.queue=t,t=t.dispatch=ay.bind(null,gt,t),[c.memoizedState,t]},useRef:function(t){var r=nr();return t={current:t},r.memoizedState=t},useState:n1,useDebugValue:nd,useDeferredValue:function(t){return nr().memoizedState=t},useTransition:function(){var t=n1(!1),r=t[0];return t=oy.bind(null,t[1]),nr().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var c=gt,u=nr();if(ft){if(a===void 0)throw Error(i(407));a=a()}else{if(a=r(),Lt===null)throw Error(i(349));(po&30)!==0||Zp(c,r,a)}u.memoizedState=a;var f={value:a,getSnapshot:r};return u.queue=f,o1(Jp.bind(null,c,f,t),[t]),c.flags|=2048,ti(9,Xp.bind(null,c,f,a,r),void 0,null),a},useId:function(){var t=nr(),r=Lt.identifierPrefix;if(ft){var a=fr,c=pr;a=(c&~(1<<32-Dn(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=Ja++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=ry++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},ly={readContext:Mn,useCallback:c1,useContext:Mn,useEffect:td,useImperativeHandle:l1,useInsertionEffect:a1,useLayoutEffect:i1,useMemo:d1,useReducer:Jc,useRef:r1,useState:function(){return Jc(ei)},useDebugValue:nd,useDeferredValue:function(t){var r=Rn();return u1(r,St.memoizedState,t)},useTransition:function(){var t=Jc(ei)[0],r=Rn().memoizedState;return[t,r]},useMutableSource:Kp,useSyncExternalStore:Qp,useId:h1,unstable_isNewReconciler:!1},cy={readContext:Mn,useCallback:c1,useContext:Mn,useEffect:td,useImperativeHandle:l1,useInsertionEffect:a1,useLayoutEffect:i1,useMemo:d1,useReducer:ed,useRef:r1,useState:function(){return ed(ei)},useDebugValue:nd,useDeferredValue:function(t){var r=Rn();return St===null?r.memoizedState=t:u1(r,St.memoizedState,t)},useTransition:function(){var t=ed(ei)[0],r=Rn().memoizedState;return[t,r]},useMutableSource:Kp,useSyncExternalStore:Qp,useId:h1,unstable_isNewReconciler:!1};function Hn(t,r){if(t&&t.defaultProps){r=W({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function rd(t,r,a,c){r=t.memoizedState,a=a(c,r),a=a==null?r:W({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var js={isMounted:function(t){return(t=t._reactInternals)?ao(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var c=Qt(),u=Wr(t),f=gr(c,u);f.payload=r,a!=null&&(f.callback=a),r=Dr(t,f,u),r!==null&&(qn(r,t,u,c),vs(r,t,u))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var c=Qt(),u=Wr(t),f=gr(c,u);f.tag=1,f.payload=r,a!=null&&(f.callback=a),r=Dr(t,f,u),r!==null&&(qn(r,t,u,c),vs(r,t,u))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=Qt(),c=Wr(t),u=gr(a,c);u.tag=2,r!=null&&(u.callback=r),r=Dr(t,u,c),r!==null&&(qn(r,t,c,a),vs(r,t,c))}};function g1(t,r,a,c,u,f,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,f,b):r.prototype&&r.prototype.isPureReactComponent?!Ba(a,c)||!Ba(u,f):!0}function v1(t,r,a){var c=!1,u=Pr,f=r.contextType;return typeof f=="object"&&f!==null?f=Mn(f):(u=Jt(r)?so:Ut.current,c=r.contextTypes,f=(c=c!=null)?Ho(t,u):Pr),r=new r(a,f),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=js,t.stateNode=r,r._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=f),r}function x1(t,r,a,c){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==t&&js.enqueueReplaceState(r,r.state,null)}function od(t,r,a,c){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs={},Uc(t);var f=r.contextType;typeof f=="object"&&f!==null?u.context=Mn(f):(f=Jt(r)?so:Ut.current,u.context=Ho(t,f)),u.state=t.memoizedState,f=r.getDerivedStateFromProps,typeof f=="function"&&(rd(t,r,f,a),u.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(r=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),r!==u.state&&js.enqueueReplaceState(u,u.state,null),xs(t,a,u,c),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function Qo(t,r){try{var a="",c=r;do a+=X(c),c=c.return;while(c);var u=a}catch(f){u=`
Error generating stack: `+f.message+`
`+f.stack}return{value:t,source:r,stack:u,digest:null}}function ad(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function id(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var dy=typeof WeakMap=="function"?WeakMap:Map;function y1(t,r,a){a=gr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){As||(As=!0,bd=c),id(t,r)},a}function w1(t,r,a){a=gr(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var u=r.value;a.payload=function(){return c(u)},a.callback=function(){id(t,r)}}var f=t.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){id(t,r),typeof c!="function"&&(Br===null?Br=new Set([this]):Br.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})}),a}function b1(t,r,a){var c=t.pingCache;if(c===null){c=t.pingCache=new dy;var u=new Set;c.set(r,u)}else u=c.get(r),u===void 0&&(u=new Set,c.set(r,u));u.has(a)||(u.add(a),t=Cy.bind(null,t,r,a),r.then(t,t))}function k1(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function _1(t,r,a,c,u){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=gr(-1,1),r.tag=2,Dr(a,r,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var uy=P.ReactCurrentOwner,en=!1;function Kt(t,r,a,c){r.child=t===null?Wp(r,null,a,c):Vo(r,t.child,a,c)}function C1(t,r,a,c,u){a=a.render;var f=r.ref;return Yo(r,u),c=Zc(t,r,a,c,f,u),a=Xc(),t!==null&&!en?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,vr(t,r,u)):(ft&&a&&Ic(r),r.flags|=1,Kt(t,r,c,u),r.child)}function j1(t,r,a,c,u){if(t===null){var f=a.type;return typeof f=="function"&&!Md(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=f,S1(t,r,f,c,u)):(t=Os(a.type,null,c,r,r.mode,u),t.ref=r.ref,t.return=r,r.child=t)}if(f=t.child,(t.lanes&u)===0){var b=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ba,a(b,c)&&t.ref===r.ref)return vr(t,r,u)}return r.flags|=1,t=qr(f,c),t.ref=r.ref,t.return=r,r.child=t}function S1(t,r,a,c,u){if(t!==null){var f=t.memoizedProps;if(Ba(f,c)&&t.ref===r.ref)if(en=!1,r.pendingProps=c=f,(t.lanes&u)!==0)(t.flags&131072)!==0&&(en=!0);else return r.lanes=t.lanes,vr(t,r,u)}return sd(t,r,a,c,u)}function $1(t,r,a){var c=r.pendingProps,u=c.children,f=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Xo,vn),vn|=a;else{if((a&1073741824)===0)return t=f!==null?f.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,lt(Xo,vn),vn|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,lt(Xo,vn),vn|=c}else f!==null?(c=f.baseLanes|a,r.memoizedState=null):c=a,lt(Xo,vn),vn|=c;return Kt(t,r,u,a),r.child}function M1(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function sd(t,r,a,c,u){var f=Jt(a)?so:Ut.current;return f=Ho(r,f),Yo(r,u),a=Zc(t,r,a,c,f,u),c=Xc(),t!==null&&!en?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,vr(t,r,u)):(ft&&c&&Ic(r),r.flags|=1,Kt(t,r,a,u),r.child)}function R1(t,r,a,c,u){if(Jt(a)){var f=!0;cs(r)}else f=!1;if(Yo(r,u),r.stateNode===null)$s(t,r),v1(r,a,c),od(r,a,c,u),c=!0;else if(t===null){var b=r.stateNode,I=r.memoizedProps;b.props=I;var H=b.context,te=a.contextType;typeof te=="object"&&te!==null?te=Mn(te):(te=Jt(a)?so:Ut.current,te=Ho(r,te));var he=a.getDerivedStateFromProps,pe=typeof he=="function"||typeof b.getSnapshotBeforeUpdate=="function";pe||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==c||H!==te)&&x1(r,b,c,te),Or=!1;var ue=r.memoizedState;b.state=ue,xs(r,c,b,u),H=r.memoizedState,I!==c||ue!==H||Xt.current||Or?(typeof he=="function"&&(rd(r,a,he,c),H=r.memoizedState),(I=Or||g1(r,a,I,c,ue,H,te))?(pe||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=H),b.props=c,b.state=H,b.context=te,c=I):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{b=r.stateNode,qp(t,r),I=r.memoizedProps,te=r.type===r.elementType?I:Hn(r.type,I),b.props=te,pe=r.pendingProps,ue=b.context,H=a.contextType,typeof H=="object"&&H!==null?H=Mn(H):(H=Jt(a)?so:Ut.current,H=Ho(r,H));var ye=a.getDerivedStateFromProps;(he=typeof ye=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==pe||ue!==H)&&x1(r,b,c,H),Or=!1,ue=r.memoizedState,b.state=ue,xs(r,c,b,u);var Ce=r.memoizedState;I!==pe||ue!==Ce||Xt.current||Or?(typeof ye=="function"&&(rd(r,a,ye,c),Ce=r.memoizedState),(te=Or||g1(r,a,te,c,ue,Ce,H)||!1)?(he||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,Ce,H),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,Ce,H)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=Ce),b.props=c,b.state=Ce,b.context=H,c=te):(typeof b.componentDidUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=1024),c=!1)}return ld(t,r,a,c,f,u)}function ld(t,r,a,c,u,f){M1(t,r);var b=(r.flags&128)!==0;if(!c&&!b)return u&&Ip(r,a,!1),vr(t,r,f);c=r.stateNode,uy.current=r;var I=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,t!==null&&b?(r.child=Vo(r,t.child,null,f),r.child=Vo(r,null,I,f)):Kt(t,r,I,f),r.memoizedState=c.state,u&&Ip(r,a,!0),r.child}function N1(t){var r=t.stateNode;r.pendingContext?Ap(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Ap(t,r.context,!1),qc(t,r.containerInfo)}function L1(t,r,a,c,u){return qo(),Oc(u),r.flags|=256,Kt(t,r,a,c),r.child}var cd={dehydrated:null,treeContext:null,retryLane:0};function dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function A1(t,r,a){var c=r.pendingProps,u=mt.current,f=!1,b=(r.flags&128)!==0,I;if((I=b)||(I=t!==null&&t.memoizedState===null?!1:(u&2)!==0),I?(f=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),lt(mt,u&1),t===null)return zc(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(b=c.children,t=c.fallback,f?(c=r.mode,f=r.child,b={mode:"hidden",children:b},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=b):f=Ds(b,c,0,null),t=xo(t,c,a,null),f.return=r,t.return=r,f.sibling=t,r.child=f,r.child.memoizedState=dd(a),r.memoizedState=cd,t):ud(r,b));if(u=t.memoizedState,u!==null&&(I=u.dehydrated,I!==null))return hy(t,r,b,c,I,u,a);if(f){f=c.fallback,b=r.mode,u=t.child,I=u.sibling;var H={mode:"hidden",children:c.children};return(b&1)===0&&r.child!==u?(c=r.child,c.childLanes=0,c.pendingProps=H,r.deletions=null):(c=qr(u,H),c.subtreeFlags=u.subtreeFlags&14680064),I!==null?f=qr(I,f):(f=xo(f,b,a,null),f.flags|=2),f.return=r,c.return=r,c.sibling=f,r.child=c,c=f,f=r.child,b=t.child.memoizedState,b=b===null?dd(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},f.memoizedState=b,f.childLanes=t.childLanes&~a,r.memoizedState=cd,c}return f=t.child,t=f.sibling,c=qr(f,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=c,r.memoizedState=null,c}function ud(t,r){return r=Ds({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function Ss(t,r,a,c){return c!==null&&Oc(c),Vo(r,t.child,null,a),t=ud(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function hy(t,r,a,c,u,f,b){if(a)return r.flags&256?(r.flags&=-257,c=ad(Error(i(422))),Ss(t,r,b,c)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(f=c.fallback,u=r.mode,c=Ds({mode:"visible",children:c.children},u,0,null),f=xo(f,u,b,null),f.flags|=2,c.return=r,f.return=r,c.sibling=f,r.child=c,(r.mode&1)!==0&&Vo(r,t.child,null,b),r.child.memoizedState=dd(b),r.memoizedState=cd,f);if((r.mode&1)===0)return Ss(t,r,b,null);if(u.data==="$!"){if(c=u.nextSibling&&u.nextSibling.dataset,c)var I=c.dgst;return c=I,f=Error(i(419)),c=ad(f,c,void 0),Ss(t,r,b,c)}if(I=(b&t.childLanes)!==0,en||I){if(c=Lt,c!==null){switch(b&-b){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(c.suspendedLanes|b))!==0?0:u,u!==0&&u!==f.retryLane&&(f.retryLane=u,mr(t,u),qn(c,t,u,-1))}return $d(),c=ad(Error(i(421))),Ss(t,r,b,c)}return u.data==="$?"?(r.flags|=128,r.child=t.child,r=jy.bind(null,t),u._reactRetry=r,null):(t=f.treeContext,gn=Ir(u.nextSibling),mn=r,ft=!0,Bn=null,t!==null&&(Sn[$n++]=pr,Sn[$n++]=fr,Sn[$n++]=lo,pr=t.id,fr=t.overflow,lo=r),r=ud(r,c.children),r.flags|=4096,r)}function T1(t,r,a){t.lanes|=r;var c=t.alternate;c!==null&&(c.lanes|=r),Hc(t.return,r,a)}function hd(t,r,a,c,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:u}:(f.isBackwards=r,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=u)}function I1(t,r,a){var c=r.pendingProps,u=c.revealOrder,f=c.tail;if(Kt(t,r,c.children,a),c=mt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&T1(t,a,r);else if(t.tag===19)T1(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(lt(mt,c),(r.mode&1)===0)r.memoizedState=null;else switch(u){case"forwards":for(a=r.child,u=null;a!==null;)t=a.alternate,t!==null&&ys(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=r.child,r.child=null):(u=a.sibling,a.sibling=null),hd(r,!1,u,a,f);break;case"backwards":for(a=null,u=r.child,r.child=null;u!==null;){if(t=u.alternate,t!==null&&ys(t)===null){r.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}hd(r,!0,a,null,f);break;case"together":hd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function $s(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function vr(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),fo|=r.lanes,(a&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(i(153));if(r.child!==null){for(t=r.child,a=qr(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=qr(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function py(t,r,a){switch(r.tag){case 3:N1(r),qo();break;case 5:Yp(r);break;case 1:Jt(r.type)&&cs(r);break;case 4:qc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,u=r.memoizedProps.value;lt(ms,c._currentValue),c._currentValue=u;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(lt(mt,mt.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?A1(t,r,a):(lt(mt,mt.current&1),t=vr(t,r,a),t!==null?t.sibling:null);lt(mt,mt.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(t.flags&128)!==0){if(c)return I1(t,r,a);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),lt(mt,mt.current),c)break;return null;case 22:case 23:return r.lanes=0,$1(t,r,a)}return vr(t,r,a)}var E1,pd,P1,z1;E1=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},pd=function(){},P1=function(t,r,a,c){var u=t.memoizedProps;if(u!==c){t=r.stateNode,ho(tr.current);var f=null;switch(a){case"input":u=_e(t,u),c=_e(t,c),f=[];break;case"select":u=W({},u,{value:void 0}),c=W({},c,{value:void 0}),f=[];break;case"textarea":u=xe(t,u),c=xe(t,c),f=[];break;default:typeof u.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=is)}vt(a,c);var b;a=null;for(te in u)if(!c.hasOwnProperty(te)&&u.hasOwnProperty(te)&&u[te]!=null)if(te==="style"){var I=u[te];for(b in I)I.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(l.hasOwnProperty(te)?f||(f=[]):(f=f||[]).push(te,null));for(te in c){var H=c[te];if(I=u!=null?u[te]:void 0,c.hasOwnProperty(te)&&H!==I&&(H!=null||I!=null))if(te==="style")if(I){for(b in I)!I.hasOwnProperty(b)||H&&H.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in H)H.hasOwnProperty(b)&&I[b]!==H[b]&&(a||(a={}),a[b]=H[b])}else a||(f||(f=[]),f.push(te,a)),a=H;else te==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(f=f||[]).push(te,H)):te==="children"?typeof H!="string"&&typeof H!="number"||(f=f||[]).push(te,""+H):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(l.hasOwnProperty(te)?(H!=null&&te==="onScroll"&&ut("scroll",t),f||I===H||(f=[])):(f=f||[]).push(te,H))}a&&(f=f||[]).push("style",a);var te=f;(r.updateQueue=te)&&(r.flags|=4)}},z1=function(t,r,a,c){a!==c&&(r.flags|=4)};function ni(t,r){if(!ft)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Vt(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(r)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags&14680064,c|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags,c|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=c,t.childLanes=a,r}function fy(t,r,a){var c=r.pendingProps;switch(Ec(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(r),null;case 1:return Jt(r.type)&&ls(),Vt(r),null;case 3:return c=r.stateNode,Ko(),ht(Xt),ht(Ut),Yc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(ps(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Bn!==null&&(Cd(Bn),Bn=null))),pd(t,r),Vt(r),null;case 5:Vc(r);var u=ho(Za.current);if(a=r.type,t!==null&&r.stateNode!=null)P1(t,r,a,c,u),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(i(166));return Vt(r),null}if(t=ho(tr.current),ps(r)){c=r.stateNode,a=r.type;var f=r.memoizedProps;switch(c[er]=r,c[Va]=f,t=(r.mode&1)!==0,a){case"dialog":ut("cancel",c),ut("close",c);break;case"iframe":case"object":case"embed":ut("load",c);break;case"video":case"audio":for(u=0;u<Wa.length;u++)ut(Wa[u],c);break;case"source":ut("error",c);break;case"img":case"image":case"link":ut("error",c),ut("load",c);break;case"details":ut("toggle",c);break;case"input":Le(c,f),ut("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},ut("invalid",c);break;case"textarea":Se(c,f),ut("invalid",c)}vt(a,f),u=null;for(var b in f)if(f.hasOwnProperty(b)){var I=f[b];b==="children"?typeof I=="string"?c.textContent!==I&&(f.suppressHydrationWarning!==!0&&as(c.textContent,I,t),u=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(f.suppressHydrationWarning!==!0&&as(c.textContent,I,t),u=["children",""+I]):l.hasOwnProperty(b)&&I!=null&&b==="onScroll"&&ut("scroll",c)}switch(a){case"input":de(c),Ee(c,f,!0);break;case"textarea":de(c),tt(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=is)}c=u,r.updateQueue=c,c!==null&&(r.flags|=4)}else{b=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rt(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=b.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=b.createElement(a,{is:c.is}):(t=b.createElement(a),a==="select"&&(b=t,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):t=b.createElementNS(t,a),t[er]=r,t[Va]=c,E1(t,r,!1,!1),r.stateNode=t;e:{switch(b=yt(a,c),a){case"dialog":ut("cancel",t),ut("close",t),u=c;break;case"iframe":case"object":case"embed":ut("load",t),u=c;break;case"video":case"audio":for(u=0;u<Wa.length;u++)ut(Wa[u],t);u=c;break;case"source":ut("error",t),u=c;break;case"img":case"image":case"link":ut("error",t),ut("load",t),u=c;break;case"details":ut("toggle",t),u=c;break;case"input":Le(t,c),u=_e(t,c),ut("invalid",t);break;case"option":u=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},u=W({},c,{value:void 0}),ut("invalid",t);break;case"textarea":Se(t,c),u=xe(t,c),ut("invalid",t);break;default:u=c}vt(a,u),I=u;for(f in I)if(I.hasOwnProperty(f)){var H=I[f];f==="style"?Ae(t,H):f==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Zn(t,H)):f==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&jn(t,H):typeof H=="number"&&jn(t,""+H):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(l.hasOwnProperty(f)?H!=null&&f==="onScroll"&&ut("scroll",t):H!=null&&S(t,f,H,b))}switch(a){case"input":de(t),Ee(t,c,!1);break;case"textarea":de(t),tt(t);break;case"option":c.value!=null&&t.setAttribute("value",""+z(c.value));break;case"select":t.multiple=!!c.multiple,f=c.value,f!=null?Ke(t,!!c.multiple,f,!1):c.defaultValue!=null&&Ke(t,!!c.multiple,c.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=is)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Vt(r),null;case 6:if(t&&r.stateNode!=null)z1(t,r,t.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(i(166));if(a=ho(Za.current),ho(tr.current),ps(r)){if(c=r.stateNode,a=r.memoizedProps,c[er]=r,(f=c.nodeValue!==a)&&(t=mn,t!==null))switch(t.tag){case 3:as(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&as(c.nodeValue,a,(t.mode&1)!==0)}f&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[er]=r,r.stateNode=c}return Vt(r),null;case 13:if(ht(mt),c=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&gn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Fp(),qo(),r.flags|=98560,f=!1;else if(f=ps(r),c!==null&&c.dehydrated!==null){if(t===null){if(!f)throw Error(i(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[er]=r}else qo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Vt(r),f=!1}else Bn!==null&&(Cd(Bn),Bn=null),f=!0;if(!f)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(mt.current&1)!==0?$t===0&&($t=3):$d())),r.updateQueue!==null&&(r.flags|=4),Vt(r),null);case 4:return Ko(),pd(t,r),t===null&&Ua(r.stateNode.containerInfo),Vt(r),null;case 10:return Bc(r.type._context),Vt(r),null;case 17:return Jt(r.type)&&ls(),Vt(r),null;case 19:if(ht(mt),f=r.memoizedState,f===null)return Vt(r),null;if(c=(r.flags&128)!==0,b=f.rendering,b===null)if(c)ni(f,!1);else{if($t!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(b=ys(t),b!==null){for(r.flags|=128,ni(f,!1),c=b.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)f=a,t=c,f.flags&=14680066,b=f.alternate,b===null?(f.childLanes=0,f.lanes=t,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=b.childLanes,f.lanes=b.lanes,f.child=b.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=b.memoizedProps,f.memoizedState=b.memoizedState,f.updateQueue=b.updateQueue,f.type=b.type,t=b.dependencies,f.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return lt(mt,mt.current&1|2),r.child}t=t.sibling}f.tail!==null&&wt()>Jo&&(r.flags|=128,c=!0,ni(f,!1),r.lanes=4194304)}else{if(!c)if(t=ys(b),t!==null){if(r.flags|=128,c=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),ni(f,!0),f.tail===null&&f.tailMode==="hidden"&&!b.alternate&&!ft)return Vt(r),null}else 2*wt()-f.renderingStartTime>Jo&&a!==1073741824&&(r.flags|=128,c=!0,ni(f,!1),r.lanes=4194304);f.isBackwards?(b.sibling=r.child,r.child=b):(a=f.last,a!==null?a.sibling=b:r.child=b,f.last=b)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=wt(),r.sibling=null,a=mt.current,lt(mt,c?a&1|2:a&1),r):(Vt(r),null);case 22:case 23:return Sd(),c=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(vn&1073741824)!==0&&(Vt(r),r.subtreeFlags&6&&(r.flags|=8192)):Vt(r),null;case 24:return null;case 25:return null}throw Error(i(156,r.tag))}function my(t,r){switch(Ec(r),r.tag){case 1:return Jt(r.type)&&ls(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Ko(),ht(Xt),ht(Ut),Yc(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return Vc(r),null;case 13:if(ht(mt),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(i(340));qo()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return ht(mt),null;case 4:return Ko(),null;case 10:return Bc(r.type._context),null;case 22:case 23:return Sd(),null;case 24:return null;default:return null}}var Ms=!1,Gt=!1,gy=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Zo(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){xt(t,r,c)}else a.current=null}function fd(t,r,a){try{a()}catch(c){xt(t,r,c)}}var O1=!1;function vy(t,r){if(Sc=Yi,t=gp(),xc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var u=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var b=0,I=-1,H=-1,te=0,he=0,pe=t,ue=null;t:for(;;){for(var ye;pe!==a||u!==0&&pe.nodeType!==3||(I=b+u),pe!==f||c!==0&&pe.nodeType!==3||(H=b+c),pe.nodeType===3&&(b+=pe.nodeValue.length),(ye=pe.firstChild)!==null;)ue=pe,pe=ye;for(;;){if(pe===t)break t;if(ue===a&&++te===u&&(I=b),ue===f&&++he===c&&(H=b),(ye=pe.nextSibling)!==null)break;pe=ue,ue=pe.parentNode}pe=ye}a=I===-1||H===-1?null:{start:I,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for($c={focusedElem:t,selectionRange:a},Yi=!1,ke=r;ke!==null;)if(r=ke,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,ke=t;else for(;ke!==null;){r=ke;try{var Ce=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ce!==null){var $e=Ce.memoizedProps,bt=Ce.memoizedState,Z=r.stateNode,V=Z.getSnapshotBeforeUpdate(r.elementType===r.type?$e:Hn(r.type,$e),bt);Z.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var J=r.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(fe){xt(r,r.return,fe)}if(t=r.sibling,t!==null){t.return=r.return,ke=t;break}ke=r.return}return Ce=O1,O1=!1,Ce}function ri(t,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var u=c=c.next;do{if((u.tag&t)===t){var f=u.destroy;u.destroy=void 0,f!==void 0&&fd(r,a,f)}u=u.next}while(u!==c)}}function Rs(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function md(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function D1(t){var r=t.alternate;r!==null&&(t.alternate=null,D1(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[er],delete r[Va],delete r[Lc],delete r[Jx],delete r[ey])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function F1(t){return t.tag===5||t.tag===3||t.tag===4}function B1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||F1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gd(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=is));else if(c!==4&&(t=t.child,t!==null))for(gd(t,r,a),t=t.sibling;t!==null;)gd(t,r,a),t=t.sibling}function vd(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(vd(t,r,a),t=t.sibling;t!==null;)vd(t,r,a),t=t.sibling}var Ft=null,Wn=!1;function Fr(t,r,a){for(a=a.child;a!==null;)H1(t,r,a),a=a.sibling}function H1(t,r,a){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Hi,a)}catch{}switch(a.tag){case 5:Gt||Zo(a,r);case 6:var c=Ft,u=Wn;Ft=null,Fr(t,r,a),Ft=c,Wn=u,Ft!==null&&(Wn?(t=Ft,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Ft.removeChild(a.stateNode));break;case 18:Ft!==null&&(Wn?(t=Ft,a=a.stateNode,t.nodeType===8?Nc(t.parentNode,a):t.nodeType===1&&Nc(t,a),Ea(t)):Nc(Ft,a.stateNode));break;case 4:c=Ft,u=Wn,Ft=a.stateNode.containerInfo,Wn=!0,Fr(t,r,a),Ft=c,Wn=u;break;case 0:case 11:case 14:case 15:if(!Gt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){u=c=c.next;do{var f=u,b=f.destroy;f=f.tag,b!==void 0&&((f&2)!==0||(f&4)!==0)&&fd(a,r,b),u=u.next}while(u!==c)}Fr(t,r,a);break;case 1:if(!Gt&&(Zo(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){xt(a,r,I)}Fr(t,r,a);break;case 21:Fr(t,r,a);break;case 22:a.mode&1?(Gt=(c=Gt)||a.memoizedState!==null,Fr(t,r,a),Gt=c):Fr(t,r,a);break;default:Fr(t,r,a)}}function W1(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new gy),r.forEach(function(c){var u=Sy.bind(null,t,c);a.has(c)||(a.add(c),c.then(u,u))})}}function Un(t,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var u=a[c];try{var f=t,b=r,I=b;e:for(;I!==null;){switch(I.tag){case 5:Ft=I.stateNode,Wn=!1;break e;case 3:Ft=I.stateNode.containerInfo,Wn=!0;break e;case 4:Ft=I.stateNode.containerInfo,Wn=!0;break e}I=I.return}if(Ft===null)throw Error(i(160));H1(f,b,u),Ft=null,Wn=!1;var H=u.alternate;H!==null&&(H.return=null),u.return=null}catch(te){xt(u,r,te)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)U1(r,t),r=r.sibling}function U1(t,r){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(r,t),rr(t),c&4){try{ri(3,t,t.return),Rs(3,t)}catch($e){xt(t,t.return,$e)}try{ri(5,t,t.return)}catch($e){xt(t,t.return,$e)}}break;case 1:Un(r,t),rr(t),c&512&&a!==null&&Zo(a,a.return);break;case 5:if(Un(r,t),rr(t),c&512&&a!==null&&Zo(a,a.return),t.flags&32){var u=t.stateNode;try{jn(u,"")}catch($e){xt(t,t.return,$e)}}if(c&4&&(u=t.stateNode,u!=null)){var f=t.memoizedProps,b=a!==null?a.memoizedProps:f,I=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{I==="input"&&f.type==="radio"&&f.name!=null&&Ie(u,f),yt(I,b);var te=yt(I,f);for(b=0;b<H.length;b+=2){var he=H[b],pe=H[b+1];he==="style"?Ae(u,pe):he==="dangerouslySetInnerHTML"?Zn(u,pe):he==="children"?jn(u,pe):S(u,he,pe,te)}switch(I){case"input":Oe(u,f);break;case"textarea":et(u,f);break;case"select":var ue=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!f.multiple;var ye=f.value;ye!=null?Ke(u,!!f.multiple,ye,!1):ue!==!!f.multiple&&(f.defaultValue!=null?Ke(u,!!f.multiple,f.defaultValue,!0):Ke(u,!!f.multiple,f.multiple?[]:"",!1))}u[Va]=f}catch($e){xt(t,t.return,$e)}}break;case 6:if(Un(r,t),rr(t),c&4){if(t.stateNode===null)throw Error(i(162));u=t.stateNode,f=t.memoizedProps;try{u.nodeValue=f}catch($e){xt(t,t.return,$e)}}break;case 3:if(Un(r,t),rr(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ea(r.containerInfo)}catch($e){xt(t,t.return,$e)}break;case 4:Un(r,t),rr(t);break;case 13:Un(r,t),rr(t),u=t.child,u.flags&8192&&(f=u.memoizedState!==null,u.stateNode.isHidden=f,!f||u.alternate!==null&&u.alternate.memoizedState!==null||(wd=wt())),c&4&&W1(t);break;case 22:if(he=a!==null&&a.memoizedState!==null,t.mode&1?(Gt=(te=Gt)||he,Un(r,t),Gt=te):Un(r,t),rr(t),c&8192){if(te=t.memoizedState!==null,(t.stateNode.isHidden=te)&&!he&&(t.mode&1)!==0)for(ke=t,he=t.child;he!==null;){for(pe=ke=he;ke!==null;){switch(ue=ke,ye=ue.child,ue.tag){case 0:case 11:case 14:case 15:ri(4,ue,ue.return);break;case 1:Zo(ue,ue.return);var Ce=ue.stateNode;if(typeof Ce.componentWillUnmount=="function"){c=ue,a=ue.return;try{r=c,Ce.props=r.memoizedProps,Ce.state=r.memoizedState,Ce.componentWillUnmount()}catch($e){xt(c,a,$e)}}break;case 5:Zo(ue,ue.return);break;case 22:if(ue.memoizedState!==null){G1(pe);continue}}ye!==null?(ye.return=ue,ke=ye):G1(pe)}he=he.sibling}e:for(he=null,pe=t;;){if(pe.tag===5){if(he===null){he=pe;try{u=pe.stateNode,te?(f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(I=pe.stateNode,H=pe.memoizedProps.style,b=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=Ao("display",b))}catch($e){xt(t,t.return,$e)}}}else if(pe.tag===6){if(he===null)try{pe.stateNode.nodeValue=te?"":pe.memoizedProps}catch($e){xt(t,t.return,$e)}}else if((pe.tag!==22&&pe.tag!==23||pe.memoizedState===null||pe===t)&&pe.child!==null){pe.child.return=pe,pe=pe.child;continue}if(pe===t)break e;for(;pe.sibling===null;){if(pe.return===null||pe.return===t)break e;he===pe&&(he=null),pe=pe.return}he===pe&&(he=null),pe.sibling.return=pe.return,pe=pe.sibling}}break;case 19:Un(r,t),rr(t),c&4&&W1(t);break;case 21:break;default:Un(r,t),rr(t)}}function rr(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(F1(a)){var c=a;break e}a=a.return}throw Error(i(160))}switch(c.tag){case 5:var u=c.stateNode;c.flags&32&&(jn(u,""),c.flags&=-33);var f=B1(t);vd(t,f,u);break;case 3:case 4:var b=c.stateNode.containerInfo,I=B1(t);gd(t,I,b);break;default:throw Error(i(161))}}catch(H){xt(t,t.return,H)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function xy(t,r,a){ke=t,q1(t)}function q1(t,r,a){for(var c=(t.mode&1)!==0;ke!==null;){var u=ke,f=u.child;if(u.tag===22&&c){var b=u.memoizedState!==null||Ms;if(!b){var I=u.alternate,H=I!==null&&I.memoizedState!==null||Gt;I=Ms;var te=Gt;if(Ms=b,(Gt=H)&&!te)for(ke=u;ke!==null;)b=ke,H=b.child,b.tag===22&&b.memoizedState!==null?Y1(u):H!==null?(H.return=b,ke=H):Y1(u);for(;f!==null;)ke=f,q1(f),f=f.sibling;ke=u,Ms=I,Gt=te}V1(t)}else(u.subtreeFlags&8772)!==0&&f!==null?(f.return=u,ke=f):V1(t)}}function V1(t){for(;ke!==null;){var r=ke;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Gt||Rs(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Gt)if(a===null)c.componentDidMount();else{var u=r.elementType===r.type?a.memoizedProps:Hn(r.type,a.memoizedProps);c.componentDidUpdate(u,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=r.updateQueue;f!==null&&Gp(r,f,c);break;case 3:var b=r.updateQueue;if(b!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Gp(r,b,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var te=r.alternate;if(te!==null){var he=te.memoizedState;if(he!==null){var pe=he.dehydrated;pe!==null&&Ea(pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Gt||r.flags&512&&md(r)}catch(ue){xt(r,r.return,ue)}}if(r===t){ke=null;break}if(a=r.sibling,a!==null){a.return=r.return,ke=a;break}ke=r.return}}function G1(t){for(;ke!==null;){var r=ke;if(r===t){ke=null;break}var a=r.sibling;if(a!==null){a.return=r.return,ke=a;break}ke=r.return}}function Y1(t){for(;ke!==null;){var r=ke;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Rs(4,r)}catch(H){xt(r,a,H)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var u=r.return;try{c.componentDidMount()}catch(H){xt(r,u,H)}}var f=r.return;try{md(r)}catch(H){xt(r,f,H)}break;case 5:var b=r.return;try{md(r)}catch(H){xt(r,b,H)}}}catch(H){xt(r,r.return,H)}if(r===t){ke=null;break}var I=r.sibling;if(I!==null){I.return=r.return,ke=I;break}ke=r.return}}var yy=Math.ceil,Ns=P.ReactCurrentDispatcher,xd=P.ReactCurrentOwner,Nn=P.ReactCurrentBatchConfig,Ze=0,Lt=null,_t=null,Bt=0,vn=0,Xo=Er(0),$t=0,oi=null,fo=0,Ls=0,yd=0,ai=null,tn=null,wd=0,Jo=1/0,xr=null,As=!1,bd=null,Br=null,Ts=!1,Hr=null,Is=0,ii=0,kd=null,Es=-1,Ps=0;function Qt(){return(Ze&6)!==0?wt():Es!==-1?Es:Es=wt()}function Wr(t){return(t.mode&1)===0?1:(Ze&2)!==0&&Bt!==0?Bt&-Bt:ny.transition!==null?(Ps===0&&(Ps=Bh()),Ps):(t=ot,t!==0||(t=window.event,t=t===void 0?16:Qh(t.type)),t)}function qn(t,r,a,c){if(50<ii)throw ii=0,kd=null,Error(i(185));Na(t,a,c),((Ze&2)===0||t!==Lt)&&(t===Lt&&((Ze&2)===0&&(Ls|=a),$t===4&&Ur(t,Bt)),nn(t,c),a===1&&Ze===0&&(r.mode&1)===0&&(Jo=wt()+500,ds&&zr()))}function nn(t,r){var a=t.callbackNode;nx(t,r);var c=qi(t,t===Lt?Bt:0);if(c===0)a!==null&&Oh(a),t.callbackNode=null,t.callbackPriority=0;else if(r=c&-c,t.callbackPriority!==r){if(a!=null&&Oh(a),r===1)t.tag===0?ty(Q1.bind(null,t)):Ep(Q1.bind(null,t)),Zx(function(){(Ze&6)===0&&zr()}),a=null;else{switch(Hh(c)){case 1:a=tc;break;case 4:a=Dh;break;case 16:a=Bi;break;case 536870912:a=Fh;break;default:a=Bi}a=of(a,K1.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function K1(t,r){if(Es=-1,Ps=0,(Ze&6)!==0)throw Error(i(327));var a=t.callbackNode;if(ea()&&t.callbackNode!==a)return null;var c=qi(t,t===Lt?Bt:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||r)r=zs(t,c);else{r=c;var u=Ze;Ze|=2;var f=X1();(Lt!==t||Bt!==r)&&(xr=null,Jo=wt()+500,go(t,r));do try{ky();break}catch(I){Z1(t,I)}while(!0);Fc(),Ns.current=f,Ze=u,_t!==null?r=0:(Lt=null,Bt=0,r=$t)}if(r!==0){if(r===2&&(u=nc(t),u!==0&&(c=u,r=_d(t,u))),r===1)throw a=oi,go(t,0),Ur(t,c),nn(t,wt()),a;if(r===6)Ur(t,c);else{if(u=t.current.alternate,(c&30)===0&&!wy(u)&&(r=zs(t,c),r===2&&(f=nc(t),f!==0&&(c=f,r=_d(t,f))),r===1))throw a=oi,go(t,0),Ur(t,c),nn(t,wt()),a;switch(t.finishedWork=u,t.finishedLanes=c,r){case 0:case 1:throw Error(i(345));case 2:vo(t,tn,xr);break;case 3:if(Ur(t,c),(c&130023424)===c&&(r=wd+500-wt(),10<r)){if(qi(t,0)!==0)break;if(u=t.suspendedLanes,(u&c)!==c){Qt(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=Rc(vo.bind(null,t,tn,xr),r);break}vo(t,tn,xr);break;case 4:if(Ur(t,c),(c&4194240)===c)break;for(r=t.eventTimes,u=-1;0<c;){var b=31-Dn(c);f=1<<b,b=r[b],b>u&&(u=b),c&=~f}if(c=u,c=wt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*yy(c/1960))-c,10<c){t.timeoutHandle=Rc(vo.bind(null,t,tn,xr),c);break}vo(t,tn,xr);break;case 5:vo(t,tn,xr);break;default:throw Error(i(329))}}}return nn(t,wt()),t.callbackNode===a?K1.bind(null,t):null}function _d(t,r){var a=ai;return t.current.memoizedState.isDehydrated&&(go(t,r).flags|=256),t=zs(t,r),t!==2&&(r=tn,tn=a,r!==null&&Cd(r)),t}function Cd(t){tn===null?tn=t:tn.push.apply(tn,t)}function wy(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var u=a[c],f=u.getSnapshot;u=u.value;try{if(!Fn(f(),u))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ur(t,r){for(r&=~yd,r&=~Ls,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-Dn(r),c=1<<a;t[a]=-1,r&=~c}}function Q1(t){if((Ze&6)!==0)throw Error(i(327));ea();var r=qi(t,0);if((r&1)===0)return nn(t,wt()),null;var a=zs(t,r);if(t.tag!==0&&a===2){var c=nc(t);c!==0&&(r=c,a=_d(t,c))}if(a===1)throw a=oi,go(t,0),Ur(t,r),nn(t,wt()),a;if(a===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,vo(t,tn,xr),nn(t,wt()),null}function jd(t,r){var a=Ze;Ze|=1;try{return t(r)}finally{Ze=a,Ze===0&&(Jo=wt()+500,ds&&zr())}}function mo(t){Hr!==null&&Hr.tag===0&&(Ze&6)===0&&ea();var r=Ze;Ze|=1;var a=Nn.transition,c=ot;try{if(Nn.transition=null,ot=1,t)return t()}finally{ot=c,Nn.transition=a,Ze=r,(Ze&6)===0&&zr()}}function Sd(){vn=Xo.current,ht(Xo)}function go(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Qx(a)),_t!==null)for(a=_t.return;a!==null;){var c=a;switch(Ec(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ls();break;case 3:Ko(),ht(Xt),ht(Ut),Yc();break;case 5:Vc(c);break;case 4:Ko();break;case 13:ht(mt);break;case 19:ht(mt);break;case 10:Bc(c.type._context);break;case 22:case 23:Sd()}a=a.return}if(Lt=t,_t=t=qr(t.current,null),Bt=vn=r,$t=0,oi=null,yd=Ls=fo=0,tn=ai=null,uo!==null){for(r=0;r<uo.length;r++)if(a=uo[r],c=a.interleaved,c!==null){a.interleaved=null;var u=c.next,f=a.pending;if(f!==null){var b=f.next;f.next=u,c.next=b}a.pending=c}uo=null}return t}function Z1(t,r){do{var a=_t;try{if(Fc(),ws.current=Cs,bs){for(var c=gt.memoizedState;c!==null;){var u=c.queue;u!==null&&(u.pending=null),c=c.next}bs=!1}if(po=0,Nt=St=gt=null,Xa=!1,Ja=0,xd.current=null,a===null||a.return===null){$t=1,oi=r,_t=null;break}e:{var f=t,b=a.return,I=a,H=r;if(r=Bt,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var te=H,he=I,pe=he.tag;if((he.mode&1)===0&&(pe===0||pe===11||pe===15)){var ue=he.alternate;ue?(he.updateQueue=ue.updateQueue,he.memoizedState=ue.memoizedState,he.lanes=ue.lanes):(he.updateQueue=null,he.memoizedState=null)}var ye=k1(b);if(ye!==null){ye.flags&=-257,_1(ye,b,I,f,r),ye.mode&1&&b1(f,te,r),r=ye,H=te;var Ce=r.updateQueue;if(Ce===null){var $e=new Set;$e.add(H),r.updateQueue=$e}else Ce.add(H);break e}else{if((r&1)===0){b1(f,te,r),$d();break e}H=Error(i(426))}}else if(ft&&I.mode&1){var bt=k1(b);if(bt!==null){(bt.flags&65536)===0&&(bt.flags|=256),_1(bt,b,I,f,r),Oc(Qo(H,I));break e}}f=H=Qo(H,I),$t!==4&&($t=2),ai===null?ai=[f]:ai.push(f),f=b;do{switch(f.tag){case 3:f.flags|=65536,r&=-r,f.lanes|=r;var Z=y1(f,H,r);Vp(f,Z);break e;case 1:I=H;var V=f.type,J=f.stateNode;if((f.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(Br===null||!Br.has(J)))){f.flags|=65536,r&=-r,f.lanes|=r;var fe=w1(f,I,r);Vp(f,fe);break e}}f=f.return}while(f!==null)}ef(a)}catch(Me){r=Me,_t===a&&a!==null&&(_t=a=a.return);continue}break}while(!0)}function X1(){var t=Ns.current;return Ns.current=Cs,t===null?Cs:t}function $d(){($t===0||$t===3||$t===2)&&($t=4),Lt===null||(fo&268435455)===0&&(Ls&268435455)===0||Ur(Lt,Bt)}function zs(t,r){var a=Ze;Ze|=2;var c=X1();(Lt!==t||Bt!==r)&&(xr=null,go(t,r));do try{by();break}catch(u){Z1(t,u)}while(!0);if(Fc(),Ze=a,Ns.current=c,_t!==null)throw Error(i(261));return Lt=null,Bt=0,$t}function by(){for(;_t!==null;)J1(_t)}function ky(){for(;_t!==null&&!Gv();)J1(_t)}function J1(t){var r=rf(t.alternate,t,vn);t.memoizedProps=t.pendingProps,r===null?ef(t):_t=r,xd.current=null}function ef(t){var r=t;do{var a=r.alternate;if(t=r.return,(r.flags&32768)===0){if(a=fy(a,r,vn),a!==null){_t=a;return}}else{if(a=my(a,r),a!==null){a.flags&=32767,_t=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,_t=null;return}}if(r=r.sibling,r!==null){_t=r;return}_t=r=t}while(r!==null);$t===0&&($t=5)}function vo(t,r,a){var c=ot,u=Nn.transition;try{Nn.transition=null,ot=1,_y(t,r,a,c)}finally{Nn.transition=u,ot=c}return null}function _y(t,r,a,c){do ea();while(Hr!==null);if((Ze&6)!==0)throw Error(i(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var f=a.lanes|a.childLanes;if(rx(t,f),t===Lt&&(_t=Lt=null,Bt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ts||(Ts=!0,of(Bi,function(){return ea(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=Nn.transition,Nn.transition=null;var b=ot;ot=1;var I=Ze;Ze|=4,xd.current=null,vy(t,a),U1(a,t),Wx($c),Yi=!!Sc,$c=Sc=null,t.current=a,xy(a),Yv(),Ze=I,ot=b,Nn.transition=f}else t.current=a;if(Ts&&(Ts=!1,Hr=t,Is=u),f=t.pendingLanes,f===0&&(Br=null),Zv(a.stateNode),nn(t,wt()),r!==null)for(c=t.onRecoverableError,a=0;a<r.length;a++)u=r[a],c(u.value,{componentStack:u.stack,digest:u.digest});if(As)throw As=!1,t=bd,bd=null,t;return(Is&1)!==0&&t.tag!==0&&ea(),f=t.pendingLanes,(f&1)!==0?t===kd?ii++:(ii=0,kd=t):ii=0,zr(),null}function ea(){if(Hr!==null){var t=Hh(Is),r=Nn.transition,a=ot;try{if(Nn.transition=null,ot=16>t?16:t,Hr===null)var c=!1;else{if(t=Hr,Hr=null,Is=0,(Ze&6)!==0)throw Error(i(331));var u=Ze;for(Ze|=4,ke=t.current;ke!==null;){var f=ke,b=f.child;if((ke.flags&16)!==0){var I=f.deletions;if(I!==null){for(var H=0;H<I.length;H++){var te=I[H];for(ke=te;ke!==null;){var he=ke;switch(he.tag){case 0:case 11:case 15:ri(8,he,f)}var pe=he.child;if(pe!==null)pe.return=he,ke=pe;else for(;ke!==null;){he=ke;var ue=he.sibling,ye=he.return;if(D1(he),he===te){ke=null;break}if(ue!==null){ue.return=ye,ke=ue;break}ke=ye}}}var Ce=f.alternate;if(Ce!==null){var $e=Ce.child;if($e!==null){Ce.child=null;do{var bt=$e.sibling;$e.sibling=null,$e=bt}while($e!==null)}}ke=f}}if((f.subtreeFlags&2064)!==0&&b!==null)b.return=f,ke=b;else e:for(;ke!==null;){if(f=ke,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:ri(9,f,f.return)}var Z=f.sibling;if(Z!==null){Z.return=f.return,ke=Z;break e}ke=f.return}}var V=t.current;for(ke=V;ke!==null;){b=ke;var J=b.child;if((b.subtreeFlags&2064)!==0&&J!==null)J.return=b,ke=J;else e:for(b=V;ke!==null;){if(I=ke,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Rs(9,I)}}catch(Me){xt(I,I.return,Me)}if(I===b){ke=null;break e}var fe=I.sibling;if(fe!==null){fe.return=I.return,ke=fe;break e}ke=I.return}}if(Ze=u,zr(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Hi,t)}catch{}c=!0}return c}finally{ot=a,Nn.transition=r}}return!1}function tf(t,r,a){r=Qo(a,r),r=y1(t,r,1),t=Dr(t,r,1),r=Qt(),t!==null&&(Na(t,1,r),nn(t,r))}function xt(t,r,a){if(t.tag===3)tf(t,t,a);else for(;r!==null;){if(r.tag===3){tf(r,t,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Br===null||!Br.has(c))){t=Qo(a,t),t=w1(r,t,1),r=Dr(r,t,1),t=Qt(),r!==null&&(Na(r,1,t),nn(r,t));break}}r=r.return}}function Cy(t,r,a){var c=t.pingCache;c!==null&&c.delete(r),r=Qt(),t.pingedLanes|=t.suspendedLanes&a,Lt===t&&(Bt&a)===a&&($t===4||$t===3&&(Bt&130023424)===Bt&&500>wt()-wd?go(t,0):yd|=a),nn(t,r)}function nf(t,r){r===0&&((t.mode&1)===0?r=1:(r=Ui,Ui<<=1,(Ui&130023424)===0&&(Ui=4194304)));var a=Qt();t=mr(t,r),t!==null&&(Na(t,r,a),nn(t,a))}function jy(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),nf(t,a)}function Sy(t,r){var a=0;switch(t.tag){case 13:var c=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(i(314))}c!==null&&c.delete(r),nf(t,a)}var rf;rf=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||Xt.current)en=!0;else{if((t.lanes&a)===0&&(r.flags&128)===0)return en=!1,py(t,r,a);en=(t.flags&131072)!==0}else en=!1,ft&&(r.flags&1048576)!==0&&Pp(r,hs,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;$s(t,r),t=r.pendingProps;var u=Ho(r,Ut.current);Yo(r,a),u=Zc(null,r,c,t,u,a);var f=Xc();return r.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Jt(c)?(f=!0,cs(r)):f=!1,r.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Uc(r),u.updater=js,r.stateNode=u,u._reactInternals=r,od(r,c,t,a),r=ld(null,r,c,!0,f,a)):(r.tag=0,ft&&f&&Ic(r),Kt(null,r,u,a),r=r.child),r;case 16:c=r.elementType;e:{switch($s(t,r),t=r.pendingProps,u=c._init,c=u(c._payload),r.type=c,u=r.tag=My(c),t=Hn(c,t),u){case 0:r=sd(null,r,c,t,a);break e;case 1:r=R1(null,r,c,t,a);break e;case 11:r=C1(null,r,c,t,a);break e;case 14:r=j1(null,r,c,Hn(c.type,t),a);break e}throw Error(i(306,c,""))}return r;case 0:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Hn(c,u),sd(t,r,c,u,a);case 1:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Hn(c,u),R1(t,r,c,u,a);case 3:e:{if(N1(r),t===null)throw Error(i(387));c=r.pendingProps,f=r.memoizedState,u=f.element,qp(t,r),xs(r,c,null,a);var b=r.memoizedState;if(c=b.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},r.updateQueue.baseState=f,r.memoizedState=f,r.flags&256){u=Qo(Error(i(423)),r),r=L1(t,r,c,a,u);break e}else if(c!==u){u=Qo(Error(i(424)),r),r=L1(t,r,c,a,u);break e}else for(gn=Ir(r.stateNode.containerInfo.firstChild),mn=r,ft=!0,Bn=null,a=Wp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qo(),c===u){r=vr(t,r,a);break e}Kt(t,r,c,a)}r=r.child}return r;case 5:return Yp(r),t===null&&zc(r),c=r.type,u=r.pendingProps,f=t!==null?t.memoizedProps:null,b=u.children,Mc(c,u)?b=null:f!==null&&Mc(c,f)&&(r.flags|=32),M1(t,r),Kt(t,r,b,a),r.child;case 6:return t===null&&zc(r),null;case 13:return A1(t,r,a);case 4:return qc(r,r.stateNode.containerInfo),c=r.pendingProps,t===null?r.child=Vo(r,null,c,a):Kt(t,r,c,a),r.child;case 11:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Hn(c,u),C1(t,r,c,u,a);case 7:return Kt(t,r,r.pendingProps,a),r.child;case 8:return Kt(t,r,r.pendingProps.children,a),r.child;case 12:return Kt(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,u=r.pendingProps,f=r.memoizedProps,b=u.value,lt(ms,c._currentValue),c._currentValue=b,f!==null)if(Fn(f.value,b)){if(f.children===u.children&&!Xt.current){r=vr(t,r,a);break e}}else for(f=r.child,f!==null&&(f.return=r);f!==null;){var I=f.dependencies;if(I!==null){b=f.child;for(var H=I.firstContext;H!==null;){if(H.context===c){if(f.tag===1){H=gr(-1,a&-a),H.tag=2;var te=f.updateQueue;if(te!==null){te=te.shared;var he=te.pending;he===null?H.next=H:(H.next=he.next,he.next=H),te.pending=H}}f.lanes|=a,H=f.alternate,H!==null&&(H.lanes|=a),Hc(f.return,a,r),I.lanes|=a;break}H=H.next}}else if(f.tag===10)b=f.type===r.type?null:f.child;else if(f.tag===18){if(b=f.return,b===null)throw Error(i(341));b.lanes|=a,I=b.alternate,I!==null&&(I.lanes|=a),Hc(b,a,r),b=f.sibling}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===r){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}Kt(t,r,u.children,a),r=r.child}return r;case 9:return u=r.type,c=r.pendingProps.children,Yo(r,a),u=Mn(u),c=c(u),r.flags|=1,Kt(t,r,c,a),r.child;case 14:return c=r.type,u=Hn(c,r.pendingProps),u=Hn(c.type,u),j1(t,r,c,u,a);case 15:return S1(t,r,r.type,r.pendingProps,a);case 17:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Hn(c,u),$s(t,r),r.tag=1,Jt(c)?(t=!0,cs(r)):t=!1,Yo(r,a),v1(r,c,u),od(r,c,u,a),ld(null,r,c,!0,t,a);case 19:return I1(t,r,a);case 22:return $1(t,r,a)}throw Error(i(156,r.tag))};function of(t,r){return zh(t,r)}function $y(t,r,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,r,a,c){return new $y(t,r,a,c)}function Md(t){return t=t.prototype,!(!t||!t.isReactComponent)}function My(t){if(typeof t=="function")return Md(t)?1:0;if(t!=null){if(t=t.$$typeof,t===U)return 11;if(t===oe)return 14}return 2}function qr(t,r){var a=t.alternate;return a===null?(a=Ln(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Os(t,r,a,c,u,f){var b=2;if(c=t,typeof t=="function")Md(t)&&(b=1);else if(typeof t=="string")b=5;else e:switch(t){case A:return xo(a.children,u,f,r);case E:b=8,u|=8;break;case B:return t=Ln(12,a,r,u|2),t.elementType=B,t.lanes=f,t;case Y:return t=Ln(13,a,r,u),t.elementType=Y,t.lanes=f,t;case ee:return t=Ln(19,a,r,u),t.elementType=ee,t.lanes=f,t;case le:return Ds(a,u,f,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G:b=10;break e;case Q:b=9;break e;case U:b=11;break e;case oe:b=14;break e;case ce:b=16,c=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return r=Ln(b,a,r,u),r.elementType=t,r.type=c,r.lanes=f,r}function xo(t,r,a,c){return t=Ln(7,t,c,r),t.lanes=a,t}function Ds(t,r,a,c){return t=Ln(22,t,c,r),t.elementType=le,t.lanes=a,t.stateNode={isHidden:!1},t}function Rd(t,r,a){return t=Ln(6,t,null,r),t.lanes=a,t}function Nd(t,r,a){return r=Ln(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Ry(t,r,a,c,u){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rc(0),this.expirationTimes=rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rc(0),this.identifierPrefix=c,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Ld(t,r,a,c,u,f,b,I,H){return t=new Ry(t,r,a,I,H),r===1?(r=1,f===!0&&(r|=8)):r=0,f=Ln(3,null,null,r),t.current=f,f.stateNode=t,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uc(f),t}function Ny(t,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:t,containerInfo:r,implementation:a}}function af(t){if(!t)return Pr;t=t._reactInternals;e:{if(ao(t)!==t||t.tag!==1)throw Error(i(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Jt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(i(171))}if(t.tag===1){var a=t.type;if(Jt(a))return Tp(t,a,r)}return r}function sf(t,r,a,c,u,f,b,I,H){return t=Ld(a,c,!0,t,u,f,b,I,H),t.context=af(null),a=t.current,c=Qt(),u=Wr(a),f=gr(c,u),f.callback=r??null,Dr(a,f,u),t.current.lanes=u,Na(t,u,c),nn(t,c),t}function Fs(t,r,a,c){var u=r.current,f=Qt(),b=Wr(u);return a=af(a),r.context===null?r.context=a:r.pendingContext=a,r=gr(f,b),r.payload={element:t},c=c===void 0?null:c,c!==null&&(r.callback=c),t=Dr(u,r,b),t!==null&&(qn(t,u,b,f),vs(t,u,b)),b}function Bs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lf(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function Ad(t,r){lf(t,r),(t=t.alternate)&&lf(t,r)}function Ly(){return null}var cf=typeof reportError=="function"?reportError:function(t){console.error(t)};function Td(t){this._internalRoot=t}Hs.prototype.render=Td.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(i(409));Fs(t,r,null,null)},Hs.prototype.unmount=Td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;mo(function(){Fs(null,t,null,null)}),r[ur]=null}};function Hs(t){this._internalRoot=t}Hs.prototype.unstable_scheduleHydration=function(t){if(t){var r=qh();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Lr.length&&r!==0&&r<Lr[a].priority;a++);Lr.splice(a,0,t),a===0&&Yh(t)}};function Id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ws(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function df(){}function Ay(t,r,a,c,u){if(u){if(typeof c=="function"){var f=c;c=function(){var te=Bs(b);f.call(te)}}var b=sf(r,c,t,0,null,!1,!1,"",df);return t._reactRootContainer=b,t[ur]=b.current,Ua(t.nodeType===8?t.parentNode:t),mo(),b}for(;u=t.lastChild;)t.removeChild(u);if(typeof c=="function"){var I=c;c=function(){var te=Bs(H);I.call(te)}}var H=Ld(t,0,!1,null,null,!1,!1,"",df);return t._reactRootContainer=H,t[ur]=H.current,Ua(t.nodeType===8?t.parentNode:t),mo(function(){Fs(r,H,a,c)}),H}function Us(t,r,a,c,u){var f=a._reactRootContainer;if(f){var b=f;if(typeof u=="function"){var I=u;u=function(){var H=Bs(b);I.call(H)}}Fs(r,b,t,u)}else b=Ay(a,r,t,u,c);return Bs(b)}Wh=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=Ra(r.pendingLanes);a!==0&&(oc(r,a|1),nn(r,wt()),(Ze&6)===0&&(Jo=wt()+500,zr()))}break;case 13:mo(function(){var c=mr(t,1);if(c!==null){var u=Qt();qn(c,t,1,u)}}),Ad(t,1)}},ac=function(t){if(t.tag===13){var r=mr(t,134217728);if(r!==null){var a=Qt();qn(r,t,134217728,a)}Ad(t,134217728)}},Uh=function(t){if(t.tag===13){var r=Wr(t),a=mr(t,r);if(a!==null){var c=Qt();qn(a,t,r,c)}Ad(t,r)}},qh=function(){return ot},Vh=function(t,r){var a=ot;try{return ot=t,r()}finally{ot=a}},oo=function(t,r,a){switch(r){case"input":if(Oe(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==t&&c.form===t.form){var u=ss(c);if(!u)throw Error(i(90));ge(c),Oe(c,u)}}}break;case"textarea":et(t,a);break;case"select":r=a.value,r!=null&&Ke(t,!!a.multiple,r,!1)}},Rt=jd,Fi=mo;var Ty={usingClientEntryPoint:!1,Events:[Ga,Fo,ss,Di,Xn,jd]},si={findFiberByHostInstance:io,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Iy={bundleType:si.bundleType,version:si.version,rendererPackageName:si.rendererPackageName,rendererConfig:si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Eh(t),t===null?null:t.stateNode},findFiberByHostInstance:si.findFiberByHostInstance||Ly,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qs.isDisabled&&qs.supportsFiber)try{Hi=qs.inject(Iy),Jn=qs}catch{}}return rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ty,rn.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Id(r))throw Error(i(200));return Ny(t,r,null,a)},rn.createRoot=function(t,r){if(!Id(t))throw Error(i(299));var a=!1,c="",u=cf;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),r=Ld(t,1,!1,null,null,a,!1,c,u),t[ur]=r.current,Ua(t.nodeType===8?t.parentNode:t),new Td(r)},rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=Eh(r),t=t===null?null:t.stateNode,t},rn.flushSync=function(t){return mo(t)},rn.hydrate=function(t,r,a){if(!Ws(r))throw Error(i(200));return Us(null,t,r,!0,a)},rn.hydrateRoot=function(t,r,a){if(!Id(t))throw Error(i(405));var c=a!=null&&a.hydratedSources||null,u=!1,f="",b=cf;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),r=sf(r,null,t,1,a??null,u,!1,f,b),t[ur]=r.current,Ua(t),c)for(t=0;t<c.length;t++)a=c[t],u=a._getVersion,u=u(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,u]:r.mutableSourceEagerHydrationData.push(a,u);return new Hs(r)},rn.render=function(t,r,a){if(!Ws(r))throw Error(i(200));return Us(null,t,r,!1,a)},rn.unmountComponentAtNode=function(t){if(!Ws(t))throw Error(i(40));return t._reactRootContainer?(mo(function(){Us(null,null,t,!1,function(){t._reactRootContainer=null,t[ur]=null})}),!0):!1},rn.unstable_batchedUpdates=jd,rn.unstable_renderSubtreeIntoContainer=function(t,r,a,c){if(!Ws(a))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return Us(t,r,a,!1,c)},rn.version="18.3.1-next-f1338f8080-20240426",rn}var xf;function M0(){if(xf)return zd.exports;xf=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(o){console.error(o)}}return e(),zd.exports=By(),zd.exports}var yf;function Hy(){if(yf)return Vs;yf=1;var e=M0();return Vs.createRoot=e.createRoot,Vs.hydrateRoot=e.hydrateRoot,Vs}var Wy=Hy();const Uy=$0(Wy);function R0(e){var o,i,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(o=0;o<l;o++)e[o]&&(i=R0(e[o]))&&(s&&(s+=" "),s+=i)}else for(i in e)e[i]&&(s&&(s+=" "),s+=i);return s}function ie(){for(var e,o,i=0,s="",l=arguments.length;i<l;i++)(e=arguments[i])&&(o=R0(e))&&(s&&(s+=" "),s+=o);return s}const Ro=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 5V19M5 12H19",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Ro.displayName="PlusIcon";const qy="_root_7uomf_13",Vy="_sm_7uomf_82",Gy="_md_7uomf_88",Yy="_lg_7uomf_94",Ky="_horizontal_7uomf_107",Qy="_alignStart_7uomf_121",Zy="_vertical_7uomf_125",Xy="_inner_7uomf_131",Jy="_iconSlot_7uomf_146",e3="_label_7uomf_163",yo={root:qy,sm:Vy,md:Gy,lg:Yy,horizontal:Ky,alignStart:Qy,vertical:Zy,inner:Xy,iconSlot:Jy,label:e3};function wf(e){return typeof e=="number"?`${e}px`:e}const t3=g.forwardRef(({size:e="md",layout:o="horizontal",align:i="center",label:s="Add",hideLabel:l=!1,icon:d,height:h,borderRadius:m,className:v,style:y,disabled:x,type:w="button",...k},$)=>{const _=d??n.jsx(Ro,{size:"100%"}),j={};return h!==void 0&&(j["--area-min-height"]=wf(h)),m!==void 0&&(j["--area-radius"]=wf(m)),n.jsx("button",{ref:$,type:w,className:ie(yo.root,yo[e],yo[o],i==="start"&&yo.alignStart,v),disabled:x,"data-size":e,"data-layout":o,style:{...j,...y},...k,children:n.jsxs("span",{className:yo.inner,children:[n.jsx("span",{className:yo.iconSlot,"aria-hidden":"true",children:_}),!l&&s&&n.jsx("span",{className:yo.label,children:s})]})})});t3.displayName="AreaButton";const n3="_root_b29pw_8",r3="_image_b29pw_33",o3="_initials_b29pw_40",a3="_iconSlot_b29pw_52",Gr={root:n3,image:r3,initials:o3,iconSlot:a3,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function i3({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function s3(e){const o=e.trim().split(/\s+/).filter(l=>/[\p{L}\p{N}]/u.test(l));if(o.length===0)return"";if(o.length===1)return o[0].charAt(0).toUpperCase();const i=o[0].charAt(0),s=o[o.length-1].charAt(0);return(i+s).toUpperCase()}const Qn=g.forwardRef(({src:e,alt:o,initials:i,name:s,icon:l,size:d="md",color:h="neutral",variant:m="subtle",shape:v="circle",className:y,...x},w)=>{const[k,$]=g.useState(!1),_=!!e&&!k,j=(i==null?void 0:i.slice(0,2).toUpperCase())??(s?s3(s):"");let N;return _?N=n.jsx("img",{src:e,alt:o??"",className:Gr.image,onError:()=>$(!0),draggable:!1},e):j?N=n.jsx("span",{className:Gr.initials,"aria-hidden":o?void 0:!0,children:j}):N=n.jsx("span",{className:Gr.iconSlot,"aria-hidden":"true",children:l??n.jsx(i3,{})}),n.jsx("span",{ref:w,"data-size":d,"data-color":h,"data-variant":m,"data-shape":v,className:ie(Gr.root,Gr[`size-${d}`],Gr[`color-${h}`],Gr[`variant-${m}`],Gr[`shape-${v}`],y),...x,children:N})});Qn.displayName="Avatar";const l3="_root_uqz3u_7",c3={root:l3},Zt=g.forwardRef(({as:e="span",className:o,children:i,...s},l)=>n.jsx(e,{ref:l,className:ie(c3.root,o),...s,children:i}));Zt.displayName="Eyebrow";const d3="_root_1tnwf_15",u3={root:d3},h3=g.forwardRef(({scale:e="paragraph-md",placeholder:o="Type something…",value:i,defaultValue:s="",onChange:l,readOnly:d=!1,disabled:h=!1,className:m,onInput:v,...y},x)=>{const w=i!==void 0,k=g.useRef(null),[$,_]=g.useState(()=>w?!i:!s),j=g.useCallback(S=>{k.current=S,typeof x=="function"?x(S):x&&(x.current=S)},[x]);g.useEffect(()=>{!w&&k.current&&s&&(k.current.textContent=s,_(!s))},[]),g.useEffect(()=>{w&&k.current&&(k.current.textContent??"")!==i&&(k.current.textContent=i??"",_(!(i??"")))},[i,w]);const N=S=>{const P=S.currentTarget.textContent??"";_(P===""),l==null||l(P),v==null||v(S)},M=S=>{S.preventDefault();const P=S.clipboardData.getData("text/plain");document.execCommand("insertText",!1,P)},C=!h&&!d;return n.jsx("span",{ref:j,contentEditable:C?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":o,"aria-disabled":h||void 0,"aria-readonly":d||void 0,"data-scale":e,"data-empty":$||void 0,"data-placeholder":o,"data-disabled":h||void 0,"data-readonly":d||void 0,className:ie(u3.root,m),onInput:N,onPaste:M,...y})});h3.displayName="TypeBox";const p3="_root_1brpy_12",f3="_ghost_1brpy_27",m3="_path_1brpy_32",ci={root:p3,"ai-spin":"_ai-spin_1brpy_1",ghost:f3,"ai-morph":"_ai-morph_1brpy_1",path:m3,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},g3={xs:16,sm:24,md:32,lg:48,xl:64},v3={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},bf="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",Gs=e=>e==="inverse"||e==="inverse-light",x3=e=>e==="stroke"||e==="stroke-light",Wu=g.forwardRef(({size:e="md",variant:o="gradient-fill",state:i="loading",className:s,style:l,"aria-label":d,...h},m)=>{const v=g.useId().replace(/[^a-z0-9]/gi,""),y=`aigrad-${v}`,x=`aiglow-${v}`,w=typeof e=="string",k=w?g3[e]:e,$=w?v3[e]:k<=16?1.75:k<=24?1.5:k<=32?1.25:1.1,_=o==="gradient-fill"?`url(#${y})`:Gs(o)?"currentColor":"none",j=Gs(o)?"none":x3(o)?"currentColor":`url(#${y})`,N="currentColor",M=o!=="stroke"&&o!=="stroke-light"&&!Gs(o);return n.jsxs("svg",{ref:m,width:k,height:k,viewBox:"0 0 24 24",fill:"none",className:ie(ci.root,ci[`variant-${o}`],ci[`state-${i}`],s),style:l,"data-state":i,"aria-label":d??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...h,children:[!Gs(o)&&n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:y,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[n.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),n.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),n.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),n.jsxs("filter",{id:x,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[n.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"blur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),n.jsx("path",{d:bf,stroke:N,strokeWidth:$*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:ci.ghost}),n.jsx("path",{d:bf,fill:_,stroke:j==="none"?void 0:j,strokeWidth:j==="none"?void 0:$,strokeLinecap:"round",strokeLinejoin:"round",filter:M?`url(#${x})`:void 0,className:ci.path})]})});Wu.displayName="AILoader";const y3="_root_10act_14",w3="_hovered_10act_68",b3="_loading_10act_69",k3="_sm_10act_90",_3="_md_10act_98",C3="_lg_10act_106",j3="_dark_10act_116",S3="_icon_10act_122",ta={root:y3,hovered:w3,loading:b3,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:k3,md:_3,lg:C3,dark:j3,icon:S3},kf={sm:12,md:14,lg:18};function $3({size:e,light:o}){return n.jsxs("svg",{width:e,height:e,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!o&&n.jsx("defs",{children:n.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[n.jsx("stop",{stopColor:"#8C4FE2"}),n.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),n.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),n.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:o?"white":"url(#ai-core-btn-sparkle)"})]})}const N0=g.forwardRef(({size:e="md",dark:o,loading:i,className:s,onMouseEnter:l,onMouseLeave:d,...h},m)=>{const[v,y]=g.useState(!1);return n.jsx("button",{ref:m,className:ie(ta.root,ta[e],o&&ta.dark,i?ta.loading:v&&ta.hovered,s),"aria-busy":i||void 0,onMouseEnter:x=>{y(!0),l==null||l(x)},onMouseLeave:x=>{y(!1),d==null||d(x)},...h,children:n.jsx("span",{className:ta.icon,children:i?n.jsx(Wu,{size:kf[e],variant:o?"inverse-light":"gradient-fill"}):n.jsx($3,{size:kf[e],light:o})})})});N0.displayName="AICoreButton";const M3="_root_1qx4u_9",R3="_star_1qx4u_34",Fd={root:M3,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:R3},N3="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",L0=g.forwardRef(({size:e="sm",className:o,...i},s)=>n.jsx("span",{ref:s,"data-size":e,"aria-hidden":"true",className:ie(Fd.root,Fd[`size-${e}`],o),...i,children:n.jsx("svg",{viewBox:"0 0 24 24",className:Fd.star,fill:"none","aria-hidden":"true",children:n.jsx("path",{d:N3,fill:"currentColor"})})}));L0.displayName="AIAvatar";const L3="_shell_lalw3_21",A3="_wrapper_lalw3_58",T3="_card_lalw3_65",I3="_cardClip_lalw3_94",E3="_textarea_lalw3_160",P3="_actions_lalw3_203",la={shell:L3,wrapper:A3,card:T3,cardClip:I3,textarea:E3,actions:P3},A0=g.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(la.shell,e),...i,children:o}));A0.displayName="AIComposer";function z3(e,o){typeof e=="function"?e(o):e&&(e.current=o)}const T0=g.forwardRef(({value:e,onChange:o,onSubmit:i,maxRows:s=5,radius:l="sm",placeholder:d="Ask AI anything…",className:h,onKeyDown:m,disabled:v,children:y,style:x,...w},k)=>{const $=g.useRef(null);g.useEffect(()=>{const C=$.current;C&&(C.style.height="auto",C.style.height=`${C.scrollHeight}px`)},[e]);const _=g.useCallback(C=>o(C.target.value),[o]),j=g.useCallback(C=>{m==null||m(C),!C.defaultPrevented&&C.key==="Enter"&&!C.shiftKey&&i&&(C.preventDefault(),i())},[m,i]),N=g.useCallback(C=>{$.current=C,z3(k,C)},[k]),M={...x??{},"--ai-composer-max-rows":s};return n.jsx("div",{className:ie(la.wrapper,h),"data-radius":l,children:n.jsx("div",{className:la.card,children:n.jsxs("div",{className:la.cardClip,children:[n.jsx("textarea",{...w,ref:N,className:la.textarea,rows:1,value:e,onChange:_,onKeyDown:j,placeholder:d,disabled:v,style:M}),y!=null&&n.jsx("div",{className:la.actions,children:y})]})})})});T0.displayName="AIComposerInput";const O3="_root_fv0gc_10",D3="_simple_fv0gc_28",F3="_float_fv0gc_83",_f={root:O3,simple:D3,float:F3},B3=g.forwardRef(({variant:e="simple",className:o,children:i,...s},l)=>n.jsx("section",{ref:l,"data-variant":e,className:ie(_f.root,_f[e],o),...s,children:i}));B3.displayName="AIConversation";const H3="_fadeFrame_1l0ib_19",W3="_scroller_1l0ib_32",U3="_content_1l0ib_89",q3="_messageBlock_1l0ib_108",V3="_messageBlockAi_1l0ib_116",G3="_inboundBlock_1l0ib_128",Y3="_inboundLoader_1l0ib_136",K3="_inboundLoaderLabel_1l0ib_146",Q3="_outboundBlock_1l0ib_153",Z3="_outboundHeader_1l0ib_161",X3="_messageBlockUser_1l0ib_168",J3="_aiThreadOutboundIn_1l0ib_1",e5="_messageBody_1l0ib_182",t5="_messageBodyAi_1l0ib_193",n5="_messageBodyUser_1l0ib_200",r5="_label_1l0ib_159",o5="_labelAi_1l0ib_221",a5="_labelUser_1l0ib_159",i5="_labelAvatar_1l0ib_224",s5="_labelText_1l0ib_237",l5="_timestamp_1l0ib_244",c5="_timestampAi_1l0ib_259",d5="_timestampUser_1l0ib_260",u5="_timestampInline_1l0ib_270",h5="_aiThreadOutboundFadeIn_1l0ib_1",Ue={fadeFrame:H3,scroller:W3,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:U3,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:q3,messageBlockAi:V3,inboundBlock:G3,inboundLoader:Y3,inboundLoaderLabel:K3,outboundBlock:Q3,outboundHeader:Z3,messageBlockUser:X3,aiThreadOutboundIn:J3,messageBody:e5,messageBodyAi:t5,messageBodyUser:n5,label:r5,labelAi:o5,labelUser:a5,labelAvatar:i5,labelText:s5,timestamp:l5,timestampAi:c5,timestampUser:d5,timestampInline:u5,aiThreadOutboundFadeIn:h5},Cf=8;function p5(e,o){typeof e=="function"?e(o):e&&(e.current=o)}const f5=g.forwardRef(({density:e="comfortable",padding:o="md",autoScroll:i=!0,autoScrollThreshold:s=80,className:l,children:d,...h},m)=>{const v=g.useRef(null),y=g.useRef(null),x=g.useRef(!0),[w,k]=g.useState(!1),[$,_]=g.useState(!1),j=g.useCallback(N=>{v.current=N,p5(m,N)},[m]);return g.useEffect(()=>{const N=v.current,M=y.current;if(!N||!M)return;const C=()=>{const{scrollTop:A,scrollHeight:E,clientHeight:B}=N;return E-A-B<s},S=A=>{N.scrollTo({top:N.scrollHeight,behavior:A?"smooth":"auto"})},P=()=>{const{scrollTop:A,scrollHeight:E,clientHeight:B}=N,G=A>Cf,Q=E-A-B>Cf;k(U=>U===G?U:G),_(U=>U===Q?U:Q)};i&&(S(!1),x.current=!0),P();const R=()=>{x.current=C(),P()};N.addEventListener("scroll",R,{passive:!0});const L=new ResizeObserver(()=>{i&&x.current&&S(!0),P()});return L.observe(M),L.observe(N),()=>{N.removeEventListener("scroll",R),L.disconnect()}},[i,s]),n.jsx("div",{className:Ue.fadeFrame,"data-fade-top":w,"data-fade-bottom":$,children:n.jsx("div",{ref:j,className:ie(Ue.scroller,Ue[`padding-${o}`],l),...h,children:n.jsx("div",{ref:y,className:ie(Ue.content,Ue[`density-${e}`]),children:d})})})});f5.displayName="AIThread";const Il=g.forwardRef(({align:e="ai",avatar:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,className:ie(Ue.label,e==="user"?Ue.labelUser:Ue.labelAi,i),...l,children:[o!=null&&n.jsx("span",{className:Ue.labelAvatar,children:o}),n.jsx("span",{className:Ue.labelText,children:s})]}));Il.displayName="AILabel";const m5=e=>e.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function g5(e,o){if(typeof e=="string")return{text:e};const i=e instanceof Date?e:new Date(e);return Number.isNaN(i.getTime())?null:{text:o(i),iso:i.toISOString()}}const Ni=g.forwardRef(({value:e,align:o="ai",format:i=m5,inline:s=!1,className:l,...d},h)=>{const m=g.useMemo(()=>g5(e,i),[e,i]);return m?n.jsx("time",{ref:h,className:ie(Ue.timestamp,s?Ue.timestampInline:o==="user"?Ue.timestampUser:Ue.timestampAi,l),dateTime:m.iso,...d,children:m.text}):null});Ni.displayName="AITimestamp";function v5(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?n.jsx(Ni,{align:"ai",value:e}):e}function x5(e){return e==null?null:typeof e=="string"||typeof e=="number"?n.jsx(Il,{align:"ai",children:e}):e}const y5=g.forwardRef(({label:e,time:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,"data-author":"ai",className:ie(Ue.messageBlock,Ue.messageBlockAi,i),...l,children:[x5(e),n.jsx("div",{className:ie(Ue.messageBody,Ue.messageBodyAi),children:s}),v5(o)]}));y5.displayName="AIAssistantMessage";function w5(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?n.jsx(Ni,{align:"user",value:e}):e}function b5(e){return e==null?null:typeof e=="string"||typeof e=="number"?n.jsx(Il,{align:"user",children:e}):e}const k5=g.forwardRef(({label:e,time:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,"data-author":"user",className:ie(Ue.messageBlock,Ue.messageBlockUser,i),...l,children:[b5(e),n.jsx("div",{className:ie(Ue.messageBody,Ue.messageBodyUser),children:s}),w5(o)]}));k5.displayName="AIUserMessage";function _5(e){return e===!1?null:e==null||e===!0?n.jsx(L0,{size:"sm"}):e}function C5(e,o){return e==null&&o==null?null:typeof e=="string"||typeof e=="number"||e==null?n.jsx(Il,{align:"ai",avatar:o,children:e}):e}const j5=g.forwardRef(({avatar:e,label:o="Teambridge AI",activity:i,actions:s,loading:l=!1,loaderLabel:d="Thinking…",className:h,children:m,...v},y)=>{const x=_5(e),w=C5(o,x);return n.jsxs("div",{ref:y,"data-author":"ai",className:ie(Ue.messageBlock,Ue.messageBlockAi,Ue.inboundBlock,h),...v,children:[w,i,m!=null&&n.jsx("div",{className:ie(Ue.messageBody,Ue.messageBodyAi),children:m}),l&&n.jsxs("div",{className:Ue.inboundLoader,"aria-live":"polite",children:[n.jsx(Wu,{size:"xs"}),d!=null&&n.jsx("span",{className:Ue.inboundLoaderLabel,children:d})]}),s]})});j5.displayName="AIInboundMessage";function S5(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const $5=g.forwardRef(({label:e="You",time:o,timeFormat:i,className:s,children:l,...d},h)=>{const m=o==null?null:S5(o)?n.jsx(Ni,{value:o,format:i,inline:!0}):o,v=e==null?null:typeof e=="string"||typeof e=="number"?n.jsx("span",{className:Ue.labelText,children:e}):e,y=v!=null||m!=null;return n.jsxs("div",{ref:h,"data-author":"user",className:ie(Ue.messageBlock,Ue.messageBlockUser,Ue.outboundBlock,s),...d,children:[y&&n.jsxs("div",{className:ie(Ue.label,Ue.labelUser,Ue.outboundHeader),children:[v,m]}),n.jsx("div",{className:ie(Ue.messageBody,Ue.messageBodyUser),children:l})]})});$5.displayName="AIOutboundMessage";const Pn=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M6 9L12 15L18 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Pn.displayName="ChevronDownIcon";const M5="_root_1j4eq_8",R5="_header_1j4eq_17",N5="_headerSummary_1j4eq_53",L5="_aiTrailSummaryFade_1j4eq_1",A5="_aiTrailHeaderAppend_1j4eq_1",T5="_aiTrailEllipsis_1j4eq_1",I5="_headerCurrent_1j4eq_128",E5="_headerChevron_1j4eq_159",P5="_headerChevronExpanded_1j4eq_173",z5="_body_1j4eq_187",O5="_bodyExpanded_1j4eq_200",D5="_bodyCollapsed_1j4eq_201",F5="_bodyInner_1j4eq_203",B5="_bodyContent_1j4eq_187",H5="_step_1j4eq_225",W5="_stepIcon_1j4eq_242",U5="_stepAnimating_1j4eq_256",q5="_aiTrailStepPulse_1j4eq_1",V5="_stepBody_1j4eq_267",G5="_stepHead_1j4eq_282",Y5="_stepLabel_1j4eq_286",K5="_stepSeparator_1j4eq_288",Q5="_stepDetail_1j4eq_292",Z5="_subToggle_1j4eq_302",X5="_subToggleCount_1j4eq_335",J5="_subToggleChevron_1j4eq_339",e4="_subActivityWrap_1j4eq_358",t4="_subActivityExpanded_1j4eq_364",n4="_subActivityCollapsed_1j4eq_365",r4="_subActivityClip_1j4eq_367",o4="_subActivityList_1j4eq_378",a4="_subActivity_1j4eq_358",i4="_aiTrailSubActivityType_1j4eq_1",s4="_aiTrailSubActivityFade_1j4eq_1",at={root:M5,header:R5,headerSummary:N5,aiTrailSummaryFade:L5,aiTrailHeaderAppend:A5,aiTrailEllipsis:T5,headerCurrent:I5,headerChevron:E5,headerChevronExpanded:P5,body:z5,bodyExpanded:O5,bodyCollapsed:D5,bodyInner:F5,bodyContent:B5,step:H5,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:W5,stepAnimating:U5,aiTrailStepPulse:q5,stepBody:V5,stepHead:G5,stepLabel:Y5,stepSeparator:K5,stepDetail:Q5,subToggle:Z5,subToggleCount:X5,subToggleChevron:J5,subActivityWrap:e4,subActivityExpanded:t4,subActivityCollapsed:n4,subActivityClip:r4,subActivityList:o4,subActivity:a4,aiTrailSubActivityType:i4,aiTrailSubActivityFade:s4},Uu=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Uu.displayName="MessageDotsSquareIcon";function kl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}kl.displayName="SearchMdIcon";function Jr({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}const qu=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};qu.displayName="Globe01Icon";const I0=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};I0.displayName="Code02Icon";function Vu({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Vu.displayName="Tool01Icon";const dn=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 6L9 17L4 12",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})},fa=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:o}),n.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};fa.displayName="AlertCircleIcon";const l4={thinking:n.jsx(Uu,{size:14}),tool:n.jsx(Vu,{size:14}),search:n.jsx(kl,{size:14}),file:n.jsx(Jr,{size:14}),web:n.jsx(qu,{size:14}),code:n.jsx(I0,{size:14}),content:n.jsx(dn,{size:14})},El=g.forwardRef(({type:e,status:o="done",detail:i,icon:s,subActivities:l,groupState:d="done",className:h,children:m,...v},y)=>{const x=o==="active"&&d==="live",w=o==="active"&&d==="live",k=o==="active"||o==="error",[$,_]=g.useState(null),j=$!==null?$:k;g.useEffect(()=>{_(null)},[o]);const N=g.useCallback(()=>_(!j),[j]),M=!!l&&l.length>0,C=(l==null?void 0:l.length)??0,S=o==="error"?n.jsx(fa,{size:14}):s??l4[e];return n.jsxs("div",{ref:y,"data-step-type":e,"data-step-status":o,className:ie(at.step,at[`step-${o}`],x&&at.stepAnimating,h),...v,children:[n.jsx("span",{className:at.stepIcon,"aria-hidden":!0,children:S}),n.jsxs("span",{className:at.stepBody,children:[n.jsxs("span",{className:at.stepHead,children:[n.jsx("span",{className:at.stepLabel,children:m}),i!=null&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:at.stepSeparator,"aria-hidden":!0,children:" · "}),n.jsx("span",{className:at.stepDetail,children:i})]}),M&&n.jsxs("button",{type:"button",className:at.subToggle,onClick:N,"aria-expanded":j,"aria-label":j?`Collapse ${C} sub-steps`:`Expand ${C} sub-steps`,"data-expanded":j||void 0,children:[n.jsx("span",{className:at.subToggleCount,children:C}),n.jsx("span",{className:at.subToggleChevron,"aria-hidden":!0,children:n.jsx(Pn,{size:10})})]})]}),M&&n.jsx(n.Fragment,{children:n.jsx("div",{className:ie(at.subActivityWrap,j?at.subActivityExpanded:at.subActivityCollapsed),"aria-hidden":!j,children:n.jsx("div",{className:at.subActivityClip,children:n.jsx("ul",{className:at.subActivityList,"data-animating":w||void 0,children:l.map((P,R)=>n.jsx("li",{className:at.subActivity,children:P},R))})})})})]})]})});El.displayName="AIActivityStep";function jf(e){return e==="error"}function c4(e,o,i,s,l,d){if(e==="live")return i.length===0?o===1?"1 step":`${o} steps`:n.jsx("span",{className:l,children:i[s]??i[i.length-1]},s);const h=e==="error"?"Stopped":d?`Thought for ${d}`:"Thought";if(i.length===0){const m=o===1?"1 step":`${o} steps`;return`${h} · ${m}`}return n.jsxs(n.Fragment,{children:[h,i.map((m,v)=>n.jsxs(g.Fragment,{children:[" · ",m]},v))]})}const Gu=g.forwardRef(({state:e="live",expanded:o,defaultExpanded:i,onToggle:s,duration:l,summary:d,className:h,children:m,...v},y)=>{const x=o!==void 0,[w,k]=g.useState(i??jf(e)),[$,_]=g.useState(!1);g.useEffect(()=>{x||$||k(jf(e))},[e,x,$]);const j=x?!!o:w,N=g.useCallback(()=>{const L=!j;x||(k(L),_(!0)),s==null||s(L)},[j,x,s]),{enhancedChildren:M,stepCount:C,stepLabels:S,currentLabelIdx:P}=g.useMemo(()=>{let L=0;const A=[];let E=-1;return{enhancedChildren:g.Children.map(m,G=>{if(!g.isValidElement(G))return G;const Q=G.props;if(!("type"in Q||"status"in Q))return G;L+=1;const Y=Q.status??"done";return Y==="pending"?null:(Q.children!=null&&(A.push(Q.children),Y==="active"&&(E=A.length-1)),d4(G,e))}),stepCount:L,stepLabels:A,currentLabelIdx:E>=0?E:A.length-1}},[m,e]),R=d??c4(e,C,S,P,at.headerCurrent,l);return n.jsxs("div",{ref:y,"data-state":e,"data-expanded":j,className:ie(at.root,h),...v,children:[n.jsxs("button",{type:"button",className:at.header,onClick:N,"aria-expanded":j,"aria-label":j?"Collapse activity trail":"Expand activity trail",children:[n.jsx("span",{className:at.headerSummary,children:R},`${e}-${P}`),n.jsx("span",{className:ie(at.headerChevron,j&&at.headerChevronExpanded),"aria-hidden":!0,children:n.jsx(Pn,{size:14})})]}),n.jsx("div",{className:ie(at.body,j?at.bodyExpanded:at.bodyCollapsed),"aria-hidden":!j,children:n.jsx("div",{className:at.bodyInner,children:n.jsxs("div",{className:at.bodyContent,children:[M,e==="done"&&n.jsx(El,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});Gu.displayName="AIActivityTrail";function d4(e,o){return g.cloneElement(e,{groupState:o})}var ba=M0();const u4="_wrapper_3tqlm_10",h4="_tooltip_3tqlm_22",p4="_portal_3tqlm_23",f4="_top_3tqlm_61",m4="_bottom_3tqlm_71",g4="_left_3tqlm_81",v4="_right_3tqlm_91",Ys={wrapper:u4,tooltip:h4,portal:p4,top:f4,bottom:m4,left:g4,right:v4},jr=({content:e,placement:o="top",delay:i=0,disabled:s=!1,maxWidth:l=280,offset:d=0,children:h})=>{const[m,v]=g.useState(!1),[y,x]=g.useState({top:0,left:0}),w=g.useRef(null),k=g.useRef(),$=g.useId(),_=g.useCallback(()=>{if(!w.current)return;const S=w.current.getBoundingClientRect(),P=6+d;let R=0,L=0;switch(o){case"top":R=S.top-P,L=S.left+S.width/2;break;case"bottom":R=S.bottom+P,L=S.left+S.width/2;break;case"left":R=S.top+S.height/2,L=S.left-P;break;case"right":R=S.top+S.height/2,L=S.right+P;break}x({top:R,left:L})},[o,d]),j=g.useCallback(()=>{s||(_(),clearTimeout(k.current),i>0?k.current=setTimeout(()=>v(!0),i):v(!0))},[s,i,_]),N=g.useCallback(()=>{clearTimeout(k.current),v(!1)},[]);g.useEffect(()=>{if(!m)return;const S=()=>_();return window.addEventListener("scroll",S,!0),window.addEventListener("resize",S),()=>{window.removeEventListener("scroll",S,!0),window.removeEventListener("resize",S)}},[m,_]);const M=cn.cloneElement(h,{"aria-describedby":m?$:void 0}),C=n.jsx("span",{id:$,role:"tooltip",className:ie(Ys.tooltip,Ys[o],Ys.portal),"data-visible":m||void 0,style:{top:y.top,left:y.left,maxWidth:l!==void 0?l:void 0},children:e});return n.jsxs("span",{ref:w,className:Ys.wrapper,onMouseEnter:j,onMouseLeave:N,onFocus:j,onBlur:N,children:[M,ba.createPortal(C,document.body)]})};jr.displayName="Tooltip";const x4="_root_v8mqg_9",y4="_hover_v8mqg_21",Bd={root:x4,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:y4};function w4(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const E0=g.forwardRef(({visibility:e="always",align:o="start",time:i,timeFormat:s,className:l,children:d,...h},m)=>{const v=i==null?null:w4(i)?n.jsx(Ni,{value:i,format:s,inline:!0}):i,y=w=>{if(!g.isValidElement(w))return w;const k=w;if(k.type===jr)return k;const $=k.props["aria-label"];return $?n.jsx(jr,{content:$,placement:"top",delay:150,children:k}):k},x=g.Children.map(d,w=>{if(g.isValidElement(w)&&w.type===g.Fragment){const k=w.props.children;return g.Children.map(k,y)}return y(w)});return n.jsxs("div",{ref:m,"data-visibility":e,"data-align":o,className:ie(Bd.root,Bd[`align-${o}`],e==="hover"&&Bd.hover,l),...h,children:[x,v]})});E0.displayName="AIMessageActions";const b4="_card_1apq1_17",k4="_header_1apq1_69",_4="_iconBadge_1apq1_74",C4="_iconInner_1apq1_89",j4="_headerText_1apq1_100",S4="_headerTopRow_1apq1_109",$4="_eyebrow_1apq1_115",M4="_title_1apq1_124",R4="_subtitle_1apq1_130",N4="_headerTrailing_1apq1_135",L4="_body_1apq1_141",A4="_footer_1apq1_152",T4="_footerEnd_1apq1_157",I4="_metaRow_1apq1_162",E4="_metaItem_1apq1_170",P4="_resultHero_1apq1_180",z4="_resultHeadline_1apq1_185",O4="_resultDetail_1apq1_191",D4="_clauses_1apq1_205",F4="_clause_1apq1_205",B4="_clauseLabel_1apq1_215",H4="_clauseBody_1apq1_225",W4="_badgeExecuting_1apq1_245",ct={card:b4,header:k4,iconBadge:_4,iconInner:C4,headerText:j4,headerTopRow:S4,eyebrow:$4,title:M4,subtitle:R4,headerTrailing:N4,body:L4,footer:A4,footerEnd:T4,metaRow:I4,metaItem:E4,resultHero:P4,resultHeadline:z4,resultDetail:O4,clauses:D4,clause:F4,clauseLabel:B4,clauseBody:H4,badgeExecuting:W4},ir=g.forwardRef(({tone:e="neutral",accent:o=!0,fill:i=!1,icon:s,eyebrow:l,title:d,subtitle:h,trailing:m,footer:v,footerEnd:y=!1,className:x,children:w,...k},$)=>{const _=l!=null||m!=null,j=_||d!=null||h!=null,N=s!=null||j;return n.jsxs("div",{ref:$,"data-tone":e,"data-accent":o||void 0,"data-fill":i||void 0,"data-icon":s!=null||void 0,className:ie(ct.card,x),...k,children:[N&&n.jsxs("div",{className:ct.header,children:[s!=null&&n.jsx("span",{className:ie(ct.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:n.jsx("span",{className:ct.iconInner,children:s})}),j&&n.jsxs("div",{className:ct.headerText,children:[_&&n.jsxs("div",{className:ct.headerTopRow,children:[l!=null&&n.jsx("span",{className:ct.eyebrow,children:l}),m!=null&&n.jsx("span",{className:ct.headerTrailing,children:m})]}),d!=null&&n.jsx("span",{className:ct.title,children:d}),h!=null&&n.jsx("span",{className:ct.subtitle,children:h})]})]}),w!=null&&n.jsx("div",{className:ct.body,children:w}),v!=null&&n.jsx("div",{className:ie(ct.footer,y&&ct.footerEnd),children:v})]})});ir.displayName="UltronCard";const U4="_root_zkkgh_6",q4="_sm_zkkgh_24",V4="_md_zkkgh_33",G4="_lg_zkkgh_42",Y4="_neutral_zkkgh_53",K4="_blue_zkkgh_66",Q4="_azure_zkkgh_79",Z4="_purple_zkkgh_92",X4="_pink_zkkgh_105",J4="_red_zkkgh_118",ew="_orange_zkkgh_131",tw="_yellow_zkkgh_144",nw="_matcha_zkkgh_157",rw="_green_zkkgh_170",ow="_subtle_zkkgh_184",aw="_outline_zkkgh_190",iw="_solid_zkkgh_196",sw="_dot_zkkgh_203",lw="_icon_zkkgh_212",cw="_dismiss_zkkgh_224",wo={root:U4,sm:q4,md:V4,lg:G4,neutral:Y4,blue:K4,azure:Q4,purple:Z4,pink:X4,red:J4,orange:ew,yellow:tw,matcha:nw,green:rw,subtle:ow,outline:aw,solid:iw,dot:sw,icon:lw,dismiss:cw},Li=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})},dw={sm:10,md:12,lg:14},En=g.forwardRef(({variant:e="subtle",color:o="neutral",size:i="md",dot:s,leadingIcon:l,dismissible:d,onDismiss:h,className:m,children:v,...y},x)=>n.jsxs("span",{ref:x,className:ie(wo.root,wo[i],wo[o],wo[e],m),...y,children:[s&&n.jsx("span",{className:wo.dot,"aria-hidden":"true"}),l&&n.jsx("span",{className:ie(wo.icon,"alloy-icon-slot"),"aria-hidden":"true",children:l}),v,d&&n.jsx("button",{type:"button",className:wo.dismiss,"aria-label":"Remove",onClick:w=>{w.stopPropagation(),h==null||h()},children:n.jsx(Li,{size:dw[i]})})]}));En.displayName="Tag";function P0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}P0.displayName="SlashCircle01Icon";const Yu=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};Yu.displayName="EyeIcon";function Pl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Pl.displayName="Target01Icon";function In({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}In.displayName="ClockIcon";const Ai=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Ai.displayName="RefreshCw04Icon";const _n=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,fill:"none"}),n.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};_n.displayName="CheckCircleIcon";function zl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}zl.displayName="Save01Icon";const uw={sm:11,md:12,lg:14},hw={ignored:{label:"Ignored",color:"neutral",Icon:P0},monitored:{label:"Monitored",color:"blue",Icon:Yu},recommended:{label:"Recommended",color:"purple",Icon:Pl},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:In},executing:{label:"Executing",color:"azure",Icon:Ai},completed:{label:"Completed",color:"green",Icon:_n},saved:{label:"Saved",color:"matcha",Icon:zl}},No=g.forwardRef(({status:e,size:o="sm",label:i,className:s,...l},d)=>{const h=hw[e],m=h.Icon;return n.jsx(En,{ref:d,color:h.color,size:o,variant:"subtle",leadingIcon:n.jsx(m,{size:uw[o]}),className:ie(e==="executing"&&ct.badgeExecuting,s),...l,children:i??h.label})});No.displayName="UltronStatusBadge";function Ol({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ol.displayName="Bell01Icon";const pw=g.forwardRef(({title:e,icon:o,eyebrow:i="Event",meta:s,status:l,tone:d="neutral",children:h,...m},v)=>n.jsx(ir,{ref:v,tone:d,eyebrow:i,title:e,icon:o??n.jsx(Ol,{size:14}),trailing:l?n.jsx(No,{status:l}):void 0,...m,children:((s==null?void 0:s.length)||h)&&n.jsxs(n.Fragment,{children:[s!=null&&s.length?n.jsx("div",{className:ct.metaRow,children:s.map((y,x)=>n.jsxs("span",{className:ct.metaItem,children:[y.icon&&n.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:y.icon}),y.label]},x))}):null,h]})}));pw.displayName="UltronEventCard";const fw=g.forwardRef(({eyebrow:e="Understanding",icon:o,entities:i,tone:s="info",children:l,...d},h)=>n.jsxs(ir,{ref:h,tone:s,eyebrow:e,icon:o??n.jsx(Uu,{size:14}),...d,children:[l,i&&n.jsx("div",{className:ct.metaRow,children:i})]}));fw.displayName="UltronUnderstandingCard";const mw={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},gw=g.forwardRef(({eyebrow:e="Decision",icon:o,factors:i,tone:s="warning",children:l,...d},h)=>n.jsxs(ir,{ref:h,tone:s,eyebrow:e,icon:o??n.jsx(Pl,{size:14}),...d,children:[l,i!=null&&i.length?n.jsx("div",{className:ct.metaRow,children:i.map((m,v)=>n.jsx(En,{size:"sm",color:mw[s],variant:"subtle",children:m},v))}):null]}));gw.displayName="UltronDecisionCard";const vw="_root_ou64w_8",xw="_xs_ou64w_75",yw="_sm_ou64w_84",ww="_md_ou64w_93",bw="_lg_ou64w_102",kw="_xl_ou64w_111",_w="_iconOnly_ou64w_122",Cw="_primary_ou64w_132",jw="_secondary_ou64w_148",Sw="_tertiary_ou64w_167",$w="_ghost_ou64w_185",Mw="_destructive_ou64w_203",Rw="_destructiveSecondary_ou64w_221",Nw="_artwork_ou64w_69",Lw="_label_ou64w_254",Aw="_spinner_ou64w_69",Tw="_light_ou64w_281",sn={root:vw,xs:xw,sm:yw,md:ww,lg:bw,xl:kw,iconOnly:_w,primary:Cw,secondary:jw,tertiary:Sw,ghost:$w,destructive:Mw,destructiveSecondary:Rw,artwork:Nw,label:Lw,spinner:Aw,"alloy-spin":"_alloy-spin_ou64w_1",light:Tw},Iw={primary:sn.primary,secondary:sn.secondary,tertiary:sn.tertiary,ghost:sn.ghost,destructive:sn.destructive,"destructive-secondary":sn.destructiveSecondary},De=g.forwardRef(({variant:e="primary",size:o="md",loading:i=!1,leadingArtwork:s,trailingArtwork:l,iconOnly:d=!1,className:h,children:m,disabled:v,...y},x)=>{const w=v||i;return n.jsxs("button",{ref:x,className:ie(sn.root,Iw[e],sn[o],d&&sn.iconOnly,h),disabled:w,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":e,"data-size":o,...y,children:[i&&n.jsx("span",{className:sn.spinner,"aria-hidden":"true"}),!i&&d&&n.jsx("span",{className:ie(sn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:m}),!i&&!d&&n.jsxs(n.Fragment,{children:[s&&n.jsx("span",{className:ie(sn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:s}),m&&n.jsx("span",{className:sn.label,children:m}),l&&n.jsx("span",{className:ie(sn.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l})]})]})});De.displayName="Button";function z0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}z0.displayName="XCircleIcon";const Ew=g.forwardRef(({eyebrow:e="Recommendation",icon:o,actions:i,onIgnore:s,ignoreLabel:l="Ignore",tone:d="info",children:h,...m},v)=>{const y=n.jsxs(n.Fragment,{children:[i.map((x,w)=>n.jsx(De,{size:"sm",variant:x.variant??(w===0?"primary":"secondary"),leadingArtwork:x.icon,loading:x.loading,onClick:x.onClick,children:x.label},w)),s&&n.jsx(De,{size:"sm",variant:"ghost",leadingArtwork:n.jsx(z0,{size:16}),onClick:s,children:l})]});return n.jsx(ir,{ref:v,tone:d,eyebrow:e,icon:o??n.jsx(Pl,{size:14}),footer:y,...m,children:h})});Ew.displayName="UltronRecommendationCard";function Dl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Dl.displayName="Lock01Icon";const Pw=g.forwardRef(({title:e,eyebrow:o="Approval required",icon:i,approveLabel:s="Approve & send",onApprove:l,approving:d=!1,cancelLabel:h="Cancel",onCancel:m,editLabel:v="Edit",onEdit:y,tone:x="warning",children:w,...k},$)=>{const _=n.jsxs(n.Fragment,{children:[m&&n.jsx(De,{size:"md",variant:"ghost",onClick:m,children:h}),y&&n.jsx(De,{size:"md",variant:"secondary",onClick:y,children:v}),n.jsx(De,{size:"md",variant:"primary",leadingArtwork:n.jsx(dn,{size:18}),loading:d,onClick:l,children:s})]});return n.jsx(ir,{ref:$,tone:x,eyebrow:o,title:e,icon:i??n.jsx(Dl,{size:14}),trailing:n.jsx(No,{status:"awaiting-approval"}),footer:_,footerEnd:!0,...k,children:w})});Pw.displayName="UltronApprovalCard";const zw=g.forwardRef(({eyebrow:e="Working",icon:o,steps:i,state:s="live",duration:l,tone:d="info",...h},m)=>n.jsx(ir,{ref:m,tone:d,eyebrow:e,icon:o??n.jsx(Ai,{size:14}),trailing:n.jsx(No,{status:s==="done"?"completed":"executing"}),...h,children:n.jsx(Gu,{state:s,duration:l,children:i.map((v,y)=>n.jsx(El,{type:v.type??"tool",status:v.status??"pending",detail:v.detail,subActivities:v.subActivities,children:v.label},y))})}));zw.displayName="UltronExecutionCard";const Ow=g.forwardRef(({headline:e,detail:o,avatar:i,status:s="completed",tone:l="success",footer:d,...h},m)=>n.jsx(ir,{ref:m,tone:l,fill:!0,accent:!1,trailing:n.jsx(No,{status:s}),footer:d,...h,children:n.jsxs("div",{className:ct.resultHero,children:[n.jsx("span",{className:ie(ct.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:i??n.jsx(_n,{size:18})}),n.jsxs("div",{children:[n.jsx("div",{className:ct.resultHeadline,children:e}),o!=null&&n.jsx("div",{className:ct.resultDetail,children:o})]})]})}));Ow.displayName="UltronResultCard";function O0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}O0.displayName="ZapIcon";const Dw=g.forwardRef(({title:e="Want Ultron to handle this automatically next time?",eyebrow:o="Save as workflow",icon:i,saveLabel:s="Save as workflow",onSave:l,saving:d=!1,dismissLabel:h="Not now",onDismiss:m,tone:v="info",children:y,...x},w)=>{const k=n.jsxs(n.Fragment,{children:[n.jsx(De,{size:"md",variant:"primary",leadingArtwork:n.jsx(zl,{size:18}),loading:d,onClick:l,children:s}),m&&n.jsx(De,{size:"md",variant:"ghost",onClick:m,children:h})]});return n.jsx(ir,{ref:w,tone:v,fill:!0,accent:!1,eyebrow:o,title:e,icon:i??n.jsx(O0,{size:14}),footer:k,...x,children:y})});Dw.displayName="UltronWorkflowSaveCard";const D0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};D0.displayName="GitBranch01Icon";function Hd({label:e,children:o}){return n.jsxs("div",{className:ct.clause,children:[n.jsx("span",{className:ct.clauseLabel,children:e}),n.jsx("span",{className:ct.clauseBody,children:o})]})}const Fw=g.forwardRef(({name:e,eyebrow:o="Workflow",icon:i,when:s,conditions:l,actions:d,status:h,footer:m,tone:v="info",...y},x)=>n.jsx(ir,{ref:x,tone:v,eyebrow:o,title:e,icon:i??n.jsx(D0,{size:14}),trailing:h?n.jsx(No,{status:h}):void 0,footer:m,...y,children:n.jsxs("div",{className:ct.clauses,children:[n.jsx(Hd,{label:"When",children:s}),n.jsx(Hd,{label:"If",children:l}),n.jsx(Hd,{label:"Then",children:d})]})}));Fw.displayName="UltronWorkflowPreviewCard";const Bw="_root_1nyuz_6",Hw="_sm_1nyuz_20",Ww="_md_1nyuz_29",Uw="_lg_1nyuz_38",qw="_divider_1nyuz_48",Vw="_interactive_1nyuz_53",Gw="_disabled_1nyuz_60",Yw="_destructive_1nyuz_64",Kw="_selected_1nyuz_78",Qw="_label_1nyuz_87",Zw="_description_1nyuz_97",Xw="_leadingSlot_1nyuz_101",Jw="_trailingSlot_1nyuz_102",e6="_content_1nyuz_115",t6="_taSwitch_1nyuz_167",n6="_taSwitchThumb_1nyuz_188",r6="_taCheckbox_1nyuz_203",o6="_taRadio_1nyuz_226",a6="_taRadioDot_1nyuz_244",i6="_taExpand_1nyuz_252",s6="_taStatus_1nyuz_266",l6="_taStatus_success_1nyuz_273",c6="_taStatus_warning_1nyuz_274",d6="_taStatus_error_1nyuz_275",u6="_taStatus_info_1nyuz_276",Ct={root:Bw,sm:Hw,md:Ww,lg:Uw,divider:qw,interactive:Vw,disabled:Gw,destructive:Yw,selected:Kw,label:Qw,description:Zw,leadingSlot:Xw,trailingSlot:Jw,content:e6,taSwitch:t6,taSwitchThumb:n6,taCheckbox:r6,taRadio:o6,taRadioDot:a6,taExpand:i6,taStatus:s6,taStatus_success:l6,taStatus_warning:c6,taStatus_error:d6,taStatus_info:u6},Cn=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 6L15 12L9 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Cn.displayName="ChevronRightIcon";const Ku=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Ku.displayName="ArrowUpRightIcon";const h6="_root_4qytd_5",p6="_neutral_4qytd_25",f6="_primary_4qytd_30",m6="_success_4qytd_35",g6="_warning_4qytd_40",v6="_error_4qytd_45",x6="_info_4qytd_50",Sf={root:h6,neutral:p6,primary:f6,success:m6,warning:g6,error:v6,info:x6},ka=g.forwardRef(({variant:e="neutral",className:o,children:i,...s},l)=>n.jsx("span",{ref:l,className:ie(Sf.root,Sf[e],o),...s,children:i}));ka.displayName="Badge";const y6=({checked:e})=>n.jsx("span",{className:Ct.taSwitch,"data-checked":e||void 0,"aria-hidden":"true",children:n.jsx("span",{className:Ct.taSwitchThumb})}),w6=({checked:e})=>n.jsx("span",{className:Ct.taCheckbox,"data-checked":e||void 0,"aria-hidden":"true",children:e&&n.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:n.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),b6=({checked:e})=>n.jsx("span",{className:Ct.taRadio,"data-checked":e||void 0,"aria-hidden":"true",children:e&&n.jsx("span",{className:Ct.taRadioDot})}),k6=({count:e,label:o})=>{const i=e!==void 0?String(e):o;return i?n.jsx(ka,{"aria-hidden":"true",children:i}):null},_6=({expanded:e})=>n.jsx("span",{className:Ct.taExpand,"data-expanded":e||void 0,"aria-hidden":"true",children:n.jsx(Cn,{size:16,color:"currentColor"})}),C6=({variant:e})=>n.jsx("span",{className:ie(Ct.taStatus,Ct[`taStatus_${e}`]),"aria-hidden":"true"}),j6=new Set(["badge","status"]),kn=g.forwardRef(({label:e,description:o,leadingSlot:i,trailingSlot:s,trailingAction:l,checked:d,defaultChecked:h=!1,onCheckedChange:m,badgeCount:v,badgeLabel:y,expanded:x=!1,statusVariant:w="success",divider:k=!0,size:$="md",interactive:_,selected:j=!1,destructive:N=!1,disabled:M=!1,className:C,onClick:S,onKeyDown:P,...R},L)=>{const A=l==="switch"||l==="checkbox"||l==="radio",[E,B]=g.useState(h),G=A?d!==void 0?d:E:!1,Q=_||!!S||A||l!==void 0&&!j6.has(l),U=l==="switch"?"switch":l==="checkbox"?"checkbox":l==="radio"?"radio":Q?"button":void 0,Y=g.useCallback(ce=>{if(!M){if(A){const le=!G;d===void 0&&B(le),m==null||m(le)}S==null||S(ce)}},[M,A,G,d,m,S]),ee=g.useCallback(ce=>{Q&&!M&&(ce.key==="Enter"||ce.key===" ")&&(ce.preventDefault(),Y(ce)),P==null||P(ce)},[Q,M,Y,P]),oe=s??(()=>{if(!l)return null;switch(l){case"chevron":return n.jsx(Cn,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return n.jsx(Ku,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return n.jsx(y6,{checked:G});case"checkbox":return n.jsx(w6,{checked:G});case"radio":return n.jsx(b6,{checked:G});case"badge":return n.jsx(k6,{count:v,label:y});case"expand":return n.jsx(_6,{expanded:x});case"status":return n.jsx(C6,{variant:w});default:return null}})();return n.jsxs("div",{ref:L,role:U,tabIndex:Q&&!M?0:void 0,"aria-checked":A?G:void 0,"aria-selected":j||void 0,"aria-disabled":M||void 0,"data-selected":j||void 0,"data-disabled":M||void 0,"data-destructive":N||void 0,"data-trailing-action":l??void 0,className:ie(Ct.root,Ct[$],k&&Ct.divider,Q&&Ct.interactive,j&&Ct.selected,N&&Ct.destructive,M&&Ct.disabled,C),onClick:M?void 0:Y,onKeyDown:ee,...R,children:[i&&n.jsx("div",{className:Ct.leadingSlot,children:i}),n.jsxs("div",{className:Ct.content,children:[n.jsx("span",{className:Ct.label,children:e}),o&&n.jsx("span",{className:Ct.description,children:o})]}),oe&&n.jsx("div",{className:Ct.trailingSlot,children:oe})]})});kn.displayName="ListItem";const S6=g.forwardRef(({title:e,meta:o,icon:i,status:s,...l},d)=>n.jsx(kn,{ref:d,label:e,description:o,leadingSlot:i?n.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:i}):void 0,trailingSlot:n.jsx(No,{status:s}),...l}));S6.displayName="UltronActivityStreamItem";const $6="_root_1sz1z_7",M6="_status_1sz1z_50",Wd={root:$6,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:M6},Qu=g.forwardRef(({disabled:e=!1,size:o="md",escapeTarget:i,onEscape:s,className:l,children:d,...h},m)=>{const v=g.useRef(null),[y,x]=g.useState(""),w=g.Children.map(d,k=>{if(!g.isValidElement(k))return k;const $=k.props;return g.cloneElement(k,{groupDisabled:e||!!$.groupDisabled})});return g.useEffect(()=>{if(!i||!s)return;const k=$=>{$.key==="Escape"&&s()};return i.addEventListener("keydown",k),()=>i.removeEventListener("keydown",k)},[i,s]),g.useCallback(k=>x(k),[]),n.jsxs("div",{ref:m,"data-size":o,className:ie(Wd.root,Wd[`size-${o}`],l),...h,children:[w,n.jsx("span",{ref:v,className:Wd.status,role:"status","aria-live":"polite",children:y})]})});Qu.displayName="ComposerActions";function Ud({size:e=24,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})}const Zu=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Zu.displayName="SearchSmIcon";const ul=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ul.displayName="Trash03Icon";const Xu=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Xu.displayName="SunIcon";const F0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};F0.displayName="ArrowNarrowRightIcon";function Qr({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function $f({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function R6({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}const _l=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};_l.displayName="ChevronSelectorVerticalIcon";const Co=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[n.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:o}),n.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:o,strokeWidth:d,strokeLinecap:"round",strokeLinejoin:"round"})]})};Co.displayName="ClipboardCheckIcon";const B0=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.25:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:o,strokeWidth:d})})};B0.displayName="SettingsGearIcon";const H0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 6L9 12L15 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};H0.displayName="ChevronLeftIcon";const W0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M3 3L21 21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};W0.displayName="EyeOffIcon";const U0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};U0.displayName="StopIcon";const q0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};q0.displayName="RecordingIcon";const V0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};V0.displayName="BankIcon";function Fl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Fl.displayName="ArrowNarrowUpIcon";function G0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}G0.displayName="ArrowNarrowDownIcon";function Bl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Bl.displayName="Microphone02Icon";const ma=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ma.displayName="AlertTriangleIcon";const Y0=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Y0.displayName="BankNote01Icon";const K0=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V6.5M2 5V17C2 18.1046 4.46243 19 7.5 19M7.5 11C7.33145 11 7.16468 10.9972 7 10.9918C4.19675 10.9 2 10.0433 2 9M7.5 15C4.46243 15 2 14.1046 2 13M22 11.5C22 12.6046 19.5376 13.5 16.5 13.5C13.4624 13.5 11 12.6046 11 11.5M22 11.5C22 10.3954 19.5376 9.5 16.5 9.5C13.4624 9.5 11 10.3954 11 11.5M22 11.5V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11.5M22 15.25C22 16.3546 19.5376 17.25 16.5 17.25C13.4624 17.25 11 16.3546 11 15.25",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};K0.displayName="CoinsStacked03Icon";function Q0({size:e=16,color:o="currentColor",...i}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[n.jsx("path",{d:"M12 2V22",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const Ju=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Ju.displayName="Map01Icon";const eh=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M16.5 9.5L7.5 4.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};eh.displayName="PackageIcon";const Z0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Z0.displayName="ThumbsUpIcon";const X0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};X0.displayName="ThumbsDownIcon";function bi({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 21V15.6C15 15.0399 15 14.7599 14.891 14.546C14.7951 14.3578 14.6422 14.2049 14.454 14.109C14.2401 14 13.9601 14 13.4 14H10.6C10.0399 14 9.75992 14 9.54601 14.109C9.35785 14.2049 9.20487 14.3578 9.10899 14.546C9 14.7599 9 15.0399 9 15.6V21M3 7C3 8.65685 4.34315 10 6 10C7.65685 10 9 8.65685 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 8.65685 16.3431 10 18 10C19.6569 10 21 8.65685 21 7M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}bi.displayName="Building02Icon";function th({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}th.displayName="Building05Icon";function Ti({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ti.displayName="CheckVerified01Icon";function J0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}J0.displayName="Copy01Icon";function eg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z",fill:o})})}eg.displayName="DotsVerticalIcon";function tg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}tg.displayName="Edit02Icon";function ng({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M8.12602 14C8.57006 15.7252 10.1362 17 12 17C13.8638 17 15.4299 15.7252 15.874 14M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ng.displayName="HomeSmileIcon";function nh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12.7076 18.3639L11.2933 19.7781C9.34072 21.7308 6.1749 21.7308 4.22228 19.7781C2.26966 17.8255 2.26966 14.6597 4.22228 12.7071L5.63649 11.2929M18.3644 12.7071L19.7786 11.2929C21.7312 9.34024 21.7312 6.17441 19.7786 4.22179C17.826 2.26917 14.6602 2.26917 12.7076 4.22179L11.2933 5.636M8.50045 15.4999L15.5005 8.49994",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}nh.displayName="Link01Icon";function Hl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Hl.displayName="LinkExternal01Icon";function rh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 4.6C15 4.03995 15 3.75992 14.891 3.54601C14.7951 3.35785 14.6422 3.20487 14.454 3.10899C14.2401 3 13.9601 3 13.4 3H10.6C10.0399 3 9.75992 3 9.54601 3.10899C9.35785 3.20487 9.20487 3.35785 9.10899 3.54601C9 3.75992 9 4.03995 9 4.6V7.4C9 7.96005 9 8.24008 8.89101 8.45399C8.79513 8.64215 8.64215 8.79513 8.45399 8.89101C8.24008 9 7.96005 9 7.4 9H4.6C4.03995 9 3.75992 9 3.54601 9.10899C3.35785 9.20487 3.20487 9.35785 3.10899 9.54601C3 9.75992 3 10.0399 3 10.6V13.4C3 13.9601 3 14.2401 3.10899 14.454C3.20487 14.6422 3.35785 14.7951 3.54601 14.891C3.75992 15 4.03995 15 4.6 15H7.4C7.96005 15 8.24008 15 8.45399 15.109C8.64215 15.2049 8.79513 15.3578 8.89101 15.546C9 15.7599 9 16.0399 9 16.6V19.4C9 19.9601 9 20.2401 9.10899 20.454C9.20487 20.6422 9.35785 20.7951 9.54601 20.891C9.75992 21 10.0399 21 10.6 21H13.4C13.9601 21 14.2401 21 14.454 20.891C14.6422 20.7951 14.7951 20.6422 14.891 20.454C15 20.2401 15 19.9601 15 19.4V16.6C15 16.0399 15 15.7599 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109C15.7599 15 16.0399 15 16.6 15H19.4C19.9601 15 20.2401 15 20.454 14.891C20.6422 14.7951 20.7951 14.6422 20.891 14.454C21 14.2401 21 13.9601 21 13.4V10.6C21 10.0399 21 9.75992 20.891 9.54601C20.7951 9.35785 20.6422 9.20487 20.454 9.10899C20.2401 9 19.9601 9 19.4 9L16.6 9C16.0399 9 15.7599 9 15.546 8.89101C15.3578 8.79513 15.2049 8.64215 15.109 8.45399C15 8.24008 15 7.96005 15 7.4V4.6Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}rh.displayName="MedicalCrossIcon";function ki({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ki.displayName="MessageCircle02Icon";function oh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 12H19",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}oh.displayName="MinusIcon";function rg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}rg.displayName="Moon01Icon";function og({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}og.displayName="Pin01Icon";function ag({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M8.8125 10.4167L10.9375 12.5278L15.7188 7.77778M20.5 21.5V7.56667C20.5 5.79317 20.5 4.90642 20.1526 4.22903C19.847 3.63318 19.3594 3.14875 18.7596 2.84515C18.0778 2.5 17.1852 2.5 15.4 2.5H8.6C6.81483 2.5 5.92225 2.5 5.24041 2.84515C4.64064 3.14875 4.15301 3.63318 3.84742 4.22903C3.5 4.90642 3.5 5.79317 3.5 7.56667V21.5L6.42188 19.3889L9.07812 21.5L12 19.3889L14.9219 21.5L17.5781 19.3889L20.5 21.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ag.displayName="ReceiptCheckIcon";function ig({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})}ig.displayName="Settings02Icon";function sg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12M22 12C22 6.47715 17.5228 2 12 2M22 12H19.5M2 12C2 6.47715 6.47715 2 12 2M2 12H4.5M12 2V4.5M19.0784 5L13.4999 10.5M19.0784 19.0784L18.8745 18.8745C18.1827 18.1827 17.8368 17.8368 17.4331 17.5894C17.0753 17.3701 16.6851 17.2085 16.2769 17.1105C15.8166 17 15.3274 17 14.349 17L9.65096 17C8.6726 17 8.18342 17 7.72307 17.1106C7.31493 17.2086 6.92475 17.3702 6.56686 17.5895C6.1632 17.8369 5.8173 18.1828 5.12549 18.8746L4.92163 19.0784M4.92163 5L6.65808 6.73645M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}sg.displayName="Speedometer02Icon";function lg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}lg.displayName="Trash01Icon";function yu({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}yu.displayName="UploadCloud01Icon";function _i({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}_i.displayName="XCloseIcon";const N6="_base_i93xz_11",L6="_icon_i93xz_45",A6="_sendReady_i93xz_65",T6="_sendStreaming_i93xz_66",I6="_sendDisabled_i93xz_67",E6="_sendError_i93xz_68",P6="_attachIdle_i93xz_131",z6="_attachDisabled_i93xz_145",O6="_attachError_i93xz_152",D6="_voiceIdle_i93xz_165",F6="_voiceRecording_i93xz_179",B6="_voiceDisabled_i93xz_189",H6="_iconStack_i93xz_200",W6="_iconLayer_i93xz_209",kt={base:N6,icon:L6,sendReady:A6,sendStreaming:T6,sendDisabled:I6,sendError:E6,attachIdle:P6,attachDisabled:z6,attachError:O6,voiceIdle:D6,voiceRecording:F6,voiceDisabled:B6,iconStack:H6,iconLayer:W6},U6={hidden:void 0,ready:kt.sendReady,"disabled-invalid":kt.sendDisabled,streaming:kt.sendStreaming,error:kt.sendError},q6=(e,o,i)=>{switch(e){case"ready":return"Send message";case"disabled-invalid":return o?`Cannot send: ${o}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},_a=g.forwardRef(({state:e,onSend:o,onStop:i,onRetry:s,invalidReason:l,errorMessage:d,groupDisabled:h,className:m,style:v,...y},x)=>{const w=g.useRef(null),k=g.useRef(null),$=g.useCallback(S=>{k.current=S,typeof x=="function"?x(S):x&&(x.current=S)},[x]),_=g.useCallback(()=>{if(e==="ready"){o==null||o();return}if(e==="streaming"){i==null||i();return}if(e==="error"){const S=k.current;S&&(S.dataset.pressed="true",w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{S.dataset.pressed="false"},140)),s==null||s()}},[e,o,i,s]);if(e==="hidden")return null;const j=!h&&(e==="ready"||e==="streaming"||e==="error"),N=q6(e,l,d),M=e==="disabled-invalid"?l??"Cannot send":e==="error"?d??"Send failed — click to retry":null,C=n.jsx("button",{ref:$,type:"button","data-composer-action":"send","data-state":e,className:ie(kt.base,U6[e],m),style:v,"aria-label":N,disabled:!j,onClick:_,...y,children:n.jsxs("span",{className:kt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[n.jsx("span",{className:kt.iconLayer,"data-active":e==="ready"||e==="disabled-invalid"?"true":"false",children:n.jsx(Fl,{size:"100%",strokeWidth:2})}),n.jsx("span",{className:kt.iconLayer,"data-active":e==="streaming"?"true":"false",children:n.jsx(U0,{size:"100%",strokeWidth:1.75})}),n.jsx("span",{className:kt.iconLayer,"data-active":e==="error"?"true":"false",children:n.jsx(Ai,{size:"100%",strokeWidth:2})})]})});return M?n.jsx(jr,{content:M,placement:"top",children:C}):C});_a.displayName="ComposerSendButton";const V6={idle:kt.attachIdle,disabled:kt.attachDisabled,error:kt.attachError},G6=(e,o,i)=>{switch(e){case"idle":return"Add attachment";case"disabled":return o?`Attachments unavailable: ${o}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},cg=g.forwardRef(({state:e,onSelect:o,accept:i,multiple:s=!0,disabledReason:l,errorMessage:d,groupDisabled:h,className:m,style:v,...y},x)=>{const w=g.useRef(null),k=g.useCallback(()=>{var C;(e==="idle"||e==="error")&&((C=w.current)==null||C.click())},[e]),$=g.useCallback(C=>{const S=C.target.files;S&&S.length>0&&(o==null||o(S)),C.target.value=""},[o]),_=!h&&e!=="disabled",j=G6(e,l,d),N=e==="disabled"?l??"Attachments unavailable":e==="error"?d??"Attachment failed":null,M=n.jsxs("button",{ref:x,type:"button","data-composer-action":"attachment","data-state":e,className:ie(kt.base,V6[e],m),style:v,"aria-label":j,disabled:!_,onClick:k,...y,children:[n.jsx("span",{className:kt.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:n.jsx(Ro,{size:"100%",strokeWidth:2})}),n.jsx("input",{ref:w,type:"file",accept:i,multiple:s,onChange:$,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return N?n.jsx(jr,{content:N,placement:"top",children:M}):M});cg.displayName="ComposerAttachment";const Y6={idle:kt.voiceIdle,recording:kt.voiceRecording,disabled:kt.voiceDisabled},K6=(e,o)=>{switch(e){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return o?`Voice unavailable: ${o}`:"Voice unavailable"}},dg=g.forwardRef(({state:e,onStartRecording:o,onStopRecording:i,disabledReason:s,groupDisabled:l,className:d,style:h,...m},v)=>{const y=g.useCallback(()=>{if(e==="idle"){o==null||o();return}if(e==="recording"){i==null||i();return}},[e,o,i]),x=!l&&e!=="disabled",w=K6(e,s),k=e==="disabled"?s??"Voice unavailable":null,$=n.jsx("button",{ref:v,type:"button","data-composer-action":"voice","data-state":e,className:ie(kt.base,Y6[e],d),style:h,"aria-label":w,"aria-pressed":e==="recording"||void 0,disabled:!x,onClick:y,...m,children:n.jsxs("span",{className:kt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[n.jsx("span",{className:kt.iconLayer,"data-active":e!=="recording"?"true":"false",children:n.jsx(Bl,{size:"100%",strokeWidth:1.5})}),n.jsx("span",{className:kt.iconLayer,"data-active":e==="recording"?"true":"false",children:n.jsx(q0,{size:"100%",strokeWidth:1.5})})]})});return k?n.jsx(jr,{content:k,placement:"top",children:$}):$});dg.displayName="ComposerVoiceButton";const Q6=g.forwardRef(({value:e,onChange:o,onSubmit:i,placeholder:s="Ask Ultron…",sending:l=!1,disabled:d=!1,voice:h=!0,maxRows:m=4,radius:v="lg",leadingActions:y,className:x},w)=>{const k=l?"streaming":e.trim().length===0?"hidden":"ready";return n.jsx(A0,{className:x,style:{flex:"0 0 auto"},children:n.jsx(T0,{ref:w,value:e,onChange:o,onSubmit:i,placeholder:s,maxRows:m,radius:v,disabled:d,children:n.jsxs(Qu,{size:"md",disabled:d,children:[y,h&&n.jsx(dg,{state:d?"disabled":"idle"}),n.jsx(_a,{state:k,onSend:i,onStop:i})]})})})});Q6.displayName="UltronCommandBar";const Z6=g.forwardRef(({stages:e,state:o="live",duration:i,...s},l)=>n.jsx(Gu,{ref:l,state:o,duration:i,...s,children:e.map((d,h)=>n.jsx(El,{type:d.type??"content",status:d.status??"pending",icon:d.icon,detail:d.detail,children:d.label},h))}));Z6.displayName="UltronThreadTimeline";const X6="_root_ghwhu_10",J6="_badge_ghwhu_27",e8="_badgeIcon_ghwhu_38",t8="_green_ghwhu_59",n8="_yellow_ghwhu_60",r8="_matcha_ghwhu_61",o8="_purple_ghwhu_62",a8="_blue_ghwhu_63",i8="_azure_ghwhu_64",s8="_red_ghwhu_65",l8="_orange_ghwhu_66",c8="_pink_ghwhu_67",d8="_slate_ghwhu_68",u8="_content_ghwhu_73",h8="_label_ghwhu_83",p8="_valueRow_ghwhu_97",f8="_change_ghwhu_106",m8="_value_ghwhu_97",yr={root:X6,badge:J6,badgeIcon:e8,green:t8,yellow:n8,matcha:r8,purple:o8,blue:a8,azure:i8,red:s8,orange:l8,pink:c8,slate:d8,content:u8,label:h8,valueRow:p8,change:f8,value:m8},g8=g.forwardRef(({color:e="slate",icon:o,label:i,value:s,change:l,className:d,...h},m)=>n.jsxs("div",{ref:m,className:ie(yr.root,d),...h,children:[n.jsx("div",{className:ie(yr.badge,yr[e]),"aria-hidden":"true",children:n.jsx("span",{className:yr.badgeIcon,children:o})}),n.jsxs("div",{className:yr.content,children:[n.jsx("span",{className:yr.label,children:i}),n.jsxs("div",{className:yr.valueRow,children:[n.jsx("span",{className:yr.value,children:s}),l!=null&&n.jsx("span",{className:yr.change,children:l})]})]})]}));g8.displayName="DataCard";const v8="_root_d0j6n_7",x8="_icon_d0j6n_21",y8="_text_d0j6n_33",w8="_positive_d0j6n_41",b8="_warning_d0j6n_45",k8="_negative_d0j6n_49",Ks={root:v8,icon:x8,text:y8,positive:w8,warning:b8,negative:k8};function _8(e){return e==="up"?"positive":"negative"}const C8=g.forwardRef((e,o)=>{const{mode:i,value:s,className:l,...d}=e,h=i==="trend"?e.severity??_8(e.trend):e.severity,{severity:m,...v}=d,y=i==="trend"?(({trend:w,severity:k,...$})=>$)(v):v,x=i==="trend"?e.trend==="up"?Fl:G0:null;return n.jsxs("span",{ref:o,className:ie(Ks.root,Ks[h],l),...y,children:[n.jsx("span",{className:Ks.text,children:s}),x&&n.jsx("span",{className:Ks.icon,"aria-hidden":"true",children:n.jsx(x,{size:14})})]})});C8.displayName="ValueChangeLabel";const j8="_root_1lq10_1",S8="_horizontal_1lq10_9",$8="_vertical_1lq10_15",M8="_solid_1lq10_32",R8="_dashed_1lq10_36",Qs={root:j8,horizontal:S8,vertical:$8,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:M8,dashed:R8},N8=g.forwardRef(({thickness:e=1,orientation:o="horizontal",variant:i="solid",className:s,...l},d)=>n.jsx("hr",{ref:d,role:"separator","aria-orientation":o,className:ie(Qs.root,Qs[`thickness-${e}`],Qs[o],Qs[i],s),...l}));N8.displayName="Divider";const L8="_overlay_vxgy2_9",A8="_dialogOverlayIn_vxgy2_1",T8="_dialogOverlayOut_vxgy2_1",I8="_dialog_vxgy2_38",E8="_dialogIn_vxgy2_1",P8="_dialogOut_vxgy2_1",z8="_sm_vxgy2_88",O8="_md_vxgy2_89",D8="_lg_vxgy2_90",F8="_header_vxgy2_95",B8="_title_vxgy2_107",H8="_closeBtn_vxgy2_120",W8="_content_vxgy2_152",U8="_footer_vxgy2_163",eo={overlay:L8,dialogOverlayIn:A8,dialogOverlayOut:T8,dialog:I8,dialogIn:E8,dialogOut:P8,sm:z8,md:O8,lg:D8,header:F8,title:B8,closeBtn:H8,content:W8,footer:U8},ug=g.forwardRef(({onClose:e,children:o,className:i,...s},l)=>n.jsxs("div",{ref:l,className:ie(eo.header,i),...s,children:[n.jsx("span",{className:eo.title,children:o}),e&&n.jsx("button",{type:"button",className:eo.closeBtn,onClick:e,"aria-label":"Close",children:n.jsx(Li,{size:16})})]}));ug.displayName="DialogHeader";const hg=g.forwardRef(({children:e,className:o,...i},s)=>n.jsx("div",{ref:s,className:ie(eo.content,o),...i,children:e}));hg.displayName="DialogContent";const pg=g.forwardRef(({children:e,className:o,...i},s)=>n.jsx("div",{ref:s,className:ie(eo.footer,o),...i,children:e}));pg.displayName="DialogFooter";function fg({open:e,onClose:o,size:i="sm",children:s,"aria-label":l,"aria-labelledby":d}){const h=g.useRef(null),m=180,[v,y]=g.useState(e);return g.useEffect(()=>{if(e){y(!0);return}const x=setTimeout(()=>y(!1),m);return()=>clearTimeout(x)},[e]),g.useEffect(()=>{if(!e)return;const x=w=>{w.key==="Escape"&&o()};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[e,o]),g.useEffect(()=>{if(!e)return;const x=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=x}},[e]),v?ba.createPortal(n.jsx("div",{className:eo.overlay,"data-state":e?"open":"closed",role:"dialog","aria-modal":"true","aria-label":l,"aria-labelledby":d,onMouseDown:x=>{x.target===x.currentTarget&&o()},children:n.jsx("div",{ref:h,className:ie(eo.dialog,eo[i]),"data-state":e?"open":"closed",children:s})}),document.body):null}const q8="_root_1dntq_7",V8="_badge_1dntq_57",G8="_badgeIconSlot_1dntq_74",Y8="_content_1dntq_82",K8="_text_1dntq_90",Q8="_title_1dntq_99",Z8="_description_1dntq_120",X8="_actions_1dntq_131",J8="_dot_1dntq_137",e9="_actionLink_1dntq_144",t9="_primaryAction_1dntq_162",n9="_trailing_1dntq_170",Yt={root:q8,badge:V8,badgeIconSlot:G8,content:Y8,text:K8,title:Q8,description:Z8,actions:X8,dot:J8,actionLink:e9,primaryAction:t9,trailing:n9},r9=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),o9=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),a9=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),Mf=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),i9={error:r9,warning:a9,success:o9,info:Mf,feature:Mf},mg=g.forwardRef(({status:e="info",variant:o="lighter",size:i="sm",title:s,description:l,action:d,onAction:h,learnMore:m,onLearnMore:v,onDismiss:y,className:x,...w},k)=>{const $=i9[e],_=i==="lg",j=y?n.jsx(De,{variant:"ghost",size:"xs",iconOnly:!0,onClick:y,"aria-label":"Dismiss",children:n.jsx(Li,{size:12})}):null;return n.jsxs("div",{ref:k,role:"alert",className:ie(Yt.root,x),"data-status":e,"data-variant":o,"data-size":i,...w,children:[n.jsx("span",{className:Yt.badge,"aria-hidden":"true",children:n.jsx("span",{className:ie("alloy-icon-slot",Yt.badgeIconSlot),children:n.jsx($,{})})}),_?n.jsxs("div",{className:Yt.content,children:[n.jsxs("div",{className:Yt.text,children:[n.jsx("p",{className:Yt.title,children:s}),l&&n.jsx("p",{className:Yt.description,children:l})]}),(d||m)&&n.jsxs("div",{className:Yt.actions,children:[d&&n.jsx("button",{type:"button",className:ie(Yt.actionLink,Yt.primaryAction),onClick:h,children:d}),d&&m&&n.jsx("span",{className:Yt.dot,"aria-hidden":"true",children:"·"}),m&&n.jsx("button",{type:"button",className:Yt.actionLink,onClick:v,children:m})]})]}):n.jsx("p",{className:Yt.title,children:s}),_?j:(d||y)&&n.jsxs("div",{className:Yt.trailing,children:[d&&n.jsx("button",{type:"button",className:ie(Yt.actionLink,Yt.primaryAction),onClick:h,children:d}),j]})]})});mg.displayName="Alert";const s9="_stack_x4xl7_11",l9="_item_x4xl7_28",c9="_itemExiting_x4xl7_33",wu={stack:s9,item:l9,itemExiting:c9},d9=g.createContext(null);function u9({id:e,title:o,description:i,status:s,variant:l,size:d,action:h,onAction:m,duration:v,exiting:y,onRemove:x}){const w=g.useCallback(()=>x(e),[e,x]);return n.jsx("div",{className:ie(wu.item,y&&wu.itemExiting),onAnimationEnd:y?w:void 0,children:n.jsx(mg,{status:s,variant:l,size:d,title:o,description:i,action:h,onAction:m,onDismiss:w,style:{width:"100%"}})})}function h9({toasts:e,onStartExit:o,onRemove:i}){return g.useEffect(()=>{const s=[];return e.forEach(l=>{l.duration>0&&!l.exiting&&s.push(setTimeout(()=>o(l.id),l.duration))}),()=>s.forEach(clearTimeout)},[e,o]),e.length===0?null:ba.createPortal(n.jsx("div",{className:wu.stack,"aria-live":"polite","aria-atomic":"false",children:e.map(s=>n.jsx(u9,{...s,onRemove:i},s.id))}),document.body)}function p9({children:e}){const[o,i]=g.useState([]),s=g.useRef(0),l=g.useCallback(m=>{const v=`toast-${++s.current}`;return i(y=>[...y,{id:v,title:m.title,description:m.description,status:m.status??"info",variant:m.variant??"stroke",size:m.size??"sm",action:m.action,onAction:m.onAction,duration:m.duration??4e3,exiting:!1}]),v},[]),d=g.useCallback(m=>{i(v=>v.map(y=>y.id===m?{...y,exiting:!0}:y))},[]),h=g.useCallback(m=>{i(v=>v.filter(y=>y.id!==m))},[]);return n.jsxs(d9.Provider,{value:{addToast:l,removeToast:d},children:[e,n.jsx(h9,{toasts:o,onStartExit:d,onRemove:h})]})}const f9="_root_1s0ek_5",m9="_list_1s0ek_11",g9="_item_1s0ek_23",v9="_separator_1s0ek_31",x9="_link_1s0ek_47",y9="_current_1s0ek_68",w9="_iconSlot_1s0ek_76",or={root:f9,list:m9,item:g9,separator:v9,link:x9,current:y9,iconSlot:w9},b9=()=>n.jsx("span",{className:or.separator,"aria-hidden":"true",children:"/"}),k9=()=>n.jsx("span",{className:or.separator,"aria-hidden":"true",children:n.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),_9=g.forwardRef(({items:e,separator:o="slash",className:i,...s},l)=>{const d=o==="chevron"?k9:b9;return n.jsx("nav",{ref:l,"aria-label":"Breadcrumb",className:ie(or.root,i),...s,children:n.jsx("ol",{className:or.list,children:e.map((h,m)=>{const v=m===e.length-1,y=!v&&(!!h.href||!!h.onClick);return n.jsxs("li",{className:or.item,children:[m>0&&n.jsx(d,{}),y?n.jsxs("a",{href:h.href,onClick:h.onClick,className:or.link,"aria-label":h.label,children:[h.icon&&n.jsx("span",{className:ie(or.iconSlot,"alloy-icon-slot"),children:h.icon}),n.jsx("span",{children:h.label})]}):n.jsxs("span",{className:ie(or.link,v&&or.current),"aria-current":v?"page":void 0,children:[h.icon&&n.jsx("span",{className:ie(or.iconSlot,"alloy-icon-slot"),children:h.icon}),n.jsx("span",{children:h.label})]})]},m)})})})});_9.displayName="Breadcrumb";const C9="_root_139vz_6",j9="_divider_139vz_14",S9="_item_139vz_19",$9="_label_139vz_25",M9="_description_139vz_26",R9="_chevron_139vz_27",N9="_iconSlot_139vz_28",L9="_hitTarget_139vz_32",A9="_size_sm_139vz_37",T9="_size_md_139vz_43",I9="_size_lg_139vz_49",E9="_header_139vz_59",P9="_headerContent_139vz_59",z9="_checkboxWrap_139vz_60",O9="_labelBlock_139vz_157",D9="_trailingSlot_139vz_60",F9="_body_139vz_199",B9="_bodyInner_139vz_209",H9="_bodyContent_139vz_214",Et={root:C9,divider:j9,item:S9,label:$9,description:M9,chevron:R9,iconSlot:N9,hitTarget:L9,size_sm:A9,size_md:T9,size_lg:I9,header:E9,headerContent:P9,checkboxWrap:z9,labelBlock:O9,trailingSlot:D9,body:F9,bodyInner:B9,bodyContent:H9},W9="_root_17t97_6",U9="_disabled_17t97_12",q9="_sm_17t97_18",V9="_md_17t97_26",G9="_lg_17t97_34",Y9="_controlWrap_17t97_43",K9="_input_17t97_52",Q9="_box_17t97_67",Z9="_boxChecked_17t97_96",X9="_boxError_17t97_106",J9="_labelWrap_17t97_116",eb="_label_17t97_116",tb="_error_17t97_138",nb="_required_17t97_140",rb="_description_17t97_145",xn={root:W9,disabled:U9,sm:q9,md:V9,lg:G9,controlWrap:Y9,input:K9,box:Q9,boxChecked:Z9,boxError:X9,labelWrap:J9,label:eb,error:tb,required:nb,description:rb},gg=g.forwardRef(({checked:e,defaultChecked:o=!1,indeterminate:i=!1,onChange:s,disabled:l,error:d,size:h="md",label:m,description:v,id:y,name:x,value:w,required:k,className:$},_)=>{const j=g.useId(),N=y??j,M=g.useRef(null);g.useEffect(()=>{M.current&&(M.current.indeterminate=i)},[i]);const C=e!==void 0,[S,P]=g.useState(o),R=C?e:S,L=E=>{C||P(E.target.checked),s==null||s(E.target.checked)},A=R||i;return n.jsxs("div",{className:ie(xn.root,xn[h],l&&xn.disabled,d&&xn.error,$),children:[n.jsxs("div",{className:xn.controlWrap,children:[n.jsx("input",{ref:E=>{M.current=E,typeof _=="function"?_(E):_&&(_.current=E)},type:"checkbox",id:N,name:x,value:w,checked:R,disabled:l,required:k,"aria-invalid":d||void 0,onChange:L,className:xn.input}),n.jsx("span",{className:ie(xn.box,A&&xn.boxChecked,d&&xn.boxError),"aria-hidden":"true",children:i?n.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:n.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):R?n.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:n.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(m||v)&&n.jsxs("div",{className:xn.labelWrap,children:[m&&n.jsxs("label",{htmlFor:N,className:xn.label,children:[m,k&&n.jsx("span",{className:xn.required,"aria-hidden":"true",children:" *"})]}),v&&n.jsx("span",{className:xn.description,children:v})]})]})});gg.displayName="Checkbox";const vg=g.createContext(null),bu=g.createContext(0),xg=g.forwardRef(({type:e="multiple",collapsible:o=!0,value:i,defaultValue:s,onValueChange:l,divider:d=!0,size:h="md",disabled:m=!1,className:v,children:y,...x},w)=>{const k=g.useMemo(()=>Array.isArray(s)?new Set(s):typeof s=="string"?new Set([s]):new Set,[]),[$,_]=g.useState(k),j=i!==void 0,N=g.useMemo(()=>j?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:$,[j,i,$]),M=g.useCallback(P=>N.has(P),[N]),C=g.useCallback(P=>{const R=new Set(N);e==="single"?R.has(P)?o&&R.delete(P):(R.clear(),R.add(P)):R.has(P)?R.delete(P):R.add(P),j||_(R),l&&l(e==="single"?R.values().next().value??"":Array.from(R))},[N,e,o,j,l]),S=g.useMemo(()=>({type:e,collapsible:o,size:h,disabled:m,isExpanded:M,toggle:C}),[e,o,h,m,M,C]);return n.jsx("div",{ref:w,"data-accordion-root":"","data-divider":d||void 0,"data-disabled":m||void 0,"data-size":h,className:ie(Et.root,d&&Et.divider,v),...x,children:n.jsx(vg.Provider,{value:S,children:n.jsx(bu.Provider,{value:0,children:y})})})});xg.displayName="Accordion";function Zs(e,o){const i=e.closest("[data-accordion-root]");if(!i)return;const s=e.getAttribute("data-accordion-depth"),l=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${s}"]`)).filter(m=>m.closest("[data-accordion-root]")===i);if(l.length===0)return;const d=l.indexOf(e);let h;switch(o){case"first":h=l[0];break;case"last":h=l[l.length-1];break;case"next":h=l[(d+1)%l.length];break;case"prev":h=l[(d-1+l.length)%l.length];break}h.focus()}const yg=g.forwardRef(({value:e,label:o,description:i,icon:s,leadingSlot:l,trailingSlot:d,chevronPosition:h="leading",selectable:m=!1,checked:v,defaultChecked:y=!1,indeterminate:x=!1,onCheckedChange:w,expanded:k,defaultExpanded:$=!1,onExpandedChange:_,disabled:j=!1,size:N,className:M,children:C,...S},P)=>{const R=g.useContext(vg),L=g.useContext(bu),A=R!==null,E=N??(R==null?void 0:R.size)??"md",B=j||(R==null?void 0:R.disabled)||!1,[G,Q]=g.useState($);let U;A?U=e!==void 0?R.isExpanded(e):!1:k!==void 0?U=k:U=G;const Y=g.useCallback(()=>{if(B)return;if(A){if(e===void 0)return;const O=R.isExpanded(e);R.toggle(e);const ne=R.type==="single"&&!R.collapsible&&O?!0:!O;_==null||_(ne);return}const T=!U;k===void 0&&Q(T),_==null||_(T)},[B,A,R,e,U,k,_]),ee=g.useCallback(T=>w==null?void 0:w(T),[w]),oe=g.useCallback(T=>{if(T.key==="Enter"||T.key===" "){T.preventDefault(),Y();return}if(A)switch(T.key){case"ArrowDown":T.preventDefault(),Zs(T.currentTarget,"next");break;case"ArrowUp":T.preventDefault(),Zs(T.currentTarget,"prev");break;case"Home":T.preventDefault(),Zs(T.currentTarget,"first");break;case"End":T.preventDefault(),Zs(T.currentTarget,"last");break}},[Y,A]),ce=g.useId(),le=`${ce}-header`,K=`${ce}-body`,D=E==="sm"?16:E==="md"?18:20,W=l??n.jsxs(n.Fragment,{children:[m&&n.jsx("span",{className:Et.checkboxWrap,children:n.jsx(gg,{size:E,checked:v,defaultChecked:y,indeterminate:x,disabled:B,onChange:ee})}),s&&n.jsx("span",{className:Et.iconSlot,"aria-hidden":"true",children:s})]});return n.jsxs("div",{ref:P,"data-accordion-item":"","data-expanded":U||void 0,"data-disabled":B||void 0,"data-size":E,"data-depth":L,className:ie(Et.item,Et[`size_${E}`],M),style:{"--accordion-depth":L},...S,children:[n.jsxs("div",{className:Et.header,children:[n.jsx("button",{type:"button",id:le,"data-accordion-header-button":"","data-accordion-depth":L,className:Et.hitTarget,"aria-expanded":U,"aria-controls":K,"aria-disabled":B||void 0,disabled:B,onClick:Y,onKeyDown:oe}),n.jsxs("div",{className:Et.headerContent,children:[h==="leading"&&n.jsx("span",{className:Et.chevron,"aria-hidden":"true",children:n.jsx(Cn,{size:D,color:"currentColor"})}),W,n.jsxs("div",{className:Et.labelBlock,children:[n.jsx("span",{className:Et.label,children:o}),i&&n.jsx("span",{className:Et.description,children:i})]}),d&&n.jsx("div",{className:Et.trailingSlot,children:d}),h==="trailing"&&n.jsx("span",{className:Et.chevron,"aria-hidden":"true",children:n.jsx(Cn,{size:D,color:"currentColor"})})]})]}),n.jsx("div",{id:K,role:"region","aria-labelledby":le,className:Et.body,"aria-hidden":!U,children:n.jsx("div",{className:Et.bodyInner,children:n.jsx("div",{className:Et.bodyContent,children:n.jsx(bu.Provider,{value:L+1,children:C})})})})]})});yg.displayName="AccordionItem";const ob="_root_1vgip_7",ab="_fullWidth_1vgip_12",ib="_panel_1vgip_19",sb="_panelInner_1vgip_73",lb="_item_1vgip_81",cb="_groupHeading_1vgip_87",db="_groupHeadingSm_1vgip_96",ub="_groupHeadingLabel_1vgip_100",hb="_groupHeadingCollapsible_1vgip_112",pb="_groupChevron_1vgip_125",fb="_groupDivider_1vgip_139",Yn={root:ob,fullWidth:ab,panel:ib,panelInner:sb,item:lb,groupHeading:cb,groupHeadingSm:db,groupHeadingLabel:ub,groupHeadingCollapsible:hb,groupChevron:pb,groupDivider:fb};function mb({group:e,size:o,closeOnSelect:i,onClose:s}){const[l,d]=g.useState(e.defaultExpanded??!0);return n.jsxs("div",{children:[e.heading&&n.jsxs("div",{className:ie(Yn.groupHeading,o==="sm"&&Yn.groupHeadingSm,e.collapsible&&Yn.groupHeadingCollapsible),onClick:e.collapsible?()=>d(h=>!h):void 0,"aria-expanded":e.collapsible?l:void 0,children:[n.jsx("span",{className:Yn.groupHeadingLabel,children:e.heading}),e.collapsible&&n.jsx("span",{className:Yn.groupChevron,"data-expanded":l||void 0,"aria-hidden":"true",children:n.jsx(Cn,{size:12})})]}),l&&n.jsx("div",{role:"group","aria-label":e.heading,children:e.options.map((h,m)=>{const v=h.trailingAction==="switch"||h.trailingAction==="checkbox"||h.trailingAction==="radio";return n.jsx(kn,{role:"menuitem",size:o,label:h.label,description:h.description,leadingSlot:h.leadingSlot,trailingAction:h.trailingAction,trailingSlot:h.trailingSlot,disabled:h.disabled,destructive:h.destructive,selected:h.selected,checked:h.checked,defaultChecked:h.defaultChecked,onCheckedChange:h.onCheckedChange,badgeCount:h.badgeCount,badgeLabel:h.badgeLabel,expanded:h.expanded,statusVariant:h.statusVariant,divider:h.divider??!1,className:Yn.item,onClick:()=>{var y;(y=h.onClick)==null||y.call(h),i&&!v&&s()}},h.id)})})]})}const ah=g.forwardRef(({trigger:e,groups:o,size:i="sm",width:s=260,placement:l="bottom-start",open:d,defaultOpen:h=!1,onOpenChange:m,disabled:v=!1,closeOnSelect:y=!0,fullWidth:x=!1,className:w,...k},$)=>{const[_,j]=g.useState(h),N=g.useRef(null),M=d!==void 0?d:_,C=g.useCallback(P=>{N.current=P,$&&(typeof $=="function"?$(P):$.current=P)},[$]),S=g.useCallback(P=>{d===void 0&&j(P),m==null||m(P)},[d,m]);return g.useEffect(()=>{if(!M)return;const P=R=>{var L;(L=N.current)!=null&&L.contains(R.target)||S(!1)};return document.addEventListener("mousedown",P),()=>document.removeEventListener("mousedown",P)},[M,S]),g.useEffect(()=>{if(!M)return;const P=R=>{R.key==="Escape"&&S(!1)};return document.addEventListener("keydown",P),()=>document.removeEventListener("keydown",P)},[M,S]),n.jsxs("div",{ref:C,className:ie(Yn.root,x&&Yn.fullWidth,w),...k,children:[n.jsx("div",{style:{display:x?"flex":"inline-flex",width:x?"100%":void 0},"aria-haspopup":"menu","aria-expanded":M,tabIndex:v?-1:0,onClick:v?void 0:()=>S(!M),onKeyDown:v?void 0:P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),S(!M))},children:e}),n.jsx("div",{className:Yn.panel,"data-open":M||void 0,"data-placement":l,style:{width:typeof s=="number"?`${s}px`:s},role:"menu","aria-orientation":"vertical",children:n.jsx("div",{className:Yn.panelInner,children:o.map((P,R)=>n.jsxs("div",{children:[R>0&&n.jsx("div",{className:Yn.groupDivider,"aria-hidden":"true"}),n.jsx(mb,{group:P,size:i,closeOnSelect:y,onClose:()=>S(!1)})]},P.id))})})]})});ah.displayName="DropdownMenu";const gb="_hiddenInput_8457s_8",vb="_area_8457s_19",xb="_uploadIcon_8457s_53",yb="_textBlock_8457s_59",wb="_title_8457s_67",bb="_description_8457s_76",kb="_fileRow_8457s_88",_b="_fileIcon_8457s_96",Cb="_fileName_8457s_101",jb="_successIcon_8457s_115",Sb="_removeBtn_8457s_121",$b="_progressWrap_8457s_145",Mb="_progressBar_8457s_153",Rb="_progressFill_8457s_161",Nb="_progressLabel_8457s_168",Lb="_errorRow_8457s_178",Ab="_errorIcon_8457s_186",Tb="_errorText_8457s_192",Ib="_areaMulti_8457s_206",Eb="_multiDropZone_8457s_214",Pb="_fileList_8457s_244",zb="_fileListItem_8457s_254",Ob="_inline_8457s_267",Db="_inlineIcon_8457s_309",Fb="_inlineText_8457s_330",Bb="_inlineProgress_8457s_353",Hb="_inlineProgressFill_8457s_363",Wb="_footerSlot_8457s_429",Ve={hiddenInput:gb,area:vb,uploadIcon:xb,textBlock:yb,title:wb,description:bb,fileRow:kb,fileIcon:_b,fileName:Cb,successIcon:jb,removeBtn:Sb,progressWrap:$b,progressBar:Mb,progressFill:Rb,progressLabel:Nb,errorRow:Lb,errorIcon:Ab,errorText:Tb,areaMulti:Ib,multiDropZone:Eb,fileList:Pb,fileListItem:zb,inline:Ob,inlineIcon:Db,inlineText:Fb,inlineProgress:Bb,inlineProgressFill:Hb,footerSlot:Wb};function qd(e){const o=e.name.lastIndexOf(".");return o!==-1?e.name.slice(o+1).toUpperCase():e.type?(e.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const wg=g.forwardRef(({variant:e="area",multiple:o=!1,state:i="empty",progress:s=0,file:l,files:d,errorMessage:h,title:m="Choose a file or drag & drop it here.",description:v="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:y,onFileSelect:x,onFilesSelect:w,onClear:k,onRemoveFile:$,fieldVariant:_="outlined",browseButtonVariant:j="tertiary",footerSlot:N,disabled:M=!1,className:C,...S},P)=>{const R=g.useRef(null),[L,A]=g.useState(!1),E=!M&&(o||i==="empty"),B=g.useCallback(()=>{var K;!M&&(o||i==="empty")&&((K=R.current)==null||K.click())},[M,o,i]),G=g.useCallback(K=>{var D;if(o){const W=K.target.files?Array.from(K.target.files):[];W.length&&(w==null||w(W))}else{const W=(D=K.target.files)==null?void 0:D[0];W&&(x==null||x(W))}K.target.value=""},[o,x,w]),Q=g.useCallback(K=>{K.preventDefault(),E&&A(!0)},[E]),U=g.useCallback(()=>A(!1),[]),Y=g.useCallback(K=>{var D;if(K.preventDefault(),A(!1),!!E)if(o){const W=K.dataTransfer.files?Array.from(K.dataTransfer.files):[];W.length&&(w==null||w(W))}else{const W=(D=K.dataTransfer.files)==null?void 0:D[0];W&&(x==null||x(W))}},[E,o,x,w]),ee=n.jsx("input",{ref:R,type:"file",className:Ve.hiddenInput,accept:y,multiple:o,disabled:M,"aria-hidden":"true",tabIndex:-1,onChange:G}),oe=l?n.jsxs("div",{className:Ve.fileRow,children:[n.jsx("span",{className:`${Ve.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(Jr,{size:16})}),n.jsx("span",{className:Ve.fileName,children:l.name}),n.jsx(En,{size:"sm",variant:"subtle",children:qd(l)}),i==="complete"&&n.jsx("span",{className:`${Ve.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(_n,{size:16})}),n.jsx("button",{type:"button",className:Ve.removeBtn,onClick:k,"aria-label":"Remove file",children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(ul,{size:14})})})]}):null;if(e==="area"){if(o){const K=d??[];return n.jsxs("div",{ref:P,className:ie(Ve.areaMulti,C),"data-drag-over":L||void 0,"data-disabled":M||void 0,onDragOver:Q,onDragLeave:U,onDrop:Y,...S,children:[ee,n.jsxs("div",{className:Ve.multiDropZone,children:[n.jsx("span",{className:`${Ve.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(Ud,{size:24})}),n.jsxs("div",{className:Ve.textBlock,children:[n.jsx("p",{className:Ve.title,children:m}),n.jsx("p",{className:Ve.description,children:v})]}),n.jsx(De,{variant:j,size:"sm",onClick:B,disabled:M,children:"Browse Files"})]}),K.length>0&&n.jsx("ul",{className:Ve.fileList,"aria-label":"Selected files",children:K.map((D,W)=>n.jsxs("li",{className:Ve.fileListItem,children:[n.jsx("span",{className:`${Ve.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(Jr,{size:16})}),n.jsx("span",{className:Ve.fileName,children:D.name}),n.jsx(En,{size:"sm",variant:"subtle",children:qd(D)}),n.jsx("button",{type:"button",className:Ve.removeBtn,onClick:()=>$==null?void 0:$(W),"aria-label":`Remove ${D.name}`,disabled:M,children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(ul,{size:14})})})]},`${D.name}-${W}`))})]})}return n.jsxs("div",{ref:P,className:ie(Ve.area,C),"data-state":i,"data-drag-over":L||void 0,"data-disabled":M||void 0,onDragOver:Q,onDragLeave:U,onDrop:Y,...S,children:[ee,i==="empty"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:`${Ve.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(Ud,{size:24})}),n.jsxs("div",{className:Ve.textBlock,children:[n.jsx("p",{className:Ve.title,children:m}),n.jsx("p",{className:Ve.description,children:v})]}),n.jsx(De,{variant:j,size:"sm",onClick:B,disabled:M,children:"Browse File"}),N&&n.jsx("div",{className:Ve.footerSlot,children:N})]}),i==="uploading"&&n.jsxs(n.Fragment,{children:[oe,n.jsxs("div",{className:Ve.progressWrap,children:[n.jsx("div",{className:Ve.progressBar,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:n.jsx("div",{className:Ve.progressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})}),n.jsxs("p",{className:Ve.progressLabel,children:[s,"% uploaded"]})]})]}),i==="complete"&&oe,i==="error"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:Ve.errorRow,children:[n.jsx("span",{className:`${Ve.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(fa,{size:20})}),n.jsx("p",{className:Ve.errorText,children:h??"Upload failed. Please try again."})]}),n.jsx(De,{variant:"tertiary",size:"sm",onClick:B,disabled:M,children:"Try Again"})]})]})}const ce={empty:n.jsx(Ud,{size:16}),uploading:n.jsx(Jr,{size:16}),complete:n.jsx(_n,{size:16}),error:n.jsx(fa,{size:16})}[i],le=(i==="uploading"||i==="complete")&&!!l;return n.jsxs("div",{ref:P,className:ie(Ve.inline,C),"data-state":i,"data-field-variant":_,"data-disabled":M||void 0,...S,children:[ee,n.jsx("span",{className:`${Ve.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:ce}),n.jsxs("span",{className:Ve.inlineText,"data-has-file":le?"":void 0,children:[i==="empty"&&m,i==="uploading"&&(l==null?void 0:l.name),i==="complete"&&(l==null?void 0:l.name),i==="error"&&(h??"Upload failed. Please try again.")]}),le&&n.jsx(En,{size:"sm",variant:"subtle",children:qd(l)}),(i==="uploading"||i==="complete"||i==="error")&&n.jsx("button",{type:"button",className:Ve.removeBtn,onClick:k,"aria-label":"Remove file",children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(ul,{size:14})})}),i==="empty"&&n.jsx(De,{variant:j,size:"xs",onClick:B,disabled:M,children:"Browse"}),i==="uploading"&&n.jsx("div",{className:Ve.inlineProgress,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:n.jsx("div",{className:Ve.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})})]})});wg.displayName="FileUploader";const Ub="_wrapper_127v8_8",qb="_labelRow_127v8_16",Vb="_label_127v8_16",Gb="_required_127v8_28",Yb="_labelIcon_127v8_36",Kb="_sm_127v8_46",Qb="_md_127v8_47",Zb="_lg_127v8_48",Xb="_shell_127v8_44",Jb="_outlined_127v8_75",e7="_underlined_127v8_102",t7="_float_127v8_147",n7="_leadingSlot_127v8_181",r7="_trailingSlot_127v8_193",o7="_trailingActionWrap_127v8_206",a7="_trailingActionBtn_127v8_213",i7="_successTrailingSlot_127v8_234",s7="_errorTrailingSlot_127v8_239",l7="_control_127v8_251",c7="_selectValue_127v8_297",d7="_selectPlaceholder_127v8_303",u7="_selectChevron_127v8_307",h7="_selectChevronOpen_127v8_312",p7="_textareaShell_127v8_315",f7="_textareaControl_127v8_334",m7="_footer_127v8_351",g7="_footerRow_127v8_363",v7="_footerError_127v8_364",x7="_footerSuccess_127v8_365",y7="_footerIcon_127v8_368",w7="_wrapperHorizontal_127v8_378",b7="_horizontalLabelCol_127v8_384",k7="_horizontalLabelHint_127v8_393",_7="_horizontalControlCol_127v8_402",C7="_msContainer_127v8_416",j7="_msShell_127v8_425",S7="_msOpen_127v8_440",$7="_msDisabled_127v8_447",M7="_msBody_127v8_450",R7="_msPlaceholder_127v8_459",N7="_msChevron_127v8_469",L7="_msChevronOpen_127v8_480",A7="_msPanel_127v8_483",Pe={wrapper:Ub,labelRow:qb,label:Vb,required:Gb,labelIcon:Yb,sm:Kb,md:Qb,lg:Zb,shell:Xb,outlined:Jb,underlined:e7,float:t7,leadingSlot:n7,trailingSlot:r7,trailingActionWrap:o7,trailingActionBtn:a7,successTrailingSlot:i7,errorTrailingSlot:s7,control:l7,selectValue:c7,selectPlaceholder:d7,selectChevron:u7,selectChevronOpen:h7,textareaShell:p7,textareaControl:f7,footer:m7,footerRow:g7,footerError:v7,footerSuccess:x7,footerIcon:y7,wrapperHorizontal:w7,horizontalLabelCol:b7,horizontalLabelHint:k7,horizontalControlCol:_7,msContainer:C7,msShell:j7,msOpen:S7,msDisabled:$7,msBody:M7,msPlaceholder:R7,msChevron:N7,msChevronOpen:L7,msPanel:A7};function Ca({label:e,labelIcon:o,labelDescription:i,hint:s,error:l,success:d,required:h,htmlFor:m,layout:v="vertical",labelWidth:y=160,className:x,children:w}){const k=l??d??s,$=l?"error":d?"success":"hint",_=k?n.jsxs("p",{className:ie(Pe.footer,$==="error"&&Pe.footerError,$==="success"&&Pe.footerSuccess),role:$==="error"?"alert":void 0,"aria-live":$==="error"?"assertive":void 0,children:[$==="hint"&&n.jsx("span",{className:`${Pe.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(fa,{size:12})}),k]}):null,j=e!=null?n.jsxs("div",{className:Pe.labelRow,children:[n.jsx("label",{className:Pe.label,htmlFor:m,children:e}),h&&n.jsx("span",{className:Pe.required,"aria-hidden":"true",children:"*"}),o&&n.jsx("span",{className:`${Pe.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:o})]}):null;if(v==="horizontal"){const N={width:typeof y=="number"?`${y}px`:y};return n.jsxs("div",{className:ie(Pe.wrapper,Pe.wrapperHorizontal,x),children:[(j||i)&&n.jsxs("div",{className:Pe.horizontalLabelCol,style:N,children:[j,i&&n.jsx("p",{className:Pe.horizontalLabelHint,children:i})]}),n.jsxs("div",{className:Pe.horizontalControlCol,children:[w,_]})]})}return n.jsxs("div",{className:ie(Pe.wrapper,x),children:[j,w,_]})}function Ii({variant:e="outlined",size:o="md",error:i,success:s,disabled:l,readOnly:d,leadingIcon:h,trailingIcon:m,trailingAction:v,isTextarea:y,focused:x,className:w,children:k}){const $=o==="sm"?14:o==="lg"?18:16,_=s&&!i&&!m&&!v?n.jsx(_n,{size:$}):null,j=i&&!m&&!v?n.jsx(fa,{size:$}):null,N=!!h,M=!!(m||v||_||j);return n.jsxs("div",{className:ie(Pe.shell,Pe[e],Pe[o],y&&Pe.textareaShell,w),"data-error":i||void 0,"data-success":s||void 0,"data-disabled":l||void 0,"data-readonly":d||void 0,"data-focused":x||void 0,"data-has-leading":N||void 0,"data-has-trailing":M||void 0,children:[h&&n.jsx("span",{className:ie(Pe.leadingSlot,"alloy-icon-slot"),children:h}),k,v?n.jsx("span",{className:Pe.trailingActionWrap,children:v}):m||_||j?n.jsx("span",{className:ie(Pe.trailingSlot,"alloy-icon-slot",_&&Pe.successTrailingSlot,j&&Pe.errorTrailingSlot),children:m??_??j}):null]})}const ih=g.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:m="md",type:v="text",leadingIcon:y,trailingIcon:x,layout:w,labelWidth:k,labelDescription:$,id:_,disabled:j,readOnly:N,className:M,...C},S)=>{const P=g.useId(),R=_??P;return n.jsx(Ca,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:R,layout:w,labelWidth:k,labelDescription:$,className:M,children:n.jsx(Ii,{variant:h,size:m,error:!!s,success:!!l,disabled:j,readOnly:N,leadingIcon:y,trailingIcon:x,children:n.jsx("input",{ref:S,id:R,type:v,disabled:j,readOnly:N,"aria-invalid":s?!0:void 0,"aria-describedby":i||s||l?`${R}-footer`:void 0,className:ie(Pe.control),...C})})})});ih.displayName="TextField";const T7=g.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:m="md",leadingIcon:v,trailingIcon:y,layout:x,labelWidth:w,labelDescription:k,id:$,disabled:_,readOnly:j,className:N,...M},C)=>{const S=g.useId(),P=$??S;return n.jsx(Ca,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:P,layout:x,labelWidth:w,labelDescription:k,className:N,children:n.jsx(Ii,{variant:h,size:m,error:!!s,success:!!l,disabled:_,readOnly:j,leadingIcon:v,trailingIcon:y,isTextarea:!0,children:n.jsx("textarea",{ref:C,id:P,disabled:_,readOnly:j,"aria-invalid":s?!0:void 0,className:ie(Pe.control,Pe.textareaControl),...M})})})});T7.displayName="TextArea";const I7={sm:"sm",md:"md",lg:"lg"},bg=g.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:m="md",leadingIcon:v,layout:y,labelWidth:x,labelDescription:w,options:k,value:$,defaultValue:_="",onChange:j,placeholder:N="Select an option…",disabled:M,readOnly:C,id:S,className:P},R)=>{var D;const L=g.useId(),A=S??L,E=$!==void 0,[B,G]=g.useState(_),Q=E?$:B,U=g.useCallback(W=>{E||G(W),j==null||j(W)},[E,j]),[Y,ee]=g.useState(!1),oe=(D=k.find(W=>W.value===Q))==null?void 0:D.label,ce=m==="sm"?14:m==="lg"?18:16,le=I7[m],K=n.jsx(Ii,{variant:h,size:m,error:!!s,success:!!l,disabled:M,readOnly:C,focused:Y,leadingIcon:v,trailingIcon:n.jsx("span",{className:ie(Pe.selectChevron,Y&&Pe.selectChevronOpen),"aria-hidden":"true",children:n.jsx(Pn,{size:ce})}),children:n.jsx("span",{className:ie(Pe.control,Pe.selectValue,!oe&&Pe.selectPlaceholder),children:oe??N})});return n.jsx(Ca,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:A,layout:y,labelWidth:x,labelDescription:w,className:P,children:n.jsx(ah,{ref:R,id:A,fullWidth:!0,trigger:K,groups:[{id:"options",options:k.map(W=>({id:W.value,label:W.label,disabled:W.disabled,selected:W.value===Q,onClick:()=>U(W.value)}))}],size:le,width:"100%",placement:"bottom-start",open:Y,onOpenChange:ee,disabled:M||C})})});bg.displayName="SelectField";const E7=g.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:m="md",leadingIcon:v,layout:y,labelWidth:x,labelDescription:w,id:k,disabled:$,readOnly:_,className:j,...N},M)=>{const C=g.useId(),S=k??C,[P,R]=g.useState(!1),L=m==="sm"?14:m==="lg"?18:16;return n.jsx(Ca,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:S,layout:y,labelWidth:x,labelDescription:w,className:j,children:n.jsx(Ii,{variant:h,size:m,error:!!s,success:!!l,disabled:$,readOnly:_,leadingIcon:v,trailingAction:n.jsx("button",{type:"button",className:`${Pe.trailingActionBtn} alloy-icon-slot`,onClick:()=>R(A=>!A),tabIndex:$?-1:0,"aria-label":P?"Hide password":"Show password","aria-pressed":P,children:P?n.jsx(W0,{size:L}):n.jsx(Yu,{size:L})}),children:n.jsx("input",{ref:M,id:S,type:P?"text":"password",disabled:$,readOnly:_,"aria-invalid":s?!0:void 0,autoComplete:"current-password",className:ie(Pe.control),...N})})})});E7.displayName="PasswordField";const kg=g.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:m="md",onClear:v,onChange:y,layout:x,labelWidth:w,labelDescription:k,id:$,value:_,defaultValue:j,disabled:N,readOnly:M,className:C,...S},P)=>{const R=g.useId(),L=$??R,A=m==="sm"?14:m==="lg"?18:16,E=_!==void 0?String(_).length>0:void 0,B=g.useCallback(G=>{y==null||y(G)},[y]);return n.jsx(Ca,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:L,layout:x,labelWidth:w,labelDescription:k,className:C,children:n.jsx(Ii,{variant:h,size:m,error:!!s,success:!!l,disabled:N,readOnly:M,leadingIcon:n.jsx(Zu,{size:A}),trailingAction:E?n.jsx("button",{type:"button",className:`${Pe.trailingActionBtn} alloy-icon-slot`,onClick:v,tabIndex:N?-1:0,"aria-label":"Clear search",children:n.jsx(Li,{size:A})}):void 0,children:n.jsx("input",{ref:P,id:L,type:"search",value:_,defaultValue:j,disabled:N,readOnly:M,"aria-invalid":s?!0:void 0,onChange:B,className:ie(Pe.control),...S})})})});kg.displayName="SearchField";const _g=g.forwardRef((e,o)=>n.jsx(ih,{ref:o,type:"email",autoComplete:"email",inputMode:"email",...e}));_g.displayName="EmailField";const Cg=g.forwardRef((e,o)=>n.jsx(ih,{ref:o,type:"number",inputMode:"numeric",...e}));Cg.displayName="NumberField";const P7={sm:"sm",md:"sm",lg:"md"},z7={sm:"sm",md:"md",lg:"lg"},O7=g.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:m="md",layout:v,labelWidth:y,labelDescription:x,options:w,value:k,defaultValue:$=[],onChange:_,placeholder:j="Select options…",disabled:N,readOnly:M,id:C,className:S},P)=>{const R=g.useId(),L=C??R,A=`${L}-list`,E=g.useRef(null),B=k!==void 0,[G,Q]=g.useState($),U=B?k:G,Y=g.useCallback(O=>{B||Q(O),_==null||_(O)},[B,_]),[ee,oe]=g.useState(!1);g.useEffect(()=>{if(!ee)return;const O=q=>{E.current&&!E.current.contains(q.target)&&oe(!1)},ne=q=>{q.key==="Escape"&&oe(!1)};return document.addEventListener("mousedown",O),document.addEventListener("keydown",ne),()=>{document.removeEventListener("mousedown",O),document.removeEventListener("keydown",ne)}},[ee]);const ce=O=>{if(N||M)return;const ne=U.includes(O)?U.filter(q=>q!==O):[...U,O];Y(ne)},le=O=>{N||M||((O.key==="Enter"||O.key===" ")&&(O.preventDefault(),oe(ne=>!ne)),O.key==="Backspace"&&U.length>0&&!ee&&Y(U.slice(0,-1)))},K=m==="sm"?14:m==="lg"?18:16,D=P7[m],W=z7[m],T=Object.fromEntries(w.map(O=>[O.value,O.label]));return n.jsx(Ca,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:L,layout:v,labelWidth:y,labelDescription:x,className:S,children:n.jsxs("div",{ref:E,className:Pe.msContainer,children:[n.jsxs("div",{ref:P,id:L,role:"combobox","aria-haspopup":"listbox","aria-expanded":ee,"aria-controls":A,"aria-disabled":N||void 0,tabIndex:N?-1:0,className:ie(Pe.msShell,Pe[h],Pe[m],ee&&Pe.msOpen,N&&Pe.msDisabled),"data-error":s?!0:void 0,"data-success":l&&!s?!0:void 0,"data-disabled":N||void 0,onClick:()=>{!N&&!M&&oe(O=>!O)},onKeyDown:le,children:[n.jsx("div",{className:Pe.msBody,children:U.length===0?n.jsx("span",{className:Pe.msPlaceholder,children:j}):U.map(O=>n.jsx(En,{size:D,variant:"subtle",dismissible:!N&&!M,onDismiss:()=>Y(U.filter(ne=>ne!==O)),children:T[O]??O},O))}),n.jsx("span",{className:ie(Pe.msChevron,"alloy-icon-slot",ee&&Pe.msChevronOpen),children:n.jsx(Pn,{size:K})})]}),ee&&n.jsx("div",{id:A,role:"listbox","aria-multiselectable":"true","aria-label":typeof e=="string"?e:"Options",className:Pe.msPanel,children:w.map(O=>{const ne=U.includes(O.value);return n.jsx(kn,{label:O.label,size:W,trailingAction:"checkbox",checked:ne,disabled:O.disabled,role:"option","aria-selected":ne,onMouseDown:q=>{q.preventDefault()},onCheckedChange:()=>{O.disabled||ce(O.value)}},O.value)})})]})})});O7.displayName="MultiSelectField";const D7="_root_1249j_6",F7="_pageControls_1249j_14",B7="_pageBtn_1249j_21",H7="_ellipsis_1249j_36",W7="_rowsGroup_1249j_51",U7="_rowsSelect_1249j_58",q7="_countText_1249j_64",V7="_groupLabel_1249j_74",G7="_goToGroup_1249j_84",Y7="_goToInput_1249j_91",Vn={root:D7,pageControls:F7,pageBtn:B7,ellipsis:H7,rowsGroup:W7,rowsSelect:U7,countText:q7,groupLabel:V7,goToGroup:G7,goToInput:Y7};function K7(e,o,i){if(o<=1)return[1];const s=Math.max(2,e-i),l=Math.min(o-1,e+i),d=[1];s>2&&d.push("ellipsis");for(let h=s;h<=l;h++)d.push(h);return l<o-1&&d.push("ellipsis"),o>1&&d.push(o),d}const Q7=g.forwardRef(({page:e,totalPages:o,onPageChange:i,showRowsPerPage:s=!1,rowsPerPage:l,rowsPerPageOptions:d=[10,25,50,100],onRowsPerPageChange:h,showGoToPage:m=!1,totalCount:v,siblingCount:y=1,size:x="sm",disabled:w=!1,className:k,...$},_)=>{const[j,N]=g.useState(""),M=x,C=x,S=x==="sm"?14:16,P=K7(e,o,y),R=g.useCallback(E=>{const B=Math.min(Math.max(1,E),o);B!==e&&i(B)},[e,o,i]),L=g.useCallback(E=>{if(E.key==="Enter"){const B=parseInt(j,10);isNaN(B)||R(B),N("")}},[j,R]),A=v!=null&&l!=null?`${(e-1)*l+1}–${Math.min(e*l,v)} of ${v}`:null;return n.jsxs("nav",{ref:_,"aria-label":"Pagination",className:ie(Vn.root,k),"data-size":x,...$,children:[s&&n.jsxs("div",{className:Vn.rowsGroup,children:[n.jsx("span",{className:Vn.groupLabel,children:"Rows per page"}),n.jsx("div",{className:Vn.rowsSelect,children:n.jsx(bg,{size:C,value:l,disabled:w,"aria-label":"Rows per page",onChange:E=>h==null?void 0:h(Number(E.target.value)),children:d.map(E=>n.jsx("option",{value:E,children:E},E))})})]}),A&&n.jsx("span",{className:Vn.countText,"aria-live":"polite",children:A}),n.jsxs("div",{className:Vn.pageControls,role:"group","aria-label":"Page navigation",children:[n.jsx(De,{variant:"ghost",size:M,iconOnly:!0,"aria-label":"Previous page",disabled:w||e<=1,onClick:()=>R(e-1),children:n.jsx(H0,{size:S})}),P.map((E,B)=>E==="ellipsis"?n.jsx("span",{className:Vn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${B}`):n.jsx(De,{variant:E===e?"secondary":"ghost",size:M,"aria-label":`Page ${E}`,"aria-current":E===e?"page":void 0,disabled:w,onClick:()=>R(E),className:Vn.pageBtn,children:E},E)),n.jsx(De,{variant:"ghost",size:M,iconOnly:!0,"aria-label":"Next page",disabled:w||e>=o,onClick:()=>R(e+1),children:n.jsx(Cn,{size:S})})]}),m&&n.jsxs("div",{className:Vn.goToGroup,children:[n.jsx("span",{className:Vn.groupLabel,children:"Go to"}),n.jsx("div",{className:Vn.goToInput,children:n.jsx(Cg,{size:C,value:j,placeholder:String(e),min:1,max:o,disabled:w,"aria-label":"Go to page number",onChange:E=>N(E.target.value),onKeyDown:L})})]})]})});Q7.displayName="Pagination";const Z7="_root_1vx33_6",X7="_fullWidth_1vx33_18",J7="_item_1vx33_23",ek="_indicator_1vx33_28",tk="_sm_1vx33_46",nk="_md_1vx33_54",rk="_lg_1vx33_62",ok="_itemSelected_1vx33_109",ak="_itemIcon_1vx33_115",ik="_itemLabel_1vx33_127",Zr={root:Z7,fullWidth:X7,item:J7,indicator:ek,sm:tk,md:nk,lg:rk,itemSelected:ok,itemIcon:ak,itemLabel:ik},jg=g.createContext(null);function sk(e){const o=g.useContext(jg);if(!o)throw new Error(`<${e}> must be rendered inside <SegmentedControl>`);return o}const Sg=g.forwardRef(({value:e,leadingIcon:o,className:i,children:s,disabled:l,onClick:d,...h},m)=>{const{value:v,onChange:y,disabled:x,name:w}=sk("SegmentedControl.Item"),k=v===e,$=x||!!l;return n.jsxs("button",{ref:m,type:"button",role:"radio","aria-checked":k,name:w,disabled:$,className:ie(Zr.item,k&&Zr.itemSelected,i),onClick:_=>{$||y(e),d==null||d(_)},...h,children:[o&&n.jsx("span",{className:ie(Zr.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:o}),s!==void 0&&n.jsx("span",{className:Zr.itemLabel,children:s})]})});Sg.displayName="SegmentedControl.Item";const $g=g.forwardRef(({value:e,defaultValue:o="",onChange:i,size:s="md",disabled:l=!1,fullWidth:d=!1,className:h,children:m,...v},y)=>{const[x,w]=g.useState(o),k=e!==void 0,$=k?e:x,_=g.useId(),j=g.useRef(null);g.useLayoutEffect(()=>{const M=j.current;if(!M)return;const C=M.querySelector('[aria-checked="true"]');C&&(M.style.setProperty("--sc-indicator-x",`${C.offsetLeft}px`),M.style.setProperty("--sc-indicator-w",`${C.offsetWidth}px`))},[$,s]);const N=M=>{k||w(M),i==null||i(M)};return n.jsx(jg.Provider,{value:{value:$,onChange:N,disabled:l,name:_},children:n.jsxs("div",{ref:M=>{j.current=M,typeof y=="function"?y(M):y&&(y.current=M)},role:"radiogroup",className:ie(Zr.root,Zr[s],d&&Zr.fullWidth,h),...v,children:[n.jsx("span",{className:Zr.indicator,"aria-hidden":"true"}),m]})})});$g.displayName="SegmentedControl";Object.assign($g,{Item:Sg});const lk="_root_fkv0x_6",ck="_sm_fkv0x_26",dk="_md_fkv0x_33",uk="_lg_fkv0x_40",hk="_dot_fkv0x_49",pk="_success_fkv0x_58",fk="_warning_fkv0x_65",mk="_error_fkv0x_72",gk="_info_fkv0x_79",vk="_neutral_fkv0x_86",xk="_pending_fkv0x_93",Xs={root:lk,sm:ck,md:dk,lg:uk,dot:hk,success:pk,warning:fk,error:mk,info:gk,neutral:vk,pending:xk},Ci=g.forwardRef(({status:e="neutral",size:o="md",dot:i=!0,className:s,children:l,...d},h)=>n.jsxs("span",{ref:h,className:ie(Xs.root,Xs[o],Xs[e],s),...d,children:[i&&n.jsx("span",{className:Xs.dot,"aria-hidden":"true"}),l]}));Ci.displayName="StatusTag";const yk="_root_1m8t5_6",wk="_underline_1m8t5_15",bk="_background_1m8t5_21",kk="_underlineIndicator_1m8t5_26",_k="_md_1m8t5_43",Ck="_lg_1m8t5_44",jk="_tab_1m8t5_42",Sk="_tabSelected_1m8t5_77",$k="_tabIcon_1m8t5_99",Mk="_tabLabel_1m8t5_111",Rk="_tabBadge_1m8t5_116",Nk="_tabLabelEditable_1m8t5_123",Lk="_tabLabelInput_1m8t5_128",Ak="_addTab_1m8t5_147",Tk="_addTabIcon_1m8t5_160",ln={root:yk,underline:wk,background:bk,underlineIndicator:kk,md:_k,lg:Ck,tab:jk,tabSelected:Sk,tabIcon:$k,tabLabel:Mk,tabBadge:Rk,tabLabelEditable:Nk,tabLabelInput:Lk,addTab:Ak,addTabIcon:Tk},Mg=g.createContext(null);function Rg(e){const o=g.useContext(Mg);if(!o)throw new Error(`<${e}> must be rendered inside <Tabs>`);return o}const Ng=g.forwardRef(({value:e,leadingIcon:o,trailingBadge:i,disabled:s,editable:l=!1,autoEdit:d=!1,onLabelChange:h,onClick:m,className:v,children:y,...x},w)=>{const{value:k,onChange:$,disabled:_,name:j}=Rg("Tabs.Tab"),N=k===e,M=_||!!s,C=typeof y=="string"?y:"",[S,P]=g.useState(d&&l),[R,L]=g.useState(C),A=g.useRef(null);g.useEffect(()=>{if(S){const U=A.current;U&&(U.focus(),U.select())}},[S]),g.useEffect(()=>{d&&l&&!S&&(L(typeof y=="string"?y:""),P(!0))},[d,l]);const E=()=>{const U=R.trim();U&&U!==C&&(h==null||h(U)),P(!1)},B=()=>{L(C),P(!1)},G=U=>{!l||M||(U.stopPropagation(),L(C),P(!0))},Q=U=>{U.key==="Enter"?(U.preventDefault(),E()):U.key==="Escape"&&(U.preventDefault(),B())};return n.jsxs("button",{ref:w,type:"button",role:"tab","aria-selected":N,name:j,disabled:M,className:ie(ln.tab,N&&ln.tabSelected,v),onClick:U=>{S||(M||$(e),m==null||m(U))},...x,children:[o&&n.jsx("span",{className:ie(ln.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:o}),S?n.jsx("input",{ref:A,type:"text",value:R,onChange:U=>L(U.target.value),onKeyDown:Q,onBlur:E,onClick:U=>U.stopPropagation(),className:ln.tabLabelInput,"aria-label":"Tab name",size:Math.max(R.length,1)}):y!==void 0&&n.jsx("span",{className:ie(ln.tabLabel,l&&ln.tabLabelEditable),onDoubleClick:G,children:y}),i&&!S&&n.jsx("span",{className:ln.tabBadge,children:i})]})});Ng.displayName="Tabs.Tab";const Ik=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:n.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Lg=g.forwardRef(({className:e,onClick:o,"aria-label":i="Add tab",...s},l)=>{const{disabled:d}=Rg("Tabs.AddTab");return n.jsx("button",{ref:l,type:"button","aria-label":i,disabled:d,className:ie(ln.tab,ln.addTab,e),onClick:o,...s,children:n.jsx("span",{className:ie(ln.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:n.jsx(Ik,{})})})});Lg.displayName="Tabs.AddTab";const Ag=g.forwardRef(({variant:e="underline",size:o="md",value:i,defaultValue:s="",onChange:l,disabled:d=!1,className:h,children:m,...v},y)=>{const[x,w]=g.useState(s),k=i!==void 0,$=k?i:x,_=g.useId(),j=g.useRef(null);g.useLayoutEffect(()=>{const M=j.current;if(!M||e!=="underline")return;const C=M.querySelector('[aria-selected="true"]');C&&(M.style.setProperty("--tab-indicator-x",`${C.offsetLeft}px`),M.style.setProperty("--tab-indicator-w",`${C.offsetWidth}px`))},[$,e]);const N=M=>{k||w(M),l==null||l(M)};return n.jsx(Mg.Provider,{value:{value:$,onChange:N,disabled:d,variant:e,size:o,name:_},children:n.jsxs("div",{ref:M=>{j.current=M,typeof y=="function"?y(M):y&&(y.current=M)},role:"tablist",className:ie(ln.root,ln[e],ln[o],h),...v,children:[e==="underline"&&n.jsx("span",{className:ln.underlineIndicator,"aria-hidden":"true"}),m]})})});Ag.displayName="Tabs";Object.assign(Ag,{Tab:Ng,AddTab:Lg});const Ek="_selectedBorder_1ypeg_7",Pk="_selectedFill_1ypeg_12",Rf={selectedBorder:Ek,selectedFill:Pk},zk=g.forwardRef(({selected:e=!1,defaultVariant:o="secondary",selectionStyle:i="border",onSelectedChange:s,onClick:l,className:d,...h},m)=>{const v=x=>{s==null||s(!e),l==null||l(x)},y=e?i==="fill"?Rf.selectedFill:Rf.selectedBorder:void 0;return n.jsx(De,{ref:m,variant:o,"aria-pressed":e,className:ie(y,d),onClick:v,...h})});zk.displayName="ToggleButton";const Ok="_root_mcb75_6",Dk="_disabled_mcb75_13",Fk="_sm_mcb75_20",Bk="_md_mcb75_31",Hk="_lg_mcb75_42",Wk="_track_mcb75_54",Uk="_trackChecked_mcb75_90",qk="_thumb_mcb75_100",Vk="_labelWrap_mcb75_117",Gk="_label_mcb75_117",Yk="_description_mcb75_139",wr={root:Ok,disabled:Dk,sm:Fk,md:Bk,lg:Hk,track:Wk,trackChecked:Uk,thumb:qk,labelWrap:Vk,label:Gk,description:Yk},Kk=g.forwardRef(({checked:e,defaultChecked:o=!1,onChange:i,disabled:s,size:l="md",label:d,description:h,id:m,name:v,value:y,className:x},w)=>{const k=g.useId(),$=m??k,_=`${$}-label`,j=e!==void 0,[N,M]=g.useState(o),C=j?e:N,S=()=>{if(s)return;const R=!C;j||M(R),i==null||i(R)},P=R=>{(R.key===" "||R.key==="Enter")&&(R.preventDefault(),S())};return n.jsxs("div",{className:ie(wr.root,wr[l],s&&wr.disabled,x),children:[n.jsx("button",{ref:w,type:"button",role:"switch",id:$,"aria-checked":C,"aria-labelledby":d?_:void 0,"aria-disabled":s||void 0,tabIndex:s?-1:0,disabled:s,name:v,value:y,className:ie(wr.track,C&&wr.trackChecked),"data-checked":C||void 0,"data-disabled":s||void 0,onClick:S,onKeyDown:P,children:n.jsx("span",{className:wr.thumb})}),(d||h)&&n.jsxs("div",{className:wr.labelWrap,children:[d&&n.jsx("label",{id:_,htmlFor:$,className:wr.label,children:d}),h&&n.jsx("span",{className:wr.description,children:h})]})]})});Kk.displayName="Switch";const Qk="_root_104n4_5",Zk="_disabled_104n4_11",Xk="_sm_104n4_17",Jk="_md_104n4_25",e_="_lg_104n4_33",t_="_controlWrap_104n4_41",n_="_input_104n4_50",r_="_ring_104n4_65",o_="_ringChecked_104n4_90",a_="_ringError_104n4_94",i_="_dot_104n4_104",s_="_labelWrap_104n4_112",l_="_label_104n4_112",c_="_error_104n4_130",d_="_required_104n4_132",u_="_description_104n4_137",on={root:Qk,disabled:Zk,sm:Xk,md:Jk,lg:e_,controlWrap:t_,input:n_,ring:r_,ringChecked:o_,ringError:a_,dot:i_,labelWrap:s_,label:l_,error:c_,required:d_,description:u_},h_=g.forwardRef(({value:e,checked:o,onChange:i,disabled:s,error:l,size:d="md",label:h,description:m,id:v,name:y,required:x,className:w},k)=>{const $=g.useId(),_=v??$;return n.jsxs("div",{className:ie(on.root,on[d],s&&on.disabled,l&&on.error,w),children:[n.jsxs("div",{className:on.controlWrap,children:[n.jsx("input",{ref:k,type:"radio",id:_,name:y,value:e,checked:o,disabled:s,required:x,"aria-invalid":l||void 0,onChange:()=>i==null?void 0:i(e),className:on.input}),n.jsx("span",{className:ie(on.ring,o&&on.ringChecked,l&&on.ringError),"aria-hidden":"true",children:o&&n.jsx("span",{className:on.dot})})]}),(h||m)&&n.jsxs("div",{className:on.labelWrap,children:[h&&n.jsxs("label",{htmlFor:_,className:on.label,children:[h,x&&n.jsx("span",{className:on.required,"aria-hidden":"true",children:" *"})]}),m&&n.jsx("span",{className:on.description,children:m})]})]})});h_.displayName="Radio";const p_="_table_1ad04_8",f_="_sm_1ad04_16",m_="_row_1ad04_30",g_="_head_1ad04_47",v_="_headLabel_1ad04_82",x_="_sortBtn_1ad04_96",y_="_sortIcon_1ad04_119",w_="_cell_1ad04_142",b_="_cellText_1ad04_175",k_="_cellStack_1ad04_203",__="_cellStackPrimary_1ad04_210",C_="_cellStackSecondary_1ad04_221",j_="_cellActions_1ad04_233",S_="_cellControl_1ad04_240",$_="_addCell_1ad04_251",M_="_addRowCell_1ad04_264",R_="_addRowLabel_1ad04_276",Dt={table:p_,sm:f_,row:m_,head:g_,headLabel:v_,sortBtn:x_,sortIcon:y_,cell:w_,cellText:b_,cellStack:k_,cellStackPrimary:__,cellStackSecondary:C_,cellActions:j_,cellControl:S_,addCell:$_,addRowCell:M_,addRowLabel:R_},Tg=g.createContext({addColumn:!1,addRow:!1}),Ig=()=>g.useContext(Tg),N_=g.forwardRef(({size:e="md",interaction:o="row",addColumn:i=!1,addRow:s=!1,onAddColumn:l,onAddRow:d,className:h,children:m,...v},y)=>{const x=g.useMemo(()=>({addColumn:i,addRow:s,onAddColumn:l,onAddRow:d}),[i,s,l,d]);return n.jsx(Tg.Provider,{value:x,children:n.jsx("table",{ref:y,className:ie(Dt.table,e==="sm"&&Dt.sm,h),"data-interaction":o,...v,children:m})})});N_.displayName="Table";const Eg=g.forwardRef(({align:e="left",sort:o,onSort:i,hoverable:s,selected:l,className:d,children:h,...m},v)=>{const y=o!==void 0;return n.jsx("th",{ref:v,className:ie(Dt.head,d),"data-align":e!=="left"?e:void 0,"data-hoverable":!y&&s?!0:void 0,"data-selected":l||void 0,"aria-selected":l,scope:"col","aria-sort":o==="asc"?"ascending":o==="desc"?"descending":y?"none":void 0,...m,children:y?n.jsxs("button",{type:"button",className:Dt.sortBtn,onClick:i,"aria-label":typeof h=="string"?`Sort by ${h}`:void 0,children:[h,n.jsx("span",{className:Dt.sortIcon,"data-sort":o!=="none"?o:void 0,"aria-hidden":"true",children:n.jsx(Pn,{size:12,strokeWidth:2})})]}):n.jsx("span",{className:Dt.headLabel,children:h})})});Eg.displayName="TableHead";const L_=g.forwardRef(({children:e,...o},i)=>{const{addColumn:s,onAddColumn:l}=Ig(),d=s?g.Children.map(e,(h,m)=>{if(!g.isValidElement(h)||m!==0)return h;const v=g.Children.toArray(h.props.children);return g.cloneElement(h,{},[...v,n.jsx(Eg,{hoverable:!0,onClick:l,className:Dt.addCell,"aria-label":"Add column",children:n.jsx(Ro,{size:14,strokeWidth:2})},"__add_col_head")])}):e;return n.jsx("thead",{ref:i,...o,children:d})});L_.displayName="TableHeader";const Pg=g.forwardRef(({hoverable:e=!0,selected:o,className:i,children:s,...l},d)=>n.jsx("tr",{ref:d,className:ie(Dt.row,i),"data-hoverable":e||void 0,"data-selected":o||void 0,"aria-selected":o,...l,children:s}));Pg.displayName="TableRow";const ku=g.forwardRef(({align:e="left",compact:o,hoverable:i=!0,selected:s,className:l,children:d,...h},m)=>n.jsx("td",{ref:m,className:ie(Dt.cell,l),"data-align":e!=="left"?e:void 0,"data-compact":o||void 0,"data-hoverable":i||void 0,"data-selected":s||void 0,"aria-selected":s,...h,children:d}));ku.displayName="TableCell";const A_=g.forwardRef(({children:e,...o},i)=>{const{addColumn:s,addRow:l,onAddRow:d}=Ig(),h=s?g.Children.map(e,m=>{if(!g.isValidElement(m))return m;const v=g.Children.toArray(m.props.children);return g.cloneElement(m,{},[...v,n.jsx(ku,{"aria-hidden":"true",className:Dt.addCell},"__add_col_pad")])}):e;return n.jsxs("tbody",{ref:i,...o,children:[h,l&&n.jsx(Pg,{hoverable:!1,children:n.jsx(ku,{colSpan:999,onClick:d,className:Dt.addRowCell,"aria-label":"Add row",children:n.jsxs("span",{className:Dt.addRowLabel,children:[n.jsx(Ro,{size:14,strokeWidth:2}),"Add row"]})})})]})});A_.displayName="TableBody";const T_=g.forwardRef(({variant:e="primary",size:o="md",wrap:i,className:s,children:l,...d},h)=>n.jsx("span",{ref:h,className:ie(Dt.cellText,s),"data-variant":e!=="primary"?e:void 0,"data-size":o!=="md"?o:void 0,"data-wrap":i||void 0,...d,children:l}));T_.displayName="CellText";const I_=g.forwardRef(({primary:e,secondary:o,className:i,...s},l)=>n.jsxs("div",{ref:l,className:ie(Dt.cellStack,i),...s,children:[n.jsx("span",{className:Dt.cellStackPrimary,children:e}),o&&n.jsx("span",{className:Dt.cellStackSecondary,children:o})]}));I_.displayName="CellStack";const E_=g.forwardRef(({size:e="sm",...o},i)=>n.jsx(En,{ref:i,size:e,...o}));E_.displayName="CellTag";const P_=g.forwardRef(({size:e="sm",...o},i)=>n.jsx(Ci,{ref:i,size:e,...o}));P_.displayName="CellStatusTag";const z_=g.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(Dt.cellActions,e),...i,children:o}));z_.displayName="CellActions";const O_=g.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(Dt.cellControl,e),...i,children:o}));O_.displayName="CellControl";const D_="_root_1afcs_8",F_="_secondary_1afcs_23",B_="_header_1afcs_28",H_="_headerText_1afcs_36",W_="_title_1afcs_43",U_="_subtitle_1afcs_52",q_="_action_1afcs_61",V_="_hero_1afcs_66",G_="_heroValue_1afcs_74",Y_="_heroCaption_1afcs_83",K_="_heroChange_1afcs_89",Q_="_body_1afcs_95",Z_="_legend_1afcs_103",yn={root:D_,secondary:F_,header:B_,headerText:H_,title:W_,subtitle:U_,action:q_,hero:V_,heroValue:G_,heroCaption:Y_,heroChange:K_,body:Q_,legend:Z_},X_=g.forwardRef(({title:e,subtitle:o,action:i,value:s,valueChange:l,valueCaption:d,legend:h,secondary:m,children:v,className:y,...x},w)=>n.jsxs("div",{ref:w,className:ie(yn.root,m&&yn.secondary,y),...x,children:[n.jsxs("div",{className:yn.header,children:[n.jsxs("div",{className:yn.headerText,children:[n.jsx("h3",{className:yn.title,children:e}),o&&n.jsx("p",{className:yn.subtitle,children:o})]}),i&&n.jsx("div",{className:yn.action,children:i})]}),(s!==void 0||l||d)&&n.jsxs("div",{className:yn.hero,children:[s!==void 0&&n.jsx("span",{className:yn.heroValue,children:s}),l&&n.jsx("span",{className:yn.heroChange,children:l}),d&&n.jsx("span",{className:yn.heroCaption,children:d})]}),n.jsx("div",{className:yn.body,children:v}),h&&n.jsx("div",{className:yn.legend,children:h})]}));X_.displayName="ChartCard";const J_="_root_je8nq_7",eC="_item_je8nq_17",tC="_swatch_je8nq_23",nC="_label_je8nq_29",rC="_bookend_je8nq_33",na={root:J_,item:eC,swatch:tC,label:nC,bookend:rC},zg=g.forwardRef(({items:e,before:o,after:i,variant:s="square",swatchSize:l=12,className:d,...h},m)=>n.jsxs("div",{ref:m,className:ie(na.root,d),...h,children:[o&&n.jsx("span",{className:na.bookend,children:o}),e.map((v,y)=>{const x=s==="line"?{width:l+4,height:2,background:v.color,borderRadius:1}:s==="dot"?{width:l-2,height:l-2,background:v.color,borderRadius:"50%"}:{width:l,height:l,background:v.color};return n.jsxs("span",{className:na.item,children:[n.jsx("span",{className:na.swatch,style:x,"aria-hidden":"true"}),v.label!==void 0&&n.jsx("span",{className:na.label,children:v.label})]},y)}),i&&n.jsx("span",{className:na.bookend,children:i})]}));zg.displayName="ChartLegend";const oC="_root_igkx4_5",aC="_svgWrap_igkx4_13",iC="_svg_igkx4_13",sC="_gridLine_igkx4_23",lC="_axisLabel_igkx4_28",cC="_legendWrap_igkx4_43",dC="_legendItem_igkx4_51",uC="_legendDot_igkx4_57",hC="_legendLabel_igkx4_64",pC="_tooltip_igkx4_71",fC="_tooltipLabel_igkx4_85",mC="_tooltipRow_igkx4_95",gC="_tooltipDot_igkx4_101",vC="_tooltipSeries_igkx4_108",xC="_tooltipValue_igkx4_115",He={root:oC,svgWrap:aC,svg:iC,gridLine:sC,axisLabel:lC,legendWrap:cC,legendItem:dC,legendDot:uC,legendLabel:hC,tooltip:pC,tooltipLabel:fC,tooltipRow:mC,tooltipDot:gC,tooltipSeries:vC,tooltipValue:xC},yC=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function Vd(e){if(e===0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e))),i=e/o;return i<=1?o:i<=2?2*o:i<=5?5*o:10*o}function ra(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}const wC=g.forwardRef(({series:e,labels:o,variant:i="grouped",height:s=260,showGrid:l=!0,showLegend:d=!0,yUnit:h="",barRadius:m=2,colors:v,gradientFrom:y="#8c4fe2",gradientTo:x="#446cff",formatTooltipValue:w,stackStyle:k="gradient-each",capColor:$,className:_,...j},N)=>{var F,z,ae,me;const M=v&&v.length>0?v:yC,C=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[S,P]=g.useState({visible:!1,x:0,y:0,label:"",items:[]}),R=g.useRef(null),[L,A]=g.useState(540);g.useEffect(()=>{const de=R.current;if(!de)return;const ge=new ResizeObserver(_e=>{var Ie;const Le=(Ie=_e[0])==null?void 0:Ie.contentRect.width;Le>0&&A(Math.floor(Le))});ge.observe(de);const be=Math.floor(de.getBoundingClientRect().width);return be>0&&A(be),()=>ge.disconnect()},[]);const E=44,B=0,G=20,Q=20,U=L,Y=s,ee=U-E-B,oe=Y-G-Q,ce=5,le=e.map((de,ge)=>de.color??M[ge%M.length]);let K=0;i==="stacked"?o.forEach((de,ge)=>{const be=e.reduce((_e,Le)=>_e+(Le.data[ge]??0),0);be>K&&(K=be)}):i==="horizontal"?K=Math.max(...((F=e[0])==null?void 0:F.data)??[0]):e.forEach(de=>de.data.forEach(ge=>{ge>K&&(K=ge)}));const D=Vd(K),W=Array.from({length:ce+1},(de,ge)=>D*(ge/ce)).reverse(),T=de=>Q+oe-de/D*oe,O=ee/o.length,ne=3,q=i==="grouped"?Math.max(4,(O-ne*(e.length+1))/e.length):O,X=()=>P(de=>({...de,visible:!1})),se=g.useCallback(de=>{const ge=de.currentTarget.getBoundingClientRect(),be=de.clientX-ge.left,_e=Math.floor((be-E)/O);if(_e<0||_e>=o.length){X();return}const Le=e.map((Ie,Oe)=>({color:le[Oe],series:Ie.label,value:Ie.data[_e]??0}));P({visible:!0,x:de.clientX+12,y:de.clientY-8,label:o[_e],items:Le})},[e,o,O,le,E]);if(i==="gradient"){const de=((z=e[0])==null?void 0:z.data)??[],ge=((ae=e[0])==null?void 0:ae.label)??"",be=44,_e=0,Le=20,Ie=20,Oe=Math.max(U-be-_e,1),Ee=Y-Le-Ie,ze=Math.max(0,...de),Be=ze>0?Vd(ze):10,Ke=5,xe=Array.from({length:Ke+1},(Ae,it)=>Be*it/Ke),Se=Ae=>Le+Ee-Ae/Be*Ee,et=Oe/Math.max(1,de.length),tt=Ae=>be+et*Ae,rt=Ae=>be+et*(Ae+1),st=Ae=>be+et*(Ae+.5),Ye=de.length===0?"":de.map((Ae,it)=>{const vt=Se(Ae);return`M ${tt(it)} ${vt} L ${rt(it)} ${vt}`}).join(" "),Zn=[];de.forEach((Ae,it)=>{if(Ae<=0)return;const vt=Se(Ae);Zn.push({x:tt(it),y:vt,width:Math.max(rt(it)-tt(it),0),height:Le+Ee-vt})});const sr=Math.max(1,Math.ceil(45/et)),On=o.length-1,Ao=w??(Ae=>`${ra(Ae)}${h}`);return n.jsxs("div",{ref:N,className:ie(He.root,_),...j,children:[n.jsx("div",{ref:R,className:He.svgWrap,children:n.jsxs("svg",{width:U,height:Y,viewBox:`0 0 ${U} ${Y}`,className:He.svg,onMouseLeave:X,onMouseMove:Ae=>{const it=Ae.currentTarget.getBoundingClientRect(),vt=Ae.clientX-it.left,yt=Math.floor((vt-be)/et);if(yt<0||yt>=de.length){X();return}P({visible:!0,x:Ae.clientX+12,y:Ae.clientY-8,label:o[yt]??"",items:[{color:x,series:ge,value:de[yt]??0}]})},children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:`${C}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:y}),n.jsx("stop",{offset:"100%",stopColor:x})]}),n.jsxs("linearGradient",{id:`${C}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:y,stopOpacity:"0.3"}),n.jsx("stop",{offset:"100%",stopColor:x,stopOpacity:"0"})]})]}),xe.map((Ae,it)=>n.jsxs("g",{children:[l&&n.jsx("line",{x1:0,x2:U-_e,y1:Se(Ae),y2:Se(Ae),className:He.gridLine}),n.jsxs("text",{x:0,y:Se(Ae)-6,className:He.axisLabel,textAnchor:"start",children:[ra(Ae),h]})]},`t-${it}`)),Zn.map((Ae,it)=>n.jsx("rect",{x:Ae.x,y:Ae.y,width:Ae.width,height:Ae.height,fill:`url(#${C}-fill)`},`b-${it}`)),Ye&&n.jsx("path",{d:Ye,fill:"none",stroke:`url(#${C}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),S.visible&&(()=>{var lr;const Ae=(lr=R.current)==null?void 0:lr.getBoundingClientRect();if(!Ae)return null;const it=S.x-12-Ae.left,vt=Math.floor((it-be)/et);if(vt<0||vt>=de.length)return null;const yt=de[vt]??0;return yt<=0?null:n.jsx("circle",{cx:st(vt),cy:Se(yt),r:4,fill:x,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),o.map((Ae,it)=>{const vt=it===0,yt=it===On;if(!(vt||yt)&&it%sr!==0)return null;const cr=vt?be:yt?U-_e:st(it),oo=vt?"start":yt?"end":"middle";return n.jsx("text",{x:cr,y:Y-Ie+18,className:He.axisLabel,textAnchor:oo,children:Ae},`xl-${it}`)})]})}),S.visible&&S.items.length>0&&n.jsxs("div",{className:He.tooltip,style:{left:S.x,top:S.y},children:[n.jsx("div",{className:He.tooltipLabel,children:S.label}),S.items.map(Ae=>n.jsxs("div",{className:He.tooltipRow,children:[n.jsx("span",{className:He.tooltipDot,style:{background:Ae.color}}),n.jsx("span",{className:He.tooltipSeries,children:Ae.series}),n.jsx("span",{className:He.tooltipValue,children:Ao(Ae.value)})]},Ae.series))]})]})}if(i==="horizontal"){const de=((me=e[0])==null?void 0:me.data)??[],ge=Vd(Math.max(...de,1)),be=28,_e=10,Le=120,Oe=U-Le-44,Ee=o.length*(be+_e)+_e;return n.jsxs("div",{ref:N,className:ie(He.root,_),...j,children:[n.jsx("div",{ref:R,className:He.svgWrap,children:n.jsx("svg",{width:U,height:Ee,viewBox:`0 0 ${U} ${Ee}`,className:He.svg,onMouseLeave:X,onMouseMove:ze=>{var Se;const Be=ze.currentTarget.getBoundingClientRect(),Ke=ze.clientY-Be.top,xe=Math.floor(Ke/(be+_e));if(xe<0||xe>=o.length){X();return}P({visible:!0,x:ze.clientX+12,y:ze.clientY-8,label:o[xe],items:[{color:le[0],series:((Se=e[0])==null?void 0:Se.label)??"",value:de[xe]??0}]})},children:o.map((ze,Be)=>{const Ke=_e+Be*(be+_e),xe=de[Be]??0,Se=xe/ge*Oe;return n.jsxs("g",{children:[n.jsx("text",{x:Le-8,y:Ke+be/2+4,className:He.axisLabel,textAnchor:"end",children:ze}),n.jsx("rect",{x:Le,y:Ke,width:Se,height:be,rx:m,fill:le[0]}),n.jsxs("text",{x:Le+Se+6,y:Ke+be/2+4,className:He.axisLabel,textAnchor:"start",children:[ra(xe),h]})]},Be)})})}),S.visible&&n.jsxs("div",{className:He.tooltip,style:{left:S.x,top:S.y},children:[n.jsx("div",{className:He.tooltipLabel,children:S.label}),S.items.map(ze=>n.jsxs("div",{className:He.tooltipRow,children:[n.jsx("span",{className:He.tooltipDot,style:{background:ze.color}}),n.jsx("span",{className:He.tooltipSeries,children:ze.series}),n.jsxs("span",{className:He.tooltipValue,children:[ra(ze.value),h]})]},ze.series))]})]})}return n.jsxs("div",{ref:N,className:ie(He.root,_),...j,children:[n.jsx("div",{ref:R,className:He.svgWrap,children:n.jsxs("svg",{width:U,height:Y,viewBox:`0 0 ${U} ${Y}`,className:He.svg,onMouseMove:se,onMouseLeave:X,children:[n.jsx("defs",{children:le.flatMap((de,ge)=>[n.jsxs("linearGradient",{id:`${C}-fill-${ge}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:de,stopOpacity:"0.3"}),n.jsx("stop",{offset:"100%",stopColor:de,stopOpacity:"0"})]},`soft-${ge}`),n.jsxs("linearGradient",{id:`${C}-fill-strong-${ge}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:de,stopOpacity:"1"}),n.jsx("stop",{offset:"100%",stopColor:de,stopOpacity:"0"})]},`strong-${ge}`)])}),W.map(de=>{const ge=T(de);return n.jsxs("g",{children:[l&&n.jsx("line",{x1:0,y1:ge,x2:U-B,y2:ge,className:He.gridLine}),n.jsxs("text",{x:0,y:ge-6,className:He.axisLabel,textAnchor:"start",children:[ra(de),h]})]},de)}),o.map((de,ge)=>{const be=E+ge*O;if(i==="stacked"){let Ie=0;const Oe=e.map((Se,et)=>{const tt=Se.data[ge]??0,rt=tt/D*oe,st=T(Ie+tt);return Ie+=tt,{si:et,value:tt,barH:rt,y:st}}),Ee=be+(O-q)/2,ze=Oe.filter(Se=>Se.value>0),Be=ze.length>0?ze[0].si:-1,Ke=ze.length>0?ze[ze.length-1]:null,xe=$??(Ke?le[Ke.si]:"transparent");return n.jsxs("g",{children:[Oe.map(({si:Se,value:et,barH:tt,y:rt})=>{if(et<=0)return null;if(k==="mono-scale"){const st=Se===Be;return n.jsx("rect",{x:Ee,y:rt,width:q,height:tt,fill:st?`url(#${C}-fill-strong-${Se})`:le[Se]},`fill-${Se}`)}return n.jsx("rect",{x:Ee,y:rt,width:q,height:tt,fill:`url(#${C}-fill-${Se})`},`fill-${Se}`)}),k==="mono-scale"?Ke&&n.jsx("line",{x1:Ee,x2:Ee+q,y1:Ke.y,y2:Ke.y,stroke:xe,strokeWidth:2,strokeLinecap:"butt"}):Oe.map(({si:Se,value:et,y:tt})=>et>0?n.jsx("line",{x1:Ee,x2:Ee+q,y1:tt,y2:tt,stroke:le[Se],strokeWidth:2,strokeLinecap:"butt"},`cap-${Se}`):null)]},ge)}const _e=e.length*q+(e.length-1)*ne,Le=be+(O-_e)/2;return n.jsx("g",{children:e.map((Ie,Oe)=>{const Ee=Ie.data[ge]??0;if(Ee<=0)return null;const ze=Ee/D*oe,Be=Le+Oe*(q+ne),Ke=T(Ee);return n.jsxs("g",{children:[n.jsx("rect",{x:Be,y:Ke,width:q,height:ze,fill:`url(#${C}-fill-${Oe})`}),n.jsx("line",{x1:Be,x2:Be+q,y1:Ke,y2:Ke,stroke:le[Oe],strokeWidth:2,strokeLinecap:"butt"})]},Oe)})},ge)}),(()=>{const ge=Math.max(1,Math.ceil(45/O)),be=o.length-1;return o.map((_e,Le)=>{const Ie=Le===0,Oe=Le===be;if(!(Ie||Oe)&&Le%ge!==0)return null;const ze=Ie?E:Oe?U-B:E+O*(Le+.5),Be=Ie?"start":Oe?"end":"middle";return n.jsx("text",{x:ze,y:Y-G+18,className:He.axisLabel,textAnchor:Be,children:_e},`xl-${Le}`)})})()]})}),d&&e.length>1&&n.jsx("div",{className:He.legendWrap,children:e.map((de,ge)=>n.jsxs("div",{className:He.legendItem,children:[n.jsx("span",{className:He.legendDot,style:{background:le[ge]}}),n.jsx("span",{className:He.legendLabel,children:de.label})]},de.label))}),S.visible&&n.jsxs("div",{className:He.tooltip,style:{left:S.x,top:S.y},children:[n.jsx("div",{className:He.tooltipLabel,children:S.label}),S.items.map(de=>n.jsxs("div",{className:He.tooltipRow,children:[n.jsx("span",{className:He.tooltipDot,style:{background:de.color}}),n.jsx("span",{className:He.tooltipSeries,children:de.series}),n.jsxs("span",{className:He.tooltipValue,children:[ra(de.value),h]})]},de.series))]})]})});wC.displayName="BarChart";const bC="_root_1crij_5",kC="_svgWrap_1crij_13",_C="_svg_1crij_13",CC="_gridLine_1crij_23",jC="_axisLabelY_1crij_35 _axisLabel_1crij_28",SC="_axisLabelX_1crij_39 _axisLabel_1crij_28",$C="_legendWrap_1crij_51",MC="_tooltip_1crij_76",RC="_tooltipLabel_1crij_95",NC="_tooltipRow_1crij_105",LC="_tooltipDot_1crij_111",AC="_tooltipSeries_1crij_118",TC="_tooltipValue_1crij_125",wn={root:bC,svgWrap:kC,svg:_C,gridLine:CC,axisLabelY:jC,axisLabelX:SC,legendWrap:$C,tooltip:MC,tooltipLabel:RC,tooltipRow:NC,tooltipDot:LC,tooltipSeries:AC,tooltipValue:TC};function IC(e){if(e===0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e))),i=e/o;return i<=1?o:i<=2?2*o:i<=5?5*o:10*o}function Nf(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}function EC(e,o=.35){if(e.length<2)return"";let i=`M ${e[0][0]} ${e[0][1]}`;for(let s=0;s<e.length-1;s++){const[l,d]=e[s],[h,m]=e[s+1],v=(h-l)*o;i+=` C ${l+v} ${d}, ${h-v} ${m}, ${h} ${m}`}return i}const PC=g.forwardRef(({series:e,labels:o,height:i=260,showGrid:s=!0,showLegend:l=!0,gradientFrom:d="#8c4fe2",gradientTo:h="#446cff",yUnit:m="",yTickCount:v=5,className:y,...x},w)=>{const[k,$]=g.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),_=`line-grad-${Math.random().toString(36).slice(2,9)}`,j=g.useRef(null),[N,M]=g.useState(540);g.useEffect(()=>{const D=j.current;if(!D)return;const W=new ResizeObserver(O=>{var q;const ne=(q=O[0])==null?void 0:q.contentRect.width;ne>0&&M(Math.floor(ne))});W.observe(D);const T=Math.floor(D.getBoundingClientRect().width);return T>0&&M(T),()=>W.disconnect()},[]);const C=44,S=20,P=20,R=N,L=i,A=R-C,E=L-S-P,B=`url(#${_}-stroke)`,G=D=>D.color??B,Q=e.flatMap(D=>D.data),U=IC(Math.max(...Q,1)),Y=Array.from({length:v+1},(D,W)=>U*(W/v)).reverse(),ee=D=>P+E-D/U*E,oe=D=>o.length>1?C+D/(o.length-1)*A:C+A/2,ce=D=>D.map((W,T)=>[oe(T),ee(W)]),le=()=>$(D=>({...D,visible:!1})),K=g.useCallback(D=>{const W=D.currentTarget.getBoundingClientRect(),O=D.clientX-W.left-C,ne=A/Math.max(o.length-1,1),q=Math.round(O/ne),X=Math.max(0,Math.min(q,o.length-1)),se=e.map(F=>({color:F.color??h,series:F.label,value:F.data[X]??0}));$({visible:!0,index:X,x:D.clientX+12,y:D.clientY-8,label:o[X],items:se})},[e,o,h,A,C]);return n.jsxs("div",{ref:w,className:ie(wn.root,y),...x,children:[n.jsx("div",{ref:j,className:wn.svgWrap,children:n.jsxs("svg",{width:R,height:L,viewBox:`0 0 ${R} ${L}`,className:wn.svg,onMouseMove:K,onMouseLeave:le,children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:`${_}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:d}),n.jsx("stop",{offset:"100%",stopColor:h})]}),n.jsxs("linearGradient",{id:`${_}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[n.jsx("stop",{offset:"0%",stopColor:h,stopOpacity:"0.05"}),n.jsx("stop",{offset:"50%",stopColor:h}),n.jsx("stop",{offset:"100%",stopColor:h,stopOpacity:"0.05"})]}),n.jsxs("filter",{id:`${_}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),n.jsx("feOffset",{dy:"4"}),n.jsx("feComponentTransfer",{children:n.jsx("feFuncA",{type:"linear",slope:"0.3"})}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),n.jsx("clipPath",{id:`${_}-clip`,children:n.jsx("rect",{x:C,y:P,width:A,height:E,rx:6,ry:6})})]}),Y.map(D=>{const W=ee(D);return n.jsxs("g",{children:[s&&n.jsx("line",{x1:0,y1:W,x2:R,y2:W,className:wn.gridLine}),n.jsxs("text",{x:0,y:W-6,className:wn.axisLabelY,textAnchor:"start",children:[Nf(D),m]})]},D)}),n.jsx("g",{clipPath:`url(#${_}-clip)`,children:e.map((D,W)=>{const T=ce(D.data),O=EC(T);return n.jsx("path",{d:O,fill:"none",stroke:G(D),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},W)})}),(()=>{const D=k.index>=0?k.index:0,W=oe(D),T=k.visible&&k.index>=0,O="transform 200ms var(--ease-default, ease-out)";return n.jsx("g",{style:{pointerEvents:"none",opacity:T?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:n.jsxs("g",{style:{transform:`translateX(${W}px)`,transition:O},children:[n.jsx("line",{x1:0,x2:0,y1:P,y2:P+E,stroke:h,strokeWidth:2,strokeLinecap:"round",opacity:.5}),e.map((ne,q)=>{const X=ne.data[D]??0,se=ee(X),F=ne.color??h;return n.jsx("g",{style:{transform:`translateY(${se}px)`,transition:O},children:n.jsx("circle",{cx:0,cy:0,r:4,fill:F,filter:`url(#${_}-pin-shadow)`})},q)})]})})})(),(()=>{const W=o.length>1?A/(o.length-1):A,T=Math.max(1,Math.ceil(45/Math.max(W,1))),O=o.length-1;return o.map((ne,q)=>{const X=q===0,se=q===O;if(!(X||se)&&q%T!==0)return null;const z=X?C:se?R:oe(q),ae=X?"start":se?"end":"middle";return n.jsx("text",{x:z,y:L-S+14,className:wn.axisLabelX,textAnchor:ae,children:ne},ne)})})()]})}),l&&e.length>0&&n.jsx("div",{className:wn.legendWrap,children:n.jsx(zg,{variant:"line",items:e.map(D=>({color:D.color??h,label:D.label}))})}),k.visible&&n.jsxs("div",{className:wn.tooltip,style:{left:k.x,top:k.y},children:[n.jsx("div",{className:wn.tooltipLabel,children:k.label}),k.items.map(D=>n.jsxs("div",{className:wn.tooltipRow,children:[n.jsx("span",{className:wn.tooltipDot,style:{background:D.color}}),n.jsx("span",{className:wn.tooltipSeries,children:D.series}),n.jsxs("span",{className:wn.tooltipValue,children:[Nf(D.value),m]})]},D.series))]})]})});PC.displayName="LineChart";const zC="_root_3tq2n_5",OC="_chartWrap_3tq2n_14",DC="_svg_3tq2n_18",FC="_centerText_3tq2n_23",BC="_statLegend_3tq2n_31",HC="_statItem_3tq2n_37",WC="_statBar_3tq2n_44",UC="_statText_3tq2n_50",qC="_statValue_3tq2n_56",VC="_statLabel_3tq2n_65",GC="_listLegend_3tq2n_72",YC="_legendItem_3tq2n_79",KC="_legendDot_3tq2n_85",QC="_legendLabel_3tq2n_92",ZC="_legendValue_3tq2n_99",XC="_tooltip_3tq2n_107",JC="_tooltipLabel_3tq2n_118",ej="_tooltipValue_3tq2n_124",Tt={root:zC,chartWrap:OC,svg:DC,centerText:FC,statLegend:BC,statItem:HC,statBar:WC,statText:UC,statValue:qC,statLabel:VC,listLegend:GC,legendItem:YC,legendDot:KC,legendLabel:QC,legendValue:ZC,tooltip:XC,tooltipLabel:JC,tooltipValue:ej},Lf=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],tj=g.forwardRef(({segments:e,innerRadius:o=60,size:i=200,showLegend:s=!0,legendVariant:l="list",unit:d="%",centerLabel:h,className:m,...v},y)=>{const[x,w]=g.useState({visible:!1,x:0,y:0,label:"",value:""}),k=e.map((R,L)=>R.color??Lf[L%Lf.length]),$=e.reduce((R,L)=>R+L.value,0),_=i/2,j=i/2,N=i*.15,M=(i-N)/2-2,C=2*Math.PI*M;let S=-C/4;const P=e.map((R,L)=>{const E=($>0?R.value/$:0)*C,B=`${E} ${C-E}`,G=-S;return S+=E,{dashArray:B,dashOffset:G,color:k[L],...R}});return n.jsxs("div",{ref:y,className:ie(Tt.root,m),...v,children:[n.jsx("div",{className:Tt.chartWrap,children:n.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:Tt.svg,children:[n.jsx("circle",{cx:_,cy:j,r:M,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:N}),P.map((R,L)=>n.jsx("circle",{cx:_,cy:j,r:M,fill:"none",stroke:R.color,strokeWidth:N,strokeDasharray:R.dashArray,strokeDashoffset:R.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:A=>{const E=$>0?Math.round(R.value/$*100):0;w({visible:!0,x:A.clientX+12,y:A.clientY-8,label:R.label,value:`${E}${d}`})},onMouseLeave:()=>w(A=>({...A,visible:!1}))},L)),h&&o>0&&n.jsx("text",{x:_,y:j+6,textAnchor:"middle",className:Tt.centerText,children:h})]})}),s&&l==="stat"&&n.jsx("div",{className:Tt.statLegend,children:e.map((R,L)=>{const A=$>0?Math.round(R.value/$*100):0;return n.jsxs("div",{className:Tt.statItem,children:[n.jsx("span",{className:Tt.statBar,style:{background:k[L]}}),n.jsxs("div",{className:Tt.statText,children:[n.jsxs("span",{className:Tt.statValue,children:[A,d]}),n.jsx("span",{className:Tt.statLabel,children:R.label})]})]},R.label)})}),s&&l==="list"&&n.jsx("div",{className:Tt.listLegend,children:e.map((R,L)=>{const A=$>0?Math.round(R.value/$*100):0;return n.jsxs("div",{className:Tt.legendItem,children:[n.jsx("span",{className:Tt.legendDot,style:{background:k[L]}}),n.jsx("span",{className:Tt.legendLabel,children:R.label}),n.jsxs("span",{className:Tt.legendValue,children:[A,d]})]},R.label)})}),x.visible&&n.jsxs("div",{className:Tt.tooltip,style:{left:x.x,top:x.y},children:[n.jsx("div",{className:Tt.tooltipLabel,children:x.label}),n.jsx("div",{className:Tt.tooltipValue,children:x.value})]})]})});tj.displayName="DonutChart";const nj="_root_bqpf6_5",rj="_svgWrap_bqpf6_10",oj="_svg_bqpf6_10",aj="_axisLabel_bqpf6_19",ij="_tooltip_bqpf6_25",oa={root:nj,svgWrap:rj,svg:oj,axisLabel:aj,tooltip:ij};function sj(e){return e<.35?"var(--Alloy-green-100)":e<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const lj=g.forwardRef(({cells:e,rows:o,cols:i,colorScale:s=sj,cellRadius:l=4,cellGap:d=4,showTooltip:h=!0,className:m,...v},y)=>{const[x,w]=g.useState({visible:!1,x:0,y:0,content:""}),k=g.useRef(null),[$,_]=g.useState(540);g.useEffect(()=>{const L=k.current;if(!L)return;const A=new ResizeObserver(B=>{var Q;const G=(Q=B[0])==null?void 0:Q.contentRect.width;G>0&&_(Math.floor(G))});A.observe(L);const E=Math.floor(L.getBoundingClientRect().width);return E>0&&_(E),()=>A.disconnect()},[]);const j=32,N=16,M=$,C=M-j-d,S=Math.max(4,(C-(i.length-1)*d)/i.length),P=o.length*(N+d)+d+24,R=new Map;return e.forEach(L=>R.set(`${L.row}__${L.col}`,L)),n.jsxs("div",{ref:y,className:ie(oa.root,m),...v,children:[n.jsx("div",{ref:k,className:oa.svgWrap,children:n.jsxs("svg",{width:M,height:P,viewBox:`0 0 ${M} ${P}`,className:oa.svg,onMouseLeave:()=>w(L=>({...L,visible:!1})),children:[i.map((L,A)=>{const E=j+d+A*(S+d)+S/2;return n.jsx("text",{x:E,y:12,className:oa.axisLabel,textAnchor:"middle",children:L},L)}),o.map((L,A)=>{const E=24+A*(N+d);return n.jsxs("g",{children:[n.jsx("text",{x:j-4,y:E+N/2+4,className:oa.axisLabel,textAnchor:"end",children:L}),i.map((B,G)=>{const Q=R.get(`${L}__${B}`),U=(Q==null?void 0:Q.value)??0,Y=s(U),ee=j+d+G*(S+d);return n.jsx("rect",{x:ee,y:E,width:S,height:N,rx:l,fill:Y,style:{cursor:"pointer"},onMouseEnter:oe=>{if(!h)return;const ce=(Q==null?void 0:Q.label)??`${L} / ${B}: ${Math.round(U*100)}%`;w({visible:!0,x:oe.clientX+12,y:oe.clientY-8,content:ce})},onMouseLeave:()=>w(oe=>({...oe,visible:!1}))},B)})]},L)})]})}),x.visible&&n.jsx("div",{className:oa.tooltip,style:{left:x.x,top:x.y},children:x.content})]})});lj.displayName="HeatMap";const cj="_root_18572_6",dj="_gridWrap_18572_14",uj="_grid_18572_14",hj="_cell_18572_27",pj="_legend_18572_33",fj="_legendSquare_18572_43",mj="_tooltip_18572_49",Yr={root:cj,gridWrap:dj,grid:uj,cell:hj,legend:pj,legendSquare:fj,tooltip:mj},gj=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function vj(e,o){if(e<=0)return 0;const i=e/Math.max(1,o);return i<=.25?1:i<=.5?2:i<=.75?3:4}const xj=g.forwardRef(({days:e,levelColors:o=gj,cellSize:i=14,cellGap:s=3,cellRadius:l=2,fillWidth:d=!1,showLegend:h=!0,maxCount:m,formatTooltip:v,ariaLabel:y,className:x,...w},k)=>{const[$,_]=g.useState({visible:!1,x:0,y:0,content:""}),j=m??Math.max(1,...e.map(S=>S.count)),N=[];for(let S=0;S<e.length;S+=7)N.push(e.slice(S,S+7));const M=d?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${N.length}, minmax(0, 1fr))`,gap:`${s}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${s}px`},C=d?"100%":i;return n.jsxs("div",{ref:k,className:ie(Yr.root,x),...w,children:[n.jsx("div",{className:Yr.gridWrap,children:n.jsx("div",{role:"img","aria-label":y??`Activity heatmap with max ${j} on the busiest day`,className:Yr.grid,style:M,onMouseLeave:()=>_(S=>({...S,visible:!1})),children:N.map((S,P)=>Array.from({length:7},(R,L)=>{const A=S[L];if(!A)return n.jsx("span",{className:Yr.cell,style:{width:i,height:i,borderRadius:l,background:o[0]}},`${P}-${L}`);const E=vj(A.count,j),B=v?v(A,E):`${A.label??A.date}: ${A.count} activation${A.count===1?"":"s"}`;return n.jsx("span",{className:Yr.cell,style:{width:C,height:i,borderRadius:l,background:o[E]},onMouseMove:G=>_({visible:!0,x:G.clientX,y:G.clientY,content:B}),onMouseLeave:()=>_(G=>({...G,visible:!1}))},`${P}-${L}`)}))})}),h&&n.jsxs("div",{className:Yr.legend,children:[n.jsx("span",{children:"Less"}),[0,1,2,3,4].map(S=>n.jsx("span",{className:Yr.legendSquare,style:{background:o[S],borderRadius:l}},S)),n.jsx("span",{children:"More"})]}),$.visible&&n.jsx("div",{className:Yr.tooltip,style:{left:$.x,top:$.y},children:$.content})]})});xj.displayName="ActivityHeatMap";const yj="_root_14edh_5",wj="_track_14edh_17",bj="_segment_14edh_28",kj="_legend_14edh_49",_j="_legendRow_14edh_58",Cj="_legendDot_14edh_68",jj="_legendLabel_14edh_74",Sj="_legendValue_14edh_78",$j="_tooltip_14edh_84",Mj="_tooltipLabel_14edh_100",Rj="_tooltipValueRow_14edh_105",Nj="_tooltipDot_14edh_114",An={root:yj,track:wj,segment:bj,legend:kj,legendRow:_j,legendDot:Cj,legendLabel:jj,legendValue:Sj,tooltip:$j,tooltipLabel:Mj,tooltipValueRow:Rj,tooltipDot:Nj},Lj=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],aa={r:140,g:79,b:226},Gd={r:68,g:108,b:255};function Af(e){const o=Math.max(0,Math.min(100,e))/100,i=Math.round(aa.r+(Gd.r-aa.r)*o),s=Math.round(aa.g+(Gd.g-aa.g)*o),l=Math.round(aa.b+(Gd.b-aa.b)*o);return`rgb(${i}, ${s}, ${l})`}const Aj=g.forwardRef(({segments:e,colors:o=Lj,aiGradient:i=!1,height:s,showLegend:l=!1,flat:d=!1,ariaLabel:h,className:m,...v},y)=>{const[x,w]=g.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),k=e.reduce((N,M)=>N+Math.max(0,M.value),0);let $=0;const _=e.map((N,M)=>{const C=Math.max(0,N.value),S=k>0?C/k*100:0,P=k>0?$/k*100:0;$+=C;const R=k>0?$/k*100:0,L=N.color??o[M%o.length],A=d?!0:N.emphasized??M===0;return{...N,pct:S,startPct:P,endPct:R,color:L,emphasized:A}}),j=s!==void 0?{height:typeof s=="number"?`${s}px`:s}:void 0;return n.jsxs("div",{ref:y,className:ie(An.root,m),...v,children:[n.jsx("div",{role:"img","aria-label":h??`Ratio bar: ${e.map(N=>`${N.label} ${N.value}`).join(", ")}`,className:An.track,style:j,onMouseLeave:()=>w(N=>({...N,visible:!1})),children:_.map(N=>{const M=i?`linear-gradient(to right, ${Af(N.startPct)}, ${Af(N.endPct)})`:N.color;return n.jsx("span",{className:An.segment,"data-emphasized":N.emphasized||void 0,"data-ai":i||void 0,style:{width:`${N.pct}%`,background:M,"--ratio-hover-bg":N.color},onMouseMove:C=>w({visible:!0,x:C.clientX,y:C.clientY,label:N.label,value:N.value,color:N.color})},N.label)})}),l&&n.jsx("ul",{className:An.legend,children:_.map(N=>n.jsxs("li",{className:An.legendRow,children:[n.jsx("span",{className:An.legendDot,style:{background:N.color}}),n.jsx("span",{className:An.legendLabel,children:N.label}),n.jsx("span",{className:An.legendValue,children:N.value.toLocaleString("en-US")})]},N.label))}),x.visible&&n.jsxs("div",{className:An.tooltip,style:{left:x.x,top:x.y},children:[n.jsx("span",{className:An.tooltipLabel,children:x.label}),n.jsxs("span",{className:An.tooltipValueRow,children:[n.jsx("span",{className:An.tooltipDot,style:{background:x.color}}),x.value.toLocaleString("en-US")]})]})]})});Aj.displayName="RatioBar";const Tj="_track_1wmly_6",Ij="_fill_1wmly_12",Tf={track:Tj,fill:Ij},Ej=g.forwardRef(({value:e,max:o=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:s="var(--color-bg-tertiary)",gapColor:l="var(--color-bg-primary)",stripeWidth:d=2,stripeGap:h=1,height:m=12,ariaLabel:v,className:y,style:x,...w},k)=>{const $=d+h,_=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${d}px,
      ${l} ${d}px,
      ${l} ${$}px
    )`,j=Math.max(0,Math.min(o,e)),N=o>0?j/o*100:0;return n.jsx("div",{ref:k,role:"progressbar","aria-label":v??`Progress: ${Math.round(N)}%`,"aria-valuemin":0,"aria-valuemax":o,"aria-valuenow":j,className:ie(Tf.track,y),style:{height:m,background:`${_}, ${s}`,...x},...w,children:n.jsx("div",{className:Tf.fill,style:{width:`${N}%`,background:`${_}, ${i}`}})})});Ej.displayName="StripedBar";const Pj=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],zj=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function If(e,o="to right"){const i=e.map(({color:s,position:l})=>`${s} ${l}`).join(", ");return`linear-gradient(${o}, ${i})`}If(Pj),If(zj);var pt="-ms-",yi="-moz-",nt="-webkit-",Og="comm",Wl="rule",sh="decl",Oj="@import",Dj="@namespace",Dg="@keyframes",Fj="@layer",Fg=Math.abs,lh=String.fromCharCode,_u=Object.assign;function Bj(e,o){return Mt(e,0)^45?(((o<<2^Mt(e,0))<<2^Mt(e,1))<<2^Mt(e,2))<<2^Mt(e,3):0}function Bg(e){return e.trim()}function br(e,o){return(e=o.exec(e))?e[0]:e}function Fe(e,o,i){return e.replace(o,i)}function hl(e,o,i){return e.indexOf(o,i)}function Mt(e,o){return e.charCodeAt(o)|0}function $o(e,o,i){return e.slice(o,i)}function Gn(e){return e.length}function Hg(e){return e.length}function mi(e,o){return o.push(e),e}function Hj(e,o){return e.map(o).join("")}function Ef(e,o){return e.filter(function(i){return!br(i,o)})}var Ul=1,ga=1,Wg=0,zn=0,jt=0,ja="";function ql(e,o,i,s,l,d,h,m){return{value:e,root:o,parent:i,type:s,props:l,children:d,line:Ul,column:ga,length:h,return:"",siblings:m}}function Kr(e,o){return _u(ql("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},o)}function ia(e){for(;e.root;)e=Kr(e.root,{children:[e]});mi(e,e.siblings)}function Wj(){return jt}function Uj(){return jt=zn>0?Mt(ja,--zn):0,ga--,jt===10&&(ga=1,Ul--),jt}function Kn(){return jt=zn<Wg?Mt(ja,zn++):0,ga++,jt===10&&(ga=1,Ul++),jt}function Xr(){return Mt(ja,zn)}function pl(){return zn}function Vl(e,o){return $o(ja,e,o)}function ji(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qj(e){return Ul=ga=1,Wg=Gn(ja=e),zn=0,[]}function Vj(e){return ja="",e}function Yd(e){return Bg(Vl(zn-1,Cu(e===91?e+2:e===40?e+1:e)))}function Gj(e){for(;(jt=Xr())&&jt<33;)Kn();return ji(e)>2||ji(jt)>3?"":" "}function Yj(e,o){for(;--o&&Kn()&&!(jt<48||jt>102||jt>57&&jt<65||jt>70&&jt<97););return Vl(e,pl()+(o<6&&Xr()==32&&Kn()==32))}function Cu(e){for(;Kn();)switch(jt){case e:return zn;case 34:case 39:e!==34&&e!==39&&Cu(jt);break;case 40:e===41&&Cu(e);break;case 92:Kn();break}return zn}function Kj(e,o){for(;Kn()&&e+jt!==57;)if(e+jt===84&&Xr()===47)break;return"/*"+Vl(o,zn-1)+"*"+lh(e===47?e:Kn())}function Qj(e){for(;!ji(Xr());)Kn();return Vl(e,zn)}function Zj(e){return Vj(fl("",null,null,null,[""],e=qj(e),0,[0],e))}function fl(e,o,i,s,l,d,h,m,v){for(var y=0,x=0,w=h,k=0,$=0,_=0,j=1,N=1,M=1,C=0,S="",P=l,R=d,L=s,A=S;N;)switch(_=C,C=Kn()){case 40:if(_!=108&&Mt(A,w-1)==58){hl(A+=Fe(Yd(C),"&","&\f"),"&\f",Fg(y?m[y-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:A+=Yd(C);break;case 9:case 10:case 13:case 32:A+=Gj(_);break;case 92:A+=Yj(pl()-1,7);continue;case 47:switch(Xr()){case 42:case 47:mi(Xj(Kj(Kn(),pl()),o,i,v),v),(ji(_||1)==5||ji(Xr()||1)==5)&&Gn(A)&&$o(A,-1,void 0)!==" "&&(A+=" ");break;default:A+="/"}break;case 123*j:m[y++]=Gn(A)*M;case 125*j:case 59:case 0:switch(C){case 0:case 125:N=0;case 59+x:M==-1&&(A=Fe(A,/\f/g,"")),$>0&&(Gn(A)-w||j===0&&_===47)&&mi($>32?zf(A+";",s,i,w-1,v):zf(Fe(A," ","")+";",s,i,w-2,v),v);break;case 59:A+=";";default:if(mi(L=Pf(A,o,i,y,x,l,m,S,P=[],R=[],w,d),d),C===123)if(x===0)fl(A,o,L,L,P,d,w,m,R);else{switch(k){case 99:if(Mt(A,3)===110)break;case 108:if(Mt(A,2)===97)break;default:x=0;case 100:case 109:case 115:}x?fl(e,L,L,s&&mi(Pf(e,L,L,0,0,l,m,S,l,P=[],w,R),R),l,R,w,m,s?P:R):fl(A,L,L,L,[""],R,0,m,R)}}y=x=$=0,j=M=1,S=A="",w=h;break;case 58:w=1+Gn(A),$=_;default:if(j<1){if(C==123)--j;else if(C==125&&j++==0&&Uj()==125)continue}switch(A+=lh(C),C*j){case 38:M=x>0?1:(A+="\f",-1);break;case 44:m[y++]=(Gn(A)-1)*M,M=1;break;case 64:Xr()===45&&(A+=Yd(Kn())),k=Xr(),x=w=Gn(S=A+=Qj(pl())),C++;break;case 45:_===45&&Gn(A)==2&&(j=0)}}return d}function Pf(e,o,i,s,l,d,h,m,v,y,x,w){for(var k=l-1,$=l===0?d:[""],_=Hg($),j=0,N=0,M=0;j<s;++j)for(var C=0,S=$o(e,k+1,k=Fg(N=h[j])),P=e;C<_;++C)(P=Bg(N>0?$[C]+" "+S:Fe(S,/&\f/g,$[C])))&&(v[M++]=P);return ql(e,o,i,l===0?Wl:m,v,y,x,w)}function Xj(e,o,i,s){return ql(e,o,i,Og,lh(Wj()),$o(e,2,-2),0,s)}function zf(e,o,i,s,l){return ql(e,o,i,sh,$o(e,0,s),$o(e,s+1,-1),s,l)}function Ug(e,o,i){switch(Bj(e,o)){case 5103:return nt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return nt+e+e;case 4855:return nt+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return yi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return nt+e+yi+e+pt+e+e;case 5936:switch(Mt(e,o+11)){case 114:return nt+e+pt+Fe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return nt+e+pt+Fe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return nt+e+pt+Fe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return nt+e+pt+e+e;case 6165:return nt+e+pt+"flex-"+e+e;case 5187:return nt+e+Fe(e,/(\w+).+(:[^]+)/,nt+"box-$1$2"+pt+"flex-$1$2")+e;case 5443:return nt+e+pt+"flex-item-"+Fe(e,/flex-|-self/g,"")+(br(e,/flex-|baseline/)?"":pt+"grid-row-"+Fe(e,/flex-|-self/g,""))+e;case 4675:return nt+e+pt+"flex-line-pack"+Fe(e,/align-content|flex-|-self/g,"")+e;case 5548:return nt+e+pt+Fe(e,"shrink","negative")+e;case 5292:return nt+e+pt+Fe(e,"basis","preferred-size")+e;case 6060:return nt+"box-"+Fe(e,"-grow","")+nt+e+pt+Fe(e,"grow","positive")+e;case 4554:return nt+Fe(e,/([^-])(transform)/g,"$1"+nt+"$2")+e;case 6187:return Fe(Fe(Fe(e,/(zoom-|grab)/,nt+"$1"),/(image-set)/,nt+"$1"),e,"")+e;case 5495:case 3959:return Fe(e,/(image-set\([^]*)/,nt+"$1$`$1");case 4968:return Fe(Fe(e,/(.+:)(flex-)?(.*)/,nt+"box-pack:$3"+pt+"flex-pack:$3"),/space-between/,"justify")+nt+e+e;case 4200:if(!br(e,/flex-|baseline/))return pt+"grid-column-align"+$o(e,o)+e;break;case 2592:case 3360:return pt+Fe(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(s,l){return o=l,br(s.props,/grid-\w+-end/)})?~hl(e+(i=i[o].value),"span",0)?e:pt+Fe(e,"-start","")+e+pt+"grid-row-span:"+(~hl(i,"span",0)?br(i,/\d+/):+br(i,/\d+/)-+br(e,/\d+/))+";":pt+Fe(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(s){return br(s.props,/grid-\w+-start/)})?e:pt+Fe(Fe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Fe(e,/(.+)-inline(.+)/,nt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Gn(e)-1-o>6)switch(Mt(e,o+1)){case 109:if(Mt(e,o+4)!==45)break;case 102:return Fe(e,/(.+:)(.+)-([^]+)/,"$1"+nt+"$2-$3$1"+yi+(Mt(e,o+3)==108?"$3":"$2-$3"))+e;case 115:return~hl(e,"stretch",0)?Ug(Fe(e,"stretch","fill-available"),o,i)+e:e}break;case 5152:case 5920:return Fe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,d,h,m,v,y){return pt+l+":"+d+y+(h?pt+l+"-span:"+(m?v:+v-+d)+y:"")+e});case 4949:if(Mt(e,o+6)===121)return Fe(e,":",":"+nt)+e;break;case 6444:switch(Mt(e,Mt(e,14)===45?18:11)){case 120:return Fe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+nt+(Mt(e,14)===45?"inline-":"")+"box$3$1"+nt+"$2$3$1"+pt+"$2box$3")+e;case 100:return Fe(e,":",":"+pt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Fe(e,"scroll-","scroll-snap-")+e}return e}function Cl(e,o){for(var i="",s=0;s<e.length;s++)i+=o(e[s],s,e,o)||"";return i}function Jj(e,o,i,s){switch(e.type){case Fj:if(e.children.length)break;case Oj:case Dj:case sh:return e.return=e.return||e.value;case Og:return"";case Dg:return e.return=e.value+"{"+Cl(e.children,s)+"}";case Wl:if(!Gn(e.value=e.props.join(",")))return""}return Gn(i=Cl(e.children,s))?e.return=e.value+"{"+i+"}":""}function eS(e){var o=Hg(e);return function(i,s,l,d){for(var h="",m=0;m<o;m++)h+=e[m](i,s,l,d)||"";return h}}function tS(e){return function(o){o.root||(o=o.return)&&e(o)}}function nS(e,o,i,s){if(e.length>-1&&!e.return)switch(e.type){case sh:e.return=Ug(e.value,e.length,i);return;case Dg:return Cl([Kr(e,{value:Fe(e.value,"@","@"+nt)})],s);case Wl:if(e.length)return Hj(i=e.props,function(l){switch(br(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ia(Kr(e,{props:[Fe(l,/:(read-\w+)/,":"+yi+"$1")]})),ia(Kr(e,{props:[l]})),_u(e,{props:Ef(i,s)});break;case"::placeholder":ia(Kr(e,{props:[Fe(l,/:(plac\w+)/,":"+nt+"input-$1")]})),ia(Kr(e,{props:[Fe(l,/:(plac\w+)/,":"+yi+"$1")]})),ia(Kr(e,{props:[Fe(l,/:(plac\w+)/,pt+"input-$1")]})),ia(Kr(e,{props:[l]})),_u(e,{props:Ef(i,s)});break}return""})}}var da={},Kd,Qd;const va=typeof process<"u"&&da!==void 0&&(da.REACT_APP_SC_ATTR||da.SC_ATTR)||"data-styled",qg="active",Vg="data-styled-version",Gl="6.4.2",ch=`/*!sc*/
`,wi=typeof window<"u"&&typeof document<"u";function Of(e){if(typeof process<"u"&&da!==void 0){const o=da[e];if(o!==void 0&&o!=="")return o!=="false"}}const rS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Qd=(Kd=Of("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Kd!==void 0?Kd:Of("SC_DISABLE_SPEEDY"))!==null&&Qd!==void 0?Qd:typeof process<"u"&&da!==void 0&&!1),Gg="sc-keyframes-",oS={};function Ei(e,...o){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${o.length>0?` Args: ${o.join(", ")}`:""}`)}let ml=new Map,jl=new Map,gl=1;const gi=e=>{if(ml.has(e))return ml.get(e);for(;jl.has(gl);)gl++;const o=gl++;return ml.set(e,o),jl.set(o,e),o},aS=e=>jl.get(e),iS=(e,o)=>{gl=o+1,ml.set(e,o),jl.set(o,e)},dh=Object.freeze([]),xa=Object.freeze({});function Yg(e,o,i=xa){return e.theme!==i.theme&&e.theme||o||i.theme}const sS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lS=/(^-|-$)/g;function Kg(e){return e.replace(sS,"-").replace(lS,"")}const cS=/(a)(d)/gi,Df=e=>String.fromCharCode(e+(e>25?39:97));function uh(e){let o,i="";for(o=Math.abs(e);o>52;o=o/52|0)i=Df(o%52)+i;return(Df(o%52)+i).replace(cS,"$1-$2")}const ju=5381,So=(e,o)=>{let i=o.length;for(;i;)e=33*e^o.charCodeAt(--i);return e},Qg=e=>So(ju,e);function hh(e){return uh(Qg(e)>>>0)}function dS(e){return e.displayName||e.name||"Component"}function Su(e){return typeof e=="string"&&!0}function uS(e){return Su(e)?`styled.${e}`:`Styled(${dS(e)})`}const Zg=Symbol.for("react.memo"),hS=Symbol.for("react.forward_ref"),pS={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},fS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mS={[hS]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Zg]:Xg};function Ff(e){return("type"in(o=e)&&o.type.$$typeof)===Zg?Xg:"$$typeof"in e?mS[e.$$typeof]:pS;var o}const gS=Object.defineProperty,vS=Object.getOwnPropertyNames,xS=Object.getOwnPropertySymbols,yS=Object.getOwnPropertyDescriptor,wS=Object.getPrototypeOf,bS=Object.prototype;function Jg(e,o,i){if(typeof o!="string"){const s=wS(o);s&&s!==bS&&Jg(e,s,i);const l=vS(o).concat(xS(o)),d=Ff(e),h=Ff(o);for(let m=0;m<l.length;++m){const v=l[m];if(!(v in fS||i&&i[v]||h&&v in h||d&&v in d)){const y=yS(o,v);try{gS(e,v,y)}catch{}}}}return e}function Pi(e){return typeof e=="function"}const kS=Symbol.for("react.forward_ref");function ph(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===kS&&"styledComponentId"in e}function vi(e,o){return e&&o?e+" "+o:e||o||""}function Sl(e,o){return e.join("")}function Si(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function $u(e,o,i=!1){if(!i&&!Si(e)&&!Array.isArray(e))return o;if(Array.isArray(o))for(let s=0;s<o.length;s++)e[s]=$u(e[s],o[s]);else if(Si(o))for(const s in o)e[s]=$u(e[s],o[s]);return e}function fh(e,o){Object.defineProperty(e,"toString",{value:o})}const _S=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let o=this._cIndex;if(e>this._cGroup)for(let i=this._cGroup;i<e;i++)o+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=e;i--)o-=this.groupSizes[i];return this._cGroup=e,this._cIndex=o,o}insertRules(e,o){if(e>=this.groupSizes.length){const l=this.groupSizes,d=l.length;let h=d;for(;e>=h;)if(h<<=1,h<0)throw Ei(16,`${e}`);this.groupSizes=new Uint32Array(h),this.groupSizes.set(l),this.length=h;for(let m=d;m<h;m++)this.groupSizes[m]=0}let i=this.indexOfGroup(e+1),s=0;for(let l=0,d=o.length;l<d;l++)this.tag.insertRule(i,o[l])&&(this.groupSizes[e]++,i++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)}clearGroup(e){if(e<this.length){const o=this.groupSizes[e],i=this.indexOfGroup(e),s=i+o;this.groupSizes[e]=0;for(let l=i;l<s;l++)this.tag.deleteRule(i);o>0&&this._cGroup>e&&(this._cIndex-=o)}}getGroup(e){let o="";if(e>=this.length||this.groupSizes[e]===0)return o;const i=this.groupSizes[e],s=this.indexOfGroup(e),l=s+i;for(let d=s;d<l;d++)o+=this.tag.getRule(d)+ch;return o}},CS=`style[${va}][${Vg}="${Gl}"]`,jS=new RegExp(`^${va}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Bf=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Mu=e=>{if(!e)return document;if(Bf(e))return e;if("getRootNode"in e){const o=e.getRootNode();if(Bf(o))return o}return document},SS=(e,o,i)=>{const s=i.split(",");let l;for(let d=0,h=s.length;d<h;d++)(l=s[d])&&e.registerName(o,l)},$S=(e,o)=>{var i;const s=((i=o.textContent)!==null&&i!==void 0?i:"").split(ch),l=[];for(let d=0,h=s.length;d<h;d++){const m=s[d].trim();if(!m)continue;const v=m.match(jS);if(v){const y=0|parseInt(v[1],10),x=v[2];y!==0&&(iS(x,y),SS(e,x,v[3]),e.getTag().insertRules(y,l)),l.length=0}else l.push(m)}},Zd=e=>{const o=Mu(e.options.target).querySelectorAll(CS);for(let i=0,s=o.length;i<s;i++){const l=o[i];l&&l.getAttribute(va)!==qg&&($S(e,l),l.parentNode&&l.parentNode.removeChild(l))}};let di=!1;function MS(){if(di!==!1)return di;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return di=e.nonce||e.getAttribute("content")||void 0;const o=document.head.querySelector('meta[name="sc-nonce"]');if(o)return di=o.getAttribute("content")||void 0}return di=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const e2=(e,o)=>{const i=document.head,s=e||i,l=document.createElement("style"),d=(v=>{const y=Array.from(v.querySelectorAll(`style[${va}]`));return y[y.length-1]})(s),h=d!==void 0?d.nextSibling:null;l.setAttribute(va,qg),l.setAttribute(Vg,Gl);const m=o||MS();return m&&l.setAttribute("nonce",m),s.insertBefore(l,h),l},RS=class{constructor(e,o){this.element=e2(e,o),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var s;if(i.sheet)return i.sheet;const l=(s=i.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let d=0,h=l.length;d<h;d++){const m=l[d];if(m.ownerNode===i)return m}throw Ei(17)})(this.element),this.length=0}insertRule(e,o){try{return this.sheet.insertRule(o,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const o=this.sheet.cssRules[e];return o&&o.cssText?o.cssText:""}},NS=class{constructor(e,o){this.element=e2(e,o),this.nodes=this.element.childNodes,this.length=0}insertRule(e,o){if(e<=this.length&&e>=0){const i=document.createTextNode(o);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Hf=wi;const LS={isServer:!wi,useCSSOMInjection:!rS};class zi{static registerId(o){return gi(o)}constructor(o=xa,i={},s){this.options=Object.assign(Object.assign({},LS),o),this.gs=i,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!o.isServer,!this.server&&wi&&Hf&&(Hf=!1,Zd(this)),fh(this,()=>(l=>{const d=l.getTag(),{length:h}=d;let m="";for(let v=0;v<h;v++){const y=aS(v);if(y===void 0)continue;const x=l.names.get(y);if(x===void 0||!x.size)continue;const w=d.getGroup(v);if(w.length===0)continue;const k=va+".g"+v+'[id="'+y+'"]';let $="";for(const _ of x)_.length>0&&($+=_+",");m+=w+k+'{content:"'+$+'"}'+ch}return m})(this))}rehydrate(){!this.server&&wi&&Zd(this)}reconstructWithOptions(o,i=!0){const s=new zi(Object.assign(Object.assign({},this.options),o),this.gs,i&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&wi&&o.target!==this.options.target&&Mu(this.options.target)!==Mu(o.target)&&Zd(s),s}allocateGSInstance(o){return this.gs[o]=(this.gs[o]||0)+1}getTag(){return this.tag||(this.tag=(o=(({useCSSOMInjection:i,target:s,nonce:l})=>i?new RS(s,l):new NS(s,l))(this.options),new _S(o)));var o}hasNameForId(o,i){var s,l;return(l=(s=this.names.get(o))===null||s===void 0?void 0:s.has(i))!==null&&l!==void 0&&l}registerName(o,i){gi(o),o.startsWith(Gg)&&this.keyframeIds.add(o);const s=this.names.get(o);s?s.add(i):this.names.set(o,new Set([i]))}insertRules(o,i,s){this.registerName(o,i),this.getTag().insertRules(gi(o),s)}clearNames(o){this.names.has(o)&&this.names.get(o).clear()}clearRules(o){this.getTag().clearGroup(gi(o)),this.clearNames(o)}clearTag(){this.tag=void 0}}const t2=new WeakSet,AS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function TS(e,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||e in AS||e.startsWith("--")?String(o).trim():o+"px"}const _o=47;function Wf(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let o="";for(let i=0;i<e.length;i++){const s=e.charCodeAt(i);o+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):e[i]}return o.startsWith("ms-")?"-"+o:o}const n2=Symbol.for("sc-keyframes");function IS(e){return typeof e=="object"&&e!==null&&n2 in e}function r2(e){return Pi(e)&&!(e.prototype&&e.prototype.isReactComponent)}const o2=e=>e==null||e===!1||e==="",ES=Symbol.for("react.client.reference");function Uf(e){return e.$$typeof===ES}function a2(e,o){for(const i in e){const s=e[i];e.hasOwnProperty(i)&&!o2(s)&&(Array.isArray(s)&&t2.has(s)||Pi(s)?o.push(Wf(i)+":",s,";"):Si(s)?(o.push(i+" {"),a2(s,o),o.push("}")):o.push(Wf(i)+": "+TS(i,s)+";"))}}function to(e,o,i,s,l=[]){if(o2(e))return l;const d=typeof e;if(d==="string")return l.push(e),l;if(d==="function"){if(Uf(e))return l;if(r2(e)&&o){const h=e(o);return to(h,o,i,s,l)}return l.push(e),l}if(Array.isArray(e)){for(let h=0;h<e.length;h++)to(e[h],o,i,s,l);return l}return ph(e)?(l.push(`.${e.styledComponentId}`),l):IS(e)?(i?(e.inject(i,s),l.push(e.getName(s))):l.push(e),l):Uf(e)?l:Si(e)?e.toString!==Object.prototype.toString?(l.push(e.toString()),l):(a2(e,l),l):(l.push(e.toString()),l)}const PS=Qg(Gl);class zS{constructor(o,i,s){this.rules=o,this.componentId=i,this.baseHash=So(PS,i),this.baseStyle=s,zi.registerId(i)}generateAndInjectStyles(o,i,s){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,i,s):"";{let d="";for(let h=0;h<this.rules.length;h++){const m=this.rules[h];if(typeof m=="string")d+=m;else if(m)if(r2(m)){const v=m(o);typeof v=="string"?d+=v:v!=null&&v!==!1&&(d+=Sl(to(v,o,i,s)))}else d+=Sl(to(m,o,i,s))}if(d){this.dynamicNameCache||(this.dynamicNameCache=new Map);const h=s.hash?s.hash+d:d;let m=this.dynamicNameCache.get(h);if(!m){if(m=uh(So(So(this.baseHash,s.hash),d)>>>0),this.dynamicNameCache.size>=200){const v=this.dynamicNameCache.keys().next().value;v!==void 0&&this.dynamicNameCache.delete(v)}this.dynamicNameCache.set(h,m)}if(!i.hasNameForId(this.componentId,m)){const v=s(d,"."+m,void 0,this.componentId);i.insertRules(this.componentId,m,v)}l=vi(l,m)}}return l}}const OS=/&/g;function i2(e,o){let i=0;for(;--o>=0&&e.charCodeAt(o)===92;)i++;return!(1&~i)}function Xd(e){const o=e.length;let i="",s=0,l=0,d=0,h=!1,m=!1;for(let v=0;v<o;v++){const y=e.charCodeAt(v);if(d!==0||h||y!==_o||e.charCodeAt(v+1)!==42)if(h)y===42&&e.charCodeAt(v+1)===_o&&(h=!1,v++);else if(y!==34&&y!==39||i2(e,v)){if(d===0)if(y===123)l++;else if(y===125){if(l--,l<0){m=!0;let x=v+1;for(;x<o;){const w=e.charCodeAt(x);if(w===59||w===10)break;x++}x<o&&e.charCodeAt(x)===59&&x++,l=0,v=x-1,s=x;continue}l===0&&(i+=e.substring(s,v+1),s=v+1)}else y===59&&l===0&&(i+=e.substring(s,v+1),s=v+1)}else d===0?d=y:d===y&&(d=0);else h=!0,v++}return m||l!==0||d!==0?(s<o&&l===0&&d===0&&(i+=e.substring(s)),i):e}function s2(e,o){const i=o+" ",s=","+i;for(let l=0;l<e.length;l++){const d=e[l];if(d.type==="rule"){d.value=(i+d.value).replaceAll(",",s);const h=d.props,m=[];for(let v=0;v<h.length;v++)m[v]=i+h[v];d.props=m}Array.isArray(d.children)&&d.type!=="@keyframes"&&s2(d.children,o)}return e}function DS({options:e=xa,plugins:o=dh}=xa){let i,s,l;const d=(k,$,_)=>_.startsWith(s)&&_.endsWith(s)&&_.replaceAll(s,"").length>0?`.${i}`:k,h=o.slice();h.push(k=>{k.type===Wl&&k.value.includes("&")&&(l||(l=new RegExp(`\\${s}\\b`,"g")),k.props[0]=k.props[0].replace(OS,s).replace(l,d))}),e.prefix&&h.push(nS),h.push(Jj);let m=[];const v=eS(h.concat(tS(k=>m.push(k)))),y=(k,$="",_="",j="&")=>{i=j,s=$,l=void 0;const N=(function(C){const S=C.indexOf("//")!==-1,P=C.indexOf("}")!==-1;if(!S&&!P)return C;if(!S)return Xd(C);const R=C.length;let L="",A=0,E=0,B=0,G=0,Q=0,U=!1;for(;E<R;){const Y=C.charCodeAt(E);if(Y!==34&&Y!==39||i2(C,E))if(B===0)if(Y===_o&&E+1<R&&C.charCodeAt(E+1)===42){for(E+=2;E+1<R&&(C.charCodeAt(E)!==42||C.charCodeAt(E+1)!==_o);)E++;E+=2}else if(Y!==40)if(Y!==41)if(G>0)E++;else if(Y===42&&E+1<R&&C.charCodeAt(E+1)===_o)L+=C.substring(A,E),E+=2,A=E,U=!0;else if(Y===_o&&E+1<R&&C.charCodeAt(E+1)===_o){for(L+=C.substring(A,E);E<R&&C.charCodeAt(E)!==10;)E++;A=E,U=!0}else Y===123?Q++:Y===125&&Q--,E++;else G>0&&G--,E++;else G++,E++;else E++;else B===0?B=Y:B===Y&&(B=0),E++}return U?(A<R&&(L+=C.substring(A)),Q===0?L:Xd(L)):Q===0?C:Xd(C)})(k);let M=Zj(_||$?_+" "+$+" { "+N+" }":N);return e.namespace&&(M=s2(M,e.namespace)),m=[],Cl(M,v),m},x=e;let w=ju;for(let k=0;k<o.length;k++)o[k].name||Ei(15),w=So(w,o[k].name);return x!=null&&x.namespace&&(w=So(w,x.namespace)),x!=null&&x.prefix&&(w=So(w,"p")),y.hash=w!==ju?w.toString():"",y}const FS=new zi,Ru=DS(),l2=cn.createContext({shouldForwardProp:void 0,styleSheet:FS,stylis:Ru,stylisPlugins:void 0});l2.Consumer;function c2(){return cn.useContext(l2)}const mh=cn.createContext(void 0);mh.Consumer;const qf=Object.prototype.hasOwnProperty,Jd={};function BS(e,o){const i=typeof e!="string"?"sc":Kg(e);Jd[i]=(Jd[i]||0)+1;const s=i+"-"+hh(Gl+i+Jd[i]);return o?o+"-"+s:s}function HS(e,o,i){const s=ph(e),l=e,d=!Su(e),{attrs:h=dh,componentId:m=BS(o.displayName,o.parentComponentId),displayName:v=uS(e)}=o,y=o.displayName&&o.componentId?Kg(o.displayName)+"-"+o.componentId:o.componentId||m,x=s&&l.attrs?l.attrs.concat(h).filter(Boolean):h;let{shouldForwardProp:w}=o;if(s&&l.shouldForwardProp){const j=l.shouldForwardProp;if(o.shouldForwardProp){const N=o.shouldForwardProp;w=(M,C)=>j(M,C)&&N(M,C)}else w=j}const k=new zS(i,y,s?l.componentStyle:void 0);function $(j,N){return(function(M,C,S){const{attrs:P,componentStyle:R,defaultProps:L,foldedComponentIds:A,styledComponentId:E,target:B}=M,G=cn.useContext(mh),Q=c2(),U=M.shouldForwardProp||Q.shouldForwardProp,Y=Yg(C,G,L)||xa;let ee,oe;{const D=cn.useRef(null),W=D.current;if(W!==null&&W[1]===Y&&W[2]===Q.styleSheet&&W[3]===Q.stylis&&W[7]===R&&(function(T,O,ne){const q=T,X=O;let se=0;for(const F in X)if(qf.call(X,F)&&(se++,q[F]!==X[F]))return!1;return se===ne})(W[0],C,W[4]))ee=W[5],oe=W[6];else{ee=(function(O,ne,q){const X=Object.assign(Object.assign({},ne),{className:void 0,theme:q}),se=O.length>1;for(let F=0;F<O.length;F++){const z=O[F],ae=Pi(z)?z(se?Object.assign({},X):X):z;for(const me in ae)me==="className"?X.className=vi(X.className,ae[me]):me==="style"?X.style=Object.assign(Object.assign({},X.style),ae[me]):me in ne&&ne[me]===void 0||(X[me]=ae[me])}return"className"in ne&&typeof ne.className=="string"&&(X.className=vi(X.className,ne.className)),X})(P,C,Y),oe=(function(O,ne,q,X){return O.generateAndInjectStyles(ne,q,X)})(R,ee,Q.styleSheet,Q.stylis);let T=0;for(const O in C)qf.call(C,O)&&T++;D.current=[C,Y,Q.styleSheet,Q.stylis,T,ee,oe,R]}}const ce=ee.as||B,le=(function(D,W,T,O){const ne={};for(const q in D)D[q]===void 0||q[0]==="$"||q==="as"||q==="theme"&&D.theme===T||(q==="forwardedAs"?ne.as=D.forwardedAs:O&&!O(q,W)||(ne[q]=D[q]));return ne})(ee,ce,Y,U);let K=vi(A,E);return oe&&(K+=" "+oe),ee.className&&(K+=" "+ee.className),le[Su(ce)&&ce.includes("-")?"class":"className"]=K,S&&(le.ref=S),g.createElement(ce,le)})(_,j,N)}$.displayName=v;let _=cn.forwardRef($);return _.attrs=x,_.componentStyle=k,_.displayName=v,_.shouldForwardProp=w,_.foldedComponentIds=s?vi(l.foldedComponentIds,l.styledComponentId):"",_.styledComponentId=y,_.target=s?l.target:e,Object.defineProperty(_,"defaultProps",{get(){return this._foldedDefaultProps},set(j){this._foldedDefaultProps=s?(function(N,...M){for(const C of M)$u(N,C,!0);return N})({},l.defaultProps,j):j}}),fh(_,()=>`.${_.styledComponentId}`),d&&Jg(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}var WS=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Vf(e,o){const i=[e[0]];for(let s=0,l=o.length;s<l;s+=1)i.push(o[s],e[s+1]);return i}const Gf=e=>(t2.add(e),e);function qe(e,...o){if(Pi(e)||Si(e))return Gf(to(Vf(dh,[e,...o])));const i=e;return o.length===0&&i.length===1&&typeof i[0]=="string"?to(i):Gf(to(Vf(i,o)))}function Nu(e,o,i=xa){if(!o)throw Ei(1,o);const s=(l,...d)=>e(o,i,qe(l,...d));return s.attrs=l=>Nu(e,o,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)})),s.withConfig=l=>Nu(e,o,Object.assign(Object.assign({},i),l)),s}const d2=e=>Nu(HS,e),p=d2;WS.forEach(e=>{p[e]=d2(e)});class US{constructor(o,i){this.instanceRules=new Map,this.rules=o,this.componentId=i,this.isStatic=(function(s){for(let l=0;l<s.length;l+=1){const d=s[l];if(Pi(d)&&!ph(d))return!1}return!0})(o),zi.registerId(this.componentId)}removeStyles(o,i){this.instanceRules.delete(o),this.rebuildGroup(i)}renderStyles(o,i,s,l){const d=this.componentId;if(this.isStatic){if(s.hasNameForId(d,d+o))this.instanceRules.has(o)||this.computeRules(o,i,s,l);else{const m=this.computeRules(o,i,s,l);s.insertRules(d,m.name,m.rules)}return}const h=this.instanceRules.get(o);if(this.computeRules(o,i,s,l),!s.server&&h){const m=h.rules,v=this.instanceRules.get(o).rules;if(m.length===v.length){let y=!0;for(let x=0;x<m.length;x++)if(m[x]!==v[x]){y=!1;break}if(y)return}}this.rebuildGroup(s)}computeRules(o,i,s,l){const d=Sl(to(this.rules,i,s,l)),h={name:this.componentId+o,rules:l(d,"")};return this.instanceRules.set(o,h),h}rebuildGroup(o){const i=this.componentId;o.clearRules(i);for(const s of this.instanceRules.values())o.insertRules(i,s.name,s.rules)}}function qS(e,...o){const i=qe(e,...o),s=`sc-global-${hh(JSON.stringify(i))}`,l=new US(i,s),d=m=>{const v=c2(),y=cn.useContext(mh);let x;{const w=cn.useRef(null);w.current===null&&(w.current=v.styleSheet.allocateGSInstance(s)),x=w.current}v.styleSheet.server&&h(x,m,v.styleSheet,y,v.stylis);{const w=l.isStatic?[x,v.styleSheet,l]:[x,m,v.styleSheet,y,v.stylis,l],k=cn.useRef(l);cn.useLayoutEffect(()=>{v.styleSheet.server||(k.current!==l&&(v.styleSheet.clearRules(s),k.current=l),h(x,m,v.styleSheet,y,v.stylis))},w),cn.useLayoutEffect(()=>()=>{v.styleSheet.server||l.removeStyles(x,v.styleSheet)},[x,v.styleSheet,l])}return v.styleSheet.server&&l.instanceRules.delete(x),null};function h(m,v,y,x,w){if(l.isStatic)l.renderStyles(m,oS,y,w);else{const k=Object.assign(Object.assign({},v),{theme:Yg(v,x,d.defaultProps)});l.renderStyles(m,k,y,w)}}return cn.memo(d)}var u2;class VS{constructor(o,i){this[u2]=!0,this.inject=(s,l=Ru)=>{const d=this.getName(l);if(!s.hasNameForId(this.id,d)){const h=l(this.rules,d,"@keyframes");s.insertRules(this.id,d,h)}},this.name=o,this.id=Gg+o,this.rules=i,gi(this.id),fh(this,()=>{throw Ei(12,String(this.name))})}getName(o=Ru){return o.hash?this.name+uh(+o.hash>>>0):this.name}}function je(e,...o){const i=Sl(qe(e,...o)),s=hh(i);return new VS(s,i)}u2=n2;const h2=[{workforce_type:"Healthcare / Clinical Staffing",company:{name:"Favorite Healthcare Staffing",founded:1981,parent:"Acacium Group",market_position:"Top-10 US healthcare staffing firm",footprint:"US, Europe, Australia"},worker_types:["Per diem","Travel","Contract / temp-to-perm","Permanent / direct hire"],talent_categories:["Nursing (RN/LPN/CNA)","Allied Health","Non-Clinical","Advanced Practice","Emergency Response"],client_types:["Hospitals","Acute care systems","Surgery centers","Senior living / long-term care","School-based settings"],service_models:["MSP","VMS","Float pool management","Human Capital Management"],tech_footprint:["Worker ATS","Client portal (FMS)","Affiliate vendor portal","Worker mobile app (time/pay)"],access_model:["Workers","Clients","Affiliate vendors"],compliance:["Joint Commission","Credentialing","Immunization tracking","OSHA","Facility-specific training"],narrative:[{label:"Business",body:"Healthcare staffing with per diem, travel, contract, and permanent placements — plus MSP and vendor management programs. I've set up scheduling and pay structures for each, with room for client facilities and affiliate vendors, not just workers.",tags:["Per diem","Travel","Contract","Permanent","MSP / VMS"]},{label:"Workforce",body:"RNs, CNAs, LPNs, allied health, advanced practice, and non-clinical roles — nationwide, 24/7, and mobile-first. Shifts, timecards, and urgent fills all work from a phone.",tags:["RN / LPN / CNA","Allied health","Advanced practice","Non-clinical"]},{label:"Compliance",body:"Credentialing is core to how you operate. I'm tracking licenses across states, compact nursing licenses included, with expirations covered.",tags:["Credentialing","Compact licenses","Immunizations","Joint Commission"]}],configured:["Scheduling for per diem, travel, contract, and permanent placements","Credentials and licenses tracked with expirations — compact nursing included","Access for client facilities and affiliate vendors, not just workers","Shifts, timecards, and urgent fills from a phone"]},{workforce_type:"Skilled Trades / Construction Labor",company:{name:"BuildForce Trades Group",founded:1998,parent:null,market_position:"Regional trades staffing leader (Mountain West)",footprint:"US Southwest & Mountain West"},worker_types:["Day labor","Project contract","Union dispatch","Direct hire"],talent_categories:["Electricians","Welders / pipefitters","Carpenters","HVAC techs","Heavy equipment operators","General laborers"],client_types:["General contractors","Industrial plants","Commercial developers","Utilities","Municipal / public works"],service_models:["Project-based staffing","Payroll / W-2 hosting","Union hall dispatch coordination","Safety compliance management"],tech_footprint:["Dispatch board","Client project portal","Field clock-in mobile app","Certification tracker"],access_model:["Tradesworkers","Contractors / site supers","Union reps"],compliance:["OSHA 10/30","Trade licensing","Drug screening","Right-to-work / E-Verify","Site safety orientation"],narrative:[{label:"Business",body:"Skilled trades staffing across the Mountain West — day labor, project contracts, union dispatch, and direct hire. I've set up project-based scheduling with payroll hosting and union dispatch coordination built in, since a two-day pour and a six-month build don't run the same way.",tags:["Day labor","Project contract","Union dispatch","Direct hire"]},{label:"Workforce",body:"Electricians, welders, carpenters, HVAC techs, and heavy equipment operators working job sites, not desks. Dispatch, field clock-ins, and timecards all work from a phone.",tags:["Electricians","Welders","Carpenters","HVAC","Equipment operators"]},{label:"Compliance",body:"Nobody steps on a site without the right cards. I'm tracking OSHA 10/30, trade licenses, and drug screens with expirations covered, and E-Verify is built into onboarding.",tags:["OSHA 10/30","Trade licenses","Drug screening","E-Verify"]}],configured:["Project-based scheduling with union dispatch coordination","Payroll hosting for W-2 placements","OSHA 10/30 and trade licenses tracked with expirations","Field clock-ins and timecards from a phone"]},{workforce_type:"Warehouse / Logistics & Light Industrial",company:{name:"PalletPoint Workforce",founded:2011,parent:"Everline Labor Holdings",market_position:"High-volume light industrial staffing",footprint:"US national, distribution-corridor focused"},worker_types:["Temp (shift)","Temp-to-hire","Seasonal surge","Direct placement"],talent_categories:["Pickers / packers","Forklift operators","Machine operators","Sortation associates","Inventory / cycle count","Shift leads"],client_types:["3PL warehouses","E-commerce fulfillment","Manufacturers","Cold storage","Distribution centers"],service_models:["On-site managed staffing","Volume ramp / peak season","Vendor-on-premise (VOP)","Payroll processing"],tech_footprint:["Shift scheduling app","Client headcount dashboard","Kiosk / badge clock-in","Attendance & reliability scoring"],access_model:["Associates","Warehouse managers","On-site coordinators"],compliance:["Forklift certification (PIT)","I-9 / E-Verify","Safety training","Background check","Workers' comp classification"],narrative:[{label:"Business",body:"High-volume light industrial staffing — shift temps, temp-to-hire, and seasonal surge across 3PLs, fulfillment centers, and cold storage. I've set up shift-based scheduling that ramps headcount for peak season without breaking your regular fills.",tags:["Shift temps","Temp-to-hire","Seasonal surge","On-site managed"]},{label:"Workforce",body:"Pickers, packers, forklift operators, and sortation associates running around the clock. Badge and kiosk clock-ins feed attendance and reliability scoring, so no-shows surface before a client feels them.",tags:["Pickers / packers","Forklift operators","Sortation","Shift leads"]},{label:"Operations",body:"Your clients buy filled shifts, so I'm tracking fill rates and check-ins per site and keeping billing tied to verified hours. Forklift certifications and I-9s are tracked with expirations covered.",tags:["Fill rates","Site check-ins","Forklift certs","I-9 / E-Verify"]}],configured:["Shift scheduling that ramps headcount for peak season","Attendance and reliability scoring from badge clock-ins","Fill rates and check-ins tracked per site — billing tied to verified hours","Forklift certifications and I-9s tracked with expirations"]},{workforce_type:"Security / Guarding Services",company:{name:"Sentinel Guard Solutions",founded:1996,parent:null,market_position:"Contract security & manned guarding provider",footprint:"US national, metro & industrial sites"},worker_types:["Post assignment (regular)","Flex / relief pool","Event / short-term detail","Direct hire"],talent_categories:["Unarmed guards","Armed guards","Mobile patrol officers","Console / CCTV operators","Event security","Site supervisors"],client_types:["Commercial real estate","Industrial / manufacturing sites","Retail / malls","Healthcare campuses","Residential communities","Special events"],service_models:["Managed guarding contract","Post scheduling & coverage","Mobile patrol routes","Payroll & billing reconciliation","Post-order management"],tech_footprint:["Guard scheduling / post board","Client incident portal","GPS tour / checkpoint app","Incident reporting system"],access_model:["Guards / officers","Client site contacts","Field supervisors / dispatch"],compliance:["State guard license / registration","Armed permit & firearms qualification","Background check & fingerprinting","Drug screening","Post-specific training / SOPs"],narrative:[{label:"Business",body:"Contract security and manned guarding — regular posts, flex relief, mobile patrol routes, and event details. I've set up post-based scheduling alongside patrol routes, since a fixed post and a rolling route don't run the same way.",tags:["Fixed posts","Flex relief","Mobile patrol","Event details"]},{label:"Workforce",body:"Armed and unarmed guards, patrol officers, console operators, and site supervisors across metro and industrial sites. Armed and unarmed posts carry different pay rates, so I've structured pay by post type.",tags:["Armed guard","Unarmed guard","Console / CCTV","Site supervisors"]},{label:"Operations",body:"Your reputation runs on every post being covered and no ghost billing — so I'm tracking check-ins against scheduled posts, verifying who's actually on-site, and keeping billing tied to verified hours. Guard licenses and firearms qualifications are tracked with expirations covered.",tags:["Post check-ins","Verified hours","Guard licenses","Firearms quals"]}],configured:["Post-based scheduling alongside patrol routes and event details","Pay rates by post type — armed vs. unarmed","On-site check-ins tied to billing — no ghost shifts","Guard licenses and firearms qualifications tracked with expirations"]},{workforce_type:"Home Care / In-Home Support",company:{name:"Hearthside Home Care",founded:2009,parent:null,market_position:"Non-medical & skilled in-home care agency",footprint:"US regional, franchise-based"},worker_types:["Per visit / hourly","Live-in","On-call pool","Direct hire"],talent_categories:["Home health aides (HHA)","Certified nursing assistants (CNA)","Personal care aides (PCA)","Companions / homemakers","Skilled nurses (RN/LPN)","Care coordinators"],client_types:["Private-pay families","Medicaid / waiver programs","Managed care / insurers","Hospice partners","Assisted living referrals"],service_models:["Managed care scheduling","EVV-compliant visit management","Care plan administration","Payroll & claims billing","Family communication portal"],tech_footprint:["Caregiver visit / EVV mobile app","Family / client portal","Scheduling & matching system","Care plan & notes dashboard"],access_model:["Caregivers","Clients / family members","Care coordinators / case managers"],compliance:["State caregiver certification (HHA/CNA)","EVV (Electronic Visit Verification)","Background check & abuse registry","TB test / health screening","HIPAA & care plan compliance"],narrative:[{label:"Business",body:"In-home care spanning private-pay families, Medicaid waiver programs, and hospice partners. I've set up visit-based scheduling with care plans attached, since a live-in placement and an hourly visit don't run the same way.",tags:["Private pay","Medicaid / waiver","Hospice partners","Live-in"]},{label:"Workforce",body:"HHAs, CNAs, PCAs, companions, and skilled nurses working in clients' homes, matched to care plans. Visits, notes, and clock-ins all work from a phone.",tags:["HHA","CNA","PCA","Skilled nurses"]},{label:"Compliance",body:"EVV isn't optional in your world, so every clock-in doubles as visit verification and your Medicaid billing holds up. Caregiver certifications, TB screenings, and background checks are tracked with expirations covered.",tags:["EVV","Certifications","TB screening","Abuse registry"]}],configured:["Visit-based scheduling with care plans attached","EVV-compliant clock-ins on every visit — Medicaid billing holds up","Access for families and care coordinators, not just caregivers","Caregiver certifications and screenings tracked with expirations"]},{workforce_type:"Agriculture / Seasonal Labor",company:{name:"Harvest Field Labor Co.",founded:2e3,parent:null,market_position:"Seasonal agricultural & H-2A labor provider",footprint:"US agricultural regions (CA, PNW, Southeast)"},worker_types:["Seasonal / harvest crew","H-2A guest worker","Day labor","Crew lead / foreman"],talent_categories:["Field harvesters / pickers","Packing house workers","Irrigation / field techs","Equipment operators","Crew leaders","Grading / sorting staff"],client_types:["Farms & orchards","Packing / processing facilities","Vineyards","Nurseries / greenhouses","Agricultural co-ops"],service_models:["Seasonal crew staffing","H-2A program administration","Transportation & housing coordination","Piece-rate & payroll processing","Farm labor contractor (FLC) services"],tech_footprint:["Crew / field dispatch app","Grower headcount portal","Piece-rate / harvest tracking","Compliance document tracker"],access_model:["Field workers","Growers / farm managers","Crew leaders / foremen"],compliance:["H-2A / visa documentation","I-9 / work authorization","Farm Labor Contractor (FLC) license","Field sanitation & heat illness (OSHA/Cal-OSHA)","Piece-rate & minimum wage compliance"],narrative:[{label:"Business",body:"Seasonal agricultural labor with H-2A program administration — harvest crews, packing houses, and everything the season demands. I've set up crew-based scheduling with piece-rate pay built in, since a harvest crew and an hourly packing shift don't pay the same way.",tags:["Harvest crews","H-2A program","Packing houses","Piece-rate"]},{label:"Workforce",body:"Field harvesters, packing workers, equipment operators, and crew leaders who move with the season. Crews dispatch by field and report through their crew leader, all from a phone.",tags:["Harvesters","Packing workers","Equipment operators","Crew leaders"]},{label:"Compliance",body:"H-2A paperwork can sink a season, so I'm tracking visa documentation, work authorizations, and your FLC license with expirations covered. Piece-rate records stay reconciled against minimum wage automatically.",tags:["Visa docs","FLC license","Heat illness / OSHA","Wage compliance"]}],configured:["Crew-based scheduling with piece-rate pay built in","Piece-rate records reconciled against minimum wage automatically","H-2A visa documentation and FLC license tracked with expirations","Field dispatch through crew leaders, from a phone"]},{workforce_type:"Hospitality / Events Staffing",company:{name:"Grand Table Hospitality Staff",founded:2003,parent:null,market_position:"Premium events & F&B staffing",footprint:"Major US metro markets"},worker_types:["Per event / gig","On-call pool","Seasonal","Direct hire"],talent_categories:["Servers / banquet staff","Bartenders","Line / prep cooks","Housekeeping","Front desk / concierge","Event captains"],client_types:["Hotels & resorts","Catering companies","Convention centers","Restaurants","Private / corporate events"],service_models:["Event-based staffing","On-call pool management","Managed F&B labor","Payroll & tip reconciliation"],tech_footprint:["Gig scheduling app","Client event booking portal","Geo clock-in / out","Rating & rebooking system"],access_model:["Staff / gig workers","Event planners / venue managers","Agency dispatchers"],compliance:["Food handler / alcohol service permits","I-9 / work authorization","Uniform & appearance standards","Minor labor law (if applicable)","Tip credit / wage compliance"],narrative:[{label:"Business",body:"Premium events and F&B staffing — per-event gigs, on-call pools, and seasonal placements across hotels, caterers, and venues. I've set up event-based scheduling with tip reconciliation built into pay, since a gala and a hotel shift don't settle the same way.",tags:["Per-event gigs","On-call pool","Seasonal","Tip reconciliation"]},{label:"Workforce",body:"Servers, bartenders, cooks, housekeepers, and event captains working a different venue every week. Geo clock-ins confirm who is actually on-site, and your top-rated staff surface first for rebooking.",tags:["Servers","Bartenders","Cooks","Event captains"]},{label:"Operations",body:"Your clients remember who showed up polished and on time — so I'm tracking check-ins per event and keeping billing tied to verified hours. Food handler and alcohol service permits are tracked with expirations covered.",tags:["Geo clock-ins","Event check-ins","Food handler","Alcohol permits"]}],configured:["Event-based scheduling with tip reconciliation built into pay","Geo clock-ins tied to billing per event","Top-rated staff surface first for rebooking","Food handler and alcohol service permits tracked with expirations"]},{workforce_type:"Call Center / BPO Staffing",company:{name:"Vantage Contact Solutions",founded:2012,parent:null,market_position:"Contact center & back-office BPO staffing",footprint:"US + offshore (Philippines, LatAm), remote & site-based"},worker_types:["Temp (campaign)","Temp-to-hire","Seasonal surge","Direct hire","Remote / WFH agent"],talent_categories:["Inbound agents","Outbound / sales agents","Customer support reps","Technical support","Back-office / data entry","Team leads / QA"],client_types:["Telecom / utilities","Retail / e-commerce","Financial services","Healthcare payers","SaaS / tech support","Government programs"],service_models:["Campaign-based staffing","Managed contact center program","Ramp / seasonal surge","WFM (workforce management) support","Payroll & performance reporting"],tech_footprint:["Agent scheduling / WFM tool","Client program dashboard","Remote clock-in & activity monitor","QA / performance scorecards"],access_model:["Agents","Client program managers","Team leads / site supervisors"],compliance:["Background check","I-9 / work authorization","PCI-DSS (payment handling)","HIPAA (healthcare campaigns)","Data security & remote-work policy"],narrative:[{label:"Business",body:"Contact center and back-office BPO staffing, campaign by campaign — inbound, outbound, and data entry, on-site and offshore. I've set up campaign-based scheduling that handles surge ramps and time zones from the Philippines to LatAm.",tags:["Campaign staffing","Surge ramps","On-site + remote","Offshore"]},{label:"Workforce",body:"Agents, technical support reps, and team leads split between sites and work-from-home. Remote clock-ins and activity tracking keep a distributed floor visible without hovering.",tags:["Inbound agents","Outbound / sales","Tech support","Team leads / QA"]},{label:"Compliance",body:"Your campaigns touch payments and health data, so I'm tracking PCI and HIPAA requirements per campaign, not just per worker. Background checks and I-9s are covered, with expirations tracked.",tags:["PCI-DSS","HIPAA","Background checks","I-9"]}],configured:["Campaign-based scheduling across sites, time zones, and surge ramps","Remote clock-ins and activity tracking for work-from-home agents","PCI and HIPAA requirements tracked per campaign","Background checks and I-9s tracked with expirations"]}],GS=[["favorite","health","care","clinic","nurse","nursing","medical","med","rn","lpn","cna","hospital","hospice","allied","acacium","patient"],["build","trade","construct","electric","weld","pipefit","carpenter","hvac","contractor","mason","plumb","union","skilled","labor"],["warehouse","logistic","pallet","fulfillment","distribution","forklift","3pl","industrial","sortation","freight","supply"],["security","guard","sentinel","patrol","protect","protection","surveillance","cctv","safe"],["home","hearth","inhome","homecare","caregiver","companion","pca","hha","senior","elder"],["harvest","farm","field","agri","agriculture","orchard","crop","grower","vineyard","seasonal","h2a","produce"],["hospitality","event","grand","table","catering","banquet","hotel","resort","restaurant","server","bartender","concierge","venue"],["call","contact","bpo","vantage","center","telecom","agent","callcenter","support","outsource"]];function YS(e){const o=e.trim().toLowerCase().replace(/\s+/g,""),i=/^https?:\/\//.test(o)?o:`https://${o}`;try{return new URL(i).hostname.replace(/^www\./,"")}catch{return o}}function KS(e){let o=0;for(let i=0;i<e.length;i+=1)o=o*31+e.charCodeAt(i)>>>0;return o%h2.length}function QS(e){const o=YS(e);let i=-1,s=0;return GS.forEach((l,d)=>{const h=l.reduce((m,v)=>o.includes(v)?m+1:m,0);h>s&&(s=h,i=d)}),h2[i>=0?i:KS(o)]}const Ot=(e,o,i)=>Math.max(o,Math.min(i,e)),_r=e=>(e=Ot(e,0,1),e*e*(3-2*e)),no=e=>e>=48?1:e>=32?1.2:e>=24?1.5:e>=20?1.85:2.3;function an(e){const o=Math.sin(e*127.1+311.7)*43758.5453;return o-Math.floor(o)}function Lu(e){const o=(e||"#96B9FF").replace("#",""),i=parseInt(o.length===3?o.split("").map(s=>s+s).join(""):o,16);return(i>>16&255)+","+(i>>8&255)+","+(i&255)}function Yf(e,o,i){let s=i.trim();const l=s.match(/var\(\s*(--[^,)]+)/);if(l&&(s=getComputedStyle(o).getPropertyValue(l[1]).trim()||s),s.startsWith("#"))return Lu(s);e.fillStyle="#000",e.fillStyle=s;const d=e.fillStyle;if(d.startsWith("#"))return Lu(d);const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:"26,30,38"}function ZS(){const[e,o]=g.useState(()=>{try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}});return g.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-color-scheme: dark)")}catch{return}const s=d=>o(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}function XS(e){const[o,i,s]=e.split(",").map(Number);return(.299*o+.587*i+.114*s)/255}function JS(e,o){return e==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:e==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:o,glow:!0}:e==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:o,glow:!0}}const bo=["234,54,38","246,112,44","252,172,54","255,212,76"],e$="176,58,32",t$="198,158,52";function kr(e,o,i){const s=e.split(",").map(Number),l=o.split(",").map(Number);return s.map((d,h)=>Math.round(d+(l[h]-d)*i)).join(",")}function ro(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,m=d/2,y=Math.min(l,d)*.39*.2*(.9+.14*Math.sin(o*1.5)),x=e.size<24,w=Ot(e.alert??0,0,1),k=(C,S)=>C+(S-C)*w,$=.85+.15*Math.sin(o*2.2);if(!x&&e.coreHalo){if(s.save(),i.glow&&w<1){s.globalAlpha=1-w;const C=s.createRadialGradient(h,m,0,h,m,y*3);C.addColorStop(0,"rgba("+i.core+",0.55)"),C.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=C,s.beginPath(),s.arc(h,m,y*3,0,6.2832),s.fill()}else if(!i.glow){const C=y*k(3.2,3),S=s.createRadialGradient(h,m,0,h,m,C);S.addColorStop(0,"rgba("+kr(i.core,bo[1],w)+","+k(.34,.85*$)+")"),S.addColorStop(.5,"rgba("+kr(i.core,bo[2],w)+","+k(.13,.42*$)+")"),S.addColorStop(1,"rgba("+kr(i.core,bo[3],w)+",0)"),s.fillStyle=S,s.beginPath(),s.arc(h,m,C,0,6.2832),s.fill()}s.restore()}const _=i.glow?1:.95,j=Math.max(.8,y*k(1,1.5)),N=y*.1*w;s.save(),s.filter="blur("+Math.max(.4,y*k(.22,.3)).toFixed(2)+"px)";const M=s.createRadialGradient(h-N,m-N,0,h,m,j);M.addColorStop(0,"rgba("+kr(i.core,bo[0],w)+","+k(_,1)+")"),M.addColorStop(.5,"rgba("+kr(i.core,bo[1],w)+","+k(_,1)+")"),M.addColorStop(.82,"rgba("+kr(i.core,bo[2],w)+","+k(_,.97)+")"),M.addColorStop(1,"rgba("+kr(i.core,bo[3],w)+","+k(_,.72)+")"),s.fillStyle=M,s.beginPath(),s.arc(h,m,j,0,6.2832),s.fill(),s.restore()}function p2(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,m=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=[[1.35,.3],[1.05,2.4]],w=o*(y?.5:.16),k=.42,$=Math.cos(k),_=Math.sin(k),j=Math.cos(w),N=Math.sin(w),M=v*.96,C=(B,G,Q)=>{const U=B*j+Q*N,Y=-B*N+Q*j,ee=G,oe=ee*$-Y*_,le=(ee*_+Y*$+1)/2,K=.82+.18*le;return{x:h+U*M*K,y:m+oe*M*K,d:le}},S=(B,G,Q)=>{const U=Math.cos(B),Y=Math.sin(B)*Math.cos(G),ee=Math.sin(B)*Math.sin(G);return[U*Math.cos(Q)+ee*Math.sin(Q),Y,-U*Math.sin(Q)+ee*Math.cos(Q)]};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round",s.lineJoin="round";const P=e.size>=24?64:40,R=y?.9:.3,L=P,A=5.6,E=[];for(let B=0;B<x.length;B++){const G=x[B][0],Q=x[B][1],U=oe=>{const ce=S(oe,G,Q);return C(ce[0],ce[1],ce[2])},Y=B%2?1:-1,ee=B*2+Y*o*R;E.push({ptOf:U,head:ee,dir:Y,hp:U(ee)})}E.sort((B,G)=>B.hp.d-G.hp.d);for(const B of E){const G=Math.max(1.2,v*.05)*(.75+.35*B.hp.d),Q=.66*(.45+.55*B.hp.d);s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=G;let U=B.ptOf(B.head);for(let oe=1;oe<=L;oe++){const ce=oe/L,le=1-ce,K=Q*le*le,D=B.ptOf(B.head-B.dir*ce*A);K>.004&&(s.strokeStyle="rgba("+i.dot+","+K+")",s.beginPath(),s.moveTo(U.x,U.y),s.lineTo(D.x,D.y),s.stroke()),U=D}s.restore();const Y=Math.max(.9,v*.062*no(e.size)*(.65+.5*B.hp.d)),ee=.45+.55*B.hp.d;if(i.glow){const oe=s.createRadialGradient(B.hp.x,B.hp.y,0,B.hp.x,B.hp.y,Y*4.5);oe.addColorStop(0,"rgba("+i.accent+","+.3*ee+")"),oe.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=oe,s.beginPath(),s.arc(B.hp.x,B.hp.y,Y*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,ee+.1)+")",s.beginPath(),s.arc(B.hp.x,B.hp.y,Y,0,6.2832),s.fill()}ro(e,o,i),s.restore()}function n$(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,m=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=[v*.92],w=x.length,k=1,$=y?.9:.3,_=e.size>=24?56:36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let j=0;j<w;j++){const N=x[j],M=j%2?1:-1,C=6.2832/k,S=Math.min(5.6,C*.92);for(let P=0;P<k;P++){const R=j*2+M*o*$+P*C,L=h+Math.cos(R)*N,A=m+Math.sin(R)*N;s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=Math.max(1.2,v*.05);let E=L,B=A;for(let Q=1;Q<=_;Q++){const U=Q/_,Y=.62*(1-U)*(1-U),ee=R-M*U*S,oe=h+Math.cos(ee)*N,ce=m+Math.sin(ee)*N;Y>.004&&(s.strokeStyle="rgba("+i.dot+","+Y+")",s.beginPath(),s.moveTo(E,B),s.lineTo(oe,ce),s.stroke()),E=oe,B=ce}s.restore();const G=Math.max(.9,v*.062*no(e.size));if(i.glow){const Q=s.createRadialGradient(L,A,0,L,A,G*4.5);Q.addColorStop(0,"rgba("+i.accent+",0.3)"),Q.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=Q,s.beginPath(),s.arc(L,A,G*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+",1)",s.beginPath(),s.arc(L,A,G,0,6.2832),s.fill()}}ro(e,o,i),s.restore()}function Kf(e,o,i){const{ctx:s,w:l,h:d,dpr:h}=e,m=l/2,v=d/2,y=Math.min(l,d)*.39,x=e.state!=="idle",w=Ot(e.alert??0,0,1),k=y*.82,$=(D,W)=>kr(i.dot,kr(e$,t$,Ot(Math.hypot(D-m,W-v)/k,0,1)),w),_=e.size>=120,j=_?22:e.size>=32?10:e.size>=20?7:5,N=x?o*.55:o*.22,M=Math.cos(N),C=Math.sin(N),S=.42,P=Math.cos(S),R=Math.sin(S);if(s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",_&&i.glow){const D=s.createRadialGradient(m,v,0,m,v,y*1.02);D.addColorStop(0,"rgba("+i.accent+",0.10)"),D.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=D,s.beginPath(),s.arc(m,v,y*1.02,0,6.2832),s.fill()}const L=[];for(let D=0;D<j;D++){const W=1-(D+.5)/j*2,T=Math.sqrt(Math.max(0,1-W*W)),O=D*2.39996,ne=Math.cos(O)*T,q=W,X=Math.sin(O)*T,se=ne*M+X*C,F=-ne*C+X*M,z=q*P-F*R,ae=q*R+F*P,me=(ae+1)/2,de=.82+.18*me;L.push({x:m+se*k*de,y:v+z*k*de,d:me,k:D,vec:[se,z,ae]})}L.sort((D,W)=>D.d-W.d);const A=D=>{const W=(D[2]+1)/2,T=.82+.18*W;return{x:m+D[0]*k*T,y:v+D[1]*k*T,d:W}},E=(D,W,T)=>{let O=D[0]*W[0]+D[1]*W[1]+D[2]*W[2];O=Ot(O,-1,1);const ne=Math.acos(O);if(ne<.001)return[D[0],D[1],D[2]];const q=Math.sin(ne),X=Math.sin((1-T)*ne)/q,se=Math.sin(T*ne)/q;return[D[0]*X+W[0]*se,D[1]*X+W[1]*se,D[2]*X+W[2]*se]},B={};for(const D of L)B[D.k]=D;const Q=o*(x?1.4:.5),U=Math.floor(Q),Y=Q-U,ee=5,oe=12;s.lineCap="round",s.lineJoin="round";const ce=[1.7,9.3,21.5,34.8,48.2],le=Ot(Math.round(e.streamCount??(_?5:4)),0,ce.length),K=ce.slice(0,le).map(D=>({seed:D}));for(const D of K){const W=O=>{const ne=Math.sin(O*12.9898+D.seed)*43758.5453;return Math.floor((ne-Math.floor(ne))*j)},T=O=>{let ne=W(O);return ne===W(O-1)&&(ne=(ne+1)%j),B[ne]};for(let O=ee-1;O>=0;O--){const ne=U-O;if(ne<0)continue;const q=T(ne),X=T(ne+1);if(!q||!X||q===X)continue;const se=O===0?Y:1,F=A(E(q.vec,X.vec,se)),z=(q.d+F.d)/2,ae=O===0?1:Ot(1-(O-1+Y)/(ee-1),0,1),me=(i.glow?.6:.72)*ae*(.4+.6*z);if(me<.02)continue;const de=s.createLinearGradient(q.x,q.y,F.x,F.y);de.addColorStop(0,"rgba("+$(q.x,q.y)+",0)"),de.addColorStop(1,"rgba("+$(F.x,F.y)+","+me+")"),s.strokeStyle=de,s.lineWidth=(_?Math.max(1.1*h,y*.018):Math.max(1.2,y*.045))*(.7+.4*z),s.beginPath();for(let ge=0;ge<=oe;ge++){const be=A(E(q.vec,X.vec,se*(ge/oe)));ge===0?s.moveTo(be.x,be.y):s.lineTo(be.x,be.y)}s.stroke()}}for(const D of L){const W=.5+.5*Math.sin(o*2-D.k*.9),T=(.18+.82*D.d)*(.62+.38*W),O=_?Math.max(.5,(.9+.9*D.d)*h*(.85+.15*W)):y*.058*no(e.size)*(.6+.5*D.d);if(i.glow){const ne=O*4,q=s.createRadialGradient(D.x,D.y,0,D.x,D.y,ne);q.addColorStop(0,"rgba("+i.accent+","+.24*T+")"),q.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=q,s.beginPath(),s.arc(D.x,D.y,ne,0,6.2832),s.fill()}s.fillStyle="rgba("+$(D.x,D.y)+","+(.32+.68*T)+")",s.beginPath(),s.arc(D.x,D.y,Math.max(.9,O),0,6.2832),s.fill()}_&&gh(e,o,i,$),ro(e,o,i),s.restore()}function gh(e,o,i,s){const{ctx:l,w:d,h,dpr:m}=e,v=d/2,y=h/2,x=Math.min(d,h)*.39,k=e.state!=="idle"?1:.4;for(let $=0;$<46;$++){const _=an($*5.1)<.5?-1:1,j=an($*1.7)*6.2832+o*(.3+an($*3.1)*.6)*_*k,N=x*(.04+.05*an($*4.7))*Math.sin(o*(.8+an($*6)*1)+an($*7)*6.28),M=x*(.5+an($*2.3)*.5)+N,C=v+Math.cos(j)*M,S=y+Math.sin(j)*M,P=.3+.7*(.5+.5*Math.sin(o*(1.4+an($)*2)+an($*2)*6.28)),R=Math.max(.5,(.4+an($*8)*1)*m*(.55+.6*P));if(i.glow){const L=R*6,A=l.createRadialGradient(C,S,0,C,S,L);A.addColorStop(0,"rgba("+i.accent+","+P*.18+")"),A.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=A,l.beginPath(),l.arc(C,S,L,0,6.2832),l.fill()}l.fillStyle="rgba("+s(C,S)+","+P*(i.glow?.8:.42)+")",l.beginPath(),l.arc(C,S,R,0,6.2832),l.fill()}}function r$(e,o,i){const{ctx:s,w:l,h:d,dpr:h}=e,m=l/2,v=d/2,y=Math.min(l,d)*.39,x=e.state!=="idle",w=e.size>=32?11:7,k=y*.12,$=y*.12,_=_r(.5+.5*Math.sin(o*(x?1:.55))),j=x?.34+.66*_:.5+.12*_,N=Math.max(1*h,y*.052),M=-o*(x?.5:.16),C=Math.cos(M),S=Math.sin(M),P=.42,R=Math.cos(P),L=Math.sin(P);s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round";const A=y*(.52+.44*j),E=Math.max(k+N,A-$),B=[];for(let G=0;G<w;G++){const Q=1-(G+.5)/w*2,U=Math.sqrt(Math.max(0,1-Q*Q)),Y=G*2.39996,ee=Math.cos(Y)*U,oe=Q,ce=Math.sin(Y)*U,le=ee*C+ce*S,K=-ee*S+ce*C,D=oe*R-K*L,T=(oe*L+K*R+1)/2,O=.82+.18*T,ne=.5+.5*Math.sin(o*1.6+G*1.3);B.push({x0:m+le*k*O,y0:v+D*k*O,x1:m+le*E*O,y1:v+D*E*O,cx2:m+le*A*O,cy2:v+D*A*O,d:T,shim:ne})}B.sort((G,Q)=>G.d-Q.d);for(const G of B){const Q=(x?.4+.45*j:.6)*(.4+.6*G.d)*(.78+.22*G.shim),U=s.createLinearGradient(G.x0,G.y0,G.x1,G.y1);U.addColorStop(0,"rgba("+i.dot+","+Q+")"),U.addColorStop(1,"rgba("+i.accent+",0)"),s.strokeStyle=U,s.lineWidth=N*(.7+.5*G.d),s.beginPath(),s.moveTo(G.x0,G.y0),s.lineTo(G.x1,G.y1),s.stroke();const Y=Math.max(.9,y*.058*no(e.size)*(.85+.3*j)*(.6+.5*G.d));if(i.glow){const ee=s.createRadialGradient(G.cx2,G.cy2,0,G.cx2,G.cy2,Y*5);ee.addColorStop(0,"rgba("+i.accent+","+.26*Q+")"),ee.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ee,s.beginPath(),s.arc(G.cx2,G.cy2,Y*5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,Q+.1)+")",s.beginPath(),s.arc(G.cx2,G.cy2,Y,0,6.2832),s.fill()}e.size>=120&&gh(e,o,i,()=>i.dot),ro(e,o,i),s.restore()}function o$(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,m=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=e.size>=32?58:e.size>=20?32:18,w=v*.78,k=y?o*.5:o*.2,$=Math.cos(k),_=Math.sin(k),j=.42,N=Math.cos(j),M=Math.sin(j),C=y?1:.4,S=(U,Y)=>[Math.sin(U)*Math.cos(Y),Math.cos(U),Math.sin(U)*Math.sin(Y)],P=[S(1.4+.5*Math.sin(o*.5*C),o*.6*C),S(1.9+.4*Math.cos(o*.4*C),-o*.5*C+2)],R=.36,L=e.cellCount==null?x:Ot(Math.round(e.cellCount),0,x);let A=null,E=null;(L<x||e.cellBirths)&&(E=Array.from({length:x},(U,Y)=>Y).sort((U,Y)=>an(U)-an(Y)),A=new Array(x),E.forEach((U,Y)=>{A[U]=Y}));const B=.7,G=.16;if(E&&e.cellBirths&&e.emergeNow!=null){let U=0;for(let Y=0;Y<L;Y++){const ee=E[Y];e.cellBirths.has(ee)||e.cellBirths.set(ee,e.emergeNow+U++*G)}}s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";const Q=[];for(let U=0;U<x;U++){let Y=1;if(A){if(A[U]>=L)continue;if(e.cellBirths){const F=e.cellBirths.get(U);if(F==null||(Y=_r(((e.emergeNow??F+B)-F)/B),Y<=.001))continue}}const ee=1-(U+.5)/x*2,oe=Math.sqrt(Math.max(0,1-ee*ee)),ce=U*2.39996,le=Math.cos(ce)*oe*Y,K=ee*Y,D=Math.sin(ce)*oe*Y;let W=0;for(const F of P){const z=le-F[0],ae=K-F[1],me=D-F[2];W+=Math.exp(-(z*z+ae*ae+me*me)/(2*R*R))}W=Ot(W,0,1);const T=le*$+D*_,O=-le*_+D*$,ne=K*N-O*M,X=(K*M+O*N+1)/2,se=.82+.18*X;Q.push({x:h+T*w*se,y:m+ne*w*se,d:X,inf:W,g:Y})}Q.sort((U,Y)=>U.d-Y.d);for(const U of Q){const Y=_r(U.inf),ee=Math.max(.6,v*(.05+.06*Y)*no(e.size)*(.55+.5*U.d))*(.35+.65*U.g),oe=(.16+.84*U.d)*(.45+.55*Y)*U.g,ce=1-(1-Math.abs(2*U.d-1))*U.g,le=Math.atan2(U.y-m,U.x-h);s.fillStyle="rgba("+i.dot+","+oe+")",s.beginPath(),s.ellipse(U.x,U.y,Math.max(.35,ee*ce),ee,le,0,6.2832),s.fill()}ro(e,o,i),s.restore()}function a$(e,o,i,s){const{ctx:l,w:d,h,dpr:m}=e,v=d/2,y=h/2,x=Math.min(d,h)*.39,w=e.state!=="idle",k=_r(Ot(s/.55,0,1)),$=_r(Ot((s-.3)/.4,0,1)),_=_r(Ot((s-.5)/.5,0,1)),j=e.size>=32?11:7,N=x*.12,M=x*.12,C=_r(.5+.5*Math.sin(o*(w?1:.55))),S=w?.34+.66*C:.5+.12*C,P=Math.max(1*m,x*.052),R=-o*(w?.5:.16),L=Math.cos(R),A=Math.sin(R),E=.42,B=Math.cos(E),G=Math.sin(E),Q=x*(.52+.44*S),U=Math.max(N+P,Q-M),Y=[];for(let F=0;F<j;F++){const z=1-(F+.5)/j*2,ae=Math.sqrt(Math.max(0,1-z*z)),me=F*2.39996,de=Math.cos(me)*ae,ge=z,be=Math.sin(me)*ae,_e=de*L+be*A,Le=-de*A+be*L,Ie=ge*B-Le*G,Ee=(ge*G+Le*B+1)/2,ze=.82+.18*Ee,Be=.5+.5*Math.sin(o*1.6+F*1.3);Y.push({x0:v+_e*N*ze,y0:y+Ie*N*ze,x1:v+_e*U*ze,y1:y+Ie*U*ze,cx2:v+_e*Q*ze,cy2:y+Ie*Q*ze,d:Ee,shim:Be,ux:de,uy:ge,uz:be})}l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",l.lineCap="round";const ee=[...Y].sort((F,z)=>F.d-z.d);for(const F of ee){const z=(w?.4+.45*S:.6)*(.4+.6*F.d)*(.78+.22*F.shim);if(_>.001){const ae=F.x0+(F.x1-F.x0)*_,me=F.y0+(F.y1-F.y0)*_,de=l.createLinearGradient(F.x0,F.y0,F.x1,F.y1);de.addColorStop(0,"rgba("+i.dot+","+z*_+")"),de.addColorStop(1,"rgba("+i.accent+",0)"),l.strokeStyle=de,l.lineWidth=P*(.7+.5*F.d),l.beginPath(),l.moveTo(F.x0,F.y0),l.lineTo(ae,me),l.stroke()}if($>.001){const ae=Math.max(.9,x*.058*no(e.size)*(.85+.3*S)*(.6+.5*F.d));if(i.glow){const me=l.createRadialGradient(F.cx2,F.cy2,0,F.cx2,F.cy2,ae*5);me.addColorStop(0,"rgba("+i.accent+","+.26*z*$+")"),me.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=me,l.beginPath(),l.arc(F.cx2,F.cy2,ae*5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+Math.min(1,z+.1)*$+")",l.beginPath(),l.arc(F.cx2,F.cy2,ae*(.6+.4*$),0,6.2832),l.fill()}}const oe=e.size>=32?58:e.size>=20?32:18,ce=x*.78,le=w?o*.5:o*.2,K=Math.cos(le),D=Math.sin(le),W=w?1:.4,T=(F,z)=>[Math.sin(F)*Math.cos(z),Math.cos(F),Math.sin(F)*Math.sin(z)],O=[T(1.4+.5*Math.sin(o*.5*W),o*.6*W),T(1.9+.4*Math.cos(o*.4*W),-o*.5*W+2)],ne=.36,q=e.cellCount==null?oe:Ot(Math.round(e.cellCount),0,oe);let X=null;if(q<oe){const F=Array.from({length:oe},(z,ae)=>ae).sort((z,ae)=>an(z)-an(ae));X=new Array(oe),F.forEach((z,ae)=>{X[z]=ae})}const se=1-$;if(se>.001||k<1){const F=[];for(let z=0;z<oe;z++){if(X&&X[z]>=q)continue;const ae=1-(z+.5)/oe*2,me=Math.sqrt(Math.max(0,1-ae*ae)),de=z*2.39996,ge=Math.cos(de)*me,be=ae,_e=Math.sin(de)*me;let Le=0,Ie=-2;for(let st=0;st<j;st++){const Ye=ge*Y[st].ux+be*Y[st].uy+_e*Y[st].uz;Ye>Ie&&(Ie=Ye,Le=st)}const Oe=Y[Le];let Ee=0;for(const st of O){const Ye=ge-st[0],Zn=be-st[1],jn=_e-st[2];Ee+=Math.exp(-(Ye*Ye+Zn*Zn+jn*jn)/(2*ne*ne))}Ee=Ot(Ee,0,1);const ze=ge*K+_e*D,Be=-ge*D+_e*K,Ke=be*B-Be*G,Se=(be*G+Be*B+1)/2,et=.82+.18*Se,tt=v+ze*ce*et,rt=y+Ke*ce*et;F.push({x:tt+(Oe.cx2-tt)*k,y:rt+(Oe.cy2-rt)*k,d:Se+(Oe.d-Se)*k,inf:Ee,f:(1-(1-Math.abs(2*Se-1)))*(1-k)+1*k})}F.sort((z,ae)=>z.d-ae.d);for(const z of F){const ae=_r(z.inf),me=Math.max(.6,x*(.05+.06*ae)*no(e.size)*(.55+.5*z.d)),de=(.16+.84*z.d)*(.45+.55*ae)*se;if(de<=.003)continue;const ge=Math.atan2(z.y-y,z.x-v);l.fillStyle="rgba("+i.dot+","+de+")",l.beginPath(),l.ellipse(z.x,z.y,Math.max(.35,me*z.f),me,ge,0,6.2832),l.fill()}}e.size>=120&&_>.001&&(l.globalAlpha=_,gh(e,o,i,()=>i.dot),l.globalAlpha=1),ro(e,o,i),l.restore()}function i$(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,m=d/2,v=Math.min(l,d)*.39,y=e.state!=="idle",x=e.size>=32?8:e.size>=20?6:5,w=v*.9,k=y?1:.4,$=o*(y?.3:.12),_=o*1*k,j=-o*.7*k+2.2,N=.72,M=(C,S)=>{const P=((C-S+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(P)};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let C=0;C<x;C++){const S=C/x*6.2832+$;let P=Math.exp(-(M(S,_)**2)/(2*N*N))+Math.exp(-(M(S,j)**2)/(2*N*N));P=Ot(P,0,1);const R=_r(P),L=h+Math.cos(S)*w,A=m+Math.sin(S)*w,E=Math.max(.6,v*(.05+.07*R)*no(e.size)),B=.38+.62*R;if(i.glow&&R>.25){const G=s.createRadialGradient(L,A,0,L,A,E*4);G.addColorStop(0,"rgba("+i.accent+","+.24*R+")"),G.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=G,s.beginPath(),s.arc(L,A,E*4,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+B+")",s.beginPath(),s.arc(L,A,E,0,6.2832),s.fill()}ro(e,o,i),s.restore()}function s$(e,o,i){ro(e,o,i)}const l$={orbit:p2,orbit2d:n$,circle:Kf,lines:r$,magnetic:o$,magnetic2d:i$,pulse:s$,bands:Kf};function dt({mark:e="orbit",size:o=16,tone:i="auto",state:s="active",motionSpeed:l=1,accent:d="#96B9FF",color:h,coreHalo:m=!0,coreGradient:v=!1,streamCount:y,cellCount:x,className:w,"aria-label":k}){const $=g.useRef(null),_=ZS(),j=g.useRef(0),N=g.useRef(0);N.current=v?1:0;const M=g.useRef(new Map),C=g.useRef(null),S=g.useRef(0);return g.useEffect(()=>{const P=$.current;if(!P)return;const R=P.getContext("2d");if(!R)return;const L=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),A=Math.min(2,window.devicePixelRatio||1),E=Math.max(2,Math.round(o*A)),B=E;P.width=E,P.height=B;const G={ctx:R,w:E,h:B,dpr:A,size:o,state:s,coreHalo:m,alert:j.current,streamCount:y,cellCount:x,cellBirths:x!=null&&!L&&s!=="static"?M.current:void 0},Q=i==="auto"?XS(Yf(R,P,"var(--color-bg-primary)"))<.5?"dark":"light":i,U=JS(Q,Lu(d));if(h){const T=Yf(R,P,h);U.dot=T,U.core=T}const Y=l$[e]??p2,ee=1.15,oe=e==="lines"?1:0,ce=e==="lines"||e==="magnetic";(C.current==null||!ce||L||s==="static")&&(C.current=oe);const le=T=>{if(j.current+=(N.current-j.current)*.06,Math.abs(j.current-N.current)<.001&&(j.current=N.current),G.alert=j.current,G.emergeNow=performance.now()/1e3,ce&&C.current!==oe){const q=G.emergeNow,X=Ot(q-(S.current||q),0,.1);S.current=q;const se=oe>(C.current??0)?1:-1;C.current=Ot((C.current??0)+se*X/ee,0,1)}else S.current=G.emergeNow;R.clearRect(0,0,E,B);const O=s==="static"?.62:T,ne=C.current??oe;ce&&ne>.001&&ne<.999?a$(G,O,U,ne):Y(G,O,U)},K=Ot(l,.4,3);if((L||s==="static")&&(j.current=N.current),le(1.15),L||s==="static")return;let D=0;const W=T=>{le(T/1e3*K),D=requestAnimationFrame(W)};return D=requestAnimationFrame(W),()=>cancelAnimationFrame(D)},[e,o,i,s,l,d,h,m,v,y,x,_]),n.jsx("canvas",{ref:$,width:o,height:o,style:{width:o,height:o,display:"block",flexShrink:0},className:w,role:"img","aria-label":k})}const ya={high:0,medium:1,low:2,none:3};p.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function Yl(e){return e.status==="resolved"||e.status==="auto_resolved"||e.status==="workflow_available"?"green":e.status==="analyzing"?"slate":e.status==="in_progress"||e.status==="monitoring"?"blue":e.severity==="high"?"orange":"slate"}p.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;function c$(e,o){if(o)return"Ultron is replying…";switch(e){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const f2=e=>e.status==="workflow_available"||e.status==="resolved"&&e.workflowOpportunity!=null,m2=e=>/^(review|adjust|revisit|update)\b/i.test(e),d$=["Revisit","Update","Resolve"],u$=e=>/,|\sand\s/.test(e),h$="Approve all",$l="Yes",g2=e=>{const i=e.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(s=>s.trim()).filter(Boolean);return i.length<2?[]:i.map(s=>s.charAt(0).toUpperCase()+s.slice(1))};p.section`
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
`;function p$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function f$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function m$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function g$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function v$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function x$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),n.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),n.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Au({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function y$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),n.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function w$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function b$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function Mo({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function k$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function _$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function C$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function Qf({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}const Zf=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],wa={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},v2={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function x2(e){const o=v2[e];return o?[o.role,o.shiftTime,o.location].filter(Boolean).join(" · "):""}function y2(e){const o=wa[e.id];if(!o||e.title.startsWith(o))return e.title;const i=e.title.split(" ")[0]??"",l=i===i.toUpperCase()?e.title:e.title.charAt(0).toLowerCase()+e.title.slice(1);return`${o} ${l}`}const w2={missed_clockin_james:"james_okoro_2"},vh=e=>`https://i.pravatar.cc/80?u=${w2[e]??e}`,Sa=e=>`https://i.pravatar.cc/80?u=${w2[e]??e}`,j$={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},S$=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],b2=e=>j$[e]??S$,k2={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},Xf={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reaching out to Carl Jensen…","Reaching out to Tina Boyd…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20,tools:["engage"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0,tools:["engage"]},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reaching out to Gina Holt…","Reaching out to Renata Cruz…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["task","engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},xh={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},$$={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},yh={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},M$={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},R$={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},eu={detected:e=>e.event,assessment:e=>e.assessment,recommendation:e=>e.recommendation,approval:e=>e.recommendation,execution:e=>e.recommendation,resolution:e=>e.outcome??e.recommendation,monitoring:e=>e.assessment,workflow:e=>e.workflowOpportunity??e.recommendation};function _2(e){const o=i=>i.trim().replace(/[.\s]+$/,"").toLowerCase();return M$[e.id]??e.timeline.map(i=>{var d;const s=((d=eu[i.state])==null?void 0:d.call(eu,e))??e.assessment,l=s!=null&&o(s)===o(i.headline);return{icon:R$[i.state]??"clock",headline:i.headline,blocks:s&&!l?[{text:s}]:void 0}})}const It=(e,o,i)=>({name:e,match:o,distance:i}),Ge=(e,o,i,s,l,d)=>({seed:e,name:o,preview:i,status:s,tone:l,...d?{conversation:d}:{}}),Jf=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],N$=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],L$=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],A$=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],C2="An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",ko=e=>({from:"ultron",text:C2,time:e}),T$={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:Jf,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[It("Jordan Pierce","4.9 match","3.2 mi"),It("Aisha Karim","4.7 match","5.1 mi"),It("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:C2,total:20,threads:[Ge("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive",[ko("1:52 PM"),{from:"them",text:"Yes — I can take the 2pm.",time:"1:54 PM"},{from:"ultron",text:"You’re confirmed for the 2:00 PM ICU shift at Riverside. Check in at the 3rd-floor ICU desk for handoff.",time:"1:54 PM"},{from:"them",text:"On my way. Thanks!",time:"1:55 PM"}]),Ge("priya_nguyen","Priya Nguyen","“Count me in — confirming now.”","Interested","positive",[ko("1:52 PM"),{from:"them",text:"Count me in — confirming now.",time:"1:57 PM"},{from:"ultron",text:"Great — you’re first backup if the 2pm falls through. I’ll ping you the moment another opens.",time:"1:57 PM"},{from:"them",text:"Sounds good.",time:"1:58 PM"}]),Ge("jordan_pierce","Jordan Pierce","“Is this the full ICU wing?”","Chatting","chatting",[ko("1:52 PM"),{from:"them",text:"Is this the full ICU wing or step-down?",time:"1:56 PM"},{from:"ultron",text:"Full ICU wing — 12-hour shift, 2:00 PM start.",time:"1:56 PM"},{from:"them",text:"Checking my childcare, give me a few.",time:"1:59 PM"}]),Ge("marcus_lewis","Marcus Lewis","“Any flex on the start? Could do 2:30.”","Chatting","chatting",[ko("1:52 PM"),{from:"them",text:"Any flex on the start? Could do 2:30.",time:"1:55 PM"},{from:"ultron",text:"Start is fixed at 2:00 for handoff, but I can flag you first for the next opening.",time:"1:55 PM"},{from:"them",text:"Ok — let me see if I can make 2.",time:"1:58 PM"}]),Ge("lena_reyes","Lena Reyes","“What’s the rate on this one?”","Chatting","chatting",[ko("1:52 PM"),{from:"them",text:"What’s the rate on this one?",time:"1:53 PM"},{from:"ultron",text:"$68/hr with the ICU differential included.",time:"1:53 PM"},{from:"them",text:"Tempting — give me an hour to sort a ride.",time:"1:57 PM"}]),Ge("omar_mori","Omar Mori","“Is parking validated?”","Chatting","chatting",[ko("1:52 PM"),{from:"them",text:"Is parking validated at Riverside?",time:"1:54 PM"},{from:"ultron",text:"Yes — validated parking in the north garage.",time:"1:54 PM"},{from:"them",text:"Good to know. Still deciding.",time:"1:56 PM"}]),Ge("devon_diaz","Devon Diaz","“Might be a few min late.”","Chatting","chatting",[ko("1:52 PM"),{from:"them",text:"I’m on shift til 1 — might be a few min late.",time:"1:55 PM"},{from:"ultron",text:"A few minutes is fine if you make handoff by 2:15. Want me to hold it?",time:"1:55 PM"},{from:"them",text:"Yeah, hold it — I’ll confirm by 1:30.",time:"1:59 PM"}])]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:N$,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[It("Renee Wallace","4.9 match","2.4 mi"),It("Carl Jensen","4.6 match","4.1 mi"),It("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[Ge("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),Ge("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),Ge("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:L$,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[It("Dane Mercer","4.8 match","2.1 mi"),It("Omar Reyes","4.6 match","3.7 mi"),It("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[Ge("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),Ge("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),Ge("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:A$,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[It("Jamal Carter","4.7 match","1.8 mi"),It("Sara Lindqvist","4.6 match","2.9 mi"),It("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[Ge("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),Ge("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),Ge("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[It("Theo Park","4.7 match","1.9 mi"),It("Gina Holt","4.5 match","3.3 mi"),It("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[Ge("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[Ge("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),Ge("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),Ge("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[It("Carl Jensen","4.7 match","2.6 mi"),It("Tina Boyd","4.5 match","3.9 mi"),It("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[Ge("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),Ge("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),Ge("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[Ge("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]},task:{description:"Created the CPR renewal task on Nadia’s profile",query:'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task',fields:[{label:"Task",value:"Renew CPR certification"},{label:"Assignee",value:"Nadia Haddad"},{label:"Step",value:"Upload the updated cert"},{label:"Due",value:"Before next gated shift · Thu 7:00 AM"},{label:"Status",value:"Assigned",emphasis:"success-tag"}]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[Ge("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[Ge("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[Ge("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[Ge("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[Ge("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[Ge("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[Ge("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[Ge("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),Ge("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),Ge("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:Jf,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[Ge("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),Ge("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},I$={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},E$=e=>/in-app/i.test(e)?"in_app":/sms/i.test(e)?"sms":"auto",em=e=>/in-app/i.test(e)?"In-app":/sms/i.test(e)?"SMS":"Preferred channel",tm=e=>e.split(/\s*\+\s*/).map(o=>o.replace(/\b\w/g,i=>i.toUpperCase())).join(", "),P$={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},Tu=e=>{const[o,...i]=e.split(" "),s=P$[o];return s?`Will ${s} ${i.join(" ")}`:e};function z$(e,o){if(e==="policy"&&o.policy){const l=o.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:l?`Run the shift against ${o.policy.policiesTotal} active scheduling policies and return the ${l.total} ${l.unit}, ranked by match.`:`Run the case against ${o.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const i=e==="engage"?o.engage:e==="engage-offer"?o.engageOffer:void 0;if(i)return{query:`engage.send(channel="${E$(i.name)}", template="shift_offer", to=matched)`,summary:`${Tu(i.description)} — ${i.total} ${i.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const s=e==="notify"?o.notify:e==="notify-scheduler"?o.notifyScheduler:void 0;return s?{query:`engage.notify(to="${s.name}", via="${s.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${Tu(s.description)} (${s.name} · ${s.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function O$(e,o,i,s){var $,_,j,N;if(e==="read"){const M=(($=o.update)==null?void 0:$.recordType)??((_=o.updateClose)==null?void 0:_.recordType);if(!M)return null;const C=M.toLowerCase(),S=[{label:"Type",value:M},{label:"Time",value:((j=v2[s])==null?void 0:j.shiftTime)??""},{label:"User",value:wa[s]??""},{label:"Clock in",value:""}];return{icon:"read",name:`Read data: ${M}`,description:`Pulled the current ${C} record before planning`,query:`read_data(record="${M}") → current_state`,recordDetails:S,summary:`Read the ${C}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`}}if(e==="match"||e==="credential"||e==="incentive"){const M=(N=o.policy)==null?void 0:N.eligible;if(!M)return null;const C=M.unit.replace(/^eligible\s+/i,"");if(e==="match")return{icon:"search",name:"Match Engine",description:`Ranked qualified ${C} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${M.total} ${M.unit}.`};if(e==="credential")return{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."};const S=M.total>=10;return{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${M.total}) → suggestion`,summary:S?"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached.":"Compared against recent last-minute fills — the pool is thin at this notice, so a bonus is recommended to secure the fill.",recommendation:S?{add:!1,amount:"No bonus",rationale:`${M.total} qualified ${C} available — deep enough to fill without an incentive.`}:{add:!0,amount:"$150 / shift",rationale:`Only ${M.total} qualified ${C} available this close to start — a bonus improves the odds of a confirmed fill.`}}}if(e==="task"){if(!o.task)return null;const{description:M,query:C,fields:S}=o.task;return{icon:"task",name:"Tasks",description:M,query:C,task:{fields:S}}}if(e==="update"||e==="update-close"){const M=e==="update"?o.update:o.updateClose;if(!M)return null;const{description:C,...S}=M;return{icon:"record",name:"Update Data",description:C,updateData:S}}const l=e==="notify"||e==="notify-scheduler",d=e==="notify"?o.notify:e==="notify-scheduler"?o.notifyScheduler:void 0,h=e==="engage"?o.engage:e==="engage-offer"?o.engageOffer:void 0;if(!(e==="policy"&&o.policy||!!h||!!d))return null;const v=e==="policy"?"Policy Engine":l?"Engage: Notification":h.name,y=e==="policy"?o.policy.description:l?d.description:h.description,x=e==="policy"?"shield":l?"bell":"message";if(i==="planning"){const M=e==="policy"?y:Tu(y),C={icon:x,name:v,description:M,...z$(e,o)};return l?{...C,channel:tm(d.channel),message:d.message}:h?{...C,channel:em(h.name),message:h.message}:e==="policy"?{...C,policies:{total:o.policy.policiesTotal,items:o.policy.policies}}:C}if(e==="policy")return{icon:x,name:v,description:y,policies:{total:o.policy.policiesTotal,items:o.policy.policies},eligible:o.policy.eligible};if(h)return{icon:x,name:v,description:y,channel:em(h.name),message:h.message,threads:{total:h.total,moreNoun:"threads",items:h.threads}};const{description:w,...k}=d;return{icon:x,name:v,description:y,channel:tm(d.channel),notification:k}}function j2(e,o,i="execution"){const s=T$[e];return s?o.map(l=>O$(l,s,i,e)).filter(l=>l!==null):[]}const D$=e=>e.tools??I$[e.icon]??["policy"],Js=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function F$(e){return{id:`detected_${e.id}`,name:e.name,title:e.title,capability:e.capability,status:"analyzing",severity:e.severity??"high",event:e.title.endsWith(".")?e.title:`${e.title}.`,assessment:e.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:e.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:e.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const S2={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},nm=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function wh(e,o){return nm[o%nm.length]}function B$(e){return e===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function H$(e){return e>=90?"green":e>=80?"blue":e>=70?"orange":"slate"}function $2({record:e}){const o=e.meta.find(l=>/^\d+%\s*match$/i.test(l)),i=o?parseInt(o,10):null,s=o?e.meta.filter(l=>l!==o):e.meta;return n.jsxs(W$,{children:[n.jsx(Qn,{size:"md",src:vh(e.avatarSeed),name:e.title,alt:e.title}),n.jsxs(U$,{children:[n.jsx(q$,{children:e.title}),n.jsx(V$,{children:[e.eyebrow,...s].join(" · ")})]}),i!=null&&n.jsxs(G$,{"data-tone":H$(i),children:[i,"% match"]}),n.jsx(De,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:n.jsx(Ku,{size:16})})]})}const W$=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,U$=p.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,q$=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,V$=p.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,G$=p.span`
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
`,rm=e=>e.id.startsWith("detected_"),om=5400,am=1100;function Y$(e,o){switch(o.type){case"detect":return e.some(i=>i.id===o.thread.id)?e:[o.thread,...e];case"decide":return e.map(i=>i.id===o.threadId?{...i,status:"needs_approval"}:i);case"commit":return e.map(i=>i.id===o.threadId?{...i,status:"in_progress"}:i);case"reopen":return e.map(i=>i.id===o.threadId?{...i,status:"needs_approval"}:i);case"resolve":return e.map(i=>i.id===o.threadId?{...i,status:"resolved",outcome:S2[i.id]??i.outcome}:i)}}const K$=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function Q$(){const e=g.useMemo(()=>Zf.filter(q=>q.id!=="shift_drop_maria"),[]),[o,i]=g.useReducer(Y$,e),[s,l]=g.useState(()=>{var X;const q=e.find(se=>se.status==="needs_approval"||se.status==="recommended");return(q==null?void 0:q.id)??((X=e[0])==null?void 0:X.id)??null}),[d,h]=g.useState([]),m=q=>{l(q),h(X=>X.includes(q)?X:[...X,q])},v=g.useMemo(()=>{const q=o.map((X,se)=>({item:X,index:se}));return K$.map(X=>({id:X.id,label:X.label,threads:q.filter(se=>X.statuses.includes(se.item.status)).sort((se,F)=>(se.item.status==="analyzing"?1:0)-(F.item.status==="analyzing"?1:0)||(rm(F.item)?1:0)-(rm(se.item)?1:0)||ya[se.item.severity]-ya[F.item.severity]||se.index-F.index).map(se=>se.item)}))},[o]),y=o.find(q=>q.id===s)??null,[x,w]=g.useState({}),k=s?x[s]??0:0,[$,_]=g.useState([]),[j,N]=g.useState({}),[M,C]=g.useState({}),[S,P]=g.useState([]),R=g.useRef({}),[L,A]=g.useState([]),E=q=>{A(X=>X.includes(q)?X.filter(se=>se!==q):[...X,q])},[B,G]=g.useState([]),Q=q=>{G(X=>X.includes(q)?X:[...X,q])},[U,Y]=g.useState([]),ee=q=>Y(X=>X.includes(q)?X:[...X,q]);return{threads:o,groups:v,selectedId:s,selectedThread:y,selectedStage:k,stageById:x,viewedIds:d,analyzedIds:$,outboundByThread:j,chatByThread:M,replyingIds:S,setSelectedId:m,detectRisk:q=>{i({type:"detect",thread:F$(q)})},surfaceDemoThread:q=>{const X=Zf.find(se=>se.id===q);X&&(i({type:"detect",thread:X}),ee(q))},decide:q=>{m(q),_(X=>X.includes(q)?X:[...X,q]),i({type:"decide",threadId:q})},commit:(q,X)=>{m(q),N(se=>({...se,[q]:[...se[q]??[],X]})),i({type:"commit",threadId:q})},completeRun:q=>{const X=x[q]??0,se=xh[q];X===0&&se?(w(F=>({...F,[q]:1})),i({type:"reopen",threadId:q})):(i({type:"resolve",threadId:q}),L.includes(q)&&(Q(q),A(F=>F.filter(z=>z!==q))))},sendMessage:(q,X)=>{const se=X.trim();if(!se)return;m(q),C(z=>({...z,[q]:[...z[q]??[],{role:"operator",text:se}]})),P(z=>z.includes(q)?z:[...z,q]);const F=window.setTimeout(()=>{C(z=>{const ae=z[q]??[],me=ae.filter(de=>de.role==="ultron").length;return{...z,[q]:[...ae,{role:"ultron",text:wh(se,me)}]}}),P(z=>z.filter(ae=>ae!==q)),delete R.current[q]},am);R.current[q]=F},stopReply:q=>{const X=R.current[q];X&&(window.clearTimeout(X),delete R.current[q]),P(se=>se.filter(F=>F!==q))},refine:q=>{},saveWorkflow:q=>{const X=q.id;m(X),C(F=>({...F,[X]:[...F[X]??[],{role:"operator",text:"Save as workflow"}]})),P(F=>F.includes(X)?F:[...F,X]);const se=window.setTimeout(()=>{C(F=>({...F,[X]:[...F[X]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),Q(X),P(F=>F.filter(z=>z!==X)),delete R.current[X]},am);R.current[X]=se},pendingWorkflowIds:L,toggleWorkflowSave:E,savedWorkflowIds:B,markWorkflowSaved:Q,revealedNewIds:U,revealNew:ee}}const Z$={"Acknowledge her":{working:"Acknowledging her",done:"Acknowledged her"},"Add the line item":{working:"Adding the line item",done:"Added the line item"},"Approve Thursday":{working:"Approving Thursday",done:"Approved Thursday"},"Approve for payroll":{working:"Approving for payroll",done:"Approved for payroll"},"Assign a renewal task":{working:"Assigning a renewal task",done:"Assigned a renewal task"},"Assign intake tasks":{working:"Assigning intake tasks",done:"Assigned intake tasks"},"Await his reply":{working:"Awaiting his reply",done:"Got his reply"},"Chase the unconfirmed":{working:"Chasing the unconfirmed",done:"Chased the unconfirmed"},"Claim shift":{working:"Claiming shift",done:"Claimed shift"},"Close the invoice":{working:"Closing the invoice",done:"Closed the invoice"},"Collect confirmations":{working:"Collecting confirmations",done:"Collected confirmations"},"Confirm Sarah Quinn":{working:"Confirming Sarah Quinn",done:"Confirmed Sarah Quinn"},"Confirm alerts":{working:"Confirming alerts",done:"Confirmed alerts"},"Confirm the punch":{working:"Confirming the punch",done:"Confirmed the punch"},"File as a CPR cert":{working:"Filing as a CPR cert",done:"Filed as a CPR cert"},"Fill shift":{working:"Filling shift",done:"Filled shift"},"Fill the Wed shift":{working:"Filling the Wed shift",done:"Filled the Wed shift"},"Flag the 3 shifts at-risk":{working:"Flagging the 3 shifts at-risk",done:"Flagged the 3 shifts at-risk"},"Flag the at-risk shifts":{working:"Flagging the at-risk shifts",done:"Flagged the at-risk shifts"},"Flag the renewal":{working:"Flagging the renewal",done:"Flagged the renewal"},"Follow up":{working:"Following up",done:"Followed up"},"Hold Friday for you":{working:"Holding Friday for you",done:"Held Friday for you"},"Hold for payroll":{working:"Holding for payroll",done:"Held for payroll"},"Invite the top 40 matches":{working:"Inviting the top 40 matches",done:"Invited the top 40 matches"},"Keep standby list":{working:"Keeping standby list",done:"Kept standby list"},"Line up backfills":{working:"Lining up backfills",done:"Lined up backfills"},"Mark Priya qualified":{working:"Marking Priya qualified",done:"Marked Priya qualified"},"Mark the credential verified":{working:"Marking the credential verified",done:"Marked the credential verified"},"Message the best matches":{working:"Messaging the best matches",done:"Messaged the best matches"},"Message the top replacements":{working:"Messaging the top replacements",done:"Messaged the top replacements"},"Message workers to confirm":{working:"Messaging workers to confirm",done:"Messaged workers to confirm"},"Move to the recruiter queue":{working:"Moving to the recruiter queue",done:"Moved to the recruiter queue"},"Notify Sofia":{working:"Notifying Sofia",done:"Notified Sofia"},"Notify scheduler":{working:"Notifying scheduler",done:"Notified scheduler"},"Notify scheduling":{working:"Notifying scheduling",done:"Notified scheduling"},"Notify the location manager":{working:"Notifying the location manager",done:"Notified the location manager"},"Offer to the top matches":{working:"Offering to the top matches",done:"Offered to the top matches"},"Publish the report":{working:"Publishing the report",done:"Published the report"},"Queue readiness summary":{working:"Queueing readiness summary",done:"Queued readiness summary"},"Recalculate the total":{working:"Recalculating the total",done:"Recalculated the total"},"Reconcile the payment":{working:"Reconciling the payment",done:"Reconciled the payment"},"Record the release":{working:"Recording the release",done:"Recorded the release"},"Save draft":{working:"Saving draft",done:"Saved draft"},"Send Luis a welcome":{working:"Sending Luis a welcome",done:"Sent Luis a welcome"},"Send a verification ping":{working:"Sending a verification ping",done:"Sent a verification ping"},"Send a warm intro":{working:"Sending a warm intro",done:"Sent a warm intro"},"Send the birthday note":{working:"Sending the birthday note",done:"Sent the birthday note"},"Text Bianca":{working:"Texting Bianca",done:"Texted Bianca"},"Text James":{working:"Texting James",done:"Texted James"},"Track claims":{working:"Tracking claims",done:"Tracked claims"},"Track responses":{working:"Tracking responses",done:"Tracked responses"},"Update ledger":{working:"Updating ledger",done:"Updated ledger"},"Update the contact":{working:"Updating the contact",done:"Updated the contact"},"Update the roster":{working:"Updating the roster",done:"Updated the roster"},"Update the timesheet":{working:"Updating the timesheet",done:"Updated the timesheet"}};function X$(e,o){const i=Z$[e];return!i||o==="plan"?e:o==="done"?i.done:i.working}const J$={search:kl,read:kl,message:ki,policy:Co,shield:Co,schedule:Co,analytics:R6,clock:_n,monitor:Ti,bell:ki,record:Jr,task:Co},eM={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},tM=e=>e.updateData?`Update Data: ${e.updateData.recordType}`:eM[e.icon]??e.name,nM=e=>e.tone==="positive"?"success":e.tone==="chatting"?"info":"neutral",im={positive:0,chatting:1,muted:2},rM=p(yg)`
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
`,oM=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,bh=240;function aM({open:e,onClose:o,title:i="Run details",usage:s}){const[l,d]=g.useState(()=>s.length?"0":""),[h,m]=g.useState(e),[v,y]=g.useState(!1);if(g.useEffect(()=>{if(e){m(!0);let _=0;const j=requestAnimationFrame(()=>{_=requestAnimationFrame(()=>y(!0))});return()=>{cancelAnimationFrame(j),cancelAnimationFrame(_)}}y(!1);const $=setTimeout(()=>m(!1),bh);return()=>clearTimeout($)},[e]),!h)return null;const x=s.length,w=`${x} ${x===1?"tool":"tools"} used · tap any to see its query and results`,k=s.map(($,_)=>({entry:$,index:_}));return ba.createPortal(n.jsxs(gM,{role:"dialog","aria-modal":"true","aria-label":i,children:[n.jsx(vM,{$shown:v,onClick:o}),n.jsxs(xM,{$shown:v,children:[n.jsxs(yM,{children:[n.jsxs(wM,{children:[n.jsx(bM,{children:i}),n.jsx(kM,{children:w})]}),n.jsx(De,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:o,children:n.jsx(_i,{size:18})})]}),n.jsxs(_M,{children:[n.jsx(CM,{"aria-hidden":"true"}),n.jsx(xg,{type:"single",collapsible:!0,value:l,onValueChange:$=>d(typeof $=="string"?$:""),children:k.map(({entry:$,index:_})=>{const j=$.updateData?tg:J$[$.icon];return n.jsx(rM,{value:String(_),label:tM($),description:$.description,leadingSlot:n.jsx(oM,{"aria-hidden":"true",children:n.jsx(j,{size:18})}),children:n.jsx(jM,{children:n.jsx(iM,{entry:$})})},_)})})]})]})]}),document.body)}function iM({entry:e}){return n.jsxs(n.Fragment,{children:[e.channel&&n.jsxs(bn,{children:[n.jsx(Zt,{children:"Channel"}),n.jsx(um,{children:e.channel})]}),e.message&&n.jsxs(bn,{children:[n.jsx(Zt,{children:"Message"}),n.jsx(lm,{children:e.message})]}),e.recordDetails&&n.jsxs(bn,{children:[n.jsx(Zt,{children:"Record details"}),n.jsx(tu,{children:e.recordDetails.map((o,i)=>n.jsx(kn,{size:"sm",label:o.label,trailingSlot:n.jsx(nu,{$success:o.emphasis==="success",$placeholder:!o.value,children:o.value||"???"})},i))})]}),e.policies&&n.jsxs(bn,{children:[n.jsx(Zt,{children:`Policies evaluated · ${e.policies.total}`}),n.jsx(OM,{children:e.policies.items.map((o,i)=>n.jsxs(DM,{children:[n.jsx(FM,{"aria-hidden":"true",children:n.jsx(dn,{size:16})}),n.jsx("span",{children:o})]},i))})]}),e.eligible&&n.jsxs(bn,{children:[n.jsx(Zt,{children:`Returned · ${e.eligible.total} ${e.eligible.unit}`}),n.jsx(sM,{candidates:e.eligible.items,total:e.eligible.total,moreNoun:e.eligible.moreNoun})]}),e.threads&&n.jsxs(bn,{children:[n.jsx(Zt,{children:`Threads · ${e.threads.total}`}),n.jsx(pM,{threads:e.threads})]}),e.notification&&n.jsxs(n.Fragment,{children:[n.jsxs(bn,{children:[n.jsx(Zt,{children:"Recipient"}),n.jsx(BM,{children:n.jsx(kn,{size:"md",divider:!1,leadingSlot:n.jsx(Qn,{size:"sm",src:Sa(e.notification.seed),name:e.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:e.notification.name,description:e.notification.role,trailingSlot:n.jsx(De,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${e.notification.name}'s profile`,children:n.jsx(Hl,{size:14})})})})]}),n.jsxs(bn,{children:[n.jsx(Zt,{children:"Message"}),n.jsx(lm,{children:e.notification.message})]})]}),e.task&&n.jsxs(bn,{children:[n.jsx(Zt,{children:"Task"}),n.jsx(tu,{children:e.task.fields.map((o,i)=>n.jsx(kn,{size:"sm",label:o.label,trailingSlot:o.emphasis==="success-tag"?n.jsx(Ci,{status:"success",size:"sm",children:o.value}):n.jsx(nu,{$success:o.emphasis==="success",$placeholder:!o.value,children:o.value||"???"})},i))})]}),e.updateData&&n.jsxs(bn,{children:[n.jsx(Zt,{children:"Record details"}),(e.updateData.groups??[e.updateData.fields??[]]).map((o,i)=>n.jsx(tu,{children:o.map((s,l)=>n.jsx(kn,{size:"sm",label:s.label,trailingSlot:s.emphasis==="change"&&s.previousValue?n.jsxs(lM,{children:[n.jsx(cM,{children:s.previousValue}),n.jsx(dM,{"aria-hidden":"true",children:"→"}),n.jsx(uM,{children:s.value})]}):s.emphasis==="success-tag"?n.jsx(Ci,{status:"success",size:"sm",children:s.value}):n.jsx(nu,{$success:s.emphasis==="success",$placeholder:!s.value,children:s.value||"???"})},l))},i))]}),e.recommendation&&n.jsxs(bn,{children:[n.jsx(Zt,{children:"Recommendation"}),n.jsxs(HM,{children:[n.jsxs(cm,{children:[n.jsx(dm,{children:"Incentive?"}),n.jsx(WM,{$add:e.recommendation.add,children:e.recommendation.add?e.recommendation.amount:"No bonus"})]}),n.jsxs(cm,{children:[n.jsx(dm,{children:"Reason"}),n.jsx(UM,{children:e.recommendation.rationale})]})]})]}),e.query&&n.jsxs(bn,{children:[n.jsx(Zt,{children:"Query"}),n.jsx(SM,{children:e.query})]}),e.summary&&n.jsxs(bn,{children:[n.jsx(Zt,{children:"What it does"}),n.jsx(um,{children:e.summary})]})]})}function sM({candidates:e,total:o,moreNoun:i}){var x;const[s,l]=g.useState(!1),d=e.slice(0,3),h=o-d.length,m=parseFloat(((x=d[d.length-1])==null?void 0:x.match)??"4.5"),v=s?Array.from({length:h},(w,k)=>hM(k,m)):[],y=[...d,...v];return n.jsxs(n.Fragment,{children:[n.jsx(kh,{children:y.map((w,k)=>n.jsx(kn,{size:"sm",leadingSlot:n.jsx(Qn,{size:"sm",src:Sa(w.name),name:w.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:w.name,trailingSlot:n.jsx(RM,{children:`${w.match} · ${w.distance}`})},k))}),h>0&&n.jsx(M2,{type:"button",onClick:()=>l(w=>!w),"aria-expanded":s,children:s?`Show fewer ${i}`:`+${h} more ${i}`})]})}const kh=p.div`
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
`,tu=p(kh)`
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
`,nu=p.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${e=>e.$placeholder?"var(--color-content-disabled)":e.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,lM=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,cM=p.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,dM=p.span`
  color: var(--color-content-tertiary);
`,uM=p.span`
  color: var(--color-success-content);
`,Ml=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],Rl=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function hM(e,o){const i=Ml[e%Ml.length],s=Rl[(e*7+3)%Rl.length],l=Math.max(3,o-(e+1)*.1),d=(4+e*13%90/10).toFixed(1);return{name:`${i} ${s}`,match:`${l.toFixed(1)} match`,distance:`${d} mi`}}const sm=3;function pM({threads:e}){const[o,i]=g.useState(!1),[s,l]=g.useState(null),d=[...e.items].sort((x,w)=>im[x.tone]-im[w.tone]),h=Math.max(0,e.total-d.length),m=[...d,...Array.from({length:h},(x,w)=>mM(w))],v=o?m:m.slice(0,sm),y=m.length-sm;return n.jsxs(n.Fragment,{children:[n.jsx(kh,{children:v.map((x,w)=>{var j;const k=!!((j=x.conversation)!=null&&j.length),$=`${x.name}-${w}`,_=k&&s===$;return n.jsxs(NM,{"data-open":_||void 0,children:[n.jsx(kn,{size:"md",interactive:k,onClick:k?()=>l(_?null:$):void 0,"aria-expanded":k?_:void 0,leadingSlot:n.jsx(Qn,{size:"sm",src:Sa(x.seed),name:x.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:x.name,description:x.preview,trailingSlot:n.jsxs(zM,{children:[n.jsx(Ci,{status:nM(x),size:"sm",children:x.status}),k?n.jsx(LM,{"data-open":_||void 0,children:n.jsx(Pn,{size:16})}):n.jsx(Cn,{size:16})]})}),_&&n.jsx(fM,{messages:x.conversation})]},$)})}),y>0&&n.jsx(M2,{type:"button",onClick:()=>i(x=>!x),"aria-expanded":o,children:o?`Show fewer ${e.moreNoun}`:`+${y} more ${e.moreNoun}`})]})}function fM({messages:e}){return n.jsx(TM,{children:e.map((o,i)=>n.jsxs(IM,{$from:o.from,children:[n.jsx(EM,{children:o.text}),n.jsx(PM,{children:o.time})]},i))})}function mM(e){const o=Ml[e%Ml.length],i=Rl[(e*7+3)%Rl.length],s=`${o} ${i}`;return{seed:s,name:s,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const gM=p.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,vM=p.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${e=>e.$shown?.45:0};
  transition: opacity ${bh}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,xM=p.div`
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
  transition: transform ${bh}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; transform: none; }
`,yM=p.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,wM=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,bM=p.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,kM=p.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,_M=p.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,CM=p.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,jM=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,bn=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;function SM({children:e}){const[o,i]=g.useState(!1),s=()=>{var l;(l=navigator.clipboard)==null||l.writeText(e),i(!0),window.setTimeout(()=>i(!1),1600)};return n.jsxs($M,{children:[n.jsx(MM,{children:e}),n.jsx(De,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":o?"Copied":"Copy query",onClick:s,children:o?n.jsx(dn,{size:14}):n.jsx(J0,{size:14})})]})}const $M=p.div`
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
`,MM=p.pre`
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
`,RM=p.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,NM=p.div``,LM=p.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-fast) var(--ease-default);

  &[data-open] {
    transform: rotate(180deg);
    color: var(--color-content-tertiary);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,AM=je`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`,TM=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3) var(--space-3);
  animation: ${AM} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,IM=p.div`
  max-width: 80%;
  align-self: ${e=>e.$from==="them"?"flex-start":"flex-end"};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: ${e=>e.$from==="them"?"var(--color-bg-secondary)":"var(--color-info-fill)"};
  color: ${e=>e.$from==="them"?"var(--color-content-primary)":"var(--color-content-inverse)"};
  /* Squared-off tail corner on the side the bubble is anchored to. */
  border-bottom-${e=>e.$from==="them"?"left":"right"}-radius: var(--radius-xs);
`,EM=p.div`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
`,PM=p.div`
  margin-top: 2px;
  font-size: 10px;
  line-height: 1;
  opacity: 0.65;
  text-align: right;
`,zM=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,M2=p.button`
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
`,OM=p.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,DM=p.li`
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
`,FM=p.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,lm=p.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,BM=p.div`
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
`,HM=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`,cm=p.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,dm=p.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,WM=p.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${e=>e.$add?"var(--color-success-content)":"var(--color-content-primary)"};
`,UM=p.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,um=p.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function qM({milestones:e}){return n.jsx(eR,{children:e.map((o,i)=>n.jsx(KM,{milestone:o,last:i===e.length-1},i))})}function Nl({milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,collapsed:l,hideActions:d,running:h,animateIn:m,showConnectors:v,reasoning:y}){return n.jsx(VM,{milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,hideActions:d,running:h,defaultCollapsed:l,animateIn:m,showConnectors:v,reasoning:y})}function VM({milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,hideActions:l,running:d,animateIn:h=!0,showConnectors:m=!0,defaultCollapsed:v=!1,reasoning:y=!1}){const[x,w]=g.useState(!1),_=v||y&&!d?e.length:0,j=_>0,N=j&&!x?_:0,M=e.slice(0,_).map(S=>S.headline).join(" · "),C=e.length>0&&N>=e.length;return n.jsx(nR,{$animate:h,children:n.jsxs(oR,{$compact:C,children:[j&&!x&&n.jsx(fm,{$tight:!0,$last:C,$connected:m,children:n.jsxs(L2,{type:"button","aria-expanded":x,onClick:()=>w(S=>!S),children:[n.jsx(vm,{"aria-hidden":"true",children:n.jsx(_l,{size:16})}),n.jsx(vR,{children:M})]})}),e.slice(N).map((S,P)=>{var U,Y;const R=N+P,L=d&&typeof i=="number"&&R>i,A=d&&typeof i=="number"&&R===i,E=L?"plan":A?"working":"done",B=!d||typeof i!="number"||R<i-1?"done":R===i-1?"working":"upcoming",G=!!((U=S.progress)!=null&&U.length),Q=R===e.length-1;return n.jsxs(fm,{$tight:!G,$last:Q,$connected:m,children:[m&&!Q&&B!=="upcoming"&&n.jsx(iR,{"aria-hidden":"true",$state:B,$tight:!G,$superseded:v}),n.jsx(N2,{milestone:S,label:X$(S.headline,E),last:!0,collapsible:!0,placeholder:L,focused:A,startOpen:!d&&x,onCollapse:j&&x&&!A?()=>w(!1):void 0,progressBeat:A?s:void 0,superseded:v,typing:R===o,extra:!L&&((Y=S.usage)!=null&&Y.length)?n.jsx(YM,{usage:S.usage,title:S.headline}):void 0,icon:y&&!d&&!L?n.jsx(vm,{"aria-hidden":"true",children:n.jsx(_l,{size:16})}):n.jsx(R2,{icon:S.icon,loading:o===R||A||d&&typeof i!="number"&&R===e.length-1,placeholder:L,muted:v})})]},R)}),!l&&!d&&n.jsx(ca,{time:ar(e)})]})})}const hm=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function GM(){const[e,o]=g.useState(0);return g.useEffect(()=>{if(e>=hm.length-1)return;const i=setTimeout(()=>o(s=>s+1),3200);return()=>clearTimeout(i)},[e]),n.jsxs(n.Fragment,{children:[hm[e],n.jsxs(rR,{"aria-hidden":"true",children:[n.jsx("span",{children:"."}),n.jsx("span",{children:"."}),n.jsx("span",{children:"."})]})]})}function ar(e){const i=581+e.reduce((m,v)=>m+v.headline.length,0)%200,s=Math.floor(i/60)%24,l=i%60,d=s<12?"AM":"PM";return`${s%12===0?12:s%12}:${String(l).padStart(2,"0")} ${d}`}function ca({time:e}){const[o,i]=g.useState(null),s=l=>i(d=>d===l?null:l);return n.jsx(sR,{"data-feedback-actions":!0,children:n.jsxs(E0,{visibility:"always",time:e,children:[n.jsx(mm,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":o==="up","data-active":o==="up"||void 0,onClick:()=>s("up"),children:n.jsx(Z0,{size:14})}),n.jsx(mm,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":o==="down","data-active":o==="down"||void 0,onClick:()=>s("down"),children:n.jsx(X0,{size:14})}),n.jsx(De,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:n.jsx(Ai,{size:14})})]})})}function YM({usage:e,title:o}){const[i,s]=g.useState(!1);return g.useEffect(()=>{if(!i)return;const l=d=>{d.key==="Escape"&&s(!1)};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[i]),e.length?n.jsxs(lR,{children:[n.jsxs(De,{variant:"tertiary",size:"xs",trailingArtwork:n.jsx(Cn,{size:12}),"aria-haspopup":"dialog","aria-expanded":i,onClick:()=>s(!0),children:[e.length," ",e.length===1?"tool":"tools"," used"]}),n.jsx(aM,{open:i,onClose:()=>s(!1),title:o,usage:e})]}):null}function KM({milestone:e,last:o}){return n.jsxs(pR,{children:[n.jsxs(fR,{children:[n.jsx(R2,{icon:e.icon}),!o&&n.jsx(wR,{})]}),n.jsx(N2,{milestone:e,last:o})]})}function QM({records:e,initial:o=3}){const[i,s]=g.useState(!1),l=i?e:e.slice(0,o),d=e.length-o;return n.jsxs(PR,{children:[l.map((h,m)=>n.jsx($2,{record:h},m)),d>0&&n.jsx(zR,{type:"button",onClick:()=>s(h=>!h),children:i?"Show less":`Show ${d} more`})]})}function R2({slotRef:e,hidden:o,loading:i,placeholder:s,muted:l}){return s?n.jsx(gm,{ref:e,"aria-hidden":"true",$hidden:o,$placeholder:!0,children:n.jsx(gR,{})}):n.jsx(gm,{ref:e,"aria-hidden":"true",$hidden:o,$loading:i,children:n.jsxs(yR,{viewBox:"0 0 24 24",$loading:i,$muted:l&&!i,children:[n.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),n.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function N2({milestone:e,label:o,last:i,typing:s,icon:l,collapsible:d=!0,extra:h,placeholder:m,focused:v,progressBeat:y,superseded:x,startOpen:w,onCollapse:k}){var Q,U,Y;const $=o??e.headline;if(m)return n.jsx(ym,{$last:i,$dim:!0,children:n.jsxs($i,{as:"div",children:[l,n.jsx(wm,{children:$})]})});const _=!!((Q=e.blocks)!=null&&Q.length),j=!!h,N=!d||!!e.defaultOpen||!!w,[M,C]=g.useState(null),S=!!k,P=S?!0:M??N,R=d&&(_||j),L=!S&&R&&(!s||!!v),A=L&&!!v&&!!((U=e.progress)!=null&&U.length),E=()=>C(()=>!P),B=_&&(S||!d||P),G=j&&(S||!d||P);return n.jsxs(ym,{$last:i,children:[n.jsxs($i,{as:S||R?"button":"div",type:S||R?"button":void 0,$interactive:S||L,"aria-expanded":S?!0:L?P:void 0,onClick:S?k:L?E:void 0,children:[l,n.jsx(wm,{$focused:!!v,children:$}),L&&!v&&n.jsx(bR,{"data-open":P||void 0,"aria-hidden":"true",children:n.jsx(Cn,{size:14})})]}),(Y=e.progress)!=null&&Y.length?n.jsx(CR,{$indent:!!l,children:n.jsxs(kR,{children:[A&&n.jsx(_R,{type:"button","aria-expanded":P,"aria-label":P?"Hide details":"Show details",onClick:E,children:P?n.jsx(oh,{size:16}):n.jsx(Ro,{size:16})}),n.jsx(XM,{steps:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,live:!!(s||v),beat:y,superseded:x,showAvatars:P||s||v})]})}):null,B&&n.jsx(AR,{$indent:!!l,children:e.blocks.map((ee,oe)=>n.jsxs(TR,{children:[ee.text&&n.jsx(IR,{children:s?n.jsx(_h,{text:ee.text}):ee.text}),ee.label&&n.jsx(ER,{children:ee.label}),ee.bullets&&n.jsx(OR,{children:ee.bullets.map((ce,le)=>n.jsx("li",{children:ce},le))}),ee.checks&&n.jsx(DR,{children:ee.checks.map((ce,le)=>n.jsxs("li",{children:[n.jsx(FR,{"aria-hidden":"true"}),n.jsx("span",{children:ce})]},le))}),ee.records&&n.jsx(QM,{records:ee.records})]},oe))}),G&&n.jsx(cR,{$indent:!!l,children:h})]})}const ZM=1350;function XM({steps:e,avatars:o,avatarsOnSettle:i,reached:s,live:l,showAvatars:d,beat:h,superseded:m}){const v=e.length-1,y=typeof h=="number",[x,w]=g.useState(l?0:v),k=g.useRef(l);g.useEffect(()=>{l&&!k.current&&(k.current=!0,w(0))},[l]),g.useEffect(()=>{if(y||!k.current||x>=v)return;const N=setTimeout(()=>w(M=>Math.min(M+1,v)),ZM);return()=>clearTimeout(N)},[x,v,y]),g.useEffect(()=>{typeof h=="number"&&w(Math.min(h,v))},[h,v]);const $=typeof h=="number"?Math.min(h,v):x,_=$>=v,j=_&&!l;return n.jsxs(jR,{children:[n.jsx($R,{$done:j,$live:l,$superseded:m,"aria-live":"polite",children:l?n.jsx(_h,{text:e[$],caret:!1,speed:26}):e[$]},$),d&&(i?_:_||l)&&(o!=null&&o.length)?n.jsx(JM,{seeds:o,total:s}):null]})}const pm=90;function JM({seeds:e,total:o,max:i=5}){const s=e.slice(0,i),l=Math.max(o??0,e.length),d=l-s.length;return n.jsxs(MR,{"aria-label":`${l} people reached`,children:[s.map((h,m)=>n.jsx(RR,{style:{zIndex:s.length-m,animationDelay:`${m*pm}ms`},children:n.jsx(Qn,{size:"sm",src:Sa(h),name:h,alt:""})},h)),d>0&&n.jsxs(NR,{"aria-hidden":"true",style:{animationDelay:`${s.length*pm}ms`},children:["+",d]})]})}const eR=p.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,tR=je`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,Kl=qe`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,nR=p.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${tR} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${e=>e.$animate===!1&&"animation: none;"}

  ${Kl}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,rR=p.span``,oR=p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. The top padding
     is constant so the first row (the collapse toggle) holds its vertical position
     when the group opens/closes — expanding no longer nudges the accordion down.
     Only the bottom padding tightens for a fully-folded (superseded) recap line. */
  padding-top: var(--space-3);
  padding-bottom: ${e=>e.$compact?"var(--space-1)":"var(--space-3)"};
`,fm=p.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${e=>e.$last?"0":e.$connected?e.$tight?"var(--space-3)":"var(--space-5)":e.$tight?"0":"var(--space-3)"};
`,aR=je`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,iR=p.span`
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
        animation: ${aR} 1.25s linear infinite;
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
`,sR=p.div`
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
`,lR=p.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,cR=p.div`
  padding-top: var(--space-2);
  padding-left: ${e=>e.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,mm=p(De)`
  &[data-active] { color: var(--color-content-brand); }
`;function _h({text:e,onDone:o,speed:i=30,caret:s=!0}){const[l,d]=g.useState(0);g.useEffect(()=>{d(0)},[e]),g.useEffect(()=>{if(l>=e.length)return;const m=setTimeout(()=>d(v=>v+1),i);return()=>clearTimeout(m)},[l,e,i]);const h=l>=e.length;return g.useEffect(()=>{h&&(o==null||o())},[h]),n.jsxs(n.Fragment,{children:[e.slice(0,l),s&&n.jsx(uR,{$blink:h,"aria-hidden":"true"}),!h&&n.jsx(hR,{"aria-hidden":"true",children:e.slice(l)})]})}const dR=je`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,uR=p.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${e=>e.$blink?dR:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,hR=p.span`
  opacity: 0;
`,pR=p.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,fR=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,gm=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${e=>e.$hidden?"hidden":"visible"};
`,mR=je`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,gR=p.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${mR} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,L2=p.button`
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
`,vm=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  /* The collapse toggle always reads in the quiet disabled tone — it's a recap
     affordance, not a step, so it stays out of the way of the live trail. */
  color: var(--color-content-disabled);
`,vR=p.span`
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

  ${L2}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,xR=je`
  to { transform: rotate(360deg); }
`,xm=56.5,yR=p.svg`
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
    stroke-dasharray: ${xm};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${e=>e.$loading?xm*.7:0};
    stroke: ${e=>e.$loading?"var(--color-content-tertiary)":e.$muted?"transparent":"var(--color-success-fill)"};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${xR} 2s linear infinite;
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
`,wR=p.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,ym=p.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${e=>e.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,$i=p.div`
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
`,wm=p.span`
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

  ${$i}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,bR=p.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  opacity: 0;
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-default);
  ${$i}:hover &,
  ${$i}:focus-visible &,
  &[data-open] { opacity: 1; }
  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,kR=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,_R=p.button`
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
`,CR=p.div`
  padding-left: ${e=>e.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,jR=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
`,SR=je`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,$R=p.div`
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
    animation: ${SR} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,MR=p.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,A2=je`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,RR=p.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${A2} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,NR=p.span`
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
  animation: ${A2} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,LR=je`
  from { opacity: 0; }
  to   { opacity: 1; }
`,AR=p.div`
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
  animation: ${LR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,TR=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,IR=p.p`
  margin: 0;
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,ER=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,PR=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,zR=p.button`
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
`,OR=p.ul`
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
`,DR=p.ul`
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
`,FR=p.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function BR({size:e=20}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:n.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const HR=160,T2=g.forwardRef(function({onSend:o,working:i=!1,onStop:s,placeholder:l="Message Ultron…",compact:d=!1},h){const[m,v]=g.useState(""),y=g.useRef(null),x=m.trim().length>0;g.useImperativeHandle(h,()=>({focus:()=>{var j;return(j=y.current)==null?void 0:j.focus()}}),[]);const w=()=>{const j=y.current;j&&(j.style.height="auto",j.style.height=`${Math.min(j.scrollHeight,HR)}px`)},k=()=>{!x||i||(o(m),v(""),requestAnimationFrame(()=>{const j=y.current;j&&(j.style.height="auto")}))},$=j=>{j.preventDefault(),k()},_=j=>{j.key==="Enter"&&!j.shiftKey&&(j.preventDefault(),k())};return n.jsxs(WR,{onSubmit:$,$compact:d,children:[n.jsx(UR,{ref:y,rows:1,value:m,placeholder:l,"aria-label":"Message Ultron",$compact:d,onChange:j=>{v(j.target.value),w()},onKeyDown:_}),i?n.jsx(bm,{$float:!0,type:"button",variant:"primary",size:d?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:s,children:n.jsx(BR,{size:d?16:20})}):n.jsx(bm,{type:"submit",variant:"primary",size:d?"xs":"sm",iconOnly:!0,disabled:!x,"aria-label":"Send message",children:n.jsx(Fl,{size:d?14:18})})]})}),WR=p.form`
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
`,UR=p.textarea`
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
`,bm=p(De)`
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
`,km=450;function Ch(e,o){var _;const i=e.status==="needs_approval"||e.status==="recommended",s=i||e.status==="unresolved"||e.status==="monitoring",l=xh[e.id],d=o===1&&!!l,h=d?l.prompt:k2[e.id]??e.recommendation,m=d?l.record:$$[e.id],v=m?Array.isArray(m)?m:[m]:[],y=e.status==="unresolved"?d$:d?l.actions:e.actions,x=i&&(!d&&(((_=yh[e.id])==null?void 0:_.length)??0)>1||u$(h)),w=x?h$:y[y.length-1],k=x?[]:y.slice(0,-1),$=f2(e);return{needsDecision:i,actionable:s,onFollowUp:d,followUp:l,prompt:h,records:v,primaryLabel:w,secondaryLabels:k,purple:$}}function _m({thread:e,stage:o,expanded:i,detachActionable:s,detachAnalyzing:l,detachTrail:d,onToggle:h,onClose:m,onDecide:v,onAction:y,onRefinement:x,onSaveWorkflow:w}){const[k,$]=g.useState(!1),[_,j]=g.useState(!1),{actionable:N,prompt:M,records:C,primaryLabel:S,purple:P}=Ch(e,o),L=e.status==="analyzing"&&!l,A=e.status==="resolved"||e.status==="auto_resolved",E=!s&&(N||P),B=A&&!d,G=s?L:N||L||E,Q=i&&(G||B),U=Yl(e),ee=x2(e.id)||(Q?"":e.assessment),oe=ce=>{m2(ce)?x(ce):y(e.id,ce)};return n.jsxs(rN,{"data-tone":U,$expanded:i,children:[n.jsxs(lN,{children:[n.jsxs(dN,{type:"button","aria-expanded":Q,"aria-label":Q?"Collapse case":"Expand case",onClick:h,children:[n.jsx(Qn,{size:"md",src:vh(e.id),name:wa[e.id],alt:wa[e.id]??""}),n.jsxs(D2,{children:[n.jsx(F2,{children:y2(e)}),ee&&n.jsx(B2,{children:ee})]})]}),n.jsx(cN,{variant:"ghost",size:m?"sm":"xs",iconOnly:!0,"aria-label":m?"Open record":Q?"Collapse case":"Expand case",tabIndex:m?void 0:-1,onClick:m??h,children:m?n.jsx(Hl,{size:20}):Q?n.jsx(_l,{size:16}):n.jsx(oh,{size:16})})]}),Q&&B&&n.jsx(uN,{children:n.jsx(hN,{children:n.jsx(qM,{milestones:_2(e)})})}),Q&&G&&n.jsxs(pN,{children:[N&&!s&&n.jsx(Ql,{children:M}),N&&!s&&C.length>0&&n.jsx(RN,{children:C.map((ce,le)=>n.jsx($2,{record:ce},le))}),L&&n.jsx(H2,{role:"status","aria-live":"polite",children:n.jsx(YR,{thread:e,onDecide:v})}),E&&n.jsxs(jh,{children:[N&&S&&n.jsx(jo,{variant:"primary",size:"sm",onClick:()=>oe($l),children:$l}),N&&n.jsx(jo,{variant:"tertiary",size:"sm",onClick:()=>x("No"),children:"No"}),N&&n.jsx(V2,{variant:"tertiary",size:"sm","data-selected":_||void 0,onClick:()=>{j(!0),x("Other")},children:"Other"}),P&&(k?n.jsx(De,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(dn,{size:14}),children:"Saved"}):n.jsx(De,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(Mo,{size:14}),onClick:()=>{w(e),$(!0)},children:"Save as workflow"}))]})]})]})}function Cm({text:e,speed:o=16,onDone:i,instant:s=!1}){const[l,d]=g.useState(!1);return g.useEffect(()=>{d(!1)},[e]),g.useEffect(()=>{s&&(i==null||i())},[s]),s||l?n.jsx(n.Fragment,{children:e}):n.jsx(_h,{text:e,speed:o,onDone:()=>{d(!0),i==null||i()}})}function I2({thread:e,stage:o,onAction:i,onRefinement:s,onSaveWorkflow:l,saved:d=!1,saveIntent:h=!1,onToggleSaveWorkflow:m,savedConversationally:v=!1,onSend:y,replying:x=!1,onStop:w,flat:k=!1}){const $=d||h,[_,j]=g.useState(!1),[N,M]=g.useState(!1),[C]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),[S,P]=g.useState(!1),[R,L]=g.useState(!1),A=g.useRef(null);g.useEffect(()=>{var W;R&&((W=A.current)==null||W.focus())},[R]);const E=d||v||S,{actionable:B,onFollowUp:G,prompt:Q,records:U,primaryLabel:Y,purple:ee}=Ch(e,o),oe=B&&!G?yh[e.id]??g2(Q).map(W=>({label:W})):void 0,ce=e.status==="resolved"||e.status==="auto_resolved",le=ee||ce,K=W=>{m2(W)?s(W):i(e.id,W)},D=B&&!(oe&&oe.length>0)&&U.length>0?U[0]:void 0;if(le&&!B){const W=S2[e.id],T=_||!W,O=d&&!v&&!S;return n.jsxs(FN,{$divided:!0,children:[W&&n.jsx(BN,{children:n.jsx(Cm,{text:W,onDone:()=>j(!0),instant:C})}),T&&!O&&n.jsxs(ua,{$saved:E,"data-saved":E||void 0,children:[n.jsxs(G2,{children:[n.jsx(Y2,{"aria-hidden":"true",children:n.jsx(Mo,{size:16})}),n.jsx(K2,{children:n.jsx(Cm,{text:"Want me to save this as a reusable workflow?",onDone:()=>M(!0),instant:C})})]}),N&&n.jsx(Q2,{children:E?n.jsx(jo,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:n.jsx(dn,{size:14}),children:"Saved"}):n.jsx(jo,{variant:"primary",size:"sm",onClick:()=>{P(!0),l(e)},children:"Save workflow"})})]}),T&&O&&n.jsx(P2,{})]})}return n.jsxs(sN,{$flat:k,"data-tone":Yl(e),children:[B&&n.jsxs(z2,{children:[n.jsx(Ql,{children:Q}),D&&n.jsx(O2,{children:n.jsx(Qn,{size:"md",src:Sa(D.avatarSeed),name:D.title,alt:D.title})})]}),oe&&oe.length>0?n.jsx(E2,{tasks:oe}):null,n.jsxs(jh,{children:[B&&Y&&n.jsx(jo,{variant:R?"secondary":"primary",size:"sm",onClick:()=>K($l),children:$l}),B&&n.jsx(jo,{variant:R?"secondary":"tertiary",size:"sm",onClick:()=>s("No"),children:"No"}),B&&n.jsx(V2,{variant:"tertiary",size:"sm","data-selected":R||void 0,onClick:()=>L(!0),children:"Other"}),B&&!G&&n.jsx(DN,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":$,"data-on":$||void 0,leadingArtwork:$?n.jsx(dn,{size:14}):n.jsx(Mo,{size:14}),onClick:()=>{d||m==null||m(e.id)},children:"Save as future workflow"})]}),B&&R&&n.jsx(ON,{children:n.jsx(T2,{ref:A,compact:!0,onSend:W=>y==null?void 0:y(W),working:x,onStop:w,placeholder:"Tell Ultron what to do…"})})]})}function qR({thread:e,stage:o,expanded:i,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:m=!1,saved:v=!1}){const y=Yl(e),x=x2(e.id)||e.assessment;return n.jsxs(oN,{"data-tone":y,$expanded:i,children:[n.jsxs(aN,{$expanded:i,children:[n.jsx(Qn,{size:"md",src:vh(e.id),name:wa[e.id],alt:wa[e.id]??""}),n.jsxs(D2,{children:[n.jsx(F2,{children:y2(e)}),x&&n.jsx(B2,{children:x})]})]}),i&&n.jsx(iN,{children:n.jsx(I2,{flat:!0,thread:e,stage:o,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:m,saved:v})})]})}function E2({tasks:e,interactive:o=!0}){return n.jsx(NN,{children:e.map((i,s)=>n.jsx(VR,{task:i,first:s===0,last:s===e.length-1,interactive:o},s))})}function VR({task:e,first:o,last:i,interactive:s=!0}){const[l,d]=g.useState(!1),h=!!e.detail&&s;return n.jsxs(LN,{children:[n.jsx(AN,{"data-first":o||void 0,"data-last":i||void 0,"aria-hidden":"true",children:n.jsx(TN,{})}),n.jsxs(IN,{children:[n.jsxs(EN,{as:h?"button":"div",type:h?"button":void 0,$interactive:h,"aria-expanded":h?l:void 0,onClick:h?()=>d(m=>!m):void 0,children:[n.jsx(U2,{children:e.label}),h&&n.jsx(PN,{"data-open":l||void 0,"aria-hidden":"true",children:n.jsx(Cn,{size:14})})]}),l&&h&&n.jsx(zN,{children:e.detail})]})]})}function GR({steps:e,completed:o}){const[i,s]=g.useState(o?e.length:1);g.useEffect(()=>{if(o){s(e.length);return}if(i>=e.length)return;const d=setTimeout(()=>s(h=>h+1),1600);return()=>clearTimeout(d)},[i,e.length,o]);const l=e.slice(0,i);return n.jsx(yN,{role:"status","aria-live":"polite",children:l.map((d,h)=>{const m=!o&&h===i-1,v=h===l.length-1;return n.jsxs(bN,{children:[n.jsxs(kN,{children:[n.jsx($N,{$done:!m,"aria-hidden":"true",children:m?n.jsx(MN,{children:n.jsx(dt,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):n.jsx(dn,{size:16})}),!v&&n.jsx(_N,{})]}),n.jsxs(CN,{$last:v,children:[n.jsx(jN,{children:d.headline}),n.jsx(SN,{children:d.detail})]})]},h)})})}function YR({thread:e,onDecide:o,analyzed:i,hideDetail:s,hideTrigger:l}){const[d,h]=g.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsxs(fN,{as:"button",type:"button",$interactive:!0,"aria-expanded":d,onClick:()=>h(m=>!m),children:[n.jsx(dt,{mark:"orbit",size:40,tone:"auto",state:i?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),n.jsxs(gN,{children:[n.jsx(vN,{children:i?"Ultron analyzed this event":"Ultron is analyzing this event"}),!s&&n.jsx(xN,{children:e.assessment})]}),n.jsx(mN,{"data-open":d||void 0,"aria-hidden":"true",children:n.jsx(Cn,{size:14})})]}),d&&n.jsx(GR,{steps:b2(e.id),completed:i}),!i&&!l&&n.jsx(W2,{variant:"secondary",size:"sm",onClick:()=>o(e.id),children:"Trigger Needs approval (demo)"})]})}function KR({thread:e,onDecide:o}){return n.jsx(W2,{variant:"secondary",size:"sm",onClick:()=>o(e.id),children:"Trigger Needs approval (demo)"})}function ru(e,o){return{icon:e.icon,headline:e.headline,blocks:e.detail||e.bullets?[{text:e.detail||void 0,bullets:e.bullets}]:void 0,progress:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,usage:j2(o,D$(e))}}function QR(e,o){const i=j2(o,["read","match","policy","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:e.map(s=>`${s.headline} — ${s.detail}`)}],usage:i}}function ZR(e,o){const i=_2(e),s=e.timeline.filter(w=>w.done).length,l=s>0?Math.min(s,i.length):i.length,d=[QR(b2(e.id),e.id),...i.slice(0,l)],h=d.length;if(o.length===0){const w=d.map(k=>({kind:"activity",milestone:k}));return(e.status==="in_progress"||e.status==="monitoring")&&(Xf[e.id]??[]).map(k=>ru(k,e.id)).forEach(k=>w.push({kind:"activity",milestone:k})),{items:w,reasoningCount:h}}const m=xh[e.id],v=[(Xf[e.id]??[]).map(w=>ru(w,e.id)),((m==null?void 0:m.working)??[]).map(w=>ru(w,e.id))],y=w=>w===1&&m?m.prompt:k2[e.id]??e.recommendation,x=d.slice(0,h).map(w=>({kind:"activity",milestone:w}));return o.forEach((w,k)=>{x.push({kind:"question",text:y(k)}),x.push({kind:"message",text:w}),(v[k]??[]).forEach($=>x.push({kind:"activity",milestone:$})),x.push({kind:"reply",text:B$(k)})}),{items:x,reasoningCount:h}}function XR({thread:e,outbound:o=[],chat:i=[],replying:s=!1,analyzing:l=!1,actionCard:d,footSlot:h,onCompleteRun:m,saveWorkflowFlagged:v=!1}){const y=e.status==="in_progress"||e.status==="monitoring",x=e.status==="resolved"||e.status==="auto_resolved",{items:w,reasoningCount:k}=ZR(e,o),$=l||e.status==="in_progress",[_,j]=g.useState(l?Math.min(1,k):$?k:w.length),[N]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),M=o.length>0||y||x?w.length:k,C=e.status==="in_progress"&&o.length>0,[S,P]=g.useState(0);g.useEffect(()=>{P(0)},[_]),g.useEffect(()=>{if(_>=M)return;const F=w[_],z=w[_-1];if((F==null?void 0:F.kind)==="question"||(F==null?void 0:F.kind)==="message"){const de=setTimeout(()=>j(ge=>ge+1),0);return()=>clearTimeout(de)}if((F==null?void 0:F.kind)==="reply"){if(C)return;const de=setTimeout(()=>j(ge=>ge+1),km);return()=>clearTimeout(de)}if(C&&(z==null?void 0:z.kind)!=="message")return;const ae=(z==null?void 0:z.kind)==="message"?km:om,me=setTimeout(()=>j(de=>de+1),ae);return()=>clearTimeout(me)},[_,M,C]),g.useEffect(()=>{if(!C)return;const F=z=>{var be;if(z.key!=="t"&&z.key!=="T"||z.metaKey||z.ctrlKey||z.altKey)return;const ae=z.target instanceof Element?z.target:null;if(ae&&ae.closest('input, textarea, [contenteditable="true"]'))return;const me=w[_-1],de=(me==null?void 0:me.kind)==="activity"?((be=me.milestone.progress)==null?void 0:be.length)??0:0;if((me==null?void 0:me.kind)==="activity"&&S<de-1){P(_e=>_e+1);return}const ge=w[_];(ge==null?void 0:ge.kind)==="activity"?(j(_e=>_e+1),P(0)):m==null||m()};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)},[C,_,S,m]);const R=w.slice(0,_),L=[];for(const F of R){if(F.kind==="question"){L.push({type:"question",text:F.text});continue}if(F.kind==="message"){L.push({type:"msg",text:F.text});continue}if(F.kind==="reply"){L.push({type:"reply",text:F.text});continue}const z=L[L.length-1];z&&z.type==="acts"?z.milestones.push(F.milestone):L.push({type:"acts",milestones:[F.milestone]})}const A=_<w.length,E=R.length>0&&R[R.length-1].kind==="activity",B=_>=M,[G,Q]=g.useState(!1);g.useEffect(()=>{if(!(B&&E&&(y||l)&&!x)){Q(!1);return}Q(!0);const F=setTimeout(()=>Q(!1),om);return()=>clearTimeout(F)},[B,E,_,y,l,x]);const U=(y||l)&&(A||G)&&E;let Y=-1;L.forEach((F,z)=>{F.type==="acts"&&(Y=z)});const ee=[];for(const F of w){if(F.kind!=="activity"){ee.push({type:"other"});continue}const z=ee[ee.length-1];z&&z.type==="acts"?z.milestones.push(F.milestone):ee.push({type:"acts",milestones:[F.milestone]})}let oe=-1;ee.forEach((F,z)=>{F.type==="acts"&&(oe=z)});const ce=L.findIndex(F=>F.type==="acts"),le=(F,z,ae=z)=>{const me=L[F],de=(l||e.status==="in_progress")&&F===oe,ge=ee[F],be=de&&ge&&ge.type==="acts"?ge.milestones:me.milestones,_e=de?me.milestones.length-1:void 0;return n.jsx(Nl,{milestones:be,focusIndex:_e,focusBeat:de&&C?S:void 0,typingIndex:F===oe&&U?me.milestones.length-1:void 0,collapsed:F<Y,hideActions:ae,running:de,showConnectors:F!==ce,reasoning:F===ce,animateIn:!z&&!N})},K=[];for(let F=0;F<L.length;F++){const z=L[F];if(z.type==="question"){K.push({kind:"question",text:z.text});continue}if(z.type==="msg"){K.push({kind:"msg",text:z.text});continue}if(z.type==="reply"){K.push({kind:"response",gi:-1,text:z.text});continue}const ae=L[F+1];ae&&ae.type==="reply"?(K.push({kind:"response",gi:F,text:ae.text}),F++):K.push({kind:"acts",gi:F})}const W=(l||e.status==="in_progress")&&Y>=0||s,T=R.length>0,O=s||y,ne=(()=>{for(let F=K.length-1;F>=0;F--){const z=K[F];if(z.kind==="acts"||z.kind==="response"&&z.gi>=0)return F}return-1})(),q=K.findIndex(F=>F.kind==="question"),X=q===ce+1?q:-1,se=F=>F.kind==="acts"?ar(L[F.gi].milestones):F.kind==="response"?ar(F.gi>=0?L[F.gi].milestones:[]):ar([]);return n.jsxs(n.Fragment,{children:[K.map((F,z)=>{var ge,be;const ae=z===ne?d:null;if(F.kind==="question"){if(z===X)return null;const _e=K[z-1],Le=!!_e&&(_e.kind==="acts"||_e.kind==="response")&&z-1!==ne,Ie=z===q;return n.jsxs(au,{children:[Ie?n.jsx(jm,{thread:e,saveWorkflowFlagged:v}):n.jsx(tN,{text:F.text,animate:!N}),Le&&n.jsx(ca,{time:se(_e)})]},`q${z}`)}if(F.kind==="msg")return n.jsx(nN,{messages:[F.text],animate:!N},`m${z}`);if(F.kind==="acts"){const _e=L[F.gi].milestones,Le=((ge=K[z+1])==null?void 0:ge.kind)==="question",Ie=le(F.gi,!1,!!ae||Le),Oe=z===ce,Ee=ae||(Oe&&z+1===X?n.jsx(jm,{thread:e,saveWorkflowFlagged:v}):null);return Oe&&Ee?n.jsxs(eL,{children:[Ie,Ee,n.jsx(ca,{time:ar(_e)})]},`a${z}`):n.jsxs(g.Fragment,{children:[Ie,ae&&n.jsxs(au,{children:[ae,n.jsx(ca,{time:ar(_e)})]})]},`a${z}`)}const me=F.gi>=0,de=me?L[F.gi].milestones:[];return n.jsxs(g.Fragment,{children:[n.jsx(Iu,{activity:me?le(F.gi,!0):void 0,text:F.text,feedbackTime:ae||((be=K[z+1])==null?void 0:be.kind)==="question"?void 0:ar(de),showMark:!1,animateIn:!1}),ae&&n.jsxs(au,{children:[ae,n.jsx(ca,{time:ar(de)})]})]},`resp${z}`)}),n.jsx(JR,{messages:i,replying:s}),h&&ba.createPortal(T?n.jsxs(KN,{role:O?"status":"img","aria-label":s?"Ultron is replying":W?"Ultron is working":"Ultron",children:[n.jsxs(XN,{"aria-hidden":"true",children:[n.jsx(Sm,{$show:W,children:n.jsx(dt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),n.jsx(Sm,{$show:!W,children:n.jsx(dt,{mark:"magnetic2d",size:24,tone:"auto",state:O?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),W&&n.jsx(ZN,{children:s?"Replying…":n.jsx(GM,{})})]}):null,h),ne<0&&d]})}function Iu({activity:e,text:o,body:i,feedbackTime:s,active:l=!1,showMark:d=!0,animateIn:h=!0}){const m=!!(e||i||s);return n.jsxs(JN,{children:[m&&n.jsxs(tL,{$animate:h,children:[e,i,s&&n.jsx(ca,{time:s})]}),d&&n.jsx(nL,{$animate:h,role:l?"status":"img","aria-label":l?"Ultron is working":"Ultron",children:n.jsx(dt,{mark:"magnetic2d",size:24,tone:"auto",state:l?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function ou(){return[{icon:"clock",headline:"Reviewed your message"}]}function JR({messages:e,replying:o=!1}){return!e.length&&!o?null:n.jsx(YN,{children:e.map((i,s)=>i.role==="operator"?n.jsx(Z2,{children:n.jsx(J2,{children:n.jsx(ev,{children:i.text})})},s):i.kind==="workflow_saved"?n.jsx(Iu,{body:n.jsx(eN,{}),feedbackTime:ar(ou()),showMark:!1},s):n.jsx(Iu,{activity:n.jsx(Nl,{milestones:ou(),collapsed:!0,hideActions:!0}),text:i.text,feedbackTime:ar(ou()),showMark:!1},s))})}function eN(){return n.jsx(P2,{})}function P2(){return n.jsxs(ua,{children:[n.jsxs(G2,{children:[n.jsx(Y2,{"aria-hidden":"true",children:n.jsx(Mo,{size:16})}),n.jsx(K2,{children:"Workflow saved for future use."})]}),n.jsx(Q2,{children:n.jsx(jo,{variant:"secondary",size:"sm",trailingArtwork:n.jsx(Hl,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function tN({text:e,animate:o=!0}){return n.jsx(WN,{$animate:o,children:e})}function jm({thread:e,saveWorkflowFlagged:o=!1}){const{prompt:i,records:s}=Ch(e,0),l=yh[e.id]??g2(i).map(h=>({label:h})),d=!(l&&l.length>0)&&s.length>0?s[0]:void 0;return n.jsxs(UN,{"data-tone":Yl(e),children:[n.jsxs(z2,{children:[n.jsx(Ql,{children:i}),o?n.jsx(jr,{content:"Saved as workflow",children:n.jsx(qN,{"aria-label":"Saved as workflow",children:n.jsx(Mo,{size:18})})}):d&&n.jsx(O2,{children:n.jsx(Qn,{size:"md",src:Sa(d.avatarSeed),name:d.title,alt:d.title})})]}),l&&l.length>0?n.jsx(E2,{tasks:l,interactive:!1}):null]})}function nN({messages:e,animate:o=!0}){return e.length?n.jsx(VN,{children:e.map((i,s)=>n.jsx(Z2,{children:n.jsx(J2,{$animate:o,children:n.jsx(ev,{children:i})})},s))}):null}const rN=p.div`
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
`,oN=p.div`
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
`,aN=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  ${e=>e.$expanded&&qe`
    border-bottom: 1px solid var(--color-border-opaque);
  `}
`,iN=p.div`
  padding: var(--space-4);
`,sN=p.div`
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
`,z2=p.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,O2=p.span`
  flex-shrink: 0;
  display: inline-flex;
`,lN=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  /* Extra breathing room above the title; the bottom stays tight to the body. */
  padding: var(--space-4) 0 var(--space-2);
`,cN=p(De)`
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
`,dN=p.button`
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
`,D2=p.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,F2=p.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,B2=p.span`
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
`,uN=p.div`
  overflow: hidden;
`,hN=p.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,pN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,H2=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`,fN=p.div`
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
`,mN=p.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;p(H2)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const gN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,vN=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,xN=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,yN=p.div`
  display: flex;
  flex-direction: column;
`,wN=je`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,bN=p.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${wN} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,kN=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,_N=p.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,CN=p.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
`,jN=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,SN=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,$N=p.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${e=>e.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,MN=p.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,W2=p(De)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,RN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,NN=p.div`
  display: flex;
  flex-direction: column;
`,Ll="var(--space-8)",LN=p.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,AN=p.div`
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
  &[data-first]::before { top: calc(${Ll} / 2); }
  &[data-last]::before { bottom: calc(100% - ${Ll} / 2); }
  &[data-first][data-last]::before { display: none; }
`,TN=p.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${Ll} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-slate-border-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`,IN=p.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,EN=p.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${Ll};
  cursor: ${e=>e.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,U2=p.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,PN=p.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,zN=p.p`
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
`,Ql=p.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,q2=je`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,jh=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${q2} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ON=p.div`
  animation: ${q2} var(--duration-slow) var(--ease-out);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,jo=p(De)`
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
`,V2=p(De)`
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
`,DN=p(De)`
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
`,FN=p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${e=>e.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,BN=p.p`
  margin: 0;
  max-width: 80%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,ua=p.div`
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
`,G2=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,Y2=p.span`
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
  ${ua}:not([data-saved]):hover & { color: var(--color-content-inverse); }
  ${ua}:not([data-saved]):hover &::after { opacity: 1; }

  /* Saved (settled) card: the glyph quiets to the disabled tone alongside its
     label and button. */
  ${ua}[data-saved] & { color: var(--color-content-disabled); }
`,K2=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);

  /* Saved (settled) card: the label quiets to the disabled tone alongside the
     glyph and button. */
  ${ua}[data-saved] & { color: var(--color-content-disabled); }
`,Q2=p(jh)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,HN=je`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,WN=p.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${HN} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,UN=p.div`
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
  ${Ql} { color: var(--color-content-disabled); }
  ${U2} { color: var(--color-content-disabled); }
`,qN=p.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`,VN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,Z2=p.div`
  display: flex;
  justify-content: flex-end;
`,Sh=je`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,X2=je`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,GN=je`
  from { opacity: 0; }
  to   { opacity: 1; }
`,J2=p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: 16px;
  animation: ${Sh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ev=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,YN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;p.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const KN=p.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${X2} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,QN=je`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,ZN=p.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${QN} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,XN=p.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,Sm=p.span`
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
`,JN=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${Kl}
`,au=p.div`
  display: contents;
  ${Kl}
`,eL=p.div`
  display: flex;
  flex-direction: column;
  ${Kl}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`,tL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${GN} 380ms var(--ease-out) 160ms both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,nL=p.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${X2} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${Sh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
  animation: ${Sh} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
`;const rL={"Coverage Recovery":Qr,"Fill Optimization":Qr,Recruiting:Qr,Users:Qr,Attendance:In,"Attendance Recovery":In,"Time Off":In,Scheduling:In,Compliance:Ti,Onboarding:Co,"Payroll Operations":Q0,Invoicing:Jr,Reporting:$f,"Marketplace Optimization":$f,Engagement:ki,"Autonomous Operations":Ol},oL=e=>rL[e]??Ol,$m=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],aL=2800,iL=200,sL=6,lL=2200,xi=520;function cL({onDetectRisk:e,deckActive:o=!1,deck:i}){const[s,l]=g.useState(0),d=g.useRef(e);d.current=e;const h=g.useRef(new Set),[m,v]=g.useState(!1),y=g.useRef(null);g.useEffect(()=>{const R=setInterval(()=>l(L=>(L+1)%$m.length),aL);return()=>clearInterval(R)},[]);const x=Math.min(sL,Js.length),[w,k]=g.useState([]),$=g.useRef(0),_=g.useRef(Js.filter(R=>!R.risk)),j=g.useRef(Js.filter(R=>R.risk)),N=g.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),M=()=>5+Math.floor(Math.random()*5),C=()=>{const R=N.current,L=j.current;if(L.length>0&&R.sinceRisk>=R.gap)return R.sinceRisk=0,R.gap=M(),L[R.risk++%L.length];R.sinceRisk+=1;const A=_.current;return A.length>0?A[R.routine++%A.length]:L[R.risk++%L.length]},S=R=>R.risk?"risk":Math.random()<.28?"action":"none",P=g.useRef(null);return g.useEffect(()=>{if(Js.length===0){k([]);return}if(o)return;N.current={routine:0,risk:0,sinceRisk:0,gap:M()},$.current=0;const R=Array.from({length:x},()=>{const E=C();return{key:$.current++,event:E,phase:"in",outcome:S(E),resolved:!0}});if(R.length>0){const E=R[R.length-1];E.resolved=!1,P.current={key:E.key,event:E.event,outcome:E.outcome}}else P.current=null;k(R);const L=[],A=setInterval(()=>{var U;const E=C(),B=$.current++,G=S(E),Q=P.current;Q&&Q.outcome==="risk"&&(v(!0),y.current&&clearTimeout(y.current),y.current=setTimeout(()=>v(!1),2800),h.current.has(Q.event.id)||(h.current.add(Q.event.id),(U=d.current)==null||U.call(d,Q.event))),P.current={key:B,event:E,outcome:G},k(Y=>{const ee=Y.filter(le=>le.phase!=="leaving"),oe=ee.length>=x?ee[0].key:null;return[...Y.map(le=>le.key===oe?{...le,phase:"leaving"}:Q&&le.key===Q.key&&!le.resolved?{...le,resolved:!0}:le),{key:B,event:E,phase:"entering",outcome:G,resolved:!1}]}),L.push(setTimeout(()=>{k(Y=>Y.map(ee=>ee.key===B?{...ee,phase:"in"}:ee))},40)),L.push(setTimeout(()=>{k(Y=>Y.filter(ee=>ee.phase!=="leaving"))},xi))},lL);return()=>{clearInterval(A),L.forEach(clearTimeout),y.current&&clearTimeout(y.current)}},[x,o]),n.jsxs(dL,{children:[n.jsxs(uL,{children:[n.jsx(hL,{children:n.jsx(dt,{mark:"circle",size:iL,tone:"auto",state:"active",coreGradient:m,"aria-label":"Ultron"})}),n.jsx(pL,{children:"Ultron"}),n.jsx(fL,{role:"status","aria-live":"polite",children:n.jsxs(gL,{children:[n.jsx(vL,{children:$m[s]}),n.jsxs(xL,{"aria-hidden":"true",children:[n.jsx("span",{children:"."}),n.jsx("span",{children:"."}),n.jsx("span",{children:"."})]})]},s)})]}),o?n.jsx(wL,{children:i},"deck"):w.length>0&&n.jsx(yL,{"aria-label":"Live event feed",children:w.map(R=>{const L=oL(R.event.capability);return n.jsx(bL,{"data-phase":R.phase,"aria-hidden":R.phase==="leaving"||void 0,children:n.jsx(kL,{children:n.jsxs(_L,{"data-outcome":R.resolved?R.outcome:"pending",children:[n.jsxs(CL,{children:[n.jsx(jL,{"aria-hidden":"true",children:n.jsx(L,{size:16})}),n.jsxs(SL,{children:[n.jsx(LL,{children:R.event.capability}),n.jsx(AL,{children:R.event.title})]})]}),n.jsx($L,{children:R.resolved?R.outcome==="risk"?n.jsxs(n.Fragment,{children:[n.jsx(dt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),n.jsx(ML,{children:"Risk detected"})]}):R.outcome==="action"?n.jsxs(n.Fragment,{children:[n.jsx(dt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),n.jsx(NL,{children:"Action required"})]}):n.jsx(RL,{children:"No action needed"}):n.jsx(dt,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},R.key)})},"feed")]})}const dL=p.div`
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
`,$h=je`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,uL=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${$h} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,hL=p.div`
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
`,pL=p.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,fL=p.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,mL=je`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,gL=p.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${mL} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,vL=p.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,tv=je`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,xL=p.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${tv} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,yL=p.div`
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
  animation: ${$h} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,wL=p.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  animation: ${$h} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,bL=p.div`
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: scale(1);
  transition:
    grid-template-rows ${xi}ms var(--ease-out, ease),
    opacity ${xi}ms var(--ease-out, ease),
    transform ${xi}ms var(--ease-out, ease);

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
    transition: opacity ${xi}ms linear;
    &[data-phase='entering'],
    &[data-phase='leaving'] {
      transform: none;
    }
  }
`,kL=p.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,_L=p.div`
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
`,CL=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,jL=p.span`
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
`,SL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,$L=p.div`
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
    animation: ${tv} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;const ML=p.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,RL=p.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,NL=p.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,LL=p.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,AL=p.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,TL=5e3,IL=5,vl=320,EL=e=>e.status==="needs_approval"||e.status==="recommended";function PL({threads:e,stageById:o,onAction:i,onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,pendingWorkflowIds:h,savedWorkflowIds:m,onReveal:v,onClose:y}){const[x]=g.useState(()=>e.filter(EL).map((L,A)=>({t:L,index:A})).sort((L,A)=>ya[L.t.severity]-ya[A.t.severity]||L.index-A.index).slice(0,IL).map(({t:L})=>L.id)),[w,k]=g.useState(1),[$,_]=g.useState(new Set),[j,N]=g.useState(new Set),M=g.useRef(new Map);g.useEffect(()=>{if(w>=x.length)return;const L=setTimeout(()=>k(A=>A+1),TL);return()=>clearTimeout(L)},[w,x.length]),g.useEffect(()=>{const L=A=>{A.key==="Escape"&&y()};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[y]),g.useEffect(()=>{const L=M.current;return()=>{L.forEach(A=>clearTimeout(A))}},[]);const C=x.findIndex(L=>!$.has(L));g.useEffect(()=>{if(x.length>0&&C===-1){const L=setTimeout(y,260);return()=>clearTimeout(L)}},[C,x.length,y]);const S=Math.max(w,C+1);g.useEffect(()=>{x.slice(0,S).forEach(L=>v==null?void 0:v(L))},[S]);const P=(L,A)=>{N(B=>new Set(B).add(L.id));const E=setTimeout(()=>{N(B=>{const G=new Set(B);return G.delete(L.id),G}),_(B=>new Set(B).add(L.id)),M.current.delete(L.id),i(L.id,A)},vl);M.current.set(L.id,E)},R=x.length-$.size;return n.jsxs(zL,{role:"region","aria-label":"New cases",children:[n.jsxs(DL,{children:[n.jsx(Zt,{children:"Needs your decision"}),n.jsx(ka,{children:R}),n.jsx(FL,{}),n.jsx(De,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Dismiss (Esc)",onClick:y,children:n.jsx(_i,{size:16})})]}),n.jsx(OL,{children:n.jsx(BL,{children:x.slice(0,S).map((L,A)=>{if($.has(L))return null;const E=e.find(B=>B.id===L);return E?n.jsx(WL,{"data-exiting":j.has(L)||void 0,children:n.jsx(qR,{thread:E,stage:o[L]??0,expanded:A===C,onAction:(B,G)=>P(E,G),onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,saveIntent:h.includes(L),saved:m.includes(L)})},L):null})})})]})}const zL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex: 1;
  min-height: 0;
  width: 100%;
  /* The deck lives inside the landing Stage (which centers its text); reset to
     left so card titles / subtitles / prompts read as a normal left-aligned card. */
  text-align: left;
`,OL=p.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* Bottom dissolve so a long stack fades into the page foot as it scrolls. */
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
`,DL=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,FL=p.div`
  flex: 1;
`,BL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,HL=je`
  from { opacity: 0; transform: translateY(var(--space-4)) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,WL=p.div`
  animation: ${HL} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  transition:
    opacity ${vl}ms var(--ease-out, ease),
    transform ${vl}ms var(--ease-out, ease);

  &[data-exiting] {
    opacity: 0;
    transform: translateY(calc(-1 * var(--space-3))) scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: opacity ${vl}ms linear;
    &[data-exiting] { transform: none; }
  }
`,UL={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},Mm={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},qL=["new","working","done"],VL=280;function GL({threads:e,stageById:o,section:i,analyzedIds:s,outboundByThread:l,chatByThread:d,selectedId:h,onDecide:m,onAction:v,onCompleteRun:y,onRefinement:x,onSaveWorkflow:w,pendingWorkflowIds:k,onToggleSaveWorkflow:$,savedWorkflowIds:_,onSend:j,replyingIds:N,onStop:M,onClose:C,onDetectRisk:S,onRevealNew:P}){const[R,L]=g.useState(!1),A=()=>{R||(L(!0),window.setTimeout(()=>{L(!1),C()},VL))},[E,B]=g.useState(!1);g.useEffect(()=>{if(i!=="live"){B(!1);return}const z=ae=>{if(ae.key!=="t"&&ae.key!=="T"||ae.metaKey||ae.ctrlKey||ae.altKey)return;const me=ae.target instanceof Element?ae.target:null;me&&me.closest('input, textarea, [contenteditable="true"]')||B(de=>!de)};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[i]);const G=(z,ae)=>(z.t.status==="analyzing"?1:0)-(ae.t.status==="analyzing"?1:0)||ya[z.t.severity]-ya[ae.t.severity]||z.index-ae.index,Q=e.map((z,ae)=>({t:z,index:ae})).filter(({t:z})=>UL[i].includes(z.status)).sort(G).map(({t:z})=>z.id),[U,Y]=g.useState(()=>h??null),ee=g.useRef({}),oe=g.useRef(null),ce=z=>{var ae;z==="Other"&&((ae=oe.current)==null||ae.focus()),x(z)},le=g.useRef(null),K=g.useRef(null),[D,W]=g.useState(null),T=g.useRef(void 0);g.useEffect(()=>{var z;if(T.current===void 0){T.current=h;return}!h||h===T.current||(T.current=h,Y(h),(z=ee.current[h])==null||z.scrollIntoView({behavior:"smooth",block:"start"}))},[h]);const O=qL.includes(i),ne=O?h&&Q.includes(h)?h:Q[0]??null:null;g.useEffect(()=>{var ze;const z=le.current,ae=K.current;if(!z||!ae)return;const de=((ze=window.matchMedia)==null?void 0:ze.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",ge=160;let be=!0,_e=z.scrollHeight;const Le=()=>{be=z.scrollHeight-z.scrollTop-z.clientHeight<=ge};z.addEventListener("scroll",Le,{passive:!0});let Ie=0;const Oe=()=>{Ie=performance.now()};z.addEventListener("pointerdown",Oe,{passive:!0});const Ee=new ResizeObserver(()=>{const Be=z.scrollHeight,Ke=performance.now()-Ie<500;Be>_e+1&&be&&!Ke&&z.scrollTo({top:Be,behavior:de}),_e=Be});return Ee.observe(ae),()=>{z.removeEventListener("scroll",Le),z.removeEventListener("pointerdown",Oe),Ee.disconnect()}},[ne,i]),g.useEffect(()=>{if(!O||!ne)return;const z=le.current;if(!z)return;const ae=()=>z.scrollTo({top:z.scrollHeight,behavior:"auto"}),me=requestAnimationFrame(ae),de=[80,240,480].map(ge=>window.setTimeout(ae,ge));return()=>{cancelAnimationFrame(me),de.forEach(clearTimeout)}},[ne,O]);const q=ne?e.find(z=>z.id===ne)??null:null,X=!!q&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(q.status)||f2(q)),se=X&&q?q:null,F=!(X&&q&&["needs_approval","recommended","unresolved","monitoring"].includes(q.status))||!!(q!=null&&q.analysisResult);return i==="live"?n.jsx(Rm,{$static:!0,children:n.jsx(cL,{onDetectRisk:S,deckActive:E,deck:E?n.jsx(PL,{threads:e,stageById:o,onAction:v,onRefinement:ce,onSaveWorkflow:w,onToggleSaveWorkflow:$,pendingWorkflowIds:k,savedWorkflowIds:_,onReveal:P,onClose:()=>B(!1)}):null})},"live"):n.jsxs(Rm,{$closing:R,children:[n.jsx(QL,{ref:le,children:O?n.jsx(Nm,{ref:K,children:ne===null?n.jsx(Lm,{role:"status",children:Mm[i]}):(()=>{const z=e.find(Le=>Le.id===ne);if(!z)return null;const ae=z.status==="analyzing",me=z.status==="resolved"||z.status==="auto_resolved",de=z.status==="in_progress",ge=z.status==="needs_approval"||z.status==="recommended",be=z.status==="monitoring",_e=z.status==="workflow_available";return n.jsxs(n.Fragment,{children:[n.jsx(tA,{children:n.jsx(_m,{thread:z,stage:o[z.id]??0,expanded:de?!1:F,detachActionable:X,detachAnalyzing:ae,detachTrail:me||_e,onToggle:()=>{},onClose:A,onDecide:m,onAction:v,onRefinement:ce,onSaveWorkflow:w},z.id)}),(ae||ge||de||me||be||_e)&&n.jsx(XR,{thread:z,outbound:l[z.id]??[],chat:d[z.id]??[],replying:N.includes(z.id),analyzing:ae,footSlot:D,onCompleteRun:()=>y(z.id),saveWorkflowFlagged:k.includes(z.id)||_.includes(z.id),actionCard:se&&se.id===z.id?n.jsx(I2,{thread:se,stage:o[se.id]??0,onAction:v,onRefinement:ce,onSaveWorkflow:w,saveIntent:k.includes(se.id),onToggleSaveWorkflow:$,saved:_.includes(se.id),savedConversationally:(d[se.id]??[]).some(Le=>Le.kind==="workflow_saved"),onSend:Le=>j(se.id,Le),replying:N.includes(se.id),onStop:()=>M(se.id)},`action-${se.id}`):void 0},z.id)]})})()}):n.jsx(Nm,{ref:K,children:Q.length===0?n.jsx(Lm,{role:"status",children:Mm[i]}):Q.map(z=>{const ae=e.find(me=>me.id===z);return ae?n.jsx(eA,{ref:me=>{ee.current[z]=me},children:n.jsx(_m,{thread:ae,stage:o[z]??0,expanded:U===z,onToggle:()=>Y(me=>me===z?null:z),onDecide:m,onAction:v,onRefinement:x,onSaveWorkflow:w})},z):null})})}),O&&ne&&q&&n.jsx(ZL,{children:n.jsxs(XL,{children:[n.jsx(JL,{ref:W}),q.status==="analyzing"&&!s.includes(q.id)&&n.jsx(KR,{thread:q,onDecide:m}),n.jsx(T2,{ref:oe,onSend:z=>j(ne,z),working:N.includes(ne),onStop:()=>M(ne),placeholder:c$(q.status,N.includes(ne))},`composer-${ne}`)]})})]},"feed")}const YL=je`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,KL=je`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,Rm=p.div`
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
    animation: ${KL} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${e=>e.$closing&&qe`
    animation: ${YL} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,QL=p.div`
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
`,ZL=p.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);
`,XL=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,JL=p.div`
  display: flex;
  &:empty { display: none; }
`,Nm=p.div`
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
`,eA=p.div`
  scroll-margin-top: var(--space-5);
`,tA=p.div`
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
`,Lm=p.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;function nA({messages:e,replying:o,onSend:i}){const[s,l]=g.useState(""),d=g.useRef(null);g.useEffect(()=>{var y;(y=d.current)==null||y.scrollIntoView({block:"end",behavior:"smooth"})},[e,o]);const h=s.trim().length>0&&!o,m=e.length===0,v=()=>{const y=s.trim();!y||o||(i(y),l(""))};return n.jsxs(rA,{children:[n.jsx(oA,{children:m?n.jsxs(aA,{children:[n.jsx(iA,{"aria-hidden":"true",children:n.jsx(dt,{mark:"circle",size:96,tone:"auto",state:"active","aria-label":"Ultron"})}),n.jsx(sA,{children:"New page"}),n.jsx(lA,{children:"Ask Ultron to set something up, look into a risk, or draft a change."})]}):n.jsxs(cA,{children:[e.map((y,x)=>n.jsx(Am,{"data-from":y.role,children:n.jsx(dA,{"data-from":y.role,children:y.text})},x)),o&&n.jsx(Am,{"data-from":"ultron",children:n.jsxs(hA,{"aria-label":"Ultron is replying",children:[n.jsx(iu,{}),n.jsx(iu,{}),n.jsx(iu,{})]})}),n.jsx("div",{ref:d})]})}),n.jsx(pA,{children:n.jsxs(fA,{onSubmit:y=>{y.preventDefault(),v()},children:[n.jsx(mA,{rows:1,value:s,placeholder:"Ask Ultron anything…","aria-label":"Message Ultron",onChange:y=>l(y.target.value),onKeyDown:y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),v())}}),n.jsx(gA,{children:n.jsx(_a,{state:h?"ready":"disabled-invalid",onSend:v})})]})})]})}const rA=p.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,oA=p.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,aA=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) var(--space-6);
  text-align: center;
`,iA=p.span`
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
`,sA=p.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,lA=p.p`
  margin: 0;
  max-width: 420px;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,cA=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,Am=p.div`
  display: flex;
  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }
`,dA=p.div`
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
`,uA=je`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,hA=p.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) 0;
`,iu=p.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${uA} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,pA=p.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  justify-content: center;
`,fA=p.form`
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
`,mA=p.textarea`
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
`,gA=p.div`
  flex-shrink: 0;
  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`,vA={"Shift Drop Recovery":{new:"Shift Replacement Needed",working:"Finding Shift Replacement",done:"Shift Replacement Found"},"Shift Release Recovery":{new:"Released Shift Needs Filling",working:"Filling Released Shift",done:"Released Shift Filled"},"Time-Off Coverage Check":{new:"Time-Off Decision Needed",working:"Checking Time-Off Coverage",done:"Time-Off Handled"},"Document Filing":{new:"Document Needs Filing",working:"Filing Document",done:"Document Filed"},"New Lead Screening":{new:"New Lead to Screen",working:"Screening New Lead",done:"Lead Screened"},"Shift Offer":{new:"Shift Ready to Offer",working:"Offering Shift",done:"Shift Offered"},"Candidate Onboarding":{new:"Onboarding to Start",working:"Onboarding Candidate",done:"Candidate Onboarded"},"Missed Clock-In":{new:"Missed Clock-In to Check",working:"Checking Missed Clock-In",done:"Clock-In Resolved"},"Informal Cancellation":{new:"Cancellation Needs Coverage",working:"Covering Cancellation",done:"Cancellation Covered"},"Bulk Fill":{new:"Shifts Need Filling",working:"Filling Shifts",done:"Shifts Filled"},"Open Timesheet":{new:"Timesheet Needs Fixing",working:"Fixing Timesheet",done:"Timesheet Fixed"},"Invoice Roll-Up":{new:"Charge Needs Billing",working:"Adding Charge to Invoice",done:"Charge Billed"},"Schedule Confirmation":{new:"Schedule Needs Confirming",working:"Confirming Schedule",done:"Schedule Confirmed"},"Birthday Greeting":{new:"Birthday to Send",working:"Sending Birthday Wish",done:"Birthday Sent"},"Scheduled Report":{new:"Report Needs Publishing",working:"Publishing Report",done:"Report Published"},"Clock-In Approval":{new:"Clock-In Needs Approval",working:"Approving Clock-In",done:"Clock-In Approved"},"Profile Update":{new:"Profile Needs Updating",working:"Updating Profile",done:"Profile Updated"},"Autonomous Fill":{new:"Auto-Fill Needs Confirming",working:"Confirming Auto-Fill",done:"Shift Auto-Filled"},"Invoice Reconciliation":{new:"Payment Needs Reconciling",working:"Reconciling Payment",done:"Payment Reconciled"},"Credential Lapse":{new:"Expired Credential to Fix",working:"Renewing Credential",done:"Credential Renewed"}};function Tm(e,o){const i=vA[e];return i?o==="done"?i.done:o==="new"?i.new:i.working:e}const Eu=32;function xA({onNew:e}){return n.jsxs(yA,{children:[n.jsx(wA,{"aria-hidden":"true",children:n.jsx(dt,{mark:"circle",size:Eu,tone:"auto",state:"active","aria-label":"Ultron"})}),n.jsx(bA,{children:"Ultron"}),n.jsx(kA,{role:"button",tabIndex:0,"aria-label":"New page",onClick:o=>{o.stopPropagation(),e==null||e()},onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),o.stopPropagation(),e==null||e())},children:n.jsx(Ro,{size:16})})]})}const yA=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-width: 0;
  font-family: var(--font-sans);
`,wA=p.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: ${Eu}px;
  height: ${Eu}px;
`,bA=p.span`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,kA=p.span`
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
`,_A=45;function CA({text:e,className:o}){const[i,s]=g.useState(0);g.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){s(e.length);return}s(0);let h=0;const m=setInterval(()=>{h+=1,s(h),h>=e.length&&clearInterval(m)},_A);return()=>clearInterval(m)},[e]);const l=i>=e.length;return n.jsxs(jA,{className:o,children:[e.slice(0,i),!l&&n.jsx($A,{"aria-hidden":"true",children:"|"})]})}const jA=p.span`
  white-space: nowrap;
`,SA=je`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,$A=p.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${SA} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,su=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function MA(){const e=g.useMemo(()=>["All",...Array.from(new Set(su.map(l=>l.tag)))],[]),[o,i]=g.useState("All"),s=o==="All"?su:su.filter(l=>l.tag===o);return n.jsx(RA,{children:n.jsxs(NA,{children:[n.jsxs(LA,{children:[n.jsx(dt,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),n.jsxs(AA,{children:[n.jsx(TA,{children:"Memory"}),n.jsx(IA,{children:"What Ultron has learned and carries between sessions."})]})]}),n.jsx(EA,{role:"tablist","aria-label":"Filter memories by category",children:e.map(l=>n.jsx(PA,{type:"button",role:"tab","aria-selected":o===l,$active:o===l,onClick:()=>i(l),children:l},l))}),n.jsx(zA,{children:s.map((l,d)=>n.jsx(OA,{children:n.jsxs(DA,{children:[n.jsx(FA,{children:l.title}),n.jsx(BA,{children:l.detail})]})},d))})]})})}const RA=p.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,NA=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,LA=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,AA=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,TA=p.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,IA=p.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,EA=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,PA=p.button`
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
`,zA=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,OA=p.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,DA=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,FA=p.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,BA=p.span`
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
`;const Pu=[{id:"employees",label:"Employees",icon:n.jsx(Qr,{size:16})},{id:"shifts",label:"Shifts",icon:n.jsx(In,{size:16})},{id:"locations",label:"Locations",icon:n.jsx(Ju,{size:16})},{id:"timesheets",label:"Timesheets",icon:n.jsx(Co,{size:16})},{id:"credentials",label:"Credentials",icon:n.jsx(Ti,{size:16})}];p.div`
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
`;function HA({collectionId:e}){const o=Pu.find(i=>i.id===e)??Pu[0];return n.jsxs(WA,{children:[n.jsxs(UA,{children:[n.jsx(qA,{children:o.label}),n.jsx(ka,{children:"Account database"})]}),n.jsxs(VA,{role:"status",children:[n.jsx(GA,{"aria-hidden":"true",children:n.jsx(V0,{size:24})}),n.jsxs(YA,{children:[o.label," — demo stub"]}),n.jsxs(KA,{children:["Connect a data source to browse ",o.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const WA=p.div`
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
`,UA=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,qA=p.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,VA=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,GA=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,YA=p.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,KA=p.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`,Im=72,Em=.58;function Tn(e){const o=Math.sin(e*127.1+311.7)*43758.5453;return o-Math.floor(o)}function Pm(e,o,i,s){const l=getComputedStyle(o).getPropertyValue(i).trim();if(!l)return s;e.fillStyle="#000",e.fillStyle=l;const d=e.fillStyle;if(d.startsWith("#")){const m=d.slice(1),v=parseInt(m.length===3?m.split("").map(y=>y+y).join(""):m,16);return(v>>16&255)+","+(v>>8&255)+","+(v&255)}const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:s}const QA=e=>{const[o,i,s]=e.split(",").map(Number);return(.299*o+.587*i+.114*s)/255};function nv({links:e=0}){const o=g.useRef(null),i=g.useRef(0),s=g.useRef(e);return s.current=Math.max(0,Math.min(1,e)),g.useEffect(()=>{const l=o.current;if(!l)return;const d=l.getContext("2d");if(!d)return;const h=Math.min(2,window.devicePixelRatio||1);let m=0,v=0;const y=()=>{m=l.clientWidth,v=l.clientHeight,l.width=Math.max(2,Math.round(m*h)),l.height=Math.max(2,Math.round(v*h)),d.setTransform(h,0,0,h,0,0)};y();const x=new ResizeObserver(y);x.observe(l);const w=Pm(d,l,"--color-bg-primary","255,255,255"),k=QA(w)<.5,$=Pm(d,l,"--color-content-tertiary",k?"148,163,184":"71,85,105"),_=Array.from({length:Im},(R,L)=>{const A=L%3===0,E=A?1-.5*Math.pow(Tn(L*3.1),1.6):Tn(L*3.1),B=A?.5*Math.pow(Tn(L*5.7),1.6):Tn(L*5.7);return{bx:E,by:B,vx:(Tn(L*7.3)-.5)*.008,vy:(Tn(L*9.9)-.5)*.008,wA:6+Tn(L*4.7)*10,wS:.25+Tn(L*6.1)*.5,wP:Tn(L*8.2)*6.2832,r:.8+Tn(L*2.3)*1.6,twS:.8+Tn(L)*1.4,twP:Tn(L*11.4)*6.2832}}),j=(R,L)=>{const A=((R.bx+R.vx*L)%1+1)%1,E=((R.by+R.vy*L)%1+1)%1,B=A-.5,G=Math.abs(B)*2,Q=G<1e-4?1:(Em+(1-Em)*G)/G;return{x:(.5+B*Q)*m+Math.cos(L*R.wS+R.wP)*R.wA,y:E*v+Math.sin(L*R.wS*.8+R.wP)*R.wA}},N=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),M=R=>{i.current+=(s.current-i.current)*.04,Math.abs(i.current-s.current)<.001&&(i.current=s.current),d.clearRect(0,0,m,v);const L=_.map(A=>j(A,R));for(let A=0;A<Im;A++){const E=_[A],B=.35+.65*(.5+.5*Math.sin(R*E.twS+E.twP)),G=.82+i.current*.18;d.fillStyle="rgba("+$+","+B*G*(k?.55:.42)+")",d.beginPath(),d.arc(L[A].x,L[A].y,E.r*(.7+.3*B),0,6.2832),d.fill()}};if(N)return i.current=s.current,M(1.15),()=>x.disconnect();M(1.15);let C=0;const S=performance.now(),P=R=>{M(1.15+(R-S)/1e3),C=requestAnimationFrame(P)};return C=requestAnimationFrame(P),()=>{cancelAnimationFrame(C),x.disconnect()}},[]),n.jsx(ZA,{"aria-hidden":"true",children:n.jsx("canvas",{ref:o})})}const ZA=p.div`
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
    radial-gradient(26% 28% at 68% 62%, color-mix(in srgb, var(--aurora-peach) var(--aurora-rim), transparent), transparent 70%),
    radial-gradient(120% 90% at 100% 0%, var(--color-bg-secondary) 0%, transparent 55%);

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

  & > canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
`,XA=p.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,el=p.div`
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
`,zm=.025,ui=560,hi=480,JA=260,eT=.08,tT=.18,nT=.06,rT=350,oT=9,tl=[168,197,224,250,285,330,390],aT=e=>{const o=tl.length-1,i=Math.abs((e%2+2)%2-1)*o,s=Math.min(o-1,Math.floor(i));return(tl[s]+(tl[s+1]-tl[s])*(i-s))%360},xl=5,Om=360,iT=560,sT=.055,lT=.03,pi=320,cT=.84,zu=xl+1,yl=[];for(let e=0;e<zu;e++)for(let o=e+1;o<zu;o++)yl.push([e,o]);const Dm=(e,o)=>aT((e*oT+80*Math.sin(e*.23+o)+50*Math.sin(e*.071+o*1.7))/360),nl=(e,o)=>{const i=(s,l)=>`${(50+16*Math.sin(e*s+l+o)).toFixed(1)}%`;return`${i(.9,0)} ${i(1.3,2.1)} ${i(1.1,4.2)} ${i(.8,1.3)} / ${i(1.2,3.1)} ${i(.7,.6)} ${i(1.4,5)} ${i(1,2.4)}`},Fm=e=>(e=Math.max(0,Math.min(1,e)),e*e*(3-2*e)),lu=[{nx:-1,ny:0},{nx:1,ny:0},{nx:0,ny:-1},{nx:0,ny:1}];function rv(){const e=g.useRef(null),o=g.useRef(null),i=g.useRef([]),s=g.useRef([]),l=g.useRef([]);return g.useEffect(()=>{const d=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),h=e.current,m=o.current;if(!h||!m)return;const v=Array.from({length:4},()=>Math.random()*Math.PI*2),y=()=>Math.random()*Math.PI*2,x=Array.from({length:xl},()=>({size:Om+Math.random()*(iT-Om),ax:.3+Math.random()*.16,ay:.3+Math.random()*.16,sx1:.05+Math.random()*.07,px1:y(),sx2:.11+Math.random()*.09,px2:y(),sy1:.05+Math.random()*.07,py1:y(),sy2:.11+Math.random()*.09,py2:y(),bs:.12+Math.random()*.14,bp:y(),mp:y(),cs:.4+Math.random()*2.6}));x.forEach((A,E)=>{const B=s.current[E];B&&(B.style.width=`${A.size.toFixed(0)}px`,B.style.height=`${A.size.toFixed(0)}px`)});const w=(A,E,B)=>{A.style.setProperty("--glow-ha",Dm(E,v[0]+B).toFixed(1)),A.style.setProperty("--glow-hb",Dm(E,v[1]+B*1.3).toFixed(1)),A.style.setProperty("--glow-hc",((318+42*(.5+.5*Math.sin(E*.17+v[2]*1.9+B)))%360).toFixed(1)),A.style.setProperty("--glow-cx",`${(35+14*Math.sin(E*.4+v[2]+B)).toFixed(1)}%`),A.style.setProperty("--glow-cy",`${(35+14*Math.cos(E*.31+v[3]+B)).toFixed(1)}%`)},k=(A,E,B)=>{const G=new Array(zu).fill(null);for(let Q=0;Q<xl;Q++){const U=x[Q],Y=s.current[Q];if(!Y)continue;const ee=E*(.5+U.ax*(.68*Math.sin(A*U.sx1+U.px1)+.32*Math.sin(A*U.sx2+U.px2))),oe=B*(.5+U.ay*(.68*Math.sin(A*U.sy1+U.py1)+.32*Math.sin(A*U.sy2+U.py2))),ce=sT+lT*(.5+.5*Math.sin(A*U.bs+U.bp));Y.style.transform=`translate(${(ee-U.size/2).toFixed(1)}px, ${(oe-U.size/2).toFixed(1)}px)`,Y.style.opacity=ce.toFixed(3),Y.style.borderRadius=nl(A,U.mp),w(Y,A,U.cs),G[Q+1]={x:ee,y:oe,size:U.size,o:ce}}return G},$=(A,E)=>{for(let B=0;B<yl.length;B++){const G=l.current[B];if(!G)continue;const[Q,U]=yl[B],Y=E[Q],ee=E[U],oe=Y&&ee?Math.min(Y.o,ee.o):0;if(!Y||!ee||oe<=.005){G.style.opacity="0";continue}const ce=ee.x-Y.x,le=ee.y-Y.y,K=Math.hypot(ce,le),D=(Y.size+ee.size)/2*cT,W=Fm(1-K/D);if(W<=.001){G.style.opacity="0";continue}const T=Math.max(.35,K*.9/pi),O=.3+.4*W;G.style.transform=`translate(${((Y.x+ee.x)/2-pi/2).toFixed(1)}px, ${((Y.y+ee.y)/2-pi/2).toFixed(1)}px) rotate(${Math.atan2(le,ce).toFixed(3)}rad) scale(${T.toFixed(3)}, ${O.toFixed(3)})`,G.style.opacity=(oe*W).toFixed(3),G.style.borderRadius=nl(A,1.1*(B+1)),w(G,A,.23*(B+1))}};if(d){const E=k(2.4,h.clientWidth,h.clientHeight);$(2.4,E);return}let _=null,j=null,N=-1/0,M=0,C=0,S=0;const P=A=>{const E=h.getBoundingClientRect(),B=_===null;_=A.clientX-E.left,j=A.clientY-E.top,N=A.timeStamp,B&&(M=_,C=j)};window.addEventListener("pointermove",P,{passive:!0});let R=0;const L=A=>{R=requestAnimationFrame(L);const E=A/1e3,B=h.clientWidth,G=h.clientHeight,Q=k(E,B,G);if(_!==null&&j!==null){M+=(_-M)*zm,C+=(j-C)*zm;const U=A-N<rT?tT:eT;S+=(U-S)*nT,m.style.transform=`translate(${M-ui/2}px, ${C-ui/2}px)`,m.style.opacity=S.toFixed(3),m.style.borderRadius=nl(E,0),w(m,E,0),Q[0]={x:M,y:C,size:ui,o:S};for(let Y=0;Y<lu.length;Y++){const ee=i.current[Y];if(!ee)continue;const{nx:oe,ny:ce}=lu[Y],le=oe<0?M:oe>0?B-M:ce<0?C:G-C,K=Fm(1-le/JA);if(K<=.001){ee.style.opacity="0";continue}const D=oe!==0?oe<0?0:B:M,W=ce!==0?ce<0?0:G:C,T=hi*(.5-.22*K),O=.55+.45*K;ee.style.transform=`translate(${D+oe*T-hi/2}px, ${W+ce*T-hi/2}px) scale(${O.toFixed(3)})`,ee.style.opacity=(S*K).toFixed(3),ee.style.borderRadius=nl(E,.9*(Y+1)),w(ee,E,.35*(Y+1))}}$(E,Q)};return R=requestAnimationFrame(L),()=>{cancelAnimationFrame(R),window.removeEventListener("pointermove",P)}},[]),n.jsxs(XA,{ref:e,"aria-hidden":"true",children:[yl.map((d,h)=>n.jsx(el,{ref:m=>{l.current[h]=m},style:{width:pi,height:pi,opacity:0}},`bridge-${h}`)),Array.from({length:xl},(d,h)=>n.jsx(el,{ref:m=>{s.current[h]=m},style:{opacity:0}},`ambient-${h}`)),lu.map((d,h)=>n.jsx(el,{ref:m=>{i.current[h]=m},style:{width:hi,height:hi,opacity:0}},h)),n.jsx(el,{ref:o,style:{width:ui,height:ui,opacity:0}})]})}function ov({size:e=22,className:o}){return n.jsxs("svg",{width:e,height:e*(80/94),viewBox:"0 0 94 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,role:"img","aria-label":"Teambridge",children:[n.jsx("path",{d:"M66.4971 48.5203V58.6884C67.2261 59.1629 67.9007 59.5855 68.5508 59.9754L80.003 66.8496L84.2411 59.7409L72.789 52.8667C70.6209 51.5661 68.5073 50.1045 66.4998 48.523",fill:"currentColor"}),n.jsx("path",{d:"M80.0032 67.5995C79.8699 67.5995 79.7366 67.5641 79.6197 67.4932L68.1675 60.619C67.5065 60.2236 66.8292 59.7955 66.092 59.3183C65.8798 59.1792 65.752 58.9447 65.752 58.6911V48.5312C65.752 48.5121 65.752 48.493 65.752 48.4767C65.7764 48.0867 66.1001 47.7759 66.4973 47.7759C66.6823 47.7759 66.8509 47.844 66.9815 47.9558C68.9537 49.5101 71.0374 50.9471 73.17 52.2287L84.6222 59.1029C84.9758 59.3156 85.09 59.7737 84.8806 60.1309L80.6425 67.2396C80.5418 67.4086 80.3759 67.5341 80.1828 67.5804C80.1229 67.5968 80.0631 67.6022 80.0005 67.6022L80.0032 67.5995ZM67.2426 58.2821C67.8356 58.6639 68.3906 59.0102 68.9346 59.3347L79.7448 65.8244L83.2158 60L72.4029 53.5103C70.6375 52.4496 68.9074 51.288 67.2426 50.0391V58.2821Z",fill:"currentColor"}),n.jsx("path",{d:"M83.7788 39.1704C77.5032 35.1729 74.1628 32.7679 66.5081 23.396V36.4354C70.1124 39.7866 74.8184 43.3423 78.2785 45.6465L88.8656 52.0053L93.1554 44.8039L82.7125 38.5323L83.7788 39.1731V39.1704Z",fill:"currentColor"}),n.jsx("path",{d:"M88.8657 52.7632C88.7297 52.7632 88.5964 52.7277 88.4767 52.6568L77.8896 46.298C77.8896 46.298 77.8706 46.2871 77.8597 46.2789C74.6716 44.1575 69.8785 40.6045 65.9941 36.9942C65.839 36.8497 65.752 36.6479 65.752 36.438V23.3985C65.752 23.0795 65.9532 22.7932 66.2525 22.6841C66.5544 22.5751 66.889 22.6705 67.0903 22.9159C74.8049 32.356 78.08 34.6438 84.1761 38.5267L93.5418 44.152C93.9009 44.3674 94.0178 44.8337 93.8029 45.1909L89.5131 52.3923C89.4098 52.5641 89.2438 52.6895 89.048 52.7386C88.9881 52.755 88.9256 52.7604 88.863 52.7604L88.8657 52.7632ZM78.6812 45.0055L88.6073 50.9662L92.1218 45.0655L82.3263 39.1811C82.2501 39.1347 82.1848 39.0802 82.1332 39.0148C77.1252 35.7835 73.6787 33.1577 67.2644 25.4982V36.1026C71.0428 39.5765 75.7488 43.0504 78.6812 45.0028V45.0055Z",fill:"currentColor"}),n.jsx("path",{d:"M50.9436 78.6185H59.0608V31.6689C56.8846 36.9643 54.1562 42.0143 50.9436 46.6962V78.6185Z",fill:"currentColor"}),n.jsx("path",{d:"M59.0606 79.3953H50.9434C50.5381 79.3953 50.209 79.0463 50.209 78.6182V46.6959C50.209 46.5323 50.2579 46.3714 50.3504 46.2378C53.5277 41.605 56.2316 36.5986 58.3887 31.3578C58.5274 31.0197 58.8729 30.8342 59.2102 30.9079C59.5502 30.9842 59.7951 31.3005 59.7951 31.6686V78.6182C59.7951 79.049 59.4659 79.3953 59.0606 79.3953ZM51.6779 77.8383H58.3261V35.1998C56.4301 39.3036 54.2023 43.241 51.6779 46.9467V77.8383Z",fill:"currentColor"}),n.jsx("path",{d:"M34.4211 78.6186H43.0089V57.2571C40.3376 59.823 37.4515 62.2225 34.4211 64.3985V78.6186Z",fill:"currentColor"}),n.jsx("path",{d:"M42.4076 79.3954H34.3721C33.9722 79.3954 33.6458 79.0464 33.6458 78.6183V64.3982C33.6458 64.1473 33.7573 63.9128 33.9504 63.7656C36.7577 61.6114 39.4344 59.2337 41.9071 56.6951C42.1165 56.4796 42.4266 56.4169 42.6932 56.5424C42.9598 56.6651 43.1339 56.9459 43.1339 57.2568V78.6183C43.1339 79.0491 42.8102 79.3954 42.4076 79.3954ZM35.0984 77.8385H41.6813V59.0483C39.6003 61.0879 37.3942 63.0157 35.0984 64.7936V77.8357V77.8385Z",fill:"currentColor"}),n.jsx("path",{d:"M4.04653 54.0585L0.779541 46.6607C11.3395 41.9734 19.5355 35.8954 25.1446 28.5904C31.1726 20.74 34.2275 11.3818 34.2275 0.777344H42.2984C42.2984 24.5275 29.0699 42.9523 4.04653 54.0612V54.0585Z",fill:"currentColor"}),n.jsx("path",{d:"M4.04671 54.8354C3.95151 54.8354 3.8563 54.819 3.76653 54.7836C3.5734 54.71 3.42106 54.5627 3.33674 54.3718L0.0670215 46.9741C-0.107073 46.5815 0.0697417 46.1206 0.461455 45.9488C10.899 41.3161 18.9971 35.3144 24.5246 28.1158C30.4438 20.4044 33.4469 11.207 33.4469 0.77713C33.4469 0.3463 33.7951 0 34.2222 0H42.2931C42.7229 0 43.0684 0.349027 43.0684 0.77713C43.0684 24.86 29.6821 43.5302 4.3541 54.7727C4.25345 54.8163 4.14736 54.8381 4.04127 54.8381L4.04671 54.8354ZM1.80253 47.0532L4.44115 53.0303C28.4308 42.1477 41.2322 24.3746 41.5151 1.55426H34.9947C34.8479 12.0169 31.7414 21.2688 25.7569 29.0647C20.194 36.3097 12.1367 42.3577 1.79981 47.0559L1.80253 47.0532Z",fill:"currentColor"}),n.jsx("path",{d:"M10.7113 68.821L7.38721 61.4478C19.4514 55.9833 30.4221 47.1595 38.2781 36.6042C46.6047 25.4189 51.0033 13.0285 51.0033 0.7771H59.0743C59.0743 14.7873 54.1207 28.8492 44.7468 41.4442C36.0856 53.0793 23.9996 62.803 10.7113 68.821Z",fill:"currentColor"}),n.jsx("path",{d:"M10.7116 69.5981C10.6191 69.5981 10.5266 69.5817 10.4368 69.549C10.2437 69.4754 10.0887 69.3309 10.0043 69.1427L6.6802 61.7695C6.50339 61.3769 6.67748 60.9161 7.0692 60.7415C19.0164 55.3289 29.8783 46.595 37.6582 36.1433C45.8841 25.0944 50.2311 12.8649 50.2311 0.779816C50.2311 0.348986 50.5792 0.00268555 51.0063 0.00268555H59.0772C59.507 0.00268555 59.8525 0.351712 59.8525 0.779816C59.8525 14.959 54.8446 29.1819 45.37 41.9132C36.6326 53.6519 24.4379 63.4629 11.0299 69.5354C10.9292 69.5817 10.8204 69.6036 10.7116 69.6036V69.5981ZM8.41299 61.8322L11.0979 67.7875C23.9917 61.7995 35.6969 52.3022 44.1269 40.9779C53.226 28.7538 58.117 15.139 58.2965 1.55422H51.7761C51.5939 13.7211 47.1518 25.9861 38.9013 37.0704C31.1215 47.5249 20.3167 56.2942 8.41299 61.8322Z",fill:"currentColor"})]})}const Sr=qe`
  background: color-mix(in srgb, var(--color-bg-primary) 50%, transparent);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid color-mix(in srgb, var(--color-content-primary) 12%, transparent);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 45%, transparent),
    var(--shadow-below-low);
`,av=qe`
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
`;const dT="/Ultron_Onboarding/assets/levis-stadium-CO6biSRl.webp",uT="data:image/webp;base64,UklGRhALAABXRUJQVlA4WAoAAAAQAAAA0gEAVwAAQUxQSPwIAAABsFVrb9jaliAYgiAEgiGEwTaDbQYxg4aByyCLgSAEgiAYwv/QNpblrN67n05ETAD9L7nkx6EKACpHWZn+9YYsDd1njf9yosBa//I/miQYWvn/DSHmepyqqnI81uXGeE3lUV8fJcXFVxQM38aEJZVHPURE6qOsy42FJZVaD5FaS47LzS0ppVRKKTmlGC6FTdCrNQ4JzBzMeIkxshHno6G3SYlewgMedTEKcTsa+uURRzAzm4UlxrhYhVwVve1IPCDVWqtBqLXW9UOq10u8duC6Lp+iwFYTW20N75uq6rlcCPFxNryNBmETWGuNHqLC6WYQsjSYa11s+MT7pq/bFc7S8PawCFlgXaPZEwAMGADKhyd6tfIF7YC+iwJ7TTaMXvnAj4aLtYsfDUM1DfsLv8LXQhaMlmgh6I0fkuAqd/HWMFLjfQCobIVIRCwYq+wB8YUrrveEDeM1jXnAs/IF3ho8Vu47u+qbqLjeEzYMr3wjULY6iGLD8M3DTkR/GkZEhUvlARW+ld+FCq+6dmlXC0ThQG/H3waHuk7U0uddX6DBCLzB48OBEv1F97UH3G5mFZ5bTUxv/zY43kYhEitGhANOt3mUruYXFKsGn2cYhvgHI/iEY2GbDY5bCfSZxRO2UTs3jGCF2+0WKL20YOT2DMMEI1jhWtlig+M90PWkjvBnEBpGLA2Ot1sgAYA8F2SY6SdWOFfuW+A4Uzero8aDTOnj0uB6u4X4UifDYx5WuFfuCeookSGrH8il09XS4Hy9g/ByzoZ1GsGEZ+h4wG8mU25+kK6IJ1Z4b3wD1ADodI0n2TDl4xrDbyHj7KiFORT+5Q5wCzjmYEy6XjrHqF5RMlc/yFNsmHGdj19kPkRv+4vO0sKFBPO2JyYiCnHXN6tddnTOwJhS50sv+w2It0JEfzFtuXBaaQ50NT6BSvbBEeIEOgfSdPoSbwDRH+s8jT9EGJdAvaw8gNTR7i9hUu2K/WnQBgBKdyD+NkxcPlQbXci5OGr+dBbEHmuzeOA13QKiO52phXfNRJkmOfe8xpiKjEB01YhWTCv+Wv0seLvTPexOzppTSilQwtT5zQpLZZpCS6DP/ByQfbRaUkopEB0DJDHRktSsBXf9O91ECw4kB/osc8mbapJohpaok9Xsx0ErkT4zzDXSx2yF1FH7j1ESyUmTPaVUZADiMI10lTFS8hpjfuoI8ItaCE14HoG6uVnpuD3Q1WSmTBeTVe2gfh4jkS6O0RzoPWc120cp0+U0QCJ9TDogExHDcp0hk2W2QhhV6PphxnR5N1J3Lb7uLy2Qkz3QVT6tdFSk64dZy3SVn3Y/RBQtlG6zWS2DKnU2q0rXQ7MBe1N6DQ0AipNCvWKEMKZRZ7NqC3UWs0ZE2eLnPopVGpQ6FljHDnoarXNQfmnsYqfuoEbrmLNjgfVC3bsVmGi3yPcRrcqg2JHMQk82ypOQAMDhQbmPolEeIx2rVSHD02olOizWKcL6OE7Vpqc8Eo+qrnYz6k1GdZb4guggkaXYVE/FSMkyWmUisYj+QhZ0nhsP+XF1mEmvGv3MQsfL6YBNoo2MqR1Po2RCYrTfAz8aLCsPOF2JmdNzGm4AkIedZNtM1JMYsU00qkbJV9gajNtmp4OWDp1Lp6Hy0sKoH6Pjlk4ybjY/RtkVKwYeq1UbxB3tlwoKAI9RxWg3gSe1EavTRoyqp9gwtFnBFX4pWl8Qpyi/ydPsaaGOVszZviGSFxm0/yKn1WG2W4DdcJtEB8UvIb4gjfkx2k2ap9OmWYlZMiluFJOKK53rnIn2Fw1DmpGYqCexQTSC2WJyetnw9chUoQFAGYJoEmAqnp5Gu00yqkTBBNEH668gc+0fUq21GoRaa10/pFrr4xqlWmt9jKkmyeZnzE9HMWrBRI0KEYmJ+Ei4qbXjOVf8ML0d2CCoTRkjHckID4u/MF6JaDdBdnHeVeooUwndnhg8YLt6WqyQ+5ZmtRBRtGnsIGCkaruNZBboNx2ArWuD8TLm7KBmhT89i8KaXpsJzjAuDjiYiJbnAHXFZuuXgO1aeMC40RjtETNs1/42WMubYoM6rtgVep9nyR3UrORbwMmfQlZY//jKdjj5UxTYlzfBCHXYbrbT532S0nNY4Y9VfOj+uwCSI3PMtcE++eIBgOS48JoFI5c3JEY4edBh1fhCaFbNVzZrq0XYTgAt/DIeeRB6SEZ4VHofraDLGLH6oau7FQbtPcEMqHwtrA/B+/RtCDnLc6UPJFbANuSwKpeyWRhTe0jsAClrZF5iKlVxVb6N5C20qfgT20HTgKfVfimZsa84wj58F0rDuIfKTJUuFjtAotluJZfqPdA5Qf4ukr/QJuIrQQcAkoySFfiKmi3O0gTyVSj5ozJPoctLGwHoxhaLmVzYYB7HSB+JP4SbaXOlGYLOouEa5TEAJC9d1Kxw8JvwwG3ECcrNYGqlGSjOEqm3jAKgNS3XnmbQLfKyNQxM3mj3J18Ee1gMaJ+jUP9z3GuTo6QY+SXaOfQXTneIX0MhD9GCzhmELJ8uLp4PovP3IG7uyrdwkIvFhNWfBhMqrpSJ0i9CS/PWvgQNPtiEWL0pk3FxJIGISH4RWpozxK9AmSYiVl8nk/miXjK95TbL+uZpVY1oUWf7N3AyTUWsnp6BBvLTxRnpY54lTkGsvs4vYA/kJVgR7X4yDWYd1jJdLR5Od7sZhaenk3+9lqnfjgYm9SELjU86pJVA18uwltmCxxQ7oqReWqF7tVIdUgP5aSOIdwctk8/4NJMcqDu3McJEzYDG5BFERT20EuhXEH7aSSRTMxlCxM9BrQRyG9LR+qQwmfJzgEQiIuk7B8UxxEVHyRrods2I+KkWbY9kvdu0dRARp9NOInlf1v0QbWiqR80xkH0UI4n0lrWnre8WtREan44BUpjueAARrU+9pnukoRzjmq6ucWFyyelofVpToFvncva0mgJd5Bjjml5jjBzoMy8xpssxciCXYX2eBlpToJseQ0Qcc6m11pKWQDe+xLxXeVv3vAb6DUPMexURqXtemX7BEFOp8rbWkpZANz7s3+x//vtvYOmQU/VCU1U5dv6nA1ZQOCDuAQAAMB4AnQEq0wFYAD5tMJVGpCMiISzoKIANiWlu4MED+AZb5tn4a/QD+OwQD8AP0A/gGqAfgB+gH8AgQD8ALru44Gk8c/wD8AP0T/K/v8HiWAX0iEE98qOfuWHCqjQxmpjzRLZ5962muboXFX52oUTGV1ciNXu060DOJIVOG9dw8ak1a1yOcrKo4AFxoSGMLWO0Fk7gQAJYuoxXP36alwbL/FKXImWQqIZ4zPKGBfH4adYxeHx+xPLmFa69hMWt8WYL/ltn1DhtFSRna9zrTa0WoHDmpQVfwUF5auPIHcxbukX5BRT98xsX2MXmM2sY1rJgdZMDrndfut50gAD9MmI1Dqqzrs45xv//9iPejJp33ezzf/1F9YlvDu1v3VM+T//+xIHlLQ5f9QtMGSJ4DqAAyAdppzCQC5xQeJJZhNBdJxNsMCk1ftYw0Gyz/+yj6BhBcJw+iAui03a9WmTU5ile6HD5HwXTf4GUpf//2iZ0iqIqNr4Gv2kllcwkmHWJkzT/gUf5DU4SnQp8CscxcTPP7+8mqyihLzMZZR6CH9EDyyD4E8THwK/31qcrWlu6Da8Ve4PgbuB26fY0XwMNh6CD+BpmWV+CbaCB23Q1/+pGqTcSIf7r2e8C4AFKMRH8CeDr5sE18RE4ciTEIWQAAAA=",hT="/Ultron_Onboarding/assets/florida-panthers-CzKArKmm.webp",pT="/Ultron_Onboarding/assets/express-healthcare-CyWzv_HP.webp",fT="/Ultron_Onboarding/assets/modsquad-CN5zaz5-.png",mT="/Ultron_Onboarding/assets/titan-medical-group-CzUHaHlx.webp",gT="/Ultron_Onboarding/assets/united-staffing-solutions-CqTdN2IS.webp",vT=560,iv=320,Cr="cubic-bezier(0.22, 1, 0.36, 1)",sv=140,lv={landing:0,workplace:20,loading:40,questions:58},fi=[{key:"pay",prompt:"How are your workers paid?",sub:"So I turn on pay the right way from the start.",options:[{id:"w2",icon:Y0,title:"W-2",caption:"Employees on your payroll."},{id:"1099",icon:ag,title:"1099",caption:"Independent contractors."},{id:"both",icon:K0,title:"Both",caption:"A mix of W-2 and 1099."}]},{key:"billing",prompt:"How do you bill clients?",sub:"So I handle billing the way you actually work.",options:[{id:"hourly",icon:In,title:"Hourly",caption:"Per hour worked."},{id:"month",icon:Q0,title:"By month",caption:"A flat monthly rate."},{id:"post",icon:og,title:"By post",caption:"Per site or position covered."}]},{key:"worksite",prompt:"Where does your team work?",sub:"So I set up your sites and scheduling to match.",options:[{id:"one",icon:bi,title:"One location",caption:"A single site."},{id:"multi",icon:th,title:"Multiple locations",caption:"Several of your own sites."},{id:"client",icon:Ju,title:"Client sites",caption:"Out at client locations."}]}];function xT({onComplete:e}){const[o,i]=g.useState("landing"),[s,l]=g.useState({}),[d,h]=g.useState(!1),[m,v]=g.useState(!1),y=Zl(),x=g.useRef(null),w=g.useCallback(R=>{x.current===null&&(v(!0),x.current=window.setTimeout(()=>{R(),v(!1),x.current=null},y?0:iv))},[y]);g.useEffect(()=>()=>{x.current!==null&&window.clearTimeout(x.current)},[]);const k=()=>w(()=>{i("landing"),l({}),h(!1)}),$=()=>w(()=>i("workplace")),_=R=>{l(L=>({...L,...R})),h(!0),w(()=>i("loading"))},j=R=>{const L={...s,...R};if(l(L),L.companyWebsite){e(L);return}w(()=>i("questions"))},N=R=>e({...s,...R}),M=d?1:o==="landing"?0:.4,[C,S]=g.useState(!1),P=C;return n.jsxs(qT,{children:[n.jsx(nv,{links:M}),n.jsx(rv,{}),n.jsx(VT,{type:"button","aria-label":"Restart demo",title:"Restart demo",onClick:k,children:n.jsx(ov,{size:22})}),n.jsx(GT,{children:n.jsxs(YT,{children:[o!=="landing"&&n.jsx(KT,{children:n.jsx(cv,{children:n.jsx(dt,{mark:P?"lines":"magnetic",size:sv,tone:"auto",state:"active",motionSpeed:P?1.7:1,cellCount:lv[o],"aria-label":"Ultron"})})}),n.jsxs(ZT,{$exiting:m,children:[o==="landing"&&n.jsx(MT,{onNext:$}),o==="workplace"&&n.jsx(Xl,{children:n.jsx(LT,{onAnswer:_})}),o==="loading"&&(s.companyWebsite||s.failedWebsite||s.noWebsite)&&n.jsx(TT,{website:s.companyWebsite,failedWebsite:s.failedWebsite,onDone:j,onProcessingChange:S}),o==="questions"&&n.jsx(BT,{onComplete:N})]})]})})]})}const yT="Lead the work that matters.",wT="Show us your company and we'll set up the work.",bT=41e3,Bm=[{name:"Levi's Stadium",src:dT},{name:"ProCare HR",src:uT},{name:"Florida Panthers",src:hT},{name:"Express Healthcare",src:pT},{name:"ModSquad",src:fT},{name:"Titan Medical Group",src:mT},{name:"United Staffing Solutions",src:gT}],Hm=[{quote:"Ultron turned three days of scheduling into ten minutes. It just handles the busywork so my managers don't have to.",name:"Dana Okafor",role:"Director of Operations",org:"Meridian Care",avatarColor:"purple",photo:"https://i.pravatar.cc/160?u=dana.okafor"},{quote:"Every event used to start with a spreadsheet marathon. Now open shifts fill themselves before I've finished my coffee.",name:"Marcus Webb",role:"Event Staffing Manager",org:"Levi's Stadium",avatarColor:"blue",photo:"https://i.pravatar.cc/160?u=marcus.webb"},{quote:"Onboarding a class of forty caregivers used to eat my whole week. Ultron drafts it, I review it, done by lunch.",name:"Priya Raman",role:"VP of People",org:"ProCare HR",avatarColor:"green",photo:"https://i.pravatar.cc/160?u=priya.raman"},{quote:"It caught a credential lapse we'd have missed and reworked the schedule around it before anyone had to call in.",name:"Sofia Delgado",role:"Compliance Lead",org:"Express Healthcare",avatarColor:"orange",photo:"https://i.pravatar.cc/160?u=sofia.delgado"},{quote:"It's like giving every team its own ops coordinator without adding headcount. My leads finally lead again.",name:"Jamie Chen",role:"Workforce Lead",org:"ModSquad",avatarColor:"azure",photo:"https://i.pravatar.cc/160?u=jamie.chen"}],kT=6e3;function _T(){return n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[n.jsx("path",{fill:"#4285F4",d:"M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"}),n.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"}),n.jsx("path",{fill:"#FBBC05",d:"M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9 9 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"}),n.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.346l2.582-2.581C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"})]})}function CT(){return n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[n.jsx("rect",{x:"1",y:"1",width:"7.2",height:"7.2",fill:"#F25022"}),n.jsx("rect",{x:"9.8",y:"1",width:"7.2",height:"7.2",fill:"#7FBA00"}),n.jsx("rect",{x:"1",y:"9.8",width:"7.2",height:"7.2",fill:"#00A4EF"}),n.jsx("rect",{x:"9.8",y:"9.8",width:"7.2",height:"7.2",fill:"#FFB900"})]})}function jT(){return n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true",children:n.jsx("path",{fill:"currentColor",d:"M16.365 1.43c0 1.14-.42 2.2-1.11 2.98-.75.87-1.98 1.54-3.13 1.45-.14-1.12.4-2.29 1.06-3.03.73-.83 2.02-1.44 3.18-1.4zM20.44 17.03c-.56 1.29-1.24 2.57-2.31 3.62-.9.88-1.99 1.98-3.4 1.99-1.36.01-1.71-.9-3.56-.89-1.85.01-2.24.91-3.6.9-1.41-.01-2.44-1-3.34-1.88-2.5-2.47-4.4-6.98-1.83-10.13.9-1.11 2.35-1.81 3.87-1.83 1.42-.02 2.76.96 3.56.96.8 0 2.44-1.18 4.11-1.01.7.03 2.66.28 3.92 2.13-3.4 2.09-2.86 6.72.58 8.04z"})})}const ST=[{id:"google",label:"Continue with Google",mark:_T},{id:"microsoft",label:"Continue with Microsoft",mark:CT},{id:"apple",label:"Continue with Apple",mark:jT}];function $T(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function MT({onNext:e}){const[o,i]=g.useState(""),[s,l]=g.useState(null),d=g.useRef(null);return g.useEffect(()=>{var h;s&&((h=d.current)==null||h.focus())},[s]),n.jsxs(JT,{children:[n.jsx(tI,{children:n.jsxs(nI,{children:[n.jsx(cv,{children:n.jsx(dt,{mark:"magnetic",size:sv,tone:"auto",state:"active",cellCount:lv.landing,"aria-label":"Ultron"})}),n.jsx(TI,{children:yT}),n.jsxs(rI,{children:[n.jsx(II,{children:wT}),n.jsxs(oI,{"aria-label":"Get started",children:[n.jsx(aI,{children:ST.map(h=>{const m=h.mark;return n.jsx(iI,{variant:"secondary",size:"lg",type:"button",leadingArtwork:n.jsx(m,{}),onClick:e,children:h.label},h.id)})}),n.jsx(sI,{"aria-hidden":"true",children:n.jsx(lI,{children:"or start with email"})}),n.jsxs(cI,{noValidate:!0,onSubmit:h=>{h.preventDefault(),o.trim()===""||$T(o)?e():l({text:"That doesn't look like an email — try you@company.com."})},children:[n.jsx(jr,{content:(s==null?void 0:s.text)??"",placement:"top",disabled:!s,children:n.jsx(uI,{ref:d,"aria-label":"Work email",placeholder:"you@company.com",value:o,onChange:h=>{i(h.target.value),s&&l(null)}})}),n.jsx(dI,{variant:"primary",size:"lg",type:"submit",children:"Start for free"}),n.jsx(hI,{children:"No credit card. Free WFM forever. Credits expire — your workspace doesn't."})]})]})]})]})}),n.jsx(eI,{"aria-hidden":"true"}),n.jsx(RT,{})]})}function RT(){const[e,o]=g.useState(0);g.useEffect(()=>{const s=setInterval(()=>o(l=>(l+1)%Hm.length),kT);return()=>clearInterval(s)},[]);const i=Hm[e];return n.jsx(pI,{children:n.jsxs(fI,{children:[n.jsx(NT,{}),n.jsxs($I,{children:[n.jsx(MI,{children:`“${i.quote}”`}),n.jsxs(RI,{children:[n.jsx(Qn,{name:i.name,src:i.photo,alt:i.name,color:i.avatarColor,size:"lg"}),n.jsxs(NI,{children:[n.jsx(LI,{children:i.name}),n.jsx(AI,{children:`${i.role} · ${i.org}`})]})]})]},e),n.jsxs(kI,{children:[n.jsx(_I,{children:"Trusted by frontline operators"}),n.jsxs(jI,{"aria-label":"Operators using Teambridge",children:[n.jsx(Wm,{children:Bm.map(s=>n.jsx(Um,{src:s.src,alt:s.name,loading:"lazy"},s.name))}),n.jsx(Wm,{"aria-hidden":"true",children:Bm.map(s=>n.jsx(Um,{src:s.src,alt:"",loading:"lazy"},`${s.name}-dup`))})]})]})]})})}function NT(){const e=UT(bT,1600);return n.jsxs(mI,{children:[n.jsxs(gI,{children:[n.jsx(xI,{"aria-hidden":"true"}),n.jsx(yI,{children:"Ultron Index · Live"})]}),n.jsx(wI,{children:e.toLocaleString("en-US")}),n.jsx(bI,{children:"pieces of work Ultron performed this week"})]})}function LT({onAnswer:e}){const[o,i]=g.useState(""),s=o.trim().length>0,l=()=>{const d=o.trim();d&&e(HT(d)?{companyWebsite:d}:{failedWebsite:d})};return n.jsxs(n.Fragment,{children:[n.jsx(Jl,{children:"Where do you work?"}),n.jsx(zI,{children:"Drop your URL and Ultron will set up Teambridge for your team. No blank slate, no busywork."}),n.jsx(hv,{onSubmit:d=>{d.preventDefault(),l()},children:n.jsxs(pv,{children:[n.jsx(jE,{"aria-hidden":"true",children:n.jsx(nh,{size:18})}),n.jsx(fv,{rows:1,value:o,placeholder:"yourcompany.com","aria-label":"Company website",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),l())}}),n.jsx(mv,{children:n.jsx(_a,{state:s?"ready":"disabled-invalid",onSend:l})})]})}),n.jsx(SE,{children:n.jsx(gv,{type:"button",onClick:()=>e({noWebsite:!0}),children:"No website? Pick a workforce instead"})})]})}const cu=["Scanning your site","Identifying your workforce","Mapping services & clients","Organizing your workspace"],AT=820;function TT({website:e,failedWebsite:o,onDone:i,onProcessingChange:s}){return e?n.jsx(ET,{website:e,onDone:i,onProcessingChange:s}):n.jsx(FT,{failedWebsite:o,onDone:i})}const IT=["worker_types","talent_categories","client_types","service_models","tech_footprint","access_model","compliance"];function ET({website:e,onDone:o,onProcessingChange:i}){const{name:s,host:l}=WT(e),d=cu.length,[h,m]=g.useState(1),[v,y]=g.useState(!1),x=g.useRef(null),w=Zl();g.useEffect(()=>{if(!v)return;const N=window.requestAnimationFrame(()=>{const M=x.current,C=M==null?void 0:M.closest("main");C?C.scrollTo({top:C.scrollHeight,behavior:w?"auto":"smooth"}):M==null||M.scrollIntoView({behavior:w?"auto":"smooth",block:"end"})});return()=>window.cancelAnimationFrame(N)},[v,w]),g.useEffect(()=>{i==null||i(!v)},[v,i]),g.useEffect(()=>()=>i==null?void 0:i(!1),[i]);const k=g.useMemo(()=>QS(e),[e]),$=g.useMemo(()=>IT.reduce((N,M)=>N+k[M].length,0),[k]),_=g.useCallback(()=>{v?o({}):h>=d?y(!0):m(N=>Math.min(N+1,d))},[h,v,d,o]);g.useEffect(()=>{const N=M=>{M.key.toLowerCase()==="t"&&(M.preventDefault(),_())};return window.addEventListener("keydown",N),()=>window.removeEventListener("keydown",N)},[_]);const j=cu[h-1];return n.jsx(n.Fragment,{children:n.jsxs(Xl,{$wide:!0,onClick:()=>{v||_()},children:[n.jsx(Jl,{children:v?"Nearly there! Your free account is taking shape.":`${j}…`},v?"done":j),n.jsx(ec,{children:v?`Here's what I learned about ${s}.`:"Hang tight — I'm reading your site and getting your workspace ready."}),n.jsxs(qI,{role:"status","aria-live":"polite",$complete:v,children:[n.jsxs(KI,{$running:!v,children:[n.jsx(nh,{size:14}),l,v&&n.jsxs(n.Fragment,{children:[n.jsx(QI,{"aria-hidden":"true",children:"·"}),n.jsxs(ZI,{children:[n.jsx(_n,{size:13})," read ",$," signals"]})]})]}),n.jsx(VI,{role:"progressbar","aria-valuemin":0,"aria-valuemax":d,"aria-valuenow":v?d:h-1,"aria-label":`Step ${Math.min(h,d)} of ${d}`,$complete:v,children:cu.map((N,M)=>{const C=v||M+1<h?"done":M+1===h?"working":"pending";return n.jsx(GI,{"data-status":C,children:C!=="pending"&&n.jsx(YI,{$working:C==="working"})},N)})})]}),n.jsx(OT,{learned:k,host:l,completed:v?d:h-1,done:v}),v&&n.jsxs(n.Fragment,{children:[n.jsx(pE,{children:n.jsx(fE,{children:"Consider it handled."})}),n.jsx(gE,{children:n.jsx(De,{variant:"primary",size:"md",onClick:()=>o({}),trailingArtwork:n.jsx(F0,{size:16}),children:"Looks good, continue"})}),n.jsx(vE,{children:n.jsx(gv,{type:"button",onClick:()=>{m(1),y(!1)},children:"Start over"})}),n.jsx(xE,{ref:x,"aria-hidden":"true"})]})]})})}const PT={"Healthcare / Clinical Staffing":rh,"Skilled Trades / Construction Labor":Vu,"Warehouse / Logistics & Light Industrial":eh,"Security / Guarding Services":Dl,"Home Care / In-Home Support":ng,"Agriculture / Seasonal Labor":Xu,"Hospitality / Events Staffing":Bl,"Call Center / BPO Staffing":ki},zT={Business:{icon:bi,color:"blue"},Workforce:{icon:Qr,color:"purple"},Operations:{icon:sg,color:"orange"},Compliance:{icon:Ti,color:"green"}};function OT({learned:e,host:o,completed:i,done:s}){const{company:l}=e,d=i<1,[h,m]=g.useState(!1),v=PT[e.workforce_type]??th;return n.jsxs(JI,{children:[n.jsxs(eE,{children:[n.jsx(tE,{children:n.jsxs(rE,{children:[n.jsx(oE,{"aria-hidden":"true",children:d?n.jsx(Ht,{$w:"20px",$h:"20px",$round:!0}):n.jsxs(n.Fragment,{children:[!h&&n.jsx(v,{size:20}),n.jsx(aE,{src:`https://www.google.com/s2/favicons?domain=${encodeURIComponent(o)}&sz=64`,alt:"",$visible:h,onLoad:y=>m(y.currentTarget.naturalWidth>=32),onError:()=>m(!1)})]})}),n.jsxs(iE,{children:[d?n.jsxs(n.Fragment,{children:[n.jsx(Ht,{$w:"240px",$h:"1em"}),n.jsx(Ht,{$w:"160px",$h:"0.85em"})]}):n.jsxs(n.Fragment,{children:[n.jsx(sE,{children:e.workforce_type}),n.jsx(lE,{children:l.name})]}),n.jsx(cE,{children:d?n.jsxs(n.Fragment,{children:[n.jsx(Ht,{$w:"110px",$h:"0.9em"}),n.jsx(Ht,{$w:"150px",$h:"0.9em"}),n.jsx(Ht,{$w:"170px",$h:"0.9em"})]}):n.jsxs(n.Fragment,{children:[n.jsxs(du,{children:[n.jsx(In,{size:14}),n.jsxs(uu,{children:["Founded ",l.founded]})]}),l.parent&&n.jsxs(du,{children:[n.jsx(bi,{size:14}),n.jsxs(uu,{children:["Part of ",l.parent]})]}),n.jsxs(du,{children:[n.jsx(qu,{size:14}),n.jsx(uu,{children:l.footprint})]})]})})]})]})},d?"lead-loading":"lead-ready"),e.narrative.map((y,x)=>{const w=i<2,{icon:k,color:$}=zT[y.label]??{icon:bi,color:"neutral"};return n.jsx(nE,{style:{"--group-i":w?x+1:x},children:w?n.jsxs(n.Fragment,{children:[n.jsxs(qm,{as:"div",children:[n.jsx(Ht,{$w:"16px",$h:"16px",$round:!0}),n.jsx(Ht,{$w:"112px",$h:"0.95em"})]}),n.jsxs(Vm,{children:[n.jsx(Ht,{$w:"76px",$h:"20px",$round:!0}),n.jsx(Ht,{$w:"92px",$h:"20px",$round:!0}),n.jsx(Ht,{$w:"64px",$h:"20px",$round:!0})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs(qm,{children:[n.jsx(k,{size:16}),y.label]}),n.jsx(Vm,{children:y.tags.map(_=>n.jsx(En,{size:"sm",variant:"subtle",color:$,children:_},_))})]})},`${y.label}-${w?"loading":"ready"}`)})]}),n.jsx(dE,{style:{"--group-i":s?0:e.narrative.length+1},children:s?n.jsxs(n.Fragment,{children:[n.jsxs(Gm,{children:[n.jsx(ig,{size:16}),"Configured for you"]}),n.jsx(uE,{children:e.configured.map(y=>n.jsxs(hE,{children:[n.jsx(dn,{size:16}),y]},y))})]}):n.jsxs(n.Fragment,{children:[n.jsxs(Gm,{as:"div",children:[n.jsx(Ht,{$w:"16px",$h:"16px",$round:!0}),n.jsx(Ht,{$w:"132px",$h:"0.95em"})]}),n.jsxs(XI,{children:[n.jsx(Ht,{$h:"0.85em",$w:"84%"}),n.jsx(Ht,{$h:"0.85em",$w:"72%"}),n.jsx(Ht,{$h:"0.85em",$w:"78%"}),n.jsx(Ht,{$h:"0.85em",$w:"66%"})]})]})},s?"configured-ready":"configured-loading")]})}const DT=[{icon:rh,label:"Travel nurses"},{icon:Bl,label:"Event staff"},{icon:Dl,label:"Security guards"},{icon:eh,label:"Warehouse temps"}];function FT({failedWebsite:e,onDone:o}){const[i,s]=g.useState(""),l=i.trim().length>0,d=()=>{const h=i.trim();h&&o({workforceType:h})};return n.jsxs(Xl,{children:[e&&n.jsx(mE,{children:"No problem — let's set it up together."}),n.jsx(Jl,{children:"What workforce do you need help with?"}),n.jsx(ec,{children:"Say it in your own words — or grab one of these."}),n.jsx(OI,{children:DT.map(({icon:h,label:m})=>n.jsxs(DI,{type:"button",onClick:()=>o({workforceType:m}),children:[n.jsx(h,{size:16}),m]},m))}),n.jsx(hv,{onSubmit:h=>{h.preventDefault(),d()},children:n.jsxs(pv,{children:[n.jsx(fv,{rows:1,value:i,placeholder:"e.g. home-care aides across three cities","aria-label":"Describe your workforce",onChange:h=>s(h.target.value),onKeyDown:h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),d())}}),n.jsx(mv,{children:n.jsx(_a,{state:l?"ready":"disabled-invalid",onSend:d})})]})})]})}function BT({onComplete:e}){const o=Zl(),[i,s]=g.useState(0),l=g.useRef({}),d=fi[i],h=m=>{l.current={...l.current,[d.key]:m.title};const v=i+1;v>=fi.length?e(l.current):s(v)};return n.jsxs(Xl,{children:[n.jsx(yE,{role:"progressbar","aria-valuemin":1,"aria-valuemax":fi.length,"aria-valuenow":i+1,"aria-label":`Question ${i+1} of ${fi.length}`,children:fi.map((m,v)=>n.jsx(wE,{"data-filled":v<=i||void 0},m.key))}),n.jsx(Jl,{children:d.prompt}),n.jsx(ec,{children:d.sub}),n.jsx(bE,{role:"radiogroup","aria-label":d.prompt,children:d.options.map((m,v)=>{const y=m.icon;return n.jsxs(kE,{type:"button",role:"radio","aria-checked":!1,style:{animationDelay:o?"0ms":`${v*70}ms`},onClick:()=>h(m),children:[n.jsx(dv,{"aria-hidden":"true",children:n.jsx(y,{size:20})}),n.jsxs(_E,{children:[n.jsx(FI,{children:m.title}),n.jsx(BI,{children:m.caption})]})]},m.id)})})]},d.key)}function HT(e){const o=e.trim().replace(/\s+/g,"");if(!o)return!1;const i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s;try{s=new URL(i).hostname}catch{return!1}return/^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(s)}function WT(e){const o=e.replace(/\s+/g,""),i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s=o;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),{name:(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s,host:s}}function UT(e,o){const i=Zl(),[s,l]=g.useState(i?e:0);return g.useEffect(()=>{if(i){l(e);return}let d=0,h=null;const m=v=>{h===null&&(h=v);const y=Math.min(1,(v-h)/o),x=1-Math.pow(1-y,3);l(Math.round(e*x)),y<1&&(d=window.requestAnimationFrame(m))};return d=window.requestAnimationFrame(m),()=>window.cancelAnimationFrame(d)},[e,o,i]),s}function Zl(){const[e,o]=g.useState(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}});return g.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return}const s=d=>o(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}const qT=p.div`
  /* Anchors the ambient backdrop layer, which fills the frame behind Scroll. */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`,VT=p.button`
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
`,GT=p.main`
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
`,YT=p.div`
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
`,KT=p.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`,cv=p.span`
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
`,QT=je`
  from { opacity: 1; }
  to   { opacity: 0; }
`,ZT=p.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${e=>e.$exiting&&qe`
      animation: ${QT} ${iv}ms var(--ease-in) forwards;
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
`,XT=je`
  from { opacity: 0; }
  to   { opacity: 1; }
`,JT=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  width: 100%;
  animation: ${XT} 560ms ${Cr} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,eI=p.div`
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
`,tI=p.div`
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
`,nI=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-5);
  width: 100%;
  max-width: 400px;
`,Mh=je`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,rI=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  width: 100%;
  animation: ${Mh} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,oI=p.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-4);
  width: 100%;
  max-width: 360px;
`,aI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,iI=p(De)`
  && {
    width: 100%;
    ${Sr}
  }
`,sI=p.div`
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
`,lI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,cI=p.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`,dI=p(De)`
  && {
    width: 100%;
  }
`,uI=p(_g)`
  && [class*='shell'] {
    ${Sr}
  }
  && input {
    background: transparent;
  }
`,hI=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  text-align: center;
`,pI=p.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* No surface — the proof content sits directly on the ambient particle
     backdrop; only the padding holds its measure. */
  padding: var(--space-10);
  animation: ${Mh} var(--duration-slow) var(--ease-out) both;

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
`,fI=p.div`
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
`,mI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,gI=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,vI=je`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.35; transform: scale(0.8); }
`,xI=p.span`
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-success-fill);
  flex-shrink: 0;
  animation: ${vI} 2s var(--ease-default) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,yI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,wI=p.span`
  font-family: var(--font-sans);
  /* Anchors the panel now that there's no card around it. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Hold digit width so the count-up doesn't jitter the caption below. */
  font-variant-numeric: tabular-nums;
`,bI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,kI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding-top: var(--space-3);
`,_I=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,CI=je`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,jI=p.div`
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
`,Wm=p.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-6);
  padding-right: var(--space-6);
  animation: ${CI} 32s linear infinite;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Um=p.img`
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
`,SI=je`
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,$I=p.figure`
  ${Sr}
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
  animation: ${SI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,MI=p.blockquote`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,RI=p.figcaption`
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
`,NI=p.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,LI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,AI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,TI=p.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Pops in (no type-out). */
  animation: ${Mh} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,II=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 560px;
`,EI=je`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,Xl=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  /* $wide widens the step for the workforce-type grid so its three cards have
     room to keep each caption on a single line. */
  max-width: ${e=>e.$wide?"1060px":"720px"};
  text-align: center;
  animation: ${EI} ${vT}ms ${Cr} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Jl=p.h1`
  margin: 0;
  font-family: var(--font-sans);
  /* Matches the opening landing headline (Headline) so step titles read consistently. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,ec=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
  max-width: 520px;
`,PI=je`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,zI=p(ec)`
  animation: ${PI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,OI=p.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
`,DI=p.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  ${Sr}
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
    ${av}
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
`,dv=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  margin-bottom: var(--space-2);
`,FI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,BI=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,uv=je`
  from { opacity: 0; transform: translateY(10px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,HI=je`
  from { background-position: 100% 0; }
  to   { background-position: -100% 0; }
`,WI=je`
  0%   { transform: scaleX(0); }
  68%  { transform: scaleX(1); }
  100% { transform: scaleX(1); }
`,UI=je`
  0%   { opacity: 1; }
  35%  { opacity: 0.45; }
  100% { opacity: 1; }
`,qI=p.div`
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
    opacity 400ms ${Cr} 950ms,
    max-height 400ms ${Cr} 950ms,
    margin-top 400ms ${Cr} 950ms;

  ${e=>e.$complete&&qe`
    opacity: 0;
    max-height: 0;
    margin-top: 0;
    pointer-events: none;
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,VI=p.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;

  ${e=>e.$complete&&qe`
    & > * > * {
      animation: ${UI} 900ms ${Cr};
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    & > * > * { animation: none; }
  }
`,GI=p.div`
  flex: 1;
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  overflow: hidden;
`,YI=p.div`
  height: 100%;
  width: 100%;
  border-radius: var(--radius-full);
  background: var(--color-content-primary);

  ${e=>e.$working&&qe`
    /* The working fill draws in from the LEFT edge (scaleX, origin left) on a
       loop — draw, hold, redraw — so the bar stays visibly in motion while it
       waits for the next beat, reading as ongoing work rather than a stall. */
    transform-origin: left center;
    animation: ${WI} ${AT+380}ms ${Cr} infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: var(--color-content-primary);
  }
`,KI=p.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  /* While the read is still running the line reads lighter (tertiary); once it
     completes it firms up to secondary alongside the "read N signals" tally. */
  color: ${e=>e.$running?"var(--color-content-tertiary)":"var(--color-content-secondary)"};

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,QI=p.span`
  color: var(--color-content-tertiary);
`,ZI=p.span`
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
  /* Wide, soft highlight so the sweep reads as a smooth sheen rather than a
     hard band; paired with skeletonSweep it moves at a constant speed and loops
     seamlessly (no blink). Bands are content-color mixes (not opaque bg fills)
     so the shimmer stays clearly visible on the translucent glass in BOTH
     themes — bg-tertiary all but vanished in light mode. */
  background: linear-gradient(
    90deg,
    color-mix(in srgb, var(--color-content-primary) 10%, transparent) 0%,
    color-mix(in srgb, var(--color-content-primary) 10%, transparent) 30%,
    color-mix(in srgb, var(--color-content-primary) 28%, transparent) 50%,
    color-mix(in srgb, var(--color-content-primary) 10%, transparent) 70%,
    color-mix(in srgb, var(--color-content-primary) 10%, transparent) 100%
  );
  background-size: 200% 100%;
  animation: ${HI} 1.6s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    background: color-mix(in srgb, var(--color-content-primary) 10%, transparent);
    animation: none;
  }
`,XI=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
`,JI=p.div`
  width: 100%;
  max-width: 680px;
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  text-align: left;
`,Oi=qe`
  animation: ${uv} var(--duration-base) ${Cr} both;
  animation-delay: calc(var(--group-i, 0) * 90ms);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,eE=p.div`
  ${Sr}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${Oi}
`,tE=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${Oi}
`,nE=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  border-top: 1px solid var(--color-border-opaque);
  padding-top: var(--space-4);
  ${Oi}
`,rE=p.div`
  display: flex;
  /* Top-aligned: the text block now carries the facts row below the heading,
     so the mark should hug the heading rather than float mid-block. */
  align-items: flex-start;
  gap: var(--space-3);
`,oE=p.span`
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
`,aE=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  display: ${e=>e.$visible?"block":"none"};
`,iE=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,sE=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,lE=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,cE=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  margin-top: var(--space-2);
`,du=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,uu=p.span`
  color: var(--color-content-primary);
`,dE=p.div`
  ${Sr}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  ${Oi}
`,qm=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,Vm=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-1);
`,Gm=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,uE=p.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,hE=p.li`
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
`,pE=p.div`
  display: flex;
  justify-content: center;
  padding-top: var(--space-2);
  ${Oi}
`,fE=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  text-align: center;
`,mE=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 480px;
`,gE=p.div`
  display: flex;
  justify-content: center;
  margin-top: var(--space-2);

  & > button {
    height: 40px;
    padding: 0 var(--space-4);
  }
`,vE=p.div`
  display: flex;
  justify-content: center;
`,xE=p.div`
  width: 100%;
  height: 0;
`,yE=p.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;
  max-width: 140px;
`,wE=p.span`
  flex: 1;
  /* Hairline — deliberately below the 4px grid for a thin progress line. */
  height: 2px;
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  transition: background var(--duration-base) var(--ease-out);

  &[data-filled] {
    background: var(--color-content-primary);
  }
`,bE=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 480px;
  margin-top: var(--space-3);
`,kE=p.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  text-align: left;
  ${Sr}
  border-radius: var(--radius-lg);
  cursor: pointer;
  /* fill "backwards" (not "both"): holds the pre-entrance state during the
     stagger delay, but releases transform once the pop finishes — a filled
     animation would keep pinning transform and the hover lift below never
     applies. */
  animation: ${uv} var(--duration-base) ${Cr} backwards;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  ${dv} {
    margin-bottom: 0;
  }

  &:hover {
    ${av}
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
`,_E=p.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,hv=p.form`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  ${Sr}
  border-radius: var(--radius-xl);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,pv=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
`,CE=je`
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
`,jE=p.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary);
  flex-shrink: 0;
  animation: ${CE} var(--duration-base) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,fv=p.textarea`
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
`,mv=p(Qu)`
  && {
    flex: 0 0 auto;
    width: auto;
    --composer-btn-size: var(--space-8); /* 32px */
    --composer-btn-icon-attach: var(--space-4); /* 16px */
    --composer-btn-icon-send: var(--space-4); /* 16px */
  }
`,SE=p.div`
  margin-top: var(--space-3);
`,gv=p.button`
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
`;function $E({onEnterApp:e}){return n.jsx(xT,{onComplete:o=>e==null?void 0:e(o)})}const ME=768,RE=`(max-width: ${ME-1}px)`;function Rh(e){const[o,i]=g.useState(()=>typeof window>"u"?!1:window.matchMedia(e).matches);return g.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(e),l=d=>i(d.matches);return i(s.matches),s.addEventListener("change",l),()=>s.removeEventListener("change",l)},[e]),o}function NE(){return Rh(RE)}const LE="48px",AE="240px",Ym="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",TE=p.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${e=>e.$isExpanded?AE:LE};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${e=>e.$isExpanded?qe`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:qe`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${e=>e.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,IE=p.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${e=>e.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${e=>e.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,EE=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,PE=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,zE=p.button`
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
`,OE=p.div`
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
`,DE=p.span`
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
`,Km=p.div`
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
`,hu=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,FE="var(--gradient-ai)",vv=p.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${e=>e.$isActive&&!e.$isAi&&qe`
      background: var(--color-bg-primary, white);
      box-shadow: ${Ym}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${e=>e.$isActive&&e.$isAi&&qe`
      background: ${FE};
      box-shadow: ${Ym}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,xv=p.button`
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
`,yv=p.span`
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
`,wv=p.div`
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
`,BE=p.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,pu=p.hr`
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
`;const HE=p.button`
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
`,WE=p.div`
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
`,UE=p.span`
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
`;function fu({item:e,isExpanded:o,showNewBadge:i,isAi:s}){const l=e.isActive??!1,d=e.disabled??!1;return n.jsx(vv,{$isActive:l,$isAi:s,children:n.jsxs(xv,{$isActive:l,$isAiActive:l&&!!s,$disabled:d,"aria-disabled":d||void 0,onClick:e.onClick,"aria-current":l?"page":void 0,title:o?void 0:e.label,children:[n.jsxs(wv,{children:[e.hasUnread&&n.jsx(BE,{}),l&&e.activeIcon?e.activeIcon:e.icon]}),o&&n.jsx(yv,{children:e.label}),o&&i&&n.jsx(ka,{variant:"primary",children:"New"})]})})}function qE({items:e,toolItems:o=[],bottomItems:i=[],workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:m,newItemId:v,aiItemId:y}){const[x,w]=g.useState(!1);return n.jsx(TE,{$isExpanded:x,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),"aria-label":"Primary navigation",children:n.jsxs(IE,{$isExpanded:x,children:[n.jsxs(EE,{children:[n.jsxs(zE,{$isExpanded:x,onClick:d,"aria-label":`Workspace: ${s.name}`,title:x?void 0:s.name,children:[n.jsx(OE,{children:s.logoUrl?n.jsx("img",{src:s.logoUrl,alt:s.name}):s.initial??s.name.charAt(0).toUpperCase()}),x&&n.jsxs(n.Fragment,{children:[n.jsx(DE,{children:s.name}),n.jsx(Km,{children:n.jsx(Qf,{})})]})]}),n.jsx(hu,{children:e.map(k=>n.jsx(fu,{item:k,isExpanded:x,isAi:k.id===y},k.id))}),o.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(pu,{}),n.jsx(hu,{children:o.map(k=>n.jsx(fu,{item:k,isExpanded:x,showNewBadge:k.id===v,isAi:k.id===y},k.id))})]})]}),n.jsxs(PE,{children:[i.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(pu,{}),n.jsx(hu,{children:i.map(k=>n.jsx(fu,{item:k,isExpanded:x,isAi:k.id===y},k.id))})]}),n.jsx(pu,{}),n.jsx(vv,{$isActive:!1,children:n.jsxs(xv,{$isActive:!1,onClick:m,"aria-label":"Settings",title:x?void 0:"Settings",children:[n.jsx(wv,{children:n.jsx(C$,{})}),x&&n.jsx(yv,{children:"Settings"})]})}),n.jsxs(HE,{$isExpanded:x,onClick:h,"aria-label":`User: ${l.name}`,title:x?void 0:l.name,children:[n.jsx(WE,{$color:l.avatarColor,children:l.initials}),x&&n.jsxs(n.Fragment,{children:[n.jsx(UE,{children:l.name}),n.jsx(Km,{children:n.jsx(Qf,{})})]})]})]})]})})}const VE=270,GE=p.nav`
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
`,YE=p.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,KE=p.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,QE=p.h2`
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
`,ZE=p.div`
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
`,XE=p.button`
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
`,JE=p.div`
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
`,eP=p.button`
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
`;const tP=p.span`
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
`,nP=p.div`
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
`,rP=je`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,oP=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${rP} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,bv=je`
  from { opacity: 0; }
  to   { opacity: 1; }
`,aP=je`
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
`,iP=je`
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
`,sP=`'Bradley Hand', 'Segoe Print', 'Marker Felt',
  'Chalkboard SE', 'Comic Sans MS', cursive`,lP=je`
  from { stroke-dashoffset: 1; }
  to   { stroke-dashoffset: 0; }
`,cP=je`
  0%   { opacity: 0; transform: scale(0.82) rotate(-2deg); }
  55%  { opacity: 1; transform: scale(1.06) rotate(0.8deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
`,Ou=420,dP=180,uP=Ou-60,hP=p.button`
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
  animation: ${bv} 260ms var(--ease-out, ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,pP=p.div`
  width: 100%;
  min-height: 32px;
`,fP=p.div`
  position: fixed;
  z-index: 1001;
  border-radius: 8px;
  background: var(--color-bg-primary, #fff);
  box-shadow:
    0 0 0 2px rgb(255 255 255 / 92%),
    0 0 24px rgb(255 255 255 / 28%);
  animation: ${aP} 2.4s ease-in-out infinite;

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
    animation: ${iP} 2.4s ease-out infinite;
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
`,mP=p.div`
  position: fixed;
  z-index: 1002;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  width: max-content;
  max-width: min(360px, calc(100vw - 32px));
  /* The sketched arrow leads in from the left and the note sits beside it, so
     the two align on the arrow's shaft rather than on their boxes. */
  align-items: center;
  transform: translateY(-50%);
  pointer-events: none;
  /* Sits on the dimmed scrim in both themes, so the white stays literal — a
     theme-flipping token would go dark-on-dark. */
  color: #fff;
  /* Handwritten rather than the UI sans — this is an aside to the operator, not
     part of the interface. Handwriting faces run small and loose for their point
     size, so it takes a step up the scale and a tighter line height to hold
     together against the sans around it. */
  font-family: ${sP};
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
`,gP=p.svg`
  flex: 0 0 auto;
  overflow: visible;

  path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: ${lP} ${Ou}ms var(--ease-out, ease-out) both;
  }

  /* The barbs are struck once the shaft has arrived at the tip. */
  path + path {
    animation-duration: ${dP}ms;
    animation-delay: ${Ou-40}ms;
  }

  @media (prefers-reduced-motion: reduce) {
    path,
    path + path {
      stroke-dashoffset: 0;
      animation: none;
    }
  }
`,vP=p.span`
  display: inline-block;
  transform-origin: left center;
  animation: ${cP} 420ms ${uP}ms
    cubic-bezier(0.34, 1.56, 0.64, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: ${bv} 200ms both;
    transform: none;
  }
`,Qm=p.button`
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
`,xP=p.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${e=>e.$outlined&&qe`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,yP=p.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,wP=p.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,bP=p.div`
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
`,kP=p.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,_P=p.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,CP=p.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,kv=p.div`
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
`;function jP(){return n.jsxs(gP,{width:"54",height:"34",viewBox:"0 0 54 34",fill:"none","aria-hidden":"true",children:[n.jsx("path",{d:"M51.5 5.2C41.9 3.4 32 4.6 23.6 8.9c-6.4 3.2-11.9 8.5-15.2 14.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M15.4 19c-3.4.4-6.3 1.9-7.7 4.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M6.4 14.2c.9 3.5 1.4 6.7 1.3 9.7",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"})]})}function SP({prompt:e,onDismiss:o,children:i}){const s=g.useRef(null),[l,d]=g.useState(null);return g.useLayoutEffect(()=>{const h=s.current;if(!h)return;const m=()=>{const y=h.getBoundingClientRect();d({left:y.left,top:y.top,width:y.width,height:y.height})};m();const v=new ResizeObserver(m);return v.observe(h),window.addEventListener("resize",m),window.addEventListener("scroll",m,!0),()=>{v.disconnect(),window.removeEventListener("resize",m),window.removeEventListener("scroll",m,!0)}},[]),n.jsxs(n.Fragment,{children:[n.jsx(pP,{ref:s,"aria-hidden":"true"}),l&&ba.createPortal(n.jsxs(n.Fragment,{children:[n.jsx(hP,{type:"button","aria-label":"Dismiss event highlight",onClick:o}),n.jsx(fP,{style:{left:l.left,top:l.top,width:l.width,height:l.height},children:i}),n.jsxs(mP,{role:"status","aria-live":"polite",style:{left:l.left+l.width+20,top:l.top+l.height/2},children:[n.jsx(jP,{}),n.jsx(vP,{children:e})]})]}),document.body)]})}function _v(){return n.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function $P(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const Nh={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function MP({item:e}){return n.jsx(kn,{label:n.jsx("span",{style:{color:e.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:e.isActive?500:void 0,letterSpacing:"-0.084px"},children:e.label}),leadingSlot:n.jsx(kv,{children:e.icon??n.jsx(_v,{})}),selected:e.isActive,onClick:e.onClick,divider:!1,size:"md","aria-current":e.isActive?"page":void 0,style:Nh})}function RP({group:e}){const[o,i]=g.useState(e.defaultExpanded??!0),[s,l]=g.useState(!1),d=e.maxVisible,m=d!=null&&!s&&e.children.length>d?e.children.slice(0,d):e.children,v=e.children.length-m.length;return n.jsxs(xP,{$outlined:e.outlined,children:[n.jsxs(eP,{onClick:()=>i(y=>!y),"aria-expanded":o,children:[n.jsx(nP,{children:o?n.jsx(Pn,{size:16}):n.jsx(Cn,{size:16})}),n.jsx(tP,{children:e.label}),e.trailingBadge&&n.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:e.trailingBadge})]}),o&&n.jsxs(oP,{children:[m.map(y=>{const x=n.jsx(kn,{label:n.jsx("span",{style:{color:y.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:y.isActive?500:void 0,letterSpacing:"-0.084px"},children:y.label}),leadingSlot:n.jsx(kv,{children:y.icon??null}),trailingSlot:y.trailingSlot,selected:y.isActive,onClick:y.onClick,divider:!1,size:"md","aria-current":y.isActive?"page":void 0,style:Nh});return y.spotlightPrompt?n.jsx(SP,{prompt:y.spotlightPrompt,onDismiss:y.spotlightDismiss,children:x},y.id):n.jsx(g.Fragment,{children:x},y.id)}),v>0&&n.jsxs(Qm,{type:"button",onClick:()=>l(!0),children:["Show ",v," more"]}),d!=null&&s&&e.children.length>d&&n.jsx(Qm,{type:"button",onClick:()=>l(!1),children:"Show less"})]})]})}function NP({heading:e,isVisible:o,menuEntries:i=[],menuHeader:s,pageEntries:l=[],showSearch:d=!0,searchValue:h="",onSearchChange:m,onFilterClick:v,headerSlot:y,bodyContent:x,width:w=VE,onWidthChange:k,minWidth:$=220,maxWidth:_=520}){const j=x!==void 0,N=g.useRef(null),[M,C]=g.useState(!1);return g.useEffect(()=>{if(!M||!k)return;const S=N.current;if(!S)return;const P=S.getBoundingClientRect().left,R=E=>{const B=Math.min(_,Math.max($,E.clientX-P));k(B)},L=()=>C(!1);window.addEventListener("mousemove",R),window.addEventListener("mouseup",L);const A=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",R),window.removeEventListener("mouseup",L),document.body.style.userSelect=A,document.body.style.cursor=""}},[M,k,$,_]),n.jsxs(GE,{ref:N,$isVisible:o,$width:w,$isResizing:M,"aria-label":"Secondary navigation",children:[n.jsxs(YE,{children:[(e||y)&&n.jsxs(KE,{children:[n.jsx(QE,{children:e}),y]}),d&&!j&&n.jsxs(ZE,{children:[n.jsx(kg,{size:"sm",placeholder:"Search...",value:h,onChange:S=>m==null?void 0:m(S.target.value)}),n.jsx(XE,{onClick:v,"aria-label":"Filter",children:n.jsx($P,{})})]})]}),j?x:n.jsxs(JE,{children:[s,i.map(S=>S.type==="single"?n.jsx(MP,{item:S.item},S.item.id):S.type==="group"?n.jsx(RP,{group:S.group},S.group.id):S.type==="divider"?n.jsx(_P,{},S.id):n.jsx(yP,{children:S.label.label},S.label.id))]}),l.length>0&&n.jsxs(wP,{children:[n.jsx(kP,{}),l.map(S=>n.jsx(kn,{label:n.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:S.label}),leadingSlot:n.jsx(CP,{children:S.icon??n.jsx(_v,{})}),onClick:S.onClick,selected:S.isActive??!1,divider:!1,size:"md","aria-current":S.isActive?"page":void 0,style:Nh},S.id))]}),k&&o&&n.jsx(bP,{$isResizing:M,onMouseDown:S=>{S.preventDefault(),C(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const LP=p.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:e})=>e?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,AP=p.div`
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
`,Cv=p.div`
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
`,TP=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,IP=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function EP(){return n.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),n.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),n.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function Zm(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function Xm(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function PP(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function zP({heading:e,actions:o=[],showActivityButton:i=!0,showPonderButton:s=!0,noBorder:l=!1,onActivityClick:d,onPonderClick:h,onDotsClick:m}){const v=o.filter(w=>w.variant==="secondary"),y=o.filter(w=>w.variant==="primary"),x=Rh("(prefers-color-scheme: dark)");return n.jsxs(LP,{$noBorder:l,children:[n.jsx(AP,{children:typeof e=="string"?n.jsx(Cv,{children:e}):e}),n.jsxs(TP,{children:[n.jsxs(IP,{children:[n.jsx(De,{variant:"ghost",size:"sm",iconOnly:!0,onClick:m,"aria-label":"More options",title:"More options",children:n.jsx(EP,{})}),v.map(w=>n.jsx(De,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(Xm,{}),trailingArtwork:n.jsx(Zm,{}),onClick:w.onClick,children:w.label},w.id)),y.map(w=>n.jsx(De,{variant:"primary",size:"sm",leadingArtwork:n.jsx(Xm,{}),trailingArtwork:n.jsx(Zm,{}),onClick:w.onClick,children:w.label},w.id))]}),i&&n.jsx(De,{variant:"ghost",size:"sm",iconOnly:!0,onClick:d,"aria-label":"Activity",title:"Activity",children:n.jsx(PP,{})}),s&&n.jsx(N0,{dark:x,onClick:h,"aria-label":"Ponder AI"})]})]})}const OP=p.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,DP=p.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,FP=p.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
`,BP=p.main`
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
`,Jm="tb:secondary-nav-width",e0=270,t0=220,n0=520;function HP({items:e,toolItems:o,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:m,newItemId:v,aiItemId:y,secNavHeading:x,menuEntries:w,menuHeader:k,pageEntries:$,showSearch:_,searchValue:j,onSearchChange:N,onFilterClick:M,headerSlot:C,bodyContent:S,heading:P,actions:R,showActivityButton:L,showPonderButton:A,noBorder:E,onActivityClick:B,onPonderClick:G,onDotsClick:Q,children:U,showSecondaryNav:Y=!0,showTopNav:ee=!0}){const[oe,ce]=g.useState(()=>{if(typeof window>"u")return e0;const le=window.localStorage.getItem(Jm),K=le?parseInt(le,10):NaN;return Number.isFinite(K)?Math.min(n0,Math.max(t0,K)):e0});return g.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(Jm,String(oe))},[oe]),n.jsxs(OP,{children:[n.jsx(qE,{items:e,toolItems:o,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:m,newItemId:v,aiItemId:y}),n.jsxs(DP,{children:[Y&&n.jsx(NP,{heading:x,menuEntries:w,menuHeader:k,pageEntries:$,isVisible:!0,showSearch:_,searchValue:j,onSearchChange:N,onFilterClick:M,headerSlot:C,bodyContent:S,width:oe,onWidthChange:ce,minWidth:t0,maxWidth:n0}),n.jsxs(FP,{children:[ee&&n.jsx(zP,{heading:P,actions:R,showActivityButton:L,showPonderButton:A,noBorder:E,onActivityClick:B,onPonderClick:G,onDotsClick:Q}),n.jsx(BP,{children:U})]})]})]})}function WP({deadZonePx:e=8,topThresholdPx:o=20,target:i}={}){const[s,l]=g.useState(null),d=g.useRef(0);return g.useEffect(()=>{var y;const h=()=>i?i.scrollTop:typeof window<"u"?window.scrollY:0;d.current=h();const m=()=>{const x=h(),w=x-d.current;Math.abs(w)<e||(w>0&&x>o?l("down"):w<0&&l("up"),d.current=x)},v=i??(typeof window<"u"?window:{});return(y=v.addEventListener)==null||y.call(v,"scroll",m,{passive:!0}),()=>{var x;(x=v.removeEventListener)==null||x.call(v,"scroll",m)}},[e,o,i]),s}const UP=p.button`
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
`,qP=p.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,VP=p.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function r0({label:e,isOpen:o,onClick:i,ariaLabel:s}){return n.jsxs(UP,{type:"button",$active:o,onClick:i,"aria-haspopup":"dialog","aria-expanded":!!o,"aria-label":s,children:[n.jsx(qP,{children:e}),n.jsx(VP,{children:n.jsx(Pn,{size:14})})]})}const GP=p.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${e=>e.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,YP=p.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: 0 var(--space-3, 12px);
`,KP=p.button`
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
`,QP=p.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,ZP=p.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`;function XP({size:e=18}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const JP=g.forwardRef(function({primaryLabel:o,secondaryLabel:i,tertiaryLabel:s,openOverlay:l,hidden:d,onHamburgerClick:h,onSecondaryClick:m,onTertiaryClick:v},y){return n.jsx(GP,{ref:y,$hidden:d,children:n.jsxs(YP,{children:[n.jsx(KP,{onClick:h,"aria-label":"Open navigation",children:n.jsx(XP,{size:18})}),n.jsxs(QP,{children:[n.jsx(r0,{label:i??o,isOpen:l==="secondary",onClick:m,ariaLabel:"Choose a section"}),s&&n.jsxs(n.Fragment,{children:[n.jsx(ZP,{"aria-hidden":"true",children:"›"}),n.jsx(r0,{label:s,isOpen:l==="persona",onClick:v??(()=>{}),ariaLabel:"Choose a persona"})]})]})]})})}),ez=je`
  from { opacity: 0; }
  to { opacity: 1; }
`,tz=p.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${ez} 160ms ease-out;
`;function nz({onDismiss:e}){return g.useEffect(()=>{const o=s=>{s.key==="Escape"&&e()};window.addEventListener("keydown",o);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",o),document.body.style.overflow=i}},[e]),n.jsx(tz,{onClick:e,"aria-hidden":"true"})}const rz=je`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,oz=p.div`
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
  animation: ${rz} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,az=p.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,iz=p.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,sz=p.h2`
  margin: 0;
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,lz=p.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function jv({title:e,children:o,ariaLabel:i}){return n.jsxs(oz,{role:"dialog","aria-modal":"true","aria-label":i??e,children:[n.jsx(az,{children:n.jsx(iz,{"aria-hidden":"true"})}),e&&n.jsx(sz,{children:e}),n.jsx(lz,{children:o})]})}const Lh=p.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,wl=p.div`
  padding: var(--space-3, 12px) var(--space-5, 20px) var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,ha=p.button`
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
`,Al=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,pa=p.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Mi=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function cz({moduleLabel:e,entries:o,onSelect:i}){return n.jsx(jv,{title:e,ariaLabel:`${e} sections`,children:n.jsx(Lh,{children:o.map(s=>{if(s.type==="single"){const d=s.item;return n.jsxs(ha,{$active:d.isActive,onClick:()=>{var h;(h=d.onClick)==null||h.call(d),i()},"aria-pressed":!!d.isActive,children:[n.jsx(Al,{children:d.icon}),n.jsx(pa,{children:d.label}),d.isActive&&n.jsx(Mi,{"aria-hidden":"true",children:n.jsx(dn,{size:16})})]},d.id)}if(s.type!=="group")return null;const l=s.group;return n.jsxs("div",{children:[n.jsx(wl,{children:l.label}),l.children.map(d=>n.jsxs(ha,{$active:d.isActive,$indent:!0,onClick:()=>{var h;(h=d.onClick)==null||h.call(d),i()},"aria-pressed":!!d.isActive,children:[n.jsx(Al,{children:d.icon}),n.jsx(pa,{children:d.label}),d.isActive&&n.jsx(Mi,{"aria-hidden":"true",children:n.jsx(dn,{size:16})})]},d.id))]},l.id)})})})}const dz=p.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,uz=p.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,hz=p.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function pz({personas:e,activeId:o,onSelect:i}){return n.jsx(jv,{title:"Personas",ariaLabel:"Choose a persona",children:n.jsx(Lh,{children:e.map(s=>{const l=s.id===o;return n.jsxs(ha,{$active:l,onClick:()=>i(s.id),"aria-pressed":l,children:[n.jsx(pa,{as:"span",children:n.jsxs(dz,{children:[n.jsx(uz,{children:s.name}),n.jsx(hz,{children:s.role})]})}),l&&n.jsx(Mi,{"aria-hidden":"true",children:n.jsx(dn,{size:16})})]},s.id)})})})}const fz=je`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,mz=p.aside`
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
  animation: ${fz} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,gz=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,vz=p.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,xz=p.button`
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
`,yz=p.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,wz=60;function bz({title:e,onDismiss:o,children:i}){const s=g.useRef(null),l=g.useRef(null);return g.useEffect(()=>{const d=s.current;if(!d)return;const h=v=>{const y=v.touches[0];l.current={x:y.clientX,y:y.clientY}},m=v=>{if(!l.current)return;const y=v.changedTouches[0],x=y.clientX-l.current.x,w=y.clientY-l.current.y;l.current=null,x<-60&&Math.abs(w)<wz&&o()};return d.addEventListener("touchstart",h,{passive:!0}),d.addEventListener("touchend",m),()=>{d.removeEventListener("touchstart",h),d.removeEventListener("touchend",m)}},[o]),n.jsxs(mz,{ref:s,role:"dialog","aria-modal":"true","aria-label":e??"Navigation",children:[n.jsxs(gz,{children:[n.jsx(vz,{children:e??"Navigation"}),n.jsx(xz,{onClick:o,"aria-label":"Close navigation",children:n.jsx(Li,{size:18})})]}),n.jsx(yz,{children:i})]})}const kz=p.div`
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
`,_z=p.input`
  all: unset;
  flex: 1 1 auto;
  min-width: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 15px;
  color: var(--color-content-primary, #151515);

  &::placeholder {
    color: var(--color-content-tertiary, #87919f);
  }
`,Cz=p.span`
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
`,jz=p.div`
  margin: var(--space-2, 8px) 0 0;
  border-top: 1px solid var(--color-border-opaque, #e8eaee);
`;function Sz({activeId:e,groups:o,currentMenuEntries:i,user:s,onUserClick:l,onSelectModule:d,onDismiss:h}){const[m,v]=g.useState(""),y=m.trim().toLowerCase(),x=$=>$.toLowerCase().includes(y),w=$=>typeof $=="string"?x($):!0,k=$=>n.jsxs(ha,{$active:$.isActive,$indent:!0,onClick:()=>{var _;(_=$.onClick)==null||_.call($),h()},"aria-pressed":!!$.isActive,children:[n.jsx(Al,{children:$.icon}),n.jsx(pa,{children:$.label}),$.isActive&&n.jsx(Mi,{"aria-hidden":"true",children:n.jsx(dn,{size:16})})]},$.id);return n.jsxs(bz,{title:"Navigation",onDismiss:h,children:[n.jsxs(kz,{children:[n.jsx(Zu,{size:16}),n.jsx(_z,{type:"search",placeholder:"Search","aria-label":"Search navigation",value:m,onChange:$=>v($.target.value)})]}),n.jsxs(Lh,{children:[o.map($=>{const _=y?$.items.filter(j=>x(j.label)):$.items;return y&&_.length===0?null:n.jsxs("div",{children:[n.jsx(wl,{children:$.label}),_.map(j=>{const N=j.id===e;return n.jsxs("div",{children:[n.jsxs(ha,{$active:N,onClick:()=>{d(j.id),h()},"aria-pressed":N,children:[n.jsx(Al,{children:j.icon}),n.jsx(pa,{children:j.label}),N&&n.jsx(Mi,{"aria-hidden":"true",children:n.jsx(dn,{size:16})})]}),N&&i.length>0&&n.jsx("div",{children:i.map(M=>{if(M.type==="single")return y&&!w(M.item.label)?null:k(M.item);if(M.type!=="group")return null;const C=M.group,S=y?C.children.filter(P=>w(P.label)):C.children;return y&&S.length===0?null:n.jsxs("div",{children:[n.jsx(wl,{children:C.label}),S.map(k)]},C.id)})})]},j.id)})]},$.id)}),n.jsx(jz,{"aria-hidden":"true"}),n.jsx(wl,{children:"Account"}),n.jsxs(ha,{onClick:()=>{l==null||l(),h()},"aria-label":`User: ${s.name}`,children:[n.jsx(Cz,{$color:s.avatarColor,"aria-hidden":"true",children:s.initials}),n.jsx(pa,{children:s.name})]})]})]})}const o0=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],$z=p.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-primary, #ffffff);
`,Mz=p.main`
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
`;function Rz(e){const{activeId:o,selectedPersonaId:i,moduleGroups:s,primaryLabel:l,secondaryLabel:d,menuEntries:h,user:m,onUserClick:v,onMobileNavigate:y,onSelectPersona:x,children:w}=e,[k,$]=g.useState(null),_=WP({deadZonePx:8,topThresholdPx:20}),j=k===null&&_==="down",N=g.useMemo(()=>{if(!i)return null;const P=o0.find(R=>R.id===i);return(P==null?void 0:P.name)??null},[i]),M=()=>$(null),C=P=>$(P),S=k!==null;return n.jsxs($z,{children:[n.jsx(JP,{primaryLabel:l,secondaryLabel:d,tertiaryLabel:N,openOverlay:k,hidden:j,onHamburgerClick:()=>C("drawer"),onSecondaryClick:()=>{C(h.length>0?"secondary":"drawer")},onTertiaryClick:N?()=>C("persona"):void 0}),n.jsx(Mz,{children:w}),S&&n.jsx(nz,{onDismiss:M}),k==="secondary"&&n.jsx(cz,{moduleLabel:l,entries:h,onSelect:M}),k==="persona"&&n.jsx(pz,{personas:o0,activeId:i,onSelect:P=>{x(P),M()}}),k==="drawer"&&n.jsx(Sz,{activeId:o,groups:s,currentMenuEntries:h,user:m,onUserClick:v,onSelectModule:P=>y(P),onDismiss:M})]})}function Nz(e){if(NE()&&e.mobileNav){const i=e.mobileNav;return n.jsx(Rz,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:e.menuEntries??[],user:e.user,onUserClick:e.onUserClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,children:e.children})}return n.jsx(HP,{...e})}const Lz="/Ultron_Onboarding/assets/policy-icon-active-CyAzaB38.svg",Az="/Ultron_Onboarding/assets/automation-icon-active-C_8ZK5uN.svg",Tz=[{name:"Alicia Nguyen",role:"Registered Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Marcus Bell",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"expiring",expiresInDays:21},{name:"Priya Shah",role:"Charge Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Devon Carter",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"valid"},{name:"Sofia Ramirez",role:"Registered Nurse",location:"Methodist Dallas",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"James O'Connor",role:"Licensed Vocational Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Fatima Al-Rashid",role:"Registered Nurse",location:"St. David's North",tenure:"4 yr",credential:"RN License",credentialStatus:"valid"},{name:"Tyler Brooks",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"expiring",expiresInDays:9},{name:"Grace Kim",role:"Charge Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Leon Whitfield",role:"Registered Nurse",location:"St. David's North",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"Hannah Torres",role:"Licensed Vocational Nurse",location:"Methodist Dallas",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Omar Haddad",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"}],Iz=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,profile:{roles:["RN","LPN","CNA","Caregiver","Med Aide","Charge Nurse"],locations:["Riverside Clinic","Lakeside Care","Mercy Ward","Home Visits","Northgate Rehab"],credentials:["RN License","BLS","CPR","TB Screening","CNA Certification"]}},{match:/security|guard|patrol|officer|surveillance/i,profile:{roles:["Security Officer","Site Supervisor","Patrol","Console Operator"],locations:["Tower Plaza","North Gate","Event Hall","West Lot","Loading Dock"],credentials:["Guard Card","First Aid","CPR","Baton Permit"]}},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,profile:{roles:["Event Staff","Bartender","Usher","Setup Crew","Concessions","Lead"],locations:["Main Arena","Concourse A","Club Level","North Gate","Back of House"],credentials:["Food Handler","Alcohol Service","Crowd Safety"]}},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,profile:{roles:["Forklift Op","Picker","Loader","Foreman","Yard Lead","Driver"],locations:["Bay 4","Dock 2","Yard","Line A","North Warehouse","Staging"],credentials:["Forklift Cert","OSHA 10","CDL","Safety Orientation"]}}],Ez={roles:["Associate","Team Lead","Coordinator","Specialist","Shift Lead"],locations:["Downtown","North Site","West Branch","Central","East Yard"],credentials:["Onboarding","I-9 Verified","Safety Orientation"]},Pz=["Maria","James","Sofia","Kenji","Aisha","Diego","Priya","Marcus","Elena","Tomas","Grace","Omar","Hannah","Luis","Nia","Peter","Yuki","Carlos","Fatima","Noah","Ivy","Samuel","Leila","Andre","Mei","Jonah","Zoe","Rashid","Clara","Dev"],zz=["Ellis","Marin","Tanaka","Okafor","Nguyen","Alvarez","Patel","Cole","Rossi","Haddad","Kim","Santos","Weaver","Duval","Bauer","Reyes","Osei","Lindqvist","Mercer","Bianchi","Farah","Novak","Quinn","Abara"],Oz=["New","2 wk","1 mo","4 mo","7 mo","1 yr","2 yr","3 yr","5 yr"];function Dz(e){let o=e>>>0;return()=>{o|=0,o=o+1831565813|0;let i=Math.imul(o^o>>>15,1|o);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function Sv(e){let o=2166136261;for(let i=0;i<e.length;i++)o^=e.charCodeAt(i),o=Math.imul(o,16777619);return o>>>0}function Fz(e){const o=Iz.find(i=>i.match.test(e));return o?o.profile:Ez}function $v(e,o){const i=Fz(e),s=Dz(Sv(e||"teambridge")^o),l=m=>m[Math.floor(s()*m.length)],d=[],h=new Set;for(;d.length<o;){const m=`${l(Pz)} ${l(zz)}`;if(h.has(m))continue;h.add(m);const v=s()<.16;d.push({name:m,role:l(i.roles),location:l(i.locations),tenure:l(Oz),credential:l(i.credentials),credentialStatus:v?"expiring":"valid",...v?{expiresInDays:3+Math.floor(s()*27)}:{}})}return d}const Bz=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,shapes:["12-hour shifts, around the clock","Day / night rotation","On-call weekends"]},{match:/security|guard|patrol|officer|surveillance/i,shapes:["24/7 coverage, 8-hour posts","Weekend-heavy events","Overnight-only crew"]},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,shapes:["Event-based, weekends heavy","Split shifts, peak evenings","Game-day surges"]},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,shapes:["Two shifts, Mon–Sat","Peak-season overtime","Early AM dock crew"]}],Hz=["9-to-5, weekdays","Rotating shifts","Weekend coverage"];function Wz(e){var o;return((o=Bz.find(i=>i.match.test(e)))==null?void 0:o.shapes)??Hz}function Uz(e){const o=$v(e,8),[i,s,l,d]=o,h=4+Sv(s.name)%9;return[{kind:"callout",worker:i.name,role:i.role,detail:"Called out for Saturday — the shift needs a fill."},{kind:"expiring",worker:s.name,role:s.role,detail:`${s.credential} expires in ${h} days.`},{kind:"missing",worker:l.name,role:l.role,detail:"Missed a clock-out Tuesday."},{kind:"missing",worker:d.name,role:d.role,detail:"Didn't punch in Thursday."}]}const qz=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],a0=["6a–2p","2p–10p","10p–6a"],Vz=[4,3,3,4,4,3,3];function Gz(e){var l,d;const o=$v(e,12);let i=0;const s=qz.map((h,m)=>{const v=[];for(let y=0;y<Vz[m];y++){const x=o[i%o.length].name.split(" ")[0];i++,v.push({time:a0[y%a0.length],who:x})}return{label:h,shifts:v}});return(l=s[5])!=null&&l.shifts[0]&&(s[5].shifts[0]={...s[5].shifts[0],who:"Open",flag:"open"}),(d=s[1])!=null&&d.shifts[0]&&(s[1].shifts[0]={...s[1].shifts[0],flag:"watch"}),s}const Yz=1100,Kz=440,Qz=4,mu=320,Zz=720,gu=2e3,Xz=950,i0=1600,Mv=249,Jz=68,eO=229,tO=47,nO=56,rO=8,oO=Mv,Ah=84,Ri=81,Tl=48,s0=[{name:"Dana Okafor",photo:"https://i.pravatar.cc/96?u=dana.okafor"},{name:"Marcus Webb",photo:"https://i.pravatar.cc/96?u=marcus.webb"},{name:"Priya Raman",photo:"https://i.pravatar.cc/96?u=priya.raman"},{name:"Sofia Delgado",photo:"https://i.pravatar.cc/96?u=sofia.delgado"}],l0=[2,3,2,3,2,1,2],Rv=7,Nv=24,Du=[{where:'Row 34 · "J. & M. Alvarez"',reason:"Two people in one row — we split them out for you to confirm."},{where:"Row 51 · Dana Whitfield",reason:"Home location was blank — pick a site when you get a sec."},{where:'Row 72 · start date "13/40/24"',reason:"That date didn't read — everything else came in fine."}],aO="Let's start with your people. Drop your team roster into this chat — a spreadsheet, a PDF, even a photo of a printed one works. No need to clean it up first; I'll read it, tidy it, and bring everyone in.",iO='Happy to get to that — right after your people are in. Attach your roster here (the paperclip takes spreadsheets, PDFs, or a photo), or tap "Use sample teammates" below to start with a stand-in crew.',c0="Next: your schedule. Drop your current one into this chat — any format — and I'll turn it into shifts. Or just tell me the shape of your week and I'll build a realistic one.",sO=`Time for a test run, so you can see how I work? Let's simulate a last minute call out.

If you provide your cell number we can make sure everything is hooked up and test things live together.`,lO="Perfect — I’ll text you there. And here’s Ultron live: Maria Ellis just dropped her 2:00 PM shift at Riverside Clinic. I opened it under New and found 8 qualified RNs who can cover it.";function cO(e,o){const i=[o.workforceType&&`Workforce: ${o.workforceType}`,o.worksite&&`Worksites: ${o.worksite}`,o.pay&&`Pay: ${o.pay}`,o.billing&&`Billing: ${o.billing}`].filter(Boolean);return[{icon:"chart",headline:"Read your site",blocks:[{text:`Went through ${e?`the ${e} site`:"your site"} end to end — the services you run, the places you run them, and the kind of work you staff. Every page, not just the homepage.`}]},{icon:"clock",headline:"Mapped your operation",blocks:i.length?[{label:"What I settled on",bullets:i}]:[{text:"Inferred the roles you hire, where they work, and how the week is likely to run, so nothing here starts from a blank slate."}]},{icon:"edit",headline:"Set up your workspace",blocks:[{text:"Turned on the modules that fit the operation, pre-filled their settings, and left the rest out of your way until you need them."}]},{icon:"send",headline:"Planned what's next",blocks:[{label:"Left to collect",bullets:["Your roster — so I know who I am scheduling","Your schedule — so I can turn it into real shifts"]}]}]}function dO(e){return[{icon:"clock",headline:"Read your roster",blocks:[{text:`Opened ${e} and took every row and header as written — no cleanup asked of you first, and nothing skipped for being messy.`}]},{icon:"chart",headline:"Mapped the columns",blocks:[{label:"How the columns landed",bullets:["Names, roles and licenses mapped straight across","Home locations resolved against your worksites","3 columns I didn't recognize kept verbatim on each record"]}]},{icon:"alert",headline:`Flagged ${Ah-Ri} rows`,blocks:[{label:"Held for you, none dropped",bullets:Du.map(o=>`${o.where} — ${o.reason}`)}]},{icon:"edit",headline:`Added ${Ri} teammates`,blocks:[{text:"Each one carries their role, licenses, home location and contact details, so they are schedulable the moment the week exists."}]}]}function uO(e){return[{icon:"clock",headline:"Reused your site read",blocks:[{text:e?`Took "${e}" as the brief, so the stand-in crew looks like the people you actually staff rather than generic filler.`:"Took the roles and worksites I read off your site as the brief, so the stand-in crew looks like the people you actually staff."}]},{icon:"chart",headline:"Modeled a matching crew",blocks:[{label:"What I balanced",bullets:["Role mix weighted the way your operation reads","Licenses and certifications appropriate to each role","Home locations spread across your worksites"]}]},{icon:"edit",headline:`Generated ${Tl} teammates`,blocks:[{text:"Full records — role, license, location, availability — so every downstream step behaves exactly as it will with your real people."}]},{icon:"done",headline:"Tagged them Sample",blocks:[{text:"One tap clears the whole set the moment your real roster lands. Nothing you build on top of them is lost in the swap."}]}]}function hO(e,o){return[{icon:"clock",headline:"Read your schedule",blocks:[{text:`Opened ${e} and took the grid as laid out — whatever the format, the pattern is the part that matters.`}]},{icon:"chart",headline:"Found your pattern",blocks:[{label:"What the file told me",bullets:["Recurring start and end times per day","Which roles each shift needs, and how many","The days that run light and the days that run heavy"]}]},Lv(),Av(o)]}function pO(e,o){return[{icon:"clock",headline:"Took your week shape",blocks:[{text:`Read "${e}" as the rhythm to build to, then filled in the detail your site and roster already imply.`}]},{icon:"chart",headline:"Modeled demand",blocks:[{label:"What I reasoned about",bullets:["How that shape distributes hours over the week","Coverage each worksite needs to stay staffed","Which roles have to be on at the same time"]}]},Lv(),Av(o)]}function Lv(){return{icon:"edit",headline:`Built ${Nv} shifts`,blocks:[{text:`Laid out across ${Rv} days, assigned from your roster where the fit was obvious and left open where it was not, rather than guessing at coverage.`}]}}function Av(e){return{icon:"alert",headline:"Checked coverage",blocks:[{text:`Cross-referenced every shift with licenses, availability and hours. ${e} things need you — they are called out on the week below.`}]}}function fO(e){return[{icon:"clock",headline:"Read your message"},{icon:"alert",headline:`Found no ${e}`,blocks:[{text:`Nothing in it parsed as ${e} data, so I held the setup here rather than building on a guess.`}]}]}function mO(){return[{icon:"clock",headline:"Checked your number",blocks:[{text:"Read it as a reachable mobile and stored just the digits."}]},{icon:"edit",headline:"Wired it up",blocks:[{text:"Texts from me now reach you there — the same channel I use to chase fills and confirmations."}]},{icon:"send",headline:"Armed a live event",blocks:[{text:"Picked a real-shaped call-out from your new week so you can watch me work it end to end instead of reading about it."}]}]}function gO(){return[{icon:"clock",headline:"Read your message"},{icon:"alert",headline:"Found no number",blocks:[{text:"Held off on saving anything rather than storing a number I would fail to reach you on."}]}]}function vO(){return[{icon:"clock",headline:"Read your message"},{icon:"chart",headline:"Checked your workspace",blocks:[{text:"Looked at your people, your week and what is already open before answering, so the reply reflects your setup rather than a generic one."}]},{icon:"send",headline:"Drafted a reply"}]}function bl(e){if(!e)return null;const o=e.trim().replace(/\s+/g,""),i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s=o;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s}function d0(e){return e.includes("	")||e.trim().includes(`
`)}function xO(e){return e.scrollHeight-e.clientHeight>oO}function yO(e){var l;const o=e.trim().split(/\s+/),i=((l=o[0])==null?void 0:l[0])??"",s=o.length>1?o[o.length-1][0]:"";return(i+s).toUpperCase()}function wO(e){return`https://i.pravatar.cc/64?img=${e*7%70+1}`}const bO={};function kO({active:e=!0,answers:o=bO,onContinued:i,onPhoneSubmitted:s}){const[l,d]=g.useState([]),[h,m]=g.useState(""),[v,y]=g.useState([]),[x,w]=g.useState(null),[k,$]=g.useState("roster"),[_,j]=g.useState(!1),[N,M]=g.useState(!1),[C,S]=g.useState(null),[P,R]=g.useState(null),[L,A]=g.useState(null),[E,B]=g.useState(""),[G,Q]=g.useState(!1),[U,Y]=g.useState(!1),[ee,oe]=g.useState(!1),[ce,le]=g.useState("grant"),[K,D]=g.useState(!1),[W,T]=g.useState(!1),[O,ne]=g.useState("delivering"),[q,X]=g.useState(0),[se,F]=g.useState(-1),[z,ae]=g.useState(""),[me,de]=g.useState(!1),[ge]=g.useState(()=>{var re;return typeof window<"u"&&!!((re=window.matchMedia)!=null&&re.call(window,"(prefers-reduced-motion: reduce)").matches)}),[be,_e]=g.useState(()=>{var re;return typeof window<"u"&&!!((re=window.matchMedia)!=null&&re.call(window,"(max-width: 600px)").matches)}),Le=g.useRef([]),Ie=g.useRef(null),Oe=g.useRef(null),Ee=g.useRef(null),ze=g.useRef(null),Be=g.useMemo(()=>{var re;return((re=o.workforceType)==null?void 0:re.trim())||bl(o.companyWebsite)||""},[o]),Ke=g.useMemo(()=>Wz(Be),[Be]),xe=g.useMemo(()=>{const re=bl(o.companyWebsite),we=[{kind:"text",text:`Welcome to your ${re?`${re} `:""}workspace — I'm Ultron, and I'll be doing the heavy lifting around here. Together we'll bring in your team, shape your schedule, and line up the day-to-day work I can take off your plate.`}];return we.push({kind:"text",text:aO}),we.push({kind:"rosterCta"}),we},[o]),Se=(re,ve)=>{Le.current.push(window.setTimeout(ve,re))};g.useEffect(()=>()=>{Le.current.forEach(re=>window.clearTimeout(re)),Ie.current&&window.clearTimeout(Ie.current)},[]);const et=re=>{const ve=re.scrollTop;T(we=>we?ve>rO:ve>nO&&xO(re))};g.useEffect(()=>{var we;const re=(we=window.matchMedia)==null?void 0:we.call(window,"(max-width: 600px)");if(!re)return;const ve=()=>_e(re.matches);return ve(),re.addEventListener("change",ve),()=>re.removeEventListener("change",ve)},[]);const tt=re=>{if(S({file:re,state:"uploading",progress:8}),ge){S({file:re,state:"uploading",progress:92});return}Se(180,()=>S({file:re,state:"uploading",progress:38})),Se(460,()=>S({file:re,state:"uploading",progress:74})),Se(780,()=>S({file:re,state:"uploading",progress:92}))},rt=re=>{if(R({file:re,state:"uploading",progress:8}),ge){R({file:re,state:"complete",progress:100});return}Se(180,()=>R({file:re,state:"uploading",progress:38})),Se(460,()=>R({file:re,state:"uploading",progress:74})),Se(780,()=>R({file:re,state:"complete",progress:100}))};g.useEffect(()=>{if(ge){X(xe.length),F(-1),ne("ready");return}const re=[];let ve=null;const we=(Qe,Wt)=>{re.push(window.setTimeout(Wt,Qe))},Xe=Qe=>{if(Qe>=xe.length){de(!1),ne("ready");return}de(!0),we(Kz,()=>{de(!1),F(Qe);const Wt=xe[Qe];if(Wt.kind!=="text"){we(Zz,()=>{X(Qe+1),F(-1),we(mu,()=>Xe(Qe+1))});return}ae("");const un=Wt.text;let hn=0;ve=window.setInterval(()=>{hn+=1,ae(un.slice(0,hn)),hn>=un.length&&(ve&&window.clearInterval(ve),ve=null,we(mu,()=>{X(Qe+1),F(-1),ae(""),we(mu,()=>Xe(Qe+1))}))},Qz)})};return ne("delivering"),Xe(0),()=>{re.forEach(Qe=>window.clearTimeout(Qe)),ve&&window.clearInterval(ve)}},[xe,ge]),g.useEffect(()=>{const re=ve=>{const we=ve.target;we!=null&&we.isContentEditable||(we==null?void 0:we.tagName)==="INPUT"||(we==null?void 0:we.tagName)==="TEXTAREA"||(we==null?void 0:we.tagName)==="SELECT"||ve.metaKey||ve.ctrlKey||ve.altKey||ve.key.toLowerCase()!=="m"||(ve.preventDefault(),D(!0))};return document.addEventListener("keydown",re),()=>document.removeEventListener("keydown",re)},[]);const st=()=>{Y(!0),Ee.current&&window.clearTimeout(Ee.current),Ee.current=window.setTimeout(()=>D(!1),i0)},Ye=()=>{oe(!0),Ee.current&&window.clearTimeout(Ee.current),Ee.current=window.setTimeout(()=>D(!1),i0)};g.useEffect(()=>{var re;e&&((re=ze.current)==null||re.scrollIntoView({block:"end",behavior:"smooth"}))},[e,l,x,O,q,se,z,me]),g.useEffect(()=>{e||D(!1)},[e]);const Zn=(h.trim().length>0||v.length>0)&&x===null,jn=re=>{const ve=Array.from(re,we=>we.name);y(we=>[...we,...ve.filter(Xe=>!we.includes(Xe))])},sr=re=>y(ve=>ve.filter(we=>we!==re)),On=(re,ve={})=>{const we=ge?300:ve.workingMs??Yz,Xe=ge?200:Xz;w(ve.workingLabel??"");let Qe=0;const Wt=()=>{var pn;Ie.current&&(window.clearTimeout(Ie.current),Ie.current=null);const un=re[Qe];if(!un)return;const hn=Qe===re.length-1;if(Qe+=1,d(Ma=>[...Ma,un]),hn){w(null),Oe.current=null,(pn=ve.then)==null||pn.call(ve);return}w(""),Ie.current=window.setTimeout(Wt,Xe)};Oe.current=Wt,Ie.current=window.setTimeout(Wt,we)},Ao=()=>{var re;be&&((re=Oe.current)==null||re.call(Oe))},Ae=(re,ve=[])=>{l.some(we=>we.role==="operator")||i==null||i(),d(we=>[...we,{role:"operator",text:re,...ve.length?{attachments:ve}:{}}])},it=(re,ve)=>{j(!1),M(!0),ve&&tt(ve),On([{role:"ultron",activity:dO(re),text:`Got it — read ${re}: ${Ah} people, licenses, home locations. 3 columns I didn't recognize; I kept them so nothing's lost.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:`That's ${Ri} people in. ${c0}`},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Bringing your people in…",workingMs:gu,then:()=>$("schedule")})},vt=()=>{j(!0),M(!0),On([{role:"ultron",activity:uO(Be),text:`Done — I spun up ${Tl} sample teammates that look like your operation. Every one is tagged "Sample" — one tap to remove them when your real roster lands.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:c0},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Generating sample teammates…",workingMs:gu,then:()=>$("schedule")})},yt=re=>{re.cardFile&&rt(re.cardFile);const ve=Uz(Be);A({problems:ve,week:Gz(Be)});const we=re.fileName?`Read ${re.fileName} — turned it into next week's shifts. A few columns I didn't recognize, kept so nothing's lost.`:`Built you a realistic week — ${re.shape.toLowerCase()}. Here's what's in it.`,Xe=re.fileName?hO(re.fileName,ve.length):pO(re.shape.toLowerCase(),ve.length);On([{role:"ultron",activity:Xe,text:we},{role:"ultron",text:"",card:"week"},{role:"ultron",text:sO}],{workingLabel:re.fileName?"Turning it into shifts…":"Building your week…",workingMs:gu,then:()=>$("done")})},lr=(re,ve=[])=>{if(!re&&ve.length===0||x!==null)return;if(Ae(re,ve),k==="roster"){ve.length>0?it(ve[0]):d0(re)?it("your pasted roster"):On([{role:"ultron",activity:fO("roster"),text:iO}]);return}if(k==="schedule"){ve.length>0?yt({fileName:ve[0]}):d0(re)?yt({fileName:"your pasted schedule"}):yt({shape:re});return}if(!G){const Xe=re.replace(/\D/g,"");Xe.length>=7&&Xe.length<=15?(Q(!0),B(Xe),s==null||s(Xe),On([{role:"ultron",activity:mO(),text:lO}])):On([{role:"ultron",activity:gO(),text:"Send me the best mobile number to reach you — any normal format is fine."}]);return}const we=l.filter(Xe=>Xe.role==="ultron").length;On([{role:"ultron",activity:vO(),text:wh(re,we)}])},cr=()=>{const re=h.trim();!re&&v.length===0||x!==null||(lr(re,v),m(""),y([]))},oo=re=>{if(!re||re.length===0||k!=="roster"||x!==null)return;const ve=Array.from(re),we=ve.map(Xe=>Xe.name);Ae("",we),it(we[0],{name:ve[0].name,type:ve[0].type,size:ve[0].size})},$r=re=>{if(!re||re.length===0||k!=="schedule"||x!==null)return;const ve=Array.from(re),we=ve.map(Xe=>Xe.name);Ae("",we),yt({fileName:we[0],cardFile:{name:ve[0].name,type:ve[0].type,size:ve[0].size}})},dr=x!==null?[]:k==="roster"?[{icon:Qr,label:"No roster handy? Use sample teammates",onTap:()=>{Ae("Use sample teammates"),vt()}}]:k==="schedule"?Ke.map(re=>({icon:In,label:re,onTap:()=>{Ae(re),yt({shape:re})}})):[],$a=k!=="done"&&dr.length>0?n.jsx(pF,{"aria-label":"Suggestions",children:dr.map(({icon:re,label:ve,onTap:we})=>n.jsxs(fF,{type:"button",onClick:we,children:[re&&n.jsx(re,{size:14}),ve]},ve))}):null,Di=k==="roster"?"Attach your roster, or ask Ultron anything…":k==="schedule"?"Attach your schedule, or describe your week…":G?"Tell Ultron what to take on next…":"Enter your cell number…",Xn=k==="done"&&!G,Rt=ce==="waitlist",Fi=Rt?ee:U;return n.jsxs(jO,{children:[n.jsx(nv,{links:1}),n.jsx(rv,{}),n.jsx(SO,{$condensed:W,children:n.jsxs($O,{$condensed:W,children:[n.jsxs(MO,{$condensed:W,role:"img","aria-label":"Ultron",children:[n.jsx(u0,{$show:!W,"aria-hidden":"true",children:n.jsx(dt,{mark:"magnetic",size:140,tone:"auto",state:"active"})}),n.jsx(u0,{$show:W,$compact:!0,"aria-hidden":"true",children:n.jsx(dt,{mark:"magnetic",size:36,tone:"auto",state:"active"})})]}),n.jsxs(RO,{$condensed:W,children:[n.jsx(NO,{$condensed:W,children:"Welcome"}),n.jsx(LO,{$condensed:W,children:"Finish your setup, right in the chat"})]})]})}),n.jsx(AO,{onScroll:re=>et(re.currentTarget),children:n.jsxs(KO,{children:[n.jsx(ol,{"data-from":"ultron",children:n.jsxs(vu,{children:[(se>=0||q>0)&&n.jsx(p0,{children:n.jsx(Nl,{milestones:cO(bl(o.companyWebsite),o),collapsed:!0,hideActions:!0})}),xe.slice(0,se>=0?se+1:q).map((re,ve)=>{if(re.kind==="rosterCta"){const Xe=k==="roster"&&!N;return n.jsx(g.Fragment,{children:n.jsx(h0,{children:N?k==="roster"?C?n.jsx(rl,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:C.state,progress:C.progress,file:C.file,onFileSelect:()=>{},onClear:()=>{}}):n.jsxs(al,{children:[n.jsx(il,{"aria-hidden":"true",children:n.jsx(Qr,{size:16})}),n.jsxs(sl,{children:[n.jsx(ll,{children:"Roster"}),n.jsx(cl,{children:x||(_?"Generating sample teammates…":"Reading your roster…")})]}),n.jsx(dl,{"aria-hidden":"true",children:n.jsx(m0,{})})]}):n.jsxs(al,{$done:!0,children:[n.jsx(il,{"aria-hidden":"true",children:n.jsx(yu,{size:16})}),n.jsxs(sl,{children:[n.jsx(ll,{children:"Roster"}),n.jsx(cl,{children:"Spreadsheet, PDF, or a photo of a printed one"})]}),n.jsx(dl,{"aria-hidden":"true",children:n.jsx(_n,{size:18})})]}):n.jsxs(zv,{children:[Xe&&!C&&n.jsx(OO,{"aria-hidden":"true",children:n.jsx(DO,{children:[...s0,...s0].map((Qe,Wt)=>n.jsx(FO,{children:n.jsx("img",{src:Qe.photo,alt:""})},`${Qe.name}-${Wt}`))})}),n.jsx(rl,{"data-roster-flow":Xe&&!C?"":void 0,variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:(C==null?void 0:C.state)??"empty",progress:(C==null?void 0:C.progress)??0,file:(C==null?void 0:C.file)??null,disabled:x!==null&&!C,footerSlot:Xe&&O==="ready"?$a:void 0,onFileSelect:Qe=>oo([Qe]),onClear:()=>{}})]})})},`beat-${ve}`)}const we=ve===se;return n.jsxs(f0,{"data-from":"ultron",children:[we?z:re.text,we&&n.jsx(YO,{"aria-hidden":"true"})]},`beat-${ve}`)}),me&&n.jsx(VO,{children:n.jsx(y0,{role:"status","aria-label":"Ultron is typing",children:n.jsx(dt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})})})]})}),l.map((re,ve)=>{const we=re.activity?n.jsx(p0,{children:n.jsx(Nl,{milestones:re.activity,collapsed:!0,hideActions:!0})}):null;if(re.card)return n.jsx(ol,{"data-from":"ultron",children:n.jsxs(vu,{children:[we,n.jsx(h0,{$pop:re.card==="week",children:re.card==="roster"?n.jsx(_O,{sample:_}):re.card==="scheduleCta"?k==="schedule"?P?n.jsx(rl,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:P.state,progress:P.progress,file:P.file,onFileSelect:()=>{},onClear:()=>{}}):x!==null?n.jsx(IO,{children:n.jsxs(al,{children:[n.jsx(il,{"aria-hidden":"true",children:n.jsx(In,{size:16})}),n.jsxs(sl,{children:[n.jsx(ll,{children:"Schedule"}),n.jsx(cl,{children:x||"Building your week…"})]}),n.jsx(dl,{"aria-hidden":"true",children:n.jsx(m0,{})})]})}):n.jsxs(zO,{children:[n.jsx(HO,{"aria-hidden":"true",children:l0.map((Qe,Wt)=>{const un=l0.slice(0,Wt).reduce((hn,pn)=>hn+pn,0);return n.jsxs(WO,{children:[n.jsx(UO,{}),Array.from({length:Qe},(hn,pn)=>n.jsx(qO,{$sequence:un+pn,$accent:(Wt+pn)%5===0},pn))]},Wt)})}),n.jsx(rl,{"data-schedule-flow":"",variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:"empty",progress:0,file:null,footerSlot:$a,onFileSelect:Qe=>$r([Qe]),onClear:()=>{}})]}):n.jsxs(al,{$done:!0,children:[n.jsx(il,{"aria-hidden":"true",children:n.jsx(yu,{size:16})}),n.jsxs(sl,{children:[n.jsx(ll,{children:"Schedule"}),n.jsx(cl,{children:"Spreadsheet, PDF, or a photo — any format works"})]}),n.jsx(dl,{"aria-hidden":"true",children:n.jsx(_n,{size:18})})]}):L?n.jsx(CO,{problems:L.problems,week:L.week}):null})]})},ve);const Xe=n.jsxs(yF,{"data-from":re.role,children:[re.text&&n.jsx(f0,{"data-from":re.role,children:re.text}),re.attachments&&n.jsx(wF,{children:re.attachments.map(Qe=>n.jsxs(w0,{children:[n.jsx(Jr,{size:14}),Qe]},Qe))})]});return n.jsx(ol,{"data-from":re.role,children:we?n.jsxs(vu,{children:[we,Xe]}):Xe},ve)}),x!==null&&n.jsx(ol,{"data-from":"ultron",children:n.jsx(aF,{type:"button",onClick:Ao,disabled:!be,"aria-label":x?`${x} Tap to continue.`:"Ultron is replying. Tap to continue.",children:n.jsxs(oF,{children:[n.jsx(y0,{"aria-hidden":"true",children:n.jsx(dt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),x&&n.jsx(lF,{role:"status","aria-live":"polite",children:x}),n.jsx(iF,{"aria-hidden":"true",children:"Tap to continue"})]})})}),n.jsx("div",{ref:ze})]})}),O==="ready"&&n.jsxs(cF,{children:[n.jsx(dF,{role:"img","aria-label":"Ultron","aria-hidden":x!==null,children:n.jsx(uF,{"aria-hidden":"true",children:n.jsx(hF,{$show:x===null,children:n.jsx(dt,{mark:"magnetic2d",size:24,tone:"auto",state:"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})})}),n.jsxs(mF,{$phoneMode:Xn,onSubmit:re=>{re.preventDefault(),cr()},children:[v.length>0&&n.jsx(vF,{"aria-label":"Files to send",children:v.map(re=>n.jsxs(w0,{children:[n.jsx(Jr,{size:14}),re,n.jsx(xF,{type:"button","aria-label":`Remove ${re}`,onClick:()=>sr(re),children:n.jsx(_i,{size:12})})]},re))}),n.jsxs(gF,{children:[!Xn&&n.jsx(b0,{children:n.jsx(cg,{state:"idle",onSelect:jn})}),n.jsx(bF,{$phoneMode:Xn,rows:1,value:h,placeholder:Di,"aria-label":Xn?"Cell phone number":"Message Ultron",inputMode:Xn?"tel":"text",autoComplete:Xn?"tel":"off",onChange:re=>{const ve=re.target.value;m(Xn?ve.replace(/[^\d+().\-\s]/g,""):ve)},onKeyDown:re=>{re.key==="Enter"&&!re.shiftKey&&(re.preventDefault(),cr())},onPaste:re=>{var we;const ve=(we=re.clipboardData)==null?void 0:we.files;ve&&ve.length>0&&(re.preventDefault(),jn(ve))}}),n.jsx(b0,{children:n.jsx(_a,{state:Zn?"ready":"disabled-invalid",onSend:cr})})]})]})]}),n.jsx(zD,{}),n.jsxs(fg,{open:K,onClose:()=>D(!1),size:"lg","aria-label":`${Rt?"Join waitlist":"Unlock grant"} — Ultron access`,children:[n.jsxs(OD,{children:[n.jsx(FD,{"aria-hidden":"true",children:n.jsx(ov,{size:300})}),n.jsx(BD,{type:"button","aria-label":"Close",onClick:()=>D(!1),children:n.jsx(_i,{size:18})}),n.jsxs(HD,{children:[n.jsx(WD,{"aria-hidden":"true"}),Rt?"Ultron early access":"Your welcome grant"]}),!Rt&&n.jsxs(UD,{"aria-label":"$1,000 of work on us",children:[n.jsxs(qD,{children:[n.jsx(VD,{children:"$"}),"1,000"]}),n.jsxs(GD,{children:["of work",n.jsx("br",{}),n.jsx("strong",{children:"on us"})]})]}),n.jsx(YD,{$prominent:Rt,children:Rt?"Be first when access opens.":"Turn Ultron loose."}),n.jsx(KD,{children:Rt?"Ultron is opening access in waves. Leave your number and we’ll text the moment your workspace is unblocked.":"Ultron proposes the work. You call the shots. Your first 100,000 credits are covered."}),n.jsx(QD,{"aria-label":Rt?"Waitlist benefits":"Grant benefits",children:Rt?n.jsxs(n.Fragment,{children:[n.jsx(sa,{children:"Priority access"}),n.jsx(sa,{children:"One text when ready"}),n.jsx(sa,{children:"No commitment"})]}):n.jsxs(n.Fragment,{children:[n.jsx(sa,{children:"100,000 credits"}),n.jsx(sa,{children:"Up to 3 months"}),n.jsx(sa,{children:"You approve every action"})]})}),Fi?n.jsxs(nF,{role:"status",children:[n.jsx(_n,{size:20}),Rt?"You’re on the list — we’ll text as soon as your access opens.":"You’re set — I’ll text before I act. Your $1,000 grant is live."]}):n.jsxs(ZD,{onSubmit:re=>{re.preventDefault(),E.trim()&&(Rt?Ye():st())},children:[n.jsx(XD,{htmlFor:"welcome-grant-phone",children:Rt?"Where should we send your access text?":"Where should Ultron send proposals?"}),n.jsxs(JD,{children:[n.jsx(eF,{id:"welcome-grant-phone",type:"tel",inputMode:"numeric",pattern:"[0-9]*",maxLength:15,value:E,placeholder:"Your phone number","aria-label":"Mobile number",autoComplete:"tel",onChange:re=>B(re.target.value.replace(/\D/g,""))}),n.jsx(tF,{type:"submit",variant:"tertiary",size:"lg",disabled:!E.trim(),children:Rt?"Join waitlist":"Unlock $1,000"})]})]}),n.jsx(rF,{children:Rt?"Access updates only — never spam. Msg & data rates may apply. Reply STOP to opt out.":"Proposals only — never spam. Msg & data rates may apply. Reply STOP to opt out."})]}),n.jsxs(DD,{type:"button",onClick:()=>{Ee.current&&window.clearTimeout(Ee.current),le(re=>re==="grant"?"waitlist":"grant")},children:["Demo: show ",Rt?"welcome grant":"waitlist"]})]})]})}function _O({sample:e}){const[o,i]=g.useState(!1),[s,l]=g.useState(!0),d=Tz.slice(0,6),h=(e?Tl:Ri)-d.length;return n.jsxs(Ov,{"aria-label":e?"Sample teammates":"Roster import result",children:[n.jsxs(ZO,{type:"button","aria-expanded":s,"aria-controls":"welcome-roster-people",onClick:()=>l(m=>!m),children:[e?n.jsx(XO,{children:n.jsxs(JO,{children:[Tl," sample teammates, ready to run a full week"]})}):n.jsxs(eD,{children:[n.jsxs(tD,{children:[Ri," ",n.jsxs(nD,{children:["/",Ah]})]}),n.jsxs(rD,{children:[n.jsx(_n,{size:16})," imported clean"]})]}),n.jsx(Fu,{$open:s,"aria-hidden":"true",children:n.jsx(Pn,{size:16})})]}),s&&n.jsxs(oD,{id:"welcome-roster-people","aria-label":e?"Sample teammates":"Imported teammates",children:[d.map((m,v)=>n.jsxs(aD,{$i:v,children:[n.jsxs(iD,{"aria-hidden":"true",children:[yO(m.name),n.jsx("img",{src:wO(v),alt:"",loading:"lazy",onError:y=>{y.currentTarget.style.display="none"}})]}),n.jsxs(sD,{children:[n.jsx(lD,{children:m.name}),n.jsxs(cD,{children:[m.role," · ",m.tenure]})]}),m.credentialStatus==="expiring"?n.jsxs(En,{size:"sm",variant:"subtle",color:"yellow",dot:!0,children:[m.credential," · ",m.expiresInDays,"d"]}):n.jsx(En,{size:"sm",variant:"subtle",color:"green",children:m.credential}),e&&n.jsx(En,{size:"sm",variant:"outline",color:"purple",children:"Sample"})]},m.name)),n.jsx(dD,{children:e?`+ ${h} more · every one tagged “Sample”`:`+ ${h} more imported clean`})]}),!e&&n.jsxs(uD,{children:[n.jsxs(hD,{type:"button","aria-expanded":o,"aria-controls":"welcome-roster-review-rows",onClick:()=>i(m=>!m),children:[n.jsxs(pD,{children:[Du.length," rows kept for review"]}),n.jsxs(fD,{children:[n.jsx(Dv,{"aria-hidden":"true",children:n.jsx(ma,{size:15})}),n.jsx(Fu,{$open:o,"aria-hidden":"true",children:n.jsx(Pn,{size:16})})]})]}),o&&n.jsx(Fv,{id:"welcome-roster-review-rows","aria-label":"Rows held for review",children:Du.map(m=>n.jsxs(Bv,{children:[n.jsx(gD,{"aria-hidden":"true",children:n.jsx(ma,{size:15})}),n.jsxs(Hv,{children:[n.jsx(vD,{children:m.where}),n.jsx(xD,{children:m.reason})]})]},m.where))})]})]})}function CO({problems:e,week:o}){const[i,s]=g.useState(!1),l=o.map((d,h)=>o.slice(0,h).reduce((m,v)=>m+v.shifts.length,0));return n.jsxs(Ov,{"aria-label":"Your week",children:[n.jsxs(yD,{children:[n.jsxs(bD,{children:[n.jsxs(g0,{children:[n.jsx(v0,{children:Rv})," days"]}),n.jsx(kD,{"aria-hidden":"true",children:"·"}),n.jsxs(g0,{children:[n.jsx(v0,{children:Nv})," shifts"]})]}),n.jsxs(wD,{type:"button","aria-expanded":i,"aria-controls":"welcome-week-waiting-rows","aria-label":`${e.length} things waiting in your week`,title:`${e.length} things waiting in your week`,onClick:()=>s(d=>!d),children:[n.jsx(Dv,{"aria-hidden":"true",children:n.jsx(ma,{size:15})}),n.jsx(Fu,{$open:i,"aria-hidden":"true",children:n.jsx(Pn,{size:16})})]})]}),i&&n.jsx(mD,{id:"welcome-week-waiting-rows","aria-label":"Waiting in your week",children:e.map((d,h)=>n.jsxs(Bv,{children:[n.jsx(_D,{$kind:d.kind,"aria-hidden":"true",children:d.kind==="missing"?n.jsx(In,{size:15}):n.jsx(ma,{size:15})}),n.jsxs(Hv,{children:[n.jsxs(CD,{children:[d.worker," · ",d.role]}),n.jsx(jD,{children:d.detail})]})]},`${d.worker}-${h}`))}),n.jsx(SD,{children:n.jsx($D,{role:"table","aria-label":"Next week's shifts",children:o.map((d,h)=>n.jsxs(MD,{role:"column",children:[n.jsx(RD,{children:d.label}),d.shifts.map((m,v)=>n.jsxs(ND,{$flag:m.flag,$sequence:l[h]+v,children:[n.jsx(LD,{children:m.time}),n.jsx(AD,{children:m.who})]},`${d.label}-${v}`))]},d.label))})})]})}const jO=p.div`
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
`,Tv="color-mix(in srgb, var(--color-bg-primary) 60%, transparent)",Iv=qe`
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: ${Tv};
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  pointer-events: none;
`,Ev=e=>qe`
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  ${e==="down"?"top: 100%;":"bottom: 100%;"}
  height: var(--space-10);
  z-index: 0;
  background: linear-gradient(${e==="down"?"to bottom":"to top"}, ${Tv}, transparent);
  pointer-events: none;
`,SO=p.header`
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
    ${Iv}
    opacity: ${e=>e.$condensed?1:0};
    transition: opacity 220ms var(--ease-out);
  }
  &::after {
    ${Ev("down")}
    opacity: ${e=>e.$condensed?1:0};
    transition: opacity 220ms var(--ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      transition: none;
    }
  }
`,Pt="320ms",zt="cubic-bezier(0.22, 1, 0.36, 1)",$O=p.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: ${e=>e.$condensed?Jz:Mv}px;
  /* Match the thread column exactly: 720px of content plus the same side
     padding, so the header lockup left-aligns with the bubbles and composer. */
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;
  transition: height ${Pt} ${zt};

  @media (max-width: 600px) {
    height: ${e=>e.$condensed?tO:eO}px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,MO=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: absolute;
  top: ${e=>e.$condensed?"20px":"24px"};
  left: ${e=>e.$condensed?"var(--space-6)":"50%"};
  width: ${e=>e.$condensed?"36px":"140px"};
  height: ${e=>e.$condensed?"36px":"140px"};
  transform: ${e=>e.$condensed?"translateX(0)":"translateX(-50%)"};
  opacity: 1;
  visibility: visible;
  transition:
    top ${Pt} ${zt},
    left ${Pt} ${zt},
    width ${Pt} ${zt},
    height ${Pt} ${zt},
    transform ${Pt} ${zt};

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
    top: ${e=>e.$condensed?"10px":"16px"};
    left: ${e=>e.$condensed?"var(--space-4)":"50%"};
    width: ${e=>e.$condensed?"32px":"140px"};
    height: ${e=>e.$condensed?"32px":"140px"};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,u0=p.span`
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
`,RO=p.div`
  display: contents;
`,NO=p.span`
  position: absolute;
  top: ${e=>e.$condensed?"15px":"180px"};
  left: ${e=>e.$condensed?"72px":"50%"};
  transform: ${e=>e.$condensed?"translateX(0)":"translateX(-50%)"};
  max-width: ${e=>e.$condensed?"calc(100% - 96px)":"calc(100% - 48px)"};
  font-family: var(--font-sans);
  font-size: ${e=>e.$condensed?"var(--text-sm)":"clamp(24px, 3vw, 30px)"};
  font-weight: ${e=>e.$condensed?"var(--font-weight-medium)":"var(--font-weight-bold)"};
  line-height: ${e=>e.$condensed?"var(--line-height-relaxed)":"var(--line-height-tight)"};
  letter-spacing: ${e=>e.$condensed?"var(--tracking-wide)":"var(--tracking-tight)"};
  color: var(--color-content-primary);
  white-space: nowrap;
  transition:
    top ${Pt} ${zt},
    left ${Pt} ${zt},
    transform ${Pt} ${zt},
    font-size ${Pt} ${zt},
    font-weight ${Pt} ${zt},
    line-height ${Pt} ${zt},
    letter-spacing ${Pt} ${zt};

  @media (max-width: 600px) {
    top: ${e=>e.$condensed?"7px":"168px"};
    left: ${e=>e.$condensed?"56px":"50%"};
    max-width: ${e=>e.$condensed?"calc(100% - 72px)":"calc(100% - 32px)"};
    font-size: ${e=>e.$condensed?"var(--text-sm)":"24px"};
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,LO=p.span`
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
    top ${Pt} ${zt},
    left ${Pt} ${zt},
    transform ${Pt} ${zt},
    font-size ${Pt} ${zt},
    line-height ${Pt} ${zt};

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
`,AO=p.div`
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,Lo=je`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,Pv=je`
  0%   { opacity: 0; transform: translateY(12px) scale(0.94); }
  68%  { opacity: 1; transform: translateY(-2px) scale(1.018); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,TO=je`
  0%   { opacity: 0; transform: translateY(-8px) scale(0.9); }
  72%  { opacity: 1; transform: translateY(1px) scale(1.035); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,h0=p.div`
  animation: ${e=>e.$pop?Pv:Lo}
    ${e=>e.$pop?"520ms":"var(--duration-slow, 420ms)"}
    ${e=>e.$pop?"cubic-bezier(0.22, 1, 0.36, 1)":"var(--ease-out)"}
    both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,IO=p.div`
  transform-origin: center bottom;
  animation: ${Pv} 480ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,EO=je`
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
`,PO=je`
  from { transform: translateX(0); }
  to   { transform: translateX(-192px); }
`,zv=p.div`
  position: relative;
  width: 100%;
`,zO=p(zv)``,OO=p.div`
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
`,DO=p.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  animation: ${PO} 18s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,FO=p.span`
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
`,BO=je`
  0%, 8%   { opacity: 0; transform: translateY(-5px) scale(0.84); }
  18%, 72% { opacity: 1; transform: translateY(0) scale(1); }
  84%, 100% { opacity: 0; transform: translateY(3px) scale(0.94); }
`,HO=p.div`
  position: absolute;
  z-index: 2;
  top: var(--space-6);
  left: 50%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
  width: 184px;
  height: 62px;
  padding: 7px;
  overflow: hidden;
  transform: translateX(-50%);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-bg-primary) 88%, transparent);
  box-shadow: var(--shadow-below-low);
  pointer-events: none;

  @media (max-width: 600px) {
    top: var(--space-4);
    width: 168px;
    height: 56px;
    padding: 6px;
  }
`,WO=p.span`
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
`,UO=p.span`
  display: block;
  width: 100%;
  height: 3px;
  margin-bottom: 1px;
  border-radius: var(--radius-full);
  background: var(--color-border-opaque);
`,qO=p.span`
  display: block;
  width: 100%;
  height: 9px;
  border-radius: 3px;
  background: ${e=>e.$accent?"var(--color-warning-bg)":"var(--color-bg-tertiary)"};
  border: 1px solid ${e=>e.$accent?"var(--color-warning-border)":"var(--color-border-transparent)"};
  transform-origin: top center;
  animation: ${BO} 4.8s var(--ease-out) infinite both;
  animation-delay: calc(${e=>e.$sequence} * 90ms);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,rl=p(wg)`
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

  &&[data-schedule-flow][data-state='empty'] {
    min-height: 224px;
    padding-top: 112px;
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
    animation: ${EO} 300ms var(--ease-out) both;
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
      min-height: 188px;
      padding: 84px var(--space-4) var(--space-4);
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
`,VO=p.div`
  display: flex;
  justify-content: flex-start;
  animation: ${Lo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,GO=je`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,YO=p.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-left: 2px;
  vertical-align: -0.15em;
  background: var(--color-content-tertiary);
  animation: ${GO} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,p0=p.div`
  width: 100%;
  margin-bottom: calc(var(--space-2) * -1);
`,KO=p.div`
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
`,ol=p.div`
  display: flex;
  animation: ${Lo} var(--duration-slow, 420ms) var(--ease-out) both;

  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,vu=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;

  @media (max-width: 600px) {
    gap: var(--space-2);
  }
`,f0=p.div`
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
    font-size: var(--text-xs);
    line-height: 1.45;

    &[data-from='operator'] {
      padding: var(--space-2) var(--space-3);
    }
  }
`,al=p.div`
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
  ${e=>e.$done&&qe`
    ${Sr}
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
`,il=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,sl=p.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,ll=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,cl=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-primary);
`,QO=je`
  to { transform: rotate(360deg); }
`,m0=p.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-full);
  /* 2px is the ring's stroke width, not a spacing value. */
  border: 2px solid var(--color-border-opaque);
  border-top-color: var(--color-content-secondary);
  animation: ${QO} 700ms linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1600ms;
  }
`,dl=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
`,Ov=p.div`
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
`,ZO=p.button`
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
`,XO=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,JO=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,eD=p.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,tD=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,nD=p.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-regular);
  color: var(--color-content-tertiary);
`,rD=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-success-content);

  svg { flex-shrink: 0; }
`,oD=p.div`
  display: flex;
  flex-direction: column;
`,aD=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  animation: ${Lo} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: calc(120ms + ${e=>e.$i??0} * 80ms);

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,iD=p.span`
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
`,sD=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  margin-right: auto;
`,lD=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,cD=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,dD=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  /* Lands just after the last teammate row (6 rows · 80ms + the 120ms base). */
  animation: ${Lo} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: 600ms;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,uD=p.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`,hD=p.button`
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
`,pD=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,fD=p.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`,Dv=p.span`
  display: inline-flex;
  color: var(--color-warning-content);
`,Fu=p.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);
  transform: rotate(${e=>e.$open?"180deg":"0deg"});

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,Fv=p.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-2);
  animation: ${Lo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,mD=p(Fv)`
  padding-top: 0;
  border-top: 1px solid var(--color-border-opaque);
`,Bv=p.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`,gD=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  background: var(--color-warning-bg);
  color: var(--color-warning-content);
`,Hv=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,vD=p.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
`,xD=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,yD=p.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`,wD=p.button`
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
`,bD=p.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
`,g0=p.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-1);
`,v0=p.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,kD=p.span`
  color: var(--color-content-tertiary);
`,_D=p.span`
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
`,CD=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,jD=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,SD=p.div`
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,$D=p.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: var(--space-1);
  width: 100%;
`,MD=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`,RD=p.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-opaque);
`,ND=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  padding: var(--space-2);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-transparent);
  transform-origin: top left;
  animation: ${TO} 380ms cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: calc(180ms + ${e=>e.$sequence} * 70ms);

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

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,LD=p.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`,AD=p.span`
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
`,x0="cubic-bezier(0.22, 1, 0.36, 1)",TD=je`
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
`,ID=je`
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
`,ED=je`
  0%   { opacity: 0; transform: scale(0.88) translateY(36px) rotate(-1deg); }
  70%  { opacity: 1; transform: scale(1.018) translateY(-2px) rotate(0); }
  100% { opacity: 1; transform: scale(1) translateY(0) rotate(0); }
`,PD=je`
  from { opacity: 1; transform: scale(1) translateY(0); }
  to   { opacity: 0; transform: scale(0.97) translateY(10px); }
`,zD=qS`
  [role='dialog'][aria-label$='Ultron access'][data-state] {
    background: color-mix(in srgb, black 58%, transparent);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    animation: ${TD} 440ms ${x0} both;

    & > div {
      position: relative;
      overflow: visible;
      border: 0;
      background: transparent;
      box-shadow: 0 32px 90px rgba(3, 11, 25, 0.56);
      animation: ${ED} 560ms ${x0} both;
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
    animation: ${ID} 170ms var(--ease-default, ease) forwards;

    & > div {
      animation: ${PD} 170ms var(--ease-default, ease) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [role='dialog'][aria-label$='Ultron access'][data-state],
    [role='dialog'][aria-label$='Ultron access'][data-state] > div {
      animation: none;
    }
  }
`,OD=p.section`
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
`,DD=p.button`
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
`,FD=p.div`
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
`,BD=p.button`
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
`,HD=p.span`
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
`,WD=p.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--Alloy-matcha-400);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--Alloy-matcha-400) 14%, transparent),
              0 0 20px var(--Alloy-matcha-400);
`,UD=p.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-4);
  margin: var(--space-1) 0;

  @media (max-width: 620px) {
    gap: var(--space-2);
  }
`,qD=p.div`
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
`,VD=p.span`
  display: inline-block;
  margin-right: 0.03em;
  font-size: 0.52em;
  vertical-align: 0.42em;
  color: var(--Alloy-matcha-400);
`,GD=p.span`
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
`,YD=p.h2`
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
`,KD=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-200);
  max-width: 520px;
`,QD=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,sa=p.span`
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
`,ZD=p.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,XD=p.label`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--Alloy-slate-300);
`,JD=p.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-3);

  @media (max-width: 520px) {
    flex-direction: column;
  }
`,eF=p.input`
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
`,tF=p(De)`
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
`,nF=p.div`
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
`,rF=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-400);
`,y0=p.div`
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) 0;

  @media (max-width: 600px) {
    padding: 0;
  }
`,oF=p.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);

  @media (max-width: 600px) {
    width: 100%;
    gap: var(--space-2);
  }
`,aF=p.button`
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
`,iF=p.span`
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
`,sF=je`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,lF=p.span`
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
  animation: ${sF} 2.4s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: none;
    color: var(--color-content-secondary);
    -webkit-text-fill-color: currentColor;
  }
`,cF=p.div`
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
    ${Iv}
  }
  &::after {
    ${Ev("up")}
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  /* Mounts only once the opening turn lands — rise it in so it arrives rather
     than pops. */
  animation: ${Lo} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (max-width: 600px) {
    gap: var(--space-2);
    padding:
      var(--space-2)
      var(--space-4)
      max(var(--space-3), env(safe-area-inset-bottom));
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,dF=p.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: flex-start;
`,uF=p.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,hF=p.span`
  position: absolute;
  inset: 0;
  /* Center the canvas in the reserved box so the mark holds its place. */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$show?1:0};
  transition: opacity var(--duration-base) var(--ease-out);
`,pF=p.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
`,fF=p.button`
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
`,mF=p.form`
  width: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-2);
  /* Mirror the ambient backdrop palette while the composer is collecting the
     phone number, so the live-test handoff reads as a distinct action. */
  --phone-aurora-mint: hsl(170 72% 64%);
  --phone-aurora-sky: hsl(202 82% 64%);
  --phone-aurora-blue: hsl(228 84% 64%);
  --phone-aurora-violet: hsl(252 78% 64%);
  --phone-aurora-pink: hsl(330 82% 68%);
  --phone-aurora-peach: hsl(32 88% 66%);
  /* How far the ring is carried past the bloom's pastel toward the page's own
     ink, so a 1px outline holds a defined edge instead of washing out against
     the composer fill. Mixing toward --color-content-primary rather than a
     fixed dark keeps it theme-correct: it deepens the ring on a light surface
     and lifts it on a dark one, so the edge holds either way. */
  --phone-aurora-depth: 42%;
  background: ${e=>e.$phoneMode?`linear-gradient(var(--color-bg-primary), var(--color-bg-primary)) padding-box,
       linear-gradient(
         110deg,
         color-mix(in srgb, var(--color-content-primary) var(--phone-aurora-depth), var(--phone-aurora-mint)),
         color-mix(in srgb, var(--color-content-primary) var(--phone-aurora-depth), var(--phone-aurora-sky)) 25%,
         color-mix(in srgb, var(--color-content-primary) var(--phone-aurora-depth), var(--phone-aurora-blue)) 44%,
         color-mix(in srgb, var(--color-content-primary) var(--phone-aurora-depth), var(--phone-aurora-violet)) 62%,
         color-mix(in srgb, var(--color-content-primary) var(--phone-aurora-depth), var(--phone-aurora-pink)) 82%,
         color-mix(in srgb, var(--color-content-primary) var(--phone-aurora-depth), var(--phone-aurora-peach))
       ) border-box`:"var(--color-bg-primary)"};
  border: 1px solid ${e=>e.$phoneMode?"transparent":"var(--color-border-opaque)"};
  border-radius: var(--radius-xl);
  box-shadow: ${e=>e.$phoneMode?`0 0 0 1px color-mix(in srgb, var(--phone-aurora-blue) 18%, transparent),
       -18px 2px 38px color-mix(in srgb, var(--phone-aurora-sky) 14%, transparent),
       16px 4px 42px color-mix(in srgb, var(--phone-aurora-violet) 16%, transparent),
       0 12px 48px color-mix(in srgb, var(--phone-aurora-pink) 10%, transparent)`:"var(--shadow-below-low)"};
  transition:
    border-color var(--duration-base) var(--ease-out),
    box-shadow var(--duration-slow) var(--ease-out);

  &:focus-within {
    border-color: ${e=>e.$phoneMode?"transparent":"var(--color-border-focus)"};
    box-shadow: ${e=>e.$phoneMode?`0 0 0 2px color-mix(in srgb, var(--phone-aurora-sky) 38%, transparent),
         -20px 2px 44px color-mix(in srgb, var(--phone-aurora-sky) 20%, transparent),
         18px 4px 48px color-mix(in srgb, var(--phone-aurora-violet) 22%, transparent),
         0 14px 54px color-mix(in srgb, var(--phone-aurora-pink) 14%, transparent)`:"var(--shadow-below-low)"};
  }

  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);

  @media (max-width: 600px) {
    gap: var(--space-1);
    padding: var(--space-1);
    border-radius: var(--radius-lg);
  }
`,gF=p.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-2);
`,vF=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-1) 0;
`,w0=p.span`
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
`,xF=p.button`
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
`,yF=p.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 80%;

  &[data-from='operator'] { align-items: flex-end; }
  &[data-from='ultron'] { align-items: flex-start; }
`,wF=p.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--space-2);
`,bF=p.textarea`
  flex: 1;
  min-width: 0;
  /* Phone mode drops the attachment button, so the field carries its own left
     inset instead of sitting flush against the composer's edge. */
  padding: calc((var(--space-8) - 1lh) / 2) 0
           calc((var(--space-8) - 1lh) / 2) ${e=>e.$phoneMode?"var(--space-3)":"0"};
  border: none;
  background: transparent;
  resize: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  /* Phone mode keeps the composer's own type — only the digits get tabular
     figures, so entered numbers align without the placeholder reading as a
     different typeface from the rest of the app. */
  font-variant-numeric: ${e=>e.$phoneMode?"tabular-nums":"normal"};
  color: var(--color-content-primary);
  caret-color: ${e=>e.$phoneMode?"var(--phone-aurora-sky)":"auto"};

  &::placeholder {
    color: var(--color-content-disabled);
  }

  @media (max-width: 600px) {
    font-size: var(--text-sm);
    line-height: var(--line-height-snug);
  }
`,b0=p.div`
  flex-shrink: 0;
`;function kF(e){const o=[e.activeId,e.secActiveId];return e.selectedPersonaId&&o.push("persona",e.selectedPersonaId),e.activePageId&&o.push("page",e.activePageId),"#"+o.map(encodeURIComponent).join("/")}function _F(e){const o=e.replace(/^#/,"").trim();if(!o)return{};const i=o.split("/").map(l=>{try{return decodeURIComponent(l)}catch{return l}}),s={};i[0]&&(s.activeId=i[0]),i[1]&&(s.secActiveId=i[1]);for(let l=2;l<i.length-1;l+=2){const d=i[l],h=i[l+1];d==="persona"?s.selectedPersonaId=h:d==="page"&&(s.activePageId=h)}return s}function CF(e,o){const i=g.useRef("");g.useEffect(()=>{const s=()=>{const d=_F(window.location.hash);d.activeId!==void 0&&o.setActiveId(d.activeId),d.secActiveId!==void 0&&o.setSecActiveId(d.secActiveId),o.setSelectedPersonaId(d.selectedPersonaId??null),o.setActivePageId(d.activePageId??null)};window.location.hash&&s();const l=()=>{window.location.hash!==i.current&&s()};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]),g.useEffect(()=>{const s=kF(e);s!==window.location.hash&&(i.current=s,window.history.replaceState(null,"",s))},[e.activeId,e.secActiveId,e.selectedPersonaId,e.activePageId])}const Bu="ultron-theme";function jF(){if(typeof window>"u")return null;const e=window.localStorage.getItem(Bu);return e==="light"||e==="dark"?e:null}function SF(e){const o=document.documentElement;o.classList.toggle("dark",e==="dark"),o.classList.toggle("light",e==="light")}function $F(){const e=Rh("(prefers-color-scheme: dark)"),[o,i]=g.useState(jF);g.useEffect(()=>{SF(o),!(typeof window>"u")&&(o?window.localStorage.setItem(Bu,o):window.localStorage.removeItem(Bu))},[o]);const s=o??(e?"dark":"light"),l=g.useCallback(()=>{const d=s==="dark"?"light":"dark";i(d===(e?"dark":"light")?null:d)},[s,e]);return{theme:s,toggle:l}}const MF=p.button`
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
`;function RF(){const{theme:e,toggle:o}=$F(),i=e==="dark",s=i?"Switch to light mode":"Switch to dark mode";return n.jsx(MF,{type:"button",onClick:o,"aria-label":s,"aria-pressed":i,title:s,children:i?n.jsx(Xu,{size:18}):n.jsx(rg,{size:18})})}const k0=[{id:"ultron",label:"Ultron",icon:n.jsx(dt,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:n.jsx(p$,{})},{id:"engaged",label:"Engaged",icon:n.jsx(f$,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:n.jsx(m$,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:n.jsx(g$,{})},{id:"ai-home",label:"AI Home",icon:n.jsx(v$,{})}],_0=[{id:"apps",label:"Apps",icon:n.jsx(x$,{})}],C0=[{id:"docs",label:"Document Studio",icon:n.jsx(Au,{})},{id:"form",label:"Form",icon:n.jsx(y$,{})},{id:"tasks",label:"Tasks",icon:n.jsx(w$,{})},{id:"policy",label:"Policy",icon:n.jsx(b$,{}),activeIcon:n.jsx("img",{src:Lz,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Automation",icon:n.jsx(Mo,{}),activeIcon:n.jsx("img",{src:Az,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:n.jsx(k$,{})},{id:"esign",label:"E-Sign Studio",icon:n.jsx(_$,{})}],NF=3e3,LF=4e3,AF=p.button`
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
`,TF=je`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,IF=je`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,EF=je`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,PF=p.span`
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
      ${TF} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${IF} 1100ms var(--ease-out, ease-out) both;
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
    animation: ${EF} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,zF=p.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,OF=p(ug)`
  && {
    border-bottom: none;
    padding-bottom: var(--space-2);
  }
`,DF=p(hg)`
  && {
    padding-top: 0;
    padding-bottom: var(--space-2);
  }
`,FF=p(pg)`
  && {
    border-top: none;
    padding-top: 0;
  }
`,BF=p.div`
  display: ${e=>e.$visible?"flex":"none"};
  flex: 1 1 auto;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
`,HF=p.button`
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
`;function WF({onDelete:e}){const o=i=>i.stopPropagation();return n.jsx("span",{onClick:o,onKeyDown:o,onMouseDown:o,children:n.jsx(ah,{placement:"bottom-end",width:168,trigger:n.jsx(HF,{type:"button","aria-label":"Page options",children:n.jsx(eg,{size:16})}),groups:[{id:"actions",options:[{id:"delete",label:"Delete page",destructive:!0,leadingSlot:n.jsx(lg,{size:16}),onClick:e}]}]})})}const UF={needs_attention:n.jsx(ma,{size:16}),live:n.jsx(dt,{mark:"orbit2d",size:32,tone:"auto",state:"active"}),resolved:n.jsx(_n,{size:16})},qF={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function VF({introAnswers:e,onRestartOnboarding:o}={}){const[i,s]=g.useState("ultron"),[l,d]=g.useState("home-overview"),[h,m]=g.useState(null),[v,y]=g.useState(null),[x,w]=g.useState("ultron"),[k,$]=g.useState("employees"),_=Q$(),[j,N]=g.useState(!!e),[M,C]=g.useState(!1),[S,P]=g.useState(!!e),[R,L]=g.useState(!1),A=g.useRef(null),[E,B]=g.useState(!1),G=g.useRef(null);g.useEffect(()=>()=>{A.current!==null&&window.clearTimeout(A.current),G.current!==null&&window.clearTimeout(G.current)},[]);const Q=()=>{A.current!==null&&(window.clearTimeout(A.current),A.current=null),L(!1)},U=()=>{Q(),A.current=window.setTimeout(()=>{A.current=null,L(!0)},NF)},Y=()=>{G.current!==null&&window.clearTimeout(G.current),B(!0),G.current=window.setTimeout(()=>{G.current=null,B(!1)},LF)},[ee,oe]=g.useState(!e),[ce,le]=g.useState([]),[K,D]=g.useState(null),W=g.useRef(0),T=xe=>{w("ultron"),N(!1),oe(!1),D(xe)},O=()=>{P(!0),w("ultron"),oe(!1),D(null),N(!0)},ne=()=>{const xe=`page-${W.current++}`;le(Se=>[...Se,{id:xe,title:"New page"}]),T(xe)},[q,X]=g.useState({}),[se,F]=g.useState({}),z=g.useRef({}),ae=(xe,Se)=>{const et=Se.trim();if(!et)return;const tt=(q[xe]??[]).filter(rt=>rt.role==="ultron").length;X(rt=>({...rt,[xe]:[...rt[xe]??[],{role:"operator",text:et}]})),F(rt=>({...rt,[xe]:!0})),z.current[xe]=window.setTimeout(()=>{X(rt=>({...rt,[xe]:[...rt[xe]??[],{role:"ultron",text:wh(et,tt)}]})),F(rt=>({...rt,[xe]:!1})),delete z.current[xe]},1100)},me=xe=>{z.current[xe]&&(window.clearTimeout(z.current[xe]),delete z.current[xe]),le(Se=>Se.filter(et=>et.id!==xe)),X(Se=>{const{[xe]:et,...tt}=Se;return tt}),F(Se=>{const{[xe]:et,...tt}=Se;return tt}),K===xe&&(D(null),oe(!0))},de=ee?"live":_.selectedThread?qF[_.selectedThread.status]:"new";CF({activeId:i,secActiveId:l,selectedPersonaId:h,activePageId:v},{setActiveId:s,setSecActiveId:d,setSelectedPersonaId:m,setActivePageId:y});const[ge,be]=g.useState(!1),_e=xe=>xe.map(Se=>({...Se,isActive:Se.id===i,disabled:Se.id!=="ultron",onClick:Se.id==="ultron"?()=>s("ultron"):()=>be(!0)})),Le=[{id:"memory",label:"Memory",icon:n.jsx(zl,{size:16}),isActive:x==="memory",onClick:()=>w("memory")},{id:"settings",label:"Settings",icon:n.jsx(B0,{size:16})}],Ie=n.jsx(Cv,{children:x==="memory"?"Memory":x==="account"?"Account database":"Ultron"}),Oe=bl(e==null?void 0:e.companyWebsite)??(e==null?void 0:e.workforceType)??null,Ee={id:"welcome",label:Oe?`${Oe} account setup`:"Account setup",icon:n.jsx(Au,{}),isActive:j,onClick:O},ze=ce.map(xe=>({id:xe.id,label:xe.title,icon:n.jsx(Au,{}),isActive:K===xe.id,onClick:()=>T(xe.id),trailingSlot:n.jsx(WF,{onDelete:()=>me(xe.id)})})),Be=x==="account"?Pu.map(xe=>({type:"single",item:{id:xe.id,label:xe.label,icon:xe.icon,isActive:k===xe.id,onClick:()=>$(xe.id)}})):_.groups.flatMap(xe=>{const Se=xe.id==="needs_attention"?"new":xe.id==="resolved"?"done":"working",et=xe.id==="needs_attention"?xe.threads.filter(Ye=>Ye.status==="analyzing"||_.revealedNewIds.includes(Ye.id)):xe.threads,tt=xe.id==="needs_attention"&&!M||xe.id==="live"&&M,rt=xe.id==="needs_attention"?ze:[],st={type:"group",group:{id:xe.id,label:xe.id==="needs_attention"?"New":xe.label,icon:UF[xe.id],trailingBadge:n.jsx(ka,{children:et.length+(tt?1:0)+rt.length}),defaultExpanded:!0,outlined:!1,children:[...tt?[Ee]:[],...rt,...et.map(Ye=>({id:Ye.id,label:Ye.id.startsWith("detected_")?n.jsx(CA,{text:Tm(Ye.name,Se)}):Tm(Ye.name,Se),icon:Ye.id==="shift_drop_maria"&&E?n.jsx(dt,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Ultron is preparing this event"}):Se==="new"?Ye.status==="analyzing"?n.jsx(dt,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):n.jsx(dt,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):Se==="working"?n.jsx(dt,{mark:"orbit2d",size:32,tone:"auto",state:Ye.status==="in_progress"?"active":"idle","aria-label":"Working"}):n.jsx(dt,{mark:"pulse",size:32,tone:"auto",state:Ye.status==="unresolved"?"idle":"static",color:Ye.status==="unresolved"?"var(--color-orange-content-tertiary)":_.viewedIds.includes(Ye.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:x==="ultron"&&!ee&&!K&&de===Se&&_.selectedId===Ye.id,onClick:()=>{Ye.id==="shift_drop_maria"&&Q(),w("ultron"),N(!1),oe(!1),D(null),_.setSelectedId(Ye.id)},spotlightPrompt:R&&Ye.id==="shift_drop_maria"?"Ultron caught the last-minute callout. Open it to see the response.":void 0,spotlightDismiss:Ye.id==="shift_drop_maria"?Q:void 0,trailingSlot:_.savedWorkflowIds.includes(Ye.id)?n.jsx(jr,{content:"Saved as workflow",placement:"top",children:n.jsx(PF,{"aria-label":"Saved as workflow",children:n.jsx(Mo,{})})}):void 0}))]}};return xe.id==="resolved"?[{type:"divider",id:"done-divider"},st]:xe.id==="live"?[{type:"divider",id:"working-divider"},st]:[st]}),Ke=[{id:"main",label:"Workspace",items:_e(k0)},{id:"tools",label:"Tools",items:_e(_0)},{id:"bottom",label:"Apps",items:_e(C0)}];return n.jsxs(n.Fragment,{children:[n.jsx(RF,{}),n.jsxs(Nz,{items:_e(k0),toolItems:_e(_0),bottomItems:_e(C0),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},onSettingsClick:o,newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:Be,menuHeader:x==="ultron"?n.jsx(AF,{$active:ee&&!K,onClick:()=>{w("ultron"),N(!1),oe(!0),D(null)},"aria-label":"Live — Ultron presence","aria-current":ee&&!K?"page":void 0,children:n.jsx(xA,{onNew:ne})}):void 0,pageEntries:Le,showSecondaryNav:!0,showTopNav:x!=="ultron",showSearch:!1,heading:Ie,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:i,secActiveId:l,activePageId:v,selectedPersonaId:h,moduleGroups:Ke,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:xe=>{xe==="ultron"&&s("ultron")},onSelectPersona:m},children:[S&&n.jsx(BF,{$visible:x==="ultron"&&j,"aria-hidden":x!=="ultron"||!j,children:n.jsx(kO,{active:x==="ultron"&&j,answers:e,onContinued:()=>C(!0),onPhoneSubmitted:()=>{_.surfaceDemoThread("shift_drop_maria"),Y(),U()}})}),x==="memory"?n.jsx(MA,{}):x==="account"?n.jsx(HA,{collectionId:k}):j?null:K?n.jsx(nA,{messages:q[K]??[],replying:se[K]??!1,onSend:xe=>ae(K,xe)},K):n.jsx(GL,{threads:_.threads,stageById:_.stageById,section:de,analyzedIds:_.analyzedIds,outboundByThread:_.outboundByThread,chatByThread:_.chatByThread,selectedId:_.selectedId,onDecide:_.decide,onAction:_.commit,onCompleteRun:_.completeRun,onRefinement:_.refine,onSaveWorkflow:_.saveWorkflow,pendingWorkflowIds:_.pendingWorkflowIds,onToggleSaveWorkflow:_.toggleWorkflowSave,savedWorkflowIds:_.savedWorkflowIds,onSend:_.sendMessage,replyingIds:_.replyingIds,onStop:_.stopReply,onClose:()=>{w("ultron"),N(!1),oe(!0)},onDetectRisk:_.detectRisk,onRevealNew:_.revealNew})]}),n.jsxs(fg,{open:ge,onClose:()=>be(!1),size:"sm","aria-labelledby":"waitlist-title",children:[n.jsx(OF,{onClose:()=>be(!1),children:n.jsx("span",{id:"waitlist-title",children:"This app isn't unlocked yet"})}),n.jsx(DF,{children:n.jsx(zF,{children:"Demand for Ultron is extreme, so apps unlock in stages. Finish onboarding, and once you're approved past the waitlist, everything opens up."})}),n.jsx(FF,{children:n.jsx(De,{variant:"primary",onClick:()=>be(!1),children:"Got it"})})]})]})}const j0="cubic-bezier(0.22, 1, 0.36, 1)",S0=je`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`,GF=je`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,YF=p.div`
  display: contents;

  nav[aria-label='Primary navigation'] {
    animation: ${S0} 460ms ${j0} both;
  }
  nav[aria-label='Secondary navigation'] {
    animation: ${S0} 500ms ${j0} 90ms both;
  }
  main {
    animation: ${GF} 520ms ease-out 220ms both;
  }

  @media (prefers-reduced-motion: reduce) {
    nav[aria-label='Primary navigation'],
    nav[aria-label='Secondary navigation'],
    main {
      animation: none;
    }
  }
`,xu="tb:onboarding-complete";function KF(){const[e,o]=g.useState(()=>{try{return window.sessionStorage.getItem(xu)==="1"}catch{return!1}}),[i,s]=g.useState(null),l=h=>{try{window.sessionStorage.setItem(xu,"1")}catch{}s(h),o(!0)},d=()=>{try{window.sessionStorage.removeItem(xu)}catch{}window.location.hash="",window.location.reload()};return e?n.jsx(YF,{children:n.jsx(VF,{introAnswers:i??void 0,onRestartOnboarding:d})}):n.jsx($E,{onEnterApp:l})}Uy.createRoot(document.getElementById("root")).render(n.jsx(cn.StrictMode,{children:n.jsx(p9,{children:n.jsx(KF,{})})}));
