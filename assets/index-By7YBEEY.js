(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function s(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(c){if(c.ep)return;c.ep=!0;const u=s(c);fetch(c.href,u)}})();function hh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Jc={exports:{}},Ua={},ed={exports:{}},Ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ef;function hg(){if(ef)return Ie;ef=1;var n=Symbol.for("react.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.iterator;function _($){return $===null||typeof $!="object"?null:($=C&&$[C]||$["@@iterator"],typeof $=="function"?$:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,b={};function j($,T,Q){this.props=$,this.context=T,this.refs=b,this.updater=Q||N}j.prototype.isReactComponent={},j.prototype.setState=function($,T){if(typeof $!="object"&&typeof $!="function"&&$!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,$,T,"setState")},j.prototype.forceUpdate=function($){this.updater.enqueueForceUpdate(this,$,"forceUpdate")};function M(){}M.prototype=j.prototype;function L($,T,Q){this.props=$,this.context=T,this.refs=b,this.updater=Q||N}var I=L.prototype=new M;I.constructor=L,k(I,j.prototype),I.isPureReactComponent=!0;var D=Array.isArray,E=Object.prototype.hasOwnProperty,B={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function A($,T,Q){var J,ae={},de=null,pe=null;if(T!=null)for(J in T.ref!==void 0&&(pe=T.ref),T.key!==void 0&&(de=""+T.key),T)E.call(T,J)&&!R.hasOwnProperty(J)&&(ae[J]=T[J]);var xe=arguments.length-2;if(xe===1)ae.children=Q;else if(1<xe){for(var Ne=Array(xe),Ee=0;Ee<xe;Ee++)Ne[Ee]=arguments[Ee+2];ae.children=Ne}if($&&$.defaultProps)for(J in xe=$.defaultProps,xe)ae[J]===void 0&&(ae[J]=xe[J]);return{$$typeof:n,type:$,key:de,ref:pe,props:ae,_owner:B.current}}function U($,T){return{$$typeof:n,type:$.type,key:T,ref:$.ref,props:$.props,_owner:$._owner}}function G($){return typeof $=="object"&&$!==null&&$.$$typeof===n}function X($){var T={"=":"=0",":":"=2"};return"$"+$.replace(/[=:]/g,function(Q){return T[Q]})}var q=/\/+/g;function ee($,T){return typeof $=="object"&&$!==null&&$.key!=null?X(""+$.key):T.toString(36)}function oe($,T,Q,J,ae){var de=typeof $;(de==="undefined"||de==="boolean")&&($=null);var pe=!1;if($===null)pe=!0;else switch(de){case"string":case"number":pe=!0;break;case"object":switch($.$$typeof){case n:case a:pe=!0}}if(pe)return pe=$,ae=ae(pe),$=J===""?"."+ee(pe,0):J,D(ae)?(Q="",$!=null&&(Q=$.replace(q,"$&/")+"/"),oe(ae,T,Q,"",function(Ee){return Ee})):ae!=null&&(G(ae)&&(ae=U(ae,Q+(!ae.key||pe&&pe.key===ae.key?"":(""+ae.key).replace(q,"$&/")+"/")+$)),T.push(ae)),1;if(pe=0,J=J===""?".":J+":",D($))for(var xe=0;xe<$.length;xe++){de=$[xe];var Ne=J+ee(de,xe);pe+=oe(de,T,Q,Ne,ae)}else if(Ne=_($),typeof Ne=="function")for($=Ne.call($),xe=0;!(de=$.next()).done;)de=de.value,Ne=J+ee(de,xe++),pe+=oe(de,T,Q,Ne,ae);else if(de==="object")throw T=String($),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys($).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.");return pe}function ce($,T,Q){if($==null)return $;var J=[],ae=0;return oe($,J,"","",function(de){return T.call(Q,de,ae++)}),J}function ie($){if($._status===-1){var T=$._result;T=T(),T.then(function(Q){($._status===0||$._status===-1)&&($._status=1,$._result=Q)},function(Q){($._status===0||$._status===-1)&&($._status=2,$._result=Q)}),$._status===-1&&($._status=0,$._result=T)}if($._status===1)return $._result.default;throw $._result}var le={current:null},Z={transition:null},O={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:Z,ReactCurrentOwner:B};function H(){throw Error("act(...) is not supported in production builds of React.")}return Ie.Children={map:ce,forEach:function($,T,Q){ce($,function(){T.apply(this,arguments)},Q)},count:function($){var T=0;return ce($,function(){T++}),T},toArray:function($){return ce($,function(T){return T})||[]},only:function($){if(!G($))throw Error("React.Children.only expected to receive a single React element child.");return $}},Ie.Component=j,Ie.Fragment=s,Ie.Profiler=c,Ie.PureComponent=L,Ie.StrictMode=l,Ie.Suspense=g,Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,Ie.act=H,Ie.cloneElement=function($,T,Q){if($==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+$+".");var J=k({},$.props),ae=$.key,de=$.ref,pe=$._owner;if(T!=null){if(T.ref!==void 0&&(de=T.ref,pe=B.current),T.key!==void 0&&(ae=""+T.key),$.type&&$.type.defaultProps)var xe=$.type.defaultProps;for(Ne in T)E.call(T,Ne)&&!R.hasOwnProperty(Ne)&&(J[Ne]=T[Ne]===void 0&&xe!==void 0?xe[Ne]:T[Ne])}var Ne=arguments.length-2;if(Ne===1)J.children=Q;else if(1<Ne){xe=Array(Ne);for(var Ee=0;Ee<Ne;Ee++)xe[Ee]=arguments[Ee+2];J.children=xe}return{$$typeof:n,type:$.type,key:ae,ref:de,props:J,_owner:pe}},Ie.createContext=function($){return $={$$typeof:f,_currentValue:$,_currentValue2:$,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},$.Provider={$$typeof:u,_context:$},$.Consumer=$},Ie.createElement=A,Ie.createFactory=function($){var T=A.bind(null,$);return T.type=$,T},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function($){return{$$typeof:h,render:$}},Ie.isValidElement=G,Ie.lazy=function($){return{$$typeof:w,_payload:{_status:-1,_result:$},_init:ie}},Ie.memo=function($,T){return{$$typeof:y,type:$,compare:T===void 0?null:T}},Ie.startTransition=function($){var T=Z.transition;Z.transition={};try{$()}finally{Z.transition=T}},Ie.unstable_act=H,Ie.useCallback=function($,T){return le.current.useCallback($,T)},Ie.useContext=function($){return le.current.useContext($)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function($){return le.current.useDeferredValue($)},Ie.useEffect=function($,T){return le.current.useEffect($,T)},Ie.useId=function(){return le.current.useId()},Ie.useImperativeHandle=function($,T,Q){return le.current.useImperativeHandle($,T,Q)},Ie.useInsertionEffect=function($,T){return le.current.useInsertionEffect($,T)},Ie.useLayoutEffect=function($,T){return le.current.useLayoutEffect($,T)},Ie.useMemo=function($,T){return le.current.useMemo($,T)},Ie.useReducer=function($,T,Q){return le.current.useReducer($,T,Q)},Ie.useRef=function($){return le.current.useRef($)},Ie.useState=function($){return le.current.useState($)},Ie.useSyncExternalStore=function($,T,Q){return le.current.useSyncExternalStore($,T,Q)},Ie.useTransition=function(){return le.current.useTransition()},Ie.version="18.3.1",Ie}var tf;function Gd(){return tf||(tf=1,ed.exports=hg()),ed.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nf;function mg(){if(nf)return Ua;nf=1;var n=Gd(),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(h,g,y){var w,C={},_=null,N=null;y!==void 0&&(_=""+y),g.key!==void 0&&(_=""+g.key),g.ref!==void 0&&(N=g.ref);for(w in g)l.call(g,w)&&!u.hasOwnProperty(w)&&(C[w]=g[w]);if(h&&h.defaultProps)for(w in g=h.defaultProps,g)C[w]===void 0&&(C[w]=g[w]);return{$$typeof:a,type:h,key:_,ref:N,props:C,_owner:c.current}}return Ua.Fragment=s,Ua.jsx=f,Ua.jsxs=f,Ua}var rf;function gg(){return rf||(rf=1,Jc.exports=mg()),Jc.exports}var r=gg(),v=Gd();const Pr=hh(v);var ji={},td={exports:{}},qt={},nd={exports:{}},rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var of;function vg(){return of||(of=1,(function(n){function a(Z,O){var H=Z.length;Z.push(O);e:for(;0<H;){var $=H-1>>>1,T=Z[$];if(0<c(T,O))Z[$]=O,Z[H]=T,H=$;else break e}}function s(Z){return Z.length===0?null:Z[0]}function l(Z){if(Z.length===0)return null;var O=Z[0],H=Z.pop();if(H!==O){Z[0]=H;e:for(var $=0,T=Z.length,Q=T>>>1;$<Q;){var J=2*($+1)-1,ae=Z[J],de=J+1,pe=Z[de];if(0>c(ae,H))de<T&&0>c(pe,ae)?(Z[$]=pe,Z[de]=H,$=de):(Z[$]=ae,Z[J]=H,$=J);else if(de<T&&0>c(pe,H))Z[$]=pe,Z[de]=H,$=de;else break e}}return O}function c(Z,O){var H=Z.sortIndex-O.sortIndex;return H!==0?H:Z.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var f=Date,h=f.now();n.unstable_now=function(){return f.now()-h}}var g=[],y=[],w=1,C=null,_=3,N=!1,k=!1,b=!1,j=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(Z){for(var O=s(y);O!==null;){if(O.callback===null)l(y);else if(O.startTime<=Z)l(y),O.sortIndex=O.expirationTime,a(g,O);else break;O=s(y)}}function D(Z){if(b=!1,I(Z),!k)if(s(g)!==null)k=!0,ie(E);else{var O=s(y);O!==null&&le(D,O.startTime-Z)}}function E(Z,O){k=!1,b&&(b=!1,M(A),A=-1),N=!0;var H=_;try{for(I(O),C=s(g);C!==null&&(!(C.expirationTime>O)||Z&&!X());){var $=C.callback;if(typeof $=="function"){C.callback=null,_=C.priorityLevel;var T=$(C.expirationTime<=O);O=n.unstable_now(),typeof T=="function"?C.callback=T:C===s(g)&&l(g),I(O)}else l(g);C=s(g)}if(C!==null)var Q=!0;else{var J=s(y);J!==null&&le(D,J.startTime-O),Q=!1}return Q}finally{C=null,_=H,N=!1}}var B=!1,R=null,A=-1,U=5,G=-1;function X(){return!(n.unstable_now()-G<U)}function q(){if(R!==null){var Z=n.unstable_now();G=Z;var O=!0;try{O=R(!0,Z)}finally{O?ee():(B=!1,R=null)}}else B=!1}var ee;if(typeof L=="function")ee=function(){L(q)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ce=oe.port2;oe.port1.onmessage=q,ee=function(){ce.postMessage(null)}}else ee=function(){j(q,0)};function ie(Z){R=Z,B||(B=!0,ee())}function le(Z,O){A=j(function(){Z(n.unstable_now())},O)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Z){Z.callback=null},n.unstable_continueExecution=function(){k||N||(k=!0,ie(E))},n.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<Z?Math.floor(1e3/Z):5},n.unstable_getCurrentPriorityLevel=function(){return _},n.unstable_getFirstCallbackNode=function(){return s(g)},n.unstable_next=function(Z){switch(_){case 1:case 2:case 3:var O=3;break;default:O=_}var H=_;_=O;try{return Z()}finally{_=H}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Z,O){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var H=_;_=Z;try{return O()}finally{_=H}},n.unstable_scheduleCallback=function(Z,O,H){var $=n.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?$+H:$):H=$,Z){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=H+T,Z={id:w++,callback:O,priorityLevel:Z,startTime:H,expirationTime:T,sortIndex:-1},H>$?(Z.sortIndex=H,a(y,Z),s(g)===null&&Z===s(y)&&(b?(M(A),A=-1):b=!0,le(D,H-$))):(Z.sortIndex=T,a(g,Z),k||N||(k=!0,ie(E))),Z},n.unstable_shouldYield=X,n.unstable_wrapCallback=function(Z){var O=_;return function(){var H=_;_=O;try{return Z.apply(this,arguments)}finally{_=H}}}})(rd)),rd}var af;function xg(){return af||(af=1,nd.exports=vg()),nd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf;function yg(){if(sf)return qt;sf=1;var n=Gd(),a=xg();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,c={};function u(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(c[e]=t,e=0;e<t.length;e++)l.add(t[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},C={};function _(e){return g.call(C,e)?!0:g.call(w,e)?!1:y.test(e)?C[e]=!0:(w[e]=!0,!1)}function N(e,t,o,i){if(o!==null&&o.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return i?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function k(e,t,o,i){if(t===null||typeof t>"u"||N(e,t,o,i))return!0;if(i)return!1;if(o!==null)switch(o.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function b(e,t,o,i,d,p,x){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=i,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=e,this.type=t,this.sanitizeURL=p,this.removeEmptyString=x}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){j[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];j[t]=new b(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){j[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){j[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){j[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){j[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){j[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){j[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){j[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function L(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(M,L);j[t]=new b(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(M,L);j[t]=new b(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(M,L);j[t]=new b(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){j[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),j.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){j[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function I(e,t,o,i){var d=j.hasOwnProperty(t)?j[t]:null;(d!==null?d.type!==0:i||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(k(t,o,d,i)&&(o=null),i||d===null?_(t)&&(o===null?e.removeAttribute(t):e.setAttribute(t,""+o)):d.mustUseProperty?e[d.propertyName]=o===null?d.type===3?!1:"":o:(t=d.attributeName,i=d.attributeNamespace,o===null?e.removeAttribute(t):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,i?e.setAttributeNS(i,t,o):e.setAttribute(t,o))))}var D=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,E=Symbol.for("react.element"),B=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),X=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),Z=Symbol.iterator;function O(e){return e===null||typeof e!="object"?null:(e=Z&&e[Z]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,$;function T(e){if($===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);$=t&&t[1]||""}return`
`+$+e}var Q=!1;function J(e,t){if(!e||Q)return"";Q=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(V){var i=V}Reflect.construct(e,[],t)}else{try{t.call()}catch(V){i=V}e.call(t.prototype)}else{try{throw Error()}catch(V){i=V}e()}}catch(V){if(V&&i&&typeof V.stack=="string"){for(var d=V.stack.split(`
`),p=i.stack.split(`
`),x=d.length-1,S=p.length-1;1<=x&&0<=S&&d[x]!==p[S];)S--;for(;1<=x&&0<=S;x--,S--)if(d[x]!==p[S]){if(x!==1||S!==1)do if(x--,S--,0>S||d[x]!==p[S]){var z=`
`+d[x].replace(" at new "," at ");return e.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",e.displayName)),z}while(1<=x&&0<=S);break}}}finally{Q=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?T(e):""}function ae(e){switch(e.tag){case 5:return T(e.type);case 16:return T("Lazy");case 13:return T("Suspense");case 19:return T("SuspenseList");case 0:case 2:case 15:return e=J(e.type,!1),e;case 11:return e=J(e.type.render,!1),e;case 1:return e=J(e.type,!0),e;default:return""}}function de(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case B:return"Portal";case U:return"Profiler";case A:return"StrictMode";case ee:return"Suspense";case oe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case X:return(e.displayName||"Context")+".Consumer";case G:return(e._context.displayName||"Context")+".Provider";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ce:return t=e.displayName||null,t!==null?t:de(e.type)||"Memo";case ie:t=e._payload,e=e._init;try{return de(e(t))}catch{}}return null}function pe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(t);case 8:return t===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ne(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ee(e){var t=Ne(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(x){i=""+x,p.call(this,x)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return i},setValue:function(x){i=""+x},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fe(e){e._valueTracker||(e._valueTracker=Ee(e))}function _e(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var o=t.getValue(),i="";return e&&(i=Ne(e)?e.checked?"true":"false":e.value),e=i,e!==o?(t.setValue(e),!0):!1}function $e(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ge(e,t){var o=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Ve(e,t){var o=t.defaultValue==null?"":t.defaultValue,i=t.checked!=null?t.checked:t.defaultChecked;o=xe(t.value!=null?t.value:o),e._wrapperState={initialChecked:i,initialValue:o,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ye(e,t){t=t.checked,t!=null&&I(e,"checked",t,!1)}function Je(e,t){Ye(e,t);var o=xe(t.value),i=t.type;if(o!=null)i==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?He(e,t.type,o):t.hasOwnProperty("defaultValue")&&He(e,t.type,xe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function at(e,t,o){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var i=t.type;if(!(i!=="submit"&&i!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,o||t===e.value||(e.value=t),e.defaultValue=t}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function He(e,t,o){(t!=="number"||$e(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var Ze=Array.isArray;function We(e,t,o,i){if(e=e.options,t){t={};for(var d=0;d<o.length;d++)t["$"+o[d]]=!0;for(o=0;o<e.length;o++)d=t.hasOwnProperty("$"+e[o].value),e[o].selected!==d&&(e[o].selected=d),d&&i&&(e[o].defaultSelected=!0)}else{for(o=""+xe(o),t=null,d=0;d<e.length;d++){if(e[d].value===o){e[d].selected=!0,i&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function xt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oe(e,t){var o=t.value;if(o==null){if(o=t.children,t=t.defaultValue,o!=null){if(t!=null)throw Error(s(92));if(Ze(o)){if(1<o.length)throw Error(s(93));o=o[0]}t=o}t==null&&(t=""),o=t}e._wrapperState={initialValue:xe(o)}}function kt(e,t){var o=xe(t.value),i=xe(t.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),t.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),i!=null&&(e.defaultValue=""+i)}function Re(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function sn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ot(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?sn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vn,Fr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,o,i,d){MSApp.execUnsafeLocalFunction(function(){return e(t,o,i,d)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vn=Vn||document.createElement("div"),Vn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=t;return}}e.textContent=t}var ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},go=["Webkit","ms","Moz","O"];Object.keys(ln).forEach(function(e){go.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ln[t]=ln[e]})});function ir(e,t,o){return t==null||typeof t=="boolean"||t===""?"":o||typeof t!="number"||t===0||ln.hasOwnProperty(e)&&ln[e]?(""+t).trim():t+"px"}function ke(e,t){e=e.style;for(var o in t)if(t.hasOwnProperty(o)){var i=o.indexOf("--")===0,d=ir(o,t[o],i);o==="float"&&(o="cssFloat"),i?e.setProperty(o,d):e[o]=d}}var Ke=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function st(e,t){if(t){if(Ke[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function yt(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Un=null;function xn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var lr=null,cr=null,qn=null;function Y(e){if(e=Ma(e)){if(typeof lr!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Os(t),lr(e.stateNode,e.type,t))}}function ye(e){cr?qn?qn.push(e):qn=[e]:cr=e}function Ae(){if(cr){var e=cr,t=qn;if(qn=cr=null,Y(e),t)for(e=0;e<t.length;e++)Y(t[e])}}function Hr(e,t){return e(t)}function dr(){}var Gn=!1;function Wr(e,t,o){if(Gn)return e(t,o);Gn=!0;try{return Hr(e,t,o)}finally{Gn=!1,(cr!==null||qn!==null)&&(dr(),Ae())}}function Vr(e,t){var o=e.stateNode;if(o===null)return null;var i=Os(o);if(i===null)return null;o=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(s(231,t,typeof o));return o}var vl=!1;if(h)try{var da={};Object.defineProperty(da,"passive",{get:function(){vl=!0}}),window.addEventListener("test",da,da),window.removeEventListener("test",da,da)}catch{vl=!1}function wm(e,t,o,i,d,p,x,S,z){var V=Array.prototype.slice.call(arguments,3);try{t.apply(o,V)}catch(ne){this.onError(ne)}}var ua=!1,xs=null,ys=!1,xl=null,bm={onError:function(e){ua=!0,xs=e}};function _m(e,t,o,i,d,p,x,S,z){ua=!1,xs=null,wm.apply(bm,arguments)}function km(e,t,o,i,d,p,x,S,z){if(_m.apply(this,arguments),ua){if(ua){var V=xs;ua=!1,xs=null}else throw Error(s(198));ys||(ys=!0,xl=V)}}function Ur(e){var t=e,o=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(o=t.return),e=t.return;while(e)}return t.tag===3?o:null}function ku(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cu(e){if(Ur(e)!==e)throw Error(s(188))}function Cm(e){var t=e.alternate;if(!t){if(t=Ur(e),t===null)throw Error(s(188));return t!==e?null:e}for(var o=e,i=t;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(i=d.return,i!==null){o=i;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return Cu(d),e;if(p===i)return Cu(d),t;p=p.sibling}throw Error(s(188))}if(o.return!==i.return)o=d,i=p;else{for(var x=!1,S=d.child;S;){if(S===o){x=!0,o=d,i=p;break}if(S===i){x=!0,i=d,o=p;break}S=S.sibling}if(!x){for(S=p.child;S;){if(S===o){x=!0,o=p,i=d;break}if(S===i){x=!0,i=p,o=d;break}S=S.sibling}if(!x)throw Error(s(189))}}if(o.alternate!==i)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?e:t}function ju(e){return e=Cm(e),e!==null?Su(e):null}function Su(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Su(e);if(t!==null)return t;e=e.sibling}return null}var Nu=a.unstable_scheduleCallback,$u=a.unstable_cancelCallback,jm=a.unstable_shouldYield,Sm=a.unstable_requestPaint,dt=a.unstable_now,Nm=a.unstable_getCurrentPriorityLevel,yl=a.unstable_ImmediatePriority,Lu=a.unstable_UserBlockingPriority,ws=a.unstable_NormalPriority,$m=a.unstable_LowPriority,Mu=a.unstable_IdlePriority,bs=null,In=null;function Lm(e){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(bs,e,void 0,(e.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:Rm,Mm=Math.log,Em=Math.LN2;function Rm(e){return e>>>=0,e===0?32:31-(Mm(e)/Em|0)|0}var _s=64,ks=4194304;function pa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Cs(e,t){var o=e.pendingLanes;if(o===0)return 0;var i=0,d=e.suspendedLanes,p=e.pingedLanes,x=o&268435455;if(x!==0){var S=x&~d;S!==0?i=pa(S):(p&=x,p!==0&&(i=pa(p)))}else x=o&~d,x!==0?i=pa(x):p!==0&&(i=pa(p));if(i===0)return 0;if(t!==0&&t!==i&&(t&d)===0&&(d=i&-i,p=t&-t,d>=p||d===16&&(p&4194240)!==0))return t;if((i&4)!==0&&(i|=o&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=i;0<t;)o=31-yn(t),d=1<<o,i|=e[o],t&=~d;return i}function Im(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tm(e,t){for(var o=e.suspendedLanes,i=e.pingedLanes,d=e.expirationTimes,p=e.pendingLanes;0<p;){var x=31-yn(p),S=1<<x,z=d[x];z===-1?((S&o)===0||(S&i)!==0)&&(d[x]=Im(S,t)):z<=t&&(e.expiredLanes|=S),p&=~S}}function wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Eu(){var e=_s;return _s<<=1,(_s&4194240)===0&&(_s=64),e}function bl(e){for(var t=[],o=0;31>o;o++)t.push(e);return t}function fa(e,t,o){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yn(t),e[t]=o}function Am(e,t){var o=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<o;){var d=31-yn(o),p=1<<d;t[d]=0,i[d]=-1,e[d]=-1,o&=~p}}function _l(e,t){var o=e.entangledLanes|=t;for(e=e.entanglements;o;){var i=31-yn(o),d=1<<i;d&t|e[i]&t&&(e[i]|=t),o&=~d}}var Ue=0;function Ru(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Iu,kl,Tu,Au,zu,Cl=!1,js=[],ur=null,pr=null,fr=null,ha=new Map,ma=new Map,hr=[],zm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Du(e,t){switch(e){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":ha.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(t.pointerId)}}function ga(e,t,o,i,d,p){return e===null||e.nativeEvent!==p?(e={blockedOn:t,domEventName:o,eventSystemFlags:i,nativeEvent:p,targetContainers:[d]},t!==null&&(t=Ma(t),t!==null&&kl(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function Dm(e,t,o,i,d){switch(t){case"focusin":return ur=ga(ur,e,t,o,i,d),!0;case"dragenter":return pr=ga(pr,e,t,o,i,d),!0;case"mouseover":return fr=ga(fr,e,t,o,i,d),!0;case"pointerover":var p=d.pointerId;return ha.set(p,ga(ha.get(p)||null,e,t,o,i,d)),!0;case"gotpointercapture":return p=d.pointerId,ma.set(p,ga(ma.get(p)||null,e,t,o,i,d)),!0}return!1}function Pu(e){var t=qr(e.target);if(t!==null){var o=Ur(t);if(o!==null){if(t=o.tag,t===13){if(t=ku(o),t!==null){e.blockedOn=t,zu(e.priority,function(){Tu(o)});return}}else if(t===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ss(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var o=Sl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var i=new o.constructor(o.type,o);Un=i,o.target.dispatchEvent(i),Un=null}else return t=Ma(o),t!==null&&kl(t),e.blockedOn=o,!1;t.shift()}return!0}function Bu(e,t,o){Ss(e)&&o.delete(t)}function Pm(){Cl=!1,ur!==null&&Ss(ur)&&(ur=null),pr!==null&&Ss(pr)&&(pr=null),fr!==null&&Ss(fr)&&(fr=null),ha.forEach(Bu),ma.forEach(Bu)}function va(e,t){e.blockedOn===t&&(e.blockedOn=null,Cl||(Cl=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Pm)))}function xa(e){function t(d){return va(d,e)}if(0<js.length){va(js[0],e);for(var o=1;o<js.length;o++){var i=js[o];i.blockedOn===e&&(i.blockedOn=null)}}for(ur!==null&&va(ur,e),pr!==null&&va(pr,e),fr!==null&&va(fr,e),ha.forEach(t),ma.forEach(t),o=0;o<hr.length;o++)i=hr[o],i.blockedOn===e&&(i.blockedOn=null);for(;0<hr.length&&(o=hr[0],o.blockedOn===null);)Pu(o),o.blockedOn===null&&hr.shift()}var vo=D.ReactCurrentBatchConfig,Ns=!0;function Bm(e,t,o,i){var d=Ue,p=vo.transition;vo.transition=null;try{Ue=1,jl(e,t,o,i)}finally{Ue=d,vo.transition=p}}function Om(e,t,o,i){var d=Ue,p=vo.transition;vo.transition=null;try{Ue=4,jl(e,t,o,i)}finally{Ue=d,vo.transition=p}}function jl(e,t,o,i){if(Ns){var d=Sl(e,t,o,i);if(d===null)Wl(e,t,i,$s,o),Du(e,i);else if(Dm(d,e,t,o,i))i.stopPropagation();else if(Du(e,i),t&4&&-1<zm.indexOf(e)){for(;d!==null;){var p=Ma(d);if(p!==null&&Iu(p),p=Sl(e,t,o,i),p===null&&Wl(e,t,i,$s,o),p===d)break;d=p}d!==null&&i.stopPropagation()}else Wl(e,t,i,null,o)}}var $s=null;function Sl(e,t,o,i){if($s=null,e=xn(i),e=qr(e),e!==null)if(t=Ur(e),t===null)e=null;else if(o=t.tag,o===13){if(e=ku(t),e!==null)return e;e=null}else if(o===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $s=e,null}function Ou(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nm()){case yl:return 1;case Lu:return 4;case ws:case $m:return 16;case Mu:return 536870912;default:return 16}default:return 16}}var mr=null,Nl=null,Ls=null;function Fu(){if(Ls)return Ls;var e,t=Nl,o=t.length,i,d="value"in mr?mr.value:mr.textContent,p=d.length;for(e=0;e<o&&t[e]===d[e];e++);var x=o-e;for(i=1;i<=x&&t[o-i]===d[p-i];i++);return Ls=d.slice(e,1<i?1-i:void 0)}function Ms(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Es(){return!0}function Hu(){return!1}function Kt(e){function t(o,i,d,p,x){this._reactName=o,this._targetInst=d,this.type=i,this.nativeEvent=p,this.target=x,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(o=e[S],this[S]=o?o(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Es:Hu,this.isPropagationStopped=Hu,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Es)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Es)},persist:function(){},isPersistent:Es}),t}var xo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$l=Kt(xo),ya=H({},xo,{view:0,detail:0}),Fm=Kt(ya),Ll,Ml,wa,Rs=H({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wa&&(wa&&e.type==="mousemove"?(Ll=e.screenX-wa.screenX,Ml=e.screenY-wa.screenY):Ml=Ll=0,wa=e),Ll)},movementY:function(e){return"movementY"in e?e.movementY:Ml}}),Wu=Kt(Rs),Hm=H({},Rs,{dataTransfer:0}),Wm=Kt(Hm),Vm=H({},ya,{relatedTarget:0}),El=Kt(Vm),Um=H({},xo,{animationName:0,elapsedTime:0,pseudoElement:0}),qm=Kt(Um),Gm=H({},xo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ym=Kt(Gm),Zm=H({},xo,{data:0}),Vu=Kt(Zm),Km={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xm[e])?!!t[e]:!1}function Rl(){return Jm}var e2=H({},ya,{key:function(e){if(e.key){var t=Km[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ms(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rl,charCode:function(e){return e.type==="keypress"?Ms(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ms(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),t2=Kt(e2),n2=H({},Rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uu=Kt(n2),r2=H({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rl}),o2=Kt(r2),a2=H({},xo,{propertyName:0,elapsedTime:0,pseudoElement:0}),s2=Kt(a2),i2=H({},Rs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),l2=Kt(i2),c2=[9,13,27,32],Il=h&&"CompositionEvent"in window,ba=null;h&&"documentMode"in document&&(ba=document.documentMode);var d2=h&&"TextEvent"in window&&!ba,qu=h&&(!Il||ba&&8<ba&&11>=ba),Gu=" ",Yu=!1;function Zu(e,t){switch(e){case"keyup":return c2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yo=!1;function u2(e,t){switch(e){case"compositionend":return Ku(t);case"keypress":return t.which!==32?null:(Yu=!0,Gu);case"textInput":return e=t.data,e===Gu&&Yu?null:e;default:return null}}function p2(e,t){if(yo)return e==="compositionend"||!Il&&Zu(e,t)?(e=Fu(),Ls=Nl=mr=null,yo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qu&&t.locale!=="ko"?null:t.data;default:return null}}var f2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!f2[e.type]:t==="textarea"}function Xu(e,t,o,i){ye(i),t=Ds(t,"onChange"),0<t.length&&(o=new $l("onChange","change",null,o,i),e.push({event:o,listeners:t}))}var _a=null,ka=null;function h2(e){gp(e,0)}function Is(e){var t=Co(e);if(_e(t))return e}function m2(e,t){if(e==="change")return t}var Ju=!1;if(h){var Tl;if(h){var Al="oninput"in document;if(!Al){var ep=document.createElement("div");ep.setAttribute("oninput","return;"),Al=typeof ep.oninput=="function"}Tl=Al}else Tl=!1;Ju=Tl&&(!document.documentMode||9<document.documentMode)}function tp(){_a&&(_a.detachEvent("onpropertychange",np),ka=_a=null)}function np(e){if(e.propertyName==="value"&&Is(ka)){var t=[];Xu(t,ka,e,xn(e)),Wr(h2,t)}}function g2(e,t,o){e==="focusin"?(tp(),_a=t,ka=o,_a.attachEvent("onpropertychange",np)):e==="focusout"&&tp()}function v2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Is(ka)}function x2(e,t){if(e==="click")return Is(t)}function y2(e,t){if(e==="input"||e==="change")return Is(t)}function w2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wn=typeof Object.is=="function"?Object.is:w2;function Ca(e,t){if(wn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(i=0;i<o.length;i++){var d=o[i];if(!g.call(t,d)||!wn(e[d],t[d]))return!1}return!0}function rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function op(e,t){var o=rp(e);e=0;for(var i;o;){if(o.nodeType===3){if(i=e+o.textContent.length,e<=t&&i>=t)return{node:o,offset:t-e};e=i}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=rp(o)}}function ap(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ap(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sp(){for(var e=window,t=$e();t instanceof e.HTMLIFrameElement;){try{var o=typeof t.contentWindow.location.href=="string"}catch{o=!1}if(o)e=t.contentWindow;else break;t=$e(e.document)}return t}function zl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function b2(e){var t=sp(),o=e.focusedElem,i=e.selectionRange;if(t!==o&&o&&o.ownerDocument&&ap(o.ownerDocument.documentElement,o)){if(i!==null&&zl(o)){if(t=i.start,e=i.end,e===void 0&&(e=t),"selectionStart"in o)o.selectionStart=t,o.selectionEnd=Math.min(e,o.value.length);else if(e=(t=o.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var d=o.textContent.length,p=Math.min(i.start,d);i=i.end===void 0?p:Math.min(i.end,d),!e.extend&&p>i&&(d=i,i=p,p=d),d=op(o,p);var x=op(o,i);d&&x&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==x.node||e.focusOffset!==x.offset)&&(t=t.createRange(),t.setStart(d.node,d.offset),e.removeAllRanges(),p>i?(e.addRange(t),e.extend(x.node,x.offset)):(t.setEnd(x.node,x.offset),e.addRange(t)))}}for(t=[],e=o;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<t.length;o++)e=t[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _2=h&&"documentMode"in document&&11>=document.documentMode,wo=null,Dl=null,ja=null,Pl=!1;function ip(e,t,o){var i=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Pl||wo==null||wo!==$e(i)||(i=wo,"selectionStart"in i&&zl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ja&&Ca(ja,i)||(ja=i,i=Ds(Dl,"onSelect"),0<i.length&&(t=new $l("onSelect","select",null,t,o),e.push({event:t,listeners:i}),t.target=wo)))}function Ts(e,t){var o={};return o[e.toLowerCase()]=t.toLowerCase(),o["Webkit"+e]="webkit"+t,o["Moz"+e]="moz"+t,o}var bo={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionend:Ts("Transition","TransitionEnd")},Bl={},lp={};h&&(lp=document.createElement("div").style,"AnimationEvent"in window||(delete bo.animationend.animation,delete bo.animationiteration.animation,delete bo.animationstart.animation),"TransitionEvent"in window||delete bo.transitionend.transition);function As(e){if(Bl[e])return Bl[e];if(!bo[e])return e;var t=bo[e],o;for(o in t)if(t.hasOwnProperty(o)&&o in lp)return Bl[e]=t[o];return e}var cp=As("animationend"),dp=As("animationiteration"),up=As("animationstart"),pp=As("transitionend"),fp=new Map,hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(e,t){fp.set(e,t),u(t,[e])}for(var Ol=0;Ol<hp.length;Ol++){var Fl=hp[Ol],k2=Fl.toLowerCase(),C2=Fl[0].toUpperCase()+Fl.slice(1);gr(k2,"on"+C2)}gr(cp,"onAnimationEnd"),gr(dp,"onAnimationIteration"),gr(up,"onAnimationStart"),gr("dblclick","onDoubleClick"),gr("focusin","onFocus"),gr("focusout","onBlur"),gr(pp,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),j2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function mp(e,t,o){var i=e.type||"unknown-event";e.currentTarget=o,km(i,t,void 0,e),e.currentTarget=null}function gp(e,t){t=(t&4)!==0;for(var o=0;o<e.length;o++){var i=e[o],d=i.event;i=i.listeners;e:{var p=void 0;if(t)for(var x=i.length-1;0<=x;x--){var S=i[x],z=S.instance,V=S.currentTarget;if(S=S.listener,z!==p&&d.isPropagationStopped())break e;mp(d,S,V),p=z}else for(x=0;x<i.length;x++){if(S=i[x],z=S.instance,V=S.currentTarget,S=S.listener,z!==p&&d.isPropagationStopped())break e;mp(d,S,V),p=z}}}if(ys)throw e=xl,ys=!1,xl=null,e}function et(e,t){var o=t[Zl];o===void 0&&(o=t[Zl]=new Set);var i=e+"__bubble";o.has(i)||(vp(t,e,2,!1),o.add(i))}function Hl(e,t,o){var i=0;t&&(i|=4),vp(o,e,i,t)}var zs="_reactListening"+Math.random().toString(36).slice(2);function Na(e){if(!e[zs]){e[zs]=!0,l.forEach(function(o){o!=="selectionchange"&&(j2.has(o)||Hl(o,!1,e),Hl(o,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zs]||(t[zs]=!0,Hl("selectionchange",!1,t))}}function vp(e,t,o,i){switch(Ou(t)){case 1:var d=Bm;break;case 4:d=Om;break;default:d=jl}o=d.bind(null,t,o,e),d=void 0,!vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),i?d!==void 0?e.addEventListener(t,o,{capture:!0,passive:d}):e.addEventListener(t,o,!0):d!==void 0?e.addEventListener(t,o,{passive:d}):e.addEventListener(t,o,!1)}function Wl(e,t,o,i,d){var p=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var x=i.tag;if(x===3||x===4){var S=i.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(x===4)for(x=i.return;x!==null;){var z=x.tag;if((z===3||z===4)&&(z=x.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;x=x.return}for(;S!==null;){if(x=qr(S),x===null)return;if(z=x.tag,z===5||z===6){i=p=x;continue e}S=S.parentNode}}i=i.return}Wr(function(){var V=p,ne=xn(o),re=[];e:{var te=fp.get(e);if(te!==void 0){var ue=$l,me=e;switch(e){case"keypress":if(Ms(o)===0)break e;case"keydown":case"keyup":ue=t2;break;case"focusin":me="focus",ue=El;break;case"focusout":me="blur",ue=El;break;case"beforeblur":case"afterblur":ue=El;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Wm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=o2;break;case cp:case dp:case up:ue=qm;break;case pp:ue=s2;break;case"scroll":ue=Fm;break;case"wheel":ue=l2;break;case"copy":case"cut":case"paste":ue=Ym;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=Uu}var ge=(t&4)!==0,ut=!ge&&e==="scroll",F=ge?te!==null?te+"Capture":null:te;ge=[];for(var P=V,W;P!==null;){W=P;var se=W.stateNode;if(W.tag===5&&se!==null&&(W=se,F!==null&&(se=Vr(P,F),se!=null&&ge.push($a(P,se,W)))),ut)break;P=P.return}0<ge.length&&(te=new ue(te,me,null,o,ne),re.push({event:te,listeners:ge}))}}if((t&7)===0){e:{if(te=e==="mouseover"||e==="pointerover",ue=e==="mouseout"||e==="pointerout",te&&o!==Un&&(me=o.relatedTarget||o.fromElement)&&(qr(me)||me[Yn]))break e;if((ue||te)&&(te=ne.window===ne?ne:(te=ne.ownerDocument)?te.defaultView||te.parentWindow:window,ue?(me=o.relatedTarget||o.toElement,ue=V,me=me?qr(me):null,me!==null&&(ut=Ur(me),me!==ut||me.tag!==5&&me.tag!==6)&&(me=null)):(ue=null,me=V),ue!==me)){if(ge=Wu,se="onMouseLeave",F="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(ge=Uu,se="onPointerLeave",F="onPointerEnter",P="pointer"),ut=ue==null?te:Co(ue),W=me==null?te:Co(me),te=new ge(se,P+"leave",ue,o,ne),te.target=ut,te.relatedTarget=W,se=null,qr(ne)===V&&(ge=new ge(F,P+"enter",me,o,ne),ge.target=W,ge.relatedTarget=ut,se=ge),ut=se,ue&&me)t:{for(ge=ue,F=me,P=0,W=ge;W;W=_o(W))P++;for(W=0,se=F;se;se=_o(se))W++;for(;0<P-W;)ge=_o(ge),P--;for(;0<W-P;)F=_o(F),W--;for(;P--;){if(ge===F||F!==null&&ge===F.alternate)break t;ge=_o(ge),F=_o(F)}ge=null}else ge=null;ue!==null&&xp(re,te,ue,ge,!1),me!==null&&ut!==null&&xp(re,ut,me,ge,!0)}}e:{if(te=V?Co(V):window,ue=te.nodeName&&te.nodeName.toLowerCase(),ue==="select"||ue==="input"&&te.type==="file")var ve=m2;else if(Qu(te))if(Ju)ve=y2;else{ve=v2;var we=g2}else(ue=te.nodeName)&&ue.toLowerCase()==="input"&&(te.type==="checkbox"||te.type==="radio")&&(ve=x2);if(ve&&(ve=ve(e,V))){Xu(re,ve,o,ne);break e}we&&we(e,te,V),e==="focusout"&&(we=te._wrapperState)&&we.controlled&&te.type==="number"&&He(te,"number",te.value)}switch(we=V?Co(V):window,e){case"focusin":(Qu(we)||we.contentEditable==="true")&&(wo=we,Dl=V,ja=null);break;case"focusout":ja=Dl=wo=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,ip(re,o,ne);break;case"selectionchange":if(_2)break;case"keydown":case"keyup":ip(re,o,ne)}var be;if(Il)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else yo?Zu(e,o)&&(je="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(je="onCompositionStart");je&&(qu&&o.locale!=="ko"&&(yo||je!=="onCompositionStart"?je==="onCompositionEnd"&&yo&&(be=Fu()):(mr=ne,Nl="value"in mr?mr.value:mr.textContent,yo=!0)),we=Ds(V,je),0<we.length&&(je=new Vu(je,e,null,o,ne),re.push({event:je,listeners:we}),be?je.data=be:(be=Ku(o),be!==null&&(je.data=be)))),(be=d2?u2(e,o):p2(e,o))&&(V=Ds(V,"onBeforeInput"),0<V.length&&(ne=new Vu("onBeforeInput","beforeinput",null,o,ne),re.push({event:ne,listeners:V}),ne.data=be))}gp(re,t)})}function $a(e,t,o){return{instance:e,listener:t,currentTarget:o}}function Ds(e,t){for(var o=t+"Capture",i=[];e!==null;){var d=e,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Vr(e,o),p!=null&&i.unshift($a(e,p,d)),p=Vr(e,t),p!=null&&i.push($a(e,p,d))),e=e.return}return i}function _o(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xp(e,t,o,i,d){for(var p=t._reactName,x=[];o!==null&&o!==i;){var S=o,z=S.alternate,V=S.stateNode;if(z!==null&&z===i)break;S.tag===5&&V!==null&&(S=V,d?(z=Vr(o,p),z!=null&&x.unshift($a(o,z,S))):d||(z=Vr(o,p),z!=null&&x.push($a(o,z,S)))),o=o.return}x.length!==0&&e.push({event:t,listeners:x})}var S2=/\r\n?/g,N2=/\u0000|\uFFFD/g;function yp(e){return(typeof e=="string"?e:""+e).replace(S2,`
`).replace(N2,"")}function Ps(e,t,o){if(t=yp(t),yp(e)!==t&&o)throw Error(s(425))}function Bs(){}var Vl=null,Ul=null;function ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gl=typeof setTimeout=="function"?setTimeout:void 0,$2=typeof clearTimeout=="function"?clearTimeout:void 0,wp=typeof Promise=="function"?Promise:void 0,L2=typeof queueMicrotask=="function"?queueMicrotask:typeof wp<"u"?function(e){return wp.resolve(null).then(e).catch(M2)}:Gl;function M2(e){setTimeout(function(){throw e})}function Yl(e,t){var o=t,i=0;do{var d=o.nextSibling;if(e.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(i===0){e.removeChild(d),xa(t);return}i--}else o!=="$"&&o!=="$?"&&o!=="$!"||i++;o=d}while(o);xa(t)}function vr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(t===0)return e;t--}else o==="/$"&&t++}e=e.previousSibling}return null}var ko=Math.random().toString(36).slice(2),Tn="__reactFiber$"+ko,La="__reactProps$"+ko,Yn="__reactContainer$"+ko,Zl="__reactEvents$"+ko,E2="__reactListeners$"+ko,R2="__reactHandles$"+ko;function qr(e){var t=e[Tn];if(t)return t;for(var o=e.parentNode;o;){if(t=o[Yn]||o[Tn]){if(o=t.alternate,t.child!==null||o!==null&&o.child!==null)for(e=bp(e);e!==null;){if(o=e[Tn])return o;e=bp(e)}return t}e=o,o=e.parentNode}return null}function Ma(e){return e=e[Tn]||e[Yn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Co(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Os(e){return e[La]||null}var Kl=[],jo=-1;function xr(e){return{current:e}}function tt(e){0>jo||(e.current=Kl[jo],Kl[jo]=null,jo--)}function Qe(e,t){jo++,Kl[jo]=e.current,e.current=t}var yr={},Rt=xr(yr),Ft=xr(!1),Gr=yr;function So(e,t){var o=e.type.contextTypes;if(!o)return yr;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===t)return i.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=t[p];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=d),d}function Ht(e){return e=e.childContextTypes,e!=null}function Fs(){tt(Ft),tt(Rt)}function _p(e,t,o){if(Rt.current!==yr)throw Error(s(168));Qe(Rt,t),Qe(Ft,o)}function kp(e,t,o){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!="function")return o;i=i.getChildContext();for(var d in i)if(!(d in t))throw Error(s(108,pe(e)||"Unknown",d));return H({},o,i)}function Hs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||yr,Gr=Rt.current,Qe(Rt,e),Qe(Ft,Ft.current),!0}function Cp(e,t,o){var i=e.stateNode;if(!i)throw Error(s(169));o?(e=kp(e,t,Gr),i.__reactInternalMemoizedMergedChildContext=e,tt(Ft),tt(Rt),Qe(Rt,e)):tt(Ft),Qe(Ft,o)}var Zn=null,Ws=!1,Ql=!1;function jp(e){Zn===null?Zn=[e]:Zn.push(e)}function I2(e){Ws=!0,jp(e)}function wr(){if(!Ql&&Zn!==null){Ql=!0;var e=0,t=Ue;try{var o=Zn;for(Ue=1;e<o.length;e++){var i=o[e];do i=i(!0);while(i!==null)}Zn=null,Ws=!1}catch(d){throw Zn!==null&&(Zn=Zn.slice(e+1)),Nu(yl,wr),d}finally{Ue=t,Ql=!1}}return null}var No=[],$o=0,Vs=null,Us=0,cn=[],dn=0,Yr=null,Kn=1,Qn="";function Zr(e,t){No[$o++]=Us,No[$o++]=Vs,Vs=e,Us=t}function Sp(e,t,o){cn[dn++]=Kn,cn[dn++]=Qn,cn[dn++]=Yr,Yr=e;var i=Kn;e=Qn;var d=32-yn(i)-1;i&=~(1<<d),o+=1;var p=32-yn(t)+d;if(30<p){var x=d-d%5;p=(i&(1<<x)-1).toString(32),i>>=x,d-=x,Kn=1<<32-yn(t)+d|o<<d|i,Qn=p+e}else Kn=1<<p|o<<d|i,Qn=e}function Xl(e){e.return!==null&&(Zr(e,1),Sp(e,1,0))}function Jl(e){for(;e===Vs;)Vs=No[--$o],No[$o]=null,Us=No[--$o],No[$o]=null;for(;e===Yr;)Yr=cn[--dn],cn[dn]=null,Qn=cn[--dn],cn[dn]=null,Kn=cn[--dn],cn[dn]=null}var Qt=null,Xt=null,rt=!1,bn=null;function Np(e,t){var o=hn(5,null,null,0);o.elementType="DELETED",o.stateNode=t,o.return=e,t=e.deletions,t===null?(e.deletions=[o],e.flags|=16):t.push(o)}function $p(e,t){switch(e.tag){case 5:var o=e.type;return t=t.nodeType!==1||o.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qt=e,Xt=vr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qt=e,Xt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(o=Yr!==null?{id:Kn,overflow:Qn}:null,e.memoizedState={dehydrated:t,treeContext:o,retryLane:1073741824},o=hn(18,null,null,0),o.stateNode=t,o.return=e,e.child=o,Qt=e,Xt=null,!0):!1;default:return!1}}function ec(e){return(e.mode&1)!==0&&(e.flags&128)===0}function tc(e){if(rt){var t=Xt;if(t){var o=t;if(!$p(e,t)){if(ec(e))throw Error(s(418));t=vr(o.nextSibling);var i=Qt;t&&$p(e,t)?Np(i,o):(e.flags=e.flags&-4097|2,rt=!1,Qt=e)}}else{if(ec(e))throw Error(s(418));e.flags=e.flags&-4097|2,rt=!1,Qt=e}}}function Lp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qt=e}function qs(e){if(e!==Qt)return!1;if(!rt)return Lp(e),rt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ql(e.type,e.memoizedProps)),t&&(t=Xt)){if(ec(e))throw Mp(),Error(s(418));for(;t;)Np(e,t),t=vr(t.nextSibling)}if(Lp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(t===0){Xt=vr(e.nextSibling);break e}t--}else o!=="$"&&o!=="$!"&&o!=="$?"||t++}e=e.nextSibling}Xt=null}}else Xt=Qt?vr(e.stateNode.nextSibling):null;return!0}function Mp(){for(var e=Xt;e;)e=vr(e.nextSibling)}function Lo(){Xt=Qt=null,rt=!1}function nc(e){bn===null?bn=[e]:bn.push(e)}var T2=D.ReactCurrentBatchConfig;function Ea(e,t,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(s(309));var i=o.stateNode}if(!i)throw Error(s(147,e));var d=i,p=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===p?t.ref:(t=function(x){var S=d.refs;x===null?delete S[p]:S[p]=x},t._stringRef=p,t)}if(typeof e!="string")throw Error(s(284));if(!o._owner)throw Error(s(290,e))}return e}function Gs(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ep(e){var t=e._init;return t(e._payload)}function Rp(e){function t(F,P){if(e){var W=F.deletions;W===null?(F.deletions=[P],F.flags|=16):W.push(P)}}function o(F,P){if(!e)return null;for(;P!==null;)t(F,P),P=P.sibling;return null}function i(F,P){for(F=new Map;P!==null;)P.key!==null?F.set(P.key,P):F.set(P.index,P),P=P.sibling;return F}function d(F,P){return F=$r(F,P),F.index=0,F.sibling=null,F}function p(F,P,W){return F.index=W,e?(W=F.alternate,W!==null?(W=W.index,W<P?(F.flags|=2,P):W):(F.flags|=2,P)):(F.flags|=1048576,P)}function x(F){return e&&F.alternate===null&&(F.flags|=2),F}function S(F,P,W,se){return P===null||P.tag!==6?(P=Gc(W,F.mode,se),P.return=F,P):(P=d(P,W),P.return=F,P)}function z(F,P,W,se){var ve=W.type;return ve===R?ne(F,P,W.props.children,se,W.key):P!==null&&(P.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===ie&&Ep(ve)===P.type)?(se=d(P,W.props),se.ref=Ea(F,P,W),se.return=F,se):(se=vi(W.type,W.key,W.props,null,F.mode,se),se.ref=Ea(F,P,W),se.return=F,se)}function V(F,P,W,se){return P===null||P.tag!==4||P.stateNode.containerInfo!==W.containerInfo||P.stateNode.implementation!==W.implementation?(P=Yc(W,F.mode,se),P.return=F,P):(P=d(P,W.children||[]),P.return=F,P)}function ne(F,P,W,se,ve){return P===null||P.tag!==7?(P=ro(W,F.mode,se,ve),P.return=F,P):(P=d(P,W),P.return=F,P)}function re(F,P,W){if(typeof P=="string"&&P!==""||typeof P=="number")return P=Gc(""+P,F.mode,W),P.return=F,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case E:return W=vi(P.type,P.key,P.props,null,F.mode,W),W.ref=Ea(F,null,P),W.return=F,W;case B:return P=Yc(P,F.mode,W),P.return=F,P;case ie:var se=P._init;return re(F,se(P._payload),W)}if(Ze(P)||O(P))return P=ro(P,F.mode,W,null),P.return=F,P;Gs(F,P)}return null}function te(F,P,W,se){var ve=P!==null?P.key:null;if(typeof W=="string"&&W!==""||typeof W=="number")return ve!==null?null:S(F,P,""+W,se);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case E:return W.key===ve?z(F,P,W,se):null;case B:return W.key===ve?V(F,P,W,se):null;case ie:return ve=W._init,te(F,P,ve(W._payload),se)}if(Ze(W)||O(W))return ve!==null?null:ne(F,P,W,se,null);Gs(F,W)}return null}function ue(F,P,W,se,ve){if(typeof se=="string"&&se!==""||typeof se=="number")return F=F.get(W)||null,S(P,F,""+se,ve);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case E:return F=F.get(se.key===null?W:se.key)||null,z(P,F,se,ve);case B:return F=F.get(se.key===null?W:se.key)||null,V(P,F,se,ve);case ie:var we=se._init;return ue(F,P,W,we(se._payload),ve)}if(Ze(se)||O(se))return F=F.get(W)||null,ne(P,F,se,ve,null);Gs(P,se)}return null}function me(F,P,W,se){for(var ve=null,we=null,be=P,je=P=0,St=null;be!==null&&je<W.length;je++){be.index>je?(St=be,be=null):St=be.sibling;var Be=te(F,be,W[je],se);if(Be===null){be===null&&(be=St);break}e&&be&&Be.alternate===null&&t(F,be),P=p(Be,P,je),we===null?ve=Be:we.sibling=Be,we=Be,be=St}if(je===W.length)return o(F,be),rt&&Zr(F,je),ve;if(be===null){for(;je<W.length;je++)be=re(F,W[je],se),be!==null&&(P=p(be,P,je),we===null?ve=be:we.sibling=be,we=be);return rt&&Zr(F,je),ve}for(be=i(F,be);je<W.length;je++)St=ue(be,F,je,W[je],se),St!==null&&(e&&St.alternate!==null&&be.delete(St.key===null?je:St.key),P=p(St,P,je),we===null?ve=St:we.sibling=St,we=St);return e&&be.forEach(function(Lr){return t(F,Lr)}),rt&&Zr(F,je),ve}function ge(F,P,W,se){var ve=O(W);if(typeof ve!="function")throw Error(s(150));if(W=ve.call(W),W==null)throw Error(s(151));for(var we=ve=null,be=P,je=P=0,St=null,Be=W.next();be!==null&&!Be.done;je++,Be=W.next()){be.index>je?(St=be,be=null):St=be.sibling;var Lr=te(F,be,Be.value,se);if(Lr===null){be===null&&(be=St);break}e&&be&&Lr.alternate===null&&t(F,be),P=p(Lr,P,je),we===null?ve=Lr:we.sibling=Lr,we=Lr,be=St}if(Be.done)return o(F,be),rt&&Zr(F,je),ve;if(be===null){for(;!Be.done;je++,Be=W.next())Be=re(F,Be.value,se),Be!==null&&(P=p(Be,P,je),we===null?ve=Be:we.sibling=Be,we=Be);return rt&&Zr(F,je),ve}for(be=i(F,be);!Be.done;je++,Be=W.next())Be=ue(be,F,je,Be.value,se),Be!==null&&(e&&Be.alternate!==null&&be.delete(Be.key===null?je:Be.key),P=p(Be,P,je),we===null?ve=Be:we.sibling=Be,we=Be);return e&&be.forEach(function(fg){return t(F,fg)}),rt&&Zr(F,je),ve}function ut(F,P,W,se){if(typeof W=="object"&&W!==null&&W.type===R&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case E:e:{for(var ve=W.key,we=P;we!==null;){if(we.key===ve){if(ve=W.type,ve===R){if(we.tag===7){o(F,we.sibling),P=d(we,W.props.children),P.return=F,F=P;break e}}else if(we.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===ie&&Ep(ve)===we.type){o(F,we.sibling),P=d(we,W.props),P.ref=Ea(F,we,W),P.return=F,F=P;break e}o(F,we);break}else t(F,we);we=we.sibling}W.type===R?(P=ro(W.props.children,F.mode,se,W.key),P.return=F,F=P):(se=vi(W.type,W.key,W.props,null,F.mode,se),se.ref=Ea(F,P,W),se.return=F,F=se)}return x(F);case B:e:{for(we=W.key;P!==null;){if(P.key===we)if(P.tag===4&&P.stateNode.containerInfo===W.containerInfo&&P.stateNode.implementation===W.implementation){o(F,P.sibling),P=d(P,W.children||[]),P.return=F,F=P;break e}else{o(F,P);break}else t(F,P);P=P.sibling}P=Yc(W,F.mode,se),P.return=F,F=P}return x(F);case ie:return we=W._init,ut(F,P,we(W._payload),se)}if(Ze(W))return me(F,P,W,se);if(O(W))return ge(F,P,W,se);Gs(F,W)}return typeof W=="string"&&W!==""||typeof W=="number"?(W=""+W,P!==null&&P.tag===6?(o(F,P.sibling),P=d(P,W),P.return=F,F=P):(o(F,P),P=Gc(W,F.mode,se),P.return=F,F=P),x(F)):o(F,P)}return ut}var Mo=Rp(!0),Ip=Rp(!1),Ys=xr(null),Zs=null,Eo=null,rc=null;function oc(){rc=Eo=Zs=null}function ac(e){var t=Ys.current;tt(Ys),e._currentValue=t}function sc(e,t,o){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===o)break;e=e.return}}function Ro(e,t){Zs=e,rc=Eo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Wt=!0),e.firstContext=null)}function un(e){var t=e._currentValue;if(rc!==e)if(e={context:e,memoizedValue:t,next:null},Eo===null){if(Zs===null)throw Error(s(308));Eo=e,Zs.dependencies={lanes:0,firstContext:e}}else Eo=Eo.next=e;return t}var Kr=null;function ic(e){Kr===null?Kr=[e]:Kr.push(e)}function Tp(e,t,o,i){var d=t.interleaved;return d===null?(o.next=o,ic(t)):(o.next=d.next,d.next=o),t.interleaved=o,Xn(e,i)}function Xn(e,t){e.lanes|=t;var o=e.alternate;for(o!==null&&(o.lanes|=t),o=e,e=e.return;e!==null;)e.childLanes|=t,o=e.alternate,o!==null&&(o.childLanes|=t),o=e,e=e.return;return o.tag===3?o.stateNode:null}var br=!1;function lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ap(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _r(e,t,o){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(De&2)!==0){var d=i.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),i.pending=t,Xn(e,o)}return d=i.interleaved,d===null?(t.next=t,ic(i)):(t.next=d.next,d.next=t),i.interleaved=t,Xn(e,o)}function Ks(e,t,o){if(t=t.updateQueue,t!==null&&(t=t.shared,(o&4194240)!==0)){var i=t.lanes;i&=e.pendingLanes,o|=i,t.lanes=o,_l(e,o)}}function zp(e,t){var o=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,o===i)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var x={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=x:p=p.next=x,o=o.next}while(o!==null);p===null?d=p=t:p=p.next=t}else d=p=t;o={baseState:i.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:i.shared,effects:i.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=t:e.next=t,o.lastBaseUpdate=t}function Qs(e,t,o,i){var d=e.updateQueue;br=!1;var p=d.firstBaseUpdate,x=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var z=S,V=z.next;z.next=null,x===null?p=V:x.next=V,x=z;var ne=e.alternate;ne!==null&&(ne=ne.updateQueue,S=ne.lastBaseUpdate,S!==x&&(S===null?ne.firstBaseUpdate=V:S.next=V,ne.lastBaseUpdate=z))}if(p!==null){var re=d.baseState;x=0,ne=V=z=null,S=p;do{var te=S.lane,ue=S.eventTime;if((i&te)===te){ne!==null&&(ne=ne.next={eventTime:ue,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var me=e,ge=S;switch(te=t,ue=o,ge.tag){case 1:if(me=ge.payload,typeof me=="function"){re=me.call(ue,re,te);break e}re=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ge.payload,te=typeof me=="function"?me.call(ue,re,te):me,te==null)break e;re=H({},re,te);break e;case 2:br=!0}}S.callback!==null&&S.lane!==0&&(e.flags|=64,te=d.effects,te===null?d.effects=[S]:te.push(S))}else ue={eventTime:ue,lane:te,tag:S.tag,payload:S.payload,callback:S.callback,next:null},ne===null?(V=ne=ue,z=re):ne=ne.next=ue,x|=te;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;te=S,S=te.next,te.next=null,d.lastBaseUpdate=te,d.shared.pending=null}}while(!0);if(ne===null&&(z=re),d.baseState=z,d.firstBaseUpdate=V,d.lastBaseUpdate=ne,t=d.shared.interleaved,t!==null){d=t;do x|=d.lane,d=d.next;while(d!==t)}else p===null&&(d.shared.lanes=0);Jr|=x,e.lanes=x,e.memoizedState=re}}function Dp(e,t,o){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],d=i.callback;if(d!==null){if(i.callback=null,i=o,typeof d!="function")throw Error(s(191,d));d.call(i)}}}var Ra={},An=xr(Ra),Ia=xr(Ra),Ta=xr(Ra);function Qr(e){if(e===Ra)throw Error(s(174));return e}function cc(e,t){switch(Qe(Ta,t),Qe(Ia,e),Qe(An,Ra),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ot(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ot(t,e)}tt(An),Qe(An,t)}function Io(){tt(An),tt(Ia),tt(Ta)}function Pp(e){Qr(Ta.current);var t=Qr(An.current),o=Ot(t,e.type);t!==o&&(Qe(Ia,e),Qe(An,o))}function dc(e){Ia.current===e&&(tt(An),tt(Ia))}var it=xr(0);function Xs(e){for(var t=e;t!==null;){if(t.tag===13){var o=t.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var uc=[];function pc(){for(var e=0;e<uc.length;e++)uc[e]._workInProgressVersionPrimary=null;uc.length=0}var Js=D.ReactCurrentDispatcher,fc=D.ReactCurrentBatchConfig,Xr=0,lt=null,wt=null,Ct=null,ei=!1,Aa=!1,za=0,A2=0;function It(){throw Error(s(321))}function hc(e,t){if(t===null)return!1;for(var o=0;o<t.length&&o<e.length;o++)if(!wn(e[o],t[o]))return!1;return!0}function mc(e,t,o,i,d,p){if(Xr=p,lt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Js.current=e===null||e.memoizedState===null?B2:O2,e=o(i,d),Aa){p=0;do{if(Aa=!1,za=0,25<=p)throw Error(s(301));p+=1,Ct=wt=null,t.updateQueue=null,Js.current=F2,e=o(i,d)}while(Aa)}if(Js.current=ri,t=wt!==null&&wt.next!==null,Xr=0,Ct=wt=lt=null,ei=!1,t)throw Error(s(300));return e}function gc(){var e=za!==0;return za=0,e}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?lt.memoizedState=Ct=e:Ct=Ct.next=e,Ct}function pn(){if(wt===null){var e=lt.alternate;e=e!==null?e.memoizedState:null}else e=wt.next;var t=Ct===null?lt.memoizedState:Ct.next;if(t!==null)Ct=t,wt=e;else{if(e===null)throw Error(s(310));wt=e,e={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Ct===null?lt.memoizedState=Ct=e:Ct=Ct.next=e}return Ct}function Da(e,t){return typeof t=="function"?t(e):t}function vc(e){var t=pn(),o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=e;var i=wt,d=i.baseQueue,p=o.pending;if(p!==null){if(d!==null){var x=d.next;d.next=p.next,p.next=x}i.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,i=i.baseState;var S=x=null,z=null,V=p;do{var ne=V.lane;if((Xr&ne)===ne)z!==null&&(z=z.next={lane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),i=V.hasEagerState?V.eagerState:e(i,V.action);else{var re={lane:ne,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null};z===null?(S=z=re,x=i):z=z.next=re,lt.lanes|=ne,Jr|=ne}V=V.next}while(V!==null&&V!==p);z===null?x=i:z.next=S,wn(i,t.memoizedState)||(Wt=!0),t.memoizedState=i,t.baseState=x,t.baseQueue=z,o.lastRenderedState=i}if(e=o.interleaved,e!==null){d=e;do p=d.lane,lt.lanes|=p,Jr|=p,d=d.next;while(d!==e)}else d===null&&(o.lanes=0);return[t.memoizedState,o.dispatch]}function xc(e){var t=pn(),o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=e;var i=o.dispatch,d=o.pending,p=t.memoizedState;if(d!==null){o.pending=null;var x=d=d.next;do p=e(p,x.action),x=x.next;while(x!==d);wn(p,t.memoizedState)||(Wt=!0),t.memoizedState=p,t.baseQueue===null&&(t.baseState=p),o.lastRenderedState=p}return[p,i]}function Bp(){}function Op(e,t){var o=lt,i=pn(),d=t(),p=!wn(i.memoizedState,d);if(p&&(i.memoizedState=d,Wt=!0),i=i.queue,yc(Wp.bind(null,o,i,e),[e]),i.getSnapshot!==t||p||Ct!==null&&Ct.memoizedState.tag&1){if(o.flags|=2048,Pa(9,Hp.bind(null,o,i,d,t),void 0,null),jt===null)throw Error(s(349));(Xr&30)!==0||Fp(o,t,d)}return d}function Fp(e,t,o){e.flags|=16384,e={getSnapshot:t,value:o},t=lt.updateQueue,t===null?(t={lastEffect:null,stores:null},lt.updateQueue=t,t.stores=[e]):(o=t.stores,o===null?t.stores=[e]:o.push(e))}function Hp(e,t,o,i){t.value=o,t.getSnapshot=i,Vp(t)&&Up(e)}function Wp(e,t,o){return o(function(){Vp(t)&&Up(e)})}function Vp(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!wn(e,o)}catch{return!0}}function Up(e){var t=Xn(e,1);t!==null&&jn(t,e,1,-1)}function qp(e){var t=zn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:e},t.queue=e,e=e.dispatch=P2.bind(null,lt,e),[t.memoizedState,e]}function Pa(e,t,o,i){return e={tag:e,create:t,destroy:o,deps:i,next:null},t=lt.updateQueue,t===null?(t={lastEffect:null,stores:null},lt.updateQueue=t,t.lastEffect=e.next=e):(o=t.lastEffect,o===null?t.lastEffect=e.next=e:(i=o.next,o.next=e,e.next=i,t.lastEffect=e)),e}function Gp(){return pn().memoizedState}function ti(e,t,o,i){var d=zn();lt.flags|=e,d.memoizedState=Pa(1|t,o,void 0,i===void 0?null:i)}function ni(e,t,o,i){var d=pn();i=i===void 0?null:i;var p=void 0;if(wt!==null){var x=wt.memoizedState;if(p=x.destroy,i!==null&&hc(i,x.deps)){d.memoizedState=Pa(t,o,p,i);return}}lt.flags|=e,d.memoizedState=Pa(1|t,o,p,i)}function Yp(e,t){return ti(8390656,8,e,t)}function yc(e,t){return ni(2048,8,e,t)}function Zp(e,t){return ni(4,2,e,t)}function Kp(e,t){return ni(4,4,e,t)}function Qp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xp(e,t,o){return o=o!=null?o.concat([e]):null,ni(4,4,Qp.bind(null,t,e),o)}function wc(){}function Jp(e,t){var o=pn();t=t===void 0?null:t;var i=o.memoizedState;return i!==null&&t!==null&&hc(t,i[1])?i[0]:(o.memoizedState=[e,t],e)}function e1(e,t){var o=pn();t=t===void 0?null:t;var i=o.memoizedState;return i!==null&&t!==null&&hc(t,i[1])?i[0]:(e=e(),o.memoizedState=[e,t],e)}function t1(e,t,o){return(Xr&21)===0?(e.baseState&&(e.baseState=!1,Wt=!0),e.memoizedState=o):(wn(o,t)||(o=Eu(),lt.lanes|=o,Jr|=o,e.baseState=!0),t)}function z2(e,t){var o=Ue;Ue=o!==0&&4>o?o:4,e(!0);var i=fc.transition;fc.transition={};try{e(!1),t()}finally{Ue=o,fc.transition=i}}function n1(){return pn().memoizedState}function D2(e,t,o){var i=Sr(e);if(o={lane:i,action:o,hasEagerState:!1,eagerState:null,next:null},r1(e))o1(t,o);else if(o=Tp(e,t,o,i),o!==null){var d=Bt();jn(o,e,i,d),a1(o,t,i)}}function P2(e,t,o){var i=Sr(e),d={lane:i,action:o,hasEagerState:!1,eagerState:null,next:null};if(r1(e))o1(t,d);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=t.lastRenderedReducer,p!==null))try{var x=t.lastRenderedState,S=p(x,o);if(d.hasEagerState=!0,d.eagerState=S,wn(S,x)){var z=t.interleaved;z===null?(d.next=d,ic(t)):(d.next=z.next,z.next=d),t.interleaved=d;return}}catch{}finally{}o=Tp(e,t,d,i),o!==null&&(d=Bt(),jn(o,e,i,d),a1(o,t,i))}}function r1(e){var t=e.alternate;return e===lt||t!==null&&t===lt}function o1(e,t){Aa=ei=!0;var o=e.pending;o===null?t.next=t:(t.next=o.next,o.next=t),e.pending=t}function a1(e,t,o){if((o&4194240)!==0){var i=t.lanes;i&=e.pendingLanes,o|=i,t.lanes=o,_l(e,o)}}var ri={readContext:un,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},B2={readContext:un,useCallback:function(e,t){return zn().memoizedState=[e,t===void 0?null:t],e},useContext:un,useEffect:Yp,useImperativeHandle:function(e,t,o){return o=o!=null?o.concat([e]):null,ti(4194308,4,Qp.bind(null,t,e),o)},useLayoutEffect:function(e,t){return ti(4194308,4,e,t)},useInsertionEffect:function(e,t){return ti(4,2,e,t)},useMemo:function(e,t){var o=zn();return t=t===void 0?null:t,e=e(),o.memoizedState=[e,t],e},useReducer:function(e,t,o){var i=zn();return t=o!==void 0?o(t):t,i.memoizedState=i.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},i.queue=e,e=e.dispatch=D2.bind(null,lt,e),[i.memoizedState,e]},useRef:function(e){var t=zn();return e={current:e},t.memoizedState=e},useState:qp,useDebugValue:wc,useDeferredValue:function(e){return zn().memoizedState=e},useTransition:function(){var e=qp(!1),t=e[0];return e=z2.bind(null,e[1]),zn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,o){var i=lt,d=zn();if(rt){if(o===void 0)throw Error(s(407));o=o()}else{if(o=t(),jt===null)throw Error(s(349));(Xr&30)!==0||Fp(i,t,o)}d.memoizedState=o;var p={value:o,getSnapshot:t};return d.queue=p,Yp(Wp.bind(null,i,p,e),[e]),i.flags|=2048,Pa(9,Hp.bind(null,i,p,o,t),void 0,null),o},useId:function(){var e=zn(),t=jt.identifierPrefix;if(rt){var o=Qn,i=Kn;o=(i&~(1<<32-yn(i)-1)).toString(32)+o,t=":"+t+"R"+o,o=za++,0<o&&(t+="H"+o.toString(32)),t+=":"}else o=A2++,t=":"+t+"r"+o.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},O2={readContext:un,useCallback:Jp,useContext:un,useEffect:yc,useImperativeHandle:Xp,useInsertionEffect:Zp,useLayoutEffect:Kp,useMemo:e1,useReducer:vc,useRef:Gp,useState:function(){return vc(Da)},useDebugValue:wc,useDeferredValue:function(e){var t=pn();return t1(t,wt.memoizedState,e)},useTransition:function(){var e=vc(Da)[0],t=pn().memoizedState;return[e,t]},useMutableSource:Bp,useSyncExternalStore:Op,useId:n1,unstable_isNewReconciler:!1},F2={readContext:un,useCallback:Jp,useContext:un,useEffect:yc,useImperativeHandle:Xp,useInsertionEffect:Zp,useLayoutEffect:Kp,useMemo:e1,useReducer:xc,useRef:Gp,useState:function(){return xc(Da)},useDebugValue:wc,useDeferredValue:function(e){var t=pn();return wt===null?t.memoizedState=e:t1(t,wt.memoizedState,e)},useTransition:function(){var e=xc(Da)[0],t=pn().memoizedState;return[e,t]},useMutableSource:Bp,useSyncExternalStore:Op,useId:n1,unstable_isNewReconciler:!1};function _n(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var o in e)t[o]===void 0&&(t[o]=e[o]);return t}return t}function bc(e,t,o,i){t=e.memoizedState,o=o(i,t),o=o==null?t:H({},t,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var oi={isMounted:function(e){return(e=e._reactInternals)?Ur(e)===e:!1},enqueueSetState:function(e,t,o){e=e._reactInternals;var i=Bt(),d=Sr(e),p=Jn(i,d);p.payload=t,o!=null&&(p.callback=o),t=_r(e,p,d),t!==null&&(jn(t,e,d,i),Ks(t,e,d))},enqueueReplaceState:function(e,t,o){e=e._reactInternals;var i=Bt(),d=Sr(e),p=Jn(i,d);p.tag=1,p.payload=t,o!=null&&(p.callback=o),t=_r(e,p,d),t!==null&&(jn(t,e,d,i),Ks(t,e,d))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var o=Bt(),i=Sr(e),d=Jn(o,i);d.tag=2,t!=null&&(d.callback=t),t=_r(e,d,i),t!==null&&(jn(t,e,i,o),Ks(t,e,i))}};function s1(e,t,o,i,d,p,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,p,x):t.prototype&&t.prototype.isPureReactComponent?!Ca(o,i)||!Ca(d,p):!0}function i1(e,t,o){var i=!1,d=yr,p=t.contextType;return typeof p=="object"&&p!==null?p=un(p):(d=Ht(t)?Gr:Rt.current,i=t.contextTypes,p=(i=i!=null)?So(e,d):yr),t=new t(o,p),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=oi,e.stateNode=t,t._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=p),t}function l1(e,t,o,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(o,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(o,i),t.state!==e&&oi.enqueueReplaceState(t,t.state,null)}function _c(e,t,o,i){var d=e.stateNode;d.props=o,d.state=e.memoizedState,d.refs={},lc(e);var p=t.contextType;typeof p=="object"&&p!==null?d.context=un(p):(p=Ht(t)?Gr:Rt.current,d.context=So(e,p)),d.state=e.memoizedState,p=t.getDerivedStateFromProps,typeof p=="function"&&(bc(e,t,p,o),d.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(t=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),t!==d.state&&oi.enqueueReplaceState(d,d.state,null),Qs(e,o,d,i),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function To(e,t){try{var o="",i=t;do o+=ae(i),i=i.return;while(i);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:e,source:t,stack:d,digest:null}}function kc(e,t,o){return{value:e,source:null,stack:o??null,digest:t??null}}function Cc(e,t){try{console.error(t.value)}catch(o){setTimeout(function(){throw o})}}var H2=typeof WeakMap=="function"?WeakMap:Map;function c1(e,t,o){o=Jn(-1,o),o.tag=3,o.payload={element:null};var i=t.value;return o.callback=function(){ui||(ui=!0,Bc=i),Cc(e,t)},o}function d1(e,t,o){o=Jn(-1,o),o.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var d=t.value;o.payload=function(){return i(d)},o.callback=function(){Cc(e,t)}}var p=e.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Cc(e,t),typeof i!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var x=t.stack;this.componentDidCatch(t.value,{componentStack:x!==null?x:""})}),o}function u1(e,t,o){var i=e.pingCache;if(i===null){i=e.pingCache=new H2;var d=new Set;i.set(t,d)}else d=i.get(t),d===void 0&&(d=new Set,i.set(t,d));d.has(o)||(d.add(o),e=ng.bind(null,e,t,o),t.then(e,e))}function p1(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function f1(e,t,o,i,d){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(t=Jn(-1,1),t.tag=2,_r(o,t,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var W2=D.ReactCurrentOwner,Wt=!1;function Pt(e,t,o,i){t.child=e===null?Ip(t,null,o,i):Mo(t,e.child,o,i)}function h1(e,t,o,i,d){o=o.render;var p=t.ref;return Ro(t,d),i=mc(e,t,o,i,p,d),o=gc(),e!==null&&!Wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~d,er(e,t,d)):(rt&&o&&Xl(t),t.flags|=1,Pt(e,t,i,d),t.child)}function m1(e,t,o,i,d){if(e===null){var p=o.type;return typeof p=="function"&&!qc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(t.tag=15,t.type=p,g1(e,t,p,i,d)):(e=vi(o.type,null,i,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(p=e.child,(e.lanes&d)===0){var x=p.memoizedProps;if(o=o.compare,o=o!==null?o:Ca,o(x,i)&&e.ref===t.ref)return er(e,t,d)}return t.flags|=1,e=$r(p,i),e.ref=t.ref,e.return=t,t.child=e}function g1(e,t,o,i,d){if(e!==null){var p=e.memoizedProps;if(Ca(p,i)&&e.ref===t.ref)if(Wt=!1,t.pendingProps=i=p,(e.lanes&d)!==0)(e.flags&131072)!==0&&(Wt=!0);else return t.lanes=e.lanes,er(e,t,d)}return jc(e,t,o,i,d)}function v1(e,t,o){var i=t.pendingProps,d=i.children,p=e!==null?e.memoizedState:null;if(i.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(zo,Jt),Jt|=o;else{if((o&1073741824)===0)return e=p!==null?p.baseLanes|o:o,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Qe(zo,Jt),Jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=p!==null?p.baseLanes:o,Qe(zo,Jt),Jt|=i}else p!==null?(i=p.baseLanes|o,t.memoizedState=null):i=o,Qe(zo,Jt),Jt|=i;return Pt(e,t,d,o),t.child}function x1(e,t){var o=t.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(t.flags|=512,t.flags|=2097152)}function jc(e,t,o,i,d){var p=Ht(o)?Gr:Rt.current;return p=So(t,p),Ro(t,d),o=mc(e,t,o,i,p,d),i=gc(),e!==null&&!Wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~d,er(e,t,d)):(rt&&i&&Xl(t),t.flags|=1,Pt(e,t,o,d),t.child)}function y1(e,t,o,i,d){if(Ht(o)){var p=!0;Hs(t)}else p=!1;if(Ro(t,d),t.stateNode===null)si(e,t),i1(t,o,i),_c(t,o,i,d),i=!0;else if(e===null){var x=t.stateNode,S=t.memoizedProps;x.props=S;var z=x.context,V=o.contextType;typeof V=="object"&&V!==null?V=un(V):(V=Ht(o)?Gr:Rt.current,V=So(t,V));var ne=o.getDerivedStateFromProps,re=typeof ne=="function"||typeof x.getSnapshotBeforeUpdate=="function";re||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(S!==i||z!==V)&&l1(t,x,i,V),br=!1;var te=t.memoizedState;x.state=te,Qs(t,i,x,d),z=t.memoizedState,S!==i||te!==z||Ft.current||br?(typeof ne=="function"&&(bc(t,o,ne,i),z=t.memoizedState),(S=br||s1(t,o,S,i,te,z,V))?(re||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount()),typeof x.componentDidMount=="function"&&(t.flags|=4194308)):(typeof x.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=z),x.props=i,x.state=z,x.context=V,i=S):(typeof x.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{x=t.stateNode,Ap(e,t),S=t.memoizedProps,V=t.type===t.elementType?S:_n(t.type,S),x.props=V,re=t.pendingProps,te=x.context,z=o.contextType,typeof z=="object"&&z!==null?z=un(z):(z=Ht(o)?Gr:Rt.current,z=So(t,z));var ue=o.getDerivedStateFromProps;(ne=typeof ue=="function"||typeof x.getSnapshotBeforeUpdate=="function")||typeof x.UNSAFE_componentWillReceiveProps!="function"&&typeof x.componentWillReceiveProps!="function"||(S!==re||te!==z)&&l1(t,x,i,z),br=!1,te=t.memoizedState,x.state=te,Qs(t,i,x,d);var me=t.memoizedState;S!==re||te!==me||Ft.current||br?(typeof ue=="function"&&(bc(t,o,ue,i),me=t.memoizedState),(V=br||s1(t,o,V,i,te,me,z)||!1)?(ne||typeof x.UNSAFE_componentWillUpdate!="function"&&typeof x.componentWillUpdate!="function"||(typeof x.componentWillUpdate=="function"&&x.componentWillUpdate(i,me,z),typeof x.UNSAFE_componentWillUpdate=="function"&&x.UNSAFE_componentWillUpdate(i,me,z)),typeof x.componentDidUpdate=="function"&&(t.flags|=4),typeof x.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof x.componentDidUpdate!="function"||S===e.memoizedProps&&te===e.memoizedState||(t.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&te===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=me),x.props=i,x.state=me,x.context=z,i=V):(typeof x.componentDidUpdate!="function"||S===e.memoizedProps&&te===e.memoizedState||(t.flags|=4),typeof x.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&te===e.memoizedState||(t.flags|=1024),i=!1)}return Sc(e,t,o,i,p,d)}function Sc(e,t,o,i,d,p){x1(e,t);var x=(t.flags&128)!==0;if(!i&&!x)return d&&Cp(t,o,!1),er(e,t,p);i=t.stateNode,W2.current=t;var S=x&&typeof o.getDerivedStateFromError!="function"?null:i.render();return t.flags|=1,e!==null&&x?(t.child=Mo(t,e.child,null,p),t.child=Mo(t,null,S,p)):Pt(e,t,S,p),t.memoizedState=i.state,d&&Cp(t,o,!0),t.child}function w1(e){var t=e.stateNode;t.pendingContext?_p(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_p(e,t.context,!1),cc(e,t.containerInfo)}function b1(e,t,o,i,d){return Lo(),nc(d),t.flags|=256,Pt(e,t,o,i),t.child}var Nc={dehydrated:null,treeContext:null,retryLane:0};function $c(e){return{baseLanes:e,cachePool:null,transitions:null}}function _1(e,t,o){var i=t.pendingProps,d=it.current,p=!1,x=(t.flags&128)!==0,S;if((S=x)||(S=e!==null&&e.memoizedState===null?!1:(d&2)!==0),S?(p=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),Qe(it,d&1),e===null)return tc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(x=i.children,e=i.fallback,p?(i=t.mode,p=t.child,x={mode:"hidden",children:x},(i&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=x):p=xi(x,i,0,null),e=ro(e,i,o,null),p.return=t,e.return=t,p.sibling=e,t.child=p,t.child.memoizedState=$c(o),t.memoizedState=Nc,e):Lc(t,x));if(d=e.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return V2(e,t,x,i,S,d,o);if(p){p=i.fallback,x=t.mode,d=e.child,S=d.sibling;var z={mode:"hidden",children:i.children};return(x&1)===0&&t.child!==d?(i=t.child,i.childLanes=0,i.pendingProps=z,t.deletions=null):(i=$r(d,z),i.subtreeFlags=d.subtreeFlags&14680064),S!==null?p=$r(S,p):(p=ro(p,x,o,null),p.flags|=2),p.return=t,i.return=t,i.sibling=p,t.child=i,i=p,p=t.child,x=e.child.memoizedState,x=x===null?$c(o):{baseLanes:x.baseLanes|o,cachePool:null,transitions:x.transitions},p.memoizedState=x,p.childLanes=e.childLanes&~o,t.memoizedState=Nc,i}return p=e.child,e=p.sibling,i=$r(p,{mode:"visible",children:i.children}),(t.mode&1)===0&&(i.lanes=o),i.return=t,i.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=i,t.memoizedState=null,i}function Lc(e,t){return t=xi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ai(e,t,o,i){return i!==null&&nc(i),Mo(t,e.child,null,o),e=Lc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function V2(e,t,o,i,d,p,x){if(o)return t.flags&256?(t.flags&=-257,i=kc(Error(s(422))),ai(e,t,x,i)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(p=i.fallback,d=t.mode,i=xi({mode:"visible",children:i.children},d,0,null),p=ro(p,d,x,null),p.flags|=2,i.return=t,p.return=t,i.sibling=p,t.child=i,(t.mode&1)!==0&&Mo(t,e.child,null,x),t.child.memoizedState=$c(x),t.memoizedState=Nc,p);if((t.mode&1)===0)return ai(e,t,x,null);if(d.data==="$!"){if(i=d.nextSibling&&d.nextSibling.dataset,i)var S=i.dgst;return i=S,p=Error(s(419)),i=kc(p,i,void 0),ai(e,t,x,i)}if(S=(x&e.childLanes)!==0,Wt||S){if(i=jt,i!==null){switch(x&-x){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(i.suspendedLanes|x))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Xn(e,d),jn(i,e,d,-1))}return Uc(),i=kc(Error(s(421))),ai(e,t,x,i)}return d.data==="$?"?(t.flags|=128,t.child=e.child,t=rg.bind(null,e),d._reactRetry=t,null):(e=p.treeContext,Xt=vr(d.nextSibling),Qt=t,rt=!0,bn=null,e!==null&&(cn[dn++]=Kn,cn[dn++]=Qn,cn[dn++]=Yr,Kn=e.id,Qn=e.overflow,Yr=t),t=Lc(t,i.children),t.flags|=4096,t)}function k1(e,t,o){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),sc(e.return,t,o)}function Mc(e,t,o,i,d){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:o,tailMode:d}:(p.isBackwards=t,p.rendering=null,p.renderingStartTime=0,p.last=i,p.tail=o,p.tailMode=d)}function C1(e,t,o){var i=t.pendingProps,d=i.revealOrder,p=i.tail;if(Pt(e,t,i.children,o),i=it.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&k1(e,o,t);else if(e.tag===19)k1(e,o,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(Qe(it,i),(t.mode&1)===0)t.memoizedState=null;else switch(d){case"forwards":for(o=t.child,d=null;o!==null;)e=o.alternate,e!==null&&Xs(e)===null&&(d=o),o=o.sibling;o=d,o===null?(d=t.child,t.child=null):(d=o.sibling,o.sibling=null),Mc(t,!1,d,o,p);break;case"backwards":for(o=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&Xs(e)===null){t.child=d;break}e=d.sibling,d.sibling=o,o=d,d=e}Mc(t,!0,o,null,p);break;case"together":Mc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function si(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function er(e,t,o){if(e!==null&&(t.dependencies=e.dependencies),Jr|=t.lanes,(o&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,o=$r(e,e.pendingProps),t.child=o,o.return=t;e.sibling!==null;)e=e.sibling,o=o.sibling=$r(e,e.pendingProps),o.return=t;o.sibling=null}return t.child}function U2(e,t,o){switch(t.tag){case 3:w1(t),Lo();break;case 5:Pp(t);break;case 1:Ht(t.type)&&Hs(t);break;case 4:cc(t,t.stateNode.containerInfo);break;case 10:var i=t.type._context,d=t.memoizedProps.value;Qe(Ys,i._currentValue),i._currentValue=d;break;case 13:if(i=t.memoizedState,i!==null)return i.dehydrated!==null?(Qe(it,it.current&1),t.flags|=128,null):(o&t.child.childLanes)!==0?_1(e,t,o):(Qe(it,it.current&1),e=er(e,t,o),e!==null?e.sibling:null);Qe(it,it.current&1);break;case 19:if(i=(o&t.childLanes)!==0,(e.flags&128)!==0){if(i)return C1(e,t,o);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Qe(it,it.current),i)break;return null;case 22:case 23:return t.lanes=0,v1(e,t,o)}return er(e,t,o)}var j1,Ec,S1,N1;j1=function(e,t){for(var o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ec=function(){},S1=function(e,t,o,i){var d=e.memoizedProps;if(d!==i){e=t.stateNode,Qr(An.current);var p=null;switch(o){case"input":d=Ge(e,d),i=Ge(e,i),p=[];break;case"select":d=H({},d,{value:void 0}),i=H({},i,{value:void 0}),p=[];break;case"textarea":d=xt(e,d),i=xt(e,i),p=[];break;default:typeof d.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Bs)}st(o,i);var x;o=null;for(V in d)if(!i.hasOwnProperty(V)&&d.hasOwnProperty(V)&&d[V]!=null)if(V==="style"){var S=d[V];for(x in S)S.hasOwnProperty(x)&&(o||(o={}),o[x]="")}else V!=="dangerouslySetInnerHTML"&&V!=="children"&&V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&V!=="autoFocus"&&(c.hasOwnProperty(V)?p||(p=[]):(p=p||[]).push(V,null));for(V in i){var z=i[V];if(S=d!=null?d[V]:void 0,i.hasOwnProperty(V)&&z!==S&&(z!=null||S!=null))if(V==="style")if(S){for(x in S)!S.hasOwnProperty(x)||z&&z.hasOwnProperty(x)||(o||(o={}),o[x]="");for(x in z)z.hasOwnProperty(x)&&S[x]!==z[x]&&(o||(o={}),o[x]=z[x])}else o||(p||(p=[]),p.push(V,o)),o=z;else V==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,S=S?S.__html:void 0,z!=null&&S!==z&&(p=p||[]).push(V,z)):V==="children"?typeof z!="string"&&typeof z!="number"||(p=p||[]).push(V,""+z):V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&(c.hasOwnProperty(V)?(z!=null&&V==="onScroll"&&et("scroll",e),p||S===z||(p=[])):(p=p||[]).push(V,z))}o&&(p=p||[]).push("style",o);var V=p;(t.updateQueue=V)&&(t.flags|=4)}},N1=function(e,t,o,i){o!==i&&(t.flags|=4)};function Ba(e,t){if(!rt)switch(e.tailMode){case"hidden":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var i=null;o!==null;)o.alternate!==null&&(i=o),o=o.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,o=0,i=0;if(t)for(var d=e.child;d!==null;)o|=d.lanes|d.childLanes,i|=d.subtreeFlags&14680064,i|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)o|=d.lanes|d.childLanes,i|=d.subtreeFlags,i|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=i,e.childLanes=o,t}function q2(e,t,o){var i=t.pendingProps;switch(Jl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(t),null;case 1:return Ht(t.type)&&Fs(),Tt(t),null;case 3:return i=t.stateNode,Io(),tt(Ft),tt(Rt),pc(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(qs(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bn!==null&&(Hc(bn),bn=null))),Ec(e,t),Tt(t),null;case 5:dc(t);var d=Qr(Ta.current);if(o=t.type,e!==null&&t.stateNode!=null)S1(e,t,o,i,d),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(s(166));return Tt(t),null}if(e=Qr(An.current),qs(t)){i=t.stateNode,o=t.type;var p=t.memoizedProps;switch(i[Tn]=t,i[La]=p,e=(t.mode&1)!==0,o){case"dialog":et("cancel",i),et("close",i);break;case"iframe":case"object":case"embed":et("load",i);break;case"video":case"audio":for(d=0;d<Sa.length;d++)et(Sa[d],i);break;case"source":et("error",i);break;case"img":case"image":case"link":et("error",i),et("load",i);break;case"details":et("toggle",i);break;case"input":Ve(i,p),et("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!p.multiple},et("invalid",i);break;case"textarea":Oe(i,p),et("invalid",i)}st(o,p),d=null;for(var x in p)if(p.hasOwnProperty(x)){var S=p[x];x==="children"?typeof S=="string"?i.textContent!==S&&(p.suppressHydrationWarning!==!0&&Ps(i.textContent,S,e),d=["children",S]):typeof S=="number"&&i.textContent!==""+S&&(p.suppressHydrationWarning!==!0&&Ps(i.textContent,S,e),d=["children",""+S]):c.hasOwnProperty(x)&&S!=null&&x==="onScroll"&&et("scroll",i)}switch(o){case"input":fe(i),at(i,p,!0);break;case"textarea":fe(i),Re(i);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(i.onclick=Bs)}i=d,t.updateQueue=i,i!==null&&(t.flags|=4)}else{x=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=sn(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=x.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=x.createElement(o,{is:i.is}):(e=x.createElement(o),o==="select"&&(x=e,i.multiple?x.multiple=!0:i.size&&(x.size=i.size))):e=x.createElementNS(e,o),e[Tn]=t,e[La]=i,j1(e,t,!1,!1),t.stateNode=e;e:{switch(x=yt(o,i),o){case"dialog":et("cancel",e),et("close",e),d=i;break;case"iframe":case"object":case"embed":et("load",e),d=i;break;case"video":case"audio":for(d=0;d<Sa.length;d++)et(Sa[d],e);d=i;break;case"source":et("error",e),d=i;break;case"img":case"image":case"link":et("error",e),et("load",e),d=i;break;case"details":et("toggle",e),d=i;break;case"input":Ve(e,i),d=Ge(e,i),et("invalid",e);break;case"option":d=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},d=H({},i,{value:void 0}),et("invalid",e);break;case"textarea":Oe(e,i),d=xt(e,i),et("invalid",e);break;default:d=i}st(o,d),S=d;for(p in S)if(S.hasOwnProperty(p)){var z=S[p];p==="style"?ke(e,z):p==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Fr(e,z)):p==="children"?typeof z=="string"?(o!=="textarea"||z!=="")&&Rn(e,z):typeof z=="number"&&Rn(e,""+z):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(c.hasOwnProperty(p)?z!=null&&p==="onScroll"&&et("scroll",e):z!=null&&I(e,p,z,x))}switch(o){case"input":fe(e),at(e,i,!1);break;case"textarea":fe(e),Re(e);break;case"option":i.value!=null&&e.setAttribute("value",""+xe(i.value));break;case"select":e.multiple=!!i.multiple,p=i.value,p!=null?We(e,!!i.multiple,p,!1):i.defaultValue!=null&&We(e,!!i.multiple,i.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=Bs)}switch(o){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Tt(t),null;case 6:if(e&&t.stateNode!=null)N1(e,t,e.memoizedProps,i);else{if(typeof i!="string"&&t.stateNode===null)throw Error(s(166));if(o=Qr(Ta.current),Qr(An.current),qs(t)){if(i=t.stateNode,o=t.memoizedProps,i[Tn]=t,(p=i.nodeValue!==o)&&(e=Qt,e!==null))switch(e.tag){case 3:Ps(i.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ps(i.nodeValue,o,(e.mode&1)!==0)}p&&(t.flags|=4)}else i=(o.nodeType===9?o:o.ownerDocument).createTextNode(i),i[Tn]=t,t.stateNode=i}return Tt(t),null;case 13:if(tt(it),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(rt&&Xt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Mp(),Lo(),t.flags|=98560,p=!1;else if(p=qs(t),i!==null&&i.dehydrated!==null){if(e===null){if(!p)throw Error(s(318));if(p=t.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(s(317));p[Tn]=t}else Lo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Tt(t),p=!1}else bn!==null&&(Hc(bn),bn=null),p=!0;if(!p)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=o,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(it.current&1)!==0?bt===0&&(bt=3):Uc())),t.updateQueue!==null&&(t.flags|=4),Tt(t),null);case 4:return Io(),Ec(e,t),e===null&&Na(t.stateNode.containerInfo),Tt(t),null;case 10:return ac(t.type._context),Tt(t),null;case 17:return Ht(t.type)&&Fs(),Tt(t),null;case 19:if(tt(it),p=t.memoizedState,p===null)return Tt(t),null;if(i=(t.flags&128)!==0,x=p.rendering,x===null)if(i)Ba(p,!1);else{if(bt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(x=Xs(e),x!==null){for(t.flags|=128,Ba(p,!1),i=x.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=o,o=t.child;o!==null;)p=o,e=i,p.flags&=14680066,x=p.alternate,x===null?(p.childLanes=0,p.lanes=e,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=x.childLanes,p.lanes=x.lanes,p.child=x.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=x.memoizedProps,p.memoizedState=x.memoizedState,p.updateQueue=x.updateQueue,p.type=x.type,e=x.dependencies,p.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return Qe(it,it.current&1|2),t.child}e=e.sibling}p.tail!==null&&dt()>Do&&(t.flags|=128,i=!0,Ba(p,!1),t.lanes=4194304)}else{if(!i)if(e=Xs(x),e!==null){if(t.flags|=128,i=!0,o=e.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),Ba(p,!0),p.tail===null&&p.tailMode==="hidden"&&!x.alternate&&!rt)return Tt(t),null}else 2*dt()-p.renderingStartTime>Do&&o!==1073741824&&(t.flags|=128,i=!0,Ba(p,!1),t.lanes=4194304);p.isBackwards?(x.sibling=t.child,t.child=x):(o=p.last,o!==null?o.sibling=x:t.child=x,p.last=x)}return p.tail!==null?(t=p.tail,p.rendering=t,p.tail=t.sibling,p.renderingStartTime=dt(),t.sibling=null,o=it.current,Qe(it,i?o&1|2:o&1),t):(Tt(t),null);case 22:case 23:return Vc(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&(t.mode&1)!==0?(Jt&1073741824)!==0&&(Tt(t),t.subtreeFlags&6&&(t.flags|=8192)):Tt(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function G2(e,t){switch(Jl(t),t.tag){case 1:return Ht(t.type)&&Fs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Io(),tt(Ft),tt(Rt),pc(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return dc(t),null;case 13:if(tt(it),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Lo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return tt(it),null;case 4:return Io(),null;case 10:return ac(t.type._context),null;case 22:case 23:return Vc(),null;case 24:return null;default:return null}}var ii=!1,At=!1,Y2=typeof WeakSet=="function"?WeakSet:Set,he=null;function Ao(e,t){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(i){ct(e,t,i)}else o.current=null}function Rc(e,t,o){try{o()}catch(i){ct(e,t,i)}}var $1=!1;function Z2(e,t){if(Vl=Ns,e=sp(),zl(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var i=o.getSelection&&o.getSelection();if(i&&i.rangeCount!==0){o=i.anchorNode;var d=i.anchorOffset,p=i.focusNode;i=i.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var x=0,S=-1,z=-1,V=0,ne=0,re=e,te=null;t:for(;;){for(var ue;re!==o||d!==0&&re.nodeType!==3||(S=x+d),re!==p||i!==0&&re.nodeType!==3||(z=x+i),re.nodeType===3&&(x+=re.nodeValue.length),(ue=re.firstChild)!==null;)te=re,re=ue;for(;;){if(re===e)break t;if(te===o&&++V===d&&(S=x),te===p&&++ne===i&&(z=x),(ue=re.nextSibling)!==null)break;re=te,te=re.parentNode}re=ue}o=S===-1||z===-1?null:{start:S,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ul={focusedElem:e,selectionRange:o},Ns=!1,he=t;he!==null;)if(t=he,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,he=e;else for(;he!==null;){t=he;try{var me=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ge=me.memoizedProps,ut=me.memoizedState,F=t.stateNode,P=F.getSnapshotBeforeUpdate(t.elementType===t.type?ge:_n(t.type,ge),ut);F.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var W=t.stateNode.containerInfo;W.nodeType===1?W.textContent="":W.nodeType===9&&W.documentElement&&W.removeChild(W.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(se){ct(t,t.return,se)}if(e=t.sibling,e!==null){e.return=t.return,he=e;break}he=t.return}return me=$1,$1=!1,me}function Oa(e,t,o){var i=t.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var d=i=i.next;do{if((d.tag&e)===e){var p=d.destroy;d.destroy=void 0,p!==void 0&&Rc(t,o,p)}d=d.next}while(d!==i)}}function li(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&e)===e){var i=o.create;o.destroy=i()}o=o.next}while(o!==t)}}function Ic(e){var t=e.ref;if(t!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof t=="function"?t(e):t.current=e}}function L1(e){var t=e.alternate;t!==null&&(e.alternate=null,L1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tn],delete t[La],delete t[Zl],delete t[E2],delete t[R2])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function M1(e){return e.tag===5||e.tag===3||e.tag===4}function E1(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||M1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tc(e,t,o){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?o.nodeType===8?o.parentNode.insertBefore(e,t):o.insertBefore(e,t):(o.nodeType===8?(t=o.parentNode,t.insertBefore(e,o)):(t=o,t.appendChild(e)),o=o._reactRootContainer,o!=null||t.onclick!==null||(t.onclick=Bs));else if(i!==4&&(e=e.child,e!==null))for(Tc(e,t,o),e=e.sibling;e!==null;)Tc(e,t,o),e=e.sibling}function Ac(e,t,o){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?o.insertBefore(e,t):o.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Ac(e,t,o),e=e.sibling;e!==null;)Ac(e,t,o),e=e.sibling}var Mt=null,kn=!1;function kr(e,t,o){for(o=o.child;o!==null;)R1(e,t,o),o=o.sibling}function R1(e,t,o){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(bs,o)}catch{}switch(o.tag){case 5:At||Ao(o,t);case 6:var i=Mt,d=kn;Mt=null,kr(e,t,o),Mt=i,kn=d,Mt!==null&&(kn?(e=Mt,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):Mt.removeChild(o.stateNode));break;case 18:Mt!==null&&(kn?(e=Mt,o=o.stateNode,e.nodeType===8?Yl(e.parentNode,o):e.nodeType===1&&Yl(e,o),xa(e)):Yl(Mt,o.stateNode));break;case 4:i=Mt,d=kn,Mt=o.stateNode.containerInfo,kn=!0,kr(e,t,o),Mt=i,kn=d;break;case 0:case 11:case 14:case 15:if(!At&&(i=o.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){d=i=i.next;do{var p=d,x=p.destroy;p=p.tag,x!==void 0&&((p&2)!==0||(p&4)!==0)&&Rc(o,t,x),d=d.next}while(d!==i)}kr(e,t,o);break;case 1:if(!At&&(Ao(o,t),i=o.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=o.memoizedProps,i.state=o.memoizedState,i.componentWillUnmount()}catch(S){ct(o,t,S)}kr(e,t,o);break;case 21:kr(e,t,o);break;case 22:o.mode&1?(At=(i=At)||o.memoizedState!==null,kr(e,t,o),At=i):kr(e,t,o);break;default:kr(e,t,o)}}function I1(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new Y2),t.forEach(function(i){var d=og.bind(null,e,i);o.has(i)||(o.add(i),i.then(d,d))})}}function Cn(e,t){var o=t.deletions;if(o!==null)for(var i=0;i<o.length;i++){var d=o[i];try{var p=e,x=t,S=x;e:for(;S!==null;){switch(S.tag){case 5:Mt=S.stateNode,kn=!1;break e;case 3:Mt=S.stateNode.containerInfo,kn=!0;break e;case 4:Mt=S.stateNode.containerInfo,kn=!0;break e}S=S.return}if(Mt===null)throw Error(s(160));R1(p,x,d),Mt=null,kn=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(V){ct(d,t,V)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)T1(t,e),t=t.sibling}function T1(e,t){var o=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Cn(t,e),Dn(e),i&4){try{Oa(3,e,e.return),li(3,e)}catch(ge){ct(e,e.return,ge)}try{Oa(5,e,e.return)}catch(ge){ct(e,e.return,ge)}}break;case 1:Cn(t,e),Dn(e),i&512&&o!==null&&Ao(o,o.return);break;case 5:if(Cn(t,e),Dn(e),i&512&&o!==null&&Ao(o,o.return),e.flags&32){var d=e.stateNode;try{Rn(d,"")}catch(ge){ct(e,e.return,ge)}}if(i&4&&(d=e.stateNode,d!=null)){var p=e.memoizedProps,x=o!==null?o.memoizedProps:p,S=e.type,z=e.updateQueue;if(e.updateQueue=null,z!==null)try{S==="input"&&p.type==="radio"&&p.name!=null&&Ye(d,p),yt(S,x);var V=yt(S,p);for(x=0;x<z.length;x+=2){var ne=z[x],re=z[x+1];ne==="style"?ke(d,re):ne==="dangerouslySetInnerHTML"?Fr(d,re):ne==="children"?Rn(d,re):I(d,ne,re,V)}switch(S){case"input":Je(d,p);break;case"textarea":kt(d,p);break;case"select":var te=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var ue=p.value;ue!=null?We(d,!!p.multiple,ue,!1):te!==!!p.multiple&&(p.defaultValue!=null?We(d,!!p.multiple,p.defaultValue,!0):We(d,!!p.multiple,p.multiple?[]:"",!1))}d[La]=p}catch(ge){ct(e,e.return,ge)}}break;case 6:if(Cn(t,e),Dn(e),i&4){if(e.stateNode===null)throw Error(s(162));d=e.stateNode,p=e.memoizedProps;try{d.nodeValue=p}catch(ge){ct(e,e.return,ge)}}break;case 3:if(Cn(t,e),Dn(e),i&4&&o!==null&&o.memoizedState.isDehydrated)try{xa(t.containerInfo)}catch(ge){ct(e,e.return,ge)}break;case 4:Cn(t,e),Dn(e);break;case 13:Cn(t,e),Dn(e),d=e.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Pc=dt())),i&4&&I1(e);break;case 22:if(ne=o!==null&&o.memoizedState!==null,e.mode&1?(At=(V=At)||ne,Cn(t,e),At=V):Cn(t,e),Dn(e),i&8192){if(V=e.memoizedState!==null,(e.stateNode.isHidden=V)&&!ne&&(e.mode&1)!==0)for(he=e,ne=e.child;ne!==null;){for(re=he=ne;he!==null;){switch(te=he,ue=te.child,te.tag){case 0:case 11:case 14:case 15:Oa(4,te,te.return);break;case 1:Ao(te,te.return);var me=te.stateNode;if(typeof me.componentWillUnmount=="function"){i=te,o=te.return;try{t=i,me.props=t.memoizedProps,me.state=t.memoizedState,me.componentWillUnmount()}catch(ge){ct(i,o,ge)}}break;case 5:Ao(te,te.return);break;case 22:if(te.memoizedState!==null){D1(re);continue}}ue!==null?(ue.return=te,he=ue):D1(re)}ne=ne.sibling}e:for(ne=null,re=e;;){if(re.tag===5){if(ne===null){ne=re;try{d=re.stateNode,V?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(S=re.stateNode,z=re.memoizedProps.style,x=z!=null&&z.hasOwnProperty("display")?z.display:null,S.style.display=ir("display",x))}catch(ge){ct(e,e.return,ge)}}}else if(re.tag===6){if(ne===null)try{re.stateNode.nodeValue=V?"":re.memoizedProps}catch(ge){ct(e,e.return,ge)}}else if((re.tag!==22&&re.tag!==23||re.memoizedState===null||re===e)&&re.child!==null){re.child.return=re,re=re.child;continue}if(re===e)break e;for(;re.sibling===null;){if(re.return===null||re.return===e)break e;ne===re&&(ne=null),re=re.return}ne===re&&(ne=null),re.sibling.return=re.return,re=re.sibling}}break;case 19:Cn(t,e),Dn(e),i&4&&I1(e);break;case 21:break;default:Cn(t,e),Dn(e)}}function Dn(e){var t=e.flags;if(t&2){try{e:{for(var o=e.return;o!==null;){if(M1(o)){var i=o;break e}o=o.return}throw Error(s(160))}switch(i.tag){case 5:var d=i.stateNode;i.flags&32&&(Rn(d,""),i.flags&=-33);var p=E1(e);Ac(e,p,d);break;case 3:case 4:var x=i.stateNode.containerInfo,S=E1(e);Tc(e,S,x);break;default:throw Error(s(161))}}catch(z){ct(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function K2(e,t,o){he=e,A1(e)}function A1(e,t,o){for(var i=(e.mode&1)!==0;he!==null;){var d=he,p=d.child;if(d.tag===22&&i){var x=d.memoizedState!==null||ii;if(!x){var S=d.alternate,z=S!==null&&S.memoizedState!==null||At;S=ii;var V=At;if(ii=x,(At=z)&&!V)for(he=d;he!==null;)x=he,z=x.child,x.tag===22&&x.memoizedState!==null?P1(d):z!==null?(z.return=x,he=z):P1(d);for(;p!==null;)he=p,A1(p),p=p.sibling;he=d,ii=S,At=V}z1(e)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,he=p):z1(e)}}function z1(e){for(;he!==null;){var t=he;if((t.flags&8772)!==0){var o=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:At||li(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!At)if(o===null)i.componentDidMount();else{var d=t.elementType===t.type?o.memoizedProps:_n(t.type,o.memoizedProps);i.componentDidUpdate(d,o.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var p=t.updateQueue;p!==null&&Dp(t,p,i);break;case 3:var x=t.updateQueue;if(x!==null){if(o=null,t.child!==null)switch(t.child.tag){case 5:o=t.child.stateNode;break;case 1:o=t.child.stateNode}Dp(t,x,o)}break;case 5:var S=t.stateNode;if(o===null&&t.flags&4){o=S;var z=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&o.focus();break;case"img":z.src&&(o.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var V=t.alternate;if(V!==null){var ne=V.memoizedState;if(ne!==null){var re=ne.dehydrated;re!==null&&xa(re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}At||t.flags&512&&Ic(t)}catch(te){ct(t,t.return,te)}}if(t===e){he=null;break}if(o=t.sibling,o!==null){o.return=t.return,he=o;break}he=t.return}}function D1(e){for(;he!==null;){var t=he;if(t===e){he=null;break}var o=t.sibling;if(o!==null){o.return=t.return,he=o;break}he=t.return}}function P1(e){for(;he!==null;){var t=he;try{switch(t.tag){case 0:case 11:case 15:var o=t.return;try{li(4,t)}catch(z){ct(t,o,z)}break;case 1:var i=t.stateNode;if(typeof i.componentDidMount=="function"){var d=t.return;try{i.componentDidMount()}catch(z){ct(t,d,z)}}var p=t.return;try{Ic(t)}catch(z){ct(t,p,z)}break;case 5:var x=t.return;try{Ic(t)}catch(z){ct(t,x,z)}}}catch(z){ct(t,t.return,z)}if(t===e){he=null;break}var S=t.sibling;if(S!==null){S.return=t.return,he=S;break}he=t.return}}var Q2=Math.ceil,ci=D.ReactCurrentDispatcher,zc=D.ReactCurrentOwner,fn=D.ReactCurrentBatchConfig,De=0,jt=null,ht=null,Et=0,Jt=0,zo=xr(0),bt=0,Fa=null,Jr=0,di=0,Dc=0,Ha=null,Vt=null,Pc=0,Do=1/0,tr=null,ui=!1,Bc=null,Cr=null,pi=!1,jr=null,fi=0,Wa=0,Oc=null,hi=-1,mi=0;function Bt(){return(De&6)!==0?dt():hi!==-1?hi:hi=dt()}function Sr(e){return(e.mode&1)===0?1:(De&2)!==0&&Et!==0?Et&-Et:T2.transition!==null?(mi===0&&(mi=Eu()),mi):(e=Ue,e!==0||(e=window.event,e=e===void 0?16:Ou(e.type)),e)}function jn(e,t,o,i){if(50<Wa)throw Wa=0,Oc=null,Error(s(185));fa(e,o,i),((De&2)===0||e!==jt)&&(e===jt&&((De&2)===0&&(di|=o),bt===4&&Nr(e,Et)),Ut(e,i),o===1&&De===0&&(t.mode&1)===0&&(Do=dt()+500,Ws&&wr()))}function Ut(e,t){var o=e.callbackNode;Tm(e,t);var i=Cs(e,e===jt?Et:0);if(i===0)o!==null&&$u(o),e.callbackNode=null,e.callbackPriority=0;else if(t=i&-i,e.callbackPriority!==t){if(o!=null&&$u(o),t===1)e.tag===0?I2(O1.bind(null,e)):jp(O1.bind(null,e)),L2(function(){(De&6)===0&&wr()}),o=null;else{switch(Ru(i)){case 1:o=yl;break;case 4:o=Lu;break;case 16:o=ws;break;case 536870912:o=Mu;break;default:o=ws}o=Y1(o,B1.bind(null,e))}e.callbackPriority=t,e.callbackNode=o}}function B1(e,t){if(hi=-1,mi=0,(De&6)!==0)throw Error(s(327));var o=e.callbackNode;if(Po()&&e.callbackNode!==o)return null;var i=Cs(e,e===jt?Et:0);if(i===0)return null;if((i&30)!==0||(i&e.expiredLanes)!==0||t)t=gi(e,i);else{t=i;var d=De;De|=2;var p=H1();(jt!==e||Et!==t)&&(tr=null,Do=dt()+500,to(e,t));do try{eg();break}catch(S){F1(e,S)}while(!0);oc(),ci.current=p,De=d,ht!==null?t=0:(jt=null,Et=0,t=bt)}if(t!==0){if(t===2&&(d=wl(e),d!==0&&(i=d,t=Fc(e,d))),t===1)throw o=Fa,to(e,0),Nr(e,i),Ut(e,dt()),o;if(t===6)Nr(e,i);else{if(d=e.current.alternate,(i&30)===0&&!X2(d)&&(t=gi(e,i),t===2&&(p=wl(e),p!==0&&(i=p,t=Fc(e,p))),t===1))throw o=Fa,to(e,0),Nr(e,i),Ut(e,dt()),o;switch(e.finishedWork=d,e.finishedLanes=i,t){case 0:case 1:throw Error(s(345));case 2:no(e,Vt,tr);break;case 3:if(Nr(e,i),(i&130023424)===i&&(t=Pc+500-dt(),10<t)){if(Cs(e,0)!==0)break;if(d=e.suspendedLanes,(d&i)!==i){Bt(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=Gl(no.bind(null,e,Vt,tr),t);break}no(e,Vt,tr);break;case 4:if(Nr(e,i),(i&4194240)===i)break;for(t=e.eventTimes,d=-1;0<i;){var x=31-yn(i);p=1<<x,x=t[x],x>d&&(d=x),i&=~p}if(i=d,i=dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Q2(i/1960))-i,10<i){e.timeoutHandle=Gl(no.bind(null,e,Vt,tr),i);break}no(e,Vt,tr);break;case 5:no(e,Vt,tr);break;default:throw Error(s(329))}}}return Ut(e,dt()),e.callbackNode===o?B1.bind(null,e):null}function Fc(e,t){var o=Ha;return e.current.memoizedState.isDehydrated&&(to(e,t).flags|=256),e=gi(e,t),e!==2&&(t=Vt,Vt=o,t!==null&&Hc(t)),e}function Hc(e){Vt===null?Vt=e:Vt.push.apply(Vt,e)}function X2(e){for(var t=e;;){if(t.flags&16384){var o=t.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var i=0;i<o.length;i++){var d=o[i],p=d.getSnapshot;d=d.value;try{if(!wn(p(),d))return!1}catch{return!1}}}if(o=t.child,t.subtreeFlags&16384&&o!==null)o.return=t,t=o;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nr(e,t){for(t&=~Dc,t&=~di,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var o=31-yn(t),i=1<<o;e[o]=-1,t&=~i}}function O1(e){if((De&6)!==0)throw Error(s(327));Po();var t=Cs(e,0);if((t&1)===0)return Ut(e,dt()),null;var o=gi(e,t);if(e.tag!==0&&o===2){var i=wl(e);i!==0&&(t=i,o=Fc(e,i))}if(o===1)throw o=Fa,to(e,0),Nr(e,t),Ut(e,dt()),o;if(o===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,no(e,Vt,tr),Ut(e,dt()),null}function Wc(e,t){var o=De;De|=1;try{return e(t)}finally{De=o,De===0&&(Do=dt()+500,Ws&&wr())}}function eo(e){jr!==null&&jr.tag===0&&(De&6)===0&&Po();var t=De;De|=1;var o=fn.transition,i=Ue;try{if(fn.transition=null,Ue=1,e)return e()}finally{Ue=i,fn.transition=o,De=t,(De&6)===0&&wr()}}function Vc(){Jt=zo.current,tt(zo)}function to(e,t){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,$2(o)),ht!==null)for(o=ht.return;o!==null;){var i=o;switch(Jl(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Fs();break;case 3:Io(),tt(Ft),tt(Rt),pc();break;case 5:dc(i);break;case 4:Io();break;case 13:tt(it);break;case 19:tt(it);break;case 10:ac(i.type._context);break;case 22:case 23:Vc()}o=o.return}if(jt=e,ht=e=$r(e.current,null),Et=Jt=t,bt=0,Fa=null,Dc=di=Jr=0,Vt=Ha=null,Kr!==null){for(t=0;t<Kr.length;t++)if(o=Kr[t],i=o.interleaved,i!==null){o.interleaved=null;var d=i.next,p=o.pending;if(p!==null){var x=p.next;p.next=d,i.next=x}o.pending=i}Kr=null}return e}function F1(e,t){do{var o=ht;try{if(oc(),Js.current=ri,ei){for(var i=lt.memoizedState;i!==null;){var d=i.queue;d!==null&&(d.pending=null),i=i.next}ei=!1}if(Xr=0,Ct=wt=lt=null,Aa=!1,za=0,zc.current=null,o===null||o.return===null){bt=1,Fa=t,ht=null;break}e:{var p=e,x=o.return,S=o,z=t;if(t=Et,S.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var V=z,ne=S,re=ne.tag;if((ne.mode&1)===0&&(re===0||re===11||re===15)){var te=ne.alternate;te?(ne.updateQueue=te.updateQueue,ne.memoizedState=te.memoizedState,ne.lanes=te.lanes):(ne.updateQueue=null,ne.memoizedState=null)}var ue=p1(x);if(ue!==null){ue.flags&=-257,f1(ue,x,S,p,t),ue.mode&1&&u1(p,V,t),t=ue,z=V;var me=t.updateQueue;if(me===null){var ge=new Set;ge.add(z),t.updateQueue=ge}else me.add(z);break e}else{if((t&1)===0){u1(p,V,t),Uc();break e}z=Error(s(426))}}else if(rt&&S.mode&1){var ut=p1(x);if(ut!==null){(ut.flags&65536)===0&&(ut.flags|=256),f1(ut,x,S,p,t),nc(To(z,S));break e}}p=z=To(z,S),bt!==4&&(bt=2),Ha===null?Ha=[p]:Ha.push(p),p=x;do{switch(p.tag){case 3:p.flags|=65536,t&=-t,p.lanes|=t;var F=c1(p,z,t);zp(p,F);break e;case 1:S=z;var P=p.type,W=p.stateNode;if((p.flags&128)===0&&(typeof P.getDerivedStateFromError=="function"||W!==null&&typeof W.componentDidCatch=="function"&&(Cr===null||!Cr.has(W)))){p.flags|=65536,t&=-t,p.lanes|=t;var se=d1(p,S,t);zp(p,se);break e}}p=p.return}while(p!==null)}V1(o)}catch(ve){t=ve,ht===o&&o!==null&&(ht=o=o.return);continue}break}while(!0)}function H1(){var e=ci.current;return ci.current=ri,e===null?ri:e}function Uc(){(bt===0||bt===3||bt===2)&&(bt=4),jt===null||(Jr&268435455)===0&&(di&268435455)===0||Nr(jt,Et)}function gi(e,t){var o=De;De|=2;var i=H1();(jt!==e||Et!==t)&&(tr=null,to(e,t));do try{J2();break}catch(d){F1(e,d)}while(!0);if(oc(),De=o,ci.current=i,ht!==null)throw Error(s(261));return jt=null,Et=0,bt}function J2(){for(;ht!==null;)W1(ht)}function eg(){for(;ht!==null&&!jm();)W1(ht)}function W1(e){var t=G1(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,t===null?V1(e):ht=t,zc.current=null}function V1(e){var t=e;do{var o=t.alternate;if(e=t.return,(t.flags&32768)===0){if(o=q2(o,t,Jt),o!==null){ht=o;return}}else{if(o=G2(o,t),o!==null){o.flags&=32767,ht=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{bt=6,ht=null;return}}if(t=t.sibling,t!==null){ht=t;return}ht=t=e}while(t!==null);bt===0&&(bt=5)}function no(e,t,o){var i=Ue,d=fn.transition;try{fn.transition=null,Ue=1,tg(e,t,o,i)}finally{fn.transition=d,Ue=i}return null}function tg(e,t,o,i){do Po();while(jr!==null);if((De&6)!==0)throw Error(s(327));o=e.finishedWork;var d=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var p=o.lanes|o.childLanes;if(Am(e,p),e===jt&&(ht=jt=null,Et=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||pi||(pi=!0,Y1(ws,function(){return Po(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=fn.transition,fn.transition=null;var x=Ue;Ue=1;var S=De;De|=4,zc.current=null,Z2(e,o),T1(o,e),b2(Ul),Ns=!!Vl,Ul=Vl=null,e.current=o,K2(o),Sm(),De=S,Ue=x,fn.transition=p}else e.current=o;if(pi&&(pi=!1,jr=e,fi=d),p=e.pendingLanes,p===0&&(Cr=null),Lm(o.stateNode),Ut(e,dt()),t!==null)for(i=e.onRecoverableError,o=0;o<t.length;o++)d=t[o],i(d.value,{componentStack:d.stack,digest:d.digest});if(ui)throw ui=!1,e=Bc,Bc=null,e;return(fi&1)!==0&&e.tag!==0&&Po(),p=e.pendingLanes,(p&1)!==0?e===Oc?Wa++:(Wa=0,Oc=e):Wa=0,wr(),null}function Po(){if(jr!==null){var e=Ru(fi),t=fn.transition,o=Ue;try{if(fn.transition=null,Ue=16>e?16:e,jr===null)var i=!1;else{if(e=jr,jr=null,fi=0,(De&6)!==0)throw Error(s(331));var d=De;for(De|=4,he=e.current;he!==null;){var p=he,x=p.child;if((he.flags&16)!==0){var S=p.deletions;if(S!==null){for(var z=0;z<S.length;z++){var V=S[z];for(he=V;he!==null;){var ne=he;switch(ne.tag){case 0:case 11:case 15:Oa(8,ne,p)}var re=ne.child;if(re!==null)re.return=ne,he=re;else for(;he!==null;){ne=he;var te=ne.sibling,ue=ne.return;if(L1(ne),ne===V){he=null;break}if(te!==null){te.return=ue,he=te;break}he=ue}}}var me=p.alternate;if(me!==null){var ge=me.child;if(ge!==null){me.child=null;do{var ut=ge.sibling;ge.sibling=null,ge=ut}while(ge!==null)}}he=p}}if((p.subtreeFlags&2064)!==0&&x!==null)x.return=p,he=x;else e:for(;he!==null;){if(p=he,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Oa(9,p,p.return)}var F=p.sibling;if(F!==null){F.return=p.return,he=F;break e}he=p.return}}var P=e.current;for(he=P;he!==null;){x=he;var W=x.child;if((x.subtreeFlags&2064)!==0&&W!==null)W.return=x,he=W;else e:for(x=P;he!==null;){if(S=he,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:li(9,S)}}catch(ve){ct(S,S.return,ve)}if(S===x){he=null;break e}var se=S.sibling;if(se!==null){se.return=S.return,he=se;break e}he=S.return}}if(De=d,wr(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(bs,e)}catch{}i=!0}return i}finally{Ue=o,fn.transition=t}}return!1}function U1(e,t,o){t=To(o,t),t=c1(e,t,1),e=_r(e,t,1),t=Bt(),e!==null&&(fa(e,1,t),Ut(e,t))}function ct(e,t,o){if(e.tag===3)U1(e,e,o);else for(;t!==null;){if(t.tag===3){U1(t,e,o);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cr===null||!Cr.has(i))){e=To(o,e),e=d1(t,e,1),t=_r(t,e,1),e=Bt(),t!==null&&(fa(t,1,e),Ut(t,e));break}}t=t.return}}function ng(e,t,o){var i=e.pingCache;i!==null&&i.delete(t),t=Bt(),e.pingedLanes|=e.suspendedLanes&o,jt===e&&(Et&o)===o&&(bt===4||bt===3&&(Et&130023424)===Et&&500>dt()-Pc?to(e,0):Dc|=o),Ut(e,t)}function q1(e,t){t===0&&((e.mode&1)===0?t=1:(t=ks,ks<<=1,(ks&130023424)===0&&(ks=4194304)));var o=Bt();e=Xn(e,t),e!==null&&(fa(e,t,o),Ut(e,o))}function rg(e){var t=e.memoizedState,o=0;t!==null&&(o=t.retryLane),q1(e,o)}function og(e,t){var o=0;switch(e.tag){case 13:var i=e.stateNode,d=e.memoizedState;d!==null&&(o=d.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(s(314))}i!==null&&i.delete(t),q1(e,o)}var G1;G1=function(e,t,o){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ft.current)Wt=!0;else{if((e.lanes&o)===0&&(t.flags&128)===0)return Wt=!1,U2(e,t,o);Wt=(e.flags&131072)!==0}else Wt=!1,rt&&(t.flags&1048576)!==0&&Sp(t,Us,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;si(e,t),e=t.pendingProps;var d=So(t,Rt.current);Ro(t,o),d=mc(null,t,i,e,d,o);var p=gc();return t.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ht(i)?(p=!0,Hs(t)):p=!1,t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,lc(t),d.updater=oi,t.stateNode=d,d._reactInternals=t,_c(t,i,e,o),t=Sc(null,t,i,!0,p,o)):(t.tag=0,rt&&p&&Xl(t),Pt(null,t,d,o),t=t.child),t;case 16:i=t.elementType;e:{switch(si(e,t),e=t.pendingProps,d=i._init,i=d(i._payload),t.type=i,d=t.tag=sg(i),e=_n(i,e),d){case 0:t=jc(null,t,i,e,o);break e;case 1:t=y1(null,t,i,e,o);break e;case 11:t=h1(null,t,i,e,o);break e;case 14:t=m1(null,t,i,_n(i.type,e),o);break e}throw Error(s(306,i,""))}return t;case 0:return i=t.type,d=t.pendingProps,d=t.elementType===i?d:_n(i,d),jc(e,t,i,d,o);case 1:return i=t.type,d=t.pendingProps,d=t.elementType===i?d:_n(i,d),y1(e,t,i,d,o);case 3:e:{if(w1(t),e===null)throw Error(s(387));i=t.pendingProps,p=t.memoizedState,d=p.element,Ap(e,t),Qs(t,i,null,o);var x=t.memoizedState;if(i=x.element,p.isDehydrated)if(p={element:i,isDehydrated:!1,cache:x.cache,pendingSuspenseBoundaries:x.pendingSuspenseBoundaries,transitions:x.transitions},t.updateQueue.baseState=p,t.memoizedState=p,t.flags&256){d=To(Error(s(423)),t),t=b1(e,t,i,o,d);break e}else if(i!==d){d=To(Error(s(424)),t),t=b1(e,t,i,o,d);break e}else for(Xt=vr(t.stateNode.containerInfo.firstChild),Qt=t,rt=!0,bn=null,o=Ip(t,null,i,o),t.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Lo(),i===d){t=er(e,t,o);break e}Pt(e,t,i,o)}t=t.child}return t;case 5:return Pp(t),e===null&&tc(t),i=t.type,d=t.pendingProps,p=e!==null?e.memoizedProps:null,x=d.children,ql(i,d)?x=null:p!==null&&ql(i,p)&&(t.flags|=32),x1(e,t),Pt(e,t,x,o),t.child;case 6:return e===null&&tc(t),null;case 13:return _1(e,t,o);case 4:return cc(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Mo(t,null,i,o):Pt(e,t,i,o),t.child;case 11:return i=t.type,d=t.pendingProps,d=t.elementType===i?d:_n(i,d),h1(e,t,i,d,o);case 7:return Pt(e,t,t.pendingProps,o),t.child;case 8:return Pt(e,t,t.pendingProps.children,o),t.child;case 12:return Pt(e,t,t.pendingProps.children,o),t.child;case 10:e:{if(i=t.type._context,d=t.pendingProps,p=t.memoizedProps,x=d.value,Qe(Ys,i._currentValue),i._currentValue=x,p!==null)if(wn(p.value,x)){if(p.children===d.children&&!Ft.current){t=er(e,t,o);break e}}else for(p=t.child,p!==null&&(p.return=t);p!==null;){var S=p.dependencies;if(S!==null){x=p.child;for(var z=S.firstContext;z!==null;){if(z.context===i){if(p.tag===1){z=Jn(-1,o&-o),z.tag=2;var V=p.updateQueue;if(V!==null){V=V.shared;var ne=V.pending;ne===null?z.next=z:(z.next=ne.next,ne.next=z),V.pending=z}}p.lanes|=o,z=p.alternate,z!==null&&(z.lanes|=o),sc(p.return,o,t),S.lanes|=o;break}z=z.next}}else if(p.tag===10)x=p.type===t.type?null:p.child;else if(p.tag===18){if(x=p.return,x===null)throw Error(s(341));x.lanes|=o,S=x.alternate,S!==null&&(S.lanes|=o),sc(x,o,t),x=p.sibling}else x=p.child;if(x!==null)x.return=p;else for(x=p;x!==null;){if(x===t){x=null;break}if(p=x.sibling,p!==null){p.return=x.return,x=p;break}x=x.return}p=x}Pt(e,t,d.children,o),t=t.child}return t;case 9:return d=t.type,i=t.pendingProps.children,Ro(t,o),d=un(d),i=i(d),t.flags|=1,Pt(e,t,i,o),t.child;case 14:return i=t.type,d=_n(i,t.pendingProps),d=_n(i.type,d),m1(e,t,i,d,o);case 15:return g1(e,t,t.type,t.pendingProps,o);case 17:return i=t.type,d=t.pendingProps,d=t.elementType===i?d:_n(i,d),si(e,t),t.tag=1,Ht(i)?(e=!0,Hs(t)):e=!1,Ro(t,o),i1(t,i,d),_c(t,i,d,o),Sc(null,t,i,!0,e,o);case 19:return C1(e,t,o);case 22:return v1(e,t,o)}throw Error(s(156,t.tag))};function Y1(e,t){return Nu(e,t)}function ag(e,t,o,i){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,t,o,i){return new ag(e,t,o,i)}function qc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sg(e){if(typeof e=="function")return qc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===q)return 11;if(e===ce)return 14}return 2}function $r(e,t){var o=e.alternate;return o===null?(o=hn(e.tag,t,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=t,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,t=e.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function vi(e,t,o,i,d,p){var x=2;if(i=e,typeof e=="function")qc(e)&&(x=1);else if(typeof e=="string")x=5;else e:switch(e){case R:return ro(o.children,d,p,t);case A:x=8,d|=8;break;case U:return e=hn(12,o,t,d|2),e.elementType=U,e.lanes=p,e;case ee:return e=hn(13,o,t,d),e.elementType=ee,e.lanes=p,e;case oe:return e=hn(19,o,t,d),e.elementType=oe,e.lanes=p,e;case le:return xi(o,d,p,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:x=10;break e;case X:x=9;break e;case q:x=11;break e;case ce:x=14;break e;case ie:x=16,i=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=hn(x,o,t,d),t.elementType=e,t.type=i,t.lanes=p,t}function ro(e,t,o,i){return e=hn(7,e,i,t),e.lanes=o,e}function xi(e,t,o,i){return e=hn(22,e,i,t),e.elementType=le,e.lanes=o,e.stateNode={isHidden:!1},e}function Gc(e,t,o){return e=hn(6,e,null,t),e.lanes=o,e}function Yc(e,t,o){return t=hn(4,e.children!==null?e.children:[],e.key,t),t.lanes=o,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ig(e,t,o,i,d){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bl(0),this.expirationTimes=bl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bl(0),this.identifierPrefix=i,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Zc(e,t,o,i,d,p,x,S,z){return e=new ig(e,t,o,S,z),t===1?(t=1,p===!0&&(t|=8)):t=0,p=hn(3,null,null,t),e.current=p,p.stateNode=e,p.memoizedState={element:i,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},lc(p),e}function lg(e,t,o){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:i==null?null:""+i,children:e,containerInfo:t,implementation:o}}function Z1(e){if(!e)return yr;e=e._reactInternals;e:{if(Ur(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ht(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var o=e.type;if(Ht(o))return kp(e,o,t)}return t}function K1(e,t,o,i,d,p,x,S,z){return e=Zc(o,i,!0,e,d,p,x,S,z),e.context=Z1(null),o=e.current,i=Bt(),d=Sr(o),p=Jn(i,d),p.callback=t??null,_r(o,p,d),e.current.lanes=d,fa(e,d,i),Ut(e,i),e}function yi(e,t,o,i){var d=t.current,p=Bt(),x=Sr(d);return o=Z1(o),t.context===null?t.context=o:t.pendingContext=o,t=Jn(p,x),t.payload={element:e},i=i===void 0?null:i,i!==null&&(t.callback=i),e=_r(d,t,x),e!==null&&(jn(e,d,x,p),Ks(e,d,x)),x}function wi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Q1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<t?o:t}}function Kc(e,t){Q1(e,t),(e=e.alternate)&&Q1(e,t)}function cg(){return null}var X1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qc(e){this._internalRoot=e}bi.prototype.render=Qc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));yi(e,t,null,null)},bi.prototype.unmount=Qc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;eo(function(){yi(null,e,null,null)}),t[Yn]=null}};function bi(e){this._internalRoot=e}bi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Au();e={blockedOn:null,target:e,priority:t};for(var o=0;o<hr.length&&t!==0&&t<hr[o].priority;o++);hr.splice(o,0,e),o===0&&Pu(e)}};function Xc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function J1(){}function dg(e,t,o,i,d){if(d){if(typeof i=="function"){var p=i;i=function(){var V=wi(x);p.call(V)}}var x=K1(t,i,e,0,null,!1,!1,"",J1);return e._reactRootContainer=x,e[Yn]=x.current,Na(e.nodeType===8?e.parentNode:e),eo(),x}for(;d=e.lastChild;)e.removeChild(d);if(typeof i=="function"){var S=i;i=function(){var V=wi(z);S.call(V)}}var z=Zc(e,0,!1,null,null,!1,!1,"",J1);return e._reactRootContainer=z,e[Yn]=z.current,Na(e.nodeType===8?e.parentNode:e),eo(function(){yi(t,z,o,i)}),z}function ki(e,t,o,i,d){var p=o._reactRootContainer;if(p){var x=p;if(typeof d=="function"){var S=d;d=function(){var z=wi(x);S.call(z)}}yi(t,x,e,d)}else x=dg(o,t,e,d,i);return wi(x)}Iu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var o=pa(t.pendingLanes);o!==0&&(_l(t,o|1),Ut(t,dt()),(De&6)===0&&(Do=dt()+500,wr()))}break;case 13:eo(function(){var i=Xn(e,1);if(i!==null){var d=Bt();jn(i,e,1,d)}}),Kc(e,1)}},kl=function(e){if(e.tag===13){var t=Xn(e,134217728);if(t!==null){var o=Bt();jn(t,e,134217728,o)}Kc(e,134217728)}},Tu=function(e){if(e.tag===13){var t=Sr(e),o=Xn(e,t);if(o!==null){var i=Bt();jn(o,e,t,i)}Kc(e,t)}},Au=function(){return Ue},zu=function(e,t){var o=Ue;try{return Ue=e,t()}finally{Ue=o}},lr=function(e,t,o){switch(t){case"input":if(Je(e,o),t=o.name,o.type==="radio"&&t!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<o.length;t++){var i=o[t];if(i!==e&&i.form===e.form){var d=Os(i);if(!d)throw Error(s(90));_e(i),Je(i,d)}}}break;case"textarea":kt(e,o);break;case"select":t=o.value,t!=null&&We(e,!!o.multiple,t,!1)}},Hr=Wc,dr=eo;var ug={usingClientEntryPoint:!1,Events:[Ma,Co,Os,ye,Ae,Wc]},Va={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pg={bundleType:Va.bundleType,version:Va.version,rendererPackageName:Va.rendererPackageName,rendererConfig:Va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ju(e),e===null?null:e.stateNode},findFiberByHostInstance:Va.findFiberByHostInstance||cg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ci.isDisabled&&Ci.supportsFiber)try{bs=Ci.inject(pg),In=Ci}catch{}}return qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ug,qt.createPortal=function(e,t){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xc(t))throw Error(s(200));return lg(e,t,null,o)},qt.createRoot=function(e,t){if(!Xc(e))throw Error(s(299));var o=!1,i="",d=X1;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Zc(e,1,!1,null,null,o,!1,i,d),e[Yn]=t.current,Na(e.nodeType===8?e.parentNode:e),new Qc(t)},qt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=ju(t),e=e===null?null:e.stateNode,e},qt.flushSync=function(e){return eo(e)},qt.hydrate=function(e,t,o){if(!_i(t))throw Error(s(200));return ki(null,e,t,!0,o)},qt.hydrateRoot=function(e,t,o){if(!Xc(e))throw Error(s(405));var i=o!=null&&o.hydratedSources||null,d=!1,p="",x=X1;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(x=o.onRecoverableError)),t=K1(t,null,e,1,o??null,d,!1,p,x),e[Yn]=t.current,Na(e),i)for(e=0;e<i.length;e++)o=i[e],d=o._getVersion,d=d(o._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[o,d]:t.mutableSourceEagerHydrationData.push(o,d);return new bi(t)},qt.render=function(e,t,o){if(!_i(t))throw Error(s(200));return ki(null,e,t,!1,o)},qt.unmountComponentAtNode=function(e){if(!_i(e))throw Error(s(40));return e._reactRootContainer?(eo(function(){ki(null,null,e,!1,function(){e._reactRootContainer=null,e[Yn]=null})}),!0):!1},qt.unstable_batchedUpdates=Wc,qt.unstable_renderSubtreeIntoContainer=function(e,t,o,i){if(!_i(o))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return ki(e,t,o,!1,i)},qt.version="18.3.1-next-f1338f8080-20240426",qt}var lf;function mh(){if(lf)return td.exports;lf=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(a){console.error(a)}}return n(),td.exports=yg(),td.exports}var cf;function wg(){if(cf)return ji;cf=1;var n=mh();return ji.createRoot=n.createRoot,ji.hydrateRoot=n.hydrateRoot,ji}var bg=wg();const _g=hh(bg);function gh(n){var a,s,l="";if(typeof n=="string"||typeof n=="number")l+=n;else if(typeof n=="object")if(Array.isArray(n)){var c=n.length;for(a=0;a<c;a++)n[a]&&(s=gh(n[a]))&&(l&&(l+=" "),l+=s)}else for(s in n)n[s]&&(l&&(l+=" "),l+=s);return l}function K(){for(var n,a,s=0,l="",c=arguments.length;s<c;s++)(n=arguments[s])&&(a=gh(n))&&(l&&(l+=" "),l+=a);return l}const sr=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M12 5V19M5 12H19",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};sr.displayName="PlusIcon";const kg="_root_7uomf_13",Cg="_sm_7uomf_82",jg="_md_7uomf_88",Sg="_lg_7uomf_94",Ng="_horizontal_7uomf_107",$g="_alignStart_7uomf_121",Lg="_vertical_7uomf_125",Mg="_inner_7uomf_131",Eg="_iconSlot_7uomf_146",Rg="_label_7uomf_163",oo={root:kg,sm:Cg,md:jg,lg:Sg,horizontal:Ng,alignStart:$g,vertical:Lg,inner:Mg,iconSlot:Eg,label:Rg};function df(n){return typeof n=="number"?`${n}px`:n}const Ig=v.forwardRef(({size:n="md",layout:a="horizontal",align:s="center",label:l="Add",hideLabel:c=!1,icon:u,height:f,borderRadius:h,className:g,style:y,disabled:w,type:C="button",..._},N)=>{const k=u??r.jsx(sr,{size:"100%"}),b={};return f!==void 0&&(b["--area-min-height"]=df(f)),h!==void 0&&(b["--area-radius"]=df(h)),r.jsx("button",{ref:N,type:C,className:K(oo.root,oo[n],oo[a],s==="start"&&oo.alignStart,g),disabled:w,"data-size":n,"data-layout":a,style:{...b,...y},..._,children:r.jsxs("span",{className:oo.inner,children:[r.jsx("span",{className:oo.iconSlot,"aria-hidden":"true",children:k}),!c&&l&&r.jsx("span",{className:oo.label,children:l})]})})});Ig.displayName="AreaButton";const Tg="_root_b29pw_8",Ag="_image_b29pw_33",zg="_initials_b29pw_40",Dg="_iconSlot_b29pw_52",Mr={root:Tg,image:Ag,initials:zg,iconSlot:Dg,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function vh({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}function Pg(n){const a=n.trim().split(/\s+/).filter(c=>/[\p{L}\p{N}]/u.test(c));if(a.length===0)return"";if(a.length===1)return a[0].charAt(0).toUpperCase();const s=a[0].charAt(0),l=a[a.length-1].charAt(0);return(s+l).toUpperCase()}const Hn=v.forwardRef(({src:n,alt:a,initials:s,name:l,icon:c,size:u="md",color:f="neutral",variant:h="subtle",shape:g="circle",className:y,...w},C)=>{const[_,N]=v.useState(!1),k=!!n&&!_,b=(s==null?void 0:s.slice(0,2).toUpperCase())??(l?Pg(l):"");let j;return k?j=r.jsx("img",{src:n,alt:a??"",className:Mr.image,onError:()=>N(!0),draggable:!1},n):b?j=r.jsx("span",{className:Mr.initials,"aria-hidden":a?void 0:!0,children:b}):j=r.jsx("span",{className:Mr.iconSlot,"aria-hidden":"true",children:c??r.jsx(vh,{})}),r.jsx("span",{ref:C,"data-size":u,"data-color":f,"data-variant":h,"data-shape":g,className:K(Mr.root,Mr[`size-${u}`],Mr[`color-${f}`],Mr[`variant-${h}`],Mr[`shape-${g}`],y),...w,children:j})});Hn.displayName="Avatar";const Bg="_root_uqz3u_7",Og={root:Bg},rn=v.forwardRef(({as:n="span",className:a,children:s,...l},c)=>r.jsx(n,{ref:c,className:K(Og.root,a),...l,children:s}));rn.displayName="Eyebrow";const Fg="_root_1tnwf_15",Hg={root:Fg},Wg=v.forwardRef(({scale:n="paragraph-md",placeholder:a="Type something…",value:s,defaultValue:l="",onChange:c,readOnly:u=!1,disabled:f=!1,className:h,onInput:g,...y},w)=>{const C=s!==void 0,_=v.useRef(null),[N,k]=v.useState(()=>C?!s:!l),b=v.useCallback(I=>{_.current=I,typeof w=="function"?w(I):w&&(w.current=I)},[w]);v.useEffect(()=>{!C&&_.current&&l&&(_.current.textContent=l,k(!l))},[]),v.useEffect(()=>{C&&_.current&&(_.current.textContent??"")!==s&&(_.current.textContent=s??"",k(!(s??"")))},[s,C]);const j=I=>{const D=I.currentTarget.textContent??"";k(D===""),c==null||c(D),g==null||g(I)},M=I=>{I.preventDefault();const D=I.clipboardData.getData("text/plain");document.execCommand("insertText",!1,D)},L=!f&&!u;return r.jsx("span",{ref:b,contentEditable:L?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":a,"aria-disabled":f||void 0,"aria-readonly":u||void 0,"data-scale":n,"data-empty":N||void 0,"data-placeholder":a,"data-disabled":f||void 0,"data-readonly":u||void 0,className:K(Hg.root,h),onInput:j,onPaste:M,...y})});Wg.displayName="TypeBox";const Vg="_root_1brpy_12",Ug="_ghost_1brpy_27",qg="_path_1brpy_32",qa={root:Vg,"ai-spin":"_ai-spin_1brpy_1",ghost:Ug,"ai-morph":"_ai-morph_1brpy_1",path:qg,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},Gg={xs:16,sm:24,md:32,lg:48,xl:64},Yg={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},uf="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",Si=n=>n==="inverse"||n==="inverse-light",Zg=n=>n==="stroke"||n==="stroke-light",Yd=v.forwardRef(({size:n="md",variant:a="gradient-fill",state:s="loading",className:l,style:c,"aria-label":u,...f},h)=>{const g=v.useId().replace(/[^a-z0-9]/gi,""),y=`aigrad-${g}`,w=`aiglow-${g}`,C=typeof n=="string",_=C?Gg[n]:n,N=C?Yg[n]:_<=16?1.75:_<=24?1.5:_<=32?1.25:1.1,k=a==="gradient-fill"?`url(#${y})`:Si(a)?"currentColor":"none",b=Si(a)?"none":Zg(a)?"currentColor":`url(#${y})`,j="currentColor",M=a!=="stroke"&&a!=="stroke-light"&&!Si(a);return r.jsxs("svg",{ref:h,width:_,height:_,viewBox:"0 0 24 24",fill:"none",className:K(qa.root,qa[`variant-${a}`],qa[`state-${s}`],l),style:c,"data-state":s,"aria-label":u??(s==="ready"?"AI ready for input":"Loading"),"aria-live":s==="ready"?"polite":void 0,role:"status",...f,children:[!Si(a)&&r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:y,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[r.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),r.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),r.jsxs("filter",{id:w,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[r.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{in:"blur"}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),r.jsx("path",{d:uf,stroke:j,strokeWidth:N*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:qa.ghost}),r.jsx("path",{d:uf,fill:k,stroke:b==="none"?void 0:b,strokeWidth:b==="none"?void 0:N,strokeLinecap:"round",strokeLinejoin:"round",filter:M?`url(#${w})`:void 0,className:qa.path})]})});Yd.displayName="AILoader";const Kg="_root_10act_14",Qg="_hovered_10act_68",Xg="_loading_10act_69",Jg="_sm_10act_90",ev="_md_10act_98",tv="_lg_10act_106",nv="_dark_10act_116",rv="_icon_10act_122",Bo={root:Kg,hovered:Qg,loading:Xg,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:Jg,md:ev,lg:tv,dark:nv,icon:rv},pf={sm:12,md:14,lg:18};function ov({size:n,light:a}){return r.jsxs("svg",{width:n,height:n,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!a&&r.jsx("defs",{children:r.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[r.jsx("stop",{stopColor:"#8C4FE2"}),r.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),r.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),r.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:a?"white":"url(#ai-core-btn-sparkle)"})]})}const av=v.forwardRef(({size:n="md",dark:a,loading:s,className:l,onMouseEnter:c,onMouseLeave:u,...f},h)=>{const[g,y]=v.useState(!1);return r.jsx("button",{ref:h,className:K(Bo.root,Bo[n],a&&Bo.dark,s?Bo.loading:g&&Bo.hovered,l),"aria-busy":s||void 0,onMouseEnter:w=>{y(!0),c==null||c(w)},onMouseLeave:w=>{y(!1),u==null||u(w)},...f,children:r.jsx("span",{className:Bo.icon,children:s?r.jsx(Yd,{size:pf[n],variant:a?"inverse-light":"gradient-fill"}):r.jsx(ov,{size:pf[n],light:a})})})});av.displayName="AICoreButton";const sv="_root_1qx4u_9",iv="_star_1qx4u_34",od={root:sv,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:iv},lv="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",xh=v.forwardRef(({size:n="sm",className:a,...s},l)=>r.jsx("span",{ref:l,"data-size":n,"aria-hidden":"true",className:K(od.root,od[`size-${n}`],a),...s,children:r.jsx("svg",{viewBox:"0 0 24 24",className:od.star,fill:"none","aria-hidden":"true",children:r.jsx("path",{d:lv,fill:"currentColor"})})}));xh.displayName="AIAvatar";const cv="_shell_lalw3_21",dv="_wrapper_lalw3_58",uv="_card_lalw3_65",pv="_cardClip_lalw3_94",fv="_textarea_lalw3_160",hv="_actions_lalw3_203",Go={shell:cv,wrapper:dv,card:uv,cardClip:pv,textarea:fv,actions:hv},yh=v.forwardRef(({className:n,children:a,...s},l)=>r.jsx("div",{ref:l,className:K(Go.shell,n),...s,children:a}));yh.displayName="AIComposer";function mv(n,a){typeof n=="function"?n(a):n&&(n.current=a)}const wh=v.forwardRef(({value:n,onChange:a,onSubmit:s,maxRows:l=5,radius:c="sm",placeholder:u="Ask AI anything…",className:f,onKeyDown:h,disabled:g,children:y,style:w,...C},_)=>{const N=v.useRef(null);v.useEffect(()=>{const L=N.current;L&&(L.style.height="auto",L.style.height=`${L.scrollHeight}px`)},[n]);const k=v.useCallback(L=>a(L.target.value),[a]),b=v.useCallback(L=>{h==null||h(L),!L.defaultPrevented&&L.key==="Enter"&&!L.shiftKey&&s&&(L.preventDefault(),s())},[h,s]),j=v.useCallback(L=>{N.current=L,mv(_,L)},[_]),M={...w??{},"--ai-composer-max-rows":l};return r.jsx("div",{className:K(Go.wrapper,f),"data-radius":c,children:r.jsx("div",{className:Go.card,children:r.jsxs("div",{className:Go.cardClip,children:[r.jsx("textarea",{...C,ref:j,className:Go.textarea,rows:1,value:n,onChange:k,onKeyDown:b,placeholder:u,disabled:g,style:M}),y!=null&&r.jsx("div",{className:Go.actions,children:y})]})})})});wh.displayName="AIComposerInput";const gv="_root_fv0gc_10",vv="_simple_fv0gc_28",xv="_float_fv0gc_83",ff={root:gv,simple:vv,float:xv},yv=v.forwardRef(({variant:n="simple",className:a,children:s,...l},c)=>r.jsx("section",{ref:c,"data-variant":n,className:K(ff.root,ff[n],a),...l,children:s}));yv.displayName="AIConversation";const wv="_fadeFrame_1l0ib_19",bv="_scroller_1l0ib_32",_v="_content_1l0ib_89",kv="_messageBlock_1l0ib_108",Cv="_messageBlockAi_1l0ib_116",jv="_inboundBlock_1l0ib_128",Sv="_inboundLoader_1l0ib_136",Nv="_inboundLoaderLabel_1l0ib_146",$v="_outboundBlock_1l0ib_153",Lv="_outboundHeader_1l0ib_161",Mv="_messageBlockUser_1l0ib_168",Ev="_aiThreadOutboundIn_1l0ib_1",Rv="_messageBody_1l0ib_182",Iv="_messageBodyAi_1l0ib_193",Tv="_messageBodyUser_1l0ib_200",Av="_label_1l0ib_159",zv="_labelAi_1l0ib_221",Dv="_labelUser_1l0ib_159",Pv="_labelAvatar_1l0ib_224",Bv="_labelText_1l0ib_237",Ov="_timestamp_1l0ib_244",Fv="_timestampAi_1l0ib_259",Hv="_timestampUser_1l0ib_260",Wv="_timestampInline_1l0ib_270",Vv="_aiThreadOutboundFadeIn_1l0ib_1",Te={fadeFrame:wv,scroller:bv,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:_v,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:kv,messageBlockAi:Cv,inboundBlock:jv,inboundLoader:Sv,inboundLoaderLabel:Nv,outboundBlock:$v,outboundHeader:Lv,messageBlockUser:Mv,aiThreadOutboundIn:Ev,messageBody:Rv,messageBodyAi:Iv,messageBodyUser:Tv,label:Av,labelAi:zv,labelUser:Dv,labelAvatar:Pv,labelText:Bv,timestamp:Ov,timestampAi:Fv,timestampUser:Hv,timestampInline:Wv,aiThreadOutboundFadeIn:Vv},hf=8;function Uv(n,a){typeof n=="function"?n(a):n&&(n.current=a)}const qv=v.forwardRef(({density:n="comfortable",padding:a="md",autoScroll:s=!0,autoScrollThreshold:l=80,className:c,children:u,...f},h)=>{const g=v.useRef(null),y=v.useRef(null),w=v.useRef(!0),[C,_]=v.useState(!1),[N,k]=v.useState(!1),b=v.useCallback(j=>{g.current=j,Uv(h,j)},[h]);return v.useEffect(()=>{const j=g.current,M=y.current;if(!j||!M)return;const L=()=>{const{scrollTop:R,scrollHeight:A,clientHeight:U}=j;return A-R-U<l},I=R=>{j.scrollTo({top:j.scrollHeight,behavior:R?"smooth":"auto"})},D=()=>{const{scrollTop:R,scrollHeight:A,clientHeight:U}=j,G=R>hf,X=A-R-U>hf;_(q=>q===G?q:G),k(q=>q===X?q:X)};s&&(I(!1),w.current=!0),D();const E=()=>{w.current=L(),D()};j.addEventListener("scroll",E,{passive:!0});const B=new ResizeObserver(()=>{s&&w.current&&I(!0),D()});return B.observe(M),B.observe(j),()=>{j.removeEventListener("scroll",E),B.disconnect()}},[s,l]),r.jsx("div",{className:Te.fadeFrame,"data-fade-top":C,"data-fade-bottom":N,children:r.jsx("div",{ref:b,className:K(Te.scroller,Te[`padding-${a}`],c),...f,children:r.jsx("div",{ref:y,className:K(Te.content,Te[`density-${n}`]),children:u})})})});qv.displayName="AIThread";const Zi=v.forwardRef(({align:n="ai",avatar:a,className:s,children:l,...c},u)=>r.jsxs("div",{ref:u,className:K(Te.label,n==="user"?Te.labelUser:Te.labelAi,s),...c,children:[a!=null&&r.jsx("span",{className:Te.labelAvatar,children:a}),r.jsx("span",{className:Te.labelText,children:l})]}));Zi.displayName="AILabel";const Gv=n=>n.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function Yv(n,a){if(typeof n=="string")return{text:n};const s=n instanceof Date?n:new Date(n);return Number.isNaN(s.getTime())?null:{text:a(s),iso:s.toISOString()}}const ss=v.forwardRef(({value:n,align:a="ai",format:s=Gv,inline:l=!1,className:c,...u},f)=>{const h=v.useMemo(()=>Yv(n,s),[n,s]);return h?r.jsx("time",{ref:f,className:K(Te.timestamp,l?Te.timestampInline:a==="user"?Te.timestampUser:Te.timestampAi,c),dateTime:h.iso,...u,children:h.text}):null});ss.displayName="AITimestamp";function Zv(n){return n==null?null:typeof n=="string"||typeof n=="number"||n instanceof Date?r.jsx(ss,{align:"ai",value:n}):n}function Kv(n){return n==null?null:typeof n=="string"||typeof n=="number"?r.jsx(Zi,{align:"ai",children:n}):n}const Qv=v.forwardRef(({label:n,time:a,className:s,children:l,...c},u)=>r.jsxs("div",{ref:u,"data-author":"ai",className:K(Te.messageBlock,Te.messageBlockAi,s),...c,children:[Kv(n),r.jsx("div",{className:K(Te.messageBody,Te.messageBodyAi),children:l}),Zv(a)]}));Qv.displayName="AIAssistantMessage";function Xv(n){return n==null?null:typeof n=="string"||typeof n=="number"||n instanceof Date?r.jsx(ss,{align:"user",value:n}):n}function Jv(n){return n==null?null:typeof n=="string"||typeof n=="number"?r.jsx(Zi,{align:"user",children:n}):n}const ex=v.forwardRef(({label:n,time:a,className:s,children:l,...c},u)=>r.jsxs("div",{ref:u,"data-author":"user",className:K(Te.messageBlock,Te.messageBlockUser,s),...c,children:[Jv(n),r.jsx("div",{className:K(Te.messageBody,Te.messageBodyUser),children:l}),Xv(a)]}));ex.displayName="AIUserMessage";function tx(n){return n===!1?null:n==null||n===!0?r.jsx(xh,{size:"sm"}):n}function nx(n,a){return n==null&&a==null?null:typeof n=="string"||typeof n=="number"||n==null?r.jsx(Zi,{align:"ai",avatar:a,children:n}):n}const rx=v.forwardRef(({avatar:n,label:a="Teambridge AI",activity:s,actions:l,loading:c=!1,loaderLabel:u="Thinking…",className:f,children:h,...g},y)=>{const w=tx(n),C=nx(a,w);return r.jsxs("div",{ref:y,"data-author":"ai",className:K(Te.messageBlock,Te.messageBlockAi,Te.inboundBlock,f),...g,children:[C,s,h!=null&&r.jsx("div",{className:K(Te.messageBody,Te.messageBodyAi),children:h}),c&&r.jsxs("div",{className:Te.inboundLoader,"aria-live":"polite",children:[r.jsx(Yd,{size:"xs"}),u!=null&&r.jsx("span",{className:Te.inboundLoaderLabel,children:u})]}),l]})});rx.displayName="AIInboundMessage";function ox(n){return n instanceof Date||typeof n=="number"||typeof n=="string"}const ax=v.forwardRef(({label:n="You",time:a,timeFormat:s,className:l,children:c,...u},f)=>{const h=a==null?null:ox(a)?r.jsx(ss,{value:a,format:s,inline:!0}):a,g=n==null?null:typeof n=="string"||typeof n=="number"?r.jsx("span",{className:Te.labelText,children:n}):n,y=g!=null||h!=null;return r.jsxs("div",{ref:f,"data-author":"user",className:K(Te.messageBlock,Te.messageBlockUser,Te.outboundBlock,l),...u,children:[y&&r.jsxs("div",{className:K(Te.label,Te.labelUser,Te.outboundHeader),children:[g,h]}),r.jsx("div",{className:K(Te.messageBody,Te.messageBodyUser),children:c})]})});ax.displayName="AIOutboundMessage";const En=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M6 9L12 15L18 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};En.displayName="ChevronDownIcon";const sx="_root_1j4eq_8",ix="_header_1j4eq_17",lx="_headerSummary_1j4eq_53",cx="_aiTrailSummaryFade_1j4eq_1",dx="_aiTrailHeaderAppend_1j4eq_1",ux="_aiTrailEllipsis_1j4eq_1",px="_headerCurrent_1j4eq_128",fx="_headerChevron_1j4eq_159",hx="_headerChevronExpanded_1j4eq_173",mx="_body_1j4eq_187",gx="_bodyExpanded_1j4eq_200",vx="_bodyCollapsed_1j4eq_201",xx="_bodyInner_1j4eq_203",yx="_bodyContent_1j4eq_187",wx="_step_1j4eq_225",bx="_stepIcon_1j4eq_242",_x="_stepAnimating_1j4eq_256",kx="_aiTrailStepPulse_1j4eq_1",Cx="_stepBody_1j4eq_267",jx="_stepHead_1j4eq_282",Sx="_stepLabel_1j4eq_286",Nx="_stepSeparator_1j4eq_288",$x="_stepDetail_1j4eq_292",Lx="_subToggle_1j4eq_302",Mx="_subToggleCount_1j4eq_335",Ex="_subToggleChevron_1j4eq_339",Rx="_subActivityWrap_1j4eq_358",Ix="_subActivityExpanded_1j4eq_364",Tx="_subActivityCollapsed_1j4eq_365",Ax="_subActivityClip_1j4eq_367",zx="_subActivityList_1j4eq_378",Dx="_subActivity_1j4eq_358",Px="_aiTrailSubActivityType_1j4eq_1",Bx="_aiTrailSubActivityFade_1j4eq_1",qe={root:sx,header:ix,headerSummary:lx,aiTrailSummaryFade:cx,aiTrailHeaderAppend:dx,aiTrailEllipsis:ux,headerCurrent:px,headerChevron:fx,headerChevronExpanded:hx,body:mx,bodyExpanded:gx,bodyCollapsed:vx,bodyInner:xx,bodyContent:yx,step:wx,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:bx,stepAnimating:_x,aiTrailStepPulse:kx,stepBody:Cx,stepHead:jx,stepLabel:Sx,stepSeparator:Nx,stepDetail:$x,subToggle:Lx,subToggleCount:Mx,subToggleChevron:Ex,subActivityWrap:Rx,subActivityExpanded:Ix,subActivityCollapsed:Tx,subActivityClip:Ax,subActivityList:zx,subActivity:Dx,aiTrailSubActivityType:Px,aiTrailSubActivityFade:Bx},Zd=({size:n=16,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Zd.displayName="MessageDotsSquareIcon";function Kd({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Kd.displayName="SearchMdIcon";function Br({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const bh=({size:n=16,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};bh.displayName="Globe01Icon";const _h=({size:n=16,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};_h.displayName="Code02Icon";function Qd({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Qd.displayName="Tool01Icon";const Ki=({size:n=16,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M20 6L9 17L4 12",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},Qo=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:a}),r.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};Qo.displayName="AlertCircleIcon";const Ox={thinking:r.jsx(Zd,{size:14}),tool:r.jsx(Qd,{size:14}),search:r.jsx(Kd,{size:14}),file:r.jsx(Br,{size:14}),web:r.jsx(bh,{size:14}),code:r.jsx(_h,{size:14}),content:r.jsx(Ki,{size:14})},Qi=v.forwardRef(({type:n,status:a="done",detail:s,icon:l,subActivities:c,groupState:u="done",className:f,children:h,...g},y)=>{const w=a==="active"&&u==="live",C=a==="active"&&u==="live",_=a==="active"||a==="error",[N,k]=v.useState(null),b=N!==null?N:_;v.useEffect(()=>{k(null)},[a]);const j=v.useCallback(()=>k(!b),[b]),M=!!c&&c.length>0,L=(c==null?void 0:c.length)??0,I=a==="error"?r.jsx(Qo,{size:14}):l??Ox[n];return r.jsxs("div",{ref:y,"data-step-type":n,"data-step-status":a,className:K(qe.step,qe[`step-${a}`],w&&qe.stepAnimating,f),...g,children:[r.jsx("span",{className:qe.stepIcon,"aria-hidden":!0,children:I}),r.jsxs("span",{className:qe.stepBody,children:[r.jsxs("span",{className:qe.stepHead,children:[r.jsx("span",{className:qe.stepLabel,children:h}),s!=null&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:qe.stepSeparator,"aria-hidden":!0,children:" · "}),r.jsx("span",{className:qe.stepDetail,children:s})]}),M&&r.jsxs("button",{type:"button",className:qe.subToggle,onClick:j,"aria-expanded":b,"aria-label":b?`Collapse ${L} sub-steps`:`Expand ${L} sub-steps`,"data-expanded":b||void 0,children:[r.jsx("span",{className:qe.subToggleCount,children:L}),r.jsx("span",{className:qe.subToggleChevron,"aria-hidden":!0,children:r.jsx(En,{size:10})})]})]}),M&&r.jsx(r.Fragment,{children:r.jsx("div",{className:K(qe.subActivityWrap,b?qe.subActivityExpanded:qe.subActivityCollapsed),"aria-hidden":!b,children:r.jsx("div",{className:qe.subActivityClip,children:r.jsx("ul",{className:qe.subActivityList,"data-animating":C||void 0,children:c.map((D,E)=>r.jsx("li",{className:qe.subActivity,children:D},E))})})})})]})]})});Qi.displayName="AIActivityStep";function mf(n){return n==="error"}function Fx(n,a,s,l,c,u){if(n==="live")return s.length===0?a===1?"1 step":`${a} steps`:r.jsx("span",{className:c,children:s[l]??s[s.length-1]},l);const f=n==="error"?"Stopped":u?`Thought for ${u}`:"Thought";if(s.length===0){const h=a===1?"1 step":`${a} steps`;return`${f} · ${h}`}return r.jsxs(r.Fragment,{children:[f,s.map((h,g)=>r.jsxs(v.Fragment,{children:[" · ",h]},g))]})}const Xd=v.forwardRef(({state:n="live",expanded:a,defaultExpanded:s,onToggle:l,duration:c,summary:u,className:f,children:h,...g},y)=>{const w=a!==void 0,[C,_]=v.useState(s??mf(n)),[N,k]=v.useState(!1);v.useEffect(()=>{w||N||_(mf(n))},[n,w,N]);const b=w?!!a:C,j=v.useCallback(()=>{const B=!b;w||(_(B),k(!0)),l==null||l(B)},[b,w,l]),{enhancedChildren:M,stepCount:L,stepLabels:I,currentLabelIdx:D}=v.useMemo(()=>{let B=0;const R=[];let A=-1;return{enhancedChildren:v.Children.map(h,G=>{if(!v.isValidElement(G))return G;const X=G.props;if(!("type"in X||"status"in X))return G;B+=1;const ee=X.status??"done";return ee==="pending"?null:(X.children!=null&&(R.push(X.children),ee==="active"&&(A=R.length-1)),Hx(G,n))}),stepCount:B,stepLabels:R,currentLabelIdx:A>=0?A:R.length-1}},[h,n]),E=u??Fx(n,L,I,D,qe.headerCurrent,c);return r.jsxs("div",{ref:y,"data-state":n,"data-expanded":b,className:K(qe.root,f),...g,children:[r.jsxs("button",{type:"button",className:qe.header,onClick:j,"aria-expanded":b,"aria-label":b?"Collapse activity trail":"Expand activity trail",children:[r.jsx("span",{className:qe.headerSummary,children:E},`${n}-${D}`),r.jsx("span",{className:K(qe.headerChevron,b&&qe.headerChevronExpanded),"aria-hidden":!0,children:r.jsx(En,{size:14})})]}),r.jsx("div",{className:K(qe.body,b?qe.bodyExpanded:qe.bodyCollapsed),"aria-hidden":!b,children:r.jsx("div",{className:qe.bodyInner,children:r.jsxs("div",{className:qe.bodyContent,children:[M,n==="done"&&r.jsx(Qi,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});Xd.displayName="AIActivityTrail";function Hx(n,a){return v.cloneElement(n,{groupState:a})}var Jd=mh();const Wx="_wrapper_3tqlm_10",Vx="_tooltip_3tqlm_22",Ux="_portal_3tqlm_23",qx="_top_3tqlm_61",Gx="_bottom_3tqlm_71",Yx="_left_3tqlm_81",Zx="_right_3tqlm_91",Ni={wrapper:Wx,tooltip:Vx,portal:Ux,top:qx,bottom:Gx,left:Yx,right:Zx},Xo=({content:n,placement:a="top",delay:s=0,disabled:l=!1,maxWidth:c=280,offset:u=0,children:f})=>{const[h,g]=v.useState(!1),[y,w]=v.useState({top:0,left:0}),C=v.useRef(null),_=v.useRef(),N=v.useId(),k=v.useCallback(()=>{if(!C.current)return;const I=C.current.getBoundingClientRect(),D=6+u;let E=0,B=0;switch(a){case"top":E=I.top-D,B=I.left+I.width/2;break;case"bottom":E=I.bottom+D,B=I.left+I.width/2;break;case"left":E=I.top+I.height/2,B=I.left-D;break;case"right":E=I.top+I.height/2,B=I.right+D;break}w({top:E,left:B})},[a,u]),b=v.useCallback(()=>{l||(k(),clearTimeout(_.current),s>0?_.current=setTimeout(()=>g(!0),s):g(!0))},[l,s,k]),j=v.useCallback(()=>{clearTimeout(_.current),g(!1)},[]);v.useEffect(()=>{if(!h)return;const I=()=>k();return window.addEventListener("scroll",I,!0),window.addEventListener("resize",I),()=>{window.removeEventListener("scroll",I,!0),window.removeEventListener("resize",I)}},[h,k]);const M=Pr.cloneElement(f,{"aria-describedby":h?N:void 0}),L=r.jsx("span",{id:N,role:"tooltip",className:K(Ni.tooltip,Ni[a],Ni.portal),"data-visible":h||void 0,style:{top:y.top,left:y.left,maxWidth:c!==void 0?c:void 0},children:n});return r.jsxs("span",{ref:C,className:Ni.wrapper,onMouseEnter:b,onMouseLeave:j,onFocus:b,onBlur:j,children:[M,Jd.createPortal(L,document.body)]})};Xo.displayName="Tooltip";const Kx="_root_v8mqg_9",Qx="_hover_v8mqg_21",ad={root:Kx,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:Qx};function Xx(n){return n instanceof Date||typeof n=="number"||typeof n=="string"}const kh=v.forwardRef(({visibility:n="always",align:a="start",time:s,timeFormat:l,className:c,children:u,...f},h)=>{const g=s==null?null:Xx(s)?r.jsx(ss,{value:s,format:l,inline:!0}):s,y=C=>{if(!v.isValidElement(C))return C;const _=C;if(_.type===Xo)return _;const N=_.props["aria-label"];return N?r.jsx(Xo,{content:N,placement:"top",delay:150,children:_}):_},w=v.Children.map(u,C=>{if(v.isValidElement(C)&&C.type===v.Fragment){const _=C.props.children;return v.Children.map(_,y)}return y(C)});return r.jsxs("div",{ref:h,"data-visibility":n,"data-align":a,className:K(ad.root,ad[`align-${a}`],n==="hover"&&ad.hover,c),...f,children:[w,g]})});kh.displayName="AIMessageActions";const Jx="_card_1apq1_17",ey="_header_1apq1_69",ty="_iconBadge_1apq1_74",ny="_iconInner_1apq1_89",ry="_headerText_1apq1_100",oy="_headerTopRow_1apq1_109",ay="_eyebrow_1apq1_115",sy="_title_1apq1_124",iy="_subtitle_1apq1_130",ly="_headerTrailing_1apq1_135",cy="_body_1apq1_141",dy="_footer_1apq1_152",uy="_footerEnd_1apq1_157",py="_metaRow_1apq1_162",fy="_metaItem_1apq1_170",hy="_resultHero_1apq1_180",my="_resultHeadline_1apq1_185",gy="_resultDetail_1apq1_191",vy="_clauses_1apq1_205",xy="_clause_1apq1_205",yy="_clauseLabel_1apq1_215",wy="_clauseBody_1apq1_225",by="_badgeExecuting_1apq1_245",Xe={card:Jx,header:ey,iconBadge:ty,iconInner:ny,headerText:ry,headerTopRow:oy,eyebrow:ay,title:sy,subtitle:iy,headerTrailing:ly,body:cy,footer:dy,footerEnd:uy,metaRow:py,metaItem:fy,resultHero:hy,resultHeadline:my,resultDetail:gy,clauses:vy,clause:xy,clauseLabel:yy,clauseBody:wy,badgeExecuting:by},Wn=v.forwardRef(({tone:n="neutral",accent:a=!0,fill:s=!1,icon:l,eyebrow:c,title:u,subtitle:f,trailing:h,footer:g,footerEnd:y=!1,className:w,children:C,..._},N)=>{const k=c!=null||h!=null,b=k||u!=null||f!=null,j=l!=null||b;return r.jsxs("div",{ref:N,"data-tone":n,"data-accent":a||void 0,"data-fill":s||void 0,"data-icon":l!=null||void 0,className:K(Xe.card,w),..._,children:[j&&r.jsxs("div",{className:Xe.header,children:[l!=null&&r.jsx("span",{className:K(Xe.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx("span",{className:Xe.iconInner,children:l})}),b&&r.jsxs("div",{className:Xe.headerText,children:[k&&r.jsxs("div",{className:Xe.headerTopRow,children:[c!=null&&r.jsx("span",{className:Xe.eyebrow,children:c}),h!=null&&r.jsx("span",{className:Xe.headerTrailing,children:h})]}),u!=null&&r.jsx("span",{className:Xe.title,children:u}),f!=null&&r.jsx("span",{className:Xe.subtitle,children:f})]})]}),C!=null&&r.jsx("div",{className:Xe.body,children:C}),g!=null&&r.jsx("div",{className:K(Xe.footer,y&&Xe.footerEnd),children:g})]})});Wn.displayName="UltronCard";const _y="_root_zkkgh_6",ky="_sm_zkkgh_24",Cy="_md_zkkgh_33",jy="_lg_zkkgh_42",Sy="_neutral_zkkgh_53",Ny="_blue_zkkgh_66",$y="_azure_zkkgh_79",Ly="_purple_zkkgh_92",My="_pink_zkkgh_105",Ey="_red_zkkgh_118",Ry="_orange_zkkgh_131",Iy="_yellow_zkkgh_144",Ty="_matcha_zkkgh_157",Ay="_green_zkkgh_170",zy="_subtle_zkkgh_184",Dy="_outline_zkkgh_190",Py="_solid_zkkgh_196",By="_dot_zkkgh_203",Oy="_icon_zkkgh_212",Fy="_dismiss_zkkgh_224",ao={root:_y,sm:ky,md:Cy,lg:jy,neutral:Sy,blue:Ny,azure:$y,purple:Ly,pink:My,red:Ey,orange:Ry,yellow:Iy,matcha:Ty,green:Ay,subtle:zy,outline:Dy,solid:Py,dot:By,icon:Oy,dismiss:Fy},Xi=({size:n=16,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})},Hy={sm:10,md:12,lg:14},vt=v.forwardRef(({variant:n="subtle",color:a="neutral",size:s="md",dot:l,leadingIcon:c,dismissible:u,onDismiss:f,className:h,children:g,...y},w)=>r.jsxs("span",{ref:w,className:K(ao.root,ao[s],ao[a],ao[n],h),...y,children:[l&&r.jsx("span",{className:ao.dot,"aria-hidden":"true"}),c&&r.jsx("span",{className:K(ao.icon,"alloy-icon-slot"),"aria-hidden":"true",children:c}),g,u&&r.jsx("button",{type:"button",className:ao.dismiss,"aria-label":"Remove",onClick:C=>{C.stopPropagation(),f==null||f()},children:r.jsx(Xi,{size:Hy[s]})})]}));vt.displayName="Tag";function Ch({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ch.displayName="SlashCircle01Icon";const eu=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};eu.displayName="EyeIcon";function Ji({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Ji.displayName="Target01Icon";function jh({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}jh.displayName="ClockIcon";const na=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};na.displayName="RefreshCw04Icon";const Or=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,fill:"none"}),r.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};Or.displayName="CheckCircleIcon";function tu({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}tu.displayName="Save01Icon";const Wy={sm:11,md:12,lg:14},Vy={ignored:{label:"Ignored",color:"neutral",Icon:Ch},monitored:{label:"Monitored",color:"blue",Icon:eu},recommended:{label:"Recommended",color:"purple",Icon:Ji},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:jh},executing:{label:"Executing",color:"azure",Icon:na},completed:{label:"Completed",color:"green",Icon:Or},saved:{label:"Saved",color:"matcha",Icon:tu}},ho=v.forwardRef(({status:n,size:a="sm",label:s,className:l,...c},u)=>{const f=Vy[n],h=f.Icon;return r.jsx(vt,{ref:u,color:f.color,size:a,variant:"subtle",leadingIcon:r.jsx(h,{size:Wy[a]}),className:K(n==="executing"&&Xe.badgeExecuting,l),...c,children:s??f.label})});ho.displayName="UltronStatusBadge";function nu({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}nu.displayName="Bell01Icon";const Uy=v.forwardRef(({title:n,icon:a,eyebrow:s="Event",meta:l,status:c,tone:u="neutral",children:f,...h},g)=>r.jsx(Wn,{ref:g,tone:u,eyebrow:s,title:n,icon:a??r.jsx(nu,{size:14}),trailing:c?r.jsx(ho,{status:c}):void 0,...h,children:((l==null?void 0:l.length)||f)&&r.jsxs(r.Fragment,{children:[l!=null&&l.length?r.jsx("div",{className:Xe.metaRow,children:l.map((y,w)=>r.jsxs("span",{className:Xe.metaItem,children:[y.icon&&r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:y.icon}),y.label]},w))}):null,f]})}));Uy.displayName="UltronEventCard";const qy=v.forwardRef(({eyebrow:n="Understanding",icon:a,entities:s,tone:l="info",children:c,...u},f)=>r.jsxs(Wn,{ref:f,tone:l,eyebrow:n,icon:a??r.jsx(Zd,{size:14}),...u,children:[c,s&&r.jsx("div",{className:Xe.metaRow,children:s})]}));qy.displayName="UltronUnderstandingCard";const Gy={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},Yy=v.forwardRef(({eyebrow:n="Decision",icon:a,factors:s,tone:l="warning",children:c,...u},f)=>r.jsxs(Wn,{ref:f,tone:l,eyebrow:n,icon:a??r.jsx(Ji,{size:14}),...u,children:[c,s!=null&&s.length?r.jsx("div",{className:Xe.metaRow,children:s.map((h,g)=>r.jsx(vt,{size:"sm",color:Gy[l],variant:"subtle",children:h},g))}):null]}));Yy.displayName="UltronDecisionCard";const Zy="_root_ou64w_8",Ky="_xs_ou64w_75",Qy="_sm_ou64w_84",Xy="_md_ou64w_93",Jy="_lg_ou64w_102",e3="_xl_ou64w_111",t3="_iconOnly_ou64w_122",n3="_primary_ou64w_132",r3="_secondary_ou64w_148",o3="_tertiary_ou64w_167",a3="_ghost_ou64w_185",s3="_destructive_ou64w_203",i3="_destructiveSecondary_ou64w_221",l3="_artwork_ou64w_69",c3="_label_ou64w_254",d3="_spinner_ou64w_69",u3="_light_ou64w_281",Yt={root:Zy,xs:Ky,sm:Qy,md:Xy,lg:Jy,xl:e3,iconOnly:t3,primary:n3,secondary:r3,tertiary:o3,ghost:a3,destructive:s3,destructiveSecondary:i3,artwork:l3,label:c3,spinner:d3,"alloy-spin":"_alloy-spin_ou64w_1",light:u3},p3={primary:Yt.primary,secondary:Yt.secondary,tertiary:Yt.tertiary,ghost:Yt.ghost,destructive:Yt.destructive,"destructive-secondary":Yt.destructiveSecondary},Ce=v.forwardRef(({variant:n="primary",size:a="md",loading:s=!1,leadingArtwork:l,trailingArtwork:c,iconOnly:u=!1,className:f,children:h,disabled:g,...y},w)=>{const C=g||s;return r.jsxs("button",{ref:w,className:K(Yt.root,p3[n],Yt[a],u&&Yt.iconOnly,f),disabled:C,"aria-busy":s||void 0,"data-loading":s||void 0,"data-variant":n,"data-size":a,...y,children:[s&&r.jsx("span",{className:Yt.spinner,"aria-hidden":"true"}),!s&&u&&r.jsx("span",{className:K(Yt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:h}),!s&&!u&&r.jsxs(r.Fragment,{children:[l&&r.jsx("span",{className:K(Yt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l}),h&&r.jsx("span",{className:Yt.label,children:h}),c&&r.jsx("span",{className:K(Yt.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:c})]})]})});Ce.displayName="Button";function Sh({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Sh.displayName="XCircleIcon";const f3=v.forwardRef(({eyebrow:n="Recommendation",icon:a,actions:s,onIgnore:l,ignoreLabel:c="Ignore",tone:u="info",children:f,...h},g)=>{const y=r.jsxs(r.Fragment,{children:[s.map((w,C)=>r.jsx(Ce,{size:"sm",variant:w.variant??(C===0?"primary":"secondary"),leadingArtwork:w.icon,loading:w.loading,onClick:w.onClick,children:w.label},C)),l&&r.jsx(Ce,{size:"sm",variant:"ghost",leadingArtwork:r.jsx(Sh,{size:16}),onClick:l,children:c})]});return r.jsx(Wn,{ref:g,tone:u,eyebrow:n,icon:a??r.jsx(Ji,{size:14}),footer:y,...h,children:f})});f3.displayName="UltronRecommendationCard";function Nh({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Nh.displayName="Lock01Icon";const h3=v.forwardRef(({title:n,eyebrow:a="Approval required",icon:s,approveLabel:l="Approve & send",onApprove:c,approving:u=!1,cancelLabel:f="Cancel",onCancel:h,editLabel:g="Edit",onEdit:y,tone:w="warning",children:C,..._},N)=>{const k=r.jsxs(r.Fragment,{children:[h&&r.jsx(Ce,{size:"md",variant:"ghost",onClick:h,children:f}),y&&r.jsx(Ce,{size:"md",variant:"secondary",onClick:y,children:g}),r.jsx(Ce,{size:"md",variant:"primary",leadingArtwork:r.jsx(Ki,{size:18}),loading:u,onClick:c,children:l})]});return r.jsx(Wn,{ref:N,tone:w,eyebrow:a,title:n,icon:s??r.jsx(Nh,{size:14}),trailing:r.jsx(ho,{status:"awaiting-approval"}),footer:k,footerEnd:!0,..._,children:C})});h3.displayName="UltronApprovalCard";const m3=v.forwardRef(({eyebrow:n="Working",icon:a,steps:s,state:l="live",duration:c,tone:u="info",...f},h)=>r.jsx(Wn,{ref:h,tone:u,eyebrow:n,icon:a??r.jsx(na,{size:14}),trailing:r.jsx(ho,{status:l==="done"?"completed":"executing"}),...f,children:r.jsx(Xd,{state:l,duration:c,children:s.map((g,y)=>r.jsx(Qi,{type:g.type??"tool",status:g.status??"pending",detail:g.detail,subActivities:g.subActivities,children:g.label},y))})}));m3.displayName="UltronExecutionCard";const g3=v.forwardRef(({headline:n,detail:a,avatar:s,status:l="completed",tone:c="success",footer:u,...f},h)=>r.jsx(Wn,{ref:h,tone:c,fill:!0,accent:!1,trailing:r.jsx(ho,{status:l}),footer:u,...f,children:r.jsxs("div",{className:Xe.resultHero,children:[r.jsx("span",{className:K(Xe.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:s??r.jsx(Or,{size:18})}),r.jsxs("div",{children:[r.jsx("div",{className:Xe.resultHeadline,children:n}),a!=null&&r.jsx("div",{className:Xe.resultDetail,children:a})]})]})}));g3.displayName="UltronResultCard";function ru({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}ru.displayName="ZapIcon";const v3=v.forwardRef(({title:n="Want Ultron to handle this automatically next time?",eyebrow:a="Save as workflow",icon:s,saveLabel:l="Save as workflow",onSave:c,saving:u=!1,dismissLabel:f="Not now",onDismiss:h,tone:g="info",children:y,...w},C)=>{const _=r.jsxs(r.Fragment,{children:[r.jsx(Ce,{size:"md",variant:"primary",leadingArtwork:r.jsx(tu,{size:18}),loading:u,onClick:c,children:l}),h&&r.jsx(Ce,{size:"md",variant:"ghost",onClick:h,children:f})]});return r.jsx(Wn,{ref:C,tone:g,fill:!0,accent:!1,eyebrow:a,title:n,icon:s??r.jsx(ru,{size:14}),footer:_,...w,children:y})});v3.displayName="UltronWorkflowSaveCard";const $h=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};$h.displayName="GitBranch01Icon";function sd({label:n,children:a}){return r.jsxs("div",{className:Xe.clause,children:[r.jsx("span",{className:Xe.clauseLabel,children:n}),r.jsx("span",{className:Xe.clauseBody,children:a})]})}const x3=v.forwardRef(({name:n,eyebrow:a="Workflow",icon:s,when:l,conditions:c,actions:u,status:f,footer:h,tone:g="info",...y},w)=>r.jsx(Wn,{ref:w,tone:g,eyebrow:a,title:n,icon:s??r.jsx($h,{size:14}),trailing:f?r.jsx(ho,{status:f}):void 0,footer:h,...y,children:r.jsxs("div",{className:Xe.clauses,children:[r.jsx(sd,{label:"When",children:l}),r.jsx(sd,{label:"If",children:c}),r.jsx(sd,{label:"Then",children:u})]})}));x3.displayName="UltronWorkflowPreviewCard";const y3="_root_1nyuz_6",w3="_sm_1nyuz_20",b3="_md_1nyuz_29",_3="_lg_1nyuz_38",k3="_divider_1nyuz_48",C3="_interactive_1nyuz_53",j3="_disabled_1nyuz_60",S3="_destructive_1nyuz_64",N3="_selected_1nyuz_78",$3="_label_1nyuz_87",L3="_description_1nyuz_97",M3="_leadingSlot_1nyuz_101",E3="_trailingSlot_1nyuz_102",R3="_content_1nyuz_115",I3="_taSwitch_1nyuz_167",T3="_taSwitchThumb_1nyuz_188",A3="_taCheckbox_1nyuz_203",z3="_taRadio_1nyuz_226",D3="_taRadioDot_1nyuz_244",P3="_taExpand_1nyuz_252",B3="_taStatus_1nyuz_266",O3="_taStatus_success_1nyuz_273",F3="_taStatus_warning_1nyuz_274",H3="_taStatus_error_1nyuz_275",W3="_taStatus_info_1nyuz_276",mt={root:y3,sm:w3,md:b3,lg:_3,divider:k3,interactive:C3,disabled:j3,destructive:S3,selected:N3,label:$3,description:L3,leadingSlot:M3,trailingSlot:E3,content:R3,taSwitch:I3,taSwitchThumb:T3,taCheckbox:A3,taRadio:z3,taRadioDot:D3,taExpand:P3,taStatus:B3,taStatus_success:O3,taStatus_warning:F3,taStatus_error:H3,taStatus_info:W3},Mn=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Mn.displayName="ChevronRightIcon";const el=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};el.displayName="ArrowUpRightIcon";const V3="_root_4qytd_5",U3="_neutral_4qytd_25",q3="_primary_4qytd_30",G3="_success_4qytd_35",Y3="_warning_4qytd_40",Z3="_error_4qytd_45",K3="_info_4qytd_50",gf={root:V3,neutral:U3,primary:q3,success:G3,warning:Y3,error:Z3,info:K3},tl=v.forwardRef(({variant:n="neutral",className:a,children:s,...l},c)=>r.jsx("span",{ref:c,className:K(gf.root,gf[n],a),...l,children:s}));tl.displayName="Badge";const Q3=({checked:n})=>r.jsx("span",{className:mt.taSwitch,"data-checked":n||void 0,"aria-hidden":"true",children:r.jsx("span",{className:mt.taSwitchThumb})}),X3=({checked:n})=>r.jsx("span",{className:mt.taCheckbox,"data-checked":n||void 0,"aria-hidden":"true",children:n&&r.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:r.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),J3=({checked:n})=>r.jsx("span",{className:mt.taRadio,"data-checked":n||void 0,"aria-hidden":"true",children:n&&r.jsx("span",{className:mt.taRadioDot})}),e5=({count:n,label:a})=>{const s=n!==void 0?String(n):a;return s?r.jsx(tl,{"aria-hidden":"true",children:s}):null},t5=({expanded:n})=>r.jsx("span",{className:mt.taExpand,"data-expanded":n||void 0,"aria-hidden":"true",children:r.jsx(Mn,{size:16,color:"currentColor"})}),n5=({variant:n})=>r.jsx("span",{className:K(mt.taStatus,mt[`taStatus_${n}`]),"aria-hidden":"true"}),r5=new Set(["badge","status"]),Fn=v.forwardRef(({label:n,description:a,leadingSlot:s,trailingSlot:l,trailingAction:c,checked:u,defaultChecked:f=!1,onCheckedChange:h,badgeCount:g,badgeLabel:y,expanded:w=!1,statusVariant:C="success",divider:_=!0,size:N="md",interactive:k,selected:b=!1,destructive:j=!1,disabled:M=!1,className:L,onClick:I,onKeyDown:D,...E},B)=>{const R=c==="switch"||c==="checkbox"||c==="radio",[A,U]=v.useState(f),G=R?u!==void 0?u:A:!1,X=k||!!I||R||c!==void 0&&!r5.has(c),q=c==="switch"?"switch":c==="checkbox"?"checkbox":c==="radio"?"radio":X?"button":void 0,ee=v.useCallback(ie=>{if(!M){if(R){const le=!G;u===void 0&&U(le),h==null||h(le)}I==null||I(ie)}},[M,R,G,u,h,I]),oe=v.useCallback(ie=>{X&&!M&&(ie.key==="Enter"||ie.key===" ")&&(ie.preventDefault(),ee(ie)),D==null||D(ie)},[X,M,ee,D]),ce=l??(()=>{if(!c)return null;switch(c){case"chevron":return r.jsx(Mn,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return r.jsx(el,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return r.jsx(Q3,{checked:G});case"checkbox":return r.jsx(X3,{checked:G});case"radio":return r.jsx(J3,{checked:G});case"badge":return r.jsx(e5,{count:g,label:y});case"expand":return r.jsx(t5,{expanded:w});case"status":return r.jsx(n5,{variant:C});default:return null}})();return r.jsxs("div",{ref:B,role:q,tabIndex:X&&!M?0:void 0,"aria-checked":R?G:void 0,"aria-selected":b||void 0,"aria-disabled":M||void 0,"data-selected":b||void 0,"data-disabled":M||void 0,"data-destructive":j||void 0,"data-trailing-action":c??void 0,className:K(mt.root,mt[N],_&&mt.divider,X&&mt.interactive,b&&mt.selected,j&&mt.destructive,M&&mt.disabled,L),onClick:M?void 0:ee,onKeyDown:oe,...E,children:[s&&r.jsx("div",{className:mt.leadingSlot,children:s}),r.jsxs("div",{className:mt.content,children:[r.jsx("span",{className:mt.label,children:n}),a&&r.jsx("span",{className:mt.description,children:a})]}),ce&&r.jsx("div",{className:mt.trailingSlot,children:ce})]})});Fn.displayName="ListItem";const o5=v.forwardRef(({title:n,meta:a,icon:s,status:l,...c},u)=>r.jsx(Fn,{ref:u,label:n,description:a,leadingSlot:s?r.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:s}):void 0,trailingSlot:r.jsx(ho,{status:l}),...c}));o5.displayName="UltronActivityStreamItem";const a5="_root_1sz1z_7",s5="_status_1sz1z_50",id={root:a5,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:s5},ou=v.forwardRef(({disabled:n=!1,size:a="md",escapeTarget:s,onEscape:l,className:c,children:u,...f},h)=>{const g=v.useRef(null),[y,w]=v.useState(""),C=v.Children.map(u,_=>{if(!v.isValidElement(_))return _;const N=_.props;return v.cloneElement(_,{groupDisabled:n||!!N.groupDisabled})});return v.useEffect(()=>{if(!s||!l)return;const _=N=>{N.key==="Escape"&&l()};return s.addEventListener("keydown",_),()=>s.removeEventListener("keydown",_)},[s,l]),v.useCallback(_=>w(_),[]),r.jsxs("div",{ref:h,"data-size":a,className:K(id.root,id[`size-${a}`],c),...f,children:[C,r.jsx("span",{ref:g,className:id.status,role:"status","aria-live":"polite",children:y})]})});ou.displayName="ComposerActions";function ld({size:n=24,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})}const Lh=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Lh.displayName="SearchSmIcon";const Ti=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ti.displayName="Trash03Icon";const is=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};is.displayName="ArrowNarrowRightIcon";function ls({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}const Mh=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Mh.displayName="ChevronSelectorVerticalIcon";const Ya=({size:n=16,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:n,height:n,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l,children:[r.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:a}),r.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:a,strokeWidth:u,strokeLinecap:"round",strokeLinejoin:"round"})]})};Ya.displayName="ClipboardCheckIcon";const nl=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M15 6L9 12L15 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};nl.displayName="ChevronLeftIcon";const Eh=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3 3L21 21",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};Eh.displayName="EyeOffIcon";const Rh=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Rh.displayName="StopIcon";const Ih=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ih.displayName="RecordingIcon";function rl({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}rl.displayName="ArrowNarrowUpIcon";function Th({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Th.displayName="ArrowNarrowDownIcon";function au({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}au.displayName="Microphone02Icon";const Ah=({size:n=16,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ah.displayName="AlertTriangleIcon";function i5({size:n=16,color:a="currentColor",...s}){return r.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[r.jsx("path",{d:"M12 2V22",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:a,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const zh=({size:n=16,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};zh.displayName="Map01Icon";const Dh=({size:n=16,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsxs("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:[r.jsx("path",{d:"M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M16.5 9.5L7.5 4.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})]})};Dh.displayName="PackageIcon";const Ph=({size:n=16,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7.5 4.5C7.5 3.11929 8.61929 2 10 2C11.3807 2 12.5 3.11929 12.5 4.5V6H13.5C14.8978 6 15.5967 6 16.1481 6.22836C16.8831 6.53284 17.4672 7.11687 17.7716 7.85195C18 8.40326 18 9.10218 18 10.5H19.5C20.8807 10.5 22 11.6193 22 13C22 14.3807 20.8807 15.5 19.5 15.5H18V17.2C18 18.8802 18 19.7202 17.673 20.362C17.3854 20.9265 16.9265 21.3854 16.362 21.673C15.7202 22 14.8802 22 13.2 22H12.5V20.25C12.5 19.0074 11.4926 18 10.25 18C9.00736 18 8 19.0074 8 20.25V22H6.8C5.11984 22 4.27976 22 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2 19.7202 2 18.8802 2 17.2V15.5H3.5C4.88071 15.5 6 14.3807 6 13C6 11.6193 4.88071 10.5 3.5 10.5H2C2 9.10218 2 8.40326 2.22836 7.85195C2.53284 7.11687 3.11687 6.53284 3.85195 6.22836C4.40326 6 5.10218 6 6.5 6H7.5V4.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Ph.displayName="PuzzlePiece01Icon";const Bh=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Bh.displayName="ThumbsUpIcon";const Oh=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Oh.displayName="ThumbsDownIcon";const Fh=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M3.34 7C5.07 4.01 8.3 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C8.3 22 5.07 19.99 3.34 17M12 16L16 12M16 12L12 8M16 12H2",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Fh.displayName="CircularArrowIcon";const Hh=({size:n=24,color:a="currentColor",strokeWidth:s,...l})=>{const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M11.4926 4.29493C11.7435 3.85826 12.2565 3.85826 12.5074 4.29493L22.1414 20.9893C22.3921 21.4258 22.0774 22 21.634 22H2.36603C1.92257 22 1.6079 21.4258 1.85856 20.9893L11.4926 4.29493Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})};Hh.displayName="TriangleUpIcon";function su({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M15 21V15.6C15 15.0399 15 14.7599 14.891 14.546C14.7951 14.3578 14.6422 14.2049 14.454 14.109C14.2401 14 13.9601 14 13.4 14H10.6C10.0399 14 9.75992 14 9.54601 14.109C9.35785 14.2049 9.20487 14.3578 9.10899 14.546C9 14.7599 9 15.0399 9 15.6V21M3 7C3 8.65685 4.34315 10 6 10C7.65685 10 9 8.65685 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 8.65685 16.3431 10 18 10C19.6569 10 21 8.65685 21 7M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}su.displayName="Building02Icon";function Wh({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Wh.displayName="Building05Icon";function Vh({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Vh.displayName="CheckVerified01Icon";function cs({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}cs.displayName="Copy01Icon";function iu({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z",fill:a})})}iu.displayName="DotsVerticalIcon";function Uh({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Uh.displayName="Edit02Icon";function qh({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M6 20.0872H8.61029C8.95063 20.0872 9.28888 20.1277 9.61881 20.2087L12.3769 20.8789C12.9753 21.0247 13.5988 21.0389 14.2035 20.9214L17.253 20.3281C18.0585 20.1712 18.7996 19.7855 19.3803 19.2205L21.5379 17.1217C22.154 16.5234 22.154 15.5524 21.5379 14.9531C20.9832 14.4135 20.1047 14.3527 19.4771 14.8103L16.9626 16.6449C16.6025 16.9081 16.1643 17.0498 15.7137 17.0498H13.2855L14.8311 17.0498C15.7022 17.0498 16.4079 16.3633 16.4079 15.5159V15.2092C16.4079 14.5055 15.9156 13.892 15.2141 13.7219L12.8286 13.1418C12.4404 13.0476 12.0428 13 11.6431 13C10.6783 13 8.93189 13.7988 8.93189 13.7988L6 15.0249M2 14.6L2 20.4C2 20.9601 2 21.2401 2.10899 21.454C2.20487 21.6422 2.35785 21.7951 2.54601 21.891C2.75992 22 3.03995 22 3.6 22H4.4C4.96005 22 5.24008 22 5.45399 21.891C5.64215 21.7952 5.79513 21.6422 5.89101 21.454C6 21.2401 6 20.9601 6 20.4V14.6C6 14.04 6 13.7599 5.89101 13.546C5.79513 13.3579 5.64215 13.2049 5.45399 13.109C5.24008 13 4.96005 13 4.4 13H3.6C3.03995 13 2.75992 13 2.54601 13.109C2.35785 13.2049 2.20487 13.3579 2.10899 13.546C2 13.7599 2 14.04 2 14.6ZM17.1914 3.59227C16.5946 2.34341 15.2186 1.6818 13.8804 2.32039C12.5423 2.95898 11.9722 4.4734 12.5325 5.80284C12.8787 6.62448 13.8707 8.22002 14.5781 9.31905C14.8394 9.72513 14.9701 9.92817 15.161 10.0469C15.3247 10.1488 15.5297 10.2037 15.7224 10.1974C15.9471 10.1899 16.1618 10.0794 16.5911 9.85845C17.7532 9.26033 19.4101 8.37457 20.1208 7.83614C21.2707 6.96494 21.5556 5.36359 20.6947 4.14626C19.8337 2.92892 18.3327 2.80914 17.1914 3.59227Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}qh.displayName="HeartHandIcon";function Gh({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M12.7076 18.3639L11.2933 19.7781C9.34072 21.7308 6.1749 21.7308 4.22228 19.7781C2.26966 17.8255 2.26966 14.6597 4.22228 12.7071L5.63649 11.2929M18.3644 12.7071L19.7786 11.2929C21.7312 9.34024 21.7312 6.17441 19.7786 4.22179C17.826 2.26917 14.6602 2.26917 12.7076 4.22179L11.2933 5.636M8.50045 15.4999L15.5005 8.49994",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Gh.displayName="Link01Icon";function Yh({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Yh.displayName="LinkExternal01Icon";function Zh({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M15 4.6C15 4.03995 15 3.75992 14.891 3.54601C14.7951 3.35785 14.6422 3.20487 14.454 3.10899C14.2401 3 13.9601 3 13.4 3H10.6C10.0399 3 9.75992 3 9.54601 3.10899C9.35785 3.20487 9.20487 3.35785 9.10899 3.54601C9 3.75992 9 4.03995 9 4.6V7.4C9 7.96005 9 8.24008 8.89101 8.45399C8.79513 8.64215 8.64215 8.79513 8.45399 8.89101C8.24008 9 7.96005 9 7.4 9H4.6C4.03995 9 3.75992 9 3.54601 9.10899C3.35785 9.20487 3.20487 9.35785 3.10899 9.54601C3 9.75992 3 10.0399 3 10.6V13.4C3 13.9601 3 14.2401 3.10899 14.454C3.20487 14.6422 3.35785 14.7951 3.54601 14.891C3.75992 15 4.03995 15 4.6 15H7.4C7.96005 15 8.24008 15 8.45399 15.109C8.64215 15.2049 8.79513 15.3578 8.89101 15.546C9 15.7599 9 16.0399 9 16.6V19.4C9 19.9601 9 20.2401 9.10899 20.454C9.20487 20.6422 9.35785 20.7951 9.54601 20.891C9.75992 21 10.0399 21 10.6 21H13.4C13.9601 21 14.2401 21 14.454 20.891C14.6422 20.7951 14.7951 20.6422 14.891 20.454C15 20.2401 15 19.9601 15 19.4V16.6C15 16.0399 15 15.7599 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109C15.7599 15 16.0399 15 16.6 15H19.4C19.9601 15 20.2401 15 20.454 14.891C20.6422 14.7951 20.7951 14.6422 20.891 14.454C21 14.2401 21 13.9601 21 13.4V10.6C21 10.0399 21 9.75992 20.891 9.54601C20.7951 9.35785 20.6422 9.20487 20.454 9.10899C20.2401 9 19.9601 9 19.4 9L16.6 9C16.0399 9 15.7599 9 15.546 8.89101C15.3578 8.79513 15.2049 8.64215 15.109 8.45399C15 8.24008 15 7.96005 15 7.4V4.6Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Zh.displayName="MedicalCrossIcon";function Sd({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Sd.displayName="MessageCircle02Icon";function ol({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}ol.displayName="Trash01Icon";function Kh({size:n=16,color:a="currentColor",strokeWidth:s,...l}){const c=typeof n=="number"?n:parseFloat(n),u=s??(c<=12?2:c<=16?1.75:c<=20?1.5:1.25);return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:u,...l,children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:a,strokeLinecap:"round",strokeLinejoin:"round"})})}Kh.displayName="XCloseIcon";const l5="_base_i93xz_11",c5="_icon_i93xz_45",d5="_sendReady_i93xz_65",u5="_sendStreaming_i93xz_66",p5="_sendDisabled_i93xz_67",f5="_sendError_i93xz_68",h5="_attachIdle_i93xz_131",m5="_attachDisabled_i93xz_145",g5="_attachError_i93xz_152",v5="_voiceIdle_i93xz_165",x5="_voiceRecording_i93xz_179",y5="_voiceDisabled_i93xz_189",w5="_iconStack_i93xz_200",b5="_iconLayer_i93xz_209",pt={base:l5,icon:c5,sendReady:d5,sendStreaming:u5,sendDisabled:p5,sendError:f5,attachIdle:h5,attachDisabled:m5,attachError:g5,voiceIdle:v5,voiceRecording:x5,voiceDisabled:y5,iconStack:w5,iconLayer:b5},_5={hidden:void 0,ready:pt.sendReady,"disabled-invalid":pt.sendDisabled,streaming:pt.sendStreaming,error:pt.sendError},k5=(n,a,s)=>{switch(n){case"ready":return"Send message";case"disabled-invalid":return a?`Cannot send: ${a}`:"Cannot send";case"streaming":return"Stop generating";case"error":return s?`Retry sending: ${s}`:"Retry sending";case"hidden":return""}},Zo=v.forwardRef(({state:n,onSend:a,onStop:s,onRetry:l,invalidReason:c,errorMessage:u,groupDisabled:f,className:h,style:g,...y},w)=>{const C=v.useRef(null),_=v.useRef(null),N=v.useCallback(I=>{_.current=I,typeof w=="function"?w(I):w&&(w.current=I)},[w]),k=v.useCallback(()=>{if(n==="ready"){a==null||a();return}if(n==="streaming"){s==null||s();return}if(n==="error"){const I=_.current;I&&(I.dataset.pressed="true",C.current&&clearTimeout(C.current),C.current=setTimeout(()=>{I.dataset.pressed="false"},140)),l==null||l()}},[n,a,s,l]);if(n==="hidden")return null;const b=!f&&(n==="ready"||n==="streaming"||n==="error"),j=k5(n,c,u),M=n==="disabled-invalid"?c??"Cannot send":n==="error"?u??"Send failed — click to retry":null,L=r.jsx("button",{ref:N,type:"button","data-composer-action":"send","data-state":n,className:K(pt.base,_5[n],h),style:g,"aria-label":j,disabled:!b,onClick:k,...y,children:r.jsxs("span",{className:pt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[r.jsx("span",{className:pt.iconLayer,"data-active":n==="ready"||n==="disabled-invalid"?"true":"false",children:r.jsx(rl,{size:"100%",strokeWidth:2})}),r.jsx("span",{className:pt.iconLayer,"data-active":n==="streaming"?"true":"false",children:r.jsx(Rh,{size:"100%",strokeWidth:1.75})}),r.jsx("span",{className:pt.iconLayer,"data-active":n==="error"?"true":"false",children:r.jsx(na,{size:"100%",strokeWidth:2})})]})});return M?r.jsx(Xo,{content:M,placement:"top",children:L}):L});Zo.displayName="ComposerSendButton";const C5={idle:pt.attachIdle,disabled:pt.attachDisabled,error:pt.attachError},j5=(n,a,s)=>{switch(n){case"idle":return"Add attachment";case"disabled":return a?`Attachments unavailable: ${a}`:"Attachments unavailable";case"error":return s?`Attachment failed: ${s}`:"Attachment failed"}},Nd=v.forwardRef(({state:n,onSelect:a,accept:s,multiple:l=!0,disabledReason:c,errorMessage:u,groupDisabled:f,className:h,style:g,...y},w)=>{const C=v.useRef(null),_=v.useCallback(()=>{var L;(n==="idle"||n==="error")&&((L=C.current)==null||L.click())},[n]),N=v.useCallback(L=>{const I=L.target.files;I&&I.length>0&&(a==null||a(I)),L.target.value=""},[a]),k=!f&&n!=="disabled",b=j5(n,c,u),j=n==="disabled"?c??"Attachments unavailable":n==="error"?u??"Attachment failed":null,M=r.jsxs("button",{ref:w,type:"button","data-composer-action":"attachment","data-state":n,className:K(pt.base,C5[n],h),style:g,"aria-label":b,disabled:!k,onClick:_,...y,children:[r.jsx("span",{className:pt.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:r.jsx(sr,{size:"100%",strokeWidth:2})}),r.jsx("input",{ref:C,type:"file",accept:s,multiple:l,onChange:N,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return j?r.jsx(Xo,{content:j,placement:"top",children:M}):M});Nd.displayName="ComposerAttachment";const S5={idle:pt.voiceIdle,recording:pt.voiceRecording,disabled:pt.voiceDisabled},N5=(n,a)=>{switch(n){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return a?`Voice unavailable: ${a}`:"Voice unavailable"}},Qh=v.forwardRef(({state:n,onStartRecording:a,onStopRecording:s,disabledReason:l,groupDisabled:c,className:u,style:f,...h},g)=>{const y=v.useCallback(()=>{if(n==="idle"){a==null||a();return}if(n==="recording"){s==null||s();return}},[n,a,s]),w=!c&&n!=="disabled",C=N5(n,l),_=n==="disabled"?l??"Voice unavailable":null,N=r.jsx("button",{ref:g,type:"button","data-composer-action":"voice","data-state":n,className:K(pt.base,S5[n],u),style:f,"aria-label":C,"aria-pressed":n==="recording"||void 0,disabled:!w,onClick:y,...h,children:r.jsxs("span",{className:pt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[r.jsx("span",{className:pt.iconLayer,"data-active":n!=="recording"?"true":"false",children:r.jsx(au,{size:"100%",strokeWidth:1.5})}),r.jsx("span",{className:pt.iconLayer,"data-active":n==="recording"?"true":"false",children:r.jsx(Ih,{size:"100%",strokeWidth:1.5})})]})});return _?r.jsx(Xo,{content:_,placement:"top",children:N}):N});Qh.displayName="ComposerVoiceButton";const $5=v.forwardRef(({value:n,onChange:a,onSubmit:s,placeholder:l="Ask Ultron…",sending:c=!1,disabled:u=!1,voice:f=!0,maxRows:h=4,radius:g="lg",leadingActions:y,className:w},C)=>{const _=c?"streaming":n.trim().length===0?"hidden":"ready";return r.jsx(yh,{className:w,style:{flex:"0 0 auto"},children:r.jsx(wh,{ref:C,value:n,onChange:a,onSubmit:s,placeholder:l,maxRows:h,radius:g,disabled:u,children:r.jsxs(ou,{size:"md",disabled:u,children:[y,f&&r.jsx(Qh,{state:u?"disabled":"idle"}),r.jsx(Zo,{state:_,onSend:s,onStop:s})]})})})});$5.displayName="UltronCommandBar";const L5=v.forwardRef(({stages:n,state:a="live",duration:s,...l},c)=>r.jsx(Xd,{ref:c,state:a,duration:s,...l,children:n.map((u,f)=>r.jsx(Qi,{type:u.type??"content",status:u.status??"pending",icon:u.icon,detail:u.detail,children:u.label},f))}));L5.displayName="UltronThreadTimeline";const M5="_root_ghwhu_10",E5="_badge_ghwhu_27",R5="_badgeIcon_ghwhu_38",I5="_green_ghwhu_59",T5="_yellow_ghwhu_60",A5="_matcha_ghwhu_61",z5="_purple_ghwhu_62",D5="_blue_ghwhu_63",P5="_azure_ghwhu_64",B5="_red_ghwhu_65",O5="_orange_ghwhu_66",F5="_pink_ghwhu_67",H5="_slate_ghwhu_68",W5="_content_ghwhu_73",V5="_label_ghwhu_83",U5="_valueRow_ghwhu_97",q5="_change_ghwhu_106",G5="_value_ghwhu_97",nr={root:M5,badge:E5,badgeIcon:R5,green:I5,yellow:T5,matcha:A5,purple:z5,blue:D5,azure:P5,red:B5,orange:O5,pink:F5,slate:H5,content:W5,label:V5,valueRow:U5,change:q5,value:G5},Y5=v.forwardRef(({color:n="slate",icon:a,label:s,value:l,change:c,className:u,...f},h)=>r.jsxs("div",{ref:h,className:K(nr.root,u),...f,children:[r.jsx("div",{className:K(nr.badge,nr[n]),"aria-hidden":"true",children:r.jsx("span",{className:nr.badgeIcon,children:a})}),r.jsxs("div",{className:nr.content,children:[r.jsx("span",{className:nr.label,children:s}),r.jsxs("div",{className:nr.valueRow,children:[r.jsx("span",{className:nr.value,children:l}),c!=null&&r.jsx("span",{className:nr.change,children:c})]})]})]}));Y5.displayName="DataCard";const Z5="_root_d0j6n_7",K5="_icon_d0j6n_21",Q5="_text_d0j6n_33",X5="_positive_d0j6n_41",J5="_warning_d0j6n_45",e4="_negative_d0j6n_49",$i={root:Z5,icon:K5,text:Q5,positive:X5,warning:J5,negative:e4};function t4(n){return n==="up"?"positive":"negative"}const n4=v.forwardRef((n,a)=>{const{mode:s,value:l,className:c,...u}=n,f=s==="trend"?n.severity??t4(n.trend):n.severity,{severity:h,...g}=u,y=s==="trend"?(({trend:C,severity:_,...N})=>N)(g):g,w=s==="trend"?n.trend==="up"?rl:Th:null;return r.jsxs("span",{ref:a,className:K($i.root,$i[f],c),...y,children:[r.jsx("span",{className:$i.text,children:l}),w&&r.jsx("span",{className:$i.icon,"aria-hidden":"true",children:r.jsx(w,{size:14})})]})});n4.displayName="ValueChangeLabel";const r4="_root_1lq10_1",o4="_horizontal_1lq10_9",a4="_vertical_1lq10_15",s4="_solid_1lq10_32",i4="_dashed_1lq10_36",Li={root:r4,horizontal:o4,vertical:a4,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:s4,dashed:i4},l4=v.forwardRef(({thickness:n=1,orientation:a="horizontal",variant:s="solid",className:l,...c},u)=>r.jsx("hr",{ref:u,role:"separator","aria-orientation":a,className:K(Li.root,Li[`thickness-${n}`],Li[a],Li[s],l),...c}));l4.displayName="Divider";const c4="_header_vxgy2_95",d4="_title_vxgy2_107",u4="_closeBtn_vxgy2_120",p4="_content_vxgy2_152",f4="_footer_vxgy2_163",Xa={header:c4,title:d4,closeBtn:u4,content:p4,footer:f4},h4=v.forwardRef(({onClose:n,children:a,className:s,...l},c)=>r.jsxs("div",{ref:c,className:K(Xa.header,s),...l,children:[r.jsx("span",{className:Xa.title,children:a}),n&&r.jsx("button",{type:"button",className:Xa.closeBtn,onClick:n,"aria-label":"Close",children:r.jsx(Xi,{size:16})})]}));h4.displayName="DialogHeader";const m4=v.forwardRef(({children:n,className:a,...s},l)=>r.jsx("div",{ref:l,className:K(Xa.content,a),...s,children:n}));m4.displayName="DialogContent";const g4=v.forwardRef(({children:n,className:a,...s},l)=>r.jsx("div",{ref:l,className:K(Xa.footer,a),...s,children:n}));g4.displayName="DialogFooter";const v4="_root_1dntq_7",x4="_badge_1dntq_57",y4="_badgeIconSlot_1dntq_74",w4="_content_1dntq_82",b4="_text_1dntq_90",_4="_title_1dntq_99",k4="_description_1dntq_120",C4="_actions_1dntq_131",j4="_dot_1dntq_137",S4="_actionLink_1dntq_144",N4="_primaryAction_1dntq_162",$4="_trailing_1dntq_170",zt={root:v4,badge:x4,badgeIconSlot:y4,content:w4,text:b4,title:_4,description:k4,actions:C4,dot:j4,actionLink:S4,primaryAction:N4,trailing:$4},L4=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),M4=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),E4=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),vf=()=>r.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),R4={error:L4,warning:E4,success:M4,info:vf,feature:vf},Xh=v.forwardRef(({status:n="info",variant:a="lighter",size:s="sm",title:l,description:c,action:u,onAction:f,learnMore:h,onLearnMore:g,onDismiss:y,className:w,...C},_)=>{const N=R4[n],k=s==="lg",b=y?r.jsx(Ce,{variant:"ghost",size:"xs",iconOnly:!0,onClick:y,"aria-label":"Dismiss",children:r.jsx(Xi,{size:12})}):null;return r.jsxs("div",{ref:_,role:"alert",className:K(zt.root,w),"data-status":n,"data-variant":a,"data-size":s,...C,children:[r.jsx("span",{className:zt.badge,"aria-hidden":"true",children:r.jsx("span",{className:K("alloy-icon-slot",zt.badgeIconSlot),children:r.jsx(N,{})})}),k?r.jsxs("div",{className:zt.content,children:[r.jsxs("div",{className:zt.text,children:[r.jsx("p",{className:zt.title,children:l}),c&&r.jsx("p",{className:zt.description,children:c})]}),(u||h)&&r.jsxs("div",{className:zt.actions,children:[u&&r.jsx("button",{type:"button",className:K(zt.actionLink,zt.primaryAction),onClick:f,children:u}),u&&h&&r.jsx("span",{className:zt.dot,"aria-hidden":"true",children:"·"}),h&&r.jsx("button",{type:"button",className:zt.actionLink,onClick:g,children:h})]})]}):r.jsx("p",{className:zt.title,children:l}),k?b:(u||y)&&r.jsxs("div",{className:zt.trailing,children:[u&&r.jsx("button",{type:"button",className:K(zt.actionLink,zt.primaryAction),onClick:f,children:u}),b]})]})});Xh.displayName="Alert";const I4="_stack_x4xl7_11",T4="_item_x4xl7_28",A4="_itemExiting_x4xl7_33",$d={stack:I4,item:T4,itemExiting:A4},z4=v.createContext(null);function D4({id:n,title:a,description:s,status:l,variant:c,size:u,action:f,onAction:h,duration:g,exiting:y,onRemove:w}){const C=v.useCallback(()=>w(n),[n,w]);return r.jsx("div",{className:K($d.item,y&&$d.itemExiting),onAnimationEnd:y?C:void 0,children:r.jsx(Xh,{status:l,variant:c,size:u,title:a,description:s,action:f,onAction:h,onDismiss:C,style:{width:"100%"}})})}function P4({toasts:n,onStartExit:a,onRemove:s}){return v.useEffect(()=>{const l=[];return n.forEach(c=>{c.duration>0&&!c.exiting&&l.push(setTimeout(()=>a(c.id),c.duration))}),()=>l.forEach(clearTimeout)},[n,a]),n.length===0?null:Jd.createPortal(r.jsx("div",{className:$d.stack,"aria-live":"polite","aria-atomic":"false",children:n.map(l=>r.jsx(D4,{...l,onRemove:s},l.id))}),document.body)}function B4({children:n}){const[a,s]=v.useState([]),l=v.useRef(0),c=v.useCallback(h=>{const g=`toast-${++l.current}`;return s(y=>[...y,{id:g,title:h.title,description:h.description,status:h.status??"info",variant:h.variant??"stroke",size:h.size??"sm",action:h.action,onAction:h.onAction,duration:h.duration??4e3,exiting:!1}]),g},[]),u=v.useCallback(h=>{s(g=>g.map(y=>y.id===h?{...y,exiting:!0}:y))},[]),f=v.useCallback(h=>{s(g=>g.filter(y=>y.id!==h))},[]);return r.jsxs(z4.Provider,{value:{addToast:c,removeToast:u},children:[n,r.jsx(P4,{toasts:a,onStartExit:u,onRemove:f})]})}const O4="_root_1s0ek_5",F4="_list_1s0ek_11",H4="_item_1s0ek_23",W4="_separator_1s0ek_31",V4="_link_1s0ek_47",U4="_current_1s0ek_68",q4="_iconSlot_1s0ek_76",Bn={root:O4,list:F4,item:H4,separator:W4,link:V4,current:U4,iconSlot:q4},G4=()=>r.jsx("span",{className:Bn.separator,"aria-hidden":"true",children:"/"}),Y4=()=>r.jsx("span",{className:Bn.separator,"aria-hidden":"true",children:r.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:r.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),Z4=v.forwardRef(({items:n,separator:a="slash",className:s,...l},c)=>{const u=a==="chevron"?Y4:G4;return r.jsx("nav",{ref:c,"aria-label":"Breadcrumb",className:K(Bn.root,s),...l,children:r.jsx("ol",{className:Bn.list,children:n.map((f,h)=>{const g=h===n.length-1,y=!g&&(!!f.href||!!f.onClick);return r.jsxs("li",{className:Bn.item,children:[h>0&&r.jsx(u,{}),y?r.jsxs("a",{href:f.href,onClick:f.onClick,className:Bn.link,"aria-label":f.label,children:[f.icon&&r.jsx("span",{className:K(Bn.iconSlot,"alloy-icon-slot"),children:f.icon}),r.jsx("span",{children:f.label})]}):r.jsxs("span",{className:K(Bn.link,g&&Bn.current),"aria-current":g?"page":void 0,children:[f.icon&&r.jsx("span",{className:K(Bn.iconSlot,"alloy-icon-slot"),children:f.icon}),r.jsx("span",{children:f.label})]})]},h)})})})});Z4.displayName="Breadcrumb";const K4="_root_139vz_6",Q4="_divider_139vz_14",X4="_item_139vz_19",J4="_label_139vz_25",e6="_description_139vz_26",t6="_chevron_139vz_27",n6="_iconSlot_139vz_28",r6="_hitTarget_139vz_32",o6="_size_sm_139vz_37",a6="_size_md_139vz_43",s6="_size_lg_139vz_49",i6="_header_139vz_59",l6="_headerContent_139vz_59",c6="_checkboxWrap_139vz_60",d6="_labelBlock_139vz_157",u6="_trailingSlot_139vz_60",p6="_body_139vz_199",f6="_bodyInner_139vz_209",h6="_bodyContent_139vz_214",$t={root:K4,divider:Q4,item:X4,label:J4,description:e6,chevron:t6,iconSlot:n6,hitTarget:r6,size_sm:o6,size_md:a6,size_lg:s6,header:i6,headerContent:l6,checkboxWrap:c6,labelBlock:d6,trailingSlot:u6,body:p6,bodyInner:f6,bodyContent:h6},m6="_root_17t97_6",g6="_disabled_17t97_12",v6="_sm_17t97_18",x6="_md_17t97_26",y6="_lg_17t97_34",w6="_controlWrap_17t97_43",b6="_input_17t97_52",_6="_box_17t97_67",k6="_boxChecked_17t97_96",C6="_boxError_17t97_106",j6="_labelWrap_17t97_116",S6="_label_17t97_116",N6="_error_17t97_138",$6="_required_17t97_140",L6="_description_17t97_145",en={root:m6,disabled:g6,sm:v6,md:x6,lg:y6,controlWrap:w6,input:b6,box:_6,boxChecked:k6,boxError:C6,labelWrap:j6,label:S6,error:N6,required:$6,description:L6},Jh=v.forwardRef(({checked:n,defaultChecked:a=!1,indeterminate:s=!1,onChange:l,disabled:c,error:u,size:f="md",label:h,description:g,id:y,name:w,value:C,required:_,className:N},k)=>{const b=v.useId(),j=y??b,M=v.useRef(null);v.useEffect(()=>{M.current&&(M.current.indeterminate=s)},[s]);const L=n!==void 0,[I,D]=v.useState(a),E=L?n:I,B=A=>{L||D(A.target.checked),l==null||l(A.target.checked)},R=E||s;return r.jsxs("div",{className:K(en.root,en[f],c&&en.disabled,u&&en.error,N),children:[r.jsxs("div",{className:en.controlWrap,children:[r.jsx("input",{ref:A=>{M.current=A,typeof k=="function"?k(A):k&&(k.current=A)},type:"checkbox",id:j,name:w,value:C,checked:E,disabled:c,required:_,"aria-invalid":u||void 0,onChange:B,className:en.input}),r.jsx("span",{className:K(en.box,R&&en.boxChecked,u&&en.boxError),"aria-hidden":"true",children:s?r.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:r.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):E?r.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:r.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(h||g)&&r.jsxs("div",{className:en.labelWrap,children:[h&&r.jsxs("label",{htmlFor:j,className:en.label,children:[h,_&&r.jsx("span",{className:en.required,"aria-hidden":"true",children:" *"})]}),g&&r.jsx("span",{className:en.description,children:g})]})]})});Jh.displayName="Checkbox";const e0=v.createContext(null),Ld=v.createContext(0),t0=v.forwardRef(({type:n="multiple",collapsible:a=!0,value:s,defaultValue:l,onValueChange:c,divider:u=!0,size:f="md",disabled:h=!1,className:g,children:y,...w},C)=>{const _=v.useMemo(()=>Array.isArray(l)?new Set(l):typeof l=="string"?new Set([l]):new Set,[]),[N,k]=v.useState(_),b=s!==void 0,j=v.useMemo(()=>b?Array.isArray(s)?new Set(s):typeof s=="string"?new Set([s]):new Set:N,[b,s,N]),M=v.useCallback(D=>j.has(D),[j]),L=v.useCallback(D=>{const E=new Set(j);n==="single"?E.has(D)?a&&E.delete(D):(E.clear(),E.add(D)):E.has(D)?E.delete(D):E.add(D),b||k(E),c&&c(n==="single"?E.values().next().value??"":Array.from(E))},[j,n,a,b,c]),I=v.useMemo(()=>({type:n,collapsible:a,size:f,disabled:h,isExpanded:M,toggle:L}),[n,a,f,h,M,L]);return r.jsx("div",{ref:C,"data-accordion-root":"","data-divider":u||void 0,"data-disabled":h||void 0,"data-size":f,className:K($t.root,u&&$t.divider,g),...w,children:r.jsx(e0.Provider,{value:I,children:r.jsx(Ld.Provider,{value:0,children:y})})})});t0.displayName="Accordion";function Mi(n,a){const s=n.closest("[data-accordion-root]");if(!s)return;const l=n.getAttribute("data-accordion-depth"),c=Array.from(s.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${l}"]`)).filter(h=>h.closest("[data-accordion-root]")===s);if(c.length===0)return;const u=c.indexOf(n);let f;switch(a){case"first":f=c[0];break;case"last":f=c[c.length-1];break;case"next":f=c[(u+1)%c.length];break;case"prev":f=c[(u-1+c.length)%c.length];break}f.focus()}const n0=v.forwardRef(({value:n,label:a,description:s,icon:l,leadingSlot:c,trailingSlot:u,chevronPosition:f="leading",selectable:h=!1,checked:g,defaultChecked:y=!1,indeterminate:w=!1,onCheckedChange:C,expanded:_,defaultExpanded:N=!1,onExpandedChange:k,disabled:b=!1,size:j,className:M,children:L,...I},D)=>{const E=v.useContext(e0),B=v.useContext(Ld),R=E!==null,A=j??(E==null?void 0:E.size)??"md",U=b||(E==null?void 0:E.disabled)||!1,[G,X]=v.useState(N);let q;R?q=n!==void 0?E.isExpanded(n):!1:_!==void 0?q=_:q=G;const ee=v.useCallback(()=>{if(U)return;if(R){if(n===void 0)return;const T=E.isExpanded(n);E.toggle(n);const Q=E.type==="single"&&!E.collapsible&&T?!0:!T;k==null||k(Q);return}const $=!q;_===void 0&&X($),k==null||k($)},[U,R,E,n,q,_,k]),oe=v.useCallback($=>C==null?void 0:C($),[C]),ce=v.useCallback($=>{if($.key==="Enter"||$.key===" "){$.preventDefault(),ee();return}if(R)switch($.key){case"ArrowDown":$.preventDefault(),Mi($.currentTarget,"next");break;case"ArrowUp":$.preventDefault(),Mi($.currentTarget,"prev");break;case"Home":$.preventDefault(),Mi($.currentTarget,"first");break;case"End":$.preventDefault(),Mi($.currentTarget,"last");break}},[ee,R]),ie=v.useId(),le=`${ie}-header`,Z=`${ie}-body`,O=A==="sm"?16:A==="md"?18:20,H=c??r.jsxs(r.Fragment,{children:[h&&r.jsx("span",{className:$t.checkboxWrap,children:r.jsx(Jh,{size:A,checked:g,defaultChecked:y,indeterminate:w,disabled:U,onChange:oe})}),l&&r.jsx("span",{className:$t.iconSlot,"aria-hidden":"true",children:l})]});return r.jsxs("div",{ref:D,"data-accordion-item":"","data-expanded":q||void 0,"data-disabled":U||void 0,"data-size":A,"data-depth":B,className:K($t.item,$t[`size_${A}`],M),style:{"--accordion-depth":B},...I,children:[r.jsxs("div",{className:$t.header,children:[r.jsx("button",{type:"button",id:le,"data-accordion-header-button":"","data-accordion-depth":B,className:$t.hitTarget,"aria-expanded":q,"aria-controls":Z,"aria-disabled":U||void 0,disabled:U,onClick:ee,onKeyDown:ce}),r.jsxs("div",{className:$t.headerContent,children:[f==="leading"&&r.jsx("span",{className:$t.chevron,"aria-hidden":"true",children:r.jsx(Mn,{size:O,color:"currentColor"})}),H,r.jsxs("div",{className:$t.labelBlock,children:[r.jsx("span",{className:$t.label,children:a}),s&&r.jsx("span",{className:$t.description,children:s})]}),u&&r.jsx("div",{className:$t.trailingSlot,children:u}),f==="trailing"&&r.jsx("span",{className:$t.chevron,"aria-hidden":"true",children:r.jsx(Mn,{size:O,color:"currentColor"})})]})]}),r.jsx("div",{id:Z,role:"region","aria-labelledby":le,className:$t.body,"aria-hidden":!q,children:r.jsx("div",{className:$t.bodyInner,children:r.jsx("div",{className:$t.bodyContent,children:r.jsx(Ld.Provider,{value:B+1,children:L})})})})]})});n0.displayName="AccordionItem";const M6="_root_1vgip_7",E6="_fullWidth_1vgip_12",R6="_panel_1vgip_19",I6="_panelInner_1vgip_73",T6="_item_1vgip_81",A6="_groupHeading_1vgip_87",z6="_groupHeadingSm_1vgip_96",D6="_groupHeadingLabel_1vgip_100",P6="_groupHeadingCollapsible_1vgip_112",B6="_groupChevron_1vgip_125",O6="_groupDivider_1vgip_139",$n={root:M6,fullWidth:E6,panel:R6,panelInner:I6,item:T6,groupHeading:A6,groupHeadingSm:z6,groupHeadingLabel:D6,groupHeadingCollapsible:P6,groupChevron:B6,groupDivider:O6};function F6({group:n,size:a,closeOnSelect:s,onClose:l}){const[c,u]=v.useState(n.defaultExpanded??!0);return r.jsxs("div",{children:[n.heading&&r.jsxs("div",{className:K($n.groupHeading,a==="sm"&&$n.groupHeadingSm,n.collapsible&&$n.groupHeadingCollapsible),onClick:n.collapsible?()=>u(f=>!f):void 0,"aria-expanded":n.collapsible?c:void 0,children:[r.jsx("span",{className:$n.groupHeadingLabel,children:n.heading}),n.collapsible&&r.jsx("span",{className:$n.groupChevron,"data-expanded":c||void 0,"aria-hidden":"true",children:r.jsx(Mn,{size:12})})]}),c&&r.jsx("div",{role:"group","aria-label":n.heading,children:n.options.map((f,h)=>{const g=f.trailingAction==="switch"||f.trailingAction==="checkbox"||f.trailingAction==="radio";return r.jsx(Fn,{role:"menuitem",size:a,label:f.label,description:f.description,leadingSlot:f.leadingSlot,trailingAction:f.trailingAction,trailingSlot:f.trailingSlot,disabled:f.disabled,destructive:f.destructive,selected:f.selected,checked:f.checked,defaultChecked:f.defaultChecked,onCheckedChange:f.onCheckedChange,badgeCount:f.badgeCount,badgeLabel:f.badgeLabel,expanded:f.expanded,statusVariant:f.statusVariant,divider:f.divider??!1,className:$n.item,onClick:()=>{var y;(y=f.onClick)==null||y.call(f),s&&!g&&l()}},f.id)})})]})}const ra=v.forwardRef(({trigger:n,groups:a,size:s="sm",width:l=260,placement:c="bottom-start",open:u,defaultOpen:f=!1,onOpenChange:h,disabled:g=!1,closeOnSelect:y=!0,fullWidth:w=!1,className:C,..._},N)=>{const[k,b]=v.useState(f),j=v.useRef(null),M=u!==void 0?u:k,L=v.useCallback(D=>{j.current=D,N&&(typeof N=="function"?N(D):N.current=D)},[N]),I=v.useCallback(D=>{u===void 0&&b(D),h==null||h(D)},[u,h]);return v.useEffect(()=>{if(!M)return;const D=E=>{var B;(B=j.current)!=null&&B.contains(E.target)||I(!1)};return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[M,I]),v.useEffect(()=>{if(!M)return;const D=E=>{E.key==="Escape"&&I(!1)};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[M,I]),r.jsxs("div",{ref:L,className:K($n.root,w&&$n.fullWidth,C),..._,children:[r.jsx("div",{style:{display:w?"flex":"inline-flex",width:w?"100%":void 0},"aria-haspopup":"menu","aria-expanded":M,tabIndex:g?-1:0,onClick:g?void 0:()=>I(!M),onKeyDown:g?void 0:D=>{(D.key==="Enter"||D.key===" ")&&(D.preventDefault(),I(!M))},children:n}),r.jsx("div",{className:$n.panel,"data-open":M||void 0,"data-placement":c,style:{width:typeof l=="number"?`${l}px`:l},role:"menu","aria-orientation":"vertical",children:r.jsx("div",{className:$n.panelInner,children:a.map((D,E)=>r.jsxs("div",{children:[E>0&&r.jsx("div",{className:$n.groupDivider,"aria-hidden":"true"}),r.jsx(F6,{group:D,size:s,closeOnSelect:y,onClose:()=>I(!1)})]},D.id))})})]})});ra.displayName="DropdownMenu";const H6="_hiddenInput_7w2s5_8",W6="_area_7w2s5_19",V6="_uploadIcon_7w2s5_53",U6="_textBlock_7w2s5_59",q6="_title_7w2s5_67",G6="_description_7w2s5_76",Y6="_fileRow_7w2s5_88",Z6="_fileIcon_7w2s5_96",K6="_fileName_7w2s5_101",Q6="_successIcon_7w2s5_115",X6="_removeBtn_7w2s5_121",J6="_progressWrap_7w2s5_145",ew="_progressBar_7w2s5_153",tw="_progressFill_7w2s5_161",nw="_progressLabel_7w2s5_168",rw="_errorRow_7w2s5_178",ow="_errorIcon_7w2s5_186",aw="_errorText_7w2s5_192",sw="_areaMulti_7w2s5_206",iw="_multiDropZone_7w2s5_214",lw="_fileList_7w2s5_244",cw="_fileListItem_7w2s5_254",dw="_inline_7w2s5_267",uw="_inlineIcon_7w2s5_309",pw="_inlineText_7w2s5_330",fw="_inlineProgress_7w2s5_353",hw="_inlineProgressFill_7w2s5_363",ze={hiddenInput:H6,area:W6,uploadIcon:V6,textBlock:U6,title:q6,description:G6,fileRow:Y6,fileIcon:Z6,fileName:K6,successIcon:Q6,removeBtn:X6,progressWrap:J6,progressBar:ew,progressFill:tw,progressLabel:nw,errorRow:rw,errorIcon:ow,errorText:aw,areaMulti:sw,multiDropZone:iw,fileList:lw,fileListItem:cw,inline:dw,inlineIcon:uw,inlineText:pw,inlineProgress:fw,inlineProgressFill:hw};function cd(n){const a=n.name.lastIndexOf(".");return a!==-1?n.name.slice(a+1).toUpperCase():n.type?(n.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const mw=v.forwardRef(({variant:n="area",multiple:a=!1,state:s="empty",progress:l=0,file:c,files:u,errorMessage:f,title:h="Choose a file or drag & drop it here.",description:g="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:y,onFileSelect:w,onFilesSelect:C,onClear:_,onRemoveFile:N,fieldVariant:k="outlined",disabled:b=!1,className:j,...M},L)=>{const I=v.useRef(null),[D,E]=v.useState(!1),B=!b&&(a||s==="empty"),R=v.useCallback(()=>{var ie;!b&&(a||s==="empty")&&((ie=I.current)==null||ie.click())},[b,a,s]),A=v.useCallback(ie=>{var le;if(a){const Z=ie.target.files?Array.from(ie.target.files):[];Z.length&&(C==null||C(Z))}else{const Z=(le=ie.target.files)==null?void 0:le[0];Z&&(w==null||w(Z))}ie.target.value=""},[a,w,C]),U=v.useCallback(ie=>{ie.preventDefault(),B&&E(!0)},[B]),G=v.useCallback(()=>E(!1),[]),X=v.useCallback(ie=>{var le;if(ie.preventDefault(),E(!1),!!B)if(a){const Z=ie.dataTransfer.files?Array.from(ie.dataTransfer.files):[];Z.length&&(C==null||C(Z))}else{const Z=(le=ie.dataTransfer.files)==null?void 0:le[0];Z&&(w==null||w(Z))}},[B,a,w,C]),q=r.jsx("input",{ref:I,type:"file",className:ze.hiddenInput,accept:y,multiple:a,disabled:b,"aria-hidden":"true",tabIndex:-1,onChange:A}),ee=c?r.jsxs("div",{className:ze.fileRow,children:[r.jsx("span",{className:`${ze.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Br,{size:16})}),r.jsx("span",{className:ze.fileName,children:c.name}),r.jsx(vt,{size:"sm",variant:"subtle",children:cd(c)}),s==="complete"&&r.jsx("span",{className:`${ze.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Or,{size:16})}),r.jsx("button",{type:"button",className:ze.removeBtn,onClick:_,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(Ti,{size:14})})})]}):null;if(n==="area"){if(a){const ie=u??[];return r.jsxs("div",{ref:L,className:K(ze.areaMulti,j),"data-drag-over":D||void 0,"data-disabled":b||void 0,onDragOver:U,onDragLeave:G,onDrop:X,...M,children:[q,r.jsxs("div",{className:ze.multiDropZone,children:[r.jsx("span",{className:`${ze.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(ld,{size:24})}),r.jsxs("div",{className:ze.textBlock,children:[r.jsx("p",{className:ze.title,children:h}),r.jsx("p",{className:ze.description,children:g})]}),r.jsx(Ce,{variant:"tertiary",size:"sm",onClick:R,disabled:b,children:"Browse Files"})]}),ie.length>0&&r.jsx("ul",{className:ze.fileList,"aria-label":"Selected files",children:ie.map((le,Z)=>r.jsxs("li",{className:ze.fileListItem,children:[r.jsx("span",{className:`${ze.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Br,{size:16})}),r.jsx("span",{className:ze.fileName,children:le.name}),r.jsx(vt,{size:"sm",variant:"subtle",children:cd(le)}),r.jsx("button",{type:"button",className:ze.removeBtn,onClick:()=>N==null?void 0:N(Z),"aria-label":`Remove ${le.name}`,disabled:b,children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(Ti,{size:14})})})]},`${le.name}-${Z}`))})]})}return r.jsxs("div",{ref:L,className:K(ze.area,j),"data-state":s,"data-drag-over":D||void 0,"data-disabled":b||void 0,onDragOver:U,onDragLeave:G,onDrop:X,...M,children:[q,s==="empty"&&r.jsxs(r.Fragment,{children:[r.jsx("span",{className:`${ze.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(ld,{size:24})}),r.jsxs("div",{className:ze.textBlock,children:[r.jsx("p",{className:ze.title,children:h}),r.jsx("p",{className:ze.description,children:g})]}),r.jsx(Ce,{variant:"tertiary",size:"sm",onClick:R,disabled:b,children:"Browse File"})]}),s==="uploading"&&r.jsxs(r.Fragment,{children:[ee,r.jsxs("div",{className:ze.progressWrap,children:[r.jsx("div",{className:ze.progressBar,role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:ze.progressFill,style:{width:`${Math.min(100,Math.max(0,l))}%`}})}),r.jsxs("p",{className:ze.progressLabel,children:[l,"% uploaded"]})]})]}),s==="complete"&&ee,s==="error"&&r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:ze.errorRow,children:[r.jsx("span",{className:`${ze.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Qo,{size:20})}),r.jsx("p",{className:ze.errorText,children:f??"Upload failed. Please try again."})]}),r.jsx(Ce,{variant:"tertiary",size:"sm",onClick:R,disabled:b,children:"Try Again"})]})]})}const oe={empty:r.jsx(ld,{size:16}),uploading:r.jsx(Br,{size:16}),complete:r.jsx(Or,{size:16}),error:r.jsx(Qo,{size:16})}[s],ce=(s==="uploading"||s==="complete")&&!!c;return r.jsxs("div",{ref:L,className:K(ze.inline,j),"data-state":s,"data-field-variant":k,"data-disabled":b||void 0,...M,children:[q,r.jsx("span",{className:`${ze.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:oe}),r.jsxs("span",{className:ze.inlineText,"data-has-file":ce?"":void 0,children:[s==="empty"&&h,s==="uploading"&&(c==null?void 0:c.name),s==="complete"&&(c==null?void 0:c.name),s==="error"&&(f??"Upload failed. Please try again.")]}),ce&&r.jsx(vt,{size:"sm",variant:"subtle",children:cd(c)}),(s==="uploading"||s==="complete"||s==="error")&&r.jsx("button",{type:"button",className:ze.removeBtn,onClick:_,"aria-label":"Remove file",children:r.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:r.jsx(Ti,{size:14})})}),s==="empty"&&r.jsx(Ce,{variant:"tertiary",size:"xs",onClick:R,disabled:b,children:"Browse"}),s==="uploading"&&r.jsx("div",{className:ze.inlineProgress,role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:r.jsx("div",{className:ze.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,l))}%`}})})]})});mw.displayName="FileUploader";const gw="_wrapper_127v8_8",vw="_labelRow_127v8_16",xw="_label_127v8_16",yw="_required_127v8_28",ww="_labelIcon_127v8_36",bw="_sm_127v8_46",_w="_md_127v8_47",kw="_lg_127v8_48",Cw="_shell_127v8_44",jw="_outlined_127v8_75",Sw="_underlined_127v8_102",Nw="_float_127v8_147",$w="_leadingSlot_127v8_181",Lw="_trailingSlot_127v8_193",Mw="_trailingActionWrap_127v8_206",Ew="_trailingActionBtn_127v8_213",Rw="_successTrailingSlot_127v8_234",Iw="_errorTrailingSlot_127v8_239",Tw="_control_127v8_251",Aw="_selectValue_127v8_297",zw="_selectPlaceholder_127v8_303",Dw="_selectChevron_127v8_307",Pw="_selectChevronOpen_127v8_312",Bw="_textareaShell_127v8_315",Ow="_textareaControl_127v8_334",Fw="_footer_127v8_351",Hw="_footerRow_127v8_363",Ww="_footerError_127v8_364",Vw="_footerSuccess_127v8_365",Uw="_footerIcon_127v8_368",qw="_wrapperHorizontal_127v8_378",Gw="_horizontalLabelCol_127v8_384",Yw="_horizontalLabelHint_127v8_393",Zw="_horizontalControlCol_127v8_402",Kw="_msContainer_127v8_416",Qw="_msShell_127v8_425",Xw="_msOpen_127v8_440",Jw="_msDisabled_127v8_447",e8="_msBody_127v8_450",t8="_msPlaceholder_127v8_459",n8="_msChevron_127v8_469",r8="_msChevronOpen_127v8_480",o8="_msPanel_127v8_483",Se={wrapper:gw,labelRow:vw,label:xw,required:yw,labelIcon:ww,sm:bw,md:_w,lg:kw,shell:Cw,outlined:jw,underlined:Sw,float:Nw,leadingSlot:$w,trailingSlot:Lw,trailingActionWrap:Mw,trailingActionBtn:Ew,successTrailingSlot:Rw,errorTrailingSlot:Iw,control:Tw,selectValue:Aw,selectPlaceholder:zw,selectChevron:Dw,selectChevronOpen:Pw,textareaShell:Bw,textareaControl:Ow,footer:Fw,footerRow:Hw,footerError:Ww,footerSuccess:Vw,footerIcon:Uw,wrapperHorizontal:qw,horizontalLabelCol:Gw,horizontalLabelHint:Yw,horizontalControlCol:Zw,msContainer:Kw,msShell:Qw,msOpen:Xw,msDisabled:Jw,msBody:e8,msPlaceholder:t8,msChevron:n8,msChevronOpen:r8,msPanel:o8};function oa({label:n,labelIcon:a,labelDescription:s,hint:l,error:c,success:u,required:f,htmlFor:h,layout:g="vertical",labelWidth:y=160,className:w,children:C}){const _=c??u??l,N=c?"error":u?"success":"hint",k=_?r.jsxs("p",{className:K(Se.footer,N==="error"&&Se.footerError,N==="success"&&Se.footerSuccess),role:N==="error"?"alert":void 0,"aria-live":N==="error"?"assertive":void 0,children:[N==="hint"&&r.jsx("span",{className:`${Se.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:r.jsx(Qo,{size:12})}),_]}):null,b=n!=null?r.jsxs("div",{className:Se.labelRow,children:[r.jsx("label",{className:Se.label,htmlFor:h,children:n}),f&&r.jsx("span",{className:Se.required,"aria-hidden":"true",children:"*"}),a&&r.jsx("span",{className:`${Se.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:a})]}):null;if(g==="horizontal"){const j={width:typeof y=="number"?`${y}px`:y};return r.jsxs("div",{className:K(Se.wrapper,Se.wrapperHorizontal,w),children:[(b||s)&&r.jsxs("div",{className:Se.horizontalLabelCol,style:j,children:[b,s&&r.jsx("p",{className:Se.horizontalLabelHint,children:s})]}),r.jsxs("div",{className:Se.horizontalControlCol,children:[C,k]})]})}return r.jsxs("div",{className:K(Se.wrapper,w),children:[b,C,k]})}function ds({variant:n="outlined",size:a="md",error:s,success:l,disabled:c,readOnly:u,leadingIcon:f,trailingIcon:h,trailingAction:g,isTextarea:y,focused:w,className:C,children:_}){const N=a==="sm"?14:a==="lg"?18:16,k=l&&!s&&!h&&!g?r.jsx(Or,{size:N}):null,b=s&&!h&&!g?r.jsx(Qo,{size:N}):null,j=!!f,M=!!(h||g||k||b);return r.jsxs("div",{className:K(Se.shell,Se[n],Se[a],y&&Se.textareaShell,C),"data-error":s||void 0,"data-success":l||void 0,"data-disabled":c||void 0,"data-readonly":u||void 0,"data-focused":w||void 0,"data-has-leading":j||void 0,"data-has-trailing":M||void 0,children:[f&&r.jsx("span",{className:K(Se.leadingSlot,"alloy-icon-slot"),children:f}),_,g?r.jsx("span",{className:Se.trailingActionWrap,children:g}):h||k||b?r.jsx("span",{className:K(Se.trailingSlot,"alloy-icon-slot",k&&Se.successTrailingSlot,b&&Se.errorTrailingSlot),children:h??k??b}):null]})}const lu=v.forwardRef(({label:n,labelIcon:a,hint:s,error:l,success:c,required:u,variant:f="outlined",size:h="md",type:g="text",leadingIcon:y,trailingIcon:w,layout:C,labelWidth:_,labelDescription:N,id:k,disabled:b,readOnly:j,className:M,...L},I)=>{const D=v.useId(),E=k??D;return r.jsx(oa,{label:n,labelIcon:a,hint:s,error:l,success:c,required:u,htmlFor:E,layout:C,labelWidth:_,labelDescription:N,className:M,children:r.jsx(ds,{variant:f,size:h,error:!!l,success:!!c,disabled:b,readOnly:j,leadingIcon:y,trailingIcon:w,children:r.jsx("input",{ref:I,id:E,type:g,disabled:b,readOnly:j,"aria-invalid":l?!0:void 0,"aria-describedby":s||l||c?`${E}-footer`:void 0,className:K(Se.control),...L})})})});lu.displayName="TextField";const a8=v.forwardRef(({label:n,labelIcon:a,hint:s,error:l,success:c,required:u,variant:f="outlined",size:h="md",leadingIcon:g,trailingIcon:y,layout:w,labelWidth:C,labelDescription:_,id:N,disabled:k,readOnly:b,className:j,...M},L)=>{const I=v.useId(),D=N??I;return r.jsx(oa,{label:n,labelIcon:a,hint:s,error:l,success:c,required:u,htmlFor:D,layout:w,labelWidth:C,labelDescription:_,className:j,children:r.jsx(ds,{variant:f,size:h,error:!!l,success:!!c,disabled:k,readOnly:b,leadingIcon:g,trailingIcon:y,isTextarea:!0,children:r.jsx("textarea",{ref:L,id:D,disabled:k,readOnly:b,"aria-invalid":l?!0:void 0,className:K(Se.control,Se.textareaControl),...M})})})});a8.displayName="TextArea";const s8={sm:"sm",md:"md",lg:"lg"},r0=v.forwardRef(({label:n,labelIcon:a,hint:s,error:l,success:c,required:u,variant:f="outlined",size:h="md",leadingIcon:g,layout:y,labelWidth:w,labelDescription:C,options:_,value:N,defaultValue:k="",onChange:b,placeholder:j="Select an option…",disabled:M,readOnly:L,id:I,className:D},E)=>{var O;const B=v.useId(),R=I??B,A=N!==void 0,[U,G]=v.useState(k),X=A?N:U,q=v.useCallback(H=>{A||G(H),b==null||b(H)},[A,b]),[ee,oe]=v.useState(!1),ce=(O=_.find(H=>H.value===X))==null?void 0:O.label,ie=h==="sm"?14:h==="lg"?18:16,le=s8[h],Z=r.jsx(ds,{variant:f,size:h,error:!!l,success:!!c,disabled:M,readOnly:L,focused:ee,leadingIcon:g,trailingIcon:r.jsx("span",{className:K(Se.selectChevron,ee&&Se.selectChevronOpen),"aria-hidden":"true",children:r.jsx(En,{size:ie})}),children:r.jsx("span",{className:K(Se.control,Se.selectValue,!ce&&Se.selectPlaceholder),children:ce??j})});return r.jsx(oa,{label:n,labelIcon:a,hint:s,error:l,success:c,required:u,htmlFor:R,layout:y,labelWidth:w,labelDescription:C,className:D,children:r.jsx(ra,{ref:E,id:R,fullWidth:!0,trigger:Z,groups:[{id:"options",options:_.map(H=>({id:H.value,label:H.label,disabled:H.disabled,selected:H.value===X,onClick:()=>q(H.value)}))}],size:le,width:"100%",placement:"bottom-start",open:ee,onOpenChange:oe,disabled:M||L})})});r0.displayName="SelectField";const i8=v.forwardRef(({label:n,labelIcon:a,hint:s,error:l,success:c,required:u,variant:f="outlined",size:h="md",leadingIcon:g,layout:y,labelWidth:w,labelDescription:C,id:_,disabled:N,readOnly:k,className:b,...j},M)=>{const L=v.useId(),I=_??L,[D,E]=v.useState(!1),B=h==="sm"?14:h==="lg"?18:16;return r.jsx(oa,{label:n,labelIcon:a,hint:s,error:l,success:c,required:u,htmlFor:I,layout:y,labelWidth:w,labelDescription:C,className:b,children:r.jsx(ds,{variant:f,size:h,error:!!l,success:!!c,disabled:N,readOnly:k,leadingIcon:g,trailingAction:r.jsx("button",{type:"button",className:`${Se.trailingActionBtn} alloy-icon-slot`,onClick:()=>E(R=>!R),tabIndex:N?-1:0,"aria-label":D?"Hide password":"Show password","aria-pressed":D,children:D?r.jsx(Eh,{size:B}):r.jsx(eu,{size:B})}),children:r.jsx("input",{ref:M,id:I,type:D?"text":"password",disabled:N,readOnly:k,"aria-invalid":l?!0:void 0,autoComplete:"current-password",className:K(Se.control),...j})})})});i8.displayName="PasswordField";const l8=v.forwardRef(({label:n,labelIcon:a,hint:s,error:l,success:c,required:u,variant:f="outlined",size:h="md",onClear:g,onChange:y,layout:w,labelWidth:C,labelDescription:_,id:N,value:k,defaultValue:b,disabled:j,readOnly:M,className:L,...I},D)=>{const E=v.useId(),B=N??E,R=h==="sm"?14:h==="lg"?18:16,A=k!==void 0?String(k).length>0:void 0,U=v.useCallback(G=>{y==null||y(G)},[y]);return r.jsx(oa,{label:n,labelIcon:a,hint:s,error:l,success:c,required:u,htmlFor:B,layout:w,labelWidth:C,labelDescription:_,className:L,children:r.jsx(ds,{variant:f,size:h,error:!!l,success:!!c,disabled:j,readOnly:M,leadingIcon:r.jsx(Lh,{size:R}),trailingAction:A?r.jsx("button",{type:"button",className:`${Se.trailingActionBtn} alloy-icon-slot`,onClick:g,tabIndex:j?-1:0,"aria-label":"Clear search",children:r.jsx(Xi,{size:R})}):void 0,children:r.jsx("input",{ref:D,id:B,type:"search",value:k,defaultValue:b,disabled:j,readOnly:M,"aria-invalid":l?!0:void 0,onChange:U,className:K(Se.control),...I})})})});l8.displayName="SearchField";const c8=v.forwardRef((n,a)=>r.jsx(lu,{ref:a,type:"email",autoComplete:"email",inputMode:"email",...n}));c8.displayName="EmailField";const o0=v.forwardRef((n,a)=>r.jsx(lu,{ref:a,type:"number",inputMode:"numeric",...n}));o0.displayName="NumberField";const d8={sm:"sm",md:"sm",lg:"md"},u8={sm:"sm",md:"md",lg:"lg"},p8=v.forwardRef(({label:n,labelIcon:a,hint:s,error:l,success:c,required:u,variant:f="outlined",size:h="md",layout:g,labelWidth:y,labelDescription:w,options:C,value:_,defaultValue:N=[],onChange:k,placeholder:b="Select options…",disabled:j,readOnly:M,id:L,className:I},D)=>{const E=v.useId(),B=L??E,R=`${B}-list`,A=v.useRef(null),U=_!==void 0,[G,X]=v.useState(N),q=U?_:G,ee=v.useCallback(T=>{U||X(T),k==null||k(T)},[U,k]),[oe,ce]=v.useState(!1);v.useEffect(()=>{if(!oe)return;const T=J=>{A.current&&!A.current.contains(J.target)&&ce(!1)},Q=J=>{J.key==="Escape"&&ce(!1)};return document.addEventListener("mousedown",T),document.addEventListener("keydown",Q),()=>{document.removeEventListener("mousedown",T),document.removeEventListener("keydown",Q)}},[oe]);const ie=T=>{if(j||M)return;const Q=q.includes(T)?q.filter(J=>J!==T):[...q,T];ee(Q)},le=T=>{j||M||((T.key==="Enter"||T.key===" ")&&(T.preventDefault(),ce(Q=>!Q)),T.key==="Backspace"&&q.length>0&&!oe&&ee(q.slice(0,-1)))},Z=h==="sm"?14:h==="lg"?18:16,O=d8[h],H=u8[h],$=Object.fromEntries(C.map(T=>[T.value,T.label]));return r.jsx(oa,{label:n,labelIcon:a,hint:s,error:l,success:c,required:u,htmlFor:B,layout:g,labelWidth:y,labelDescription:w,className:I,children:r.jsxs("div",{ref:A,className:Se.msContainer,children:[r.jsxs("div",{ref:D,id:B,role:"combobox","aria-haspopup":"listbox","aria-expanded":oe,"aria-controls":R,"aria-disabled":j||void 0,tabIndex:j?-1:0,className:K(Se.msShell,Se[f],Se[h],oe&&Se.msOpen,j&&Se.msDisabled),"data-error":l?!0:void 0,"data-success":c&&!l?!0:void 0,"data-disabled":j||void 0,onClick:()=>{!j&&!M&&ce(T=>!T)},onKeyDown:le,children:[r.jsx("div",{className:Se.msBody,children:q.length===0?r.jsx("span",{className:Se.msPlaceholder,children:b}):q.map(T=>r.jsx(vt,{size:O,variant:"subtle",dismissible:!j&&!M,onDismiss:()=>ee(q.filter(Q=>Q!==T)),children:$[T]??T},T))}),r.jsx("span",{className:K(Se.msChevron,"alloy-icon-slot",oe&&Se.msChevronOpen),children:r.jsx(En,{size:Z})})]}),oe&&r.jsx("div",{id:R,role:"listbox","aria-multiselectable":"true","aria-label":typeof n=="string"?n:"Options",className:Se.msPanel,children:C.map(T=>{const Q=q.includes(T.value);return r.jsx(Fn,{label:T.label,size:H,trailingAction:"checkbox",checked:Q,disabled:T.disabled,role:"option","aria-selected":Q,onMouseDown:J=>{J.preventDefault()},onCheckedChange:()=>{T.disabled||ie(T.value)}},T.value)})})]})})});p8.displayName="MultiSelectField";const f8="_root_1249j_6",h8="_pageControls_1249j_14",m8="_pageBtn_1249j_21",g8="_ellipsis_1249j_36",v8="_rowsGroup_1249j_51",x8="_rowsSelect_1249j_58",y8="_countText_1249j_64",w8="_groupLabel_1249j_74",b8="_goToGroup_1249j_84",_8="_goToInput_1249j_91",Sn={root:f8,pageControls:h8,pageBtn:m8,ellipsis:g8,rowsGroup:v8,rowsSelect:x8,countText:y8,groupLabel:w8,goToGroup:b8,goToInput:_8};function k8(n,a,s){if(a<=1)return[1];const l=Math.max(2,n-s),c=Math.min(a-1,n+s),u=[1];l>2&&u.push("ellipsis");for(let f=l;f<=c;f++)u.push(f);return c<a-1&&u.push("ellipsis"),a>1&&u.push(a),u}const C8=v.forwardRef(({page:n,totalPages:a,onPageChange:s,showRowsPerPage:l=!1,rowsPerPage:c,rowsPerPageOptions:u=[10,25,50,100],onRowsPerPageChange:f,showGoToPage:h=!1,totalCount:g,siblingCount:y=1,size:w="sm",disabled:C=!1,className:_,...N},k)=>{const[b,j]=v.useState(""),M=w,L=w,I=w==="sm"?14:16,D=k8(n,a,y),E=v.useCallback(A=>{const U=Math.min(Math.max(1,A),a);U!==n&&s(U)},[n,a,s]),B=v.useCallback(A=>{if(A.key==="Enter"){const U=parseInt(b,10);isNaN(U)||E(U),j("")}},[b,E]),R=g!=null&&c!=null?`${(n-1)*c+1}–${Math.min(n*c,g)} of ${g}`:null;return r.jsxs("nav",{ref:k,"aria-label":"Pagination",className:K(Sn.root,_),"data-size":w,...N,children:[l&&r.jsxs("div",{className:Sn.rowsGroup,children:[r.jsx("span",{className:Sn.groupLabel,children:"Rows per page"}),r.jsx("div",{className:Sn.rowsSelect,children:r.jsx(r0,{size:L,value:c,disabled:C,"aria-label":"Rows per page",onChange:A=>f==null?void 0:f(Number(A.target.value)),children:u.map(A=>r.jsx("option",{value:A,children:A},A))})})]}),R&&r.jsx("span",{className:Sn.countText,"aria-live":"polite",children:R}),r.jsxs("div",{className:Sn.pageControls,role:"group","aria-label":"Page navigation",children:[r.jsx(Ce,{variant:"ghost",size:M,iconOnly:!0,"aria-label":"Previous page",disabled:C||n<=1,onClick:()=>E(n-1),children:r.jsx(nl,{size:I})}),D.map((A,U)=>A==="ellipsis"?r.jsx("span",{className:Sn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${U}`):r.jsx(Ce,{variant:A===n?"secondary":"ghost",size:M,"aria-label":`Page ${A}`,"aria-current":A===n?"page":void 0,disabled:C,onClick:()=>E(A),className:Sn.pageBtn,children:A},A)),r.jsx(Ce,{variant:"ghost",size:M,iconOnly:!0,"aria-label":"Next page",disabled:C||n>=a,onClick:()=>E(n+1),children:r.jsx(Mn,{size:I})})]}),h&&r.jsxs("div",{className:Sn.goToGroup,children:[r.jsx("span",{className:Sn.groupLabel,children:"Go to"}),r.jsx("div",{className:Sn.goToInput,children:r.jsx(o0,{size:L,value:b,placeholder:String(n),min:1,max:a,disabled:C,"aria-label":"Go to page number",onChange:A=>j(A.target.value),onKeyDown:B})})]})]})});C8.displayName="Pagination";const j8="_root_1vx33_6",S8="_fullWidth_1vx33_18",N8="_item_1vx33_23",$8="_indicator_1vx33_28",L8="_sm_1vx33_46",M8="_md_1vx33_54",E8="_lg_1vx33_62",R8="_itemSelected_1vx33_109",I8="_itemIcon_1vx33_115",T8="_itemLabel_1vx33_127",zr={root:j8,fullWidth:S8,item:N8,indicator:$8,sm:L8,md:M8,lg:E8,itemSelected:R8,itemIcon:I8,itemLabel:T8},a0=v.createContext(null);function A8(n){const a=v.useContext(a0);if(!a)throw new Error(`<${n}> must be rendered inside <SegmentedControl>`);return a}const s0=v.forwardRef(({value:n,leadingIcon:a,className:s,children:l,disabled:c,onClick:u,...f},h)=>{const{value:g,onChange:y,disabled:w,name:C}=A8("SegmentedControl.Item"),_=g===n,N=w||!!c;return r.jsxs("button",{ref:h,type:"button",role:"radio","aria-checked":_,name:C,disabled:N,className:K(zr.item,_&&zr.itemSelected,s),onClick:k=>{N||y(n),u==null||u(k)},...f,children:[a&&r.jsx("span",{className:K(zr.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),l!==void 0&&r.jsx("span",{className:zr.itemLabel,children:l})]})});s0.displayName="SegmentedControl.Item";const i0=v.forwardRef(({value:n,defaultValue:a="",onChange:s,size:l="md",disabled:c=!1,fullWidth:u=!1,className:f,children:h,...g},y)=>{const[w,C]=v.useState(a),_=n!==void 0,N=_?n:w,k=v.useId(),b=v.useRef(null);v.useLayoutEffect(()=>{const M=b.current;if(!M)return;const L=M.querySelector('[aria-checked="true"]');L&&(M.style.setProperty("--sc-indicator-x",`${L.offsetLeft}px`),M.style.setProperty("--sc-indicator-w",`${L.offsetWidth}px`))},[N,l]);const j=M=>{_||C(M),s==null||s(M)};return r.jsx(a0.Provider,{value:{value:N,onChange:j,disabled:c,name:k},children:r.jsxs("div",{ref:M=>{b.current=M,typeof y=="function"?y(M):y&&(y.current=M)},role:"radiogroup",className:K(zr.root,zr[l],u&&zr.fullWidth,f),...g,children:[r.jsx("span",{className:zr.indicator,"aria-hidden":"true"}),h]})})});i0.displayName="SegmentedControl";Object.assign(i0,{Item:s0});const z8="_root_fkv0x_6",D8="_sm_fkv0x_26",P8="_md_fkv0x_33",B8="_lg_fkv0x_40",O8="_dot_fkv0x_49",F8="_success_fkv0x_58",H8="_warning_fkv0x_65",W8="_error_fkv0x_72",V8="_info_fkv0x_79",U8="_neutral_fkv0x_86",q8="_pending_fkv0x_93",Ei={root:z8,sm:D8,md:P8,lg:B8,dot:O8,success:F8,warning:H8,error:W8,info:V8,neutral:U8,pending:q8},ts=v.forwardRef(({status:n="neutral",size:a="md",dot:s=!0,className:l,children:c,...u},f)=>r.jsxs("span",{ref:f,className:K(Ei.root,Ei[a],Ei[n],l),...u,children:[s&&r.jsx("span",{className:Ei.dot,"aria-hidden":"true"}),c]}));ts.displayName="StatusTag";const G8="_root_1m8t5_6",Y8="_underline_1m8t5_15",Z8="_background_1m8t5_21",K8="_underlineIndicator_1m8t5_26",Q8="_md_1m8t5_43",X8="_lg_1m8t5_44",J8="_tab_1m8t5_42",e9="_tabSelected_1m8t5_77",t9="_tabIcon_1m8t5_99",n9="_tabLabel_1m8t5_111",r9="_tabBadge_1m8t5_116",o9="_tabLabelEditable_1m8t5_123",a9="_tabLabelInput_1m8t5_128",s9="_addTab_1m8t5_147",i9="_addTabIcon_1m8t5_160",Zt={root:G8,underline:Y8,background:Z8,underlineIndicator:K8,md:Q8,lg:X8,tab:J8,tabSelected:e9,tabIcon:t9,tabLabel:n9,tabBadge:r9,tabLabelEditable:o9,tabLabelInput:a9,addTab:s9,addTabIcon:i9},l0=v.createContext(null);function c0(n){const a=v.useContext(l0);if(!a)throw new Error(`<${n}> must be rendered inside <Tabs>`);return a}const d0=v.forwardRef(({value:n,leadingIcon:a,trailingBadge:s,disabled:l,editable:c=!1,autoEdit:u=!1,onLabelChange:f,onClick:h,className:g,children:y,...w},C)=>{const{value:_,onChange:N,disabled:k,name:b}=c0("Tabs.Tab"),j=_===n,M=k||!!l,L=typeof y=="string"?y:"",[I,D]=v.useState(u&&c),[E,B]=v.useState(L),R=v.useRef(null);v.useEffect(()=>{if(I){const q=R.current;q&&(q.focus(),q.select())}},[I]),v.useEffect(()=>{u&&c&&!I&&(B(typeof y=="string"?y:""),D(!0))},[u,c]);const A=()=>{const q=E.trim();q&&q!==L&&(f==null||f(q)),D(!1)},U=()=>{B(L),D(!1)},G=q=>{!c||M||(q.stopPropagation(),B(L),D(!0))},X=q=>{q.key==="Enter"?(q.preventDefault(),A()):q.key==="Escape"&&(q.preventDefault(),U())};return r.jsxs("button",{ref:C,type:"button",role:"tab","aria-selected":j,name:b,disabled:M,className:K(Zt.tab,j&&Zt.tabSelected,g),onClick:q=>{I||(M||N(n),h==null||h(q))},...w,children:[a&&r.jsx("span",{className:K(Zt.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:a}),I?r.jsx("input",{ref:R,type:"text",value:E,onChange:q=>B(q.target.value),onKeyDown:X,onBlur:A,onClick:q=>q.stopPropagation(),className:Zt.tabLabelInput,"aria-label":"Tab name",size:Math.max(E.length,1)}):y!==void 0&&r.jsx("span",{className:K(Zt.tabLabel,c&&Zt.tabLabelEditable),onDoubleClick:G,children:y}),s&&!I&&r.jsx("span",{className:Zt.tabBadge,children:s})]})});d0.displayName="Tabs.Tab";const l9=()=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),u0=v.forwardRef(({className:n,onClick:a,"aria-label":s="Add tab",...l},c)=>{const{disabled:u}=c0("Tabs.AddTab");return r.jsx("button",{ref:c,type:"button","aria-label":s,disabled:u,className:K(Zt.tab,Zt.addTab,n),onClick:a,...l,children:r.jsx("span",{className:K(Zt.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:r.jsx(l9,{})})})});u0.displayName="Tabs.AddTab";const p0=v.forwardRef(({variant:n="underline",size:a="md",value:s,defaultValue:l="",onChange:c,disabled:u=!1,className:f,children:h,...g},y)=>{const[w,C]=v.useState(l),_=s!==void 0,N=_?s:w,k=v.useId(),b=v.useRef(null);v.useLayoutEffect(()=>{const M=b.current;if(!M||n!=="underline")return;const L=M.querySelector('[aria-selected="true"]');L&&(M.style.setProperty("--tab-indicator-x",`${L.offsetLeft}px`),M.style.setProperty("--tab-indicator-w",`${L.offsetWidth}px`))},[N,n]);const j=M=>{_||C(M),c==null||c(M)};return r.jsx(l0.Provider,{value:{value:N,onChange:j,disabled:u,variant:n,size:a,name:k},children:r.jsxs("div",{ref:M=>{b.current=M,typeof y=="function"?y(M):y&&(y.current=M)},role:"tablist",className:K(Zt.root,Zt[n],Zt[a],f),...g,children:[n==="underline"&&r.jsx("span",{className:Zt.underlineIndicator,"aria-hidden":"true"}),h]})})});p0.displayName="Tabs";Object.assign(p0,{Tab:d0,AddTab:u0});const c9="_selectedBorder_1ypeg_7",d9="_selectedFill_1ypeg_12",xf={selectedBorder:c9,selectedFill:d9},u9=v.forwardRef(({selected:n=!1,defaultVariant:a="secondary",selectionStyle:s="border",onSelectedChange:l,onClick:c,className:u,...f},h)=>{const g=w=>{l==null||l(!n),c==null||c(w)},y=n?s==="fill"?xf.selectedFill:xf.selectedBorder:void 0;return r.jsx(Ce,{ref:h,variant:a,"aria-pressed":n,className:K(y,u),onClick:g,...f})});u9.displayName="ToggleButton";const p9="_root_mcb75_6",f9="_disabled_mcb75_13",h9="_sm_mcb75_20",m9="_md_mcb75_31",g9="_lg_mcb75_42",v9="_track_mcb75_54",x9="_trackChecked_mcb75_90",y9="_thumb_mcb75_100",w9="_labelWrap_mcb75_117",b9="_label_mcb75_117",_9="_description_mcb75_139",rr={root:p9,disabled:f9,sm:h9,md:m9,lg:g9,track:v9,trackChecked:x9,thumb:y9,labelWrap:w9,label:b9,description:_9},k9=v.forwardRef(({checked:n,defaultChecked:a=!1,onChange:s,disabled:l,size:c="md",label:u,description:f,id:h,name:g,value:y,className:w},C)=>{const _=v.useId(),N=h??_,k=`${N}-label`,b=n!==void 0,[j,M]=v.useState(a),L=b?n:j,I=()=>{if(l)return;const E=!L;b||M(E),s==null||s(E)},D=E=>{(E.key===" "||E.key==="Enter")&&(E.preventDefault(),I())};return r.jsxs("div",{className:K(rr.root,rr[c],l&&rr.disabled,w),children:[r.jsx("button",{ref:C,type:"button",role:"switch",id:N,"aria-checked":L,"aria-labelledby":u?k:void 0,"aria-disabled":l||void 0,tabIndex:l?-1:0,disabled:l,name:g,value:y,className:K(rr.track,L&&rr.trackChecked),"data-checked":L||void 0,"data-disabled":l||void 0,onClick:I,onKeyDown:D,children:r.jsx("span",{className:rr.thumb})}),(u||f)&&r.jsxs("div",{className:rr.labelWrap,children:[u&&r.jsx("label",{id:k,htmlFor:N,className:rr.label,children:u}),f&&r.jsx("span",{className:rr.description,children:f})]})]})});k9.displayName="Switch";const C9="_root_104n4_5",j9="_disabled_104n4_11",S9="_sm_104n4_17",N9="_md_104n4_25",$9="_lg_104n4_33",L9="_controlWrap_104n4_41",M9="_input_104n4_50",E9="_ring_104n4_65",R9="_ringChecked_104n4_90",I9="_ringError_104n4_94",T9="_dot_104n4_104",A9="_labelWrap_104n4_112",z9="_label_104n4_112",D9="_error_104n4_130",P9="_required_104n4_132",B9="_description_104n4_137",Gt={root:C9,disabled:j9,sm:S9,md:N9,lg:$9,controlWrap:L9,input:M9,ring:E9,ringChecked:R9,ringError:I9,dot:T9,labelWrap:A9,label:z9,error:D9,required:P9,description:B9},O9=v.forwardRef(({value:n,checked:a,onChange:s,disabled:l,error:c,size:u="md",label:f,description:h,id:g,name:y,required:w,className:C},_)=>{const N=v.useId(),k=g??N;return r.jsxs("div",{className:K(Gt.root,Gt[u],l&&Gt.disabled,c&&Gt.error,C),children:[r.jsxs("div",{className:Gt.controlWrap,children:[r.jsx("input",{ref:_,type:"radio",id:k,name:y,value:n,checked:a,disabled:l,required:w,"aria-invalid":c||void 0,onChange:()=>s==null?void 0:s(n),className:Gt.input}),r.jsx("span",{className:K(Gt.ring,a&&Gt.ringChecked,c&&Gt.ringError),"aria-hidden":"true",children:a&&r.jsx("span",{className:Gt.dot})})]}),(f||h)&&r.jsxs("div",{className:Gt.labelWrap,children:[f&&r.jsxs("label",{htmlFor:k,className:Gt.label,children:[f,w&&r.jsx("span",{className:Gt.required,"aria-hidden":"true",children:" *"})]}),h&&r.jsx("span",{className:Gt.description,children:h})]})]})});O9.displayName="Radio";const F9="_table_1ad04_8",H9="_sm_1ad04_16",W9="_row_1ad04_30",V9="_head_1ad04_47",U9="_headLabel_1ad04_82",q9="_sortBtn_1ad04_96",G9="_sortIcon_1ad04_119",Y9="_cell_1ad04_142",Z9="_cellText_1ad04_175",K9="_cellStack_1ad04_203",Q9="_cellStackPrimary_1ad04_210",X9="_cellStackSecondary_1ad04_221",J9="_cellActions_1ad04_233",e7="_cellControl_1ad04_240",t7="_addCell_1ad04_251",n7="_addRowCell_1ad04_264",r7="_addRowLabel_1ad04_276",Lt={table:F9,sm:H9,row:W9,head:V9,headLabel:U9,sortBtn:q9,sortIcon:G9,cell:Y9,cellText:Z9,cellStack:K9,cellStackPrimary:Q9,cellStackSecondary:X9,cellActions:J9,cellControl:e7,addCell:t7,addRowCell:n7,addRowLabel:r7},f0=v.createContext({addColumn:!1,addRow:!1}),h0=()=>v.useContext(f0),aa=v.forwardRef(({size:n="md",interaction:a="row",addColumn:s=!1,addRow:l=!1,onAddColumn:c,onAddRow:u,className:f,children:h,...g},y)=>{const w=v.useMemo(()=>({addColumn:s,addRow:l,onAddColumn:c,onAddRow:u}),[s,l,c,u]);return r.jsx(f0.Provider,{value:w,children:r.jsx("table",{ref:y,className:K(Lt.table,n==="sm"&&Lt.sm,f),"data-interaction":a,...g,children:h})})});aa.displayName="Table";const ft=v.forwardRef(({align:n="left",sort:a,onSort:s,hoverable:l,selected:c,className:u,children:f,...h},g)=>{const y=a!==void 0;return r.jsx("th",{ref:g,className:K(Lt.head,u),"data-align":n!=="left"?n:void 0,"data-hoverable":!y&&l?!0:void 0,"data-selected":c||void 0,"aria-selected":c,scope:"col","aria-sort":a==="asc"?"ascending":a==="desc"?"descending":y?"none":void 0,...h,children:y?r.jsxs("button",{type:"button",className:Lt.sortBtn,onClick:s,"aria-label":typeof f=="string"?`Sort by ${f}`:void 0,children:[f,r.jsx("span",{className:Lt.sortIcon,"data-sort":a!=="none"?a:void 0,"aria-hidden":"true",children:r.jsx(En,{size:12,strokeWidth:2})})]}):r.jsx("span",{className:Lt.headLabel,children:f})})});ft.displayName="TableHead";const sa=v.forwardRef(({children:n,...a},s)=>{const{addColumn:l,onAddColumn:c}=h0(),u=l?v.Children.map(n,(f,h)=>{if(!v.isValidElement(f)||h!==0)return f;const g=v.Children.toArray(f.props.children);return v.cloneElement(f,{},[...g,r.jsx(ft,{hoverable:!0,onClick:c,className:Lt.addCell,"aria-label":"Add column",children:r.jsx(sr,{size:14,strokeWidth:2})},"__add_col_head")])}):n;return r.jsx("thead",{ref:s,...a,children:u})});sa.displayName="TableHeader";const on=v.forwardRef(({hoverable:n=!0,selected:a,className:s,children:l,...c},u)=>r.jsx("tr",{ref:u,className:K(Lt.row,s),"data-hoverable":n||void 0,"data-selected":a||void 0,"aria-selected":a,...c,children:l}));on.displayName="TableRow";const ot=v.forwardRef(({align:n="left",compact:a,hoverable:s=!0,selected:l,className:c,children:u,...f},h)=>r.jsx("td",{ref:h,className:K(Lt.cell,c),"data-align":n!=="left"?n:void 0,"data-compact":a||void 0,"data-hoverable":s||void 0,"data-selected":l||void 0,"aria-selected":l,...f,children:u}));ot.displayName="TableCell";const ia=v.forwardRef(({children:n,...a},s)=>{const{addColumn:l,addRow:c,onAddRow:u}=h0(),f=l?v.Children.map(n,h=>{if(!v.isValidElement(h))return h;const g=v.Children.toArray(h.props.children);return v.cloneElement(h,{},[...g,r.jsx(ot,{"aria-hidden":"true",className:Lt.addCell},"__add_col_pad")])}):n;return r.jsxs("tbody",{ref:s,...a,children:[f,c&&r.jsx(on,{hoverable:!1,children:r.jsx(ot,{colSpan:999,onClick:u,className:Lt.addRowCell,"aria-label":"Add row",children:r.jsxs("span",{className:Lt.addRowLabel,children:[r.jsx(sr,{size:14,strokeWidth:2}),"Add row"]})})})]})});ia.displayName="TableBody";const o7=v.forwardRef(({variant:n="primary",size:a="md",wrap:s,className:l,children:c,...u},f)=>r.jsx("span",{ref:f,className:K(Lt.cellText,l),"data-variant":n!=="primary"?n:void 0,"data-size":a!=="md"?a:void 0,"data-wrap":s||void 0,...u,children:c}));o7.displayName="CellText";const a7=v.forwardRef(({primary:n,secondary:a,className:s,...l},c)=>r.jsxs("div",{ref:c,className:K(Lt.cellStack,s),...l,children:[r.jsx("span",{className:Lt.cellStackPrimary,children:n}),a&&r.jsx("span",{className:Lt.cellStackSecondary,children:a})]}));a7.displayName="CellStack";const s7=v.forwardRef(({size:n="sm",...a},s)=>r.jsx(vt,{ref:s,size:n,...a}));s7.displayName="CellTag";const i7=v.forwardRef(({size:n="sm",...a},s)=>r.jsx(ts,{ref:s,size:n,...a}));i7.displayName="CellStatusTag";const l7=v.forwardRef(({className:n,children:a,...s},l)=>r.jsx("div",{ref:l,className:K(Lt.cellActions,n),...s,children:a}));l7.displayName="CellActions";const c7=v.forwardRef(({className:n,children:a,...s},l)=>r.jsx("div",{ref:l,className:K(Lt.cellControl,n),...s,children:a}));c7.displayName="CellControl";const d7="_root_1afcs_8",u7="_secondary_1afcs_23",p7="_header_1afcs_28",f7="_headerText_1afcs_36",h7="_title_1afcs_43",m7="_subtitle_1afcs_52",g7="_action_1afcs_61",v7="_hero_1afcs_66",x7="_heroValue_1afcs_74",y7="_heroCaption_1afcs_83",w7="_heroChange_1afcs_89",b7="_body_1afcs_95",_7="_legend_1afcs_103",tn={root:d7,secondary:u7,header:p7,headerText:f7,title:h7,subtitle:m7,action:g7,hero:v7,heroValue:x7,heroCaption:y7,heroChange:w7,body:b7,legend:_7},k7=v.forwardRef(({title:n,subtitle:a,action:s,value:l,valueChange:c,valueCaption:u,legend:f,secondary:h,children:g,className:y,...w},C)=>r.jsxs("div",{ref:C,className:K(tn.root,h&&tn.secondary,y),...w,children:[r.jsxs("div",{className:tn.header,children:[r.jsxs("div",{className:tn.headerText,children:[r.jsx("h3",{className:tn.title,children:n}),a&&r.jsx("p",{className:tn.subtitle,children:a})]}),s&&r.jsx("div",{className:tn.action,children:s})]}),(l!==void 0||c||u)&&r.jsxs("div",{className:tn.hero,children:[l!==void 0&&r.jsx("span",{className:tn.heroValue,children:l}),c&&r.jsx("span",{className:tn.heroChange,children:c}),u&&r.jsx("span",{className:tn.heroCaption,children:u})]}),r.jsx("div",{className:tn.body,children:g}),f&&r.jsx("div",{className:tn.legend,children:f})]}));k7.displayName="ChartCard";const C7="_root_je8nq_7",j7="_item_je8nq_17",S7="_swatch_je8nq_23",N7="_label_je8nq_29",$7="_bookend_je8nq_33",Oo={root:C7,item:j7,swatch:S7,label:N7,bookend:$7},m0=v.forwardRef(({items:n,before:a,after:s,variant:l="square",swatchSize:c=12,className:u,...f},h)=>r.jsxs("div",{ref:h,className:K(Oo.root,u),...f,children:[a&&r.jsx("span",{className:Oo.bookend,children:a}),n.map((g,y)=>{const w=l==="line"?{width:c+4,height:2,background:g.color,borderRadius:1}:l==="dot"?{width:c-2,height:c-2,background:g.color,borderRadius:"50%"}:{width:c,height:c,background:g.color};return r.jsxs("span",{className:Oo.item,children:[r.jsx("span",{className:Oo.swatch,style:w,"aria-hidden":"true"}),g.label!==void 0&&r.jsx("span",{className:Oo.label,children:g.label})]},y)}),s&&r.jsx("span",{className:Oo.bookend,children:s})]}));m0.displayName="ChartLegend";const L7="_root_igkx4_5",M7="_svgWrap_igkx4_13",E7="_svg_igkx4_13",R7="_gridLine_igkx4_23",I7="_axisLabel_igkx4_28",T7="_legendWrap_igkx4_43",A7="_legendItem_igkx4_51",z7="_legendDot_igkx4_57",D7="_legendLabel_igkx4_64",P7="_tooltip_igkx4_71",B7="_tooltipLabel_igkx4_85",O7="_tooltipRow_igkx4_95",F7="_tooltipDot_igkx4_101",H7="_tooltipSeries_igkx4_108",W7="_tooltipValue_igkx4_115",Me={root:L7,svgWrap:M7,svg:E7,gridLine:R7,axisLabel:I7,legendWrap:T7,legendItem:A7,legendDot:z7,legendLabel:D7,tooltip:P7,tooltipLabel:B7,tooltipRow:O7,tooltipDot:F7,tooltipSeries:H7,tooltipValue:W7},V7=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function dd(n){if(n===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(n))),s=n/a;return s<=1?a:s<=2?2*a:s<=5?5*a:10*a}function Fo(n){return n>=1e3?`${(n/1e3).toFixed(n%1e3===0?0:1)}k`:String(Math.round(n))}const U7=v.forwardRef(({series:n,labels:a,variant:s="grouped",height:l=260,showGrid:c=!0,showLegend:u=!0,yUnit:f="",barRadius:h=2,colors:g,gradientFrom:y="#8c4fe2",gradientTo:w="#446cff",formatTooltipValue:C,stackStyle:_="gradient-each",capColor:N,className:k,...b},j)=>{var pe,xe,Ne,Ee;const M=g&&g.length>0?g:V7,L=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[I,D]=v.useState({visible:!1,x:0,y:0,label:"",items:[]}),E=v.useRef(null),[B,R]=v.useState(540);v.useEffect(()=>{const fe=E.current;if(!fe)return;const _e=new ResizeObserver(Ge=>{var Ye;const Ve=(Ye=Ge[0])==null?void 0:Ye.contentRect.width;Ve>0&&R(Math.floor(Ve))});_e.observe(fe);const $e=Math.floor(fe.getBoundingClientRect().width);return $e>0&&R($e),()=>_e.disconnect()},[]);const A=44,U=0,G=20,X=20,q=B,ee=l,oe=q-A-U,ce=ee-G-X,ie=5,le=n.map((fe,_e)=>fe.color??M[_e%M.length]);let Z=0;s==="stacked"?a.forEach((fe,_e)=>{const $e=n.reduce((Ge,Ve)=>Ge+(Ve.data[_e]??0),0);$e>Z&&(Z=$e)}):s==="horizontal"?Z=Math.max(...((pe=n[0])==null?void 0:pe.data)??[0]):n.forEach(fe=>fe.data.forEach(_e=>{_e>Z&&(Z=_e)}));const O=dd(Z),H=Array.from({length:ie+1},(fe,_e)=>O*(_e/ie)).reverse(),$=fe=>X+ce-fe/O*ce,T=oe/a.length,Q=3,J=s==="grouped"?Math.max(4,(T-Q*(n.length+1))/n.length):T,ae=()=>D(fe=>({...fe,visible:!1})),de=v.useCallback(fe=>{const _e=fe.currentTarget.getBoundingClientRect(),$e=fe.clientX-_e.left,Ge=Math.floor(($e-A)/T);if(Ge<0||Ge>=a.length){ae();return}const Ve=n.map((Ye,Je)=>({color:le[Je],series:Ye.label,value:Ye.data[Ge]??0}));D({visible:!0,x:fe.clientX+12,y:fe.clientY-8,label:a[Ge],items:Ve})},[n,a,T,le,A]);if(s==="gradient"){const fe=((xe=n[0])==null?void 0:xe.data)??[],_e=((Ne=n[0])==null?void 0:Ne.label)??"",$e=44,Ge=0,Ve=20,Ye=20,Je=Math.max(q-$e-Ge,1),at=ee-Ve-Ye,He=Math.max(0,...fe),Ze=He>0?dd(He):10,We=5,xt=Array.from({length:We+1},(ke,Ke)=>Ze*Ke/We),Oe=ke=>Ve+at-ke/Ze*at,kt=Je/Math.max(1,fe.length),Re=ke=>$e+kt*ke,sn=ke=>$e+kt*(ke+1),Ot=ke=>$e+kt*(ke+.5),Vn=fe.length===0?"":fe.map((ke,Ke)=>{const st=Oe(ke);return`M ${Re(Ke)} ${st} L ${sn(Ke)} ${st}`}).join(" "),Fr=[];fe.forEach((ke,Ke)=>{if(ke<=0)return;const st=Oe(ke);Fr.push({x:Re(Ke),y:st,width:Math.max(sn(Ke)-Re(Ke),0),height:Ve+at-st})});const ln=Math.max(1,Math.ceil(45/kt)),go=a.length-1,ir=C??(ke=>`${Fo(ke)}${f}`);return r.jsxs("div",{ref:j,className:K(Me.root,k),...b,children:[r.jsx("div",{ref:E,className:Me.svgWrap,children:r.jsxs("svg",{width:q,height:ee,viewBox:`0 0 ${q} ${ee}`,className:Me.svg,onMouseLeave:ae,onMouseMove:ke=>{const Ke=ke.currentTarget.getBoundingClientRect(),st=ke.clientX-Ke.left,yt=Math.floor((st-$e)/kt);if(yt<0||yt>=fe.length){ae();return}D({visible:!0,x:ke.clientX+12,y:ke.clientY-8,label:a[yt]??"",items:[{color:w,series:_e,value:fe[yt]??0}]})},children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${L}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:y}),r.jsx("stop",{offset:"100%",stopColor:w})]}),r.jsxs("linearGradient",{id:`${L}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:y,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:w,stopOpacity:"0"})]})]}),xt.map((ke,Ke)=>r.jsxs("g",{children:[c&&r.jsx("line",{x1:0,x2:q-Ge,y1:Oe(ke),y2:Oe(ke),className:Me.gridLine}),r.jsxs("text",{x:0,y:Oe(ke)-6,className:Me.axisLabel,textAnchor:"start",children:[Fo(ke),f]})]},`t-${Ke}`)),Fr.map((ke,Ke)=>r.jsx("rect",{x:ke.x,y:ke.y,width:ke.width,height:ke.height,fill:`url(#${L}-fill)`},`b-${Ke}`)),Vn&&r.jsx("path",{d:Vn,fill:"none",stroke:`url(#${L}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),I.visible&&(()=>{var Un;const ke=(Un=E.current)==null?void 0:Un.getBoundingClientRect();if(!ke)return null;const Ke=I.x-12-ke.left,st=Math.floor((Ke-$e)/kt);if(st<0||st>=fe.length)return null;const yt=fe[st]??0;return yt<=0?null:r.jsx("circle",{cx:Ot(st),cy:Oe(yt),r:4,fill:w,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),a.map((ke,Ke)=>{const st=Ke===0,yt=Ke===go;if(!(st||yt)&&Ke%ln!==0)return null;const xn=st?$e:yt?q-Ge:Ot(Ke),lr=st?"start":yt?"end":"middle";return r.jsx("text",{x:xn,y:ee-Ye+18,className:Me.axisLabel,textAnchor:lr,children:ke},`xl-${Ke}`)})]})}),I.visible&&I.items.length>0&&r.jsxs("div",{className:Me.tooltip,style:{left:I.x,top:I.y},children:[r.jsx("div",{className:Me.tooltipLabel,children:I.label}),I.items.map(ke=>r.jsxs("div",{className:Me.tooltipRow,children:[r.jsx("span",{className:Me.tooltipDot,style:{background:ke.color}}),r.jsx("span",{className:Me.tooltipSeries,children:ke.series}),r.jsx("span",{className:Me.tooltipValue,children:ir(ke.value)})]},ke.series))]})]})}if(s==="horizontal"){const fe=((Ee=n[0])==null?void 0:Ee.data)??[],_e=dd(Math.max(...fe,1)),$e=28,Ge=10,Ve=120,Je=q-Ve-44,at=a.length*($e+Ge)+Ge;return r.jsxs("div",{ref:j,className:K(Me.root,k),...b,children:[r.jsx("div",{ref:E,className:Me.svgWrap,children:r.jsx("svg",{width:q,height:at,viewBox:`0 0 ${q} ${at}`,className:Me.svg,onMouseLeave:ae,onMouseMove:He=>{var Oe;const Ze=He.currentTarget.getBoundingClientRect(),We=He.clientY-Ze.top,xt=Math.floor(We/($e+Ge));if(xt<0||xt>=a.length){ae();return}D({visible:!0,x:He.clientX+12,y:He.clientY-8,label:a[xt],items:[{color:le[0],series:((Oe=n[0])==null?void 0:Oe.label)??"",value:fe[xt]??0}]})},children:a.map((He,Ze)=>{const We=Ge+Ze*($e+Ge),xt=fe[Ze]??0,Oe=xt/_e*Je;return r.jsxs("g",{children:[r.jsx("text",{x:Ve-8,y:We+$e/2+4,className:Me.axisLabel,textAnchor:"end",children:He}),r.jsx("rect",{x:Ve,y:We,width:Oe,height:$e,rx:h,fill:le[0]}),r.jsxs("text",{x:Ve+Oe+6,y:We+$e/2+4,className:Me.axisLabel,textAnchor:"start",children:[Fo(xt),f]})]},Ze)})})}),I.visible&&r.jsxs("div",{className:Me.tooltip,style:{left:I.x,top:I.y},children:[r.jsx("div",{className:Me.tooltipLabel,children:I.label}),I.items.map(He=>r.jsxs("div",{className:Me.tooltipRow,children:[r.jsx("span",{className:Me.tooltipDot,style:{background:He.color}}),r.jsx("span",{className:Me.tooltipSeries,children:He.series}),r.jsxs("span",{className:Me.tooltipValue,children:[Fo(He.value),f]})]},He.series))]})]})}return r.jsxs("div",{ref:j,className:K(Me.root,k),...b,children:[r.jsx("div",{ref:E,className:Me.svgWrap,children:r.jsxs("svg",{width:q,height:ee,viewBox:`0 0 ${q} ${ee}`,className:Me.svg,onMouseMove:de,onMouseLeave:ae,children:[r.jsx("defs",{children:le.flatMap((fe,_e)=>[r.jsxs("linearGradient",{id:`${L}-fill-${_e}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:fe,stopOpacity:"0.3"}),r.jsx("stop",{offset:"100%",stopColor:fe,stopOpacity:"0"})]},`soft-${_e}`),r.jsxs("linearGradient",{id:`${L}-fill-strong-${_e}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:fe,stopOpacity:"1"}),r.jsx("stop",{offset:"100%",stopColor:fe,stopOpacity:"0"})]},`strong-${_e}`)])}),H.map(fe=>{const _e=$(fe);return r.jsxs("g",{children:[c&&r.jsx("line",{x1:0,y1:_e,x2:q-U,y2:_e,className:Me.gridLine}),r.jsxs("text",{x:0,y:_e-6,className:Me.axisLabel,textAnchor:"start",children:[Fo(fe),f]})]},fe)}),a.map((fe,_e)=>{const $e=A+_e*T;if(s==="stacked"){let Ye=0;const Je=n.map((Oe,kt)=>{const Re=Oe.data[_e]??0,sn=Re/O*ce,Ot=$(Ye+Re);return Ye+=Re,{si:kt,value:Re,barH:sn,y:Ot}}),at=$e+(T-J)/2,He=Je.filter(Oe=>Oe.value>0),Ze=He.length>0?He[0].si:-1,We=He.length>0?He[He.length-1]:null,xt=N??(We?le[We.si]:"transparent");return r.jsxs("g",{children:[Je.map(({si:Oe,value:kt,barH:Re,y:sn})=>{if(kt<=0)return null;if(_==="mono-scale"){const Ot=Oe===Ze;return r.jsx("rect",{x:at,y:sn,width:J,height:Re,fill:Ot?`url(#${L}-fill-strong-${Oe})`:le[Oe]},`fill-${Oe}`)}return r.jsx("rect",{x:at,y:sn,width:J,height:Re,fill:`url(#${L}-fill-${Oe})`},`fill-${Oe}`)}),_==="mono-scale"?We&&r.jsx("line",{x1:at,x2:at+J,y1:We.y,y2:We.y,stroke:xt,strokeWidth:2,strokeLinecap:"butt"}):Je.map(({si:Oe,value:kt,y:Re})=>kt>0?r.jsx("line",{x1:at,x2:at+J,y1:Re,y2:Re,stroke:le[Oe],strokeWidth:2,strokeLinecap:"butt"},`cap-${Oe}`):null)]},_e)}const Ge=n.length*J+(n.length-1)*Q,Ve=$e+(T-Ge)/2;return r.jsx("g",{children:n.map((Ye,Je)=>{const at=Ye.data[_e]??0;if(at<=0)return null;const He=at/O*ce,Ze=Ve+Je*(J+Q),We=$(at);return r.jsxs("g",{children:[r.jsx("rect",{x:Ze,y:We,width:J,height:He,fill:`url(#${L}-fill-${Je})`}),r.jsx("line",{x1:Ze,x2:Ze+J,y1:We,y2:We,stroke:le[Je],strokeWidth:2,strokeLinecap:"butt"})]},Je)})},_e)}),(()=>{const _e=Math.max(1,Math.ceil(45/T)),$e=a.length-1;return a.map((Ge,Ve)=>{const Ye=Ve===0,Je=Ve===$e;if(!(Ye||Je)&&Ve%_e!==0)return null;const He=Ye?A:Je?q-U:A+T*(Ve+.5),Ze=Ye?"start":Je?"end":"middle";return r.jsx("text",{x:He,y:ee-G+18,className:Me.axisLabel,textAnchor:Ze,children:Ge},`xl-${Ve}`)})})()]})}),u&&n.length>1&&r.jsx("div",{className:Me.legendWrap,children:n.map((fe,_e)=>r.jsxs("div",{className:Me.legendItem,children:[r.jsx("span",{className:Me.legendDot,style:{background:le[_e]}}),r.jsx("span",{className:Me.legendLabel,children:fe.label})]},fe.label))}),I.visible&&r.jsxs("div",{className:Me.tooltip,style:{left:I.x,top:I.y},children:[r.jsx("div",{className:Me.tooltipLabel,children:I.label}),I.items.map(fe=>r.jsxs("div",{className:Me.tooltipRow,children:[r.jsx("span",{className:Me.tooltipDot,style:{background:fe.color}}),r.jsx("span",{className:Me.tooltipSeries,children:fe.series}),r.jsxs("span",{className:Me.tooltipValue,children:[Fo(fe.value),f]})]},fe.series))]})]})});U7.displayName="BarChart";const q7="_root_1crij_5",G7="_svgWrap_1crij_13",Y7="_svg_1crij_13",Z7="_gridLine_1crij_23",K7="_axisLabelY_1crij_35 _axisLabel_1crij_28",Q7="_axisLabelX_1crij_39 _axisLabel_1crij_28",X7="_legendWrap_1crij_51",J7="_tooltip_1crij_76",eb="_tooltipLabel_1crij_95",tb="_tooltipRow_1crij_105",nb="_tooltipDot_1crij_111",rb="_tooltipSeries_1crij_118",ob="_tooltipValue_1crij_125",nn={root:q7,svgWrap:G7,svg:Y7,gridLine:Z7,axisLabelY:K7,axisLabelX:Q7,legendWrap:X7,tooltip:J7,tooltipLabel:eb,tooltipRow:tb,tooltipDot:nb,tooltipSeries:rb,tooltipValue:ob};function ab(n){if(n===0)return 10;const a=Math.pow(10,Math.floor(Math.log10(n))),s=n/a;return s<=1?a:s<=2?2*a:s<=5?5*a:10*a}function yf(n){return n>=1e3?`${(n/1e3).toFixed(n%1e3===0?0:1)}k`:String(Math.round(n))}function sb(n,a=.35){if(n.length<2)return"";let s=`M ${n[0][0]} ${n[0][1]}`;for(let l=0;l<n.length-1;l++){const[c,u]=n[l],[f,h]=n[l+1],g=(f-c)*a;s+=` C ${c+g} ${u}, ${f-g} ${h}, ${f} ${h}`}return s}const ib=v.forwardRef(({series:n,labels:a,height:s=260,showGrid:l=!0,showLegend:c=!0,gradientFrom:u="#8c4fe2",gradientTo:f="#446cff",yUnit:h="",yTickCount:g=5,className:y,...w},C)=>{const[_,N]=v.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),k=`line-grad-${Math.random().toString(36).slice(2,9)}`,b=v.useRef(null),[j,M]=v.useState(540);v.useEffect(()=>{const O=b.current;if(!O)return;const H=new ResizeObserver(T=>{var J;const Q=(J=T[0])==null?void 0:J.contentRect.width;Q>0&&M(Math.floor(Q))});H.observe(O);const $=Math.floor(O.getBoundingClientRect().width);return $>0&&M($),()=>H.disconnect()},[]);const L=44,I=20,D=20,E=j,B=s,R=E-L,A=B-I-D,U=`url(#${k}-stroke)`,G=O=>O.color??U,X=n.flatMap(O=>O.data),q=ab(Math.max(...X,1)),ee=Array.from({length:g+1},(O,H)=>q*(H/g)).reverse(),oe=O=>D+A-O/q*A,ce=O=>a.length>1?L+O/(a.length-1)*R:L+R/2,ie=O=>O.map((H,$)=>[ce($),oe(H)]),le=()=>N(O=>({...O,visible:!1})),Z=v.useCallback(O=>{const H=O.currentTarget.getBoundingClientRect(),T=O.clientX-H.left-L,Q=R/Math.max(a.length-1,1),J=Math.round(T/Q),ae=Math.max(0,Math.min(J,a.length-1)),de=n.map(pe=>({color:pe.color??f,series:pe.label,value:pe.data[ae]??0}));N({visible:!0,index:ae,x:O.clientX+12,y:O.clientY-8,label:a[ae],items:de})},[n,a,f,R,L]);return r.jsxs("div",{ref:C,className:K(nn.root,y),...w,children:[r.jsx("div",{ref:b,className:nn.svgWrap,children:r.jsxs("svg",{width:E,height:B,viewBox:`0 0 ${E} ${B}`,className:nn.svg,onMouseMove:Z,onMouseLeave:le,children:[r.jsxs("defs",{children:[r.jsxs("linearGradient",{id:`${k}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[r.jsx("stop",{offset:"0%",stopColor:u}),r.jsx("stop",{offset:"100%",stopColor:f})]}),r.jsxs("linearGradient",{id:`${k}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[r.jsx("stop",{offset:"0%",stopColor:f,stopOpacity:"0.05"}),r.jsx("stop",{offset:"50%",stopColor:f}),r.jsx("stop",{offset:"100%",stopColor:f,stopOpacity:"0.05"})]}),r.jsxs("filter",{id:`${k}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[r.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),r.jsx("feOffset",{dy:"4"}),r.jsx("feComponentTransfer",{children:r.jsx("feFuncA",{type:"linear",slope:"0.3"})}),r.jsxs("feMerge",{children:[r.jsx("feMergeNode",{}),r.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),r.jsx("clipPath",{id:`${k}-clip`,children:r.jsx("rect",{x:L,y:D,width:R,height:A,rx:6,ry:6})})]}),ee.map(O=>{const H=oe(O);return r.jsxs("g",{children:[l&&r.jsx("line",{x1:0,y1:H,x2:E,y2:H,className:nn.gridLine}),r.jsxs("text",{x:0,y:H-6,className:nn.axisLabelY,textAnchor:"start",children:[yf(O),h]})]},O)}),r.jsx("g",{clipPath:`url(#${k}-clip)`,children:n.map((O,H)=>{const $=ie(O.data),T=sb($);return r.jsx("path",{d:T,fill:"none",stroke:G(O),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},H)})}),(()=>{const O=_.index>=0?_.index:0,H=ce(O),$=_.visible&&_.index>=0,T="transform 200ms var(--ease-default, ease-out)";return r.jsx("g",{style:{pointerEvents:"none",opacity:$?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:r.jsxs("g",{style:{transform:`translateX(${H}px)`,transition:T},children:[r.jsx("line",{x1:0,x2:0,y1:D,y2:D+A,stroke:f,strokeWidth:2,strokeLinecap:"round",opacity:.5}),n.map((Q,J)=>{const ae=Q.data[O]??0,de=oe(ae),pe=Q.color??f;return r.jsx("g",{style:{transform:`translateY(${de}px)`,transition:T},children:r.jsx("circle",{cx:0,cy:0,r:4,fill:pe,filter:`url(#${k}-pin-shadow)`})},J)})]})})})(),(()=>{const H=a.length>1?R/(a.length-1):R,$=Math.max(1,Math.ceil(45/Math.max(H,1))),T=a.length-1;return a.map((Q,J)=>{const ae=J===0,de=J===T;if(!(ae||de)&&J%$!==0)return null;const xe=ae?L:de?E:ce(J),Ne=ae?"start":de?"end":"middle";return r.jsx("text",{x:xe,y:B-I+14,className:nn.axisLabelX,textAnchor:Ne,children:Q},Q)})})()]})}),c&&n.length>0&&r.jsx("div",{className:nn.legendWrap,children:r.jsx(m0,{variant:"line",items:n.map(O=>({color:O.color??f,label:O.label}))})}),_.visible&&r.jsxs("div",{className:nn.tooltip,style:{left:_.x,top:_.y},children:[r.jsx("div",{className:nn.tooltipLabel,children:_.label}),_.items.map(O=>r.jsxs("div",{className:nn.tooltipRow,children:[r.jsx("span",{className:nn.tooltipDot,style:{background:O.color}}),r.jsx("span",{className:nn.tooltipSeries,children:O.series}),r.jsxs("span",{className:nn.tooltipValue,children:[yf(O.value),h]})]},O.series))]})]})});ib.displayName="LineChart";const lb="_root_3tq2n_5",cb="_chartWrap_3tq2n_14",db="_svg_3tq2n_18",ub="_centerText_3tq2n_23",pb="_statLegend_3tq2n_31",fb="_statItem_3tq2n_37",hb="_statBar_3tq2n_44",mb="_statText_3tq2n_50",gb="_statValue_3tq2n_56",vb="_statLabel_3tq2n_65",xb="_listLegend_3tq2n_72",yb="_legendItem_3tq2n_79",wb="_legendDot_3tq2n_85",bb="_legendLabel_3tq2n_92",_b="_legendValue_3tq2n_99",kb="_tooltip_3tq2n_107",Cb="_tooltipLabel_3tq2n_118",jb="_tooltipValue_3tq2n_124",Nt={root:lb,chartWrap:cb,svg:db,centerText:ub,statLegend:pb,statItem:fb,statBar:hb,statText:mb,statValue:gb,statLabel:vb,listLegend:xb,legendItem:yb,legendDot:wb,legendLabel:bb,legendValue:_b,tooltip:kb,tooltipLabel:Cb,tooltipValue:jb},wf=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],Sb=v.forwardRef(({segments:n,innerRadius:a=60,size:s=200,showLegend:l=!0,legendVariant:c="list",unit:u="%",centerLabel:f,className:h,...g},y)=>{const[w,C]=v.useState({visible:!1,x:0,y:0,label:"",value:""}),_=n.map((E,B)=>E.color??wf[B%wf.length]),N=n.reduce((E,B)=>E+B.value,0),k=s/2,b=s/2,j=s*.15,M=(s-j)/2-2,L=2*Math.PI*M;let I=-L/4;const D=n.map((E,B)=>{const A=(N>0?E.value/N:0)*L,U=`${A} ${L-A}`,G=-I;return I+=A,{dashArray:U,dashOffset:G,color:_[B],...E}});return r.jsxs("div",{ref:y,className:K(Nt.root,h),...g,children:[r.jsx("div",{className:Nt.chartWrap,children:r.jsxs("svg",{width:s,height:s,viewBox:`0 0 ${s} ${s}`,className:Nt.svg,children:[r.jsx("circle",{cx:k,cy:b,r:M,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:j}),D.map((E,B)=>r.jsx("circle",{cx:k,cy:b,r:M,fill:"none",stroke:E.color,strokeWidth:j,strokeDasharray:E.dashArray,strokeDashoffset:E.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:R=>{const A=N>0?Math.round(E.value/N*100):0;C({visible:!0,x:R.clientX+12,y:R.clientY-8,label:E.label,value:`${A}${u}`})},onMouseLeave:()=>C(R=>({...R,visible:!1}))},B)),f&&a>0&&r.jsx("text",{x:k,y:b+6,textAnchor:"middle",className:Nt.centerText,children:f})]})}),l&&c==="stat"&&r.jsx("div",{className:Nt.statLegend,children:n.map((E,B)=>{const R=N>0?Math.round(E.value/N*100):0;return r.jsxs("div",{className:Nt.statItem,children:[r.jsx("span",{className:Nt.statBar,style:{background:_[B]}}),r.jsxs("div",{className:Nt.statText,children:[r.jsxs("span",{className:Nt.statValue,children:[R,u]}),r.jsx("span",{className:Nt.statLabel,children:E.label})]})]},E.label)})}),l&&c==="list"&&r.jsx("div",{className:Nt.listLegend,children:n.map((E,B)=>{const R=N>0?Math.round(E.value/N*100):0;return r.jsxs("div",{className:Nt.legendItem,children:[r.jsx("span",{className:Nt.legendDot,style:{background:_[B]}}),r.jsx("span",{className:Nt.legendLabel,children:E.label}),r.jsxs("span",{className:Nt.legendValue,children:[R,u]})]},E.label)})}),w.visible&&r.jsxs("div",{className:Nt.tooltip,style:{left:w.x,top:w.y},children:[r.jsx("div",{className:Nt.tooltipLabel,children:w.label}),r.jsx("div",{className:Nt.tooltipValue,children:w.value})]})]})});Sb.displayName="DonutChart";const Nb="_root_bqpf6_5",$b="_svgWrap_bqpf6_10",Lb="_svg_bqpf6_10",Mb="_axisLabel_bqpf6_19",Eb="_tooltip_bqpf6_25",Ho={root:Nb,svgWrap:$b,svg:Lb,axisLabel:Mb,tooltip:Eb};function Rb(n){return n<.35?"var(--Alloy-green-100)":n<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const Ib=v.forwardRef(({cells:n,rows:a,cols:s,colorScale:l=Rb,cellRadius:c=4,cellGap:u=4,showTooltip:f=!0,className:h,...g},y)=>{const[w,C]=v.useState({visible:!1,x:0,y:0,content:""}),_=v.useRef(null),[N,k]=v.useState(540);v.useEffect(()=>{const B=_.current;if(!B)return;const R=new ResizeObserver(U=>{var X;const G=(X=U[0])==null?void 0:X.contentRect.width;G>0&&k(Math.floor(G))});R.observe(B);const A=Math.floor(B.getBoundingClientRect().width);return A>0&&k(A),()=>R.disconnect()},[]);const b=32,j=16,M=N,L=M-b-u,I=Math.max(4,(L-(s.length-1)*u)/s.length),D=a.length*(j+u)+u+24,E=new Map;return n.forEach(B=>E.set(`${B.row}__${B.col}`,B)),r.jsxs("div",{ref:y,className:K(Ho.root,h),...g,children:[r.jsx("div",{ref:_,className:Ho.svgWrap,children:r.jsxs("svg",{width:M,height:D,viewBox:`0 0 ${M} ${D}`,className:Ho.svg,onMouseLeave:()=>C(B=>({...B,visible:!1})),children:[s.map((B,R)=>{const A=b+u+R*(I+u)+I/2;return r.jsx("text",{x:A,y:12,className:Ho.axisLabel,textAnchor:"middle",children:B},B)}),a.map((B,R)=>{const A=24+R*(j+u);return r.jsxs("g",{children:[r.jsx("text",{x:b-4,y:A+j/2+4,className:Ho.axisLabel,textAnchor:"end",children:B}),s.map((U,G)=>{const X=E.get(`${B}__${U}`),q=(X==null?void 0:X.value)??0,ee=l(q),oe=b+u+G*(I+u);return r.jsx("rect",{x:oe,y:A,width:I,height:j,rx:c,fill:ee,style:{cursor:"pointer"},onMouseEnter:ce=>{if(!f)return;const ie=(X==null?void 0:X.label)??`${B} / ${U}: ${Math.round(q*100)}%`;C({visible:!0,x:ce.clientX+12,y:ce.clientY-8,content:ie})},onMouseLeave:()=>C(ce=>({...ce,visible:!1}))},U)})]},B)})]})}),w.visible&&r.jsx("div",{className:Ho.tooltip,style:{left:w.x,top:w.y},children:w.content})]})});Ib.displayName="HeatMap";const Tb="_root_18572_6",Ab="_gridWrap_18572_14",zb="_grid_18572_14",Db="_cell_18572_27",Pb="_legend_18572_33",Bb="_legendSquare_18572_43",Ob="_tooltip_18572_49",Er={root:Tb,gridWrap:Ab,grid:zb,cell:Db,legend:Pb,legendSquare:Bb,tooltip:Ob},Fb=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function Hb(n,a){if(n<=0)return 0;const s=n/Math.max(1,a);return s<=.25?1:s<=.5?2:s<=.75?3:4}const Wb=v.forwardRef(({days:n,levelColors:a=Fb,cellSize:s=14,cellGap:l=3,cellRadius:c=2,fillWidth:u=!1,showLegend:f=!0,maxCount:h,formatTooltip:g,ariaLabel:y,className:w,...C},_)=>{const[N,k]=v.useState({visible:!1,x:0,y:0,content:""}),b=h??Math.max(1,...n.map(I=>I.count)),j=[];for(let I=0;I<n.length;I+=7)j.push(n.slice(I,I+7));const M=u?{gridTemplateRows:`repeat(7, ${s}px)`,gridTemplateColumns:`repeat(${j.length}, minmax(0, 1fr))`,gap:`${l}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${s}px)`,gridAutoColumns:`${s}px`,gap:`${l}px`},L=u?"100%":s;return r.jsxs("div",{ref:_,className:K(Er.root,w),...C,children:[r.jsx("div",{className:Er.gridWrap,children:r.jsx("div",{role:"img","aria-label":y??`Activity heatmap with max ${b} on the busiest day`,className:Er.grid,style:M,onMouseLeave:()=>k(I=>({...I,visible:!1})),children:j.map((I,D)=>Array.from({length:7},(E,B)=>{const R=I[B];if(!R)return r.jsx("span",{className:Er.cell,style:{width:s,height:s,borderRadius:c,background:a[0]}},`${D}-${B}`);const A=Hb(R.count,b),U=g?g(R,A):`${R.label??R.date}: ${R.count} activation${R.count===1?"":"s"}`;return r.jsx("span",{className:Er.cell,style:{width:L,height:s,borderRadius:c,background:a[A]},onMouseMove:G=>k({visible:!0,x:G.clientX,y:G.clientY,content:U}),onMouseLeave:()=>k(G=>({...G,visible:!1}))},`${D}-${B}`)}))})}),f&&r.jsxs("div",{className:Er.legend,children:[r.jsx("span",{children:"Less"}),[0,1,2,3,4].map(I=>r.jsx("span",{className:Er.legendSquare,style:{background:a[I],borderRadius:c}},I)),r.jsx("span",{children:"More"})]}),N.visible&&r.jsx("div",{className:Er.tooltip,style:{left:N.x,top:N.y},children:N.content})]})});Wb.displayName="ActivityHeatMap";const Vb="_root_14edh_5",Ub="_track_14edh_17",qb="_segment_14edh_28",Gb="_legend_14edh_49",Yb="_legendRow_14edh_58",Zb="_legendDot_14edh_68",Kb="_legendLabel_14edh_74",Qb="_legendValue_14edh_78",Xb="_tooltip_14edh_84",Jb="_tooltipLabel_14edh_100",e_="_tooltipValueRow_14edh_105",t_="_tooltipDot_14edh_114",mn={root:Vb,track:Ub,segment:qb,legend:Gb,legendRow:Yb,legendDot:Zb,legendLabel:Kb,legendValue:Qb,tooltip:Xb,tooltipLabel:Jb,tooltipValueRow:e_,tooltipDot:t_},n_=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],Wo={r:140,g:79,b:226},ud={r:68,g:108,b:255};function bf(n){const a=Math.max(0,Math.min(100,n))/100,s=Math.round(Wo.r+(ud.r-Wo.r)*a),l=Math.round(Wo.g+(ud.g-Wo.g)*a),c=Math.round(Wo.b+(ud.b-Wo.b)*a);return`rgb(${s}, ${l}, ${c})`}const r_=v.forwardRef(({segments:n,colors:a=n_,aiGradient:s=!1,height:l,showLegend:c=!1,flat:u=!1,ariaLabel:f,className:h,...g},y)=>{const[w,C]=v.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),_=n.reduce((j,M)=>j+Math.max(0,M.value),0);let N=0;const k=n.map((j,M)=>{const L=Math.max(0,j.value),I=_>0?L/_*100:0,D=_>0?N/_*100:0;N+=L;const E=_>0?N/_*100:0,B=j.color??a[M%a.length],R=u?!0:j.emphasized??M===0;return{...j,pct:I,startPct:D,endPct:E,color:B,emphasized:R}}),b=l!==void 0?{height:typeof l=="number"?`${l}px`:l}:void 0;return r.jsxs("div",{ref:y,className:K(mn.root,h),...g,children:[r.jsx("div",{role:"img","aria-label":f??`Ratio bar: ${n.map(j=>`${j.label} ${j.value}`).join(", ")}`,className:mn.track,style:b,onMouseLeave:()=>C(j=>({...j,visible:!1})),children:k.map(j=>{const M=s?`linear-gradient(to right, ${bf(j.startPct)}, ${bf(j.endPct)})`:j.color;return r.jsx("span",{className:mn.segment,"data-emphasized":j.emphasized||void 0,"data-ai":s||void 0,style:{width:`${j.pct}%`,background:M,"--ratio-hover-bg":j.color},onMouseMove:L=>C({visible:!0,x:L.clientX,y:L.clientY,label:j.label,value:j.value,color:j.color})},j.label)})}),c&&r.jsx("ul",{className:mn.legend,children:k.map(j=>r.jsxs("li",{className:mn.legendRow,children:[r.jsx("span",{className:mn.legendDot,style:{background:j.color}}),r.jsx("span",{className:mn.legendLabel,children:j.label}),r.jsx("span",{className:mn.legendValue,children:j.value.toLocaleString("en-US")})]},j.label))}),w.visible&&r.jsxs("div",{className:mn.tooltip,style:{left:w.x,top:w.y},children:[r.jsx("span",{className:mn.tooltipLabel,children:w.label}),r.jsxs("span",{className:mn.tooltipValueRow,children:[r.jsx("span",{className:mn.tooltipDot,style:{background:w.color}}),w.value.toLocaleString("en-US")]})]})]})});r_.displayName="RatioBar";const o_="_track_1wmly_6",a_="_fill_1wmly_12",_f={track:o_,fill:a_},s_=v.forwardRef(({value:n,max:a=100,fill:s="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:l="var(--color-bg-tertiary)",gapColor:c="var(--color-bg-primary)",stripeWidth:u=2,stripeGap:f=1,height:h=12,ariaLabel:g,className:y,style:w,...C},_)=>{const N=u+f,k=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${u}px,
      ${c} ${u}px,
      ${c} ${N}px
    )`,b=Math.max(0,Math.min(a,n)),j=a>0?b/a*100:0;return r.jsx("div",{ref:_,role:"progressbar","aria-label":g??`Progress: ${Math.round(j)}%`,"aria-valuemin":0,"aria-valuemax":a,"aria-valuenow":b,className:K(_f.track,y),style:{height:h,background:`${k}, ${l}`,...w},...C,children:r.jsx("div",{className:_f.fill,style:{width:`${j}%`,background:`${k}, ${s}`}})})});s_.displayName="StripedBar";const i_=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],l_=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function kf(n,a="to right"){const s=n.map(({color:l,position:c})=>`${l} ${c}`).join(", ");return`linear-gradient(${a}, ${s})`}kf(i_),kf(l_);var nt="-ms-",Ja="-moz-",Fe="-webkit-",g0="comm",al="rule",cu="decl",c_="@import",d_="@namespace",v0="@keyframes",u_="@layer",x0=Math.abs,du=String.fromCharCode,Md=Object.assign;function p_(n,a){return _t(n,0)^45?(((a<<2^_t(n,0))<<2^_t(n,1))<<2^_t(n,2))<<2^_t(n,3):0}function y0(n){return n.trim()}function or(n,a){return(n=a.exec(n))?n[0]:n}function Le(n,a,s){return n.replace(a,s)}function Ai(n,a,s){return n.indexOf(a,s)}function _t(n,a){return n.charCodeAt(a)|0}function po(n,a,s){return n.slice(a,s)}function Nn(n){return n.length}function w0(n){return n.length}function Za(n,a){return a.push(n),n}function f_(n,a){return n.map(a).join("")}function Cf(n,a){return n.filter(function(s){return!or(s,a)})}var sl=1,Jo=1,b0=0,vn=0,gt=0,la="";function il(n,a,s,l,c,u,f,h){return{value:n,root:a,parent:s,type:l,props:c,children:u,line:sl,column:Jo,length:f,return:"",siblings:h}}function Tr(n,a){return Md(il("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},a)}function Vo(n){for(;n.root;)n=Tr(n.root,{children:[n]});Za(n,n.siblings)}function h_(){return gt}function m_(){return gt=vn>0?_t(la,--vn):0,Jo--,gt===10&&(Jo=1,sl--),gt}function Ln(){return gt=vn<b0?_t(la,vn++):0,Jo++,gt===10&&(Jo=1,sl++),gt}function Dr(){return _t(la,vn)}function zi(){return vn}function ll(n,a){return po(la,n,a)}function ns(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function g_(n){return sl=Jo=1,b0=Nn(la=n),vn=0,[]}function v_(n){return la="",n}function pd(n){return y0(ll(vn-1,Ed(n===91?n+2:n===40?n+1:n)))}function x_(n){for(;(gt=Dr())&&gt<33;)Ln();return ns(n)>2||ns(gt)>3?"":" "}function y_(n,a){for(;--a&&Ln()&&!(gt<48||gt>102||gt>57&&gt<65||gt>70&&gt<97););return ll(n,zi()+(a<6&&Dr()==32&&Ln()==32))}function Ed(n){for(;Ln();)switch(gt){case n:return vn;case 34:case 39:n!==34&&n!==39&&Ed(gt);break;case 40:n===41&&Ed(n);break;case 92:Ln();break}return vn}function w_(n,a){for(;Ln()&&n+gt!==57;)if(n+gt===84&&Dr()===47)break;return"/*"+ll(a,vn-1)+"*"+du(n===47?n:Ln())}function b_(n){for(;!ns(Dr());)Ln();return ll(n,vn)}function __(n){return v_(Di("",null,null,null,[""],n=g_(n),0,[0],n))}function Di(n,a,s,l,c,u,f,h,g){for(var y=0,w=0,C=f,_=0,N=0,k=0,b=1,j=1,M=1,L=0,I="",D=c,E=u,B=l,R=I;j;)switch(k=L,L=Ln()){case 40:if(k!=108&&_t(R,C-1)==58){Ai(R+=Le(pd(L),"&","&\f"),"&\f",x0(y?h[y-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:R+=pd(L);break;case 9:case 10:case 13:case 32:R+=x_(k);break;case 92:R+=y_(zi()-1,7);continue;case 47:switch(Dr()){case 42:case 47:Za(k_(w_(Ln(),zi()),a,s,g),g),(ns(k||1)==5||ns(Dr()||1)==5)&&Nn(R)&&po(R,-1,void 0)!==" "&&(R+=" ");break;default:R+="/"}break;case 123*b:h[y++]=Nn(R)*M;case 125*b:case 59:case 0:switch(L){case 0:case 125:j=0;case 59+w:M==-1&&(R=Le(R,/\f/g,"")),N>0&&(Nn(R)-C||b===0&&k===47)&&Za(N>32?Sf(R+";",l,s,C-1,g):Sf(Le(R," ","")+";",l,s,C-2,g),g);break;case 59:R+=";";default:if(Za(B=jf(R,a,s,y,w,c,h,I,D=[],E=[],C,u),u),L===123)if(w===0)Di(R,a,B,B,D,u,C,h,E);else{switch(_){case 99:if(_t(R,3)===110)break;case 108:if(_t(R,2)===97)break;default:w=0;case 100:case 109:case 115:}w?Di(n,B,B,l&&Za(jf(n,B,B,0,0,c,h,I,c,D=[],C,E),E),c,E,C,h,l?D:E):Di(R,B,B,B,[""],E,0,h,E)}}y=w=N=0,b=M=1,I=R="",C=f;break;case 58:C=1+Nn(R),N=k;default:if(b<1){if(L==123)--b;else if(L==125&&b++==0&&m_()==125)continue}switch(R+=du(L),L*b){case 38:M=w>0?1:(R+="\f",-1);break;case 44:h[y++]=(Nn(R)-1)*M,M=1;break;case 64:Dr()===45&&(R+=pd(Ln())),_=Dr(),w=C=Nn(I=R+=b_(zi())),L++;break;case 45:k===45&&Nn(R)==2&&(b=0)}}return u}function jf(n,a,s,l,c,u,f,h,g,y,w,C){for(var _=c-1,N=c===0?u:[""],k=w0(N),b=0,j=0,M=0;b<l;++b)for(var L=0,I=po(n,_+1,_=x0(j=f[b])),D=n;L<k;++L)(D=y0(j>0?N[L]+" "+I:Le(I,/&\f/g,N[L])))&&(g[M++]=D);return il(n,a,s,c===0?al:h,g,y,w,C)}function k_(n,a,s,l){return il(n,a,s,g0,du(h_()),po(n,2,-2),0,l)}function Sf(n,a,s,l,c){return il(n,a,s,cu,po(n,0,l),po(n,l+1,-1),l,c)}function _0(n,a,s){switch(p_(n,a)){case 5103:return Fe+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Fe+n+n;case 4855:return Fe+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return Ja+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Fe+n+Ja+n+nt+n+n;case 5936:switch(_t(n,a+11)){case 114:return Fe+n+nt+Le(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Fe+n+nt+Le(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Fe+n+nt+Le(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Fe+n+nt+n+n;case 6165:return Fe+n+nt+"flex-"+n+n;case 5187:return Fe+n+Le(n,/(\w+).+(:[^]+)/,Fe+"box-$1$2"+nt+"flex-$1$2")+n;case 5443:return Fe+n+nt+"flex-item-"+Le(n,/flex-|-self/g,"")+(or(n,/flex-|baseline/)?"":nt+"grid-row-"+Le(n,/flex-|-self/g,""))+n;case 4675:return Fe+n+nt+"flex-line-pack"+Le(n,/align-content|flex-|-self/g,"")+n;case 5548:return Fe+n+nt+Le(n,"shrink","negative")+n;case 5292:return Fe+n+nt+Le(n,"basis","preferred-size")+n;case 6060:return Fe+"box-"+Le(n,"-grow","")+Fe+n+nt+Le(n,"grow","positive")+n;case 4554:return Fe+Le(n,/([^-])(transform)/g,"$1"+Fe+"$2")+n;case 6187:return Le(Le(Le(n,/(zoom-|grab)/,Fe+"$1"),/(image-set)/,Fe+"$1"),n,"")+n;case 5495:case 3959:return Le(n,/(image-set\([^]*)/,Fe+"$1$`$1");case 4968:return Le(Le(n,/(.+:)(flex-)?(.*)/,Fe+"box-pack:$3"+nt+"flex-pack:$3"),/space-between/,"justify")+Fe+n+n;case 4200:if(!or(n,/flex-|baseline/))return nt+"grid-column-align"+po(n,a)+n;break;case 2592:case 3360:return nt+Le(n,"template-","")+n;case 4384:case 3616:return s&&s.some(function(l,c){return a=c,or(l.props,/grid-\w+-end/)})?~Ai(n+(s=s[a].value),"span",0)?n:nt+Le(n,"-start","")+n+nt+"grid-row-span:"+(~Ai(s,"span",0)?or(s,/\d+/):+or(s,/\d+/)-+or(n,/\d+/))+";":nt+Le(n,"-start","")+n;case 4896:case 4128:return s&&s.some(function(l){return or(l.props,/grid-\w+-start/)})?n:nt+Le(Le(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Le(n,/(.+)-inline(.+)/,Fe+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Nn(n)-1-a>6)switch(_t(n,a+1)){case 109:if(_t(n,a+4)!==45)break;case 102:return Le(n,/(.+:)(.+)-([^]+)/,"$1"+Fe+"$2-$3$1"+Ja+(_t(n,a+3)==108?"$3":"$2-$3"))+n;case 115:return~Ai(n,"stretch",0)?_0(Le(n,"stretch","fill-available"),a,s)+n:n}break;case 5152:case 5920:return Le(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,c,u,f,h,g,y){return nt+c+":"+u+y+(f?nt+c+"-span:"+(h?g:+g-+u)+y:"")+n});case 4949:if(_t(n,a+6)===121)return Le(n,":",":"+Fe)+n;break;case 6444:switch(_t(n,_t(n,14)===45?18:11)){case 120:return Le(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Fe+(_t(n,14)===45?"inline-":"")+"box$3$1"+Fe+"$2$3$1"+nt+"$2box$3")+n;case 100:return Le(n,":",":"+nt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Le(n,"scroll-","scroll-snap-")+n}return n}function Hi(n,a){for(var s="",l=0;l<n.length;l++)s+=a(n[l],l,n,a)||"";return s}function C_(n,a,s,l){switch(n.type){case u_:if(n.children.length)break;case c_:case d_:case cu:return n.return=n.return||n.value;case g0:return"";case v0:return n.return=n.value+"{"+Hi(n.children,l)+"}";case al:if(!Nn(n.value=n.props.join(",")))return""}return Nn(s=Hi(n.children,l))?n.return=n.value+"{"+s+"}":""}function j_(n){var a=w0(n);return function(s,l,c,u){for(var f="",h=0;h<a;h++)f+=n[h](s,l,c,u)||"";return f}}function S_(n){return function(a){a.root||(a=a.return)&&n(a)}}function N_(n,a,s,l){if(n.length>-1&&!n.return)switch(n.type){case cu:n.return=_0(n.value,n.length,s);return;case v0:return Hi([Tr(n,{value:Le(n.value,"@","@"+Fe)})],l);case al:if(n.length)return f_(s=n.props,function(c){switch(or(c,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vo(Tr(n,{props:[Le(c,/:(read-\w+)/,":"+Ja+"$1")]})),Vo(Tr(n,{props:[c]})),Md(n,{props:Cf(s,l)});break;case"::placeholder":Vo(Tr(n,{props:[Le(c,/:(plac\w+)/,":"+Fe+"input-$1")]})),Vo(Tr(n,{props:[Le(c,/:(plac\w+)/,":"+Ja+"$1")]})),Vo(Tr(n,{props:[Le(c,/:(plac\w+)/,nt+"input-$1")]})),Vo(Tr(n,{props:[c]})),Md(n,{props:Cf(s,l)});break}return""})}}var Ko={},fd,hd;const ea=typeof process<"u"&&Ko!==void 0&&(Ko.REACT_APP_SC_ATTR||Ko.SC_ATTR)||"data-styled",k0="active",C0="data-styled-version",cl="6.4.2",uu=`/*!sc*/
`,es=typeof window<"u"&&typeof document<"u";function Nf(n){if(typeof process<"u"&&Ko!==void 0){const a=Ko[n];if(a!==void 0&&a!=="")return a!=="false"}}const $_=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(hd=(fd=Nf("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&fd!==void 0?fd:Nf("SC_DISABLE_SPEEDY"))!==null&&hd!==void 0?hd:typeof process<"u"&&Ko!==void 0&&!1),j0="sc-keyframes-";function us(n,...a){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${n} for more information.${a.length>0?` Args: ${a.join(", ")}`:""}`)}let Pi=new Map,Wi=new Map,Bi=1;const Ka=n=>{if(Pi.has(n))return Pi.get(n);for(;Wi.has(Bi);)Bi++;const a=Bi++;return Pi.set(n,a),Wi.set(a,n),a},L_=n=>Wi.get(n),M_=(n,a)=>{Bi=a+1,Pi.set(n,a),Wi.set(a,n)},pu=Object.freeze([]),ta=Object.freeze({});function E_(n,a,s=ta){return n.theme!==s.theme&&n.theme||a||s.theme}const R_=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,I_=/(^-|-$)/g;function S0(n){return n.replace(R_,"-").replace(I_,"")}const T_=/(a)(d)/gi,$f=n=>String.fromCharCode(n+(n>25?39:97));function fu(n){let a,s="";for(a=Math.abs(n);a>52;a=a/52|0)s=$f(a%52)+s;return($f(a%52)+s).replace(T_,"$1-$2")}const Rd=5381,co=(n,a)=>{let s=a.length;for(;s;)n=33*n^a.charCodeAt(--s);return n},N0=n=>co(Rd,n);function $0(n){return fu(N0(n)>>>0)}function A_(n){return n.displayName||n.name||"Component"}function Id(n){return typeof n=="string"&&!0}function z_(n){return Id(n)?`styled.${n}`:`Styled(${A_(n)})`}const L0=Symbol.for("react.memo"),D_=Symbol.for("react.forward_ref"),P_={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},B_={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},M0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},O_={[D_]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[L0]:M0};function Lf(n){return("type"in(a=n)&&a.type.$$typeof)===L0?M0:"$$typeof"in n?O_[n.$$typeof]:P_;var a}const F_=Object.defineProperty,H_=Object.getOwnPropertyNames,W_=Object.getOwnPropertySymbols,V_=Object.getOwnPropertyDescriptor,U_=Object.getPrototypeOf,q_=Object.prototype;function E0(n,a,s){if(typeof a!="string"){const l=U_(a);l&&l!==q_&&E0(n,l,s);const c=H_(a).concat(W_(a)),u=Lf(n),f=Lf(a);for(let h=0;h<c.length;++h){const g=c[h];if(!(g in B_||s&&s[g]||f&&g in f||u&&g in u)){const y=V_(a,g);try{F_(n,g,y)}catch{}}}}return n}function dl(n){return typeof n=="function"}const G_=Symbol.for("react.forward_ref");function R0(n){return n!=null&&(typeof n=="object"||typeof n=="function")&&n.$$typeof===G_&&"styledComponentId"in n}function Qa(n,a){return n&&a?n+" "+a:n||a||""}function Td(n,a){return n.join("")}function rs(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Ad(n,a,s=!1){if(!s&&!rs(n)&&!Array.isArray(n))return a;if(Array.isArray(a))for(let l=0;l<a.length;l++)n[l]=Ad(n[l],a[l]);else if(rs(a))for(const l in a)n[l]=Ad(n[l],a[l]);return n}function hu(n,a){Object.defineProperty(n,"toString",{value:a})}const Y_=class{constructor(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n,this._cGroup=0,this._cIndex=0}indexOfGroup(n){if(n===this._cGroup)return this._cIndex;let a=this._cIndex;if(n>this._cGroup)for(let s=this._cGroup;s<n;s++)a+=this.groupSizes[s];else for(let s=this._cGroup-1;s>=n;s--)a-=this.groupSizes[s];return this._cGroup=n,this._cIndex=a,a}insertRules(n,a){if(n>=this.groupSizes.length){const c=this.groupSizes,u=c.length;let f=u;for(;n>=f;)if(f<<=1,f<0)throw us(16,`${n}`);this.groupSizes=new Uint32Array(f),this.groupSizes.set(c),this.length=f;for(let h=u;h<f;h++)this.groupSizes[h]=0}let s=this.indexOfGroup(n+1),l=0;for(let c=0,u=a.length;c<u;c++)this.tag.insertRule(s,a[c])&&(this.groupSizes[n]++,s++,l++);l>0&&this._cGroup>n&&(this._cIndex+=l)}clearGroup(n){if(n<this.length){const a=this.groupSizes[n],s=this.indexOfGroup(n),l=s+a;this.groupSizes[n]=0;for(let c=s;c<l;c++)this.tag.deleteRule(s);a>0&&this._cGroup>n&&(this._cIndex-=a)}}getGroup(n){let a="";if(n>=this.length||this.groupSizes[n]===0)return a;const s=this.groupSizes[n],l=this.indexOfGroup(n),c=l+s;for(let u=l;u<c;u++)a+=this.tag.getRule(u)+uu;return a}},Z_=`style[${ea}][${C0}="${cl}"]`,K_=new RegExp(`^${ea}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Mf=n=>typeof ShadowRoot<"u"&&n instanceof ShadowRoot||"host"in n&&n.nodeType===11,zd=n=>{if(!n)return document;if(Mf(n))return n;if("getRootNode"in n){const a=n.getRootNode();if(Mf(a))return a}return document},Q_=(n,a,s)=>{const l=s.split(",");let c;for(let u=0,f=l.length;u<f;u++)(c=l[u])&&n.registerName(a,c)},X_=(n,a)=>{var s;const l=((s=a.textContent)!==null&&s!==void 0?s:"").split(uu),c=[];for(let u=0,f=l.length;u<f;u++){const h=l[u].trim();if(!h)continue;const g=h.match(K_);if(g){const y=0|parseInt(g[1],10),w=g[2];y!==0&&(M_(w,y),Q_(n,w,g[3]),n.getTag().insertRules(y,c)),c.length=0}else c.push(h)}},md=n=>{const a=zd(n.options.target).querySelectorAll(Z_);for(let s=0,l=a.length;s<l;s++){const c=a[s];c&&c.getAttribute(ea)!==k0&&(X_(n,c),c.parentNode&&c.parentNode.removeChild(c))}};let Ga=!1;function J_(){if(Ga!==!1)return Ga;if(typeof document<"u"){const n=document.head.querySelector('meta[property="csp-nonce"]');if(n)return Ga=n.nonce||n.getAttribute("content")||void 0;const a=document.head.querySelector('meta[name="sc-nonce"]');if(a)return Ga=a.getAttribute("content")||void 0}return Ga=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const I0=(n,a)=>{const s=document.head,l=n||s,c=document.createElement("style"),u=(g=>{const y=Array.from(g.querySelectorAll(`style[${ea}]`));return y[y.length-1]})(l),f=u!==void 0?u.nextSibling:null;c.setAttribute(ea,k0),c.setAttribute(C0,cl);const h=a||J_();return h&&c.setAttribute("nonce",h),l.insertBefore(c,f),c},ek=class{constructor(n,a){this.element=I0(n,a),this.element.appendChild(document.createTextNode("")),this.sheet=(s=>{var l;if(s.sheet)return s.sheet;const c=(l=s.getRootNode().styleSheets)!==null&&l!==void 0?l:document.styleSheets;for(let u=0,f=c.length;u<f;u++){const h=c[u];if(h.ownerNode===s)return h}throw us(17)})(this.element),this.length=0}insertRule(n,a){try{return this.sheet.insertRule(a,n),this.length++,!0}catch{return!1}}deleteRule(n){this.sheet.deleteRule(n),this.length--}getRule(n){const a=this.sheet.cssRules[n];return a&&a.cssText?a.cssText:""}},tk=class{constructor(n,a){this.element=I0(n,a),this.nodes=this.element.childNodes,this.length=0}insertRule(n,a){if(n<=this.length&&n>=0){const s=document.createTextNode(a);return this.element.insertBefore(s,this.nodes[n]||null),this.length++,!0}return!1}deleteRule(n){this.element.removeChild(this.nodes[n]),this.length--}getRule(n){return n<this.length?this.nodes[n].textContent:""}};let Ef=es;const nk={isServer:!es,useCSSOMInjection:!$_};class ul{static registerId(a){return Ka(a)}constructor(a=ta,s={},l){this.options=Object.assign(Object.assign({},nk),a),this.gs=s,this.keyframeIds=new Set,this.names=new Map(l),this.server=!!a.isServer,!this.server&&es&&Ef&&(Ef=!1,md(this)),hu(this,()=>(c=>{const u=c.getTag(),{length:f}=u;let h="";for(let g=0;g<f;g++){const y=L_(g);if(y===void 0)continue;const w=c.names.get(y);if(w===void 0||!w.size)continue;const C=u.getGroup(g);if(C.length===0)continue;const _=ea+".g"+g+'[id="'+y+'"]';let N="";for(const k of w)k.length>0&&(N+=k+",");h+=C+_+'{content:"'+N+'"}'+uu}return h})(this))}rehydrate(){!this.server&&es&&md(this)}reconstructWithOptions(a,s=!0){const l=new ul(Object.assign(Object.assign({},this.options),a),this.gs,s&&this.names||void 0);return l.keyframeIds=new Set(this.keyframeIds),!this.server&&es&&a.target!==this.options.target&&zd(this.options.target)!==zd(a.target)&&md(l),l}allocateGSInstance(a){return this.gs[a]=(this.gs[a]||0)+1}getTag(){return this.tag||(this.tag=(a=(({useCSSOMInjection:s,target:l,nonce:c})=>s?new ek(l,c):new tk(l,c))(this.options),new Y_(a)));var a}hasNameForId(a,s){var l,c;return(c=(l=this.names.get(a))===null||l===void 0?void 0:l.has(s))!==null&&c!==void 0&&c}registerName(a,s){Ka(a),a.startsWith(j0)&&this.keyframeIds.add(a);const l=this.names.get(a);l?l.add(s):this.names.set(a,new Set([s]))}insertRules(a,s,l){this.registerName(a,s),this.getTag().insertRules(Ka(a),l)}clearNames(a){this.names.has(a)&&this.names.get(a).clear()}clearRules(a){this.getTag().clearGroup(Ka(a)),this.clearNames(a)}clearTag(){this.tag=void 0}}const T0=new WeakSet,rk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ok(n,a){return a==null||typeof a=="boolean"||a===""?"":typeof a!="number"||a===0||n in rk||n.startsWith("--")?String(a).trim():a+"px"}const lo=47;function Rf(n){if(n.charCodeAt(0)===45&&n.charCodeAt(1)===45)return n;let a="";for(let s=0;s<n.length;s++){const l=n.charCodeAt(s);a+=l>=65&&l<=90?"-"+String.fromCharCode(l+32):n[s]}return a.startsWith("ms-")?"-"+a:a}const A0=Symbol.for("sc-keyframes");function ak(n){return typeof n=="object"&&n!==null&&A0 in n}function z0(n){return dl(n)&&!(n.prototype&&n.prototype.isReactComponent)}const D0=n=>n==null||n===!1||n==="",sk=Symbol.for("react.client.reference");function If(n){return n.$$typeof===sk}function P0(n,a){for(const s in n){const l=n[s];n.hasOwnProperty(s)&&!D0(l)&&(Array.isArray(l)&&T0.has(l)||dl(l)?a.push(Rf(s)+":",l,";"):rs(l)?(a.push(s+" {"),P0(l,a),a.push("}")):a.push(Rf(s)+": "+ok(s,l)+";"))}}function uo(n,a,s,l,c=[]){if(D0(n))return c;const u=typeof n;if(u==="string")return c.push(n),c;if(u==="function"){if(If(n))return c;if(z0(n)&&a){const f=n(a);return uo(f,a,s,l,c)}return c.push(n),c}if(Array.isArray(n)){for(let f=0;f<n.length;f++)uo(n[f],a,s,l,c);return c}return R0(n)?(c.push(`.${n.styledComponentId}`),c):ak(n)?(s?(n.inject(s,l),c.push(n.getName(l))):c.push(n),c):If(n)?c:rs(n)?n.toString!==Object.prototype.toString?(c.push(n.toString()),c):(P0(n,c),c):(c.push(n.toString()),c)}const ik=N0(cl);class lk{constructor(a,s,l){this.rules=a,this.componentId=s,this.baseHash=co(ik,s),this.baseStyle=l,ul.registerId(s)}generateAndInjectStyles(a,s,l){let c=this.baseStyle?this.baseStyle.generateAndInjectStyles(a,s,l):"";{let u="";for(let f=0;f<this.rules.length;f++){const h=this.rules[f];if(typeof h=="string")u+=h;else if(h)if(z0(h)){const g=h(a);typeof g=="string"?u+=g:g!=null&&g!==!1&&(u+=Td(uo(g,a,s,l)))}else u+=Td(uo(h,a,s,l))}if(u){this.dynamicNameCache||(this.dynamicNameCache=new Map);const f=l.hash?l.hash+u:u;let h=this.dynamicNameCache.get(f);if(!h){if(h=fu(co(co(this.baseHash,l.hash),u)>>>0),this.dynamicNameCache.size>=200){const g=this.dynamicNameCache.keys().next().value;g!==void 0&&this.dynamicNameCache.delete(g)}this.dynamicNameCache.set(f,h)}if(!s.hasNameForId(this.componentId,h)){const g=l(u,"."+h,void 0,this.componentId);s.insertRules(this.componentId,h,g)}c=Qa(c,h)}}return c}}const ck=/&/g;function B0(n,a){let s=0;for(;--a>=0&&n.charCodeAt(a)===92;)s++;return!(1&~s)}function gd(n){const a=n.length;let s="",l=0,c=0,u=0,f=!1,h=!1;for(let g=0;g<a;g++){const y=n.charCodeAt(g);if(u!==0||f||y!==lo||n.charCodeAt(g+1)!==42)if(f)y===42&&n.charCodeAt(g+1)===lo&&(f=!1,g++);else if(y!==34&&y!==39||B0(n,g)){if(u===0)if(y===123)c++;else if(y===125){if(c--,c<0){h=!0;let w=g+1;for(;w<a;){const C=n.charCodeAt(w);if(C===59||C===10)break;w++}w<a&&n.charCodeAt(w)===59&&w++,c=0,g=w-1,l=w;continue}c===0&&(s+=n.substring(l,g+1),l=g+1)}else y===59&&c===0&&(s+=n.substring(l,g+1),l=g+1)}else u===0?u=y:u===y&&(u=0);else f=!0,g++}return h||c!==0||u!==0?(l<a&&c===0&&u===0&&(s+=n.substring(l)),s):n}function O0(n,a){const s=a+" ",l=","+s;for(let c=0;c<n.length;c++){const u=n[c];if(u.type==="rule"){u.value=(s+u.value).replaceAll(",",l);const f=u.props,h=[];for(let g=0;g<f.length;g++)h[g]=s+f[g];u.props=h}Array.isArray(u.children)&&u.type!=="@keyframes"&&O0(u.children,a)}return n}function dk({options:n=ta,plugins:a=pu}=ta){let s,l,c;const u=(_,N,k)=>k.startsWith(l)&&k.endsWith(l)&&k.replaceAll(l,"").length>0?`.${s}`:_,f=a.slice();f.push(_=>{_.type===al&&_.value.includes("&")&&(c||(c=new RegExp(`\\${l}\\b`,"g")),_.props[0]=_.props[0].replace(ck,l).replace(c,u))}),n.prefix&&f.push(N_),f.push(C_);let h=[];const g=j_(f.concat(S_(_=>h.push(_)))),y=(_,N="",k="",b="&")=>{s=b,l=N,c=void 0;const j=(function(L){const I=L.indexOf("//")!==-1,D=L.indexOf("}")!==-1;if(!I&&!D)return L;if(!I)return gd(L);const E=L.length;let B="",R=0,A=0,U=0,G=0,X=0,q=!1;for(;A<E;){const ee=L.charCodeAt(A);if(ee!==34&&ee!==39||B0(L,A))if(U===0)if(ee===lo&&A+1<E&&L.charCodeAt(A+1)===42){for(A+=2;A+1<E&&(L.charCodeAt(A)!==42||L.charCodeAt(A+1)!==lo);)A++;A+=2}else if(ee!==40)if(ee!==41)if(G>0)A++;else if(ee===42&&A+1<E&&L.charCodeAt(A+1)===lo)B+=L.substring(R,A),A+=2,R=A,q=!0;else if(ee===lo&&A+1<E&&L.charCodeAt(A+1)===lo){for(B+=L.substring(R,A);A<E&&L.charCodeAt(A)!==10;)A++;R=A,q=!0}else ee===123?X++:ee===125&&X--,A++;else G>0&&G--,A++;else G++,A++;else A++;else U===0?U=ee:U===ee&&(U=0),A++}return q?(R<E&&(B+=L.substring(R)),X===0?B:gd(B)):X===0?L:gd(L)})(_);let M=__(k||N?k+" "+N+" { "+j+" }":j);return n.namespace&&(M=O0(M,n.namespace)),h=[],Hi(M,g),h},w=n;let C=Rd;for(let _=0;_<a.length;_++)a[_].name||us(15),C=co(C,a[_].name);return w!=null&&w.namespace&&(C=co(C,w.namespace)),w!=null&&w.prefix&&(C=co(C,"p")),y.hash=C!==Rd?C.toString():"",y}const uk=new ul,Dd=dk(),F0=Pr.createContext({shouldForwardProp:void 0,styleSheet:uk,stylis:Dd,stylisPlugins:void 0});F0.Consumer;function pk(){return Pr.useContext(F0)}const H0=Pr.createContext(void 0);H0.Consumer;const Tf=Object.prototype.hasOwnProperty,vd={};function fk(n,a){const s=typeof n!="string"?"sc":S0(n);vd[s]=(vd[s]||0)+1;const l=s+"-"+$0(cl+s+vd[s]);return a?a+"-"+l:l}function hk(n,a,s){const l=R0(n),c=n,u=!Id(n),{attrs:f=pu,componentId:h=fk(a.displayName,a.parentComponentId),displayName:g=z_(n)}=a,y=a.displayName&&a.componentId?S0(a.displayName)+"-"+a.componentId:a.componentId||h,w=l&&c.attrs?c.attrs.concat(f).filter(Boolean):f;let{shouldForwardProp:C}=a;if(l&&c.shouldForwardProp){const b=c.shouldForwardProp;if(a.shouldForwardProp){const j=a.shouldForwardProp;C=(M,L)=>b(M,L)&&j(M,L)}else C=b}const _=new lk(s,y,l?c.componentStyle:void 0);function N(b,j){return(function(M,L,I){const{attrs:D,componentStyle:E,defaultProps:B,foldedComponentIds:R,styledComponentId:A,target:U}=M,G=Pr.useContext(H0),X=pk(),q=M.shouldForwardProp||X.shouldForwardProp,ee=E_(L,G,B)||ta;let oe,ce;{const O=Pr.useRef(null),H=O.current;if(H!==null&&H[1]===ee&&H[2]===X.styleSheet&&H[3]===X.stylis&&H[7]===E&&(function($,T,Q){const J=$,ae=T;let de=0;for(const pe in ae)if(Tf.call(ae,pe)&&(de++,J[pe]!==ae[pe]))return!1;return de===Q})(H[0],L,H[4]))oe=H[5],ce=H[6];else{oe=(function(T,Q,J){const ae=Object.assign(Object.assign({},Q),{className:void 0,theme:J}),de=T.length>1;for(let pe=0;pe<T.length;pe++){const xe=T[pe],Ne=dl(xe)?xe(de?Object.assign({},ae):ae):xe;for(const Ee in Ne)Ee==="className"?ae.className=Qa(ae.className,Ne[Ee]):Ee==="style"?ae.style=Object.assign(Object.assign({},ae.style),Ne[Ee]):Ee in Q&&Q[Ee]===void 0||(ae[Ee]=Ne[Ee])}return"className"in Q&&typeof Q.className=="string"&&(ae.className=Qa(ae.className,Q.className)),ae})(D,L,ee),ce=(function(T,Q,J,ae){return T.generateAndInjectStyles(Q,J,ae)})(E,oe,X.styleSheet,X.stylis);let $=0;for(const T in L)Tf.call(L,T)&&$++;O.current=[L,ee,X.styleSheet,X.stylis,$,oe,ce,E]}}const ie=oe.as||U,le=(function(O,H,$,T){const Q={};for(const J in O)O[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&O.theme===$||(J==="forwardedAs"?Q.as=O.forwardedAs:T&&!T(J,H)||(Q[J]=O[J]));return Q})(oe,ie,ee,q);let Z=Qa(R,A);return ce&&(Z+=" "+ce),oe.className&&(Z+=" "+oe.className),le[Id(ie)&&ie.includes("-")?"class":"className"]=Z,I&&(le.ref=I),v.createElement(ie,le)})(k,b,j)}N.displayName=g;let k=Pr.forwardRef(N);return k.attrs=w,k.componentStyle=_,k.displayName=g,k.shouldForwardProp=C,k.foldedComponentIds=l?Qa(c.foldedComponentIds,c.styledComponentId):"",k.styledComponentId=y,k.target=l?c.target:n,Object.defineProperty(k,"defaultProps",{get(){return this._foldedDefaultProps},set(b){this._foldedDefaultProps=l?(function(j,...M){for(const L of M)Ad(j,L,!0);return j})({},c.defaultProps,b):b}}),hu(k,()=>`.${k.styledComponentId}`),u&&E0(k,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}var mk=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Af(n,a){const s=[n[0]];for(let l=0,c=a.length;l<c;l+=1)s.push(a[l],n[l+1]);return s}const zf=n=>(T0.add(n),n);function an(n,...a){if(dl(n)||rs(n))return zf(uo(Af(pu,[n,...a])));const s=n;return a.length===0&&s.length===1&&typeof s[0]=="string"?uo(s):zf(uo(Af(s,a)))}function Pd(n,a,s=ta){if(!a)throw us(1,a);const l=(c,...u)=>n(a,s,an(c,...u));return l.attrs=c=>Pd(n,a,Object.assign(Object.assign({},s),{attrs:Array.prototype.concat(s.attrs,c).filter(Boolean)})),l.withConfig=c=>Pd(n,a,Object.assign(Object.assign({},s),c)),l}const W0=n=>Pd(hk,n),m=W0;mk.forEach(n=>{m[n]=W0(n)});var V0;class gk{constructor(a,s){this[V0]=!0,this.inject=(l,c=Dd)=>{const u=this.getName(c);if(!l.hasNameForId(this.id,u)){const f=c(this.rules,u,"@keyframes");l.insertRules(this.id,u,f)}},this.name=a,this.id=j0+a,this.rules=s,Ka(this.id),hu(this,()=>{throw us(12,String(this.name))})}getName(a=Dd){return a.hash?this.name+fu(+a.hash>>>0):this.name}}function Pe(n,...a){const s=Td(an(n,...a)),l=$0(s);return new gk(l,s)}V0=A0;const Df=[{id:1,key:"provision",title:"Provisioning your account",short:"Provision"}];function vk({current:n,wide:a=!1,footer:s,children:l}){const c=Df.find(u=>u.id===n);return r.jsxs(xk,{children:[r.jsx(yk,{$wide:a,children:r.jsxs(wk,{$wide:a,children:[!a&&r.jsxs(bk,{children:[r.jsxs(_k,{children:["Step ",c.id," of ",Df.length]}),r.jsx(kk,{children:c.title})]}),l]})}),s&&r.jsx(Ck,{children:r.jsx(jk,{$wide:a,children:s})})]})}const xk=m.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`,yk=m.main`
  flex: 1;
  min-height: 0;
  overflow-y: ${n=>n.$wide?"hidden":"auto"};
  display: flex;
  flex-direction: column;
`,wk=m.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  margin: 0 auto;
  ${n=>n.$wide?"display: flex; flex-direction: column;":"max-width: 760px; padding: var(--space-8) var(--space-6) var(--space-10);"}
`,bk=m.div`
  margin-bottom: var(--space-6);
`,_k=m.div`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  margin-bottom: var(--space-2);
`,kk=m.h1`
  font-family: var(--font-sans);
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-primary);
  margin: 0;
`,Ck=m.footer`
  flex-shrink: 0;
  border-top: 1px solid var(--color-border-opaque);
  background: var(--color-bg-primary);
`,jk=m.div`
  max-width: ${n=>n.$wide?"100%":"760px"};
  margin: 0 auto;
  padding: var(--space-4) var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
`,On=(n,a,s)=>Math.max(a,Math.min(s,n)),mu=n=>(n=On(n,0,1),n*n*(3-2*n)),ca=n=>n>=48?1:n>=32?1.2:n>=24?1.5:n>=20?1.85:2.3;function Pn(n){const a=Math.sin(n*127.1+311.7)*43758.5453;return a-Math.floor(a)}function Bd(n){const a=(n||"#96B9FF").replace("#",""),s=parseInt(a.length===3?a.split("").map(l=>l+l).join(""):a,16);return(s>>16&255)+","+(s>>8&255)+","+(s&255)}function Pf(n,a,s){let l=s.trim();const c=l.match(/var\(\s*(--[^,)]+)/);if(c&&(l=getComputedStyle(a).getPropertyValue(c[1]).trim()||l),l.startsWith("#"))return Bd(l);n.fillStyle="#000",n.fillStyle=l;const u=n.fillStyle;if(u.startsWith("#"))return Bd(u);const f=u.match(/[\d.]+/g);return f&&f.length>=3?`${+f[0]},${+f[1]},${+f[2]}`:"26,30,38"}function Sk(){const[n,a]=v.useState(()=>{try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}});return v.useEffect(()=>{var c;let s;try{s=window.matchMedia("(prefers-color-scheme: dark)")}catch{return}const l=u=>a(u.matches);return(c=s.addEventListener)==null||c.call(s,"change",l),()=>{var u;return(u=s.removeEventListener)==null?void 0:u.call(s,"change",l)}},[]),n}function Nk(n){const[a,s,l]=n.split(",").map(Number);return(.299*a+.587*s+.114*l)/255}function $k(n,a){return n==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:n==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:a,glow:!0}:n==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:a,glow:!0}}const so=["234,54,38","246,112,44","252,172,54","255,212,76"],Lk="176,58,32",Mk="198,158,52";function ar(n,a,s){const l=n.split(",").map(Number),c=a.split(",").map(Number);return l.map((u,f)=>Math.round(u+(c[f]-u)*s)).join(",")}function mo(n,a,s){const{ctx:l,w:c,h:u}=n,f=c/2,h=u/2,y=Math.min(c,u)*.39*.2*(.9+.14*Math.sin(a*1.5)),w=n.size<24,C=On(n.alert??0,0,1),_=(L,I)=>L+(I-L)*C,N=.85+.15*Math.sin(a*2.2);if(!w&&n.coreHalo){if(l.save(),s.glow&&C<1){l.globalAlpha=1-C;const L=l.createRadialGradient(f,h,0,f,h,y*3);L.addColorStop(0,"rgba("+s.core+",0.55)"),L.addColorStop(1,"rgba("+s.accent+",0)"),l.fillStyle=L,l.beginPath(),l.arc(f,h,y*3,0,6.2832),l.fill()}else if(!s.glow){const L=y*_(3.2,3),I=l.createRadialGradient(f,h,0,f,h,L);I.addColorStop(0,"rgba("+ar(s.core,so[1],C)+","+_(.34,.85*N)+")"),I.addColorStop(.5,"rgba("+ar(s.core,so[2],C)+","+_(.13,.42*N)+")"),I.addColorStop(1,"rgba("+ar(s.core,so[3],C)+",0)"),l.fillStyle=I,l.beginPath(),l.arc(f,h,L,0,6.2832),l.fill()}l.restore()}const k=s.glow?1:.95,b=Math.max(.8,y*_(1,1.5)),j=y*.1*C;l.save(),l.filter="blur("+Math.max(.4,y*_(.22,.3)).toFixed(2)+"px)";const M=l.createRadialGradient(f-j,h-j,0,f,h,b);M.addColorStop(0,"rgba("+ar(s.core,so[0],C)+","+_(k,1)+")"),M.addColorStop(.5,"rgba("+ar(s.core,so[1],C)+","+_(k,1)+")"),M.addColorStop(.82,"rgba("+ar(s.core,so[2],C)+","+_(k,.97)+")"),M.addColorStop(1,"rgba("+ar(s.core,so[3],C)+","+_(k,.72)+")"),l.fillStyle=M,l.beginPath(),l.arc(f,h,b,0,6.2832),l.fill(),l.restore()}function U0(n,a,s){const{ctx:l,w:c,h:u}=n,f=c/2,h=u/2,g=Math.min(c,u)*.39,y=n.state!=="idle",w=[[1.35,.3],[1.05,2.4]],C=a*(y?.5:.16),_=.42,N=Math.cos(_),k=Math.sin(_),b=Math.cos(C),j=Math.sin(C),M=g*.96,L=(U,G,X)=>{const q=U*b+X*j,ee=-U*j+X*b,oe=G,ce=oe*N-ee*k,le=(oe*k+ee*N+1)/2,Z=.82+.18*le;return{x:f+q*M*Z,y:h+ce*M*Z,d:le}},I=(U,G,X)=>{const q=Math.cos(U),ee=Math.sin(U)*Math.cos(G),oe=Math.sin(U)*Math.sin(G);return[q*Math.cos(X)+oe*Math.sin(X),ee,-q*Math.sin(X)+oe*Math.cos(X)]};l.save(),l.globalCompositeOperation=s.glow?"lighter":"source-over",l.lineCap="round",l.lineJoin="round";const D=n.size>=24?64:40,E=y?.9:.3,B=D,R=5.6,A=[];for(let U=0;U<w.length;U++){const G=w[U][0],X=w[U][1],q=ce=>{const ie=I(ce,G,X);return L(ie[0],ie[1],ie[2])},ee=U%2?1:-1,oe=U*2+ee*a*E;A.push({ptOf:q,head:oe,dir:ee,hp:q(oe)})}A.sort((U,G)=>U.hp.d-G.hp.d);for(const U of A){const G=Math.max(1.2,g*.05)*(.75+.35*U.hp.d),X=.66*(.45+.55*U.hp.d);l.save(),l.globalCompositeOperation="source-over",l.lineCap="butt",l.lineWidth=G;let q=U.ptOf(U.head);for(let ce=1;ce<=B;ce++){const ie=ce/B,le=1-ie,Z=X*le*le,O=U.ptOf(U.head-U.dir*ie*R);Z>.004&&(l.strokeStyle="rgba("+s.dot+","+Z+")",l.beginPath(),l.moveTo(q.x,q.y),l.lineTo(O.x,O.y),l.stroke()),q=O}l.restore();const ee=Math.max(.9,g*.062*ca(n.size)*(.65+.5*U.hp.d)),oe=.45+.55*U.hp.d;if(s.glow){const ce=l.createRadialGradient(U.hp.x,U.hp.y,0,U.hp.x,U.hp.y,ee*4.5);ce.addColorStop(0,"rgba("+s.accent+","+.3*oe+")"),ce.addColorStop(1,"rgba("+s.accent+",0)"),l.fillStyle=ce,l.beginPath(),l.arc(U.hp.x,U.hp.y,ee*4.5,0,6.2832),l.fill()}l.fillStyle="rgba("+s.dot+","+Math.min(1,oe+.1)+")",l.beginPath(),l.arc(U.hp.x,U.hp.y,ee,0,6.2832),l.fill()}mo(n,a,s),l.restore()}function Ek(n,a,s){const{ctx:l,w:c,h:u}=n,f=c/2,h=u/2,g=Math.min(c,u)*.39,y=n.state!=="idle",w=[g*.92],C=w.length,_=1,N=y?.9:.3,k=n.size>=24?56:36;l.save(),l.globalCompositeOperation=s.glow?"lighter":"source-over";for(let b=0;b<C;b++){const j=w[b],M=b%2?1:-1,L=6.2832/_,I=Math.min(5.6,L*.92);for(let D=0;D<_;D++){const E=b*2+M*a*N+D*L,B=f+Math.cos(E)*j,R=h+Math.sin(E)*j;l.save(),l.globalCompositeOperation="source-over",l.lineCap="butt",l.lineWidth=Math.max(1.2,g*.05);let A=B,U=R;for(let X=1;X<=k;X++){const q=X/k,ee=.62*(1-q)*(1-q),oe=E-M*q*I,ce=f+Math.cos(oe)*j,ie=h+Math.sin(oe)*j;ee>.004&&(l.strokeStyle="rgba("+s.dot+","+ee+")",l.beginPath(),l.moveTo(A,U),l.lineTo(ce,ie),l.stroke()),A=ce,U=ie}l.restore();const G=Math.max(.9,g*.062*ca(n.size));if(s.glow){const X=l.createRadialGradient(B,R,0,B,R,G*4.5);X.addColorStop(0,"rgba("+s.accent+",0.3)"),X.addColorStop(1,"rgba("+s.accent+",0)"),l.fillStyle=X,l.beginPath(),l.arc(B,R,G*4.5,0,6.2832),l.fill()}l.fillStyle="rgba("+s.dot+",1)",l.beginPath(),l.arc(B,R,G,0,6.2832),l.fill()}}mo(n,a,s),l.restore()}function Bf(n,a,s){const{ctx:l,w:c,h:u,dpr:f}=n,h=c/2,g=u/2,y=Math.min(c,u)*.39,w=n.state!=="idle",C=On(n.alert??0,0,1),_=y*.82,N=(O,H)=>ar(s.dot,ar(Lk,Mk,On(Math.hypot(O-h,H-g)/_,0,1)),C),k=n.size>=120,b=k?22:n.size>=32?10:n.size>=20?7:5,j=w?a*.55:a*.22,M=Math.cos(j),L=Math.sin(j),I=.42,D=Math.cos(I),E=Math.sin(I);if(l.save(),l.globalCompositeOperation=s.glow?"lighter":"source-over",k&&s.glow){const O=l.createRadialGradient(h,g,0,h,g,y*1.02);O.addColorStop(0,"rgba("+s.accent+",0.10)"),O.addColorStop(1,"rgba("+s.accent+",0)"),l.fillStyle=O,l.beginPath(),l.arc(h,g,y*1.02,0,6.2832),l.fill()}const B=[];for(let O=0;O<b;O++){const H=1-(O+.5)/b*2,$=Math.sqrt(Math.max(0,1-H*H)),T=O*2.39996,Q=Math.cos(T)*$,J=H,ae=Math.sin(T)*$,de=Q*M+ae*L,pe=-Q*L+ae*M,xe=J*D-pe*E,Ne=J*E+pe*D,Ee=(Ne+1)/2,fe=.82+.18*Ee;B.push({x:h+de*_*fe,y:g+xe*_*fe,d:Ee,k:O,vec:[de,xe,Ne]})}B.sort((O,H)=>O.d-H.d);const R=O=>{const H=(O[2]+1)/2,$=.82+.18*H;return{x:h+O[0]*_*$,y:g+O[1]*_*$,d:H}},A=(O,H,$)=>{let T=O[0]*H[0]+O[1]*H[1]+O[2]*H[2];T=On(T,-1,1);const Q=Math.acos(T);if(Q<.001)return[O[0],O[1],O[2]];const J=Math.sin(Q),ae=Math.sin((1-$)*Q)/J,de=Math.sin($*Q)/J;return[O[0]*ae+H[0]*de,O[1]*ae+H[1]*de,O[2]*ae+H[2]*de]},U={};for(const O of B)U[O.k]=O;const X=a*(w?1.4:.5),q=Math.floor(X),ee=X-q,oe=5,ce=12;l.lineCap="round",l.lineJoin="round";const ie=[1.7,9.3,21.5,34.8,48.2],le=On(Math.round(n.streamCount??(k?5:4)),0,ie.length),Z=ie.slice(0,le).map(O=>({seed:O}));for(const O of Z){const H=T=>{const Q=Math.sin(T*12.9898+O.seed)*43758.5453;return Math.floor((Q-Math.floor(Q))*b)},$=T=>{let Q=H(T);return Q===H(T-1)&&(Q=(Q+1)%b),U[Q]};for(let T=oe-1;T>=0;T--){const Q=q-T;if(Q<0)continue;const J=$(Q),ae=$(Q+1);if(!J||!ae||J===ae)continue;const de=T===0?ee:1,pe=R(A(J.vec,ae.vec,de)),xe=(J.d+pe.d)/2,Ne=T===0?1:On(1-(T-1+ee)/(oe-1),0,1),Ee=(s.glow?.6:.72)*Ne*(.4+.6*xe);if(Ee<.02)continue;const fe=l.createLinearGradient(J.x,J.y,pe.x,pe.y);fe.addColorStop(0,"rgba("+N(J.x,J.y)+",0)"),fe.addColorStop(1,"rgba("+N(pe.x,pe.y)+","+Ee+")"),l.strokeStyle=fe,l.lineWidth=(k?Math.max(1.1*f,y*.018):Math.max(1.2,y*.045))*(.7+.4*xe),l.beginPath();for(let _e=0;_e<=ce;_e++){const $e=R(A(J.vec,ae.vec,de*(_e/ce)));_e===0?l.moveTo($e.x,$e.y):l.lineTo($e.x,$e.y)}l.stroke()}}for(const O of B){const H=.5+.5*Math.sin(a*2-O.k*.9),$=(.18+.82*O.d)*(.62+.38*H),T=k?Math.max(.5,(.9+.9*O.d)*f*(.85+.15*H)):y*.058*ca(n.size)*(.6+.5*O.d);if(s.glow){const Q=T*4,J=l.createRadialGradient(O.x,O.y,0,O.x,O.y,Q);J.addColorStop(0,"rgba("+s.accent+","+.24*$+")"),J.addColorStop(1,"rgba("+s.accent+",0)"),l.fillStyle=J,l.beginPath(),l.arc(O.x,O.y,Q,0,6.2832),l.fill()}l.fillStyle="rgba("+N(O.x,O.y)+","+(.32+.68*$)+")",l.beginPath(),l.arc(O.x,O.y,Math.max(.9,T),0,6.2832),l.fill()}if(k){const O=w?1:.4;for(let H=0;H<46;H++){const $=Pn(H*5.1)<.5?-1:1,T=Pn(H*1.7)*6.2832+a*(.3+Pn(H*3.1)*.6)*$*O,Q=y*(.04+.05*Pn(H*4.7))*Math.sin(a*(.8+Pn(H*6)*1)+Pn(H*7)*6.28),J=y*(.5+Pn(H*2.3)*.5)+Q,ae=h+Math.cos(T)*J,de=g+Math.sin(T)*J,pe=.3+.7*(.5+.5*Math.sin(a*(1.4+Pn(H)*2)+Pn(H*2)*6.28)),xe=Math.max(.5,(.4+Pn(H*8)*1)*f*(.55+.6*pe));if(s.glow){const Ne=xe*6,Ee=l.createRadialGradient(ae,de,0,ae,de,Ne);Ee.addColorStop(0,"rgba("+s.accent+","+pe*.18+")"),Ee.addColorStop(1,"rgba("+s.accent+",0)"),l.fillStyle=Ee,l.beginPath(),l.arc(ae,de,Ne,0,6.2832),l.fill()}l.fillStyle="rgba("+N(ae,de)+","+pe*(s.glow?.8:.42)+")",l.beginPath(),l.arc(ae,de,xe,0,6.2832),l.fill()}}mo(n,a,s),l.restore()}function Rk(n,a,s){const{ctx:l,w:c,h:u,dpr:f}=n,h=c/2,g=u/2,y=Math.min(c,u)*.39,w=n.state!=="idle",C=n.size>=32?11:7,_=y*.12,N=y*.12,k=mu(.5+.5*Math.sin(a*(w?1:.55))),b=w?.34+.66*k:.5+.12*k,j=Math.max(1*f,y*.052),M=-a*(w?.5:.16),L=Math.cos(M),I=Math.sin(M),D=.42,E=Math.cos(D),B=Math.sin(D);l.save(),l.globalCompositeOperation=s.glow?"lighter":"source-over",l.lineCap="round";const R=y*(.52+.44*b),A=Math.max(_+j,R-N),U=[];for(let G=0;G<C;G++){const X=1-(G+.5)/C*2,q=Math.sqrt(Math.max(0,1-X*X)),ee=G*2.39996,oe=Math.cos(ee)*q,ce=X,ie=Math.sin(ee)*q,le=oe*L+ie*I,Z=-oe*I+ie*L,O=ce*E-Z*B,$=(ce*B+Z*E+1)/2,T=.82+.18*$,Q=.5+.5*Math.sin(a*1.6+G*1.3);U.push({x0:h+le*_*T,y0:g+O*_*T,x1:h+le*A*T,y1:g+O*A*T,cx2:h+le*R*T,cy2:g+O*R*T,d:$,shim:Q})}U.sort((G,X)=>G.d-X.d);for(const G of U){const X=(w?.4+.45*b:.6)*(.4+.6*G.d)*(.78+.22*G.shim),q=l.createLinearGradient(G.x0,G.y0,G.x1,G.y1);q.addColorStop(0,"rgba("+s.dot+","+X+")"),q.addColorStop(1,"rgba("+s.accent+",0)"),l.strokeStyle=q,l.lineWidth=j*(.7+.5*G.d),l.beginPath(),l.moveTo(G.x0,G.y0),l.lineTo(G.x1,G.y1),l.stroke();const ee=Math.max(.9,y*.058*ca(n.size)*(.85+.3*b)*(.6+.5*G.d));if(s.glow){const oe=l.createRadialGradient(G.cx2,G.cy2,0,G.cx2,G.cy2,ee*5);oe.addColorStop(0,"rgba("+s.accent+","+.26*X+")"),oe.addColorStop(1,"rgba("+s.accent+",0)"),l.fillStyle=oe,l.beginPath(),l.arc(G.cx2,G.cy2,ee*5,0,6.2832),l.fill()}l.fillStyle="rgba("+s.dot+","+Math.min(1,X+.1)+")",l.beginPath(),l.arc(G.cx2,G.cy2,ee,0,6.2832),l.fill()}mo(n,a,s),l.restore()}function Ik(n,a,s){const{ctx:l,w:c,h:u}=n,f=c/2,h=u/2,g=Math.min(c,u)*.39,y=n.state!=="idle",w=n.size>=32?58:n.size>=20?32:18,C=g*.78,_=y?a*.5:a*.2,N=Math.cos(_),k=Math.sin(_),b=.42,j=Math.cos(b),M=Math.sin(b),L=y?1:.4,I=(R,A)=>[Math.sin(R)*Math.cos(A),Math.cos(R),Math.sin(R)*Math.sin(A)],D=[I(1.4+.5*Math.sin(a*.5*L),a*.6*L),I(1.9+.4*Math.cos(a*.4*L),-a*.5*L+2)],E=.36;l.save(),l.globalCompositeOperation=s.glow?"lighter":"source-over";const B=[];for(let R=0;R<w;R++){const A=1-(R+.5)/w*2,U=Math.sqrt(Math.max(0,1-A*A)),G=R*2.39996,X=Math.cos(G)*U,q=A,ee=Math.sin(G)*U;let oe=0;for(const $ of D){const T=X-$[0],Q=q-$[1],J=ee-$[2];oe+=Math.exp(-(T*T+Q*Q+J*J)/(2*E*E))}oe=On(oe,0,1);const ce=X*N+ee*k,ie=-X*k+ee*N,le=q*j-ie*M,O=(q*M+ie*j+1)/2,H=.82+.18*O;B.push({x:f+ce*C*H,y:h+le*C*H,d:O,inf:oe})}B.sort((R,A)=>R.d-A.d);for(const R of B){const A=mu(R.inf),U=Math.max(.6,g*(.05+.06*A)*ca(n.size)*(.55+.5*R.d)),G=(.16+.84*R.d)*(.45+.55*A),X=Math.abs(2*R.d-1),q=Math.atan2(R.y-h,R.x-f);l.fillStyle="rgba("+s.dot+","+G+")",l.beginPath(),l.ellipse(R.x,R.y,Math.max(.35,U*X),U,q,0,6.2832),l.fill()}mo(n,a,s),l.restore()}function Tk(n,a,s){const{ctx:l,w:c,h:u}=n,f=c/2,h=u/2,g=Math.min(c,u)*.39,y=n.state!=="idle",w=n.size>=32?8:n.size>=20?6:5,C=g*.9,_=y?1:.4,N=a*(y?.3:.12),k=a*1*_,b=-a*.7*_+2.2,j=.72,M=(L,I)=>{const D=((L-I+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(D)};l.save(),l.globalCompositeOperation=s.glow?"lighter":"source-over";for(let L=0;L<w;L++){const I=L/w*6.2832+N;let D=Math.exp(-(M(I,k)**2)/(2*j*j))+Math.exp(-(M(I,b)**2)/(2*j*j));D=On(D,0,1);const E=mu(D),B=f+Math.cos(I)*C,R=h+Math.sin(I)*C,A=Math.max(.6,g*(.05+.07*E)*ca(n.size)),U=.38+.62*E;if(s.glow&&E>.25){const G=l.createRadialGradient(B,R,0,B,R,A*4);G.addColorStop(0,"rgba("+s.accent+","+.24*E+")"),G.addColorStop(1,"rgba("+s.accent+",0)"),l.fillStyle=G,l.beginPath(),l.arc(B,R,A*4,0,6.2832),l.fill()}l.fillStyle="rgba("+s.dot+","+U+")",l.beginPath(),l.arc(B,R,A,0,6.2832),l.fill()}mo(n,a,s),l.restore()}function Ak(n,a,s){mo(n,a,s)}const zk={orbit:U0,orbit2d:Ek,circle:Bf,lines:Rk,magnetic:Ik,magnetic2d:Tk,pulse:Ak,bands:Bf};function os({mark:n="orbit",size:a=16,tone:s="auto",state:l="active",motionSpeed:c=1,accent:u="#96B9FF",color:f,coreHalo:h=!0,coreGradient:g=!1,streamCount:y,className:w,"aria-label":C}){const _=v.useRef(null),N=Sk(),k=v.useRef(0),b=v.useRef(0);return b.current=g?1:0,v.useEffect(()=>{const j=_.current;if(!j)return;const M=j.getContext("2d");if(!M)return;const L=Math.min(2,window.devicePixelRatio||1),I=Math.max(2,Math.round(a*L)),D=I;j.width=I,j.height=D;const E={ctx:M,w:I,h:D,dpr:L,size:a,state:l,coreHalo:h,alert:k.current,streamCount:y},B=s==="auto"?Nk(Pf(M,j,"var(--color-bg-primary)"))<.5?"dark":"light":s,R=$k(B,Bd(u));if(f){const oe=Pf(M,j,f);R.dot=oe,R.core=oe}const A=zk[n]??U0,U=oe=>{k.current+=(b.current-k.current)*.06,Math.abs(k.current-b.current)<.001&&(k.current=b.current),E.alert=k.current,M.clearRect(0,0,I,D),A(E,l==="static"?.62:oe,R)},G=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),X=On(c,.4,3);if((G||l==="static")&&(k.current=b.current),U(1.15),G||l==="static")return;let q=0;const ee=oe=>{U(oe/1e3*X),q=requestAnimationFrame(ee)};return q=requestAnimationFrame(ee),()=>cancelAnimationFrame(q)},[n,a,s,l,c,u,f,h,g,y,N]),r.jsx("canvas",{ref:_,width:a,height:a,style:{width:a,height:a,display:"block",flexShrink:0},className:w,role:"img","aria-label":C})}m.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;m.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;m.section`
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
`;const q0={missed_clockin_james:"james_okoro_2"},Dk=n=>`https://i.pravatar.cc/80?u=${q0[n]??n}`,pl=n=>`https://i.pravatar.cc/80?u=${q0[n]??n}`;function Pk(n){return n>=90?"green":n>=80?"blue":n>=70?"orange":"slate"}function Bk({record:n}){const a=n.meta.find(c=>/^\d+%\s*match$/i.test(c)),s=a?parseInt(a,10):null,l=a?n.meta.filter(c=>c!==a):n.meta;return r.jsxs(Ok,{children:[r.jsx(Hn,{size:"md",src:Dk(n.avatarSeed),name:n.title,alt:n.title}),r.jsxs(Fk,{children:[r.jsx(Hk,{children:n.title}),r.jsx(Wk,{children:[n.eyebrow,...l].join(" · ")})]}),s!=null&&r.jsxs(Vk,{"data-tone":Pk(s),children:[s,"% match"]}),r.jsx(Ce,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:r.jsx(el,{size:16})})]})}const Ok=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,Fk=m.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,Hk=m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,Wk=m.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,Vk=m.span`
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
`,Uk={search:ls,read:Kd,message:Sd,policy:Ya,shield:Ya,schedule:Ya,analytics:i5,clock:Or,monitor:Vh,bell:Sd,record:Br,task:Ya},qk=n=>n.icon==="shield"||n.icon==="policy",Gk={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},Yk=n=>n.updateData?`Update Data: ${n.updateData.recordType}`:Gk[n.icon]??n.name,Zk=n=>n.tone==="positive"?"success":"neutral";const Kk=m(n0)`
  && {
    --accordion-label-size: var(--text-sm);
    --accordion-desc-size: var(--text-xs);
  }
  & > div:has(> [data-accordion-header-button]) {
    padding-top: var(--space-3);
    padding-bottom: var(--space-3);
  }
  & [class*='_chevron_'] {
    width: var(--space-8);
    height: var(--space-8);
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
    /* The expanded body reads as a tinted inset card: 12px margin off the item
       edges (none on top — the header row above provides the spacing), 16px
       padding inside, secondary fill, 12px radius. */
    margin: 0 var(--space-3) var(--space-3);
    padding: var(--space-4);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-lg);
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
`,gu=240;function Qk({open:n,onClose:a,title:s="Run details",usage:l}){const[c,u]=v.useState(()=>l.length?"0":""),[f,h]=v.useState(n),[g,y]=v.useState(!1);if(v.useEffect(()=>{if(n){h(!0);let k=0;const b=requestAnimationFrame(()=>{k=requestAnimationFrame(()=>y(!0))});return()=>{cancelAnimationFrame(b),cancelAnimationFrame(k)}}y(!1);const N=setTimeout(()=>h(!1),gu);return()=>clearTimeout(N)},[n]),!f)return null;const w=l.length,C=`${w} ${w===1?"tool":"tools"} used · tap any to see its query and results`,_=l.map((N,k)=>({entry:N,index:k}));return Jd.createPortal(r.jsxs(iC,{role:"dialog","aria-modal":"true","aria-label":s,children:[r.jsx(lC,{$shown:g,onClick:a}),r.jsxs(cC,{$shown:g,children:[r.jsxs(dC,{children:[r.jsxs(uC,{children:[r.jsx(pC,{children:s}),r.jsx(fC,{children:C})]}),r.jsx(Ce,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:a,children:r.jsx(Kh,{size:18})})]}),r.jsxs(hC,{children:[r.jsx(mC,{"aria-hidden":"true"}),r.jsx(t0,{type:"single",collapsible:!0,value:c,onValueChange:N=>u(typeof N=="string"?N:""),children:_.map(({entry:N,index:k})=>{const b=N.updateData?Uh:qk(N)?Hh:Uk[N.icon];return r.jsx(Kk,{value:String(k),label:Yk(N),description:N.description,chevronPosition:"trailing",leadingSlot:r.jsx(Hn,{shape:"square",variant:"subtle",color:"neutral",size:"md",icon:r.jsx(b,{size:18}),"aria-hidden":"true",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),children:r.jsx(gC,{children:r.jsx(Xk,{entry:N})})},k)})})]})]})]}),document.body)}function Xk({entry:n}){return r.jsxs(r.Fragment,{children:[n.channel&&r.jsxs(gn,{children:[r.jsx(rn,{children:"Channel"}),r.jsx(Vf,{children:n.channel})]}),n.message&&r.jsxs(gn,{children:[r.jsx(rn,{children:"Message"}),r.jsx(Ff,{children:n.message})]}),n.recordDetails&&r.jsxs(gn,{children:[r.jsx(rn,{children:"Record details"}),r.jsx(xd,{children:n.recordDetails.map((a,s)=>r.jsx(Fn,{size:"sm",label:a.label,trailingSlot:r.jsx(yd,{$success:a.emphasis==="success",$placeholder:!a.value,children:a.value||"???"})},s))})]}),n.policies&&r.jsxs(gn,{children:[r.jsx(rn,{children:`Policies evaluated · ${n.policies.total}`}),r.jsx(CC,{children:n.policies.items.map((a,s)=>r.jsxs(jC,{children:[r.jsx(SC,{"aria-hidden":"true",children:r.jsx(Ki,{size:16})}),r.jsx("span",{children:a})]},s))})]}),n.eligible&&r.jsxs(gn,{children:[r.jsx(rn,{children:`Returned · ${n.eligible.total} ${n.eligible.unit}`}),r.jsx(Jk,{candidates:n.eligible.items,total:n.eligible.total,moreNoun:n.eligible.moreNoun})]}),n.threads&&r.jsxs(gn,{children:[r.jsx(rn,{children:`Threads · ${n.threads.total}`}),r.jsx(aC,{threads:n.threads})]}),n.notification&&r.jsxs(r.Fragment,{children:[r.jsxs(gn,{children:[r.jsx(rn,{children:"Recipient"}),r.jsx(NC,{children:r.jsx(Fn,{size:"md",divider:!1,leadingSlot:r.jsx(Hn,{size:"sm",src:pl(n.notification.seed),name:n.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:n.notification.name,description:n.notification.role,trailingSlot:r.jsx(Ce,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${n.notification.name}'s profile`,children:r.jsx(Yh,{size:14})})})})]}),r.jsxs(gn,{children:[r.jsx(rn,{children:"Message"}),r.jsx(Ff,{children:n.notification.message})]})]}),n.task&&r.jsxs(gn,{children:[r.jsx(rn,{children:"Task"}),r.jsx(xd,{children:n.task.fields.map((a,s)=>r.jsx(Fn,{size:"sm",label:a.label,trailingSlot:a.emphasis==="success-tag"?r.jsx(ts,{status:"success",size:"sm",children:a.value}):r.jsx(yd,{$success:a.emphasis==="success",$placeholder:!a.value,children:a.value||"???"})},s))})]}),n.updateData&&r.jsxs(gn,{children:[r.jsx(rn,{children:"Record details"}),(n.updateData.groups??[n.updateData.fields??[]]).map((a,s)=>r.jsx(xd,{children:a.map((l,c)=>r.jsx(Fn,{size:"sm",label:l.label,trailingSlot:l.emphasis==="change"&&l.previousValue?r.jsxs(eC,{children:[r.jsx(tC,{children:l.previousValue}),r.jsx(nC,{"aria-hidden":"true",children:"→"}),r.jsx(rC,{children:l.value})]}):l.emphasis==="success-tag"?r.jsx(ts,{status:"success",size:"sm",children:l.value}):r.jsx(yd,{$success:l.emphasis==="success",$placeholder:!l.value,children:l.value||"???"})},c))},s))]}),n.recommendation&&r.jsxs(gn,{children:[r.jsx(rn,{children:"Recommendation"}),r.jsxs($C,{children:[r.jsxs(Hf,{children:[r.jsx(Wf,{children:"Incentive?"}),r.jsx(LC,{$add:n.recommendation.add,children:n.recommendation.add?n.recommendation.amount:"No bonus"})]}),r.jsxs(Hf,{children:[r.jsx(Wf,{children:"Reason"}),r.jsx(MC,{children:n.recommendation.rationale})]})]})]}),n.query&&r.jsx(Of,{label:"Query",children:r.jsx(yC,{children:n.query})}),n.summary&&r.jsx(Of,{label:"What it does",children:r.jsx(Vf,{children:n.summary})})]})}function Of({label:n,children:a}){const[s,l]=v.useState(!1);return r.jsxs(gn,{children:[r.jsxs(vC,{type:"button","aria-expanded":s,onClick:()=>l(c=>!c),children:[r.jsx(rn,{children:n}),r.jsx(xC,{"data-open":s||void 0,"aria-hidden":"true",children:r.jsx(Mn,{size:14})})]}),s&&a]})}function Jk({candidates:n,total:a,moreNoun:s}){var w;const[l,c]=v.useState(!1),u=n.slice(0,3),f=a-u.length,h=parseFloat(((w=u[u.length-1])==null?void 0:w.match)??"4.5"),g=l?Array.from({length:f},(C,_)=>oC(_,h)):[],y=[...u,...g];return r.jsxs(r.Fragment,{children:[r.jsx(vu,{children:y.map((C,_)=>r.jsx(Fn,{size:"sm",leadingSlot:r.jsx(Hn,{size:"sm",src:pl(C.name),name:C.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:C.name,trailingSlot:r.jsx(_C,{children:`${C.match} · ${C.distance}`})},_))}),f>0&&r.jsx(G0,{type:"button",onClick:()=>c(C=>!C),"aria-expanded":l,children:l?`Show fewer ${s}`:`+${f} more ${s}`})]})}const vu=m.div`
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
`,xd=m(vu)`
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
`,yd=m.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${n=>n.$placeholder?"var(--color-content-disabled)":n.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,eC=m.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,tC=m.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,nC=m.span`
  color: var(--color-content-tertiary);
`,rC=m.span`
  color: var(--color-success-content);
`,Vi=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],Ui=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function oC(n,a){const s=Vi[n%Vi.length],l=Ui[(n*7+3)%Ui.length],c=Math.max(3,a-(n+1)*.1),u=(4+n*13%90/10).toFixed(1);return{name:`${s} ${l}`,match:`${c.toFixed(1)} match`,distance:`${u} mi`}}function aC({threads:n}){const[a,s]=v.useState(!1),l=n.items.slice(0,3),c=n.total-l.length,u=a?Array.from({length:c},(h,g)=>sC(g)):[],f=[...l,...u];return r.jsxs(r.Fragment,{children:[r.jsx(vu,{children:f.map((h,g)=>r.jsx(Fn,{size:"md",interactive:!0,onClick:()=>void 0,leadingSlot:r.jsx(Hn,{size:"sm",src:pl(h.seed),name:h.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:h.name,description:h.preview,trailingSlot:r.jsxs(kC,{children:[r.jsx(ts,{status:Zk(h),size:"sm",children:h.status}),r.jsx(Mn,{size:16})]})},g))}),c>0&&r.jsx(G0,{type:"button",onClick:()=>s(h=>!h),"aria-expanded":a,children:a?`Show fewer ${n.moreNoun}`:`+${c} more ${n.moreNoun}`})]})}function sC(n){const a=Vi[n%Vi.length],s=Ui[(n*7+3)%Ui.length],l=`${a} ${s}`;return{seed:l,name:l,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const iC=m.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,lC=m.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${n=>n.$shown?.45:0};
  transition: opacity ${gu}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,cC=m.div`
  position: relative;
  width: min(460px, 92vw);
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--color-bg-primary);
  border-left: 1px solid var(--color-border-opaque);
  box-shadow: var(--shadow-below-high);
  /* Slides in from the right edge on open, back out on close. */
  transform: translateX(${n=>n.$shown?"0":"100%"});
  transition: transform ${gu}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; transform: none; }
`,dC=m.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,uC=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,pC=m.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,fC=m.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,hC=m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,mC=m.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,gC=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,gn=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,vC=m.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  cursor: pointer;

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,xC=m.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;function yC({children:n}){const[a,s]=v.useState(!1),l=()=>{var c;(c=navigator.clipboard)==null||c.writeText(n),s(!0),window.setTimeout(()=>s(!1),1600)};return r.jsxs(wC,{children:[r.jsx(bC,{children:n}),r.jsx(Ce,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":a?"Copied":"Copy query",onClick:l,children:a?r.jsx(Ki,{size:14}):r.jsx(cs,{size:14})})]})}const wC=m.div`
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
`,bC=m.pre`
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
`,_C=m.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,kC=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,G0=m.button`
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
`,CC=m.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,jC=m.li`
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
`,SC=m.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,Ff=m.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,NC=m.div`
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
`,$C=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`,Hf=m.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,Wf=m.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,LC=m.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${n=>n.$add?"var(--color-success-content)":"var(--color-content-primary)"};
`,MC=m.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,Vf=m.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function Od({milestones:n,typingIndex:a,focusIndex:s,focusBeat:l,collapsed:c,hideActions:u,running:f,animateIn:h,showConnectors:g,reasoning:y,expandAll:w}){return r.jsx(RC,{milestones:n,typingIndex:a,focusIndex:s,focusBeat:l,hideActions:u,running:f,defaultCollapsed:c,animateIn:h,showConnectors:g,reasoning:y,expandAll:w})}const EC=1;function RC({milestones:n,typingIndex:a,focusIndex:s,focusBeat:l,hideActions:c,running:u,animateIn:f=!0,showConnectors:h=!0,defaultCollapsed:g=!1,reasoning:y=!1,expandAll:w=!1}){const[C,_]=v.useState(!1),j=w?0:g||y&&!u?n.length:u&&typeof s=="number"?n.length>2?Math.min(Math.max(0,s),n.length-1):0:u?0:Math.max(0,n.length-EC),M=j>0,L=M&&!C?j:0,I=n.slice(0,j).map(E=>E.headline).join(" · "),D=n.length>0&&L>=n.length;return r.jsx(GC,{$animate:f,children:r.jsxs(YC,{$compact:D,children:[M&&r.jsx(qf,{$tight:!0,$last:D,$connected:h,children:r.jsxs(Z0,{type:"button","aria-expanded":C,onClick:()=>_(E=>!E),children:[r.jsx(aj,{"aria-hidden":"true",children:r.jsx(Mh,{size:16})}),r.jsx(sj,{children:C?"Show fewer steps":I})]})}),n.slice(L).map((E,B)=>{var ee,oe;const R=L+B,A=u&&typeof s=="number"&&R>s,U=u&&typeof s=="number"&&R===s,G=!u||typeof s!="number"||R<s-1?"done":R===s-1?"working":"upcoming",X=!!((ee=E.progress)!=null&&ee.length),q=R===n.length-1;return r.jsxs(qf,{$tight:!X,$last:q,$connected:h,children:[h&&!q&&G!=="upcoming"&&r.jsx(KC,{"aria-hidden":"true",$state:G,$tight:!X,$superseded:g}),r.jsx(PC,{milestone:E,last:!0,collapsible:!0,placeholder:A,focused:U,progressBeat:U?l:void 0,superseded:g,typing:R===a,extra:!A&&((oe=E.usage)!=null&&oe.length)?r.jsx(AC,{usage:E.usage,title:E.headline}):void 0,icon:r.jsx(DC,{icon:E.icon,loading:a===R||U||u&&typeof s!="number"&&R===n.length-1,placeholder:A,muted:g})})]},R)}),!c&&!u&&r.jsx(TC,{time:IC(n)})]})})}function IC(n){const s=581+n.reduce((h,g)=>h+g.headline.length,0)%200,l=Math.floor(s/60)%24,c=s%60,u=l<12?"AM":"PM";return`${l%12===0?12:l%12}:${String(c).padStart(2,"0")} ${u}`}function TC({time:n}){const[a,s]=v.useState(null),l=c=>s(u=>u===c?null:c);return r.jsx(QC,{"data-feedback-actions":!0,children:r.jsxs(kh,{visibility:"always",time:n,children:[r.jsx(Gf,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":a==="up","data-active":a==="up"||void 0,onClick:()=>l("up"),children:r.jsx(Bh,{size:14})}),r.jsx(Gf,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":a==="down","data-active":a==="down"||void 0,onClick:()=>l("down"),children:r.jsx(Oh,{size:14})}),r.jsx(Ce,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:r.jsx(na,{size:14})})]})})}function AC({usage:n,title:a}){const[s,l]=v.useState(!1);return v.useEffect(()=>{if(!s)return;const c=u=>{u.key==="Escape"&&l(!1)};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[s]),n.length?r.jsxs(XC,{children:[r.jsxs(Ce,{variant:"tertiary",size:"xs",trailingArtwork:r.jsx(Mn,{size:12}),"aria-haspopup":"dialog","aria-expanded":s,onClick:()=>l(!0),children:[n.length," ",n.length===1?"tool":"tools"," used"]}),r.jsx(Qk,{open:s,onClose:()=>l(!1),title:a,usage:n})]}):null}function zC({records:n,initial:a=3}){const[s,l]=v.useState(!1),c=s?n:n.slice(0,a),u=n.length-a;return r.jsxs(Cj,{children:[c.map((f,h)=>r.jsx(Bk,{record:f},h)),u>0&&r.jsx(jj,{type:"button",onClick:()=>l(f=>!f),children:s?"Show less":`Show ${u} more`})]})}function DC({slotRef:n,hidden:a,loading:s,placeholder:l,muted:c}){return l?r.jsx(Yf,{ref:n,"aria-hidden":"true",$hidden:a,$placeholder:!0,children:r.jsx(oj,{})}):r.jsx(Yf,{ref:n,"aria-hidden":"true",$hidden:a,$loading:s,children:r.jsxs(lj,{viewBox:"0 0 24 24",$loading:s,$muted:c&&!s,children:[r.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),r.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function PC({milestone:n,last:a,typing:s,icon:l,collapsible:c=!0,extra:u,placeholder:f,focused:h,progressBeat:g,superseded:y}){var L,I;if(f)return r.jsx(Kf,{$last:a,$dim:!0,children:r.jsxs(as,{as:"div",children:[l,r.jsx(Qf,{children:n.headline})]})});const w=!!((L=n.blocks)!=null&&L.length),C=!!u,[_,N]=v.useState(!c||!!n.defaultOpen),k=c&&(w||C),b=k&&!s,j=w&&(c?_:!0),M=C&&(c?_:!0);return r.jsxs(Kf,{$last:a,children:[r.jsxs(as,{as:k?"button":"div",type:k?"button":void 0,$interactive:b,"aria-expanded":b?_:void 0,onClick:b?()=>N(D=>!D):void 0,children:[l,r.jsx(Qf,{$focused:!!h,children:n.headline}),b&&r.jsx(cj,{"data-open":_||void 0,"aria-hidden":"true",children:r.jsx(Mn,{size:14})})]}),n.summary&&r.jsx(HC,{text:n.summary,probe:n.probe,running:!!h,indent:!!l}),(I=n.progress)!=null&&I.length?r.jsx(dj,{$indent:!!l,children:r.jsx(VC,{steps:n.progress,avatars:n.avatars,avatarsOnSettle:n.avatarsOnSettle,reached:n.reached,live:!!(s||h),beat:g,superseded:y,showAvatars:_||s||h})}):null,j&&r.jsx(vj,{$indent:!!l,children:n.blocks.map((D,E)=>r.jsxs(bj,{children:[D.text&&r.jsx(_j,{children:s?r.jsx(Y0,{text:D.text}):D.text}),D.label&&r.jsx(kj,{children:D.label}),D.bullets&&r.jsx(Sj,{children:D.bullets.map((B,R)=>r.jsx("li",{children:B},R))}),D.checks&&r.jsx(Nj,{children:D.checks.map((B,R)=>r.jsxs("li",{children:[r.jsx($j,{"aria-hidden":"true"}),r.jsx("span",{children:B})]},R))}),D.records&&r.jsx(zC,{records:D.records})]},E))}),M&&r.jsx(JC,{$indent:!!l,children:u})]})}const BC=380,OC=1.32,FC=1600;function HC({text:n,probe:a,running:s,indent:l}){const c=a&&a.length?a:null,u=!!s&&!!c,[f,h]=v.useState(0);v.useEffect(()=>{u&&h(0)},[u]);const g=Math.min(BC*Math.pow(OC,f),FC);return v.useEffect(()=>{if(!u||!c)return;const y=setTimeout(()=>h(w=>w+1),g);return()=>clearTimeout(y)},[u,f,c,g]),r.jsx(wj,{$indent:l,$thinking:u,"aria-live":"polite",style:u?{"--beat-ms":`${Math.round(g)}ms`}:void 0,children:u&&c?r.jsx(yj,{children:c[f%c.length]},f):n})}const WC=1350;function VC({steps:n,avatars:a,avatarsOnSettle:s,reached:l,live:c,showAvatars:u,beat:f,superseded:h}){const g=n.length-1,y=typeof f=="number",[w,C]=v.useState(c?0:g),_=v.useRef(c);v.useEffect(()=>{c&&!_.current&&(_.current=!0,C(0))},[c]),v.useEffect(()=>{if(y||!_.current||w>=g)return;const j=setTimeout(()=>C(M=>Math.min(M+1,g)),WC);return()=>clearTimeout(j)},[w,g,y]),v.useEffect(()=>{typeof f=="number"&&C(Math.min(f,g))},[f,g]);const N=typeof f=="number"?Math.min(f,g):w,k=N>=g,b=k&&!c;return r.jsxs(uj,{children:[r.jsx(pj,{$done:b,$live:c,$superseded:h,"aria-live":"polite",children:c?r.jsx(Y0,{text:n[N],caret:!1,speed:26}):n[N]},N),u&&(s?k:k||c)&&(a!=null&&a.length)?r.jsx(UC,{seeds:a,total:l}):null]})}const Uf=90;function UC({seeds:n,total:a,max:s=5}){const l=n.slice(0,s),c=Math.max(a??0,n.length),u=c-l.length;return r.jsxs(fj,{"aria-label":`${c} people reached`,children:[l.map((f,h)=>r.jsx(hj,{style:{zIndex:l.length-h,animationDelay:`${h*Uf}ms`},children:r.jsx(Hn,{size:"sm",src:pl(f),name:f,alt:""})},f)),u>0&&r.jsxs(mj,{"aria-hidden":"true",style:{animationDelay:`${l.length*Uf}ms`},children:["+",u]})]})}m.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`;const qC=Pe`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,fl=an`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,GC=m.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${qC} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${n=>n.$animate===!1&&"animation: none;"}

  ${fl}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;m.span``;const YC=m.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. A fully-folded
     (superseded) group is a single recap line, so it packs tight — just enough to
     separate it from the turns around it without a full row of padding. */
  padding-top: ${n=>n.$compact?"var(--space-1)":"var(--space-3)"};
  padding-bottom: ${n=>n.$compact?"var(--space-1)":"var(--space-3)"};
`,qf=m.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${n=>n.$last?"0":n.$connected?n.$tight?"var(--space-3)":"var(--space-5)":n.$tight?"0":"var(--space-3)"};
`,ZC=Pe`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,KC=m.span`
  position: absolute;
  /* Centered on the 32px icon column. */
  left: calc(var(--space-8) / 2);
  top: calc(var(--space-8) + var(--space-1));
  /* Extend down across the inter-row gap — matched to this connected row's gap (tight
     vs generous) — stopping a touch short of the next step's icon so it reads as
     connecting the two. */
  bottom: ${n=>n.$tight?"calc(var(--space-1) - var(--space-3))":"calc(var(--space-1) - var(--space-5))"};
  pointer-events: none;

  ${n=>n.$state==="working"?an`
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
        animation: ${ZC} 1.25s linear infinite;
      `:n.$state==="upcoming"?an`
        width: 0;
        border-left: 1.5px dashed var(--color-border-opaque);
      `:an`
        /* done — a full, solid green line. Static: the drawing motion belongs to
           the 'working' state (the looping sweep). Once the step completes, the
           line simply solidifies rather than re-drawing from zero.
           A superseded group (a newer activity group has triggered below it)
           demotes the line to the slate scale, so the success green stays with
           the latest group. */
        width: 1.5px;
        background-color: ${n.$superseded?"var(--color-slate-border-secondary)":"var(--color-success-content)"};
      `};

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,QC=m.div`
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
`,XC=m.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,JC=m.div`
  padding-top: var(--space-2);
  padding-left: ${n=>n.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,Gf=m(Ce)`
  &[data-active] { color: var(--color-content-brand); }
`;function Y0({text:n,onDone:a,speed:s=30,caret:l=!0}){const[c,u]=v.useState(0);v.useEffect(()=>{u(0)},[n]),v.useEffect(()=>{if(c>=n.length)return;const h=setTimeout(()=>u(g=>g+1),s);return()=>clearTimeout(h)},[c,n,s]);const f=c>=n.length;return v.useEffect(()=>{f&&(a==null||a())},[f]),r.jsxs(r.Fragment,{children:[n.slice(0,c),l&&r.jsx(tj,{$blink:f,"aria-hidden":"true"}),!f&&r.jsx(nj,{"aria-hidden":"true",children:n.slice(c)})]})}const ej=Pe`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,tj=m.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${n=>n.$blink?ej:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,nj=m.span`
  opacity: 0;
`;m.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`;m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`;const Yf=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${n=>n.$hidden?"hidden":"visible"};
`,rj=Pe`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,oj=m.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${rj} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Z0=m.button`
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
`,aj=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  /* The collapse toggle always reads in the quiet disabled tone — it's a recap
     affordance, not a step, so it stays out of the way of the live trail. */
  color: var(--color-content-disabled);
`,sj=m.span`
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

  ${Z0}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,ij=Pe`
  to { transform: rotate(360deg); }
`,Zf=56.5,lj=m.svg`
  width: var(--space-4);
  height: var(--space-4);
  overflow: visible;

  .ring {
    /* Loading: hollow (transparent) spinner arc. Done: the circle fills solid
       success green — a filled badge, not an outline. Transparent (not none) so
       the fill eases in rather than popping. Muted (a superseded group's settled
       step): the disc fades out entirely, leaving just the bare check. */
    fill: ${n=>n.$loading||n.$muted?"transparent":"var(--color-success-fill)"};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-dasharray: ${Zf};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${n=>n.$loading?Zf*.7:0};
    stroke: ${n=>n.$loading?"var(--color-content-tertiary)":n.$muted?"transparent":"var(--color-success-fill)"};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${ij} 2s linear infinite;
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
    stroke: ${n=>n.$muted?"var(--color-content-tertiary)":"var(--color-content-inverse-primary)"};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 15;
    /* undrawn + slightly shrunk + transparent while loading; on done it draws on
       while fading + settling to full scale, so the check eases in rather than
       popping. transform-box keeps the scale centred on the glyph itself. */
    stroke-dashoffset: ${n=>n.$loading?15:0};
    opacity: ${n=>n.$loading?0:1};
    transform: ${n=>n.$loading?"scale(0.7)":"scale(1)"};
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
`;m.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`;const Kf=m.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${n=>n.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${n=>n.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,as=m.div`
  all: unset;
  display: flex;
  align-items: center;
  /* Tight 8px lead — the title hugs its loader/checkmark. The sub-content
     indents (ProgressWrap / Blocks / ExtraSlot) mirror this value. */
  gap: var(--space-2);
  width: 100%;
  box-sizing: border-box;
  cursor: ${n=>n.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,Qf=m.span`
  /* Size to the title text (shrinking if the row is tight) rather than filling the
     row, so the expand chevron sits right after the label instead of at the far edge. */
  flex: 0 1 auto;
  min-width: 0;
  text-align: left;
  font-size: var(--text-sm); /* 14px */
  font-weight: ${n=>n.$focused?"var(--font-weight-bold)":"var(--font-weight-medium)"};
  color: ${n=>n.$focused?"var(--color-content-primary)":"var(--color-content-tertiary)"};
  line-height: var(--line-height-snug);
  transition: color var(--duration-base) var(--ease-out);

  ${as}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,cj=m.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  opacity: 0;
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-default);
  ${as}:hover &,
  ${as}:focus-visible &,
  &[data-open] { opacity: 1; }
  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,dj=m.div`
  padding-left: ${n=>n.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,uj=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,K0=Pe`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,pj=m.div`
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
  color: ${n=>n.$superseded?"var(--color-content-disabled)":n.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
  /* The live reveal is carried by the type-on (see MilestoneProgress → Typewriter),
     so the line itself no longer fades/pops in — that avoided a stray flash when a
     settled line re-mounts (e.g. as the finished group folds into a response set).
     While the step is still running a highlight band sweeps left-to-right across it
     to read as actively-working; a settled line holds solid. */
  ${n=>n.$live&&an`
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
    animation: ${K0} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,fj=m.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,Q0=Pe`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,hj=m.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${Q0} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,mj=m.span`
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
  animation: ${Q0} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,gj=Pe`
  from { opacity: 0; }
  to   { opacity: 1; }
`,vj=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
  /* Breathing room below the revealed sub-context so it doesn't butt against the
     next step (the tighter headline-only gap leaves little room otherwise). */
  padding-bottom: var(--space-2);
  /* Card layout: hang the sub-context under the title by clearing the inline
     icon column (icon width --space-8 + header gap --space-2). */
  padding-left: ${n=>n.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
  animation: ${gj} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,xj=Pe`
  from { opacity: 0; transform: translateY(3px); }
  to   { opacity: 1; transform: translateY(0); }
`,yj=m.span`
  display: inline-block;
  /* Muted base with a brighter band the sweep animation slides across the text. */
  background: linear-gradient(
    90deg,
    var(--color-content-tertiary) 0%,
    var(--color-content-tertiary) 40%,
    var(--color-content-primary) 50%,
    var(--color-content-tertiary) 60%,
    var(--color-content-tertiary) 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation:
    ${xj} calc(var(--beat-ms, 460ms) * 0.35) var(--ease-out) both,
    ${K0} var(--beat-ms, 460ms) linear both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,wj=m.p`
  margin: 0;
  padding-top: var(--space-2);
  padding-left: ${n=>n.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: ${n=>n.$thinking?"var(--color-content-tertiary)":"var(--color-success-content)"};
  transition: color var(--duration-base) var(--ease-out);
`,bj=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,_j=m.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,kj=m.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,Cj=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,jj=m.button`
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
`,Sj=m.ul`
  margin: 0;
  padding-left: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  list-style: disc;

  & li {
    font-size: var(--text-xs);
    line-height: var(--line-height-normal);
    /* Lighter than the standard tertiary detail tone — the bullets are deep
       sub-context, so they sit a step quieter than the step's other text. */
    color: var(--color-content-disabled);
  }
`,Nj=m.ul`
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
    font-size: var(--text-xs);
    line-height: var(--line-height-normal);
    color: var(--color-content-tertiary);
  }
`,$j=m.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function Lj({size:n=20}){return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const Mj=160;v.forwardRef(function({onSend:a,working:s=!1,onStop:l,placeholder:c="Message Ultron…",compact:u=!1},f){const[h,g]=v.useState(""),y=v.useRef(null),w=h.trim().length>0;v.useImperativeHandle(f,()=>({focus:()=>{var b;return(b=y.current)==null?void 0:b.focus()}}),[]);const C=()=>{const b=y.current;b&&(b.style.height="auto",b.style.height=`${Math.min(b.scrollHeight,Mj)}px`)},_=()=>{!w||s||(a(h),g(""),requestAnimationFrame(()=>{const b=y.current;b&&(b.style.height="auto")}))},N=b=>{b.preventDefault(),_()},k=b=>{b.key==="Enter"&&!b.shiftKey&&(b.preventDefault(),_())};return r.jsxs(Ej,{onSubmit:N,$compact:u,children:[r.jsx(Rj,{ref:y,rows:1,value:h,placeholder:c,"aria-label":"Message Ultron",$compact:u,onChange:b=>{g(b.target.value),C()},onKeyDown:k}),s?r.jsx(Xf,{$float:!0,type:"button",variant:"primary",size:u?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:l,children:r.jsx(Lj,{size:u?16:20})}):r.jsx(Xf,{type:"submit",variant:"primary",size:u?"xs":"sm",iconOnly:!0,disabled:!w,"aria-label":"Send message",children:r.jsx(rl,{size:u?14:18})})]})});const Ej=m.form`
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
  ${n=>n.$compact&&`
  padding: 5px 5px 5px var(--space-3);
  border-radius: var(--radius-md);`}
  transition: box-shadow var(--duration-slow) var(--ease-default),
              border-color var(--duration-slow) var(--ease-default);

  /* Active (focused) state: just the 1px border switching to the focus color —
     no thicker ring — so the bar stays a single hairline outline throughout. */
  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,Rj=m.textarea`
  flex: 1;
  min-width: 0;
  /* Size a single line to exactly the 32px send button (space-8) so, with the
     bar's flex-end alignment, the resting input and button share one centered
     row; extra lines then grow upward while the button stays pinned at the foot.
     Compact bars center on the 24px xs button (space-6) instead. */
  padding: calc((${n=>n.$compact?"var(--space-6)":"var(--space-8)"} - 1lh) / 2) 0;
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
  ${n=>n.$compact&&`
  font-size: var(--text-xs);`}

  &::placeholder { color: var(--color-content-inverse-tertiary); }
`,Xf=m(Ce)`
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
  ${n=>n.$float&&`
  &[data-variant='primary'] {
    background: transparent !important;
    color: var(--color-content-primary) !important;
  }`}
`;m.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
  overflow: hidden;
  /* The expanded event card is deconstructed: transparent, no tonal fill, no
     shadow/border — its content sits flat on the page. Collapsed list cards keep
     their solid surface + flat tonal status fill, and lift on hover. */
  background: ${n=>n.$expanded?"transparent":"var(--color-bg-primary)"};
  box-shadow: none;
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  ${n=>n.$expanded?"":`
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
  &[data-tone='orange'] { ${n=>n.$expanded?"":"background-color: var(--color-orange-bg-tertiary);"} }
  &[data-tone='green']  { ${n=>n.$expanded?"":"background-color: var(--color-green-bg-tertiary);"} }
  &[data-tone='blue']   { ${n=>n.$expanded?"":"background-color: var(--color-blue-bg-tertiary);"} }
  &[data-tone='slate']  { ${n=>n.$expanded?"":"background-color: var(--color-slate-bg-tertiary);"} }
`;m.div`
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
`;m.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`;m.span`
  flex-shrink: 0;
  display: inline-flex;
`;m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  padding: var(--space-2) 0;
`;m.button`
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
`;m.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;m.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`;m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-inverse-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;m.div`
  overflow: hidden;
`;m.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`;m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`;const Ij=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`;m.div`
  all: ${n=>n.$interactive?"unset":"revert"};
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  box-sizing: border-box;
  cursor: ${n=>n.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`;m.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;m(Ij)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`;m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`;m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`;m.div`
  display: flex;
  flex-direction: column;
`;const Tj=Pe`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`;m.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${Tj} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`;m.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`;m.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${n=>n.$last?"0":"var(--space-4)"};
`;m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`;m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`;m.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${n=>n.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`;m.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`;m(Ce)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`;m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;m.div`
  display: flex;
  flex-direction: column;
`;const qi="var(--space-8)";m.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`;m.div`
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
  &[data-first]::before { top: calc(${qi} / 2); }
  &[data-last]::before { bottom: calc(100% - ${qi} / 2); }
  &[data-first][data-last]::before { display: none; }
`;m.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${qi} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-slate-border-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`;m.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;m.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${qi};
  cursor: ${n=>n.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`;const Aj=m.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`;m.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`;m.p`
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
`;const zj=m.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,X0=Pe`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,Dj=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${X0} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;m.div`
  animation: ${X0} var(--duration-slow) var(--ease-out);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;m(Ce)`
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
`;m(Ce)`
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
`;m(Ce)`
  ${n=>n.$trailing&&"margin-left: auto;"}
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
`;m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${n=>n.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`;m.p`
  margin: 0;
  max-width: 80%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`;const Oi=m.div`
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
  box-shadow: ${n=>n.$saved?"none":"var(--shadow-below-low)"};
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);

  ${n=>!n.$saved&&an`
    &:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-below-md);
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`;m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`;m.span`
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
  ${Oi}:not([data-saved]):hover & { color: var(--color-content-inverse); }
  ${Oi}:not([data-saved]):hover &::after { opacity: 1; }

  /* Saved (settled) card: the glyph quiets to the disabled tone alongside its
     label and button. */
  ${Oi}[data-saved] & { color: var(--color-content-disabled); }
`;m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);

  /* Saved (settled) card: the label quiets to the disabled tone alongside the
     glyph and button. */
  ${Oi}[data-saved] & { color: var(--color-content-disabled); }
`;m(Dj)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`;const Pj=Pe`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`;m.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${Pj} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${n=>n.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;m.div`
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
  ${zj} { color: var(--color-content-disabled); }
  ${Aj} { color: var(--color-content-disabled); }
`;m.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`;m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`;m.div`
  display: flex;
  justify-content: flex-end;
`;const xu=Pe`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,J0=Pe`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,Bj=Pe`
  from { opacity: 0; }
  to   { opacity: 1; }
`;m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: 16px;
  animation: ${xu} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${n=>n.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;m.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;m.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${J0} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;const Oj=Pe`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`;m.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${Oj} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;m.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;m.span`
  position: absolute;
  inset: 0;
  /* Center the canvas so the two forms stay concentric through the cross-fade even
     when one renders at a larger size to match the other's visible footprint. */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${n=>n.$show?1:0};
  transition: opacity var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`;m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${fl}
`;m.div`
  display: contents;
  ${fl}
`;m.div`
  display: flex;
  flex-direction: column;
  ${fl}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`;m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${Bj} 380ms var(--ease-out) 160ms both;
  ${n=>n.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;m.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${J0} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${n=>n.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${xu} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
  animation: ${xu} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
`;const Ri=520;m.div`
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
`;const em=Pe`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`;m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${em} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;m.div`
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
`;m.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`;m.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`;const Fj=Pe`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`;m.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${Fj} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;m.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;const tm=Pe`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`;m.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${tm} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;m.div`
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
  animation: ${em} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;m.div`
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: scale(1);
  transition:
    grid-template-rows ${Ri}ms var(--ease-out, ease),
    opacity ${Ri}ms var(--ease-out, ease),
    transform ${Ri}ms var(--ease-out, ease);

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
    transition: opacity ${Ri}ms linear;
    &[data-phase='entering'],
    &[data-phase='leaving'] {
      transform: none;
    }
  }
`;m.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`;m.div`
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
`;m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`;m.span`
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
`;m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`;m.div`
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
    animation: ${tm} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;m.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`;m.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`;m.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`;m.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`;m.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`;const Hj=Pe`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,Wj=Pe`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`;m.div`
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

  ${n=>!n.$static&&!n.$closing&&an`
    animation: ${Wj} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${n=>n.$closing&&an`
    animation: ${Hj} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;m.div`
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
`;m.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);
`;m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`;m.div`
  display: flex;
  &:empty { display: none; }
`;m.div`
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
`;m.div`
  scroll-margin-top: var(--space-5);
`;m.div`
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
`;m.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;m.div`
  font-family: var(--font-sans);
`;m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`;m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`;m.span`
  min-width: 0;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`;m.div`
  display: flex;
  align-items: baseline;
  min-height: var(--space-4);
`;const Vj=Pe`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`;m.span`
  display: inline-flex;
  align-items: baseline;
  min-width: 0;
  animation: ${Vj} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;m.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`;const Uj=Pe`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`;m.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${Uj} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;m.span`
  white-space: ${n=>n.$wrap?"normal":"nowrap"};
`;const qj=Pe`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`;m.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${qj} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;m.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`;m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`;m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`;m.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`;m.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;m.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;m.button`
  flex-shrink: 0;
  padding: var(--space-1) var(--space-3);
  border: 1px solid ${n=>n.$active?"var(--color-content-primary)":"var(--color-border-opaque)"};
  border-radius: var(--radius-full);
  background: ${n=>n.$active?"var(--color-content-primary)":"var(--color-bg-primary)"};
  color: ${n=>n.$active?"var(--color-content-inverse)":"var(--color-content-secondary)"};
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: background var(--duration-fast, 120ms) var(--ease-out, ease),
              border-color var(--duration-fast, 120ms) var(--ease-out, ease),
              color var(--duration-fast, 120ms) var(--ease-out, ease);

  &:hover {
    border-color: ${n=>n.$active?"var(--color-content-primary)":"var(--color-content-tertiary)"};
  }
`;m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;m.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`;m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`;m.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`;m.span`
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
`;m.div`
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
`;m.div`
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
`;m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;m.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`;m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`;m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`;m.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`;m.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`;const Ii=72,Gj=240,Yj=640,Zj=.13,Jf=.58;function Dt(n){const a=Math.sin(n*127.1+311.7)*43758.5453;return a-Math.floor(a)}function Kj(n){return n=Math.max(0,Math.min(1,n)),n*n*(3-2*n)}function eh(n,a,s,l){const c=getComputedStyle(a).getPropertyValue(s).trim();if(!c)return l;n.fillStyle="#000",n.fillStyle=c;const u=n.fillStyle;if(u.startsWith("#")){const h=u.slice(1),g=parseInt(h.length===3?h.split("").map(y=>y+y).join(""):h,16);return(g>>16&255)+","+(g>>8&255)+","+(g&255)}const f=u.match(/[\d.]+/g);return f&&f.length>=3?`${+f[0]},${+f[1]},${+f[2]}`:l}const Qj=n=>{const[a,s,l]=n.split(",").map(Number);return(.299*a+.587*s+.114*l)/255};function Xj({links:n=0}){const a=v.useRef(null),s=v.useRef(0),l=v.useRef(n);return l.current=Math.max(0,Math.min(1,n)),v.useEffect(()=>{const c=a.current;if(!c)return;const u=c.getContext("2d");if(!u)return;const f=Math.min(2,window.devicePixelRatio||1);let h=0,g=0;const y=()=>{h=c.clientWidth,g=c.clientHeight,c.width=Math.max(2,Math.round(h*f)),c.height=Math.max(2,Math.round(g*f)),u.setTransform(f,0,0,f,0,0)};y();const w=new ResizeObserver(y);w.observe(c);const C=eh(u,c,"--color-bg-primary","255,255,255"),_=Qj(C)<.5,N=eh(u,c,"--color-content-tertiary",_?"148,163,184":"71,85,105"),k=Array.from({length:Ii},(D,E)=>{const B=E%3===0,R=B?1-.5*Math.pow(Dt(E*3.1),1.6):Dt(E*3.1),A=B?.5*Math.pow(Dt(E*5.7),1.6):Dt(E*5.7);return{bx:R,by:A,vx:(Dt(E*7.3)-.5)*.008,vy:(Dt(E*9.9)-.5)*.008,wA:6+Dt(E*4.7)*10,wS:.25+Dt(E*6.1)*.5,wP:Dt(E*8.2)*6.2832,r:.8+Dt(E*2.3)*1.6,twS:.8+Dt(E)*1.4,twP:Dt(E*11.4)*6.2832}}),b=(D,E)=>{const B=((D.bx+D.vx*E)%1+1)%1,R=((D.by+D.vy*E)%1+1)%1,A=B-.5,U=Math.abs(A)*2,G=U<1e-4?1:(Jf+(1-Jf)*U)/U;return{x:(.5+A*G)*h+Math.cos(E*D.wS+D.wP)*D.wA,y:R*g+Math.sin(E*D.wS*.8+D.wP)*D.wA}},j=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),M=D=>{s.current+=(l.current-s.current)*.04,Math.abs(s.current-l.current)<.001&&(s.current=l.current);const E=s.current;u.clearRect(0,0,h,g);const B=k.map(R=>b(R,D));if(E>.01){u.lineWidth=1,u.lineCap="round";for(let R=0;R<Ii;R++)for(let A=R+1;A<Ii;A++){if(Dt(R*97.7+A*13.3)>E*.5)continue;const G=B[R],X=B[A],q=X.x-G.x,ee=X.y-G.y,oe=Math.hypot(q,ee),ce=Dt(R*5.1+A*23.9)<Zj,ie=ce?Yj:Gj;if(oe>ie||oe<1)continue;const le=Math.abs(q)/oe;if(le<.55)continue;const Z=7+Dt(R*3.3+A*41.1)*6,O=j?.5:(D/Z+Dt(R*17.9+A*7.7))%1;let H=1,$=1;if(O>=.78)continue;O<.3?H=Kj(O/.3):O>.62&&($=1-(O-.62)/.16);const T=1-oe/ie,Q=ce?T:T*T,J=(_?.45:.34)*(ce?.62:1),ae=Q*J*E*$*le;if(ae<.01||H<.02)continue;const de=G.x+q*H,pe=G.y+ee*H,xe=u.createLinearGradient(G.x,G.y,de,pe);xe.addColorStop(0,"rgba("+N+",0)"),xe.addColorStop(1,"rgba("+N+","+ae+")"),u.strokeStyle=xe,u.beginPath(),u.moveTo(G.x,G.y),u.lineTo(de,pe),u.stroke(),H<1&&(u.fillStyle="rgba("+N+","+Math.min(1,ae*2.4)+")",u.beginPath(),u.arc(de,pe,1.4,0,6.2832),u.fill())}}for(let R=0;R<Ii;R++){const A=k[R],U=.35+.65*(.5+.5*Math.sin(D*A.twS+A.twP));u.fillStyle="rgba("+N+","+U*(_?.55:.42)+")",u.beginPath(),u.arc(B[R].x,B[R].y,A.r*(.7+.3*U),0,6.2832),u.fill()}};if(j)return s.current=l.current,M(1.15),()=>w.disconnect();M(1.15);let L=0;const I=D=>{M(D/1e3),L=requestAnimationFrame(I)};return L=requestAnimationFrame(I),()=>{cancelAnimationFrame(L),w.disconnect()}},[]),r.jsx(Jj,{"aria-hidden":"true",children:r.jsx("canvas",{ref:a})})}const Jj=m.div`
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
`;function Fd({size:n=22,className:a}){return r.jsxs("svg",{width:n,height:n*(80/94),viewBox:"0 0 94 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:a,role:"img","aria-label":"Teambridge",children:[r.jsx("path",{d:"M66.4971 48.5203V58.6884C67.2261 59.1629 67.9007 59.5855 68.5508 59.9754L80.003 66.8496L84.2411 59.7409L72.789 52.8667C70.6209 51.5661 68.5073 50.1045 66.4998 48.523",fill:"currentColor"}),r.jsx("path",{d:"M80.0032 67.5995C79.8699 67.5995 79.7366 67.5641 79.6197 67.4932L68.1675 60.619C67.5065 60.2236 66.8292 59.7955 66.092 59.3183C65.8798 59.1792 65.752 58.9447 65.752 58.6911V48.5312C65.752 48.5121 65.752 48.493 65.752 48.4767C65.7764 48.0867 66.1001 47.7759 66.4973 47.7759C66.6823 47.7759 66.8509 47.844 66.9815 47.9558C68.9537 49.5101 71.0374 50.9471 73.17 52.2287L84.6222 59.1029C84.9758 59.3156 85.09 59.7737 84.8806 60.1309L80.6425 67.2396C80.5418 67.4086 80.3759 67.5341 80.1828 67.5804C80.1229 67.5968 80.0631 67.6022 80.0005 67.6022L80.0032 67.5995ZM67.2426 58.2821C67.8356 58.6639 68.3906 59.0102 68.9346 59.3347L79.7448 65.8244L83.2158 60L72.4029 53.5103C70.6375 52.4496 68.9074 51.288 67.2426 50.0391V58.2821Z",fill:"currentColor"}),r.jsx("path",{d:"M83.7788 39.1704C77.5032 35.1729 74.1628 32.7679 66.5081 23.396V36.4354C70.1124 39.7866 74.8184 43.3423 78.2785 45.6465L88.8656 52.0053L93.1554 44.8039L82.7125 38.5323L83.7788 39.1731V39.1704Z",fill:"currentColor"}),r.jsx("path",{d:"M88.8657 52.7632C88.7297 52.7632 88.5964 52.7277 88.4767 52.6568L77.8896 46.298C77.8896 46.298 77.8706 46.2871 77.8597 46.2789C74.6716 44.1575 69.8785 40.6045 65.9941 36.9942C65.839 36.8497 65.752 36.6479 65.752 36.438V23.3985C65.752 23.0795 65.9532 22.7932 66.2525 22.6841C66.5544 22.5751 66.889 22.6705 67.0903 22.9159C74.8049 32.356 78.08 34.6438 84.1761 38.5267L93.5418 44.152C93.9009 44.3674 94.0178 44.8337 93.8029 45.1909L89.5131 52.3923C89.4098 52.5641 89.2438 52.6895 89.048 52.7386C88.9881 52.755 88.9256 52.7604 88.863 52.7604L88.8657 52.7632ZM78.6812 45.0055L88.6073 50.9662L92.1218 45.0655L82.3263 39.1811C82.2501 39.1347 82.1848 39.0802 82.1332 39.0148C77.1252 35.7835 73.6787 33.1577 67.2644 25.4982V36.1026C71.0428 39.5765 75.7488 43.0504 78.6812 45.0028V45.0055Z",fill:"currentColor"}),r.jsx("path",{d:"M50.9436 78.6185H59.0608V31.6689C56.8846 36.9643 54.1562 42.0143 50.9436 46.6962V78.6185Z",fill:"currentColor"}),r.jsx("path",{d:"M59.0606 79.3953H50.9434C50.5381 79.3953 50.209 79.0463 50.209 78.6182V46.6959C50.209 46.5323 50.2579 46.3714 50.3504 46.2378C53.5277 41.605 56.2316 36.5986 58.3887 31.3578C58.5274 31.0197 58.8729 30.8342 59.2102 30.9079C59.5502 30.9842 59.7951 31.3005 59.7951 31.6686V78.6182C59.7951 79.049 59.4659 79.3953 59.0606 79.3953ZM51.6779 77.8383H58.3261V35.1998C56.4301 39.3036 54.2023 43.241 51.6779 46.9467V77.8383Z",fill:"currentColor"}),r.jsx("path",{d:"M34.4211 78.6186H43.0089V57.2571C40.3376 59.823 37.4515 62.2225 34.4211 64.3985V78.6186Z",fill:"currentColor"}),r.jsx("path",{d:"M42.4076 79.3954H34.3721C33.9722 79.3954 33.6458 79.0464 33.6458 78.6183V64.3982C33.6458 64.1473 33.7573 63.9128 33.9504 63.7656C36.7577 61.6114 39.4344 59.2337 41.9071 56.6951C42.1165 56.4796 42.4266 56.4169 42.6932 56.5424C42.9598 56.6651 43.1339 56.9459 43.1339 57.2568V78.6183C43.1339 79.0491 42.8102 79.3954 42.4076 79.3954ZM35.0984 77.8385H41.6813V59.0483C39.6003 61.0879 37.3942 63.0157 35.0984 64.7936V77.8357V77.8385Z",fill:"currentColor"}),r.jsx("path",{d:"M4.04653 54.0585L0.779541 46.6607C11.3395 41.9734 19.5355 35.8954 25.1446 28.5904C31.1726 20.74 34.2275 11.3818 34.2275 0.777344H42.2984C42.2984 24.5275 29.0699 42.9523 4.04653 54.0612V54.0585Z",fill:"currentColor"}),r.jsx("path",{d:"M4.04671 54.8354C3.95151 54.8354 3.8563 54.819 3.76653 54.7836C3.5734 54.71 3.42106 54.5627 3.33674 54.3718L0.0670215 46.9741C-0.107073 46.5815 0.0697417 46.1206 0.461455 45.9488C10.899 41.3161 18.9971 35.3144 24.5246 28.1158C30.4438 20.4044 33.4469 11.207 33.4469 0.77713C33.4469 0.3463 33.7951 0 34.2222 0H42.2931C42.7229 0 43.0684 0.349027 43.0684 0.77713C43.0684 24.86 29.6821 43.5302 4.3541 54.7727C4.25345 54.8163 4.14736 54.8381 4.04127 54.8381L4.04671 54.8354ZM1.80253 47.0532L4.44115 53.0303C28.4308 42.1477 41.2322 24.3746 41.5151 1.55426H34.9947C34.8479 12.0169 31.7414 21.2688 25.7569 29.0647C20.194 36.3097 12.1367 42.3577 1.79981 47.0559L1.80253 47.0532Z",fill:"currentColor"}),r.jsx("path",{d:"M10.7113 68.821L7.38721 61.4478C19.4514 55.9833 30.4221 47.1595 38.2781 36.6042C46.6047 25.4189 51.0033 13.0285 51.0033 0.7771H59.0743C59.0743 14.7873 54.1207 28.8492 44.7468 41.4442C36.0856 53.0793 23.9996 62.803 10.7113 68.821Z",fill:"currentColor"}),r.jsx("path",{d:"M10.7116 69.5981C10.6191 69.5981 10.5266 69.5817 10.4368 69.549C10.2437 69.4754 10.0887 69.3309 10.0043 69.1427L6.6802 61.7695C6.50339 61.3769 6.67748 60.9161 7.0692 60.7415C19.0164 55.3289 29.8783 46.595 37.6582 36.1433C45.8841 25.0944 50.2311 12.8649 50.2311 0.779816C50.2311 0.348986 50.5792 0.00268555 51.0063 0.00268555H59.0772C59.507 0.00268555 59.8525 0.351712 59.8525 0.779816C59.8525 14.959 54.8446 29.1819 45.37 41.9132C36.6326 53.6519 24.4379 63.4629 11.0299 69.5354C10.9292 69.5817 10.8204 69.6036 10.7116 69.6036V69.5981ZM8.41299 61.8322L11.0979 67.7875C23.9917 61.7995 35.6969 52.3022 44.1269 40.9779C53.226 28.7538 58.117 15.139 58.2965 1.55422H51.7761C51.5939 13.7211 47.1518 25.9861 38.9013 37.0704C31.1215 47.5249 20.3167 56.2942 8.41299 61.8322Z",fill:"currentColor"})]})}const Hd={role:"Roles",rateRule:"Rate rules",rateValue:"Pay rates",policy:"Policies",customField:"Custom fields",scheduling:"Scheduling",scoringRule:"Scoring rules",evaluation:"Evaluations",permission:"Permissions",user:"People"},Fi={add:"Add",update:"Update",remove:"Remove"},eS={high:"red",medium:"orange",low:"green"},tS={high:"High risk",medium:"Medium",low:"Low"},nm={ai:"Ultron",admin:"You",template:"Template"},io=[{key:"roles",label:"Roles",view:"table",domains:["role"],kind:"record"},{key:"jobs",label:"Jobs",view:"jobs",domains:["rateValue"],kind:"record"},{key:"placement",label:"Placement",view:"placement",domains:[],kind:"record"},{key:"users",label:"Users",view:"users",domains:[],kind:"record"},{key:"locations",label:"Locations",view:"locations",domains:[],kind:"record"},{key:"policies",label:"Policies",view:"cards",domains:["policy","rateRule"],kind:"tool"},{key:"scheduling",label:"Scheduling",view:"calendar",domains:["scheduling"],kind:"tool"},{key:"credentials",label:"Credentials",view:"table",domains:["customField"],kind:"record"},{key:"permissions",label:"Permissions",view:"permissions",domains:["permission"],kind:"tool"}],Gi=[{id:"job_icu_day",name:"ICU — Day shift",role:"Registered Nurse",payRate:"$48.00 / hr"},{id:"job_er_night",name:"ER — Night shift",role:"Charge Nurse",payRate:"$56.00 / hr"},{id:"job_medsurg_we",name:"Med-Surg — Weekend",role:"LPN",payRate:"$34.00 / hr"},{id:"job_float_prn",name:"Float pool — PRN",role:"CNA",payRate:"$22.00 / hr"}],rm=[{id:"usr_1001",name:"Alicia Nguyen",role:"Registered Nurse",workerType:"Per Diem",facility:"St. David's North",status:"Active"},{id:"usr_1002",name:"Marcus Bell",role:"Registered Nurse",workerType:"Travel",facility:"Baylor Grapevine",status:"Active"},{id:"usr_1003",name:"Priya Shah",role:"Charge Nurse",workerType:"Per Diem",facility:"St. David's North",status:"Active"},{id:"usr_1004",name:"Devon Carter",role:"Certified Nursing Assistant",workerType:"Per Diem",facility:"Methodist Dallas",status:"Active"},{id:"usr_1005",name:"Sofia Ramirez",role:"Registered Nurse",workerType:"Travel",facility:"Methodist Dallas",status:"On Assignment"},{id:"usr_1006",name:"James O'Connor",role:"Licensed Vocational Nurse",workerType:"Per Diem",facility:"Baylor Grapevine",status:"Active"},{id:"usr_1007",name:"Fatima Al-Rashid",role:"Registered Nurse",workerType:"Per Diem",facility:"St. David's North",status:"Inactive"},{id:"usr_1008",name:"Tyler Brooks",role:"Certified Nursing Assistant",workerType:"Travel",facility:"Methodist Dallas",status:"On Assignment"},{id:"usr_1009",name:"Grace Kim",role:"Charge Nurse",workerType:"Per Diem",facility:"Baylor Grapevine",status:"Active"},{id:"usr_1010",name:"Leon Whitfield",role:"Registered Nurse",workerType:"Travel",facility:"St. David's North",status:"Active"},{id:"usr_1011",name:"Hannah Torres",role:"Licensed Vocational Nurse",workerType:"Per Diem",facility:"Methodist Dallas",status:"Active"},{id:"usr_1012",name:"Omar Haddad",role:"Registered Nurse",workerType:"Per Diem",facility:"Baylor Grapevine",status:"Active"}],om=[{id:"fac_01",name:"St. David's North",city:"Austin",state:"TX",units:["ICU","Med-Surg","ED"],beds:320},{id:"fac_02",name:"Baylor Grapevine",city:"Grapevine",state:"TX",units:["Med-Surg","Telemetry","L&D"],beds:210},{id:"fac_03",name:"Methodist Dallas",city:"Dallas",state:"TX",units:["ICU","ED","Ortho","Med-Surg"],beds:585}],nS={jobs:Gi.length,placement:Gi.length,users:rm.length,locations:om.length};function rS({store:n,justAdded:a}){const s=v.useMemo(()=>{const k={};for(const b of io)k[b.key]=nS[b.view]??n.active.filter(j=>b.domains.includes(j.target.domain)).length;return k},[n.active]),[l,c]=v.useState(()=>(io.find(b=>n.active.some(j=>b.domains.includes(j.target.domain)))??io[0]).key),u=io.find(k=>k.key===l)??io[0],f=v.useMemo(()=>n.active.filter(k=>u.domains.includes(k.target.domain)),[n.active,u]),{recordCount:h,toolCount:g}=v.useMemo(()=>{const k=M=>io.filter(L=>L.kind===M).flatMap(L=>L.domains),b=k("record"),j=k("tool");return{recordCount:n.active.filter(M=>b.includes(M.target.domain)).length,toolCount:n.active.filter(M=>j.includes(M.target.domain)).length}},[n.active]),y=k=>n.append({op:k.op,target:{...k.target,ref:`${k.target.ref}.copy`,label:`${k.target.label} (copy)`},payload:k.payload,source:k.source}),w=v.useRef(0),C=k=>{const b=u.domains[0];n.append({op:"add",target:{domain:b,ref:`admin.${b}.${w.current++}`,label:k},source:"admin"})},_=k=>io.filter(b=>b.kind===k).map(b=>({id:b.key,label:b.label,trailingAction:"badge",badgeCount:s[b.key],selected:b.key===l,onClick:()=>c(b.key)})),N=[{id:"records",heading:"Data",options:_("record")},{id:"tools",heading:"Tools",options:_("tool")}];return r.jsx(SS,{children:r.jsxs(NS,{children:[r.jsx($S,{children:r.jsxs(LS,{children:[r.jsx(ra,{trigger:r.jsxs(MS,{type:"button","aria-label":`Switch page — showing ${u.label}`,children:[r.jsx(ES,{children:u.label}),r.jsx(tl,{variant:"neutral",children:s[l]}),r.jsx(RS,{"aria-hidden":"true",children:r.jsx(En,{size:18})})]}),groups:N,width:240,placement:"bottom-start"}),r.jsx(IS,{children:r.jsxs(TS,{children:[h," record type",h===1?"":"s"," · ",g," tool",g===1?"":"s"]})})]})}),r.jsx(AS,{children:u.view==="jobs"?r.jsx(sS,{jobs:Gi}):u.view==="placement"?r.jsx(lS,{jobs:Gi}):u.view==="users"?r.jsx(cS,{users:rm}):u.view==="locations"?r.jsx(dS,{locations:om}):u.view==="permissions"?r.jsx(fS,{entries:f,justAdded:a,onDelete:n.undoEntry,onDuplicate:y,onAdd:C}):u.view==="table"?r.jsx(aS,{entries:f,justAdded:a,onDelete:n.undoEntry,onDuplicate:y,onAdd:C,addNoun:u.label.replace(/s$/,"").toLowerCase()}):f.length===0?r.jsxs(dm,{children:["Nothing in ",u.label.toLowerCase()," yet. Changes here will appear as you build."]}):u.view==="cards"?r.jsx(kS,{entries:f,justAdded:a,onDelete:n.undoEntry,onDuplicate:y}):r.jsx(jS,{entries:f})})]})})}function oS({entry:n}){return r.jsx(vt,{size:"sm",variant:"subtle",color:eS[n.risk],children:tS[n.risk]})}function am({entry:n,onDelete:a,onDuplicate:s}){const l=[{id:"main",options:[{id:"duplicate",label:"Duplicate",leadingSlot:r.jsx(cs,{size:16}),onClick:()=>s(n)}]},{id:"danger",options:[{id:"delete",label:"Delete",destructive:!0,leadingSlot:r.jsx(ol,{size:16}),onClick:()=>a(n.id)}]}];return r.jsx(ra,{trigger:r.jsx(Ce,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Actions for ${n.target.label}`,children:r.jsx(iu,{size:16})}),groups:l,width:180,placement:"bottom-end"})}const th=["blue","azure","purple","pink","red","orange","yellow","matcha","green"];function fo(n){let a=0;for(let s=0;s<n.length;s++)a=a*31+n.charCodeAt(s)>>>0;return th[a%th.length]}function ps({size:n=14}){return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("path",{d:"M4 7C4 6.06812 4 5.60218 4.15224 5.23463C4.35523 4.74458 4.74458 4.35523 5.23463 4.15224C5.60218 4 6.06812 4 7 4H17C17.9319 4 18.3978 4 18.7654 4.15224C19.2554 4.35523 19.6448 4.74458 19.8478 5.23463C20 5.60218 20 6.06812 20 7M9 20H15M12 4V20",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function aS({entries:n,justAdded:a,onDelete:s,onDuplicate:l,onAdd:c,addNoun:u="item"}){const[f,h]=v.useState(!1),[g,y]=v.useState(""),w=()=>{h(!1),y("")},C=()=>{const _=g.trim();_&&c&&c(_),w()};return r.jsxs(fs,{children:[r.jsx(gs,{children:r.jsxs(aa,{size:"sm",children:[r.jsx(sa,{children:r.jsxs(on,{hoverable:!1,children:[r.jsx(ft,{children:r.jsxs(hs,{children:[r.jsx(ms,{"aria-hidden":"true",children:r.jsx(ps,{size:14})}),"Name"]})}),r.jsx(ft,{align:"right","aria-label":"Actions"})]})}),r.jsxs(ia,{children:[n.map(_=>r.jsxs(on,{"data-fresh":a.includes(_.id)||void 0,children:[r.jsx(ot,{children:r.jsx(vt,{size:"sm",variant:"subtle",color:fo(_.target.label),children:_.target.label})}),r.jsx(ot,{align:"right",compact:!0,children:r.jsx(am,{entry:_,onDelete:s,onDuplicate:l})})]},_.id)),f&&r.jsxs(on,{hoverable:!1,children:[r.jsx(ot,{children:r.jsx(im,{autoFocus:!0,value:g,placeholder:`New ${u} name`,"aria-label":`New ${u} name`,onChange:_=>y(_.target.value),onKeyDown:_=>{_.key==="Enter"?(_.preventDefault(),C()):_.key==="Escape"&&w()},onBlur:w})}),r.jsx(ot,{align:"right",compact:!0})]})]})]})}),c&&!f&&r.jsxs(cm,{type:"button",onClick:()=>h(!0),children:[r.jsx(sr,{size:14})," New ",u]})]})}function hl({subject:n,onDelete:a,onDuplicate:s}){const l=[{id:"main",options:[{id:"duplicate",label:"Duplicate",leadingSlot:r.jsx(cs,{size:16}),onClick:s}]},{id:"danger",options:[{id:"delete",label:"Delete",destructive:!0,leadingSlot:r.jsx(ol,{size:16}),onClick:a}]}];return r.jsx(ra,{trigger:r.jsx(Ce,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Actions for ${n}`,children:r.jsx(iu,{size:16})}),groups:l,width:180,placement:"bottom-end"})}function sS({jobs:n}){const[a,s]=v.useState(n),l=v.useRef(0),c=f=>s(h=>h.filter(g=>g.id!==f)),u=f=>s(h=>{const g=h.findIndex(w=>w.id===f.id),y={...f,id:`${f.id}.copy.${l.current++}`,name:`${f.name} (copy)`};return[...h.slice(0,g+1),y,...h.slice(g+1)]});return r.jsx(fs,{children:r.jsx(gs,{children:r.jsxs(aa,{size:"sm",children:[r.jsx(sa,{children:r.jsxs(on,{hoverable:!1,children:[r.jsx(ft,{children:r.jsxs(hs,{children:[r.jsx(ms,{"aria-hidden":"true",children:r.jsx(ps,{size:14})}),"Name"]})}),r.jsx(ft,{children:"Role"}),r.jsx(ft,{children:"Pay rate"}),r.jsx(ft,{align:"right","aria-label":"Actions"})]})}),r.jsx(ia,{children:a.map(f=>r.jsxs(on,{children:[r.jsx(ot,{children:r.jsx(yu,{children:f.name})}),r.jsx(ot,{children:r.jsx(vt,{size:"sm",variant:"subtle",color:fo(f.role),children:f.role})}),r.jsx(ot,{children:r.jsx(lm,{children:f.payRate})}),r.jsx(ot,{align:"right",compact:!0,children:r.jsx(hl,{subject:f.name,onDelete:()=>c(f.id),onDuplicate:()=>u(f)})})]},f.id))})]})})})}function iS(n){const[a,s]=n.name.split("—").map(c=>c.trim()),l=s?s===s.toUpperCase()?s:s.toLowerCase():"scheduled shifts";return`${n.role} covering ${l} in ${a}, paid at ${n.payRate}.`}function lS({jobs:n}){const[a,s]=v.useState(n),l=v.useRef(0),c=f=>s(h=>h.filter(g=>g.id!==f)),u=f=>s(h=>{const g=h.findIndex(w=>w.id===f.id),y={...f,id:`${f.id}.copy.${l.current++}`,name:`${f.name} (copy)`};return[...h.slice(0,g+1),y,...h.slice(g+1)]});return r.jsx(fs,{children:r.jsx(gs,{children:r.jsxs(aa,{size:"sm",children:[r.jsx(sa,{children:r.jsxs(on,{hoverable:!1,children:[r.jsx(ft,{children:r.jsxs(hs,{children:[r.jsx(ms,{"aria-hidden":"true",children:r.jsx(ps,{size:14})}),"Job"]})}),r.jsx(ft,{children:"Description"}),r.jsx(ft,{align:"right","aria-label":"Actions"})]})}),r.jsx(ia,{children:a.map(f=>r.jsxs(on,{children:[r.jsx(ot,{children:r.jsx(vt,{size:"sm",variant:"subtle",color:fo(f.name),children:f.name})}),r.jsx(ot,{children:r.jsx(zS,{children:iS(f)})}),r.jsx(ot,{align:"right",compact:!0,children:r.jsx(hl,{subject:f.name,onDelete:()=>c(f.id),onDuplicate:()=>u(f)})})]},f.id))})]})})})}function cS({users:n}){const[a,s]=v.useState(n),l=v.useRef(0),c=f=>s(h=>h.filter(g=>g.id!==f)),u=f=>s(h=>{const g=h.findIndex(w=>w.id===f.id),y={...f,id:`${f.id}.copy.${l.current++}`,name:`${f.name} (copy)`};return[...h.slice(0,g+1),y,...h.slice(g+1)]});return r.jsx(fs,{children:r.jsx(gs,{children:r.jsxs(aa,{size:"sm",children:[r.jsx(sa,{children:r.jsxs(on,{hoverable:!1,children:[r.jsx(ft,{children:r.jsxs(hs,{children:[r.jsx(ms,{"aria-hidden":"true",children:r.jsx(ps,{size:14})}),"Name"]})}),r.jsx(ft,{children:"Role"}),r.jsx(ft,{children:"Type"}),r.jsx(ft,{children:"Facility"}),r.jsx(ft,{align:"right","aria-label":"Actions"})]})}),r.jsx(ia,{children:a.map(f=>r.jsxs(on,{children:[r.jsx(ot,{children:r.jsxs(DS,{children:[r.jsx(Hn,{size:"sm",name:f.name,color:fo(f.name)}),r.jsx(yu,{children:f.name})]})}),r.jsx(ot,{children:r.jsx(vt,{size:"sm",variant:"subtle",color:fo(f.role),children:f.role})}),r.jsx(ot,{children:r.jsx(Wd,{children:f.workerType})}),r.jsx(ot,{children:r.jsx(Wd,{children:f.facility})}),r.jsx(ot,{align:"right",compact:!0,children:r.jsx(hl,{subject:f.name,onDelete:()=>c(f.id),onDuplicate:()=>u(f)})})]},f.id))})]})})})}function dS({locations:n}){const[a,s]=v.useState(n),l=v.useRef(0),c=f=>s(h=>h.filter(g=>g.id!==f)),u=f=>s(h=>{const g=h.findIndex(w=>w.id===f.id),y={...f,id:`${f.id}.copy.${l.current++}`,name:`${f.name} (copy)`};return[...h.slice(0,g+1),y,...h.slice(g+1)]});return r.jsx(fs,{children:r.jsx(gs,{children:r.jsxs(aa,{size:"sm",children:[r.jsx(sa,{children:r.jsxs(on,{hoverable:!1,children:[r.jsx(ft,{children:r.jsxs(hs,{children:[r.jsx(ms,{"aria-hidden":"true",children:r.jsx(ps,{size:14})}),"Name"]})}),r.jsx(ft,{children:"Location"}),r.jsx(ft,{children:"Units"}),r.jsx(ft,{children:"Beds"}),r.jsx(ft,{align:"right","aria-label":"Actions"})]})}),r.jsx(ia,{children:a.map(f=>r.jsxs(on,{children:[r.jsx(ot,{children:r.jsx(yu,{children:f.name})}),r.jsx(ot,{children:r.jsxs(Wd,{children:[f.city,", ",f.state]})}),r.jsx(ot,{children:r.jsx(PS,{children:f.units.map(h=>r.jsx(vt,{size:"sm",variant:"subtle",color:fo(h),children:h},h))})}),r.jsx(ot,{children:r.jsx(lm,{children:f.beds})}),r.jsx(ot,{align:"right",compact:!0,children:r.jsx(hl,{subject:f.name,onDelete:()=>c(f.id),onDuplicate:()=>u(f)})})]},f.id))})]})})})}const wd=[{initials:"TU",color:"purple"},{initials:"AL",color:"orange"},{initials:"PT",color:"blue"},{initials:"BD",color:"red"},{initials:"MD",color:"yellow"},{initials:"JD",color:"azure"},{initials:"TW",color:"blue"},{initials:"DC",color:"orange"},{initials:"AH",color:"orange"},{initials:"MA",color:"yellow"},{initials:"DR",color:"matcha"},{initials:"VM",color:"purple"}],uS=3;function pS(n){let a=0;for(let f=0;f<n.length;f++)a=a*31+n.charCodeAt(f)>>>0;const s=2+a%31,l=a%wd.length,c=Math.min(uS,s);return{shown:Array.from({length:c},(f,h)=>wd[(l+h)%wd.length]),overflow:s-c}}function fS({entries:n,justAdded:a,onDelete:s,onDuplicate:l,onAdd:c}){var k;const[u,f]=v.useState(null),h=u??((k=n[0])==null?void 0:k.id)??null,[g,y]=v.useState(!1),[w,C]=v.useState(""),_=()=>{y(!1),C("")},N=()=>{const b=w.trim();b&&c&&c(b),_()};return r.jsxs(BS,{children:[n.length>0&&r.jsx(OS,{children:n.map(b=>{const{shown:j,overflow:M}=pS(b.target.label),L=b.id===h;return r.jsxs(FS,{"data-fresh":a.includes(b.id)||void 0,children:[r.jsx(Hn,{size:"lg",shape:"square",variant:"solid",color:fo(b.target.label),icon:r.jsx(ls,{}),"aria-hidden":"true"}),r.jsx(HS,{children:b.target.label}),r.jsxs(WS,{"aria-label":`${j.length+M} members`,children:[j.map((I,D)=>r.jsx(VS,{children:r.jsx(Hn,{size:"sm",shape:"square",variant:"solid",color:I.color,initials:I.initials,"aria-hidden":"true"})},D)),M>0&&r.jsxs(US,{children:["+",M]})]}),r.jsx(qS,{"aria-hidden":"true"}),r.jsxs(GS,{children:[r.jsx(Ce,{variant:"tertiary",size:"sm",iconOnly:!0,"aria-label":`Delete ${b.target.label}`,onClick:()=>s(b.id),children:r.jsx(ol,{size:16})}),r.jsx(Ce,{variant:"tertiary",size:"sm",iconOnly:!0,"aria-label":`Duplicate ${b.target.label}`,onClick:()=>l(b),children:r.jsx(cs,{size:16})}),L?r.jsx(vt,{size:"md",variant:"subtle",color:"purple",children:"Default"}):r.jsx(Ce,{variant:"secondary",size:"sm",onClick:()=>f(b.id),children:"Make Default"}),r.jsx(Ce,{variant:"primary",size:"sm",children:"Edit"})]})]},b.id)})}),g?r.jsx(YS,{children:r.jsx(im,{autoFocus:!0,value:w,placeholder:"New permission name","aria-label":"New permission name",onChange:b=>C(b.target.value),onKeyDown:b=>{b.key==="Enter"?(b.preventDefault(),N()):b.key==="Escape"&&_()},onBlur:_})}):c?r.jsxs(cm,{type:"button",onClick:()=>y(!0),children:[r.jsx(sr,{size:14})," New permission"]}):null,n.length===0&&!g&&r.jsx(dm,{children:"No permissions yet. Add one to grant a group access."})]})}function hS({size:n=14}){return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function mS({size:n=14}){return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function gS({size:n=14}){return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("path",{d:"M2.39019 18.0986L10.6151 3.89195C11.0696 3.10679 11.2969 2.71421 11.5935 2.58235C11.8521 2.46734 12.1474 2.46734 12.4061 2.58235C12.7026 2.71421 12.9299 3.10679 13.3844 3.89195L21.6093 18.0986C22.0655 18.8866 22.2936 19.2806 22.2599 19.6039C22.2305 19.886 22.0827 20.1423 21.8534 20.309C21.5904 20.5002 21.1352 20.5002 20.2246 20.5002H3.77487C2.86435 20.5002 2.40908 20.5002 2.14613 20.309C1.91677 20.1423 1.769 19.886 1.73959 19.6039C1.70588 19.2806 1.93398 18.8866 2.39019 18.0986Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function vS({size:n=14}){return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("path",{d:"M11.223 2.43177C11.5066 2.27421 11.6484 2.19543 11.7985 2.16454C11.9315 2.13721 12.0685 2.13721 12.2015 2.16454C12.3516 2.19543 12.4934 2.27421 12.777 2.43177L20.177 6.54288C20.4766 6.70928 20.6263 6.79248 20.7354 6.91082C20.8318 7.01551 20.9049 7.13959 20.9495 7.27477C21 7.42756 21 7.59889 21 7.94153V16.0586C21 16.4013 21 16.5726 20.9495 16.7254C20.9049 16.8606 20.8318 16.9847 20.7354 17.0893C20.6263 17.2077 20.4766 17.2909 20.177 17.4573L12.777 21.5684C12.4934 21.726 12.3516 21.8047 12.2015 21.8356C12.0685 21.863 11.9315 21.863 11.7985 21.8356C11.6484 21.8047 11.5066 21.726 11.223 21.5684L3.82297 17.4573C3.52345 17.2909 3.37369 17.2077 3.26463 17.0893C3.16816 16.9847 3.09515 16.8606 3.05048 16.7254C3 16.5726 3 16.4013 3 16.0586V7.94153C3 7.59889 3 7.42756 3.05048 7.27477C3.09515 7.13959 3.16816 7.01551 3.26463 6.91082C3.37369 6.79248 3.52345 6.70928 3.82297 6.54288L11.223 2.43177Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function xS({size:n=14}){return r.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:r.jsx("path",{d:"M7.39137 2.46863C7.56432 2.29568 7.6508 2.2092 7.75172 2.14736C7.84119 2.09253 7.93873 2.05213 8.04077 2.02763C8.15586 2 8.27815 2 8.52274 2H15.4773C15.7218 2 15.8441 2 15.9592 2.02763C16.0613 2.05213 16.1588 2.09253 16.2483 2.14736C16.3492 2.2092 16.4357 2.29568 16.6086 2.46863L21.5314 7.39137C21.7043 7.56432 21.7908 7.6508 21.8526 7.75172C21.9075 7.84119 21.9479 7.93873 21.9724 8.04077C22 8.15586 22 8.27815 22 8.52274V15.4773C22 15.7218 22 15.8441 21.9724 15.9592C21.9479 16.0613 21.9075 16.1588 21.8526 16.2483C21.7908 16.3492 21.7043 16.4357 21.5314 16.6086L16.6086 21.5314C16.4357 21.7043 16.3492 21.7908 16.2483 21.8526C16.1588 21.9075 16.0613 21.9479 15.9592 21.9724C15.8441 22 15.7218 22 15.4773 22H8.52274C8.27815 22 8.15586 22 8.04077 21.9724C7.93873 21.9479 7.84119 21.9075 7.75172 21.8526C7.6508 21.7908 7.56432 21.7043 7.39137 21.5314L2.46863 16.6086C2.29568 16.4357 2.2092 16.3492 2.14736 16.2483C2.09253 16.1588 2.05213 16.0613 2.02763 15.9592C2 15.8441 2 15.7218 2 15.4773V8.52274C2 8.27815 2 8.15586 2.02763 8.04077C2.05213 7.93873 2.09253 7.84119 2.14736 7.75172C2.2092 7.6508 2.29568 7.56432 2.46863 7.39137L7.39137 2.46863Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}const sm=[{id:"optimize",label:"Optimize",description:"Schedule to minimize triggering this rule.",icon:hS,hue:"green"},{id:"flag",label:"Flag",description:"Allow it, but mark it in reports.",icon:mS,hue:"blue"},{id:"avoid",label:"Avoid",description:"Warn schedulers and steer around it.",icon:gS,hue:"yellow"},{id:"critical",label:"Critical",description:"Escalate — requires manager approval.",icon:vS,hue:"orange"},{id:"block",label:"Block",description:"Refuse schedules that would trigger it.",icon:xS,hue:"red"}],yS=Object.fromEntries(sm.map(n=>[n.id,n])),wS={"rate.ot":{description:"Higher pay once weekly hours cross the overtime threshold.",subs:[{text:"1.5× base rate after 40h in a week",action:"optimize"},{text:"Daily overtime after 8h in a shift",action:"flag"},{text:"Doubletime after 12h in a shift",action:"block"}]},"rate.differential":{description:"Added pay for evening, overnight, and weekend shift windows.",subs:[{text:"Evening (6pm–11pm) +$1.50/hr",action:"optimize"},{text:"Overnight (11pm–6am) +$2.50/hr",action:"flag"},{text:"Weekend +10% of base rate",action:"avoid"}]},"rate.event_premium":{description:"Premium rate on designated high-demand event days.",subs:[{text:"Game / show days +15%",action:"flag"},{text:"Holiday events +20%",action:"critical"}]},"policy.breaks":{description:"Mandated meal and rest periods for scheduled shifts.",subs:[{text:"30-minute unpaid meal after 5 hours",action:"block"},{text:"10-minute paid rest per 4 hours",action:"critical"}]}};function bS(n){const a=wS[n.target.ref??""];if(a)return a;const s=`${n.target.ref??""} ${n.target.label}`.toLowerCase();return/differential|night|evening|weekend/.test(s)?{description:"Added pay for less-desirable shift windows.",subs:[{text:"Evening & overnight uplift",action:"optimize"},{text:"Weekend premium",action:"flag"}]}:/\bovertime\b|\bot\b|40h|hours?/.test(s)?{description:"Higher pay once hours cross the overtime threshold.",subs:[{text:"1.5× base rate after 40h/week",action:"optimize"}]}:/premium|event|holiday|bonus/.test(s)?{description:"Premium rate on designated high-demand days.",subs:[{text:"Applies to flagged event days",action:"flag"}]}:/break|meal|rest|leave|pto|time off/.test(s)?{description:"Break and time-off rules applied to schedules.",subs:[{text:"Meal & rest periods",action:"critical"},{text:"Accrual on eligible shifts",action:"flag"}]}:n.target.domain==="rateRule"?{description:"Pay adjustment applied to matching shifts.",subs:[{text:"Applies to eligible roles",action:"flag"}]}:{description:"Workforce policy applied account-wide.",subs:[{text:"Applies to all locations",action:"flag"}]}}function _S({value:n,subText:a,onChange:s}){const l=yS[n],c=l.icon,u=[{id:"actions",options:sm.map(f=>{const h=f.icon;return{id:f.id,label:f.label,description:f.description,leadingSlot:r.jsx(cN,{$hue:f.hue,children:r.jsx(h,{size:16})}),selected:f.id===n,onClick:()=>s(f.id)}})}];return r.jsx(ra,{trigger:r.jsxs(iN,{type:"button",$hue:l.hue,"aria-label":`Action for "${a}": ${l.label}`,children:[r.jsx(c,{size:14}),l.label,r.jsx(lN,{"aria-hidden":"true",children:r.jsx(En,{size:12})})]}),groups:u,width:260,placement:"bottom-end"})}function kS({entries:n,justAdded:a,onDelete:s,onDuplicate:l}){const[c,u]=v.useState(()=>new Set),[f,h]=v.useState({}),g=y=>u(w=>{const C=new Set(w);return C.has(y)?C.delete(y):C.add(y),C});return r.jsx(ZS,{children:n.map(y=>{const w=bS(y),C=c.has(y.id),_=`policy-panel-${y.id}`;return r.jsxs(KS,{"data-fresh":a.includes(y.id)||void 0,children:[r.jsxs(QS,{children:[r.jsx(XS,{type:"button","aria-expanded":C,"aria-controls":_,onClick:()=>g(y.id),children:r.jsxs(eN,{children:[r.jsx(tN,{children:y.target.label}),r.jsx(nN,{children:w.description})]})}),r.jsx(am,{entry:y,onDelete:s,onDuplicate:l}),r.jsx(JS,{$open:C,"aria-hidden":"true",onClick:()=>g(y.id),children:r.jsx(En,{size:16})})]}),C&&r.jsx(rN,{id:_,role:"region","aria-label":`${y.target.label} sub-policies`,children:r.jsx(oN,{children:w.subs.map((N,k)=>{const b=`${y.id}:${k}`;return r.jsxs(aN,{children:[r.jsx(sN,{children:N.text}),r.jsx(_S,{value:f[b]??N.action,subText:N.text,onChange:j=>h(M=>({...M,[b]:j}))})]},k)})})})]},y.id)})})}const CS=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];function jS({entries:n}){return r.jsxs(dN,{children:[r.jsx(uN,{"aria-hidden":"true",children:CS.map(a=>r.jsx(pN,{children:a},a))}),r.jsx(fN,{children:n.map(a=>r.jsxs(hN,{children:[r.jsx(mN,{children:a.target.label}),r.jsx(oS,{entry:a})]},a.id))}),r.jsx(gN,{children:"Applied across the week — set specific shifts once the account is live."})]})}const SS=m.div`
  flex: 1;
  min-height: 0;
  display: flex;
  border: 1px solid var(--color-border-opaque);
  border-radius: 12px;
  overflow: hidden;
`,NS=m.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: var(--color-bg-secondary);
`,$S=m.div`
  flex-shrink: 0;
  padding: var(--space-3) var(--space-6);
  border-bottom: 1px solid var(--color-border-opaque);
`,LS=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`,MS=m.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-2);
  margin-left: calc(-1 * var(--space-2));
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-default);

  &:hover { background: var(--color-bg-tertiary); }
  &:focus-visible { outline: 2px solid var(--color-border-focus); outline-offset: 1px; }
`,ES=m.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,RS=m.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
`,IS=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,TS=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,AS=m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-6);
`,fs=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,im=m.input`
  all: unset;
  width: 100%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-primary);

  &::placeholder { color: var(--color-content-tertiary); }
`,yu=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-primary);
`,zS=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,Wd=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
`,DS=m.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
`,PS=m.span`
  display: inline-flex;
  flex-wrap: wrap;
  gap: var(--space-1);
`,lm=m.span`
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
`,hs=m.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
`,ms=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-5);
  height: var(--space-5);
  color: var(--color-content-secondary);
`,gs=m.div`
  & thead tr,
  & thead th,
  & tbody tr {
    background: transparent;
  }

  /* The final row keeps its divider — it draws the line between the list and
     the trailing "+ New …" add-row button. */
`,cm=m.button`
  all: unset;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-2);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  transition: color var(--duration-fast) var(--ease-default);

  &:hover { color: var(--color-content-primary); }
  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
  }
`,dm=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,um=`
  animation: none;
  &[data-fresh] {
    box-shadow: 0 0 0 1px var(--color-info-border), 0 0 0 4px var(--color-info-bg);
  }
`,BS=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,OS=m.div`
  display: flex;
  flex-direction: column;
`,FS=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-2);
  border-radius: var(--radius-md);
  transition: background var(--duration-fast) var(--ease-default);
  ${um}

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }

  &:hover { background: var(--color-bg-primary); }
`,HS=m.span`
  min-width: 0;
  flex-shrink: 1;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,WS=m.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`,VS=m.span`
  display: inline-flex;
  border-radius: var(--radius-sm);
  /* Ring in the pane bg so overlapping avatars read as separate discs. */
  box-shadow: 0 0 0 2px var(--color-bg-secondary);

  & + & { margin-left: calc(-1 * var(--space-2)); }
`,US=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: calc(-1 * var(--space-2));
  min-width: var(--space-6);
  height: var(--space-6);
  padding: 0 var(--space-1);
  border-radius: var(--radius-sm);
  background: var(--color-content-primary);
  color: var(--color-bg-primary);
  box-shadow: 0 0 0 2px var(--color-bg-secondary);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
`,qS=m.div`
  flex: 1;
  min-width: var(--space-4);
`,GS=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`,YS=m.div`
  padding: var(--space-3) var(--space-2);
`,ZS=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,KS=m.div`
  position: relative;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  overflow: hidden;
  ${um}

  /* When a row's action menu is open, drop the rounded-corner clip and lift the
     card so the dropdown escapes the edge and paints above sibling cards. */
  &:has([data-open]) {
    overflow: visible;
    z-index: 2;
  }
`,QS=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding-right: var(--space-3);
  transition: background var(--duration-fast) var(--ease-default);

  /* Hover shifts the whole header row, not just the trigger button. */
  &:hover { background: var(--color-bg-secondary); }
`,XS=m.button`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;

  &:focus-visible { outline: 2px solid var(--color-border-focus); outline-offset: -2px; }
`,JS=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  align-self: center;
  /* 24px slot around the 16px glyph — a consistent hit target. */
  width: var(--space-6);
  height: var(--space-6);
  cursor: pointer;
  color: var(--color-content-tertiary);
  transform: rotate(${n=>n.$open?"180deg":"0deg"});
  transition: transform var(--duration-fast) var(--ease-default);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,eN=m.span`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,tN=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,nN=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,rN=m.div`
  /* Tight, symmetric vertical padding — the sub-policy rows carry their own
     8px, so the panel only needs a small equal breath above and below. */
  padding: var(--space-1) var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`,oN=m.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`,aN=m.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) 0;

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`,sN=m.span`
  min-width: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,iN=m.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-shrink: 0;
  padding: var(--space-1) var(--space-2);
  border: 1px solid transparent;
  border-radius: var(--radius-full);
  /* bg-tertiary is the hue's soft tint (50-stop; bg-secondary is the saturated
     500 fill) — the chip should read as a quiet tinted pill, not a solid. */
  background: ${n=>`var(--color-${n.$hue}-bg-tertiary)`};
  color: ${n=>`var(--color-${n.$hue}-content-primary)`};
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: border-color var(--duration-fast) var(--ease-default);

  &:hover {
    border-color: ${n=>`var(--color-${n.$hue}-border-secondary)`};
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 1px;
  }
`,lN=m.span`
  display: inline-flex;
  align-items: center;
  opacity: 0.7;
`,cN=m.span`
  display: inline-flex;
  align-items: center;
  color: ${n=>`var(--color-${n.$hue}-content-primary)`};
`,dN=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,uN=m.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: var(--space-1);
`,pN=m.div`
  padding: var(--space-2) 0;
  text-align: center;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-sm);
`,fN=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,hN=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: var(--color-info-bg);
  border: 1px solid var(--color-info-border);
  border-radius: var(--radius-md);
`,mN=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,gN=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,ml=n=>n.filter(a=>!a.undone).sort((a,s)=>a.seq-s.seq),vN=n=>ml(n).every(a=>a.resolution!=="unresolved"),xN=n=>{const a=ml(n);return{auto:a.filter(s=>s.gateBehavior==="auto"),notify:a.filter(s=>s.gateBehavior==="notify"),gate:a.filter(s=>s.gateBehavior==="gate")}},yN=n=>ml(n).filter(a=>!a.exec||a.exec.state==="pending"||a.exec.state==="failed"),pm=n=>{switch(n){case"rateValue":case"rateRule":case"permission":case"user":return{risk:"high",gateBehavior:"gate"};case"scoringRule":case"evaluation":return{risk:"medium",gateBehavior:"notify"};default:return{risk:"low",gateBehavior:"auto"}}},nh=[{id:"tpl_medical_staffing",name:"Medical Staffing",industry:"Healthcare",match:94,rationale:"You run credentialed teams around the clock with shift differentials — this template ships the clinical roles, an overtime + evening/night/weekend differential rate structure, license tracking, and multi-unit scheduling out of the box.",tags:["24/7 shifts","Credentialed","Shift differentials","Multi-unit"],sections:[{key:"roles",title:"Roles",lines:[{domain:"role",label:"Charge Nurse",detail:"Credentialed · manager tier"},{domain:"role",label:"Registered Nurse",detail:"Credentialed"},{domain:"role",label:"LPN",detail:"Credentialed"},{domain:"role",label:"CNA",detail:"Hourly"}]},{key:"rates",title:"Rate rules",lines:[{domain:"rateRule",label:"Overtime",detail:"After 40h/week"},{domain:"rateRule",label:"Shift differential",detail:"Evening / night / weekend"},{domain:"rateValue",label:"Base hourly rate",locked:!0},{domain:"rateValue",label:"Differential rate",locked:!0}]},{key:"policies",title:"Policies",lines:[{domain:"customField",label:"License / credential tracking"},{domain:"policy",label:"Meal & rest breaks",detail:"State default"},{domain:"permission",label:"Charge-nurse approvals"}]}],seed:[{op:"add",domain:"role",ref:"role.charge_nurse",label:"Charge Nurse"},{op:"add",domain:"role",ref:"role.rn",label:"Registered Nurse"},{op:"add",domain:"role",ref:"role.lpn",label:"LPN"},{op:"add",domain:"role",ref:"role.cna",label:"CNA"},{op:"add",domain:"rateRule",ref:"rate.ot",label:"Overtime — after 40h/week"},{op:"add",domain:"rateRule",ref:"rate.differential",label:"Shift differential — evening / night / weekend"},{op:"add",domain:"rateValue",ref:"rate.base",label:"Base hourly rate"},{op:"add",domain:"rateValue",ref:"rate.diff",label:"Differential rate"},{op:"add",domain:"customField",ref:"cf.credentials",label:"License / credential tracking"},{op:"add",domain:"policy",ref:"policy.breaks",label:"Meal & rest breaks"},{op:"add",domain:"permission",ref:"perm.charge_approvals",label:"Charge-nurse approvals"},{op:"add",domain:"scheduling",ref:"sched.multiunit",label:"Multi-unit scheduling"}]},{id:"tpl_stadium_events",name:"Live Event & Stadium",industry:"Live events & venues",match:82,rationale:"Event-day surges staffed by large, mostly-hourly crews — this template ships the game-day roles, an event-day premium + overtime rate structure, certification tracking for security and alcohol service, and event-based scheduling.",tags:["Event-based","Large crews","Event premium","Certified"],sections:[{key:"roles",title:"Roles",lines:[{domain:"role",label:"Event Manager",detail:"Manager tier"},{domain:"role",label:"Usher",detail:"Hourly"},{domain:"role",label:"Ticket Scanner",detail:"Hourly"},{domain:"role",label:"Concessions",detail:"Hourly + tips"},{domain:"role",label:"Event Security",detail:"Certified"}]},{key:"rates",title:"Rate rules",lines:[{domain:"rateRule",label:"Overtime",detail:"After 40h/week"},{domain:"rateRule",label:"Event-day premium",detail:"Game / show days"},{domain:"rateValue",label:"Base hourly rate",locked:!0},{domain:"rateValue",label:"Event premium rate",locked:!0}]},{key:"policies",title:"Policies",lines:[{domain:"customField",label:"Certification tracking",detail:"Security · alcohol service"},{domain:"policy",label:"Meal & rest breaks",detail:"State default"},{domain:"permission",label:"Manager approvals"}]}],seed:[{op:"add",domain:"role",ref:"role.event_manager",label:"Event Manager"},{op:"add",domain:"role",ref:"role.usher",label:"Usher"},{op:"add",domain:"role",ref:"role.ticket_scanner",label:"Ticket Scanner"},{op:"add",domain:"role",ref:"role.concessions",label:"Concessions"},{op:"add",domain:"role",ref:"role.event_security",label:"Event Security"},{op:"add",domain:"rateRule",ref:"rate.ot",label:"Overtime — after 40h/week"},{op:"add",domain:"rateRule",ref:"rate.event_premium",label:"Event-day premium"},{op:"add",domain:"rateValue",ref:"rate.base",label:"Base hourly rate"},{op:"add",domain:"rateValue",ref:"rate.event_rate",label:"Event premium rate"},{op:"add",domain:"customField",ref:"cf.certifications",label:"Certification tracking"},{op:"add",domain:"policy",ref:"policy.breaks",label:"Meal & rest breaks"},{op:"add",domain:"permission",ref:"perm.manager_approvals",label:"Manager approvals"},{op:"add",domain:"scheduling",ref:"sched.event",label:"Event-based scheduling"}]},{id:"tpl_retail",name:"Retail & Storefront",industry:"Retail",match:61,rationale:"A leaner storefront template — hourly associates, a single overtime rule, and standard break policies. A good fit if scheduling is simpler and there is no shift-differential structure.",tags:["Hourly","Storefront","Overtime"],sections:[{key:"roles",title:"Roles",lines:[{domain:"role",label:"Store Manager",detail:"Salaried"},{domain:"role",label:"Sales Associate",detail:"Hourly"}]},{key:"rates",title:"Rate rules",lines:[{domain:"rateRule",label:"Overtime",detail:"After 40h/week"},{domain:"rateValue",label:"Base hourly rate",locked:!0}]},{key:"policies",title:"Policies",lines:[{domain:"policy",label:"Meal & rest breaks",detail:"State default"}]}],seed:[{op:"add",domain:"role",ref:"role.store_manager",label:"Store Manager"},{op:"add",domain:"role",ref:"role.sales_associate",label:"Sales Associate"},{op:"add",domain:"rateRule",ref:"rate.ot",label:"Overtime — after 40h/week"},{op:"add",domain:"rateValue",ref:"rate.base",label:"Base hourly rate"},{op:"add",domain:"policy",ref:"policy.breaks",label:"Meal & rest breaks"}]}],Uo="Healthcare staffing",bd="Hospitality",_d="Construction",kd="Staffing",Cd="Enterprise multi-site",wN={anesthesia:{id:"rec_anesthesia",name:"Anesthesia Staffing",vertical:Uo,match:91,baseId:"tpl_medical_staffing",rationale:"CRNA and anesthesiologist coverage with case-based scheduling, stipends, and tight credential gating — the roles, differential structure, and license tracking ship configured for the OR.",tags:["Case-based","CRNA / MD","Credential-gated","Stipends"]},ltc:{id:"rec_ltc",name:"Long-Term Care Nursing",vertical:Uo,match:94,baseId:"tpl_medical_staffing",rationale:"Resident-facing care around the clock with hard staffing ratios — 24/7 rotating shifts, evening/night/weekend differentials, and CNA/med-tech certification tracking out of the box.",tags:["24/7 ratios","CNA / med tech","Shift differentials","Certification tracking"]},travel:{id:"rec_travel",name:"Travel Nursing",vertical:Uo,match:93,baseId:"tpl_medical_staffing",rationale:"Contract clinicians on 8–13 week assignments across facilities — per-assignment pay packages, multi-facility credential holds, and float-pool scheduling ship configured.",tags:["Contract","Multi-facility","Pay packages","Credential holds"]},allied:{id:"rec_allied",name:"Allied Health Per-Diem",vertical:Uo,match:88,baseId:"tpl_medical_staffing",rationale:"Per-diem techs and therapists self-scheduling open shifts — light-touch onboarding, competency gating, and shift differentials tuned for a large, uneven float pool.",tags:["Per-diem","Self-scheduling","Competency-gated","Float pool"]},federal:{id:"rec_federal",name:"Federal / Military Healthcare",vertical:Uo,match:82,baseId:"tpl_medical_staffing",rationale:"Contract clinicians on government sites — clearance and contract-compliance tracking, prevailing-wage rates, and site-based scheduling ship configured.",tags:["Cleared","Contract-compliant","Prevailing wage","Site-based"]},homehealth:{id:"rec_homehealth",name:"Home Health",vertical:Uo,match:92,baseId:"tpl_medical_staffing",rationale:"Field clinicians on visit-based routes — drive-time and mileage, an on-call after-hours pool, and RN/LPN license + CPR tracking ship configured for in-home care.",tags:["Visit-based","Drive-time","On-call pool","License tracking"]},hotel:{id:"rec_hotel",name:"Hotel Multi-Property",vertical:bd,match:90,baseId:"tpl_stadium_events",rationale:"Housekeeping, front desk, and F&B across properties — occupancy-driven scheduling, cross-property coverage, and tip handling ship configured.",tags:["Multi-property","Occupancy-driven","Cross-coverage","Tips"]},fnb:{id:"rec_fnb",name:"Food & Beverage",vertical:bd,match:87,baseId:"tpl_stadium_events",rationale:"Front- and back-of-house crews on demand-based shifts — tip pooling, alcohol-service certification, and split shifts ship configured.",tags:["Demand-based","Tip pooling","Certified","Split shifts"]},events:{id:"rec_events",name:"Events / Banquet",vertical:bd,match:89,baseId:"tpl_stadium_events",rationale:"Event-day surges staffed by large hourly crews — event-based scheduling, event-day premiums, and certification tracking ship configured.",tags:["Event-based","Large crews","Event premium","Certified"]},trades:{id:"rec_trades",name:"Trades Subcontracting",vertical:_d,match:85,baseId:"tpl_stadium_events",rationale:"Skilled trades dispatched to job sites — certification tracking, per-site scheduling, and overtime rules ship configured for subcontracted crews.",tags:["Job-site","Certified trades","Per-site","Overtime"]},crews:{id:"rec_crews",name:"Project-Based Crews",vertical:_d,match:83,baseId:"tpl_stadium_events",rationale:"Crews assigned to projects with start/end dates — project-based scheduling, crew rosters, and coverage rules ship configured.",tags:["Project-based","Crew rosters","Coverage","Overtime"]},union:{id:"rec_union",name:"Union / Prevailing-Wage",vertical:_d,match:80,baseId:"tpl_stadium_events",rationale:"Union crews on prevailing-wage jobs — wage-scale rates, certified-payroll tracking, and classification-based scheduling ship configured.",tags:["Prevailing wage","Certified payroll","Classifications","Union"]},light:{id:"rec_light",name:"Light Industrial",vertical:kd,match:86,baseId:"tpl_stadium_events",rationale:"Warehouse and production crews against client orders — order-based scheduling, attendance tracking, and overtime-risk rules ship configured.",tags:["Order-based","Attendance","Overtime risk","High volume"]},clerical:{id:"rec_clerical",name:"Clerical / Admin",vertical:kd,match:81,baseId:"tpl_stadium_events",rationale:"Office and admin placements on client assignments — assignment scheduling, timesheet approvals, and skills tracking ship configured.",tags:["Assignment-based","Timesheets","Skills","Placements"]},warehouse:{id:"rec_warehouse",name:"Warehouse / Logistics",vertical:kd,match:84,baseId:"tpl_stadium_events",rationale:"Dock and fulfillment crews across shifts — shift-based scheduling, dock coverage rules, and overtime handling ship configured.",tags:["Shift-based","Dock coverage","Overtime","High volume"]},retail:{id:"rec_retail",name:"Retail Chains",vertical:Cd,match:85,baseId:"tpl_retail",rationale:"Store teams across a chain — traffic-driven scheduling, per-store coverage, and labor-budget rules ship configured.",tags:["Multi-store","Traffic-driven","Labor budget","Coverage"]},franchise:{id:"rec_franchise",name:"Franchise Networks",vertical:Cd,match:82,baseId:"tpl_retail",rationale:"Independently-run locations under one brand — per-location scheduling with shared standards and roll-up reporting ship configured.",tags:["Per-location","Shared standards","Roll-up","Distributed"]},distributed:{id:"rec_distributed",name:"Distributed Facilities",vertical:Cd,match:80,baseId:"tpl_retail",rationale:"Cleaning and building-services crews across many sites — route-based scheduling, per-site coverage, and quality checks ship configured.",tags:["Route-based","Many sites","Coverage","Quality checks"]}};function bN(n){return{...nh.find(s=>s.id===n.baseId)??nh[0],id:n.id,name:n.name,industry:n.vertical,match:n.match,rationale:n.rationale,tags:n.tags}}let _N=0;const Rr=n=>`ai.${n}.${(_N++).toString(36)}`,kN=[{test:/night|overnight|graveyard/i,build:()=>({reply:"Added a night-differential rate rule. Set the multiplier during sign-off — it touches pay, so it needs your approval.",draft:{op:"add",target:{domain:"rateRule",ref:Rr("rateRule"),label:"Night differential rule"},source:"ai"}})},{test:/\b(pay|rate|wage|\$\d|per hour|hourly rate|multiplier)\b/i,build:n=>({reply:"Drafted a pay-rate change. Money is always gated — you'll set the value on the sign-off screen.",draft:{op:"update",target:{domain:"rateValue",ref:Rr("rateValue"),label:Ar(n,"Pay rate")},source:"ai"}})},{test:/\b(role|position|job title|manager|cook|server|nurse|associate|driver)\b/i,build:n=>({reply:"Added the role to your account draft.",draft:{op:"add",target:{domain:"role",ref:Rr("role"),label:Ar(n,"New role")},source:"ai"}})},{test:/\b(permission|access|approve|approval|admin)\b/i,build:n=>({reply:"Drafted a permission change. Access changes are gated — confirm it before we provision.",draft:{op:"add",target:{domain:"permission",ref:Rr("permission"),label:Ar(n,"Permission")},source:"ai"}})},{test:/\b(pto|time off|vacation|sick|holiday|break|policy|leave)\b/i,build:n=>({reply:"Added that policy to the draft.",draft:{op:"add",target:{domain:"policy",ref:Rr("policy"),label:Ar(n,"Policy")},source:"ai"}})},{test:/\b(field|track|custom|license|credential|certification)\b/i,build:n=>({reply:"Added a custom field to track that.",draft:{op:"add",target:{domain:"customField",ref:Rr("customField"),label:Ar(n,"Custom field")},source:"ai"}})},{test:/\b(schedul|shift|coverage|rota)\b/i,build:n=>({reply:"Adjusted your scheduling setup.",draft:{op:"update",target:{domain:"scheduling",ref:Rr("scheduling"),label:Ar(n,"Scheduling")},source:"ai"}})},{test:/\b(score|scoring|rank|rating|evaluat|review)\b/i,build:n=>({reply:"Drafted a scoring rule — it's built, but flagged for your review in the summary.",draft:{op:"add",target:{domain:"scoringRule",ref:Rr("scoringRule"),label:Ar(n,"Scoring rule")},source:"ai"}})}];function Ar(n,a){const s=n.trim().replace(/\s+/g," ");if(s.length===0)return a;const l=s.length>42?s.slice(0,42)+"…":s;return l.charAt(0).toUpperCase()+l.slice(1)}function CN(n){const a=[],s=[];for(const h of kN)if(h.test.test(n)){const{reply:g,draft:y}=h.build(n);a.push(y),s.push(g)}const l=`Read your instruction: "${Ar(n,"your instruction")}"`;if(a.length===0)return{reply:`I couldn't map that to a concrete account change yet. Try naming a role, a pay rule, a policy, or a permission — e.g. "add a night-shift differential" or "create a Dispatcher role".`,drafts:[],work:[l,"Searched the account model for a matching role, pay rule, policy, or permission.","Found no concrete target — held off rather than guess at the change."]};const c=a.filter(h=>pm(h.target.domain).gateBehavior==="gate"),u=h=>h.map(g=>jN[g.target.domain]).join(", "),f=[l,`Mapped it to ${a.length} account ${a.length===1?"change":"changes"}: ${u(a)}.`,...c.length?[`Held the pay & access pieces (${u(c)}) for your sign-off before anything provisions.`]:[],"Staged the change on the account draft — nothing goes live until you review."];return{reply:s.join(" "),drafts:a,work:f}}const jN={role:"a role",rateRule:"a pay rule",rateValue:"a pay rate",policy:"a policy",customField:"a custom field",scheduling:"a scheduling update",scoringRule:"a scoring rule",evaluation:"an evaluation rule",permission:"a permission",user:"a user"},SN=["Add a night-shift differential","Create a Dispatcher role","Give Shift Leads approval permission","Track food-handler certifications"],NN={"Healthcare staffing":["Add a night-shift differential","Create a Charge Nurse role","Track CPR certifications","Give Charge Nurses approval permission"],Hospitality:["Add an event-day pay premium","Create a Banquet Server role","Track alcohol-service certifications","Add a tip-pooling policy"],Construction:["Add prevailing-wage rates","Create a Site Foreman role","Track OSHA certifications","Give Foremen timesheet approval permission"],Staffing:["Create a Forklift Operator role","Add weekend shift coverage","Track attendance","Give Supervisors approval permission"],"Enterprise multi-site":["Create a Store Manager role","Add a holiday time-off policy","Track food-handler certifications","Adjust weekend coverage scheduling"]};function $N(n){return n&&NN[n]||SN}const LN=560,fm=320,MN=1300,EN=2400,wu="cubic-bezier(0.22, 1, 0.36, 1)",RN=140,IN=[{id:"build",icon:ls,title:"Build a specific workforce",detail:"I know the team I'm setting up — let's get scheduling, pay, and compliance in place."},{id:"solve",icon:Ph,title:"Solve a specific problem",detail:"I've got a pain point and want to see if Teambridge is the right fit for it."},{id:"explore",icon:ru,title:"Just exploring",detail:"Kicking the tires to see what Teambridge can actually do."}],rh=["workplace"];function TN({store:n,onSeedTemplate:a,onComplete:s}){const[l,c]=v.useState("greeting"),[u,f]=v.useState({}),[h,g]=v.useState(!1),[y,w]=v.useState(!1),[C,_]=v.useState(!1),N=bu(),k=v.useRef(null),b=v.useCallback(E=>{k.current===null&&(_(!0),k.current=window.setTimeout(()=>{E(),_(!1),k.current=null},N?0:fm))},[N]);v.useEffect(()=>()=>{k.current!==null&&window.clearTimeout(k.current)},[]);const j=E=>{f(B=>({...B,intent:E})),w(!0),b(()=>c("questions"))},M=E=>{const B={...u,...E};f(B),b(()=>c("build"))},L=E=>{f(B=>({...B,template:E})),a(E),g(!0)},I=y?1:l==="greeting"?0:.4,D=l==="build"?2:y?1:0;return r.jsxs(JN,{children:[r.jsx(Xj,{links:I}),l!=="build"&&r.jsx(e$,{children:r.jsx(Fd,{size:22})}),l==="questions"&&r.jsx(t$,{children:r.jsx(Ce,{variant:"tertiary",size:"md",leadingArtwork:r.jsx(nl,{size:16}),onClick:()=>b(()=>c("intent")),children:"Back"})}),r.jsx(n$,{$augment:h,children:r.jsxs(r$,{$build:l==="build",$augment:h,children:[l!=="build"&&r.jsx(o$,{children:r.jsx(a$,{children:r.jsx(os,{mark:"circle",size:RN,tone:"auto",state:"active",streamCount:D,"aria-label":"Ultron"})})}),r.jsxs(i$,{$exiting:C,$augment:h,children:[l==="greeting"&&r.jsx(DN,{onNext:()=>b(()=>c("intent"))}),l==="intent"&&r.jsx(PN,{selected:u.intent,onChoose:j}),l==="questions"&&r.jsx(BN,{onComplete:M}),l==="build"&&(u.companyWebsite||u.companyName||u.failedWebsite)&&r.jsx(ZN,{website:u.companyWebsite,companyName:u.companyName,failedWebsite:u.failedWebsite,store:n,augmenting:h,onEnterAugment:L,onComplete:s})]})]})})]})}const oh=["Hello! I'm your Teambridge workforce co-pilot.","Hi there! I'm the co-pilot behind your frontline operation.","Welcome! Let's build the operation that runs your workforce.","Hello! Ready to put your workforce operation on autopilot?","Hey there! Your workforce co-pilot, ready when you are."],AN="Together, we'll set up the tools that run your frontline — scheduling, pay, and compliance — then I keep watch, catching risks early and handling the busywork.",zN="But first, a bit of context to make sure we're building the right things.";function DN({onNext:n}){const[a,s]=v.useState(!1),[l]=v.useState(()=>oh[Math.floor(Math.random()*oh.length)]),c=bu();return v.useEffect(()=>{const u=window.setTimeout(()=>s(!0),c?0:500);return()=>window.clearTimeout(u)},[c]),r.jsxs(l$,{children:[r.jsx(u$,{children:l}),a&&r.jsxs(c$,{children:[r.jsx(ih,{children:AN}),r.jsx(ih,{children:zN}),r.jsx(d$,{children:r.jsx(Ce,{variant:"primary",size:"md",trailingArtwork:r.jsx(is,{size:16}),onClick:n,children:"Get started"})})]})]})}function PN({selected:n,onChoose:a}){return r.jsxs(_u,{children:[r.jsx(mm,{children:"What brings you to Teambridge today?"}),r.jsx(gm,{children:"Pick whatever's closest — it just helps me tailor the setup."}),r.jsx(vm,{role:"radiogroup","aria-label":"What brings you to Teambridge today?",children:IN.map(s=>{const l=s.icon,c=n===s.id;return r.jsxs(m$,{type:"button",role:"radio","aria-checked":c,"data-selected":c||void 0,onClick:()=>a(s.id),children:[r.jsx(g$,{"aria-hidden":"true",children:r.jsx(l,{size:20})}),r.jsx(v$,{children:s.title}),r.jsx(x$,{children:s.detail})]},s.id)})})]})}function BN({onComplete:n}){const[a,s]=v.useState(0),l=v.useRef({}),c=f=>{l.current={...l.current,...f};const h=a+1;h>=rh.length?n(l.current):s(h)},u=rh[a];return r.jsx(_u,{children:u==="workplace"&&r.jsx(ON,{onAnswer:c})},u)}function ON({onAnswer:n}){const[a,s]=v.useState("website"),[l,c]=v.useState(""),u=v.useRef(null),f=l.trim().length>0,h=()=>{const w=l.trim();if(w){if(a==="website"){if(!UN(w)){n({failedWebsite:w});return}n({companyWebsite:w});return}n({companyName:w})}},g=w=>{s(w),c(""),requestAnimationFrame(()=>{var C;return(C=u.current)==null?void 0:C.focus()})},y=w=>c(w);return r.jsxs(r.Fragment,{children:[r.jsx(mm,{children:"Where do you work?"}),r.jsx(h$,{children:a==="website"?"Paste your company website and I'll learn what I can about your operation.":"No problem — just tell me your company's name and we'll take it from there."},a),r.jsx(gl,{onSubmit:w=>{w.preventDefault(),h()},children:r.jsxs(Yi,{children:[r.jsx(w$,{"aria-hidden":"true",children:a==="website"?r.jsx(Gh,{size:18}):r.jsx(su,{size:18})},a),r.jsx(Vd,{ref:u,rows:1,value:l,placeholder:a==="website"?"yourcompany.com":"Your company name","aria-label":a==="website"?"Company website":"Company name",onChange:w=>y(w.target.value),onKeyDown:w=>{w.key==="Enter"&&!w.shiftKey&&(w.preventDefault(),h())}}),r.jsx(Yo,{children:r.jsx(Zo,{state:f?"ready":"disabled-invalid",onSend:h})})]})}),r.jsx(b$,{children:a==="website"?r.jsx(ph,{type:"button",onClick:()=>g("name"),children:"I don't have a website"}):r.jsx(ph,{type:"button",onClick:()=>g("website"),children:"Enter a website instead"})})]})}const hm=[{id:"events",icon:au,title:"Events",detail:"Venues, concessions, ushers, security, and game-day crew."},{id:"healthcare",icon:Zh,title:"Healthcare",detail:"Credentialed clinicians, float pools, facilities, and shift coverage."},{id:"staffing",icon:ls,title:"Staffing",detail:"Orders, candidate availability, placements, and first-shift readiness."},{id:"hospitality",icon:nu,title:"Hospitality",detail:"Housekeeping, front desk, food service, and room-turn labor."},{id:"longterm",icon:qh,title:"Long Term Care",detail:"Facility staffing, care ratios, certifications, and compliance."},{id:"security",icon:zh,title:"Security",detail:"Posts, patrol routes, site coverage, incidents, and compliance logs."},{id:"facilities",icon:Wh,title:"Facilities",detail:"Cleaning routes, building services, supplies, and quality checks."},{id:"industrial",icon:Dh,title:"Industrial",detail:"Warehouse crews, attendance, overtime risk, and dock coverage."},{id:"construction",icon:Qd,title:"Construction",detail:"Job sites, trades, certifications, crews, and project coverage."}],FN=[{id:"small",icon:vh,title:"Small",caption:"0–20",detail:"Under 20 people on the roster."},{id:"growing",icon:ls,title:"Growing",caption:"20–100",detail:"20–100 across a handful of sites."},{id:"enterprise",icon:su,title:"Enterprise",caption:"100+",detail:"100+ spanning many locations."}],qo=[{key:"workforce",kind:"choices",options:hm,question:n=>`Let's set up ${n}. First — what kind of workforce are you running?`},{key:"sizing",kind:"choices",options:FN,question:()=>"Got it. Roughly how big is the team?"},{key:"roles",kind:"composer",placeholder:"e.g. RNs, LPNs, aides, coordinators…",question:()=>"Which roles do you staff? List a few, or upload a roster and I'll pull them."},{key:"facilities",kind:"composer",placeholder:"e.g. 2 branch offices, multi-county…",question:()=>"Last one — where does your team work? Name the sites, or drop in a location list."}],ah=[{sections:[{key:"overview",label:"Company",text:n=>`${n} runs a home-health agency delivering in-home nursing and personal care across a regional service area.`,details:()=>["Care mix spans skilled nursing, therapy visits, and non-clinical personal care.","Visits are authorized per client plan, so volume swings with referrals week to week.","Medicare / Medicaid and private-pay clients, each with their own visit and documentation rules."]},{key:"workforce",label:"Workforce type",text:()=>"Field clinicians and aides dispatched to client homes on visit-based schedules, plus an on-call after-hours pool.",details:()=>["Scheduling is visit-based, not shift-based — each caregiver runs a daily route of client homes.","Drive time and mileage between visits factor into hours and pay.","An on-call pool covers nights, weekends, and urgent same-day visits."]},{key:"sizing",label:"Staff sizing",text:()=>"~180 caregivers — RNs, LPNs, and home-health aides — coordinated by a small office team.",details:()=>["Roughly 60% aides to 40% licensed clinicians (RNs / LPNs).","A small central office team handles intake, scheduling, and payroll.","Headcount flexes seasonally with referral volume and census."]},{key:"roles",label:"Job roles",text:()=>"Registered nurses, LPNs, home-health aides, and care coordinators.",details:()=>["RNs and LPNs carry state licenses plus CPR — both need expiry tracking.","Aides need certification and background-check clearances on file.","Care coordinators own client plans, referrals, and visit routing."]},{key:"facilities",label:"Facilities",text:()=>"2 regional branch offices covering a multi-county territory.",details:()=>["Most hours are logged in client homes, not at a fixed site.","Branch offices anchor scheduling, supplies, and clinician check-ins.","Coverage zones are drawn by county to keep drive times reasonable."]}],recommend:["homehealth","ltc","allied"]},{sections:[{key:"overview",label:"Company",text:n=>`${n} staffs acute-care units with per-diem and travel clinicians across partner hospitals.`,details:()=>["Fills open shifts against hospital orders, often with same-day turnaround.","Blends local per-diem clinicians with travelers on 8- and 13-week contracts.","Bill rates and pay packages vary by facility, unit, and specialty."]},{key:"workforce",label:"Workforce type",text:()=>"Per-diem and contract nurses filling 8- and 12-hour hospital shifts around the clock.",details:()=>["Clinicians self-schedule into open 8/12-hour day, evening, and night shifts.","Night, weekend, and holiday shifts carry differentials on top of base rate.","Cancellations and call-offs reshuffle coverage constantly, so the pool runs hot."]},{key:"sizing",label:"Staff sizing",text:()=>"~240 clinicians in the float pool — mostly RNs, with CNAs and patient-care techs.",details:()=>["The active pool is larger than any single facility needs on a given day.","Utilization is uneven — a core group picks up most shifts, a long tail works occasionally.","Recruiting runs continuously to keep credentialed clinicians ready to deploy."]},{key:"roles",label:"Job roles",text:()=>"ICU / ER / Med-Surg RNs, CNAs, patient-care techs, and charge nurses.",details:()=>["Every clinician needs BLS/ACLS plus state license, verified before first shift.","Unit competencies (ICU, ER, telemetry) gate which orders each person can fill.","Charge nurses require extra sign-off and take precedence on scheduling."]},{key:"facilities",label:"Facilities",text:()=>"Placements across 5 partner hospitals and 2 outpatient sites.",details:()=>["Each facility has its own units, orientation, and badge/access requirements.","Clinicians float between sites, so credentials must satisfy every facility they cover.","Order volume and pay differ site to site, driving where the pool gets deployed."]}],recommend:["travel","allied","ltc"]},{sections:[{key:"overview",label:"Company",text:n=>`${n} operates senior-living communities providing 24/7 assisted-living and memory care.`,details:()=>["Residents live on-site, so coverage can never drop below safe staffing.","Assisted-living, memory care, and dining each run as their own care area.","State regulations set minimum resident-to-caregiver ratios per shift."]},{key:"workforce",label:"Workforce type",text:()=>"Around-the-clock caregiving staff on rotating day, evening, and overnight shifts.",details:()=>["Three rotating shifts (day / evening / NOC) cover every hour, every day.","Overnight and weekend shifts carry differentials and are hardest to fill.","Call-offs must be backfilled fast to hold ratios, driving open-shift offers."]},{key:"sizing",label:"Staff sizing",text:()=>"~150 staff — CNAs, med techs, and LPNs — plus dining and activities teams.",details:()=>["Direct-care staff (CNAs, med techs, LPNs) make up the bulk of the roster.","Dining, activities, and housekeeping teams staff to their own schedules.","Headcount is split across communities, each with its own manager."]},{key:"roles",label:"Job roles",text:()=>"Certified nursing assistants, medication techs, LPNs, and shift supervisors.",details:()=>["CNAs and med techs carry certifications that need expiry tracking.","Med techs require medication-administration sign-off to pass meds.","Shift supervisors own the floor and get scheduling precedence."]},{key:"facilities",label:"Facilities",text:()=>"3 residential communities, each with a dedicated memory-care wing.",details:()=>["Each community schedules independently but shares float staff when short.","Memory-care wings need extra training and tighter ratios.","Staff are generally assigned to a home community to keep resident continuity."]}],recommend:["ltc","homehealth","allied"]}],HN={healthcare:["ltc","travel","homehealth"],longterm:["ltc","homehealth","allied"],hospitality:["hotel","fnb","events"],events:["events","fnb","hotel"],construction:["trades","crews","union"],staffing:["light","clerical","warehouse"],industrial:["light","warehouse","clerical"],security:["distributed","light","clerical"],facilities:["distributed","franchise","retail"]},WN=["ltc","travel","homehealth"],VN={id:"tpl_blank",name:"Blank account",industry:"Custom",match:0,rationale:"",tags:[],sections:[],seed:[]};function UN(n){const a=n.trim().replace(/\s+/g,"");if(!a)return!1;const s=/^https?:\/\//i.test(a)?a:`https://${a}`;let l;try{l=new URL(s).hostname}catch{return!1}return/^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(l)}function qN(n){const a=n.replace(/\s+/g,""),s=/^https?:\/\//i.test(a)?a:`https://${a}`;let l=a;try{l=new URL(s).hostname}catch{}return l=l.replace(/^www\./,""),{name:(l.split(".")[0]||l).split(/[-_]/).map(f=>f.charAt(0).toUpperCase()+f.slice(1)).join(" ")||l,host:l}}function GN(n){return`https://www.google.com/s2/favicons?domain=${n}&sz=64`}function YN(n){let a=(n==null?void 0:n.parentElement)??null;for(;a;){if(/(auto|scroll)/.test(getComputedStyle(a).overflowY))return a;a=a.parentElement}return null}function ZN({website:n,companyName:a,failedWebsite:s,store:l,augmenting:c,onEnterAugment:u,onComplete:f}){const h=bu(),g=!!n,{name:y,host:w}=g?qN(n):{name:(a||"your company").trim(),host:""},[C]=v.useState(()=>ah[Math.floor(Math.random()*ah.length)]),[_,N]=v.useState(()=>[{id:"you-company",from:"user",text:g?w:s??y}]),k=Y=>N(ye=>ye.some(Ae=>Ae.id===Y.id)?ye:[...ye,Y]),[b,j]=v.useState(0),[M,L]=v.useState({}),[I,D]=v.useState(null),[E,B]=v.useState(""),[R,A]=v.useState([]),U=v.useRef(0),G=v.useMemo(()=>C.sections.map(Y=>({icon:"done",headline:Y.label,summary:Y.text(y),probe:[`Reading ${g?w:y}…`,`Mapping ${Y.label.toLowerCase()}…`,"Cross-referencing what I found…"],blocks:Y.details?[{bullets:Y.details(y)}]:void 0})),[C,y,g,w]),X=g?C.sections.length+1:0,q=g?b>=X:b>=qo.length,[ee,oe]=v.useState(""),[ce,ie]=v.useState(!1),[le,Z]=v.useState(!1),[O,H]=v.useState(!1),[$,T]=v.useState(null),[Q,J]=v.useState([]),ae=v.useRef(0),de=v.useRef(null),pe=v.useRef(null),xe=v.useRef(null),Ne=v.useRef(_.filter(Y=>Y.from==="user").length),Ee=v.useRef(c),fe=v.useRef(_.length),[_e,$e]=v.useState(!1),[Ge,Ve]=v.useState([]),[Ye,Je]=v.useState(""),[at,He]=v.useState(!1),Ze=v.useRef(0),We=v.useRef(null),[xt,Oe]=v.useState(0);v.useEffect(()=>{if(!g||b>=X)return;b===0?k({id:"s-open",from:"ultron",text:`I pulled up ${w} — here's the operation I mapped out. Tell me if anything's off.`}):b===1&&k({id:"s-findings",from:"ultron",trail:G});const Y=window.setTimeout(()=>j(ye=>ye+1),h?250:b===0?MN:EN);return()=>window.clearTimeout(Y)},[g,b,X,h,w,G]),v.useEffect(()=>{if(g||b>=qo.length)return;const Y=qo[b],ye=()=>k({id:`q-${Y.key}`,from:"ultron",text:Y.question(y)});if(s&&b===0){k({id:"no-site",from:"ultron",text:"I couldn't retrieve enough useful info from that to kickstart your account — no problem, we'll build it together."});const Ae=window.setTimeout(ye,h?0:900);return()=>window.clearTimeout(Ae)}ye()},[g,b,y,s,h]),v.useEffect(()=>{if(!q)return;k({id:"ready-recap",from:"ultron",text:KN(g,w,M)});const Y=window.setTimeout(()=>ie(!0),h?0:650);return()=>window.clearTimeout(Y)},[q]),v.useEffect(()=>{if(!le)return;const Y=window.setTimeout(()=>H(!0),5e3);return()=>window.clearTimeout(Y)},[le]),v.useEffect(()=>{const Y=()=>{const ye=YN(pe.current);ye&&Oe(ye.clientHeight)};return Y(),window.addEventListener("resize",Y),()=>window.removeEventListener("resize",Y)},[c]),v.useEffect(()=>{var dr,Gn,Wr;const Y=_.filter(Vr=>Vr.from==="user").length,ye=_.length>fe.current,Ae=Y>Ne.current||c!==Ee.current;if(Ne.current=Y,Ee.current=c,fe.current=_.length,!g&&!c&&b<qo.length){ye&&b>0&&((dr=_[_.length-1])==null?void 0:dr.from)==="ultron"&&((Gn=xe.current)==null||Gn.scrollIntoView({behavior:h?"auto":"smooth",block:"nearest"}));return}Ae&&((Wr=pe.current)==null||Wr.scrollIntoView({behavior:h?"auto":"smooth",block:"start"}))},[_,c,xt,h,g,b]);const kt=()=>{const Y=de.current;Y&&(Y.style.height="auto",Y.style.height=`${Math.min(Y.scrollHeight,220)}px`)};v.useEffect(()=>{ee&&requestAnimationFrame(kt)},[ee]);const Re=!g&&b<qo.length?qo[b]:null,sn=Y=>{Re&&(k({id:`a-${Re.key}`,from:"user",text:Y}),L(ye=>({...ye,[Re.key]:Y})),j(ye=>ye+1))},Ot=()=>{if(!Re)return;const Y=E.trim();if(!Y&&R.length===0)return;const ye=R.map(Ae=>Ae.name);k({id:`a-${Re.key}`,from:"user",text:Y||`${R.length} file${R.length===1?"":"s"} attached`,chips:ye.length?ye:void 0}),L(Ae=>({...Ae,[Re.key]:Y||ye.join(", ")})),B(""),A([]),j(Ae=>Ae+1)},Vn=Y=>{const ye=Array.from(Y).map(Ae=>({id:`f${U.current++}`,name:Ae.name}));A(Ae=>[...Ae,...ye])},Fr=Y=>{const ye=Array.from(Y).map(Ae=>({id:`b${ae.current++}`,name:Ae.name}));J(Ae=>[...Ae,...ye])},Rn=v.useMemo(()=>{var ye;return(g?C.recommend:HN[((ye=hm.find(Ae=>Ae.title===M.workforce))==null?void 0:ye.id)??""]??WN).map(Ae=>wN[Ae]).filter(Boolean)},[g,C,M.workforce]),ln=Rn[0],go=Y=>{D(Y);const ye=Y.seed.length;k({id:"augment-intro",from:"ultron",text:ye>0?`Done — I've laid down the ${Y.name} starting point, ${ye} item${ye===1?"":"s"} on the right. Tell me what to change: add a role, adjust a pay rule, set a policy, and I'll draft it.`:"Let's build your account from scratch. Tell me what you need — a role, a pay rule, a policy — and I'll draft each change on the right."}),u(Y)},ir=Y=>go(bN(Y)),ke=Y=>{const ye=Y.trim();!ye||_e||(k({id:`aug-${Ze.current++}`,from:"user",text:ye}),Je(""),He(!0),requestAnimationFrame(()=>{We.current&&(We.current.style.height="auto")}),$e(!0),window.setTimeout(()=>{const{reply:Ae,drafts:Hr,work:dr}=CN(ye),Gn=Hr.map(Wr=>l.append(Wr).id);k({id:`aug-act-${Ze.current++}`,from:"ultron",trail:[{icon:"done",headline:"Drafting the change",summary:"Applied your instruction to the account draft.",blocks:dr.length?[{label:"How I worked this",bullets:dr}]:void 0}]}),k({id:`aug-${Ze.current++}`,from:"ultron",text:Ae}),$e(!1),Gn.length&&(Ve(Gn),window.setTimeout(()=>Ve([]),1600))},h?200:850))},Ke=()=>{const Y=We.current;Y&&(Y.style.height="auto",Y.style.height=`${Math.min(Y.scrollHeight,140)}px`)},st=ee.trim().length>0||Q.length>0,yt=()=>{if(!st)return;const Y=ee.trim(),ye=Q.map(Ae=>Ae.name);k({id:"you-details",from:"user",text:Y||`${ye.length} file${ye.length===1?"":"s"} attached`,chips:ye.length?ye:void 0}),k({id:"rec-intro",from:"ultron",text:QN(ln)}),Z(!0)},Un=(Re==null?void 0:Re.key)==="roles"?"Job roles":"Facilities",xn=_.length-1,lr=xn>=1&&_[xn].from==="ultron"&&_[xn-1].from==="user"?xn-1:xn,cr=[{icon:"done",headline:"Drafting the change",summary:"Applying your instruction to the account draft.",probe:["Reading your instruction…","Drafting the change…","Holding pay & access changes for sign-off…"]}],qn=r.jsxs(C$,{children:[_.map((Y,ye)=>Y.trail?r.jsx(jd,{"data-from":"ultron",ref:ye===lr?pe:void 0,children:r.jsx(uh,{children:r.jsx(Od,{milestones:Y.trail,focusIndex:q?void 0:Math.min(Math.max(b-1,0),Y.trail.length-1),running:!q,expandAll:!0,hideActions:!0})})},Y.id):r.jsx(jd,{"data-from":Y.from,ref:ye===lr?pe:void 0,children:r.jsxs(N$,{"data-from":Y.from,children:[r.jsx(S$,{"data-from":Y.from,children:Y.text}),Y.chips&&Y.chips.length>0&&r.jsx($$,{children:Y.chips.map((Ae,Hr)=>r.jsx(vt,{size:"md",variant:"subtle",color:"blue",leadingIcon:r.jsx(Br,{size:12}),children:Ae},Hr))}),g&&Y.id==="you-company"&&r.jsxs(xm,{href:`https://${w}`,target:"_blank",rel:"noopener noreferrer","aria-label":`Open ${w} in a new tab`,children:[r.jsx(L$,{"aria-hidden":"true",children:r.jsx("img",{src:GN(w),alt:"",width:20,height:20,loading:"lazy"})}),r.jsxs(M$,{children:[r.jsx(E$,{children:y}),r.jsx(R$,{children:w})]}),r.jsx(I$,{"aria-hidden":"true",children:r.jsx(el,{size:16})})]})]})},Y.id)),c&&_e&&r.jsx(jd,{"data-from":"ultron",children:r.jsx(uh,{children:r.jsx(Od,{milestones:cr,focusIndex:0,running:!0,expandAll:!0,hideActions:!0})})},"drafting-live")]});return c?r.jsxs(mL,{children:[r.jsxs(gL,{children:[r.jsxs(lh,{children:[r.jsx(Fd,{size:22}),r.jsx(ch,{"aria-hidden":"true"}),r.jsx(os,{mark:"circle",size:36,tone:"auto",state:"active",streamCount:2,"aria-label":"Ultron"})]}),r.jsxs(vL,{children:[qn,r.jsx(dh,{style:{height:xt},"aria-hidden":"true"})]}),!at&&r.jsx(xL,{children:$N(I==null?void 0:I.industry).map(Y=>r.jsxs(yL,{type:"button",onClick:()=>ke(Y),children:[r.jsx(sr,{size:12})," ",Y]},Y))}),r.jsx(wL,{onSubmit:Y=>{Y.preventDefault(),ke(Ye)},children:r.jsxs(Yi,{children:[r.jsx(Vd,{ref:We,rows:1,value:Ye,placeholder:"Tell Ultron what to change…","aria-label":"Instruction to Ultron",onChange:Y=>{Je(Y.target.value),Ke()},onKeyDown:Y=>{Y.key==="Enter"&&!Y.shiftKey&&(Y.preventDefault(),ke(Ye))}}),r.jsx(Yo,{children:r.jsx(Zo,{state:Ye.trim()&&!_e?"ready":"disabled-invalid",onSend:()=>ke(Ye)})})]})})]}),r.jsxs(bL,{children:[r.jsxs(_L,{children:[r.jsx(kL,{children:r.jsx(Ce,{variant:"tertiary",size:"md",iconOnly:!0,"aria-label":"Refresh draft",children:r.jsx(na,{size:16})})}),r.jsxs(CL,{children:[r.jsxs(jL,{children:[l.active.length," change",l.active.length===1?"":"s"," staged"]}),r.jsx(Ce,{variant:"primary",size:"md",trailingArtwork:r.jsx(is,{size:16}),disabled:l.active.length===0,onClick:f,children:"Provision account"})]})]}),r.jsx(rS,{store:l,justAdded:Ge})]})]}):r.jsxs(_$,{children:[r.jsxs(lh,{children:[r.jsx(Fd,{size:22}),r.jsx(ch,{"aria-hidden":"true"}),r.jsx(os,{mark:"circle",size:36,tone:"auto",state:"active",streamCount:2,"aria-label":"Ultron"})]}),r.jsxs(k$,{children:[qn,(Re==null?void 0:Re.kind)==="choices"&&r.jsx(T$,{role:"group","aria-label":Re.question(y),$cols:Re.options.length<=3?Re.options.length:2,children:Re.options.map(Y=>{const ye=Y.icon;return r.jsxs(A$,{type:"button",onClick:()=>sn(Y.title),children:[r.jsx(z$,{"aria-hidden":"true",children:r.jsx(ye,{size:18})}),r.jsxs(D$,{children:[r.jsx(P$,{children:Y.title}),Y.caption&&r.jsx(B$,{children:Y.caption})]})]},Y.id)})}),(Re==null?void 0:Re.kind)==="composer"&&r.jsxs(O$,{onSubmit:Y=>{Y.preventDefault(),Ot()},children:[R.length>0&&r.jsx(F$,{children:R.map(Y=>r.jsx(vt,{size:"md",variant:"subtle",color:"blue",leadingIcon:r.jsx(Br,{size:12}),dismissible:!0,onDismiss:()=>A(ye=>ye.filter(Ae=>Ae.id!==Y.id)),children:Y.name},Y.id))}),r.jsxs(Yi,{children:[r.jsx(Yo,{children:r.jsx(Nd,{state:"idle",multiple:!0,onSelect:Vn})}),r.jsx(Vd,{rows:1,value:E,placeholder:Re.placeholder,"aria-label":Un,onChange:Y=>B(Y.target.value),onKeyDown:Y=>{Y.key==="Enter"&&!Y.shiftKey&&(Y.preventDefault(),Ot())}}),r.jsx(Yo,{children:r.jsx(Zo,{state:E.trim()||R.length?"ready":"disabled-invalid",onSend:Ot})})]})]}),q&&le&&!O&&r.jsx(XN,{}),q&&le&&O&&ln&&r.jsxs(W$,{children:[r.jsx(G$,{children:"Recommended starting point"}),r.jsx(sh,{rec:ln,onUse:()=>ir(ln)}),Rn.length>1&&r.jsxs(r.Fragment,{children:[r.jsx(eL,{children:"Other close fits"}),r.jsx(tL,{children:Rn.slice(1,3).map(Y=>$===Y.id?r.jsx(sh,{rec:Y,onUse:()=>ir(Y),onCollapse:()=>T(null)},Y.id):r.jsxs(nL,{children:[r.jsxs(rL,{type:"button","aria-expanded":!1,"aria-label":`Expand ${Y.name}`,onClick:()=>T(Y.id),children:[r.jsxs(aL,{children:[Y.name,r.jsxs(sL,{children:[Y.match,"%"]})]}),r.jsx(iL,{children:Y.vertical})]}),r.jsxs(oL,{children:[r.jsx(Ce,{variant:"secondary",size:"sm",onClick:()=>ir(Y),children:"Use"}),r.jsx(Ce,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":`Expand ${Y.name}`,onClick:()=>T(Y.id),children:r.jsx(En,{size:16})})]})]},Y.id))})]}),r.jsx(lL,{children:r.jsx(Ce,{variant:"ghost",size:"md",leadingArtwork:r.jsx(sr,{size:16}),onClick:()=>go(VN),children:"Start blank"})})]}),q&&ce&&!le&&r.jsx(H$,{children:r.jsxs(cL,{onSubmit:Y=>{Y.preventDefault(),yt()},children:[Q.length>0&&r.jsx(dL,{children:Q.map(Y=>r.jsx(vt,{size:"md",variant:"subtle",color:"blue",leadingIcon:r.jsx(Br,{size:12}),dismissible:!0,onDismiss:()=>J(ye=>ye.filter(Ae=>Ae.id!==Y.id)),children:Y.name},Y.id))}),r.jsx(uL,{ref:de,rows:1,value:ee,placeholder:"Add any details I should factor in — or just tell me to build it.","aria-label":"Build brief",onChange:Y=>{oe(Y.target.value),kt()},onKeyDown:Y=>{Y.key==="Enter"&&!Y.shiftKey&&(Y.preventDefault(),yt())}}),r.jsxs(pL,{children:[r.jsx(Yo,{children:r.jsx(Nd,{state:"idle",multiple:!0,onSelect:Fr})}),r.jsx(Yo,{children:r.jsx(Zo,{state:st?"ready":"disabled-invalid",onSend:yt})})]})]})}),r.jsx("div",{ref:xe,"aria-hidden":"true"}),r.jsx(dh,{style:{height:xt},"aria-hidden":"true"})]})]})}function KN(n,a,s){if(n)return`That's everything I mapped from ${a}. Anything else I should factor in — or just tell me to build it, and I'll pull together a starting point for your account.`;const l=s.workforce?s.workforce.toLowerCase():"frontline",c=s.sizing?`${s.sizing.toLowerCase()} `:"";return`Perfect — that's everything I need. You're running a ${l} operation with a ${c}team. Anything else I should know — or just tell me to build it, and I'll pull together a starting point for your account.`}function QN(n){return n?`Here's what I'd start you on — ${n.name}. It ships the roles, pay rules, and compliance tuned for that niche. Use it as-is, pick one of the alternates, or start blank.`:"Here's the closest starting point I found for you."}function sh({rec:n,onUse:a,onCollapse:s}){return r.jsxs(Y$,{children:[r.jsxs(ym,{children:[r.jsx(K$,{children:n.vertical}),r.jsxs(Z$,{children:[r.jsxs(tl,{variant:"neutral",children:[n.match,"% match"]}),s&&r.jsx(Ce,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Collapse",onClick:s,children:r.jsx(En,{size:16,style:{transform:"rotate(180deg)"}})})]})]}),r.jsx(Q$,{children:n.name}),r.jsx(X$,{children:n.rationale}),r.jsx(J$,{children:n.tags.map(l=>r.jsx(vt,{size:"sm",variant:"subtle",color:"blue",children:l},l))}),r.jsx(Ce,{variant:"primary",size:"sm",trailingArtwork:r.jsx(is,{size:14}),onClick:a,children:"Use this template"})]})}function XN(){return r.jsxs(U$,{"aria-busy":"true","aria-label":"Matching a starting-point template",children:[r.jsxs(ym,{children:[r.jsx(Ir,{$w:"88px",$h:"var(--space-3)"}),r.jsx(os,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2.4,"aria-label":"Loading"})]}),r.jsx(Ir,{$w:"60%",$h:"var(--space-6)"}),r.jsxs(q$,{children:[r.jsx(Ir,{$w:"100%",$h:"var(--space-3)"}),r.jsx(Ir,{$w:"82%",$h:"var(--space-3)"})]}),r.jsxs(Ud,{children:[r.jsx(Ir,{$w:"72px",$h:"var(--space-5)",$rounded:!0}),r.jsx(Ir,{$w:"88px",$h:"var(--space-5)",$rounded:!0}),r.jsx(Ir,{$w:"64px",$h:"var(--space-5)",$rounded:!0})]}),r.jsx(Ir,{$w:"160px",$h:"var(--space-8)",$rounded:!0})]})}function bu(){const[n,a]=v.useState(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}});return v.useEffect(()=>{var c;let s;try{s=window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return}const l=u=>a(u.matches);return(c=s.addEventListener)==null||c.call(s,"change",l),()=>{var u;return(u=s.removeEventListener)==null?void 0:u.call(s,"change",l)}},[]),n}const JN=m.div`
  /* Anchors the ambient backdrop layer, which fills the frame behind Scroll. */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`,e$=m.div`
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
`,t$=m.div`
  position: absolute;
  bottom: var(--space-6);
  left: var(--space-6);
  z-index: 2;
`,n$=m.main`
  /* Above the backdrop layer. */
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  /* The augment canvas fills the frame as a fixed two-column split — its panes
     scroll internally, so the frame itself doesn't scroll. */
  overflow-y: ${n=>n.$augment?"hidden":"auto"};
  /* When a turn is snapped to the top (see the scroll effect), stop below the
     sticky build header rather than tucking under it — plus an 8px breath so the
     snapped turn sits a touch below the header edge, not flush against it. */
  scroll-padding-top: calc(var(--space-20) + var(--space-2));
  display: flex;
  flex-direction: column;
`,r$=m.div`
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
  padding: ${n=>n.$build?"var(--space-8)":"var(--space-24)"} var(--space-6);
  padding-bottom: var(--space-24);

  /* The augment canvas fills the frame edge-to-edge (no centered column, no
     padding) so its two panes can carry their own chrome. */
  ${n=>n.$augment&&an`
      min-height: 0;
      flex: 1;
      flex-shrink: 1;
      gap: 0;
      padding: 0;
      align-items: stretch;
    `}
`,o$=m.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`,a$=m.span`
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
`,s$=Pe`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-6px); }
`,i$=m.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${n=>n.$exiting&&an`
      animation: ${s$} ${fm}ms var(--ease-in) forwards;
    `}

  /* Augment canvas: stretch to fill the frame so the two-column split owns the
     whole height, with its panes scrolling internally. */
  ${n=>n.$augment&&an`
      flex: 1;
      min-height: 0;
      align-items: stretch;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,l$=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  max-width: 640px;
  text-align: center;
`,vs=Pe`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,c$=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  animation: ${vs} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,d$=m.div`
  margin-top: var(--space-3);
`,u$=m.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Pops in (no type-out). */
  animation: ${vs} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ih=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,p$=Pe`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,_u=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  max-width: 720px;
  text-align: center;
  animation: ${p$} ${LN}ms ${wu} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,mm=m.h1`
  margin: 0;
  font-family: var(--font-sans);
  /* Matches the opening landing headline (Headline) so step titles read consistently. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,gm=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
  max-width: 520px;
`,f$=Pe`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,h$=m(gm)`
  animation: ${f$} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,vm=m.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  width: 100%;
  margin-top: var(--space-4);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`,m$=m.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);
  padding: var(--space-5);
  text-align: left;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  /* Subtle lift on hover — the card rises a touch and gains a soft shadow. */
  &:hover {
    background: var(--color-bg-secondary);
    border-color: var(--color-border-selected);
    transform: translateY(-2px);
    box-shadow: var(--shadow-below-md);
  }

  /* Pressing settles it back down from the lifted state. */
  &:active {
    transform: translateY(0);
    box-shadow: var(--shadow-below-low);
  }

  &[data-selected] {
    background: var(--color-bg-tertiary);
    border-color: var(--color-border-selected);
    box-shadow: var(--shadow-below-low);
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover,
    &:active {
      transform: none;
    }
  }

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 2px;
  }
`,g$=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  margin-bottom: var(--space-2);
`,v$=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,x$=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,gl=m.form`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-low);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,Yi=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
`,y$=Pe`
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
`,w$=m.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary);
  flex-shrink: 0;
  animation: ${y$} var(--duration-base) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Vd=m.textarea`
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
`,Yo=m(ou)`
  && {
    flex: 0 0 auto;
    width: auto;
    --composer-btn-size: var(--space-8); /* 32px */
    --composer-btn-icon-attach: var(--space-4); /* 16px */
    --composer-btn-icon-send: var(--space-4); /* 16px */
  }
`,b$=m.div`
  margin-top: var(--space-3);
`,_$=m(_u)`
  align-items: stretch;
  text-align: left;
`,lh=m.div`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  /* No top padding — the marks sit flush at the top; bottom padding spaces the
     header off the thread scrolling beneath it. */
  padding: 0 0 var(--space-4);
  color: var(--color-content-primary);

  /* Occluding backdrop for the thread scrolling underneath — sits behind the
     marks and extends a strip past the header foot. Instead of a hard rectangle
     it feathers on its bottom, left, and right edges (the top stays solid — it's
     pinned to the viewport top), continuing the fill then fading it to transparent
     while blurring the thread, so messages dissolve up INTO the header on every
     side rather than clipping against an edge. */
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    /* Spill the backdrop into the gutter on both sides by one feather width, so
       the side fade lands OUTSIDE the content column — the full column width stays
       solidly covered and nothing scrolling under bleeds through at the edges. */
    left: calc(-1 * var(--space-6));
    right: calc(-1 * var(--space-6));
    bottom: calc(-1 * var(--space-6));
    background: var(--color-bg-primary);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    /* One feather width shared by all three soft edges. */
    --edge: var(--space-6);
    -webkit-mask-image:
      linear-gradient(to bottom, black calc(100% - var(--edge)), transparent),
      linear-gradient(to right, transparent, black var(--edge), black calc(100% - var(--edge)), transparent);
    mask-image:
      linear-gradient(to bottom, black calc(100% - var(--edge)), transparent),
      linear-gradient(to right, transparent, black var(--edge), black calc(100% - var(--edge)), transparent);
    /* Intersect the two so only the overlap paints — feathering bottom + sides. */
    -webkit-mask-composite: source-in;
    mask-composite: intersect;
    pointer-events: none;
  }
`,ch=m.span`
  width: 1px;
  height: var(--space-5);
  background: var(--color-border-opaque);
`,k$=m.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,C$=m.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
`,dh=m.div`
  flex-shrink: 0;
`,j$=Pe`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`,jd=m.div`
  display: flex;
  animation: ${j$} var(--duration-base) var(--ease-out) both;

  & + & { margin-top: var(--space-3); }

  &[data-from='user'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,uh=m.div`
  width: 100%;
  min-width: 0;
`,S$=m.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);

  &[data-from='ultron'] {
    /* Ultron speaks as plain prose, not a chat bubble — let it span the full
       content column (like the trail / link card / composer below it) so its
       left and right edges sit the same inset from the column edge, rather than
       stopping short at the 80% bubble cap. */
    max-width: 100%;
    align-items: flex-start;
    padding: var(--space-1) 0;
  }

  &[data-from='user'] {
    /* content-box so the bubble reserves full L/R padding around its text —
       under the global border-box reset the content collapses and the text
       overflows to one side, leaving uneven left/right padding. */
    box-sizing: content-box;
    align-items: flex-end;
    /* Fill the stack (which shrink-wraps to content and carries the 80% cap),
       rather than a second 80% cap here — two nested percentage caps collapse
       the bubble to min-content and wrap short text early. With 100% the bubble
       hugs short text on one line and wraps only at the stack's 80% cap. */
    max-width: 100%;
    padding: var(--space-2) var(--space-4);
    background: var(--color-bg-tertiary);
    border-radius: 16px;
    font-weight: var(--font-weight-medium);
  }
`,N$=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 80%;
  min-width: 0;

  /* Size to content (fit-content) so the outbound bubble/card isn't squeezed to
     the nested flex column's min-content — short messages keep one line. */
  &[data-from='user'] { width: fit-content; align-items: flex-end; }
  /* Ultron prose spans the full column (see Bubble) so it isn't capped at the
     80% outbound-bubble width — its right edge lines up with the column. */
  &[data-from='ultron'] { max-width: 100%; align-items: flex-start; }
`,$$=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  justify-content: flex-end;
`,xm=m.a`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 300px;
  max-width: 100%;
  box-sizing: border-box;
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg, 12px);
  background: var(--color-bg-primary);
  text-decoration: none;
  transition: background var(--duration-fast, 120ms) var(--ease-out, ease);

  &:hover { background: var(--color-bg-secondary); }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-border-focus);
  }
`,L$=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md, 8px);
  overflow: hidden;
  background: var(--color-bg-secondary);

  & img { display: block; width: 20px; height: 20px; object-fit: contain; }
`,M$=m.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
  text-align: left;
`,E$=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,R$=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,I$=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border-opaque);
  color: var(--color-content-secondary);
  transition: background var(--duration-fast, 120ms) var(--ease-out, ease),
              color var(--duration-fast, 120ms) var(--ease-out, ease);

  ${xm}:hover & {
    background: var(--color-bg-primary);
    color: var(--color-content-primary);
  }
`,T$=m(vm)`
  margin-top: 0;
  gap: var(--space-3);
  grid-template-columns: repeat(${n=>n.$cols??2}, 1fr);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`,A$=m.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  text-align: left;
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  &:hover {
    background: var(--color-bg-secondary);
    border-color: var(--color-border-selected);
    transform: translateY(-1px);
    box-shadow: var(--shadow-below-low);
  }
  &:active { transform: translateY(0); }
  &:focus-visible { outline: 2px solid var(--color-border-focus); outline-offset: 2px; }

  @media (prefers-reduced-motion: reduce) {
    &:hover, &:active { transform: none; }
  }
`,z$=m.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-8);
  height: var(--space-8);
  flex-shrink: 0;
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
`,D$=m.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,P$=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,B$=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,O$=m(gl)`
  max-width: 100%;
  margin-top: 0;
  display: flex;
  flex-direction: column;

  /* The attach button sits on the left here (not a leading glyph as in the
     workplace composer), so trim the left padding to match the right for a
     balanced row. */
  ${Yi} {
    padding-left: var(--space-2);
  }
`,F$=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-3) 0;
`,H$=m.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  animation: ${vs} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,W$=m.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  animation: ${vs} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,V$=Pe`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.35; }
`,U$=m.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-5);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-md);
  animation: ${vs} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,q$=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,Ud=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,Ir=m.div`
  flex-shrink: 0;
  width: ${n=>n.$w};
  height: ${n=>n.$h};
  border-radius: ${n=>n.$rounded?"var(--radius-full)":"var(--radius-sm)"};
  background: var(--color-bg-tertiary);
  animation: ${V$} 1.2s var(--ease-default) infinite;

  ${Ud} &:nth-child(2) { animation-delay: 0.15s; }
  ${Ud} &:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0.6;
  }
`,G$=m.h3`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,Y$=m.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-5);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-selected);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-below-md);

  /* Fully-rounded hero CTA, set off from the tags with extra top spacing.
     Left padding nudged from --space-2 (8px) to --space-3 (12px) — +4px. */
  & > button {
    align-self: flex-start;
    border-radius: var(--radius-full);
    margin-top: var(--space-2);
    padding-left: var(--space-3);
  }
`,ym=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`,Z$=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,K$=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,Q$=m.h2`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,X$=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,J$=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,eL=m.div`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  margin-top: var(--space-1);
`,tL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,nL=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:hover { border-color: var(--color-border-hover); }
`,rL=m.button`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: 0;
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid var(--color-border-focus);
    outline-offset: 4px;
    border-radius: var(--radius-sm);
  }
`,oL=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`,aL=m.span`
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,sL=m.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-tertiary);
`,iL=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,lL=m.div`
  display: flex;
  margin-top: var(--space-1);
`,cL=m(gl)`
  /* Span the full content column so its edges line up with the thread + cards. */
  max-width: 100%;
  margin-top: var(--space-2);
  padding: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  text-align: left;
`,dL=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,uL=m.textarea`
  width: 100%;
  border: none;
  background: transparent;
  resize: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,pL=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,fL=Pe`
  from { opacity: 0.5; transform: translateX(5%); }
  to   { opacity: 1; transform: translateX(0); }
`,hL=Pe`
  from { opacity: 0; transform: translateX(24px); }
  to   { opacity: 1; transform: translateX(0); }
`,mL=m.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  background: var(--color-bg-primary);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
  }
`,gL=m.section`
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 12px 24px;
  animation: ${fL} var(--duration-slow) ${wu} both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,vL=m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-2) 0 var(--space-4);
  /* The header sits outside this scroll area, so a snapped turn only needs a
     little breathing room from the top — not the full build-header offset. */
  scroll-padding-top: var(--space-4);
`,xL=m.div`
  position: relative;
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: 0 0 var(--space-3);

  /* Soft fade on the top edge: the scrolling thread above dissolves into the
     pinned suggestions/composer zone rather than ending in a hard cut. Sits just
     above this block and is click-through so it never blocks the thread. */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100%;
    height: var(--space-6);
    background: linear-gradient(to top, var(--color-bg-primary), transparent);
    pointer-events: none;
  }
`,yL=m.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  /* Tighter left padding so the leading + hugs the chip edge. */
  padding: var(--space-1) var(--space-3) var(--space-1) var(--space-2);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-default),
              border-color var(--duration-fast) var(--ease-default);

  &:hover { background: var(--color-bg-secondary); border-color: var(--color-border-hover); }
  &:focus-visible { outline: 2px solid var(--color-border-focus); outline-offset: 1px; }
`,wL=m(gl)`
  max-width: 100%;
  margin: 0;
`,bL=m.section`
  display: flex;
  flex-direction: column;
  min-height: 0;
  /* Inset the pane 12px on top/right/bottom; flush left against the split. */
  padding: 12px 12px 12px 0;
  animation: ${hL} var(--duration-slow) ${wu} both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,_L=m.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  /* 12px gap below, separating the footer from the draft card beneath it. */
  margin-bottom: 12px;
  background: var(--color-bg-primary);
`,kL=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,CL=m.div`
  display: flex;
  align-items: center;
  gap: var(--space-4);
`,jL=m.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,ph=m.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* 36px tall control (32px space-8 + 4px space-1) — no 36px space token exists. */
  min-height: calc(var(--space-8) + var(--space-1));
  border: none;
  background: transparent;
  padding: 0 var(--space-3);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
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
`;let SL=0,NL=0;const $L=()=>SL++,LL=()=>`m${(NL++).toString(36)}`;function fh(n){const{risk:a,gateBehavior:s}=pm(n.target.domain);return{id:LL(),seq:$L(),op:n.op,target:n.target,payload:n.payload??null,source:n.source??"ai",risk:a,gateBehavior:s,resolution:s==="gate"?"unresolved":"not-required"}}function ML(n=[]){const[a,s]=v.useState(()=>n.map(fh)),l=v.useCallback(N=>{const k=fh(N);return s(b=>[...b,k]),k},[]),c=v.useCallback(N=>{s(k=>k.map(b=>b.id===N?{...b,undone:!0}:b))},[]),u=v.useCallback(()=>{s(N=>{const k=N.filter(j=>!j.undone).sort((j,M)=>j.seq-M.seq),b=k[k.length-1];return b?N.map(j=>j.id===b.id?{...j,undone:!0}:j):N})},[]),f=v.useCallback((N,k)=>{s(b=>b.map(j=>j.id===N?{...j,resolution:k}:j))},[]),h=v.useCallback((N,k)=>{s(b=>b.map(j=>{if(j.id!==N)return j;const M=j.exec??{state:"pending"};return{...j,exec:{...M,...k,createdIds:[...M.createdIds??[],...k.createdIds??[]].filter((L,I,D)=>D.indexOf(L)===I)}}}))},[]),g=v.useCallback(()=>s([]),[]),y=v.useMemo(()=>ml(a),[a]),w=v.useMemo(()=>xN(a),[a]),C=v.useMemo(()=>vN(a)&&y.length>0,[a,y.length]),_=v.useMemo(()=>yN(a),[a]);return{log:a,active:y,buckets:w,provisionReady:C,toRun:_,append:l,undo:u,undoEntry:c,canUndo:y.length>0,setResolution:f,setExec:h,reset:g}}const EL=1200,qd={role:"POST /roles",rateRule:"POST /rate-rules",rateValue:"PATCH /pay-rates",policy:"POST /policies",customField:"POST /custom-fields",scheduling:"PATCH /scheduling",scoringRule:"POST /scoring-rules",evaluation:"POST /evaluations",permission:"POST /permissions",user:"POST /users"},RL={role:"edit",user:"edit",customField:"edit",rateRule:"rate",rateValue:"rate",permission:"alert",policy:"done",scheduling:"clock",scoringRule:"chart",evaluation:"chart"},IL={role:"record",user:"record",customField:"record",rateRule:"analytics",rateValue:"analytics",scoringRule:"analytics",evaluation:"analytics",permission:"shield",policy:"policy",scheduling:"schedule"},TL={permission:{code:"PERMISSION_CONFLICT",message:"A conflicting approval permission already exists for this role. Retry to merge it, or skip and resolve it later in Settings."}},AL={code:"PROVISION_TIMEOUT",message:"This step timed out talking to the account service. Your other changes are safe — retry this one, or skip it for now."};function zL({store:n,onDone:a,onBack:s}){var D,E,B,R;const[l]=v.useState(()=>n.toRun),[c,u]=v.useState(0),[f,h]=v.useState(l.length?"running":"done"),g=v.useRef(new Set),y=v.useMemo(()=>{const A=l.findIndex(U=>U.target.domain==="permission");return A>=0?A:l.length>2?2:-1},[l]),{setExec:w}=n;v.useEffect(()=>{if(f!=="running")return;if(c>=l.length){h("done");return}const A=l[c];w(A.id,{state:"running",endpoint:qd[A.target.domain]});const U=window.setTimeout(()=>{c===y&&!g.current.has(A.id)?(g.current.add(A.id),w(A.id,{state:"failed",error:TL[A.target.domain]??AL}),h("paused")):(w(A.id,{state:"succeeded",createdIds:[`${A.target.domain}_${A.id}`]}),u(X=>X+1))},EL);return()=>window.clearTimeout(U)},[f,c,l,y,w]);const C=A=>{w(A,{state:"pending"}),h("running")},_=A=>{w(A,{state:"skipped"}),u(U=>U+1),h("running")},N=v.useMemo(()=>new Map(n.log.map(A=>[A.id,A])),[n.log]),b=(f==="done"?l:f==="running"?l.slice(0,c+1):l.slice(0,c)).map(A=>DL(A,N.get(A.id))),j=f==="running"?c:void 0,M=f==="paused"?l[c]:null,L=M?N.get(M.id):null,I=l.filter(A=>{var G,X;const U=(X=(G=N.get(A.id))==null?void 0:G.exec)==null?void 0:X.state;return U==="succeeded"||U==="skipped"}).length;return r.jsxs(PL,{children:[r.jsx(BL,{children:r.jsxs(OL,{children:[r.jsxs(FL,{children:[r.jsxs(HL,{children:[f==="done"?r.jsx(Or,{size:20}):r.jsx(os,{mark:"lines",size:22,tone:"auto",state:f==="paused"?"idle":"active","aria-label":"Ultron"}),f==="done"?"Your account is ready":f==="paused"?"Paused on a step that needs you":"Provisioning your account"]}),r.jsxs(vt,{size:"sm",variant:"subtle",color:f==="paused"?"red":f==="done"?"green":"blue",children:[I," of ",l.length," done"]})]}),r.jsx(WL,{children:f==="done"?"Every change has been applied to your live account.":"Ultron is applying each change through the same endpoints the product uses. Completed steps are safe if anything pauses."})]})}),r.jsx(VL,{children:r.jsxs(UL,{children:[b.length>0&&r.jsx(Od,{milestones:b,focusIndex:j,running:f==="running",hideActions:!0}),M&&L&&r.jsxs(qL,{children:[r.jsxs(GL,{children:[r.jsx(YL,{children:r.jsx(Ah,{size:18})}),r.jsxs(ZL,{children:[r.jsxs(KL,{children:[Fi[M.op]," ",M.target.label," — couldn't complete"]}),r.jsxs(QL,{children:[Hd[M.target.domain]," · ",qd[M.target.domain]," · drafted by ",nm[M.source]]})]})]}),r.jsx(XL,{children:(E=(D=L.exec)==null?void 0:D.error)==null?void 0:E.message}),r.jsx(JL,{children:(R=(B=L.exec)==null?void 0:B.error)==null?void 0:R.code}),r.jsxs(eM,{children:[r.jsx(Ce,{variant:"primary",size:"sm",leadingArtwork:r.jsx(Fh,{size:16}),onClick:()=>C(M.id),children:"Retry"}),r.jsx(Ce,{variant:"secondary",size:"sm",onClick:()=>_(M.id),children:"Skip for now"})]})]})]})}),r.jsxs(tM,{children:[r.jsx(Ce,{variant:"tertiary",size:"md",leadingArtwork:r.jsx(nl,{size:16}),onClick:s,children:"Back to build"}),f==="done"&&a&&r.jsx(Ce,{variant:"primary",size:"lg",trailingArtwork:r.jsx(is,{size:18}),onClick:a,children:"Enter your account"})]})]})}function DL(n,a){var h,g;const s=n.target.domain,l=qd[s],c=((h=a==null?void 0:a.exec)==null?void 0:h.state)==="skipped",u=((g=a==null?void 0:a.exec)==null?void 0:g.createdIds)??[],f=[{name:`${Fi[n.op]} ${n.target.label}`,description:`${Hd[s]} · ${l}`,icon:IL[s]??"record",summary:c?"Skipped — resolve later in Settings.":`Applied via ${l}.`,recordDetails:[{label:"Endpoint",value:l},{label:"Change",value:`${Fi[n.op]} ${n.target.label}`},{label:"Attributed to",value:nm[n.source]},...u.length?[{label:"Created",value:u.join(", "),emphasis:"success"}]:[]]}];return{icon:RL[s]??"edit",headline:`${Fi[n.op]} ${n.target.label}${c?" · skipped":""}`,blocks:[{text:`${Hd[s]} · ${l}`}],progress:[c?"Skipped":`Applied via ${l}`],usage:f}}const PL=m.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
`,BL=m.div`
  flex-shrink: 0;
  border-bottom: 1px solid var(--color-border-opaque);
`,OL=m.div`
  max-width: 760px;
  margin: 0 auto;
  width: 100%;
  padding: var(--space-6) var(--space-6) var(--space-5);
`,FL=m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`,HL=m.h1`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,WL=m.p`
  margin: var(--space-2) 0 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,VL=m.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,UL=m.div`
  max-width: 760px;
  margin: 0 auto;
  width: 100%;
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,qL=m.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-5);
  background: var(--color-error-bg);
  border: 1px solid var(--color-error-border);
  border-radius: var(--radius-lg);
`,GL=m.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
`,YL=m.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-error-content);
`,ZL=m.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,KL=m.div`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,QL=m.div`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,XL=m.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,JL=m.code`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-error-content);
`,eM=m.div`
  display: flex;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,tM=m.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid var(--color-border-opaque);
  background: var(--color-bg-primary);
`;function nM({onEnterApp:n}){const[a,s]=v.useState("intro"),l=ML(),c=v.useRef(null),u=v.useCallback(f=>{c.current!==f.id&&(c.current&&l.reset(),f.seed.forEach(h=>l.append({op:h.op,target:{domain:h.domain,ref:h.ref,label:h.label},payload:h.payload,source:"template"})),c.current=f.id)},[l]);return a==="intro"?r.jsx(TN,{store:l,onSeedTemplate:u,onComplete:()=>s("wizard")}):r.jsx(vk,{current:1,wide:!0,children:r.jsx(zL,{store:l,onDone:n,onBack:()=>s("intro")})})}function rM(){return r.jsx(nM,{})}_g.createRoot(document.getElementById("root")).render(r.jsx(Pr.StrictMode,{children:r.jsx(B4,{children:r.jsx(rM,{})})}));
