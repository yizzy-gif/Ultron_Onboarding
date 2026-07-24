(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function i(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=i(l);fetch(l.href,d)}})();function v0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sd={exports:{}},ri={},Nd={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tf;function gy(){if(tf)return De;tf=1;var e=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),p=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),b=Symbol.iterator;function k(I){return I===null||typeof I!="object"?null:(I=b&&I[b]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,j={};function N(I,A,V){this.props=I,this.context=A,this.refs=j,this.updater=V||S}N.prototype.isReactComponent={},N.prototype.setState=function(I,A){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,A,"setState")},N.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function $(){}$.prototype=N.prototype;function M(I,A,V){this.props=I,this.context=A,this.refs=j,this.updater=V||S}var C=M.prototype=new $;C.constructor=M,_(C,N.prototype),C.isPureReactComponent=!0;var z=Array.isArray,R=Object.prototype.hasOwnProperty,L={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function E(I,A,V){var Z,oe={},pe=null,q=null;if(A!=null)for(Z in A.ref!==void 0&&(q=A.ref),A.key!==void 0&&(pe=""+A.key),A)R.call(A,Z)&&!T.hasOwnProperty(Z)&&(oe[Z]=A[Z]);var O=arguments.length-2;if(O===1)oe.children=V;else if(1<O){for(var Y=Array(O),de=0;de<O;de++)Y[de]=arguments[de+2];oe.children=Y}if(I&&I.defaultProps)for(Z in O=I.defaultProps,O)oe[Z]===void 0&&(oe[Z]=O[Z]);return{$$typeof:e,type:I,key:pe,ref:q,props:oe,_owner:L.current}}function B(I,A){return{$$typeof:e,type:I.type,key:A,ref:I.ref,props:I.props,_owner:I._owner}}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===e}function J(I){var A={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(V){return A[V]})}var W=/\/+/g;function K(I,A){return typeof I=="object"&&I!==null&&I.key!=null?J(""+I.key):A.toString(36)}function te(I,A,V,Z,oe){var pe=typeof I;(pe==="undefined"||pe==="boolean")&&(I=null);var q=!1;if(I===null)q=!0;else switch(pe){case"string":case"number":q=!0;break;case"object":switch(I.$$typeof){case e:case o:q=!0}}if(q)return q=I,oe=oe(q),I=Z===""?"."+K(q,0):Z,z(oe)?(V="",I!=null&&(V=I.replace(W,"$&/")+"/"),te(oe,A,V,"",function(de){return de})):oe!=null&&(G(oe)&&(oe=B(oe,V+(!oe.key||q&&q.key===oe.key?"":(""+oe.key).replace(W,"$&/")+"/")+I)),A.push(oe)),1;if(q=0,Z=Z===""?".":Z+":",z(I))for(var O=0;O<I.length;O++){pe=I[O];var Y=Z+K(pe,O);q+=te(pe,A,V,Y,oe)}else if(Y=k(I),typeof Y=="function")for(I=Y.call(I),O=0;!(pe=I.next()).done;)pe=pe.value,Y=Z+K(pe,O++),q+=te(pe,A,V,Y,oe);else if(pe==="object")throw A=String(I),Error("Objects are not valid as a React child (found: "+(A==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":A)+"). If you meant to render a collection of children, use an array instead.");return q}function ae(I,A,V){if(I==null)return I;var Z=[],oe=0;return te(I,Z,"","",function(pe){return A.call(V,pe,oe++)}),Z}function ce(I){if(I._status===-1){var A=I._result;A=A(),A.then(function(V){(I._status===0||I._status===-1)&&(I._status=1,I._result=V)},function(V){(I._status===0||I._status===-1)&&(I._status=2,I._result=V)}),I._status===-1&&(I._status=0,I._result=A)}if(I._status===1)return I._result.default;throw I._result}var se={current:null},Q={transition:null},D={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:Q,ReactCurrentOwner:L};function H(){throw Error("act(...) is not supported in production builds of React.")}return De.Children={map:ae,forEach:function(I,A,V){ae(I,function(){A.apply(this,arguments)},V)},count:function(I){var A=0;return ae(I,function(){A++}),A},toArray:function(I){return ae(I,function(A){return A})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},De.Component=N,De.Fragment=i,De.Profiler=l,De.PureComponent=M,De.StrictMode=s,De.Suspense=g,De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,De.act=H,De.cloneElement=function(I,A,V){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Z=_({},I.props),oe=I.key,pe=I.ref,q=I._owner;if(A!=null){if(A.ref!==void 0&&(pe=A.ref,q=L.current),A.key!==void 0&&(oe=""+A.key),I.type&&I.type.defaultProps)var O=I.type.defaultProps;for(Y in A)R.call(A,Y)&&!T.hasOwnProperty(Y)&&(Z[Y]=A[Y]===void 0&&O!==void 0?O[Y]:A[Y])}var Y=arguments.length-2;if(Y===1)Z.children=V;else if(1<Y){O=Array(Y);for(var de=0;de<Y;de++)O[de]=arguments[de+2];Z.children=O}return{$$typeof:e,type:I.type,key:oe,ref:pe,props:Z,_owner:q}},De.createContext=function(I){return I={$$typeof:p,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:d,_context:I},I.Consumer=I},De.createElement=E,De.createFactory=function(I){var A=E.bind(null,I);return A.type=I,A},De.createRef=function(){return{current:null}},De.forwardRef=function(I){return{$$typeof:m,render:I}},De.isValidElement=G,De.lazy=function(I){return{$$typeof:x,_payload:{_status:-1,_result:I},_init:ce}},De.memo=function(I,A){return{$$typeof:y,type:I,compare:A===void 0?null:A}},De.startTransition=function(I){var A=Q.transition;Q.transition={};try{I()}finally{Q.transition=A}},De.unstable_act=H,De.useCallback=function(I,A){return se.current.useCallback(I,A)},De.useContext=function(I){return se.current.useContext(I)},De.useDebugValue=function(){},De.useDeferredValue=function(I){return se.current.useDeferredValue(I)},De.useEffect=function(I,A){return se.current.useEffect(I,A)},De.useId=function(){return se.current.useId()},De.useImperativeHandle=function(I,A,V){return se.current.useImperativeHandle(I,A,V)},De.useInsertionEffect=function(I,A){return se.current.useInsertionEffect(I,A)},De.useLayoutEffect=function(I,A){return se.current.useLayoutEffect(I,A)},De.useMemo=function(I,A){return se.current.useMemo(I,A)},De.useReducer=function(I,A,V){return se.current.useReducer(I,A,V)},De.useRef=function(I){return se.current.useRef(I)},De.useState=function(I){return se.current.useState(I)},De.useSyncExternalStore=function(I,A,V){return se.current.useSyncExternalStore(I,A,V)},De.useTransition=function(){return se.current.useTransition()},De.version="18.3.1",De}var nf;function Iu(){return nf||(nf=1,Nd.exports=gy()),Nd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf;function vy(){if(rf)return ri;rf=1;var e=Iu(),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(m,g,y){var x,b={},k=null,S=null;y!==void 0&&(k=""+y),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(S=g.ref);for(x in g)s.call(g,x)&&!d.hasOwnProperty(x)&&(b[x]=g[x]);if(m&&m.defaultProps)for(x in g=m.defaultProps,g)b[x]===void 0&&(b[x]=g[x]);return{$$typeof:o,type:m,key:k,ref:S,props:b,_owner:l.current}}return ri.Fragment=i,ri.jsx=p,ri.jsxs=p,ri}var of;function xy(){return of||(of=1,Sd.exports=vy()),Sd.exports}var n=xy(),v=Iu();const ln=v0(v);var Fs={},Md={exports:{}},tn={},Rd={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var af;function yy(){return af||(af=1,(function(e){function o(Q,D){var H=Q.length;Q.push(D);e:for(;0<H;){var I=H-1>>>1,A=Q[I];if(0<l(A,D))Q[I]=D,Q[H]=A,H=I;else break e}}function i(Q){return Q.length===0?null:Q[0]}function s(Q){if(Q.length===0)return null;var D=Q[0],H=Q.pop();if(H!==D){Q[0]=H;e:for(var I=0,A=Q.length,V=A>>>1;I<V;){var Z=2*(I+1)-1,oe=Q[Z],pe=Z+1,q=Q[pe];if(0>l(oe,H))pe<A&&0>l(q,oe)?(Q[I]=q,Q[pe]=H,I=pe):(Q[I]=oe,Q[Z]=H,I=Z);else if(pe<A&&0>l(q,H))Q[I]=q,Q[pe]=H,I=pe;else break e}}return D}function l(Q,D){var H=Q.sortIndex-D.sortIndex;return H!==0?H:Q.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var p=Date,m=p.now();e.unstable_now=function(){return p.now()-m}}var g=[],y=[],x=1,b=null,k=3,S=!1,_=!1,j=!1,N=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(Q){for(var D=i(y);D!==null;){if(D.callback===null)s(y);else if(D.startTime<=Q)s(y),D.sortIndex=D.expirationTime,o(g,D);else break;D=i(y)}}function z(Q){if(j=!1,C(Q),!_)if(i(g)!==null)_=!0,ce(R);else{var D=i(y);D!==null&&se(z,D.startTime-Q)}}function R(Q,D){_=!1,j&&(j=!1,$(E),E=-1),S=!0;var H=k;try{for(C(D),b=i(g);b!==null&&(!(b.expirationTime>D)||Q&&!J());){var I=b.callback;if(typeof I=="function"){b.callback=null,k=b.priorityLevel;var A=I(b.expirationTime<=D);D=e.unstable_now(),typeof A=="function"?b.callback=A:b===i(g)&&s(g),C(D)}else s(g);b=i(g)}if(b!==null)var V=!0;else{var Z=i(y);Z!==null&&se(z,Z.startTime-D),V=!1}return V}finally{b=null,k=H,S=!1}}var L=!1,T=null,E=-1,B=5,G=-1;function J(){return!(e.unstable_now()-G<B)}function W(){if(T!==null){var Q=e.unstable_now();G=Q;var D=!0;try{D=T(!0,Q)}finally{D?K():(L=!1,T=null)}}else L=!1}var K;if(typeof M=="function")K=function(){M(W)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,ae=te.port2;te.port1.onmessage=W,K=function(){ae.postMessage(null)}}else K=function(){N(W,0)};function ce(Q){T=Q,L||(L=!0,K())}function se(Q,D){E=N(function(){Q(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Q){Q.callback=null},e.unstable_continueExecution=function(){_||S||(_=!0,ce(R))},e.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<Q?Math.floor(1e3/Q):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_getFirstCallbackNode=function(){return i(g)},e.unstable_next=function(Q){switch(k){case 1:case 2:case 3:var D=3;break;default:D=k}var H=k;k=D;try{return Q()}finally{k=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Q,D){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var H=k;k=Q;try{return D()}finally{k=H}},e.unstable_scheduleCallback=function(Q,D,H){var I=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?I+H:I):H=I,Q){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=H+A,Q={id:x++,callback:D,priorityLevel:Q,startTime:H,expirationTime:A,sortIndex:-1},H>I?(Q.sortIndex=H,o(y,Q),i(g)===null&&Q===i(y)&&(j?($(E),E=-1):j=!0,se(z,H-I))):(Q.sortIndex=A,o(g,Q),_||S||(_=!0,ce(R))),Q},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(Q){var D=k;return function(){var H=k;k=D;try{return Q.apply(this,arguments)}finally{k=H}}}})(Ld)),Ld}var sf;function wy(){return sf||(sf=1,Rd.exports=yy()),Rd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf;function by(){if(lf)return tn;lf=1;var e=Iu(),o=wy();function i(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(t,r){p(t,r),p(t+"Capture",r)}function p(t,r){for(l[t]=r,t=0;t<r.length;t++)s.add(r[t])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},b={};function k(t){return g.call(b,t)?!0:g.call(x,t)?!1:y.test(t)?b[t]=!0:(x[t]=!0,!1)}function S(t,r,a,c){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function _(t,r,a,c){if(r===null||typeof r>"u"||S(t,r,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function j(t,r,a,c,u,h,w){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=r,this.sanitizeURL=h,this.removeEmptyString=w}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){N[t]=new j(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];N[r]=new j(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){N[t]=new j(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){N[t]=new j(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){N[t]=new j(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){N[t]=new j(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){N[t]=new j(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){N[t]=new j(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){N[t]=new j(t,5,!1,t.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function M(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace($,M);N[r]=new j(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace($,M);N[r]=new j(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace($,M);N[r]=new j(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){N[t]=new j(t,1,!1,t.toLowerCase(),null,!1,!1)}),N.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){N[t]=new j(t,1,!1,t.toLowerCase(),null,!0,!0)});function C(t,r,a,c){var u=N.hasOwnProperty(r)?N[r]:null;(u!==null?u.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(_(r,a,u,c)&&(a=null),c||u===null?k(r)&&(a===null?t.removeAttribute(r):t.setAttribute(r,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(r=u.attributeName,c=u.attributeNamespace,a===null?t.removeAttribute(r):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,c?t.setAttributeNS(c,r,a):t.setAttribute(r,a))))}var z=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),L=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),J=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),Q=Symbol.iterator;function D(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var H=Object.assign,I;function A(t){if(I===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);I=r&&r[1]||""}return`
`+I+t}var V=!1;function Z(t,r){if(!t||V)return"";V=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ne){var c=ne}Reflect.construct(t,[],r)}else{try{r.call()}catch(ne){c=ne}t.call(r.prototype)}else{try{throw Error()}catch(ne){c=ne}t()}}catch(ne){if(ne&&c&&typeof ne.stack=="string"){for(var u=ne.stack.split(`
`),h=c.stack.split(`
`),w=u.length-1,P=h.length-1;1<=w&&0<=P&&u[w]!==h[P];)P--;for(;1<=w&&0<=P;w--,P--)if(u[w]!==h[P]){if(w!==1||P!==1)do if(w--,P--,0>P||u[w]!==h[P]){var F=`
`+u[w].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=w&&0<=P);break}}}finally{V=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?A(t):""}function oe(t){switch(t.tag){case 5:return A(t.type);case 16:return A("Lazy");case 13:return A("Suspense");case 19:return A("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function pe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case L:return"Portal";case B:return"Profiler";case E:return"StrictMode";case K:return"Suspense";case te:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case J:return(t.displayName||"Context")+".Consumer";case G:return(t._context.displayName||"Context")+".Provider";case W:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ae:return r=t.displayName||null,r!==null?r:pe(t.type)||"Memo";case ce:r=t._payload,t=t._init;try{return pe(t(r))}catch{}}return null}function q(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(r);case 8:return r===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function O(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Y(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function de(t){var r=Y(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),c=""+t[r];if(!t.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return u.call(this)},set:function(w){c=""+w,h.call(this,w)}}),Object.defineProperty(t,r,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function le(t){t._valueTracker||(t._valueTracker=de(t))}function ge(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var a=r.getValue(),c="";return t&&(c=Y(t)?t.checked?"true":"false":t.value),t=c,t!==a?(r.setValue(t),!0):!1}function xe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function we(t,r){var a=r.checked;return H({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function be(t,r){var a=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;a=O(r.value!=null?r.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Le(t,r){r=r.checked,r!=null&&C(t,"checked",r,!1)}function Be(t,r){Le(t,r);var a=O(r.value),c=r.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?Te(t,r.type,a):r.hasOwnProperty("defaultValue")&&Te(t,r.type,O(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function ze(t,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,a||r===t.value||(t.value=r),t.defaultValue=r}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Te(t,r,a){(r!=="number"||xe(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ge=Array.isArray;function Ve(t,r,a,c){if(t=t.options,r){r={};for(var u=0;u<a.length;u++)r["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=r.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&c&&(t[a].defaultSelected=!0)}else{for(a=""+O(a),r=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,c&&(t[u].defaultSelected=!0);return}r!==null||t[u].disabled||(r=t[u])}r!==null&&(r.selected=!0)}}function it(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(i(91));return H({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function We(t,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(i(92));if(Ge(a)){if(1<a.length)throw Error(i(93));a=a[0]}r=a}r==null&&(r=""),a=r}t._wrapperState={initialValue:O(a)}}function yt(t,r){var a=O(r.value),c=O(r.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),r.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function ht(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Ut(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ct(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Ut(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ot,Vn=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,c,u){MSApp.execUnsafeLocalFunction(function(){return t(r,a,c,u)})}:t})(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ot=Ot||document.createElement("div"),Ot.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ot.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function qt(t,r){if(r){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=r;return}}t.textContent=r}var nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rr=["Webkit","ms","Moz","O"];Object.keys(nr).forEach(function(t){rr.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),nr[r]=nr[t]})});function wr(t,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||nr.hasOwnProperty(t)&&nr[t]?(""+r).trim():r+"px"}function Ie(t,r){t=t.style;for(var a in r)if(r.hasOwnProperty(a)){var c=a.indexOf("--")===0,u=wr(a,r[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,u):t[a]=u}}var Ze=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(t,r){if(r){if(Ze[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(i(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(i(61))}if(r.style!=null&&typeof r.style!="object")throw Error(i(62))}}function _t(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var or=null;function eo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gn=null,br=null,ar=null;function Ai(t){if(t=Wa(t)){if(typeof Gn!="function")throw Error(i(280));var r=t.stateNode;r&&(r=ts(r),Gn(t.stateNode,t.type,r))}}function Nt(t){br?ar?ar.push(t):ar=[t]:br=t}function Ti(){if(br){var t=br,r=ar;if(ar=br=null,Ai(t),r)for(t=0;t<r.length;t++)Ai(r[t])}}function re(t,r){return t(r)}function ve(){}var ke=!1;function mt(t,r,a){if(ke)return t(r,a);ke=!0;try{return re(t,r,a)}finally{ke=!1,(br!==null||ar!==null)&&(ve(),Ti())}}function et(t,r){var a=t.stateNode;if(a===null)return null;var c=ts(a);if(c===null)return null;a=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(i(231,r,typeof a));return a}var Kt=!1;if(m)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){Kt=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{Kt=!1}function to(t,r,a,c,u,h,w,P,F){var ne=Array.prototype.slice.call(arguments,3);try{r.apply(a,ne)}catch(he){this.onError(he)}}var kr=!1,Ro=null,Ii=!1,ql=null,_v={onError:function(t){kr=!0,Ro=t}};function Cv(t,r,a,c,u,h,w,P,F){kr=!1,Ro=null,to.apply(_v,arguments)}function jv(t,r,a,c,u,h,w,P,F){if(Cv.apply(this,arguments),kr){if(kr){var ne=Ro;kr=!1,Ro=null}else throw Error(i(198));Ii||(Ii=!0,ql=ne)}}function no(t){var r=t,a=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.flags&4098)!==0&&(a=r.return),t=r.return;while(t)}return r.tag===3?a:null}function Cp(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function jp(t){if(no(t)!==t)throw Error(i(188))}function Sv(t){var r=t.alternate;if(!r){if(r=no(t),r===null)throw Error(i(188));return r!==t?null:t}for(var a=t,c=r;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(c=u.return,c!==null){a=c;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return jp(u),t;if(h===c)return jp(u),r;h=h.sibling}throw Error(i(188))}if(a.return!==c.return)a=u,c=h;else{for(var w=!1,P=u.child;P;){if(P===a){w=!0,a=u,c=h;break}if(P===c){w=!0,c=u,a=h;break}P=P.sibling}if(!w){for(P=h.child;P;){if(P===a){w=!0,a=h,c=u;break}if(P===c){w=!0,c=h,a=u;break}P=P.sibling}if(!w)throw Error(i(189))}}if(a.alternate!==c)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?t:r}function Sp(t){return t=Sv(t),t!==null?Np(t):null}function Np(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=Np(t);if(r!==null)return r;t=t.sibling}return null}var Mp=o.unstable_scheduleCallback,Rp=o.unstable_cancelCallback,Nv=o.unstable_shouldYield,Mv=o.unstable_requestPaint,gt=o.unstable_now,Rv=o.unstable_getCurrentPriorityLevel,Vl=o.unstable_ImmediatePriority,Lp=o.unstable_UserBlockingPriority,Ei=o.unstable_NormalPriority,Lv=o.unstable_LowPriority,$p=o.unstable_IdlePriority,Pi=null,Yn=null;function $v(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(Pi,t,void 0,(t.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:Iv,Av=Math.log,Tv=Math.LN2;function Iv(t){return t>>>=0,t===0?32:31-(Av(t)/Tv|0)|0}var zi=64,Oi=4194304;function Ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Di(t,r){var a=t.pendingLanes;if(a===0)return 0;var c=0,u=t.suspendedLanes,h=t.pingedLanes,w=a&268435455;if(w!==0){var P=w&~u;P!==0?c=Ca(P):(h&=w,h!==0&&(c=Ca(h)))}else w=a&~u,w!==0?c=Ca(w):h!==0&&(c=Ca(h));if(c===0)return 0;if(r!==0&&r!==c&&(r&u)===0&&(u=c&-c,h=r&-r,u>=h||u===16&&(h&4194240)!==0))return r;if((c&4)!==0&&(c|=a&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=c;0<r;)a=31-In(r),u=1<<a,c|=t[a],r&=~u;return c}function Ev(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pv(t,r){for(var a=t.suspendedLanes,c=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var w=31-In(h),P=1<<w,F=u[w];F===-1?((P&a)===0||(P&c)!==0)&&(u[w]=Ev(P,r)):F<=r&&(t.expiredLanes|=P),h&=~P}}function Gl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ap(){var t=zi;return zi<<=1,(zi&4194240)===0&&(zi=64),t}function Yl(t){for(var r=[],a=0;31>a;a++)r.push(t);return r}function ja(t,r,a){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-In(r),t[r]=a}function zv(t,r){var a=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-In(a),h=1<<u;r[u]=0,c[u]=-1,t[u]=-1,a&=~h}}function Kl(t,r){var a=t.entangledLanes|=r;for(t=t.entanglements;a;){var c=31-In(a),u=1<<c;u&r|t[c]&r&&(t[c]|=r),a&=~u}}var Xe=0;function Tp(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Ip,Ql,Ep,Pp,zp,Zl=!1,Fi=[],_r=null,Cr=null,jr=null,Sa=new Map,Na=new Map,Sr=[],Ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Op(t,r){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":Sa.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(r.pointerId)}}function Ma(t,r,a,c,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:r,domEventName:a,eventSystemFlags:c,nativeEvent:h,targetContainers:[u]},r!==null&&(r=Wa(r),r!==null&&Ql(r)),t):(t.eventSystemFlags|=c,r=t.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),t)}function Dv(t,r,a,c,u){switch(r){case"focusin":return _r=Ma(_r,t,r,a,c,u),!0;case"dragenter":return Cr=Ma(Cr,t,r,a,c,u),!0;case"mouseover":return jr=Ma(jr,t,r,a,c,u),!0;case"pointerover":var h=u.pointerId;return Sa.set(h,Ma(Sa.get(h)||null,t,r,a,c,u)),!0;case"gotpointercapture":return h=u.pointerId,Na.set(h,Ma(Na.get(h)||null,t,r,a,c,u)),!0}return!1}function Dp(t){var r=ro(t.target);if(r!==null){var a=no(r);if(a!==null){if(r=a.tag,r===13){if(r=Cp(a),r!==null){t.blockedOn=r,zp(t.priority,function(){Ep(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bi(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var a=Jl(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);or=c,a.target.dispatchEvent(c),or=null}else return r=Wa(a),r!==null&&Ql(r),t.blockedOn=a,!1;r.shift()}return!0}function Fp(t,r,a){Bi(t)&&a.delete(r)}function Fv(){Zl=!1,_r!==null&&Bi(_r)&&(_r=null),Cr!==null&&Bi(Cr)&&(Cr=null),jr!==null&&Bi(jr)&&(jr=null),Sa.forEach(Fp),Na.forEach(Fp)}function Ra(t,r){t.blockedOn===r&&(t.blockedOn=null,Zl||(Zl=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Fv)))}function La(t){function r(u){return Ra(u,t)}if(0<Fi.length){Ra(Fi[0],t);for(var a=1;a<Fi.length;a++){var c=Fi[a];c.blockedOn===t&&(c.blockedOn=null)}}for(_r!==null&&Ra(_r,t),Cr!==null&&Ra(Cr,t),jr!==null&&Ra(jr,t),Sa.forEach(r),Na.forEach(r),a=0;a<Sr.length;a++)c=Sr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<Sr.length&&(a=Sr[0],a.blockedOn===null);)Dp(a),a.blockedOn===null&&Sr.shift()}var Lo=z.ReactCurrentBatchConfig,Wi=!0;function Bv(t,r,a,c){var u=Xe,h=Lo.transition;Lo.transition=null;try{Xe=1,Xl(t,r,a,c)}finally{Xe=u,Lo.transition=h}}function Wv(t,r,a,c){var u=Xe,h=Lo.transition;Lo.transition=null;try{Xe=4,Xl(t,r,a,c)}finally{Xe=u,Lo.transition=h}}function Xl(t,r,a,c){if(Wi){var u=Jl(t,r,a,c);if(u===null)gc(t,r,c,Hi,a),Op(t,c);else if(Dv(u,t,r,a,c))c.stopPropagation();else if(Op(t,c),r&4&&-1<Ov.indexOf(t)){for(;u!==null;){var h=Wa(u);if(h!==null&&Ip(h),h=Jl(t,r,a,c),h===null&&gc(t,r,c,Hi,a),h===u)break;u=h}u!==null&&c.stopPropagation()}else gc(t,r,c,null,a)}}var Hi=null;function Jl(t,r,a,c){if(Hi=null,t=eo(c),t=ro(t),t!==null)if(r=no(t),r===null)t=null;else if(a=r.tag,a===13){if(t=Cp(r),t!==null)return t;t=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Hi=t,null}function Bp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rv()){case Vl:return 1;case Lp:return 4;case Ei:case Lv:return 16;case $p:return 536870912;default:return 16}default:return 16}}var Nr=null,ec=null,Ui=null;function Wp(){if(Ui)return Ui;var t,r=ec,a=r.length,c,u="value"in Nr?Nr.value:Nr.textContent,h=u.length;for(t=0;t<a&&r[t]===u[t];t++);var w=a-t;for(c=1;c<=w&&r[a-c]===u[h-c];c++);return Ui=u.slice(t,1<c?1-c:void 0)}function qi(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Vi(){return!0}function Hp(){return!1}function cn(t){function r(a,c,u,h,w){this._reactName=a,this._targetInst=u,this.type=c,this.nativeEvent=h,this.target=w,this.currentTarget=null;for(var P in t)t.hasOwnProperty(P)&&(a=t[P],this[P]=a?a(h):h[P]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Vi:Hp,this.isPropagationStopped=Hp,this}return H(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vi)},persist:function(){},isPersistent:Vi}),r}var $o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tc=cn($o),$a=H({},$o,{view:0,detail:0}),Hv=cn($a),nc,rc,Aa,Gi=H({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Aa&&(Aa&&t.type==="mousemove"?(nc=t.screenX-Aa.screenX,rc=t.screenY-Aa.screenY):rc=nc=0,Aa=t),nc)},movementY:function(t){return"movementY"in t?t.movementY:rc}}),Up=cn(Gi),Uv=H({},Gi,{dataTransfer:0}),qv=cn(Uv),Vv=H({},$a,{relatedTarget:0}),oc=cn(Vv),Gv=H({},$o,{animationName:0,elapsedTime:0,pseudoElement:0}),Yv=cn(Gv),Kv=H({},$o,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qv=cn(Kv),Zv=H({},$o,{data:0}),qp=cn(Zv),Xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=ex[t])?!!r[t]:!1}function ac(){return tx}var nx=H({},$a,{key:function(t){if(t.key){var r=Xv[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=qi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(t){return t.type==="keypress"?qi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rx=cn(nx),ox=H({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=cn(ox),ax=H({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),ix=cn(ax),sx=H({},$o,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=cn(sx),cx=H({},Gi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dx=cn(cx),ux=[9,13,27,32],ic=m&&"CompositionEvent"in window,Ta=null;m&&"documentMode"in document&&(Ta=document.documentMode);var px=m&&"TextEvent"in window&&!Ta,Gp=m&&(!ic||Ta&&8<Ta&&11>=Ta),Yp=" ",Kp=!1;function Qp(t,r){switch(t){case"keyup":return ux.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ao=!1;function hx(t,r){switch(t){case"compositionend":return Zp(r);case"keypress":return r.which!==32?null:(Kp=!0,Yp);case"textInput":return t=r.data,t===Yp&&Kp?null:t;default:return null}}function fx(t,r){if(Ao)return t==="compositionend"||!ic&&Qp(t,r)?(t=Wp(),Ui=ec=Nr=null,Ao=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Gp&&r.locale!=="ko"?null:r.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!mx[t.type]:r==="textarea"}function Jp(t,r,a,c){Nt(c),r=Xi(r,"onChange"),0<r.length&&(a=new tc("onChange","change",null,a,c),t.push({event:a,listeners:r}))}var Ia=null,Ea=null;function gx(t){vh(t,0)}function Yi(t){var r=zo(t);if(ge(r))return t}function vx(t,r){if(t==="change")return r}var eh=!1;if(m){var sc;if(m){var lc="oninput"in document;if(!lc){var th=document.createElement("div");th.setAttribute("oninput","return;"),lc=typeof th.oninput=="function"}sc=lc}else sc=!1;eh=sc&&(!document.documentMode||9<document.documentMode)}function nh(){Ia&&(Ia.detachEvent("onpropertychange",rh),Ea=Ia=null)}function rh(t){if(t.propertyName==="value"&&Yi(Ea)){var r=[];Jp(r,Ea,t,eo(t)),mt(gx,r)}}function xx(t,r,a){t==="focusin"?(nh(),Ia=r,Ea=a,Ia.attachEvent("onpropertychange",rh)):t==="focusout"&&nh()}function yx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yi(Ea)}function wx(t,r){if(t==="click")return Yi(r)}function bx(t,r){if(t==="input"||t==="change")return Yi(r)}function kx(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var En=typeof Object.is=="function"?Object.is:kx;function Pa(t,r){if(En(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var a=Object.keys(t),c=Object.keys(r);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var u=a[c];if(!g.call(r,u)||!En(t[u],r[u]))return!1}return!0}function oh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ah(t,r){var a=oh(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=r&&c>=r)return{node:a,offset:r-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=oh(a)}}function ih(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?ih(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function sh(){for(var t=window,r=xe();r instanceof t.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)t=r.contentWindow;else break;r=xe(t.document)}return r}function cc(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function _x(t){var r=sh(),a=t.focusedElem,c=t.selectionRange;if(r!==a&&a&&a.ownerDocument&&ih(a.ownerDocument.documentElement,a)){if(c!==null&&cc(a)){if(r=c.start,t=c.end,t===void 0&&(t=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(t,a.value.length);else if(t=(r=a.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,h=Math.min(c.start,u);c=c.end===void 0?h:Math.min(c.end,u),!t.extend&&h>c&&(u=c,c=h,h=u),u=ah(a,h);var w=ah(a,c);u&&w&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(r=r.createRange(),r.setStart(u.node,u.offset),t.removeAllRanges(),h>c?(t.addRange(r),t.extend(w.node,w.offset)):(r.setEnd(w.node,w.offset),t.addRange(r)))}}for(r=[],t=a;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)t=r[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Cx=m&&"documentMode"in document&&11>=document.documentMode,To=null,dc=null,za=null,uc=!1;function lh(t,r,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uc||To==null||To!==xe(c)||(c=To,"selectionStart"in c&&cc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),za&&Pa(za,c)||(za=c,c=Xi(dc,"onSelect"),0<c.length&&(r=new tc("onSelect","select",null,r,a),t.push({event:r,listeners:c}),r.target=To)))}function Ki(t,r){var a={};return a[t.toLowerCase()]=r.toLowerCase(),a["Webkit"+t]="webkit"+r,a["Moz"+t]="moz"+r,a}var Io={animationend:Ki("Animation","AnimationEnd"),animationiteration:Ki("Animation","AnimationIteration"),animationstart:Ki("Animation","AnimationStart"),transitionend:Ki("Transition","TransitionEnd")},pc={},ch={};m&&(ch=document.createElement("div").style,"AnimationEvent"in window||(delete Io.animationend.animation,delete Io.animationiteration.animation,delete Io.animationstart.animation),"TransitionEvent"in window||delete Io.transitionend.transition);function Qi(t){if(pc[t])return pc[t];if(!Io[t])return t;var r=Io[t],a;for(a in r)if(r.hasOwnProperty(a)&&a in ch)return pc[t]=r[a];return t}var dh=Qi("animationend"),uh=Qi("animationiteration"),ph=Qi("animationstart"),hh=Qi("transitionend"),fh=new Map,mh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,r){fh.set(t,r),d(r,[t])}for(var hc=0;hc<mh.length;hc++){var fc=mh[hc],jx=fc.toLowerCase(),Sx=fc[0].toUpperCase()+fc.slice(1);Mr(jx,"on"+Sx)}Mr(dh,"onAnimationEnd"),Mr(uh,"onAnimationIteration"),Mr(ph,"onAnimationStart"),Mr("dblclick","onDoubleClick"),Mr("focusin","onFocus"),Mr("focusout","onBlur"),Mr(hh,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oa));function gh(t,r,a){var c=t.type||"unknown-event";t.currentTarget=a,jv(c,r,void 0,t),t.currentTarget=null}function vh(t,r){r=(r&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],u=c.event;c=c.listeners;e:{var h=void 0;if(r)for(var w=c.length-1;0<=w;w--){var P=c[w],F=P.instance,ne=P.currentTarget;if(P=P.listener,F!==h&&u.isPropagationStopped())break e;gh(u,P,ne),h=F}else for(w=0;w<c.length;w++){if(P=c[w],F=P.instance,ne=P.currentTarget,P=P.listener,F!==h&&u.isPropagationStopped())break e;gh(u,P,ne),h=F}}}if(Ii)throw t=ql,Ii=!1,ql=null,t}function rt(t,r){var a=r[kc];a===void 0&&(a=r[kc]=new Set);var c=t+"__bubble";a.has(c)||(xh(r,t,2,!1),a.add(c))}function mc(t,r,a){var c=0;r&&(c|=4),xh(a,t,c,r)}var Zi="_reactListening"+Math.random().toString(36).slice(2);function Da(t){if(!t[Zi]){t[Zi]=!0,s.forEach(function(a){a!=="selectionchange"&&(Nx.has(a)||mc(a,!1,t),mc(a,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Zi]||(r[Zi]=!0,mc("selectionchange",!1,r))}}function xh(t,r,a,c){switch(Bp(r)){case 1:var u=Bv;break;case 4:u=Wv;break;default:u=Xl}a=u.bind(null,r,a,t),u=void 0,!Kt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),c?u!==void 0?t.addEventListener(r,a,{capture:!0,passive:u}):t.addEventListener(r,a,!0):u!==void 0?t.addEventListener(r,a,{passive:u}):t.addEventListener(r,a,!1)}function gc(t,r,a,c,u){var h=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var P=c.stateNode.containerInfo;if(P===u||P.nodeType===8&&P.parentNode===u)break;if(w===4)for(w=c.return;w!==null;){var F=w.tag;if((F===3||F===4)&&(F=w.stateNode.containerInfo,F===u||F.nodeType===8&&F.parentNode===u))return;w=w.return}for(;P!==null;){if(w=ro(P),w===null)return;if(F=w.tag,F===5||F===6){c=h=w;continue e}P=P.parentNode}}c=c.return}mt(function(){var ne=h,he=eo(a),fe=[];e:{var ue=fh.get(t);if(ue!==void 0){var ye=tc,Ce=t;switch(t){case"keypress":if(qi(a)===0)break e;case"keydown":case"keyup":ye=rx;break;case"focusin":Ce="focus",ye=oc;break;case"focusout":Ce="blur",ye=oc;break;case"beforeblur":case"afterblur":ye=oc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=ix;break;case dh:case uh:case ph:ye=Yv;break;case hh:ye=lx;break;case"scroll":ye=Hv;break;case"wheel":ye=dx;break;case"copy":case"cut":case"paste":ye=Qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=Vp}var je=(r&4)!==0,vt=!je&&t==="scroll",X=je?ue!==null?ue+"Capture":null:ue;je=[];for(var U=ne,ee;U!==null;){ee=U;var me=ee.stateNode;if(ee.tag===5&&me!==null&&(ee=me,X!==null&&(me=et(U,X),me!=null&&je.push(Fa(U,me,ee)))),vt)break;U=U.return}0<je.length&&(ue=new ye(ue,Ce,null,a,he),fe.push({event:ue,listeners:je}))}}if((r&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",ye=t==="mouseout"||t==="pointerout",ue&&a!==or&&(Ce=a.relatedTarget||a.fromElement)&&(ro(Ce)||Ce[ir]))break e;if((ye||ue)&&(ue=he.window===he?he:(ue=he.ownerDocument)?ue.defaultView||ue.parentWindow:window,ye?(Ce=a.relatedTarget||a.toElement,ye=ne,Ce=Ce?ro(Ce):null,Ce!==null&&(vt=no(Ce),Ce!==vt||Ce.tag!==5&&Ce.tag!==6)&&(Ce=null)):(ye=null,Ce=ne),ye!==Ce)){if(je=Up,me="onMouseLeave",X="onMouseEnter",U="mouse",(t==="pointerout"||t==="pointerover")&&(je=Vp,me="onPointerLeave",X="onPointerEnter",U="pointer"),vt=ye==null?ue:zo(ye),ee=Ce==null?ue:zo(Ce),ue=new je(me,U+"leave",ye,a,he),ue.target=vt,ue.relatedTarget=ee,me=null,ro(he)===ne&&(je=new je(X,U+"enter",Ce,a,he),je.target=ee,je.relatedTarget=vt,me=je),vt=me,ye&&Ce)t:{for(je=ye,X=Ce,U=0,ee=je;ee;ee=Eo(ee))U++;for(ee=0,me=X;me;me=Eo(me))ee++;for(;0<U-ee;)je=Eo(je),U--;for(;0<ee-U;)X=Eo(X),ee--;for(;U--;){if(je===X||X!==null&&je===X.alternate)break t;je=Eo(je),X=Eo(X)}je=null}else je=null;ye!==null&&yh(fe,ue,ye,je,!1),Ce!==null&&vt!==null&&yh(fe,vt,Ce,je,!0)}}e:{if(ue=ne?zo(ne):window,ye=ue.nodeName&&ue.nodeName.toLowerCase(),ye==="select"||ye==="input"&&ue.type==="file")var Ne=vx;else if(Xp(ue))if(eh)Ne=bx;else{Ne=yx;var Me=xx}else(ye=ue.nodeName)&&ye.toLowerCase()==="input"&&(ue.type==="checkbox"||ue.type==="radio")&&(Ne=wx);if(Ne&&(Ne=Ne(t,ne))){Jp(fe,Ne,a,he);break e}Me&&Me(t,ue,ne),t==="focusout"&&(Me=ue._wrapperState)&&Me.controlled&&ue.type==="number"&&Te(ue,"number",ue.value)}switch(Me=ne?zo(ne):window,t){case"focusin":(Xp(Me)||Me.contentEditable==="true")&&(To=Me,dc=ne,za=null);break;case"focusout":za=dc=To=null;break;case"mousedown":uc=!0;break;case"contextmenu":case"mouseup":case"dragend":uc=!1,lh(fe,a,he);break;case"selectionchange":if(Cx)break;case"keydown":case"keyup":lh(fe,a,he)}var Re;if(ic)e:{switch(t){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else Ao?Qp(t,a)&&($e="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&($e="onCompositionStart");$e&&(Gp&&a.locale!=="ko"&&(Ao||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&Ao&&(Re=Wp()):(Nr=he,ec="value"in Nr?Nr.value:Nr.textContent,Ao=!0)),Me=Xi(ne,$e),0<Me.length&&($e=new qp($e,t,null,a,he),fe.push({event:$e,listeners:Me}),Re?$e.data=Re:(Re=Zp(a),Re!==null&&($e.data=Re)))),(Re=px?hx(t,a):fx(t,a))&&(ne=Xi(ne,"onBeforeInput"),0<ne.length&&(he=new qp("onBeforeInput","beforeinput",null,a,he),fe.push({event:he,listeners:ne}),he.data=Re))}vh(fe,r)})}function Fa(t,r,a){return{instance:t,listener:r,currentTarget:a}}function Xi(t,r){for(var a=r+"Capture",c=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=et(t,a),h!=null&&c.unshift(Fa(t,h,u)),h=et(t,r),h!=null&&c.push(Fa(t,h,u))),t=t.return}return c}function Eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yh(t,r,a,c,u){for(var h=r._reactName,w=[];a!==null&&a!==c;){var P=a,F=P.alternate,ne=P.stateNode;if(F!==null&&F===c)break;P.tag===5&&ne!==null&&(P=ne,u?(F=et(a,h),F!=null&&w.unshift(Fa(a,F,P))):u||(F=et(a,h),F!=null&&w.push(Fa(a,F,P)))),a=a.return}w.length!==0&&t.push({event:r,listeners:w})}var Mx=/\r\n?/g,Rx=/\u0000|\uFFFD/g;function wh(t){return(typeof t=="string"?t:""+t).replace(Mx,`
`).replace(Rx,"")}function Ji(t,r,a){if(r=wh(r),wh(t)!==r&&a)throw Error(i(425))}function es(){}var vc=null,xc=null;function yc(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var wc=typeof setTimeout=="function"?setTimeout:void 0,Lx=typeof clearTimeout=="function"?clearTimeout:void 0,bh=typeof Promise=="function"?Promise:void 0,$x=typeof queueMicrotask=="function"?queueMicrotask:typeof bh<"u"?function(t){return bh.resolve(null).then(t).catch(Ax)}:wc;function Ax(t){setTimeout(function(){throw t})}function bc(t,r){var a=r,c=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(c===0){t.removeChild(u),La(r);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=u}while(a);La(r)}function Rr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function kh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return t;r--}else a==="/$"&&r++}t=t.previousSibling}return null}var Po=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Po,Ba="__reactProps$"+Po,ir="__reactContainer$"+Po,kc="__reactEvents$"+Po,Tx="__reactListeners$"+Po,Ix="__reactHandles$"+Po;function ro(t){var r=t[Kn];if(r)return r;for(var a=t.parentNode;a;){if(r=a[ir]||a[Kn]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(t=kh(t);t!==null;){if(a=t[Kn])return a;t=kh(t)}return r}t=a,a=t.parentNode}return null}function Wa(t){return t=t[Kn]||t[ir],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function ts(t){return t[Ba]||null}var _c=[],Oo=-1;function Lr(t){return{current:t}}function ot(t){0>Oo||(t.current=_c[Oo],_c[Oo]=null,Oo--)}function tt(t,r){Oo++,_c[Oo]=t.current,t.current=r}var $r={},Dt=Lr($r),Qt=Lr(!1),oo=$r;function Do(t,r){var a=t.type.contextTypes;if(!a)return $r;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in a)u[h]=r[h];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=u),u}function Zt(t){return t=t.childContextTypes,t!=null}function ns(){ot(Qt),ot(Dt)}function _h(t,r,a){if(Dt.current!==$r)throw Error(i(168));tt(Dt,r),tt(Qt,a)}function Ch(t,r,a){var c=t.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var u in c)if(!(u in r))throw Error(i(108,q(t)||"Unknown",u));return H({},a,c)}function rs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||$r,oo=Dt.current,tt(Dt,t),tt(Qt,Qt.current),!0}function jh(t,r,a){var c=t.stateNode;if(!c)throw Error(i(169));a?(t=Ch(t,r,oo),c.__reactInternalMemoizedMergedChildContext=t,ot(Qt),ot(Dt),tt(Dt,t)):ot(Qt),tt(Qt,a)}var sr=null,os=!1,Cc=!1;function Sh(t){sr===null?sr=[t]:sr.push(t)}function Ex(t){os=!0,Sh(t)}function Ar(){if(!Cc&&sr!==null){Cc=!0;var t=0,r=Xe;try{var a=sr;for(Xe=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}sr=null,os=!1}catch(u){throw sr!==null&&(sr=sr.slice(t+1)),Mp(Vl,Ar),u}finally{Xe=r,Cc=!1}}return null}var Fo=[],Bo=0,as=null,is=0,kn=[],_n=0,ao=null,lr=1,cr="";function io(t,r){Fo[Bo++]=is,Fo[Bo++]=as,as=t,is=r}function Nh(t,r,a){kn[_n++]=lr,kn[_n++]=cr,kn[_n++]=ao,ao=t;var c=lr;t=cr;var u=32-In(c)-1;c&=~(1<<u),a+=1;var h=32-In(r)+u;if(30<h){var w=u-u%5;h=(c&(1<<w)-1).toString(32),c>>=w,u-=w,lr=1<<32-In(r)+u|a<<u|c,cr=h+t}else lr=1<<h|a<<u|c,cr=t}function jc(t){t.return!==null&&(io(t,1),Nh(t,1,0))}function Sc(t){for(;t===as;)as=Fo[--Bo],Fo[Bo]=null,is=Fo[--Bo],Fo[Bo]=null;for(;t===ao;)ao=kn[--_n],kn[_n]=null,cr=kn[--_n],kn[_n]=null,lr=kn[--_n],kn[_n]=null}var dn=null,un=null,st=!1,Pn=null;function Mh(t,r){var a=Nn(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=t,r=t.deletions,r===null?(t.deletions=[a],t.flags|=16):r.push(a)}function Rh(t,r){switch(t.tag){case 5:var a=t.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,dn=t,un=Rr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,dn=t,un=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=ao!==null?{id:lr,overflow:cr}:null,t.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Nn(18,null,null,0),a.stateNode=r,a.return=t,t.child=a,dn=t,un=null,!0):!1;default:return!1}}function Nc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mc(t){if(st){var r=un;if(r){var a=r;if(!Rh(t,r)){if(Nc(t))throw Error(i(418));r=Rr(a.nextSibling);var c=dn;r&&Rh(t,r)?Mh(c,a):(t.flags=t.flags&-4097|2,st=!1,dn=t)}}else{if(Nc(t))throw Error(i(418));t.flags=t.flags&-4097|2,st=!1,dn=t}}}function Lh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function ss(t){if(t!==dn)return!1;if(!st)return Lh(t),st=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!yc(t.type,t.memoizedProps)),r&&(r=un)){if(Nc(t))throw $h(),Error(i(418));for(;r;)Mh(t,r),r=Rr(r.nextSibling)}if(Lh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(r===0){un=Rr(t.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}t=t.nextSibling}un=null}}else un=dn?Rr(t.stateNode.nextSibling):null;return!0}function $h(){for(var t=un;t;)t=Rr(t.nextSibling)}function Wo(){un=dn=null,st=!1}function Rc(t){Pn===null?Pn=[t]:Pn.push(t)}var Px=z.ReactCurrentBatchConfig;function Ha(t,r,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(i(309));var c=a.stateNode}if(!c)throw Error(i(147,t));var u=c,h=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(w){var P=u.refs;w===null?delete P[h]:P[h]=w},r._stringRef=h,r)}if(typeof t!="string")throw Error(i(284));if(!a._owner)throw Error(i(290,t))}return t}function ls(t,r){throw t=Object.prototype.toString.call(r),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function Ah(t){var r=t._init;return r(t._payload)}function Th(t){function r(X,U){if(t){var ee=X.deletions;ee===null?(X.deletions=[U],X.flags|=16):ee.push(U)}}function a(X,U){if(!t)return null;for(;U!==null;)r(X,U),U=U.sibling;return null}function c(X,U){for(X=new Map;U!==null;)U.key!==null?X.set(U.key,U):X.set(U.index,U),U=U.sibling;return X}function u(X,U){return X=Fr(X,U),X.index=0,X.sibling=null,X}function h(X,U,ee){return X.index=ee,t?(ee=X.alternate,ee!==null?(ee=ee.index,ee<U?(X.flags|=2,U):ee):(X.flags|=2,U)):(X.flags|=1048576,U)}function w(X){return t&&X.alternate===null&&(X.flags|=2),X}function P(X,U,ee,me){return U===null||U.tag!==6?(U=wd(ee,X.mode,me),U.return=X,U):(U=u(U,ee),U.return=X,U)}function F(X,U,ee,me){var Ne=ee.type;return Ne===T?he(X,U,ee.props.children,me,ee.key):U!==null&&(U.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===ce&&Ah(Ne)===U.type)?(me=u(U,ee.props),me.ref=Ha(X,U,ee),me.return=X,me):(me=As(ee.type,ee.key,ee.props,null,X.mode,me),me.ref=Ha(X,U,ee),me.return=X,me)}function ne(X,U,ee,me){return U===null||U.tag!==4||U.stateNode.containerInfo!==ee.containerInfo||U.stateNode.implementation!==ee.implementation?(U=bd(ee,X.mode,me),U.return=X,U):(U=u(U,ee.children||[]),U.return=X,U)}function he(X,U,ee,me,Ne){return U===null||U.tag!==7?(U=mo(ee,X.mode,me,Ne),U.return=X,U):(U=u(U,ee),U.return=X,U)}function fe(X,U,ee){if(typeof U=="string"&&U!==""||typeof U=="number")return U=wd(""+U,X.mode,ee),U.return=X,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case R:return ee=As(U.type,U.key,U.props,null,X.mode,ee),ee.ref=Ha(X,null,U),ee.return=X,ee;case L:return U=bd(U,X.mode,ee),U.return=X,U;case ce:var me=U._init;return fe(X,me(U._payload),ee)}if(Ge(U)||D(U))return U=mo(U,X.mode,ee,null),U.return=X,U;ls(X,U)}return null}function ue(X,U,ee,me){var Ne=U!==null?U.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ne!==null?null:P(X,U,""+ee,me);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case R:return ee.key===Ne?F(X,U,ee,me):null;case L:return ee.key===Ne?ne(X,U,ee,me):null;case ce:return Ne=ee._init,ue(X,U,Ne(ee._payload),me)}if(Ge(ee)||D(ee))return Ne!==null?null:he(X,U,ee,me,null);ls(X,ee)}return null}function ye(X,U,ee,me,Ne){if(typeof me=="string"&&me!==""||typeof me=="number")return X=X.get(ee)||null,P(U,X,""+me,Ne);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case R:return X=X.get(me.key===null?ee:me.key)||null,F(U,X,me,Ne);case L:return X=X.get(me.key===null?ee:me.key)||null,ne(U,X,me,Ne);case ce:var Me=me._init;return ye(X,U,ee,Me(me._payload),Ne)}if(Ge(me)||D(me))return X=X.get(ee)||null,he(U,X,me,Ne,null);ls(U,me)}return null}function Ce(X,U,ee,me){for(var Ne=null,Me=null,Re=U,$e=U=0,Lt=null;Re!==null&&$e<ee.length;$e++){Re.index>$e?(Lt=Re,Re=null):Lt=Re.sibling;var Ke=ue(X,Re,ee[$e],me);if(Ke===null){Re===null&&(Re=Lt);break}t&&Re&&Ke.alternate===null&&r(X,Re),U=h(Ke,U,$e),Me===null?Ne=Ke:Me.sibling=Ke,Me=Ke,Re=Lt}if($e===ee.length)return a(X,Re),st&&io(X,$e),Ne;if(Re===null){for(;$e<ee.length;$e++)Re=fe(X,ee[$e],me),Re!==null&&(U=h(Re,U,$e),Me===null?Ne=Re:Me.sibling=Re,Me=Re);return st&&io(X,$e),Ne}for(Re=c(X,Re);$e<ee.length;$e++)Lt=ye(Re,X,$e,ee[$e],me),Lt!==null&&(t&&Lt.alternate!==null&&Re.delete(Lt.key===null?$e:Lt.key),U=h(Lt,U,$e),Me===null?Ne=Lt:Me.sibling=Lt,Me=Lt);return t&&Re.forEach(function(Br){return r(X,Br)}),st&&io(X,$e),Ne}function je(X,U,ee,me){var Ne=D(ee);if(typeof Ne!="function")throw Error(i(150));if(ee=Ne.call(ee),ee==null)throw Error(i(151));for(var Me=Ne=null,Re=U,$e=U=0,Lt=null,Ke=ee.next();Re!==null&&!Ke.done;$e++,Ke=ee.next()){Re.index>$e?(Lt=Re,Re=null):Lt=Re.sibling;var Br=ue(X,Re,Ke.value,me);if(Br===null){Re===null&&(Re=Lt);break}t&&Re&&Br.alternate===null&&r(X,Re),U=h(Br,U,$e),Me===null?Ne=Br:Me.sibling=Br,Me=Br,Re=Lt}if(Ke.done)return a(X,Re),st&&io(X,$e),Ne;if(Re===null){for(;!Ke.done;$e++,Ke=ee.next())Ke=fe(X,Ke.value,me),Ke!==null&&(U=h(Ke,U,$e),Me===null?Ne=Ke:Me.sibling=Ke,Me=Ke);return st&&io(X,$e),Ne}for(Re=c(X,Re);!Ke.done;$e++,Ke=ee.next())Ke=ye(Re,X,$e,Ke.value,me),Ke!==null&&(t&&Ke.alternate!==null&&Re.delete(Ke.key===null?$e:Ke.key),U=h(Ke,U,$e),Me===null?Ne=Ke:Me.sibling=Ke,Me=Ke);return t&&Re.forEach(function(my){return r(X,my)}),st&&io(X,$e),Ne}function vt(X,U,ee,me){if(typeof ee=="object"&&ee!==null&&ee.type===T&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case R:e:{for(var Ne=ee.key,Me=U;Me!==null;){if(Me.key===Ne){if(Ne=ee.type,Ne===T){if(Me.tag===7){a(X,Me.sibling),U=u(Me,ee.props.children),U.return=X,X=U;break e}}else if(Me.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===ce&&Ah(Ne)===Me.type){a(X,Me.sibling),U=u(Me,ee.props),U.ref=Ha(X,Me,ee),U.return=X,X=U;break e}a(X,Me);break}else r(X,Me);Me=Me.sibling}ee.type===T?(U=mo(ee.props.children,X.mode,me,ee.key),U.return=X,X=U):(me=As(ee.type,ee.key,ee.props,null,X.mode,me),me.ref=Ha(X,U,ee),me.return=X,X=me)}return w(X);case L:e:{for(Me=ee.key;U!==null;){if(U.key===Me)if(U.tag===4&&U.stateNode.containerInfo===ee.containerInfo&&U.stateNode.implementation===ee.implementation){a(X,U.sibling),U=u(U,ee.children||[]),U.return=X,X=U;break e}else{a(X,U);break}else r(X,U);U=U.sibling}U=bd(ee,X.mode,me),U.return=X,X=U}return w(X);case ce:return Me=ee._init,vt(X,U,Me(ee._payload),me)}if(Ge(ee))return Ce(X,U,ee,me);if(D(ee))return je(X,U,ee,me);ls(X,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,U!==null&&U.tag===6?(a(X,U.sibling),U=u(U,ee),U.return=X,X=U):(a(X,U),U=wd(ee,X.mode,me),U.return=X,X=U),w(X)):a(X,U)}return vt}var Ho=Th(!0),Ih=Th(!1),cs=Lr(null),ds=null,Uo=null,Lc=null;function $c(){Lc=Uo=ds=null}function Ac(t){var r=cs.current;ot(cs),t._currentValue=r}function Tc(t,r,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),t===a)break;t=t.return}}function qo(t,r){ds=t,Lc=Uo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&r)!==0&&(Xt=!0),t.firstContext=null)}function Cn(t){var r=t._currentValue;if(Lc!==t)if(t={context:t,memoizedValue:r,next:null},Uo===null){if(ds===null)throw Error(i(308));Uo=t,ds.dependencies={lanes:0,firstContext:t}}else Uo=Uo.next=t;return r}var so=null;function Ic(t){so===null?so=[t]:so.push(t)}function Eh(t,r,a,c){var u=r.interleaved;return u===null?(a.next=a,Ic(r)):(a.next=u.next,u.next=a),r.interleaved=a,dr(t,c)}function dr(t,r){t.lanes|=r;var a=t.alternate;for(a!==null&&(a.lanes|=r),a=t,t=t.return;t!==null;)t.childLanes|=r,a=t.alternate,a!==null&&(a.childLanes|=r),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Tr=!1;function Ec(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ur(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function Ir(t,r,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Ye&2)!==0){var u=c.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),c.pending=r,dr(t,a)}return u=c.interleaved,u===null?(r.next=r,Ic(c)):(r.next=u.next,u.next=r),c.interleaved=r,dr(t,a)}function us(t,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,Kl(t,a)}}function zh(t,r){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?u=h=w:h=h.next=w,a=a.next}while(a!==null);h===null?u=h=r:h=h.next=r}else u=h=r;a={baseState:c.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=r:t.next=r,a.lastBaseUpdate=r}function ps(t,r,a,c){var u=t.updateQueue;Tr=!1;var h=u.firstBaseUpdate,w=u.lastBaseUpdate,P=u.shared.pending;if(P!==null){u.shared.pending=null;var F=P,ne=F.next;F.next=null,w===null?h=ne:w.next=ne,w=F;var he=t.alternate;he!==null&&(he=he.updateQueue,P=he.lastBaseUpdate,P!==w&&(P===null?he.firstBaseUpdate=ne:P.next=ne,he.lastBaseUpdate=F))}if(h!==null){var fe=u.baseState;w=0,he=ne=F=null,P=h;do{var ue=P.lane,ye=P.eventTime;if((c&ue)===ue){he!==null&&(he=he.next={eventTime:ye,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var Ce=t,je=P;switch(ue=r,ye=a,je.tag){case 1:if(Ce=je.payload,typeof Ce=="function"){fe=Ce.call(ye,fe,ue);break e}fe=Ce;break e;case 3:Ce.flags=Ce.flags&-65537|128;case 0:if(Ce=je.payload,ue=typeof Ce=="function"?Ce.call(ye,fe,ue):Ce,ue==null)break e;fe=H({},fe,ue);break e;case 2:Tr=!0}}P.callback!==null&&P.lane!==0&&(t.flags|=64,ue=u.effects,ue===null?u.effects=[P]:ue.push(P))}else ye={eventTime:ye,lane:ue,tag:P.tag,payload:P.payload,callback:P.callback,next:null},he===null?(ne=he=ye,F=fe):he=he.next=ye,w|=ue;if(P=P.next,P===null){if(P=u.shared.pending,P===null)break;ue=P,P=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);if(he===null&&(F=fe),u.baseState=F,u.firstBaseUpdate=ne,u.lastBaseUpdate=he,r=u.shared.interleaved,r!==null){u=r;do w|=u.lane,u=u.next;while(u!==r)}else h===null&&(u.shared.lanes=0);uo|=w,t.lanes=w,t.memoizedState=fe}}function Oh(t,r,a){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var c=t[r],u=c.callback;if(u!==null){if(c.callback=null,c=a,typeof u!="function")throw Error(i(191,u));u.call(c)}}}var Ua={},Qn=Lr(Ua),qa=Lr(Ua),Va=Lr(Ua);function lo(t){if(t===Ua)throw Error(i(174));return t}function Pc(t,r){switch(tt(Va,r),tt(qa,t),tt(Qn,Ua),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ct(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=ct(r,t)}ot(Qn),tt(Qn,r)}function Vo(){ot(Qn),ot(qa),ot(Va)}function Dh(t){lo(Va.current);var r=lo(Qn.current),a=ct(r,t.type);r!==a&&(tt(qa,t),tt(Qn,a))}function zc(t){qa.current===t&&(ot(Qn),ot(qa))}var ut=Lr(0);function hs(t){for(var r=t;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Oc=[];function Dc(){for(var t=0;t<Oc.length;t++)Oc[t]._workInProgressVersionPrimary=null;Oc.length=0}var fs=z.ReactCurrentDispatcher,Fc=z.ReactCurrentBatchConfig,co=0,pt=null,Ct=null,Mt=null,ms=!1,Ga=!1,Ya=0,zx=0;function Ft(){throw Error(i(321))}function Bc(t,r){if(r===null)return!1;for(var a=0;a<r.length&&a<t.length;a++)if(!En(t[a],r[a]))return!1;return!0}function Wc(t,r,a,c,u,h){if(co=h,pt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,fs.current=t===null||t.memoizedState===null?Bx:Wx,t=a(c,u),Ga){h=0;do{if(Ga=!1,Ya=0,25<=h)throw Error(i(301));h+=1,Mt=Ct=null,r.updateQueue=null,fs.current=Hx,t=a(c,u)}while(Ga)}if(fs.current=xs,r=Ct!==null&&Ct.next!==null,co=0,Mt=Ct=pt=null,ms=!1,r)throw Error(i(300));return t}function Hc(){var t=Ya!==0;return Ya=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mt===null?pt.memoizedState=Mt=t:Mt=Mt.next=t,Mt}function jn(){if(Ct===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var r=Mt===null?pt.memoizedState:Mt.next;if(r!==null)Mt=r,Ct=t;else{if(t===null)throw Error(i(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Mt===null?pt.memoizedState=Mt=t:Mt=Mt.next=t}return Mt}function Ka(t,r){return typeof r=="function"?r(t):r}function Uc(t){var r=jn(),a=r.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var c=Ct,u=c.baseQueue,h=a.pending;if(h!==null){if(u!==null){var w=u.next;u.next=h.next,h.next=w}c.baseQueue=u=h,a.pending=null}if(u!==null){h=u.next,c=c.baseState;var P=w=null,F=null,ne=h;do{var he=ne.lane;if((co&he)===he)F!==null&&(F=F.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),c=ne.hasEagerState?ne.eagerState:t(c,ne.action);else{var fe={lane:he,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};F===null?(P=F=fe,w=c):F=F.next=fe,pt.lanes|=he,uo|=he}ne=ne.next}while(ne!==null&&ne!==h);F===null?w=c:F.next=P,En(c,r.memoizedState)||(Xt=!0),r.memoizedState=c,r.baseState=w,r.baseQueue=F,a.lastRenderedState=c}if(t=a.interleaved,t!==null){u=t;do h=u.lane,pt.lanes|=h,uo|=h,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function qc(t){var r=jn(),a=r.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var c=a.dispatch,u=a.pending,h=r.memoizedState;if(u!==null){a.pending=null;var w=u=u.next;do h=t(h,w.action),w=w.next;while(w!==u);En(h,r.memoizedState)||(Xt=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),a.lastRenderedState=h}return[h,c]}function Fh(){}function Bh(t,r){var a=pt,c=jn(),u=r(),h=!En(c.memoizedState,u);if(h&&(c.memoizedState=u,Xt=!0),c=c.queue,Vc(Uh.bind(null,a,c,t),[t]),c.getSnapshot!==r||h||Mt!==null&&Mt.memoizedState.tag&1){if(a.flags|=2048,Qa(9,Hh.bind(null,a,c,u,r),void 0,null),Rt===null)throw Error(i(349));(co&30)!==0||Wh(a,r,u)}return u}function Wh(t,r,a){t.flags|=16384,t={getSnapshot:r,value:a},r=pt.updateQueue,r===null?(r={lastEffect:null,stores:null},pt.updateQueue=r,r.stores=[t]):(a=r.stores,a===null?r.stores=[t]:a.push(t))}function Hh(t,r,a,c){r.value=a,r.getSnapshot=c,qh(r)&&Vh(t)}function Uh(t,r,a){return a(function(){qh(r)&&Vh(t)})}function qh(t){var r=t.getSnapshot;t=t.value;try{var a=r();return!En(t,a)}catch{return!0}}function Vh(t){var r=dr(t,1);r!==null&&Fn(r,t,1,-1)}function Gh(t){var r=Zn();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:t},r.queue=t,t=t.dispatch=Fx.bind(null,pt,t),[r.memoizedState,t]}function Qa(t,r,a,c){return t={tag:t,create:r,destroy:a,deps:c,next:null},r=pt.updateQueue,r===null?(r={lastEffect:null,stores:null},pt.updateQueue=r,r.lastEffect=t.next=t):(a=r.lastEffect,a===null?r.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,r.lastEffect=t)),t}function Yh(){return jn().memoizedState}function gs(t,r,a,c){var u=Zn();pt.flags|=t,u.memoizedState=Qa(1|r,a,void 0,c===void 0?null:c)}function vs(t,r,a,c){var u=jn();c=c===void 0?null:c;var h=void 0;if(Ct!==null){var w=Ct.memoizedState;if(h=w.destroy,c!==null&&Bc(c,w.deps)){u.memoizedState=Qa(r,a,h,c);return}}pt.flags|=t,u.memoizedState=Qa(1|r,a,h,c)}function Kh(t,r){return gs(8390656,8,t,r)}function Vc(t,r){return vs(2048,8,t,r)}function Qh(t,r){return vs(4,2,t,r)}function Zh(t,r){return vs(4,4,t,r)}function Xh(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Jh(t,r,a){return a=a!=null?a.concat([t]):null,vs(4,4,Xh.bind(null,r,t),a)}function Gc(){}function e1(t,r){var a=jn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Bc(r,c[1])?c[0]:(a.memoizedState=[t,r],t)}function t1(t,r){var a=jn();r=r===void 0?null:r;var c=a.memoizedState;return c!==null&&r!==null&&Bc(r,c[1])?c[0]:(t=t(),a.memoizedState=[t,r],t)}function n1(t,r,a){return(co&21)===0?(t.baseState&&(t.baseState=!1,Xt=!0),t.memoizedState=a):(En(a,r)||(a=Ap(),pt.lanes|=a,uo|=a,t.baseState=!0),r)}function Ox(t,r){var a=Xe;Xe=a!==0&&4>a?a:4,t(!0);var c=Fc.transition;Fc.transition={};try{t(!1),r()}finally{Xe=a,Fc.transition=c}}function r1(){return jn().memoizedState}function Dx(t,r,a){var c=Or(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},o1(t))a1(r,a);else if(a=Eh(t,r,a,c),a!==null){var u=Gt();Fn(a,t,c,u),i1(a,r,c)}}function Fx(t,r,a){var c=Or(t),u={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(o1(t))a1(r,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var w=r.lastRenderedState,P=h(w,a);if(u.hasEagerState=!0,u.eagerState=P,En(P,w)){var F=r.interleaved;F===null?(u.next=u,Ic(r)):(u.next=F.next,F.next=u),r.interleaved=u;return}}catch{}finally{}a=Eh(t,r,u,c),a!==null&&(u=Gt(),Fn(a,t,c,u),i1(a,r,c))}}function o1(t){var r=t.alternate;return t===pt||r!==null&&r===pt}function a1(t,r){Ga=ms=!0;var a=t.pending;a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r}function i1(t,r,a){if((a&4194240)!==0){var c=r.lanes;c&=t.pendingLanes,a|=c,r.lanes=a,Kl(t,a)}}var xs={readContext:Cn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},Bx={readContext:Cn,useCallback:function(t,r){return Zn().memoizedState=[t,r===void 0?null:r],t},useContext:Cn,useEffect:Kh,useImperativeHandle:function(t,r,a){return a=a!=null?a.concat([t]):null,gs(4194308,4,Xh.bind(null,r,t),a)},useLayoutEffect:function(t,r){return gs(4194308,4,t,r)},useInsertionEffect:function(t,r){return gs(4,2,t,r)},useMemo:function(t,r){var a=Zn();return r=r===void 0?null:r,t=t(),a.memoizedState=[t,r],t},useReducer:function(t,r,a){var c=Zn();return r=a!==void 0?a(r):r,c.memoizedState=c.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},c.queue=t,t=t.dispatch=Dx.bind(null,pt,t),[c.memoizedState,t]},useRef:function(t){var r=Zn();return t={current:t},r.memoizedState=t},useState:Gh,useDebugValue:Gc,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=Gh(!1),r=t[0];return t=Ox.bind(null,t[1]),Zn().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,a){var c=pt,u=Zn();if(st){if(a===void 0)throw Error(i(407));a=a()}else{if(a=r(),Rt===null)throw Error(i(349));(co&30)!==0||Wh(c,r,a)}u.memoizedState=a;var h={value:a,getSnapshot:r};return u.queue=h,Kh(Uh.bind(null,c,h,t),[t]),c.flags|=2048,Qa(9,Hh.bind(null,c,h,a,r),void 0,null),a},useId:function(){var t=Zn(),r=Rt.identifierPrefix;if(st){var a=cr,c=lr;a=(c&~(1<<32-In(c)-1)).toString(32)+a,r=":"+r+"R"+a,a=Ya++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=zx++,r=":"+r+"r"+a.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Wx={readContext:Cn,useCallback:e1,useContext:Cn,useEffect:Vc,useImperativeHandle:Jh,useInsertionEffect:Qh,useLayoutEffect:Zh,useMemo:t1,useReducer:Uc,useRef:Yh,useState:function(){return Uc(Ka)},useDebugValue:Gc,useDeferredValue:function(t){var r=jn();return n1(r,Ct.memoizedState,t)},useTransition:function(){var t=Uc(Ka)[0],r=jn().memoizedState;return[t,r]},useMutableSource:Fh,useSyncExternalStore:Bh,useId:r1,unstable_isNewReconciler:!1},Hx={readContext:Cn,useCallback:e1,useContext:Cn,useEffect:Vc,useImperativeHandle:Jh,useInsertionEffect:Qh,useLayoutEffect:Zh,useMemo:t1,useReducer:qc,useRef:Yh,useState:function(){return qc(Ka)},useDebugValue:Gc,useDeferredValue:function(t){var r=jn();return Ct===null?r.memoizedState=t:n1(r,Ct.memoizedState,t)},useTransition:function(){var t=qc(Ka)[0],r=jn().memoizedState;return[t,r]},useMutableSource:Fh,useSyncExternalStore:Bh,useId:r1,unstable_isNewReconciler:!1};function zn(t,r){if(t&&t.defaultProps){r=H({},r),t=t.defaultProps;for(var a in t)r[a]===void 0&&(r[a]=t[a]);return r}return r}function Yc(t,r,a,c){r=t.memoizedState,a=a(c,r),a=a==null?r:H({},r,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ys={isMounted:function(t){return(t=t._reactInternals)?no(t)===t:!1},enqueueSetState:function(t,r,a){t=t._reactInternals;var c=Gt(),u=Or(t),h=ur(c,u);h.payload=r,a!=null&&(h.callback=a),r=Ir(t,h,u),r!==null&&(Fn(r,t,u,c),us(r,t,u))},enqueueReplaceState:function(t,r,a){t=t._reactInternals;var c=Gt(),u=Or(t),h=ur(c,u);h.tag=1,h.payload=r,a!=null&&(h.callback=a),r=Ir(t,h,u),r!==null&&(Fn(r,t,u,c),us(r,t,u))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var a=Gt(),c=Or(t),u=ur(a,c);u.tag=2,r!=null&&(u.callback=r),r=Ir(t,u,c),r!==null&&(Fn(r,t,c,a),us(r,t,c))}};function s1(t,r,a,c,u,h,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,h,w):r.prototype&&r.prototype.isPureReactComponent?!Pa(a,c)||!Pa(u,h):!0}function l1(t,r,a){var c=!1,u=$r,h=r.contextType;return typeof h=="object"&&h!==null?h=Cn(h):(u=Zt(r)?oo:Dt.current,c=r.contextTypes,h=(c=c!=null)?Do(t,u):$r),r=new r(a,h),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ys,t.stateNode=r,r._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),r}function c1(t,r,a,c){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,c),r.state!==t&&ys.enqueueReplaceState(r,r.state,null)}function Kc(t,r,a,c){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs={},Ec(t);var h=r.contextType;typeof h=="object"&&h!==null?u.context=Cn(h):(h=Zt(r)?oo:Dt.current,u.context=Do(t,h)),u.state=t.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(Yc(t,r,h,a),u.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(r=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),r!==u.state&&ys.enqueueReplaceState(u,u.state,null),ps(t,a,u,c),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function Go(t,r){try{var a="",c=r;do a+=oe(c),c=c.return;while(c);var u=a}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:r,stack:u,digest:null}}function Qc(t,r,a){return{value:t,source:null,stack:a??null,digest:r??null}}function Zc(t,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var Ux=typeof WeakMap=="function"?WeakMap:Map;function d1(t,r,a){a=ur(-1,a),a.tag=3,a.payload={element:null};var c=r.value;return a.callback=function(){Ss||(Ss=!0,pd=c),Zc(t,r)},a}function u1(t,r,a){a=ur(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var u=r.value;a.payload=function(){return c(u)},a.callback=function(){Zc(t,r)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){Zc(t,r),typeof c!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})}),a}function p1(t,r,a){var c=t.pingCache;if(c===null){c=t.pingCache=new Ux;var u=new Set;c.set(r,u)}else u=c.get(r),u===void 0&&(u=new Set,c.set(r,u));u.has(a)||(u.add(a),t=oy.bind(null,t,r,a),r.then(t,t))}function h1(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function f1(t,r,a,c,u){return(t.mode&1)===0?(t===r?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=ur(-1,1),r.tag=2,Ir(a,r,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var qx=z.ReactCurrentOwner,Xt=!1;function Vt(t,r,a,c){r.child=t===null?Ih(r,null,a,c):Ho(r,t.child,a,c)}function m1(t,r,a,c,u){a=a.render;var h=r.ref;return qo(r,u),c=Wc(t,r,a,c,h,u),a=Hc(),t!==null&&!Xt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,pr(t,r,u)):(st&&a&&jc(r),r.flags|=1,Vt(t,r,c,u),r.child)}function g1(t,r,a,c,u){if(t===null){var h=a.type;return typeof h=="function"&&!yd(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=h,v1(t,r,h,c,u)):(t=As(a.type,null,c,r,r.mode,u),t.ref=r.ref,t.return=r,r.child=t)}if(h=t.child,(t.lanes&u)===0){var w=h.memoizedProps;if(a=a.compare,a=a!==null?a:Pa,a(w,c)&&t.ref===r.ref)return pr(t,r,u)}return r.flags|=1,t=Fr(h,c),t.ref=r.ref,t.return=r,r.child=t}function v1(t,r,a,c,u){if(t!==null){var h=t.memoizedProps;if(Pa(h,c)&&t.ref===r.ref)if(Xt=!1,r.pendingProps=c=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(Xt=!0);else return r.lanes=t.lanes,pr(t,r,u)}return Xc(t,r,a,c,u)}function x1(t,r,a){var c=r.pendingProps,u=c.children,h=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(Ko,pn),pn|=a;else{if((a&1073741824)===0)return t=h!==null?h.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,tt(Ko,pn),pn|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=h!==null?h.baseLanes:a,tt(Ko,pn),pn|=c}else h!==null?(c=h.baseLanes|a,r.memoizedState=null):c=a,tt(Ko,pn),pn|=c;return Vt(t,r,u,a),r.child}function y1(t,r){var a=r.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Xc(t,r,a,c,u){var h=Zt(a)?oo:Dt.current;return h=Do(r,h),qo(r,u),a=Wc(t,r,a,c,h,u),c=Hc(),t!==null&&!Xt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~u,pr(t,r,u)):(st&&c&&jc(r),r.flags|=1,Vt(t,r,a,u),r.child)}function w1(t,r,a,c,u){if(Zt(a)){var h=!0;rs(r)}else h=!1;if(qo(r,u),r.stateNode===null)bs(t,r),l1(r,a,c),Kc(r,a,c,u),c=!0;else if(t===null){var w=r.stateNode,P=r.memoizedProps;w.props=P;var F=w.context,ne=a.contextType;typeof ne=="object"&&ne!==null?ne=Cn(ne):(ne=Zt(a)?oo:Dt.current,ne=Do(r,ne));var he=a.getDerivedStateFromProps,fe=typeof he=="function"||typeof w.getSnapshotBeforeUpdate=="function";fe||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(P!==c||F!==ne)&&c1(r,w,c,ne),Tr=!1;var ue=r.memoizedState;w.state=ue,ps(r,c,w,u),F=r.memoizedState,P!==c||ue!==F||Qt.current||Tr?(typeof he=="function"&&(Yc(r,a,he,c),F=r.memoizedState),(P=Tr||s1(r,a,P,c,ue,F,ne))?(fe||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(r.flags|=4194308)):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=F),w.props=c,w.state=F,w.context=ne,c=P):(typeof w.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{w=r.stateNode,Ph(t,r),P=r.memoizedProps,ne=r.type===r.elementType?P:zn(r.type,P),w.props=ne,fe=r.pendingProps,ue=w.context,F=a.contextType,typeof F=="object"&&F!==null?F=Cn(F):(F=Zt(a)?oo:Dt.current,F=Do(r,F));var ye=a.getDerivedStateFromProps;(he=typeof ye=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(P!==fe||ue!==F)&&c1(r,w,c,F),Tr=!1,ue=r.memoizedState,w.state=ue,ps(r,c,w,u);var Ce=r.memoizedState;P!==fe||ue!==Ce||Qt.current||Tr?(typeof ye=="function"&&(Yc(r,a,ye,c),Ce=r.memoizedState),(ne=Tr||s1(r,a,ne,c,ue,Ce,F)||!1)?(he||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Ce,F),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Ce,F)),typeof w.componentDidUpdate=="function"&&(r.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof w.componentDidUpdate!="function"||P===t.memoizedProps&&ue===t.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&ue===t.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=Ce),w.props=c,w.state=Ce,w.context=F,c=ne):(typeof w.componentDidUpdate!="function"||P===t.memoizedProps&&ue===t.memoizedState||(r.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&ue===t.memoizedState||(r.flags|=1024),c=!1)}return Jc(t,r,a,c,h,u)}function Jc(t,r,a,c,u,h){y1(t,r);var w=(r.flags&128)!==0;if(!c&&!w)return u&&jh(r,a,!1),pr(t,r,h);c=r.stateNode,qx.current=r;var P=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,t!==null&&w?(r.child=Ho(r,t.child,null,h),r.child=Ho(r,null,P,h)):Vt(t,r,P,h),r.memoizedState=c.state,u&&jh(r,a,!0),r.child}function b1(t){var r=t.stateNode;r.pendingContext?_h(t,r.pendingContext,r.pendingContext!==r.context):r.context&&_h(t,r.context,!1),Pc(t,r.containerInfo)}function k1(t,r,a,c,u){return Wo(),Rc(u),r.flags|=256,Vt(t,r,a,c),r.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(t){return{baseLanes:t,cachePool:null,transitions:null}}function _1(t,r,a){var c=r.pendingProps,u=ut.current,h=!1,w=(r.flags&128)!==0,P;if((P=w)||(P=t!==null&&t.memoizedState===null?!1:(u&2)!==0),P?(h=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),tt(ut,u&1),t===null)return Mc(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((r.mode&1)===0?r.lanes=1:t.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(w=c.children,t=c.fallback,h?(c=r.mode,h=r.child,w={mode:"hidden",children:w},(c&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=w):h=Ts(w,c,0,null),t=mo(t,c,a,null),h.return=r,t.return=r,h.sibling=t,r.child=h,r.child.memoizedState=td(a),r.memoizedState=ed,t):nd(r,w));if(u=t.memoizedState,u!==null&&(P=u.dehydrated,P!==null))return Vx(t,r,w,c,P,u,a);if(h){h=c.fallback,w=r.mode,u=t.child,P=u.sibling;var F={mode:"hidden",children:c.children};return(w&1)===0&&r.child!==u?(c=r.child,c.childLanes=0,c.pendingProps=F,r.deletions=null):(c=Fr(u,F),c.subtreeFlags=u.subtreeFlags&14680064),P!==null?h=Fr(P,h):(h=mo(h,w,a,null),h.flags|=2),h.return=r,c.return=r,c.sibling=h,r.child=c,c=h,h=r.child,w=t.child.memoizedState,w=w===null?td(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},h.memoizedState=w,h.childLanes=t.childLanes&~a,r.memoizedState=ed,c}return h=t.child,t=h.sibling,c=Fr(h,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=a),c.return=r,c.sibling=null,t!==null&&(a=r.deletions,a===null?(r.deletions=[t],r.flags|=16):a.push(t)),r.child=c,r.memoizedState=null,c}function nd(t,r){return r=Ts({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function ws(t,r,a,c){return c!==null&&Rc(c),Ho(r,t.child,null,a),t=nd(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Vx(t,r,a,c,u,h,w){if(a)return r.flags&256?(r.flags&=-257,c=Qc(Error(i(422))),ws(t,r,w,c)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(h=c.fallback,u=r.mode,c=Ts({mode:"visible",children:c.children},u,0,null),h=mo(h,u,w,null),h.flags|=2,c.return=r,h.return=r,c.sibling=h,r.child=c,(r.mode&1)!==0&&Ho(r,t.child,null,w),r.child.memoizedState=td(w),r.memoizedState=ed,h);if((r.mode&1)===0)return ws(t,r,w,null);if(u.data==="$!"){if(c=u.nextSibling&&u.nextSibling.dataset,c)var P=c.dgst;return c=P,h=Error(i(419)),c=Qc(h,c,void 0),ws(t,r,w,c)}if(P=(w&t.childLanes)!==0,Xt||P){if(c=Rt,c!==null){switch(w&-w){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(c.suspendedLanes|w))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,dr(t,u),Fn(c,t,u,-1))}return xd(),c=Qc(Error(i(421))),ws(t,r,w,c)}return u.data==="$?"?(r.flags|=128,r.child=t.child,r=ay.bind(null,t),u._reactRetry=r,null):(t=h.treeContext,un=Rr(u.nextSibling),dn=r,st=!0,Pn=null,t!==null&&(kn[_n++]=lr,kn[_n++]=cr,kn[_n++]=ao,lr=t.id,cr=t.overflow,ao=r),r=nd(r,c.children),r.flags|=4096,r)}function C1(t,r,a){t.lanes|=r;var c=t.alternate;c!==null&&(c.lanes|=r),Tc(t.return,r,a)}function rd(t,r,a,c,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:u}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=c,h.tail=a,h.tailMode=u)}function j1(t,r,a){var c=r.pendingProps,u=c.revealOrder,h=c.tail;if(Vt(t,r,c.children,a),c=ut.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&C1(t,a,r);else if(t.tag===19)C1(t,a,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(tt(ut,c),(r.mode&1)===0)r.memoizedState=null;else switch(u){case"forwards":for(a=r.child,u=null;a!==null;)t=a.alternate,t!==null&&hs(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=r.child,r.child=null):(u=a.sibling,a.sibling=null),rd(r,!1,u,a,h);break;case"backwards":for(a=null,u=r.child,r.child=null;u!==null;){if(t=u.alternate,t!==null&&hs(t)===null){r.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}rd(r,!0,a,null,h);break;case"together":rd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function bs(t,r){(r.mode&1)===0&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function pr(t,r,a){if(t!==null&&(r.dependencies=t.dependencies),uo|=r.lanes,(a&r.childLanes)===0)return null;if(t!==null&&r.child!==t.child)throw Error(i(153));if(r.child!==null){for(t=r.child,a=Fr(t,t.pendingProps),r.child=a,a.return=r;t.sibling!==null;)t=t.sibling,a=a.sibling=Fr(t,t.pendingProps),a.return=r;a.sibling=null}return r.child}function Gx(t,r,a){switch(r.tag){case 3:b1(r),Wo();break;case 5:Dh(r);break;case 1:Zt(r.type)&&rs(r);break;case 4:Pc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,u=r.memoizedProps.value;tt(cs,c._currentValue),c._currentValue=u;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(tt(ut,ut.current&1),r.flags|=128,null):(a&r.child.childLanes)!==0?_1(t,r,a):(tt(ut,ut.current&1),t=pr(t,r,a),t!==null?t.sibling:null);tt(ut,ut.current&1);break;case 19:if(c=(a&r.childLanes)!==0,(t.flags&128)!==0){if(c)return j1(t,r,a);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),tt(ut,ut.current),c)break;return null;case 22:case 23:return r.lanes=0,x1(t,r,a)}return pr(t,r,a)}var S1,od,N1,M1;S1=function(t,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},od=function(){},N1=function(t,r,a,c){var u=t.memoizedProps;if(u!==c){t=r.stateNode,lo(Qn.current);var h=null;switch(a){case"input":u=we(t,u),c=we(t,c),h=[];break;case"select":u=H({},u,{value:void 0}),c=H({},c,{value:void 0}),h=[];break;case"textarea":u=it(t,u),c=it(t,c),h=[];break;default:typeof u.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=es)}dt(a,c);var w;a=null;for(ne in u)if(!c.hasOwnProperty(ne)&&u.hasOwnProperty(ne)&&u[ne]!=null)if(ne==="style"){var P=u[ne];for(w in P)P.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(l.hasOwnProperty(ne)?h||(h=[]):(h=h||[]).push(ne,null));for(ne in c){var F=c[ne];if(P=u!=null?u[ne]:void 0,c.hasOwnProperty(ne)&&F!==P&&(F!=null||P!=null))if(ne==="style")if(P){for(w in P)!P.hasOwnProperty(w)||F&&F.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in F)F.hasOwnProperty(w)&&P[w]!==F[w]&&(a||(a={}),a[w]=F[w])}else a||(h||(h=[]),h.push(ne,a)),a=F;else ne==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,P=P?P.__html:void 0,F!=null&&P!==F&&(h=h||[]).push(ne,F)):ne==="children"?typeof F!="string"&&typeof F!="number"||(h=h||[]).push(ne,""+F):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(l.hasOwnProperty(ne)?(F!=null&&ne==="onScroll"&&rt("scroll",t),h||P===F||(h=[])):(h=h||[]).push(ne,F))}a&&(h=h||[]).push("style",a);var ne=h;(r.updateQueue=ne)&&(r.flags|=4)}},M1=function(t,r,a,c){a!==c&&(r.flags|=4)};function Za(t,r){if(!st)switch(t.tailMode){case"hidden":r=t.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Bt(t){var r=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(r)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags&14680064,c|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,c|=u.subtreeFlags,c|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=c,t.childLanes=a,r}function Yx(t,r,a){var c=r.pendingProps;switch(Sc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(r),null;case 1:return Zt(r.type)&&ns(),Bt(r),null;case 3:return c=r.stateNode,Vo(),ot(Qt),ot(Dt),Dc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(ss(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Pn!==null&&(md(Pn),Pn=null))),od(t,r),Bt(r),null;case 5:zc(r);var u=lo(Va.current);if(a=r.type,t!==null&&r.stateNode!=null)N1(t,r,a,c,u),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(i(166));return Bt(r),null}if(t=lo(Qn.current),ss(r)){c=r.stateNode,a=r.type;var h=r.memoizedProps;switch(c[Kn]=r,c[Ba]=h,t=(r.mode&1)!==0,a){case"dialog":rt("cancel",c),rt("close",c);break;case"iframe":case"object":case"embed":rt("load",c);break;case"video":case"audio":for(u=0;u<Oa.length;u++)rt(Oa[u],c);break;case"source":rt("error",c);break;case"img":case"image":case"link":rt("error",c),rt("load",c);break;case"details":rt("toggle",c);break;case"input":be(c,h),rt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!h.multiple},rt("invalid",c);break;case"textarea":We(c,h),rt("invalid",c)}dt(a,h),u=null;for(var w in h)if(h.hasOwnProperty(w)){var P=h[w];w==="children"?typeof P=="string"?c.textContent!==P&&(h.suppressHydrationWarning!==!0&&Ji(c.textContent,P,t),u=["children",P]):typeof P=="number"&&c.textContent!==""+P&&(h.suppressHydrationWarning!==!0&&Ji(c.textContent,P,t),u=["children",""+P]):l.hasOwnProperty(w)&&P!=null&&w==="onScroll"&&rt("scroll",c)}switch(a){case"input":le(c),ze(c,h,!0);break;case"textarea":le(c),ht(c);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(c.onclick=es)}c=u,r.updateQueue=c,c!==null&&(r.flags|=4)}else{w=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ut(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=w.createElement(a,{is:c.is}):(t=w.createElement(a),a==="select"&&(w=t,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):t=w.createElementNS(t,a),t[Kn]=r,t[Ba]=c,S1(t,r,!1,!1),r.stateNode=t;e:{switch(w=_t(a,c),a){case"dialog":rt("cancel",t),rt("close",t),u=c;break;case"iframe":case"object":case"embed":rt("load",t),u=c;break;case"video":case"audio":for(u=0;u<Oa.length;u++)rt(Oa[u],t);u=c;break;case"source":rt("error",t),u=c;break;case"img":case"image":case"link":rt("error",t),rt("load",t),u=c;break;case"details":rt("toggle",t),u=c;break;case"input":be(t,c),u=we(t,c),rt("invalid",t);break;case"option":u=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},u=H({},c,{value:void 0}),rt("invalid",t);break;case"textarea":We(t,c),u=it(t,c),rt("invalid",t);break;default:u=c}dt(a,u),P=u;for(h in P)if(P.hasOwnProperty(h)){var F=P[h];h==="style"?Ie(t,F):h==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Vn(t,F)):h==="children"?typeof F=="string"?(a!=="textarea"||F!=="")&&qt(t,F):typeof F=="number"&&qt(t,""+F):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(l.hasOwnProperty(h)?F!=null&&h==="onScroll"&&rt("scroll",t):F!=null&&C(t,h,F,w))}switch(a){case"input":le(t),ze(t,c,!1);break;case"textarea":le(t),ht(t);break;case"option":c.value!=null&&t.setAttribute("value",""+O(c.value));break;case"select":t.multiple=!!c.multiple,h=c.value,h!=null?Ve(t,!!c.multiple,h,!1):c.defaultValue!=null&&Ve(t,!!c.multiple,c.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=es)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Bt(r),null;case 6:if(t&&r.stateNode!=null)M1(t,r,t.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(i(166));if(a=lo(Va.current),lo(Qn.current),ss(r)){if(c=r.stateNode,a=r.memoizedProps,c[Kn]=r,(h=c.nodeValue!==a)&&(t=dn,t!==null))switch(t.tag){case 3:Ji(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ji(c.nodeValue,a,(t.mode&1)!==0)}h&&(r.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Kn]=r,r.stateNode=c}return Bt(r),null;case 13:if(ot(ut),c=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&un!==null&&(r.mode&1)!==0&&(r.flags&128)===0)$h(),Wo(),r.flags|=98560,h=!1;else if(h=ss(r),c!==null&&c.dehydrated!==null){if(t===null){if(!h)throw Error(i(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[Kn]=r}else Wo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Bt(r),h=!1}else Pn!==null&&(md(Pn),Pn=null),h=!0;if(!h)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=a,r):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(t===null||(ut.current&1)!==0?jt===0&&(jt=3):xd())),r.updateQueue!==null&&(r.flags|=4),Bt(r),null);case 4:return Vo(),od(t,r),t===null&&Da(r.stateNode.containerInfo),Bt(r),null;case 10:return Ac(r.type._context),Bt(r),null;case 17:return Zt(r.type)&&ns(),Bt(r),null;case 19:if(ot(ut),h=r.memoizedState,h===null)return Bt(r),null;if(c=(r.flags&128)!==0,w=h.rendering,w===null)if(c)Za(h,!1);else{if(jt!==0||t!==null&&(t.flags&128)!==0)for(t=r.child;t!==null;){if(w=hs(t),w!==null){for(r.flags|=128,Za(h,!1),c=w.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=a,a=r.child;a!==null;)h=a,t=c,h.flags&=14680066,w=h.alternate,w===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=w.childLanes,h.lanes=w.lanes,h.child=w.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=w.memoizedProps,h.memoizedState=w.memoizedState,h.updateQueue=w.updateQueue,h.type=w.type,t=w.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return tt(ut,ut.current&1|2),r.child}t=t.sibling}h.tail!==null&&gt()>Qo&&(r.flags|=128,c=!0,Za(h,!1),r.lanes=4194304)}else{if(!c)if(t=hs(w),t!==null){if(r.flags|=128,c=!0,a=t.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Za(h,!0),h.tail===null&&h.tailMode==="hidden"&&!w.alternate&&!st)return Bt(r),null}else 2*gt()-h.renderingStartTime>Qo&&a!==1073741824&&(r.flags|=128,c=!0,Za(h,!1),r.lanes=4194304);h.isBackwards?(w.sibling=r.child,r.child=w):(a=h.last,a!==null?a.sibling=w:r.child=w,h.last=w)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=gt(),r.sibling=null,a=ut.current,tt(ut,c?a&1|2:a&1),r):(Bt(r),null);case 22:case 23:return vd(),c=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(pn&1073741824)!==0&&(Bt(r),r.subtreeFlags&6&&(r.flags|=8192)):Bt(r),null;case 24:return null;case 25:return null}throw Error(i(156,r.tag))}function Kx(t,r){switch(Sc(r),r.tag){case 1:return Zt(r.type)&&ns(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Vo(),ot(Qt),ot(Dt),Dc(),t=r.flags,(t&65536)!==0&&(t&128)===0?(r.flags=t&-65537|128,r):null;case 5:return zc(r),null;case 13:if(ot(ut),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(i(340));Wo()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return ot(ut),null;case 4:return Vo(),null;case 10:return Ac(r.type._context),null;case 22:case 23:return vd(),null;case 24:return null;default:return null}}var ks=!1,Wt=!1,Qx=typeof WeakSet=="function"?WeakSet:Set,_e=null;function Yo(t,r){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ft(t,r,c)}else a.current=null}function ad(t,r,a){try{a()}catch(c){ft(t,r,c)}}var R1=!1;function Zx(t,r){if(vc=Wi,t=sh(),cc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var u=c.anchorOffset,h=c.focusNode;c=c.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var w=0,P=-1,F=-1,ne=0,he=0,fe=t,ue=null;t:for(;;){for(var ye;fe!==a||u!==0&&fe.nodeType!==3||(P=w+u),fe!==h||c!==0&&fe.nodeType!==3||(F=w+c),fe.nodeType===3&&(w+=fe.nodeValue.length),(ye=fe.firstChild)!==null;)ue=fe,fe=ye;for(;;){if(fe===t)break t;if(ue===a&&++ne===u&&(P=w),ue===h&&++he===c&&(F=w),(ye=fe.nextSibling)!==null)break;fe=ue,ue=fe.parentNode}fe=ye}a=P===-1||F===-1?null:{start:P,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(xc={focusedElem:t,selectionRange:a},Wi=!1,_e=r;_e!==null;)if(r=_e,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,_e=t;else for(;_e!==null;){r=_e;try{var Ce=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ce!==null){var je=Ce.memoizedProps,vt=Ce.memoizedState,X=r.stateNode,U=X.getSnapshotBeforeUpdate(r.elementType===r.type?je:zn(r.type,je),vt);X.__reactInternalSnapshotBeforeUpdate=U}break;case 3:var ee=r.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(me){ft(r,r.return,me)}if(t=r.sibling,t!==null){t.return=r.return,_e=t;break}_e=r.return}return Ce=R1,R1=!1,Ce}function Xa(t,r,a){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var u=c=c.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&ad(r,a,h)}u=u.next}while(u!==c)}}function _s(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==r)}}function id(t){var r=t.ref;if(r!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof r=="function"?r(t):r.current=t}}function L1(t){var r=t.alternate;r!==null&&(t.alternate=null,L1(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Kn],delete r[Ba],delete r[kc],delete r[Tx],delete r[Ix])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $1(t){return t.tag===5||t.tag===3||t.tag===4}function A1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sd(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(t,r):a.insertBefore(t,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(t,a)):(r=a,r.appendChild(t)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=es));else if(c!==4&&(t=t.child,t!==null))for(sd(t,r,a),t=t.sibling;t!==null;)sd(t,r,a),t=t.sibling}function ld(t,r,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?a.insertBefore(t,r):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(ld(t,r,a),t=t.sibling;t!==null;)ld(t,r,a),t=t.sibling}var Pt=null,On=!1;function Er(t,r,a){for(a=a.child;a!==null;)T1(t,r,a),a=a.sibling}function T1(t,r,a){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(Pi,a)}catch{}switch(a.tag){case 5:Wt||Yo(a,r);case 6:var c=Pt,u=On;Pt=null,Er(t,r,a),Pt=c,On=u,Pt!==null&&(On?(t=Pt,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(On?(t=Pt,a=a.stateNode,t.nodeType===8?bc(t.parentNode,a):t.nodeType===1&&bc(t,a),La(t)):bc(Pt,a.stateNode));break;case 4:c=Pt,u=On,Pt=a.stateNode.containerInfo,On=!0,Er(t,r,a),Pt=c,On=u;break;case 0:case 11:case 14:case 15:if(!Wt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){u=c=c.next;do{var h=u,w=h.destroy;h=h.tag,w!==void 0&&((h&2)!==0||(h&4)!==0)&&ad(a,r,w),u=u.next}while(u!==c)}Er(t,r,a);break;case 1:if(!Wt&&(Yo(a,r),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(P){ft(a,r,P)}Er(t,r,a);break;case 21:Er(t,r,a);break;case 22:a.mode&1?(Wt=(c=Wt)||a.memoizedState!==null,Er(t,r,a),Wt=c):Er(t,r,a);break;default:Er(t,r,a)}}function I1(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new Qx),r.forEach(function(c){var u=iy.bind(null,t,c);a.has(c)||(a.add(c),c.then(u,u))})}}function Dn(t,r){var a=r.deletions;if(a!==null)for(var c=0;c<a.length;c++){var u=a[c];try{var h=t,w=r,P=w;e:for(;P!==null;){switch(P.tag){case 5:Pt=P.stateNode,On=!1;break e;case 3:Pt=P.stateNode.containerInfo,On=!0;break e;case 4:Pt=P.stateNode.containerInfo,On=!0;break e}P=P.return}if(Pt===null)throw Error(i(160));T1(h,w,u),Pt=null,On=!1;var F=u.alternate;F!==null&&(F.return=null),u.return=null}catch(ne){ft(u,r,ne)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)E1(r,t),r=r.sibling}function E1(t,r){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(r,t),Xn(t),c&4){try{Xa(3,t,t.return),_s(3,t)}catch(je){ft(t,t.return,je)}try{Xa(5,t,t.return)}catch(je){ft(t,t.return,je)}}break;case 1:Dn(r,t),Xn(t),c&512&&a!==null&&Yo(a,a.return);break;case 5:if(Dn(r,t),Xn(t),c&512&&a!==null&&Yo(a,a.return),t.flags&32){var u=t.stateNode;try{qt(u,"")}catch(je){ft(t,t.return,je)}}if(c&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,w=a!==null?a.memoizedProps:h,P=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{P==="input"&&h.type==="radio"&&h.name!=null&&Le(u,h),_t(P,w);var ne=_t(P,h);for(w=0;w<F.length;w+=2){var he=F[w],fe=F[w+1];he==="style"?Ie(u,fe):he==="dangerouslySetInnerHTML"?Vn(u,fe):he==="children"?qt(u,fe):C(u,he,fe,ne)}switch(P){case"input":Be(u,h);break;case"textarea":yt(u,h);break;case"select":var ue=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var ye=h.value;ye!=null?Ve(u,!!h.multiple,ye,!1):ue!==!!h.multiple&&(h.defaultValue!=null?Ve(u,!!h.multiple,h.defaultValue,!0):Ve(u,!!h.multiple,h.multiple?[]:"",!1))}u[Ba]=h}catch(je){ft(t,t.return,je)}}break;case 6:if(Dn(r,t),Xn(t),c&4){if(t.stateNode===null)throw Error(i(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch(je){ft(t,t.return,je)}}break;case 3:if(Dn(r,t),Xn(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{La(r.containerInfo)}catch(je){ft(t,t.return,je)}break;case 4:Dn(r,t),Xn(t);break;case 13:Dn(r,t),Xn(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(ud=gt())),c&4&&I1(t);break;case 22:if(he=a!==null&&a.memoizedState!==null,t.mode&1?(Wt=(ne=Wt)||he,Dn(r,t),Wt=ne):Dn(r,t),Xn(t),c&8192){if(ne=t.memoizedState!==null,(t.stateNode.isHidden=ne)&&!he&&(t.mode&1)!==0)for(_e=t,he=t.child;he!==null;){for(fe=_e=he;_e!==null;){switch(ue=_e,ye=ue.child,ue.tag){case 0:case 11:case 14:case 15:Xa(4,ue,ue.return);break;case 1:Yo(ue,ue.return);var Ce=ue.stateNode;if(typeof Ce.componentWillUnmount=="function"){c=ue,a=ue.return;try{r=c,Ce.props=r.memoizedProps,Ce.state=r.memoizedState,Ce.componentWillUnmount()}catch(je){ft(c,a,je)}}break;case 5:Yo(ue,ue.return);break;case 22:if(ue.memoizedState!==null){O1(fe);continue}}ye!==null?(ye.return=ue,_e=ye):O1(fe)}he=he.sibling}e:for(he=null,fe=t;;){if(fe.tag===5){if(he===null){he=fe;try{u=fe.stateNode,ne?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(P=fe.stateNode,F=fe.memoizedProps.style,w=F!=null&&F.hasOwnProperty("display")?F.display:null,P.style.display=wr("display",w))}catch(je){ft(t,t.return,je)}}}else if(fe.tag===6){if(he===null)try{fe.stateNode.nodeValue=ne?"":fe.memoizedProps}catch(je){ft(t,t.return,je)}}else if((fe.tag!==22&&fe.tag!==23||fe.memoizedState===null||fe===t)&&fe.child!==null){fe.child.return=fe,fe=fe.child;continue}if(fe===t)break e;for(;fe.sibling===null;){if(fe.return===null||fe.return===t)break e;he===fe&&(he=null),fe=fe.return}he===fe&&(he=null),fe.sibling.return=fe.return,fe=fe.sibling}}break;case 19:Dn(r,t),Xn(t),c&4&&I1(t);break;case 21:break;default:Dn(r,t),Xn(t)}}function Xn(t){var r=t.flags;if(r&2){try{e:{for(var a=t.return;a!==null;){if($1(a)){var c=a;break e}a=a.return}throw Error(i(160))}switch(c.tag){case 5:var u=c.stateNode;c.flags&32&&(qt(u,""),c.flags&=-33);var h=A1(t);ld(t,h,u);break;case 3:case 4:var w=c.stateNode.containerInfo,P=A1(t);sd(t,P,w);break;default:throw Error(i(161))}}catch(F){ft(t,t.return,F)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Xx(t,r,a){_e=t,P1(t)}function P1(t,r,a){for(var c=(t.mode&1)!==0;_e!==null;){var u=_e,h=u.child;if(u.tag===22&&c){var w=u.memoizedState!==null||ks;if(!w){var P=u.alternate,F=P!==null&&P.memoizedState!==null||Wt;P=ks;var ne=Wt;if(ks=w,(Wt=F)&&!ne)for(_e=u;_e!==null;)w=_e,F=w.child,w.tag===22&&w.memoizedState!==null?D1(u):F!==null?(F.return=w,_e=F):D1(u);for(;h!==null;)_e=h,P1(h),h=h.sibling;_e=u,ks=P,Wt=ne}z1(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,_e=h):z1(t)}}function z1(t){for(;_e!==null;){var r=_e;if((r.flags&8772)!==0){var a=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Wt||_s(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Wt)if(a===null)c.componentDidMount();else{var u=r.elementType===r.type?a.memoizedProps:zn(r.type,a.memoizedProps);c.componentDidUpdate(u,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&Oh(r,h,c);break;case 3:var w=r.updateQueue;if(w!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Oh(r,w,a)}break;case 5:var P=r.stateNode;if(a===null&&r.flags&4){a=P;var F=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&a.focus();break;case"img":F.src&&(a.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ne=r.alternate;if(ne!==null){var he=ne.memoizedState;if(he!==null){var fe=he.dehydrated;fe!==null&&La(fe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Wt||r.flags&512&&id(r)}catch(ue){ft(r,r.return,ue)}}if(r===t){_e=null;break}if(a=r.sibling,a!==null){a.return=r.return,_e=a;break}_e=r.return}}function O1(t){for(;_e!==null;){var r=_e;if(r===t){_e=null;break}var a=r.sibling;if(a!==null){a.return=r.return,_e=a;break}_e=r.return}}function D1(t){for(;_e!==null;){var r=_e;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{_s(4,r)}catch(F){ft(r,a,F)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var u=r.return;try{c.componentDidMount()}catch(F){ft(r,u,F)}}var h=r.return;try{id(r)}catch(F){ft(r,h,F)}break;case 5:var w=r.return;try{id(r)}catch(F){ft(r,w,F)}}}catch(F){ft(r,r.return,F)}if(r===t){_e=null;break}var P=r.sibling;if(P!==null){P.return=r.return,_e=P;break}_e=r.return}}var Jx=Math.ceil,Cs=z.ReactCurrentDispatcher,cd=z.ReactCurrentOwner,Sn=z.ReactCurrentBatchConfig,Ye=0,Rt=null,wt=null,zt=0,pn=0,Ko=Lr(0),jt=0,Ja=null,uo=0,js=0,dd=0,ei=null,Jt=null,ud=0,Qo=1/0,hr=null,Ss=!1,pd=null,Pr=null,Ns=!1,zr=null,Ms=0,ti=0,hd=null,Rs=-1,Ls=0;function Gt(){return(Ye&6)!==0?gt():Rs!==-1?Rs:Rs=gt()}function Or(t){return(t.mode&1)===0?1:(Ye&2)!==0&&zt!==0?zt&-zt:Px.transition!==null?(Ls===0&&(Ls=Ap()),Ls):(t=Xe,t!==0||(t=window.event,t=t===void 0?16:Bp(t.type)),t)}function Fn(t,r,a,c){if(50<ti)throw ti=0,hd=null,Error(i(185));ja(t,a,c),((Ye&2)===0||t!==Rt)&&(t===Rt&&((Ye&2)===0&&(js|=a),jt===4&&Dr(t,zt)),en(t,c),a===1&&Ye===0&&(r.mode&1)===0&&(Qo=gt()+500,os&&Ar()))}function en(t,r){var a=t.callbackNode;Pv(t,r);var c=Di(t,t===Rt?zt:0);if(c===0)a!==null&&Rp(a),t.callbackNode=null,t.callbackPriority=0;else if(r=c&-c,t.callbackPriority!==r){if(a!=null&&Rp(a),r===1)t.tag===0?Ex(B1.bind(null,t)):Sh(B1.bind(null,t)),$x(function(){(Ye&6)===0&&Ar()}),a=null;else{switch(Tp(c)){case 1:a=Vl;break;case 4:a=Lp;break;case 16:a=Ei;break;case 536870912:a=$p;break;default:a=Ei}a=K1(a,F1.bind(null,t))}t.callbackPriority=r,t.callbackNode=a}}function F1(t,r){if(Rs=-1,Ls=0,(Ye&6)!==0)throw Error(i(327));var a=t.callbackNode;if(Zo()&&t.callbackNode!==a)return null;var c=Di(t,t===Rt?zt:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||r)r=$s(t,c);else{r=c;var u=Ye;Ye|=2;var h=H1();(Rt!==t||zt!==r)&&(hr=null,Qo=gt()+500,ho(t,r));do try{ny();break}catch(P){W1(t,P)}while(!0);$c(),Cs.current=h,Ye=u,wt!==null?r=0:(Rt=null,zt=0,r=jt)}if(r!==0){if(r===2&&(u=Gl(t),u!==0&&(c=u,r=fd(t,u))),r===1)throw a=Ja,ho(t,0),Dr(t,c),en(t,gt()),a;if(r===6)Dr(t,c);else{if(u=t.current.alternate,(c&30)===0&&!ey(u)&&(r=$s(t,c),r===2&&(h=Gl(t),h!==0&&(c=h,r=fd(t,h))),r===1))throw a=Ja,ho(t,0),Dr(t,c),en(t,gt()),a;switch(t.finishedWork=u,t.finishedLanes=c,r){case 0:case 1:throw Error(i(345));case 2:fo(t,Jt,hr);break;case 3:if(Dr(t,c),(c&130023424)===c&&(r=ud+500-gt(),10<r)){if(Di(t,0)!==0)break;if(u=t.suspendedLanes,(u&c)!==c){Gt(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=wc(fo.bind(null,t,Jt,hr),r);break}fo(t,Jt,hr);break;case 4:if(Dr(t,c),(c&4194240)===c)break;for(r=t.eventTimes,u=-1;0<c;){var w=31-In(c);h=1<<w,w=r[w],w>u&&(u=w),c&=~h}if(c=u,c=gt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Jx(c/1960))-c,10<c){t.timeoutHandle=wc(fo.bind(null,t,Jt,hr),c);break}fo(t,Jt,hr);break;case 5:fo(t,Jt,hr);break;default:throw Error(i(329))}}}return en(t,gt()),t.callbackNode===a?F1.bind(null,t):null}function fd(t,r){var a=ei;return t.current.memoizedState.isDehydrated&&(ho(t,r).flags|=256),t=$s(t,r),t!==2&&(r=Jt,Jt=a,r!==null&&md(r)),t}function md(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function ey(t){for(var r=t;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var u=a[c],h=u.getSnapshot;u=u.value;try{if(!En(h(),u))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Dr(t,r){for(r&=~dd,r&=~js,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var a=31-In(r),c=1<<a;t[a]=-1,r&=~c}}function B1(t){if((Ye&6)!==0)throw Error(i(327));Zo();var r=Di(t,0);if((r&1)===0)return en(t,gt()),null;var a=$s(t,r);if(t.tag!==0&&a===2){var c=Gl(t);c!==0&&(r=c,a=fd(t,c))}if(a===1)throw a=Ja,ho(t,0),Dr(t,r),en(t,gt()),a;if(a===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,fo(t,Jt,hr),en(t,gt()),null}function gd(t,r){var a=Ye;Ye|=1;try{return t(r)}finally{Ye=a,Ye===0&&(Qo=gt()+500,os&&Ar())}}function po(t){zr!==null&&zr.tag===0&&(Ye&6)===0&&Zo();var r=Ye;Ye|=1;var a=Sn.transition,c=Xe;try{if(Sn.transition=null,Xe=1,t)return t()}finally{Xe=c,Sn.transition=a,Ye=r,(Ye&6)===0&&Ar()}}function vd(){pn=Ko.current,ot(Ko)}function ho(t,r){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Lx(a)),wt!==null)for(a=wt.return;a!==null;){var c=a;switch(Sc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ns();break;case 3:Vo(),ot(Qt),ot(Dt),Dc();break;case 5:zc(c);break;case 4:Vo();break;case 13:ot(ut);break;case 19:ot(ut);break;case 10:Ac(c.type._context);break;case 22:case 23:vd()}a=a.return}if(Rt=t,wt=t=Fr(t.current,null),zt=pn=r,jt=0,Ja=null,dd=js=uo=0,Jt=ei=null,so!==null){for(r=0;r<so.length;r++)if(a=so[r],c=a.interleaved,c!==null){a.interleaved=null;var u=c.next,h=a.pending;if(h!==null){var w=h.next;h.next=u,c.next=w}a.pending=c}so=null}return t}function W1(t,r){do{var a=wt;try{if($c(),fs.current=xs,ms){for(var c=pt.memoizedState;c!==null;){var u=c.queue;u!==null&&(u.pending=null),c=c.next}ms=!1}if(co=0,Mt=Ct=pt=null,Ga=!1,Ya=0,cd.current=null,a===null||a.return===null){jt=1,Ja=r,wt=null;break}e:{var h=t,w=a.return,P=a,F=r;if(r=zt,P.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var ne=F,he=P,fe=he.tag;if((he.mode&1)===0&&(fe===0||fe===11||fe===15)){var ue=he.alternate;ue?(he.updateQueue=ue.updateQueue,he.memoizedState=ue.memoizedState,he.lanes=ue.lanes):(he.updateQueue=null,he.memoizedState=null)}var ye=h1(w);if(ye!==null){ye.flags&=-257,f1(ye,w,P,h,r),ye.mode&1&&p1(h,ne,r),r=ye,F=ne;var Ce=r.updateQueue;if(Ce===null){var je=new Set;je.add(F),r.updateQueue=je}else Ce.add(F);break e}else{if((r&1)===0){p1(h,ne,r),xd();break e}F=Error(i(426))}}else if(st&&P.mode&1){var vt=h1(w);if(vt!==null){(vt.flags&65536)===0&&(vt.flags|=256),f1(vt,w,P,h,r),Rc(Go(F,P));break e}}h=F=Go(F,P),jt!==4&&(jt=2),ei===null?ei=[h]:ei.push(h),h=w;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var X=d1(h,F,r);zh(h,X);break e;case 1:P=F;var U=h.type,ee=h.stateNode;if((h.flags&128)===0&&(typeof U.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Pr===null||!Pr.has(ee)))){h.flags|=65536,r&=-r,h.lanes|=r;var me=u1(h,P,r);zh(h,me);break e}}h=h.return}while(h!==null)}q1(a)}catch(Ne){r=Ne,wt===a&&a!==null&&(wt=a=a.return);continue}break}while(!0)}function H1(){var t=Cs.current;return Cs.current=xs,t===null?xs:t}function xd(){(jt===0||jt===3||jt===2)&&(jt=4),Rt===null||(uo&268435455)===0&&(js&268435455)===0||Dr(Rt,zt)}function $s(t,r){var a=Ye;Ye|=2;var c=H1();(Rt!==t||zt!==r)&&(hr=null,ho(t,r));do try{ty();break}catch(u){W1(t,u)}while(!0);if($c(),Ye=a,Cs.current=c,wt!==null)throw Error(i(261));return Rt=null,zt=0,jt}function ty(){for(;wt!==null;)U1(wt)}function ny(){for(;wt!==null&&!Nv();)U1(wt)}function U1(t){var r=Y1(t.alternate,t,pn);t.memoizedProps=t.pendingProps,r===null?q1(t):wt=r,cd.current=null}function q1(t){var r=t;do{var a=r.alternate;if(t=r.return,(r.flags&32768)===0){if(a=Yx(a,r,pn),a!==null){wt=a;return}}else{if(a=Kx(a,r),a!==null){a.flags&=32767,wt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,wt=null;return}}if(r=r.sibling,r!==null){wt=r;return}wt=r=t}while(r!==null);jt===0&&(jt=5)}function fo(t,r,a){var c=Xe,u=Sn.transition;try{Sn.transition=null,Xe=1,ry(t,r,a,c)}finally{Sn.transition=u,Xe=c}return null}function ry(t,r,a,c){do Zo();while(zr!==null);if((Ye&6)!==0)throw Error(i(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(zv(t,h),t===Rt&&(wt=Rt=null,zt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ns||(Ns=!0,K1(Ei,function(){return Zo(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=Sn.transition,Sn.transition=null;var w=Xe;Xe=1;var P=Ye;Ye|=4,cd.current=null,Zx(t,a),E1(a,t),_x(xc),Wi=!!vc,xc=vc=null,t.current=a,Xx(a),Mv(),Ye=P,Xe=w,Sn.transition=h}else t.current=a;if(Ns&&(Ns=!1,zr=t,Ms=u),h=t.pendingLanes,h===0&&(Pr=null),$v(a.stateNode),en(t,gt()),r!==null)for(c=t.onRecoverableError,a=0;a<r.length;a++)u=r[a],c(u.value,{componentStack:u.stack,digest:u.digest});if(Ss)throw Ss=!1,t=pd,pd=null,t;return(Ms&1)!==0&&t.tag!==0&&Zo(),h=t.pendingLanes,(h&1)!==0?t===hd?ti++:(ti=0,hd=t):ti=0,Ar(),null}function Zo(){if(zr!==null){var t=Tp(Ms),r=Sn.transition,a=Xe;try{if(Sn.transition=null,Xe=16>t?16:t,zr===null)var c=!1;else{if(t=zr,zr=null,Ms=0,(Ye&6)!==0)throw Error(i(331));var u=Ye;for(Ye|=4,_e=t.current;_e!==null;){var h=_e,w=h.child;if((_e.flags&16)!==0){var P=h.deletions;if(P!==null){for(var F=0;F<P.length;F++){var ne=P[F];for(_e=ne;_e!==null;){var he=_e;switch(he.tag){case 0:case 11:case 15:Xa(8,he,h)}var fe=he.child;if(fe!==null)fe.return=he,_e=fe;else for(;_e!==null;){he=_e;var ue=he.sibling,ye=he.return;if(L1(he),he===ne){_e=null;break}if(ue!==null){ue.return=ye,_e=ue;break}_e=ye}}}var Ce=h.alternate;if(Ce!==null){var je=Ce.child;if(je!==null){Ce.child=null;do{var vt=je.sibling;je.sibling=null,je=vt}while(je!==null)}}_e=h}}if((h.subtreeFlags&2064)!==0&&w!==null)w.return=h,_e=w;else e:for(;_e!==null;){if(h=_e,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Xa(9,h,h.return)}var X=h.sibling;if(X!==null){X.return=h.return,_e=X;break e}_e=h.return}}var U=t.current;for(_e=U;_e!==null;){w=_e;var ee=w.child;if((w.subtreeFlags&2064)!==0&&ee!==null)ee.return=w,_e=ee;else e:for(w=U;_e!==null;){if(P=_e,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:_s(9,P)}}catch(Ne){ft(P,P.return,Ne)}if(P===w){_e=null;break e}var me=P.sibling;if(me!==null){me.return=P.return,_e=me;break e}_e=P.return}}if(Ye=u,Ar(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(Pi,t)}catch{}c=!0}return c}finally{Xe=a,Sn.transition=r}}return!1}function V1(t,r,a){r=Go(a,r),r=d1(t,r,1),t=Ir(t,r,1),r=Gt(),t!==null&&(ja(t,1,r),en(t,r))}function ft(t,r,a){if(t.tag===3)V1(t,t,a);else for(;r!==null;){if(r.tag===3){V1(r,t,a);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Pr===null||!Pr.has(c))){t=Go(a,t),t=u1(r,t,1),r=Ir(r,t,1),t=Gt(),r!==null&&(ja(r,1,t),en(r,t));break}}r=r.return}}function oy(t,r,a){var c=t.pingCache;c!==null&&c.delete(r),r=Gt(),t.pingedLanes|=t.suspendedLanes&a,Rt===t&&(zt&a)===a&&(jt===4||jt===3&&(zt&130023424)===zt&&500>gt()-ud?ho(t,0):dd|=a),en(t,r)}function G1(t,r){r===0&&((t.mode&1)===0?r=1:(r=Oi,Oi<<=1,(Oi&130023424)===0&&(Oi=4194304)));var a=Gt();t=dr(t,r),t!==null&&(ja(t,r,a),en(t,a))}function ay(t){var r=t.memoizedState,a=0;r!==null&&(a=r.retryLane),G1(t,a)}function iy(t,r){var a=0;switch(t.tag){case 13:var c=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(i(314))}c!==null&&c.delete(r),G1(t,a)}var Y1;Y1=function(t,r,a){if(t!==null)if(t.memoizedProps!==r.pendingProps||Qt.current)Xt=!0;else{if((t.lanes&a)===0&&(r.flags&128)===0)return Xt=!1,Gx(t,r,a);Xt=(t.flags&131072)!==0}else Xt=!1,st&&(r.flags&1048576)!==0&&Nh(r,is,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;bs(t,r),t=r.pendingProps;var u=Do(r,Dt.current);qo(r,a),u=Wc(null,r,c,t,u,a);var h=Hc();return r.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Zt(c)?(h=!0,rs(r)):h=!1,r.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Ec(r),u.updater=ys,r.stateNode=u,u._reactInternals=r,Kc(r,c,t,a),r=Jc(null,r,c,!0,h,a)):(r.tag=0,st&&h&&jc(r),Vt(null,r,u,a),r=r.child),r;case 16:c=r.elementType;e:{switch(bs(t,r),t=r.pendingProps,u=c._init,c=u(c._payload),r.type=c,u=r.tag=ly(c),t=zn(c,t),u){case 0:r=Xc(null,r,c,t,a);break e;case 1:r=w1(null,r,c,t,a);break e;case 11:r=m1(null,r,c,t,a);break e;case 14:r=g1(null,r,c,zn(c.type,t),a);break e}throw Error(i(306,c,""))}return r;case 0:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:zn(c,u),Xc(t,r,c,u,a);case 1:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:zn(c,u),w1(t,r,c,u,a);case 3:e:{if(b1(r),t===null)throw Error(i(387));c=r.pendingProps,h=r.memoizedState,u=h.element,Ph(t,r),ps(r,c,null,a);var w=r.memoizedState;if(c=w.element,h.isDehydrated)if(h={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){u=Go(Error(i(423)),r),r=k1(t,r,c,a,u);break e}else if(c!==u){u=Go(Error(i(424)),r),r=k1(t,r,c,a,u);break e}else for(un=Rr(r.stateNode.containerInfo.firstChild),dn=r,st=!0,Pn=null,a=Ih(r,null,c,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Wo(),c===u){r=pr(t,r,a);break e}Vt(t,r,c,a)}r=r.child}return r;case 5:return Dh(r),t===null&&Mc(r),c=r.type,u=r.pendingProps,h=t!==null?t.memoizedProps:null,w=u.children,yc(c,u)?w=null:h!==null&&yc(c,h)&&(r.flags|=32),y1(t,r),Vt(t,r,w,a),r.child;case 6:return t===null&&Mc(r),null;case 13:return _1(t,r,a);case 4:return Pc(r,r.stateNode.containerInfo),c=r.pendingProps,t===null?r.child=Ho(r,null,c,a):Vt(t,r,c,a),r.child;case 11:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:zn(c,u),m1(t,r,c,u,a);case 7:return Vt(t,r,r.pendingProps,a),r.child;case 8:return Vt(t,r,r.pendingProps.children,a),r.child;case 12:return Vt(t,r,r.pendingProps.children,a),r.child;case 10:e:{if(c=r.type._context,u=r.pendingProps,h=r.memoizedProps,w=u.value,tt(cs,c._currentValue),c._currentValue=w,h!==null)if(En(h.value,w)){if(h.children===u.children&&!Qt.current){r=pr(t,r,a);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var P=h.dependencies;if(P!==null){w=h.child;for(var F=P.firstContext;F!==null;){if(F.context===c){if(h.tag===1){F=ur(-1,a&-a),F.tag=2;var ne=h.updateQueue;if(ne!==null){ne=ne.shared;var he=ne.pending;he===null?F.next=F:(F.next=he.next,he.next=F),ne.pending=F}}h.lanes|=a,F=h.alternate,F!==null&&(F.lanes|=a),Tc(h.return,a,r),P.lanes|=a;break}F=F.next}}else if(h.tag===10)w=h.type===r.type?null:h.child;else if(h.tag===18){if(w=h.return,w===null)throw Error(i(341));w.lanes|=a,P=w.alternate,P!==null&&(P.lanes|=a),Tc(w,a,r),w=h.sibling}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===r){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}Vt(t,r,u.children,a),r=r.child}return r;case 9:return u=r.type,c=r.pendingProps.children,qo(r,a),u=Cn(u),c=c(u),r.flags|=1,Vt(t,r,c,a),r.child;case 14:return c=r.type,u=zn(c,r.pendingProps),u=zn(c.type,u),g1(t,r,c,u,a);case 15:return v1(t,r,r.type,r.pendingProps,a);case 17:return c=r.type,u=r.pendingProps,u=r.elementType===c?u:zn(c,u),bs(t,r),r.tag=1,Zt(c)?(t=!0,rs(r)):t=!1,qo(r,a),l1(r,c,u),Kc(r,c,u,a),Jc(null,r,c,!0,t,a);case 19:return j1(t,r,a);case 22:return x1(t,r,a)}throw Error(i(156,r.tag))};function K1(t,r){return Mp(t,r)}function sy(t,r,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,r,a,c){return new sy(t,r,a,c)}function yd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ly(t){if(typeof t=="function")return yd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===W)return 11;if(t===ae)return 14}return 2}function Fr(t,r){var a=t.alternate;return a===null?(a=Nn(t.tag,r,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=r,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,r=t.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function As(t,r,a,c,u,h){var w=2;if(c=t,typeof t=="function")yd(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case T:return mo(a.children,u,h,r);case E:w=8,u|=8;break;case B:return t=Nn(12,a,r,u|2),t.elementType=B,t.lanes=h,t;case K:return t=Nn(13,a,r,u),t.elementType=K,t.lanes=h,t;case te:return t=Nn(19,a,r,u),t.elementType=te,t.lanes=h,t;case se:return Ts(a,u,h,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G:w=10;break e;case J:w=9;break e;case W:w=11;break e;case ae:w=14;break e;case ce:w=16,c=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return r=Nn(w,a,r,u),r.elementType=t,r.type=c,r.lanes=h,r}function mo(t,r,a,c){return t=Nn(7,t,c,r),t.lanes=a,t}function Ts(t,r,a,c){return t=Nn(22,t,c,r),t.elementType=se,t.lanes=a,t.stateNode={isHidden:!1},t}function wd(t,r,a){return t=Nn(6,t,null,r),t.lanes=a,t}function bd(t,r,a){return r=Nn(4,t.children!==null?t.children:[],t.key,r),r.lanes=a,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function cy(t,r,a,c,u){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yl(0),this.expirationTimes=Yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.identifierPrefix=c,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function kd(t,r,a,c,u,h,w,P,F){return t=new cy(t,r,a,P,F),r===1?(r=1,h===!0&&(r|=8)):r=0,h=Nn(3,null,null,r),t.current=h,h.stateNode=t,h.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ec(h),t}function dy(t,r,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:t,containerInfo:r,implementation:a}}function Q1(t){if(!t)return $r;t=t._reactInternals;e:{if(no(t)!==t||t.tag!==1)throw Error(i(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Zt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(i(171))}if(t.tag===1){var a=t.type;if(Zt(a))return Ch(t,a,r)}return r}function Z1(t,r,a,c,u,h,w,P,F){return t=kd(a,c,!0,t,u,h,w,P,F),t.context=Q1(null),a=t.current,c=Gt(),u=Or(a),h=ur(c,u),h.callback=r??null,Ir(a,h,u),t.current.lanes=u,ja(t,u,c),en(t,c),t}function Is(t,r,a,c){var u=r.current,h=Gt(),w=Or(u);return a=Q1(a),r.context===null?r.context=a:r.pendingContext=a,r=ur(h,w),r.payload={element:t},c=c===void 0?null:c,c!==null&&(r.callback=c),t=Ir(u,r,w),t!==null&&(Fn(t,u,w,h),us(t,u,w)),w}function Es(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function X1(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<r?a:r}}function _d(t,r){X1(t,r),(t=t.alternate)&&X1(t,r)}function uy(){return null}var J1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cd(t){this._internalRoot=t}Ps.prototype.render=Cd.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(i(409));Is(t,r,null,null)},Ps.prototype.unmount=Cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;po(function(){Is(null,t,null,null)}),r[ir]=null}};function Ps(t){this._internalRoot=t}Ps.prototype.unstable_scheduleHydration=function(t){if(t){var r=Pp();t={blockedOn:null,target:t,priority:r};for(var a=0;a<Sr.length&&r!==0&&r<Sr[a].priority;a++);Sr.splice(a,0,t),a===0&&Dp(t)}};function jd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ef(){}function py(t,r,a,c,u){if(u){if(typeof c=="function"){var h=c;c=function(){var ne=Es(w);h.call(ne)}}var w=Z1(r,c,t,0,null,!1,!1,"",ef);return t._reactRootContainer=w,t[ir]=w.current,Da(t.nodeType===8?t.parentNode:t),po(),w}for(;u=t.lastChild;)t.removeChild(u);if(typeof c=="function"){var P=c;c=function(){var ne=Es(F);P.call(ne)}}var F=kd(t,0,!1,null,null,!1,!1,"",ef);return t._reactRootContainer=F,t[ir]=F.current,Da(t.nodeType===8?t.parentNode:t),po(function(){Is(r,F,a,c)}),F}function Os(t,r,a,c,u){var h=a._reactRootContainer;if(h){var w=h;if(typeof u=="function"){var P=u;u=function(){var F=Es(w);P.call(F)}}Is(r,w,t,u)}else w=py(a,r,t,u,c);return Es(w)}Ip=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var a=Ca(r.pendingLanes);a!==0&&(Kl(r,a|1),en(r,gt()),(Ye&6)===0&&(Qo=gt()+500,Ar()))}break;case 13:po(function(){var c=dr(t,1);if(c!==null){var u=Gt();Fn(c,t,1,u)}}),_d(t,1)}},Ql=function(t){if(t.tag===13){var r=dr(t,134217728);if(r!==null){var a=Gt();Fn(r,t,134217728,a)}_d(t,134217728)}},Ep=function(t){if(t.tag===13){var r=Or(t),a=dr(t,r);if(a!==null){var c=Gt();Fn(a,t,r,c)}_d(t,r)}},Pp=function(){return Xe},zp=function(t,r){var a=Xe;try{return Xe=t,r()}finally{Xe=a}},Gn=function(t,r,a){switch(r){case"input":if(Be(t,a),r=a.name,a.type==="radio"&&r!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var c=a[r];if(c!==t&&c.form===t.form){var u=ts(c);if(!u)throw Error(i(90));ge(c),Be(c,u)}}}break;case"textarea":yt(t,a);break;case"select":r=a.value,r!=null&&Ve(t,!!a.multiple,r,!1)}},re=gd,ve=po;var hy={usingClientEntryPoint:!1,Events:[Wa,zo,ts,Nt,Ti,gd]},ni={findFiberByHostInstance:ro,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fy={bundleType:ni.bundleType,version:ni.version,rendererPackageName:ni.rendererPackageName,rendererConfig:ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sp(t),t===null?null:t.stateNode},findFiberByHostInstance:ni.findFiberByHostInstance||uy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ds.isDisabled&&Ds.supportsFiber)try{Pi=Ds.inject(fy),Yn=Ds}catch{}}return tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hy,tn.createPortal=function(t,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jd(r))throw Error(i(200));return dy(t,r,null,a)},tn.createRoot=function(t,r){if(!jd(t))throw Error(i(299));var a=!1,c="",u=J1;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),r=kd(t,1,!1,null,null,a,!1,c,u),t[ir]=r.current,Da(t.nodeType===8?t.parentNode:t),new Cd(r)},tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=Sp(r),t=t===null?null:t.stateNode,t},tn.flushSync=function(t){return po(t)},tn.hydrate=function(t,r,a){if(!zs(r))throw Error(i(200));return Os(null,t,r,!0,a)},tn.hydrateRoot=function(t,r,a){if(!jd(t))throw Error(i(405));var c=a!=null&&a.hydratedSources||null,u=!1,h="",w=J1;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),r=Z1(r,null,t,1,a??null,u,!1,h,w),t[ir]=r.current,Da(t),c)for(t=0;t<c.length;t++)a=c[t],u=a._getVersion,u=u(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,u]:r.mutableSourceEagerHydrationData.push(a,u);return new Ps(r)},tn.render=function(t,r,a){if(!zs(r))throw Error(i(200));return Os(null,t,r,!1,a)},tn.unmountComponentAtNode=function(t){if(!zs(t))throw Error(i(40));return t._reactRootContainer?(po(function(){Os(null,null,t,!1,function(){t._reactRootContainer=null,t[ir]=null})}),!0):!1},tn.unstable_batchedUpdates=gd,tn.unstable_renderSubtreeIntoContainer=function(t,r,a,c){if(!zs(a))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return Os(t,r,a,!1,c)},tn.version="18.3.1-next-f1338f8080-20240426",tn}var cf;function x0(){if(cf)return Md.exports;cf=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(o){console.error(o)}}return e(),Md.exports=by(),Md.exports}var df;function ky(){if(df)return Fs;df=1;var e=x0();return Fs.createRoot=e.createRoot,Fs.hydrateRoot=e.hydrateRoot,Fs}var _y=ky();const Cy=v0(_y);function y0(e){var o,i,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(o=0;o<l;o++)e[o]&&(i=y0(e[o]))&&(s&&(s+=" "),s+=i)}else for(i in e)e[i]&&(s&&(s+=" "),s+=i);return s}function ie(){for(var e,o,i=0,s="",l=arguments.length;i<l;i++)(e=arguments[i])&&(o=y0(e))&&(s&&(s+=" "),s+=o);return s}const So=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 5V19M5 12H19",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};So.displayName="PlusIcon";const jy="_root_7uomf_13",Sy="_sm_7uomf_82",Ny="_md_7uomf_88",My="_lg_7uomf_94",Ry="_horizontal_7uomf_107",Ly="_alignStart_7uomf_121",$y="_vertical_7uomf_125",Ay="_inner_7uomf_131",Ty="_iconSlot_7uomf_146",Iy="_label_7uomf_163",go={root:jy,sm:Sy,md:Ny,lg:My,horizontal:Ry,alignStart:Ly,vertical:$y,inner:Ay,iconSlot:Ty,label:Iy};function uf(e){return typeof e=="number"?`${e}px`:e}const Ey=v.forwardRef(({size:e="md",layout:o="horizontal",align:i="center",label:s="Add",hideLabel:l=!1,icon:d,height:p,borderRadius:m,className:g,style:y,disabled:x,type:b="button",...k},S)=>{const _=d??n.jsx(So,{size:"100%"}),j={};return p!==void 0&&(j["--area-min-height"]=uf(p)),m!==void 0&&(j["--area-radius"]=uf(m)),n.jsx("button",{ref:S,type:b,className:ie(go.root,go[e],go[o],i==="start"&&go.alignStart,g),disabled:x,"data-size":e,"data-layout":o,style:{...j,...y},...k,children:n.jsxs("span",{className:go.inner,children:[n.jsx("span",{className:go.iconSlot,"aria-hidden":"true",children:_}),!l&&s&&n.jsx("span",{className:go.label,children:s})]})})});Ey.displayName="AreaButton";const Py="_root_b29pw_8",zy="_image_b29pw_33",Oy="_initials_b29pw_40",Dy="_iconSlot_b29pw_52",Wr={root:Py,image:zy,initials:Oy,iconSlot:Dy,"size-sm":"_size-sm_b29pw_74","size-md":"_size-md_b29pw_80","size-lg":"_size-lg_b29pw_86","size-xl":"_size-xl_b29pw_92","size-2xl":"_size-2xl_b29pw_98","shape-circle":"_shape-circle_b29pw_106","shape-square":"_shape-square_b29pw_107","variant-subtle":"_variant-subtle_b29pw_122","color-neutral":"_color-neutral_b29pw_122","color-blue":"_color-blue_b29pw_126","color-azure":"_color-azure_b29pw_130","color-purple":"_color-purple_b29pw_134","color-pink":"_color-pink_b29pw_138","color-red":"_color-red_b29pw_142","color-orange":"_color-orange_b29pw_146","color-yellow":"_color-yellow_b29pw_150","color-matcha":"_color-matcha_b29pw_154","color-green":"_color-green_b29pw_158","variant-solid":"_variant-solid_b29pw_167"};function Fy({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function By(e){const o=e.trim().split(/\s+/).filter(l=>/[\p{L}\p{N}]/u.test(l));if(o.length===0)return"";if(o.length===1)return o[0].charAt(0).toUpperCase();const i=o[0].charAt(0),s=o[o.length-1].charAt(0);return(i+s).toUpperCase()}const qn=v.forwardRef(({src:e,alt:o,initials:i,name:s,icon:l,size:d="md",color:p="neutral",variant:m="subtle",shape:g="circle",className:y,...x},b)=>{const[k,S]=v.useState(!1),_=!!e&&!k,j=(i==null?void 0:i.slice(0,2).toUpperCase())??(s?By(s):"");let N;return _?N=n.jsx("img",{src:e,alt:o??"",className:Wr.image,onError:()=>S(!0),draggable:!1},e):j?N=n.jsx("span",{className:Wr.initials,"aria-hidden":o?void 0:!0,children:j}):N=n.jsx("span",{className:Wr.iconSlot,"aria-hidden":"true",children:l??n.jsx(Fy,{})}),n.jsx("span",{ref:b,"data-size":d,"data-color":p,"data-variant":m,"data-shape":g,className:ie(Wr.root,Wr[`size-${d}`],Wr[`color-${p}`],Wr[`variant-${m}`],Wr[`shape-${g}`],y),...x,children:N})});qn.displayName="Avatar";const Wy="_root_uqz3u_7",Hy={root:Wy},Yt=v.forwardRef(({as:e="span",className:o,children:i,...s},l)=>n.jsx(e,{ref:l,className:ie(Hy.root,o),...s,children:i}));Yt.displayName="Eyebrow";const Uy="_root_1tnwf_15",qy={root:Uy},Vy=v.forwardRef(({scale:e="paragraph-md",placeholder:o="Type something…",value:i,defaultValue:s="",onChange:l,readOnly:d=!1,disabled:p=!1,className:m,onInput:g,...y},x)=>{const b=i!==void 0,k=v.useRef(null),[S,_]=v.useState(()=>b?!i:!s),j=v.useCallback(C=>{k.current=C,typeof x=="function"?x(C):x&&(x.current=C)},[x]);v.useEffect(()=>{!b&&k.current&&s&&(k.current.textContent=s,_(!s))},[]),v.useEffect(()=>{b&&k.current&&(k.current.textContent??"")!==i&&(k.current.textContent=i??"",_(!(i??"")))},[i,b]);const N=C=>{const z=C.currentTarget.textContent??"";_(z===""),l==null||l(z),g==null||g(C)},$=C=>{C.preventDefault();const z=C.clipboardData.getData("text/plain");document.execCommand("insertText",!1,z)},M=!p&&!d;return n.jsx("span",{ref:j,contentEditable:M?"plaintext-only":"false",suppressContentEditableWarning:!0,role:"textbox","aria-multiline":"false","aria-placeholder":o,"aria-disabled":p||void 0,"aria-readonly":d||void 0,"data-scale":e,"data-empty":S||void 0,"data-placeholder":o,"data-disabled":p||void 0,"data-readonly":d||void 0,className:ie(qy.root,m),onInput:N,onPaste:$,...y})});Vy.displayName="TypeBox";const Gy="_root_1brpy_12",Yy="_ghost_1brpy_27",Ky="_path_1brpy_32",oi={root:Gy,"ai-spin":"_ai-spin_1brpy_1",ghost:Yy,"ai-morph":"_ai-morph_1brpy_1",path:Ky,"variant-inverse":"_variant-inverse_1brpy_41","variant-inverse-light":"_variant-inverse-light_1brpy_55","variant-stroke":"_variant-stroke_1brpy_67","variant-stroke-light":"_variant-stroke-light_1brpy_80","state-ready":"_state-ready_1brpy_93","ai-breathe":"_ai-breathe_1brpy_1"},Qy={xs:16,sm:24,md:32,lg:48,xl:64},Zy={xs:1.75,sm:1.5,md:1.25,lg:1.1,xl:1},pf="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",Bs=e=>e==="inverse"||e==="inverse-light",Xy=e=>e==="stroke"||e==="stroke-light",Eu=v.forwardRef(({size:e="md",variant:o="gradient-fill",state:i="loading",className:s,style:l,"aria-label":d,...p},m)=>{const g=v.useId().replace(/[^a-z0-9]/gi,""),y=`aigrad-${g}`,x=`aiglow-${g}`,b=typeof e=="string",k=b?Qy[e]:e,S=b?Zy[e]:k<=16?1.75:k<=24?1.5:k<=32?1.25:1.1,_=o==="gradient-fill"?`url(#${y})`:Bs(o)?"currentColor":"none",j=Bs(o)?"none":Xy(o)?"currentColor":`url(#${y})`,N="currentColor",$=o!=="stroke"&&o!=="stroke-light"&&!Bs(o);return n.jsxs("svg",{ref:m,width:k,height:k,viewBox:"0 0 24 24",fill:"none",className:ie(oi.root,oi[`variant-${o}`],oi[`state-${i}`],s),style:l,"data-state":i,"aria-label":d??(i==="ready"?"AI ready for input":"Loading"),"aria-live":i==="ready"?"polite":void 0,role:"status",...p,children:[!Bs(o)&&n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:y,gradientUnits:"userSpaceOnUse",x1:"22",y1:"2",x2:"2",y2:"22",children:[n.jsx("stop",{offset:"0%",stopColor:"var(--ai-grad-start)",stopOpacity:"1"}),n.jsx("stop",{offset:"55%",stopColor:"var(--ai-grad-mid)",stopOpacity:"1"}),n.jsx("stop",{offset:"100%",stopColor:"var(--ai-grad-end)",stopOpacity:"0.1"})]}),n.jsxs("filter",{id:x,x:"-30%",y:"-30%",width:"160%",height:"160%",children:[n.jsx("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"0.6",result:"blur"}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{in:"blur"}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),n.jsx("path",{d:pf,stroke:N,strokeWidth:S*.6,strokeLinecap:"round",strokeLinejoin:"round",opacity:"0.08",className:oi.ghost}),n.jsx("path",{d:pf,fill:_,stroke:j==="none"?void 0:j,strokeWidth:j==="none"?void 0:S,strokeLinecap:"round",strokeLinejoin:"round",filter:$?`url(#${x})`:void 0,className:oi.path})]})});Eu.displayName="AILoader";const Jy="_root_10act_14",e3="_hovered_10act_68",t3="_loading_10act_69",n3="_sm_10act_90",r3="_md_10act_98",o3="_lg_10act_106",a3="_dark_10act_116",i3="_icon_10act_122",Xo={root:Jy,hovered:e3,loading:t3,"border-blur-pulse":"_border-blur-pulse_10act_1",sm:n3,md:r3,lg:o3,dark:a3,icon:i3},hf={sm:12,md:14,lg:18};function s3({size:e,light:o}){return n.jsxs("svg",{width:e,height:e,viewBox:"42 18 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:[!o&&n.jsx("defs",{children:n.jsxs("linearGradient",{id:"ai-core-btn-sparkle",x1:"41.875",y1:"24",x2:"54.125",y2:"24",gradientUnits:"userSpaceOnUse",children:[n.jsx("stop",{stopColor:"#8C4FE2"}),n.jsx("stop",{offset:"0.5",stopColor:"#446CFF"}),n.jsx("stop",{offset:"1",stopColor:"#1EDFDE"})]})}),n.jsx("path",{d:"M53.9971 23.8161C51.3041 22.8187 49.1814 20.6959 48.1839 18.0029C48.1211 17.8324 47.8796 17.8324 47.8161 18.0029C46.8187 20.6959 44.6959 22.8186 42.0029 23.8161C41.8324 23.8789 41.8324 24.1204 42.0029 24.1839C44.6959 25.1813 46.8186 27.3041 47.8161 29.9971C47.8789 30.1676 48.1204 30.1676 48.1839 29.9971C49.1813 27.3041 51.3041 25.1814 53.9971 24.1839C54.1676 24.1211 54.1676 23.8796 53.9971 23.8161Z",fill:o?"white":"url(#ai-core-btn-sparkle)"})]})}const w0=v.forwardRef(({size:e="md",dark:o,loading:i,className:s,onMouseEnter:l,onMouseLeave:d,...p},m)=>{const[g,y]=v.useState(!1);return n.jsx("button",{ref:m,className:ie(Xo.root,Xo[e],o&&Xo.dark,i?Xo.loading:g&&Xo.hovered,s),"aria-busy":i||void 0,onMouseEnter:x=>{y(!0),l==null||l(x)},onMouseLeave:x=>{y(!1),d==null||d(x)},...p,children:n.jsx("span",{className:Xo.icon,children:i?n.jsx(Eu,{size:hf[e],variant:o?"inverse-light":"gradient-fill"}):n.jsx(s3,{size:hf[e],light:o})})})});w0.displayName="AICoreButton";const l3="_root_1qx4u_9",c3="_star_1qx4u_34",$d={root:l3,"size-xs":"_size-xs_1qx4u_27","size-sm":"_size-sm_1qx4u_28","size-md":"_size-md_1qx4u_29","size-lg":"_size-lg_1qx4u_30",star:c3},d3="M22.2808 11.6847C17.6641 9.97486 14.0252 6.33591 12.3153 1.71918C12.2076 1.42694 11.7937 1.42694 11.6847 1.71918C9.97486 6.33591 6.33591 9.97482 1.71918 11.6847C1.42694 11.7924 1.42694 12.2063 1.71918 12.3153C6.33591 14.0251 9.97482 17.6641 11.6847 22.2808C11.7924 22.5731 12.2063 22.5731 12.3153 22.2808C14.0251 17.6641 17.6641 14.0252 22.2808 12.3153C22.5731 12.2076 22.5731 11.7937 22.2808 11.6847Z",b0=v.forwardRef(({size:e="sm",className:o,...i},s)=>n.jsx("span",{ref:s,"data-size":e,"aria-hidden":"true",className:ie($d.root,$d[`size-${e}`],o),...i,children:n.jsx("svg",{viewBox:"0 0 24 24",className:$d.star,fill:"none","aria-hidden":"true",children:n.jsx("path",{d:d3,fill:"currentColor"})})}));b0.displayName="AIAvatar";const u3="_shell_lalw3_21",p3="_wrapper_lalw3_58",h3="_card_lalw3_65",f3="_cardClip_lalw3_94",m3="_textarea_lalw3_160",g3="_actions_lalw3_203",ia={shell:u3,wrapper:p3,card:h3,cardClip:f3,textarea:m3,actions:g3},k0=v.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(ia.shell,e),...i,children:o}));k0.displayName="AIComposer";function v3(e,o){typeof e=="function"?e(o):e&&(e.current=o)}const _0=v.forwardRef(({value:e,onChange:o,onSubmit:i,maxRows:s=5,radius:l="sm",placeholder:d="Ask AI anything…",className:p,onKeyDown:m,disabled:g,children:y,style:x,...b},k)=>{const S=v.useRef(null);v.useEffect(()=>{const M=S.current;M&&(M.style.height="auto",M.style.height=`${M.scrollHeight}px`)},[e]);const _=v.useCallback(M=>o(M.target.value),[o]),j=v.useCallback(M=>{m==null||m(M),!M.defaultPrevented&&M.key==="Enter"&&!M.shiftKey&&i&&(M.preventDefault(),i())},[m,i]),N=v.useCallback(M=>{S.current=M,v3(k,M)},[k]),$={...x??{},"--ai-composer-max-rows":s};return n.jsx("div",{className:ie(ia.wrapper,p),"data-radius":l,children:n.jsx("div",{className:ia.card,children:n.jsxs("div",{className:ia.cardClip,children:[n.jsx("textarea",{...b,ref:N,className:ia.textarea,rows:1,value:e,onChange:_,onKeyDown:j,placeholder:d,disabled:g,style:$}),y!=null&&n.jsx("div",{className:ia.actions,children:y})]})})})});_0.displayName="AIComposerInput";const x3="_root_fv0gc_10",y3="_simple_fv0gc_28",w3="_float_fv0gc_83",ff={root:x3,simple:y3,float:w3},b3=v.forwardRef(({variant:e="simple",className:o,children:i,...s},l)=>n.jsx("section",{ref:l,"data-variant":e,className:ie(ff.root,ff[e],o),...s,children:i}));b3.displayName="AIConversation";const k3="_fadeFrame_1l0ib_19",_3="_scroller_1l0ib_32",C3="_content_1l0ib_89",j3="_messageBlock_1l0ib_108",S3="_messageBlockAi_1l0ib_116",N3="_inboundBlock_1l0ib_128",M3="_inboundLoader_1l0ib_136",R3="_inboundLoaderLabel_1l0ib_146",L3="_outboundBlock_1l0ib_153",$3="_outboundHeader_1l0ib_161",A3="_messageBlockUser_1l0ib_168",T3="_aiThreadOutboundIn_1l0ib_1",I3="_messageBody_1l0ib_182",E3="_messageBodyAi_1l0ib_193",P3="_messageBodyUser_1l0ib_200",z3="_label_1l0ib_159",O3="_labelAi_1l0ib_221",D3="_labelUser_1l0ib_159",F3="_labelAvatar_1l0ib_224",B3="_labelText_1l0ib_237",W3="_timestamp_1l0ib_244",H3="_timestampAi_1l0ib_259",U3="_timestampUser_1l0ib_260",q3="_timestampInline_1l0ib_270",V3="_aiThreadOutboundFadeIn_1l0ib_1",Fe={fadeFrame:k3,scroller:_3,"padding-none":"_padding-none_1l0ib_85","padding-sm":"_padding-sm_1l0ib_86","padding-md":"_padding-md_1l0ib_87",content:C3,"density-comfortable":"_density-comfortable_1l0ib_102","density-compact":"_density-compact_1l0ib_103",messageBlock:j3,messageBlockAi:S3,inboundBlock:N3,inboundLoader:M3,inboundLoaderLabel:R3,outboundBlock:L3,outboundHeader:$3,messageBlockUser:A3,aiThreadOutboundIn:T3,messageBody:I3,messageBodyAi:E3,messageBodyUser:P3,label:z3,labelAi:O3,labelUser:D3,labelAvatar:F3,labelText:B3,timestamp:W3,timestampAi:H3,timestampUser:U3,timestampInline:q3,aiThreadOutboundFadeIn:V3},mf=8;function G3(e,o){typeof e=="function"?e(o):e&&(e.current=o)}const Y3=v.forwardRef(({density:e="comfortable",padding:o="md",autoScroll:i=!0,autoScrollThreshold:s=80,className:l,children:d,...p},m)=>{const g=v.useRef(null),y=v.useRef(null),x=v.useRef(!0),[b,k]=v.useState(!1),[S,_]=v.useState(!1),j=v.useCallback(N=>{g.current=N,G3(m,N)},[m]);return v.useEffect(()=>{const N=g.current,$=y.current;if(!N||!$)return;const M=()=>{const{scrollTop:T,scrollHeight:E,clientHeight:B}=N;return E-T-B<s},C=T=>{N.scrollTo({top:N.scrollHeight,behavior:T?"smooth":"auto"})},z=()=>{const{scrollTop:T,scrollHeight:E,clientHeight:B}=N,G=T>mf,J=E-T-B>mf;k(W=>W===G?W:G),_(W=>W===J?W:J)};i&&(C(!1),x.current=!0),z();const R=()=>{x.current=M(),z()};N.addEventListener("scroll",R,{passive:!0});const L=new ResizeObserver(()=>{i&&x.current&&C(!0),z()});return L.observe($),L.observe(N),()=>{N.removeEventListener("scroll",R),L.disconnect()}},[i,s]),n.jsx("div",{className:Fe.fadeFrame,"data-fade-top":b,"data-fade-bottom":S,children:n.jsx("div",{ref:j,className:ie(Fe.scroller,Fe[`padding-${o}`],l),...p,children:n.jsx("div",{ref:y,className:ie(Fe.content,Fe[`density-${e}`]),children:d})})})});Y3.displayName="AIThread";const jl=v.forwardRef(({align:e="ai",avatar:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,className:ie(Fe.label,e==="user"?Fe.labelUser:Fe.labelAi,i),...l,children:[o!=null&&n.jsx("span",{className:Fe.labelAvatar,children:o}),n.jsx("span",{className:Fe.labelText,children:s})]}));jl.displayName="AILabel";const K3=e=>e.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});function Q3(e,o){if(typeof e=="string")return{text:e};const i=e instanceof Date?e:new Date(e);return Number.isNaN(i.getTime())?null:{text:o(i),iso:i.toISOString()}}const ki=v.forwardRef(({value:e,align:o="ai",format:i=K3,inline:s=!1,className:l,...d},p)=>{const m=v.useMemo(()=>Q3(e,i),[e,i]);return m?n.jsx("time",{ref:p,className:ie(Fe.timestamp,s?Fe.timestampInline:o==="user"?Fe.timestampUser:Fe.timestampAi,l),dateTime:m.iso,...d,children:m.text}):null});ki.displayName="AITimestamp";function Z3(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?n.jsx(ki,{align:"ai",value:e}):e}function X3(e){return e==null?null:typeof e=="string"||typeof e=="number"?n.jsx(jl,{align:"ai",children:e}):e}const J3=v.forwardRef(({label:e,time:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,"data-author":"ai",className:ie(Fe.messageBlock,Fe.messageBlockAi,i),...l,children:[X3(e),n.jsx("div",{className:ie(Fe.messageBody,Fe.messageBodyAi),children:s}),Z3(o)]}));J3.displayName="AIAssistantMessage";function e5(e){return e==null?null:typeof e=="string"||typeof e=="number"||e instanceof Date?n.jsx(ki,{align:"user",value:e}):e}function t5(e){return e==null?null:typeof e=="string"||typeof e=="number"?n.jsx(jl,{align:"user",children:e}):e}const n5=v.forwardRef(({label:e,time:o,className:i,children:s,...l},d)=>n.jsxs("div",{ref:d,"data-author":"user",className:ie(Fe.messageBlock,Fe.messageBlockUser,i),...l,children:[t5(e),n.jsx("div",{className:ie(Fe.messageBody,Fe.messageBodyUser),children:s}),e5(o)]}));n5.displayName="AIUserMessage";function r5(e){return e===!1?null:e==null||e===!0?n.jsx(b0,{size:"sm"}):e}function o5(e,o){return e==null&&o==null?null:typeof e=="string"||typeof e=="number"||e==null?n.jsx(jl,{align:"ai",avatar:o,children:e}):e}const a5=v.forwardRef(({avatar:e,label:o="Teambridge AI",activity:i,actions:s,loading:l=!1,loaderLabel:d="Thinking…",className:p,children:m,...g},y)=>{const x=r5(e),b=o5(o,x);return n.jsxs("div",{ref:y,"data-author":"ai",className:ie(Fe.messageBlock,Fe.messageBlockAi,Fe.inboundBlock,p),...g,children:[b,i,m!=null&&n.jsx("div",{className:ie(Fe.messageBody,Fe.messageBodyAi),children:m}),l&&n.jsxs("div",{className:Fe.inboundLoader,"aria-live":"polite",children:[n.jsx(Eu,{size:"xs"}),d!=null&&n.jsx("span",{className:Fe.inboundLoaderLabel,children:d})]}),s]})});a5.displayName="AIInboundMessage";function i5(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const s5=v.forwardRef(({label:e="You",time:o,timeFormat:i,className:s,children:l,...d},p)=>{const m=o==null?null:i5(o)?n.jsx(ki,{value:o,format:i,inline:!0}):o,g=e==null?null:typeof e=="string"||typeof e=="number"?n.jsx("span",{className:Fe.labelText,children:e}):e,y=g!=null||m!=null;return n.jsxs("div",{ref:p,"data-author":"user",className:ie(Fe.messageBlock,Fe.messageBlockUser,Fe.outboundBlock,s),...d,children:[y&&n.jsxs("div",{className:ie(Fe.label,Fe.labelUser,Fe.outboundHeader),children:[g,m]}),n.jsx("div",{className:ie(Fe.messageBody,Fe.messageBodyUser),children:l})]})});s5.displayName="AIOutboundMessage";const $n=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M6 9L12 15L18 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};$n.displayName="ChevronDownIcon";const l5="_root_1j4eq_8",c5="_header_1j4eq_17",d5="_headerSummary_1j4eq_53",u5="_aiTrailSummaryFade_1j4eq_1",p5="_aiTrailHeaderAppend_1j4eq_1",h5="_aiTrailEllipsis_1j4eq_1",f5="_headerCurrent_1j4eq_128",m5="_headerChevron_1j4eq_159",g5="_headerChevronExpanded_1j4eq_173",v5="_body_1j4eq_187",x5="_bodyExpanded_1j4eq_200",y5="_bodyCollapsed_1j4eq_201",w5="_bodyInner_1j4eq_203",b5="_bodyContent_1j4eq_187",k5="_step_1j4eq_225",_5="_stepIcon_1j4eq_242",C5="_stepAnimating_1j4eq_256",j5="_aiTrailStepPulse_1j4eq_1",S5="_stepBody_1j4eq_267",N5="_stepHead_1j4eq_282",M5="_stepLabel_1j4eq_286",R5="_stepSeparator_1j4eq_288",L5="_stepDetail_1j4eq_292",$5="_subToggle_1j4eq_302",A5="_subToggleCount_1j4eq_335",T5="_subToggleChevron_1j4eq_339",I5="_subActivityWrap_1j4eq_358",E5="_subActivityExpanded_1j4eq_364",P5="_subActivityCollapsed_1j4eq_365",z5="_subActivityClip_1j4eq_367",O5="_subActivityList_1j4eq_378",D5="_subActivity_1j4eq_358",F5="_aiTrailSubActivityType_1j4eq_1",B5="_aiTrailSubActivityFade_1j4eq_1",Je={root:l5,header:c5,headerSummary:d5,aiTrailSummaryFade:u5,aiTrailHeaderAppend:p5,aiTrailEllipsis:h5,headerCurrent:f5,headerChevron:m5,headerChevronExpanded:g5,body:v5,bodyExpanded:x5,bodyCollapsed:y5,bodyInner:w5,bodyContent:b5,step:k5,"step-pending":"_step-pending_1j4eq_236","step-active":"_step-active_1j4eq_237","step-done":"_step-done_1j4eq_238","step-error":"_step-error_1j4eq_239",stepIcon:_5,stepAnimating:C5,aiTrailStepPulse:j5,stepBody:S5,stepHead:N5,stepLabel:M5,stepSeparator:R5,stepDetail:L5,subToggle:$5,subToggleCount:A5,subToggleChevron:T5,subActivityWrap:I5,subActivityExpanded:E5,subActivityCollapsed:P5,subActivityClip:z5,subActivityList:O5,subActivity:D5,aiTrailSubActivityType:F5,aiTrailSubActivityFade:B5},Pu=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7.5 10.5H7.51M12 10.5H12.01M16.5 10.5H16.51M7 18V20.3355C7 20.8684 7 21.1348 7.10923 21.2716C7.20422 21.3906 7.34827 21.4599 7.50054 21.4597C7.67563 21.4595 7.88367 21.2931 8.29976 20.9602L10.6852 19.0518C11.1725 18.662 11.4162 18.4671 11.6875 18.3285C11.9282 18.2055 12.1844 18.1156 12.4492 18.0613C12.7477 18 13.0597 18 13.6837 18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V14C3 14.93 3 15.395 3.10222 15.7765C3.37962 16.8117 4.18827 17.6204 5.22354 17.8978C5.60504 18 6.07003 18 7 18ZM8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10C7.77614 10 8 10.2239 8 10.5ZM12.5 10.5C12.5 10.7761 12.2761 11 12 11C11.7239 11 11.5 10.7761 11.5 10.5C11.5 10.2239 11.7239 10 12 10C12.2761 10 12.5 10.2239 12.5 10.5ZM17 10.5C17 10.7761 16.7761 11 16.5 11C16.2239 11 16 10.7761 16 10.5C16 10.2239 16.2239 10 16.5 10C16.7761 10 17 10.2239 17 10.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Pu.displayName="MessageDotsSquareIcon";function fl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}fl.displayName="SearchMdIcon";function Yr({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M14 2.26946V6.4C14 6.96005 14 7.24008 14.109 7.45399C14.2049 7.64215 14.3578 7.79513 14.546 7.89101C14.7599 8 15.0399 8 15.6 8H19.7305M20 9.98822V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H12.0118C12.7455 2 13.1124 2 13.4577 2.08289C13.7638 2.15638 14.0564 2.27759 14.3249 2.44208C14.6276 2.6276 14.887 2.88703 15.4059 3.40589L18.5941 6.59411C19.113 7.11297 19.3724 7.3724 19.5579 7.67515C19.7224 7.94356 19.8436 8.2362 19.9171 8.5423C20 8.88757 20 9.25445 20 9.98822Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}const zu=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M2 12H22M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22M12 2C9.49872 4.73835 8.07725 8.29203 8 12C8.07725 15.708 9.49872 19.2616 12 22",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};zu.displayName="Globe01Icon";const C0=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};C0.displayName="Code02Icon";function j0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15.6314 7.63137C15.2353 7.23535 15.0373 7.03735 14.9631 6.80902C14.8979 6.60817 14.8979 6.39183 14.9631 6.19098C15.0373 5.96265 15.2353 5.76465 15.6314 5.36863L18.4697 2.53026C17.7165 2.18962 16.8804 2 16 2C12.6863 2 9.99998 4.68629 9.99998 8C9.99998 8.49104 10.059 8.9683 10.1702 9.42509C10.2894 9.91424 10.349 10.1588 10.3384 10.3133C10.3273 10.4751 10.3032 10.5612 10.2286 10.7051C10.1574 10.8426 10.0208 10.9791 9.7478 11.2522L3.49998 17.5C2.67156 18.3284 2.67156 19.6716 3.49998 20.5C4.32841 21.3284 5.67156 21.3284 6.49998 20.5L12.7478 14.2522C13.0208 13.9791 13.1574 13.8426 13.2949 13.7714C13.4388 13.6968 13.5249 13.6727 13.6867 13.6616C13.8412 13.651 14.0857 13.7106 14.5749 13.8297C15.0317 13.941 15.5089 14 16 14C19.3137 14 22 11.3137 22 8C22 7.11959 21.8104 6.28347 21.4697 5.53026L18.6314 8.36863C18.2353 8.76465 18.0373 8.96265 17.809 9.03684C17.6082 9.1021 17.3918 9.1021 17.191 9.03684C16.9626 8.96265 16.7646 8.76465 16.3686 8.36863L15.6314 7.63137Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}j0.displayName="Tool01Icon";const wn=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 6L9 17L4 12",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})},pa=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",fill:o}),n.jsx("path",{d:"M12 8V12M12 16H12.01",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]})};pa.displayName="AlertCircleIcon";const W5={thinking:n.jsx(Pu,{size:14}),tool:n.jsx(j0,{size:14}),search:n.jsx(fl,{size:14}),file:n.jsx(Yr,{size:14}),web:n.jsx(zu,{size:14}),code:n.jsx(C0,{size:14}),content:n.jsx(wn,{size:14})},Sl=v.forwardRef(({type:e,status:o="done",detail:i,icon:s,subActivities:l,groupState:d="done",className:p,children:m,...g},y)=>{const x=o==="active"&&d==="live",b=o==="active"&&d==="live",k=o==="active"||o==="error",[S,_]=v.useState(null),j=S!==null?S:k;v.useEffect(()=>{_(null)},[o]);const N=v.useCallback(()=>_(!j),[j]),$=!!l&&l.length>0,M=(l==null?void 0:l.length)??0,C=o==="error"?n.jsx(pa,{size:14}):s??W5[e];return n.jsxs("div",{ref:y,"data-step-type":e,"data-step-status":o,className:ie(Je.step,Je[`step-${o}`],x&&Je.stepAnimating,p),...g,children:[n.jsx("span",{className:Je.stepIcon,"aria-hidden":!0,children:C}),n.jsxs("span",{className:Je.stepBody,children:[n.jsxs("span",{className:Je.stepHead,children:[n.jsx("span",{className:Je.stepLabel,children:m}),i!=null&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:Je.stepSeparator,"aria-hidden":!0,children:" · "}),n.jsx("span",{className:Je.stepDetail,children:i})]}),$&&n.jsxs("button",{type:"button",className:Je.subToggle,onClick:N,"aria-expanded":j,"aria-label":j?`Collapse ${M} sub-steps`:`Expand ${M} sub-steps`,"data-expanded":j||void 0,children:[n.jsx("span",{className:Je.subToggleCount,children:M}),n.jsx("span",{className:Je.subToggleChevron,"aria-hidden":!0,children:n.jsx($n,{size:10})})]})]}),$&&n.jsx(n.Fragment,{children:n.jsx("div",{className:ie(Je.subActivityWrap,j?Je.subActivityExpanded:Je.subActivityCollapsed),"aria-hidden":!j,children:n.jsx("div",{className:Je.subActivityClip,children:n.jsx("ul",{className:Je.subActivityList,"data-animating":b||void 0,children:l.map((z,R)=>n.jsx("li",{className:Je.subActivity,children:z},R))})})})})]})]})});Sl.displayName="AIActivityStep";function gf(e){return e==="error"}function H5(e,o,i,s,l,d){if(e==="live")return i.length===0?o===1?"1 step":`${o} steps`:n.jsx("span",{className:l,children:i[s]??i[i.length-1]},s);const p=e==="error"?"Stopped":d?`Thought for ${d}`:"Thought";if(i.length===0){const m=o===1?"1 step":`${o} steps`;return`${p} · ${m}`}return n.jsxs(n.Fragment,{children:[p,i.map((m,g)=>n.jsxs(v.Fragment,{children:[" · ",m]},g))]})}const Ou=v.forwardRef(({state:e="live",expanded:o,defaultExpanded:i,onToggle:s,duration:l,summary:d,className:p,children:m,...g},y)=>{const x=o!==void 0,[b,k]=v.useState(i??gf(e)),[S,_]=v.useState(!1);v.useEffect(()=>{x||S||k(gf(e))},[e,x,S]);const j=x?!!o:b,N=v.useCallback(()=>{const L=!j;x||(k(L),_(!0)),s==null||s(L)},[j,x,s]),{enhancedChildren:$,stepCount:M,stepLabels:C,currentLabelIdx:z}=v.useMemo(()=>{let L=0;const T=[];let E=-1;return{enhancedChildren:v.Children.map(m,G=>{if(!v.isValidElement(G))return G;const J=G.props;if(!("type"in J||"status"in J))return G;L+=1;const K=J.status??"done";return K==="pending"?null:(J.children!=null&&(T.push(J.children),K==="active"&&(E=T.length-1)),U5(G,e))}),stepCount:L,stepLabels:T,currentLabelIdx:E>=0?E:T.length-1}},[m,e]),R=d??H5(e,M,C,z,Je.headerCurrent,l);return n.jsxs("div",{ref:y,"data-state":e,"data-expanded":j,className:ie(Je.root,p),...g,children:[n.jsxs("button",{type:"button",className:Je.header,onClick:N,"aria-expanded":j,"aria-label":j?"Collapse activity trail":"Expand activity trail",children:[n.jsx("span",{className:Je.headerSummary,children:R},`${e}-${z}`),n.jsx("span",{className:ie(Je.headerChevron,j&&Je.headerChevronExpanded),"aria-hidden":!0,children:n.jsx($n,{size:14})})]}),n.jsx("div",{className:ie(Je.body,j?Je.bodyExpanded:Je.bodyCollapsed),"aria-hidden":!j,children:n.jsx("div",{className:Je.bodyInner,children:n.jsxs("div",{className:Je.bodyContent,children:[$,e==="done"&&n.jsx(Sl,{type:"content",status:"done",groupState:"done",children:"Done"})]})})})]})});Ou.displayName="AIActivityTrail";function U5(e,o){return v.cloneElement(e,{groupState:o})}var _i=x0();const q5="_wrapper_3tqlm_10",V5="_tooltip_3tqlm_22",G5="_portal_3tqlm_23",Y5="_top_3tqlm_61",K5="_bottom_3tqlm_71",Q5="_left_3tqlm_81",Z5="_right_3tqlm_91",Ws={wrapper:q5,tooltip:V5,portal:G5,top:Y5,bottom:K5,left:Q5,right:Z5},yr=({content:e,placement:o="top",delay:i=0,disabled:s=!1,maxWidth:l=280,offset:d=0,children:p})=>{const[m,g]=v.useState(!1),[y,x]=v.useState({top:0,left:0}),b=v.useRef(null),k=v.useRef(),S=v.useId(),_=v.useCallback(()=>{if(!b.current)return;const C=b.current.getBoundingClientRect(),z=6+d;let R=0,L=0;switch(o){case"top":R=C.top-z,L=C.left+C.width/2;break;case"bottom":R=C.bottom+z,L=C.left+C.width/2;break;case"left":R=C.top+C.height/2,L=C.left-z;break;case"right":R=C.top+C.height/2,L=C.right+z;break}x({top:R,left:L})},[o,d]),j=v.useCallback(()=>{s||(_(),clearTimeout(k.current),i>0?k.current=setTimeout(()=>g(!0),i):g(!0))},[s,i,_]),N=v.useCallback(()=>{clearTimeout(k.current),g(!1)},[]);v.useEffect(()=>{if(!m)return;const C=()=>_();return window.addEventListener("scroll",C,!0),window.addEventListener("resize",C),()=>{window.removeEventListener("scroll",C,!0),window.removeEventListener("resize",C)}},[m,_]);const $=ln.cloneElement(p,{"aria-describedby":m?S:void 0}),M=n.jsx("span",{id:S,role:"tooltip",className:ie(Ws.tooltip,Ws[o],Ws.portal),"data-visible":m||void 0,style:{top:y.top,left:y.left,maxWidth:l!==void 0?l:void 0},children:e});return n.jsxs("span",{ref:b,className:Ws.wrapper,onMouseEnter:j,onMouseLeave:N,onFocus:j,onBlur:N,children:[$,_i.createPortal(M,document.body)]})};yr.displayName="Tooltip";const X5="_root_v8mqg_9",J5="_hover_v8mqg_21",Ad={root:X5,"align-start":"_align-start_v8mqg_29","align-end":"_align-end_v8mqg_30",hover:J5};function e4(e){return e instanceof Date||typeof e=="number"||typeof e=="string"}const S0=v.forwardRef(({visibility:e="always",align:o="start",time:i,timeFormat:s,className:l,children:d,...p},m)=>{const g=i==null?null:e4(i)?n.jsx(ki,{value:i,format:s,inline:!0}):i,y=b=>{if(!v.isValidElement(b))return b;const k=b;if(k.type===yr)return k;const S=k.props["aria-label"];return S?n.jsx(yr,{content:S,placement:"top",delay:150,children:k}):k},x=v.Children.map(d,b=>{if(v.isValidElement(b)&&b.type===v.Fragment){const k=b.props.children;return v.Children.map(k,y)}return y(b)});return n.jsxs("div",{ref:m,"data-visibility":e,"data-align":o,className:ie(Ad.root,Ad[`align-${o}`],e==="hover"&&Ad.hover,l),...p,children:[x,g]})});S0.displayName="AIMessageActions";const t4="_card_1apq1_17",n4="_header_1apq1_69",r4="_iconBadge_1apq1_74",o4="_iconInner_1apq1_89",a4="_headerText_1apq1_100",i4="_headerTopRow_1apq1_109",s4="_eyebrow_1apq1_115",l4="_title_1apq1_124",c4="_subtitle_1apq1_130",d4="_headerTrailing_1apq1_135",u4="_body_1apq1_141",p4="_footer_1apq1_152",h4="_footerEnd_1apq1_157",f4="_metaRow_1apq1_162",m4="_metaItem_1apq1_170",g4="_resultHero_1apq1_180",v4="_resultHeadline_1apq1_185",x4="_resultDetail_1apq1_191",y4="_clauses_1apq1_205",w4="_clause_1apq1_205",b4="_clauseLabel_1apq1_215",k4="_clauseBody_1apq1_225",_4="_badgeExecuting_1apq1_245",nt={card:t4,header:n4,iconBadge:r4,iconInner:o4,headerText:a4,headerTopRow:i4,eyebrow:s4,title:l4,subtitle:c4,headerTrailing:d4,body:u4,footer:p4,footerEnd:h4,metaRow:f4,metaItem:m4,resultHero:g4,resultHeadline:v4,resultDetail:x4,clauses:y4,clause:w4,clauseLabel:b4,clauseBody:k4,badgeExecuting:_4},tr=v.forwardRef(({tone:e="neutral",accent:o=!0,fill:i=!1,icon:s,eyebrow:l,title:d,subtitle:p,trailing:m,footer:g,footerEnd:y=!1,className:x,children:b,...k},S)=>{const _=l!=null||m!=null,j=_||d!=null||p!=null,N=s!=null||j;return n.jsxs("div",{ref:S,"data-tone":e,"data-accent":o||void 0,"data-fill":i||void 0,"data-icon":s!=null||void 0,className:ie(nt.card,x),...k,children:[N&&n.jsxs("div",{className:nt.header,children:[s!=null&&n.jsx("span",{className:ie(nt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:n.jsx("span",{className:nt.iconInner,children:s})}),j&&n.jsxs("div",{className:nt.headerText,children:[_&&n.jsxs("div",{className:nt.headerTopRow,children:[l!=null&&n.jsx("span",{className:nt.eyebrow,children:l}),m!=null&&n.jsx("span",{className:nt.headerTrailing,children:m})]}),d!=null&&n.jsx("span",{className:nt.title,children:d}),p!=null&&n.jsx("span",{className:nt.subtitle,children:p})]})]}),b!=null&&n.jsx("div",{className:nt.body,children:b}),g!=null&&n.jsx("div",{className:ie(nt.footer,y&&nt.footerEnd),children:g})]})});tr.displayName="UltronCard";const C4="_root_zkkgh_6",j4="_sm_zkkgh_24",S4="_md_zkkgh_33",N4="_lg_zkkgh_42",M4="_neutral_zkkgh_53",R4="_blue_zkkgh_66",L4="_azure_zkkgh_79",$4="_purple_zkkgh_92",A4="_pink_zkkgh_105",T4="_red_zkkgh_118",I4="_orange_zkkgh_131",E4="_yellow_zkkgh_144",P4="_matcha_zkkgh_157",z4="_green_zkkgh_170",O4="_subtle_zkkgh_184",D4="_outline_zkkgh_190",F4="_solid_zkkgh_196",B4="_dot_zkkgh_203",W4="_icon_zkkgh_212",H4="_dismiss_zkkgh_224",vo={root:C4,sm:j4,md:S4,lg:N4,neutral:M4,blue:R4,azure:L4,purple:$4,pink:A4,red:T4,orange:I4,yellow:E4,matcha:P4,green:z4,subtle:O4,outline:D4,solid:F4,dot:B4,icon:W4,dismiss:H4},Ci=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})},U4={sm:10,md:12,lg:14},Ln=v.forwardRef(({variant:e="subtle",color:o="neutral",size:i="md",dot:s,leadingIcon:l,dismissible:d,onDismiss:p,className:m,children:g,...y},x)=>n.jsxs("span",{ref:x,className:ie(vo.root,vo[i],vo[o],vo[e],m),...y,children:[s&&n.jsx("span",{className:vo.dot,"aria-hidden":"true"}),l&&n.jsx("span",{className:ie(vo.icon,"alloy-icon-slot"),"aria-hidden":"true",children:l}),g,d&&n.jsx("button",{type:"button",className:vo.dismiss,"aria-label":"Remove",onClick:b=>{b.stopPropagation(),p==null||p()},children:n.jsx(Ci,{size:U4[i]})})]}));Ln.displayName="Tag";function N0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4.93 4.93L19.07 19.07M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}N0.displayName="SlashCircle01Icon";const Du=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};Du.displayName="EyeIcon";function Nl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H18M12 22C6.47715 22 2 17.5228 2 12M12 22V18M2 12C2 6.47715 6.47715 2 12 2M2 12H6M12 2V6",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Nl.displayName="Target01Icon";function vn({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}vn.displayName="ClockIcon";const ji=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 5.12537C19.1213 6.67091 20.5 9.17444 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5H11.5M7 18.8746C4.87867 17.329 3.5 14.8255 3.5 12C3.5 7.30555 7.30558 3.49998 12 3.49998H12.5M13 22.4L11 20.4L13 18.4M11 5.59998L13 3.59998L11 1.59998",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ji.displayName="RefreshCw04Icon";const yn=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,fill:"none"}),n.jsx("path",{d:"M7.5 12L10.5 15L16.5 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};yn.displayName="CheckCircleIcon";function Ml({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 3V6.4C7 6.96005 7 7.24008 7.10899 7.45399C7.20487 7.64215 7.35785 7.79513 7.54601 7.89101C7.75992 8 8.03995 8 8.6 8H15.4C15.9601 8 16.2401 8 16.454 7.89101C16.6422 7.79513 16.7951 7.64215 16.891 7.45399C17 7.24008 17 6.96005 17 6.4V4M17 21V14.6C17 14.0399 17 13.7599 16.891 13.546C16.7951 13.3578 16.6422 13.2049 16.454 13.109C16.2401 13 15.9601 13 15.4 13H8.6C8.03995 13 7.75992 13 7.54601 13.109C7.35785 13.2049 7.20487 13.3578 7.10899 13.546C7 13.7599 7 14.0399 7 14.6V21M21 9.32548V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H14.6745C15.1637 3 15.4083 3 15.6385 3.05526C15.8425 3.10425 16.0376 3.18506 16.2166 3.29472C16.4184 3.4184 16.5914 3.59135 16.9373 3.93726L20.0627 7.06274C20.4086 7.40865 20.5816 7.5816 20.7053 7.78343C20.8149 7.96237 20.8957 8.15746 20.9447 8.36154C21 8.59171 21 8.8363 21 9.32548Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ml.displayName="Save01Icon";const q4={sm:11,md:12,lg:14},V4={ignored:{label:"Ignored",color:"neutral",Icon:N0},monitored:{label:"Monitored",color:"blue",Icon:Du},recommended:{label:"Recommended",color:"purple",Icon:Nl},"awaiting-approval":{label:"Awaiting approval",color:"orange",Icon:vn},executing:{label:"Executing",color:"azure",Icon:ji},completed:{label:"Completed",color:"green",Icon:yn},saved:{label:"Saved",color:"matcha",Icon:Ml}},No=v.forwardRef(({status:e,size:o="sm",label:i,className:s,...l},d)=>{const p=V4[e],m=p.Icon;return n.jsx(Ln,{ref:d,color:p.color,size:o,variant:"subtle",leadingIcon:n.jsx(m,{size:q4[o]}),className:ie(e==="executing"&&nt.badgeExecuting,s),...l,children:i??p.label})});No.displayName="UltronStatusBadge";function Rl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Rl.displayName="Bell01Icon";const G4=v.forwardRef(({title:e,icon:o,eyebrow:i="Event",meta:s,status:l,tone:d="neutral",children:p,...m},g)=>n.jsx(tr,{ref:g,tone:d,eyebrow:i,title:e,icon:o??n.jsx(Rl,{size:14}),trailing:l?n.jsx(No,{status:l}):void 0,...m,children:((s==null?void 0:s.length)||p)&&n.jsxs(n.Fragment,{children:[s!=null&&s.length?n.jsx("div",{className:nt.metaRow,children:s.map((y,x)=>n.jsxs("span",{className:nt.metaItem,children:[y.icon&&n.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:y.icon}),y.label]},x))}):null,p]})}));G4.displayName="UltronEventCard";const Y4=v.forwardRef(({eyebrow:e="Understanding",icon:o,entities:i,tone:s="info",children:l,...d},p)=>n.jsxs(tr,{ref:p,tone:s,eyebrow:e,icon:o??n.jsx(Pu,{size:14}),...d,children:[l,i&&n.jsx("div",{className:nt.metaRow,children:i})]}));Y4.displayName="UltronUnderstandingCard";const K4={neutral:"neutral",info:"blue",success:"green",warning:"orange",error:"red"},Q4=v.forwardRef(({eyebrow:e="Decision",icon:o,factors:i,tone:s="warning",children:l,...d},p)=>n.jsxs(tr,{ref:p,tone:s,eyebrow:e,icon:o??n.jsx(Nl,{size:14}),...d,children:[l,i!=null&&i.length?n.jsx("div",{className:nt.metaRow,children:i.map((m,g)=>n.jsx(Ln,{size:"sm",color:K4[s],variant:"subtle",children:m},g))}):null]}));Q4.displayName="UltronDecisionCard";const Z4="_root_ou64w_8",X4="_xs_ou64w_75",J4="_sm_ou64w_84",ew="_md_ou64w_93",tw="_lg_ou64w_102",nw="_xl_ou64w_111",rw="_iconOnly_ou64w_122",ow="_primary_ou64w_132",aw="_secondary_ou64w_148",iw="_tertiary_ou64w_167",sw="_ghost_ou64w_185",lw="_destructive_ou64w_203",cw="_destructiveSecondary_ou64w_221",dw="_artwork_ou64w_69",uw="_label_ou64w_254",pw="_spinner_ou64w_69",hw="_light_ou64w_281",an={root:Z4,xs:X4,sm:J4,md:ew,lg:tw,xl:nw,iconOnly:rw,primary:ow,secondary:aw,tertiary:iw,ghost:sw,destructive:lw,destructiveSecondary:cw,artwork:dw,label:uw,spinner:pw,"alloy-spin":"_alloy-spin_ou64w_1",light:hw},fw={primary:an.primary,secondary:an.secondary,tertiary:an.tertiary,ghost:an.ghost,destructive:an.destructive,"destructive-secondary":an.destructiveSecondary},Ee=v.forwardRef(({variant:e="primary",size:o="md",loading:i=!1,leadingArtwork:s,trailingArtwork:l,iconOnly:d=!1,className:p,children:m,disabled:g,...y},x)=>{const b=g||i;return n.jsxs("button",{ref:x,className:ie(an.root,fw[e],an[o],d&&an.iconOnly,p),disabled:b,"aria-busy":i||void 0,"data-loading":i||void 0,"data-variant":e,"data-size":o,...y,children:[i&&n.jsx("span",{className:an.spinner,"aria-hidden":"true"}),!i&&d&&n.jsx("span",{className:ie(an.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:m}),!i&&!d&&n.jsxs(n.Fragment,{children:[s&&n.jsx("span",{className:ie(an.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:s}),m&&n.jsx("span",{className:an.label,children:m}),l&&n.jsx("span",{className:ie(an.artwork,"alloy-icon-slot"),"aria-hidden":"true",children:l})]})]})});Ee.displayName="Button";function M0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}M0.displayName="XCircleIcon";const mw=v.forwardRef(({eyebrow:e="Recommendation",icon:o,actions:i,onIgnore:s,ignoreLabel:l="Ignore",tone:d="info",children:p,...m},g)=>{const y=n.jsxs(n.Fragment,{children:[i.map((x,b)=>n.jsx(Ee,{size:"sm",variant:x.variant??(b===0?"primary":"secondary"),leadingArtwork:x.icon,loading:x.loading,onClick:x.onClick,children:x.label},b)),s&&n.jsx(Ee,{size:"sm",variant:"ghost",leadingArtwork:n.jsx(M0,{size:16}),onClick:s,children:l})]});return n.jsx(tr,{ref:g,tone:d,eyebrow:e,icon:o??n.jsx(Nl,{size:14}),footer:y,...m,children:p})});mw.displayName="UltronRecommendationCard";function Fu({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17 10V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V10M12 14.5V16.5M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C17.7202 10 16.8802 10 15.2 10H8.8C7.11984 10 6.27976 10 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Fu.displayName="Lock01Icon";const gw=v.forwardRef(({title:e,eyebrow:o="Approval required",icon:i,approveLabel:s="Approve & send",onApprove:l,approving:d=!1,cancelLabel:p="Cancel",onCancel:m,editLabel:g="Edit",onEdit:y,tone:x="warning",children:b,...k},S)=>{const _=n.jsxs(n.Fragment,{children:[m&&n.jsx(Ee,{size:"md",variant:"ghost",onClick:m,children:p}),y&&n.jsx(Ee,{size:"md",variant:"secondary",onClick:y,children:g}),n.jsx(Ee,{size:"md",variant:"primary",leadingArtwork:n.jsx(wn,{size:18}),loading:d,onClick:l,children:s})]});return n.jsx(tr,{ref:S,tone:x,eyebrow:o,title:e,icon:i??n.jsx(Fu,{size:14}),trailing:n.jsx(No,{status:"awaiting-approval"}),footer:_,footerEnd:!0,...k,children:b})});gw.displayName="UltronApprovalCard";const vw=v.forwardRef(({eyebrow:e="Working",icon:o,steps:i,state:s="live",duration:l,tone:d="info",...p},m)=>n.jsx(tr,{ref:m,tone:d,eyebrow:e,icon:o??n.jsx(ji,{size:14}),trailing:n.jsx(No,{status:s==="done"?"completed":"executing"}),...p,children:n.jsx(Ou,{state:s,duration:l,children:i.map((g,y)=>n.jsx(Sl,{type:g.type??"tool",status:g.status??"pending",detail:g.detail,subActivities:g.subActivities,children:g.label},y))})}));vw.displayName="UltronExecutionCard";const xw=v.forwardRef(({headline:e,detail:o,avatar:i,status:s="completed",tone:l="success",footer:d,...p},m)=>n.jsx(tr,{ref:m,tone:l,fill:!0,accent:!1,trailing:n.jsx(No,{status:s}),footer:d,...p,children:n.jsxs("div",{className:nt.resultHero,children:[n.jsx("span",{className:ie(nt.iconBadge,"alloy-icon-slot"),"aria-hidden":"true",children:i??n.jsx(yn,{size:18})}),n.jsxs("div",{children:[n.jsx("div",{className:nt.resultHeadline,children:e}),o!=null&&n.jsx("div",{className:nt.resultDetail,children:o})]})]})}));xw.displayName="UltronResultCard";function R0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 2L4.09344 12.6879C3.74463 13.1064 3.57023 13.3157 3.56756 13.4925C3.56524 13.6461 3.63372 13.7923 3.75324 13.8889C3.89073 14 4.16316 14 4.70802 14H12L11 22L19.9065 11.3121C20.2553 10.8936 20.4297 10.6843 20.4324 10.5075C20.4347 10.3539 20.3663 10.2077 20.2467 10.1111C20.1092 10 19.8368 10 19.292 10H12L13 2Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}R0.displayName="ZapIcon";const yw=v.forwardRef(({title:e="Want Ultron to handle this automatically next time?",eyebrow:o="Save as workflow",icon:i,saveLabel:s="Save as workflow",onSave:l,saving:d=!1,dismissLabel:p="Not now",onDismiss:m,tone:g="info",children:y,...x},b)=>{const k=n.jsxs(n.Fragment,{children:[n.jsx(Ee,{size:"md",variant:"primary",leadingArtwork:n.jsx(Ml,{size:18}),loading:d,onClick:l,children:s}),m&&n.jsx(Ee,{size:"md",variant:"ghost",onClick:m,children:p})]});return n.jsx(tr,{ref:b,tone:g,fill:!0,accent:!1,eyebrow:o,title:e,icon:i??n.jsx(R0,{size:14}),footer:k,...x,children:y})});yw.displayName="UltronWorkflowSaveCard";const L0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};L0.displayName="GitBranch01Icon";function Td({label:e,children:o}){return n.jsxs("div",{className:nt.clause,children:[n.jsx("span",{className:nt.clauseLabel,children:e}),n.jsx("span",{className:nt.clauseBody,children:o})]})}const ww=v.forwardRef(({name:e,eyebrow:o="Workflow",icon:i,when:s,conditions:l,actions:d,status:p,footer:m,tone:g="info",...y},x)=>n.jsx(tr,{ref:x,tone:g,eyebrow:o,title:e,icon:i??n.jsx(L0,{size:14}),trailing:p?n.jsx(No,{status:p}):void 0,footer:m,...y,children:n.jsxs("div",{className:nt.clauses,children:[n.jsx(Td,{label:"When",children:s}),n.jsx(Td,{label:"If",children:l}),n.jsx(Td,{label:"Then",children:d})]})}));ww.displayName="UltronWorkflowPreviewCard";const bw="_root_1nyuz_6",kw="_sm_1nyuz_20",_w="_md_1nyuz_29",Cw="_lg_1nyuz_38",jw="_divider_1nyuz_48",Sw="_interactive_1nyuz_53",Nw="_disabled_1nyuz_60",Mw="_destructive_1nyuz_64",Rw="_selected_1nyuz_78",Lw="_label_1nyuz_87",$w="_description_1nyuz_97",Aw="_leadingSlot_1nyuz_101",Tw="_trailingSlot_1nyuz_102",Iw="_content_1nyuz_115",Ew="_taSwitch_1nyuz_167",Pw="_taSwitchThumb_1nyuz_188",zw="_taCheckbox_1nyuz_203",Ow="_taRadio_1nyuz_226",Dw="_taRadioDot_1nyuz_244",Fw="_taExpand_1nyuz_252",Bw="_taStatus_1nyuz_266",Ww="_taStatus_success_1nyuz_273",Hw="_taStatus_warning_1nyuz_274",Uw="_taStatus_error_1nyuz_275",qw="_taStatus_info_1nyuz_276",bt={root:bw,sm:kw,md:_w,lg:Cw,divider:jw,interactive:Sw,disabled:Nw,destructive:Mw,selected:Rw,label:Lw,description:$w,leadingSlot:Aw,trailingSlot:Tw,content:Iw,taSwitch:Ew,taSwitchThumb:Pw,taCheckbox:zw,taRadio:Ow,taRadioDot:Dw,taExpand:Fw,taStatus:Bw,taStatus_success:Ww,taStatus_warning:Hw,taStatus_error:Uw,taStatus_info:qw},bn=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 6L15 12L9 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};bn.displayName="ChevronRightIcon";const Bu=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 17L17 7M17 7H7M17 7V17",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Bu.displayName="ArrowUpRightIcon";const Vw="_root_4qytd_5",Gw="_neutral_4qytd_25",Yw="_primary_4qytd_30",Kw="_success_4qytd_35",Qw="_warning_4qytd_40",Zw="_error_4qytd_45",Xw="_info_4qytd_50",vf={root:Vw,neutral:Gw,primary:Yw,success:Kw,warning:Qw,error:Zw,info:Xw},ya=v.forwardRef(({variant:e="neutral",className:o,children:i,...s},l)=>n.jsx("span",{ref:l,className:ie(vf.root,vf[e],o),...s,children:i}));ya.displayName="Badge";const Jw=({checked:e})=>n.jsx("span",{className:bt.taSwitch,"data-checked":e||void 0,"aria-hidden":"true",children:n.jsx("span",{className:bt.taSwitchThumb})}),e6=({checked:e})=>n.jsx("span",{className:bt.taCheckbox,"data-checked":e||void 0,"aria-hidden":"true",children:e&&n.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",children:n.jsx("path",{d:"M1.5 5L4 7.5L8.5 2.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),t6=({checked:e})=>n.jsx("span",{className:bt.taRadio,"data-checked":e||void 0,"aria-hidden":"true",children:e&&n.jsx("span",{className:bt.taRadioDot})}),n6=({count:e,label:o})=>{const i=e!==void 0?String(e):o;return i?n.jsx(ya,{"aria-hidden":"true",children:i}):null},r6=({expanded:e})=>n.jsx("span",{className:bt.taExpand,"data-expanded":e||void 0,"aria-hidden":"true",children:n.jsx(bn,{size:16,color:"currentColor"})}),o6=({variant:e})=>n.jsx("span",{className:ie(bt.taStatus,bt[`taStatus_${e}`]),"aria-hidden":"true"}),a6=new Set(["badge","status"]),xn=v.forwardRef(({label:e,description:o,leadingSlot:i,trailingSlot:s,trailingAction:l,checked:d,defaultChecked:p=!1,onCheckedChange:m,badgeCount:g,badgeLabel:y,expanded:x=!1,statusVariant:b="success",divider:k=!0,size:S="md",interactive:_,selected:j=!1,destructive:N=!1,disabled:$=!1,className:M,onClick:C,onKeyDown:z,...R},L)=>{const T=l==="switch"||l==="checkbox"||l==="radio",[E,B]=v.useState(p),G=T?d!==void 0?d:E:!1,J=_||!!C||T||l!==void 0&&!a6.has(l),W=l==="switch"?"switch":l==="checkbox"?"checkbox":l==="radio"?"radio":J?"button":void 0,K=v.useCallback(ce=>{if(!$){if(T){const se=!G;d===void 0&&B(se),m==null||m(se)}C==null||C(ce)}},[$,T,G,d,m,C]),te=v.useCallback(ce=>{J&&!$&&(ce.key==="Enter"||ce.key===" ")&&(ce.preventDefault(),K(ce)),z==null||z(ce)},[J,$,K,z]),ae=s??(()=>{if(!l)return null;switch(l){case"chevron":return n.jsx(bn,{size:16,color:"currentColor","aria-hidden":!0});case"external-link":return n.jsx(Bu,{size:16,color:"currentColor","aria-hidden":!0});case"switch":return n.jsx(Jw,{checked:G});case"checkbox":return n.jsx(e6,{checked:G});case"radio":return n.jsx(t6,{checked:G});case"badge":return n.jsx(n6,{count:g,label:y});case"expand":return n.jsx(r6,{expanded:x});case"status":return n.jsx(o6,{variant:b});default:return null}})();return n.jsxs("div",{ref:L,role:W,tabIndex:J&&!$?0:void 0,"aria-checked":T?G:void 0,"aria-selected":j||void 0,"aria-disabled":$||void 0,"data-selected":j||void 0,"data-disabled":$||void 0,"data-destructive":N||void 0,"data-trailing-action":l??void 0,className:ie(bt.root,bt[S],k&&bt.divider,J&&bt.interactive,j&&bt.selected,N&&bt.destructive,$&&bt.disabled,M),onClick:$?void 0:K,onKeyDown:te,...R,children:[i&&n.jsx("div",{className:bt.leadingSlot,children:i}),n.jsxs("div",{className:bt.content,children:[n.jsx("span",{className:bt.label,children:e}),o&&n.jsx("span",{className:bt.description,children:o})]}),ae&&n.jsx("div",{className:bt.trailingSlot,children:ae})]})});xn.displayName="ListItem";const i6=v.forwardRef(({title:e,meta:o,icon:i,status:s,...l},d)=>n.jsx(xn,{ref:d,label:e,description:o,leadingSlot:i?n.jsx("span",{className:"alloy-icon-slot","aria-hidden":"true",children:i}):void 0,trailingSlot:n.jsx(No,{status:s}),...l}));i6.displayName="UltronActivityStreamItem";const s6="_root_1sz1z_7",l6="_status_1sz1z_50",Id={root:s6,"size-sm":"_size-sm_1sz1z_28","size-md":"_size-md_1sz1z_38",status:l6},Wu=v.forwardRef(({disabled:e=!1,size:o="md",escapeTarget:i,onEscape:s,className:l,children:d,...p},m)=>{const g=v.useRef(null),[y,x]=v.useState(""),b=v.Children.map(d,k=>{if(!v.isValidElement(k))return k;const S=k.props;return v.cloneElement(k,{groupDisabled:e||!!S.groupDisabled})});return v.useEffect(()=>{if(!i||!s)return;const k=S=>{S.key==="Escape"&&s()};return i.addEventListener("keydown",k),()=>i.removeEventListener("keydown",k)},[i,s]),v.useCallback(k=>x(k),[]),n.jsxs("div",{ref:m,"data-size":o,className:ie(Id.root,Id[`size-${o}`],l),...p,children:[b,n.jsx("span",{ref:g,className:Id.status,role:"status","aria-live":"polite",children:y})]})});Wu.displayName="ComposerActions";function Ed({size:e=24,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M4 16.2A4.5 4.5 0 0 1 7.5 8h.056A6.001 6.001 0 0 1 18.45 9.43 3.5 3.5 0 1 1 18 16.2",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M12 21v-9m0 0-3 3m3-3 3 3",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})}const Hu=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Hu.displayName="SearchSmIcon";const ol=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ol.displayName="Trash03Icon";const $0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};$0.displayName="SunIcon";const A0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4 12H20M20 12L14 6M20 12L14 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};A0.displayName="ArrowNarrowRightIcon";function qr({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 15.8369C19.4559 16.5683 20.7042 17.742 21.6153 19.2096C21.7957 19.5003 21.8859 19.6456 21.9171 19.8468C21.9805 20.2558 21.7008 20.7585 21.32 20.9204C21.1325 21 20.9217 21 20.5 21M16 11.5322C17.4817 10.7959 18.5 9.26686 18.5 7.5C18.5 5.73314 17.4817 4.20411 16 3.46776M14 7.5C14 9.98528 11.9853 12 9.50002 12C7.01474 12 5.00002 9.98528 5.00002 7.5C5.00002 5.01472 7.01474 3 9.50002 3C11.9853 3 14 5.01472 14 7.5ZM2.55925 18.9383C4.15356 16.5446 6.66939 15 9.50002 15C12.3306 15 14.8465 16.5446 16.4408 18.9383C16.7901 19.4628 16.9647 19.725 16.9446 20.0599C16.9289 20.3207 16.758 20.64 16.5496 20.7976C16.2819 21 15.9138 21 15.1777 21H3.82238C3.08619 21 2.7181 21 2.45046 20.7976C2.24207 20.64 2.07111 20.3207 2.05545 20.0599C2.03535 19.725 2.20998 19.4628 2.55925 18.9383Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function xf({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 20V4M6 20V16M12 20V10",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}function c6({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M20 8L16.0811 12.1827C15.9326 12.3412 15.8584 12.4204 15.7688 12.4614C15.6897 12.4976 15.6026 12.5125 15.516 12.5047C15.4179 12.4958 15.3215 12.4458 15.1287 12.3457L11.8713 10.6543C11.6785 10.5542 11.5821 10.5042 11.484 10.4953C11.3974 10.4875 11.3103 10.5024 11.2312 10.5386C11.1416 10.5796 11.0674 10.6588 10.9189 10.8173L7 15",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}const ml=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 15L12 20L17 15M7 9L12 4L17 9",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ml.displayName="ChevronSelectorVerticalIcon";const bo=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[n.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:o}),n.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:o,strokeWidth:d,strokeLinecap:"round",strokeLinejoin:"round"})]})};bo.displayName="ClipboardCheckIcon";const T0=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.25:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:o,strokeWidth:d})})};T0.displayName="SettingsGearIcon";const I0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 6L9 12L15 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};I0.displayName="ChevronLeftIcon";const E0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20C5 20 1 12 1 12A18.45 18.45 0 0 1 5.06 5.06M9.9 4.24A9.12 9.12 0 0 1 12 4C19 4 23 12 23 12A18.5 18.5 0 0 1 20.71 15.95M14.12 14.12A3 3 0 1 1 9.88 9.88",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M3 3L21 21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};E0.displayName="EyeOffIcon";const P0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};P0.displayName="StopIcon";const z0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M3 10L3 14M7.5 6L7.5 18M12 3V21M16.5 6V18M21 10V14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};z0.displayName="RecordingIcon";const O0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 9.00002V17M9.5 9.00002V17M14.5 9.00002V17M19 9.00002V17M3 18.6L3 19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7952 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7952 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.04 21 17.7599 20.891 17.546C20.7951 17.3579 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H4.6C4.03995 17 3.75992 17 3.54601 17.109C3.35785 17.2049 3.20487 17.3579 3.10899 17.546C3 17.7599 3 18.04 3 18.6ZM11.6529 3.07715L4.25291 4.7216C3.80585 4.82094 3.58232 4.87062 3.41546 4.99082C3.26829 5.09685 3.15273 5.24092 3.08115 5.40759C3 5.59654 3 5.82553 3 6.28349L3 7.40002C3 7.96007 3 8.2401 3.10899 8.45401C3.20487 8.64217 3.35785 8.79515 3.54601 8.89103C3.75992 9.00002 4.03995 9.00002 4.6 9.00002H19.4C19.9601 9.00002 20.2401 9.00002 20.454 8.89103C20.6422 8.79515 20.7951 8.64217 20.891 8.45401C21 8.2401 21 7.96007 21 7.40002V6.2835C21 5.82553 21 5.59655 20.9188 5.40759C20.8473 5.24092 20.7317 5.09685 20.5845 4.99082C20.4177 4.87062 20.1942 4.82094 19.7471 4.7216L12.3471 3.07715C12.2176 3.04837 12.1528 3.03398 12.0874 3.02824C12.0292 3.02314 11.9708 3.02314 11.9126 3.02824C11.8472 3.03398 11.7824 3.04837 11.6529 3.07715Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};O0.displayName="BankIcon";function Ll({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 20V4M12 4L6 10M12 4L18 10",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Ll.displayName="ArrowNarrowUpIcon";function D0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 4V20M12 20L18 14M12 20L6 14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}D0.displayName="ArrowNarrowDownIcon";function $l({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M20 12V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V12M12 17C9.79086 17 8 15.2091 8 13V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V13C16 15.2091 14.2091 17 12 17Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}$l.displayName="Microphone02Icon";const ha=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};ha.displayName="AlertTriangleIcon";const F0=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};F0.displayName="BankNote01Icon";const B0=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 5C13 6.10457 10.5376 7 7.5 7C4.46243 7 2 6.10457 2 5M13 5C13 3.89543 10.5376 3 7.5 3C4.46243 3 2 3.89543 2 5M13 5V6.5M2 5V17C2 18.1046 4.46243 19 7.5 19M7.5 11C7.33145 11 7.16468 10.9972 7 10.9918C4.19675 10.9 2 10.0433 2 9M7.5 15C4.46243 15 2 14.1046 2 13M22 11.5C22 12.6046 19.5376 13.5 16.5 13.5C13.4624 13.5 11 12.6046 11 11.5M22 11.5C22 10.3954 19.5376 9.5 16.5 9.5C13.4624 9.5 11 10.3954 11 11.5M22 11.5V19C22 20.1046 19.5376 21 16.5 21C13.4624 21 11 20.1046 11 19V11.5M22 15.25C22 16.3546 19.5376 17.25 16.5 17.25C13.4624 17.25 11 16.3546 11 15.25",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};B0.displayName="CoinsStacked03Icon";function W0({size:e=16,color:o="currentColor",...i}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[n.jsx("path",{d:"M12 2V22",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",stroke:o,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}const Uu=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};Uu.displayName="Map01Icon";const H0=({size:e=16,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:[n.jsx("path",{d:"M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 16.0586V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37369 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37369 17.2077 3.52345 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L20.177 17.4573C20.4766 17.2909 20.6263 17.2077 20.7354 17.0893C20.8318 16.9847 20.9049 16.8606 20.9495 16.7254C21 16.5726 21 16.4013 21 16.0586Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M16.5 9.5L7.5 4.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})]})};H0.displayName="PackageIcon";const U0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H17.4262C18.907 22 20.1662 20.9197 20.3914 19.4562L21.4683 12.4562C21.7479 10.6389 20.3418 9 18.5032 9H15C14.4477 9 14 8.55228 14 8V4.46584C14 3.10399 12.896 2 11.5342 2C11.2093 2 10.915 2.1913 10.7831 2.48812L7.26394 10.4061C7.10344 10.7673 6.74532 11 6.35013 11H4C2.89543 11 2 11.8954 2 13Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};U0.displayName="ThumbsUpIcon";const q0=({size:e=24,color:o="currentColor",strokeWidth:i,...s})=>{const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M17.0001 2V13M22.0001 9.8V5.2C22.0001 4.07989 22.0001 3.51984 21.7821 3.09202C21.5903 2.71569 21.2844 2.40973 20.908 2.21799C20.4802 2 19.9202 2 18.8001 2H8.11806C6.65658 2 5.92584 2 5.33563 2.26743C4.81545 2.50314 4.37335 2.88242 4.06129 3.36072C3.70722 3.90339 3.59611 4.62564 3.37388 6.07012L2.8508 9.47012C2.5577 11.3753 2.41114 12.3279 2.69386 13.0691C2.94199 13.7197 3.4087 14.2637 4.01398 14.6079C4.70358 15 5.66739 15 7.59499 15H8.40005C8.96011 15 9.24013 15 9.45404 15.109C9.64221 15.2049 9.79519 15.3578 9.89106 15.546C10.0001 15.7599 10.0001 16.0399 10.0001 16.6V19.5342C10.0001 20.896 11.104 22 12.4659 22C12.7907 22 13.0851 21.8087 13.217 21.5119L16.5778 13.9502C16.7306 13.6062 16.807 13.4343 16.9278 13.3082C17.0346 13.1967 17.1658 13.1115 17.311 13.0592C17.4753 13 17.6635 13 18.0398 13H18.8001C19.9202 13 20.4802 13 20.908 12.782C21.2844 12.5903 21.5903 12.2843 21.7821 11.908C22.0001 11.4802 22.0001 10.9201 22.0001 9.8Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})};q0.displayName="ThumbsDownIcon";function qu({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 21V15.6C15 15.0399 15 14.7599 14.891 14.546C14.7951 14.3578 14.6422 14.2049 14.454 14.109C14.2401 14 13.9601 14 13.4 14H10.6C10.0399 14 9.75992 14 9.54601 14.109C9.35785 14.2049 9.20487 14.3578 9.10899 14.546C9 14.7599 9 15.0399 9 15.6V21M3 7C3 8.65685 4.34315 10 6 10C7.65685 10 9 8.65685 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 8.65685 16.3431 10 18 10C19.6569 10 21 8.65685 21 7M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V6.2C21 5.0799 21 4.51984 20.782 4.09202C20.5903 3.71569 20.2843 3.40973 19.908 3.21799C19.4802 3 18.9201 3 17.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.07989 3 6.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}qu.displayName="Building02Icon";function Vu({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Vu.displayName="Building05Icon";function Si({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M9 12L11 14L15.5 9.5M7.33377 3.8187C8.1376 3.75455 8.90071 3.43846 9.51447 2.91542C10.9467 1.69486 13.0533 1.69486 14.4855 2.91542C15.0993 3.43846 15.8624 3.75455 16.6662 3.8187C18.5421 3.96839 20.0316 5.45794 20.1813 7.33377C20.2455 8.1376 20.5615 8.90071 21.0846 9.51447C22.3051 10.9467 22.3051 13.0533 21.0846 14.4855C20.5615 15.0993 20.2455 15.8624 20.1813 16.6662C20.0316 18.5421 18.5421 20.0316 16.6662 20.1813C15.8624 20.2455 15.0993 20.5615 14.4855 21.0846C13.0533 22.3051 10.9467 22.3051 9.51447 21.0846C8.90071 20.5615 8.1376 20.2455 7.33377 20.1813C5.45794 20.0316 3.96839 18.5421 3.8187 16.6662C3.75455 15.8624 3.43846 15.0993 2.91542 14.4855C1.69486 13.0533 1.69486 10.9467 2.91542 9.51447C3.43846 8.90071 3.75455 8.1376 3.8187 7.33377C3.96839 5.45794 5.45794 3.96839 7.33377 3.8187Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Si.displayName="CheckVerified01Icon";function V0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 15C4.06812 15 3.60218 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H12C12.9319 2 13.3978 2 13.7654 2.15224C14.2554 2.35523 14.6448 2.74458 14.8478 3.23463C15 3.60218 15 4.06812 15 5M12.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V12.2C22 11.0799 22 10.5198 21.782 10.092C21.5903 9.71569 21.2843 9.40973 20.908 9.21799C20.4802 9 19.9201 9 18.8 9H12.2C11.0799 9 10.5198 9 10.092 9.21799C9.71569 9.40973 9.40973 9.71569 9.21799 10.092C9 10.5198 9 11.0799 9 12.2V18.8C9 19.9201 9 20.4802 9.21799 20.908C9.40973 21.2843 9.71569 21.5903 10.092 21.782C10.5198 22 11.0799 22 12.2 22Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}V0.displayName="Copy01Icon";function G0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z",fill:o})})}G0.displayName="DotsVerticalIcon";function Y0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 10L14 6M2.49997 21.5L5.88434 21.124C6.29783 21.078 6.50457 21.055 6.69782 20.9925C6.86926 20.937 7.03242 20.8586 7.18286 20.7594C7.35242 20.6475 7.49951 20.5005 7.7937 20.2063L21 7C22.1046 5.89543 22.1046 4.10457 21 3C19.8954 1.89543 18.1046 1.89543 17 3L3.7937 16.2063C3.49952 16.5005 3.35242 16.6475 3.24061 16.8171C3.1414 16.9676 3.06298 17.1307 3.00748 17.3022C2.94493 17.4954 2.92195 17.7021 2.87601 18.1156L2.49997 21.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Y0.displayName="Edit02Icon";function Gu({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12.7076 18.3639L11.2933 19.7781C9.34072 21.7308 6.1749 21.7308 4.22228 19.7781C2.26966 17.8255 2.26966 14.6597 4.22228 12.7071L5.63649 11.2929M18.3644 12.7071L19.7786 11.2929C21.7312 9.34024 21.7312 6.17441 19.7786 4.22179C17.826 2.26917 14.6602 2.26917 12.7076 4.22179L11.2933 5.636M8.50045 15.4999L15.5005 8.49994",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Gu.displayName="Link01Icon";function Al({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 9L21 3M21 3H15M21 3L13 11M10 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V14",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Al.displayName="LinkExternal01Icon";function K0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M15 4.6C15 4.03995 15 3.75992 14.891 3.54601C14.7951 3.35785 14.6422 3.20487 14.454 3.10899C14.2401 3 13.9601 3 13.4 3H10.6C10.0399 3 9.75992 3 9.54601 3.10899C9.35785 3.20487 9.20487 3.35785 9.10899 3.54601C9 3.75992 9 4.03995 9 4.6V7.4C9 7.96005 9 8.24008 8.89101 8.45399C8.79513 8.64215 8.64215 8.79513 8.45399 8.89101C8.24008 9 7.96005 9 7.4 9H4.6C4.03995 9 3.75992 9 3.54601 9.10899C3.35785 9.20487 3.20487 9.35785 3.10899 9.54601C3 9.75992 3 10.0399 3 10.6V13.4C3 13.9601 3 14.2401 3.10899 14.454C3.20487 14.6422 3.35785 14.7951 3.54601 14.891C3.75992 15 4.03995 15 4.6 15H7.4C7.96005 15 8.24008 15 8.45399 15.109C8.64215 15.2049 8.79513 15.3578 8.89101 15.546C9 15.7599 9 16.0399 9 16.6V19.4C9 19.9601 9 20.2401 9.10899 20.454C9.20487 20.6422 9.35785 20.7951 9.54601 20.891C9.75992 21 10.0399 21 10.6 21H13.4C13.9601 21 14.2401 21 14.454 20.891C14.6422 20.7951 14.7951 20.6422 14.891 20.454C15 20.2401 15 19.9601 15 19.4V16.6C15 16.0399 15 15.7599 15.109 15.546C15.2049 15.3578 15.3578 15.2049 15.546 15.109C15.7599 15 16.0399 15 16.6 15H19.4C19.9601 15 20.2401 15 20.454 14.891C20.6422 14.7951 20.7951 14.6422 20.891 14.454C21 14.2401 21 13.9601 21 13.4V10.6C21 10.0399 21 9.75992 20.891 9.54601C20.7951 9.35785 20.6422 9.20487 20.454 9.10899C20.2401 9 19.9601 9 19.4 9L16.6 9C16.0399 9 15.7599 9 15.546 8.89101C15.3578 8.79513 15.2049 8.64215 15.109 8.45399C15 8.24008 15 7.96005 15 7.4V4.6Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}K0.displayName="MedicalCrossIcon";function gl({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M21 12C21 16.9706 16.9706 21 12 21C10.8029 21 9.6603 20.7663 8.61549 20.3419C8.41552 20.2607 8.31554 20.2201 8.23472 20.202C8.15566 20.1843 8.09715 20.1778 8.01613 20.1778C7.9333 20.1778 7.84309 20.1928 7.66265 20.2229L4.10476 20.8159C3.73218 20.878 3.54589 20.909 3.41118 20.8512C3.29328 20.8007 3.19933 20.7067 3.14876 20.5888C3.09098 20.4541 3.12203 20.2678 3.18413 19.8952L3.77711 16.3374C3.80718 16.1569 3.82222 16.0667 3.82221 15.9839C3.8222 15.9028 3.81572 15.8443 3.798 15.7653C3.77988 15.6845 3.73927 15.5845 3.65806 15.3845C3.23374 14.3397 3 13.1971 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}gl.displayName="MessageCircle02Icon";function Yu({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M5 12H19",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Yu.displayName="MinusIcon";function Q0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Q0.displayName="Moon01Icon";function Z0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M12.0004 15L12.0004 22M8.00043 7.30813V9.43875C8.00043 9.64677 8.00043 9.75078 7.98001 9.85026C7.9619 9.93852 7.93194 10.0239 7.89095 10.1042C7.84474 10.1946 7.77977 10.2758 7.64982 10.4383L6.08004 12.4005C5.4143 13.2327 5.08143 13.6487 5.08106 13.9989C5.08073 14.3035 5.21919 14.5916 5.4572 14.7815C5.73088 15 6.26373 15 7.32943 15H16.6714C17.7371 15 18.27 15 18.5437 14.7815C18.7817 14.5916 18.9201 14.3035 18.9198 13.9989C18.9194 13.6487 18.5866 13.2327 17.9208 12.4005L16.351 10.4383C16.2211 10.2758 16.1561 10.1946 16.1099 10.1042C16.0689 10.0239 16.039 9.93852 16.0208 9.85026C16.0004 9.75078 16.0004 9.64677 16.0004 9.43875V7.30813C16.0004 7.19301 16.0004 7.13544 16.0069 7.07868C16.0127 7.02825 16.0223 6.97833 16.0357 6.92937C16.0507 6.87424 16.0721 6.8208 16.1149 6.71391L17.1227 4.19423C17.4168 3.45914 17.5638 3.09159 17.5025 2.79655C17.4489 2.53853 17.2956 2.31211 17.0759 2.1665C16.8247 2 16.4289 2 15.6372 2H8.36368C7.57197 2 7.17611 2 6.92494 2.1665C6.70529 2.31211 6.55199 2.53853 6.49838 2.79655C6.43707 3.09159 6.58408 3.45914 6.87812 4.19423L7.88599 6.71391C7.92875 6.8208 7.95013 6.87424 7.96517 6.92937C7.97853 6.97833 7.98814 7.02825 7.99392 7.07868C8.00043 7.13544 8.00043 7.19301 8.00043 7.30813Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}Z0.displayName="Pin01Icon";function X0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M8.8125 10.4167L10.9375 12.5278L15.7188 7.77778M20.5 21.5V7.56667C20.5 5.79317 20.5 4.90642 20.1526 4.22903C19.847 3.63318 19.3594 3.14875 18.7596 2.84515C18.0778 2.5 17.1852 2.5 15.4 2.5H8.6C6.81483 2.5 5.92225 2.5 5.24041 2.84515C4.64064 3.14875 4.15301 3.63318 3.84742 4.22903C3.5 4.90642 3.5 5.79317 3.5 7.56667V21.5L6.42188 19.3889L9.07812 21.5L12 19.3889L14.9219 21.5L17.5781 19.3889L20.5 21.5Z",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}X0.displayName="ReceiptCheckIcon";function J0({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}J0.displayName="Trash01Icon";function du({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M4 16.2422C2.79401 15.435 2 14.0602 2 12.5C2 10.1564 3.79151 8.23129 6.07974 8.01937C6.54781 5.17213 9.02024 3 12 3C14.9798 3 17.4522 5.17213 17.9203 8.01937C20.2085 8.23129 22 10.1564 22 12.5C22 14.0602 21.206 15.435 20 16.2422M8 16L12 12M12 12L16 16M12 12V21",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}du.displayName="UploadCloud01Icon";function gi({size:e=16,color:o="currentColor",strokeWidth:i,...s}){const l=typeof e=="number"?e:parseFloat(e),d=i??(l<=12?2:l<=16?1.75:l<=20?1.5:1.25);return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",strokeWidth:d,...s,children:n.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:o,strokeLinecap:"round",strokeLinejoin:"round"})})}gi.displayName="XCloseIcon";const d6="_base_i93xz_11",u6="_icon_i93xz_45",p6="_sendReady_i93xz_65",h6="_sendStreaming_i93xz_66",f6="_sendDisabled_i93xz_67",m6="_sendError_i93xz_68",g6="_attachIdle_i93xz_131",v6="_attachDisabled_i93xz_145",x6="_attachError_i93xz_152",y6="_voiceIdle_i93xz_165",w6="_voiceRecording_i93xz_179",b6="_voiceDisabled_i93xz_189",k6="_iconStack_i93xz_200",_6="_iconLayer_i93xz_209",xt={base:d6,icon:u6,sendReady:p6,sendStreaming:h6,sendDisabled:f6,sendError:m6,attachIdle:g6,attachDisabled:v6,attachError:x6,voiceIdle:y6,voiceRecording:w6,voiceDisabled:b6,iconStack:k6,iconLayer:_6},C6={hidden:void 0,ready:xt.sendReady,"disabled-invalid":xt.sendDisabled,streaming:xt.sendStreaming,error:xt.sendError},j6=(e,o,i)=>{switch(e){case"ready":return"Send message";case"disabled-invalid":return o?`Cannot send: ${o}`:"Cannot send";case"streaming":return"Stop generating";case"error":return i?`Retry sending: ${i}`:"Retry sending";case"hidden":return""}},wa=v.forwardRef(({state:e,onSend:o,onStop:i,onRetry:s,invalidReason:l,errorMessage:d,groupDisabled:p,className:m,style:g,...y},x)=>{const b=v.useRef(null),k=v.useRef(null),S=v.useCallback(C=>{k.current=C,typeof x=="function"?x(C):x&&(x.current=C)},[x]),_=v.useCallback(()=>{if(e==="ready"){o==null||o();return}if(e==="streaming"){i==null||i();return}if(e==="error"){const C=k.current;C&&(C.dataset.pressed="true",b.current&&clearTimeout(b.current),b.current=setTimeout(()=>{C.dataset.pressed="false"},140)),s==null||s()}},[e,o,i,s]);if(e==="hidden")return null;const j=!p&&(e==="ready"||e==="streaming"||e==="error"),N=j6(e,l,d),$=e==="disabled-invalid"?l??"Cannot send":e==="error"?d??"Send failed — click to retry":null,M=n.jsx("button",{ref:S,type:"button","data-composer-action":"send","data-state":e,className:ie(xt.base,C6[e],m),style:g,"aria-label":N,disabled:!j,onClick:_,...y,children:n.jsxs("span",{className:xt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-send)",height:"var(--composer-btn-icon-send)"},children:[n.jsx("span",{className:xt.iconLayer,"data-active":e==="ready"||e==="disabled-invalid"?"true":"false",children:n.jsx(Ll,{size:"100%",strokeWidth:2})}),n.jsx("span",{className:xt.iconLayer,"data-active":e==="streaming"?"true":"false",children:n.jsx(P0,{size:"100%",strokeWidth:1.75})}),n.jsx("span",{className:xt.iconLayer,"data-active":e==="error"?"true":"false",children:n.jsx(ji,{size:"100%",strokeWidth:2})})]})});return $?n.jsx(yr,{content:$,placement:"top",children:M}):M});wa.displayName="ComposerSendButton";const S6={idle:xt.attachIdle,disabled:xt.attachDisabled,error:xt.attachError},N6=(e,o,i)=>{switch(e){case"idle":return"Add attachment";case"disabled":return o?`Attachments unavailable: ${o}`:"Attachments unavailable";case"error":return i?`Attachment failed: ${i}`:"Attachment failed"}},eg=v.forwardRef(({state:e,onSelect:o,accept:i,multiple:s=!0,disabledReason:l,errorMessage:d,groupDisabled:p,className:m,style:g,...y},x)=>{const b=v.useRef(null),k=v.useCallback(()=>{var M;(e==="idle"||e==="error")&&((M=b.current)==null||M.click())},[e]),S=v.useCallback(M=>{const C=M.target.files;C&&C.length>0&&(o==null||o(C)),M.target.value=""},[o]),_=!p&&e!=="disabled",j=N6(e,l,d),N=e==="disabled"?l??"Attachments unavailable":e==="error"?d??"Attachment failed":null,$=n.jsxs("button",{ref:x,type:"button","data-composer-action":"attachment","data-state":e,className:ie(xt.base,S6[e],m),style:g,"aria-label":j,disabled:!_,onClick:k,...y,children:[n.jsx("span",{className:xt.icon,style:{width:"var(--composer-btn-icon-attach)",height:"var(--composer-btn-icon-attach)"},children:n.jsx(So,{size:"100%",strokeWidth:2})}),n.jsx("input",{ref:b,type:"file",accept:i,multiple:s,onChange:S,style:{display:"none"},tabIndex:-1,"aria-hidden":"true"})]});return N?n.jsx(yr,{content:N,placement:"top",children:$}):$});eg.displayName="ComposerAttachment";const M6={idle:xt.voiceIdle,recording:xt.voiceRecording,disabled:xt.voiceDisabled},R6=(e,o)=>{switch(e){case"idle":return"Start voice input";case"recording":return"Stop recording";case"disabled":return o?`Voice unavailable: ${o}`:"Voice unavailable"}},tg=v.forwardRef(({state:e,onStartRecording:o,onStopRecording:i,disabledReason:s,groupDisabled:l,className:d,style:p,...m},g)=>{const y=v.useCallback(()=>{if(e==="idle"){o==null||o();return}if(e==="recording"){i==null||i();return}},[e,o,i]),x=!l&&e!=="disabled",b=R6(e,s),k=e==="disabled"?s??"Voice unavailable":null,S=n.jsx("button",{ref:g,type:"button","data-composer-action":"voice","data-state":e,className:ie(xt.base,M6[e],d),style:p,"aria-label":b,"aria-pressed":e==="recording"||void 0,disabled:!x,onClick:y,...m,children:n.jsxs("span",{className:xt.iconStack,"aria-hidden":"true",style:{width:"var(--composer-btn-icon-voice)",height:"var(--composer-btn-icon-voice)"},children:[n.jsx("span",{className:xt.iconLayer,"data-active":e!=="recording"?"true":"false",children:n.jsx($l,{size:"100%",strokeWidth:1.5})}),n.jsx("span",{className:xt.iconLayer,"data-active":e==="recording"?"true":"false",children:n.jsx(z0,{size:"100%",strokeWidth:1.5})})]})});return k?n.jsx(yr,{content:k,placement:"top",children:S}):S});tg.displayName="ComposerVoiceButton";const L6=v.forwardRef(({value:e,onChange:o,onSubmit:i,placeholder:s="Ask Ultron…",sending:l=!1,disabled:d=!1,voice:p=!0,maxRows:m=4,radius:g="lg",leadingActions:y,className:x},b)=>{const k=l?"streaming":e.trim().length===0?"hidden":"ready";return n.jsx(k0,{className:x,style:{flex:"0 0 auto"},children:n.jsx(_0,{ref:b,value:e,onChange:o,onSubmit:i,placeholder:s,maxRows:m,radius:g,disabled:d,children:n.jsxs(Wu,{size:"md",disabled:d,children:[y,p&&n.jsx(tg,{state:d?"disabled":"idle"}),n.jsx(wa,{state:k,onSend:i,onStop:i})]})})})});L6.displayName="UltronCommandBar";const $6=v.forwardRef(({stages:e,state:o="live",duration:i,...s},l)=>n.jsx(Ou,{ref:l,state:o,duration:i,...s,children:e.map((d,p)=>n.jsx(Sl,{type:d.type??"content",status:d.status??"pending",icon:d.icon,detail:d.detail,children:d.label},p))}));$6.displayName="UltronThreadTimeline";const A6="_root_ghwhu_10",T6="_badge_ghwhu_27",I6="_badgeIcon_ghwhu_38",E6="_green_ghwhu_59",P6="_yellow_ghwhu_60",z6="_matcha_ghwhu_61",O6="_purple_ghwhu_62",D6="_blue_ghwhu_63",F6="_azure_ghwhu_64",B6="_red_ghwhu_65",W6="_orange_ghwhu_66",H6="_pink_ghwhu_67",U6="_slate_ghwhu_68",q6="_content_ghwhu_73",V6="_label_ghwhu_83",G6="_valueRow_ghwhu_97",Y6="_change_ghwhu_106",K6="_value_ghwhu_97",fr={root:A6,badge:T6,badgeIcon:I6,green:E6,yellow:P6,matcha:z6,purple:O6,blue:D6,azure:F6,red:B6,orange:W6,pink:H6,slate:U6,content:q6,label:V6,valueRow:G6,change:Y6,value:K6},Q6=v.forwardRef(({color:e="slate",icon:o,label:i,value:s,change:l,className:d,...p},m)=>n.jsxs("div",{ref:m,className:ie(fr.root,d),...p,children:[n.jsx("div",{className:ie(fr.badge,fr[e]),"aria-hidden":"true",children:n.jsx("span",{className:fr.badgeIcon,children:o})}),n.jsxs("div",{className:fr.content,children:[n.jsx("span",{className:fr.label,children:i}),n.jsxs("div",{className:fr.valueRow,children:[n.jsx("span",{className:fr.value,children:s}),l!=null&&n.jsx("span",{className:fr.change,children:l})]})]})]}));Q6.displayName="DataCard";const Z6="_root_d0j6n_7",X6="_icon_d0j6n_21",J6="_text_d0j6n_33",e8="_positive_d0j6n_41",t8="_warning_d0j6n_45",n8="_negative_d0j6n_49",Hs={root:Z6,icon:X6,text:J6,positive:e8,warning:t8,negative:n8};function r8(e){return e==="up"?"positive":"negative"}const o8=v.forwardRef((e,o)=>{const{mode:i,value:s,className:l,...d}=e,p=i==="trend"?e.severity??r8(e.trend):e.severity,{severity:m,...g}=d,y=i==="trend"?(({trend:b,severity:k,...S})=>S)(g):g,x=i==="trend"?e.trend==="up"?Ll:D0:null;return n.jsxs("span",{ref:o,className:ie(Hs.root,Hs[p],l),...y,children:[n.jsx("span",{className:Hs.text,children:s}),x&&n.jsx("span",{className:Hs.icon,"aria-hidden":"true",children:n.jsx(x,{size:14})})]})});o8.displayName="ValueChangeLabel";const a8="_root_1lq10_1",i8="_horizontal_1lq10_9",s8="_vertical_1lq10_15",l8="_solid_1lq10_32",c8="_dashed_1lq10_36",Us={root:a8,horizontal:i8,vertical:s8,"thickness-1":"_thickness-1_1lq10_23","thickness-2":"_thickness-2_1lq10_27",solid:l8,dashed:c8},d8=v.forwardRef(({thickness:e=1,orientation:o="horizontal",variant:i="solid",className:s,...l},d)=>n.jsx("hr",{ref:d,role:"separator","aria-orientation":o,className:ie(Us.root,Us[`thickness-${e}`],Us[o],Us[i],s),...l}));d8.displayName="Divider";const u8="_overlay_vxgy2_9",p8="_dialogOverlayIn_vxgy2_1",h8="_dialogOverlayOut_vxgy2_1",f8="_dialog_vxgy2_38",m8="_dialogIn_vxgy2_1",g8="_dialogOut_vxgy2_1",v8="_sm_vxgy2_88",x8="_md_vxgy2_89",y8="_lg_vxgy2_90",w8="_header_vxgy2_95",b8="_title_vxgy2_107",k8="_closeBtn_vxgy2_120",_8="_content_vxgy2_152",C8="_footer_vxgy2_163",Kr={overlay:u8,dialogOverlayIn:p8,dialogOverlayOut:h8,dialog:f8,dialogIn:m8,dialogOut:g8,sm:v8,md:x8,lg:y8,header:w8,title:b8,closeBtn:k8,content:_8,footer:C8},j8=v.forwardRef(({onClose:e,children:o,className:i,...s},l)=>n.jsxs("div",{ref:l,className:ie(Kr.header,i),...s,children:[n.jsx("span",{className:Kr.title,children:o}),e&&n.jsx("button",{type:"button",className:Kr.closeBtn,onClick:e,"aria-label":"Close",children:n.jsx(Ci,{size:16})})]}));j8.displayName="DialogHeader";const S8=v.forwardRef(({children:e,className:o,...i},s)=>n.jsx("div",{ref:s,className:ie(Kr.content,o),...i,children:e}));S8.displayName="DialogContent";const N8=v.forwardRef(({children:e,className:o,...i},s)=>n.jsx("div",{ref:s,className:ie(Kr.footer,o),...i,children:e}));N8.displayName="DialogFooter";function M8({open:e,onClose:o,size:i="sm",children:s,"aria-label":l,"aria-labelledby":d}){const p=v.useRef(null),m=180,[g,y]=v.useState(e);return v.useEffect(()=>{if(e){y(!0);return}const x=setTimeout(()=>y(!1),m);return()=>clearTimeout(x)},[e]),v.useEffect(()=>{if(!e)return;const x=b=>{b.key==="Escape"&&o()};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[e,o]),v.useEffect(()=>{if(!e)return;const x=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=x}},[e]),g?_i.createPortal(n.jsx("div",{className:Kr.overlay,"data-state":e?"open":"closed",role:"dialog","aria-modal":"true","aria-label":l,"aria-labelledby":d,onMouseDown:x=>{x.target===x.currentTarget&&o()},children:n.jsx("div",{ref:p,className:ie(Kr.dialog,Kr[i]),"data-state":e?"open":"closed",children:s})}),document.body):null}const R8="_root_1dntq_7",L8="_badge_1dntq_57",$8="_badgeIconSlot_1dntq_74",A8="_content_1dntq_82",T8="_text_1dntq_90",I8="_title_1dntq_99",E8="_description_1dntq_120",P8="_actions_1dntq_131",z8="_dot_1dntq_137",O8="_actionLink_1dntq_144",D8="_primaryAction_1dntq_162",F8="_trailing_1dntq_170",Ht={root:R8,badge:L8,badgeIconSlot:$8,content:A8,text:T8,title:I8,description:E8,actions:P8,dot:z8,actionLink:O8,primaryAction:D8,trailing:F8},B8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M2 2L8 8M8 2L2 8",stroke:"currentColor",strokeLinecap:"round"})}),W8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M1.5 5L3.5 7.5L8.5 2.5",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),H8=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M5 1.667V6.405M5 8.333H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),yf=()=>n.jsx("svg",{viewBox:"0 0 10 10",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M5 8.333V3.595M5 1.667H5.002",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})}),U8={error:B8,warning:H8,success:W8,info:yf,feature:yf},ng=v.forwardRef(({status:e="info",variant:o="lighter",size:i="sm",title:s,description:l,action:d,onAction:p,learnMore:m,onLearnMore:g,onDismiss:y,className:x,...b},k)=>{const S=U8[e],_=i==="lg",j=y?n.jsx(Ee,{variant:"ghost",size:"xs",iconOnly:!0,onClick:y,"aria-label":"Dismiss",children:n.jsx(Ci,{size:12})}):null;return n.jsxs("div",{ref:k,role:"alert",className:ie(Ht.root,x),"data-status":e,"data-variant":o,"data-size":i,...b,children:[n.jsx("span",{className:Ht.badge,"aria-hidden":"true",children:n.jsx("span",{className:ie("alloy-icon-slot",Ht.badgeIconSlot),children:n.jsx(S,{})})}),_?n.jsxs("div",{className:Ht.content,children:[n.jsxs("div",{className:Ht.text,children:[n.jsx("p",{className:Ht.title,children:s}),l&&n.jsx("p",{className:Ht.description,children:l})]}),(d||m)&&n.jsxs("div",{className:Ht.actions,children:[d&&n.jsx("button",{type:"button",className:ie(Ht.actionLink,Ht.primaryAction),onClick:p,children:d}),d&&m&&n.jsx("span",{className:Ht.dot,"aria-hidden":"true",children:"·"}),m&&n.jsx("button",{type:"button",className:Ht.actionLink,onClick:g,children:m})]})]}):n.jsx("p",{className:Ht.title,children:s}),_?j:(d||y)&&n.jsxs("div",{className:Ht.trailing,children:[d&&n.jsx("button",{type:"button",className:ie(Ht.actionLink,Ht.primaryAction),onClick:p,children:d}),j]})]})});ng.displayName="Alert";const q8="_stack_x4xl7_11",V8="_item_x4xl7_28",G8="_itemExiting_x4xl7_33",uu={stack:q8,item:V8,itemExiting:G8},Y8=v.createContext(null);function K8({id:e,title:o,description:i,status:s,variant:l,size:d,action:p,onAction:m,duration:g,exiting:y,onRemove:x}){const b=v.useCallback(()=>x(e),[e,x]);return n.jsx("div",{className:ie(uu.item,y&&uu.itemExiting),onAnimationEnd:y?b:void 0,children:n.jsx(ng,{status:s,variant:l,size:d,title:o,description:i,action:p,onAction:m,onDismiss:b,style:{width:"100%"}})})}function Q8({toasts:e,onStartExit:o,onRemove:i}){return v.useEffect(()=>{const s=[];return e.forEach(l=>{l.duration>0&&!l.exiting&&s.push(setTimeout(()=>o(l.id),l.duration))}),()=>s.forEach(clearTimeout)},[e,o]),e.length===0?null:_i.createPortal(n.jsx("div",{className:uu.stack,"aria-live":"polite","aria-atomic":"false",children:e.map(s=>n.jsx(K8,{...s,onRemove:i},s.id))}),document.body)}function Z8({children:e}){const[o,i]=v.useState([]),s=v.useRef(0),l=v.useCallback(m=>{const g=`toast-${++s.current}`;return i(y=>[...y,{id:g,title:m.title,description:m.description,status:m.status??"info",variant:m.variant??"stroke",size:m.size??"sm",action:m.action,onAction:m.onAction,duration:m.duration??4e3,exiting:!1}]),g},[]),d=v.useCallback(m=>{i(g=>g.map(y=>y.id===m?{...y,exiting:!0}:y))},[]),p=v.useCallback(m=>{i(g=>g.filter(y=>y.id!==m))},[]);return n.jsxs(Y8.Provider,{value:{addToast:l,removeToast:d},children:[e,n.jsx(Q8,{toasts:o,onStartExit:d,onRemove:p})]})}const X8="_root_1s0ek_5",J8="_list_1s0ek_11",e9="_item_1s0ek_23",t9="_separator_1s0ek_31",n9="_link_1s0ek_47",r9="_current_1s0ek_68",o9="_iconSlot_1s0ek_76",Jn={root:X8,list:J8,item:e9,separator:t9,link:n9,current:r9,iconSlot:o9},a9=()=>n.jsx("span",{className:Jn.separator,"aria-hidden":"true",children:"/"}),i9=()=>n.jsx("span",{className:Jn.separator,"aria-hidden":"true",children:n.jsx("svg",{width:12,height:12,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M9 6L15 12L9 18",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})})}),s9=v.forwardRef(({items:e,separator:o="slash",className:i,...s},l)=>{const d=o==="chevron"?i9:a9;return n.jsx("nav",{ref:l,"aria-label":"Breadcrumb",className:ie(Jn.root,i),...s,children:n.jsx("ol",{className:Jn.list,children:e.map((p,m)=>{const g=m===e.length-1,y=!g&&(!!p.href||!!p.onClick);return n.jsxs("li",{className:Jn.item,children:[m>0&&n.jsx(d,{}),y?n.jsxs("a",{href:p.href,onClick:p.onClick,className:Jn.link,"aria-label":p.label,children:[p.icon&&n.jsx("span",{className:ie(Jn.iconSlot,"alloy-icon-slot"),children:p.icon}),n.jsx("span",{children:p.label})]}):n.jsxs("span",{className:ie(Jn.link,g&&Jn.current),"aria-current":g?"page":void 0,children:[p.icon&&n.jsx("span",{className:ie(Jn.iconSlot,"alloy-icon-slot"),children:p.icon}),n.jsx("span",{children:p.label})]})]},m)})})})});s9.displayName="Breadcrumb";const l9="_root_139vz_6",c9="_divider_139vz_14",d9="_item_139vz_19",u9="_label_139vz_25",p9="_description_139vz_26",h9="_chevron_139vz_27",f9="_iconSlot_139vz_28",m9="_hitTarget_139vz_32",g9="_size_sm_139vz_37",v9="_size_md_139vz_43",x9="_size_lg_139vz_49",y9="_header_139vz_59",w9="_headerContent_139vz_59",b9="_checkboxWrap_139vz_60",k9="_labelBlock_139vz_157",_9="_trailingSlot_139vz_60",C9="_body_139vz_199",j9="_bodyInner_139vz_209",S9="_bodyContent_139vz_214",Tt={root:l9,divider:c9,item:d9,label:u9,description:p9,chevron:h9,iconSlot:f9,hitTarget:m9,size_sm:g9,size_md:v9,size_lg:x9,header:y9,headerContent:w9,checkboxWrap:b9,labelBlock:k9,trailingSlot:_9,body:C9,bodyInner:j9,bodyContent:S9},N9="_root_17t97_6",M9="_disabled_17t97_12",R9="_sm_17t97_18",L9="_md_17t97_26",$9="_lg_17t97_34",A9="_controlWrap_17t97_43",T9="_input_17t97_52",I9="_box_17t97_67",E9="_boxChecked_17t97_96",P9="_boxError_17t97_106",z9="_labelWrap_17t97_116",O9="_label_17t97_116",D9="_error_17t97_138",F9="_required_17t97_140",B9="_description_17t97_145",hn={root:N9,disabled:M9,sm:R9,md:L9,lg:$9,controlWrap:A9,input:T9,box:I9,boxChecked:E9,boxError:P9,labelWrap:z9,label:O9,error:D9,required:F9,description:B9},rg=v.forwardRef(({checked:e,defaultChecked:o=!1,indeterminate:i=!1,onChange:s,disabled:l,error:d,size:p="md",label:m,description:g,id:y,name:x,value:b,required:k,className:S},_)=>{const j=v.useId(),N=y??j,$=v.useRef(null);v.useEffect(()=>{$.current&&($.current.indeterminate=i)},[i]);const M=e!==void 0,[C,z]=v.useState(o),R=M?e:C,L=E=>{M||z(E.target.checked),s==null||s(E.target.checked)},T=R||i;return n.jsxs("div",{className:ie(hn.root,hn[p],l&&hn.disabled,d&&hn.error,S),children:[n.jsxs("div",{className:hn.controlWrap,children:[n.jsx("input",{ref:E=>{$.current=E,typeof _=="function"?_(E):_&&(_.current=E)},type:"checkbox",id:N,name:x,value:b,checked:R,disabled:l,required:k,"aria-invalid":d||void 0,onChange:L,className:hn.input}),n.jsx("span",{className:ie(hn.box,T&&hn.boxChecked,d&&hn.boxError),"aria-hidden":"true",children:i?n.jsx("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:n.jsx("path",{d:"M1 1H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}):R?n.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:n.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})}):null})]}),(m||g)&&n.jsxs("div",{className:hn.labelWrap,children:[m&&n.jsxs("label",{htmlFor:N,className:hn.label,children:[m,k&&n.jsx("span",{className:hn.required,"aria-hidden":"true",children:" *"})]}),g&&n.jsx("span",{className:hn.description,children:g})]})]})});rg.displayName="Checkbox";const og=v.createContext(null),pu=v.createContext(0),ag=v.forwardRef(({type:e="multiple",collapsible:o=!0,value:i,defaultValue:s,onValueChange:l,divider:d=!0,size:p="md",disabled:m=!1,className:g,children:y,...x},b)=>{const k=v.useMemo(()=>Array.isArray(s)?new Set(s):typeof s=="string"?new Set([s]):new Set,[]),[S,_]=v.useState(k),j=i!==void 0,N=v.useMemo(()=>j?Array.isArray(i)?new Set(i):typeof i=="string"?new Set([i]):new Set:S,[j,i,S]),$=v.useCallback(z=>N.has(z),[N]),M=v.useCallback(z=>{const R=new Set(N);e==="single"?R.has(z)?o&&R.delete(z):(R.clear(),R.add(z)):R.has(z)?R.delete(z):R.add(z),j||_(R),l&&l(e==="single"?R.values().next().value??"":Array.from(R))},[N,e,o,j,l]),C=v.useMemo(()=>({type:e,collapsible:o,size:p,disabled:m,isExpanded:$,toggle:M}),[e,o,p,m,$,M]);return n.jsx("div",{ref:b,"data-accordion-root":"","data-divider":d||void 0,"data-disabled":m||void 0,"data-size":p,className:ie(Tt.root,d&&Tt.divider,g),...x,children:n.jsx(og.Provider,{value:C,children:n.jsx(pu.Provider,{value:0,children:y})})})});ag.displayName="Accordion";function qs(e,o){const i=e.closest("[data-accordion-root]");if(!i)return;const s=e.getAttribute("data-accordion-depth"),l=Array.from(i.querySelectorAll(`[data-accordion-header-button][data-accordion-depth="${s}"]`)).filter(m=>m.closest("[data-accordion-root]")===i);if(l.length===0)return;const d=l.indexOf(e);let p;switch(o){case"first":p=l[0];break;case"last":p=l[l.length-1];break;case"next":p=l[(d+1)%l.length];break;case"prev":p=l[(d-1+l.length)%l.length];break}p.focus()}const ig=v.forwardRef(({value:e,label:o,description:i,icon:s,leadingSlot:l,trailingSlot:d,chevronPosition:p="leading",selectable:m=!1,checked:g,defaultChecked:y=!1,indeterminate:x=!1,onCheckedChange:b,expanded:k,defaultExpanded:S=!1,onExpandedChange:_,disabled:j=!1,size:N,className:$,children:M,...C},z)=>{const R=v.useContext(og),L=v.useContext(pu),T=R!==null,E=N??(R==null?void 0:R.size)??"md",B=j||(R==null?void 0:R.disabled)||!1,[G,J]=v.useState(S);let W;T?W=e!==void 0?R.isExpanded(e):!1:k!==void 0?W=k:W=G;const K=v.useCallback(()=>{if(B)return;if(T){if(e===void 0)return;const A=R.isExpanded(e);R.toggle(e);const V=R.type==="single"&&!R.collapsible&&A?!0:!A;_==null||_(V);return}const I=!W;k===void 0&&J(I),_==null||_(I)},[B,T,R,e,W,k,_]),te=v.useCallback(I=>b==null?void 0:b(I),[b]),ae=v.useCallback(I=>{if(I.key==="Enter"||I.key===" "){I.preventDefault(),K();return}if(T)switch(I.key){case"ArrowDown":I.preventDefault(),qs(I.currentTarget,"next");break;case"ArrowUp":I.preventDefault(),qs(I.currentTarget,"prev");break;case"Home":I.preventDefault(),qs(I.currentTarget,"first");break;case"End":I.preventDefault(),qs(I.currentTarget,"last");break}},[K,T]),ce=v.useId(),se=`${ce}-header`,Q=`${ce}-body`,D=E==="sm"?16:E==="md"?18:20,H=l??n.jsxs(n.Fragment,{children:[m&&n.jsx("span",{className:Tt.checkboxWrap,children:n.jsx(rg,{size:E,checked:g,defaultChecked:y,indeterminate:x,disabled:B,onChange:te})}),s&&n.jsx("span",{className:Tt.iconSlot,"aria-hidden":"true",children:s})]});return n.jsxs("div",{ref:z,"data-accordion-item":"","data-expanded":W||void 0,"data-disabled":B||void 0,"data-size":E,"data-depth":L,className:ie(Tt.item,Tt[`size_${E}`],$),style:{"--accordion-depth":L},...C,children:[n.jsxs("div",{className:Tt.header,children:[n.jsx("button",{type:"button",id:se,"data-accordion-header-button":"","data-accordion-depth":L,className:Tt.hitTarget,"aria-expanded":W,"aria-controls":Q,"aria-disabled":B||void 0,disabled:B,onClick:K,onKeyDown:ae}),n.jsxs("div",{className:Tt.headerContent,children:[p==="leading"&&n.jsx("span",{className:Tt.chevron,"aria-hidden":"true",children:n.jsx(bn,{size:D,color:"currentColor"})}),H,n.jsxs("div",{className:Tt.labelBlock,children:[n.jsx("span",{className:Tt.label,children:o}),i&&n.jsx("span",{className:Tt.description,children:i})]}),d&&n.jsx("div",{className:Tt.trailingSlot,children:d}),p==="trailing"&&n.jsx("span",{className:Tt.chevron,"aria-hidden":"true",children:n.jsx(bn,{size:D,color:"currentColor"})})]})]}),n.jsx("div",{id:Q,role:"region","aria-labelledby":se,className:Tt.body,"aria-hidden":!W,children:n.jsx("div",{className:Tt.bodyInner,children:n.jsx("div",{className:Tt.bodyContent,children:n.jsx(pu.Provider,{value:L+1,children:M})})})})]})});ig.displayName="AccordionItem";const W9="_root_1vgip_7",H9="_fullWidth_1vgip_12",U9="_panel_1vgip_19",q9="_panelInner_1vgip_73",V9="_item_1vgip_81",G9="_groupHeading_1vgip_87",Y9="_groupHeadingSm_1vgip_96",K9="_groupHeadingLabel_1vgip_100",Q9="_groupHeadingCollapsible_1vgip_112",Z9="_groupChevron_1vgip_125",X9="_groupDivider_1vgip_139",Hn={root:W9,fullWidth:H9,panel:U9,panelInner:q9,item:V9,groupHeading:G9,groupHeadingSm:Y9,groupHeadingLabel:K9,groupHeadingCollapsible:Q9,groupChevron:Z9,groupDivider:X9};function J9({group:e,size:o,closeOnSelect:i,onClose:s}){const[l,d]=v.useState(e.defaultExpanded??!0);return n.jsxs("div",{children:[e.heading&&n.jsxs("div",{className:ie(Hn.groupHeading,o==="sm"&&Hn.groupHeadingSm,e.collapsible&&Hn.groupHeadingCollapsible),onClick:e.collapsible?()=>d(p=>!p):void 0,"aria-expanded":e.collapsible?l:void 0,children:[n.jsx("span",{className:Hn.groupHeadingLabel,children:e.heading}),e.collapsible&&n.jsx("span",{className:Hn.groupChevron,"data-expanded":l||void 0,"aria-hidden":"true",children:n.jsx(bn,{size:12})})]}),l&&n.jsx("div",{role:"group","aria-label":e.heading,children:e.options.map((p,m)=>{const g=p.trailingAction==="switch"||p.trailingAction==="checkbox"||p.trailingAction==="radio";return n.jsx(xn,{role:"menuitem",size:o,label:p.label,description:p.description,leadingSlot:p.leadingSlot,trailingAction:p.trailingAction,trailingSlot:p.trailingSlot,disabled:p.disabled,destructive:p.destructive,selected:p.selected,checked:p.checked,defaultChecked:p.defaultChecked,onCheckedChange:p.onCheckedChange,badgeCount:p.badgeCount,badgeLabel:p.badgeLabel,expanded:p.expanded,statusVariant:p.statusVariant,divider:p.divider??!1,className:Hn.item,onClick:()=>{var y;(y=p.onClick)==null||y.call(p),i&&!g&&s()}},p.id)})})]})}const Ku=v.forwardRef(({trigger:e,groups:o,size:i="sm",width:s=260,placement:l="bottom-start",open:d,defaultOpen:p=!1,onOpenChange:m,disabled:g=!1,closeOnSelect:y=!0,fullWidth:x=!1,className:b,...k},S)=>{const[_,j]=v.useState(p),N=v.useRef(null),$=d!==void 0?d:_,M=v.useCallback(z=>{N.current=z,S&&(typeof S=="function"?S(z):S.current=z)},[S]),C=v.useCallback(z=>{d===void 0&&j(z),m==null||m(z)},[d,m]);return v.useEffect(()=>{if(!$)return;const z=R=>{var L;(L=N.current)!=null&&L.contains(R.target)||C(!1)};return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[$,C]),v.useEffect(()=>{if(!$)return;const z=R=>{R.key==="Escape"&&C(!1)};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[$,C]),n.jsxs("div",{ref:M,className:ie(Hn.root,x&&Hn.fullWidth,b),...k,children:[n.jsx("div",{style:{display:x?"flex":"inline-flex",width:x?"100%":void 0},"aria-haspopup":"menu","aria-expanded":$,tabIndex:g?-1:0,onClick:g?void 0:()=>C(!$),onKeyDown:g?void 0:z=>{(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),C(!$))},children:e}),n.jsx("div",{className:Hn.panel,"data-open":$||void 0,"data-placement":l,style:{width:typeof s=="number"?`${s}px`:s},role:"menu","aria-orientation":"vertical",children:n.jsx("div",{className:Hn.panelInner,children:o.map((z,R)=>n.jsxs("div",{children:[R>0&&n.jsx("div",{className:Hn.groupDivider,"aria-hidden":"true"}),n.jsx(J9,{group:z,size:i,closeOnSelect:y,onClose:()=>C(!1)})]},z.id))})})]})});Ku.displayName="DropdownMenu";const eb="_hiddenInput_8457s_8",tb="_area_8457s_19",nb="_uploadIcon_8457s_53",rb="_textBlock_8457s_59",ob="_title_8457s_67",ab="_description_8457s_76",ib="_fileRow_8457s_88",sb="_fileIcon_8457s_96",lb="_fileName_8457s_101",cb="_successIcon_8457s_115",db="_removeBtn_8457s_121",ub="_progressWrap_8457s_145",pb="_progressBar_8457s_153",hb="_progressFill_8457s_161",fb="_progressLabel_8457s_168",mb="_errorRow_8457s_178",gb="_errorIcon_8457s_186",vb="_errorText_8457s_192",xb="_areaMulti_8457s_206",yb="_multiDropZone_8457s_214",wb="_fileList_8457s_244",bb="_fileListItem_8457s_254",kb="_inline_8457s_267",_b="_inlineIcon_8457s_309",Cb="_inlineText_8457s_330",jb="_inlineProgress_8457s_353",Sb="_inlineProgressFill_8457s_363",Nb="_footerSlot_8457s_429",He={hiddenInput:eb,area:tb,uploadIcon:nb,textBlock:rb,title:ob,description:ab,fileRow:ib,fileIcon:sb,fileName:lb,successIcon:cb,removeBtn:db,progressWrap:ub,progressBar:pb,progressFill:hb,progressLabel:fb,errorRow:mb,errorIcon:gb,errorText:vb,areaMulti:xb,multiDropZone:yb,fileList:wb,fileListItem:bb,inline:kb,inlineIcon:_b,inlineText:Cb,inlineProgress:jb,inlineProgressFill:Sb,footerSlot:Nb};function Pd(e){const o=e.name.lastIndexOf(".");return o!==-1?e.name.slice(o+1).toUpperCase():e.type?(e.type.split("/").pop()??"FILE").toUpperCase():"FILE"}const sg=v.forwardRef(({variant:e="area",multiple:o=!1,state:i="empty",progress:s=0,file:l,files:d,errorMessage:p,title:m="Choose a file or drag & drop it here.",description:g="JPEG, PNG, PDF, and MP4 formats, up to 50 MB.",accept:y,onFileSelect:x,onFilesSelect:b,onClear:k,onRemoveFile:S,fieldVariant:_="outlined",browseButtonVariant:j="tertiary",footerSlot:N,disabled:$=!1,className:M,...C},z)=>{const R=v.useRef(null),[L,T]=v.useState(!1),E=!$&&(o||i==="empty"),B=v.useCallback(()=>{var Q;!$&&(o||i==="empty")&&((Q=R.current)==null||Q.click())},[$,o,i]),G=v.useCallback(Q=>{var D;if(o){const H=Q.target.files?Array.from(Q.target.files):[];H.length&&(b==null||b(H))}else{const H=(D=Q.target.files)==null?void 0:D[0];H&&(x==null||x(H))}Q.target.value=""},[o,x,b]),J=v.useCallback(Q=>{Q.preventDefault(),E&&T(!0)},[E]),W=v.useCallback(()=>T(!1),[]),K=v.useCallback(Q=>{var D;if(Q.preventDefault(),T(!1),!!E)if(o){const H=Q.dataTransfer.files?Array.from(Q.dataTransfer.files):[];H.length&&(b==null||b(H))}else{const H=(D=Q.dataTransfer.files)==null?void 0:D[0];H&&(x==null||x(H))}},[E,o,x,b]),te=n.jsx("input",{ref:R,type:"file",className:He.hiddenInput,accept:y,multiple:o,disabled:$,"aria-hidden":"true",tabIndex:-1,onChange:G}),ae=l?n.jsxs("div",{className:He.fileRow,children:[n.jsx("span",{className:`${He.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(Yr,{size:16})}),n.jsx("span",{className:He.fileName,children:l.name}),n.jsx(Ln,{size:"sm",variant:"subtle",children:Pd(l)}),i==="complete"&&n.jsx("span",{className:`${He.successIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(yn,{size:16})}),n.jsx("button",{type:"button",className:He.removeBtn,onClick:k,"aria-label":"Remove file",children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(ol,{size:14})})})]}):null;if(e==="area"){if(o){const Q=d??[];return n.jsxs("div",{ref:z,className:ie(He.areaMulti,M),"data-drag-over":L||void 0,"data-disabled":$||void 0,onDragOver:J,onDragLeave:W,onDrop:K,...C,children:[te,n.jsxs("div",{className:He.multiDropZone,children:[n.jsx("span",{className:`${He.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(Ed,{size:24})}),n.jsxs("div",{className:He.textBlock,children:[n.jsx("p",{className:He.title,children:m}),n.jsx("p",{className:He.description,children:g})]}),n.jsx(Ee,{variant:j,size:"sm",onClick:B,disabled:$,children:"Browse Files"})]}),Q.length>0&&n.jsx("ul",{className:He.fileList,"aria-label":"Selected files",children:Q.map((D,H)=>n.jsxs("li",{className:He.fileListItem,children:[n.jsx("span",{className:`${He.fileIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(Yr,{size:16})}),n.jsx("span",{className:He.fileName,children:D.name}),n.jsx(Ln,{size:"sm",variant:"subtle",children:Pd(D)}),n.jsx("button",{type:"button",className:He.removeBtn,onClick:()=>S==null?void 0:S(H),"aria-label":`Remove ${D.name}`,disabled:$,children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(ol,{size:14})})})]},`${D.name}-${H}`))})]})}return n.jsxs("div",{ref:z,className:ie(He.area,M),"data-state":i,"data-drag-over":L||void 0,"data-disabled":$||void 0,onDragOver:J,onDragLeave:W,onDrop:K,...C,children:[te,i==="empty"&&n.jsxs(n.Fragment,{children:[n.jsx("span",{className:`${He.uploadIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(Ed,{size:24})}),n.jsxs("div",{className:He.textBlock,children:[n.jsx("p",{className:He.title,children:m}),n.jsx("p",{className:He.description,children:g})]}),n.jsx(Ee,{variant:j,size:"sm",onClick:B,disabled:$,children:"Browse File"}),N&&n.jsx("div",{className:He.footerSlot,children:N})]}),i==="uploading"&&n.jsxs(n.Fragment,{children:[ae,n.jsxs("div",{className:He.progressWrap,children:[n.jsx("div",{className:He.progressBar,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:n.jsx("div",{className:He.progressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})}),n.jsxs("p",{className:He.progressLabel,children:[s,"% uploaded"]})]})]}),i==="complete"&&ae,i==="error"&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:He.errorRow,children:[n.jsx("span",{className:`${He.errorIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(pa,{size:20})}),n.jsx("p",{className:He.errorText,children:p??"Upload failed. Please try again."})]}),n.jsx(Ee,{variant:"tertiary",size:"sm",onClick:B,disabled:$,children:"Try Again"})]})]})}const ce={empty:n.jsx(Ed,{size:16}),uploading:n.jsx(Yr,{size:16}),complete:n.jsx(yn,{size:16}),error:n.jsx(pa,{size:16})}[i],se=(i==="uploading"||i==="complete")&&!!l;return n.jsxs("div",{ref:z,className:ie(He.inline,M),"data-state":i,"data-field-variant":_,"data-disabled":$||void 0,...C,children:[te,n.jsx("span",{className:`${He.inlineIcon} alloy-icon-slot`,"aria-hidden":"true",children:ce}),n.jsxs("span",{className:He.inlineText,"data-has-file":se?"":void 0,children:[i==="empty"&&m,i==="uploading"&&(l==null?void 0:l.name),i==="complete"&&(l==null?void 0:l.name),i==="error"&&(p??"Upload failed. Please try again.")]}),se&&n.jsx(Ln,{size:"sm",variant:"subtle",children:Pd(l)}),(i==="uploading"||i==="complete"||i==="error")&&n.jsx("button",{type:"button",className:He.removeBtn,onClick:k,"aria-label":"Remove file",children:n.jsx("span",{className:"alloy-icon-slot",style:{width:14,height:14},"aria-hidden":"true",children:n.jsx(ol,{size:14})})}),i==="empty"&&n.jsx(Ee,{variant:j,size:"xs",onClick:B,disabled:$,children:"Browse"}),i==="uploading"&&n.jsx("div",{className:He.inlineProgress,role:"progressbar","aria-valuenow":s,"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Upload progress",children:n.jsx("div",{className:He.inlineProgressFill,style:{width:`${Math.min(100,Math.max(0,s))}%`}})})]})});sg.displayName="FileUploader";const Mb="_wrapper_127v8_8",Rb="_labelRow_127v8_16",Lb="_label_127v8_16",$b="_required_127v8_28",Ab="_labelIcon_127v8_36",Tb="_sm_127v8_46",Ib="_md_127v8_47",Eb="_lg_127v8_48",Pb="_shell_127v8_44",zb="_outlined_127v8_75",Ob="_underlined_127v8_102",Db="_float_127v8_147",Fb="_leadingSlot_127v8_181",Bb="_trailingSlot_127v8_193",Wb="_trailingActionWrap_127v8_206",Hb="_trailingActionBtn_127v8_213",Ub="_successTrailingSlot_127v8_234",qb="_errorTrailingSlot_127v8_239",Vb="_control_127v8_251",Gb="_selectValue_127v8_297",Yb="_selectPlaceholder_127v8_303",Kb="_selectChevron_127v8_307",Qb="_selectChevronOpen_127v8_312",Zb="_textareaShell_127v8_315",Xb="_textareaControl_127v8_334",Jb="_footer_127v8_351",e7="_footerRow_127v8_363",t7="_footerError_127v8_364",n7="_footerSuccess_127v8_365",r7="_footerIcon_127v8_368",o7="_wrapperHorizontal_127v8_378",a7="_horizontalLabelCol_127v8_384",i7="_horizontalLabelHint_127v8_393",s7="_horizontalControlCol_127v8_402",l7="_msContainer_127v8_416",c7="_msShell_127v8_425",d7="_msOpen_127v8_440",u7="_msDisabled_127v8_447",p7="_msBody_127v8_450",h7="_msPlaceholder_127v8_459",f7="_msChevron_127v8_469",m7="_msChevronOpen_127v8_480",g7="_msPanel_127v8_483",Ae={wrapper:Mb,labelRow:Rb,label:Lb,required:$b,labelIcon:Ab,sm:Tb,md:Ib,lg:Eb,shell:Pb,outlined:zb,underlined:Ob,float:Db,leadingSlot:Fb,trailingSlot:Bb,trailingActionWrap:Wb,trailingActionBtn:Hb,successTrailingSlot:Ub,errorTrailingSlot:qb,control:Vb,selectValue:Gb,selectPlaceholder:Yb,selectChevron:Kb,selectChevronOpen:Qb,textareaShell:Zb,textareaControl:Xb,footer:Jb,footerRow:e7,footerError:t7,footerSuccess:n7,footerIcon:r7,wrapperHorizontal:o7,horizontalLabelCol:a7,horizontalLabelHint:i7,horizontalControlCol:s7,msContainer:l7,msShell:c7,msOpen:d7,msDisabled:u7,msBody:p7,msPlaceholder:h7,msChevron:f7,msChevronOpen:m7,msPanel:g7};function ba({label:e,labelIcon:o,labelDescription:i,hint:s,error:l,success:d,required:p,htmlFor:m,layout:g="vertical",labelWidth:y=160,className:x,children:b}){const k=l??d??s,S=l?"error":d?"success":"hint",_=k?n.jsxs("p",{className:ie(Ae.footer,S==="error"&&Ae.footerError,S==="success"&&Ae.footerSuccess),role:S==="error"?"alert":void 0,"aria-live":S==="error"?"assertive":void 0,children:[S==="hint"&&n.jsx("span",{className:`${Ae.footerIcon} alloy-icon-slot`,"aria-hidden":"true",children:n.jsx(pa,{size:12})}),k]}):null,j=e!=null?n.jsxs("div",{className:Ae.labelRow,children:[n.jsx("label",{className:Ae.label,htmlFor:m,children:e}),p&&n.jsx("span",{className:Ae.required,"aria-hidden":"true",children:"*"}),o&&n.jsx("span",{className:`${Ae.labelIcon} alloy-icon-slot`,"aria-hidden":"true",children:o})]}):null;if(g==="horizontal"){const N={width:typeof y=="number"?`${y}px`:y};return n.jsxs("div",{className:ie(Ae.wrapper,Ae.wrapperHorizontal,x),children:[(j||i)&&n.jsxs("div",{className:Ae.horizontalLabelCol,style:N,children:[j,i&&n.jsx("p",{className:Ae.horizontalLabelHint,children:i})]}),n.jsxs("div",{className:Ae.horizontalControlCol,children:[b,_]})]})}return n.jsxs("div",{className:ie(Ae.wrapper,x),children:[j,b,_]})}function Ni({variant:e="outlined",size:o="md",error:i,success:s,disabled:l,readOnly:d,leadingIcon:p,trailingIcon:m,trailingAction:g,isTextarea:y,focused:x,className:b,children:k}){const S=o==="sm"?14:o==="lg"?18:16,_=s&&!i&&!m&&!g?n.jsx(yn,{size:S}):null,j=i&&!m&&!g?n.jsx(pa,{size:S}):null,N=!!p,$=!!(m||g||_||j);return n.jsxs("div",{className:ie(Ae.shell,Ae[e],Ae[o],y&&Ae.textareaShell,b),"data-error":i||void 0,"data-success":s||void 0,"data-disabled":l||void 0,"data-readonly":d||void 0,"data-focused":x||void 0,"data-has-leading":N||void 0,"data-has-trailing":$||void 0,children:[p&&n.jsx("span",{className:ie(Ae.leadingSlot,"alloy-icon-slot"),children:p}),k,g?n.jsx("span",{className:Ae.trailingActionWrap,children:g}):m||_||j?n.jsx("span",{className:ie(Ae.trailingSlot,"alloy-icon-slot",_&&Ae.successTrailingSlot,j&&Ae.errorTrailingSlot),children:m??_??j}):null]})}const Qu=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:p="outlined",size:m="md",type:g="text",leadingIcon:y,trailingIcon:x,layout:b,labelWidth:k,labelDescription:S,id:_,disabled:j,readOnly:N,className:$,...M},C)=>{const z=v.useId(),R=_??z;return n.jsx(ba,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:R,layout:b,labelWidth:k,labelDescription:S,className:$,children:n.jsx(Ni,{variant:p,size:m,error:!!s,success:!!l,disabled:j,readOnly:N,leadingIcon:y,trailingIcon:x,children:n.jsx("input",{ref:C,id:R,type:g,disabled:j,readOnly:N,"aria-invalid":s?!0:void 0,"aria-describedby":i||s||l?`${R}-footer`:void 0,className:ie(Ae.control),...M})})})});Qu.displayName="TextField";const v7=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:p="outlined",size:m="md",leadingIcon:g,trailingIcon:y,layout:x,labelWidth:b,labelDescription:k,id:S,disabled:_,readOnly:j,className:N,...$},M)=>{const C=v.useId(),z=S??C;return n.jsx(ba,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:z,layout:x,labelWidth:b,labelDescription:k,className:N,children:n.jsx(Ni,{variant:p,size:m,error:!!s,success:!!l,disabled:_,readOnly:j,leadingIcon:g,trailingIcon:y,isTextarea:!0,children:n.jsx("textarea",{ref:M,id:z,disabled:_,readOnly:j,"aria-invalid":s?!0:void 0,className:ie(Ae.control,Ae.textareaControl),...$})})})});v7.displayName="TextArea";const x7={sm:"sm",md:"md",lg:"lg"},lg=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:p="outlined",size:m="md",leadingIcon:g,layout:y,labelWidth:x,labelDescription:b,options:k,value:S,defaultValue:_="",onChange:j,placeholder:N="Select an option…",disabled:$,readOnly:M,id:C,className:z},R)=>{var D;const L=v.useId(),T=C??L,E=S!==void 0,[B,G]=v.useState(_),J=E?S:B,W=v.useCallback(H=>{E||G(H),j==null||j(H)},[E,j]),[K,te]=v.useState(!1),ae=(D=k.find(H=>H.value===J))==null?void 0:D.label,ce=m==="sm"?14:m==="lg"?18:16,se=x7[m],Q=n.jsx(Ni,{variant:p,size:m,error:!!s,success:!!l,disabled:$,readOnly:M,focused:K,leadingIcon:g,trailingIcon:n.jsx("span",{className:ie(Ae.selectChevron,K&&Ae.selectChevronOpen),"aria-hidden":"true",children:n.jsx($n,{size:ce})}),children:n.jsx("span",{className:ie(Ae.control,Ae.selectValue,!ae&&Ae.selectPlaceholder),children:ae??N})});return n.jsx(ba,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:T,layout:y,labelWidth:x,labelDescription:b,className:z,children:n.jsx(Ku,{ref:R,id:T,fullWidth:!0,trigger:Q,groups:[{id:"options",options:k.map(H=>({id:H.value,label:H.label,disabled:H.disabled,selected:H.value===J,onClick:()=>W(H.value)}))}],size:se,width:"100%",placement:"bottom-start",open:K,onOpenChange:te,disabled:$||M})})});lg.displayName="SelectField";const y7=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:p="outlined",size:m="md",leadingIcon:g,layout:y,labelWidth:x,labelDescription:b,id:k,disabled:S,readOnly:_,className:j,...N},$)=>{const M=v.useId(),C=k??M,[z,R]=v.useState(!1),L=m==="sm"?14:m==="lg"?18:16;return n.jsx(ba,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:C,layout:y,labelWidth:x,labelDescription:b,className:j,children:n.jsx(Ni,{variant:p,size:m,error:!!s,success:!!l,disabled:S,readOnly:_,leadingIcon:g,trailingAction:n.jsx("button",{type:"button",className:`${Ae.trailingActionBtn} alloy-icon-slot`,onClick:()=>R(T=>!T),tabIndex:S?-1:0,"aria-label":z?"Hide password":"Show password","aria-pressed":z,children:z?n.jsx(E0,{size:L}):n.jsx(Du,{size:L})}),children:n.jsx("input",{ref:$,id:C,type:z?"text":"password",disabled:S,readOnly:_,"aria-invalid":s?!0:void 0,autoComplete:"current-password",className:ie(Ae.control),...N})})})});y7.displayName="PasswordField";const cg=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:p="outlined",size:m="md",onClear:g,onChange:y,layout:x,labelWidth:b,labelDescription:k,id:S,value:_,defaultValue:j,disabled:N,readOnly:$,className:M,...C},z)=>{const R=v.useId(),L=S??R,T=m==="sm"?14:m==="lg"?18:16,E=_!==void 0?String(_).length>0:void 0,B=v.useCallback(G=>{y==null||y(G)},[y]);return n.jsx(ba,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:L,layout:x,labelWidth:b,labelDescription:k,className:M,children:n.jsx(Ni,{variant:p,size:m,error:!!s,success:!!l,disabled:N,readOnly:$,leadingIcon:n.jsx(Hu,{size:T}),trailingAction:E?n.jsx("button",{type:"button",className:`${Ae.trailingActionBtn} alloy-icon-slot`,onClick:g,tabIndex:N?-1:0,"aria-label":"Clear search",children:n.jsx(Ci,{size:T})}):void 0,children:n.jsx("input",{ref:z,id:L,type:"search",value:_,defaultValue:j,disabled:N,readOnly:$,"aria-invalid":s?!0:void 0,onChange:B,className:ie(Ae.control),...C})})})});cg.displayName="SearchField";const dg=v.forwardRef((e,o)=>n.jsx(Qu,{ref:o,type:"email",autoComplete:"email",inputMode:"email",...e}));dg.displayName="EmailField";const ug=v.forwardRef((e,o)=>n.jsx(Qu,{ref:o,type:"number",inputMode:"numeric",...e}));ug.displayName="NumberField";const w7={sm:"sm",md:"sm",lg:"md"},b7={sm:"sm",md:"md",lg:"lg"},k7=v.forwardRef(({label:e,labelIcon:o,hint:i,error:s,success:l,required:d,variant:p="outlined",size:m="md",layout:g,labelWidth:y,labelDescription:x,options:b,value:k,defaultValue:S=[],onChange:_,placeholder:j="Select options…",disabled:N,readOnly:$,id:M,className:C},z)=>{const R=v.useId(),L=M??R,T=`${L}-list`,E=v.useRef(null),B=k!==void 0,[G,J]=v.useState(S),W=B?k:G,K=v.useCallback(A=>{B||J(A),_==null||_(A)},[B,_]),[te,ae]=v.useState(!1);v.useEffect(()=>{if(!te)return;const A=Z=>{E.current&&!E.current.contains(Z.target)&&ae(!1)},V=Z=>{Z.key==="Escape"&&ae(!1)};return document.addEventListener("mousedown",A),document.addEventListener("keydown",V),()=>{document.removeEventListener("mousedown",A),document.removeEventListener("keydown",V)}},[te]);const ce=A=>{if(N||$)return;const V=W.includes(A)?W.filter(Z=>Z!==A):[...W,A];K(V)},se=A=>{N||$||((A.key==="Enter"||A.key===" ")&&(A.preventDefault(),ae(V=>!V)),A.key==="Backspace"&&W.length>0&&!te&&K(W.slice(0,-1)))},Q=m==="sm"?14:m==="lg"?18:16,D=w7[m],H=b7[m],I=Object.fromEntries(b.map(A=>[A.value,A.label]));return n.jsx(ba,{label:e,labelIcon:o,hint:i,error:s,success:l,required:d,htmlFor:L,layout:g,labelWidth:y,labelDescription:x,className:C,children:n.jsxs("div",{ref:E,className:Ae.msContainer,children:[n.jsxs("div",{ref:z,id:L,role:"combobox","aria-haspopup":"listbox","aria-expanded":te,"aria-controls":T,"aria-disabled":N||void 0,tabIndex:N?-1:0,className:ie(Ae.msShell,Ae[p],Ae[m],te&&Ae.msOpen,N&&Ae.msDisabled),"data-error":s?!0:void 0,"data-success":l&&!s?!0:void 0,"data-disabled":N||void 0,onClick:()=>{!N&&!$&&ae(A=>!A)},onKeyDown:se,children:[n.jsx("div",{className:Ae.msBody,children:W.length===0?n.jsx("span",{className:Ae.msPlaceholder,children:j}):W.map(A=>n.jsx(Ln,{size:D,variant:"subtle",dismissible:!N&&!$,onDismiss:()=>K(W.filter(V=>V!==A)),children:I[A]??A},A))}),n.jsx("span",{className:ie(Ae.msChevron,"alloy-icon-slot",te&&Ae.msChevronOpen),children:n.jsx($n,{size:Q})})]}),te&&n.jsx("div",{id:T,role:"listbox","aria-multiselectable":"true","aria-label":typeof e=="string"?e:"Options",className:Ae.msPanel,children:b.map(A=>{const V=W.includes(A.value);return n.jsx(xn,{label:A.label,size:H,trailingAction:"checkbox",checked:V,disabled:A.disabled,role:"option","aria-selected":V,onMouseDown:Z=>{Z.preventDefault()},onCheckedChange:()=>{A.disabled||ce(A.value)}},A.value)})})]})})});k7.displayName="MultiSelectField";const _7="_root_1249j_6",C7="_pageControls_1249j_14",j7="_pageBtn_1249j_21",S7="_ellipsis_1249j_36",N7="_rowsGroup_1249j_51",M7="_rowsSelect_1249j_58",R7="_countText_1249j_64",L7="_groupLabel_1249j_74",$7="_goToGroup_1249j_84",A7="_goToInput_1249j_91",Bn={root:_7,pageControls:C7,pageBtn:j7,ellipsis:S7,rowsGroup:N7,rowsSelect:M7,countText:R7,groupLabel:L7,goToGroup:$7,goToInput:A7};function T7(e,o,i){if(o<=1)return[1];const s=Math.max(2,e-i),l=Math.min(o-1,e+i),d=[1];s>2&&d.push("ellipsis");for(let p=s;p<=l;p++)d.push(p);return l<o-1&&d.push("ellipsis"),o>1&&d.push(o),d}const I7=v.forwardRef(({page:e,totalPages:o,onPageChange:i,showRowsPerPage:s=!1,rowsPerPage:l,rowsPerPageOptions:d=[10,25,50,100],onRowsPerPageChange:p,showGoToPage:m=!1,totalCount:g,siblingCount:y=1,size:x="sm",disabled:b=!1,className:k,...S},_)=>{const[j,N]=v.useState(""),$=x,M=x,C=x==="sm"?14:16,z=T7(e,o,y),R=v.useCallback(E=>{const B=Math.min(Math.max(1,E),o);B!==e&&i(B)},[e,o,i]),L=v.useCallback(E=>{if(E.key==="Enter"){const B=parseInt(j,10);isNaN(B)||R(B),N("")}},[j,R]),T=g!=null&&l!=null?`${(e-1)*l+1}–${Math.min(e*l,g)} of ${g}`:null;return n.jsxs("nav",{ref:_,"aria-label":"Pagination",className:ie(Bn.root,k),"data-size":x,...S,children:[s&&n.jsxs("div",{className:Bn.rowsGroup,children:[n.jsx("span",{className:Bn.groupLabel,children:"Rows per page"}),n.jsx("div",{className:Bn.rowsSelect,children:n.jsx(lg,{size:M,value:l,disabled:b,"aria-label":"Rows per page",onChange:E=>p==null?void 0:p(Number(E.target.value)),children:d.map(E=>n.jsx("option",{value:E,children:E},E))})})]}),T&&n.jsx("span",{className:Bn.countText,"aria-live":"polite",children:T}),n.jsxs("div",{className:Bn.pageControls,role:"group","aria-label":"Page navigation",children:[n.jsx(Ee,{variant:"ghost",size:$,iconOnly:!0,"aria-label":"Previous page",disabled:b||e<=1,onClick:()=>R(e-1),children:n.jsx(I0,{size:C})}),z.map((E,B)=>E==="ellipsis"?n.jsx("span",{className:Bn.ellipsis,"aria-hidden":"true",children:"…"},`ellipsis-${B}`):n.jsx(Ee,{variant:E===e?"secondary":"ghost",size:$,"aria-label":`Page ${E}`,"aria-current":E===e?"page":void 0,disabled:b,onClick:()=>R(E),className:Bn.pageBtn,children:E},E)),n.jsx(Ee,{variant:"ghost",size:$,iconOnly:!0,"aria-label":"Next page",disabled:b||e>=o,onClick:()=>R(e+1),children:n.jsx(bn,{size:C})})]}),m&&n.jsxs("div",{className:Bn.goToGroup,children:[n.jsx("span",{className:Bn.groupLabel,children:"Go to"}),n.jsx("div",{className:Bn.goToInput,children:n.jsx(ug,{size:M,value:j,placeholder:String(e),min:1,max:o,disabled:b,"aria-label":"Go to page number",onChange:E=>N(E.target.value),onKeyDown:L})})]})]})});I7.displayName="Pagination";const E7="_root_1vx33_6",P7="_fullWidth_1vx33_18",z7="_item_1vx33_23",O7="_indicator_1vx33_28",D7="_sm_1vx33_46",F7="_md_1vx33_54",B7="_lg_1vx33_62",W7="_itemSelected_1vx33_109",H7="_itemIcon_1vx33_115",U7="_itemLabel_1vx33_127",Vr={root:E7,fullWidth:P7,item:z7,indicator:O7,sm:D7,md:F7,lg:B7,itemSelected:W7,itemIcon:H7,itemLabel:U7},pg=v.createContext(null);function q7(e){const o=v.useContext(pg);if(!o)throw new Error(`<${e}> must be rendered inside <SegmentedControl>`);return o}const hg=v.forwardRef(({value:e,leadingIcon:o,className:i,children:s,disabled:l,onClick:d,...p},m)=>{const{value:g,onChange:y,disabled:x,name:b}=q7("SegmentedControl.Item"),k=g===e,S=x||!!l;return n.jsxs("button",{ref:m,type:"button",role:"radio","aria-checked":k,name:b,disabled:S,className:ie(Vr.item,k&&Vr.itemSelected,i),onClick:_=>{S||y(e),d==null||d(_)},...p,children:[o&&n.jsx("span",{className:ie(Vr.itemIcon,"alloy-icon-slot"),"aria-hidden":"true",children:o}),s!==void 0&&n.jsx("span",{className:Vr.itemLabel,children:s})]})});hg.displayName="SegmentedControl.Item";const fg=v.forwardRef(({value:e,defaultValue:o="",onChange:i,size:s="md",disabled:l=!1,fullWidth:d=!1,className:p,children:m,...g},y)=>{const[x,b]=v.useState(o),k=e!==void 0,S=k?e:x,_=v.useId(),j=v.useRef(null);v.useLayoutEffect(()=>{const $=j.current;if(!$)return;const M=$.querySelector('[aria-checked="true"]');M&&($.style.setProperty("--sc-indicator-x",`${M.offsetLeft}px`),$.style.setProperty("--sc-indicator-w",`${M.offsetWidth}px`))},[S,s]);const N=$=>{k||b($),i==null||i($)};return n.jsx(pg.Provider,{value:{value:S,onChange:N,disabled:l,name:_},children:n.jsxs("div",{ref:$=>{j.current=$,typeof y=="function"?y($):y&&(y.current=$)},role:"radiogroup",className:ie(Vr.root,Vr[s],d&&Vr.fullWidth,p),...g,children:[n.jsx("span",{className:Vr.indicator,"aria-hidden":"true"}),m]})})});fg.displayName="SegmentedControl";Object.assign(fg,{Item:hg});const V7="_root_fkv0x_6",G7="_sm_fkv0x_26",Y7="_md_fkv0x_33",K7="_lg_fkv0x_40",Q7="_dot_fkv0x_49",Z7="_success_fkv0x_58",X7="_warning_fkv0x_65",J7="_error_fkv0x_72",ek="_info_fkv0x_79",tk="_neutral_fkv0x_86",nk="_pending_fkv0x_93",Vs={root:V7,sm:G7,md:Y7,lg:K7,dot:Q7,success:Z7,warning:X7,error:J7,info:ek,neutral:tk,pending:nk},vi=v.forwardRef(({status:e="neutral",size:o="md",dot:i=!0,className:s,children:l,...d},p)=>n.jsxs("span",{ref:p,className:ie(Vs.root,Vs[o],Vs[e],s),...d,children:[i&&n.jsx("span",{className:Vs.dot,"aria-hidden":"true"}),l]}));vi.displayName="StatusTag";const rk="_root_1m8t5_6",ok="_underline_1m8t5_15",ak="_background_1m8t5_21",ik="_underlineIndicator_1m8t5_26",sk="_md_1m8t5_43",lk="_lg_1m8t5_44",ck="_tab_1m8t5_42",dk="_tabSelected_1m8t5_77",uk="_tabIcon_1m8t5_99",pk="_tabLabel_1m8t5_111",hk="_tabBadge_1m8t5_116",fk="_tabLabelEditable_1m8t5_123",mk="_tabLabelInput_1m8t5_128",gk="_addTab_1m8t5_147",vk="_addTabIcon_1m8t5_160",sn={root:rk,underline:ok,background:ak,underlineIndicator:ik,md:sk,lg:lk,tab:ck,tabSelected:dk,tabIcon:uk,tabLabel:pk,tabBadge:hk,tabLabelEditable:fk,tabLabelInput:mk,addTab:gk,addTabIcon:vk},mg=v.createContext(null);function gg(e){const o=v.useContext(mg);if(!o)throw new Error(`<${e}> must be rendered inside <Tabs>`);return o}const vg=v.forwardRef(({value:e,leadingIcon:o,trailingBadge:i,disabled:s,editable:l=!1,autoEdit:d=!1,onLabelChange:p,onClick:m,className:g,children:y,...x},b)=>{const{value:k,onChange:S,disabled:_,name:j}=gg("Tabs.Tab"),N=k===e,$=_||!!s,M=typeof y=="string"?y:"",[C,z]=v.useState(d&&l),[R,L]=v.useState(M),T=v.useRef(null);v.useEffect(()=>{if(C){const W=T.current;W&&(W.focus(),W.select())}},[C]),v.useEffect(()=>{d&&l&&!C&&(L(typeof y=="string"?y:""),z(!0))},[d,l]);const E=()=>{const W=R.trim();W&&W!==M&&(p==null||p(W)),z(!1)},B=()=>{L(M),z(!1)},G=W=>{!l||$||(W.stopPropagation(),L(M),z(!0))},J=W=>{W.key==="Enter"?(W.preventDefault(),E()):W.key==="Escape"&&(W.preventDefault(),B())};return n.jsxs("button",{ref:b,type:"button",role:"tab","aria-selected":N,name:j,disabled:$,className:ie(sn.tab,N&&sn.tabSelected,g),onClick:W=>{C||($||S(e),m==null||m(W))},...x,children:[o&&n.jsx("span",{className:ie(sn.tabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:o}),C?n.jsx("input",{ref:T,type:"text",value:R,onChange:W=>L(W.target.value),onKeyDown:J,onBlur:E,onClick:W=>W.stopPropagation(),className:sn.tabLabelInput,"aria-label":"Tab name",size:Math.max(R.length,1)}):y!==void 0&&n.jsx("span",{className:ie(sn.tabLabel,l&&sn.tabLabelEditable),onDoubleClick:G,children:y}),i&&!C&&n.jsx("span",{className:sn.tabBadge,children:i})]})});vg.displayName="Tabs.Tab";const xk=()=>n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:n.jsx("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),xg=v.forwardRef(({className:e,onClick:o,"aria-label":i="Add tab",...s},l)=>{const{disabled:d}=gg("Tabs.AddTab");return n.jsx("button",{ref:l,type:"button","aria-label":i,disabled:d,className:ie(sn.tab,sn.addTab,e),onClick:o,...s,children:n.jsx("span",{className:ie(sn.addTabIcon,"alloy-icon-slot"),"aria-hidden":"true",children:n.jsx(xk,{})})})});xg.displayName="Tabs.AddTab";const yg=v.forwardRef(({variant:e="underline",size:o="md",value:i,defaultValue:s="",onChange:l,disabled:d=!1,className:p,children:m,...g},y)=>{const[x,b]=v.useState(s),k=i!==void 0,S=k?i:x,_=v.useId(),j=v.useRef(null);v.useLayoutEffect(()=>{const $=j.current;if(!$||e!=="underline")return;const M=$.querySelector('[aria-selected="true"]');M&&($.style.setProperty("--tab-indicator-x",`${M.offsetLeft}px`),$.style.setProperty("--tab-indicator-w",`${M.offsetWidth}px`))},[S,e]);const N=$=>{k||b($),l==null||l($)};return n.jsx(mg.Provider,{value:{value:S,onChange:N,disabled:d,variant:e,size:o,name:_},children:n.jsxs("div",{ref:$=>{j.current=$,typeof y=="function"?y($):y&&(y.current=$)},role:"tablist",className:ie(sn.root,sn[e],sn[o],p),...g,children:[e==="underline"&&n.jsx("span",{className:sn.underlineIndicator,"aria-hidden":"true"}),m]})})});yg.displayName="Tabs";Object.assign(yg,{Tab:vg,AddTab:xg});const yk="_selectedBorder_1ypeg_7",wk="_selectedFill_1ypeg_12",wf={selectedBorder:yk,selectedFill:wk},bk=v.forwardRef(({selected:e=!1,defaultVariant:o="secondary",selectionStyle:i="border",onSelectedChange:s,onClick:l,className:d,...p},m)=>{const g=x=>{s==null||s(!e),l==null||l(x)},y=e?i==="fill"?wf.selectedFill:wf.selectedBorder:void 0;return n.jsx(Ee,{ref:m,variant:o,"aria-pressed":e,className:ie(y,d),onClick:g,...p})});bk.displayName="ToggleButton";const kk="_root_mcb75_6",_k="_disabled_mcb75_13",Ck="_sm_mcb75_20",jk="_md_mcb75_31",Sk="_lg_mcb75_42",Nk="_track_mcb75_54",Mk="_trackChecked_mcb75_90",Rk="_thumb_mcb75_100",Lk="_labelWrap_mcb75_117",$k="_label_mcb75_117",Ak="_description_mcb75_139",mr={root:kk,disabled:_k,sm:Ck,md:jk,lg:Sk,track:Nk,trackChecked:Mk,thumb:Rk,labelWrap:Lk,label:$k,description:Ak},Tk=v.forwardRef(({checked:e,defaultChecked:o=!1,onChange:i,disabled:s,size:l="md",label:d,description:p,id:m,name:g,value:y,className:x},b)=>{const k=v.useId(),S=m??k,_=`${S}-label`,j=e!==void 0,[N,$]=v.useState(o),M=j?e:N,C=()=>{if(s)return;const R=!M;j||$(R),i==null||i(R)},z=R=>{(R.key===" "||R.key==="Enter")&&(R.preventDefault(),C())};return n.jsxs("div",{className:ie(mr.root,mr[l],s&&mr.disabled,x),children:[n.jsx("button",{ref:b,type:"button",role:"switch",id:S,"aria-checked":M,"aria-labelledby":d?_:void 0,"aria-disabled":s||void 0,tabIndex:s?-1:0,disabled:s,name:g,value:y,className:ie(mr.track,M&&mr.trackChecked),"data-checked":M||void 0,"data-disabled":s||void 0,onClick:C,onKeyDown:z,children:n.jsx("span",{className:mr.thumb})}),(d||p)&&n.jsxs("div",{className:mr.labelWrap,children:[d&&n.jsx("label",{id:_,htmlFor:S,className:mr.label,children:d}),p&&n.jsx("span",{className:mr.description,children:p})]})]})});Tk.displayName="Switch";const Ik="_root_104n4_5",Ek="_disabled_104n4_11",Pk="_sm_104n4_17",zk="_md_104n4_25",Ok="_lg_104n4_33",Dk="_controlWrap_104n4_41",Fk="_input_104n4_50",Bk="_ring_104n4_65",Wk="_ringChecked_104n4_90",Hk="_ringError_104n4_94",Uk="_dot_104n4_104",qk="_labelWrap_104n4_112",Vk="_label_104n4_112",Gk="_error_104n4_130",Yk="_required_104n4_132",Kk="_description_104n4_137",nn={root:Ik,disabled:Ek,sm:Pk,md:zk,lg:Ok,controlWrap:Dk,input:Fk,ring:Bk,ringChecked:Wk,ringError:Hk,dot:Uk,labelWrap:qk,label:Vk,error:Gk,required:Yk,description:Kk},Qk=v.forwardRef(({value:e,checked:o,onChange:i,disabled:s,error:l,size:d="md",label:p,description:m,id:g,name:y,required:x,className:b},k)=>{const S=v.useId(),_=g??S;return n.jsxs("div",{className:ie(nn.root,nn[d],s&&nn.disabled,l&&nn.error,b),children:[n.jsxs("div",{className:nn.controlWrap,children:[n.jsx("input",{ref:k,type:"radio",id:_,name:y,value:e,checked:o,disabled:s,required:x,"aria-invalid":l||void 0,onChange:()=>i==null?void 0:i(e),className:nn.input}),n.jsx("span",{className:ie(nn.ring,o&&nn.ringChecked,l&&nn.ringError),"aria-hidden":"true",children:o&&n.jsx("span",{className:nn.dot})})]}),(p||m)&&n.jsxs("div",{className:nn.labelWrap,children:[p&&n.jsxs("label",{htmlFor:_,className:nn.label,children:[p,x&&n.jsx("span",{className:nn.required,"aria-hidden":"true",children:" *"})]}),m&&n.jsx("span",{className:nn.description,children:m})]})]})});Qk.displayName="Radio";const Zk="_table_1ad04_8",Xk="_sm_1ad04_16",Jk="_row_1ad04_30",e_="_head_1ad04_47",t_="_headLabel_1ad04_82",n_="_sortBtn_1ad04_96",r_="_sortIcon_1ad04_119",o_="_cell_1ad04_142",a_="_cellText_1ad04_175",i_="_cellStack_1ad04_203",s_="_cellStackPrimary_1ad04_210",l_="_cellStackSecondary_1ad04_221",c_="_cellActions_1ad04_233",d_="_cellControl_1ad04_240",u_="_addCell_1ad04_251",p_="_addRowCell_1ad04_264",h_="_addRowLabel_1ad04_276",Et={table:Zk,sm:Xk,row:Jk,head:e_,headLabel:t_,sortBtn:n_,sortIcon:r_,cell:o_,cellText:a_,cellStack:i_,cellStackPrimary:s_,cellStackSecondary:l_,cellActions:c_,cellControl:d_,addCell:u_,addRowCell:p_,addRowLabel:h_},wg=v.createContext({addColumn:!1,addRow:!1}),bg=()=>v.useContext(wg),f_=v.forwardRef(({size:e="md",interaction:o="row",addColumn:i=!1,addRow:s=!1,onAddColumn:l,onAddRow:d,className:p,children:m,...g},y)=>{const x=v.useMemo(()=>({addColumn:i,addRow:s,onAddColumn:l,onAddRow:d}),[i,s,l,d]);return n.jsx(wg.Provider,{value:x,children:n.jsx("table",{ref:y,className:ie(Et.table,e==="sm"&&Et.sm,p),"data-interaction":o,...g,children:m})})});f_.displayName="Table";const kg=v.forwardRef(({align:e="left",sort:o,onSort:i,hoverable:s,selected:l,className:d,children:p,...m},g)=>{const y=o!==void 0;return n.jsx("th",{ref:g,className:ie(Et.head,d),"data-align":e!=="left"?e:void 0,"data-hoverable":!y&&s?!0:void 0,"data-selected":l||void 0,"aria-selected":l,scope:"col","aria-sort":o==="asc"?"ascending":o==="desc"?"descending":y?"none":void 0,...m,children:y?n.jsxs("button",{type:"button",className:Et.sortBtn,onClick:i,"aria-label":typeof p=="string"?`Sort by ${p}`:void 0,children:[p,n.jsx("span",{className:Et.sortIcon,"data-sort":o!=="none"?o:void 0,"aria-hidden":"true",children:n.jsx($n,{size:12,strokeWidth:2})})]}):n.jsx("span",{className:Et.headLabel,children:p})})});kg.displayName="TableHead";const m_=v.forwardRef(({children:e,...o},i)=>{const{addColumn:s,onAddColumn:l}=bg(),d=s?v.Children.map(e,(p,m)=>{if(!v.isValidElement(p)||m!==0)return p;const g=v.Children.toArray(p.props.children);return v.cloneElement(p,{},[...g,n.jsx(kg,{hoverable:!0,onClick:l,className:Et.addCell,"aria-label":"Add column",children:n.jsx(So,{size:14,strokeWidth:2})},"__add_col_head")])}):e;return n.jsx("thead",{ref:i,...o,children:d})});m_.displayName="TableHeader";const _g=v.forwardRef(({hoverable:e=!0,selected:o,className:i,children:s,...l},d)=>n.jsx("tr",{ref:d,className:ie(Et.row,i),"data-hoverable":e||void 0,"data-selected":o||void 0,"aria-selected":o,...l,children:s}));_g.displayName="TableRow";const hu=v.forwardRef(({align:e="left",compact:o,hoverable:i=!0,selected:s,className:l,children:d,...p},m)=>n.jsx("td",{ref:m,className:ie(Et.cell,l),"data-align":e!=="left"?e:void 0,"data-compact":o||void 0,"data-hoverable":i||void 0,"data-selected":s||void 0,"aria-selected":s,...p,children:d}));hu.displayName="TableCell";const g_=v.forwardRef(({children:e,...o},i)=>{const{addColumn:s,addRow:l,onAddRow:d}=bg(),p=s?v.Children.map(e,m=>{if(!v.isValidElement(m))return m;const g=v.Children.toArray(m.props.children);return v.cloneElement(m,{},[...g,n.jsx(hu,{"aria-hidden":"true",className:Et.addCell},"__add_col_pad")])}):e;return n.jsxs("tbody",{ref:i,...o,children:[p,l&&n.jsx(_g,{hoverable:!1,children:n.jsx(hu,{colSpan:999,onClick:d,className:Et.addRowCell,"aria-label":"Add row",children:n.jsxs("span",{className:Et.addRowLabel,children:[n.jsx(So,{size:14,strokeWidth:2}),"Add row"]})})})]})});g_.displayName="TableBody";const v_=v.forwardRef(({variant:e="primary",size:o="md",wrap:i,className:s,children:l,...d},p)=>n.jsx("span",{ref:p,className:ie(Et.cellText,s),"data-variant":e!=="primary"?e:void 0,"data-size":o!=="md"?o:void 0,"data-wrap":i||void 0,...d,children:l}));v_.displayName="CellText";const x_=v.forwardRef(({primary:e,secondary:o,className:i,...s},l)=>n.jsxs("div",{ref:l,className:ie(Et.cellStack,i),...s,children:[n.jsx("span",{className:Et.cellStackPrimary,children:e}),o&&n.jsx("span",{className:Et.cellStackSecondary,children:o})]}));x_.displayName="CellStack";const y_=v.forwardRef(({size:e="sm",...o},i)=>n.jsx(Ln,{ref:i,size:e,...o}));y_.displayName="CellTag";const w_=v.forwardRef(({size:e="sm",...o},i)=>n.jsx(vi,{ref:i,size:e,...o}));w_.displayName="CellStatusTag";const b_=v.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(Et.cellActions,e),...i,children:o}));b_.displayName="CellActions";const k_=v.forwardRef(({className:e,children:o,...i},s)=>n.jsx("div",{ref:s,className:ie(Et.cellControl,e),...i,children:o}));k_.displayName="CellControl";const __="_root_1afcs_8",C_="_secondary_1afcs_23",j_="_header_1afcs_28",S_="_headerText_1afcs_36",N_="_title_1afcs_43",M_="_subtitle_1afcs_52",R_="_action_1afcs_61",L_="_hero_1afcs_66",$_="_heroValue_1afcs_74",A_="_heroCaption_1afcs_83",T_="_heroChange_1afcs_89",I_="_body_1afcs_95",E_="_legend_1afcs_103",fn={root:__,secondary:C_,header:j_,headerText:S_,title:N_,subtitle:M_,action:R_,hero:L_,heroValue:$_,heroCaption:A_,heroChange:T_,body:I_,legend:E_},P_=v.forwardRef(({title:e,subtitle:o,action:i,value:s,valueChange:l,valueCaption:d,legend:p,secondary:m,children:g,className:y,...x},b)=>n.jsxs("div",{ref:b,className:ie(fn.root,m&&fn.secondary,y),...x,children:[n.jsxs("div",{className:fn.header,children:[n.jsxs("div",{className:fn.headerText,children:[n.jsx("h3",{className:fn.title,children:e}),o&&n.jsx("p",{className:fn.subtitle,children:o})]}),i&&n.jsx("div",{className:fn.action,children:i})]}),(s!==void 0||l||d)&&n.jsxs("div",{className:fn.hero,children:[s!==void 0&&n.jsx("span",{className:fn.heroValue,children:s}),l&&n.jsx("span",{className:fn.heroChange,children:l}),d&&n.jsx("span",{className:fn.heroCaption,children:d})]}),n.jsx("div",{className:fn.body,children:g}),p&&n.jsx("div",{className:fn.legend,children:p})]}));P_.displayName="ChartCard";const z_="_root_je8nq_7",O_="_item_je8nq_17",D_="_swatch_je8nq_23",F_="_label_je8nq_29",B_="_bookend_je8nq_33",Jo={root:z_,item:O_,swatch:D_,label:F_,bookend:B_},Cg=v.forwardRef(({items:e,before:o,after:i,variant:s="square",swatchSize:l=12,className:d,...p},m)=>n.jsxs("div",{ref:m,className:ie(Jo.root,d),...p,children:[o&&n.jsx("span",{className:Jo.bookend,children:o}),e.map((g,y)=>{const x=s==="line"?{width:l+4,height:2,background:g.color,borderRadius:1}:s==="dot"?{width:l-2,height:l-2,background:g.color,borderRadius:"50%"}:{width:l,height:l,background:g.color};return n.jsxs("span",{className:Jo.item,children:[n.jsx("span",{className:Jo.swatch,style:x,"aria-hidden":"true"}),g.label!==void 0&&n.jsx("span",{className:Jo.label,children:g.label})]},y)}),i&&n.jsx("span",{className:Jo.bookend,children:i})]}));Cg.displayName="ChartLegend";const W_="_root_igkx4_5",H_="_svgWrap_igkx4_13",U_="_svg_igkx4_13",q_="_gridLine_igkx4_23",V_="_axisLabel_igkx4_28",G_="_legendWrap_igkx4_43",Y_="_legendItem_igkx4_51",K_="_legendDot_igkx4_57",Q_="_legendLabel_igkx4_64",Z_="_tooltip_igkx4_71",X_="_tooltipLabel_igkx4_85",J_="_tooltipRow_igkx4_95",eC="_tooltipDot_igkx4_101",tC="_tooltipSeries_igkx4_108",nC="_tooltipValue_igkx4_115",Oe={root:W_,svgWrap:H_,svg:U_,gridLine:q_,axisLabel:V_,legendWrap:G_,legendItem:Y_,legendDot:K_,legendLabel:Q_,tooltip:Z_,tooltipLabel:X_,tooltipRow:J_,tooltipDot:eC,tooltipSeries:tC,tooltipValue:nC},rC=["var(--Alloy-blue-500)","var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)","var(--Alloy-azure-500)","var(--Alloy-blue-300)"];function zd(e){if(e===0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e))),i=e/o;return i<=1?o:i<=2?2*o:i<=5?5*o:10*o}function ea(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}const oC=v.forwardRef(({series:e,labels:o,variant:i="grouped",height:s=260,showGrid:l=!0,showLegend:d=!0,yUnit:p="",barRadius:m=2,colors:g,gradientFrom:y="#8c4fe2",gradientTo:x="#446cff",formatTooltipValue:b,stackStyle:k="gradient-each",capColor:S,className:_,...j},N)=>{var q,O,Y,de;const $=g&&g.length>0?g:rC,M=`bar-grad-${Math.random().toString(36).slice(2,9)}`,[C,z]=v.useState({visible:!1,x:0,y:0,label:"",items:[]}),R=v.useRef(null),[L,T]=v.useState(540);v.useEffect(()=>{const le=R.current;if(!le)return;const ge=new ResizeObserver(we=>{var Le;const be=(Le=we[0])==null?void 0:Le.contentRect.width;be>0&&T(Math.floor(be))});ge.observe(le);const xe=Math.floor(le.getBoundingClientRect().width);return xe>0&&T(xe),()=>ge.disconnect()},[]);const E=44,B=0,G=20,J=20,W=L,K=s,te=W-E-B,ae=K-G-J,ce=5,se=e.map((le,ge)=>le.color??$[ge%$.length]);let Q=0;i==="stacked"?o.forEach((le,ge)=>{const xe=e.reduce((we,be)=>we+(be.data[ge]??0),0);xe>Q&&(Q=xe)}):i==="horizontal"?Q=Math.max(...((q=e[0])==null?void 0:q.data)??[0]):e.forEach(le=>le.data.forEach(ge=>{ge>Q&&(Q=ge)}));const D=zd(Q),H=Array.from({length:ce+1},(le,ge)=>D*(ge/ce)).reverse(),I=le=>J+ae-le/D*ae,A=te/o.length,V=3,Z=i==="grouped"?Math.max(4,(A-V*(e.length+1))/e.length):A,oe=()=>z(le=>({...le,visible:!1})),pe=v.useCallback(le=>{const ge=le.currentTarget.getBoundingClientRect(),xe=le.clientX-ge.left,we=Math.floor((xe-E)/A);if(we<0||we>=o.length){oe();return}const be=e.map((Le,Be)=>({color:se[Be],series:Le.label,value:Le.data[we]??0}));z({visible:!0,x:le.clientX+12,y:le.clientY-8,label:o[we],items:be})},[e,o,A,se,E]);if(i==="gradient"){const le=((O=e[0])==null?void 0:O.data)??[],ge=((Y=e[0])==null?void 0:Y.label)??"",xe=44,we=0,be=20,Le=20,Be=Math.max(W-xe-we,1),ze=K-be-Le,Te=Math.max(0,...le),Ge=Te>0?zd(Te):10,Ve=5,it=Array.from({length:Ve+1},(Ie,Ze)=>Ge*Ze/Ve),We=Ie=>be+ze-Ie/Ge*ze,yt=Be/Math.max(1,le.length),ht=Ie=>xe+yt*Ie,Ut=Ie=>xe+yt*(Ie+1),ct=Ie=>xe+yt*(Ie+.5),Ot=le.length===0?"":le.map((Ie,Ze)=>{const dt=We(Ie);return`M ${ht(Ze)} ${dt} L ${Ut(Ze)} ${dt}`}).join(" "),Vn=[];le.forEach((Ie,Ze)=>{if(Ie<=0)return;const dt=We(Ie);Vn.push({x:ht(Ze),y:dt,width:Math.max(Ut(Ze)-ht(Ze),0),height:be+ze-dt})});const nr=Math.max(1,Math.ceil(45/yt)),rr=o.length-1,wr=b??(Ie=>`${ea(Ie)}${p}`);return n.jsxs("div",{ref:N,className:ie(Oe.root,_),...j,children:[n.jsx("div",{ref:R,className:Oe.svgWrap,children:n.jsxs("svg",{width:W,height:K,viewBox:`0 0 ${W} ${K}`,className:Oe.svg,onMouseLeave:oe,onMouseMove:Ie=>{const Ze=Ie.currentTarget.getBoundingClientRect(),dt=Ie.clientX-Ze.left,_t=Math.floor((dt-xe)/yt);if(_t<0||_t>=le.length){oe();return}z({visible:!0,x:Ie.clientX+12,y:Ie.clientY-8,label:o[_t]??"",items:[{color:x,series:ge,value:le[_t]??0}]})},children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:`${M}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:y}),n.jsx("stop",{offset:"100%",stopColor:x})]}),n.jsxs("linearGradient",{id:`${M}-fill`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:y,stopOpacity:"0.3"}),n.jsx("stop",{offset:"100%",stopColor:x,stopOpacity:"0"})]})]}),it.map((Ie,Ze)=>n.jsxs("g",{children:[l&&n.jsx("line",{x1:0,x2:W-we,y1:We(Ie),y2:We(Ie),className:Oe.gridLine}),n.jsxs("text",{x:0,y:We(Ie)-6,className:Oe.axisLabel,textAnchor:"start",children:[ea(Ie),p]})]},`t-${Ze}`)),Vn.map((Ie,Ze)=>n.jsx("rect",{x:Ie.x,y:Ie.y,width:Ie.width,height:Ie.height,fill:`url(#${M}-fill)`},`b-${Ze}`)),Ot&&n.jsx("path",{d:Ot,fill:"none",stroke:`url(#${M}-stroke)`,strokeWidth:2.5,strokeLinejoin:"miter",strokeLinecap:"butt"}),C.visible&&(()=>{var or;const Ie=(or=R.current)==null?void 0:or.getBoundingClientRect();if(!Ie)return null;const Ze=C.x-12-Ie.left,dt=Math.floor((Ze-xe)/yt);if(dt<0||dt>=le.length)return null;const _t=le[dt]??0;return _t<=0?null:n.jsx("circle",{cx:ct(dt),cy:We(_t),r:4,fill:x,stroke:"var(--color-bg-primary, #ffffff)",strokeWidth:2})})(),o.map((Ie,Ze)=>{const dt=Ze===0,_t=Ze===rr;if(!(dt||_t)&&Ze%nr!==0)return null;const eo=dt?xe:_t?W-we:ct(Ze),Gn=dt?"start":_t?"end":"middle";return n.jsx("text",{x:eo,y:K-Le+18,className:Oe.axisLabel,textAnchor:Gn,children:Ie},`xl-${Ze}`)})]})}),C.visible&&C.items.length>0&&n.jsxs("div",{className:Oe.tooltip,style:{left:C.x,top:C.y},children:[n.jsx("div",{className:Oe.tooltipLabel,children:C.label}),C.items.map(Ie=>n.jsxs("div",{className:Oe.tooltipRow,children:[n.jsx("span",{className:Oe.tooltipDot,style:{background:Ie.color}}),n.jsx("span",{className:Oe.tooltipSeries,children:Ie.series}),n.jsx("span",{className:Oe.tooltipValue,children:wr(Ie.value)})]},Ie.series))]})]})}if(i==="horizontal"){const le=((de=e[0])==null?void 0:de.data)??[],ge=zd(Math.max(...le,1)),xe=28,we=10,be=120,Be=W-be-44,ze=o.length*(xe+we)+we;return n.jsxs("div",{ref:N,className:ie(Oe.root,_),...j,children:[n.jsx("div",{ref:R,className:Oe.svgWrap,children:n.jsx("svg",{width:W,height:ze,viewBox:`0 0 ${W} ${ze}`,className:Oe.svg,onMouseLeave:oe,onMouseMove:Te=>{var We;const Ge=Te.currentTarget.getBoundingClientRect(),Ve=Te.clientY-Ge.top,it=Math.floor(Ve/(xe+we));if(it<0||it>=o.length){oe();return}z({visible:!0,x:Te.clientX+12,y:Te.clientY-8,label:o[it],items:[{color:se[0],series:((We=e[0])==null?void 0:We.label)??"",value:le[it]??0}]})},children:o.map((Te,Ge)=>{const Ve=we+Ge*(xe+we),it=le[Ge]??0,We=it/ge*Be;return n.jsxs("g",{children:[n.jsx("text",{x:be-8,y:Ve+xe/2+4,className:Oe.axisLabel,textAnchor:"end",children:Te}),n.jsx("rect",{x:be,y:Ve,width:We,height:xe,rx:m,fill:se[0]}),n.jsxs("text",{x:be+We+6,y:Ve+xe/2+4,className:Oe.axisLabel,textAnchor:"start",children:[ea(it),p]})]},Ge)})})}),C.visible&&n.jsxs("div",{className:Oe.tooltip,style:{left:C.x,top:C.y},children:[n.jsx("div",{className:Oe.tooltipLabel,children:C.label}),C.items.map(Te=>n.jsxs("div",{className:Oe.tooltipRow,children:[n.jsx("span",{className:Oe.tooltipDot,style:{background:Te.color}}),n.jsx("span",{className:Oe.tooltipSeries,children:Te.series}),n.jsxs("span",{className:Oe.tooltipValue,children:[ea(Te.value),p]})]},Te.series))]})]})}return n.jsxs("div",{ref:N,className:ie(Oe.root,_),...j,children:[n.jsx("div",{ref:R,className:Oe.svgWrap,children:n.jsxs("svg",{width:W,height:K,viewBox:`0 0 ${W} ${K}`,className:Oe.svg,onMouseMove:pe,onMouseLeave:oe,children:[n.jsx("defs",{children:se.flatMap((le,ge)=>[n.jsxs("linearGradient",{id:`${M}-fill-${ge}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:le,stopOpacity:"0.3"}),n.jsx("stop",{offset:"100%",stopColor:le,stopOpacity:"0"})]},`soft-${ge}`),n.jsxs("linearGradient",{id:`${M}-fill-strong-${ge}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:le,stopOpacity:"1"}),n.jsx("stop",{offset:"100%",stopColor:le,stopOpacity:"0"})]},`strong-${ge}`)])}),H.map(le=>{const ge=I(le);return n.jsxs("g",{children:[l&&n.jsx("line",{x1:0,y1:ge,x2:W-B,y2:ge,className:Oe.gridLine}),n.jsxs("text",{x:0,y:ge-6,className:Oe.axisLabel,textAnchor:"start",children:[ea(le),p]})]},le)}),o.map((le,ge)=>{const xe=E+ge*A;if(i==="stacked"){let Le=0;const Be=e.map((We,yt)=>{const ht=We.data[ge]??0,Ut=ht/D*ae,ct=I(Le+ht);return Le+=ht,{si:yt,value:ht,barH:Ut,y:ct}}),ze=xe+(A-Z)/2,Te=Be.filter(We=>We.value>0),Ge=Te.length>0?Te[0].si:-1,Ve=Te.length>0?Te[Te.length-1]:null,it=S??(Ve?se[Ve.si]:"transparent");return n.jsxs("g",{children:[Be.map(({si:We,value:yt,barH:ht,y:Ut})=>{if(yt<=0)return null;if(k==="mono-scale"){const ct=We===Ge;return n.jsx("rect",{x:ze,y:Ut,width:Z,height:ht,fill:ct?`url(#${M}-fill-strong-${We})`:se[We]},`fill-${We}`)}return n.jsx("rect",{x:ze,y:Ut,width:Z,height:ht,fill:`url(#${M}-fill-${We})`},`fill-${We}`)}),k==="mono-scale"?Ve&&n.jsx("line",{x1:ze,x2:ze+Z,y1:Ve.y,y2:Ve.y,stroke:it,strokeWidth:2,strokeLinecap:"butt"}):Be.map(({si:We,value:yt,y:ht})=>yt>0?n.jsx("line",{x1:ze,x2:ze+Z,y1:ht,y2:ht,stroke:se[We],strokeWidth:2,strokeLinecap:"butt"},`cap-${We}`):null)]},ge)}const we=e.length*Z+(e.length-1)*V,be=xe+(A-we)/2;return n.jsx("g",{children:e.map((Le,Be)=>{const ze=Le.data[ge]??0;if(ze<=0)return null;const Te=ze/D*ae,Ge=be+Be*(Z+V),Ve=I(ze);return n.jsxs("g",{children:[n.jsx("rect",{x:Ge,y:Ve,width:Z,height:Te,fill:`url(#${M}-fill-${Be})`}),n.jsx("line",{x1:Ge,x2:Ge+Z,y1:Ve,y2:Ve,stroke:se[Be],strokeWidth:2,strokeLinecap:"butt"})]},Be)})},ge)}),(()=>{const ge=Math.max(1,Math.ceil(45/A)),xe=o.length-1;return o.map((we,be)=>{const Le=be===0,Be=be===xe;if(!(Le||Be)&&be%ge!==0)return null;const Te=Le?E:Be?W-B:E+A*(be+.5),Ge=Le?"start":Be?"end":"middle";return n.jsx("text",{x:Te,y:K-G+18,className:Oe.axisLabel,textAnchor:Ge,children:we},`xl-${be}`)})})()]})}),d&&e.length>1&&n.jsx("div",{className:Oe.legendWrap,children:e.map((le,ge)=>n.jsxs("div",{className:Oe.legendItem,children:[n.jsx("span",{className:Oe.legendDot,style:{background:se[ge]}}),n.jsx("span",{className:Oe.legendLabel,children:le.label})]},le.label))}),C.visible&&n.jsxs("div",{className:Oe.tooltip,style:{left:C.x,top:C.y},children:[n.jsx("div",{className:Oe.tooltipLabel,children:C.label}),C.items.map(le=>n.jsxs("div",{className:Oe.tooltipRow,children:[n.jsx("span",{className:Oe.tooltipDot,style:{background:le.color}}),n.jsx("span",{className:Oe.tooltipSeries,children:le.series}),n.jsxs("span",{className:Oe.tooltipValue,children:[ea(le.value),p]})]},le.series))]})]})});oC.displayName="BarChart";const aC="_root_1crij_5",iC="_svgWrap_1crij_13",sC="_svg_1crij_13",lC="_gridLine_1crij_23",cC="_axisLabelY_1crij_35 _axisLabel_1crij_28",dC="_axisLabelX_1crij_39 _axisLabel_1crij_28",uC="_legendWrap_1crij_51",pC="_tooltip_1crij_76",hC="_tooltipLabel_1crij_95",fC="_tooltipRow_1crij_105",mC="_tooltipDot_1crij_111",gC="_tooltipSeries_1crij_118",vC="_tooltipValue_1crij_125",mn={root:aC,svgWrap:iC,svg:sC,gridLine:lC,axisLabelY:cC,axisLabelX:dC,legendWrap:uC,tooltip:pC,tooltipLabel:hC,tooltipRow:fC,tooltipDot:mC,tooltipSeries:gC,tooltipValue:vC};function xC(e){if(e===0)return 10;const o=Math.pow(10,Math.floor(Math.log10(e))),i=e/o;return i<=1?o:i<=2?2*o:i<=5?5*o:10*o}function bf(e){return e>=1e3?`${(e/1e3).toFixed(e%1e3===0?0:1)}k`:String(Math.round(e))}function yC(e,o=.35){if(e.length<2)return"";let i=`M ${e[0][0]} ${e[0][1]}`;for(let s=0;s<e.length-1;s++){const[l,d]=e[s],[p,m]=e[s+1],g=(p-l)*o;i+=` C ${l+g} ${d}, ${p-g} ${m}, ${p} ${m}`}return i}const wC=v.forwardRef(({series:e,labels:o,height:i=260,showGrid:s=!0,showLegend:l=!0,gradientFrom:d="#8c4fe2",gradientTo:p="#446cff",yUnit:m="",yTickCount:g=5,className:y,...x},b)=>{const[k,S]=v.useState({visible:!1,x:0,y:0,label:"",items:[],index:-1}),_=`line-grad-${Math.random().toString(36).slice(2,9)}`,j=v.useRef(null),[N,$]=v.useState(540);v.useEffect(()=>{const D=j.current;if(!D)return;const H=new ResizeObserver(A=>{var Z;const V=(Z=A[0])==null?void 0:Z.contentRect.width;V>0&&$(Math.floor(V))});H.observe(D);const I=Math.floor(D.getBoundingClientRect().width);return I>0&&$(I),()=>H.disconnect()},[]);const M=44,C=20,z=20,R=N,L=i,T=R-M,E=L-C-z,B=`url(#${_}-stroke)`,G=D=>D.color??B,J=e.flatMap(D=>D.data),W=xC(Math.max(...J,1)),K=Array.from({length:g+1},(D,H)=>W*(H/g)).reverse(),te=D=>z+E-D/W*E,ae=D=>o.length>1?M+D/(o.length-1)*T:M+T/2,ce=D=>D.map((H,I)=>[ae(I),te(H)]),se=()=>S(D=>({...D,visible:!1})),Q=v.useCallback(D=>{const H=D.currentTarget.getBoundingClientRect(),A=D.clientX-H.left-M,V=T/Math.max(o.length-1,1),Z=Math.round(A/V),oe=Math.max(0,Math.min(Z,o.length-1)),pe=e.map(q=>({color:q.color??p,series:q.label,value:q.data[oe]??0}));S({visible:!0,index:oe,x:D.clientX+12,y:D.clientY-8,label:o[oe],items:pe})},[e,o,p,T,M]);return n.jsxs("div",{ref:b,className:ie(mn.root,y),...x,children:[n.jsx("div",{ref:j,className:mn.svgWrap,children:n.jsxs("svg",{width:R,height:L,viewBox:`0 0 ${R} ${L}`,className:mn.svg,onMouseMove:Q,onMouseLeave:se,children:[n.jsxs("defs",{children:[n.jsxs("linearGradient",{id:`${_}-stroke`,x1:"0",y1:"0",x2:"0",y2:"1",children:[n.jsx("stop",{offset:"0%",stopColor:d}),n.jsx("stop",{offset:"100%",stopColor:p})]}),n.jsxs("linearGradient",{id:`${_}-pin-line`,x1:"0",y1:"1",x2:"0",y2:"0",children:[n.jsx("stop",{offset:"0%",stopColor:p,stopOpacity:"0.05"}),n.jsx("stop",{offset:"50%",stopColor:p}),n.jsx("stop",{offset:"100%",stopColor:p,stopOpacity:"0.05"})]}),n.jsxs("filter",{id:`${_}-pin-shadow`,x:"-50%",y:"-50%",width:"200%",height:"200%",children:[n.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"4"}),n.jsx("feOffset",{dy:"4"}),n.jsx("feComponentTransfer",{children:n.jsx("feFuncA",{type:"linear",slope:"0.3"})}),n.jsxs("feMerge",{children:[n.jsx("feMergeNode",{}),n.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),n.jsx("clipPath",{id:`${_}-clip`,children:n.jsx("rect",{x:M,y:z,width:T,height:E,rx:6,ry:6})})]}),K.map(D=>{const H=te(D);return n.jsxs("g",{children:[s&&n.jsx("line",{x1:0,y1:H,x2:R,y2:H,className:mn.gridLine}),n.jsxs("text",{x:0,y:H-6,className:mn.axisLabelY,textAnchor:"start",children:[bf(D),m]})]},D)}),n.jsx("g",{clipPath:`url(#${_}-clip)`,children:e.map((D,H)=>{const I=ce(D.data),A=yC(I);return n.jsx("path",{d:A,fill:"none",stroke:G(D),strokeWidth:2.5,strokeLinecap:"round",strokeLinejoin:"round"},H)})}),(()=>{const D=k.index>=0?k.index:0,H=ae(D),I=k.visible&&k.index>=0,A="transform 200ms var(--ease-default, ease-out)";return n.jsx("g",{style:{pointerEvents:"none",opacity:I?1:0,transition:"opacity 160ms var(--ease-default, ease-out)"},children:n.jsxs("g",{style:{transform:`translateX(${H}px)`,transition:A},children:[n.jsx("line",{x1:0,x2:0,y1:z,y2:z+E,stroke:p,strokeWidth:2,strokeLinecap:"round",opacity:.5}),e.map((V,Z)=>{const oe=V.data[D]??0,pe=te(oe),q=V.color??p;return n.jsx("g",{style:{transform:`translateY(${pe}px)`,transition:A},children:n.jsx("circle",{cx:0,cy:0,r:4,fill:q,filter:`url(#${_}-pin-shadow)`})},Z)})]})})})(),(()=>{const H=o.length>1?T/(o.length-1):T,I=Math.max(1,Math.ceil(45/Math.max(H,1))),A=o.length-1;return o.map((V,Z)=>{const oe=Z===0,pe=Z===A;if(!(oe||pe)&&Z%I!==0)return null;const O=oe?M:pe?R:ae(Z),Y=oe?"start":pe?"end":"middle";return n.jsx("text",{x:O,y:L-C+14,className:mn.axisLabelX,textAnchor:Y,children:V},V)})})()]})}),l&&e.length>0&&n.jsx("div",{className:mn.legendWrap,children:n.jsx(Cg,{variant:"line",items:e.map(D=>({color:D.color??p,label:D.label}))})}),k.visible&&n.jsxs("div",{className:mn.tooltip,style:{left:k.x,top:k.y},children:[n.jsx("div",{className:mn.tooltipLabel,children:k.label}),k.items.map(D=>n.jsxs("div",{className:mn.tooltipRow,children:[n.jsx("span",{className:mn.tooltipDot,style:{background:D.color}}),n.jsx("span",{className:mn.tooltipSeries,children:D.series}),n.jsxs("span",{className:mn.tooltipValue,children:[bf(D.value),m]})]},D.series))]})]})});wC.displayName="LineChart";const bC="_root_3tq2n_5",kC="_chartWrap_3tq2n_14",_C="_svg_3tq2n_18",CC="_centerText_3tq2n_23",jC="_statLegend_3tq2n_31",SC="_statItem_3tq2n_37",NC="_statBar_3tq2n_44",MC="_statText_3tq2n_50",RC="_statValue_3tq2n_56",LC="_statLabel_3tq2n_65",$C="_listLegend_3tq2n_72",AC="_legendItem_3tq2n_79",TC="_legendDot_3tq2n_85",IC="_legendLabel_3tq2n_92",EC="_legendValue_3tq2n_99",PC="_tooltip_3tq2n_107",zC="_tooltipLabel_3tq2n_118",OC="_tooltipValue_3tq2n_124",$t={root:bC,chartWrap:kC,svg:_C,centerText:CC,statLegend:jC,statItem:SC,statBar:NC,statText:MC,statValue:RC,statLabel:LC,listLegend:$C,legendItem:AC,legendDot:TC,legendLabel:IC,legendValue:EC,tooltip:PC,tooltipLabel:zC,tooltipValue:OC},kf=["var(--Alloy-green-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-blue-500)","var(--Alloy-purple-500)","var(--Alloy-orange-500)"],DC=v.forwardRef(({segments:e,innerRadius:o=60,size:i=200,showLegend:s=!0,legendVariant:l="list",unit:d="%",centerLabel:p,className:m,...g},y)=>{const[x,b]=v.useState({visible:!1,x:0,y:0,label:"",value:""}),k=e.map((R,L)=>R.color??kf[L%kf.length]),S=e.reduce((R,L)=>R+L.value,0),_=i/2,j=i/2,N=i*.15,$=(i-N)/2-2,M=2*Math.PI*$;let C=-M/4;const z=e.map((R,L)=>{const E=(S>0?R.value/S:0)*M,B=`${E} ${M-E}`,G=-C;return C+=E,{dashArray:B,dashOffset:G,color:k[L],...R}});return n.jsxs("div",{ref:y,className:ie($t.root,m),...g,children:[n.jsx("div",{className:$t.chartWrap,children:n.jsxs("svg",{width:i,height:i,viewBox:`0 0 ${i} ${i}`,className:$t.svg,children:[n.jsx("circle",{cx:_,cy:j,r:$,fill:"none",stroke:"var(--color-border-opaque)",strokeWidth:N}),z.map((R,L)=>n.jsx("circle",{cx:_,cy:j,r:$,fill:"none",stroke:R.color,strokeWidth:N,strokeDasharray:R.dashArray,strokeDashoffset:R.dashOffset,strokeLinecap:"butt",style:{cursor:"pointer",transition:"opacity 0.15s"},onMouseEnter:T=>{const E=S>0?Math.round(R.value/S*100):0;b({visible:!0,x:T.clientX+12,y:T.clientY-8,label:R.label,value:`${E}${d}`})},onMouseLeave:()=>b(T=>({...T,visible:!1}))},L)),p&&o>0&&n.jsx("text",{x:_,y:j+6,textAnchor:"middle",className:$t.centerText,children:p})]})}),s&&l==="stat"&&n.jsx("div",{className:$t.statLegend,children:e.map((R,L)=>{const T=S>0?Math.round(R.value/S*100):0;return n.jsxs("div",{className:$t.statItem,children:[n.jsx("span",{className:$t.statBar,style:{background:k[L]}}),n.jsxs("div",{className:$t.statText,children:[n.jsxs("span",{className:$t.statValue,children:[T,d]}),n.jsx("span",{className:$t.statLabel,children:R.label})]})]},R.label)})}),s&&l==="list"&&n.jsx("div",{className:$t.listLegend,children:e.map((R,L)=>{const T=S>0?Math.round(R.value/S*100):0;return n.jsxs("div",{className:$t.legendItem,children:[n.jsx("span",{className:$t.legendDot,style:{background:k[L]}}),n.jsx("span",{className:$t.legendLabel,children:R.label}),n.jsxs("span",{className:$t.legendValue,children:[T,d]})]},R.label)})}),x.visible&&n.jsxs("div",{className:$t.tooltip,style:{left:x.x,top:x.y},children:[n.jsx("div",{className:$t.tooltipLabel,children:x.label}),n.jsx("div",{className:$t.tooltipValue,children:x.value})]})]})});DC.displayName="DonutChart";const FC="_root_bqpf6_5",BC="_svgWrap_bqpf6_10",WC="_svg_bqpf6_10",HC="_axisLabel_bqpf6_19",UC="_tooltip_bqpf6_25",ta={root:FC,svgWrap:BC,svg:WC,axisLabel:HC,tooltip:UC};function qC(e){return e<.35?"var(--Alloy-green-100)":e<.65?"var(--Alloy-yellow-300)":"var(--Alloy-red-500)"}const VC=v.forwardRef(({cells:e,rows:o,cols:i,colorScale:s=qC,cellRadius:l=4,cellGap:d=4,showTooltip:p=!0,className:m,...g},y)=>{const[x,b]=v.useState({visible:!1,x:0,y:0,content:""}),k=v.useRef(null),[S,_]=v.useState(540);v.useEffect(()=>{const L=k.current;if(!L)return;const T=new ResizeObserver(B=>{var J;const G=(J=B[0])==null?void 0:J.contentRect.width;G>0&&_(Math.floor(G))});T.observe(L);const E=Math.floor(L.getBoundingClientRect().width);return E>0&&_(E),()=>T.disconnect()},[]);const j=32,N=16,$=S,M=$-j-d,C=Math.max(4,(M-(i.length-1)*d)/i.length),z=o.length*(N+d)+d+24,R=new Map;return e.forEach(L=>R.set(`${L.row}__${L.col}`,L)),n.jsxs("div",{ref:y,className:ie(ta.root,m),...g,children:[n.jsx("div",{ref:k,className:ta.svgWrap,children:n.jsxs("svg",{width:$,height:z,viewBox:`0 0 ${$} ${z}`,className:ta.svg,onMouseLeave:()=>b(L=>({...L,visible:!1})),children:[i.map((L,T)=>{const E=j+d+T*(C+d)+C/2;return n.jsx("text",{x:E,y:12,className:ta.axisLabel,textAnchor:"middle",children:L},L)}),o.map((L,T)=>{const E=24+T*(N+d);return n.jsxs("g",{children:[n.jsx("text",{x:j-4,y:E+N/2+4,className:ta.axisLabel,textAnchor:"end",children:L}),i.map((B,G)=>{const J=R.get(`${L}__${B}`),W=(J==null?void 0:J.value)??0,K=s(W),te=j+d+G*(C+d);return n.jsx("rect",{x:te,y:E,width:C,height:N,rx:l,fill:K,style:{cursor:"pointer"},onMouseEnter:ae=>{if(!p)return;const ce=(J==null?void 0:J.label)??`${L} / ${B}: ${Math.round(W*100)}%`;b({visible:!0,x:ae.clientX+12,y:ae.clientY-8,content:ce})},onMouseLeave:()=>b(ae=>({...ae,visible:!1}))},B)})]},L)})]})}),x.visible&&n.jsx("div",{className:ta.tooltip,style:{left:x.x,top:x.y},children:x.content})]})});VC.displayName="HeatMap";const GC="_root_18572_6",YC="_gridWrap_18572_14",KC="_grid_18572_14",QC="_cell_18572_27",ZC="_legend_18572_33",XC="_legendSquare_18572_43",JC="_tooltip_18572_49",Hr={root:GC,gridWrap:YC,grid:KC,cell:QC,legend:ZC,legendSquare:XC,tooltip:JC},ej=["var(--color-bg-tertiary)","linear-gradient(to right, rgba(140, 79, 226, 0.25), rgba(68, 108, 255, 0.25))","linear-gradient(to right, rgba(140, 79, 226, 0.5),  rgba(68, 108, 255, 0.5))","linear-gradient(to right, rgba(140, 79, 226, 0.75), rgba(68, 108, 255, 0.75))","linear-gradient(to right, #8c4fe2 0%, #446cff 100%)"];function tj(e,o){if(e<=0)return 0;const i=e/Math.max(1,o);return i<=.25?1:i<=.5?2:i<=.75?3:4}const nj=v.forwardRef(({days:e,levelColors:o=ej,cellSize:i=14,cellGap:s=3,cellRadius:l=2,fillWidth:d=!1,showLegend:p=!0,maxCount:m,formatTooltip:g,ariaLabel:y,className:x,...b},k)=>{const[S,_]=v.useState({visible:!1,x:0,y:0,content:""}),j=m??Math.max(1,...e.map(C=>C.count)),N=[];for(let C=0;C<e.length;C+=7)N.push(e.slice(C,C+7));const $=d?{gridTemplateRows:`repeat(7, ${i}px)`,gridTemplateColumns:`repeat(${N.length}, minmax(0, 1fr))`,gap:`${s}px`,width:"100%"}:{gridTemplateRows:`repeat(7, ${i}px)`,gridAutoColumns:`${i}px`,gap:`${s}px`},M=d?"100%":i;return n.jsxs("div",{ref:k,className:ie(Hr.root,x),...b,children:[n.jsx("div",{className:Hr.gridWrap,children:n.jsx("div",{role:"img","aria-label":y??`Activity heatmap with max ${j} on the busiest day`,className:Hr.grid,style:$,onMouseLeave:()=>_(C=>({...C,visible:!1})),children:N.map((C,z)=>Array.from({length:7},(R,L)=>{const T=C[L];if(!T)return n.jsx("span",{className:Hr.cell,style:{width:i,height:i,borderRadius:l,background:o[0]}},`${z}-${L}`);const E=tj(T.count,j),B=g?g(T,E):`${T.label??T.date}: ${T.count} activation${T.count===1?"":"s"}`;return n.jsx("span",{className:Hr.cell,style:{width:M,height:i,borderRadius:l,background:o[E]},onMouseMove:G=>_({visible:!0,x:G.clientX,y:G.clientY,content:B}),onMouseLeave:()=>_(G=>({...G,visible:!1}))},`${z}-${L}`)}))})}),p&&n.jsxs("div",{className:Hr.legend,children:[n.jsx("span",{children:"Less"}),[0,1,2,3,4].map(C=>n.jsx("span",{className:Hr.legendSquare,style:{background:o[C],borderRadius:l}},C)),n.jsx("span",{children:"More"})]}),S.visible&&n.jsx("div",{className:Hr.tooltip,style:{left:S.x,top:S.y},children:S.content})]})});nj.displayName="ActivityHeatMap";const rj="_root_14edh_5",oj="_track_14edh_17",aj="_segment_14edh_28",ij="_legend_14edh_49",sj="_legendRow_14edh_58",lj="_legendDot_14edh_68",cj="_legendLabel_14edh_74",dj="_legendValue_14edh_78",uj="_tooltip_14edh_84",pj="_tooltipLabel_14edh_100",hj="_tooltipValueRow_14edh_105",fj="_tooltipDot_14edh_114",Mn={root:rj,track:oj,segment:aj,legend:ij,legendRow:sj,legendDot:lj,legendLabel:cj,legendValue:dj,tooltip:uj,tooltipLabel:pj,tooltipValueRow:hj,tooltipDot:fj},mj=["var(--Alloy-green-500)","var(--Alloy-slate-400)","var(--Alloy-blue-500)","var(--Alloy-yellow-400)","var(--Alloy-red-500)","var(--Alloy-purple-500)"],na={r:140,g:79,b:226},Od={r:68,g:108,b:255};function _f(e){const o=Math.max(0,Math.min(100,e))/100,i=Math.round(na.r+(Od.r-na.r)*o),s=Math.round(na.g+(Od.g-na.g)*o),l=Math.round(na.b+(Od.b-na.b)*o);return`rgb(${i}, ${s}, ${l})`}const gj=v.forwardRef(({segments:e,colors:o=mj,aiGradient:i=!1,height:s,showLegend:l=!1,flat:d=!1,ariaLabel:p,className:m,...g},y)=>{const[x,b]=v.useState({visible:!1,x:0,y:0,label:"",value:0,color:""}),k=e.reduce((N,$)=>N+Math.max(0,$.value),0);let S=0;const _=e.map((N,$)=>{const M=Math.max(0,N.value),C=k>0?M/k*100:0,z=k>0?S/k*100:0;S+=M;const R=k>0?S/k*100:0,L=N.color??o[$%o.length],T=d?!0:N.emphasized??$===0;return{...N,pct:C,startPct:z,endPct:R,color:L,emphasized:T}}),j=s!==void 0?{height:typeof s=="number"?`${s}px`:s}:void 0;return n.jsxs("div",{ref:y,className:ie(Mn.root,m),...g,children:[n.jsx("div",{role:"img","aria-label":p??`Ratio bar: ${e.map(N=>`${N.label} ${N.value}`).join(", ")}`,className:Mn.track,style:j,onMouseLeave:()=>b(N=>({...N,visible:!1})),children:_.map(N=>{const $=i?`linear-gradient(to right, ${_f(N.startPct)}, ${_f(N.endPct)})`:N.color;return n.jsx("span",{className:Mn.segment,"data-emphasized":N.emphasized||void 0,"data-ai":i||void 0,style:{width:`${N.pct}%`,background:$,"--ratio-hover-bg":N.color},onMouseMove:M=>b({visible:!0,x:M.clientX,y:M.clientY,label:N.label,value:N.value,color:N.color})},N.label)})}),l&&n.jsx("ul",{className:Mn.legend,children:_.map(N=>n.jsxs("li",{className:Mn.legendRow,children:[n.jsx("span",{className:Mn.legendDot,style:{background:N.color}}),n.jsx("span",{className:Mn.legendLabel,children:N.label}),n.jsx("span",{className:Mn.legendValue,children:N.value.toLocaleString("en-US")})]},N.label))}),x.visible&&n.jsxs("div",{className:Mn.tooltip,style:{left:x.x,top:x.y},children:[n.jsx("span",{className:Mn.tooltipLabel,children:x.label}),n.jsxs("span",{className:Mn.tooltipValueRow,children:[n.jsx("span",{className:Mn.tooltipDot,style:{background:x.color}}),x.value.toLocaleString("en-US")]})]})]})});gj.displayName="RatioBar";const vj="_track_1wmly_6",xj="_fill_1wmly_12",Cf={track:vj,fill:xj},yj=v.forwardRef(({value:e,max:o=100,fill:i="linear-gradient(to right, #8c4fe2 0%, #446cff 100%)",trackColor:s="var(--color-bg-tertiary)",gapColor:l="var(--color-bg-primary)",stripeWidth:d=2,stripeGap:p=1,height:m=12,ariaLabel:g,className:y,style:x,...b},k)=>{const S=d+p,_=`repeating-linear-gradient(
      to right,
      transparent 0,
      transparent ${d}px,
      ${l} ${d}px,
      ${l} ${S}px
    )`,j=Math.max(0,Math.min(o,e)),N=o>0?j/o*100:0;return n.jsx("div",{ref:k,role:"progressbar","aria-label":g??`Progress: ${Math.round(N)}%`,"aria-valuemin":0,"aria-valuemax":o,"aria-valuenow":j,className:ie(Cf.track,y),style:{height:m,background:`${_}, ${s}`,...x},...b,children:n.jsx("div",{className:Cf.fill,style:{width:`${N}%`,background:`${_}, ${i}`}})})});yj.displayName="StripedBar";const wj=[{color:"#FFA79B",position:"5.75%"},{color:"#FF8825",position:"34.95%"},{color:"#FC6684",position:"65.93%"},{color:"#FD4274",position:"100%"}],bj=[{color:"#8C4FE2",position:"0%"},{color:"#446CFF",position:"50%"},{color:"#1EDFDE",position:"100%"}];function jf(e,o="to right"){const i=e.map(({color:s,position:l})=>`${s} ${l}`).join(", ");return`linear-gradient(${o}, ${i})`}jf(wj),jf(bj);var at="-ms-",fi="-moz-",Qe="-webkit-",jg="comm",Tl="rule",Zu="decl",kj="@import",_j="@namespace",Sg="@keyframes",Cj="@layer",Ng=Math.abs,Xu=String.fromCharCode,fu=Object.assign;function jj(e,o){return St(e,0)^45?(((o<<2^St(e,0))<<2^St(e,1))<<2^St(e,2))<<2^St(e,3):0}function Mg(e){return e.trim()}function gr(e,o){return(e=o.exec(e))?e[0]:e}function Pe(e,o,i){return e.replace(o,i)}function al(e,o,i){return e.indexOf(o,i)}function St(e,o){return e.charCodeAt(o)|0}function Co(e,o,i){return e.slice(o,i)}function Wn(e){return e.length}function Rg(e){return e.length}function di(e,o){return o.push(e),e}function Sj(e,o){return e.map(o).join("")}function Sf(e,o){return e.filter(function(i){return!gr(i,o)})}var Il=1,fa=1,Lg=0,An=0,kt=0,ka="";function El(e,o,i,s,l,d,p,m){return{value:e,root:o,parent:i,type:s,props:l,children:d,line:Il,column:fa,length:p,return:"",siblings:m}}function Ur(e,o){return fu(El("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},o)}function ra(e){for(;e.root;)e=Ur(e.root,{children:[e]});di(e,e.siblings)}function Nj(){return kt}function Mj(){return kt=An>0?St(ka,--An):0,fa--,kt===10&&(fa=1,Il--),kt}function Un(){return kt=An<Lg?St(ka,An++):0,fa++,kt===10&&(fa=1,Il++),kt}function Gr(){return St(ka,An)}function il(){return An}function Pl(e,o){return Co(ka,e,o)}function xi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Rj(e){return Il=fa=1,Lg=Wn(ka=e),An=0,[]}function Lj(e){return ka="",e}function Dd(e){return Mg(Pl(An-1,mu(e===91?e+2:e===40?e+1:e)))}function $j(e){for(;(kt=Gr())&&kt<33;)Un();return xi(e)>2||xi(kt)>3?"":" "}function Aj(e,o){for(;--o&&Un()&&!(kt<48||kt>102||kt>57&&kt<65||kt>70&&kt<97););return Pl(e,il()+(o<6&&Gr()==32&&Un()==32))}function mu(e){for(;Un();)switch(kt){case e:return An;case 34:case 39:e!==34&&e!==39&&mu(kt);break;case 40:e===41&&mu(e);break;case 92:Un();break}return An}function Tj(e,o){for(;Un()&&e+kt!==57;)if(e+kt===84&&Gr()===47)break;return"/*"+Pl(o,An-1)+"*"+Xu(e===47?e:Un())}function Ij(e){for(;!xi(Gr());)Un();return Pl(e,An)}function Ej(e){return Lj(sl("",null,null,null,[""],e=Rj(e),0,[0],e))}function sl(e,o,i,s,l,d,p,m,g){for(var y=0,x=0,b=p,k=0,S=0,_=0,j=1,N=1,$=1,M=0,C="",z=l,R=d,L=s,T=C;N;)switch(_=M,M=Un()){case 40:if(_!=108&&St(T,b-1)==58){al(T+=Pe(Dd(M),"&","&\f"),"&\f",Ng(y?m[y-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:T+=Dd(M);break;case 9:case 10:case 13:case 32:T+=$j(_);break;case 92:T+=Aj(il()-1,7);continue;case 47:switch(Gr()){case 42:case 47:di(Pj(Tj(Un(),il()),o,i,g),g),(xi(_||1)==5||xi(Gr()||1)==5)&&Wn(T)&&Co(T,-1,void 0)!==" "&&(T+=" ");break;default:T+="/"}break;case 123*j:m[y++]=Wn(T)*$;case 125*j:case 59:case 0:switch(M){case 0:case 125:N=0;case 59+x:$==-1&&(T=Pe(T,/\f/g,"")),S>0&&(Wn(T)-b||j===0&&_===47)&&di(S>32?Mf(T+";",s,i,b-1,g):Mf(Pe(T," ","")+";",s,i,b-2,g),g);break;case 59:T+=";";default:if(di(L=Nf(T,o,i,y,x,l,m,C,z=[],R=[],b,d),d),M===123)if(x===0)sl(T,o,L,L,z,d,b,m,R);else{switch(k){case 99:if(St(T,3)===110)break;case 108:if(St(T,2)===97)break;default:x=0;case 100:case 109:case 115:}x?sl(e,L,L,s&&di(Nf(e,L,L,0,0,l,m,C,l,z=[],b,R),R),l,R,b,m,s?z:R):sl(T,L,L,L,[""],R,0,m,R)}}y=x=S=0,j=$=1,C=T="",b=p;break;case 58:b=1+Wn(T),S=_;default:if(j<1){if(M==123)--j;else if(M==125&&j++==0&&Mj()==125)continue}switch(T+=Xu(M),M*j){case 38:$=x>0?1:(T+="\f",-1);break;case 44:m[y++]=(Wn(T)-1)*$,$=1;break;case 64:Gr()===45&&(T+=Dd(Un())),k=Gr(),x=b=Wn(C=T+=Ij(il())),M++;break;case 45:_===45&&Wn(T)==2&&(j=0)}}return d}function Nf(e,o,i,s,l,d,p,m,g,y,x,b){for(var k=l-1,S=l===0?d:[""],_=Rg(S),j=0,N=0,$=0;j<s;++j)for(var M=0,C=Co(e,k+1,k=Ng(N=p[j])),z=e;M<_;++M)(z=Mg(N>0?S[M]+" "+C:Pe(C,/&\f/g,S[M])))&&(g[$++]=z);return El(e,o,i,l===0?Tl:m,g,y,x,b)}function Pj(e,o,i,s){return El(e,o,i,jg,Xu(Nj()),Co(e,2,-2),0,s)}function Mf(e,o,i,s,l){return El(e,o,i,Zu,Co(e,0,s),Co(e,s+1,-1),s,l)}function $g(e,o,i){switch(jj(e,o)){case 5103:return Qe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Qe+e+e;case 4855:return Qe+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return fi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Qe+e+fi+e+at+e+e;case 5936:switch(St(e,o+11)){case 114:return Qe+e+at+Pe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Qe+e+at+Pe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Qe+e+at+Pe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Qe+e+at+e+e;case 6165:return Qe+e+at+"flex-"+e+e;case 5187:return Qe+e+Pe(e,/(\w+).+(:[^]+)/,Qe+"box-$1$2"+at+"flex-$1$2")+e;case 5443:return Qe+e+at+"flex-item-"+Pe(e,/flex-|-self/g,"")+(gr(e,/flex-|baseline/)?"":at+"grid-row-"+Pe(e,/flex-|-self/g,""))+e;case 4675:return Qe+e+at+"flex-line-pack"+Pe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Qe+e+at+Pe(e,"shrink","negative")+e;case 5292:return Qe+e+at+Pe(e,"basis","preferred-size")+e;case 6060:return Qe+"box-"+Pe(e,"-grow","")+Qe+e+at+Pe(e,"grow","positive")+e;case 4554:return Qe+Pe(e,/([^-])(transform)/g,"$1"+Qe+"$2")+e;case 6187:return Pe(Pe(Pe(e,/(zoom-|grab)/,Qe+"$1"),/(image-set)/,Qe+"$1"),e,"")+e;case 5495:case 3959:return Pe(e,/(image-set\([^]*)/,Qe+"$1$`$1");case 4968:return Pe(Pe(e,/(.+:)(flex-)?(.*)/,Qe+"box-pack:$3"+at+"flex-pack:$3"),/space-between/,"justify")+Qe+e+e;case 4200:if(!gr(e,/flex-|baseline/))return at+"grid-column-align"+Co(e,o)+e;break;case 2592:case 3360:return at+Pe(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(s,l){return o=l,gr(s.props,/grid-\w+-end/)})?~al(e+(i=i[o].value),"span",0)?e:at+Pe(e,"-start","")+e+at+"grid-row-span:"+(~al(i,"span",0)?gr(i,/\d+/):+gr(i,/\d+/)-+gr(e,/\d+/))+";":at+Pe(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(s){return gr(s.props,/grid-\w+-start/)})?e:at+Pe(Pe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Pe(e,/(.+)-inline(.+)/,Qe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Wn(e)-1-o>6)switch(St(e,o+1)){case 109:if(St(e,o+4)!==45)break;case 102:return Pe(e,/(.+:)(.+)-([^]+)/,"$1"+Qe+"$2-$3$1"+fi+(St(e,o+3)==108?"$3":"$2-$3"))+e;case 115:return~al(e,"stretch",0)?$g(Pe(e,"stretch","fill-available"),o,i)+e:e}break;case 5152:case 5920:return Pe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,d,p,m,g,y){return at+l+":"+d+y+(p?at+l+"-span:"+(m?g:+g-+d)+y:"")+e});case 4949:if(St(e,o+6)===121)return Pe(e,":",":"+Qe)+e;break;case 6444:switch(St(e,St(e,14)===45?18:11)){case 120:return Pe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Qe+(St(e,14)===45?"inline-":"")+"box$3$1"+Qe+"$2$3$1"+at+"$2box$3")+e;case 100:return Pe(e,":",":"+at)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Pe(e,"scroll-","scroll-snap-")+e}return e}function vl(e,o){for(var i="",s=0;s<e.length;s++)i+=o(e[s],s,e,o)||"";return i}function zj(e,o,i,s){switch(e.type){case Cj:if(e.children.length)break;case kj:case _j:case Zu:return e.return=e.return||e.value;case jg:return"";case Sg:return e.return=e.value+"{"+vl(e.children,s)+"}";case Tl:if(!Wn(e.value=e.props.join(",")))return""}return Wn(i=vl(e.children,s))?e.return=e.value+"{"+i+"}":""}function Oj(e){var o=Rg(e);return function(i,s,l,d){for(var p="",m=0;m<o;m++)p+=e[m](i,s,l,d)||"";return p}}function Dj(e){return function(o){o.root||(o=o.return)&&e(o)}}function Fj(e,o,i,s){if(e.length>-1&&!e.return)switch(e.type){case Zu:e.return=$g(e.value,e.length,i);return;case Sg:return vl([Ur(e,{value:Pe(e.value,"@","@"+Qe)})],s);case Tl:if(e.length)return Sj(i=e.props,function(l){switch(gr(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ra(Ur(e,{props:[Pe(l,/:(read-\w+)/,":"+fi+"$1")]})),ra(Ur(e,{props:[l]})),fu(e,{props:Sf(i,s)});break;case"::placeholder":ra(Ur(e,{props:[Pe(l,/:(plac\w+)/,":"+Qe+"input-$1")]})),ra(Ur(e,{props:[Pe(l,/:(plac\w+)/,":"+fi+"$1")]})),ra(Ur(e,{props:[Pe(l,/:(plac\w+)/,at+"input-$1")]})),ra(Ur(e,{props:[l]})),fu(e,{props:Sf(i,s)});break}return""})}}var la={},Fd,Bd;const ma=typeof process<"u"&&la!==void 0&&(la.REACT_APP_SC_ATTR||la.SC_ATTR)||"data-styled",Ag="active",Tg="data-styled-version",zl="6.4.2",Ju=`/*!sc*/
`,mi=typeof window<"u"&&typeof document<"u";function Rf(e){if(typeof process<"u"&&la!==void 0){const o=la[e];if(o!==void 0&&o!=="")return o!=="false"}}const Bj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Bd=(Fd=Rf("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Fd!==void 0?Fd:Rf("SC_DISABLE_SPEEDY"))!==null&&Bd!==void 0?Bd:typeof process<"u"&&la!==void 0&&!1),Ig="sc-keyframes-",Wj={};function Mi(e,...o){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${o.length>0?` Args: ${o.join(", ")}`:""}`)}let ll=new Map,xl=new Map,cl=1;const ui=e=>{if(ll.has(e))return ll.get(e);for(;xl.has(cl);)cl++;const o=cl++;return ll.set(e,o),xl.set(o,e),o},Hj=e=>xl.get(e),Uj=(e,o)=>{cl=o+1,ll.set(e,o),xl.set(o,e)},ep=Object.freeze([]),ga=Object.freeze({});function Eg(e,o,i=ga){return e.theme!==i.theme&&e.theme||o||i.theme}const qj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Vj=/(^-|-$)/g;function Pg(e){return e.replace(qj,"-").replace(Vj,"")}const Gj=/(a)(d)/gi,Lf=e=>String.fromCharCode(e+(e>25?39:97));function tp(e){let o,i="";for(o=Math.abs(e);o>52;o=o/52|0)i=Lf(o%52)+i;return(Lf(o%52)+i).replace(Gj,"$1-$2")}const gu=5381,_o=(e,o)=>{let i=o.length;for(;i;)e=33*e^o.charCodeAt(--i);return e},zg=e=>_o(gu,e);function np(e){return tp(zg(e)>>>0)}function Yj(e){return e.displayName||e.name||"Component"}function vu(e){return typeof e=="string"&&!0}function Kj(e){return vu(e)?`styled.${e}`:`Styled(${Yj(e)})`}const Og=Symbol.for("react.memo"),Qj=Symbol.for("react.forward_ref"),Zj={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Xj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Dg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jj={[Qj]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Og]:Dg};function $f(e){return("type"in(o=e)&&o.type.$$typeof)===Og?Dg:"$$typeof"in e?Jj[e.$$typeof]:Zj;var o}const eS=Object.defineProperty,tS=Object.getOwnPropertyNames,nS=Object.getOwnPropertySymbols,rS=Object.getOwnPropertyDescriptor,oS=Object.getPrototypeOf,aS=Object.prototype;function Fg(e,o,i){if(typeof o!="string"){const s=oS(o);s&&s!==aS&&Fg(e,s,i);const l=tS(o).concat(nS(o)),d=$f(e),p=$f(o);for(let m=0;m<l.length;++m){const g=l[m];if(!(g in Xj||i&&i[g]||p&&g in p||d&&g in d)){const y=rS(o,g);try{eS(e,g,y)}catch{}}}}return e}function Ri(e){return typeof e=="function"}const iS=Symbol.for("react.forward_ref");function rp(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===iS&&"styledComponentId"in e}function pi(e,o){return e&&o?e+" "+o:e||o||""}function yl(e,o){return e.join("")}function yi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function xu(e,o,i=!1){if(!i&&!yi(e)&&!Array.isArray(e))return o;if(Array.isArray(o))for(let s=0;s<o.length;s++)e[s]=xu(e[s],o[s]);else if(yi(o))for(const s in o)e[s]=xu(e[s],o[s]);return e}function op(e,o){Object.defineProperty(e,"toString",{value:o})}const sS=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let o=this._cIndex;if(e>this._cGroup)for(let i=this._cGroup;i<e;i++)o+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=e;i--)o-=this.groupSizes[i];return this._cGroup=e,this._cIndex=o,o}insertRules(e,o){if(e>=this.groupSizes.length){const l=this.groupSizes,d=l.length;let p=d;for(;e>=p;)if(p<<=1,p<0)throw Mi(16,`${e}`);this.groupSizes=new Uint32Array(p),this.groupSizes.set(l),this.length=p;for(let m=d;m<p;m++)this.groupSizes[m]=0}let i=this.indexOfGroup(e+1),s=0;for(let l=0,d=o.length;l<d;l++)this.tag.insertRule(i,o[l])&&(this.groupSizes[e]++,i++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)}clearGroup(e){if(e<this.length){const o=this.groupSizes[e],i=this.indexOfGroup(e),s=i+o;this.groupSizes[e]=0;for(let l=i;l<s;l++)this.tag.deleteRule(i);o>0&&this._cGroup>e&&(this._cIndex-=o)}}getGroup(e){let o="";if(e>=this.length||this.groupSizes[e]===0)return o;const i=this.groupSizes[e],s=this.indexOfGroup(e),l=s+i;for(let d=s;d<l;d++)o+=this.tag.getRule(d)+Ju;return o}},lS=`style[${ma}][${Tg}="${zl}"]`,cS=new RegExp(`^${ma}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Af=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,yu=e=>{if(!e)return document;if(Af(e))return e;if("getRootNode"in e){const o=e.getRootNode();if(Af(o))return o}return document},dS=(e,o,i)=>{const s=i.split(",");let l;for(let d=0,p=s.length;d<p;d++)(l=s[d])&&e.registerName(o,l)},uS=(e,o)=>{var i;const s=((i=o.textContent)!==null&&i!==void 0?i:"").split(Ju),l=[];for(let d=0,p=s.length;d<p;d++){const m=s[d].trim();if(!m)continue;const g=m.match(cS);if(g){const y=0|parseInt(g[1],10),x=g[2];y!==0&&(Uj(x,y),dS(e,x,g[3]),e.getTag().insertRules(y,l)),l.length=0}else l.push(m)}},Wd=e=>{const o=yu(e.options.target).querySelectorAll(lS);for(let i=0,s=o.length;i<s;i++){const l=o[i];l&&l.getAttribute(ma)!==Ag&&(uS(e,l),l.parentNode&&l.parentNode.removeChild(l))}};let ai=!1;function pS(){if(ai!==!1)return ai;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return ai=e.nonce||e.getAttribute("content")||void 0;const o=document.head.querySelector('meta[name="sc-nonce"]');if(o)return ai=o.getAttribute("content")||void 0}return ai=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Bg=(e,o)=>{const i=document.head,s=e||i,l=document.createElement("style"),d=(g=>{const y=Array.from(g.querySelectorAll(`style[${ma}]`));return y[y.length-1]})(s),p=d!==void 0?d.nextSibling:null;l.setAttribute(ma,Ag),l.setAttribute(Tg,zl);const m=o||pS();return m&&l.setAttribute("nonce",m),s.insertBefore(l,p),l},hS=class{constructor(e,o){this.element=Bg(e,o),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var s;if(i.sheet)return i.sheet;const l=(s=i.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let d=0,p=l.length;d<p;d++){const m=l[d];if(m.ownerNode===i)return m}throw Mi(17)})(this.element),this.length=0}insertRule(e,o){try{return this.sheet.insertRule(o,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const o=this.sheet.cssRules[e];return o&&o.cssText?o.cssText:""}},fS=class{constructor(e,o){this.element=Bg(e,o),this.nodes=this.element.childNodes,this.length=0}insertRule(e,o){if(e<=this.length&&e>=0){const i=document.createTextNode(o);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Tf=mi;const mS={isServer:!mi,useCSSOMInjection:!Bj};class Li{static registerId(o){return ui(o)}constructor(o=ga,i={},s){this.options=Object.assign(Object.assign({},mS),o),this.gs=i,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!o.isServer,!this.server&&mi&&Tf&&(Tf=!1,Wd(this)),op(this,()=>(l=>{const d=l.getTag(),{length:p}=d;let m="";for(let g=0;g<p;g++){const y=Hj(g);if(y===void 0)continue;const x=l.names.get(y);if(x===void 0||!x.size)continue;const b=d.getGroup(g);if(b.length===0)continue;const k=ma+".g"+g+'[id="'+y+'"]';let S="";for(const _ of x)_.length>0&&(S+=_+",");m+=b+k+'{content:"'+S+'"}'+Ju}return m})(this))}rehydrate(){!this.server&&mi&&Wd(this)}reconstructWithOptions(o,i=!0){const s=new Li(Object.assign(Object.assign({},this.options),o),this.gs,i&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&mi&&o.target!==this.options.target&&yu(this.options.target)!==yu(o.target)&&Wd(s),s}allocateGSInstance(o){return this.gs[o]=(this.gs[o]||0)+1}getTag(){return this.tag||(this.tag=(o=(({useCSSOMInjection:i,target:s,nonce:l})=>i?new hS(s,l):new fS(s,l))(this.options),new sS(o)));var o}hasNameForId(o,i){var s,l;return(l=(s=this.names.get(o))===null||s===void 0?void 0:s.has(i))!==null&&l!==void 0&&l}registerName(o,i){ui(o),o.startsWith(Ig)&&this.keyframeIds.add(o);const s=this.names.get(o);s?s.add(i):this.names.set(o,new Set([i]))}insertRules(o,i,s){this.registerName(o,i),this.getTag().insertRules(ui(o),s)}clearNames(o){this.names.has(o)&&this.names.get(o).clear()}clearRules(o){this.getTag().clearGroup(ui(o)),this.clearNames(o)}clearTag(){this.tag=void 0}}const Wg=new WeakSet,gS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function vS(e,o){return o==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||e in gS||e.startsWith("--")?String(o).trim():o+"px"}const wo=47;function If(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let o="";for(let i=0;i<e.length;i++){const s=e.charCodeAt(i);o+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):e[i]}return o.startsWith("ms-")?"-"+o:o}const Hg=Symbol.for("sc-keyframes");function xS(e){return typeof e=="object"&&e!==null&&Hg in e}function Ug(e){return Ri(e)&&!(e.prototype&&e.prototype.isReactComponent)}const qg=e=>e==null||e===!1||e==="",yS=Symbol.for("react.client.reference");function Ef(e){return e.$$typeof===yS}function Vg(e,o){for(const i in e){const s=e[i];e.hasOwnProperty(i)&&!qg(s)&&(Array.isArray(s)&&Wg.has(s)||Ri(s)?o.push(If(i)+":",s,";"):yi(s)?(o.push(i+" {"),Vg(s,o),o.push("}")):o.push(If(i)+": "+vS(i,s)+";"))}}function Qr(e,o,i,s,l=[]){if(qg(e))return l;const d=typeof e;if(d==="string")return l.push(e),l;if(d==="function"){if(Ef(e))return l;if(Ug(e)&&o){const p=e(o);return Qr(p,o,i,s,l)}return l.push(e),l}if(Array.isArray(e)){for(let p=0;p<e.length;p++)Qr(e[p],o,i,s,l);return l}return rp(e)?(l.push(`.${e.styledComponentId}`),l):xS(e)?(i?(e.inject(i,s),l.push(e.getName(s))):l.push(e),l):Ef(e)?l:yi(e)?e.toString!==Object.prototype.toString?(l.push(e.toString()),l):(Vg(e,l),l):(l.push(e.toString()),l)}const wS=zg(zl);class bS{constructor(o,i,s){this.rules=o,this.componentId=i,this.baseHash=_o(wS,i),this.baseStyle=s,Li.registerId(i)}generateAndInjectStyles(o,i,s){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,i,s):"";{let d="";for(let p=0;p<this.rules.length;p++){const m=this.rules[p];if(typeof m=="string")d+=m;else if(m)if(Ug(m)){const g=m(o);typeof g=="string"?d+=g:g!=null&&g!==!1&&(d+=yl(Qr(g,o,i,s)))}else d+=yl(Qr(m,o,i,s))}if(d){this.dynamicNameCache||(this.dynamicNameCache=new Map);const p=s.hash?s.hash+d:d;let m=this.dynamicNameCache.get(p);if(!m){if(m=tp(_o(_o(this.baseHash,s.hash),d)>>>0),this.dynamicNameCache.size>=200){const g=this.dynamicNameCache.keys().next().value;g!==void 0&&this.dynamicNameCache.delete(g)}this.dynamicNameCache.set(p,m)}if(!i.hasNameForId(this.componentId,m)){const g=s(d,"."+m,void 0,this.componentId);i.insertRules(this.componentId,m,g)}l=pi(l,m)}}return l}}const kS=/&/g;function Gg(e,o){let i=0;for(;--o>=0&&e.charCodeAt(o)===92;)i++;return!(1&~i)}function Hd(e){const o=e.length;let i="",s=0,l=0,d=0,p=!1,m=!1;for(let g=0;g<o;g++){const y=e.charCodeAt(g);if(d!==0||p||y!==wo||e.charCodeAt(g+1)!==42)if(p)y===42&&e.charCodeAt(g+1)===wo&&(p=!1,g++);else if(y!==34&&y!==39||Gg(e,g)){if(d===0)if(y===123)l++;else if(y===125){if(l--,l<0){m=!0;let x=g+1;for(;x<o;){const b=e.charCodeAt(x);if(b===59||b===10)break;x++}x<o&&e.charCodeAt(x)===59&&x++,l=0,g=x-1,s=x;continue}l===0&&(i+=e.substring(s,g+1),s=g+1)}else y===59&&l===0&&(i+=e.substring(s,g+1),s=g+1)}else d===0?d=y:d===y&&(d=0);else p=!0,g++}return m||l!==0||d!==0?(s<o&&l===0&&d===0&&(i+=e.substring(s)),i):e}function Yg(e,o){const i=o+" ",s=","+i;for(let l=0;l<e.length;l++){const d=e[l];if(d.type==="rule"){d.value=(i+d.value).replaceAll(",",s);const p=d.props,m=[];for(let g=0;g<p.length;g++)m[g]=i+p[g];d.props=m}Array.isArray(d.children)&&d.type!=="@keyframes"&&Yg(d.children,o)}return e}function _S({options:e=ga,plugins:o=ep}=ga){let i,s,l;const d=(k,S,_)=>_.startsWith(s)&&_.endsWith(s)&&_.replaceAll(s,"").length>0?`.${i}`:k,p=o.slice();p.push(k=>{k.type===Tl&&k.value.includes("&")&&(l||(l=new RegExp(`\\${s}\\b`,"g")),k.props[0]=k.props[0].replace(kS,s).replace(l,d))}),e.prefix&&p.push(Fj),p.push(zj);let m=[];const g=Oj(p.concat(Dj(k=>m.push(k)))),y=(k,S="",_="",j="&")=>{i=j,s=S,l=void 0;const N=(function(M){const C=M.indexOf("//")!==-1,z=M.indexOf("}")!==-1;if(!C&&!z)return M;if(!C)return Hd(M);const R=M.length;let L="",T=0,E=0,B=0,G=0,J=0,W=!1;for(;E<R;){const K=M.charCodeAt(E);if(K!==34&&K!==39||Gg(M,E))if(B===0)if(K===wo&&E+1<R&&M.charCodeAt(E+1)===42){for(E+=2;E+1<R&&(M.charCodeAt(E)!==42||M.charCodeAt(E+1)!==wo);)E++;E+=2}else if(K!==40)if(K!==41)if(G>0)E++;else if(K===42&&E+1<R&&M.charCodeAt(E+1)===wo)L+=M.substring(T,E),E+=2,T=E,W=!0;else if(K===wo&&E+1<R&&M.charCodeAt(E+1)===wo){for(L+=M.substring(T,E);E<R&&M.charCodeAt(E)!==10;)E++;T=E,W=!0}else K===123?J++:K===125&&J--,E++;else G>0&&G--,E++;else G++,E++;else E++;else B===0?B=K:B===K&&(B=0),E++}return W?(T<R&&(L+=M.substring(T)),J===0?L:Hd(L)):J===0?M:Hd(M)})(k);let $=Ej(_||S?_+" "+S+" { "+N+" }":N);return e.namespace&&($=Yg($,e.namespace)),m=[],vl($,g),m},x=e;let b=gu;for(let k=0;k<o.length;k++)o[k].name||Mi(15),b=_o(b,o[k].name);return x!=null&&x.namespace&&(b=_o(b,x.namespace)),x!=null&&x.prefix&&(b=_o(b,"p")),y.hash=b!==gu?b.toString():"",y}const CS=new Li,wu=_S(),Kg=ln.createContext({shouldForwardProp:void 0,styleSheet:CS,stylis:wu,stylisPlugins:void 0});Kg.Consumer;function Qg(){return ln.useContext(Kg)}const ap=ln.createContext(void 0);ap.Consumer;const Pf=Object.prototype.hasOwnProperty,Ud={};function jS(e,o){const i=typeof e!="string"?"sc":Pg(e);Ud[i]=(Ud[i]||0)+1;const s=i+"-"+np(zl+i+Ud[i]);return o?o+"-"+s:s}function SS(e,o,i){const s=rp(e),l=e,d=!vu(e),{attrs:p=ep,componentId:m=jS(o.displayName,o.parentComponentId),displayName:g=Kj(e)}=o,y=o.displayName&&o.componentId?Pg(o.displayName)+"-"+o.componentId:o.componentId||m,x=s&&l.attrs?l.attrs.concat(p).filter(Boolean):p;let{shouldForwardProp:b}=o;if(s&&l.shouldForwardProp){const j=l.shouldForwardProp;if(o.shouldForwardProp){const N=o.shouldForwardProp;b=($,M)=>j($,M)&&N($,M)}else b=j}const k=new bS(i,y,s?l.componentStyle:void 0);function S(j,N){return(function($,M,C){const{attrs:z,componentStyle:R,defaultProps:L,foldedComponentIds:T,styledComponentId:E,target:B}=$,G=ln.useContext(ap),J=Qg(),W=$.shouldForwardProp||J.shouldForwardProp,K=Eg(M,G,L)||ga;let te,ae;{const D=ln.useRef(null),H=D.current;if(H!==null&&H[1]===K&&H[2]===J.styleSheet&&H[3]===J.stylis&&H[7]===R&&(function(I,A,V){const Z=I,oe=A;let pe=0;for(const q in oe)if(Pf.call(oe,q)&&(pe++,Z[q]!==oe[q]))return!1;return pe===V})(H[0],M,H[4]))te=H[5],ae=H[6];else{te=(function(A,V,Z){const oe=Object.assign(Object.assign({},V),{className:void 0,theme:Z}),pe=A.length>1;for(let q=0;q<A.length;q++){const O=A[q],Y=Ri(O)?O(pe?Object.assign({},oe):oe):O;for(const de in Y)de==="className"?oe.className=pi(oe.className,Y[de]):de==="style"?oe.style=Object.assign(Object.assign({},oe.style),Y[de]):de in V&&V[de]===void 0||(oe[de]=Y[de])}return"className"in V&&typeof V.className=="string"&&(oe.className=pi(oe.className,V.className)),oe})(z,M,K),ae=(function(A,V,Z,oe){return A.generateAndInjectStyles(V,Z,oe)})(R,te,J.styleSheet,J.stylis);let I=0;for(const A in M)Pf.call(M,A)&&I++;D.current=[M,K,J.styleSheet,J.stylis,I,te,ae,R]}}const ce=te.as||B,se=(function(D,H,I,A){const V={};for(const Z in D)D[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&D.theme===I||(Z==="forwardedAs"?V.as=D.forwardedAs:A&&!A(Z,H)||(V[Z]=D[Z]));return V})(te,ce,K,W);let Q=pi(T,E);return ae&&(Q+=" "+ae),te.className&&(Q+=" "+te.className),se[vu(ce)&&ce.includes("-")?"class":"className"]=Q,C&&(se.ref=C),v.createElement(ce,se)})(_,j,N)}S.displayName=g;let _=ln.forwardRef(S);return _.attrs=x,_.componentStyle=k,_.displayName=g,_.shouldForwardProp=b,_.foldedComponentIds=s?pi(l.foldedComponentIds,l.styledComponentId):"",_.styledComponentId=y,_.target=s?l.target:e,Object.defineProperty(_,"defaultProps",{get(){return this._foldedDefaultProps},set(j){this._foldedDefaultProps=s?(function(N,...$){for(const M of $)xu(N,M,!0);return N})({},l.defaultProps,j):j}}),op(_,()=>`.${_.styledComponentId}`),d&&Fg(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}var NS=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function zf(e,o){const i=[e[0]];for(let s=0,l=o.length;s<l;s+=1)i.push(o[s],e[s+1]);return i}const Of=e=>(Wg.add(e),e);function qe(e,...o){if(Ri(e)||yi(e))return Of(Qr(zf(ep,[e,...o])));const i=e;return o.length===0&&i.length===1&&typeof i[0]=="string"?Qr(i):Of(Qr(zf(i,o)))}function bu(e,o,i=ga){if(!o)throw Mi(1,o);const s=(l,...d)=>e(o,i,qe(l,...d));return s.attrs=l=>bu(e,o,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)})),s.withConfig=l=>bu(e,o,Object.assign(Object.assign({},i),l)),s}const Zg=e=>bu(SS,e),f=Zg;NS.forEach(e=>{f[e]=Zg(e)});class MS{constructor(o,i){this.instanceRules=new Map,this.rules=o,this.componentId=i,this.isStatic=(function(s){for(let l=0;l<s.length;l+=1){const d=s[l];if(Ri(d)&&!rp(d))return!1}return!0})(o),Li.registerId(this.componentId)}removeStyles(o,i){this.instanceRules.delete(o),this.rebuildGroup(i)}renderStyles(o,i,s,l){const d=this.componentId;if(this.isStatic){if(s.hasNameForId(d,d+o))this.instanceRules.has(o)||this.computeRules(o,i,s,l);else{const m=this.computeRules(o,i,s,l);s.insertRules(d,m.name,m.rules)}return}const p=this.instanceRules.get(o);if(this.computeRules(o,i,s,l),!s.server&&p){const m=p.rules,g=this.instanceRules.get(o).rules;if(m.length===g.length){let y=!0;for(let x=0;x<m.length;x++)if(m[x]!==g[x]){y=!1;break}if(y)return}}this.rebuildGroup(s)}computeRules(o,i,s,l){const d=yl(Qr(this.rules,i,s,l)),p={name:this.componentId+o,rules:l(d,"")};return this.instanceRules.set(o,p),p}rebuildGroup(o){const i=this.componentId;o.clearRules(i);for(const s of this.instanceRules.values())o.insertRules(i,s.name,s.rules)}}function RS(e,...o){const i=qe(e,...o),s=`sc-global-${np(JSON.stringify(i))}`,l=new MS(i,s),d=m=>{const g=Qg(),y=ln.useContext(ap);let x;{const b=ln.useRef(null);b.current===null&&(b.current=g.styleSheet.allocateGSInstance(s)),x=b.current}g.styleSheet.server&&p(x,m,g.styleSheet,y,g.stylis);{const b=l.isStatic?[x,g.styleSheet,l]:[x,m,g.styleSheet,y,g.stylis,l],k=ln.useRef(l);ln.useLayoutEffect(()=>{g.styleSheet.server||(k.current!==l&&(g.styleSheet.clearRules(s),k.current=l),p(x,m,g.styleSheet,y,g.stylis))},b),ln.useLayoutEffect(()=>()=>{g.styleSheet.server||l.removeStyles(x,g.styleSheet)},[x,g.styleSheet,l])}return g.styleSheet.server&&l.instanceRules.delete(x),null};function p(m,g,y,x,b){if(l.isStatic)l.renderStyles(m,Wj,y,b);else{const k=Object.assign(Object.assign({},g),{theme:Eg(g,x,d.defaultProps)});l.renderStyles(m,k,y,b)}}return ln.memo(d)}var Xg;class LS{constructor(o,i){this[Xg]=!0,this.inject=(s,l=wu)=>{const d=this.getName(l);if(!s.hasNameForId(this.id,d)){const p=l(this.rules,d,"@keyframes");s.insertRules(this.id,d,p)}},this.name=o,this.id=Ig+o,this.rules=i,ui(this.id),op(this,()=>{throw Mi(12,String(this.name))})}getName(o=wu){return o.hash?this.name+tp(+o.hash>>>0):this.name}}function Se(e,...o){const i=yl(qe(e,...o)),s=np(i);return new LS(s,i)}Xg=Hg;const Jg=[{workforce_type:"Healthcare / Clinical Staffing",company:{name:"Favorite Healthcare Staffing",founded:1981,parent:"Acacium Group",market_position:"Top-10 US healthcare staffing firm",footprint:"US, Europe, Australia"},worker_types:["Per diem","Travel","Contract / temp-to-perm","Permanent / direct hire"],talent_categories:["Nursing (RN/LPN/CNA)","Allied Health","Non-Clinical","Advanced Practice","Emergency Response"],client_types:["Hospitals","Acute care systems","Surgery centers","Senior living / long-term care","School-based settings"],service_models:["MSP","VMS","Float pool management","Human Capital Management"],tech_footprint:["Worker ATS","Client portal (FMS)","Affiliate vendor portal","Worker mobile app (time/pay)"],access_model:["Workers","Clients","Affiliate vendors"],compliance:["Joint Commission","Credentialing","Immunization tracking","OSHA","Facility-specific training"],narrative:[{label:"Your business",body:"Healthcare staffing with per diem, travel, contract, and permanent placements — plus MSP and vendor management programs. I've set up scheduling and pay structures for each, with room for client facilities and affiliate vendors, not just workers.",tags:["Per diem","Travel","Contract","Permanent","MSP / VMS"]},{label:"Your workforce",body:"RNs, CNAs, LPNs, allied health, advanced practice, and non-clinical roles — nationwide, 24/7, and mobile-first. Shifts, timecards, and urgent fills all work from a phone.",tags:["RN / LPN / CNA","Allied health","Advanced practice","Non-clinical"]},{label:"Your compliance",body:"Credentialing is core to how you operate. I'm tracking licenses across states, compact nursing licenses included, with expirations covered.",tags:["Credentialing","Compact licenses","Immunizations","Joint Commission"]}]},{workforce_type:"Skilled Trades / Construction Labor",company:{name:"BuildForce Trades Group",founded:1998,parent:null,market_position:"Regional trades staffing leader (Mountain West)",footprint:"US Southwest & Mountain West"},worker_types:["Day labor","Project contract","Union dispatch","Direct hire"],talent_categories:["Electricians","Welders / pipefitters","Carpenters","HVAC techs","Heavy equipment operators","General laborers"],client_types:["General contractors","Industrial plants","Commercial developers","Utilities","Municipal / public works"],service_models:["Project-based staffing","Payroll / W-2 hosting","Union hall dispatch coordination","Safety compliance management"],tech_footprint:["Dispatch board","Client project portal","Field clock-in mobile app","Certification tracker"],access_model:["Tradesworkers","Contractors / site supers","Union reps"],compliance:["OSHA 10/30","Trade licensing","Drug screening","Right-to-work / E-Verify","Site safety orientation"],narrative:[{label:"Your business",body:"Skilled trades staffing across the Mountain West — day labor, project contracts, union dispatch, and direct hire. I've set up project-based scheduling with payroll hosting and union dispatch coordination built in, since a two-day pour and a six-month build don't run the same way.",tags:["Day labor","Project contract","Union dispatch","Direct hire"]},{label:"Your workforce",body:"Electricians, welders, carpenters, HVAC techs, and heavy equipment operators working job sites, not desks. Dispatch, field clock-ins, and timecards all work from a phone.",tags:["Electricians","Welders","Carpenters","HVAC","Equipment operators"]},{label:"Your compliance",body:"Nobody steps on a site without the right cards. I'm tracking OSHA 10/30, trade licenses, and drug screens with expirations covered, and E-Verify is built into onboarding.",tags:["OSHA 10/30","Trade licenses","Drug screening","E-Verify"]}]},{workforce_type:"Warehouse / Logistics & Light Industrial",company:{name:"PalletPoint Workforce",founded:2011,parent:"Everline Labor Holdings",market_position:"High-volume light industrial staffing",footprint:"US national, distribution-corridor focused"},worker_types:["Temp (shift)","Temp-to-hire","Seasonal surge","Direct placement"],talent_categories:["Pickers / packers","Forklift operators","Machine operators","Sortation associates","Inventory / cycle count","Shift leads"],client_types:["3PL warehouses","E-commerce fulfillment","Manufacturers","Cold storage","Distribution centers"],service_models:["On-site managed staffing","Volume ramp / peak season","Vendor-on-premise (VOP)","Payroll processing"],tech_footprint:["Shift scheduling app","Client headcount dashboard","Kiosk / badge clock-in","Attendance & reliability scoring"],access_model:["Associates","Warehouse managers","On-site coordinators"],compliance:["Forklift certification (PIT)","I-9 / E-Verify","Safety training","Background check","Workers' comp classification"],narrative:[{label:"Your business",body:"High-volume light industrial staffing — shift temps, temp-to-hire, and seasonal surge across 3PLs, fulfillment centers, and cold storage. I've set up shift-based scheduling that ramps headcount for peak season without breaking your regular fills.",tags:["Shift temps","Temp-to-hire","Seasonal surge","On-site managed"]},{label:"Your workforce",body:"Pickers, packers, forklift operators, and sortation associates running around the clock. Badge and kiosk clock-ins feed attendance and reliability scoring, so no-shows surface before a client feels them.",tags:["Pickers / packers","Forklift operators","Sortation","Shift leads"]},{label:"Your operations",body:"Your clients buy filled shifts, so I'm tracking fill rates and check-ins per site and keeping billing tied to verified hours. Forklift certifications and I-9s are tracked with expirations covered.",tags:["Fill rates","Site check-ins","Forklift certs","I-9 / E-Verify"]}]},{workforce_type:"Security / Guarding Services",company:{name:"Sentinel Guard Solutions",founded:1996,parent:null,market_position:"Contract security & manned guarding provider",footprint:"US national, metro & industrial sites"},worker_types:["Post assignment (regular)","Flex / relief pool","Event / short-term detail","Direct hire"],talent_categories:["Unarmed guards","Armed guards","Mobile patrol officers","Console / CCTV operators","Event security","Site supervisors"],client_types:["Commercial real estate","Industrial / manufacturing sites","Retail / malls","Healthcare campuses","Residential communities","Special events"],service_models:["Managed guarding contract","Post scheduling & coverage","Mobile patrol routes","Payroll & billing reconciliation","Post-order management"],tech_footprint:["Guard scheduling / post board","Client incident portal","GPS tour / checkpoint app","Incident reporting system"],access_model:["Guards / officers","Client site contacts","Field supervisors / dispatch"],compliance:["State guard license / registration","Armed permit & firearms qualification","Background check & fingerprinting","Drug screening","Post-specific training / SOPs"],narrative:[{label:"Your business",body:"Contract security and manned guarding — regular posts, flex relief, mobile patrol routes, and event details. I've set up post-based scheduling alongside patrol routes, since a fixed post and a rolling route don't run the same way.",tags:["Fixed posts","Flex relief","Mobile patrol","Event details"]},{label:"Your workforce",body:"Armed and unarmed guards, patrol officers, console operators, and site supervisors across metro and industrial sites. Armed and unarmed posts carry different pay rates, so I've structured pay by post type.",tags:["Armed guard","Unarmed guard","Console / CCTV","Site supervisors"]},{label:"Your operations",body:"Your reputation runs on every post being covered and no ghost billing — so I'm tracking check-ins against scheduled posts, verifying who's actually on-site, and keeping billing tied to verified hours. Guard licenses and firearms qualifications are tracked with expirations covered.",tags:["Post check-ins","Verified hours","Guard licenses","Firearms quals"]}]},{workforce_type:"Home Care / In-Home Support",company:{name:"Hearthside Home Care",founded:2009,parent:null,market_position:"Non-medical & skilled in-home care agency",footprint:"US regional, franchise-based"},worker_types:["Per visit / hourly","Live-in","On-call pool","Direct hire"],talent_categories:["Home health aides (HHA)","Certified nursing assistants (CNA)","Personal care aides (PCA)","Companions / homemakers","Skilled nurses (RN/LPN)","Care coordinators"],client_types:["Private-pay families","Medicaid / waiver programs","Managed care / insurers","Hospice partners","Assisted living referrals"],service_models:["Managed care scheduling","EVV-compliant visit management","Care plan administration","Payroll & claims billing","Family communication portal"],tech_footprint:["Caregiver visit / EVV mobile app","Family / client portal","Scheduling & matching system","Care plan & notes dashboard"],access_model:["Caregivers","Clients / family members","Care coordinators / case managers"],compliance:["State caregiver certification (HHA/CNA)","EVV (Electronic Visit Verification)","Background check & abuse registry","TB test / health screening","HIPAA & care plan compliance"],narrative:[{label:"Your business",body:"In-home care spanning private-pay families, Medicaid waiver programs, and hospice partners. I've set up visit-based scheduling with care plans attached, since a live-in placement and an hourly visit don't run the same way.",tags:["Private pay","Medicaid / waiver","Hospice partners","Live-in"]},{label:"Your workforce",body:"HHAs, CNAs, PCAs, companions, and skilled nurses working in clients' homes, matched to care plans. Visits, notes, and clock-ins all work from a phone.",tags:["HHA","CNA","PCA","Skilled nurses"]},{label:"Your compliance",body:"EVV isn't optional in your world, so every clock-in doubles as visit verification and your Medicaid billing holds up. Caregiver certifications, TB screenings, and background checks are tracked with expirations covered.",tags:["EVV","Certifications","TB screening","Abuse registry"]}]},{workforce_type:"Agriculture / Seasonal Labor",company:{name:"Harvest Field Labor Co.",founded:2e3,parent:null,market_position:"Seasonal agricultural & H-2A labor provider",footprint:"US agricultural regions (CA, PNW, Southeast)"},worker_types:["Seasonal / harvest crew","H-2A guest worker","Day labor","Crew lead / foreman"],talent_categories:["Field harvesters / pickers","Packing house workers","Irrigation / field techs","Equipment operators","Crew leaders","Grading / sorting staff"],client_types:["Farms & orchards","Packing / processing facilities","Vineyards","Nurseries / greenhouses","Agricultural co-ops"],service_models:["Seasonal crew staffing","H-2A program administration","Transportation & housing coordination","Piece-rate & payroll processing","Farm labor contractor (FLC) services"],tech_footprint:["Crew / field dispatch app","Grower headcount portal","Piece-rate / harvest tracking","Compliance document tracker"],access_model:["Field workers","Growers / farm managers","Crew leaders / foremen"],compliance:["H-2A / visa documentation","I-9 / work authorization","Farm Labor Contractor (FLC) license","Field sanitation & heat illness (OSHA/Cal-OSHA)","Piece-rate & minimum wage compliance"],narrative:[{label:"Your business",body:"Seasonal agricultural labor with H-2A program administration — harvest crews, packing houses, and everything the season demands. I've set up crew-based scheduling with piece-rate pay built in, since a harvest crew and an hourly packing shift don't pay the same way.",tags:["Harvest crews","H-2A program","Packing houses","Piece-rate"]},{label:"Your workforce",body:"Field harvesters, packing workers, equipment operators, and crew leaders who move with the season. Crews dispatch by field and report through their crew leader, all from a phone.",tags:["Harvesters","Packing workers","Equipment operators","Crew leaders"]},{label:"Your compliance",body:"H-2A paperwork can sink a season, so I'm tracking visa documentation, work authorizations, and your FLC license with expirations covered. Piece-rate records stay reconciled against minimum wage automatically.",tags:["Visa docs","FLC license","Heat illness / OSHA","Wage compliance"]}]},{workforce_type:"Hospitality / Events Staffing",company:{name:"Grand Table Hospitality Staff",founded:2003,parent:null,market_position:"Premium events & F&B staffing",footprint:"Major US metro markets"},worker_types:["Per event / gig","On-call pool","Seasonal","Direct hire"],talent_categories:["Servers / banquet staff","Bartenders","Line / prep cooks","Housekeeping","Front desk / concierge","Event captains"],client_types:["Hotels & resorts","Catering companies","Convention centers","Restaurants","Private / corporate events"],service_models:["Event-based staffing","On-call pool management","Managed F&B labor","Payroll & tip reconciliation"],tech_footprint:["Gig scheduling app","Client event booking portal","Geo clock-in / out","Rating & rebooking system"],access_model:["Staff / gig workers","Event planners / venue managers","Agency dispatchers"],compliance:["Food handler / alcohol service permits","I-9 / work authorization","Uniform & appearance standards","Minor labor law (if applicable)","Tip credit / wage compliance"],narrative:[{label:"Your business",body:"Premium events and F&B staffing — per-event gigs, on-call pools, and seasonal placements across hotels, caterers, and venues. I've set up event-based scheduling with tip reconciliation built into pay, since a gala and a hotel shift don't settle the same way.",tags:["Per-event gigs","On-call pool","Seasonal","Tip reconciliation"]},{label:"Your workforce",body:"Servers, bartenders, cooks, housekeepers, and event captains working a different venue every week. Geo clock-ins confirm who is actually on-site, and your top-rated staff surface first for rebooking.",tags:["Servers","Bartenders","Cooks","Event captains"]},{label:"Your operations",body:"Your clients remember who showed up polished and on time — so I'm tracking check-ins per event and keeping billing tied to verified hours. Food handler and alcohol service permits are tracked with expirations covered.",tags:["Geo clock-ins","Event check-ins","Food handler","Alcohol permits"]}]},{workforce_type:"Call Center / BPO Staffing",company:{name:"Vantage Contact Solutions",founded:2012,parent:null,market_position:"Contact center & back-office BPO staffing",footprint:"US + offshore (Philippines, LatAm), remote & site-based"},worker_types:["Temp (campaign)","Temp-to-hire","Seasonal surge","Direct hire","Remote / WFH agent"],talent_categories:["Inbound agents","Outbound / sales agents","Customer support reps","Technical support","Back-office / data entry","Team leads / QA"],client_types:["Telecom / utilities","Retail / e-commerce","Financial services","Healthcare payers","SaaS / tech support","Government programs"],service_models:["Campaign-based staffing","Managed contact center program","Ramp / seasonal surge","WFM (workforce management) support","Payroll & performance reporting"],tech_footprint:["Agent scheduling / WFM tool","Client program dashboard","Remote clock-in & activity monitor","QA / performance scorecards"],access_model:["Agents","Client program managers","Team leads / site supervisors"],compliance:["Background check","I-9 / work authorization","PCI-DSS (payment handling)","HIPAA (healthcare campaigns)","Data security & remote-work policy"],narrative:[{label:"Your business",body:"Contact center and back-office BPO staffing, campaign by campaign — inbound, outbound, and data entry, on-site and offshore. I've set up campaign-based scheduling that handles surge ramps and time zones from the Philippines to LatAm.",tags:["Campaign staffing","Surge ramps","On-site + remote","Offshore"]},{label:"Your workforce",body:"Agents, technical support reps, and team leads split between sites and work-from-home. Remote clock-ins and activity tracking keep a distributed floor visible without hovering.",tags:["Inbound agents","Outbound / sales","Tech support","Team leads / QA"]},{label:"Your compliance",body:"Your campaigns touch payments and health data, so I'm tracking PCI and HIPAA requirements per campaign, not just per worker. Background checks and I-9s are covered, with expirations tracked.",tags:["PCI-DSS","HIPAA","Background checks","I-9"]}]}],$S=[["favorite","health","care","clinic","nurse","nursing","medical","med","rn","lpn","cna","hospital","hospice","allied","acacium","patient"],["build","trade","construct","electric","weld","pipefit","carpenter","hvac","contractor","mason","plumb","union","skilled","labor"],["warehouse","logistic","pallet","fulfillment","distribution","forklift","3pl","industrial","sortation","freight","supply"],["security","guard","sentinel","patrol","protect","protection","surveillance","cctv","safe"],["home","hearth","inhome","homecare","caregiver","companion","pca","hha","senior","elder"],["harvest","farm","field","agri","agriculture","orchard","crop","grower","vineyard","seasonal","h2a","produce"],["hospitality","event","grand","table","catering","banquet","hotel","resort","restaurant","server","bartender","concierge","venue"],["call","contact","bpo","vantage","center","telecom","agent","callcenter","support","outsource"]];function AS(e){const o=e.trim().toLowerCase().replace(/\s+/g,""),i=/^https?:\/\//.test(o)?o:`https://${o}`;try{return new URL(i).hostname.replace(/^www\./,"")}catch{return o}}function TS(e){let o=0;for(let i=0;i<e.length;i+=1)o=o*31+e.charCodeAt(i)>>>0;return o%Jg.length}function IS(e){const o=AS(e);let i=-1,s=0;return $S.forEach((l,d)=>{const p=l.reduce((m,g)=>o.includes(g)?m+1:m,0);p>s&&(s=p,i=d)}),Jg[i>=0?i:TS(o)]}const It=(e,o,i)=>Math.max(o,Math.min(i,e)),xr=e=>(e=It(e,0,1),e*e*(3-2*e)),Zr=e=>e>=48?1:e>=32?1.2:e>=24?1.5:e>=20?1.85:2.3;function on(e){const o=Math.sin(e*127.1+311.7)*43758.5453;return o-Math.floor(o)}function ku(e){const o=(e||"#96B9FF").replace("#",""),i=parseInt(o.length===3?o.split("").map(s=>s+s).join(""):o,16);return(i>>16&255)+","+(i>>8&255)+","+(i&255)}function Df(e,o,i){let s=i.trim();const l=s.match(/var\(\s*(--[^,)]+)/);if(l&&(s=getComputedStyle(o).getPropertyValue(l[1]).trim()||s),s.startsWith("#"))return ku(s);e.fillStyle="#000",e.fillStyle=s;const d=e.fillStyle;if(d.startsWith("#"))return ku(d);const p=d.match(/[\d.]+/g);return p&&p.length>=3?`${+p[0]},${+p[1]},${+p[2]}`:"26,30,38"}function ES(){const[e,o]=v.useState(()=>{try{return window.matchMedia("(prefers-color-scheme: dark)").matches}catch{return!1}});return v.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-color-scheme: dark)")}catch{return}const s=d=>o(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}function PS(e){const[o,i,s]=e.split(",").map(Number);return(.299*o+.587*i+.114*s)/255}function zS(e,o){return e==="light"?{dot:"26,30,38",core:"34,40,52",accent:"68,108,255",glow:!1}:e==="onblack"?{dot:"237,243,252",core:"255,255,255",accent:o,glow:!0}:e==="tint"?{dot:"233,240,255",core:"255,255,255",accent:"176,201,255",glow:!0}:{dot:"228,238,252",core:"248,251,255",accent:o,glow:!0}}const xo=["234,54,38","246,112,44","252,172,54","255,212,76"],OS="176,58,32",DS="198,158,52";function vr(e,o,i){const s=e.split(",").map(Number),l=o.split(",").map(Number);return s.map((d,p)=>Math.round(d+(l[p]-d)*i)).join(",")}function Xr(e,o,i){const{ctx:s,w:l,h:d}=e,p=l/2,m=d/2,y=Math.min(l,d)*.39*.2*(.9+.14*Math.sin(o*1.5)),x=e.size<24,b=It(e.alert??0,0,1),k=(M,C)=>M+(C-M)*b,S=.85+.15*Math.sin(o*2.2);if(!x&&e.coreHalo){if(s.save(),i.glow&&b<1){s.globalAlpha=1-b;const M=s.createRadialGradient(p,m,0,p,m,y*3);M.addColorStop(0,"rgba("+i.core+",0.55)"),M.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=M,s.beginPath(),s.arc(p,m,y*3,0,6.2832),s.fill()}else if(!i.glow){const M=y*k(3.2,3),C=s.createRadialGradient(p,m,0,p,m,M);C.addColorStop(0,"rgba("+vr(i.core,xo[1],b)+","+k(.34,.85*S)+")"),C.addColorStop(.5,"rgba("+vr(i.core,xo[2],b)+","+k(.13,.42*S)+")"),C.addColorStop(1,"rgba("+vr(i.core,xo[3],b)+",0)"),s.fillStyle=C,s.beginPath(),s.arc(p,m,M,0,6.2832),s.fill()}s.restore()}const _=i.glow?1:.95,j=Math.max(.8,y*k(1,1.5)),N=y*.1*b;s.save(),s.filter="blur("+Math.max(.4,y*k(.22,.3)).toFixed(2)+"px)";const $=s.createRadialGradient(p-N,m-N,0,p,m,j);$.addColorStop(0,"rgba("+vr(i.core,xo[0],b)+","+k(_,1)+")"),$.addColorStop(.5,"rgba("+vr(i.core,xo[1],b)+","+k(_,1)+")"),$.addColorStop(.82,"rgba("+vr(i.core,xo[2],b)+","+k(_,.97)+")"),$.addColorStop(1,"rgba("+vr(i.core,xo[3],b)+","+k(_,.72)+")"),s.fillStyle=$,s.beginPath(),s.arc(p,m,j,0,6.2832),s.fill(),s.restore()}function e2(e,o,i){const{ctx:s,w:l,h:d}=e,p=l/2,m=d/2,g=Math.min(l,d)*.39,y=e.state!=="idle",x=[[1.35,.3],[1.05,2.4]],b=o*(y?.5:.16),k=.42,S=Math.cos(k),_=Math.sin(k),j=Math.cos(b),N=Math.sin(b),$=g*.96,M=(B,G,J)=>{const W=B*j+J*N,K=-B*N+J*j,te=G,ae=te*S-K*_,se=(te*_+K*S+1)/2,Q=.82+.18*se;return{x:p+W*$*Q,y:m+ae*$*Q,d:se}},C=(B,G,J)=>{const W=Math.cos(B),K=Math.sin(B)*Math.cos(G),te=Math.sin(B)*Math.sin(G);return[W*Math.cos(J)+te*Math.sin(J),K,-W*Math.sin(J)+te*Math.cos(J)]};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round",s.lineJoin="round";const z=e.size>=24?64:40,R=y?.9:.3,L=z,T=5.6,E=[];for(let B=0;B<x.length;B++){const G=x[B][0],J=x[B][1],W=ae=>{const ce=C(ae,G,J);return M(ce[0],ce[1],ce[2])},K=B%2?1:-1,te=B*2+K*o*R;E.push({ptOf:W,head:te,dir:K,hp:W(te)})}E.sort((B,G)=>B.hp.d-G.hp.d);for(const B of E){const G=Math.max(1.2,g*.05)*(.75+.35*B.hp.d),J=.66*(.45+.55*B.hp.d);s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=G;let W=B.ptOf(B.head);for(let ae=1;ae<=L;ae++){const ce=ae/L,se=1-ce,Q=J*se*se,D=B.ptOf(B.head-B.dir*ce*T);Q>.004&&(s.strokeStyle="rgba("+i.dot+","+Q+")",s.beginPath(),s.moveTo(W.x,W.y),s.lineTo(D.x,D.y),s.stroke()),W=D}s.restore();const K=Math.max(.9,g*.062*Zr(e.size)*(.65+.5*B.hp.d)),te=.45+.55*B.hp.d;if(i.glow){const ae=s.createRadialGradient(B.hp.x,B.hp.y,0,B.hp.x,B.hp.y,K*4.5);ae.addColorStop(0,"rgba("+i.accent+","+.3*te+")"),ae.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=ae,s.beginPath(),s.arc(B.hp.x,B.hp.y,K*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,te+.1)+")",s.beginPath(),s.arc(B.hp.x,B.hp.y,K,0,6.2832),s.fill()}Xr(e,o,i),s.restore()}function FS(e,o,i){const{ctx:s,w:l,h:d}=e,p=l/2,m=d/2,g=Math.min(l,d)*.39,y=e.state!=="idle",x=[g*.92],b=x.length,k=1,S=y?.9:.3,_=e.size>=24?56:36;s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let j=0;j<b;j++){const N=x[j],$=j%2?1:-1,M=6.2832/k,C=Math.min(5.6,M*.92);for(let z=0;z<k;z++){const R=j*2+$*o*S+z*M,L=p+Math.cos(R)*N,T=m+Math.sin(R)*N;s.save(),s.globalCompositeOperation="source-over",s.lineCap="butt",s.lineWidth=Math.max(1.2,g*.05);let E=L,B=T;for(let J=1;J<=_;J++){const W=J/_,K=.62*(1-W)*(1-W),te=R-$*W*C,ae=p+Math.cos(te)*N,ce=m+Math.sin(te)*N;K>.004&&(s.strokeStyle="rgba("+i.dot+","+K+")",s.beginPath(),s.moveTo(E,B),s.lineTo(ae,ce),s.stroke()),E=ae,B=ce}s.restore();const G=Math.max(.9,g*.062*Zr(e.size));if(i.glow){const J=s.createRadialGradient(L,T,0,L,T,G*4.5);J.addColorStop(0,"rgba("+i.accent+",0.3)"),J.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=J,s.beginPath(),s.arc(L,T,G*4.5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+",1)",s.beginPath(),s.arc(L,T,G,0,6.2832),s.fill()}}Xr(e,o,i),s.restore()}function Ff(e,o,i){const{ctx:s,w:l,h:d,dpr:p}=e,m=l/2,g=d/2,y=Math.min(l,d)*.39,x=e.state!=="idle",b=It(e.alert??0,0,1),k=y*.82,S=(D,H)=>vr(i.dot,vr(OS,DS,It(Math.hypot(D-m,H-g)/k,0,1)),b),_=e.size>=120,j=_?22:e.size>=32?10:e.size>=20?7:5,N=x?o*.55:o*.22,$=Math.cos(N),M=Math.sin(N),C=.42,z=Math.cos(C),R=Math.sin(C);if(s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",_&&i.glow){const D=s.createRadialGradient(m,g,0,m,g,y*1.02);D.addColorStop(0,"rgba("+i.accent+",0.10)"),D.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=D,s.beginPath(),s.arc(m,g,y*1.02,0,6.2832),s.fill()}const L=[];for(let D=0;D<j;D++){const H=1-(D+.5)/j*2,I=Math.sqrt(Math.max(0,1-H*H)),A=D*2.39996,V=Math.cos(A)*I,Z=H,oe=Math.sin(A)*I,pe=V*$+oe*M,q=-V*M+oe*$,O=Z*z-q*R,Y=Z*R+q*z,de=(Y+1)/2,le=.82+.18*de;L.push({x:m+pe*k*le,y:g+O*k*le,d:de,k:D,vec:[pe,O,Y]})}L.sort((D,H)=>D.d-H.d);const T=D=>{const H=(D[2]+1)/2,I=.82+.18*H;return{x:m+D[0]*k*I,y:g+D[1]*k*I,d:H}},E=(D,H,I)=>{let A=D[0]*H[0]+D[1]*H[1]+D[2]*H[2];A=It(A,-1,1);const V=Math.acos(A);if(V<.001)return[D[0],D[1],D[2]];const Z=Math.sin(V),oe=Math.sin((1-I)*V)/Z,pe=Math.sin(I*V)/Z;return[D[0]*oe+H[0]*pe,D[1]*oe+H[1]*pe,D[2]*oe+H[2]*pe]},B={};for(const D of L)B[D.k]=D;const J=o*(x?1.4:.5),W=Math.floor(J),K=J-W,te=5,ae=12;s.lineCap="round",s.lineJoin="round";const ce=[1.7,9.3,21.5,34.8,48.2],se=It(Math.round(e.streamCount??(_?5:4)),0,ce.length),Q=ce.slice(0,se).map(D=>({seed:D}));for(const D of Q){const H=A=>{const V=Math.sin(A*12.9898+D.seed)*43758.5453;return Math.floor((V-Math.floor(V))*j)},I=A=>{let V=H(A);return V===H(A-1)&&(V=(V+1)%j),B[V]};for(let A=te-1;A>=0;A--){const V=W-A;if(V<0)continue;const Z=I(V),oe=I(V+1);if(!Z||!oe||Z===oe)continue;const pe=A===0?K:1,q=T(E(Z.vec,oe.vec,pe)),O=(Z.d+q.d)/2,Y=A===0?1:It(1-(A-1+K)/(te-1),0,1),de=(i.glow?.6:.72)*Y*(.4+.6*O);if(de<.02)continue;const le=s.createLinearGradient(Z.x,Z.y,q.x,q.y);le.addColorStop(0,"rgba("+S(Z.x,Z.y)+",0)"),le.addColorStop(1,"rgba("+S(q.x,q.y)+","+de+")"),s.strokeStyle=le,s.lineWidth=(_?Math.max(1.1*p,y*.018):Math.max(1.2,y*.045))*(.7+.4*O),s.beginPath();for(let ge=0;ge<=ae;ge++){const xe=T(E(Z.vec,oe.vec,pe*(ge/ae)));ge===0?s.moveTo(xe.x,xe.y):s.lineTo(xe.x,xe.y)}s.stroke()}}for(const D of L){const H=.5+.5*Math.sin(o*2-D.k*.9),I=(.18+.82*D.d)*(.62+.38*H),A=_?Math.max(.5,(.9+.9*D.d)*p*(.85+.15*H)):y*.058*Zr(e.size)*(.6+.5*D.d);if(i.glow){const V=A*4,Z=s.createRadialGradient(D.x,D.y,0,D.x,D.y,V);Z.addColorStop(0,"rgba("+i.accent+","+.24*I+")"),Z.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=Z,s.beginPath(),s.arc(D.x,D.y,V,0,6.2832),s.fill()}s.fillStyle="rgba("+S(D.x,D.y)+","+(.32+.68*I)+")",s.beginPath(),s.arc(D.x,D.y,Math.max(.9,A),0,6.2832),s.fill()}_&&ip(e,o,i,S),Xr(e,o,i),s.restore()}function ip(e,o,i,s){const{ctx:l,w:d,h:p,dpr:m}=e,g=d/2,y=p/2,x=Math.min(d,p)*.39,k=e.state!=="idle"?1:.4;for(let S=0;S<46;S++){const _=on(S*5.1)<.5?-1:1,j=on(S*1.7)*6.2832+o*(.3+on(S*3.1)*.6)*_*k,N=x*(.04+.05*on(S*4.7))*Math.sin(o*(.8+on(S*6)*1)+on(S*7)*6.28),$=x*(.5+on(S*2.3)*.5)+N,M=g+Math.cos(j)*$,C=y+Math.sin(j)*$,z=.3+.7*(.5+.5*Math.sin(o*(1.4+on(S)*2)+on(S*2)*6.28)),R=Math.max(.5,(.4+on(S*8)*1)*m*(.55+.6*z));if(i.glow){const L=R*6,T=l.createRadialGradient(M,C,0,M,C,L);T.addColorStop(0,"rgba("+i.accent+","+z*.18+")"),T.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=T,l.beginPath(),l.arc(M,C,L,0,6.2832),l.fill()}l.fillStyle="rgba("+s(M,C)+","+z*(i.glow?.8:.42)+")",l.beginPath(),l.arc(M,C,R,0,6.2832),l.fill()}}function BS(e,o,i){const{ctx:s,w:l,h:d,dpr:p}=e,m=l/2,g=d/2,y=Math.min(l,d)*.39,x=e.state!=="idle",b=e.size>=32?11:7,k=y*.12,S=y*.12,_=xr(.5+.5*Math.sin(o*(x?1:.55))),j=x?.34+.66*_:.5+.12*_,N=Math.max(1*p,y*.052),$=-o*(x?.5:.16),M=Math.cos($),C=Math.sin($),z=.42,R=Math.cos(z),L=Math.sin(z);s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over",s.lineCap="round";const T=y*(.52+.44*j),E=Math.max(k+N,T-S),B=[];for(let G=0;G<b;G++){const J=1-(G+.5)/b*2,W=Math.sqrt(Math.max(0,1-J*J)),K=G*2.39996,te=Math.cos(K)*W,ae=J,ce=Math.sin(K)*W,se=te*M+ce*C,Q=-te*C+ce*M,D=ae*R-Q*L,I=(ae*L+Q*R+1)/2,A=.82+.18*I,V=.5+.5*Math.sin(o*1.6+G*1.3);B.push({x0:m+se*k*A,y0:g+D*k*A,x1:m+se*E*A,y1:g+D*E*A,cx2:m+se*T*A,cy2:g+D*T*A,d:I,shim:V})}B.sort((G,J)=>G.d-J.d);for(const G of B){const J=(x?.4+.45*j:.6)*(.4+.6*G.d)*(.78+.22*G.shim),W=s.createLinearGradient(G.x0,G.y0,G.x1,G.y1);W.addColorStop(0,"rgba("+i.dot+","+J+")"),W.addColorStop(1,"rgba("+i.accent+",0)"),s.strokeStyle=W,s.lineWidth=N*(.7+.5*G.d),s.beginPath(),s.moveTo(G.x0,G.y0),s.lineTo(G.x1,G.y1),s.stroke();const K=Math.max(.9,y*.058*Zr(e.size)*(.85+.3*j)*(.6+.5*G.d));if(i.glow){const te=s.createRadialGradient(G.cx2,G.cy2,0,G.cx2,G.cy2,K*5);te.addColorStop(0,"rgba("+i.accent+","+.26*J+")"),te.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=te,s.beginPath(),s.arc(G.cx2,G.cy2,K*5,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+Math.min(1,J+.1)+")",s.beginPath(),s.arc(G.cx2,G.cy2,K,0,6.2832),s.fill()}e.size>=120&&ip(e,o,i,()=>i.dot),Xr(e,o,i),s.restore()}function WS(e,o,i){const{ctx:s,w:l,h:d}=e,p=l/2,m=d/2,g=Math.min(l,d)*.39,y=e.state!=="idle",x=e.size>=32?58:e.size>=20?32:18,b=g*.78,k=y?o*.5:o*.2,S=Math.cos(k),_=Math.sin(k),j=.42,N=Math.cos(j),$=Math.sin(j),M=y?1:.4,C=(W,K)=>[Math.sin(W)*Math.cos(K),Math.cos(W),Math.sin(W)*Math.sin(K)],z=[C(1.4+.5*Math.sin(o*.5*M),o*.6*M),C(1.9+.4*Math.cos(o*.4*M),-o*.5*M+2)],R=.36,L=e.cellCount==null?x:It(Math.round(e.cellCount),0,x);let T=null,E=null;(L<x||e.cellBirths)&&(E=Array.from({length:x},(W,K)=>K).sort((W,K)=>on(W)-on(K)),T=new Array(x),E.forEach((W,K)=>{T[W]=K}));const B=.7,G=.16;if(E&&e.cellBirths&&e.emergeNow!=null){let W=0;for(let K=0;K<L;K++){const te=E[K];e.cellBirths.has(te)||e.cellBirths.set(te,e.emergeNow+W++*G)}}s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";const J=[];for(let W=0;W<x;W++){let K=1;if(T){if(T[W]>=L)continue;if(e.cellBirths){const q=e.cellBirths.get(W);if(q==null||(K=xr(((e.emergeNow??q+B)-q)/B),K<=.001))continue}}const te=1-(W+.5)/x*2,ae=Math.sqrt(Math.max(0,1-te*te)),ce=W*2.39996,se=Math.cos(ce)*ae*K,Q=te*K,D=Math.sin(ce)*ae*K;let H=0;for(const q of z){const O=se-q[0],Y=Q-q[1],de=D-q[2];H+=Math.exp(-(O*O+Y*Y+de*de)/(2*R*R))}H=It(H,0,1);const I=se*S+D*_,A=-se*_+D*S,V=Q*N-A*$,oe=(Q*$+A*N+1)/2,pe=.82+.18*oe;J.push({x:p+I*b*pe,y:m+V*b*pe,d:oe,inf:H,g:K})}J.sort((W,K)=>W.d-K.d);for(const W of J){const K=xr(W.inf),te=Math.max(.6,g*(.05+.06*K)*Zr(e.size)*(.55+.5*W.d))*(.35+.65*W.g),ae=(.16+.84*W.d)*(.45+.55*K)*W.g,ce=1-(1-Math.abs(2*W.d-1))*W.g,se=Math.atan2(W.y-m,W.x-p);s.fillStyle="rgba("+i.dot+","+ae+")",s.beginPath(),s.ellipse(W.x,W.y,Math.max(.35,te*ce),te,se,0,6.2832),s.fill()}Xr(e,o,i),s.restore()}function HS(e,o,i,s){const{ctx:l,w:d,h:p,dpr:m}=e,g=d/2,y=p/2,x=Math.min(d,p)*.39,b=e.state!=="idle",k=xr(It(s/.55,0,1)),S=xr(It((s-.3)/.4,0,1)),_=xr(It((s-.5)/.5,0,1)),j=e.size>=32?11:7,N=x*.12,$=x*.12,M=xr(.5+.5*Math.sin(o*(b?1:.55))),C=b?.34+.66*M:.5+.12*M,z=Math.max(1*m,x*.052),R=-o*(b?.5:.16),L=Math.cos(R),T=Math.sin(R),E=.42,B=Math.cos(E),G=Math.sin(E),J=x*(.52+.44*C),W=Math.max(N+z,J-$),K=[];for(let q=0;q<j;q++){const O=1-(q+.5)/j*2,Y=Math.sqrt(Math.max(0,1-O*O)),de=q*2.39996,le=Math.cos(de)*Y,ge=O,xe=Math.sin(de)*Y,we=le*L+xe*T,be=-le*T+xe*L,Le=ge*B-be*G,ze=(ge*G+be*B+1)/2,Te=.82+.18*ze,Ge=.5+.5*Math.sin(o*1.6+q*1.3);K.push({x0:g+we*N*Te,y0:y+Le*N*Te,x1:g+we*W*Te,y1:y+Le*W*Te,cx2:g+we*J*Te,cy2:y+Le*J*Te,d:ze,shim:Ge,ux:le,uy:ge,uz:xe})}l.save(),l.globalCompositeOperation=i.glow?"lighter":"source-over",l.lineCap="round";const te=[...K].sort((q,O)=>q.d-O.d);for(const q of te){const O=(b?.4+.45*C:.6)*(.4+.6*q.d)*(.78+.22*q.shim);if(_>.001){const Y=q.x0+(q.x1-q.x0)*_,de=q.y0+(q.y1-q.y0)*_,le=l.createLinearGradient(q.x0,q.y0,q.x1,q.y1);le.addColorStop(0,"rgba("+i.dot+","+O*_+")"),le.addColorStop(1,"rgba("+i.accent+",0)"),l.strokeStyle=le,l.lineWidth=z*(.7+.5*q.d),l.beginPath(),l.moveTo(q.x0,q.y0),l.lineTo(Y,de),l.stroke()}if(S>.001){const Y=Math.max(.9,x*.058*Zr(e.size)*(.85+.3*C)*(.6+.5*q.d));if(i.glow){const de=l.createRadialGradient(q.cx2,q.cy2,0,q.cx2,q.cy2,Y*5);de.addColorStop(0,"rgba("+i.accent+","+.26*O*S+")"),de.addColorStop(1,"rgba("+i.accent+",0)"),l.fillStyle=de,l.beginPath(),l.arc(q.cx2,q.cy2,Y*5,0,6.2832),l.fill()}l.fillStyle="rgba("+i.dot+","+Math.min(1,O+.1)*S+")",l.beginPath(),l.arc(q.cx2,q.cy2,Y*(.6+.4*S),0,6.2832),l.fill()}}const ae=e.size>=32?58:e.size>=20?32:18,ce=x*.78,se=b?o*.5:o*.2,Q=Math.cos(se),D=Math.sin(se),H=b?1:.4,I=(q,O)=>[Math.sin(q)*Math.cos(O),Math.cos(q),Math.sin(q)*Math.sin(O)],A=[I(1.4+.5*Math.sin(o*.5*H),o*.6*H),I(1.9+.4*Math.cos(o*.4*H),-o*.5*H+2)],V=.36,Z=e.cellCount==null?ae:It(Math.round(e.cellCount),0,ae);let oe=null;if(Z<ae){const q=Array.from({length:ae},(O,Y)=>Y).sort((O,Y)=>on(O)-on(Y));oe=new Array(ae),q.forEach((O,Y)=>{oe[O]=Y})}const pe=1-S;if(pe>.001||k<1){const q=[];for(let O=0;O<ae;O++){if(oe&&oe[O]>=Z)continue;const Y=1-(O+.5)/ae*2,de=Math.sqrt(Math.max(0,1-Y*Y)),le=O*2.39996,ge=Math.cos(le)*de,xe=Y,we=Math.sin(le)*de;let be=0,Le=-2;for(let ct=0;ct<j;ct++){const Ot=ge*K[ct].ux+xe*K[ct].uy+we*K[ct].uz;Ot>Le&&(Le=Ot,be=ct)}const Be=K[be];let ze=0;for(const ct of A){const Ot=ge-ct[0],Vn=xe-ct[1],qt=we-ct[2];ze+=Math.exp(-(Ot*Ot+Vn*Vn+qt*qt)/(2*V*V))}ze=It(ze,0,1);const Te=ge*Q+we*D,Ge=-ge*D+we*Q,Ve=xe*B-Ge*G,We=(xe*G+Ge*B+1)/2,yt=.82+.18*We,ht=g+Te*ce*yt,Ut=y+Ve*ce*yt;q.push({x:ht+(Be.cx2-ht)*k,y:Ut+(Be.cy2-Ut)*k,d:We+(Be.d-We)*k,inf:ze,f:(1-(1-Math.abs(2*We-1)))*(1-k)+1*k})}q.sort((O,Y)=>O.d-Y.d);for(const O of q){const Y=xr(O.inf),de=Math.max(.6,x*(.05+.06*Y)*Zr(e.size)*(.55+.5*O.d)),le=(.16+.84*O.d)*(.45+.55*Y)*pe;if(le<=.003)continue;const ge=Math.atan2(O.y-y,O.x-g);l.fillStyle="rgba("+i.dot+","+le+")",l.beginPath(),l.ellipse(O.x,O.y,Math.max(.35,de*O.f),de,ge,0,6.2832),l.fill()}}e.size>=120&&_>.001&&(l.globalAlpha=_,ip(e,o,i,()=>i.dot),l.globalAlpha=1),Xr(e,o,i),l.restore()}function US(e,o,i){const{ctx:s,w:l,h:d}=e,p=l/2,m=d/2,g=Math.min(l,d)*.39,y=e.state!=="idle",x=e.size>=32?8:e.size>=20?6:5,b=g*.9,k=y?1:.4,S=o*(y?.3:.12),_=o*1*k,j=-o*.7*k+2.2,N=.72,$=(M,C)=>{const z=((M-C+Math.PI)%6.2832+6.2832)%6.2832-Math.PI;return Math.abs(z)};s.save(),s.globalCompositeOperation=i.glow?"lighter":"source-over";for(let M=0;M<x;M++){const C=M/x*6.2832+S;let z=Math.exp(-($(C,_)**2)/(2*N*N))+Math.exp(-($(C,j)**2)/(2*N*N));z=It(z,0,1);const R=xr(z),L=p+Math.cos(C)*b,T=m+Math.sin(C)*b,E=Math.max(.6,g*(.05+.07*R)*Zr(e.size)),B=.38+.62*R;if(i.glow&&R>.25){const G=s.createRadialGradient(L,T,0,L,T,E*4);G.addColorStop(0,"rgba("+i.accent+","+.24*R+")"),G.addColorStop(1,"rgba("+i.accent+",0)"),s.fillStyle=G,s.beginPath(),s.arc(L,T,E*4,0,6.2832),s.fill()}s.fillStyle="rgba("+i.dot+","+B+")",s.beginPath(),s.arc(L,T,E,0,6.2832),s.fill()}Xr(e,o,i),s.restore()}function qS(e,o,i){Xr(e,o,i)}const VS={orbit:e2,orbit2d:FS,circle:Ff,lines:BS,magnetic:WS,magnetic2d:US,pulse:qS,bands:Ff};function lt({mark:e="orbit",size:o=16,tone:i="auto",state:s="active",motionSpeed:l=1,accent:d="#96B9FF",color:p,coreHalo:m=!0,coreGradient:g=!1,streamCount:y,cellCount:x,className:b,"aria-label":k}){const S=v.useRef(null),_=ES(),j=v.useRef(0),N=v.useRef(0);N.current=g?1:0;const $=v.useRef(new Map),M=v.useRef(null),C=v.useRef(0);return v.useEffect(()=>{const z=S.current;if(!z)return;const R=z.getContext("2d");if(!R)return;const L=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),T=Math.min(2,window.devicePixelRatio||1),E=Math.max(2,Math.round(o*T)),B=E;z.width=E,z.height=B;const G={ctx:R,w:E,h:B,dpr:T,size:o,state:s,coreHalo:m,alert:j.current,streamCount:y,cellCount:x,cellBirths:x!=null&&!L&&s!=="static"?$.current:void 0},J=i==="auto"?PS(Df(R,z,"var(--color-bg-primary)"))<.5?"dark":"light":i,W=zS(J,ku(d));if(p){const I=Df(R,z,p);W.dot=I,W.core=I}const K=VS[e]??e2,te=1.15,ae=e==="lines"?1:0,ce=e==="lines"||e==="magnetic";(M.current==null||!ce||L||s==="static")&&(M.current=ae);const se=I=>{if(j.current+=(N.current-j.current)*.06,Math.abs(j.current-N.current)<.001&&(j.current=N.current),G.alert=j.current,G.emergeNow=performance.now()/1e3,ce&&M.current!==ae){const Z=G.emergeNow,oe=It(Z-(C.current||Z),0,.1);C.current=Z;const pe=ae>(M.current??0)?1:-1;M.current=It((M.current??0)+pe*oe/te,0,1)}else C.current=G.emergeNow;R.clearRect(0,0,E,B);const A=s==="static"?.62:I,V=M.current??ae;ce&&V>.001&&V<.999?HS(G,A,W,V):K(G,A,W)},Q=It(l,.4,3);if((L||s==="static")&&(j.current=N.current),se(1.15),L||s==="static")return;let D=0;const H=I=>{se(I/1e3*Q),D=requestAnimationFrame(H)};return D=requestAnimationFrame(H),()=>cancelAnimationFrame(D)},[e,o,i,s,l,d,p,m,g,y,x,_]),n.jsx("canvas",{ref:S,width:o,height:o,style:{width:o,height:o,display:"block",flexShrink:0},className:b,role:"img","aria-label":k})}const va={high:0,medium:1,low:2,none:3};f.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-severity='high']   { background: var(--color-error-fill); }
  &[data-severity='medium'] { background: var(--color-warning-fill); }
  &[data-severity='low']    { background: var(--color-slate-bg-secondary); }
  &[data-severity='none']   { background: var(--color-slate-bg-tertiary); }
`;function Ol(e){return e.status==="resolved"||e.status==="auto_resolved"||e.status==="workflow_available"?"green":e.status==="analyzing"?"slate":e.status==="in_progress"||e.status==="monitoring"?"blue":e.severity==="high"?"orange":"slate"}f.span`
  display: inline-block;
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-slate-bg-secondary);

  &[data-tone='orange'] { background: var(--color-orange-bg-secondary); }
  &[data-tone='green']  { background: var(--color-green-bg-secondary); }
  &[data-tone='blue']   { background: var(--color-blue-bg-secondary); }
  &[data-tone='slate']  { background: var(--color-slate-bg-secondary); }
`;function GS(e,o){if(o)return"Ultron is replying…";switch(e){case"analyzing":return"Add context while Ultron analyzes…";case"needs_approval":case"recommended":case"unresolved":return"Tell Ultron what to do…";case"in_progress":case"monitoring":return"Ask Ultron about this case…";case"resolved":case"auto_resolved":case"workflow_available":return"Ask a follow-up or refine the result…";default:return"Message Ultron…"}}const t2=e=>e.status==="workflow_available"||e.status==="resolved"&&e.workflowOpportunity!=null,n2=e=>/^(review|adjust|revisit|update)\b/i.test(e),YS=["Revisit","Update","Resolve"],KS=e=>/,|\sand\s/.test(e),QS="Approve all",wl="Yes",r2=e=>{const i=e.trim().replace(/[?.]+$/,"").replace(/^want me to\s+/i,"").split(/\s*,\s*and\s+|\s*,\s*|\s+and\s+/i).map(s=>s.trim()).filter(Boolean);return i.length<2?[]:i.map(s=>s.charAt(0).toUpperCase()+s.slice(1))};f.section`
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
`;function ZS({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.82617 1.53449C7.94005 1.50372 8.05995 1.50372 8.17383 1.53449C8.30314 1.5695 8.42106 1.66091 8.65527 1.84308L13.1768 5.35968C13.4788 5.59458 13.6294 5.71254 13.7383 5.85968C13.8346 5.98991 13.9065 6.13635 13.9502 6.2923C13.9995 6.4686 14 6.66043 14 7.04328V11.8665C14 12.6132 13.9998 12.9866 13.8545 13.2718C13.7267 13.5226 13.5232 13.727 13.2725 13.8548C12.9872 14.0001 12.6129 14.0003 11.8662 14.0003H4.13379C3.38705 14.0003 3.01275 14.0001 2.72754 13.8548C2.4768 13.727 2.27328 13.5226 2.14551 13.2718C2.00022 12.9866 2 12.6132 2 11.8665V7.04328C2 6.66043 2.00046 6.4686 2.0498 6.2923C2.09352 6.13635 2.16542 5.98991 2.26172 5.85968C2.37055 5.71254 2.52123 5.59458 2.82324 5.35968L7.34473 1.84308C7.57894 1.66091 7.69686 1.5695 7.82617 1.53449ZM5.33301 10.7083C4.98798 10.7085 4.70801 10.9883 4.70801 11.3333C4.70801 11.6784 4.98798 11.9581 5.33301 11.9583H10.666C11.0112 11.9583 11.291 11.6785 11.291 11.3333C11.291 10.9881 11.0112 10.7083 10.666 10.7083H5.33301Z",fill:"currentColor"})})}function XS({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M14 8C14 11.3137 11.3137 14 8 14C7.2019 14 6.4402 13.8442 5.74366 13.5613C5.61035 13.5072 5.54369 13.4801 5.48981 13.468C5.43711 13.4562 5.3981 13.4519 5.34409 13.4519C5.28887 13.4519 5.22872 13.4619 5.10843 13.4819L2.73651 13.8772C2.48812 13.9186 2.36393 13.9393 2.27412 13.9008C2.19552 13.8671 2.13289 13.8045 2.09917 13.7259C2.06065 13.6361 2.08135 13.5119 2.12275 13.2635L2.51807 10.8916C2.53812 10.7713 2.54814 10.7111 2.54814 10.6559C2.54813 10.6019 2.54381 10.5629 2.532 10.5102C2.51992 10.4563 2.49285 10.3897 2.43871 10.2563C2.15582 9.5598 2 8.7981 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}function JS({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M10.0214 2.04181C10.6937 2.04181 11.1797 2.03396 11.6191 2.18536C11.9869 2.31222 12.3226 2.51962 12.6005 2.79181C12.9325 3.11713 13.1426 3.5547 13.4433 4.15607L14.8876 7.04474C15.0062 7.28181 15.0928 7.45281 15.1542 7.63556C15.2059 7.78933 15.2431 7.94756 15.2656 8.10822C15.2823 8.22771 15.2871 8.34736 15.289 8.48517C15.2891 8.48778 15.2899 8.49037 15.29 8.49298C15.2907 8.54731 15.2909 8.60797 15.291 8.67462V10.1336C15.291 10.4082 15.2916 10.6579 15.288 10.8846C15.2862 10.998 15.2834 11.1057 15.2792 11.2078C15.2751 11.3099 15.2691 11.4066 15.2617 11.4979C15.2389 11.7768 15.197 12.0369 15.1093 12.283C15.0947 12.3241 15.0787 12.3648 15.0615 12.4051C15.0442 12.4455 15.025 12.4855 15.0048 12.5252C14.7532 13.0189 14.3521 13.4211 13.8583 13.6727C13.5418 13.8339 13.2029 13.8991 12.831 13.9295C12.4663 13.9593 12.0161 13.9588 11.4667 13.9588H4.53314C3.9838 13.9588 3.53358 13.9593 3.16888 13.9295C2.79702 13.8991 2.45803 13.8338 2.14154 13.6727C1.64773 13.421 1.24571 13.019 0.99408 12.5252C0.973898 12.4856 0.955705 12.4454 0.938416 12.4051C0.92113 12.3648 0.905203 12.3241 0.890564 12.283C0.8613 12.2009 0.836459 12.1174 0.816345 12.032C0.776133 11.8614 0.752436 11.6837 0.737244 11.4979C0.707461 11.1331 0.707947 10.683 0.707947 10.1336V8.75568C0.707947 8.65645 0.707987 8.56858 0.708923 8.49298C0.708995 8.48743 0.70975 8.48191 0.7099 8.47638C0.711967 8.3423 0.71698 8.22513 0.733337 8.10822C0.755823 7.94766 0.793005 7.78924 0.844666 7.63556C0.906129 7.45288 0.993773 7.28168 1.11224 7.04474L2.55658 4.15607C2.85722 3.55477 3.06735 3.1171 3.39935 2.79181C3.67723 2.51967 4.01216 2.31224 4.37982 2.18536C4.81932 2.03378 5.30509 2.04181 5.97748 2.04181H10.0214ZM5.97748 3.29181C5.21455 3.29181 4.98125 3.30002 4.78705 3.367C4.59463 3.43348 4.41882 3.54193 4.27338 3.68439C4.12674 3.82814 4.01486 4.03345 3.67377 4.71564L2.34467 7.37482H3.92084C3.96439 7.37482 4.0077 7.37665 4.05072 7.3797C4.13637 7.38576 4.2209 7.39717 4.30365 7.41486C4.46898 7.4502 4.62772 7.50789 4.77533 7.58575C4.84921 7.62475 4.92033 7.6689 4.98822 7.71759C5.09113 7.79137 5.18625 7.87632 5.2724 7.97052C5.31613 8.01836 5.35673 8.06922 5.39545 8.12189C5.45634 8.2047 5.51156 8.2927 5.55853 8.38654C5.58935 8.44818 5.63116 8.50182 5.67963 8.54767C5.70312 8.56997 5.72808 8.59019 5.75482 8.60822C5.84886 8.67135 5.96057 8.7077 6.07806 8.70782H9.92084C10.1409 8.70782 10.342 8.58337 10.4404 8.38654C10.6924 7.88275 11.1584 7.52957 11.6962 7.41486C11.8202 7.38835 11.9481 7.37486 12.0781 7.37482H13.6542L12.3251 4.71564C11.9838 4.03303 11.8723 3.82815 11.7255 3.68439C11.58 3.5419 11.4044 3.43342 11.2119 3.367C11.0177 3.30011 10.7842 3.29181 10.0214 3.29181H5.97748Z",fill:"currentColor"})})}function eN({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.2666 1.04199C10.8511 1.04199 11.3275 1.04198 11.7129 1.07324C12.1054 1.10512 12.4585 1.17306 12.7881 1.33984C13.3052 1.60159 13.727 2.01905 13.9912 2.53418C14.1599 2.86309 14.2286 3.21646 14.2607 3.60742C14.2922 3.99087 14.291 4.46453 14.291 5.04492V14.334C14.2908 14.5684 14.1599 14.7839 13.9512 14.8906C13.7423 14.9972 13.4909 14.9772 13.3008 14.8398L11.7363 13.71L10.3369 14.8232C10.1177 14.9972 9.80897 15.0037 9.58203 14.8398L7.99902 13.6963L6.41797 14.8398C6.19102 15.0036 5.88227 14.9972 5.66309 14.8232L4.26172 13.71L2.69922 14.8398C2.50913 14.977 2.25761 14.9972 2.04883 14.8906C1.84009 14.7839 1.70825 14.5684 1.70801 14.334V5.04492C1.70801 4.46453 1.70778 3.99087 1.73926 3.60742C1.7714 3.21657 1.84022 2.86302 2.00879 2.53418C2.27291 2.01938 2.69421 1.60157 3.21094 1.33984C3.54055 1.173 3.89457 1.10513 4.28711 1.07324C4.67248 1.04198 5.1489 1.04199 5.7334 1.04199H10.2666ZM10.9229 4.74512C10.6796 4.5003 10.284 4.49909 10.0391 4.74219L7.29199 7.4707L6.31543 6.50098C6.07061 6.25802 5.67485 6.25933 5.43164 6.50391C5.18853 6.7488 5.18975 7.14545 5.43457 7.38867L6.85156 8.7959C7.09528 9.03749 7.48883 9.0377 7.73242 8.7959L10.9199 5.62891C11.1645 5.38573 11.1657 4.98997 10.9229 4.74512Z",fill:"currentColor"})})}function tN({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M15.539 8.12557C12.309 6.92931 9.76305 4.38337 8.56677 1.15334C8.49145 0.948885 8.2018 0.948885 8.12556 1.15334C6.92931 4.38337 4.38337 6.92928 1.15334 8.12557C0.948885 8.20089 0.948885 8.49053 1.15334 8.56677C4.38337 9.76303 6.92928 12.309 8.12556 15.539C8.20089 15.7435 8.49053 15.7435 8.56677 15.539C9.76303 12.309 12.309 9.76305 15.539 8.56677C15.7435 8.49144 15.7435 8.20181 15.539 8.12557Z",fill:"currentColor"})})}function nN({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M4.33337 1.33331L4.85635 2.37926C5.03334 2.73324 5.12184 2.91024 5.24006 3.06361C5.34497 3.19971 5.46698 3.32172 5.60308 3.42663C5.75645 3.54485 5.93344 3.63335 6.28743 3.81034L7.33337 4.33331L6.28743 4.85628C5.93344 5.03328 5.75645 5.12177 5.60308 5.24C5.46698 5.34491 5.34497 5.46692 5.24006 5.60301C5.12184 5.75639 5.03334 5.93338 4.85635 6.28737L4.33337 7.33331L3.8104 6.28737C3.63341 5.93338 3.54491 5.75639 3.42669 5.60301C3.32178 5.46692 3.19977 5.34491 3.06367 5.24C2.9103 5.12177 2.7333 5.03328 2.37932 4.85629L1.33337 4.33331L2.37932 3.81034C2.7333 3.63335 2.9103 3.54485 3.06367 3.42663C3.19977 3.32172 3.32178 3.19971 3.42669 3.06361C3.54491 2.91024 3.63341 2.73324 3.8104 2.37926L4.33337 1.33331Z",fill:"currentColor"}),n.jsx("path",{d:"M11.3334 7.99998L11.9675 9.26815C12.1445 9.62213 12.2329 9.79912 12.3512 9.9525C12.4561 10.0886 12.5781 10.2106 12.7142 10.3155C12.8676 10.4337 13.0446 10.5222 13.3985 10.6992L14.6667 11.3333L13.3985 11.9674C13.0446 12.1444 12.8676 12.2329 12.7142 12.3511C12.5781 12.456 12.4561 12.578 12.3512 12.7141C12.2329 12.8675 12.1444 13.0445 11.9675 13.3985L11.3334 14.6666L10.6993 13.3985C10.5223 13.0445 10.4338 12.8675 10.3156 12.7141C10.2107 12.578 10.0887 12.456 9.95256 12.3511C9.79919 12.2329 9.62219 12.1444 9.26821 11.9674L8.00004 11.3333L9.26821 10.6992C9.62219 10.5222 9.79919 10.4337 9.95256 10.3155C10.0887 10.2106 10.2107 10.0886 10.3156 9.9525C10.4338 9.79912 10.5223 9.62213 10.6993 9.26815L11.3334 7.99998Z",fill:"currentColor"}),n.jsx("path",{d:"M12.3334 5.33331V1.99998M3.66671 14V10.6666M10.6667 3.66665H14M2.00004 12.3333H5.33337M4.33337 1.33331L3.8104 2.37926C3.63341 2.73324 3.54491 2.91024 3.42669 3.06361C3.32178 3.19971 3.19977 3.32172 3.06367 3.42663C2.9103 3.54485 2.7333 3.63335 2.37932 3.81034L1.33337 4.33331L2.37932 4.85629C2.7333 5.03328 2.9103 5.12177 3.06367 5.24C3.19977 5.34491 3.32178 5.46692 3.42669 5.60301C3.54491 5.75639 3.63341 5.93338 3.8104 6.28737L4.33337 7.33331L4.85635 6.28737C5.03334 5.93338 5.12184 5.75639 5.24006 5.60302C5.34497 5.46692 5.46698 5.34491 5.60308 5.24C5.75645 5.12177 5.93344 5.03328 6.28743 4.85628L7.33337 4.33331L6.28743 3.81034C5.93344 3.63335 5.75645 3.54485 5.60308 3.42663C5.46698 3.32172 5.34497 3.19971 5.24006 3.06361C5.12184 2.91024 5.03334 2.73324 4.85635 2.37926L4.33337 1.33331ZM11.3334 7.99998L10.6993 9.26815C10.5223 9.62213 10.4338 9.79912 10.3156 9.9525C10.2107 10.0886 10.0887 10.2106 9.95256 10.3155C9.79919 10.4337 9.62219 10.5222 9.26821 10.6992L8.00004 11.3333L9.26821 11.9674C9.62219 12.1444 9.79919 12.2329 9.95256 12.3511C10.0887 12.456 10.2107 12.578 10.3156 12.7141C10.4338 12.8675 10.5223 13.0445 10.6993 13.3985L11.3334 14.6666L11.9675 13.3985C12.1444 13.0445 12.2329 12.8675 12.3512 12.7141C12.4561 12.578 12.5781 12.456 12.7142 12.3511C12.8676 12.2329 13.0446 12.1444 13.3985 11.9674L14.6667 11.3333L13.3985 10.6992C13.0446 10.5222 12.8676 10.4337 12.7142 10.3155C12.5781 10.2106 12.4561 10.0886 12.3512 9.9525C12.2329 9.79912 12.1445 9.62213 11.9675 9.26815L11.3334 7.99998Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function _u({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M9.33337 1.513L9.54994 1.62803C9.75178 1.75172 9.92473 1.92467 10.2706 2.27057L12.3961 4.39605C12.742 4.74196 12.915 4.91491 13.0387 5.11674L13.1537 5.33336",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8.00781 0.707947C8.35239 0.707946 8.62569 0.706047 8.875 0.737244L9.11816 0.780212L9.17578 0.796814L9.53711 0.921814C9.7891 1.00867 9.95883 1.24609 9.95898 1.51263V1.96576C9.79761 1.81067 9.68055 1.70799 9.5498 1.62787L9.33301 1.51263V4.26654C9.33301 4.63991 9.33359 4.82706 9.40625 4.96967C9.47017 5.09492 9.57197 5.19683 9.69727 5.26068C9.83987 5.33334 10.027 5.33295 10.4004 5.33295H13.1533L13.0391 5.11713C12.9589 4.98633 12.8554 4.86941 12.7002 4.70795H13.1543L13.2529 4.71576C13.4779 4.75183 13.6692 4.90942 13.7451 5.12982L13.8691 5.49115L13.8857 5.54877C13.9622 5.86742 13.959 6.19909 13.959 6.65814V11.4667C13.959 12.0161 13.9595 12.4663 13.9297 12.831C13.8993 13.2029 13.834 13.5418 13.6729 13.8583C13.4213 14.352 13.019 14.7532 12.5254 15.0048C12.2088 15.1661 11.8701 15.2312 11.498 15.2617C11.1333 15.2915 10.6833 15.291 10.1338 15.291H5.86719C5.3178 15.291 4.86766 15.2914 4.50293 15.2617C4.13086 15.2313 3.79223 15.1661 3.47559 15.0048C2.98175 14.7532 2.5798 14.3521 2.32812 13.8583C2.16685 13.5417 2.1017 13.203 2.07129 12.831C2.04151 12.4663 2.04199 12.0161 2.04199 11.4667V4.53314C2.04199 3.98378 2.04152 3.53359 2.07129 3.16888C2.1017 2.79698 2.1669 2.45806 2.32812 2.14154C2.57981 1.64781 2.9818 1.24568 3.47559 0.99408C3.7921 0.832952 4.13103 0.767629 4.50293 0.737244C4.86765 0.707498 5.31784 0.707947 5.86719 0.707947H8.00781ZM5.33301 10.7089C4.98798 10.7091 4.70801 10.9889 4.70801 11.3339C4.70834 11.6787 4.98818 11.9587 5.33301 11.9589H9.33301C9.67798 11.9589 9.95768 11.6788 9.95801 11.3339C9.95801 10.9887 9.67819 10.7089 9.33301 10.7089H5.33301ZM5.33301 8.04193C4.98798 8.04211 4.70801 8.32186 4.70801 8.66693C4.70816 9.01187 4.98808 9.29175 5.33301 9.29193H10.666C11.0111 9.29193 11.2909 9.01198 11.291 8.66693C11.291 8.32175 11.0112 8.04193 10.666 8.04193H5.33301Z",fill:"currentColor"})]})}function rN({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M11.2422 2.04492C11.5338 2.05088 11.7821 2.07009 12.0127 2.13184C12.9183 2.37462 13.6264 3.08169 13.8691 3.9873C13.9639 4.34107 13.959 4.75444 13.959 5.33398V11.4668C13.959 12.0162 13.9595 12.4663 13.9297 12.8311C13.8993 13.2029 13.834 13.5419 13.6729 13.8584C13.4212 14.3522 13.0192 14.7542 12.5254 15.0059C12.2088 15.1672 11.8701 15.2323 11.498 15.2627C11.1333 15.2925 10.6833 15.292 10.1338 15.292H5.86719C5.31782 15.292 4.86766 15.2924 4.50293 15.2627C4.13101 15.2323 3.79212 15.167 3.47559 15.0059C2.98178 14.7543 2.5798 14.3522 2.32812 13.8584C2.1669 13.5419 2.1017 13.203 2.07129 12.8311C2.04152 12.4663 2.04199 12.0162 2.04199 11.4668V4.92871C2.04503 4.55134 2.06076 4.2527 2.13184 3.9873C2.37462 3.08174 3.08174 2.37462 3.9873 2.13184C4.29468 2.04951 4.63434 2.04332 5.06543 2.04199L5.15625 2.04688C5.60779 2.0915 5.95895 2.47277 5.95898 2.93359C5.95898 3.13014 5.95933 3.24057 5.96582 3.32031C5.96729 3.33814 5.96942 3.35156 5.9707 3.36035L5.97266 3.3623C5.98152 3.36365 5.99514 3.36665 6.01367 3.36816C6.09344 3.37464 6.2039 3.375 6.40039 3.375H9.60059C9.79724 3.375 9.90756 3.37468 9.9873 3.36816C10.0048 3.36671 10.0176 3.36358 10.0264 3.3623C10.0276 3.36116 10.0292 3.36065 10.0303 3.35938C10.0315 3.35061 10.0337 3.3375 10.0352 3.32031C10.0416 3.24057 10.042 3.13012 10.042 2.93359C10.042 2.44208 10.4408 2.04051 10.9355 2.04199L11.2422 2.04492ZM10.7754 7.89062C10.5314 7.64705 10.1356 7.64714 9.8916 7.89062L7.33301 10.4482L6.44238 9.55762C6.19834 9.31378 5.80164 9.31375 5.55762 9.55762C5.31387 9.80154 5.31411 10.1973 5.55762 10.4414L6.8916 11.7754C7.13565 12.0191 7.53141 12.0192 7.77539 11.7754L10.7754 8.77539C11.0193 8.5313 11.0194 8.13465 10.7754 7.89062Z",fill:"currentColor"}),n.jsx("path",{d:"M5.33337 2.39998C5.33337 2.02661 5.33337 1.83993 5.40604 1.69732C5.46995 1.57188 5.57194 1.46989 5.69738 1.40598C5.83999 1.33331 6.02667 1.33331 6.40004 1.33331H9.60004C9.97341 1.33331 10.1601 1.33331 10.3027 1.40598C10.4281 1.46989 10.5301 1.57188 10.594 1.69732C10.6667 1.83993 10.6667 2.02661 10.6667 2.39998V2.93331C10.6667 3.30668 10.6667 3.49337 10.594 3.63597C10.5301 3.76141 10.4281 3.8634 10.3027 3.92732C10.1601 3.99998 9.97341 3.99998 9.60004 3.99998H6.40004C6.02667 3.99998 5.83999 3.99998 5.69738 3.92732C5.57194 3.8634 5.46995 3.76141 5.40604 3.63597C5.33337 3.49337 5.33337 3.30668 5.33337 2.93331V2.39998Z",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]})}function oN({size:e=16}){return n.jsxs("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M1.33331 8.00003L7.76147 11.2141C7.84892 11.2578 7.89265 11.2797 7.93851 11.2883C7.97914 11.2959 8.02082 11.2959 8.06145 11.2883C8.10731 11.2797 8.15104 11.2578 8.23849 11.2141L14.6666 8.00003M1.33331 11.3334L7.76147 14.5474C7.84892 14.5912 7.89265 14.613 7.93851 14.6216C7.97914 14.6293 8.02082 14.6293 8.06145 14.6216C8.10731 14.613 8.15104 14.5912 8.23849 14.5474L14.6666 11.3334M1.33331 4.6667L7.76147 1.45262C7.84892 1.4089 7.89265 1.38703 7.93851 1.37843C7.97914 1.37081 8.02082 1.37081 8.06145 1.37843C8.10731 1.38703 8.15104 1.4089 8.23849 1.45262L14.6666 4.6667L8.23849 7.88078C8.15104 7.9245 8.10731 7.94637 8.06145 7.95497C8.02082 7.96259 7.97914 7.96259 7.93851 7.95497C7.89265 7.94637 7.84892 7.9245 7.76147 7.88078L1.33331 4.6667Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),n.jsx("path",{d:"M8.23849 1.45262C8.15104 1.4089 8.10731 1.38703 8.06145 1.37843C8.02082 1.37081 7.97914 1.37081 7.93851 1.37843C7.89265 1.38703 7.84892 1.4089 7.76147 1.45262L1.33331 4.6667L7.76147 7.88078C7.84892 7.9245 7.89265 7.94637 7.93851 7.95497C7.97914 7.96259 8.02082 7.96259 8.06145 7.95497C8.10731 7.94637 8.15104 7.9245 8.23849 7.88078L14.6666 4.6667L8.23849 1.45262Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})}function aN({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7.61446 2.21818C7.78581 1.92727 8.21419 1.92727 8.38554 2.21818L14.9397 13.3455C15.111 13.6364 14.8969 14 14.5542 14H1.44585C1.10315 14 0.888957 13.6364 1.06031 13.3455L7.61446 2.21818Z",fill:"currentColor"})})}function jo({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 3C13.7614 3 16 5.23858 16 8C16 10.7614 13.7614 13 11 13C10.0088 13 9.08549 12.7109 8.3085 12.2133C8.12109 12.0933 7.87891 12.0933 7.6915 12.2133C6.91451 12.7109 5.99118 13 5 13C2.23858 13 0 10.7614 0 8C0 5.23858 2.23858 3 5 3C5.99101 3 6.91454 3.28849 7.69154 3.78585C7.87894 3.90581 8.12106 3.90581 8.30846 3.78585C9.08546 3.28849 10.009 3 11 3ZM5 4.25C2.92893 4.25 1.25 5.92893 1.25 8C1.25 10.0711 2.92893 11.75 5 11.75C5.57991 11.75 6.12868 11.6178 6.61866 11.3825C6.88197 11.256 6.93078 10.9186 6.77435 10.6719C6.28428 9.899 6 8.98289 6 8C6 7.01689 6.28408 6.10033 6.77423 5.32727C6.93068 5.08053 6.88186 4.743 6.61841 4.61667C6.12847 4.38174 5.57967 4.25 5 4.25ZM11 4.25C10.42 4.25 9.87078 4.38162 9.38055 4.61667C9.11712 4.74298 9.06834 5.08048 9.22486 5.32716C9.71537 6.10023 10 7.01666 10 8C10 8.98312 9.71517 9.89911 9.22474 10.672C9.06825 10.9186 9.117 11.256 9.3803 11.3825C9.87056 11.6179 10.4198 11.75 11 11.75C13.0711 11.75 14.75 10.0711 14.75 8C14.75 5.92893 13.0711 4.25 11 4.25ZM8.35058 6.31346C8.20071 6.01617 7.79929 6.01617 7.64942 6.31346C7.39384 6.82047 7.25 7.39348 7.25 8C7.25 8.60614 7.3939 9.17862 7.64931 9.68529C7.79922 9.98265 8.20078 9.98265 8.35069 9.68529C8.6061 9.17862 8.75 8.60614 8.75 8C8.75 7.39348 8.60616 6.82047 8.35058 6.31346Z",fill:"currentColor"})})}function iN({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 0.708008C12.0268 0.708184 15.2908 3.97318 15.291 8C15.2908 12.0268 12.0268 15.2908 8 15.291C3.97318 15.2908 0.708184 12.0268 0.708008 8C0.708184 3.97318 3.97318 0.708184 8 0.708008ZM8 3.04199C7.65497 3.04217 7.375 3.32192 7.375 3.66699V4.04199H7.33398C6.06833 4.04199 5.04199 5.06833 5.04199 6.33398C5.04234 7.59934 6.06855 8.625 7.33398 8.625H8.66699C9.24214 8.62518 9.70898 9.0918 9.70898 9.66699C9.70881 10.242 9.24203 10.7088 8.66699 10.709H7.22266C6.70891 10.709 6.29229 10.292 6.29199 9.77832C6.29199 9.43325 6.01202 9.1535 5.66699 9.15332C5.32181 9.15332 5.04199 9.43314 5.04199 9.77832C5.04229 10.9824 6.01855 11.959 7.22266 11.959H7.375V12.334C7.37535 12.6788 7.65519 12.9588 8 12.959C8.34481 12.9588 8.62465 12.6788 8.625 12.334V11.959H8.66699C9.93239 11.9588 10.9588 10.9324 10.959 9.66699C10.959 8.40145 9.9325 7.37518 8.66699 7.375H7.33398C6.7589 7.375 6.29234 6.90898 6.29199 6.33398C6.29199 5.75869 6.75869 5.29199 7.33398 5.29199H8.77832C9.292 5.29229 9.70898 5.70891 9.70898 6.22266C9.70922 6.56763 9.98895 6.84766 10.334 6.84766C10.6787 6.8473 10.9587 6.56742 10.959 6.22266C10.959 5.01855 9.98236 4.04229 8.77832 4.04199H8.625V3.66699C8.625 3.32192 8.34503 3.04217 8 3.04199Z",fill:"currentColor"})})}function sN({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6.88904 2.23425C8.65294 0.631056 11.3468 0.631163 13.1107 2.23425C13.195 2.31087 13.2876 2.40434 13.4418 2.55847C13.5959 2.71262 13.6894 2.80523 13.766 2.88953C15.369 4.65349 15.3692 7.34733 13.766 9.11121C13.7011 9.18255 13.6237 9.25935 13.5082 9.37488H7.51013L11.1088 5.77625C11.3528 5.53221 11.3527 5.13557 11.1088 4.89148C10.8648 4.64762 10.4691 4.64784 10.225 4.89148L2.70056 12.4159L3.58337 13.2987L1.77576 15.1093C1.53171 15.3532 1.13505 15.3532 0.890991 15.1093C0.646967 14.8652 0.647013 14.4686 0.890991 14.2245L2.76208 12.3534C2.73827 12.2607 2.72584 12.1709 2.71912 12.0887C2.70751 11.9464 2.70837 11.7766 2.70837 11.6005V7.10828C2.70836 6.97509 2.7049 6.80661 2.74451 6.64148C2.77612 6.50985 2.8281 6.38388 2.8988 6.26843C2.98752 6.12366 3.10929 6.00714 3.20349 5.91296L6.55798 2.55847C6.71214 2.40431 6.80474 2.31088 6.88904 2.23425ZM10.0873 12.7968C9.9931 12.891 9.87659 13.0127 9.73181 13.1014C9.61631 13.1722 9.49047 13.2251 9.35876 13.2567C9.19361 13.2963 9.02517 13.2919 8.89197 13.2919H4.39978C4.22362 13.2919 4.05389 13.2927 3.9115 13.2811C3.82892 13.2744 3.73904 13.2612 3.64587 13.2372L4.02673 12.8583L6.26013 10.6249H12.2592L10.0873 12.7968Z",fill:"currentColor"})})}function lN({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.41787 1.59151C7.7782 1.38405 8.2218 1.38405 8.58213 1.59151L13.4155 4.37431C13.7771 4.58253 14 4.96807 14 5.38538V10.6145C14 11.0318 13.7771 11.4174 13.4155 11.6256L8.58213 14.4084C8.22173 14.6158 7.77827 14.6158 7.41787 14.4084L2.58457 11.6258C2.22291 11.4176 2 11.032 2 10.6147V5.38536C2 4.96805 2.22289 4.58252 2.58455 4.3743L7.41787 1.59151ZM5.58335 8.00004C5.58335 6.66535 6.66533 5.58337 8 5.58337C9.33473 5.58337 10.4167 6.66535 10.4167 8.00004C10.4167 9.33471 9.33473 10.4167 8 10.4167C6.66533 10.4167 5.58335 9.33471 5.58335 8.00004Z",stroke:"currentColor",strokeWidth:"1.25"})})}function Bf({size:e=16}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M6 9L12 15L18 9",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})})}const qd=[{id:"shift_drop_maria",name:"Shift Drop Recovery",title:"Maria Ellis dropped her 2pm shift at Riverside Clinic",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"Maria dropped her 2:00 PM RN shift at Riverside Clinic.",assessment:"Urgent fill — the shift starts in under 12 hours and still has no replacement.",analysisResult:"8 available RNs match, with no overtime or do-not-return conflicts.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:"Automate urgent shift-drop recovery.",timeline:[{state:"detected",headline:"RN dropped this afternoon’s shift",done:!0},{state:"assessment",headline:"Starts in under 12 hours — urgent fill",done:!0},{state:"recommendation",headline:"8 qualified RNs identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes","Notify scheduler"],timestamp:"8:02 AM"},{id:"timeoff_sofia",name:"Time-Off Coverage Check",title:"Sofia Marin requested time off next Thursday–Friday",capability:"Time Off",status:"needs_approval",severity:"medium",event:"Sofia requested time off next Thursday and Friday.",assessment:"Two assigned shifts fall inside the window — Thursday is covered, Friday is thin.",analysisResult:"PTO balance covers it; only one backup is available for Friday.",recommendation:"Approve Thursday and hold Friday for your call.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Time-off request for Thu–Fri",done:!0},{state:"assessment",headline:"Friday coverage is thin",done:!0},{state:"recommendation",headline:"Approve Thursday, hold Friday",done:!0},{state:"approval",headline:"Approval required for the split decision",done:!1}],actions:["Approve Thursday","Hold Friday for you"],timestamp:"10:12 AM"},{id:"document_kenji",name:"Document Filing",title:"Kenji Tanaka uploaded a document to his profile",capability:"Compliance",status:"needs_approval",severity:"low",event:"Kenji uploaded a document to his profile.",assessment:"Read as a valid CPR certification that expires in 3 weeks.",analysisResult:"Name matches the uploader; the credential is valid but expires soon.",recommendation:"File it as a CPR cert and flag the renewal.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New document on Kenji’s profile",done:!0},{state:"assessment",headline:"Valid CPR cert, expires in 3 weeks",done:!0},{state:"recommendation",headline:"File the cert + flag the renewal",done:!0},{state:"approval",headline:"Approval required before filing",done:!1}],actions:["File as CPR cert","Mark verified","Flag renewal"],timestamp:"11:48 AM"},{id:"application_priya",name:"New Lead Screening",title:"New application: Priya R. — status New Lead",capability:"Recruiting",status:"recommended",severity:"low",event:"Priya R. submitted an application — status New Lead.",assessment:"Strong match for the linked CNA Night Shift role downtown.",analysisResult:"CNA license valid, availability matches — scored a 92% match.",recommendation:"Screen the lead and reach out if qualified.",outcome:null,workflowOpportunity:"Auto-screen and advance qualified leads.",timeline:[{state:"detected",headline:"New application received",done:!0},{state:"assessment",headline:"92% match for CNA · Night · Downtown",done:!0},{state:"recommendation",headline:"Screen and reach out",done:!1}],actions:["Mark qualified","Send intro","Ask screening questions"],timestamp:"8:41 AM"},{id:"new_shift_forklift",name:"Shift Offer",title:"New shift created: Forklift Op, Friday 6am, Bay 4",capability:"Fill Optimization",status:"recommended",severity:"low",event:"A Forklift Op shift was created for Friday 6:00 AM, Bay 4.",assessment:"Certified-only shift with a healthy pool of available workers.",analysisResult:"11 certified, available workers — top 6 ranked by proximity and reliability.",recommendation:"Offer it to the best-matched workers.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"New forklift shift created",done:!0},{state:"assessment",headline:"11 certified workers available",done:!0},{state:"recommendation",headline:"Offer to the top 6 matches",done:!1}],actions:["Offer to top matches","Assign first claim","Confirm and update calendar"],timestamp:"9:30 AM"},{id:"new_user_luis",name:"Candidate Onboarding",title:"New user created — Candidate: Luis M.",capability:"Onboarding",status:"recommended",severity:"low",event:"A new Candidate record was created for Luis M.",assessment:"No tasks yet — ready for the standard intake set.",analysisResult:"Pulled the 5 standard intake tasks; nothing pre-fillable on file.",recommendation:"Kick off onboarding.",outcome:null,workflowOpportunity:"Auto-start onboarding for new candidates.",timeline:[{state:"detected",headline:"New candidate record created",done:!0},{state:"assessment",headline:"5 standard intake tasks ready",done:!0},{state:"recommendation",headline:"Send welcome + assign intake",done:!1}],actions:["Send welcome","Assign intake tasks","Follow up to completion"],timestamp:"1:40 PM"},{id:"missed_clockin_james",name:"Missed Clock-In",title:"James Okoro never started his 9am shift",capability:"Attendance Recovery",status:"needs_approval",severity:"high",event:"James never clocked in for his 9:00 AM shift.",assessment:"The grace window has elapsed with no release on file — needs a quick check before it’s a no-show.",analysisResult:"No time-off on file and the 5-minute grace elapsed — an unexplained gap.",recommendation:"Check if he’s on the way and update the shift.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"9am start passed with no clock-in",done:!0},{state:"assessment",headline:"No release on file — grace window elapsed",done:!0},{state:"recommendation",headline:"Check in with James and update the shift",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Text James","Update shift","Flag scheduling inbox"],timestamp:"9:03 AM"},{id:"thread_cancel_wed",name:"Informal Cancellation",title:"Worker replied “I can’t make tomorrow” in a thread",capability:"Coverage Recovery",status:"needs_approval",severity:"high",event:"A worker replied “I can’t make tomorrow” in an Engage thread.",assessment:"Matched to her assigned Wed 7:00 AM shift at Pier 9 — no formal release was filed.",analysisResult:"An informal cancellation with no release on file — it needs to be recorded as a drop.",recommendation:"Treat it as a drop and start a fill, with a heads-up.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Inbound message reads as a cancellation",done:!0},{state:"assessment",headline:"Matched to the assigned Wed shift",done:!0},{state:"recommendation",headline:"Log the release and start a fill",done:!0},{state:"approval",headline:"Approval required before recording it",done:!1}],actions:["Log the release","Acknowledge reply","Start replacement search"],timestamp:"4:30 PM"},{id:"job_event_staff",name:"Bulk Fill",title:"New job: Event Staff — 20 openings, Saturday",capability:"Marketplace Optimization",status:"needs_approval",severity:"medium",event:"An Event Staff job was created with 20 openings for Saturday 4:00 PM.",assessment:"63 eligible workers ranked; 9 double-booked candidates filtered out.",analysisResult:"63 eligible workers ranked and 9 double-bookings filtered out — ready to invite the top matches.",recommendation:"Match the pool and invite the best candidates.",outcome:null,workflowOpportunity:"Automate bulk-fill invitations.",timeline:[{state:"detected",headline:"New job · 20 openings · Saturday",done:!0},{state:"assessment",headline:"63 eligible workers ranked",done:!0},{state:"recommendation",headline:"Invite the top matches to claim slots",done:!0},{state:"approval",headline:"Approval required before inviting",done:!1}],actions:["Invite top matches","Track responses","Keep a standby list"],timestamp:"1:05 PM"},{id:"missed_clockout_bianca",name:"Open Timesheet",title:"Bianca Rossi missed her clock-out — no end time on the timesheet",capability:"Payroll Operations",status:"needs_approval",severity:"medium",event:"Bianca’s shift ended with no clock-out — her timesheet is open.",assessment:"Last geofence ping puts her off-site ~6:05 PM; held from payroll for a real end time.",analysisResult:"Held from payroll — the open punch needs a confirmed end time before the run.",recommendation:"Confirm her real end time and fix the timesheet.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Shift ended with no clock-out",done:!0},{state:"assessment",headline:"Held from payroll — needs a real end time",done:!0},{state:"recommendation",headline:"Confirm her end time and fix the timesheet",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Text Bianca","Update timesheet","Flag payroll"],timestamp:"3:10 PM"},{id:"payroll_acme_invoice",name:"Invoice Roll-Up",title:"Shift marked payroll approved — Acme Logistics",capability:"Payroll Operations",status:"recommended",severity:"low",event:"A shift was marked payroll approved for Acme Logistics.",assessment:"Bill rate read and matched to Acme’s open, net-30 draft invoice.",analysisResult:"No duplicate line exists — the approved shift is safe to add to the open invoice.",recommendation:"Roll it onto the client’s open invoice.",outcome:null,workflowOpportunity:"Automate approved-shift invoicing.",timeline:[{state:"detected",headline:"Shift marked payroll approved",done:!0},{state:"assessment",headline:"Matched to Acme’s open invoice",done:!0},{state:"recommendation",headline:"Roll it onto the open invoice",done:!1}],actions:["Add line item","Recalculate total"],timestamp:"11:00 AM"},{id:"schedule_published",name:"Schedule Confirmation",title:"It’s Friday — next week’s schedule is published",capability:"Scheduling",status:"recommended",severity:"medium",event:"Next week’s schedule was published — 84 shifts across 31 workers.",assessment:"22 shifts are still unconfirmed, heaviest on Monday and Tuesday.",analysisResult:"22 of 84 shifts are unconfirmed — confirming now de-risks Monday and Tuesday.",recommendation:"Confirm everyone before the weekend.",outcome:null,workflowOpportunity:"Automate weekly schedule confirmations.",timeline:[{state:"detected",headline:"Next week’s schedule published",done:!0},{state:"assessment",headline:"22 shifts unconfirmed",done:!0},{state:"recommendation",headline:"Confirm everyone before the weekend",done:!1}],actions:["Confirm all shifts","Chase the unconfirmed","Send Monday-readiness summary"],timestamp:"8:00 AM"},{id:"shift_release_jenny",name:"Shift Release Recovery",title:"Jenny Park released her Saturday shift at Lakeside",capability:"Coverage Recovery",status:"needs_approval",severity:"medium",event:"Jenny released her Saturday 8:00 AM caregiver shift at Lakeside.",assessment:"More than 12 hours out — standard fill path with 5 qualified caregivers.",recommendation:"Find a qualified replacement and fill it.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Saturday caregiver shift released",done:!0},{state:"assessment",headline:"5 qualified caregivers available",done:!0},{state:"recommendation",headline:"Best matches identified",done:!0},{state:"approval",headline:"Approval required before outreach",done:!1}],actions:["Message replacements","Assign first yes"],timestamp:"2:22 PM"},{id:"birthday_tomas",name:"Birthday Greeting",title:"Tomas Greco has a birthday today",capability:"Engagement",status:"needs_approval",severity:"low",event:"Today is Tomas’s birthday.",assessment:"Active employee; preferred channel is in-app chat — a send is appropriate.",recommendation:"Send a happy birthday from the team.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Birthday matched to today",done:!0},{state:"assessment",headline:"Active employee · in-app chat",done:!0},{state:"recommendation",headline:"A warm note drafted",done:!0},{state:"approval",headline:"Approval required before sending",done:!1}],actions:["Send Birthday Note"],timestamp:"9:12 AM"},{id:"weekly_fill_report",name:"Scheduled Report",title:"Next week’s fill-rate report is ready for review",capability:"Reporting",status:"needs_approval",severity:"medium",event:"The weekly fill-rate report ran — 22 shifts are under target for next week.",assessment:"Coverage gaps cluster on Monday and Tuesday; scheduling should see them before the week starts.",recommendation:"Publish the report and flag the gaps to scheduling.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Weekly report generated",done:!0},{state:"assessment",headline:"22 shifts under target",done:!0},{state:"recommendation",headline:"Gaps flagged for scheduling",done:!0},{state:"approval",headline:"Approval required before sharing",done:!1}],actions:["Publish & flag gaps"],timestamp:"5:00 PM"},{id:"clockin_devon",name:"Clock-In Approval",title:"Devon Pierce’s clock-in is ready for payroll approval",capability:"Attendance",status:"needs_approval",severity:"low",event:"Devon clocked in at Eastgate Warehouse — the punch is clean and inside the geofence.",assessment:"All required fields are present, so it’s ready to approve for the payroll run.",recommendation:"Approve the clock-in for payroll.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Clock-in at Eastgate Warehouse",done:!0},{state:"assessment",headline:"Inside geofence · all fields present",done:!0},{state:"recommendation",headline:"Ready for payroll approval",done:!0},{state:"approval",headline:"Approval required before payroll",done:!1}],actions:["Approve clock-in"],timestamp:"8:15 AM"},{id:"phone_aisha",name:"Profile Update",title:"Aisha Bello changed her phone number",capability:"Users",status:"needs_approval",severity:"low",event:"Aisha updated her phone number on file.",assessment:"It’s her notification contact, so it’s worth a quick verification before it goes live.",recommendation:"Verify the new number and update her notification contact.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Phone number updated",done:!0},{state:"assessment",headline:"Used as her notification contact",done:!0},{state:"recommendation",headline:"Verification ready to send",done:!0},{state:"approval",headline:"Approval required before verifying",done:!1}],actions:["Verify & update"],timestamp:"12:30 PM"},{id:"fill_confirmed_maria",name:"Autonomous Fill",title:"The fill agent lined up a replacement for Maria’s shift",capability:"Autonomous Operations",status:"needs_approval",severity:"high",event:"The fill agent found Sarah Quinn for Maria’s open RN shift at Riverside Clinic.",assessment:"Sarah clears policy and is available — the assignment just needs your confirmation.",recommendation:"Confirm the assignment and notify the scheduler.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Replacement found for Maria’s shift",done:!0},{state:"assessment",headline:"Sarah Quinn clears policy · available",done:!0},{state:"recommendation",headline:"Assignment ready to confirm",done:!0},{state:"approval",headline:"Approval required before assigning",done:!1}],actions:["Confirm assignment"],timestamp:"3:55 PM"},{id:"invoice_paid_4821",name:"Invoice Reconciliation",title:"Client marked invoice #4821 as paid",capability:"Invoicing",status:"needs_approval",severity:"low",event:"A client marked invoice #4821 paid outside Teambridge.",assessment:"The payment needs reconciling against the open balance before the invoice can close.",recommendation:"Reconcile the payment and close the invoice.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:"Invoice #4821 marked paid",done:!0},{state:"assessment",headline:"Payment recorded outside Teambridge",done:!0},{state:"recommendation",headline:"Ready to reconcile and close",done:!0},{state:"approval",headline:"Approval required before closing",done:!1}],actions:["Reconcile & close"],timestamp:"11:25 AM"},{id:"cred_expired_nadia",name:"Credential Lapse",title:"Nadia Haddad’s CPR cert expired overnight",capability:"Compliance",status:"needs_approval",severity:"high",event:"Nadia’s CPR certification expired overnight.",assessment:"A blocking policy flagged the lapse — CPR is required for her role.",recommendation:"Pull her from non-compliant shifts and start renewal.",outcome:null,workflowOpportunity:"Monitor credential lapses and auto-start renewals.",timeline:[{state:"detected",headline:"CPR cert expired overnight",done:!0},{state:"assessment",headline:"3 upcoming shifts now at risk",done:!0},{state:"recommendation",headline:"Renewal + backfills lined up",done:!0},{state:"approval",headline:"Approval required before changes",done:!1}],actions:["Start renewal","Line up backfills"],timestamp:"10:40 AM"}],xa={shift_drop_maria:"Maria Ellis",timeoff_sofia:"Sofia Marin",document_kenji:"Kenji Tanaka",missed_clockin_james:"James Okoro",missed_clockout_bianca:"Bianca Rossi",shift_release_jenny:"Jenny Park",birthday_tomas:"Tomas Greco",clockin_devon:"Devon Pierce",phone_aisha:"Aisha Bello",cred_expired_nadia:"Nadia Haddad"},o2={shift_drop_maria:{role:"RN",shiftTime:"Today · 2:00 PM",location:"Riverside Clinic"},timeoff_sofia:{role:"PTO",shiftTime:"Next Thu–Fri",location:"2 assigned shifts"},document_kenji:{role:"CPR cert",shiftTime:"Expires in 3 weeks",location:"Profile upload"},application_priya:{role:"CNA",shiftTime:"Night Shift",location:"Downtown"},new_shift_forklift:{role:"Forklift Op",shiftTime:"Fri · 6:00 AM",location:"Bay 4"},new_user_luis:{role:"Candidate",shiftTime:"Onboarding",location:"5 intake tasks"},missed_clockin_james:{role:"Worker",shiftTime:"Today · 9:00 AM",location:"No clock-in"},thread_cancel_wed:{role:"Worker",shiftTime:"Wed · 7:00 AM",location:"Pier 9"},payroll_acme_invoice:{role:"Invoice",shiftTime:"$48/hr · 8 hrs",location:"Acme Logistics"},job_event_staff:{role:"Event Staff",shiftTime:"Sat · 4:00 PM",location:"20 openings"},missed_clockout_bianca:{role:"Timesheet",shiftTime:"Ended ~6:05 PM",location:"Open punch"},schedule_published:{role:"31 workers",shiftTime:"Next week",location:"84 shifts"},shift_release_jenny:{role:"Caregiver",shiftTime:"Sat · 8:00 AM",location:"Lakeside"},birthday_tomas:{role:"Employee",shiftTime:"Today",location:"In-app chat"},weekly_fill_report:{role:"Report",shiftTime:"Weekly",location:"Home dashboard"},clockin_devon:{role:"Clock-in",shiftTime:"Today · 8:15 AM",location:"Eastgate Warehouse"},phone_aisha:{role:"Profile",shiftTime:"Today",location:"Phone updated"},fill_confirmed_maria:{role:"RN",shiftTime:"Replacement",location:"Riverside Clinic"},invoice_paid_4821:{role:"Invoice",shiftTime:"#4821",location:"Marked paid"},cred_expired_nadia:{role:"CPR cert",shiftTime:"Expired",location:"3 shifts at risk"}};function a2(e){const o=o2[e];return o?[o.role,o.shiftTime,o.location].filter(Boolean).join(" · "):""}function i2(e){const o=xa[e.id];if(!o||e.title.startsWith(o))return e.title;const i=e.title.split(" ")[0]??"",l=i===i.toUpperCase()?e.title:e.title.charAt(0).toLowerCase()+e.title.slice(1);return`${o} ${l}`}const s2={missed_clockin_james:"james_okoro_2"},sp=e=>`https://i.pravatar.cc/80?u=${s2[e]??e}`,_a=e=>`https://i.pravatar.cc/80?u=${s2[e]??e}`,cN={shift_drop_maria:[{icon:"clock",headline:"Review dropped shift",detail:"I checked out the dropped shift: RN · Riverside Clinic · 2:00–10:00pm, in the ICU unit."},{icon:"chart",headline:"Determine course of action",detail:"It starts in 4 hours — an urgent fill, where ranked one-by-one outreach is likely too slow. So I’ll message the top 20 matched replacements at once. That’s worked before, so no bonus incentive yet."},{icon:"done",headline:"Share plan",detail:"I turned that into a three-step plan — message the best-matched RNs, confirm and assign the first qualified yes, then notify the Riverside manager — and shared it below for your approval."}],timeoff_sofia:[{icon:"clock",headline:"Review time-off request",detail:"I looked at Sofia’s request — Thursday and Friday off, with two assigned shifts falling inside the window."},{icon:"chart",headline:"Determine course of action",detail:"Her PTO covers it and there’s no blackout rule, so it’s approvable. But coverage splits: Thursday stays fully covered, Friday has just one backup and reads thin. So I’ll approve Thursday outright and hold Friday for your call."},{icon:"done",headline:"Share plan",detail:"I laid it out as a short plan — approve Thursday outright, hold Friday for your call, and let Sofia know where each day stands — and shared it for your go-ahead."}],document_kenji:[{icon:"clock",headline:"Review uploaded document",detail:"I opened the file on Kenji’s profile and read it as a valid CPR certification."},{icon:"chart",headline:"Determine course of action",detail:"The name matches and the credential checks out, but it expires in 3 weeks. So I’ll file it as a CPR cert and set a renewal flag before expiry, so it doesn’t lapse and block his shifts."},{icon:"done",headline:"Share plan",detail:"I built the plan — file the document as a CPR cert, mark the credential verified, and set a renewal flag before it expires — and shared it for your approval."}],application_priya:[{icon:"clock",headline:"Review new application",detail:"I read Priya’s application against the linked role: CNA · Night Shift · Downtown."},{icon:"chart",headline:"Determine course of action",detail:"Valid CNA license and her availability fits the shift — a 92% match, a strong lead. So rather than let it sit in the queue, I’ll screen it qualified and send an intro before someone else moves on her."},{icon:"done",headline:"Share plan",detail:"I shaped it into a plan — mark Priya qualified, send a warm intro with the two screening questions, and move her to the recruiter queue — ready for your go-ahead."}],new_shift_forklift:[{icon:"clock",headline:"Review new shift",detail:"I read the new shift: Forklift Op · Friday 6:00 AM · Bay 4, certified-only."},{icon:"chart",headline:"Determine course of action",detail:"The pool has 11 certified, available workers — a healthy field, no coverage risk. With supply that deep I won’t widen the net; I’ll offer it to the top 6 by proximity and reliability and let the first claim take it."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — offer the shift to the top 6 in ranked order, track claims, and assign the first that clears policy — and shared it for your approval."}],new_user_luis:[{icon:"clock",headline:"Review new candidate",detail:"I read the new Candidate record for Luis M. — no tasks on it yet."},{icon:"chart",headline:"Determine course of action",detail:"Nothing’s pre-fillable and it’s a standard new-candidate setup. So I’ll kick off onboarding: send a welcome, assign the 5 standard intake tasks, and follow up to completion."},{icon:"done",headline:"Share plan",detail:"I turned it into an onboarding plan — send Luis a welcome, assign the five standard intake tasks, and follow up to completion — and shared it for your go-ahead."}],missed_clockin_james:[{icon:"clock",headline:"Review missed clock-in",detail:"I saw James’s 9:00 AM start pass with no clock-in after the 5-minute grace window; his preferred channel is SMS."},{icon:"chart",headline:"Determine course of action",detail:"No time-off or release on file, so this is an unexplained gap — but it’s early enough that he may just be running late. Before calling it a no-show I’ll text him, update the shift with his reply, and flag the scheduling inbox if he doesn’t respond."},{icon:"done",headline:"Share plan",detail:"I built the plan — text James on SMS, update the shift from his reply, and flag the scheduling inbox if he doesn’t respond — and shared it for your approval."}],thread_cancel_wed:[{icon:"clock",headline:"Review inbound message",detail:"I read the worker’s “I can’t make tomorrow” reply and matched it to her assigned Wed 7:00 AM shift at Pier 9."},{icon:"chart",headline:"Determine course of action",detail:"It’s an informal cancellation with no release on file, so the shift still reads as covered when it isn’t. To keep the record honest I’ll log a release, acknowledge her, and start a replacement search now since it’s tomorrow."},{icon:"done",headline:"Share plan",detail:"I laid it out — log the release on her behalf, acknowledge she’s off, and open a replacement search for the Wed 7:00 AM shift — and shared it for your go-ahead."}],payroll_acme_invoice:[{icon:"clock",headline:"Review approved shift",detail:"I read the approved bill rate — $48/hr · 8 hrs — and matched it to Acme’s open, net-30 draft invoice."},{icon:"chart",headline:"Determine course of action",detail:"There’s no duplicate line yet, so it’s safe to add. Rather than open a new invoice, I’ll roll the approved shift onto Acme’s open invoice and recalculate the total so billing stays consolidated."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — add the approved shift to Acme’s open invoice, recalculate the total, and keep the draft ready for your end-of-week review — and shared it for your approval."}],job_event_staff:[{icon:"clock",headline:"Review new job",detail:"I read the job: Event Staff · 20 openings · Saturday 4:00 PM."},{icon:"chart",headline:"Determine course of action",detail:"The pool ranked 63 eligible workers, minus 9 double-booked on Saturday. With 20 slots and good supply, I’ll invite the top matches to claim first-come, track responses, and keep a standby list rather than hand-assign each opening."},{icon:"done",headline:"Share plan",detail:"I built the plan — invite the top matches to claim first-come, track responses against the 20 openings, and keep a standby list — and shared it for your go-ahead."}],missed_clockout_bianca:[{icon:"clock",headline:"Review open timesheet",detail:"I saw Bianca’s shift end with no clock-out, leaving her timesheet open; her last geofence ping puts her off-site around 6:05 PM."},{icon:"chart",headline:"Determine course of action",detail:"An open punch can’t run through payroll, so I’ve held it from the run. The ping suggests an end time, but I’d rather confirm than guess — I’ll text Bianca, correct the timesheet with her real end time, and flag payroll so the run isn’t delayed."},{icon:"done",headline:"Share plan",detail:"I laid out the plan — text Bianca to confirm her end time, correct the timesheet from her reply, and hold it from the run with a payroll flag until she responds — and shared it for your approval."}],schedule_published:[{icon:"clock",headline:"Review published schedule",detail:"I scanned next week’s schedule: 84 shifts across 31 workers."},{icon:"chart",headline:"Determine course of action",detail:"22 shifts are still unconfirmed, heaviest Monday and Tuesday — that’s the start-of-week risk. Confirming before the weekend gives workers time to flag conflicts, so I’ll send confirmations, chase the unconfirmed, and prep a Monday-readiness summary."},{icon:"done",headline:"Share plan",detail:"I turned it into a plan — message everyone to confirm next week’s shifts, chase the 22 unconfirmed, and prep a Monday-readiness summary — and shared it for your go-ahead."}],shift_release_jenny:[{icon:"clock",headline:"Review released shift",detail:"I read the released shift: Caregiver · Lakeside · Saturday 8:00 AM."},{icon:"chart",headline:"Determine course of action",detail:"It’s more than 12 hours out, so it’s a standard fill with no coverage risk. The pool has 5 qualified caregivers, so I’ll reach out in ranked order and assign the first qualified yes."},{icon:"done",headline:"Share plan",detail:"I laid it out — reach the 5 qualified caregivers in ranked order and assign the first qualified yes — and shared it for your approval."}],birthday_tomas:[{icon:"clock",headline:"Review birthday",detail:"I matched today to Tomas Greco’s birthday — he’s an active employee on in-app chat."},{icon:"chart",headline:"Determine course of action",detail:"He’s active on in-app chat, so a quick, warm send fits. I’ll send a happy-birthday note from the team."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — send Tomas a warm birthday note from the team over in-app chat — shared here for your go-ahead."}],cred_expired_nadia:[{icon:"clock",headline:"Review credential lapse",detail:"A blocking policy flagged that Nadia’s CPR certification lapsed overnight; CPR is required for her role."},{icon:"chart",headline:"Determine course of action",detail:"Three CPR-gated shifts next week are now at risk, but replacements are available for all three. So I’ll pull her from the non-compliant shifts, start a renewal, and line up backfills so coverage holds while she recertifies."},{icon:"done",headline:"Share plan",detail:"I built the plan — pull Nadia from the three CPR-gated shifts, start a renewal task, and line up backfills so coverage holds while she recertifies — and shared it for your approval."}],clockin_devon:[{icon:"clock",headline:"Review clock-in",detail:"Devon clocked in at Eastgate Warehouse; I checked it against the geofence and required fields."},{icon:"chart",headline:"Determine course of action",detail:"It’s a clean punch inside the geofence with every required field present, so it’s payroll-ready. Rather than let it sit before the run, I’ll approve it for payroll."},{icon:"done",headline:"Share plan",detail:"It’s a one-step plan — approve Devon’s clean punch for the payroll run — shared here for your go-ahead."}],phone_aisha:[{icon:"clock",headline:"Review profile update",detail:"Aisha updated her phone number — it’s the contact her notifications go to."},{icon:"chart",headline:"Determine course of action",detail:"Since it’s her notification contact, a wrong number means missed shift alerts. So I’ll send a quick verification ping and, once it checks out, update the contact on file so alerts keep reaching her."},{icon:"done",headline:"Share plan",detail:"I laid it out — send a verification ping to the new number and, once it checks out, set it as her notification contact — and shared it for your approval."}],fill_confirmed_maria:[{icon:"clock",headline:"Review autonomous fill",detail:"My fill for Maria’s open RN shift surfaced Sarah Quinn — available and within radius for Riverside Clinic."},{icon:"chart",headline:"Determine course of action",detail:"Sarah clears every policy and is available — a clean match. I’ll confirm the assignment and notify the scheduler so the roster’s accurate — pending your go-ahead, since it commits a worker to the shift."},{icon:"done",headline:"Share plan",detail:"I shaped the plan — confirm Sarah Quinn for Maria’s open shift and notify the scheduler so the roster’s accurate — ready for your go-ahead."}],weekly_fill_report:[{icon:"clock",headline:"Review scheduled report",detail:"The weekly fill-rate report ran — 22 of next week’s shifts are under target, heaviest on Monday and Tuesday."},{icon:"chart",headline:"Determine course of action",detail:"The gaps cluster early in the week, so they’re fixable if scheduling sees them now. I’ll publish the report and flag the at-risk shifts so the team can act before the week starts."},{icon:"done",headline:"Share plan",detail:"I built the plan — publish the fill-rate report, flag the 22 at-risk shifts, and send scheduling the Monday–Tuesday gaps — and shared it for your go-ahead."}],invoice_paid_4821:[{icon:"clock",headline:"Review paid invoice",detail:"A client marked invoice #4821 paid outside Teambridge; the open balance is still showing in the ledger."},{icon:"chart",headline:"Determine course of action",detail:"Paid out-of-band, so the record won’t close on its own. I’ll reconcile the amount against the open balance and, once it matches, close the invoice so billing stays accurate."},{icon:"done",headline:"Share plan",detail:"I laid it out — reconcile the payment against #4821’s open balance and close the invoice once it matches — and shared it for your go-ahead."}]},dN=[{icon:"alert",headline:"Read the event",detail:"Parsing what changed and which people, shifts, and policies it touches."},{icon:"clock",headline:"Gather related records",detail:"Pulling the schedules, availability, and history relevant to this case."},{icon:"chart",headline:"Weigh the options",detail:"Comparing the viable responses by cost, coverage, and disruption."},{icon:"done",headline:"Prepare recommendation",detail:"Shaping the strongest option into a plan you can approve in one step."}],l2=e=>cN[e]??dN,c2={shift_drop_maria:"Want me to reach out to the best replacements and get this shift filled?",timeoff_sofia:"Friday’s coverage is thin — want me to approve Thursday and hold Friday for your call?",document_kenji:"It’s a valid CPR cert expiring in 3 weeks — want me to file it and flag the renewal?",application_priya:"Want me to screen this lead and reach out if they qualify?",new_shift_forklift:"Want me to offer this shift to the best workers and get it claimed?",new_user_luis:"Want me to kick off onboarding for Luis with a welcome and intake tasks?",missed_clockin_james:"Want me to check in with James and update the shift?",thread_cancel_wed:"She’s canceling tomorrow informally — want me to log the release and start a fill?",payroll_acme_invoice:"Want me to roll this approved shift onto the client’s open invoice?",job_event_staff:"Want me to invite the best-matched workers to fill these 20 openings?",missed_clockout_bianca:"Want me to confirm Bianca’s end time and fix the timesheet before payroll?",schedule_published:"Want me to confirm next week’s schedule and chase down the 22 unconfirmed shifts?",shift_release_jenny:"Want me to reach out to the best replacements and get this shift filled?",birthday_tomas:"Want me to send Tomas a happy birthday message from the team?",weekly_fill_report:"22 shifts are under target next week — want me to publish the report and flag the gaps to scheduling?",clockin_devon:"Devon’s clock-in is clean and inside the geofence — want me to approve it for payroll?",phone_aisha:"She changed her notification number — want me to verify it and update her contact?",fill_confirmed_maria:"Sarah Quinn is a clean match — want me to confirm the assignment and notify the scheduler?",invoice_paid_4821:"The client paid #4821 outside Teambridge — want me to reconcile it and close the invoice?",cred_expired_nadia:"Her CPR lapsed — want me to start the renewal and line up backfills for the 3 shifts?"},Wf={shift_drop_maria:[{icon:"send",headline:"Message the top replacements",detail:"Pushed the full shift brief to the 20 best-matched RNs at once. This close to start time an urgent fill lands faster blasted in parallel than worked one name at a time, so I skipped the ranked one-by-one outreach.",bullets:["Matched on ICU credential, distance from Riverside, and reliability score","All 20 reached on their preferred channel (SMS or in-app)","No bonus incentive attached yet — the qualified pool is deep enough to fill without it"],progress:["Reaching out to Aisha Karim…","Reaching out to Renee Wallace…","Reaching out to Carl Jensen…","Reaching out to Tina Boyd…","Reached all 20 matched RNs"],avatars:["aisha_karim","renee_wallace","carl_jensen","tina_boyd","marcus_idris"],reached:20,tools:["engage"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["3 RNs replied in the first few minutes","Aisha Karim is the first clean yes — ICU-cleared, no overtime or double-booking conflict","Kept the other repliers warm as backup in case she falls through"],progress:["Waiting on replies…","3 RNs replied — checking fit…","Aisha Karim confirmed for the shift"],avatars:["aisha_karim"],avatarsOnSettle:!0,tools:["engage"]},{icon:"done",headline:"Fill shift",detail:"Assigned Aisha to the 2:00–10:00 PM ICU shift and pushed the change everywhere it needs to land so the record stays honest.",bullets:["Aisha Karim assigned · ICU credential re-checked at assignment","Calendar and her timesheet updated","Riverside’s scheduler notified the gap is closed"],progress:["Assigning the 2:00 PM ICU shift…","Aisha Karim assigned · scheduler notified"],avatars:["aisha_karim","priya_nair"],tools:["policy","update","notify-scheduler"]},{icon:"send",headline:"Notify the location manager",detail:"Sent the Riverside location manager a heads-up on the reassignment so the floor lead has the change without needing to chase it — informational only, no action on their side.",bullets:["Dana Brooks notified — Riverside location manager","Sent over push + email","Flagged as no action needed"],progress:["Notifying the location manager…","Dana Brooks notified"],avatars:["scheduler_dana"],tools:["notify"]}],timeoff_sofia:[{icon:"done",headline:"Approve Thursday",detail:"Thursday clears on its own — her PTO balance covers it and the one shift inside is already backfilled, so I approved it outright rather than routing it for review.",bullets:["PTO balance checked — enough to cover the day","Thursday’s single shift already has coverage","Approved without escalation"],progress:["Checking the PTO balance…","Thursday approved · coverage holds"]},{icon:"edit",headline:"Hold Friday for you",detail:"Friday’s coverage is thin enough that I won’t auto-approve it — only one backup is available, so I held it for your call rather than risk an uncovered shift.",bullets:["Friday coverage scanned — only 1 backup free","Approving would leave little margin","Held pending your decision, not denied"],progress:["Scanning Friday coverage…","1 backup available — held for review"]},{icon:"send",headline:"Notify Sofia",detail:"Closed the loop with Sofia so she knows Thursday is locked and Friday is still pending — no ambiguity about which days she can plan around.",bullets:["Told her Thursday is approved","Flagged Friday as pending your review","Sent on her preferred channel"],progress:["Messaging Sofia…","Sofia notified"],avatars:["timeoff_sofia"],tools:["engage"]}],document_kenji:[{icon:"edit",headline:"File as a CPR cert",detail:"Read the upload, recognized it as a CPR certification, and filed it on Kenji’s profile with the expiry captured — a loose document doesn’t protect anyone until it’s typed and dated.",bullets:["Classified as CPR certification","Expiry date parsed and saved","Attached to Kenji Tanaka’s profile"],progress:["Reading the document…","Filed as CPR cert · expiry saved"]},{icon:"done",headline:"Mark the credential verified",detail:"The cert is valid and current, so I marked the credential verified on his profile — his CPR-gated shifts now read as compliant rather than unconfirmed.",bullets:["Document checks out as valid","Credential status set to verified","CPR-gated shifts now clear compliance"],progress:["Updating his profile…","Credential verified"]},{icon:"alert",headline:"Flag the renewal",detail:"It expires in 3 weeks — I surfaced it now so the renewal can be planned with runway instead of scrambling once the cert lapses and his shifts go at-risk.",bullets:["Expiry window checked — 3 weeks out","Flagged ahead of the lapse, not after","Gives time to renew before shifts are blocked"],progress:["Checking the expiry window…","Renewal due in 3 weeks — flagged"]}],application_priya:[{icon:"edit",headline:"Mark Priya qualified",detail:"Her application clears the bar at a 92% match, so I set the status to qualified — strong enough to move forward rather than sit in the unscreened pile.",bullets:["Scored 92% against the CNA role","Credentials and availability check out","Application status set to qualified"],progress:["Reviewing her application…","Marked qualified · 92% match"]},{icon:"send",headline:"Send a warm intro",detail:"Reached out to confirm she’s still interested and asked the two screening questions up front, so the recruiter inherits a screened lead rather than a cold one.",bullets:["Confirmed her interest in the role","Asked both screening questions","Sent on her preferred channel"],progress:["Drafting the intro…","Intro sent · 2 screening questions asked"],avatars:["application_priya"],tools:["engage"]},{icon:"done",headline:"Move to the recruiter queue",detail:"Handed her to the recruiter queue so the moment she answers, a human can pick her up without re-doing the qualifying work.",bullets:["Placed in the recruiter queue","Match score and screening attached","Will advance once she replies"],progress:["Handing off to the recruiter…","In the recruiter queue"]}],new_shift_forklift:[{icon:"send",headline:"Offer to the top matches",detail:"Sent the Bay 4 shift to the best-matched certified operators in ranked order. Supply is deep and the shift is far enough out that a ranked offer-and-claim fills it cleanly without widening the net.",bullets:["Certified-only pool, ranked by proximity to Bay 4 and reliability","Offered to the top 12 of 11+ eligible, claim-first","No incentive added — first clean claim takes it"],progress:["Ranking the matches…","Offered to the top 12 in order"],avatars:["forklift_dane","forklift_omar","forklift_priya","forklift_luis","forklift_nina"],reached:12},{icon:"clock",headline:"Track claims",detail:"Held the offer open and checked each claim against policy as it came in, so the shift goes to the first one that actually clears rather than just the fastest tap.",bullets:["2 claims in within the first window","Checked forklift certification currency and no overlapping shift","First clean claim cleared all gates"],progress:["Watching for claims…","2 claims in — checking policy…","First clean claim found"]},{icon:"done",headline:"Claim shift",detail:"Assigned the first qualified claim and locked the rest of the offer so no one else can claim a filled slot.",bullets:["Operator assigned · certification verified","Calendar updated and the open offer closed","Remaining matches released"],progress:["Assigning the claim…","Shift claimed · calendar updated"]}],new_user_luis:[{icon:"send",headline:"Send Luis a welcome",detail:"Kicked off Luis’s onboarding with a welcome the moment his record landed — momentum is highest right after a new hire signs on, so I didn’t let it sit.",bullets:["Welcome sent to Luis Mendez","Onboarding flow started","Delivered on his preferred channel"],progress:["Drafting the welcome…","Welcome sent · onboarding started"],avatars:["new_user_luis"]},{icon:"edit",headline:"Assign intake tasks",detail:"Built out his intake list with the 5 required tasks so nothing’s left to memory — every step he owes is on the record from day one.",bullets:["5 required intake tasks assigned","Each set against Luis’s profile","Covers the full pre-start checklist"],progress:["Building the intake list…","5 intake tasks assigned"]},{icon:"done",headline:"Follow up",detail:"Set reminders and I’ll track each of the 5 tasks through to done, so a stalled item surfaces instead of quietly blocking his start.",bullets:["Reminders set on all 5 tasks","Tracking each to completion","Will flag any that stall"],progress:["Setting reminders…","Tracking all 5 tasks to done"]}],missed_clockin_james:[{icon:"send",headline:"Text James",detail:"Reached out on SMS — his preferred channel — before treating the gap as a no-show, since it’s early enough that he may just be running late.",bullets:["Sent to his preferred channel (SMS)","Asked if he’s on his way and an ETA","No time-off or release on file, so the shift still reads as his"],progress:["Texting James…","Message delivered"],avatars:["missed_clockin_james"],tools:["engage"]},{icon:"clock",headline:"Await his reply",detail:"Held the shift open and watched for his response, ready to reflect whatever he says straight onto the record — then check with you before marking it.",bullets:["James replied — about 15 minutes out","Reads as a late start, not an absence","Will mark the shift from his reply rather than guess"],progress:["Waiting on his reply…","James replied — 15 min out"],tools:["engage"]}],thread_cancel_wed:[{icon:"edit",headline:"Record the release",detail:"Logged the Wed 7:00 AM shift as released on her behalf so the record stops showing it as covered when it isn’t — an informal “I can’t make it” doesn’t move the schedule on its own.",bullets:["Release filed against her Pier 9 · Wed 7:00 AM shift","Reason noted as a worker-initiated cancellation","Shift now reads open, not covered"],progress:["Filing the release…","Wed shift released"],tools:["update"]},{icon:"send",headline:"Acknowledge her",detail:"Replied to close the loop so she knows the cancellation registered and she’s officially off — no ambiguity about whether she’s still expected.",bullets:["Confirmed she’s released from the Wed shift","Thanked her for the heads-up","Left the channel open for a reschedule"],progress:["Messaging her…","Confirmed she’s off the shift"],avatars:["thread_cancel_wed"],tools:["engage"]},{icon:"send",headline:"Message the top replacements",detail:"Sent the Wed 7:00 AM brief to the 8 qualified, available workers at once — the shift is tomorrow, so a parallel blast beats working one name at a time.",bullets:["Matched on Pier 9 site clearance, availability, and rest window","All 8 reached on their preferred channel (SMS or in-app)","No incentive attached — the qualified pool covers it"],progress:["Reaching out to Theo Park…","Reaching out to Gina Holt…","Reaching out to Renata Cruz…","Reached all 8 qualified workers"],avatars:["theo_park","gina_holt","renata_cruz","marcus_idris","tina_boyd"],reached:8,tools:["policy","engage-offer"]},{icon:"clock",headline:"Collect confirmations",detail:"Watched the replies land and ran each one against the shift’s policy gates before locking anyone in, so the first yes I take is one that actually clears.",bullets:["2 workers replied in the first few minutes","Theo Park is the first clean yes — site-cleared, no overlap or rest-window conflict","Kept the other repliers warm as backup in case he falls through"],progress:["Waiting on replies…","2 replies in — checking fit…","Theo Park confirmed for Wed"],avatars:["theo_park"],avatarsOnSettle:!0,tools:["engage-offer"]},{icon:"done",headline:"Fill the Wed shift",detail:"Assigned Theo to the Wed 7:00 AM shift at Pier 9 and updated the record so the schedule reads covered again.",bullets:["Theo Park assigned · site clearance re-checked at assignment","Calendar and his timesheet updated","Coverage restored for Wed 7:00 AM"],progress:["Assigning the Wed shift…","Theo Park assigned · coverage restored"],avatars:["theo_park"],tools:["policy","update-close"]}],payroll_acme_invoice:[{icon:"edit",headline:"Add the line item",detail:"Posted the approved shift to Acme’s open invoice as a new line — billable work belongs on the invoice the moment it’s approved, not at month-end when details get fuzzy.",bullets:["Only the approved shift posted","Added to Acme’s current open invoice","Hours and rate carried from the timesheet"],progress:["Posting the shift…","Line item added to Acme’s invoice"]},{icon:"rate",headline:"Recalculate the total",detail:"Rolled the new line into the invoice total and re-applied Acme’s net terms, so the draft reflects what they actually owe rather than a stale figure.",bullets:["Invoice total recomputed with the new line","Net payment terms re-applied","Due date adjusted accordingly"],progress:["Recalculating…","Total and net terms updated"]},{icon:"done",headline:"Save draft",detail:"Saved it as a draft rather than sending — kept ready for your end-of-week review so you sign off before it reaches the client.",bullets:["Held as a draft, not sent","Queued for your end-of-week review","Nothing leaves until you approve"],progress:["Saving the draft…","Draft ready for review"]}],job_event_staff:[{icon:"send",headline:"Invite the top 40 matches",detail:"Sent slot invitations to the 40 best-matched workers in ranked order — inviting double the 20 openings gives enough headroom to fill cleanly even with the usual drop-off.",bullets:["Ranked by event-skill match and availability","Top 40 invited for the 20 openings","Claim-first — best fits hear about it first"],progress:["Ranking the matches…","Invited the top 40 in order"],avatars:["event_jamal","event_sara","event_dmitri","event_lena","event_kofi"],reached:40},{icon:"clock",headline:"Track responses",detail:"Held the invites open and filled the 20 openings first-come as acceptances landed, so the slots go to whoever commits rather than waiting on a full ranked pass.",bullets:["20 openings filled first-come","Watched acceptances roll in past the halfway mark","Closed each slot as it was claimed"],progress:["Watching responses…","14 of 20 slots filled…","All 20 openings filled"]},{icon:"done",headline:"Keep standby list",detail:"Kept the workers I didn’t place on a standby list and I’ll ping you at 80% filled, so there’s instant backup for the inevitable last-minute drop.",bullets:["Unplaced invitees parked on standby","Alert set to fire at 80% filled","Ready to backfill cancellations fast"],progress:["Building the standby list…","Standby list kept"]}],missed_clockout_bianca:[{icon:"send",headline:"Text Bianca",detail:"She left without clocking out, so I texted her to confirm her actual end time rather than guess — a wrong end time on the timesheet costs either her hours or the client’s money.",bullets:["No clock-out on the open timesheet","Asked her to confirm her real end time","Geofence shows her off-site around 6:05 PM"],progress:["Texting Bianca…","Asked her to confirm her end time"],avatars:["missed_clockout_bianca"]},{icon:"edit",headline:"Update the timesheet",detail:"Staged the timesheet so the moment she confirms, I apply her real end time and close the entry — no manual re-keying, no delay into the payroll run.",bullets:["Timesheet held open, ready to update","Will write her confirmed end time on reply","Closes the entry once corrected"],progress:["Standing by for her reply…","Timesheet ready to update"]},{icon:"alert",headline:"Hold for payroll",detail:"Kept the entry out of payroll until it’s right — if she doesn’t reply before the cutoff I’ll flag payroll rather than let an unverified end time pay out.",bullets:["Held back from the current payroll run","Watching the cutoff time","Will escalate to payroll if no reply lands"],progress:["Watching the payroll cutoff…","Holding — will flag if no reply"]}],schedule_published:[{icon:"send",headline:"Message workers to confirm",detail:"The schedule went live, so I asked every worker to confirm their shifts — an unconfirmed shift is a no-show risk I’d rather catch this week than Monday morning.",bullets:["Confirmation request sent to the whole team","Each message lists that worker’s shifts","Sent on each worker’s preferred channel"],progress:["Messaging the team…","Confirmation request sent to all"],avatars:["sched_amy","sched_ben","sched_chloe","sched_dev","sched_eli"]},{icon:"clock",headline:"Chase the unconfirmed",detail:"Tracked the replies and sent reminders to the 22 still outstanding, so the silent ones get a nudge before they quietly become Monday’s gaps.",bullets:["22 workers still unconfirmed","Reminder sent to each holdout","Confirmed ones left alone"],progress:["Tracking confirmations…","Reminders sent to the 22 outstanding"],tools:["engage"]},{icon:"done",headline:"Queue readiness summary",detail:"Queued a Monday-readiness summary for end of day so you get one clear picture of who’s confirmed and where the gaps are before the week starts.",bullets:["Summary lands by end of day","Rolls up confirmed vs. outstanding","Highlights any uncovered shifts"],progress:["Queuing the summary…","Readiness summary lands by EOD"]}],shift_release_jenny:[{icon:"send",headline:"Message the best matches",detail:"Sent the released shift to the qualified caregivers in ranked order, so the strongest fits hear about it first rather than blasting the whole pool.",bullets:["Ranked by credential match, proximity, and reliability","Reached the top qualified caregivers on their preferred channel","Held the wider pool in reserve"],progress:["Drafting the offer…","Reached the qualified caregivers"],avatars:["renee_wallace","carl_jensen","tina_boyd","jenny_park"]},{icon:"clock",headline:"Collect confirmations",detail:"Tracked replies and checked each against policy, taking the first qualified yes rather than the first reply.",bullets:["Renee Wallace is the first clean yes","Credential and availability re-checked before locking in","Other repliers kept as backup"],progress:["Waiting on replies…","Renee Wallace confirmed"]},{icon:"done",headline:"Fill shift",detail:"Assigned Renee and pushed the change to the schedule so the released shift no longer reads as a gap.",bullets:["Renee Wallace assigned · credential verified","Schedule and timesheet updated","Open offer closed and remaining matches released"],progress:["Assigning the shift…","Renee Wallace assigned · schedule updated"]}],birthday_tomas:[{icon:"send",headline:"Send the birthday note",detail:"Sent Tomas a warm birthday note from the team over in-app chat — small recognition like this is cheap to do and lands better same-day than a belated one.",bullets:["Personalized note from the team","Delivered via in-app chat","Sent on the day, not after"],progress:["Writing the note…","Birthday note sent"],avatars:["birthday_tomas"]}],weekly_fill_report:[{icon:"send",headline:"Publish the report",detail:"Compiled next week’s fill-rate numbers and posted the report to the Home dashboard, so the whole team sees the same coverage picture in one place.",bullets:["Fill rate computed across next week","Published to the Home dashboard","Broken down by day and location"],progress:["Compiling the numbers…","Report published to Home"]},{icon:"alert",headline:"Flag the at-risk shifts",detail:"Pulled out the 22 shifts sitting under target and surfaced them to scheduling — a fill-rate average hides the specific shifts that’ll actually go uncovered.",bullets:["22 shifts below the fill target","Each flagged to the scheduling team","Sorted worst-coverage first"],progress:["Scanning the week…","22 under-target shifts flagged"]},{icon:"done",headline:"Notify scheduling",detail:"Sent scheduling the Mon–Tue gaps specifically — those land first, so acting on them now buys the most lead time before the week opens.",bullets:["Mon–Tue gaps sent to scheduling","Prioritized for earliest impact","Time to fill before the week starts"],progress:["Notifying scheduling…","Mon–Tue gaps sent"]}],clockin_devon:[{icon:"edit",headline:"Confirm the punch",detail:"Re-ran Devon’s clock-in against the geofence and the required fields and it checks out clean — verifying before payroll beats clawing back a bad punch after.",bullets:["Punch location inside the geofence","All required fields present","No edits or overrides on the entry"],progress:["Re-checking the geofence…","Punch confirmed · fields clean"]},{icon:"done",headline:"Approve for payroll",detail:"With the punch clean, I released it straight into the payroll run — no reason to hold a verified clock-in for manual review.",bullets:["Clean entry approved automatically","Released into the current payroll run","No manual review needed"],progress:["Releasing to payroll…","Approved for the payroll run"]}],phone_aisha:[{icon:"send",headline:"Send a verification ping",detail:"Texted the new number first to prove it actually reaches her — swapping her contact to an unverified number could black out every shift alert she gets.",bullets:["Test ping sent to the new number","Confirms it’s reachable before the swap","Old number left active until verified"],progress:["Texting the new number…","Ping delivered"],avatars:["phone_aisha"]},{icon:"edit",headline:"Update the contact",detail:"Her reply confirmed the line, so I set the verified number as her notification contact — only swapping once I knew it lands.",bullets:["Reply confirmed the number works","Set as her notification contact","Old number retired"],progress:["Verifying the reply…","Contact updated"]},{icon:"done",headline:"Confirm alerts",detail:"Re-routed her shift notifications to the new number and confirmed they land, so she won’t miss an offer or an urgent fill.",bullets:["Shift alerts now route to the new number","Delivery confirmed end-to-end","No gap in coverage during the switch"],progress:["Re-routing alerts…","Alerts now reach the new number"]}],fill_confirmed_maria:[{icon:"edit",headline:"Confirm Sarah Quinn",detail:"Locked Sarah into Maria’s open RN shift — she was the strongest match and a clean fit, so I assigned rather than re-opening the search.",bullets:["Re-checked RN credential and ICU clearance at assignment","No overtime or double-booking conflict","Highest-ranked of the available matches"],progress:["Assigning the shift…","Sarah Quinn confirmed"],avatars:["sarah_quinn"]},{icon:"clock",headline:"Update the roster",detail:"Posted the assignment to the live schedule so every downstream view reflects the fill, not the gap.",bullets:["Calendar and roster updated","Sarah’s timesheet opened for the shift","The original open slot closed"],progress:["Posting the change…","Roster updated"]},{icon:"done",headline:"Notify scheduler",detail:"Closed the loop with the scheduler so they don’t double-fill or chase coverage that’s already handled.",bullets:["Scheduler notified the shift is covered","Confirmation sent to Sarah","Case marked resolved"],progress:["Notifying the scheduler…","Coverage confirmed"],tools:["engage"]}],invoice_paid_4821:[{icon:"rate",headline:"Reconcile the payment",detail:"The client paid #4821 outside Teambridge, so I matched the amount against its open balance to confirm it’s the same invoice before touching anything.",bullets:["Payment matched to invoice #4821","Amount ties out to the open balance","Confirmed as an off-platform payment"],progress:["Matching the payment…","Reconciled against #4821"]},{icon:"edit",headline:"Close the invoice",detail:"With the balance fully covered, I marked #4821 paid-in-full — leaving a settled invoice open just invites a duplicate chase.",bullets:["Balance cleared to zero","Status set to paid-in-full","Payment date recorded"],progress:["Clearing the balance…","Invoice marked paid-in-full"]},{icon:"done",headline:"Update ledger",detail:"Posted the payment to the ledger so billing reflects reality and the client doesn’t show an outstanding balance they’ve already settled.",bullets:["Payment posted to the ledger","Client balance now reads settled","No open AR remaining on #4821"],progress:["Updating the ledger…","Ledger updated"]}],cred_expired_nadia:[{icon:"alert",headline:"Flag the 3 shifts at-risk",detail:"Scanned Nadia’s upcoming schedule and flagged every shift her lapsed CPR cert now blocks her from legally working, so nothing slips through staffed-but-non-compliant.",bullets:["3 of her upcoming shifts are CPR-gated","Each marked at-risk pending renewal","Compliance can’t clear them until the cert is current"],progress:["Scanning her schedule…","3 CPR-gated shifts flagged"],tools:["update"]},{icon:"edit",headline:"Assign a renewal task",detail:"Created a renewal task on Nadia’s profile with the upload step, so the path back to compliant is explicit and tracked rather than left to memory.",bullets:["Task assigned to Nadia with a CPR-cert upload step","Due before her next gated shift","Auto-clears the flags once a valid cert is verified"],progress:["Creating the task…","Renewal task assigned to Nadia"],tools:["task","engage-offer"]},{icon:"done",headline:"Line up backfills",detail:"Lined up qualified backfills for the shifts she can’t cover, so the renewal can take its time without leaving the shifts exposed.",bullets:["Offered the 3 gated shifts to CPR-current workers","Ranked by proximity and reliability","Will assign on confirmation, or release if Nadia renews first"],progress:["Finding backfills…","Backfills lined up"],avatars:["carl_jensen","tina_boyd","marcus_idris"],tools:["policy","engage"]}]},lp={missed_clockin_james:{prompt:"James says he’s 15 minutes out. Update the shift as confirmed-late?",actions:["Review","Confirm late"],working:[{icon:"edit",headline:"Updating the shift",detail:"James says he’s about 15 minutes out, so I marked the shift confirmed-late from his own word rather than logging a no-show that isn’t one.",bullets:["Status set to confirmed-late","Based on his SMS, ~15 min out","No-show flag cleared"],progress:["Updating the shift…","Marked confirmed-late"],tools:["update"]},{icon:"send",headline:"Notifying the site",detail:"Gave the location a heads-up to expect him shortly, so they’re not scrambling to backfill a shift that’s about to be covered.",bullets:["Site told to expect him ~15 min late","Heads off an unnecessary backfill","Sent to the site’s point of contact"],progress:["Messaging the site…","Site notified"],tools:["engage"]},{icon:"done",headline:"Update shift",detail:"Closed it out with no replacement search — he’s on his way, so coverage holds and there’s nothing left to chase.",bullets:["Coverage holds — no replacement needed","No fill opened","Case resolved"],progress:["Closing it out…","Coverage holds — no replacement needed"],tools:["update-close"]}],record:{eyebrow:"Worker",title:"James Okoro",meta:["On his way","~15 min late","Replied via SMS"],avatarSeed:"missed_clockin_james"}},application_priya:{prompt:"Priya answered the screening questions and qualifies. Move her to the recruiter’s queue?",actions:["Review","Move to queue"],working:[{icon:"edit",headline:"Moving Priya to the queue",detail:"She answered the screening questions and qualifies, so I moved her into the recruiter queue as Qualified — a screened lead shouldn’t wait in the general pile.",bullets:["Screening answers received and passed","Status set to Qualified","Placed in the recruiter queue"],progress:["Handing her off…","Moved to the recruiter queue"]},{icon:"send",headline:"Notifying the recruiter",detail:"Handed the recruiter her answers and the 92% match in one note, so they pick up a ready-to-act lead instead of re-screening from scratch.",bullets:["Screening answers shared","92% match score attached","Recruiter pinged directly"],progress:["Sharing her answers…","Recruiter notified · 92% match"]},{icon:"done",headline:"In the recruiter’s queue",detail:"She’s queued and fully briefed, so the recruiter can take the next step the moment they’re free — nothing left blocking her.",bullets:["Sitting in the recruiter queue","Full context attached","Ready for the next step"],progress:["Finalizing…","Ready for the next step"]}],record:{eyebrow:"CNA",title:"Priya Raman",meta:["92% match","Screened","Night Shift"],avatarSeed:"application_priya"}}},uN={shift_drop_maria:[{eyebrow:"RN",title:"Renee Wallace",meta:["94% match","Available now","CPR current"],avatarSeed:"renee_wallace"},{eyebrow:"RN",title:"Carl Jensen",meta:["90% match","Available now","Within radius"],avatarSeed:"carl_jensen"},{eyebrow:"RN",title:"Tina Boyd",meta:["87% match","Available now","No OT conflict"],avatarSeed:"tina_boyd"}],timeoff_sofia:{eyebrow:"PTO request",title:"Sofia Marin",meta:["Thu–Fri","2 shifts inside","Balance OK"],avatarSeed:"timeoff_sofia"},document_kenji:{eyebrow:"Document",title:"CPR Certification",meta:["Kenji Tanaka","Expires in 3 weeks","Valid"],avatarSeed:"document_kenji"},application_priya:{eyebrow:"CNA · New Lead",title:"Priya Raman",meta:["92% match","Night Shift","Downtown"],avatarSeed:"application_priya"},new_user_luis:{eyebrow:"Candidate",title:"Luis Mendez",meta:["New record","5 intake tasks","No tasks yet"],avatarSeed:"new_user_luis"},missed_clockin_james:{eyebrow:"Worker",title:"James Okoro",meta:["9:00 AM shift","No clock-in","Grace elapsed"],avatarSeed:"missed_clockin_james"},thread_cancel_wed:{eyebrow:"Open Wed shift",title:"Wed · 7:00 AM",meta:["Pier 9","Informal cancel","No release filed"],avatarSeed:"thread_cancel_wed"},missed_clockout_bianca:{eyebrow:"Open timesheet",title:"Bianca Rossi",meta:["No clock-out","Off-site ~6:05 PM","Held from payroll"],avatarSeed:"missed_clockout_bianca"},cred_expired_nadia:{eyebrow:"Policy",title:"Nadia Haddad",meta:["CPR expired","3 shifts at risk","Backfills ready"],avatarSeed:"cred_expired_nadia"},shift_release_jenny:[{eyebrow:"Caregiver",title:"Renee Wallace",meta:["94% match","Available now","Within radius"],avatarSeed:"renee_wallace"},{eyebrow:"Caregiver",title:"Carl Jensen",meta:["90% match","Available now","No OT conflict"],avatarSeed:"carl_jensen"},{eyebrow:"Caregiver",title:"Tina Boyd",meta:["87% match","Available now","CPR current"],avatarSeed:"tina_boyd"}],fill_confirmed_maria:{eyebrow:"RN",title:"Sarah Quinn",meta:["Clears policy","Available now","Within radius"],avatarSeed:"sarah_quinn"}},cp={shift_drop_maria:[{label:"Message the best-matched replacements",detail:"Reach out to the top qualified RNs (max 20 — based on 24 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and assign shift",detail:"Communicate the need with staff, and assign them to the shift if they agree."},{label:"Notify the location manager",detail:"Notify the location manager of the last-minute scheduling change.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],timeoff_sofia:[{label:"Confirm the PTO balance covers it",detail:"Check her balance against the two requested days off."},{label:"Auto-approve the Thursday portion",detail:"Thursday stays fully covered, so approve it outright."},{label:"Flag Friday for you",detail:"Friday’s coverage is thin — hold it for your call.",person:{name:"You",avatarSeed:"operator"}}],document_kenji:[{label:"Set the type to CPR Cert and save the expiry",detail:"File the upload as a CPR certification with its expiry date."},{label:"Mark the credential verified",detail:"Update Kenji’s profile so the record reads as valid."},{label:"Flag that it expires soon",detail:"Set a renewal reminder ahead of the 3-week expiry."}],application_priya:[{label:"Update the status to Qualified",detail:"Move the application forward off the strong 92% match."},{label:"Send a warm intro message",detail:"Reach out to confirm her interest in the role."},{label:"Ask the two screening questions",detail:"Cover the basics before the recruiter handoff."},{label:"Move to the recruiter’s queue on reply",detail:"Hand off to the recruiter once she responds."}],new_shift_forklift:[{label:"Offer to the top matches in ranked order",detail:"Send the shift to the 6 best certified workers by proximity and reliability.",showsCandidates:!0},{label:"Assign the first claim that clears policy",detail:"Take the first claim that passes the certification check."},{label:"Confirm and update the calendar",detail:"Lock in the assignment and reflect it on the schedule."}],new_user_luis:[{label:"Send Luis a welcome message",detail:"Kick off onboarding for the new candidate.",person:{name:"Luis Mendez",avatarSeed:"new_user_luis"}},{label:"Assign the required intake tasks",detail:"Add the 5 standard intake tasks to his record."},{label:"Follow up until everything’s completed",detail:"Track each task through to completion."}],missed_clockin_james:[{label:"Text James to ask if he’s on his way",detail:"Reach him on SMS, his preferred channel, before calling it a no-show.",person:{name:"James Okoro",avatarSeed:"missed_clockin_james"}},{label:"Update the shift’s confirmation status",detail:"Reflect whatever he replies on the shift record."},{label:"Flag the scheduling inbox if he’s a no-show",detail:"Escalate to scheduling if he doesn’t respond."}],thread_cancel_wed:[{label:"Record the shift as released on her behalf",detail:"Log the informal cancellation as a formal release."},{label:"Reply to acknowledge she’s off it",detail:"Confirm to her that she’s off the Wed shift."},{label:"Message the best-matched replacements",detail:"Reach out to the top qualified workers (max 8 — based on 16 active scheduling policies) with the shift details.",showsCandidates:!0},{label:"Confirm and fill the Wed shift",detail:"Assign the first clean confirmation and update the schedule."}],payroll_acme_invoice:[{label:"Add the shift as a line item",detail:"Post the approved $48/hr · 8 hr shift to Acme’s open invoice."},{label:"Recalculate the invoice total and terms",detail:"Update the total and keep the net-30 terms."},{label:"Keep the draft ready for your review",detail:"Hold it for your end-of-week review."}],job_event_staff:[{label:"Invite the top 40 matches",detail:"Send slot invitations to the best-ranked eligible workers.",showsCandidates:!0},{label:"Fill the 20 openings first-come",detail:"Assign slots as claims arrive until all 20 are filled."},{label:"Keep a standby list and notify you at 80%",detail:"Hold backups in reserve and ping you once 16 slots fill."}],missed_clockout_bianca:[{label:"Text Bianca to confirm her actual end time",detail:"Verify the end time rather than guess from the geofence ping.",person:{name:"Bianca Rossi",avatarSeed:"missed_clockout_bianca"}},{label:"Update the timesheet from her reply",detail:"Correct the open punch with her real end time."},{label:"Flag payroll if she doesn’t respond",detail:"Escalate so the run isn’t delayed."}],schedule_published:[{label:"Message all workers to confirm",detail:"Send confirmations across next week’s 84 shifts before the weekend."},{label:"Chase the unconfirmed with a reminder",detail:"Follow up on the 22 still-unconfirmed shifts."},{label:"Give you a Monday-readiness summary",detail:"Report where start-of-week coverage stands."}],shift_release_jenny:[{label:"Message the best-matched replacements",detail:"Reach out to the 5 qualified caregivers in ranked order.",showsCandidates:!0},{label:"Assign the first qualified yes",detail:"Take the first replacement who clears policy."},{label:"Confirm the fill and update the schedule",detail:"Lock in the assignment and update the roster."}],weekly_fill_report:[{label:"Publish the report to the Home dashboard",detail:"Make the weekly fill-rate report visible to the team."},{label:"Flag the 22 under-target shifts",detail:"Highlight the gaps, heaviest on Monday and Tuesday."},{label:"Notify scheduling of the Mon–Tue gaps",detail:"Hand the at-risk shifts to scheduling to act on.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],clockin_devon:[{label:"Re-check the geofence and required fields",detail:"Confirm the punch is inside the geofence with all fields present."},{label:"Approve the clock-in for payroll",detail:"Clear it for the upcoming payroll run."}],phone_aisha:[{label:"Send a verification ping to the new number",detail:"Confirm the updated number actually reaches her.",person:{name:"Aisha Bello",avatarSeed:"phone_aisha"}},{label:"Update her notification contact on reply",detail:"Save the new number once it checks out."},{label:"Confirm shift alerts route to it",detail:"Make sure shift alerts keep reaching her."}],fill_confirmed_maria:[{label:"Confirm Sarah Quinn for the shift",detail:"Commit Sarah to the open RN shift at Riverside.",person:{name:"Sarah Quinn",avatarSeed:"sarah_quinn"}},{label:"Update the roster",detail:"Reflect the coverage on the schedule."},{label:"Notify the scheduler",detail:"Let the scheduler know the shift is covered.",person:{name:"Dana Cole",avatarSeed:"scheduler_dana"}}],invoice_paid_4821:[{label:"Reconcile the payment against the open balance",detail:"Match the out-of-band payment to invoice #4821."},{label:"Close the invoice once it clears",detail:"Mark it paid so the record is accurate."},{label:"Update the ledger",detail:"Clear the open balance from the books."}],cred_expired_nadia:[{label:"Flag her 3 upcoming shifts as at-risk",detail:"Mark the CPR-gated shifts her lapse now blocks."},{label:"Assign Nadia a renewal task with the upload",detail:"Start her recertification with a document upload.",person:{name:"Nadia Haddad",avatarSeed:"cred_expired_nadia"}},{label:"Offer to backfill the shifts she can’t work",detail:"Line up available replacements so coverage holds."}]},pN={shift_drop_maria:[],timeoff_sofia:[],document_kenji:[],application_priya:[],new_shift_forklift:[],new_user_luis:[],missed_clockin_james:[],thread_cancel_wed:[],payroll_acme_invoice:[],job_event_staff:[],missed_clockout_bianca:[],schedule_published:[],shift_release_jenny:[],fill_confirmed_maria:[],cred_expired_nadia:[],birthday_tomas:[],weekly_fill_report:[],clockin_devon:[],phone_aisha:[],invoice_paid_4821:[]},hN={detected:"clock",assessment:"alert",recommendation:"send",approval:"edit",execution:"edit",resolution:"done",monitoring:"clock",workflow:"done"},Vd={detected:e=>e.event,assessment:e=>e.assessment,recommendation:e=>e.recommendation,approval:e=>e.recommendation,execution:e=>e.recommendation,resolution:e=>e.outcome??e.recommendation,monitoring:e=>e.assessment,workflow:e=>e.workflowOpportunity??e.recommendation};function d2(e){const o=i=>i.trim().replace(/[.\s]+$/,"").toLowerCase();return pN[e.id]??e.timeline.map(i=>{var d;const s=((d=Vd[i.state])==null?void 0:d.call(Vd,e))??e.assessment,l=s!=null&&o(s)===o(i.headline);return{icon:hN[i.state]??"clock",headline:i.headline,blocks:s&&!l?[{text:s}]:void 0}})}const At=(e,o,i)=>({name:e,match:o,distance:i}),Ue=(e,o,i,s,l,d)=>({seed:e,name:o,preview:i,status:s,tone:l,...d?{conversation:d}:{}}),Hf=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active RN license & ICU certification","Max consecutive shifts","Union seniority ordering"],fN=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Active caregiver credential & CPR","Max consecutive shifts","Background check current"],mN=["Overtime limit (≤ 40h / week)","Rest window (≥ 8h between shifts)","Forklift certification (current)","Max consecutive shifts","Site safety clearance"],gN=["Availability for the event window","No overlapping shift","Event-skill match","Max consecutive shifts","Right-to-work verified"],u2="An ICU RN shift just opened at Riverside Clinic today at 2:00 PM. Reply YES to claim it — first to confirm takes the shift.",yo=e=>({from:"ultron",text:u2,time:e}),vN={shift_drop_maria:{policy:{description:"Evaluated scheduling policies, returned eligible RNs",policies:Hf,policiesTotal:24,eligible:{total:20,unit:"eligible RNs",moreNoun:"eligible candidates",items:[At("Jordan Pierce","4.9 match","3.2 mi"),At("Aisha Karim","4.7 match","5.1 mi"),At("Marcus Lewis","4.6 match","6.8 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to 20 matched RNs",message:u2,total:20,threads:[Ue("aisha_karim","Aisha Karim","“Yes — I can take the 2pm.”","Interested","positive",[yo("1:52 PM"),{from:"them",text:"Yes — I can take the 2pm.",time:"1:54 PM"},{from:"ultron",text:"You’re confirmed for the 2:00 PM ICU shift at Riverside. Check in at the 3rd-floor ICU desk for handoff.",time:"1:54 PM"},{from:"them",text:"On my way. Thanks!",time:"1:55 PM"}]),Ue("priya_nguyen","Priya Nguyen","“Count me in — confirming now.”","Interested","positive",[yo("1:52 PM"),{from:"them",text:"Count me in — confirming now.",time:"1:57 PM"},{from:"ultron",text:"Great — you’re first backup if the 2pm falls through. I’ll ping you the moment another opens.",time:"1:57 PM"},{from:"them",text:"Sounds good.",time:"1:58 PM"}]),Ue("jordan_pierce","Jordan Pierce","“Is this the full ICU wing?”","Chatting","chatting",[yo("1:52 PM"),{from:"them",text:"Is this the full ICU wing or step-down?",time:"1:56 PM"},{from:"ultron",text:"Full ICU wing — 12-hour shift, 2:00 PM start.",time:"1:56 PM"},{from:"them",text:"Checking my childcare, give me a few.",time:"1:59 PM"}]),Ue("marcus_lewis","Marcus Lewis","“Any flex on the start? Could do 2:30.”","Chatting","chatting",[yo("1:52 PM"),{from:"them",text:"Any flex on the start? Could do 2:30.",time:"1:55 PM"},{from:"ultron",text:"Start is fixed at 2:00 for handoff, but I can flag you first for the next opening.",time:"1:55 PM"},{from:"them",text:"Ok — let me see if I can make 2.",time:"1:58 PM"}]),Ue("lena_reyes","Lena Reyes","“What’s the rate on this one?”","Chatting","chatting",[yo("1:52 PM"),{from:"them",text:"What’s the rate on this one?",time:"1:53 PM"},{from:"ultron",text:"$68/hr with the ICU differential included.",time:"1:53 PM"},{from:"them",text:"Tempting — give me an hour to sort a ride.",time:"1:57 PM"}]),Ue("omar_mori","Omar Mori","“Is parking validated?”","Chatting","chatting",[yo("1:52 PM"),{from:"them",text:"Is parking validated at Riverside?",time:"1:54 PM"},{from:"ultron",text:"Yes — validated parking in the north garage.",time:"1:54 PM"},{from:"them",text:"Good to know. Still deciding.",time:"1:56 PM"}]),Ue("devon_diaz","Devon Diaz","“Might be a few min late.”","Chatting","chatting",[yo("1:52 PM"),{from:"them",text:"I’m on shift til 1 — might be a few min late.",time:"1:55 PM"},{from:"ultron",text:"A few minutes is fine if you make handoff by 2:15. Want me to hold it?",time:"1:55 PM"},{from:"them",text:"Yeah, hold it — I’ll confirm by 1:30.",time:"1:59 PM"}])]},notify:{description:"Notified the Riverside location manager",seed:"scheduler_dana",name:"Dana Brooks",role:"Location manager",channel:"push + email",message:"Heads up — the 2:00pm ICU shift was reassigned to Aisha Karim after Maria Ellis dropped it. No action needed."},notifyScheduler:{description:"Notified the Riverside scheduler the gap is closed",seed:"priya_nair",name:"Priya Nair",role:"Scheduler",channel:"push + email",message:"The 2:00pm ICU shift gap is closed — Aisha Karim assigned, roster and timesheet updated. No action needed."},update:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Shift",value:"2:00–10:00pm · ICU"},{label:"Date",value:"Today"},{label:"Location",value:"Riverside Clinic"},{label:"Assigned",value:"Aisha Karim, RN",emphasis:"change",previousValue:"Maria Ellis, RN"}]}},shift_release_jenny:{policy:{description:"Evaluated scheduling policies, returned eligible caregivers",policies:fN,policiesTotal:22,eligible:{total:5,unit:"eligible caregivers",moreNoun:"eligible caregivers",items:[At("Renee Wallace","4.9 match","2.4 mi"),At("Carl Jensen","4.6 match","4.1 mi"),At("Tina Boyd","4.4 match","5.5 mi")]}},engage:{name:"Engage: SMS",description:"Sent the shift offer to the qualified caregivers",message:"A caregiver shift at Lakeside just opened up. Reply YES to pick it up.",total:5,threads:[Ue("renee_wallace","Renee Wallace","“I can cover Lakeside.”","Interested","positive"),Ue("carl_jensen","Carl Jensen","Delivered · no reply yet","Delivered","muted"),Ue("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted")]}},new_shift_forklift:{policy:{description:"Evaluated scheduling policies, returned eligible operators",policies:mN,policiesTotal:18,eligible:{total:11,unit:"eligible operators",moreNoun:"eligible operators",items:[At("Dane Mercer","4.8 match","2.1 mi"),At("Omar Reyes","4.6 match","3.7 mi"),At("Nina Patel","4.5 match","4.4 mi")]}},engage:{name:"Engage: SMS",description:"Offered the shift to the top 12 operators",message:"A forklift operator shift is open at Bay 4. Reply YES to claim it.",total:12,threads:[Ue("forklift_dane","Dane Mercer","“Claiming Bay 4.”","Interested","positive"),Ue("forklift_omar","Omar Reyes","Delivered · no reply yet","Delivered","muted"),Ue("forklift_nina","Nina Patel","Delivered · no reply yet","Delivered","muted")]}},job_event_staff:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:gN,policiesTotal:16,eligible:{total:54,unit:"eligible workers",moreNoun:"eligible workers",items:[At("Jamal Carter","4.7 match","1.8 mi"),At("Sara Lindqvist","4.6 match","2.9 mi"),At("Dmitri Volkov","4.5 match","3.6 mi")]}},engage:{name:"Engage: SMS",description:"Invited the top 40 matches to claim a slot",message:"We’re staffing an upcoming event. Reply YES to claim a slot.",total:40,threads:[Ue("event_jamal","Jamal Carter","“In — sign me up.”","Interested","positive"),Ue("event_sara","Sara Lindqvist","“Can do.”","Interested","positive"),Ue("event_dmitri","Dmitri Volkov","Delivered · no reply yet","Delivered","muted")]}},thread_cancel_wed:{policy:{description:"Evaluated scheduling policies, returned eligible workers",policies:["Availability for Wed 7:00 AM","No overlapping shift","Site clearance for Pier 9","Rest window (≥ 8h between shifts)"],policiesTotal:16,eligible:{total:8,unit:"eligible workers",moreNoun:"eligible workers",items:[At("Theo Park","4.7 match","1.9 mi"),At("Gina Holt","4.5 match","3.3 mi"),At("Renata Cruz","4.4 match","5.0 mi")]}},engage:{name:"Engage: SMS",description:"Acknowledged her cancellation",message:"Thanks for letting us know — your Wed 7:00 AM shift has been released. No further action needed.",total:1,threads:[Ue("thread_cancel_wed","Mara Lindgren","“Thanks for understanding.”","Read","positive")]},update:{description:"Filed the release on the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"User",value:"Mara Lindgren"},{label:"Reason",value:"Worker-initiated cancellation"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]},engageOffer:{name:"Engage: SMS",description:"Sent the shift offer to 8 qualified workers",message:"The Wed 7:00 AM shift at Pier 9 just opened up. Reply YES to claim it — first to confirm takes the shift.",total:8,threads:[Ue("theo_park","Theo Park","“Yes — I can take Wed.”","Interested","positive"),Ue("gina_holt","Gina Holt","Delivered · no reply yet","Delivered","muted"),Ue("renata_cruz","Renata Cruz","Delivered · no reply yet","Delivered","muted")]},updateClose:{description:"Wrote the assignment to the shift record",recordType:"Shift",fields:[{label:"Time",value:"Wed · 7:00 AM"},{label:"Location",value:"Pier 9"},{label:"Assigned",value:"Theo Park",emphasis:"change",previousValue:"Mara Lindgren"}]}},cred_expired_nadia:{policy:{description:"Evaluated credential policies, flagged the at-risk shifts",policies:["Active CPR certification","Credential current for gated shifts","Coverage available for each gap"],policiesTotal:12,eligible:{total:6,unit:"eligible backfills",moreNoun:"eligible backfills",items:[At("Carl Jensen","4.7 match","2.6 mi"),At("Tina Boyd","4.5 match","3.9 mi"),At("Marcus Idris","4.4 match","4.8 mi")]}},engage:{name:"Engage: SMS",description:"Offered the 3 gated shifts to CPR-current workers",message:"A few CPR-gated shifts just opened up. Reply YES to pick one up.",total:6,threads:[Ue("carl_jensen","Carl Jensen","“Happy to pick one up.”","Interested","positive"),Ue("tina_boyd","Tina Boyd","Delivered · no reply yet","Delivered","muted"),Ue("marcus_idris","Marcus Idris","Delivered · no reply yet","Delivered","muted")]},update:{description:"Marked her 3 CPR-gated shifts unassigned pending renewal",recordType:"Shift",groups:[[{label:"Time",value:"Thu · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Sat · 3:00 PM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}],[{label:"Time",value:"Mon · 7:00 AM"},{label:"User",value:"Nadia Haddad"},{label:"Status",value:"Unassigned",emphasis:"change",previousValue:"Assigned"}]]},engageOffer:{name:"Engage: in-app",description:"Sent Nadia the renewal task",message:"A CPR renewal task was assigned to you — upload your updated certification before your next gated shift.",total:1,threads:[Ue("cred_expired_nadia","Nadia Haddad","Delivered · task on her profile","Delivered","muted")]},task:{description:"Created the CPR renewal task on Nadia’s profile",query:'tasks.create(assignee="nadia_haddad", template="credential_renewal") → task',fields:[{label:"Task",value:"Renew CPR certification"},{label:"Assignee",value:"Nadia Haddad"},{label:"Step",value:"Upload the updated cert"},{label:"Due",value:"Before next gated shift · Thu 7:00 AM"},{label:"Status",value:"Assigned",emphasis:"success-tag"}]}},timeoff_sofia:{policy:{description:"Evaluated time-off policies, cleared the request",policies:["PTO balance sufficient","No blackout period in the window","Coverage for the affected shifts","Notice period met"],policiesTotal:9},engage:{name:"Engage: in-app",description:"Notified Sofia of the decision",message:"Your time-off request has been approved. Enjoy the time off!",total:1,threads:[Ue("timeoff_sofia","Sofia Marin","“Thanks — understood.”","Read","positive")]}},document_kenji:{policy:{description:"Evaluated credential policies, verified compliance",policies:["Recognized as a CPR certification","Name matches the profile","Credential currently valid","Expiry date captured"],policiesTotal:6}},application_priya:{policy:{description:"Scored the application against the CNA role",policies:["Active CNA license","Availability fits Night Shift","Within commute range","References on file"],policiesTotal:12},engage:{name:"Engage: in-app",description:"Sent Priya a screening intro",message:"Hi Priya — thanks for applying for the CNA Night Shift role. Still interested? Reply YES and we’ll set up a quick screen.",total:1,threads:[Ue("application_priya","Priya Raman","“Yes, still interested!”","Interested","positive")]}},new_user_luis:{engage:{name:"Engage: in-app",description:"Sent Luis a welcome",message:"Welcome to the team, Luis! Tap to finish setting up your profile.",total:1,threads:[Ue("new_user_luis","Luis Mendez","“Thanks — excited to start!”","Read","positive")]}},missed_clockin_james:{engage:{name:"Engage: SMS",description:"Texted James to check on the missed start",message:"Hi James — we didn’t see a clock-in for your 9:00 AM shift. Are you on your way?",total:1,threads:[Ue("missed_clockin_james","James Okoro","“On my way — 15 min out.”","Replied","positive")]},update:{description:"Marked the shift confirmed-late on his record",recordType:"Shift",fields:[{label:"Shift",value:"Today · 9:00 AM"},{label:"Worker",value:"James Okoro"},{label:"ETA",value:"~15 min out · via SMS"},{label:"Status",value:"Confirmed-late",emphasis:"change",previousValue:"No clock-in"}]},updateClose:{description:"Closed the shift out — coverage holds, no fill opened",recordType:"Shift",fields:[{label:"Time",value:"Today · 9:00 AM"},{label:"User",value:"James Okoro"},{label:"Status",value:"Holds — no replacement needed",emphasis:"success"}]}},missed_clockout_bianca:{engage:{name:"Engage: SMS",description:"Texted Bianca to confirm her end time",message:"Hi Bianca — we didn’t get a clock-out for today. What time did you finish?",total:1,threads:[Ue("missed_clockout_bianca","Bianca Rossi","“Left at 6:00 PM.”","Replied","positive")]}},birthday_tomas:{engage:{name:"Engage: in-app",description:"Sent Tomas a birthday note",message:"Happy birthday, Tomas! 🎉 Thanks for everything you do for the team.",total:1,threads:[Ue("birthday_tomas","Tomas Greco","Delivered · birthday note","Delivered","muted")]}},phone_aisha:{engage:{name:"Engage: SMS",description:"Sent a verification ping to the new number",message:"Verifying your new number — reply YES to confirm this is you.",total:1,threads:[Ue("phone_aisha","Aisha Karim","“Yep, this is my number.”","Confirmed","positive")]}},schedule_published:{engage:{name:"Engage",description:"Asked the team to confirm next week’s shifts",message:"Next week’s schedule is published. Please review and confirm your shifts.",total:31,threads:[Ue("sched_amy","Amy Cho","“Confirmed for all four.”","Confirmed","positive"),Ue("sched_ben","Ben Ruiz","Reminder sent · no reply yet","Delivered","muted"),Ue("sched_chloe","Chloe Tan","Reminder sent · no reply yet","Delivered","muted")]}},fill_confirmed_maria:{policy:{description:"Re-checked Sarah against scheduling policies",policies:Hf,policiesTotal:24},engage:{name:"Engage: in-app",description:"Confirmed the fill with Sarah and the scheduler",message:"You’re confirmed for the shift — thanks for covering! See you there.",total:2,threads:[Ue("sarah_quinn","Sarah Quinn","“See you at the shift.”","Read","positive"),Ue("scheduler_dana","Dana Cole","Delivered · coverage confirmed","Delivered","muted")]}}},xN={send:["policy","engage"],clock:["policy"],done:["policy"],edit:["policy"],alert:["policy"],rate:["policy"],chart:["policy"]},yN=e=>/in-app/i.test(e)?"in_app":/sms/i.test(e)?"sms":"auto",Uf=e=>/in-app/i.test(e)?"In-app":/sms/i.test(e)?"SMS":"Preferred channel",qf=e=>e.split(/\s*\+\s*/).map(o=>o.replace(/\b\w/g,i=>i.toUpperCase())).join(", "),wN={Sent:"send",Offered:"offer",Invited:"invite",Texted:"text",Acknowledged:"acknowledge",Notified:"notify",Asked:"ask",Confirmed:"confirm",Messaged:"message"},Cu=e=>{const[o,...i]=e.split(" "),s=wN[o];return s?`Will ${s} ${i.join(" ")}`:e};function bN(e,o){if(e==="policy"&&o.policy){const l=o.policy.eligible;return{query:'policy.evaluate(shift=target, policies="active") → eligible[]',summary:l?`Run the shift against ${o.policy.policiesTotal} active scheduling policies and return the ${l.total} ${l.unit}, ranked by match.`:`Run the case against ${o.policy.policiesTotal} active policies to confirm it clears compliance before acting.`}}const i=e==="engage"?o.engage:e==="engage-offer"?o.engageOffer:void 0;if(i)return{query:`engage.send(channel="${yN(i.name)}", template="shift_offer", to=matched)`,summary:`${Cu(i.description)} — ${i.total} ${i.total===1?"recipient":"recipients"} on their preferred channel, with replies tracked as they land.`};const s=e==="notify"?o.notify:e==="notify-scheduler"?o.notifyScheduler:void 0;return s?{query:`engage.notify(to="${s.name}", via="${s.channel.replace(/\s*\+\s*/g,"+")}")`,summary:`${Cu(s.description)} (${s.name} · ${s.channel}) — a one-way heads-up, no action required.`}:{query:"",summary:""}}function kN(e,o,i,s){var S,_,j,N;if(e==="read"){const $=((S=o.update)==null?void 0:S.recordType)??((_=o.updateClose)==null?void 0:_.recordType);if(!$)return null;const M=$.toLowerCase(),C=[{label:"Type",value:$},{label:"Time",value:((j=o2[s])==null?void 0:j.shiftTime)??""},{label:"User",value:xa[s]??""},{label:"Clock in",value:""}];return{icon:"read",name:`Read data: ${$}`,description:`Pulled the current ${M} record before planning`,query:`read_data(record="${$}") → current_state`,recordDetails:C,summary:`Read the ${M}’s current state — schedule, worker, and status — so the plan works from the live record rather than assumptions.`}}if(e==="match"||e==="credential"||e==="incentive"){const $=(N=o.policy)==null?void 0:N.eligible;if(!$)return null;const M=$.unit.replace(/^eligible\s+/i,"");if(e==="match")return{icon:"search",name:"Match Engine",description:`Ranked qualified ${M} by skill, location and availability`,query:'match_staff(pool="qualified") → ranked[]',summary:`Ranked the qualified pool by skill, location, and availability — surfaced ${$.total} ${$.unit}.`};if(e==="credential")return{icon:"monitor",name:"Policy Engine",description:"Verified the top match’s license and certifications",query:'verify_credentials(candidate="top_match") → status[]',summary:"Confirmed the top match’s license and required certifications are active and current."};const C=$.total>=10;return{icon:"analytics",name:"Match Engine",description:"Compared the fill against recent last-minute fills",query:`recommend_incentive(pool_depth=${$.total}) → suggestion`,summary:C?"Compared against recent last-minute fills — the qualified pool is deep enough, so no bonus was attached.":"Compared against recent last-minute fills — the pool is thin at this notice, so a bonus is recommended to secure the fill.",recommendation:C?{add:!1,amount:"No bonus",rationale:`${$.total} qualified ${M} available — deep enough to fill without an incentive.`}:{add:!0,amount:"$150 / shift",rationale:`Only ${$.total} qualified ${M} available this close to start — a bonus improves the odds of a confirmed fill.`}}}if(e==="task"){if(!o.task)return null;const{description:$,query:M,fields:C}=o.task;return{icon:"task",name:"Tasks",description:$,query:M,task:{fields:C}}}if(e==="update"||e==="update-close"){const $=e==="update"?o.update:o.updateClose;if(!$)return null;const{description:M,...C}=$;return{icon:"record",name:"Update Data",description:M,updateData:C}}const l=e==="notify"||e==="notify-scheduler",d=e==="notify"?o.notify:e==="notify-scheduler"?o.notifyScheduler:void 0,p=e==="engage"?o.engage:e==="engage-offer"?o.engageOffer:void 0;if(!(e==="policy"&&o.policy||!!p||!!d))return null;const g=e==="policy"?"Policy Engine":l?"Engage: Notification":p.name,y=e==="policy"?o.policy.description:l?d.description:p.description,x=e==="policy"?"shield":l?"bell":"message";if(i==="planning"){const $=e==="policy"?y:Cu(y),M={icon:x,name:g,description:$,...bN(e,o)};return l?{...M,channel:qf(d.channel),message:d.message}:p?{...M,channel:Uf(p.name),message:p.message}:e==="policy"?{...M,policies:{total:o.policy.policiesTotal,items:o.policy.policies}}:M}if(e==="policy")return{icon:x,name:g,description:y,policies:{total:o.policy.policiesTotal,items:o.policy.policies},eligible:o.policy.eligible};if(p)return{icon:x,name:g,description:y,channel:Uf(p.name),message:p.message,threads:{total:p.total,moreNoun:"threads",items:p.threads}};const{description:b,...k}=d;return{icon:x,name:g,description:y,channel:qf(d.channel),notification:k}}function p2(e,o,i="execution"){const s=vN[e];return s?o.map(l=>kN(l,s,i,e)).filter(l=>l!==null):[]}const _N=e=>e.tools??xN[e.icon]??["policy"],Gs=[{id:"riverside_shift_drop",capability:"Coverage Recovery",title:"An RN dropped this afternoon’s shift at Riverside Clinic",name:"Shift Drop Recovery",risk:!0,severity:"high",assessment:"Urgent fill — the shift starts in under 12 hours with no replacement.",recommendation:"Reach out to the best-matched RNs and fill it."},{id:"eastgate_clockin",capability:"Attendance",title:"Clean clock-in at Eastgate Warehouse",name:"Clean Clock-In",risk:!1},{id:"missed_clockin_signal",capability:"Attendance Recovery",title:"A worker never started their 9am shift",name:"Missed Clock-In",risk:!0,severity:"high",assessment:"The start passed with no clock-in and the grace window has elapsed.",recommendation:"Check if they’re on the way and update the shift."},{id:"schedule_published_signal",capability:"Scheduling",title:"Next week’s schedule published",name:"Schedule Published",risk:!1},{id:"cpr_lapse_signal",capability:"Compliance",title:"A CPR certification expired overnight",name:"Credential Lapse",risk:!0,severity:"medium",assessment:"CPR is required for the role and upcoming shifts would be non-compliant.",recommendation:"Pull from the affected shifts and start renewal."},{id:"invoice_paid_signal",capability:"Invoicing",title:"Client marked an invoice as paid",name:"Invoice Paid",risk:!1},{id:"open_timesheet_signal",capability:"Payroll Operations",title:"A timesheet has no clock-out before the payroll run",name:"Open Timesheet",risk:!0,severity:"medium",assessment:"The shift ended with no clock-out — the open punch is held from payroll.",recommendation:"Confirm the real end time and fix the timesheet."},{id:"birthday_signal",capability:"Engagement",title:"An employee’s birthday is today",name:"Birthday Greeting",risk:!1}];function CN(e){return{id:`detected_${e.id}`,name:e.name,title:e.title,capability:e.capability,status:"analyzing",severity:e.severity??"high",event:e.title.endsWith(".")?e.title:`${e.title}.`,assessment:e.assessment??"Assessing impact and weighing options before recommending a plan.",recommendation:e.recommendation??"Prepare a recommended plan for your approval.",outcome:null,workflowOpportunity:null,timeline:[{state:"detected",headline:e.title,done:!0},{state:"assessment",headline:"Assessing impact and options",done:!1}],actions:["Review plan","Approve plan"],timestamp:"Just now"}}const h2={shift_drop_maria:"Aisha Karim took Maria’s 2:00 PM shift at Riverside Clinic — first of 20 RNs reached to confirm. Scheduler notified.",timeoff_sofia:"Sofia’s Thursday PTO approved. Friday’s thin — held for your call since only one backup covers it.",document_kenji:"Kenji’s upload filed as a CPR cert and his credential verified. It expires in 3 weeks — flagged for renewal.",application_priya:"Priya Raman cleared screening at a 92% match and moved to the recruiter’s queue with a warm intro sent.",new_shift_forklift:"Forklift shift claimed — offered to the top 12 matches in ranked order. Calendar updated.",new_user_luis:"Luis’s onboarding kicked off — welcome sent and all 5 intake tasks assigned and tracking.",missed_clockin_james:"James replied he’s ~15 min out — shift marked confirmed-late and the site notified to expect him. Coverage holds.",thread_cancel_wed:"Theo Park took the Wed 7:00 AM shift at Pier 9 — first of 8 qualified workers reached to confirm. Release logged and coverage restored.",payroll_acme_invoice:"Approved shift posted to Acme’s open invoice and the total recalculated. Draft ready for your review.",job_event_staff:"Invited the top 40 matches for Saturday’s 20 openings — filling first-come, with a standby list kept.",missed_clockout_bianca:"Bianca confirmed her ~6:05 PM end time — timesheet corrected before the payroll run.",schedule_published:"Next week’s confirmations sent to the whole team — chasing the 22 still unconfirmed; readiness summary by EOD.",shift_release_jenny:"Renee Wallace took Jenny’s released shift — coverage restored and the schedule updated.",birthday_tomas:"Sent Tomas Greco a birthday note from the team via in-app chat.",weekly_fill_report:"Fill-rate report published to Home — 22 under-target shifts flagged and the Mon–Tue gaps sent to scheduling.",clockin_devon:"Devon Pierce’s clock-in cleared the geofence and required fields — approved into the payroll run.",phone_aisha:"Aisha’s new number verified and set as her notification contact — shift alerts now route there.",fill_confirmed_maria:"Sarah Quinn confirmed for Maria’s open RN shift at Riverside Clinic — roster updated and scheduler notified.",invoice_paid_4821:"The client’s off-platform payment reconciled against #4821 — invoice closed paid-in-full and the ledger updated.",cred_expired_nadia:"Nadia Haddad’s CPR renewal assigned — her 3 CPR-gated shifts flagged with backfills lined up to cover them."},Vf=["Got it — I’ll factor that in and update my recommendation.","Understood. Let me re-check the coverage with that in mind and flag anything that shifts.","Thanks for the context — I’ll adjust the plan and keep you posted as it runs.","Noted. I’ll hold that step for now and keep monitoring in the meantime."];function dp(e,o){return Vf[o%Vf.length]}function jN(e){return e===0?"That’s underway now — I’ll keep you posted as it runs.":"All done — I’ll keep monitoring and flag anything new."}function SN(e){return e>=90?"green":e>=80?"blue":e>=70?"orange":"slate"}function f2({record:e}){const o=e.meta.find(l=>/^\d+%\s*match$/i.test(l)),i=o?parseInt(o,10):null,s=o?e.meta.filter(l=>l!==o):e.meta;return n.jsxs(NN,{children:[n.jsx(qn,{size:"md",src:sp(e.avatarSeed),name:e.title,alt:e.title}),n.jsxs(MN,{children:[n.jsx(RN,{children:e.title}),n.jsx(LN,{children:[e.eyebrow,...s].join(" · ")})]}),i!=null&&n.jsxs($N,{"data-tone":SN(i),children:[i,"% match"]}),n.jsx(Ee,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Open record",children:n.jsx(Bu,{size:16})})]})}const NN=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-opaque);
  /* 6px — the design system's --radius-button is the 6px step. */
  border-radius: var(--radius-button);
  font-family: var(--font-sans);
`,MN=f.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  flex: 1;
`,RN=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,LN=f.span`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
  color: var(--color-content-inverse-tertiary);
`,$N=f.span`
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
`,Gf=e=>e.id.startsWith("detected_"),Yf=5400,Kf=1100;function AN(e,o){switch(o.type){case"detect":return e.some(i=>i.id===o.thread.id)?e:[o.thread,...e];case"decide":return e.map(i=>i.id===o.threadId?{...i,status:"needs_approval"}:i);case"commit":return e.map(i=>i.id===o.threadId?{...i,status:"in_progress"}:i);case"reopen":return e.map(i=>i.id===o.threadId?{...i,status:"needs_approval"}:i);case"resolve":return e.map(i=>i.id===o.threadId?{...i,status:"resolved",outcome:h2[i.id]??i.outcome}:i)}}const TN=[{id:"needs_attention",label:"Needs attention",statuses:["analyzing","needs_approval","recommended"]},{id:"live",label:"Working",statuses:["in_progress","monitoring"]},{id:"resolved",label:"Done",statuses:["resolved","auto_resolved","workflow_available","unresolved"]}];function IN(){const[e,o]=v.useReducer(AN,qd),[i,s]=v.useState(()=>{var V;const A=qd.find(Z=>Z.status==="needs_approval"||Z.status==="recommended");return(A==null?void 0:A.id)??((V=qd[0])==null?void 0:V.id)??null}),[l,d]=v.useState([]),p=A=>{s(A),d(V=>V.includes(A)?V:[...V,A])},m=v.useMemo(()=>{const A=e.map((V,Z)=>({item:V,index:Z}));return TN.map(V=>({id:V.id,label:V.label,threads:A.filter(Z=>V.statuses.includes(Z.item.status)).sort((Z,oe)=>(Z.item.status==="analyzing"?1:0)-(oe.item.status==="analyzing"?1:0)||(Gf(oe.item)?1:0)-(Gf(Z.item)?1:0)||va[Z.item.severity]-va[oe.item.severity]||Z.index-oe.index).map(Z=>Z.item)}))},[e]),g=e.find(A=>A.id===i)??null,[y,x]=v.useState({}),b=i?y[i]??0:0,[k,S]=v.useState([]),[_,j]=v.useState({}),[N,$]=v.useState({}),[M,C]=v.useState([]),z=v.useRef({}),[R,L]=v.useState([]),T=A=>{L(V=>V.includes(A)?V.filter(Z=>Z!==A):[...V,A])},[E,B]=v.useState([]),G=A=>{B(V=>V.includes(A)?V:[...V,A])},[J,W]=v.useState([]);return{threads:e,groups:m,selectedId:i,selectedThread:g,selectedStage:b,stageById:y,viewedIds:l,analyzedIds:k,outboundByThread:_,chatByThread:N,replyingIds:M,setSelectedId:p,detectRisk:A=>{o({type:"detect",thread:CN(A)})},decide:A=>{p(A),S(V=>V.includes(A)?V:[...V,A]),o({type:"decide",threadId:A})},commit:(A,V)=>{p(A),j(Z=>({...Z,[A]:[...Z[A]??[],V]})),o({type:"commit",threadId:A})},completeRun:A=>{const V=y[A]??0,Z=lp[A];V===0&&Z?(x(oe=>({...oe,[A]:1})),o({type:"reopen",threadId:A})):(o({type:"resolve",threadId:A}),R.includes(A)&&(G(A),L(oe=>oe.filter(pe=>pe!==A))))},sendMessage:(A,V)=>{const Z=V.trim();if(!Z)return;p(A),$(pe=>({...pe,[A]:[...pe[A]??[],{role:"operator",text:Z}]})),C(pe=>pe.includes(A)?pe:[...pe,A]);const oe=window.setTimeout(()=>{$(pe=>{const q=pe[A]??[],O=q.filter(Y=>Y.role==="ultron").length;return{...pe,[A]:[...q,{role:"ultron",text:dp(Z,O)}]}}),C(pe=>pe.filter(q=>q!==A)),delete z.current[A]},Kf);z.current[A]=oe},stopReply:A=>{const V=z.current[A];V&&(window.clearTimeout(V),delete z.current[A]),C(Z=>Z.filter(oe=>oe!==A))},refine:A=>{},saveWorkflow:A=>{const V=A.id;p(V),$(oe=>({...oe,[V]:[...oe[V]??[],{role:"operator",text:"Save as workflow"}]})),C(oe=>oe.includes(V)?oe:[...oe,V]);const Z=window.setTimeout(()=>{$(oe=>({...oe,[V]:[...oe[V]??[],{role:"ultron",text:"Workflow saved",kind:"workflow_saved"}]})),G(V),C(oe=>oe.filter(pe=>pe!==V)),delete z.current[V]},Kf);z.current[V]=Z},pendingWorkflowIds:R,toggleWorkflowSave:T,savedWorkflowIds:E,markWorkflowSaved:G,revealedNewIds:J,revealNew:A=>W(V=>V.includes(A)?V:[...V,A])}}const EN={"Acknowledge her":{working:"Acknowledging her",done:"Acknowledged her"},"Add the line item":{working:"Adding the line item",done:"Added the line item"},"Approve Thursday":{working:"Approving Thursday",done:"Approved Thursday"},"Approve for payroll":{working:"Approving for payroll",done:"Approved for payroll"},"Assign a renewal task":{working:"Assigning a renewal task",done:"Assigned a renewal task"},"Assign intake tasks":{working:"Assigning intake tasks",done:"Assigned intake tasks"},"Await his reply":{working:"Awaiting his reply",done:"Got his reply"},"Chase the unconfirmed":{working:"Chasing the unconfirmed",done:"Chased the unconfirmed"},"Claim shift":{working:"Claiming shift",done:"Claimed shift"},"Close the invoice":{working:"Closing the invoice",done:"Closed the invoice"},"Collect confirmations":{working:"Collecting confirmations",done:"Collected confirmations"},"Confirm Sarah Quinn":{working:"Confirming Sarah Quinn",done:"Confirmed Sarah Quinn"},"Confirm alerts":{working:"Confirming alerts",done:"Confirmed alerts"},"Confirm the punch":{working:"Confirming the punch",done:"Confirmed the punch"},"File as a CPR cert":{working:"Filing as a CPR cert",done:"Filed as a CPR cert"},"Fill shift":{working:"Filling shift",done:"Filled shift"},"Fill the Wed shift":{working:"Filling the Wed shift",done:"Filled the Wed shift"},"Flag the 3 shifts at-risk":{working:"Flagging the 3 shifts at-risk",done:"Flagged the 3 shifts at-risk"},"Flag the at-risk shifts":{working:"Flagging the at-risk shifts",done:"Flagged the at-risk shifts"},"Flag the renewal":{working:"Flagging the renewal",done:"Flagged the renewal"},"Follow up":{working:"Following up",done:"Followed up"},"Hold Friday for you":{working:"Holding Friday for you",done:"Held Friday for you"},"Hold for payroll":{working:"Holding for payroll",done:"Held for payroll"},"Invite the top 40 matches":{working:"Inviting the top 40 matches",done:"Invited the top 40 matches"},"Keep standby list":{working:"Keeping standby list",done:"Kept standby list"},"Line up backfills":{working:"Lining up backfills",done:"Lined up backfills"},"Mark Priya qualified":{working:"Marking Priya qualified",done:"Marked Priya qualified"},"Mark the credential verified":{working:"Marking the credential verified",done:"Marked the credential verified"},"Message the best matches":{working:"Messaging the best matches",done:"Messaged the best matches"},"Message the top replacements":{working:"Messaging the top replacements",done:"Messaged the top replacements"},"Message workers to confirm":{working:"Messaging workers to confirm",done:"Messaged workers to confirm"},"Move to the recruiter queue":{working:"Moving to the recruiter queue",done:"Moved to the recruiter queue"},"Notify Sofia":{working:"Notifying Sofia",done:"Notified Sofia"},"Notify scheduler":{working:"Notifying scheduler",done:"Notified scheduler"},"Notify scheduling":{working:"Notifying scheduling",done:"Notified scheduling"},"Notify the location manager":{working:"Notifying the location manager",done:"Notified the location manager"},"Offer to the top matches":{working:"Offering to the top matches",done:"Offered to the top matches"},"Publish the report":{working:"Publishing the report",done:"Published the report"},"Queue readiness summary":{working:"Queueing readiness summary",done:"Queued readiness summary"},"Recalculate the total":{working:"Recalculating the total",done:"Recalculated the total"},"Reconcile the payment":{working:"Reconciling the payment",done:"Reconciled the payment"},"Record the release":{working:"Recording the release",done:"Recorded the release"},"Save draft":{working:"Saving draft",done:"Saved draft"},"Send Luis a welcome":{working:"Sending Luis a welcome",done:"Sent Luis a welcome"},"Send a verification ping":{working:"Sending a verification ping",done:"Sent a verification ping"},"Send a warm intro":{working:"Sending a warm intro",done:"Sent a warm intro"},"Send the birthday note":{working:"Sending the birthday note",done:"Sent the birthday note"},"Text Bianca":{working:"Texting Bianca",done:"Texted Bianca"},"Text James":{working:"Texting James",done:"Texted James"},"Track claims":{working:"Tracking claims",done:"Tracked claims"},"Track responses":{working:"Tracking responses",done:"Tracked responses"},"Update ledger":{working:"Updating ledger",done:"Updated ledger"},"Update the contact":{working:"Updating the contact",done:"Updated the contact"},"Update the roster":{working:"Updating the roster",done:"Updated the roster"},"Update the timesheet":{working:"Updating the timesheet",done:"Updated the timesheet"}};function PN(e,o){const i=EN[e];return!i||o==="plan"?e:o==="done"?i.done:i.working}const zN={search:fl,read:fl,message:gl,policy:bo,shield:bo,schedule:bo,analytics:c6,clock:yn,monitor:Si,bell:gl,record:Yr,task:bo},ON={search:"Replacement match",shield:"Policy Engine",policy:"Policy Engine",monitor:"Credential check",analytics:"Incentive recommendation",message:"Engage",bell:"Engage",task:"Tasks"},DN=e=>e.updateData?`Update Data: ${e.updateData.recordType}`:ON[e.icon]??e.name,FN=e=>e.tone==="positive"?"success":e.tone==="chatting"?"info":"neutral",Qf={positive:0,chatting:1,muted:2},BN=f(ig)`
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
`,WN=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,up=240;function HN({open:e,onClose:o,title:i="Run details",usage:s}){const[l,d]=v.useState(()=>s.length?"0":""),[p,m]=v.useState(e),[g,y]=v.useState(!1);if(v.useEffect(()=>{if(e){m(!0);let _=0;const j=requestAnimationFrame(()=>{_=requestAnimationFrame(()=>y(!0))});return()=>{cancelAnimationFrame(j),cancelAnimationFrame(_)}}y(!1);const S=setTimeout(()=>m(!1),up);return()=>clearTimeout(S)},[e]),!p)return null;const x=s.length,b=`${x} ${x===1?"tool":"tools"} used · tap any to see its query and results`,k=s.map((S,_)=>({entry:S,index:_}));return _i.createPortal(n.jsxs(eM,{role:"dialog","aria-modal":"true","aria-label":i,children:[n.jsx(tM,{$shown:g,onClick:o}),n.jsxs(nM,{$shown:g,children:[n.jsxs(rM,{children:[n.jsxs(oM,{children:[n.jsx(aM,{children:i}),n.jsx(iM,{children:b})]}),n.jsx(Ee,{variant:"ghost",size:"sm",iconOnly:!0,"aria-label":"Close run details",onClick:o,children:n.jsx(gi,{size:18})})]}),n.jsxs(sM,{children:[n.jsx(lM,{"aria-hidden":"true"}),n.jsx(ag,{type:"single",collapsible:!0,value:l,onValueChange:S=>d(typeof S=="string"?S:""),children:k.map(({entry:S,index:_})=>{const j=S.updateData?Y0:zN[S.icon];return n.jsx(BN,{value:String(_),label:DN(S),description:S.description,leadingSlot:n.jsx(WN,{"aria-hidden":"true",children:n.jsx(j,{size:18})}),children:n.jsx(cM,{children:n.jsx(UN,{entry:S})})},_)})})]})]})]}),document.body)}function UN({entry:e}){return n.jsxs(n.Fragment,{children:[e.channel&&n.jsxs(gn,{children:[n.jsx(Yt,{children:"Channel"}),n.jsx(tm,{children:e.channel})]}),e.message&&n.jsxs(gn,{children:[n.jsx(Yt,{children:"Message"}),n.jsx(Xf,{children:e.message})]}),e.recordDetails&&n.jsxs(gn,{children:[n.jsx(Yt,{children:"Record details"}),n.jsx(Gd,{children:e.recordDetails.map((o,i)=>n.jsx(xn,{size:"sm",label:o.label,trailingSlot:n.jsx(Yd,{$success:o.emphasis==="success",$placeholder:!o.value,children:o.value||"???"})},i))})]}),e.policies&&n.jsxs(gn,{children:[n.jsx(Yt,{children:`Policies evaluated · ${e.policies.total}`}),n.jsx(kM,{children:e.policies.items.map((o,i)=>n.jsxs(_M,{children:[n.jsx(CM,{"aria-hidden":"true",children:n.jsx(wn,{size:16})}),n.jsx("span",{children:o})]},i))})]}),e.eligible&&n.jsxs(gn,{children:[n.jsx(Yt,{children:`Returned · ${e.eligible.total} ${e.eligible.unit}`}),n.jsx(qN,{candidates:e.eligible.items,total:e.eligible.total,moreNoun:e.eligible.moreNoun})]}),e.threads&&n.jsxs(gn,{children:[n.jsx(Yt,{children:`Threads · ${e.threads.total}`}),n.jsx(ZN,{threads:e.threads})]}),e.notification&&n.jsxs(n.Fragment,{children:[n.jsxs(gn,{children:[n.jsx(Yt,{children:"Recipient"}),n.jsx(jM,{children:n.jsx(xn,{size:"md",divider:!1,leadingSlot:n.jsx(qn,{size:"sm",src:_a(e.notification.seed),name:e.notification.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:e.notification.name,description:e.notification.role,trailingSlot:n.jsx(Ee,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":`Open ${e.notification.name}'s profile`,children:n.jsx(Al,{size:14})})})})]}),n.jsxs(gn,{children:[n.jsx(Yt,{children:"Message"}),n.jsx(Xf,{children:e.notification.message})]})]}),e.task&&n.jsxs(gn,{children:[n.jsx(Yt,{children:"Task"}),n.jsx(Gd,{children:e.task.fields.map((o,i)=>n.jsx(xn,{size:"sm",label:o.label,trailingSlot:o.emphasis==="success-tag"?n.jsx(vi,{status:"success",size:"sm",children:o.value}):n.jsx(Yd,{$success:o.emphasis==="success",$placeholder:!o.value,children:o.value||"???"})},i))})]}),e.updateData&&n.jsxs(gn,{children:[n.jsx(Yt,{children:"Record details"}),(e.updateData.groups??[e.updateData.fields??[]]).map((o,i)=>n.jsx(Gd,{children:o.map((s,l)=>n.jsx(xn,{size:"sm",label:s.label,trailingSlot:s.emphasis==="change"&&s.previousValue?n.jsxs(VN,{children:[n.jsx(GN,{children:s.previousValue}),n.jsx(YN,{"aria-hidden":"true",children:"→"}),n.jsx(KN,{children:s.value})]}):s.emphasis==="success-tag"?n.jsx(vi,{status:"success",size:"sm",children:s.value}):n.jsx(Yd,{$success:s.emphasis==="success",$placeholder:!s.value,children:s.value||"???"})},l))},i))]}),e.recommendation&&n.jsxs(gn,{children:[n.jsx(Yt,{children:"Recommendation"}),n.jsxs(SM,{children:[n.jsxs(Jf,{children:[n.jsx(em,{children:"Incentive?"}),n.jsx(NM,{$add:e.recommendation.add,children:e.recommendation.add?e.recommendation.amount:"No bonus"})]}),n.jsxs(Jf,{children:[n.jsx(em,{children:"Reason"}),n.jsx(MM,{children:e.recommendation.rationale})]})]})]}),e.query&&n.jsxs(gn,{children:[n.jsx(Yt,{children:"Query"}),n.jsx(dM,{children:e.query})]}),e.summary&&n.jsxs(gn,{children:[n.jsx(Yt,{children:"What it does"}),n.jsx(tm,{children:e.summary})]})]})}function qN({candidates:e,total:o,moreNoun:i}){var x;const[s,l]=v.useState(!1),d=e.slice(0,3),p=o-d.length,m=parseFloat(((x=d[d.length-1])==null?void 0:x.match)??"4.5"),g=s?Array.from({length:p},(b,k)=>QN(k,m)):[],y=[...d,...g];return n.jsxs(n.Fragment,{children:[n.jsx(pp,{children:y.map((b,k)=>n.jsx(xn,{size:"sm",leadingSlot:n.jsx(qn,{size:"sm",src:_a(b.name),name:b.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:b.name,trailingSlot:n.jsx(hM,{children:`${b.match} · ${b.distance}`})},k))}),p>0&&n.jsx(m2,{type:"button",onClick:()=>l(b=>!b),"aria-expanded":s,children:s?`Show fewer ${i}`:`+${p} more ${i}`})]})}const pp=f.div`
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
`,Gd=f(pp)`
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
`,Yd=f.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  /* A missing value renders as a muted "???" placeholder (disabled tone) so the row
     reads as "no data yet" rather than a blank trailing edge. */
  color: ${e=>e.$placeholder?"var(--color-content-disabled)":e.$success?"var(--color-success-content)":"var(--color-content-primary)"};
  text-align: right;
`,VN=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
`,GN=f.span`
  color: var(--color-content-disabled);
  text-decoration: line-through;
`,YN=f.span`
  color: var(--color-content-tertiary);
`,KN=f.span`
  color: var(--color-success-content);
`,bl=["Lena","Omar","Priya","Devon","Mara","Theo","Nadia","Cole","Ivy","Ravi","Greta","Sam","Yuki","Diego","Hana","Pete","Lola","Kofi"],kl=["Brooks","Nguyen","Shah","Reyes","Ford","Klein","Park","Owens","Diaz","Hale","Mori","Watts","Cruz","Bauer","Singh","Lowe"];function QN(e,o){const i=bl[e%bl.length],s=kl[(e*7+3)%kl.length],l=Math.max(3,o-(e+1)*.1),d=(4+e*13%90/10).toFixed(1);return{name:`${i} ${s}`,match:`${l.toFixed(1)} match`,distance:`${d} mi`}}const Zf=3;function ZN({threads:e}){const[o,i]=v.useState(!1),[s,l]=v.useState(null),d=[...e.items].sort((x,b)=>Qf[x.tone]-Qf[b.tone]),p=Math.max(0,e.total-d.length),m=[...d,...Array.from({length:p},(x,b)=>JN(b))],g=o?m:m.slice(0,Zf),y=m.length-Zf;return n.jsxs(n.Fragment,{children:[n.jsx(pp,{children:g.map((x,b)=>{var j;const k=!!((j=x.conversation)!=null&&j.length),S=`${x.name}-${b}`,_=k&&s===S;return n.jsxs(fM,{"data-open":_||void 0,children:[n.jsx(xn,{size:"md",interactive:k,onClick:k?()=>l(_?null:S):void 0,"aria-expanded":k?_:void 0,leadingSlot:n.jsx(qn,{size:"sm",src:_a(x.seed),name:x.name,alt:"",style:{"--avatar-bg":"var(--color-bg-secondary)"}}),label:x.name,description:x.preview,trailingSlot:n.jsxs(bM,{children:[n.jsx(vi,{status:FN(x),size:"sm",children:x.status}),k?n.jsx(mM,{"data-open":_||void 0,children:n.jsx($n,{size:16})}):n.jsx(bn,{size:16})]})}),_&&n.jsx(XN,{messages:x.conversation})]},S)})}),y>0&&n.jsx(m2,{type:"button",onClick:()=>i(x=>!x),"aria-expanded":o,children:o?`Show fewer ${e.moreNoun}`:`+${y} more ${e.moreNoun}`})]})}function XN({messages:e}){return n.jsx(vM,{children:e.map((o,i)=>n.jsxs(xM,{$from:o.from,children:[n.jsx(yM,{children:o.text}),n.jsx(wM,{children:o.time})]},i))})}function JN(e){const o=bl[e%bl.length],i=kl[(e*7+3)%kl.length],s=`${o} ${i}`;return{seed:s,name:s,preview:"Delivered · no reply yet",status:"Delivered",tone:"muted"}}const eM=f.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  font-family: var(--font-sans);
`,tM=f.div`
  position: absolute;
  inset: 0;
  background: var(--color-bg-always-dark);
  opacity: ${e=>e.$shown?.45:0};
  transition: opacity ${up}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,nM=f.div`
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
  transition: transform ${up}ms var(--ease-out);

  @media (prefers-reduced-motion: reduce) { transition: none; transform: none; }
`,rM=f.div`
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
  padding: var(--space-2) var(--space-3);
`,oM=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,aM=f.h2`
  margin: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,iM=f.p`
  margin: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,sM=f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,lM=f.div`
  position: sticky;
  top: 0;
  z-index: 2;
  height: var(--space-4);
  background: linear-gradient(to bottom, var(--color-bg-primary), transparent);
  pointer-events: none;
`,cM=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,gn=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;function dM({children:e}){const[o,i]=v.useState(!1),s=()=>{var l;(l=navigator.clipboard)==null||l.writeText(e),i(!0),window.setTimeout(()=>i(!1),1600)};return n.jsxs(uM,{children:[n.jsx(pM,{children:e}),n.jsx(Ee,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":o?"Copied":"Copy query",onClick:s,children:o?n.jsx(wn,{size:14}):n.jsx(V0,{size:14})})]})}const uM=f.div`
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
`,pM=f.pre`
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
`,hM=f.span`
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,fM=f.div``,mM=f.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  transition: transform var(--duration-fast) var(--ease-default);

  &[data-open] {
    transform: rotate(180deg);
    color: var(--color-content-tertiary);
  }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,gM=Se`
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
`,vM=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-3) var(--space-3);
  animation: ${gM} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,xM=f.div`
  max-width: 80%;
  align-self: ${e=>e.$from==="them"?"flex-start":"flex-end"};
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-lg);
  background: ${e=>e.$from==="them"?"var(--color-bg-secondary)":"var(--color-info-fill)"};
  color: ${e=>e.$from==="them"?"var(--color-content-primary)":"var(--color-content-inverse)"};
  /* Squared-off tail corner on the side the bubble is anchored to. */
  border-bottom-${e=>e.$from==="them"?"left":"right"}-radius: var(--radius-xs);
`,yM=f.div`
  font-size: var(--text-xs);
  line-height: var(--line-height-snug);
`,wM=f.div`
  margin-top: 2px;
  font-size: 10px;
  line-height: 1;
  opacity: 0.65;
  text-align: right;
`,bM=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-content-tertiary);

  /* Lighter drill-down chevron — a step muted below the status tag so it reads as
     quiet affordance rather than competing with the tag. */
  & svg {
    color: var(--color-content-disabled);
  }
`,m2=f.button`
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
`,kM=f.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--color-border-opaque);
  border-radius: 6px;
`,_M=f.li`
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
`,CM=f.span`
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-success-content);
`,Xf=f.div`
  padding: var(--space-2) var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,jM=f.div`
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
`,SM=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border-radius: 6px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-opaque);
`,Jf=f.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,em=f.span`
  flex-shrink: 0;
  width: var(--space-20);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,NM=f.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: ${e=>e.$add?"var(--color-success-content)":"var(--color-content-primary)"};
`,MM=f.span`
  flex: 1;
  min-width: 0;
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,tm=f.div`
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`;function RM({milestones:e}){return n.jsx(OM,{children:e.map((o,i)=>n.jsx(TM,{milestone:o,last:i===e.length-1},i))})}function g2({milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,collapsed:l,hideActions:d,running:p,animateIn:m,showConnectors:g,reasoning:y}){return n.jsx(LM,{milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,hideActions:d,running:p,defaultCollapsed:l,animateIn:m,showConnectors:g,reasoning:y})}function LM({milestones:e,typingIndex:o,focusIndex:i,focusBeat:s,hideActions:l,running:d,animateIn:p=!0,showConnectors:m=!0,defaultCollapsed:g=!1,reasoning:y=!1}){const[x,b]=v.useState(!1),_=g||y&&!d?e.length:0,j=_>0,N=j&&!x?_:0,$=e.slice(0,_).map(C=>C.headline).join(" · "),M=e.length>0&&N>=e.length;return n.jsx(FM,{$animate:p,children:n.jsxs(WM,{$compact:M,children:[j&&!x&&n.jsx(om,{$tight:!0,$last:M,$connected:m,children:n.jsxs(y2,{type:"button","aria-expanded":x,onClick:()=>b(C=>!C),children:[n.jsx(sm,{"aria-hidden":"true",children:n.jsx(ml,{size:16})}),n.jsx(tR,{children:$})]})}),e.slice(N).map((C,z)=>{var W,K;const R=N+z,L=d&&typeof i=="number"&&R>i,T=d&&typeof i=="number"&&R===i,E=L?"plan":T?"working":"done",B=!d||typeof i!="number"||R<i-1?"done":R===i-1?"working":"upcoming",G=!!((W=C.progress)!=null&&W.length),J=R===e.length-1;return n.jsxs(om,{$tight:!G,$last:J,$connected:m,children:[m&&!J&&B!=="upcoming"&&n.jsx(UM,{"aria-hidden":"true",$state:B,$tight:!G,$superseded:g}),n.jsx(x2,{milestone:C,label:PN(C.headline,E),last:!0,collapsible:!0,placeholder:L,focused:T,startOpen:!d&&x,onCollapse:j&&x&&!T?()=>b(!1):void 0,progressBeat:T?s:void 0,superseded:g,typing:R===o,extra:!L&&((K=C.usage)!=null&&K.length)?n.jsx(AM,{usage:C.usage,title:C.headline}):void 0,icon:y&&!d&&!L?n.jsx(sm,{"aria-hidden":"true",children:n.jsx(ml,{size:16})}):n.jsx(v2,{icon:C.icon,loading:o===R||T||d&&typeof i!="number"&&R===e.length-1,placeholder:L,muted:g})})]},R)}),!l&&!d&&n.jsx(sa,{time:er(e)})]})})}const nm=["Thinking","Bridging","Reinforcing","Inspecting","Crossing"];function $M(){const[e,o]=v.useState(0);return v.useEffect(()=>{if(e>=nm.length-1)return;const i=setTimeout(()=>o(s=>s+1),3200);return()=>clearTimeout(i)},[e]),n.jsxs(n.Fragment,{children:[nm[e],n.jsxs(BM,{"aria-hidden":"true",children:[n.jsx("span",{children:"."}),n.jsx("span",{children:"."}),n.jsx("span",{children:"."})]})]})}function er(e){const i=581+e.reduce((m,g)=>m+g.headline.length,0)%200,s=Math.floor(i/60)%24,l=i%60,d=s<12?"AM":"PM";return`${s%12===0?12:s%12}:${String(l).padStart(2,"0")} ${d}`}function sa({time:e}){const[o,i]=v.useState(null),s=l=>i(d=>d===l?null:l);return n.jsx(qM,{"data-feedback-actions":!0,children:n.jsxs(S0,{visibility:"always",time:e,children:[n.jsx(am,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Good response","aria-pressed":o==="up","data-active":o==="up"||void 0,onClick:()=>s("up"),children:n.jsx(U0,{size:14})}),n.jsx(am,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Bad response","aria-pressed":o==="down","data-active":o==="down"||void 0,onClick:()=>s("down"),children:n.jsx(q0,{size:14})}),n.jsx(Ee,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Rerun",children:n.jsx(ji,{size:14})})]})})}function AM({usage:e,title:o}){const[i,s]=v.useState(!1);return v.useEffect(()=>{if(!i)return;const l=d=>{d.key==="Escape"&&s(!1)};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[i]),e.length?n.jsxs(VM,{children:[n.jsxs(Ee,{variant:"tertiary",size:"xs",trailingArtwork:n.jsx(bn,{size:12}),"aria-haspopup":"dialog","aria-expanded":i,onClick:()=>s(!0),children:[e.length," ",e.length===1?"tool":"tools"," used"]}),n.jsx(HN,{open:i,onClose:()=>s(!1),title:o,usage:e})]}):null}function TM({milestone:e,last:o}){return n.jsxs(ZM,{children:[n.jsxs(XM,{children:[n.jsx(v2,{icon:e.icon}),!o&&n.jsx(oR,{})]}),n.jsx(x2,{milestone:e,last:o})]})}function IM({records:e,initial:o=3}){const[i,s]=v.useState(!1),l=i?e:e.slice(0,o),d=e.length-o;return n.jsxs(wR,{children:[l.map((p,m)=>n.jsx(f2,{record:p},m)),d>0&&n.jsx(bR,{type:"button",onClick:()=>s(p=>!p),children:i?"Show less":`Show ${d} more`})]})}function v2({slotRef:e,hidden:o,loading:i,placeholder:s,muted:l}){return s?n.jsx(im,{ref:e,"aria-hidden":"true",$hidden:o,$placeholder:!0,children:n.jsx(eR,{})}):n.jsx(im,{ref:e,"aria-hidden":"true",$hidden:o,$loading:i,children:n.jsxs(rR,{viewBox:"0 0 24 24",$loading:i,$muted:l&&!i,children:[n.jsx("circle",{className:"ring",cx:"12",cy:"12",r:"9"}),n.jsx("path",{className:"check",d:"M7.5 12.4l3 3 6-6.4"})]})})}function x2({milestone:e,label:o,last:i,typing:s,icon:l,collapsible:d=!0,extra:p,placeholder:m,focused:g,progressBeat:y,superseded:x,startOpen:b,onCollapse:k}){var J,W,K;const S=o??e.headline;if(m)return n.jsx(cm,{$last:i,$dim:!0,children:n.jsxs(wi,{as:"div",children:[l,n.jsx(dm,{children:S})]})});const _=!!((J=e.blocks)!=null&&J.length),j=!!p,N=!d||!!e.defaultOpen||!!b,[$,M]=v.useState(null),C=!!k,z=C?!0:$??N,R=d&&(_||j),L=!C&&R&&(!s||!!g),T=L&&!!g&&!!((W=e.progress)!=null&&W.length),E=()=>M(()=>!z),B=_&&(C||!d||z),G=j&&(C||!d||z);return n.jsxs(cm,{$last:i,children:[n.jsxs(wi,{as:C||R?"button":"div",type:C||R?"button":void 0,$interactive:C||L,"aria-expanded":C?!0:L?z:void 0,onClick:C?k:L?E:void 0,children:[l,n.jsx(dm,{$focused:!!g,children:S}),L&&!g&&n.jsx(aR,{"data-open":z||void 0,"aria-hidden":"true",children:n.jsx(bn,{size:14})})]}),(K=e.progress)!=null&&K.length?n.jsx(lR,{$indent:!!l,children:n.jsxs(iR,{children:[T&&n.jsx(sR,{type:"button","aria-expanded":z,"aria-label":z?"Hide details":"Show details",onClick:E,children:z?n.jsx(Yu,{size:16}):n.jsx(So,{size:16})}),n.jsx(PM,{steps:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,live:!!(s||g),beat:y,superseded:x,showAvatars:z||s||g})]})}):null,B&&n.jsx(gR,{$indent:!!l,children:e.blocks.map((te,ae)=>n.jsxs(vR,{children:[te.text&&n.jsx(xR,{children:s?n.jsx(hp,{text:te.text}):te.text}),te.label&&n.jsx(yR,{children:te.label}),te.bullets&&n.jsx(kR,{children:te.bullets.map((ce,se)=>n.jsx("li",{children:ce},se))}),te.checks&&n.jsx(_R,{children:te.checks.map((ce,se)=>n.jsxs("li",{children:[n.jsx(CR,{"aria-hidden":"true"}),n.jsx("span",{children:ce})]},se))}),te.records&&n.jsx(IM,{records:te.records})]},ae))}),G&&n.jsx(GM,{$indent:!!l,children:p})]})}const EM=1350;function PM({steps:e,avatars:o,avatarsOnSettle:i,reached:s,live:l,showAvatars:d,beat:p,superseded:m}){const g=e.length-1,y=typeof p=="number",[x,b]=v.useState(l?0:g),k=v.useRef(l);v.useEffect(()=>{l&&!k.current&&(k.current=!0,b(0))},[l]),v.useEffect(()=>{if(y||!k.current||x>=g)return;const N=setTimeout(()=>b($=>Math.min($+1,g)),EM);return()=>clearTimeout(N)},[x,g,y]),v.useEffect(()=>{typeof p=="number"&&b(Math.min(p,g))},[p,g]);const S=typeof p=="number"?Math.min(p,g):x,_=S>=g,j=_&&!l;return n.jsxs(cR,{children:[n.jsx(uR,{$done:j,$live:l,$superseded:m,"aria-live":"polite",children:l?n.jsx(hp,{text:e[S],caret:!1,speed:26}):e[S]},S),d&&(i?_:_||l)&&(o!=null&&o.length)?n.jsx(zM,{seeds:o,total:s}):null]})}const rm=90;function zM({seeds:e,total:o,max:i=5}){const s=e.slice(0,i),l=Math.max(o??0,e.length),d=l-s.length;return n.jsxs(pR,{"aria-label":`${l} people reached`,children:[s.map((p,m)=>n.jsx(hR,{style:{zIndex:s.length-m,animationDelay:`${m*rm}ms`},children:n.jsx(qn,{size:"sm",src:_a(p),name:p,alt:""})},p)),d>0&&n.jsxs(fR,{"aria-hidden":"true",style:{animationDelay:`${s.length*rm}ms`},children:["+",d]})]})}const OM=f.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
`,DM=Se`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,Dl=qe`
  &:hover [data-feedback-actions],
  &:focus-within [data-feedback-actions] {
    opacity: 1;
    pointer-events: auto;
  }
`,FM=f.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-sans);
  animation: ${DM} var(--duration-base) var(--ease-out);
  /* Skip the entrance when the group is merely folding into a response set after it
     already streamed in — replaying it would blink the already-shown trail. */
  ${e=>e.$animate===!1&&"animation: none;"}

  ${Dl}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,BM=f.span``,WM=f.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* Symmetric breathing room above and below the activity stack. The top padding
     is constant so the first row (the collapse toggle) holds its vertical position
     when the group opens/closes — expanding no longer nudges the accordion down.
     Only the bottom padding tightens for a fully-folded (superseded) recap line. */
  padding-top: var(--space-3);
  padding-bottom: ${e=>e.$compact?"var(--space-1)":"var(--space-3)"};
`,om=f.div`
  min-width: 0;
  position: relative;
  margin-bottom: ${e=>e.$last?"0":e.$connected?e.$tight?"var(--space-3)":"var(--space-5)":e.$tight?"0":"var(--space-3)"};
`,HM=Se`
  0%   { background-position: 0 -100%; }
  100% { background-position: 0 200%; }
`,UM=f.span`
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
        animation: ${HM} 1.25s linear infinite;
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
`,qM=f.div`
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
`,VM=f.div`
  display: flex;

  /* Tighten the gap before the trailing chevron — 4px right padding. */
  & > button {
    padding-right: var(--space-1);
  }
`,GM=f.div`
  padding-top: var(--space-2);
  padding-left: ${e=>e.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,am=f(Ee)`
  &[data-active] { color: var(--color-content-brand); }
`;function hp({text:e,onDone:o,speed:i=30,caret:s=!0}){const[l,d]=v.useState(0);v.useEffect(()=>{d(0)},[e]),v.useEffect(()=>{if(l>=e.length)return;const m=setTimeout(()=>d(g=>g+1),i);return()=>clearTimeout(m)},[l,e,i]);const p=l>=e.length;return v.useEffect(()=>{p&&(o==null||o())},[p]),n.jsxs(n.Fragment,{children:[e.slice(0,l),s&&n.jsx(KM,{$blink:p,"aria-hidden":"true"}),!p&&n.jsx(QM,{"aria-hidden":"true",children:e.slice(l)})]})}const YM=Se`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,KM=f.span`
  display: inline-block;
  width: 1px;
  height: 1em;
  margin-left: 1px;
  /* Centre on the text rather than the line box — text-bottom anchored the caret
     to the line-box bottom (the leading/descender gap), leaving it sitting low. */
  vertical-align: middle;
  background: currentColor;
  animation: ${e=>e.$blink?YM:"none"} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,QM=f.span`
  opacity: 0;
`,ZM=f.div`
  display: flex;
  align-items: stretch;
  /* space-4 (not space-3) so the headline clears the icon column and lands
     under the header title while the icon stays centered under the avatar. */
  gap: var(--space-4);
`,XM=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,im=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
  visibility: ${e=>e.$hidden?"hidden":"visible"};
`,JM=Se`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.5; }
`,eR=f.span`
  width: var(--space-4);
  height: var(--space-4);
  border-radius: var(--radius-full);
  box-sizing: border-box;
  /* An outlined muted circle marks the step's leading slot until the work reaches it.
     A touch darker than the default divider stroke so the empty ring reads clearly. */
  border: 1.5px solid var(--color-slate-border-tertiary);
  animation: ${JM} 1.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,y2=f.button`
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
`,sm=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  /* The collapse toggle always reads in the quiet disabled tone — it's a recap
     affordance, not a step, so it stays out of the way of the live trail. */
  color: var(--color-content-disabled);
`,tR=f.span`
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

  ${y2}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,nR=Se`
  to { transform: rotate(360deg); }
`,lm=56.5,rR=f.svg`
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
    stroke-dasharray: ${lm};
    transform-origin: center;
    /* loading: leave ~30% of the circle drawn as the spinner arc */
    stroke-dashoffset: ${e=>e.$loading?lm*.7:0};
    stroke: ${e=>e.$loading?"var(--color-content-tertiary)":e.$muted?"transparent":"var(--color-success-fill)"};
    /* A slow, patient spin (2s/rev) — the work behind a step can take 10–20 min in
       real life, so a calm rotation reads as steady progress rather than an
       about-to-finish quick spinner. */
    animation: ${nR} 2s linear infinite;
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
`,oR=f.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,cm=f.div`
  flex: 1;
  min-width: 0;
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
  /* Upcoming (not-yet-reached) steps read dull until the work focuses on them. */
  opacity: ${e=>e.$dim?.45:1};
  transition: opacity var(--duration-base) var(--ease-out);
`,wi=f.div`
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
`,dm=f.span`
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

  ${wi}:hover & { color: var(--color-content-primary); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,aR=f.span`
  display: inline-flex;
  color: var(--color-content-disabled);
  opacity: 0;
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-default);
  ${wi}:hover &,
  ${wi}:focus-visible &,
  &[data-open] { opacity: 1; }
  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,iR=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,sR=f.button`
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
`,lR=f.div`
  padding-left: ${e=>e.$indent?"calc(var(--space-8) + var(--space-2))":"0"};
`,cR=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex: 1;
  min-width: 0;
`,dR=Se`
  from { background-position: 150% 0; }
  to   { background-position: -50% 0; }
`,uR=f.div`
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
    animation: ${dR} 1.6s linear infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    -webkit-text-fill-color: currentColor;
  }
`,pR=f.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`,w2=Se`
  from { opacity: 0; transform: translateX(calc(-1 * var(--space-2))) scale(0.6); }
  to   { opacity: 1; transform: translateX(0) scale(1); }
`,hR=f.span`
  display: inline-flex;
  border-radius: var(--radius-full);
  /* White ring + overlap, so the faces fan out as one cluster. */
  box-shadow: 0 0 0 2px var(--color-bg-primary);
  /* "both" fill holds the from-state through the stagger delay so faces stay
     hidden until their turn, rather than flashing in then animating. */
  animation: ${w2} 300ms var(--ease-out) both;

  &:not(:first-child) { margin-left: calc(-1 * var(--space-2)); }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,fR=f.span`
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
  animation: ${w2} 300ms var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,mR=Se`
  from { opacity: 0; }
  to   { opacity: 1; }
`,gR=f.div`
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
  animation: ${mR} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,vR=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,xR=f.p`
  margin: 0;
  font-size: var(--text-sm);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,yR=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,wR=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,bR=f.button`
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
`,kR=f.ul`
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
`,_R=f.ul`
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
`,CR=f.span`
  flex-shrink: 0;
  width: 4px;
  height: 4px;
  border-radius: var(--radius-full);
  background: currentColor;
`;function jR({size:e=20}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:n.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"3",stroke:"currentColor",strokeWidth:1.75})})}const SR=160,b2=v.forwardRef(function({onSend:o,working:i=!1,onStop:s,placeholder:l="Message Ultron…",compact:d=!1},p){const[m,g]=v.useState(""),y=v.useRef(null),x=m.trim().length>0;v.useImperativeHandle(p,()=>({focus:()=>{var j;return(j=y.current)==null?void 0:j.focus()}}),[]);const b=()=>{const j=y.current;j&&(j.style.height="auto",j.style.height=`${Math.min(j.scrollHeight,SR)}px`)},k=()=>{!x||i||(o(m),g(""),requestAnimationFrame(()=>{const j=y.current;j&&(j.style.height="auto")}))},S=j=>{j.preventDefault(),k()},_=j=>{j.key==="Enter"&&!j.shiftKey&&(j.preventDefault(),k())};return n.jsxs(NR,{onSubmit:S,$compact:d,children:[n.jsx(MR,{ref:y,rows:1,value:m,placeholder:l,"aria-label":"Message Ultron",$compact:d,onChange:j=>{g(j.target.value),b()},onKeyDown:_}),i?n.jsx(um,{$float:!0,type:"button",variant:"primary",size:d?"xs":"sm",iconOnly:!0,"aria-label":"Stop",onClick:s,children:n.jsx(jR,{size:d?16:20})}):n.jsx(um,{type:"submit",variant:"primary",size:d?"xs":"sm",iconOnly:!0,disabled:!x,"aria-label":"Send message",children:n.jsx(Ll,{size:d?14:18})})]})}),NR=f.form`
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
`,MR=f.textarea`
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
`,um=f(Ee)`
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
`,pm=450;function fp(e,o){var _;const i=e.status==="needs_approval"||e.status==="recommended",s=i||e.status==="unresolved"||e.status==="monitoring",l=lp[e.id],d=o===1&&!!l,p=d?l.prompt:c2[e.id]??e.recommendation,m=d?l.record:uN[e.id],g=m?Array.isArray(m)?m:[m]:[],y=e.status==="unresolved"?YS:d?l.actions:e.actions,x=i&&(!d&&(((_=cp[e.id])==null?void 0:_.length)??0)>1||KS(p)),b=x?QS:y[y.length-1],k=x?[]:y.slice(0,-1),S=t2(e);return{needsDecision:i,actionable:s,onFollowUp:d,followUp:l,prompt:p,records:g,primaryLabel:b,secondaryLabels:k,purple:S}}function hm({thread:e,stage:o,expanded:i,detachActionable:s,detachAnalyzing:l,detachTrail:d,onToggle:p,onClose:m,onDecide:g,onAction:y,onRefinement:x,onSaveWorkflow:b}){const[k,S]=v.useState(!1),[_,j]=v.useState(!1),{actionable:N,prompt:$,records:M,primaryLabel:C,purple:z}=fp(e,o),L=e.status==="analyzing"&&!l,T=e.status==="resolved"||e.status==="auto_resolved",E=!s&&(N||z),B=T&&!d,G=s?L:N||L||E,J=i&&(G||B),W=Ol(e),te=a2(e.id)||(J?"":e.assessment),ae=ce=>{n2(ce)?x(ce):y(e.id,ce)};return n.jsxs(BR,{"data-tone":W,$expanded:i,children:[n.jsxs(VR,{children:[n.jsxs(YR,{type:"button","aria-expanded":J,"aria-label":J?"Collapse case":"Expand case",onClick:p,children:[n.jsx(qn,{size:"md",src:sp(e.id),name:xa[e.id],alt:xa[e.id]??""}),n.jsxs(N2,{children:[n.jsx(M2,{children:i2(e)}),te&&n.jsx(R2,{children:te})]})]}),n.jsx(GR,{variant:"ghost",size:m?"sm":"xs",iconOnly:!0,"aria-label":m?"Open record":J?"Collapse case":"Expand case",tabIndex:m?void 0:-1,onClick:m??p,children:m?n.jsx(Al,{size:20}):J?n.jsx(ml,{size:16}):n.jsx(Yu,{size:16})})]}),J&&B&&n.jsx(KR,{children:n.jsx(QR,{children:n.jsx(RM,{milestones:d2(e)})})}),J&&G&&n.jsxs(ZR,{children:[N&&!s&&n.jsx(Fl,{children:$}),N&&!s&&M.length>0&&n.jsx(hL,{children:M.map((ce,se)=>n.jsx(f2,{record:ce},se))}),L&&n.jsx(L2,{role:"status","aria-live":"polite",children:n.jsx(AR,{thread:e,onDecide:g})}),E&&n.jsxs(mp,{children:[N&&C&&n.jsx(ko,{variant:"primary",size:"sm",onClick:()=>ae(wl),children:wl}),N&&n.jsx(ko,{variant:"tertiary",size:"sm",onClick:()=>x("No"),children:"No"}),N&&n.jsx(I2,{variant:"tertiary",size:"sm","data-selected":_||void 0,onClick:()=>{j(!0),x("Other")},children:"Other"}),z&&(k?n.jsx(Ee,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(wn,{size:14}),children:"Saved"}):n.jsx(Ee,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(jo,{size:14}),onClick:()=>{b(e),S(!0)},children:"Save as workflow"}))]})]})]})}function fm({text:e,speed:o=16,onDone:i,instant:s=!1}){const[l,d]=v.useState(!1);return v.useEffect(()=>{d(!1)},[e]),v.useEffect(()=>{s&&(i==null||i())},[s]),s||l?n.jsx(n.Fragment,{children:e}):n.jsx(hp,{text:e,speed:o,onDone:()=>{d(!0),i==null||i()}})}function k2({thread:e,stage:o,onAction:i,onRefinement:s,onSaveWorkflow:l,saved:d=!1,saveIntent:p=!1,onToggleSaveWorkflow:m,savedConversationally:g=!1,onSend:y,replying:x=!1,onStop:b,flat:k=!1}){const S=d||p,[_,j]=v.useState(!1),[N,$]=v.useState(!1),[M]=v.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),[C,z]=v.useState(!1),[R,L]=v.useState(!1),T=v.useRef(null);v.useEffect(()=>{var H;R&&((H=T.current)==null||H.focus())},[R]);const E=d||g||C,{actionable:B,onFollowUp:G,prompt:J,records:W,primaryLabel:K,purple:te}=fp(e,o),ae=B&&!G?cp[e.id]??r2(J).map(H=>({label:H})):void 0,ce=e.status==="resolved"||e.status==="auto_resolved",se=te||ce,Q=H=>{n2(H)?s(H):i(e.id,H)},D=B&&!(ae&&ae.length>0)&&W.length>0?W[0]:void 0;if(se&&!B){const H=h2[e.id],I=_||!H,A=d&&!g&&!C;return n.jsxs(CL,{$divided:!0,children:[H&&n.jsx(jL,{children:n.jsx(fm,{text:H,onDone:()=>j(!0),instant:M})}),I&&!A&&n.jsxs(ca,{$saved:E,"data-saved":E||void 0,children:[n.jsxs(E2,{children:[n.jsx(P2,{"aria-hidden":"true",children:n.jsx(jo,{size:16})}),n.jsx(z2,{children:n.jsx(fm,{text:"Want me to save this as a reusable workflow?",onDone:()=>$(!0),instant:M})})]}),N&&n.jsx(O2,{children:E?n.jsx(ko,{variant:"primary",size:"sm",disabled:!0,leadingArtwork:n.jsx(wn,{size:14}),children:"Saved"}):n.jsx(ko,{variant:"primary",size:"sm",onClick:()=>{z(!0),l(e)},children:"Save workflow"})})]}),I&&A&&n.jsx(C2,{})]})}return n.jsxs(qR,{$flat:k,"data-tone":Ol(e),children:[B&&n.jsxs(j2,{children:[n.jsx(Fl,{children:J}),D&&n.jsx(S2,{children:n.jsx(qn,{size:"md",src:_a(D.avatarSeed),name:D.title,alt:D.title})})]}),ae&&ae.length>0?n.jsx(_2,{tasks:ae}):null,n.jsxs(mp,{children:[B&&K&&n.jsx(ko,{variant:R?"secondary":"primary",size:"sm",onClick:()=>Q(wl),children:wl}),B&&n.jsx(ko,{variant:R?"secondary":"tertiary",size:"sm",onClick:()=>s("No"),children:"No"}),B&&n.jsx(I2,{variant:"tertiary",size:"sm","data-selected":R||void 0,onClick:()=>L(!0),children:"Other"}),B&&!G&&n.jsx(_L,{$trailing:!0,variant:"ghost",size:"sm","aria-pressed":S,"data-on":S||void 0,leadingArtwork:S?n.jsx(wn,{size:14}):n.jsx(jo,{size:14}),onClick:()=>{d||m==null||m(e.id)},children:"Save as future workflow"})]}),B&&R&&n.jsx(kL,{children:n.jsx(b2,{ref:T,compact:!0,onSend:H=>y==null?void 0:y(H),working:x,onStop:b,placeholder:"Tell Ultron what to do…"})})]})}function RR({thread:e,stage:o,expanded:i,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:p,saveIntent:m=!1,saved:g=!1}){const y=Ol(e),x=a2(e.id)||e.assessment;return n.jsxs(WR,{"data-tone":y,$expanded:i,children:[n.jsxs(HR,{$expanded:i,children:[n.jsx(qn,{size:"md",src:sp(e.id),name:xa[e.id],alt:xa[e.id]??""}),n.jsxs(N2,{children:[n.jsx(M2,{children:i2(e)}),x&&n.jsx(R2,{children:x})]})]}),i&&n.jsx(UR,{children:n.jsx(k2,{flat:!0,thread:e,stage:o,onAction:s,onRefinement:l,onSaveWorkflow:d,onToggleSaveWorkflow:p,saveIntent:m,saved:g})})]})}function _2({tasks:e,interactive:o=!0}){return n.jsx(fL,{children:e.map((i,s)=>n.jsx(LR,{task:i,first:s===0,last:s===e.length-1,interactive:o},s))})}function LR({task:e,first:o,last:i,interactive:s=!0}){const[l,d]=v.useState(!1),p=!!e.detail&&s;return n.jsxs(mL,{children:[n.jsx(gL,{"data-first":o||void 0,"data-last":i||void 0,"aria-hidden":"true",children:n.jsx(vL,{})}),n.jsxs(xL,{children:[n.jsxs(yL,{as:p?"button":"div",type:p?"button":void 0,$interactive:p,"aria-expanded":p?l:void 0,onClick:p?()=>d(m=>!m):void 0,children:[n.jsx(A2,{children:e.label}),p&&n.jsx(wL,{"data-open":l||void 0,"aria-hidden":"true",children:n.jsx(bn,{size:14})})]}),l&&p&&n.jsx(bL,{children:e.detail})]})]})}function $R({steps:e,completed:o}){const[i,s]=v.useState(o?e.length:1);v.useEffect(()=>{if(o){s(e.length);return}if(i>=e.length)return;const d=setTimeout(()=>s(p=>p+1),1600);return()=>clearTimeout(d)},[i,e.length,o]);const l=e.slice(0,i);return n.jsx(rL,{role:"status","aria-live":"polite",children:l.map((d,p)=>{const m=!o&&p===i-1,g=p===l.length-1;return n.jsxs(aL,{children:[n.jsxs(iL,{children:[n.jsx(uL,{$done:!m,"aria-hidden":"true",children:m?n.jsx(pL,{children:n.jsx(lt,{mark:"lines",size:36,tone:"auto",state:"active",motionSpeed:2,coreHalo:!1,"aria-label":"In progress"})}):n.jsx(wn,{size:16})}),!g&&n.jsx(sL,{})]}),n.jsxs(lL,{$last:g,children:[n.jsx(cL,{children:d.headline}),n.jsx(dL,{children:d.detail})]})]},p)})})}function AR({thread:e,onDecide:o,analyzed:i,hideDetail:s,hideTrigger:l}){const[d,p]=v.useState(!0);return n.jsxs(n.Fragment,{children:[n.jsxs(XR,{as:"button",type:"button",$interactive:!0,"aria-expanded":d,onClick:()=>p(m=>!m),children:[n.jsx(lt,{mark:"orbit",size:40,tone:"auto",state:i?"idle":"active",coreHalo:!1,"aria-hidden":"true"}),n.jsxs(eL,{children:[n.jsx(tL,{children:i?"Ultron analyzed this event":"Ultron is analyzing this event"}),!s&&n.jsx(nL,{children:e.assessment})]}),n.jsx(JR,{"data-open":d||void 0,"aria-hidden":"true",children:n.jsx(bn,{size:14})})]}),d&&n.jsx($R,{steps:l2(e.id),completed:i}),!i&&!l&&n.jsx($2,{variant:"secondary",size:"sm",onClick:()=>o(e.id),children:"Trigger Needs approval (demo)"})]})}function TR({thread:e,onDecide:o}){return n.jsx($2,{variant:"secondary",size:"sm",onClick:()=>o(e.id),children:"Trigger Needs approval (demo)"})}function Kd(e,o){return{icon:e.icon,headline:e.headline,blocks:e.detail||e.bullets?[{text:e.detail||void 0,bullets:e.bullets}]:void 0,progress:e.progress,avatars:e.avatars,avatarsOnSettle:e.avatarsOnSettle,reached:e.reached,usage:p2(o,_N(e))}}function IR(e,o){const i=p2(o,["read","match","policy","incentive","engage","notify"],"planning");return{icon:"done",headline:"Analyzed the event and shared a plan",blocks:[{bullets:e.map(s=>`${s.headline} — ${s.detail}`)}],usage:i}}function ER(e,o){const i=d2(e),s=e.timeline.filter(b=>b.done).length,l=s>0?Math.min(s,i.length):i.length,d=[IR(l2(e.id),e.id),...i.slice(0,l)],p=d.length;if(o.length===0){const b=d.map(k=>({kind:"activity",milestone:k}));return(e.status==="in_progress"||e.status==="monitoring")&&(Wf[e.id]??[]).map(k=>Kd(k,e.id)).forEach(k=>b.push({kind:"activity",milestone:k})),{items:b,reasoningCount:p}}const m=lp[e.id],g=[(Wf[e.id]??[]).map(b=>Kd(b,e.id)),((m==null?void 0:m.working)??[]).map(b=>Kd(b,e.id))],y=b=>b===1&&m?m.prompt:c2[e.id]??e.recommendation,x=d.slice(0,p).map(b=>({kind:"activity",milestone:b}));return o.forEach((b,k)=>{x.push({kind:"question",text:y(k)}),x.push({kind:"message",text:b}),(g[k]??[]).forEach(S=>x.push({kind:"activity",milestone:S})),x.push({kind:"reply",text:jN(k)})}),{items:x,reasoningCount:p}}function PR({thread:e,outbound:o=[],chat:i=[],replying:s=!1,analyzing:l=!1,actionCard:d,footSlot:p,onCompleteRun:m,saveWorkflowFlagged:g=!1}){const y=e.status==="in_progress"||e.status==="monitoring",x=e.status==="resolved"||e.status==="auto_resolved",{items:b,reasoningCount:k}=ER(e,o),S=l||e.status==="in_progress",[_,j]=v.useState(l?Math.min(1,k):S?k:b.length),[N]=v.useState(()=>["resolved","auto_resolved","workflow_available","unresolved"].includes(e.status)),$=o.length>0||y||x?b.length:k,M=e.status==="in_progress"&&o.length>0,[C,z]=v.useState(0);v.useEffect(()=>{z(0)},[_]),v.useEffect(()=>{if(_>=$)return;const q=b[_],O=b[_-1];if((q==null?void 0:q.kind)==="question"||(q==null?void 0:q.kind)==="message"){const le=setTimeout(()=>j(ge=>ge+1),0);return()=>clearTimeout(le)}if((q==null?void 0:q.kind)==="reply"){if(M)return;const le=setTimeout(()=>j(ge=>ge+1),pm);return()=>clearTimeout(le)}if(M&&(O==null?void 0:O.kind)!=="message")return;const Y=(O==null?void 0:O.kind)==="message"?pm:Yf,de=setTimeout(()=>j(le=>le+1),Y);return()=>clearTimeout(de)},[_,$,M]),v.useEffect(()=>{if(!M)return;const q=O=>{var xe;if(O.key!=="t"&&O.key!=="T"||O.metaKey||O.ctrlKey||O.altKey)return;const Y=O.target instanceof Element?O.target:null;if(Y&&Y.closest('input, textarea, [contenteditable="true"]'))return;const de=b[_-1],le=(de==null?void 0:de.kind)==="activity"?((xe=de.milestone.progress)==null?void 0:xe.length)??0:0;if((de==null?void 0:de.kind)==="activity"&&C<le-1){z(we=>we+1);return}const ge=b[_];(ge==null?void 0:ge.kind)==="activity"?(j(we=>we+1),z(0)):m==null||m()};return window.addEventListener("keydown",q),()=>window.removeEventListener("keydown",q)},[M,_,C,m]);const R=b.slice(0,_),L=[];for(const q of R){if(q.kind==="question"){L.push({type:"question",text:q.text});continue}if(q.kind==="message"){L.push({type:"msg",text:q.text});continue}if(q.kind==="reply"){L.push({type:"reply",text:q.text});continue}const O=L[L.length-1];O&&O.type==="acts"?O.milestones.push(q.milestone):L.push({type:"acts",milestones:[q.milestone]})}const T=_<b.length,E=R.length>0&&R[R.length-1].kind==="activity",B=_>=$,[G,J]=v.useState(!1);v.useEffect(()=>{if(!(B&&E&&(y||l)&&!x)){J(!1);return}J(!0);const q=setTimeout(()=>J(!1),Yf);return()=>clearTimeout(q)},[B,E,_,y,l,x]);const W=(y||l)&&(T||G)&&E;let K=-1;L.forEach((q,O)=>{q.type==="acts"&&(K=O)});const te=[];for(const q of b){if(q.kind!=="activity"){te.push({type:"other"});continue}const O=te[te.length-1];O&&O.type==="acts"?O.milestones.push(q.milestone):te.push({type:"acts",milestones:[q.milestone]})}let ae=-1;te.forEach((q,O)=>{q.type==="acts"&&(ae=O)});const ce=L.findIndex(q=>q.type==="acts"),se=(q,O,Y=O)=>{const de=L[q],le=(l||e.status==="in_progress")&&q===ae,ge=te[q],xe=le&&ge&&ge.type==="acts"?ge.milestones:de.milestones,we=le?de.milestones.length-1:void 0;return n.jsx(g2,{milestones:xe,focusIndex:we,focusBeat:le&&M?C:void 0,typingIndex:q===ae&&W?de.milestones.length-1:void 0,collapsed:q<K,hideActions:Y,running:le,showConnectors:q!==ce,reasoning:q===ce,animateIn:!O&&!N})},Q=[];for(let q=0;q<L.length;q++){const O=L[q];if(O.type==="question"){Q.push({kind:"question",text:O.text});continue}if(O.type==="msg"){Q.push({kind:"msg",text:O.text});continue}if(O.type==="reply"){Q.push({kind:"response",gi:-1,text:O.text});continue}const Y=L[q+1];Y&&Y.type==="reply"?(Q.push({kind:"response",gi:q,text:Y.text}),q++):Q.push({kind:"acts",gi:q})}const H=(l||e.status==="in_progress")&&K>=0||s,I=R.length>0,A=s||y,V=(()=>{for(let q=Q.length-1;q>=0;q--){const O=Q[q];if(O.kind==="acts"||O.kind==="response"&&O.gi>=0)return q}return-1})(),Z=Q.findIndex(q=>q.kind==="question"),oe=Z===ce+1?Z:-1,pe=q=>q.kind==="acts"?er(L[q.gi].milestones):q.kind==="response"?er(q.gi>=0?L[q.gi].milestones:[]):er([]);return n.jsxs(n.Fragment,{children:[Q.map((q,O)=>{var ge,xe;const Y=O===V?d:null;if(q.kind==="question"){if(O===oe)return null;const we=Q[O-1],be=!!we&&(we.kind==="acts"||we.kind==="response")&&O-1!==V,Le=O===Z;return n.jsxs(Zd,{children:[Le?n.jsx(mm,{thread:e,saveWorkflowFlagged:g}):n.jsx(DR,{text:q.text,animate:!N}),be&&n.jsx(sa,{time:pe(we)})]},`q${O}`)}if(q.kind==="msg")return n.jsx(FR,{messages:[q.text],animate:!N},`m${O}`);if(q.kind==="acts"){const we=L[q.gi].milestones,be=((ge=Q[O+1])==null?void 0:ge.kind)==="question",Le=se(q.gi,!1,!!Y||be),Be=O===ce,ze=Y||(Be&&O+1===oe?n.jsx(mm,{thread:e,saveWorkflowFlagged:g}):null);return Be&&ze?n.jsxs(OL,{children:[Le,ze,n.jsx(sa,{time:er(we)})]},`a${O}`):n.jsxs(v.Fragment,{children:[Le,Y&&n.jsxs(Zd,{children:[Y,n.jsx(sa,{time:er(we)})]})]},`a${O}`)}const de=q.gi>=0,le=de?L[q.gi].milestones:[];return n.jsxs(v.Fragment,{children:[n.jsx(ju,{activity:de?se(q.gi,!0):void 0,text:q.text,feedbackTime:Y||((xe=Q[O+1])==null?void 0:xe.kind)==="question"?void 0:er(le),showMark:!1,animateIn:!1}),Y&&n.jsxs(Zd,{children:[Y,n.jsx(sa,{time:er(le)})]})]},`resp${O}`)}),n.jsx(zR,{messages:i,replying:s}),p&&_i.createPortal(I?n.jsxs(TL,{role:A?"status":"img","aria-label":s?"Ultron is replying":H?"Ultron is working":"Ultron",children:[n.jsxs(PL,{"aria-hidden":"true",children:[n.jsx(gm,{$show:H,children:n.jsx(lt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),n.jsx(gm,{$show:!H,children:n.jsx(lt,{mark:"magnetic2d",size:24,tone:"auto",state:A?"active":"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]}),H&&n.jsx(EL,{children:s?"Replying…":n.jsx($M,{})})]}):null,p),V<0&&d]})}function ju({activity:e,text:o,body:i,feedbackTime:s,active:l=!1,showMark:d=!0,animateIn:p=!0}){const m=!!(e||i||s);return n.jsxs(zL,{children:[m&&n.jsxs(DL,{$animate:p,children:[e,i,s&&n.jsx(sa,{time:s})]}),d&&n.jsx(FL,{$animate:p,role:l?"status":"img","aria-label":l?"Ultron is working":"Ultron",children:n.jsx(lt,{mark:"magnetic2d",size:24,tone:"auto",state:l?"active":"idle",coreHalo:!1,"aria-hidden":"true"})})]})}function Qd(){return[{icon:"clock",headline:"Reviewed your message"}]}function zR({messages:e,replying:o=!1}){return!e.length&&!o?null:n.jsx(AL,{children:e.map((i,s)=>i.role==="operator"?n.jsx(D2,{children:n.jsx(B2,{children:n.jsx(W2,{children:i.text})})},s):i.kind==="workflow_saved"?n.jsx(ju,{body:n.jsx(OR,{}),feedbackTime:er(Qd()),showMark:!1},s):n.jsx(ju,{activity:n.jsx(g2,{milestones:Qd(),collapsed:!0,hideActions:!0}),text:i.text,feedbackTime:er(Qd()),showMark:!1},s))})}function OR(){return n.jsx(C2,{})}function C2(){return n.jsxs(ca,{children:[n.jsxs(E2,{children:[n.jsx(P2,{"aria-hidden":"true",children:n.jsx(jo,{size:16})}),n.jsx(z2,{children:"Workflow saved for future use."})]}),n.jsx(O2,{children:n.jsx(ko,{variant:"secondary",size:"sm",trailingArtwork:n.jsx(Al,{size:14}),onClick:()=>{},children:"View workflow"})})]})}function DR({text:e,animate:o=!0}){return n.jsx(NL,{$animate:o,children:e})}function mm({thread:e,saveWorkflowFlagged:o=!1}){const{prompt:i,records:s}=fp(e,0),l=cp[e.id]??r2(i).map(p=>({label:p})),d=!(l&&l.length>0)&&s.length>0?s[0]:void 0;return n.jsxs(ML,{"data-tone":Ol(e),children:[n.jsxs(j2,{children:[n.jsx(Fl,{children:i}),o?n.jsx(yr,{content:"Saved as workflow",children:n.jsx(RL,{"aria-label":"Saved as workflow",children:n.jsx(jo,{size:18})})}):d&&n.jsx(S2,{children:n.jsx(qn,{size:"md",src:_a(d.avatarSeed),name:d.title,alt:d.title})})]}),l&&l.length>0?n.jsx(_2,{tasks:l,interactive:!1}):null]})}function FR({messages:e,animate:o=!0}){return e.length?n.jsx(LL,{children:e.map((i,s)=>n.jsx(D2,{children:n.jsx(B2,{$animate:o,children:n.jsx(W2,{children:i})})},s))}):null}const BR=f.div`
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
`,WR=f.div`
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
`,HR=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  ${e=>e.$expanded&&qe`
    border-bottom: 1px solid var(--color-border-opaque);
  `}
`,UR=f.div`
  padding: var(--space-4);
`,qR=f.div`
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
`,j2=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,S2=f.span`
  flex-shrink: 0;
  display: inline-flex;
`,VR=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  /* Extra breathing room above the title; the bottom stays tight to the body. */
  padding: var(--space-4) 0 var(--space-2);
`,GR=f(Ee)`
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
`,YR=f.button`
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
`,N2=f.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,M2=f.span`
  /* Alloy label / medium: 14px · medium · relaxed · wide tracking */
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,R2=f.span`
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
`,KR=f.div`
  overflow: hidden;
`,QR=f.div`
  padding: var(--space-1) var(--space-4) var(--space-3);
`,ZR=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  /* 8px padding all around for a tight body. A 4px margin all around insets the
     body as a framed panel within the card. */
  padding: var(--space-2);
  margin: var(--space-1);
  border-radius: var(--radius-md);
  background: var(--color-bg-primary);
`,L2=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  font-family: var(--font-sans);
`,XR=f.div`
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
`,JR=f.span`
  display: inline-flex;
  margin-left: auto;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-default);
  &[data-open] { transform: rotate(90deg); }
`;f(L2)`
  padding: var(--space-4);
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
`;const eL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,tL=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,nL=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
`,rL=f.div`
  display: flex;
  flex-direction: column;
`,oL=Se`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,aL=f.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-4);
  animation: ${oL} var(--duration-base) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,iL=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: var(--space-8);
`,sL=f.span`
  flex: 1;
  width: 0;
  margin: var(--space-1) 0;
  border-left: 1.5px dashed var(--color-slate-border-tertiary);
  mix-blend-mode: multiply;
`,lL=f.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  padding-bottom: ${e=>e.$last?"0":"var(--space-4)"};
`,cL=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,dL=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-normal);
  color: var(--color-content-tertiary);
`,uL=f.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  color: ${e=>e.$done?"var(--color-success-content)":"var(--color-content-tertiary)"};
`,pL=f.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  pointer-events: none;
`,$2=f(Ee)`
  align-self: flex-start;
  border-radius: var(--radius-full);
  padding-left: var(--space-3);
  padding-right: var(--space-3);
`,hL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,fL=f.div`
  display: flex;
  flex-direction: column;
`,_l="var(--space-8)",mL=f.div`
  position: relative;
  display: flex;
  align-items: stretch;
  gap: var(--space-3);
`,gL=f.div`
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
  &[data-first]::before { top: calc(${_l} / 2); }
  &[data-last]::before { bottom: calc(100% - ${_l} / 2); }
  &[data-first][data-last]::before { display: none; }
`,vL=f.span`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  margin-top: calc((${_l} - var(--space-2)) / 2);
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-bg-primary);
  border: 1.5px solid var(--color-slate-border-tertiary);
  box-shadow: 0 0 0 var(--space-2) var(--color-bg-primary);
`,xL=f.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`,yL=f.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  min-height: ${_l};
  cursor: ${e=>e.$interactive?"pointer":"default"};

  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-border-focus);
    border-radius: var(--radius-sm);
  }
`,A2=f.span`
  flex: 1;
  min-width: 0;
  text-align: left;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-snug);
  color: var(--color-content-primary);
`,wL=f.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);

  &[data-open] { transform: rotate(90deg); }

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,bL=f.p`
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
`,Fl=f.p`
  margin: 0;
  /* Alloy "Label large" type style */
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,T2=Se`
  from { opacity: 0; transform: translateY(2px); }
  to   { opacity: 1; transform: translateY(0); }
`,mp=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-2);
  transform-origin: left center;
  animation: ${T2} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,kL=f.div`
  animation: ${T2} var(--duration-slow) var(--ease-out);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ko=f(Ee)`
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
`,I2=f(Ee)`
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
`,_L=f(Ee)`
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
`,CL=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);

  ${e=>e.$divided&&`
    border-top: 1px solid var(--color-border-opaque);
    padding-top: var(--space-4);
  `}
`,jL=f.p`
  margin: 0;
  max-width: 80%;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
`,ca=f.div`
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
`,E2=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,P2=f.span`
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
  ${ca}:not([data-saved]):hover & { color: var(--color-content-inverse); }
  ${ca}:not([data-saved]):hover &::after { opacity: 1; }

  /* Saved (settled) card: the glyph quiets to the disabled tone alongside its
     label and button. */
  ${ca}[data-saved] & { color: var(--color-content-disabled); }
`,z2=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);

  /* Saved (settled) card: the label quiets to the disabled tone alongside the
     glyph and button. */
  ${ca}[data-saved] & { color: var(--color-content-disabled); }
`,O2=f(mp)`
  margin-top: 0;
  margin-left: auto;
  flex-wrap: nowrap;
`,SL=Se`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,NL=f.p`
  max-width: 80%;
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-primary);
  animation: ${SL} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the answered question in place, no settle. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,ML=f.div`
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
  ${Fl} { color: var(--color-content-disabled); }
  ${A2} { color: var(--color-content-disabled); }
`,RL=f.span`
  flex-shrink: 0;
  display: inline-flex;
  color: var(--color-content-disabled);
`,LL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
`,D2=f.div`
  display: flex;
  justify-content: flex-end;
`,gp=Se`
  from { opacity: 0; transform: translateY(var(--space-4)); }
  to   { opacity: 1; transform: translateY(0); }
`,F2=Se`
  from { opacity: 0; transform: translateY(calc(-1 * var(--space-3))); }
  to   { opacity: 1; transform: translateY(0); }
`,$L=Se`
  from { opacity: 0; }
  to   { opacity: 1; }
`,B2=f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 80%;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-secondary);
  border-radius: 16px;
  animation: ${gp} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;
  /* A pre-loaded (Done) mount shows the sent bubble in place, no slide-in. */
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,W2=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,AL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-2);
`;f.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--space-3);
`;const TL=f.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  /* Settles DOWN into place when it first appears above the composer. */
  animation: ${F2} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,IL=Se`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.55; }
`,EL=f.span`
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
  animation: ${IL} 1.1s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,PL=f.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,gm=f.span`
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
`,zL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-2);
  /* Reveal the reply's feedback row only while the set is hovered/focused. */
  ${Dl}
`,Zd=f.div`
  display: contents;
  ${Dl}
`,OL=f.div`
  display: flex;
  flex-direction: column;
  ${Dl}

  /* The plan and its decision card read as one gap-less block, but the trailing
     feedback row (thumbs/rerun) gets breathing room so it sits clearly apart
     from the card rather than tucked under its bottom edge. */
  [data-feedback-actions] { margin-top: var(--space-4); }
`,DL=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  animation: ${$L} 380ms var(--ease-out) 160ms both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,FL=f.span`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: var(--space-2);
  padding-top: var(--space-1);
  animation: ${F2} 340ms cubic-bezier(0.16, 1, 0.3, 1) both;
  ${e=>e.$animate===!1&&"animation: none;"}

  @media (prefers-reduced-motion: reduce) { animation: none; }
`;f.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 80%;
  padding: var(--space-1) 0;
  animation: ${gp} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
  animation: ${gp} 460ms cubic-bezier(0.16, 1, 0.3, 1) both;

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
`;const BL={"Coverage Recovery":qr,"Fill Optimization":qr,Recruiting:qr,Users:qr,Attendance:vn,"Attendance Recovery":vn,"Time Off":vn,Scheduling:vn,Compliance:Si,Onboarding:bo,"Payroll Operations":W0,Invoicing:Yr,Reporting:xf,"Marketplace Optimization":xf,Engagement:gl,"Autonomous Operations":Rl},WL=e=>BL[e]??Rl,vm=["Monitoring 142 active shifts","Scanning for coverage risks","Analyzing attendance trends","Optimizing open orders"],HL=2800,UL=200,qL=6,VL=2200,hi=520;function GL({onDetectRisk:e,deckActive:o=!1,deck:i}){const[s,l]=v.useState(0),d=v.useRef(e);d.current=e;const p=v.useRef(new Set),[m,g]=v.useState(!1),y=v.useRef(null);v.useEffect(()=>{const R=setInterval(()=>l(L=>(L+1)%vm.length),HL);return()=>clearInterval(R)},[]);const x=Math.min(qL,Gs.length),[b,k]=v.useState([]),S=v.useRef(0),_=v.useRef(Gs.filter(R=>!R.risk)),j=v.useRef(Gs.filter(R=>R.risk)),N=v.useRef({routine:0,risk:0,sinceRisk:0,gap:0}),$=()=>5+Math.floor(Math.random()*5),M=()=>{const R=N.current,L=j.current;if(L.length>0&&R.sinceRisk>=R.gap)return R.sinceRisk=0,R.gap=$(),L[R.risk++%L.length];R.sinceRisk+=1;const T=_.current;return T.length>0?T[R.routine++%T.length]:L[R.risk++%L.length]},C=R=>R.risk?"risk":Math.random()<.28?"action":"none",z=v.useRef(null);return v.useEffect(()=>{if(Gs.length===0){k([]);return}if(o)return;N.current={routine:0,risk:0,sinceRisk:0,gap:$()},S.current=0;const R=Array.from({length:x},()=>{const E=M();return{key:S.current++,event:E,phase:"in",outcome:C(E),resolved:!0}});if(R.length>0){const E=R[R.length-1];E.resolved=!1,z.current={key:E.key,event:E.event,outcome:E.outcome}}else z.current=null;k(R);const L=[],T=setInterval(()=>{var W;const E=M(),B=S.current++,G=C(E),J=z.current;J&&J.outcome==="risk"&&(g(!0),y.current&&clearTimeout(y.current),y.current=setTimeout(()=>g(!1),2800),p.current.has(J.event.id)||(p.current.add(J.event.id),(W=d.current)==null||W.call(d,J.event))),z.current={key:B,event:E,outcome:G},k(K=>{const te=K.filter(se=>se.phase!=="leaving"),ae=te.length>=x?te[0].key:null;return[...K.map(se=>se.key===ae?{...se,phase:"leaving"}:J&&se.key===J.key&&!se.resolved?{...se,resolved:!0}:se),{key:B,event:E,phase:"entering",outcome:G,resolved:!1}]}),L.push(setTimeout(()=>{k(K=>K.map(te=>te.key===B?{...te,phase:"in"}:te))},40)),L.push(setTimeout(()=>{k(K=>K.filter(te=>te.phase!=="leaving"))},hi))},VL);return()=>{clearInterval(T),L.forEach(clearTimeout),y.current&&clearTimeout(y.current)}},[x,o]),n.jsxs(YL,{children:[n.jsxs(KL,{children:[n.jsx(QL,{children:n.jsx(lt,{mark:"circle",size:UL,tone:"auto",state:"active",coreGradient:m,"aria-label":"Ultron"})}),n.jsx(ZL,{children:"Ultron"}),n.jsx(XL,{role:"status","aria-live":"polite",children:n.jsxs(e$,{children:[n.jsx(t$,{children:vm[s]}),n.jsxs(n$,{"aria-hidden":"true",children:[n.jsx("span",{children:"."}),n.jsx("span",{children:"."}),n.jsx("span",{children:"."})]})]},s)})]}),o?n.jsx(o$,{children:i},"deck"):b.length>0&&n.jsx(r$,{"aria-label":"Live event feed",children:b.map(R=>{const L=WL(R.event.capability);return n.jsx(a$,{"data-phase":R.phase,"aria-hidden":R.phase==="leaving"||void 0,children:n.jsx(i$,{children:n.jsxs(s$,{"data-outcome":R.resolved?R.outcome:"pending",children:[n.jsxs(l$,{children:[n.jsx(c$,{"aria-hidden":"true",children:n.jsx(L,{size:16})}),n.jsxs(d$,{children:[n.jsx(m$,{children:R.event.capability}),n.jsx(g$,{children:R.event.title})]})]}),n.jsx(u$,{children:R.resolved?R.outcome==="risk"?n.jsxs(n.Fragment,{children:[n.jsx(lt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)",coreHalo:!1,"aria-hidden":"true"}),n.jsx(p$,{children:"Risk detected"})]}):R.outcome==="action"?n.jsxs(n.Fragment,{children:[n.jsx(lt,{mark:"pulse",size:20,tone:"auto",state:"active",color:"var(--color-blue-content-primary, var(--color-slate-content-secondary))",coreHalo:!1,"aria-hidden":"true"}),n.jsx(f$,{children:"Action required"})]}):n.jsx(h$,{children:"No action needed"}):n.jsx(lt,{mark:"magnetic2d",size:20,tone:"auto",state:"active","aria-label":"Analyzing"})})]})})},R.key)})},"feed")]})}const YL=f.div`
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
`,vp=Se`
  from { opacity: 0; transform: translateY(var(--space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,KL=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  animation: ${vp} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,QL=f.div`
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
`,ZL=f.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,XL=f.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  min-height: var(--space-4);
`,JL=Se`
  from { opacity: 0; transform: translateY(var(--space-2)); }
  to   { opacity: 1; transform: translateY(0); }
`,e$=f.span`
  display: inline-flex;
  align-items: baseline;
  animation: ${JL} var(--duration-slow) var(--ease-out);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,t$=f.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,H2=Se`
  0%, 100% { opacity: 0.2; }
  50%      { opacity: 1; }
`,n$=f.span`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);

  & > span {
    animation: ${H2} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`,r$=f.div`
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
  animation: ${vp} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  animation-delay: 90ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,o$=f.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  animation: ${vp} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,a$=f.div`
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transform: scale(1);
  transition:
    grid-template-rows ${hi}ms var(--ease-out, ease),
    opacity ${hi}ms var(--ease-out, ease),
    transform ${hi}ms var(--ease-out, ease);

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
    transition: opacity ${hi}ms linear;
    &[data-phase='entering'],
    &[data-phase='leaving'] {
      transform: none;
    }
  }
`,i$=f.div`
  overflow: hidden;
  padding-bottom: var(--space-3);
`,s$=f.div`
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
`,l$=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,c$=f.span`
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
`,d$=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,u$=f.div`
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
    animation: ${H2} 1.2s ease-in-out infinite;
  }
  & > span:nth-child(2) { animation-delay: 0.15s; }
  & > span:nth-child(3) { animation-delay: 0.3s; }

  @media (prefers-reduced-motion: reduce) {
    & > span { animation: none; }
  }
`;const p$=f.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-orange-content-secondary, var(--color-orange-content-tertiary));
  white-space: nowrap;
`,h$=f.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-regular);
  color: var(--color-slate-content-tertiary);
  white-space: nowrap;
`,f$=f.span`
  margin-left: -9px;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  color: var(--color-blue-content-primary, var(--color-slate-content-secondary));
  white-space: nowrap;
`,m$=f.span`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  text-transform: none;
  color: var(--color-slate-content-tertiary);
`,g$=f.span`
  font-size: var(--text-sm);
  color: var(--color-slate-content-secondary);
`,v$=5e3,x$=5,dl=320,y$=e=>e.status==="needs_approval"||e.status==="recommended";function w$({threads:e,stageById:o,onAction:i,onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,pendingWorkflowIds:p,savedWorkflowIds:m,onReveal:g,onClose:y}){const[x]=v.useState(()=>e.filter(y$).map((L,T)=>({t:L,index:T})).sort((L,T)=>va[L.t.severity]-va[T.t.severity]||L.index-T.index).slice(0,x$).map(({t:L})=>L.id)),[b,k]=v.useState(1),[S,_]=v.useState(new Set),[j,N]=v.useState(new Set),$=v.useRef(new Map);v.useEffect(()=>{if(b>=x.length)return;const L=setTimeout(()=>k(T=>T+1),v$);return()=>clearTimeout(L)},[b,x.length]),v.useEffect(()=>{const L=T=>{T.key==="Escape"&&y()};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[y]),v.useEffect(()=>{const L=$.current;return()=>{L.forEach(T=>clearTimeout(T))}},[]);const M=x.findIndex(L=>!S.has(L));v.useEffect(()=>{if(x.length>0&&M===-1){const L=setTimeout(y,260);return()=>clearTimeout(L)}},[M,x.length,y]);const C=Math.max(b,M+1);v.useEffect(()=>{x.slice(0,C).forEach(L=>g==null?void 0:g(L))},[C]);const z=(L,T)=>{N(B=>new Set(B).add(L.id));const E=setTimeout(()=>{N(B=>{const G=new Set(B);return G.delete(L.id),G}),_(B=>new Set(B).add(L.id)),$.current.delete(L.id),i(L.id,T)},dl);$.current.set(L.id,E)},R=x.length-S.size;return n.jsxs(b$,{role:"region","aria-label":"New cases",children:[n.jsxs(_$,{children:[n.jsx(Yt,{children:"Needs your decision"}),n.jsx(ya,{children:R}),n.jsx(C$,{}),n.jsx(Ee,{variant:"ghost",size:"xs",iconOnly:!0,"aria-label":"Dismiss (Esc)",onClick:y,children:n.jsx(gi,{size:16})})]}),n.jsx(k$,{children:n.jsx(j$,{children:x.slice(0,C).map((L,T)=>{if(S.has(L))return null;const E=e.find(B=>B.id===L);return E?n.jsx(N$,{"data-exiting":j.has(L)||void 0,children:n.jsx(RR,{thread:E,stage:o[L]??0,expanded:T===M,onAction:(B,G)=>z(E,G),onRefinement:s,onSaveWorkflow:l,onToggleSaveWorkflow:d,saveIntent:p.includes(L),saved:m.includes(L)})},L):null})})})]})}const b$=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  flex: 1;
  min-height: 0;
  width: 100%;
  /* The deck lives inside the landing Stage (which centers its text); reset to
     left so card titles / subtitles / prompts read as a normal left-aligned card. */
  text-align: left;
`,k$=f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* Bottom dissolve so a long stack fades into the page foot as it scrolls. */
  -webkit-mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
          mask-image: linear-gradient(to bottom, #000 0, #000 calc(100% - var(--space-8)), transparent 100%);
`,_$=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,C$=f.div`
  flex: 1;
`,j$=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,S$=Se`
  from { opacity: 0; transform: translateY(var(--space-4)) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,N$=f.div`
  animation: ${S$} var(--duration-slow, 420ms) var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  transition:
    opacity ${dl}ms var(--ease-out, ease),
    transform ${dl}ms var(--ease-out, ease);

  &[data-exiting] {
    opacity: 0;
    transform: translateY(calc(-1 * var(--space-3))) scale(0.98);
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: opacity ${dl}ms linear;
    &[data-exiting] { transform: none; }
  }
`,M$={new:["analyzing","needs_approval","recommended"],live:["analyzing","needs_approval","recommended"],working:["in_progress","monitoring"],done:["resolved","auto_resolved","workflow_available","unresolved"]},xm={new:"Nothing new needs your attention right now.",live:"Nothing needs your attention right now.",working:"Ultron isn’t actively working anything right now.",done:"No completed cases yet."},R$=["new","working","done"],L$=280;function $$({threads:e,stageById:o,section:i,analyzedIds:s,outboundByThread:l,chatByThread:d,selectedId:p,onDecide:m,onAction:g,onCompleteRun:y,onRefinement:x,onSaveWorkflow:b,pendingWorkflowIds:k,onToggleSaveWorkflow:S,savedWorkflowIds:_,onSend:j,replyingIds:N,onStop:$,onClose:M,onDetectRisk:C,onRevealNew:z}){const[R,L]=v.useState(!1),T=()=>{R||(L(!0),window.setTimeout(()=>{L(!1),M()},L$))},[E,B]=v.useState(!1);v.useEffect(()=>{if(i!=="live"){B(!1);return}const O=Y=>{if(Y.key!=="t"&&Y.key!=="T"||Y.metaKey||Y.ctrlKey||Y.altKey)return;const de=Y.target instanceof Element?Y.target:null;de&&de.closest('input, textarea, [contenteditable="true"]')||B(le=>!le)};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[i]);const G=(O,Y)=>(O.t.status==="analyzing"?1:0)-(Y.t.status==="analyzing"?1:0)||va[O.t.severity]-va[Y.t.severity]||O.index-Y.index,J=e.map((O,Y)=>({t:O,index:Y})).filter(({t:O})=>M$[i].includes(O.status)).sort(G).map(({t:O})=>O.id),[W,K]=v.useState(()=>p??null),te=v.useRef({}),ae=v.useRef(null),ce=O=>{var Y;O==="Other"&&((Y=ae.current)==null||Y.focus()),x(O)},se=v.useRef(null),Q=v.useRef(null),[D,H]=v.useState(null),I=v.useRef(void 0);v.useEffect(()=>{var O;if(I.current===void 0){I.current=p;return}!p||p===I.current||(I.current=p,K(p),(O=te.current[p])==null||O.scrollIntoView({behavior:"smooth",block:"start"}))},[p]);const A=R$.includes(i),V=A?p&&J.includes(p)?p:J[0]??null:null;v.useEffect(()=>{var Te;const O=se.current,Y=Q.current;if(!O||!Y)return;const le=((Te=window.matchMedia)==null?void 0:Te.call(window,"(prefers-reduced-motion: reduce)").matches)?"auto":"smooth",ge=160;let xe=!0,we=O.scrollHeight;const be=()=>{xe=O.scrollHeight-O.scrollTop-O.clientHeight<=ge};O.addEventListener("scroll",be,{passive:!0});let Le=0;const Be=()=>{Le=performance.now()};O.addEventListener("pointerdown",Be,{passive:!0});const ze=new ResizeObserver(()=>{const Ge=O.scrollHeight,Ve=performance.now()-Le<500;Ge>we+1&&xe&&!Ve&&O.scrollTo({top:Ge,behavior:le}),we=Ge});return ze.observe(Y),()=>{O.removeEventListener("scroll",be),O.removeEventListener("pointerdown",Be),ze.disconnect()}},[V,i]),v.useEffect(()=>{if(!A||!V)return;const O=se.current;if(!O)return;const Y=()=>O.scrollTo({top:O.scrollHeight,behavior:"auto"}),de=requestAnimationFrame(Y),le=[80,240,480].map(ge=>window.setTimeout(Y,ge));return()=>{cancelAnimationFrame(de),le.forEach(clearTimeout)}},[V,A]);const Z=V?e.find(O=>O.id===V)??null:null,oe=!!Z&&(["needs_approval","recommended","unresolved","resolved","auto_resolved","monitoring"].includes(Z.status)||t2(Z)),pe=oe&&Z?Z:null,q=!(oe&&Z&&["needs_approval","recommended","unresolved","monitoring"].includes(Z.status))||!!(Z!=null&&Z.analysisResult);return i==="live"?n.jsx(ym,{$static:!0,children:n.jsx(GL,{onDetectRisk:C,deckActive:E,deck:E?n.jsx(w$,{threads:e,stageById:o,onAction:g,onRefinement:ce,onSaveWorkflow:b,onToggleSaveWorkflow:S,pendingWorkflowIds:k,savedWorkflowIds:_,onReveal:z,onClose:()=>B(!1)}):null})},"live"):n.jsxs(ym,{$closing:R,children:[n.jsx(I$,{ref:se,children:A?n.jsx(wm,{ref:Q,children:V===null?n.jsx(bm,{role:"status",children:xm[i]}):(()=>{const O=e.find(be=>be.id===V);if(!O)return null;const Y=O.status==="analyzing",de=O.status==="resolved"||O.status==="auto_resolved",le=O.status==="in_progress",ge=O.status==="needs_approval"||O.status==="recommended",xe=O.status==="monitoring",we=O.status==="workflow_available";return n.jsxs(n.Fragment,{children:[n.jsx(D$,{children:n.jsx(hm,{thread:O,stage:o[O.id]??0,expanded:le?!1:q,detachActionable:oe,detachAnalyzing:Y,detachTrail:de||we,onToggle:()=>{},onClose:T,onDecide:m,onAction:g,onRefinement:ce,onSaveWorkflow:b},O.id)}),(Y||ge||le||de||xe||we)&&n.jsx(PR,{thread:O,outbound:l[O.id]??[],chat:d[O.id]??[],replying:N.includes(O.id),analyzing:Y,footSlot:D,onCompleteRun:()=>y(O.id),saveWorkflowFlagged:k.includes(O.id)||_.includes(O.id),actionCard:pe&&pe.id===O.id?n.jsx(k2,{thread:pe,stage:o[pe.id]??0,onAction:g,onRefinement:ce,onSaveWorkflow:b,saveIntent:k.includes(pe.id),onToggleSaveWorkflow:S,saved:_.includes(pe.id),savedConversationally:(d[pe.id]??[]).some(be=>be.kind==="workflow_saved"),onSend:be=>j(pe.id,be),replying:N.includes(pe.id),onStop:()=>$(pe.id)},`action-${pe.id}`):void 0},O.id)]})})()}):n.jsx(wm,{ref:Q,children:J.length===0?n.jsx(bm,{role:"status",children:xm[i]}):J.map(O=>{const Y=e.find(de=>de.id===O);return Y?n.jsx(O$,{ref:de=>{te.current[O]=de},children:n.jsx(hm,{thread:Y,stage:o[O]??0,expanded:W===O,onToggle:()=>K(de=>de===O?null:O),onDecide:m,onAction:g,onRefinement:x,onSaveWorkflow:b})},O):null})})}),A&&V&&Z&&n.jsx(E$,{children:n.jsxs(P$,{children:[n.jsx(z$,{ref:H}),Z.status==="analyzing"&&!s.includes(Z.id)&&n.jsx(TR,{thread:Z,onDecide:m}),n.jsx(b2,{ref:ae,onSend:O=>j(V,O),working:N.includes(V),onStop:()=>$(V),placeholder:GS(Z.status,N.includes(V))},`composer-${V}`)]})})]},"feed")}const A$=Se`
  from { opacity: 1; transform: translateY(0)            scale(1);    }
  to   { opacity: 0; transform: translateY(var(--space-4)) scale(0.98); }
`,T$=Se`
  from { opacity: 0; transform: translateY(var(--space-3)) scale(0.99); }
  to   { opacity: 1; transform: translateY(0)            scale(1);    }
`,ym=f.div`
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
    animation: ${T$} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) both;
  `}

  ${e=>e.$closing&&qe`
    animation: ${A$} 280ms var(--ease-out, cubic-bezier(0.4, 0, 0.2, 1)) forwards;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,I$=f.div`
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
`,E$=f.div`
  flex-shrink: 0;
  padding: var(--space-6) var(--space-5) var(--space-5);
`,P$=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 720px;
  margin: 0 auto;
`,z$=f.div`
  display: flex;
  &:empty { display: none; }
`,wm=f.div`
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
`,O$=f.div`
  scroll-margin-top: var(--space-5);
`,D$=f.div`
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
`,bm=f.div`
  padding: var(--space-12) var(--space-4);
  text-align: center;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`;function F$({messages:e,replying:o,onSend:i}){const[s,l]=v.useState(""),d=v.useRef(null);v.useEffect(()=>{var y;(y=d.current)==null||y.scrollIntoView({block:"end",behavior:"smooth"})},[e,o]);const p=s.trim().length>0&&!o,m=e.length===0,g=()=>{const y=s.trim();!y||o||(i(y),l(""))};return n.jsxs(B$,{children:[n.jsx(W$,{children:m?n.jsxs(H$,{children:[n.jsx(U$,{"aria-hidden":"true",children:n.jsx(lt,{mark:"circle",size:96,tone:"auto",state:"active","aria-label":"Ultron"})}),n.jsx(q$,{children:"New page"}),n.jsx(V$,{children:"Ask Ultron to set something up, look into a risk, or draft a change."})]}):n.jsxs(G$,{children:[e.map((y,x)=>n.jsx(km,{"data-from":y.role,children:n.jsx(Y$,{"data-from":y.role,children:y.text})},x)),o&&n.jsx(km,{"data-from":"ultron",children:n.jsxs(Q$,{"aria-label":"Ultron is replying",children:[n.jsx(Xd,{}),n.jsx(Xd,{}),n.jsx(Xd,{})]})}),n.jsx("div",{ref:d})]})}),n.jsx(Z$,{children:n.jsxs(X$,{onSubmit:y=>{y.preventDefault(),g()},children:[n.jsx(J$,{rows:1,value:s,placeholder:"Ask Ultron anything…","aria-label":"Message Ultron",onChange:y=>l(y.target.value),onKeyDown:y=>{y.key==="Enter"&&!y.shiftKey&&(y.preventDefault(),g())}}),n.jsx(eA,{children:n.jsx(wa,{state:p?"ready":"disabled-invalid",onSend:g})})]})})]})}const B$=f.div`
  display: flex;
  flex-direction: column;
  /* Own the full height and cancel the shell's ContentMain bottom padding (as the
     event page's Page does) so the composer snaps to the very foot. */
  height: calc(100% + var(--space-8));
  margin-bottom: calc(-1 * var(--space-8));
  min-height: 0;
  overflow: hidden;
  background: var(--color-bg-primary);
`,W$=f.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,H$=f.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  padding: var(--space-8) var(--space-6);
  text-align: center;
`,U$=f.span`
  display: grid;
  place-items: center;
  width: 96px;
  height: 96px;
`,q$=f.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,V$=f.p`
  margin: 0;
  max-width: 420px;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,G$=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
`,km=f.div`
  display: flex;
  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }
`,Y$=f.div`
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
`,K$=Se`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,Q$=f.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-2) 0;
`,Xd=f.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${K$} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Z$=f.div`
  flex-shrink: 0;
  padding: var(--space-4) var(--space-6) var(--space-6);
  display: flex;
  justify-content: center;
`,X$=f.form`
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
`,J$=f.textarea`
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
`,eA=f.div`
  flex-shrink: 0;
  --composer-btn-size: var(--space-8);
  --composer-btn-icon-attach: var(--space-4);
  --composer-btn-icon-send: var(--space-4);
`,tA={"Shift Drop Recovery":{new:"Shift Replacement Needed",working:"Finding Shift Replacement",done:"Shift Replacement Found"},"Shift Release Recovery":{new:"Released Shift Needs Filling",working:"Filling Released Shift",done:"Released Shift Filled"},"Time-Off Coverage Check":{new:"Time-Off Decision Needed",working:"Checking Time-Off Coverage",done:"Time-Off Handled"},"Document Filing":{new:"Document Needs Filing",working:"Filing Document",done:"Document Filed"},"New Lead Screening":{new:"New Lead to Screen",working:"Screening New Lead",done:"Lead Screened"},"Shift Offer":{new:"Shift Ready to Offer",working:"Offering Shift",done:"Shift Offered"},"Candidate Onboarding":{new:"Onboarding to Start",working:"Onboarding Candidate",done:"Candidate Onboarded"},"Missed Clock-In":{new:"Missed Clock-In to Check",working:"Checking Missed Clock-In",done:"Clock-In Resolved"},"Informal Cancellation":{new:"Cancellation Needs Coverage",working:"Covering Cancellation",done:"Cancellation Covered"},"Bulk Fill":{new:"Shifts Need Filling",working:"Filling Shifts",done:"Shifts Filled"},"Open Timesheet":{new:"Timesheet Needs Fixing",working:"Fixing Timesheet",done:"Timesheet Fixed"},"Invoice Roll-Up":{new:"Charge Needs Billing",working:"Adding Charge to Invoice",done:"Charge Billed"},"Schedule Confirmation":{new:"Schedule Needs Confirming",working:"Confirming Schedule",done:"Schedule Confirmed"},"Birthday Greeting":{new:"Birthday to Send",working:"Sending Birthday Wish",done:"Birthday Sent"},"Scheduled Report":{new:"Report Needs Publishing",working:"Publishing Report",done:"Report Published"},"Clock-In Approval":{new:"Clock-In Needs Approval",working:"Approving Clock-In",done:"Clock-In Approved"},"Profile Update":{new:"Profile Needs Updating",working:"Updating Profile",done:"Profile Updated"},"Autonomous Fill":{new:"Auto-Fill Needs Confirming",working:"Confirming Auto-Fill",done:"Shift Auto-Filled"},"Invoice Reconciliation":{new:"Payment Needs Reconciling",working:"Reconciling Payment",done:"Payment Reconciled"},"Credential Lapse":{new:"Expired Credential to Fix",working:"Renewing Credential",done:"Credential Renewed"}};function _m(e,o){const i=tA[e];return i?o==="done"?i.done:o==="new"?i.new:i.working:e}const Su=32;function nA({onNew:e}){return n.jsxs(rA,{children:[n.jsx(oA,{"aria-hidden":"true",children:n.jsx(lt,{mark:"circle",size:Su,tone:"auto",state:"active","aria-label":"Ultron"})}),n.jsx(aA,{children:"Ultron"}),n.jsx(iA,{role:"button",tabIndex:0,"aria-label":"New page",onClick:o=>{o.stopPropagation(),e==null||e()},onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),o.stopPropagation(),e==null||e())},children:n.jsx(So,{size:16})})]})}const rA=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  min-width: 0;
  font-family: var(--font-sans);
`,oA=f.span`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: ${Su}px;
  height: ${Su}px;
`,aA=f.span`
  min-width: 0;
  flex: 1;
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--color-content-primary);
`,iA=f.span`
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
`,sA=45;function lA({text:e,className:o}){const[i,s]=v.useState(0);v.useEffect(()=>{if((()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})()){s(e.length);return}s(0);let p=0;const m=setInterval(()=>{p+=1,s(p),p>=e.length&&clearInterval(m)},sA);return()=>clearInterval(m)},[e]);const l=i>=e.length;return n.jsxs(cA,{className:o,children:[e.slice(0,i),!l&&n.jsx(uA,{"aria-hidden":"true",children:"|"})]})}const cA=f.span`
  white-space: nowrap;
`,dA=Se`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,uA=f.span`
  display: inline-block;
  margin-left: 1px;
  font-weight: var(--font-weight-regular);
  animation: ${dA} 1s steps(1) infinite;

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`,Jd=[{tag:"Pattern",title:"Monday night call-outs spike",detail:"RN call-outs run ~40% higher on Sunday→Monday nights; pre-stage replacements earlier."},{tag:"Worker",title:"Sarah Kim — reliable backfill",detail:"Accepts last-minute RN shifts within commute radius; 94% match on coverage cases."},{tag:"Preference",title:"Notify managers before outreach",detail:"This org prefers a manager heads-up before Ultron contacts replacement candidates."},{tag:"Policy",title:"Overtime ceiling = $4,200/wk",detail:"Rebalance schedules before projected overtime crosses the weekly budget threshold."},{tag:"Workflow",title:"Auto call-out recovery",detail:"Saved from the Maria Lopez case — runs the recovery playbook end-to-end overnight."}];function pA(){const e=v.useMemo(()=>["All",...Array.from(new Set(Jd.map(l=>l.tag)))],[]),[o,i]=v.useState("All"),s=o==="All"?Jd:Jd.filter(l=>l.tag===o);return n.jsx(hA,{children:n.jsxs(fA,{children:[n.jsxs(mA,{children:[n.jsx(lt,{mark:"circle",size:40,tone:"auto",state:"active","aria-label":"Ultron"}),n.jsxs(gA,{children:[n.jsx(vA,{children:"Memory"}),n.jsx(xA,{children:"What Ultron has learned and carries between sessions."})]})]}),n.jsx(yA,{role:"tablist","aria-label":"Filter memories by category",children:e.map(l=>n.jsx(wA,{type:"button",role:"tab","aria-selected":o===l,$active:o===l,onClick:()=>i(l),children:l},l))}),n.jsx(bA,{children:s.map((l,d)=>n.jsx(kA,{children:n.jsxs(_A,{children:[n.jsx(CA,{children:l.title}),n.jsx(jA,{children:l.detail})]})},d))})]})})}const hA=f.div`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
  padding: var(--space-5);
  font-family: var(--font-sans);
  color: var(--color-content-primary);
`,fA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`,mA=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,gA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,vA=f.h1`
  margin: 0;
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug);
`,xA=f.p`
  margin: 0;
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,yA=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,wA=f.button`
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
`,bA=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`,kA=f.div`
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-lg);
  background: var(--color-bg-primary);
`,_A=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,CA=f.span`
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,jA=f.span`
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
`;const Nu=[{id:"employees",label:"Employees",icon:n.jsx(qr,{size:16})},{id:"shifts",label:"Shifts",icon:n.jsx(vn,{size:16})},{id:"locations",label:"Locations",icon:n.jsx(Uu,{size:16})},{id:"timesheets",label:"Timesheets",icon:n.jsx(bo,{size:16})},{id:"credentials",label:"Credentials",icon:n.jsx(Si,{size:16})}];f.div`
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
`;function SA({collectionId:e}){const o=Nu.find(i=>i.id===e)??Nu[0];return n.jsxs(NA,{children:[n.jsxs(MA,{children:[n.jsx(RA,{children:o.label}),n.jsx(ya,{children:"Account database"})]}),n.jsxs(LA,{role:"status",children:[n.jsx($A,{"aria-hidden":"true",children:n.jsx(O0,{size:24})}),n.jsxs(AA,{children:[o.label," — demo stub"]}),n.jsxs(TA,{children:["Connect a data source to browse ",o.label.toLowerCase(),". This Account database surface is a placeholder for the demo."]})]})]})}const NA=f.div`
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
`,MA=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,RA=f.h1`
  margin: 0;
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
`,LA=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-16) var(--space-6);
  border: 1px dashed var(--color-border-opaque);
  border-radius: var(--radius-xl);
  text-align: center;
`,$A=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-12);
  height: var(--space-12);
  border-radius: var(--radius-full);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,AA=f.div`
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-secondary);
`,TA=f.div`
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  max-width: 360px;
`,Cm=72,jm=.58;function Rn(e){const o=Math.sin(e*127.1+311.7)*43758.5453;return o-Math.floor(o)}function Sm(e,o,i,s){const l=getComputedStyle(o).getPropertyValue(i).trim();if(!l)return s;e.fillStyle="#000",e.fillStyle=l;const d=e.fillStyle;if(d.startsWith("#")){const m=d.slice(1),g=parseInt(m.length===3?m.split("").map(y=>y+y).join(""):m,16);return(g>>16&255)+","+(g>>8&255)+","+(g&255)}const p=d.match(/[\d.]+/g);return p&&p.length>=3?`${+p[0]},${+p[1]},${+p[2]}`:s}const IA=e=>{const[o,i,s]=e.split(",").map(Number);return(.299*o+.587*i+.114*s)/255};function U2({links:e=0}){const o=v.useRef(null),i=v.useRef(0),s=v.useRef(e);return s.current=Math.max(0,Math.min(1,e)),v.useEffect(()=>{const l=o.current;if(!l)return;const d=l.getContext("2d");if(!d)return;const p=Math.min(2,window.devicePixelRatio||1);let m=0,g=0;const y=()=>{m=l.clientWidth,g=l.clientHeight,l.width=Math.max(2,Math.round(m*p)),l.height=Math.max(2,Math.round(g*p)),d.setTransform(p,0,0,p,0,0)};y();const x=new ResizeObserver(y);x.observe(l);const b=Sm(d,l,"--color-bg-primary","255,255,255"),k=IA(b)<.5,S=Sm(d,l,"--color-content-tertiary",k?"148,163,184":"71,85,105"),_=Array.from({length:Cm},(R,L)=>{const T=L%3===0,E=T?1-.5*Math.pow(Rn(L*3.1),1.6):Rn(L*3.1),B=T?.5*Math.pow(Rn(L*5.7),1.6):Rn(L*5.7);return{bx:E,by:B,vx:(Rn(L*7.3)-.5)*.008,vy:(Rn(L*9.9)-.5)*.008,wA:6+Rn(L*4.7)*10,wS:.25+Rn(L*6.1)*.5,wP:Rn(L*8.2)*6.2832,r:.8+Rn(L*2.3)*1.6,twS:.8+Rn(L)*1.4,twP:Rn(L*11.4)*6.2832}}),j=(R,L)=>{const T=((R.bx+R.vx*L)%1+1)%1,E=((R.by+R.vy*L)%1+1)%1,B=T-.5,G=Math.abs(B)*2,J=G<1e-4?1:(jm+(1-jm)*G)/G;return{x:(.5+B*J)*m+Math.cos(L*R.wS+R.wP)*R.wA,y:E*g+Math.sin(L*R.wS*.8+R.wP)*R.wA}},N=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),$=R=>{i.current+=(s.current-i.current)*.04,Math.abs(i.current-s.current)<.001&&(i.current=s.current),d.clearRect(0,0,m,g);const L=_.map(T=>j(T,R));for(let T=0;T<Cm;T++){const E=_[T],B=.35+.65*(.5+.5*Math.sin(R*E.twS+E.twP)),G=.82+i.current*.18;d.fillStyle="rgba("+S+","+B*G*(k?.55:.42)+")",d.beginPath(),d.arc(L[T].x,L[T].y,E.r*(.7+.3*B),0,6.2832),d.fill()}};if(N)return i.current=s.current,$(1.15),()=>x.disconnect();$(1.15);let M=0;const C=performance.now(),z=R=>{$(1.15+(R-C)/1e3),M=requestAnimationFrame(z)};return M=requestAnimationFrame(z),()=>{cancelAnimationFrame(M),x.disconnect()}},[]),n.jsx(EA,{"aria-hidden":"true",children:n.jsx("canvas",{ref:o})})}const EA=f.div`
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
`,PA=f.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
`,Ys=f.div`
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
`,Nm=.025,ii=560,si=480,zA=260,OA=.08,DA=.18,FA=.06,BA=350,WA=9,ul=5,Mm=360,HA=560,UA=.055,qA=.03,li=320,VA=.84,Mu=ul+1,pl=[];for(let e=0;e<Mu;e++)for(let o=e+1;o<Mu;o++)pl.push([e,o]);const Rm=(e,o)=>(e*WA+80*Math.sin(e*.23+o)+50*Math.sin(e*.071+o*1.7)+720)%360,Ks=(e,o)=>{const i=(s,l)=>`${(50+16*Math.sin(e*s+l+o)).toFixed(1)}%`;return`${i(.9,0)} ${i(1.3,2.1)} ${i(1.1,4.2)} ${i(.8,1.3)} / ${i(1.2,3.1)} ${i(.7,.6)} ${i(1.4,5)} ${i(1,2.4)}`},Lm=e=>(e=Math.max(0,Math.min(1,e)),e*e*(3-2*e)),eu=[{nx:-1,ny:0},{nx:1,ny:0},{nx:0,ny:-1},{nx:0,ny:1}];function q2(){const e=v.useRef(null),o=v.useRef(null),i=v.useRef([]),s=v.useRef([]),l=v.useRef([]);return v.useEffect(()=>{const d=(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}})(),p=e.current,m=o.current;if(!p||!m)return;const g=Array.from({length:4},()=>Math.random()*Math.PI*2),y=()=>Math.random()*Math.PI*2,x=Array.from({length:ul},()=>({size:Mm+Math.random()*(HA-Mm),ax:.3+Math.random()*.16,ay:.3+Math.random()*.16,sx1:.05+Math.random()*.07,px1:y(),sx2:.11+Math.random()*.09,px2:y(),sy1:.05+Math.random()*.07,py1:y(),sy2:.11+Math.random()*.09,py2:y(),bs:.12+Math.random()*.14,bp:y(),mp:y(),cs:.4+Math.random()*2.6}));x.forEach((T,E)=>{const B=s.current[E];B&&(B.style.width=`${T.size.toFixed(0)}px`,B.style.height=`${T.size.toFixed(0)}px`)});const b=(T,E,B)=>{T.style.setProperty("--glow-a",`hsl(${Rm(E,g[0]+B).toFixed(1)} 85% 62% / 0.9)`),T.style.setProperty("--glow-b",`hsl(${Rm(E,g[1]+B*1.3).toFixed(1)} 85% 58% / 0.8)`),T.style.setProperty("--glow-cx",`${(35+14*Math.sin(E*.4+g[2]+B)).toFixed(1)}%`),T.style.setProperty("--glow-cy",`${(35+14*Math.cos(E*.31+g[3]+B)).toFixed(1)}%`)},k=(T,E,B)=>{const G=new Array(Mu).fill(null);for(let J=0;J<ul;J++){const W=x[J],K=s.current[J];if(!K)continue;const te=E*(.5+W.ax*(.68*Math.sin(T*W.sx1+W.px1)+.32*Math.sin(T*W.sx2+W.px2))),ae=B*(.5+W.ay*(.68*Math.sin(T*W.sy1+W.py1)+.32*Math.sin(T*W.sy2+W.py2))),ce=UA+qA*(.5+.5*Math.sin(T*W.bs+W.bp));K.style.transform=`translate(${(te-W.size/2).toFixed(1)}px, ${(ae-W.size/2).toFixed(1)}px)`,K.style.opacity=ce.toFixed(3),K.style.borderRadius=Ks(T,W.mp),b(K,T,W.cs),G[J+1]={x:te,y:ae,size:W.size,o:ce}}return G},S=(T,E)=>{for(let B=0;B<pl.length;B++){const G=l.current[B];if(!G)continue;const[J,W]=pl[B],K=E[J],te=E[W],ae=K&&te?Math.min(K.o,te.o):0;if(!K||!te||ae<=.005){G.style.opacity="0";continue}const ce=te.x-K.x,se=te.y-K.y,Q=Math.hypot(ce,se),D=(K.size+te.size)/2*VA,H=Lm(1-Q/D);if(H<=.001){G.style.opacity="0";continue}const I=Math.max(.35,Q*.9/li),A=.3+.4*H;G.style.transform=`translate(${((K.x+te.x)/2-li/2).toFixed(1)}px, ${((K.y+te.y)/2-li/2).toFixed(1)}px) rotate(${Math.atan2(se,ce).toFixed(3)}rad) scale(${I.toFixed(3)}, ${A.toFixed(3)})`,G.style.opacity=(ae*H).toFixed(3),G.style.borderRadius=Ks(T,1.1*(B+1)),b(G,T,.23*(B+1))}};if(d){const E=k(2.4,p.clientWidth,p.clientHeight);S(2.4,E);return}let _=null,j=null,N=-1/0,$=0,M=0,C=0;const z=T=>{const E=p.getBoundingClientRect(),B=_===null;_=T.clientX-E.left,j=T.clientY-E.top,N=T.timeStamp,B&&($=_,M=j)};window.addEventListener("pointermove",z,{passive:!0});let R=0;const L=T=>{R=requestAnimationFrame(L);const E=T/1e3,B=p.clientWidth,G=p.clientHeight,J=k(E,B,G);if(_!==null&&j!==null){$+=(_-$)*Nm,M+=(j-M)*Nm;const W=T-N<BA?DA:OA;C+=(W-C)*FA,m.style.transform=`translate(${$-ii/2}px, ${M-ii/2}px)`,m.style.opacity=C.toFixed(3),m.style.borderRadius=Ks(E,0),b(m,E,0),J[0]={x:$,y:M,size:ii,o:C};for(let K=0;K<eu.length;K++){const te=i.current[K];if(!te)continue;const{nx:ae,ny:ce}=eu[K],se=ae<0?$:ae>0?B-$:ce<0?M:G-M,Q=Lm(1-se/zA);if(Q<=.001){te.style.opacity="0";continue}const D=ae!==0?ae<0?0:B:$,H=ce!==0?ce<0?0:G:M,I=si*(.5-.22*Q),A=.55+.45*Q;te.style.transform=`translate(${D+ae*I-si/2}px, ${H+ce*I-si/2}px) scale(${A.toFixed(3)})`,te.style.opacity=(C*Q).toFixed(3),te.style.borderRadius=Ks(E,.9*(K+1)),b(te,E,.35*(K+1))}}S(E,J)};return R=requestAnimationFrame(L),()=>{cancelAnimationFrame(R),window.removeEventListener("pointermove",z)}},[]),n.jsxs(PA,{ref:e,"aria-hidden":"true",children:[pl.map((d,p)=>n.jsx(Ys,{ref:m=>{l.current[p]=m},style:{width:li,height:li,opacity:0}},`bridge-${p}`)),Array.from({length:ul},(d,p)=>n.jsx(Ys,{ref:m=>{s.current[p]=m},style:{opacity:0}},`ambient-${p}`)),eu.map((d,p)=>n.jsx(Ys,{ref:m=>{i.current[p]=m},style:{width:si,height:si,opacity:0}},p)),n.jsx(Ys,{ref:o,style:{width:ii,height:ii,opacity:0}})]})}function V2({size:e=22,className:o}){return n.jsxs("svg",{width:e,height:e*(80/94),viewBox:"0 0 94 80",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:o,role:"img","aria-label":"Teambridge",children:[n.jsx("path",{d:"M66.4971 48.5203V58.6884C67.2261 59.1629 67.9007 59.5855 68.5508 59.9754L80.003 66.8496L84.2411 59.7409L72.789 52.8667C70.6209 51.5661 68.5073 50.1045 66.4998 48.523",fill:"currentColor"}),n.jsx("path",{d:"M80.0032 67.5995C79.8699 67.5995 79.7366 67.5641 79.6197 67.4932L68.1675 60.619C67.5065 60.2236 66.8292 59.7955 66.092 59.3183C65.8798 59.1792 65.752 58.9447 65.752 58.6911V48.5312C65.752 48.5121 65.752 48.493 65.752 48.4767C65.7764 48.0867 66.1001 47.7759 66.4973 47.7759C66.6823 47.7759 66.8509 47.844 66.9815 47.9558C68.9537 49.5101 71.0374 50.9471 73.17 52.2287L84.6222 59.1029C84.9758 59.3156 85.09 59.7737 84.8806 60.1309L80.6425 67.2396C80.5418 67.4086 80.3759 67.5341 80.1828 67.5804C80.1229 67.5968 80.0631 67.6022 80.0005 67.6022L80.0032 67.5995ZM67.2426 58.2821C67.8356 58.6639 68.3906 59.0102 68.9346 59.3347L79.7448 65.8244L83.2158 60L72.4029 53.5103C70.6375 52.4496 68.9074 51.288 67.2426 50.0391V58.2821Z",fill:"currentColor"}),n.jsx("path",{d:"M83.7788 39.1704C77.5032 35.1729 74.1628 32.7679 66.5081 23.396V36.4354C70.1124 39.7866 74.8184 43.3423 78.2785 45.6465L88.8656 52.0053L93.1554 44.8039L82.7125 38.5323L83.7788 39.1731V39.1704Z",fill:"currentColor"}),n.jsx("path",{d:"M88.8657 52.7632C88.7297 52.7632 88.5964 52.7277 88.4767 52.6568L77.8896 46.298C77.8896 46.298 77.8706 46.2871 77.8597 46.2789C74.6716 44.1575 69.8785 40.6045 65.9941 36.9942C65.839 36.8497 65.752 36.6479 65.752 36.438V23.3985C65.752 23.0795 65.9532 22.7932 66.2525 22.6841C66.5544 22.5751 66.889 22.6705 67.0903 22.9159C74.8049 32.356 78.08 34.6438 84.1761 38.5267L93.5418 44.152C93.9009 44.3674 94.0178 44.8337 93.8029 45.1909L89.5131 52.3923C89.4098 52.5641 89.2438 52.6895 89.048 52.7386C88.9881 52.755 88.9256 52.7604 88.863 52.7604L88.8657 52.7632ZM78.6812 45.0055L88.6073 50.9662L92.1218 45.0655L82.3263 39.1811C82.2501 39.1347 82.1848 39.0802 82.1332 39.0148C77.1252 35.7835 73.6787 33.1577 67.2644 25.4982V36.1026C71.0428 39.5765 75.7488 43.0504 78.6812 45.0028V45.0055Z",fill:"currentColor"}),n.jsx("path",{d:"M50.9436 78.6185H59.0608V31.6689C56.8846 36.9643 54.1562 42.0143 50.9436 46.6962V78.6185Z",fill:"currentColor"}),n.jsx("path",{d:"M59.0606 79.3953H50.9434C50.5381 79.3953 50.209 79.0463 50.209 78.6182V46.6959C50.209 46.5323 50.2579 46.3714 50.3504 46.2378C53.5277 41.605 56.2316 36.5986 58.3887 31.3578C58.5274 31.0197 58.8729 30.8342 59.2102 30.9079C59.5502 30.9842 59.7951 31.3005 59.7951 31.6686V78.6182C59.7951 79.049 59.4659 79.3953 59.0606 79.3953ZM51.6779 77.8383H58.3261V35.1998C56.4301 39.3036 54.2023 43.241 51.6779 46.9467V77.8383Z",fill:"currentColor"}),n.jsx("path",{d:"M34.4211 78.6186H43.0089V57.2571C40.3376 59.823 37.4515 62.2225 34.4211 64.3985V78.6186Z",fill:"currentColor"}),n.jsx("path",{d:"M42.4076 79.3954H34.3721C33.9722 79.3954 33.6458 79.0464 33.6458 78.6183V64.3982C33.6458 64.1473 33.7573 63.9128 33.9504 63.7656C36.7577 61.6114 39.4344 59.2337 41.9071 56.6951C42.1165 56.4796 42.4266 56.4169 42.6932 56.5424C42.9598 56.6651 43.1339 56.9459 43.1339 57.2568V78.6183C43.1339 79.0491 42.8102 79.3954 42.4076 79.3954ZM35.0984 77.8385H41.6813V59.0483C39.6003 61.0879 37.3942 63.0157 35.0984 64.7936V77.8357V77.8385Z",fill:"currentColor"}),n.jsx("path",{d:"M4.04653 54.0585L0.779541 46.6607C11.3395 41.9734 19.5355 35.8954 25.1446 28.5904C31.1726 20.74 34.2275 11.3818 34.2275 0.777344H42.2984C42.2984 24.5275 29.0699 42.9523 4.04653 54.0612V54.0585Z",fill:"currentColor"}),n.jsx("path",{d:"M4.04671 54.8354C3.95151 54.8354 3.8563 54.819 3.76653 54.7836C3.5734 54.71 3.42106 54.5627 3.33674 54.3718L0.0670215 46.9741C-0.107073 46.5815 0.0697417 46.1206 0.461455 45.9488C10.899 41.3161 18.9971 35.3144 24.5246 28.1158C30.4438 20.4044 33.4469 11.207 33.4469 0.77713C33.4469 0.3463 33.7951 0 34.2222 0H42.2931C42.7229 0 43.0684 0.349027 43.0684 0.77713C43.0684 24.86 29.6821 43.5302 4.3541 54.7727C4.25345 54.8163 4.14736 54.8381 4.04127 54.8381L4.04671 54.8354ZM1.80253 47.0532L4.44115 53.0303C28.4308 42.1477 41.2322 24.3746 41.5151 1.55426H34.9947C34.8479 12.0169 31.7414 21.2688 25.7569 29.0647C20.194 36.3097 12.1367 42.3577 1.79981 47.0559L1.80253 47.0532Z",fill:"currentColor"}),n.jsx("path",{d:"M10.7113 68.821L7.38721 61.4478C19.4514 55.9833 30.4221 47.1595 38.2781 36.6042C46.6047 25.4189 51.0033 13.0285 51.0033 0.7771H59.0743C59.0743 14.7873 54.1207 28.8492 44.7468 41.4442C36.0856 53.0793 23.9996 62.803 10.7113 68.821Z",fill:"currentColor"}),n.jsx("path",{d:"M10.7116 69.5981C10.6191 69.5981 10.5266 69.5817 10.4368 69.549C10.2437 69.4754 10.0887 69.3309 10.0043 69.1427L6.6802 61.7695C6.50339 61.3769 6.67748 60.9161 7.0692 60.7415C19.0164 55.3289 29.8783 46.595 37.6582 36.1433C45.8841 25.0944 50.2311 12.8649 50.2311 0.779816C50.2311 0.348986 50.5792 0.00268555 51.0063 0.00268555H59.0772C59.507 0.00268555 59.8525 0.351712 59.8525 0.779816C59.8525 14.959 54.8446 29.1819 45.37 41.9132C36.6326 53.6519 24.4379 63.4629 11.0299 69.5354C10.9292 69.5817 10.8204 69.6036 10.7116 69.6036V69.5981ZM8.41299 61.8322L11.0979 67.7875C23.9917 61.7995 35.6969 52.3022 44.1269 40.9779C53.226 28.7538 58.117 15.139 58.2965 1.55422H51.7761C51.5939 13.7211 47.1518 25.9861 38.9013 37.0704C31.1215 47.5249 20.3167 56.2942 8.41299 61.8322Z",fill:"currentColor"})]})}const Jr=qe`
  background: color-mix(in srgb, var(--color-bg-primary) 50%, transparent);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid color-mix(in srgb, var(--color-content-primary) 12%, transparent);
  box-shadow:
    inset 0 1px 0 color-mix(in srgb, white 45%, transparent),
    var(--shadow-below-low);
`,G2=qe`
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
`;const GA="/Ultron_Onboarding/assets/levis-stadium-CO6biSRl.webp",YA="data:image/webp;base64,UklGRhALAABXRUJQVlA4WAoAAAAQAAAA0gEAVwAAQUxQSPwIAAABsFVrb9jaliAYgiAEgiGEwTaDbQYxg4aByyCLgSAEgiAYwv/QNpblrN67n05ETAD9L7nkx6EKACpHWZn+9YYsDd1njf9yosBa//I/miQYWvn/DSHmepyqqnI81uXGeE3lUV8fJcXFVxQM38aEJZVHPURE6qOsy42FJZVaD5FaS47LzS0ppVRKKTmlGC6FTdCrNQ4JzBzMeIkxshHno6G3SYlewgMedTEKcTsa+uURRzAzm4UlxrhYhVwVve1IPCDVWqtBqLXW9UOq10u8duC6Lp+iwFYTW20N75uq6rlcCPFxNryNBmETWGuNHqLC6WYQsjSYa11s+MT7pq/bFc7S8PawCFlgXaPZEwAMGADKhyd6tfIF7YC+iwJ7TTaMXvnAj4aLtYsfDUM1DfsLv8LXQhaMlmgh6I0fkuAqd/HWMFLjfQCobIVIRCwYq+wB8YUrrveEDeM1jXnAs/IF3ho8Vu47u+qbqLjeEzYMr3wjULY6iGLD8M3DTkR/GkZEhUvlARW+ld+FCq+6dmlXC0ThQG/H3waHuk7U0uddX6DBCLzB48OBEv1F97UH3G5mFZ5bTUxv/zY43kYhEitGhANOt3mUruYXFKsGn2cYhvgHI/iEY2GbDY5bCfSZxRO2UTs3jGCF2+0WKL20YOT2DMMEI1jhWtlig+M90PWkjvBnEBpGLA2Ot1sgAYA8F2SY6SdWOFfuW+A4Uzero8aDTOnj0uB6u4X4UifDYx5WuFfuCeookSGrH8il09XS4Hy9g/ByzoZ1GsGEZ+h4wG8mU25+kK6IJ1Z4b3wD1ADodI0n2TDl4xrDbyHj7KiFORT+5Q5wCzjmYEy6XjrHqF5RMlc/yFNsmHGdj19kPkRv+4vO0sKFBPO2JyYiCnHXN6tddnTOwJhS50sv+w2It0JEfzFtuXBaaQ50NT6BSvbBEeIEOgfSdPoSbwDRH+s8jT9EGJdAvaw8gNTR7i9hUu2K/WnQBgBKdyD+NkxcPlQbXci5OGr+dBbEHmuzeOA13QKiO52phXfNRJkmOfe8xpiKjEB01YhWTCv+Wv0seLvTPexOzppTSilQwtT5zQpLZZpCS6DP/ByQfbRaUkopEB0DJDHRktSsBXf9O91ECw4kB/osc8mbapJohpaok9Xsx0ErkT4zzDXSx2yF1FH7j1ESyUmTPaVUZADiMI10lTFS8hpjfuoI8ItaCE14HoG6uVnpuD3Q1WSmTBeTVe2gfh4jkS6O0RzoPWc120cp0+U0QCJ9TDogExHDcp0hk2W2QhhV6PphxnR5N1J3Lb7uLy2Qkz3QVT6tdFSk64dZy3SVn3Y/RBQtlG6zWS2DKnU2q0rXQ7MBe1N6DQ0AipNCvWKEMKZRZ7NqC3UWs0ZE2eLnPopVGpQ6FljHDnoarXNQfmnsYqfuoEbrmLNjgfVC3bsVmGi3yPcRrcqg2JHMQk82ypOQAMDhQbmPolEeIx2rVSHD02olOizWKcL6OE7Vpqc8Eo+qrnYz6k1GdZb4guggkaXYVE/FSMkyWmUisYj+QhZ0nhsP+XF1mEmvGv3MQsfL6YBNoo2MqR1Po2RCYrTfAz8aLCsPOF2JmdNzGm4AkIedZNtM1JMYsU00qkbJV9gajNtmp4OWDp1Lp6Hy0sKoH6Pjlk4ybjY/RtkVKwYeq1UbxB3tlwoKAI9RxWg3gSe1EavTRoyqp9gwtFnBFX4pWl8Qpyi/ydPsaaGOVszZviGSFxm0/yKn1WG2W4DdcJtEB8UvIb4gjfkx2k2ap9OmWYlZMiluFJOKK53rnIn2Fw1DmpGYqCexQTSC2WJyetnw9chUoQFAGYJoEmAqnp5Gu00yqkTBBNEH668gc+0fUq21GoRaa10/pFrr4xqlWmt9jKkmyeZnzE9HMWrBRI0KEYmJ+Ei4qbXjOVf8ML0d2CCoTRkjHckID4u/MF6JaDdBdnHeVeooUwndnhg8YLt6WqyQ+5ZmtRBRtGnsIGCkaruNZBboNx2ArWuD8TLm7KBmhT89i8KaXpsJzjAuDjiYiJbnAHXFZuuXgO1aeMC40RjtETNs1/42WMubYoM6rtgVep9nyR3UrORbwMmfQlZY//jKdjj5UxTYlzfBCHXYbrbT532S0nNY4Y9VfOj+uwCSI3PMtcE++eIBgOS48JoFI5c3JEY4edBh1fhCaFbNVzZrq0XYTgAt/DIeeRB6SEZ4VHofraDLGLH6oau7FQbtPcEMqHwtrA/B+/RtCDnLc6UPJFbANuSwKpeyWRhTe0jsAClrZF5iKlVxVb6N5C20qfgT20HTgKfVfimZsa84wj58F0rDuIfKTJUuFjtAotluJZfqPdA5Qf4ukr/QJuIrQQcAkoySFfiKmi3O0gTyVSj5ozJPoctLGwHoxhaLmVzYYB7HSB+JP4SbaXOlGYLOouEa5TEAJC9d1Kxw8JvwwG3ECcrNYGqlGSjOEqm3jAKgNS3XnmbQLfKyNQxM3mj3J18Ee1gMaJ+jUP9z3GuTo6QY+SXaOfQXTneIX0MhD9GCzhmELJ8uLp4PovP3IG7uyrdwkIvFhNWfBhMqrpSJ0i9CS/PWvgQNPtiEWL0pk3FxJIGISH4RWpozxK9AmSYiVl8nk/miXjK95TbL+uZpVY1oUWf7N3AyTUWsnp6BBvLTxRnpY54lTkGsvs4vYA/kJVgR7X4yDWYd1jJdLR5Od7sZhaenk3+9lqnfjgYm9SELjU86pJVA18uwltmCxxQ7oqReWqF7tVIdUgP5aSOIdwctk8/4NJMcqDu3McJEzYDG5BFERT20EuhXEH7aSSRTMxlCxM9BrQRyG9LR+qQwmfJzgEQiIuk7B8UxxEVHyRrods2I+KkWbY9kvdu0dRARp9NOInlf1v0QbWiqR80xkH0UI4n0lrWnre8WtREan44BUpjueAARrU+9pnukoRzjmq6ucWFyyelofVpToFvncva0mgJd5Bjjml5jjBzoMy8xpssxciCXYX2eBlpToJseQ0Qcc6m11pKWQDe+xLxXeVv3vAb6DUPMexURqXtemX7BEFOp8rbWkpZANz7s3+x//vtvYOmQU/VCU1U5dv6nA1ZQOCDuAQAAMB4AnQEq0wFYAD5tMJVGpCMiISzoKIANiWlu4MED+AZb5tn4a/QD+OwQD8AP0A/gGqAfgB+gH8AgQD8ALru44Gk8c/wD8AP0T/K/v8HiWAX0iEE98qOfuWHCqjQxmpjzRLZ5962muboXFX52oUTGV1ciNXu060DOJIVOG9dw8ak1a1yOcrKo4AFxoSGMLWO0Fk7gQAJYuoxXP36alwbL/FKXImWQqIZ4zPKGBfH4adYxeHx+xPLmFa69hMWt8WYL/ltn1DhtFSRna9zrTa0WoHDmpQVfwUF5auPIHcxbukX5BRT98xsX2MXmM2sY1rJgdZMDrndfut50gAD9MmI1Dqqzrs45xv//9iPejJp33ezzf/1F9YlvDu1v3VM+T//+xIHlLQ5f9QtMGSJ4DqAAyAdppzCQC5xQeJJZhNBdJxNsMCk1ftYw0Gyz/+yj6BhBcJw+iAui03a9WmTU5ile6HD5HwXTf4GUpf//2iZ0iqIqNr4Gv2kllcwkmHWJkzT/gUf5DU4SnQp8CscxcTPP7+8mqyihLzMZZR6CH9EDyyD4E8THwK/31qcrWlu6Da8Ve4PgbuB26fY0XwMNh6CD+BpmWV+CbaCB23Q1/+pGqTcSIf7r2e8C4AFKMRH8CeDr5sE18RE4ciTEIWQAAAA=",KA="/Ultron_Onboarding/assets/florida-panthers-CzKArKmm.webp",QA="/Ultron_Onboarding/assets/express-healthcare-CyWzv_HP.webp",ZA="/Ultron_Onboarding/assets/modsquad-CN5zaz5-.png",XA="/Ultron_Onboarding/assets/titan-medical-group-CzUHaHlx.webp",JA="/Ultron_Onboarding/assets/united-staffing-solutions-CqTdN2IS.webp",eT=560,Y2=320,$i="cubic-bezier(0.22, 1, 0.36, 1)",K2=140,Q2={landing:0,workplace:20,loading:40,questions:58},ci=[{key:"pay",prompt:"How are your workers paid?",sub:"So I turn on pay the right way from the start.",options:[{id:"w2",icon:F0,title:"W-2",caption:"Employees on your payroll."},{id:"1099",icon:X0,title:"1099",caption:"Independent contractors."},{id:"both",icon:B0,title:"Both",caption:"A mix of W-2 and 1099."}]},{key:"billing",prompt:"How do you bill clients?",sub:"So I handle billing the way you actually work.",options:[{id:"hourly",icon:vn,title:"Hourly",caption:"Per hour worked."},{id:"month",icon:W0,title:"By month",caption:"A flat monthly rate."},{id:"post",icon:Z0,title:"By post",caption:"Per site or position covered."}]},{key:"worksite",prompt:"Where does your team work?",sub:"So I set up your sites and scheduling to match.",options:[{id:"one",icon:qu,title:"One location",caption:"A single site."},{id:"multi",icon:Vu,title:"Multiple locations",caption:"Several of your own sites."},{id:"client",icon:Uu,title:"Client sites",caption:"Out at client locations."}]}];function tT({onComplete:e}){const[o,i]=v.useState("landing"),[s,l]=v.useState({}),[d,p]=v.useState(!1),[m,g]=v.useState(!1),y=Bl(),x=v.useRef(null),b=v.useCallback(R=>{x.current===null&&(g(!0),x.current=window.setTimeout(()=>{R(),g(!1),x.current=null},y?0:Y2))},[y]);v.useEffect(()=>()=>{x.current!==null&&window.clearTimeout(x.current)},[]);const k=()=>b(()=>{i("landing"),l({}),p(!1)}),S=()=>b(()=>i("workplace")),_=R=>{l(L=>({...L,...R})),p(!0),b(()=>i("loading"))},j=R=>{const L={...s,...R};if(l(L),L.companyWebsite){e(L);return}b(()=>i("questions"))},N=R=>e({...s,...R}),$=d?1:o==="landing"?0:.4,[M,C]=v.useState(!1),z=M;return n.jsxs(ST,{children:[n.jsx(U2,{links:$}),n.jsx(q2,{}),n.jsx(NT,{type:"button","aria-label":"Restart demo",title:"Restart demo",onClick:k,children:n.jsx(V2,{size:22})}),n.jsx(MT,{children:n.jsxs(RT,{children:[o!=="landing"&&n.jsx(LT,{children:n.jsx(Z2,{children:n.jsx(lt,{mark:z?"lines":"magnetic",size:K2,tone:"auto",state:"active",motionSpeed:z?1.7:1,cellCount:Q2[o],"aria-label":"Ultron"})})}),n.jsxs(AT,{$exiting:m,children:[o==="landing"&&n.jsx(uT,{onNext:S}),o==="workplace"&&n.jsx(Wl,{children:n.jsx(fT,{onAnswer:_})}),o==="loading"&&(s.companyWebsite||s.failedWebsite||s.noWebsite)&&n.jsx(gT,{website:s.companyWebsite,failedWebsite:s.failedWebsite,onDone:j,onProcessingChange:C}),o==="questions"&&n.jsx(kT,{onComplete:N})]})]})})]})}const nT="Lead the work that matters.",rT="Show us your company and we'll set up the work.",oT=41e3,$m=[{name:"Levi's Stadium",src:GA},{name:"ProCare HR",src:YA},{name:"Florida Panthers",src:KA},{name:"Express Healthcare",src:QA},{name:"ModSquad",src:ZA},{name:"Titan Medical Group",src:XA},{name:"United Staffing Solutions",src:JA}],Am=[{quote:"Ultron turned three days of scheduling into ten minutes. It just handles the busywork so my managers don't have to.",name:"Dana Okafor",role:"Director of Operations",org:"Meridian Care",avatarColor:"purple",photo:"https://i.pravatar.cc/160?u=dana.okafor"},{quote:"Every event used to start with a spreadsheet marathon. Now open shifts fill themselves before I've finished my coffee.",name:"Marcus Webb",role:"Event Staffing Manager",org:"Levi's Stadium",avatarColor:"blue",photo:"https://i.pravatar.cc/160?u=marcus.webb"},{quote:"Onboarding a class of forty caregivers used to eat my whole week. Ultron drafts it, I review it, done by lunch.",name:"Priya Raman",role:"VP of People",org:"ProCare HR",avatarColor:"green",photo:"https://i.pravatar.cc/160?u=priya.raman"},{quote:"It caught a credential lapse we'd have missed and reworked the schedule around it before anyone had to call in.",name:"Sofia Delgado",role:"Compliance Lead",org:"Express Healthcare",avatarColor:"orange",photo:"https://i.pravatar.cc/160?u=sofia.delgado"},{quote:"It's like giving every team its own ops coordinator without adding headcount. My leads finally lead again.",name:"Jamie Chen",role:"Workforce Lead",org:"ModSquad",avatarColor:"azure",photo:"https://i.pravatar.cc/160?u=jamie.chen"}],aT=6e3;function iT(){return n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[n.jsx("path",{fill:"#4285F4",d:"M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"}),n.jsx("path",{fill:"#34A853",d:"M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"}),n.jsx("path",{fill:"#FBBC05",d:"M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A9 9 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"}),n.jsx("path",{fill:"#EA4335",d:"M9 3.58c1.321 0 2.508.454 3.44 1.346l2.582-2.581C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"})]})}function sT(){return n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[n.jsx("rect",{x:"1",y:"1",width:"7.2",height:"7.2",fill:"#F25022"}),n.jsx("rect",{x:"9.8",y:"1",width:"7.2",height:"7.2",fill:"#7FBA00"}),n.jsx("rect",{x:"1",y:"9.8",width:"7.2",height:"7.2",fill:"#00A4EF"}),n.jsx("rect",{x:"9.8",y:"9.8",width:"7.2",height:"7.2",fill:"#FFB900"})]})}function lT(){return n.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24","aria-hidden":"true",children:n.jsx("path",{fill:"currentColor",d:"M16.365 1.43c0 1.14-.42 2.2-1.11 2.98-.75.87-1.98 1.54-3.13 1.45-.14-1.12.4-2.29 1.06-3.03.73-.83 2.02-1.44 3.18-1.4zM20.44 17.03c-.56 1.29-1.24 2.57-2.31 3.62-.9.88-1.99 1.98-3.4 1.99-1.36.01-1.71-.9-3.56-.89-1.85.01-2.24.91-3.6.9-1.41-.01-2.44-1-3.34-1.88-2.5-2.47-4.4-6.98-1.83-10.13.9-1.11 2.35-1.81 3.87-1.83 1.42-.02 2.76.96 3.56.96.8 0 2.44-1.18 4.11-1.01.7.03 2.66.28 3.92 2.13-3.4 2.09-2.86 6.72.58 8.04z"})})}const cT=[{id:"google",label:"Continue with Google",mark:iT},{id:"microsoft",label:"Continue with Microsoft",mark:sT},{id:"apple",label:"Continue with Apple",mark:lT}];function dT(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())}function uT({onNext:e}){const[o,i]=v.useState(!1),[s,l]=v.useState(""),[d,p]=v.useState(null),m=v.useRef(null),g=Bl();return v.useEffect(()=>{const y=window.setTimeout(()=>i(!0),g?0:500);return()=>window.clearTimeout(y)},[g]),v.useEffect(()=>{var y;d&&((y=m.current)==null||y.focus())},[d]),n.jsxs(TT,{children:[n.jsx(ET,{children:n.jsxs(PT,{children:[n.jsx(Z2,{children:n.jsx(lt,{mark:"magnetic",size:K2,tone:"auto",state:"active",cellCount:Q2.landing,"aria-label":"Ultron"})}),n.jsx(hI,{children:nT}),o&&n.jsxs(zT,{children:[n.jsx(fI,{children:rT}),n.jsxs(OT,{"aria-label":"Get started",children:[n.jsx(DT,{children:cT.map(y=>{const x=y.mark;return n.jsx(FT,{variant:"secondary",size:"lg",type:"button",leadingArtwork:n.jsx(x,{}),onClick:e,children:y.label},y.id)})}),n.jsx(BT,{"aria-hidden":"true",children:n.jsx(WT,{children:"or start with email"})}),n.jsxs(HT,{noValidate:!0,onSubmit:y=>{y.preventDefault(),s.trim()===""||dT(s)?e():p({text:"That doesn't look like an email — try you@company.com."})},children:[n.jsx(yr,{content:(d==null?void 0:d.text)??"",placement:"top",disabled:!d,children:n.jsx(qT,{ref:m,"aria-label":"Work email",placeholder:"you@company.com",value:s,onChange:y=>{l(y.target.value),d&&p(null)}})}),n.jsx(UT,{variant:"primary",size:"lg",type:"submit",children:"Start for free"}),n.jsx(VT,{children:"No credit card. Free WFM forever. Credits expire — your workspace doesn't."})]})]})]})]})}),n.jsx(IT,{"aria-hidden":"true"}),o&&n.jsx(pT,{})]})}function pT(){const[e,o]=v.useState(0);v.useEffect(()=>{const s=setInterval(()=>o(l=>(l+1)%Am.length),aT);return()=>clearInterval(s)},[]);const i=Am[e];return n.jsx(GT,{children:n.jsxs(YT,{children:[n.jsx(hT,{}),n.jsxs(sI,{children:[n.jsx(lI,{children:`“${i.quote}”`}),n.jsxs(cI,{children:[n.jsx(qn,{name:i.name,src:i.photo,alt:i.name,color:i.avatarColor,size:"lg"}),n.jsxs(dI,{children:[n.jsx(uI,{children:i.name}),n.jsx(pI,{children:`${i.role} · ${i.org}`})]})]})]},e),n.jsxs(nI,{children:[n.jsx(rI,{children:"Trusted by frontline operators"}),n.jsxs(aI,{"aria-label":"Operators using Teambridge",children:[n.jsx(Tm,{children:$m.map(s=>n.jsx(Im,{src:s.src,alt:s.name,loading:"lazy"},s.name))}),n.jsx(Tm,{"aria-hidden":"true",children:$m.map(s=>n.jsx(Im,{src:s.src,alt:"",loading:"lazy"},`${s.name}-dup`))})]})]})]})})}function hT(){const e=jT(oT,1600);return n.jsxs(KT,{children:[n.jsxs(QT,{children:[n.jsx(XT,{"aria-hidden":"true"}),n.jsx(JT,{children:"Ultron Index · Live"})]}),n.jsx(eI,{children:e.toLocaleString("en-US")}),n.jsx(tI,{children:"pieces of work Ultron performed this week"})]})}function fT({onAnswer:e}){const[o,i]=v.useState(""),s=o.trim().length>0,l=()=>{const d=o.trim();d&&e(_T(d)?{companyWebsite:d}:{failedWebsite:d})};return n.jsxs(n.Fragment,{children:[n.jsx(Hl,{children:"Where do you work?"}),n.jsx(vI,{children:"Drop your URL and Ultron will set up Teambridge for your team. No blank slate, no busywork."}),n.jsx(ev,{onSubmit:d=>{d.preventDefault(),l()},children:n.jsxs(tv,{children:[n.jsx(rE,{"aria-hidden":"true",children:n.jsx(Gu,{size:18})}),n.jsx(nv,{rows:1,value:o,placeholder:"yourcompany.com","aria-label":"Company website",onChange:d=>i(d.target.value),onKeyDown:d=>{d.key==="Enter"&&!d.shiftKey&&(d.preventDefault(),l())}}),n.jsx(rv,{children:n.jsx(wa,{state:s?"ready":"disabled-invalid",onSend:l})})]})}),n.jsx(oE,{children:n.jsx(ov,{type:"button",onClick:()=>e({noWebsite:!0}),children:"No website? Pick a workforce instead"})})]})}const tu=["Scanning your site","Identifying your workforce","Mapping services & clients","Organizing your workspace"],mT=820;function gT({website:e,failedWebsite:o,onDone:i,onProcessingChange:s}){return e?n.jsx(xT,{website:e,onDone:i,onProcessingChange:s}):n.jsx(bT,{failedWebsite:o,onDone:i})}const vT=["worker_types","talent_categories","client_types","service_models","tech_footprint","access_model","compliance"];function xT({website:e,onDone:o,onProcessingChange:i}){const{name:s,host:l}=CT(e),d=tu.length,[p,m]=v.useState(1),[g,y]=v.useState(!1);v.useEffect(()=>{i==null||i(!g)},[g,i]),v.useEffect(()=>()=>i==null?void 0:i(!1),[i]);const x=v.useMemo(()=>IS(e),[e]),b=v.useMemo(()=>vT.reduce((_,j)=>_+x[j].length,0),[x]),k=v.useCallback(()=>{g?o({}):p>=d?y(!0):m(_=>Math.min(_+1,d))},[p,g,d,o]);v.useEffect(()=>{const _=j=>{j.key.toLowerCase()==="t"&&(j.preventDefault(),k())};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[k]);const S=tu[p-1];return n.jsxs(Wl,{$wide:!0,onClick:()=>{g||k()},children:[n.jsx(Hl,{children:g?"Nearly there!":`Turning on ${s}`}),n.jsx(Ul,{children:g?"Your free account is taking shape.":"Hang tight — I'm reading your site and getting your workspace ready."}),n.jsxs(SI,{role:"status","aria-live":"polite",children:[n.jsxs(LI,{$running:!g,children:[n.jsx(Gu,{size:14}),l,n.jsx($I,{"aria-hidden":"true",children:"·"}),g?n.jsxs(AI,{children:[n.jsx(yn,{size:13})," read ",b," signals"]}):n.jsx(TI,{children:`${S}…`},S)]}),n.jsx(NI,{role:"progressbar","aria-valuemin":0,"aria-valuemax":d,"aria-valuenow":g?d:p-1,"aria-label":`Step ${Math.min(p,d)} of ${d}`,$complete:g,children:tu.map((_,j)=>{const N=g||j+1<p?"done":j+1===p?"working":"pending";return n.jsx(MI,{"data-status":N,children:N!=="pending"&&n.jsx(RI,{$working:N==="working"})},_)})})]}),n.jsx(yT,{learned:x,loading:!g}),g&&n.jsxs(n.Fragment,{children:[n.jsx(KI,{children:n.jsx(Ee,{variant:"primary",size:"lg",onClick:()=>o({}),trailingArtwork:n.jsx(A0,{size:18}),children:"Looks good, continue"})}),n.jsx(QI,{children:n.jsx(ov,{type:"button",onClick:()=>{m(1),y(!1)},children:"Start over"})})]})]})}function yT({learned:e,loading:o}){const{company:i}=e;return n.jsxs(EI,{children:[n.jsxs(PI,{children:[n.jsxs(zI,{children:[n.jsx(OI,{"aria-hidden":"true",children:o?n.jsx(rn,{$w:"20px",$h:"20px",$round:!0}):n.jsx(Vu,{size:20})}),n.jsx(DI,{children:o?n.jsxs(n.Fragment,{children:[n.jsx(rn,{$w:"240px",$h:"1em"}),n.jsx(rn,{$w:"160px",$h:"0.85em"})]}):n.jsxs(n.Fragment,{children:[n.jsx(FI,{children:e.workforce_type}),n.jsx(BI,{children:i.name})]})})]}),n.jsx(WI,{children:o?n.jsxs(n.Fragment,{children:[n.jsx(rn,{$w:"110px",$h:"0.9em"}),n.jsx(rn,{$w:"150px",$h:"0.9em"}),n.jsx(rn,{$w:"170px",$h:"0.9em"})]}):n.jsxs(n.Fragment,{children:[n.jsxs(nu,{children:[n.jsx(vn,{size:14}),n.jsxs(ru,{children:["Founded ",i.founded]})]}),i.parent&&n.jsxs(nu,{children:[n.jsx(qu,{size:14}),n.jsxs(ru,{children:["Part of ",i.parent]})]}),n.jsxs(nu,{children:[n.jsx(zu,{size:14}),n.jsx(ru,{children:i.footprint})]})]})})]}),e.narrative.map((s,l)=>n.jsx(HI,{style:{"--group-i":l+1},children:o?n.jsxs(n.Fragment,{children:[n.jsx(rn,{$w:"128px",$h:"0.95em"}),n.jsxs(II,{children:[n.jsx(rn,{$h:"0.85em"}),n.jsx(rn,{$h:"0.85em"}),n.jsx(rn,{$h:"0.85em",$w:"62%"})]}),n.jsxs(Em,{children:[n.jsx(rn,{$w:"76px",$h:"20px",$round:!0}),n.jsx(rn,{$w:"92px",$h:"20px",$round:!0}),n.jsx(rn,{$w:"64px",$h:"20px",$round:!0})]})]}):n.jsxs(n.Fragment,{children:[n.jsx(UI,{children:s.label}),n.jsx(qI,{children:s.body}),n.jsx(Em,{children:s.tags.map(d=>n.jsx(Ln,{size:"sm",variant:"subtle",color:"neutral",children:d},d))})]})},s.label)),n.jsx(VI,{style:{"--group-i":e.narrative.length+1},children:o?n.jsx(rn,{$w:"152px",$h:"0.95em"}):n.jsx(GI,{children:"Consider it handled."})})]},o?"readout-loading":"readout-ready")}const wT=[{icon:K0,label:"Travel nurses"},{icon:$l,label:"Event staff"},{icon:Fu,label:"Security guards"},{icon:H0,label:"Warehouse temps"}];function bT({failedWebsite:e,onDone:o}){const[i,s]=v.useState(""),l=i.trim().length>0,d=()=>{const p=i.trim();p&&o({workforceType:p})};return n.jsxs(Wl,{children:[e&&n.jsx(YI,{children:"No problem — let's set it up together."}),n.jsx(Hl,{children:"What workforce do you need help with?"}),n.jsx(Ul,{children:"Say it in your own words — or grab one of these."}),n.jsx(xI,{children:wT.map(({icon:p,label:m})=>n.jsxs(yI,{type:"button",onClick:()=>o({workforceType:m}),children:[n.jsx(p,{size:16}),m]},m))}),n.jsx(ev,{onSubmit:p=>{p.preventDefault(),d()},children:n.jsxs(tv,{children:[n.jsx(nv,{rows:1,value:i,placeholder:"e.g. home-care aides across three cities","aria-label":"Describe your workforce",onChange:p=>s(p.target.value),onKeyDown:p=>{p.key==="Enter"&&!p.shiftKey&&(p.preventDefault(),d())}}),n.jsx(rv,{children:n.jsx(wa,{state:l?"ready":"disabled-invalid",onSend:d})})]})})]})}function kT({onComplete:e}){const o=Bl(),[i,s]=v.useState(0),l=v.useRef({}),d=ci[i],p=m=>{l.current={...l.current,[d.key]:m.title};const g=i+1;g>=ci.length?e(l.current):s(g)};return n.jsxs(Wl,{children:[n.jsx(ZI,{role:"progressbar","aria-valuemin":1,"aria-valuemax":ci.length,"aria-valuenow":i+1,"aria-label":`Question ${i+1} of ${ci.length}`,children:ci.map((m,g)=>n.jsx(XI,{"data-filled":g<=i||void 0},m.key))}),n.jsx(Hl,{children:d.prompt}),n.jsx(Ul,{children:d.sub}),n.jsx(JI,{role:"radiogroup","aria-label":d.prompt,children:d.options.map((m,g)=>{const y=m.icon;return n.jsxs(eE,{type:"button",role:"radio","aria-checked":!1,style:{animationDelay:o?"0ms":`${g*70}ms`},onClick:()=>p(m),children:[n.jsx(X2,{"aria-hidden":"true",children:n.jsx(y,{size:20})}),n.jsxs(tE,{children:[n.jsx(wI,{children:m.title}),n.jsx(bI,{children:m.caption})]})]},m.id)})})]},d.key)}function _T(e){const o=e.trim().replace(/\s+/g,"");if(!o)return!1;const i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s;try{s=new URL(i).hostname}catch{return!1}return/^(?=.{1,253}$)([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(s)}function CT(e){const o=e.replace(/\s+/g,""),i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s=o;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),{name:(s.split(".")[0]||s).split(/[-_]/).map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" ")||s,host:s}}function jT(e,o){const i=Bl(),[s,l]=v.useState(i?e:0);return v.useEffect(()=>{if(i){l(e);return}let d=0,p=null;const m=g=>{p===null&&(p=g);const y=Math.min(1,(g-p)/o),x=1-Math.pow(1-y,3);l(Math.round(e*x)),y<1&&(d=window.requestAnimationFrame(m))};return d=window.requestAnimationFrame(m),()=>window.cancelAnimationFrame(d)},[e,o,i]),s}function Bl(){const[e,o]=v.useState(()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch{return!1}});return v.useEffect(()=>{var l;let i;try{i=window.matchMedia("(prefers-reduced-motion: reduce)")}catch{return}const s=d=>o(d.matches);return(l=i.addEventListener)==null||l.call(i,"change",s),()=>{var d;return(d=i.removeEventListener)==null?void 0:d.call(i,"change",s)}},[]),e}const ST=f.div`
  /* Anchors the ambient backdrop layer, which fills the frame behind Scroll. */
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  background: var(--color-bg-primary);
  color: var(--color-content-primary);
`,NT=f.button`
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
`,MT=f.main`
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
`,RT=f.div`
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
`,LT=f.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
`,Z2=f.span`
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
`,$T=Se`
  from { opacity: 1; }
  to   { opacity: 0; }
`,AT=f.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${e=>e.$exiting&&qe`
      animation: ${$T} ${Y2}ms var(--ease-in) forwards;
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
`,TT=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
  width: 100%;
`,IT=f.div`
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
`,ET=f.div`
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
`,PT=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-5);
  width: 100%;
  max-width: 400px;
`,xp=Se`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`,zT=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  width: 100%;
  animation: ${xp} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,OT=f.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--space-4);
  width: 100%;
  max-width: 360px;
`,DT=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
`,FT=f(Ee)`
  && {
    width: 100%;
    ${Jr}
  }
`,BT=f.div`
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
`,WT=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
  white-space: nowrap;
`,HT=f.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;
`,UT=f(Ee)`
  && {
    width: 100%;
  }
`,qT=f(dg)`
  && [class*='shell'] {
    ${Jr}
  }
  && input {
    background: transparent;
  }
`,VT=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  text-align: center;
`,GT=f.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* No surface — the proof content sits directly on the ambient particle
     backdrop; only the padding holds its measure. */
  padding: var(--space-10);
  animation: ${xp} var(--duration-slow) var(--ease-out) both;

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
`,YT=f.div`
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
`,KT=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
`,QT=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,ZT=Se`
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.35; transform: scale(0.8); }
`,XT=f.span`
  width: var(--space-2);
  height: var(--space-2);
  border-radius: var(--radius-full);
  background: var(--color-success-fill);
  flex-shrink: 0;
  animation: ${ZT} 2s var(--ease-default) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,JT=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,eI=f.span`
  font-family: var(--font-sans);
  /* Anchors the panel now that there's no card around it. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Hold digit width so the count-up doesn't jitter the caption below. */
  font-variant-numeric: tabular-nums;
`,tI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,nI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  padding-top: var(--space-3);
`,rI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,oI=Se`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`,aI=f.div`
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
`,Tm=f.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: var(--space-6);
  padding-right: var(--space-6);
  animation: ${oI} 32s linear infinite;
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Im=f.img`
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
`,iI=Se`
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,sI=f.figure`
  ${Jr}
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
  animation: ${iI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,lI=f.blockquote`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,cI=f.figcaption`
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
`,dI=f.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,uI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,pI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,hI=f.h1`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
  /* Pops in (no type-out). */
  animation: ${xp} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,fI=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 560px;
`,mI=Se`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`,Wl=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
  width: 100%;
  /* $wide widens the step for the workforce-type grid so its three cards have
     room to keep each caption on a single line. */
  max-width: ${e=>e.$wide?"1060px":"720px"};
  text-align: center;
  animation: ${mI} ${eT}ms ${$i} both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,Hl=f.h1`
  margin: 0;
  font-family: var(--font-sans);
  /* Matches the opening landing headline (Headline) so step titles read consistently. */
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--color-content-primary);
`,Ul=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
  max-width: 520px;
`,gI=Se`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`,vI=f(Ul)`
  animation: ${gI} var(--duration-slow) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,xI=f.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
`,yI=f.button`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: var(--space-8);
  padding: 0 var(--space-3);
  ${Jr}
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
    ${G2}
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
`,X2=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-primary);
  margin-bottom: var(--space-2);
`,wI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,bI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
`,J2=Se`
  from { opacity: 0; transform: translateY(10px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`,kI=Se`
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
`,_I=Se`
  from { background-position: 100% 0; }
  to   { background-position: -100% 0; }
`,CI=Se`
  0%   { transform: scaleX(0); }
  68%  { transform: scaleX(1); }
  100% { transform: scaleX(1); }
`,jI=Se`
  0%   { opacity: 1; }
  35%  { opacity: 0.45; }
  100% { opacity: 1; }
`,SI=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  max-width: 360px;
  margin-top: var(--space-5);
`,NI=f.div`
  display: flex;
  gap: var(--space-1);
  width: 100%;

  ${e=>e.$complete&&qe`
    & > * > * {
      animation: ${jI} 900ms ${$i};
    }
  `}

  @media (prefers-reduced-motion: reduce) {
    & > * > * { animation: none; }
  }
`,MI=f.div`
  flex: 1;
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-bg-tertiary);
  overflow: hidden;
`,RI=f.div`
  height: 100%;
  width: 100%;
  border-radius: var(--radius-full);
  background: var(--color-content-primary);

  ${e=>e.$working&&qe`
    /* The working fill draws in from the LEFT edge (scaleX, origin left) on a
       loop — draw, hold, redraw — so the bar stays visibly in motion while it
       waits for the next beat, reading as ongoing work rather than a stall. */
    transform-origin: left center;
    animation: ${CI} ${mT+380}ms ${$i} infinite;
  `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: var(--color-content-primary);
  }
`,LI=f.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  /* While the read is still running the line reads lighter (tertiary); once it
     completes it firms up to secondary alongside the "read N signals" tally. */
  color: ${e=>e.$running?"var(--color-content-tertiary)":"var(--color-content-secondary)"};

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,$I=f.span`
  color: var(--color-content-tertiary);
`,AI=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  color: var(--color-success-content);

  svg { color: var(--color-success-content); }
`,TI=f.span`
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
  animation: ${kI} 1.6s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    color: var(--color-content-tertiary);
    background: none;
    animation: none;
  }
`,rn=f.span`
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
  animation: ${_I} 1.6s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    background: var(--color-bg-tertiary);
    animation: none;
  }
`,II=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  width: 100%;
`,EI=f.div`
  width: 100%;
  max-width: 680px;
  margin-top: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  text-align: left;
`,yp=qe`
  animation: ${J2} var(--duration-base) ${$i} both;
  animation-delay: calc(var(--group-i, 0) * 90ms);

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,PI=f.div`
  ${Jr}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  ${yp}
`,zI=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`,OI=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-md);
  background: var(--color-bg-tertiary);
  color: var(--color-content-primary);
`,DI=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,FI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,BI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-tertiary);
`,WI=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-5);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`,nu=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);

  svg { flex-shrink: 0; color: var(--color-content-tertiary); }
`,ru=f.span`
  color: var(--color-content-primary);
`,HI=f.div`
  ${Jr}
  border: none;
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  ${yp}
`,UI=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,qI=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-secondary);
`,Em=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-1);
`,VI=f.div`
  display: flex;
  justify-content: center;
  padding-top: var(--space-2);
  ${yp}
`,GI=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  text-align: center;
`,YI=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-tertiary);
  max-width: 480px;
`,KI=f.div`
  margin-top: var(--space-5);
`,QI=f.div`
  margin-top: var(--space-3);
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
`,eE=f.button`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4);
  text-align: left;
  ${Jr}
  border-radius: var(--radius-lg);
  cursor: pointer;
  /* fill "backwards" (not "both"): holds the pre-entrance state during the
     stagger delay, but releases transform once the pop finishes — a filled
     animation would keep pinning transform and the hover lift below never
     applies. */
  animation: ${J2} var(--duration-base) ${$i} backwards;
  transition: border-color var(--duration-fast) var(--ease-default),
              background var(--duration-fast) var(--ease-default),
              box-shadow var(--duration-fast) var(--ease-default),
              transform var(--duration-fast) var(--ease-default);

  ${X2} {
    margin-bottom: 0;
  }

  &:hover {
    ${G2}
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
`,tE=f.span`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,ev=f.form`
  width: 100%;
  max-width: 520px;
  margin-top: var(--space-2);
  ${Jr}
  border-radius: var(--radius-xl);
  transition: border-color var(--duration-fast) var(--ease-default);

  &:focus-within {
    border-color: var(--color-border-focus);
  }
`,tv=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-2) var(--space-2) var(--space-4);
`,nE=Se`
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
`,rE=f.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary);
  flex-shrink: 0;
  animation: ${nE} var(--duration-base) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,nv=f.textarea`
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
`,rv=f(Wu)`
  && {
    flex: 0 0 auto;
    width: auto;
    --composer-btn-size: var(--space-8); /* 32px */
    --composer-btn-icon-attach: var(--space-4); /* 16px */
    --composer-btn-icon-send: var(--space-4); /* 16px */
  }
`,oE=f.div`
  margin-top: var(--space-3);
`,ov=f.button`
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
`;function aE({onEnterApp:e}){return n.jsx(tT,{onComplete:o=>e==null?void 0:e(o)})}const iE=768,sE=`(max-width: ${iE-1}px)`;function wp(e){const[o,i]=v.useState(()=>typeof window>"u"?!1:window.matchMedia(e).matches);return v.useEffect(()=>{if(typeof window>"u")return;const s=window.matchMedia(e),l=d=>i(d.matches);return i(s.matches),s.addEventListener("change",l),()=>s.removeEventListener("change",l)},[e]),o}function lE(){return wp(sE)}const cE="48px",dE="240px",Pm="0px 2px 4px rgba(0,0,0,0.03), 0px 12px 32px rgba(0,0,0,0.06)",uE=f.nav`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${e=>e.$isExpanded?dE:cE};
  /* Collapsed: inset shadow keeps the 32px content area intact (border-right would consume 1px).
     Expanded: real border-right, painted on top of NavInner's background so it's always visible. */
  ${e=>e.$isExpanded?qe`border-right: 1px solid var(--color-border-opaque, #e8eaee);`:qe`box-shadow: inset -1px 0 0 var(--color-border-opaque, #e8eaee);`}
  background: ${e=>e.$isExpanded?"var(--color-bg-primary, white)":"var(--color-bg-secondary, #f6f7f9)"};
  overflow: hidden;
  transition: width 200ms ease;
`,pE=f.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 8px;
  background: ${e=>e.$isExpanded?"var(--color-bg-secondary, #f6f7f9)":"transparent"};
  border-radius: ${e=>e.$isExpanded?"0 6px 6px 0":"0"};
  overflow: hidden;
`,hE=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`,fE=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
`,mE=f.button`
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
`,gE=f.div`
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
`,vE=f.span`
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
`,zm=f.div`
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
`,ou=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,xE="var(--gradient-ai)",av=f.div`
  border-radius: 6px;
  transition: background 150ms ease-in-out, box-shadow 150ms ease-in-out;
  ${e=>e.$isActive&&!e.$isAi&&qe`
      background: var(--color-bg-primary, white);
      box-shadow: ${Pm}, inset 0 0 0 0.5px var(--color-border-transparent, rgba(21, 21, 21, 0.05));
    `}
  ${e=>e.$isActive&&e.$isAi&&qe`
      background: ${xE};
      box-shadow: ${Pm}, inset 0 0 0 0.5px rgba(140, 79, 226, 0.25);
    `}
`,iv=f.button`
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
`,sv=f.span`
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
`,lv=f.div`
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
`,yE=f.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--color-content-link, #1969fe);
  pointer-events: none;
`,au=f.hr`
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
`;const wE=f.button`
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
`,bE=f.div`
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
`,kE=f.span`
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
`;function iu({item:e,isExpanded:o,showNewBadge:i,isAi:s}){const l=e.isActive??!1,d=e.disabled??!1;return n.jsx(av,{$isActive:l,$isAi:s,children:n.jsxs(iv,{$isActive:l,$isAiActive:l&&!!s,$disabled:d,disabled:d,onClick:d?void 0:e.onClick,"aria-current":l?"page":void 0,title:o?void 0:e.label,children:[n.jsxs(lv,{children:[e.hasUnread&&n.jsx(yE,{}),l&&e.activeIcon?e.activeIcon:e.icon]}),o&&n.jsx(sv,{children:e.label}),o&&i&&n.jsx(ya,{variant:"primary",children:"New"})]})})}function _E({items:e,toolItems:o=[],bottomItems:i=[],workspace:s,user:l,onWorkspaceClick:d,onUserClick:p,onSettingsClick:m,newItemId:g,aiItemId:y}){const[x,b]=v.useState(!1);return n.jsx(uE,{$isExpanded:x,onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1),"aria-label":"Primary navigation",children:n.jsxs(pE,{$isExpanded:x,children:[n.jsxs(hE,{children:[n.jsxs(mE,{$isExpanded:x,onClick:d,"aria-label":`Workspace: ${s.name}`,title:x?void 0:s.name,children:[n.jsx(gE,{children:s.logoUrl?n.jsx("img",{src:s.logoUrl,alt:s.name}):s.initial??s.name.charAt(0).toUpperCase()}),x&&n.jsxs(n.Fragment,{children:[n.jsx(vE,{children:s.name}),n.jsx(zm,{children:n.jsx(Bf,{})})]})]}),n.jsx(ou,{children:e.map(k=>n.jsx(iu,{item:k,isExpanded:x,isAi:k.id===y},k.id))}),o.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(au,{}),n.jsx(ou,{children:o.map(k=>n.jsx(iu,{item:k,isExpanded:x,showNewBadge:k.id===g,isAi:k.id===y},k.id))})]})]}),n.jsxs(fE,{children:[i.length>0&&n.jsxs(n.Fragment,{children:[n.jsx(au,{}),n.jsx(ou,{children:i.map(k=>n.jsx(iu,{item:k,isExpanded:x,isAi:k.id===y},k.id))})]}),n.jsx(au,{}),n.jsx(av,{$isActive:!1,children:n.jsxs(iv,{$isActive:!1,onClick:m,"aria-label":"Settings",title:x?void 0:"Settings",children:[n.jsx(lv,{children:n.jsx(lN,{})}),x&&n.jsx(sv,{children:"Settings"})]})}),n.jsxs(wE,{$isExpanded:x,onClick:p,"aria-label":`User: ${l.name}`,title:x?void 0:l.name,children:[n.jsx(bE,{$color:l.avatarColor,children:l.initials}),x&&n.jsxs(n.Fragment,{children:[n.jsx(kE,{children:l.name}),n.jsx(zm,{children:n.jsx(Bf,{})})]})]})]})]})})}const CE=270,jE=f.nav`
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
`,SE=f.div`
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--color-bg-primary, white);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
`,NE=f.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 6px 12px 6px 12px;
`,ME=f.h2`
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
`,RE=f.div`
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
`,LE=f.button`
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
`,$E=f.div`
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
`,AE=f.button`
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
`;const TE=f.span`
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
`,IE=f.div`
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
`,EE=Se`
  from { opacity: 0; transform: translateY(-6px); }
  to   { opacity: 1; transform: translateY(0); }
`,PE=f.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* Align children flush with the group header / top-level items so the
     selected-row background lines up with the upper-level menu items. */
  padding-left: 0;

  /* Animate each row in on mount — the visible half of a case moving groups. */
  & > * {
    animation: ${EE} var(--duration-base, 250ms) var(--ease-out, cubic-bezier(0, 0, 0.2, 1)) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & > * { animation: none; }
  }
`,Om=f.button`
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
`,zE=f.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${e=>e.$outlined&&qe`
    border: 1px solid var(--color-border-opaque);
    border-radius: 12px;
    padding: 4px;
  `}
`,OE=f.div`
  font-family: var(--font-sans, 'Geist', sans-serif);
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  color: var(--color-content-inverse-tertiary, #87919f);
  padding: 4px 4px 2px;
`,DE=f.div`
  flex-shrink: 0;
  width: 100%;
  padding: 0 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,FE=f.div`
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
`,BE=f.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  background: var(--color-border-opaque, #e8eaee);
`,WE=f.hr`
  all: unset;
  display: block;
  width: 100%;
  height: 1px;
  margin: var(--space-1) 0;
  background: var(--color-border-opaque, #e8eaee);
`,HE=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  color: var(--color-content-inverse-tertiary, #87919f);
`,cv=f.div`
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
`;function dv(){return n.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 2v12M2 8h12M3.515 3.515l8.97 8.97M12.485 3.515l-8.97 8.97",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})}function UE(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M1.75 3.5h10.5M3.5 7h7M5.25 10.5h3.5",stroke:"currentColor",strokeWidth:"1.3",strokeLinecap:"round"})})}const bp={"--li-min-height":"32px","--li-py":"0px","--li-px":"4px","--li-gap":"12px",borderRadius:"6px",borderBottom:"none"};function qE({item:e}){return n.jsx(xn,{label:n.jsx("span",{style:{color:e.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:e.isActive?500:void 0,letterSpacing:"-0.084px"},children:e.label}),leadingSlot:n.jsx(cv,{children:e.icon??n.jsx(dv,{})}),selected:e.isActive,onClick:e.onClick,divider:!1,size:"md","aria-current":e.isActive?"page":void 0,style:bp})}function VE({group:e}){const[o,i]=v.useState(e.defaultExpanded??!0),[s,l]=v.useState(!1),d=e.maxVisible,m=d!=null&&!s&&e.children.length>d?e.children.slice(0,d):e.children,g=e.children.length-m.length;return n.jsxs(zE,{$outlined:e.outlined,children:[n.jsxs(AE,{onClick:()=>i(y=>!y),"aria-expanded":o,children:[n.jsx(IE,{children:o?n.jsx($n,{size:16}):n.jsx(bn,{size:16})}),n.jsx(TE,{children:e.label}),e.trailingBadge&&n.jsx("span",{style:{display:"inline-flex",flexShrink:0,marginRight:4},children:e.trailingBadge})]}),o&&n.jsxs(PE,{children:[m.map(y=>n.jsx(xn,{label:n.jsx("span",{style:{color:y.isActive?"var(--color-content-primary, #151515)":"var(--color-content-tertiary, #475569)",fontWeight:y.isActive?500:void 0,letterSpacing:"-0.084px"},children:y.label}),leadingSlot:n.jsx(cv,{children:y.icon??null}),trailingSlot:y.trailingSlot,selected:y.isActive,onClick:y.onClick,divider:!1,size:"md","aria-current":y.isActive?"page":void 0,style:bp},y.id)),g>0&&n.jsxs(Om,{type:"button",onClick:()=>l(!0),children:["Show ",g," more"]}),d!=null&&s&&e.children.length>d&&n.jsx(Om,{type:"button",onClick:()=>l(!1),children:"Show less"})]})]})}function GE({heading:e,isVisible:o,menuEntries:i=[],menuHeader:s,pageEntries:l=[],showSearch:d=!0,searchValue:p="",onSearchChange:m,onFilterClick:g,headerSlot:y,bodyContent:x,width:b=CE,onWidthChange:k,minWidth:S=220,maxWidth:_=520}){const j=x!==void 0,N=v.useRef(null),[$,M]=v.useState(!1);return v.useEffect(()=>{if(!$||!k)return;const C=N.current;if(!C)return;const z=C.getBoundingClientRect().left,R=E=>{const B=Math.min(_,Math.max(S,E.clientX-z));k(B)},L=()=>M(!1);window.addEventListener("mousemove",R),window.addEventListener("mouseup",L);const T=document.body.style.userSelect;return document.body.style.userSelect="none",document.body.style.cursor="col-resize",()=>{window.removeEventListener("mousemove",R),window.removeEventListener("mouseup",L),document.body.style.userSelect=T,document.body.style.cursor=""}},[$,k,S,_]),n.jsxs(jE,{ref:N,$isVisible:o,$width:b,$isResizing:$,"aria-label":"Secondary navigation",children:[n.jsxs(SE,{children:[(e||y)&&n.jsxs(NE,{children:[n.jsx(ME,{children:e}),y]}),d&&!j&&n.jsxs(RE,{children:[n.jsx(cg,{size:"sm",placeholder:"Search...",value:p,onChange:C=>m==null?void 0:m(C.target.value)}),n.jsx(LE,{onClick:g,"aria-label":"Filter",children:n.jsx(UE,{})})]})]}),j?x:n.jsxs($E,{children:[s,i.map(C=>C.type==="single"?n.jsx(qE,{item:C.item},C.item.id):C.type==="group"?n.jsx(VE,{group:C.group},C.group.id):C.type==="divider"?n.jsx(WE,{},C.id):n.jsx(OE,{children:C.label.label},C.label.id))]}),l.length>0&&n.jsxs(DE,{children:[n.jsx(BE,{}),l.map(C=>n.jsx(xn,{label:n.jsx("span",{style:{color:"var(--color-content-inverse-tertiary, #87919f)",letterSpacing:"-0.084px"},children:C.label}),leadingSlot:n.jsx(HE,{children:C.icon??n.jsx(dv,{})}),onClick:C.onClick,selected:C.isActive??!1,divider:!1,size:"md","aria-current":C.isActive?"page":void 0,style:bp},C.id))]}),k&&o&&n.jsx(FE,{$isResizing:$,onMouseDown:C=>{C.preventDefault(),M(!0)},role:"separator","aria-orientation":"vertical","aria-label":"Resize secondary navigation"})]})}const YE=f.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  min-height: 48px;
  padding: 4px 12px;
  background: var(--color-bg-primary, white);
  border-bottom: ${({$noBorder:e})=>e?"none":"1px solid var(--color-border-opaque, #e8eaee)"};
  flex-shrink: 0;
`,KE=f.div`
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
`,uv=f.div`
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
`,QE=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`,ZE=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;function XE(){return n.jsxs("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("circle",{cx:"2.5",cy:"7",r:"1.25",fill:"currentColor"}),n.jsx("circle",{cx:"7",cy:"7",r:"1.25",fill:"currentColor"}),n.jsx("circle",{cx:"11.5",cy:"7",r:"1.25",fill:"currentColor"})]})}function Dm(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M5.25 3.5L8.75 7L5.25 10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function Fm(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M7 2.333v9.334M2.333 7h9.334",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function JE(){return n.jsx("svg",{viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M1.75 3.5h10.5M1.75 7h10.5M1.75 10.5h10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})}function eP({heading:e,actions:o=[],showActivityButton:i=!0,showPonderButton:s=!0,noBorder:l=!1,onActivityClick:d,onPonderClick:p,onDotsClick:m}){const g=o.filter(b=>b.variant==="secondary"),y=o.filter(b=>b.variant==="primary"),x=wp("(prefers-color-scheme: dark)");return n.jsxs(YE,{$noBorder:l,children:[n.jsx(KE,{children:typeof e=="string"?n.jsx(uv,{children:e}):e}),n.jsxs(QE,{children:[n.jsxs(ZE,{children:[n.jsx(Ee,{variant:"ghost",size:"sm",iconOnly:!0,onClick:m,"aria-label":"More options",title:"More options",children:n.jsx(XE,{})}),g.map(b=>n.jsx(Ee,{variant:"secondary",size:"sm",leadingArtwork:n.jsx(Fm,{}),trailingArtwork:n.jsx(Dm,{}),onClick:b.onClick,children:b.label},b.id)),y.map(b=>n.jsx(Ee,{variant:"primary",size:"sm",leadingArtwork:n.jsx(Fm,{}),trailingArtwork:n.jsx(Dm,{}),onClick:b.onClick,children:b.label},b.id))]}),i&&n.jsx(Ee,{variant:"ghost",size:"sm",iconOnly:!0,onClick:d,"aria-label":"Activity",title:"Activity",children:n.jsx(JE,{})}),s&&n.jsx(w0,{dark:x,onClick:p,"aria-label":"Ponder AI"})]})]})}const tP=f.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`,nP=f.div`
  display: flex;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
  padding-left: 48px;
`,rP=f.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow: hidden;
`,oP=f.main`
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
`,Bm="tb:secondary-nav-width",Wm=270,Hm=220,Um=520;function aP({items:e,toolItems:o,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:p,onSettingsClick:m,newItemId:g,aiItemId:y,secNavHeading:x,menuEntries:b,menuHeader:k,pageEntries:S,showSearch:_,searchValue:j,onSearchChange:N,onFilterClick:$,headerSlot:M,bodyContent:C,heading:z,actions:R,showActivityButton:L,showPonderButton:T,noBorder:E,onActivityClick:B,onPonderClick:G,onDotsClick:J,children:W,showSecondaryNav:K=!0,showTopNav:te=!0}){const[ae,ce]=v.useState(()=>{if(typeof window>"u")return Wm;const se=window.localStorage.getItem(Bm),Q=se?parseInt(se,10):NaN;return Number.isFinite(Q)?Math.min(Um,Math.max(Hm,Q)):Wm});return v.useEffect(()=>{typeof window>"u"||window.localStorage.setItem(Bm,String(ae))},[ae]),n.jsxs(tP,{children:[n.jsx(_E,{items:e,toolItems:o,bottomItems:i,workspace:s,user:l,onWorkspaceClick:d,onUserClick:p,onSettingsClick:m,newItemId:g,aiItemId:y}),n.jsxs(nP,{children:[K&&n.jsx(GE,{heading:x,menuEntries:b,menuHeader:k,pageEntries:S,isVisible:!0,showSearch:_,searchValue:j,onSearchChange:N,onFilterClick:$,headerSlot:M,bodyContent:C,width:ae,onWidthChange:ce,minWidth:Hm,maxWidth:Um}),n.jsxs(rP,{children:[te&&n.jsx(eP,{heading:z,actions:R,showActivityButton:L,showPonderButton:T,noBorder:E,onActivityClick:B,onPonderClick:G,onDotsClick:J}),n.jsx(oP,{children:W})]})]})]})}function iP({deadZonePx:e=8,topThresholdPx:o=20,target:i}={}){const[s,l]=v.useState(null),d=v.useRef(0);return v.useEffect(()=>{var y;const p=()=>i?i.scrollTop:typeof window<"u"?window.scrollY:0;d.current=p();const m=()=>{const x=p(),b=x-d.current;Math.abs(b)<e||(b>0&&x>o?l("down"):b<0&&l("up"),d.current=x)},g=i??(typeof window<"u"?window:{});return(y=g.addEventListener)==null||y.call(g,"scroll",m,{passive:!0}),()=>{var x;(x=g.removeEventListener)==null||x.call(g,"scroll",m)}},[e,o,i]),s}const sP=f.button`
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
`,lP=f.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
  min-width: 0;
  text-align: left;
`,cP=f.span`
  display: inline-flex;
  align-items: center;
  color: var(--color-content-tertiary, #87919f);
  flex: 0 0 auto;
`;function qm({label:e,isOpen:o,onClick:i,ariaLabel:s}){return n.jsxs(sP,{type:"button",$active:o,onClick:i,"aria-haspopup":"dialog","aria-expanded":!!o,"aria-label":s,children:[n.jsx(lP,{children:e}),n.jsx(cP,{children:n.jsx($n,{size:14})})]})}const dP=f.header`
  position: sticky;
  top: 0;
  z-index: 800;
  background: var(--color-bg-primary, #ffffff);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  padding-top: env(safe-area-inset-top);
  transform: ${e=>e.$hidden?"translateY(-100%)":"translateY(0)"};
  transition: transform 180ms ease-out;
`,uP=f.div`
  height: 48px;
  display: flex;
  align-items: center;
  gap: var(--space-2, 8px);
  padding: 0 var(--space-3, 12px);
`,pP=f.button`
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
`,hP=f.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  gap: 2px;
`,fP=f.span`
  flex: 0 0 auto;
  font-size: 14px;
  color: var(--color-content-tertiary, #87919f);
  line-height: 1;
  user-select: none;
`;function mP({size:e=18}){return n.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:n.jsx("path",{d:"M4 7h16M4 12h16M4 17h16",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round"})})}const gP=v.forwardRef(function({primaryLabel:o,secondaryLabel:i,tertiaryLabel:s,openOverlay:l,hidden:d,onHamburgerClick:p,onSecondaryClick:m,onTertiaryClick:g},y){return n.jsx(dP,{ref:y,$hidden:d,children:n.jsxs(uP,{children:[n.jsx(pP,{onClick:p,"aria-label":"Open navigation",children:n.jsx(mP,{size:18})}),n.jsxs(hP,{children:[n.jsx(qm,{label:i??o,isOpen:l==="secondary",onClick:m,ariaLabel:"Choose a section"}),s&&n.jsxs(n.Fragment,{children:[n.jsx(fP,{"aria-hidden":"true",children:"›"}),n.jsx(qm,{label:s,isOpen:l==="persona",onClick:g??(()=>{}),ariaLabel:"Choose a persona"})]})]})]})})}),vP=Se`
  from { opacity: 0; }
  to { opacity: 1; }
`,xP=f.div`
  position: fixed;
  inset: 0;
  background: rgba(21, 21, 21, 0.45);
  z-index: 900;
  animation: ${vP} 160ms ease-out;
`;function yP({onDismiss:e}){return v.useEffect(()=>{const o=s=>{s.key==="Escape"&&e()};window.addEventListener("keydown",o);const i=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",o),document.body.style.overflow=i}},[e]),n.jsx(xP,{onClick:e,"aria-hidden":"true"})}const wP=Se`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`,bP=f.div`
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
  animation: ${wP} 220ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-bottom: env(safe-area-inset-bottom);
`,kP=f.div`
  display: flex;
  justify-content: center;
  padding: var(--space-2, 8px) 0 var(--space-1, 4px);
`,_P=f.div`
  width: 36px;
  height: 4px;
  border-radius: 999px;
  background: var(--color-border-opaque, #cbd0d7);
`,CP=f.h2`
  margin: 0;
  padding: var(--space-2, 8px) var(--space-5, 20px) var(--space-3, 12px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-tertiary, #87919f);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,jP=f.div`
  overflow-y: auto;
  padding: 0 0 var(--space-2, 8px);
  flex: 1 1 auto;
  min-height: 0;
`;function pv({title:e,children:o,ariaLabel:i}){return n.jsxs(bP,{role:"dialog","aria-modal":"true","aria-label":i??e,children:[n.jsx(kP,{children:n.jsx(_P,{"aria-hidden":"true"})}),e&&n.jsx(CP,{children:e}),n.jsx(jP,{children:o})]})}const kp=f.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-1, 4px) 0;
`,hl=f.div`
  padding: var(--space-3, 12px) var(--space-5, 20px) var(--space-2, 8px);
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--color-content-tertiary, #87919f);
`,da=f.button`
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
`,Cl=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: var(--color-content-secondary, #475569);
  flex: 0 0 auto;
`,ua=f.span`
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,bi=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-content-link, #446cff);
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
`;function SP({moduleLabel:e,entries:o,onSelect:i}){return n.jsx(pv,{title:e,ariaLabel:`${e} sections`,children:n.jsx(kp,{children:o.map(s=>{if(s.type==="single"){const d=s.item;return n.jsxs(da,{$active:d.isActive,onClick:()=>{var p;(p=d.onClick)==null||p.call(d),i()},"aria-pressed":!!d.isActive,children:[n.jsx(Cl,{children:d.icon}),n.jsx(ua,{children:d.label}),d.isActive&&n.jsx(bi,{"aria-hidden":"true",children:n.jsx(wn,{size:16})})]},d.id)}if(s.type!=="group")return null;const l=s.group;return n.jsxs("div",{children:[n.jsx(hl,{children:l.label}),l.children.map(d=>n.jsxs(da,{$active:d.isActive,$indent:!0,onClick:()=>{var p;(p=d.onClick)==null||p.call(d),i()},"aria-pressed":!!d.isActive,children:[n.jsx(Cl,{children:d.icon}),n.jsx(ua,{children:d.label}),d.isActive&&n.jsx(bi,{"aria-hidden":"true",children:n.jsx(wn,{size:16})})]},d.id))]},l.id)})})})}const NP=f.span`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1 1 auto;
  min-width: 0;
`,MP=f.span`
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,RP=f.span`
  font-size: 12px;
  color: var(--color-content-tertiary, #87919f);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function LP({personas:e,activeId:o,onSelect:i}){return n.jsx(pv,{title:"Personas",ariaLabel:"Choose a persona",children:n.jsx(kp,{children:e.map(s=>{const l=s.id===o;return n.jsxs(da,{$active:l,onClick:()=>i(s.id),"aria-pressed":l,children:[n.jsx(ua,{as:"span",children:n.jsxs(NP,{children:[n.jsx(MP,{children:s.name}),n.jsx(RP,{children:s.role})]})}),l&&n.jsx(bi,{"aria-hidden":"true",children:n.jsx(wn,{size:16})})]},s.id)})})})}const $P=Se`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`,AP=f.aside`
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
  animation: ${$P} 240ms cubic-bezier(0.22, 0.61, 0.36, 1);
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
`,TP=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3, 12px) var(--space-4, 16px);
  border-bottom: 1px solid var(--color-border-opaque, #e8eaee);
  font-family: var(--font-sans, Geist, sans-serif);
`,IP=f.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-content-primary, #151515);
`,EP=f.button`
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
`,PP=f.div`
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
`,zP=60;function OP({title:e,onDismiss:o,children:i}){const s=v.useRef(null),l=v.useRef(null);return v.useEffect(()=>{const d=s.current;if(!d)return;const p=g=>{const y=g.touches[0];l.current={x:y.clientX,y:y.clientY}},m=g=>{if(!l.current)return;const y=g.changedTouches[0],x=y.clientX-l.current.x,b=y.clientY-l.current.y;l.current=null,x<-60&&Math.abs(b)<zP&&o()};return d.addEventListener("touchstart",p,{passive:!0}),d.addEventListener("touchend",m),()=>{d.removeEventListener("touchstart",p),d.removeEventListener("touchend",m)}},[o]),n.jsxs(AP,{ref:s,role:"dialog","aria-modal":"true","aria-label":e??"Navigation",children:[n.jsxs(TP,{children:[n.jsx(IP,{children:e??"Navigation"}),n.jsx(EP,{onClick:o,"aria-label":"Close navigation",children:n.jsx(Ci,{size:18})})]}),n.jsx(PP,{children:i})]})}const DP=f.div`
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
`,FP=f.input`
  all: unset;
  flex: 1 1 auto;
  min-width: 0;
  font-family: var(--font-sans, Geist, sans-serif);
  font-size: 15px;
  color: var(--color-content-primary, #151515);

  &::placeholder {
    color: var(--color-content-tertiary, #87919f);
  }
`,BP=f.span`
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
`,WP=f.div`
  margin: var(--space-2, 8px) 0 0;
  border-top: 1px solid var(--color-border-opaque, #e8eaee);
`;function HP({activeId:e,groups:o,currentMenuEntries:i,user:s,onUserClick:l,onSelectModule:d,onDismiss:p}){const[m,g]=v.useState(""),y=m.trim().toLowerCase(),x=S=>S.toLowerCase().includes(y),b=S=>typeof S=="string"?x(S):!0,k=S=>n.jsxs(da,{$active:S.isActive,$indent:!0,onClick:()=>{var _;(_=S.onClick)==null||_.call(S),p()},"aria-pressed":!!S.isActive,children:[n.jsx(Cl,{children:S.icon}),n.jsx(ua,{children:S.label}),S.isActive&&n.jsx(bi,{"aria-hidden":"true",children:n.jsx(wn,{size:16})})]},S.id);return n.jsxs(OP,{title:"Navigation",onDismiss:p,children:[n.jsxs(DP,{children:[n.jsx(Hu,{size:16}),n.jsx(FP,{type:"search",placeholder:"Search","aria-label":"Search navigation",value:m,onChange:S=>g(S.target.value)})]}),n.jsxs(kp,{children:[o.map(S=>{const _=y?S.items.filter(j=>x(j.label)):S.items;return y&&_.length===0?null:n.jsxs("div",{children:[n.jsx(hl,{children:S.label}),_.map(j=>{const N=j.id===e;return n.jsxs("div",{children:[n.jsxs(da,{$active:N,onClick:()=>{d(j.id),p()},"aria-pressed":N,children:[n.jsx(Cl,{children:j.icon}),n.jsx(ua,{children:j.label}),N&&n.jsx(bi,{"aria-hidden":"true",children:n.jsx(wn,{size:16})})]}),N&&i.length>0&&n.jsx("div",{children:i.map($=>{if($.type==="single")return y&&!b($.item.label)?null:k($.item);if($.type!=="group")return null;const M=$.group,C=y?M.children.filter(z=>b(z.label)):M.children;return y&&C.length===0?null:n.jsxs("div",{children:[n.jsx(hl,{children:M.label}),C.map(k)]},M.id)})})]},j.id)})]},S.id)}),n.jsx(WP,{"aria-hidden":"true"}),n.jsx(hl,{children:"Account"}),n.jsxs(da,{onClick:()=>{l==null||l(),p()},"aria-label":`User: ${s.name}`,children:[n.jsx(BP,{$color:s.avatarColor,"aria-hidden":"true",children:s.initials}),n.jsx(ua,{children:s.name})]})]})]})}const Vm=[{id:"persona-001",name:"Erin",role:"Human Resources",description:"Handles employee profile updates, benefits inquiries, and policy questions. Deployed as Engage in HR workflows for employee conversations and Engage-less for data reconciliation tasks.",voice:"nova",status:"active",tags:["HR","People Ops","Benefits"],configuration:{tone:"Warm, professional, and empathetic. Use clear language and avoid jargon. Always confirm changes before applying.",instructions:"You are Erin, an HR specialist. Help employees with profile updates, benefits questions, and policy inquiries. Always verify employee identity before making changes. Confirm all updates with the employee before saving. If unsure about a policy, direct the employee to their HR business partner.",guardrails:["Never share salary or compensation information for other employees","Always confirm changes before applying them to employee records","Escalate to HR manager if the request involves termination, disciplinary action, or legal matters","Do not process requests that bypass the standard approval workflow"]},creditsUsed:142800,numberOfRuns:312,triggers:28,numberOfActivities:89},{id:"persona-002",name:"Sched",role:"Scheduling",description:"Manages shift swaps, coverage requests, and schedule change notifications. Reaches out to employees about available shifts and handles automated schedule reconciliation.",voice:"alloy",status:"active",tags:["Scheduling","Shift Management","Workforce"],configuration:{tone:"Direct and efficient. Keep messages short since most communication is via SMS. Be respectful of employee time.",instructions:"You are Sched, a scheduling specialist. Help coordinate shift swaps, find coverage for open shifts, and notify employees about schedule changes. When reaching out to potential replacements, provide shift details (date, time, location) upfront. Confirm acceptance before updating the schedule.",guardrails:["Never schedule an employee beyond their weekly hour limit without manager approval","Always check for scheduling conflicts before confirming swaps","Do not contact employees who have marked themselves as unavailable","Escalate to the shift lead if no coverage is found within 2 hours of shift start"]},creditsUsed:98400,numberOfRuns:201,triggers:14,numberOfActivities:47},{id:"persona-003",name:"Onbi",role:"Onboarding",description:"Guides new hires through onboarding checklists, document collection, and orientation scheduling. Follows up on incomplete items and validates submitted documents.",voice:"fable",status:"active",tags:["Onboarding","New Hires","Compliance"],configuration:{tone:"Friendly and encouraging. New hires may feel overwhelmed, so be patient and break tasks into small steps. Celebrate progress.",instructions:"You are Onbi, an onboarding specialist. Guide new hires through their onboarding checklist, help them submit required documents, and schedule orientation sessions. Send reminders for incomplete items. Validate document submissions for completeness before marking items as done.",guardrails:["Never accept expired identification documents","Do not skip required compliance documents even if the employee asks","Escalate to HR if a new hire has not completed critical items by day 5","Do not share other new hire information or progress with anyone except HR"]},creditsUsed:76200,numberOfRuns:155,triggers:11,numberOfActivities:33},{id:"persona-004",name:"Cassie",role:"Customer Support",description:"Handles inbound customer inquiries, ticket triage, and FAQ responses. Manages conversations across chat and email to resolve customer issues.",voice:"shimmer",status:"active",tags:["Support","Customer Service","Tickets"],configuration:{tone:"Friendly, patient, and solution-oriented. Acknowledge the customer's frustration before jumping to solutions. Use their name when possible.",instructions:"You are Cassie, a customer support specialist. Triage inbound tickets, answer common questions, and escalate complex issues to the appropriate team. Always greet the customer by name, acknowledge their issue, and provide a clear next step. If you cannot resolve the issue, warm-transfer to a human agent with context.",guardrails:["Never share internal system details or employee information with customers","Do not promise refunds or credits without manager approval","Escalate to a human agent if the customer asks to speak with a person","Do not process payment information — redirect to the secure payment portal"]},creditsUsed:54600,numberOfRuns:87,triggers:9,numberOfActivities:21},{id:"persona-005",name:"DataOps",role:"Operations",description:"Runs data audits, record cleanup, compliance checks, and report generation. Purely background data work — no direct conversations with employees or customers.",voice:"onyx",status:"active",tags:["Data","Audit","Operations","Reporting"],configuration:{tone:"Technical and precise. Reports should be clear and actionable with specific numbers and record IDs.",instructions:"You are DataOps, a data operations specialist. Run scheduled audits, clean up duplicate or inconsistent records, check compliance status, and generate reports. Always log which records were modified and why. Flag ambiguous cases for manual review rather than guessing.",guardrails:["Never delete records — only flag them for review or archive","Do not modify records that are locked for payroll processing","Always create an audit trail for any data changes","Escalate to the data team lead if more than 5% of records in a batch have issues"]},creditsUsed:2280,numberOfRuns:5,triggers:5,numberOfActivities:5}],UP=f.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-bg-primary, #ffffff);
`,qP=f.main`
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
`;function VP(e){const{activeId:o,selectedPersonaId:i,moduleGroups:s,primaryLabel:l,secondaryLabel:d,menuEntries:p,user:m,onUserClick:g,onMobileNavigate:y,onSelectPersona:x,children:b}=e,[k,S]=v.useState(null),_=iP({deadZonePx:8,topThresholdPx:20}),j=k===null&&_==="down",N=v.useMemo(()=>{if(!i)return null;const z=Vm.find(R=>R.id===i);return(z==null?void 0:z.name)??null},[i]),$=()=>S(null),M=z=>S(z),C=k!==null;return n.jsxs(UP,{children:[n.jsx(gP,{primaryLabel:l,secondaryLabel:d,tertiaryLabel:N,openOverlay:k,hidden:j,onHamburgerClick:()=>M("drawer"),onSecondaryClick:()=>{M(p.length>0?"secondary":"drawer")},onTertiaryClick:N?()=>M("persona"):void 0}),n.jsx(qP,{children:b}),C&&n.jsx(yP,{onDismiss:$}),k==="secondary"&&n.jsx(SP,{moduleLabel:l,entries:p,onSelect:$}),k==="persona"&&n.jsx(LP,{personas:Vm,activeId:i,onSelect:z=>{x(z),$()}}),k==="drawer"&&n.jsx(HP,{activeId:o,groups:s,currentMenuEntries:p,user:m,onUserClick:g,onSelectModule:z=>y(z),onDismiss:$})]})}function GP(e){if(lE()&&e.mobileNav){const i=e.mobileNav;return n.jsx(VP,{activeId:i.activeId,secActiveId:i.secActiveId,activePageId:i.activePageId,selectedPersonaId:i.selectedPersonaId,moduleGroups:i.moduleGroups,primaryLabel:i.primaryLabel,secondaryLabel:i.secondaryLabel,menuEntries:e.menuEntries??[],user:e.user,onUserClick:e.onUserClick,onMobileNavigate:i.onMobileNavigate,onSelectPersona:i.onSelectPersona,children:e.children})}return n.jsx(aP,{...e})}const YP="/Ultron_Onboarding/assets/policy-icon-active-CyAzaB38.svg",KP="/Ultron_Onboarding/assets/automation-icon-active-C_8ZK5uN.svg",QP=[{name:"Alicia Nguyen",role:"Registered Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Marcus Bell",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"expiring",expiresInDays:21},{name:"Priya Shah",role:"Charge Nurse",location:"St. David's North",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Devon Carter",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"valid"},{name:"Sofia Ramirez",role:"Registered Nurse",location:"Methodist Dallas",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"James O'Connor",role:"Licensed Vocational Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Fatima Al-Rashid",role:"Registered Nurse",location:"St. David's North",tenure:"4 yr",credential:"RN License",credentialStatus:"valid"},{name:"Tyler Brooks",role:"Certified Nursing Assistant",location:"Methodist Dallas",tenure:"2 yr",credential:"CNA Certificate",credentialStatus:"expiring",expiresInDays:9},{name:"Grace Kim",role:"Charge Nurse",location:"Baylor Grapevine",tenure:"3 yr",credential:"RN License",credentialStatus:"valid"},{name:"Leon Whitfield",role:"Registered Nurse",location:"St. David's North",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"},{name:"Hannah Torres",role:"Licensed Vocational Nurse",location:"Methodist Dallas",tenure:"3 yr",credential:"LVN License",credentialStatus:"valid"},{name:"Omar Haddad",role:"Registered Nurse",location:"Baylor Grapevine",tenure:"2 yr",credential:"RN License",credentialStatus:"valid"}],ZP=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,profile:{roles:["RN","LPN","CNA","Caregiver","Med Aide","Charge Nurse"],locations:["Riverside Clinic","Lakeside Care","Mercy Ward","Home Visits","Northgate Rehab"],credentials:["RN License","BLS","CPR","TB Screening","CNA Certification"]}},{match:/security|guard|patrol|officer|surveillance/i,profile:{roles:["Security Officer","Site Supervisor","Patrol","Console Operator"],locations:["Tower Plaza","North Gate","Event Hall","West Lot","Loading Dock"],credentials:["Guard Card","First Aid","CPR","Baton Permit"]}},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,profile:{roles:["Event Staff","Bartender","Usher","Setup Crew","Concessions","Lead"],locations:["Main Arena","Concourse A","Club Level","North Gate","Back of House"],credentials:["Food Handler","Alcohol Service","Crowd Safety"]}},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,profile:{roles:["Forklift Op","Picker","Loader","Foreman","Yard Lead","Driver"],locations:["Bay 4","Dock 2","Yard","Line A","North Warehouse","Staging"],credentials:["Forklift Cert","OSHA 10","CDL","Safety Orientation"]}}],XP={roles:["Associate","Team Lead","Coordinator","Specialist","Shift Lead"],locations:["Downtown","North Site","West Branch","Central","East Yard"],credentials:["Onboarding","I-9 Verified","Safety Orientation"]},JP=["Maria","James","Sofia","Kenji","Aisha","Diego","Priya","Marcus","Elena","Tomas","Grace","Omar","Hannah","Luis","Nia","Peter","Yuki","Carlos","Fatima","Noah","Ivy","Samuel","Leila","Andre","Mei","Jonah","Zoe","Rashid","Clara","Dev"],ez=["Ellis","Marin","Tanaka","Okafor","Nguyen","Alvarez","Patel","Cole","Rossi","Haddad","Kim","Santos","Weaver","Duval","Bauer","Reyes","Osei","Lindqvist","Mercer","Bianchi","Farah","Novak","Quinn","Abara"],tz=["New","2 wk","1 mo","4 mo","7 mo","1 yr","2 yr","3 yr","5 yr"];function nz(e){let o=e>>>0;return()=>{o|=0,o=o+1831565813|0;let i=Math.imul(o^o>>>15,1|o);return i=i+Math.imul(i^i>>>7,61|i)^i,((i^i>>>14)>>>0)/4294967296}}function hv(e){let o=2166136261;for(let i=0;i<e.length;i++)o^=e.charCodeAt(i),o=Math.imul(o,16777619);return o>>>0}function rz(e){const o=ZP.find(i=>i.match.test(e));return o?o.profile:XP}function fv(e,o){const i=rz(e),s=nz(hv(e||"teambridge")^o),l=m=>m[Math.floor(s()*m.length)],d=[],p=new Set;for(;d.length<o;){const m=`${l(JP)} ${l(ez)}`;if(p.has(m))continue;p.add(m);const g=s()<.16;d.push({name:m,role:l(i.roles),location:l(i.locations),tenure:l(tz),credential:l(i.credentials),credentialStatus:g?"expiring":"valid",...g?{expiresInDays:3+Math.floor(s()*27)}:{}})}return d}const oz=[{match:/nurse|care|health|medical|clinic|hospital|caregiver|patient|home ?care|rn\b|cna/i,shapes:["12-hour shifts, around the clock","Day / night rotation","On-call weekends"]},{match:/security|guard|patrol|officer|surveillance/i,shapes:["24/7 coverage, 8-hour posts","Weekend-heavy events","Overnight-only crew"]},{match:/event|hospitality|stadium|venue|bar|server|usher|catering|concession/i,shapes:["Event-based, weekends heavy","Split shifts, peak evenings","Game-day surges"]},{match:/warehouse|logistics|temp|construction|forklift|driver|labor|picker|foreman|yard/i,shapes:["Two shifts, Mon–Sat","Peak-season overtime","Early AM dock crew"]}],az=["9-to-5, weekdays","Rotating shifts","Weekend coverage"];function iz(e){var o;return((o=oz.find(i=>i.match.test(e)))==null?void 0:o.shapes)??az}function sz(e){const o=fv(e,8),[i,s,l,d]=o,p=4+hv(s.name)%9;return[{kind:"callout",worker:i.name,role:i.role,detail:"Called out for Saturday — the shift needs a fill."},{kind:"expiring",worker:s.name,role:s.role,detail:`${s.credential} expires in ${p} days.`},{kind:"missing",worker:l.name,role:l.role,detail:"Missed a clock-out Tuesday."},{kind:"missing",worker:d.name,role:d.role,detail:"Didn't punch in Thursday."}]}const lz=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],Gm=["6a–2p","2p–10p","10p–6a"],cz=[4,3,3,4,4,3,3];function dz(e){var l,d;const o=fv(e,12);let i=0;const s=lz.map((p,m)=>{const g=[];for(let y=0;y<cz[m];y++){const x=o[i%o.length].name.split(" ")[0];i++,g.push({time:Gm[y%Gm.length],who:x})}return{label:p,shifts:g}});return(l=s[5])!=null&&l.shifts[0]&&(s[5].shifts[0]={...s[5].shifts[0],who:"Open",flag:"open"}),(d=s[1])!=null&&d.shifts[0]&&(s[1].shifts[0]={...s[1].shifts[0],flag:"watch"}),s}const uz=1100,pz=440,hz=4,su=320,fz=720,lu=2e3,mz=950,gz=[{icon:qr,label:"Build out coverage"},{icon:vn,label:"Chase open shifts"},{icon:Si,label:"Tidy compliance"}],vz=900,Ym=1600,mv=84,Ru=81,Lu=48,Km=[{name:"Dana Okafor",photo:"https://i.pravatar.cc/96?u=dana.okafor"},{name:"Marcus Webb",photo:"https://i.pravatar.cc/96?u=marcus.webb"},{name:"Priya Raman",photo:"https://i.pravatar.cc/96?u=priya.raman"},{name:"Sofia Delgado",photo:"https://i.pravatar.cc/96?u=sofia.delgado"}],xz=7,yz=24,Qm=[{where:'Row 34 · "J. & M. Alvarez"',reason:"Two people in one row — we split them out for you to confirm."},{where:"Row 51 · Dana Whitfield",reason:"Home location was blank — pick a site when you get a sec."},{where:'Row 72 · start date "13/40/24"',reason:"That date didn't read — everything else came in fine."}],wz="Let's start with your people. Drop your team roster into this chat — a spreadsheet, a PDF, even a photo of a printed one works. No need to clean it up first; I'll read it, tidy it, and bring everyone in.",bz='Happy to get to that — right after your people are in. Attach your roster here (the paperclip takes spreadsheets, PDFs, or a photo), or tap "Use sample teammates" below to start with a stand-in crew.',Zm="Next: your schedule. Drop your current one into this chat — any format — and I'll turn it into shifts. Or just tell me the shape of your week and I'll build a realistic one.",kz="That's the essentials in place. What would you like me to take on next? I can build out coverage, chase down open shifts, tidy compliance, or anything else on your plate.";function $u(e){if(!e)return null;const o=e.trim().replace(/\s+/g,""),i=/^https?:\/\//i.test(o)?o:`https://${o}`;let s=o;try{s=new URL(i).hostname}catch{}return s=s.replace(/^www\./,""),(s.split(".")[0]||s).split(/[-_]/).map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" ")||s}function Xm(e){const o=e.replace(/\D/g,"");return o.length===10?`(${o.slice(0,3)}) ${o.slice(3,6)}-${o.slice(6)}`:o.length===11&&o.startsWith("1")?`+1 (${o.slice(1,4)}) ${o.slice(4,7)}-${o.slice(7)}`:e}function Jm(e){return e.includes("	")||e.trim().includes(`
`)}function _z(e){var l;const o=e.trim().split(/\s+/),i=((l=o[0])==null?void 0:l[0])??"",s=o.length>1?o[o.length-1][0]:"";return(i+s).toUpperCase()}function Cz(e){return`https://i.pravatar.cc/64?img=${e*7%70+1}`}const jz={};function Sz({answers:e=jz,onContinued:o}){const[i,s]=v.useState([]),[l,d]=v.useState(""),[p,m]=v.useState([]),[g,y]=v.useState(null),[x,b]=v.useState("roster"),[k,S]=v.useState(!1),[_,j]=v.useState(!1),[N,$]=v.useState(null),[M,C]=v.useState(null),[z,R]=v.useState(null),[L,T]=v.useState(!1),[E,B]=v.useState(""),[G,J]=v.useState(!1),[W,K]=v.useState(!1),[te,ae]=v.useState("grant"),[ce,se]=v.useState(!1),[Q,D]=v.useState(!1),[H,I]=v.useState("delivering"),[A,V]=v.useState(0),[Z,oe]=v.useState(-1),[pe,q]=v.useState(""),[O,Y]=v.useState(!1),[de]=v.useState(()=>{var re;return typeof window<"u"&&!!((re=window.matchMedia)!=null&&re.call(window,"(prefers-reduced-motion: reduce)").matches)}),[le,ge]=v.useState(()=>{var re;return typeof window<"u"&&!!((re=window.matchMedia)!=null&&re.call(window,"(max-width: 600px)").matches)}),xe=v.useRef([]),we=v.useRef(null),be=v.useRef(null),Le=v.useRef(null),Be=v.useRef(null),ze=v.useRef(!1),Te=v.useMemo(()=>{var re;return((re=e.workforceType)==null?void 0:re.trim())||$u(e.companyWebsite)||""},[e]),Ge=v.useMemo(()=>iz(Te),[Te]),Ve=v.useMemo(()=>{const re=$u(e.companyWebsite),ke=[{kind:"text",text:`Welcome to your ${re?`${re} `:""}workspace — I'm Ultron, and I'll be doing the heavy lifting around here. Together we'll bring in your team, shape your schedule, and line up the day-to-day work I can take off your plate.`}];return ke.push({kind:"text",text:wz}),ke.push({kind:"rosterCta"}),ke},[e]),it=(re,ve)=>{xe.current.push(window.setTimeout(ve,re))};v.useEffect(()=>()=>{xe.current.forEach(re=>window.clearTimeout(re)),we.current&&window.clearTimeout(we.current)},[]),v.useEffect(()=>{var ke;const re=(ke=window.matchMedia)==null?void 0:ke.call(window,"(max-width: 600px)");if(!re)return;const ve=()=>ge(re.matches);return ve(),re.addEventListener("change",ve),()=>re.removeEventListener("change",ve)},[]);const We=re=>{if($({file:re,state:"uploading",progress:8}),de){$({file:re,state:"uploading",progress:92});return}it(180,()=>$({file:re,state:"uploading",progress:38})),it(460,()=>$({file:re,state:"uploading",progress:74})),it(780,()=>$({file:re,state:"uploading",progress:92}))},yt=re=>{if(C({file:re,state:"uploading",progress:8}),de){C({file:re,state:"complete",progress:100});return}it(180,()=>C({file:re,state:"uploading",progress:38})),it(460,()=>C({file:re,state:"uploading",progress:74})),it(780,()=>C({file:re,state:"complete",progress:100}))};v.useEffect(()=>{if(de){V(Ve.length),oe(-1),I("ready");return}const re=[];let ve=null;const ke=(et,Kt)=>{re.push(window.setTimeout(Kt,et))},mt=et=>{if(et>=Ve.length){Y(!1),I("ready");return}Y(!0),ke(pz,()=>{Y(!1),oe(et);const Kt=Ve[et];if(Kt.kind!=="text"){ke(fz,()=>{V(et+1),oe(-1),ke(su,()=>mt(et+1))});return}q("");const Tn=Kt.text;let to=0;ve=window.setInterval(()=>{to+=1,q(Tn.slice(0,to)),to>=Tn.length&&(ve&&window.clearInterval(ve),ve=null,ke(su,()=>{V(et+1),oe(-1),q(""),ke(su,()=>mt(et+1))}))},hz)})};return I("delivering"),mt(0),()=>{re.forEach(et=>window.clearTimeout(et)),ve&&window.clearInterval(ve)}},[Ve,de]),v.useEffect(()=>{if(x==="done")return Le.current=window.setTimeout(()=>{ae("grant"),se(!0)},vz),()=>{Le.current&&window.clearTimeout(Le.current)}},[x]),v.useEffect(()=>{const re=ve=>{const ke=ve.target;ke!=null&&ke.isContentEditable||(ke==null?void 0:ke.tagName)==="INPUT"||(ke==null?void 0:ke.tagName)==="TEXTAREA"||(ke==null?void 0:ke.tagName)==="SELECT"||ve.metaKey||ve.ctrlKey||ve.altKey||ve.key.toLowerCase()!=="m"||(ve.preventDefault(),se(!0))};return document.addEventListener("keydown",re),()=>document.removeEventListener("keydown",re)},[]);const ht=()=>{const re=E.trim();J(!0),Le.current&&window.clearTimeout(Le.current),Le.current=window.setTimeout(()=>{se(!1),it(460,()=>{s(ve=>[...ve,{role:"ultron",text:"",card:"inboundCall",phone:re}])})},Ym)},Ut=()=>{K(!0),Le.current&&window.clearTimeout(Le.current),Le.current=window.setTimeout(()=>se(!1),Ym)};v.useEffect(()=>{var re;(re=Be.current)==null||re.scrollIntoView({block:"end",behavior:"smooth"})},[i,g,H,A,Z,pe,O]);const ct=(l.trim().length>0||p.length>0)&&g===null,Ot=re=>{const ve=Array.from(re,ke=>ke.name);m(ke=>[...ke,...ve.filter(mt=>!ke.includes(mt))])},Vn=re=>m(ve=>ve.filter(ke=>ke!==re)),qt=(re,ve={})=>{const ke=de?300:ve.workingMs??uz,mt=de?200:mz;y(ve.workingLabel??"");let et=0;const Kt=()=>{var kr;we.current&&(window.clearTimeout(we.current),we.current=null);const Tn=re[et];if(!Tn)return;const to=et===re.length-1;if(et+=1,s(Ro=>[...Ro,Tn]),to){y(null),be.current=null,(kr=ve.then)==null||kr.call(ve);return}y(""),we.current=window.setTimeout(Kt,mt)};be.current=Kt,we.current=window.setTimeout(Kt,ke)},nr=()=>{var re;le&&((re=be.current)==null||re.call(be))},rr=(re,ve=[])=>{i.some(ke=>ke.role==="operator")||o==null||o(),s(ke=>[...ke,{role:"operator",text:re,...ve.length?{attachments:ve}:{}}])},wr=(re,ve)=>{S(!1),j(!0),ve&&We(ve),qt([{role:"ultron",text:`Got it — read ${re}: ${mv} people, licenses, home locations. 3 columns I didn't recognize; I kept them so nothing's lost.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:`That's ${Ru} people in. ${Zm}`},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Bringing your people in…",workingMs:lu,then:()=>b("schedule")})},Ie=()=>{S(!0),j(!0),qt([{role:"ultron",text:`Done — I spun up ${Lu} sample teammates that look like your operation. Every one is tagged "Sample" — one tap to remove them when your real roster lands.`},{role:"ultron",text:"",card:"roster"},{role:"ultron",text:Zm},{role:"ultron",text:"",card:"scheduleCta"}],{workingLabel:"Generating sample teammates…",workingMs:lu,then:()=>b("schedule")})},Ze=re=>{re.file&&yt(re.file),R({problems:sz(Te),week:dz(Te)});const ve=re.fileName?`Read ${re.fileName} — turned it into next week's shifts. A few columns I didn't recognize, kept so nothing's lost.`:`Built you a realistic week — ${re.shape.toLowerCase()}. Here's what's in it.`;qt([{role:"ultron",text:ve},{role:"ultron",text:"",card:"week"},{role:"ultron",text:kz}],{workingLabel:re.fileName?"Turning it into shifts…":"Building your week…",workingMs:lu,then:()=>b("done")})},dt=(re,ve=[])=>{if(!re&&ve.length===0||g!==null)return;if(rr(re,ve),x==="roster"){ve.length>0?wr(ve[0],{name:ve[0]}):Jm(re)?wr("your pasted roster"):qt([{role:"ultron",text:bz}]);return}if(x==="schedule"){ve.length>0?Ze({fileName:ve[0],file:{name:ve[0]}}):Jm(re)?Ze({fileName:"your pasted schedule"}):Ze({shape:re});return}T(!0);const ke=i.filter(mt=>mt.role==="ultron").length;qt([{role:"ultron",text:dp(re,ke)}])},_t=()=>{const re=l.trim();!re&&p.length===0||g!==null||(dt(re,p),d(""),m([]))},or=re=>{if(!re||re.length===0||x!=="roster"||g!==null)return;const ve=Array.from(re),ke=ve.map(mt=>mt.name);rr("",ke),wr(ke[0],{name:ve[0].name,type:ve[0].type,size:ve[0].size})},eo=re=>{if(!re||re.length===0||x!=="schedule"||g!==null)return;const ve=Array.from(re),ke=ve.map(mt=>mt.name);rr("",ke),Ze({fileName:ke[0],file:{name:ve[0].name,type:ve[0].type,size:ve[0].size}})},Gn=g!==null?[]:x==="roster"?[{icon:qr,label:"No roster handy? Use sample teammates",onTap:()=>{rr("Use sample teammates"),Ie()}}]:x==="schedule"?Ge.map(re=>({icon:vn,label:re,onTap:()=>{rr(re),Ze({shape:re})}})):L?[]:gz.map(({icon:re,label:ve})=>({icon:re,label:ve,onTap:()=>dt(ve)})),br=Gn.length>0?n.jsx($D,{"aria-label":"Suggestions",children:Gn.map(({icon:re,label:ve,onTap:ke})=>n.jsxs(c0,{type:"button",onClick:ke,children:[re&&n.jsx(re,{size:14}),ve]},ve))}):null,ar=x!=="done"&&Gn.length>0?n.jsx(LD,{"aria-label":"Suggestions",children:Gn.map(({icon:re,label:ve,onTap:ke})=>n.jsxs(c0,{type:"button",onClick:ke,children:[re&&n.jsx(re,{size:14}),ve]},ve))}):null,Ai=x==="roster"?"Attach your roster, or ask Ultron anything…":x==="schedule"?"Attach your schedule, or describe your week…":"Tell Ultron what to take on next…",Nt=te==="waitlist",Ti=Nt?W:G;return n.jsxs(Lz,{children:[n.jsx(U2,{links:1}),n.jsx(q2,{}),n.jsx($z,{children:n.jsxs(Iz,{$condensed:Q,children:[n.jsx(Ez,{$condensed:Q,children:n.jsx(lt,{mark:"magnetic",size:140,tone:"light",state:"active","aria-label":"Ultron"})}),n.jsxs(Pz,{$condensed:Q,children:[n.jsx(zz,{$condensed:Q,children:"Welcome"}),n.jsx(Oz,{$condensed:Q,children:"Finish your setup, right in the chat"})]})]})}),n.jsx(Dz,{onWheel:()=>{ze.current=!0},onTouchMove:()=>{ze.current=!0},onScroll:re=>{if(!ze.current)return;const ve=re.currentTarget.scrollTop;D(ke=>ke?ve>8:ve>56)},children:n.jsxs(Kz,{children:[n.jsx(Zs,{"data-from":"ultron",children:n.jsxs(t0,{children:[Ve.slice(0,Z>=0?Z+1:A).map((re,ve)=>{if(re.kind==="rosterCta"){const mt=x==="roster"&&!_;return n.jsx(v.Fragment,{children:n.jsx(e0,{children:_?x==="roster"?N?n.jsx(Qs,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:N.state,progress:N.progress,file:N.file,onFileSelect:()=>{},onClear:()=>{}}):n.jsxs(Xs,{children:[n.jsx(Js,{"aria-hidden":"true",children:n.jsx(qr,{size:16})}),n.jsxs(el,{children:[n.jsx(tl,{children:"Roster"}),n.jsx(nl,{children:g||"Generating sample teammates…"})]}),n.jsx(rl,{"aria-hidden":"true",children:n.jsx(r0,{})})]}):n.jsxs(Xs,{children:[n.jsx(Js,{"aria-hidden":"true",children:n.jsx(du,{size:16})}),n.jsxs(el,{children:[n.jsx(tl,{children:"Roster"}),n.jsx(nl,{children:"Spreadsheet, PDF, or a photo of a printed one"})]}),n.jsx(rl,{"aria-hidden":"true",children:n.jsx(yn,{size:18})})]}):n.jsxs(Wz,{children:[mt&&!N&&n.jsx(Hz,{"aria-hidden":"true",children:n.jsx(Uz,{children:[...Km,...Km].map((et,Kt)=>n.jsx(qz,{children:n.jsx("img",{src:et.photo,alt:""})},`${et.name}-${Kt}`))})}),n.jsx(Qs,{"data-roster-flow":mt&&!N?"":void 0,variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your roster here, or browse your files",description:"Spreadsheet, PDF, or a photo of a printed one",state:(N==null?void 0:N.state)??"empty",progress:(N==null?void 0:N.progress)??0,file:(N==null?void 0:N.file)??null,disabled:g!==null&&!N,footerSlot:mt&&H==="ready"?ar:void 0,onFileSelect:et=>or([et]),onClear:()=>{}})]})})},`beat-${ve}`)}const ke=ve===Z;return n.jsxs(n0,{"data-from":"ultron",children:[ke?pe:re.text,ke&&n.jsx(Yz,{"aria-hidden":"true"})]},`beat-${ve}`)}),O&&n.jsx(Vz,{children:n.jsxs(s0,{"aria-label":"Ultron is typing",children:[n.jsx(aa,{}),n.jsx(aa,{}),n.jsx(aa,{})]})})]})}),i.map((re,ve)=>re.card?n.jsx(Zs,{"data-from":"ultron",children:n.jsx(t0,{children:n.jsx(e0,{children:re.card==="roster"?n.jsx(Nz,{sample:k}):re.card==="inboundCall"?n.jsx(Rz,{phone:re.phone??E}):re.card==="scheduleCta"?x==="schedule"?M?n.jsx(Qs,{variant:"area",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:M.state,progress:M.progress,file:M.file,onFileSelect:()=>{},onClear:()=>{}}):g!==null?n.jsxs(Xs,{children:[n.jsx(Js,{"aria-hidden":"true",children:n.jsx(vn,{size:16})}),n.jsxs(el,{children:[n.jsx(tl,{children:"Schedule"}),n.jsx(nl,{children:g||"Building your week…"})]}),n.jsx(rl,{"aria-hidden":"true",children:n.jsx(r0,{})})]}):n.jsx(Qs,{variant:"area",browseButtonVariant:"primary",accept:".csv,.xlsx,.xls,.pdf,image/*",title:"Drop your schedule here, or browse your files",description:"Spreadsheet, PDF, or a photo — any format works",state:"empty",progress:0,file:null,footerSlot:ar,onFileSelect:ke=>eo([ke]),onClear:()=>{}}):n.jsxs(Xs,{children:[n.jsx(Js,{"aria-hidden":"true",children:n.jsx(du,{size:16})}),n.jsxs(el,{children:[n.jsx(tl,{children:"Schedule"}),n.jsx(nl,{children:"Spreadsheet, PDF, or a photo — any format works"})]}),n.jsx(rl,{"aria-hidden":"true",children:n.jsx(yn,{size:18})})]}):z?n.jsx(Mz,{problems:z.problems,week:z.week}):null})})},ve):n.jsx(Zs,{"data-from":re.role,children:n.jsxs(PD,{"data-from":re.role,children:[re.text&&n.jsx(n0,{"data-from":re.role,children:re.text}),re.attachments&&n.jsx(zD,{children:re.attachments.map(ke=>n.jsxs(d0,{children:[n.jsx(Yr,{size:14}),ke]},ke))})]})},ve)),g!==null&&n.jsx(Zs,{"data-from":"ultron",children:n.jsx(_D,{type:"button",onClick:nr,disabled:!le,"aria-label":g?`${g} Tap to continue.`:"Ultron is replying. Tap to continue.",children:n.jsxs(kD,{children:[n.jsxs(s0,{"aria-hidden":"true",children:[n.jsx(aa,{}),n.jsx(aa,{}),n.jsx(aa,{})]}),g&&n.jsx(SD,{role:"status","aria-live":"polite",children:g}),n.jsx(CD,{"aria-hidden":"true",children:"Tap to continue"})]})})}),n.jsx("div",{ref:Be})]})}),H==="ready"&&n.jsxs(ND,{children:[n.jsx(MD,{role:g!==null?"status":"img","aria-label":g!==null?"Ultron is working":"Ultron",children:n.jsxs(RD,{"aria-hidden":"true",children:[n.jsx(l0,{$show:g!==null,children:n.jsx(lt,{mark:"lines",size:30,tone:"auto",state:"active",coreHalo:!1,"aria-hidden":"true"})}),n.jsx(l0,{$show:g===null,children:n.jsx(lt,{mark:"magnetic2d",size:24,tone:"auto",state:"idle",motionSpeed:2.5,coreHalo:!1,"aria-hidden":"true"})})]})}),x==="done"&&br,n.jsxs(AD,{onSubmit:re=>{re.preventDefault(),_t()},children:[p.length>0&&n.jsx(ID,{"aria-label":"Files to send",children:p.map(re=>n.jsxs(d0,{children:[n.jsx(Yr,{size:14}),re,n.jsx(ED,{type:"button","aria-label":`Remove ${re}`,onClick:()=>Vn(re),children:n.jsx(gi,{size:12})})]},re))}),n.jsxs(TD,{children:[n.jsx(u0,{children:n.jsx(eg,{state:"idle",onSelect:Ot})}),n.jsx(OD,{rows:1,value:l,placeholder:Ai,"aria-label":"Message Ultron",onChange:re=>d(re.target.value),onKeyDown:re=>{re.key==="Enter"&&!re.shiftKey&&(re.preventDefault(),_t())},onPaste:re=>{var ke;const ve=(ke=re.clipboardData)==null?void 0:ke.files;ve&&ve.length>0&&(re.preventDefault(),Ot(ve))}}),n.jsx(u0,{children:n.jsx(wa,{state:ct?"ready":"disabled-invalid",onSend:_t})})]})]})]}),n.jsx(eD,{}),n.jsxs(M8,{open:ce,onClose:()=>se(!1),size:"lg","aria-label":`${Nt?"Join waitlist":"Unlock grant"} — Ultron access`,children:[n.jsxs(tD,{children:[n.jsx(rD,{"aria-hidden":"true",children:n.jsx(V2,{size:300})}),n.jsx(oD,{type:"button","aria-label":"Close",onClick:()=>se(!1),children:n.jsx(gi,{size:18})}),n.jsxs(aD,{children:[n.jsx(iD,{"aria-hidden":"true"}),Nt?"Ultron early access":"Your welcome grant"]}),!Nt&&n.jsxs(sD,{"aria-label":"$1,000 of work on us",children:[n.jsxs(lD,{children:[n.jsx(cD,{children:"$"}),"1,000"]}),n.jsxs(dD,{children:["of work",n.jsx("br",{}),n.jsx("strong",{children:"on us"})]})]}),n.jsx(uD,{$prominent:Nt,children:Nt?"Be first when access opens.":"Turn Ultron loose."}),n.jsx(pD,{children:Nt?"Ultron is opening access in waves. Leave your number and we’ll text the moment your workspace is unblocked.":"Ultron proposes the work. You call the shots. Your first 100,000 credits are covered."}),n.jsx(hD,{"aria-label":Nt?"Waitlist benefits":"Grant benefits",children:Nt?n.jsxs(n.Fragment,{children:[n.jsx(oa,{children:"Priority access"}),n.jsx(oa,{children:"One text when ready"}),n.jsx(oa,{children:"No commitment"})]}):n.jsxs(n.Fragment,{children:[n.jsx(oa,{children:"100,000 credits"}),n.jsx(oa,{children:"Up to 3 months"}),n.jsx(oa,{children:"You approve every action"})]})}),Ti?n.jsxs(yD,{role:"status",children:[n.jsx(yn,{size:20}),Nt?"You’re on the list — we’ll text as soon as your access opens.":"You’re set — I’ll text before I act. Your $1,000 grant is live."]}):n.jsxs(fD,{onSubmit:re=>{re.preventDefault(),E.trim()&&(Nt?Ut():ht())},children:[n.jsx(mD,{htmlFor:"welcome-grant-phone",children:Nt?"Where should we send your access text?":"Where should Ultron send proposals?"}),n.jsxs(gD,{children:[n.jsx(vD,{id:"welcome-grant-phone",type:"tel",inputMode:"numeric",pattern:"[0-9]*",maxLength:15,value:E,placeholder:"Your phone number","aria-label":"Mobile number",autoComplete:"tel",onChange:re=>B(re.target.value.replace(/\D/g,""))}),n.jsx(xD,{type:"submit",variant:"tertiary",size:"lg",disabled:!E.trim(),children:Nt?"Join waitlist":"Unlock $1,000"})]})]}),n.jsx(wD,{children:Nt?"Access updates only — never spam. Msg & data rates may apply. Reply STOP to opt out.":"Proposals only — never spam. Msg & data rates may apply. Reply STOP to opt out."})]}),n.jsxs(nD,{type:"button",onClick:()=>{Le.current&&window.clearTimeout(Le.current),ae(re=>re==="grant"?"waitlist":"grant")},children:["Demo: show ",Nt?"welcome grant":"waitlist"]})]})]})}function Nz({sample:e}){const[o,i]=v.useState(!1),[s,l]=v.useState(!0),d=QP.slice(0,6),p=(e?Lu:Ru)-d.length;return n.jsxs(_p,{"aria-label":e?"Sample teammates":"Roster import result",children:[n.jsxs(fO,{type:"button","aria-expanded":s,"aria-controls":"welcome-roster-people",onClick:()=>l(m=>!m),children:[e?n.jsx(mO,{children:n.jsxs(gO,{children:[Lu," sample teammates, ready to run a full week"]})}):n.jsxs(vO,{children:[n.jsxs(xO,{children:[Ru," ",n.jsxs(yO,{children:["/",mv]})]}),n.jsxs(wO,{children:[n.jsx(yn,{size:16})," imported clean"]})]}),n.jsx(Au,{$open:s,"aria-hidden":"true",children:n.jsx($n,{size:16})})]}),s&&n.jsxs(bO,{id:"welcome-roster-people","aria-label":e?"Sample teammates":"Imported teammates",children:[d.map((m,g)=>n.jsxs(kO,{$i:g,children:[n.jsxs(_O,{"aria-hidden":"true",children:[_z(m.name),n.jsx("img",{src:Cz(g),alt:"",loading:"lazy",onError:y=>{y.currentTarget.style.display="none"}})]}),n.jsxs(CO,{children:[n.jsx(jO,{children:m.name}),n.jsxs(SO,{children:[m.role," · ",m.location," · ",m.tenure]})]}),m.credentialStatus==="expiring"?n.jsxs(Ln,{size:"sm",variant:"subtle",color:"yellow",dot:!0,children:[m.credential," · ",m.expiresInDays,"d"]}):n.jsx(Ln,{size:"sm",variant:"subtle",color:"green",children:m.credential}),e&&n.jsx(Ln,{size:"sm",variant:"outline",color:"purple",children:"Sample"})]},m.name)),n.jsx(NO,{children:e?`+ ${p} more · every one tagged “Sample”`:`+ ${p} more imported clean`})]}),!e&&n.jsxs(MO,{children:[n.jsxs(RO,{type:"button","aria-expanded":o,"aria-controls":"welcome-roster-review-rows",onClick:()=>i(m=>!m),children:[n.jsxs(LO,{children:[Qm.length," rows kept for review"]}),n.jsxs($O,{children:[n.jsx(yv,{"aria-hidden":"true",children:n.jsx(ha,{size:15})}),n.jsx(Au,{$open:o,"aria-hidden":"true",children:n.jsx($n,{size:16})})]})]}),o&&n.jsx(wv,{id:"welcome-roster-review-rows","aria-label":"Rows held for review",children:Qm.map(m=>n.jsxs(bv,{children:[n.jsx(TO,{"aria-hidden":"true",children:n.jsx(ha,{size:15})}),n.jsxs(kv,{children:[n.jsx(IO,{children:m.where}),n.jsx(EO,{children:m.reason})]})]},m.where))})]})]})}function Mz({problems:e,week:o}){const[i,s]=v.useState(!1);return n.jsxs(_p,{"aria-label":"Your week",children:[n.jsxs(PO,{children:[n.jsxs(OO,{children:[n.jsxs(o0,{children:[n.jsx(a0,{children:xz})," days"]}),n.jsx(DO,{"aria-hidden":"true",children:"·"}),n.jsxs(o0,{children:[n.jsx(a0,{children:yz})," shifts"]})]}),n.jsxs(zO,{type:"button","aria-expanded":i,"aria-controls":"welcome-week-waiting-rows","aria-label":`${e.length} things waiting in your week`,title:`${e.length} things waiting in your week`,onClick:()=>s(l=>!l),children:[n.jsx(yv,{"aria-hidden":"true",children:n.jsx(ha,{size:15})}),n.jsx(Au,{$open:i,"aria-hidden":"true",children:n.jsx($n,{size:16})})]})]}),i&&n.jsx(AO,{id:"welcome-week-waiting-rows","aria-label":"Waiting in your week",children:e.map((l,d)=>n.jsxs(bv,{children:[n.jsx(FO,{$kind:l.kind,"aria-hidden":"true",children:l.kind==="missing"?n.jsx(vn,{size:15}):n.jsx(ha,{size:15})}),n.jsxs(kv,{children:[n.jsxs(BO,{children:[l.worker," · ",l.role]}),n.jsx(WO,{children:l.detail})]})]},`${l.worker}-${d}`))}),n.jsx(HO,{children:n.jsx(UO,{role:"table","aria-label":"Next week's shifts",children:o.map(l=>n.jsxs(qO,{role:"column",children:[n.jsx(VO,{children:l.label}),l.shifts.map((d,p)=>n.jsxs(GO,{$flag:d.flag,children:[n.jsx(YO,{children:d.time}),n.jsx(KO,{children:d.who})]},`${l.label}-${p}`))]},l.label))})})]})}function Rz({phone:e}){return n.jsxs(Jz,{role:"article","aria-label":`Inbound call to ${Xm(e)}`,children:[n.jsxs(eO,{children:[n.jsxs(tO,{children:[n.jsxs(nO,{"aria-hidden":"true",children:[n.jsx(rO,{}),n.jsx($l,{size:18})]}),n.jsxs(oO,{children:[n.jsx(aO,{children:"Inbound call"}),n.jsx(iO,{children:"Teambridge onboarding"}),n.jsx(sO,{children:Xm(e)})]})]}),n.jsxs(lO,{children:[n.jsx(cO,{"aria-hidden":"true"}),"Connected"]})]}),n.jsxs(dO,{children:[n.jsx(uO,{children:"Live transcript"}),n.jsxs(pO,{children:[n.jsx(lt,{size:22}),n.jsx("span",{children:"Maya · Teambridge"})]}),n.jsx(hO,{children:"Hi — I saw you just unlocked your Ultron grant. I’m reaching out to help get your first workflow live and make sure your $1,000 credit is applied. Is now a good time?"})]})]})}const Lz=f.div`
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
`,gv="color-mix(in srgb, var(--color-bg-primary) 60%, transparent)",vv=qe`
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: ${gv};
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  backdrop-filter: blur(18px) saturate(180%);
  pointer-events: none;
`,xv=e=>qe`
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  ${e==="down"?"top: 100%;":"bottom: 100%;"}
  height: var(--space-10);
  z-index: 0;
  background: linear-gradient(${e==="down"?"to bottom":"to top"}, ${gv}, transparent);
  pointer-events: none;
`,$z=f.header`
  flex-shrink: 0;
  position: relative;
  isolation: isolate;
  /* Sit above the scroll area so the fade below paints over its content. */
  z-index: 2;
  background: transparent;

  &::before {
    ${vv}
  }
  &::after {
    ${xv("down")}
  }
`,Az=Se`
  from { opacity: 0.56; transform: translateY(-5px); }
  to   { opacity: 1; transform: translateY(0); }
`,Tz=Se`
  from { opacity: 0.56; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
`,Iz=f.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: ${e=>e.$condensed?"row":"column"};
  align-items: center;
  justify-content: ${e=>e.$condensed?"flex-start":"center"};
  gap: ${e=>e.$condensed?"var(--space-3)":"var(--space-4)"};
  width: 100%;
  /* Match the thread column exactly: 720px of content plus the same side
     padding, so the header lockup left-aligns with the bubbles and composer. */
  max-width: calc(720px + var(--space-6) * 2);
  margin: 0 auto;
  padding: ${e=>e.$condensed?"var(--space-4) var(--space-6) var(--space-2)":"var(--space-6) var(--space-6) var(--space-3)"};
  animation: ${e=>e.$condensed?Tz:Az}
    220ms var(--ease-out) both;
  transition:
    gap 220ms var(--ease-out),
    padding 220ms var(--ease-out);

  @media (max-width: 600px) {
    gap: ${e=>e.$condensed?"var(--space-2)":"var(--space-3)"};
    padding: ${e=>e.$condensed?"var(--space-2) var(--space-4) var(--space-1)":"var(--space-4) var(--space-4) var(--space-3)"};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
`,Ez=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  width: ${e=>e.$condensed?"36px":"140px"};
  height: ${e=>e.$condensed?"36px":"140px"};
  opacity: 1;
  visibility: visible;
  transition:
    width 220ms var(--ease-out),
    height 220ms var(--ease-out);

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
    transform: scale(${e=>e.$condensed?.3143:1});
  }

  @media (max-width: 600px) {
    width: ${e=>e.$condensed?"32px":"140px"};
    height: ${e=>e.$condensed?"32px":"140px"};

    & > canvas {
      transform: scale(${e=>e.$condensed?.3143:1});
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Pz=f.div`
  display: flex;
  flex-direction: column;
  align-items: ${e=>e.$condensed?"flex-start":"center"};
  min-width: 0;
  text-align: ${e=>e.$condensed?"left":"center"};
`,zz=f.span`
  font-family: var(--font-sans);
  font-size: ${e=>e.$condensed?"var(--text-sm)":"clamp(24px, 3vw, 30px)"};
  font-weight: ${e=>e.$condensed?"var(--font-weight-medium)":"var(--font-weight-bold)"};
  line-height: ${e=>e.$condensed?"var(--line-height-relaxed)":"var(--line-height-tight)"};
  letter-spacing: ${e=>e.$condensed?"var(--tracking-wide)":"var(--tracking-tight)"};
  color: var(--color-content-primary);

  @media (max-width: 600px) {
    font-size: ${e=>e.$condensed?"var(--text-sm)":"24px"};
  }
`,Oz=f.span`
  font-family: var(--font-sans);
  font-size: ${e=>e.$condensed?"var(--text-sm)":"var(--text-md)"};
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--tracking-normal);
  color: var(--color-content-tertiary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: ${e=>e.$condensed?"var(--text-xs)":"var(--text-sm)"};
    line-height: ${e=>e.$condensed?"var(--line-height-snug)":"var(--line-height-relaxed)"};
  }

  @media (max-width: 600px) and (max-height: 700px) {
    display: ${e=>e.$condensed?"none":"block"};
  }
`,Dz=f.div`
  position: relative;
  z-index: 1;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`,Mo=Se`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,e0=f.div`
  animation: ${Mo} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Fz=Se`
  from { opacity: 0; transform: translateY(5px); }
  to   { opacity: 1; transform: translateY(0); }
`,Bz=Se`
  from { transform: translateX(0); }
  to   { transform: translateX(-192px); }
`,Wz=f.div`
  position: relative;
  width: 100%;
`,Hz=f.div`
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
`,Uz=f.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: max-content;
  animation: ${Bz} 18s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,qz=f.span`
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
`,Qs=f(sg)`
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
    animation: ${Fz} 300ms var(--ease-out) both;
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
`,Vz=f.div`
  display: flex;
  justify-content: flex-start;
  animation: ${Mo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Gz=Se`
  0%, 100% { opacity: 1; }
  50%      { opacity: 0; }
`,Yz=f.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  margin-left: 2px;
  vertical-align: -0.15em;
  background: var(--color-content-tertiary);
  animation: ${Gz} 1s step-end infinite;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,Kz=f.div`
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
`,Zs=f.div`
  display: flex;
  animation: ${Mo} var(--duration-slow, 420ms) var(--ease-out) both;

  &[data-from='operator'] { justify-content: flex-end; }
  &[data-from='ultron'] { justify-content: flex-start; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,t0=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  width: 100%;

  @media (max-width: 600px) {
    gap: var(--space-2);
  }
`,n0=f.div`
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
`,Xs=f.div`
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
`,Js=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-md);
  background: var(--color-bg-secondary);
  color: var(--color-content-secondary);
`,el=f.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
`,tl=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,nl=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-primary);
`,Qz=Se`
  to { transform: rotate(360deg); }
`,r0=f.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-full);
  /* 2px is the ring's stroke width, not a spacing value. */
  border: 2px solid var(--color-border-opaque);
  border-top-color: var(--color-content-secondary);
  animation: ${Qz} 700ms linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 1600ms;
  }
`,rl=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  color: var(--color-success-content);
`,_p=f.div`
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
`,Zz=Se`
  0% { transform: scale(0.82); opacity: 0.48; }
  70%, 100% { transform: scale(1.45); opacity: 0; }
`,Xz=Se`
  0%, 100% { opacity: 0.68; }
  50% { opacity: 1; }
`,Jz=f(_p)`
  gap: var(--space-3);
  overflow: hidden;
  border-color: color-mix(in srgb, var(--color-success-content) 24%, var(--color-border-opaque));
  background:
    linear-gradient(
      135deg,
      color-mix(in srgb, var(--color-success-content) 5%, var(--color-bg-primary)),
      var(--color-bg-primary) 52%
    );

  @media (max-width: 600px) {
    padding: var(--space-4);
  }
`,eO=f.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`,tO=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  min-width: 0;
`,nO=f.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-10);
  height: var(--space-10);
  border-radius: var(--radius-full);
  background: var(--color-success-content);
  color: var(--color-bg-primary);
`,rO=f.span`
  position: absolute;
  inset: 0;
  border: 1px solid var(--color-success-content);
  border-radius: inherit;
  animation: ${Zz} 2200ms var(--ease-out) infinite;
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,oO=f.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
`,aO=f.span`
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-success-content);
`,iO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-primary);
`,sO=f.span`
  overflow: hidden;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-snug, 1.35);
  color: var(--color-content-tertiary);
  text-overflow: ellipsis;
  white-space: nowrap;
`,lO=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  flex-shrink: 0;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-full);
  background: color-mix(in srgb, var(--color-success-content) 10%, transparent);
  font-family: var(--font-sans);
  font-size: 11px;
  font-weight: var(--font-weight-medium);
  color: var(--color-success-content);
`,cO=f.span`
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background: currentColor;
  animation: ${Xz} 1500ms ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`,dO=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-3);
  border: 1px solid var(--color-border-opaque);
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-bg-secondary) 72%, transparent);
`,uO=f.span`
  font-family: var(--font-sans);
  font-size: 10px;
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,pO=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,hO=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed, 1.55);
  color: var(--color-content-secondary);

  @media (max-width: 600px) {
    font-size: var(--text-xs);
  }
`,fO=f.button`
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
`,mO=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
`,gO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
`,vO=f.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
`,xO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,yO=f.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-regular);
  color: var(--color-content-tertiary);
`,wO=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-success-content);

  svg { flex-shrink: 0; }
`,bO=f.div`
  display: flex;
  flex-direction: column;
`,kO=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;
  animation: ${Mo} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: calc(120ms + ${e=>e.$i??0} * 80ms);

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,_O=f.span`
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
`,CO=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
  margin-right: auto;
`,jO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,SO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,NO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
  padding-top: var(--space-3);
  border-top: 1px solid var(--color-border-opaque);
  /* Lands just after the last teammate row (6 rows · 80ms + the 120ms base). */
  animation: ${Mo} var(--duration-base, 240ms) var(--ease-out) both;
  animation-delay: 600ms;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,MO=f.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-opaque);
`,RO=f.button`
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
`,LO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
`,$O=f.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
`,yv=f.span`
  display: inline-flex;
  color: var(--color-warning-content);
`,Au=f.span`
  display: inline-flex;
  color: var(--color-content-tertiary);
  transition: transform var(--duration-base) var(--ease-out);
  transform: rotate(${e=>e.$open?"180deg":"0deg"});

  @media (prefers-reduced-motion: reduce) { transition: none; }
`,wv=f.div`
  display: flex;
  flex-direction: column;
  padding-top: var(--space-2);
  animation: ${Mo} var(--duration-base, 240ms) var(--ease-out) both;

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,AO=f(wv)`
  padding-top: 0;
  border-top: 1px solid var(--color-border-opaque);
`,bv=f.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) 0;

  & + & {
    border-top: 1px solid var(--color-border-opaque);
  }
`,TO=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: var(--space-8);
  height: var(--space-8);
  border-radius: var(--radius-full);
  background: var(--color-warning-bg);
  color: var(--color-warning-content);
`,kv=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`,IO=f.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
`,EO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-content-primary);
`,PO=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`,zO=f.button`
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
`,OO=f.div`
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-content-secondary);
`,o0=f.span`
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-1);
`,a0=f.span`
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-content-primary);
  font-variant-numeric: tabular-nums;
`,DO=f.span`
  color: var(--color-content-tertiary);
`,FO=f.span`
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
`,BO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-content-primary);
`,WO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  color: var(--color-content-tertiary);
`,HO=f.div`
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,UO=f.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: var(--space-1);
  width: 100%;
`,qO=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`,VO=f.span`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-content-tertiary);
  padding-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-opaque);
`,GO=f.div`
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
`,YO=f.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`,KO=f.span`
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
`,i0="cubic-bezier(0.22, 1, 0.36, 1)",QO=Se`
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
`,ZO=Se`
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
`,XO=Se`
  0%   { opacity: 0; transform: scale(0.88) translateY(36px) rotate(-1deg); }
  70%  { opacity: 1; transform: scale(1.018) translateY(-2px) rotate(0); }
  100% { opacity: 1; transform: scale(1) translateY(0) rotate(0); }
`,JO=Se`
  from { opacity: 1; transform: scale(1) translateY(0); }
  to   { opacity: 0; transform: scale(0.97) translateY(10px); }
`,eD=RS`
  [role='dialog'][aria-label$='Ultron access'][data-state] {
    background: color-mix(in srgb, black 58%, transparent);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    animation: ${QO} 440ms ${i0} both;

    & > div {
      position: relative;
      overflow: visible;
      border: 0;
      background: transparent;
      box-shadow: 0 32px 90px rgba(3, 11, 25, 0.56);
      animation: ${XO} 560ms ${i0} both;
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
    animation: ${ZO} 170ms var(--ease-default, ease) forwards;

    & > div {
      animation: ${JO} 170ms var(--ease-default, ease) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [role='dialog'][aria-label$='Ultron access'][data-state],
    [role='dialog'][aria-label$='Ultron access'][data-state] > div {
      animation: none;
    }
  }
`,tD=f.section`
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
`,nD=f.button`
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
`,rD=f.div`
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
`,oD=f.button`
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
`,aD=f.span`
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
`,iD=f.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--Alloy-matcha-400);
  box-shadow: 0 0 0 5px color-mix(in srgb, var(--Alloy-matcha-400) 14%, transparent),
              0 0 20px var(--Alloy-matcha-400);
`,sD=f.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-4);
  margin: var(--space-1) 0;

  @media (max-width: 620px) {
    gap: var(--space-2);
  }
`,lD=f.div`
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
`,cD=f.span`
  display: inline-block;
  margin-right: 0.03em;
  font-size: 0.52em;
  vertical-align: 0.42em;
  color: var(--Alloy-matcha-400);
`,dD=f.span`
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
`,uD=f.h2`
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
`,pD=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-md);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-200);
  max-width: 520px;
`,hD=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`,oa=f.span`
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
`,fD=f.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
`,mD=f.label`
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--tracking-wide);
  color: var(--Alloy-slate-300);
`,gD=f.div`
  display: flex;
  align-items: stretch;
  gap: var(--space-3);

  @media (max-width: 520px) {
    flex-direction: column;
  }
`,vD=f.input`
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
`,xD=f(Ee)`
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
`,yD=f.div`
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
`,wD=f.p`
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-xs);
  line-height: var(--line-height-relaxed);
  color: var(--Alloy-slate-400);
`,bD=Se`
  0%, 80%, 100% { opacity: 0.25; }
  40% { opacity: 1; }
`,s0=f.div`
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
`,aa=f.span`
  width: var(--space-1);
  height: var(--space-1);
  border-radius: var(--radius-full);
  background: var(--color-content-tertiary);
  animation: ${bD} 1.2s infinite ease-in-out;

  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,kD=f.div`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);

  @media (max-width: 600px) {
    width: 100%;
    gap: var(--space-2);
  }
`,_D=f.button`
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
`,CD=f.span`
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
`,jD=Se`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,SD=f.span`
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
  animation: ${jD} 2.4s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    background: none;
    color: var(--color-content-secondary);
    -webkit-text-fill-color: currentColor;
  }
`,ND=f.div`
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
    ${vv}
  }
  &::after {
    ${xv("up")}
  }

  & > * {
    position: relative;
    z-index: 1;
  }

  /* Mounts only once the opening turn lands — rise it in so it arrives rather
     than pops. */
  animation: ${Mo} var(--duration-slow, 420ms) var(--ease-out) both;

  @media (max-width: 600px) {
    gap: var(--space-2);
    padding:
      var(--space-2)
      var(--space-4)
      max(var(--space-3), env(safe-area-inset-bottom));
  }

  @media (prefers-reduced-motion: reduce) { animation: none; }
`,MD=f.div`
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: flex-start;
`,RD=f.span`
  position: relative;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`,l0=f.span`
  position: absolute;
  inset: 0;
  /* Center the canvas so the two forms stay concentric through the cross-fade
     even when one renders larger to match the other's visible footprint. */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$show?1:0};
  transition: opacity var(--duration-base) var(--ease-out);
`,LD=f.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
`,$D=f.div`
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
`,c0=f.button`
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
`,AD=f.form`
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
`,TD=f.div`
  display: flex;
  align-items: flex-end;
  gap: var(--space-2);
`,ID=f.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: var(--space-1) var(--space-1) 0;
`,d0=f.span`
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
`,ED=f.button`
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
`,PD=f.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 80%;

  &[data-from='operator'] { align-items: flex-end; }
  &[data-from='ultron'] { align-items: flex-start; }
`,zD=f.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--space-2);
`,OD=f.textarea`
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
`,u0=f.div`
  flex-shrink: 0;
`;function DD(e){const o=[e.activeId,e.secActiveId];return e.selectedPersonaId&&o.push("persona",e.selectedPersonaId),e.activePageId&&o.push("page",e.activePageId),"#"+o.map(encodeURIComponent).join("/")}function FD(e){const o=e.replace(/^#/,"").trim();if(!o)return{};const i=o.split("/").map(l=>{try{return decodeURIComponent(l)}catch{return l}}),s={};i[0]&&(s.activeId=i[0]),i[1]&&(s.secActiveId=i[1]);for(let l=2;l<i.length-1;l+=2){const d=i[l],p=i[l+1];d==="persona"?s.selectedPersonaId=p:d==="page"&&(s.activePageId=p)}return s}function BD(e,o){const i=v.useRef("");v.useEffect(()=>{const s=()=>{const d=FD(window.location.hash);d.activeId!==void 0&&o.setActiveId(d.activeId),d.secActiveId!==void 0&&o.setSecActiveId(d.secActiveId),o.setSelectedPersonaId(d.selectedPersonaId??null),o.setActivePageId(d.activePageId??null)};window.location.hash&&s();const l=()=>{window.location.hash!==i.current&&s()};return window.addEventListener("hashchange",l),()=>window.removeEventListener("hashchange",l)},[]),v.useEffect(()=>{const s=DD(e);s!==window.location.hash&&(i.current=s,window.history.replaceState(null,"",s))},[e.activeId,e.secActiveId,e.selectedPersonaId,e.activePageId])}const Tu="ultron-theme";function WD(){if(typeof window>"u")return null;const e=window.localStorage.getItem(Tu);return e==="light"||e==="dark"?e:null}function HD(e){const o=document.documentElement;o.classList.toggle("dark",e==="dark"),o.classList.toggle("light",e==="light")}function UD(){const e=wp("(prefers-color-scheme: dark)"),[o,i]=v.useState(WD);v.useEffect(()=>{HD(o),!(typeof window>"u")&&(o?window.localStorage.setItem(Tu,o):window.localStorage.removeItem(Tu))},[o]);const s=o??(e?"dark":"light"),l=v.useCallback(()=>{const d=s==="dark"?"light":"dark";i(d===(e?"dark":"light")?null:d)},[s,e]);return{theme:s,toggle:l}}const qD=f.button`
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
`;function VD(){const{theme:e,toggle:o}=UD(),i=e==="dark",s=i?"Switch to light mode":"Switch to dark mode";return n.jsx(qD,{type:"button",onClick:o,"aria-label":s,"aria-pressed":i,title:s,children:i?n.jsx($0,{size:18}):n.jsx(Q0,{size:18})})}const p0=[{id:"ultron",label:"Ultron",icon:n.jsx(lt,{mark:"circle",size:32,tone:"auto",state:"idle","aria-label":"Ultron"})},{id:"home",label:"Home",icon:n.jsx(ZS,{})},{id:"engaged",label:"Engaged",icon:n.jsx(XS,{}),hasUnread:!0},{id:"inbox",label:"Inbox",icon:n.jsx(JS,{}),hasUnread:!0},{id:"invoice",label:"Invoice",icon:n.jsx(eN,{})},{id:"ai-home",label:"AI Home",icon:n.jsx(tN,{})}],h0=[{id:"apps",label:"Apps",icon:n.jsx(nN,{})}],f0=[{id:"docs",label:"Document Studio",icon:n.jsx(_u,{})},{id:"form",label:"Form",icon:n.jsx(rN,{})},{id:"tasks",label:"Tasks",icon:n.jsx(oN,{})},{id:"policy",label:"Policy",icon:n.jsx(aN,{}),activeIcon:n.jsx("img",{src:YP,width:16,height:16,style:{display:"block"},alt:""})},{id:"automation",label:"Automation",icon:n.jsx(jo,{}),activeIcon:n.jsx("img",{src:KP,width:16,height:16,style:{display:"block"},alt:""})},{id:"payroll",label:"Payroll",icon:n.jsx(iN,{})},{id:"esign",label:"E-Sign Studio",icon:n.jsx(sN,{})}],GD=f.button`
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
`,YD=Se`
  0%   { opacity: 0; transform: scale(0.2) rotate(-140deg); }
  50%  { opacity: 1; transform: scale(1.45) rotate(12deg); }
  68%  { transform: scale(0.86) rotate(-8deg); }
  84%  { transform: scale(1.12) rotate(3deg); }
  100% { transform: scale(1)   rotate(0deg); }
`,KD=Se`
  0%, 55% { color: var(--color-success-content); }
  100%    { color: var(--color-content-disabled); }
`,QD=Se`
  0%   { opacity: 0.45; transform: scale(0.4); }
  100% { opacity: 0;    transform: scale(2.4); }
`,ZD=f.span`
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
      ${YD} 640ms cubic-bezier(0.34, 1.56, 0.64, 1) both,
      ${KD} 1100ms var(--ease-out, ease-out) both;
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
    animation: ${QD} 720ms var(--ease-out, ease-out) both;
  }

  @media (prefers-reduced-motion: reduce) {
    & svg,
    &::after { animation: none; }
  }
`,XD=f.button`
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
`;function JD({onDelete:e}){const o=i=>i.stopPropagation();return n.jsx("span",{onClick:o,onKeyDown:o,onMouseDown:o,children:n.jsx(Ku,{placement:"bottom-end",width:168,trigger:n.jsx(XD,{type:"button","aria-label":"Page options",children:n.jsx(G0,{size:16})}),groups:[{id:"actions",options:[{id:"delete",label:"Delete page",destructive:!0,leadingSlot:n.jsx(J0,{size:16}),onClick:e}]}]})})}const eF={needs_attention:n.jsx(ha,{size:16}),live:n.jsx(lt,{mark:"orbit2d",size:32,tone:"auto",state:"active"}),resolved:n.jsx(yn,{size:16})},tF={analyzing:"new",needs_approval:"new",recommended:"new",in_progress:"working",monitoring:"working",resolved:"done",auto_resolved:"done",workflow_available:"done",unresolved:"done"};function nF({introAnswers:e,onRestartOnboarding:o}={}){const[i,s]=v.useState("ultron"),[l,d]=v.useState("home-overview"),[p,m]=v.useState(null),[g,y]=v.useState(null),[x,b]=v.useState("ultron"),[k,S]=v.useState("employees"),_=IN(),[j,N]=v.useState(!!e),[$,M]=v.useState(!1),[C,z]=v.useState(!e),[R,L]=v.useState([]),[T,E]=v.useState(null),B=v.useRef(0),G=Y=>{b("ultron"),N(!1),z(!1),E(Y)},J=()=>{b("ultron"),z(!1),E(null),N(!0)},W=()=>{const Y=`page-${B.current++}`;L(de=>[...de,{id:Y,title:"New page"}]),G(Y)},[K,te]=v.useState({}),[ae,ce]=v.useState({}),se=v.useRef({}),Q=(Y,de)=>{const le=de.trim();if(!le)return;const ge=(K[Y]??[]).filter(xe=>xe.role==="ultron").length;te(xe=>({...xe,[Y]:[...xe[Y]??[],{role:"operator",text:le}]})),ce(xe=>({...xe,[Y]:!0})),se.current[Y]=window.setTimeout(()=>{te(xe=>({...xe,[Y]:[...xe[Y]??[],{role:"ultron",text:dp(le,ge)}]})),ce(xe=>({...xe,[Y]:!1})),delete se.current[Y]},1100)},D=Y=>{se.current[Y]&&(window.clearTimeout(se.current[Y]),delete se.current[Y]),L(de=>de.filter(le=>le.id!==Y)),te(de=>{const{[Y]:le,...ge}=de;return ge}),ce(de=>{const{[Y]:le,...ge}=de;return ge}),T===Y&&(E(null),z(!0))},H=C?"live":_.selectedThread?tF[_.selectedThread.status]:"new";BD({activeId:i,secActiveId:l,selectedPersonaId:p,activePageId:g},{setActiveId:s,setSecActiveId:d,setSelectedPersonaId:m,setActivePageId:y});const I=Y=>Y.map(de=>({...de,isActive:de.id===i,disabled:de.id!=="ultron",onClick:de.id==="ultron"?()=>s("ultron"):void 0})),A=[{id:"memory",label:"Memory",icon:n.jsx(Ml,{size:16}),isActive:x==="memory",onClick:()=>b("memory")},{id:"settings",label:"Settings",icon:n.jsx(T0,{size:16})}],V=n.jsx(uv,{children:x==="memory"?"Memory":x==="account"?"Account database":"Ultron"}),Z=$u(e==null?void 0:e.companyWebsite)??(e==null?void 0:e.workforceType)??null,oe={id:"welcome",label:Z?`${Z} account setup`:"Account setup",icon:n.jsx(_u,{}),isActive:j,onClick:J},pe=R.map(Y=>({id:Y.id,label:Y.title,icon:n.jsx(_u,{}),isActive:T===Y.id,onClick:()=>G(Y.id),trailingSlot:n.jsx(JD,{onDelete:()=>D(Y.id)})})),q=x==="account"?Nu.map(Y=>({type:"single",item:{id:Y.id,label:Y.label,icon:Y.icon,isActive:k===Y.id,onClick:()=>S(Y.id)}})):_.groups.flatMap(Y=>{const de=Y.id==="needs_attention"?"new":Y.id==="resolved"?"done":"working",le=Y.id==="needs_attention"?Y.threads.filter(be=>be.status==="analyzing"||_.revealedNewIds.includes(be.id)):Y.threads,ge=Y.id==="needs_attention"&&!$||Y.id==="live"&&$,xe=Y.id==="needs_attention"?pe:[],we={type:"group",group:{id:Y.id,label:Y.id==="needs_attention"?"New":Y.label,icon:eF[Y.id],trailingBadge:n.jsx(ya,{children:le.length+(ge?1:0)+xe.length}),defaultExpanded:!0,outlined:!1,children:[...ge?[oe]:[],...xe,...le.map(be=>({id:be.id,label:be.id.startsWith("detected_")?n.jsx(lA,{text:_m(be.name,de)}):_m(be.name,de),icon:de==="new"?be.status==="analyzing"?n.jsx(lt,{mark:"orbit2d",size:32,tone:"auto",state:"active","aria-label":"Analyzing"}):n.jsx(lt,{mark:"pulse",size:32,tone:"auto",state:"active",color:"var(--color-orange-content-tertiary)","aria-label":"Needs attention"}):de==="working"?n.jsx(lt,{mark:"orbit2d",size:32,tone:"auto",state:be.status==="in_progress"?"active":"idle","aria-label":"Working"}):n.jsx(lt,{mark:"pulse",size:32,tone:"auto",state:be.status==="unresolved"?"idle":"static",color:be.status==="unresolved"?"var(--color-orange-content-tertiary)":_.viewedIds.includes(be.id)?"var(--color-slate-content-tertiary)":"var(--color-green-content-tertiary)","aria-label":"Done"}),isActive:x==="ultron"&&!C&&!T&&H===de&&_.selectedId===be.id,onClick:()=>{b("ultron"),N(!1),z(!1),E(null),_.setSelectedId(be.id)},trailingSlot:_.savedWorkflowIds.includes(be.id)?n.jsx(yr,{content:"Saved as workflow",placement:"top",children:n.jsx(ZD,{"aria-label":"Saved as workflow",children:n.jsx(jo,{})})}):void 0}))]}};return Y.id==="resolved"?[{type:"divider",id:"done-divider"},we]:Y.id==="live"?[{type:"divider",id:"working-divider"},we]:[we]}),O=[{id:"main",label:"Workspace",items:I(p0)},{id:"tools",label:"Tools",items:I(h0)},{id:"bottom",label:"Apps",items:I(f0)}];return n.jsxs(n.Fragment,{children:[n.jsx(VD,{}),n.jsx(GP,{items:I(p0),toolItems:I(h0),bottomItems:I(f0),workspace:{id:"acme",name:"{Account.name}",initial:"A"},user:{name:"Tito Goldstein",initials:"TG",avatarColor:"#ee9c2d"},onSettingsClick:o,newItemId:"app-tool",aiItemId:"ai-home",secNavHeading:"",menuEntries:q,menuHeader:x==="ultron"?n.jsx(GD,{$active:C&&!T,onClick:()=>{b("ultron"),N(!1),z(!0),E(null)},"aria-label":"Live — Ultron presence","aria-current":C&&!T?"page":void 0,children:n.jsx(nA,{onNew:W})}):void 0,pageEntries:A,showSecondaryNav:!0,showTopNav:x!=="ultron",showSearch:!1,heading:V,actions:[],showActivityButton:!0,showPonderButton:!0,mobileNav:{activeId:i,secActiveId:l,activePageId:g,selectedPersonaId:p,moduleGroups:O,primaryLabel:"Ultron",secondaryLabel:void 0,onMobileNavigate:Y=>{Y==="ultron"&&s("ultron")},onSelectPersona:m},children:x==="memory"?n.jsx(pA,{}):x==="account"?n.jsx(SA,{collectionId:k}):j?n.jsx(Sz,{answers:e,onContinued:()=>M(!0)}):T?n.jsx(F$,{messages:K[T]??[],replying:ae[T]??!1,onSend:Y=>Q(T,Y)},T):n.jsx($$,{threads:_.threads,stageById:_.stageById,section:H,analyzedIds:_.analyzedIds,outboundByThread:_.outboundByThread,chatByThread:_.chatByThread,selectedId:_.selectedId,onDecide:_.decide,onAction:_.commit,onCompleteRun:_.completeRun,onRefinement:_.refine,onSaveWorkflow:_.saveWorkflow,pendingWorkflowIds:_.pendingWorkflowIds,onToggleSaveWorkflow:_.toggleWorkflowSave,savedWorkflowIds:_.savedWorkflowIds,onSend:_.sendMessage,replyingIds:_.replyingIds,onStop:_.stopReply,onClose:()=>{b("ultron"),N(!1),z(!0)},onDetectRisk:_.detectRisk,onRevealNew:_.revealNew})})]})}const m0="cubic-bezier(0.22, 1, 0.36, 1)",g0=Se`
  from { opacity: 0; transform: translateX(-40px); }
  to   { opacity: 1; transform: translateX(0); }
`,rF=Se`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
`,oF=f.div`
  display: contents;

  nav[aria-label='Primary navigation'] {
    animation: ${g0} 460ms ${m0} both;
  }
  nav[aria-label='Secondary navigation'] {
    animation: ${g0} 500ms ${m0} 90ms both;
  }
  main {
    animation: ${rF} 520ms ease-out 220ms both;
  }

  @media (prefers-reduced-motion: reduce) {
    nav[aria-label='Primary navigation'],
    nav[aria-label='Secondary navigation'],
    main {
      animation: none;
    }
  }
`,cu="tb:onboarding-complete";function aF(){const[e,o]=v.useState(()=>{try{return window.sessionStorage.getItem(cu)==="1"}catch{return!1}}),[i,s]=v.useState(null),l=p=>{try{window.sessionStorage.setItem(cu,"1")}catch{}s(p),o(!0)},d=()=>{try{window.sessionStorage.removeItem(cu)}catch{}window.location.hash="",window.location.reload()};return e?n.jsx(oF,{children:n.jsx(nF,{introAnswers:i??void 0,onRestartOnboarding:d})}):n.jsx(aE,{onEnterApp:l})}Cy.createRoot(document.getElementById("root")).render(n.jsx(ln.StrictMode,{children:n.jsx(Z8,{children:n.jsx(aF,{})})}));
