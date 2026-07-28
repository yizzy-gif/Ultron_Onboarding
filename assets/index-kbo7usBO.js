(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=i(l);fetch(l.href,d)}})();function U0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qd={exports:{}},pi={},Vd={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf;function l3(){if(yf)return Ve;yf=1;var e=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function k(T){return T===null||typeof T!="object"?null:(T=w&&T[w]||T["@@iterator"],typeof T=="function"?T:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,_={};function $(T,z,te){this.props=T,this.context=z,this.refs=_,this.updater=te||R}$.prototype.isReactComponent={},$.prototype.setState=function(T,z){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,z,"setState")},$.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function M(){}M.prototype=$.prototype;function C(T,z,te){this.props=T,this.context=z,this.refs=_,this.updater=te||R}var j=C.prototype=new M;j.constructor=C,S(j,$.prototype),j.isPureReactComponent=!0;var D=Array.isArray,N=Object.prototype.hasOwnProperty,L={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function A(T,z,te){var U,X={},le=null,B=null;if(z!=null)for(U in z.ref!==void 0&&(B=z.ref),z.key!==void 0&&(le=""+z.key),z)N.call(z,U)&&!E.hasOwnProperty(U)&&(X[U]=z[U]);var P=arguments.length-2;if(P===1)X.children=te;else if(1<P){for(var oe=Array(P),fe=0;fe<P;fe++)oe[fe]=arguments[fe+2];X.children=oe}if(T&&T.defaultProps)for(U in P=T.defaultProps,P)X[U]===void 0&&(X[U]=P[U]);return{$$typeof:e,type:T,key:le,ref:B,props:X,_owner:L.current}}function F(T,z){return{$$typeof:e,type:T.type,key:z,ref:T.ref,props:T.props,_owner:T._owner}}function G(T){return typeof T=="object"&&T!==null&&T.$$typeof===e}function Y(T){var z={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(te){return z[te]})}var W=/\/+/g;function K(T,z){return typeof T=="object"&&T!==null&&T.key!=null?Y(""+T.key):z.toString(36)}function J(T,z,te,U,X){var le=typeof T;(le==="undefined"||le==="boolean")&&(T=null);var B=!1;if(T===null)B=!0;else switch(le){case"string":case"number":B=!0;break;case"object":switch(T.$$typeof){case e:case o:B=!0}}if(B)return B=T,X=X(B),T=U===""?"."+K(B,0):U,D(X)?(te="",T!=null&&(te=T.replace(W,"$&/")+"/"),J(X,z,te,"",function(fe){return fe})):X!=null&&(G(X)&&(X=F(X,te+(!X.key||B&&B.key===X.key?"":(""+X.key).replace(W,"$&/")+"/")+T)),z.push(X)),1;if(B=0,U=U===""?".":U+":",D(T))for(var P=0;P<T.length;P++){le=T[P];var oe=U+K(le,P);B+=J(le,z,te,oe,X)}else if(oe=k(T),typeof oe=="function")for(T=oe.call(T),P=0;!(le=T.next()).done;)le=le.value,oe=U+K(le,P++),B+=J(le,z,te,oe,X);else if(le==="object")throw z=String(T),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return B}function ae(T,z,te){if(T==null)return T;var U=[],X=0;return J(T,U,"","",function(le){return z.call(te,le,X++)}),U}function ce(T){if(T._status===-1){var z=T._result;z=z(),z.then(function(te){(T._status===0||T._status===-1)&&(T._status=1,T._result=te)},function(te){(T._status===0||T._status===-1)&&(T._status=2,T._result=te)}),T._status===-1&&(T._status=0,T._result=z)}if(T._status===1)return T._result.default;throw T._result}var se={current:null},Q={transition:null},O={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Q,ReactCurrentOwner:L};function q(){throw Error("act(...) is not supported in production builds of React.")}return Ve.Children={map:ae,forEach:function(T,z,te){ae(T,function(){z.apply(this,arguments)},te)},count:function(T){var z=0;return ae(T,function(){z++}),z},toArray:function(T){return ae(T,function(z){return z})||[]},only:function(T){if(!G(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},Ve.Component=$,Ve.Fragment=i,Ve.Profiler=l,Ve.PureComponent=C,Ve.StrictMode=s,Ve.Suspense=g,Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,Ve.act=q,Ve.cloneElement=function(T,z,te){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var U=S({},T.props),X=T.key,le=T.ref,B=T._owner;if(z!=null){if(z.ref!==void 0&&(le=z.ref,B=L.current),z.key!==void 0&&(X=""+z.key),T.type&&T.type.defaultProps)var P=T.type.defaultProps;for(oe in z)N.call(z,oe)&&!E.hasOwnProperty(oe)&&(U[oe]=z[oe]===void 0&&P!==void 0?P[oe]:z[oe])}var oe=arguments.length-2;if(oe===1)U.children=te;else if(1<oe){P=Array(oe);for(var fe=0;fe<oe;fe++)P[fe]=arguments[fe+2];U.children=P}return{$$typeof:e,type:T.type,key:X,ref:le,props:U,_owner:B}},Ve.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:d,_context:T},T.Consumer=T},Ve.createElement=A,Ve.createFactory=function(T){var z=A.bind(null,T);return z.type=T,z},Ve.createRef=function(){return{current:null}},Ve.forwardRef=function(T){return{$$typeof:p,render:T}},Ve.isValidElement=G,Ve.lazy=function(T){return{$$typeof:y,_payload:{_status:-1,_result:T},_init:ce}},Ve.memo=function(T,z){return{$$typeof:x,type:T,compare:z===void 0?null:z}},Ve.startTransition=function(T){var z=Q.transition;Q.transition={};try{T()}finally{Q.transition=z}},Ve.unstable_act=q,Ve.useCallback=function(T,z){return se.current.useCallback(T,z)},Ve.useContext=function(T){return se.current.useContext(T)},Ve.useDebugValue=function(){},Ve.useDeferredValue=function(T){return se.current.useDeferredValue(T)},Ve.useEffect=function(T,z){return se.current.useEffect(T,z)},Ve.useId=function(){return se.current.useId()},Ve.useImperativeHandle=function(T,z,te){return se.current.useImperativeHandle(T,z,te)},Ve.useInsertionEffect=function(T,z){return se.current.useInsertionEffect(T,z)},Ve.useLayoutEffect=function(T,z){return se.current.useLayoutEffect(T,z)},Ve.useMemo=function(T,z){return se.current.useMemo(T,z)},Ve.useReducer=function(T,z,te){return se.current.useReducer(T,z,te)},Ve.useRef=function(T){return se.current.useRef(T)},Ve.useState=function(T){return se.current.useState(T)},Ve.useSyncExternalStore=function(T,z,te){return se.current.useSyncExternalStore(T,z,te)},Ve.useTransition=function(){return se.current.useTransition()},Ve.version="18.3.1",Ve}var wf;function Xu(){return wf||(wf=1,Vd.exports=l3()),Vd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf;function c3(){if(bf)return pi;bf=1;var e=Xu(),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function h(p,g,x){var y,w={},k=null,R=null;x!==void 0&&(k=""+x),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(R=g.ref);for(y in g)s.call(g,y)&&!d.hasOwnProperty(y)&&(w[y]=g[y]);if(p&&p.defaultProps)for(y in g=p.defaultProps,g)w[y]===void 0&&(w[y]=g[y]);return{$$typeof:o,type:p,key:k,ref:R,props:w,_owner:l.current}}return pi.Fragment=i,pi.jsx=h,pi.jsxs=h,pi}var kf;function d3(){return kf||(kf=1,qd.exports=c3()),qd.exports}var n=d3(),v=Xu();const pn=U0(v);var Xs={},Gd={exports:{}},ln={},Yd={exports:{}},Kd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function u3(){return _f||(_f=1,(function(e){function o(Q,O){var q=Q.length;Q.push(O);e:for(;0<q;){var T=q-1>>>1,z=Q[T];if(0<l(z,O))Q[T]=O,Q[q]=z,q=T;else break e}}function i(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var O=Q[0],q=Q.pop();if(q!==O){Q[0]=q;e:for(var T=0,z=Q.length,te=z>>>1;T<te;){var U=2*(T+1)-1,X=Q[U],le=U+1,B=Q[le];if(0>l(X,q))le<z&&0>l(B,X)?(Q[T]=B,Q[le]=q,T=le):(Q[T]=X,Q[U]=q,T=U);else if(le<z&&0>l(B,q))Q[T]=B,Q[le]=q,T=le;else break e}}return O}function l(Q,O){var q=Q.sortIndex-O.sortIndex;return q!==0?q:Q.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var h=Date,p=h.now();e.unstable_now=function(){return h.now()-p}}var g=[],x=[],y=1,w=null,k=3,R=!1,S=!1,_=!1,$=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(Q){for(var O=i(x);O!==null;){if(O.callback===null)s(x);else if(O.startTime<=Q)s(x),O.sortIndex=O.expirationTime,o(g,O);else break;O=i(x)}}function D(Q){if(_=!1,j(Q),!S)if(i(g)!==null)S=!0,ce(N);else{var O=i(x);O!==null&&se(D,O.startTime-Q)}}function N(Q,O){S=!1,_&&(_=!1,M(A),A=-1),R=!0;var q=k;try{for(j(O),w=i(g);w!==null&&(!(w.expirationTime>O)||Q&&!Y());){var T=w.callback;if(typeof T=="function"){w.callback=null,k=w.priorityLevel;var z=T(w.expirationTime<=O);O=e.unstable_now(),typeof z=="function"?w.callback=z:w===i(g)&&s(g),j(O)}else s(g);w=i(g)}if(w!==null)var te=!0;else{var U=i(x);U!==null&&se(D,U.startTime-O),te=!1}return te}finally{w=null,k=q,R=!1}}var L=!1,E=null,A=-1,F=5,G=-1;function Y(){return!(e.unstable_now()-G<F)}function W(){if(E!==null){var Q=e.unstable_now();G=Q;var O=!0;try{O=E(!0,Q)}finally{O?K():(L=!1,E=null)}}else L=!1}var K;if(typeof C=="function")K=function(){C(W)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ae=J.port2;J.port1.onmessage=W,K=function(){ae.postMessage(null)}}else K=function(){$(W,0)};function ce(Q){E=Q,L||(L=!0,K())}function se(Q,O){A=$(function(){Q(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Q){Q.callback=null},e.unstable_continueExecution=function(){S||R||(S=!0,ce(N))},e.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<Q?Math.floor(1e3/Q):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_getFirstCallbackNode=function(){return i(g)},e.unstable_next=function(Q){switch(k){case 1:case 2:case 3:var O=3;break;default:O=k}var q=k;k=O;try{return Q()}finally{k=q}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Q,O){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var q=k;k=Q;try{return O()}finally{k=q}},e.unstable_scheduleCallback=function(Q,O,q){var T=e.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?T+q:T):q=T,Q){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=q+z,Q={id:y++,callback:O,priorityLevel:Q,startTime:q,expirationTime:z,sortIndex:-1},q>T?(Q.sortIndex=q,o(x,Q),i(g)===null&&Q===i(x)&&(_?(M(A),A=-1):_=!0,se(D,q-T))):(Q.sortIndex=z,o(g,Q),S||R||(S=!0,ce(N))),Q},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(Q){var O=k;return function(){var q=k;k=O;try{return Q.apply(this,arguments)}finally{k=q}}}})(Kd)),Kd}var Cf;function h3(){return Cf||(Cf=1,Yd.exports=u3()),Yd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jf;function p3(){if(jf)return ln;jf=1;var e=Xu(),o=h3();function i(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(t,r){h(t,r),h(t+"Capture",r)}function h(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function k(t){return g.call(w,t)?!0:g.call(y,t)?!1:x.test(t)?w[t]=!0:(y[t]=!0,!1)}function R(t,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function S(t,r,a,c){if(r===null||typeof r>"u"||R(t,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function _(t,r,a,c,u,m,b){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=m,this.removeEmptyString=b}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$[t]=new _(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];$[r]=new _(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){$[t]=new _(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$[t]=new _(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$[t]=new _(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){$[t]=new _(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){$[t]=new _(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){$[t]=new _(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){$[t]=new _(t,5,!1,t.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function C(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(M,C);$[r]=new _(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(M,C);$[r]=new _(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(M,C);$[r]=new _(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){$[t]=new _(t,1,!1,t.toLowerCase(),null,!1,!1)}),$.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){$[t]=new _(t,1,!1,t.toLowerCase(),null,!0,!0)});function j(t,r,a,c){var u=$.hasOwnProperty(r)?$[r]:null;(u!==null?u.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(S(r,a,u,c)&&(a=null),c||u===null?k(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(r=u.attributeName,c=u.attributeNamespace,a===null?t.removeAttribute(r):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,c?t.setAttributeNS(c,r,a):t.setAttribute(r,a))))}var D=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),L=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),Y=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),Q=Symbol.iterator;function O(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var q=Object.assign,T;function z(t){if(T===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);T=r&&r[1]||""}return`
`+T+t}var te=!1;function U(t,r){if(!t||te)return"";te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(re){var c=re}Reflect.construct(t,[],r)}else{try{r.call()}catch(re){c=re}t.call(r.prototype)}else{try{throw Error()}catch(re){c=re}t()}}catch(re){if(re&&c&&typeof re.stack=="string"){for(var u=re.stack.split(`
`),m=c.stack.split(`
`),b=u.length-1,I=m.length-1;1<=b&&0<=I&&u[b]!==m[I];)I--;for(;1<=b&&0<=I;b--,I--)if(u[b]!==m[I]){if(b!==1||I!==1)do if(b--,I--,0>I||u[b]!==m[I]){var H=`
`+u[b].replace(" at new "," at ");return t.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",t.displayName)),H}while(1<=b&&0<=I);break}}}finally{te=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?z(t):""}function X(t){switch(t.tag){case 5:return z(t.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return t=U(t.type,!1),t;case 11:return t=U(t.type.render,!1),t;case 1:return t=U(t.type,!0),t;default:return""}}function le(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case L:return"Portal";case F:return"Profiler";case A:return"StrictMode";case K:return"Suspense";case J:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Y:return(t.displayName||"Context")+".Consumer";case G:return(t._context.displayName||"Context")+".Provider";case W:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ae:return r=t.displayName||null,r!==null?r:le(t.type)||"Memo";case ce:r=t._payload,t=t._init;try{return le(t(r))}catch{}}return null}function B(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(r);case 8:return r===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function P(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function oe(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function fe(t){var r=oe(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),c=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,m=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return u.call(this)},set:function(b){c=""+b,m.call(this,b)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function de(t){t._valueTracker||(t._valueTracker=fe(t))}function xe(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return t&&(c=oe(t)?t.checked?"true":"false":t.value),t=c,t!==a?(r.setValue(t),!0):!1}function we(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ce(t,r){var a=r.checked;return q({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Me(t,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=P(r.value!=null?r.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Pe(t,r){r=r.checked,r!=null&&j(t,"checked",r,!1)}function qe(t,r){Pe(t,r);var a=P(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Ae(t,r.type,a):r.hasOwnProperty("defaultValue")&&Ae(t,r.type,P(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function We(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Ae(t,r,a){(r!=="number"||we(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Qe=Array.isArray;function Ze(t,r,a,c){if(t=t.options,r){r={};for(var u=0;u<a.length;u++)r["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=r.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&c&&(t[a].defaultSelected=!0)}else{for(a=""+P(a),r=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,c&&(t[u].defaultSelected=!0);return}r!==null||t[u].disabled||(r=t[u])}r!==null&&(r.selected=!0)}}function yt(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(i(91));return q({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function De(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(i(92));if(Qe(a)){if(1<a.length)throw Error(i(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:P(a)}}function ve(t,r){var a=P(r.value),c=P(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function Le(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function it(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Be(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?it(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tt,Dt=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,u){MSApp.execUnsafeLocalFunction(function(){return t(r,a,c,u)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(tt=tt||document.createElement("div"),tt.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=tt.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function Xe(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ta=["Webkit","ms","Moz","O"];Object.keys(tn).forEach(function(t){Ta.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),tn[r]=tn[t]})});function Io(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||tn.hasOwnProperty(t)&&tn[t]?(""+r).trim():r+"px"}function ze(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,u=Io(a,r[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,u):t[a]=u}}var lt=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vt(t,r){if(r){if(lt[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(i(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(i(61))}if(r.style!=null&&typeof r.style!="object")throw Error(i(62))}}function Ot(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nr=null;function io(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fn=null,$r=null,Nn=null;function Po(t){if(t=Xa(t)){if(typeof fn!="function")throw Error(i(280));var r=t.stateNode;r&&(r=ps(r),fn(t.stateNode,t.type,r))}}function Hi(t){$r?Nn?Nn.push(t):Nn=[t]:$r=t}function Wi(){if($r){var t=$r,r=Nn;if(Nn=$r=null,Po(t),r)for(t=0;t<r.length;t++)Po(r[t])}}function Mr(t,r){return t(r)}function Ui(){}var so=!1;function qi(t,r,a){if(so)return t(r,a);so=!0;try{return Mr(t,r,a)}finally{so=!1,($r!==null||Nn!==null)&&(Ui(),Wi())}}function lo(t,r){var a=t.stateNode;if(a===null)return null;var c=ps(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(i(231,r,typeof a));return a}var zo=!1;if(p)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){zo=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{zo=!1}function dc(t,r,a,c,u,m,b,I,H){var re=Array.prototype.slice.call(arguments,3);try{r.apply(a,re)}catch(he){this.onError(he)}}var mn=!1,_t=null,Do=!1,ne=null,ge={onError:function(t){mn=!0,_t=t}};function ke(t,r,a,c,u,m,b,I,H){mn=!1,_t=null,dc.apply(ge,arguments)}function nt(t,r,a,c,u,m,b,I,H){if(ke.apply(this,arguments),mn){if(mn){var re=_t;mn=!1,_t=null}else throw Error(i(198));Do||(Do=!0,ne=re)}}function Te(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function Ft(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function gn(t){if(Te(t)!==t)throw Error(i(188))}function Bt(t){var r=t.alternate;if(!r){if(r=Te(t),r===null)throw Error(i(188));return r!==t?null:t}for(var a=t,c=r;;){var u=a.return;if(u===null)break;var m=u.alternate;if(m===null){if(c=u.return,c!==null){a=c;continue}break}if(u.child===m.child){for(m=u.child;m;){if(m===a)return gn(u),t;if(m===c)return gn(u),r;m=m.sibling}throw Error(i(188))}if(a.return!==c.return)a=u,c=m;else{for(var b=!1,I=u.child;I;){if(I===a){b=!0,a=u,c=m;break}if(I===c){b=!0,c=u,a=m;break}I=I.sibling}if(!b){for(I=m.child;I;){if(I===a){b=!0,a=m,c=u;break}if(I===c){b=!0,c=m,a=u;break}I=I.sibling}if(!b)throw Error(i(189))}}if(a.alternate!==c)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?t:r}function Ln(t){return t=Bt(t),t!==null?Vi(t):null}function Vi(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Vi(t);if(r!==null)return r;t=t.sibling}return null}var qh=o.unstable_scheduleCallback,Vh=o.unstable_cancelCallback,yx=o.unstable_shouldYield,wx=o.unstable_requestPaint,wt=o.unstable_now,bx=o.unstable_getCurrentPriorityLevel,uc=o.unstable_ImmediatePriority,Gh=o.unstable_UserBlockingPriority,Gi=o.unstable_NormalPriority,kx=o.unstable_LowPriority,Yh=o.unstable_IdlePriority,Yi=null,rr=null;function _x(t){if(rr&&typeof rr.onCommitFiberRoot=="function")try{rr.onCommitFiberRoot(Yi,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:Sx,Cx=Math.log,jx=Math.LN2;function Sx(t){return t>>>=0,t===0?32:31-(Cx(t)/jx|0)|0}var Ki=64,Qi=4194304;function Ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zi(t,r){var a=t.pendingLanes;if(a===0)return 0;var c=0,u=t.suspendedLanes,m=t.pingedLanes,b=a&268435455;if(b!==0){var I=b&~u;I!==0?c=Ea(I):(m&=b,m!==0&&(c=Ea(m)))}else b=a&~u,b!==0?c=Ea(b):m!==0&&(c=Ea(m));if(c===0)return 0;if(r!==0&&r!==c&&(r&u)===0&&(u=c&-c,m=r&-r,u>=m||u===16&&(m&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=c;0<r;)a=31-Wn(r),u=1<<a,c|=t[a],r&=~u;return c}function $x(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mx(t,r){for(var a=t.suspendedLanes,c=t.pingedLanes,u=t.expirationTimes,m=t.pendingLanes;0<m;){var b=31-Wn(m),I=1<<b,H=u[b];H===-1?((I&a)===0||(I&c)!==0)&&(u[b]=$x(I,r)):H<=r&&(t.expiredLanes|=I),m&=~I}}function hc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Kh(){var t=Ki;return Ki<<=1,(Ki&4194240)===0&&(Ki=64),t}function pc(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function Ia(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Wn(r),t[r]=a}function Rx(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-Wn(a),m=1<<u;r[u]=0,c[u]=-1,t[u]=-1,a&=~m}}function fc(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var c=31-Wn(a),u=1<<c;u&r|t[c]&r&&(t[c]|=r),a&=~u}}var ot=0;function Qh(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Zh,mc,Xh,Jh,ep,gc=!1,Xi=[],Nr=null,Lr=null,Ar=null,Pa=new Map,za=new Map,Tr=[],Nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tp(t,r){switch(t){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Pa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(r.pointerId)}}function Da(t,r,a,c,u,m){return t===null||t.nativeEvent!==m?(t={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[u]},r!==null&&(r=Xa(r),r!==null&&mc(r)),t):(t.eventSystemFlags|=c,r=t.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),t)}function Lx(t,r,a,c,u){switch(r){case"focusin":return Nr=Da(Nr,t,r,a,c,u),!0;case"dragenter":return Lr=Da(Lr,t,r,a,c,u),!0;case"mouseover":return Ar=Da(Ar,t,r,a,c,u),!0;case"pointerover":var m=u.pointerId;return Pa.set(m,Da(Pa.get(m)||null,t,r,a,c,u)),!0;case"gotpointercapture":return m=u.pointerId,za.set(m,Da(za.get(m)||null,t,r,a,c,u)),!0}return!1}function np(t){var r=co(t.target);if(r!==null){var a=Te(r);if(a!==null){if(r=a.tag,r===13){if(r=Ft(a),r!==null){t.blockedOn=r,ep(t.priority,function(){Xh(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ji(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=xc(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);nr=c,a.target.dispatchEvent(c),nr=null}else return r=Xa(a),r!==null&&mc(r),t.blockedOn=a,!1;r.shift()}return!0}function rp(t,r,a){Ji(t)&&a.delete(r)}function Ax(){gc=!1,Nr!==null&&Ji(Nr)&&(Nr=null),Lr!==null&&Ji(Lr)&&(Lr=null),Ar!==null&&Ji(Ar)&&(Ar=null),Pa.forEach(rp),za.forEach(rp)}function Oa(t,r){t.blockedOn===r&&(t.blockedOn=null,gc||(gc=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ax)))}function Fa(t){function r(u){return Oa(u,t)}if(0<Xi.length){Oa(Xi[0],t);for(var a=1;a<Xi.length;a++){var c=Xi[a];c.blockedOn===t&&(c.blockedOn=null)}}for(Nr!==null&&Oa(Nr,t),Lr!==null&&Oa(Lr,t),Ar!==null&&Oa(Ar,t),Pa.forEach(r),za.forEach(r),a=0;a<Tr.length;a++)c=Tr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<Tr.length&&(a=Tr[0],a.blockedOn===null);)np(a),a.blockedOn===null&&Tr.shift()}var Oo=D.ReactCurrentBatchConfig,es=!0;function Tx(t,r,a,c){var u=ot,m=Oo.transition;Oo.transition=null;try{ot=1,vc(t,r,a,c)}finally{ot=u,Oo.transition=m}}function Ex(t,r,a,c){var u=ot,m=Oo.transition;Oo.transition=null;try{ot=4,vc(t,r,a,c)}finally{ot=u,Oo.transition=m}}function vc(t,r,a,c){if(es){var u=xc(t,r,a,c);if(u===null)Ic(t,r,c,ts,a),tp(t,c);else if(Lx(u,t,r,a,c))c.stopPropagation();else if(tp(t,c),r&4&&-1<Nx.indexOf(t)){for(;u!==null;){var m=Xa(u);if(m!==null&&Zh(m),m=xc(t,r,a,c),m===null&&Ic(t,r,c,ts,a),m===u)break;u=m}u!==null&&c.stopPropagation()}else Ic(t,r,c,null,a)}}var ts=null;function xc(t,r,a,c){if(ts=null,t=io(c),t=co(t),t!==null)if(r=Te(t),r===null)t=null;else if(a=r.tag,a===13){if(t=Ft(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return ts=t,null}function op(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bx()){case uc:return 1;case Gh:return 4;case Gi:case kx:return 16;case Yh:return 536870912;default:return 16}default:return 16}}var Er=null,yc=null,ns=null;function ap(){if(ns)return ns;var t,r=yc,a=r.length,c,u="value"in Er?Er.value:Er.textContent,m=u.length;for(t=0;t<a&&r[t]===u[t];t++);var b=a-t;for(c=1;c<=b&&r[a-c]===u[m-c];c++);return ns=u.slice(t,1<c?1-c:void 0)}function rs(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function os(){return!0}function ip(){return!1}function vn(t){function r(a,c,u,m,b){this._reactName=a,this._targetInst=u,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(a=t[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?os:ip,this.isPropagationStopped=ip,this}return q(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=os)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=os)},persist:function(){},isPersistent:os}),r}var Fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wc=vn(Fo),Ba=q({},Fo,{view:0,detail:0}),Ix=vn(Ba),bc,kc,Ha,as=q({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ha&&(Ha&&t.type==="mousemove"?(bc=t.screenX-Ha.screenX,kc=t.screenY-Ha.screenY):kc=bc=0,Ha=t),bc)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),sp=vn(as),Px=q({},as,{dataTransfer:0}),zx=vn(Px),Dx=q({},Ba,{relatedTarget:0}),_c=vn(Dx),Ox=q({},Fo,{animationName:0,elapsedTime:0,pseudoElement:0}),Fx=vn(Ox),Bx=q({},Fo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Hx=vn(Bx),Wx=q({},Fo,{data:0}),lp=vn(Wx),Ux={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gx(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=Vx[t])?!!r[t]:!1}function Cc(){return Gx}var Yx=q({},Ba,{key:function(t){if(t.key){var r=Ux[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=rs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(t){return t.type==="keypress"?rs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Kx=vn(Yx),Qx=q({},as,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=vn(Qx),Zx=q({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),Xx=vn(Zx),Jx=q({},Fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),ey=vn(Jx),ty=q({},as,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ny=vn(ty),ry=[9,13,27,32],jc=p&&"CompositionEvent"in window,Wa=null;p&&"documentMode"in document&&(Wa=document.documentMode);var oy=p&&"TextEvent"in window&&!Wa,dp=p&&(!jc||Wa&&8<Wa&&11>=Wa),up=" ",hp=!1;function pp(t,r){switch(t){case"keyup":return ry.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Bo=!1;function ay(t,r){switch(t){case"compositionend":return fp(r);case"keypress":return r.which!==32?null:(hp=!0,up);case"textInput":return t=r.data,t===up&&hp?null:t;default:return null}}function iy(t,r){if(Bo)return t==="compositionend"||!jc&&pp(t,r)?(t=ap(),ns=yc=Er=null,Bo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return dp&&r.locale!=="ko"?null:r.data;default:return null}}var sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!sy[t.type]:r==="textarea"}function gp(t,r,a,c){Hi(c),r=ds(r,"onChange"),0<r.length&&(a=new wc("onChange","change",null,a,c),t.push({event:a,listeners:r}))}var Ua=null,qa=null;function ly(t){Ep(t,0)}function is(t){var r=Vo(t);if(xe(r))return t}function cy(t,r){if(t==="change")return r}var vp=!1;if(p){var Sc;if(p){var $c="oninput"in document;if(!$c){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),$c=typeof xp.oninput=="function"}Sc=$c}else Sc=!1;vp=Sc&&(!document.documentMode||9<document.documentMode)}function yp(){Ua&&(Ua.detachEvent("onpropertychange",wp),qa=Ua=null)}function wp(t){if(t.propertyName==="value"&&is(qa)){var r=[];gp(r,qa,t,io(t)),qi(ly,r)}}function dy(t,r,a){t==="focusin"?(yp(),Ua=r,qa=a,Ua.attachEvent("onpropertychange",wp)):t==="focusout"&&yp()}function uy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return is(qa)}function hy(t,r){if(t==="click")return is(r)}function py(t,r){if(t==="input"||t==="change")return is(r)}function fy(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var Un=typeof Object.is=="function"?Object.is:fy;function Va(t,r){if(Un(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var u=a[c];if(!g.call(r,u)||!Un(t[u],r[u]))return!1}return!0}function bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kp(t,r){var a=bp(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=r&&c>=r)return{node:a,offset:r-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bp(a)}}function _p(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?_p(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Cp(){for(var t=window,r=we();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=we(t.document)}return r}function Mc(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function my(t){var r=Cp(),a=t.focusedElem,c=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&_p(a.ownerDocument.documentElement,a)){if(c!==null&&Mc(a)){if(r=c.start,t=c.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,m=Math.min(c.start,u);c=c.end===void 0?m:Math.min(c.end,u),!t.extend&&m>c&&(u=c,c=m,m=u),u=kp(a,m);var b=kp(a,c);u&&b&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==b.node||t.focusOffset!==b.offset)&&(r=r.createRange(),r.setStart(u.node,u.offset),t.removeAllRanges(),m>c?(t.addRange(r),t.extend(b.node,b.offset)):(r.setEnd(b.node,b.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gy=p&&"documentMode"in document&&11>=document.documentMode,Ho=null,Rc=null,Ga=null,Nc=!1;function jp(t,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nc||Ho==null||Ho!==we(c)||(c=Ho,"selectionStart"in c&&Mc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ga&&Va(Ga,c)||(Ga=c,c=ds(Rc,"onSelect"),0<c.length&&(r=new wc("onSelect","select",null,r,a),t.push({event:r,listeners:c}),r.target=Ho)))}function ss(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var Wo={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionend:ss("Transition","TransitionEnd")},Lc={},Sp={};p&&(Sp=document.createElement("div").style,"AnimationEvent"in window||(delete Wo.animationend.animation,delete Wo.animationiteration.animation,delete Wo.animationstart.animation),"TransitionEvent"in window||delete Wo.transitionend.transition);function ls(t){if(Lc[t])return Lc[t];if(!Wo[t])return t;var r=Wo[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in Sp)return Lc[t]=r[a];return t}var $p=ls("animationend"),Mp=ls("animationiteration"),Rp=ls("animationstart"),Np=ls("transitionend"),Lp=new Map,Ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,r){Lp.set(t,r),d(r,[t])}for(var Ac=0;Ac<Ap.length;Ac++){var Tc=Ap[Ac],vy=Tc.toLowerCase(),xy=Tc[0].toUpperCase()+Tc.slice(1);Ir(vy,"on"+xy)}Ir($p,"onAnimationEnd"),Ir(Mp,"onAnimationIteration"),Ir(Rp,"onAnimationStart"),Ir("dblclick","onDoubleClick"),Ir("focusin","onFocus"),Ir("focusout","onBlur"),Ir(Np,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ya));function Tp(t,r,a){var c=t.type||"unknown-event";t.currentTarget=a,nt(c,r,void 0,t),t.currentTarget=null}function Ep(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],u=c.event;c=c.listeners;e:{var m=void 0;if(r)for(var b=c.length-1;0<=b;b--){var I=c[b],H=I.instance,re=I.currentTarget;if(I=I.listener,H!==m&&u.isPropagationStopped())break e;Tp(u,I,re),m=H}else for(b=0;b<c.length;b++){if(I=c[b],H=I.instance,re=I.currentTarget,I=I.listener,H!==m&&u.isPropagationStopped())break e;Tp(u,I,re),m=H}}}if(Do)throw t=ne,Do=!1,ne=null,t}function ut(t,r){var a=r[Bc];a===void 0&&(a=r[Bc]=new Set);var c=t+"__bubble";a.has(c)||(Ip(r,t,2,!1),a.add(c))}function Ec(t,r,a){var c=0;r&&(c|=4),Ip(a,t,c,r)}var cs="_reactListening"+Math.random().toString(36).slice(2);function Ka(t){if(!t[cs]){t[cs]=!0,s.forEach(function(a){a!=="selectionchange"&&(yy.has(a)||Ec(a,!1,t),Ec(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[cs]||(r[cs]=!0,Ec("selectionchange",!1,r))}}function Ip(t,r,a,c){switch(op(r)){case 1:var u=Tx;break;case 4:u=Ex;break;default:u=vc}a=u.bind(null,r,a,t),u=void 0,!zo||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),c?u!==void 0?t.addEventListener(r,a,{capture:!0,passive:u}):t.addEventListener(r,a,!0):u!==void 0?t.addEventListener(r,a,{passive:u}):t.addEventListener(r,a,!1)}function Ic(t,r,a,c,u){var m=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var I=c.stateNode.containerInfo;if(I===u||I.nodeType===8&&I.parentNode===u)break;if(b===4)for(b=c.return;b!==null;){var H=b.tag;if((H===3||H===4)&&(H=b.stateNode.containerInfo,H===u||H.nodeType===8&&H.parentNode===u))return;b=b.return}for(;I!==null;){if(b=co(I),b===null)return;if(H=b.tag,H===5||H===6){c=m=b;continue e}I=I.parentNode}}c=c.return}qi(function(){var re=m,he=io(a),pe=[];e:{var ue=Lp.get(t);if(ue!==void 0){var ye=wc,je=t;switch(t){case"keypress":if(rs(a)===0)break e;case"keydown":case"keyup":ye=Kx;break;case"focusin":je="focus",ye=_c;break;case"focusout":je="blur",ye=_c;break;case"beforeblur":case"afterblur":ye=_c;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=Xx;break;case $p:case Mp:case Rp:ye=Fx;break;case Np:ye=ey;break;case"scroll":ye=Ix;break;case"wheel":ye=ny;break;case"copy":case"cut":case"paste":ye=Hx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=cp}var Se=(r&4)!==0,bt=!Se&&t==="scroll",Z=Se?ue!==null?ue+"Capture":null:ue;Se=[];for(var V=re,ee;V!==null;){ee=V;var me=ee.stateNode;if(ee.tag===5&&me!==null&&(ee=me,Z!==null&&(me=lo(V,Z),me!=null&&Se.push(Qa(V,me,ee)))),bt)break;V=V.return}0<Se.length&&(ue=new ye(ue,je,null,a,he),pe.push({event:ue,listeners:Se}))}}if((r&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",ye=t==="mouseout"||t==="pointerout",ue&&a!==nr&&(je=a.relatedTarget||a.fromElement)&&(co(je)||je[hr]))break e;if((ye||ue)&&(ue=he.window===he?he:(ue=he.ownerDocument)?ue.defaultView||ue.parentWindow:window,ye?(je=a.relatedTarget||a.toElement,ye=re,je=je?co(je):null,je!==null&&(bt=Te(je),je!==bt||je.tag!==5&&je.tag!==6)&&(je=null)):(ye=null,je=re),ye!==je)){if(Se=sp,me="onMouseLeave",Z="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Se=cp,me="onPointerLeave",Z="onPointerEnter",V="pointer"),bt=ye==null?ue:Vo(ye),ee=je==null?ue:Vo(je),ue=new Se(me,V+"leave",ye,a,he),ue.target=bt,ue.relatedTarget=ee,me=null,co(he)===re&&(Se=new Se(Z,V+"enter",je,a,he),Se.target=ee,Se.relatedTarget=bt,me=Se),bt=me,ye&&je)t:{for(Se=ye,Z=je,V=0,ee=Se;ee;ee=Uo(ee))V++;for(ee=0,me=Z;me;me=Uo(me))ee++;for(;0<V-ee;)Se=Uo(Se),V--;for(;0<ee-V;)Z=Uo(Z),ee--;for(;V--;){if(Se===Z||Z!==null&&Se===Z.alternate)break t;Se=Uo(Se),Z=Uo(Z)}Se=null}else Se=null;ye!==null&&Pp(pe,ue,ye,Se,!1),je!==null&&bt!==null&&Pp(pe,bt,je,Se,!0)}}e:{if(ue=re?Vo(re):window,ye=ue.nodeName&&ue.nodeName.toLowerCase(),ye==="select"||ye==="input"&&ue.type==="file")var $e=cy;else if(mp(ue))if(vp)$e=py;else{$e=uy;var Re=dy}else(ye=ue.nodeName)&&ye.toLowerCase()==="input"&&(ue.type==="checkbox"||ue.type==="radio")&&($e=hy);if($e&&($e=$e(t,re))){gp(pe,$e,a,he);break e}Re&&Re(t,ue,re),t==="focusout"&&(Re=ue._wrapperState)&&Re.controlled&&ue.type==="number"&&Ae(ue,"number",ue.value)}switch(Re=re?Vo(re):window,t){case"focusin":(mp(Re)||Re.contentEditable==="true")&&(Ho=Re,Rc=re,Ga=null);break;case"focusout":Ga=Rc=Ho=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,jp(pe,a,he);break;case"selectionchange":if(gy)break;case"keydown":case"keyup":jp(pe,a,he)}var Ne;if(jc)e:{switch(t){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Bo?pp(t,a)&&(Ee="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(dp&&a.locale!=="ko"&&(Bo||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Bo&&(Ne=ap()):(Er=he,yc="value"in Er?Er.value:Er.textContent,Bo=!0)),Re=ds(re,Ee),0<Re.length&&(Ee=new lp(Ee,t,null,a,he),pe.push({event:Ee,listeners:Re}),Ne?Ee.data=Ne:(Ne=fp(a),Ne!==null&&(Ee.data=Ne)))),(Ne=oy?ay(t,a):iy(t,a))&&(re=ds(re,"onBeforeInput"),0<re.length&&(he=new lp("onBeforeInput","beforeinput",null,a,he),pe.push({event:he,listeners:re}),he.data=Ne))}Ep(pe,r)})}function Qa(t,r,a){return{instance:t,listener:r,currentTarget:a}}function ds(t,r){for(var a=r+"Capture",c=[];t!==null;){var u=t,m=u.stateNode;u.tag===5&&m!==null&&(u=m,m=lo(t,a),m!=null&&c.unshift(Qa(t,m,u)),m=lo(t,r),m!=null&&c.push(Qa(t,m,u))),t=t.return}return c}function Uo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pp(t,r,a,c,u){for(var m=r._reactName,b=[];a!==null&&a!==c;){var I=a,H=I.alternate,re=I.stateNode;if(H!==null&&H===c)break;I.tag===5&&re!==null&&(I=re,u?(H=lo(a,m),H!=null&&b.unshift(Qa(a,H,I))):u||(H=lo(a,m),H!=null&&b.push(Qa(a,H,I)))),a=a.return}b.length!==0&&t.push({event:r,listeners:b})}var wy=/\r\n?/g,by=/\u0000|\uFFFD/g;function zp(t){return(typeof t=="string"?t:""+t).replace(wy,`
`).replace(by,"")}function us(t,r,a){if(r=zp(r),zp(t)!==r&&a)throw Error(i(425))}function hs(){}var Pc=null,zc=null;function Dc(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,ky=typeof clearTimeout=="function"?clearTimeout:void 0,Dp=typeof Promise=="function"?Promise:void 0,_y=typeof queueMicrotask=="function"?queueMicrotask:typeof Dp<"u"?function(t){return Dp.resolve(null).then(t).catch(Cy)}:Oc;function Cy(t){setTimeout(function(){throw t})}function Fc(t,r){var a=r,c=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(c===0){t.removeChild(u),Fa(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=u}while(a);Fa(r)}function Pr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Op(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var qo=Math.random().toString(36).slice(2),or="__reactFiber$"+qo,Za="__reactProps$"+qo,hr="__reactContainer$"+qo,Bc="__reactEvents$"+qo,jy="__reactListeners$"+qo,Sy="__reactHandles$"+qo;function co(t){var r=t[or];if(r)return r;for(var a=t.parentNode;a;){if(r=a[hr]||a[or]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=Op(t);t!==null;){if(a=t[or])return a;t=Op(t)}return r}t=a,a=t.parentNode}return null}function Xa(t){return t=t[or]||t[hr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function ps(t){return t[Za]||null}var Hc=[],Go=-1;function zr(t){return{current:t}}function ht(t){0>Go||(t.current=Hc[Go],Hc[Go]=null,Go--)}function ct(t,r){Go++,Hc[Go]=t.current,t.current=r}var Dr={},Gt=zr(Dr),nn=zr(!1),uo=Dr;function Yo(t,r){var a=t.type.contextTypes;if(!a)return Dr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var u={},m;for(m in a)u[m]=r[m];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=u),u}function rn(t){return t=t.childContextTypes,t!=null}function fs(){ht(nn),ht(Gt)}function Fp(t,r,a){if(Gt.current!==Dr)throw Error(i(168));ct(Gt,r),ct(nn,a)}function Bp(t,r,a){var c=t.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var u in c)if(!(u in r))throw Error(i(108,B(t)||"Unknown",u));return q({},a,c)}function ms(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,uo=Gt.current,ct(Gt,t),ct(nn,nn.current),!0}function Hp(t,r,a){var c=t.stateNode;if(!c)throw Error(i(169));a?(t=Bp(t,r,uo),c.__reactInternalMemoizedMergedChildContext=t,ht(nn),ht(Gt),ct(Gt,t)):ht(nn),ct(nn,a)}var pr=null,gs=!1,Wc=!1;function Wp(t){pr===null?pr=[t]:pr.push(t)}function $y(t){gs=!0,Wp(t)}function Or(){if(!Wc&&pr!==null){Wc=!0;var t=0,r=ot;try{var a=pr;for(ot=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}pr=null,gs=!1}catch(u){throw pr!==null&&(pr=pr.slice(t+1)),qh(uc,Or),u}finally{ot=r,Wc=!1}}return null}var Ko=[],Qo=0,vs=null,xs=0,An=[],Tn=0,ho=null,fr=1,mr="";function po(t,r){Ko[Qo++]=xs,Ko[Qo++]=vs,vs=t,xs=r}function Up(t,r,a){An[Tn++]=fr,An[Tn++]=mr,An[Tn++]=ho,ho=t;var c=fr;t=mr;var u=32-Wn(c)-1;c&=~(1<<u),a+=1;var m=32-Wn(r)+u;if(30<m){var b=u-u%5;m=(c&(1<<b)-1).toString(32),c>>=b,u-=b,fr=1<<32-Wn(r)+u|a<<u|c,mr=m+t}else fr=1<<m|a<<u|c,mr=t}function Uc(t){t.return!==null&&(po(t,1),Up(t,1,0))}function qc(t){for(;t===vs;)vs=Ko[--Qo],Ko[Qo]=null,xs=Ko[--Qo],Ko[Qo]=null;for(;t===ho;)ho=An[--Tn],An[Tn]=null,mr=An[--Tn],An[Tn]=null,fr=An[--Tn],An[Tn]=null}var xn=null,yn=null,ft=!1,qn=null;function qp(t,r){var a=zn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function Vp(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,xn=t,yn=Pr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,xn=t,yn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=ho!==null?{id:fr,overflow:mr}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=zn(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,xn=t,yn=null,!0):!1;default:return!1}}function Vc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gc(t){if(ft){var r=yn;if(r){var a=r;if(!Vp(t,r)){if(Vc(t))throw Error(i(418));r=Pr(a.nextSibling);var c=xn;r&&Vp(t,r)?qp(c,a):(t.flags=t.flags&-4097|2,ft=!1,xn=t)}}else{if(Vc(t))throw Error(i(418));t.flags=t.flags&-4097|2,ft=!1,xn=t}}}function Gp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function ys(t){if(t!==xn)return!1;if(!ft)return Gp(t),ft=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Dc(t.type,t.memoizedProps)),r&&(r=yn)){if(Vc(t))throw Yp(),Error(i(418));for(;r;)qp(t,r),r=Pr(r.nextSibling)}if(Gp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){yn=Pr(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}yn=null}}else yn=xn?Pr(t.stateNode.nextSibling):null;return!0}function Yp(){for(var t=yn;t;)t=Pr(t.nextSibling)}function Zo(){yn=xn=null,ft=!1}function Yc(t){qn===null?qn=[t]:qn.push(t)}var My=D.ReactCurrentBatchConfig;function Ja(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(i(309));var c=a.stateNode}if(!c)throw Error(i(147,t));var u=c,m=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===m?r.ref:(r=function(b){var I=u.refs;b===null?delete I[m]:I[m]=b},r._stringRef=m,r)}if(typeof t!="string")throw Error(i(284));if(!a._owner)throw Error(i(290,t))}return t}function ws(t,r){throw t=Object.prototype.toString.call(r),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Kp(t){var r=t._init;return r(t._payload)}function Qp(t){function r(Z,V){if(t){var ee=Z.deletions;ee===null?(Z.deletions=[V],Z.flags|=16):ee.push(V)}}function a(Z,V){if(!t)return null;for(;V!==null;)r(Z,V),V=V.sibling;return null}function c(Z,V){for(Z=new Map;V!==null;)V.key!==null?Z.set(V.key,V):Z.set(V.index,V),V=V.sibling;return Z}function u(Z,V){return Z=Gr(Z,V),Z.index=0,Z.sibling=null,Z}function m(Z,V,ee){return Z.index=ee,t?(ee=Z.alternate,ee!==null?(ee=ee.index,ee<V?(Z.flags|=2,V):ee):(Z.flags|=2,V)):(Z.flags|=1048576,V)}function b(Z){return t&&Z.alternate===null&&(Z.flags|=2),Z}function I(Z,V,ee,me){return V===null||V.tag!==6?(V=Od(ee,Z.mode,me),V.return=Z,V):(V=u(V,ee),V.return=Z,V)}function H(Z,V,ee,me){var $e=ee.type;return $e===E?he(Z,V,ee.props.children,me,ee.key):V!==null&&(V.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ce&&Kp($e)===V.type)?(me=u(V,ee.props),me.ref=Ja(Z,V,ee),me.return=Z,me):(me=Us(ee.type,ee.key,ee.props,null,Z.mode,me),me.ref=Ja(Z,V,ee),me.return=Z,me)}function re(Z,V,ee,me){return V===null||V.tag!==4||V.stateNode.containerInfo!==ee.containerInfo||V.stateNode.implementation!==ee.implementation?(V=Fd(ee,Z.mode,me),V.return=Z,V):(V=u(V,ee.children||[]),V.return=Z,V)}function he(Z,V,ee,me,$e){return V===null||V.tag!==7?(V=bo(ee,Z.mode,me,$e),V.return=Z,V):(V=u(V,ee),V.return=Z,V)}function pe(Z,V,ee){if(typeof V=="string"&&V!==""||typeof V=="number")return V=Od(""+V,Z.mode,ee),V.return=Z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case N:return ee=Us(V.type,V.key,V.props,null,Z.mode,ee),ee.ref=Ja(Z,null,V),ee.return=Z,ee;case L:return V=Fd(V,Z.mode,ee),V.return=Z,V;case ce:var me=V._init;return pe(Z,me(V._payload),ee)}if(Qe(V)||O(V))return V=bo(V,Z.mode,ee,null),V.return=Z,V;ws(Z,V)}return null}function ue(Z,V,ee,me){var $e=V!==null?V.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return $e!==null?null:I(Z,V,""+ee,me);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case N:return ee.key===$e?H(Z,V,ee,me):null;case L:return ee.key===$e?re(Z,V,ee,me):null;case ce:return $e=ee._init,ue(Z,V,$e(ee._payload),me)}if(Qe(ee)||O(ee))return $e!==null?null:he(Z,V,ee,me,null);ws(Z,ee)}return null}function ye(Z,V,ee,me,$e){if(typeof me=="string"&&me!==""||typeof me=="number")return Z=Z.get(ee)||null,I(V,Z,""+me,$e);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case N:return Z=Z.get(me.key===null?ee:me.key)||null,H(V,Z,me,$e);case L:return Z=Z.get(me.key===null?ee:me.key)||null,re(V,Z,me,$e);case ce:var Re=me._init;return ye(Z,V,ee,Re(me._payload),$e)}if(Qe(me)||O(me))return Z=Z.get(ee)||null,he(V,Z,me,$e,null);ws(V,me)}return null}function je(Z,V,ee,me){for(var $e=null,Re=null,Ne=V,Ee=V=0,Tt=null;Ne!==null&&Ee<ee.length;Ee++){Ne.index>Ee?(Tt=Ne,Ne=null):Tt=Ne.sibling;var et=ue(Z,Ne,ee[Ee],me);if(et===null){Ne===null&&(Ne=Tt);break}t&&Ne&&et.alternate===null&&r(Z,Ne),V=m(et,V,Ee),Re===null?$e=et:Re.sibling=et,Re=et,Ne=Tt}if(Ee===ee.length)return a(Z,Ne),ft&&po(Z,Ee),$e;if(Ne===null){for(;Ee<ee.length;Ee++)Ne=pe(Z,ee[Ee],me),Ne!==null&&(V=m(Ne,V,Ee),Re===null?$e=Ne:Re.sibling=Ne,Re=Ne);return ft&&po(Z,Ee),$e}for(Ne=c(Z,Ne);Ee<ee.length;Ee++)Tt=ye(Ne,Z,Ee,ee[Ee],me),Tt!==null&&(t&&Tt.alternate!==null&&Ne.delete(Tt.key===null?Ee:Tt.key),V=m(Tt,V,Ee),Re===null?$e=Tt:Re.sibling=Tt,Re=Tt);return t&&Ne.forEach(function(Yr){return r(Z,Yr)}),ft&&po(Z,Ee),$e}function Se(Z,V,ee,me){var $e=O(ee);if(typeof $e!="function")throw Error(i(150));if(ee=$e.call(ee),ee==null)throw Error(i(151));for(var Re=$e=null,Ne=V,Ee=V=0,Tt=null,et=ee.next();Ne!==null&&!et.done;Ee++,et=ee.next()){Ne.index>Ee?(Tt=Ne,Ne=null):Tt=Ne.sibling;var Yr=ue(Z,Ne,et.value,me);if(Yr===null){Ne===null&&(Ne=Tt);break}t&&Ne&&Yr.alternate===null&&r(Z,Ne),V=m(Yr,V,Ee),Re===null?$e=Yr:Re.sibling=Yr,Re=Yr,Ne=Tt}if(et.done)return a(Z,Ne),ft&&po(Z,Ee),$e;if(Ne===null){for(;!et.done;Ee++,et=ee.next())et=pe(Z,et.value,me),et!==null&&(V=m(et,V,Ee),Re===null?$e=et:Re.sibling=et,Re=et);return ft&&po(Z,Ee),$e}for(Ne=c(Z,Ne);!et.done;Ee++,et=ee.next())et=ye(Ne,Z,Ee,et.value,me),et!==null&&(t&&et.alternate!==null&&Ne.delete(et.key===null?Ee:et.key),V=m(et,V,Ee),Re===null?$e=et:Re.sibling=et,Re=et);return t&&Ne.forEach(function(s3){return r(Z,s3)}),ft&&po(Z,Ee),$e}function bt(Z,V,ee,me){if(typeof ee=="object"&&ee!==null&&ee.type===E&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case N:e:{for(var $e=ee.key,Re=V;Re!==null;){if(Re.key===$e){if($e=ee.type,$e===E){if(Re.tag===7){a(Z,Re.sibling),V=u(Re,ee.props.children),V.return=Z,Z=V;break e}}else if(Re.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===ce&&Kp($e)===Re.type){a(Z,Re.sibling),V=u(Re,ee.props),V.ref=Ja(Z,Re,ee),V.return=Z,Z=V;break e}a(Z,Re);break}else r(Z,Re);Re=Re.sibling}ee.type===E?(V=bo(ee.props.children,Z.mode,me,ee.key),V.return=Z,Z=V):(me=Us(ee.type,ee.key,ee.props,null,Z.mode,me),me.ref=Ja(Z,V,ee),me.return=Z,Z=me)}return b(Z);case L:e:{for(Re=ee.key;V!==null;){if(V.key===Re)if(V.tag===4&&V.stateNode.containerInfo===ee.containerInfo&&V.stateNode.implementation===ee.implementation){a(Z,V.sibling),V=u(V,ee.children||[]),V.return=Z,Z=V;break e}else{a(Z,V);break}else r(Z,V);V=V.sibling}V=Fd(ee,Z.mode,me),V.return=Z,Z=V}return b(Z);case ce:return Re=ee._init,bt(Z,V,Re(ee._payload),me)}if(Qe(ee))return je(Z,V,ee,me);if(O(ee))return Se(Z,V,ee,me);ws(Z,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,V!==null&&V.tag===6?(a(Z,V.sibling),V=u(V,ee),V.return=Z,Z=V):(a(Z,V),V=Od(ee,Z.mode,me),V.return=Z,Z=V),b(Z)):a(Z,V)}return bt}var Xo=Qp(!0),Zp=Qp(!1),bs=zr(null),ks=null,Jo=null,Kc=null;function Qc(){Kc=Jo=ks=null}function Zc(t){var r=bs.current;ht(bs),t._currentValue=r}function Xc(t,r,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),t===a)break;t=t.return}}function ea(t,r){ks=t,Kc=Jo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(on=!0),t.firstContext=null)}function En(t){var r=t._currentValue;if(Kc!==t)if(t={context:t,memoizedValue:r,next:null},Jo===null){if(ks===null)throw Error(i(308));Jo=t,ks.dependencies={lanes:0,firstContext:t}}else Jo=Jo.next=t;return r}var fo=null;function Jc(t){fo===null?fo=[t]:fo.push(t)}function Xp(t,r,a,c){var u=r.interleaved;return u===null?(a.next=a,Jc(r)):(a.next=u.next,u.next=a),r.interleaved=a,gr(t,c)}function gr(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Fr=!1;function ed(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jp(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Br(t,r,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Je&2)!==0){var u=c.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),c.pending=r,gr(t,a)}return u=c.interleaved,u===null?(r.next=r,Jc(c)):(r.next=u.next,u.next=r),c.interleaved=r,gr(t,a)}function _s(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,fc(t,a)}}function e1(t,r){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var u=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?u=m=b:m=m.next=b,a=a.next}while(a!==null);m===null?u=m=r:m=m.next=r}else u=m=r;a={baseState:c.baseState,firstBaseUpdate:u,lastBaseUpdate:m,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function Cs(t,r,a,c){var u=t.updateQueue;Fr=!1;var m=u.firstBaseUpdate,b=u.lastBaseUpdate,I=u.shared.pending;if(I!==null){u.shared.pending=null;var H=I,re=H.next;H.next=null,b===null?m=re:b.next=re,b=H;var he=t.alternate;he!==null&&(he=he.updateQueue,I=he.lastBaseUpdate,I!==b&&(I===null?he.firstBaseUpdate=re:I.next=re,he.lastBaseUpdate=H))}if(m!==null){var pe=u.baseState;b=0,he=re=H=null,I=m;do{var ue=I.lane,ye=I.eventTime;if((c&ue)===ue){he!==null&&(he=he.next={eventTime:ye,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var je=t,Se=I;switch(ue=r,ye=a,Se.tag){case 1:if(je=Se.payload,typeof je=="function"){pe=je.call(ye,pe,ue);break e}pe=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Se.payload,ue=typeof je=="function"?je.call(ye,pe,ue):je,ue==null)break e;pe=q({},pe,ue);break e;case 2:Fr=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,ue=u.effects,ue===null?u.effects=[I]:ue.push(I))}else ye={eventTime:ye,lane:ue,tag:I.tag,payload:I.payload,callback:I.callback,next:null},he===null?(re=he=ye,H=pe):he=he.next=ye,b|=ue;if(I=I.next,I===null){if(I=u.shared.pending,I===null)break;ue=I,I=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);if(he===null&&(H=pe),u.baseState=H,u.firstBaseUpdate=re,u.lastBaseUpdate=he,r=u.shared.interleaved,r!==null){u=r;do b|=u.lane,u=u.next;while(u!==r)}else m===null&&(u.shared.lanes=0);vo|=b,t.lanes=b,t.memoizedState=pe}}function t1(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var c=t[r],u=c.callback;if(u!==null){if(c.callback=null,c=a,typeof u!="function")throw Error(i(191,u));u.call(c)}}}var ei={},ar=zr(ei),ti=zr(ei),ni=zr(ei);function mo(t){if(t===ei)throw Error(i(174));return t}function td(t,r){switch(ct(ni,r),ct(ti,t),ct(ar,ei),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Be(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=Be(r,t)}ht(ar),ct(ar,r)}function ta(){ht(ar),ht(ti),ht(ni)}function n1(t){mo(ni.current);var r=mo(ar.current),a=Be(r,t.type);r!==a&&(ct(ti,t),ct(ar,a))}function nd(t){ti.current===t&&(ht(ar),ht(ti))}var mt=zr(0);function js(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var rd=[];function od(){for(var t=0;t<rd.length;t++)rd[t]._workInProgressVersionPrimary=null;rd.length=0}var Ss=D.ReactCurrentDispatcher,ad=D.ReactCurrentBatchConfig,go=0,gt=null,$t=null,Lt=null,$s=!1,ri=!1,oi=0,Ry=0;function Yt(){throw Error(i(321))}function id(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!Un(t[a],r[a]))return!1;return!0}function sd(t,r,a,c,u,m){if(go=m,gt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ss.current=t===null||t.memoizedState===null?Ty:Ey,t=a(c,u),ri){m=0;do{if(ri=!1,oi=0,25<=m)throw Error(i(301));m+=1,Lt=$t=null,r.updateQueue=null,Ss.current=Iy,t=a(c,u)}while(ri)}if(Ss.current=Ns,r=$t!==null&&$t.next!==null,go=0,Lt=$t=gt=null,$s=!1,r)throw Error(i(300));return t}function ld(){var t=oi!==0;return oi=0,t}function ir(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?gt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function In(){if($t===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var r=Lt===null?gt.memoizedState:Lt.next;if(r!==null)Lt=r,$t=t;else{if(t===null)throw Error(i(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},Lt===null?gt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function ai(t,r){return typeof r=="function"?r(t):r}function cd(t){var r=In(),a=r.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var c=$t,u=c.baseQueue,m=a.pending;if(m!==null){if(u!==null){var b=u.next;u.next=m.next,m.next=b}c.baseQueue=u=m,a.pending=null}if(u!==null){m=u.next,c=c.baseState;var I=b=null,H=null,re=m;do{var he=re.lane;if((go&he)===he)H!==null&&(H=H.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),c=re.hasEagerState?re.eagerState:t(c,re.action);else{var pe={lane:he,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};H===null?(I=H=pe,b=c):H=H.next=pe,gt.lanes|=he,vo|=he}re=re.next}while(re!==null&&re!==m);H===null?b=c:H.next=I,Un(c,r.memoizedState)||(on=!0),r.memoizedState=c,r.baseState=b,r.baseQueue=H,a.lastRenderedState=c}if(t=a.interleaved,t!==null){u=t;do m=u.lane,gt.lanes|=m,vo|=m,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function dd(t){var r=In(),a=r.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var c=a.dispatch,u=a.pending,m=r.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do m=t(m,b.action),b=b.next;while(b!==u);Un(m,r.memoizedState)||(on=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),a.lastRenderedState=m}return[m,c]}function r1(){}function o1(t,r){var a=gt,c=In(),u=r(),m=!Un(c.memoizedState,u);if(m&&(c.memoizedState=u,on=!0),c=c.queue,ud(s1.bind(null,a,c,t),[t]),c.getSnapshot!==r||m||Lt!==null&&Lt.memoizedState.tag&1){if(a.flags|=2048,ii(9,i1.bind(null,a,c,u,r),void 0,null),At===null)throw Error(i(349));(go&30)!==0||a1(a,r,u)}return u}function a1(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=gt.updateQueue,r===null?(r={lastEffect:null,stores:null},gt.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function i1(t,r,a,c){r.value=a,r.getSnapshot=c,l1(r)&&c1(t)}function s1(t,r,a){return a(function(){l1(r)&&c1(t)})}function l1(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!Un(t,a)}catch{return!0}}function c1(t){var r=gr(t,1);r!==null&&Kn(r,t,1,-1)}function d1(t){var r=ir();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:t},r.queue=t,t=t.dispatch=Ay.bind(null,gt,t),[r.memoizedState,t]}function ii(t,r,a,c){return t={tag:t,create:r,destroy:a,deps:c,next:null},r=gt.updateQueue,r===null?(r={lastEffect:null,stores:null},gt.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,r.lastEffect=t)),t}function u1(){return In().memoizedState}function Ms(t,r,a,c){var u=ir();gt.flags|=t,u.memoizedState=ii(1|r,a,void 0,c===void 0?null:c)}function Rs(t,r,a,c){var u=In();c=c===void 0?null:c;var m=void 0;if($t!==null){var b=$t.memoizedState;if(m=b.destroy,c!==null&&id(c,b.deps)){u.memoizedState=ii(r,a,m,c);return}}gt.flags|=t,u.memoizedState=ii(1|r,a,m,c)}function h1(t,r){return Ms(8390656,8,t,r)}function ud(t,r){return Rs(2048,8,t,r)}function p1(t,r){return Rs(4,2,t,r)}function f1(t,r){return Rs(4,4,t,r)}function m1(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function g1(t,r,a){return a=a!=null?a.concat([t]):null,Rs(4,4,m1.bind(null,r,t),a)}function hd(){}function v1(t,r){var a=In();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&id(r,c[1])?c[0]:(a.memoizedState=[t,r],t)}function x1(t,r){var a=In();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&id(r,c[1])?c[0]:(t=t(),a.memoizedState=[t,r],t)}function y1(t,r,a){return(go&21)===0?(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=a):(Un(a,r)||(a=Kh(),gt.lanes|=a,vo|=a,t.baseState=!0),r)}function Ny(t,r){var a=ot;ot=a!==0&&4>a?a:4,t(!0);var c=ad.transition;ad.transition={};try{t(!1),r()}finally{ot=a,ad.transition=c}}function w1(){return In().memoizedState}function Ly(t,r,a){var c=qr(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},b1(t))k1(r,a);else if(a=Xp(t,r,a,c),a!==null){var u=Jt();Kn(a,t,c,u),_1(a,r,c)}}function Ay(t,r,a){var c=qr(t),u={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(b1(t))k1(r,u);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var b=r.lastRenderedState,I=m(b,a);if(u.hasEagerState=!0,u.eagerState=I,Un(I,b)){var H=r.interleaved;H===null?(u.next=u,Jc(r)):(u.next=H.next,H.next=u),r.interleaved=u;return}}catch{}finally{}a=Xp(t,r,u,c),a!==null&&(u=Jt(),Kn(a,t,c,u),_1(a,r,c))}}function b1(t){var r=t.alternate;return t===gt||r!==null&&r===gt}function k1(t,r){ri=$s=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function _1(t,r,a){if((a&4194240)!==0){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,fc(t,a)}}var Ns={readContext:En,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},Ty={readContext:En,useCallback:function(t,r){return ir().memoizedState=[t,r===void 0?null:r],t},useContext:En,useEffect:h1,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,Ms(4194308,4,m1.bind(null,r,t),a)},useLayoutEffect:function(t,r){return Ms(4194308,4,t,r)},useInsertionEffect:function(t,r){return Ms(4,2,t,r)},useMemo:function(t,r){var a=ir();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var c=ir();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},c.queue=t,t=t.dispatch=Ly.bind(null,gt,t),[c.memoizedState,t]},useRef:function(t){var r=ir();return t={current:t},r.memoizedState=t},useState:d1,useDebugValue:hd,useDeferredValue:function(t){return ir().memoizedState=t},useTransition:function(){var t=d1(!1),r=t[0];return t=Ny.bind(null,t[1]),ir().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var c=gt,u=ir();if(ft){if(a===void 0)throw Error(i(407));a=a()}else{if(a=r(),At===null)throw Error(i(349));(go&30)!==0||a1(c,r,a)}u.memoizedState=a;var m={value:a,getSnapshot:r};return u.queue=m,h1(s1.bind(null,c,m,t),[t]),c.flags|=2048,ii(9,i1.bind(null,c,m,a,r),void 0,null),a},useId:function(){var t=ir(),r=At.identifierPrefix;if(ft){var a=mr,c=fr;a=(c&~(1<<32-Wn(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=oi++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=Ry++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Ey={readContext:En,useCallback:v1,useContext:En,useEffect:ud,useImperativeHandle:g1,useInsertionEffect:p1,useLayoutEffect:f1,useMemo:x1,useReducer:cd,useRef:u1,useState:function(){return cd(ai)},useDebugValue:hd,useDeferredValue:function(t){var r=In();return y1(r,$t.memoizedState,t)},useTransition:function(){var t=cd(ai)[0],r=In().memoizedState;return[t,r]},useMutableSource:r1,useSyncExternalStore:o1,useId:w1,unstable_isNewReconciler:!1},Iy={readContext:En,useCallback:v1,useContext:En,useEffect:ud,useImperativeHandle:g1,useInsertionEffect:p1,useLayoutEffect:f1,useMemo:x1,useReducer:dd,useRef:u1,useState:function(){return dd(ai)},useDebugValue:hd,useDeferredValue:function(t){var r=In();return $t===null?r.memoizedState=t:y1(r,$t.memoizedState,t)},useTransition:function(){var t=dd(ai)[0],r=In().memoizedState;return[t,r]},useMutableSource:r1,useSyncExternalStore:o1,useId:w1,unstable_isNewReconciler:!1};function Vn(t,r){if(t&&t.defaultProps){r=q({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function pd(t,r,a,c){r=t.memoizedState,a=a(c,r),a=a==null?r:q({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ls={isMounted:function(t){return(t=t._reactInternals)?Te(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var c=Jt(),u=qr(t),m=vr(c,u);m.payload=r,a!=null&&(m.callback=a),r=Br(t,m,u),r!==null&&(Kn(r,t,u,c),_s(r,t,u))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var c=Jt(),u=qr(t),m=vr(c,u);m.tag=1,m.payload=r,a!=null&&(m.callback=a),r=Br(t,m,u),r!==null&&(Kn(r,t,u,c),_s(r,t,u))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=Jt(),c=qr(t),u=vr(a,c);u.tag=2,r!=null&&(u.callback=r),r=Br(t,u,c),r!==null&&(Kn(r,t,c,a),_s(r,t,c))}};function C1(t,r,a,c,u,m,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,m,b):r.prototype&&r.prototype.isPureReactComponent?!Va(a,c)||!Va(u,m):!0}function j1(t,r,a){var c=!1,u=Dr,m=r.contextType;return typeof m=="object"&&m!==null?m=En(m):(u=rn(r)?uo:Gt.current,c=r.contextTypes,m=(c=c!=null)?Yo(t,u):Dr),r=new r(a,m),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ls,t.stateNode=r,r._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=m),r}function S1(t,r,a,c){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==t&&Ls.enqueueReplaceState(r,r.state,null)}function fd(t,r,a,c){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs={},ed(t);var m=r.contextType;typeof m=="object"&&m!==null?u.context=En(m):(m=rn(r)?uo:Gt.current,u.context=Yo(t,m)),u.state=t.memoizedState,m=r.getDerivedStateFromProps,typeof m=="function"&&(pd(t,r,m,a),u.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(r=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),r!==u.state&&Ls.enqueueReplaceState(u,u.state,null),Cs(t,a,u,c),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function na(t,r){try{var a="",c=r;do a+=X(c),c=c.return;while(c);var u=a}catch(m){u=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:r,stack:u,digest:null}}function md(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function gd(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Py=typeof WeakMap=="function"?WeakMap:Map;function $1(t,r,a){a=vr(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Ds||(Ds=!0,Ld=c),gd(t,r)},a}function M1(t,r,a){a=vr(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var u=r.value;a.payload=function(){return c(u)},a.callback=function(){gd(t,r)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){gd(t,r),typeof c!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})}),a}function R1(t,r,a){var c=t.pingCache;if(c===null){c=t.pingCache=new Py;var u=new Set;c.set(r,u)}else u=c.get(r),u===void 0&&(u=new Set,c.set(r,u));u.has(a)||(u.add(a),t=Qy.bind(null,t,r,a),r.then(t,t))}function N1(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function L1(t,r,a,c,u){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=vr(-1,1),r.tag=2,Br(a,r,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var zy=D.ReactCurrentOwner,on=!1;function Xt(t,r,a,c){r.child=t===null?Zp(r,null,a,c):Xo(r,t.child,a,c)}function A1(t,r,a,c,u){a=a.render;var m=r.ref;return ea(r,u),c=sd(t,r,a,c,m,u),a=ld(),t!==null&&!on?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,xr(t,r,u)):(ft&&a&&Uc(r),r.flags|=1,Xt(t,r,c,u),r.child)}function T1(t,r,a,c,u){if(t===null){var m=a.type;return typeof m=="function"&&!Dd(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=m,E1(t,r,m,c,u)):(t=Us(a.type,null,c,r,r.mode,u),t.ref=r.ref,t.return=r,r.child=t)}if(m=t.child,(t.lanes&u)===0){var b=m.memoizedProps;if(a=a.compare,a=a!==null?a:Va,a(b,c)&&t.ref===r.ref)return xr(t,r,u)}return r.flags|=1,t=Gr(m,c),t.ref=r.ref,t.return=r,r.child=t}function E1(t,r,a,c,u){if(t!==null){var m=t.memoizedProps;if(Va(m,c)&&t.ref===r.ref)if(on=!1,r.pendingProps=c=m,(t.lanes&u)!==0)(t.flags&131072)!==0&&(on=!0);else return r.lanes=t.lanes,xr(t,r,u)}return vd(t,r,a,c,u)}function I1(t,r,a){var c=r.pendingProps,u=c.children,m=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(oa,wn),wn|=a;else{if((a&1073741824)===0)return t=m!==null?m.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,ct(oa,wn),wn|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,ct(oa,wn),wn|=c}else m!==null?(c=m.baseLanes|a,r.memoizedState=null):c=a,ct(oa,wn),wn|=c;return Xt(t,r,u,a),r.child}function P1(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function vd(t,r,a,c,u){var m=rn(a)?uo:Gt.current;return m=Yo(r,m),ea(r,u),a=sd(t,r,a,c,m,u),c=ld(),t!==null&&!on?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,xr(t,r,u)):(ft&&c&&Uc(r),r.flags|=1,Xt(t,r,a,u),r.child)}function z1(t,r,a,c,u){if(rn(a)){var m=!0;ms(r)}else m=!1;if(ea(r,u),r.stateNode===null)Ts(t,r),j1(r,a,c),fd(r,a,c,u),c=!0;else if(t===null){var b=r.stateNode,I=r.memoizedProps;b.props=I;var H=b.context,re=a.contextType;typeof re=="object"&&re!==null?re=En(re):(re=rn(a)?uo:Gt.current,re=Yo(r,re));var he=a.getDerivedStateFromProps,pe=typeof he=="function"||typeof b.getSnapshotBeforeUpdate=="function";pe||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==c||H!==re)&&S1(r,b,c,re),Fr=!1;var ue=r.memoizedState;b.state=ue,Cs(r,c,b,u),H=r.memoizedState,I!==c||ue!==H||nn.current||Fr?(typeof he=="function"&&(pd(r,a,he,c),H=r.memoizedState),(I=Fr||C1(r,a,I,c,ue,H,re))?(pe||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=H),b.props=c,b.state=H,b.context=re,c=I):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{b=r.stateNode,Jp(t,r),I=r.memoizedProps,re=r.type===r.elementType?I:Vn(r.type,I),b.props=re,pe=r.pendingProps,ue=b.context,H=a.contextType,typeof H=="object"&&H!==null?H=En(H):(H=rn(a)?uo:Gt.current,H=Yo(r,H));var ye=a.getDerivedStateFromProps;(he=typeof ye=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(I!==pe||ue!==H)&&S1(r,b,c,H),Fr=!1,ue=r.memoizedState,b.state=ue,Cs(r,c,b,u);var je=r.memoizedState;I!==pe||ue!==je||nn.current||Fr?(typeof ye=="function"&&(pd(r,a,ye,c),je=r.memoizedState),(re=Fr||C1(r,a,re,c,ue,je,H)||!1)?(he||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,je,H),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,je,H)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=je),b.props=c,b.state=je,b.context=H,c=re):(typeof b.componentDidUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&ue===t.memoizedState||(r.flags|=1024),c=!1)}return xd(t,r,a,c,m,u)}function xd(t,r,a,c,u,m){P1(t,r);var b=(r.flags&128)!==0;if(!c&&!b)return u&&Hp(r,a,!1),xr(t,r,m);c=r.stateNode,zy.current=r;var I=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,t!==null&&b?(r.child=Xo(r,t.child,null,m),r.child=Xo(r,null,I,m)):Xt(t,r,I,m),r.memoizedState=c.state,u&&Hp(r,a,!0),r.child}function D1(t){var r=t.stateNode;r.pendingContext?Fp(t,r.pendingContext,r.pendingContext!==r.context):r.context&&Fp(t,r.context,!1),td(t,r.containerInfo)}function O1(t,r,a,c,u){return Zo(),Yc(u),r.flags|=256,Xt(t,r,a,c),r.child}var yd={dehydrated:null,treeContext:null,retryLane:0};function wd(t){return{baseLanes:t,cachePool:null,transitions:null}}function F1(t,r,a){var c=r.pendingProps,u=mt.current,m=!1,b=(r.flags&128)!==0,I;if((I=b)||(I=t!==null&&t.memoizedState===null?!1:(u&2)!==0),I?(m=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),ct(mt,u&1),t===null)return Gc(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(b=c.children,t=c.fallback,m?(c=r.mode,m=r.child,b={mode:"hidden",children:b},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=b):m=qs(b,c,0,null),t=bo(t,c,a,null),m.return=r,t.return=r,m.sibling=t,r.child=m,r.child.memoizedState=wd(a),r.memoizedState=yd,t):bd(r,b));if(u=t.memoizedState,u!==null&&(I=u.dehydrated,I!==null))return Dy(t,r,b,c,I,u,a);if(m){m=c.fallback,b=r.mode,u=t.child,I=u.sibling;var H={mode:"hidden",children:c.children};return(b&1)===0&&r.child!==u?(c=r.child,c.childLanes=0,c.pendingProps=H,r.deletions=null):(c=Gr(u,H),c.subtreeFlags=u.subtreeFlags&14680064),I!==null?m=Gr(I,m):(m=bo(m,b,a,null),m.flags|=2),m.return=r,c.return=r,c.sibling=m,r.child=c,c=m,m=r.child,b=t.child.memoizedState,b=b===null?wd(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},m.memoizedState=b,m.childLanes=t.childLanes&~a,r.memoizedState=yd,c}return m=t.child,t=m.sibling,c=Gr(m,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=c,r.memoizedState=null,c}function bd(t,r){return r=qs({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function As(t,r,a,c){return c!==null&&Yc(c),Xo(r,t.child,null,a),t=bd(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Dy(t,r,a,c,u,m,b){if(a)return r.flags&256?(r.flags&=-257,c=md(Error(i(422))),As(t,r,b,c)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(m=c.fallback,u=r.mode,c=qs({mode:"visible",children:c.children},u,0,null),m=bo(m,u,b,null),m.flags|=2,c.return=r,m.return=r,c.sibling=m,r.child=c,(r.mode&1)!==0&&Xo(r,t.child,null,b),r.child.memoizedState=wd(b),r.memoizedState=yd,m);if((r.mode&1)===0)return As(t,r,b,null);if(u.data==="$!"){if(c=u.nextSibling&&u.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(i(419)),c=md(m,c,void 0),As(t,r,b,c)}if(I=(b&t.childLanes)!==0,on||I){if(c=At,c!==null){switch(b&-b){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(c.suspendedLanes|b))!==0?0:u,u!==0&&u!==m.retryLane&&(m.retryLane=u,gr(t,u),Kn(c,t,u,-1))}return zd(),c=md(Error(i(421))),As(t,r,b,c)}return u.data==="$?"?(r.flags|=128,r.child=t.child,r=Zy.bind(null,t),u._reactRetry=r,null):(t=m.treeContext,yn=Pr(u.nextSibling),xn=r,ft=!0,qn=null,t!==null&&(An[Tn++]=fr,An[Tn++]=mr,An[Tn++]=ho,fr=t.id,mr=t.overflow,ho=r),r=bd(r,c.children),r.flags|=4096,r)}function B1(t,r,a){t.lanes|=r;var c=t.alternate;c!==null&&(c.lanes|=r),Xc(t.return,r,a)}function kd(t,r,a,c,u){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:u}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=u)}function H1(t,r,a){var c=r.pendingProps,u=c.revealOrder,m=c.tail;if(Xt(t,r,c.children,a),c=mt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&B1(t,a,r);else if(t.tag===19)B1(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(ct(mt,c),(r.mode&1)===0)r.memoizedState=null;else switch(u){case"forwards":for(a=r.child,u=null;a!==null;)t=a.alternate,t!==null&&js(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=r.child,r.child=null):(u=a.sibling,a.sibling=null),kd(r,!1,u,a,m);break;case"backwards":for(a=null,u=r.child,r.child=null;u!==null;){if(t=u.alternate,t!==null&&js(t)===null){r.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}kd(r,!0,a,null,m);break;case"together":kd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ts(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function xr(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),vo|=r.lanes,(a&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(i(153));if(r.child!==null){for(t=r.child,a=Gr(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Gr(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function Oy(t,r,a){switch(r.tag){case 3:D1(r),Zo();break;case 5:n1(r);break;case 1:rn(r.type)&&ms(r);break;case 4:td(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,u=r.memoizedProps.value;ct(bs,c._currentValue),c._currentValue=u;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(ct(mt,mt.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?F1(t,r,a):(ct(mt,mt.current&1),t=xr(t,r,a),t!==null?t.sibling:null);ct(mt,mt.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(t.flags&128)!==0){if(c)return H1(t,r,a);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ct(mt,mt.current),c)break;return null;case 22:case 23:return r.lanes=0,I1(t,r,a)}return xr(t,r,a)}var W1,_d,U1,q1;W1=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},_d=function(){},U1=function(t,r,a,c){var u=t.memoizedProps;if(u!==c){t=r.stateNode,mo(ar.current);var m=null;switch(a){case"input":u=Ce(t,u),c=Ce(t,c),m=[];break;case"select":u=q({},u,{value:void 0}),c=q({},c,{value:void 0}),m=[];break;case"textarea":u=yt(t,u),c=yt(t,c),m=[];break;default:typeof u.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=hs)}vt(a,c);var b;a=null;for(re in u)if(!c.hasOwnProperty(re)&&u.hasOwnProperty(re)&&u[re]!=null)if(re==="style"){var I=u[re];for(b in I)I.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(l.hasOwnProperty(re)?m||(m=[]):(m=m||[]).push(re,null));for(re in c){var H=c[re];if(I=u!=null?u[re]:void 0,c.hasOwnProperty(re)&&H!==I&&(H!=null||I!=null))if(re==="style")if(I){for(b in I)!I.hasOwnProperty(b)||H&&H.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in H)H.hasOwnProperty(b)&&I[b]!==H[b]&&(a||(a={}),a[b]=H[b])}else a||(m||(m=[]),m.push(re,a)),a=H;else re==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(m=m||[]).push(re,H)):re==="children"?typeof H!="string"&&typeof H!="number"||(m=m||[]).push(re,""+H):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(l.hasOwnProperty(re)?(H!=null&&re==="onScroll"&&ut("scroll",t),m||I===H||(m=[])):(m=m||[]).push(re,H))}a&&(m=m||[]).push("style",a);var re=m;(r.updateQueue=re)&&(r.flags|=4)}},q1=function(t,r,a,c){a!==c&&(r.flags|=4)};function si(t,r){if(!ft)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Kt(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(r)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags&14680064,c|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags,c|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=c,t.childLanes=a,r}function Fy(t,r,a){var c=r.pendingProps;switch(qc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kt(r),null;case 1:return rn(r.type)&&fs(),Kt(r),null;case 3:return c=r.stateNode,ta(),ht(nn),ht(Gt),od(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(ys(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,qn!==null&&(Ed(qn),qn=null))),_d(t,r),Kt(r),null;case 5:nd(r);var u=mo(ni.current);if(a=r.type,t!==null&&r.stateNode!=null)U1(t,r,a,c,u),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(i(166));return Kt(r),null}if(t=mo(ar.current),ys(r)){c=r.stateNode,a=r.type;var m=r.memoizedProps;switch(c[or]=r,c[Za]=m,t=(r.mode&1)!==0,a){case"dialog":ut("cancel",c),ut("close",c);break;case"iframe":case"object":case"embed":ut("load",c);break;case"video":case"audio":for(u=0;u<Ya.length;u++)ut(Ya[u],c);break;case"source":ut("error",c);break;case"img":case"image":case"link":ut("error",c),ut("load",c);break;case"details":ut("toggle",c);break;case"input":Me(c,m),ut("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},ut("invalid",c);break;case"textarea":De(c,m),ut("invalid",c)}vt(a,m),u=null;for(var b in m)if(m.hasOwnProperty(b)){var I=m[b];b==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&us(c.textContent,I,t),u=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&us(c.textContent,I,t),u=["children",""+I]):l.hasOwnProperty(b)&&I!=null&&b==="onScroll"&&ut("scroll",c)}switch(a){case"input":de(c),We(c,m,!0);break;case"textarea":de(c),Le(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=hs)}c=u,r.updateQueue=c,c!==null&&(r.flags|=4)}else{b=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=it(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=b.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=b.createElement(a,{is:c.is}):(t=b.createElement(a),a==="select"&&(b=t,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):t=b.createElementNS(t,a),t[or]=r,t[Za]=c,W1(t,r,!1,!1),r.stateNode=t;e:{switch(b=Ot(a,c),a){case"dialog":ut("cancel",t),ut("close",t),u=c;break;case"iframe":case"object":case"embed":ut("load",t),u=c;break;case"video":case"audio":for(u=0;u<Ya.length;u++)ut(Ya[u],t);u=c;break;case"source":ut("error",t),u=c;break;case"img":case"image":case"link":ut("error",t),ut("load",t),u=c;break;case"details":ut("toggle",t),u=c;break;case"input":Me(t,c),u=Ce(t,c),ut("invalid",t);break;case"option":u=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},u=q({},c,{value:void 0}),ut("invalid",t);break;case"textarea":De(t,c),u=yt(t,c),ut("invalid",t);break;default:u=c}vt(a,u),I=u;for(m in I)if(I.hasOwnProperty(m)){var H=I[m];m==="style"?ze(t,H):m==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Dt(t,H)):m==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&Xe(t,H):typeof H=="number"&&Xe(t,""+H):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(l.hasOwnProperty(m)?H!=null&&m==="onScroll"&&ut("scroll",t):H!=null&&j(t,m,H,b))}switch(a){case"input":de(t),We(t,c,!1);break;case"textarea":de(t),Le(t);break;case"option":c.value!=null&&t.setAttribute("value",""+P(c.value));break;case"select":t.multiple=!!c.multiple,m=c.value,m!=null?Ze(t,!!c.multiple,m,!1):c.defaultValue!=null&&Ze(t,!!c.multiple,c.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=hs)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Kt(r),null;case 6:if(t&&r.stateNode!=null)q1(t,r,t.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(i(166));if(a=mo(ni.current),mo(ar.current),ys(r)){if(c=r.stateNode,a=r.memoizedProps,c[or]=r,(m=c.nodeValue!==a)&&(t=xn,t!==null))switch(t.tag){case 3:us(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&us(c.nodeValue,a,(t.mode&1)!==0)}m&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[or]=r,r.stateNode=c}return Kt(r),null;case 13:if(ht(mt),c=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&yn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Yp(),Zo(),r.flags|=98560,m=!1;else if(m=ys(r),c!==null&&c.dehydrated!==null){if(t===null){if(!m)throw Error(i(318));if(m=r.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(i(317));m[or]=r}else Zo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Kt(r),m=!1}else qn!==null&&(Ed(qn),qn=null),m=!0;if(!m)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(mt.current&1)!==0?Mt===0&&(Mt=3):zd())),r.updateQueue!==null&&(r.flags|=4),Kt(r),null);case 4:return ta(),_d(t,r),t===null&&Ka(r.stateNode.containerInfo),Kt(r),null;case 10:return Zc(r.type._context),Kt(r),null;case 17:return rn(r.type)&&fs(),Kt(r),null;case 19:if(ht(mt),m=r.memoizedState,m===null)return Kt(r),null;if(c=(r.flags&128)!==0,b=m.rendering,b===null)if(c)si(m,!1);else{if(Mt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(b=js(t),b!==null){for(r.flags|=128,si(m,!1),c=b.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)m=a,t=c,m.flags&=14680066,b=m.alternate,b===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=b.childLanes,m.lanes=b.lanes,m.child=b.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=b.memoizedProps,m.memoizedState=b.memoizedState,m.updateQueue=b.updateQueue,m.type=b.type,t=b.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return ct(mt,mt.current&1|2),r.child}t=t.sibling}m.tail!==null&&wt()>aa&&(r.flags|=128,c=!0,si(m,!1),r.lanes=4194304)}else{if(!c)if(t=js(b),t!==null){if(r.flags|=128,c=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),si(m,!0),m.tail===null&&m.tailMode==="hidden"&&!b.alternate&&!ft)return Kt(r),null}else 2*wt()-m.renderingStartTime>aa&&a!==1073741824&&(r.flags|=128,c=!0,si(m,!1),r.lanes=4194304);m.isBackwards?(b.sibling=r.child,r.child=b):(a=m.last,a!==null?a.sibling=b:r.child=b,m.last=b)}return m.tail!==null?(r=m.tail,m.rendering=r,m.tail=r.sibling,m.renderingStartTime=wt(),r.sibling=null,a=mt.current,ct(mt,c?a&1|2:a&1),r):(Kt(r),null);case 22:case 23:return Pd(),c=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(wn&1073741824)!==0&&(Kt(r),r.subtreeFlags&6&&(r.flags|=8192)):Kt(r),null;case 24:return null;case 25:return null}throw Error(i(156,r.tag))}function By(t,r){switch(qc(r),r.tag){case 1:return rn(r.type)&&fs(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return ta(),ht(nn),ht(Gt),od(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return nd(r),null;case 13:if(ht(mt),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(i(340));Zo()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return ht(mt),null;case 4:return ta(),null;case 10:return Zc(r.type._context),null;case 22:case 23:return Pd(),null;case 24:return null;default:return null}}var Es=!1,Qt=!1,Hy=typeof WeakSet=="function"?WeakSet:Set,be=null;function ra(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){xt(t,r,c)}else a.current=null}function Cd(t,r,a){try{a()}catch(c){xt(t,r,c)}}var V1=!1;function Wy(t,r){if(Pc=es,t=Cp(),Mc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var u=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var b=0,I=-1,H=-1,re=0,he=0,pe=t,ue=null;t:for(;;){for(var ye;pe!==a||u!==0&&pe.nodeType!==3||(I=b+u),pe!==m||c!==0&&pe.nodeType!==3||(H=b+c),pe.nodeType===3&&(b+=pe.nodeValue.length),(ye=pe.firstChild)!==null;)ue=pe,pe=ye;for(;;){if(pe===t)break t;if(ue===a&&++re===u&&(I=b),ue===m&&++he===c&&(H=b),(ye=pe.nextSibling)!==null)break;pe=ue,ue=pe.parentNode}pe=ye}a=I===-1||H===-1?null:{start:I,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(zc={focusedElem:t,selectionRange:a},es=!1,be=r;be!==null;)if(r=be,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,be=t;else for(;be!==null;){r=be;try{var je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Se=je.memoizedProps,bt=je.memoizedState,Z=r.stateNode,V=Z.getSnapshotBeforeUpdate(r.elementType===r.type?Se:Vn(r.type,Se),bt);Z.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var ee=r.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(me){xt(r,r.return,me)}if(t=r.sibling,t!==null){t.return=r.return,be=t;break}be=r.return}return je=V1,V1=!1,je}function li(t,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var u=c=c.next;do{if((u.tag&t)===t){var m=u.destroy;u.destroy=void 0,m!==void 0&&Cd(r,a,m)}u=u.next}while(u!==c)}}function Is(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function jd(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function G1(t){var r=t.alternate;r!==null&&(t.alternate=null,G1(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[or],delete r[Za],delete r[Bc],delete r[jy],delete r[Sy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Y1(t){return t.tag===5||t.tag===3||t.tag===4}function K1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Y1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sd(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=hs));else if(c!==4&&(t=t.child,t!==null))for(Sd(t,r,a),t=t.sibling;t!==null;)Sd(t,r,a),t=t.sibling}function $d(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for($d(t,r,a),t=t.sibling;t!==null;)$d(t,r,a),t=t.sibling}var Ht=null,Gn=!1;function Hr(t,r,a){for(a=a.child;a!==null;)Q1(t,r,a),a=a.sibling}function Q1(t,r,a){if(rr&&typeof rr.onCommitFiberUnmount=="function")try{rr.onCommitFiberUnmount(Yi,a)}catch{}switch(a.tag){case 5:Qt||ra(a,r);case 6:var c=Ht,u=Gn;Ht=null,Hr(t,r,a),Ht=c,Gn=u,Ht!==null&&(Gn?(t=Ht,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Ht.removeChild(a.stateNode));break;case 18:Ht!==null&&(Gn?(t=Ht,a=a.stateNode,t.nodeType===8?Fc(t.parentNode,a):t.nodeType===1&&Fc(t,a),Fa(t)):Fc(Ht,a.stateNode));break;case 4:c=Ht,u=Gn,Ht=a.stateNode.containerInfo,Gn=!0,Hr(t,r,a),Ht=c,Gn=u;break;case 0:case 11:case 14:case 15:if(!Qt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){u=c=c.next;do{var m=u,b=m.destroy;m=m.tag,b!==void 0&&((m&2)!==0||(m&4)!==0)&&Cd(a,r,b),u=u.next}while(u!==c)}Hr(t,r,a);break;case 1:if(!Qt&&(ra(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){xt(a,r,I)}Hr(t,r,a);break;case 21:Hr(t,r,a);break;case 22:a.mode&1?(Qt=(c=Qt)||a.memoizedState!==null,Hr(t,r,a),Qt=c):Hr(t,r,a);break;default:Hr(t,r,a)}}function Z1(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Hy),r.forEach(function(c){var u=Xy.bind(null,t,c);a.has(c)||(a.add(c),c.then(u,u))})}}function Yn(t,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var u=a[c];try{var m=t,b=r,I=b;e:for(;I!==null;){switch(I.tag){case 5:Ht=I.stateNode,Gn=!1;break e;case 3:Ht=I.stateNode.containerInfo,Gn=!0;break e;case 4:Ht=I.stateNode.containerInfo,Gn=!0;break e}I=I.return}if(Ht===null)throw Error(i(160));Q1(m,b,u),Ht=null,Gn=!1;var H=u.alternate;H!==null&&(H.return=null),u.return=null}catch(re){xt(u,r,re)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)X1(r,t),r=r.sibling}function X1(t,r){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Yn(r,t),sr(t),c&4){try{li(3,t,t.return),Is(3,t)}catch(Se){xt(t,t.return,Se)}try{li(5,t,t.return)}catch(Se){xt(t,t.return,Se)}}break;case 1:Yn(r,t),sr(t),c&512&&a!==null&&ra(a,a.return);break;case 5:if(Yn(r,t),sr(t),c&512&&a!==null&&ra(a,a.return),t.flags&32){var u=t.stateNode;try{Xe(u,"")}catch(Se){xt(t,t.return,Se)}}if(c&4&&(u=t.stateNode,u!=null)){var m=t.memoizedProps,b=a!==null?a.memoizedProps:m,I=t.type,H=t.updateQueue;if(t.updateQueue=null,H!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&Pe(u,m),Ot(I,b);var re=Ot(I,m);for(b=0;b<H.length;b+=2){var he=H[b],pe=H[b+1];he==="style"?ze(u,pe):he==="dangerouslySetInnerHTML"?Dt(u,pe):he==="children"?Xe(u,pe):j(u,he,pe,re)}switch(I){case"input":qe(u,m);break;case"textarea":ve(u,m);break;case"select":var ue=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!m.multiple;var ye=m.value;ye!=null?Ze(u,!!m.multiple,ye,!1):ue!==!!m.multiple&&(m.defaultValue!=null?Ze(u,!!m.multiple,m.defaultValue,!0):Ze(u,!!m.multiple,m.multiple?[]:"",!1))}u[Za]=m}catch(Se){xt(t,t.return,Se)}}break;case 6:if(Yn(r,t),sr(t),c&4){if(t.stateNode===null)throw Error(i(162));u=t.stateNode,m=t.memoizedProps;try{u.nodeValue=m}catch(Se){xt(t,t.return,Se)}}break;case 3:if(Yn(r,t),sr(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Fa(r.containerInfo)}catch(Se){xt(t,t.return,Se)}break;case 4:Yn(r,t),sr(t);break;case 13:Yn(r,t),sr(t),u=t.child,u.flags&8192&&(m=u.memoizedState!==null,u.stateNode.isHidden=m,!m||u.alternate!==null&&u.alternate.memoizedState!==null||(Nd=wt())),c&4&&Z1(t);break;case 22:if(he=a!==null&&a.memoizedState!==null,t.mode&1?(Qt=(re=Qt)||he,Yn(r,t),Qt=re):Yn(r,t),sr(t),c&8192){if(re=t.memoizedState!==null,(t.stateNode.isHidden=re)&&!he&&(t.mode&1)!==0)for(be=t,he=t.child;he!==null;){for(pe=be=he;be!==null;){switch(ue=be,ye=ue.child,ue.tag){case 0:case 11:case 14:case 15:li(4,ue,ue.return);break;case 1:ra(ue,ue.return);var je=ue.stateNode;if(typeof je.componentWillUnmount=="function"){c=ue,a=ue.return;try{r=c,je.props=r.memoizedProps,je.state=r.memoizedState,je.componentWillUnmount()}catch(Se){xt(c,a,Se)}}break;case 5:ra(ue,ue.return);break;case 22:if(ue.memoizedState!==null){tf(pe);continue}}ye!==null?(ye.return=ue,be=ye):tf(pe)}he=he.sibling}e:for(he=null,pe=t;;){if(pe.tag===5){if(he===null){he=pe;try{u=pe.stateNode,re?(m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=pe.stateNode,H=pe.memoizedProps.style,b=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=Io("display",b))}catch(Se){xt(t,t.return,Se)}}}else if(pe.tag===6){if(he===null)try{pe.stateNode.nodeValue=re?"":pe.memoizedProps}catch(Se){xt(t,t.return,Se)}}else if((pe.tag!==22&&pe.tag!==23||pe.memoizedState===null||pe===t)&&pe.child!==null){pe.child.return=pe,pe=pe.child;continue}if(pe===t)break e;for(;pe.sibling===null;){if(pe.return===null||pe.return===t)break e;he===pe&&(he=null),pe=pe.return}he===pe&&(he=null),pe.sibling.return=pe.return,pe=pe.sibling}}break;case 19:Yn(r,t),sr(t),c&4&&Z1(t);break;case 21:break;default:Yn(r,t),sr(t)}}function sr(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if(Y1(a)){var c=a;break e}a=a.return}throw Error(i(160))}switch(c.tag){case 5:var u=c.stateNode;c.flags&32&&(Xe(u,""),c.flags&=-33);var m=K1(t);$d(t,m,u);break;case 3:case 4:var b=c.stateNode.containerInfo,I=K1(t);Sd(t,I,b);break;default:throw Error(i(161))}}catch(H){xt(t,t.return,H)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Uy(t,r,a){be=t,J1(t)}function J1(t,r,a){for(var c=(t.mode&1)!==0;be!==null;){var u=be,m=u.child;if(u.tag===22&&c){var b=u.memoizedState!==null||Es;if(!b){var I=u.alternate,H=I!==null&&I.memoizedState!==null||Qt;I=Es;var re=Qt;if(Es=b,(Qt=H)&&!re)for(be=u;be!==null;)b=be,H=b.child,b.tag===22&&b.memoizedState!==null?nf(u):H!==null?(H.return=b,be=H):nf(u);for(;m!==null;)be=m,J1(m),m=m.sibling;be=u,Es=I,Qt=re}ef(t)}else(u.subtreeFlags&8772)!==0&&m!==null?(m.return=u,be=m):ef(t)}}function ef(t){for(;be!==null;){var r=be;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Qt||Is(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Qt)if(a===null)c.componentDidMount();else{var u=r.elementType===r.type?a.memoizedProps:Vn(r.type,a.memoizedProps);c.componentDidUpdate(u,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=r.updateQueue;m!==null&&t1(r,m,c);break;case 3:var b=r.updateQueue;if(b!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}t1(r,b,a)}break;case 5:var I=r.stateNode;if(a===null&&r.flags&4){a=I;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var re=r.alternate;if(re!==null){var he=re.memoizedState;if(he!==null){var pe=he.dehydrated;pe!==null&&Fa(pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Qt||r.flags&512&&jd(r)}catch(ue){xt(r,r.return,ue)}}if(r===t){be=null;break}if(a=r.sibling,a!==null){a.return=r.return,be=a;break}be=r.return}}function tf(t){for(;be!==null;){var r=be;if(r===t){be=null;break}var a=r.sibling;if(a!==null){a.return=r.return,be=a;break}be=r.return}}function nf(t){for(;be!==null;){var r=be;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Is(4,r)}catch(H){xt(r,a,H)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var u=r.return;try{c.componentDidMount()}catch(H){xt(r,u,H)}}var m=r.return;try{jd(r)}catch(H){xt(r,m,H)}break;case 5:var b=r.return;try{jd(r)}catch(H){xt(r,b,H)}}}catch(H){xt(r,r.return,H)}if(r===t){be=null;break}var I=r.sibling;if(I!==null){I.return=r.return,be=I;break}be=r.return}}var qy=Math.ceil,Ps=D.ReactCurrentDispatcher,Md=D.ReactCurrentOwner,Pn=D.ReactCurrentBatchConfig,Je=0,At=null,Ct=null,Wt=0,wn=0,oa=zr(0),Mt=0,ci=null,vo=0,zs=0,Rd=0,di=null,an=null,Nd=0,aa=1/0,yr=null,Ds=!1,Ld=null,Wr=null,Os=!1,Ur=null,Fs=0,ui=0,Ad=null,Bs=-1,Hs=0;function Jt(){return(Je&6)!==0?wt():Bs!==-1?Bs:Bs=wt()}function qr(t){return(t.mode&1)===0?1:(Je&2)!==0&&Wt!==0?Wt&-Wt:My.transition!==null?(Hs===0&&(Hs=Kh()),Hs):(t=ot,t!==0||(t=window.event,t=t===void 0?16:op(t.type)),t)}function Kn(t,r,a,c){if(50<ui)throw ui=0,Ad=null,Error(i(185));Ia(t,a,c),((Je&2)===0||t!==At)&&(t===At&&((Je&2)===0&&(zs|=a),Mt===4&&Vr(t,Wt)),sn(t,c),a===1&&Je===0&&(r.mode&1)===0&&(aa=wt()+500,gs&&Or()))}function sn(t,r){var a=t.callbackNode;Mx(t,r);var c=Zi(t,t===At?Wt:0);if(c===0)a!==null&&Vh(a),t.callbackNode=null,t.callbackPriority=0;else if(r=c&-c,t.callbackPriority!==r){if(a!=null&&Vh(a),r===1)t.tag===0?$y(of.bind(null,t)):Wp(of.bind(null,t)),_y(function(){(Je&6)===0&&Or()}),a=null;else{switch(Qh(c)){case 1:a=uc;break;case 4:a=Gh;break;case 16:a=Gi;break;case 536870912:a=Yh;break;default:a=Gi}a=pf(a,rf.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function rf(t,r){if(Bs=-1,Hs=0,(Je&6)!==0)throw Error(i(327));var a=t.callbackNode;if(ia()&&t.callbackNode!==a)return null;var c=Zi(t,t===At?Wt:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||r)r=Ws(t,c);else{r=c;var u=Je;Je|=2;var m=sf();(At!==t||Wt!==r)&&(yr=null,aa=wt()+500,yo(t,r));do try{Yy();break}catch(I){af(t,I)}while(!0);Qc(),Ps.current=m,Je=u,Ct!==null?r=0:(At=null,Wt=0,r=Mt)}if(r!==0){if(r===2&&(u=hc(t),u!==0&&(c=u,r=Td(t,u))),r===1)throw a=ci,yo(t,0),Vr(t,c),sn(t,wt()),a;if(r===6)Vr(t,c);else{if(u=t.current.alternate,(c&30)===0&&!Vy(u)&&(r=Ws(t,c),r===2&&(m=hc(t),m!==0&&(c=m,r=Td(t,m))),r===1))throw a=ci,yo(t,0),Vr(t,c),sn(t,wt()),a;switch(t.finishedWork=u,t.finishedLanes=c,r){case 0:case 1:throw Error(i(345));case 2:wo(t,an,yr);break;case 3:if(Vr(t,c),(c&130023424)===c&&(r=Nd+500-wt(),10<r)){if(Zi(t,0)!==0)break;if(u=t.suspendedLanes,(u&c)!==c){Jt(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=Oc(wo.bind(null,t,an,yr),r);break}wo(t,an,yr);break;case 4:if(Vr(t,c),(c&4194240)===c)break;for(r=t.eventTimes,u=-1;0<c;){var b=31-Wn(c);m=1<<b,b=r[b],b>u&&(u=b),c&=~m}if(c=u,c=wt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*qy(c/1960))-c,10<c){t.timeoutHandle=Oc(wo.bind(null,t,an,yr),c);break}wo(t,an,yr);break;case 5:wo(t,an,yr);break;default:throw Error(i(329))}}}return sn(t,wt()),t.callbackNode===a?rf.bind(null,t):null}function Td(t,r){var a=di;return t.current.memoizedState.isDehydrated&&(yo(t,r).flags|=256),t=Ws(t,r),t!==2&&(r=an,an=a,r!==null&&Ed(r)),t}function Ed(t){an===null?an=t:an.push.apply(an,t)}function Vy(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var u=a[c],m=u.getSnapshot;u=u.value;try{if(!Un(m(),u))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Vr(t,r){for(r&=~Rd,r&=~zs,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-Wn(r),c=1<<a;t[a]=-1,r&=~c}}function of(t){if((Je&6)!==0)throw Error(i(327));ia();var r=Zi(t,0);if((r&1)===0)return sn(t,wt()),null;var a=Ws(t,r);if(t.tag!==0&&a===2){var c=hc(t);c!==0&&(r=c,a=Td(t,c))}if(a===1)throw a=ci,yo(t,0),Vr(t,r),sn(t,wt()),a;if(a===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,wo(t,an,yr),sn(t,wt()),null}function Id(t,r){var a=Je;Je|=1;try{return t(r)}finally{Je=a,Je===0&&(aa=wt()+500,gs&&Or())}}function xo(t){Ur!==null&&Ur.tag===0&&(Je&6)===0&&ia();var r=Je;Je|=1;var a=Pn.transition,c=ot;try{if(Pn.transition=null,ot=1,t)return t()}finally{ot=c,Pn.transition=a,Je=r,(Je&6)===0&&Or()}}function Pd(){wn=oa.current,ht(oa)}function yo(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,ky(a)),Ct!==null)for(a=Ct.return;a!==null;){var c=a;switch(qc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&fs();break;case 3:ta(),ht(nn),ht(Gt),od();break;case 5:nd(c);break;case 4:ta();break;case 13:ht(mt);break;case 19:ht(mt);break;case 10:Zc(c.type._context);break;case 22:case 23:Pd()}a=a.return}if(At=t,Ct=t=Gr(t.current,null),Wt=wn=r,Mt=0,ci=null,Rd=zs=vo=0,an=di=null,fo!==null){for(r=0;r<fo.length;r++)if(a=fo[r],c=a.interleaved,c!==null){a.interleaved=null;var u=c.next,m=a.pending;if(m!==null){var b=m.next;m.next=u,c.next=b}a.pending=c}fo=null}return t}function af(t,r){do{var a=Ct;try{if(Qc(),Ss.current=Ns,$s){for(var c=gt.memoizedState;c!==null;){var u=c.queue;u!==null&&(u.pending=null),c=c.next}$s=!1}if(go=0,Lt=$t=gt=null,ri=!1,oi=0,Md.current=null,a===null||a.return===null){Mt=1,ci=r,Ct=null;break}e:{var m=t,b=a.return,I=a,H=r;if(r=Wt,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var re=H,he=I,pe=he.tag;if((he.mode&1)===0&&(pe===0||pe===11||pe===15)){var ue=he.alternate;ue?(he.updateQueue=ue.updateQueue,he.memoizedState=ue.memoizedState,he.lanes=ue.lanes):(he.updateQueue=null,he.memoizedState=null)}var ye=N1(b);if(ye!==null){ye.flags&=-257,L1(ye,b,I,m,r),ye.mode&1&&R1(m,re,r),r=ye,H=re;var je=r.updateQueue;if(je===null){var Se=new Set;Se.add(H),r.updateQueue=Se}else je.add(H);break e}else{if((r&1)===0){R1(m,re,r),zd();break e}H=Error(i(426))}}else if(ft&&I.mode&1){var bt=N1(b);if(bt!==null){(bt.flags&65536)===0&&(bt.flags|=256),L1(bt,b,I,m,r),Yc(na(H,I));break e}}m=H=na(H,I),Mt!==4&&(Mt=2),di===null?di=[m]:di.push(m),m=b;do{switch(m.tag){case 3:m.flags|=65536,r&=-r,m.lanes|=r;var Z=$1(m,H,r);e1(m,Z);break e;case 1:I=H;var V=m.type,ee=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Wr===null||!Wr.has(ee)))){m.flags|=65536,r&=-r,m.lanes|=r;var me=M1(m,I,r);e1(m,me);break e}}m=m.return}while(m!==null)}cf(a)}catch($e){r=$e,Ct===a&&a!==null&&(Ct=a=a.return);continue}break}while(!0)}function sf(){var t=Ps.current;return Ps.current=Ns,t===null?Ns:t}function zd(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),At===null||(vo&268435455)===0&&(zs&268435455)===0||Vr(At,Wt)}function Ws(t,r){var a=Je;Je|=2;var c=sf();(At!==t||Wt!==r)&&(yr=null,yo(t,r));do try{Gy();break}catch(u){af(t,u)}while(!0);if(Qc(),Je=a,Ps.current=c,Ct!==null)throw Error(i(261));return At=null,Wt=0,Mt}function Gy(){for(;Ct!==null;)lf(Ct)}function Yy(){for(;Ct!==null&&!yx();)lf(Ct)}function lf(t){var r=hf(t.alternate,t,wn);t.memoizedProps=t.pendingProps,r===null?cf(t):Ct=r,Md.current=null}function cf(t){var r=t;do{var a=r.alternate;if(t=r.return,(r.flags&32768)===0){if(a=Fy(a,r,wn),a!==null){Ct=a;return}}else{if(a=By(a,r),a!==null){a.flags&=32767,Ct=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,Ct=null;return}}if(r=r.sibling,r!==null){Ct=r;return}Ct=r=t}while(r!==null);Mt===0&&(Mt=5)}function wo(t,r,a){var c=ot,u=Pn.transition;try{Pn.transition=null,ot=1,Ky(t,r,a,c)}finally{Pn.transition=u,ot=c}return null}function Ky(t,r,a,c){do ia();while(Ur!==null);if((Je&6)!==0)throw Error(i(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var m=a.lanes|a.childLanes;if(Rx(t,m),t===At&&(Ct=At=null,Wt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Os||(Os=!0,pf(Gi,function(){return ia(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Pn.transition,Pn.transition=null;var b=ot;ot=1;var I=Je;Je|=4,Md.current=null,Wy(t,a),X1(a,t),my(zc),es=!!Pc,zc=Pc=null,t.current=a,Uy(a),wx(),Je=I,ot=b,Pn.transition=m}else t.current=a;if(Os&&(Os=!1,Ur=t,Fs=u),m=t.pendingLanes,m===0&&(Wr=null),_x(a.stateNode),sn(t,wt()),r!==null)for(c=t.onRecoverableError,a=0;a<r.length;a++)u=r[a],c(u.value,{componentStack:u.stack,digest:u.digest});if(Ds)throw Ds=!1,t=Ld,Ld=null,t;return(Fs&1)!==0&&t.tag!==0&&ia(),m=t.pendingLanes,(m&1)!==0?t===Ad?ui++:(ui=0,Ad=t):ui=0,Or(),null}function ia(){if(Ur!==null){var t=Qh(Fs),r=Pn.transition,a=ot;try{if(Pn.transition=null,ot=16>t?16:t,Ur===null)var c=!1;else{if(t=Ur,Ur=null,Fs=0,(Je&6)!==0)throw Error(i(331));var u=Je;for(Je|=4,be=t.current;be!==null;){var m=be,b=m.child;if((be.flags&16)!==0){var I=m.deletions;if(I!==null){for(var H=0;H<I.length;H++){var re=I[H];for(be=re;be!==null;){var he=be;switch(he.tag){case 0:case 11:case 15:li(8,he,m)}var pe=he.child;if(pe!==null)pe.return=he,be=pe;else for(;be!==null;){he=be;var ue=he.sibling,ye=he.return;if(G1(he),he===re){be=null;break}if(ue!==null){ue.return=ye,be=ue;break}be=ye}}}var je=m.alternate;if(je!==null){var Se=je.child;if(Se!==null){je.child=null;do{var bt=Se.sibling;Se.sibling=null,Se=bt}while(Se!==null)}}be=m}}if((m.subtreeFlags&2064)!==0&&b!==null)b.return=m,be=b;else e:for(;be!==null;){if(m=be,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:li(9,m,m.return)}var Z=m.sibling;if(Z!==null){Z.return=m.return,be=Z;break e}be=m.return}}var V=t.current;for(be=V;be!==null;){b=be;var ee=b.child;if((b.subtreeFlags&2064)!==0&&ee!==null)ee.return=b,be=ee;else e:for(b=V;be!==null;){if(I=be,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Is(9,I)}}catch($e){xt(I,I.return,$e)}if(I===b){be=null;break e}var me=I.sibling;if(me!==null){me.return=I.return,be=me;break e}be=I.return}}if(Je=u,Or(),rr&&typeof rr.onPostCommitFiberRoot=="function")try{rr.onPostCommitFiberRoot(Yi,t)}catch{}c=!0}return c}finally{ot=a,Pn.transition=r}}return!1}function df(t,r,a){r=na(a,r),r=$1(t,r,1),t=Br(t,r,1),r=Jt(),t!==null&&(Ia(t,1,r),sn(t,r))}function xt(t,r,a){if(t.tag===3)df(t,t,a);else for(;r!==null;){if(r.tag===3){df(r,t,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Wr===null||!Wr.has(c))){t=na(a,t),t=M1(r,t,1),r=Br(r,t,1),t=Jt(),r!==null&&(Ia(r,1,t),sn(r,t));break}}r=r.return}}function Qy(t,r,a){var c=t.pingCache;c!==null&&c.delete(r),r=Jt(),t.pingedLanes|=t.suspendedLanes&a,At===t&&(Wt&a)===a&&(Mt===4||Mt===3&&(Wt&130023424)===Wt&&500>wt()-Nd?yo(t,0):Rd|=a),sn(t,r)}function uf(t,r){r===0&&((t.mode&1)===0?r=1:(r=Qi,Qi<<=1,(Qi&130023424)===0&&(Qi=4194304)));var a=Jt();t=gr(t,r),t!==null&&(Ia(t,r,a),sn(t,a))}function Zy(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),uf(t,a)}function Xy(t,r){var a=0;switch(t.tag){case 13:var c=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(i(314))}c!==null&&c.delete(r),uf(t,a)}var hf;hf=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||nn.current)on=!0;else{if((t.lanes&a)===0&&(r.flags&128)===0)return on=!1,Oy(t,r,a);on=(t.flags&131072)!==0}else on=!1,ft&&(r.flags&1048576)!==0&&Up(r,xs,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Ts(t,r),t=r.pendingProps;var u=Yo(r,Gt.current);ea(r,a),u=sd(null,r,c,t,u,a);var m=ld();return r.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,rn(c)?(m=!0,ms(r)):m=!1,r.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,ed(r),u.updater=Ls,r.stateNode=u,u._reactInternals=r,fd(r,c,t,a),r=xd(null,r,c,!0,m,a)):(r.tag=0,ft&&m&&Uc(r),Xt(null,r,u,a),r=r.child),r;case 16:c=r.elementType;e:{switch(Ts(t,r),t=r.pendingProps,u=c._init,c=u(c._payload),r.type=c,u=r.tag=e3(c),t=Vn(c,t),u){case 0:r=vd(null,r,c,t,a);break e;case 1:r=z1(null,r,c,t,a);break e;case 11:r=A1(null,r,c,t,a);break e;case 14:r=T1(null,r,c,Vn(c.type,t),a);break e}throw Error(i(306,c,""))}return r;case 0:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Vn(c,u),vd(t,r,c,u,a);case 1:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Vn(c,u),z1(t,r,c,u,a);case 3:e:{if(D1(r),t===null)throw Error(i(387));c=r.pendingProps,m=r.memoizedState,u=m.element,Jp(t,r),Cs(r,c,null,a);var b=r.memoizedState;if(c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){u=na(Error(i(423)),r),r=O1(t,r,c,a,u);break e}else if(c!==u){u=na(Error(i(424)),r),r=O1(t,r,c,a,u);break e}else for(yn=Pr(r.stateNode.containerInfo.firstChild),xn=r,ft=!0,qn=null,a=Zp(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Zo(),c===u){r=xr(t,r,a);break e}Xt(t,r,c,a)}r=r.child}return r;case 5:return n1(r),t===null&&Gc(r),c=r.type,u=r.pendingProps,m=t!==null?t.memoizedProps:null,b=u.children,Dc(c,u)?b=null:m!==null&&Dc(c,m)&&(r.flags|=32),P1(t,r),Xt(t,r,b,a),r.child;case 6:return t===null&&Gc(r),null;case 13:return F1(t,r,a);case 4:return td(r,r.stateNode.containerInfo),c=r.pendingProps,t===null?r.child=Xo(r,null,c,a):Xt(t,r,c,a),r.child;case 11:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Vn(c,u),A1(t,r,c,u,a);case 7:return Xt(t,r,r.pendingProps,a),r.child;case 8:return Xt(t,r,r.pendingProps.children,a),r.child;case 12:return Xt(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,u=r.pendingProps,m=r.memoizedProps,b=u.value,ct(bs,c._currentValue),c._currentValue=b,m!==null)if(Un(m.value,b)){if(m.children===u.children&&!nn.current){r=xr(t,r,a);break e}}else for(m=r.child,m!==null&&(m.return=r);m!==null;){var I=m.dependencies;if(I!==null){b=m.child;for(var H=I.firstContext;H!==null;){if(H.context===c){if(m.tag===1){H=vr(-1,a&-a),H.tag=2;var re=m.updateQueue;if(re!==null){re=re.shared;var he=re.pending;he===null?H.next=H:(H.next=he.next,he.next=H),re.pending=H}}m.lanes|=a,H=m.alternate,H!==null&&(H.lanes|=a),Xc(m.return,a,r),I.lanes|=a;break}H=H.next}}else if(m.tag===10)b=m.type===r.type?null:m.child;else if(m.tag===18){if(b=m.return,b===null)throw Error(i(341));b.lanes|=a,I=b.alternate,I!==null&&(I.lanes|=a),Xc(b,a,r),b=m.sibling}else b=m.child;if(b!==null)b.return=m;else for(b=m;b!==null;){if(b===r){b=null;break}if(m=b.sibling,m!==null){m.return=b.return,b=m;break}b=b.return}m=b}Xt(t,r,u.children,a),r=r.child}return r;case 9:return u=r.type,c=r.pendingProps.children,ea(r,a),u=En(u),c=c(u),r.flags|=1,Xt(t,r,c,a),r.child;case 14:return c=r.type,u=Vn(c,r.pendingProps),u=Vn(c.type,u),T1(t,r,c,u,a);case 15:return E1(t,r,r.type,r.pendingProps,a);case 17:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:Vn(c,u),Ts(t,r),r.tag=1,rn(c)?(t=!0,ms(r)):t=!1,ea(r,a),j1(r,c,u),fd(r,c,u,a),xd(null,r,c,!0,t,a);case 19:return H1(t,r,a);case 22:return I1(t,r,a)}throw Error(i(156,r.tag))};function pf(t,r){return qh(t,r)}function Jy(t,r,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zn(t,r,a,c){return new Jy(t,r,a,c)}function Dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function e3(t){if(typeof t=="function")return Dd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===W)return 11;if(t===ae)return 14}return 2}function Gr(t,r){var a=t.alternate;return a===null?(a=zn(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Us(t,r,a,c,u,m){var b=2;if(c=t,typeof t=="function")Dd(t)&&(b=1);else if(typeof t=="string")b=5;else e:switch(t){case E:return bo(a.children,u,m,r);case A:b=8,u|=8;break;case F:return t=zn(12,a,r,u|2),t.elementType=F,t.lanes=m,t;case K:return t=zn(13,a,r,u),t.elementType=K,t.lanes=m,t;case J:return t=zn(19,a,r,u),t.elementType=J,t.lanes=m,t;case se:return qs(a,u,m,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G:b=10;break e;case Y:b=9;break e;case W:b=11;break e;case ae:b=14;break e;case ce:b=16,c=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return r=zn(b,a,r,u),r.elementType=t,r.type=c,r.lanes=m,r}function bo(t,r,a,c){return t=zn(7,t,c,r),t.lanes=a,t}function qs(t,r,a,c){return t=zn(22,t,c,r),t.elementType=se,t.lanes=a,t.stateNode={isHidden:!1},t}function Od(t,r,a){return t=zn(6,t,null,r),t.lanes=a,t}function Fd(t,r,a){return r=zn(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function t3(t,r,a,c,u){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.identifierPrefix=c,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Bd(t,r,a,c,u,m,b,I,H){return t=new t3(t,r,a,I,H),r===1?(r=1,m===!0&&(r|=8)):r=0,m=zn(3,null,null,r),t.current=m,m.stateNode=t,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ed(m),t}function n3(t,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:t,containerInfo:r,implementation:a}}function ff(t){if(!t)return Dr;t=t._reactInternals;e:{if(Te(t)!==t||t.tag!==1)throw Error(i(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(rn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(i(171))}if(t.tag===1){var a=t.type;if(rn(a))return Bp(t,a,r)}return r}function mf(t,r,a,c,u,m,b,I,H){return t=Bd(a,c,!0,t,u,m,b,I,H),t.context=ff(null),a=t.current,c=Jt(),u=qr(a),m=vr(c,u),m.callback=r??null,Br(a,m,u),t.current.lanes=u,Ia(t,u,c),sn(t,c),t}function Vs(t,r,a,c){var u=r.current,m=Jt(),b=qr(u);return a=ff(a),r.context===null?r.context=a:r.pendingContext=a,r=vr(m,b),r.payload={element:t},c=c===void 0?null:c,c!==null&&(r.callback=c),t=Br(u,r,b),t!==null&&(Kn(t,u,b,m),_s(t,u,b)),b}function Gs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gf(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function Hd(t,r){gf(t,r),(t=t.alternate)&&gf(t,r)}function r3(){return null}var vf=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wd(t){this._internalRoot=t}Ys.prototype.render=Wd.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(i(409));Vs(t,r,null,null)},Ys.prototype.unmount=Wd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;xo(function(){Vs(null,t,null,null)}),r[hr]=null}};function Ys(t){this._internalRoot=t}Ys.prototype.unstable_scheduleHydration=function(t){if(t){var r=Jh();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Tr.length&&r!==0&&r<Tr[a].priority;a++);Tr.splice(a,0,t),a===0&&np(t)}};function Ud(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ks(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xf(){}function o3(t,r,a,c,u){if(u){if(typeof c=="function"){var m=c;c=function(){var re=Gs(b);m.call(re)}}var b=mf(r,c,t,0,null,!1,!1,"",xf);return t._reactRootContainer=b,t[hr]=b.current,Ka(t.nodeType===8?t.parentNode:t),xo(),b}for(;u=t.lastChild;)t.removeChild(u);if(typeof c=="function"){var I=c;c=function(){var re=Gs(H);I.call(re)}}var H=Bd(t,0,!1,null,null,!1,!1,"",xf);return t._reactRootContainer=H,t[hr]=H.current,Ka(t.nodeType===8?t.parentNode:t),xo(function(){Vs(r,H,a,c)}),H}function Qs(t,r,a,c,u){var m=a._reactRootContainer;if(m){var b=m;if(typeof u=="function"){var I=u;u=function(){var H=Gs(b);I.call(H)}}Vs(r,b,t,u)}else b=o3(a,r,t,u,c);return Gs(b)}Zh=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=Ea(r.pendingLanes);a!==0&&(fc(r,a|1),sn(r,wt()),(Je&6)===0&&(aa=wt()+500,Or()))}break;case 13:xo(function(){var c=gr(t,1);if(c!==null){var u=Jt();Kn(c,t,1,u)}}),Hd(t,1)}},mc=function(t){if(t.tag===13){var r=gr(t,134217728);if(r!==null){var a=Jt();Kn(r,t,134217728,a)}Hd(t,134217728)}},Xh=function(t){if(t.tag===13){var r=qr(t),a=gr(t,r);if(a!==null){var c=Jt();Kn(a,t,r,c)}Hd(t,r)}},Jh=function(){return ot},ep=function(t,r){var a=ot;try{return ot=t,r()}finally{ot=a}},fn=function(t,r,a){switch(r){case"input":if(qe(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==t&&c.form===t.form){var u=ps(c);if(!u)throw Error(i(90));xe(c),qe(c,u)}}}break;case"textarea":ve(t,a);break;case"select":r=a.value,r!=null&&Ze(t,!!a.multiple,r,!1)}},Mr=Id,Ui=xo;var a3={usingClientEntryPoint:!1,Events:[Xa,Vo,ps,Hi,Wi,Id]},hi={findFiberByHostInstance:co,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},i3={bundleType:hi.bundleType,version:hi.version,rendererPackageName:hi.rendererPackageName,rendererConfig:hi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ln(t),t===null?null:t.stateNode},findFiberByHostInstance:hi.findFiberByHostInstance||r3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zs.isDisabled&&Zs.supportsFiber)try{Yi=Zs.inject(i3),rr=Zs}catch{}}return ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a3,ln.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ud(r))throw Error(i(200));return n3(t,r,null,a)},ln.createRoot=function(t,r){if(!Ud(t))throw Error(i(299));var a=!1,c="",u=vf;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),r=Bd(t,1,!1,null,null,a,!1,c,u),t[hr]=r.current,Ka(t.nodeType===8?t.parentNode:t),new Wd(r)},ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=Ln(r),t=t===null?null:t.stateNode,t},ln.flushSync=function(t){return xo(t)},ln.hydrate=function(t,r,a){if(!Ks(r))throw Error(i(200));return Qs(null,t,r,!0,a)},ln.hydrateRoot=function(t,r,a){if(!Ud(t))throw Error(i(405));var c=a!=null&&a.hydratedSources||null,u=!1,m="",b=vf;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),r=mf(r,null,t,1,a??null,u,!1,m,b),t[hr]=r.current,Ka(t),c)for(t=0;t<c.length;t++)a=c[t],u=a._getVersion,u=u(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,u]:r.mutableSourceEagerHydrationData.push(a,u);return new Ys(r)},ln.render=function(t,r,a){if(!Ks(r))throw Error(i(200));return Qs(null,t,r,!1,a)},ln.unmountComponentAtNode=function(t){if(!Ks(t))throw Error(i(40));return t._reactRootContainer?(xo(function(){Qs(null,null,t,!1,function(){t._reactRootContainer=null,t[hr]=null})}),!0):!1},ln.unstable_batchedUpdates=Id,ln.unstable_renderSubtreeIntoContainer=function(t,r,a,c){if(!Ks(a))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return Qs(t,r,a,!1,c)},ln.version="18.3.1-next-f1338f8080-20240426",ln}var Sf;function q0(){if(Sf)return Gd.exports;Sf=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(o){console.error(o)}}return e(),Gd.exports=p3(),Gd.exports}var $f;function f3(){if($f)return Xs;$f=1;var e=q0();return Xs.createRoot=e.createRoot,Xs.hydrateRoot=e.hydrateRoot,Xs}var m3=f3();const g3=U0(m3);function V0(e){var o,i,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(o=0;o<l;o++)e[o]&&(i=V0(e[o]))&&(s&&(s+=" "),s+=i)}else for(i in e)e[i]&&(s&&(s+=" "),s+=i);return s}function ie(){for(var e,o,i=0,s="",l=arguments.length;i<l;i++)(e=arguments[i])&&(o=V0(e))&&(s&&(s+=" "),s+=o);return s}const $a=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 5V19M5 12H19",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};$a.displayName="PlusIcon";const v3="_root_7uomf_13",x3="_sm_7uomf_82",y3="_md_7uomf_88",w3="_lg_7uomf_94",b3="_horizontal_7uomf_107",k3="_alignStart_7uomf_121",_3="_vertical_7uomf_125",C3="_inner_7uomf_131",j3="_iconSlot_7uomf_146",S3="_label_7uomf_163",ko={root:v3,sm:x3,md:y3,lg:w3,horizontal:b3,alignStart:k3,vertical:_3,inner:C3,iconSlot:j3,label:S3};function Mf(e){return typeof e=="number"?`${e}px`:e}const $3=v.forwardRef(({size:e="md",layout:o="horizontal",align:i="center",label:s="Add",hideLabel:l=!1,icon:d,height:h,borderRadius:p,className:g,style:x,disabled:y,type:w="button",...k},R)=>{const S=d??n.jsx($a,{size:"100%"}),_={};return h!==void 0&&(_["--area-min-height"]=Mf(h)),p!==void 0&&(_["--area-radius"]=Mf(p)),n.jsx("button",{ref:R,type:w,className:ie(ko.root,ko[e],ko[o],i==="start"&&ko.alignStart,g),disabled:y,"data-size":e,"data-layout":o,style:{..._,...x},...k,children:n.jsxs("span",{className:ko.inner,children:[n.jsx("span",{className:ko.iconSlot,"aria-hidden":"true",children:S}),!l&&s&&n.jsx("span",{className:ko.label,children:s})]})})});$3.displayName="AreaButton";const M3="_root_b29pw_8",R3="_image_b29pw_33",N3="_initials_b29pw_40",L3="_iconSlot_b29pw_52",Kr={root:M3,image:R3,initials:N3,iconSlot:L3,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function A3({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function T3(e){const o=e.trim().split(/\s+/).filter(l=>/[\p{L}\p{N}]/u.test(l));if(o.length===0)return"";if(o.length===1)return o[0].charAt(0).toUpperCase();const i=o[0].charAt(0),s=o[o.length-1].charAt(0);return(i+s).toUpperCase()}const tr=v.forwardRef(({src:e,alt:o,initials:i,name:s,icon:l,size:d="md",color:h="neutral",variant:p="subtle",shape:g="circle",className:x,...y},w)=>{const[k,R]=v.useState(!1),S=!!e&&!k,_=(i==null?void 0:i.slice(0,2).toUpperCase())??(s?T3(s):"");let $;return S?$=n.jsx("img",{src:e,alt:o??"",className:Kr.image,onError:()=>R(!0),draggable:!1},e):_?$=n.jsx("span",{className:Kr.initials,"aria-hidden":o?void 0:!0,children:_}):$=n.jsx("span",{className:Kr.iconSlot,"aria-hidden":"true",children:l??n.jsx(A3,{})}),n.jsx("span",{ref:w,"data-size":d,"data-color":h,"data-variant":p,"data-shape":g,className:ie(Kr.root,Kr[`size-${d}`],Kr[`color-${h}`],Kr[`variant-${p}`],Kr[`shape-${g}`],x),...y,children:$})});tr.displayName="Avatar";const E3="_root_uqz3u_7",I3={root:E3},en=v.forwardRef(({as:e="span",className:o,children:i,...s},l)=>n.jsx(e,{ref:l,className:ie(I3.root,o),...s,children:i}));en.displayName="Eyebrow";const P3="_root_1tnwf_15",z3={root:P3},D3=v.forwardRef(({scale:e="paragraph-md",placeholder:o="Type something…",value:i,defaultValue:s="",onChange:l,readOnly:d=!1,disabled:h=!1,className:p,onInput:g,...x},y)=>{const w=i!==void 0,k=v.useRef(null),[R,S]=v.useState(()=>w?!i:!s),_=v.useCallback(j=>{k.current=j,typeof y=="function"?y(j):y&&(y.current=j)},[y]);v.useEffect(()=>{!w&&k.current&&s&&(k.current.textContent=s,S(!s))},[]),v.useEffect(()=>{w&&k.current&&(k.current.textContent??"")!==i&&(k.current.textContent=i??"",S(!(i??"")))},[i,w]);const $=j=>{const D=j.currentTarget.textContent??"";S(D===""),l==null||l(D),g==null||g(j)},M=j=>{j.preventDefault();const D=j.clipboardData.getData("text/plain");document.execCommand("insertText",!1,D)},C=!h&&!d;return n.jsx("span",{ref:_,contentEditable:C?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":o,"aria-disabled":h||void 0,"aria-readonly":d||void 0,"data-scale":e,"data-empty":R||void 0,"data-placeholder":o,"data-disabled":h||void 0,"data-readonly":d||void 0,className:ie(z3.root,p),onInput:$,onPaste:M,...x})});D3.displayName="TypeBox";const O3="_root_1brpy_12",F3="_ghost_1brpy_27",B3="_path_1brpy_32",fi={root:O3,"ai-spin":"_ai-spin_1brpy_1",ghost:F3,"ai-morph":"_ai-morph_1brpy_1",path:B3,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},H3={xs:16,sm:24,md:32,lg:48,xl:64},W3={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},Rf="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",Js=e=>e==="inverse"||e==="inverse-light",U3=e=>e==="stroke"||e==="stroke-light",Ju=v.forwardRef(({size:e="md",variant:o="gradient-fill",state:i="loading",className:s,style:l,"aria-label":d,...h},p)=>{const g=v.useId().replace(/[^a-z0-9]/gi,""),x=`aigrad-${g}`,y=`aiglow-${g}`,w=typeof e=="string",k=w?H3[e]:e,R=w?W3[e]:k<=16?1.75:k<=24?1.5:k<=32?1.25:1.1,S=o==="gradient-fill"?`url(#${x})`:Js(o)?"currentColor":"none",_=Js(o)?"none":U3(o)?"currentColor":`url(#${x})`,$="currentColor",M=o!=="stroke"&&o!=="stroke-light"&&!Js(o);return n.jsxs("svg",{ref:p,width:k,height:k,viewBox:"0 0 24 24",fill:"none",className:ie(fi.root,fi[`variant-${o}`],fi[`state-${i}`],s),style:l,"data-state":i,"aria-label":d??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...h,children:[!Js(o)&&n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:x,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[n.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),n.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),n.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),n.jsxs("filter",{id:y,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[n.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"blur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),n.jsx("path",{d:Rf,stroke:$,strokeWidth:R*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:fi.ghost}),n.jsx("path",{d:Rf,fill:S,stroke:_==="none"?void 0:_,strokeWidth:_==="none"?void 0:R,strokeLinecap:"round",strokeLinejoin:"round",filter:M?`url(#${y})`:void 0,className:fi.path})]})});Ju.displayName="AILoader";const q3="_root_10act_14",V3="_hovered_10act_68",G3="_loading_10act_69",Y3="_sm_10act_90",K3="_md_10act_98",Q3="_lg_10act_106",Z3="_dark_10act_116",X3="_icon_10act_122",sa={root:q3,hovered:V3,loading:G3,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:Y3,md:K3,lg:Q3,dark:Z3,icon:X3},Nf={sm:12,md:14,lg:18};function J3({size:e,light:o}){return n.jsxs("svg",{width:e,height:e,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!o&&n.jsx("defs",{children:n.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[n.jsx("stop",{stopColor:"#8C4FE2"}),n.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),n.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),n.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:o?"white":"url(#ai-core-btn-sparkle)"})]})}const G0=v.forwardRef(({size:e="md",dark:o,loading:i,className:s,onMouseEnter:l,onMouseLeave:d,...h},p)=>{const[g,x]=v.useState(!1);return n.jsx("button",{ref:p,className:ie(sa.root,sa[e],o&&sa.dark,i?sa.loading:g&&sa.hovered,s),"aria-busy":i||void 0,onMouseEnter:y=>{x(!0),l==null||l(y)},onMouseLeave:y=>{x(!1),d==null||d(y)},...h,children:n.jsx("span",{className:sa.icon,children:i?n.jsx(Ju,{size:Nf[e],variant:o?"inverse-light":"gradient-fill"}):n.jsx(J3,{size:Nf[e],light:o})})})});G0.displayName="AICoreButton";const e5="_root_1qx4u_9",t5="_star_1qx4u_34",Qd={root:e5,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:t5},n5="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",Y0=v.forwardRef(({size:e="sm",className:o,...i},s)=>n.jsx("span",{ref:s,"data-size":e,"aria-hidden":"true",className:ie(Qd.root,Qd[`size-${e}`],o),...i,children:n.jsx("svg",{viewBox:"0 0 24 24",className:Qd.star,fill:"none","aria-hidden":"true",children:n.jsx("path",{d:n5,fill:"currentColor"})})}));Y0.displayName="AIAvatar";const r5="_shell_lalw3_21",o5="_wrapper_lalw3_58",a5="_card_lalw3_65",i5="_cardClip_lalw3_94",s5="_textarea_lalw3_160",l5="_actions_lalw3_203",fa={shell:r5,wrapper:o5,card:a5,cardClip:i5,textarea:s5,actions:l5},K0=v.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(fa.shell,e),...i,children:o}));K0.displayName="AIComposer";function c5(e,o){typeof e=="function"?e(o):e&&(e.current=o)}const Q0=v.forwardRef(({value:e,onChange:o,onSubmit:i,maxRows:s=5,radius:l="sm",placeholder:d="Ask AI anything…",className:h,onKeyDown:p,disabled:g,children:x,style:y,...w},k)=>{const R=v.useRef(null);v.useEffect(()=>{const C=R.current;C&&(C.style.height="auto",C.style.height=`${C.scrollHeight}px`)},[e]);const S=v.useCallback(C=>o(C.target.value),[o]),_=v.useCallback(C=>{p==null||p(C),!C.defaultPrevented&&C.key==="Enter"&&!C.shiftKey&&i&&(C.preventDefault(),i())},[p,i]),$=v.useCallback(C=>{R.current=C,c5(k,C)},[k]),M={...y??{},"--ai-composer-max-rows":s};return n.jsx("div",{className:ie(fa.wrapper,h),"data-radius":l,children:n.jsx("div",{className:fa.card,children:n.jsxs("div",{className:fa.cardClip,children:[n.jsx("textarea",{...w,ref:$,className:fa.textarea,rows:1,value:e,onChange:S,onKeyDown:_,placeholder:d,disabled:g,style:M}),x!=null&&n.jsx("div",{className:fa.actions,children:x})]})})})});Q0.displayName="AIComposerInput";const d5="_root_fv0gc_10",u5="_simple_fv0gc_28",h5="_float_fv0gc_83",Lf={root:d5,simple:u5,float:h5},p5=v.forwardRef(({variant:e="simple",className:o,children:i,...s},l)=>n.jsx("section",{ref:l,"data-variant":e,className:ie(Lf.root,Lf[e],o),...s,children:i}));p5.displayName="AIConversation";const f5="_fadeFrame_1l0ib_19",m5="_scroller_1l0ib_32",g5="_content_1l0ib_89",v5="_messageBlock_1l0ib_108",x5="_messageBlockAi_1l0ib_116",y5="_inboundBlock_1l0ib_128",w5="_inboundLoader_1l0ib_136",b5="_inboundLoaderLabel_1l0ib_146",k5="_outboundBlock_1l0ib_153",_5="_outboundHeader_1l0ib_161",C5="_messageBlockUser_1l0ib_168",j5="_aiThreadOutboundIn_1l0ib_1",S5="_messageBody_1l0ib_182",$5="_messageBodyAi_1l0ib_193",M5="_messageBodyUser_1l0ib_200",R5="_label_1l0ib_159",N5="_labelAi_1l0ib_221",L5="_labelUser_1l0ib_159",A5="_labelAvatar_1l0ib_224",T5="_labelText_1l0ib_237",E5="_timestamp_1l0ib_244",I5="_timestampAi_1l0ib_259",P5="_timestampUser_1l0ib_260",z5="_timestampInline_1l0ib_270",D5="_aiThreadOutboundFadeIn_1l0ib_1",Ge={fadeFrame:f5,scroller:m5,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:g5,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:v5,messageBlockAi:x5,inboundBlock:y5,inboundLoader:w5,inboundLoaderLabel:b5,outboundBlock:k5,outboundHeader:_5,messageBlockUser:C5,aiThreadOutboundIn:j5,messageBody:S5,messageBodyAi:$5,messageBodyUser:M5,label:R5,labelAi:N5,labelUser:L5,labelAvatar:A5,labelText:T5,timestamp:E5,timestampAi:I5,timestampUser:P5,timestampInline:z5,aiThreadOutboundFadeIn:D5},Af=8;function O5(e,o){typeof e=="function"?e(o):e&&(e.current=o)}const F5=v.forwardRef(({density:e="comfortable",padding:o="md",autoScroll:i=!0,autoScrollThreshold:s=80,className:l,children:d,...h},p)=>{const g=v.useRef(null),x=v.useRef(null),y=v.useRef(!0),[w,k]=v.useState(!1),[R,S]=v.useState(!1),_=v.useCallback($=>{g.current=$,O5(p,$)},[p]);return v.useEffect(()=>{const $=g.current,M=x.current;if(!$||!M)return;const C=()=>{const{scrollTop:E,scrollHeight:A,clientHeight:F}=$;return A-E-F<s},j=E=>{$.scrollTo({top:$.scrollHeight,behavior:E?"smooth":"auto"})},D=()=>{const{scrollTop:E,scrollHeight:A,clientHeight:F}=$,G=E>Af,Y=A-E-F>Af;k(W=>W===G?W:G),S(W=>W===Y?W:Y)};i&&(j(!1),y.current=!0),D();const N=()=>{y.current=C(),D()};$.addEventListener("scroll",N,{passive:!0});const L=new ResizeObserver(()=>{i&&y.current&&j(!0),D()});return L.observe(M),L.observe($),()=>{$.removeEventListener("scroll",N),L.disconnect()}},[i,s]),n.jsx("div",{className:Ge.fadeFrame,"data-fade-top":w,"data-fade-bottom":R,children:n.jsx("div",{ref:_,className:ie(Ge.scroller,Ge[`padding-${o}`],l),...h,children:n.jsx("div",{ref:x,className:ie(Ge.content,Ge[`density-${e}`]),children:d})})})});F5.displayName="AIThread";const Hl=v.forwardRef(({align:e="ai",avatar:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,className:ie(Ge.label,e==="user"?Ge.labelUser:Ge.labelAi,i),...l,children:[o!=null&&n.jsx("span",{className:Ge.labelAvatar,children:o}),n.jsx("span",{className:Ge.labelText,children:s})]}));Hl.displayName="AILabel";const B5=e=>e.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function H5(e,o){if(typeof e=="string")return{text:e};const i=e instanceof Date?e:new Date(e);return Number.isNaN(i.getTime())?null:{text:o(i),iso:i.toISOString()}}const Ti=v.forwardRef(({value:e,align:o="ai",format:i=B5,inline:s=!1,className:l,...d},h)=>{const p=v.useMemo(()=>H5(e,i),[e,i]);return p?n.jsx("time",{ref:h,className:ie(Ge.timestamp,s?Ge.timestampInline:o==="user"?Ge.timestampUser:Ge.timestampAi,l),dateTime:p.iso,...d,children:p.text}):null});Ti.displayName="AITimestamp";function W5(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?n.jsx(Ti,{align:"ai",value:e}):e}function U5(e){return e==null?null:typeof e=="string"||typeof e=="number"?n.jsx(Hl,{align:"ai",children:e}):e}const q5=v.forwardRef(({label:e,time:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,"data-author":"ai",className:ie(Ge.messageBlock,Ge.messageBlockAi,i),...l,children:[U5(e),n.jsx("div",{className:ie(Ge.messageBody,Ge.messageBodyAi),children:s}),W5(o)]}));q5.displayName="AIAssistantMessage";function V5(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?n.jsx(Ti,{align:"user",value:e}):e}function G5(e){return e==null?null:typeof e=="string"||typeof e=="number"?n.jsx(Hl,{align:"user",children:e}):e}const Y5=v.forwardRef(({label:e,time:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,"data-author":"user",className:ie(Ge.messageBlock,Ge.messageBlockUser,i),...l,children:[G5(e),n.jsx("div",{className:ie(Ge.messageBody,Ge.messageBodyUser),children:s}),V5(o)]}));Y5.displayName="AIUserMessage";function K5(e){return e===!1?null:e==null||e===!0?n.jsx(Y0,{size:"sm"}):e}function Q5(e,o){return e==null&&o==null?null:typeof e=="string"||typeof e=="number"||e==null?n.jsx(Hl,{align:"ai",avatar:o,children:e}):e}const Z5=v.forwardRef(({avatar:e,label:o="Teambridge AI",activity:i,actions:s,loading:l=!1,loaderLabel:d="Thinking…",className:h,children:p,...g},x)=>{const y=K5(e),w=Q5(o,y);return n.jsxs("div",{ref:x,"data-author":"ai",className:ie(Ge.messageBlock,Ge.messageBlockAi,Ge.inboundBlock,h),...g,children:[w,i,p!=null&&n.jsx("div",{className:ie(Ge.messageBody,Ge.messageBodyAi),children:p}),l&&n.jsxs("div",{className:Ge.inboundLoader,"aria-live":"polite",children:[n.jsx(Ju,{size:"xs"}),d!=null&&n.jsx("span",{className:Ge.inboundLoaderLabel,children:d})]}),s]})});Z5.displayName="AIInboundMessage";function X5(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const J5=v.forwardRef(({label:e="You",time:o,timeFormat:i,className:s,children:l,...d},h)=>{const p=o==null?null:X5(o)?n.jsx(Ti,{value:o,format:i,inline:!0}):o,g=e==null?null:typeof e=="string"||typeof e=="number"?n.jsx("span",{className:Ge.labelText,children:e}):e,x=g!=null||p!=null;return n.jsxs("div",{ref:h,"data-author":"user",className:ie(Ge.messageBlock,Ge.messageBlockUser,Ge.outboundBlock,s),...d,children:[x&&n.jsxs("div",{className:ie(Ge.label,Ge.labelUser,Ge.outboundHeader),children:[g,p]}),n.jsx("div",{className:ie(Ge.messageBody,Ge.messageBodyUser),children:l})]})});J5.displayName="AIOutboundMessage";const Bn=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M6 9L12 15L18 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Bn.displayName="ChevronDownIcon";const e4="_root_1j4eq_8",t4="_header_1j4eq_17",n4="_headerSummary_1j4eq_53",r4="_aiTrailSummaryFade_1j4eq_1",o4="_aiTrailHeaderAppend_1j4eq_1",a4="_aiTrailEllipsis_1j4eq_1",i4="_headerCurrent_1j4eq_128",s4="_headerChevron_1j4eq_159",l4="_headerChevronExpanded_1j4eq_173",c4="_body_1j4eq_187",d4="_bodyExpanded_1j4eq_200",u4="_bodyCollapsed_1j4eq_201",h4="_bodyInner_1j4eq_203",p4="_bodyContent_1j4eq_187",f4="_step_1j4eq_225",m4="_stepIcon_1j4eq_242",g4="_stepAnimating_1j4eq_256",v4="_aiTrailStepPulse_1j4eq_1",x4="_stepBody_1j4eq_267",y4="_stepHead_1j4eq_282",w4="_stepLabel_1j4eq_286",b4="_stepSeparator_1j4eq_288",k4="_stepDetail_1j4eq_292",_4="_subToggle_1j4eq_302",C4="_subToggleCount_1j4eq_335",j4="_subToggleChevron_1j4eq_339",S4="_subActivityWrap_1j4eq_358",$4="_subActivityExpanded_1j4eq_364",M4="_subActivityCollapsed_1j4eq_365",R4="_subActivityClip_1j4eq_367",N4="_subActivityList_1j4eq_378",L4="_subActivity_1j4eq_358",A4="_aiTrailSubActivityType_1j4eq_1",T4="_aiTrailSubActivityFade_1j4eq_1",at={root:e4,header:t4,headerSummary:n4,aiTrailSummaryFade:r4,aiTrailHeaderAppend:o4,aiTrailEllipsis:a4,headerCurrent:i4,headerChevron:s4,headerChevronExpanded:l4,body:c4,bodyExpanded:d4,bodyCollapsed:u4,bodyInner:h4,bodyContent:p4,step:f4,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:m4,stepAnimating:g4,aiTrailStepPulse:v4,stepBody:x4,stepHead:y4,stepLabel:w4,stepSeparator:b4,stepDetail:k4,subToggle:_4,subToggleCount:C4,subToggleChevron:j4,subActivityWrap:S4,subActivityExpanded:$4,subActivityCollapsed:M4,subActivityClip:R4,subActivityList:N4,subActivity:L4,aiTrailSubActivityType:A4,aiTrailSubActivityFade:T4},eh=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};eh.displayName="MessageDotsSquareIcon";function Ml({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ml.displayName="SearchMdIcon";function to({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}const th=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};th.displayName="Globe01Icon";const Z0=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Z0.displayName="Code02Icon";function nh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}nh.displayName="Tool01Icon";const Mn=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 6L9 17L4 12",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})},ya=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:o}),n.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};ya.displayName="AlertCircleIcon";const E4={thinking:n.jsx(eh,{size:14}),tool:n.jsx(nh,{size:14}),search:n.jsx(Ml,{size:14}),file:n.jsx(to,{size:14}),web:n.jsx(th,{size:14}),code:n.jsx(Z0,{size:14}),content:n.jsx(Mn,{size:14})},Wl=v.forwardRef(({type:e,status:o="done",detail:i,icon:s,subActivities:l,groupState:d="done",className:h,children:p,...g},x)=>{const y=o==="active"&&d==="live",w=o==="active"&&d==="live",k=o==="active"||o==="error",[R,S]=v.useState(null),_=R!==null?R:k;v.useEffect(()=>{S(null)},[o]);const $=v.useCallback(()=>S(!_),[_]),M=!!l&&l.length>0,C=(l==null?void 0:l.length)??0,j=o==="error"?n.jsx(ya,{size:14}):s??E4[e];return n.jsxs("div",{ref:x,"data-step-type":e,"data-step-status":o,className:ie(at.step,at[`step-${o}`],y&&at.stepAnimating,h),...g,children:[n.jsx("span",{className:at.stepIcon,"aria-hidden":!0,children:j}),n.jsxs("span",{className:at.stepBody,children:[n.jsxs("span",{className:at.stepHead,children:[n.jsx("span",{className:at.stepLabel,children:p}),i!=null&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:at.stepSeparator,"aria-hidden":!0,children:" · "}),n.jsx("span",{className:at.stepDetail,children:i})]}),M&&n.jsxs("button",{type:"button",className:at.subToggle,onClick:$,"aria-expanded":_,"aria-label":_?`Collapse ${C} sub-steps`:`Expand ${C} sub-steps`,"data-expanded":_||void 0,children:[n.jsx("span",{className:at.subToggleCount,children:C}),n.jsx("span",{className:at.subToggleChevron,"aria-hidden":!0,children:n.jsx(Bn,{size:10})})]})]}),M&&n.jsx(n.Fragment,{children:n.jsx("div",{className:ie(at.subActivityWrap,_?at.subActivityExpanded:at.subActivityCollapsed),"aria-hidden":!_,children:n.jsx("div",{className:at.subActivityClip,children:n.jsx("ul",{className:at.subActivityList,"data-animating":w||void 0,children:l.map((D,N)=>n.jsx("li",{className:at.subActivity,children:D},N))})})})})]})]})});Wl.displayName="AIActivityStep";function Tf(e){return e==="error"}function I4(e,o,i,s,l,d){if(e==="live")return i.length===0?o===1?"1 step":`${o} steps`:n.jsx("span",{className:l,children:i[s]??i[i.length-1]},s);const h=e==="error"?"Stopped":d?`Thought for ${d}`:"Thought";if(i.length===0){const p=o===1?"1 step":`${o} steps`;return`${h} · ${p}`}return n.jsxs(n.Fragment,{children:[h,i.map((p,g)=>n.jsxs(v.Fragment,{children:[" · ",p]},g))]})}const rh=v.forwardRef(({state:e="live",expanded:o,defaultExpanded:i,onToggle:s,duration:l,summary:d,className:h,children:p,...g},x)=>{const y=o!==void 0,[w,k]=v.useState(i??Tf(e)),[R,S]=v.useState(!1);v.useEffect(()=>{y||R||k(Tf(e))},[e,y,R]);const _=y?!!o:w,$=v.useCallback(()=>{const L=!_;y||(k(L),S(!0)),s==null||s(L)},[_,y,s]),{enhancedChildren:M,stepCount:C,stepLabels:j,currentLabelIdx:D}=v.useMemo(()=>{let L=0;const E=[];let A=-1;return{enhancedChildren:v.Children.map(p,G=>{if(!v.isValidElement(G))return G;const Y=G.props;if(!("type"in Y||"status"in Y))return G;L+=1;const K=Y.status??"done";return K==="pending"?null:(Y.children!=null&&(E.push(Y.children),K==="active"&&(A=E.length-1)),P4(G,e))}),stepCount:L,stepLabels:E,currentLabelIdx:A>=0?A:E.length-1}},[p,e]),N=d??I4(e,C,j,D,at.headerCurrent,l);return n.jsxs("div",{ref:x,"data-state":e,"data-expanded":_,className:ie(at.root,h),...g,children:[n.jsxs("button",{type:"button",className:at.header,onClick:$,"aria-expanded":_,"aria-label":_?"Collapse activity trail":"Expand activity trail",children:[n.jsx("span",{className:at.headerSummary,children:N},`${e}-${D}`),n.jsx("span",{className:ie(at.headerChevron,_&&at.headerChevronExpanded),"aria-hidden":!0,children:n.jsx(Bn,{size:14})})]}),n.jsx("div",{className:ie(at.body,_?at.bodyExpanded:at.bodyCollapsed),"aria-hidden":!_,children:n.jsx("div",{className:at.bodyInner,children:n.jsxs("div",{className:at.bodyContent,children:[M,e==="done"&&n.jsx(Wl,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});rh.displayName="AIActivityTrail";function P4(e,o){return v.cloneElement(e,{groupState:o})}var Ao=q0();const z4="_wrapper_3tqlm_10",D4="_tooltip_3tqlm_22",O4="_portal_3tqlm_23",F4="_top_3tqlm_61",B4="_bottom_3tqlm_71",H4="_left_3tqlm_81",W4="_right_3tqlm_91",el={wrapper:z4,tooltip:D4,portal:O4,top:F4,bottom:B4,left:H4,right:W4},Sr=({content:e,placement:o="top",delay:i=0,disabled:s=!1,maxWidth:l=280,offset:d=0,children:h})=>{const[p,g]=v.useState(!1),[x,y]=v.useState({top:0,left:0}),w=v.useRef(null),k=v.useRef(),R=v.useId(),S=v.useCallback(()=>{if(!w.current)return;const j=w.current.getBoundingClientRect(),D=6+d;let N=0,L=0;switch(o){case"top":N=j.top-D,L=j.left+j.width/2;break;case"bottom":N=j.bottom+D,L=j.left+j.width/2;break;case"left":N=j.top+j.height/2,L=j.left-D;break;case"right":N=j.top+j.height/2,L=j.right+D;break}y({top:N,left:L})},[o,d]),_=v.useCallback(()=>{s||(S(),clearTimeout(k.current),i>0?k.current=setTimeout(()=>g(!0),i):g(!0))},[s,i,S]),$=v.useCallback(()=>{clearTimeout(k.current),g(!1)},[]);v.useEffect(()=>{if(!p)return;const j=()=>S();return window.addEventListener("scroll",j,!0),window.addEventListener("resize",j),()=>{window.removeEventListener("scroll",j,!0),window.removeEventListener("resize",j)}},[p,S]);const M=pn.cloneElement(h,{"aria-describedby":p?R:void 0}),C=n.jsx("span",{id:R,role:"tooltip",className:ie(el.tooltip,el[o],el.portal),"data-visible":p||void 0,style:{top:x.top,left:x.left,maxWidth:l!==void 0?l:void 0},children:e});return n.jsxs("span",{ref:w,className:el.wrapper,onMouseEnter:_,onMouseLeave:$,onFocus:_,onBlur:$,children:[M,Ao.createPortal(C,document.body)]})};Sr.displayName="Tooltip";const U4="_root_v8mqg_9",q4="_hover_v8mqg_21",Zd={root:U4,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:q4};function V4(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const X0=v.forwardRef(({visibility:e="always",align:o="start",time:i,timeFormat:s,className:l,children:d,...h},p)=>{const g=i==null?null:V4(i)?n.jsx(Ti,{value:i,format:s,inline:!0}):i,x=w=>{if(!v.isValidElement(w))return w;const k=w;if(k.type===Sr)return k;const R=k.props["aria-label"];return R?n.jsx(Sr,{content:R,placement:"top",delay:150,children:k}):k},y=v.Children.map(d,w=>{if(v.isValidElement(w)&&w.type===v.Fragment){const k=w.props.children;return v.Children.map(k,x)}return x(w)});return n.jsxs("div",{ref:p,"data-visibility":e,"data-align":o,className:ie(Zd.root,Zd[`align-${o}`],e==="hover"&&Zd.hover,l),...h,children:[y,g]})});X0.displayName="AIMessageActions";const G4="_card_1apq1_17",Y4="_header_1apq1_69",K4="_iconBadge_1apq1_74",Q4="_iconInner_1apq1_89",Z4="_headerText_1apq1_100",X4="_headerTopRow_1apq1_109",J4="_eyebrow_1apq1_115",ew="_title_1apq1_124",tw="_subtitle_1apq1_130",nw="_headerTrailing_1apq1_135",rw="_body_1apq1_141",ow="_footer_1apq1_152",aw="_footerEnd_1apq1_157",iw="_metaRow_1apq1_162",sw="_metaItem_1apq1_170",lw="_resultHero_1apq1_180",cw="_resultHeadline_1apq1_185",dw="_resultDetail_1apq1_191",uw="_clauses_1apq1_205",hw="_clause_1apq1_205",pw="_clauseLabel_1apq1_215",fw="_clauseBody_1apq1_225",mw="_badgeExecuting_1apq1_245",dt={card:G4,header:Y4,iconBadge:K4,iconInner:Q4,headerText:Z4,headerTopRow:X4,eyebrow:J4,title:ew,subtitle:tw,headerTrailing:nw,body:rw,footer:ow,footerEnd:aw,metaRow:iw,metaItem:sw,resultHero:lw,resultHeadline:cw,resultDetail:dw,clauses:uw,clause:hw,clauseLabel:pw,clauseBody:fw,badgeExecuting:mw},dr=v.forwardRef(({tone:e="neutral",accent:o=!0,fill:i=!1,icon:s,eyebrow:l,title:d,subtitle:h,trailing:p,footer:g,footerEnd:x=!1,className:y,children:w,...k},R)=>{const S=l!=null||p!=null,_=S||d!=null||h!=null,$=s!=null||_;return n.jsxs("div",{ref:R,"data-tone":e,"data-accent":o||void 0,"data-fill":i||void 0,"data-icon":s!=null||void 0,className:ie(dt.card,y),...k,children:[$&&n.jsxs("div",{className:dt.header,children:[s!=null&&n.jsx("span",{className:ie(dt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:n.jsx("span",{className:dt.iconInner,children:s})}),_&&n.jsxs("div",{className:dt.headerText,children:[S&&n.jsxs("div",{className:dt.headerTopRow,children:[l!=null&&n.jsx("span",{className:dt.eyebrow,children:l}),p!=null&&n.jsx("span",{className:dt.headerTrailing,children:p})]}),d!=null&&n.jsx("span",{className:dt.title,children:d}),h!=null&&n.jsx("span",{className:dt.subtitle,children:h})]})]}),w!=null&&n.jsx("div",{className:dt.body,children:w}),g!=null&&n.jsx("div",{className:ie(dt.footer,x&&dt.footerEnd),children:g})]})});dr.displayName="UltronCard";const gw="_root_zkkgh_6",vw="_sm_zkkgh_24",xw="_md_zkkgh_33",yw="_lg_zkkgh_42",ww="_neutral_zkkgh_53",bw="_blue_zkkgh_66",kw="_azure_zkkgh_79",_w="_purple_zkkgh_92",Cw="_pink_zkkgh_105",jw="_red_zkkgh_118",Sw="_orange_zkkgh_131",$w="_yellow_zkkgh_144",Mw="_matcha_zkkgh_157",Rw="_green_zkkgh_170",Nw="_subtle_zkkgh_184",Lw="_outline_zkkgh_190",Aw="_solid_zkkgh_196",Tw="_dot_zkkgh_203",Ew="_icon_zkkgh_212",Iw="_dismiss_zkkgh_224",_o={root:gw,sm:vw,md:xw,lg:yw,neutral:ww,blue:bw,azure:kw,purple:_w,pink:Cw,red:jw,orange:Sw,yellow:$w,matcha:Mw,green:Rw,subtle:Nw,outline:Lw,solid:Aw,dot:Tw,icon:Ew,dismiss:Iw},Ei=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})},Pw={sm:10,md:12,lg:14},Fn=v.forwardRef(({variant:e="subtle",color:o="neutral",size:i="md",dot:s,leadingIcon:l,dismissible:d,onDismiss:h,className:p,children:g,...x},y)=>n.jsxs("span",{ref:y,className:ie(_o.root,_o[i],_o[o],_o[e],p),...x,children:[s&&n.jsx("span",{className:_o.dot,"aria-hidden":"true"}),l&&n.jsx("span",{className:ie(_o.icon,"alloy-icon-slot"),"aria-hidden":"true",children:l}),g,d&&n.jsx("button",{type:"button",className:_o.dismiss,"aria-label":"Remove",onClick:w=>{w.stopPropagation(),h==null||h()},children:n.jsx(Ei,{size:Pw[i]})})]}));Fn.displayName="Tag";function J0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}J0.displayName="SlashCircle01Icon";const oh=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};oh.displayName="EyeIcon";function Ul({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ul.displayName="Target01Icon";function jn({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}jn.displayName="ClockIcon";const Ii=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Ii.displayName="RefreshCw04Icon";const $n=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,fill:"none"}),n.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};$n.displayName="CheckCircleIcon";function ql({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ql.displayName="Save01Icon";const zw={sm:11,md:12,lg:14},Dw={ignored:{label:"Ignored",color:"neutral",Icon:J0},monitored:{label:"Monitored",color:"blue",Icon:oh},recommended:{label:"Recommended",color:"purple",Icon:Ul},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:jn},executing:{label:"Executing",color:"azure",Icon:Ii},completed:{label:"Completed",color:"green",Icon:$n},saved:{label:"Saved",color:"matcha",Icon:ql}},To=v.forwardRef(({status:e,size:o="sm",label:i,className:s,...l},d)=>{const h=Dw[e],p=h.Icon;return n.jsx(Fn,{ref:d,color:h.color,size:o,variant:"subtle",leadingIcon:n.jsx(p,{size:zw[o]}),className:ie(e==="executing"&&dt.badgeExecuting,s),...l,children:i??h.label})});To.displayName="UltronStatusBadge";function Vl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Vl.displayName="Bell01Icon";const Ow=v.forwardRef(({title:e,icon:o,eyebrow:i="Event",meta:s,status:l,tone:d="neutral",children:h,...p},g)=>n.jsx(dr,{ref:g,tone:d,eyebrow:i,title:e,icon:o??n.jsx(Vl,{size:14}),trailing:l?n.jsx(To,{status:l}):void 0,...p,children:((s==null?void 0:s.length)||h)&&n.jsxs(n.Fragment,{children:[s!=null&&s.length?n.jsx("div",{className:dt.metaRow,children:s.map((x,y)=>n.jsxs("span",{className:dt.metaItem,children:[x.icon&&n.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:x.icon}),x.label]},y))}):null,h]})}));Ow.displayName="UltronEventCard";const Fw=v.forwardRef(({eyebrow:e="Understanding",icon:o,entities:i,tone:s="info",children:l,...d},h)=>n.jsxs(dr,{ref:h,tone:s,eyebrow:e,icon:o??n.jsx(eh,{size:14}),...d,children:[l,i&&n.jsx("div",{className:dt.metaRow,children:i})]}));Fw.displayName="UltronUnderstandingCard";const Bw={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},Hw=v.forwardRef(({eyebrow:e="Decision",icon:o,factors:i,tone:s="warning",children:l,...d},h)=>n.jsxs(dr,{ref:h,tone:s,eyebrow:e,icon:o??n.jsx(Ul,{size:14}),...d,children:[l,i!=null&&i.length?n.jsx("div",{className:dt.metaRow,children:i.map((p,g)=>n.jsx(Fn,{size:"sm",color:Bw[s],variant:"subtle",children:p},g))}):null]}));Hw.displayName="UltronDecisionCard";const Ww="_root_ou64w_8",Uw="_xs_ou64w_75",qw="_sm_ou64w_84",Vw="_md_ou64w_93",Gw="_lg_ou64w_102",Yw="_xl_ou64w_111",Kw="_iconOnly_ou64w_122",Qw="_primary_ou64w_132",Zw="_secondary_ou64w_148",Xw="_tertiary_ou64w_167",Jw="_ghost_ou64w_185",e6="_destructive_ou64w_203",t6="_destructiveSecondary_ou64w_221",n6="_artwork_ou64w_69",r6="_label_ou64w_254",o6="_spinner_ou64w_69",a6="_light_ou64w_281",un={root:Ww,xs:Uw,sm:qw,md:Vw,lg:Gw,xl:Yw,iconOnly:Kw,primary:Qw,secondary:Zw,tertiary:Xw,ghost:Jw,destructive:e6,destructiveSecondary:t6,artwork:n6,label:r6,spinner:o6,"alloy-spin":"_alloy-spin_ou64w_1",light:a6},i6={primary:un.primary,secondary:un.secondary,tertiary:un.tertiary,ghost:un.ghost,destructive:un.destructive,"destructive-secondary":un.destructiveSecondary},Fe=v.forwardRef(({variant:e="primary",size:o="md",loading:i=!1,leadingArtwork:s,trailingArtwork:l,iconOnly:d=!1,className:h,children:p,disabled:g,...x},y)=>{const w=g||i;return n.jsxs("button",{ref:y,className:ie(un.root,i6[e],un[o],d&&un.iconOnly,h),disabled:w,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":e,"data-size":o,...x,children:[i&&n.jsx("span",{className:un.spinner,"aria-hidden":"true"}),!i&&d&&n.jsx("span",{className:ie(un.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:p}),!i&&!d&&n.jsxs(n.Fragment,{children:[s&&n.jsx("span",{className:ie(un.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:s}),p&&n.jsx("span",{className:un.label,children:p}),l&&n.jsx("span",{className:ie(un.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l})]})]})});Fe.displayName="Button";function eg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}eg.displayName="XCircleIcon";const s6=v.forwardRef(({eyebrow:e="Recommendation",icon:o,actions:i,onIgnore:s,ignoreLabel:l="Ignore",tone:d="info",children:h,...p},g)=>{const x=n.jsxs(n.Fragment,{children:[i.map((y,w)=>n.jsx(Fe,{size:"sm",variant:y.variant??(w===0?"primary":"secondary"),leadingArtwork:y.icon,loading:y.loading,onClick:y.onClick,children:y.label},w)),s&&n.jsx(Fe,{size:"sm",variant:"ghost",leadingArtwork:n.jsx(eg,{size:16}),onClick:s,children:l})]});return n.jsx(dr,{ref:g,tone:d,eyebrow:e,icon:o??n.jsx(Ul,{size:14}),footer:x,...p,children:h})});s6.displayName="UltronRecommendationCard";function Gl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Gl.displayName="Lock01Icon";const l6=v.forwardRef(({title:e,eyebrow:o="Approval required",icon:i,approveLabel:s="Approve & send",onApprove:l,approving:d=!1,cancelLabel:h="Cancel",onCancel:p,editLabel:g="Edit",onEdit:x,tone:y="warning",children:w,...k},R)=>{const S=n.jsxs(n.Fragment,{children:[p&&n.jsx(Fe,{size:"md",variant:"ghost",onClick:p,children:h}),x&&n.jsx(Fe,{size:"md",variant:"secondary",onClick:x,children:g}),n.jsx(Fe,{size:"md",variant:"primary",leadingArtwork:n.jsx(Mn,{size:18}),loading:d,onClick:l,children:s})]});return n.jsx(dr,{ref:R,tone:y,eyebrow:o,title:e,icon:i??n.jsx(Gl,{size:14}),trailing:n.jsx(To,{status:"awaiting-approval"}),footer:S,footerEnd:!0,...k,children:w})});l6.displayName="UltronApprovalCard";const c6=v.forwardRef(({eyebrow:e="Working",icon:o,steps:i,state:s="live",duration:l,tone:d="info",...h},p)=>n.jsx(dr,{ref:p,tone:d,eyebrow:e,icon:o??n.jsx(Ii,{size:14}),trailing:n.jsx(To,{status:s==="done"?"completed":"executing"}),...h,children:n.jsx(rh,{state:s,duration:l,children:i.map((g,x)=>n.jsx(Wl,{type:g.type??"tool",status:g.status??"pending",detail:g.detail,subActivities:g.subActivities,children:g.label},x))})}));c6.displayName="UltronExecutionCard";const d6=v.forwardRef(({headline:e,detail:o,avatar:i,status:s="completed",tone:l="success",footer:d,...h},p)=>n.jsx(dr,{ref:p,tone:l,fill:!0,accent:!1,trailing:n.jsx(To,{status:s}),footer:d,...h,children:n.jsxs("div",{className:dt.resultHero,children:[n.jsx("span",{className:ie(dt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:i??n.jsx($n,{size:18})}),n.jsxs("div",{children:[n.jsx("div",{className:dt.resultHeadline,children:e}),o!=null&&n.jsx("div",{className:dt.resultDetail,children:o})]})]})}));d6.displayName="UltronResultCard";function tg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}tg.displayName="ZapIcon";const u6=v.forwardRef(({title:e="Want Ultron to handle this automatically next time?",eyebrow:o="Save as workflow",icon:i,saveLabel:s="Save as workflow",onSave:l,saving:d=!1,dismissLabel:h="Not now",onDismiss:p,tone:g="info",children:x,...y},w)=>{const k=n.jsxs(n.Fragment,{children:[n.jsx(Fe,{size:"md",variant:"primary",leadingArtwork:n.jsx(ql,{size:18}),loading:d,onClick:l,children:s}),p&&n.jsx(Fe,{size:"md",variant:"ghost",onClick:p,children:h})]});return n.jsx(dr,{ref:w,tone:g,fill:!0,accent:!1,eyebrow:o,title:e,icon:i??n.jsx(tg,{size:14}),footer:k,...y,children:x})});u6.displayName="UltronWorkflowSaveCard";const ng=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ng.displayName="GitBranch01Icon";function Xd({label:e,children:o}){return n.jsxs("div",{className:dt.clause,children:[n.jsx("span",{className:dt.clauseLabel,children:e}),n.jsx("span",{className:dt.clauseBody,children:o})]})}const h6=v.forwardRef(({name:e,eyebrow:o="Workflow",icon:i,when:s,conditions:l,actions:d,status:h,footer:p,tone:g="info",...x},y)=>n.jsx(dr,{ref:y,tone:g,eyebrow:o,title:e,icon:i??n.jsx(ng,{size:14}),trailing:h?n.jsx(To,{status:h}):void 0,footer:p,...x,children:n.jsxs("div",{className:dt.clauses,children:[n.jsx(Xd,{label:"When",children:s}),n.jsx(Xd,{label:"If",children:l}),n.jsx(Xd,{label:"Then",children:d})]})}));h6.displayName="UltronWorkflowPreviewCard";const p6="_root_1nyuz_6",f6="_sm_1nyuz_20",m6="_md_1nyuz_29",g6="_lg_1nyuz_38",v6="_divider_1nyuz_48",x6="_interactive_1nyuz_53",y6="_disabled_1nyuz_60",w6="_destructive_1nyuz_64",b6="_selected_1nyuz_78",k6="_label_1nyuz_87",_6="_description_1nyuz_97",C6="_leadingSlot_1nyuz_101",j6="_trailingSlot_1nyuz_102",S6="_content_1nyuz_115",$6="_taSwitch_1nyuz_167",M6="_taSwitchThumb_1nyuz_188",R6="_taCheckbox_1nyuz_203",N6="_taRadio_1nyuz_226",L6="_taRadioDot_1nyuz_244",A6="_taExpand_1nyuz_252",T6="_taStatus_1nyuz_266",E6="_taStatus_success_1nyuz_273",I6="_taStatus_warning_1nyuz_274",P6="_taStatus_error_1nyuz_275",z6="_taStatus_info_1nyuz_276",jt={root:p6,sm:f6,md:m6,lg:g6,divider:v6,interactive:x6,disabled:y6,destructive:w6,selected:b6,label:k6,description:_6,leadingSlot:C6,trailingSlot:j6,content:S6,taSwitch:$6,taSwitchThumb:M6,taCheckbox:R6,taRadio:N6,taRadioDot:L6,taExpand:A6,taStatus:T6,taStatus_success:E6,taStatus_warning:I6,taStatus_error:P6,taStatus_info:z6},Rn=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 6L15 12L9 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Rn.displayName="ChevronRightIcon";const ah=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ah.displayName="ArrowUpRightIcon";const D6="_root_4qytd_5",O6="_neutral_4qytd_25",F6="_primary_4qytd_30",B6="_success_4qytd_35",H6="_warning_4qytd_40",W6="_error_4qytd_45",U6="_info_4qytd_50",Ef={root:D6,neutral:O6,primary:F6,success:B6,warning:H6,error:W6,info:U6},Ma=v.forwardRef(({variant:e="neutral",className:o,children:i,...s},l)=>n.jsx("span",{ref:l,className:ie(Ef.root,Ef[e],o),...s,children:i}));Ma.displayName="Badge";const q6=({checked:e})=>n.jsx("span",{className:jt.taSwitch,"data-checked":e||void 0,"aria-hidden":"true",children:n.jsx("span",{className:jt.taSwitchThumb})}),V6=({checked:e})=>n.jsx("span",{className:jt.taCheckbox,"data-checked":e||void 0,"aria-hidden":"true",children:e&&n.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:n.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),G6=({checked:e})=>n.jsx("span",{className:jt.taRadio,"data-checked":e||void 0,"aria-hidden":"true",children:e&&n.jsx("span",{className:jt.taRadioDot})}),Y6=({count:e,label:o})=>{const i=e!==void 0?String(e):o;return i?n.jsx(Ma,{"aria-hidden":"true",children:i}):null},K6=({expanded:e})=>n.jsx("span",{className:jt.taExpand,"data-expanded":e||void 0,"aria-hidden":"true",children:n.jsx(Rn,{size:16,color:"currentColor"})}),Q6=({variant:e})=>n.jsx("span",{className:ie(jt.taStatus,jt[`taStatus_${e}`]),"aria-hidden":"true"}),Z6=new Set(["badge","status"]),Sn=v.forwardRef(({label:e,description:o,leadingSlot:i,trailingSlot:s,trailingAction:l,checked:d,defaultChecked:h=!1,onCheckedChange:p,badgeCount:g,badgeLabel:x,expanded:y=!1,statusVariant:w="success",divider:k=!0,size:R="md",interactive:S,selected:_=!1,destructive:$=!1,disabled:M=!1,className:C,onClick:j,onKeyDown:D,...N},L)=>{const E=l==="switch"||l==="checkbox"||l==="radio",[A,F]=v.useState(h),G=E?d!==void 0?d:A:!1,Y=S||!!j||E||l!==void 0&&!Z6.has(l),W=l==="switch"?"switch":l==="checkbox"?"checkbox":l==="radio"?"radio":Y?"button":void 0,K=v.useCallback(ce=>{if(!M){if(E){const se=!G;d===void 0&&F(se),p==null||p(se)}j==null||j(ce)}},[M,E,G,d,p,j]),J=v.useCallback(ce=>{Y&&!M&&(ce.key==="Enter"||ce.key===" ")&&(ce.preventDefault(),K(ce)),D==null||D(ce)},[Y,M,K,D]),ae=s??(()=>{if(!l)return null;switch(l){case"chevron":return n.jsx(Rn,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return n.jsx(ah,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return n.jsx(q6,{checked:G});case"checkbox":return n.jsx(V6,{checked:G});case"radio":return n.jsx(G6,{checked:G});case"badge":return n.jsx(Y6,{count:g,label:x});case"expand":return n.jsx(K6,{expanded:y});case"status":return n.jsx(Q6,{variant:w});default:return null}})();return n.jsxs("div",{ref:L,role:W,tabIndex:Y&&!M?0:void 0,"aria-checked":E?G:void 0,"aria-selected":_||void 0,"aria-disabled":M||void 0,"data-selected":_||void 0,"data-disabled":M||void 0,"data-destructive":$||void 0,"data-trailing-action":l??void 0,className:ie(jt.root,jt[R],k&&jt.divider,Y&&jt.interactive,_&&jt.selected,$&&jt.destructive,M&&jt.disabled,C),onClick:M?void 0:K,onKeyDown:J,...N,children:[i&&n.jsx("div",{className:jt.leadingSlot,children:i}),n.jsxs("div",{className:jt.content,children:[n.jsx("span",{className:jt.label,children:e}),o&&n.jsx("span",{className:jt.description,children:o})]}),ae&&n.jsx("div",{className:jt.trailingSlot,children:ae})]})});Sn.displayName="ListItem";const X6=v.forwardRef(({title:e,meta:o,icon:i,status:s,...l},d)=>n.jsx(Sn,{ref:d,label:e,description:o,leadingSlot:i?n.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:i}):void 0,trailingSlot:n.jsx(To,{status:s}),...l}));X6.displayName="UltronActivityStreamItem";const J6="_root_1sz1z_7",eb="_status_1sz1z_50",Jd={root:J6,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:eb},ih=v.forwardRef(({disabled:e=!1,size:o="md",escapeTarget:i,onEscape:s,className:l,children:d,...h},p)=>{const g=v.useRef(null),[x,y]=v.useState(""),w=v.Children.map(d,k=>{if(!v.isValidElement(k))return k;const R=k.props;return v.cloneElement(k,{groupDisabled:e||!!R.groupDisabled})});return v.useEffect(()=>{if(!i||!s)return;const k=R=>{R.key==="Escape"&&s()};return i.addEventListener("keydown",k),()=>i.removeEventListener("keydown",k)},[i,s]),v.useCallback(k=>y(k),[]),n.jsxs("div",{ref:p,"data-size":o,className:ie(Jd.root,Jd[`size-${o}`],l),...h,children:[w,n.jsx("span",{ref:g,className:Jd.status,role:"status","aria-live":"polite",children:x})]})});ih.displayName="ComposerActions";function eu({size:e=24,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})}const rg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};rg.displayName="SearchSmIcon";const xl=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};xl.displayName="Trash03Icon";const sh=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};sh.displayName="SunIcon";const og=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};og.displayName="ArrowNarrowRightIcon";function Xr({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function If({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function tb({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}const Rl=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Rl.displayName="ChevronSelectorVerticalIcon";const $o=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[n.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:o}),n.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:o,strokeWidth:d,strokeLinecap:"round",strokeLinejoin:"round"})]})};$o.displayName="ClipboardCheckIcon";const ag=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.25:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:o,strokeWidth:d})})};ag.displayName="SettingsGearIcon";const ig=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 6L9 12L15 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ig.displayName="ChevronLeftIcon";const sg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M3 3L21 21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};sg.displayName="EyeOffIcon";const lg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};lg.displayName="StopIcon";const cg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};cg.displayName="RecordingIcon";const dg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};dg.displayName="BankIcon";function Yl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Yl.displayName="ArrowNarrowUpIcon";function ug({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ug.displayName="ArrowNarrowDownIcon";function Kl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Kl.displayName="Microphone02Icon";const wa=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};wa.displayName="AlertTriangleIcon";const hg=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};hg.displayName="BankNote01Icon";const pg=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V6.5M2 5V17C2 18.1046 4.46243 19 7.5 19M7.5 11C7.33145 11 7.16468 10.9972 7 10.9918C4.19675 10.9 2 10.0433 2 9M7.5 15C4.46243 15 2 14.1046 2 13M22 11.5C22 12.6046 19.5376 13.5 16.5 13.5C13.4624 13.5 11 12.6046 11 11.5M22 11.5C22 10.3954 19.5376 9.5 16.5 9.5C13.4624 9.5 11 10.3954 11 11.5M22 11.5V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11.5M22 15.25C22 16.3546 19.5376 17.25 16.5 17.25C13.4624 17.25 11 16.3546 11 15.25",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};pg.displayName="CoinsStacked03Icon";function fg({size:e=16,color:o="currentColor",...i}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[n.jsx("path",{d:"M12 2V22",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const lh=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};lh.displayName="Map01Icon";const ch=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M16.5 9.5L7.5 4.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};ch.displayName="PackageIcon";const mg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};mg.displayName="ThumbsUpIcon";const gg=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};gg.displayName="ThumbsDownIcon";function Si({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 21V15.6C15 15.0399 15 14.7599 14.891 14.546C14.7951 14.3578 14.6422 14.2049 14.454 14.109C14.2401 14 13.9601 14 13.4 14H10.6C10.0399 14 9.75992 14 9.54601 14.109C9.35785 14.2049 9.20487 14.3578 9.10899 14.546C9 14.7599 9 15.0399 9 15.6V21M3 7C3 8.65685 4.34315 10 6 10C7.65685 10 9 8.65685 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 8.65685 16.3431 10 18 10C19.6569 10 21 8.65685 21 7M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Si.displayName="Building02Icon";function dh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}dh.displayName="Building05Icon";function Pi({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Pi.displayName="CheckVerified01Icon";function vg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}vg.displayName="Copy01Icon";function xg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z",fill:o})})}xg.displayName="DotsVerticalIcon";function Ql({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ql.displayName="Edit02Icon";function yg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M8.12602 14C8.57006 15.7252 10.1362 17 12 17C13.8638 17 15.4299 15.7252 15.874 14M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}yg.displayName="HomeSmileIcon";function uh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12.7076 18.3639L11.2933 19.7781C9.34072 21.7308 6.1749 21.7308 4.22228 19.7781C2.26966 17.8255 2.26966 14.6597 4.22228 12.7071L5.63649 11.2929M18.3644 12.7071L19.7786 11.2929C21.7312 9.34024 21.7312 6.17441 19.7786 4.22179C17.826 2.26917 14.6602 2.26917 12.7076 4.22179L11.2933 5.636M8.50045 15.4999L15.5005 8.49994",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}uh.displayName="Link01Icon";function Zl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Zl.displayName="LinkExternal01Icon";function hh({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 4.6C15 4.03995 15 3.75992 14.891 3.54601C14.7951 3.35785 14.6422 3.20487 14.454 3.10899C14.2401 3 13.9601 3 13.4 3H10.6C10.0399 3 9.75992 3 9.54601 3.10899C9.35785 3.20487 9.20487 3.35785 9.10899 3.54601C9 3.75992 9 4.03995 9 4.6V7.4C9 7.96005 9 8.24008 8.89101 8.45399C8.79513 8.64215 8.64215 8.79513 8.45399 8.89101C8.24008 9 7.96005 9 7.4 9H4.6C4.03995 9 3.75992 9 3.54601 9.10899C3.35785 9.20487 3.20487 9.35785 3.10899 9.54601C3 9.75992 3 10.0399 3 10.6V13.4C3 13.9601 3 14.2401 3.10899 14.454C3.20487 14.6422 3.35785 14.7951 3.54601 14.891C3.75992 15 4.03995 15 4.6 15H7.4C7.96005 15 8.24008 15 8.45399 15.109C8.64215 15.2049 8.79513 15.3578 8.89101 15.546C9 15.7599 9 16.0399 9 16.6V19.4C9 19.9601 9 20.2401 9.10899 20.454C9.20487 20.6422 9.35785 20.7951 9.54601 20.891C9.75992 21 10.0399 21 10.6 21H13.4C13.9601 21 14.2401 21 14.454 20.891C14.6422 20.7951 14.7951 20.6422 14.891 20.454C15 20.2401 15 19.9601 15 19.4V16.6C15 16.0399 15 15.7599 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109C15.7599 15 16.0399 15 16.6 15H19.4C19.9601 15 20.2401 15 20.454 14.891C20.6422 14.7951 20.7951 14.6422 20.891 14.454C21 14.2401 21 13.9601 21 13.4V10.6C21 10.0399 21 9.75992 20.891 9.54601C20.7951 9.35785 20.6422 9.20487 20.454 9.10899C20.2401 9 19.9601 9 19.4 9L16.6 9C16.0399 9 15.7599 9 15.546 8.89101C15.3578 8.79513 15.2049 8.64215 15.109 8.45399C15 8.24008 15 7.96005 15 7.4V4.6Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}hh.displayName="MedicalCrossIcon";function $i({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}$i.displayName="MessageCircle02Icon";function ph({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 12H19",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ph.displayName="MinusIcon";function wg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}wg.displayName="Moon01Icon";function bg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}bg.displayName="Pin01Icon";function kg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M8.8125 10.4167L10.9375 12.5278L15.7188 7.77778M20.5 21.5V7.56667C20.5 5.79317 20.5 4.90642 20.1526 4.22903C19.847 3.63318 19.3594 3.14875 18.7596 2.84515C18.0778 2.5 17.1852 2.5 15.4 2.5H8.6C6.81483 2.5 5.92225 2.5 5.24041 2.84515C4.64064 3.14875 4.15301 3.63318 3.84742 4.22903C3.5 4.90642 3.5 5.79317 3.5 7.56667V21.5L6.42188 19.3889L9.07812 21.5L12 19.3889L14.9219 21.5L17.5781 19.3889L20.5 21.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}kg.displayName="ReceiptCheckIcon";function _g({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})}_g.displayName="Settings02Icon";function Cg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12M22 12C22 6.47715 17.5228 2 12 2M22 12H19.5M2 12C2 6.47715 6.47715 2 12 2M2 12H4.5M12 2V4.5M19.0784 5L13.4999 10.5M19.0784 19.0784L18.8745 18.8745C18.1827 18.1827 17.8368 17.8368 17.4331 17.5894C17.0753 17.3701 16.6851 17.2085 16.2769 17.1105C15.8166 17 15.3274 17 14.349 17L9.65096 17C8.6726 17 8.18342 17 7.72307 17.1106C7.31493 17.2086 6.92475 17.3702 6.56686 17.5895C6.1632 17.8369 5.8173 18.1828 5.12549 18.8746L4.92163 19.0784M4.92163 5L6.65808 6.73645M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Cg.displayName="Speedometer02Icon";function jg({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}jg.displayName="Trash01Icon";function Nu({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Nu.displayName="UploadCloud01Icon";function ba({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}ba.displayName="XCloseIcon";const nb="_base_i93xz_11",rb="_icon_i93xz_45",ob="_sendReady_i93xz_65",ab="_sendStreaming_i93xz_66",ib="_sendDisabled_i93xz_67",sb="_sendError_i93xz_68",lb="_attachIdle_i93xz_131",cb="_attachDisabled_i93xz_145",db="_attachError_i93xz_152",ub="_voiceIdle_i93xz_165",hb="_voiceRecording_i93xz_179",pb="_voiceDisabled_i93xz_189",fb="_iconStack_i93xz_200",mb="_iconLayer_i93xz_209",kt={base:nb,icon:rb,sendReady:ob,sendStreaming:ab,sendDisabled:ib,sendError:sb,attachIdle:lb,attachDisabled:cb,attachError:db,voiceIdle:ub,voiceRecording:hb,voiceDisabled:pb,iconStack:fb,iconLayer:mb},gb={hidden:void 0,ready:kt.sendReady,"disabled-invalid":kt.sendDisabled,streaming:kt.sendStreaming,error:kt.sendError},vb=(e,o,i)=>{switch(e){case"ready":return"Send message";case"disabled-invalid":return o?`Cannot send: ${o}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},Ra=v.forwardRef(({state:e,onSend:o,onStop:i,onRetry:s,invalidReason:l,errorMessage:d,groupDisabled:h,className:p,style:g,...x},y)=>{const w=v.useRef(null),k=v.useRef(null),R=v.useCallback(j=>{k.current=j,typeof y=="function"?y(j):y&&(y.current=j)},[y]),S=v.useCallback(()=>{if(e==="ready"){o==null||o();return}if(e==="streaming"){i==null||i();return}if(e==="error"){const j=k.current;j&&(j.dataset.pressed="true",w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{j.dataset.pressed="false"},140)),s==null||s()}},[e,o,i,s]);if(e==="hidden")return null;const _=!h&&(e==="ready"||e==="streaming"||e==="error"),$=vb(e,l,d),M=e==="disabled-invalid"?l??"Cannot send":e==="error"?d??"Send failed — click to retry":null,C=n.jsx("button",{ref:R,type:"button","data-composer-action":"send","data-state":e,className:ie(kt.base,gb[e],p),style:g,"aria-label":$,disabled:!_,onClick:S,...x,children:n.jsxs("span",{className:kt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[n.jsx("span",{className:kt.iconLayer,"data-active":e==="ready"||e==="disabled-invalid"?"true":"false",children:n.jsx(Yl,{size:"100%",strokeWidth:2})}),n.jsx("span",{className:kt.iconLayer,"data-active":e==="streaming"?"true":"false",children:n.jsx(lg,{size:"100%",strokeWidth:1.75})}),n.jsx("span",{className:kt.iconLayer,"data-active":e==="error"?"true":"false",children:n.jsx(Ii,{size:"100%",strokeWidth:2})})]})});return M?n.jsx(Sr,{content:M,placement:"top",children:C}):C});Ra.displayName="ComposerSendButton";const xb={idle:kt.attachIdle,disabled:kt.attachDisabled,error:kt.attachError},yb=(e,o,i)=>{switch(e){case"idle":return"Add attachment";case"disabled":return o?`Attachments unavailable: ${o}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},Sg=v.forwardRef(({state:e,onSelect:o,accept:i,multiple:s=!0,disabledReason:l,errorMessage:d,groupDisabled:h,className:p,style:g,...x},y)=>{const w=v.useRef(null),k=v.useCallback(()=>{var C;(e==="idle"||e==="error")&&((C=w.current)==null||C.click())},[e]),R=v.useCallback(C=>{const j=C.target.files;j&&j.length>0&&(o==null||o(j)),C.target.value=""},[o]),S=!h&&e!=="disabled",_=yb(e,l,d),$=e==="disabled"?l??"Attachments unavailable":e==="error"?d??"Attachment failed":null,M=n.jsxs("button",{ref:y,type:"button","data-composer-action":"attachment","data-state":e,className:ie(kt.base,xb[e],p),style:g,"aria-label":_,disabled:!S,onClick:k,...x,children:[n.jsx("span",{className:kt.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:n.jsx($a,{size:"100%",strokeWidth:2})}),n.jsx("input",{ref:w,type:"file",accept:i,multiple:s,onChange:R,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return $?n.jsx(Sr,{content:$,placement:"top",children:M}):M});Sg.displayName="ComposerAttachment";const wb={idle:kt.voiceIdle,recording:kt.voiceRecording,disabled:kt.voiceDisabled},bb=(e,o)=>{switch(e){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return o?`Voice unavailable: ${o}`:"Voice unavailable"}},$g=v.forwardRef(({state:e,onStartRecording:o,onStopRecording:i,disabledReason:s,groupDisabled:l,className:d,style:h,...p},g)=>{const x=v.useCallback(()=>{if(e==="idle"){o==null||o();return}if(e==="recording"){i==null||i();return}},[e,o,i]),y=!l&&e!=="disabled",w=bb(e,s),k=e==="disabled"?s??"Voice unavailable":null,R=n.jsx("button",{ref:g,type:"button","data-composer-action":"voice","data-state":e,className:ie(kt.base,wb[e],d),style:h,"aria-label":w,"aria-pressed":e==="recording"||void 0,disabled:!y,onClick:x,...p,children:n.jsxs("span",{className:kt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[n.jsx("span",{className:kt.iconLayer,"data-active":e!=="recording"?"true":"false",children:n.jsx(Kl,{size:"100%",strokeWidth:1.5})}),n.jsx("span",{className:kt.iconLayer,"data-active":e==="recording"?"true":"false",children:n.jsx(cg,{size:"100%",strokeWidth:1.5})})]})});return k?n.jsx(Sr,{content:k,placement:"top",children:R}):R});$g.displayName="ComposerVoiceButton";const kb=v.forwardRef(({value:e,onChange:o,onSubmit:i,placeholder:s="Ask Ultron…",sending:l=!1,disabled:d=!1,voice:h=!0,maxRows:p=4,radius:g="lg",leadingActions:x,className:y},w)=>{const k=l?"streaming":e.trim().length===0?"hidden":"ready";return n.jsx(K0,{className:y,style:{flex:"0 0 auto"},children:n.jsx(Q0,{ref:w,value:e,onChange:o,onSubmit:i,placeholder:s,maxRows:p,radius:g,disabled:d,children:n.jsxs(ih,{size:"md",disabled:d,children:[x,h&&n.jsx($g,{state:d?"disabled":"idle"}),n.jsx(Ra,{state:k,onSend:i,onStop:i})]})})})});kb.displayName="UltronCommandBar";const _b=v.forwardRef(({stages:e,state:o="live",duration:i,...s},l)=>n.jsx(rh,{ref:l,state:o,duration:i,...s,children:e.map((d,h)=>n.jsx(Wl,{type:d.type??"content",status:d.status??"pending",icon:d.icon,detail:d.detail,children:d.label},h))}));_b.displayName="UltronThreadTimeline";const Cb="_root_ghwhu_10",jb="_badge_ghwhu_27",Sb="_badgeIcon_ghwhu_38",$b="_green_ghwhu_59",Mb="_yellow_ghwhu_60",Rb="_matcha_ghwhu_61",Nb="_purple_ghwhu_62",Lb="_blue_ghwhu_63",Ab="_azure_ghwhu_64",Tb="_red_ghwhu_65",Eb="_orange_ghwhu_66",Ib="_pink_ghwhu_67",Pb="_slate_ghwhu_68",zb="_content_ghwhu_73",Db="_label_ghwhu_83",Ob="_valueRow_ghwhu_97",Fb="_change_ghwhu_106",Bb="_value_ghwhu_97",wr={root:Cb,badge:jb,badgeIcon:Sb,green:$b,yellow:Mb,matcha:Rb,purple:Nb,blue:Lb,azure:Ab,red:Tb,orange:Eb,pink:Ib,slate:Pb,content:zb,label:Db,valueRow:Ob,change:Fb,value:Bb},Hb=v.forwardRef(({color:e="slate",icon:o,label:i,value:s,change:l,className:d,...h},p)=>n.jsxs("div",{ref:p,className:ie(wr.root,d),...h,children:[n.jsx("div",{className:ie(wr.badge,wr[e]),"aria-hidden":"true",children:n.jsx("span",{className:wr.badgeIcon,children:o})}),n.jsxs("div",{className:wr.content,children:[n.jsx("span",{className:wr.label,children:i}),n.jsxs("div",{className:wr.valueRow,children:[n.jsx("span",{className:wr.value,children:s}),l!=null&&n.jsx("span",{className:wr.change,children:l})]})]})]}));Hb.displayName="DataCard";const Wb="_root_d0j6n_7",Ub="_icon_d0j6n_21",qb="_text_d0j6n_33",Vb="_positive_d0j6n_41",Gb="_warning_d0j6n_45",Yb="_negative_d0j6n_49",tl={root:Wb,icon:Ub,text:qb,positive:Vb,warning:Gb,negative:Yb};function Kb(e){return e==="up"?"positive":"negative"}const Qb=v.forwardRef((e,o)=>{const{mode:i,value:s,className:l,...d}=e,h=i==="trend"?e.severity??Kb(e.trend):e.severity,{severity:p,...g}=d,x=i==="trend"?(({trend:w,severity:k,...R})=>R)(g):g,y=i==="trend"?e.trend==="up"?Yl:ug:null;return n.jsxs("span",{ref:o,className:ie(tl.root,tl[h],l),...x,children:[n.jsx("span",{className:tl.text,children:s}),y&&n.jsx("span",{className:tl.icon,"aria-hidden":"true",children:n.jsx(y,{size:14})})]})});Qb.displayName="ValueChangeLabel";const Zb="_root_1lq10_1",Xb="_horizontal_1lq10_9",Jb="_vertical_1lq10_15",e8="_solid_1lq10_32",t8="_dashed_1lq10_36",nl={root:Zb,horizontal:Xb,vertical:Jb,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:e8,dashed:t8},n8=v.forwardRef(({thickness:e=1,orientation:o="horizontal",variant:i="solid",className:s,...l},d)=>n.jsx("hr",{ref:d,role:"separator","aria-orientation":o,className:ie(nl.root,nl[`thickness-${e}`],nl[o],nl[i],s),...l}));n8.displayName="Divider";const r8="_overlay_vxgy2_9",o8="_dialogOverlayIn_vxgy2_1",a8="_dialogOverlayOut_vxgy2_1",i8="_dialog_vxgy2_38",s8="_dialogIn_vxgy2_1",l8="_dialogOut_vxgy2_1",c8="_sm_vxgy2_88",d8="_md_vxgy2_89",u8="_lg_vxgy2_90",h8="_header_vxgy2_95",p8="_title_vxgy2_107",f8="_closeBtn_vxgy2_120",m8="_content_vxgy2_152",g8="_footer_vxgy2_163",no={overlay:r8,dialogOverlayIn:o8,dialogOverlayOut:a8,dialog:i8,dialogIn:s8,dialogOut:l8,sm:c8,md:d8,lg:u8,header:h8,title:p8,closeBtn:f8,content:m8,footer:g8},Mg=v.forwardRef(({onClose:e,children:o,className:i,...s},l)=>n.jsxs("div",{ref:l,className:ie(no.header,i),...s,children:[n.jsx("span",{className:no.title,children:o}),e&&n.jsx("button",{type:"button",className:no.closeBtn,onClick:e,"aria-label":"Close",children:n.jsx(Ei,{size:16})})]}));Mg.displayName="DialogHeader";const Rg=v.forwardRef(({children:e,className:o,...i},s)=>n.jsx("div",{ref:s,className:ie(no.content,o),...i,children:e}));Rg.displayName="DialogContent";const Ng=v.forwardRef(({children:e,className:o,...i},s)=>n.jsx("div",{ref:s,className:ie(no.footer,o),...i,children:e}));Ng.displayName="DialogFooter";function Lg({open:e,onClose:o,size:i="sm",children:s,"aria-label":l,"aria-labelledby":d}){const h=v.useRef(null),p=180,[g,x]=v.useState(e);return v.useEffect(()=>{if(e){x(!0);return}const y=setTimeout(()=>x(!1),p);return()=>clearTimeout(y)},[e]),v.useEffect(()=>{if(!e)return;const y=w=>{w.key==="Escape"&&o()};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[e,o]),v.useEffect(()=>{if(!e)return;const y=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=y}},[e]),g?Ao.createPortal(n.jsx("div",{className:no.overlay,"data-state":e?"open":"closed",role:"dialog","aria-modal":"true","aria-label":l,"aria-labelledby":d,onMouseDown:y=>{y.target===y.currentTarget&&o()},children:n.jsx("div",{ref:h,className:ie(no.dialog,no[i]),"data-state":e?"open":"closed",children:s})}),document.body):null}const v8="_root_1dntq_7",x8="_badge_1dntq_57",y8="_badgeIconSlot_1dntq_74",w8="_content_1dntq_82",b8="_text_1dntq_90",k8="_title_1dntq_99",_8="_description_1dntq_120",C8="_actions_1dntq_131",j8="_dot_1dntq_137",S8="_actionLink_1dntq_144",$8="_primaryAction_1dntq_162",M8="_trailing_1dntq_170",Zt={root:v8,badge:x8,badgeIconSlot:y8,content:w8,text:b8,title:k8,description:_8,actions:C8,dot:j8,actionLink:S8,primaryAction:$8,trailing:M8},R8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),N8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),L8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),Pf=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),A8={error:R8,warning:L8,success:N8,info:Pf,feature:Pf},Ag=v.forwardRef(({status:e="info",variant:o="lighter",size:i="sm",title:s,description:l,action:d,onAction:h,learnMore:p,onLearnMore:g,onDismiss:x,className:y,...w},k)=>{const R=A8[e],S=i==="lg",_=x?n.jsx(Fe,{variant:"ghost",size:"xs",iconOnly:!0,onClick:x,"aria-label":"Dismiss",children:n.jsx(Ei,{size:12})}):null;return n.jsxs("div",{ref:k,role:"alert",className:ie(Zt.root,y),"data-status":e,"data-variant":o,"data-size":i,...w,children:[n.jsx("span",{className:Zt.badge,"aria-hidden":"true",children:n.jsx("span",{className:ie("alloy-icon-slot",Zt.badgeIconSlot),children:n.jsx(R,{})})}),S?n.jsxs("div",{className:Zt.content,children:[n.jsxs("div",{className:Zt.text,children:[n.jsx("p",{className:Zt.title,children:s}),l&&n.jsx("p",{className:Zt.description,children:l})]}),(d||p)&&n.jsxs("div",{className:Zt.actions,children:[d&&n.jsx("button",{type:"button",className:ie(Zt.actionLink,Zt.primaryAction),onClick:h,children:d}),d&&p&&n.jsx("span",{className:Zt.dot,"aria-hidden":"true",children:"·"}),p&&n.jsx("button",{type:"button",className:Zt.actionLink,onClick:g,children:p})]})]}):n.jsx("p",{className:Zt.title,children:s}),S?_:(d||x)&&n.jsxs("div",{className:Zt.trailing,children:[d&&n.jsx("button",{type:"button",className:ie(Zt.actionLink,Zt.primaryAction),onClick:h,children:d}),_]})]})});Ag.displayName="Alert";const T8="_stack_x4xl7_11",E8="_item_x4xl7_28",I8="_itemExiting_x4xl7_33",Lu={stack:T8,item:E8,itemExiting:I8},P8=v.createContext(null);function z8({id:e,title:o,description:i,status:s,variant:l,size:d,action:h,onAction:p,duration:g,exiting:x,onRemove:y}){const w=v.useCallback(()=>y(e),[e,y]);return n.jsx("div",{className:ie(Lu.item,x&&Lu.itemExiting),onAnimationEnd:x?w:void 0,children:n.jsx(Ag,{status:s,variant:l,size:d,title:o,description:i,action:h,onAction:p,onDismiss:w,style:{width:"100%"}})})}function D8({toasts:e,onStartExit:o,onRemove:i}){return v.useEffect(()=>{const s=[];return e.forEach(l=>{l.duration>0&&!l.exiting&&s.push(setTimeout(()=>o(l.id),l.duration))}),()=>s.forEach(clearTimeout)},[e,o]),e.length===0?null:Ao.createPortal(n.jsx("div",{className:Lu.stack,"aria-live":"polite","aria-atomic":"false",children:e.map(s=>n.jsx(z8,{...s,onRemove:i},s.id))}),document.body)}function O8({children:e}){const[o,i]=v.useState([]),s=v.useRef(0),l=v.useCallback(p=>{const g=`toast-${++s.current}`;return i(x=>[...x,{id:g,title:p.title,description:p.description,status:p.status??"info",variant:p.variant??"stroke",size:p.size??"sm",action:p.action,onAction:p.onAction,duration:p.duration??4e3,exiting:!1}]),g},[]),d=v.useCallback(p=>{i(g=>g.map(x=>x.id===p?{...x,exiting:!0}:x))},[]),h=v.useCallback(p=>{i(g=>g.filter(x=>x.id!==p))},[]);return n.jsxs(P8.Provider,{value:{addToast:l,removeToast:d},children:[e,n.jsx(D8,{toasts:o,onStartExit:d,onRemove:h})]})}const F8="_root_1s0ek_5",B8="_list_1s0ek_11",H8="_item_1s0ek_23",W8="_separator_1s0ek_31",U8="_link_1s0ek_47",q8="_current_1s0ek_68",V8="_iconSlot_1s0ek_76",lr={root:F8,list:B8,item:H8,separator:W8,link:U8,current:q8,iconSlot:V8},G8=()=>n.jsx("span",{className:lr.separator,"aria-hidden":"true",children:"/"}),Y8=()=>n.jsx("span",{className:lr.separator,"aria-hidden":"true",children:n.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),K8=v.forwardRef(({items:e,separator:o="slash",className:i,...s},l)=>{const d=o==="chevron"?Y8:G8;return n.jsx("nav",{ref:l,"aria-label":"Breadcrumb",className:ie(lr.root,i),...s,children:n.jsx("ol",{className:lr.list,children:e.map((h,p)=>{const g=p===e.length-1,x=!g&&(!!h.href||!!h.onClick);return n.jsxs("li",{className:lr.item,children:[p>0&&n.jsx(d,{}),x?n.jsxs("a",{href:h.href,onClick:h.onClick,className:lr.link,"aria-label":h.label,children:[h.icon&&n.jsx("span",{className:ie(lr.iconSlot,"alloy-icon-slot"),children:h.icon}),n.jsx("span",{children:h.label})]}):n.jsxs("span",{className:ie(lr.link,g&&lr.current),"aria-current":g?"page":void 0,children:[h.icon&&n.jsx("span",{className:ie(lr.iconSlot,"alloy-icon-slot"),children:h.icon}),n.jsx("span",{children:h.label})]})]},p)})})})});K8.displayName="Breadcrumb";const Q8="_root_139vz_6",Z8="_divider_139vz_14",X8="_item_139vz_19",J8="_label_139vz_25",e9="_description_139vz_26",t9="_chevron_139vz_27",n9="_iconSlot_139vz_28",r9="_hitTarget_139vz_32",o9="_size_sm_139vz_37",a9="_size_md_139vz_43",i9="_size_lg_139vz_49",s9="_header_139vz_59",l9="_headerContent_139vz_59",c9="_checkboxWrap_139vz_60",d9="_labelBlock_139vz_157",u9="_trailingSlot_139vz_60",h9="_body_139vz_199",p9="_bodyInner_139vz_209",f9="_bodyContent_139vz_214",Pt={root:Q8,divider:Z8,item:X8,label:J8,description:e9,chevron:t9,iconSlot:n9,hitTarget:r9,size_sm:o9,size_md:a9,size_lg:i9,header:s9,headerContent:l9,checkboxWrap:c9,labelBlock:d9,trailingSlot:u9,body:h9,bodyInner:p9,bodyContent:f9},m9="_root_17t97_6",g9="_disabled_17t97_12",v9="_sm_17t97_18",x9="_md_17t97_26",y9="_lg_17t97_34",w9="_controlWrap_17t97_43",b9="_input_17t97_52",k9="_box_17t97_67",_9="_boxChecked_17t97_96",C9="_boxError_17t97_106",j9="_labelWrap_17t97_116",S9="_label_17t97_116",$9="_error_17t97_138",M9="_required_17t97_140",R9="_description_17t97_145",bn={root:m9,disabled:g9,sm:v9,md:x9,lg:y9,controlWrap:w9,input:b9,box:k9,boxChecked:_9,boxError:C9,labelWrap:j9,label:S9,error:$9,required:M9,description:R9},Tg=v.forwardRef(({checked:e,defaultChecked:o=!1,indeterminate:i=!1,onChange:s,disabled:l,error:d,size:h="md",label:p,description:g,id:x,name:y,value:w,required:k,className:R},S)=>{const _=v.useId(),$=x??_,M=v.useRef(null);v.useEffect(()=>{M.current&&(M.current.indeterminate=i)},[i]);const C=e!==void 0,[j,D]=v.useState(o),N=C?e:j,L=A=>{C||D(A.target.checked),s==null||s(A.target.checked)},E=N||i;return n.jsxs("div",{className:ie(bn.root,bn[h],l&&bn.disabled,d&&bn.error,R),children:[n.jsxs("div",{className:bn.controlWrap,children:[n.jsx("input",{ref:A=>{M.current=A,typeof S=="function"?S(A):S&&(S.current=A)},type:"checkbox",id:$,name:y,value:w,checked:N,disabled:l,required:k,"aria-invalid":d||void 0,onChange:L,className:bn.input}),n.jsx("span",{className:ie(bn.box,E&&bn.boxChecked,d&&bn.boxError),"aria-hidden":"true",children:i?n.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:n.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):N?n.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:n.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(p||g)&&n.jsxs("div",{className:bn.labelWrap,children:[p&&n.jsxs("label",{htmlFor:$,className:bn.label,children:[p,k&&n.jsx("span",{className:bn.required,"aria-hidden":"true",children:" *"})]}),g&&n.jsx("span",{className:bn.description,children:g})]})]})});Tg.displayName="Checkbox";const Eg=v.createContext(null),Au=v.createContext(0),Ig=v.forwardRef(({type:e="multiple",collapsible:o=!0,value:i,defaultValue:s,onValueChange:l,divider:d=!0,size:h="md",disabled:p=!1,className:g,children:x,...y},w)=>{const k=v.useMemo(()=>Array.isArray(s)?new Set(s):typeof s=="string"?new Set([s]):new Set,[]),[R,S]=v.useState(k),_=i!==void 0,$=v.useMemo(()=>_?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:R,[_,i,R]),M=v.useCallback(D=>$.has(D),[$]),C=v.useCallback(D=>{const N=new Set($);e==="single"?N.has(D)?o&&N.delete(D):(N.clear(),N.add(D)):N.has(D)?N.delete(D):N.add(D),_||S(N),l&&l(e==="single"?N.values().next().value??"":Array.from(N))},[$,e,o,_,l]),j=v.useMemo(()=>({type:e,collapsible:o,size:h,disabled:p,isExpanded:M,toggle:C}),[e,o,h,p,M,C]);return n.jsx("div",{ref:w,"data-accordion-root":"","data-divider":d||void 0,"data-disabled":p||void 0,"data-size":h,className:ie(Pt.root,d&&Pt.divider,g),...y,children:n.jsx(Eg.Provider,{value:j,children:n.jsx(Au.Provider,{value:0,children:x})})})});Ig.displayName="Accordion";function rl(e,o){const i=e.closest("[data-accordion-root]");if(!i)return;const s=e.getAttribute("data-accordion-depth"),l=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${s}"]`)).filter(p=>p.closest("[data-accordion-root]")===i);if(l.length===0)return;const d=l.indexOf(e);let h;switch(o){case"first":h=l[0];break;case"last":h=l[l.length-1];break;case"next":h=l[(d+1)%l.length];break;case"prev":h=l[(d-1+l.length)%l.length];break}h.focus()}const Pg=v.forwardRef(({value:e,label:o,description:i,icon:s,leadingSlot:l,trailingSlot:d,chevronPosition:h="leading",selectable:p=!1,checked:g,defaultChecked:x=!1,indeterminate:y=!1,onCheckedChange:w,expanded:k,defaultExpanded:R=!1,onExpandedChange:S,disabled:_=!1,size:$,className:M,children:C,...j},D)=>{const N=v.useContext(Eg),L=v.useContext(Au),E=N!==null,A=$??(N==null?void 0:N.size)??"md",F=_||(N==null?void 0:N.disabled)||!1,[G,Y]=v.useState(R);let W;E?W=e!==void 0?N.isExpanded(e):!1:k!==void 0?W=k:W=G;const K=v.useCallback(()=>{if(F)return;if(E){if(e===void 0)return;const z=N.isExpanded(e);N.toggle(e);const te=N.type==="single"&&!N.collapsible&&z?!0:!z;S==null||S(te);return}const T=!W;k===void 0&&Y(T),S==null||S(T)},[F,E,N,e,W,k,S]),J=v.useCallback(T=>w==null?void 0:w(T),[w]),ae=v.useCallback(T=>{if(T.key==="Enter"||T.key===" "){T.preventDefault(),K();return}if(E)switch(T.key){case"ArrowDown":T.preventDefault(),rl(T.currentTarget,"next");break;case"ArrowUp":T.preventDefault(),rl(T.currentTarget,"prev");break;case"Home":T.preventDefault(),rl(T.currentTarget,"first");break;case"End":T.preventDefault(),rl(T.currentTarget,"last");break}},[K,E]),ce=v.useId(),se=`${ce}-header`,Q=`${ce}-body`,O=A==="sm"?16:A==="md"?18:20,q=l??n.jsxs(n.Fragment,{children:[p&&n.jsx("span",{className:Pt.checkboxWrap,children:n.jsx(Tg,{size:A,checked:g,defaultChecked:x,indeterminate:y,disabled:F,onChange:J})}),s&&n.jsx("span",{className:Pt.iconSlot,"aria-hidden":"true",children:s})]});return n.jsxs("div",{ref:D,"data-accordion-item":"","data-expanded":W||void 0,"data-disabled":F||void 0,"data-size":A,"data-depth":L,className:ie(Pt.item,Pt[`size_${A}`],M),style:{"--accordion-depth":L},...j,children:[n.jsxs("div",{className:Pt.header,children:[n.jsx("button",{type:"button",id:se,"data-accordion-header-button":"","data-accordion-depth":L,className:Pt.hitTarget,"aria-expanded":W,"aria-controls":Q,"aria-disabled":F||void 0,disabled:F,onClick:K,onKeyDown:ae}),n.jsxs("div",{className:Pt.headerContent,children:[h==="leading"&&n.jsx("span",{className:Pt.chevron,"aria-hidden":"true",children:n.jsx(Rn,{size:O,color:"currentColor"})}),q,n.jsxs("div",{className:Pt.labelBlock,children:[n.jsx("span",{className:Pt.label,children:o}),i&&n.jsx("span",{className:Pt.description,children:i})]}),d&&n.jsx("div",{className:Pt.trailingSlot,children:d}),h==="trailing"&&n.jsx("span",{className:Pt.chevron,"aria-hidden":"true",children:n.jsx(Rn,{size:O,color:"currentColor"})})]})]}),n.jsx("div",{id:Q,role:"region","aria-labelledby":se,className:Pt.body,"aria-hidden":!W,children:n.jsx("div",{className:Pt.bodyInner,children:n.jsx("div",{className:Pt.bodyContent,children:n.jsx(Au.Provider,{value:L+1,children:C})})})})]})});Pg.displayName="AccordionItem";const N9="_root_1vgip_7",L9="_fullWidth_1vgip_12",A9="_panel_1vgip_19",T9="_panelInner_1vgip_73",E9="_item_1vgip_81",I9="_groupHeading_1vgip_87",P9="_groupHeadingSm_1vgip_96",z9="_groupHeadingLabel_1vgip_100",D9="_groupHeadingCollapsible_1vgip_112",O9="_groupChevron_1vgip_125",F9="_groupDivider_1vgip_139",Jn={root:N9,fullWidth:L9,panel:A9,panelInner:T9,item:E9,groupHeading:I9,groupHeadingSm:P9,groupHeadingLabel:z9,groupHeadingCollapsible:D9,groupChevron:O9,groupDivider:F9};function B9({group:e,size:o,closeOnSelect:i,onClose:s}){const[l,d]=v.useState(e.defaultExpanded??!0);return n.jsxs("div",{children:[e.heading&&n.jsxs("div",{className:ie(Jn.groupHeading,o==="sm"&&Jn.groupHeadingSm,e.collapsible&&Jn.groupHeadingCollapsible),onClick:e.collapsible?()=>d(h=>!h):void 0,"aria-expanded":e.collapsible?l:void 0,children:[n.jsx("span",{className:Jn.groupHeadingLabel,children:e.heading}),e.collapsible&&n.jsx("span",{className:Jn.groupChevron,"data-expanded":l||void 0,"aria-hidden":"true",children:n.jsx(Rn,{size:12})})]}),l&&n.jsx("div",{role:"group","aria-label":e.heading,children:e.options.map((h,p)=>{const g=h.trailingAction==="switch"||h.trailingAction==="checkbox"||h.trailingAction==="radio";return n.jsx(Sn,{role:"menuitem",size:o,label:h.label,description:h.description,leadingSlot:h.leadingSlot,trailingAction:h.trailingAction,trailingSlot:h.trailingSlot,disabled:h.disabled,destructive:h.destructive,selected:h.selected,checked:h.checked,defaultChecked:h.defaultChecked,onCheckedChange:h.onCheckedChange,badgeCount:h.badgeCount,badgeLabel:h.badgeLabel,expanded:h.expanded,statusVariant:h.statusVariant,divider:h.divider??!1,className:Jn.item,onClick:()=>{var x;(x=h.onClick)==null||x.call(h),i&&!g&&s()}},h.id)})})]})}const fh=v.forwardRef(({trigger:e,groups:o,size:i="sm",width:s=260,placement:l="bottom-start",open:d,defaultOpen:h=!1,onOpenChange:p,disabled:g=!1,closeOnSelect:x=!0,fullWidth:y=!1,className:w,...k},R)=>{const[S,_]=v.useState(h),$=v.useRef(null),M=d!==void 0?d:S,C=v.useCallback(D=>{$.current=D,R&&(typeof R=="function"?R(D):R.current=D)},[R]),j=v.useCallback(D=>{d===void 0&&_(D),p==null||p(D)},[d,p]);return v.useEffect(()=>{if(!M)return;const D=N=>{var L;(L=$.current)!=null&&L.contains(N.target)||j(!1)};return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[M,j]),v.useEffect(()=>{if(!M)return;const D=N=>{N.key==="Escape"&&j(!1)};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[M,j]),n.jsxs("div",{ref:C,className:ie(Jn.root,y&&Jn.fullWidth,w),...k,children:[n.jsx("div",{style:{display:y?"flex":"inline-flex",width:y?"100%":void 0},"aria-haspopup":"menu","aria-expanded":M,tabIndex:g?-1:0,onClick:g?void 0:()=>j(!M),onKeyDown:g?void 0:D=>{(D.key==="Enter"||D.key===" ")&&(D.preventDefault(),j(!M))},children:e}),n.jsx("div",{className:Jn.panel,"data-open":M||void 0,"data-placement":l,style:{width:typeof s=="number"?`${s}px`:s},role:"menu","aria-orientation":"vertical",children:n.jsx("div",{className:Jn.panelInner,children:o.map((D,N)=>n.jsxs("div",{children:[N>0&&n.jsx("div",{className:Jn.groupDivider,"aria-hidden":"true"}),n.jsx(B9,{group:D,size:i,closeOnSelect:x,onClose:()=>j(!1)})]},D.id))})})]})});fh.displayName="DropdownMenu";const H9="_hiddenInput_8457s_8",W9="_area_8457s_19",U9="_uploadIcon_8457s_53",q9="_textBlock_8457s_59",V9="_title_8457s_67",G9="_description_8457s_76",Y9="_fileRow_8457s_88",K9="_fileIcon_8457s_96",Q9="_fileName_8457s_101",Z9="_successIcon_8457s_115",X9="_removeBtn_8457s_121",J9="_progressWrap_8457s_145",e7="_progressBar_8457s_153",t7="_progressFill_8457s_161",n7="_progressLabel_8457s_168",r7="_errorRow_8457s_178",o7="_errorIcon_8457s_186",a7="_errorText_8457s_192",i7="_areaMulti_8457s_206",s7="_multiDropZone_8457s_214",l7="_fileList_8457s_244",c7="_fileListItem_8457s_254",d7="_inline_8457s_267",u7="_inlineIcon_8457s_309",h7="_inlineText_8457s_330",p7="_inlineProgress_8457s_353",f7="_inlineProgressFill_8457s_363",m7="_footerSlot_8457s_429",Ye={hiddenInput:H9,area:W9,uploadIcon:U9,textBlock:q9,title:V9,description:G9,fileRow:Y9,fileIcon:K9,fileName:Q9,successIcon:Z9,removeBtn:X9,progressWrap:J9,progressBar:e7,progressFill:t7,progressLabel:n7,errorRow:r7,errorIcon:o7,errorText:a7,areaMulti:i7,multiDropZone:s7,fileList:l7,fileListItem:c7,inline:d7,inlineIcon:u7,inlineText:h7,inlineProgress:p7,inlineProgressFill:f7,footerSlot:m7};function tu(e){const o=e.name.lastIndexOf(".");return o!==-1?e.name.slice(o+1).toUpperCase():e.type?(e.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const zg=v.forwardRef(({variant:e="area",multiple:o=!1,state:i="empty",progress:s=0,file:l,files:d,errorMessage:h,title:p="Choose a file or drag & drop it here.",description:g="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:x,onFileSelect:y,onFilesSelect:w,onClear:k,onRemoveFile:R,fieldVariant:S="outlined",browseButtonVariant:_="tertiary",footerSlot:$,disabled:M=!1,className:C,...j},D)=>{const N=v.useRef(null),[L,E]=v.useState(!1),A=!M&&(o||i==="empty"),F=v.useCallback(()=>{var Q;!M&&(o||i==="empty")&&((Q=N.current)==null||Q.click())},[M,o,i]),G=v.useCallback(Q=>{var O;if(o){const q=Q.target.files?Array.from(Q.target.files):[];q.length&&(w==null||w(q))}else{const q=(O=Q.target.files)==null?void 0:O[0];q&&(y==null||y(q))}Q.target.value=""},[o,y,w]),Y=v.useCallback(Q=>{Q.preventDefault(),A&&E(!0)},[A]),W=v.useCallback(()=>E(!1),[]),K=v.useCallback(Q=>{var O;if(Q.preventDefault(),E(!1),!!A)if(o){const q=Q.dataTransfer.files?Array.from(Q.dataTransfer.files):[];q.length&&(w==null||w(q))}else{const q=(O=Q.dataTransfer.files)==null?void 0:O[0];q&&(y==null||y(q))}},[A,o,y,w]),J=n.jsx("input",{ref:N,type:"file",className:Ye.hiddenInput,accept:x,multiple:o,disabled:M,"aria-hidden":"true",tabIndex:-1,onChange:G}),ae=l?n.jsxs("div",{className:Ye.fileRow,children:[n.jsx("span",{className:`${Ye.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(to,{size:16})}),n.jsx("span",{className:Ye.fileName,children:l.name}),n.jsx(Fn,{size:"sm",variant:"subtle",children:tu(l)}),i==="complete"&&n.jsx("span",{className:`${Ye.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx($n,{size:16})}),n.jsx("button",{type:"button",className:Ye.removeBtn,onClick:k,"aria-label":"Remove file",children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(xl,{size:14})})})]}):null;if(e==="area"){if(o){const Q=d??[];return n.jsxs("div",{ref:D,className:ie(Ye.areaMulti,C),"data-drag-over":L||void 0,"data-disabled":M||void 0,onDragOver:Y,onDragLeave:W,onDrop:K,...j,children:[J,n.jsxs("div",{className:Ye.multiDropZone,children:[n.jsx("span",{className:`${Ye.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(eu,{size:24})}),n.jsxs("div",{className:Ye.textBlock,children:[n.jsx("p",{className:Ye.title,children:p}),n.jsx("p",{className:Ye.description,children:g})]}),n.jsx(Fe,{variant:_,size:"sm",onClick:F,disabled:M,children:"Browse Files"})]}),Q.length>0&&n.jsx("ul",{className:Ye.fileList,"aria-label":"Selected files",children:Q.map((O,q)=>n.jsxs("li",{className:Ye.fileListItem,children:[n.jsx("span",{className:`${Ye.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(to,{size:16})}),n.jsx("span",{className:Ye.fileName,children:O.name}),n.jsx(Fn,{size:"sm",variant:"subtle",children:tu(O)}),n.jsx("button",{type:"button",className:Ye.removeBtn,onClick:()=>R==null?void 0:R(q),"aria-label":`Remove ${O.name}`,disabled:M,children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(xl,{size:14})})})]},`${O.name}-${q}`))})]})}return n.jsxs("div",{ref:D,className:ie(Ye.area,C),"data-state":i,"data-drag-over":L||void 0,"data-disabled":M||void 0,onDragOver:Y,onDragLeave:W,onDrop:K,...j,children:[J,i==="empty"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:`${Ye.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(eu,{size:24})}),n.jsxs("div",{className:Ye.textBlock,children:[n.jsx("p",{className:Ye.title,children:p}),n.jsx("p",{className:Ye.description,children:g})]}),n.jsx(Fe,{variant:_,size:"sm",onClick:F,disabled:M,children:"Browse File"}),$&&n.jsx("div",{className:Ye.footerSlot,children:$})]}),i==="uploading"&&n.jsxs(n.Fragment,{children:[ae,n.jsxs("div",{className:Ye.progressWrap,children:[n.jsx("div",{className:Ye.progressBar,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:n.jsx("div",{className:Ye.progressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})}),n.jsxs("p",{className:Ye.progressLabel,children:[s,"% uploaded"]})]})]}),i==="complete"&&ae,i==="error"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:Ye.errorRow,children:[n.jsx("span",{className:`${Ye.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(ya,{size:20})}),n.jsx("p",{className:Ye.errorText,children:h??"Upload failed. Please try again."})]}),n.jsx(Fe,{variant:"tertiary",size:"sm",onClick:F,disabled:M,children:"Try Again"})]})]})}const ce={empty:n.jsx(eu,{size:16}),uploading:n.jsx(to,{size:16}),complete:n.jsx($n,{size:16}),error:n.jsx(ya,{size:16})}[i],se=(i==="uploading"||i==="complete")&&!!l;return n.jsxs("div",{ref:D,className:ie(Ye.inline,C),"data-state":i,"data-field-variant":S,"data-disabled":M||void 0,...j,children:[J,n.jsx("span",{className:`${Ye.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:ce}),n.jsxs("span",{className:Ye.inlineText,"data-has-file":se?"":void 0,children:[i==="empty"&&p,i==="uploading"&&(l==null?void 0:l.name),i==="complete"&&(l==null?void 0:l.name),i==="error"&&(h??"Upload failed. Please try again.")]}),se&&n.jsx(Fn,{size:"sm",variant:"subtle",children:tu(l)}),(i==="uploading"||i==="complete"||i==="error")&&n.jsx("button",{type:"button",className:Ye.removeBtn,onClick:k,"aria-label":"Remove file",children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(xl,{size:14})})}),i==="empty"&&n.jsx(Fe,{variant:_,size:"xs",onClick:F,disabled:M,children:"Browse"}),i==="uploading"&&n.jsx("div",{className:Ye.inlineProgress,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:n.jsx("div",{className:Ye.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})})]})});zg.displayName="FileUploader";const g7="_wrapper_127v8_8",v7="_labelRow_127v8_16",x7="_label_127v8_16",y7="_required_127v8_28",w7="_labelIcon_127v8_36",b7="_sm_127v8_46",k7="_md_127v8_47",_7="_lg_127v8_48",C7="_shell_127v8_44",j7="_outlined_127v8_75",S7="_underlined_127v8_102",$7="_float_127v8_147",M7="_leadingSlot_127v8_181",R7="_trailingSlot_127v8_193",N7="_trailingActionWrap_127v8_206",L7="_trailingActionBtn_127v8_213",A7="_successTrailingSlot_127v8_234",T7="_errorTrailingSlot_127v8_239",E7="_control_127v8_251",I7="_selectValue_127v8_297",P7="_selectPlaceholder_127v8_303",z7="_selectChevron_127v8_307",D7="_selectChevronOpen_127v8_312",O7="_textareaShell_127v8_315",F7="_textareaControl_127v8_334",B7="_footer_127v8_351",H7="_footerRow_127v8_363",W7="_footerError_127v8_364",U7="_footerSuccess_127v8_365",q7="_footerIcon_127v8_368",V7="_wrapperHorizontal_127v8_378",G7="_horizontalLabelCol_127v8_384",Y7="_horizontalLabelHint_127v8_393",K7="_horizontalControlCol_127v8_402",Q7="_msContainer_127v8_416",Z7="_msShell_127v8_425",X7="_msOpen_127v8_440",J7="_msDisabled_127v8_447",ek="_msBody_127v8_450",tk="_msPlaceholder_127v8_459",nk="_msChevron_127v8_469",rk="_msChevronOpen_127v8_480",ok="_msPanel_127v8_483",Ie={wrapper:g7,labelRow:v7,label:x7,required:y7,labelIcon:w7,sm:b7,md:k7,lg:_7,shell:C7,outlined:j7,underlined:S7,float:$7,leadingSlot:M7,trailingSlot:R7,trailingActionWrap:N7,trailingActionBtn:L7,successTrailingSlot:A7,errorTrailingSlot:T7,control:E7,selectValue:I7,selectPlaceholder:P7,selectChevron:z7,selectChevronOpen:D7,textareaShell:O7,textareaControl:F7,footer:B7,footerRow:H7,footerError:W7,footerSuccess:U7,footerIcon:q7,wrapperHorizontal:V7,horizontalLabelCol:G7,horizontalLabelHint:Y7,horizontalControlCol:K7,msContainer:Q7,msShell:Z7,msOpen:X7,msDisabled:J7,msBody:ek,msPlaceholder:tk,msChevron:nk,msChevronOpen:rk,msPanel:ok};function Na({label:e,labelIcon:o,labelDescription:i,hint:s,error:l,success:d,required:h,htmlFor:p,layout:g="vertical",labelWidth:x=160,className:y,children:w}){const k=l??d??s,R=l?"error":d?"success":"hint",S=k?n.jsxs("p",{className:ie(Ie.footer,R==="error"&&Ie.footerError,R==="success"&&Ie.footerSuccess),role:R==="error"?"alert":void 0,"aria-live":R==="error"?"assertive":void 0,children:[R==="hint"&&n.jsx("span",{className:`${Ie.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(ya,{size:12})}),k]}):null,_=e!=null?n.jsxs("div",{className:Ie.labelRow,children:[n.jsx("label",{className:Ie.label,htmlFor:p,children:e}),h&&n.jsx("span",{className:Ie.required,"aria-hidden":"true",children:"*"}),o&&n.jsx("span",{className:`${Ie.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:o})]}):null;if(g==="horizontal"){const $={width:typeof x=="number"?`${x}px`:x};return n.jsxs("div",{className:ie(Ie.wrapper,Ie.wrapperHorizontal,y),children:[(_||i)&&n.jsxs("div",{className:Ie.horizontalLabelCol,style:$,children:[_,i&&n.jsx("p",{className:Ie.horizontalLabelHint,children:i})]}),n.jsxs("div",{className:Ie.horizontalControlCol,children:[w,S]})]})}return n.jsxs("div",{className:ie(Ie.wrapper,y),children:[_,w,S]})}function zi({variant:e="outlined",size:o="md",error:i,success:s,disabled:l,readOnly:d,leadingIcon:h,trailingIcon:p,trailingAction:g,isTextarea:x,focused:y,className:w,children:k}){const R=o==="sm"?14:o==="lg"?18:16,S=s&&!i&&!p&&!g?n.jsx($n,{size:R}):null,_=i&&!p&&!g?n.jsx(ya,{size:R}):null,$=!!h,M=!!(p||g||S||_);return n.jsxs("div",{className:ie(Ie.shell,Ie[e],Ie[o],x&&Ie.textareaShell,w),"data-error":i||void 0,"data-success":s||void 0,"data-disabled":l||void 0,"data-readonly":d||void 0,"data-focused":y||void 0,"data-has-leading":$||void 0,"data-has-trailing":M||void 0,children:[h&&n.jsx("span",{className:ie(Ie.leadingSlot,"alloy-icon-slot"),children:h}),k,g?n.jsx("span",{className:Ie.trailingActionWrap,children:g}):p||S||_?n.jsx("span",{className:ie(Ie.trailingSlot,"alloy-icon-slot",S&&Ie.successTrailingSlot,_&&Ie.errorTrailingSlot),children:p??S??_}):null]})}const mh=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:p="md",type:g="text",leadingIcon:x,trailingIcon:y,layout:w,labelWidth:k,labelDescription:R,id:S,disabled:_,readOnly:$,className:M,...C},j)=>{const D=v.useId(),N=S??D;return n.jsx(Na,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:N,layout:w,labelWidth:k,labelDescription:R,className:M,children:n.jsx(zi,{variant:h,size:p,error:!!s,success:!!l,disabled:_,readOnly:$,leadingIcon:x,trailingIcon:y,children:n.jsx("input",{ref:j,id:N,type:g,disabled:_,readOnly:$,"aria-invalid":s?!0:void 0,"aria-describedby":i||s||l?`${N}-footer`:void 0,className:ie(Ie.control),...C})})})});mh.displayName="TextField";const ak=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:p="md",leadingIcon:g,trailingIcon:x,layout:y,labelWidth:w,labelDescription:k,id:R,disabled:S,readOnly:_,className:$,...M},C)=>{const j=v.useId(),D=R??j;return n.jsx(Na,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:D,layout:y,labelWidth:w,labelDescription:k,className:$,children:n.jsx(zi,{variant:h,size:p,error:!!s,success:!!l,disabled:S,readOnly:_,leadingIcon:g,trailingIcon:x,isTextarea:!0,children:n.jsx("textarea",{ref:C,id:D,disabled:S,readOnly:_,"aria-invalid":s?!0:void 0,className:ie(Ie.control,Ie.textareaControl),...M})})})});ak.displayName="TextArea";const ik={sm:"sm",md:"md",lg:"lg"},Dg=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:p="md",leadingIcon:g,layout:x,labelWidth:y,labelDescription:w,options:k,value:R,defaultValue:S="",onChange:_,placeholder:$="Select an option…",disabled:M,readOnly:C,id:j,className:D},N)=>{var O;const L=v.useId(),E=j??L,A=R!==void 0,[F,G]=v.useState(S),Y=A?R:F,W=v.useCallback(q=>{A||G(q),_==null||_(q)},[A,_]),[K,J]=v.useState(!1),ae=(O=k.find(q=>q.value===Y))==null?void 0:O.label,ce=p==="sm"?14:p==="lg"?18:16,se=ik[p],Q=n.jsx(zi,{variant:h,size:p,error:!!s,success:!!l,disabled:M,readOnly:C,focused:K,leadingIcon:g,trailingIcon:n.jsx("span",{className:ie(Ie.selectChevron,K&&Ie.selectChevronOpen),"aria-hidden":"true",children:n.jsx(Bn,{size:ce})}),children:n.jsx("span",{className:ie(Ie.control,Ie.selectValue,!ae&&Ie.selectPlaceholder),children:ae??$})});return n.jsx(Na,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:E,layout:x,labelWidth:y,labelDescription:w,className:D,children:n.jsx(fh,{ref:N,id:E,fullWidth:!0,trigger:Q,groups:[{id:"options",options:k.map(q=>({id:q.value,label:q.label,disabled:q.disabled,selected:q.value===Y,onClick:()=>W(q.value)}))}],size:se,width:"100%",placement:"bottom-start",open:K,onOpenChange:J,disabled:M||C})})});Dg.displayName="SelectField";const sk=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:p="md",leadingIcon:g,layout:x,labelWidth:y,labelDescription:w,id:k,disabled:R,readOnly:S,className:_,...$},M)=>{const C=v.useId(),j=k??C,[D,N]=v.useState(!1),L=p==="sm"?14:p==="lg"?18:16;return n.jsx(Na,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:j,layout:x,labelWidth:y,labelDescription:w,className:_,children:n.jsx(zi,{variant:h,size:p,error:!!s,success:!!l,disabled:R,readOnly:S,leadingIcon:g,trailingAction:n.jsx("button",{type:"button",className:`${Ie.trailingActionBtn} alloy-icon-slot`,onClick:()=>N(E=>!E),tabIndex:R?-1:0,"aria-label":D?"Hide password":"Show password","aria-pressed":D,children:D?n.jsx(sg,{size:L}):n.jsx(oh,{size:L})}),children:n.jsx("input",{ref:M,id:j,type:D?"text":"password",disabled:R,readOnly:S,"aria-invalid":s?!0:void 0,autoComplete:"current-password",className:ie(Ie.control),...$})})})});sk.displayName="PasswordField";const Og=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:p="md",onClear:g,onChange:x,layout:y,labelWidth:w,labelDescription:k,id:R,value:S,defaultValue:_,disabled:$,readOnly:M,className:C,...j},D)=>{const N=v.useId(),L=R??N,E=p==="sm"?14:p==="lg"?18:16,A=S!==void 0?String(S).length>0:void 0,F=v.useCallback(G=>{x==null||x(G)},[x]);return n.jsx(Na,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:L,layout:y,labelWidth:w,labelDescription:k,className:C,children:n.jsx(zi,{variant:h,size:p,error:!!s,success:!!l,disabled:$,readOnly:M,leadingIcon:n.jsx(rg,{size:E}),trailingAction:A?n.jsx("button",{type:"button",className:`${Ie.trailingActionBtn} alloy-icon-slot`,onClick:g,tabIndex:$?-1:0,"aria-label":"Clear search",children:n.jsx(Ei,{size:E})}):void 0,children:n.jsx("input",{ref:D,id:L,type:"search",value:S,defaultValue:_,disabled:$,readOnly:M,"aria-invalid":s?!0:void 0,onChange:F,className:ie(Ie.control),...j})})})});Og.displayName="SearchField";const Fg=v.forwardRef((e,o)=>n.jsx(mh,{ref:o,type:"email",autoComplete:"email",inputMode:"email",...e}));Fg.displayName="EmailField";const Bg=v.forwardRef((e,o)=>n.jsx(mh,{ref:o,type:"number",inputMode:"numeric",...e}));Bg.displayName="NumberField";const lk={sm:"sm",md:"sm",lg:"md"},ck={sm:"sm",md:"md",lg:"lg"},dk=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:h="outlined",size:p="md",layout:g,labelWidth:x,labelDescription:y,options:w,value:k,defaultValue:R=[],onChange:S,placeholder:_="Select options…",disabled:$,readOnly:M,id:C,className:j},D)=>{const N=v.useId(),L=C??N,E=`${L}-list`,A=v.useRef(null),F=k!==void 0,[G,Y]=v.useState(R),W=F?k:G,K=v.useCallback(z=>{F||Y(z),S==null||S(z)},[F,S]),[J,ae]=v.useState(!1);v.useEffect(()=>{if(!J)return;const z=U=>{A.current&&!A.current.contains(U.target)&&ae(!1)},te=U=>{U.key==="Escape"&&ae(!1)};return document.addEventListener("mousedown",z),document.addEventListener("keydown",te),()=>{document.removeEventListener("mousedown",z),document.removeEventListener("keydown",te)}},[J]);const ce=z=>{if($||M)return;const te=W.includes(z)?W.filter(U=>U!==z):[...W,z];K(te)},se=z=>{$||M||((z.key==="Enter"||z.key===" ")&&(z.preventDefault(),ae(te=>!te)),z.key==="Backspace"&&W.length>0&&!J&&K(W.slice(0,-1)))},Q=p==="sm"?14:p==="lg"?18:16,O=lk[p],q=ck[p],T=Object.fromEntries(w.map(z=>[z.value,z.label]));return n.jsx(Na,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:L,layout:g,labelWidth:x,labelDescription:y,className:j,children:n.jsxs("div",{ref:A,className:Ie.msContainer,children:[n.jsxs("div",{ref:D,id:L,role:"combobox","aria-haspopup":"listbox","aria-expanded":J,"aria-controls":E,"aria-disabled":$||void 0,tabIndex:$?-1:0,className:ie(Ie.msShell,Ie[h],Ie[p],J&&Ie.msOpen,$&&Ie.msDisabled),"data-error":s?!0:void 0,"data-success":l&&!s?!0:void 0,"data-disabled":$||void 0,onClick:()=>{!$&&!M&&ae(z=>!z)},onKeyDown:se,children:[n.jsx("div",{className:Ie.msBody,children:W.length===0?n.jsx("span",{className:Ie.msPlaceholder,children:_}):W.map(z=>n.jsx(Fn,{size:O,variant:"subtle",dismissible:!$&&!M,onDismiss:()=>K(W.filter(te=>te!==z)),children:T[z]??z},z))}),n.jsx("span",{className:ie(Ie.msChevron,"alloy-icon-slot",J&&Ie.msChevronOpen),children:n.jsx(Bn,{size:Q})})]}),J&&n.jsx("div",{id:E,role:"listbox","aria-multiselectable":"true","aria-label":typeof e=="string"?e:"Options",className:Ie.msPanel,children:w.map(z=>{const te=W.includes(z.value);return n.jsx(Sn,{label:z.label,size:q,trailingAction:"checkbox",checked:te,disabled:z.disabled,role:"option","aria-selected":te,onMouseDown:U=>{U.preventDefault()},onCheckedChange:()=>{z.disabled||ce(z.value)}},z.value)})})]})})});dk.displayName="MultiSelectField";const uk="_root_1249j_6",hk="_pageControls_1249j_14",pk="_pageBtn_1249j_21",fk="_ellipsis_1249j_36",mk="_rowsGroup_1249j_51",gk="_rowsSelect_1249j_58",vk="_countText_1249j_64",xk="_groupLabel_1249j_74",yk="_goToGroup_1249j_84",wk="_goToInput_1249j_91",Qn={root:uk,pageControls:hk,pageBtn:pk,ellipsis:fk,rowsGroup:mk,rowsSelect:gk,countText:vk,groupLabel:xk,goToGroup:yk,goToInput:wk};function bk(e,o,i){if(o<=1)return[1];const s=Math.max(2,e-i),l=Math.min(o-1,e+i),d=[1];s>2&&d.push("ellipsis");for(let h=s;h<=l;h++)d.push(h);return l<o-1&&d.push("ellipsis"),o>1&&d.push(o),d}const kk=v.forwardRef(({page:e,totalPages:o,onPageChange:i,showRowsPerPage:s=!1,rowsPerPage:l,rowsPerPageOptions:d=[10,25,50,100],onRowsPerPageChange:h,showGoToPage:p=!1,totalCount:g,siblingCount:x=1,size:y="sm",disabled:w=!1,className:k,...R},S)=>{const[_,$]=v.useState(""),M=y,C=y,j=y==="sm"?14:16,D=bk(e,o,x),N=v.useCallback(A=>{const F=Math.min(Math.max(1,A),o);F!==e&&i(F)},[e,o,i]),L=v.useCallback(A=>{if(A.key==="Enter"){const F=parseInt(_,10);isNaN(F)||N(F),$("")}},[_,N]),E=g!=null&&l!=null?`${(e-1)*l+1}–${Math.min(e*l,g)} of ${g}`:null;return n.jsxs("nav",{ref:S,"aria-label":"Pagination",className:ie(Qn.root,k),"data-size":y,...R,children:[s&&n.jsxs("div",{className:Qn.rowsGroup,children:[n.jsx("span",{className:Qn.groupLabel,children:"Rows per page"}),n.jsx("div",{className:Qn.rowsSelect,children:n.jsx(Dg,{size:C,value:l,disabled:w,"aria-label":"Rows per page",onChange:A=>h==null?void 0:h(Number(A.target.value)),children:d.map(A=>n.jsx("option",{value:A,children:A},A))})})]}),E&&n.jsx("span",{className:Qn.countText,"aria-live":"polite",children:E}),n.jsxs("div",{className:Qn.pageControls,role:"group","aria-label":"Page navigation",children:[n.jsx(Fe,{variant:"ghost",size:M,iconOnly:!0,"aria-label":"Previous page",disabled:w||e<=1,onClick:()=>N(e-1),children:n.jsx(ig,{size:j})}),D.map((A,F)=>A==="ellipsis"?n.jsx("span",{className:Qn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${F}`):n.jsx(Fe,{variant:A===e?"secondary":"ghost",size:M,"aria-label":`Page ${A}`,"aria-current":A===e?"page":void 0,disabled:w,onClick:()=>N(A),className:Qn.pageBtn,children:A},A)),n.jsx(Fe,{variant:"ghost",size:M,iconOnly:!0,"aria-label":"Next page",disabled:w||e>=o,onClick:()=>N(e+1),children:n.jsx(Rn,{size:j})})]}),p&&n.jsxs("div",{className:Qn.goToGroup,children:[n.jsx("span",{className:Qn.groupLabel,children:"Go to"}),n.jsx("div",{className:Qn.goToInput,children:n.jsx(Bg,{size:C,value:_,placeholder:String(e),min:1,max:o,disabled:w,"aria-label":"Go to page number",onChange:A=>$(A.target.value),onKeyDown:L})})]})]})});kk.displayName="Pagination";const _k="_root_1vx33_6",Ck="_fullWidth_1vx33_18",jk="_item_1vx33_23",Sk="_indicator_1vx33_28",$k="_sm_1vx33_46",Mk="_md_1vx33_54",Rk="_lg_1vx33_62",Nk="_itemSelected_1vx33_109",Lk="_itemIcon_1vx33_115",Ak="_itemLabel_1vx33_127",Jr={root:_k,fullWidth:Ck,item:jk,indicator:Sk,sm:$k,md:Mk,lg:Rk,itemSelected:Nk,itemIcon:Lk,itemLabel:Ak},Hg=v.createContext(null);function Tk(e){const o=v.useContext(Hg);if(!o)throw new Error(`<${e}> must be rendered inside <SegmentedControl>`);return o}const Wg=v.forwardRef(({value:e,leadingIcon:o,className:i,children:s,disabled:l,onClick:d,...h},p)=>{const{value:g,onChange:x,disabled:y,name:w}=Tk("SegmentedControl.Item"),k=g===e,R=y||!!l;return n.jsxs("button",{ref:p,type:"button",role:"radio","aria-checked":k,name:w,disabled:R,className:ie(Jr.item,k&&Jr.itemSelected,i),onClick:S=>{R||x(e),d==null||d(S)},...h,children:[o&&n.jsx("span",{className:ie(Jr.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:o}),s!==void 0&&n.jsx("span",{className:Jr.itemLabel,children:s})]})});Wg.displayName="SegmentedControl.Item";const Ug=v.forwardRef(({value:e,defaultValue:o="",onChange:i,size:s="md",disabled:l=!1,fullWidth:d=!1,className:h,children:p,...g},x)=>{const[y,w]=v.useState(o),k=e!==void 0,R=k?e:y,S=v.useId(),_=v.useRef(null);v.useLayoutEffect(()=>{const M=_.current;if(!M)return;const C=M.querySelector('[aria-checked="true"]');C&&(M.style.setProperty("--sc-indicator-x",`${C.offsetLeft}px`),M.style.setProperty("--sc-indicator-w",`${C.offsetWidth}px`))},[R,s]);const $=M=>{k||w(M),i==null||i(M)};return n.jsx(Hg.Provider,{value:{value:R,onChange:$,disabled:l,name:S},children:n.jsxs("div",{ref:M=>{_.current=M,typeof x=="function"?x(M):x&&(x.current=M)},role:"radiogroup",className:ie(Jr.root,Jr[s],d&&Jr.fullWidth,h),...g,children:[n.jsx("span",{className:Jr.indicator,"aria-hidden":"true"}),p]})})});Ug.displayName="SegmentedControl";Object.assign(Ug,{Item:Wg});const Ek="_root_fkv0x_6",Ik="_sm_fkv0x_26",Pk="_md_fkv0x_33",zk="_lg_fkv0x_40",Dk="_dot_fkv0x_49",Ok="_success_fkv0x_58",Fk="_warning_fkv0x_65",Bk="_error_fkv0x_72",Hk="_info_fkv0x_79",Wk="_neutral_fkv0x_86",Uk="_pending_fkv0x_93",ol={root:Ek,sm:Ik,md:Pk,lg:zk,dot:Dk,success:Ok,warning:Fk,error:Bk,info:Hk,neutral:Wk,pending:Uk},Mi=v.forwardRef(({status:e="neutral",size:o="md",dot:i=!0,className:s,children:l,...d},h)=>n.jsxs("span",{ref:h,className:ie(ol.root,ol[o],ol[e],s),...d,children:[i&&n.jsx("span",{className:ol.dot,"aria-hidden":"true"}),l]}));Mi.displayName="StatusTag";const qk="_root_1m8t5_6",Vk="_underline_1m8t5_15",Gk="_background_1m8t5_21",Yk="_underlineIndicator_1m8t5_26",Kk="_md_1m8t5_43",Qk="_lg_1m8t5_44",Zk="_tab_1m8t5_42",Xk="_tabSelected_1m8t5_77",Jk="_tabIcon_1m8t5_99",e_="_tabLabel_1m8t5_111",t_="_tabBadge_1m8t5_116",n_="_tabLabelEditable_1m8t5_123",r_="_tabLabelInput_1m8t5_128",o_="_addTab_1m8t5_147",a_="_addTabIcon_1m8t5_160",hn={root:qk,underline:Vk,background:Gk,underlineIndicator:Yk,md:Kk,lg:Qk,tab:Zk,tabSelected:Xk,tabIcon:Jk,tabLabel:e_,tabBadge:t_,tabLabelEditable:n_,tabLabelInput:r_,addTab:o_,addTabIcon:a_},qg=v.createContext(null);function Vg(e){const o=v.useContext(qg);if(!o)throw new Error(`<${e}> must be rendered inside <Tabs>`);return o}const Gg=v.forwardRef(({value:e,leadingIcon:o,trailingBadge:i,disabled:s,editable:l=!1,autoEdit:d=!1,onLabelChange:h,onClick:p,className:g,children:x,...y},w)=>{const{value:k,onChange:R,disabled:S,name:_}=Vg("Tabs.Tab"),$=k===e,M=S||!!s,C=typeof x=="string"?x:"",[j,D]=v.useState(d&&l),[N,L]=v.useState(C),E=v.useRef(null);v.useEffect(()=>{if(j){const W=E.current;W&&(W.focus(),W.select())}},[j]),v.useEffect(()=>{d&&l&&!j&&(L(typeof x=="string"?x:""),D(!0))},[d,l]);const A=()=>{const W=N.trim();W&&W!==C&&(h==null||h(W)),D(!1)},F=()=>{L(C),D(!1)},G=W=>{!l||M||(W.stopPropagation(),L(C),D(!0))},Y=W=>{W.key==="Enter"?(W.preventDefault(),A()):W.key==="Escape"&&(W.preventDefault(),F())};return n.jsxs("button",{ref:w,type:"button",role:"tab","aria-selected":$,name:_,disabled:M,className:ie(hn.tab,$&&hn.tabSelected,g),onClick:W=>{j||(M||R(e),p==null||p(W))},...y,children:[o&&n.jsx("span",{className:ie(hn.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:o}),j?n.jsx("input",{ref:E,type:"text",value:N,onChange:W=>L(W.target.value),onKeyDown:Y,onBlur:A,onClick:W=>W.stopPropagation(),className:hn.tabLabelInput,"aria-label":"Tab name",size:Math.max(N.length,1)}):x!==void 0&&n.jsx("span",{className:ie(hn.tabLabel,l&&hn.tabLabelEditable),onDoubleClick:G,children:x}),i&&!j&&n.jsx("span",{className:hn.tabBadge,children:i})]})});Gg.displayName="Tabs.Tab";const i_=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:n.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Yg=v.forwardRef(({className:e,onClick:o,"aria-label":i="Add tab",...s},l)=>{const{disabled:d}=Vg("Tabs.AddTab");return n.jsx("button",{ref:l,type:"button","aria-label":i,disabled:d,className:ie(hn.tab,hn.addTab,e),onClick:o,...s,children:n.jsx("span",{className:ie(hn.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:n.jsx(i_,{})})})});Yg.displayName="Tabs.AddTab";const Kg=v.forwardRef(({variant:e="underline",size:o="md",value:i,defaultValue:s="",onChange:l,disabled:d=!1,className:h,children:p,...g},x)=>{const[y,w]=v.useState(s),k=i!==void 0,R=k?i:y,S=v.useId(),_=v.useRef(null);v.useLayoutEffect(()=>{const M=_.current;if(!M||e!=="underline")return;const C=M.querySelector('[aria-selected="true"]');C&&(M.style.setProperty("--tab-indicator-x",`${C.offsetLeft}px`),M.style.setProperty("--tab-indicator-w",`${C.offsetWidth}px`))},[R,e]);const $=M=>{k||w(M),l==null||l(M)};return n.jsx(qg.Provider,{value:{value:R,onChange:$,disabled:d,variant:e,size:o,name:S},children:n.jsxs("div",{ref:M=>{_.current=M,typeof x=="function"?x(M):x&&(x.current=M)},role:"tablist",className:ie(hn.root,hn[e],hn[o],h),...g,children:[e==="underline"&&n.jsx("span",{className:hn.underlineIndicator,"aria-hidden":"true"}),p]})})});Kg.displayName="Tabs";Object.assign(Kg,{Tab:Gg,AddTab:Yg});const s_="_selectedBorder_1ypeg_7",l_="_selectedFill_1ypeg_12",zf={selectedBorder:s_,selectedFill:l_},c_=v.forwardRef(({selected:e=!1,defaultVariant:o="secondary",selectionStyle:i="border",onSelectedChange:s,onClick:l,className:d,...h},p)=>{const g=y=>{s==null||s(!e),l==null||l(y)},x=e?i==="fill"?zf.selectedFill:zf.selectedBorder:void 0;return n.jsx(Fe,{ref:p,variant:o,"aria-pressed":e,className:ie(x,d),onClick:g,...h})});c_.displayName="ToggleButton";const d_="_root_mcb75_6",u_="_disabled_mcb75_13",h_="_sm_mcb75_20",p_="_md_mcb75_31",f_="_lg_mcb75_42",m_="_track_mcb75_54",g_="_trackChecked_mcb75_90",v_="_thumb_mcb75_100",x_="_labelWrap_mcb75_117",y_="_label_mcb75_117",w_="_description_mcb75_139",br={root:d_,disabled:u_,sm:h_,md:p_,lg:f_,track:m_,trackChecked:g_,thumb:v_,labelWrap:x_,label:y_,description:w_},b_=v.forwardRef(({checked:e,defaultChecked:o=!1,onChange:i,disabled:s,size:l="md",label:d,description:h,id:p,name:g,value:x,className:y},w)=>{const k=v.useId(),R=p??k,S=`${R}-label`,_=e!==void 0,[$,M]=v.useState(o),C=_?e:$,j=()=>{if(s)return;const N=!C;_||M(N),i==null||i(N)},D=N=>{(N.key===" "||N.key==="Enter")&&(N.preventDefault(),j())};return n.jsxs("div",{className:ie(br.root,br[l],s&&br.disabled,y),children:[n.jsx("button",{ref:w,type:"button",role:"switch",id:R,"aria-checked":C,"aria-labelledby":d?S:void 0,"aria-disabled":s||void 0,tabIndex:s?-1:0,disabled:s,name:g,value:x,className:ie(br.track,C&&br.trackChecked),"data-checked":C||void 0,"data-disabled":s||void 0,onClick:j,onKeyDown:D,children:n.jsx("span",{className:br.thumb})}),(d||h)&&n.jsxs("div",{className:br.labelWrap,children:[d&&n.jsx("label",{id:S,htmlFor:R,className:br.label,children:d}),h&&n.jsx("span",{className:br.description,children:h})]})]})});b_.displayName="Switch";const k_="_root_104n4_5",__="_disabled_104n4_11",C_="_sm_104n4_17",j_="_md_104n4_25",S_="_lg_104n4_33",$_="_controlWrap_104n4_41",M_="_input_104n4_50",R_="_ring_104n4_65",N_="_ringChecked_104n4_90",L_="_ringError_104n4_94",A_="_dot_104n4_104",T_="_labelWrap_104n4_112",E_="_label_104n4_112",I_="_error_104n4_130",P_="_required_104n4_132",z_="_description_104n4_137",cn={root:k_,disabled:__,sm:C_,md:j_,lg:S_,controlWrap:$_,input:M_,ring:R_,ringChecked:N_,ringError:L_,dot:A_,labelWrap:T_,label:E_,error:I_,required:P_,description:z_},D_=v.forwardRef(({value:e,checked:o,onChange:i,disabled:s,error:l,size:d="md",label:h,description:p,id:g,name:x,required:y,className:w},k)=>{const R=v.useId(),S=g??R;return n.jsxs("div",{className:ie(cn.root,cn[d],s&&cn.disabled,l&&cn.error,w),children:[n.jsxs("div",{className:cn.controlWrap,children:[n.jsx("input",{ref:k,type:"radio",id:S,name:x,value:e,checked:o,disabled:s,required:y,"aria-invalid":l||void 0,onChange:()=>i==null?void 0:i(e),className:cn.input}),n.jsx("span",{className:ie(cn.ring,o&&cn.ringChecked,l&&cn.ringError),"aria-hidden":"true",children:o&&n.jsx("span",{className:cn.dot})})]}),(h||p)&&n.jsxs("div",{className:cn.labelWrap,children:[h&&n.jsxs("label",{htmlFor:S,className:cn.label,children:[h,y&&n.jsx("span",{className:cn.required,"aria-hidden":"true",children:" *"})]}),p&&n.jsx("span",{className:cn.description,children:p})]})]})});D_.displayName="Radio";const O_="_table_1ad04_8",F_="_sm_1ad04_16",B_="_row_1ad04_30",H_="_head_1ad04_47",W_="_headLabel_1ad04_82",U_="_sortBtn_1ad04_96",q_="_sortIcon_1ad04_119",V_="_cell_1ad04_142",G_="_cellText_1ad04_175",Y_="_cellStack_1ad04_203",K_="_cellStackPrimary_1ad04_210",Q_="_cellStackSecondary_1ad04_221",Z_="_cellActions_1ad04_233",X_="_cellControl_1ad04_240",J_="_addCell_1ad04_251",eC="_addRowCell_1ad04_264",tC="_addRowLabel_1ad04_276",zt={table:O_,sm:F_,row:B_,head:H_,headLabel:W_,sortBtn:U_,sortIcon:q_,cell:V_,cellText:G_,cellStack:Y_,cellStackPrimary:K_,cellStackSecondary:Q_,cellActions:Z_,cellControl:X_,addCell:J_,addRowCell:eC,addRowLabel:tC},Qg=v.createContext({addColumn:!1,addRow:!1}),Zg=()=>v.useContext(Qg),nC=v.forwardRef(({size:e="md",interaction:o="row",addColumn:i=!1,addRow:s=!1,onAddColumn:l,onAddRow:d,className:h,children:p,...g},x)=>{const y=v.useMemo(()=>({addColumn:i,addRow:s,onAddColumn:l,onAddRow:d}),[i,s,l,d]);return n.jsx(Qg.Provider,{value:y,children:n.jsx("table",{ref:x,className:ie(zt.table,e==="sm"&&zt.sm,h),"data-interaction":o,...g,children:p})})});nC.displayName="Table";const Xg=v.forwardRef(({align:e="left",sort:o,onSort:i,hoverable:s,selected:l,className:d,children:h,...p},g)=>{const x=o!==void 0;return n.jsx("th",{ref:g,className:ie(zt.head,d),"data-align":e!=="left"?e:void 0,"data-hoverable":!x&&s?!0:void 0,"data-selected":l||void 0,"aria-selected":l,scope:"col","aria-sort":o==="asc"?"ascending":o==="desc"?"descending":x?"none":void 0,...p,children:x?n.jsxs("button",{type:"button",className:zt.sortBtn,onClick:i,"aria-label":typeof h=="string"?`Sort by ${h}`:void 0,children:[h,n.jsx("span",{className:zt.sortIcon,"data-sort":o!=="none"?o:void 0,"aria-hidden":"true",children:n.jsx(Bn,{size:12,strokeWidth:2})})]}):n.jsx("span",{className:zt.headLabel,children:h})})});Xg.displayName="TableHead";const rC=v.forwardRef(({children:e,...o},i)=>{const{addColumn:s,onAddColumn:l}=Zg(),d=s?v.Children.map(e,(h,p)=>{if(!v.isValidElement(h)||p!==0)return h;const g=v.Children.toArray(h.props.children);return v.cloneElement(h,{},[...g,n.jsx(Xg,{hoverable:!0,onClick:l,className:zt.addCell,"aria-label":"Add column",children:n.jsx($a,{size:14,strokeWidth:2})},"__add_col_head")])}):e;return n.jsx("thead",{ref:i,...o,children:d})});rC.displayName="TableHeader";const Jg=v.forwardRef(({hoverable:e=!0,selected:o,className:i,children:s,...l},d)=>n.jsx("tr",{ref:d,className:ie(zt.row,i),"data-hoverable":e||void 0,"data-selected":o||void 0,"aria-selected":o,...l,children:s}));Jg.displayName="TableRow";const Tu=v.forwardRef(({align:e="left",compact:o,hoverable:i=!0,selected:s,className:l,children:d,...h},p)=>n.jsx("td",{ref:p,className:ie(zt.cell,l),"data-align":e!=="left"?e:void 0,"data-compact":o||void 0,"data-hoverable":i||void 0,"data-selected":s||void 0,"aria-selected":s,...h,children:d}));Tu.displayName="TableCell";const oC=v.forwardRef(({children:e,...o},i)=>{const{addColumn:s,addRow:l,onAddRow:d}=Zg(),h=s?v.Children.map(e,p=>{if(!v.isValidElement(p))return p;const g=v.Children.toArray(p.props.children);return v.cloneElement(p,{},[...g,n.jsx(Tu,{"aria-hidden":"true",className:zt.addCell},"__add_col_pad")])}):e;return n.jsxs("tbody",{ref:i,...o,children:[h,l&&n.jsx(Jg,{hoverable:!1,children:n.jsx(Tu,{colSpan:999,onClick:d,className:zt.addRowCell,"aria-label":"Add row",children:n.jsxs("span",{className:zt.addRowLabel,children:[n.jsx($a,{size:14,strokeWidth:2}),"Add row"]})})})]})});oC.displayName="TableBody";const aC=v.forwardRef(({variant:e="primary",size:o="md",wrap:i,className:s,children:l,...d},h)=>n.jsx("span",{ref:h,className:ie(zt.cellText,s),"data-variant":e!=="primary"?e:void 0,"data-size":o!=="md"?o:void 0,"data-wrap":i||void 0,...d,children:l}));aC.displayName="CellText";const iC=v.forwardRef(({primary:e,secondary:o,className:i,...s},l)=>n.jsxs("div",{ref:l,className:ie(zt.cellStack,i),...s,children:[n.jsx("span",{className:zt.cellStackPrimary,children:e}),o&&n.jsx("span",{className:zt.cellStackSecondary,children:o})]}));iC.displayName="CellStack";const sC=v.forwardRef(({size:e="sm",...o},i)=>n.jsx(Fn,{ref:i,size:e,...o}));sC.displayName="CellTag";const lC=v.forwardRef(({size:e="sm",...o},i)=>n.jsx(Mi,{ref:i,size:e,...o}));lC.displayName="CellStatusTag";const cC=v.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(zt.cellActions,e),...i,children:o}));cC.displayName="CellActions";const dC=v.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(zt.cellControl,e),...i,children:o}));dC.displayName="CellControl";const uC="_root_1afcs_8",hC="_secondary_1afcs_23",pC="_header_1afcs_28",fC="_headerText_1afcs_36",mC="_title_1afcs_43",gC="_subtitle_1afcs_52",vC="_action_1afcs_61",xC="_hero_1afcs_66",yC="_heroValue_1afcs_74",wC="_heroCaption_1afcs_83",bC="_heroChange_1afcs_89",kC="_body_1afcs_95",_C="_legend_1afcs_103",kn={root:uC,secondary:hC,header:pC,headerText:fC,title:mC,subtitle:gC,action:vC,hero:xC,heroValue:yC,heroCaption:wC,heroChange:bC,body:kC,legend:_C},CC=v.forwardRef(({title:e,subtitle:o,action:i,value:s,valueChange:l,valueCaption:d,legend:h,secondary:p,children:g,className:x,...y},w)=>n.jsxs("div",{ref:w,className:ie(kn.root,p&&kn.secondary,x),...y,children:[n.jsxs("div",{className:kn.header,children:[n.jsxs("div",{className:kn.headerText,children:[n.jsx("h3",{className:kn.title,children:e}),o&&n.jsx("p",{className:kn.subtitle,children:o})]}),i&&n.jsx("div",{className:kn.action,children:i})]}),(s!==void 0||l||d)&&n.jsxs("div",{className:kn.hero,children:[s!==void 0&&n.jsx("span",{className:kn.heroValue,children:s}),l&&n.jsx("span",{className:kn.heroChange,children:l}),d&&n.jsx("span",{className:kn.heroCaption,children:d})]}),n.jsx("div",{className:kn.body,children:g}),h&&n.jsx("div",{className:kn.legend,children:h})]}));CC.displayName="ChartCard";const jC="_root_je8nq_7",SC="_item_je8nq_17",$C="_swatch_je8nq_23",MC="_label_je8nq_29",RC="_bookend_je8nq_33",la={root:jC,item:SC,swatch:$C,label:MC,bookend:RC},e2=v.forwardRef(({items:e,before:o,after:i,variant:s="square",swatchSize:l=12,className:d,...h},p)=>n.jsxs("div",{ref:p,className:ie(la.root,d),...h,children:[o&&n.jsx("span",{className:la.bookend,children:o}),e.map((g,x)=>{const y=s==="line"?{width:l+4,height:2,background:g.color,borderRadius:1}:s==="dot"?{width:l-2,height:l-2,background:g.color,borderRadius:"50%"}:{width:l,height:l,background:g.color};return n.jsxs("span",{className:la.item,children:[n.jsx("span",{className:la.swatch,style:y,"aria-hidden":"true"}),g.label!==void 0&&n.jsx("span",{className:la.label,children:g.label})]},x)}),i&&n.jsx("span",{className:la.bookend,children:i})]}));e2.displayName="ChartLegend";const NC="_root_igkx4_5",LC="_svgWrap_igkx4_13",AC="_svg_igkx4_13",TC="_gridLine_igkx4_23",EC="_axisLabel_igkx4_28",IC="_legendWrap_igkx4_43",PC="_legendItem_igkx4_51",zC="_legendDot_igkx4_57",DC="_legendLabel_igkx4_64",OC="_tooltip_igkx4_71",FC="_tooltipLabel_igkx4_85",BC="_tooltipRow_igkx4_95",HC="_tooltipDot_igkx4_101",WC="_tooltipSeries_igkx4_108",UC="_tooltipValue_igkx4_115",Ue={root:NC,svgWrap:LC,svg:AC,gridLine:TC,axisLabel:EC,legendWrap:IC,legendItem:PC,legendDot:zC,legendLabel:DC,tooltip:OC,tooltipLabel:FC,tooltipRow:BC,tooltipDot:HC,tooltipSeries:WC,tooltipValue:UC},qC=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function nu(e){if(e===0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e))),i=e/o;return i<=1?o:i<=2?2*o:i<=5?5*o:10*o}function ca(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}const VC=v.forwardRef(({series:e,labels:o,variant:i="grouped",height:s=260,showGrid:l=!0,showLegend:d=!0,yUnit:h="",barRadius:p=2,colors:g,gradientFrom:x="#8c4fe2",gradientTo:y="#446cff",formatTooltipValue:w,stackStyle:k="gradient-each",capColor:R,className:S,..._},$)=>{var B,P,oe,fe;const M=g&&g.length>0?g:qC,C=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[j,D]=v.useState({visible:!1,x:0,y:0,label:"",items:[]}),N=v.useRef(null),[L,E]=v.useState(540);v.useEffect(()=>{const de=N.current;if(!de)return;const xe=new ResizeObserver(Ce=>{var Pe;const Me=(Pe=Ce[0])==null?void 0:Pe.contentRect.width;Me>0&&E(Math.floor(Me))});xe.observe(de);const we=Math.floor(de.getBoundingClientRect().width);return we>0&&E(we),()=>xe.disconnect()},[]);const A=44,F=0,G=20,Y=20,W=L,K=s,J=W-A-F,ae=K-G-Y,ce=5,se=e.map((de,xe)=>de.color??M[xe%M.length]);let Q=0;i==="stacked"?o.forEach((de,xe)=>{const we=e.reduce((Ce,Me)=>Ce+(Me.data[xe]??0),0);we>Q&&(Q=we)}):i==="horizontal"?Q=Math.max(...((B=e[0])==null?void 0:B.data)??[0]):e.forEach(de=>de.data.forEach(xe=>{xe>Q&&(Q=xe)}));const O=nu(Q),q=Array.from({length:ce+1},(de,xe)=>O*(xe/ce)).reverse(),T=de=>Y+ae-de/O*ae,z=J/o.length,te=3,U=i==="grouped"?Math.max(4,(z-te*(e.length+1))/e.length):z,X=()=>D(de=>({...de,visible:!1})),le=v.useCallback(de=>{const xe=de.currentTarget.getBoundingClientRect(),we=de.clientX-xe.left,Ce=Math.floor((we-A)/z);if(Ce<0||Ce>=o.length){X();return}const Me=e.map((Pe,qe)=>({color:se[qe],series:Pe.label,value:Pe.data[Ce]??0}));D({visible:!0,x:de.clientX+12,y:de.clientY-8,label:o[Ce],items:Me})},[e,o,z,se,A]);if(i==="gradient"){const de=((P=e[0])==null?void 0:P.data)??[],xe=((oe=e[0])==null?void 0:oe.label)??"",we=44,Ce=0,Me=20,Pe=20,qe=Math.max(W-we-Ce,1),We=K-Me-Pe,Ae=Math.max(0,...de),Qe=Ae>0?nu(Ae):10,Ze=5,yt=Array.from({length:Ze+1},(ze,lt)=>Qe*lt/Ze),De=ze=>Me+We-ze/Qe*We,ve=qe/Math.max(1,de.length),Le=ze=>we+ve*ze,it=ze=>we+ve*(ze+1),Be=ze=>we+ve*(ze+.5),tt=de.length===0?"":de.map((ze,lt)=>{const vt=De(ze);return`M ${Le(lt)} ${vt} L ${it(lt)} ${vt}`}).join(" "),Dt=[];de.forEach((ze,lt)=>{if(ze<=0)return;const vt=De(ze);Dt.push({x:Le(lt),y:vt,width:Math.max(it(lt)-Le(lt),0),height:Me+We-vt})});const tn=Math.max(1,Math.ceil(45/ve)),Ta=o.length-1,Io=w??(ze=>`${ca(ze)}${h}`);return n.jsxs("div",{ref:$,className:ie(Ue.root,S),..._,children:[n.jsx("div",{ref:N,className:Ue.svgWrap,children:n.jsxs("svg",{width:W,height:K,viewBox:`0 0 ${W} ${K}`,className:Ue.svg,onMouseLeave:X,onMouseMove:ze=>{const lt=ze.currentTarget.getBoundingClientRect(),vt=ze.clientX-lt.left,Ot=Math.floor((vt-we)/ve);if(Ot<0||Ot>=de.length){X();return}D({visible:!0,x:ze.clientX+12,y:ze.clientY-8,label:o[Ot]??"",items:[{color:y,series:xe,value:de[Ot]??0}]})},children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:`${C}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:x}),n.jsx("stop",{offset:"100%",stopColor:y})]}),n.jsxs("linearGradient",{id:`${C}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:x,stopOpacity:"0.3"}),n.jsx("stop",{offset:"100%",stopColor:y,stopOpacity:"0"})]})]}),yt.map((ze,lt)=>n.jsxs("g",{children:[l&&n.jsx("line",{x1:0,x2:W-Ce,y1:De(ze),y2:De(ze),className:Ue.gridLine}),n.jsxs("text",{x:0,y:De(ze)-6,className:Ue.axisLabel,textAnchor:"start",children:[ca(ze),h]})]},`t-${lt}`)),Dt.map((ze,lt)=>n.jsx("rect",{x:ze.x,y:ze.y,width:ze.width,height:ze.height,fill:`url(#${C}-fill)`},`b-${lt}`)),tt&&n.jsx("path",{d:tt,fill:"none",stroke:`url(#${C}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),j.visible&&(()=>{var nr;const ze=(nr=N.current)==null?void 0:nr.getBoundingClientRect();if(!ze)return null;const lt=j.x-12-ze.left,vt=Math.floor((lt-we)/ve);if(vt<0||vt>=de.length)return null;const Ot=de[vt]??0;return Ot<=0?null:n.jsx("circle",{cx:Be(vt),cy:De(Ot),r:4,fill:y,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),o.map((ze,lt)=>{const vt=lt===0,Ot=lt===Ta;if(!(vt||Ot)&&lt%tn!==0)return null;const io=vt?we:Ot?W-Ce:Be(lt),fn=vt?"start":Ot?"end":"middle";return n.jsx("text",{x:io,y:K-Pe+18,className:Ue.axisLabel,textAnchor:fn,children:ze},`xl-${lt}`)})]})}),j.visible&&j.items.length>0&&n.jsxs("div",{className:Ue.tooltip,style:{left:j.x,top:j.y},children:[n.jsx("div",{className:Ue.tooltipLabel,children:j.label}),j.items.map(ze=>n.jsxs("div",{className:Ue.tooltipRow,children:[n.jsx("span",{className:Ue.tooltipDot,style:{background:ze.color}}),n.jsx("span",{className:Ue.tooltipSeries,children:ze.series}),n.jsx("span",{className:Ue.tooltipValue,children:Io(ze.value)})]},ze.series))]})]})}if(i==="horizontal"){const de=((fe=e[0])==null?void 0:fe.data)??[],xe=nu(Math.max(...de,1)),we=28,Ce=10,Me=120,qe=W-Me-44,We=o.length*(we+Ce)+Ce;return n.jsxs("div",{ref:$,className:ie(Ue.root,S),..._,children:[n.jsx("div",{ref:N,className:Ue.svgWrap,children:n.jsx("svg",{width:W,height:We,viewBox:`0 0 ${W} ${We}`,className:Ue.svg,onMouseLeave:X,onMouseMove:Ae=>{var De;const Qe=Ae.currentTarget.getBoundingClientRect(),Ze=Ae.clientY-Qe.top,yt=Math.floor(Ze/(we+Ce));if(yt<0||yt>=o.length){X();return}D({visible:!0,x:Ae.clientX+12,y:Ae.clientY-8,label:o[yt],items:[{color:se[0],series:((De=e[0])==null?void 0:De.label)??"",value:de[yt]??0}]})},children:o.map((Ae,Qe)=>{const Ze=Ce+Qe*(we+Ce),yt=de[Qe]??0,De=yt/xe*qe;return n.jsxs("g",{children:[n.jsx("text",{x:Me-8,y:Ze+we/2+4,className:Ue.axisLabel,textAnchor:"end",children:Ae}),n.jsx("rect",{x:Me,y:Ze,width:De,height:we,rx:p,fill:se[0]}),n.jsxs("text",{x:Me+De+6,y:Ze+we/2+4,className:Ue.axisLabel,textAnchor:"start",children:[ca(yt),h]})]},Qe)})})}),j.visible&&n.jsxs("div",{className:Ue.tooltip,style:{left:j.x,top:j.y},children:[n.jsx("div",{className:Ue.tooltipLabel,children:j.label}),j.items.map(Ae=>n.jsxs("div",{className:Ue.tooltipRow,children:[n.jsx("span",{className:Ue.tooltipDot,style:{background:Ae.color}}),n.jsx("span",{className:Ue.tooltipSeries,children:Ae.series}),n.jsxs("span",{className:Ue.tooltipValue,children:[ca(Ae.value),h]})]},Ae.series))]})]})}return n.jsxs("div",{ref:$,className:ie(Ue.root,S),..._,children:[n.jsx("div",{ref:N,className:Ue.svgWrap,children:n.jsxs("svg",{width:W,height:K,viewBox:`0 0 ${W} ${K}`,className:Ue.svg,onMouseMove:le,onMouseLeave:X,children:[n.jsx("defs",{children:se.flatMap((de,xe)=>[n.jsxs("linearGradient",{id:`${C}-fill-${xe}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:de,stopOpacity:"0.3"}),n.jsx("stop",{offset:"100%",stopColor:de,stopOpacity:"0"})]},`soft-${xe}`),n.jsxs("linearGradient",{id:`${C}-fill-strong-${xe}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:de,stopOpacity:"1"}),n.jsx("stop",{offset:"100%",stopColor:de,stopOpacity:"0"})]},`strong-${xe}`)])}),q.map(de=>{const xe=T(de);return n.jsxs("g",{children:[l&&n.jsx("line",{x1:0,y1:xe,x2:W-F,y2:xe,className:Ue.gridLine}),n.jsxs("text",{x:0,y:xe-6,className:Ue.axisLabel,textAnchor:"start",children:[ca(de),h]})]},de)}),o.map((de,xe)=>{const we=A+xe*z;if(i==="stacked"){let Pe=0;const qe=e.map((De,ve)=>{const Le=De.data[xe]??0,it=Le/O*ae,Be=T(Pe+Le);return Pe+=Le,{si:ve,value:Le,barH:it,y:Be}}),We=we+(z-U)/2,Ae=qe.filter(De=>De.value>0),Qe=Ae.length>0?Ae[0].si:-1,Ze=Ae.length>0?Ae[Ae.length-1]:null,yt=R??(Ze?se[Ze.si]:"transparent");return n.jsxs("g",{children:[qe.map(({si:De,value:ve,barH:Le,y:it})=>{if(ve<=0)return null;if(k==="mono-scale"){const Be=De===Qe;return n.jsx("rect",{x:We,y:it,width:U,height:Le,fill:Be?`url(#${C}-fill-strong-${De})`:se[De]},`fill-${De}`)}return n.jsx("rect",{x:We,y:it,width:U,height:Le,fill:`url(#${C}-fill-${De})`},`fill-${De}`)}),k==="mono-scale"?Ze&&n.jsx("line",{x1:We,x2:We+U,y1:Ze.y,y2:Ze.y,stroke:yt,strokeWidth:2,strokeLinecap:"butt"}):qe.map(({si:De,value:ve,y:Le})=>ve>0?n.jsx("line",{x1:We,x2:We+U,y1:Le,y2:Le,stroke:se[De],strokeWidth:2,strokeLinecap:"butt"},`cap-${De}`):null)]},xe)}const Ce=e.length*U+(e.length-1)*te,Me=we+(z-Ce)/2;return n.jsx("g",{children:e.map((Pe,qe)=>{const We=Pe.data[xe]??0;if(We<=0)return null;const Ae=We/O*ae,Qe=Me+qe*(U+te),Ze=T(We);return n.jsxs("g",{children:[n.jsx("rect",{x:Qe,y:Ze,width:U,height:Ae,fill:`url(#${C}-fill-${qe})`}),n.jsx("line",{x1:Qe,x2:Qe+U,y1:Ze,y2:Ze,stroke:se[qe],strokeWidth:2,strokeLinecap:"butt"})]},qe)})},xe)}),(()=>{const xe=Math.max(1,Math.ceil(45/z)),we=o.length-1;return o.map((Ce,Me)=>{const Pe=Me===0,qe=Me===we;if(!(Pe||qe)&&Me%xe!==0)return null;const Ae=Pe?A:qe?W-F:A+z*(Me+.5),Qe=Pe?"start":qe?"end":"middle";return n.jsx("text",{x:Ae,y:K-G+18,className:Ue.axisLabel,textAnchor:Qe,children:Ce},`xl-${Me}`)})})()]})}),d&&e.length>1&&n.jsx("div",{className:Ue.legendWrap,children:e.map((de,xe)=>n.jsxs("div",{className:Ue.legendItem,children:[n.jsx("span",{className:Ue.legendDot,style:{background:se[xe]}}),n.jsx("span",{className:Ue.legendLabel,children:de.label})]},de.label))}),j.visible&&n.jsxs("div",{className:Ue.tooltip,style:{left:j.x,top:j.y},children:[n.jsx("div",{className:Ue.tooltipLabel,children:j.label}),j.items.map(de=>n.jsxs("div",{className:Ue.tooltipRow,children:[n.jsx("span",{className:Ue.tooltipDot,style:{background:de.color}}),n.jsx("span",{className:Ue.tooltipSeries,children:de.series}),n.jsxs("span",{className:Ue.tooltipValue,children:[ca(de.value),h]})]},de.series))]})]})});VC.displayName="BarChart";const GC="_root_1crij_5",YC="_svgWrap_1crij_13",KC="_svg_1crij_13",QC="_gridLine_1crij_23",ZC="_axisLabelY_1crij_35 _axisLabel_1crij_28",XC="_axisLabelX_1crij_39 _axisLabel_1crij_28",JC="_legendWrap_1crij_51",ej="_tooltip_1crij_76",tj="_tooltipLabel_1crij_95",nj="_tooltipRow_1crij_105",rj="_tooltipDot_1crij_111",oj="_tooltipSeries_1crij_118",aj="_tooltipValue_1crij_125",_n={root:GC,svgWrap:YC,svg:KC,gridLine:QC,axisLabelY:ZC,axisLabelX:XC,legendWrap:JC,tooltip:ej,tooltipLabel:tj,tooltipRow:nj,tooltipDot:rj,tooltipSeries:oj,tooltipValue:aj};function ij(e){if(e===0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e))),i=e/o;return i<=1?o:i<=2?2*o:i<=5?5*o:10*o}function Df(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}function sj(e,o=.35){if(e.length<2)return"";let i=`M ${e[0][0]} ${e[0][1]}`;for(let s=0;s<e.length-1;s++){const[l,d]=e[s],[h,p]=e[s+1],g=(h-l)*o;i+=` C ${l+g} ${d}, ${h-g} ${p}, ${h} ${p}`}return i}const lj=v.forwardRef(({series:e,labels:o,height:i=260,showGrid:s=!0,showLegend:l=!0,gradientFrom:d="#8c4fe2",gradientTo:h="#446cff",yUnit:p="",yTickCount:g=5,className:x,...y},w)=>{const[k,R]=v.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),S=`line-grad-${Math.random().toString(36).slice(2,9)}`,_=v.useRef(null),[$,M]=v.useState(540);v.useEffect(()=>{const O=_.current;if(!O)return;const q=new ResizeObserver(z=>{var U;const te=(U=z[0])==null?void 0:U.contentRect.width;te>0&&M(Math.floor(te))});q.observe(O);const T=Math.floor(O.getBoundingClientRect().width);return T>0&&M(T),()=>q.disconnect()},[]);const C=44,j=20,D=20,N=$,L=i,E=N-C,A=L-j-D,F=`url(#${S}-stroke)`,G=O=>O.color??F,Y=e.flatMap(O=>O.data),W=ij(Math.max(...Y,1)),K=Array.from({length:g+1},(O,q)=>W*(q/g)).reverse(),J=O=>D+A-O/W*A,ae=O=>o.length>1?C+O/(o.length-1)*E:C+E/2,ce=O=>O.map((q,T)=>[ae(T),J(q)]),se=()=>R(O=>({...O,visible:!1})),Q=v.useCallback(O=>{const q=O.currentTarget.getBoundingClientRect(),z=O.clientX-q.left-C,te=E/Math.max(o.length-1,1),U=Math.round(z/te),X=Math.max(0,Math.min(U,o.length-1)),le=e.map(B=>({color:B.color??h,series:B.label,value:B.data[X]??0}));R({visible:!0,index:X,x:O.clientX+12,y:O.clientY-8,label:o[X],items:le})},[e,o,h,E,C]);return n.jsxs("div",{ref:w,className:ie(_n.root,x),...y,children:[n.jsx("div",{ref:_,className:_n.svgWrap,children:n.jsxs("svg",{width:N,height:L,viewBox:`0 0 ${N} ${L}`,className:_n.svg,onMouseMove:Q,onMouseLeave:se,children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:`${S}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:d}),n.jsx("stop",{offset:"100%",stopColor:h})]}),n.jsxs("linearGradient",{id:`${S}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[n.jsx("stop",{offset:"0%",stopColor:h,stopOpacity:"0.05"}),n.jsx("stop",{offset:"50%",stopColor:h}),n.jsx("stop",{offset:"100%",stopColor:h,stopOpacity:"0.05"})]}),n.jsxs("filter",{id:`${S}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),n.jsx("feOffset",{dy:"4"}),n.jsx("feComponentTransfer",{children:n.jsx("feFuncA",{type:"linear",slope:"0.3"})}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),n.jsx("clipPath",{id:`${S}-clip`,children:n.jsx("rect",{x:C,y:D,width:E,height:A,rx:6,ry:6})})]}),K.map(O=>{const q=J(O);return n.jsxs("g",{children:[s&&n.jsx("line",{x1:0,y1:q,x2:N,y2:q,className:_n.gridLine}),n.jsxs("text",{x:0,y:q-6,className:_n.axisLabelY,textAnchor:"start",children:[Df(O),p]})]},O)}),n.jsx("g",{clipPath:`url(#${S}-clip)`,children:e.map((O,q)=>{const T=ce(O.data),z=sj(T);return n.jsx("path",{d:z,fill:"none",stroke:G(O),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},q)})}),(()=>{const O=k.index>=0?k.index:0,q=ae(O),T=k.visible&&k.index>=0,z="transform 200ms var(--ease-default, ease-out)";return n.jsx("g",{style:{pointerEvents:"none",opacity:T?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:n.jsxs("g",{style:{transform:`translateX(${q}px)`,transition:z},children:[n.jsx("line",{x1:0,x2:0,y1:D,y2:D+A,stroke:h,strokeWidth:2,strokeLinecap:"round",opacity:.5}),e.map((te,U)=>{const X=te.data[O]??0,le=J(X),B=te.color??h;return n.jsx("g",{style:{transform:`translateY(${le}px)`,transition:z},children:n.jsx("circle",{cx:0,cy:0,r:4,fill:B,filter:`url(#${S}-pin-shadow)`})},U)})]})})})(),(()=>{const q=o.length>1?E/(o.length-1):E,T=Math.max(1,Math.ceil(45/Math.max(q,1))),z=o.length-1;return o.map((te,U)=>{const X=U===0,le=U===z;if(!(X||le)&&U%T!==0)return null;const P=X?C:le?N:ae(U),oe=X?"start":le?"end":"middle";return n.jsx("text",{x:P,y:L-j+14,className:_n.axisLabelX,textAnchor:oe,children:te},te)})})()]})}),l&&e.length>0&&n.jsx("div",{className:_n.legendWrap,children:n.jsx(e2,{variant:"line",items:e.map(O=>({color:O.color??h,label:O.label}))})}),k.visible&&n.jsxs("div",{className:_n.tooltip,style:{left:k.x,top:k.y},children:[n.jsx("div",{className:_n.tooltipLabel,children:k.label}),k.items.map(O=>n.jsxs("div",{className:_n.tooltipRow,children:[n.jsx("span",{className:_n.tooltipDot,style:{background:O.color}}),n.jsx("span",{className:_n.tooltipSeries,children:O.series}),n.jsxs("span",{className:_n.tooltipValue,children:[Df(O.value),p]})]},O.series))]})]})});lj.displayName="LineChart";const cj="_root_3tq2n_5",dj="_chartWrap_3tq2n_14",uj="_svg_3tq2n_18",hj="_centerText_3tq2n_23",pj="_statLegend_3tq2n_31",fj="_statItem_3tq2n_37",mj="_statBar_3tq2n_44",gj="_statText_3tq2n_50",vj="_statValue_3tq2n_56",xj="_statLabel_3tq2n_65",yj="_listLegend_3tq2n_72",wj="_legendItem_3tq2n_79",bj="_legendDot_3tq2n_85",kj="_legendLabel_3tq2n_92",_j="_legendValue_3tq2n_99",Cj="_tooltip_3tq2n_107",jj="_tooltipLabel_3tq2n_118",Sj="_tooltipValue_3tq2n_124",Et={root:cj,chartWrap:dj,svg:uj,centerText:hj,statLegend:pj,statItem:fj,statBar:mj,statText:gj,statValue:vj,statLabel:xj,listLegend:yj,legendItem:wj,legendDot:bj,legendLabel:kj,legendValue:_j,tooltip:Cj,tooltipLabel:jj,tooltipValue:Sj},Of=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],$j=v.forwardRef(({segments:e,innerRadius:o=60,size:i=200,showLegend:s=!0,legendVariant:l="list",unit:d="%",centerLabel:h,className:p,...g},x)=>{const[y,w]=v.useState({visible:!1,x:0,y:0,label:"",value:""}),k=e.map((N,L)=>N.color??Of[L%Of.length]),R=e.reduce((N,L)=>N+L.value,0),S=i/2,_=i/2,$=i*.15,M=(i-$)/2-2,C=2*Math.PI*M;let j=-C/4;const D=e.map((N,L)=>{const A=(R>0?N.value/R:0)*C,F=`${A} ${C-A}`,G=-j;return j+=A,{dashArray:F,dashOffset:G,color:k[L],...N}});return n.jsxs("div",{ref:x,className:ie(Et.root,p),...g,children:[n.jsx("div",{className:Et.chartWrap,children:n.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:Et.svg,children:[n.jsx("circle",{cx:S,cy:_,r:M,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:$}),D.map((N,L)=>n.jsx("circle",{cx:S,cy:_,r:M,fill:"none",stroke:N.color,strokeWidth:$,strokeDasharray:N.dashArray,strokeDashoffset:N.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:E=>{const A=R>0?Math.round(N.value/R*100):0;w({visible:!0,x:E.clientX+12,y:E.clientY-8,label:N.label,value:`${A}${d}`})},onMouseLeave:()=>w(E=>({...E,visible:!1}))},L)),h&&o>0&&n.jsx("text",{x:S,y:_+6,textAnchor:"middle",className:Et.centerText,children:h})]})}),s&&l==="stat"&&n.jsx("div",{className:Et.statLegend,children:e.map((N,L)=>{const E=R>0?Math.round(N.value/R*100):0;return n.jsxs("div",{className:Et.statItem,children:[n.jsx("span",{className:Et.statBar,style:{background:k[L]}}),n.jsxs("div",{className:Et.statText,children:[n.jsxs("span",{className:Et.statValue,children:[E,d]}),n.jsx("span",{className:Et.statLabel,children:N.label})]})]},N.label)})}),s&&l==="list"&&n.jsx("div",{className:Et.listLegend,children:e.map((N,L)=>{const E=R>0?Math.round(N.value/R*100):0;return n.jsxs("div",{className:Et.legendItem,children:[n.jsx("span",{className:Et.legendDot,style:{background:k[L]}}),n.jsx("span",{className:Et.legendLabel,children:N.label}),n.jsxs("span",{className:Et.legendValue,children:[E,d]})]},N.label)})}),y.visible&&n.jsxs("div",{className:Et.tooltip,style:{left:y.x,top:y.y},children:[n.jsx("div",{className:Et.tooltipLabel,children:y.label}),n.jsx("div",{className:Et.tooltipValue,children:y.value})]})]})});$j.displayName="DonutChart";const Mj="_root_bqpf6_5",Rj="_svgWrap_bqpf6_10",Nj="_svg_bqpf6_10",Lj="_axisLabel_bqpf6_19",Aj="_tooltip_bqpf6_25",da={root:Mj,svgWrap:Rj,svg:Nj,axisLabel:Lj,tooltip:Aj};function Tj(e){return e<.35?"var(--Alloy-green-100)":e<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const Ej=v.forwardRef(({cells:e,rows:o,cols:i,colorScale:s=Tj,cellRadius:l=4,cellGap:d=4,showTooltip:h=!0,className:p,...g},x)=>{const[y,w]=v.useState({visible:!1,x:0,y:0,content:""}),k=v.useRef(null),[R,S]=v.useState(540);v.useEffect(()=>{const L=k.current;if(!L)return;const E=new ResizeObserver(F=>{var Y;const G=(Y=F[0])==null?void 0:Y.contentRect.width;G>0&&S(Math.floor(G))});E.observe(L);const A=Math.floor(L.getBoundingClientRect().width);return A>0&&S(A),()=>E.disconnect()},[]);const _=32,$=16,M=R,C=M-_-d,j=Math.max(4,(C-(i.length-1)*d)/i.length),D=o.length*($+d)+d+24,N=new Map;return e.forEach(L=>N.set(`${L.row}__${L.col}`,L)),n.jsxs("div",{ref:x,className:ie(da.root,p),...g,children:[n.jsx("div",{ref:k,className:da.svgWrap,children:n.jsxs("svg",{width:M,height:D,viewBox:`0 0 ${M} ${D}`,className:da.svg,onMouseLeave:()=>w(L=>({...L,visible:!1})),children:[i.map((L,E)=>{const A=_+d+E*(j+d)+j/2;return n.jsx("text",{x:A,y:12,className:da.axisLabel,textAnchor:"middle",children:L},L)}),o.map((L,E)=>{const A=24+E*($+d);return n.jsxs("g",{children:[n.jsx("text",{x:_-4,y:A+$/2+4,className:da.axisLabel,textAnchor:"end",children:L}),i.map((F,G)=>{const Y=N.get(`${L}__${F}`),W=(Y==null?void 0:Y.value)??0,K=s(W),J=_+d+G*(j+d);return n.jsx("rect",{x:J,y:A,width:j,height:$,rx:l,fill:K,style:{cursor:"pointer"},onMouseEnter:ae=>{if(!h)return;const ce=(Y==null?void 0:Y.label)??`${L} / ${F}: ${Math.round(W*100)}%`;w({visible:!0,x:ae.clientX+12,y:ae.clientY-8,content:ce})},onMouseLeave:()=>w(ae=>({...ae,visible:!1}))},F)})]},L)})]})}),y.visible&&n.jsx("div",{className:da.tooltip,style:{left:y.x,top:y.y},children:y.content})]})});Ej.displayName="HeatMap";const Ij="_root_18572_6",Pj="_gridWrap_18572_14",zj="_grid_18572_14",Dj="_cell_18572_27",Oj="_legend_18572_33",Fj="_legendSquare_18572_43",Bj="_tooltip_18572_49",Qr={root:Ij,gridWrap:Pj,grid:zj,cell:Dj,legend:Oj,legendSquare:Fj,tooltip:Bj},Hj=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function Wj(e,o){if(e<=0)return 0;const i=e/Math.max(1,o);return i<=.25?1:i<=.5?2:i<=.75?3:4}const Uj=v.forwardRef(({days:e,levelColors:o=Hj,cellSize:i=14,cellGap:s=3,cellRadius:l=2,fillWidth:d=!1,showLegend:h=!0,maxCount:p,formatTooltip:g,ariaLabel:x,className:y,...w},k)=>{const[R,S]=v.useState({visible:!1,x:0,y:0,content:""}),_=p??Math.max(1,...e.map(j=>j.count)),$=[];for(let j=0;j<e.length;j+=7)$.push(e.slice(j,j+7));const M=d?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${$.length}, minmax(0, 1fr))`,gap:`${s}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${s}px`},C=d?"100%":i;return n.jsxs("div",{ref:k,className:ie(Qr.root,y),...w,children:[n.jsx("div",{className:Qr.gridWrap,children:n.jsx("div",{role:"img","aria-label":x??`Activity heatmap with max ${_} on the busiest day`,className:Qr.grid,style:M,onMouseLeave:()=>S(j=>({...j,visible:!1})),children:$.map((j,D)=>Array.from({length:7},(N,L)=>{const E=j[L];if(!E)return n.jsx("span",{className:Qr.cell,style:{width:i,height:i,borderRadius:l,background:o[0]}},`${D}-${L}`);const A=Wj(E.count,_),F=g?g(E,A):`${E.label??E.date}: ${E.count} activation${E.count===1?"":"s"}`;return n.jsx("span",{className:Qr.cell,style:{width:C,height:i,borderRadius:l,background:o[A]},onMouseMove:G=>S({visible:!0,x:G.clientX,y:G.clientY,content:F}),onMouseLeave:()=>S(G=>({...G,visible:!1}))},`${D}-${L}`)}))})}),h&&n.jsxs("div",{className:Qr.legend,children:[n.jsx("span",{children:"Less"}),[0,1,2,3,4].map(j=>n.jsx("span",{className:Qr.legendSquare,style:{background:o[j],borderRadius:l}},j)),n.jsx("span",{children:"More"})]}),R.visible&&n.jsx("div",{className:Qr.tooltip,style:{left:R.x,top:R.y},children:R.content})]})});Uj.displayName="ActivityHeatMap";const qj="_root_14edh_5",Vj="_track_14edh_17",Gj="_segment_14edh_28",Yj="_legend_14edh_49",Kj="_legendRow_14edh_58",Qj="_legendDot_14edh_68",Zj="_legendLabel_14edh_74",Xj="_legendValue_14edh_78",Jj="_tooltip_14edh_84",eS="_tooltipLabel_14edh_100",tS="_tooltipValueRow_14edh_105",nS="_tooltipDot_14edh_114",Dn={root:qj,track:Vj,segment:Gj,legend:Yj,legendRow:Kj,legendDot:Qj,legendLabel:Zj,legendValue:Xj,tooltip:Jj,tooltipLabel:eS,tooltipValueRow:tS,tooltipDot:nS},rS=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],ua={r:140,g:79,b:226},ru={r:68,g:108,b:255};function Ff(e){const o=Math.max(0,Math.min(100,e))/100,i=Math.round(ua.r+(ru.r-ua.r)*o),s=Math.round(ua.g+(ru.g-ua.g)*o),l=Math.round(ua.b+(ru.b-ua.b)*o);return`rgb(${i}, ${s}, ${l})`}const oS=v.forwardRef(({segments:e,colors:o=rS,aiGradient:i=!1,height:s,showLegend:l=!1,flat:d=!1,ariaLabel:h,className:p,...g},x)=>{const[y,w]=v.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),k=e.reduce(($,M)=>$+Math.max(0,M.value),0);let R=0;const S=e.map(($,M)=>{const C=Math.max(0,$.value),j=k>0?C/k*100:0,D=k>0?R/k*100:0;R+=C;const N=k>0?R/k*100:0,L=$.color??o[M%o.length],E=d?!0:$.emphasized??M===0;return{...$,pct:j,startPct:D,endPct:N,color:L,emphasized:E}}),_=s!==void 0?{height:typeof s=="number"?`${s}px`:s}:void 0;return n.jsxs("div",{ref:x,className:ie(Dn.root,p),...g,children:[n.jsx("div",{role:"img","aria-label":h??`Ratio bar: ${e.map($=>`${$.label} ${$.value}`).join(", ")}`,className:Dn.track,style:_,onMouseLeave:()=>w($=>({...$,visible:!1})),children:S.map($=>{const M=i?`linear-gradient(to right, ${Ff($.startPct)}, ${Ff($.endPct)})`:$.color;return n.jsx("span",{className:Dn.segment,"data-emphasized":$.emphasized||void 0,"data-ai":i||void 0,style:{width:`${$.pct}%`,background:M,"--ratio-hover-bg":$.color},onMouseMove:C=>w({visible:!0,x:C.clientX,y:C.clientY,label:$.label,value:$.value,color:$.color})},$.label)})}),l&&n.jsx("ul",{className:Dn.legend,children:S.map($=>n.jsxs("li",{className:Dn.legendRow,children:[n.jsx("span",{className:Dn.legendDot,style:{background:$.color}}),n.jsx("span",{className:Dn.legendLabel,children:$.label}),n.jsx("span",{className:Dn.legendValue,children:$.value.toLocaleString("en-US")})]},$.label))}),y.visible&&n.jsxs("div",{className:Dn.tooltip,style:{left:y.x,top:y.y},children:[n.jsx("span",{className:Dn.tooltipLabel,children:y.label}),n.jsxs("span",{className:Dn.tooltipValueRow,children:[n.jsx("span",{className:Dn.tooltipDot,style:{background:y.color}}),y.value.toLocaleString("en-US")]})]})]})});oS.displayName="RatioBar";const aS="_track_1wmly_6",iS="_fill_1wmly_12",Bf={track:aS,fill:iS},sS=v.forwardRef(({value:e,max:o=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:s="var(--color-bg-tertiary)",gapColor:l="var(--color-bg-primary)",stripeWidth:d=2,stripeGap:h=1,height:p=12,ariaLabel:g,className:x,style:y,...w},k)=>{const R=d+h,S=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${d}px,
      ${l} ${d}px,
      ${l} ${R}px
    )`,_=Math.max(0,Math.min(o,e)),$=o>0?_/o*100:0;return n.jsx("div",{ref:k,role:"progressbar","aria-label":g??`Progress: ${Math.round($)}%`,"aria-valuemin":0,"aria-valuemax":o,"aria-valuenow":_,className:ie(Bf.track,x),style:{height:p,background:`${S}, ${s}`,...y},...w,children:n.jsx("div",{className:Bf.fill,style:{width:`${$}%`,background:`${S}, ${i}`}})})});sS.displayName="StripedBar";const lS=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],cS=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function Hf(e,o="to right"){const i=e.map(({color:s,position:l})=>`${s} ${l}`).join(", ");return`linear-gradient(${o}, ${i})`}Hf(lS),Hf(cS);var pt="-ms-",Ci="-moz-",rt="-webkit-",t2="comm",Xl="rule",gh="decl",dS="@import",uS="@namespace",n2="@keyframes",hS="@layer",r2=Math.abs,vh=String.fromCharCode,Eu=Object.assign;function pS(e,o){return Rt(e,0)^45?(((o<<2^Rt(e,0))<<2^Rt(e,1))<<2^Rt(e,2))<<2^Rt(e,3):0}function o2(e){return e.trim()}function _r(e,o){return(e=o.exec(e))?e[0]:e}function He(e,o,i){return e.replace(o,i)}function yl(e,o,i){return e.indexOf(o,i)}function Rt(e,o){return e.charCodeAt(o)|0}function No(e,o,i){return e.slice(o,i)}function Zn(e){return e.length}function a2(e){return e.length}function wi(e,o){return o.push(e),e}function fS(e,o){return e.map(o).join("")}function Wf(e,o){return e.filter(function(i){return!_r(i,o)})}var Jl=1,ka=1,i2=0,Hn=0,St=0,La="";function ec(e,o,i,s,l,d,h,p){return{value:e,root:o,parent:i,type:s,props:l,children:d,line:Jl,column:ka,length:h,return:"",siblings:p}}function Zr(e,o){return Eu(ec("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},o)}function ha(e){for(;e.root;)e=Zr(e.root,{children:[e]});wi(e,e.siblings)}function mS(){return St}function gS(){return St=Hn>0?Rt(La,--Hn):0,ka--,St===10&&(ka=1,Jl--),St}function er(){return St=Hn<i2?Rt(La,Hn++):0,ka++,St===10&&(ka=1,Jl++),St}function eo(){return Rt(La,Hn)}function wl(){return Hn}function tc(e,o){return No(La,e,o)}function Ri(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vS(e){return Jl=ka=1,i2=Zn(La=e),Hn=0,[]}function xS(e){return La="",e}function ou(e){return o2(tc(Hn-1,Iu(e===91?e+2:e===40?e+1:e)))}function yS(e){for(;(St=eo())&&St<33;)er();return Ri(e)>2||Ri(St)>3?"":" "}function wS(e,o){for(;--o&&er()&&!(St<48||St>102||St>57&&St<65||St>70&&St<97););return tc(e,wl()+(o<6&&eo()==32&&er()==32))}function Iu(e){for(;er();)switch(St){case e:return Hn;case 34:case 39:e!==34&&e!==39&&Iu(St);break;case 40:e===41&&Iu(e);break;case 92:er();break}return Hn}function bS(e,o){for(;er()&&e+St!==57;)if(e+St===84&&eo()===47)break;return"/*"+tc(o,Hn-1)+"*"+vh(e===47?e:er())}function kS(e){for(;!Ri(eo());)er();return tc(e,Hn)}function _S(e){return xS(bl("",null,null,null,[""],e=vS(e),0,[0],e))}function bl(e,o,i,s,l,d,h,p,g){for(var x=0,y=0,w=h,k=0,R=0,S=0,_=1,$=1,M=1,C=0,j="",D=l,N=d,L=s,E=j;$;)switch(S=C,C=er()){case 40:if(S!=108&&Rt(E,w-1)==58){yl(E+=He(ou(C),"&","&\f"),"&\f",r2(x?p[x-1]:0))!=-1&&(M=-1);break}case 34:case 39:case 91:E+=ou(C);break;case 9:case 10:case 13:case 32:E+=yS(S);break;case 92:E+=wS(wl()-1,7);continue;case 47:switch(eo()){case 42:case 47:wi(CS(bS(er(),wl()),o,i,g),g),(Ri(S||1)==5||Ri(eo()||1)==5)&&Zn(E)&&No(E,-1,void 0)!==" "&&(E+=" ");break;default:E+="/"}break;case 123*_:p[x++]=Zn(E)*M;case 125*_:case 59:case 0:switch(C){case 0:case 125:$=0;case 59+y:M==-1&&(E=He(E,/\f/g,"")),R>0&&(Zn(E)-w||_===0&&S===47)&&wi(R>32?qf(E+";",s,i,w-1,g):qf(He(E," ","")+";",s,i,w-2,g),g);break;case 59:E+=";";default:if(wi(L=Uf(E,o,i,x,y,l,p,j,D=[],N=[],w,d),d),C===123)if(y===0)bl(E,o,L,L,D,d,w,p,N);else{switch(k){case 99:if(Rt(E,3)===110)break;case 108:if(Rt(E,2)===97)break;default:y=0;case 100:case 109:case 115:}y?bl(e,L,L,s&&wi(Uf(e,L,L,0,0,l,p,j,l,D=[],w,N),N),l,N,w,p,s?D:N):bl(E,L,L,L,[""],N,0,p,N)}}x=y=R=0,_=M=1,j=E="",w=h;break;case 58:w=1+Zn(E),R=S;default:if(_<1){if(C==123)--_;else if(C==125&&_++==0&&gS()==125)continue}switch(E+=vh(C),C*_){case 38:M=y>0?1:(E+="\f",-1);break;case 44:p[x++]=(Zn(E)-1)*M,M=1;break;case 64:eo()===45&&(E+=ou(er())),k=eo(),y=w=Zn(j=E+=kS(wl())),C++;break;case 45:S===45&&Zn(E)==2&&(_=0)}}return d}function Uf(e,o,i,s,l,d,h,p,g,x,y,w){for(var k=l-1,R=l===0?d:[""],S=a2(R),_=0,$=0,M=0;_<s;++_)for(var C=0,j=No(e,k+1,k=r2($=h[_])),D=e;C<S;++C)(D=o2($>0?R[C]+" "+j:He(j,/&\f/g,R[C])))&&(g[M++]=D);return ec(e,o,i,l===0?Xl:p,g,x,y,w)}function CS(e,o,i,s){return ec(e,o,i,t2,vh(mS()),No(e,2,-2),0,s)}function qf(e,o,i,s,l){return ec(e,o,i,gh,No(e,0,s),No(e,s+1,-1),s,l)}function s2(e,o,i){switch(pS(e,o)){case 5103:return rt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return rt+e+e;case 4855:return rt+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ci+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return rt+e+Ci+e+pt+e+e;case 5936:switch(Rt(e,o+11)){case 114:return rt+e+pt+He(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return rt+e+pt+He(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return rt+e+pt+He(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return rt+e+pt+e+e;case 6165:return rt+e+pt+"flex-"+e+e;case 5187:return rt+e+He(e,/(\w+).+(:[^]+)/,rt+"box-$1$2"+pt+"flex-$1$2")+e;case 5443:return rt+e+pt+"flex-item-"+He(e,/flex-|-self/g,"")+(_r(e,/flex-|baseline/)?"":pt+"grid-row-"+He(e,/flex-|-self/g,""))+e;case 4675:return rt+e+pt+"flex-line-pack"+He(e,/align-content|flex-|-self/g,"")+e;case 5548:return rt+e+pt+He(e,"shrink","negative")+e;case 5292:return rt+e+pt+He(e,"basis","preferred-size")+e;case 6060:return rt+"box-"+He(e,"-grow","")+rt+e+pt+He(e,"grow","positive")+e;case 4554:return rt+He(e,/([^-])(transform)/g,"$1"+rt+"$2")+e;case 6187:return He(He(He(e,/(zoom-|grab)/,rt+"$1"),/(image-set)/,rt+"$1"),e,"")+e;case 5495:case 3959:return He(e,/(image-set\([^]*)/,rt+"$1$`$1");case 4968:return He(He(e,/(.+:)(flex-)?(.*)/,rt+"box-pack:$3"+pt+"flex-pack:$3"),/space-between/,"justify")+rt+e+e;case 4200:if(!_r(e,/flex-|baseline/))return pt+"grid-column-align"+No(e,o)+e;break;case 2592:case 3360:return pt+He(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(s,l){return o=l,_r(s.props,/grid-\w+-end/)})?~yl(e+(i=i[o].value),"span",0)?e:pt+He(e,"-start","")+e+pt+"grid-row-span:"+(~yl(i,"span",0)?_r(i,/\d+/):+_r(i,/\d+/)-+_r(e,/\d+/))+";":pt+He(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(s){return _r(s.props,/grid-\w+-start/)})?e:pt+He(He(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return He(e,/(.+)-inline(.+)/,rt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zn(e)-1-o>6)switch(Rt(e,o+1)){case 109:if(Rt(e,o+4)!==45)break;case 102:return He(e,/(.+:)(.+)-([^]+)/,"$1"+rt+"$2-$3$1"+Ci+(Rt(e,o+3)==108?"$3":"$2-$3"))+e;case 115:return~yl(e,"stretch",0)?s2(He(e,"stretch","fill-available"),o,i)+e:e}break;case 5152:case 5920:return He(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,d,h,p,g,x){return pt+l+":"+d+x+(h?pt+l+"-span:"+(p?g:+g-+d)+x:"")+e});case 4949:if(Rt(e,o+6)===121)return He(e,":",":"+rt)+e;break;case 6444:switch(Rt(e,Rt(e,14)===45?18:11)){case 120:return He(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+rt+(Rt(e,14)===45?"inline-":"")+"box$3$1"+rt+"$2$3$1"+pt+"$2box$3")+e;case 100:return He(e,":",":"+pt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return He(e,"scroll-","scroll-snap-")+e}return e}function Nl(e,o){for(var i="",s=0;s<e.length;s++)i+=o(e[s],s,e,o)||"";return i}function jS(e,o,i,s){switch(e.type){case hS:if(e.children.length)break;case dS:case uS:case gh:return e.return=e.return||e.value;case t2:return"";case n2:return e.return=e.value+"{"+Nl(e.children,s)+"}";case Xl:if(!Zn(e.value=e.props.join(",")))return""}return Zn(i=Nl(e.children,s))?e.return=e.value+"{"+i+"}":""}function SS(e){var o=a2(e);return function(i,s,l,d){for(var h="",p=0;p<o;p++)h+=e[p](i,s,l,d)||"";return h}}function $S(e){return function(o){o.root||(o=o.return)&&e(o)}}function MS(e,o,i,s){if(e.length>-1&&!e.return)switch(e.type){case gh:e.return=s2(e.value,e.length,i);return;case n2:return Nl([Zr(e,{value:He(e.value,"@","@"+rt)})],s);case Xl:if(e.length)return fS(i=e.props,function(l){switch(_r(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ha(Zr(e,{props:[He(l,/:(read-\w+)/,":"+Ci+"$1")]})),ha(Zr(e,{props:[l]})),Eu(e,{props:Wf(i,s)});break;case"::placeholder":ha(Zr(e,{props:[He(l,/:(plac\w+)/,":"+rt+"input-$1")]})),ha(Zr(e,{props:[He(l,/:(plac\w+)/,":"+Ci+"$1")]})),ha(Zr(e,{props:[He(l,/:(plac\w+)/,pt+"input-$1")]})),ha(Zr(e,{props:[l]})),Eu(e,{props:Wf(i,s)});break}return""})}}var ga={},au,iu;const _a=typeof process<"u"&&ga!==void 0&&(ga.REACT_APP_SC_ATTR||ga.SC_ATTR)||"data-styled",l2="active",c2="data-styled-version",nc="6.4.2",xh=`/*!sc*/
`,ji=typeof window<"u"&&typeof document<"u";function Vf(e){if(typeof process<"u"&&ga!==void 0){const o=ga[e];if(o!==void 0&&o!=="")return o!=="false"}}const RS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(iu=(au=Vf("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&au!==void 0?au:Vf("SC_DISABLE_SPEEDY"))!==null&&iu!==void 0?iu:typeof process<"u"&&ga!==void 0&&!1),d2="sc-keyframes-",NS={};function Di(e,...o){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${o.length>0?` Args: ${o.join(", ")}`:""}`)}let kl=new Map,Ll=new Map,_l=1;const bi=e=>{if(kl.has(e))return kl.get(e);for(;Ll.has(_l);)_l++;const o=_l++;return kl.set(e,o),Ll.set(o,e),o},LS=e=>Ll.get(e),AS=(e,o)=>{_l=o+1,kl.set(e,o),Ll.set(o,e)},yh=Object.freeze([]),Ca=Object.freeze({});function u2(e,o,i=Ca){return e.theme!==i.theme&&e.theme||o||i.theme}const TS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ES=/(^-|-$)/g;function h2(e){return e.replace(TS,"-").replace(ES,"")}const IS=/(a)(d)/gi,Gf=e=>String.fromCharCode(e+(e>25?39:97));function wh(e){let o,i="";for(o=Math.abs(e);o>52;o=o/52|0)i=Gf(o%52)+i;return(Gf(o%52)+i).replace(IS,"$1-$2")}const Pu=5381,Ro=(e,o)=>{let i=o.length;for(;i;)e=33*e^o.charCodeAt(--i);return e},p2=e=>Ro(Pu,e);function bh(e){return wh(p2(e)>>>0)}function PS(e){return e.displayName||e.name||"Component"}function zu(e){return typeof e=="string"&&!0}function zS(e){return zu(e)?`styled.${e}`:`Styled(${PS(e)})`}const f2=Symbol.for("react.memo"),DS=Symbol.for("react.forward_ref"),OS={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},FS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},m2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},BS={[DS]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[f2]:m2};function Yf(e){return("type"in(o=e)&&o.type.$$typeof)===f2?m2:"$$typeof"in e?BS[e.$$typeof]:OS;var o}const HS=Object.defineProperty,WS=Object.getOwnPropertyNames,US=Object.getOwnPropertySymbols,qS=Object.getOwnPropertyDescriptor,VS=Object.getPrototypeOf,GS=Object.prototype;function g2(e,o,i){if(typeof o!="string"){const s=VS(o);s&&s!==GS&&g2(e,s,i);const l=WS(o).concat(US(o)),d=Yf(e),h=Yf(o);for(let p=0;p<l.length;++p){const g=l[p];if(!(g in FS||i&&i[g]||h&&g in h||d&&g in d)){const x=qS(o,g);try{HS(e,g,x)}catch{}}}}return e}function Oi(e){return typeof e=="function"}const YS=Symbol.for("react.forward_ref");function kh(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===YS&&"styledComponentId"in e}function ki(e,o){return e&&o?e+" "+o:e||o||""}function Al(e,o){return e.join("")}function Ni(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Du(e,o,i=!1){if(!i&&!Ni(e)&&!Array.isArray(e))return o;if(Array.isArray(o))for(let s=0;s<o.length;s++)e[s]=Du(e[s],o[s]);else if(Ni(o))for(const s in o)e[s]=Du(e[s],o[s]);return e}function _h(e,o){Object.defineProperty(e,"toString",{value:o})}const KS=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let o=this._cIndex;if(e>this._cGroup)for(let i=this._cGroup;i<e;i++)o+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=e;i--)o-=this.groupSizes[i];return this._cGroup=e,this._cIndex=o,o}insertRules(e,o){if(e>=this.groupSizes.length){const l=this.groupSizes,d=l.length;let h=d;for(;e>=h;)if(h<<=1,h<0)throw Di(16,`${e}`);this.groupSizes=new Uint32Array(h),this.groupSizes.set(l),this.length=h;for(let p=d;p<h;p++)this.groupSizes[p]=0}let i=this.indexOfGroup(e+1),s=0;for(let l=0,d=o.length;l<d;l++)this.tag.insertRule(i,o[l])&&(this.groupSizes[e]++,i++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)}clearGroup(e){if(e<this.length){const o=this.groupSizes[e],i=this.indexOfGroup(e),s=i+o;this.groupSizes[e]=0;for(let l=i;l<s;l++)this.tag.deleteRule(i);o>0&&this._cGroup>e&&(this._cIndex-=o)}}getGroup(e){let o="";if(e>=this.length||this.groupSizes[e]===0)return o;const i=this.groupSizes[e],s=this.indexOfGroup(e),l=s+i;for(let d=s;d<l;d++)o+=this.tag.getRule(d)+xh;return o}},QS=`style[${_a}][${c2}="${nc}"]`,ZS=new RegExp(`^${_a}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Kf=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Ou=e=>{if(!e)return document;if(Kf(e))return e;if("getRootNode"in e){const o=e.getRootNode();if(Kf(o))return o}return document},XS=(e,o,i)=>{const s=i.split(",");let l;for(let d=0,h=s.length;d<h;d++)(l=s[d])&&e.registerName(o,l)},JS=(e,o)=>{var i;const s=((i=o.textContent)!==null&&i!==void 0?i:"").split(xh),l=[];for(let d=0,h=s.length;d<h;d++){const p=s[d].trim();if(!p)continue;const g=p.match(ZS);if(g){const x=0|parseInt(g[1],10),y=g[2];x!==0&&(AS(y,x),XS(e,y,g[3]),e.getTag().insertRules(x,l)),l.length=0}else l.push(p)}},su=e=>{const o=Ou(e.options.target).querySelectorAll(QS);for(let i=0,s=o.length;i<s;i++){const l=o[i];l&&l.getAttribute(_a)!==l2&&(JS(e,l),l.parentNode&&l.parentNode.removeChild(l))}};let mi=!1;function e$(){if(mi!==!1)return mi;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return mi=e.nonce||e.getAttribute("content")||void 0;const o=document.head.querySelector('meta[name="sc-nonce"]');if(o)return mi=o.getAttribute("content")||void 0}return mi=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const v2=(e,o)=>{const i=document.head,s=e||i,l=document.createElement("style"),d=(g=>{const x=Array.from(g.querySelectorAll(`style[${_a}]`));return x[x.length-1]})(s),h=d!==void 0?d.nextSibling:null;l.setAttribute(_a,l2),l.setAttribute(c2,nc);const p=o||e$();return p&&l.setAttribute("nonce",p),s.insertBefore(l,h),l},t$=class{constructor(e,o){this.element=v2(e,o),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var s;if(i.sheet)return i.sheet;const l=(s=i.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let d=0,h=l.length;d<h;d++){const p=l[d];if(p.ownerNode===i)return p}throw Di(17)})(this.element),this.length=0}insertRule(e,o){try{return this.sheet.insertRule(o,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const o=this.sheet.cssRules[e];return o&&o.cssText?o.cssText:""}},n$=class{constructor(e,o){this.element=v2(e,o),this.nodes=this.element.childNodes,this.length=0}insertRule(e,o){if(e<=this.length&&e>=0){const i=document.createTextNode(o);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Qf=ji;const r$={isServer:!ji,useCSSOMInjection:!RS};class Fi{static registerId(o){return bi(o)}constructor(o=Ca,i={},s){this.options=Object.assign(Object.assign({},r$),o),this.gs=i,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!o.isServer,!this.server&&ji&&Qf&&(Qf=!1,su(this)),_h(this,()=>(l=>{const d=l.getTag(),{length:h}=d;let p="";for(let g=0;g<h;g++){const x=LS(g);if(x===void 0)continue;const y=l.names.get(x);if(y===void 0||!y.size)continue;const w=d.getGroup(g);if(w.length===0)continue;const k=_a+".g"+g+'[id="'+x+'"]';let R="";for(const S of y)S.length>0&&(R+=S+",");p+=w+k+'{content:"'+R+'"}'+xh}return p})(this))}rehydrate(){!this.server&&ji&&su(this)}reconstructWithOptions(o,i=!0){const s=new Fi(Object.assign(Object.assign({},this.options),o),this.gs,i&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&ji&&o.target!==this.options.target&&Ou(this.options.target)!==Ou(o.target)&&su(s),s}allocateGSInstance(o){return this.gs[o]=(this.gs[o]||0)+1}getTag(){return this.tag||(this.tag=(o=(({useCSSOMInjection:i,target:s,nonce:l})=>i?new t$(s,l):new n$(s,l))(this.options),new KS(o)));var o}hasNameForId(o,i){var s,l;return(l=(s=this.names.get(o))===null||s===void 0?void 0:s.has(i))!==null&&l!==void 0&&l}registerName(o,i){bi(o),o.startsWith(d2)&&this.keyframeIds.add(o);const s=this.names.get(o);s?s.add(i):this.names.set(o,new Set([i]))}insertRules(o,i,s){this.registerName(o,i),this.getTag().insertRules(bi(o),s)}clearNames(o){this.names.has(o)&&this.names.get(o).clear()}clearRules(o){this.getTag().clearGroup(bi(o)),this.clearNames(o)}clearTag(){this.tag=void 0}}const x2=new WeakSet,o$={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function a$(e,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||e in o$||e.startsWith("--")?String(o).trim():o+"px"}const So=47;function Zf(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let o="";for(let i=0;i<e.length;i++){const s=e.charCodeAt(i);o+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):e[i]}return o.startsWith("ms-")?"-"+o:o}const y2=Symbol.for("sc-keyframes");function i$(e){return typeof e=="object"&&e!==null&&y2 in e}function w2(e){return Oi(e)&&!(e.prototype&&e.prototype.isReactComponent)}const b2=e=>e==null||e===!1||e==="",s$=Symbol.for("react.client.reference");function Xf(e){return e.$$typeof===s$}function k2(e,o){for(const i in e){const s=e[i];e.hasOwnProperty(i)&&!b2(s)&&(Array.isArray(s)&&x2.has(s)||Oi(s)?o.push(Zf(i)+":",s,";"):Ni(s)?(o.push(i+" {"),k2(s,o),o.push("}")):o.push(Zf(i)+": "+a$(i,s)+";"))}}function ro(e,o,i,s,l=[]){if(b2(e))return l;const d=typeof e;if(d==="string")return l.push(e),l;if(d==="function"){if(Xf(e))return l;if(w2(e)&&o){const h=e(o);return ro(h,o,i,s,l)}return l.push(e),l}if(Array.isArray(e)){for(let h=0;h<e.length;h++)ro(e[h],o,i,s,l);return l}return kh(e)?(l.push(`.${e.styledComponentId}`),l):i$(e)?(i?(e.inject(i,s),l.push(e.getName(s))):l.push(e),l):Xf(e)?l:Ni(e)?e.toString!==Object.prototype.toString?(l.push(e.toString()),l):(k2(e,l),l):(l.push(e.toString()),l)}const l$=p2(nc);class c${constructor(o,i,s){this.rules=o,this.componentId=i,this.baseHash=Ro(l$,i),this.baseStyle=s,Fi.registerId(i)}generateAndInjectStyles(o,i,s){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,i,s):"";{let d="";for(let h=0;h<this.rules.length;h++){const p=this.rules[h];if(typeof p=="string")d+=p;else if(p)if(w2(p)){const g=p(o);typeof g=="string"?d+=g:g!=null&&g!==!1&&(d+=Al(ro(g,o,i,s)))}else d+=Al(ro(p,o,i,s))}if(d){this.dynamicNameCache||(this.dynamicNameCache=new Map);const h=s.hash?s.hash+d:d;let p=this.dynamicNameCache.get(h);if(!p){if(p=wh(Ro(Ro(this.baseHash,s.hash),d)>>>0),this.dynamicNameCache.size>=200){const g=this.dynamicNameCache.keys().next().value;g!==void 0&&this.dynamicNameCache.delete(g)}this.dynamicNameCache.set(h,p)}if(!i.hasNameForId(this.componentId,p)){const g=s(d,"."+p,void 0,this.componentId);i.insertRules(this.componentId,p,g)}l=ki(l,p)}}return l}}const d$=/&/g;function _2(e,o){let i=0;for(;--o>=0&&e.charCodeAt(o)===92;)i++;return!(1&~i)}function lu(e){const o=e.length;let i="",s=0,l=0,d=0,h=!1,p=!1;for(let g=0;g<o;g++){const x=e.charCodeAt(g);if(d!==0||h||x!==So||e.charCodeAt(g+1)!==42)if(h)x===42&&e.charCodeAt(g+1)===So&&(h=!1,g++);else if(x!==34&&x!==39||_2(e,g)){if(d===0)if(x===123)l++;else if(x===125){if(l--,l<0){p=!0;let y=g+1;for(;y<o;){const w=e.charCodeAt(y);if(w===59||w===10)break;y++}y<o&&e.charCodeAt(y)===59&&y++,l=0,g=y-1,s=y;continue}l===0&&(i+=e.substring(s,g+1),s=g+1)}else x===59&&l===0&&(i+=e.substring(s,g+1),s=g+1)}else d===0?d=x:d===x&&(d=0);else h=!0,g++}return p||l!==0||d!==0?(s<o&&l===0&&d===0&&(i+=e.substring(s)),i):e}function C2(e,o){const i=o+" ",s=","+i;for(let l=0;l<e.length;l++){const d=e[l];if(d.type==="rule"){d.value=(i+d.value).replaceAll(",",s);const h=d.props,p=[];for(let g=0;g<h.length;g++)p[g]=i+h[g];d.props=p}Array.isArray(d.children)&&d.type!=="@keyframes"&&C2(d.children,o)}return e}function u$({options:e=Ca,plugins:o=yh}=Ca){let i,s,l;const d=(k,R,S)=>S.startsWith(s)&&S.endsWith(s)&&S.replaceAll(s,"").length>0?`.${i}`:k,h=o.slice();h.push(k=>{k.type===Xl&&k.value.includes("&")&&(l||(l=new RegExp(`\\${s}\\b`,"g")),k.props[0]=k.props[0].replace(d$,s).replace(l,d))}),e.prefix&&h.push(MS),h.push(jS);let p=[];const g=SS(h.concat($S(k=>p.push(k)))),x=(k,R="",S="",_="&")=>{i=_,s=R,l=void 0;const $=(function(C){const j=C.indexOf("//")!==-1,D=C.indexOf("}")!==-1;if(!j&&!D)return C;if(!j)return lu(C);const N=C.length;let L="",E=0,A=0,F=0,G=0,Y=0,W=!1;for(;A<N;){const K=C.charCodeAt(A);if(K!==34&&K!==39||_2(C,A))if(F===0)if(K===So&&A+1<N&&C.charCodeAt(A+1)===42){for(A+=2;A+1<N&&(C.charCodeAt(A)!==42||C.charCodeAt(A+1)!==So);)A++;A+=2}else if(K!==40)if(K!==41)if(G>0)A++;else if(K===42&&A+1<N&&C.charCodeAt(A+1)===So)L+=C.substring(E,A),A+=2,E=A,W=!0;else if(K===So&&A+1<N&&C.charCodeAt(A+1)===So){for(L+=C.substring(E,A);A<N&&C.charCodeAt(A)!==10;)A++;E=A,W=!0}else K===123?Y++:K===125&&Y--,A++;else G>0&&G--,A++;else G++,A++;else A++;else F===0?F=K:F===K&&(F=0),A++}return W?(E<N&&(L+=C.substring(E)),Y===0?L:lu(L)):Y===0?C:lu(C)})(k);let M=_S(S||R?S+" "+R+" { "+$+" }":$);return e.namespace&&(M=C2(M,e.namespace)),p=[],Nl(M,g),p},y=e;let w=Pu;for(let k=0;k<o.length;k++)o[k].name||Di(15),w=Ro(w,o[k].name);return y!=null&&y.namespace&&(w=Ro(w,y.namespace)),y!=null&&y.prefix&&(w=Ro(w,"p")),x.hash=w!==Pu?w.toString():"",x}const h$=new Fi,Fu=u$(),j2=pn.createContext({shouldForwardProp:void 0,styleSheet:h$,stylis:Fu,stylisPlugins:void 0});j2.Consumer;function S2(){return pn.useContext(j2)}const Ch=pn.createContext(void 0);Ch.Consumer;const Jf=Object.prototype.hasOwnProperty,cu={};function p$(e,o){const i=typeof e!="string"?"sc":h2(e);cu[i]=(cu[i]||0)+1;const s=i+"-"+bh(nc+i+cu[i]);return o?o+"-"+s:s}function f$(e,o,i){const s=kh(e),l=e,d=!zu(e),{attrs:h=yh,componentId:p=p$(o.displayName,o.parentComponentId),displayName:g=zS(e)}=o,x=o.displayName&&o.componentId?h2(o.displayName)+"-"+o.componentId:o.componentId||p,y=s&&l.attrs?l.attrs.concat(h).filter(Boolean):h;let{shouldForwardProp:w}=o;if(s&&l.shouldForwardProp){const _=l.shouldForwardProp;if(o.shouldForwardProp){const $=o.shouldForwardProp;w=(M,C)=>_(M,C)&&$(M,C)}else w=_}const k=new c$(i,x,s?l.componentStyle:void 0);function R(_,$){return(function(M,C,j){const{attrs:D,componentStyle:N,defaultProps:L,foldedComponentIds:E,styledComponentId:A,target:F}=M,G=pn.useContext(Ch),Y=S2(),W=M.shouldForwardProp||Y.shouldForwardProp,K=u2(C,G,L)||Ca;let J,ae;{const O=pn.useRef(null),q=O.current;if(q!==null&&q[1]===K&&q[2]===Y.styleSheet&&q[3]===Y.stylis&&q[7]===N&&(function(T,z,te){const U=T,X=z;let le=0;for(const B in X)if(Jf.call(X,B)&&(le++,U[B]!==X[B]))return!1;return le===te})(q[0],C,q[4]))J=q[5],ae=q[6];else{J=(function(z,te,U){const X=Object.assign(Object.assign({},te),{className:void 0,theme:U}),le=z.length>1;for(let B=0;B<z.length;B++){const P=z[B],oe=Oi(P)?P(le?Object.assign({},X):X):P;for(const fe in oe)fe==="className"?X.className=ki(X.className,oe[fe]):fe==="style"?X.style=Object.assign(Object.assign({},X.style),oe[fe]):fe in te&&te[fe]===void 0||(X[fe]=oe[fe])}return"className"in te&&typeof te.className=="string"&&(X.className=ki(X.className,te.className)),X})(D,C,K),ae=(function(z,te,U,X){return z.generateAndInjectStyles(te,U,X)})(N,J,Y.styleSheet,Y.stylis);let T=0;for(const z in C)Jf.call(C,z)&&T++;O.current=[C,K,Y.styleSheet,Y.stylis,T,J,ae,N]}}const ce=J.as||F,se=(function(O,q,T,z){const te={};for(const U in O)O[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&O.theme===T||(U==="forwardedAs"?te.as=O.forwardedAs:z&&!z(U,q)||(te[U]=O[U]));return te})(J,ce,K,W);let Q=ki(E,A);return ae&&(Q+=" "+ae),J.className&&(Q+=" "+J.className),se[zu(ce)&&ce.includes("-")?"class":"className"]=Q,j&&(se.ref=j),v.createElement(ce,se)})(S,_,$)}R.displayName=g;let S=pn.forwardRef(R);return S.attrs=y,S.componentStyle=k,S.displayName=g,S.shouldForwardProp=w,S.foldedComponentIds=s?ki(l.foldedComponentIds,l.styledComponentId):"",S.styledComponentId=x,S.target=s?l.target:e,Object.defineProperty(S,"defaultProps",{get(){return this._foldedDefaultProps},set(_){this._foldedDefaultProps=s?(function($,...M){for(const C of M)Du($,C,!0);return $})({},l.defaultProps,_):_}}),_h(S,()=>`.${S.styledComponentId}`),d&&g2(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}var m$=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function em(e,o){const i=[e[0]];for(let s=0,l=o.length;s<l;s+=1)i.push(o[s],e[s+1]);return i}const tm=e=>(x2.add(e),e);function Oe(e,...o){if(Oi(e)||Ni(e))return tm(ro(em(yh,[e,...o])));const i=e;return o.length===0&&i.length===1&&typeof i[0]=="string"?ro(i):tm(ro(em(i,o)))}function Bu(e,o,i=Ca){if(!o)throw Di(1,o);const s=(l,...d)=>e(o,i,Oe(l,...d));return s.attrs=l=>Bu(e,o,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)})),s.withConfig=l=>Bu(e,o,Object.assign(Object.assign({},i),l)),s}const $2=e=>Bu(f$,e),f=$2;m$.forEach(e=>{f[e]=$2(e)});class g${constructor(o,i){this.instanceRules=new Map,this.rules=o,this.componentId=i,this.isStatic=(function(s){for(let l=0;l<s.length;l+=1){const d=s[l];if(Oi(d)&&!kh(d))return!1}return!0})(o),Fi.registerId(this.componentId)}removeStyles(o,i){this.instanceRules.delete(o),this.rebuildGroup(i)}renderStyles(o,i,s,l){const d=this.componentId;if(this.isStatic){if(s.hasNameForId(d,d+o))this.instanceRules.has(o)||this.computeRules(o,i,s,l);else{const p=this.computeRules(o,i,s,l);s.insertRules(d,p.name,p.rules)}return}const h=this.instanceRules.get(o);if(this.computeRules(o,i,s,l),!s.server&&h){const p=h.rules,g=this.instanceRules.get(o).rules;if(p.length===g.length){let x=!0;for(let y=0;y<p.length;y++)if(p[y]!==g[y]){x=!1;break}if(x)return}}this.rebuildGroup(s)}computeRules(o,i,s,l){const d=Al(ro(this.rules,i,s,l)),h={name:this.componentId+o,rules:l(d,"")};return this.instanceRules.set(o,h),h}rebuildGroup(o){const i=this.componentId;o.clearRules(i);for(const s of this.instanceRules.values())o.insertRules(i,s.name,s.rules)}}function M2(e,...o){const i=Oe(e,...o),s=`sc-global-${bh(JSON.stringify(i))}`,l=new g$(i,s),d=p=>{const g=S2(),x=pn.useContext(Ch);let y;{const w=pn.useRef(null);w.current===null&&(w.current=g.styleSheet.allocateGSInstance(s)),y=w.current}g.styleSheet.server&&h(y,p,g.styleSheet,x,g.stylis);{const w=l.isStatic?[y,g.styleSheet,l]:[y,p,g.styleSheet,x,g.stylis,l],k=pn.useRef(l);pn.useLayoutEffect(()=>{g.styleSheet.server||(k.current!==l&&(g.styleSheet.clearRules(s),k.current=l),h(y,p,g.styleSheet,x,g.stylis))},w),pn.useLayoutEffect(()=>()=>{g.styleSheet.server||l.removeStyles(y,g.styleSheet)},[y,g.styleSheet,l])}return g.styleSheet.server&&l.instanceRules.delete(y),null};function h(p,g,x,y,w){if(l.isStatic)l.renderStyles(p,NS,x,w);else{const k=Object.assign(Object.assign({},g),{theme:u2(g,y,d.defaultProps)});l.renderStyles(p,k,x,w)}}return pn.memo(d)}var R2;class v${constructor(o,i){this[R2]=!0,this.inject=(s,l=Fu)=>{const d=this.getName(l);if(!s.hasNameForId(this.id,d)){const h=l(this.rules,d,"@keyframes");s.insertRules(this.id,d,h)}},this.name=o,this.id=d2+o,this.rules=i,bi(this.id),_h(this,()=>{throw Di(12,String(this.name))})}getName(o=Fu){return o.hash?this.name+wh(+o.hash>>>0):this.name}}function _e(e,...o){const i=Al(Oe(e,...o)),s=bh(i);return new v$(s,i)}R2=y2;const N2=[{workforce_type:"Healthcare / Clinical Staffing",company:{name:"Favorite Healthcare Staffing",founded:1981,parent:"Acacium Group",market_position:"Top-10 US healthcare staffing firm",footprint:"US, Europe, Australia"},worker_types:["Per diem","Travel","Contract / temp-to-perm","Permanent / direct hire"],talent_categories:["Nursing (RN/LPN/CNA)","Allied Health","Non-Clinical","Advanced Practice","Emergency Response"],client_types:["Hospitals","Acute care systems","Surgery centers","Senior living / long-term care","School-based settings"],service_models:["MSP","VMS","Float pool management","Human Capital Management"],tech_footprint:["Worker ATS","Client portal (FMS)","Affiliate vendor portal","Worker mobile app (time/pay)"],access_model:["Workers","Clients","Affiliate vendors"],compliance:["Joint Commission","Credentialing","Immunization tracking","OSHA","Facility-specific training"],narrative:[{label:"Business",body:"Healthcare staffing with per diem, travel, contract, and permanent placements — plus MSP and vendor management programs. I've set up scheduling and pay structures for each, with room for client facilities and affiliate vendors, not just workers.",tags:["Per diem","Travel","Contract","Permanent","MSP / VMS"]},{label:"Workforce",body:"RNs, CNAs, LPNs, allied health, advanced practice, and non-clinical roles — nationwide, 24/7, and mobile-first. Shifts, timecards, and urgent fills all work from a phone.",tags:["RN / LPN / CNA","Allied health","Advanced practice","Non-clinical"]},{label:"Compliance",body:"Credentialing is core to how you operate. I'm tracking licenses across states, compact nursing licenses included, with expirations covered.",tags:["Credentialing","Compact licenses","Immunizations","Joint Commission"]}],configured:["Scheduling for per diem, travel, contract, and permanent placements","Credentials and licenses tracked with expirations — compact nursing included","Access for client facilities and affiliate vendors, not just workers","Shifts, timecards, and urgent fills from a phone"]},{workforce_type:"Skilled Trades / Construction Labor",company:{name:"BuildForce Trades Group",founded:1998,parent:null,market_position:"Regional trades staffing leader (Mountain West)",footprint:"US Southwest & Mountain West"},worker_types:["Day labor","Project contract","Union dispatch","Direct hire"],talent_categories:["Electricians","Welders / pipefitters","Carpenters","HVAC techs","Heavy equipment operators","General laborers"],client_types:["General contractors","Industrial plants","Commercial developers","Utilities","Municipal / public works"],service_models:["Project-based staffing","Payroll / W-2 hosting","Union hall dispatch coordination","Safety compliance management"],tech_footprint:["Dispatch board","Client project portal","Field clock-in mobile app","Certification tracker"],access_model:["Tradesworkers","Contractors / site supers","Union reps"],compliance:["OSHA 10/30","Trade licensing","Drug screening","Right-to-work / E-Verify","Site safety orientation"],narrative:[{label:"Business",body:"Skilled trades staffing across the Mountain West — day labor, project contracts, union dispatch, and direct hire. I've set up project-based scheduling with payroll hosting and union dispatch coordination built in, since a two-day pour and a six-month build don't run the same way.",tags:["Day labor","Project contract","Union dispatch","Direct hire"]},{label:"Workforce",body:"Electricians, welders, carpenters, HVAC techs, and heavy equipment operators working job sites, not desks. Dispatch, field clock-ins, and timecards all work from a phone.",tags:["Electricians","Welders","Carpenters","HVAC","Equipment operators"]},{label:"Compliance",body:"Nobody steps on a site without the right cards. I'm tracking OSHA 10/30, trade licenses, and drug screens with expirations covered, and E-Verify is built into onboarding.",tags:["OSHA 10/30","Trade licenses","Drug screening","E-Verify"]}],configured:["Project-based scheduling with union dispatch coordination","Payroll hosting for W-2 placements","OSHA 10/30 and trade licenses tracked with expirations","Field clock-ins and timecards from a phone"]},{workforce_type:"Warehouse / Logistics & Light Industrial",company:{name:"PalletPoint Workforce",founded:2011,parent:"Everline Labor Holdings",market_position:"High-volume light industrial staffing",footprint:"US national, distribution-corridor focused"},worker_types:["Temp (shift)","Temp-to-hire","Seasonal surge","Direct placement"],talent_categories:["Pickers / packers","Forklift operators","Machine operators","Sortation associates","Inventory / cycle count","Shift leads"],client_types:["3PL warehouses","E-commerce fulfillment","Manufacturers","Cold storage","Distribution centers"],service_models:["On-site managed staffing","Volume ramp / peak season","Vendor-on-premise (VOP)","Payroll processing"],tech_footprint:["Shift scheduling app","Client headcount dashboard","Kiosk / badge clock-in","Attendance & reliability scoring"],access_model:["Associates","Warehouse managers","On-site coordinators"],compliance:["Forklift certification (PIT)","I-9 / E-Verify","Safety training","Background check","Workers' comp classification"],narrative:[{label:"Business",body:"High-volume light industrial staffing — shift temps, temp-to-hire, and seasonal surge across 3PLs, fulfillment centers, and cold storage. I've set up shift-based scheduling that ramps headcount for peak season without breaking your regular fills.",tags:["Shift temps","Temp-to-hire","Seasonal surge","On-site managed"]},{label:"Workforce",body:"Pickers, packers, forklift operators, and sortation associates running around the clock. Badge and kiosk clock-ins feed attendance and reliability scoring, so no-shows surface before a client feels them.",tags:["Pickers / packers","Forklift operators","Sortation","Shift leads"]},{label:"Operations",body:"Your clients buy filled shifts, so I'm tracking fill rates and check-ins per site and keeping billing tied to verified hours. Forklift certifications and I-9s are tracked with expirations covered.",tags:["Fill rates","Site check-ins","Forklift certs","I-9 / E-Verify"]}],configured:["Shift scheduling that ramps headcount for peak season","Attendance and reliability scoring from badge clock-ins","Fill rates and check-ins tracked per site — billing tied to verified hours","Forklift certifications and I-9s tracked with expirations"]},{workforce_type:"Security / Guarding Services",company:{name:"Sentinel Guard Solutions",founded:1996,parent:null,market_position:"Contract security & manned guarding provider",footprint:"US national, metro & industrial sites"},worker_types:["Post assignment (regular)","Flex / relief pool","Event / short-term detail","Direct hire"],talent_categories:["Unarmed guards","Armed guards","Mobile patrol officers","Console / CCTV operators","Event security","Site supervisors"],client_types:["Commercial real estate","Industrial / manufacturing sites","Retail / malls","Healthcare campuses","Residential communities","Special events"],service_models:["Managed guarding contract","Post scheduling & coverage","Mobile patrol routes","Payroll & billing reconciliation","Post-order management"],tech_footprint:["Guard scheduling / post board","Client incident portal","GPS tour / checkpoint app","Incident reporting system"],access_model:["Guards / officers","Client site contacts","Field supervisors / dispatch"],compliance:["State guard license / registration","Armed permit & firearms qualification","Background check & fingerprinting","Drug screening","Post-specific training / SOPs"],narrative:[{label:"Business",body:"Contract security and manned guarding — regular posts, flex relief, mobile patrol routes, and event details. I've set up post-based scheduling alongside patrol routes, since a fixed post and a rolling route don't run the same way.",tags:["Fixed posts","Flex relief","Mobile patrol","Event details"]},{label:"Workforce",body:"Armed and unarmed guards, patrol officers, console operators, and site supervisors across metro and industrial sites. Armed and unarmed posts carry different pay rates, so I've structured pay by post type.",tags:["Armed guard","Unarmed guard","Console / CCTV","Site supervisors"]},{label:"Operations",body:"Your reputation runs on every post being covered and no ghost billing — so I'm tracking check-ins against scheduled posts, verifying who's actually on-site, and keeping billing tied to verified hours. Guard licenses and firearms qualifications are tracked with expirations covered.",tags:["Post check-ins","Verified hours","Guard licenses","Firearms quals"]}],configured:["Post-based scheduling alongside patrol routes and event details","Pay rates by post type — armed vs. unarmed","On-site check-ins tied to billing — no ghost shifts","Guard licenses and firearms qualifications tracked with expirations"]},{workforce_type:"Home Care / In-Home Support",company:{name:"Hearthside Home Care",founded:2009,parent:null,market_position:"Non-medical & skilled in-home care agency",footprint:"US regional, franchise-based"},worker_types:["Per visit / hourly","Live-in","On-call pool","Direct hire"],talent_categories:["Home health aides (HHA)","Certified nursing assistants (CNA)","Personal care aides (PCA)","Companions / homemakers","Skilled nurses (RN/LPN)","Care coordinators"],client_types:["Private-pay families","Medicaid / waiver programs","Managed care / insurers","Hospice partners","Assisted living referrals"],service_models:["Managed care scheduling","EVV-compliant visit management","Care plan administration","Payroll & claims billing","Family communication portal"],tech_footprint:["Caregiver visit / EVV mobile app","Family / client portal","Scheduling & matching system","Care plan & notes dashboard"],access_model:["Caregivers","Clients / family members","Care coordinators / case managers"],compliance:["State caregiver certification (HHA/CNA)","EVV (Electronic Visit Verification)","Background check & abuse registry","TB test / health screening","HIPAA & care plan compliance"],narrative:[{label:"Business",body:"In-home care spanning private-pay families, Medicaid waiver programs, and hospice partners. I've set up visit-based scheduling with care plans attached, since a live-in placement and an hourly visit don't run the same way.",tags:["Private pay","Medicaid / waiver","Hospice partners","Live-in"]},{label:"Workforce",body:"HHAs, CNAs, PCAs, companions, and skilled nurses working in clients' homes, matched to care plans. Visits, notes, and clock-ins all work from a phone.",tags:["HHA","CNA","PCA","Skilled nurses"]},{label:"Compliance",body:"EVV isn't optional in your world, so every clock-in doubles as visit verification and your Medicaid billing holds up. Caregiver certifications, TB screenings, and background checks are tracked with expirations covered.",tags:["EVV","Certifications","TB screening","Abuse registry"]}],configured:["Visit-based scheduling with care plans attached","EVV-compliant clock-ins on every visit — Medicaid billing holds up","Access for families and care coordinators, not just caregivers","Caregiver certifications and screenings tracked with expirations"]},{workforce_type:"Agriculture / Seasonal Labor",company:{name:"Harvest Field Labor Co.",founded:2e3,parent:null,market_position:"Seasonal agricultural & H-2A labor provider",footprint:"US agricultural regions (CA, PNW, Southeast)"},worker_types:["Seasonal / harvest crew","H-2A guest worker","Day labor","Crew lead / foreman"],talent_categories:["Field harvesters / pickers","Packing house workers","Irrigation / field techs","Equipment operators","Crew leaders","Grading / sorting staff"],client_types:["Farms & orchards","Packing / processing facilities","Vineyards","Nurseries / greenhouses","Agricultural co-ops"],service_models:["Seasonal crew staffing","H-2A program administration","Transportation & housing coordination","Piece-rate & payroll processing","Farm labor contractor (FLC) services"],tech_footprint:["Crew / field dispatch app","Grower headcount portal","Piece-rate / harvest tracking","Compliance document tracker"],access_model:["Field workers","Growers / farm managers","Crew leaders / foremen"],compliance:["H-2A / visa documentation","I-9 / work authorization","Farm Labor Contractor (FLC) license","Field sanitation & heat illness (OSHA/Cal-OSHA)","Piece-rate & minimum wage compliance"],narrative:[{label:"Business",body:"Seasonal agricultural labor with H-2A program administration — harvest crews, packing houses, and everything the season demands. I've set up crew-based scheduling with piece-rate pay built in, since a harvest crew and an hourly packing shift don't pay the same way.",tags:["Harvest crews","H-2A program","Packing houses","Piece-rate"]},{label:"Workforce",body:"Field harvesters, packing workers, equipment operators, and crew leaders who move with the season. Crews dispatch by field and report through their crew leader, all from a phone.",tags:["Harvesters","Packing workers","Equipment operators","Crew leaders"]},{label:"Compliance",body:"H-2A paperwork can sink a season, so I'm tracking visa documentation, work authorizations, and your FLC license with expirations covered. Piece-rate records stay reconciled against minimum wage automatically.",tags:["Visa docs","FLC license","Heat illness / OSHA","Wage compliance"]}],configured:["Crew-based scheduling with piece-rate pay built in","Piece-rate records reconciled against minimum wage automatically","H-2A visa documentation and FLC license tracked with expirations","Field dispatch through crew leaders, from a phone"]},{workforce_type:"Hospitality / Events Staffing",company:{name:"Grand Table Hospitality Staff",founded:2003,parent:null,market_position:"Premium events & F&B staffing",footprint:"Major US metro markets"},worker_types:["Per event / gig","On-call pool","Seasonal","Direct hire"],talent_categories:["Servers / banquet staff","Bartenders","Line / prep cooks","Housekeeping","Front desk / concierge","Event captains"],client_types:["Hotels & resorts","Catering companies","Convention centers","Restaurants","Private / corporate events"],service_models:["Event-based staffing","On-call pool management","Managed F&B labor","Payroll & tip reconciliation"],tech_footprint:["Gig scheduling app","Client event booking portal","Geo clock-in / out","Rating & rebooking system"],access_model:["Staff / gig workers","Event planners / venue managers","Agency dispatchers"],compliance:["Food handler / alcohol service permits","I-9 / work authorization","Uniform & appearance standards","Minor labor law (if applicable)","Tip credit / wage compliance"],narrative:[{label:"Business",body:"Premium events and F&B staffing — per-event gigs, on-call pools, and seasonal placements across hotels, caterers, and venues. I've set up event-based scheduling with tip reconciliation built into pay, since a gala and a hotel shift don't settle the same way.",tags:["Per-event gigs","On-call pool","Seasonal","Tip reconciliation"]},{label:"Workforce",body:"Servers, bartenders, cooks, housekeepers, and event captains working a different venue every week. Geo clock-ins confirm who is actually on-site, and your top-rated staff surface first for rebooking.",tags:["Servers","Bartenders","Cooks","Event captains"]},{label:"Operations",body:"Your clients remember who showed up polished and on time — so I'm tracking check-ins per event and keeping billing tied to verified hours. Food handler and alcohol service permits are tracked with expirations covered.",tags:["Geo clock-ins","Event check-ins","Food handler","Alcohol permits"]}],configured:["Event-based scheduling with tip reconciliation built into pay","Geo clock-ins tied to billing per event","Top-rated staff surface first for rebooking","Food handler and alcohol service permits tracked with expirations"]},{workforce_type:"Call Center / BPO Staffing",company:{name:"Vantage Contact Solutions",founded:2012,parent:null,market_position:"Contact center & back-office BPO staffing",footprint:"US + offshore (Philippines, LatAm), remote & site-based"},worker_types:["Temp (campaign)","Temp-to-hire","Seasonal surge","Direct hire","Remote / WFH agent"],talent_categories:["Inbound agents","Outbound / sales agents","Customer support reps","Technical support","Back-office / data entry","Team leads / QA"],client_types:["Telecom / utilities","Retail / e-commerce","Financial services","Healthcare payers","SaaS / tech support","Government programs"],service_models:["Campaign-based staffing","Managed contact center program","Ramp / seasonal surge","WFM (workforce management) support","Payroll & performance reporting"],tech_footprint:["Agent scheduling / WFM tool","Client program dashboard","Remote clock-in & activity monitor","QA / performance scorecards"],access_model:["Agents","Client program managers","Team leads / site supervisors"],compliance:["Background check","I-9 / work authorization","PCI-DSS (payment handling)","HIPAA (healthcare campaigns)","Data security & remote-work policy"],narrative:[{label:"Business",body:"Contact center and back-office BPO staffing, campaign by campaign — inbound, outbound, and data entry, on-site and offshore. I've set up campaign-based scheduling that handles surge ramps and time zones from the Philippines to LatAm.",tags:["Campaign staffing","Surge ramps","On-site + remote","Offshore"]},{label:"Workforce",body:"Agents, technical support reps, and team leads split between sites and work-from-home. Remote clock-ins and activity tracking keep a distributed floor visible without hovering.",tags:["Inbound agents","Outbound / sales","Tech support","Team leads / QA"]},{label:"Compliance",body:"Your campaigns touch payments and health data, so I'm tracking PCI and HIPAA requirements per campaign, not just per worker. Background checks and I-9s are covered, with expirations tracked.",tags:["PCI-DSS","HIPAA","Background checks","I-9"]}],configured:["Campaign-based scheduling across sites, time zones, and surge ramps","Remote clock-ins and activity tracking for work-from-home agents","PCI and HIPAA requirements tracked per campaign","Background checks and I-9s tracked with expirations"]}],x$=[["favorite","health","care","clinic","nurse","nursing","medical","med","rn","lpn","cna","hospital","hospice","allied","acacium","patient"],["build","trade","construct","electric","weld","pipefit","carpenter","hvac","contractor","mason","plumb","union","skilled","labor"],["warehouse","logistic","pallet","fulfillment","distribution","forklift","3pl","industrial","sortation","freight","supply"],["security","guard","sentinel","patrol","protect","protection","surveillance","cctv","safe"],["home","hearth","inhome","homecare","caregiver","companion","pca","hha","senior","elder"],["harvest","farm","field","agri","agriculture","orchard","crop","grower","vineyard","seasonal","h2a","produce"],["hospitality","event","grand","table","catering","banquet","hotel","resort","restaurant","server","bartender","concierge","venue"],["call","contact","bpo","vantage","center","telecom","agent","callcenter","support","outsource"]];function y$(e){const o=e.trim().toLowerCase().replace(/\s+/g,""),i=/^https?:\/\//.test(o)?o:`https://${o}`;try{return new URL(i).hostname.replace(/^www\./,"")}catch{return o}}function w$(e){let o=0;for(let i=0;i<e.length;i+=1)o=o*31+e.charCodeAt(i)>>>0;return o%N2.length}function b$(e){const o=y$(e);let i=-1,s=0;return x$.forEach((l,d)=>{const h=l.reduce((p,g)=>o.includes(g)?p+1:p,0);h>s&&(s=h,i=d)}),N2[i>=0?i:w$(o)]}const Nt=(e,o,i)=>Math.max(o,Math.min(i,e)),Cr=e=>(e=Nt(e,0,1),e*e*(3-2*e)),oo=e=>e>=48?1:e>=32?1.2:e>=24?1.5:e>=20?1.85:2.3;function dn(e){const o=Math.sin(e*127.1+311.7)*43758.5453;return o-Math.floor(o)}function Hu(e){const o=(e||"#96B9FF").replace("#",""),i=parseInt(o.length===3?o.split("").map(s=>s+s).join(""):o,16);return(i>>16&255)+","+(i>>8&255)+","+(i&255)}function al(e,o,i){let s=i.trim();const l=s.match(/var\(\s*(--[^,)]+)/);if(l&&(s=getComputedStyle(o).getPropertyValue(l[1]).trim()||s),s.startsWith("#"))return Hu(s);e.fillStyle="#000",e.fillStyle=s;const d=e.fillStyle;if(d.startsWith("#"))return Hu(d);const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:"26,30,38"}function k$(){const[e,o]=v.useState(0);return v.useEffect(()=>{var d;const i=()=>o(h=>h+1);let s;try{s=window.matchMedia("(prefers-color-scheme: dark)")}catch{}(d=s==null?void 0:s.addEventListener)==null||d.call(s,"change",i);const l=new MutationObserver(i);return l.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),()=>{var h;(h=s==null?void 0:s.removeEventListener)==null||h.call(s,"change",i),l.disconnect()}},[]),e}function _$(e){const[o,i,s]=e.split(",").map(Number);return(.299*o+.587*i+.114*s)/255}function C$(e,o){return e==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:e==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:o,glow:!0}:e==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:o,glow:!0}}const Co=["234,54,38","246,112,44","252,172,54","255,212,76"],j$="176,58,32",S$="198,158,52";function Xn(e,o,i){const s=e.split(",").map(Number),l=o.split(",").map(Number);return s.map((d,h)=>Math.round(d+(l[h]-d)*i)).join(",")}function kr(e,o,i){if(!(e!=null&&e.length))return i;if(e.length===1)return e[0];const s=Nt(o,0,1)*(e.length-1),l=Math.floor(s),d=Math.min(e.length-1,l+1);return Xn(e[l],e[d],s-l)}function ao(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,p=d/2,x=Math.min(l,d)*.39*.2*(.9+.14*Math.sin(o*1.5)),y=e.size<24,w=Nt(e.alert??0,0,1),k=(C,j)=>C+(j-C)*w,R=.85+.15*Math.sin(o*2.2);if(!y&&e.coreHalo){if(s.save(),i.glow&&w<1){s.globalAlpha=1-w;const C=s.createRadialGradient(h,p,0,h,p,x*3);C.addColorStop(0,"rgba("+kr(e.corePalette,.42,i.core)+",0.55)"),C.addColorStop(1,"rgba("+kr(e.corePalette,.86,i.accent)+",0)"),s.fillStyle=C,s.beginPath(),s.arc(h,p,x*3,0,6.2832),s.fill()}else if(!i.glow){const C=x*k(3.2,3),j=s.createRadialGradient(h,p,0,h,p,C);j.addColorStop(0,"rgba("+Xn(kr(e.corePalette,.35,i.core),Co[1],w)+","+k(.34,.85*R)+")"),j.addColorStop(.5,"rgba("+Xn(kr(e.corePalette,.68,i.core),Co[2],w)+","+k(.13,.42*R)+")"),j.addColorStop(1,"rgba("+Xn(kr(e.corePalette,1,i.core),Co[3],w)+",0)"),s.fillStyle=j,s.beginPath(),s.arc(h,p,C,0,6.2832),s.fill()}s.restore()}const S=i.glow?1:.95,_=Math.max(.8,x*k(1,1.5)),$=x*.1*w;s.save(),s.filter="blur("+Math.max(.4,x*k(.22,.3)).toFixed(2)+"px)";const M=s.createRadialGradient(h-$,p-$,0,h,p,_);M.addColorStop(0,"rgba("+Xn(kr(e.corePalette,.08,i.core),Co[0],w)+","+k(S,1)+")"),M.addColorStop(.5,"rgba("+Xn(kr(e.corePalette,.42,i.core),Co[1],w)+","+k(S,1)+")"),M.addColorStop(.82,"rgba("+Xn(kr(e.corePalette,.72,i.core),Co[2],w)+","+k(S,.97)+")"),M.addColorStop(1,"rgba("+Xn(kr(e.corePalette,1,i.core),Co[3],w)+","+k(S,.72)+")"),s.fillStyle=M,s.beginPath(),s.arc(h,p,_,0,6.2832),s.fill(),s.restore()}function L2(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,p=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=[[1.35,.3],[1.05,2.4]],w=o*(x?.5:.16),k=.42,R=Math.cos(k),S=Math.sin(k),_=Math.cos(w),$=Math.sin(w),M=g*.96,C=(F,G,Y)=>{const W=F*_+Y*$,K=-F*$+Y*_,J=G,ae=J*R-K*S,se=(J*S+K*R+1)/2,Q=.82+.18*se;return{x:h+W*M*Q,y:p+ae*M*Q,d:se}},j=(F,G,Y)=>{const W=Math.cos(F),K=Math.sin(F)*Math.cos(G),J=Math.sin(F)*Math.sin(G);return[W*Math.cos(Y)+J*Math.sin(Y),K,-W*Math.sin(Y)+J*Math.cos(Y)]};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round",s.lineJoin="round";const D=e.size>=24?64:40,N=x?.9:.3,L=D,E=5.6,A=[];for(let F=0;F<y.length;F++){const G=y[F][0],Y=y[F][1],W=ae=>{const ce=j(ae,G,Y);return C(ce[0],ce[1],ce[2])},K=F%2?1:-1,J=F*2+K*o*N;A.push({ptOf:W,head:J,dir:K,hp:W(J)})}A.sort((F,G)=>F.hp.d-G.hp.d);for(const F of A){const G=Math.max(1.2,g*.05)*(.75+.35*F.hp.d),Y=.66*(.45+.55*F.hp.d);s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=G;let W=F.ptOf(F.head);for(let ae=1;ae<=L;ae++){const ce=ae/L,se=1-ce,Q=Y*se*se,O=F.ptOf(F.head-F.dir*ce*E);Q>.004&&(s.strokeStyle="rgba("+i.dot+","+Q+")",s.beginPath(),s.moveTo(W.x,W.y),s.lineTo(O.x,O.y),s.stroke()),W=O}s.restore();const K=Math.max(.9,g*.062*oo(e.size)*(.65+.5*F.hp.d)),J=.45+.55*F.hp.d;if(i.glow){const ae=s.createRadialGradient(F.hp.x,F.hp.y,0,F.hp.x,F.hp.y,K*4.5);ae.addColorStop(0,"rgba("+i.accent+","+.3*J+")"),ae.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ae,s.beginPath(),s.arc(F.hp.x,F.hp.y,K*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,J+.1)+")",s.beginPath(),s.arc(F.hp.x,F.hp.y,K,0,6.2832),s.fill()}ao(e,o,i),s.restore()}function $$(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,p=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=[g*.92],w=y.length,k=1,R=x?.9:.3,S=e.size>=24?56:36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let _=0;_<w;_++){const $=y[_],M=_%2?1:-1,C=6.2832/k,j=Math.min(5.6,C*.92);for(let D=0;D<k;D++){const N=_*2+M*o*R+D*C,L=h+Math.cos(N)*$,E=p+Math.sin(N)*$;s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=Math.max(1.2,g*.05);let A=L,F=E;for(let Y=1;Y<=S;Y++){const W=Y/S,K=.62*(1-W)*(1-W),J=N-M*W*j,ae=h+Math.cos(J)*$,ce=p+Math.sin(J)*$;K>.004&&(s.strokeStyle="rgba("+i.dot+","+K+")",s.beginPath(),s.moveTo(A,F),s.lineTo(ae,ce),s.stroke()),A=ae,F=ce}s.restore();const G=Math.max(.9,g*.062*oo(e.size));if(i.glow){const Y=s.createRadialGradient(L,E,0,L,E,G*4.5);Y.addColorStop(0,"rgba("+i.accent+",0.3)"),Y.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=Y,s.beginPath(),s.arc(L,E,G*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+",1)",s.beginPath(),s.arc(L,E,G,0,6.2832),s.fill()}}ao(e,o,i),s.restore()}function nm(e,o,i){const{ctx:s,w:l,h:d,dpr:h}=e,p=l/2,g=d/2,x=Math.min(l,d)*.39,y=e.state!=="idle",w=Nt(e.alert??0,0,1),k=x*.82,R=(O,q)=>Xn(i.dot,Xn(j$,S$,Nt(Math.hypot(O-p,q-g)/k,0,1)),w),S=e.size>=120,_=S?22:e.size>=32?10:e.size>=20?7:5,$=y?o*.55:o*.22,M=Math.cos($),C=Math.sin($),j=.42,D=Math.cos(j),N=Math.sin(j);if(s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",S&&i.glow){const O=s.createRadialGradient(p,g,0,p,g,x*1.02);O.addColorStop(0,"rgba("+i.accent+",0.10)"),O.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=O,s.beginPath(),s.arc(p,g,x*1.02,0,6.2832),s.fill()}const L=[];for(let O=0;O<_;O++){const q=1-(O+.5)/_*2,T=Math.sqrt(Math.max(0,1-q*q)),z=O*2.39996,te=Math.cos(z)*T,U=q,X=Math.sin(z)*T,le=te*M+X*C,B=-te*C+X*M,P=U*D-B*N,oe=U*N+B*D,fe=(oe+1)/2,de=.82+.18*fe;L.push({x:p+le*k*de,y:g+P*k*de,d:fe,k:O,vec:[le,P,oe]})}L.sort((O,q)=>O.d-q.d);const E=O=>{const q=(O[2]+1)/2,T=.82+.18*q;return{x:p+O[0]*k*T,y:g+O[1]*k*T,d:q}},A=(O,q,T)=>{let z=O[0]*q[0]+O[1]*q[1]+O[2]*q[2];z=Nt(z,-1,1);const te=Math.acos(z);if(te<.001)return[O[0],O[1],O[2]];const U=Math.sin(te),X=Math.sin((1-T)*te)/U,le=Math.sin(T*te)/U;return[O[0]*X+q[0]*le,O[1]*X+q[1]*le,O[2]*X+q[2]*le]},F={};for(const O of L)F[O.k]=O;const Y=o*(y?1.4:.5),W=Math.floor(Y),K=Y-W,J=5,ae=12;s.lineCap="round",s.lineJoin="round";const ce=[1.7,9.3,21.5,34.8,48.2],se=Nt(Math.round(e.streamCount??(S?5:4)),0,ce.length),Q=ce.slice(0,se).map(O=>({seed:O}));for(const O of Q){const q=z=>{const te=Math.sin(z*12.9898+O.seed)*43758.5453;return Math.floor((te-Math.floor(te))*_)},T=z=>{let te=q(z);return te===q(z-1)&&(te=(te+1)%_),F[te]};for(let z=J-1;z>=0;z--){const te=W-z;if(te<0)continue;const U=T(te),X=T(te+1);if(!U||!X||U===X)continue;const le=z===0?K:1,B=E(A(U.vec,X.vec,le)),P=(U.d+B.d)/2,oe=z===0?1:Nt(1-(z-1+K)/(J-1),0,1),fe=(i.glow?.6:.72)*oe*(.4+.6*P);if(fe<.02)continue;const de=s.createLinearGradient(U.x,U.y,B.x,B.y);de.addColorStop(0,"rgba("+R(U.x,U.y)+",0)"),de.addColorStop(1,"rgba("+R(B.x,B.y)+","+fe+")"),s.strokeStyle=de,s.lineWidth=(S?Math.max(1.1*h,x*.018):Math.max(1.2,x*.045))*(.7+.4*P),s.beginPath();for(let xe=0;xe<=ae;xe++){const we=E(A(U.vec,X.vec,le*(xe/ae)));xe===0?s.moveTo(we.x,we.y):s.lineTo(we.x,we.y)}s.stroke()}}for(const O of L){const q=.5+.5*Math.sin(o*2-O.k*.9),T=(.18+.82*O.d)*(.62+.38*q),z=S?Math.max(.5,(.9+.9*O.d)*h*(.85+.15*q)):x*.058*oo(e.size)*(.6+.5*O.d);if(i.glow){const te=z*4,U=s.createRadialGradient(O.x,O.y,0,O.x,O.y,te);U.addColorStop(0,"rgba("+i.accent+","+.24*T+")"),U.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=U,s.beginPath(),s.arc(O.x,O.y,te,0,6.2832),s.fill()}s.fillStyle="rgba("+R(O.x,O.y)+","+(.32+.68*T)+")",s.beginPath(),s.arc(O.x,O.y,Math.max(.9,z),0,6.2832),s.fill()}S&&jh(e,o,i,R),ao(e,o,i),s.restore()}function jh(e,o,i,s){const{ctx:l,w:d,h,dpr:p}=e,g=d/2,x=h/2,y=Math.min(d,h)*.39,k=e.state!=="idle"?1:.4;for(let R=0;R<46;R++){const S=dn(R*5.1)<.5?-1:1,_=dn(R*1.7)*6.2832+o*(.3+dn(R*3.1)*.6)*S*k,$=y*(.04+.05*dn(R*4.7))*Math.sin(o*(.8+dn(R*6)*1)+dn(R*7)*6.28),M=y*(.5+dn(R*2.3)*.5)+$,C=g+Math.cos(_)*M,j=x+Math.sin(_)*M,D=.3+.7*(.5+.5*Math.sin(o*(1.4+dn(R)*2)+dn(R*2)*6.28)),N=Math.max(.5,(.4+dn(R*8)*1)*p*(.55+.6*D));if(i.glow){const L=N*6,E=l.createRadialGradient(C,j,0,C,j,L);E.addColorStop(0,"rgba("+i.accent+","+D*.18+")"),E.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=E,l.beginPath(),l.arc(C,j,L,0,6.2832),l.fill()}l.fillStyle="rgba("+s(C,j)+","+D*(i.glow?.8:.42)+")",l.beginPath(),l.arc(C,j,N,0,6.2832),l.fill()}}function M$(e,o,i){const{ctx:s,w:l,h:d,dpr:h}=e,p=l/2,g=d/2,x=Math.min(l,d)*.39,y=e.state!=="idle",w=e.size>=32?11:7,k=x*.12,R=x*.12,S=Cr(.5+.5*Math.sin(o*(y?1:.55))),_=y?.34+.66*S:.5+.12*S,$=Math.max(1*h,x*.052),M=-o*(y?.5:.16),C=Math.cos(M),j=Math.sin(M),D=.42,N=Math.cos(D),L=Math.sin(D);s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round";const E=x*(.52+.44*_),A=Math.max(k+$,E-R),F=[];for(let G=0;G<w;G++){const Y=1-(G+.5)/w*2,W=Math.sqrt(Math.max(0,1-Y*Y)),K=G*2.39996,J=Math.cos(K)*W,ae=Y,ce=Math.sin(K)*W,se=J*C+ce*j,Q=-J*j+ce*C,O=ae*N-Q*L,T=(ae*L+Q*N+1)/2,z=.82+.18*T,te=.5+.5*Math.sin(o*1.6+G*1.3);F.push({x0:p+se*k*z,y0:g+O*k*z,x1:p+se*A*z,y1:g+O*A*z,cx2:p+se*E*z,cy2:g+O*E*z,d:T,shim:te})}F.sort((G,Y)=>G.d-Y.d);for(const G of F){const Y=(y?.4+.45*_:.6)*(.4+.6*G.d)*(.78+.22*G.shim),W=s.createLinearGradient(G.x0,G.y0,G.x1,G.y1);W.addColorStop(0,"rgba("+i.dot+","+Y+")"),W.addColorStop(1,"rgba("+i.accent+",0)"),s.strokeStyle=W,s.lineWidth=$*(.7+.5*G.d),s.beginPath(),s.moveTo(G.x0,G.y0),s.lineTo(G.x1,G.y1),s.stroke();const K=Math.max(.9,x*.058*oo(e.size)*(.85+.3*_)*(.6+.5*G.d));if(i.glow){const J=s.createRadialGradient(G.cx2,G.cy2,0,G.cx2,G.cy2,K*5);J.addColorStop(0,"rgba("+i.accent+","+.26*Y+")"),J.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=J,s.beginPath(),s.arc(G.cx2,G.cy2,K*5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,Y+.1)+")",s.beginPath(),s.arc(G.cx2,G.cy2,K,0,6.2832),s.fill()}e.size>=120&&jh(e,o,i,()=>i.dot),ao(e,o,i),s.restore()}function R$(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,p=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=e.size>=32?58:e.size>=20?32:18,w=g*.78,k=x?o*.5:o*.2,R=Math.cos(k),S=Math.sin(k),_=.42,$=Math.cos(_),M=Math.sin(_),C=x?1:.4,j=(W,K)=>[Math.sin(W)*Math.cos(K),Math.cos(W),Math.sin(W)*Math.sin(K)],D=[j(1.4+.5*Math.sin(o*.5*C),o*.6*C),j(1.9+.4*Math.cos(o*.4*C),-o*.5*C+2)],N=.36,L=e.cellCount==null?y:Nt(Math.round(e.cellCount),0,y);let E=null,A=null;(L<y||e.cellBirths)&&(A=Array.from({length:y},(W,K)=>K).sort((W,K)=>dn(W)-dn(K)),E=new Array(y),A.forEach((W,K)=>{E[W]=K}));const F=.7,G=.16;if(A&&e.cellBirths&&e.emergeNow!=null){let W=0;for(let K=0;K<L;K++){const J=A[K];e.cellBirths.has(J)||e.cellBirths.set(J,e.emergeNow+W++*G)}}s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";const Y=[];for(let W=0;W<y;W++){let K=1;if(E){if(E[W]>=L)continue;if(e.cellBirths){const P=e.cellBirths.get(W);if(P==null||(K=Cr(((e.emergeNow??P+F)-P)/F),K<=.001))continue}}const J=1-(W+.5)/y*2,ae=Math.sqrt(Math.max(0,1-J*J)),ce=W*2.39996,se=Math.cos(ce)*ae*K,Q=J*K,O=Math.sin(ce)*ae*K;let q=0;for(const P of D){const oe=se-P[0],fe=Q-P[1],de=O-P[2];q+=Math.exp(-(oe*oe+fe*fe+de*de)/(2*N*N))}q=Nt(q,0,1);const T=se*R+O*S,z=-se*S+O*R,te=Q*$-z*M,X=(Q*M+z*$+1)/2,le=.82+.18*X;let B=i.dot;if(e.dotPalette&&e.dotPalette.length){const oe=(ce/6.2832+(J+1)*.07+1)%1*e.dotPalette.length,fe=Math.floor(oe)%e.dotPalette.length,de=(fe+1)%e.dotPalette.length;B=Xn(e.dotPalette[fe],e.dotPalette[de],oe-Math.floor(oe))}Y.push({x:h+T*w*le,y:p+te*w*le,d:X,inf:q,g:K,color:B})}Y.sort((W,K)=>W.d-K.d);for(const W of Y){const K=Cr(W.inf),J=Math.max(.6,g*(.05+.06*K)*oo(e.size)*(.55+.5*W.d))*(.35+.65*W.g),ae=(.16+.84*W.d)*(.45+.55*K)*W.g,ce=1-(1-Math.abs(2*W.d-1))*W.g,se=Math.atan2(W.y-p,W.x-h);s.fillStyle="rgba("+W.color+","+ae+")",s.beginPath(),s.ellipse(W.x,W.y,Math.max(.35,J*ce),J,se,0,6.2832),s.fill()}ao(e,o,i),s.restore()}function N$(e,o,i,s){const{ctx:l,w:d,h,dpr:p}=e,g=d/2,x=h/2,y=Math.min(d,h)*.39,w=e.state!=="idle",k=Cr(Nt(s/.55,0,1)),R=Cr(Nt((s-.3)/.4,0,1)),S=Cr(Nt((s-.5)/.5,0,1)),_=e.size>=32?11:7,$=y*.12,M=y*.12,C=Cr(.5+.5*Math.sin(o*(w?1:.55))),j=w?.34+.66*C:.5+.12*C,D=Math.max(1*p,y*.052),N=-o*(w?.5:.16),L=Math.cos(N),E=Math.sin(N),A=.42,F=Math.cos(A),G=Math.sin(A),Y=y*(.52+.44*j),W=Math.max($+D,Y-M),K=[];for(let B=0;B<_;B++){const P=1-(B+.5)/_*2,oe=Math.sqrt(Math.max(0,1-P*P)),fe=B*2.39996,de=Math.cos(fe)*oe,xe=P,we=Math.sin(fe)*oe,Ce=de*L+we*E,Me=-de*E+we*L,Pe=xe*F-Me*G,We=(xe*G+Me*F+1)/2,Ae=.82+.18*We,Qe=.5+.5*Math.sin(o*1.6+B*1.3);K.push({x0:g+Ce*$*Ae,y0:x+Pe*$*Ae,x1:g+Ce*W*Ae,y1:x+Pe*W*Ae,cx2:g+Ce*Y*Ae,cy2:x+Pe*Y*Ae,d:We,shim:Qe,ux:de,uy:xe,uz:we})}l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",l.lineCap="round";const J=[...K].sort((B,P)=>B.d-P.d);for(const B of J){const P=(w?.4+.45*j:.6)*(.4+.6*B.d)*(.78+.22*B.shim);if(S>.001){const oe=B.x0+(B.x1-B.x0)*S,fe=B.y0+(B.y1-B.y0)*S,de=l.createLinearGradient(B.x0,B.y0,B.x1,B.y1);de.addColorStop(0,"rgba("+i.dot+","+P*S+")"),de.addColorStop(1,"rgba("+i.accent+",0)"),l.strokeStyle=de,l.lineWidth=D*(.7+.5*B.d),l.beginPath(),l.moveTo(B.x0,B.y0),l.lineTo(oe,fe),l.stroke()}if(R>.001){const oe=Math.max(.9,y*.058*oo(e.size)*(.85+.3*j)*(.6+.5*B.d));if(i.glow){const fe=l.createRadialGradient(B.cx2,B.cy2,0,B.cx2,B.cy2,oe*5);fe.addColorStop(0,"rgba("+i.accent+","+.26*P*R+")"),fe.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=fe,l.beginPath(),l.arc(B.cx2,B.cy2,oe*5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+Math.min(1,P+.1)*R+")",l.beginPath(),l.arc(B.cx2,B.cy2,oe*(.6+.4*R),0,6.2832),l.fill()}}const ae=e.size>=32?58:e.size>=20?32:18,ce=y*.78,se=w?o*.5:o*.2,Q=Math.cos(se),O=Math.sin(se),q=w?1:.4,T=(B,P)=>[Math.sin(B)*Math.cos(P),Math.cos(B),Math.sin(B)*Math.sin(P)],z=[T(1.4+.5*Math.sin(o*.5*q),o*.6*q),T(1.9+.4*Math.cos(o*.4*q),-o*.5*q+2)],te=.36,U=e.cellCount==null?ae:Nt(Math.round(e.cellCount),0,ae);let X=null;if(U<ae){const B=Array.from({length:ae},(P,oe)=>oe).sort((P,oe)=>dn(P)-dn(oe));X=new Array(ae),B.forEach((P,oe)=>{X[P]=oe})}const le=1-R;if(le>.001||k<1){const B=[];for(let P=0;P<ae;P++){if(X&&X[P]>=U)continue;const oe=1-(P+.5)/ae*2,fe=Math.sqrt(Math.max(0,1-oe*oe)),de=P*2.39996,xe=Math.cos(de)*fe,we=oe,Ce=Math.sin(de)*fe;let Me=0,Pe=-2;for(let Be=0;Be<_;Be++){const tt=xe*K[Be].ux+we*K[Be].uy+Ce*K[Be].uz;tt>Pe&&(Pe=tt,Me=Be)}const qe=K[Me];let We=0;for(const Be of z){const tt=xe-Be[0],Dt=we-Be[1],Xe=Ce-Be[2];We+=Math.exp(-(tt*tt+Dt*Dt+Xe*Xe)/(2*te*te))}We=Nt(We,0,1);const Ae=xe*Q+Ce*O,Qe=-xe*O+Ce*Q,Ze=we*F-Qe*G,De=(we*G+Qe*F+1)/2,ve=.82+.18*De,Le=g+Ae*ce*ve,it=x+Ze*ce*ve;B.push({x:Le+(qe.cx2-Le)*k,y:it+(qe.cy2-it)*k,d:De+(qe.d-De)*k,inf:We,f:(1-(1-Math.abs(2*De-1)))*(1-k)+1*k})}B.sort((P,oe)=>P.d-oe.d);for(const P of B){const oe=Cr(P.inf),fe=Math.max(.6,y*(.05+.06*oe)*oo(e.size)*(.55+.5*P.d)),de=(.16+.84*P.d)*(.45+.55*oe)*le;if(de<=.003)continue;const xe=Math.atan2(P.y-x,P.x-g);l.fillStyle="rgba("+i.dot+","+de+")",l.beginPath(),l.ellipse(P.x,P.y,Math.max(.35,fe*P.f),fe,xe,0,6.2832),l.fill()}}e.size>=120&&S>.001&&(l.globalAlpha=S,jh(e,o,i,()=>i.dot),l.globalAlpha=1),ao(e,o,i),l.restore()}function L$(e,o,i){const{ctx:s,w:l,h:d}=e,h=l/2,p=d/2,g=Math.min(l,d)*.39,x=e.state!=="idle",y=e.size>=32?8:e.size>=20?6:5,w=g*.9,k=x?1:.4,R=o*(x?.3:.12),S=o*1*k,_=-o*.7*k+2.2,$=.72,M=(C,j)=>{const D=((C-j+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(D)};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let C=0;C<y;C++){const j=C/y*6.2832+R;let D=Math.exp(-(M(j,S)**2)/(2*$*$))+Math.exp(-(M(j,_)**2)/(2*$*$));D=Nt(D,0,1);const N=Cr(D),L=h+Math.cos(j)*w,E=p+Math.sin(j)*w,A=Math.max(.6,g*(.05+.07*N)*oo(e.size)),F=.38+.62*N;if(i.glow&&N>.25){const G=s.createRadialGradient(L,E,0,L,E,A*4);G.addColorStop(0,"rgba("+i.accent+","+.24*N+")"),G.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=G,s.beginPath(),s.arc(L,E,A*4,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+F+")",s.beginPath(),s.arc(L,E,A,0,6.2832),s.fill()}ao(e,o,i),s.restore()}function A$(e,o,i){ao(e,o,i)}const T$={orbit:L2,orbit2d:$$,circle:nm,lines:M$,magnetic:R$,magnetic2d:L$,pulse:A$,bands:nm};function st({mark:e="orbit",size:o=16,tone:i="auto",state:s="active",motionSpeed:l=1,accent:d="#96B9FF",color:h,dotPalette:p,corePalette:g,coreHalo:x=!0,coreGradient:y=!1,streamCount:w,cellCount:k,className:R,"aria-label":S}){const _=v.useRef(null),$=k$(),M=v.useRef(0),C=v.useRef(0);C.current=y?1:0;const j=v.useRef(new Map),D=v.useRef(null),N=v.useRef(0);return v.useEffect(()=>{const L=_.current;if(!L)return;const E=L.getContext("2d");if(!E)return;const A=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),F=Math.min(2,window.devicePixelRatio||1),G=Math.max(2,Math.round(o*F)),Y=G;L.width=G,L.height=Y;const W={ctx:E,w:G,h:Y,dpr:F,size:o,state:s,coreHalo:x,alert:M.current,streamCount:w,cellCount:k,cellBirths:k!=null&&!A&&s!=="static"?j.current:void 0},K=i==="auto"?_$(al(E,L,"var(--color-bg-primary)"))<.5?"dark":"light":i,J=C$(K,Hu(d));if(W.dotPalette=h||p==null?void 0:p.map(te=>al(E,L,te)),W.corePalette=h||g==null?void 0:g.map(te=>al(E,L,te)),h){const te=al(E,L,h);J.dot=te,J.core=te}const ae=T$[e]??L2,ce=1.15,se=e==="lines"?1:0,Q=e==="lines"||e==="magnetic";(D.current==null||!Q||A||s==="static")&&(D.current=se);const O=te=>{if(M.current+=(C.current-M.current)*.06,Math.abs(M.current-C.current)<.001&&(M.current=C.current),W.alert=M.current,W.emergeNow=performance.now()/1e3,Q&&D.current!==se){const le=W.emergeNow,B=Nt(le-(N.current||le),0,.1);N.current=le;const P=se>(D.current??0)?1:-1;D.current=Nt((D.current??0)+P*B/ce,0,1)}else N.current=W.emergeNow;E.clearRect(0,0,G,Y);const U=s==="static"?.62:te,X=D.current??se;Q&&X>.001&&X<.999?N$(W,U,J,X):ae(W,U,J)},q=Nt(l,.4,3);if((A||s==="static")&&(M.current=C.current),O(1.15),A||s==="static")return;let T=0;const z=te=>{O(te/1e3*q),T=requestAnimationFrame(z)};return T=requestAnimationFrame(z),()=>cancelAnimationFrame(T)},[e,o,i,s,l,d,h,p,g,x,y,w,k,$]),n.jsx("canvas",{ref:_,width:o,height:o,style:{width:o,height:o,display:"block",flexShrink:0},className:R,role:"img","aria-label":S})}const ja={high:0,medium:1,low:2,none:3};f.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function rc(e){return e.status==="resolved"||e.status==="auto_resolved"||e.status==="workflow_available"?"green":e.status==="analyzing"?"slate":e.status==="in_progress"||e.status==="monitoring"?"blue":e.severity==="high"?"orange":"slate"}f.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;function E$(e,o){if(o)return"Ultron is replying…";switch(e){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const A2=e=>e.status==="workflow_available"||e.status==="resolved"&&e.workflowOpportunity!=null,T2=e=>/^(review|adjust|revisit|update)\b/i.test(e),I$=["Revisit","Update","Resolve"],P$=e=>/,|\sand\s/.test(e),z$="Approve all",Tl="Yes",E2=e=>{const i=e.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(s=>s.trim()).filter(Boolean);return i.length<2?[]:i.map(s=>s.charAt(0).toUpperCase()+s.slice(1))};f.section`
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
`;function D$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function O$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function F$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function B$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function H$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function W$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),n.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),n.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function I2({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function U$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),n.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function q$({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function V$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function Lo({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function G$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function Y$({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function P2({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function rm({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}const om=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],Sa={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},z2={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function D2(e){const o=z2[e];return o?[o.role,o.shiftTime,o.location].filter(Boolean).join(" · "):""}function O2(e){const o=Sa[e.id];if(!o||e.title.startsWith(o))return e.title;const i=e.title.split(" ")[0]??"",l=i===i.toUpperCase()?e.title:e.title.charAt(0).toLowerCase()+e.title.slice(1);return`${o} ${l}`}const F2={missed_clockin_james:"james_okoro_2"},Sh=e=>`https://i.pravatar.cc/80?u=${F2[e]??e}`,Aa=e=>`https://i.pravatar.cc/80?u=${F2[e]??e}`,K$={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},Q$=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],B2=e=>K$[e]??Q$,H2={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},am={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reaching out to Carl Jensen…","Reaching out to Tina Boyd…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20,tools:["engage"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0,tools:["engage"]},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reaching out to Gina Holt…","Reaching out to Renata Cruz…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["task","engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},$h={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},Z$={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},Mh={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},X$={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},J$={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},du={detected:e=>e.event,assessment:e=>e.assessment,recommendation:e=>e.recommendation,approval:e=>e.recommendation,execution:e=>e.recommendation,resolution:e=>e.outcome??e.recommendation,monitoring:e=>e.assessment,workflow:e=>e.workflowOpportunity??e.recommendation};function W2(e){const o=i=>i.trim().replace(/[.\s]+$/,"").toLowerCase();return X$[e.id]??e.timeline.map(i=>{var d;const s=((d=du[i.state])==null?void 0:d.call(du,e))??e.assessment,l=s!=null&&o(s)===o(i.headline);return{icon:J$[i.state]??"clock",headline:i.headline,blocks:s&&!l?[{text:s}]:void 0}})}const It=(e,o,i)=>({name:e,match:o,distance:i}),Ke=(e,o,i,s,l,d)=>({seed:e,name:o,preview:i,status:s,tone:l,...d?{conversation:d}:{}}),im=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],eM=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],tM=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],nM=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],U2="An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",jo=e=>({from:"ultron",text:U2,time:e}),rM={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:im,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[It("Jordan Pierce","4.9 match","3.2 mi"),It("Aisha Karim","4.7 match","5.1 mi"),It("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:U2,total:20,threads:[Ke("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive",[jo("1:52 PM"),{from:"them",text:"Yes — I can take the 2pm.",time:"1:54 PM"},{from:"ultron",text:"You’re confirmed for the 2:00 PM ICU shift at Riverside. Check in at the 3rd-floor ICU desk for handoff.",time:"1:54 PM"},{from:"them",text:"On my way. Thanks!",time:"1:55 PM"}]),Ke("priya_nguyen","Priya Nguyen","“Count me in — confirming now.”","Interested","positive",[jo("1:52 PM"),{from:"them",text:"Count me in — confirming now.",time:"1:57 PM"},{from:"ultron",text:"Great — you’re first backup if the 2pm falls through. I’ll ping you the moment another opens.",time:"1:57 PM"},{from:"them",text:"Sounds good.",time:"1:58 PM"}]),Ke("jordan_pierce","Jordan Pierce","“Is this the full ICU wing?”","Chatting","chatting",[jo("1:52 PM"),{from:"them",text:"Is this the full ICU wing or step-down?",time:"1:56 PM"},{from:"ultron",text:"Full ICU wing — 12-hour shift, 2:00 PM start.",time:"1:56 PM"},{from:"them",text:"Checking my childcare, give me a few.",time:"1:59 PM"}]),Ke("marcus_lewis","Marcus Lewis","“Any flex on the start? Could do 2:30.”","Chatting","chatting",[jo("1:52 PM"),{from:"them",text:"Any flex on the start? Could do 2:30.",time:"1:55 PM"},{from:"ultron",text:"Start is fixed at 2:00 for handoff, but I can flag you first for the next opening.",time:"1:55 PM"},{from:"them",text:"Ok — let me see if I can make 2.",time:"1:58 PM"}]),Ke("lena_reyes","Lena Reyes","“What’s the rate on this one?”","Chatting","chatting",[jo("1:52 PM"),{from:"them",text:"What’s the rate on this one?",time:"1:53 PM"},{from:"ultron",text:"$68/hr with the ICU differential included.",time:"1:53 PM"},{from:"them",text:"Tempting — give me an hour to sort a ride.",time:"1:57 PM"}]),Ke("omar_mori","Omar Mori","“Is parking validated?”","Chatting","chatting",[jo("1:52 PM"),{from:"them",text:"Is parking validated at Riverside?",time:"1:54 PM"},{from:"ultron",text:"Yes — validated parking in the north garage.",time:"1:54 PM"},{from:"them",text:"Good to know. Still deciding.",time:"1:56 PM"}]),Ke("devon_diaz","Devon Diaz","“Might be a few min late.”","Chatting","chatting",[jo("1:52 PM"),{from:"them",text:"I’m on shift til 1 — might be a few min late.",time:"1:55 PM"},{from:"ultron",text:"A few minutes is fine if you make handoff by 2:15. Want me to hold it?",time:"1:55 PM"},{from:"them",text:"Yeah, hold it — I’ll confirm by 1:30.",time:"1:59 PM"}])]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:eM,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[It("Renee Wallace","4.9 match","2.4 mi"),It("Carl Jensen","4.6 match","4.1 mi"),It("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[Ke("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),Ke("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),Ke("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:tM,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[It("Dane Mercer","4.8 match","2.1 mi"),It("Omar Reyes","4.6 match","3.7 mi"),It("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[Ke("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),Ke("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),Ke("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:nM,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[It("Jamal Carter","4.7 match","1.8 mi"),It("Sara Lindqvist","4.6 match","2.9 mi"),It("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[Ke("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),Ke("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),Ke("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[It("Theo Park","4.7 match","1.9 mi"),It("Gina Holt","4.5 match","3.3 mi"),It("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[Ke("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[Ke("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),Ke("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),Ke("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[It("Carl Jensen","4.7 match","2.6 mi"),It("Tina Boyd","4.5 match","3.9 mi"),It("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[Ke("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),Ke("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),Ke("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[Ke("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]},task:{description:"Created the CPR renewal task on Nadia’s profile",query:'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task',fields:[{label:"Task",value:"Renew CPR certification"},{label:"Assignee",value:"Nadia Haddad"},{label:"Step",value:"Upload the updated cert"},{label:"Due",value:"Before next gated shift · Thu 7:00 AM"},{label:"Status",value:"Assigned",emphasis:"success-tag"}]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[Ke("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[Ke("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[Ke("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[Ke("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[Ke("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[Ke("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[Ke("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[Ke("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),Ke("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),Ke("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:im,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[Ke("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),Ke("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},oM={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},aM=e=>/in-app/i.test(e)?"in_app":/sms/i.test(e)?"sms":"auto",sm=e=>/in-app/i.test(e)?"In-app":/sms/i.test(e)?"SMS":"Preferred channel",lm=e=>e.split(/\s*\+\s*/).map(o=>o.replace(/\b\w/g,i=>i.toUpperCase())).join(", "),iM={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},Wu=e=>{const[o,...i]=e.split(" "),s=iM[o];return s?`Will ${s} ${i.join(" ")}`:e};function sM(e,o){if(e==="policy"&&o.policy){const l=o.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:l?`Run the shift against ${o.policy.policiesTotal} active scheduling policies and return the ${l.total} ${l.unit}, ranked by match.`:`Run the case against ${o.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const i=e==="engage"?o.engage:e==="engage-offer"?o.engageOffer:void 0;if(i)return{query:`engage.send(channel="${aM(i.name)}", template="shift_offer", to=matched)`,summary:`${Wu(i.description)} — ${i.total} ${i.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const s=e==="notify"?o.notify:e==="notify-scheduler"?o.notifyScheduler:void 0;return s?{query:`engage.notify(to="${s.name}", via="${s.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${Wu(s.description)} (${s.name} · ${s.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function lM(e,o,i,s){var R,S,_,$;if(e==="read"){const M=((R=o.update)==null?void 0:R.recordType)??((S=o.updateClose)==null?void 0:S.recordType);if(!M)return null;const C=M.toLowerCase(),j=[{label:"Type",value:M},{label:"Time",value:((_=z2[s])==null?void 0:_.shiftTime)??""},{label:"User",value:Sa[s]??""},{label:"Clock in",value:""}];return{icon:"read",name:`Read data: ${M}`,description:`Pulled the current ${C} record before planning`,query:`read_data(record="${M}") → current_state`,recordDetails:j,summary:`Read the ${C}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`}}if(e==="match"||e==="credential"||e==="incentive"){const M=($=o.policy)==null?void 0:$.eligible;if(!M)return null;const C=M.unit.replace(/^eligible\s+/i,"");if(e==="match")return{icon:"search",name:"Match Engine",description:`Ranked qualified ${C} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${M.total} ${M.unit}.`};if(e==="credential")return{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."};const j=M.total>=10;return{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${M.total}) → suggestion`,summary:j?"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached.":"Compared against recent last-minute fills — the pool is thin at this notice, so a bonus is recommended to secure the fill.",recommendation:j?{add:!1,amount:"No bonus",rationale:`${M.total} qualified ${C} available — deep enough to fill without an incentive.`}:{add:!0,amount:"$150 / shift",rationale:`Only ${M.total} qualified ${C} available this close to start — a bonus improves the odds of a confirmed fill.`}}}if(e==="task"){if(!o.task)return null;const{description:M,query:C,fields:j}=o.task;return{icon:"task",name:"Tasks",description:M,query:C,task:{fields:j}}}if(e==="update"||e==="update-close"){const M=e==="update"?o.update:o.updateClose;if(!M)return null;const{description:C,...j}=M;return{icon:"record",name:"Update Data",description:C,updateData:j}}const l=e==="notify"||e==="notify-scheduler",d=e==="notify"?o.notify:e==="notify-scheduler"?o.notifyScheduler:void 0,h=e==="engage"?o.engage:e==="engage-offer"?o.engageOffer:void 0;if(!(e==="policy"&&o.policy||!!h||!!d))return null;const g=e==="policy"?"Policy Engine":l?"Engage: Notification":h.name,x=e==="policy"?o.policy.description:l?d.description:h.description,y=e==="policy"?"shield":l?"bell":"message";if(i==="planning"){const M=e==="policy"?x:Wu(x),C={icon:y,name:g,description:M,...sM(e,o)};return l?{...C,channel:lm(d.channel),message:d.message}:h?{...C,channel:sm(h.name),message:h.message}:e==="policy"?{...C,policies:{total:o.policy.policiesTotal,items:o.policy.policies}}:C}if(e==="policy")return{icon:y,name:g,description:x,policies:{total:o.policy.policiesTotal,items:o.policy.policies},eligible:o.policy.eligible};if(h)return{icon:y,name:g,description:x,channel:sm(h.name),message:h.message,threads:{total:h.total,moreNoun:"threads",items:h.threads}};const{description:w,...k}=d;return{icon:y,name:g,description:x,channel:lm(d.channel),notification:k}}function q2(e,o,i="execution"){const s=rM[e];return s?o.map(l=>lM(l,s,i,e)).filter(l=>l!==null):[]}const cM=e=>e.tools??oM[e.icon]??["policy"],il=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function dM(e){return{id:`detected_${e.id}`,name:e.name,title:e.title,capability:e.capability,status:"analyzing",severity:e.severity??"high",event:e.title.endsWith(".")?e.title:`${e.title}.`,assessment:e.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:e.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:e.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const V2={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},cm=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function Rh(e,o){return cm[o%cm.length]}function uM(e){return e===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function hM(e){return e>=90?"green":e>=80?"blue":e>=70?"orange":"slate"}function G2({record:e}){const o=e.meta.find(l=>/^\d+%\s*match$/i.test(l)),i=o?parseInt(o,10):null,s=o?e.meta.filter(l=>l!==o):e.meta;return n.jsxs(pM,{children:[n.jsx(tr,{size:"md",src:Sh(e.avatarSeed),name:e.title,alt:e.title}),n.jsxs(fM,{children:[n.jsx(mM,{children:e.title}),n.jsx(gM,{children:[e.eyebrow,...s].join(" · ")})]}),i!=null&&n.jsxs(vM,{"data-tone":hM(i),children:[i,"% match"]}),n.jsx(Fe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:n.jsx(ah,{size:16})})]})}const pM=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,fM=f.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,mM=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,gM=f.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,vM=f.span`
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
`,dm=e=>e.id.startsWith("detected_"),um=5400,hm=1100;function xM(e,o){switch(o.type){case"detect":return e.some(i=>i.id===o.thread.id)?e:[o.thread,...e];case"decide":return e.map(i=>i.id===o.threadId?{...i,status:"needs_approval"}:i);case"commit":return e.map(i=>i.id===o.threadId?{...i,status:"in_progress"}:i);case"reopen":return e.map(i=>i.id===o.threadId?{...i,status:"needs_approval"}:i);case"resolve":return e.map(i=>i.id===o.threadId?{...i,status:"resolved",outcome:V2[i.id]??i.outcome}:i)}}const yM=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function wM(){const e=v.useMemo(()=>om.filter(U=>U.id!=="shift_drop_maria"),[]),[o,i]=v.useReducer(xM,e),[s,l]=v.useState(()=>{var X;const U=e.find(le=>le.status==="needs_approval"||le.status==="recommended");return(U==null?void 0:U.id)??((X=e[0])==null?void 0:X.id)??null}),[d,h]=v.useState([]),p=U=>{l(U),h(X=>X.includes(U)?X:[...X,U])},g=v.useMemo(()=>{const U=o.map((X,le)=>({item:X,index:le}));return yM.map(X=>({id:X.id,label:X.label,threads:U.filter(le=>X.statuses.includes(le.item.status)).sort((le,B)=>(le.item.status==="analyzing"?1:0)-(B.item.status==="analyzing"?1:0)||(dm(B.item)?1:0)-(dm(le.item)?1:0)||ja[le.item.severity]-ja[B.item.severity]||le.index-B.index).map(le=>le.item)}))},[o]),x=o.find(U=>U.id===s)??null,[y,w]=v.useState({}),k=s?y[s]??0:0,[R,S]=v.useState([]),[_,$]=v.useState({}),[M,C]=v.useState({}),[j,D]=v.useState([]),N=v.useRef({}),[L,E]=v.useState([]),A=U=>{E(X=>X.includes(U)?X.filter(le=>le!==U):[...X,U])},[F,G]=v.useState([]),Y=U=>{G(X=>X.includes(U)?X:[...X,U])},[W,K]=v.useState([]),J=U=>K(X=>X.includes(U)?X:[...X,U]);return{threads:o,groups:g,selectedId:s,selectedThread:x,selectedStage:k,stageById:y,viewedIds:d,analyzedIds:R,outboundByThread:_,chatByThread:M,replyingIds:j,setSelectedId:p,detectRisk:U=>{i({type:"detect",thread:dM(U)})},surfaceDemoThread:U=>{const X=om.find(le=>le.id===U);X&&(i({type:"detect",thread:X}),J(U))},decide:U=>{p(U),S(X=>X.includes(U)?X:[...X,U]),i({type:"decide",threadId:U})},commit:(U,X)=>{p(U),$(le=>({...le,[U]:[...le[U]??[],X]})),i({type:"commit",threadId:U})},completeRun:U=>{const X=y[U]??0,le=$h[U];X===0&&le?(w(B=>({...B,[U]:1})),i({type:"reopen",threadId:U})):(i({type:"resolve",threadId:U}),L.includes(U)&&(Y(U),E(B=>B.filter(P=>P!==U))))},sendMessage:(U,X)=>{const le=X.trim();if(!le)return;p(U),C(P=>({...P,[U]:[...P[U]??[],{role:"operator",text:le}]})),D(P=>P.includes(U)?P:[...P,U]);const B=window.setTimeout(()=>{C(P=>{const oe=P[U]??[],fe=oe.filter(de=>de.role==="ultron").length;return{...P,[U]:[...oe,{role:"ultron",text:Rh(le,fe)}]}}),D(P=>P.filter(oe=>oe!==U)),delete N.current[U]},hm);N.current[U]=B},stopReply:U=>{const X=N.current[U];X&&(window.clearTimeout(X),delete N.current[U]),D(le=>le.filter(B=>B!==U))},refine:U=>{},saveWorkflow:U=>{const X=U.id;p(X),C(B=>({...B,[X]:[...B[X]??[],{role:"operator",text:"Save as workflow"}]})),D(B=>B.includes(X)?B:[...B,X]);const le=window.setTimeout(()=>{C(B=>({...B,[X]:[...B[X]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),Y(X),D(B=>B.filter(P=>P!==X)),delete N.current[X]},hm);N.current[X]=le},pendingWorkflowIds:L,toggleWorkflowSave:A,savedWorkflowIds:F,markWorkflowSaved:Y,revealedNewIds:W,revealNew:J}}const bM={"Acknowledge her":{working:"Acknowledging her",done:"Acknowledged her"},"Add the line item":{working:"Adding the line item",done:"Added the line item"},"Approve Thursday":{working:"Approving Thursday",done:"Approved Thursday"},"Approve for payroll":{working:"Approving for payroll",done:"Approved for payroll"},"Assign a renewal task":{working:"Assigning a renewal task",done:"Assigned a renewal task"},"Assign intake tasks":{working:"Assigning intake tasks",done:"Assigned intake tasks"},"Await his reply":{working:"Awaiting his reply",done:"Got his reply"},"Chase the unconfirmed":{working:"Chasing the unconfirmed",done:"Chased the unconfirmed"},"Claim shift":{working:"Claiming shift",done:"Claimed shift"},"Close the invoice":{working:"Closing the invoice",done:"Closed the invoice"},"Collect confirmations":{working:"Collecting confirmations",done:"Collected confirmations"},"Confirm Sarah Quinn":{working:"Confirming Sarah Quinn",done:"Confirmed Sarah Quinn"},"Confirm alerts":{working:"Confirming alerts",done:"Confirmed alerts"},"Confirm the punch":{working:"Confirming the punch",done:"Confirmed the punch"},"File as a CPR cert":{working:"Filing as a CPR cert",done:"Filed as a CPR cert"},"Fill shift":{working:"Filling shift",done:"Filled shift"},"Fill the Wed shift":{working:"Filling the Wed shift",done:"Filled the Wed shift"},"Flag the 3 shifts at-risk":{working:"Flagging the 3 shifts at-risk",done:"Flagged the 3 shifts at-risk"},"Flag the at-risk shifts":{working:"Flagging the at-risk shifts",done:"Flagged the at-risk shifts"},"Flag the renewal":{working:"Flagging the renewal",done:"Flagged the renewal"},"Follow up":{working:"Following up",done:"Followed up"},"Hold Friday for you":{working:"Holding Friday for you",done:"Held Friday for you"},"Hold for payroll":{working:"Holding for payroll",done:"Held for payroll"},"Invite the top 40 matches":{working:"Inviting the top 40 matches",done:"Invited the top 40 matches"},"Keep standby list":{working:"Keeping standby list",done:"Kept standby list"},"Line up backfills":{working:"Lining up backfills",done:"Lined up backfills"},"Mark Priya qualified":{working:"Marking Priya qualified",done:"Marked Priya qualified"},"Mark the credential verified":{working:"Marking the credential verified",done:"Marked the credential verified"},"Message the best matches":{working:"Messaging the best matches",done:"Messaged the best matches"},"Message the top replacements":{working:"Messaging the top replacements",done:"Messaged the top replacements"},"Message workers to confirm":{working:"Messaging workers to confirm",done:"Messaged workers to confirm"},"Move to the recruiter queue":{working:"Moving to the recruiter queue",done:"Moved to the recruiter queue"},"Notify Sofia":{working:"Notifying Sofia",done:"Notified Sofia"},"Notify scheduler":{working:"Notifying scheduler",done:"Notified scheduler"},"Notify scheduling":{working:"Notifying scheduling",done:"Notified scheduling"},"Notify the location manager":{working:"Notifying the location manager",done:"Notified the location manager"},"Offer to the top matches":{working:"Offering to the top matches",done:"Offered to the top matches"},"Publish the report":{working:"Publishing the report",done:"Published the report"},"Queue readiness summary":{working:"Queueing readiness summary",done:"Queued readiness summary"},"Recalculate the total":{working:"Recalculating the total",done:"Recalculated the total"},"Reconcile the payment":{working:"Reconciling the payment",done:"Reconciled the payment"},"Record the release":{working:"Recording the release",done:"Recorded the release"},"Save draft":{working:"Saving draft",done:"Saved draft"},"Send Luis a welcome":{working:"Sending Luis a welcome",done:"Sent Luis a welcome"},"Send a verification ping":{working:"Sending a verification ping",done:"Sent a verification ping"},"Send a warm intro":{working:"Sending a warm intro",done:"Sent a warm intro"},"Send the birthday note":{working:"Sending the birthday note",done:"Sent the birthday note"},"Text Bianca":{working:"Texting Bianca",done:"Texted Bianca"},"Text James":{working:"Texting James",done:"Texted James"},"Track claims":{working:"Tracking claims",done:"Tracked claims"},"Track responses":{working:"Tracking responses",done:"Tracked responses"},"Update ledger":{working:"Updating ledger",done:"Updated ledger"},"Update the contact":{working:"Updating the contact",done:"Updated the contact"},"Update the roster":{working:"Updating the roster",done:"Updated the roster"},"Update the timesheet":{working:"Updating the timesheet",done:"Updated the timesheet"}};function kM(e,o){const i=bM[e];return!i||o==="plan"?e:o==="done"?i.done:i.working}const _M={search:Ml,read:Ml,message:$i,policy:$o,shield:$o,schedule:$o,analytics:tb,clock:$n,monitor:Pi,bell:$i,record:to,task:$o},CM={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},jM=e=>e.updateData?`Update Data: ${e.updateData.recordType}`:CM[e.icon]??e.name,SM=e=>e.tone==="positive"?"success":e.tone==="chatting"?"info":"neutral",pm={positive:0,chatting:1,muted:2},$M=f(Pg)`
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
`,MM=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,Nh=240;function RM({open:e,onClose:o,title:i="Run details",usage:s}){const[l,d]=v.useState(()=>s.length?"0":""),[h,p]=v.useState(e),[g,x]=v.useState(!1);if(v.useEffect(()=>{if(e){p(!0);let S=0;const _=requestAnimationFrame(()=>{S=requestAnimationFrame(()=>x(!0))});return()=>{cancelAnimationFrame(_),cancelAnimationFrame(S)}}x(!1);const R=setTimeout(()=>p(!1),Nh);return()=>clearTimeout(R)},[e]),!h)return null;const y=s.length,w=`${y} ${y===1?"tool":"tools"} used · tap any to see its query and results`,k=s.map((R,S)=>({entry:R,index:S}));return Ao.createPortal(n.jsxs(FM,{role:"dialog","aria-modal":"true","aria-label":i,children:[n.jsx(BM,{$shown:g,onClick:o}),n.jsxs(HM,{$shown:g,children:[n.jsxs(WM,{children:[n.jsxs(UM,{children:[n.jsx(qM,{children:i}),n.jsx(VM,{children:w})]}),n.jsx(Fe,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:o,children:n.jsx(ba,{size:18})})]}),n.jsxs(GM,{children:[n.jsx(YM,{"aria-hidden":"true"}),n.jsx(Ig,{type:"single",collapsible:!0,value:l,onValueChange:R=>d(typeof R=="string"?R:""),children:k.map(({entry:R,index:S})=>{const _=R.updateData?Ql:_M[R.icon];return n.jsx($M,{value:String(S),label:jM(R),description:R.description,leadingSlot:n.jsx(MM,{"aria-hidden":"true",children:n.jsx(_,{size:18})}),children:n.jsx(KM,{children:n.jsx(NM,{entry:R})})},S)})})]})]})]}),document.body)}function NM({entry:e}){return n.jsxs(n.Fragment,{children:[e.channel&&n.jsxs(Cn,{children:[n.jsx(en,{children:"Channel"}),n.jsx(xm,{children:e.channel})]}),e.message&&n.jsxs(Cn,{children:[n.jsx(en,{children:"Message"}),n.jsx(mm,{children:e.message})]}),e.recordDetails&&n.jsxs(Cn,{children:[n.jsx(en,{children:"Record details"}),n.jsx(uu,{children:e.recordDetails.map((o,i)=>n.jsx(Sn,{size:"sm",label:o.label,trailingSlot:n.jsx(hu,{$success:o.emphasis==="success",$placeholder:!o.value,children:o.value||"???"})},i))})]}),e.policies&&n.jsxs(Cn,{children:[n.jsx(en,{children:`Policies evaluated · ${e.policies.total}`}),n.jsx(lR,{children:e.policies.items.map((o,i)=>n.jsxs(cR,{children:[n.jsx(dR,{"aria-hidden":"true",children:n.jsx(Mn,{size:16})}),n.jsx("span",{children:o})]},i))})]}),e.eligible&&n.jsxs(Cn,{children:[n.jsx(en,{children:`Returned · ${e.eligible.total} ${e.eligible.unit}`}),n.jsx(LM,{candidates:e.eligible.items,total:e.eligible.total,moreNoun:e.eligible.moreNoun})]}),e.threads&&n.jsxs(Cn,{children:[n.jsx(en,{children:`Threads · ${e.threads.total}`}),n.jsx(zM,{threads:e.threads})]}),e.notification&&n.jsxs(n.Fragment,{children:[n.jsxs(Cn,{children:[n.jsx(en,{children:"Recipient"}),n.jsx(uR,{children:n.jsx(Sn,{size:"md",divider:!1,leadingSlot:n.jsx(tr,{size:"sm",src:Aa(e.notification.seed),name:e.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:e.notification.name,description:e.notification.role,trailingSlot:n.jsx(Fe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${e.notification.name}'s profile`,children:n.jsx(Zl,{size:14})})})})]}),n.jsxs(Cn,{children:[n.jsx(en,{children:"Message"}),n.jsx(mm,{children:e.notification.message})]})]}),e.task&&n.jsxs(Cn,{children:[n.jsx(en,{children:"Task"}),n.jsx(uu,{children:e.task.fields.map((o,i)=>n.jsx(Sn,{size:"sm",label:o.label,trailingSlot:o.emphasis==="success-tag"?n.jsx(Mi,{status:"success",size:"sm",children:o.value}):n.jsx(hu,{$success:o.emphasis==="success",$placeholder:!o.value,children:o.value||"???"})},i))})]}),e.updateData&&n.jsxs(Cn,{children:[n.jsx(en,{children:"Record details"}),(e.updateData.groups??[e.updateData.fields??[]]).map((o,i)=>n.jsx(uu,{children:o.map((s,l)=>n.jsx(Sn,{size:"sm",label:s.label,trailingSlot:s.emphasis==="change"&&s.previousValue?n.jsxs(AM,{children:[n.jsx(TM,{children:s.previousValue}),n.jsx(EM,{"aria-hidden":"true",children:"→"}),n.jsx(IM,{children:s.value})]}):s.emphasis==="success-tag"?n.jsx(Mi,{status:"success",size:"sm",children:s.value}):n.jsx(hu,{$success:s.emphasis==="success",$placeholder:!s.value,children:s.value||"???"})},l))},i))]}),e.recommendation&&n.jsxs(Cn,{children:[n.jsx(en,{children:"Recommendation"}),n.jsxs(hR,{children:[n.jsxs(gm,{children:[n.jsx(vm,{children:"Incentive?"}),n.jsx(pR,{$add:e.recommendation.add,children:e.recommendation.add?e.recommendation.amount:"No bonus"})]}),n.jsxs(gm,{children:[n.jsx(vm,{children:"Reason"}),n.jsx(fR,{children:e.recommendation.rationale})]})]})]}),e.query&&n.jsxs(Cn,{children:[n.jsx(en,{children:"Query"}),n.jsx(QM,{children:e.query})]}),e.summary&&n.jsxs(Cn,{children:[n.jsx(en,{children:"What it does"}),n.jsx(xm,{children:e.summary})]})]})}function LM({candidates:e,total:o,moreNoun:i}){var y;const[s,l]=v.useState(!1),d=e.slice(0,3),h=o-d.length,p=parseFloat(((y=d[d.length-1])==null?void 0:y.match)??"4.5"),g=s?Array.from({length:h},(w,k)=>PM(k,p)):[],x=[...d,...g];return n.jsxs(n.Fragment,{children:[n.jsx(Lh,{children:x.map((w,k)=>n.jsx(Sn,{size:"sm",leadingSlot:n.jsx(tr,{size:"sm",src:Aa(w.name),name:w.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:w.name,trailingSlot:n.jsx(JM,{children:`${w.match} · ${w.distance}`})},k))}),h>0&&n.jsx(Y2,{type:"button",onClick:()=>l(w=>!w),"aria-expanded":s,children:s?`Show fewer ${i}`:`+${h} more ${i}`})]})}const Lh=f.div`
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
`,uu=f(Lh)`
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
`,hu=f.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${e=>e.$placeholder?"var(--color-content-disabled)":e.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,AM=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,TM=f.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,EM=f.span`
  color: var(--color-content-tertiary);
`,IM=f.span`
  color: var(--color-success-content);
`,El=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],Il=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function PM(e,o){const i=El[e%El.length],s=Il[(e*7+3)%Il.length],l=Math.max(3,o-(e+1)*.1),d=(4+e*13%90/10).toFixed(1);return{name:`${i} ${s}`,match:`${l.toFixed(1)} match`,distance:`${d} mi`}}const fm=3;function zM({threads:e}){const[o,i]=v.useState(!1),[s,l]=v.useState(null),d=[...e.items].sort((y,w)=>pm[y.tone]-pm[w.tone]),h=Math.max(0,e.total-d.length),p=[...d,...Array.from({length:h},(y,w)=>OM(w))],g=o?p:p.slice(0,fm),x=p.length-fm;return n.jsxs(n.Fragment,{children:[n.jsx(Lh,{children:g.map((y,w)=>{var _;const k=!!((_=y.conversation)!=null&&_.length),R=`${y.name}-${w}`,S=k&&s===R;return n.jsxs(eR,{"data-open":S||void 0,children:[n.jsx(Sn,{size:"md",interactive:k,onClick:k?()=>l(S?null:R):void 0,"aria-expanded":k?S:void 0,leadingSlot:n.jsx(tr,{size:"sm",src:Aa(y.seed),name:y.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:y.name,description:y.preview,trailingSlot:n.jsxs(sR,{children:[n.jsx(Mi,{status:SM(y),size:"sm",children:y.status}),k?n.jsx(tR,{"data-open":S||void 0,children:n.jsx(Bn,{size:16})}):n.jsx(Rn,{size:16})]})}),S&&n.jsx(DM,{messages:y.conversation})]},R)})}),x>0&&n.jsx(Y2,{type:"button",onClick:()=>i(y=>!y),"aria-expanded":o,children:o?`Show fewer ${e.moreNoun}`:`+${x} more ${e.moreNoun}`})]})}function DM({messages:e}){return n.jsx(rR,{children:e.map((o,i)=>n.jsxs(oR,{$from:o.from,children:[n.jsx(aR,{children:o.text}),n.jsx(iR,{children:o.time})]},i))})}function OM(e){const o=El[e%El.length],i=Il[(e*7+3)%Il.length],s=`${o} ${i}`;return{seed:s,name:s,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const FM=f.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,BM=f.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${e=>e.$shown?.45:0};
  transition: opacity ${Nh}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,HM=f.div`
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
  transition: transform ${Nh}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; transform: none; }
`,WM=f.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,UM=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,qM=f.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,VM=f.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,GM=f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,YM=f.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,KM=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,Cn=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;function QM({children:e}){const[o,i]=v.useState(!1),s=()=>{var l;(l=navigator.clipboard)==null||l.writeText(e),i(!0),window.setTimeout(()=>i(!1),1600)};return n.jsxs(ZM,{children:[n.jsx(XM,{children:e}),n.jsx(Fe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":o?"Copied":"Copy query",onClick:s,children:o?n.jsx(Mn,{size:14}):n.jsx(vg,{size:14})})]})}const ZM=f.div`
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
`,XM=f.pre`
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
`,JM=f.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,eR=f.div``,tR=f.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-fast) var(--ease-default);

  &[data-open] {
    transform: rotate(180deg);
    color: var(--color-content-tertiary);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,nR=_e`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`,rR=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3) var(--space-3);
  animation: ${nR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,oR=f.div`
  max-width: 80%;
  align-self: ${e=>e.$from==="them"?"flex-start":"flex-end"};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: ${e=>e.$from==="them"?"var(--color-bg-secondary)":"var(--color-info-fill)"};
  color: ${e=>e.$from==="them"?"var(--color-content-primary)":"var(--color-content-inverse)"};
  /* Squared-off tail corner on the side the bubble is anchored to. */
  border-bottom-${e=>e.$from==="them"?"left":"right"}-radius: var(--radius-xs);
`,aR=f.div`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
`,iR=f.div`
  margin-top: 2px;
  font-size: 10px;
  line-height: 1;
  opacity: 0.65;
  text-align: right;
`,sR=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,Y2=f.button`
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
`,lR=f.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,cR=f.li`
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
`,dR=f.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,mm=f.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,uR=f.div`
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
`,hR=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`,gm=f.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,vm=f.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,pR=f.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${e=>e.$add?"var(--color-success-content)":"var(--color-content-primary)"};
`,fR=f.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,xm=f.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function mR({milestones:e}){return n.jsx(CR,{children:e.map((o,i)=>n.jsx(yR,{milestone:o,last:i===e.length-1},i))})}function Pl({milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,collapsed:l,hideActions:d,running:h,animateIn:p,showConnectors:g,reasoning:x}){return n.jsx(gR,{milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,hideActions:d,running:h,defaultCollapsed:l,animateIn:p,showConnectors:g,reasoning:x})}function gR({milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,hideActions:l,running:d,animateIn:h=!0,showConnectors:p=!0,defaultCollapsed:g=!1,reasoning:x=!1}){const[y,w]=v.useState(!1),S=g||x&&!d?e.length:0,_=S>0,$=_&&!y?S:0,M=e.slice(0,S).map(j=>j.headline).join(" · "),C=e.length>0&&$>=e.length;return n.jsx(SR,{$animate:h,children:n.jsxs(MR,{$compact:C,children:[_&&!y&&n.jsx(bm,{$tight:!0,$last:C,$connected:p,children:n.jsxs(Z2,{type:"button","aria-expanded":y,onClick:()=>w(j=>!j),children:[n.jsx(Cm,{"aria-hidden":"true",children:n.jsx(Rl,{size:16})}),n.jsx(BR,{children:M})]})}),e.slice($).map((j,D)=>{var W,K;const N=$+D,L=d&&typeof i=="number"&&N>i,E=d&&typeof i=="number"&&N===i,A=L?"plan":E?"working":"done",F=!d||typeof i!="number"||N<i-1?"done":N===i-1?"working":"upcoming",G=!!((W=j.progress)!=null&&W.length),Y=N===e.length-1;return n.jsxs(bm,{$tight:!G,$last:Y,$connected:p,children:[p&&!Y&&F!=="upcoming"&&n.jsx(NR,{"aria-hidden":"true",$state:F,$tight:!G,$superseded:g}),n.jsx(Q2,{milestone:j,label:kM(j.headline,A),last:!0,collapsible:!0,placeholder:L,focused:E,startOpen:!d&&y,onCollapse:_&&y&&!E?()=>w(!1):void 0,progressBeat:E?s:void 0,superseded:g,typing:N===o,extra:!L&&((K=j.usage)!=null&&K.length)?n.jsx(xR,{usage:j.usage,title:j.headline}):void 0,icon:x&&!d&&!L?n.jsx(Cm,{"aria-hidden":"true",children:n.jsx(Rl,{size:16})}):n.jsx(K2,{icon:j.icon,loading:o===N||E||d&&typeof i!="number"&&N===e.length-1,placeholder:L,muted:g})})]},N)}),!l&&!d&&n.jsx(ma,{time:cr(e)})]})})}const ym=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function vR(){const[e,o]=v.useState(0);return v.useEffect(()=>{if(e>=ym.length-1)return;const i=setTimeout(()=>o(s=>s+1),3200);return()=>clearTimeout(i)},[e]),n.jsxs(n.Fragment,{children:[ym[e],n.jsxs($R,{"aria-hidden":"true",children:[n.jsx("span",{children:"."}),n.jsx("span",{children:"."}),n.jsx("span",{children:"."})]})]})}function cr(e){const i=581+e.reduce((p,g)=>p+g.headline.length,0)%200,s=Math.floor(i/60)%24,l=i%60,d=s<12?"AM":"PM";return`${s%12===0?12:s%12}:${String(l).padStart(2,"0")} ${d}`}function ma({time:e}){const[o,i]=v.useState(null),s=l=>i(d=>d===l?null:l);return n.jsx(LR,{"data-feedback-actions":!0,children:n.jsxs(X0,{visibility:"always",time:e,children:[n.jsx(km,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":o==="up","data-active":o==="up"||void 0,onClick:()=>s("up"),children:n.jsx(mg,{size:14})}),n.jsx(km,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":o==="down","data-active":o==="down"||void 0,onClick:()=>s("down"),children:n.jsx(gg,{size:14})}),n.jsx(Fe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:n.jsx(Ii,{size:14})})]})})}function xR({usage:e,title:o}){const[i,s]=v.useState(!1);return v.useEffect(()=>{if(!i)return;const l=d=>{d.key==="Escape"&&s(!1)};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[i]),e.length?n.jsxs(AR,{children:[n.jsxs(Fe,{variant:"tertiary",size:"xs",trailingArtwork:n.jsx(Rn,{size:12}),"aria-haspopup":"dialog","aria-expanded":i,onClick:()=>s(!0),children:[e.length," ",e.length===1?"tool":"tools"," used"]}),n.jsx(RM,{open:i,onClose:()=>s(!1),title:o,usage:e})]}):null}function yR({milestone:e,last:o}){return n.jsxs(zR,{children:[n.jsxs(DR,{children:[n.jsx(K2,{icon:e.icon}),!o&&n.jsx(UR,{})]}),n.jsx(Q2,{milestone:e,last:o})]})}function wR({records:e,initial:o=3}){const[i,s]=v.useState(!1),l=i?e:e.slice(0,o),d=e.length-o;return n.jsxs(iN,{children:[l.map((h,p)=>n.jsx(G2,{record:h},p)),d>0&&n.jsx(sN,{type:"button",onClick:()=>s(h=>!h),children:i?"Show less":`Show ${d} more`})]})}function K2({slotRef:e,hidden:o,loading:i,placeholder:s,muted:l}){return s?n.jsx(_m,{ref:e,"aria-hidden":"true",$hidden:o,$placeholder:!0,children:n.jsx(FR,{})}):n.jsx(_m,{ref:e,"aria-hidden":"true",$hidden:o,$loading:i,children:n.jsxs(WR,{viewBox:"0 0 24 24",$loading:i,$muted:l&&!i,children:[n.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),n.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function Q2({milestone:e,label:o,last:i,typing:s,icon:l,collapsible:d=!0,extra:h,placeholder:p,focused:g,progressBeat:x,superseded:y,startOpen:w,onCollapse:k}){var Y,W,K;const R=o??e.headline;if(p)return n.jsx(Sm,{$last:i,$dim:!0,children:n.jsxs(Li,{as:"div",children:[l,n.jsx($m,{children:R})]})});const S=!!((Y=e.blocks)!=null&&Y.length),_=!!h,$=!d||!!e.defaultOpen||!!w,[M,C]=v.useState(null),j=!!k,D=j?!0:M??$,N=d&&(S||_),L=!j&&N&&(!s||!!g),E=L&&!!g&&!!((W=e.progress)!=null&&W.length),A=()=>C(()=>!D),F=S&&(j||!d||D),G=_&&(j||!d||D);return n.jsxs(Sm,{$last:i,children:[n.jsxs(Li,{as:j||N?"button":"div",type:j||N?"button":void 0,$interactive:j||L,"aria-expanded":j?!0:L?D:void 0,onClick:j?k:L?A:void 0,children:[l,n.jsx($m,{$focused:!!g,children:R}),L&&!g&&n.jsx(qR,{"data-open":D||void 0,"aria-hidden":"true",children:n.jsx(Rn,{size:14})})]}),(K=e.progress)!=null&&K.length?n.jsx(YR,{$indent:!!l,children:n.jsxs(VR,{children:[E&&n.jsx(GR,{type:"button","aria-expanded":D,"aria-label":D?"Hide details":"Show details",onClick:A,children:D?n.jsx(ph,{size:16}):n.jsx($a,{size:16})}),n.jsx(kR,{steps:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,live:!!(s||g),beat:x,superseded:y,showAvatars:D||s||g})]})}):null,F&&n.jsx(nN,{$indent:!!l,children:e.blocks.map((J,ae)=>n.jsxs(rN,{children:[J.text&&n.jsx(oN,{children:s?n.jsx(Ah,{text:J.text}):J.text}),J.label&&n.jsx(aN,{children:J.label}),J.bullets&&n.jsx(lN,{children:J.bullets.map((ce,se)=>n.jsx("li",{children:ce},se))}),J.checks&&n.jsx(cN,{children:J.checks.map((ce,se)=>n.jsxs("li",{children:[n.jsx(dN,{"aria-hidden":"true"}),n.jsx("span",{children:ce})]},se))}),J.records&&n.jsx(wR,{records:J.records})]},ae))}),G&&n.jsx(TR,{$indent:!!l,children:h})]})}const bR=1350;function kR({steps:e,avatars:o,avatarsOnSettle:i,reached:s,live:l,showAvatars:d,beat:h,superseded:p}){const g=e.length-1,x=typeof h=="number",[y,w]=v.useState(l?0:g),k=v.useRef(l);v.useEffect(()=>{l&&!k.current&&(k.current=!0,w(0))},[l]),v.useEffect(()=>{if(x||!k.current||y>=g)return;const $=setTimeout(()=>w(M=>Math.min(M+1,g)),bR);return()=>clearTimeout($)},[y,g,x]),v.useEffect(()=>{typeof h=="number"&&w(Math.min(h,g))},[h,g]);const R=typeof h=="number"?Math.min(h,g):y,S=R>=g,_=S&&!l;return n.jsxs(KR,{children:[n.jsx(ZR,{$done:_,$live:l,$superseded:p,"aria-live":"polite",children:l?n.jsx(Ah,{text:e[R],caret:!1,speed:26}):e[R]},R),d&&(i?S:S||l)&&(o!=null&&o.length)?n.jsx(_R,{seeds:o,total:s}):null]})}const wm=90;function _R({seeds:e,total:o,max:i=5}){const s=e.slice(0,i),l=Math.max(o??0,e.length),d=l-s.length;return n.jsxs(XR,{"aria-label":`${l} people reached`,children:[s.map((h,p)=>n.jsx(JR,{style:{zIndex:s.length-p,animationDelay:`${p*wm}ms`},children:n.jsx(tr,{size:"sm",src:Aa(h),name:h,alt:""})},h)),d>0&&n.jsxs(eN,{"aria-hidden":"true",style:{animationDelay:`${s.length*wm}ms`},children:["+",d]})]})}const CR=f.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,jR=_e`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,oc=Oe`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,SR=f.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${jR} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${e=>e.$animate===!1&&"animation: none;"}

  ${oc}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,$R=f.span``,MR=f.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. The top padding
     is constant so the first row (the collapse toggle) holds its vertical position
     when the group opens/closes — expanding no longer nudges the accordion down.
     Only the bottom padding tightens for a fully-folded (superseded) recap line. */
  padding-top: var(--space-3);
  padding-bottom: ${e=>e.$compact?"var(--space-1)":"var(--space-3)"};
`,bm=f.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${e=>e.$last?"0":e.$connected?e.$tight?"var(--space-3)":"var(--space-5)":e.$tight?"0":"var(--space-3)"};
`,RR=_e`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,NR=f.span`
  position: absolute;
  /* Centered on the 32px icon column. */
  left: calc(var(--space-8) / 2);
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
        animation: ${RR} 1.25s linear infinite;
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
`,LR=f.div`
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
`,AR=f.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,TR=f.div`
  padding-top: var(--space-2);
  padding-left: ${e=>e.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,km=f(Fe)`
  &[data-active] { color: var(--color-content-brand); }
`;function Ah({text:e,onDone:o,speed:i=30,caret:s=!0}){const[l,d]=v.useState(0);v.useEffect(()=>{d(0)},[e]),v.useEffect(()=>{if(l>=e.length)return;const p=setTimeout(()=>d(g=>g+1),i);return()=>clearTimeout(p)},[l,e,i]);const h=l>=e.length;return v.useEffect(()=>{h&&(o==null||o())},[h]),n.jsxs(n.Fragment,{children:[e.slice(0,l),s&&n.jsx(IR,{$blink:h,"aria-hidden":"true"}),!h&&n.jsx(PR,{"aria-hidden":"true",children:e.slice(l)})]})}const ER=_e`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,IR=f.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${e=>e.$blink?ER:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,PR=f.span`
  opacity: 0;
`,zR=f.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,DR=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,_m=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${e=>e.$hidden?"hidden":"visible"};
`,OR=_e`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,FR=f.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${OR} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Z2=f.button`
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
`,X2=Oe`
  color: var(--color-content-disabled);

  @media (prefers-color-scheme: dark) {
    color: var(--color-content-tertiary);
  }

  :root.light & { color: var(--color-content-disabled); }
  :root.dark  & { color: var(--color-content-tertiary); }
`,Cm=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  ${X2}
`,BR=f.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  ${X2}
  line-height: var(--line-height-snug);
  /* Keep the folded-steps recap to a single line — long summaries truncate. */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color var(--duration-base) var(--ease-out);

  /* Declared after recapTone so it outranks the theme rules on a specificity
     tie — hover always goes to full contrast, in either theme. */
  ${Z2}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,HR=_e`
  to { transform: rotate(360deg); }
`,jm=56.5,WR=f.svg`
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
    stroke-dasharray: ${jm};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${e=>e.$loading?jm*.7:0};
    stroke: ${e=>e.$loading?"var(--color-content-tertiary)":e.$muted?"transparent":"var(--color-success-fill)"};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${HR} 2s linear infinite;
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
`,UR=f.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,Sm=f.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${e=>e.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,Li=f.div`
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
`,$m=f.span`
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

  ${Li}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,qR=f.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  opacity: 0;
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-default);
  ${Li}:hover &,
  ${Li}:focus-visible &,
  &[data-open] { opacity: 1; }
  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,VR=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,GR=f.button`
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
`,YR=f.div`
  padding-left: ${e=>e.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,KR=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
`,QR=_e`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,ZR=f.div`
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
    animation: ${QR} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,XR=f.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,J2=_e`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,JR=f.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${J2} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,eN=f.span`
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
  animation: ${J2} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,tN=_e`
  from { opacity: 0; }
  to   { opacity: 1; }
`,nN=f.div`
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
  animation: ${tN} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,rN=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,oN=f.p`
  margin: 0;
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,aN=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,iN=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,sN=f.button`
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
`,lN=f.ul`
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
`,cN=f.ul`
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
`,dN=f.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function uN({size:e=20}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:n.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const hN=160,ev=v.forwardRef(function({onSend:o,working:i=!1,onStop:s,placeholder:l="Message Ultron…",compact:d=!1},h){const[p,g]=v.useState(""),x=v.useRef(null),y=p.trim().length>0;v.useImperativeHandle(h,()=>({focus:()=>{var _;return(_=x.current)==null?void 0:_.focus()}}),[]);const w=()=>{const _=x.current;_&&(_.style.height="auto",_.style.height=`${Math.min(_.scrollHeight,hN)}px`)},k=()=>{!y||i||(o(p),g(""),requestAnimationFrame(()=>{const _=x.current;_&&(_.style.height="auto")}))},R=_=>{_.preventDefault(),k()},S=_=>{_.key==="Enter"&&!_.shiftKey&&(_.preventDefault(),k())};return n.jsxs(pN,{onSubmit:R,$compact:d,children:[n.jsx(fN,{ref:x,rows:1,value:p,placeholder:l,"aria-label":"Message Ultron",$compact:d,onChange:_=>{g(_.target.value),w()},onKeyDown:S}),i?n.jsx(Mm,{$float:!0,type:"button",variant:"primary",size:d?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:s,children:n.jsx(uN,{size:d?16:20})}):n.jsx(Mm,{type:"submit",variant:"primary",size:d?"xs":"sm",iconOnly:!0,disabled:!y,"aria-label":"Send message",children:n.jsx(Yl,{size:d?14:18})})]})}),pN=f.form`
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
`,fN=f.textarea`
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
`,Mm=f(Fe)`
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
`,Rm=450;function Th(e,o){var S;const i=e.status==="needs_approval"||e.status==="recommended",s=i||e.status==="unresolved"||e.status==="monitoring",l=$h[e.id],d=o===1&&!!l,h=d?l.prompt:H2[e.id]??e.recommendation,p=d?l.record:Z$[e.id],g=p?Array.isArray(p)?p:[p]:[],x=e.status==="unresolved"?I$:d?l.actions:e.actions,y=i&&(!d&&(((S=Mh[e.id])==null?void 0:S.length)??0)>1||P$(h)),w=y?z$:x[x.length-1],k=y?[]:x.slice(0,-1),R=A2(e);return{needsDecision:i,actionable:s,onFollowUp:d,followUp:l,prompt:h,records:g,primaryLabel:w,secondaryLabels:k,purple:R}}function Nm({thread:e,stage:o,expanded:i,detachActionable:s,detachAnalyzing:l,detachTrail:d,onToggle:h,onClose:p,onDecide:g,onAction:x,onRefinement:y,onSaveWorkflow:w}){const[k,R]=v.useState(!1),[S,_]=v.useState(!1),{actionable:$,prompt:M,records:C,primaryLabel:j,purple:D}=Th(e,o),L=e.status==="analyzing"&&!l,E=e.status==="resolved"||e.status==="auto_resolved",A=!s&&($||D),F=E&&!d,G=s?L:$||L||A,Y=i&&(G||F),W=rc(e),J=D2(e.id)||(Y?"":e.assessment),ae=ce=>{T2(ce)?y(ce):x(e.id,ce)};return n.jsxs($N,{"data-tone":W,$expanded:i,children:[n.jsxs(AN,{children:[n.jsxs(EN,{type:"button","aria-expanded":Y,"aria-label":Y?"Collapse case":"Expand case",onClick:h,children:[n.jsx(tr,{size:"md",src:Sh(e.id),name:Sa[e.id],alt:Sa[e.id]??""}),n.jsxs(iv,{children:[n.jsx(sv,{children:O2(e)}),J&&n.jsx(lv,{children:J})]})]}),n.jsx(TN,{variant:"ghost",size:p?"sm":"xs",iconOnly:!0,"aria-label":p?"Open record":Y?"Collapse case":"Expand case",tabIndex:p?void 0:-1,onClick:p??h,children:p?n.jsx(Zl,{size:20}):Y?n.jsx(Rl,{size:16}):n.jsx(ph,{size:16})})]}),Y&&F&&n.jsx(IN,{children:n.jsx(PN,{children:n.jsx(mR,{milestones:W2(e)})})}),Y&&G&&n.jsxs(zN,{children:[$&&!s&&n.jsx(ac,{children:M}),$&&!s&&C.length>0&&n.jsx(JN,{children:C.map((ce,se)=>n.jsx(G2,{record:ce},se))}),L&&n.jsx(cv,{role:"status","aria-live":"polite",children:n.jsx(xN,{thread:e,onDecide:g})}),A&&n.jsxs(Eh,{children:[$&&j&&n.jsx(Mo,{variant:"primary",size:"sm",onClick:()=>ae(Tl),children:Tl}),$&&n.jsx(Mo,{variant:"tertiary",size:"sm",onClick:()=>y("No"),children:"No"}),$&&n.jsx(pv,{variant:"tertiary",size:"sm","data-selected":S||void 0,onClick:()=>{_(!0),y("Other")},children:"Other"}),D&&(k?n.jsx(Fe,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(Mn,{size:14}),children:"Saved"}):n.jsx(Fe,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(Lo,{size:14}),onClick:()=>{w(e),R(!0)},children:"Save as workflow"}))]})]})]})}function Lm({text:e,speed:o=16,onDone:i,instant:s=!1}){const[l,d]=v.useState(!1);return v.useEffect(()=>{d(!1)},[e]),v.useEffect(()=>{s&&(i==null||i())},[s]),s||l?n.jsx(n.Fragment,{children:e}):n.jsx(Ah,{text:e,speed:o,onDone:()=>{d(!0),i==null||i()}})}function tv({thread:e,stage:o,onAction:i,onRefinement:s,onSaveWorkflow:l,saved:d=!1,saveIntent:h=!1,onToggleSaveWorkflow:p,savedConversationally:g=!1,onSend:x,replying:y=!1,onStop:w,flat:k=!1}){const R=d||h,[S,_]=v.useState(!1),[$,M]=v.useState(!1),[C]=v.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),[j,D]=v.useState(!1),[N,L]=v.useState(!1),E=v.useRef(null);v.useEffect(()=>{var q;N&&((q=E.current)==null||q.focus())},[N]);const A=d||g||j,{actionable:F,onFollowUp:G,prompt:Y,records:W,primaryLabel:K,purple:J}=Th(e,o),ae=F&&!G?Mh[e.id]??E2(Y).map(q=>({label:q})):void 0,ce=e.status==="resolved"||e.status==="auto_resolved",se=J||ce,Q=q=>{T2(q)?s(q):i(e.id,q)},O=F&&!(ae&&ae.length>0)&&W.length>0?W[0]:void 0;if(se&&!F){const q=V2[e.id],T=S||!q,z=d&&!g&&!j;return n.jsxs(dL,{$divided:!0,children:[q&&n.jsx(uL,{children:n.jsx(Lm,{text:q,onDone:()=>_(!0),instant:C})}),T&&!z&&n.jsxs(va,{$saved:A,"data-saved":A||void 0,children:[n.jsxs(fv,{children:[n.jsx(mv,{"aria-hidden":"true",children:n.jsx(Lo,{size:16})}),n.jsx(gv,{children:n.jsx(Lm,{text:"Want me to save this as a reusable workflow?",onDone:()=>M(!0),instant:C})})]}),$&&n.jsx(vv,{children:A?n.jsx(Mo,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:n.jsx(Mn,{size:14}),children:"Saved"}):n.jsx(Mo,{variant:"primary",size:"sm",onClick:()=>{D(!0),l(e)},children:"Save workflow"})})]}),T&&z&&n.jsx(rv,{})]})}return n.jsxs(LN,{$flat:k,"data-tone":rc(e),children:[F&&n.jsxs(ov,{children:[n.jsx(ac,{children:Y}),O&&n.jsx(av,{children:n.jsx(tr,{size:"md",src:Aa(O.avatarSeed),name:O.title,alt:O.title})})]}),ae&&ae.length>0?n.jsx(nv,{tasks:ae}):null,n.jsxs(Eh,{children:[F&&K&&n.jsx(Mo,{variant:N?"secondary":"primary",size:"sm",onClick:()=>Q(Tl),children:Tl}),F&&n.jsx(Mo,{variant:N?"secondary":"tertiary",size:"sm",onClick:()=>s("No"),children:"No"}),F&&n.jsx(pv,{variant:"tertiary",size:"sm","data-selected":N||void 0,onClick:()=>L(!0),children:"Other"}),F&&!G&&n.jsx(cL,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":R,"data-on":R||void 0,leadingArtwork:R?n.jsx(Mn,{size:14}):n.jsx(Lo,{size:14}),onClick:()=>{d||p==null||p(e.id)},children:"Save as future workflow"})]}),F&&N&&n.jsx(lL,{children:n.jsx(ev,{ref:E,compact:!0,onSend:q=>x==null?void 0:x(q),working:y,onStop:w,placeholder:"Tell Ultron what to do…"})})]})}function mN({thread:e,stage:o,expanded:i,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:p=!1,saved:g=!1}){const x=rc(e),y=D2(e.id)||e.assessment;return n.jsxs(MN,{"data-tone":x,$expanded:i,children:[n.jsxs(RN,{$expanded:i,children:[n.jsx(tr,{size:"md",src:Sh(e.id),name:Sa[e.id],alt:Sa[e.id]??""}),n.jsxs(iv,{children:[n.jsx(sv,{children:O2(e)}),y&&n.jsx(lv,{children:y})]})]}),i&&n.jsx(NN,{children:n.jsx(tv,{flat:!0,thread:e,stage:o,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:h,saveIntent:p,saved:g})})]})}function nv({tasks:e,interactive:o=!0}){return n.jsx(eL,{children:e.map((i,s)=>n.jsx(gN,{task:i,first:s===0,last:s===e.length-1,interactive:o},s))})}function gN({task:e,first:o,last:i,interactive:s=!0}){const[l,d]=v.useState(!1),h=!!e.detail&&s;return n.jsxs(tL,{children:[n.jsx(nL,{"data-first":o||void 0,"data-last":i||void 0,"aria-hidden":"true",children:n.jsx(rL,{})}),n.jsxs(oL,{children:[n.jsxs(aL,{as:h?"button":"div",type:h?"button":void 0,$interactive:h,"aria-expanded":h?l:void 0,onClick:h?()=>d(p=>!p):void 0,children:[n.jsx(uv,{children:e.label}),h&&n.jsx(iL,{"data-open":l||void 0,"aria-hidden":"true",children:n.jsx(Rn,{size:14})})]}),l&&h&&n.jsx(sL,{children:e.detail})]})]})}function vN({steps:e,completed:o}){const[i,s]=v.useState(o?e.length:1);v.useEffect(()=>{if(o){s(e.length);return}if(i>=e.length)return;const d=setTimeout(()=>s(h=>h+1),1600);return()=>clearTimeout(d)},[i,e.length,o]);const l=e.slice(0,i);return n.jsx(WN,{role:"status","aria-live":"polite",children:l.map((d,h)=>{const p=!o&&h===i-1,g=h===l.length-1;return n.jsxs(qN,{children:[n.jsxs(VN,{children:[n.jsx(ZN,{$done:!p,"aria-hidden":"true",children:p?n.jsx(XN,{children:n.jsx(st,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):n.jsx(Mn,{size:16})}),!g&&n.jsx(GN,{})]}),n.jsxs(YN,{$last:g,children:[n.jsx(KN,{children:d.headline}),n.jsx(QN,{children:d.detail})]})]},h)})})}function xN({thread:e,onDecide:o,analyzed:i,hideDetail:s,hideTrigger:l}){const[d,h]=v.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsxs(DN,{as:"button",type:"button",$interactive:!0,"aria-expanded":d,onClick:()=>h(p=>!p),children:[n.jsx(st,{mark:"orbit",size:40,tone:"auto",state:i?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),n.jsxs(FN,{children:[n.jsx(BN,{children:i?"Ultron analyzed this event":"Ultron is analyzing this event"}),!s&&n.jsx(HN,{children:e.assessment})]}),n.jsx(ON,{"data-open":d||void 0,"aria-hidden":"true",children:n.jsx(Rn,{size:14})})]}),d&&n.jsx(vN,{steps:B2(e.id),completed:i}),!i&&!l&&n.jsx(dv,{variant:"secondary",size:"sm",onClick:()=>o(e.id),children:"Trigger Needs approval (demo)"})]})}function yN({thread:e,onDecide:o}){return n.jsx(dv,{variant:"secondary",size:"sm",onClick:()=>o(e.id),children:"Trigger Needs approval (demo)"})}function pu(e,o){return{icon:e.icon,headline:e.headline,blocks:e.detail||e.bullets?[{text:e.detail||void 0,bullets:e.bullets}]:void 0,progress:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,usage:q2(o,cM(e))}}function wN(e,o){const i=q2(o,["read","match","policy","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:e.map(s=>`${s.headline} — ${s.detail}`)}],usage:i}}function bN(e,o){const i=W2(e),s=e.timeline.filter(w=>w.done).length,l=s>0?Math.min(s,i.length):i.length,d=[wN(B2(e.id),e.id),...i.slice(0,l)],h=d.length;if(o.length===0){const w=d.map(k=>({kind:"activity",milestone:k}));return(e.status==="in_progress"||e.status==="monitoring")&&(am[e.id]??[]).map(k=>pu(k,e.id)).forEach(k=>w.push({kind:"activity",milestone:k})),{items:w,reasoningCount:h}}const p=$h[e.id],g=[(am[e.id]??[]).map(w=>pu(w,e.id)),((p==null?void 0:p.working)??[]).map(w=>pu(w,e.id))],x=w=>w===1&&p?p.prompt:H2[e.id]??e.recommendation,y=d.slice(0,h).map(w=>({kind:"activity",milestone:w}));return o.forEach((w,k)=>{y.push({kind:"question",text:x(k)}),y.push({kind:"message",text:w}),(g[k]??[]).forEach(R=>y.push({kind:"activity",milestone:R})),y.push({kind:"reply",text:uM(k)})}),{items:y,reasoningCount:h}}function kN({thread:e,outbound:o=[],chat:i=[],replying:s=!1,analyzing:l=!1,actionCard:d,footSlot:h,onCompleteRun:p,saveWorkflowFlagged:g=!1}){const x=e.status==="in_progress"||e.status==="monitoring",y=e.status==="resolved"||e.status==="auto_resolved",{items:w,reasoningCount:k}=bN(e,o),R=l||e.status==="in_progress",[S,_]=v.useState(l?Math.min(1,k):R?k:w.length),[$]=v.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),M=o.length>0||x||y?w.length:k,C=e.status==="in_progress"&&o.length>0,[j,D]=v.useState(0);v.useEffect(()=>{D(0)},[S]),v.useEffect(()=>{if(S>=M)return;const B=w[S],P=w[S-1];if((B==null?void 0:B.kind)==="question"||(B==null?void 0:B.kind)==="message"){const de=setTimeout(()=>_(xe=>xe+1),0);return()=>clearTimeout(de)}if((B==null?void 0:B.kind)==="reply"){if(C)return;const de=setTimeout(()=>_(xe=>xe+1),Rm);return()=>clearTimeout(de)}if(C&&(P==null?void 0:P.kind)!=="message")return;const oe=(P==null?void 0:P.kind)==="message"?Rm:um,fe=setTimeout(()=>_(de=>de+1),oe);return()=>clearTimeout(fe)},[S,M,C]),v.useEffect(()=>{if(!C)return;const B=P=>{var we;if(P.key!=="t"&&P.key!=="T"||P.metaKey||P.ctrlKey||P.altKey)return;const oe=P.target instanceof Element?P.target:null;if(oe&&oe.closest('input, textarea, [contenteditable="true"]'))return;const fe=w[S-1],de=(fe==null?void 0:fe.kind)==="activity"?((we=fe.milestone.progress)==null?void 0:we.length)??0:0;if((fe==null?void 0:fe.kind)==="activity"&&j<de-1){D(Ce=>Ce+1);return}const xe=w[S];(xe==null?void 0:xe.kind)==="activity"?(_(Ce=>Ce+1),D(0)):p==null||p()};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[C,S,j,p]);const N=w.slice(0,S),L=[];for(const B of N){if(B.kind==="question"){L.push({type:"question",text:B.text});continue}if(B.kind==="message"){L.push({type:"msg",text:B.text});continue}if(B.kind==="reply"){L.push({type:"reply",text:B.text});continue}const P=L[L.length-1];P&&P.type==="acts"?P.milestones.push(B.milestone):L.push({type:"acts",milestones:[B.milestone]})}const E=S<w.length,A=N.length>0&&N[N.length-1].kind==="activity",F=S>=M,[G,Y]=v.useState(!1);v.useEffect(()=>{if(!(F&&A&&(x||l)&&!y)){Y(!1);return}Y(!0);const B=setTimeout(()=>Y(!1),um);return()=>clearTimeout(B)},[F,A,S,x,l,y]);const W=(x||l)&&(E||G)&&A;let K=-1;L.forEach((B,P)=>{B.type==="acts"&&(K=P)});const J=[];for(const B of w){if(B.kind!=="activity"){J.push({type:"other"});continue}const P=J[J.length-1];P&&P.type==="acts"?P.milestones.push(B.milestone):J.push({type:"acts",milestones:[B.milestone]})}let ae=-1;J.forEach((B,P)=>{B.type==="acts"&&(ae=P)});const ce=L.findIndex(B=>B.type==="acts"),se=(B,P,oe=P)=>{const fe=L[B],de=(l||e.status==="in_progress")&&B===ae,xe=J[B],we=de&&xe&&xe.type==="acts"?xe.milestones:fe.milestones,Ce=de?fe.milestones.length-1:void 0;return n.jsx(Pl,{milestones:we,focusIndex:Ce,focusBeat:de&&C?j:void 0,typingIndex:B===ae&&W?fe.milestones.length-1:void 0,collapsed:B<K,hideActions:oe,running:de,showConnectors:B!==ce,reasoning:B===ce,animateIn:!P&&!$})},Q=[];for(let B=0;B<L.length;B++){const P=L[B];if(P.type==="question"){Q.push({kind:"question",text:P.text});continue}if(P.type==="msg"){Q.push({kind:"msg",text:P.text});continue}if(P.type==="reply"){Q.push({kind:"response",gi:-1,text:P.text});continue}const oe=L[B+1];oe&&oe.type==="reply"?(Q.push({kind:"response",gi:B,text:oe.text}),B++):Q.push({kind:"acts",gi:B})}const q=(l||e.status==="in_progress")&&K>=0||s,T=N.length>0,z=s||x,te=(()=>{for(let B=Q.length-1;B>=0;B--){const P=Q[B];if(P.kind==="acts"||P.kind==="response"&&P.gi>=0)return B}return-1})(),U=Q.findIndex(B=>B.kind==="question"),X=U===ce+1?U:-1,le=B=>B.kind==="acts"?cr(L[B.gi].milestones):B.kind==="response"?cr(B.gi>=0?L[B.gi].milestones:[]):cr([]);return n.jsxs(n.Fragment,{children:[Q.map((B,P)=>{var xe,we;const oe=P===te?d:null;if(B.kind==="question"){if(P===X)return null;const Ce=Q[P-1],Me=!!Ce&&(Ce.kind==="acts"||Ce.kind==="response")&&P-1!==te,Pe=P===U;return n.jsxs(mu,{children:[Pe?n.jsx(Am,{thread:e,saveWorkflowFlagged:g}):n.jsx(jN,{text:B.text,animate:!$}),Me&&n.jsx(ma,{time:le(Ce)})]},`q${P}`)}if(B.kind==="msg")return n.jsx(SN,{messages:[B.text],animate:!$},`m${P}`);if(B.kind==="acts"){const Ce=L[B.gi].milestones,Me=((xe=Q[P+1])==null?void 0:xe.kind)==="question",Pe=se(B.gi,!1,!!oe||Me),qe=P===ce,We=oe||(qe&&P+1===X?n.jsx(Am,{thread:e,saveWorkflowFlagged:g}):null);return qe&&We?n.jsxs(CL,{children:[Pe,We,n.jsx(ma,{time:cr(Ce)})]},`a${P}`):n.jsxs(v.Fragment,{children:[Pe,oe&&n.jsxs(mu,{children:[oe,n.jsx(ma,{time:cr(Ce)})]})]},`a${P}`)}const fe=B.gi>=0,de=fe?L[B.gi].milestones:[];return n.jsxs(v.Fragment,{children:[n.jsx(Uu,{activity:fe?se(B.gi,!0):void 0,text:B.text,feedbackTime:oe||((we=Q[P+1])==null?void 0:we.kind)==="question"?void 0:cr(de),showMark:!1,animateIn:!1}),oe&&n.jsxs(mu,{children:[oe,n.jsx(ma,{time:cr(de)})]})]},`resp${P}`)}),n.jsx(_N,{messages:i,replying:s}),h&&Ao.createPortal(T?n.jsxs(yL,{role:z?"status":"img","aria-label":s?"Ultron is replying":q?"Ultron is working":"Ultron",children:[n.jsxs(kL,{"aria-hidden":"true",children:[n.jsx(Tm,{$show:q,children:n.jsx(st,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),n.jsx(Tm,{$show:!q,children:n.jsx(st,{mark:"magnetic2d",size:24,tone:"auto",state:z?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),q&&n.jsx(bL,{children:s?"Replying…":n.jsx(vR,{})})]}):null,h),te<0&&d]})}function Uu({activity:e,text:o,body:i,feedbackTime:s,active:l=!1,showMark:d=!0,animateIn:h=!0}){const p=!!(e||i||s);return n.jsxs(_L,{children:[p&&n.jsxs(jL,{$animate:h,children:[e,i,s&&n.jsx(ma,{time:s})]}),d&&n.jsx(SL,{$animate:h,role:l?"status":"img","aria-label":l?"Ultron is working":"Ultron",children:n.jsx(st,{mark:"magnetic2d",size:24,tone:"auto",state:l?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function fu(){return[{icon:"clock",headline:"Reviewed your message"}]}function _N({messages:e,replying:o=!1}){return!e.length&&!o?null:n.jsx(xL,{children:e.map((i,s)=>i.role==="operator"?n.jsx(xv,{children:n.jsx(wv,{children:n.jsx(bv,{children:i.text})})},s):i.kind==="workflow_saved"?n.jsx(Uu,{body:n.jsx(CN,{}),feedbackTime:cr(fu()),showMark:!1},s):n.jsx(Uu,{activity:n.jsx(Pl,{milestones:fu(),collapsed:!0,hideActions:!0}),text:i.text,feedbackTime:cr(fu()),showMark:!1},s))})}function CN(){return n.jsx(rv,{})}function rv(){return n.jsxs(va,{children:[n.jsxs(fv,{children:[n.jsx(mv,{"aria-hidden":"true",children:n.jsx(Lo,{size:16})}),n.jsx(gv,{children:"Workflow saved for future use."})]}),n.jsx(vv,{children:n.jsx(Mo,{variant:"secondary",size:"sm",trailingArtwork:n.jsx(Zl,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function jN({text:e,animate:o=!0}){return n.jsx(pL,{$animate:o,children:e})}function Am({thread:e,saveWorkflowFlagged:o=!1}){const{prompt:i,records:s}=Th(e,0),l=Mh[e.id]??E2(i).map(h=>({label:h})),d=!(l&&l.length>0)&&s.length>0?s[0]:void 0;return n.jsxs(fL,{"data-tone":rc(e),children:[n.jsxs(ov,{children:[n.jsx(ac,{children:i}),o?n.jsx(Sr,{content:"Saved as workflow",children:n.jsx(mL,{"aria-label":"Saved as workflow",children:n.jsx(Lo,{size:18})})}):d&&n.jsx(av,{children:n.jsx(tr,{size:"md",src:Aa(d.avatarSeed),name:d.title,alt:d.title})})]}),l&&l.length>0?n.jsx(nv,{tasks:l,interactive:!1}):null]})}function SN({messages:e,animate:o=!0}){return e.length?n.jsx(gL,{children:e.map((i,s)=>n.jsx(xv,{children:n.jsx(wv,{$animate:o,children:n.jsx(bv,{children:i})})},s))}):null}const $N=f.div`
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
`,MN=f.div`
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
`,RN=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  ${e=>e.$expanded&&Oe`
    border-bottom: 1px solid var(--color-border-opaque);
  `}
`,NN=f.div`
  padding: var(--space-4);
`,LN=f.div`
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
`,ov=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,av=f.span`
  flex-shrink: 0;
  display: inline-flex;
`,AN=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  /* Extra breathing room above the title; the bottom stays tight to the body. */
  padding: var(--space-4) 0 var(--space-2);
`,TN=f(Fe)`
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
`,EN=f.button`
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
`,iv=f.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,sv=f.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,lv=f.span`
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
`,IN=f.div`
  overflow: hidden;
`,PN=f.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,zN=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,cv=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`,DN=f.div`
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
`,ON=f.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;f(cv)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const FN=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,BN=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,HN=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,WN=f.div`
  display: flex;
  flex-direction: column;
`,UN=_e`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,qN=f.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${UN} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,VN=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,GN=f.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,YN=f.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
`,KN=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,QN=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,ZN=f.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${e=>e.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,XN=f.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,dv=f(Fe)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,JN=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,eL=f.div`
  display: flex;
  flex-direction: column;
`,zl="var(--space-8)",tL=f.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,nL=f.div`
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
  &[data-first]::before { top: calc(${zl} / 2); }
  &[data-last]::before { bottom: calc(100% - ${zl} / 2); }
  &[data-first][data-last]::before { display: none; }
`,rL=f.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${zl} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-slate-border-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`,oL=f.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,aL=f.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${zl};
  cursor: ${e=>e.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,uv=f.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,iL=f.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,sL=f.p`
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
`,ac=f.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,hv=_e`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,Eh=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${hv} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,lL=f.div`
  animation: ${hv} var(--duration-slow) var(--ease-out);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Mo=f(Fe)`
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
  }
`,pv=f(Fe)`
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

  /* Same touch height as the Yes/No choices it sits beside. */
  @media (max-width: 600px) {
    min-height: 44px;
  }
`,cL=f(Fe)`
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
`,dL=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${e=>e.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,uL=f.p`
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

  ${e=>!e.$saved&&Oe`
    &:hover {
      transform: translateY(-1px);
      box-shadow: var(--shadow-below-md);
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow var(--duration-base) var(--ease-out);
    &:hover { transform: none; }
  }
`,fv=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,mv=f.span`
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
`,gv=f.p`
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
`,vv=f(Eh)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,hL=_e`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,pL=f.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${hL} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,fL=f.div`
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
  ${ac} { color: var(--color-content-disabled); }
  ${uv} { color: var(--color-content-disabled); }
`,mL=f.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`,gL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,xv=f.div`
  display: flex;
  justify-content: flex-end;
`,Ih=_e`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,yv=_e`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,vL=_e`
  from { opacity: 0; }
  to   { opacity: 1; }
`,wv=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: 16px;
  animation: ${Ih} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,bv=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,xL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;f.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const yL=f.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${yv} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,wL=_e`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,bL=f.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${wL} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,kL=f.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,Tm=f.span`
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
`,_L=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${oc}
`,mu=f.div`
  display: contents;
  ${oc}
`,CL=f.div`
  display: flex;
  flex-direction: column;
  ${oc}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`,jL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${vL} 380ms var(--ease-out) 160ms both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,SL=f.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${yv} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${Ih} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
  animation: ${Ih} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
`;const Em=72,Im=.58;function On(e){const o=Math.sin(e*127.1+311.7)*43758.5453;return o-Math.floor(o)}function Pm(e,o,i,s){const l=getComputedStyle(o).getPropertyValue(i).trim();if(!l)return s;e.fillStyle="#000",e.fillStyle=l;const d=e.fillStyle;if(d.startsWith("#")){const p=d.slice(1),g=parseInt(p.length===3?p.split("").map(x=>x+x).join(""):p,16);return(g>>16&255)+","+(g>>8&255)+","+(g&255)}const h=d.match(/[\d.]+/g);return h&&h.length>=3?`${+h[0]},${+h[1]},${+h[2]}`:s}const $L=e=>{const[o,i,s]=e.split(",").map(Number);return(.299*o+.587*i+.114*s)/255};function Ph({links:e=0,tone:o="aurora",cornerTone:i="default"}){const s=v.useRef(null),l=v.useRef(0),d=v.useRef(e);return d.current=Math.max(0,Math.min(1,e)),v.useEffect(()=>{const h=s.current;if(!h)return;const p=h.getContext("2d");if(!p)return;const g=Math.min(2,window.devicePixelRatio||1);let x=0,y=0;const w=()=>{x=h.clientWidth,y=h.clientHeight,h.width=Math.max(2,Math.round(x*g)),h.height=Math.max(2,Math.round(y*g)),p.setTransform(g,0,0,g,0,0)};w();const k=new ResizeObserver(w);k.observe(h);const R=Pm(p,h,"--color-bg-primary","255,255,255"),S=$L(R)<.5,_=Pm(p,h,"--color-content-tertiary",S?"148,163,184":"71,85,105"),$=Array.from({length:Em},(E,A)=>{const F=A%3===0,G=F?1-.5*Math.pow(On(A*3.1),1.6):On(A*3.1),Y=F?.5*Math.pow(On(A*5.7),1.6):On(A*5.7);return{bx:G,by:Y,vx:(On(A*7.3)-.5)*.008,vy:(On(A*9.9)-.5)*.008,wA:6+On(A*4.7)*10,wS:.25+On(A*6.1)*.5,wP:On(A*8.2)*6.2832,r:.8+On(A*2.3)*1.6,twS:.8+On(A)*1.4,twP:On(A*11.4)*6.2832}}),M=(E,A)=>{const F=((E.bx+E.vx*A)%1+1)%1,G=((E.by+E.vy*A)%1+1)%1,Y=F-.5,W=Math.abs(Y)*2,K=W<1e-4?1:(Im+(1-Im)*W)/W;return{x:(.5+Y*K)*x+Math.cos(A*E.wS+E.wP)*E.wA,y:G*y+Math.sin(A*E.wS*.8+E.wP)*E.wA}},C=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),j=E=>{l.current+=(d.current-l.current)*.04,Math.abs(l.current-d.current)<.001&&(l.current=d.current),p.clearRect(0,0,x,y);const A=$.map(F=>M(F,E));for(let F=0;F<Em;F++){const G=$[F],Y=.35+.65*(.5+.5*Math.sin(E*G.twS+G.twP)),W=.82+l.current*.18;p.fillStyle="rgba("+_+","+Y*W*(S?.55:.42)+")",p.beginPath(),p.arc(A[F].x,A[F].y,G.r*(.7+.3*Y),0,6.2832),p.fill()}};if(C)return l.current=d.current,j(1.15),()=>k.disconnect();j(1.15);let D=0;const N=performance.now(),L=E=>{j(1.15+(E-N)/1e3),D=requestAnimationFrame(L)};return D=requestAnimationFrame(L),()=>{cancelAnimationFrame(D),k.disconnect()}},[]),n.jsx(ML,{"aria-hidden":"true",$neutral:o==="neutral",$riskActive:i==="risk",children:n.jsx("canvas",{ref:s})})}const ML=f.div`
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
`,ur=Oe`
  background: color-mix(in srgb, var(--color-bg-primary) 50%, transparent);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid color-mix(in srgb, var(--color-content-primary) 12%, transparent);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 45%, transparent),
    var(--shadow-below-low);
`,kv=Oe`
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
`;const RL=f.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,sl=f.div`
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
`,zm=.025,gi=560,vi=480,NL=260,LL=.08,AL=.18,TL=.06,EL=350,IL=9,ll=[168,197,224,250,285,330,390],PL=e=>{const o=ll.length-1,i=Math.abs((e%2+2)%2-1)*o,s=Math.min(o-1,Math.floor(i));return(ll[s]+(ll[s+1]-ll[s])*(i-s))%360},Cl=5,Dm=360,zL=560,DL=.055,OL=.03,xi=320,FL=.84,qu=Cl+1,jl=[];for(let e=0;e<qu;e++)for(let o=e+1;o<qu;o++)jl.push([e,o]);const Om=(e,o)=>PL((e*IL+80*Math.sin(e*.23+o)+50*Math.sin(e*.071+o*1.7))/360),cl=(e,o)=>{const i=(s,l)=>`${(50+16*Math.sin(e*s+l+o)).toFixed(1)}%`;return`${i(.9,0)} ${i(1.3,2.1)} ${i(1.1,4.2)} ${i(.8,1.3)} / ${i(1.2,3.1)} ${i(.7,.6)} ${i(1.4,5)} ${i(1,2.4)}`},Fm=e=>(e=Math.max(0,Math.min(1,e)),e*e*(3-2*e)),gu=[{nx:-1,ny:0},{nx:1,ny:0},{nx:0,ny:-1},{nx:0,ny:1}];function zh({tone:e="color"}={}){const o=v.useRef(null),i=v.useRef(null),s=v.useRef([]),l=v.useRef([]),d=v.useRef([]);return v.useEffect(()=>{const h=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),p=o.current,g=i.current;if(!p||!g)return;const x=Array.from({length:4},()=>Math.random()*Math.PI*2),y=()=>Math.random()*Math.PI*2,w=Array.from({length:Cl},()=>({size:Dm+Math.random()*(zL-Dm),ax:.3+Math.random()*.16,ay:.3+Math.random()*.16,sx1:.05+Math.random()*.07,px1:y(),sx2:.11+Math.random()*.09,px2:y(),sy1:.05+Math.random()*.07,py1:y(),sy2:.11+Math.random()*.09,py2:y(),bs:.12+Math.random()*.14,bp:y(),mp:y(),cs:.4+Math.random()*2.6}));w.forEach((A,F)=>{const G=l.current[F];G&&(G.style.width=`${A.size.toFixed(0)}px`,G.style.height=`${A.size.toFixed(0)}px`)});const k=(A,F,G)=>{A.style.setProperty("--glow-ha",Om(F,x[0]+G).toFixed(1)),A.style.setProperty("--glow-hb",Om(F,x[1]+G*1.3).toFixed(1)),A.style.setProperty("--glow-hc",((318+42*(.5+.5*Math.sin(F*.17+x[2]*1.9+G)))%360).toFixed(1)),A.style.setProperty("--glow-cx",`${(35+14*Math.sin(F*.4+x[2]+G)).toFixed(1)}%`),A.style.setProperty("--glow-cy",`${(35+14*Math.cos(F*.31+x[3]+G)).toFixed(1)}%`)},R=(A,F,G)=>{const Y=new Array(qu).fill(null);for(let W=0;W<Cl;W++){const K=w[W],J=l.current[W];if(!J)continue;const ae=F*(.5+K.ax*(.68*Math.sin(A*K.sx1+K.px1)+.32*Math.sin(A*K.sx2+K.px2))),ce=G*(.5+K.ay*(.68*Math.sin(A*K.sy1+K.py1)+.32*Math.sin(A*K.sy2+K.py2))),se=DL+OL*(.5+.5*Math.sin(A*K.bs+K.bp));J.style.transform=`translate(${(ae-K.size/2).toFixed(1)}px, ${(ce-K.size/2).toFixed(1)}px)`,J.style.opacity=se.toFixed(3),J.style.borderRadius=cl(A,K.mp),k(J,A,K.cs),Y[W+1]={x:ae,y:ce,size:K.size,o:se}}return Y},S=(A,F)=>{for(let G=0;G<jl.length;G++){const Y=d.current[G];if(!Y)continue;const[W,K]=jl[G],J=F[W],ae=F[K],ce=J&&ae?Math.min(J.o,ae.o):0;if(!J||!ae||ce<=.005){Y.style.opacity="0";continue}const se=ae.x-J.x,Q=ae.y-J.y,O=Math.hypot(se,Q),q=(J.size+ae.size)/2*FL,T=Fm(1-O/q);if(T<=.001){Y.style.opacity="0";continue}const z=Math.max(.35,O*.9/xi),te=.3+.4*T;Y.style.transform=`translate(${((J.x+ae.x)/2-xi/2).toFixed(1)}px, ${((J.y+ae.y)/2-xi/2).toFixed(1)}px) rotate(${Math.atan2(Q,se).toFixed(3)}rad) scale(${z.toFixed(3)}, ${te.toFixed(3)})`,Y.style.opacity=(ce*T).toFixed(3),Y.style.borderRadius=cl(A,1.1*(G+1)),k(Y,A,.23*(G+1))}};if(h){const F=R(2.4,p.clientWidth,p.clientHeight);S(2.4,F);return}let _=null,$=null,M=-1/0,C=0,j=0,D=0;const N=A=>{const F=p.getBoundingClientRect(),G=_===null;_=A.clientX-F.left,$=A.clientY-F.top,M=A.timeStamp,G&&(C=_,j=$)};window.addEventListener("pointermove",N,{passive:!0});let L=0;const E=A=>{L=requestAnimationFrame(E);const F=A/1e3,G=p.clientWidth,Y=p.clientHeight,W=R(F,G,Y);if(_!==null&&$!==null){C+=(_-C)*zm,j+=($-j)*zm;const K=A-M<EL?AL:LL;D+=(K-D)*TL,g.style.transform=`translate(${C-gi/2}px, ${j-gi/2}px)`,g.style.opacity=D.toFixed(3),g.style.borderRadius=cl(F,0),k(g,F,0),W[0]={x:C,y:j,size:gi,o:D};for(let J=0;J<gu.length;J++){const ae=s.current[J];if(!ae)continue;const{nx:ce,ny:se}=gu[J],Q=ce<0?C:ce>0?G-C:se<0?j:Y-j,O=Fm(1-Q/NL);if(O<=.001){ae.style.opacity="0";continue}const q=ce!==0?ce<0?0:G:C,T=se!==0?se<0?0:Y:j,z=vi*(.5-.22*O),te=.55+.45*O;ae.style.transform=`translate(${q+ce*z-vi/2}px, ${T+se*z-vi/2}px) scale(${te.toFixed(3)})`,ae.style.opacity=(D*O).toFixed(3),ae.style.borderRadius=cl(F,.9*(J+1)),k(ae,F,.35*(J+1))}}S(F,W)};return L=requestAnimationFrame(E),()=>{cancelAnimationFrame(L),window.removeEventListener("pointermove",N)}},[]),n.jsxs(RL,{ref:o,"aria-hidden":"true","data-glow-tone":e==="neutral"?"neutral":void 0,children:[jl.map((h,p)=>n.jsx(sl,{ref:g=>{d.current[p]=g},style:{width:xi,height:xi,opacity:0}},`bridge-${p}`)),Array.from({length:Cl},(h,p)=>n.jsx(sl,{ref:g=>{l.current[p]=g},style:{opacity:0}},`ambient-${p}`)),gu.map((h,p)=>n.jsx(sl,{ref:g=>{s.current[p]=g},style:{width:vi,height:vi,opacity:0}},p)),n.jsx(sl,{ref:i,style:{width:gi,height:gi,opacity:0}})]})}const Bm=.71,_v=.24,Cv=Oe`
  font-weight: var(--font-weight-regular);
  text-transform: uppercase;
  letter-spacing: ${_v}em;
`,BL={"Coverage Recovery":Xr,"Fill Optimization":Xr,Recruiting:Xr,Users:Xr,Attendance:jn,"Attendance Recovery":jn,"Time Off":jn,Scheduling:jn,Compliance:Pi,Onboarding:$o,"Payroll Operations":fg,Invoicing:to,Reporting:If,"Marketplace Optimization":If,Engagement:$i,"Autonomous Operations":Vl},HL=e=>BL[e]??Vl,Hm=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],WL=2800,UL=200,qL=6,VL=2200,_i=520;function GL({onDetectRisk:e,deckActive:o=!1,deck:i}){const[s,l]=v.useState(0),d=v.useRef(e);d.current=e;const h=v.useRef(new Set),[p,g]=v.useState(!1),x=v.useRef(null);v.useEffect(()=>{const N=setInterval(()=>l(L=>(L+1)%Hm.length),WL);return()=>clearInterval(N)},[]);const y=Math.min(qL,il.length),[w,k]=v.useState([]),R=v.useRef(0),S=v.useRef(il.filter(N=>!N.risk)),_=v.useRef(il.filter(N=>N.risk)),$=v.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),M=()=>5+Math.floor(Math.random()*5),C=()=>{const N=$.current,L=_.current;if(L.length>0&&N.sinceRisk>=N.gap)return N.sinceRisk=0,N.gap=M(),L[N.risk++%L.length];N.sinceRisk+=1;const E=S.current;return E.length>0?E[N.routine++%E.length]:L[N.risk++%L.length]},j=N=>N.risk?"risk":Math.random()<.28?"action":"none",D=v.useRef(null);return v.useEffect(()=>{if(il.length===0){k([]);return}if(o)return;$.current={routine:0,risk:0,sinceRisk:0,gap:M()},R.current=0;const N=Array.from({length:y},()=>{const A=C();return{key:R.current++,event:A,phase:"in",outcome:j(A),resolved:!0}});if(N.length>0){const A=N[N.length-1];A.resolved=!1,D.current={key:A.key,event:A.event,outcome:A.outcome}}else D.current=null;k(N);const L=[],E=setInterval(()=>{var W;const A=C(),F=R.current++,G=j(A),Y=D.current;Y&&Y.outcome==="risk"&&(g(!0),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>g(!1),2800),h.current.has(Y.event.id)||(h.current.add(Y.event.id),(W=d.current)==null||W.call(d,Y.event))),D.current={key:F,event:A,outcome:G},k(K=>{const J=K.filter(se=>se.phase!=="leaving"),ae=J.length>=y?J[0].key:null;return[...K.map(se=>se.key===ae?{...se,phase:"leaving"}:Y&&se.key===Y.key&&!se.resolved?{...se,resolved:!0}:se),{key:F,event:A,phase:"entering",outcome:G,resolved:!1}]}),L.push(setTimeout(()=>{k(K=>K.map(J=>J.key===F?{...J,phase:"in"}:J))},40)),L.push(setTimeout(()=>{k(K=>K.filter(J=>J.phase!=="leaving"))},_i))},VL);return()=>{clearInterval(E),L.forEach(clearTimeout),x.current&&clearTimeout(x.current)}},[y,o]),n.jsxs(YL,{children:[n.jsx(Ph,{links:0,tone:"neutral",cornerTone:p?"risk":"default"}),n.jsx(zh,{tone:"neutral"}),n.jsx(KL,{$riskActive:p,"aria-hidden":"true"}),n.jsxs(QL,{children:[n.jsx(ZL,{children:n.jsx(st,{mark:"circle",size:UL,tone:"auto",state:"active",coreGradient:p,"aria-label":"Ultron"})}),n.jsx(XL,{children:"Ultron"}),n.jsx(JL,{role:"status","aria-live":"polite",children:n.jsxs(tA,{children:[n.jsx(nA,{children:Hm[s]}),n.jsxs(rA,{"aria-hidden":"true",children:[n.jsx("span",{children:"."}),n.jsx("span",{children:"."}),n.jsx("span",{children:"."})]})]},s)})]}),o?n.jsx(aA,{children:i},"deck"):w.length>0&&n.jsx(oA,{"aria-label":"Live event feed",children:w.map(N=>{const L=HL(N.event.capability);return n.jsx(iA,{"data-phase":N.phase,"aria-hidden":N.phase==="leaving"||void 0,children:n.jsx(sA,{children:n.jsxs(lA,{"data-outcome":N.resolved?N.outcome:"pending",children:[n.jsxs(cA,{children:[n.jsx(dA,{"aria-hidden":"true",children:n.jsx(L,{size:16})}),n.jsxs(uA,{children:[n.jsx(gA,{children:N.event.capability}),n.jsx(vA,{children:N.event.title})]})]}),n.jsx(hA,{children:N.resolved?N.outcome==="risk"?n.jsxs(n.Fragment,{children:[n.jsx(st,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),n.jsx(pA,{children:"Risk detected"})]}):N.outcome==="action"?n.jsxs(n.Fragment,{children:[n.jsx(st,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),n.jsx(mA,{children:"Action required"})]}):n.jsx(fA,{children:"No action needed"}):n.jsx(st,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},N.key)})},"feed")]})}const YL=f.div`
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
`,KL=f.div`
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
`,Dh=_e`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,QL=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${Dh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ZL=f.div`
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
`,XL=f.h1`
  margin: 0;
  font-size: var(--text-2xl);
  ${Cv}
  color: var(--color-content-primary);
`,JL=f.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,eA=_e`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,tA=f.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${eA} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,nA=f.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,jv=_e`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,rA=f.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${jv} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,oA=f.div`
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
  animation: ${Dh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,aA=f.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  animation: ${Dh} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,iA=f.div`
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: scale(1);
  transition:
    grid-template-rows ${_i}ms var(--ease-out, ease),
    opacity ${_i}ms var(--ease-out, ease),
    transform ${_i}ms var(--ease-out, ease);

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
    transition: opacity ${_i}ms linear;
    &[data-phase='entering'],
    &[data-phase='leaving'] {
      transform: none;
    }
  }
`,sA=f.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,lA=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  /* Glass rather than a flat fill, so the backdrop and glow behind the feed
     refract through each row. */
  ${ur}
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
`,cA=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,dA=f.span`
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
`,uA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,hA=f.div`
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
    animation: ${jv} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;const pA=f.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,fA=f.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,mA=f.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,gA=f.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,vA=f.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,xA=5e3,yA=5,Sl=320,wA=e=>e.status==="needs_approval"||e.status==="recommended";function bA({threads:e,stageById:o,onAction:i,onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,pendingWorkflowIds:h,savedWorkflowIds:p,onReveal:g,onClose:x}){const[y]=v.useState(()=>e.filter(wA).map((L,E)=>({t:L,index:E})).sort((L,E)=>ja[L.t.severity]-ja[E.t.severity]||L.index-E.index).slice(0,yA).map(({t:L})=>L.id)),[w,k]=v.useState(1),[R,S]=v.useState(new Set),[_,$]=v.useState(new Set),M=v.useRef(new Map);v.useEffect(()=>{if(w>=y.length)return;const L=setTimeout(()=>k(E=>E+1),xA);return()=>clearTimeout(L)},[w,y.length]),v.useEffect(()=>{const L=E=>{E.key==="Escape"&&x()};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[x]),v.useEffect(()=>{const L=M.current;return()=>{L.forEach(E=>clearTimeout(E))}},[]);const C=y.findIndex(L=>!R.has(L));v.useEffect(()=>{if(y.length>0&&C===-1){const L=setTimeout(x,260);return()=>clearTimeout(L)}},[C,y.length,x]);const j=Math.max(w,C+1);v.useEffect(()=>{y.slice(0,j).forEach(L=>g==null?void 0:g(L))},[j]);const D=(L,E)=>{$(F=>new Set(F).add(L.id));const A=setTimeout(()=>{$(F=>{const G=new Set(F);return G.delete(L.id),G}),S(F=>new Set(F).add(L.id)),M.current.delete(L.id),i(L.id,E)},Sl);M.current.set(L.id,A)},N=y.length-R.size;return n.jsxs(kA,{role:"region","aria-label":"New cases",children:[n.jsxs(CA,{children:[n.jsx(en,{children:"Needs your decision"}),n.jsx(Ma,{children:N}),n.jsx(jA,{}),n.jsx(Fe,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Dismiss (Esc)",onClick:x,children:n.jsx(ba,{size:16})})]}),n.jsx(_A,{children:n.jsx(SA,{children:y.slice(0,j).map((L,E)=>{if(R.has(L))return null;const A=e.find(F=>F.id===L);return A?n.jsx(MA,{"data-exiting":_.has(L)||void 0,children:n.jsx(mN,{thread:A,stage:o[L]??0,expanded:E===C,onAction:(F,G)=>D(A,G),onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,saveIntent:h.includes(L),saved:p.includes(L)})},L):null})})})]})}const kA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex: 1;
  min-height: 0;
  width: 100%;
  /* The deck lives inside the landing Stage (which centers its text); reset to
     left so card titles / subtitles / prompts read as a normal left-aligned card. */
  text-align: left;
`,_A=f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* Bottom dissolve so a long stack fades into the page foot as it scrolls. */
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
`,CA=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,jA=f.div`
  flex: 1;
`,SA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,$A=_e`
  from { opacity: 0; transform: translateY(var(--space-4)) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,MA=f.div`
  animation: ${$A} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  transition:
    opacity ${Sl}ms var(--ease-out, ease),
    transform ${Sl}ms var(--ease-out, ease);

  &[data-exiting] {
    opacity: 0;
    transform: translateY(calc(-1 * var(--space-3))) scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: opacity ${Sl}ms linear;
    &[data-exiting] { transform: none; }
  }
`,RA={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},Wm={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},NA=["new","working","done"],LA=280;function AA({threads:e,stageById:o,section:i,analyzedIds:s,outboundByThread:l,chatByThread:d,selectedId:h,onDecide:p,onAction:g,onCompleteRun:x,onRefinement:y,onSaveWorkflow:w,pendingWorkflowIds:k,onToggleSaveWorkflow:R,savedWorkflowIds:S,onSend:_,replyingIds:$,onStop:M,onClose:C,onDetectRisk:j,onRevealNew:D}){const[N,L]=v.useState(!1),E=()=>{N||(L(!0),window.setTimeout(()=>{L(!1),C()},LA))},[A,F]=v.useState(!1);v.useEffect(()=>{if(i!=="live"){F(!1);return}const P=oe=>{if(oe.key!=="t"&&oe.key!=="T"||oe.metaKey||oe.ctrlKey||oe.altKey)return;const fe=oe.target instanceof Element?oe.target:null;fe&&fe.closest('input, textarea, [contenteditable="true"]')||F(de=>!de)};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[i]);const G=(P,oe)=>(P.t.status==="analyzing"?1:0)-(oe.t.status==="analyzing"?1:0)||ja[P.t.severity]-ja[oe.t.severity]||P.index-oe.index,Y=e.map((P,oe)=>({t:P,index:oe})).filter(({t:P})=>RA[i].includes(P.status)).sort(G).map(({t:P})=>P.id),[W,K]=v.useState(()=>h??null),J=v.useRef({}),ae=v.useRef(null),ce=P=>{var oe;P==="Other"&&((oe=ae.current)==null||oe.focus()),y(P)},se=v.useRef(null),Q=v.useRef(null),[O,q]=v.useState(null),T=v.useRef(void 0);v.useEffect(()=>{var P;if(T.current===void 0){T.current=h;return}!h||h===T.current||(T.current=h,K(h),(P=J.current[h])==null||P.scrollIntoView({behavior:"smooth",block:"start"}))},[h]);const z=NA.includes(i),te=z?h&&Y.includes(h)?h:Y[0]??null:null;v.useEffect(()=>{var Ae;const P=se.current,oe=Q.current;if(!P||!oe)return;const de=((Ae=window.matchMedia)==null?void 0:Ae.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",xe=160;let we=!0,Ce=P.scrollHeight;const Me=()=>{we=P.scrollHeight-P.scrollTop-P.clientHeight<=xe};P.addEventListener("scroll",Me,{passive:!0});let Pe=0;const qe=()=>{Pe=performance.now()};P.addEventListener("pointerdown",qe,{passive:!0});const We=new ResizeObserver(()=>{const Qe=P.scrollHeight,Ze=performance.now()-Pe<500;Qe>Ce+1&&we&&!Ze&&P.scrollTo({top:Qe,behavior:de}),Ce=Qe});return We.observe(oe),()=>{P.removeEventListener("scroll",Me),P.removeEventListener("pointerdown",qe),We.disconnect()}},[te,i]),v.useEffect(()=>{if(!z||!te)return;const P=se.current;if(!P)return;const oe=()=>P.scrollTo({top:P.scrollHeight,behavior:"auto"}),fe=requestAnimationFrame(oe),de=[80,240,480].map(xe=>window.setTimeout(oe,xe));return()=>{cancelAnimationFrame(fe),de.forEach(clearTimeout)}},[te,z]);const U=te?e.find(P=>P.id===te)??null:null,X=!!U&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(U.status)||A2(U)),le=X&&U?U:null,B=!(X&&U&&["needs_approval","recommended","unresolved","monitoring"].includes(U.status))||!!(U!=null&&U.analysisResult);return i==="live"?n.jsx(Um,{$static:!0,children:n.jsx(GL,{onDetectRisk:j,deckActive:A,deck:A?n.jsx(bA,{threads:e,stageById:o,onAction:g,onRefinement:ce,onSaveWorkflow:w,onToggleSaveWorkflow:R,pendingWorkflowIds:k,savedWorkflowIds:S,onReveal:D,onClose:()=>F(!1)}):null})},"live"):n.jsxs(Um,{$closing:N,children:[n.jsx(IA,{ref:se,children:z?n.jsx(qm,{ref:Q,children:te===null?n.jsx(Vm,{role:"status",children:Wm[i]}):(()=>{const P=e.find(Me=>Me.id===te);if(!P)return null;const oe=P.status==="analyzing",fe=P.status==="resolved"||P.status==="auto_resolved",de=P.status==="in_progress",xe=P.status==="needs_approval"||P.status==="recommended",we=P.status==="monitoring",Ce=P.status==="workflow_available";return n.jsxs(n.Fragment,{children:[n.jsx(FA,{children:n.jsx(Nm,{thread:P,stage:o[P.id]??0,expanded:de?!1:B,detachActionable:X,detachAnalyzing:oe,detachTrail:fe||Ce,onToggle:()=>{},onClose:E,onDecide:p,onAction:g,onRefinement:ce,onSaveWorkflow:w},P.id)}),(oe||xe||de||fe||we||Ce)&&n.jsx(kN,{thread:P,outbound:l[P.id]??[],chat:d[P.id]??[],replying:$.includes(P.id),analyzing:oe,footSlot:O,onCompleteRun:()=>x(P.id),saveWorkflowFlagged:k.includes(P.id)||S.includes(P.id),actionCard:le&&le.id===P.id?n.jsx(tv,{thread:le,stage:o[le.id]??0,onAction:g,onRefinement:ce,onSaveWorkflow:w,saveIntent:k.includes(le.id),onToggleSaveWorkflow:R,saved:S.includes(le.id),savedConversationally:(d[le.id]??[]).some(Me=>Me.kind==="workflow_saved"),onSend:Me=>_(le.id,Me),replying:$.includes(le.id),onStop:()=>M(le.id)},`action-${le.id}`):void 0},P.id)]})})()}):n.jsx(qm,{ref:Q,children:Y.length===0?n.jsx(Vm,{role:"status",children:Wm[i]}):Y.map(P=>{const oe=e.find(fe=>fe.id===P);return oe?n.jsx(OA,{ref:fe=>{J.current[P]=fe},children:n.jsx(Nm,{thread:oe,stage:o[P]??0,expanded:W===P,onToggle:()=>K(fe=>fe===P?null:P),onDecide:p,onAction:g,onRefinement:y,onSaveWorkflow:w})},P):null})})}),z&&te&&U&&n.jsx(PA,{children:n.jsxs(zA,{children:[n.jsx(DA,{ref:q}),U.status==="analyzing"&&!s.includes(U.id)&&n.jsx(yN,{thread:U,onDecide:p}),n.jsx(ev,{ref:ae,onSend:P=>_(te,P),working:$.includes(te),onStop:()=>M(te),placeholder:E$(U.status,$.includes(te))},`composer-${te}`)]})})]},"feed")}const TA=_e`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,EA=_e`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,Um=f.div`
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

  ${e=>!e.$static&&!e.$closing&&Oe`
    animation: ${EA} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${e=>e.$closing&&Oe`
    animation: ${TA} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,IA=f.div`
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
`,PA=f.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);
`,zA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,DA=f.div`
  display: flex;
  &:empty { display: none; }
`,qm=f.div`
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
`,OA=f.div`
  scroll-margin-top: var(--space-5);
`,FA=f.div`
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
`,Vm=f.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;function BA({messages:e,replying:o,onSend:i}){const[s,l]=v.useState(""),d=v.useRef(null);v.useEffect(()=>{var x;(x=d.current)==null||x.scrollIntoView({block:"end",behavior:"smooth"})},[e,o]);const h=s.trim().length>0&&!o,p=e.length===0,g=()=>{const x=s.trim();!x||o||(i(x),l(""))};return n.jsxs(HA,{children:[n.jsx(WA,{children:p?n.jsxs(UA,{children:[n.jsx(qA,{"aria-hidden":"true",children:n.jsx(st,{mark:"circle",size:96,tone:"auto",state:"active","aria-label":"Ultron"})}),n.jsx(VA,{children:"New page"}),n.jsx(GA,{children:"Ask Ultron to set something up, look into a risk, or draft a change."})]}):n.jsxs(YA,{children:[e.map((x,y)=>n.jsx(Gm,{"data-from":x.role,children:n.jsx(KA,{"data-from":x.role,children:x.text})},y)),o&&n.jsx(Gm,{"data-from":"ultron",children:n.jsxs(ZA,{"aria-label":"Ultron is replying",children:[n.jsx(vu,{}),n.jsx(vu,{}),n.jsx(vu,{})]})}),n.jsx("div",{ref:d})]})}),n.jsx(XA,{children:n.jsxs(JA,{onSubmit:x=>{x.preventDefault(),g()},children:[n.jsx(eT,{rows:1,value:s,placeholder:"Ask Ultron anything…","aria-label":"Message Ultron",onChange:x=>l(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),g())}}),n.jsx(tT,{children:n.jsx(Ra,{state:h?"ready":"disabled-invalid",onSend:g})})]})})]})}const HA=f.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,WA=f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,UA=f.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) var(--space-6);
  text-align: center;
`,qA=f.span`
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
`,VA=f.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,GA=f.p`
  margin: 0;
  max-width: 420px;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,YA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,Gm=f.div`
  display: flex;
  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }
`,KA=f.div`
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
`,QA=_e`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,ZA=f.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) 0;
`,vu=f.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${QA} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,XA=f.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  justify-content: center;
`,JA=f.form`
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
`,eT=f.textarea`
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
`,tT=f.div`
  flex-shrink: 0;
  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`,nT={"Shift Drop Recovery":{new:"Shift Replacement Needed",working:"Finding Shift Replacement",done:"Shift Replacement Found"},"Shift Release Recovery":{new:"Released Shift Needs Filling",working:"Filling Released Shift",done:"Released Shift Filled"},"Time-Off Coverage Check":{new:"Time-Off Decision Needed",working:"Checking Time-Off Coverage",done:"Time-Off Handled"},"Document Filing":{new:"Document Needs Filing",working:"Filing Document",done:"Document Filed"},"New Lead Screening":{new:"New Lead to Screen",working:"Screening New Lead",done:"Lead Screened"},"Shift Offer":{new:"Shift Ready to Offer",working:"Offering Shift",done:"Shift Offered"},"Candidate Onboarding":{new:"Onboarding to Start",working:"Onboarding Candidate",done:"Candidate Onboarded"},"Missed Clock-In":{new:"Missed Clock-In to Check",working:"Checking Missed Clock-In",done:"Clock-In Resolved"},"Informal Cancellation":{new:"Cancellation Needs Coverage",working:"Covering Cancellation",done:"Cancellation Covered"},"Bulk Fill":{new:"Shifts Need Filling",working:"Filling Shifts",done:"Shifts Filled"},"Open Timesheet":{new:"Timesheet Needs Fixing",working:"Fixing Timesheet",done:"Timesheet Fixed"},"Invoice Roll-Up":{new:"Charge Needs Billing",working:"Adding Charge to Invoice",done:"Charge Billed"},"Schedule Confirmation":{new:"Schedule Needs Confirming",working:"Confirming Schedule",done:"Schedule Confirmed"},"Birthday Greeting":{new:"Birthday to Send",working:"Sending Birthday Wish",done:"Birthday Sent"},"Scheduled Report":{new:"Report Needs Publishing",working:"Publishing Report",done:"Report Published"},"Clock-In Approval":{new:"Clock-In Needs Approval",working:"Approving Clock-In",done:"Clock-In Approved"},"Profile Update":{new:"Profile Needs Updating",working:"Updating Profile",done:"Profile Updated"},"Autonomous Fill":{new:"Auto-Fill Needs Confirming",working:"Confirming Auto-Fill",done:"Shift Auto-Filled"},"Invoice Reconciliation":{new:"Payment Needs Reconciling",working:"Reconciling Payment",done:"Payment Reconciled"},"Credential Lapse":{new:"Expired Credential to Fix",working:"Renewing Credential",done:"Credential Renewed"}};function Ym(e,o){const i=nT[e];return i?o==="done"?i.done:o==="new"?i.new:i.working:e}const rT=24,Km=.25,oT=_v-.03;function Oh({className:e}){return n.jsxs(aT,{className:e,"aria-hidden":"true",children:["Ultr",n.jsx(iT,{children:n.jsx(st,{mark:"circle",size:rT,tone:"auto",state:"active"})}),"n"]})}const aT=f.span`
  ${Cv}
`,iT=f.span`
  display: inline-block;
  position: relative;
  /* The slot IS the cap band: one cap-height square whose bottom rests on the
     baseline (an inline-block's baseline is its bottom margin edge). That makes
     it occupy exactly the space a capital does, so no nudging is needed — the
     mark's centre lands on the caps' centre by construction. */
  width: ${Bm}em;
  height: ${Bm}em;
  vertical-align: baseline;
  /* Side room. The margins are deliberately unequal — see GLYPH_GAP_SKEW; the
     right side has to buy back the tracking the browser doesn't apply after an
     atomic inline. Equal margins here look plainly lopsided. */
  margin-left: ${Km}em;
  margin-right: ${Km+oT}em;

  > canvas {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;function sT({onNew:e}){return n.jsxs(lT,{children:[n.jsx(cT,{}),n.jsx(dT,{role:"button",tabIndex:0,"aria-label":"New page",onClick:o=>{o.stopPropagation(),e==null||e()},onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),o.stopPropagation(),e==null||e())},children:n.jsx(Ql,{size:16})})]})}const lT=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
  font-family: var(--font-sans);
`,cT=f(Oh)`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  color: var(--color-content-primary);
`,dT=f.span`
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
`,uT=45;function hT({text:e,className:o}){const[i,s]=v.useState(0);v.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){s(e.length);return}s(0);let h=0;const p=setInterval(()=>{h+=1,s(h),h>=e.length&&clearInterval(p)},uT);return()=>clearInterval(p)},[e]);const l=i>=e.length;return n.jsxs(pT,{className:o,children:[e.slice(0,i),!l&&n.jsx(mT,{"aria-hidden":"true",children:"|"})]})}const pT=f.span`
  white-space: nowrap;
`,fT=_e`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,mT=f.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${fT} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,xu=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function gT(){const e=v.useMemo(()=>["All",...Array.from(new Set(xu.map(l=>l.tag)))],[]),[o,i]=v.useState("All"),s=o==="All"?xu:xu.filter(l=>l.tag===o);return n.jsx(vT,{children:n.jsxs(xT,{children:[n.jsxs(yT,{children:[n.jsx(st,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),n.jsxs(wT,{children:[n.jsx(bT,{children:"Memory"}),n.jsx(kT,{children:"What Ultron has learned and carries between sessions."})]})]}),n.jsx(_T,{role:"tablist","aria-label":"Filter memories by category",children:e.map(l=>n.jsx(CT,{type:"button",role:"tab","aria-selected":o===l,$active:o===l,onClick:()=>i(l),children:l},l))}),n.jsx(jT,{children:s.map((l,d)=>n.jsx(ST,{children:n.jsxs($T,{children:[n.jsx(MT,{children:l.title}),n.jsx(RT,{children:l.detail})]})},d))})]})})}const vT=f.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,xT=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,yT=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,wT=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,bT=f.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,kT=f.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,_T=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,CT=f.button`
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
`,jT=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,ST=f.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,$T=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,MT=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,RT=f.span`
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
`;const Vu=[{id:"employees",label:"Employees",icon:n.jsx(Xr,{size:16})},{id:"shifts",label:"Shifts",icon:n.jsx(jn,{size:16})},{id:"locations",label:"Locations",icon:n.jsx(lh,{size:16})},{id:"timesheets",label:"Timesheets",icon:n.jsx($o,{size:16})},{id:"credentials",label:"Credentials",icon:n.jsx(Pi,{size:16})}];f.div`
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
`;function NT({collectionId:e}){const o=Vu.find(i=>i.id===e)??Vu[0];return n.jsxs(LT,{children:[n.jsxs(AT,{children:[n.jsx(TT,{children:o.label}),n.jsx(Ma,{children:"Account database"})]}),n.jsxs(ET,{role:"status",children:[n.jsx(IT,{"aria-hidden":"true",children:n.jsx(dg,{size:24})}),n.jsxs(PT,{children:[o.label," — demo stub"]}),n.jsxs(zT,{children:["Connect a data source to browse ",o.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const LT=f.div`
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
`,AT=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,TT=f.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,ET=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,IT=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,PT=f.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,zT=f.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`;function Sv({size:e=22,className:o}){return n.jsxs("svg",{width:e,height:e*(80/94),viewBox:"0 0 94 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,role:"img","aria-label":"Teambridge",children:[n.jsx("path",{d:"M66.4971 48.5203V58.6884C67.2261 59.1629 67.9007 59.5855 68.5508 59.9754L80.003 66.8496L84.2411 59.7409L72.789 52.8667C70.6209 51.5661 68.5073 50.1045 66.4998 48.523",fill:"currentColor"}),n.jsx("path",{d:"M80.0032 67.5995C79.8699 67.5995 79.7366 67.5641 79.6197 67.4932L68.1675 60.619C67.5065 60.2236 66.8292 59.7955 66.092 59.3183C65.8798 59.1792 65.752 58.9447 65.752 58.6911V48.5312C65.752 48.5121 65.752 48.493 65.752 48.4767C65.7764 48.0867 66.1001 47.7759 66.4973 47.7759C66.6823 47.7759 66.8509 47.844 66.9815 47.9558C68.9537 49.5101 71.0374 50.9471 73.17 52.2287L84.6222 59.1029C84.9758 59.3156 85.09 59.7737 84.8806 60.1309L80.6425 67.2396C80.5418 67.4086 80.3759 67.5341 80.1828 67.5804C80.1229 67.5968 80.0631 67.6022 80.0005 67.6022L80.0032 67.5995ZM67.2426 58.2821C67.8356 58.6639 68.3906 59.0102 68.9346 59.3347L79.7448 65.8244L83.2158 60L72.4029 53.5103C70.6375 52.4496 68.9074 51.288 67.2426 50.0391V58.2821Z",fill:"currentColor"}),n.jsx("path",{d:"M83.7788 39.1704C77.5032 35.1729 74.1628 32.7679 66.5081 23.396V36.4354C70.1124 39.7866 74.8184 43.3423 78.2785 45.6465L88.8656 52.0053L93.1554 44.8039L82.7125 38.5323L83.7788 39.1731V39.1704Z",fill:"currentColor"}),n.jsx("path",{d:"M88.8657 52.7632C88.7297 52.7632 88.5964 52.7277 88.4767 52.6568L77.8896 46.298C77.8896 46.298 77.8706 46.2871 77.8597 46.2789C74.6716 44.1575 69.8785 40.6045 65.9941 36.9942C65.839 36.8497 65.752 36.6479 65.752 36.438V23.3985C65.752 23.0795 65.9532 22.7932 66.2525 22.6841C66.5544 22.5751 66.889 22.6705 67.0903 22.9159C74.8049 32.356 78.08 34.6438 84.1761 38.5267L93.5418 44.152C93.9009 44.3674 94.0178 44.8337 93.8029 45.1909L89.5131 52.3923C89.4098 52.5641 89.2438 52.6895 89.048 52.7386C88.9881 52.755 88.9256 52.7604 88.863 52.7604L88.8657 52.7632ZM78.6812 45.0055L88.6073 50.9662L92.1218 45.0655L82.3263 39.1811C82.2501 39.1347 82.1848 39.0802 82.1332 39.0148C77.1252 35.7835 73.6787 33.1577 67.2644 25.4982V36.1026C71.0428 39.5765 75.7488 43.0504 78.6812 45.0028V45.0055Z",fill:"currentColor"}),n.jsx("path",{d:"M50.9436 78.6185H59.0608V31.6689C56.8846 36.9643 54.1562 42.0143 50.9436 46.6962V78.6185Z",fill:"currentColor"}),n.jsx("path",{d:"M59.0606 79.3953H50.9434C50.5381 79.3953 50.209 79.0463 50.209 78.6182V46.6959C50.209 46.5323 50.2579 46.3714 50.3504 46.2378C53.5277 41.605 56.2316 36.5986 58.3887 31.3578C58.5274 31.0197 58.8729 30.8342 59.2102 30.9079C59.5502 30.9842 59.7951 31.3005 59.7951 31.6686V78.6182C59.7951 79.049 59.4659 79.3953 59.0606 79.3953ZM51.6779 77.8383H58.3261V35.1998C56.4301 39.3036 54.2023 43.241 51.6779 46.9467V77.8383Z",fill:"currentColor"}),n.jsx("path",{d:"M34.4211 78.6186H43.0089V57.2571C40.3376 59.823 37.4515 62.2225 34.4211 64.3985V78.6186Z",fill:"currentColor"}),n.jsx("path",{d:"M42.4076 79.3954H34.3721C33.9722 79.3954 33.6458 79.0464 33.6458 78.6183V64.3982C33.6458 64.1473 33.7573 63.9128 33.9504 63.7656C36.7577 61.6114 39.4344 59.2337 41.9071 56.6951C42.1165 56.4796 42.4266 56.4169 42.6932 56.5424C42.9598 56.6651 43.1339 56.9459 43.1339 57.2568V78.6183C43.1339 79.0491 42.8102 79.3954 42.4076 79.3954ZM35.0984 77.8385H41.6813V59.0483C39.6003 61.0879 37.3942 63.0157 35.0984 64.7936V77.8357V77.8385Z",fill:"currentColor"}),n.jsx("path",{d:"M4.04653 54.0585L0.779541 46.6607C11.3395 41.9734 19.5355 35.8954 25.1446 28.5904C31.1726 20.74 34.2275 11.3818 34.2275 0.777344H42.2984C42.2984 24.5275 29.0699 42.9523 4.04653 54.0612V54.0585Z",fill:"currentColor"}),n.jsx("path",{d:"M4.04671 54.8354C3.95151 54.8354 3.8563 54.819 3.76653 54.7836C3.5734 54.71 3.42106 54.5627 3.33674 54.3718L0.0670215 46.9741C-0.107073 46.5815 0.0697417 46.1206 0.461455 45.9488C10.899 41.3161 18.9971 35.3144 24.5246 28.1158C30.4438 20.4044 33.4469 11.207 33.4469 0.77713C33.4469 0.3463 33.7951 0 34.2222 0H42.2931C42.7229 0 43.0684 0.349027 43.0684 0.77713C43.0684 24.86 29.6821 43.5302 4.3541 54.7727C4.25345 54.8163 4.14736 54.8381 4.04127 54.8381L4.04671 54.8354ZM1.80253 47.0532L4.44115 53.0303C28.4308 42.1477 41.2322 24.3746 41.5151 1.55426H34.9947C34.8479 12.0169 31.7414 21.2688 25.7569 29.0647C20.194 36.3097 12.1367 42.3577 1.79981 47.0559L1.80253 47.0532Z",fill:"currentColor"}),n.jsx("path",{d:"M10.7113 68.821L7.38721 61.4478C19.4514 55.9833 30.4221 47.1595 38.2781 36.6042C46.6047 25.4189 51.0033 13.0285 51.0033 0.7771H59.0743C59.0743 14.7873 54.1207 28.8492 44.7468 41.4442C36.0856 53.0793 23.9996 62.803 10.7113 68.821Z",fill:"currentColor"}),n.jsx("path",{d:"M10.7116 69.5981C10.6191 69.5981 10.5266 69.5817 10.4368 69.549C10.2437 69.4754 10.0887 69.3309 10.0043 69.1427L6.6802 61.7695C6.50339 61.3769 6.67748 60.9161 7.0692 60.7415C19.0164 55.3289 29.8783 46.595 37.6582 36.1433C45.8841 25.0944 50.2311 12.8649 50.2311 0.779816C50.2311 0.348986 50.5792 0.00268555 51.0063 0.00268555H59.0772C59.507 0.00268555 59.8525 0.351712 59.8525 0.779816C59.8525 14.959 54.8446 29.1819 45.37 41.9132C36.6326 53.6519 24.4379 63.4629 11.0299 69.5354C10.9292 69.5817 10.8204 69.6036 10.7116 69.6036V69.5981ZM8.41299 61.8322L11.0979 67.7875C23.9917 61.7995 35.6969 52.3022 44.1269 40.9779C53.226 28.7538 58.117 15.139 58.2965 1.55422H51.7761C51.5939 13.7211 47.1518 25.9861 38.9013 37.0704C31.1215 47.5249 20.3167 56.2942 8.41299 61.8322Z",fill:"currentColor"})]})}const DT="/Ultron_Onboarding/assets/levis-stadium-CO6biSRl.webp",OT="data:image/webp;base64,UklGRhALAABXRUJQVlA4WAoAAAAQAAAA0gEAVwAAQUxQSPwIAAABsFVrb9jaliAYgiAEgiGEwTaDbQYxg4aByyCLgSAEgiAYwv/QNpblrN67n05ETAD9L7nkx6EKACpHWZn+9YYsDd1njf9yosBa//I/miQYWvn/DSHmepyqqnI81uXGeE3lUV8fJcXFVxQM38aEJZVHPURE6qOsy42FJZVaD5FaS47LzS0ppVRKKTmlGC6FTdCrNQ4JzBzMeIkxshHno6G3SYlewgMedTEKcTsa+uURRzAzm4UlxrhYhVwVve1IPCDVWqtBqLXW9UOq10u8duC6Lp+iwFYTW20N75uq6rlcCPFxNryNBmETWGuNHqLC6WYQsjSYa11s+MT7pq/bFc7S8PawCFlgXaPZEwAMGADKhyd6tfIF7YC+iwJ7TTaMXvnAj4aLtYsfDUM1DfsLv8LXQhaMlmgh6I0fkuAqd/HWMFLjfQCobIVIRCwYq+wB8YUrrveEDeM1jXnAs/IF3ho8Vu47u+qbqLjeEzYMr3wjULY6iGLD8M3DTkR/GkZEhUvlARW+ld+FCq+6dmlXC0ThQG/H3waHuk7U0uddX6DBCLzB48OBEv1F97UH3G5mFZ5bTUxv/zY43kYhEitGhANOt3mUruYXFKsGn2cYhvgHI/iEY2GbDY5bCfSZxRO2UTs3jGCF2+0WKL20YOT2DMMEI1jhWtlig+M90PWkjvBnEBpGLA2Ot1sgAYA8F2SY6SdWOFfuW+A4Uzero8aDTOnj0uB6u4X4UifDYx5WuFfuCeookSGrH8il09XS4Hy9g/ByzoZ1GsGEZ+h4wG8mU25+kK6IJ1Z4b3wD1ADodI0n2TDl4xrDbyHj7KiFORT+5Q5wCzjmYEy6XjrHqF5RMlc/yFNsmHGdj19kPkRv+4vO0sKFBPO2JyYiCnHXN6tddnTOwJhS50sv+w2It0JEfzFtuXBaaQ50NT6BSvbBEeIEOgfSdPoSbwDRH+s8jT9EGJdAvaw8gNTR7i9hUu2K/WnQBgBKdyD+NkxcPlQbXci5OGr+dBbEHmuzeOA13QKiO52phXfNRJkmOfe8xpiKjEB01YhWTCv+Wv0seLvTPexOzppTSilQwtT5zQpLZZpCS6DP/ByQfbRaUkopEB0DJDHRktSsBXf9O91ECw4kB/osc8mbapJohpaok9Xsx0ErkT4zzDXSx2yF1FH7j1ESyUmTPaVUZADiMI10lTFS8hpjfuoI8ItaCE14HoG6uVnpuD3Q1WSmTBeTVe2gfh4jkS6O0RzoPWc120cp0+U0QCJ9TDogExHDcp0hk2W2QhhV6PphxnR5N1J3Lb7uLy2Qkz3QVT6tdFSk64dZy3SVn3Y/RBQtlG6zWS2DKnU2q0rXQ7MBe1N6DQ0AipNCvWKEMKZRZ7NqC3UWs0ZE2eLnPopVGpQ6FljHDnoarXNQfmnsYqfuoEbrmLNjgfVC3bsVmGi3yPcRrcqg2JHMQk82ypOQAMDhQbmPolEeIx2rVSHD02olOizWKcL6OE7Vpqc8Eo+qrnYz6k1GdZb4guggkaXYVE/FSMkyWmUisYj+QhZ0nhsP+XF1mEmvGv3MQsfL6YBNoo2MqR1Po2RCYrTfAz8aLCsPOF2JmdNzGm4AkIedZNtM1JMYsU00qkbJV9gajNtmp4OWDp1Lp6Hy0sKoH6Pjlk4ybjY/RtkVKwYeq1UbxB3tlwoKAI9RxWg3gSe1EavTRoyqp9gwtFnBFX4pWl8Qpyi/ydPsaaGOVszZviGSFxm0/yKn1WG2W4DdcJtEB8UvIb4gjfkx2k2ap9OmWYlZMiluFJOKK53rnIn2Fw1DmpGYqCexQTSC2WJyetnw9chUoQFAGYJoEmAqnp5Gu00yqkTBBNEH668gc+0fUq21GoRaa10/pFrr4xqlWmt9jKkmyeZnzE9HMWrBRI0KEYmJ+Ei4qbXjOVf8ML0d2CCoTRkjHckID4u/MF6JaDdBdnHeVeooUwndnhg8YLt6WqyQ+5ZmtRBRtGnsIGCkaruNZBboNx2ArWuD8TLm7KBmhT89i8KaXpsJzjAuDjiYiJbnAHXFZuuXgO1aeMC40RjtETNs1/42WMubYoM6rtgVep9nyR3UrORbwMmfQlZY//jKdjj5UxTYlzfBCHXYbrbT532S0nNY4Y9VfOj+uwCSI3PMtcE++eIBgOS48JoFI5c3JEY4edBh1fhCaFbNVzZrq0XYTgAt/DIeeRB6SEZ4VHofraDLGLH6oau7FQbtPcEMqHwtrA/B+/RtCDnLc6UPJFbANuSwKpeyWRhTe0jsAClrZF5iKlVxVb6N5C20qfgT20HTgKfVfimZsa84wj58F0rDuIfKTJUuFjtAotluJZfqPdA5Qf4ukr/QJuIrQQcAkoySFfiKmi3O0gTyVSj5ozJPoctLGwHoxhaLmVzYYB7HSB+JP4SbaXOlGYLOouEa5TEAJC9d1Kxw8JvwwG3ECcrNYGqlGSjOEqm3jAKgNS3XnmbQLfKyNQxM3mj3J18Ee1gMaJ+jUP9z3GuTo6QY+SXaOfQXTneIX0MhD9GCzhmELJ8uLp4PovP3IG7uyrdwkIvFhNWfBhMqrpSJ0i9CS/PWvgQNPtiEWL0pk3FxJIGISH4RWpozxK9AmSYiVl8nk/miXjK95TbL+uZpVY1oUWf7N3AyTUWsnp6BBvLTxRnpY54lTkGsvs4vYA/kJVgR7X4yDWYd1jJdLR5Od7sZhaenk3+9lqnfjgYm9SELjU86pJVA18uwltmCxxQ7oqReWqF7tVIdUgP5aSOIdwctk8/4NJMcqDu3McJEzYDG5BFERT20EuhXEH7aSSRTMxlCxM9BrQRyG9LR+qQwmfJzgEQiIuk7B8UxxEVHyRrods2I+KkWbY9kvdu0dRARp9NOInlf1v0QbWiqR80xkH0UI4n0lrWnre8WtREan44BUpjueAARrU+9pnukoRzjmq6ucWFyyelofVpToFvncva0mgJd5Bjjml5jjBzoMy8xpssxciCXYX2eBlpToJseQ0Qcc6m11pKWQDe+xLxXeVv3vAb6DUPMexURqXtemX7BEFOp8rbWkpZANz7s3+x//vtvYOmQU/VCU1U5dv6nA1ZQOCDuAQAAMB4AnQEq0wFYAD5tMJVGpCMiISzoKIANiWlu4MED+AZb5tn4a/QD+OwQD8AP0A/gGqAfgB+gH8AgQD8ALru44Gk8c/wD8AP0T/K/v8HiWAX0iEE98qOfuWHCqjQxmpjzRLZ5962muboXFX52oUTGV1ciNXu060DOJIVOG9dw8ak1a1yOcrKo4AFxoSGMLWO0Fk7gQAJYuoxXP36alwbL/FKXImWQqIZ4zPKGBfH4adYxeHx+xPLmFa69hMWt8WYL/ltn1DhtFSRna9zrTa0WoHDmpQVfwUF5auPIHcxbukX5BRT98xsX2MXmM2sY1rJgdZMDrndfut50gAD9MmI1Dqqzrs45xv//9iPejJp33ezzf/1F9YlvDu1v3VM+T//+xIHlLQ5f9QtMGSJ4DqAAyAdppzCQC5xQeJJZhNBdJxNsMCk1ftYw0Gyz/+yj6BhBcJw+iAui03a9WmTU5ile6HD5HwXTf4GUpf//2iZ0iqIqNr4Gv2kllcwkmHWJkzT/gUf5DU4SnQp8CscxcTPP7+8mqyihLzMZZR6CH9EDyyD4E8THwK/31qcrWlu6Da8Ve4PgbuB26fY0XwMNh6CD+BpmWV+CbaCB23Q1/+pGqTcSIf7r2e8C4AFKMRH8CeDr5sE18RE4ciTEIWQAAAA=",FT="/Ultron_Onboarding/assets/florida-panthers-CzKArKmm.webp",BT="/Ultron_Onboarding/assets/express-healthcare-CyWzv_HP.webp",HT="/Ultron_Onboarding/assets/modsquad-CN5zaz5-.png",WT="/Ultron_Onboarding/assets/titan-medical-group-CzUHaHlx.webp",UT="/Ultron_Onboarding/assets/united-staffing-solutions-CqTdN2IS.webp",qT=560,$v=320,jr="cubic-bezier(0.22, 1, 0.36, 1)",Mv=140,Rv={landing:0,workplace:20,loading:40,questions:58},yi=[{key:"pay",prompt:"How are your workers paid?",sub:"So I turn on pay the right way from the start.",options:[{id:"w2",icon:hg,title:"W-2",caption:"Employees on your payroll."},{id:"1099",icon:kg,title:"1099",caption:"Independent contractors."},{id:"both",icon:pg,title:"Both",caption:"A mix of W-2 and 1099."}]},{key:"billing",prompt:"How do you bill clients?",sub:"So I handle billing the way you actually work.",options:[{id:"hourly",icon:jn,title:"Hourly",caption:"Per hour worked."},{id:"month",icon:fg,title:"By month",caption:"A flat monthly rate."},{id:"post",icon:bg,title:"By post",caption:"Per site or position covered."}]},{key:"worksite",prompt:"Where does your team work?",sub:"So I set up your sites and scheduling to match.",options:[{id:"one",icon:Si,title:"One location",caption:"A single site."},{id:"multi",icon:dh,title:"Multiple locations",caption:"Several of your own sites."},{id:"client",icon:lh,title:"Client sites",caption:"Out at client locations."}]}];function VT({onComplete:e}){const[o,i]=v.useState("landing"),[s,l]=v.useState({}),[d,h]=v.useState(!1),[p,g]=v.useState(!1),x=ic(),y=v.useRef(null),w=v.useCallback(N=>{y.current===null&&(g(!0),y.current=window.setTimeout(()=>{N(),g(!1),y.current=null},x?0:$v))},[x]);v.useEffect(()=>()=>{y.current!==null&&window.clearTimeout(y.current)},[]);const k=()=>w(()=>{i("landing"),l({}),h(!1)}),R=()=>w(()=>i("workplace")),S=N=>{l(L=>({...L,...N})),h(!0),w(()=>i("loading"))},_=N=>{const L={...s,...N};if(l(L),L.companyWebsite){e(L);return}w(()=>i("questions"))},$=N=>e({...s,...N}),M=d?1:o==="landing"?0:.4,[C,j]=v.useState(!1),D=C;return n.jsxs(yE,{children:[n.jsx(Ph,{links:M}),n.jsx(zh,{}),n.jsx(wE,{type:"button","aria-label":"Restart demo",title:"Restart demo",onClick:k,children:n.jsx(Sv,{size:22})}),n.jsx(bE,{children:n.jsxs(kE,{children:[o!=="landing"&&n.jsx(_E,{children:n.jsx(Nv,{children:n.jsx(st,{mark:D?"lines":"magnetic",size:Mv,tone:"auto",state:"active",motionSpeed:D?1.7:1,cellCount:Rv[o],"aria-label":"Ultron"})})}),n.jsxs(jE,{$exiting:p,children:[o==="landing"&&n.jsx(nE,{onNext:R}),o==="workplace"&&n.jsx(sc,{children:n.jsx(aE,{onAnswer:S})}),o==="loading"&&(s.companyWebsite||s.failedWebsite||s.noWebsite)&&n.jsx(sE,{website:s.companyWebsite,failedWebsite:s.failedWebsite,onDone:_,onProcessingChange:j}),o==="questions"&&n.jsx(mE,{onComplete:$})]})]})})]})}const GT="Lead the work that matters.",YT="Show us your company and we'll set up the work.",KT=41e3,Qm=[{name:"Levi's Stadium",src:DT},{name:"ProCare HR",src:OT},{name:"Florida Panthers",src:FT},{name:"Express Healthcare",src:BT},{name:"ModSquad",src:HT},{name:"Titan Medical Group",src:WT},{name:"United Staffing Solutions",src:UT}],Zm=[{quote:"Ultron turned three days of scheduling into ten minutes. It just handles the busywork so my managers don't have to.",name:"Dana Okafor",role:"Director of Operations",org:"Meridian Care",avatarColor:"purple",photo:"https://i.pravatar.cc/160?u=dana.okafor"},{quote:"Every event used to start with a spreadsheet marathon. Now open shifts fill themselves before I've finished my coffee.",name:"Marcus Webb",role:"Event Staffing Manager",org:"Levi's Stadium",avatarColor:"blue",photo:"https://i.pravatar.cc/160?u=marcus.webb"},{quote:"Onboarding a class of forty caregivers used to eat my whole week. Ultron drafts it, I review it, done by lunch.",name:"Priya Raman",role:"VP of People",org:"ProCare HR",avatarColor:"green",photo:"https://i.pravatar.cc/160?u=priya.raman"},{quote:"It caught a credential lapse we'd have missed and reworked the schedule around it before anyone had to call in.",name:"Sofia Delgado",role:"Compliance Lead",org:"Express Healthcare",avatarColor:"orange",photo:"https://i.pravatar.cc/160?u=sofia.delgado"},{quote:"It's like giving every team its own ops coordinator without adding headcount. My leads finally lead again.",name:"Jamie Chen",role:"Workforce Lead",org:"ModSquad",avatarColor:"azure",photo:"https://i.pravatar.cc/160?u=jamie.chen"}],QT=6e3;function ZT(){return n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[n.jsx("path",{fill:"#4285F4",d:"M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"}),n.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"}),n.jsx("path",{fill:"#FBBC05",d:"M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9 9 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"}),n.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.346l2.582-2.581C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"})]})}function XT(){return n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[n.jsx("rect",{x:"1",y:"1",width:"7.2",height:"7.2",fill:"#F25022"}),n.jsx("rect",{x:"9.8",y:"1",width:"7.2",height:"7.2",fill:"#7FBA00"}),n.jsx("rect",{x:"1",y:"9.8",width:"7.2",height:"7.2",fill:"#00A4EF"}),n.jsx("rect",{x:"9.8",y:"9.8",width:"7.2",height:"7.2",fill:"#FFB900"})]})}function JT(){return n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true",children:n.jsx("path",{fill:"currentColor",d:"M16.365 1.43c0 1.14-.42 2.2-1.11 2.98-.75.87-1.98 1.54-3.13 1.45-.14-1.12.4-2.29 1.06-3.03.73-.83 2.02-1.44 3.18-1.4zM20.44 17.03c-.56 1.29-1.24 2.57-2.31 3.62-.9.88-1.99 1.98-3.4 1.99-1.36.01-1.71-.9-3.56-.89-1.85.01-2.24.91-3.6.9-1.41-.01-2.44-1-3.34-1.88-2.5-2.47-4.4-6.98-1.83-10.13.9-1.11 2.35-1.81 3.87-1.83 1.42-.02 2.76.96 3.56.96.8 0 2.44-1.18 4.11-1.01.7.03 2.66.28 3.92 2.13-3.4 2.09-2.86 6.72.58 8.04z"})})}const eE=[{id:"google",label:"Continue with Google",mark:ZT},{id:"microsoft",label:"Continue with Microsoft",mark:XT},{id:"apple",label:"Continue with Apple",mark:JT}];function tE(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function nE({onNext:e}){const[o,i]=v.useState(""),[s,l]=v.useState(null),d=v.useRef(null);return v.useEffect(()=>{var h;s&&((h=d.current)==null||h.focus())},[s]),n.jsxs($E,{children:[n.jsx(RE,{children:n.jsxs(NE,{children:[n.jsx(Nv,{children:n.jsx(st,{mark:"magnetic",size:Mv,tone:"auto",state:"active",cellCount:Rv.landing,"aria-label":"Ultron"})}),n.jsx(sI,{children:GT}),n.jsxs(LE,{children:[n.jsx(lI,{children:YT}),n.jsxs(AE,{"aria-label":"Get started",children:[n.jsx(TE,{children:eE.map(h=>{const p=h.mark;return n.jsx(EE,{variant:"secondary",size:"lg",type:"button",leadingArtwork:n.jsx(p,{}),onClick:e,children:h.label},h.id)})}),n.jsx(IE,{"aria-hidden":"true",children:n.jsx(PE,{children:"or start with email"})}),n.jsxs(zE,{noValidate:!0,onSubmit:h=>{h.preventDefault(),o.trim()===""||tE(o)?e():l({text:"That doesn't look like an email — try you@company.com."})},children:[n.jsx(Sr,{content:(s==null?void 0:s.text)??"",placement:"top",disabled:!s,children:n.jsx(OE,{ref:d,"aria-label":"Work email",placeholder:"you@company.com",value:o,onChange:h=>{i(h.target.value),s&&l(null)}})}),n.jsx(DE,{variant:"primary",size:"lg",type:"submit",children:"Start for free"}),n.jsx(FE,{children:"No credit card. Free WFM forever. Credits expire — your workspace doesn't."})]})]})]})]})}),n.jsx(ME,{"aria-hidden":"true"}),n.jsx(rE,{})]})}function rE(){const[e,o]=v.useState(0);v.useEffect(()=>{const s=setInterval(()=>o(l=>(l+1)%Zm.length),QT);return()=>clearInterval(s)},[]);const i=Zm[e];return n.jsx(BE,{children:n.jsxs(HE,{children:[n.jsx(oE,{}),n.jsxs(tI,{children:[n.jsx(nI,{children:`“${i.quote}”`}),n.jsxs(rI,{children:[n.jsx(tr,{name:i.name,src:i.photo,alt:i.name,color:i.avatarColor,size:"lg"}),n.jsxs(oI,{children:[n.jsx(aI,{children:i.name}),n.jsx(iI,{children:`${i.role} · ${i.org}`})]})]})]},e),n.jsxs(QE,{children:[n.jsx(ZE,{children:"Trusted by frontline operators"}),n.jsxs(JE,{"aria-label":"Operators using Teambridge",children:[n.jsx(Xm,{children:Qm.map(s=>n.jsx(Jm,{src:s.src,alt:s.name,loading:"lazy"},s.name))}),n.jsx(Xm,{"aria-hidden":"true",children:Qm.map(s=>n.jsx(Jm,{src:s.src,alt:"",loading:"lazy"},`${s.name}-dup`))})]})]})]})})}function oE(){const e=xE(KT,1600);return n.jsxs(WE,{children:[n.jsxs(UE,{children:[n.jsx(VE,{"aria-hidden":"true"}),n.jsx(GE,{children:"Ultron Index · Live"})]}),n.jsx(YE,{children:e.toLocaleString("en-US")}),n.jsx(KE,{children:"pieces of work Ultron performed this week"})]})}function aE({onAnswer:e}){const[o,i]=v.useState(""),s=o.trim().length>0,l=()=>{const d=o.trim();d&&e(gE(d)?{companyWebsite:d}:{failedWebsite:d})};return n.jsxs(n.Fragment,{children:[n.jsx(lc,{children:"Where do you work?"}),n.jsx(uI,{children:"Drop your URL and Ultron will set up Teambridge for your team. No blank slate, no busywork."}),n.jsx(Tv,{onSubmit:d=>{d.preventDefault(),l()},children:n.jsxs(Ev,{children:[n.jsx(JI,{"aria-hidden":"true",children:n.jsx(uh,{size:18})}),n.jsx(Iv,{rows:1,value:o,placeholder:"yourcompany.com","aria-label":"Company website",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),l())}}),n.jsx(Pv,{children:n.jsx(Ra,{state:s?"ready":"disabled-invalid",onSend:l})})]})}),n.jsx(eP,{children:n.jsx(zv,{type:"button",onClick:()=>e({noWebsite:!0}),children:"No website? Pick a workforce instead"})})]})}const yu=["Scanning your site","Identifying your workforce","Mapping services & clients","Organizing your workspace"],iE=820;function sE({website:e,failedWebsite:o,onDone:i,onProcessingChange:s}){return e?n.jsx(cE,{website:e,onDone:i,onProcessingChange:s}):n.jsx(fE,{failedWebsite:o,onDone:i})}const lE=["worker_types","talent_categories","client_types","service_models","tech_footprint","access_model","compliance"];function cE({website:e,onDone:o,onProcessingChange:i}){const{name:s,host:l}=vE(e),d=yu.length,[h,p]=v.useState(1),[g,x]=v.useState(!1),y=v.useRef(null),w=ic();v.useEffect(()=>{if(!g)return;const $=window.requestAnimationFrame(()=>{const M=y.current,C=M==null?void 0:M.closest("main");C?C.scrollTo({top:C.scrollHeight,behavior:w?"auto":"smooth"}):M==null||M.scrollIntoView({behavior:w?"auto":"smooth",block:"end"})});return()=>window.cancelAnimationFrame($)},[g,w]),v.useEffect(()=>{i==null||i(!g)},[g,i]),v.useEffect(()=>()=>i==null?void 0:i(!1),[i]);const k=v.useMemo(()=>b$(e),[e]),R=v.useMemo(()=>lE.reduce(($,M)=>$+k[M].length,0),[k]),S=v.useCallback(()=>{g?o({}):h>=d?x(!0):p($=>Math.min($+1,d))},[h,g,d,o]);v.useEffect(()=>{const $=M=>{M.key.toLowerCase()==="t"&&(M.preventDefault(),S())};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[S]);const _=yu[h-1];return n.jsx(n.Fragment,{children:n.jsxs(sc,{$wide:!0,onClick:()=>{g||S()},children:[n.jsx(lc,{children:g?"Nearly there! Your free account is taking shape.":`${_}…`},g?"done":_),n.jsx(cc,{children:g?`Here's what I learned about ${s}.`:"Hang tight — I'm reading your site and getting your workspace ready."}),n.jsxs(yI,{role:"status","aria-live":"polite",$complete:g,children:[n.jsxs(_I,{$running:!g,children:[n.jsx(uh,{size:14}),l,g&&n.jsxs(n.Fragment,{children:[n.jsx(CI,{"aria-hidden":"true",children:"·"}),n.jsxs(jI,{children:[n.jsx($n,{size:13})," read ",R," signals"]})]})]}),n.jsx(wI,{role:"progressbar","aria-valuemin":0,"aria-valuemax":d,"aria-valuenow":g?d:h-1,"aria-label":`Step ${Math.min(h,d)} of ${d}`,$complete:g,children:yu.map(($,M)=>{const C=g||M+1<h?"done":M+1===h?"working":"pending";return n.jsx(bI,{"data-status":C,children:C!=="pending"&&n.jsx(kI,{$working:C==="working"})},$)})})]}),n.jsx(hE,{learned:k,host:l,completed:g?d:h-1,done:g}),g&&n.jsxs(n.Fragment,{children:[n.jsx(BI,{children:n.jsx(HI,{children:"Consider it handled."})}),n.jsx(UI,{children:n.jsx(Fe,{variant:"primary",size:"md",onClick:()=>o({}),trailingArtwork:n.jsx(og,{size:16}),children:"Looks good, continue"})}),n.jsx(qI,{children:n.jsx(zv,{type:"button",onClick:()=>{p(1),x(!1)},children:"Start over"})}),n.jsx(VI,{ref:y,"aria-hidden":"true"})]})]})})}const dE={"Healthcare / Clinical Staffing":hh,"Skilled Trades / Construction Labor":nh,"Warehouse / Logistics & Light Industrial":ch,"Security / Guarding Services":Gl,"Home Care / In-Home Support":yg,"Agriculture / Seasonal Labor":sh,"Hospitality / Events Staffing":Kl,"Call Center / BPO Staffing":$i},uE={Business:{icon:Si,color:"blue"},Workforce:{icon:Xr,color:"purple"},Operations:{icon:Cg,color:"orange"},Compliance:{icon:Pi,color:"green"}};function hE({learned:e,host:o,completed:i,done:s}){const{company:l}=e,d=i<1,[h,p]=v.useState(!1),g=dE[e.workforce_type]??dh;return n.jsxs($I,{children:[n.jsxs(MI,{children:[n.jsx(RI,{children:n.jsxs(LI,{children:[n.jsx(AI,{"aria-hidden":"true",children:d?n.jsx(Ut,{$w:"20px",$h:"20px",$round:!0}):n.jsxs(n.Fragment,{children:[!h&&n.jsx(g,{size:20}),n.jsx(TI,{src:`https://www.google.com/s2/favicons?domain=${encodeURIComponent(o)}&sz=64`,alt:"",$visible:h,onLoad:x=>p(x.currentTarget.naturalWidth>=32),onError:()=>p(!1)})]})}),n.jsxs(EI,{children:[d?n.jsxs(n.Fragment,{children:[n.jsx(Ut,{$w:"240px",$h:"1em"}),n.jsx(Ut,{$w:"160px",$h:"0.85em"})]}):n.jsxs(n.Fragment,{children:[n.jsx(II,{children:e.workforce_type}),n.jsx(PI,{children:l.name})]}),n.jsx(zI,{children:d?n.jsxs(n.Fragment,{children:[n.jsx(Ut,{$w:"110px",$h:"0.9em"}),n.jsx(Ut,{$w:"150px",$h:"0.9em"}),n.jsx(Ut,{$w:"170px",$h:"0.9em"})]}):n.jsxs(n.Fragment,{children:[n.jsxs(wu,{children:[n.jsx(jn,{size:14}),n.jsxs(bu,{children:["Founded ",l.founded]})]}),l.parent&&n.jsxs(wu,{children:[n.jsx(Si,{size:14}),n.jsxs(bu,{children:["Part of ",l.parent]})]}),n.jsxs(wu,{children:[n.jsx(th,{size:14}),n.jsx(bu,{children:l.footprint})]})]})})]})]})},d?"lead-loading":"lead-ready"),e.narrative.map((x,y)=>{const w=i<2,{icon:k,color:R}=uE[x.label]??{icon:Si,color:"neutral"};return n.jsx(NI,{style:{"--group-i":w?y+1:y},children:w?n.jsxs(n.Fragment,{children:[n.jsxs(e0,{as:"div",children:[n.jsx(Ut,{$w:"16px",$h:"16px",$round:!0}),n.jsx(Ut,{$w:"112px",$h:"0.95em"})]}),n.jsxs(t0,{children:[n.jsx(Ut,{$w:"76px",$h:"20px",$round:!0}),n.jsx(Ut,{$w:"92px",$h:"20px",$round:!0}),n.jsx(Ut,{$w:"64px",$h:"20px",$round:!0})]})]}):n.jsxs(n.Fragment,{children:[n.jsxs(e0,{children:[n.jsx(k,{size:16}),x.label]}),n.jsx(t0,{children:x.tags.map(S=>n.jsx(Fn,{size:"sm",variant:"subtle",color:R,children:S},S))})]})},`${x.label}-${w?"loading":"ready"}`)})]}),n.jsx(DI,{style:{"--group-i":s?0:e.narrative.length+1},children:s?n.jsxs(n.Fragment,{children:[n.jsxs(n0,{children:[n.jsx(_g,{size:16}),"Configured for you"]}),n.jsx(OI,{children:e.configured.map(x=>n.jsxs(FI,{children:[n.jsx(Mn,{size:16}),x]},x))})]}):n.jsxs(n.Fragment,{children:[n.jsxs(n0,{as:"div",children:[n.jsx(Ut,{$w:"16px",$h:"16px",$round:!0}),n.jsx(Ut,{$w:"132px",$h:"0.95em"})]}),n.jsxs(SI,{children:[n.jsx(Ut,{$h:"0.85em",$w:"84%"}),n.jsx(Ut,{$h:"0.85em",$w:"72%"}),n.jsx(Ut,{$h:"0.85em",$w:"78%"}),n.jsx(Ut,{$h:"0.85em",$w:"66%"})]})]})},s?"configured-ready":"configured-loading")]})}const pE=[{icon:hh,label:"Travel nurses"},{icon:Kl,label:"Event staff"},{icon:Gl,label:"Security guards"},{icon:ch,label:"Warehouse temps"}];function fE({failedWebsite:e,onDone:o}){const[i,s]=v.useState(""),l=i.trim().length>0,d=()=>{const h=i.trim();h&&o({workforceType:h})};return n.jsxs(sc,{children:[e&&n.jsx(WI,{children:"No problem — let's set it up together."}),n.jsx(lc,{children:"What workforce do you need help with?"}),n.jsx(cc,{children:"Say it in your own words — or grab one of these."}),n.jsx(hI,{children:pE.map(({icon:h,label:p})=>n.jsxs(pI,{type:"button",onClick:()=>o({workforceType:p}),children:[n.jsx(h,{size:16}),p]},p))}),n.jsx(Tv,{onSubmit:h=>{h.preventDefault(),d()},children:n.jsxs(Ev,{children:[n.jsx(Iv,{rows:1,value:i,placeholder:"e.g. home-care aides across three cities","aria-label":"Describe your workforce",onChange:h=>s(h.target.value),onKeyDown:h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),d())}}),n.jsx(Pv,{children:n.jsx(Ra,{state:l?"ready":"disabled-invalid",onSend:d})})]})})]})}function mE({onComplete:e}){const o=ic(),[i,s]=v.useState(0),l=v.useRef({}),d=yi[i],h=p=>{l.current={...l.current,[d.key]:p.title};const g=i+1;g>=yi.length?e(l.current):s(g)};return n.jsxs(sc,{children:[n.jsx(GI,{role:"progressbar","aria-valuemin":1,"aria-valuemax":yi.length,"aria-valuenow":i+1,"aria-label":`Question ${i+1} of ${yi.length}`,children:yi.map((p,g)=>n.jsx(YI,{"data-filled":g<=i||void 0},p.key))}),n.jsx(lc,{children:d.prompt}),n.jsx(cc,{children:d.sub}),n.jsx(KI,{role:"radiogroup","aria-label":d.prompt,children:d.options.map((p,g)=>{const x=p.icon;return n.jsxs(QI,{type:"button",role:"radio","aria-checked":!1,style:{animationDelay:o?"0ms":`${g*70}ms`},onClick:()=>h(p),children:[n.jsx(Lv,{"aria-hidden":"true",children:n.jsx(x,{size:20})}),n.jsxs(ZI,{children:[n.jsx(fI,{children:p.title}),n.jsx(mI,{children:p.caption})]})]},p.id)})})]},d.key)}function gE(e){const o=e.trim().replace(/\s+/g,"");if(!o)return!1;const i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s;try{s=new URL(i).hostname}catch{return!1}return/^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(s)}function vE(e){const o=e.replace(/\s+/g,""),i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s=o;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),{name:(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s,host:s}}function xE(e,o){const i=ic(),[s,l]=v.useState(i?e:0);return v.useEffect(()=>{if(i){l(e);return}let d=0,h=null;const p=g=>{h===null&&(h=g);const x=Math.min(1,(g-h)/o),y=1-Math.pow(1-x,3);l(Math.round(e*y)),x<1&&(d=window.requestAnimationFrame(p))};return d=window.requestAnimationFrame(p),()=>window.cancelAnimationFrame(d)},[e,o,i]),s}function ic(){const[e,o]=v.useState(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}});return v.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return}const s=d=>o(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}const yE=f.div`
  /* Anchors the ambient backdrop layer, which fills the frame behind Scroll. */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`,wE=f.button`
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
`,bE=f.main`
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
`,kE=f.div`
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
`,_E=f.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`,Nv=f.span`
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
`,CE=_e`
  from { opacity: 1; }
  to   { opacity: 0; }
`,jE=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${e=>e.$exiting&&Oe`
      animation: ${CE} ${$v}ms var(--ease-in) forwards;
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
`,SE=_e`
  from { opacity: 0; }
  to   { opacity: 1; }
`,$E=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  width: 100%;
  animation: ${SE} 560ms ${jr} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,ME=f.div`
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
`,RE=f.div`
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
`,NE=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-5);
  width: 100%;
  max-width: 400px;
`,Fh=_e`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,LE=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  width: 100%;
  animation: ${Fh} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,AE=f.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-4);
  width: 100%;
  max-width: 360px;
`,TE=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,EE=f(Fe)`
  && {
    width: 100%;
    ${ur}
  }
`,IE=f.div`
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
`,PE=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,zE=f.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`,DE=f(Fe)`
  && {
    width: 100%;
  }
`,OE=f(Fg)`
  && [class*='shell'] {
    ${ur}
  }
  && input {
    background: transparent;
  }
`,FE=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  text-align: center;
`,BE=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* No surface — the proof content sits directly on the ambient particle
     backdrop; only the padding holds its measure. */
  padding: var(--space-10);
  animation: ${Fh} var(--duration-slow) var(--ease-out) both;

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
`,HE=f.div`
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
`,WE=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,UE=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,qE=_e`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.35; transform: scale(0.8); }
`,VE=f.span`
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-success-fill);
  flex-shrink: 0;
  animation: ${qE} 2s var(--ease-default) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,GE=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,YE=f.span`
  font-family: var(--font-sans);
  /* Anchors the panel now that there's no card around it. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Hold digit width so the count-up doesn't jitter the caption below. */
  font-variant-numeric: tabular-nums;
`,KE=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,QE=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding-top: var(--space-3);
`,ZE=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,XE=_e`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,JE=f.div`
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
`,Xm=f.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-6);
  padding-right: var(--space-6);
  animation: ${XE} 32s linear infinite;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Jm=f.img`
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
`,eI=_e`
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,tI=f.figure`
  ${ur}
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
  animation: ${Fh} var(--duration-slow) var(--ease-out) both;

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
`,cI=_e`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,sc=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  /* $wide widens the step for the workforce-type grid so its three cards have
     room to keep each caption on a single line. */
  max-width: ${e=>e.$wide?"1060px":"720px"};
  text-align: center;
  animation: ${cI} ${qT}ms ${jr} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,lc=f.h1`
  margin: 0;
  font-family: var(--font-sans);
  /* Matches the opening landing headline (Headline) so step titles read consistently. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,cc=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
  max-width: 520px;
`,dI=_e`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,uI=f(cc)`
  animation: ${dI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,hI=f.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
`,pI=f.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  ${ur}
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
    ${kv}
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
`,Lv=f.span`
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
`,Av=_e`
  from { opacity: 0; transform: translateY(10px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,gI=_e`
  from { background-position: 100% 0; }
  to   { background-position: -100% 0; }
`,vI=_e`
  0%   { transform: scaleX(0); }
  68%  { transform: scaleX(1); }
  100% { transform: scaleX(1); }
`,xI=_e`
  0%   { opacity: 1; }
  35%  { opacity: 0.45; }
  100% { opacity: 1; }
`,yI=f.div`
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
    opacity 400ms ${jr} 950ms,
    max-height 400ms ${jr} 950ms,
    margin-top 400ms ${jr} 950ms;

  ${e=>e.$complete&&Oe`
    opacity: 0;
    max-height: 0;
    margin-top: 0;
    pointer-events: none;
  `}

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,wI=f.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;

  ${e=>e.$complete&&Oe`
    & > * > * {
      animation: ${xI} 900ms ${jr};
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    & > * > * { animation: none; }
  }
`,bI=f.div`
  flex: 1;
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  overflow: hidden;
`,kI=f.div`
  height: 100%;
  width: 100%;
  border-radius: var(--radius-full);
  background: var(--color-content-primary);

  ${e=>e.$working&&Oe`
    /* The working fill draws in from the LEFT edge (scaleX, origin left) on a
       loop — draw, hold, redraw — so the bar stays visibly in motion while it
       waits for the next beat, reading as ongoing work rather than a stall. */
    transform-origin: left center;
    animation: ${vI} ${iE+380}ms ${jr} infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: var(--color-content-primary);
  }
`,_I=f.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  /* While the read is still running the line reads lighter (tertiary); once it
     completes it firms up to secondary alongside the "read N signals" tally. */
  color: ${e=>e.$running?"var(--color-content-tertiary)":"var(--color-content-secondary)"};

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,CI=f.span`
  color: var(--color-content-tertiary);
`,jI=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  color: var(--color-success-content);

  svg { color: var(--color-success-content); }
`,Ut=f.span`
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
  animation: ${gI} 1.6s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    background: color-mix(in srgb, var(--color-content-primary) 10%, transparent);
    animation: none;
  }
`,SI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
`,$I=f.div`
  width: 100%;
  max-width: 680px;
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  text-align: left;
`,Bi=Oe`
  animation: ${Av} var(--duration-base) ${jr} both;
  animation-delay: calc(var(--group-i, 0) * 90ms);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,MI=f.div`
  ${ur}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${Bi}
`,RI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${Bi}
`,NI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  border-top: 1px solid var(--color-border-opaque);
  padding-top: var(--space-4);
  ${Bi}
`,LI=f.div`
  display: flex;
  /* Top-aligned: the text block now carries the facts row below the heading,
     so the mark should hug the heading rather than float mid-block. */
  align-items: flex-start;
  gap: var(--space-3);
`,AI=f.span`
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
`,TI=f.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  display: ${e=>e.$visible?"block":"none"};
`,EI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,II=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,PI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,zI=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  margin-top: var(--space-2);
`,wu=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,bu=f.span`
  color: var(--color-content-primary);
`,DI=f.div`
  ${ur}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  ${Bi}
`,e0=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,t0=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-1);
`,n0=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,OI=f.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,FI=f.li`
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
`,BI=f.div`
  display: flex;
  justify-content: center;
  padding-top: var(--space-2);
  ${Bi}
`,HI=f.p`
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
`,UI=f.div`
  display: flex;
  justify-content: center;
  margin-top: var(--space-2);

  & > button {
    height: 40px;
    padding: 0 var(--space-4);
  }
`,qI=f.div`
  display: flex;
  justify-content: center;
`,VI=f.div`
  width: 100%;
  height: 0;
`,GI=f.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;
  max-width: 140px;
`,YI=f.span`
  flex: 1;
  /* Hairline — deliberately below the 4px grid for a thin progress line. */
  height: 2px;
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  transition: background var(--duration-base) var(--ease-out);

  &[data-filled] {
    background: var(--color-content-primary);
  }
`,KI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 480px;
  margin-top: var(--space-3);
`,QI=f.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  text-align: left;
  ${ur}
  border-radius: var(--radius-lg);
  cursor: pointer;
  /* fill "backwards" (not "both"): holds the pre-entrance state during the
     stagger delay, but releases transform once the pop finishes — a filled
     animation would keep pinning transform and the hover lift below never
     applies. */
  animation: ${Av} var(--duration-base) ${jr} backwards;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  ${Lv} {
    margin-bottom: 0;
  }

  &:hover {
    ${kv}
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
`,ZI=f.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,Tv=f.form`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  ${ur}
  border-radius: var(--radius-xl);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,Ev=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
`,XI=_e`
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
`,JI=f.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary);
  flex-shrink: 0;
  animation: ${XI} var(--duration-base) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Iv=f.textarea`
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
`,Pv=f(ih)`
  && {
    flex: 0 0 auto;
    width: auto;
    --composer-btn-size: var(--space-8); /* 32px */
    --composer-btn-icon-attach: var(--space-4); /* 16px */
    --composer-btn-icon-send: var(--space-4); /* 16px */
  }
`,eP=f.div`
  margin-top: var(--space-3);
`,zv=f.button`
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
`;function tP({onEnterApp:e}){return n.jsx(VT,{onComplete:o=>e==null?void 0:e(o)})}const nP=768,Dv=`(max-width: ${nP-1}px)`;function Bh(e){const[o,i]=v.useState(()=>typeof window>"u"?!1:window.matchMedia(e).matches);return v.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(e),l=d=>i(d.matches);return i(s.matches),s.addEventListener("change",l),()=>s.removeEventListener("change",l)},[e]),o}function Ov(){return Bh(Dv)}const rP="48px",oP="240px",r0="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",aP=f.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${e=>e.$isExpanded?oP:rP};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${e=>e.$isExpanded?Oe`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:Oe`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${e=>e.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,iP=f.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${e=>e.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${e=>e.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,sP=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,lP=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,cP=f.button`
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
`,dP=f.div`
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
`,uP=f.span`
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
`,o0=f.div`
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
`,ku=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,hP="var(--gradient-ai)",Fv=f.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${e=>e.$isActive&&!e.$isAi&&Oe`
      background: var(--color-bg-primary, white);
      box-shadow: ${r0}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${e=>e.$isActive&&e.$isAi&&Oe`
      background: ${hP};
      box-shadow: ${r0}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,Bv=f.button`
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
`,Hv=f.span`
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
`,Wv=f.div`
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
`,pP=f.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,_u=f.hr`
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
`;const fP=f.button`
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
`,mP=f.div`
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
`,gP=f.span`
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
`;function Cu({item:e,isExpanded:o,showNewBadge:i,isAi:s}){const l=e.isActive??!1,d=e.disabled??!1;return n.jsx(Fv,{$isActive:l,$isAi:s,children:n.jsxs(Bv,{$isActive:l,$isAiActive:l&&!!s,$disabled:d,"aria-disabled":d||void 0,onClick:e.onClick,"aria-current":l?"page":void 0,title:o?void 0:e.label,children:[n.jsxs(Wv,{children:[e.hasUnread&&n.jsx(pP,{}),l&&e.activeIcon?e.activeIcon:e.icon]}),o&&n.jsx(Hv,{children:e.label}),o&&i&&n.jsx(Ma,{variant:"primary",children:"New"})]})})}function vP({items:e,toolItems:o=[],bottomItems:i=[],workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:p,newItemId:g,aiItemId:x}){const[y,w]=v.useState(!1);return n.jsx(aP,{$isExpanded:y,onMouseEnter:()=>w(!0),onMouseLeave:()=>w(!1),"aria-label":"Primary navigation",children:n.jsxs(iP,{$isExpanded:y,children:[n.jsxs(sP,{children:[n.jsxs(cP,{$isExpanded:y,onClick:d,"aria-label":`Workspace: ${s.name}`,title:y?void 0:s.name,children:[n.jsx(dP,{children:s.logoUrl?n.jsx("img",{src:s.logoUrl,alt:s.name}):s.initial??s.name.charAt(0).toUpperCase()}),y&&n.jsxs(n.Fragment,{children:[n.jsx(uP,{children:s.name}),n.jsx(o0,{children:n.jsx(rm,{})})]})]}),n.jsx(ku,{children:e.map(k=>n.jsx(Cu,{item:k,isExpanded:y,isAi:k.id===x},k.id))}),o.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(_u,{}),n.jsx(ku,{children:o.map(k=>n.jsx(Cu,{item:k,isExpanded:y,showNewBadge:k.id===g,isAi:k.id===x},k.id))})]})]}),n.jsxs(lP,{children:[i.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(_u,{}),n.jsx(ku,{children:i.map(k=>n.jsx(Cu,{item:k,isExpanded:y,isAi:k.id===x},k.id))})]}),n.jsx(_u,{}),n.jsx(Fv,{$isActive:!1,children:n.jsxs(Bv,{$isActive:!1,onClick:p,"aria-label":"Settings",title:y?void 0:"Settings",children:[n.jsx(Wv,{children:n.jsx(P2,{})}),y&&n.jsx(Hv,{children:"Settings"})]})}),n.jsxs(fP,{$isExpanded:y,onClick:h,"aria-label":`User: ${l.name}`,title:y?void 0:l.name,children:[n.jsx(mP,{$color:l.avatarColor,children:l.initials}),y&&n.jsxs(n.Fragment,{children:[n.jsx(gP,{children:l.name}),n.jsx(o0,{children:n.jsx(rm,{})})]})]})]})]})})}const xP=270,yP=f.nav`
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
`,wP=f.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,bP=f.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,kP=f.h2`
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
`,_P=f.div`
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
`,CP=f.button`
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
`,jP=f.div`
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
`,SP=f.button`
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
`;const $P=f.span`
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
`,MP=f.div`
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
`,RP=_e`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,NP=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${RP} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,Uv=_e`
  from { opacity: 0; }
  to   { opacity: 1; }
`,LP=_e`
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
`,AP=_e`
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
`,TP=`'Bradley Hand', 'Segoe Print', 'Marker Felt',
  'Chalkboard SE', 'Comic Sans MS', cursive`,EP=_e`
  from { stroke-dashoffset: 1; }
  to   { stroke-dashoffset: 0; }
`,IP=_e`
  0%   { opacity: 0; transform: scale(0.82) rotate(-2deg); }
  55%  { opacity: 1; transform: scale(1.06) rotate(0.8deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
`,Gu=420,PP=180,zP=Gu-60,DP=f.button`
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
  animation: ${Uv} 260ms var(--ease-out, ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,OP=f.div`
  width: 100%;
  visibility: hidden;
  pointer-events: none;
`,FP=f.div`
  position: fixed;
  z-index: 1001;
  border-radius: 8px;
  background: var(--color-bg-primary, #fff);
  box-shadow:
    0 0 0 2px rgb(255 255 255 / 92%),
    0 0 24px rgb(255 255 255 / 28%);
  animation: ${LP} 2.4s ease-in-out infinite;

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
    animation: ${AP} 2.4s ease-out infinite;
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
`,BP=f.div`
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
  font-family: ${TP};
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
`,qv=f.svg`
  flex: 0 0 auto;
  overflow: visible;

  path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: ${EP} ${Gu}ms var(--ease-out, ease-out) both;
  }

  /* The barbs are struck once the shaft has arrived at the tip. */
  path + path {
    animation-duration: ${PP}ms;
    animation-delay: ${Gu-40}ms;
  }

  @media (prefers-reduced-motion: reduce) {
    path,
    path + path {
      stroke-dashoffset: 0;
      animation: none;
    }
  }
`,a0=f.span`
  display: inline-block;
  transform-origin: left center;
  animation: ${IP} 420ms ${zP}ms
    cubic-bezier(0.34, 1.56, 0.64, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: ${Uv} 200ms both;
    transform: none;
  }
`,i0=f.button`
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
`,HP=f.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${e=>e.$outlined&&Oe`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,WP=f.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,UP=f.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,qP=f.div`
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
`,VP=f.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,GP=f.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,YP=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,Vv=f.div`
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
`;function KP(){return n.jsxs(qv,{width:"54",height:"34",viewBox:"0 0 54 34",fill:"none","aria-hidden":"true",children:[n.jsx("path",{d:"M51.5 5.2C41.9 3.4 32 4.6 23.6 8.9c-6.4 3.2-11.9 8.5-15.2 14.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M15.4 19c-3.4.4-6.3 1.9-7.7 4.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M6.4 14.2c.9 3.5 1.4 6.7 1.3 9.7",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"})]})}function QP(){return n.jsxs(qv,{width:"44",height:"40",viewBox:"0 0 44 40",fill:"none","aria-hidden":"true",children:[n.jsx("path",{d:"M8.5 3.5c-.6 10.7 5.8 21.3 20.9 27",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M22.7 30.8c2.7.8 5 .8 6.7-.3",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"}),n.jsx("path",{d:"M30.4 23.6c.4 2.7.1 5-.9 6.9",pathLength:1,stroke:"currentColor",strokeWidth:"2.1",strokeLinecap:"round"})]})}function Gv({prompt:e,onDismiss:o,placement:i="right",children:s}){const l=v.useRef(null),[d,h]=v.useState(null);return v.useLayoutEffect(()=>{const p=l.current;if(!p)return;const g=()=>{const w=(p.firstElementChild??p).getBoundingClientRect();h({left:w.left,top:w.top,width:w.width,height:w.height})};g();const x=new ResizeObserver(g);return x.observe(p),window.addEventListener("resize",g),window.addEventListener("scroll",g,!0),()=>{x.disconnect(),window.removeEventListener("resize",g),window.removeEventListener("scroll",g,!0)}},[]),n.jsxs(n.Fragment,{children:[n.jsx(OP,{ref:l,"aria-hidden":"true",children:s}),d&&Ao.createPortal(n.jsxs(n.Fragment,{children:[n.jsx(DP,{type:"button","aria-label":"Dismiss event highlight",onClick:o}),n.jsx(FP,{$mobile:i==="above",style:{left:d.left,top:d.top,width:d.width,height:d.height},children:s}),n.jsx(BP,{$placement:i,role:"status","aria-live":"polite",style:i==="above"?{left:d.left,top:d.top-12,width:d.width}:{left:d.left+d.width+20,top:d.top+d.height/2},children:i==="above"?n.jsxs(n.Fragment,{children:[n.jsx(a0,{children:e}),n.jsx(QP,{})]}):n.jsxs(n.Fragment,{children:[n.jsx(KP,{}),n.jsx(a0,{children:e})]})})]}),document.body)]})}function Yv(){return n.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function ZP(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const Hh={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function XP({item:e}){return n.jsx(Sn,{label:n.jsx("span",{style:{color:e.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:e.isActive?500:void 0,letterSpacing:"-0.084px"},children:e.label}),leadingSlot:n.jsx(Vv,{children:e.icon??n.jsx(Yv,{})}),selected:e.isActive,onClick:e.onClick,divider:!1,size:"md","aria-current":e.isActive?"page":void 0,style:Hh})}function JP({group:e}){const[o,i]=v.useState(e.defaultExpanded??!0),[s,l]=v.useState(!1),d=e.maxVisible,p=d!=null&&!s&&e.children.length>d?e.children.slice(0,d):e.children,g=e.children.length-p.length;return n.jsxs(HP,{$outlined:e.outlined,children:[n.jsxs(SP,{onClick:()=>i(x=>!x),"aria-expanded":o,children:[n.jsx(MP,{children:o?n.jsx(Bn,{size:16}):n.jsx(Rn,{size:16})}),n.jsx($P,{children:e.label}),e.trailingBadge&&n.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:e.trailingBadge})]}),o&&n.jsxs(NP,{children:[p.map(x=>{const y=n.jsx(Sn,{label:n.jsx("span",{style:{color:x.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:x.isActive?500:void 0,letterSpacing:"-0.084px"},children:x.label}),leadingSlot:n.jsx(Vv,{children:x.icon??null}),trailingSlot:x.trailingSlot,selected:x.isActive,onClick:x.onClick,divider:!1,size:"md","aria-current":x.isActive?"page":void 0,style:Hh});return x.spotlightPrompt?n.jsx(Gv,{prompt:x.spotlightPrompt,onDismiss:x.spotlightDismiss,children:y},x.id):n.jsx(v.Fragment,{children:y},x.id)}),g>0&&n.jsxs(i0,{type:"button",onClick:()=>l(!0),children:["Show ",g," more"]}),d!=null&&s&&e.children.length>d&&n.jsx(i0,{type:"button",onClick:()=>l(!1),children:"Show less"})]})]})}function ez({heading:e,isVisible:o,menuEntries:i=[],menuHeader:s,pageEntries:l=[],showSearch:d=!0,searchValue:h="",onSearchChange:p,onFilterClick:g,headerSlot:x,bodyContent:y,width:w=xP,onWidthChange:k,minWidth:R=220,maxWidth:S=520}){const _=y!==void 0,$=v.useRef(null),[M,C]=v.useState(!1);return v.useEffect(()=>{if(!M||!k)return;const j=$.current;if(!j)return;const D=j.getBoundingClientRect().left,N=A=>{const F=Math.min(S,Math.max(R,A.clientX-D));k(F)},L=()=>C(!1);window.addEventListener("mousemove",N),window.addEventListener("mouseup",L);const E=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",L),document.body.style.userSelect=E,document.body.style.cursor=""}},[M,k,R,S]),n.jsxs(yP,{ref:$,$isVisible:o,$width:w,$isResizing:M,"aria-label":"Secondary navigation",children:[n.jsxs(wP,{children:[(e||x)&&n.jsxs(bP,{children:[n.jsx(kP,{children:e}),x]}),d&&!_&&n.jsxs(_P,{children:[n.jsx(Og,{size:"sm",placeholder:"Search...",value:h,onChange:j=>p==null?void 0:p(j.target.value)}),n.jsx(CP,{onClick:g,"aria-label":"Filter",children:n.jsx(ZP,{})})]})]}),_?y:n.jsxs(jP,{children:[s,i.map(j=>j.type==="single"?n.jsx(XP,{item:j.item},j.item.id):j.type==="group"?n.jsx(JP,{group:j.group},j.group.id):j.type==="divider"?n.jsx(GP,{},j.id):n.jsx(WP,{children:j.label.label},j.label.id))]}),l.length>0&&n.jsxs(UP,{children:[n.jsx(VP,{}),l.map(j=>n.jsx(Sn,{label:n.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:j.label}),leadingSlot:n.jsx(YP,{children:j.icon??n.jsx(Yv,{})}),onClick:j.onClick,selected:j.isActive??!1,divider:!1,size:"md","aria-current":j.isActive?"page":void 0,style:Hh},j.id))]}),k&&o&&n.jsx(qP,{$isResizing:M,onMouseDown:j=>{j.preventDefault(),C(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const tz=f.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:e})=>e?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,nz=f.div`
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
`,Kv=f.div`
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
`,rz=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,oz=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function az(){return n.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),n.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),n.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function s0(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function l0(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function iz(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function sz({heading:e,actions:o=[],showActivityButton:i=!0,showPonderButton:s=!0,noBorder:l=!1,onActivityClick:d,onPonderClick:h,onDotsClick:p}){const g=o.filter(w=>w.variant==="secondary"),x=o.filter(w=>w.variant==="primary"),y=Bh("(prefers-color-scheme: dark)");return n.jsxs(tz,{$noBorder:l,children:[n.jsx(nz,{children:typeof e=="string"?n.jsx(Kv,{children:e}):e}),n.jsxs(rz,{children:[n.jsxs(oz,{children:[n.jsx(Fe,{variant:"ghost",size:"sm",iconOnly:!0,onClick:p,"aria-label":"More options",title:"More options",children:n.jsx(az,{})}),g.map(w=>n.jsx(Fe,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(l0,{}),trailingArtwork:n.jsx(s0,{}),onClick:w.onClick,children:w.label},w.id)),x.map(w=>n.jsx(Fe,{variant:"primary",size:"sm",leadingArtwork:n.jsx(l0,{}),trailingArtwork:n.jsx(s0,{}),onClick:w.onClick,children:w.label},w.id))]}),i&&n.jsx(Fe,{variant:"ghost",size:"sm",iconOnly:!0,onClick:d,"aria-label":"Activity",title:"Activity",children:n.jsx(iz,{})}),s&&n.jsx(G0,{dark:y,onClick:h,"aria-label":"Ponder AI"})]})]})}const lz=f.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,cz=f.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,dz=f.div`
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
`,uz=f.main`
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
`,c0="tb:secondary-nav-width",d0=270,u0=220,h0=520;function hz({items:e,toolItems:o,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:p,newItemId:g,aiItemId:x,secNavHeading:y,menuEntries:w,menuHeader:k,pageEntries:R,showSearch:S,searchValue:_,onSearchChange:$,onFilterClick:M,headerSlot:C,bodyContent:j,heading:D,actions:N,showActivityButton:L,showPonderButton:E,noBorder:A,onActivityClick:F,onPonderClick:G,onDotsClick:Y,children:W,showSecondaryNav:K=!0,showTopNav:J=!0}){const[ae,ce]=v.useState(()=>{if(typeof window>"u")return d0;const se=window.localStorage.getItem(c0),Q=se?parseInt(se,10):NaN;return Number.isFinite(Q)?Math.min(h0,Math.max(u0,Q)):d0});return v.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(c0,String(ae))},[ae]),n.jsxs(lz,{children:[n.jsx(vP,{items:e,toolItems:o,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:h,onSettingsClick:p,newItemId:g,aiItemId:x}),n.jsxs(cz,{children:[K&&n.jsx(ez,{heading:y,menuEntries:w,menuHeader:k,pageEntries:R,isVisible:!0,showSearch:S,searchValue:_,onSearchChange:$,onFilterClick:M,headerSlot:C,bodyContent:j,width:ae,onWidthChange:ce,minWidth:u0,maxWidth:h0}),n.jsxs(dz,{children:[J&&n.jsx(sz,{heading:D,actions:N,showActivityButton:L,showPonderButton:E,noBorder:A,onActivityClick:F,onPonderClick:G,onDotsClick:Y}),n.jsx(uz,{children:W})]})]})]})}function pz({deadZonePx:e=8,topThresholdPx:o=20,target:i}={}){const[s,l]=v.useState(null),d=v.useRef(0);return v.useEffect(()=>{var x;const h=()=>i?i.scrollTop:typeof window<"u"?window.scrollY:0;d.current=h();const p=()=>{const y=h(),w=y-d.current;Math.abs(w)<e||(w>0&&y>o?l("down"):w<0&&l("up"),d.current=y)},g=i??(typeof window<"u"?window:{});return(x=g.addEventListener)==null||x.call(g,"scroll",p,{passive:!0}),()=>{var y;(y=g.removeEventListener)==null||y.call(g,"scroll",p)}},[e,o,i]),s}const fz=f.button`
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
`,mz=f.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,gz=f.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function p0({label:e,isOpen:o,onClick:i,ariaLabel:s}){return n.jsxs(fz,{type:"button",$active:o,onClick:i,"aria-haspopup":"dialog","aria-expanded":!!o,"aria-label":s,children:[n.jsx(mz,{children:e}),n.jsx(gz,{children:n.jsx(Bn,{size:14})})]})}const vz=f.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${e=>e.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,xz=f.div`
  height: 48px;
  display: flex;
  align-items: center;
  /* 4px between controls + the selector's 4px leading inset = an 8px
     visual gap from the hamburger control to its label. */
  gap: var(--space-1, 4px);
  padding: 0 var(--space-3, 12px);
`,yz=f.button`
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
`,wz=f.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,bz=f(Oh)`
  font-size: var(--text-lg, 1.125rem);
`,kz=f.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`;function _z({size:e=18}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const Cz=v.forwardRef(function({primaryLabel:o,secondaryLabel:i,tertiaryLabel:s,openOverlay:l,hidden:d,onHamburgerClick:h,onSecondaryClick:p,onTertiaryClick:g},x){return n.jsx(vz,{ref:x,$hidden:d,children:n.jsxs(xz,{children:[n.jsx(yz,{onClick:h,"aria-label":"Open navigation",children:n.jsx(_z,{size:18})}),n.jsxs(wz,{children:[n.jsx(p0,{label:i??(o==="Ultron"?n.jsx(bz,{}):o),isOpen:l==="secondary",onClick:p,ariaLabel:"Choose a section"}),s&&n.jsxs(n.Fragment,{children:[n.jsx(kz,{"aria-hidden":"true",children:"›"}),n.jsx(p0,{label:s,isOpen:l==="persona",onClick:g??(()=>{}),ariaLabel:"Choose a persona"})]})]})]})})}),jz=_e`
  from { opacity: 0; }
  to { opacity: 1; }
`,Sz=f.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${jz} 160ms ease-out;
`;function $z({onDismiss:e}){return v.useEffect(()=>{const o=s=>{s.key==="Escape"&&e()};window.addEventListener("keydown",o);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",o),document.body.style.overflow=i}},[e]),n.jsx(Sz,{onClick:e,"aria-hidden":"true"})}const Mz=_e`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,Rz=f.div`
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
  animation: ${Mz} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,Nz=f.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,Lz=f.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,Az=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
`,Tz=f.h2`
  margin: 0;
  flex: 1;
  min-width: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,Ez=f.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function Qv({title:e,children:o,ariaLabel:i,titleAction:s}){return n.jsxs(Rz,{role:"dialog","aria-modal":"true","aria-label":i??(typeof e=="string"?e:void 0),children:[n.jsx(Nz,{children:n.jsx(Lz,{"aria-hidden":"true"})}),e&&n.jsxs(Az,{children:[n.jsx(Tz,{children:e}),s]}),n.jsx(Ez,{children:o})]})}const Wh=f.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,Iz=f.div`
  padding: var(--space-3, 12px) var(--space-5, 20px) var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,Dl=f.button`
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
`,f0=f.div`
  height: 1px;
  margin: var(--space-2, 8px) var(--space-5, 20px);
  background: var(--color-border-opaque, #e8eaee);
`,Ol=f.span`
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
`,Fl=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function Pz({moduleLabel:e,entries:o,onSelect:i,onHome:s,onNewPage:l}){const d=e==="Ultron",h=d&&s?n.jsx(zz,{type:"button","aria-label":`${e} home`,onClick:()=>{s(),i()},children:n.jsx(m0,{})}):n.jsx(m0,{});return n.jsx(Qv,{title:d?h:e,ariaLabel:`${e} sections`,titleAction:d&&l?n.jsx(Dz,{type:"button","aria-label":"New page",onClick:()=>{l(),i()},children:n.jsx(Ql,{size:16})}):void 0,children:n.jsx(Wh,{children:o.map(p=>{if(p.type==="single"){const x=p.item;return n.jsxs(Dl,{$active:x.isActive,onClick:()=>{var y;(y=x.onClick)==null||y.call(x),i()},"aria-pressed":!!x.isActive,children:[n.jsx(Ol,{children:x.icon}),n.jsx(xa,{children:x.label}),x.isActive&&n.jsx(Fl,{"aria-hidden":"true",children:n.jsx(Mn,{size:16})})]},x.id)}if(p.type!=="group")return null;const g=p.group;return n.jsxs("div",{children:[n.jsx(Iz,{children:g.label}),g.children.map(x=>{const y=n.jsxs(Dl,{$active:x.isActive,$indent:!0,onClick:()=>{var w;(w=x.onClick)==null||w.call(x),i()},"aria-pressed":!!x.isActive,children:[n.jsx(Ol,{children:x.icon}),n.jsx(xa,{children:x.label}),x.isActive&&n.jsx(Fl,{"aria-hidden":"true",children:n.jsx(Mn,{size:16})})]});return x.spotlightPrompt?n.jsx(Gv,{prompt:x.spotlightPrompt,onDismiss:x.spotlightDismiss,placement:"above",children:y},x.id):n.jsx("div",{children:y},x.id)})]},g.id)})})})}const m0=f(Oh)`
  font-size: 14px;
`,zz=f.button`
  all: unset;
  display: inline-flex;
  align-items: center;
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
`,Dz=f.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8, 32px);
  height: var(--space-8, 32px);
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
`,Oz=f.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,Fz=f.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Bz=f.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function Hz({personas:e,activeId:o,onSelect:i}){return n.jsx(Qv,{title:"Personas",ariaLabel:"Choose a persona",children:n.jsx(Wh,{children:e.map(s=>{const l=s.id===o;return n.jsxs(Dl,{$active:l,onClick:()=>i(s.id),"aria-pressed":l,children:[n.jsx(xa,{as:"span",children:n.jsxs(Oz,{children:[n.jsx(Fz,{children:s.name}),n.jsx(Bz,{children:s.role})]})}),l&&n.jsx(Fl,{"aria-hidden":"true",children:n.jsx(Mn,{size:16})})]},s.id)})})})}const Wz=_e`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,Uz=f.aside`
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
  animation: ${Wz} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,qz=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,Vz=f.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,Gz=f.button`
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
`,Yz=f.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,Kz=60;function Qz({title:e,onDismiss:o,children:i}){const s=v.useRef(null),l=v.useRef(null);return v.useEffect(()=>{const d=s.current;if(!d)return;const h=g=>{const x=g.touches[0];l.current={x:x.clientX,y:x.clientY}},p=g=>{if(!l.current)return;const x=g.changedTouches[0],y=x.clientX-l.current.x,w=x.clientY-l.current.y;l.current=null,y<-60&&Math.abs(w)<Kz&&o()};return d.addEventListener("touchstart",h,{passive:!0}),d.addEventListener("touchend",p),()=>{d.removeEventListener("touchstart",h),d.removeEventListener("touchend",p)}},[o]),n.jsxs(Uz,{ref:s,role:"dialog","aria-modal":"true","aria-label":e??"Navigation",children:[n.jsxs(qz,{children:[n.jsx(Vz,{children:e??"Navigation"}),n.jsx(Gz,{onClick:o,"aria-label":"Close navigation",children:n.jsx(Ei,{size:18})})]}),n.jsx(Yz,{children:i})]})}const Zz=f.span`
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
`,ju=f(Dl)`
  width: calc(100% - var(--space-6, 24px));
  margin-inline: var(--space-3, 12px);
  padding-left: var(--space-2, 8px);
  padding-right: var(--space-2, 8px);
`;function Xz({activeId:e,groups:o,user:i,onUserClick:s,onSettingsClick:l,onSelectModule:d,onDismiss:h}){return n.jsx(Qz,{title:"Navigation",onDismiss:h,children:n.jsxs(Wh,{children:[o.map((p,g)=>n.jsxs("div",{children:[g>0&&n.jsx(f0,{"aria-hidden":"true"}),p.items.map(x=>{const y=x.id===e;return n.jsxs(ju,{$active:y,$disabled:x.disabled,onClick:()=>{var w;(w=x.onClick)==null||w.call(x),d(x.id),h()},"aria-pressed":y,"aria-disabled":x.disabled||void 0,children:[n.jsx(Ol,{children:x.icon}),n.jsx(xa,{children:x.label}),y&&n.jsx(Fl,{"aria-hidden":"true",children:n.jsx(Mn,{size:16})})]},x.id)})]},p.id)),n.jsx(f0,{"aria-hidden":"true"}),n.jsxs(ju,{onClick:()=>{l==null||l(),h()},children:[n.jsx(Ol,{children:n.jsx(P2,{})}),n.jsx(xa,{children:"Settings"})]}),n.jsxs(ju,{onClick:()=>{s==null||s(),h()},"aria-label":`Account: ${i.name}`,children:[n.jsx(Zz,{$color:i.avatarColor,"aria-hidden":"true",children:i.initials}),n.jsx(xa,{children:"Account"})]})]})})}const g0=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],Jz=f.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary, #ffffff);
`,eD=f.main`
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
`;function tD(e){const{activeId:o,selectedPersonaId:i,moduleGroups:s,primaryLabel:l,secondaryLabel:d,menuEntries:h,user:p,onUserClick:g,onSettingsClick:x,onMobileNavigate:y,onSelectPersona:w,onHome:k,onNewPage:R,openSecondaryNav:S,children:_}=e,[$,M]=v.useState(null),C=pz({deadZonePx:8,topThresholdPx:20}),j=$===null&&C==="down",D=v.useMemo(()=>{if(!i)return null;const A=g0.find(F=>F.id===i);return(A==null?void 0:A.name)??null},[i]),N=()=>M(null),L=A=>M(A);v.useEffect(()=>{S&&M("secondary")},[S]);const E=$!==null;return n.jsxs(Jz,{children:[n.jsx(Cz,{primaryLabel:l,secondaryLabel:d,tertiaryLabel:D,openOverlay:$,hidden:j,onHamburgerClick:()=>L("drawer"),onSecondaryClick:()=>{L(h.length>0?"secondary":"drawer")},onTertiaryClick:D?()=>L("persona"):void 0}),n.jsx(eD,{children:_}),E&&n.jsx($z,{onDismiss:N}),$==="secondary"&&n.jsx(Pz,{moduleLabel:l,entries:h,onSelect:N,onHome:k,onNewPage:R}),$==="persona"&&n.jsx(Hz,{personas:g0,activeId:i,onSelect:A=>{w(A),N()}}),$==="drawer"&&n.jsx(Xz,{activeId:o,groups:s,user:p,onUserClick:g,onSettingsClick:x,onSelectModule:A=>y(A),onDismiss:N})]})}function nD(e){if(Ov()&&e.mobileNav){const i=e.mobileNav;return n.jsx(tD,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:e.menuEntries??[],user:e.user,onUserClick:e.onUserClick,onSettingsClick:e.onSettingsClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,onHome:i.onHome,onNewPage:i.onNewPage,openSecondaryNav:i.openSecondaryNav,children:e.children})}return n.jsx(hz,{...e})}const rD="/Ultron_Onboarding/assets/policy-icon-active-CyAzaB38.svg",oD="/Ultron_Onboarding/assets/automation-icon-active-C_8ZK5uN.svg",aD=[{name:"Alicia Nguyen",role:"Registered Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Marcus Bell",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"expiring",expiresInDays:21},{name:"Priya Shah",role:"Charge Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Devon Carter",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"valid"},{name:"Sofia Ramirez",role:"Registered Nurse",location:"Methodist Dallas",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"James O'Connor",role:"Licensed Vocational Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Fatima Al-Rashid",role:"Registered Nurse",location:"St. David's North",tenure:"4 yr",credential:"RN License",credentialStatus:"valid"},{name:"Tyler Brooks",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"expiring",expiresInDays:9},{name:"Grace Kim",role:"Charge Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Leon Whitfield",role:"Registered Nurse",location:"St. David's North",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"Hannah Torres",role:"Licensed Vocational Nurse",location:"Methodist Dallas",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Omar Haddad",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"}],iD=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,profile:{roles:["RN","LPN","CNA","Caregiver","Med Aide","Charge Nurse"],locations:["Riverside Clinic","Lakeside Care","Mercy Ward","Home Visits","Northgate Rehab"],credentials:["RN License","BLS","CPR","TB Screening","CNA Certification"]}},{match:/security|guard|patrol|officer|surveillance/i,profile:{roles:["Security Officer","Site Supervisor","Patrol","Console Operator"],locations:["Tower Plaza","North Gate","Event Hall","West Lot","Loading Dock"],credentials:["Guard Card","First Aid","CPR","Baton Permit"]}},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,profile:{roles:["Event Staff","Bartender","Usher","Setup Crew","Concessions","Lead"],locations:["Main Arena","Concourse A","Club Level","North Gate","Back of House"],credentials:["Food Handler","Alcohol Service","Crowd Safety"]}},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,profile:{roles:["Forklift Op","Picker","Loader","Foreman","Yard Lead","Driver"],locations:["Bay 4","Dock 2","Yard","Line A","North Warehouse","Staging"],credentials:["Forklift Cert","OSHA 10","CDL","Safety Orientation"]}}],sD={roles:["Associate","Team Lead","Coordinator","Specialist","Shift Lead"],locations:["Downtown","North Site","West Branch","Central","East Yard"],credentials:["Onboarding","I-9 Verified","Safety Orientation"]},lD=["Maria","James","Sofia","Kenji","Aisha","Diego","Priya","Marcus","Elena","Tomas","Grace","Omar","Hannah","Luis","Nia","Peter","Yuki","Carlos","Fatima","Noah","Ivy","Samuel","Leila","Andre","Mei","Jonah","Zoe","Rashid","Clara","Dev"],cD=["Ellis","Marin","Tanaka","Okafor","Nguyen","Alvarez","Patel","Cole","Rossi","Haddad","Kim","Santos","Weaver","Duval","Bauer","Reyes","Osei","Lindqvist","Mercer","Bianchi","Farah","Novak","Quinn","Abara"],dD=["New","2 wk","1 mo","4 mo","7 mo","1 yr","2 yr","3 yr","5 yr"];function uD(e){let o=e>>>0;return()=>{o|=0,o=o+1831565813|0;let i=Math.imul(o^o>>>15,1|o);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function Zv(e){let o=2166136261;for(let i=0;i<e.length;i++)o^=e.charCodeAt(i),o=Math.imul(o,16777619);return o>>>0}function hD(e){const o=iD.find(i=>i.match.test(e));return o?o.profile:sD}function Xv(e,o){const i=hD(e),s=uD(Zv(e||"teambridge")^o),l=p=>p[Math.floor(s()*p.length)],d=[],h=new Set;for(;d.length<o;){const p=`${l(lD)} ${l(cD)}`;if(h.has(p))continue;h.add(p);const g=s()<.16;d.push({name:p,role:l(i.roles),location:l(i.locations),tenure:l(dD),credential:l(i.credentials),credentialStatus:g?"expiring":"valid",...g?{expiresInDays:3+Math.floor(s()*27)}:{}})}return d}const Jv=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,label:"Clinical coverage",shapes:["12-hour shifts, around the clock","Day / night rotation","On-call weekends"]},{match:/security|guard|patrol|officer|surveillance/i,label:"Post coverage",shapes:["24/7 coverage, 8-hour posts","Weekend-heavy events","Overnight-only crew"]},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,label:"Event staffing",shapes:["Event-based, weekends heavy","Split shifts, peak evenings","Game-day surges"]},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,label:"Dock coverage",shapes:["Two shifts, Mon–Sat","Peak-season overtime","Early AM dock crew"]}],ex=["9-to-5, weekdays","Rotating shifts","Weekend coverage"],pD="Team coverage";function fD(e){var o;return((o=Jv.find(i=>i.match.test(e)))==null?void 0:o.shapes)??ex}function v0(e,o="Saturday"){const i=Xv(e,8),[s,l,d,h]=i,p=4+Zv(l.name)%9;return[{kind:"callout",worker:s.name,role:s.role,detail:`Called out for ${o} — the shift needs a fill.`},{kind:"expiring",worker:l.name,role:l.role,detail:`${l.credential} expires in ${p} days.`},{kind:"missing",worker:d.name,role:d.role,detail:"Missed a clock-out Tuesday."},{kind:"missing",worker:h.name,role:h.role,detail:"Didn't punch in Thursday."}]}const mD=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],x0=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],tx=["6a–2p","2p–10p","10p–6a"],gD=[4,3,3,4,4,3,3],vD=[{match:/overnight/i,shape:{bands:["10p–6a"],perDay:[2,2,2,2,2,2,2]}},{match:/game-?day/i,shape:{bands:["11a–7p","3p–11p"],perDay:[0,0,0,1,3,7,6]}},{match:/weekend|event/i,shape:{bands:["10a–6p","4p–12a","6p–2a"],perDay:[1,1,1,2,5,6,4]}},{match:/peak-?season|overtime/i,shape:{bands:["6a–2p","2p–10p","10p–6a"],perDay:[5,5,5,5,5,4,3]}},{match:/split|peak|evening/i,shape:{bands:["11a–3p","5p–11p"],perDay:[2,2,2,4,4,4,2]}},{match:/12-hour/i,shape:{bands:["6a–6p","6p–6a"],perDay:[4,4,4,4,4,4,4]}},{match:/day ?\/ ?night|rotat/i,shape:{bands:["7a–7p","7p–7a"],perDay:[3,3,3,3,3,3,3]}},{match:/around the clock|24\/7|8-hour/i,shape:{bands:["6a–2p","2p–10p","10p–6a"],perDay:[3,3,3,3,3,3,3]}},{match:/dock|early ?am/i,shape:{bands:["4a–12p","6a–2p"],perDay:[5,5,5,5,5,2,0]}},{match:/mon.?sat/i,shape:{bands:["6a–2p","2p–10p"],perDay:[4,4,4,4,4,3,0]}},{match:/9-to-5|weekday/i,shape:{bands:["9a–5p","7a–3p"],perDay:[4,4,4,4,4,0,0]}}],y0={bands:tx,perDay:gD};function xD(e){var o;return e?((o=vD.find(i=>i.match.test(e)))==null?void 0:o.shape)??y0:y0}function Yu(e,o){var x;const i=Xv(e,12),{bands:s,perDay:l}=xD(o);let d=0;const h=mD.map((y,w)=>{const k=[];for(let R=0;R<l[w];R++){const S=i[d%i.length].name.split(" ")[0];d++,k.push({time:s[R%s.length],who:S})}return{label:y,shifts:k}}),p=nx(h);p>=0&&(h[p].shifts[0]={...h[p].shifts[0],who:"Open",flag:"open"});const g=(x=h[1])!=null&&x.shifts.length?1:h.findIndex(y=>y.shifts.length);return g>=0&&g!==p&&(h[g].shifts[0]={...h[g].shifts[0],flag:"watch"}),h}function yD(e){const o=Jv.find(d=>d.match.test(e)),i=(o==null?void 0:o.shapes[0])??ex[0],l=Yu(e,i).map((d,h)=>{const p=d.shifts.slice(0,3);for(;p.length<3;){const g=p.length;p.push({time:tx[g],who:`Coverage ${h+1}-${g+1}`})}return{...d,shifts:p}});return{label:(o==null?void 0:o.label)??pD,shape:"Full-week shift coverage",week:l}}function nx(e){var o;if((o=e[5])!=null&&o.shifts.length)return 5;for(let i=e.length-1;i>=0;i--)if(e[i].shifts.length)return i;return-1}function w0(e){const o=nx(e);return o>=0?x0[o]:x0[5]}const wD=1100,bD=440,rx=4,ox=2,ax=150,kD=Math.ceil(ax/rx)*ox,Su=320,_D=720,$u=2e3,CD=950,b0=1600,ix=249,jD=68,SD=229,$D=47,MD=56,RD=8,ND=ix,Uh=84,Ai=81,Bl=48,k0=[{name:"Dana Okafor",photo:"https://i.pravatar.cc/96?u=dana.okafor"},{name:"Marcus Webb",photo:"https://i.pravatar.cc/96?u=marcus.webb"},{name:"Priya Raman",photo:"https://i.pravatar.cc/96?u=priya.raman"},{name:"Sofia Delgado",photo:"https://i.pravatar.cc/96?u=sofia.delgado"}],Ku=[{where:'Row 34 · "J. & M. Alvarez"',reason:"Two people in one row — we split them out for you to confirm."},{where:"Row 51 · Dana Whitfield",reason:"Home location was blank — pick a site when you get a sec."},{where:'Row 72 · start date "13/40/24"',reason:"That date didn't read — everything else came in fine."}],LD="Let's start with your people. Drop your team roster into this chat — a spreadsheet, a PDF, even a photo of a printed one works. No need to clean it up first; I'll read it, tidy it, and bring everyone in.",AD='Happy to get to that — right after your people are in. Attach your roster here (the paperclip takes spreadsheets, PDFs, or a photo), or tap "Use sample teammates" below to start with a stand-in crew.',_0="Next: your schedule. Drop your current one into this chat — any format — and I'll turn it into shifts. Or just tell me the shape of your week and I'll build a realistic one.",TD=`Time for a test run, so you can see how I work? Let's simulate a last minute call out.

If you provide your cell number we can make sure everything is hooked up and test things live together.`,ED="Perfect — I’ll text you there. And here’s Ultron live: Maria Ellis just dropped her 2:00 PM shift at Riverside Clinic. I opened it under New and found 8 qualified RNs who can cover it.";function ID(e,o){const i=[o.workforceType&&`Workforce: ${o.workforceType}`,o.worksite&&`Worksites: ${o.worksite}`,o.pay&&`Pay: ${o.pay}`,o.billing&&`Billing: ${o.billing}`].filter(Boolean);return[{icon:"chart",headline:"Read your site",blocks:[{text:`Went through ${e?`the ${e} site`:"your site"} end to end — the services you run, the places you run them, and the kind of work you staff. Every page, not just the homepage.`}]},{icon:"clock",headline:"Mapped your operation",blocks:i.length?[{label:"What I settled on",bullets:i}]:[{text:"Inferred the roles you hire, where they work, and how the week is likely to run, so nothing here starts from a blank slate."}]},{icon:"edit",headline:"Set up your workspace",blocks:[{text:"Turned on the modules that fit the operation, pre-filled their settings, and left the rest out of your way until you need them."}]},{icon:"send",headline:"Planned what's next",blocks:[{label:"Left to collect",bullets:["Your roster — so I know who I am scheduling","Your schedule — so I can turn it into real shifts"]}]}]}function PD(e){return[{icon:"clock",headline:"Read your roster",blocks:[{text:`Opened ${e} and took every row and header as written — no cleanup asked of you first, and nothing skipped for being messy.`}]},{icon:"chart",headline:"Mapped the columns",blocks:[{label:"How the columns landed",bullets:["Names, roles and licenses mapped straight across","Home locations resolved against your worksites","3 columns I didn't recognize kept verbatim on each record"]}]},{icon:"alert",headline:`Flagged ${Uh-Ai} rows`,blocks:[{label:"Held for you, none dropped",bullets:Ku.map(o=>`${o.where} — ${o.reason}`)}]},{icon:"edit",headline:`Added ${Ai} teammates`,blocks:[{text:"Each one carries their role, licenses, home location and contact details, so they are schedulable the moment the week exists."}]}]}function zD(e){return[{icon:"clock",headline:"Reused your site read",blocks:[{text:e?`Took "${e}" as the brief, so the stand-in crew looks like the people you actually staff rather than generic filler.`:"Took the roles and worksites I read off your site as the brief, so the stand-in crew looks like the people you actually staff."}]},{icon:"chart",headline:"Modeled a matching crew",blocks:[{label:"What I balanced",bullets:["Role mix weighted the way your operation reads","Licenses and certifications appropriate to each role","Home locations spread across your worksites"]}]},{icon:"edit",headline:`Generated ${Bl} teammates`,blocks:[{text:"Full records — role, license, location, availability — so every downstream step behaves exactly as it will with your real people."}]},{icon:"done",headline:"Tagged them Sample",blocks:[{text:"One tap clears the whole set the moment your real roster lands. Nothing you build on top of them is lost in the swap."}]}]}function DD(e,o,i,s){return[{icon:"clock",headline:"Read your schedule",blocks:[{text:`Opened ${e} and took the grid as laid out — whatever the format, the pattern is the part that matters.`}]},{icon:"chart",headline:"Found your pattern",blocks:[{label:"What the file told me",bullets:["Recurring start and end times per day","Which roles each shift needs, and how many","The days that run light and the days that run heavy"]}]},sx(i,s),lx(o)]}function OD(e,o,i,s){return[{icon:"clock",headline:"Took your week shape",blocks:[{text:`Read "${e}" as the rhythm to build to, then filled in the detail your site and roster already imply.`}]},{icon:"chart",headline:"Modeled demand",blocks:[{label:"What I reasoned about",bullets:["How that shape distributes hours over the week","Coverage each worksite needs to stay staffed","Which roles have to be on at the same time"]}]},sx(i,s),lx(o)]}function sx(e,o){return{icon:"edit",headline:`Built ${e} shifts`,blocks:[{text:`Laid out across ${o} days, assigned from your roster where the fit was obvious and left open where it was not, rather than guessing at coverage.`}]}}function lx(e){return{icon:"alert",headline:"Checked coverage",blocks:[{text:`Cross-referenced every shift with licenses, availability and hours. ${e} things need you — they are called out on the week below.`}]}}function FD(e){return[{icon:"clock",headline:"Read your message"},{icon:"alert",headline:`Found no ${e}`,blocks:[{text:`Nothing in it parsed as ${e} data, so I held the setup here rather than building on a guess.`}]}]}function BD(){return[{icon:"clock",headline:"Checked your number",blocks:[{text:"Read it as a reachable mobile and stored just the digits."}]},{icon:"edit",headline:"Wired it up",blocks:[{text:"Texts from me now reach you there — the same channel I use to chase fills and confirmations."}]},{icon:"send",headline:"Armed a live event",blocks:[{text:"Picked a real-shaped call-out from your new week so you can watch me work it end to end instead of reading about it."}]}]}function HD(){return[{icon:"clock",headline:"Read your message"},{icon:"alert",headline:"Found no number",blocks:[{text:"Held off on saving anything rather than storing a number I would fail to reach you on."}]}]}function WD(){return[{icon:"clock",headline:"Read your message"},{icon:"chart",headline:"Checked your workspace",blocks:[{text:"Looked at your people, your week and what is already open before answering, so the reply reflects your setup rather than a generic one."}]},{icon:"send",headline:"Drafted a reply"}]}function $l(e){if(!e)return null;const o=e.trim().replace(/\s+/g,""),i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s=o;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),(s.split(".")[0]||s).split(/[-_]/).map(h=>h.charAt(0).toUpperCase()+h.slice(1)).join(" ")||s}function C0(e){return e.includes("	")||e.trim().includes(`
`)}function UD(e){return e.scrollHeight-e.clientHeight>ND}function qD(e){var l;const o=e.trim().split(/\s+/),i=((l=o[0])==null?void 0:l[0])??"",s=o.length>1?o[o.length-1][0]:"";return(i+s).toUpperCase()}function VD(e){return`https://i.pravatar.cc/64?img=${e*7%70+1}`}function GD({text:e}){const o=Math.max(0,e.length-kD);return n.jsxs(n.Fragment,{children:[e.slice(0,o),Array.from(e.slice(o),(i,s)=>n.jsx(SO,{children:i},o+s))]})}function j0({active:e,open:o,closeLabel:i,onClose:s,children:l}){const d=n.jsxs(hO,{$open:o,children:[e&&o&&n.jsx(pO,{type:"button","aria-label":i,onClick:s,children:n.jsx(ba,{size:18})}),l]});return e&&o&&typeof document<"u"?Ao.createPortal(d,document.body):d}const YD={};function KD({active:e=!0,answers:o=YD,onContinued:i,onPhoneSubmitted:s}){const[l,d]=v.useState([]),[h,p]=v.useState(""),[g,x]=v.useState([]),[y,w]=v.useState(null),[k,R]=v.useState("roster"),[S,_]=v.useState(!1),[$,M]=v.useState(!1),[C,j]=v.useState(null),[D,N]=v.useState(null),[L,E]=v.useState(null),[A,F]=v.useState(null),[G,Y]=v.useState(""),[W,K]=v.useState(!1),[J,ae]=v.useState(!1),[ce,se]=v.useState(!1),[Q,O]=v.useState("grant"),[q,T]=v.useState(!1),[z,te]=v.useState(!1),[U,X]=v.useState("delivering"),[le,B]=v.useState(0),[P,oe]=v.useState(-1),[fe,de]=v.useState(""),[xe,we]=v.useState(!1),[Ce]=v.useState(()=>{var ne;return typeof window<"u"&&!!((ne=window.matchMedia)!=null&&ne.call(window,"(prefers-reduced-motion: reduce)").matches)}),[Me,Pe]=v.useState(()=>{var ne;return typeof window<"u"&&!!((ne=window.matchMedia)!=null&&ne.call(window,"(max-width: 600px)").matches)}),[qe,We]=v.useState({roster:!1,schedule:!1}),Ae=ne=>We(ge=>({...ge,[ne]:!0})),Qe=k==="roster"?qe.roster:k==="schedule"?qe.schedule:!0,Ze=Me&&U==="ready"&&k!=="done"&&!Qe,yt=v.useRef([]),De=v.useRef(null),ve=v.useRef(null),Le=v.useRef(null),it=v.useRef(null),Be=v.useMemo(()=>{var ne;return((ne=o.workforceType)==null?void 0:ne.trim())||$l(o.companyWebsite)||""},[o]),tt=v.useMemo(()=>fD(Be),[Be]),Dt=v.useMemo(()=>yD(Be),[Be]),Xe=v.useMemo(()=>{const ne=$l(o.companyWebsite),ke=[{kind:"text",text:`Welcome to your ${ne?`${ne} `:""}workspace — I'm Ultron, and I'll be doing the heavy lifting around here. Together we'll bring in your team, shape your schedule, and line up the day-to-day work I can take off your plate.`}];return ke.push({kind:"text",text:LD}),ke.push({kind:"rosterCta"}),ke},[o]),tn=(ne,ge)=>{yt.current.push(window.setTimeout(ge,ne))};v.useEffect(()=>()=>{yt.current.forEach(ne=>window.clearTimeout(ne)),De.current&&window.clearTimeout(De.current)},[]);const Ta=ne=>{const ge=ne.scrollTop;te(ke=>ke?ge>RD:ge>MD&&UD(ne))};v.useEffect(()=>{var ke;const ne=(ke=window.matchMedia)==null?void 0:ke.call(window,"(max-width: 600px)");if(!ne)return;const ge=()=>Pe(ne.matches);return ge(),ne.addEventListener("change",ge),()=>ne.removeEventListener("change",ge)},[]);const Io=ne=>{if(j({file:ne,state:"uploading",progress:8}),Ce){j({file:ne,state:"uploading",progress:92});return}tn(180,()=>j({file:ne,state:"uploading",progress:38})),tn(460,()=>j({file:ne,state:"uploading",progress:74})),tn(780,()=>j({file:ne,state:"uploading",progress:92}))},ze=ne=>{if(N({file:ne,state:"uploading",progress:8}),Ce){N({file:ne,state:"complete",progress:100});return}tn(180,()=>N({file:ne,state:"uploading",progress:38})),tn(460,()=>N({file:ne,state:"uploading",progress:74})),tn(780,()=>N({file:ne,state:"complete",progress:100}))};v.useEffect(()=>{if(Ce){B(Xe.length),oe(-1),X("ready");return}const ne=[];let ge=null;const ke=(Te,Ft)=>{ne.push(window.setTimeout(Ft,Te))},nt=Te=>{if(Te>=Xe.length){we(!1),X("ready");return}we(!0),ke(bD,()=>{we(!1),oe(Te);const Ft=Xe[Te];if(Ft.kind!=="text"){ke(_D,()=>{B(Te+1),oe(-1),ke(Su,()=>nt(Te+1))});return}de("");const gn=Ft.text;let Bt=0;ge=window.setInterval(()=>{Bt=Math.min(gn.length,Bt+ox),de(gn.slice(0,Bt)),Bt>=gn.length&&(ge&&window.clearInterval(ge),ge=null,ke(Su,()=>{B(Te+1),oe(-1),de(""),ke(Su,()=>nt(Te+1))}))},rx)})};return X("delivering"),nt(0),()=>{ne.forEach(Te=>window.clearTimeout(Te)),ge&&window.clearInterval(ge)}},[Xe,Ce]),v.useEffect(()=>{const ne=ge=>{const ke=ge.target;ke!=null&&ke.isContentEditable||(ke==null?void 0:ke.tagName)==="INPUT"||(ke==null?void 0:ke.tagName)==="TEXTAREA"||(ke==null?void 0:ke.tagName)==="SELECT"||ge.metaKey||ge.ctrlKey||ge.altKey||ge.key.toLowerCase()!=="m"||(ge.preventDefault(),T(!0))};return document.addEventListener("keydown",ne),()=>document.removeEventListener("keydown",ne)},[]);const lt=()=>{ae(!0),Le.current&&window.clearTimeout(Le.current),Le.current=window.setTimeout(()=>T(!1),b0)},vt=()=>{se(!0),Le.current&&window.clearTimeout(Le.current),Le.current=window.setTimeout(()=>T(!1),b0)};v.useEffect(()=>{var ne;e&&((ne=it.current)==null||ne.scrollIntoView({block:"end",behavior:"smooth"}))},[e,l,y,U,le,P,fe,xe]),v.useEffect(()=>{e||T(!1)},[e]);const Ot=(h.trim().length>0||g.length>0)&&y===null,nr=ne=>{const ge=Array.from(ne,ke=>ke.name);x(ke=>[...ke,...ge.filter(nt=>!ke.includes(nt))])},io=ne=>x(ge=>ge.filter(ke=>ke!==ne)),fn=(ne,ge={})=>{const ke=Ce?300:ge.workingMs??wD,nt=Ce?200:CD;w(ge.workingLabel??"");let Te=0;const Ft=()=>{var Ln;De.current&&(window.clearTimeout(De.current),De.current=null);const gn=ne[Te];if(!gn)return;const Bt=Te===ne.length-1;if(Te+=1,d(Vi=>[...Vi,gn]),Bt){w(null),ve.current=null,(Ln=ge.then)==null||Ln.call(ge);return}w(""),De.current=window.setTimeout(Ft,nt)};ve.current=Ft,De.current=window.setTimeout(Ft,ke)},$r=()=>{var ne;Me&&((ne=ve.current)==null||ne.call(ve))},Nn=(ne,ge=[])=>{l.some(ke=>ke.role==="operator")||i==null||i(),d(ke=>[...ke,{role:"operator",text:ne,...ge.length?{attachments:ge}:{}}])},Po=(ne,ge)=>{_(!1),M(!0),Ae("roster"),ge&&Io(ge),fn([{role:"ultron",activity:PD(ne),text:`Got it — read ${ne}: ${Uh} people, licenses, home locations. 3 columns I didn't recognize; I kept them so nothing's lost.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:`That's ${Ai} people in. ${_0}`},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Bringing your people in…",workingMs:$u,then:()=>R("schedule")})},Hi=()=>{_(!0),M(!0),Ae("roster"),fn([{role:"ultron",activity:zD(Be),text:`Done — I spun up ${Bl} sample teammates that look like your operation. Every one is tagged "Sample" — one tap to remove them when your real roster lands.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:_0},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Generating sample teammates…",workingMs:$u,then:()=>R("schedule")})},Wi=ne=>{const ge=Yu(Be,ne);E({problems:v0(Be,w0(ge)),week:ge}),F(ne)},Mr=ne=>{Ae("schedule"),ne.cardFile&&ze(ne.cardFile);const ge=Yu(Be,ne.shape),ke=v0(Be,w0(ge));E({problems:ke,week:ge}),F(ne.shape??null);const nt=ge.reduce((Bt,Ln)=>Bt+Ln.shifts.length,0),Te=ge.filter(Bt=>Bt.shifts.length>0).length,Ft=ne.fileName?`Read ${ne.fileName} — turned it into next week's shifts. A few columns I didn't recognize, kept so nothing's lost.`:`Built you a realistic week — ${ne.shape.toLowerCase()}. Here's what's in it.`,gn=ne.fileName?DD(ne.fileName,ke.length,nt,Te):OD(ne.shape.toLowerCase(),ke.length,nt,Te);fn([{role:"ultron",activity:gn,text:Ft},{role:"ultron",text:"",card:"week"},{role:"ultron",text:TD}],{workingLabel:ne.fileName?"Turning it into shifts…":"Building your week…",workingMs:$u,then:()=>R("done")})},Ui=(ne,ge=[])=>{if(!ne&&ge.length===0||y!==null)return;if(Nn(ne,ge),k==="roster"){ge.length>0?Po(ge[0]):C0(ne)?Po("your pasted roster"):fn([{role:"ultron",activity:FD("roster"),text:AD}]);return}if(k==="schedule"){ge.length>0?Mr({fileName:ge[0]}):C0(ne)?Mr({fileName:"your pasted schedule"}):Mr({shape:ne});return}if(!W){const nt=ne.replace(/\D/g,"");nt.length>=7&&nt.length<=15?(K(!0),Y(nt),s==null||s(nt),fn([{role:"ultron",activity:BD(),text:ED}])):fn([{role:"ultron",activity:HD(),text:"Send me the best mobile number to reach you — any normal format is fine."}]);return}const ke=l.filter(nt=>nt.role==="ultron").length;fn([{role:"ultron",activity:WD(),text:Rh(ne,ke)}])},so=()=>{const ne=h.trim();!ne&&g.length===0||y!==null||(Ui(ne,g),p(""),x([]))},qi=ne=>{if(!ne||ne.length===0||k!=="roster"||y!==null)return;const ge=Array.from(ne),ke=ge.map(nt=>nt.name);Nn("",ke),Po(ke[0],{name:ge[0].name,type:ge[0].type,size:ge[0].size})},lo=ne=>{if(!ne||ne.length===0||k!=="schedule"||y!==null)return;const ge=Array.from(ne),ke=ge.map(nt=>nt.name);Nn("",ke),Mr({fileName:ke[0],cardFile:{name:ge[0].name,type:ge[0].type,size:ge[0].size}})},zo=y!==null?[]:k==="roster"?[{icon:Xr,label:"No roster handy? Use sample teammates",onTap:()=>{Nn("Use sample teammates"),Hi()}}]:k==="schedule"?tt.map(ne=>({icon:jn,label:ne,onTap:()=>{Nn(ne),Mr({shape:ne})}})):[],Rr=k!=="done"&&zo.length>0?n.jsx(qF,{"aria-label":"Suggestions",children:zo.map(({icon:ne,label:ge,onTap:ke})=>n.jsxs(I0,{type:"button",$browseSized:!0,onClick:ke,children:[ne&&n.jsx(ne,{size:14}),ge]},ge))}):null,dc=k==="roster"?"Attach your roster, or ask Ultron anything…":k==="schedule"?"Attach your schedule, or describe your week…":W?"Tell Ultron what to take on next…":"Enter your cell number…",mn=k==="done"&&!W,_t=Q==="waitlist",Do=_t?ce:J;return n.jsxs(XD,{children:[n.jsx(Ph,{links:1}),n.jsx(zh,{}),n.jsx(JD,{$condensed:z,children:n.jsxs(eO,{$condensed:z,children:[n.jsxs(tO,{$condensed:z,role:"img","aria-label":"Ultron",children:[n.jsx(S0,{$show:!z,"aria-hidden":"true",children:n.jsx(st,{mark:"magnetic",size:140,tone:"auto",state:"active"})}),n.jsx(S0,{$show:z,$compact:!0,"aria-hidden":"true",children:n.jsx(st,{mark:"magnetic2d",size:36,tone:"auto",state:"active"})})]}),n.jsxs(nO,{$condensed:z,children:[n.jsx(rO,{$condensed:z,children:"Welcome"}),n.jsx(oO,{$condensed:z,children:"Finish your setup, right in the chat"})]})]})}),n.jsx(aO,{onScroll:ne=>Ta(ne.currentTarget),children:n.jsxs($O,{children:[n.jsx(ul,{"data-from":"ultron",children:n.jsxs(Mu,{children:[(P>=0||le>0)&&n.jsx(M0,{children:n.jsx(Pl,{milestones:ID($l(o.companyWebsite),o),collapsed:!0,hideActions:!0})}),Xe.slice(0,P>=0?P+1:le).map((ne,ge)=>{if(ne.kind==="rosterCta"){const nt=k==="roster"&&!$;return n.jsx(v.Fragment,{children:n.jsx($0,{children:n.jsx(j0,{active:k==="roster",open:Ze&&k==="roster",closeLabel:"Close roster uploader",onClose:()=>Ae("roster"),children:$?k==="roster"?C?n.jsx(dl,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:C.state,progress:C.progress,file:C.file,onFileSelect:()=>{},onClear:()=>{}}):n.jsxs(hl,{children:[n.jsx(pl,{"aria-hidden":"true",children:n.jsx(Xr,{size:16})}),n.jsxs(fl,{children:[n.jsx(ml,{children:"Roster"}),n.jsx(gl,{children:y||(S?"Generating sample teammates…":"Reading your roster…")})]}),n.jsx(vl,{"aria-hidden":"true",children:n.jsx(N0,{})})]}):n.jsxs(hl,{$done:!0,children:[n.jsx(pl,{"aria-hidden":"true",children:n.jsx(Nu,{size:16})}),n.jsxs(fl,{children:[n.jsx(ml,{children:"Roster"}),n.jsx(gl,{children:"Spreadsheet, PDF, or a photo of a printed one"})]}),n.jsx(vl,{"aria-hidden":"true",children:n.jsx($n,{size:18})})]}):n.jsxs(px,{children:[nt&&!C&&n.jsx(fO,{"aria-hidden":"true",children:n.jsx(mO,{children:[...k0,...k0].map((Te,Ft)=>n.jsx(gO,{children:n.jsx("img",{src:Te.photo,alt:""})},`${Te.name}-${Ft}`))})}),n.jsx(dl,{"data-roster-flow":nt&&!C?"":void 0,variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:(C==null?void 0:C.state)??"empty",progress:(C==null?void 0:C.progress)??0,file:(C==null?void 0:C.file)??null,disabled:y!==null&&!C,footerSlot:nt&&U==="ready"?Rr:void 0,onFileSelect:Te=>qi([Te]),onClear:()=>{}})]})})})},`beat-${ge}`)}const ke=ge===P;return n.jsx(R0,{"data-from":"ultron",children:ke?n.jsx(GD,{text:fe}):ne.text},`beat-${ge}`)}),xe&&n.jsx(CO,{children:n.jsx(E0,{role:"status","aria-label":"Ultron is typing",children:n.jsx(st,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})})})]})}),l.map((ne,ge)=>{const ke=ne.activity?n.jsx(M0,{children:n.jsx(Pl,{milestones:ne.activity,collapsed:!0,hideActions:!0})}):null;if(ne.card)return n.jsx(ul,{"data-from":"ultron",children:n.jsxs(Mu,{children:[ke,n.jsx($0,{$pop:ne.card==="week",children:ne.card==="roster"?n.jsx(QD,{sample:S}):ne.card==="scheduleCta"?n.jsx(j0,{active:k==="schedule",open:Ze&&k==="schedule",closeLabel:"Close schedule uploader",onClose:()=>Ae("schedule"),children:k==="schedule"?D?n.jsx(dl,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:D.state,progress:D.progress,file:D.file,onFileSelect:()=>{},onClear:()=>{}}):y!==null?n.jsx(sO,{children:n.jsxs(hl,{children:[n.jsx(pl,{"aria-hidden":"true",children:n.jsx(jn,{size:16})}),n.jsxs(fl,{children:[n.jsx(ml,{children:"Schedule"}),n.jsx(gl,{children:y||"Building your week…"})]}),n.jsx(vl,{"aria-hidden":"true",children:n.jsx(N0,{})})]})}):n.jsxs(dO,{children:[n.jsx(xO,{role:"img","aria-label":`${Dt.label}: ${Dt.shape}`,children:n.jsx(yO,{children:Dt.week.map((Te,Ft)=>{const gn=Dt.week.slice(0,Ft).reduce((Bt,Ln)=>Bt+Ln.shifts.length,0);return n.jsxs(wO,{children:[n.jsx(bO,{children:Te.label.slice(0,1)}),Te.shifts.length?Te.shifts.map((Bt,Ln)=>n.jsx(kO,{$sequence:gn+Ln,$flag:Bt.flag},`${Bt.time}-${Ln}`)):n.jsx(_O,{})]},Te.label)})})}),n.jsx(dl,{"data-schedule-flow":"",variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:"empty",progress:0,file:null,footerSlot:Rr,onFileSelect:Te=>lo([Te]),onClear:()=>{}})]}):n.jsxs(hl,{$done:!0,children:[n.jsx(pl,{"aria-hidden":"true",children:n.jsx(Nu,{size:16})}),n.jsxs(fl,{children:[n.jsx(ml,{children:"Schedule"}),n.jsx(gl,{children:"Spreadsheet, PDF, or a photo — any format works"})]}),n.jsx(vl,{"aria-hidden":"true",children:n.jsx($n,{size:18})})]})}):L?n.jsxs(n.Fragment,{children:[n.jsx(ZD,{problems:L.problems,week:L.week}),n.jsx(UF,{"aria-label":"Try another schedule",children:tt.map(Te=>n.jsxs(I0,{type:"button",$active:Te===A,"aria-pressed":Te===A,onClick:()=>Wi(Te),children:[n.jsx(jn,{size:14}),Te]},Te))})]}):null})]})},ge);const nt=n.jsxs(QF,{"data-from":ne.role,children:[ne.text&&n.jsx(R0,{"data-from":ne.role,children:ne.text}),ne.attachments&&n.jsx(ZF,{children:ne.attachments.map(Te=>n.jsxs(P0,{children:[n.jsx(to,{size:14}),Te]},Te))})]});return n.jsx(ul,{"data-from":ne.role,children:ke?n.jsxs(Mu,{children:[ke,nt]}):nt},ge)}),y!==null&&n.jsx(ul,{"data-from":"ultron",children:n.jsx(zF,{type:"button",onClick:$r,disabled:!Me,"aria-label":y?`${y} Tap to continue.`:"Ultron is replying. Tap to continue.",children:n.jsxs(PF,{children:[n.jsx(E0,{"aria-hidden":"true",children:n.jsx(st,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),y&&n.jsx(OF,{role:"status","aria-live":"polite",children:y})]})})}),n.jsx("div",{ref:it})]})}),U==="ready"&&!Ze&&n.jsxs(FF,{children:[n.jsx(BF,{role:"img","aria-label":"Ultron","aria-hidden":y!==null,children:n.jsx(HF,{"aria-hidden":"true",children:n.jsx(WF,{$show:y===null,children:n.jsx(st,{mark:"magnetic2d",size:24,tone:"auto",state:"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})})}),n.jsxs(VF,{$phoneMode:mn,onSubmit:ne=>{ne.preventDefault(),so()},children:[g.length>0&&n.jsx(YF,{"aria-label":"Files to send",children:g.map(ne=>n.jsxs(P0,{children:[n.jsx(to,{size:14}),ne,n.jsx(KF,{type:"button","aria-label":`Remove ${ne}`,onClick:()=>io(ne),children:n.jsx(ba,{size:12})})]},ne))}),n.jsxs(GF,{children:[!mn&&n.jsx(z0,{children:n.jsx(Sg,{state:"idle",onSelect:nr})}),n.jsx(XF,{$phoneMode:mn,rows:1,value:h,placeholder:dc,"aria-label":mn?"Cell phone number":"Message Ultron",inputMode:mn?"tel":"text",autoComplete:mn?"tel":"off",onChange:ne=>{const ge=ne.target.value;p(mn?ge.replace(/[^\d+().\-\s]/g,""):ge)},onKeyDown:ne=>{ne.key==="Enter"&&!ne.shiftKey&&(ne.preventDefault(),so())},onPaste:ne=>{var ke;const ge=(ke=ne.clipboardData)==null?void 0:ke.files;ge&&ge.length>0&&(ne.preventDefault(),nr(ge))}}),n.jsx(z0,{children:n.jsx(Ra,{state:Ot?"ready":"disabled-invalid",onSend:so})})]})]})]}),n.jsx(mF,{}),n.jsxs(Lg,{open:q,onClose:()=>T(!1),size:"lg","aria-label":`${_t?"Join waitlist":"Unlock grant"} — Ultron access`,children:[n.jsxs(gF,{children:[n.jsx(xF,{"aria-hidden":"true",children:n.jsx(Sv,{size:300})}),n.jsx(yF,{type:"button","aria-label":"Close",onClick:()=>T(!1),children:n.jsx(ba,{size:18})}),n.jsxs(wF,{children:[n.jsx(bF,{"aria-hidden":"true"}),_t?"Ultron early access":"Your welcome grant"]}),!_t&&n.jsxs(kF,{"aria-label":"$1,000 of work on us",children:[n.jsxs(_F,{children:[n.jsx(CF,{children:"$"}),"1,000"]}),n.jsxs(jF,{children:["of work",n.jsx("br",{}),n.jsx("strong",{children:"on us"})]})]}),n.jsx(SF,{$prominent:_t,children:_t?"Be first when access opens.":"Turn Ultron loose."}),n.jsx($F,{children:_t?"Ultron is opening access in waves. Leave your number and we’ll text the moment your workspace is unblocked.":"Ultron proposes the work. You call the shots. Your first 100,000 credits are covered."}),n.jsx(MF,{"aria-label":_t?"Waitlist benefits":"Grant benefits",children:_t?n.jsxs(n.Fragment,{children:[n.jsx(pa,{children:"Priority access"}),n.jsx(pa,{children:"One text when ready"}),n.jsx(pa,{children:"No commitment"})]}):n.jsxs(n.Fragment,{children:[n.jsx(pa,{children:"100,000 credits"}),n.jsx(pa,{children:"Up to 3 months"}),n.jsx(pa,{children:"You approve every action"})]})}),Do?n.jsxs(EF,{role:"status",children:[n.jsx($n,{size:20}),_t?"You’re on the list — we’ll text as soon as your access opens.":"You’re set — I’ll text before I act. Your $1,000 grant is live."]}):n.jsxs(RF,{onSubmit:ne=>{ne.preventDefault(),G.trim()&&(_t?vt():lt())},children:[n.jsx(NF,{htmlFor:"welcome-grant-phone",children:_t?"Where should we send your access text?":"Where should Ultron send proposals?"}),n.jsxs(LF,{children:[n.jsx(AF,{id:"welcome-grant-phone",type:"tel",inputMode:"numeric",pattern:"[0-9]*",maxLength:15,value:G,placeholder:"Your phone number","aria-label":"Mobile number",autoComplete:"tel",onChange:ne=>Y(ne.target.value.replace(/\D/g,""))}),n.jsx(TF,{type:"submit",variant:"tertiary",size:"lg",disabled:!G.trim(),children:_t?"Join waitlist":"Unlock $1,000"})]})]}),n.jsx(IF,{children:_t?"Access updates only — never spam. Msg & data rates may apply. Reply STOP to opt out.":"Proposals only — never spam. Msg & data rates may apply. Reply STOP to opt out."})]}),n.jsxs(vF,{type:"button",onClick:()=>{Le.current&&window.clearTimeout(Le.current),O(ne=>ne==="grant"?"waitlist":"grant")},children:["Demo: show ",_t?"welcome grant":"waitlist"]})]})]})}function QD({sample:e}){const[o,i]=v.useState(!1),[s,l]=v.useState(!0),d=aD.slice(0,6),h=(e?Bl:Ai)-d.length;return n.jsxs(fx,{"aria-label":e?"Sample teammates":"Roster import result",children:[n.jsxs(RO,{type:"button","aria-expanded":s,"aria-controls":"welcome-roster-people",onClick:()=>l(p=>!p),children:[e?n.jsx(NO,{children:n.jsxs(LO,{children:[Bl," sample teammates, ready to run a full week"]})}):n.jsxs(AO,{children:[n.jsxs(TO,{children:[Ai," ",n.jsxs(EO,{children:["/",Uh]})]}),n.jsxs(IO,{children:[n.jsx($n,{size:16})," imported clean"]})]}),n.jsx(Qu,{$open:s,"aria-hidden":"true",children:n.jsx(Bn,{size:16})})]}),s&&n.jsxs(PO,{id:"welcome-roster-people","aria-label":e?"Sample teammates":"Imported teammates",children:[d.map((p,g)=>n.jsxs(zO,{$i:g,children:[n.jsxs(DO,{"aria-hidden":"true",children:[qD(p.name),n.jsx("img",{src:VD(g),alt:"",loading:"lazy",onError:x=>{x.currentTarget.style.display="none"}})]}),n.jsxs(OO,{children:[n.jsx(FO,{children:p.name}),n.jsxs(BO,{children:[p.role," · ",p.tenure]})]}),p.credentialStatus==="expiring"?n.jsxs(Fn,{size:"sm",variant:"subtle",color:"yellow",dot:!0,children:[p.credential," · ",p.expiresInDays,"d"]}):n.jsx(Fn,{size:"sm",variant:"subtle",color:"green",children:p.credential}),e&&n.jsx(Fn,{size:"sm",variant:"outline",color:"purple",children:"Sample"})]},p.name)),n.jsx(HO,{children:e?`+ ${h} more · every one tagged “Sample”`:`+ ${h} more imported clean`})]}),!e&&n.jsxs(WO,{children:[n.jsxs(UO,{type:"button","aria-expanded":o,"aria-controls":"welcome-roster-review-rows",onClick:()=>i(p=>!p),children:[n.jsxs(qO,{children:[Ku.length," rows kept for review"]}),n.jsxs(VO,{children:[n.jsx(mx,{"aria-hidden":"true",children:n.jsx(wa,{size:15})}),n.jsx(Qu,{$open:o,"aria-hidden":"true",children:n.jsx(Bn,{size:16})})]})]}),o&&n.jsx(gx,{id:"welcome-roster-review-rows","aria-label":"Rows held for review",children:Ku.map(p=>n.jsxs(vx,{children:[n.jsx(YO,{"aria-hidden":"true",children:n.jsx(wa,{size:15})}),n.jsxs(xx,{children:[n.jsx(KO,{children:p.where}),n.jsx(QO,{children:p.reason})]})]},p.where))})]})]})}function ZD({problems:e,week:o}){const[i,s]=v.useState(!1),l=o.map((p,g)=>o.slice(0,g).reduce((x,y)=>x+y.shifts.length,0)),d=o.filter(p=>p.shifts.length>0).length,h=o.reduce((p,g)=>p+g.shifts.length,0);return n.jsxs(fx,{"aria-label":"Your week",children:[n.jsxs(ZO,{children:[n.jsxs(JO,{children:[n.jsxs(L0,{children:[n.jsx(A0,{children:d})," days"]}),n.jsx(eF,{"aria-hidden":"true",children:"·"}),n.jsxs(L0,{children:[n.jsx(A0,{children:h})," shifts"]})]}),n.jsxs(XO,{type:"button","aria-expanded":i,"aria-controls":"welcome-week-waiting-rows","aria-label":`${e.length} things waiting in your week`,title:`${e.length} things waiting in your week`,onClick:()=>s(p=>!p),children:[n.jsx(mx,{"aria-hidden":"true",children:n.jsx(wa,{size:15})}),n.jsx(Qu,{$open:i,"aria-hidden":"true",children:n.jsx(Bn,{size:16})})]})]}),i&&n.jsx(GO,{id:"welcome-week-waiting-rows","aria-label":"Waiting in your week",children:e.map((p,g)=>n.jsxs(vx,{children:[n.jsx(tF,{$kind:p.kind,"aria-hidden":"true",children:p.kind==="missing"?n.jsx(jn,{size:15}):n.jsx(wa,{size:15})}),n.jsxs(xx,{children:[n.jsxs(nF,{children:[p.worker," · ",p.role]}),n.jsx(rF,{children:p.detail})]})]},`${p.worker}-${g}`))}),n.jsx(oF,{children:n.jsx(aF,{role:"table","aria-label":"Next week's shifts",children:o.map((p,g)=>n.jsxs(iF,{role:"column",children:[n.jsx(sF,{children:p.label}),p.shifts.map((x,y)=>n.jsxs(lF,{$flag:x.flag,$sequence:l[g]+y,children:[n.jsx(cF,{children:x.time}),n.jsx(dF,{children:x.who})]},`${p.label}-${y}`))]},p.label))})})]})}const XD=f.div`
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
`,cx="color-mix(in srgb, var(--color-bg-primary) 60%, transparent)",dx=Oe`
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: ${cx};
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  pointer-events: none;
`,ux=e=>Oe`
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  ${e==="down"?"top: 100%;":"bottom: 100%;"}
  height: var(--space-10);
  z-index: 0;
  background: linear-gradient(${e==="down"?"to bottom":"to top"}, ${cx}, transparent);
  pointer-events: none;
`,JD=f.header`
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
    ${dx}
    opacity: ${e=>e.$condensed?1:0};
    transition: opacity 220ms var(--ease-out);
  }
  &::after {
    ${ux("down")}
    opacity: ${e=>e.$condensed?1:0};
    transition: opacity 220ms var(--ease-out);
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      transition: none;
    }
  }
`,qt="320ms",Vt="cubic-bezier(0.22, 1, 0.36, 1)",eO=f.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: ${e=>e.$condensed?jD:ix}px;
  /* Match the thread column exactly: 720px of content plus the same side
     padding, so the header lockup left-aligns with the bubbles and composer. */
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;
  transition: height ${qt} ${Vt};

  @media (max-width: 600px) {
    height: ${e=>e.$condensed?$D:SD}px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,tO=f.span`
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
    top ${qt} ${Vt},
    left ${qt} ${Vt},
    width ${qt} ${Vt},
    height ${qt} ${Vt},
    transform ${qt} ${Vt};

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
`,S0=f.span`
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
`,nO=f.div`
  display: contents;
`,rO=f.span`
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
    top ${qt} ${Vt},
    left ${qt} ${Vt},
    transform ${qt} ${Vt},
    font-size ${qt} ${Vt},
    line-height ${qt} ${Vt},
    letter-spacing ${qt} ${Vt};

  @media (max-width: 600px) {
    top: ${e=>e.$condensed?"7px":"168px"};
    left: ${e=>e.$condensed?"56px":"50%"};
    max-width: ${e=>e.$condensed?"calc(100% - 72px)":"calc(100% - 32px)"};
    font-size: ${e=>e.$condensed?"var(--text-sm)":"24px"};
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,oO=f.span`
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
    top ${qt} ${Vt},
    left ${qt} ${Vt},
    transform ${qt} ${Vt},
    font-size ${qt} ${Vt},
    line-height ${qt} ${Vt};

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
`,aO=f.div`
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,Eo=_e`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,hx=_e`
  0%   { opacity: 0; transform: translateY(12px) scale(0.94); }
  68%  { opacity: 1; transform: translateY(-2px) scale(1.018); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,iO=_e`
  0%   { opacity: 0; transform: translateY(-8px) scale(0.9); }
  72%  { opacity: 1; transform: translateY(1px) scale(1.035); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
`,$0=f.div`
  animation: ${e=>e.$pop?hx:Eo}
    ${e=>e.$pop?"520ms":"var(--duration-slow, 420ms)"}
    ${e=>e.$pop?"cubic-bezier(0.22, 1, 0.36, 1)":"var(--ease-out)"}
    both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,sO=f.div`
  transform-origin: center bottom;
  animation: ${hx} 480ms cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,lO=_e`
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
`,cO=_e`
  from { transform: translateX(0); }
  to   { transform: translateX(-192px); }
`,px=f.div`
  position: relative;
  width: 100%;
`,dO=f(px)``,uO=_e`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`,hO=f.div`
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
      width: auto;
      max-height: min(82dvh, 680px);
      overflow-y: auto;
      overscroll-behavior: contain;
      padding: var(--space-10) var(--space-3) var(--space-3);
      background: var(--color-bg-primary);
      border: 1px solid var(--color-border-opaque);
      border-radius: var(--radius-2xl);
      box-shadow: 0 -16px 48px rgb(0 0 0 / 24%);
      animation: ${uO} 320ms cubic-bezier(0.22, 1, 0.36, 1) both;
    `}
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,pO=f.button`
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
`,fO=f.div`
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
`,mO=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  animation: ${cO} 18s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,gO=f.span`
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
`,vO=_e`
  0%, 5%    { opacity: 0.28; transform: translateY(-3px) scale(0.92); }
  15%, 88%  { opacity: 1; transform: translateY(0) scale(1); }
  97%, 100% { opacity: 0.28; transform: translateY(1px) scale(0.97); }
`,xO=f.div`
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
`,yO=f.span`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`,wO=f.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`,bO=f.span`
  display: block;
  padding-bottom: 2px;
  border-bottom: 1px solid var(--color-border-opaque);
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: var(--font-weight-medium);
  line-height: 1;
  text-align: center;
  color: var(--color-content-tertiary);
`,kO=f.span`
  display: block;
  width: 100%;
  height: 6px;
  border-radius: 2px;
  background: ${e=>e.$flag==="open"?"var(--color-error-bg)":e.$flag==="watch"?"var(--color-warning-bg)":"var(--color-bg-tertiary)"};
  border: 1px ${e=>e.$flag==="open"?"dashed":"solid"} ${e=>e.$flag==="open"?"var(--color-error-content)":e.$flag==="watch"?"var(--color-warning-border)":"var(--color-border-transparent)"};
  transform-origin: top center;
  animation: ${vO} 5.6s var(--ease-out) infinite both;
  animation-delay: calc(${e=>e.$sequence} * 70ms);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,_O=f.span`
  display: block;
  width: 100%;
  height: 1px;
  margin-top: 5px;
  background: var(--color-border-opaque);
  opacity: 0.55;
`,dl=f(zg)`
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
    animation: ${lO} 300ms var(--ease-out) both;
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
`,CO=f.div`
  display: flex;
  justify-content: flex-start;
  animation: ${Eo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,jO=_e`
  from { opacity: 0; }
  to   { opacity: 1; }
`,SO=f.span`
  animation: ${jO} ${ax}ms linear both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,M0=f.div`
  width: 100%;
  margin-bottom: calc(var(--space-2) * -1);
`,$O=f.div`
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
`,ul=f.div`
  display: flex;
  animation: ${Eo} var(--duration-slow, 420ms) var(--ease-out) both;

  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Mu=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;

  @media (max-width: 600px) {
    gap: var(--space-2);
  }
`,R0=f.div`
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
    font-size: var(--text-sm);
    line-height: 1.45;

    &[data-from='operator'] {
      padding: var(--space-2) var(--space-3);
    }
  }
`,hl=f.div`
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
    ${ur}
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
`,pl=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,fl=f.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,ml=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,gl=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-primary);
`,MO=_e`
  to { transform: rotate(360deg); }
`,N0=f.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-full);
  /* 2px is the ring's stroke width, not a spacing value. */
  border: 2px solid var(--color-border-opaque);
  border-top-color: var(--color-content-secondary);
  animation: ${MO} 700ms linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1600ms;
  }
`,vl=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
`,fx=f.div`
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
`,RO=f.button`
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
`,NO=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,LO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,AO=f.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,TO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,EO=f.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-regular);
  color: var(--color-content-tertiary);
`,IO=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-success-content);

  svg { flex-shrink: 0; }
`,PO=f.div`
  display: flex;
  flex-direction: column;
`,zO=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  animation: ${Eo} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: calc(120ms + ${e=>e.$i??0} * 80ms);

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,DO=f.span`
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
`,OO=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  margin-right: auto;
`,FO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,BO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,HO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  /* Lands just after the last teammate row (6 rows · 80ms + the 120ms base). */
  animation: ${Eo} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: 600ms;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,WO=f.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`,UO=f.button`
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
`,qO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,VO=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`,mx=f.span`
  display: inline-flex;
  color: var(--color-warning-content);
`,Qu=f.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);
  transform: rotate(${e=>e.$open?"180deg":"0deg"});

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,gx=f.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-2);
  animation: ${Eo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,GO=f(gx)`
  padding-top: 0;
  border-top: 1px solid var(--color-border-opaque);
`,vx=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`,YO=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  background: var(--color-warning-bg);
  color: var(--color-warning-content);
`,xx=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,KO=f.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
`,QO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,ZO=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`,XO=f.button`
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
`,JO=f.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
`,L0=f.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-1);
`,A0=f.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,eF=f.span`
  color: var(--color-content-tertiary);
`,tF=f.span`
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
`,nF=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,rF=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,oF=f.div`
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,aF=f.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: var(--space-2);
  width: 100%;
`,iF=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`,sF=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-opaque);
`,lF=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  padding: var(--space-2);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-transparent);
  transform-origin: top left;
  animation: ${iO} 380ms cubic-bezier(0.22, 1, 0.36, 1) both;
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
`,cF=f.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`,dF=f.span`
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
`,T0="cubic-bezier(0.22, 1, 0.36, 1)",uF=_e`
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
`,hF=_e`
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
`,pF=_e`
  0%   { opacity: 0; transform: scale(0.88) translateY(36px) rotate(-1deg); }
  70%  { opacity: 1; transform: scale(1.018) translateY(-2px) rotate(0); }
  100% { opacity: 1; transform: scale(1) translateY(0) rotate(0); }
`,fF=_e`
  from { opacity: 1; transform: scale(1) translateY(0); }
  to   { opacity: 0; transform: scale(0.97) translateY(10px); }
`,mF=M2`
  [role='dialog'][aria-label$='Ultron access'][data-state] {
    background: color-mix(in srgb, black 58%, transparent);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    animation: ${uF} 440ms ${T0} both;

    & > div {
      position: relative;
      overflow: visible;
      border: 0;
      background: transparent;
      box-shadow: 0 32px 90px rgba(3, 11, 25, 0.56);
      animation: ${pF} 560ms ${T0} both;
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
    animation: ${hF} 170ms var(--ease-default, ease) forwards;

    & > div {
      animation: ${fF} 170ms var(--ease-default, ease) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [role='dialog'][aria-label$='Ultron access'][data-state],
    [role='dialog'][aria-label$='Ultron access'][data-state] > div {
      animation: none;
    }
  }
`,gF=f.section`
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
`,vF=f.button`
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
`,xF=f.div`
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
`,yF=f.button`
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
`,wF=f.span`
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
`,bF=f.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--Alloy-matcha-400);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--Alloy-matcha-400) 14%, transparent),
              0 0 20px var(--Alloy-matcha-400);
`,kF=f.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-4);
  margin: var(--space-1) 0;

  @media (max-width: 620px) {
    gap: var(--space-2);
  }
`,_F=f.div`
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
`,CF=f.span`
  display: inline-block;
  margin-right: 0.03em;
  font-size: 0.52em;
  vertical-align: 0.42em;
  color: var(--Alloy-matcha-400);
`,jF=f.span`
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
`,SF=f.h2`
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
`,$F=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-200);
  max-width: 520px;
`,MF=f.div`
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
`,RF=f.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,NF=f.label`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--Alloy-slate-300);
`,LF=f.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-3);

  @media (max-width: 520px) {
    flex-direction: column;
  }
`,AF=f.input`
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
`,TF=f(Fe)`
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
`,EF=f.div`
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
`,IF=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-400);
`,E0=f.div`
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) 0;

  @media (max-width: 600px) {
    padding: 0;
  }
`,PF=f.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
`,zF=f.button`
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
`,DF=_e`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,OF=f.span`
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
  animation: ${DF} 2.4s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: none;
    color: var(--color-content-secondary);
    -webkit-text-fill-color: currentColor;
  }
`,FF=f.div`
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
    ${dx}
  }
  &::after {
    ${ux("up")}
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  /* Mounts only once the opening turn lands — rise it in so it arrives rather
     than pops. */
  animation: ${Eo} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (max-width: 600px) {
    gap: var(--space-2);
    padding:
      var(--space-2)
      var(--space-4)
      max(var(--space-3), env(safe-area-inset-bottom));
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,BF=f.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: flex-start;
`,HF=f.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,WF=f.span`
  position: absolute;
  inset: 0;
  /* Center the canvas in the reserved box so the mark holds its place. */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$show?1:0};
  transition: opacity var(--duration-base) var(--ease-out);
`,UF=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding-top: var(--space-3);
`,qF=f.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
`,I0=f.button`
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
`,VF=f.form`
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
    --composer-btn-size: var(--space-10);
    --composer-btn-icon-attach: var(--space-5);
    --composer-btn-icon-send: var(--space-5);
    gap: var(--space-2);
    padding: var(--space-2);
    border-radius: var(--radius-xl);
  }
`,GF=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,YF=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-1) 0;
`,P0=f.span`
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
`,KF=f.button`
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
`,QF=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;

  &[data-from='operator'] { align-items: flex-end; }
  &[data-from='ultron'] { align-items: flex-start; }
`,ZF=f.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--space-2);
`,XF=f.textarea`
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
    font-size: var(--text-md);
    line-height: var(--line-height-relaxed);
  }
`,z0=f.div`
  flex-shrink: 0;
`;function JF(e){const o=[e.activeId,e.secActiveId];return e.selectedPersonaId&&o.push("persona",e.selectedPersonaId),e.activePageId&&o.push("page",e.activePageId),"#"+o.map(encodeURIComponent).join("/")}function eB(e){const o=e.replace(/^#/,"").trim();if(!o)return{};const i=o.split("/").map(l=>{try{return decodeURIComponent(l)}catch{return l}}),s={};i[0]&&(s.activeId=i[0]),i[1]&&(s.secActiveId=i[1]);for(let l=2;l<i.length-1;l+=2){const d=i[l],h=i[l+1];d==="persona"?s.selectedPersonaId=h:d==="page"&&(s.activePageId=h)}return s}function tB(e,o){const i=v.useRef("");v.useEffect(()=>{const s=()=>{const d=eB(window.location.hash);d.activeId!==void 0&&o.setActiveId(d.activeId),d.secActiveId!==void 0&&o.setSecActiveId(d.secActiveId),o.setSelectedPersonaId(d.selectedPersonaId??null),o.setActivePageId(d.activePageId??null)};window.location.hash&&s();const l=()=>{window.location.hash!==i.current&&s()};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]),v.useEffect(()=>{const s=JF(e);s!==window.location.hash&&(i.current=s,window.history.replaceState(null,"",s))},[e.activeId,e.secActiveId,e.selectedPersonaId,e.activePageId])}const Zu="ultron-theme";function nB(){if(typeof window>"u")return null;const e=window.localStorage.getItem(Zu);return e==="light"||e==="dark"?e:null}function rB(e){const o=document.documentElement;o.classList.toggle("dark",e==="dark"),o.classList.toggle("light",e==="light")}function oB(){const e=Bh("(prefers-color-scheme: dark)"),[o,i]=v.useState(nB);v.useEffect(()=>{rB(o),!(typeof window>"u")&&(o?window.localStorage.setItem(Zu,o):window.localStorage.removeItem(Zu))},[o]);const s=o??(e?"dark":"light"),l=v.useCallback(()=>{const d=s==="dark"?"light":"dark";i(d===(e?"dark":"light")?null:d)},[s,e]);return{theme:s,toggle:l}}const aB="calc(env(safe-area-inset-top, 0px) + 49px)",iB=f.button`
  position: fixed;
  /* 20px in from the top-right — clears the content pane's own 12px inset by a
     further 8px, so the disc sits inside the pane rather than on its corner. */
  top: var(--space-5);
  right: var(--space-5);
  z-index: var(--z-sticky);

  /* Phones put a fixed header in that corner, so the disc drops below it —
     same 12px gap the header keeps from the viewport edges. */
  @media ${Dv} {
    top: calc(${aB} + var(--space-3));
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
`;function sB(){const{theme:e,toggle:o}=oB(),i=e==="dark",s=i?"Switch to light mode":"Switch to dark mode";return n.jsx(iB,{type:"button",onClick:o,"aria-label":s,"aria-pressed":i,title:s,children:i?n.jsx(sh,{size:18}):n.jsx(wg,{size:18})})}const D0=[{id:"ultron",label:"Ultron",icon:n.jsx(st,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:n.jsx(D$,{})},{id:"engaged",label:"Engage",icon:n.jsx(O$,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:n.jsx(F$,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:n.jsx(B$,{})},{id:"ai-home",label:"AI Home",icon:n.jsx(H$,{})}],O0=[{id:"apps",label:"Apps",icon:n.jsx(W$,{})}],F0=[{id:"docs",label:"Document Studio",icon:n.jsx(I2,{})},{id:"form",label:"Form",icon:n.jsx(U$,{})},{id:"tasks",label:"Tasks",icon:n.jsx(q$,{})},{id:"policy",label:"Policy",icon:n.jsx(V$,{}),activeIcon:n.jsx("img",{src:rD,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Workflow",icon:n.jsx(Lo,{}),activeIcon:n.jsx("img",{src:oD,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:n.jsx(G$,{})},{id:"esign",label:"E-Sign Studio",icon:n.jsx(Y$,{})}],B0=3e3,lB=4e3,cB=f.button`
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
`,dB=_e`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,uB=_e`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,hB=_e`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,pB=f.span`
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
      ${dB} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${uB} 1100ms var(--ease-out, ease-out) both;
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
    animation: ${hB} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,fB=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,mB=f(Mg)`
  && {
    border-bottom: none;
    padding-bottom: var(--space-2);
  }
`,gB=f(Rg)`
  && {
    padding-top: 0;
    padding-bottom: var(--space-2);
  }
`,vB=f(Ng)`
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
`,xB=M2`
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
`,yB=f.div`
  display: ${e=>e.$visible?"flex":"none"};
  flex: 1 1 auto;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
`,wB=f.button`
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
`;function bB({onDelete:e}){const o=i=>i.stopPropagation();return n.jsx("span",{onClick:o,onKeyDown:o,onMouseDown:o,children:n.jsx(fh,{placement:"bottom-end",width:168,trigger:n.jsx(wB,{type:"button","aria-label":"Page options",children:n.jsx(xg,{size:16})}),groups:[{id:"actions",options:[{id:"delete",label:"Delete page",destructive:!0,leadingSlot:n.jsx(jg,{size:16}),onClick:e}]}]})})}const kB={needs_attention:n.jsx(wa,{size:16}),live:n.jsx(st,{mark:"orbit2d",size:32,tone:"auto",state:"active"}),resolved:n.jsx($n,{size:16})},_B={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function CB({introAnswers:e,onRestartOnboarding:o}={}){const i=Ov(),[s,l]=v.useState("ultron"),[d,h]=v.useState("home-overview"),[p,g]=v.useState(null),[x,y]=v.useState(null),[w,k]=v.useState("ultron"),[R,S]=v.useState("employees"),_=wM(),[$,M]=v.useState(!!e),[C,j]=v.useState(!1),[D,N]=v.useState(!!e),[L,E]=v.useState(!1),A=v.useRef(null),[F,G]=v.useState(!1),Y=v.useRef(null);v.useEffect(()=>()=>{A.current!==null&&window.clearTimeout(A.current),Y.current!==null&&window.clearTimeout(Y.current)},[]);const W=()=>{A.current!==null&&(window.clearTimeout(A.current),A.current=null),E(!1)},K=(ve=B0)=>{if(W(),ve<=0){E(!0);return}A.current=window.setTimeout(()=>{A.current=null,E(!0)},ve)},J=()=>{Y.current!==null&&window.clearTimeout(Y.current),G(!0),Y.current=window.setTimeout(()=>{Y.current=null,G(!1)},lB)},[ae,ce]=v.useState(!e),[se,Q]=v.useState([]),[O,q]=v.useState(null),T=v.useRef(0),z=ve=>{k("ultron"),M(!1),ce(!1),q(ve)},te=()=>{N(!0),k("ultron"),ce(!1),q(null),M(!0)},U=()=>{k("ultron"),M(!1),ce(!0),q(null)},X=()=>{const ve=`page-${T.current++}`;Q(Le=>[...Le,{id:ve,title:"New page"}]),z(ve)},[le,B]=v.useState({}),[P,oe]=v.useState({}),fe=v.useRef({}),de=(ve,Le)=>{const it=Le.trim();if(!it)return;const Be=(le[ve]??[]).filter(tt=>tt.role==="ultron").length;B(tt=>({...tt,[ve]:[...tt[ve]??[],{role:"operator",text:it}]})),oe(tt=>({...tt,[ve]:!0})),fe.current[ve]=window.setTimeout(()=>{B(tt=>({...tt,[ve]:[...tt[ve]??[],{role:"ultron",text:Rh(it,Be)}]})),oe(tt=>({...tt,[ve]:!1})),delete fe.current[ve]},1100)},xe=ve=>{fe.current[ve]&&(window.clearTimeout(fe.current[ve]),delete fe.current[ve]),Q(Le=>Le.filter(it=>it.id!==ve)),B(Le=>{const{[ve]:it,...Be}=Le;return Be}),oe(Le=>{const{[ve]:it,...Be}=Le;return Be}),O===ve&&(q(null),ce(!0))},we=ae?"live":_.selectedThread?_B[_.selectedThread.status]:"new";tB({activeId:s,secActiveId:d,selectedPersonaId:p,activePageId:x},{setActiveId:l,setSecActiveId:h,setSelectedPersonaId:g,setActivePageId:y});const[Ce,Me]=v.useState(!1),Pe=ve=>ve.map(Le=>({...Le,isActive:Le.id===s,disabled:Le.id!=="ultron",onClick:Le.id==="ultron"?()=>l("ultron"):()=>Me(!0)})),qe=[{id:"memory",label:"Memory",icon:n.jsx(ql,{size:16}),isActive:w==="memory",onClick:()=>k("memory")},{id:"settings",label:"Settings",icon:n.jsx(ag,{size:16})}],We=n.jsx(Kv,{children:w==="memory"?"Memory":w==="account"?"Account database":"Ultron"}),Ae=$l(e==null?void 0:e.companyWebsite)??(e==null?void 0:e.workforceType)??null,Qe={id:"welcome",label:Ae?`${Ae} account setup`:"Account setup",icon:n.jsx(st,{mark:"magnetic2d",size:32,tone:"auto",state:"idle","aria-label":"Ultron"}),isActive:$,onClick:te},Ze=se.map(ve=>({id:ve.id,label:ve.title,icon:n.jsx(I2,{}),isActive:O===ve.id,onClick:()=>z(ve.id),trailingSlot:n.jsx(bB,{onDelete:()=>xe(ve.id)})})),yt=w==="account"?Vu.map(ve=>({type:"single",item:{id:ve.id,label:ve.label,icon:ve.icon,isActive:R===ve.id,onClick:()=>S(ve.id)}})):_.groups.flatMap(ve=>{const Le=ve.id==="needs_attention"?"new":ve.id==="resolved"?"done":"working",it=ve.id==="needs_attention"?ve.threads.filter(Xe=>Xe.status==="analyzing"||_.revealedNewIds.includes(Xe.id)):ve.threads,Be=ve.id==="needs_attention"&&!C||ve.id==="live"&&C,tt=ve.id==="needs_attention"?Ze:[],Dt={type:"group",group:{id:ve.id,label:ve.id==="needs_attention"?"New":ve.label,icon:kB[ve.id],trailingBadge:n.jsx(Ma,{children:it.length+(Be?1:0)+tt.length}),defaultExpanded:!0,outlined:!1,children:[...Be?[Qe]:[],...tt,...it.map(Xe=>({id:Xe.id,label:Xe.id.startsWith("detected_")?n.jsx(hT,{text:Ym(Xe.name,Le)}):Ym(Xe.name,Le),icon:Xe.id==="shift_drop_maria"&&F?n.jsx(st,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Ultron is preparing this event"}):Le==="new"?Xe.status==="analyzing"?n.jsx(st,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):n.jsx(st,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):Le==="working"?n.jsx(st,{mark:"orbit2d",size:32,tone:"auto",state:Xe.status==="in_progress"?"active":"idle","aria-label":"Working"}):n.jsx(st,{mark:"pulse",size:32,tone:"auto",state:Xe.status==="unresolved"?"idle":"static",color:Xe.status==="unresolved"?"var(--color-orange-content-tertiary)":_.viewedIds.includes(Xe.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:w==="ultron"&&!ae&&!O&&we===Le&&_.selectedId===Xe.id,onClick:()=>{Xe.id==="shift_drop_maria"&&W(),k("ultron"),M(!1),ce(!1),q(null),_.setSelectedId(Xe.id)},spotlightPrompt:L&&Xe.id==="shift_drop_maria"?"Ultron caught the last-minute callout. Open it to see the response.":void 0,spotlightDismiss:Xe.id==="shift_drop_maria"?W:void 0,trailingSlot:_.savedWorkflowIds.includes(Xe.id)?n.jsx(Sr,{content:"Saved as workflow",placement:"top",children:n.jsx(pB,{"aria-label":"Saved as workflow",children:n.jsx(Lo,{})})}):void 0}))]}};return ve.id==="resolved"?[{type:"divider",id:"done-divider"},Dt]:ve.id==="live"?[{type:"divider",id:"working-divider"},Dt]:[Dt]}),De=[{id:"main",label:"Workspace",items:Pe(D0)},{id:"tools",label:"Tools",items:Pe(O0)},{id:"bottom",label:"Apps",items:Pe(F0)}];return n.jsxs(n.Fragment,{children:[n.jsx(sB,{}),n.jsx(xB,{}),n.jsxs(nD,{items:Pe(D0),toolItems:Pe(O0),bottomItems:Pe(F0),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},onSettingsClick:o,newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:yt,menuHeader:w==="ultron"?n.jsx(cB,{$active:ae&&!O,onClick:U,"aria-label":"Live — Ultron presence","aria-current":ae&&!O?"page":void 0,children:n.jsx(sT,{onNew:X})}):void 0,pageEntries:qe,showSecondaryNav:!0,showTopNav:w!=="ultron",showSearch:!1,heading:We,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:s,secActiveId:d,activePageId:x,selectedPersonaId:p,moduleGroups:De,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:ve=>{ve==="ultron"&&l("ultron")},onSelectPersona:g,onHome:U,onNewPage:X,openSecondaryNav:L},children:[D&&n.jsx(yB,{$visible:w==="ultron"&&$,"aria-hidden":w!=="ultron"||!$,children:n.jsx(KD,{active:w==="ultron"&&$,answers:e,onContinued:()=>j(!0),onPhoneSubmitted:()=>{_.surfaceDemoThread("shift_drop_maria"),J(),K(i?0:B0)}})}),w==="memory"?n.jsx(gT,{}):w==="account"?n.jsx(NT,{collectionId:R}):$?null:O?n.jsx(BA,{messages:le[O]??[],replying:P[O]??!1,onSend:ve=>de(O,ve)},O):n.jsx(AA,{threads:_.threads,stageById:_.stageById,section:we,analyzedIds:_.analyzedIds,outboundByThread:_.outboundByThread,chatByThread:_.chatByThread,selectedId:_.selectedId,onDecide:_.decide,onAction:_.commit,onCompleteRun:_.completeRun,onRefinement:_.refine,onSaveWorkflow:_.saveWorkflow,pendingWorkflowIds:_.pendingWorkflowIds,onToggleSaveWorkflow:_.toggleWorkflowSave,savedWorkflowIds:_.savedWorkflowIds,onSend:_.sendMessage,replyingIds:_.replyingIds,onStop:_.stopReply,onClose:()=>{k("ultron"),M(!1),ce(!0)},onDetectRisk:_.detectRisk,onRevealNew:_.revealNew})]}),n.jsxs(Lg,{open:Ce,onClose:()=>Me(!1),size:"sm","aria-labelledby":"waitlist-title",children:[n.jsx(mB,{onClose:()=>Me(!1),children:n.jsx("span",{id:"waitlist-title",children:"This app isn't unlocked yet"})}),n.jsx(gB,{children:n.jsx(fB,{children:"Demand for Ultron is extreme, so apps unlock in stages. Finish onboarding, and once you're approved past the waitlist, everything opens up."})}),n.jsx(vB,{children:n.jsx(Fe,{variant:"primary",onClick:()=>Me(!1),children:"Got it"})})]})]})}const H0="cubic-bezier(0.22, 1, 0.36, 1)",W0=_e`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`,jB=_e`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,SB=f.div`
  display: contents;

  nav[aria-label='Primary navigation'] {
    animation: ${W0} 460ms ${H0} both;
  }
  nav[aria-label='Secondary navigation'] {
    animation: ${W0} 500ms ${H0} 90ms both;
  }
  main {
    animation: ${jB} 520ms ease-out 220ms both;
  }

  @media (prefers-reduced-motion: reduce) {
    nav[aria-label='Primary navigation'],
    nav[aria-label='Secondary navigation'],
    main {
      animation: none;
    }
  }
`,Ru="tb:onboarding-complete";function $B(){const[e,o]=v.useState(()=>{try{return window.sessionStorage.getItem(Ru)==="1"}catch{return!1}}),[i,s]=v.useState(null),l=h=>{try{window.sessionStorage.setItem(Ru,"1")}catch{}s(h),o(!0)},d=()=>{try{window.sessionStorage.removeItem(Ru)}catch{}window.location.hash="",window.location.reload()};return e?n.jsx(SB,{children:n.jsx(CB,{introAnswers:i??void 0,onRestartOnboarding:d})}):n.jsx(tP,{onEnterApp:l})}g3.createRoot(document.getElementById("root")).render(n.jsx(pn.StrictMode,{children:n.jsx(O8,{children:n.jsx($B,{})})}));
