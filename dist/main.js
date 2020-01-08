!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports["zap-app-utils"]=e(require("react")):t["zap-app-utils"]=e(t.react)}(window,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(e,n){e.exports=t},function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return r});const r=()=>new Promise(e=>t(e))}).call(this,n(3).setImmediate)},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(t){var r=void 0!==t&&t||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function u(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new u(o.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new u(o.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},u.prototype.unref=u.prototype.ref=function(){},u.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(4),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(2))},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var r,o,u,i,c,a=1,s={},l=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick(function(){p(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((u=new MessageChannel).port1.onmessage=function(t){p(t.data)},r=function(t){u.port2.postMessage(t)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,r=function(t){var e=f.createElement("script");e.onreadystatechange=function(){p(t),e.onreadystatechange=null,o.removeChild(e),e=null},o.appendChild(e)}):r=function(t){setTimeout(p,0,t)}:(i="setImmediate$"+Math.random()+"$",c=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(i)&&p(+e.data.slice(i.length))},t.addEventListener?t.addEventListener("message",c,!1):t.attachEvent("onmessage",c),r=function(e){t.postMessage(i+e,"*")}),d.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return s[a]=o,r(a),a++},d.clearImmediate=m}function m(t){delete s[t]}function p(t){if(l)setTimeout(p,0,t);else{var e=s[t];if(e){l=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}(e)}finally{m(t),l=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(2),n(5))},function(t,e){var n,r,o=t.exports={};function u(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===u||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:u}catch(t){n=u}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var a,s=[],l=!1,f=-1;function d(){l&&a&&(l=!1,a.length?s=a.concat(s):f=-1,s.length&&m())}function m(){if(!l){var t=c(d);l=!0;for(var e=s.length;e;){for(a=s,s=[];++f<e;)a&&a[f].run();f=-1,e=s.length}a=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function h(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new p(t,e)),1!==s.length||l||c(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){"use strict";n.r(e);var r=n(0);function o(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}var u,i,c,a=function(t,e){var n;void 0===e&&(e=o);var r,u=[],i=!1;return function(){for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return i&&n===this&&e(c,u)?r:(r=t.apply(this,c),i=!0,n=this,u=c,r)}};!function(t){t.dealCard="deal_card",t.leadCard="lead_card",t.personCard="person_card",t.companyCard="company_card",t.modal="modal"}(u||(u={})),function(t){t.success="success",t.error="error",t.loading="loading"}(i||(i={})),function(t){t.accountTimezone="account",t.formatDate="formatDate",t.formatDateAndTime="formatDateAndTime",t.formatCurrency="formatCurrency"}(c||(c={}));const s=t=>{const{feedback:e}=t;return!e||e.status===i.loading},l=t=>{const{feedback:e}=t;return!!e&&e.status===i.error},f=t=>{const{data:e}=t;return[null,void 0].includes(e)||"object"==typeof e&&0===Object.keys(e).length};const d=a(t=>t.map(t=>t.data));function m({children:t,response:e,responses:n,loadingView:o=null,emptyView:u=null,errorView:i=null,isEmpty:c,isLoading:a,hasError:m}){const p=Object(r.useMemo)(()=>{return(e?[e]:n)||[]},[e,n]),h=function(t){return(e,n)=>{const r=n||e;return t.some(r)}}(p);return h(s,a)?o:h(l,m)?i:h(f,c)?u:t(d(p))}const p=r.createContext(void 0),h=p.Provider,y=t=>{const e=Object(r.useContext)(p);if(!e)throw new Error("You forgot to use ZAFClientContext");Object(r.useEffect)(()=>{e.invoke("resize",{height:t})},[t])};function g(t,e,n,r){return new(n||(n=Promise))(function(o,u){function i(t){try{a(r.next(t))}catch(t){u(t)}}function c(t){try{a(r.throw(t))}catch(t){u(t)}}function a(t){t.done?o(t.value):new n(function(e){e(t.value)}).then(i,c)}a((r=r.apply(t,e||[])).next())})}function v(t){const[e,n]=Object(r.useState)(null),[o,u]=Object(r.useState)(null),[c,a]=Object(r.useState)(null),s=Object(r.useContext)(p),l=()=>g(this,void 0,void 0,function*(){a({status:i.loading});try{if(!s)throw new Error("You forgot to use ZAFClientContext");const e=yield s.get(t);n(e[t]),a({status:i.success}),e.errors&&Object.keys(e.errors).length>0&&(u(e.errors),a({status:i.error}))}catch(t){u(t),a({status:i.error})}});return Object(r.useEffect)(()=>{l()},[]),{data:e,error:o,feedback:c}}const b={};function T(t,e,n,o){const[u,c]=Object(r.useState)(null),[a,s]=Object(r.useState)(null),[l,f]=Object(r.useState)(null),d=Object(r.useContext)(p),m=()=>g(this,void 0,void 0,function*(){s({status:i.loading});try{if(!d)throw new Error("You forgot to use ZAFClientContext");if(n&&n.some(t=>!t))return;let r;o&&b[o]?r=b[o]:(r=d.request(Object.assign({url:t},e)),o&&(b[o]=r));const a=yield r;c(e.transformResponse?e.transformResponse(a,u):a),s({status:i.success})}catch(t){o&&delete b[o],f(t),s({status:i.error})}}),h=n||[];return Object(r.useEffect)(()=>{m()},[t,o,...h]),{data:u,feedback:a,error:l}}var w=T;function j(t,e={},n,r){return w(t,Object.assign({oauth:!0,dataType:"json",contentType:"application/json",headers:{authorization:"Bearer {{oauth.access_token}}"}},e),n,r)}const O=t=>g(void 0,void 0,void 0,function*(){return yield t.context()});const C={[u.personCard]:"contact.email",[u.companyCard]:"contact.email",[u.leadCard]:"lead.email",[u.dealCard]:"deal.contact.email"},x=(t,e)=>g(void 0,void 0,void 0,function*(){const n=C[e],r=yield t.get(n);if(r.errors&&Object.keys(r.errors).length>0)throw new Error(JSON.stringify(r.errors));return r[n]});function k(){const t=Object(r.useContext)(p),[e,n]=Object(r.useState)(null),[o,u]=Object(r.useState)(null),[c,a]=Object(r.useState)(null),s=()=>g(this,void 0,void 0,function*(){a({status:i.loading});try{if(!t)throw new Error("You forgot to use ZAFClientContext");const{location:e}=yield O(t),r=yield x(t,e);n(r),a({status:i.success})}catch(t){u(t),a({status:i.error})}});return Object(r.useEffect)(()=>{s()},[]),{data:e,error:o,feedback:c}}var S=function(t,...e){const[n,o]=Object(r.useState)(null),[u,c]=Object(r.useState)(null),[a,s]=Object(r.useState)(null),l=Object(r.useContext)(p),f=()=>g(this,void 0,void 0,function*(){s({status:i.loading});try{if(!l)throw new Error("You forgot to use ZAFClientContext");const n=yield l.invoke(t,...e);o(n[t]),s({status:i.success}),n.errors&&Object.keys(n.errors).length>0&&(c(n.errors),s({status:i.error}))}catch(t){c(t),s({status:i.error})}});return Object(r.useEffect)(()=>{f()},[]),{data:n,error:u,feedback:a}};function _(t,e){return S(c.formatCurrency,t,e)}const E=(t,e)=>{const{data:n,error:r}=_(t,e);return r?e?`${e} ${t}`:`${t}`:n||""};function A(t){return S(c.formatDate,t,c.accountTimezone)}const F=t=>{const{data:e,error:n}=A(t);let r=e;return n&&(r=(t=>t.toLocaleDateString())(t instanceof Date?t:new Date(t))),r||""};function I(t){return S(c.formatDateAndTime,t,c.accountTimezone)}const D=t=>{const{data:e,error:n}=I(t);let r=e;return n&&(r=(t=>`${t.toLocaleDateString()} ${t.toLocaleTimeString()}`)(t instanceof Date?t:new Date(t))),r||""};function L(t){return S(c.formatDate,t)}function M(t){return S(c.formatDateAndTime,t)}var P=n(1);function z(t){return t.reduce((t,e)=>e?e.status===i.error?Object.assign({},e):(e.status!==i.loading||t.status&&t.status!==i.success)&&(e.status!==i.success||t.status)?t:Object.assign({},e):t)}n.d(e,"ResponseHandler",function(){return m}),n.d(e,"useClientHeight",function(){return y}),n.d(e,"useClientGet",function(){return v}),n.d(e,"useClientRequest",function(){return T}),n.d(e,"useClientRequestWithAuth",function(){return j}),n.d(e,"useSellContactEmail",function(){return k}),n.d(e,"useFormattedCurrency",function(){return E}),n.d(e,"useFormattedDate",function(){return F}),n.d(e,"useFormattedDateTime",function(){return D}),n.d(e,"useLocalDateFormat",function(){return L}),n.d(e,"useAccountDateFormat",function(){return A}),n.d(e,"useLocalDateTimeFormat",function(){return M}),n.d(e,"useAccountDateTimeFormat",function(){return I}),n.d(e,"useCurrencyFormat",function(){return _}),n.d(e,"ZAFClientContextProvider",function(){return h}),n.d(e,"ZAFClientContext",function(){return p}),n.d(e,"flushPromises",function(){return P.a}),n.d(e,"mergeFeedbacks",function(){return z}),n.d(e,"getAppContextAsync",function(){return O}),n.d(e,"AppLocations",function(){return u}),n.d(e,"FeedbackStatus",function(){return i}),n.d(e,"ClientInvokeOptions",function(){return c}),n.d(e,"version",function(){return"0.0.5"})}])});