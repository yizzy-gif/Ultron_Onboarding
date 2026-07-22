(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=i(l);fetch(l.href,d)}})();function w0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var td={exports:{}},Ha={},nd={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function s3(){if(Cp)return Ae;Cp=1;var t=Symbol.for("react.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function k(I){return I===null||typeof I!="object"?null:(I=b&&I[b]||I["@@iterator"],typeof I=="function"?I:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,C={};function _(I,L,U){this.props=I,this.context=L,this.refs=C,this.updater=U||j}_.prototype.isReactComponent={},_.prototype.setState=function(I,L){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,L,"setState")},_.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function $(){}$.prototype=_.prototype;function R(I,L,U){this.props=I,this.context=L,this.refs=C,this.updater=U||j}var N=R.prototype=new $;N.constructor=R,S(N,_.prototype),N.isPureReactComponent=!0;var A=Array.isArray,M=Object.prototype.hasOwnProperty,T={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function z(I,L,U){var O,ee={},ae=null,K=null;if(L!=null)for(O in L.ref!==void 0&&(K=L.ref),L.key!==void 0&&(ae=""+L.key),L)M.call(L,O)&&!E.hasOwnProperty(O)&&(ee[O]=L[O]);var B=arguments.length-2;if(B===1)ee.children=U;else if(1<B){for(var ue=Array(B),me=0;me<B;me++)ue[me]=arguments[me+2];ee.children=ue}if(I&&I.defaultProps)for(O in B=I.defaultProps,B)ee[O]===void 0&&(ee[O]=B[O]);return{$$typeof:t,type:I,key:ae,ref:K,props:ee,_owner:T.current}}function q(I,L){return{$$typeof:t,type:I.type,key:L,ref:I.ref,props:I.props,_owner:I._owner}}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===t}function X(I){var L={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(U){return L[U]})}var Q=/\/+/g;function ne(I,L){return typeof I=="object"&&I!==null&&I.key!=null?X(""+I.key):L.toString(36)}function te(I,L,U,O,ee){var ae=typeof I;(ae==="undefined"||ae==="boolean")&&(I=null);var K=!1;if(I===null)K=!0;else switch(ae){case"string":case"number":K=!0;break;case"object":switch(I.$$typeof){case t:case a:K=!0}}if(K)return K=I,ee=ee(K),I=O===""?"."+ne(K,0):O,A(ee)?(U="",I!=null&&(U=I.replace(Q,"$&/")+"/"),te(ee,L,U,"",function(me){return me})):ee!=null&&(G(ee)&&(ee=q(ee,U+(!ee.key||K&&K.key===ee.key?"":(""+ee.key).replace(Q,"$&/")+"/")+I)),L.push(ee)),1;if(K=0,O=O===""?".":O+":",A(I))for(var B=0;B<I.length;B++){ae=I[B];var ue=O+ne(ae,B);K+=te(ae,L,U,ue,ee)}else if(ue=k(I),typeof ue=="function")for(I=ue.call(I),B=0;!(ae=I.next()).done;)ae=ae.value,ue=O+ne(ae,B++),K+=te(ae,L,U,ue,ee);else if(ae==="object")throw L=String(I),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return K}function ce(I,L,U){if(I==null)return I;var O=[],ee=0;return te(I,O,"","",function(ae){return L.call(U,ae,ee++)}),O}function oe(I){if(I._status===-1){var L=I._result;L=L(),L.then(function(U){(I._status===0||I._status===-1)&&(I._status=1,I._result=U)},function(U){(I._status===0||I._status===-1)&&(I._status=2,I._result=U)}),I._status===-1&&(I._status=0,I._result=L)}if(I._status===1)return I._result.default;throw I._result}var ie={current:null},Z={transition:null},W={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:Z,ReactCurrentOwner:T};function H(){throw Error("act(...) is not supported in production builds of React.")}return Ae.Children={map:ce,forEach:function(I,L,U){ce(I,function(){L.apply(this,arguments)},U)},count:function(I){var L=0;return ce(I,function(){L++}),L},toArray:function(I){return ce(I,function(L){return L})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Ae.Component=_,Ae.Fragment=i,Ae.Profiler=l,Ae.PureComponent=R,Ae.StrictMode=s,Ae.Suspense=v,Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,Ae.act=H,Ae.cloneElement=function(I,L,U){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var O=S({},I.props),ee=I.key,ae=I.ref,K=I._owner;if(L!=null){if(L.ref!==void 0&&(ae=L.ref,K=T.current),L.key!==void 0&&(ee=""+L.key),I.type&&I.type.defaultProps)var B=I.type.defaultProps;for(ue in L)M.call(L,ue)&&!E.hasOwnProperty(ue)&&(O[ue]=L[ue]===void 0&&B!==void 0?B[ue]:L[ue])}var ue=arguments.length-2;if(ue===1)O.children=U;else if(1<ue){B=Array(ue);for(var me=0;me<ue;me++)B[me]=arguments[me+2];O.children=B}return{$$typeof:t,type:I.type,key:ee,ref:ae,props:O,_owner:K}},Ae.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:d,_context:I},I.Consumer=I},Ae.createElement=z,Ae.createFactory=function(I){var L=z.bind(null,I);return L.type=I,L},Ae.createRef=function(){return{current:null}},Ae.forwardRef=function(I){return{$$typeof:f,render:I}},Ae.isValidElement=G,Ae.lazy=function(I){return{$$typeof:y,_payload:{_status:-1,_result:I},_init:oe}},Ae.memo=function(I,L){return{$$typeof:x,type:I,compare:L===void 0?null:L}},Ae.startTransition=function(I){var L=Z.transition;Z.transition={};try{I()}finally{Z.transition=L}},Ae.unstable_act=H,Ae.useCallback=function(I,L){return ie.current.useCallback(I,L)},Ae.useContext=function(I){return ie.current.useContext(I)},Ae.useDebugValue=function(){},Ae.useDeferredValue=function(I){return ie.current.useDeferredValue(I)},Ae.useEffect=function(I,L){return ie.current.useEffect(I,L)},Ae.useId=function(){return ie.current.useId()},Ae.useImperativeHandle=function(I,L,U){return ie.current.useImperativeHandle(I,L,U)},Ae.useInsertionEffect=function(I,L){return ie.current.useInsertionEffect(I,L)},Ae.useLayoutEffect=function(I,L){return ie.current.useLayoutEffect(I,L)},Ae.useMemo=function(I,L){return ie.current.useMemo(I,L)},Ae.useReducer=function(I,L,U){return ie.current.useReducer(I,L,U)},Ae.useRef=function(I){return ie.current.useRef(I)},Ae.useState=function(I){return ie.current.useState(I)},Ae.useSyncExternalStore=function(I,L,U){return ie.current.useSyncExternalStore(I,L,U)},Ae.useTransition=function(){return ie.current.useTransition()},Ae.version="18.3.1",Ae}var jp;function tu(){return jp||(jp=1,nd.exports=s3()),nd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function l3(){if(Sp)return Ha;Sp=1;var t=tu(),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(f,v,x){var y,b={},k=null,j=null;x!==void 0&&(k=""+x),v.key!==void 0&&(k=""+v.key),v.ref!==void 0&&(j=v.ref);for(y in v)s.call(v,y)&&!d.hasOwnProperty(y)&&(b[y]=v[y]);if(f&&f.defaultProps)for(y in v=f.defaultProps,v)b[y]===void 0&&(b[y]=v[y]);return{$$typeof:a,type:f,key:k,ref:j,props:b,_owner:l.current}}return Ha.Fragment=i,Ha.jsx=h,Ha.jsxs=h,Ha}var Np;function c3(){return Np||(Np=1,td.exports=l3()),td.exports}var r=c3(),g=tu();const _r=w0(g);var _s={},rd={exports:{}},qt={},od={exports:{}},ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function d3(){return Mp||(Mp=1,(function(t){function a(Z,W){var H=Z.length;Z.push(W);e:for(;0<H;){var I=H-1>>>1,L=Z[I];if(0<l(L,W))Z[I]=W,Z[H]=L,H=I;else break e}}function i(Z){return Z.length===0?null:Z[0]}function s(Z){if(Z.length===0)return null;var W=Z[0],H=Z.pop();if(H!==W){Z[0]=H;e:for(var I=0,L=Z.length,U=L>>>1;I<U;){var O=2*(I+1)-1,ee=Z[O],ae=O+1,K=Z[ae];if(0>l(ee,H))ae<L&&0>l(K,ee)?(Z[I]=K,Z[ae]=H,I=ae):(Z[I]=ee,Z[O]=H,I=O);else if(ae<L&&0>l(K,H))Z[I]=K,Z[ae]=H,I=ae;else break e}}return W}function l(Z,W){var H=Z.sortIndex-W.sortIndex;return H!==0?H:Z.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;t.unstable_now=function(){return d.now()}}else{var h=Date,f=h.now();t.unstable_now=function(){return h.now()-f}}var v=[],x=[],y=1,b=null,k=3,j=!1,S=!1,C=!1,_=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(Z){for(var W=i(x);W!==null;){if(W.callback===null)s(x);else if(W.startTime<=Z)s(x),W.sortIndex=W.expirationTime,a(v,W);else break;W=i(x)}}function A(Z){if(C=!1,N(Z),!S)if(i(v)!==null)S=!0,oe(M);else{var W=i(x);W!==null&&ie(A,W.startTime-Z)}}function M(Z,W){S=!1,C&&(C=!1,$(z),z=-1),j=!0;var H=k;try{for(N(W),b=i(v);b!==null&&(!(b.expirationTime>W)||Z&&!X());){var I=b.callback;if(typeof I=="function"){b.callback=null,k=b.priorityLevel;var L=I(b.expirationTime<=W);W=t.unstable_now(),typeof L=="function"?b.callback=L:b===i(v)&&s(v),N(W)}else s(v);b=i(v)}if(b!==null)var U=!0;else{var O=i(x);O!==null&&ie(A,O.startTime-W),U=!1}return U}finally{b=null,k=H,j=!1}}var T=!1,E=null,z=-1,q=5,G=-1;function X(){return!(t.unstable_now()-G<q)}function Q(){if(E!==null){var Z=t.unstable_now();G=Z;var W=!0;try{W=E(!0,Z)}finally{W?ne():(T=!1,E=null)}}else T=!1}var ne;if(typeof R=="function")ne=function(){R(Q)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ce=te.port2;te.port1.onmessage=Q,ne=function(){ce.postMessage(null)}}else ne=function(){_(Q,0)};function oe(Z){E=Z,T||(T=!0,ne())}function ie(Z,W){z=_(function(){Z(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(Z){Z.callback=null},t.unstable_continueExecution=function(){S||j||(S=!0,oe(M))},t.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<Z?Math.floor(1e3/Z):5},t.unstable_getCurrentPriorityLevel=function(){return k},t.unstable_getFirstCallbackNode=function(){return i(v)},t.unstable_next=function(Z){switch(k){case 1:case 2:case 3:var W=3;break;default:W=k}var H=k;k=W;try{return Z()}finally{k=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(Z,W){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var H=k;k=Z;try{return W()}finally{k=H}},t.unstable_scheduleCallback=function(Z,W,H){var I=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?I+H:I):H=I,Z){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=H+L,Z={id:y++,callback:W,priorityLevel:Z,startTime:H,expirationTime:L,sortIndex:-1},H>I?(Z.sortIndex=H,a(x,Z),i(v)===null&&Z===i(x)&&(C?($(z),z=-1):C=!0,ie(A,H-I))):(Z.sortIndex=L,a(v,Z),S||j||(S=!0,oe(M))),Z},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(Z){var W=k;return function(){var H=k;k=W;try{return Z.apply(this,arguments)}finally{k=H}}}})(ad)),ad}var Lp;function u3(){return Lp||(Lp=1,od.exports=d3()),od.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function h3(){if(Rp)return qt;Rp=1;var t=tu(),a=u3();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(e,n){h(e,n),h(e+"Capture",n)}function h(e,n){for(l[e]=n,e=0;e<n.length;e++)s.add(n[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},b={};function k(e){return v.call(b,e)?!0:v.call(y,e)?!1:x.test(e)?b[e]=!0:(y[e]=!0,!1)}function j(e,n,o,c){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function S(e,n,o,c){if(n===null||typeof n>"u"||j(e,n,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function C(e,n,o,c,u,p,w){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=c,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=e,this.type=n,this.sanitizeURL=p,this.removeEmptyString=w}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_[e]=new C(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];_[n]=new C(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){_[e]=new C(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_[e]=new C(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_[e]=new C(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){_[e]=new C(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){_[e]=new C(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){_[e]=new C(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){_[e]=new C(e,5,!1,e.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace($,R);_[n]=new C(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace($,R);_[n]=new C(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace($,R);_[n]=new C(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){_[e]=new C(e,1,!1,e.toLowerCase(),null,!1,!1)}),_.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){_[e]=new C(e,1,!1,e.toLowerCase(),null,!0,!0)});function N(e,n,o,c){var u=_.hasOwnProperty(n)?_[n]:null;(u!==null?u.type!==0:c||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(S(n,o,u,c)&&(o=null),c||u===null?k(n)&&(o===null?e.removeAttribute(n):e.setAttribute(n,""+o)):u.mustUseProperty?e[u.propertyName]=o===null?u.type===3?!1:"":o:(n=u.attributeName,c=u.attributeNamespace,o===null?e.removeAttribute(n):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,c?e.setAttributeNS(c,n,o):e.setAttribute(n,o))))}var A=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,M=Symbol.for("react.element"),T=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),X=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),Z=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,I;function L(e){if(I===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);I=n&&n[1]||""}return`
`+I+e}var U=!1;function O(e,n){if(!e||U)return"";U=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(J){var c=J}Reflect.construct(e,[],n)}else{try{n.call()}catch(J){c=J}e.call(n.prototype)}else{try{throw Error()}catch(J){c=J}e()}}catch(J){if(J&&c&&typeof J.stack=="string"){for(var u=J.stack.split(`
`),p=c.stack.split(`
`),w=u.length-1,P=p.length-1;1<=w&&0<=P&&u[w]!==p[P];)P--;for(;1<=w&&0<=P;w--,P--)if(u[w]!==p[P]){if(w!==1||P!==1)do if(w--,P--,0>P||u[w]!==p[P]){var D=`
`+u[w].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),D}while(1<=w&&0<=P);break}}}finally{U=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?L(e):""}function ee(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=O(e.type,!1),e;case 11:return e=O(e.type.render,!1),e;case 1:return e=O(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case T:return"Portal";case q:return"Profiler";case z:return"StrictMode";case ne:return"Suspense";case te:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case X:return(e.displayName||"Context")+".Consumer";case G:return(e._context.displayName||"Context")+".Provider";case Q:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ce:return n=e.displayName||null,n!==null?n:ae(e.type)||"Memo";case oe:n=e._payload,e=e._init;try{return ae(e(n))}catch{}}return null}function K(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(n);case 8:return n===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function B(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ue(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function me(e){var n=ue(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),c=""+e[n];if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,p=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(w){c=""+w,p.call(this,w)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function pe(e){e._valueTracker||(e._valueTracker=me(e))}function ve(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var o=n.getValue(),c="";return e&&(c=ue(e)?e.checked?"true":"false":e.value),e=c,e!==o?(n.setValue(e),!0):!1}function _e(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function je(e,n){var o=n.checked;return H({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function $e(e,n){var o=n.defaultValue==null?"":n.defaultValue,c=n.checked!=null?n.checked:n.defaultChecked;o=B(n.value!=null?n.value:o),e._wrapperState={initialChecked:c,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Fe(e,n){n=n.checked,n!=null&&N(e,"checked",n,!1)}function qe(e,n){Fe(e,n);var o=B(n.value),c=n.type;if(o!=null)c==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(c==="submit"||c==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?De(e,n.type,o):n.hasOwnProperty("defaultValue")&&De(e,n.type,B(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Ge(e,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var c=n.type;if(!(c!=="submit"&&c!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,o||n===e.value||(e.value=n),e.defaultValue=n}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function De(e,n,o){(n!=="number"||_e(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var Qe=Array.isArray;function Ye(e,n,o,c){if(e=e.options,n){n={};for(var u=0;u<o.length;u++)n["$"+o[u]]=!0;for(o=0;o<e.length;o++)u=n.hasOwnProperty("$"+e[o].value),e[o].selected!==u&&(e[o].selected=u),u&&c&&(e[o].defaultSelected=!0)}else{for(o=""+B(o),n=null,u=0;u<e.length;u++){if(e[u].value===o){e[u].selected=!0,c&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function At(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return H({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function We(e,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(Qe(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}e._wrapperState={initialValue:B(o)}}function It(e,n){var o=B(n.value),c=B(n.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),n.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),c!=null&&(e.defaultValue=""+c)}function Ct(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Sn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nn(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Sn(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Sr,oa=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,c,u){MSApp.execUnsafeLocalFunction(function(){return e(n,o,c,u)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Sr=Sr||document.createElement("div"),Sr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Sr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function so(e,n){if(n){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=n;return}}e.textContent=n}var Nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vl=["Webkit","ms","Moz","O"];Object.keys(Nr).forEach(function(e){vl.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Nr[n]=Nr[e]})});function mi(e,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||Nr.hasOwnProperty(e)&&Nr[e]?(""+n).trim():n+"px"}function Me(e,n){e=e.style;for(var o in n)if(n.hasOwnProperty(o)){var c=o.indexOf("--")===0,u=mi(o,n[o],c);o==="float"&&(o="cssFloat"),c?e.setProperty(o,u):e[o]=u}}var tt=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(e,n){if(n){if(tt[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function Et(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mr=null;function aa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ia=null,lo=null,co=null;function Fu(e){if(e=Ma(e)){if(typeof ia!="function")throw Error(i(280));var n=e.stateNode;n&&(n=Oi(n),ia(e.stateNode,e.type,n))}}function Wu(e){lo?co?co.push(e):co=[e]:lo=e}function Hu(){if(lo){var e=lo,n=co;if(co=lo=null,Fu(e),n)for(e=0;e<n.length;e++)Fu(n[e])}}function Uu(e,n){return e(n)}function qu(){}var xl=!1;function Vu(e,n,o){if(xl)return e(n,o);xl=!0;try{return Uu(e,n,o)}finally{xl=!1,(lo!==null||co!==null)&&(qu(),Hu())}}function sa(e,n){var o=e.stateNode;if(o===null)return null;var c=Oi(o);if(c===null)return null;o=c[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(e=e.type,c=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!c;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var yl=!1;if(f)try{var la={};Object.defineProperty(la,"passive",{get:function(){yl=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{yl=!1}function pg(e,n,o,c,u,p,w,P,D){var J=Array.prototype.slice.call(arguments,3);try{n.apply(o,J)}catch(le){this.onError(le)}}var ca=!1,gi=null,vi=!1,wl=null,fg={onError:function(e){ca=!0,gi=e}};function mg(e,n,o,c,u,p,w,P,D){ca=!1,gi=null,pg.apply(fg,arguments)}function gg(e,n,o,c,u,p,w,P,D){if(mg.apply(this,arguments),ca){if(ca){var J=gi;ca=!1,gi=null}else throw Error(i(198));vi||(vi=!0,wl=J)}}function Lr(e){var n=e,o=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(o=n.return),e=n.return;while(e)}return n.tag===3?o:null}function Gu(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Yu(e){if(Lr(e)!==e)throw Error(i(188))}function vg(e){var n=e.alternate;if(!n){if(n=Lr(e),n===null)throw Error(i(188));return n!==e?null:e}for(var o=e,c=n;;){var u=o.return;if(u===null)break;var p=u.alternate;if(p===null){if(c=u.return,c!==null){o=c;continue}break}if(u.child===p.child){for(p=u.child;p;){if(p===o)return Yu(u),e;if(p===c)return Yu(u),n;p=p.sibling}throw Error(i(188))}if(o.return!==c.return)o=u,c=p;else{for(var w=!1,P=u.child;P;){if(P===o){w=!0,o=u,c=p;break}if(P===c){w=!0,c=u,o=p;break}P=P.sibling}if(!w){for(P=p.child;P;){if(P===o){w=!0,o=p,c=u;break}if(P===c){w=!0,c=p,o=u;break}P=P.sibling}if(!w)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:n}function Qu(e){return e=vg(e),e!==null?Ku(e):null}function Ku(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ku(e);if(n!==null)return n;e=e.sibling}return null}var Zu=a.unstable_scheduleCallback,Xu=a.unstable_cancelCallback,xg=a.unstable_shouldYield,yg=a.unstable_requestPaint,it=a.unstable_now,wg=a.unstable_getCurrentPriorityLevel,bl=a.unstable_ImmediatePriority,Ju=a.unstable_UserBlockingPriority,xi=a.unstable_NormalPriority,bg=a.unstable_LowPriority,e1=a.unstable_IdlePriority,yi=null,Mn=null;function kg(e){if(Mn&&typeof Mn.onCommitFiberRoot=="function")try{Mn.onCommitFiberRoot(yi,e,void 0,(e.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:jg,_g=Math.log,Cg=Math.LN2;function jg(e){return e>>>=0,e===0?32:31-(_g(e)/Cg|0)|0}var wi=64,bi=4194304;function da(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ki(e,n){var o=e.pendingLanes;if(o===0)return 0;var c=0,u=e.suspendedLanes,p=e.pingedLanes,w=o&268435455;if(w!==0){var P=w&~u;P!==0?c=da(P):(p&=w,p!==0&&(c=da(p)))}else w=o&~u,w!==0?c=da(w):p!==0&&(c=da(p));if(c===0)return 0;if(n!==0&&n!==c&&(n&u)===0&&(u=c&-c,p=n&-n,u>=p||u===16&&(p&4194240)!==0))return n;if((c&4)!==0&&(c|=o&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=c;0<n;)o=31-fn(n),u=1<<o,c|=e[o],n&=~u;return c}function Sg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ng(e,n){for(var o=e.suspendedLanes,c=e.pingedLanes,u=e.expirationTimes,p=e.pendingLanes;0<p;){var w=31-fn(p),P=1<<w,D=u[w];D===-1?((P&o)===0||(P&c)!==0)&&(u[w]=Sg(P,n)):D<=n&&(e.expiredLanes|=P),p&=~P}}function kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function t1(){var e=wi;return wi<<=1,(wi&4194240)===0&&(wi=64),e}function _l(e){for(var n=[],o=0;31>o;o++)n.push(e);return n}function ua(e,n,o){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-fn(n),e[n]=o}function Mg(e,n){var o=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var c=e.eventTimes;for(e=e.expirationTimes;0<o;){var u=31-fn(o),p=1<<u;n[u]=0,c[u]=-1,e[u]=-1,o&=~p}}function Cl(e,n){var o=e.entangledLanes|=n;for(e=e.entanglements;o;){var c=31-fn(o),u=1<<c;u&n|e[c]&n&&(e[c]|=n),o&=~u}}var He=0;function n1(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var r1,jl,o1,a1,i1,Sl=!1,_i=[],Jn=null,er=null,tr=null,ha=new Map,pa=new Map,nr=[],Lg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function s1(e,n){switch(e){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":ha.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":pa.delete(n.pointerId)}}function fa(e,n,o,c,u,p){return e===null||e.nativeEvent!==p?(e={blockedOn:n,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[u]},n!==null&&(n=Ma(n),n!==null&&jl(n)),e):(e.eventSystemFlags|=c,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Rg(e,n,o,c,u){switch(n){case"focusin":return Jn=fa(Jn,e,n,o,c,u),!0;case"dragenter":return er=fa(er,e,n,o,c,u),!0;case"mouseover":return tr=fa(tr,e,n,o,c,u),!0;case"pointerover":var p=u.pointerId;return ha.set(p,fa(ha.get(p)||null,e,n,o,c,u)),!0;case"gotpointercapture":return p=u.pointerId,pa.set(p,fa(pa.get(p)||null,e,n,o,c,u)),!0}return!1}function l1(e){var n=Rr(e.target);if(n!==null){var o=Lr(n);if(o!==null){if(n=o.tag,n===13){if(n=Gu(o),n!==null){e.blockedOn=n,i1(e.priority,function(){o1(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ci(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var o=Ml(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var c=new o.constructor(o.type,o);Mr=c,o.target.dispatchEvent(c),Mr=null}else return n=Ma(o),n!==null&&jl(n),e.blockedOn=o,!1;n.shift()}return!0}function c1(e,n,o){Ci(e)&&o.delete(n)}function $g(){Sl=!1,Jn!==null&&Ci(Jn)&&(Jn=null),er!==null&&Ci(er)&&(er=null),tr!==null&&Ci(tr)&&(tr=null),ha.forEach(c1),pa.forEach(c1)}function ma(e,n){e.blockedOn===n&&(e.blockedOn=null,Sl||(Sl=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,$g)))}function ga(e){function n(u){return ma(u,e)}if(0<_i.length){ma(_i[0],e);for(var o=1;o<_i.length;o++){var c=_i[o];c.blockedOn===e&&(c.blockedOn=null)}}for(Jn!==null&&ma(Jn,e),er!==null&&ma(er,e),tr!==null&&ma(tr,e),ha.forEach(n),pa.forEach(n),o=0;o<nr.length;o++)c=nr[o],c.blockedOn===e&&(c.blockedOn=null);for(;0<nr.length&&(o=nr[0],o.blockedOn===null);)l1(o),o.blockedOn===null&&nr.shift()}var uo=A.ReactCurrentBatchConfig,ji=!0;function Tg(e,n,o,c){var u=He,p=uo.transition;uo.transition=null;try{He=1,Nl(e,n,o,c)}finally{He=u,uo.transition=p}}function Ag(e,n,o,c){var u=He,p=uo.transition;uo.transition=null;try{He=4,Nl(e,n,o,c)}finally{He=u,uo.transition=p}}function Nl(e,n,o,c){if(ji){var u=Ml(e,n,o,c);if(u===null)ql(e,n,c,Si,o),s1(e,c);else if(Rg(u,e,n,o,c))c.stopPropagation();else if(s1(e,c),n&4&&-1<Lg.indexOf(e)){for(;u!==null;){var p=Ma(u);if(p!==null&&r1(p),p=Ml(e,n,o,c),p===null&&ql(e,n,c,Si,o),p===u)break;u=p}u!==null&&c.stopPropagation()}else ql(e,n,c,null,o)}}var Si=null;function Ml(e,n,o,c){if(Si=null,e=aa(c),e=Rr(e),e!==null)if(n=Lr(e),n===null)e=null;else if(o=n.tag,o===13){if(e=Gu(n),e!==null)return e;e=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Si=e,null}function d1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wg()){case bl:return 1;case Ju:return 4;case xi:case bg:return 16;case e1:return 536870912;default:return 16}default:return 16}}var rr=null,Ll=null,Ni=null;function u1(){if(Ni)return Ni;var e,n=Ll,o=n.length,c,u="value"in rr?rr.value:rr.textContent,p=u.length;for(e=0;e<o&&n[e]===u[e];e++);var w=o-e;for(c=1;c<=w&&n[o-c]===u[p-c];c++);return Ni=u.slice(e,1<c?1-c:void 0)}function Mi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Li(){return!0}function h1(){return!1}function Qt(e){function n(o,c,u,p,w){this._reactName=o,this._targetInst=u,this.type=c,this.nativeEvent=p,this.target=w,this.currentTarget=null;for(var P in e)e.hasOwnProperty(P)&&(o=e[P],this[P]=o?o(p):p[P]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Li:h1,this.isPropagationStopped=h1,this}return H(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),n}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=Qt(ho),va=H({},ho,{view:0,detail:0}),Ig=Qt(va),$l,Tl,xa,Ri=H({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xa&&(xa&&e.type==="mousemove"?($l=e.screenX-xa.screenX,Tl=e.screenY-xa.screenY):Tl=$l=0,xa=e),$l)},movementY:function(e){return"movementY"in e?e.movementY:Tl}}),p1=Qt(Ri),Eg=H({},Ri,{dataTransfer:0}),Pg=Qt(Eg),zg=H({},va,{relatedTarget:0}),Al=Qt(zg),Og=H({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),Dg=Qt(Og),Bg=H({},ho,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fg=Qt(Bg),Wg=H({},ho,{data:0}),f1=Qt(Wg),Hg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=qg[e])?!!n[e]:!1}function Il(){return Vg}var Gg=H({},va,{key:function(e){if(e.key){var n=Hg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ug[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Il,charCode:function(e){return e.type==="keypress"?Mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yg=Qt(Gg),Qg=H({},Ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),m1=Qt(Qg),Kg=H({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Il}),Zg=Qt(Kg),Xg=H({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jg=Qt(Xg),ev=H({},Ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tv=Qt(ev),nv=[9,13,27,32],El=f&&"CompositionEvent"in window,ya=null;f&&"documentMode"in document&&(ya=document.documentMode);var rv=f&&"TextEvent"in window&&!ya,g1=f&&(!El||ya&&8<ya&&11>=ya),v1=" ",x1=!1;function y1(e,n){switch(e){case"keyup":return nv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var po=!1;function ov(e,n){switch(e){case"compositionend":return w1(n);case"keypress":return n.which!==32?null:(x1=!0,v1);case"textInput":return e=n.data,e===v1&&x1?null:e;default:return null}}function av(e,n){if(po)return e==="compositionend"||!El&&y1(e,n)?(e=u1(),Ni=Ll=rr=null,po=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return g1&&n.locale!=="ko"?null:n.data;default:return null}}var iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function b1(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!iv[e.type]:n==="textarea"}function k1(e,n,o,c){Wu(c),n=Ei(n,"onChange"),0<n.length&&(o=new Rl("onChange","change",null,o,c),e.push({event:o,listeners:n}))}var wa=null,ba=null;function sv(e){B1(e,0)}function $i(e){var n=xo(e);if(ve(n))return e}function lv(e,n){if(e==="change")return n}var _1=!1;if(f){var Pl;if(f){var zl="oninput"in document;if(!zl){var C1=document.createElement("div");C1.setAttribute("oninput","return;"),zl=typeof C1.oninput=="function"}Pl=zl}else Pl=!1;_1=Pl&&(!document.documentMode||9<document.documentMode)}function j1(){wa&&(wa.detachEvent("onpropertychange",S1),ba=wa=null)}function S1(e){if(e.propertyName==="value"&&$i(ba)){var n=[];k1(n,ba,e,aa(e)),Vu(sv,n)}}function cv(e,n,o){e==="focusin"?(j1(),wa=n,ba=o,wa.attachEvent("onpropertychange",S1)):e==="focusout"&&j1()}function dv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $i(ba)}function uv(e,n){if(e==="click")return $i(n)}function hv(e,n){if(e==="input"||e==="change")return $i(n)}function pv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var mn=typeof Object.is=="function"?Object.is:pv;function ka(e,n){if(mn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var o=Object.keys(e),c=Object.keys(n);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var u=o[c];if(!v.call(n,u)||!mn(e[u],n[u]))return!1}return!0}function N1(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function M1(e,n){var o=N1(e);e=0;for(var c;o;){if(o.nodeType===3){if(c=e+o.textContent.length,e<=n&&c>=n)return{node:o,offset:n-e};e=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=N1(o)}}function L1(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?L1(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function R1(){for(var e=window,n=_e();n instanceof e.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)e=n.contentWindow;else break;n=_e(e.document)}return n}function Ol(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function fv(e){var n=R1(),o=e.focusedElem,c=e.selectionRange;if(n!==o&&o&&o.ownerDocument&&L1(o.ownerDocument.documentElement,o)){if(c!==null&&Ol(o)){if(n=c.start,e=c.end,e===void 0&&(e=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(e,o.value.length);else if(e=(n=o.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var u=o.textContent.length,p=Math.min(c.start,u);c=c.end===void 0?p:Math.min(c.end,u),!e.extend&&p>c&&(u=c,c=p,p=u),u=M1(o,p);var w=M1(o,c);u&&w&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==w.node||e.focusOffset!==w.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),e.removeAllRanges(),p>c?(e.addRange(n),e.extend(w.node,w.offset)):(n.setEnd(w.node,w.offset),e.addRange(n)))}}for(n=[],e=o;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)e=n[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mv=f&&"documentMode"in document&&11>=document.documentMode,fo=null,Dl=null,_a=null,Bl=!1;function $1(e,n,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Bl||fo==null||fo!==_e(c)||(c=fo,"selectionStart"in c&&Ol(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_a&&ka(_a,c)||(_a=c,c=Ei(Dl,"onSelect"),0<c.length&&(n=new Rl("onSelect","select",null,n,o),e.push({event:n,listeners:c}),n.target=fo)))}function Ti(e,n){var o={};return o[e.toLowerCase()]=n.toLowerCase(),o["Webkit"+e]="webkit"+n,o["Moz"+e]="moz"+n,o}var mo={animationend:Ti("Animation","AnimationEnd"),animationiteration:Ti("Animation","AnimationIteration"),animationstart:Ti("Animation","AnimationStart"),transitionend:Ti("Transition","TransitionEnd")},Fl={},T1={};f&&(T1=document.createElement("div").style,"AnimationEvent"in window||(delete mo.animationend.animation,delete mo.animationiteration.animation,delete mo.animationstart.animation),"TransitionEvent"in window||delete mo.transitionend.transition);function Ai(e){if(Fl[e])return Fl[e];if(!mo[e])return e;var n=mo[e],o;for(o in n)if(n.hasOwnProperty(o)&&o in T1)return Fl[e]=n[o];return e}var A1=Ai("animationend"),I1=Ai("animationiteration"),E1=Ai("animationstart"),P1=Ai("transitionend"),z1=new Map,O1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(e,n){z1.set(e,n),d(n,[e])}for(var Wl=0;Wl<O1.length;Wl++){var Hl=O1[Wl],gv=Hl.toLowerCase(),vv=Hl[0].toUpperCase()+Hl.slice(1);or(gv,"on"+vv)}or(A1,"onAnimationEnd"),or(I1,"onAnimationIteration"),or(E1,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(P1,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ca));function D1(e,n,o){var c=e.type||"unknown-event";e.currentTarget=o,gg(c,n,void 0,e),e.currentTarget=null}function B1(e,n){n=(n&4)!==0;for(var o=0;o<e.length;o++){var c=e[o],u=c.event;c=c.listeners;e:{var p=void 0;if(n)for(var w=c.length-1;0<=w;w--){var P=c[w],D=P.instance,J=P.currentTarget;if(P=P.listener,D!==p&&u.isPropagationStopped())break e;D1(u,P,J),p=D}else for(w=0;w<c.length;w++){if(P=c[w],D=P.instance,J=P.currentTarget,P=P.listener,D!==p&&u.isPropagationStopped())break e;D1(u,P,J),p=D}}}if(vi)throw e=wl,vi=!1,wl=null,e}function Xe(e,n){var o=n[Zl];o===void 0&&(o=n[Zl]=new Set);var c=e+"__bubble";o.has(c)||(F1(n,e,2,!1),o.add(c))}function Ul(e,n,o){var c=0;n&&(c|=4),F1(o,e,c,n)}var Ii="_reactListening"+Math.random().toString(36).slice(2);function ja(e){if(!e[Ii]){e[Ii]=!0,s.forEach(function(o){o!=="selectionchange"&&(xv.has(o)||Ul(o,!1,e),Ul(o,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ii]||(n[Ii]=!0,Ul("selectionchange",!1,n))}}function F1(e,n,o,c){switch(d1(n)){case 1:var u=Tg;break;case 4:u=Ag;break;default:u=Nl}o=u.bind(null,n,o,e),u=void 0,!yl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),c?u!==void 0?e.addEventListener(n,o,{capture:!0,passive:u}):e.addEventListener(n,o,!0):u!==void 0?e.addEventListener(n,o,{passive:u}):e.addEventListener(n,o,!1)}function ql(e,n,o,c,u){var p=c;if((n&1)===0&&(n&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var P=c.stateNode.containerInfo;if(P===u||P.nodeType===8&&P.parentNode===u)break;if(w===4)for(w=c.return;w!==null;){var D=w.tag;if((D===3||D===4)&&(D=w.stateNode.containerInfo,D===u||D.nodeType===8&&D.parentNode===u))return;w=w.return}for(;P!==null;){if(w=Rr(P),w===null)return;if(D=w.tag,D===5||D===6){c=p=w;continue e}P=P.parentNode}}c=c.return}Vu(function(){var J=p,le=aa(o),de=[];e:{var se=z1.get(e);if(se!==void 0){var fe=Rl,xe=e;switch(e){case"keypress":if(Mi(o)===0)break e;case"keydown":case"keyup":fe=Yg;break;case"focusin":xe="focus",fe=Al;break;case"focusout":xe="blur",fe=Al;break;case"beforeblur":case"afterblur":fe=Al;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=p1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=Pg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=Zg;break;case A1:case I1:case E1:fe=Dg;break;case P1:fe=Jg;break;case"scroll":fe=Ig;break;case"wheel":fe=tv;break;case"copy":case"cut":case"paste":fe=Fg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=m1}var ye=(n&4)!==0,st=!ye&&e==="scroll",V=ye?se!==null?se+"Capture":null:se;ye=[];for(var F=J,Y;F!==null;){Y=F;var he=Y.stateNode;if(Y.tag===5&&he!==null&&(Y=he,V!==null&&(he=sa(F,V),he!=null&&ye.push(Sa(F,he,Y)))),st)break;F=F.return}0<ye.length&&(se=new fe(se,xe,null,o,le),de.push({event:se,listeners:ye}))}}if((n&7)===0){e:{if(se=e==="mouseover"||e==="pointerover",fe=e==="mouseout"||e==="pointerout",se&&o!==Mr&&(xe=o.relatedTarget||o.fromElement)&&(Rr(xe)||xe[Bn]))break e;if((fe||se)&&(se=le.window===le?le:(se=le.ownerDocument)?se.defaultView||se.parentWindow:window,fe?(xe=o.relatedTarget||o.toElement,fe=J,xe=xe?Rr(xe):null,xe!==null&&(st=Lr(xe),xe!==st||xe.tag!==5&&xe.tag!==6)&&(xe=null)):(fe=null,xe=J),fe!==xe)){if(ye=p1,he="onMouseLeave",V="onMouseEnter",F="mouse",(e==="pointerout"||e==="pointerover")&&(ye=m1,he="onPointerLeave",V="onPointerEnter",F="pointer"),st=fe==null?se:xo(fe),Y=xe==null?se:xo(xe),se=new ye(he,F+"leave",fe,o,le),se.target=st,se.relatedTarget=Y,he=null,Rr(le)===J&&(ye=new ye(V,F+"enter",xe,o,le),ye.target=Y,ye.relatedTarget=st,he=ye),st=he,fe&&xe)t:{for(ye=fe,V=xe,F=0,Y=ye;Y;Y=go(Y))F++;for(Y=0,he=V;he;he=go(he))Y++;for(;0<F-Y;)ye=go(ye),F--;for(;0<Y-F;)V=go(V),Y--;for(;F--;){if(ye===V||V!==null&&ye===V.alternate)break t;ye=go(ye),V=go(V)}ye=null}else ye=null;fe!==null&&W1(de,se,fe,ye,!1),xe!==null&&st!==null&&W1(de,st,xe,ye,!0)}}e:{if(se=J?xo(J):window,fe=se.nodeName&&se.nodeName.toLowerCase(),fe==="select"||fe==="input"&&se.type==="file")var we=lv;else if(b1(se))if(_1)we=hv;else{we=dv;var be=cv}else(fe=se.nodeName)&&fe.toLowerCase()==="input"&&(se.type==="checkbox"||se.type==="radio")&&(we=uv);if(we&&(we=we(e,J))){k1(de,we,o,le);break e}be&&be(e,se,J),e==="focusout"&&(be=se._wrapperState)&&be.controlled&&se.type==="number"&&De(se,"number",se.value)}switch(be=J?xo(J):window,e){case"focusin":(b1(be)||be.contentEditable==="true")&&(fo=be,Dl=J,_a=null);break;case"focusout":_a=Dl=fo=null;break;case"mousedown":Bl=!0;break;case"contextmenu":case"mouseup":case"dragend":Bl=!1,$1(de,o,le);break;case"selectionchange":if(mv)break;case"keydown":case"keyup":$1(de,o,le)}var ke;if(El)e:{switch(e){case"compositionstart":var Ce="onCompositionStart";break e;case"compositionend":Ce="onCompositionEnd";break e;case"compositionupdate":Ce="onCompositionUpdate";break e}Ce=void 0}else po?y1(e,o)&&(Ce="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(Ce="onCompositionStart");Ce&&(g1&&o.locale!=="ko"&&(po||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&po&&(ke=u1()):(rr=le,Ll="value"in rr?rr.value:rr.textContent,po=!0)),be=Ei(J,Ce),0<be.length&&(Ce=new f1(Ce,e,null,o,le),de.push({event:Ce,listeners:be}),ke?Ce.data=ke:(ke=w1(o),ke!==null&&(Ce.data=ke)))),(ke=rv?ov(e,o):av(e,o))&&(J=Ei(J,"onBeforeInput"),0<J.length&&(le=new f1("onBeforeInput","beforeinput",null,o,le),de.push({event:le,listeners:J}),le.data=ke))}B1(de,n)})}function Sa(e,n,o){return{instance:e,listener:n,currentTarget:o}}function Ei(e,n){for(var o=n+"Capture",c=[];e!==null;){var u=e,p=u.stateNode;u.tag===5&&p!==null&&(u=p,p=sa(e,o),p!=null&&c.unshift(Sa(e,p,u)),p=sa(e,n),p!=null&&c.push(Sa(e,p,u))),e=e.return}return c}function go(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function W1(e,n,o,c,u){for(var p=n._reactName,w=[];o!==null&&o!==c;){var P=o,D=P.alternate,J=P.stateNode;if(D!==null&&D===c)break;P.tag===5&&J!==null&&(P=J,u?(D=sa(o,p),D!=null&&w.unshift(Sa(o,D,P))):u||(D=sa(o,p),D!=null&&w.push(Sa(o,D,P)))),o=o.return}w.length!==0&&e.push({event:n,listeners:w})}var yv=/\r\n?/g,wv=/\u0000|\uFFFD/g;function H1(e){return(typeof e=="string"?e:""+e).replace(yv,`
`).replace(wv,"")}function Pi(e,n,o){if(n=H1(n),H1(e)!==n&&o)throw Error(i(425))}function zi(){}var Vl=null,Gl=null;function Yl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ql=typeof setTimeout=="function"?setTimeout:void 0,bv=typeof clearTimeout=="function"?clearTimeout:void 0,U1=typeof Promise=="function"?Promise:void 0,kv=typeof queueMicrotask=="function"?queueMicrotask:typeof U1<"u"?function(e){return U1.resolve(null).then(e).catch(_v)}:Ql;function _v(e){setTimeout(function(){throw e})}function Kl(e,n){var o=n,c=0;do{var u=o.nextSibling;if(e.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(c===0){e.removeChild(u),ga(n);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=u}while(o);ga(n)}function ar(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function q1(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return e;n--}else o==="/$"&&n++}e=e.previousSibling}return null}var vo=Math.random().toString(36).slice(2),Ln="__reactFiber$"+vo,Na="__reactProps$"+vo,Bn="__reactContainer$"+vo,Zl="__reactEvents$"+vo,Cv="__reactListeners$"+vo,jv="__reactHandles$"+vo;function Rr(e){var n=e[Ln];if(n)return n;for(var o=e.parentNode;o;){if(n=o[Bn]||o[Ln]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(e=q1(e);e!==null;){if(o=e[Ln])return o;e=q1(e)}return n}e=o,o=e.parentNode}return null}function Ma(e){return e=e[Ln]||e[Bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Oi(e){return e[Na]||null}var Xl=[],yo=-1;function ir(e){return{current:e}}function Je(e){0>yo||(e.current=Xl[yo],Xl[yo]=null,yo--)}function Ke(e,n){yo++,Xl[yo]=e.current,e.current=n}var sr={},Nt=ir(sr),Bt=ir(!1),$r=sr;function wo(e,n){var o=e.type.contextTypes;if(!o)return sr;var c=e.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===n)return c.__reactInternalMemoizedMaskedChildContext;var u={},p;for(p in o)u[p]=n[p];return c&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),u}function Ft(e){return e=e.childContextTypes,e!=null}function Di(){Je(Bt),Je(Nt)}function V1(e,n,o){if(Nt.current!==sr)throw Error(i(168));Ke(Nt,n),Ke(Bt,o)}function G1(e,n,o){var c=e.stateNode;if(n=n.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var u in c)if(!(u in n))throw Error(i(108,K(e)||"Unknown",u));return H({},o,c)}function Bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sr,$r=Nt.current,Ke(Nt,e),Ke(Bt,Bt.current),!0}function Y1(e,n,o){var c=e.stateNode;if(!c)throw Error(i(169));o?(e=G1(e,n,$r),c.__reactInternalMemoizedMergedChildContext=e,Je(Bt),Je(Nt),Ke(Nt,e)):Je(Bt),Ke(Bt,o)}var Fn=null,Fi=!1,Jl=!1;function Q1(e){Fn===null?Fn=[e]:Fn.push(e)}function Sv(e){Fi=!0,Q1(e)}function lr(){if(!Jl&&Fn!==null){Jl=!0;var e=0,n=He;try{var o=Fn;for(He=1;e<o.length;e++){var c=o[e];do c=c(!0);while(c!==null)}Fn=null,Fi=!1}catch(u){throw Fn!==null&&(Fn=Fn.slice(e+1)),Zu(bl,lr),u}finally{He=n,Jl=!1}}return null}var bo=[],ko=0,Wi=null,Hi=0,an=[],sn=0,Tr=null,Wn=1,Hn="";function Ar(e,n){bo[ko++]=Hi,bo[ko++]=Wi,Wi=e,Hi=n}function K1(e,n,o){an[sn++]=Wn,an[sn++]=Hn,an[sn++]=Tr,Tr=e;var c=Wn;e=Hn;var u=32-fn(c)-1;c&=~(1<<u),o+=1;var p=32-fn(n)+u;if(30<p){var w=u-u%5;p=(c&(1<<w)-1).toString(32),c>>=w,u-=w,Wn=1<<32-fn(n)+u|o<<u|c,Hn=p+e}else Wn=1<<p|o<<u|c,Hn=e}function ec(e){e.return!==null&&(Ar(e,1),K1(e,1,0))}function tc(e){for(;e===Wi;)Wi=bo[--ko],bo[ko]=null,Hi=bo[--ko],bo[ko]=null;for(;e===Tr;)Tr=an[--sn],an[sn]=null,Hn=an[--sn],an[sn]=null,Wn=an[--sn],an[sn]=null}var Kt=null,Zt=null,nt=!1,gn=null;function Z1(e,n){var o=un(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=e,n=e.deletions,n===null?(e.deletions=[o],e.flags|=16):n.push(o)}function X1(e,n){switch(e.tag){case 5:var o=e.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Kt=e,Zt=ar(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Kt=e,Zt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=Tr!==null?{id:Wn,overflow:Hn}:null,e.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=un(18,null,null,0),o.stateNode=n,o.return=e,e.child=o,Kt=e,Zt=null,!0):!1;default:return!1}}function nc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rc(e){if(nt){var n=Zt;if(n){var o=n;if(!X1(e,n)){if(nc(e))throw Error(i(418));n=ar(o.nextSibling);var c=Kt;n&&X1(e,n)?Z1(c,o):(e.flags=e.flags&-4097|2,nt=!1,Kt=e)}}else{if(nc(e))throw Error(i(418));e.flags=e.flags&-4097|2,nt=!1,Kt=e}}}function J1(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Kt=e}function Ui(e){if(e!==Kt)return!1;if(!nt)return J1(e),nt=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Yl(e.type,e.memoizedProps)),n&&(n=Zt)){if(nc(e))throw eh(),Error(i(418));for(;n;)Z1(e,n),n=ar(n.nextSibling)}if(J1(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(n===0){Zt=ar(e.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}e=e.nextSibling}Zt=null}}else Zt=Kt?ar(e.stateNode.nextSibling):null;return!0}function eh(){for(var e=Zt;e;)e=ar(e.nextSibling)}function _o(){Zt=Kt=null,nt=!1}function oc(e){gn===null?gn=[e]:gn.push(e)}var Nv=A.ReactCurrentBatchConfig;function La(e,n,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var c=o.stateNode}if(!c)throw Error(i(147,e));var u=c,p=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function(w){var P=u.refs;w===null?delete P[p]:P[p]=w},n._stringRef=p,n)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function qi(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function th(e){var n=e._init;return n(e._payload)}function nh(e){function n(V,F){if(e){var Y=V.deletions;Y===null?(V.deletions=[F],V.flags|=16):Y.push(F)}}function o(V,F){if(!e)return null;for(;F!==null;)n(V,F),F=F.sibling;return null}function c(V,F){for(V=new Map;F!==null;)F.key!==null?V.set(F.key,F):V.set(F.index,F),F=F.sibling;return V}function u(V,F){return V=gr(V,F),V.index=0,V.sibling=null,V}function p(V,F,Y){return V.index=Y,e?(Y=V.alternate,Y!==null?(Y=Y.index,Y<F?(V.flags|=2,F):Y):(V.flags|=2,F)):(V.flags|=1048576,F)}function w(V){return e&&V.alternate===null&&(V.flags|=2),V}function P(V,F,Y,he){return F===null||F.tag!==6?(F=Qc(Y,V.mode,he),F.return=V,F):(F=u(F,Y),F.return=V,F)}function D(V,F,Y,he){var we=Y.type;return we===E?le(V,F,Y.props.children,he,Y.key):F!==null&&(F.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===oe&&th(we)===F.type)?(he=u(F,Y.props),he.ref=La(V,F,Y),he.return=V,he):(he=ms(Y.type,Y.key,Y.props,null,V.mode,he),he.ref=La(V,F,Y),he.return=V,he)}function J(V,F,Y,he){return F===null||F.tag!==4||F.stateNode.containerInfo!==Y.containerInfo||F.stateNode.implementation!==Y.implementation?(F=Kc(Y,V.mode,he),F.return=V,F):(F=u(F,Y.children||[]),F.return=V,F)}function le(V,F,Y,he,we){return F===null||F.tag!==7?(F=Fr(Y,V.mode,he,we),F.return=V,F):(F=u(F,Y),F.return=V,F)}function de(V,F,Y){if(typeof F=="string"&&F!==""||typeof F=="number")return F=Qc(""+F,V.mode,Y),F.return=V,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case M:return Y=ms(F.type,F.key,F.props,null,V.mode,Y),Y.ref=La(V,null,F),Y.return=V,Y;case T:return F=Kc(F,V.mode,Y),F.return=V,F;case oe:var he=F._init;return de(V,he(F._payload),Y)}if(Qe(F)||W(F))return F=Fr(F,V.mode,Y,null),F.return=V,F;qi(V,F)}return null}function se(V,F,Y,he){var we=F!==null?F.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number")return we!==null?null:P(V,F,""+Y,he);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case M:return Y.key===we?D(V,F,Y,he):null;case T:return Y.key===we?J(V,F,Y,he):null;case oe:return we=Y._init,se(V,F,we(Y._payload),he)}if(Qe(Y)||W(Y))return we!==null?null:le(V,F,Y,he,null);qi(V,Y)}return null}function fe(V,F,Y,he,we){if(typeof he=="string"&&he!==""||typeof he=="number")return V=V.get(Y)||null,P(F,V,""+he,we);if(typeof he=="object"&&he!==null){switch(he.$$typeof){case M:return V=V.get(he.key===null?Y:he.key)||null,D(F,V,he,we);case T:return V=V.get(he.key===null?Y:he.key)||null,J(F,V,he,we);case oe:var be=he._init;return fe(V,F,Y,be(he._payload),we)}if(Qe(he)||W(he))return V=V.get(Y)||null,le(F,V,he,we,null);qi(F,he)}return null}function xe(V,F,Y,he){for(var we=null,be=null,ke=F,Ce=F=0,yt=null;ke!==null&&Ce<Y.length;Ce++){ke.index>Ce?(yt=ke,ke=null):yt=ke.sibling;var Oe=se(V,ke,Y[Ce],he);if(Oe===null){ke===null&&(ke=yt);break}e&&ke&&Oe.alternate===null&&n(V,ke),F=p(Oe,F,Ce),be===null?we=Oe:be.sibling=Oe,be=Oe,ke=yt}if(Ce===Y.length)return o(V,ke),nt&&Ar(V,Ce),we;if(ke===null){for(;Ce<Y.length;Ce++)ke=de(V,Y[Ce],he),ke!==null&&(F=p(ke,F,Ce),be===null?we=ke:be.sibling=ke,be=ke);return nt&&Ar(V,Ce),we}for(ke=c(V,ke);Ce<Y.length;Ce++)yt=fe(ke,V,Ce,Y[Ce],he),yt!==null&&(e&&yt.alternate!==null&&ke.delete(yt.key===null?Ce:yt.key),F=p(yt,F,Ce),be===null?we=yt:be.sibling=yt,be=yt);return e&&ke.forEach(function(vr){return n(V,vr)}),nt&&Ar(V,Ce),we}function ye(V,F,Y,he){var we=W(Y);if(typeof we!="function")throw Error(i(150));if(Y=we.call(Y),Y==null)throw Error(i(151));for(var be=we=null,ke=F,Ce=F=0,yt=null,Oe=Y.next();ke!==null&&!Oe.done;Ce++,Oe=Y.next()){ke.index>Ce?(yt=ke,ke=null):yt=ke.sibling;var vr=se(V,ke,Oe.value,he);if(vr===null){ke===null&&(ke=yt);break}e&&ke&&vr.alternate===null&&n(V,ke),F=p(vr,F,Ce),be===null?we=vr:be.sibling=vr,be=vr,ke=yt}if(Oe.done)return o(V,ke),nt&&Ar(V,Ce),we;if(ke===null){for(;!Oe.done;Ce++,Oe=Y.next())Oe=de(V,Oe.value,he),Oe!==null&&(F=p(Oe,F,Ce),be===null?we=Oe:be.sibling=Oe,be=Oe);return nt&&Ar(V,Ce),we}for(ke=c(V,ke);!Oe.done;Ce++,Oe=Y.next())Oe=fe(ke,V,Ce,Oe.value,he),Oe!==null&&(e&&Oe.alternate!==null&&ke.delete(Oe.key===null?Ce:Oe.key),F=p(Oe,F,Ce),be===null?we=Oe:be.sibling=Oe,be=Oe);return e&&ke.forEach(function(i3){return n(V,i3)}),nt&&Ar(V,Ce),we}function st(V,F,Y,he){if(typeof Y=="object"&&Y!==null&&Y.type===E&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case M:e:{for(var we=Y.key,be=F;be!==null;){if(be.key===we){if(we=Y.type,we===E){if(be.tag===7){o(V,be.sibling),F=u(be,Y.props.children),F.return=V,V=F;break e}}else if(be.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===oe&&th(we)===be.type){o(V,be.sibling),F=u(be,Y.props),F.ref=La(V,be,Y),F.return=V,V=F;break e}o(V,be);break}else n(V,be);be=be.sibling}Y.type===E?(F=Fr(Y.props.children,V.mode,he,Y.key),F.return=V,V=F):(he=ms(Y.type,Y.key,Y.props,null,V.mode,he),he.ref=La(V,F,Y),he.return=V,V=he)}return w(V);case T:e:{for(be=Y.key;F!==null;){if(F.key===be)if(F.tag===4&&F.stateNode.containerInfo===Y.containerInfo&&F.stateNode.implementation===Y.implementation){o(V,F.sibling),F=u(F,Y.children||[]),F.return=V,V=F;break e}else{o(V,F);break}else n(V,F);F=F.sibling}F=Kc(Y,V.mode,he),F.return=V,V=F}return w(V);case oe:return be=Y._init,st(V,F,be(Y._payload),he)}if(Qe(Y))return xe(V,F,Y,he);if(W(Y))return ye(V,F,Y,he);qi(V,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"?(Y=""+Y,F!==null&&F.tag===6?(o(V,F.sibling),F=u(F,Y),F.return=V,V=F):(o(V,F),F=Qc(Y,V.mode,he),F.return=V,V=F),w(V)):o(V,F)}return st}var Co=nh(!0),rh=nh(!1),Vi=ir(null),Gi=null,jo=null,ac=null;function ic(){ac=jo=Gi=null}function sc(e){var n=Vi.current;Je(Vi),e._currentValue=n}function lc(e,n,o){for(;e!==null;){var c=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,c!==null&&(c.childLanes|=n)):c!==null&&(c.childLanes&n)!==n&&(c.childLanes|=n),e===o)break;e=e.return}}function So(e,n){Gi=e,ac=jo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Wt=!0),e.firstContext=null)}function ln(e){var n=e._currentValue;if(ac!==e)if(e={context:e,memoizedValue:n,next:null},jo===null){if(Gi===null)throw Error(i(308));jo=e,Gi.dependencies={lanes:0,firstContext:e}}else jo=jo.next=e;return n}var Ir=null;function cc(e){Ir===null?Ir=[e]:Ir.push(e)}function oh(e,n,o,c){var u=n.interleaved;return u===null?(o.next=o,cc(n)):(o.next=u.next,u.next=o),n.interleaved=o,Un(e,c)}function Un(e,n){e.lanes|=n;var o=e.alternate;for(o!==null&&(o.lanes|=n),o=e,e=e.return;e!==null;)e.childLanes|=n,o=e.alternate,o!==null&&(o.childLanes|=n),o=e,e=e.return;return o.tag===3?o.stateNode:null}var cr=!1;function dc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ah(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function dr(e,n,o){var c=e.updateQueue;if(c===null)return null;if(c=c.shared,(ze&2)!==0){var u=c.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),c.pending=n,Un(e,o)}return u=c.interleaved,u===null?(n.next=n,cc(c)):(n.next=u.next,u.next=n),c.interleaved=n,Un(e,o)}function Yi(e,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var c=n.lanes;c&=e.pendingLanes,o|=c,n.lanes=o,Cl(e,o)}}function ih(e,n){var o=e.updateQueue,c=e.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var u=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?u=p=w:p=p.next=w,o=o.next}while(o!==null);p===null?u=p=n:p=p.next=n}else u=p=n;o={baseState:c.baseState,firstBaseUpdate:u,lastBaseUpdate:p,shared:c.shared,effects:c.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=n:e.next=n,o.lastBaseUpdate=n}function Qi(e,n,o,c){var u=e.updateQueue;cr=!1;var p=u.firstBaseUpdate,w=u.lastBaseUpdate,P=u.shared.pending;if(P!==null){u.shared.pending=null;var D=P,J=D.next;D.next=null,w===null?p=J:w.next=J,w=D;var le=e.alternate;le!==null&&(le=le.updateQueue,P=le.lastBaseUpdate,P!==w&&(P===null?le.firstBaseUpdate=J:P.next=J,le.lastBaseUpdate=D))}if(p!==null){var de=u.baseState;w=0,le=J=D=null,P=p;do{var se=P.lane,fe=P.eventTime;if((c&se)===se){le!==null&&(le=le.next={eventTime:fe,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var xe=e,ye=P;switch(se=n,fe=o,ye.tag){case 1:if(xe=ye.payload,typeof xe=="function"){de=xe.call(fe,de,se);break e}de=xe;break e;case 3:xe.flags=xe.flags&-65537|128;case 0:if(xe=ye.payload,se=typeof xe=="function"?xe.call(fe,de,se):xe,se==null)break e;de=H({},de,se);break e;case 2:cr=!0}}P.callback!==null&&P.lane!==0&&(e.flags|=64,se=u.effects,se===null?u.effects=[P]:se.push(P))}else fe={eventTime:fe,lane:se,tag:P.tag,payload:P.payload,callback:P.callback,next:null},le===null?(J=le=fe,D=de):le=le.next=fe,w|=se;if(P=P.next,P===null){if(P=u.shared.pending,P===null)break;se=P,P=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);if(le===null&&(D=de),u.baseState=D,u.firstBaseUpdate=J,u.lastBaseUpdate=le,n=u.shared.interleaved,n!==null){u=n;do w|=u.lane,u=u.next;while(u!==n)}else p===null&&(u.shared.lanes=0);zr|=w,e.lanes=w,e.memoizedState=de}}function sh(e,n,o){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var c=e[n],u=c.callback;if(u!==null){if(c.callback=null,c=o,typeof u!="function")throw Error(i(191,u));u.call(c)}}}var Ra={},Rn=ir(Ra),$a=ir(Ra),Ta=ir(Ra);function Er(e){if(e===Ra)throw Error(i(174));return e}function uc(e,n){switch(Ke(Ta,n),Ke($a,e),Ke(Rn,Ra),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Nn(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Nn(n,e)}Je(Rn),Ke(Rn,n)}function No(){Je(Rn),Je($a),Je(Ta)}function lh(e){Er(Ta.current);var n=Er(Rn.current),o=Nn(n,e.type);n!==o&&(Ke($a,e),Ke(Rn,o))}function hc(e){$a.current===e&&(Je(Rn),Je($a))}var rt=ir(0);function Ki(e){for(var n=e;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var pc=[];function fc(){for(var e=0;e<pc.length;e++)pc[e]._workInProgressVersionPrimary=null;pc.length=0}var Zi=A.ReactCurrentDispatcher,mc=A.ReactCurrentBatchConfig,Pr=0,ot=null,ft=null,vt=null,Xi=!1,Aa=!1,Ia=0,Mv=0;function Mt(){throw Error(i(321))}function gc(e,n){if(n===null)return!1;for(var o=0;o<n.length&&o<e.length;o++)if(!mn(e[o],n[o]))return!1;return!0}function vc(e,n,o,c,u,p){if(Pr=p,ot=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Zi.current=e===null||e.memoizedState===null?Tv:Av,e=o(c,u),Aa){p=0;do{if(Aa=!1,Ia=0,25<=p)throw Error(i(301));p+=1,vt=ft=null,n.updateQueue=null,Zi.current=Iv,e=o(c,u)}while(Aa)}if(Zi.current=ts,n=ft!==null&&ft.next!==null,Pr=0,vt=ft=ot=null,Xi=!1,n)throw Error(i(300));return e}function xc(){var e=Ia!==0;return Ia=0,e}function $n(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?ot.memoizedState=vt=e:vt=vt.next=e,vt}function cn(){if(ft===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=ft.next;var n=vt===null?ot.memoizedState:vt.next;if(n!==null)vt=n,ft=e;else{if(e===null)throw Error(i(310));ft=e,e={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},vt===null?ot.memoizedState=vt=e:vt=vt.next=e}return vt}function Ea(e,n){return typeof n=="function"?n(e):n}function yc(e){var n=cn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var c=ft,u=c.baseQueue,p=o.pending;if(p!==null){if(u!==null){var w=u.next;u.next=p.next,p.next=w}c.baseQueue=u=p,o.pending=null}if(u!==null){p=u.next,c=c.baseState;var P=w=null,D=null,J=p;do{var le=J.lane;if((Pr&le)===le)D!==null&&(D=D.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),c=J.hasEagerState?J.eagerState:e(c,J.action);else{var de={lane:le,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};D===null?(P=D=de,w=c):D=D.next=de,ot.lanes|=le,zr|=le}J=J.next}while(J!==null&&J!==p);D===null?w=c:D.next=P,mn(c,n.memoizedState)||(Wt=!0),n.memoizedState=c,n.baseState=w,n.baseQueue=D,o.lastRenderedState=c}if(e=o.interleaved,e!==null){u=e;do p=u.lane,ot.lanes|=p,zr|=p,u=u.next;while(u!==e)}else u===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function wc(e){var n=cn(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var c=o.dispatch,u=o.pending,p=n.memoizedState;if(u!==null){o.pending=null;var w=u=u.next;do p=e(p,w.action),w=w.next;while(w!==u);mn(p,n.memoizedState)||(Wt=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),o.lastRenderedState=p}return[p,c]}function ch(){}function dh(e,n){var o=ot,c=cn(),u=n(),p=!mn(c.memoizedState,u);if(p&&(c.memoizedState=u,Wt=!0),c=c.queue,bc(ph.bind(null,o,c,e),[e]),c.getSnapshot!==n||p||vt!==null&&vt.memoizedState.tag&1){if(o.flags|=2048,Pa(9,hh.bind(null,o,c,u,n),void 0,null),xt===null)throw Error(i(349));(Pr&30)!==0||uh(o,n,u)}return u}function uh(e,n,o){e.flags|=16384,e={getSnapshot:n,value:o},n=ot.updateQueue,n===null?(n={lastEffect:null,stores:null},ot.updateQueue=n,n.stores=[e]):(o=n.stores,o===null?n.stores=[e]:o.push(e))}function hh(e,n,o,c){n.value=o,n.getSnapshot=c,fh(n)&&mh(e)}function ph(e,n,o){return o(function(){fh(n)&&mh(e)})}function fh(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!mn(e,o)}catch{return!0}}function mh(e){var n=Un(e,1);n!==null&&wn(n,e,1,-1)}function gh(e){var n=$n();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:e},n.queue=e,e=e.dispatch=$v.bind(null,ot,e),[n.memoizedState,e]}function Pa(e,n,o,c){return e={tag:e,create:n,destroy:o,deps:c,next:null},n=ot.updateQueue,n===null?(n={lastEffect:null,stores:null},ot.updateQueue=n,n.lastEffect=e.next=e):(o=n.lastEffect,o===null?n.lastEffect=e.next=e:(c=o.next,o.next=e,e.next=c,n.lastEffect=e)),e}function vh(){return cn().memoizedState}function Ji(e,n,o,c){var u=$n();ot.flags|=e,u.memoizedState=Pa(1|n,o,void 0,c===void 0?null:c)}function es(e,n,o,c){var u=cn();c=c===void 0?null:c;var p=void 0;if(ft!==null){var w=ft.memoizedState;if(p=w.destroy,c!==null&&gc(c,w.deps)){u.memoizedState=Pa(n,o,p,c);return}}ot.flags|=e,u.memoizedState=Pa(1|n,o,p,c)}function xh(e,n){return Ji(8390656,8,e,n)}function bc(e,n){return es(2048,8,e,n)}function yh(e,n){return es(4,2,e,n)}function wh(e,n){return es(4,4,e,n)}function bh(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function kh(e,n,o){return o=o!=null?o.concat([e]):null,es(4,4,bh.bind(null,n,e),o)}function kc(){}function _h(e,n){var o=cn();n=n===void 0?null:n;var c=o.memoizedState;return c!==null&&n!==null&&gc(n,c[1])?c[0]:(o.memoizedState=[e,n],e)}function Ch(e,n){var o=cn();n=n===void 0?null:n;var c=o.memoizedState;return c!==null&&n!==null&&gc(n,c[1])?c[0]:(e=e(),o.memoizedState=[e,n],e)}function jh(e,n,o){return(Pr&21)===0?(e.baseState&&(e.baseState=!1,Wt=!0),e.memoizedState=o):(mn(o,n)||(o=t1(),ot.lanes|=o,zr|=o,e.baseState=!0),n)}function Lv(e,n){var o=He;He=o!==0&&4>o?o:4,e(!0);var c=mc.transition;mc.transition={};try{e(!1),n()}finally{He=o,mc.transition=c}}function Sh(){return cn().memoizedState}function Rv(e,n,o){var c=fr(e);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Nh(e))Mh(n,o);else if(o=oh(e,n,o,c),o!==null){var u=zt();wn(o,e,c,u),Lh(o,n,c)}}function $v(e,n,o){var c=fr(e),u={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Nh(e))Mh(n,u);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var w=n.lastRenderedState,P=p(w,o);if(u.hasEagerState=!0,u.eagerState=P,mn(P,w)){var D=n.interleaved;D===null?(u.next=u,cc(n)):(u.next=D.next,D.next=u),n.interleaved=u;return}}catch{}finally{}o=oh(e,n,u,c),o!==null&&(u=zt(),wn(o,e,c,u),Lh(o,n,c))}}function Nh(e){var n=e.alternate;return e===ot||n!==null&&n===ot}function Mh(e,n){Aa=Xi=!0;var o=e.pending;o===null?n.next=n:(n.next=o.next,o.next=n),e.pending=n}function Lh(e,n,o){if((o&4194240)!==0){var c=n.lanes;c&=e.pendingLanes,o|=c,n.lanes=o,Cl(e,o)}}var ts={readContext:ln,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useInsertionEffect:Mt,useLayoutEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useMutableSource:Mt,useSyncExternalStore:Mt,useId:Mt,unstable_isNewReconciler:!1},Tv={readContext:ln,useCallback:function(e,n){return $n().memoizedState=[e,n===void 0?null:n],e},useContext:ln,useEffect:xh,useImperativeHandle:function(e,n,o){return o=o!=null?o.concat([e]):null,Ji(4194308,4,bh.bind(null,n,e),o)},useLayoutEffect:function(e,n){return Ji(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ji(4,2,e,n)},useMemo:function(e,n){var o=$n();return n=n===void 0?null:n,e=e(),o.memoizedState=[e,n],e},useReducer:function(e,n,o){var c=$n();return n=o!==void 0?o(n):n,c.memoizedState=c.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},c.queue=e,e=e.dispatch=Rv.bind(null,ot,e),[c.memoizedState,e]},useRef:function(e){var n=$n();return e={current:e},n.memoizedState=e},useState:gh,useDebugValue:kc,useDeferredValue:function(e){return $n().memoizedState=e},useTransition:function(){var e=gh(!1),n=e[0];return e=Lv.bind(null,e[1]),$n().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,o){var c=ot,u=$n();if(nt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),xt===null)throw Error(i(349));(Pr&30)!==0||uh(c,n,o)}u.memoizedState=o;var p={value:o,getSnapshot:n};return u.queue=p,xh(ph.bind(null,c,p,e),[e]),c.flags|=2048,Pa(9,hh.bind(null,c,p,o,n),void 0,null),o},useId:function(){var e=$n(),n=xt.identifierPrefix;if(nt){var o=Hn,c=Wn;o=(c&~(1<<32-fn(c)-1)).toString(32)+o,n=":"+n+"R"+o,o=Ia++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=Mv++,n=":"+n+"r"+o.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Av={readContext:ln,useCallback:_h,useContext:ln,useEffect:bc,useImperativeHandle:kh,useInsertionEffect:yh,useLayoutEffect:wh,useMemo:Ch,useReducer:yc,useRef:vh,useState:function(){return yc(Ea)},useDebugValue:kc,useDeferredValue:function(e){var n=cn();return jh(n,ft.memoizedState,e)},useTransition:function(){var e=yc(Ea)[0],n=cn().memoizedState;return[e,n]},useMutableSource:ch,useSyncExternalStore:dh,useId:Sh,unstable_isNewReconciler:!1},Iv={readContext:ln,useCallback:_h,useContext:ln,useEffect:bc,useImperativeHandle:kh,useInsertionEffect:yh,useLayoutEffect:wh,useMemo:Ch,useReducer:wc,useRef:vh,useState:function(){return wc(Ea)},useDebugValue:kc,useDeferredValue:function(e){var n=cn();return ft===null?n.memoizedState=e:jh(n,ft.memoizedState,e)},useTransition:function(){var e=wc(Ea)[0],n=cn().memoizedState;return[e,n]},useMutableSource:ch,useSyncExternalStore:dh,useId:Sh,unstable_isNewReconciler:!1};function vn(e,n){if(e&&e.defaultProps){n=H({},n),e=e.defaultProps;for(var o in e)n[o]===void 0&&(n[o]=e[o]);return n}return n}function _c(e,n,o,c){n=e.memoizedState,o=o(c,n),o=o==null?n:H({},n,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var ns={isMounted:function(e){return(e=e._reactInternals)?Lr(e)===e:!1},enqueueSetState:function(e,n,o){e=e._reactInternals;var c=zt(),u=fr(e),p=qn(c,u);p.payload=n,o!=null&&(p.callback=o),n=dr(e,p,u),n!==null&&(wn(n,e,u,c),Yi(n,e,u))},enqueueReplaceState:function(e,n,o){e=e._reactInternals;var c=zt(),u=fr(e),p=qn(c,u);p.tag=1,p.payload=n,o!=null&&(p.callback=o),n=dr(e,p,u),n!==null&&(wn(n,e,u,c),Yi(n,e,u))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var o=zt(),c=fr(e),u=qn(o,c);u.tag=2,n!=null&&(u.callback=n),n=dr(e,u,c),n!==null&&(wn(n,e,c,o),Yi(n,e,c))}};function Rh(e,n,o,c,u,p,w){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(c,p,w):n.prototype&&n.prototype.isPureReactComponent?!ka(o,c)||!ka(u,p):!0}function $h(e,n,o){var c=!1,u=sr,p=n.contextType;return typeof p=="object"&&p!==null?p=ln(p):(u=Ft(n)?$r:Nt.current,c=n.contextTypes,p=(c=c!=null)?wo(e,u):sr),n=new n(o,p),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ns,e.stateNode=n,n._reactInternals=e,c&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=p),n}function Th(e,n,o,c){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,c),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,c),n.state!==e&&ns.enqueueReplaceState(n,n.state,null)}function Cc(e,n,o,c){var u=e.stateNode;u.props=o,u.state=e.memoizedState,u.refs={},dc(e);var p=n.contextType;typeof p=="object"&&p!==null?u.context=ln(p):(p=Ft(n)?$r:Nt.current,u.context=wo(e,p)),u.state=e.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(_c(e,n,p,o),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&ns.enqueueReplaceState(u,u.state,null),Qi(e,o,u,c),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Mo(e,n){try{var o="",c=n;do o+=ee(c),c=c.return;while(c);var u=o}catch(p){u=`
Error generating stack: `+p.message+`
`+p.stack}return{value:e,source:n,stack:u,digest:null}}function jc(e,n,o){return{value:e,source:null,stack:o??null,digest:n??null}}function Sc(e,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var Ev=typeof WeakMap=="function"?WeakMap:Map;function Ah(e,n,o){o=qn(-1,o),o.tag=3,o.payload={element:null};var c=n.value;return o.callback=function(){cs||(cs=!0,Fc=c),Sc(e,n)},o}function Ih(e,n,o){o=qn(-1,o),o.tag=3;var c=e.type.getDerivedStateFromError;if(typeof c=="function"){var u=n.value;o.payload=function(){return c(u)},o.callback=function(){Sc(e,n)}}var p=e.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Sc(e,n),typeof c!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var w=n.stack;this.componentDidCatch(n.value,{componentStack:w!==null?w:""})}),o}function Eh(e,n,o){var c=e.pingCache;if(c===null){c=e.pingCache=new Ev;var u=new Set;c.set(n,u)}else u=c.get(n),u===void 0&&(u=new Set,c.set(n,u));u.has(o)||(u.add(o),e=Qv.bind(null,e,n,o),n.then(e,e))}function Ph(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function zh(e,n,o,c,u){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=qn(-1,1),n.tag=2,dr(o,n,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var Pv=A.ReactCurrentOwner,Wt=!1;function Pt(e,n,o,c){n.child=e===null?rh(n,null,o,c):Co(n,e.child,o,c)}function Oh(e,n,o,c,u){o=o.render;var p=n.ref;return So(n,u),c=vc(e,n,o,c,p,u),o=xc(),e!==null&&!Wt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,Vn(e,n,u)):(nt&&o&&ec(n),n.flags|=1,Pt(e,n,c,u),n.child)}function Dh(e,n,o,c,u){if(e===null){var p=o.type;return typeof p=="function"&&!Yc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=p,Bh(e,n,p,c,u)):(e=ms(o.type,null,c,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(p=e.child,(e.lanes&u)===0){var w=p.memoizedProps;if(o=o.compare,o=o!==null?o:ka,o(w,c)&&e.ref===n.ref)return Vn(e,n,u)}return n.flags|=1,e=gr(p,c),e.ref=n.ref,e.return=n,n.child=e}function Bh(e,n,o,c,u){if(e!==null){var p=e.memoizedProps;if(ka(p,c)&&e.ref===n.ref)if(Wt=!1,n.pendingProps=c=p,(e.lanes&u)!==0)(e.flags&131072)!==0&&(Wt=!0);else return n.lanes=e.lanes,Vn(e,n,u)}return Nc(e,n,o,c,u)}function Fh(e,n,o){var c=n.pendingProps,u=c.children,p=e!==null?e.memoizedState:null;if(c.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Ro,Xt),Xt|=o;else{if((o&1073741824)===0)return e=p!==null?p.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Ke(Ro,Xt),Xt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,Ke(Ro,Xt),Xt|=c}else p!==null?(c=p.baseLanes|o,n.memoizedState=null):c=o,Ke(Ro,Xt),Xt|=c;return Pt(e,n,u,o),n.child}function Wh(e,n){var o=n.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function Nc(e,n,o,c,u){var p=Ft(o)?$r:Nt.current;return p=wo(n,p),So(n,u),o=vc(e,n,o,c,p,u),c=xc(),e!==null&&!Wt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,Vn(e,n,u)):(nt&&c&&ec(n),n.flags|=1,Pt(e,n,o,u),n.child)}function Hh(e,n,o,c,u){if(Ft(o)){var p=!0;Bi(n)}else p=!1;if(So(n,u),n.stateNode===null)os(e,n),$h(n,o,c),Cc(n,o,c,u),c=!0;else if(e===null){var w=n.stateNode,P=n.memoizedProps;w.props=P;var D=w.context,J=o.contextType;typeof J=="object"&&J!==null?J=ln(J):(J=Ft(o)?$r:Nt.current,J=wo(n,J));var le=o.getDerivedStateFromProps,de=typeof le=="function"||typeof w.getSnapshotBeforeUpdate=="function";de||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(P!==c||D!==J)&&Th(n,w,c,J),cr=!1;var se=n.memoizedState;w.state=se,Qi(n,c,w,u),D=n.memoizedState,P!==c||se!==D||Bt.current||cr?(typeof le=="function"&&(_c(n,o,le,c),D=n.memoizedState),(P=cr||Rh(n,o,P,c,se,D,J))?(de||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(n.flags|=4194308)):(typeof w.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=c,n.memoizedState=D),w.props=c,w.state=D,w.context=J,c=P):(typeof w.componentDidMount=="function"&&(n.flags|=4194308),c=!1)}else{w=n.stateNode,ah(e,n),P=n.memoizedProps,J=n.type===n.elementType?P:vn(n.type,P),w.props=J,de=n.pendingProps,se=w.context,D=o.contextType,typeof D=="object"&&D!==null?D=ln(D):(D=Ft(o)?$r:Nt.current,D=wo(n,D));var fe=o.getDerivedStateFromProps;(le=typeof fe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(P!==de||se!==D)&&Th(n,w,c,D),cr=!1,se=n.memoizedState,w.state=se,Qi(n,c,w,u);var xe=n.memoizedState;P!==de||se!==xe||Bt.current||cr?(typeof fe=="function"&&(_c(n,o,fe,c),xe=n.memoizedState),(J=cr||Rh(n,o,J,c,se,xe,D)||!1)?(le||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,xe,D),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,xe,D)),typeof w.componentDidUpdate=="function"&&(n.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof w.componentDidUpdate!="function"||P===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||P===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),n.memoizedProps=c,n.memoizedState=xe),w.props=c,w.state=xe,w.context=D,c=J):(typeof w.componentDidUpdate!="function"||P===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||P===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),c=!1)}return Mc(e,n,o,c,p,u)}function Mc(e,n,o,c,u,p){Wh(e,n);var w=(n.flags&128)!==0;if(!c&&!w)return u&&Y1(n,o,!1),Vn(e,n,p);c=n.stateNode,Pv.current=n;var P=w&&typeof o.getDerivedStateFromError!="function"?null:c.render();return n.flags|=1,e!==null&&w?(n.child=Co(n,e.child,null,p),n.child=Co(n,null,P,p)):Pt(e,n,P,p),n.memoizedState=c.state,u&&Y1(n,o,!0),n.child}function Uh(e){var n=e.stateNode;n.pendingContext?V1(e,n.pendingContext,n.pendingContext!==n.context):n.context&&V1(e,n.context,!1),uc(e,n.containerInfo)}function qh(e,n,o,c,u){return _o(),oc(u),n.flags|=256,Pt(e,n,o,c),n.child}var Lc={dehydrated:null,treeContext:null,retryLane:0};function Rc(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vh(e,n,o){var c=n.pendingProps,u=rt.current,p=!1,w=(n.flags&128)!==0,P;if((P=w)||(P=e!==null&&e.memoizedState===null?!1:(u&2)!==0),P?(p=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),Ke(rt,u&1),e===null)return rc(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(w=c.children,e=c.fallback,p?(c=n.mode,p=n.child,w={mode:"hidden",children:w},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=w):p=gs(w,c,0,null),e=Fr(e,c,o,null),p.return=n,e.return=n,p.sibling=e,n.child=p,n.child.memoizedState=Rc(o),n.memoizedState=Lc,e):$c(n,w));if(u=e.memoizedState,u!==null&&(P=u.dehydrated,P!==null))return zv(e,n,w,c,P,u,o);if(p){p=c.fallback,w=n.mode,u=e.child,P=u.sibling;var D={mode:"hidden",children:c.children};return(w&1)===0&&n.child!==u?(c=n.child,c.childLanes=0,c.pendingProps=D,n.deletions=null):(c=gr(u,D),c.subtreeFlags=u.subtreeFlags&14680064),P!==null?p=gr(P,p):(p=Fr(p,w,o,null),p.flags|=2),p.return=n,c.return=n,c.sibling=p,n.child=c,c=p,p=n.child,w=e.child.memoizedState,w=w===null?Rc(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},p.memoizedState=w,p.childLanes=e.childLanes&~o,n.memoizedState=Lc,c}return p=e.child,e=p.sibling,c=gr(p,{mode:"visible",children:c.children}),(n.mode&1)===0&&(c.lanes=o),c.return=n,c.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=c,n.memoizedState=null,c}function $c(e,n){return n=gs({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function rs(e,n,o,c){return c!==null&&oc(c),Co(n,e.child,null,o),e=$c(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function zv(e,n,o,c,u,p,w){if(o)return n.flags&256?(n.flags&=-257,c=jc(Error(i(422))),rs(e,n,w,c)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(p=c.fallback,u=n.mode,c=gs({mode:"visible",children:c.children},u,0,null),p=Fr(p,u,w,null),p.flags|=2,c.return=n,p.return=n,c.sibling=p,n.child=c,(n.mode&1)!==0&&Co(n,e.child,null,w),n.child.memoizedState=Rc(w),n.memoizedState=Lc,p);if((n.mode&1)===0)return rs(e,n,w,null);if(u.data==="$!"){if(c=u.nextSibling&&u.nextSibling.dataset,c)var P=c.dgst;return c=P,p=Error(i(419)),c=jc(p,c,void 0),rs(e,n,w,c)}if(P=(w&e.childLanes)!==0,Wt||P){if(c=xt,c!==null){switch(w&-w){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(c.suspendedLanes|w))!==0?0:u,u!==0&&u!==p.retryLane&&(p.retryLane=u,Un(e,u),wn(c,e,u,-1))}return Gc(),c=jc(Error(i(421))),rs(e,n,w,c)}return u.data==="$?"?(n.flags|=128,n.child=e.child,n=Kv.bind(null,e),u._reactRetry=n,null):(e=p.treeContext,Zt=ar(u.nextSibling),Kt=n,nt=!0,gn=null,e!==null&&(an[sn++]=Wn,an[sn++]=Hn,an[sn++]=Tr,Wn=e.id,Hn=e.overflow,Tr=n),n=$c(n,c.children),n.flags|=4096,n)}function Gh(e,n,o){e.lanes|=n;var c=e.alternate;c!==null&&(c.lanes|=n),lc(e.return,n,o)}function Tc(e,n,o,c,u){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:u}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=u)}function Yh(e,n,o){var c=n.pendingProps,u=c.revealOrder,p=c.tail;if(Pt(e,n,c.children,o),c=rt.current,(c&2)!==0)c=c&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gh(e,o,n);else if(e.tag===19)Gh(e,o,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}c&=1}if(Ke(rt,c),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(o=n.child,u=null;o!==null;)e=o.alternate,e!==null&&Ki(e)===null&&(u=o),o=o.sibling;o=u,o===null?(u=n.child,n.child=null):(u=o.sibling,o.sibling=null),Tc(n,!1,u,o,p);break;case"backwards":for(o=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ki(e)===null){n.child=u;break}e=u.sibling,u.sibling=o,o=u,u=e}Tc(n,!0,o,null,p);break;case"together":Tc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function os(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Vn(e,n,o){if(e!==null&&(n.dependencies=e.dependencies),zr|=n.lanes,(o&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,o=gr(e,e.pendingProps),n.child=o,o.return=n;e.sibling!==null;)e=e.sibling,o=o.sibling=gr(e,e.pendingProps),o.return=n;o.sibling=null}return n.child}function Ov(e,n,o){switch(n.tag){case 3:Uh(n),_o();break;case 5:lh(n);break;case 1:Ft(n.type)&&Bi(n);break;case 4:uc(n,n.stateNode.containerInfo);break;case 10:var c=n.type._context,u=n.memoizedProps.value;Ke(Vi,c._currentValue),c._currentValue=u;break;case 13:if(c=n.memoizedState,c!==null)return c.dehydrated!==null?(Ke(rt,rt.current&1),n.flags|=128,null):(o&n.child.childLanes)!==0?Vh(e,n,o):(Ke(rt,rt.current&1),e=Vn(e,n,o),e!==null?e.sibling:null);Ke(rt,rt.current&1);break;case 19:if(c=(o&n.childLanes)!==0,(e.flags&128)!==0){if(c)return Yh(e,n,o);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ke(rt,rt.current),c)break;return null;case 22:case 23:return n.lanes=0,Fh(e,n,o)}return Vn(e,n,o)}var Qh,Ac,Kh,Zh;Qh=function(e,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ac=function(){},Kh=function(e,n,o,c){var u=e.memoizedProps;if(u!==c){e=n.stateNode,Er(Rn.current);var p=null;switch(o){case"input":u=je(e,u),c=je(e,c),p=[];break;case"select":u=H({},u,{value:void 0}),c=H({},c,{value:void 0}),p=[];break;case"textarea":u=At(e,u),c=At(e,c),p=[];break;default:typeof u.onClick!="function"&&typeof c.onClick=="function"&&(e.onclick=zi)}dt(o,c);var w;o=null;for(J in u)if(!c.hasOwnProperty(J)&&u.hasOwnProperty(J)&&u[J]!=null)if(J==="style"){var P=u[J];for(w in P)P.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(l.hasOwnProperty(J)?p||(p=[]):(p=p||[]).push(J,null));for(J in c){var D=c[J];if(P=u!=null?u[J]:void 0,c.hasOwnProperty(J)&&D!==P&&(D!=null||P!=null))if(J==="style")if(P){for(w in P)!P.hasOwnProperty(w)||D&&D.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in D)D.hasOwnProperty(w)&&P[w]!==D[w]&&(o||(o={}),o[w]=D[w])}else o||(p||(p=[]),p.push(J,o)),o=D;else J==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,P=P?P.__html:void 0,D!=null&&P!==D&&(p=p||[]).push(J,D)):J==="children"?typeof D!="string"&&typeof D!="number"||(p=p||[]).push(J,""+D):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(l.hasOwnProperty(J)?(D!=null&&J==="onScroll"&&Xe("scroll",e),p||P===D||(p=[])):(p=p||[]).push(J,D))}o&&(p=p||[]).push("style",o);var J=p;(n.updateQueue=J)&&(n.flags|=4)}},Zh=function(e,n,o,c){o!==c&&(n.flags|=4)};function za(e,n){if(!nt)switch(e.tailMode){case"hidden":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:c.sibling=null}}function Lt(e){var n=e.alternate!==null&&e.alternate.child===e.child,o=0,c=0;if(n)for(var u=e.child;u!==null;)o|=u.lanes|u.childLanes,c|=u.subtreeFlags&14680064,c|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)o|=u.lanes|u.childLanes,c|=u.subtreeFlags,c|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=c,e.childLanes=o,n}function Dv(e,n,o){var c=n.pendingProps;switch(tc(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(n),null;case 1:return Ft(n.type)&&Di(),Lt(n),null;case 3:return c=n.stateNode,No(),Je(Bt),Je(Nt),fc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(e===null||e.child===null)&&(Ui(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gn!==null&&(Uc(gn),gn=null))),Ac(e,n),Lt(n),null;case 5:hc(n);var u=Er(Ta.current);if(o=n.type,e!==null&&n.stateNode!=null)Kh(e,n,o,c,u),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!c){if(n.stateNode===null)throw Error(i(166));return Lt(n),null}if(e=Er(Rn.current),Ui(n)){c=n.stateNode,o=n.type;var p=n.memoizedProps;switch(c[Ln]=n,c[Na]=p,e=(n.mode&1)!==0,o){case"dialog":Xe("cancel",c),Xe("close",c);break;case"iframe":case"object":case"embed":Xe("load",c);break;case"video":case"audio":for(u=0;u<Ca.length;u++)Xe(Ca[u],c);break;case"source":Xe("error",c);break;case"img":case"image":case"link":Xe("error",c),Xe("load",c);break;case"details":Xe("toggle",c);break;case"input":$e(c,p),Xe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Xe("invalid",c);break;case"textarea":We(c,p),Xe("invalid",c)}dt(o,p),u=null;for(var w in p)if(p.hasOwnProperty(w)){var P=p[w];w==="children"?typeof P=="string"?c.textContent!==P&&(p.suppressHydrationWarning!==!0&&Pi(c.textContent,P,e),u=["children",P]):typeof P=="number"&&c.textContent!==""+P&&(p.suppressHydrationWarning!==!0&&Pi(c.textContent,P,e),u=["children",""+P]):l.hasOwnProperty(w)&&P!=null&&w==="onScroll"&&Xe("scroll",c)}switch(o){case"input":pe(c),Ge(c,p,!0);break;case"textarea":pe(c),Ct(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=zi)}c=u,n.updateQueue=c,c!==null&&(n.flags|=4)}else{w=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sn(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=w.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof c.is=="string"?e=w.createElement(o,{is:c.is}):(e=w.createElement(o),o==="select"&&(w=e,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):e=w.createElementNS(e,o),e[Ln]=n,e[Na]=c,Qh(e,n,!1,!1),n.stateNode=e;e:{switch(w=Et(o,c),o){case"dialog":Xe("cancel",e),Xe("close",e),u=c;break;case"iframe":case"object":case"embed":Xe("load",e),u=c;break;case"video":case"audio":for(u=0;u<Ca.length;u++)Xe(Ca[u],e);u=c;break;case"source":Xe("error",e),u=c;break;case"img":case"image":case"link":Xe("error",e),Xe("load",e),u=c;break;case"details":Xe("toggle",e),u=c;break;case"input":$e(e,c),u=je(e,c),Xe("invalid",e);break;case"option":u=c;break;case"select":e._wrapperState={wasMultiple:!!c.multiple},u=H({},c,{value:void 0}),Xe("invalid",e);break;case"textarea":We(e,c),u=At(e,c),Xe("invalid",e);break;default:u=c}dt(o,u),P=u;for(p in P)if(P.hasOwnProperty(p)){var D=P[p];p==="style"?Me(e,D):p==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&oa(e,D)):p==="children"?typeof D=="string"?(o!=="textarea"||D!=="")&&so(e,D):typeof D=="number"&&so(e,""+D):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(l.hasOwnProperty(p)?D!=null&&p==="onScroll"&&Xe("scroll",e):D!=null&&N(e,p,D,w))}switch(o){case"input":pe(e),Ge(e,c,!1);break;case"textarea":pe(e),Ct(e);break;case"option":c.value!=null&&e.setAttribute("value",""+B(c.value));break;case"select":e.multiple=!!c.multiple,p=c.value,p!=null?Ye(e,!!c.multiple,p,!1):c.defaultValue!=null&&Ye(e,!!c.multiple,c.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=zi)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Lt(n),null;case 6:if(e&&n.stateNode!=null)Zh(e,n,e.memoizedProps,c);else{if(typeof c!="string"&&n.stateNode===null)throw Error(i(166));if(o=Er(Ta.current),Er(Rn.current),Ui(n)){if(c=n.stateNode,o=n.memoizedProps,c[Ln]=n,(p=c.nodeValue!==o)&&(e=Kt,e!==null))switch(e.tag){case 3:Pi(c.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pi(c.nodeValue,o,(e.mode&1)!==0)}p&&(n.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Ln]=n,n.stateNode=c}return Lt(n),null;case 13:if(Je(rt),c=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(nt&&Zt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)eh(),_o(),n.flags|=98560,p=!1;else if(p=Ui(n),c!==null&&c.dehydrated!==null){if(e===null){if(!p)throw Error(i(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[Ln]=n}else _o(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Lt(n),p=!1}else gn!==null&&(Uc(gn),gn=null),p=!0;if(!p)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=o,n):(c=c!==null,c!==(e!==null&&e.memoizedState!==null)&&c&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(rt.current&1)!==0?mt===0&&(mt=3):Gc())),n.updateQueue!==null&&(n.flags|=4),Lt(n),null);case 4:return No(),Ac(e,n),e===null&&ja(n.stateNode.containerInfo),Lt(n),null;case 10:return sc(n.type._context),Lt(n),null;case 17:return Ft(n.type)&&Di(),Lt(n),null;case 19:if(Je(rt),p=n.memoizedState,p===null)return Lt(n),null;if(c=(n.flags&128)!==0,w=p.rendering,w===null)if(c)za(p,!1);else{if(mt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(w=Ki(e),w!==null){for(n.flags|=128,za(p,!1),c=w.updateQueue,c!==null&&(n.updateQueue=c,n.flags|=4),n.subtreeFlags=0,c=o,o=n.child;o!==null;)p=o,e=c,p.flags&=14680066,w=p.alternate,w===null?(p.childLanes=0,p.lanes=e,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=w.childLanes,p.lanes=w.lanes,p.child=w.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=w.memoizedProps,p.memoizedState=w.memoizedState,p.updateQueue=w.updateQueue,p.type=w.type,e=w.dependencies,p.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return Ke(rt,rt.current&1|2),n.child}e=e.sibling}p.tail!==null&&it()>$o&&(n.flags|=128,c=!0,za(p,!1),n.lanes=4194304)}else{if(!c)if(e=Ki(w),e!==null){if(n.flags|=128,c=!0,o=e.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),za(p,!0),p.tail===null&&p.tailMode==="hidden"&&!w.alternate&&!nt)return Lt(n),null}else 2*it()-p.renderingStartTime>$o&&o!==1073741824&&(n.flags|=128,c=!0,za(p,!1),n.lanes=4194304);p.isBackwards?(w.sibling=n.child,n.child=w):(o=p.last,o!==null?o.sibling=w:n.child=w,p.last=w)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=it(),n.sibling=null,o=rt.current,Ke(rt,c?o&1|2:o&1),n):(Lt(n),null);case 22:case 23:return Vc(),c=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==c&&(n.flags|=8192),c&&(n.mode&1)!==0?(Xt&1073741824)!==0&&(Lt(n),n.subtreeFlags&6&&(n.flags|=8192)):Lt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function Bv(e,n){switch(tc(n),n.tag){case 1:return Ft(n.type)&&Di(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return No(),Je(Bt),Je(Nt),fc(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return hc(n),null;case 13:if(Je(rt),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));_o()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Je(rt),null;case 4:return No(),null;case 10:return sc(n.type._context),null;case 22:case 23:return Vc(),null;case 24:return null;default:return null}}var as=!1,Rt=!1,Fv=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Lo(e,n){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){at(e,n,c)}else o.current=null}function Ic(e,n,o){try{o()}catch(c){at(e,n,c)}}var Xh=!1;function Wv(e,n){if(Vl=ji,e=R1(),Ol(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var u=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var w=0,P=-1,D=-1,J=0,le=0,de=e,se=null;t:for(;;){for(var fe;de!==o||u!==0&&de.nodeType!==3||(P=w+u),de!==p||c!==0&&de.nodeType!==3||(D=w+c),de.nodeType===3&&(w+=de.nodeValue.length),(fe=de.firstChild)!==null;)se=de,de=fe;for(;;){if(de===e)break t;if(se===o&&++J===u&&(P=w),se===p&&++le===c&&(D=w),(fe=de.nextSibling)!==null)break;de=se,se=de.parentNode}de=fe}o=P===-1||D===-1?null:{start:P,end:D}}else o=null}o=o||{start:0,end:0}}else o=null;for(Gl={focusedElem:e,selectionRange:o},ji=!1,ge=n;ge!==null;)if(n=ge,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ge=e;else for(;ge!==null;){n=ge;try{var xe=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(xe!==null){var ye=xe.memoizedProps,st=xe.memoizedState,V=n.stateNode,F=V.getSnapshotBeforeUpdate(n.elementType===n.type?ye:vn(n.type,ye),st);V.__reactInternalSnapshotBeforeUpdate=F}break;case 3:var Y=n.stateNode.containerInfo;Y.nodeType===1?Y.textContent="":Y.nodeType===9&&Y.documentElement&&Y.removeChild(Y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(he){at(n,n.return,he)}if(e=n.sibling,e!==null){e.return=n.return,ge=e;break}ge=n.return}return xe=Xh,Xh=!1,xe}function Oa(e,n,o){var c=n.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var u=c=c.next;do{if((u.tag&e)===e){var p=u.destroy;u.destroy=void 0,p!==void 0&&Ic(n,o,p)}u=u.next}while(u!==c)}}function is(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var c=o.create;o.destroy=c()}o=o.next}while(o!==n)}}function Ec(e){var n=e.ref;if(n!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof n=="function"?n(e):n.current=e}}function Jh(e){var n=e.alternate;n!==null&&(e.alternate=null,Jh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ln],delete n[Na],delete n[Zl],delete n[Cv],delete n[jv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ep(e){return e.tag===5||e.tag===3||e.tag===4}function tp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pc(e,n,o){var c=e.tag;if(c===5||c===6)e=e.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(e,n):o.insertBefore(e,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(e,o)):(n=o,n.appendChild(e)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=zi));else if(c!==4&&(e=e.child,e!==null))for(Pc(e,n,o),e=e.sibling;e!==null;)Pc(e,n,o),e=e.sibling}function zc(e,n,o){var c=e.tag;if(c===5||c===6)e=e.stateNode,n?o.insertBefore(e,n):o.appendChild(e);else if(c!==4&&(e=e.child,e!==null))for(zc(e,n,o),e=e.sibling;e!==null;)zc(e,n,o),e=e.sibling}var jt=null,xn=!1;function ur(e,n,o){for(o=o.child;o!==null;)np(e,n,o),o=o.sibling}function np(e,n,o){if(Mn&&typeof Mn.onCommitFiberUnmount=="function")try{Mn.onCommitFiberUnmount(yi,o)}catch{}switch(o.tag){case 5:Rt||Lo(o,n);case 6:var c=jt,u=xn;jt=null,ur(e,n,o),jt=c,xn=u,jt!==null&&(xn?(e=jt,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):jt.removeChild(o.stateNode));break;case 18:jt!==null&&(xn?(e=jt,o=o.stateNode,e.nodeType===8?Kl(e.parentNode,o):e.nodeType===1&&Kl(e,o),ga(e)):Kl(jt,o.stateNode));break;case 4:c=jt,u=xn,jt=o.stateNode.containerInfo,xn=!0,ur(e,n,o),jt=c,xn=u;break;case 0:case 11:case 14:case 15:if(!Rt&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){u=c=c.next;do{var p=u,w=p.destroy;p=p.tag,w!==void 0&&((p&2)!==0||(p&4)!==0)&&Ic(o,n,w),u=u.next}while(u!==c)}ur(e,n,o);break;case 1:if(!Rt&&(Lo(o,n),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(P){at(o,n,P)}ur(e,n,o);break;case 21:ur(e,n,o);break;case 22:o.mode&1?(Rt=(c=Rt)||o.memoizedState!==null,ur(e,n,o),Rt=c):ur(e,n,o);break;default:ur(e,n,o)}}function rp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new Fv),n.forEach(function(c){var u=Zv.bind(null,e,c);o.has(c)||(o.add(c),c.then(u,u))})}}function yn(e,n){var o=n.deletions;if(o!==null)for(var c=0;c<o.length;c++){var u=o[c];try{var p=e,w=n,P=w;e:for(;P!==null;){switch(P.tag){case 5:jt=P.stateNode,xn=!1;break e;case 3:jt=P.stateNode.containerInfo,xn=!0;break e;case 4:jt=P.stateNode.containerInfo,xn=!0;break e}P=P.return}if(jt===null)throw Error(i(160));np(p,w,u),jt=null,xn=!1;var D=u.alternate;D!==null&&(D.return=null),u.return=null}catch(J){at(u,n,J)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)op(n,e),n=n.sibling}function op(e,n){var o=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(yn(n,e),Tn(e),c&4){try{Oa(3,e,e.return),is(3,e)}catch(ye){at(e,e.return,ye)}try{Oa(5,e,e.return)}catch(ye){at(e,e.return,ye)}}break;case 1:yn(n,e),Tn(e),c&512&&o!==null&&Lo(o,o.return);break;case 5:if(yn(n,e),Tn(e),c&512&&o!==null&&Lo(o,o.return),e.flags&32){var u=e.stateNode;try{so(u,"")}catch(ye){at(e,e.return,ye)}}if(c&4&&(u=e.stateNode,u!=null)){var p=e.memoizedProps,w=o!==null?o.memoizedProps:p,P=e.type,D=e.updateQueue;if(e.updateQueue=null,D!==null)try{P==="input"&&p.type==="radio"&&p.name!=null&&Fe(u,p),Et(P,w);var J=Et(P,p);for(w=0;w<D.length;w+=2){var le=D[w],de=D[w+1];le==="style"?Me(u,de):le==="dangerouslySetInnerHTML"?oa(u,de):le==="children"?so(u,de):N(u,le,de,J)}switch(P){case"input":qe(u,p);break;case"textarea":It(u,p);break;case"select":var se=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!p.multiple;var fe=p.value;fe!=null?Ye(u,!!p.multiple,fe,!1):se!==!!p.multiple&&(p.defaultValue!=null?Ye(u,!!p.multiple,p.defaultValue,!0):Ye(u,!!p.multiple,p.multiple?[]:"",!1))}u[Na]=p}catch(ye){at(e,e.return,ye)}}break;case 6:if(yn(n,e),Tn(e),c&4){if(e.stateNode===null)throw Error(i(162));u=e.stateNode,p=e.memoizedProps;try{u.nodeValue=p}catch(ye){at(e,e.return,ye)}}break;case 3:if(yn(n,e),Tn(e),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ga(n.containerInfo)}catch(ye){at(e,e.return,ye)}break;case 4:yn(n,e),Tn(e);break;case 13:yn(n,e),Tn(e),u=e.child,u.flags&8192&&(p=u.memoizedState!==null,u.stateNode.isHidden=p,!p||u.alternate!==null&&u.alternate.memoizedState!==null||(Bc=it())),c&4&&rp(e);break;case 22:if(le=o!==null&&o.memoizedState!==null,e.mode&1?(Rt=(J=Rt)||le,yn(n,e),Rt=J):yn(n,e),Tn(e),c&8192){if(J=e.memoizedState!==null,(e.stateNode.isHidden=J)&&!le&&(e.mode&1)!==0)for(ge=e,le=e.child;le!==null;){for(de=ge=le;ge!==null;){switch(se=ge,fe=se.child,se.tag){case 0:case 11:case 14:case 15:Oa(4,se,se.return);break;case 1:Lo(se,se.return);var xe=se.stateNode;if(typeof xe.componentWillUnmount=="function"){c=se,o=se.return;try{n=c,xe.props=n.memoizedProps,xe.state=n.memoizedState,xe.componentWillUnmount()}catch(ye){at(c,o,ye)}}break;case 5:Lo(se,se.return);break;case 22:if(se.memoizedState!==null){sp(de);continue}}fe!==null?(fe.return=se,ge=fe):sp(de)}le=le.sibling}e:for(le=null,de=e;;){if(de.tag===5){if(le===null){le=de;try{u=de.stateNode,J?(p=u.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(P=de.stateNode,D=de.memoizedProps.style,w=D!=null&&D.hasOwnProperty("display")?D.display:null,P.style.display=mi("display",w))}catch(ye){at(e,e.return,ye)}}}else if(de.tag===6){if(le===null)try{de.stateNode.nodeValue=J?"":de.memoizedProps}catch(ye){at(e,e.return,ye)}}else if((de.tag!==22&&de.tag!==23||de.memoizedState===null||de===e)&&de.child!==null){de.child.return=de,de=de.child;continue}if(de===e)break e;for(;de.sibling===null;){if(de.return===null||de.return===e)break e;le===de&&(le=null),de=de.return}le===de&&(le=null),de.sibling.return=de.return,de=de.sibling}}break;case 19:yn(n,e),Tn(e),c&4&&rp(e);break;case 21:break;default:yn(n,e),Tn(e)}}function Tn(e){var n=e.flags;if(n&2){try{e:{for(var o=e.return;o!==null;){if(ep(o)){var c=o;break e}o=o.return}throw Error(i(160))}switch(c.tag){case 5:var u=c.stateNode;c.flags&32&&(so(u,""),c.flags&=-33);var p=tp(e);zc(e,p,u);break;case 3:case 4:var w=c.stateNode.containerInfo,P=tp(e);Pc(e,P,w);break;default:throw Error(i(161))}}catch(D){at(e,e.return,D)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Hv(e,n,o){ge=e,ap(e)}function ap(e,n,o){for(var c=(e.mode&1)!==0;ge!==null;){var u=ge,p=u.child;if(u.tag===22&&c){var w=u.memoizedState!==null||as;if(!w){var P=u.alternate,D=P!==null&&P.memoizedState!==null||Rt;P=as;var J=Rt;if(as=w,(Rt=D)&&!J)for(ge=u;ge!==null;)w=ge,D=w.child,w.tag===22&&w.memoizedState!==null?lp(u):D!==null?(D.return=w,ge=D):lp(u);for(;p!==null;)ge=p,ap(p),p=p.sibling;ge=u,as=P,Rt=J}ip(e)}else(u.subtreeFlags&8772)!==0&&p!==null?(p.return=u,ge=p):ip(e)}}function ip(e){for(;ge!==null;){var n=ge;if((n.flags&8772)!==0){var o=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Rt||is(5,n);break;case 1:var c=n.stateNode;if(n.flags&4&&!Rt)if(o===null)c.componentDidMount();else{var u=n.elementType===n.type?o.memoizedProps:vn(n.type,o.memoizedProps);c.componentDidUpdate(u,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&sh(n,p,c);break;case 3:var w=n.updateQueue;if(w!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}sh(n,w,o)}break;case 5:var P=n.stateNode;if(o===null&&n.flags&4){o=P;var D=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&o.focus();break;case"img":D.src&&(o.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var J=n.alternate;if(J!==null){var le=J.memoizedState;if(le!==null){var de=le.dehydrated;de!==null&&ga(de)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Rt||n.flags&512&&Ec(n)}catch(se){at(n,n.return,se)}}if(n===e){ge=null;break}if(o=n.sibling,o!==null){o.return=n.return,ge=o;break}ge=n.return}}function sp(e){for(;ge!==null;){var n=ge;if(n===e){ge=null;break}var o=n.sibling;if(o!==null){o.return=n.return,ge=o;break}ge=n.return}}function lp(e){for(;ge!==null;){var n=ge;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{is(4,n)}catch(D){at(n,o,D)}break;case 1:var c=n.stateNode;if(typeof c.componentDidMount=="function"){var u=n.return;try{c.componentDidMount()}catch(D){at(n,u,D)}}var p=n.return;try{Ec(n)}catch(D){at(n,p,D)}break;case 5:var w=n.return;try{Ec(n)}catch(D){at(n,w,D)}}}catch(D){at(n,n.return,D)}if(n===e){ge=null;break}var P=n.sibling;if(P!==null){P.return=n.return,ge=P;break}ge=n.return}}var Uv=Math.ceil,ss=A.ReactCurrentDispatcher,Oc=A.ReactCurrentOwner,dn=A.ReactCurrentBatchConfig,ze=0,xt=null,ut=null,St=0,Xt=0,Ro=ir(0),mt=0,Da=null,zr=0,ls=0,Dc=0,Ba=null,Ht=null,Bc=0,$o=1/0,Gn=null,cs=!1,Fc=null,hr=null,ds=!1,pr=null,us=0,Fa=0,Wc=null,hs=-1,ps=0;function zt(){return(ze&6)!==0?it():hs!==-1?hs:hs=it()}function fr(e){return(e.mode&1)===0?1:(ze&2)!==0&&St!==0?St&-St:Nv.transition!==null?(ps===0&&(ps=t1()),ps):(e=He,e!==0||(e=window.event,e=e===void 0?16:d1(e.type)),e)}function wn(e,n,o,c){if(50<Fa)throw Fa=0,Wc=null,Error(i(185));ua(e,o,c),((ze&2)===0||e!==xt)&&(e===xt&&((ze&2)===0&&(ls|=o),mt===4&&mr(e,St)),Ut(e,c),o===1&&ze===0&&(n.mode&1)===0&&($o=it()+500,Fi&&lr()))}function Ut(e,n){var o=e.callbackNode;Ng(e,n);var c=ki(e,e===xt?St:0);if(c===0)o!==null&&Xu(o),e.callbackNode=null,e.callbackPriority=0;else if(n=c&-c,e.callbackPriority!==n){if(o!=null&&Xu(o),n===1)e.tag===0?Sv(dp.bind(null,e)):Q1(dp.bind(null,e)),kv(function(){(ze&6)===0&&lr()}),o=null;else{switch(n1(c)){case 1:o=bl;break;case 4:o=Ju;break;case 16:o=xi;break;case 536870912:o=e1;break;default:o=xi}o=xp(o,cp.bind(null,e))}e.callbackPriority=n,e.callbackNode=o}}function cp(e,n){if(hs=-1,ps=0,(ze&6)!==0)throw Error(i(327));var o=e.callbackNode;if(To()&&e.callbackNode!==o)return null;var c=ki(e,e===xt?St:0);if(c===0)return null;if((c&30)!==0||(c&e.expiredLanes)!==0||n)n=fs(e,c);else{n=c;var u=ze;ze|=2;var p=hp();(xt!==e||St!==n)&&(Gn=null,$o=it()+500,Dr(e,n));do try{Gv();break}catch(P){up(e,P)}while(!0);ic(),ss.current=p,ze=u,ut!==null?n=0:(xt=null,St=0,n=mt)}if(n!==0){if(n===2&&(u=kl(e),u!==0&&(c=u,n=Hc(e,u))),n===1)throw o=Da,Dr(e,0),mr(e,c),Ut(e,it()),o;if(n===6)mr(e,c);else{if(u=e.current.alternate,(c&30)===0&&!qv(u)&&(n=fs(e,c),n===2&&(p=kl(e),p!==0&&(c=p,n=Hc(e,p))),n===1))throw o=Da,Dr(e,0),mr(e,c),Ut(e,it()),o;switch(e.finishedWork=u,e.finishedLanes=c,n){case 0:case 1:throw Error(i(345));case 2:Br(e,Ht,Gn);break;case 3:if(mr(e,c),(c&130023424)===c&&(n=Bc+500-it(),10<n)){if(ki(e,0)!==0)break;if(u=e.suspendedLanes,(u&c)!==c){zt(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=Ql(Br.bind(null,e,Ht,Gn),n);break}Br(e,Ht,Gn);break;case 4:if(mr(e,c),(c&4194240)===c)break;for(n=e.eventTimes,u=-1;0<c;){var w=31-fn(c);p=1<<w,w=n[w],w>u&&(u=w),c&=~p}if(c=u,c=it()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Uv(c/1960))-c,10<c){e.timeoutHandle=Ql(Br.bind(null,e,Ht,Gn),c);break}Br(e,Ht,Gn);break;case 5:Br(e,Ht,Gn);break;default:throw Error(i(329))}}}return Ut(e,it()),e.callbackNode===o?cp.bind(null,e):null}function Hc(e,n){var o=Ba;return e.current.memoizedState.isDehydrated&&(Dr(e,n).flags|=256),e=fs(e,n),e!==2&&(n=Ht,Ht=o,n!==null&&Uc(n)),e}function Uc(e){Ht===null?Ht=e:Ht.push.apply(Ht,e)}function qv(e){for(var n=e;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var u=o[c],p=u.getSnapshot;u=u.value;try{if(!mn(p(),u))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function mr(e,n){for(n&=~Dc,n&=~ls,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var o=31-fn(n),c=1<<o;e[o]=-1,n&=~c}}function dp(e){if((ze&6)!==0)throw Error(i(327));To();var n=ki(e,0);if((n&1)===0)return Ut(e,it()),null;var o=fs(e,n);if(e.tag!==0&&o===2){var c=kl(e);c!==0&&(n=c,o=Hc(e,c))}if(o===1)throw o=Da,Dr(e,0),mr(e,n),Ut(e,it()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Br(e,Ht,Gn),Ut(e,it()),null}function qc(e,n){var o=ze;ze|=1;try{return e(n)}finally{ze=o,ze===0&&($o=it()+500,Fi&&lr())}}function Or(e){pr!==null&&pr.tag===0&&(ze&6)===0&&To();var n=ze;ze|=1;var o=dn.transition,c=He;try{if(dn.transition=null,He=1,e)return e()}finally{He=c,dn.transition=o,ze=n,(ze&6)===0&&lr()}}function Vc(){Xt=Ro.current,Je(Ro)}function Dr(e,n){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,bv(o)),ut!==null)for(o=ut.return;o!==null;){var c=o;switch(tc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Di();break;case 3:No(),Je(Bt),Je(Nt),fc();break;case 5:hc(c);break;case 4:No();break;case 13:Je(rt);break;case 19:Je(rt);break;case 10:sc(c.type._context);break;case 22:case 23:Vc()}o=o.return}if(xt=e,ut=e=gr(e.current,null),St=Xt=n,mt=0,Da=null,Dc=ls=zr=0,Ht=Ba=null,Ir!==null){for(n=0;n<Ir.length;n++)if(o=Ir[n],c=o.interleaved,c!==null){o.interleaved=null;var u=c.next,p=o.pending;if(p!==null){var w=p.next;p.next=u,c.next=w}o.pending=c}Ir=null}return e}function up(e,n){do{var o=ut;try{if(ic(),Zi.current=ts,Xi){for(var c=ot.memoizedState;c!==null;){var u=c.queue;u!==null&&(u.pending=null),c=c.next}Xi=!1}if(Pr=0,vt=ft=ot=null,Aa=!1,Ia=0,Oc.current=null,o===null||o.return===null){mt=1,Da=n,ut=null;break}e:{var p=e,w=o.return,P=o,D=n;if(n=St,P.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var J=D,le=P,de=le.tag;if((le.mode&1)===0&&(de===0||de===11||de===15)){var se=le.alternate;se?(le.updateQueue=se.updateQueue,le.memoizedState=se.memoizedState,le.lanes=se.lanes):(le.updateQueue=null,le.memoizedState=null)}var fe=Ph(w);if(fe!==null){fe.flags&=-257,zh(fe,w,P,p,n),fe.mode&1&&Eh(p,J,n),n=fe,D=J;var xe=n.updateQueue;if(xe===null){var ye=new Set;ye.add(D),n.updateQueue=ye}else xe.add(D);break e}else{if((n&1)===0){Eh(p,J,n),Gc();break e}D=Error(i(426))}}else if(nt&&P.mode&1){var st=Ph(w);if(st!==null){(st.flags&65536)===0&&(st.flags|=256),zh(st,w,P,p,n),oc(Mo(D,P));break e}}p=D=Mo(D,P),mt!==4&&(mt=2),Ba===null?Ba=[p]:Ba.push(p),p=w;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var V=Ah(p,D,n);ih(p,V);break e;case 1:P=D;var F=p.type,Y=p.stateNode;if((p.flags&128)===0&&(typeof F.getDerivedStateFromError=="function"||Y!==null&&typeof Y.componentDidCatch=="function"&&(hr===null||!hr.has(Y)))){p.flags|=65536,n&=-n,p.lanes|=n;var he=Ih(p,P,n);ih(p,he);break e}}p=p.return}while(p!==null)}fp(o)}catch(we){n=we,ut===o&&o!==null&&(ut=o=o.return);continue}break}while(!0)}function hp(){var e=ss.current;return ss.current=ts,e===null?ts:e}function Gc(){(mt===0||mt===3||mt===2)&&(mt=4),xt===null||(zr&268435455)===0&&(ls&268435455)===0||mr(xt,St)}function fs(e,n){var o=ze;ze|=2;var c=hp();(xt!==e||St!==n)&&(Gn=null,Dr(e,n));do try{Vv();break}catch(u){up(e,u)}while(!0);if(ic(),ze=o,ss.current=c,ut!==null)throw Error(i(261));return xt=null,St=0,mt}function Vv(){for(;ut!==null;)pp(ut)}function Gv(){for(;ut!==null&&!xg();)pp(ut)}function pp(e){var n=vp(e.alternate,e,Xt);e.memoizedProps=e.pendingProps,n===null?fp(e):ut=n,Oc.current=null}function fp(e){var n=e;do{var o=n.alternate;if(e=n.return,(n.flags&32768)===0){if(o=Dv(o,n,Xt),o!==null){ut=o;return}}else{if(o=Bv(o,n),o!==null){o.flags&=32767,ut=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{mt=6,ut=null;return}}if(n=n.sibling,n!==null){ut=n;return}ut=n=e}while(n!==null);mt===0&&(mt=5)}function Br(e,n,o){var c=He,u=dn.transition;try{dn.transition=null,He=1,Yv(e,n,o,c)}finally{dn.transition=u,He=c}return null}function Yv(e,n,o,c){do To();while(pr!==null);if((ze&6)!==0)throw Error(i(327));o=e.finishedWork;var u=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var p=o.lanes|o.childLanes;if(Mg(e,p),e===xt&&(ut=xt=null,St=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ds||(ds=!0,xp(xi,function(){return To(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=dn.transition,dn.transition=null;var w=He;He=1;var P=ze;ze|=4,Oc.current=null,Wv(e,o),op(o,e),fv(Gl),ji=!!Vl,Gl=Vl=null,e.current=o,Hv(o),yg(),ze=P,He=w,dn.transition=p}else e.current=o;if(ds&&(ds=!1,pr=e,us=u),p=e.pendingLanes,p===0&&(hr=null),kg(o.stateNode),Ut(e,it()),n!==null)for(c=e.onRecoverableError,o=0;o<n.length;o++)u=n[o],c(u.value,{componentStack:u.stack,digest:u.digest});if(cs)throw cs=!1,e=Fc,Fc=null,e;return(us&1)!==0&&e.tag!==0&&To(),p=e.pendingLanes,(p&1)!==0?e===Wc?Fa++:(Fa=0,Wc=e):Fa=0,lr(),null}function To(){if(pr!==null){var e=n1(us),n=dn.transition,o=He;try{if(dn.transition=null,He=16>e?16:e,pr===null)var c=!1;else{if(e=pr,pr=null,us=0,(ze&6)!==0)throw Error(i(331));var u=ze;for(ze|=4,ge=e.current;ge!==null;){var p=ge,w=p.child;if((ge.flags&16)!==0){var P=p.deletions;if(P!==null){for(var D=0;D<P.length;D++){var J=P[D];for(ge=J;ge!==null;){var le=ge;switch(le.tag){case 0:case 11:case 15:Oa(8,le,p)}var de=le.child;if(de!==null)de.return=le,ge=de;else for(;ge!==null;){le=ge;var se=le.sibling,fe=le.return;if(Jh(le),le===J){ge=null;break}if(se!==null){se.return=fe,ge=se;break}ge=fe}}}var xe=p.alternate;if(xe!==null){var ye=xe.child;if(ye!==null){xe.child=null;do{var st=ye.sibling;ye.sibling=null,ye=st}while(ye!==null)}}ge=p}}if((p.subtreeFlags&2064)!==0&&w!==null)w.return=p,ge=w;else e:for(;ge!==null;){if(p=ge,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Oa(9,p,p.return)}var V=p.sibling;if(V!==null){V.return=p.return,ge=V;break e}ge=p.return}}var F=e.current;for(ge=F;ge!==null;){w=ge;var Y=w.child;if((w.subtreeFlags&2064)!==0&&Y!==null)Y.return=w,ge=Y;else e:for(w=F;ge!==null;){if(P=ge,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:is(9,P)}}catch(we){at(P,P.return,we)}if(P===w){ge=null;break e}var he=P.sibling;if(he!==null){he.return=P.return,ge=he;break e}ge=P.return}}if(ze=u,lr(),Mn&&typeof Mn.onPostCommitFiberRoot=="function")try{Mn.onPostCommitFiberRoot(yi,e)}catch{}c=!0}return c}finally{He=o,dn.transition=n}}return!1}function mp(e,n,o){n=Mo(o,n),n=Ah(e,n,1),e=dr(e,n,1),n=zt(),e!==null&&(ua(e,1,n),Ut(e,n))}function at(e,n,o){if(e.tag===3)mp(e,e,o);else for(;n!==null;){if(n.tag===3){mp(n,e,o);break}else if(n.tag===1){var c=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(hr===null||!hr.has(c))){e=Mo(o,e),e=Ih(n,e,1),n=dr(n,e,1),e=zt(),n!==null&&(ua(n,1,e),Ut(n,e));break}}n=n.return}}function Qv(e,n,o){var c=e.pingCache;c!==null&&c.delete(n),n=zt(),e.pingedLanes|=e.suspendedLanes&o,xt===e&&(St&o)===o&&(mt===4||mt===3&&(St&130023424)===St&&500>it()-Bc?Dr(e,0):Dc|=o),Ut(e,n)}function gp(e,n){n===0&&((e.mode&1)===0?n=1:(n=bi,bi<<=1,(bi&130023424)===0&&(bi=4194304)));var o=zt();e=Un(e,n),e!==null&&(ua(e,n,o),Ut(e,o))}function Kv(e){var n=e.memoizedState,o=0;n!==null&&(o=n.retryLane),gp(e,o)}function Zv(e,n){var o=0;switch(e.tag){case 13:var c=e.stateNode,u=e.memoizedState;u!==null&&(o=u.retryLane);break;case 19:c=e.stateNode;break;default:throw Error(i(314))}c!==null&&c.delete(n),gp(e,o)}var vp;vp=function(e,n,o){if(e!==null)if(e.memoizedProps!==n.pendingProps||Bt.current)Wt=!0;else{if((e.lanes&o)===0&&(n.flags&128)===0)return Wt=!1,Ov(e,n,o);Wt=(e.flags&131072)!==0}else Wt=!1,nt&&(n.flags&1048576)!==0&&K1(n,Hi,n.index);switch(n.lanes=0,n.tag){case 2:var c=n.type;os(e,n),e=n.pendingProps;var u=wo(n,Nt.current);So(n,o),u=vc(null,n,c,e,u,o);var p=xc();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ft(c)?(p=!0,Bi(n)):p=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,dc(n),u.updater=ns,n.stateNode=u,u._reactInternals=n,Cc(n,c,e,o),n=Mc(null,n,c,!0,p,o)):(n.tag=0,nt&&p&&ec(n),Pt(null,n,u,o),n=n.child),n;case 16:c=n.elementType;e:{switch(os(e,n),e=n.pendingProps,u=c._init,c=u(c._payload),n.type=c,u=n.tag=Jv(c),e=vn(c,e),u){case 0:n=Nc(null,n,c,e,o);break e;case 1:n=Hh(null,n,c,e,o);break e;case 11:n=Oh(null,n,c,e,o);break e;case 14:n=Dh(null,n,c,vn(c.type,e),o);break e}throw Error(i(306,c,""))}return n;case 0:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:vn(c,u),Nc(e,n,c,u,o);case 1:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:vn(c,u),Hh(e,n,c,u,o);case 3:e:{if(Uh(n),e===null)throw Error(i(387));c=n.pendingProps,p=n.memoizedState,u=p.element,ah(e,n),Qi(n,c,null,o);var w=n.memoizedState;if(c=w.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){u=Mo(Error(i(423)),n),n=qh(e,n,c,o,u);break e}else if(c!==u){u=Mo(Error(i(424)),n),n=qh(e,n,c,o,u);break e}else for(Zt=ar(n.stateNode.containerInfo.firstChild),Kt=n,nt=!0,gn=null,o=rh(n,null,c,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(_o(),c===u){n=Vn(e,n,o);break e}Pt(e,n,c,o)}n=n.child}return n;case 5:return lh(n),e===null&&rc(n),c=n.type,u=n.pendingProps,p=e!==null?e.memoizedProps:null,w=u.children,Yl(c,u)?w=null:p!==null&&Yl(c,p)&&(n.flags|=32),Wh(e,n),Pt(e,n,w,o),n.child;case 6:return e===null&&rc(n),null;case 13:return Vh(e,n,o);case 4:return uc(n,n.stateNode.containerInfo),c=n.pendingProps,e===null?n.child=Co(n,null,c,o):Pt(e,n,c,o),n.child;case 11:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:vn(c,u),Oh(e,n,c,u,o);case 7:return Pt(e,n,n.pendingProps,o),n.child;case 8:return Pt(e,n,n.pendingProps.children,o),n.child;case 12:return Pt(e,n,n.pendingProps.children,o),n.child;case 10:e:{if(c=n.type._context,u=n.pendingProps,p=n.memoizedProps,w=u.value,Ke(Vi,c._currentValue),c._currentValue=w,p!==null)if(mn(p.value,w)){if(p.children===u.children&&!Bt.current){n=Vn(e,n,o);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var P=p.dependencies;if(P!==null){w=p.child;for(var D=P.firstContext;D!==null;){if(D.context===c){if(p.tag===1){D=qn(-1,o&-o),D.tag=2;var J=p.updateQueue;if(J!==null){J=J.shared;var le=J.pending;le===null?D.next=D:(D.next=le.next,le.next=D),J.pending=D}}p.lanes|=o,D=p.alternate,D!==null&&(D.lanes|=o),lc(p.return,o,n),P.lanes|=o;break}D=D.next}}else if(p.tag===10)w=p.type===n.type?null:p.child;else if(p.tag===18){if(w=p.return,w===null)throw Error(i(341));w.lanes|=o,P=w.alternate,P!==null&&(P.lanes|=o),lc(w,o,n),w=p.sibling}else w=p.child;if(w!==null)w.return=p;else for(w=p;w!==null;){if(w===n){w=null;break}if(p=w.sibling,p!==null){p.return=w.return,w=p;break}w=w.return}p=w}Pt(e,n,u.children,o),n=n.child}return n;case 9:return u=n.type,c=n.pendingProps.children,So(n,o),u=ln(u),c=c(u),n.flags|=1,Pt(e,n,c,o),n.child;case 14:return c=n.type,u=vn(c,n.pendingProps),u=vn(c.type,u),Dh(e,n,c,u,o);case 15:return Bh(e,n,n.type,n.pendingProps,o);case 17:return c=n.type,u=n.pendingProps,u=n.elementType===c?u:vn(c,u),os(e,n),n.tag=1,Ft(c)?(e=!0,Bi(n)):e=!1,So(n,o),$h(n,c,u),Cc(n,c,u,o),Mc(null,n,c,!0,e,o);case 19:return Yh(e,n,o);case 22:return Fh(e,n,o)}throw Error(i(156,n.tag))};function xp(e,n){return Zu(e,n)}function Xv(e,n,o,c){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(e,n,o,c){return new Xv(e,n,o,c)}function Yc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jv(e){if(typeof e=="function")return Yc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Q)return 11;if(e===ce)return 14}return 2}function gr(e,n){var o=e.alternate;return o===null?(o=un(e.tag,n,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=n,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,n=e.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function ms(e,n,o,c,u,p){var w=2;if(c=e,typeof e=="function")Yc(e)&&(w=1);else if(typeof e=="string")w=5;else e:switch(e){case E:return Fr(o.children,u,p,n);case z:w=8,u|=8;break;case q:return e=un(12,o,n,u|2),e.elementType=q,e.lanes=p,e;case ne:return e=un(13,o,n,u),e.elementType=ne,e.lanes=p,e;case te:return e=un(19,o,n,u),e.elementType=te,e.lanes=p,e;case ie:return gs(o,u,p,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:w=10;break e;case X:w=9;break e;case Q:w=11;break e;case ce:w=14;break e;case oe:w=16,c=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=un(w,o,n,u),n.elementType=e,n.type=c,n.lanes=p,n}function Fr(e,n,o,c){return e=un(7,e,c,n),e.lanes=o,e}function gs(e,n,o,c){return e=un(22,e,c,n),e.elementType=ie,e.lanes=o,e.stateNode={isHidden:!1},e}function Qc(e,n,o){return e=un(6,e,null,n),e.lanes=o,e}function Kc(e,n,o){return n=un(4,e.children!==null?e.children:[],e.key,n),n.lanes=o,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function e3(e,n,o,c,u){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=c,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Zc(e,n,o,c,u,p,w,P,D){return e=new e3(e,n,o,P,D),n===1?(n=1,p===!0&&(n|=8)):n=0,p=un(3,null,null,n),e.current=p,p.stateNode=e,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},dc(p),e}function t3(e,n,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:c==null?null:""+c,children:e,containerInfo:n,implementation:o}}function yp(e){if(!e)return sr;e=e._reactInternals;e:{if(Lr(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ft(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(Ft(o))return G1(e,o,n)}return n}function wp(e,n,o,c,u,p,w,P,D){return e=Zc(o,c,!0,e,u,p,w,P,D),e.context=yp(null),o=e.current,c=zt(),u=fr(o),p=qn(c,u),p.callback=n??null,dr(o,p,u),e.current.lanes=u,ua(e,u,c),Ut(e,c),e}function vs(e,n,o,c){var u=n.current,p=zt(),w=fr(u);return o=yp(o),n.context===null?n.context=o:n.pendingContext=o,n=qn(p,w),n.payload={element:e},c=c===void 0?null:c,c!==null&&(n.callback=c),e=dr(u,n,w),e!==null&&(wn(e,u,w,p),Yi(e,u,w)),w}function xs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<n?o:n}}function Xc(e,n){bp(e,n),(e=e.alternate)&&bp(e,n)}function n3(){return null}var kp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Jc(e){this._internalRoot=e}ys.prototype.render=Jc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));vs(e,n,null,null)},ys.prototype.unmount=Jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Or(function(){vs(null,e,null,null)}),n[Bn]=null}};function ys(e){this._internalRoot=e}ys.prototype.unstable_scheduleHydration=function(e){if(e){var n=a1();e={blockedOn:null,target:e,priority:n};for(var o=0;o<nr.length&&n!==0&&n<nr[o].priority;o++);nr.splice(o,0,e),o===0&&l1(e)}};function ed(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _p(){}function r3(e,n,o,c,u){if(u){if(typeof c=="function"){var p=c;c=function(){var J=xs(w);p.call(J)}}var w=wp(n,c,e,0,null,!1,!1,"",_p);return e._reactRootContainer=w,e[Bn]=w.current,ja(e.nodeType===8?e.parentNode:e),Or(),w}for(;u=e.lastChild;)e.removeChild(u);if(typeof c=="function"){var P=c;c=function(){var J=xs(D);P.call(J)}}var D=Zc(e,0,!1,null,null,!1,!1,"",_p);return e._reactRootContainer=D,e[Bn]=D.current,ja(e.nodeType===8?e.parentNode:e),Or(function(){vs(n,D,o,c)}),D}function bs(e,n,o,c,u){var p=o._reactRootContainer;if(p){var w=p;if(typeof u=="function"){var P=u;u=function(){var D=xs(w);P.call(D)}}vs(n,w,e,u)}else w=r3(o,n,e,u,c);return xs(w)}r1=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var o=da(n.pendingLanes);o!==0&&(Cl(n,o|1),Ut(n,it()),(ze&6)===0&&($o=it()+500,lr()))}break;case 13:Or(function(){var c=Un(e,1);if(c!==null){var u=zt();wn(c,e,1,u)}}),Xc(e,1)}},jl=function(e){if(e.tag===13){var n=Un(e,134217728);if(n!==null){var o=zt();wn(n,e,134217728,o)}Xc(e,134217728)}},o1=function(e){if(e.tag===13){var n=fr(e),o=Un(e,n);if(o!==null){var c=zt();wn(o,e,n,c)}Xc(e,n)}},a1=function(){return He},i1=function(e,n){var o=He;try{return He=e,n()}finally{He=o}},ia=function(e,n,o){switch(n){case"input":if(qe(e,o),n=o.name,o.type==="radio"&&n!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var c=o[n];if(c!==e&&c.form===e.form){var u=Oi(c);if(!u)throw Error(i(90));ve(c),qe(c,u)}}}break;case"textarea":It(e,o);break;case"select":n=o.value,n!=null&&Ye(e,!!o.multiple,n,!1)}},Uu=qc,qu=Or;var o3={usingClientEntryPoint:!1,Events:[Ma,xo,Oi,Wu,Hu,qc]},Wa={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},a3={bundleType:Wa.bundleType,version:Wa.version,rendererPackageName:Wa.rendererPackageName,rendererConfig:Wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qu(e),e===null?null:e.stateNode},findFiberByHostInstance:Wa.findFiberByHostInstance||n3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ks.isDisabled&&ks.supportsFiber)try{yi=ks.inject(a3),Mn=ks}catch{}}return qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o3,qt.createPortal=function(e,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ed(n))throw Error(i(200));return t3(e,n,null,o)},qt.createRoot=function(e,n){if(!ed(e))throw Error(i(299));var o=!1,c="",u=kp;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=Zc(e,1,!1,null,null,o,!1,c,u),e[Bn]=n.current,ja(e.nodeType===8?e.parentNode:e),new Jc(n)},qt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Qu(n),e=e===null?null:e.stateNode,e},qt.flushSync=function(e){return Or(e)},qt.hydrate=function(e,n,o){if(!ws(n))throw Error(i(200));return bs(null,e,n,!0,o)},qt.hydrateRoot=function(e,n,o){if(!ed(e))throw Error(i(405));var c=o!=null&&o.hydratedSources||null,u=!1,p="",w=kp;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),n=wp(n,null,e,1,o??null,u,!1,p,w),e[Bn]=n.current,ja(e),c)for(e=0;e<c.length;e++)o=c[e],u=o._getVersion,u=u(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,u]:n.mutableSourceEagerHydrationData.push(o,u);return new ys(n)},qt.render=function(e,n,o){if(!ws(n))throw Error(i(200));return bs(null,e,n,!1,o)},qt.unmountComponentAtNode=function(e){if(!ws(e))throw Error(i(40));return e._reactRootContainer?(Or(function(){bs(null,null,e,!1,function(){e._reactRootContainer=null,e[Bn]=null})}),!0):!1},qt.unstable_batchedUpdates=qc,qt.unstable_renderSubtreeIntoContainer=function(e,n,o,c){if(!ws(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return bs(e,n,o,!1,c)},qt.version="18.3.1-next-f1338f8080-20240426",qt}var $p;function b0(){if($p)return rd.exports;$p=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(a){console.error(a)}}return t(),rd.exports=h3(),rd.exports}var Tp;function p3(){if(Tp)return _s;Tp=1;var t=b0();return _s.createRoot=t.createRoot,_s.hydrateRoot=t.hydrateRoot,_s}var f3=p3();const m3=w0(f3);function k0(t){var a,i,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t)){var l=t.length;for(a=0;a<l;a++)t[a]&&(i=k0(t[a]))&&(s&&(s+=" "),s+=i)}else for(i in t)t[i]&&(s&&(s+=" "),s+=i);return s}function re(){for(var t,a,i=0,s="",l=arguments.length;i<l;i++)(t=arguments[i])&&(a=k0(t))&&(s&&(s+=" "),s+=a);return s}const oo=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 5V19M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};oo.displayName="PlusIcon";const g3="_root_7uomf_13",v3="_sm_7uomf_82",x3="_md_7uomf_88",y3="_lg_7uomf_94",w3="_horizontal_7uomf_107",b3="_alignStart_7uomf_121",k3="_vertical_7uomf_125",_3="_inner_7uomf_131",C3="_iconSlot_7uomf_146",j3="_label_7uomf_163",Wr={root:g3,sm:v3,md:x3,lg:y3,horizontal:w3,alignStart:b3,vertical:k3,inner:_3,iconSlot:C3,label:j3};function Ap(t){return typeof t=="number"?`${t}px`:t}const S3=g.forwardRef(({size:t="md",layout:a="horizontal",align:i="center",label:s="Add",hideLabel:l=!1,icon:d,height:h,borderRadius:f,className:v,style:x,disabled:y,type:b="button",...k},j)=>{const S=d??r.jsx(oo,{size:"100%"}),C={};return h!==void 0&&(C["--area-min-height"]=Ap(h)),f!==void 0&&(C["--area-radius"]=Ap(f)),r.jsx("button",{ref:j,type:b,className:re(Wr.root,Wr[t],Wr[a],i==="start"&&Wr.alignStart,v),disabled:y,"data-size":t,"data-layout":a,style:{...C,...x},...k,children:r.jsxs("span",{className:Wr.inner,children:[r.jsx("span",{className:Wr.iconSlot,"aria-hidden":"true",children:S}),!l&&s&&r.jsx("span",{className:Wr.label,children:s})]})})});S3.displayName="AreaButton";const N3="_root_b29pw_8",M3="_image_b29pw_33",L3="_initials_b29pw_40",R3="_iconSlot_b29pw_52",xr={root:N3,image:M3,initials:L3,iconSlot:R3,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function $3({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function T3(t){const a=t.trim().split(/\s+/).filter(l=>/[\p{L}\p{N}]/u.test(l));if(a.length===0)return"";if(a.length===1)return a[0].charAt(0).toUpperCase();const i=a[0].charAt(0),s=a[a.length-1].charAt(0);return(i+s).toUpperCase()}const jn=g.forwardRef(({src:t,alt:a,initials:i,name:s,icon:l,size:d="md",color:h="neutral",variant:f="subtle",shape:v="circle",className:x,...y},b)=>{const[k,j]=g.useState(!1),S=!!t&&!k,C=(i==null?void 0:i.slice(0,2).toUpperCase())??(s?T3(s):"");let _;return S?_=r.jsx("img",{src:t,alt:a??"",className:xr.image,onError:()=>j(!0),draggable:!1},t):C?_=r.jsx("span",{className:xr.initials,"aria-hidden":a?void 0:!0,children:C}):_=r.jsx("span",{className:xr.iconSlot,"aria-hidden":"true",children:l??r.jsx($3,{})}),r.jsx("span",{ref:b,"data-size":d,"data-color":h,"data-variant":f,"data-shape":v,className:re(xr.root,xr[`size-${d}`],xr[`color-${h}`],xr[`variant-${f}`],xr[`shape-${v}`],x),...y,children:_})});jn.displayName="Avatar";const A3="_root_uqz3u_7",I3={root:A3},Ot=g.forwardRef(({as:t="span",className:a,children:i,...s},l)=>r.jsx(t,{ref:l,className:re(I3.root,a),...s,children:i}));Ot.displayName="Eyebrow";const E3="_root_1tnwf_15",P3={root:E3},z3=g.forwardRef(({scale:t="paragraph-md",placeholder:a="Type something…",value:i,defaultValue:s="",onChange:l,readOnly:d=!1,disabled:h=!1,className:f,onInput:v,...x},y)=>{const b=i!==void 0,k=g.useRef(null),[j,S]=g.useState(()=>b?!i:!s),C=g.useCallback(N=>{k.current=N,typeof y=="function"?y(N):y&&(y.current=N)},[y]);g.useEffect(()=>{!b&&k.current&&s&&(k.current.textContent=s,S(!s))},[]),g.useEffect(()=>{b&&k.current&&(k.current.textContent??"")!==i&&(k.current.textContent=i??"",S(!(i??"")))},[i,b]);const _=N=>{const A=N.currentTarget.textContent??"";S(A===""),l==null||l(A),v==null||v(N)},$=N=>{N.preventDefault();const A=N.clipboardData.getData("text/plain");document.execCommand("insertText",!1,A)},R=!h&&!d;return r.jsx("span",{ref:C,contentEditable:R?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":a,"aria-disabled":h||void 0,"aria-readonly":d||void 0,"data-scale":t,"data-empty":j||void 0,"data-placeholder":a,"data-disabled":h||void 0,"data-readonly":d||void 0,className:re(P3.root,f),onInput:_,onPaste:$,...x})});z3.displayName="TypeBox";const O3="_root_1brpy_12",D3="_ghost_1brpy_27",B3="_path_1brpy_32",Ua={root:O3,"ai-spin":"_ai-spin_1brpy_1",ghost:D3,"ai-morph":"_ai-morph_1brpy_1",path:B3,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},F3={xs:16,sm:24,md:32,lg:48,xl:64},W3={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},Ip="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",Cs=t=>t==="inverse"||t==="inverse-light",H3=t=>t==="stroke"||t==="stroke-light",nu=g.forwardRef(({size:t="md",variant:a="gradient-fill",state:i="loading",className:s,style:l,"aria-label":d,...h},f)=>{const v=g.useId().replace(/[^a-z0-9]/gi,""),x=`aigrad-${v}`,y=`aiglow-${v}`,b=typeof t=="string",k=b?F3[t]:t,j=b?W3[t]:k<=16?1.75:k<=24?1.5:k<=32?1.25:1.1,S=a==="gradient-fill"?`url(#${x})`:Cs(a)?"currentColor":"none",C=Cs(a)?"none":H3(a)?"currentColor":`url(#${x})`,_="currentColor",$=a!=="stroke"&&a!=="stroke-light"&&!Cs(a);return r.jsxs("svg",{ref:f,width:k,height:k,viewBox:"0 0 24 24",fill:"none",className:re(Ua.root,Ua[`variant-${a}`],Ua[`state-${i}`],s),style:l,"data-state":i,"aria-label":d??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...h,children:[!Cs(a)&&r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:x,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[r.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),r.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),r.jsxs("filter",{id:y,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[r.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{in:"blur"}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),r.jsx("path",{d:Ip,stroke:_,strokeWidth:j*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:Ua.ghost}),r.jsx("path",{d:Ip,fill:S,stroke:C==="none"?void 0:C,strokeWidth:C==="none"?void 0:j,strokeLinecap:"round",strokeLinejoin:"round",filter:$?`url(#${y})`:void 0,className:Ua.path})]})});nu.displayName="AILoader";const U3="_root_10act_14",q3="_hovered_10act_68",V3="_loading_10act_69",G3="_sm_10act_90",Y3="_md_10act_98",Q3="_lg_10act_106",K3="_dark_10act_116",Z3="_icon_10act_122",Ao={root:U3,hovered:q3,loading:V3,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:G3,md:Y3,lg:Q3,dark:K3,icon:Z3},Ep={sm:12,md:14,lg:18};function X3({size:t,light:a}){return r.jsxs("svg",{width:t,height:t,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!a&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{stopColor:"#8C4FE2"}),r.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),r.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),r.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:a?"white":"url(#ai-core-btn-sparkle)"})]})}const _0=g.forwardRef(({size:t="md",dark:a,loading:i,className:s,onMouseEnter:l,onMouseLeave:d,...h},f)=>{const[v,x]=g.useState(!1);return r.jsx("button",{ref:f,className:re(Ao.root,Ao[t],a&&Ao.dark,i?Ao.loading:v&&Ao.hovered,s),"aria-busy":i||void 0,onMouseEnter:y=>{x(!0),l==null||l(y)},onMouseLeave:y=>{x(!1),d==null||d(y)},...h,children:r.jsx("span",{className:Ao.icon,children:i?r.jsx(nu,{size:Ep[t],variant:a?"inverse-light":"gradient-fill"}):r.jsx(X3,{size:Ep[t],light:a})})})});_0.displayName="AICoreButton";const J3="_root_1qx4u_9",e5="_star_1qx4u_34",id={root:J3,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:e5},t5="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",C0=g.forwardRef(({size:t="sm",className:a,...i},s)=>r.jsx("span",{ref:s,"data-size":t,"aria-hidden":"true",className:re(id.root,id[`size-${t}`],a),...i,children:r.jsx("svg",{viewBox:"0 0 24 24",className:id.star,fill:"none","aria-hidden":"true",children:r.jsx("path",{d:t5,fill:"currentColor"})})}));C0.displayName="AIAvatar";const n5="_shell_lalw3_21",r5="_wrapper_lalw3_58",o5="_card_lalw3_65",a5="_cardClip_lalw3_94",i5="_textarea_lalw3_160",s5="_actions_lalw3_203",Bo={shell:n5,wrapper:r5,card:o5,cardClip:a5,textarea:i5,actions:s5},j0=g.forwardRef(({className:t,children:a,...i},s)=>r.jsx("div",{ref:s,className:re(Bo.shell,t),...i,children:a}));j0.displayName="AIComposer";function l5(t,a){typeof t=="function"?t(a):t&&(t.current=a)}const S0=g.forwardRef(({value:t,onChange:a,onSubmit:i,maxRows:s=5,radius:l="sm",placeholder:d="Ask AI anything…",className:h,onKeyDown:f,disabled:v,children:x,style:y,...b},k)=>{const j=g.useRef(null);g.useEffect(()=>{const R=j.current;R&&(R.style.height="auto",R.style.height=`${R.scrollHeight}px`)},[t]);const S=g.useCallback(R=>a(R.target.value),[a]),C=g.useCallback(R=>{f==null||f(R),!R.defaultPrevented&&R.key==="Enter"&&!R.shiftKey&&i&&(R.preventDefault(),i())},[f,i]),_=g.useCallback(R=>{j.current=R,l5(k,R)},[k]),$={...y??{},"--ai-composer-max-rows":s};return r.jsx("div",{className:re(Bo.wrapper,h),"data-radius":l,children:r.jsx("div",{className:Bo.card,children:r.jsxs("div",{className:Bo.cardClip,children:[r.jsx("textarea",{...b,ref:_,className:Bo.textarea,rows:1,value:t,onChange:S,onKeyDown:C,placeholder:d,disabled:v,style:$}),x!=null&&r.jsx("div",{className:Bo.actions,children:x})]})})})});S0.displayName="AIComposerInput";const c5="_root_fv0gc_10",d5="_simple_fv0gc_28",u5="_float_fv0gc_83",Pp={root:c5,simple:d5,float:u5},h5=g.forwardRef(({variant:t="simple",className:a,children:i,...s},l)=>r.jsx("section",{ref:l,"data-variant":t,className:re(Pp.root,Pp[t],a),...s,children:i}));h5.displayName="AIConversation";const p5="_fadeFrame_1l0ib_19",f5="_scroller_1l0ib_32",m5="_content_1l0ib_89",g5="_messageBlock_1l0ib_108",v5="_messageBlockAi_1l0ib_116",x5="_inboundBlock_1l0ib_128",y5="_inboundLoader_1l0ib_136",w5="_inboundLoaderLabel_1l0ib_146",b5="_outboundBlock_1l0ib_153",k5="_outboundHeader_1l0ib_161",_5="_messageBlockUser_1l0ib_168",C5="_aiThreadOutboundIn_1l0ib_1",j5="_messageBody_1l0ib_182",S5="_messageBodyAi_1l0ib_193",N5="_messageBodyUser_1l0ib_200",M5="_label_1l0ib_159",L5="_labelAi_1l0ib_221",R5="_labelUser_1l0ib_159",$5="_labelAvatar_1l0ib_224",T5="_labelText_1l0ib_237",A5="_timestamp_1l0ib_244",I5="_timestampAi_1l0ib_259",E5="_timestampUser_1l0ib_260",P5="_timestampInline_1l0ib_270",z5="_aiThreadOutboundFadeIn_1l0ib_1",Ie={fadeFrame:p5,scroller:f5,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:m5,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:g5,messageBlockAi:v5,inboundBlock:x5,inboundLoader:y5,inboundLoaderLabel:w5,outboundBlock:b5,outboundHeader:k5,messageBlockUser:_5,aiThreadOutboundIn:C5,messageBody:j5,messageBodyAi:S5,messageBodyUser:N5,label:M5,labelAi:L5,labelUser:R5,labelAvatar:$5,labelText:T5,timestamp:A5,timestampAi:I5,timestampUser:E5,timestampInline:P5,aiThreadOutboundFadeIn:z5},zp=8;function O5(t,a){typeof t=="function"?t(a):t&&(t.current=a)}const D5=g.forwardRef(({density:t="comfortable",padding:a="md",autoScroll:i=!0,autoScrollThreshold:s=80,className:l,children:d,...h},f)=>{const v=g.useRef(null),x=g.useRef(null),y=g.useRef(!0),[b,k]=g.useState(!1),[j,S]=g.useState(!1),C=g.useCallback(_=>{v.current=_,O5(f,_)},[f]);return g.useEffect(()=>{const _=v.current,$=x.current;if(!_||!$)return;const R=()=>{const{scrollTop:E,scrollHeight:z,clientHeight:q}=_;return z-E-q<s},N=E=>{_.scrollTo({top:_.scrollHeight,behavior:E?"smooth":"auto"})},A=()=>{const{scrollTop:E,scrollHeight:z,clientHeight:q}=_,G=E>zp,X=z-E-q>zp;k(Q=>Q===G?Q:G),S(Q=>Q===X?Q:X)};i&&(N(!1),y.current=!0),A();const M=()=>{y.current=R(),A()};_.addEventListener("scroll",M,{passive:!0});const T=new ResizeObserver(()=>{i&&y.current&&N(!0),A()});return T.observe($),T.observe(_),()=>{_.removeEventListener("scroll",M),T.disconnect()}},[i,s]),r.jsx("div",{className:Ie.fadeFrame,"data-fade-top":b,"data-fade-bottom":j,children:r.jsx("div",{ref:C,className:re(Ie.scroller,Ie[`padding-${a}`],l),...h,children:r.jsx("div",{ref:x,className:re(Ie.content,Ie[`density-${t}`]),children:d})})})});D5.displayName="AIThread";const Zs=g.forwardRef(({align:t="ai",avatar:a,className:i,children:s,...l},d)=>r.jsxs("div",{ref:d,className:re(Ie.label,t==="user"?Ie.labelUser:Ie.labelAi,i),...l,children:[a!=null&&r.jsx("span",{className:Ie.labelAvatar,children:a}),r.jsx("span",{className:Ie.labelText,children:s})]}));Zs.displayName="AILabel";const B5=t=>t.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function F5(t,a){if(typeof t=="string")return{text:t};const i=t instanceof Date?t:new Date(t);return Number.isNaN(i.getTime())?null:{text:a(i),iso:i.toISOString()}}const ii=g.forwardRef(({value:t,align:a="ai",format:i=B5,inline:s=!1,className:l,...d},h)=>{const f=g.useMemo(()=>F5(t,i),[t,i]);return f?r.jsx("time",{ref:h,className:re(Ie.timestamp,s?Ie.timestampInline:a==="user"?Ie.timestampUser:Ie.timestampAi,l),dateTime:f.iso,...d,children:f.text}):null});ii.displayName="AITimestamp";function W5(t){return t==null?null:typeof t=="string"||typeof t=="number"||t instanceof Date?r.jsx(ii,{align:"ai",value:t}):t}function H5(t){return t==null?null:typeof t=="string"||typeof t=="number"?r.jsx(Zs,{align:"ai",children:t}):t}const U5=g.forwardRef(({label:t,time:a,className:i,children:s,...l},d)=>r.jsxs("div",{ref:d,"data-author":"ai",className:re(Ie.messageBlock,Ie.messageBlockAi,i),...l,children:[H5(t),r.jsx("div",{className:re(Ie.messageBody,Ie.messageBodyAi),children:s}),W5(a)]}));U5.displayName="AIAssistantMessage";function q5(t){return t==null?null:typeof t=="string"||typeof t=="number"||t instanceof Date?r.jsx(ii,{align:"user",value:t}):t}function V5(t){return t==null?null:typeof t=="string"||typeof t=="number"?r.jsx(Zs,{align:"user",children:t}):t}const G5=g.forwardRef(({label:t,time:a,className:i,children:s,...l},d)=>r.jsxs("div",{ref:d,"data-author":"user",className:re(Ie.messageBlock,Ie.messageBlockUser,i),...l,children:[V5(t),r.jsx("div",{className:re(Ie.messageBody,Ie.messageBodyUser),children:s}),q5(a)]}));G5.displayName="AIUserMessage";function Y5(t){return t===!1?null:t==null||t===!0?r.jsx(C0,{size:"sm"}):t}function Q5(t,a){return t==null&&a==null?null:typeof t=="string"||typeof t=="number"||t==null?r.jsx(Zs,{align:"ai",avatar:a,children:t}):t}const K5=g.forwardRef(({avatar:t,label:a="Teambridge AI",activity:i,actions:s,loading:l=!1,loaderLabel:d="Thinking…",className:h,children:f,...v},x)=>{const y=Y5(t),b=Q5(a,y);return r.jsxs("div",{ref:x,"data-author":"ai",className:re(Ie.messageBlock,Ie.messageBlockAi,Ie.inboundBlock,h),...v,children:[b,i,f!=null&&r.jsx("div",{className:re(Ie.messageBody,Ie.messageBodyAi),children:f}),l&&r.jsxs("div",{className:Ie.inboundLoader,"aria-live":"polite",children:[r.jsx(nu,{size:"xs"}),d!=null&&r.jsx("span",{className:Ie.inboundLoaderLabel,children:d})]}),s]})});K5.displayName="AIInboundMessage";function Z5(t){return t instanceof Date||typeof t=="number"||typeof t=="string"}const X5=g.forwardRef(({label:t="You",time:a,timeFormat:i,className:s,children:l,...d},h)=>{const f=a==null?null:Z5(a)?r.jsx(ii,{value:a,format:i,inline:!0}):a,v=t==null?null:typeof t=="string"||typeof t=="number"?r.jsx("span",{className:Ie.labelText,children:t}):t,x=v!=null||f!=null;return r.jsxs("div",{ref:h,"data-author":"user",className:re(Ie.messageBlock,Ie.messageBlockUser,Ie.outboundBlock,s),...d,children:[x&&r.jsxs("div",{className:re(Ie.label,Ie.labelUser,Ie.outboundHeader),children:[v,f]}),r.jsx("div",{className:re(Ie.messageBody,Ie.messageBodyUser),children:l})]})});X5.displayName="AIOutboundMessage";const Xn=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Xn.displayName="ChevronDownIcon";const J5="_root_1j4eq_8",ex="_header_1j4eq_17",tx="_headerSummary_1j4eq_53",nx="_aiTrailSummaryFade_1j4eq_1",rx="_aiTrailHeaderAppend_1j4eq_1",ox="_aiTrailEllipsis_1j4eq_1",ax="_headerCurrent_1j4eq_128",ix="_headerChevron_1j4eq_159",sx="_headerChevronExpanded_1j4eq_173",lx="_body_1j4eq_187",cx="_bodyExpanded_1j4eq_200",dx="_bodyCollapsed_1j4eq_201",ux="_bodyInner_1j4eq_203",hx="_bodyContent_1j4eq_187",px="_step_1j4eq_225",fx="_stepIcon_1j4eq_242",mx="_stepAnimating_1j4eq_256",gx="_aiTrailStepPulse_1j4eq_1",vx="_stepBody_1j4eq_267",xx="_stepHead_1j4eq_282",yx="_stepLabel_1j4eq_286",wx="_stepSeparator_1j4eq_288",bx="_stepDetail_1j4eq_292",kx="_subToggle_1j4eq_302",_x="_subToggleCount_1j4eq_335",Cx="_subToggleChevron_1j4eq_339",jx="_subActivityWrap_1j4eq_358",Sx="_subActivityExpanded_1j4eq_364",Nx="_subActivityCollapsed_1j4eq_365",Mx="_subActivityClip_1j4eq_367",Lx="_subActivityList_1j4eq_378",Rx="_subActivity_1j4eq_358",$x="_aiTrailSubActivityType_1j4eq_1",Tx="_aiTrailSubActivityFade_1j4eq_1",Ue={root:J5,header:ex,headerSummary:tx,aiTrailSummaryFade:nx,aiTrailHeaderAppend:rx,aiTrailEllipsis:ox,headerCurrent:ax,headerChevron:ix,headerChevronExpanded:sx,body:lx,bodyExpanded:cx,bodyCollapsed:dx,bodyInner:ux,bodyContent:hx,step:px,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:fx,stepAnimating:mx,aiTrailStepPulse:gx,stepBody:vx,stepHead:xx,stepLabel:yx,stepSeparator:wx,stepDetail:bx,subToggle:kx,subToggleCount:_x,subToggleChevron:Cx,subActivityWrap:jx,subActivityExpanded:Sx,subActivityCollapsed:Nx,subActivityClip:Mx,subActivityList:Lx,subActivity:Rx,aiTrailSubActivityType:$x,aiTrailSubActivityFade:Tx},ru=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};ru.displayName="MessageDotsSquareIcon";function Fs({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Fs.displayName="SearchMdIcon";function Wo({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const N0=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};N0.displayName="Globe01Icon";const M0=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};M0.displayName="Code02Icon";function L0({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}L0.displayName="Tool01Icon";const Dt=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M20 6L9 17L4 12",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},Vo=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:a}),r.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};Vo.displayName="AlertCircleIcon";const Ax={thinking:r.jsx(ru,{size:14}),tool:r.jsx(L0,{size:14}),search:r.jsx(Fs,{size:14}),file:r.jsx(Wo,{size:14}),web:r.jsx(N0,{size:14}),code:r.jsx(M0,{size:14}),content:r.jsx(Dt,{size:14})},Xs=g.forwardRef(({type:t,status:a="done",detail:i,icon:s,subActivities:l,groupState:d="done",className:h,children:f,...v},x)=>{const y=a==="active"&&d==="live",b=a==="active"&&d==="live",k=a==="active"||a==="error",[j,S]=g.useState(null),C=j!==null?j:k;g.useEffect(()=>{S(null)},[a]);const _=g.useCallback(()=>S(!C),[C]),$=!!l&&l.length>0,R=(l==null?void 0:l.length)??0,N=a==="error"?r.jsx(Vo,{size:14}):s??Ax[t];return r.jsxs("div",{ref:x,"data-step-type":t,"data-step-status":a,className:re(Ue.step,Ue[`step-${a}`],y&&Ue.stepAnimating,h),...v,children:[r.jsx("span",{className:Ue.stepIcon,"aria-hidden":!0,children:N}),r.jsxs("span",{className:Ue.stepBody,children:[r.jsxs("span",{className:Ue.stepHead,children:[r.jsx("span",{className:Ue.stepLabel,children:f}),i!=null&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:Ue.stepSeparator,"aria-hidden":!0,children:" · "}),r.jsx("span",{className:Ue.stepDetail,children:i})]}),$&&r.jsxs("button",{type:"button",className:Ue.subToggle,onClick:_,"aria-expanded":C,"aria-label":C?`Collapse ${R} sub-steps`:`Expand ${R} sub-steps`,"data-expanded":C||void 0,children:[r.jsx("span",{className:Ue.subToggleCount,children:R}),r.jsx("span",{className:Ue.subToggleChevron,"aria-hidden":!0,children:r.jsx(Xn,{size:10})})]})]}),$&&r.jsx(r.Fragment,{children:r.jsx("div",{className:re(Ue.subActivityWrap,C?Ue.subActivityExpanded:Ue.subActivityCollapsed),"aria-hidden":!C,children:r.jsx("div",{className:Ue.subActivityClip,children:r.jsx("ul",{className:Ue.subActivityList,"data-animating":b||void 0,children:l.map((A,M)=>r.jsx("li",{className:Ue.subActivity,children:A},M))})})})})]})]})});Xs.displayName="AIActivityStep";function Op(t){return t==="error"}function Ix(t,a,i,s,l,d){if(t==="live")return i.length===0?a===1?"1 step":`${a} steps`:r.jsx("span",{className:l,children:i[s]??i[i.length-1]},s);const h=t==="error"?"Stopped":d?`Thought for ${d}`:"Thought";if(i.length===0){const f=a===1?"1 step":`${a} steps`;return`${h} · ${f}`}return r.jsxs(r.Fragment,{children:[h,i.map((f,v)=>r.jsxs(g.Fragment,{children:[" · ",f]},v))]})}const ou=g.forwardRef(({state:t="live",expanded:a,defaultExpanded:i,onToggle:s,duration:l,summary:d,className:h,children:f,...v},x)=>{const y=a!==void 0,[b,k]=g.useState(i??Op(t)),[j,S]=g.useState(!1);g.useEffect(()=>{y||j||k(Op(t))},[t,y,j]);const C=y?!!a:b,_=g.useCallback(()=>{const T=!C;y||(k(T),S(!0)),s==null||s(T)},[C,y,s]),{enhancedChildren:$,stepCount:R,stepLabels:N,currentLabelIdx:A}=g.useMemo(()=>{let T=0;const E=[];let z=-1;return{enhancedChildren:g.Children.map(f,G=>{if(!g.isValidElement(G))return G;const X=G.props;if(!("type"in X||"status"in X))return G;T+=1;const ne=X.status??"done";return ne==="pending"?null:(X.children!=null&&(E.push(X.children),ne==="active"&&(z=E.length-1)),Ex(G,t))}),stepCount:T,stepLabels:E,currentLabelIdx:z>=0?z:E.length-1}},[f,t]),M=d??Ix(t,R,N,A,Ue.headerCurrent,l);return r.jsxs("div",{ref:x,"data-state":t,"data-expanded":C,className:re(Ue.root,h),...v,children:[r.jsxs("button",{type:"button",className:Ue.header,onClick:_,"aria-expanded":C,"aria-label":C?"Collapse activity trail":"Expand activity trail",children:[r.jsx("span",{className:Ue.headerSummary,children:M},`${t}-${A}`),r.jsx("span",{className:re(Ue.headerChevron,C&&Ue.headerChevronExpanded),"aria-hidden":!0,children:r.jsx(Xn,{size:14})})]}),r.jsx("div",{className:re(Ue.body,C?Ue.bodyExpanded:Ue.bodyCollapsed),"aria-hidden":!C,children:r.jsx("div",{className:Ue.bodyInner,children:r.jsxs("div",{className:Ue.bodyContent,children:[$,t==="done"&&r.jsx(Xs,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});ou.displayName="AIActivityTrail";function Ex(t,a){return g.cloneElement(t,{groupState:a})}var Js=b0();const Px="_wrapper_3tqlm_10",zx="_tooltip_3tqlm_22",Ox="_portal_3tqlm_23",Dx="_top_3tqlm_61",Bx="_bottom_3tqlm_71",Fx="_left_3tqlm_81",Wx="_right_3tqlm_91",js={wrapper:Px,tooltip:zx,portal:Ox,top:Dx,bottom:Bx,left:Fx,right:Wx},jr=({content:t,placement:a="top",delay:i=0,disabled:s=!1,maxWidth:l=280,offset:d=0,children:h})=>{const[f,v]=g.useState(!1),[x,y]=g.useState({top:0,left:0}),b=g.useRef(null),k=g.useRef(),j=g.useId(),S=g.useCallback(()=>{if(!b.current)return;const N=b.current.getBoundingClientRect(),A=6+d;let M=0,T=0;switch(a){case"top":M=N.top-A,T=N.left+N.width/2;break;case"bottom":M=N.bottom+A,T=N.left+N.width/2;break;case"left":M=N.top+N.height/2,T=N.left-A;break;case"right":M=N.top+N.height/2,T=N.right+A;break}y({top:M,left:T})},[a,d]),C=g.useCallback(()=>{s||(S(),clearTimeout(k.current),i>0?k.current=setTimeout(()=>v(!0),i):v(!0))},[s,i,S]),_=g.useCallback(()=>{clearTimeout(k.current),v(!1)},[]);g.useEffect(()=>{if(!f)return;const N=()=>S();return window.addEventListener("scroll",N,!0),window.addEventListener("resize",N),()=>{window.removeEventListener("scroll",N,!0),window.removeEventListener("resize",N)}},[f,S]);const $=_r.cloneElement(h,{"aria-describedby":f?j:void 0}),R=r.jsx("span",{id:j,role:"tooltip",className:re(js.tooltip,js[a],js.portal),"data-visible":f||void 0,style:{top:x.top,left:x.left,maxWidth:l!==void 0?l:void 0},children:t});return r.jsxs("span",{ref:b,className:js.wrapper,onMouseEnter:C,onMouseLeave:_,onFocus:C,onBlur:_,children:[$,Js.createPortal(R,document.body)]})};jr.displayName="Tooltip";const Hx="_root_v8mqg_9",Ux="_hover_v8mqg_21",sd={root:Hx,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:Ux};function qx(t){return t instanceof Date||typeof t=="number"||typeof t=="string"}const R0=g.forwardRef(({visibility:t="always",align:a="start",time:i,timeFormat:s,className:l,children:d,...h},f)=>{const v=i==null?null:qx(i)?r.jsx(ii,{value:i,format:s,inline:!0}):i,x=b=>{if(!g.isValidElement(b))return b;const k=b;if(k.type===jr)return k;const j=k.props["aria-label"];return j?r.jsx(jr,{content:j,placement:"top",delay:150,children:k}):k},y=g.Children.map(d,b=>{if(g.isValidElement(b)&&b.type===g.Fragment){const k=b.props.children;return g.Children.map(k,x)}return x(b)});return r.jsxs("div",{ref:f,"data-visibility":t,"data-align":a,className:re(sd.root,sd[`align-${a}`],t==="hover"&&sd.hover,l),...h,children:[y,v]})});R0.displayName="AIMessageActions";const Vx="_card_1apq1_17",Gx="_header_1apq1_69",Yx="_iconBadge_1apq1_74",Qx="_iconInner_1apq1_89",Kx="_headerText_1apq1_100",Zx="_headerTopRow_1apq1_109",Xx="_eyebrow_1apq1_115",Jx="_title_1apq1_124",e4="_subtitle_1apq1_130",t4="_headerTrailing_1apq1_135",n4="_body_1apq1_141",r4="_footer_1apq1_152",o4="_footerEnd_1apq1_157",a4="_metaRow_1apq1_162",i4="_metaItem_1apq1_170",s4="_resultHero_1apq1_180",l4="_resultHeadline_1apq1_185",c4="_resultDetail_1apq1_191",d4="_clauses_1apq1_205",u4="_clause_1apq1_205",h4="_clauseLabel_1apq1_215",p4="_clauseBody_1apq1_225",f4="_badgeExecuting_1apq1_245",Ze={card:Vx,header:Gx,iconBadge:Yx,iconInner:Qx,headerText:Kx,headerTopRow:Zx,eyebrow:Xx,title:Jx,subtitle:e4,headerTrailing:t4,body:n4,footer:r4,footerEnd:o4,metaRow:a4,metaItem:i4,resultHero:s4,resultHeadline:l4,resultDetail:c4,clauses:d4,clause:u4,clauseLabel:h4,clauseBody:p4,badgeExecuting:f4},Dn=g.forwardRef(({tone:t="neutral",accent:a=!0,fill:i=!1,icon:s,eyebrow:l,title:d,subtitle:h,trailing:f,footer:v,footerEnd:x=!1,className:y,children:b,...k},j)=>{const S=l!=null||f!=null,C=S||d!=null||h!=null,_=s!=null||C;return r.jsxs("div",{ref:j,"data-tone":t,"data-accent":a||void 0,"data-fill":i||void 0,"data-icon":s!=null||void 0,className:re(Ze.card,y),...k,children:[_&&r.jsxs("div",{className:Ze.header,children:[s!=null&&r.jsx("span",{className:re(Ze.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx("span",{className:Ze.iconInner,children:s})}),C&&r.jsxs("div",{className:Ze.headerText,children:[S&&r.jsxs("div",{className:Ze.headerTopRow,children:[l!=null&&r.jsx("span",{className:Ze.eyebrow,children:l}),f!=null&&r.jsx("span",{className:Ze.headerTrailing,children:f})]}),d!=null&&r.jsx("span",{className:Ze.title,children:d}),h!=null&&r.jsx("span",{className:Ze.subtitle,children:h})]})]}),b!=null&&r.jsx("div",{className:Ze.body,children:b}),v!=null&&r.jsx("div",{className:re(Ze.footer,x&&Ze.footerEnd),children:v})]})});Dn.displayName="UltronCard";const m4="_root_zkkgh_6",g4="_sm_zkkgh_24",v4="_md_zkkgh_33",x4="_lg_zkkgh_42",y4="_neutral_zkkgh_53",w4="_blue_zkkgh_66",b4="_azure_zkkgh_79",k4="_purple_zkkgh_92",_4="_pink_zkkgh_105",C4="_red_zkkgh_118",j4="_orange_zkkgh_131",S4="_yellow_zkkgh_144",N4="_matcha_zkkgh_157",M4="_green_zkkgh_170",L4="_subtle_zkkgh_184",R4="_outline_zkkgh_190",$4="_solid_zkkgh_196",T4="_dot_zkkgh_203",A4="_icon_zkkgh_212",I4="_dismiss_zkkgh_224",Hr={root:m4,sm:g4,md:v4,lg:x4,neutral:y4,blue:w4,azure:b4,purple:k4,pink:_4,red:C4,orange:j4,yellow:S4,matcha:N4,green:M4,subtle:L4,outline:R4,solid:$4,dot:T4,icon:A4,dismiss:I4},si=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},E4={sm:10,md:12,lg:14},Cr=g.forwardRef(({variant:t="subtle",color:a="neutral",size:i="md",dot:s,leadingIcon:l,dismissible:d,onDismiss:h,className:f,children:v,...x},y)=>r.jsxs("span",{ref:y,className:re(Hr.root,Hr[i],Hr[a],Hr[t],f),...x,children:[s&&r.jsx("span",{className:Hr.dot,"aria-hidden":"true"}),l&&r.jsx("span",{className:re(Hr.icon,"alloy-icon-slot"),"aria-hidden":"true",children:l}),v,d&&r.jsx("button",{type:"button",className:Hr.dismiss,"aria-label":"Remove",onClick:b=>{b.stopPropagation(),h==null||h()},children:r.jsx(si,{size:E4[i]})})]}));Cr.displayName="Tag";function $0({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}$0.displayName="SlashCircle01Icon";const au=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};au.displayName="EyeIcon";function el({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}el.displayName="Target01Icon";function zn({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}zn.displayName="ClockIcon";const li=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};li.displayName="RefreshCw04Icon";const On=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,fill:"none"}),r.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};On.displayName="CheckCircleIcon";function tl({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}tl.displayName="Save01Icon";const P4={sm:11,md:12,lg:14},z4={ignored:{label:"Ignored",color:"neutral",Icon:$0},monitored:{label:"Monitored",color:"blue",Icon:au},recommended:{label:"Recommended",color:"purple",Icon:el},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:zn},executing:{label:"Executing",color:"azure",Icon:li},completed:{label:"Completed",color:"green",Icon:On},saved:{label:"Saved",color:"matcha",Icon:tl}},ao=g.forwardRef(({status:t,size:a="sm",label:i,className:s,...l},d)=>{const h=z4[t],f=h.Icon;return r.jsx(Cr,{ref:d,color:h.color,size:a,variant:"subtle",leadingIcon:r.jsx(f,{size:P4[a]}),className:re(t==="executing"&&Ze.badgeExecuting,s),...l,children:i??h.label})});ao.displayName="UltronStatusBadge";function nl({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}nl.displayName="Bell01Icon";const O4=g.forwardRef(({title:t,icon:a,eyebrow:i="Event",meta:s,status:l,tone:d="neutral",children:h,...f},v)=>r.jsx(Dn,{ref:v,tone:d,eyebrow:i,title:t,icon:a??r.jsx(nl,{size:14}),trailing:l?r.jsx(ao,{status:l}):void 0,...f,children:((s==null?void 0:s.length)||h)&&r.jsxs(r.Fragment,{children:[s!=null&&s.length?r.jsx("div",{className:Ze.metaRow,children:s.map((x,y)=>r.jsxs("span",{className:Ze.metaItem,children:[x.icon&&r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:x.icon}),x.label]},y))}):null,h]})}));O4.displayName="UltronEventCard";const D4=g.forwardRef(({eyebrow:t="Understanding",icon:a,entities:i,tone:s="info",children:l,...d},h)=>r.jsxs(Dn,{ref:h,tone:s,eyebrow:t,icon:a??r.jsx(ru,{size:14}),...d,children:[l,i&&r.jsx("div",{className:Ze.metaRow,children:i})]}));D4.displayName="UltronUnderstandingCard";const B4={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},F4=g.forwardRef(({eyebrow:t="Decision",icon:a,factors:i,tone:s="warning",children:l,...d},h)=>r.jsxs(Dn,{ref:h,tone:s,eyebrow:t,icon:a??r.jsx(el,{size:14}),...d,children:[l,i!=null&&i.length?r.jsx("div",{className:Ze.metaRow,children:i.map((f,v)=>r.jsx(Cr,{size:"sm",color:B4[s],variant:"subtle",children:f},v))}):null]}));F4.displayName="UltronDecisionCard";const W4="_root_ou64w_8",H4="_xs_ou64w_75",U4="_sm_ou64w_84",q4="_md_ou64w_93",V4="_lg_ou64w_102",G4="_xl_ou64w_111",Y4="_iconOnly_ou64w_122",Q4="_primary_ou64w_132",K4="_secondary_ou64w_148",Z4="_tertiary_ou64w_167",X4="_ghost_ou64w_185",J4="_destructive_ou64w_203",ey="_destructiveSecondary_ou64w_221",ty="_artwork_ou64w_69",ny="_label_ou64w_254",ry="_spinner_ou64w_69",oy="_light_ou64w_281",Gt={root:W4,xs:H4,sm:U4,md:q4,lg:V4,xl:G4,iconOnly:Y4,primary:Q4,secondary:K4,tertiary:Z4,ghost:X4,destructive:J4,destructiveSecondary:ey,artwork:ty,label:ny,spinner:ry,"alloy-spin":"_alloy-spin_ou64w_1",light:oy},ay={primary:Gt.primary,secondary:Gt.secondary,tertiary:Gt.tertiary,ghost:Gt.ghost,destructive:Gt.destructive,"destructive-secondary":Gt.destructiveSecondary},Re=g.forwardRef(({variant:t="primary",size:a="md",loading:i=!1,leadingArtwork:s,trailingArtwork:l,iconOnly:d=!1,className:h,children:f,disabled:v,...x},y)=>{const b=v||i;return r.jsxs("button",{ref:y,className:re(Gt.root,ay[t],Gt[a],d&&Gt.iconOnly,h),disabled:b,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":t,"data-size":a,...x,children:[i&&r.jsx("span",{className:Gt.spinner,"aria-hidden":"true"}),!i&&d&&r.jsx("span",{className:re(Gt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:f}),!i&&!d&&r.jsxs(r.Fragment,{children:[s&&r.jsx("span",{className:re(Gt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:s}),f&&r.jsx("span",{className:Gt.label,children:f}),l&&r.jsx("span",{className:re(Gt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l})]})]})});Re.displayName="Button";function T0({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}T0.displayName="XCircleIcon";const iy=g.forwardRef(({eyebrow:t="Recommendation",icon:a,actions:i,onIgnore:s,ignoreLabel:l="Ignore",tone:d="info",children:h,...f},v)=>{const x=r.jsxs(r.Fragment,{children:[i.map((y,b)=>r.jsx(Re,{size:"sm",variant:y.variant??(b===0?"primary":"secondary"),leadingArtwork:y.icon,loading:y.loading,onClick:y.onClick,children:y.label},b)),s&&r.jsx(Re,{size:"sm",variant:"ghost",leadingArtwork:r.jsx(T0,{size:16}),onClick:s,children:l})]});return r.jsx(Dn,{ref:v,tone:d,eyebrow:t,icon:a??r.jsx(el,{size:14}),footer:x,...f,children:h})});iy.displayName="UltronRecommendationCard";function iu({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}iu.displayName="Lock01Icon";const sy=g.forwardRef(({title:t,eyebrow:a="Approval required",icon:i,approveLabel:s="Approve & send",onApprove:l,approving:d=!1,cancelLabel:h="Cancel",onCancel:f,editLabel:v="Edit",onEdit:x,tone:y="warning",children:b,...k},j)=>{const S=r.jsxs(r.Fragment,{children:[f&&r.jsx(Re,{size:"md",variant:"ghost",onClick:f,children:h}),x&&r.jsx(Re,{size:"md",variant:"secondary",onClick:x,children:v}),r.jsx(Re,{size:"md",variant:"primary",leadingArtwork:r.jsx(Dt,{size:18}),loading:d,onClick:l,children:s})]});return r.jsx(Dn,{ref:j,tone:y,eyebrow:a,title:t,icon:i??r.jsx(iu,{size:14}),trailing:r.jsx(ao,{status:"awaiting-approval"}),footer:S,footerEnd:!0,...k,children:b})});sy.displayName="UltronApprovalCard";const ly=g.forwardRef(({eyebrow:t="Working",icon:a,steps:i,state:s="live",duration:l,tone:d="info",...h},f)=>r.jsx(Dn,{ref:f,tone:d,eyebrow:t,icon:a??r.jsx(li,{size:14}),trailing:r.jsx(ao,{status:s==="done"?"completed":"executing"}),...h,children:r.jsx(ou,{state:s,duration:l,children:i.map((v,x)=>r.jsx(Xs,{type:v.type??"tool",status:v.status??"pending",detail:v.detail,subActivities:v.subActivities,children:v.label},x))})}));ly.displayName="UltronExecutionCard";const cy=g.forwardRef(({headline:t,detail:a,avatar:i,status:s="completed",tone:l="success",footer:d,...h},f)=>r.jsx(Dn,{ref:f,tone:l,fill:!0,accent:!1,trailing:r.jsx(ao,{status:s}),footer:d,...h,children:r.jsxs("div",{className:Ze.resultHero,children:[r.jsx("span",{className:re(Ze.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:i??r.jsx(On,{size:18})}),r.jsxs("div",{children:[r.jsx("div",{className:Ze.resultHeadline,children:t}),a!=null&&r.jsx("div",{className:Ze.resultDetail,children:a})]})]})}));cy.displayName="UltronResultCard";function A0({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}A0.displayName="ZapIcon";const dy=g.forwardRef(({title:t="Want Ultron to handle this automatically next time?",eyebrow:a="Save as workflow",icon:i,saveLabel:s="Save as workflow",onSave:l,saving:d=!1,dismissLabel:h="Not now",onDismiss:f,tone:v="info",children:x,...y},b)=>{const k=r.jsxs(r.Fragment,{children:[r.jsx(Re,{size:"md",variant:"primary",leadingArtwork:r.jsx(tl,{size:18}),loading:d,onClick:l,children:s}),f&&r.jsx(Re,{size:"md",variant:"ghost",onClick:f,children:h})]});return r.jsx(Dn,{ref:b,tone:v,fill:!0,accent:!1,eyebrow:a,title:t,icon:i??r.jsx(A0,{size:14}),footer:k,...y,children:x})});dy.displayName="UltronWorkflowSaveCard";const I0=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};I0.displayName="GitBranch01Icon";function ld({label:t,children:a}){return r.jsxs("div",{className:Ze.clause,children:[r.jsx("span",{className:Ze.clauseLabel,children:t}),r.jsx("span",{className:Ze.clauseBody,children:a})]})}const uy=g.forwardRef(({name:t,eyebrow:a="Workflow",icon:i,when:s,conditions:l,actions:d,status:h,footer:f,tone:v="info",...x},y)=>r.jsx(Dn,{ref:y,tone:v,eyebrow:a,title:t,icon:i??r.jsx(I0,{size:14}),trailing:h?r.jsx(ao,{status:h}):void 0,footer:f,...x,children:r.jsxs("div",{className:Ze.clauses,children:[r.jsx(ld,{label:"When",children:s}),r.jsx(ld,{label:"If",children:l}),r.jsx(ld,{label:"Then",children:d})]})}));uy.displayName="UltronWorkflowPreviewCard";const hy="_root_1nyuz_6",py="_sm_1nyuz_20",fy="_md_1nyuz_29",my="_lg_1nyuz_38",gy="_divider_1nyuz_48",vy="_interactive_1nyuz_53",xy="_disabled_1nyuz_60",yy="_destructive_1nyuz_64",wy="_selected_1nyuz_78",by="_label_1nyuz_87",ky="_description_1nyuz_97",_y="_leadingSlot_1nyuz_101",Cy="_trailingSlot_1nyuz_102",jy="_content_1nyuz_115",Sy="_taSwitch_1nyuz_167",Ny="_taSwitchThumb_1nyuz_188",My="_taCheckbox_1nyuz_203",Ly="_taRadio_1nyuz_226",Ry="_taRadioDot_1nyuz_244",$y="_taExpand_1nyuz_252",Ty="_taStatus_1nyuz_266",Ay="_taStatus_success_1nyuz_273",Iy="_taStatus_warning_1nyuz_274",Ey="_taStatus_error_1nyuz_275",Py="_taStatus_info_1nyuz_276",ht={root:hy,sm:py,md:fy,lg:my,divider:gy,interactive:vy,disabled:xy,destructive:yy,selected:wy,label:by,description:ky,leadingSlot:_y,trailingSlot:Cy,content:jy,taSwitch:Sy,taSwitchThumb:Ny,taCheckbox:My,taRadio:Ly,taRadioDot:Ry,taExpand:$y,taStatus:Ty,taStatus_success:Ay,taStatus_warning:Iy,taStatus_error:Ey,taStatus_info:Py},on=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};on.displayName="ChevronRightIcon";const su=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};su.displayName="ArrowUpRightIcon";const zy="_root_4qytd_5",Oy="_neutral_4qytd_25",Dy="_primary_4qytd_30",By="_success_4qytd_35",Fy="_warning_4qytd_40",Wy="_error_4qytd_45",Hy="_info_4qytd_50",Dp={root:zy,neutral:Oy,primary:Dy,success:By,warning:Fy,error:Wy,info:Hy},to=g.forwardRef(({variant:t="neutral",className:a,children:i,...s},l)=>r.jsx("span",{ref:l,className:re(Dp.root,Dp[t],a),...s,children:i}));to.displayName="Badge";const Uy=({checked:t})=>r.jsx("span",{className:ht.taSwitch,"data-checked":t||void 0,"aria-hidden":"true",children:r.jsx("span",{className:ht.taSwitchThumb})}),qy=({checked:t})=>r.jsx("span",{className:ht.taCheckbox,"data-checked":t||void 0,"aria-hidden":"true",children:t&&r.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:r.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),Vy=({checked:t})=>r.jsx("span",{className:ht.taRadio,"data-checked":t||void 0,"aria-hidden":"true",children:t&&r.jsx("span",{className:ht.taRadioDot})}),Gy=({count:t,label:a})=>{const i=t!==void 0?String(t):a;return i?r.jsx(to,{"aria-hidden":"true",children:i}):null},Yy=({expanded:t})=>r.jsx("span",{className:ht.taExpand,"data-expanded":t||void 0,"aria-hidden":"true",children:r.jsx(on,{size:16,color:"currentColor"})}),Qy=({variant:t})=>r.jsx("span",{className:re(ht.taStatus,ht[`taStatus_${t}`]),"aria-hidden":"true"}),Ky=new Set(["badge","status"]),rn=g.forwardRef(({label:t,description:a,leadingSlot:i,trailingSlot:s,trailingAction:l,checked:d,defaultChecked:h=!1,onCheckedChange:f,badgeCount:v,badgeLabel:x,expanded:y=!1,statusVariant:b="success",divider:k=!0,size:j="md",interactive:S,selected:C=!1,destructive:_=!1,disabled:$=!1,className:R,onClick:N,onKeyDown:A,...M},T)=>{const E=l==="switch"||l==="checkbox"||l==="radio",[z,q]=g.useState(h),G=E?d!==void 0?d:z:!1,X=S||!!N||E||l!==void 0&&!Ky.has(l),Q=l==="switch"?"switch":l==="checkbox"?"checkbox":l==="radio"?"radio":X?"button":void 0,ne=g.useCallback(oe=>{if(!$){if(E){const ie=!G;d===void 0&&q(ie),f==null||f(ie)}N==null||N(oe)}},[$,E,G,d,f,N]),te=g.useCallback(oe=>{X&&!$&&(oe.key==="Enter"||oe.key===" ")&&(oe.preventDefault(),ne(oe)),A==null||A(oe)},[X,$,ne,A]),ce=s??(()=>{if(!l)return null;switch(l){case"chevron":return r.jsx(on,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return r.jsx(su,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return r.jsx(Uy,{checked:G});case"checkbox":return r.jsx(qy,{checked:G});case"radio":return r.jsx(Vy,{checked:G});case"badge":return r.jsx(Gy,{count:v,label:x});case"expand":return r.jsx(Yy,{expanded:y});case"status":return r.jsx(Qy,{variant:b});default:return null}})();return r.jsxs("div",{ref:T,role:Q,tabIndex:X&&!$?0:void 0,"aria-checked":E?G:void 0,"aria-selected":C||void 0,"aria-disabled":$||void 0,"data-selected":C||void 0,"data-disabled":$||void 0,"data-destructive":_||void 0,"data-trailing-action":l??void 0,className:re(ht.root,ht[j],k&&ht.divider,X&&ht.interactive,C&&ht.selected,_&&ht.destructive,$&&ht.disabled,R),onClick:$?void 0:ne,onKeyDown:te,...M,children:[i&&r.jsx("div",{className:ht.leadingSlot,children:i}),r.jsxs("div",{className:ht.content,children:[r.jsx("span",{className:ht.label,children:t}),a&&r.jsx("span",{className:ht.description,children:a})]}),ce&&r.jsx("div",{className:ht.trailingSlot,children:ce})]})});rn.displayName="ListItem";const Zy=g.forwardRef(({title:t,meta:a,icon:i,status:s,...l},d)=>r.jsx(rn,{ref:d,label:t,description:a,leadingSlot:i?r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:i}):void 0,trailingSlot:r.jsx(ao,{status:s}),...l}));Zy.displayName="UltronActivityStreamItem";const Xy="_root_1sz1z_7",Jy="_status_1sz1z_50",cd={root:Xy,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:Jy},lu=g.forwardRef(({disabled:t=!1,size:a="md",escapeTarget:i,onEscape:s,className:l,children:d,...h},f)=>{const v=g.useRef(null),[x,y]=g.useState(""),b=g.Children.map(d,k=>{if(!g.isValidElement(k))return k;const j=k.props;return g.cloneElement(k,{groupDisabled:t||!!j.groupDisabled})});return g.useEffect(()=>{if(!i||!s)return;const k=j=>{j.key==="Escape"&&s()};return i.addEventListener("keydown",k),()=>i.removeEventListener("keydown",k)},[i,s]),g.useCallback(k=>y(k),[]),r.jsxs("div",{ref:f,"data-size":a,className:re(cd.root,cd[`size-${a}`],l),...h,children:[b,r.jsx("span",{ref:v,className:cd.status,role:"status","aria-live":"polite",children:x})]})});lu.displayName="ComposerActions";function dd({size:t=24,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})}const cu=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};cu.displayName="SearchSmIcon";const As=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};As.displayName="Trash03Icon";const E0=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};E0.displayName="SunIcon";const P0=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};P0.displayName="ArrowNarrowRightIcon";function Gr({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function Bp({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function e9({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const Ws=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ws.displayName="ChevronSelectorVerticalIcon";const Yr=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:a}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:a,strokeWidth:d,strokeLinecap:"round",strokeLinejoin:"round"})]})};Yr.displayName="ClipboardCheckIcon";const z0=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.25:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:a,strokeWidth:d})})};z0.displayName="SettingsGearIcon";const O0=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 6L9 12L15 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};O0.displayName="ChevronLeftIcon";const D0=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3 3L21 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};D0.displayName="EyeOffIcon";const B0=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};B0.displayName="StopIcon";const F0=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};F0.displayName="RecordingIcon";const W0=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};W0.displayName="BankIcon";function rl({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}rl.displayName="ArrowNarrowUpIcon";function H0({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}H0.displayName="ArrowNarrowDownIcon";function du({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}du.displayName="Microphone02Icon";const U0=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};U0.displayName="AlertTriangleIcon";const uu=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};uu.displayName="BankNote01Icon";const q0=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V6.5M2 5V17C2 18.1046 4.46243 19 7.5 19M7.5 11C7.33145 11 7.16468 10.9972 7 10.9918C4.19675 10.9 2 10.0433 2 9M7.5 15C4.46243 15 2 14.1046 2 13M22 11.5C22 12.6046 19.5376 13.5 16.5 13.5C13.4624 13.5 11 12.6046 11 11.5M22 11.5C22 10.3954 19.5376 9.5 16.5 9.5C13.4624 9.5 11 10.3954 11 11.5M22 11.5V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11.5M22 15.25C22 16.3546 19.5376 17.25 16.5 17.25C13.4624 17.25 11 16.3546 11 15.25",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};q0.displayName="CoinsStacked03Icon";function V0({size:t=16,color:a="currentColor",...i}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[r.jsx("path",{d:"M12 2V22",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const hu=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};hu.displayName="Map01Icon";const G0=({size:t=16,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[r.jsx("path",{d:"M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M16.5 9.5L7.5 4.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};G0.displayName="PackageIcon";const Y0=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Y0.displayName="ThumbsUpIcon";const Q0=({size:t=24,color:a="currentColor",strokeWidth:i,...s})=>{const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Q0.displayName="ThumbsDownIcon";function K0({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M16 7.99999V13C16 13.7956 16.3161 14.5587 16.8787 15.1213C17.4413 15.6839 18.2044 16 19 16C19.7957 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V12C21.9999 9.74302 21.2362 7.55247 19.8333 5.78452C18.4303 4.01658 16.4706 2.77521 14.2726 2.26229C12.0747 1.74936 9.76794 1.99503 7.72735 2.95936C5.68676 3.92368 4.0324 5.54995 3.03326 7.57371C2.03412 9.59748 1.74897 11.8997 2.22417 14.1061C2.69937 16.3125 3.90698 18.2932 5.65063 19.7263C7.39429 21.1593 9.57143 21.9603 11.8281 21.9991C14.0847 22.0379 16.2881 21.3122 18.08 19.94M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79085 9.79086 7.99999 12 7.99999C14.2091 7.99999 16 9.79085 16 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}K0.displayName="AtSignIcon";function Hs({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 21V15.6C15 15.0399 15 14.7599 14.891 14.546C14.7951 14.3578 14.6422 14.2049 14.454 14.109C14.2401 14 13.9601 14 13.4 14H10.6C10.0399 14 9.75992 14 9.54601 14.109C9.35785 14.2049 9.20487 14.3578 9.10899 14.546C9 14.7599 9 15.0399 9 15.6V21M3 7C3 8.65685 4.34315 10 6 10C7.65685 10 9 8.65685 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 8.65685 16.3431 10 18 10C19.6569 10 21 8.65685 21 7M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Hs.displayName="Building02Icon";function pu({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}pu.displayName="Building05Icon";function ol({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}ol.displayName="CheckVerified01Icon";function Z0({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Z0.displayName="Copy01Icon";function X0({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z",fill:a})})}X0.displayName="DotsVerticalIcon";function J0({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}J0.displayName="Edit02Icon";function em({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12.7076 18.3639L11.2933 19.7781C9.34072 21.7308 6.1749 21.7308 4.22228 19.7781C2.26966 17.8255 2.26966 14.6597 4.22228 12.7071L5.63649 11.2929M18.3644 12.7071L19.7786 11.2929C21.7312 9.34024 21.7312 6.17441 19.7786 4.22179C17.826 2.26917 14.6602 2.26917 12.7076 4.22179L11.2933 5.636M8.50045 15.4999L15.5005 8.49994",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}em.displayName="Link01Icon";function al({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}al.displayName="LinkExternal01Icon";function tm({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M15 4.6C15 4.03995 15 3.75992 14.891 3.54601C14.7951 3.35785 14.6422 3.20487 14.454 3.10899C14.2401 3 13.9601 3 13.4 3H10.6C10.0399 3 9.75992 3 9.54601 3.10899C9.35785 3.20487 9.20487 3.35785 9.10899 3.54601C9 3.75992 9 4.03995 9 4.6V7.4C9 7.96005 9 8.24008 8.89101 8.45399C8.79513 8.64215 8.64215 8.79513 8.45399 8.89101C8.24008 9 7.96005 9 7.4 9H4.6C4.03995 9 3.75992 9 3.54601 9.10899C3.35785 9.20487 3.20487 9.35785 3.10899 9.54601C3 9.75992 3 10.0399 3 10.6V13.4C3 13.9601 3 14.2401 3.10899 14.454C3.20487 14.6422 3.35785 14.7951 3.54601 14.891C3.75992 15 4.03995 15 4.6 15H7.4C7.96005 15 8.24008 15 8.45399 15.109C8.64215 15.2049 8.79513 15.3578 8.89101 15.546C9 15.7599 9 16.0399 9 16.6V19.4C9 19.9601 9 20.2401 9.10899 20.454C9.20487 20.6422 9.35785 20.7951 9.54601 20.891C9.75992 21 10.0399 21 10.6 21H13.4C13.9601 21 14.2401 21 14.454 20.891C14.6422 20.7951 14.7951 20.6422 14.891 20.454C15 20.2401 15 19.9601 15 19.4V16.6C15 16.0399 15 15.7599 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109C15.7599 15 16.0399 15 16.6 15H19.4C19.9601 15 20.2401 15 20.454 14.891C20.6422 14.7951 20.7951 14.6422 20.891 14.454C21 14.2401 21 13.9601 21 13.4V10.6C21 10.0399 21 9.75992 20.891 9.54601C20.7951 9.35785 20.6422 9.20487 20.454 9.10899C20.2401 9 19.9601 9 19.4 9L16.6 9C16.0399 9 15.7599 9 15.546 8.89101C15.3578 8.79513 15.2049 8.64215 15.109 8.45399C15 8.24008 15 7.96005 15 7.4V4.6Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}tm.displayName="MedicalCrossIcon";function Us({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Us.displayName="MessageCircle02Icon";function fu({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}fu.displayName="MinusIcon";function nm({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}nm.displayName="Moon01Icon";function rm({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}rm.displayName="Pin01Icon";function mu({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M8.8125 10.4167L10.9375 12.5278L15.7188 7.77778M20.5 21.5V7.56667C20.5 5.79317 20.5 4.90642 20.1526 4.22903C19.847 3.63318 19.3594 3.14875 18.7596 2.84515C18.0778 2.5 17.1852 2.5 15.4 2.5H8.6C6.81483 2.5 5.92225 2.5 5.24041 2.84515C4.64064 3.14875 4.15301 3.63318 3.84742 4.22903C3.5 4.90642 3.5 5.79317 3.5 7.56667V21.5L6.42188 19.3889L9.07812 21.5L12 19.3889L14.9219 21.5L17.5781 19.3889L20.5 21.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}mu.displayName="ReceiptCheckIcon";function om({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}om.displayName="Trash01Icon";function gu({size:t=16,color:a="currentColor",strokeWidth:i,...s}){const l=typeof t=="number"?t:parseFloat(t),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}gu.displayName="XCloseIcon";const t9="_base_i93xz_11",n9="_icon_i93xz_45",r9="_sendReady_i93xz_65",o9="_sendStreaming_i93xz_66",a9="_sendDisabled_i93xz_67",i9="_sendError_i93xz_68",s9="_attachIdle_i93xz_131",l9="_attachDisabled_i93xz_145",c9="_attachError_i93xz_152",d9="_voiceIdle_i93xz_165",u9="_voiceRecording_i93xz_179",h9="_voiceDisabled_i93xz_189",p9="_iconStack_i93xz_200",f9="_iconLayer_i93xz_209",lt={base:t9,icon:n9,sendReady:r9,sendStreaming:o9,sendDisabled:a9,sendError:i9,attachIdle:s9,attachDisabled:l9,attachError:c9,voiceIdle:d9,voiceRecording:u9,voiceDisabled:h9,iconStack:p9,iconLayer:f9},m9={hidden:void 0,ready:lt.sendReady,"disabled-invalid":lt.sendDisabled,streaming:lt.sendStreaming,error:lt.sendError},g9=(t,a,i)=>{switch(t){case"ready":return"Send message";case"disabled-invalid":return a?`Cannot send: ${a}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},Xo=g.forwardRef(({state:t,onSend:a,onStop:i,onRetry:s,invalidReason:l,errorMessage:d,groupDisabled:h,className:f,style:v,...x},y)=>{const b=g.useRef(null),k=g.useRef(null),j=g.useCallback(N=>{k.current=N,typeof y=="function"?y(N):y&&(y.current=N)},[y]),S=g.useCallback(()=>{if(t==="ready"){a==null||a();return}if(t==="streaming"){i==null||i();return}if(t==="error"){const N=k.current;N&&(N.dataset.pressed="true",b.current&&clearTimeout(b.current),b.current=setTimeout(()=>{N.dataset.pressed="false"},140)),s==null||s()}},[t,a,i,s]);if(t==="hidden")return null;const C=!h&&(t==="ready"||t==="streaming"||t==="error"),_=g9(t,l,d),$=t==="disabled-invalid"?l??"Cannot send":t==="error"?d??"Send failed — click to retry":null,R=r.jsx("button",{ref:j,type:"button","data-composer-action":"send","data-state":t,className:re(lt.base,m9[t],f),style:v,"aria-label":_,disabled:!C,onClick:S,...x,children:r.jsxs("span",{className:lt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[r.jsx("span",{className:lt.iconLayer,"data-active":t==="ready"||t==="disabled-invalid"?"true":"false",children:r.jsx(rl,{size:"100%",strokeWidth:2})}),r.jsx("span",{className:lt.iconLayer,"data-active":t==="streaming"?"true":"false",children:r.jsx(B0,{size:"100%",strokeWidth:1.75})}),r.jsx("span",{className:lt.iconLayer,"data-active":t==="error"?"true":"false",children:r.jsx(li,{size:"100%",strokeWidth:2})})]})});return $?r.jsx(jr,{content:$,placement:"top",children:R}):R});Xo.displayName="ComposerSendButton";const v9={idle:lt.attachIdle,disabled:lt.attachDisabled,error:lt.attachError},x9=(t,a,i)=>{switch(t){case"idle":return"Add attachment";case"disabled":return a?`Attachments unavailable: ${a}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},y9=g.forwardRef(({state:t,onSelect:a,accept:i,multiple:s=!0,disabledReason:l,errorMessage:d,groupDisabled:h,className:f,style:v,...x},y)=>{const b=g.useRef(null),k=g.useCallback(()=>{var R;(t==="idle"||t==="error")&&((R=b.current)==null||R.click())},[t]),j=g.useCallback(R=>{const N=R.target.files;N&&N.length>0&&(a==null||a(N)),R.target.value=""},[a]),S=!h&&t!=="disabled",C=x9(t,l,d),_=t==="disabled"?l??"Attachments unavailable":t==="error"?d??"Attachment failed":null,$=r.jsxs("button",{ref:y,type:"button","data-composer-action":"attachment","data-state":t,className:re(lt.base,v9[t],f),style:v,"aria-label":C,disabled:!S,onClick:k,...x,children:[r.jsx("span",{className:lt.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:r.jsx(oo,{size:"100%",strokeWidth:2})}),r.jsx("input",{ref:b,type:"file",accept:i,multiple:s,onChange:j,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return _?r.jsx(jr,{content:_,placement:"top",children:$}):$});y9.displayName="ComposerAttachment";const w9={idle:lt.voiceIdle,recording:lt.voiceRecording,disabled:lt.voiceDisabled},b9=(t,a)=>{switch(t){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return a?`Voice unavailable: ${a}`:"Voice unavailable"}},am=g.forwardRef(({state:t,onStartRecording:a,onStopRecording:i,disabledReason:s,groupDisabled:l,className:d,style:h,...f},v)=>{const x=g.useCallback(()=>{if(t==="idle"){a==null||a();return}if(t==="recording"){i==null||i();return}},[t,a,i]),y=!l&&t!=="disabled",b=b9(t,s),k=t==="disabled"?s??"Voice unavailable":null,j=r.jsx("button",{ref:v,type:"button","data-composer-action":"voice","data-state":t,className:re(lt.base,w9[t],d),style:h,"aria-label":b,"aria-pressed":t==="recording"||void 0,disabled:!y,onClick:x,...f,children:r.jsxs("span",{className:lt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[r.jsx("span",{className:lt.iconLayer,"data-active":t!=="recording"?"true":"false",children:r.jsx(du,{size:"100%",strokeWidth:1.5})}),r.jsx("span",{className:lt.iconLayer,"data-active":t==="recording"?"true":"false",children:r.jsx(F0,{size:"100%",strokeWidth:1.5})})]})});return k?r.jsx(jr,{content:k,placement:"top",children:j}):j});am.displayName="ComposerVoiceButton";const k9=g.forwardRef(({value:t,onChange:a,onSubmit:i,placeholder:s="Ask Ultron…",sending:l=!1,disabled:d=!1,voice:h=!0,maxRows:f=4,radius:v="lg",leadingActions:x,className:y},b)=>{const k=l?"streaming":t.trim().length===0?"hidden":"ready";return r.jsx(j0,{className:y,style:{flex:"0 0 auto"},children:r.jsx(S0,{ref:b,value:t,onChange:a,onSubmit:i,placeholder:s,maxRows:f,radius:v,disabled:d,children:r.jsxs(lu,{size:"md",disabled:d,children:[x,h&&r.jsx(am,{state:d?"disabled":"idle"}),r.jsx(Xo,{state:k,onSend:i,onStop:i})]})})})});k9.displayName="UltronCommandBar";const _9=g.forwardRef(({stages:t,state:a="live",duration:i,...s},l)=>r.jsx(ou,{ref:l,state:a,duration:i,...s,children:t.map((d,h)=>r.jsx(Xs,{type:d.type??"content",status:d.status??"pending",icon:d.icon,detail:d.detail,children:d.label},h))}));_9.displayName="UltronThreadTimeline";const C9="_root_ghwhu_10",j9="_badge_ghwhu_27",S9="_badgeIcon_ghwhu_38",N9="_green_ghwhu_59",M9="_yellow_ghwhu_60",L9="_matcha_ghwhu_61",R9="_purple_ghwhu_62",$9="_blue_ghwhu_63",T9="_azure_ghwhu_64",A9="_red_ghwhu_65",I9="_orange_ghwhu_66",E9="_pink_ghwhu_67",P9="_slate_ghwhu_68",z9="_content_ghwhu_73",O9="_label_ghwhu_83",D9="_valueRow_ghwhu_97",B9="_change_ghwhu_106",F9="_value_ghwhu_97",Yn={root:C9,badge:j9,badgeIcon:S9,green:N9,yellow:M9,matcha:L9,purple:R9,blue:$9,azure:T9,red:A9,orange:I9,pink:E9,slate:P9,content:z9,label:O9,valueRow:D9,change:B9,value:F9},W9=g.forwardRef(({color:t="slate",icon:a,label:i,value:s,change:l,className:d,...h},f)=>r.jsxs("div",{ref:f,className:re(Yn.root,d),...h,children:[r.jsx("div",{className:re(Yn.badge,Yn[t]),"aria-hidden":"true",children:r.jsx("span",{className:Yn.badgeIcon,children:a})}),r.jsxs("div",{className:Yn.content,children:[r.jsx("span",{className:Yn.label,children:i}),r.jsxs("div",{className:Yn.valueRow,children:[r.jsx("span",{className:Yn.value,children:s}),l!=null&&r.jsx("span",{className:Yn.change,children:l})]})]})]}));W9.displayName="DataCard";const H9="_root_d0j6n_7",U9="_icon_d0j6n_21",q9="_text_d0j6n_33",V9="_positive_d0j6n_41",G9="_warning_d0j6n_45",Y9="_negative_d0j6n_49",Ss={root:H9,icon:U9,text:q9,positive:V9,warning:G9,negative:Y9};function Q9(t){return t==="up"?"positive":"negative"}const K9=g.forwardRef((t,a)=>{const{mode:i,value:s,className:l,...d}=t,h=i==="trend"?t.severity??Q9(t.trend):t.severity,{severity:f,...v}=d,x=i==="trend"?(({trend:b,severity:k,...j})=>j)(v):v,y=i==="trend"?t.trend==="up"?rl:H0:null;return r.jsxs("span",{ref:a,className:re(Ss.root,Ss[h],l),...x,children:[r.jsx("span",{className:Ss.text,children:s}),y&&r.jsx("span",{className:Ss.icon,"aria-hidden":"true",children:r.jsx(y,{size:14})})]})});K9.displayName="ValueChangeLabel";const Z9="_root_1lq10_1",X9="_horizontal_1lq10_9",J9="_vertical_1lq10_15",e6="_solid_1lq10_32",t6="_dashed_1lq10_36",Ns={root:Z9,horizontal:X9,vertical:J9,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:e6,dashed:t6},n6=g.forwardRef(({thickness:t=1,orientation:a="horizontal",variant:i="solid",className:s,...l},d)=>r.jsx("hr",{ref:d,role:"separator","aria-orientation":a,className:re(Ns.root,Ns[`thickness-${t}`],Ns[a],Ns[i],s),...l}));n6.displayName="Divider";const r6="_header_vxgy2_95",o6="_title_vxgy2_107",a6="_closeBtn_vxgy2_120",i6="_content_vxgy2_152",s6="_footer_vxgy2_163",Za={header:r6,title:o6,closeBtn:a6,content:i6,footer:s6},l6=g.forwardRef(({onClose:t,children:a,className:i,...s},l)=>r.jsxs("div",{ref:l,className:re(Za.header,i),...s,children:[r.jsx("span",{className:Za.title,children:a}),t&&r.jsx("button",{type:"button",className:Za.closeBtn,onClick:t,"aria-label":"Close",children:r.jsx(si,{size:16})})]}));l6.displayName="DialogHeader";const c6=g.forwardRef(({children:t,className:a,...i},s)=>r.jsx("div",{ref:s,className:re(Za.content,a),...i,children:t}));c6.displayName="DialogContent";const d6=g.forwardRef(({children:t,className:a,...i},s)=>r.jsx("div",{ref:s,className:re(Za.footer,a),...i,children:t}));d6.displayName="DialogFooter";const u6="_root_1dntq_7",h6="_badge_1dntq_57",p6="_badgeIconSlot_1dntq_74",f6="_content_1dntq_82",m6="_text_1dntq_90",g6="_title_1dntq_99",v6="_description_1dntq_120",x6="_actions_1dntq_131",y6="_dot_1dntq_137",w6="_actionLink_1dntq_144",b6="_primaryAction_1dntq_162",k6="_trailing_1dntq_170",$t={root:u6,badge:h6,badgeIconSlot:p6,content:f6,text:m6,title:g6,description:v6,actions:x6,dot:y6,actionLink:w6,primaryAction:b6,trailing:k6},_6=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),C6=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),j6=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),Fp=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),S6={error:_6,warning:j6,success:C6,info:Fp,feature:Fp},im=g.forwardRef(({status:t="info",variant:a="lighter",size:i="sm",title:s,description:l,action:d,onAction:h,learnMore:f,onLearnMore:v,onDismiss:x,className:y,...b},k)=>{const j=S6[t],S=i==="lg",C=x?r.jsx(Re,{variant:"ghost",size:"xs",iconOnly:!0,onClick:x,"aria-label":"Dismiss",children:r.jsx(si,{size:12})}):null;return r.jsxs("div",{ref:k,role:"alert",className:re($t.root,y),"data-status":t,"data-variant":a,"data-size":i,...b,children:[r.jsx("span",{className:$t.badge,"aria-hidden":"true",children:r.jsx("span",{className:re("alloy-icon-slot",$t.badgeIconSlot),children:r.jsx(j,{})})}),S?r.jsxs("div",{className:$t.content,children:[r.jsxs("div",{className:$t.text,children:[r.jsx("p",{className:$t.title,children:s}),l&&r.jsx("p",{className:$t.description,children:l})]}),(d||f)&&r.jsxs("div",{className:$t.actions,children:[d&&r.jsx("button",{type:"button",className:re($t.actionLink,$t.primaryAction),onClick:h,children:d}),d&&f&&r.jsx("span",{className:$t.dot,"aria-hidden":"true",children:"·"}),f&&r.jsx("button",{type:"button",className:$t.actionLink,onClick:v,children:f})]})]}):r.jsx("p",{className:$t.title,children:s}),S?C:(d||x)&&r.jsxs("div",{className:$t.trailing,children:[d&&r.jsx("button",{type:"button",className:re($t.actionLink,$t.primaryAction),onClick:h,children:d}),C]})]})});im.displayName="Alert";const N6="_stack_x4xl7_11",M6="_item_x4xl7_28",L6="_itemExiting_x4xl7_33",zd={stack:N6,item:M6,itemExiting:L6},R6=g.createContext(null);function $6({id:t,title:a,description:i,status:s,variant:l,size:d,action:h,onAction:f,duration:v,exiting:x,onRemove:y}){const b=g.useCallback(()=>y(t),[t,y]);return r.jsx("div",{className:re(zd.item,x&&zd.itemExiting),onAnimationEnd:x?b:void 0,children:r.jsx(im,{status:s,variant:l,size:d,title:a,description:i,action:h,onAction:f,onDismiss:b,style:{width:"100%"}})})}function T6({toasts:t,onStartExit:a,onRemove:i}){return g.useEffect(()=>{const s=[];return t.forEach(l=>{l.duration>0&&!l.exiting&&s.push(setTimeout(()=>a(l.id),l.duration))}),()=>s.forEach(clearTimeout)},[t,a]),t.length===0?null:Js.createPortal(r.jsx("div",{className:zd.stack,"aria-live":"polite","aria-atomic":"false",children:t.map(s=>r.jsx($6,{...s,onRemove:i},s.id))}),document.body)}function A6({children:t}){const[a,i]=g.useState([]),s=g.useRef(0),l=g.useCallback(f=>{const v=`toast-${++s.current}`;return i(x=>[...x,{id:v,title:f.title,description:f.description,status:f.status??"info",variant:f.variant??"stroke",size:f.size??"sm",action:f.action,onAction:f.onAction,duration:f.duration??4e3,exiting:!1}]),v},[]),d=g.useCallback(f=>{i(v=>v.map(x=>x.id===f?{...x,exiting:!0}:x))},[]),h=g.useCallback(f=>{i(v=>v.filter(x=>x.id!==f))},[]);return r.jsxs(R6.Provider,{value:{addToast:l,removeToast:d},children:[t,r.jsx(T6,{toasts:a,onStartExit:d,onRemove:h})]})}const I6="_root_1s0ek_5",E6="_list_1s0ek_11",P6="_item_1s0ek_23",z6="_separator_1s0ek_31",O6="_link_1s0ek_47",D6="_current_1s0ek_68",B6="_iconSlot_1s0ek_76",In={root:I6,list:E6,item:P6,separator:z6,link:O6,current:D6,iconSlot:B6},F6=()=>r.jsx("span",{className:In.separator,"aria-hidden":"true",children:"/"}),W6=()=>r.jsx("span",{className:In.separator,"aria-hidden":"true",children:r.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),H6=g.forwardRef(({items:t,separator:a="slash",className:i,...s},l)=>{const d=a==="chevron"?W6:F6;return r.jsx("nav",{ref:l,"aria-label":"Breadcrumb",className:re(In.root,i),...s,children:r.jsx("ol",{className:In.list,children:t.map((h,f)=>{const v=f===t.length-1,x=!v&&(!!h.href||!!h.onClick);return r.jsxs("li",{className:In.item,children:[f>0&&r.jsx(d,{}),x?r.jsxs("a",{href:h.href,onClick:h.onClick,className:In.link,"aria-label":h.label,children:[h.icon&&r.jsx("span",{className:re(In.iconSlot,"alloy-icon-slot"),children:h.icon}),r.jsx("span",{children:h.label})]}):r.jsxs("span",{className:re(In.link,v&&In.current),"aria-current":v?"page":void 0,children:[h.icon&&r.jsx("span",{className:re(In.iconSlot,"alloy-icon-slot"),children:h.icon}),r.jsx("span",{children:h.label})]})]},f)})})})});H6.displayName="Breadcrumb";const U6="_root_139vz_6",q6="_divider_139vz_14",V6="_item_139vz_19",G6="_label_139vz_25",Y6="_description_139vz_26",Q6="_chevron_139vz_27",K6="_iconSlot_139vz_28",Z6="_hitTarget_139vz_32",X6="_size_sm_139vz_37",J6="_size_md_139vz_43",e8="_size_lg_139vz_49",t8="_header_139vz_59",n8="_headerContent_139vz_59",r8="_checkboxWrap_139vz_60",o8="_labelBlock_139vz_157",a8="_trailingSlot_139vz_60",i8="_body_139vz_199",s8="_bodyInner_139vz_209",l8="_bodyContent_139vz_214",kt={root:U6,divider:q6,item:V6,label:G6,description:Y6,chevron:Q6,iconSlot:K6,hitTarget:Z6,size_sm:X6,size_md:J6,size_lg:e8,header:t8,headerContent:n8,checkboxWrap:r8,labelBlock:o8,trailingSlot:a8,body:i8,bodyInner:s8,bodyContent:l8},c8="_root_17t97_6",d8="_disabled_17t97_12",u8="_sm_17t97_18",h8="_md_17t97_26",p8="_lg_17t97_34",f8="_controlWrap_17t97_43",m8="_input_17t97_52",g8="_box_17t97_67",v8="_boxChecked_17t97_96",x8="_boxError_17t97_106",y8="_labelWrap_17t97_116",w8="_label_17t97_116",b8="_error_17t97_138",k8="_required_17t97_140",_8="_description_17t97_145",Jt={root:c8,disabled:d8,sm:u8,md:h8,lg:p8,controlWrap:f8,input:m8,box:g8,boxChecked:v8,boxError:x8,labelWrap:y8,label:w8,error:b8,required:k8,description:_8},sm=g.forwardRef(({checked:t,defaultChecked:a=!1,indeterminate:i=!1,onChange:s,disabled:l,error:d,size:h="md",label:f,description:v,id:x,name:y,value:b,required:k,className:j},S)=>{const C=g.useId(),_=x??C,$=g.useRef(null);g.useEffect(()=>{$.current&&($.current.indeterminate=i)},[i]);const R=t!==void 0,[N,A]=g.useState(a),M=R?t:N,T=z=>{R||A(z.target.checked),s==null||s(z.target.checked)},E=M||i;return r.jsxs("div",{className:re(Jt.root,Jt[h],l&&Jt.disabled,d&&Jt.error,j),children:[r.jsxs("div",{className:Jt.controlWrap,children:[r.jsx("input",{ref:z=>{$.current=z,typeof S=="function"?S(z):S&&(S.current=z)},type:"checkbox",id:_,name:y,value:b,checked:M,disabled:l,required:k,"aria-invalid":d||void 0,onChange:T,className:Jt.input}),r.jsx("span",{className:re(Jt.box,E&&Jt.boxChecked,d&&Jt.boxError),"aria-hidden":"true",children:i?r.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:r.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):M?r.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:r.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(f||v)&&r.jsxs("div",{className:Jt.labelWrap,children:[f&&r.jsxs("label",{htmlFor:_,className:Jt.label,children:[f,k&&r.jsx("span",{className:Jt.required,"aria-hidden":"true",children:" *"})]}),v&&r.jsx("span",{className:Jt.description,children:v})]})]})});sm.displayName="Checkbox";const lm=g.createContext(null),Od=g.createContext(0),cm=g.forwardRef(({type:t="multiple",collapsible:a=!0,value:i,defaultValue:s,onValueChange:l,divider:d=!0,size:h="md",disabled:f=!1,className:v,children:x,...y},b)=>{const k=g.useMemo(()=>Array.isArray(s)?new Set(s):typeof s=="string"?new Set([s]):new Set,[]),[j,S]=g.useState(k),C=i!==void 0,_=g.useMemo(()=>C?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:j,[C,i,j]),$=g.useCallback(A=>_.has(A),[_]),R=g.useCallback(A=>{const M=new Set(_);t==="single"?M.has(A)?a&&M.delete(A):(M.clear(),M.add(A)):M.has(A)?M.delete(A):M.add(A),C||S(M),l&&l(t==="single"?M.values().next().value??"":Array.from(M))},[_,t,a,C,l]),N=g.useMemo(()=>({type:t,collapsible:a,size:h,disabled:f,isExpanded:$,toggle:R}),[t,a,h,f,$,R]);return r.jsx("div",{ref:b,"data-accordion-root":"","data-divider":d||void 0,"data-disabled":f||void 0,"data-size":h,className:re(kt.root,d&&kt.divider,v),...y,children:r.jsx(lm.Provider,{value:N,children:r.jsx(Od.Provider,{value:0,children:x})})})});cm.displayName="Accordion";function Ms(t,a){const i=t.closest("[data-accordion-root]");if(!i)return;const s=t.getAttribute("data-accordion-depth"),l=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${s}"]`)).filter(f=>f.closest("[data-accordion-root]")===i);if(l.length===0)return;const d=l.indexOf(t);let h;switch(a){case"first":h=l[0];break;case"last":h=l[l.length-1];break;case"next":h=l[(d+1)%l.length];break;case"prev":h=l[(d-1+l.length)%l.length];break}h.focus()}const dm=g.forwardRef(({value:t,label:a,description:i,icon:s,leadingSlot:l,trailingSlot:d,chevronPosition:h="leading",selectable:f=!1,checked:v,defaultChecked:x=!1,indeterminate:y=!1,onCheckedChange:b,expanded:k,defaultExpanded:j=!1,onExpandedChange:S,disabled:C=!1,size:_,className:$,children:R,...N},A)=>{const M=g.useContext(lm),T=g.useContext(Od),E=M!==null,z=_??(M==null?void 0:M.size)??"md",q=C||(M==null?void 0:M.disabled)||!1,[G,X]=g.useState(j);let Q;E?Q=t!==void 0?M.isExpanded(t):!1:k!==void 0?Q=k:Q=G;const ne=g.useCallback(()=>{if(q)return;if(E){if(t===void 0)return;const L=M.isExpanded(t);M.toggle(t);const U=M.type==="single"&&!M.collapsible&&L?!0:!L;S==null||S(U);return}const I=!Q;k===void 0&&X(I),S==null||S(I)},[q,E,M,t,Q,k,S]),te=g.useCallback(I=>b==null?void 0:b(I),[b]),ce=g.useCallback(I=>{if(I.key==="Enter"||I.key===" "){I.preventDefault(),ne();return}if(E)switch(I.key){case"ArrowDown":I.preventDefault(),Ms(I.currentTarget,"next");break;case"ArrowUp":I.preventDefault(),Ms(I.currentTarget,"prev");break;case"Home":I.preventDefault(),Ms(I.currentTarget,"first");break;case"End":I.preventDefault(),Ms(I.currentTarget,"last");break}},[ne,E]),oe=g.useId(),ie=`${oe}-header`,Z=`${oe}-body`,W=z==="sm"?16:z==="md"?18:20,H=l??r.jsxs(r.Fragment,{children:[f&&r.jsx("span",{className:kt.checkboxWrap,children:r.jsx(sm,{size:z,checked:v,defaultChecked:x,indeterminate:y,disabled:q,onChange:te})}),s&&r.jsx("span",{className:kt.iconSlot,"aria-hidden":"true",children:s})]});return r.jsxs("div",{ref:A,"data-accordion-item":"","data-expanded":Q||void 0,"data-disabled":q||void 0,"data-size":z,"data-depth":T,className:re(kt.item,kt[`size_${z}`],$),style:{"--accordion-depth":T},...N,children:[r.jsxs("div",{className:kt.header,children:[r.jsx("button",{type:"button",id:ie,"data-accordion-header-button":"","data-accordion-depth":T,className:kt.hitTarget,"aria-expanded":Q,"aria-controls":Z,"aria-disabled":q||void 0,disabled:q,onClick:ne,onKeyDown:ce}),r.jsxs("div",{className:kt.headerContent,children:[h==="leading"&&r.jsx("span",{className:kt.chevron,"aria-hidden":"true",children:r.jsx(on,{size:W,color:"currentColor"})}),H,r.jsxs("div",{className:kt.labelBlock,children:[r.jsx("span",{className:kt.label,children:a}),i&&r.jsx("span",{className:kt.description,children:i})]}),d&&r.jsx("div",{className:kt.trailingSlot,children:d}),h==="trailing"&&r.jsx("span",{className:kt.chevron,"aria-hidden":"true",children:r.jsx(on,{size:W,color:"currentColor"})})]})]}),r.jsx("div",{id:Z,role:"region","aria-labelledby":ie,className:kt.body,"aria-hidden":!Q,children:r.jsx("div",{className:kt.bodyInner,children:r.jsx("div",{className:kt.bodyContent,children:r.jsx(Od.Provider,{value:T+1,children:R})})})})]})});dm.displayName="AccordionItem";const C8="_root_1vgip_7",j8="_fullWidth_1vgip_12",S8="_panel_1vgip_19",N8="_panelInner_1vgip_73",M8="_item_1vgip_81",L8="_groupHeading_1vgip_87",R8="_groupHeadingSm_1vgip_96",$8="_groupHeadingLabel_1vgip_100",T8="_groupHeadingCollapsible_1vgip_112",A8="_groupChevron_1vgip_125",I8="_groupDivider_1vgip_139",_n={root:C8,fullWidth:j8,panel:S8,panelInner:N8,item:M8,groupHeading:L8,groupHeadingSm:R8,groupHeadingLabel:$8,groupHeadingCollapsible:T8,groupChevron:A8,groupDivider:I8};function E8({group:t,size:a,closeOnSelect:i,onClose:s}){const[l,d]=g.useState(t.defaultExpanded??!0);return r.jsxs("div",{children:[t.heading&&r.jsxs("div",{className:re(_n.groupHeading,a==="sm"&&_n.groupHeadingSm,t.collapsible&&_n.groupHeadingCollapsible),onClick:t.collapsible?()=>d(h=>!h):void 0,"aria-expanded":t.collapsible?l:void 0,children:[r.jsx("span",{className:_n.groupHeadingLabel,children:t.heading}),t.collapsible&&r.jsx("span",{className:_n.groupChevron,"data-expanded":l||void 0,"aria-hidden":"true",children:r.jsx(on,{size:12})})]}),l&&r.jsx("div",{role:"group","aria-label":t.heading,children:t.options.map((h,f)=>{const v=h.trailingAction==="switch"||h.trailingAction==="checkbox"||h.trailingAction==="radio";return r.jsx(rn,{role:"menuitem",size:a,label:h.label,description:h.description,leadingSlot:h.leadingSlot,trailingAction:h.trailingAction,trailingSlot:h.trailingSlot,disabled:h.disabled,destructive:h.destructive,selected:h.selected,checked:h.checked,defaultChecked:h.defaultChecked,onCheckedChange:h.onCheckedChange,badgeCount:h.badgeCount,badgeLabel:h.badgeLabel,expanded:h.expanded,statusVariant:h.statusVariant,divider:h.divider??!1,className:_n.item,onClick:()=>{var x;(x=h.onClick)==null||x.call(h),i&&!v&&s()}},h.id)})})]})}const vu=g.forwardRef(({trigger:t,groups:a,size:i="sm",width:s=260,placement:l="bottom-start",open:d,defaultOpen:h=!1,onOpenChange:f,disabled:v=!1,closeOnSelect:x=!0,fullWidth:y=!1,className:b,...k},j)=>{const[S,C]=g.useState(h),_=g.useRef(null),$=d!==void 0?d:S,R=g.useCallback(A=>{_.current=A,j&&(typeof j=="function"?j(A):j.current=A)},[j]),N=g.useCallback(A=>{d===void 0&&C(A),f==null||f(A)},[d,f]);return g.useEffect(()=>{if(!$)return;const A=M=>{var T;(T=_.current)!=null&&T.contains(M.target)||N(!1)};return document.addEventListener("mousedown",A),()=>document.removeEventListener("mousedown",A)},[$,N]),g.useEffect(()=>{if(!$)return;const A=M=>{M.key==="Escape"&&N(!1)};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[$,N]),r.jsxs("div",{ref:R,className:re(_n.root,y&&_n.fullWidth,b),...k,children:[r.jsx("div",{style:{display:y?"flex":"inline-flex",width:y?"100%":void 0},"aria-haspopup":"menu","aria-expanded":$,tabIndex:v?-1:0,onClick:v?void 0:()=>N(!$),onKeyDown:v?void 0:A=>{(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),N(!$))},children:t}),r.jsx("div",{className:_n.panel,"data-open":$||void 0,"data-placement":l,style:{width:typeof s=="number"?`${s}px`:s},role:"menu","aria-orientation":"vertical",children:r.jsx("div",{className:_n.panelInner,children:a.map((A,M)=>r.jsxs("div",{children:[M>0&&r.jsx("div",{className:_n.groupDivider,"aria-hidden":"true"}),r.jsx(E8,{group:A,size:i,closeOnSelect:x,onClose:()=>N(!1)})]},A.id))})})]})});vu.displayName="DropdownMenu";const P8="_hiddenInput_7w2s5_8",z8="_area_7w2s5_19",O8="_uploadIcon_7w2s5_53",D8="_textBlock_7w2s5_59",B8="_title_7w2s5_67",F8="_description_7w2s5_76",W8="_fileRow_7w2s5_88",H8="_fileIcon_7w2s5_96",U8="_fileName_7w2s5_101",q8="_successIcon_7w2s5_115",V8="_removeBtn_7w2s5_121",G8="_progressWrap_7w2s5_145",Y8="_progressBar_7w2s5_153",Q8="_progressFill_7w2s5_161",K8="_progressLabel_7w2s5_168",Z8="_errorRow_7w2s5_178",X8="_errorIcon_7w2s5_186",J8="_errorText_7w2s5_192",ew="_areaMulti_7w2s5_206",tw="_multiDropZone_7w2s5_214",nw="_fileList_7w2s5_244",rw="_fileListItem_7w2s5_254",ow="_inline_7w2s5_267",aw="_inlineIcon_7w2s5_309",iw="_inlineText_7w2s5_330",sw="_inlineProgress_7w2s5_353",lw="_inlineProgressFill_7w2s5_363",Pe={hiddenInput:P8,area:z8,uploadIcon:O8,textBlock:D8,title:B8,description:F8,fileRow:W8,fileIcon:H8,fileName:U8,successIcon:q8,removeBtn:V8,progressWrap:G8,progressBar:Y8,progressFill:Q8,progressLabel:K8,errorRow:Z8,errorIcon:X8,errorText:J8,areaMulti:ew,multiDropZone:tw,fileList:nw,fileListItem:rw,inline:ow,inlineIcon:aw,inlineText:iw,inlineProgress:sw,inlineProgressFill:lw};function ud(t){const a=t.name.lastIndexOf(".");return a!==-1?t.name.slice(a+1).toUpperCase():t.type?(t.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const um=g.forwardRef(({variant:t="area",multiple:a=!1,state:i="empty",progress:s=0,file:l,files:d,errorMessage:h,title:f="Choose a file or drag & drop it here.",description:v="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:x,onFileSelect:y,onFilesSelect:b,onClear:k,onRemoveFile:j,fieldVariant:S="outlined",disabled:C=!1,className:_,...$},R)=>{const N=g.useRef(null),[A,M]=g.useState(!1),T=!C&&(a||i==="empty"),E=g.useCallback(()=>{var oe;!C&&(a||i==="empty")&&((oe=N.current)==null||oe.click())},[C,a,i]),z=g.useCallback(oe=>{var ie;if(a){const Z=oe.target.files?Array.from(oe.target.files):[];Z.length&&(b==null||b(Z))}else{const Z=(ie=oe.target.files)==null?void 0:ie[0];Z&&(y==null||y(Z))}oe.target.value=""},[a,y,b]),q=g.useCallback(oe=>{oe.preventDefault(),T&&M(!0)},[T]),G=g.useCallback(()=>M(!1),[]),X=g.useCallback(oe=>{var ie;if(oe.preventDefault(),M(!1),!!T)if(a){const Z=oe.dataTransfer.files?Array.from(oe.dataTransfer.files):[];Z.length&&(b==null||b(Z))}else{const Z=(ie=oe.dataTransfer.files)==null?void 0:ie[0];Z&&(y==null||y(Z))}},[T,a,y,b]),Q=r.jsx("input",{ref:N,type:"file",className:Pe.hiddenInput,accept:x,multiple:a,disabled:C,"aria-hidden":"true",tabIndex:-1,onChange:z}),ne=l?r.jsxs("div",{className:Pe.fileRow,children:[r.jsx("span",{className:`${Pe.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Wo,{size:16})}),r.jsx("span",{className:Pe.fileName,children:l.name}),r.jsx(Cr,{size:"sm",variant:"subtle",children:ud(l)}),i==="complete"&&r.jsx("span",{className:`${Pe.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(On,{size:16})}),r.jsx("button",{type:"button",className:Pe.removeBtn,onClick:k,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(As,{size:14})})})]}):null;if(t==="area"){if(a){const oe=d??[];return r.jsxs("div",{ref:R,className:re(Pe.areaMulti,_),"data-drag-over":A||void 0,"data-disabled":C||void 0,onDragOver:q,onDragLeave:G,onDrop:X,...$,children:[Q,r.jsxs("div",{className:Pe.multiDropZone,children:[r.jsx("span",{className:`${Pe.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(dd,{size:24})}),r.jsxs("div",{className:Pe.textBlock,children:[r.jsx("p",{className:Pe.title,children:f}),r.jsx("p",{className:Pe.description,children:v})]}),r.jsx(Re,{variant:"tertiary",size:"sm",onClick:E,disabled:C,children:"Browse Files"})]}),oe.length>0&&r.jsx("ul",{className:Pe.fileList,"aria-label":"Selected files",children:oe.map((ie,Z)=>r.jsxs("li",{className:Pe.fileListItem,children:[r.jsx("span",{className:`${Pe.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Wo,{size:16})}),r.jsx("span",{className:Pe.fileName,children:ie.name}),r.jsx(Cr,{size:"sm",variant:"subtle",children:ud(ie)}),r.jsx("button",{type:"button",className:Pe.removeBtn,onClick:()=>j==null?void 0:j(Z),"aria-label":`Remove ${ie.name}`,disabled:C,children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(As,{size:14})})})]},`${ie.name}-${Z}`))})]})}return r.jsxs("div",{ref:R,className:re(Pe.area,_),"data-state":i,"data-drag-over":A||void 0,"data-disabled":C||void 0,onDragOver:q,onDragLeave:G,onDrop:X,...$,children:[Q,i==="empty"&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:`${Pe.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(dd,{size:24})}),r.jsxs("div",{className:Pe.textBlock,children:[r.jsx("p",{className:Pe.title,children:f}),r.jsx("p",{className:Pe.description,children:v})]}),r.jsx(Re,{variant:"tertiary",size:"sm",onClick:E,disabled:C,children:"Browse File"})]}),i==="uploading"&&r.jsxs(r.Fragment,{children:[ne,r.jsxs("div",{className:Pe.progressWrap,children:[r.jsx("div",{className:Pe.progressBar,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:Pe.progressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})}),r.jsxs("p",{className:Pe.progressLabel,children:[s,"% uploaded"]})]})]}),i==="complete"&&ne,i==="error"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:Pe.errorRow,children:[r.jsx("span",{className:`${Pe.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Vo,{size:20})}),r.jsx("p",{className:Pe.errorText,children:h??"Upload failed. Please try again."})]}),r.jsx(Re,{variant:"tertiary",size:"sm",onClick:E,disabled:C,children:"Try Again"})]})]})}const te={empty:r.jsx(dd,{size:16}),uploading:r.jsx(Wo,{size:16}),complete:r.jsx(On,{size:16}),error:r.jsx(Vo,{size:16})}[i],ce=(i==="uploading"||i==="complete")&&!!l;return r.jsxs("div",{ref:R,className:re(Pe.inline,_),"data-state":i,"data-field-variant":S,"data-disabled":C||void 0,...$,children:[Q,r.jsx("span",{className:`${Pe.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:te}),r.jsxs("span",{className:Pe.inlineText,"data-has-file":ce?"":void 0,children:[i==="empty"&&f,i==="uploading"&&(l==null?void 0:l.name),i==="complete"&&(l==null?void 0:l.name),i==="error"&&(h??"Upload failed. Please try again.")]}),ce&&r.jsx(Cr,{size:"sm",variant:"subtle",children:ud(l)}),(i==="uploading"||i==="complete"||i==="error")&&r.jsx("button",{type:"button",className:Pe.removeBtn,onClick:k,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(As,{size:14})})}),i==="empty"&&r.jsx(Re,{variant:"tertiary",size:"xs",onClick:E,disabled:C,children:"Browse"}),i==="uploading"&&r.jsx("div",{className:Pe.inlineProgress,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:Pe.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})})]})});um.displayName="FileUploader";const cw="_wrapper_127v8_8",dw="_labelRow_127v8_16",uw="_label_127v8_16",hw="_required_127v8_28",pw="_labelIcon_127v8_36",fw="_sm_127v8_46",mw="_md_127v8_47",gw="_lg_127v8_48",vw="_shell_127v8_44",xw="_outlined_127v8_75",yw="_underlined_127v8_102",ww="_float_127v8_147",bw="_leadingSlot_127v8_181",kw="_trailingSlot_127v8_193",_w="_trailingActionWrap_127v8_206",Cw="_trailingActionBtn_127v8_213",jw="_successTrailingSlot_127v8_234",Sw="_errorTrailingSlot_127v8_239",Nw="_control_127v8_251",Mw="_selectValue_127v8_297",Lw="_selectPlaceholder_127v8_303",Rw="_selectChevron_127v8_307",$w="_selectChevronOpen_127v8_312",Tw="_textareaShell_127v8_315",Aw="_textareaControl_127v8_334",Iw="_footer_127v8_351",Ew="_footerRow_127v8_363",Pw="_footerError_127v8_364",zw="_footerSuccess_127v8_365",Ow="_footerIcon_127v8_368",Dw="_wrapperHorizontal_127v8_378",Bw="_horizontalLabelCol_127v8_384",Fw="_horizontalLabelHint_127v8_393",Ww="_horizontalControlCol_127v8_402",Hw="_msContainer_127v8_416",Uw="_msShell_127v8_425",qw="_msOpen_127v8_440",Vw="_msDisabled_127v8_447",Gw="_msBody_127v8_450",Yw="_msPlaceholder_127v8_459",Qw="_msChevron_127v8_469",Kw="_msChevronOpen_127v8_480",Zw="_msPanel_127v8_483",Se={wrapper:cw,labelRow:dw,label:uw,required:hw,labelIcon:pw,sm:fw,md:mw,lg:gw,shell:vw,outlined:xw,underlined:yw,float:ww,leadingSlot:bw,trailingSlot:kw,trailingActionWrap:_w,trailingActionBtn:Cw,successTrailingSlot:jw,errorTrailingSlot:Sw,control:Nw,selectValue:Mw,selectPlaceholder:Lw,selectChevron:Rw,selectChevronOpen:$w,textareaShell:Tw,textareaControl:Aw,footer:Iw,footerRow:Ew,footerError:Pw,footerSuccess:zw,footerIcon:Ow,wrapperHorizontal:Dw,horizontalLabelCol:Bw,horizontalLabelHint:Fw,horizontalControlCol:Ww,msContainer:Hw,msShell:Uw,msOpen:qw,msDisabled:Vw,msBody:Gw,msPlaceholder:Yw,msChevron:Qw,msChevronOpen:Kw,msPanel:Zw};function Jo({label:t,labelIcon:a,labelDescription:i,hint:s,error:l,success:d,required:h,htmlFor:f,layout:v="vertical",labelWidth:x=160,className:y,children:b}){const k=l??d??s,j=l?"error":d?"success":"hint",S=k?r.jsxs("p",{className:re(Se.footer,j==="error"&&Se.footerError,j==="success"&&Se.footerSuccess),role:j==="error"?"alert":void 0,"aria-live":j==="error"?"assertive":void 0,children:[j==="hint"&&r.jsx("span",{className:`${Se.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Vo,{size:12})}),k]}):null,C=t!=null?r.jsxs("div",{className:Se.labelRow,children:[r.jsx("label",{className:Se.label,htmlFor:f,children:t}),h&&r.jsx("span",{className:Se.required,"aria-hidden":"true",children:"*"}),a&&r.jsx("span",{className:`${Se.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:a})]}):null;if(v==="horizontal"){const _={width:typeof x=="number"?`${x}px`:x};return r.jsxs("div",{className:re(Se.wrapper,Se.wrapperHorizontal,y),children:[(C||i)&&r.jsxs("div",{className:Se.horizontalLabelCol,style:_,children:[C,i&&r.jsx("p",{className:Se.horizontalLabelHint,children:i})]}),r.jsxs("div",{className:Se.horizontalControlCol,children:[b,S]})]})}return r.jsxs("div",{className:re(Se.wrapper,y),children:[C,b,S]})}function ci({variant:t="outlined",size:a="md",error:i,success:s,disabled:l,readOnly:d,leadingIcon:h,trailingIcon:f,trailingAction:v,isTextarea:x,focused:y,className:b,children:k}){const j=a==="sm"?14:a==="lg"?18:16,S=s&&!i&&!f&&!v?r.jsx(On,{size:j}):null,C=i&&!f&&!v?r.jsx(Vo,{size:j}):null,_=!!h,$=!!(f||v||S||C);return r.jsxs("div",{className:re(Se.shell,Se[t],Se[a],x&&Se.textareaShell,b),"data-error":i||void 0,"data-success":s||void 0,"data-disabled":l||void 0,"data-readonly":d||void 0,"data-focused":y||void 0,"data-has-leading":_||void 0,"data-has-trailing":$||void 0,children:[h&&r.jsx("span",{className:re(Se.leadingSlot,"alloy-icon-slot"),children:h}),k,v?r.jsx("span",{className:Se.trailingActionWrap,children:v}):f||S||C?r.jsx("span",{className:re(Se.trailingSlot,"alloy-icon-slot",S&&Se.successTrailingSlot,C&&Se.errorTrailingSlot),children:f??S??C}):null]})}const xu=g.forwardRef(({label:t,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",type:v="text",leadingIcon:x,trailingIcon:y,layout:b,labelWidth:k,labelDescription:j,id:S,disabled:C,readOnly:_,className:$,...R},N)=>{const A=g.useId(),M=S??A;return r.jsx(Jo,{label:t,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:M,layout:b,labelWidth:k,labelDescription:j,className:$,children:r.jsx(ci,{variant:h,size:f,error:!!s,success:!!l,disabled:C,readOnly:_,leadingIcon:x,trailingIcon:y,children:r.jsx("input",{ref:N,id:M,type:v,disabled:C,readOnly:_,"aria-invalid":s?!0:void 0,"aria-describedby":i||s||l?`${M}-footer`:void 0,className:re(Se.control),...R})})})});xu.displayName="TextField";const Xw=g.forwardRef(({label:t,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:v,trailingIcon:x,layout:y,labelWidth:b,labelDescription:k,id:j,disabled:S,readOnly:C,className:_,...$},R)=>{const N=g.useId(),A=j??N;return r.jsx(Jo,{label:t,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:A,layout:y,labelWidth:b,labelDescription:k,className:_,children:r.jsx(ci,{variant:h,size:f,error:!!s,success:!!l,disabled:S,readOnly:C,leadingIcon:v,trailingIcon:x,isTextarea:!0,children:r.jsx("textarea",{ref:R,id:A,disabled:S,readOnly:C,"aria-invalid":s?!0:void 0,className:re(Se.control,Se.textareaControl),...$})})})});Xw.displayName="TextArea";const Jw={sm:"sm",md:"md",lg:"lg"},hm=g.forwardRef(({label:t,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:v,layout:x,labelWidth:y,labelDescription:b,options:k,value:j,defaultValue:S="",onChange:C,placeholder:_="Select an option…",disabled:$,readOnly:R,id:N,className:A},M)=>{var W;const T=g.useId(),E=N??T,z=j!==void 0,[q,G]=g.useState(S),X=z?j:q,Q=g.useCallback(H=>{z||G(H),C==null||C(H)},[z,C]),[ne,te]=g.useState(!1),ce=(W=k.find(H=>H.value===X))==null?void 0:W.label,oe=f==="sm"?14:f==="lg"?18:16,ie=Jw[f],Z=r.jsx(ci,{variant:h,size:f,error:!!s,success:!!l,disabled:$,readOnly:R,focused:ne,leadingIcon:v,trailingIcon:r.jsx("span",{className:re(Se.selectChevron,ne&&Se.selectChevronOpen),"aria-hidden":"true",children:r.jsx(Xn,{size:oe})}),children:r.jsx("span",{className:re(Se.control,Se.selectValue,!ce&&Se.selectPlaceholder),children:ce??_})});return r.jsx(Jo,{label:t,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:E,layout:x,labelWidth:y,labelDescription:b,className:A,children:r.jsx(vu,{ref:M,id:E,fullWidth:!0,trigger:Z,groups:[{id:"options",options:k.map(H=>({id:H.value,label:H.label,disabled:H.disabled,selected:H.value===X,onClick:()=>Q(H.value)}))}],size:ie,width:"100%",placement:"bottom-start",open:ne,onOpenChange:te,disabled:$||R})})});hm.displayName="SelectField";const e7=g.forwardRef(({label:t,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",leadingIcon:v,layout:x,labelWidth:y,labelDescription:b,id:k,disabled:j,readOnly:S,className:C,..._},$)=>{const R=g.useId(),N=k??R,[A,M]=g.useState(!1),T=f==="sm"?14:f==="lg"?18:16;return r.jsx(Jo,{label:t,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:N,layout:x,labelWidth:y,labelDescription:b,className:C,children:r.jsx(ci,{variant:h,size:f,error:!!s,success:!!l,disabled:j,readOnly:S,leadingIcon:v,trailingAction:r.jsx("button",{type:"button",className:`${Se.trailingActionBtn} alloy-icon-slot`,onClick:()=>M(E=>!E),tabIndex:j?-1:0,"aria-label":A?"Hide password":"Show password","aria-pressed":A,children:A?r.jsx(D0,{size:T}):r.jsx(au,{size:T})}),children:r.jsx("input",{ref:$,id:N,type:A?"text":"password",disabled:j,readOnly:S,"aria-invalid":s?!0:void 0,autoComplete:"current-password",className:re(Se.control),..._})})})});e7.displayName="PasswordField";const pm=g.forwardRef(({label:t,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",onClear:v,onChange:x,layout:y,labelWidth:b,labelDescription:k,id:j,value:S,defaultValue:C,disabled:_,readOnly:$,className:R,...N},A)=>{const M=g.useId(),T=j??M,E=f==="sm"?14:f==="lg"?18:16,z=S!==void 0?String(S).length>0:void 0,q=g.useCallback(G=>{x==null||x(G)},[x]);return r.jsx(Jo,{label:t,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:T,layout:y,labelWidth:b,labelDescription:k,className:R,children:r.jsx(ci,{variant:h,size:f,error:!!s,success:!!l,disabled:_,readOnly:$,leadingIcon:r.jsx(cu,{size:E}),trailingAction:z?r.jsx("button",{type:"button",className:`${Se.trailingActionBtn} alloy-icon-slot`,onClick:v,tabIndex:_?-1:0,"aria-label":"Clear search",children:r.jsx(si,{size:E})}):void 0,children:r.jsx("input",{ref:A,id:T,type:"search",value:S,defaultValue:C,disabled:_,readOnly:$,"aria-invalid":s?!0:void 0,onChange:q,className:re(Se.control),...N})})})});pm.displayName="SearchField";const fm=g.forwardRef((t,a)=>r.jsx(xu,{ref:a,type:"email",autoComplete:"email",inputMode:"email",...t}));fm.displayName="EmailField";const mm=g.forwardRef((t,a)=>r.jsx(xu,{ref:a,type:"number",inputMode:"numeric",...t}));mm.displayName="NumberField";const t7={sm:"sm",md:"sm",lg:"md"},n7={sm:"sm",md:"md",lg:"lg"},r7=g.forwardRef(({label:t,labelIcon:a,hint:i,error:s,success:l,required:d,variant:h="outlined",size:f="md",layout:v,labelWidth:x,labelDescription:y,options:b,value:k,defaultValue:j=[],onChange:S,placeholder:C="Select options…",disabled:_,readOnly:$,id:R,className:N},A)=>{const M=g.useId(),T=R??M,E=`${T}-list`,z=g.useRef(null),q=k!==void 0,[G,X]=g.useState(j),Q=q?k:G,ne=g.useCallback(L=>{q||X(L),S==null||S(L)},[q,S]),[te,ce]=g.useState(!1);g.useEffect(()=>{if(!te)return;const L=O=>{z.current&&!z.current.contains(O.target)&&ce(!1)},U=O=>{O.key==="Escape"&&ce(!1)};return document.addEventListener("mousedown",L),document.addEventListener("keydown",U),()=>{document.removeEventListener("mousedown",L),document.removeEventListener("keydown",U)}},[te]);const oe=L=>{if(_||$)return;const U=Q.includes(L)?Q.filter(O=>O!==L):[...Q,L];ne(U)},ie=L=>{_||$||((L.key==="Enter"||L.key===" ")&&(L.preventDefault(),ce(U=>!U)),L.key==="Backspace"&&Q.length>0&&!te&&ne(Q.slice(0,-1)))},Z=f==="sm"?14:f==="lg"?18:16,W=t7[f],H=n7[f],I=Object.fromEntries(b.map(L=>[L.value,L.label]));return r.jsx(Jo,{label:t,labelIcon:a,hint:i,error:s,success:l,required:d,htmlFor:T,layout:v,labelWidth:x,labelDescription:y,className:N,children:r.jsxs("div",{ref:z,className:Se.msContainer,children:[r.jsxs("div",{ref:A,id:T,role:"combobox","aria-haspopup":"listbox","aria-expanded":te,"aria-controls":E,"aria-disabled":_||void 0,tabIndex:_?-1:0,className:re(Se.msShell,Se[h],Se[f],te&&Se.msOpen,_&&Se.msDisabled),"data-error":s?!0:void 0,"data-success":l&&!s?!0:void 0,"data-disabled":_||void 0,onClick:()=>{!_&&!$&&ce(L=>!L)},onKeyDown:ie,children:[r.jsx("div",{className:Se.msBody,children:Q.length===0?r.jsx("span",{className:Se.msPlaceholder,children:C}):Q.map(L=>r.jsx(Cr,{size:W,variant:"subtle",dismissible:!_&&!$,onDismiss:()=>ne(Q.filter(U=>U!==L)),children:I[L]??L},L))}),r.jsx("span",{className:re(Se.msChevron,"alloy-icon-slot",te&&Se.msChevronOpen),children:r.jsx(Xn,{size:Z})})]}),te&&r.jsx("div",{id:E,role:"listbox","aria-multiselectable":"true","aria-label":typeof t=="string"?t:"Options",className:Se.msPanel,children:b.map(L=>{const U=Q.includes(L.value);return r.jsx(rn,{label:L.label,size:H,trailingAction:"checkbox",checked:U,disabled:L.disabled,role:"option","aria-selected":U,onMouseDown:O=>{O.preventDefault()},onCheckedChange:()=>{L.disabled||oe(L.value)}},L.value)})})]})})});r7.displayName="MultiSelectField";const o7="_root_1249j_6",a7="_pageControls_1249j_14",i7="_pageBtn_1249j_21",s7="_ellipsis_1249j_36",l7="_rowsGroup_1249j_51",c7="_rowsSelect_1249j_58",d7="_countText_1249j_64",u7="_groupLabel_1249j_74",h7="_goToGroup_1249j_84",p7="_goToInput_1249j_91",bn={root:o7,pageControls:a7,pageBtn:i7,ellipsis:s7,rowsGroup:l7,rowsSelect:c7,countText:d7,groupLabel:u7,goToGroup:h7,goToInput:p7};function f7(t,a,i){if(a<=1)return[1];const s=Math.max(2,t-i),l=Math.min(a-1,t+i),d=[1];s>2&&d.push("ellipsis");for(let h=s;h<=l;h++)d.push(h);return l<a-1&&d.push("ellipsis"),a>1&&d.push(a),d}const m7=g.forwardRef(({page:t,totalPages:a,onPageChange:i,showRowsPerPage:s=!1,rowsPerPage:l,rowsPerPageOptions:d=[10,25,50,100],onRowsPerPageChange:h,showGoToPage:f=!1,totalCount:v,siblingCount:x=1,size:y="sm",disabled:b=!1,className:k,...j},S)=>{const[C,_]=g.useState(""),$=y,R=y,N=y==="sm"?14:16,A=f7(t,a,x),M=g.useCallback(z=>{const q=Math.min(Math.max(1,z),a);q!==t&&i(q)},[t,a,i]),T=g.useCallback(z=>{if(z.key==="Enter"){const q=parseInt(C,10);isNaN(q)||M(q),_("")}},[C,M]),E=v!=null&&l!=null?`${(t-1)*l+1}–${Math.min(t*l,v)} of ${v}`:null;return r.jsxs("nav",{ref:S,"aria-label":"Pagination",className:re(bn.root,k),"data-size":y,...j,children:[s&&r.jsxs("div",{className:bn.rowsGroup,children:[r.jsx("span",{className:bn.groupLabel,children:"Rows per page"}),r.jsx("div",{className:bn.rowsSelect,children:r.jsx(hm,{size:R,value:l,disabled:b,"aria-label":"Rows per page",onChange:z=>h==null?void 0:h(Number(z.target.value)),children:d.map(z=>r.jsx("option",{value:z,children:z},z))})})]}),E&&r.jsx("span",{className:bn.countText,"aria-live":"polite",children:E}),r.jsxs("div",{className:bn.pageControls,role:"group","aria-label":"Page navigation",children:[r.jsx(Re,{variant:"ghost",size:$,iconOnly:!0,"aria-label":"Previous page",disabled:b||t<=1,onClick:()=>M(t-1),children:r.jsx(O0,{size:N})}),A.map((z,q)=>z==="ellipsis"?r.jsx("span",{className:bn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${q}`):r.jsx(Re,{variant:z===t?"secondary":"ghost",size:$,"aria-label":`Page ${z}`,"aria-current":z===t?"page":void 0,disabled:b,onClick:()=>M(z),className:bn.pageBtn,children:z},z)),r.jsx(Re,{variant:"ghost",size:$,iconOnly:!0,"aria-label":"Next page",disabled:b||t>=a,onClick:()=>M(t+1),children:r.jsx(on,{size:N})})]}),f&&r.jsxs("div",{className:bn.goToGroup,children:[r.jsx("span",{className:bn.groupLabel,children:"Go to"}),r.jsx("div",{className:bn.goToInput,children:r.jsx(mm,{size:R,value:C,placeholder:String(t),min:1,max:a,disabled:b,"aria-label":"Go to page number",onChange:z=>_(z.target.value),onKeyDown:T})})]})]})});m7.displayName="Pagination";const g7="_root_1vx33_6",v7="_fullWidth_1vx33_18",x7="_item_1vx33_23",y7="_indicator_1vx33_28",w7="_sm_1vx33_46",b7="_md_1vx33_54",k7="_lg_1vx33_62",_7="_itemSelected_1vx33_109",C7="_itemIcon_1vx33_115",j7="_itemLabel_1vx33_127",br={root:g7,fullWidth:v7,item:x7,indicator:y7,sm:w7,md:b7,lg:k7,itemSelected:_7,itemIcon:C7,itemLabel:j7},gm=g.createContext(null);function S7(t){const a=g.useContext(gm);if(!a)throw new Error(`<${t}> must be rendered inside <SegmentedControl>`);return a}const vm=g.forwardRef(({value:t,leadingIcon:a,className:i,children:s,disabled:l,onClick:d,...h},f)=>{const{value:v,onChange:x,disabled:y,name:b}=S7("SegmentedControl.Item"),k=v===t,j=y||!!l;return r.jsxs("button",{ref:f,type:"button",role:"radio","aria-checked":k,name:b,disabled:j,className:re(br.item,k&&br.itemSelected,i),onClick:S=>{j||x(t),d==null||d(S)},...h,children:[a&&r.jsx("span",{className:re(br.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),s!==void 0&&r.jsx("span",{className:br.itemLabel,children:s})]})});vm.displayName="SegmentedControl.Item";const xm=g.forwardRef(({value:t,defaultValue:a="",onChange:i,size:s="md",disabled:l=!1,fullWidth:d=!1,className:h,children:f,...v},x)=>{const[y,b]=g.useState(a),k=t!==void 0,j=k?t:y,S=g.useId(),C=g.useRef(null);g.useLayoutEffect(()=>{const $=C.current;if(!$)return;const R=$.querySelector('[aria-checked="true"]');R&&($.style.setProperty("--sc-indicator-x",`${R.offsetLeft}px`),$.style.setProperty("--sc-indicator-w",`${R.offsetWidth}px`))},[j,s]);const _=$=>{k||b($),i==null||i($)};return r.jsx(gm.Provider,{value:{value:j,onChange:_,disabled:l,name:S},children:r.jsxs("div",{ref:$=>{C.current=$,typeof x=="function"?x($):x&&(x.current=$)},role:"radiogroup",className:re(br.root,br[s],d&&br.fullWidth,h),...v,children:[r.jsx("span",{className:br.indicator,"aria-hidden":"true"}),f]})})});xm.displayName="SegmentedControl";Object.assign(xm,{Item:vm});const N7="_root_fkv0x_6",M7="_sm_fkv0x_26",L7="_md_fkv0x_33",R7="_lg_fkv0x_40",$7="_dot_fkv0x_49",T7="_success_fkv0x_58",A7="_warning_fkv0x_65",I7="_error_fkv0x_72",E7="_info_fkv0x_79",P7="_neutral_fkv0x_86",z7="_pending_fkv0x_93",Ls={root:N7,sm:M7,md:L7,lg:R7,dot:$7,success:T7,warning:A7,error:I7,info:E7,neutral:P7,pending:z7},ei=g.forwardRef(({status:t="neutral",size:a="md",dot:i=!0,className:s,children:l,...d},h)=>r.jsxs("span",{ref:h,className:re(Ls.root,Ls[a],Ls[t],s),...d,children:[i&&r.jsx("span",{className:Ls.dot,"aria-hidden":"true"}),l]}));ei.displayName="StatusTag";const O7="_root_1m8t5_6",D7="_underline_1m8t5_15",B7="_background_1m8t5_21",F7="_underlineIndicator_1m8t5_26",W7="_md_1m8t5_43",H7="_lg_1m8t5_44",U7="_tab_1m8t5_42",q7="_tabSelected_1m8t5_77",V7="_tabIcon_1m8t5_99",G7="_tabLabel_1m8t5_111",Y7="_tabBadge_1m8t5_116",Q7="_tabLabelEditable_1m8t5_123",K7="_tabLabelInput_1m8t5_128",Z7="_addTab_1m8t5_147",X7="_addTabIcon_1m8t5_160",Yt={root:O7,underline:D7,background:B7,underlineIndicator:F7,md:W7,lg:H7,tab:U7,tabSelected:q7,tabIcon:V7,tabLabel:G7,tabBadge:Y7,tabLabelEditable:Q7,tabLabelInput:K7,addTab:Z7,addTabIcon:X7},ym=g.createContext(null);function wm(t){const a=g.useContext(ym);if(!a)throw new Error(`<${t}> must be rendered inside <Tabs>`);return a}const bm=g.forwardRef(({value:t,leadingIcon:a,trailingBadge:i,disabled:s,editable:l=!1,autoEdit:d=!1,onLabelChange:h,onClick:f,className:v,children:x,...y},b)=>{const{value:k,onChange:j,disabled:S,name:C}=wm("Tabs.Tab"),_=k===t,$=S||!!s,R=typeof x=="string"?x:"",[N,A]=g.useState(d&&l),[M,T]=g.useState(R),E=g.useRef(null);g.useEffect(()=>{if(N){const Q=E.current;Q&&(Q.focus(),Q.select())}},[N]),g.useEffect(()=>{d&&l&&!N&&(T(typeof x=="string"?x:""),A(!0))},[d,l]);const z=()=>{const Q=M.trim();Q&&Q!==R&&(h==null||h(Q)),A(!1)},q=()=>{T(R),A(!1)},G=Q=>{!l||$||(Q.stopPropagation(),T(R),A(!0))},X=Q=>{Q.key==="Enter"?(Q.preventDefault(),z()):Q.key==="Escape"&&(Q.preventDefault(),q())};return r.jsxs("button",{ref:b,type:"button",role:"tab","aria-selected":_,name:C,disabled:$,className:re(Yt.tab,_&&Yt.tabSelected,v),onClick:Q=>{N||($||j(t),f==null||f(Q))},...y,children:[a&&r.jsx("span",{className:re(Yt.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),N?r.jsx("input",{ref:E,type:"text",value:M,onChange:Q=>T(Q.target.value),onKeyDown:X,onBlur:z,onClick:Q=>Q.stopPropagation(),className:Yt.tabLabelInput,"aria-label":"Tab name",size:Math.max(M.length,1)}):x!==void 0&&r.jsx("span",{className:re(Yt.tabLabel,l&&Yt.tabLabelEditable),onDoubleClick:G,children:x}),i&&!N&&r.jsx("span",{className:Yt.tabBadge,children:i})]})});bm.displayName="Tabs.Tab";const J7=()=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),km=g.forwardRef(({className:t,onClick:a,"aria-label":i="Add tab",...s},l)=>{const{disabled:d}=wm("Tabs.AddTab");return r.jsx("button",{ref:l,type:"button","aria-label":i,disabled:d,className:re(Yt.tab,Yt.addTab,t),onClick:a,...s,children:r.jsx("span",{className:re(Yt.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx(J7,{})})})});km.displayName="Tabs.AddTab";const _m=g.forwardRef(({variant:t="underline",size:a="md",value:i,defaultValue:s="",onChange:l,disabled:d=!1,className:h,children:f,...v},x)=>{const[y,b]=g.useState(s),k=i!==void 0,j=k?i:y,S=g.useId(),C=g.useRef(null);g.useLayoutEffect(()=>{const $=C.current;if(!$||t!=="underline")return;const R=$.querySelector('[aria-selected="true"]');R&&($.style.setProperty("--tab-indicator-x",`${R.offsetLeft}px`),$.style.setProperty("--tab-indicator-w",`${R.offsetWidth}px`))},[j,t]);const _=$=>{k||b($),l==null||l($)};return r.jsx(ym.Provider,{value:{value:j,onChange:_,disabled:d,variant:t,size:a,name:S},children:r.jsxs("div",{ref:$=>{C.current=$,typeof x=="function"?x($):x&&(x.current=$)},role:"tablist",className:re(Yt.root,Yt[t],Yt[a],h),...v,children:[t==="underline"&&r.jsx("span",{className:Yt.underlineIndicator,"aria-hidden":"true"}),f]})})});_m.displayName="Tabs";Object.assign(_m,{Tab:bm,AddTab:km});const eb="_selectedBorder_1ypeg_7",tb="_selectedFill_1ypeg_12",Wp={selectedBorder:eb,selectedFill:tb},nb=g.forwardRef(({selected:t=!1,defaultVariant:a="secondary",selectionStyle:i="border",onSelectedChange:s,onClick:l,className:d,...h},f)=>{const v=y=>{s==null||s(!t),l==null||l(y)},x=t?i==="fill"?Wp.selectedFill:Wp.selectedBorder:void 0;return r.jsx(Re,{ref:f,variant:a,"aria-pressed":t,className:re(x,d),onClick:v,...h})});nb.displayName="ToggleButton";const rb="_root_mcb75_6",ob="_disabled_mcb75_13",ab="_sm_mcb75_20",ib="_md_mcb75_31",sb="_lg_mcb75_42",lb="_track_mcb75_54",cb="_trackChecked_mcb75_90",db="_thumb_mcb75_100",ub="_labelWrap_mcb75_117",hb="_label_mcb75_117",pb="_description_mcb75_139",Qn={root:rb,disabled:ob,sm:ab,md:ib,lg:sb,track:lb,trackChecked:cb,thumb:db,labelWrap:ub,label:hb,description:pb},fb=g.forwardRef(({checked:t,defaultChecked:a=!1,onChange:i,disabled:s,size:l="md",label:d,description:h,id:f,name:v,value:x,className:y},b)=>{const k=g.useId(),j=f??k,S=`${j}-label`,C=t!==void 0,[_,$]=g.useState(a),R=C?t:_,N=()=>{if(s)return;const M=!R;C||$(M),i==null||i(M)},A=M=>{(M.key===" "||M.key==="Enter")&&(M.preventDefault(),N())};return r.jsxs("div",{className:re(Qn.root,Qn[l],s&&Qn.disabled,y),children:[r.jsx("button",{ref:b,type:"button",role:"switch",id:j,"aria-checked":R,"aria-labelledby":d?S:void 0,"aria-disabled":s||void 0,tabIndex:s?-1:0,disabled:s,name:v,value:x,className:re(Qn.track,R&&Qn.trackChecked),"data-checked":R||void 0,"data-disabled":s||void 0,onClick:N,onKeyDown:A,children:r.jsx("span",{className:Qn.thumb})}),(d||h)&&r.jsxs("div",{className:Qn.labelWrap,children:[d&&r.jsx("label",{id:S,htmlFor:j,className:Qn.label,children:d}),h&&r.jsx("span",{className:Qn.description,children:h})]})]})});fb.displayName="Switch";const mb="_root_104n4_5",gb="_disabled_104n4_11",vb="_sm_104n4_17",xb="_md_104n4_25",yb="_lg_104n4_33",wb="_controlWrap_104n4_41",bb="_input_104n4_50",kb="_ring_104n4_65",_b="_ringChecked_104n4_90",Cb="_ringError_104n4_94",jb="_dot_104n4_104",Sb="_labelWrap_104n4_112",Nb="_label_104n4_112",Mb="_error_104n4_130",Lb="_required_104n4_132",Rb="_description_104n4_137",Vt={root:mb,disabled:gb,sm:vb,md:xb,lg:yb,controlWrap:wb,input:bb,ring:kb,ringChecked:_b,ringError:Cb,dot:jb,labelWrap:Sb,label:Nb,error:Mb,required:Lb,description:Rb},$b=g.forwardRef(({value:t,checked:a,onChange:i,disabled:s,error:l,size:d="md",label:h,description:f,id:v,name:x,required:y,className:b},k)=>{const j=g.useId(),S=v??j;return r.jsxs("div",{className:re(Vt.root,Vt[d],s&&Vt.disabled,l&&Vt.error,b),children:[r.jsxs("div",{className:Vt.controlWrap,children:[r.jsx("input",{ref:k,type:"radio",id:S,name:x,value:t,checked:a,disabled:s,required:y,"aria-invalid":l||void 0,onChange:()=>i==null?void 0:i(t),className:Vt.input}),r.jsx("span",{className:re(Vt.ring,a&&Vt.ringChecked,l&&Vt.ringError),"aria-hidden":"true",children:a&&r.jsx("span",{className:Vt.dot})})]}),(h||f)&&r.jsxs("div",{className:Vt.labelWrap,children:[h&&r.jsxs("label",{htmlFor:S,className:Vt.label,children:[h,y&&r.jsx("span",{className:Vt.required,"aria-hidden":"true",children:" *"})]}),f&&r.jsx("span",{className:Vt.description,children:f})]})]})});$b.displayName="Radio";const Tb="_table_1ad04_8",Ab="_sm_1ad04_16",Ib="_row_1ad04_30",Eb="_head_1ad04_47",Pb="_headLabel_1ad04_82",zb="_sortBtn_1ad04_96",Ob="_sortIcon_1ad04_119",Db="_cell_1ad04_142",Bb="_cellText_1ad04_175",Fb="_cellStack_1ad04_203",Wb="_cellStackPrimary_1ad04_210",Hb="_cellStackSecondary_1ad04_221",Ub="_cellActions_1ad04_233",qb="_cellControl_1ad04_240",Vb="_addCell_1ad04_251",Gb="_addRowCell_1ad04_264",Yb="_addRowLabel_1ad04_276",_t={table:Tb,sm:Ab,row:Ib,head:Eb,headLabel:Pb,sortBtn:zb,sortIcon:Ob,cell:Db,cellText:Bb,cellStack:Fb,cellStackPrimary:Wb,cellStackSecondary:Hb,cellActions:Ub,cellControl:qb,addCell:Vb,addRowCell:Gb,addRowLabel:Yb},Cm=g.createContext({addColumn:!1,addRow:!1}),jm=()=>g.useContext(Cm),Qb=g.forwardRef(({size:t="md",interaction:a="row",addColumn:i=!1,addRow:s=!1,onAddColumn:l,onAddRow:d,className:h,children:f,...v},x)=>{const y=g.useMemo(()=>({addColumn:i,addRow:s,onAddColumn:l,onAddRow:d}),[i,s,l,d]);return r.jsx(Cm.Provider,{value:y,children:r.jsx("table",{ref:x,className:re(_t.table,t==="sm"&&_t.sm,h),"data-interaction":a,...v,children:f})})});Qb.displayName="Table";const Sm=g.forwardRef(({align:t="left",sort:a,onSort:i,hoverable:s,selected:l,className:d,children:h,...f},v)=>{const x=a!==void 0;return r.jsx("th",{ref:v,className:re(_t.head,d),"data-align":t!=="left"?t:void 0,"data-hoverable":!x&&s?!0:void 0,"data-selected":l||void 0,"aria-selected":l,scope:"col","aria-sort":a==="asc"?"ascending":a==="desc"?"descending":x?"none":void 0,...f,children:x?r.jsxs("button",{type:"button",className:_t.sortBtn,onClick:i,"aria-label":typeof h=="string"?`Sort by ${h}`:void 0,children:[h,r.jsx("span",{className:_t.sortIcon,"data-sort":a!=="none"?a:void 0,"aria-hidden":"true",children:r.jsx(Xn,{size:12,strokeWidth:2})})]}):r.jsx("span",{className:_t.headLabel,children:h})})});Sm.displayName="TableHead";const Kb=g.forwardRef(({children:t,...a},i)=>{const{addColumn:s,onAddColumn:l}=jm(),d=s?g.Children.map(t,(h,f)=>{if(!g.isValidElement(h)||f!==0)return h;const v=g.Children.toArray(h.props.children);return g.cloneElement(h,{},[...v,r.jsx(Sm,{hoverable:!0,onClick:l,className:_t.addCell,"aria-label":"Add column",children:r.jsx(oo,{size:14,strokeWidth:2})},"__add_col_head")])}):t;return r.jsx("thead",{ref:i,...a,children:d})});Kb.displayName="TableHeader";const Nm=g.forwardRef(({hoverable:t=!0,selected:a,className:i,children:s,...l},d)=>r.jsx("tr",{ref:d,className:re(_t.row,i),"data-hoverable":t||void 0,"data-selected":a||void 0,"aria-selected":a,...l,children:s}));Nm.displayName="TableRow";const Dd=g.forwardRef(({align:t="left",compact:a,hoverable:i=!0,selected:s,className:l,children:d,...h},f)=>r.jsx("td",{ref:f,className:re(_t.cell,l),"data-align":t!=="left"?t:void 0,"data-compact":a||void 0,"data-hoverable":i||void 0,"data-selected":s||void 0,"aria-selected":s,...h,children:d}));Dd.displayName="TableCell";const Zb=g.forwardRef(({children:t,...a},i)=>{const{addColumn:s,addRow:l,onAddRow:d}=jm(),h=s?g.Children.map(t,f=>{if(!g.isValidElement(f))return f;const v=g.Children.toArray(f.props.children);return g.cloneElement(f,{},[...v,r.jsx(Dd,{"aria-hidden":"true",className:_t.addCell},"__add_col_pad")])}):t;return r.jsxs("tbody",{ref:i,...a,children:[h,l&&r.jsx(Nm,{hoverable:!1,children:r.jsx(Dd,{colSpan:999,onClick:d,className:_t.addRowCell,"aria-label":"Add row",children:r.jsxs("span",{className:_t.addRowLabel,children:[r.jsx(oo,{size:14,strokeWidth:2}),"Add row"]})})})]})});Zb.displayName="TableBody";const Xb=g.forwardRef(({variant:t="primary",size:a="md",wrap:i,className:s,children:l,...d},h)=>r.jsx("span",{ref:h,className:re(_t.cellText,s),"data-variant":t!=="primary"?t:void 0,"data-size":a!=="md"?a:void 0,"data-wrap":i||void 0,...d,children:l}));Xb.displayName="CellText";const Jb=g.forwardRef(({primary:t,secondary:a,className:i,...s},l)=>r.jsxs("div",{ref:l,className:re(_t.cellStack,i),...s,children:[r.jsx("span",{className:_t.cellStackPrimary,children:t}),a&&r.jsx("span",{className:_t.cellStackSecondary,children:a})]}));Jb.displayName="CellStack";const ek=g.forwardRef(({size:t="sm",...a},i)=>r.jsx(Cr,{ref:i,size:t,...a}));ek.displayName="CellTag";const tk=g.forwardRef(({size:t="sm",...a},i)=>r.jsx(ei,{ref:i,size:t,...a}));tk.displayName="CellStatusTag";const nk=g.forwardRef(({className:t,children:a,...i},s)=>r.jsx("div",{ref:s,className:re(_t.cellActions,t),...i,children:a}));nk.displayName="CellActions";const rk=g.forwardRef(({className:t,children:a,...i},s)=>r.jsx("div",{ref:s,className:re(_t.cellControl,t),...i,children:a}));rk.displayName="CellControl";const ok="_root_1afcs_8",ak="_secondary_1afcs_23",ik="_header_1afcs_28",sk="_headerText_1afcs_36",lk="_title_1afcs_43",ck="_subtitle_1afcs_52",dk="_action_1afcs_61",uk="_hero_1afcs_66",hk="_heroValue_1afcs_74",pk="_heroCaption_1afcs_83",fk="_heroChange_1afcs_89",mk="_body_1afcs_95",gk="_legend_1afcs_103",en={root:ok,secondary:ak,header:ik,headerText:sk,title:lk,subtitle:ck,action:dk,hero:uk,heroValue:hk,heroCaption:pk,heroChange:fk,body:mk,legend:gk},vk=g.forwardRef(({title:t,subtitle:a,action:i,value:s,valueChange:l,valueCaption:d,legend:h,secondary:f,children:v,className:x,...y},b)=>r.jsxs("div",{ref:b,className:re(en.root,f&&en.secondary,x),...y,children:[r.jsxs("div",{className:en.header,children:[r.jsxs("div",{className:en.headerText,children:[r.jsx("h3",{className:en.title,children:t}),a&&r.jsx("p",{className:en.subtitle,children:a})]}),i&&r.jsx("div",{className:en.action,children:i})]}),(s!==void 0||l||d)&&r.jsxs("div",{className:en.hero,children:[s!==void 0&&r.jsx("span",{className:en.heroValue,children:s}),l&&r.jsx("span",{className:en.heroChange,children:l}),d&&r.jsx("span",{className:en.heroCaption,children:d})]}),r.jsx("div",{className:en.body,children:v}),h&&r.jsx("div",{className:en.legend,children:h})]}));vk.displayName="ChartCard";const xk="_root_je8nq_7",yk="_item_je8nq_17",wk="_swatch_je8nq_23",bk="_label_je8nq_29",kk="_bookend_je8nq_33",Io={root:xk,item:yk,swatch:wk,label:bk,bookend:kk},Mm=g.forwardRef(({items:t,before:a,after:i,variant:s="square",swatchSize:l=12,className:d,...h},f)=>r.jsxs("div",{ref:f,className:re(Io.root,d),...h,children:[a&&r.jsx("span",{className:Io.bookend,children:a}),t.map((v,x)=>{const y=s==="line"?{width:l+4,height:2,background:v.color,borderRadius:1}:s==="dot"?{width:l-2,height:l-2,background:v.color,borderRadius:"50%"}:{width:l,height:l,background:v.color};return r.jsxs("span",{className:Io.item,children:[r.jsx("span",{className:Io.swatch,style:y,"aria-hidden":"true"}),v.label!==void 0&&r.jsx("span",{className:Io.label,children:v.label})]},x)}),i&&r.jsx("span",{className:Io.bookend,children:i})]}));Mm.displayName="ChartLegend";const _k="_root_igkx4_5",Ck="_svgWrap_igkx4_13",jk="_svg_igkx4_13",Sk="_gridLine_igkx4_23",Nk="_axisLabel_igkx4_28",Mk="_legendWrap_igkx4_43",Lk="_legendItem_igkx4_51",Rk="_legendDot_igkx4_57",$k="_legendLabel_igkx4_64",Tk="_tooltip_igkx4_71",Ak="_tooltipLabel_igkx4_85",Ik="_tooltipRow_igkx4_95",Ek="_tooltipDot_igkx4_101",Pk="_tooltipSeries_igkx4_108",zk="_tooltipValue_igkx4_115",Te={root:_k,svgWrap:Ck,svg:jk,gridLine:Sk,axisLabel:Nk,legendWrap:Mk,legendItem:Lk,legendDot:Rk,legendLabel:$k,tooltip:Tk,tooltipLabel:Ak,tooltipRow:Ik,tooltipDot:Ek,tooltipSeries:Pk,tooltipValue:zk},Ok=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function hd(t){if(t===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(t))),i=t/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function Eo(t){return t>=1e3?`${(t/1e3).toFixed(t%1e3===0?0:1)}k`:String(Math.round(t))}const Dk=g.forwardRef(({series:t,labels:a,variant:i="grouped",height:s=260,showGrid:l=!0,showLegend:d=!0,yUnit:h="",barRadius:f=2,colors:v,gradientFrom:x="#8c4fe2",gradientTo:y="#446cff",formatTooltipValue:b,stackStyle:k="gradient-each",capColor:j,className:S,...C},_)=>{var K,B,ue,me;const $=v&&v.length>0?v:Ok,R=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[N,A]=g.useState({visible:!1,x:0,y:0,label:"",items:[]}),M=g.useRef(null),[T,E]=g.useState(540);g.useEffect(()=>{const pe=M.current;if(!pe)return;const ve=new ResizeObserver(je=>{var Fe;const $e=(Fe=je[0])==null?void 0:Fe.contentRect.width;$e>0&&E(Math.floor($e))});ve.observe(pe);const _e=Math.floor(pe.getBoundingClientRect().width);return _e>0&&E(_e),()=>ve.disconnect()},[]);const z=44,q=0,G=20,X=20,Q=T,ne=s,te=Q-z-q,ce=ne-G-X,oe=5,ie=t.map((pe,ve)=>pe.color??$[ve%$.length]);let Z=0;i==="stacked"?a.forEach((pe,ve)=>{const _e=t.reduce((je,$e)=>je+($e.data[ve]??0),0);_e>Z&&(Z=_e)}):i==="horizontal"?Z=Math.max(...((K=t[0])==null?void 0:K.data)??[0]):t.forEach(pe=>pe.data.forEach(ve=>{ve>Z&&(Z=ve)}));const W=hd(Z),H=Array.from({length:oe+1},(pe,ve)=>W*(ve/oe)).reverse(),I=pe=>X+ce-pe/W*ce,L=te/a.length,U=3,O=i==="grouped"?Math.max(4,(L-U*(t.length+1))/t.length):L,ee=()=>A(pe=>({...pe,visible:!1})),ae=g.useCallback(pe=>{const ve=pe.currentTarget.getBoundingClientRect(),_e=pe.clientX-ve.left,je=Math.floor((_e-z)/L);if(je<0||je>=a.length){ee();return}const $e=t.map((Fe,qe)=>({color:ie[qe],series:Fe.label,value:Fe.data[je]??0}));A({visible:!0,x:pe.clientX+12,y:pe.clientY-8,label:a[je],items:$e})},[t,a,L,ie,z]);if(i==="gradient"){const pe=((B=t[0])==null?void 0:B.data)??[],ve=((ue=t[0])==null?void 0:ue.label)??"",_e=44,je=0,$e=20,Fe=20,qe=Math.max(Q-_e-je,1),Ge=ne-$e-Fe,De=Math.max(0,...pe),Qe=De>0?hd(De):10,Ye=5,At=Array.from({length:Ye+1},(Me,tt)=>Qe*tt/Ye),We=Me=>$e+Ge-Me/Qe*Ge,It=qe/Math.max(1,pe.length),Ct=Me=>_e+It*Me,Sn=Me=>_e+It*(Me+1),Nn=Me=>_e+It*(Me+.5),Sr=pe.length===0?"":pe.map((Me,tt)=>{const dt=We(Me);return`M ${Ct(tt)} ${dt} L ${Sn(tt)} ${dt}`}).join(" "),oa=[];pe.forEach((Me,tt)=>{if(Me<=0)return;const dt=We(Me);oa.push({x:Ct(tt),y:dt,width:Math.max(Sn(tt)-Ct(tt),0),height:$e+Ge-dt})});const Nr=Math.max(1,Math.ceil(45/It)),vl=a.length-1,mi=b??(Me=>`${Eo(Me)}${h}`);return r.jsxs("div",{ref:_,className:re(Te.root,S),...C,children:[r.jsx("div",{ref:M,className:Te.svgWrap,children:r.jsxs("svg",{width:Q,height:ne,viewBox:`0 0 ${Q} ${ne}`,className:Te.svg,onMouseLeave:ee,onMouseMove:Me=>{const tt=Me.currentTarget.getBoundingClientRect(),dt=Me.clientX-tt.left,Et=Math.floor((dt-_e)/It);if(Et<0||Et>=pe.length){ee();return}A({visible:!0,x:Me.clientX+12,y:Me.clientY-8,label:a[Et]??"",items:[{color:y,series:ve,value:pe[Et]??0}]})},children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${R}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:x}),r.jsx("stop",{offset:"100%",stopColor:y})]}),r.jsxs("linearGradient",{id:`${R}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:x,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:y,stopOpacity:"0"})]})]}),At.map((Me,tt)=>r.jsxs("g",{children:[l&&r.jsx("line",{x1:0,x2:Q-je,y1:We(Me),y2:We(Me),className:Te.gridLine}),r.jsxs("text",{x:0,y:We(Me)-6,className:Te.axisLabel,textAnchor:"start",children:[Eo(Me),h]})]},`t-${tt}`)),oa.map((Me,tt)=>r.jsx("rect",{x:Me.x,y:Me.y,width:Me.width,height:Me.height,fill:`url(#${R}-fill)`},`b-${tt}`)),Sr&&r.jsx("path",{d:Sr,fill:"none",stroke:`url(#${R}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),N.visible&&(()=>{var Mr;const Me=(Mr=M.current)==null?void 0:Mr.getBoundingClientRect();if(!Me)return null;const tt=N.x-12-Me.left,dt=Math.floor((tt-_e)/It);if(dt<0||dt>=pe.length)return null;const Et=pe[dt]??0;return Et<=0?null:r.jsx("circle",{cx:Nn(dt),cy:We(Et),r:4,fill:y,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),a.map((Me,tt)=>{const dt=tt===0,Et=tt===vl;if(!(dt||Et)&&tt%Nr!==0)return null;const aa=dt?_e:Et?Q-je:Nn(tt),ia=dt?"start":Et?"end":"middle";return r.jsx("text",{x:aa,y:ne-Fe+18,className:Te.axisLabel,textAnchor:ia,children:Me},`xl-${tt}`)})]})}),N.visible&&N.items.length>0&&r.jsxs("div",{className:Te.tooltip,style:{left:N.x,top:N.y},children:[r.jsx("div",{className:Te.tooltipLabel,children:N.label}),N.items.map(Me=>r.jsxs("div",{className:Te.tooltipRow,children:[r.jsx("span",{className:Te.tooltipDot,style:{background:Me.color}}),r.jsx("span",{className:Te.tooltipSeries,children:Me.series}),r.jsx("span",{className:Te.tooltipValue,children:mi(Me.value)})]},Me.series))]})]})}if(i==="horizontal"){const pe=((me=t[0])==null?void 0:me.data)??[],ve=hd(Math.max(...pe,1)),_e=28,je=10,$e=120,qe=Q-$e-44,Ge=a.length*(_e+je)+je;return r.jsxs("div",{ref:_,className:re(Te.root,S),...C,children:[r.jsx("div",{ref:M,className:Te.svgWrap,children:r.jsx("svg",{width:Q,height:Ge,viewBox:`0 0 ${Q} ${Ge}`,className:Te.svg,onMouseLeave:ee,onMouseMove:De=>{var We;const Qe=De.currentTarget.getBoundingClientRect(),Ye=De.clientY-Qe.top,At=Math.floor(Ye/(_e+je));if(At<0||At>=a.length){ee();return}A({visible:!0,x:De.clientX+12,y:De.clientY-8,label:a[At],items:[{color:ie[0],series:((We=t[0])==null?void 0:We.label)??"",value:pe[At]??0}]})},children:a.map((De,Qe)=>{const Ye=je+Qe*(_e+je),At=pe[Qe]??0,We=At/ve*qe;return r.jsxs("g",{children:[r.jsx("text",{x:$e-8,y:Ye+_e/2+4,className:Te.axisLabel,textAnchor:"end",children:De}),r.jsx("rect",{x:$e,y:Ye,width:We,height:_e,rx:f,fill:ie[0]}),r.jsxs("text",{x:$e+We+6,y:Ye+_e/2+4,className:Te.axisLabel,textAnchor:"start",children:[Eo(At),h]})]},Qe)})})}),N.visible&&r.jsxs("div",{className:Te.tooltip,style:{left:N.x,top:N.y},children:[r.jsx("div",{className:Te.tooltipLabel,children:N.label}),N.items.map(De=>r.jsxs("div",{className:Te.tooltipRow,children:[r.jsx("span",{className:Te.tooltipDot,style:{background:De.color}}),r.jsx("span",{className:Te.tooltipSeries,children:De.series}),r.jsxs("span",{className:Te.tooltipValue,children:[Eo(De.value),h]})]},De.series))]})]})}return r.jsxs("div",{ref:_,className:re(Te.root,S),...C,children:[r.jsx("div",{ref:M,className:Te.svgWrap,children:r.jsxs("svg",{width:Q,height:ne,viewBox:`0 0 ${Q} ${ne}`,className:Te.svg,onMouseMove:ae,onMouseLeave:ee,children:[r.jsx("defs",{children:ie.flatMap((pe,ve)=>[r.jsxs("linearGradient",{id:`${R}-fill-${ve}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:pe,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:pe,stopOpacity:"0"})]},`soft-${ve}`),r.jsxs("linearGradient",{id:`${R}-fill-strong-${ve}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:pe,stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:pe,stopOpacity:"0"})]},`strong-${ve}`)])}),H.map(pe=>{const ve=I(pe);return r.jsxs("g",{children:[l&&r.jsx("line",{x1:0,y1:ve,x2:Q-q,y2:ve,className:Te.gridLine}),r.jsxs("text",{x:0,y:ve-6,className:Te.axisLabel,textAnchor:"start",children:[Eo(pe),h]})]},pe)}),a.map((pe,ve)=>{const _e=z+ve*L;if(i==="stacked"){let Fe=0;const qe=t.map((We,It)=>{const Ct=We.data[ve]??0,Sn=Ct/W*ce,Nn=I(Fe+Ct);return Fe+=Ct,{si:It,value:Ct,barH:Sn,y:Nn}}),Ge=_e+(L-O)/2,De=qe.filter(We=>We.value>0),Qe=De.length>0?De[0].si:-1,Ye=De.length>0?De[De.length-1]:null,At=j??(Ye?ie[Ye.si]:"transparent");return r.jsxs("g",{children:[qe.map(({si:We,value:It,barH:Ct,y:Sn})=>{if(It<=0)return null;if(k==="mono-scale"){const Nn=We===Qe;return r.jsx("rect",{x:Ge,y:Sn,width:O,height:Ct,fill:Nn?`url(#${R}-fill-strong-${We})`:ie[We]},`fill-${We}`)}return r.jsx("rect",{x:Ge,y:Sn,width:O,height:Ct,fill:`url(#${R}-fill-${We})`},`fill-${We}`)}),k==="mono-scale"?Ye&&r.jsx("line",{x1:Ge,x2:Ge+O,y1:Ye.y,y2:Ye.y,stroke:At,strokeWidth:2,strokeLinecap:"butt"}):qe.map(({si:We,value:It,y:Ct})=>It>0?r.jsx("line",{x1:Ge,x2:Ge+O,y1:Ct,y2:Ct,stroke:ie[We],strokeWidth:2,strokeLinecap:"butt"},`cap-${We}`):null)]},ve)}const je=t.length*O+(t.length-1)*U,$e=_e+(L-je)/2;return r.jsx("g",{children:t.map((Fe,qe)=>{const Ge=Fe.data[ve]??0;if(Ge<=0)return null;const De=Ge/W*ce,Qe=$e+qe*(O+U),Ye=I(Ge);return r.jsxs("g",{children:[r.jsx("rect",{x:Qe,y:Ye,width:O,height:De,fill:`url(#${R}-fill-${qe})`}),r.jsx("line",{x1:Qe,x2:Qe+O,y1:Ye,y2:Ye,stroke:ie[qe],strokeWidth:2,strokeLinecap:"butt"})]},qe)})},ve)}),(()=>{const ve=Math.max(1,Math.ceil(45/L)),_e=a.length-1;return a.map((je,$e)=>{const Fe=$e===0,qe=$e===_e;if(!(Fe||qe)&&$e%ve!==0)return null;const De=Fe?z:qe?Q-q:z+L*($e+.5),Qe=Fe?"start":qe?"end":"middle";return r.jsx("text",{x:De,y:ne-G+18,className:Te.axisLabel,textAnchor:Qe,children:je},`xl-${$e}`)})})()]})}),d&&t.length>1&&r.jsx("div",{className:Te.legendWrap,children:t.map((pe,ve)=>r.jsxs("div",{className:Te.legendItem,children:[r.jsx("span",{className:Te.legendDot,style:{background:ie[ve]}}),r.jsx("span",{className:Te.legendLabel,children:pe.label})]},pe.label))}),N.visible&&r.jsxs("div",{className:Te.tooltip,style:{left:N.x,top:N.y},children:[r.jsx("div",{className:Te.tooltipLabel,children:N.label}),N.items.map(pe=>r.jsxs("div",{className:Te.tooltipRow,children:[r.jsx("span",{className:Te.tooltipDot,style:{background:pe.color}}),r.jsx("span",{className:Te.tooltipSeries,children:pe.series}),r.jsxs("span",{className:Te.tooltipValue,children:[Eo(pe.value),h]})]},pe.series))]})]})});Dk.displayName="BarChart";const Bk="_root_1crij_5",Fk="_svgWrap_1crij_13",Wk="_svg_1crij_13",Hk="_gridLine_1crij_23",Uk="_axisLabelY_1crij_35 _axisLabel_1crij_28",qk="_axisLabelX_1crij_39 _axisLabel_1crij_28",Vk="_legendWrap_1crij_51",Gk="_tooltip_1crij_76",Yk="_tooltipLabel_1crij_95",Qk="_tooltipRow_1crij_105",Kk="_tooltipDot_1crij_111",Zk="_tooltipSeries_1crij_118",Xk="_tooltipValue_1crij_125",tn={root:Bk,svgWrap:Fk,svg:Wk,gridLine:Hk,axisLabelY:Uk,axisLabelX:qk,legendWrap:Vk,tooltip:Gk,tooltipLabel:Yk,tooltipRow:Qk,tooltipDot:Kk,tooltipSeries:Zk,tooltipValue:Xk};function Jk(t){if(t===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(t))),i=t/a;return i<=1?a:i<=2?2*a:i<=5?5*a:10*a}function Hp(t){return t>=1e3?`${(t/1e3).toFixed(t%1e3===0?0:1)}k`:String(Math.round(t))}function e_(t,a=.35){if(t.length<2)return"";let i=`M ${t[0][0]} ${t[0][1]}`;for(let s=0;s<t.length-1;s++){const[l,d]=t[s],[h,f]=t[s+1],v=(h-l)*a;i+=` C ${l+v} ${d}, ${h-v} ${f}, ${h} ${f}`}return i}const t_=g.forwardRef(({series:t,labels:a,height:i=260,showGrid:s=!0,showLegend:l=!0,gradientFrom:d="#8c4fe2",gradientTo:h="#446cff",yUnit:f="",yTickCount:v=5,className:x,...y},b)=>{const[k,j]=g.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),S=`line-grad-${Math.random().toString(36).slice(2,9)}`,C=g.useRef(null),[_,$]=g.useState(540);g.useEffect(()=>{const W=C.current;if(!W)return;const H=new ResizeObserver(L=>{var O;const U=(O=L[0])==null?void 0:O.contentRect.width;U>0&&$(Math.floor(U))});H.observe(W);const I=Math.floor(W.getBoundingClientRect().width);return I>0&&$(I),()=>H.disconnect()},[]);const R=44,N=20,A=20,M=_,T=i,E=M-R,z=T-N-A,q=`url(#${S}-stroke)`,G=W=>W.color??q,X=t.flatMap(W=>W.data),Q=Jk(Math.max(...X,1)),ne=Array.from({length:v+1},(W,H)=>Q*(H/v)).reverse(),te=W=>A+z-W/Q*z,ce=W=>a.length>1?R+W/(a.length-1)*E:R+E/2,oe=W=>W.map((H,I)=>[ce(I),te(H)]),ie=()=>j(W=>({...W,visible:!1})),Z=g.useCallback(W=>{const H=W.currentTarget.getBoundingClientRect(),L=W.clientX-H.left-R,U=E/Math.max(a.length-1,1),O=Math.round(L/U),ee=Math.max(0,Math.min(O,a.length-1)),ae=t.map(K=>({color:K.color??h,series:K.label,value:K.data[ee]??0}));j({visible:!0,index:ee,x:W.clientX+12,y:W.clientY-8,label:a[ee],items:ae})},[t,a,h,E,R]);return r.jsxs("div",{ref:b,className:re(tn.root,x),...y,children:[r.jsx("div",{ref:C,className:tn.svgWrap,children:r.jsxs("svg",{width:M,height:T,viewBox:`0 0 ${M} ${T}`,className:tn.svg,onMouseMove:Z,onMouseLeave:ie,children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${S}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:d}),r.jsx("stop",{offset:"100%",stopColor:h})]}),r.jsxs("linearGradient",{id:`${S}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[r.jsx("stop",{offset:"0%",stopColor:h,stopOpacity:"0.05"}),r.jsx("stop",{offset:"50%",stopColor:h}),r.jsx("stop",{offset:"100%",stopColor:h,stopOpacity:"0.05"})]}),r.jsxs("filter",{id:`${S}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[r.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),r.jsx("feOffset",{dy:"4"}),r.jsx("feComponentTransfer",{children:r.jsx("feFuncA",{type:"linear",slope:"0.3"})}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),r.jsx("clipPath",{id:`${S}-clip`,children:r.jsx("rect",{x:R,y:A,width:E,height:z,rx:6,ry:6})})]}),ne.map(W=>{const H=te(W);return r.jsxs("g",{children:[s&&r.jsx("line",{x1:0,y1:H,x2:M,y2:H,className:tn.gridLine}),r.jsxs("text",{x:0,y:H-6,className:tn.axisLabelY,textAnchor:"start",children:[Hp(W),f]})]},W)}),r.jsx("g",{clipPath:`url(#${S}-clip)`,children:t.map((W,H)=>{const I=oe(W.data),L=e_(I);return r.jsx("path",{d:L,fill:"none",stroke:G(W),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},H)})}),(()=>{const W=k.index>=0?k.index:0,H=ce(W),I=k.visible&&k.index>=0,L="transform 200ms var(--ease-default, ease-out)";return r.jsx("g",{style:{pointerEvents:"none",opacity:I?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:r.jsxs("g",{style:{transform:`translateX(${H}px)`,transition:L},children:[r.jsx("line",{x1:0,x2:0,y1:A,y2:A+z,stroke:h,strokeWidth:2,strokeLinecap:"round",opacity:.5}),t.map((U,O)=>{const ee=U.data[W]??0,ae=te(ee),K=U.color??h;return r.jsx("g",{style:{transform:`translateY(${ae}px)`,transition:L},children:r.jsx("circle",{cx:0,cy:0,r:4,fill:K,filter:`url(#${S}-pin-shadow)`})},O)})]})})})(),(()=>{const H=a.length>1?E/(a.length-1):E,I=Math.max(1,Math.ceil(45/Math.max(H,1))),L=a.length-1;return a.map((U,O)=>{const ee=O===0,ae=O===L;if(!(ee||ae)&&O%I!==0)return null;const B=ee?R:ae?M:ce(O),ue=ee?"start":ae?"end":"middle";return r.jsx("text",{x:B,y:T-N+14,className:tn.axisLabelX,textAnchor:ue,children:U},U)})})()]})}),l&&t.length>0&&r.jsx("div",{className:tn.legendWrap,children:r.jsx(Mm,{variant:"line",items:t.map(W=>({color:W.color??h,label:W.label}))})}),k.visible&&r.jsxs("div",{className:tn.tooltip,style:{left:k.x,top:k.y},children:[r.jsx("div",{className:tn.tooltipLabel,children:k.label}),k.items.map(W=>r.jsxs("div",{className:tn.tooltipRow,children:[r.jsx("span",{className:tn.tooltipDot,style:{background:W.color}}),r.jsx("span",{className:tn.tooltipSeries,children:W.series}),r.jsxs("span",{className:tn.tooltipValue,children:[Hp(W.value),f]})]},W.series))]})]})});t_.displayName="LineChart";const n_="_root_3tq2n_5",r_="_chartWrap_3tq2n_14",o_="_svg_3tq2n_18",a_="_centerText_3tq2n_23",i_="_statLegend_3tq2n_31",s_="_statItem_3tq2n_37",l_="_statBar_3tq2n_44",c_="_statText_3tq2n_50",d_="_statValue_3tq2n_56",u_="_statLabel_3tq2n_65",h_="_listLegend_3tq2n_72",p_="_legendItem_3tq2n_79",f_="_legendDot_3tq2n_85",m_="_legendLabel_3tq2n_92",g_="_legendValue_3tq2n_99",v_="_tooltip_3tq2n_107",x_="_tooltipLabel_3tq2n_118",y_="_tooltipValue_3tq2n_124",wt={root:n_,chartWrap:r_,svg:o_,centerText:a_,statLegend:i_,statItem:s_,statBar:l_,statText:c_,statValue:d_,statLabel:u_,listLegend:h_,legendItem:p_,legendDot:f_,legendLabel:m_,legendValue:g_,tooltip:v_,tooltipLabel:x_,tooltipValue:y_},Up=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],w_=g.forwardRef(({segments:t,innerRadius:a=60,size:i=200,showLegend:s=!0,legendVariant:l="list",unit:d="%",centerLabel:h,className:f,...v},x)=>{const[y,b]=g.useState({visible:!1,x:0,y:0,label:"",value:""}),k=t.map((M,T)=>M.color??Up[T%Up.length]),j=t.reduce((M,T)=>M+T.value,0),S=i/2,C=i/2,_=i*.15,$=(i-_)/2-2,R=2*Math.PI*$;let N=-R/4;const A=t.map((M,T)=>{const z=(j>0?M.value/j:0)*R,q=`${z} ${R-z}`,G=-N;return N+=z,{dashArray:q,dashOffset:G,color:k[T],...M}});return r.jsxs("div",{ref:x,className:re(wt.root,f),...v,children:[r.jsx("div",{className:wt.chartWrap,children:r.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:wt.svg,children:[r.jsx("circle",{cx:S,cy:C,r:$,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:_}),A.map((M,T)=>r.jsx("circle",{cx:S,cy:C,r:$,fill:"none",stroke:M.color,strokeWidth:_,strokeDasharray:M.dashArray,strokeDashoffset:M.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:E=>{const z=j>0?Math.round(M.value/j*100):0;b({visible:!0,x:E.clientX+12,y:E.clientY-8,label:M.label,value:`${z}${d}`})},onMouseLeave:()=>b(E=>({...E,visible:!1}))},T)),h&&a>0&&r.jsx("text",{x:S,y:C+6,textAnchor:"middle",className:wt.centerText,children:h})]})}),s&&l==="stat"&&r.jsx("div",{className:wt.statLegend,children:t.map((M,T)=>{const E=j>0?Math.round(M.value/j*100):0;return r.jsxs("div",{className:wt.statItem,children:[r.jsx("span",{className:wt.statBar,style:{background:k[T]}}),r.jsxs("div",{className:wt.statText,children:[r.jsxs("span",{className:wt.statValue,children:[E,d]}),r.jsx("span",{className:wt.statLabel,children:M.label})]})]},M.label)})}),s&&l==="list"&&r.jsx("div",{className:wt.listLegend,children:t.map((M,T)=>{const E=j>0?Math.round(M.value/j*100):0;return r.jsxs("div",{className:wt.legendItem,children:[r.jsx("span",{className:wt.legendDot,style:{background:k[T]}}),r.jsx("span",{className:wt.legendLabel,children:M.label}),r.jsxs("span",{className:wt.legendValue,children:[E,d]})]},M.label)})}),y.visible&&r.jsxs("div",{className:wt.tooltip,style:{left:y.x,top:y.y},children:[r.jsx("div",{className:wt.tooltipLabel,children:y.label}),r.jsx("div",{className:wt.tooltipValue,children:y.value})]})]})});w_.displayName="DonutChart";const b_="_root_bqpf6_5",k_="_svgWrap_bqpf6_10",__="_svg_bqpf6_10",C_="_axisLabel_bqpf6_19",j_="_tooltip_bqpf6_25",Po={root:b_,svgWrap:k_,svg:__,axisLabel:C_,tooltip:j_};function S_(t){return t<.35?"var(--Alloy-green-100)":t<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const N_=g.forwardRef(({cells:t,rows:a,cols:i,colorScale:s=S_,cellRadius:l=4,cellGap:d=4,showTooltip:h=!0,className:f,...v},x)=>{const[y,b]=g.useState({visible:!1,x:0,y:0,content:""}),k=g.useRef(null),[j,S]=g.useState(540);g.useEffect(()=>{const T=k.current;if(!T)return;const E=new ResizeObserver(q=>{var X;const G=(X=q[0])==null?void 0:X.contentRect.width;G>0&&S(Math.floor(G))});E.observe(T);const z=Math.floor(T.getBoundingClientRect().width);return z>0&&S(z),()=>E.disconnect()},[]);const C=32,_=16,$=j,R=$-C-d,N=Math.max(4,(R-(i.length-1)*d)/i.length),A=a.length*(_+d)+d+24,M=new Map;return t.forEach(T=>M.set(`${T.row}__${T.col}`,T)),r.jsxs("div",{ref:x,className:re(Po.root,f),...v,children:[r.jsx("div",{ref:k,className:Po.svgWrap,children:r.jsxs("svg",{width:$,height:A,viewBox:`0 0 ${$} ${A}`,className:Po.svg,onMouseLeave:()=>b(T=>({...T,visible:!1})),children:[i.map((T,E)=>{const z=C+d+E*(N+d)+N/2;return r.jsx("text",{x:z,y:12,className:Po.axisLabel,textAnchor:"middle",children:T},T)}),a.map((T,E)=>{const z=24+E*(_+d);return r.jsxs("g",{children:[r.jsx("text",{x:C-4,y:z+_/2+4,className:Po.axisLabel,textAnchor:"end",children:T}),i.map((q,G)=>{const X=M.get(`${T}__${q}`),Q=(X==null?void 0:X.value)??0,ne=s(Q),te=C+d+G*(N+d);return r.jsx("rect",{x:te,y:z,width:N,height:_,rx:l,fill:ne,style:{cursor:"pointer"},onMouseEnter:ce=>{if(!h)return;const oe=(X==null?void 0:X.label)??`${T} / ${q}: ${Math.round(Q*100)}%`;b({visible:!0,x:ce.clientX+12,y:ce.clientY-8,content:oe})},onMouseLeave:()=>b(ce=>({...ce,visible:!1}))},q)})]},T)})]})}),y.visible&&r.jsx("div",{className:Po.tooltip,style:{left:y.x,top:y.y},children:y.content})]})});N_.displayName="HeatMap";const M_="_root_18572_6",L_="_gridWrap_18572_14",R_="_grid_18572_14",$_="_cell_18572_27",T_="_legend_18572_33",A_="_legendSquare_18572_43",I_="_tooltip_18572_49",yr={root:M_,gridWrap:L_,grid:R_,cell:$_,legend:T_,legendSquare:A_,tooltip:I_},E_=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function P_(t,a){if(t<=0)return 0;const i=t/Math.max(1,a);return i<=.25?1:i<=.5?2:i<=.75?3:4}const z_=g.forwardRef(({days:t,levelColors:a=E_,cellSize:i=14,cellGap:s=3,cellRadius:l=2,fillWidth:d=!1,showLegend:h=!0,maxCount:f,formatTooltip:v,ariaLabel:x,className:y,...b},k)=>{const[j,S]=g.useState({visible:!1,x:0,y:0,content:""}),C=f??Math.max(1,...t.map(N=>N.count)),_=[];for(let N=0;N<t.length;N+=7)_.push(t.slice(N,N+7));const $=d?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${_.length}, minmax(0, 1fr))`,gap:`${s}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${s}px`},R=d?"100%":i;return r.jsxs("div",{ref:k,className:re(yr.root,y),...b,children:[r.jsx("div",{className:yr.gridWrap,children:r.jsx("div",{role:"img","aria-label":x??`Activity heatmap with max ${C} on the busiest day`,className:yr.grid,style:$,onMouseLeave:()=>S(N=>({...N,visible:!1})),children:_.map((N,A)=>Array.from({length:7},(M,T)=>{const E=N[T];if(!E)return r.jsx("span",{className:yr.cell,style:{width:i,height:i,borderRadius:l,background:a[0]}},`${A}-${T}`);const z=P_(E.count,C),q=v?v(E,z):`${E.label??E.date}: ${E.count} activation${E.count===1?"":"s"}`;return r.jsx("span",{className:yr.cell,style:{width:R,height:i,borderRadius:l,background:a[z]},onMouseMove:G=>S({visible:!0,x:G.clientX,y:G.clientY,content:q}),onMouseLeave:()=>S(G=>({...G,visible:!1}))},`${A}-${T}`)}))})}),h&&r.jsxs("div",{className:yr.legend,children:[r.jsx("span",{children:"Less"}),[0,1,2,3,4].map(N=>r.jsx("span",{className:yr.legendSquare,style:{background:a[N],borderRadius:l}},N)),r.jsx("span",{children:"More"})]}),j.visible&&r.jsx("div",{className:yr.tooltip,style:{left:j.x,top:j.y},children:j.content})]})});z_.displayName="ActivityHeatMap";const O_="_root_14edh_5",D_="_track_14edh_17",B_="_segment_14edh_28",F_="_legend_14edh_49",W_="_legendRow_14edh_58",H_="_legendDot_14edh_68",U_="_legendLabel_14edh_74",q_="_legendValue_14edh_78",V_="_tooltip_14edh_84",G_="_tooltipLabel_14edh_100",Y_="_tooltipValueRow_14edh_105",Q_="_tooltipDot_14edh_114",hn={root:O_,track:D_,segment:B_,legend:F_,legendRow:W_,legendDot:H_,legendLabel:U_,legendValue:q_,tooltip:V_,tooltipLabel:G_,tooltipValueRow:Y_,tooltipDot:Q_},K_=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],zo={r:140,g:79,b:226},pd={r:68,g:108,b:255};function qp(t){const a=Math.max(0,Math.min(100,t))/100,i=Math.round(zo.r+(pd.r-zo.r)*a),s=Math.round(zo.g+(pd.g-zo.g)*a),l=Math.round(zo.b+(pd.b-zo.b)*a);return`rgb(${i}, ${s}, ${l})`}const Z_=g.forwardRef(({segments:t,colors:a=K_,aiGradient:i=!1,height:s,showLegend:l=!1,flat:d=!1,ariaLabel:h,className:f,...v},x)=>{const[y,b]=g.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),k=t.reduce((_,$)=>_+Math.max(0,$.value),0);let j=0;const S=t.map((_,$)=>{const R=Math.max(0,_.value),N=k>0?R/k*100:0,A=k>0?j/k*100:0;j+=R;const M=k>0?j/k*100:0,T=_.color??a[$%a.length],E=d?!0:_.emphasized??$===0;return{..._,pct:N,startPct:A,endPct:M,color:T,emphasized:E}}),C=s!==void 0?{height:typeof s=="number"?`${s}px`:s}:void 0;return r.jsxs("div",{ref:x,className:re(hn.root,f),...v,children:[r.jsx("div",{role:"img","aria-label":h??`Ratio bar: ${t.map(_=>`${_.label} ${_.value}`).join(", ")}`,className:hn.track,style:C,onMouseLeave:()=>b(_=>({..._,visible:!1})),children:S.map(_=>{const $=i?`linear-gradient(to right, ${qp(_.startPct)}, ${qp(_.endPct)})`:_.color;return r.jsx("span",{className:hn.segment,"data-emphasized":_.emphasized||void 0,"data-ai":i||void 0,style:{width:`${_.pct}%`,background:$,"--ratio-hover-bg":_.color},onMouseMove:R=>b({visible:!0,x:R.clientX,y:R.clientY,label:_.label,value:_.value,color:_.color})},_.label)})}),l&&r.jsx("ul",{className:hn.legend,children:S.map(_=>r.jsxs("li",{className:hn.legendRow,children:[r.jsx("span",{className:hn.legendDot,style:{background:_.color}}),r.jsx("span",{className:hn.legendLabel,children:_.label}),r.jsx("span",{className:hn.legendValue,children:_.value.toLocaleString("en-US")})]},_.label))}),y.visible&&r.jsxs("div",{className:hn.tooltip,style:{left:y.x,top:y.y},children:[r.jsx("span",{className:hn.tooltipLabel,children:y.label}),r.jsxs("span",{className:hn.tooltipValueRow,children:[r.jsx("span",{className:hn.tooltipDot,style:{background:y.color}}),y.value.toLocaleString("en-US")]})]})]})});Z_.displayName="RatioBar";const X_="_track_1wmly_6",J_="_fill_1wmly_12",Vp={track:X_,fill:J_},eC=g.forwardRef(({value:t,max:a=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:s="var(--color-bg-tertiary)",gapColor:l="var(--color-bg-primary)",stripeWidth:d=2,stripeGap:h=1,height:f=12,ariaLabel:v,className:x,style:y,...b},k)=>{const j=d+h,S=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${d}px,
      ${l} ${d}px,
      ${l} ${j}px
    )`,C=Math.max(0,Math.min(a,t)),_=a>0?C/a*100:0;return r.jsx("div",{ref:k,role:"progressbar","aria-label":v??`Progress: ${Math.round(_)}%`,"aria-valuemin":0,"aria-valuemax":a,"aria-valuenow":C,className:re(Vp.track,x),style:{height:f,background:`${S}, ${s}`,...y},...b,children:r.jsx("div",{className:Vp.fill,style:{width:`${_}%`,background:`${S}, ${i}`}})})});eC.displayName="StripedBar";const tC=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],nC=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function Gp(t,a="to right"){const i=t.map(({color:s,position:l})=>`${s} ${l}`).join(", ");return`linear-gradient(${a}, ${i})`}Gp(tC),Gp(nC);var et="-ms-",Xa="-moz-",Be="-webkit-",Lm="comm",il="rule",yu="decl",rC="@import",oC="@namespace",Rm="@keyframes",aC="@layer",$m=Math.abs,wu=String.fromCharCode,Bd=Object.assign;function iC(t,a){return gt(t,0)^45?(((a<<2^gt(t,0))<<2^gt(t,1))<<2^gt(t,2))<<2^gt(t,3):0}function Tm(t){return t.trim()}function Kn(t,a){return(t=a.exec(t))?t[0]:t}function Le(t,a,i){return t.replace(a,i)}function Is(t,a,i){return t.indexOf(a,i)}function gt(t,a){return t.charCodeAt(a)|0}function no(t,a,i){return t.slice(a,i)}function kn(t){return t.length}function Am(t){return t.length}function Ga(t,a){return a.push(t),t}function sC(t,a){return t.map(a).join("")}function Yp(t,a){return t.filter(function(i){return!Kn(i,a)})}var sl=1,Go=1,Im=0,pn=0,pt=0,ea="";function ll(t,a,i,s,l,d,h,f){return{value:t,root:a,parent:i,type:s,props:l,children:d,line:sl,column:Go,length:h,return:"",siblings:f}}function wr(t,a){return Bd(ll("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},a)}function Oo(t){for(;t.root;)t=wr(t.root,{children:[t]});Ga(t,t.siblings)}function lC(){return pt}function cC(){return pt=pn>0?gt(ea,--pn):0,Go--,pt===10&&(Go=1,sl--),pt}function Cn(){return pt=pn<Im?gt(ea,pn++):0,Go++,pt===10&&(Go=1,sl++),pt}function kr(){return gt(ea,pn)}function Es(){return pn}function cl(t,a){return no(ea,t,a)}function ti(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function dC(t){return sl=Go=1,Im=kn(ea=t),pn=0,[]}function uC(t){return ea="",t}function fd(t){return Tm(cl(pn-1,Fd(t===91?t+2:t===40?t+1:t)))}function hC(t){for(;(pt=kr())&&pt<33;)Cn();return ti(t)>2||ti(pt)>3?"":" "}function pC(t,a){for(;--a&&Cn()&&!(pt<48||pt>102||pt>57&&pt<65||pt>70&&pt<97););return cl(t,Es()+(a<6&&kr()==32&&Cn()==32))}function Fd(t){for(;Cn();)switch(pt){case t:return pn;case 34:case 39:t!==34&&t!==39&&Fd(pt);break;case 40:t===41&&Fd(t);break;case 92:Cn();break}return pn}function fC(t,a){for(;Cn()&&t+pt!==57;)if(t+pt===84&&kr()===47)break;return"/*"+cl(a,pn-1)+"*"+wu(t===47?t:Cn())}function mC(t){for(;!ti(kr());)Cn();return cl(t,pn)}function gC(t){return uC(Ps("",null,null,null,[""],t=dC(t),0,[0],t))}function Ps(t,a,i,s,l,d,h,f,v){for(var x=0,y=0,b=h,k=0,j=0,S=0,C=1,_=1,$=1,R=0,N="",A=l,M=d,T=s,E=N;_;)switch(S=R,R=Cn()){case 40:if(S!=108&&gt(E,b-1)==58){Is(E+=Le(fd(R),"&","&\f"),"&\f",$m(x?f[x-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:E+=fd(R);break;case 9:case 10:case 13:case 32:E+=hC(S);break;case 92:E+=pC(Es()-1,7);continue;case 47:switch(kr()){case 42:case 47:Ga(vC(fC(Cn(),Es()),a,i,v),v),(ti(S||1)==5||ti(kr()||1)==5)&&kn(E)&&no(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*C:f[x++]=kn(E)*$;case 125*C:case 59:case 0:switch(R){case 0:case 125:_=0;case 59+y:$==-1&&(E=Le(E,/\f/g,"")),j>0&&(kn(E)-b||C===0&&S===47)&&Ga(j>32?Kp(E+";",s,i,b-1,v):Kp(Le(E," ","")+";",s,i,b-2,v),v);break;case 59:E+=";";default:if(Ga(T=Qp(E,a,i,x,y,l,f,N,A=[],M=[],b,d),d),R===123)if(y===0)Ps(E,a,T,T,A,d,b,f,M);else{switch(k){case 99:if(gt(E,3)===110)break;case 108:if(gt(E,2)===97)break;default:y=0;case 100:case 109:case 115:}y?Ps(t,T,T,s&&Ga(Qp(t,T,T,0,0,l,f,N,l,A=[],b,M),M),l,M,b,f,s?A:M):Ps(E,T,T,T,[""],M,0,f,M)}}x=y=j=0,C=$=1,N=E="",b=h;break;case 58:b=1+kn(E),j=S;default:if(C<1){if(R==123)--C;else if(R==125&&C++==0&&cC()==125)continue}switch(E+=wu(R),R*C){case 38:$=y>0?1:(E+="\f",-1);break;case 44:f[x++]=(kn(E)-1)*$,$=1;break;case 64:kr()===45&&(E+=fd(Cn())),k=kr(),y=b=kn(N=E+=mC(Es())),R++;break;case 45:S===45&&kn(E)==2&&(C=0)}}return d}function Qp(t,a,i,s,l,d,h,f,v,x,y,b){for(var k=l-1,j=l===0?d:[""],S=Am(j),C=0,_=0,$=0;C<s;++C)for(var R=0,N=no(t,k+1,k=$m(_=h[C])),A=t;R<S;++R)(A=Tm(_>0?j[R]+" "+N:Le(N,/&\f/g,j[R])))&&(v[$++]=A);return ll(t,a,i,l===0?il:f,v,x,y,b)}function vC(t,a,i,s){return ll(t,a,i,Lm,wu(lC()),no(t,2,-2),0,s)}function Kp(t,a,i,s,l){return ll(t,a,i,yu,no(t,0,s),no(t,s+1,-1),s,l)}function Em(t,a,i){switch(iC(t,a)){case 5103:return Be+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Be+t+t;case 4855:return Be+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return Xa+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Be+t+Xa+t+et+t+t;case 5936:switch(gt(t,a+11)){case 114:return Be+t+et+Le(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Be+t+et+Le(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Be+t+et+Le(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Be+t+et+t+t;case 6165:return Be+t+et+"flex-"+t+t;case 5187:return Be+t+Le(t,/(\w+).+(:[^]+)/,Be+"box-$1$2"+et+"flex-$1$2")+t;case 5443:return Be+t+et+"flex-item-"+Le(t,/flex-|-self/g,"")+(Kn(t,/flex-|baseline/)?"":et+"grid-row-"+Le(t,/flex-|-self/g,""))+t;case 4675:return Be+t+et+"flex-line-pack"+Le(t,/align-content|flex-|-self/g,"")+t;case 5548:return Be+t+et+Le(t,"shrink","negative")+t;case 5292:return Be+t+et+Le(t,"basis","preferred-size")+t;case 6060:return Be+"box-"+Le(t,"-grow","")+Be+t+et+Le(t,"grow","positive")+t;case 4554:return Be+Le(t,/([^-])(transform)/g,"$1"+Be+"$2")+t;case 6187:return Le(Le(Le(t,/(zoom-|grab)/,Be+"$1"),/(image-set)/,Be+"$1"),t,"")+t;case 5495:case 3959:return Le(t,/(image-set\([^]*)/,Be+"$1$`$1");case 4968:return Le(Le(t,/(.+:)(flex-)?(.*)/,Be+"box-pack:$3"+et+"flex-pack:$3"),/space-between/,"justify")+Be+t+t;case 4200:if(!Kn(t,/flex-|baseline/))return et+"grid-column-align"+no(t,a)+t;break;case 2592:case 3360:return et+Le(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(s,l){return a=l,Kn(s.props,/grid-\w+-end/)})?~Is(t+(i=i[a].value),"span",0)?t:et+Le(t,"-start","")+t+et+"grid-row-span:"+(~Is(i,"span",0)?Kn(i,/\d+/):+Kn(i,/\d+/)-+Kn(t,/\d+/))+";":et+Le(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(s){return Kn(s.props,/grid-\w+-start/)})?t:et+Le(Le(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Le(t,/(.+)-inline(.+)/,Be+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kn(t)-1-a>6)switch(gt(t,a+1)){case 109:if(gt(t,a+4)!==45)break;case 102:return Le(t,/(.+:)(.+)-([^]+)/,"$1"+Be+"$2-$3$1"+Xa+(gt(t,a+3)==108?"$3":"$2-$3"))+t;case 115:return~Is(t,"stretch",0)?Em(Le(t,"stretch","fill-available"),a,i)+t:t}break;case 5152:case 5920:return Le(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,d,h,f,v,x){return et+l+":"+d+x+(h?et+l+"-span:"+(f?v:+v-+d)+x:"")+t});case 4949:if(gt(t,a+6)===121)return Le(t,":",":"+Be)+t;break;case 6444:switch(gt(t,gt(t,14)===45?18:11)){case 120:return Le(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Be+(gt(t,14)===45?"inline-":"")+"box$3$1"+Be+"$2$3$1"+et+"$2box$3")+t;case 100:return Le(t,":",":"+et)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Le(t,"scroll-","scroll-snap-")+t}return t}function qs(t,a){for(var i="",s=0;s<t.length;s++)i+=a(t[s],s,t,a)||"";return i}function xC(t,a,i,s){switch(t.type){case aC:if(t.children.length)break;case rC:case oC:case yu:return t.return=t.return||t.value;case Lm:return"";case Rm:return t.return=t.value+"{"+qs(t.children,s)+"}";case il:if(!kn(t.value=t.props.join(",")))return""}return kn(i=qs(t.children,s))?t.return=t.value+"{"+i+"}":""}function yC(t){var a=Am(t);return function(i,s,l,d){for(var h="",f=0;f<a;f++)h+=t[f](i,s,l,d)||"";return h}}function wC(t){return function(a){a.root||(a=a.return)&&t(a)}}function bC(t,a,i,s){if(t.length>-1&&!t.return)switch(t.type){case yu:t.return=Em(t.value,t.length,i);return;case Rm:return qs([wr(t,{value:Le(t.value,"@","@"+Be)})],s);case il:if(t.length)return sC(i=t.props,function(l){switch(Kn(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Oo(wr(t,{props:[Le(l,/:(read-\w+)/,":"+Xa+"$1")]})),Oo(wr(t,{props:[l]})),Bd(t,{props:Yp(i,s)});break;case"::placeholder":Oo(wr(t,{props:[Le(l,/:(plac\w+)/,":"+Be+"input-$1")]})),Oo(wr(t,{props:[Le(l,/:(plac\w+)/,":"+Xa+"$1")]})),Oo(wr(t,{props:[Le(l,/:(plac\w+)/,et+"input-$1")]})),Oo(wr(t,{props:[l]})),Bd(t,{props:Yp(i,s)});break}return""})}}var Ho={},md,gd;const Yo=typeof process<"u"&&Ho!==void 0&&(Ho.REACT_APP_SC_ATTR||Ho.SC_ATTR)||"data-styled",Pm="active",zm="data-styled-version",dl="6.4.2",bu=`/*!sc*/
`,Ja=typeof window<"u"&&typeof document<"u";function Zp(t){if(typeof process<"u"&&Ho!==void 0){const a=Ho[t];if(a!==void 0&&a!=="")return a!=="false"}}const kC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(gd=(md=Zp("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&md!==void 0?md:Zp("SC_DISABLE_SPEEDY"))!==null&&gd!==void 0?gd:typeof process<"u"&&Ho!==void 0&&!1),Om="sc-keyframes-";function di(t,...a){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${t} for more information.${a.length>0?` Args: ${a.join(", ")}`:""}`)}let zs=new Map,Vs=new Map,Os=1;const Ya=t=>{if(zs.has(t))return zs.get(t);for(;Vs.has(Os);)Os++;const a=Os++;return zs.set(t,a),Vs.set(a,t),a},_C=t=>Vs.get(t),CC=(t,a)=>{Os=a+1,zs.set(t,a),Vs.set(a,t)},ku=Object.freeze([]),Qo=Object.freeze({});function jC(t,a,i=Qo){return t.theme!==i.theme&&t.theme||a||i.theme}const SC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,NC=/(^-|-$)/g;function Dm(t){return t.replace(SC,"-").replace(NC,"")}const MC=/(a)(d)/gi,Xp=t=>String.fromCharCode(t+(t>25?39:97));function _u(t){let a,i="";for(a=Math.abs(t);a>52;a=a/52|0)i=Xp(a%52)+i;return(Xp(a%52)+i).replace(MC,"$1-$2")}const Wd=5381,Kr=(t,a)=>{let i=a.length;for(;i;)t=33*t^a.charCodeAt(--i);return t},Bm=t=>Kr(Wd,t);function Fm(t){return _u(Bm(t)>>>0)}function LC(t){return t.displayName||t.name||"Component"}function Hd(t){return typeof t=="string"&&!0}function RC(t){return Hd(t)?`styled.${t}`:`Styled(${LC(t)})`}const Wm=Symbol.for("react.memo"),$C=Symbol.for("react.forward_ref"),TC={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},AC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Hm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},IC={[$C]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Wm]:Hm};function Jp(t){return("type"in(a=t)&&a.type.$$typeof)===Wm?Hm:"$$typeof"in t?IC[t.$$typeof]:TC;var a}const EC=Object.defineProperty,PC=Object.getOwnPropertyNames,zC=Object.getOwnPropertySymbols,OC=Object.getOwnPropertyDescriptor,DC=Object.getPrototypeOf,BC=Object.prototype;function Um(t,a,i){if(typeof a!="string"){const s=DC(a);s&&s!==BC&&Um(t,s,i);const l=PC(a).concat(zC(a)),d=Jp(t),h=Jp(a);for(let f=0;f<l.length;++f){const v=l[f];if(!(v in AC||i&&i[v]||h&&v in h||d&&v in d)){const x=OC(a,v);try{EC(t,v,x)}catch{}}}}return t}function ul(t){return typeof t=="function"}const FC=Symbol.for("react.forward_ref");function qm(t){return t!=null&&(typeof t=="object"||typeof t=="function")&&t.$$typeof===FC&&"styledComponentId"in t}function Qa(t,a){return t&&a?t+" "+a:t||a||""}function Ud(t,a){return t.join("")}function ni(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function qd(t,a,i=!1){if(!i&&!ni(t)&&!Array.isArray(t))return a;if(Array.isArray(a))for(let s=0;s<a.length;s++)t[s]=qd(t[s],a[s]);else if(ni(a))for(const s in a)t[s]=qd(t[s],a[s]);return t}function Cu(t,a){Object.defineProperty(t,"toString",{value:a})}const WC=class{constructor(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t,this._cGroup=0,this._cIndex=0}indexOfGroup(t){if(t===this._cGroup)return this._cIndex;let a=this._cIndex;if(t>this._cGroup)for(let i=this._cGroup;i<t;i++)a+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=t;i--)a-=this.groupSizes[i];return this._cGroup=t,this._cIndex=a,a}insertRules(t,a){if(t>=this.groupSizes.length){const l=this.groupSizes,d=l.length;let h=d;for(;t>=h;)if(h<<=1,h<0)throw di(16,`${t}`);this.groupSizes=new Uint32Array(h),this.groupSizes.set(l),this.length=h;for(let f=d;f<h;f++)this.groupSizes[f]=0}let i=this.indexOfGroup(t+1),s=0;for(let l=0,d=a.length;l<d;l++)this.tag.insertRule(i,a[l])&&(this.groupSizes[t]++,i++,s++);s>0&&this._cGroup>t&&(this._cIndex+=s)}clearGroup(t){if(t<this.length){const a=this.groupSizes[t],i=this.indexOfGroup(t),s=i+a;this.groupSizes[t]=0;for(let l=i;l<s;l++)this.tag.deleteRule(i);a>0&&this._cGroup>t&&(this._cIndex-=a)}}getGroup(t){let a="";if(t>=this.length||this.groupSizes[t]===0)return a;const i=this.groupSizes[t],s=this.indexOfGroup(t),l=s+i;for(let d=s;d<l;d++)a+=this.tag.getRule(d)+bu;return a}},HC=`style[${Yo}][${zm}="${dl}"]`,UC=new RegExp(`^${Yo}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),ef=t=>typeof ShadowRoot<"u"&&t instanceof ShadowRoot||"host"in t&&t.nodeType===11,Vd=t=>{if(!t)return document;if(ef(t))return t;if("getRootNode"in t){const a=t.getRootNode();if(ef(a))return a}return document},qC=(t,a,i)=>{const s=i.split(",");let l;for(let d=0,h=s.length;d<h;d++)(l=s[d])&&t.registerName(a,l)},VC=(t,a)=>{var i;const s=((i=a.textContent)!==null&&i!==void 0?i:"").split(bu),l=[];for(let d=0,h=s.length;d<h;d++){const f=s[d].trim();if(!f)continue;const v=f.match(UC);if(v){const x=0|parseInt(v[1],10),y=v[2];x!==0&&(CC(y,x),qC(t,y,v[3]),t.getTag().insertRules(x,l)),l.length=0}else l.push(f)}},vd=t=>{const a=Vd(t.options.target).querySelectorAll(HC);for(let i=0,s=a.length;i<s;i++){const l=a[i];l&&l.getAttribute(Yo)!==Pm&&(VC(t,l),l.parentNode&&l.parentNode.removeChild(l))}};let qa=!1;function GC(){if(qa!==!1)return qa;if(typeof document<"u"){const t=document.head.querySelector('meta[property="csp-nonce"]');if(t)return qa=t.nonce||t.getAttribute("content")||void 0;const a=document.head.querySelector('meta[name="sc-nonce"]');if(a)return qa=a.getAttribute("content")||void 0}return qa=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Vm=(t,a)=>{const i=document.head,s=t||i,l=document.createElement("style"),d=(v=>{const x=Array.from(v.querySelectorAll(`style[${Yo}]`));return x[x.length-1]})(s),h=d!==void 0?d.nextSibling:null;l.setAttribute(Yo,Pm),l.setAttribute(zm,dl);const f=a||GC();return f&&l.setAttribute("nonce",f),s.insertBefore(l,h),l},YC=class{constructor(t,a){this.element=Vm(t,a),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var s;if(i.sheet)return i.sheet;const l=(s=i.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let d=0,h=l.length;d<h;d++){const f=l[d];if(f.ownerNode===i)return f}throw di(17)})(this.element),this.length=0}insertRule(t,a){try{return this.sheet.insertRule(a,t),this.length++,!0}catch{return!1}}deleteRule(t){this.sheet.deleteRule(t),this.length--}getRule(t){const a=this.sheet.cssRules[t];return a&&a.cssText?a.cssText:""}},QC=class{constructor(t,a){this.element=Vm(t,a),this.nodes=this.element.childNodes,this.length=0}insertRule(t,a){if(t<=this.length&&t>=0){const i=document.createTextNode(a);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1}deleteRule(t){this.element.removeChild(this.nodes[t]),this.length--}getRule(t){return t<this.length?this.nodes[t].textContent:""}};let tf=Ja;const KC={isServer:!Ja,useCSSOMInjection:!kC};class hl{static registerId(a){return Ya(a)}constructor(a=Qo,i={},s){this.options=Object.assign(Object.assign({},KC),a),this.gs=i,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!a.isServer,!this.server&&Ja&&tf&&(tf=!1,vd(this)),Cu(this,()=>(l=>{const d=l.getTag(),{length:h}=d;let f="";for(let v=0;v<h;v++){const x=_C(v);if(x===void 0)continue;const y=l.names.get(x);if(y===void 0||!y.size)continue;const b=d.getGroup(v);if(b.length===0)continue;const k=Yo+".g"+v+'[id="'+x+'"]';let j="";for(const S of y)S.length>0&&(j+=S+",");f+=b+k+'{content:"'+j+'"}'+bu}return f})(this))}rehydrate(){!this.server&&Ja&&vd(this)}reconstructWithOptions(a,i=!0){const s=new hl(Object.assign(Object.assign({},this.options),a),this.gs,i&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&Ja&&a.target!==this.options.target&&Vd(this.options.target)!==Vd(a.target)&&vd(s),s}allocateGSInstance(a){return this.gs[a]=(this.gs[a]||0)+1}getTag(){return this.tag||(this.tag=(a=(({useCSSOMInjection:i,target:s,nonce:l})=>i?new YC(s,l):new QC(s,l))(this.options),new WC(a)));var a}hasNameForId(a,i){var s,l;return(l=(s=this.names.get(a))===null||s===void 0?void 0:s.has(i))!==null&&l!==void 0&&l}registerName(a,i){Ya(a),a.startsWith(Om)&&this.keyframeIds.add(a);const s=this.names.get(a);s?s.add(i):this.names.set(a,new Set([i]))}insertRules(a,i,s){this.registerName(a,i),this.getTag().insertRules(Ya(a),s)}clearNames(a){this.names.has(a)&&this.names.get(a).clear()}clearRules(a){this.getTag().clearGroup(Ya(a)),this.clearNames(a)}clearTag(){this.tag=void 0}}const Gm=new WeakSet,ZC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function XC(t,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||t in ZC||t.startsWith("--")?String(a).trim():a+"px"}const Vr=47;function nf(t){if(t.charCodeAt(0)===45&&t.charCodeAt(1)===45)return t;let a="";for(let i=0;i<t.length;i++){const s=t.charCodeAt(i);a+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):t[i]}return a.startsWith("ms-")?"-"+a:a}const Ym=Symbol.for("sc-keyframes");function JC(t){return typeof t=="object"&&t!==null&&Ym in t}function Qm(t){return ul(t)&&!(t.prototype&&t.prototype.isReactComponent)}const Km=t=>t==null||t===!1||t==="",ej=Symbol.for("react.client.reference");function rf(t){return t.$$typeof===ej}function Zm(t,a){for(const i in t){const s=t[i];t.hasOwnProperty(i)&&!Km(s)&&(Array.isArray(s)&&Gm.has(s)||ul(s)?a.push(nf(i)+":",s,";"):ni(s)?(a.push(i+" {"),Zm(s,a),a.push("}")):a.push(nf(i)+": "+XC(i,s)+";"))}}function Zr(t,a,i,s,l=[]){if(Km(t))return l;const d=typeof t;if(d==="string")return l.push(t),l;if(d==="function"){if(rf(t))return l;if(Qm(t)&&a){const h=t(a);return Zr(h,a,i,s,l)}return l.push(t),l}if(Array.isArray(t)){for(let h=0;h<t.length;h++)Zr(t[h],a,i,s,l);return l}return qm(t)?(l.push(`.${t.styledComponentId}`),l):JC(t)?(i?(t.inject(i,s),l.push(t.getName(s))):l.push(t),l):rf(t)?l:ni(t)?t.toString!==Object.prototype.toString?(l.push(t.toString()),l):(Zm(t,l),l):(l.push(t.toString()),l)}const tj=Bm(dl);class nj{constructor(a,i,s){this.rules=a,this.componentId=i,this.baseHash=Kr(tj,i),this.baseStyle=s,hl.registerId(i)}generateAndInjectStyles(a,i,s){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,i,s):"";{let d="";for(let h=0;h<this.rules.length;h++){const f=this.rules[h];if(typeof f=="string")d+=f;else if(f)if(Qm(f)){const v=f(a);typeof v=="string"?d+=v:v!=null&&v!==!1&&(d+=Ud(Zr(v,a,i,s)))}else d+=Ud(Zr(f,a,i,s))}if(d){this.dynamicNameCache||(this.dynamicNameCache=new Map);const h=s.hash?s.hash+d:d;let f=this.dynamicNameCache.get(h);if(!f){if(f=_u(Kr(Kr(this.baseHash,s.hash),d)>>>0),this.dynamicNameCache.size>=200){const v=this.dynamicNameCache.keys().next().value;v!==void 0&&this.dynamicNameCache.delete(v)}this.dynamicNameCache.set(h,f)}if(!i.hasNameForId(this.componentId,f)){const v=s(d,"."+f,void 0,this.componentId);i.insertRules(this.componentId,f,v)}l=Qa(l,f)}}return l}}const rj=/&/g;function Xm(t,a){let i=0;for(;--a>=0&&t.charCodeAt(a)===92;)i++;return!(1&~i)}function xd(t){const a=t.length;let i="",s=0,l=0,d=0,h=!1,f=!1;for(let v=0;v<a;v++){const x=t.charCodeAt(v);if(d!==0||h||x!==Vr||t.charCodeAt(v+1)!==42)if(h)x===42&&t.charCodeAt(v+1)===Vr&&(h=!1,v++);else if(x!==34&&x!==39||Xm(t,v)){if(d===0)if(x===123)l++;else if(x===125){if(l--,l<0){f=!0;let y=v+1;for(;y<a;){const b=t.charCodeAt(y);if(b===59||b===10)break;y++}y<a&&t.charCodeAt(y)===59&&y++,l=0,v=y-1,s=y;continue}l===0&&(i+=t.substring(s,v+1),s=v+1)}else x===59&&l===0&&(i+=t.substring(s,v+1),s=v+1)}else d===0?d=x:d===x&&(d=0);else h=!0,v++}return f||l!==0||d!==0?(s<a&&l===0&&d===0&&(i+=t.substring(s)),i):t}function Jm(t,a){const i=a+" ",s=","+i;for(let l=0;l<t.length;l++){const d=t[l];if(d.type==="rule"){d.value=(i+d.value).replaceAll(",",s);const h=d.props,f=[];for(let v=0;v<h.length;v++)f[v]=i+h[v];d.props=f}Array.isArray(d.children)&&d.type!=="@keyframes"&&Jm(d.children,a)}return t}function oj({options:t=Qo,plugins:a=ku}=Qo){let i,s,l;const d=(k,j,S)=>S.startsWith(s)&&S.endsWith(s)&&S.replaceAll(s,"").length>0?`.${i}`:k,h=a.slice();h.push(k=>{k.type===il&&k.value.includes("&")&&(l||(l=new RegExp(`\\${s}\\b`,"g")),k.props[0]=k.props[0].replace(rj,s).replace(l,d))}),t.prefix&&h.push(bC),h.push(xC);let f=[];const v=yC(h.concat(wC(k=>f.push(k)))),x=(k,j="",S="",C="&")=>{i=C,s=j,l=void 0;const _=(function(R){const N=R.indexOf("//")!==-1,A=R.indexOf("}")!==-1;if(!N&&!A)return R;if(!N)return xd(R);const M=R.length;let T="",E=0,z=0,q=0,G=0,X=0,Q=!1;for(;z<M;){const ne=R.charCodeAt(z);if(ne!==34&&ne!==39||Xm(R,z))if(q===0)if(ne===Vr&&z+1<M&&R.charCodeAt(z+1)===42){for(z+=2;z+1<M&&(R.charCodeAt(z)!==42||R.charCodeAt(z+1)!==Vr);)z++;z+=2}else if(ne!==40)if(ne!==41)if(G>0)z++;else if(ne===42&&z+1<M&&R.charCodeAt(z+1)===Vr)T+=R.substring(E,z),z+=2,E=z,Q=!0;else if(ne===Vr&&z+1<M&&R.charCodeAt(z+1)===Vr){for(T+=R.substring(E,z);z<M&&R.charCodeAt(z)!==10;)z++;E=z,Q=!0}else ne===123?X++:ne===125&&X--,z++;else G>0&&G--,z++;else G++,z++;else z++;else q===0?q=ne:q===ne&&(q=0),z++}return Q?(E<M&&(T+=R.substring(E)),X===0?T:xd(T)):X===0?R:xd(R)})(k);let $=gC(S||j?S+" "+j+" { "+_+" }":_);return t.namespace&&($=Jm($,t.namespace)),f=[],qs($,v),f},y=t;let b=Wd;for(let k=0;k<a.length;k++)a[k].name||di(15),b=Kr(b,a[k].name);return y!=null&&y.namespace&&(b=Kr(b,y.namespace)),y!=null&&y.prefix&&(b=Kr(b,"p")),x.hash=b!==Wd?b.toString():"",x}const aj=new hl,Gd=oj(),e2=_r.createContext({shouldForwardProp:void 0,styleSheet:aj,stylis:Gd,stylisPlugins:void 0});e2.Consumer;function ij(){return _r.useContext(e2)}const t2=_r.createContext(void 0);t2.Consumer;const of=Object.prototype.hasOwnProperty,yd={};function sj(t,a){const i=typeof t!="string"?"sc":Dm(t);yd[i]=(yd[i]||0)+1;const s=i+"-"+Fm(dl+i+yd[i]);return a?a+"-"+s:s}function lj(t,a,i){const s=qm(t),l=t,d=!Hd(t),{attrs:h=ku,componentId:f=sj(a.displayName,a.parentComponentId),displayName:v=RC(t)}=a,x=a.displayName&&a.componentId?Dm(a.displayName)+"-"+a.componentId:a.componentId||f,y=s&&l.attrs?l.attrs.concat(h).filter(Boolean):h;let{shouldForwardProp:b}=a;if(s&&l.shouldForwardProp){const C=l.shouldForwardProp;if(a.shouldForwardProp){const _=a.shouldForwardProp;b=($,R)=>C($,R)&&_($,R)}else b=C}const k=new nj(i,x,s?l.componentStyle:void 0);function j(C,_){return(function($,R,N){const{attrs:A,componentStyle:M,defaultProps:T,foldedComponentIds:E,styledComponentId:z,target:q}=$,G=_r.useContext(t2),X=ij(),Q=$.shouldForwardProp||X.shouldForwardProp,ne=jC(R,G,T)||Qo;let te,ce;{const W=_r.useRef(null),H=W.current;if(H!==null&&H[1]===ne&&H[2]===X.styleSheet&&H[3]===X.stylis&&H[7]===M&&(function(I,L,U){const O=I,ee=L;let ae=0;for(const K in ee)if(of.call(ee,K)&&(ae++,O[K]!==ee[K]))return!1;return ae===U})(H[0],R,H[4]))te=H[5],ce=H[6];else{te=(function(L,U,O){const ee=Object.assign(Object.assign({},U),{className:void 0,theme:O}),ae=L.length>1;for(let K=0;K<L.length;K++){const B=L[K],ue=ul(B)?B(ae?Object.assign({},ee):ee):B;for(const me in ue)me==="className"?ee.className=Qa(ee.className,ue[me]):me==="style"?ee.style=Object.assign(Object.assign({},ee.style),ue[me]):me in U&&U[me]===void 0||(ee[me]=ue[me])}return"className"in U&&typeof U.className=="string"&&(ee.className=Qa(ee.className,U.className)),ee})(A,R,ne),ce=(function(L,U,O,ee){return L.generateAndInjectStyles(U,O,ee)})(M,te,X.styleSheet,X.stylis);let I=0;for(const L in R)of.call(R,L)&&I++;W.current=[R,ne,X.styleSheet,X.stylis,I,te,ce,M]}}const oe=te.as||q,ie=(function(W,H,I,L){const U={};for(const O in W)W[O]===void 0||O[0]==="$"||O==="as"||O==="theme"&&W.theme===I||(O==="forwardedAs"?U.as=W.forwardedAs:L&&!L(O,H)||(U[O]=W[O]));return U})(te,oe,ne,Q);let Z=Qa(E,z);return ce&&(Z+=" "+ce),te.className&&(Z+=" "+te.className),ie[Hd(oe)&&oe.includes("-")?"class":"className"]=Z,N&&(ie.ref=N),g.createElement(oe,ie)})(S,C,_)}j.displayName=v;let S=_r.forwardRef(j);return S.attrs=y,S.componentStyle=k,S.displayName=v,S.shouldForwardProp=b,S.foldedComponentIds=s?Qa(l.foldedComponentIds,l.styledComponentId):"",S.styledComponentId=x,S.target=s?l.target:t,Object.defineProperty(S,"defaultProps",{get(){return this._foldedDefaultProps},set(C){this._foldedDefaultProps=s?(function(_,...$){for(const R of $)qd(_,R,!0);return _})({},l.defaultProps,C):C}}),Cu(S,()=>`.${S.styledComponentId}`),d&&Um(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}var cj=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function af(t,a){const i=[t[0]];for(let s=0,l=a.length;s<l;s+=1)i.push(a[s],t[s+1]);return i}const sf=t=>(Gm.add(t),t);function Ve(t,...a){if(ul(t)||ni(t))return sf(Zr(af(ku,[t,...a])));const i=t;return a.length===0&&i.length===1&&typeof i[0]=="string"?Zr(i):sf(Zr(af(i,a)))}function Yd(t,a,i=Qo){if(!a)throw di(1,a);const s=(l,...d)=>t(a,i,Ve(l,...d));return s.attrs=l=>Yd(t,a,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)})),s.withConfig=l=>Yd(t,a,Object.assign(Object.assign({},i),l)),s}const n2=t=>Yd(lj,t),m=n2;cj.forEach(t=>{m[t]=n2(t)});var r2;class dj{constructor(a,i){this[r2]=!0,this.inject=(s,l=Gd)=>{const d=this.getName(l);if(!s.hasNameForId(this.id,d)){const h=l(this.rules,d,"@keyframes");s.insertRules(this.id,d,h)}},this.name=a,this.id=Om+a,this.rules=i,Ya(this.id),Cu(this,()=>{throw di(12,String(this.name))})}getName(a=Gd){return a.hash?this.name+_u(+a.hash>>>0):this.name}}function Ne(t,...a){const i=Ud(Ve(t,...a)),s=Fm(i);return new dj(s,i)}r2=Ym;const Pn=(t,a,i)=>Math.max(a,Math.min(i,t)),ju=t=>(t=Pn(t,0,1),t*t*(3-2*t)),ta=t=>t>=48?1:t>=32?1.2:t>=24?1.5:t>=20?1.85:2.3;function An(t){const a=Math.sin(t*127.1+311.7)*43758.5453;return a-Math.floor(a)}function Qd(t){const a=(t||"#96B9FF").replace("#",""),i=parseInt(a.length===3?a.split("").map(s=>s+s).join(""):a,16);return(i>>16&255)+","+(i>>8&255)+","+(i&255)}function lf(t,a,i){let s=i.trim();const l=s.match(/var\(\s*(--[^,)]+)/);if(l&&(s=getComputedStyle(a).getPropertyValue(l[1]).trim()||s),s.startsWith("#"))return Qd(s);t.fillStyle="#000",t.fillStyle=s;const d=t.fillStyle;if(d.startsWith("#"))return Qd(d);const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:"26,30,38"}function uj(){const[t,a]=g.useState(()=>{try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}});return g.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-color-scheme: dark)")}catch{return}const s=d=>a(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),t}function hj(t){const[a,i,s]=t.split(",").map(Number);return(.299*a+.587*i+.114*s)/255}function pj(t,a){return t==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:t==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:a,glow:!0}:t==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:a,glow:!0}}const Ur=["234,54,38","246,112,44","252,172,54","255,212,76"],fj="176,58,32",mj="198,158,52";function Zn(t,a,i){const s=t.split(",").map(Number),l=a.split(",").map(Number);return s.map((d,h)=>Math.round(d+(l[h]-d)*i)).join(",")}function io(t,a,i){const{ctx:s,w:l,h:d}=t,h=l/2,f=d/2,x=Math.min(l,d)*.39*.2*(.9+.14*Math.sin(a*1.5)),y=t.size<24,b=Pn(t.alert??0,0,1),k=(R,N)=>R+(N-R)*b,j=.85+.15*Math.sin(a*2.2);if(!y&&t.coreHalo){if(s.save(),i.glow&&b<1){s.globalAlpha=1-b;const R=s.createRadialGradient(h,f,0,h,f,x*3);R.addColorStop(0,"rgba("+i.core+",0.55)"),R.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=R,s.beginPath(),s.arc(h,f,x*3,0,6.2832),s.fill()}else if(!i.glow){const R=x*k(3.2,3),N=s.createRadialGradient(h,f,0,h,f,R);N.addColorStop(0,"rgba("+Zn(i.core,Ur[1],b)+","+k(.34,.85*j)+")"),N.addColorStop(.5,"rgba("+Zn(i.core,Ur[2],b)+","+k(.13,.42*j)+")"),N.addColorStop(1,"rgba("+Zn(i.core,Ur[3],b)+",0)"),s.fillStyle=N,s.beginPath(),s.arc(h,f,R,0,6.2832),s.fill()}s.restore()}const S=i.glow?1:.95,C=Math.max(.8,x*k(1,1.5)),_=x*.1*b;s.save(),s.filter="blur("+Math.max(.4,x*k(.22,.3)).toFixed(2)+"px)";const $=s.createRadialGradient(h-_,f-_,0,h,f,C);$.addColorStop(0,"rgba("+Zn(i.core,Ur[0],b)+","+k(S,1)+")"),$.addColorStop(.5,"rgba("+Zn(i.core,Ur[1],b)+","+k(S,1)+")"),$.addColorStop(.82,"rgba("+Zn(i.core,Ur[2],b)+","+k(S,.97)+")"),$.addColorStop(1,"rgba("+Zn(i.core,Ur[3],b)+","+k(S,.72)+")"),s.fillStyle=$,s.beginPath(),s.arc(h,f,C,0,6.2832),s.fill(),s.restore()}function o2(t,a,i){const{ctx:s,w:l,h:d}=t,h=l/2,f=d/2,v=Math.min(l,d)*.39,x=t.state!=="idle",y=[[1.35,.3],[1.05,2.4]],b=a*(x?.5:.16),k=.42,j=Math.cos(k),S=Math.sin(k),C=Math.cos(b),_=Math.sin(b),$=v*.96,R=(q,G,X)=>{const Q=q*C+X*_,ne=-q*_+X*C,te=G,ce=te*j-ne*S,ie=(te*S+ne*j+1)/2,Z=.82+.18*ie;return{x:h+Q*$*Z,y:f+ce*$*Z,d:ie}},N=(q,G,X)=>{const Q=Math.cos(q),ne=Math.sin(q)*Math.cos(G),te=Math.sin(q)*Math.sin(G);return[Q*Math.cos(X)+te*Math.sin(X),ne,-Q*Math.sin(X)+te*Math.cos(X)]};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round",s.lineJoin="round";const A=t.size>=24?64:40,M=x?.9:.3,T=A,E=5.6,z=[];for(let q=0;q<y.length;q++){const G=y[q][0],X=y[q][1],Q=ce=>{const oe=N(ce,G,X);return R(oe[0],oe[1],oe[2])},ne=q%2?1:-1,te=q*2+ne*a*M;z.push({ptOf:Q,head:te,dir:ne,hp:Q(te)})}z.sort((q,G)=>q.hp.d-G.hp.d);for(const q of z){const G=Math.max(1.2,v*.05)*(.75+.35*q.hp.d),X=.66*(.45+.55*q.hp.d);s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=G;let Q=q.ptOf(q.head);for(let ce=1;ce<=T;ce++){const oe=ce/T,ie=1-oe,Z=X*ie*ie,W=q.ptOf(q.head-q.dir*oe*E);Z>.004&&(s.strokeStyle="rgba("+i.dot+","+Z+")",s.beginPath(),s.moveTo(Q.x,Q.y),s.lineTo(W.x,W.y),s.stroke()),Q=W}s.restore();const ne=Math.max(.9,v*.062*ta(t.size)*(.65+.5*q.hp.d)),te=.45+.55*q.hp.d;if(i.glow){const ce=s.createRadialGradient(q.hp.x,q.hp.y,0,q.hp.x,q.hp.y,ne*4.5);ce.addColorStop(0,"rgba("+i.accent+","+.3*te+")"),ce.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ce,s.beginPath(),s.arc(q.hp.x,q.hp.y,ne*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,te+.1)+")",s.beginPath(),s.arc(q.hp.x,q.hp.y,ne,0,6.2832),s.fill()}io(t,a,i),s.restore()}function gj(t,a,i){const{ctx:s,w:l,h:d}=t,h=l/2,f=d/2,v=Math.min(l,d)*.39,x=t.state!=="idle",y=[v*.92],b=y.length,k=1,j=x?.9:.3,S=t.size>=24?56:36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let C=0;C<b;C++){const _=y[C],$=C%2?1:-1,R=6.2832/k,N=Math.min(5.6,R*.92);for(let A=0;A<k;A++){const M=C*2+$*a*j+A*R,T=h+Math.cos(M)*_,E=f+Math.sin(M)*_;s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=Math.max(1.2,v*.05);let z=T,q=E;for(let X=1;X<=S;X++){const Q=X/S,ne=.62*(1-Q)*(1-Q),te=M-$*Q*N,ce=h+Math.cos(te)*_,oe=f+Math.sin(te)*_;ne>.004&&(s.strokeStyle="rgba("+i.dot+","+ne+")",s.beginPath(),s.moveTo(z,q),s.lineTo(ce,oe),s.stroke()),z=ce,q=oe}s.restore();const G=Math.max(.9,v*.062*ta(t.size));if(i.glow){const X=s.createRadialGradient(T,E,0,T,E,G*4.5);X.addColorStop(0,"rgba("+i.accent+",0.3)"),X.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=X,s.beginPath(),s.arc(T,E,G*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+",1)",s.beginPath(),s.arc(T,E,G,0,6.2832),s.fill()}}io(t,a,i),s.restore()}function cf(t,a,i){const{ctx:s,w:l,h:d,dpr:h}=t,f=l/2,v=d/2,x=Math.min(l,d)*.39,y=t.state!=="idle",b=Pn(t.alert??0,0,1),k=x*.82,j=(W,H)=>Zn(i.dot,Zn(fj,mj,Pn(Math.hypot(W-f,H-v)/k,0,1)),b),S=t.size>=120,C=S?22:t.size>=32?10:t.size>=20?7:5,_=y?a*.55:a*.22,$=Math.cos(_),R=Math.sin(_),N=.42,A=Math.cos(N),M=Math.sin(N);if(s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",S&&i.glow){const W=s.createRadialGradient(f,v,0,f,v,x*1.02);W.addColorStop(0,"rgba("+i.accent+",0.10)"),W.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=W,s.beginPath(),s.arc(f,v,x*1.02,0,6.2832),s.fill()}const T=[];for(let W=0;W<C;W++){const H=1-(W+.5)/C*2,I=Math.sqrt(Math.max(0,1-H*H)),L=W*2.39996,U=Math.cos(L)*I,O=H,ee=Math.sin(L)*I,ae=U*$+ee*R,K=-U*R+ee*$,B=O*A-K*M,ue=O*M+K*A,me=(ue+1)/2,pe=.82+.18*me;T.push({x:f+ae*k*pe,y:v+B*k*pe,d:me,k:W,vec:[ae,B,ue]})}T.sort((W,H)=>W.d-H.d);const E=W=>{const H=(W[2]+1)/2,I=.82+.18*H;return{x:f+W[0]*k*I,y:v+W[1]*k*I,d:H}},z=(W,H,I)=>{let L=W[0]*H[0]+W[1]*H[1]+W[2]*H[2];L=Pn(L,-1,1);const U=Math.acos(L);if(U<.001)return[W[0],W[1],W[2]];const O=Math.sin(U),ee=Math.sin((1-I)*U)/O,ae=Math.sin(I*U)/O;return[W[0]*ee+H[0]*ae,W[1]*ee+H[1]*ae,W[2]*ee+H[2]*ae]},q={};for(const W of T)q[W.k]=W;const X=a*(y?1.4:.5),Q=Math.floor(X),ne=X-Q,te=5,ce=12;s.lineCap="round",s.lineJoin="round";const oe=[1.7,9.3,21.5,34.8,48.2],ie=Pn(Math.round(t.streamCount??(S?5:4)),0,oe.length),Z=oe.slice(0,ie).map(W=>({seed:W}));for(const W of Z){const H=L=>{const U=Math.sin(L*12.9898+W.seed)*43758.5453;return Math.floor((U-Math.floor(U))*C)},I=L=>{let U=H(L);return U===H(L-1)&&(U=(U+1)%C),q[U]};for(let L=te-1;L>=0;L--){const U=Q-L;if(U<0)continue;const O=I(U),ee=I(U+1);if(!O||!ee||O===ee)continue;const ae=L===0?ne:1,K=E(z(O.vec,ee.vec,ae)),B=(O.d+K.d)/2,ue=L===0?1:Pn(1-(L-1+ne)/(te-1),0,1),me=(i.glow?.6:.72)*ue*(.4+.6*B);if(me<.02)continue;const pe=s.createLinearGradient(O.x,O.y,K.x,K.y);pe.addColorStop(0,"rgba("+j(O.x,O.y)+",0)"),pe.addColorStop(1,"rgba("+j(K.x,K.y)+","+me+")"),s.strokeStyle=pe,s.lineWidth=(S?Math.max(1.1*h,x*.018):Math.max(1.2,x*.045))*(.7+.4*B),s.beginPath();for(let ve=0;ve<=ce;ve++){const _e=E(z(O.vec,ee.vec,ae*(ve/ce)));ve===0?s.moveTo(_e.x,_e.y):s.lineTo(_e.x,_e.y)}s.stroke()}}for(const W of T){const H=.5+.5*Math.sin(a*2-W.k*.9),I=(.18+.82*W.d)*(.62+.38*H),L=S?Math.max(.5,(.9+.9*W.d)*h*(.85+.15*H)):x*.058*ta(t.size)*(.6+.5*W.d);if(i.glow){const U=L*4,O=s.createRadialGradient(W.x,W.y,0,W.x,W.y,U);O.addColorStop(0,"rgba("+i.accent+","+.24*I+")"),O.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=O,s.beginPath(),s.arc(W.x,W.y,U,0,6.2832),s.fill()}s.fillStyle="rgba("+j(W.x,W.y)+","+(.32+.68*I)+")",s.beginPath(),s.arc(W.x,W.y,Math.max(.9,L),0,6.2832),s.fill()}if(S){const W=y?1:.4;for(let H=0;H<46;H++){const I=An(H*5.1)<.5?-1:1,L=An(H*1.7)*6.2832+a*(.3+An(H*3.1)*.6)*I*W,U=x*(.04+.05*An(H*4.7))*Math.sin(a*(.8+An(H*6)*1)+An(H*7)*6.28),O=x*(.5+An(H*2.3)*.5)+U,ee=f+Math.cos(L)*O,ae=v+Math.sin(L)*O,K=.3+.7*(.5+.5*Math.sin(a*(1.4+An(H)*2)+An(H*2)*6.28)),B=Math.max(.5,(.4+An(H*8)*1)*h*(.55+.6*K));if(i.glow){const ue=B*6,me=s.createRadialGradient(ee,ae,0,ee,ae,ue);me.addColorStop(0,"rgba("+i.accent+","+K*.18+")"),me.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=me,s.beginPath(),s.arc(ee,ae,ue,0,6.2832),s.fill()}s.fillStyle="rgba("+j(ee,ae)+","+K*(i.glow?.8:.42)+")",s.beginPath(),s.arc(ee,ae,B,0,6.2832),s.fill()}}io(t,a,i),s.restore()}function vj(t,a,i){const{ctx:s,w:l,h:d,dpr:h}=t,f=l/2,v=d/2,x=Math.min(l,d)*.39,y=t.state!=="idle",b=t.size>=32?11:7,k=x*.12,j=x*.12,S=ju(.5+.5*Math.sin(a*(y?1:.55))),C=y?.34+.66*S:.5+.12*S,_=Math.max(1*h,x*.052),$=-a*(y?.5:.16),R=Math.cos($),N=Math.sin($),A=.42,M=Math.cos(A),T=Math.sin(A);s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round";const E=x*(.52+.44*C),z=Math.max(k+_,E-j),q=[];for(let G=0;G<b;G++){const X=1-(G+.5)/b*2,Q=Math.sqrt(Math.max(0,1-X*X)),ne=G*2.39996,te=Math.cos(ne)*Q,ce=X,oe=Math.sin(ne)*Q,ie=te*R+oe*N,Z=-te*N+oe*R,W=ce*M-Z*T,I=(ce*T+Z*M+1)/2,L=.82+.18*I,U=.5+.5*Math.sin(a*1.6+G*1.3);q.push({x0:f+ie*k*L,y0:v+W*k*L,x1:f+ie*z*L,y1:v+W*z*L,cx2:f+ie*E*L,cy2:v+W*E*L,d:I,shim:U})}q.sort((G,X)=>G.d-X.d);for(const G of q){const X=(y?.4+.45*C:.6)*(.4+.6*G.d)*(.78+.22*G.shim),Q=s.createLinearGradient(G.x0,G.y0,G.x1,G.y1);Q.addColorStop(0,"rgba("+i.dot+","+X+")"),Q.addColorStop(1,"rgba("+i.accent+",0)"),s.strokeStyle=Q,s.lineWidth=_*(.7+.5*G.d),s.beginPath(),s.moveTo(G.x0,G.y0),s.lineTo(G.x1,G.y1),s.stroke();const ne=Math.max(.9,x*.058*ta(t.size)*(.85+.3*C)*(.6+.5*G.d));if(i.glow){const te=s.createRadialGradient(G.cx2,G.cy2,0,G.cx2,G.cy2,ne*5);te.addColorStop(0,"rgba("+i.accent+","+.26*X+")"),te.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=te,s.beginPath(),s.arc(G.cx2,G.cy2,ne*5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,X+.1)+")",s.beginPath(),s.arc(G.cx2,G.cy2,ne,0,6.2832),s.fill()}io(t,a,i),s.restore()}function xj(t,a,i){const{ctx:s,w:l,h:d}=t,h=l/2,f=d/2,v=Math.min(l,d)*.39,x=t.state!=="idle",y=t.size>=32?58:t.size>=20?32:18,b=v*.78,k=x?a*.5:a*.2,j=Math.cos(k),S=Math.sin(k),C=.42,_=Math.cos(C),$=Math.sin(C),R=x?1:.4,N=(E,z)=>[Math.sin(E)*Math.cos(z),Math.cos(E),Math.sin(E)*Math.sin(z)],A=[N(1.4+.5*Math.sin(a*.5*R),a*.6*R),N(1.9+.4*Math.cos(a*.4*R),-a*.5*R+2)],M=.36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";const T=[];for(let E=0;E<y;E++){const z=1-(E+.5)/y*2,q=Math.sqrt(Math.max(0,1-z*z)),G=E*2.39996,X=Math.cos(G)*q,Q=z,ne=Math.sin(G)*q;let te=0;for(const I of A){const L=X-I[0],U=Q-I[1],O=ne-I[2];te+=Math.exp(-(L*L+U*U+O*O)/(2*M*M))}te=Pn(te,0,1);const ce=X*j+ne*S,oe=-X*S+ne*j,ie=Q*_-oe*$,W=(Q*$+oe*_+1)/2,H=.82+.18*W;T.push({x:h+ce*b*H,y:f+ie*b*H,d:W,inf:te})}T.sort((E,z)=>E.d-z.d);for(const E of T){const z=ju(E.inf),q=Math.max(.6,v*(.05+.06*z)*ta(t.size)*(.55+.5*E.d)),G=(.16+.84*E.d)*(.45+.55*z),X=Math.abs(2*E.d-1),Q=Math.atan2(E.y-f,E.x-h);s.fillStyle="rgba("+i.dot+","+G+")",s.beginPath(),s.ellipse(E.x,E.y,Math.max(.35,q*X),q,Q,0,6.2832),s.fill()}io(t,a,i),s.restore()}function yj(t,a,i){const{ctx:s,w:l,h:d}=t,h=l/2,f=d/2,v=Math.min(l,d)*.39,x=t.state!=="idle",y=t.size>=32?8:t.size>=20?6:5,b=v*.9,k=x?1:.4,j=a*(x?.3:.12),S=a*1*k,C=-a*.7*k+2.2,_=.72,$=(R,N)=>{const A=((R-N+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(A)};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let R=0;R<y;R++){const N=R/y*6.2832+j;let A=Math.exp(-($(N,S)**2)/(2*_*_))+Math.exp(-($(N,C)**2)/(2*_*_));A=Pn(A,0,1);const M=ju(A),T=h+Math.cos(N)*b,E=f+Math.sin(N)*b,z=Math.max(.6,v*(.05+.07*M)*ta(t.size)),q=.38+.62*M;if(i.glow&&M>.25){const G=s.createRadialGradient(T,E,0,T,E,z*4);G.addColorStop(0,"rgba("+i.accent+","+.24*M+")"),G.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=G,s.beginPath(),s.arc(T,E,z*4,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+q+")",s.beginPath(),s.arc(T,E,z,0,6.2832),s.fill()}io(t,a,i),s.restore()}function wj(t,a,i){io(t,a,i)}const bj={orbit:o2,orbit2d:gj,circle:cf,lines:vj,magnetic:xj,magnetic2d:yj,pulse:wj,bands:cf};function ct({mark:t="orbit",size:a=16,tone:i="auto",state:s="active",motionSpeed:l=1,accent:d="#96B9FF",color:h,coreHalo:f=!0,coreGradient:v=!1,streamCount:x,className:y,"aria-label":b}){const k=g.useRef(null),j=uj(),S=g.useRef(0),C=g.useRef(0);return C.current=v?1:0,g.useEffect(()=>{const _=k.current;if(!_)return;const $=_.getContext("2d");if(!$)return;const R=Math.min(2,window.devicePixelRatio||1),N=Math.max(2,Math.round(a*R)),A=N;_.width=N,_.height=A;const M={ctx:$,w:N,h:A,dpr:R,size:a,state:s,coreHalo:f,alert:S.current,streamCount:x},T=i==="auto"?hj(lf($,_,"var(--color-bg-primary)"))<.5?"dark":"light":i,E=pj(T,Qd(d));if(h){const te=lf($,_,h);E.dot=te,E.core=te}const z=bj[t]??o2,q=te=>{S.current+=(C.current-S.current)*.06,Math.abs(S.current-C.current)<.001&&(S.current=C.current),M.alert=S.current,$.clearRect(0,0,N,A),z(M,s==="static"?.62:te,E)},G=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),X=Pn(l,.4,3);if((G||s==="static")&&(S.current=C.current),q(1.15),G||s==="static")return;let Q=0;const ne=te=>{q(te/1e3*X),Q=requestAnimationFrame(ne)};return Q=requestAnimationFrame(ne),()=>cancelAnimationFrame(Q)},[t,a,i,s,l,d,h,f,v,x,j]),r.jsx("canvas",{ref:k,width:a,height:a,style:{width:a,height:a,display:"block",flexShrink:0},className:y,role:"img","aria-label":b})}const Ko={high:0,medium:1,low:2,none:3};m.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function pl(t){return t.status==="resolved"||t.status==="auto_resolved"||t.status==="workflow_available"?"green":t.status==="analyzing"?"slate":t.status==="in_progress"||t.status==="monitoring"?"blue":t.severity==="high"?"orange":"slate"}m.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;function kj(t,a){if(a)return"Ultron is replying…";switch(t){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const a2=t=>t.status==="workflow_available"||t.status==="resolved"&&t.workflowOpportunity!=null,i2=t=>/^(review|adjust|revisit|update)\b/i.test(t),_j=["Revisit","Update","Resolve"],Cj=t=>/,|\sand\s/.test(t),jj="Approve all",Gs="Yes",s2=t=>{const i=t.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(s=>s.trim()).filter(Boolean);return i.length<2?[]:i.map(s=>s.charAt(0).toUpperCase()+s.slice(1))};m.section`
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
`;function Sj({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function Nj({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function Mj({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function Lj({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function Rj({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function $j({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),r.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),r.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Ds({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function Tj({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Aj({size:t=16}){return r.jsxs("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Ij({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function ro({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function Ej({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function Pj({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function zj({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function df({size:t=16}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}const wd=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],Zo={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},l2={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function c2(t){const a=l2[t];return a?[a.role,a.shiftTime,a.location].filter(Boolean).join(" · "):""}function d2(t){const a=Zo[t.id];if(!a||t.title.startsWith(a))return t.title;const i=t.title.split(" ")[0]??"",l=i===i.toUpperCase()?t.title:t.title.charAt(0).toLowerCase()+t.title.slice(1);return`${a} ${l}`}const u2={missed_clockin_james:"james_okoro_2"},Su=t=>`https://i.pravatar.cc/80?u=${u2[t]??t}`,na=t=>`https://i.pravatar.cc/80?u=${u2[t]??t}`,Oj={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},Dj=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],h2=t=>Oj[t]??Dj,p2={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},uf={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reaching out to Carl Jensen…","Reaching out to Tina Boyd…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20,tools:["engage"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0,tools:["engage"]},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reaching out to Gina Holt…","Reaching out to Renata Cruz…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["task","engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},Nu={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},Bj={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},Mu={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},Fj={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},Wj={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},bd={detected:t=>t.event,assessment:t=>t.assessment,recommendation:t=>t.recommendation,approval:t=>t.recommendation,execution:t=>t.recommendation,resolution:t=>t.outcome??t.recommendation,monitoring:t=>t.assessment,workflow:t=>t.workflowOpportunity??t.recommendation};function f2(t){const a=i=>i.trim().replace(/[.\s]+$/,"").toLowerCase();return Fj[t.id]??t.timeline.map(i=>{var d;const s=((d=bd[i.state])==null?void 0:d.call(bd,t))??t.assessment,l=s!=null&&a(s)===a(i.headline);return{icon:Wj[i.state]??"clock",headline:i.headline,blocks:s&&!l?[{text:s}]:void 0}})}const bt=(t,a,i)=>({name:t,match:a,distance:i}),Ee=(t,a,i,s,l,d)=>({seed:t,name:a,preview:i,status:s,tone:l,...d?{conversation:d}:{}}),hf=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],Hj=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],Uj=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],qj=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],m2="An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",qr=t=>({from:"ultron",text:m2,time:t}),Vj={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:hf,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[bt("Jordan Pierce","4.9 match","3.2 mi"),bt("Aisha Karim","4.7 match","5.1 mi"),bt("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:m2,total:20,threads:[Ee("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive",[qr("1:52 PM"),{from:"them",text:"Yes — I can take the 2pm.",time:"1:54 PM"},{from:"ultron",text:"You’re confirmed for the 2:00 PM ICU shift at Riverside. Check in at the 3rd-floor ICU desk for handoff.",time:"1:54 PM"},{from:"them",text:"On my way. Thanks!",time:"1:55 PM"}]),Ee("priya_nguyen","Priya Nguyen","“Count me in — confirming now.”","Interested","positive",[qr("1:52 PM"),{from:"them",text:"Count me in — confirming now.",time:"1:57 PM"},{from:"ultron",text:"Great — you’re first backup if the 2pm falls through. I’ll ping you the moment another opens.",time:"1:57 PM"},{from:"them",text:"Sounds good.",time:"1:58 PM"}]),Ee("jordan_pierce","Jordan Pierce","“Is this the full ICU wing?”","Chatting","chatting",[qr("1:52 PM"),{from:"them",text:"Is this the full ICU wing or step-down?",time:"1:56 PM"},{from:"ultron",text:"Full ICU wing — 12-hour shift, 2:00 PM start.",time:"1:56 PM"},{from:"them",text:"Checking my childcare, give me a few.",time:"1:59 PM"}]),Ee("marcus_lewis","Marcus Lewis","“Any flex on the start? Could do 2:30.”","Chatting","chatting",[qr("1:52 PM"),{from:"them",text:"Any flex on the start? Could do 2:30.",time:"1:55 PM"},{from:"ultron",text:"Start is fixed at 2:00 for handoff, but I can flag you first for the next opening.",time:"1:55 PM"},{from:"them",text:"Ok — let me see if I can make 2.",time:"1:58 PM"}]),Ee("lena_reyes","Lena Reyes","“What’s the rate on this one?”","Chatting","chatting",[qr("1:52 PM"),{from:"them",text:"What’s the rate on this one?",time:"1:53 PM"},{from:"ultron",text:"$68/hr with the ICU differential included.",time:"1:53 PM"},{from:"them",text:"Tempting — give me an hour to sort a ride.",time:"1:57 PM"}]),Ee("omar_mori","Omar Mori","“Is parking validated?”","Chatting","chatting",[qr("1:52 PM"),{from:"them",text:"Is parking validated at Riverside?",time:"1:54 PM"},{from:"ultron",text:"Yes — validated parking in the north garage.",time:"1:54 PM"},{from:"them",text:"Good to know. Still deciding.",time:"1:56 PM"}]),Ee("devon_diaz","Devon Diaz","“Might be a few min late.”","Chatting","chatting",[qr("1:52 PM"),{from:"them",text:"I’m on shift til 1 — might be a few min late.",time:"1:55 PM"},{from:"ultron",text:"A few minutes is fine if you make handoff by 2:15. Want me to hold it?",time:"1:55 PM"},{from:"them",text:"Yeah, hold it — I’ll confirm by 1:30.",time:"1:59 PM"}])]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:Hj,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[bt("Renee Wallace","4.9 match","2.4 mi"),bt("Carl Jensen","4.6 match","4.1 mi"),bt("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[Ee("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),Ee("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),Ee("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:Uj,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[bt("Dane Mercer","4.8 match","2.1 mi"),bt("Omar Reyes","4.6 match","3.7 mi"),bt("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[Ee("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),Ee("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),Ee("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:qj,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[bt("Jamal Carter","4.7 match","1.8 mi"),bt("Sara Lindqvist","4.6 match","2.9 mi"),bt("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[Ee("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),Ee("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),Ee("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[bt("Theo Park","4.7 match","1.9 mi"),bt("Gina Holt","4.5 match","3.3 mi"),bt("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[Ee("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[Ee("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),Ee("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),Ee("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[bt("Carl Jensen","4.7 match","2.6 mi"),bt("Tina Boyd","4.5 match","3.9 mi"),bt("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[Ee("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),Ee("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),Ee("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[Ee("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]},task:{description:"Created the CPR renewal task on Nadia’s profile",query:'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task',fields:[{label:"Task",value:"Renew CPR certification"},{label:"Assignee",value:"Nadia Haddad"},{label:"Step",value:"Upload the updated cert"},{label:"Due",value:"Before next gated shift · Thu 7:00 AM"},{label:"Status",value:"Assigned",emphasis:"success-tag"}]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[Ee("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[Ee("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[Ee("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[Ee("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[Ee("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[Ee("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[Ee("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[Ee("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),Ee("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),Ee("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:hf,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[Ee("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),Ee("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},Gj={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},Yj=t=>/in-app/i.test(t)?"in_app":/sms/i.test(t)?"sms":"auto",pf=t=>/in-app/i.test(t)?"In-app":/sms/i.test(t)?"SMS":"Preferred channel",ff=t=>t.split(/\s*\+\s*/).map(a=>a.replace(/\b\w/g,i=>i.toUpperCase())).join(", "),Qj={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},Kd=t=>{const[a,...i]=t.split(" "),s=Qj[a];return s?`Will ${s} ${i.join(" ")}`:t};function Kj(t,a){if(t==="policy"&&a.policy){const l=a.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:l?`Run the shift against ${a.policy.policiesTotal} active scheduling policies and return the ${l.total} ${l.unit}, ranked by match.`:`Run the case against ${a.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const i=t==="engage"?a.engage:t==="engage-offer"?a.engageOffer:void 0;if(i)return{query:`engage.send(channel="${Yj(i.name)}", template="shift_offer", to=matched)`,summary:`${Kd(i.description)} — ${i.total} ${i.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const s=t==="notify"?a.notify:t==="notify-scheduler"?a.notifyScheduler:void 0;return s?{query:`engage.notify(to="${s.name}", via="${s.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${Kd(s.description)} (${s.name} · ${s.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function Zj(t,a,i,s){var j,S,C,_;if(t==="read"){const $=((j=a.update)==null?void 0:j.recordType)??((S=a.updateClose)==null?void 0:S.recordType);if(!$)return null;const R=$.toLowerCase(),N=[{label:"Type",value:$},{label:"Time",value:((C=l2[s])==null?void 0:C.shiftTime)??""},{label:"User",value:Zo[s]??""},{label:"Clock in",value:""}];return{icon:"read",name:`Read data: ${$}`,description:`Pulled the current ${R} record before planning`,query:`read_data(record="${$}") → current_state`,recordDetails:N,summary:`Read the ${R}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`}}if(t==="match"||t==="credential"||t==="incentive"){const $=(_=a.policy)==null?void 0:_.eligible;if(!$)return null;const R=$.unit.replace(/^eligible\s+/i,"");if(t==="match")return{icon:"search",name:"Match Engine",description:`Ranked qualified ${R} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${$.total} ${$.unit}.`};if(t==="credential")return{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."};const N=$.total>=10;return{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${$.total}) → suggestion`,summary:N?"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached.":"Compared against recent last-minute fills — the pool is thin at this notice, so a bonus is recommended to secure the fill.",recommendation:N?{add:!1,amount:"No bonus",rationale:`${$.total} qualified ${R} available — deep enough to fill without an incentive.`}:{add:!0,amount:"$150 / shift",rationale:`Only ${$.total} qualified ${R} available this close to start — a bonus improves the odds of a confirmed fill.`}}}if(t==="task"){if(!a.task)return null;const{description:$,query:R,fields:N}=a.task;return{icon:"task",name:"Tasks",description:$,query:R,task:{fields:N}}}if(t==="update"||t==="update-close"){const $=t==="update"?a.update:a.updateClose;if(!$)return null;const{description:R,...N}=$;return{icon:"record",name:"Update Data",description:R,updateData:N}}const l=t==="notify"||t==="notify-scheduler",d=t==="notify"?a.notify:t==="notify-scheduler"?a.notifyScheduler:void 0,h=t==="engage"?a.engage:t==="engage-offer"?a.engageOffer:void 0;if(!(t==="policy"&&a.policy||!!h||!!d))return null;const v=t==="policy"?"Policy Engine":l?"Engage: Notification":h.name,x=t==="policy"?a.policy.description:l?d.description:h.description,y=t==="policy"?"shield":l?"bell":"message";if(i==="planning"){const $=t==="policy"?x:Kd(x),R={icon:y,name:v,description:$,...Kj(t,a)};return l?{...R,channel:ff(d.channel),message:d.message}:h?{...R,channel:pf(h.name),message:h.message}:t==="policy"?{...R,policies:{total:a.policy.policiesTotal,items:a.policy.policies}}:R}if(t==="policy")return{icon:y,name:v,description:x,policies:{total:a.policy.policiesTotal,items:a.policy.policies},eligible:a.policy.eligible};if(h)return{icon:y,name:v,description:x,channel:pf(h.name),message:h.message,threads:{total:h.total,moreNoun:"threads",items:h.threads}};const{description:b,...k}=d;return{icon:y,name:v,description:x,channel:ff(d.channel),notification:k}}function g2(t,a,i="execution"){const s=Vj[t];return s?a.map(l=>Zj(l,s,i,t)).filter(l=>l!==null):[]}const Xj=t=>t.tools??Gj[t.icon]??["policy"],Rs=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function Jj(t){return{id:`detected_${t.id}`,name:t.name,title:t.title,capability:t.capability,status:"analyzing",severity:t.severity??"high",event:t.title.endsWith(".")?t.title:`${t.title}.`,assessment:t.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:t.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:t.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const v2={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},mf=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function Lu(t,a){return mf[a%mf.length]}function eS(t){return t===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function tS(t){return t>=90?"green":t>=80?"blue":t>=70?"orange":"slate"}function x2({record:t}){const a=t.meta.find(l=>/^\d+%\s*match$/i.test(l)),i=a?parseInt(a,10):null,s=a?t.meta.filter(l=>l!==a):t.meta;return r.jsxs(nS,{children:[r.jsx(jn,{size:"md",src:Su(t.avatarSeed),name:t.title,alt:t.title}),r.jsxs(rS,{children:[r.jsx(oS,{children:t.title}),r.jsx(aS,{children:[t.eyebrow,...s].join(" · ")})]}),i!=null&&r.jsxs(iS,{"data-tone":tS(i),children:[i,"% match"]}),r.jsx(Re,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:r.jsx(su,{size:16})})]})}const nS=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,rS=m.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,oS=m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,aS=m.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,iS=m.span`
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
`,gf=t=>t.id.startsWith("detected_"),vf=5400,xf=1100;function sS(t,a){switch(a.type){case"detect":return t.some(i=>i.id===a.thread.id)?t:[a.thread,...t];case"decide":return t.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"commit":return t.map(i=>i.id===a.threadId?{...i,status:"in_progress"}:i);case"reopen":return t.map(i=>i.id===a.threadId?{...i,status:"needs_approval"}:i);case"resolve":return t.map(i=>i.id===a.threadId?{...i,status:"resolved",outcome:v2[i.id]??i.outcome}:i)}}const lS=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function cS(){const[t,a]=g.useReducer(sS,wd),[i,s]=g.useState(()=>{var U;const L=wd.find(O=>O.status==="needs_approval"||O.status==="recommended");return(L==null?void 0:L.id)??((U=wd[0])==null?void 0:U.id)??null}),[l,d]=g.useState([]),h=L=>{s(L),d(U=>U.includes(L)?U:[...U,L])},f=g.useMemo(()=>{const L=t.map((U,O)=>({item:U,index:O}));return lS.map(U=>({id:U.id,label:U.label,threads:L.filter(O=>U.statuses.includes(O.item.status)).sort((O,ee)=>(O.item.status==="analyzing"?1:0)-(ee.item.status==="analyzing"?1:0)||(gf(ee.item)?1:0)-(gf(O.item)?1:0)||Ko[O.item.severity]-Ko[ee.item.severity]||O.index-ee.index).map(O=>O.item)}))},[t]),v=t.find(L=>L.id===i)??null,[x,y]=g.useState({}),b=i?x[i]??0:0,[k,j]=g.useState([]),[S,C]=g.useState({}),[_,$]=g.useState({}),[R,N]=g.useState([]),A=g.useRef({}),[M,T]=g.useState([]),E=L=>{T(U=>U.includes(L)?U.filter(O=>O!==L):[...U,L])},[z,q]=g.useState([]),G=L=>{q(U=>U.includes(L)?U:[...U,L])},[X,Q]=g.useState([]);return{threads:t,groups:f,selectedId:i,selectedThread:v,selectedStage:b,stageById:x,viewedIds:l,analyzedIds:k,outboundByThread:S,chatByThread:_,replyingIds:R,setSelectedId:h,detectRisk:L=>{a({type:"detect",thread:Jj(L)})},decide:L=>{h(L),j(U=>U.includes(L)?U:[...U,L]),a({type:"decide",threadId:L})},commit:(L,U)=>{h(L),C(O=>({...O,[L]:[...O[L]??[],U]})),a({type:"commit",threadId:L})},completeRun:L=>{const U=x[L]??0,O=Nu[L];U===0&&O?(y(ee=>({...ee,[L]:1})),a({type:"reopen",threadId:L})):(a({type:"resolve",threadId:L}),M.includes(L)&&(G(L),T(ee=>ee.filter(ae=>ae!==L))))},sendMessage:(L,U)=>{const O=U.trim();if(!O)return;h(L),$(ae=>({...ae,[L]:[...ae[L]??[],{role:"operator",text:O}]})),N(ae=>ae.includes(L)?ae:[...ae,L]);const ee=window.setTimeout(()=>{$(ae=>{const K=ae[L]??[],B=K.filter(ue=>ue.role==="ultron").length;return{...ae,[L]:[...K,{role:"ultron",text:Lu(O,B)}]}}),N(ae=>ae.filter(K=>K!==L)),delete A.current[L]},xf);A.current[L]=ee},stopReply:L=>{const U=A.current[L];U&&(window.clearTimeout(U),delete A.current[L]),N(O=>O.filter(ee=>ee!==L))},refine:L=>{},saveWorkflow:L=>{const U=L.id;h(U),$(ee=>({...ee,[U]:[...ee[U]??[],{role:"operator",text:"Save as workflow"}]})),N(ee=>ee.includes(U)?ee:[...ee,U]);const O=window.setTimeout(()=>{$(ee=>({...ee,[U]:[...ee[U]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),G(U),N(ee=>ee.filter(ae=>ae!==U)),delete A.current[U]},xf);A.current[U]=O},pendingWorkflowIds:M,toggleWorkflowSave:E,savedWorkflowIds:z,markWorkflowSaved:G,revealedNewIds:X,revealNew:L=>Q(U=>U.includes(L)?U:[...U,L])}}const dS={"Acknowledge her":{working:"Acknowledging her",done:"Acknowledged her"},"Add the line item":{working:"Adding the line item",done:"Added the line item"},"Approve Thursday":{working:"Approving Thursday",done:"Approved Thursday"},"Approve for payroll":{working:"Approving for payroll",done:"Approved for payroll"},"Assign a renewal task":{working:"Assigning a renewal task",done:"Assigned a renewal task"},"Assign intake tasks":{working:"Assigning intake tasks",done:"Assigned intake tasks"},"Await his reply":{working:"Awaiting his reply",done:"Got his reply"},"Chase the unconfirmed":{working:"Chasing the unconfirmed",done:"Chased the unconfirmed"},"Claim shift":{working:"Claiming shift",done:"Claimed shift"},"Close the invoice":{working:"Closing the invoice",done:"Closed the invoice"},"Collect confirmations":{working:"Collecting confirmations",done:"Collected confirmations"},"Confirm Sarah Quinn":{working:"Confirming Sarah Quinn",done:"Confirmed Sarah Quinn"},"Confirm alerts":{working:"Confirming alerts",done:"Confirmed alerts"},"Confirm the punch":{working:"Confirming the punch",done:"Confirmed the punch"},"File as a CPR cert":{working:"Filing as a CPR cert",done:"Filed as a CPR cert"},"Fill shift":{working:"Filling shift",done:"Filled shift"},"Fill the Wed shift":{working:"Filling the Wed shift",done:"Filled the Wed shift"},"Flag the 3 shifts at-risk":{working:"Flagging the 3 shifts at-risk",done:"Flagged the 3 shifts at-risk"},"Flag the at-risk shifts":{working:"Flagging the at-risk shifts",done:"Flagged the at-risk shifts"},"Flag the renewal":{working:"Flagging the renewal",done:"Flagged the renewal"},"Follow up":{working:"Following up",done:"Followed up"},"Hold Friday for you":{working:"Holding Friday for you",done:"Held Friday for you"},"Hold for payroll":{working:"Holding for payroll",done:"Held for payroll"},"Invite the top 40 matches":{working:"Inviting the top 40 matches",done:"Invited the top 40 matches"},"Keep standby list":{working:"Keeping standby list",done:"Kept standby list"},"Line up backfills":{working:"Lining up backfills",done:"Lined up backfills"},"Mark Priya qualified":{working:"Marking Priya qualified",done:"Marked Priya qualified"},"Mark the credential verified":{working:"Marking the credential verified",done:"Marked the credential verified"},"Message the best matches":{working:"Messaging the best matches",done:"Messaged the best matches"},"Message the top replacements":{working:"Messaging the top replacements",done:"Messaged the top replacements"},"Message workers to confirm":{working:"Messaging workers to confirm",done:"Messaged workers to confirm"},"Move to the recruiter queue":{working:"Moving to the recruiter queue",done:"Moved to the recruiter queue"},"Notify Sofia":{working:"Notifying Sofia",done:"Notified Sofia"},"Notify scheduler":{working:"Notifying scheduler",done:"Notified scheduler"},"Notify scheduling":{working:"Notifying scheduling",done:"Notified scheduling"},"Notify the location manager":{working:"Notifying the location manager",done:"Notified the location manager"},"Offer to the top matches":{working:"Offering to the top matches",done:"Offered to the top matches"},"Publish the report":{working:"Publishing the report",done:"Published the report"},"Queue readiness summary":{working:"Queueing readiness summary",done:"Queued readiness summary"},"Recalculate the total":{working:"Recalculating the total",done:"Recalculated the total"},"Reconcile the payment":{working:"Reconciling the payment",done:"Reconciled the payment"},"Record the release":{working:"Recording the release",done:"Recorded the release"},"Save draft":{working:"Saving draft",done:"Saved draft"},"Send Luis a welcome":{working:"Sending Luis a welcome",done:"Sent Luis a welcome"},"Send a verification ping":{working:"Sending a verification ping",done:"Sent a verification ping"},"Send a warm intro":{working:"Sending a warm intro",done:"Sent a warm intro"},"Send the birthday note":{working:"Sending the birthday note",done:"Sent the birthday note"},"Text Bianca":{working:"Texting Bianca",done:"Texted Bianca"},"Text James":{working:"Texting James",done:"Texted James"},"Track claims":{working:"Tracking claims",done:"Tracked claims"},"Track responses":{working:"Tracking responses",done:"Tracked responses"},"Update ledger":{working:"Updating ledger",done:"Updated ledger"},"Update the contact":{working:"Updating the contact",done:"Updated the contact"},"Update the roster":{working:"Updating the roster",done:"Updated the roster"},"Update the timesheet":{working:"Updating the timesheet",done:"Updated the timesheet"}};function uS(t,a){const i=dS[t];return!i||a==="plan"?t:a==="done"?i.done:i.working}const hS={search:Fs,read:Fs,message:Us,policy:Yr,shield:Yr,schedule:Yr,analytics:e9,clock:On,monitor:ol,bell:Us,record:Wo,task:Yr},pS={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},fS=t=>t.updateData?`Update Data: ${t.updateData.recordType}`:pS[t.icon]??t.name,mS=t=>t.tone==="positive"?"success":t.tone==="chatting"?"info":"neutral",yf={positive:0,chatting:1,muted:2},gS=m(dm)`
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
`,vS=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,Ru=240;function xS({open:t,onClose:a,title:i="Run details",usage:s}){const[l,d]=g.useState(()=>s.length?"0":""),[h,f]=g.useState(t),[v,x]=g.useState(!1);if(g.useEffect(()=>{if(t){f(!0);let S=0;const C=requestAnimationFrame(()=>{S=requestAnimationFrame(()=>x(!0))});return()=>{cancelAnimationFrame(C),cancelAnimationFrame(S)}}x(!1);const j=setTimeout(()=>f(!1),Ru);return()=>clearTimeout(j)},[t]),!h)return null;const y=s.length,b=`${y} ${y===1?"tool":"tools"} used · tap any to see its query and results`,k=s.map((j,S)=>({entry:j,index:S}));return Js.createPortal(r.jsxs(LS,{role:"dialog","aria-modal":"true","aria-label":i,children:[r.jsx(RS,{$shown:v,onClick:a}),r.jsxs($S,{$shown:v,children:[r.jsxs(TS,{children:[r.jsxs(AS,{children:[r.jsx(IS,{children:i}),r.jsx(ES,{children:b})]}),r.jsx(Re,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:a,children:r.jsx(gu,{size:18})})]}),r.jsxs(PS,{children:[r.jsx(zS,{"aria-hidden":"true"}),r.jsx(cm,{type:"single",collapsible:!0,value:l,onValueChange:j=>d(typeof j=="string"?j:""),children:k.map(({entry:j,index:S})=>{const C=j.updateData?J0:hS[j.icon];return r.jsx(gS,{value:String(S),label:fS(j),description:j.description,leadingSlot:r.jsx(vS,{"aria-hidden":"true",children:r.jsx(C,{size:18})}),children:r.jsx(OS,{children:r.jsx(yS,{entry:j})})},S)})})]})]})]}),document.body)}function yS({entry:t}){return r.jsxs(r.Fragment,{children:[t.channel&&r.jsxs(nn,{children:[r.jsx(Ot,{children:"Channel"}),r.jsx(Cf,{children:t.channel})]}),t.message&&r.jsxs(nn,{children:[r.jsx(Ot,{children:"Message"}),r.jsx(bf,{children:t.message})]}),t.recordDetails&&r.jsxs(nn,{children:[r.jsx(Ot,{children:"Record details"}),r.jsx(kd,{children:t.recordDetails.map((a,i)=>r.jsx(rn,{size:"sm",label:a.label,trailingSlot:r.jsx(_d,{$success:a.emphasis==="success",$placeholder:!a.value,children:a.value||"???"})},i))})]}),t.policies&&r.jsxs(nn,{children:[r.jsx(Ot,{children:`Policies evaluated · ${t.policies.total}`}),r.jsx(ZS,{children:t.policies.items.map((a,i)=>r.jsxs(XS,{children:[r.jsx(JS,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})}),r.jsx("span",{children:a})]},i))})]}),t.eligible&&r.jsxs(nn,{children:[r.jsx(Ot,{children:`Returned · ${t.eligible.total} ${t.eligible.unit}`}),r.jsx(wS,{candidates:t.eligible.items,total:t.eligible.total,moreNoun:t.eligible.moreNoun})]}),t.threads&&r.jsxs(nn,{children:[r.jsx(Ot,{children:`Threads · ${t.threads.total}`}),r.jsx(SS,{threads:t.threads})]}),t.notification&&r.jsxs(r.Fragment,{children:[r.jsxs(nn,{children:[r.jsx(Ot,{children:"Recipient"}),r.jsx(eN,{children:r.jsx(rn,{size:"md",divider:!1,leadingSlot:r.jsx(jn,{size:"sm",src:na(t.notification.seed),name:t.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:t.notification.name,description:t.notification.role,trailingSlot:r.jsx(Re,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${t.notification.name}'s profile`,children:r.jsx(al,{size:14})})})})]}),r.jsxs(nn,{children:[r.jsx(Ot,{children:"Message"}),r.jsx(bf,{children:t.notification.message})]})]}),t.task&&r.jsxs(nn,{children:[r.jsx(Ot,{children:"Task"}),r.jsx(kd,{children:t.task.fields.map((a,i)=>r.jsx(rn,{size:"sm",label:a.label,trailingSlot:a.emphasis==="success-tag"?r.jsx(ei,{status:"success",size:"sm",children:a.value}):r.jsx(_d,{$success:a.emphasis==="success",$placeholder:!a.value,children:a.value||"???"})},i))})]}),t.updateData&&r.jsxs(nn,{children:[r.jsx(Ot,{children:"Record details"}),(t.updateData.groups??[t.updateData.fields??[]]).map((a,i)=>r.jsx(kd,{children:a.map((s,l)=>r.jsx(rn,{size:"sm",label:s.label,trailingSlot:s.emphasis==="change"&&s.previousValue?r.jsxs(bS,{children:[r.jsx(kS,{children:s.previousValue}),r.jsx(_S,{"aria-hidden":"true",children:"→"}),r.jsx(CS,{children:s.value})]}):s.emphasis==="success-tag"?r.jsx(ei,{status:"success",size:"sm",children:s.value}):r.jsx(_d,{$success:s.emphasis==="success",$placeholder:!s.value,children:s.value||"???"})},l))},i))]}),t.recommendation&&r.jsxs(nn,{children:[r.jsx(Ot,{children:"Recommendation"}),r.jsxs(tN,{children:[r.jsxs(kf,{children:[r.jsx(_f,{children:"Incentive?"}),r.jsx(nN,{$add:t.recommendation.add,children:t.recommendation.add?t.recommendation.amount:"No bonus"})]}),r.jsxs(kf,{children:[r.jsx(_f,{children:"Reason"}),r.jsx(rN,{children:t.recommendation.rationale})]})]})]}),t.query&&r.jsxs(nn,{children:[r.jsx(Ot,{children:"Query"}),r.jsx(DS,{children:t.query})]}),t.summary&&r.jsxs(nn,{children:[r.jsx(Ot,{children:"What it does"}),r.jsx(Cf,{children:t.summary})]})]})}function wS({candidates:t,total:a,moreNoun:i}){var y;const[s,l]=g.useState(!1),d=t.slice(0,3),h=a-d.length,f=parseFloat(((y=d[d.length-1])==null?void 0:y.match)??"4.5"),v=s?Array.from({length:h},(b,k)=>jS(k,f)):[],x=[...d,...v];return r.jsxs(r.Fragment,{children:[r.jsx($u,{children:x.map((b,k)=>r.jsx(rn,{size:"sm",leadingSlot:r.jsx(jn,{size:"sm",src:na(b.name),name:b.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:b.name,trailingSlot:r.jsx(WS,{children:`${b.match} · ${b.distance}`})},k))}),h>0&&r.jsx(y2,{type:"button",onClick:()=>l(b=>!b),"aria-expanded":s,children:s?`Show fewer ${i}`:`+${h} more ${i}`})]})}const $u=m.div`
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
`,kd=m($u)`
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
`,_d=m.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${t=>t.$placeholder?"var(--color-content-disabled)":t.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,bS=m.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,kS=m.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,_S=m.span`
  color: var(--color-content-tertiary);
`,CS=m.span`
  color: var(--color-success-content);
`,Ys=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],Qs=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function jS(t,a){const i=Ys[t%Ys.length],s=Qs[(t*7+3)%Qs.length],l=Math.max(3,a-(t+1)*.1),d=(4+t*13%90/10).toFixed(1);return{name:`${i} ${s}`,match:`${l.toFixed(1)} match`,distance:`${d} mi`}}const wf=3;function SS({threads:t}){const[a,i]=g.useState(!1),[s,l]=g.useState(null),d=[...t.items].sort((y,b)=>yf[y.tone]-yf[b.tone]),h=Math.max(0,t.total-d.length),f=[...d,...Array.from({length:h},(y,b)=>MS(b))],v=a?f:f.slice(0,wf),x=f.length-wf;return r.jsxs(r.Fragment,{children:[r.jsx($u,{children:v.map((y,b)=>{var C;const k=!!((C=y.conversation)!=null&&C.length),j=`${y.name}-${b}`,S=k&&s===j;return r.jsxs(HS,{"data-open":S||void 0,children:[r.jsx(rn,{size:"md",interactive:k,onClick:k?()=>l(S?null:j):void 0,"aria-expanded":k?S:void 0,leadingSlot:r.jsx(jn,{size:"sm",src:na(y.seed),name:y.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:y.name,description:y.preview,trailingSlot:r.jsxs(KS,{children:[r.jsx(ei,{status:mS(y),size:"sm",children:y.status}),k?r.jsx(US,{"data-open":S||void 0,children:r.jsx(Xn,{size:16})}):r.jsx(on,{size:16})]})}),S&&r.jsx(NS,{messages:y.conversation})]},j)})}),x>0&&r.jsx(y2,{type:"button",onClick:()=>i(y=>!y),"aria-expanded":a,children:a?`Show fewer ${t.moreNoun}`:`+${x} more ${t.moreNoun}`})]})}function NS({messages:t}){return r.jsx(VS,{children:t.map((a,i)=>r.jsxs(GS,{$from:a.from,children:[r.jsx(YS,{children:a.text}),r.jsx(QS,{children:a.time})]},i))})}function MS(t){const a=Ys[t%Ys.length],i=Qs[(t*7+3)%Qs.length],s=`${a} ${i}`;return{seed:s,name:s,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const LS=m.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,RS=m.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${t=>t.$shown?.45:0};
  transition: opacity ${Ru}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,$S=m.div`
  position: relative;
  width: min(460px, 92vw);
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
  border-left: 1px solid var(--color-border-opaque);
  box-shadow: var(--shadow-below-high);
  /* Slides in from the right edge on open, back out on close. */
  transform: translateX(${t=>t.$shown?"0":"100%"});
  transition: transform ${Ru}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; transform: none; }
`,TS=m.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,AS=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,IS=m.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,ES=m.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,PS=m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,zS=m.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,OS=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,nn=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;function DS({children:t}){const[a,i]=g.useState(!1),s=()=>{var l;(l=navigator.clipboard)==null||l.writeText(t),i(!0),window.setTimeout(()=>i(!1),1600)};return r.jsxs(BS,{children:[r.jsx(FS,{children:t}),r.jsx(Re,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":a?"Copied":"Copy query",onClick:s,children:a?r.jsx(Dt,{size:14}):r.jsx(Z0,{size:14})})]})}const BS=m.div`
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
`,FS=m.pre`
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
`,WS=m.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,HS=m.div``,US=m.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-fast) var(--ease-default);

  &[data-open] {
    transform: rotate(180deg);
    color: var(--color-content-tertiary);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,qS=Ne`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`,VS=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3) var(--space-3);
  animation: ${qS} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,GS=m.div`
  max-width: 80%;
  align-self: ${t=>t.$from==="them"?"flex-start":"flex-end"};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: ${t=>t.$from==="them"?"var(--color-bg-secondary)":"var(--color-info-fill)"};
  color: ${t=>t.$from==="them"?"var(--color-content-primary)":"var(--color-content-inverse)"};
  /* Squared-off tail corner on the side the bubble is anchored to. */
  border-bottom-${t=>t.$from==="them"?"left":"right"}-radius: var(--radius-xs);
`,YS=m.div`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
`,QS=m.div`
  margin-top: 2px;
  font-size: 10px;
  line-height: 1;
  opacity: 0.65;
  text-align: right;
`,KS=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,y2=m.button`
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
`,ZS=m.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,XS=m.li`
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
`,JS=m.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,bf=m.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,eN=m.div`
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
`,tN=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`,kf=m.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,_f=m.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,nN=m.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${t=>t.$add?"var(--color-success-content)":"var(--color-content-primary)"};
`,rN=m.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,Cf=m.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function oN({milestones:t}){return r.jsx(pN,{children:t.map((a,i)=>r.jsx(lN,{milestone:a,last:i===t.length-1},i))})}function w2({milestones:t,typingIndex:a,focusIndex:i,focusBeat:s,collapsed:l,hideActions:d,running:h,animateIn:f,showConnectors:v,reasoning:x}){return r.jsx(aN,{milestones:t,typingIndex:a,focusIndex:i,focusBeat:s,hideActions:d,running:h,defaultCollapsed:l,animateIn:f,showConnectors:v,reasoning:x})}function aN({milestones:t,typingIndex:a,focusIndex:i,focusBeat:s,hideActions:l,running:d,animateIn:h=!0,showConnectors:f=!0,defaultCollapsed:v=!1,reasoning:x=!1}){const[y,b]=g.useState(!1),S=v||x&&!d?t.length:0,C=S>0,_=C&&!y?S:0,$=t.slice(0,S).map(N=>N.headline).join(" · "),R=t.length>0&&_>=t.length;return r.jsx(mN,{$animate:h,children:r.jsxs(vN,{$compact:R,children:[C&&!y&&r.jsx(Nf,{$tight:!0,$last:R,$connected:f,children:r.jsxs(_2,{type:"button","aria-expanded":y,onClick:()=>b(N=>!N),children:[r.jsx(Rf,{"aria-hidden":"true",children:r.jsx(Ws,{size:16})}),r.jsx(RN,{children:$})]})}),t.slice(_).map((N,A)=>{var Q,ne;const M=_+A,T=d&&typeof i=="number"&&M>i,E=d&&typeof i=="number"&&M===i,z=T?"plan":E?"working":"done",q=!d||typeof i!="number"||M<i-1?"done":M===i-1?"working":"upcoming",G=!!((Q=N.progress)!=null&&Q.length),X=M===t.length-1;return r.jsxs(Nf,{$tight:!G,$last:X,$connected:f,children:[f&&!X&&q!=="upcoming"&&r.jsx(yN,{"aria-hidden":"true",$state:q,$tight:!G,$superseded:v}),r.jsx(k2,{milestone:N,label:uS(N.headline,z),last:!0,collapsible:!0,placeholder:T,focused:E,startOpen:!d&&y,onCollapse:C&&y&&!E?()=>b(!1):void 0,progressBeat:E?s:void 0,superseded:v,typing:M===a,extra:!T&&((ne=N.usage)!=null&&ne.length)?r.jsx(sN,{usage:N.usage,title:N.headline}):void 0,icon:x&&!d&&!T?r.jsx(Rf,{"aria-hidden":"true",children:r.jsx(Ws,{size:16})}):r.jsx(b2,{icon:N.icon,loading:a===M||E||d&&typeof i!="number"&&M===t.length-1,placeholder:T,muted:v})})]},M)}),!l&&!d&&r.jsx(Fo,{time:En(t)})]})})}const jf=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function iN(){const[t,a]=g.useState(0);return g.useEffect(()=>{if(t>=jf.length-1)return;const i=setTimeout(()=>a(s=>s+1),3200);return()=>clearTimeout(i)},[t]),r.jsxs(r.Fragment,{children:[jf[t],r.jsxs(gN,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]})}function En(t){const i=581+t.reduce((f,v)=>f+v.headline.length,0)%200,s=Math.floor(i/60)%24,l=i%60,d=s<12?"AM":"PM";return`${s%12===0?12:s%12}:${String(l).padStart(2,"0")} ${d}`}function Fo({time:t}){const[a,i]=g.useState(null),s=l=>i(d=>d===l?null:l);return r.jsx(wN,{"data-feedback-actions":!0,children:r.jsxs(R0,{visibility:"always",time:t,children:[r.jsx(Mf,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":a==="up","data-active":a==="up"||void 0,onClick:()=>s("up"),children:r.jsx(Y0,{size:14})}),r.jsx(Mf,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":a==="down","data-active":a==="down"||void 0,onClick:()=>s("down"),children:r.jsx(Q0,{size:14})}),r.jsx(Re,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:r.jsx(li,{size:14})})]})})}function sN({usage:t,title:a}){const[i,s]=g.useState(!1);return g.useEffect(()=>{if(!i)return;const l=d=>{d.key==="Escape"&&s(!1)};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[i]),t.length?r.jsxs(bN,{children:[r.jsxs(Re,{variant:"tertiary",size:"xs",trailingArtwork:r.jsx(on,{size:12}),"aria-haspopup":"dialog","aria-expanded":i,onClick:()=>s(!0),children:[t.length," ",t.length===1?"tool":"tools"," used"]}),r.jsx(xS,{open:i,onClose:()=>s(!1),title:a,usage:t})]}):null}function lN({milestone:t,last:a}){return r.jsxs(SN,{children:[r.jsxs(NN,{children:[r.jsx(b2,{icon:t.icon}),!a&&r.jsx(AN,{})]}),r.jsx(k2,{milestone:t,last:a})]})}function cN({records:t,initial:a=3}){const[i,s]=g.useState(!1),l=i?t:t.slice(0,a),d=t.length-a;return r.jsxs(QN,{children:[l.map((h,f)=>r.jsx(x2,{record:h},f)),d>0&&r.jsx(KN,{type:"button",onClick:()=>s(h=>!h),children:i?"Show less":`Show ${d} more`})]})}function b2({slotRef:t,hidden:a,loading:i,placeholder:s,muted:l}){return s?r.jsx(Lf,{ref:t,"aria-hidden":"true",$hidden:a,$placeholder:!0,children:r.jsx(LN,{})}):r.jsx(Lf,{ref:t,"aria-hidden":"true",$hidden:a,$loading:i,children:r.jsxs(TN,{viewBox:"0 0 24 24",$loading:i,$muted:l&&!i,children:[r.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),r.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function k2({milestone:t,label:a,last:i,typing:s,icon:l,collapsible:d=!0,extra:h,placeholder:f,focused:v,progressBeat:x,superseded:y,startOpen:b,onCollapse:k}){var X,Q,ne;const j=a??t.headline;if(f)return r.jsx(Tf,{$last:i,$dim:!0,children:r.jsxs(ri,{as:"div",children:[l,r.jsx(Af,{children:j})]})});const S=!!((X=t.blocks)!=null&&X.length),C=!!h,_=!d||!!t.defaultOpen||!!b,[$,R]=g.useState(null),N=!!k,A=N?!0:$??_,M=d&&(S||C),T=!N&&M&&(!s||!!v),E=T&&!!v&&!!((Q=t.progress)!=null&&Q.length),z=()=>R(()=>!A),q=S&&(N||!d||A),G=C&&(N||!d||A);return r.jsxs(Tf,{$last:i,children:[r.jsxs(ri,{as:N||M?"button":"div",type:N||M?"button":void 0,$interactive:N||T,"aria-expanded":N?!0:T?A:void 0,onClick:N?k:T?z:void 0,children:[l,r.jsx(Af,{$focused:!!v,children:j}),T&&!v&&r.jsx(IN,{"data-open":A||void 0,"aria-hidden":"true",children:r.jsx(on,{size:14})})]}),(ne=t.progress)!=null&&ne.length?r.jsx(zN,{$indent:!!l,children:r.jsxs(EN,{children:[E&&r.jsx(PN,{type:"button","aria-expanded":A,"aria-label":A?"Hide details":"Show details",onClick:z,children:A?r.jsx(fu,{size:16}):r.jsx(oo,{size:16})}),r.jsx(uN,{steps:t.progress,avatars:t.avatars,avatarsOnSettle:t.avatarsOnSettle,reached:t.reached,live:!!(s||v),beat:x,superseded:y,showAvatars:A||s||v})]})}):null,q&&r.jsx(qN,{$indent:!!l,children:t.blocks.map((te,ce)=>r.jsxs(VN,{children:[te.text&&r.jsx(GN,{children:s?r.jsx(Tu,{text:te.text}):te.text}),te.label&&r.jsx(YN,{children:te.label}),te.bullets&&r.jsx(ZN,{children:te.bullets.map((oe,ie)=>r.jsx("li",{children:oe},ie))}),te.checks&&r.jsx(XN,{children:te.checks.map((oe,ie)=>r.jsxs("li",{children:[r.jsx(JN,{"aria-hidden":"true"}),r.jsx("span",{children:oe})]},ie))}),te.records&&r.jsx(cN,{records:te.records})]},ce))}),G&&r.jsx(kN,{$indent:!!l,children:h})]})}const dN=1350;function uN({steps:t,avatars:a,avatarsOnSettle:i,reached:s,live:l,showAvatars:d,beat:h,superseded:f}){const v=t.length-1,x=typeof h=="number",[y,b]=g.useState(l?0:v),k=g.useRef(l);g.useEffect(()=>{l&&!k.current&&(k.current=!0,b(0))},[l]),g.useEffect(()=>{if(x||!k.current||y>=v)return;const _=setTimeout(()=>b($=>Math.min($+1,v)),dN);return()=>clearTimeout(_)},[y,v,x]),g.useEffect(()=>{typeof h=="number"&&b(Math.min(h,v))},[h,v]);const j=typeof h=="number"?Math.min(h,v):y,S=j>=v,C=S&&!l;return r.jsxs(ON,{children:[r.jsx(BN,{$done:C,$live:l,$superseded:f,"aria-live":"polite",children:l?r.jsx(Tu,{text:t[j],caret:!1,speed:26}):t[j]},j),d&&(i?S:S||l)&&(a!=null&&a.length)?r.jsx(hN,{seeds:a,total:s}):null]})}const Sf=90;function hN({seeds:t,total:a,max:i=5}){const s=t.slice(0,i),l=Math.max(a??0,t.length),d=l-s.length;return r.jsxs(FN,{"aria-label":`${l} people reached`,children:[s.map((h,f)=>r.jsx(WN,{style:{zIndex:s.length-f,animationDelay:`${f*Sf}ms`},children:r.jsx(jn,{size:"sm",src:na(h),name:h,alt:""})},h)),d>0&&r.jsxs(HN,{"aria-hidden":"true",style:{animationDelay:`${s.length*Sf}ms`},children:["+",d]})]})}const pN=m.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,fN=Ne`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,fl=Ve`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,mN=m.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${fN} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${t=>t.$animate===!1&&"animation: none;"}

  ${fl}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,gN=m.span``,vN=m.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. The top padding
     is constant so the first row (the collapse toggle) holds its vertical position
     when the group opens/closes — expanding no longer nudges the accordion down.
     Only the bottom padding tightens for a fully-folded (superseded) recap line. */
  padding-top: var(--space-3);
  padding-bottom: ${t=>t.$compact?"var(--space-1)":"var(--space-3)"};
`,Nf=m.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${t=>t.$last?"0":t.$connected?t.$tight?"var(--space-3)":"var(--space-5)":t.$tight?"0":"var(--space-3)"};
`,xN=Ne`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,yN=m.span`
  position: absolute;
  /* Centered on the 32px icon column. */
  left: calc(var(--space-8) / 2);
  top: calc(var(--space-8) + var(--space-1));
  /* Extend down across the inter-row gap — matched to this connected row's gap (tight
     vs generous) — stopping a touch short of the next step's icon so it reads as
     connecting the two. */
  bottom: ${t=>t.$tight?"calc(var(--space-1) - var(--space-3))":"calc(var(--space-1) - var(--space-5))"};
  pointer-events: none;

  ${t=>t.$state==="working"?Ve`
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
        animation: ${xN} 1.25s linear infinite;
      `:t.$state==="upcoming"?Ve`
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
        background-color: ${t.$superseded?"var(--color-slate-border-secondary)":"var(--color-success-content)"};
      `};

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,wN=m.div`
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
`,bN=m.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,kN=m.div`
  padding-top: var(--space-2);
  padding-left: ${t=>t.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,Mf=m(Re)`
  &[data-active] { color: var(--color-content-brand); }
`;function Tu({text:t,onDone:a,speed:i=30,caret:s=!0}){const[l,d]=g.useState(0);g.useEffect(()=>{d(0)},[t]),g.useEffect(()=>{if(l>=t.length)return;const f=setTimeout(()=>d(v=>v+1),i);return()=>clearTimeout(f)},[l,t,i]);const h=l>=t.length;return g.useEffect(()=>{h&&(a==null||a())},[h]),r.jsxs(r.Fragment,{children:[t.slice(0,l),s&&r.jsx(CN,{$blink:h,"aria-hidden":"true"}),!h&&r.jsx(jN,{"aria-hidden":"true",children:t.slice(l)})]})}const _N=Ne`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,CN=m.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${t=>t.$blink?_N:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,jN=m.span`
  opacity: 0;
`,SN=m.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,NN=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,Lf=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${t=>t.$hidden?"hidden":"visible"};
`,MN=Ne`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,LN=m.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${MN} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,_2=m.button`
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
`,Rf=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  /* The collapse toggle always reads in the quiet disabled tone — it's a recap
     affordance, not a step, so it stays out of the way of the live trail. */
  color: var(--color-content-disabled);
`,RN=m.span`
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

  ${_2}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,$N=Ne`
  to { transform: rotate(360deg); }
`,$f=56.5,TN=m.svg`
  width: var(--space-4);
  height: var(--space-4);
  overflow: visible;

  .ring {
    /* Loading: hollow (transparent) spinner arc. Done: the circle fills solid
       success green — a filled badge, not an outline. Transparent (not none) so
       the fill eases in rather than popping. Muted (a superseded group's settled
       step): the disc fades out entirely, leaving just the bare check. */
    fill: ${t=>t.$loading||t.$muted?"transparent":"var(--color-success-fill)"};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-dasharray: ${$f};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${t=>t.$loading?$f*.7:0};
    stroke: ${t=>t.$loading?"var(--color-content-tertiary)":t.$muted?"transparent":"var(--color-success-fill)"};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${$N} 2s linear infinite;
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
    stroke: ${t=>t.$muted?"var(--color-content-tertiary)":"var(--color-content-inverse-primary)"};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 15;
    /* undrawn + slightly shrunk + transparent while loading; on done it draws on
       while fading + settling to full scale, so the check eases in rather than
       popping. transform-box keeps the scale centred on the glyph itself. */
    stroke-dashoffset: ${t=>t.$loading?15:0};
    opacity: ${t=>t.$loading?0:1};
    transform: ${t=>t.$loading?"scale(0.7)":"scale(1)"};
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
`,AN=m.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,Tf=m.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${t=>t.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${t=>t.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,ri=m.div`
  all: unset;
  display: flex;
  align-items: center;
  /* Tight 8px lead — the title hugs its loader/checkmark. The sub-content
     indents (ProgressWrap / Blocks / ExtraSlot) mirror this value. */
  gap: var(--space-2);
  width: 100%;
  box-sizing: border-box;
  cursor: ${t=>t.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,Af=m.span`
  /* Size to the title text (shrinking if the row is tight) rather than filling the
     row, so the expand chevron sits right after the label instead of at the far edge. */
  flex: 0 1 auto;
  min-width: 0;
  text-align: left;
  font-size: var(--text-sm); /* 14px */
  font-weight: ${t=>t.$focused?"var(--font-weight-bold)":"var(--font-weight-medium)"};
  color: ${t=>t.$focused?"var(--color-content-primary)":"var(--color-content-tertiary)"};
  line-height: var(--line-height-snug);
  transition: color var(--duration-base) var(--ease-out);

  ${ri}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,IN=m.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  opacity: 0;
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-default);
  ${ri}:hover &,
  ${ri}:focus-visible &,
  &[data-open] { opacity: 1; }
  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,EN=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,PN=m.button`
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
`,zN=m.div`
  padding-left: ${t=>t.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,ON=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
`,DN=Ne`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,BN=m.div`
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
  color: ${t=>t.$superseded?"var(--color-content-disabled)":t.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
  /* The live reveal is carried by the type-on (see MilestoneProgress → Typewriter),
     so the line itself no longer fades/pops in — that avoided a stray flash when a
     settled line re-mounts (e.g. as the finished group folds into a response set).
     While the step is still running a highlight band sweeps left-to-right across it
     to read as actively-working; a settled line holds solid. */
  ${t=>t.$live&&Ve`
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
    animation: ${DN} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,FN=m.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,C2=Ne`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,WN=m.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${C2} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,HN=m.span`
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
  animation: ${C2} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,UN=Ne`
  from { opacity: 0; }
  to   { opacity: 1; }
`,qN=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
  /* Breathing room below the revealed sub-context so it doesn't butt against the
     next step (the tighter headline-only gap leaves little room otherwise). */
  padding-bottom: var(--space-2);
  /* Card layout: hang the sub-context under the title by clearing the inline
     icon column (icon width --space-8 + header gap --space-2). */
  padding-left: ${t=>t.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
  animation: ${UN} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,VN=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,GN=m.p`
  margin: 0;
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,YN=m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,QN=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,KN=m.button`
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
`,ZN=m.ul`
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
`,XN=m.ul`
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
`,JN=m.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function eM({size:t=20}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const tM=160,j2=g.forwardRef(function({onSend:a,working:i=!1,onStop:s,placeholder:l="Message Ultron…",compact:d=!1},h){const[f,v]=g.useState(""),x=g.useRef(null),y=f.trim().length>0;g.useImperativeHandle(h,()=>({focus:()=>{var C;return(C=x.current)==null?void 0:C.focus()}}),[]);const b=()=>{const C=x.current;C&&(C.style.height="auto",C.style.height=`${Math.min(C.scrollHeight,tM)}px`)},k=()=>{!y||i||(a(f),v(""),requestAnimationFrame(()=>{const C=x.current;C&&(C.style.height="auto")}))},j=C=>{C.preventDefault(),k()},S=C=>{C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),k())};return r.jsxs(nM,{onSubmit:j,$compact:d,children:[r.jsx(rM,{ref:x,rows:1,value:f,placeholder:l,"aria-label":"Message Ultron",$compact:d,onChange:C=>{v(C.target.value),b()},onKeyDown:S}),i?r.jsx(If,{$float:!0,type:"button",variant:"primary",size:d?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:s,children:r.jsx(eM,{size:d?16:20})}):r.jsx(If,{type:"submit",variant:"primary",size:d?"xs":"sm",iconOnly:!0,disabled:!y,"aria-label":"Send message",children:r.jsx(rl,{size:d?14:18})})]})}),nM=m.form`
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
  ${t=>t.$compact&&`
  padding: 5px 5px 5px var(--space-3);
  border-radius: var(--radius-md);`}
  transition: box-shadow var(--duration-slow) var(--ease-default),
              border-color var(--duration-slow) var(--ease-default);

  /* Active (focused) state: just the 1px border switching to the focus color —
     no thicker ring — so the bar stays a single hairline outline throughout. */
  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,rM=m.textarea`
  flex: 1;
  min-width: 0;
  /* Size a single line to exactly the 32px send button (space-8) so, with the
     bar's flex-end alignment, the resting input and button share one centered
     row; extra lines then grow upward while the button stays pinned at the foot.
     Compact bars center on the 24px xs button (space-6) instead. */
  padding: calc((${t=>t.$compact?"var(--space-6)":"var(--space-8)"} - 1lh) / 2) 0;
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
  ${t=>t.$compact&&`
  font-size: var(--text-xs);`}

  &::placeholder { color: var(--color-content-inverse-tertiary); }
`,If=m(Re)`
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
  ${t=>t.$float&&`
  &[data-variant='primary'] {
    background: transparent !important;
    color: var(--color-content-primary) !important;
  }`}
`,Ef=450;function Au(t,a){var S;const i=t.status==="needs_approval"||t.status==="recommended",s=i||t.status==="unresolved"||t.status==="monitoring",l=Nu[t.id],d=a===1&&!!l,h=d?l.prompt:p2[t.id]??t.recommendation,f=d?l.record:Bj[t.id],v=f?Array.isArray(f)?f:[f]:[],x=t.status==="unresolved"?_j:d?l.actions:t.actions,y=i&&(!d&&(((S=Mu[t.id])==null?void 0:S.length)??0)>1||Cj(h)),b=y?jj:x[x.length-1],k=y?[]:x.slice(0,-1),j=a2(t);return{needsDecision:i,actionable:s,onFollowUp:d,followUp:l,prompt:h,records:v,primaryLabel:b,secondaryLabels:k,purple:j}}function Pf({thread:t,stage:a,expanded:i,detachActionable:s,detachAnalyzing:l,detachTrail:d,onToggle:h,onClose:f,onDecide:v,onAction:x,onRefinement:y,onSaveWorkflow:b}){const[k,j]=g.useState(!1),[S,C]=g.useState(!1),{actionable:_,prompt:$,records:R,primaryLabel:N,purple:A}=Au(t,a),T=t.status==="analyzing"&&!l,E=t.status==="resolved"||t.status==="auto_resolved",z=!s&&(_||A),q=E&&!d,G=s?T:_||T||z,X=i&&(G||q),Q=pl(t),te=c2(t.id)||(X?"":t.assessment),ce=oe=>{i2(oe)?y(oe):x(t.id,oe)};return r.jsxs(gM,{"data-tone":Q,$expanded:i,children:[r.jsxs(bM,{children:[r.jsxs(_M,{type:"button","aria-expanded":X,"aria-label":X?"Collapse case":"Expand case",onClick:h,children:[r.jsx(jn,{size:"md",src:Su(t.id),name:Zo[t.id],alt:Zo[t.id]??""}),r.jsxs($2,{children:[r.jsx(T2,{children:d2(t)}),te&&r.jsx(A2,{children:te})]})]}),r.jsx(kM,{variant:"ghost",size:f?"sm":"xs",iconOnly:!0,"aria-label":f?"Open record":X?"Collapse case":"Expand case",tabIndex:f?void 0:-1,onClick:f??h,children:f?r.jsx(al,{size:20}):X?r.jsx(Ws,{size:16}):r.jsx(fu,{size:16})})]}),X&&q&&r.jsx(CM,{children:r.jsx(jM,{children:r.jsx(oN,{milestones:f2(t)})})}),X&&G&&r.jsxs(SM,{children:[_&&!s&&r.jsx(ml,{children:$}),_&&!s&&R.length>0&&r.jsx(WM,{children:R.map((oe,ie)=>r.jsx(x2,{record:oe},ie))}),T&&r.jsx(I2,{role:"status","aria-live":"polite",children:r.jsx(sM,{thread:t,onDecide:v})}),z&&r.jsxs(Iu,{children:[_&&N&&r.jsx(Qr,{variant:"primary",size:"sm",onClick:()=>ce(Gs),children:Gs}),_&&r.jsx(Qr,{variant:"tertiary",size:"sm",onClick:()=>y("No"),children:"No"}),_&&r.jsx(O2,{variant:"tertiary",size:"sm","data-selected":S||void 0,onClick:()=>{C(!0),y("Other")},children:"Other"}),A&&(k?r.jsx(Re,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(Dt,{size:14}),children:"Saved"}):r.jsx(Re,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(ro,{size:14}),onClick:()=>{b(t),j(!0)},children:"Save as workflow"}))]})]})]})}function zf({text:t,speed:a=16,onDone:i,instant:s=!1}){const[l,d]=g.useState(!1);return g.useEffect(()=>{d(!1)},[t]),g.useEffect(()=>{s&&(i==null||i())},[s]),s||l?r.jsx(r.Fragment,{children:t}):r.jsx(Tu,{text:t,speed:a,onDone:()=>{d(!0),i==null||i()}})}function S2({thread:t,stage:a,onAction:i,onRefinement:s,onSaveWorkflow:l,saved:d=!1,saveIntent:h=!1,onToggleSaveWorkflow:f,savedConversationally:v=!1,onSend:x,replying:y=!1,onStop:b,flat:k=!1}){const j=d||h,[S,C]=g.useState(!1),[_,$]=g.useState(!1),[R]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(t.status)),[N,A]=g.useState(!1),[M,T]=g.useState(!1),E=g.useRef(null);g.useEffect(()=>{var H;M&&((H=E.current)==null||H.focus())},[M]);const z=d||v||N,{actionable:q,onFollowUp:G,prompt:X,records:Q,primaryLabel:ne,purple:te}=Au(t,a),ce=q&&!G?Mu[t.id]??s2(X).map(H=>({label:H})):void 0,oe=t.status==="resolved"||t.status==="auto_resolved",ie=te||oe,Z=H=>{i2(H)?s(H):i(t.id,H)},W=q&&!(ce&&ce.length>0)&&Q.length>0?Q[0]:void 0;if(ie&&!q){const H=v2[t.id],I=S||!H,L=d&&!v&&!N;return r.jsxs(JM,{$divided:!0,children:[H&&r.jsx(eL,{children:r.jsx(zf,{text:H,onDone:()=>C(!0),instant:R})}),I&&!L&&r.jsxs(Uo,{$saved:z,"data-saved":z||void 0,children:[r.jsxs(D2,{children:[r.jsx(B2,{"aria-hidden":"true",children:r.jsx(ro,{size:16})}),r.jsx(F2,{children:r.jsx(zf,{text:"Want me to save this as a reusable workflow?",onDone:()=>$(!0),instant:R})})]}),_&&r.jsx(W2,{children:z?r.jsx(Qr,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:r.jsx(Dt,{size:14}),children:"Saved"}):r.jsx(Qr,{variant:"primary",size:"sm",onClick:()=>{A(!0),l(t)},children:"Save workflow"})})]}),I&&L&&r.jsx(M2,{})]})}return r.jsxs(wM,{$flat:k,"data-tone":pl(t),children:[q&&r.jsxs(L2,{children:[r.jsx(ml,{children:X}),W&&r.jsx(R2,{children:r.jsx(jn,{size:"md",src:na(W.avatarSeed),name:W.title,alt:W.title})})]}),ce&&ce.length>0?r.jsx(N2,{tasks:ce}):null,r.jsxs(Iu,{children:[q&&ne&&r.jsx(Qr,{variant:M?"secondary":"primary",size:"sm",onClick:()=>Z(Gs),children:Gs}),q&&r.jsx(Qr,{variant:M?"secondary":"tertiary",size:"sm",onClick:()=>s("No"),children:"No"}),q&&r.jsx(O2,{variant:"tertiary",size:"sm","data-selected":M||void 0,onClick:()=>T(!0),children:"Other"}),q&&!G&&r.jsx(XM,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":j,"data-on":j||void 0,leadingArtwork:j?r.jsx(Dt,{size:14}):r.jsx(ro,{size:14}),onClick:()=>{d||f==null||f(t.id)},children:"Save as future workflow"})]}),q&&M&&r.jsx(ZM,{children:r.jsx(j2,{ref:E,compact:!0,onSend:H=>x==null?void 0:x(H),working:y,onStop:b,placeholder:"Tell Ultron what to do…"})})]})}function oM({thread:t,stage:a,expanded:i,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:f=!1,saved:v=!1}){const x=pl(t),y=c2(t.id)||t.assessment;return r.jsxs(vM,{"data-tone":x,$expanded:i,children:[r.jsxs(xM,{$expanded:i,children:[r.jsx(jn,{size:"md",src:Su(t.id),name:Zo[t.id],alt:Zo[t.id]??""}),r.jsxs($2,{children:[r.jsx(T2,{children:d2(t)}),y&&r.jsx(A2,{children:y})]})]}),i&&r.jsx(yM,{children:r.jsx(S2,{flat:!0,thread:t,stage:a,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:f,saved:v})})]})}function N2({tasks:t,interactive:a=!0}){return r.jsx(HM,{children:t.map((i,s)=>r.jsx(aM,{task:i,first:s===0,last:s===t.length-1,interactive:a},s))})}function aM({task:t,first:a,last:i,interactive:s=!0}){const[l,d]=g.useState(!1),h=!!t.detail&&s;return r.jsxs(UM,{children:[r.jsx(qM,{"data-first":a||void 0,"data-last":i||void 0,"aria-hidden":"true",children:r.jsx(VM,{})}),r.jsxs(GM,{children:[r.jsxs(YM,{as:h?"button":"div",type:h?"button":void 0,$interactive:h,"aria-expanded":h?l:void 0,onClick:h?()=>d(f=>!f):void 0,children:[r.jsx(P2,{children:t.label}),h&&r.jsx(QM,{"data-open":l||void 0,"aria-hidden":"true",children:r.jsx(on,{size:14})})]}),l&&h&&r.jsx(KM,{children:t.detail})]})]})}function iM({steps:t,completed:a}){const[i,s]=g.useState(a?t.length:1);g.useEffect(()=>{if(a){s(t.length);return}if(i>=t.length)return;const d=setTimeout(()=>s(h=>h+1),1600);return()=>clearTimeout(d)},[i,t.length,a]);const l=t.slice(0,i);return r.jsx(TM,{role:"status","aria-live":"polite",children:l.map((d,h)=>{const f=!a&&h===i-1,v=h===l.length-1;return r.jsxs(IM,{children:[r.jsxs(EM,{children:[r.jsx(BM,{$done:!f,"aria-hidden":"true",children:f?r.jsx(FM,{children:r.jsx(ct,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):r.jsx(Dt,{size:16})}),!v&&r.jsx(PM,{})]}),r.jsxs(zM,{$last:v,children:[r.jsx(OM,{children:d.headline}),r.jsx(DM,{children:d.detail})]})]},h)})})}function sM({thread:t,onDecide:a,analyzed:i,hideDetail:s,hideTrigger:l}){const[d,h]=g.useState(!0);return r.jsxs(r.Fragment,{children:[r.jsxs(NM,{as:"button",type:"button",$interactive:!0,"aria-expanded":d,onClick:()=>h(f=>!f),children:[r.jsx(ct,{mark:"orbit",size:40,tone:"auto",state:i?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),r.jsxs(LM,{children:[r.jsx(RM,{children:i?"Ultron analyzed this event":"Ultron is analyzing this event"}),!s&&r.jsx($M,{children:t.assessment})]}),r.jsx(MM,{"data-open":d||void 0,"aria-hidden":"true",children:r.jsx(on,{size:14})})]}),d&&r.jsx(iM,{steps:h2(t.id),completed:i}),!i&&!l&&r.jsx(E2,{variant:"secondary",size:"sm",onClick:()=>a(t.id),children:"Trigger Needs approval (demo)"})]})}function lM({thread:t,onDecide:a}){return r.jsx(E2,{variant:"secondary",size:"sm",onClick:()=>a(t.id),children:"Trigger Needs approval (demo)"})}function Cd(t,a){return{icon:t.icon,headline:t.headline,blocks:t.detail||t.bullets?[{text:t.detail||void 0,bullets:t.bullets}]:void 0,progress:t.progress,avatars:t.avatars,avatarsOnSettle:t.avatarsOnSettle,reached:t.reached,usage:g2(a,Xj(t))}}function cM(t,a){const i=g2(a,["read","match","policy","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:t.map(s=>`${s.headline} — ${s.detail}`)}],usage:i}}function dM(t,a){const i=f2(t),s=t.timeline.filter(b=>b.done).length,l=s>0?Math.min(s,i.length):i.length,d=[cM(h2(t.id),t.id),...i.slice(0,l)],h=d.length;if(a.length===0){const b=d.map(k=>({kind:"activity",milestone:k}));return(t.status==="in_progress"||t.status==="monitoring")&&(uf[t.id]??[]).map(k=>Cd(k,t.id)).forEach(k=>b.push({kind:"activity",milestone:k})),{items:b,reasoningCount:h}}const f=Nu[t.id],v=[(uf[t.id]??[]).map(b=>Cd(b,t.id)),((f==null?void 0:f.working)??[]).map(b=>Cd(b,t.id))],x=b=>b===1&&f?f.prompt:p2[t.id]??t.recommendation,y=d.slice(0,h).map(b=>({kind:"activity",milestone:b}));return a.forEach((b,k)=>{y.push({kind:"question",text:x(k)}),y.push({kind:"message",text:b}),(v[k]??[]).forEach(j=>y.push({kind:"activity",milestone:j})),y.push({kind:"reply",text:eS(k)})}),{items:y,reasoningCount:h}}function uM({thread:t,outbound:a=[],chat:i=[],replying:s=!1,analyzing:l=!1,actionCard:d,footSlot:h,onCompleteRun:f,saveWorkflowFlagged:v=!1}){const x=t.status==="in_progress"||t.status==="monitoring",y=t.status==="resolved"||t.status==="auto_resolved",{items:b,reasoningCount:k}=dM(t,a),j=l||t.status==="in_progress",[S,C]=g.useState(l?Math.min(1,k):j?k:b.length),[_]=g.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(t.status)),$=a.length>0||x||y?b.length:k,R=t.status==="in_progress"&&a.length>0,[N,A]=g.useState(0);g.useEffect(()=>{A(0)},[S]),g.useEffect(()=>{if(S>=$)return;const K=b[S],B=b[S-1];if((K==null?void 0:K.kind)==="question"||(K==null?void 0:K.kind)==="message"){const pe=setTimeout(()=>C(ve=>ve+1),0);return()=>clearTimeout(pe)}if((K==null?void 0:K.kind)==="reply"){if(R)return;const pe=setTimeout(()=>C(ve=>ve+1),Ef);return()=>clearTimeout(pe)}if(R&&(B==null?void 0:B.kind)!=="message")return;const ue=(B==null?void 0:B.kind)==="message"?Ef:vf,me=setTimeout(()=>C(pe=>pe+1),ue);return()=>clearTimeout(me)},[S,$,R]),g.useEffect(()=>{if(!R)return;const K=B=>{var _e;if(B.key!=="t"&&B.key!=="T"||B.metaKey||B.ctrlKey||B.altKey)return;const ue=B.target instanceof Element?B.target:null;if(ue&&ue.closest('input, textarea, [contenteditable="true"]'))return;const me=b[S-1],pe=(me==null?void 0:me.kind)==="activity"?((_e=me.milestone.progress)==null?void 0:_e.length)??0:0;if((me==null?void 0:me.kind)==="activity"&&N<pe-1){A(je=>je+1);return}const ve=b[S];(ve==null?void 0:ve.kind)==="activity"?(C(je=>je+1),A(0)):f==null||f()};return window.addEventListener("keydown",K),()=>window.removeEventListener("keydown",K)},[R,S,N,f]);const M=b.slice(0,S),T=[];for(const K of M){if(K.kind==="question"){T.push({type:"question",text:K.text});continue}if(K.kind==="message"){T.push({type:"msg",text:K.text});continue}if(K.kind==="reply"){T.push({type:"reply",text:K.text});continue}const B=T[T.length-1];B&&B.type==="acts"?B.milestones.push(K.milestone):T.push({type:"acts",milestones:[K.milestone]})}const E=S<b.length,z=M.length>0&&M[M.length-1].kind==="activity",q=S>=$,[G,X]=g.useState(!1);g.useEffect(()=>{if(!(q&&z&&(x||l)&&!y)){X(!1);return}X(!0);const K=setTimeout(()=>X(!1),vf);return()=>clearTimeout(K)},[q,z,S,x,l,y]);const Q=(x||l)&&(E||G)&&z;let ne=-1;T.forEach((K,B)=>{K.type==="acts"&&(ne=B)});const te=[];for(const K of b){if(K.kind!=="activity"){te.push({type:"other"});continue}const B=te[te.length-1];B&&B.type==="acts"?B.milestones.push(K.milestone):te.push({type:"acts",milestones:[K.milestone]})}let ce=-1;te.forEach((K,B)=>{K.type==="acts"&&(ce=B)});const oe=T.findIndex(K=>K.type==="acts"),ie=(K,B,ue=B)=>{const me=T[K],pe=(l||t.status==="in_progress")&&K===ce,ve=te[K],_e=pe&&ve&&ve.type==="acts"?ve.milestones:me.milestones,je=pe?me.milestones.length-1:void 0;return r.jsx(w2,{milestones:_e,focusIndex:je,focusBeat:pe&&R?N:void 0,typingIndex:K===ce&&Q?me.milestones.length-1:void 0,collapsed:K<ne,hideActions:ue,running:pe,showConnectors:K!==oe,reasoning:K===oe,animateIn:!B&&!_})},Z=[];for(let K=0;K<T.length;K++){const B=T[K];if(B.type==="question"){Z.push({kind:"question",text:B.text});continue}if(B.type==="msg"){Z.push({kind:"msg",text:B.text});continue}if(B.type==="reply"){Z.push({kind:"response",gi:-1,text:B.text});continue}const ue=T[K+1];ue&&ue.type==="reply"?(Z.push({kind:"response",gi:K,text:ue.text}),K++):Z.push({kind:"acts",gi:K})}const H=(l||t.status==="in_progress")&&ne>=0||s,I=M.length>0,L=s||x,U=(()=>{for(let K=Z.length-1;K>=0;K--){const B=Z[K];if(B.kind==="acts"||B.kind==="response"&&B.gi>=0)return K}return-1})(),O=Z.findIndex(K=>K.kind==="question"),ee=O===oe+1?O:-1,ae=K=>K.kind==="acts"?En(T[K.gi].milestones):K.kind==="response"?En(K.gi>=0?T[K.gi].milestones:[]):En([]);return r.jsxs(r.Fragment,{children:[Z.map((K,B)=>{var ve,_e;const ue=B===U?d:null;if(K.kind==="question"){if(B===ee)return null;const je=Z[B-1],$e=!!je&&(je.kind==="acts"||je.kind==="response")&&B-1!==U,Fe=B===O;return r.jsxs(Sd,{children:[Fe?r.jsx(Of,{thread:t,saveWorkflowFlagged:v}):r.jsx(fM,{text:K.text,animate:!_}),$e&&r.jsx(Fo,{time:ae(je)})]},`q${B}`)}if(K.kind==="msg")return r.jsx(mM,{messages:[K.text],animate:!_},`m${B}`);if(K.kind==="acts"){const je=T[K.gi].milestones,$e=((ve=Z[B+1])==null?void 0:ve.kind)==="question",Fe=ie(K.gi,!1,!!ue||$e),qe=B===oe,Ge=ue||(qe&&B+1===ee?r.jsx(Of,{thread:t,saveWorkflowFlagged:v}):null);return qe&&Ge?r.jsxs(pL,{children:[Fe,Ge,r.jsx(Fo,{time:En(je)})]},`a${B}`):r.jsxs(g.Fragment,{children:[Fe,ue&&r.jsxs(Sd,{children:[ue,r.jsx(Fo,{time:En(je)})]})]},`a${B}`)}const me=K.gi>=0,pe=me?T[K.gi].milestones:[];return r.jsxs(g.Fragment,{children:[r.jsx(Zd,{activity:me?ie(K.gi,!0):void 0,text:K.text,feedbackTime:ue||((_e=Z[B+1])==null?void 0:_e.kind)==="question"?void 0:En(pe),showMark:!1,animateIn:!1}),ue&&r.jsxs(Sd,{children:[ue,r.jsx(Fo,{time:En(pe)})]})]},`resp${B}`)}),r.jsx(hM,{messages:i,replying:s}),h&&Js.createPortal(I?r.jsxs(lL,{role:L?"status":"img","aria-label":s?"Ultron is replying":H?"Ultron is working":"Ultron",children:[r.jsxs(uL,{"aria-hidden":"true",children:[r.jsx(Df,{$show:H,children:r.jsx(ct,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),r.jsx(Df,{$show:!H,children:r.jsx(ct,{mark:"magnetic2d",size:24,tone:"auto",state:L?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),H&&r.jsx(dL,{children:s?"Replying…":r.jsx(iN,{})})]}):null,h),U<0&&d]})}function Zd({activity:t,text:a,body:i,feedbackTime:s,active:l=!1,showMark:d=!0,animateIn:h=!0}){const f=!!(t||i||s);return r.jsxs(hL,{children:[f&&r.jsxs(fL,{$animate:h,children:[t,i,s&&r.jsx(Fo,{time:s})]}),d&&r.jsx(mL,{$animate:h,role:l?"status":"img","aria-label":l?"Ultron is working":"Ultron",children:r.jsx(ct,{mark:"magnetic2d",size:24,tone:"auto",state:l?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function jd(){return[{icon:"clock",headline:"Reviewed your message"}]}function hM({messages:t,replying:a=!1}){return!t.length&&!a?null:r.jsx(sL,{children:t.map((i,s)=>i.role==="operator"?r.jsx(H2,{children:r.jsx(q2,{children:r.jsx(V2,{children:i.text})})},s):i.kind==="workflow_saved"?r.jsx(Zd,{body:r.jsx(pM,{}),feedbackTime:En(jd()),showMark:!1},s):r.jsx(Zd,{activity:r.jsx(w2,{milestones:jd(),collapsed:!0,hideActions:!0}),text:i.text,feedbackTime:En(jd()),showMark:!1},s))})}function pM(){return r.jsx(M2,{})}function M2(){return r.jsxs(Uo,{children:[r.jsxs(D2,{children:[r.jsx(B2,{"aria-hidden":"true",children:r.jsx(ro,{size:16})}),r.jsx(F2,{children:"Workflow saved for future use."})]}),r.jsx(W2,{children:r.jsx(Qr,{variant:"secondary",size:"sm",trailingArtwork:r.jsx(al,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function fM({text:t,animate:a=!0}){return r.jsx(nL,{$animate:a,children:t})}function Of({thread:t,saveWorkflowFlagged:a=!1}){const{prompt:i,records:s}=Au(t,0),l=Mu[t.id]??s2(i).map(h=>({label:h})),d=!(l&&l.length>0)&&s.length>0?s[0]:void 0;return r.jsxs(rL,{"data-tone":pl(t),children:[r.jsxs(L2,{children:[r.jsx(ml,{children:i}),a?r.jsx(jr,{content:"Saved as workflow",children:r.jsx(oL,{"aria-label":"Saved as workflow",children:r.jsx(ro,{size:18})})}):d&&r.jsx(R2,{children:r.jsx(jn,{size:"md",src:na(d.avatarSeed),name:d.title,alt:d.title})})]}),l&&l.length>0?r.jsx(N2,{tasks:l,interactive:!1}):null]})}function mM({messages:t,animate:a=!0}){return t.length?r.jsx(aL,{children:t.map((i,s)=>r.jsx(H2,{children:r.jsx(q2,{$animate:a,children:r.jsx(V2,{children:i})})},s))}):null}const gM=m.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  /* The expanded event card is deconstructed: transparent, no tonal fill, no
     shadow/border — its content sits flat on the page. Collapsed list cards keep
     their solid surface + flat tonal status fill, and lift on hover. */
  background: ${t=>t.$expanded?"transparent":"var(--color-bg-primary)"};
  box-shadow: none;
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  ${t=>t.$expanded?"":`
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
  &[data-tone='orange'] { ${t=>t.$expanded?"":"background-color: var(--color-orange-bg-tertiary);"} }
  &[data-tone='green']  { ${t=>t.$expanded?"":"background-color: var(--color-green-bg-tertiary);"} }
  &[data-tone='blue']   { ${t=>t.$expanded?"":"background-color: var(--color-blue-bg-tertiary);"} }
  &[data-tone='slate']  { ${t=>t.$expanded?"":"background-color: var(--color-slate-bg-tertiary);"} }
`,vM=m.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: box-shadow var(--duration-base) var(--ease-out),
              transform var(--duration-base) var(--ease-out),
              background-color var(--duration-base) var(--ease-out);

  ${t=>t.$expanded?Ve`
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
  &[data-tone='orange'] { ${t=>t.$expanded?"":"background-color: var(--color-orange-bg-tertiary);"} }
  &[data-tone='green']  { ${t=>t.$expanded?"":"background-color: var(--color-green-bg-tertiary);"} }
  &[data-tone='blue']   { ${t=>t.$expanded?"":"background-color: var(--color-blue-bg-tertiary);"} }
  &[data-tone='slate']  { ${t=>t.$expanded?"":"background-color: var(--color-slate-bg-tertiary);"} }

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`,xM=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  ${t=>t.$expanded&&Ve`
    border-bottom: 1px solid var(--color-border-opaque);
  `}
`,yM=m.div`
  padding: var(--space-4);
`,wM=m.div`
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
  ${t=>t.$flat&&Ve`
    border: none;
    box-shadow: none;
    background: transparent;
    border-radius: 0;
    padding: 0;
    &:hover { transform: none; box-shadow: none; }
  `}
`,L2=m.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,R2=m.span`
  flex-shrink: 0;
  display: inline-flex;
`,bM=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  /* Extra breathing room above the title; the bottom stays tight to the body. */
  padding: var(--space-4) 0 var(--space-2);
`,kM=m(Re)`
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
`,_M=m.button`
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
`,$2=m.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,T2=m.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,A2=m.span`
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
`,CM=m.div`
  overflow: hidden;
`,jM=m.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,SM=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,I2=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`,NM=m.div`
  all: ${t=>t.$interactive?"unset":"revert"};
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  box-sizing: border-box;
  cursor: ${t=>t.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,MM=m.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;m(I2)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const LM=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,RM=m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,$M=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,TM=m.div`
  display: flex;
  flex-direction: column;
`,AM=Ne`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,IM=m.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${AM} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,EM=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,PM=m.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,zM=m.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${t=>t.$last?"0":"var(--space-4)"};
`,OM=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,DM=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,BM=m.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${t=>t.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,FM=m.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,E2=m(Re)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,WM=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,HM=m.div`
  display: flex;
  flex-direction: column;
`,Ks="var(--space-8)",UM=m.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,qM=m.div`
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
  &[data-first]::before { top: calc(${Ks} / 2); }
  &[data-last]::before { bottom: calc(100% - ${Ks} / 2); }
  &[data-first][data-last]::before { display: none; }
`,VM=m.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${Ks} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-slate-border-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`,GM=m.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,YM=m.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${Ks};
  cursor: ${t=>t.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,P2=m.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,QM=m.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,KM=m.p`
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
`,ml=m.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,z2=Ne`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,Iu=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${z2} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ZM=m.div`
  animation: ${z2} var(--duration-slow) var(--ease-out);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Qr=m(Re)`
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
`,O2=m(Re)`
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
`,XM=m(Re)`
  ${t=>t.$trailing&&"margin-left: auto;"}
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
`,JM=m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${t=>t.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,eL=m.p`
  margin: 0;
  max-width: 80%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,Uo=m.div`
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
  box-shadow: ${t=>t.$saved?"none":"var(--shadow-below-low)"};
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  ${t=>!t.$saved&&Ve`
    &:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-below-md);
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`,D2=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,B2=m.span`
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
  ${Uo}:not([data-saved]):hover & { color: var(--color-content-inverse); }
  ${Uo}:not([data-saved]):hover &::after { opacity: 1; }

  /* Saved (settled) card: the glyph quiets to the disabled tone alongside its
     label and button. */
  ${Uo}[data-saved] & { color: var(--color-content-disabled); }
`,F2=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);

  /* Saved (settled) card: the label quiets to the disabled tone alongside the
     glyph and button. */
  ${Uo}[data-saved] & { color: var(--color-content-disabled); }
`,W2=m(Iu)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,tL=Ne`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,nL=m.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${tL} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,rL=m.div`
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
  ${ml} { color: var(--color-content-disabled); }
  ${P2} { color: var(--color-content-disabled); }
`,oL=m.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`,aL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,H2=m.div`
  display: flex;
  justify-content: flex-end;
`,Eu=Ne`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,U2=Ne`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,iL=Ne`
  from { opacity: 0; }
  to   { opacity: 1; }
`,q2=m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: 16px;
  animation: ${Eu} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,V2=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,sL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;m.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const lL=m.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${U2} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,cL=Ne`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,dL=m.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${cL} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,uL=m.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,Df=m.span`
  position: absolute;
  inset: 0;
  /* Center the canvas so the two forms stay concentric through the cross-fade even
     when one renders at a larger size to match the other's visible footprint. */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${t=>t.$show?1:0};
  transition: opacity var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,hL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${fl}
`,Sd=m.div`
  display: contents;
  ${fl}
`,pL=m.div`
  display: flex;
  flex-direction: column;
  ${fl}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`,fL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${iL} 380ms var(--ease-out) 160ms both;
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,mL=m.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${U2} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${t=>t.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${Eu} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
  animation: ${Eu} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
`;const gL={"Coverage Recovery":Gr,"Fill Optimization":Gr,Recruiting:Gr,Users:Gr,Attendance:zn,"Attendance Recovery":zn,"Time Off":zn,Scheduling:zn,Compliance:ol,Onboarding:Yr,"Payroll Operations":V0,Invoicing:Wo,Reporting:Bp,"Marketplace Optimization":Bp,Engagement:Us,"Autonomous Operations":nl},vL=t=>gL[t]??nl,Bf=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],xL=2800,yL=200,wL=6,bL=2200,Ka=520;function kL({onDetectRisk:t,deckActive:a=!1,deck:i}){const[s,l]=g.useState(0),d=g.useRef(t);d.current=t;const h=g.useRef(new Set),[f,v]=g.useState(!1),x=g.useRef(null);g.useEffect(()=>{const M=setInterval(()=>l(T=>(T+1)%Bf.length),xL);return()=>clearInterval(M)},[]);const y=Math.min(wL,Rs.length),[b,k]=g.useState([]),j=g.useRef(0),S=g.useRef(Rs.filter(M=>!M.risk)),C=g.useRef(Rs.filter(M=>M.risk)),_=g.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),$=()=>5+Math.floor(Math.random()*5),R=()=>{const M=_.current,T=C.current;if(T.length>0&&M.sinceRisk>=M.gap)return M.sinceRisk=0,M.gap=$(),T[M.risk++%T.length];M.sinceRisk+=1;const E=S.current;return E.length>0?E[M.routine++%E.length]:T[M.risk++%T.length]},N=M=>M.risk?"risk":Math.random()<.28?"action":"none",A=g.useRef(null);return g.useEffect(()=>{if(Rs.length===0){k([]);return}if(a)return;_.current={routine:0,risk:0,sinceRisk:0,gap:$()},j.current=0;const M=Array.from({length:y},()=>{const z=R();return{key:j.current++,event:z,phase:"in",outcome:N(z),resolved:!0}});if(M.length>0){const z=M[M.length-1];z.resolved=!1,A.current={key:z.key,event:z.event,outcome:z.outcome}}else A.current=null;k(M);const T=[],E=setInterval(()=>{var Q;const z=R(),q=j.current++,G=N(z),X=A.current;X&&X.outcome==="risk"&&(v(!0),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>v(!1),2800),h.current.has(X.event.id)||(h.current.add(X.event.id),(Q=d.current)==null||Q.call(d,X.event))),A.current={key:q,event:z,outcome:G},k(ne=>{const te=ne.filter(ie=>ie.phase!=="leaving"),ce=te.length>=y?te[0].key:null;return[...ne.map(ie=>ie.key===ce?{...ie,phase:"leaving"}:X&&ie.key===X.key&&!ie.resolved?{...ie,resolved:!0}:ie),{key:q,event:z,phase:"entering",outcome:G,resolved:!1}]}),T.push(setTimeout(()=>{k(ne=>ne.map(te=>te.key===q?{...te,phase:"in"}:te))},40)),T.push(setTimeout(()=>{k(ne=>ne.filter(te=>te.phase!=="leaving"))},Ka))},bL);return()=>{clearInterval(E),T.forEach(clearTimeout),x.current&&clearTimeout(x.current)}},[y,a]),r.jsxs(_L,{children:[r.jsxs(CL,{children:[r.jsx(jL,{children:r.jsx(ct,{mark:"circle",size:yL,tone:"auto",state:"active",coreGradient:f,"aria-label":"Ultron"})}),r.jsx(SL,{children:"Ultron"}),r.jsx(NL,{role:"status","aria-live":"polite",children:r.jsxs(LL,{children:[r.jsx(RL,{children:Bf[s]}),r.jsxs($L,{"aria-hidden":"true",children:[r.jsx("span",{children:"."}),r.jsx("span",{children:"."}),r.jsx("span",{children:"."})]})]},s)})]}),a?r.jsx(AL,{children:i},"deck"):b.length>0&&r.jsx(TL,{"aria-label":"Live event feed",children:b.map(M=>{const T=vL(M.event.capability);return r.jsx(IL,{"data-phase":M.phase,"aria-hidden":M.phase==="leaving"||void 0,children:r.jsx(EL,{children:r.jsxs(PL,{"data-outcome":M.resolved?M.outcome:"pending",children:[r.jsxs(zL,{children:[r.jsx(OL,{"aria-hidden":"true",children:r.jsx(T,{size:16})}),r.jsxs(DL,{children:[r.jsx(UL,{children:M.event.capability}),r.jsx(qL,{children:M.event.title})]})]}),r.jsx(BL,{children:M.resolved?M.outcome==="risk"?r.jsxs(r.Fragment,{children:[r.jsx(ct,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),r.jsx(FL,{children:"Risk detected"})]}):M.outcome==="action"?r.jsxs(r.Fragment,{children:[r.jsx(ct,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),r.jsx(HL,{children:"Action required"})]}):r.jsx(WL,{children:"No action needed"}):r.jsx(ct,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},M.key)})},"feed")]})}const _L=m.div`
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
`,Pu=Ne`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,CL=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${Pu} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,jL=m.div`
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
`,SL=m.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,NL=m.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,ML=Ne`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,LL=m.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${ML} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,RL=m.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,G2=Ne`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,$L=m.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${G2} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,TL=m.div`
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
  animation: ${Pu} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,AL=m.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  animation: ${Pu} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,IL=m.div`
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: scale(1);
  transition:
    grid-template-rows ${Ka}ms var(--ease-out, ease),
    opacity ${Ka}ms var(--ease-out, ease),
    transform ${Ka}ms var(--ease-out, ease);

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
    transition: opacity ${Ka}ms linear;
    &[data-phase='entering'],
    &[data-phase='leaving'] {
      transform: none;
    }
  }
`,EL=m.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,PL=m.div`
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
`,zL=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,OL=m.span`
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
`,DL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,BL=m.div`
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
    animation: ${G2} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;const FL=m.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,WL=m.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,HL=m.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,UL=m.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,qL=m.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,VL=5e3,GL=5,Bs=320,YL=t=>t.status==="needs_approval"||t.status==="recommended";function QL({threads:t,stageById:a,onAction:i,onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,pendingWorkflowIds:h,savedWorkflowIds:f,onReveal:v,onClose:x}){const[y]=g.useState(()=>t.filter(YL).map((T,E)=>({t:T,index:E})).sort((T,E)=>Ko[T.t.severity]-Ko[E.t.severity]||T.index-E.index).slice(0,GL).map(({t:T})=>T.id)),[b,k]=g.useState(1),[j,S]=g.useState(new Set),[C,_]=g.useState(new Set),$=g.useRef(new Map);g.useEffect(()=>{if(b>=y.length)return;const T=setTimeout(()=>k(E=>E+1),VL);return()=>clearTimeout(T)},[b,y.length]),g.useEffect(()=>{const T=E=>{E.key==="Escape"&&x()};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[x]),g.useEffect(()=>{const T=$.current;return()=>{T.forEach(E=>clearTimeout(E))}},[]);const R=y.findIndex(T=>!j.has(T));g.useEffect(()=>{if(y.length>0&&R===-1){const T=setTimeout(x,260);return()=>clearTimeout(T)}},[R,y.length,x]);const N=Math.max(b,R+1);g.useEffect(()=>{y.slice(0,N).forEach(T=>v==null?void 0:v(T))},[N]);const A=(T,E)=>{_(q=>new Set(q).add(T.id));const z=setTimeout(()=>{_(q=>{const G=new Set(q);return G.delete(T.id),G}),S(q=>new Set(q).add(T.id)),$.current.delete(T.id),i(T.id,E)},Bs);$.current.set(T.id,z)},M=y.length-j.size;return r.jsxs(KL,{role:"region","aria-label":"New cases",children:[r.jsxs(XL,{children:[r.jsx(Ot,{children:"Needs your decision"}),r.jsx(to,{children:M}),r.jsx(JL,{}),r.jsx(Re,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Dismiss (Esc)",onClick:x,children:r.jsx(gu,{size:16})})]}),r.jsx(ZL,{children:r.jsx(eR,{children:y.slice(0,N).map((T,E)=>{if(j.has(T))return null;const z=t.find(q=>q.id===T);return z?r.jsx(nR,{"data-exiting":C.has(T)||void 0,children:r.jsx(oM,{thread:z,stage:a[T]??0,expanded:E===R,onAction:(q,G)=>A(z,G),onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,saveIntent:h.includes(T),saved:f.includes(T)})},T):null})})})]})}const KL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex: 1;
  min-height: 0;
  width: 100%;
  /* The deck lives inside the landing Stage (which centers its text); reset to
     left so card titles / subtitles / prompts read as a normal left-aligned card. */
  text-align: left;
`,ZL=m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* Bottom dissolve so a long stack fades into the page foot as it scrolls. */
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
`,XL=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,JL=m.div`
  flex: 1;
`,eR=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,tR=Ne`
  from { opacity: 0; transform: translateY(var(--space-4)) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,nR=m.div`
  animation: ${tR} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  transition:
    opacity ${Bs}ms var(--ease-out, ease),
    transform ${Bs}ms var(--ease-out, ease);

  &[data-exiting] {
    opacity: 0;
    transform: translateY(calc(-1 * var(--space-3))) scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: opacity ${Bs}ms linear;
    &[data-exiting] { transform: none; }
  }
`,rR={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},Ff={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},oR=["new","working","done"],aR=280;function iR({threads:t,stageById:a,section:i,analyzedIds:s,outboundByThread:l,chatByThread:d,selectedId:h,onDecide:f,onAction:v,onCompleteRun:x,onRefinement:y,onSaveWorkflow:b,pendingWorkflowIds:k,onToggleSaveWorkflow:j,savedWorkflowIds:S,onSend:C,replyingIds:_,onStop:$,onClose:R,onDetectRisk:N,onRevealNew:A}){const[M,T]=g.useState(!1),E=()=>{M||(T(!0),window.setTimeout(()=>{T(!1),R()},aR))},[z,q]=g.useState(!1);g.useEffect(()=>{if(i!=="live"){q(!1);return}const B=ue=>{if(ue.key!=="t"&&ue.key!=="T"||ue.metaKey||ue.ctrlKey||ue.altKey)return;const me=ue.target instanceof Element?ue.target:null;me&&me.closest('input, textarea, [contenteditable="true"]')||q(pe=>!pe)};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[i]);const G=(B,ue)=>(B.t.status==="analyzing"?1:0)-(ue.t.status==="analyzing"?1:0)||Ko[B.t.severity]-Ko[ue.t.severity]||B.index-ue.index,X=t.map((B,ue)=>({t:B,index:ue})).filter(({t:B})=>rR[i].includes(B.status)).sort(G).map(({t:B})=>B.id),[Q,ne]=g.useState(()=>h??null),te=g.useRef({}),ce=g.useRef(null),oe=B=>{var ue;B==="Other"&&((ue=ce.current)==null||ue.focus()),y(B)},ie=g.useRef(null),Z=g.useRef(null),[W,H]=g.useState(null),I=g.useRef(void 0);g.useEffect(()=>{var B;if(I.current===void 0){I.current=h;return}!h||h===I.current||(I.current=h,ne(h),(B=te.current[h])==null||B.scrollIntoView({behavior:"smooth",block:"start"}))},[h]);const L=oR.includes(i),U=L?h&&X.includes(h)?h:X[0]??null:null;g.useEffect(()=>{var De;const B=ie.current,ue=Z.current;if(!B||!ue)return;const pe=((De=window.matchMedia)==null?void 0:De.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",ve=160;let _e=!0,je=B.scrollHeight;const $e=()=>{_e=B.scrollHeight-B.scrollTop-B.clientHeight<=ve};B.addEventListener("scroll",$e,{passive:!0});let Fe=0;const qe=()=>{Fe=performance.now()};B.addEventListener("pointerdown",qe,{passive:!0});const Ge=new ResizeObserver(()=>{const Qe=B.scrollHeight,Ye=performance.now()-Fe<500;Qe>je+1&&_e&&!Ye&&B.scrollTo({top:Qe,behavior:pe}),je=Qe});return Ge.observe(ue),()=>{B.removeEventListener("scroll",$e),B.removeEventListener("pointerdown",qe),Ge.disconnect()}},[U,i]),g.useEffect(()=>{if(!L||!U)return;const B=ie.current;if(!B)return;const ue=()=>B.scrollTo({top:B.scrollHeight,behavior:"auto"}),me=requestAnimationFrame(ue),pe=[80,240,480].map(ve=>window.setTimeout(ue,ve));return()=>{cancelAnimationFrame(me),pe.forEach(clearTimeout)}},[U,L]);const O=U?t.find(B=>B.id===U)??null:null,ee=!!O&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(O.status)||a2(O)),ae=ee&&O?O:null,K=!(ee&&O&&["needs_approval","recommended","unresolved","monitoring"].includes(O.status))||!!(O!=null&&O.analysisResult);return i==="live"?r.jsx(Wf,{$static:!0,children:r.jsx(kL,{onDetectRisk:N,deckActive:z,deck:z?r.jsx(QL,{threads:t,stageById:a,onAction:v,onRefinement:oe,onSaveWorkflow:b,onToggleSaveWorkflow:j,pendingWorkflowIds:k,savedWorkflowIds:S,onReveal:A,onClose:()=>q(!1)}):null})},"live"):r.jsxs(Wf,{$closing:M,children:[r.jsx(cR,{ref:ie,children:L?r.jsx(Hf,{ref:Z,children:U===null?r.jsx(Uf,{role:"status",children:Ff[i]}):(()=>{const B=t.find($e=>$e.id===U);if(!B)return null;const ue=B.status==="analyzing",me=B.status==="resolved"||B.status==="auto_resolved",pe=B.status==="in_progress",ve=B.status==="needs_approval"||B.status==="recommended",_e=B.status==="monitoring",je=B.status==="workflow_available";return r.jsxs(r.Fragment,{children:[r.jsx(fR,{children:r.jsx(Pf,{thread:B,stage:a[B.id]??0,expanded:pe?!1:K,detachActionable:ee,detachAnalyzing:ue,detachTrail:me||je,onToggle:()=>{},onClose:E,onDecide:f,onAction:v,onRefinement:oe,onSaveWorkflow:b},B.id)}),(ue||ve||pe||me||_e||je)&&r.jsx(uM,{thread:B,outbound:l[B.id]??[],chat:d[B.id]??[],replying:_.includes(B.id),analyzing:ue,footSlot:W,onCompleteRun:()=>x(B.id),saveWorkflowFlagged:k.includes(B.id)||S.includes(B.id),actionCard:ae&&ae.id===B.id?r.jsx(S2,{thread:ae,stage:a[ae.id]??0,onAction:v,onRefinement:oe,onSaveWorkflow:b,saveIntent:k.includes(ae.id),onToggleSaveWorkflow:j,saved:S.includes(ae.id),savedConversationally:(d[ae.id]??[]).some($e=>$e.kind==="workflow_saved"),onSend:$e=>C(ae.id,$e),replying:_.includes(ae.id),onStop:()=>$(ae.id)},`action-${ae.id}`):void 0},B.id)]})})()}):r.jsx(Hf,{ref:Z,children:X.length===0?r.jsx(Uf,{role:"status",children:Ff[i]}):X.map(B=>{const ue=t.find(me=>me.id===B);return ue?r.jsx(pR,{ref:me=>{te.current[B]=me},children:r.jsx(Pf,{thread:ue,stage:a[B]??0,expanded:Q===B,onToggle:()=>ne(me=>me===B?null:B),onDecide:f,onAction:v,onRefinement:y,onSaveWorkflow:b})},B):null})})}),L&&U&&O&&r.jsx(dR,{children:r.jsxs(uR,{children:[r.jsx(hR,{ref:H}),O.status==="analyzing"&&!s.includes(O.id)&&r.jsx(lM,{thread:O,onDecide:f}),r.jsx(j2,{ref:ce,onSend:B=>C(U,B),working:_.includes(U),onStop:()=>$(U),placeholder:kj(O.status,_.includes(U))},`composer-${U}`)]})})]},"feed")}const sR=Ne`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,lR=Ne`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,Wf=m.div`
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

  ${t=>!t.$static&&!t.$closing&&Ve`
    animation: ${lR} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${t=>t.$closing&&Ve`
    animation: ${sR} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,cR=m.div`
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
`,dR=m.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);
`,uR=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,hR=m.div`
  display: flex;
  &:empty { display: none; }
`,Hf=m.div`
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
`,pR=m.div`
  scroll-margin-top: var(--space-5);
`,fR=m.div`
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
`,Uf=m.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;function mR({messages:t,replying:a,onSend:i}){const[s,l]=g.useState(""),d=g.useRef(null);g.useEffect(()=>{var x;(x=d.current)==null||x.scrollIntoView({block:"end",behavior:"smooth"})},[t,a]);const h=s.trim().length>0&&!a,f=t.length===0,v=()=>{const x=s.trim();!x||a||(i(x),l(""))};return r.jsxs(gR,{children:[r.jsx(vR,{children:f?r.jsxs(xR,{children:[r.jsx(yR,{"aria-hidden":"true",children:r.jsx(ct,{mark:"circle",size:96,tone:"auto",state:"active","aria-label":"Ultron"})}),r.jsx(wR,{children:"New page"}),r.jsx(bR,{children:"Ask Ultron to set something up, look into a risk, or draft a change."})]}):r.jsxs(kR,{children:[t.map((x,y)=>r.jsx(qf,{"data-from":x.role,children:r.jsx(_R,{"data-from":x.role,children:x.text})},y)),a&&r.jsx(qf,{"data-from":"ultron",children:r.jsxs(jR,{"aria-label":"Ultron is replying",children:[r.jsx(Nd,{}),r.jsx(Nd,{}),r.jsx(Nd,{})]})}),r.jsx("div",{ref:d})]})}),r.jsx(SR,{children:r.jsxs(NR,{onSubmit:x=>{x.preventDefault(),v()},children:[r.jsx(MR,{rows:1,value:s,placeholder:"Ask Ultron anything…","aria-label":"Message Ultron",onChange:x=>l(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),v())}}),r.jsx(LR,{children:r.jsx(Xo,{state:h?"ready":"disabled-invalid",onSend:v})})]})})]})}const gR=m.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,vR=m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,xR=m.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) var(--space-6);
  text-align: center;
`,yR=m.span`
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
`,wR=m.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,bR=m.p`
  margin: 0;
  max-width: 420px;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,kR=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,qf=m.div`
  display: flex;
  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }
`,_R=m.div`
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
`,CR=Ne`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,jR=m.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) 0;
`,Nd=m.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${CR} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,SR=m.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  justify-content: center;
`,NR=m.form`
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
`,MR=m.textarea`
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
`,LR=m.div`
  flex-shrink: 0;
  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`,RR={"Shift Drop Recovery":{new:"Shift Replacement Needed",working:"Finding Shift Replacement",done:"Shift Replacement Found"},"Shift Release Recovery":{new:"Released Shift Needs Filling",working:"Filling Released Shift",done:"Released Shift Filled"},"Time-Off Coverage Check":{new:"Time-Off Decision Needed",working:"Checking Time-Off Coverage",done:"Time-Off Handled"},"Document Filing":{new:"Document Needs Filing",working:"Filing Document",done:"Document Filed"},"New Lead Screening":{new:"New Lead to Screen",working:"Screening New Lead",done:"Lead Screened"},"Shift Offer":{new:"Shift Ready to Offer",working:"Offering Shift",done:"Shift Offered"},"Candidate Onboarding":{new:"Onboarding to Start",working:"Onboarding Candidate",done:"Candidate Onboarded"},"Missed Clock-In":{new:"Missed Clock-In to Check",working:"Checking Missed Clock-In",done:"Clock-In Resolved"},"Informal Cancellation":{new:"Cancellation Needs Coverage",working:"Covering Cancellation",done:"Cancellation Covered"},"Bulk Fill":{new:"Shifts Need Filling",working:"Filling Shifts",done:"Shifts Filled"},"Open Timesheet":{new:"Timesheet Needs Fixing",working:"Fixing Timesheet",done:"Timesheet Fixed"},"Invoice Roll-Up":{new:"Charge Needs Billing",working:"Adding Charge to Invoice",done:"Charge Billed"},"Schedule Confirmation":{new:"Schedule Needs Confirming",working:"Confirming Schedule",done:"Schedule Confirmed"},"Birthday Greeting":{new:"Birthday to Send",working:"Sending Birthday Wish",done:"Birthday Sent"},"Scheduled Report":{new:"Report Needs Publishing",working:"Publishing Report",done:"Report Published"},"Clock-In Approval":{new:"Clock-In Needs Approval",working:"Approving Clock-In",done:"Clock-In Approved"},"Profile Update":{new:"Profile Needs Updating",working:"Updating Profile",done:"Profile Updated"},"Autonomous Fill":{new:"Auto-Fill Needs Confirming",working:"Confirming Auto-Fill",done:"Shift Auto-Filled"},"Invoice Reconciliation":{new:"Payment Needs Reconciling",working:"Reconciling Payment",done:"Payment Reconciled"},"Credential Lapse":{new:"Expired Credential to Fix",working:"Renewing Credential",done:"Credential Renewed"}};function Vf(t,a){const i=RR[t];return i?a==="done"?i.done:a==="new"?i.new:i.working:t}const Xd=32;function $R({onNew:t}){return r.jsxs(TR,{children:[r.jsx(AR,{"aria-hidden":"true",children:r.jsx(ct,{mark:"circle",size:Xd,tone:"auto",state:"active","aria-label":"Ultron"})}),r.jsx(IR,{children:"Ultron"}),r.jsx(ER,{role:"button",tabIndex:0,"aria-label":"New page",onClick:a=>{a.stopPropagation(),t==null||t()},onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),a.stopPropagation(),t==null||t())},children:r.jsx(oo,{size:16})})]})}const TR=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-width: 0;
  font-family: var(--font-sans);
`,AR=m.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: ${Xd}px;
  height: ${Xd}px;
`,IR=m.span`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,ER=m.span`
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
`,PR=45;function zR({text:t,className:a}){const[i,s]=g.useState(0);g.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){s(t.length);return}s(0);let h=0;const f=setInterval(()=>{h+=1,s(h),h>=t.length&&clearInterval(f)},PR);return()=>clearInterval(f)},[t]);const l=i>=t.length;return r.jsxs(OR,{className:a,children:[t.slice(0,i),!l&&r.jsx(BR,{"aria-hidden":"true",children:"|"})]})}const OR=m.span`
  white-space: nowrap;
`,DR=Ne`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,BR=m.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${DR} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,Md=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function FR(){const t=g.useMemo(()=>["All",...Array.from(new Set(Md.map(l=>l.tag)))],[]),[a,i]=g.useState("All"),s=a==="All"?Md:Md.filter(l=>l.tag===a);return r.jsx(WR,{children:r.jsxs(HR,{children:[r.jsxs(UR,{children:[r.jsx(ct,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),r.jsxs(qR,{children:[r.jsx(VR,{children:"Memory"}),r.jsx(GR,{children:"What Ultron has learned and carries between sessions."})]})]}),r.jsx(YR,{role:"tablist","aria-label":"Filter memories by category",children:t.map(l=>r.jsx(QR,{type:"button",role:"tab","aria-selected":a===l,$active:a===l,onClick:()=>i(l),children:l},l))}),r.jsx(KR,{children:s.map((l,d)=>r.jsx(ZR,{children:r.jsxs(XR,{children:[r.jsx(JR,{children:l.title}),r.jsx(e$,{children:l.detail})]})},d))})]})})}const WR=m.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,HR=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,UR=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,qR=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,VR=m.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,GR=m.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,YR=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,QR=m.button`
  flex-shrink: 0;
  padding: var(--space-1) var(--space-3);
  border: 1px solid ${t=>t.$active?"var(--color-content-primary)":"var(--color-border-opaque)"};
  border-radius: var(--radius-full);
  background: ${t=>t.$active?"var(--color-content-primary)":"var(--color-bg-primary)"};
  color: ${t=>t.$active?"var(--color-content-inverse)":"var(--color-content-secondary)"};
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: background var(--duration-fast, 120ms) var(--ease-out, ease),
              border-color var(--duration-fast, 120ms) var(--ease-out, ease),
              color var(--duration-fast, 120ms) var(--ease-out, ease);

  &:hover {
    border-color: ${t=>t.$active?"var(--color-content-primary)":"var(--color-content-tertiary)"};
  }
`,KR=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,ZR=m.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,XR=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,JR=m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,e$=m.span`
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
`;const Jd=[{id:"employees",label:"Employees",icon:r.jsx(Gr,{size:16})},{id:"shifts",label:"Shifts",icon:r.jsx(zn,{size:16})},{id:"locations",label:"Locations",icon:r.jsx(hu,{size:16})},{id:"timesheets",label:"Timesheets",icon:r.jsx(Yr,{size:16})},{id:"credentials",label:"Credentials",icon:r.jsx(ol,{size:16})}];m.div`
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
`;function t$({collectionId:t}){const a=Jd.find(i=>i.id===t)??Jd[0];return r.jsxs(n$,{children:[r.jsxs(r$,{children:[r.jsx(o$,{children:a.label}),r.jsx(to,{children:"Account database"})]}),r.jsxs(a$,{role:"status",children:[r.jsx(i$,{"aria-hidden":"true",children:r.jsx(W0,{size:24})}),r.jsxs(s$,{children:[a.label," — demo stub"]}),r.jsxs(l$,{children:["Connect a data source to browse ",a.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const n$=m.div`
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
`,r$=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,o$=m.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,a$=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,i$=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,s$=m.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,l$=m.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`,$s=72,c$=240,d$=640,u$=.13,Gf=.58;function Tt(t){const a=Math.sin(t*127.1+311.7)*43758.5453;return a-Math.floor(a)}function h$(t){return t=Math.max(0,Math.min(1,t)),t*t*(3-2*t)}function Yf(t,a,i,s){const l=getComputedStyle(a).getPropertyValue(i).trim();if(!l)return s;t.fillStyle="#000",t.fillStyle=l;const d=t.fillStyle;if(d.startsWith("#")){const f=d.slice(1),v=parseInt(f.length===3?f.split("").map(x=>x+x).join(""):f,16);return(v>>16&255)+","+(v>>8&255)+","+(v&255)}const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:s}const p$=t=>{const[a,i,s]=t.split(",").map(Number);return(.299*a+.587*i+.114*s)/255};function f$({links:t=0}){const a=g.useRef(null),i=g.useRef(0),s=g.useRef(t);return s.current=Math.max(0,Math.min(1,t)),g.useEffect(()=>{const l=a.current;if(!l)return;const d=l.getContext("2d");if(!d)return;const h=Math.min(2,window.devicePixelRatio||1);let f=0,v=0;const x=()=>{f=l.clientWidth,v=l.clientHeight,l.width=Math.max(2,Math.round(f*h)),l.height=Math.max(2,Math.round(v*h)),d.setTransform(h,0,0,h,0,0)};x();const y=new ResizeObserver(x);y.observe(l);const b=Yf(d,l,"--color-bg-primary","255,255,255"),k=p$(b)<.5,j=Yf(d,l,"--color-content-tertiary",k?"148,163,184":"71,85,105"),S=Array.from({length:$s},(A,M)=>{const T=M%3===0,E=T?1-.5*Math.pow(Tt(M*3.1),1.6):Tt(M*3.1),z=T?.5*Math.pow(Tt(M*5.7),1.6):Tt(M*5.7);return{bx:E,by:z,vx:(Tt(M*7.3)-.5)*.008,vy:(Tt(M*9.9)-.5)*.008,wA:6+Tt(M*4.7)*10,wS:.25+Tt(M*6.1)*.5,wP:Tt(M*8.2)*6.2832,r:.8+Tt(M*2.3)*1.6,twS:.8+Tt(M)*1.4,twP:Tt(M*11.4)*6.2832}}),C=(A,M)=>{const T=((A.bx+A.vx*M)%1+1)%1,E=((A.by+A.vy*M)%1+1)%1,z=T-.5,q=Math.abs(z)*2,G=q<1e-4?1:(Gf+(1-Gf)*q)/q;return{x:(.5+z*G)*f+Math.cos(M*A.wS+A.wP)*A.wA,y:E*v+Math.sin(M*A.wS*.8+A.wP)*A.wA}},_=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),$=A=>{i.current+=(s.current-i.current)*.04,Math.abs(i.current-s.current)<.001&&(i.current=s.current);const M=i.current;d.clearRect(0,0,f,v);const T=S.map(E=>C(E,A));if(M>.01){d.lineWidth=1,d.lineCap="round";for(let E=0;E<$s;E++)for(let z=E+1;z<$s;z++){if(Tt(E*97.7+z*13.3)>M*.5)continue;const G=T[E],X=T[z],Q=X.x-G.x,ne=X.y-G.y,te=Math.hypot(Q,ne),ce=Tt(E*5.1+z*23.9)<u$,oe=ce?d$:c$;if(te>oe||te<1)continue;const ie=Math.abs(Q)/te;if(ie<.55)continue;const Z=7+Tt(E*3.3+z*41.1)*6,W=_?.5:(A/Z+Tt(E*17.9+z*7.7))%1;let H=1,I=1;if(W>=.78)continue;W<.3?H=h$(W/.3):W>.62&&(I=1-(W-.62)/.16);const L=1-te/oe,U=ce?L:L*L,O=(k?.45:.34)*(ce?.62:1),ee=U*O*M*I*ie;if(ee<.01||H<.02)continue;const ae=G.x+Q*H,K=G.y+ne*H,B=d.createLinearGradient(G.x,G.y,ae,K);B.addColorStop(0,"rgba("+j+",0)"),B.addColorStop(1,"rgba("+j+","+ee+")"),d.strokeStyle=B,d.beginPath(),d.moveTo(G.x,G.y),d.lineTo(ae,K),d.stroke(),H<1&&(d.fillStyle="rgba("+j+","+Math.min(1,ee*2.4)+")",d.beginPath(),d.arc(ae,K,1.4,0,6.2832),d.fill())}}for(let E=0;E<$s;E++){const z=S[E],q=.35+.65*(.5+.5*Math.sin(A*z.twS+z.twP));d.fillStyle="rgba("+j+","+q*(k?.55:.42)+")",d.beginPath(),d.arc(T[E].x,T[E].y,z.r*(.7+.3*q),0,6.2832),d.fill()}};if(_)return i.current=s.current,$(1.15),()=>y.disconnect();$(1.15);let R=0;const N=A=>{$(A/1e3),R=requestAnimationFrame(N)};return R=requestAnimationFrame(N),()=>{cancelAnimationFrame(R),y.disconnect()}},[]),r.jsx(m$,{"aria-hidden":"true",children:r.jsx("canvas",{ref:a})})}const m$=m.div`
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
`,g$=m.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,v$=m.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    var(--glow-color, hsl(210 85% 62% / 0.85)) 0%,
    var(--glow-color, hsl(210 85% 62% / 0.85)) 35%,
    transparent 72%
  );
  filter: blur(32px);
  will-change: transform, opacity;
`,Qf=.085,Ts=380,x$=.14,y$=.32,w$=.06,b$=350,k$=9;function _$(){const t=g.useRef(null),a=g.useRef(null);return g.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})())return;const s=t.current,l=a.current;if(!s||!l)return;let d=null,h=null,f=-1/0,v=0,x=0,y=0;const b=S=>{const C=s.getBoundingClientRect(),_=d===null;d=S.clientX-C.left,h=S.clientY-C.top,f=S.timeStamp,_&&(v=d,x=h)};window.addEventListener("pointermove",b,{passive:!0});let k=0;const j=S=>{if(k=requestAnimationFrame(j),d===null||h===null)return;v+=(d-v)*Qf,x+=(h-x)*Qf;const C=S-f<b$?y$:x$;y+=(C-y)*w$;const _=Math.floor(S/1e3*k$)%360;l.style.transform=`translate(${v-Ts/2}px, ${x-Ts/2}px)`,l.style.opacity=y.toFixed(3),l.style.setProperty("--glow-color",`hsl(${_} 85% 62% / 0.85)`)};return k=requestAnimationFrame(j),()=>{cancelAnimationFrame(k),window.removeEventListener("pointermove",b)}},[]),r.jsx(g$,{ref:t,"aria-hidden":"true",children:r.jsx(v$,{ref:a,style:{width:Ts,height:Ts,opacity:0}})})}function C$({size:t=22,className:a}){return r.jsxs("svg",{width:t,height:t*(80/94),viewBox:"0 0 94 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:a,role:"img","aria-label":"Teambridge",children:[r.jsx("path",{d:"M66.4971 48.5203V58.6884C67.2261 59.1629 67.9007 59.5855 68.5508 59.9754L80.003 66.8496L84.2411 59.7409L72.789 52.8667C70.6209 51.5661 68.5073 50.1045 66.4998 48.523",fill:"currentColor"}),r.jsx("path",{d:"M80.0032 67.5995C79.8699 67.5995 79.7366 67.5641 79.6197 67.4932L68.1675 60.619C67.5065 60.2236 66.8292 59.7955 66.092 59.3183C65.8798 59.1792 65.752 58.9447 65.752 58.6911V48.5312C65.752 48.5121 65.752 48.493 65.752 48.4767C65.7764 48.0867 66.1001 47.7759 66.4973 47.7759C66.6823 47.7759 66.8509 47.844 66.9815 47.9558C68.9537 49.5101 71.0374 50.9471 73.17 52.2287L84.6222 59.1029C84.9758 59.3156 85.09 59.7737 84.8806 60.1309L80.6425 67.2396C80.5418 67.4086 80.3759 67.5341 80.1828 67.5804C80.1229 67.5968 80.0631 67.6022 80.0005 67.6022L80.0032 67.5995ZM67.2426 58.2821C67.8356 58.6639 68.3906 59.0102 68.9346 59.3347L79.7448 65.8244L83.2158 60L72.4029 53.5103C70.6375 52.4496 68.9074 51.288 67.2426 50.0391V58.2821Z",fill:"currentColor"}),r.jsx("path",{d:"M83.7788 39.1704C77.5032 35.1729 74.1628 32.7679 66.5081 23.396V36.4354C70.1124 39.7866 74.8184 43.3423 78.2785 45.6465L88.8656 52.0053L93.1554 44.8039L82.7125 38.5323L83.7788 39.1731V39.1704Z",fill:"currentColor"}),r.jsx("path",{d:"M88.8657 52.7632C88.7297 52.7632 88.5964 52.7277 88.4767 52.6568L77.8896 46.298C77.8896 46.298 77.8706 46.2871 77.8597 46.2789C74.6716 44.1575 69.8785 40.6045 65.9941 36.9942C65.839 36.8497 65.752 36.6479 65.752 36.438V23.3985C65.752 23.0795 65.9532 22.7932 66.2525 22.6841C66.5544 22.5751 66.889 22.6705 67.0903 22.9159C74.8049 32.356 78.08 34.6438 84.1761 38.5267L93.5418 44.152C93.9009 44.3674 94.0178 44.8337 93.8029 45.1909L89.5131 52.3923C89.4098 52.5641 89.2438 52.6895 89.048 52.7386C88.9881 52.755 88.9256 52.7604 88.863 52.7604L88.8657 52.7632ZM78.6812 45.0055L88.6073 50.9662L92.1218 45.0655L82.3263 39.1811C82.2501 39.1347 82.1848 39.0802 82.1332 39.0148C77.1252 35.7835 73.6787 33.1577 67.2644 25.4982V36.1026C71.0428 39.5765 75.7488 43.0504 78.6812 45.0028V45.0055Z",fill:"currentColor"}),r.jsx("path",{d:"M50.9436 78.6185H59.0608V31.6689C56.8846 36.9643 54.1562 42.0143 50.9436 46.6962V78.6185Z",fill:"currentColor"}),r.jsx("path",{d:"M59.0606 79.3953H50.9434C50.5381 79.3953 50.209 79.0463 50.209 78.6182V46.6959C50.209 46.5323 50.2579 46.3714 50.3504 46.2378C53.5277 41.605 56.2316 36.5986 58.3887 31.3578C58.5274 31.0197 58.8729 30.8342 59.2102 30.9079C59.5502 30.9842 59.7951 31.3005 59.7951 31.6686V78.6182C59.7951 79.049 59.4659 79.3953 59.0606 79.3953ZM51.6779 77.8383H58.3261V35.1998C56.4301 39.3036 54.2023 43.241 51.6779 46.9467V77.8383Z",fill:"currentColor"}),r.jsx("path",{d:"M34.4211 78.6186H43.0089V57.2571C40.3376 59.823 37.4515 62.2225 34.4211 64.3985V78.6186Z",fill:"currentColor"}),r.jsx("path",{d:"M42.4076 79.3954H34.3721C33.9722 79.3954 33.6458 79.0464 33.6458 78.6183V64.3982C33.6458 64.1473 33.7573 63.9128 33.9504 63.7656C36.7577 61.6114 39.4344 59.2337 41.9071 56.6951C42.1165 56.4796 42.4266 56.4169 42.6932 56.5424C42.9598 56.6651 43.1339 56.9459 43.1339 57.2568V78.6183C43.1339 79.0491 42.8102 79.3954 42.4076 79.3954ZM35.0984 77.8385H41.6813V59.0483C39.6003 61.0879 37.3942 63.0157 35.0984 64.7936V77.8357V77.8385Z",fill:"currentColor"}),r.jsx("path",{d:"M4.04653 54.0585L0.779541 46.6607C11.3395 41.9734 19.5355 35.8954 25.1446 28.5904C31.1726 20.74 34.2275 11.3818 34.2275 0.777344H42.2984C42.2984 24.5275 29.0699 42.9523 4.04653 54.0612V54.0585Z",fill:"currentColor"}),r.jsx("path",{d:"M4.04671 54.8354C3.95151 54.8354 3.8563 54.819 3.76653 54.7836C3.5734 54.71 3.42106 54.5627 3.33674 54.3718L0.0670215 46.9741C-0.107073 46.5815 0.0697417 46.1206 0.461455 45.9488C10.899 41.3161 18.9971 35.3144 24.5246 28.1158C30.4438 20.4044 33.4469 11.207 33.4469 0.77713C33.4469 0.3463 33.7951 0 34.2222 0H42.2931C42.7229 0 43.0684 0.349027 43.0684 0.77713C43.0684 24.86 29.6821 43.5302 4.3541 54.7727C4.25345 54.8163 4.14736 54.8381 4.04127 54.8381L4.04671 54.8354ZM1.80253 47.0532L4.44115 53.0303C28.4308 42.1477 41.2322 24.3746 41.5151 1.55426H34.9947C34.8479 12.0169 31.7414 21.2688 25.7569 29.0647C20.194 36.3097 12.1367 42.3577 1.79981 47.0559L1.80253 47.0532Z",fill:"currentColor"}),r.jsx("path",{d:"M10.7113 68.821L7.38721 61.4478C19.4514 55.9833 30.4221 47.1595 38.2781 36.6042C46.6047 25.4189 51.0033 13.0285 51.0033 0.7771H59.0743C59.0743 14.7873 54.1207 28.8492 44.7468 41.4442C36.0856 53.0793 23.9996 62.803 10.7113 68.821Z",fill:"currentColor"}),r.jsx("path",{d:"M10.7116 69.5981C10.6191 69.5981 10.5266 69.5817 10.4368 69.549C10.2437 69.4754 10.0887 69.3309 10.0043 69.1427L6.6802 61.7695C6.50339 61.3769 6.67748 60.9161 7.0692 60.7415C19.0164 55.3289 29.8783 46.595 37.6582 36.1433C45.8841 25.0944 50.2311 12.8649 50.2311 0.779816C50.2311 0.348986 50.5792 0.00268555 51.0063 0.00268555H59.0772C59.507 0.00268555 59.8525 0.351712 59.8525 0.779816C59.8525 14.959 54.8446 29.1819 45.37 41.9132C36.6326 53.6519 24.4379 63.4629 11.0299 69.5354C10.9292 69.5817 10.8204 69.6036 10.7116 69.6036V69.5981ZM8.41299 61.8322L11.0979 67.7875C23.9917 61.7995 35.6969 52.3022 44.1269 40.9779C53.226 28.7538 58.117 15.139 58.2965 1.55422H51.7761C51.5939 13.7211 47.1518 25.9861 38.9013 37.0704C31.1215 47.5249 20.3167 56.2942 8.41299 61.8322Z",fill:"currentColor"})]})}const ui=Ve`
  background: color-mix(in srgb, var(--color-bg-primary) 50%, transparent);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid color-mix(in srgb, var(--color-content-primary) 12%, transparent);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 45%, transparent),
    var(--shadow-below-low);
`,Y2=Ve`
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
`;const j$="/Ultron_Onboarding/assets/levis-stadium-CO6biSRl.webp",S$="data:image/webp;base64,UklGRhALAABXRUJQVlA4WAoAAAAQAAAA0gEAVwAAQUxQSPwIAAABsFVrb9jaliAYgiAEgiGEwTaDbQYxg4aByyCLgSAEgiAYwv/QNpblrN67n05ETAD9L7nkx6EKACpHWZn+9YYsDd1njf9yosBa//I/miQYWvn/DSHmepyqqnI81uXGeE3lUV8fJcXFVxQM38aEJZVHPURE6qOsy42FJZVaD5FaS47LzS0ppVRKKTmlGC6FTdCrNQ4JzBzMeIkxshHno6G3SYlewgMedTEKcTsa+uURRzAzm4UlxrhYhVwVve1IPCDVWqtBqLXW9UOq10u8duC6Lp+iwFYTW20N75uq6rlcCPFxNryNBmETWGuNHqLC6WYQsjSYa11s+MT7pq/bFc7S8PawCFlgXaPZEwAMGADKhyd6tfIF7YC+iwJ7TTaMXvnAj4aLtYsfDUM1DfsLv8LXQhaMlmgh6I0fkuAqd/HWMFLjfQCobIVIRCwYq+wB8YUrrveEDeM1jXnAs/IF3ho8Vu47u+qbqLjeEzYMr3wjULY6iGLD8M3DTkR/GkZEhUvlARW+ld+FCq+6dmlXC0ThQG/H3waHuk7U0uddX6DBCLzB48OBEv1F97UH3G5mFZ5bTUxv/zY43kYhEitGhANOt3mUruYXFKsGn2cYhvgHI/iEY2GbDY5bCfSZxRO2UTs3jGCF2+0WKL20YOT2DMMEI1jhWtlig+M90PWkjvBnEBpGLA2Ot1sgAYA8F2SY6SdWOFfuW+A4Uzero8aDTOnj0uB6u4X4UifDYx5WuFfuCeookSGrH8il09XS4Hy9g/ByzoZ1GsGEZ+h4wG8mU25+kK6IJ1Z4b3wD1ADodI0n2TDl4xrDbyHj7KiFORT+5Q5wCzjmYEy6XjrHqF5RMlc/yFNsmHGdj19kPkRv+4vO0sKFBPO2JyYiCnHXN6tddnTOwJhS50sv+w2It0JEfzFtuXBaaQ50NT6BSvbBEeIEOgfSdPoSbwDRH+s8jT9EGJdAvaw8gNTR7i9hUu2K/WnQBgBKdyD+NkxcPlQbXci5OGr+dBbEHmuzeOA13QKiO52phXfNRJkmOfe8xpiKjEB01YhWTCv+Wv0seLvTPexOzppTSilQwtT5zQpLZZpCS6DP/ByQfbRaUkopEB0DJDHRktSsBXf9O91ECw4kB/osc8mbapJohpaok9Xsx0ErkT4zzDXSx2yF1FH7j1ESyUmTPaVUZADiMI10lTFS8hpjfuoI8ItaCE14HoG6uVnpuD3Q1WSmTBeTVe2gfh4jkS6O0RzoPWc120cp0+U0QCJ9TDogExHDcp0hk2W2QhhV6PphxnR5N1J3Lb7uLy2Qkz3QVT6tdFSk64dZy3SVn3Y/RBQtlG6zWS2DKnU2q0rXQ7MBe1N6DQ0AipNCvWKEMKZRZ7NqC3UWs0ZE2eLnPopVGpQ6FljHDnoarXNQfmnsYqfuoEbrmLNjgfVC3bsVmGi3yPcRrcqg2JHMQk82ypOQAMDhQbmPolEeIx2rVSHD02olOizWKcL6OE7Vpqc8Eo+qrnYz6k1GdZb4guggkaXYVE/FSMkyWmUisYj+QhZ0nhsP+XF1mEmvGv3MQsfL6YBNoo2MqR1Po2RCYrTfAz8aLCsPOF2JmdNzGm4AkIedZNtM1JMYsU00qkbJV9gajNtmp4OWDp1Lp6Hy0sKoH6Pjlk4ybjY/RtkVKwYeq1UbxB3tlwoKAI9RxWg3gSe1EavTRoyqp9gwtFnBFX4pWl8Qpyi/ydPsaaGOVszZviGSFxm0/yKn1WG2W4DdcJtEB8UvIb4gjfkx2k2ap9OmWYlZMiluFJOKK53rnIn2Fw1DmpGYqCexQTSC2WJyetnw9chUoQFAGYJoEmAqnp5Gu00yqkTBBNEH668gc+0fUq21GoRaa10/pFrr4xqlWmt9jKkmyeZnzE9HMWrBRI0KEYmJ+Ei4qbXjOVf8ML0d2CCoTRkjHckID4u/MF6JaDdBdnHeVeooUwndnhg8YLt6WqyQ+5ZmtRBRtGnsIGCkaruNZBboNx2ArWuD8TLm7KBmhT89i8KaXpsJzjAuDjiYiJbnAHXFZuuXgO1aeMC40RjtETNs1/42WMubYoM6rtgVep9nyR3UrORbwMmfQlZY//jKdjj5UxTYlzfBCHXYbrbT532S0nNY4Y9VfOj+uwCSI3PMtcE++eIBgOS48JoFI5c3JEY4edBh1fhCaFbNVzZrq0XYTgAt/DIeeRB6SEZ4VHofraDLGLH6oau7FQbtPcEMqHwtrA/B+/RtCDnLc6UPJFbANuSwKpeyWRhTe0jsAClrZF5iKlVxVb6N5C20qfgT20HTgKfVfimZsa84wj58F0rDuIfKTJUuFjtAotluJZfqPdA5Qf4ukr/QJuIrQQcAkoySFfiKmi3O0gTyVSj5ozJPoctLGwHoxhaLmVzYYB7HSB+JP4SbaXOlGYLOouEa5TEAJC9d1Kxw8JvwwG3ECcrNYGqlGSjOEqm3jAKgNS3XnmbQLfKyNQxM3mj3J18Ee1gMaJ+jUP9z3GuTo6QY+SXaOfQXTneIX0MhD9GCzhmELJ8uLp4PovP3IG7uyrdwkIvFhNWfBhMqrpSJ0i9CS/PWvgQNPtiEWL0pk3FxJIGISH4RWpozxK9AmSYiVl8nk/miXjK95TbL+uZpVY1oUWf7N3AyTUWsnp6BBvLTxRnpY54lTkGsvs4vYA/kJVgR7X4yDWYd1jJdLR5Od7sZhaenk3+9lqnfjgYm9SELjU86pJVA18uwltmCxxQ7oqReWqF7tVIdUgP5aSOIdwctk8/4NJMcqDu3McJEzYDG5BFERT20EuhXEH7aSSRTMxlCxM9BrQRyG9LR+qQwmfJzgEQiIuk7B8UxxEVHyRrods2I+KkWbY9kvdu0dRARp9NOInlf1v0QbWiqR80xkH0UI4n0lrWnre8WtREan44BUpjueAARrU+9pnukoRzjmq6ucWFyyelofVpToFvncva0mgJd5Bjjml5jjBzoMy8xpssxciCXYX2eBlpToJseQ0Qcc6m11pKWQDe+xLxXeVv3vAb6DUPMexURqXtemX7BEFOp8rbWkpZANz7s3+x//vtvYOmQU/VCU1U5dv6nA1ZQOCDuAQAAMB4AnQEq0wFYAD5tMJVGpCMiISzoKIANiWlu4MED+AZb5tn4a/QD+OwQD8AP0A/gGqAfgB+gH8AgQD8ALru44Gk8c/wD8AP0T/K/v8HiWAX0iEE98qOfuWHCqjQxmpjzRLZ5962muboXFX52oUTGV1ciNXu060DOJIVOG9dw8ak1a1yOcrKo4AFxoSGMLWO0Fk7gQAJYuoxXP36alwbL/FKXImWQqIZ4zPKGBfH4adYxeHx+xPLmFa69hMWt8WYL/ltn1DhtFSRna9zrTa0WoHDmpQVfwUF5auPIHcxbukX5BRT98xsX2MXmM2sY1rJgdZMDrndfut50gAD9MmI1Dqqzrs45xv//9iPejJp33ezzf/1F9YlvDu1v3VM+T//+xIHlLQ5f9QtMGSJ4DqAAyAdppzCQC5xQeJJZhNBdJxNsMCk1ftYw0Gyz/+yj6BhBcJw+iAui03a9WmTU5ile6HD5HwXTf4GUpf//2iZ0iqIqNr4Gv2kllcwkmHWJkzT/gUf5DU4SnQp8CscxcTPP7+8mqyihLzMZZR6CH9EDyyD4E8THwK/31qcrWlu6Da8Ve4PgbuB26fY0XwMNh6CD+BpmWV+CbaCB23Q1/+pGqTcSIf7r2e8C4AFKMRH8CeDr5sE18RE4ciTEIWQAAAA=",N$="/Ultron_Onboarding/assets/florida-panthers-CzKArKmm.webp",M$="/Ultron_Onboarding/assets/express-healthcare-CyWzv_HP.webp",L$="/Ultron_Onboarding/assets/modsquad-CN5zaz5-.png",R$="/Ultron_Onboarding/assets/titan-medical-group-CzUHaHlx.webp",$$="/Ultron_Onboarding/assets/united-staffing-solutions-CqTdN2IS.webp",T$=560,Q2=320,oi="cubic-bezier(0.22, 1, 0.36, 1)",K2=140,Va=[{key:"pay",prompt:"How are your workers paid?",sub:"So I turn on pay the right way from the start.",options:[{id:"w2",icon:uu,title:"W-2",caption:"Employees on your payroll."},{id:"1099",icon:mu,title:"1099",caption:"Independent contractors."},{id:"both",icon:q0,title:"Both",caption:"A mix of W-2 and 1099."}]},{key:"billing",prompt:"How do you bill clients?",sub:"So I handle billing the way you actually work.",options:[{id:"hourly",icon:zn,title:"Hourly",caption:"Per hour worked."},{id:"month",icon:V0,title:"By month",caption:"A flat monthly rate."},{id:"post",icon:rm,title:"By post",caption:"Per site or position covered."}]},{key:"worksite",prompt:"Where does your team work?",sub:"So I set up your sites and scheduling to match.",options:[{id:"one",icon:Hs,title:"One location",caption:"A single site."},{id:"multi",icon:pu,title:"Multiple locations",caption:"Several of your own sites."},{id:"client",icon:hu,title:"Client sites",caption:"Out at client locations."}]}];function A$({onComplete:t}){const[a,i]=g.useState("landing"),[s,l]=g.useState({}),[d,h]=g.useState(!1),[f,v]=g.useState(!1),x=ra(),y=g.useRef(null),b=g.useCallback(A=>{y.current===null&&(v(!0),y.current=window.setTimeout(()=>{A(),v(!1),y.current=null},x?0:Q2))},[x]);g.useEffect(()=>()=>{y.current!==null&&window.clearTimeout(y.current)},[]);const k=()=>b(()=>i("workplace")),j=A=>{l(M=>({...M,...A})),h(!0),b(()=>i("loading"))},S=A=>{l(M=>({...M,...A})),b(()=>i("questions"))},C=A=>{l(M=>({...M,...A})),b(()=>i("roster"))},_=A=>{A&&l(M=>({...M,rosterFile:A})),b(()=>i("schedule"))},$=A=>t({...s,...A?{scheduleFile:A}:{}}),R=d?1:a==="landing"?0:.4,N=a==="roster"||a==="schedule"?2:d?1:0;return r.jsxs(eT,{children:[r.jsx(f$,{links:R}),r.jsx(_$,{}),r.jsx(tT,{children:r.jsx(C$,{size:22})}),r.jsx(nT,{children:r.jsxs(rT,{children:[a!=="landing"&&r.jsx(oT,{children:r.jsx(X2,{children:r.jsx(ct,{mark:"circle",size:K2,tone:"auto",state:"active",streamCount:N,"aria-label":"Ultron"})})}),r.jsxs(iT,{$exiting:f,children:[a==="landing"&&r.jsx(F$,{onNext:k}),a==="workplace"&&r.jsx(hi,{children:r.jsx(U$,{onAnswer:j})}),a==="loading"&&(s.companyWebsite||s.failedWebsite||s.noWebsite)&&r.jsx(q$,{website:s.companyWebsite,failedWebsite:s.failedWebsite,onDone:S}),a==="questions"&&r.jsx(Q$,{onComplete:C}),a==="roster"&&r.jsx(Xf,{kind:"roster",onDone:_}),a==="schedule"&&r.jsx(Xf,{kind:"schedule",onDone:$})]})]})})]})}const I$="Lead the work that matters.",E$="Show us your company and we'll set up the work.",P$=41e3,Kf=[{name:"Levi's Stadium",src:j$},{name:"ProCare HR",src:S$},{name:"Florida Panthers",src:N$},{name:"Express Healthcare",src:M$},{name:"ModSquad",src:L$},{name:"Titan Medical Group",src:R$},{name:"United Staffing Solutions",src:$$}],Do={quote:"Ultron turned three days of scheduling into ten minutes. It just handles the busywork so my managers don't have to.",name:"Dana Okafor",role:"Director of Operations",org:"Meridian Care",avatarColor:"purple"};function z$(){return r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[r.jsx("path",{fill:"#4285F4",d:"M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"}),r.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"}),r.jsx("path",{fill:"#FBBC05",d:"M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9 9 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"}),r.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.346l2.582-2.581C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"})]})}function O$(){return r.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[r.jsx("rect",{x:"1",y:"1",width:"7.2",height:"7.2",fill:"#F25022"}),r.jsx("rect",{x:"9.8",y:"1",width:"7.2",height:"7.2",fill:"#7FBA00"}),r.jsx("rect",{x:"1",y:"9.8",width:"7.2",height:"7.2",fill:"#00A4EF"}),r.jsx("rect",{x:"9.8",y:"9.8",width:"7.2",height:"7.2",fill:"#FFB900"})]})}function D$(){return r.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true",children:r.jsx("path",{fill:"currentColor",d:"M16.365 1.43c0 1.14-.42 2.2-1.11 2.98-.75.87-1.98 1.54-3.13 1.45-.14-1.12.4-2.29 1.06-3.03.73-.83 2.02-1.44 3.18-1.4zM20.44 17.03c-.56 1.29-1.24 2.57-2.31 3.62-.9.88-1.99 1.98-3.4 1.99-1.36.01-1.71-.9-3.56-.89-1.85.01-2.24.91-3.6.9-1.41-.01-2.44-1-3.34-1.88-2.5-2.47-4.4-6.98-1.83-10.13.9-1.11 2.35-1.81 3.87-1.83 1.42-.02 2.76.96 3.56.96.8 0 2.44-1.18 4.11-1.01.7.03 2.66.28 3.92 2.13-3.4 2.09-2.86 6.72.58 8.04z"})})}const B$=[{id:"google",label:"Continue with Google",mark:z$},{id:"microsoft",label:"Continue with Microsoft",mark:O$},{id:"apple",label:"Continue with Apple",mark:D$}];function Zf(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.trim())}function F$({onNext:t}){const[a,i]=g.useState(!1),[s,l]=g.useState(""),d=ra();return g.useEffect(()=>{const h=window.setTimeout(()=>i(!0),d?0:500);return()=>window.clearTimeout(h)},[d]),r.jsxs(sT,{children:[r.jsx(lT,{children:r.jsxs(cT,{children:[r.jsx(X2,{children:r.jsx(ct,{mark:"circle",size:K2,tone:"auto",state:"active",streamCount:0,"aria-label":"Ultron"})}),r.jsx(BT,{children:I$}),a&&r.jsxs(dT,{children:[r.jsx(FT,{children:E$}),r.jsxs(uT,{"aria-label":"Create your account",children:[r.jsx(hT,{children:B$.map(h=>{const f=h.mark;return r.jsx(pT,{variant:"secondary",size:"lg",type:"button",leadingArtwork:r.jsx(f,{}),onClick:t,children:h.label},h.id)})}),r.jsx(fT,{"aria-hidden":"true",children:r.jsx(mT,{children:"or sign up with email"})}),r.jsxs(gT,{onSubmit:h=>{h.preventDefault(),Zf(s)&&t()},children:[r.jsx(vT,{children:r.jsx(xT,{"aria-label":"Work email",placeholder:"you@company.com",leadingIcon:r.jsx(K0,{size:16}),value:s,onChange:h=>l(h.target.value)})}),r.jsx(yT,{variant:"primary",size:"md",type:"submit",iconOnly:!0,"aria-label":"Continue",disabled:!Zf(s),children:r.jsx(P0,{size:16})})]}),r.jsx(wT,{children:"Creating an account means you agree to Teambridge's Terms and Privacy Policy."})]})]})]})}),a&&r.jsx(W$,{})]})}function W$(){return r.jsx(bT,{children:r.jsxs(kT,{children:[r.jsx(H$,{}),r.jsxs(IT,{children:[r.jsx(ET,{children:`“${Do.quote}”`}),r.jsxs(PT,{children:[r.jsx(jn,{name:Do.name,color:Do.avatarColor,size:"sm"}),r.jsxs(zT,{children:[r.jsx(OT,{children:Do.name}),r.jsx(DT,{children:`${Do.role} · ${Do.org}`})]})]})]}),r.jsxs(RT,{children:[r.jsx($T,{children:"Trusted by frontline operators"}),r.jsxs(AT,{"aria-label":"Operators using Teambridge",children:[r.jsx(Jf,{children:Kf.map(t=>r.jsx(e0,{src:t.src,alt:t.name,loading:"lazy"},t.name))}),r.jsx(Jf,{"aria-hidden":"true",children:Kf.map(t=>r.jsx(e0,{src:t.src,alt:"",loading:"lazy"},`${t.name}-dup`))})]})]})]})})}function H$(){const t=J$(P$,1600);return r.jsxs(_T,{children:[r.jsxs(CT,{children:[r.jsx(ST,{"aria-hidden":"true"}),r.jsx(NT,{children:"Ultron Index · Live"})]}),r.jsx(MT,{children:t.toLocaleString("en-US")}),r.jsx(LT,{children:"pieces of work Ultron performed this week"})]})}function U$({onAnswer:t}){const[a,i]=g.useState(""),s=a.trim().length>0,l=()=>{const d=a.trim();d&&t(Z$(d)?{companyWebsite:d}:{failedWebsite:d})};return r.jsxs(r.Fragment,{children:[r.jsx(pi,{children:"Where do you work?"}),r.jsx(UT,{children:"Paste your company website and I'll get a head start on turning things on."}),r.jsx(eg,{onSubmit:d=>{d.preventDefault(),l()},children:r.jsxs(tg,{children:[r.jsx(dA,{"aria-hidden":"true",children:r.jsx(em,{size:18})}),r.jsx(ng,{rows:1,value:a,placeholder:"yourcompany.com","aria-label":"Company website",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),l())}}),r.jsx(rg,{children:r.jsx(Xo,{state:s?"ready":"disabled-invalid",onSend:l})})]})}),r.jsx(og,{children:r.jsx(ag,{type:"button",onClick:()=>t({noWebsite:!0}),children:"No website? Pick a workforce instead."})})]})}const Ld=["Turning on scheduling","Setting up pay","Activating compliance","Handing off the busywork"],Z2=820;function q$({website:t,failedWebsite:a,onDone:i}){return t?r.jsx(V$,{website:t,onDone:i}):r.jsx(Y$,{failedWebsite:a,onDone:i})}function V$({website:t,onDone:a}){const i=ra(),{name:s}=X$(t),[l,d]=g.useState(1),[h,f]=g.useState(!1);g.useEffect(()=>{if(h){const b=window.setTimeout(()=>a({}),3e3);return()=>window.clearTimeout(b)}const y=window.setTimeout(()=>l>=Ld.length?f(!0):d(b=>b+1),i?140:Z2);return()=>window.clearTimeout(y)},[l,h,i]);const v=h?1:(l-.35)/Ld.length,x=h?"All set.":Ld[l-1];return r.jsxs(hi,{children:[r.jsx(pi,{children:`Turning on ${s}`}),r.jsx(fi,{children:"Hang tight — I'm getting your workspace ready."}),r.jsxs(XT,{role:"status","aria-live":"polite",children:[r.jsx(JT,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(v*100),children:r.jsx(eA,{style:{width:`${v*100}%`},$working:!h})}),r.jsx(tA,{$working:!h,children:x},x)]})]})}const G$=[{icon:tm,label:"Travel nurses"},{icon:du,label:"Event staff"},{icon:iu,label:"Security guards"},{icon:G0,label:"Warehouse temps"}];function Y$({failedWebsite:t,onDone:a}){const[i,s]=g.useState(""),l=i.trim().length>0,d=()=>{const h=i.trim();h&&a({workforceType:h})};return r.jsxs(hi,{children:[t&&r.jsx(nA,{children:"No problem — let's set it up together."}),r.jsx(pi,{children:"What kind of workforce are you running?"}),r.jsx(fi,{children:"Say it in your own words — or grab one of these."}),r.jsx(qT,{children:G$.map(({icon:h,label:f})=>r.jsxs(VT,{type:"button",onClick:()=>a({workforceType:f}),children:[r.jsx(h,{size:16}),f]},f))}),r.jsx(eg,{onSubmit:h=>{h.preventDefault(),d()},children:r.jsxs(tg,{children:[r.jsx(ng,{rows:1,value:i,placeholder:"e.g. home-care aides across three cities","aria-label":"Describe your workforce",onChange:h=>s(h.target.value),onKeyDown:h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),d())}}),r.jsx(rg,{children:r.jsx(Xo,{state:l?"ready":"disabled-invalid",onSend:d})})]})})]})}function Q$({onComplete:t}){const a=ra(),[i,s]=g.useState(0),l=g.useRef({}),d=Va[i],h=f=>{l.current={...l.current,[d.key]:f.title};const v=i+1;v>=Va.length?t(l.current):s(v)};return r.jsxs(hi,{children:[r.jsx(oA,{role:"progressbar","aria-valuemin":1,"aria-valuemax":Va.length,"aria-valuenow":i+1,"aria-label":`Question ${i+1} of ${Va.length}`,children:Va.map((f,v)=>r.jsx(aA,{"data-filled":v<=i||void 0},f.key))}),r.jsx(pi,{children:d.prompt}),r.jsx(fi,{children:d.sub}),r.jsx(iA,{role:"radiogroup","aria-label":d.prompt,children:d.options.map((f,v)=>{const x=f.icon;return r.jsxs(sA,{type:"button",role:"radio","aria-checked":!1,style:{animationDelay:a?"0ms":`${v*70}ms`},onClick:()=>h(f),children:[r.jsx(J2,{"aria-hidden":"true",children:r.jsx(x,{size:20})}),r.jsxs(lA,{children:[r.jsx(GT,{children:f.title}),r.jsx(YT,{children:f.caption})]})]},f.id)})})]},d.key)}const K$={roster:{prompt:"Upload your roster",sub:"Drop in your team roster and I'll bring your people in for you.",title:"Choose your roster or drag & drop it here.",description:"Any spreadsheet or document works.",accept:".csv,.xlsx,.xls,.pdf"},schedule:{prompt:"Upload your schedule",sub:"Drop in your current schedule and I'll turn it into shifts for you.",title:"Choose your schedule or drag & drop it here.",description:"Any spreadsheet or document works.",accept:".csv,.xlsx,.xls,.pdf"}};function Xf({kind:t,onDone:a}){const i=K$[t],s=ra(),[l,d]=g.useState(null),h=g.useRef(!1),f=v=>{h.current||(h.current=!0,d({name:v.name,type:v.type}),window.setTimeout(()=>a({name:v.name}),s?250:1100))};return r.jsxs(hi,{children:[r.jsx(pi,{children:i.prompt}),r.jsx(fi,{children:i.sub}),r.jsx(rA,{children:r.jsx(um,{variant:"area",accept:i.accept,state:l?"complete":"empty",file:l,title:i.title,description:i.description,onFileSelect:f})}),r.jsx(og,{children:r.jsx(ag,{type:"button",onClick:()=>a(null),children:"Skip for now"})})]},t)}function Z$(t){const a=t.trim().replace(/\s+/g,"");if(!a)return!1;const i=/^https?:\/\//i.test(a)?a:`https://${a}`;let s;try{s=new URL(i).hostname}catch{return!1}return/^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(s)}function X$(t){const a=t.replace(/\s+/g,""),i=/^https?:\/\//i.test(a)?a:`https://${a}`;let s=a;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),{name:(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s,host:s}}function J$(t,a){const i=ra(),[s,l]=g.useState(i?t:0);return g.useEffect(()=>{if(i){l(t);return}let d=0,h=null;const f=v=>{h===null&&(h=v);const x=Math.min(1,(v-h)/a),y=1-Math.pow(1-x,3);l(Math.round(t*y)),x<1&&(d=window.requestAnimationFrame(f))};return d=window.requestAnimationFrame(f),()=>window.cancelAnimationFrame(d)},[t,a,i]),s}function ra(){const[t,a]=g.useState(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}});return g.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return}const s=d=>a(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),t}const eT=m.div`
  /* Anchors the ambient backdrop layer, which fills the frame behind Scroll. */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`,tT=m.div`
  position: absolute;
  top: var(--space-5);
  left: var(--space-5);
  z-index: 2;
  width: calc(var(--space-8) + var(--space-1));
  height: calc(var(--space-8) + var(--space-1));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-primary);
`,nT=m.main`
  /* Above the backdrop layer. */
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  /* The augment canvas fills the frame as a fixed two-column split — its panes
     scroll internally, so the frame itself doesn't scroll. */
  overflow-y: ${t=>t.$augment?"hidden":"auto"};
  /* When a turn is snapped to the top (see the scroll effect), stop below the
     sticky build header rather than tucking under it — plus an 8px breath so the
     snapped turn sits a touch below the header edge, not flush against it. */
  scroll-padding-top: calc(var(--space-20) + var(--space-2));
  display: flex;
  flex-direction: column;
`,rT=m.div`
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
  padding: ${t=>t.$build?"var(--space-8)":"var(--space-24)"} var(--space-6);
  padding-bottom: var(--space-24);

  /* The augment canvas fills the frame edge-to-edge (no centered column, no
     padding) so its two panes can carry their own chrome. */
  ${t=>t.$augment&&Ve`
      min-height: 0;
      flex: 1;
      flex-shrink: 1;
      gap: 0;
      padding: 0;
      align-items: stretch;
    `}
`,oT=m.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`,X2=m.span`
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
`,aT=Ne`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-6px); }
`,iT=m.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${t=>t.$exiting&&Ve`
      animation: ${aT} ${Q2}ms var(--ease-in) forwards;
    `}

  /* Augment canvas: stretch to fill the frame so the two-column split owns the
     whole height, with its panes scrolling internally. */
  ${t=>t.$augment&&Ve`
      flex: 1;
      min-height: 0;
      align-items: stretch;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,sT=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  width: 100%;
`,lT=m.div`
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
`,cT=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-5);
  width: 100%;
  max-width: 400px;
`,zu=Ne`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,dT=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  width: 100%;
  animation: ${zu} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,uT=m.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-4);
  width: 100%;
  max-width: 360px;
`,hT=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,pT=m(Re)`
  && {
    width: 100%;
    ${ui}
  }
`,fT=m.div`
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
`,mT=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,gT=m.form`
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  width: 100%;
`,vT=m.div`
  flex: 1;
  min-width: 0;
`,xT=m(fm)`
  && {
    ${ui}
  }
  && input {
    background: transparent;
  }
`,yT=m(Re)`
  && {
    flex-shrink: 0;
    width: var(--space-10);
    height: var(--space-10);
  }
`,wT=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  text-align: center;
`,bT=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Frosted-glass wrapper: a translucent tint of the surface (theme-aware via
     color-mix on the semantic token) plus a backdrop blur, so the ambient
     particles show through softly. */
  padding: var(--space-8);
  background: color-mix(in srgb, var(--color-bg-primary) 72%, transparent);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  border: 1px solid var(--color-border-transparent);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-md);
  animation: ${zu} var(--duration-slow) var(--ease-out) both;

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
  }

  /* Narrow: an ordinary card in the stacked flow. */
  @media (max-width: 800px) {
    width: 100%;
    max-width: 400px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,kT=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  width: 100%;
  max-width: 460px;
`,_T=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,CT=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,jT=Ne`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.35; transform: scale(0.8); }
`,ST=m.span`
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-success-fill);
  flex-shrink: 0;
  animation: ${jT} 2s var(--ease-default) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,NT=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,MT=m.span`
  font-family: var(--font-sans);
  /* Anchors the panel now that there's no card around it. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Hold digit width so the count-up doesn't jitter the caption below. */
  font-variant-numeric: tabular-nums;
`,LT=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,RT=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-5);
  border-top: 1px solid var(--color-border-opaque);
`,$T=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,TT=Ne`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,AT=m.div`
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
`,Jf=m.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-6);
  padding-right: var(--space-6);
  animation: ${TT} 32s linear infinite;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,e0=m.img`
  height: 22px;
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
`,IT=m.figure`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin: 0;
`,ET=m.blockquote`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,PT=m.figcaption`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,zT=m.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,OT=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,DT=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,BT=m.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Pops in (no type-out). */
  animation: ${zu} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,FT=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 560px;
`,WT=Ne`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,hi=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  /* $wide widens the step for the workforce-type grid so its three cards have
     room to keep each caption on a single line. */
  max-width: ${t=>t.$wide?"1060px":"720px"};
  text-align: center;
  animation: ${WT} ${T$}ms ${oi} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,pi=m.h1`
  margin: 0;
  font-family: var(--font-sans);
  /* Matches the opening landing headline (Headline) so step titles read consistently. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,fi=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
  max-width: 520px;
`,HT=Ne`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,UT=m(fi)`
  animation: ${HT} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,qT=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
`,VT=m.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  ${ui}
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
    ${Y2}
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
`,J2=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  margin-bottom: var(--space-2);
`,GT=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,YT=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,QT=Ne`
  from { opacity: 0; transform: translateY(10px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,KT=Ne`
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
`,ZT=Ne`
  from { transform: translateX(-100%); }
  to   { transform: translateX(350%); }
`,t0=Ne`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,XT=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  max-width: 360px;
  margin-top: var(--space-5);
`,JT=m.div`
  width: 100%;
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  overflow: hidden;
`,eA=m.div`
  position: relative;
  height: 100%;
  border-radius: var(--radius-full);
  /* Neon matcha rather than the standard success green — the loading beat is a
     brand moment, so the fill carries the vivid accent. */
  background: var(--color-matcha-bg-secondary);
  transition: width ${Z2}ms ${oi};
  overflow: hidden;

  ${t=>t.$working&&Ve`
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      width: 40%;
      background: linear-gradient(
        90deg,
        transparent,
        color-mix(in srgb, var(--color-content-inverse-primary) 45%, transparent),
        transparent
      );
      animation: ${ZT} 1.4s ease-in-out infinite;
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &::after { animation: none; content: none; }
  }
`,tA=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
  animation: ${t0} var(--duration-base) ${oi} both;

  ${t=>t.$working&&Ve`
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
    animation: ${t0} var(--duration-base) ${oi} both,
      ${KT} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    ${t=>t.$working&&Ve`
      color: var(--color-content-secondary);
      background: none;
    `}
  }
`,nA=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 480px;
`,rA=m.div`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  text-align: left;
`,oA=m.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;
  max-width: 140px;
`,aA=m.span`
  flex: 1;
  /* Hairline — deliberately below the 4px grid for a thin progress line. */
  height: 2px;
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  transition: background var(--duration-base) var(--ease-out);

  &[data-filled] {
    background: var(--color-content-primary);
  }
`,iA=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 480px;
  margin-top: var(--space-3);
`,sA=m.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  text-align: left;
  ${ui}
  border-radius: var(--radius-lg);
  cursor: pointer;
  /* fill "backwards" (not "both"): holds the pre-entrance state during the
     stagger delay, but releases transform once the pop finishes — a filled
     animation would keep pinning transform and the hover lift below never
     applies. */
  animation: ${QT} var(--duration-base) ${oi} backwards;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  ${J2} {
    margin-bottom: 0;
  }

  &:hover {
    ${Y2}
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
`,lA=m.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,eg=m.form`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  ${ui}
  border-radius: var(--radius-xl);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,tg=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
`,cA=Ne`
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
`,dA=m.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary);
  flex-shrink: 0;
  animation: ${cA} var(--duration-base) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ng=m.textarea`
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
`,rg=m(lu)`
  && {
    flex: 0 0 auto;
    width: auto;
    --composer-btn-size: var(--space-8); /* 32px */
    --composer-btn-icon-attach: var(--space-4); /* 16px */
    --composer-btn-icon-send: var(--space-4); /* 16px */
  }
`,og=m.div`
  margin-top: var(--space-3);
`,ag=m.button`
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
  transition: color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default);

  &:hover {
    color: var(--color-content-primary);
    background: var(--color-bg-secondary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
`;function uA({onEnterApp:t}){return r.jsx(A$,{onComplete:a=>t==null?void 0:t(a)})}const hA=768,pA=`(max-width: ${hA-1}px)`;function Ou(t){const[a,i]=g.useState(()=>typeof window>"u"?!1:window.matchMedia(t).matches);return g.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(t),l=d=>i(d.matches);return i(s.matches),s.addEventListener("change",l),()=>s.removeEventListener("change",l)},[t]),a}function fA(){return Ou(pA)}const mA="48px",gA="240px",n0="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",vA=m.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${t=>t.$isExpanded?gA:mA};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${t=>t.$isExpanded?Ve`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:Ve`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${t=>t.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,xA=m.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${t=>t.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${t=>t.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,yA=m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,wA=m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,bA=m.button`
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
`,kA=m.div`
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
`,_A=m.span`
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
`,r0=m.div`
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
`,Rd=m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,CA="var(--gradient-ai)",ig=m.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${t=>t.$isActive&&!t.$isAi&&Ve`
      background: var(--color-bg-primary, white);
      box-shadow: ${n0}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${t=>t.$isActive&&t.$isAi&&Ve`
      background: ${CA};
      box-shadow: ${n0}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,sg=m.button`
  all: unset;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 32px;
  border-radius: 6px;
  cursor: ${t=>t.$disabled?"default":"pointer"};
  /* Color cascades to icon (currentColor) and label (inherit) */
  color: ${t=>t.$isAiActive?"var(--color-content-inverse, white)":"var(--color-content-primary, #151515)"};
  opacity: ${t=>t.$disabled?.32:t.$isActive?1:.6};
  transition: background 150ms ease-in-out, opacity 150ms ease-in-out, color 150ms ease-in-out;

  &:hover {
    background: ${t=>t.$disabled||t.$isAiActive?"transparent":"var(--color-bg-transparent, rgba(21, 21, 21, 0.05))"};
    opacity: ${t=>t.$disabled?.32:1};
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }
`,lg=m.span`
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
`,cg=m.div`
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
`,jA=m.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,$d=m.hr`
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
`;const SA=m.button`
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
  padding: ${t=>t.$isExpanded?"6px 0":"0"};
  transition: background 150ms ease-in-out;

  &:hover {
    background: var(--color-bg-transparent, rgba(21, 21, 21, 0.05));
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #1969fe);
    outline-offset: 1px;
  }
`,NA=m.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: ${t=>t.$color||"#ee9c2d"};
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: var(--color-content-secondary, #1c222a);
  flex-shrink: 0;
  margin: 0 4px;
`,MA=m.span`
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
`;function Td({item:t,isExpanded:a,showNewBadge:i,isAi:s}){const l=t.isActive??!1,d=t.disabled??!1;return r.jsx(ig,{$isActive:l,$isAi:s,children:r.jsxs(sg,{$isActive:l,$isAiActive:l&&!!s,$disabled:d,disabled:d,onClick:d?void 0:t.onClick,"aria-current":l?"page":void 0,title:a?void 0:t.label,children:[r.jsxs(cg,{children:[t.hasUnread&&r.jsx(jA,{}),l&&t.activeIcon?t.activeIcon:t.icon]}),a&&r.jsx(lg,{children:t.label}),a&&i&&r.jsx(to,{variant:"primary",children:"New"})]})})}function LA({items:t,toolItems:a=[],bottomItems:i=[],workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:v,aiItemId:x}){const[y,b]=g.useState(!1);return r.jsx(vA,{$isExpanded:y,onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),"aria-label":"Primary navigation",children:r.jsxs(xA,{$isExpanded:y,children:[r.jsxs(yA,{children:[r.jsxs(bA,{$isExpanded:y,onClick:d,"aria-label":`Workspace: ${s.name}`,title:y?void 0:s.name,children:[r.jsx(kA,{children:s.logoUrl?r.jsx("img",{src:s.logoUrl,alt:s.name}):s.initial??s.name.charAt(0).toUpperCase()}),y&&r.jsxs(r.Fragment,{children:[r.jsx(_A,{children:s.name}),r.jsx(r0,{children:r.jsx(df,{})})]})]}),r.jsx(Rd,{children:t.map(k=>r.jsx(Td,{item:k,isExpanded:y,isAi:k.id===x},k.id))}),a.length>0&&r.jsxs(r.Fragment,{children:[r.jsx($d,{}),r.jsx(Rd,{children:a.map(k=>r.jsx(Td,{item:k,isExpanded:y,showNewBadge:k.id===v,isAi:k.id===x},k.id))})]})]}),r.jsxs(wA,{children:[i.length>0&&r.jsxs(r.Fragment,{children:[r.jsx($d,{}),r.jsx(Rd,{children:i.map(k=>r.jsx(Td,{item:k,isExpanded:y,isAi:k.id===x},k.id))})]}),r.jsx($d,{}),r.jsx(ig,{$isActive:!1,children:r.jsxs(sg,{$isActive:!1,onClick:f,"aria-label":"Settings",title:y?void 0:"Settings",children:[r.jsx(cg,{children:r.jsx(zj,{})}),y&&r.jsx(lg,{children:"Settings"})]})}),r.jsxs(SA,{$isExpanded:y,onClick:h,"aria-label":`User: ${l.name}`,title:y?void 0:l.name,children:[r.jsx(NA,{$color:l.avatarColor,children:l.initials}),y&&r.jsxs(r.Fragment,{children:[r.jsx(MA,{children:l.name}),r.jsx(r0,{children:r.jsx(df,{})})]})]})]})]})})}const RA=270,$A=m.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${t=>t.$isVisible?`${t.$width}px`:"0px"};
  height: 100%;
  flex-shrink: 0;
  background: var(--color-bg-primary, white);
  border-right: 1px solid var(--color-border-opaque, #e8eaee);
  overflow: hidden;
  /* Skip the width transition during an active drag so the panel tracks
     the cursor exactly; keep it for visibility toggles. */
  transition: ${t=>t.$isResizing?"none":"width 200ms ease"};
`,TA=m.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,AA=m.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,IA=m.h2`
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
`,EA=m.div`
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
`,PA=m.button`
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
`,zA=m.div`
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
`,OA=m.button`
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
`;const DA=m.span`
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
`,BA=m.div`
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
`,FA=Ne`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,WA=m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${FA} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,o0=m.button`
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
`,HA=m.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${t=>t.$outlined&&Ve`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,UA=m.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,qA=m.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,VA=m.div`
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
  background: ${t=>t.$isResizing?"var(--color-border-focus, #1969fe)":"transparent"};
  transition: background var(--duration-fast, 120ms) var(--ease-default, ease);

  &:hover {
    background: var(--color-border-focus, #1969fe);
  }
`,GA=m.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,YA=m.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,QA=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,dg=m.div`
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
`;function ug(){return r.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function KA(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const Du={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function ZA({item:t}){return r.jsx(rn,{label:r.jsx("span",{style:{color:t.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:t.isActive?500:void 0,letterSpacing:"-0.084px"},children:t.label}),leadingSlot:r.jsx(dg,{children:t.icon??r.jsx(ug,{})}),selected:t.isActive,onClick:t.onClick,divider:!1,size:"md","aria-current":t.isActive?"page":void 0,style:Du})}function XA({group:t}){const[a,i]=g.useState(t.defaultExpanded??!0),[s,l]=g.useState(!1),d=t.maxVisible,f=d!=null&&!s&&t.children.length>d?t.children.slice(0,d):t.children,v=t.children.length-f.length;return r.jsxs(HA,{$outlined:t.outlined,children:[r.jsxs(OA,{onClick:()=>i(x=>!x),"aria-expanded":a,children:[r.jsx(BA,{children:a?r.jsx(Xn,{size:16}):r.jsx(on,{size:16})}),r.jsx(DA,{children:t.label}),t.trailingBadge&&r.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:t.trailingBadge})]}),a&&r.jsxs(WA,{children:[f.map(x=>r.jsx(rn,{label:r.jsx("span",{style:{color:x.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:x.isActive?500:void 0,letterSpacing:"-0.084px"},children:x.label}),leadingSlot:r.jsx(dg,{children:x.icon??null}),trailingSlot:x.trailingSlot,selected:x.isActive,onClick:x.onClick,divider:!1,size:"md","aria-current":x.isActive?"page":void 0,style:Du},x.id)),v>0&&r.jsxs(o0,{type:"button",onClick:()=>l(!0),children:["Show ",v," more"]}),d!=null&&s&&t.children.length>d&&r.jsx(o0,{type:"button",onClick:()=>l(!1),children:"Show less"})]})]})}function JA({heading:t,isVisible:a,menuEntries:i=[],menuHeader:s,pageEntries:l=[],showSearch:d=!0,searchValue:h="",onSearchChange:f,onFilterClick:v,headerSlot:x,bodyContent:y,width:b=RA,onWidthChange:k,minWidth:j=220,maxWidth:S=520}){const C=y!==void 0,_=g.useRef(null),[$,R]=g.useState(!1);return g.useEffect(()=>{if(!$||!k)return;const N=_.current;if(!N)return;const A=N.getBoundingClientRect().left,M=z=>{const q=Math.min(S,Math.max(j,z.clientX-A));k(q)},T=()=>R(!1);window.addEventListener("mousemove",M),window.addEventListener("mouseup",T);const E=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",T),document.body.style.userSelect=E,document.body.style.cursor=""}},[$,k,j,S]),r.jsxs($A,{ref:_,$isVisible:a,$width:b,$isResizing:$,"aria-label":"Secondary navigation",children:[r.jsxs(TA,{children:[(t||x)&&r.jsxs(AA,{children:[r.jsx(IA,{children:t}),x]}),d&&!C&&r.jsxs(EA,{children:[r.jsx(pm,{size:"sm",placeholder:"Search...",value:h,onChange:N=>f==null?void 0:f(N.target.value)}),r.jsx(PA,{onClick:v,"aria-label":"Filter",children:r.jsx(KA,{})})]})]}),C?y:r.jsxs(zA,{children:[s,i.map(N=>N.type==="single"?r.jsx(ZA,{item:N.item},N.item.id):N.type==="group"?r.jsx(XA,{group:N.group},N.group.id):N.type==="divider"?r.jsx(YA,{},N.id):r.jsx(UA,{children:N.label.label},N.label.id))]}),l.length>0&&r.jsxs(qA,{children:[r.jsx(GA,{}),l.map(N=>r.jsx(rn,{label:r.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:N.label}),leadingSlot:r.jsx(QA,{children:N.icon??r.jsx(ug,{})}),onClick:N.onClick,selected:N.isActive??!1,divider:!1,size:"md","aria-current":N.isActive?"page":void 0,style:Du},N.id))]}),k&&a&&r.jsx(VA,{$isResizing:$,onMouseDown:N=>{N.preventDefault(),R(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const eI=m.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:t})=>t?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,tI=m.div`
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
`,hg=m.div`
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
`,nI=m.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,rI=m.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function oI(){return r.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),r.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function a0(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function i0(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function aI(){return r.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function iI({heading:t,actions:a=[],showActivityButton:i=!0,showPonderButton:s=!0,noBorder:l=!1,onActivityClick:d,onPonderClick:h,onDotsClick:f}){const v=a.filter(b=>b.variant==="secondary"),x=a.filter(b=>b.variant==="primary"),y=Ou("(prefers-color-scheme: dark)");return r.jsxs(eI,{$noBorder:l,children:[r.jsx(tI,{children:typeof t=="string"?r.jsx(hg,{children:t}):t}),r.jsxs(nI,{children:[r.jsxs(rI,{children:[r.jsx(Re,{variant:"ghost",size:"sm",iconOnly:!0,onClick:f,"aria-label":"More options",title:"More options",children:r.jsx(oI,{})}),v.map(b=>r.jsx(Re,{variant:"secondary",size:"sm",leadingArtwork:r.jsx(i0,{}),trailingArtwork:r.jsx(a0,{}),onClick:b.onClick,children:b.label},b.id)),x.map(b=>r.jsx(Re,{variant:"primary",size:"sm",leadingArtwork:r.jsx(i0,{}),trailingArtwork:r.jsx(a0,{}),onClick:b.onClick,children:b.label},b.id))]}),i&&r.jsx(Re,{variant:"ghost",size:"sm",iconOnly:!0,onClick:d,"aria-label":"Activity",title:"Activity",children:r.jsx(aI,{})}),s&&r.jsx(_0,{dark:y,onClick:h,"aria-label":"Ponder AI"})]})]})}const sI=m.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,lI=m.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,cI=m.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
`,dI=m.main`
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
`,s0="tb:secondary-nav-width",l0=270,c0=220,d0=520;function uI({items:t,toolItems:a,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:v,aiItemId:x,secNavHeading:y,menuEntries:b,menuHeader:k,pageEntries:j,showSearch:S,searchValue:C,onSearchChange:_,onFilterClick:$,headerSlot:R,bodyContent:N,heading:A,actions:M,showActivityButton:T,showPonderButton:E,noBorder:z,onActivityClick:q,onPonderClick:G,onDotsClick:X,children:Q,showSecondaryNav:ne=!0,showTopNav:te=!0}){const[ce,oe]=g.useState(()=>{if(typeof window>"u")return l0;const ie=window.localStorage.getItem(s0),Z=ie?parseInt(ie,10):NaN;return Number.isFinite(Z)?Math.min(d0,Math.max(c0,Z)):l0});return g.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(s0,String(ce))},[ce]),r.jsxs(sI,{children:[r.jsx(LA,{items:t,toolItems:a,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:f,newItemId:v,aiItemId:x}),r.jsxs(lI,{children:[ne&&r.jsx(JA,{heading:y,menuEntries:b,menuHeader:k,pageEntries:j,isVisible:!0,showSearch:S,searchValue:C,onSearchChange:_,onFilterClick:$,headerSlot:R,bodyContent:N,width:ce,onWidthChange:oe,minWidth:c0,maxWidth:d0}),r.jsxs(cI,{children:[te&&r.jsx(iI,{heading:A,actions:M,showActivityButton:T,showPonderButton:E,noBorder:z,onActivityClick:q,onPonderClick:G,onDotsClick:X}),r.jsx(dI,{children:Q})]})]})]})}function hI({deadZonePx:t=8,topThresholdPx:a=20,target:i}={}){const[s,l]=g.useState(null),d=g.useRef(0);return g.useEffect(()=>{var x;const h=()=>i?i.scrollTop:typeof window<"u"?window.scrollY:0;d.current=h();const f=()=>{const y=h(),b=y-d.current;Math.abs(b)<t||(b>0&&y>a?l("down"):b<0&&l("up"),d.current=y)},v=i??(typeof window<"u"?window:{});return(x=v.addEventListener)==null||x.call(v,"scroll",f,{passive:!0}),()=>{var y;(y=v.removeEventListener)==null||y.call(v,"scroll",f)}},[t,a,i]),s}const pI=m.button`
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

  background: ${t=>t.$active?"var(--color-bg-tertiary, #eceef1)":"transparent"};

  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: 2px;
  }
`,fI=m.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,mI=m.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function Ad({label:t,isOpen:a,onClick:i,ariaLabel:s}){return r.jsxs(pI,{type:"button",$active:a,onClick:i,"aria-haspopup":"dialog","aria-expanded":!!a,"aria-label":s,children:[r.jsx(fI,{children:t}),r.jsx(mI,{children:r.jsx(Xn,{size:14})})]})}const gI=m.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${t=>t.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,vI=m.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: 0 var(--space-3, 12px);
`,u0=m.button`
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
`,xI=m.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,h0=m.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`,yI=m.button`
  all: unset;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: ${t=>t.$color??"var(--color-bg-tertiary, #eceef1)"};
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
`;function wI({size:t=18}){return r.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const bI=g.forwardRef(function({primaryLabel:a,secondaryLabel:i,tertiaryLabel:s,openOverlay:l,user:d,hidden:h,onHamburgerClick:f,onPrimaryClick:v,onSecondaryClick:x,onTertiaryClick:y,onSearchClick:b,onUserClick:k},j){return r.jsx(gI,{ref:j,$hidden:h,children:r.jsxs(vI,{children:[r.jsx(u0,{onClick:f,"aria-label":"Open navigation",children:r.jsx(wI,{size:18})}),r.jsxs(xI,{children:[r.jsx(Ad,{label:a,isOpen:l==="primary",onClick:v,ariaLabel:"Choose a module"}),i&&r.jsxs(r.Fragment,{children:[r.jsx(h0,{"aria-hidden":"true",children:"›"}),r.jsx(Ad,{label:i,isOpen:l==="secondary",onClick:x,ariaLabel:"Choose a section"})]}),s&&r.jsxs(r.Fragment,{children:[r.jsx(h0,{"aria-hidden":"true",children:"›"}),r.jsx(Ad,{label:s,isOpen:l==="persona",onClick:y??(()=>{}),ariaLabel:"Choose a persona"})]})]}),r.jsx(u0,{onClick:b,"aria-label":"Search",children:r.jsx(cu,{size:18})}),r.jsx(yI,{onClick:k,$color:d.avatarColor,"aria-label":`User: ${d.name}`,children:d.initials})]})})}),kI=Ne`
  from { opacity: 0; }
  to { opacity: 1; }
`,_I=m.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${kI} 160ms ease-out;
`;function CI({onDismiss:t}){return g.useEffect(()=>{const a=s=>{s.key==="Escape"&&t()};window.addEventListener("keydown",a);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow=i}},[t]),r.jsx(_I,{onClick:t,"aria-hidden":"true"})}const jI=Ne`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,SI=m.div`
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
  animation: ${jI} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,NI=m.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,MI=m.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,LI=m.h2`
  margin: 0;
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,RI=m.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function Bu({title:t,children:a,ariaLabel:i}){return r.jsxs(SI,{role:"dialog","aria-modal":"true","aria-label":i??t,children:[r.jsx(NI,{children:r.jsx(MI,{"aria-hidden":"true"})}),t&&r.jsx(LI,{children:t}),r.jsx(RI,{children:a})]})}const gl=m.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,ai=m.div`
  padding: var(--space-3, 12px) var(--space-5, 20px) var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,Xr=m.button`
  all: unset;
  display: flex;
  align-items: center;
  gap: var(--space-3, 12px);
  padding: var(--space-3, 12px) var(--space-5, 20px);
  padding-left: ${t=>t.$indent?"calc(var(--space-5, 20px) + 24px)":"var(--space-5, 20px)"};
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 15px;
  line-height: 1.3;
  color: var(--color-content-primary, #151515);
  cursor: pointer;
  min-height: 44px;
  box-sizing: border-box;

  font-weight: ${t=>t.$active?600:400};
  background: ${t=>t.$active?"var(--color-bg-secondary, #f6f7f9)":"transparent"};

  &:hover {
    background: var(--color-bg-tertiary, #eceef1);
  }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus, #446cff);
    outline-offset: -2px;
  }
`,qo=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,Jr=m.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,eo=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function $I({activeId:t,groups:a,onSelect:i}){return r.jsx(Bu,{title:"Modules",ariaLabel:"Choose a module",children:r.jsx(gl,{children:a.map((s,l)=>r.jsxs("div",{children:[l>0&&r.jsx(ai,{children:s.label}),l===0&&r.jsx(ai,{children:s.label}),s.items.map(d=>{const h=d.id===t;return r.jsxs(Xr,{$active:h,onClick:()=>i(d.id),"aria-pressed":h,children:[r.jsx(qo,{children:d.icon}),r.jsx(Jr,{children:d.label}),h&&r.jsx(eo,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]},d.id)})]},s.id))})})}function TI({moduleLabel:t,entries:a,onSelect:i}){return r.jsx(Bu,{title:t,ariaLabel:`${t} sections`,children:r.jsx(gl,{children:a.map(s=>{if(s.type==="single"){const d=s.item;return r.jsxs(Xr,{$active:d.isActive,onClick:()=>{var h;(h=d.onClick)==null||h.call(d),i()},"aria-pressed":!!d.isActive,children:[r.jsx(qo,{children:d.icon}),r.jsx(Jr,{children:d.label}),d.isActive&&r.jsx(eo,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]},d.id)}if(s.type!=="group")return null;const l=s.group;return r.jsxs("div",{children:[r.jsx(ai,{children:l.label}),l.children.map(d=>r.jsxs(Xr,{$active:d.isActive,$indent:!0,onClick:()=>{var h;(h=d.onClick)==null||h.call(d),i()},"aria-pressed":!!d.isActive,children:[r.jsx(qo,{children:d.icon}),r.jsx(Jr,{children:d.label}),d.isActive&&r.jsx(eo,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]},d.id))]},l.id)})})})}const AI=m.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,II=m.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,EI=m.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function PI({personas:t,activeId:a,onSelect:i}){return r.jsx(Bu,{title:"Personas",ariaLabel:"Choose a persona",children:r.jsx(gl,{children:t.map(s=>{const l=s.id===a;return r.jsxs(Xr,{$active:l,onClick:()=>i(s.id),"aria-pressed":l,children:[r.jsx(Jr,{as:"span",children:r.jsxs(AI,{children:[r.jsx(II,{children:s.name}),r.jsx(EI,{children:s.role})]})}),l&&r.jsx(eo,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]},s.id)})})})}const zI=Ne`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,OI=m.aside`
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
  animation: ${zI} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,DI=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,BI=m.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,FI=m.button`
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
`,WI=m.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,HI=60;function UI({title:t,onDismiss:a,children:i}){const s=g.useRef(null),l=g.useRef(null);return g.useEffect(()=>{const d=s.current;if(!d)return;const h=v=>{const x=v.touches[0];l.current={x:x.clientX,y:x.clientY}},f=v=>{if(!l.current)return;const x=v.changedTouches[0],y=x.clientX-l.current.x,b=x.clientY-l.current.y;l.current=null,y<-60&&Math.abs(b)<HI&&a()};return d.addEventListener("touchstart",h,{passive:!0}),d.addEventListener("touchend",f),()=>{d.removeEventListener("touchstart",h),d.removeEventListener("touchend",f)}},[a]),r.jsxs(OI,{ref:s,role:"dialog","aria-modal":"true","aria-label":t??"Navigation",children:[r.jsxs(DI,{children:[r.jsx(BI,{children:t??"Navigation"}),r.jsx(FI,{onClick:a,"aria-label":"Close navigation",children:r.jsx(si,{size:18})})]}),r.jsx(WI,{children:i})]})}function qI({activeId:t,groups:a,currentMenuEntries:i,onSelectModule:s,onDismiss:l}){return r.jsx(UI,{title:"Navigation",onDismiss:l,children:r.jsx(gl,{children:a.map(d=>r.jsxs("div",{children:[r.jsx(ai,{children:d.label}),d.items.map(h=>{const f=h.id===t;return r.jsxs("div",{children:[r.jsxs(Xr,{$active:f,onClick:()=>{s(h.id),l()},"aria-pressed":f,children:[r.jsx(qo,{children:h.icon}),r.jsx(Jr,{children:h.label}),f&&r.jsx(eo,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]}),f&&i.length>0&&r.jsx("div",{children:i.map(v=>{if(v.type==="single"){const y=v.item;return r.jsxs(Xr,{$active:y.isActive,$indent:!0,onClick:()=>{var b;(b=y.onClick)==null||b.call(y),l()},"aria-pressed":!!y.isActive,children:[r.jsx(qo,{children:y.icon}),r.jsx(Jr,{children:y.label}),y.isActive&&r.jsx(eo,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]},y.id)}if(v.type!=="group")return null;const x=v.group;return r.jsxs("div",{children:[r.jsx(ai,{children:x.label}),x.children.map(y=>r.jsxs(Xr,{$active:y.isActive,$indent:!0,onClick:()=>{var b;(b=y.onClick)==null||b.call(y),l()},"aria-pressed":!!y.isActive,children:[r.jsx(qo,{children:y.icon}),r.jsx(Jr,{children:y.label}),y.isActive&&r.jsx(eo,{"aria-hidden":"true",children:r.jsx(Dt,{size:16})})]},y.id))]},x.id)})})]},h.id)})]},d.id))})})}const p0=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],VI=m.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-primary, #ffffff);
`,GI=m.main`
  flex: 1 1 auto;
  min-width: 0;
`;function YI(t){const{activeId:a,selectedPersonaId:i,moduleGroups:s,primaryLabel:l,secondaryLabel:d,menuEntries:h,user:f,onUserClick:v,onMobileNavigate:x,onSelectPersona:y,children:b}=t,[k,j]=g.useState(null),S=hI({deadZonePx:8,topThresholdPx:20}),C=k===null&&S==="down",_=g.useMemo(()=>{if(!i)return null;const A=p0.find(M=>M.id===i);return(A==null?void 0:A.name)??null},[i]),$=()=>j(null),R=A=>j(A),N=k!==null;return r.jsxs(VI,{children:[r.jsx(bI,{primaryLabel:l,secondaryLabel:d,tertiaryLabel:_,openOverlay:k,user:f,hidden:C,onHamburgerClick:()=>R("drawer"),onPrimaryClick:()=>R("primary"),onSecondaryClick:()=>R("secondary"),onTertiaryClick:_?()=>R("persona"):void 0,onSearchClick:()=>{R("drawer")},onUserClick:()=>v==null?void 0:v()}),r.jsx(GI,{children:b}),N&&r.jsx(CI,{onDismiss:$}),k==="primary"&&r.jsx($I,{activeId:a,groups:s,onSelect:A=>{x(A),$()}}),k==="secondary"&&r.jsx(TI,{moduleLabel:l,entries:h,onSelect:$}),k==="persona"&&r.jsx(PI,{personas:p0,activeId:i,onSelect:A=>{y(A),$()}}),k==="drawer"&&r.jsx(qI,{activeId:a,groups:s,currentMenuEntries:h,onSelectModule:A=>x(A),onDismiss:$})]})}function QI(t){if(fA()&&t.mobileNav){const i=t.mobileNav;return r.jsx(YI,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:t.menuEntries??[],user:t.user,onUserClick:t.onUserClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,children:t.children})}return r.jsx(uI,{...t})}const KI="/Ultron_Onboarding/assets/policy-icon-active-CqCS8_ex.svg",ZI="/Ultron_Onboarding/assets/automation-icon-active-DlguOjgR.svg",XI=1100;function JI(t){if(!t)return null;const a=t.trim().replace(/\s+/g,""),i=/^https?:\/\//i.test(a)?a:`https://${a}`;let s=a;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s}function eE(t){const a=[],i=JI(t.companyWebsite);return i?a.push({icon:Hs,label:"Workspace",detail:`${i} is set up and ready`,done:!0}):t.workforceType&&a.push({icon:Hs,label:"Workspace",detail:`Set up for ${t.workforceType.toLowerCase()}`,done:!0}),t.pay&&a.push({icon:uu,label:"Pay",detail:`Turned on for ${t.pay} workers`,done:!0}),t.billing&&a.push({icon:mu,label:"Billing",detail:`Set to bill ${t.billing.toLowerCase()}`,done:!0}),t.worksite&&a.push({icon:pu,label:"Sites",detail:t.worksite,done:!0}),a.push(t.rosterFile?{icon:Gr,label:"Roster",detail:`Brought your people in from ${t.rosterFile.name}`,done:!0}:{icon:Gr,label:"Roster",detail:"Add your team whenever you’re ready",done:!1}),a.push(t.scheduleFile?{icon:zn,label:"Schedule",detail:`Turned ${t.scheduleFile.name} into shifts`,done:!0}:{icon:zn,label:"Schedule",detail:"Bring in your schedule whenever you’re ready",done:!1}),a}function tE({answers:t={}}){const[a,i]=g.useState([]),[s,l]=g.useState(""),[d,h]=g.useState(!1),[f,v]=g.useState(""),[x,y]=g.useState(!1),b=g.useRef(null),k=g.useRef(null),j=eE(t);g.useEffect(()=>()=>{b.current&&window.clearTimeout(b.current)},[]),g.useEffect(()=>{var _;(_=k.current)==null||_.scrollIntoView({block:"end",behavior:"smooth"})},[a,d]);const S=s.trim().length>0&&!d,C=()=>{const _=s.trim();if(!_||d)return;const $=a.filter(R=>R.role==="ultron").length;i(R=>[...R,{role:"operator",text:_}]),l(""),h(!0),b.current=window.setTimeout(()=>{i(R=>[...R,{role:"ultron",text:Lu(_,$)}]),h(!1),b.current=null},XI)};return r.jsxs(nE,{children:[r.jsx(rE,{children:r.jsxs(aE,{children:[r.jsx(Id,{"data-from":"ultron",children:r.jsxs(iE,{children:[r.jsx(Ed,{"data-from":"ultron",children:"Your workspace is live — I turned on the essentials from what you shared."}),r.jsxs(sE,{"aria-label":"What Ultron set up",children:[r.jsxs(lE,{children:[r.jsx(cE,{"aria-hidden":"true",children:r.jsx(ct,{mark:"circle",size:28,tone:"auto",state:"active","aria-label":"Ultron"})}),r.jsx(dE,{children:"Here’s what I set up"})]}),r.jsx(uE,{children:j.map(_=>{const $=_.icon;return r.jsxs(hE,{"data-done":_.done||void 0,children:[r.jsx(pE,{"aria-hidden":"true",children:r.jsx($,{size:16})}),r.jsxs(fE,{children:[r.jsx(mE,{children:_.label}),r.jsx(gE,{children:_.detail})]}),r.jsx(vE,{"aria-hidden":"true",children:_.done?r.jsx(On,{size:18}):r.jsx(xE,{})})]},_.label)})})]}),r.jsx(Ed,{"data-from":"ultron",children:"What would you like me to take on next? I can build out coverage, chase down open shifts, tidy compliance, or anything else on your plate."}),r.jsxs(yE,{"aria-label":"Unlock your grant",children:[r.jsx(wE,{children:"Turn it on and your first $1,000 of work is free."}),r.jsx(bE,{children:"Give me one number to reach you. I propose before I act — you always say go — and confirming your number unlocks your grant."}),x?r.jsxs(CE,{role:"status",children:[r.jsx(On,{size:20}),"You’re set — I’ll text before I act. Your $1,000 grant is live."]}):r.jsxs(kE,{onSubmit:_=>{_.preventDefault(),f.trim()&&y(!0)},children:[r.jsx(_E,{type:"tel",value:f,placeholder:"(214) 555-0148","aria-label":"Mobile number",autoComplete:"tel",onChange:_=>v(_.target.value)}),r.jsx(Re,{type:"submit",variant:"tertiary",size:"lg",disabled:!f.trim(),children:"Unlock & turn on"})]}),r.jsx(jE,{children:"You’ll get 100,000 credits — 3 months of work performed, on us. Ultron only texts when it has a proposal. Msg & data rates may apply. Reply STOP to opt out."})]})]})}),a.map((_,$)=>r.jsx(Id,{"data-from":_.role,children:r.jsx(Ed,{"data-from":_.role,children:_.text})},$)),d&&r.jsx(Id,{"data-from":"ultron",children:r.jsxs(NE,{"aria-label":"Ultron is replying",children:[r.jsx(Pd,{}),r.jsx(Pd,{}),r.jsx(Pd,{})]})}),r.jsx("div",{ref:k})]})}),r.jsx(ME,{children:r.jsxs(LE,{onSubmit:_=>{_.preventDefault(),C()},children:[r.jsx(RE,{rows:1,value:s,placeholder:"Tell Ultron what to take on next…","aria-label":"Message Ultron",onChange:_=>l(_.target.value),onKeyDown:_=>{_.key==="Enter"&&!_.shiftKey&&(_.preventDefault(),C())}}),r.jsx($E,{children:r.jsx(Xo,{state:S?"ready":"disabled-invalid",onSend:C})})]})})]})}const nE=m.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,rE=m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,oE=Ne`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,aE=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,Id=m.div`
  display: flex;
  animation: ${oE} var(--duration-slow, 420ms) var(--ease-out) both;

  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,iE=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 92%;
`,Ed=m.div`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);

  /* Outbound (operator) — slate bubble, right side (matches the event page). */
  &[data-from='operator'] {
    max-width: 80%;
    padding: var(--space-2) var(--space-4);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-xl);
    font-weight: var(--font-weight-medium);
  }

  /* Inbound (Ultron) — no bubble wrap, just prose (matches the event page). */
  &[data-from='ultron'] {
    max-width: 100%;
  }
`,sE=m.div`
  width: 100%;
  max-width: 460px;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-below-low);
  overflow: hidden;
`,lE=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-4) var(--space-4) var(--space-3);
  border-bottom: 1px solid var(--color-border-opaque);
`,cE=m.span`
  display: inline-flex;
  flex-shrink: 0;
`,dE=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,uE=m.div`
  display: flex;
  flex-direction: column;
`,hE=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`,pE=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,fE=m.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,mE=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,gE=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-primary);
`,vE=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--color-success-content);
`,xE=m.span`
  width: var(--space-3);
  height: var(--space-3);
  border-radius: var(--radius-full);
  border: 1.5px dashed var(--color-border-selected, var(--color-content-tertiary));
`,yE=m.section`
  width: 100%;
  margin-top: var(--space-2);
  padding: var(--space-8);
  background: var(--color-bg-inverse-primary);
  border-radius: var(--radius-2xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`,wE=m.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  color: var(--color-content-inverse-primary);
`,bE=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-inverse-secondary);
`,kE=m.form`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  gap: var(--space-3);
`,_E=m.input`
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
`,CE=m.div`
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
`,jE=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-inverse-tertiary);
`,SE=Ne`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,NE=m.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-lg);
  background: var(--color-bg-secondary);
`,Pd=m.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${SE} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ME=m.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  justify-content: center;
`,LE=m.form`
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
`,RE=m.textarea`
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
`,$E=m.div`
  flex-shrink: 0;
  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`;function TE(t){const a=[t.activeId,t.secActiveId];return t.selectedPersonaId&&a.push("persona",t.selectedPersonaId),t.activePageId&&a.push("page",t.activePageId),"#"+a.map(encodeURIComponent).join("/")}function AE(t){const a=t.replace(/^#/,"").trim();if(!a)return{};const i=a.split("/").map(l=>{try{return decodeURIComponent(l)}catch{return l}}),s={};i[0]&&(s.activeId=i[0]),i[1]&&(s.secActiveId=i[1]);for(let l=2;l<i.length-1;l+=2){const d=i[l],h=i[l+1];d==="persona"?s.selectedPersonaId=h:d==="page"&&(s.activePageId=h)}return s}function IE(t,a){const i=g.useRef("");g.useEffect(()=>{const s=()=>{const d=AE(window.location.hash);d.activeId!==void 0&&a.setActiveId(d.activeId),d.secActiveId!==void 0&&a.setSecActiveId(d.secActiveId),a.setSelectedPersonaId(d.selectedPersonaId??null),a.setActivePageId(d.activePageId??null)};window.location.hash&&s();const l=()=>{window.location.hash!==i.current&&s()};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]),g.useEffect(()=>{const s=TE(t);s!==window.location.hash&&(i.current=s,window.history.replaceState(null,"",s))},[t.activeId,t.secActiveId,t.selectedPersonaId,t.activePageId])}const eu="ultron-theme";function EE(){if(typeof window>"u")return null;const t=window.localStorage.getItem(eu);return t==="light"||t==="dark"?t:null}function PE(t){const a=document.documentElement;a.classList.toggle("dark",t==="dark"),a.classList.toggle("light",t==="light")}function zE(){const t=Ou("(prefers-color-scheme: dark)"),[a,i]=g.useState(EE);g.useEffect(()=>{PE(a),!(typeof window>"u")&&(a?window.localStorage.setItem(eu,a):window.localStorage.removeItem(eu))},[a]);const s=a??(t?"dark":"light"),l=g.useCallback(()=>{const d=s==="dark"?"light":"dark";i(d===(t?"dark":"light")?null:d)},[s,t]);return{theme:s,toggle:l}}const OE=m.button`
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
`;function DE(){const{theme:t,toggle:a}=zE(),i=t==="dark",s=i?"Switch to light mode":"Switch to dark mode";return r.jsx(OE,{type:"button",onClick:a,"aria-label":s,"aria-pressed":i,title:s,children:i?r.jsx(E0,{size:18}):r.jsx(nm,{size:18})})}const f0=[{id:"ultron",label:"Ultron",icon:r.jsx(ct,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:r.jsx(Sj,{})},{id:"engaged",label:"Engaged",icon:r.jsx(Nj,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:r.jsx(Mj,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:r.jsx(Lj,{})},{id:"ai-home",label:"AI Home",icon:r.jsx(Rj,{})}],m0=[{id:"apps",label:"Apps",icon:r.jsx($j,{})}],g0=[{id:"docs",label:"Document Studio",icon:r.jsx(Ds,{})},{id:"form",label:"Form",icon:r.jsx(Tj,{})},{id:"tasks",label:"Tasks",icon:r.jsx(Aj,{})},{id:"policy",label:"Policy",icon:r.jsx(Ij,{}),activeIcon:r.jsx("img",{src:KI,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Automation",icon:r.jsx(ro,{}),activeIcon:r.jsx("img",{src:ZI,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:r.jsx(Ej,{})},{id:"esign",label:"E-Sign Studio",icon:r.jsx(Pj,{})}],BE=m.button`
  display: block;
  width: 100%;
  margin-bottom: var(--space-2);
  /* Same padding in both states so the card keeps the same height whether or
     not Live is the selected page — only the background marks the active state.
     12px sides align the text with the group rows below. */
  padding: var(--space-2) var(--space-3);
  border: none;
  border-radius: var(--radius-md, 8px);
  background: ${t=>t.$active?"var(--color-bg-secondary, rgba(70, 108, 255, 0.06))":"transparent"};
  text-align: left;
  cursor: pointer;
  transition: background var(--duration-fast, 120ms) var(--ease-out, ease);

  &:hover { background: var(--color-bg-secondary, rgba(70, 108, 255, 0.06)); }
`,FE=Ne`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,WE=Ne`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,HE=Ne`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,UE=m.span`
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
      ${FE} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${WE} 1100ms var(--ease-out, ease-out) both;
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
    animation: ${HE} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,qE=m.button`
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
`;function VE({onDelete:t}){const a=i=>i.stopPropagation();return r.jsx("span",{onClick:a,onKeyDown:a,onMouseDown:a,children:r.jsx(vu,{placement:"bottom-end",width:168,trigger:r.jsx(qE,{type:"button","aria-label":"Page options",children:r.jsx(X0,{size:16})}),groups:[{id:"actions",options:[{id:"delete",label:"Delete page",destructive:!0,leadingSlot:r.jsx(om,{size:16}),onClick:t}]}]})})}const GE={needs_attention:r.jsx(U0,{size:16}),live:r.jsx(ct,{mark:"orbit2d",size:32,tone:"auto",state:"active"}),resolved:r.jsx(On,{size:16})},YE={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function QE({introAnswers:t}={}){const[a,i]=g.useState("ultron"),[s,l]=g.useState("home-overview"),[d,h]=g.useState(null),[f,v]=g.useState(null),[x,y]=g.useState("ultron"),[b,k]=g.useState("employees"),j=cS(),[S,C]=g.useState(!!t),[_,$]=g.useState(!t),[R,N]=g.useState([]),[A,M]=g.useState(null),T=g.useRef(0),E=O=>{y("ultron"),C(!1),$(!1),M(O)},z=()=>{y("ultron"),$(!1),M(null),C(!0)},q=()=>{const O=`page-${T.current++}`;N(ee=>[...ee,{id:O,title:"New page"}]),E(O)},[G,X]=g.useState({}),[Q,ne]=g.useState({}),te=g.useRef({}),ce=(O,ee)=>{const ae=ee.trim();if(!ae)return;const K=(G[O]??[]).filter(B=>B.role==="ultron").length;X(B=>({...B,[O]:[...B[O]??[],{role:"operator",text:ae}]})),ne(B=>({...B,[O]:!0})),te.current[O]=window.setTimeout(()=>{X(B=>({...B,[O]:[...B[O]??[],{role:"ultron",text:Lu(ae,K)}]})),ne(B=>({...B,[O]:!1})),delete te.current[O]},1100)},oe=O=>{te.current[O]&&(window.clearTimeout(te.current[O]),delete te.current[O]),N(ee=>ee.filter(ae=>ae.id!==O)),X(ee=>{const{[O]:ae,...K}=ee;return K}),ne(ee=>{const{[O]:ae,...K}=ee;return K}),A===O&&(M(null),$(!0))},ie=_?"live":j.selectedThread?YE[j.selectedThread.status]:"new";IE({activeId:a,secActiveId:s,selectedPersonaId:d,activePageId:f},{setActiveId:i,setSecActiveId:l,setSelectedPersonaId:h,setActivePageId:v});const Z=O=>O.map(ee=>({...ee,isActive:ee.id===a,disabled:ee.id!=="ultron",onClick:ee.id==="ultron"?()=>i("ultron"):void 0})),W=[{id:"memory",label:"Memory",icon:r.jsx(tl,{size:16}),isActive:x==="memory",onClick:()=>y("memory")},{id:"settings",label:"Settings",icon:r.jsx(z0,{size:16})}],H=r.jsx(hg,{children:x==="memory"?"Memory":x==="account"?"Account database":"Ultron"}),I=[{type:"group",group:{id:"pages",label:"Pages",icon:r.jsx(Ds,{}),trailingBadge:r.jsx(to,{children:R.length+1}),defaultExpanded:!0,outlined:!1,children:[{id:"welcome",label:"Welcome",icon:r.jsx(Ds,{}),isActive:S,onClick:z},...R.map(O=>({id:O.id,label:O.title,icon:r.jsx(Ds,{}),isActive:A===O.id,onClick:()=>E(O.id),trailingSlot:r.jsx(VE,{onDelete:()=>oe(O.id)})}))]}},{type:"divider",id:"pages-divider"}],L=x==="account"?Jd.map(O=>({type:"single",item:{id:O.id,label:O.label,icon:O.icon,isActive:b===O.id,onClick:()=>k(O.id)}})):[...I,...j.groups.flatMap(O=>{const ee=O.id==="needs_attention"?"new":O.id==="resolved"?"done":"working",ae=O.id==="needs_attention"?O.threads.filter(B=>B.status==="analyzing"||j.revealedNewIds.includes(B.id)):O.threads,K={type:"group",group:{id:O.id,label:O.id==="needs_attention"?"New":O.label,icon:GE[O.id],trailingBadge:r.jsx(to,{children:ae.length}),defaultExpanded:!0,outlined:!1,children:ae.map(B=>({id:B.id,label:B.id.startsWith("detected_")?r.jsx(zR,{text:Vf(B.name,ee)}):Vf(B.name,ee),icon:ee==="new"?B.status==="analyzing"?r.jsx(ct,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):r.jsx(ct,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):ee==="working"?r.jsx(ct,{mark:"orbit2d",size:32,tone:"auto",state:B.status==="in_progress"?"active":"idle","aria-label":"Working"}):r.jsx(ct,{mark:"pulse",size:32,tone:"auto",state:B.status==="unresolved"?"idle":"static",color:B.status==="unresolved"?"var(--color-orange-content-tertiary)":j.viewedIds.includes(B.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:x==="ultron"&&!_&&!A&&ie===ee&&j.selectedId===B.id,onClick:()=>{y("ultron"),C(!1),$(!1),M(null),j.setSelectedId(B.id)},trailingSlot:j.savedWorkflowIds.includes(B.id)?r.jsx(jr,{content:"Saved as workflow",placement:"top",children:r.jsx(UE,{"aria-label":"Saved as workflow",children:r.jsx(ro,{})})}):void 0}))}};return O.id==="resolved"?[{type:"divider",id:"done-divider"},K]:O.id==="live"?[{type:"divider",id:"working-divider"},K]:[K]})],U=[{id:"main",label:"Workspace",items:Z(f0)},{id:"tools",label:"Tools",items:Z(m0)},{id:"bottom",label:"Apps",items:Z(g0)}];return r.jsxs(r.Fragment,{children:[r.jsx(DE,{}),r.jsx(QI,{items:Z(f0),toolItems:Z(m0),bottomItems:Z(g0),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:L,menuHeader:x==="ultron"?r.jsx(BE,{$active:_&&!A,onClick:()=>{y("ultron"),C(!1),$(!0),M(null)},"aria-label":"Live — Ultron presence","aria-current":_&&!A?"page":void 0,children:r.jsx($R,{onNew:q})}):void 0,pageEntries:W,showSecondaryNav:!0,showTopNav:x!=="ultron",showSearch:!1,heading:H,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:a,secActiveId:s,activePageId:f,selectedPersonaId:d,moduleGroups:U,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:O=>{O==="ultron"&&i("ultron")},onSelectPersona:h},children:x==="memory"?r.jsx(FR,{}):x==="account"?r.jsx(t$,{collectionId:b}):S?r.jsx(tE,{answers:t}):A?r.jsx(mR,{messages:G[A]??[],replying:Q[A]??!1,onSend:O=>ce(A,O)},A):r.jsx(iR,{threads:j.threads,stageById:j.stageById,section:ie,analyzedIds:j.analyzedIds,outboundByThread:j.outboundByThread,chatByThread:j.chatByThread,selectedId:j.selectedId,onDecide:j.decide,onAction:j.commit,onCompleteRun:j.completeRun,onRefinement:j.refine,onSaveWorkflow:j.saveWorkflow,pendingWorkflowIds:j.pendingWorkflowIds,onToggleSaveWorkflow:j.toggleWorkflowSave,savedWorkflowIds:j.savedWorkflowIds,onSend:j.sendMessage,replyingIds:j.replyingIds,onStop:j.stopReply,onClose:()=>{y("ultron"),C(!1),$(!0)},onDetectRisk:j.detectRisk,onRevealNew:j.revealNew})})]})}const v0="cubic-bezier(0.22, 1, 0.36, 1)",x0=Ne`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`,KE=Ne`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,ZE=m.div`
  display: contents;

  nav[aria-label='Primary navigation'] {
    animation: ${x0} 460ms ${v0} both;
  }
  nav[aria-label='Secondary navigation'] {
    animation: ${x0} 500ms ${v0} 90ms both;
  }
  main {
    animation: ${KE} 520ms ease-out 220ms both;
  }

  @media (prefers-reduced-motion: reduce) {
    nav[aria-label='Primary navigation'],
    nav[aria-label='Secondary navigation'],
    main {
      animation: none;
    }
  }
`,y0="tb:onboarding-complete";function XE(){const[t,a]=g.useState(()=>{try{return window.sessionStorage.getItem(y0)==="1"}catch{return!1}}),[i,s]=g.useState(null),l=d=>{try{window.sessionStorage.setItem(y0,"1")}catch{}s(d),a(!0)};return t?r.jsx(ZE,{children:r.jsx(QE,{introAnswers:i??void 0})}):r.jsx(uA,{onEnterApp:l})}m3.createRoot(document.getElementById("root")).render(r.jsx(_r.StrictMode,{children:r.jsx(A6,{children:r.jsx(XE,{})})}));
