var t,e,n,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=t={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===r||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:r}catch(t){e=r}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(t){n=o}}();var c,u=[],h=!1,l=-1;function d(){h&&c&&(h=!1,c.length?u=c.concat(u):l=-1,u.length&&f())}function f(){if(!h){var t=a(d);h=!0;for(var e=u.length;e;){for(c=u,u=[];++l<e;)c&&c[l].run();l=-1,e=u.length}c=null,h=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{return n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function g(t,e){this.fun=t,this.array=e}function p(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new g(t,e)),1!==u.length||h||a(f)},g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0};const m=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++s)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const i=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,h=(3&i)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(l=64)),s.push(n[u],n[h],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(m(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(r>>10)),e[s++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==r||null==o||null==a)throw new v;const c=i<<2|r>>4;if(s.push(c),64!==o){const t=r<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const w=function(t){return function(t){const e=m(t);return y.encodeByteArray(e,!0)}(t).replace(/\./g,"")},E=function(t){try{return y.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==s)return s;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,T=()=>{try{return b()||(()=>{if(void 0===t||void 0===t.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&E(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},I=t=>{const e=(t=>{var e,n;return null===(n=null===(e=T())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),s]:[e.substring(0,n),s]},S=()=>{var t;return null===(t=T())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class C{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[w(JSON.stringify({alg:"none",type:"JWT"})),w(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){try{return"object"==typeof indexedDB}catch(t){return!1}}class D extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,N.prototype.create)}}class N{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],r=i?function(t,e){return t.replace(k,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new D(s,o,n)}}const k=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const n=t[i],r=e[i];if(x(n)&&x(r)){if(!R(n,r))return!1}else if(n!==r)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function x(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(t){return t&&t._delegate?t._delegate:t}class M{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new C;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:O})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=O){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=O){return this.instances.has(t)}getOptions(t=O){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&t(r,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,s===O?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t=O){return this.component?this.component.multipleInstances?t:O:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class F{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new P(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=[];var U,B;(B=U||(U={}))[B.DEBUG=0]="DEBUG",B[B.VERBOSE=1]="VERBOSE",B[B.INFO=2]="INFO",B[B.WARN=3]="WARN",B[B.ERROR=4]="ERROR",B[B.SILENT=5]="SILENT";const q={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},j=U.INFO,$={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},z=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),i=$[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${s}]  ${t.name}:`,...n)};class K{constructor(t){this.name=t,this._logLevel=j,this._logHandler=z,this._userLogHandler=null,V.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?q[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const G=(t,e)=>e.some((e=>t instanceof e));let H,Q;const W=new WeakMap,Y=new WeakMap,X=new WeakMap,J=new WeakMap,Z=new WeakMap;let tt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return Y.get(t);if("objectStoreNames"===e)return t.objectStoreNames||X.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return st(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function et(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Q||(Q=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(it(this),e),st(W.get(this))}:function(...e){return st(t.apply(it(this),e))}:function(e,...n){const s=t.call(it(this),e,...n);return X.set(s,e.sort?e.sort():[e]),st(s)}}function nt(t){return"function"==typeof t?et(t):(t instanceof IDBTransaction&&function(t){if(Y.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",r),t.removeEventListener("abort",r)},i=()=>{e(),s()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",r),t.addEventListener("abort",r)}));Y.set(t,e)}(t),G(t,H||(H=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,tt):t)}function st(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",r)},i=()=>{e(st(t.result)),s()},r=()=>{n(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&W.set(e,t)})).catch((()=>{})),Z.set(e,t),e}(t);if(J.has(t))return J.get(t);const e=nt(t);return e!==t&&(J.set(t,e),Z.set(e,t)),e}const it=t=>Z.get(t);function rt(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=st(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(st(o.result),t.oldVersion,t.newVersion,st(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{r&&t.addEventListener("close",(()=>r())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const ot=["get","getKey","getAll","getAllKeys","count"],at=["put","add","delete","clear"],ct=new Map;function ut(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(ct.get(e))return ct.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=at.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!i&&!ot.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,i?"readwrite":"readonly");let o=r.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&r.done]))[0]};return ct.set(e,r),r}tt=(t=>({...t,get:(e,n,s)=>ut(e,n)||t.get(e,n,s),has:(e,n)=>!!ut(e,n)||t.has(e,n)}))(tt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const lt="@firebase/app",dt="0.9.10",ft=new K("@firebase/app"),gt="[DEFAULT]",pt={[lt]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},mt=new Map,yt=new Map;function vt(t,e){try{t.container.addComponent(e)}catch(n){ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wt(t){const e=t.name;if(yt.has(e))return ft.debug(`There were multiple attempts to register component ${e}.`),!1;yt.set(e,t);for(const e of mt.values())vt(e,t);return!0}function Et(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bt=new N("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new M("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const s=Object.assign({name:gt,automaticDataCollectionEnabled:!1},e),i=s.name;if("string"!=typeof i||!i)throw bt.create("bad-app-name",{appName:String(i)});if(n||(n=S()),!n)throw bt.create("no-options");const r=mt.get(i);if(r){if(R(n,r.options)&&R(s,r.config))return r;throw bt.create("duplicate-app",{appName:i})}const o=new F(i);for(const t of yt.values())o.addComponent(t);const a=new Tt(n,s,o);return mt.set(i,a),a}function St(t=gt){const e=mt.get(t);if(!e&&t===gt&&S())return It();if(!e)throw bt.create("no-app",{appName:t});return e}function Ct(t,e,n){var s;let i=null!==(s=pt[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void ft.warn(t.join(" "))}wt(new M(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _t="firebase-heartbeat-database",At=1,Dt="firebase-heartbeat-store";let Nt=null;function kt(){return Nt||(Nt=rt(_t,At,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Dt)}}).catch((t=>{throw bt.create("idb-open",{originalErrorMessage:t.message})}))),Nt}async function Rt(t,e){try{const n=(await kt()).transaction(Dt,"readwrite"),s=n.objectStore(Dt);await s.put(e,xt(t)),await n.done}catch(t){if(t instanceof D)ft.warn(t.message);else{const e=bt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});ft.warn(e.message)}}}function xt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ot(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Mt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Mt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let s=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Pt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pt(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=w(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Mt(){return(new Date).toISOString().substring(0,10)}class Ot{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!A()&&new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{const e=await kt();return await e.transaction(Dt).objectStore(Dt).get(xt(t))}catch(t){if(t instanceof D)ft.warn(t.message);else{const e=bt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});ft.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Rt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Pt(t){return w(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft;Ft="",wt(new M("platform-logger",(t=>new ht(t)),"PRIVATE")),wt(new M("heartbeat",(t=>new Lt(t)),"PRIVATE")),Ct(lt,dt,Ft),Ct(lt,dt,"esm2017"),Ct("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ct("firebase","9.22.0","app");var Vt,Ut="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==s?s:"undefined"!=typeof self?self:{},Bt={},qt=qt||{},jt=Ut||self;function $t(){}function zt(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function Kt(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Gt="closure_uid_"+(1e9*Math.random()>>>0),Ht=0;function Qt(t,e,n){return t.call.apply(t.bind,arguments)}function Wt(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Yt(t,e,n){return(Yt=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Qt:Wt).apply(null,arguments)}function Xt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Jt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function Zt(){this.s=this.s,this.o=this.o}Zt.prototype.s=!1,Zt.prototype.ra=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,Gt)&&t[Gt]||(t[Gt]=++Ht))},Zt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const te=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ee(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function ne(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(zt(n)){const e=t.length||0,s=n.length||0;t.length=e+s;for(let i=0;i<s;i++)t[e+i]=n[i]}else t.push(n)}}function se(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ie=function(){if(!jt.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{jt.addEventListener("test",$t,e),jt.removeEventListener("test",$t,e)}catch(t){}return t}();function re(t){return/^[\s\xa0]*$/.test(t)}var oe=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ae(t,e){return t<e?-1:t>e?1:0}function ce(){var t=jt.navigator;return t&&(t=t.userAgent)?t:""}function ue(t){return-1!=ce().indexOf(t)}function he(t){return he[" "](t),t}function le(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}he[" "]=$t;var de,fe,ge=ue("Opera"),pe=ue("Trident")||ue("MSIE"),me=ue("Edge"),ye=me||pe,ve=ue("Gecko")&&!(-1!=ce().toLowerCase().indexOf("webkit")&&!ue("Edge"))&&!(ue("Trident")||ue("MSIE"))&&!ue("Edge"),we=-1!=ce().toLowerCase().indexOf("webkit")&&!ue("Edge");function Ee(){var t=jt.document;return t?t.documentMode:void 0}t:{var be="",Te=(fe=ce(),ve?/rv:([^\);]+)(\)|;)/.exec(fe):me?/Edge\/([\d\.]+)/.exec(fe):pe?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(fe):we?/WebKit\/(\S+)/.exec(fe):ge?/(?:Version)[ \/]?(\S+)/.exec(fe):void 0);if(Te&&(be=Te?Te[1]:""),pe){var Ie=Ee();if(null!=Ie&&Ie>parseFloat(be)){de=String(Ie);break t}}de=be}var Se,Ce={};if(jt.document&&pe){var _e=Ee();Se=_e||(parseInt(de,10)||void 0)}else Se=void 0;var Ae=Se;function De(t,e){if(se.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ve){t:{try{he(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Ne[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&De.$.h.call(this)}}Jt(De,se);var Ne={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ke="closure_listenable_"+(1e6*Math.random()|0),Re=0;function xe(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++Re,this.fa=this.ia=!1}function Le(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Me(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Oe(t){const e={};for(const n in t)e[n]=t[n];return e}const Pe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fe(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<Pe.length;e++)n=Pe[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Ve(t){this.src=t,this.g={},this.h=0}function Ue(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=te(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Le(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Be(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}Ve.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=Be(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new xe(e,this.src,r,!!s,i)).ia=n,t.push(e)),e};var qe="closure_lm_"+(1e6*Math.random()|0),je={};function $e(t,e,n,s,i){if(s&&s.once)return Ke(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)$e(t,e[r],n,s,i);return null}return n=Je(n),t&&t[ke]?t.O(e,n,Kt(s)?!!s.capture:!!s,i):ze(t,e,n,!1,s,i)}function ze(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Kt(i)?!!i.capture:!!i,a=Ye(t);if(a||(t[qe]=a=new Ve(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=We;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ie||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Qe(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function Ke(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ke(t,e[r],n,s,i);return null}return n=Je(n),t&&t[ke]?t.P(e,n,Kt(s)?!!s.capture:!!s,i):ze(t,e,n,!0,s,i)}function Ge(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Ge(t,e[r],n,s,i);else s=Kt(s)?!!s.capture:!!s,n=Je(n),t&&t[ke]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Be(r=t.g[e],n,s,i))&&(Le(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Ye(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Be(e,n,s,i)),(n=-1<t?e[t]:null)&&He(n))}function He(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[ke])Ue(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Qe(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Ye(e))?(Ue(n,t),0==n.h&&(n.src=null,e[qe]=null)):Le(t)}}}function Qe(t){return t in je?je[t]:je[t]="on"+t}function We(t,e){if(t.fa)t=!0;else{e=new De(e,this);var n=t.listener,s=t.la||t.src;t.ia&&He(t),t=n.call(s,e)}return t}function Ye(t){return(t=t[qe])instanceof Ve?t:null}var Xe="__closure_events_fn_"+(1e9*Math.random()>>>0);function Je(t){return"function"==typeof t?t:(t[Xe]||(t[Xe]=function(e){return t.handleEvent(e)}),t[Xe])}function Ze(){Zt.call(this),this.i=new Ve(this),this.S=this,this.J=null}function tn(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,"string"==typeof e)e=new se(e,t);else if(e instanceof se)e.target=e.target||t;else{var i=e;Fe(e=new se(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=en(o,s,!0,e)&&i}if(i=en(o=e.g=t,s,!0,e)&&i,i=en(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=en(o=e.g=n[r],s,!1,e)&&i}function en(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ue(t.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}Jt(Ze,Zt),Ze.prototype[ke]=!0,Ze.prototype.removeEventListener=function(t,e,n,s){Ge(this,t,e,n,s)},Ze.prototype.N=function(){if(Ze.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)Le(n[s]);delete e.g[t],e.h--}}this.J=null},Ze.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Ze.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var nn=jt.JSON.stringify;function sn(){var t=ln;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var rn,on=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new an),(t=>t.reset()));class an{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function cn(t){jt.setTimeout((()=>{throw t}),0)}function un(t,e){rn||function(){var t=jt.Promise.resolve(void 0);rn=function(){t.then(dn)}}(),hn||(rn(),hn=!0),ln.add(t,e)}var hn=!1,ln=new class{constructor(){this.h=this.g=null}add(t,e){const n=on.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function dn(){for(var t;t=sn();){try{t.h.call(t.g)}catch(t){cn(t)}var e=on;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}hn=!1}function fn(t,e){Ze.call(this),this.h=t||1,this.g=e||jt,this.j=Yt(this.qb,this),this.l=Date.now()}function gn(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function pn(t,e,n){if("function"==typeof t)n&&(t=Yt(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Yt(t.handleEvent,t)}return 2147483647<Number(e)?-1:jt.setTimeout(t,e||0)}function mn(t){t.g=pn((()=>{t.g=null,t.i&&(t.i=!1,mn(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Jt(fn,Ze),(Vt=fn.prototype).ga=!1,Vt.T=null,Vt.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),tn(this,"tick"),this.ga&&(gn(this),this.start()))}},Vt.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Vt.N=function(){fn.$.N.call(this),gn(this),delete this.g};class yn extends Zt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:mn(this)}N(){super.N(),this.g&&(jt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vn(t){Zt.call(this),this.h=t,this.g={}}Jt(vn,Zt);var wn=[];function En(t,e,n,s){Array.isArray(n)||(n&&(wn[0]=n.toString()),n=wn);for(var i=0;i<n.length;i++){var r=$e(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function bn(t){Me(t.g,(function(t,e){this.g.hasOwnProperty(e)&&He(t)}),t),t.g={}}function Tn(){this.g=!0}function In(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return nn(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}vn.prototype.N=function(){vn.$.N.call(this),bn(this)},vn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Tn.prototype.Ea=function(){this.g=!1},Tn.prototype.info=function(){};var Sn={},Cn=null;function _n(){return Cn=Cn||new Ze}function An(t){se.call(this,Sn.Ta,t)}function Dn(t){const e=_n();tn(e,new An(e))}function Nn(t,e){se.call(this,Sn.STAT_EVENT,t),this.stat=e}function kn(t){const e=_n();tn(e,new Nn(e,t))}function Rn(t,e){se.call(this,Sn.Ua,t),this.size=e}function xn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return jt.setTimeout((function(){t()}),e)}Sn.Ta="serverreachability",Jt(An,se),Sn.STAT_EVENT="statevent",Jt(Nn,se),Sn.Ua="timingevent",Jt(Rn,se);var Ln={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Mn={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function On(){}function Pn(t){return t.h||(t.h=t.i())}function Fn(){}On.prototype.h=null;var Vn,Un={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Bn(){se.call(this,"d")}function qn(){se.call(this,"c")}function jn(){}function $n(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new vn(this),this.P=Kn,t=ye?125:void 0,this.V=new fn(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new zn}function zn(){this.i=null,this.g="",this.h=!1}Jt(Bn,se),Jt(qn,se),Jt(jn,On),jn.prototype.g=function(){return new XMLHttpRequest},jn.prototype.i=function(){return{}},Vn=new jn;var Kn=45e3,Gn={},Hn={};function Qn(t,e,n){t.L=1,t.v=fs(cs(e)),t.s=n,t.S=!0,Wn(t,null)}function Wn(t,e){t.G=Date.now(),Zn(t),t.A=cs(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),_s(n.i,"t",s),t.C=0,n=t.l.I,t.h=new zn,t.g=Ci(t.l,n?e:null,!t.s),0<t.O&&(t.M=new yn(Yt(t.Pa,t,t.g),t.O)),En(t.U,t.g,"readystatechange",t.nb),e=t.I?Oe(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Dn(),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.W,t.s)}function Yn(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Xn(t,e,n){let s,i=!0;for(;!t.J&&t.C<n.length;){if(s=Jn(t,n),s==Hn){4==e&&(t.o=4,kn(14),i=!1),In(t.j,t.m,null,"[Incomplete Response]");break}if(s==Gn){t.o=4,kn(15),In(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}In(t.j,t.m,s,null),is(t,s)}Yn(t)&&s!=Hn&&s!=Gn&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,kn(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ca&&(t.ca=!0,(e=t.l).g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),yi(e),e.L=!0,kn(11))):(In(t.j,t.m,n,"[Invalid Chunked Response]"),ss(t),ns(t))}function Jn(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?Hn:(n=Number(e.substring(n,s)),isNaN(n)?Gn:(s+=1)+n>e.length?Hn:(e=e.substr(s,n),t.C=s+n,e))}function Zn(t){t.Y=Date.now()+t.P,ts(t,t.P)}function ts(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=xn(Yt(t.lb,t),e)}function es(t){t.B&&(jt.clearTimeout(t.B),t.B=null)}function ns(t){0==t.l.H||t.J||Ei(t.l,t)}function ss(t){es(t);var e=t.M;e&&"function"==typeof e.ra&&e.ra(),t.M=null,gn(t.V),bn(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function is(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||xs(n.h,t)))if(!t.K&&xs(n.h,t)&&3==n.H){try{var s=n.Ja.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;wi(n),ui(n)}mi(n),kn(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.M&&0==n.A&&!n.v&&(n.v=xn(Yt(n.ib,n),6e3));if(1>=Rs(n.h)&&n.na){try{n.na()}catch(t){}n.na=void 0}}else Ti(n,11)}else if((t.K||n.g==t)&&wi(n),!re(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.J=u[1],n.oa=u[2];const e=u[3];null!=e&&(n.qa=e,n.j.info("VER="+n.qa));const i=u[4];null!=i&&(n.Ga=i,n.j.info("SVER="+n.Ga));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(s=1.5*h,n.K=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Ls(r,r.h),r.h=null))}if(s.F){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.Da=t,ds(s.G,s.F,t))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms"));var o=t;if((s=n).wa=Si(s,s.I?s.oa:null,s.Y),o.K){Ms(s.h,o);var a=o,c=s.K;c&&a.setTimeout(c),a.B&&(es(a),Zn(a)),s.g=o}else pi(s);0<n.i.length&&li(n)}else"stop"!=u[0]&&"close"!=u[0]||Ti(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Ti(n,7):ci(n):"noop"!=u[0]&&n.l&&n.l.Aa(u),n.A=0)}Dn()}catch(t){}}function rs(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(zt(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.sa&&"function"==typeof t.sa)return t.sa();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(zt(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(zt(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}(Vt=$n.prototype).setTimeout=function(t){this.P=t},Vt.nb=function(t){t=t.target;const e=this.M;e&&3==ni(t)?e.l():this.Pa(t)},Vt.Pa=function(t){try{if(t==this.g)t:{const h=ni(this.g);var e=this.g.Ia();this.g.da();if(!(3>h)&&(3!=h||ye||this.g&&(this.h.h||this.g.ja()||si(this.g)))){this.J||4!=h||7==e||Dn(),es(this);var n=this.g.da();this.aa=n;e:if(Yn(this)){var s=si(this.g);t="";var i=s.length,r=4==ni(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ss(this),ns(this);var o="";break e}this.h.i=new jt.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.ba&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!re(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,kn(12),ss(this),ns(this);break t}In(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,is(this,n)}this.S?(Xn(this,h,o),ye&&this.i&&3==h&&(En(this.U,this.V,"tick",this.mb),this.V.start())):(In(this.j,this.m,o,null),is(this,o)),4==h&&ss(this),this.i&&!this.J&&(4==h?Ei(this.l,this):(this.i=!1,Zn(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,kn(12)):(this.o=0,kn(13)),ss(this),ns(this)}}}catch(t){}},Vt.mb=function(){if(this.g){var t=ni(this.g),e=this.g.ja();this.C<e.length&&(es(this),Xn(this,t,e),this.i&&4!=t&&Zn(this))}},Vt.cancel=function(){this.J=!0,ss(this)},Vt.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.L&&(Dn(),kn(17)),ss(this),this.o=2,ns(this)):ts(this,this.Y-t)};var os=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function as(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof as){this.h=void 0!==e?e:t.h,us(this,t.j),this.s=t.s,this.g=t.g,hs(this,t.m),this.l=t.l,e=t.i;var n=new Ts;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ls(this,n),this.o=t.o}else t&&(n=String(t).match(os))?(this.h=!!e,us(this,n[1]||"",!0),this.s=gs(n[2]||""),this.g=gs(n[3]||"",!0),hs(this,n[4]),this.l=gs(n[5]||"",!0),ls(this,n[6]||"",!0),this.o=gs(n[7]||"")):(this.h=!!e,this.i=new Ts(null,this.h))}function cs(t){return new as(t)}function us(t,e,n){t.j=n?gs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function hs(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ls(t,e,n){e instanceof Ts?(t.i=e,function(t,e){e&&!t.j&&(Is(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ss(this,e),_s(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=ps(e,Es)),t.i=new Ts(e,t.h))}function ds(t,e,n){t.i.set(e,n)}function fs(t){return ds(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function gs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ps(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,ms),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ms(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}as.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ps(e,ys,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ps(e,ys,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ps(n,"/"==n.charAt(0)?ws:vs,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ps(n,bs)),t.join("")};var ys=/[#\/\?@]/g,vs=/[#\?:]/g,ws=/[#\?]/g,Es=/[#\?@]/g,bs=/#/g;function Ts(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Is(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ss(t,e){Is(t),e=As(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Cs(t,e){return Is(t),e=As(t,e),t.g.has(e)}function _s(t,e,n){Ss(t,e),0<n.length&&(t.i=null,t.g.set(As(t,e),ee(n)),t.h+=n.length)}function As(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Vt=Ts.prototype).add=function(t,e){Is(this),this.i=null,t=As(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Vt.forEach=function(t,e){Is(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},Vt.sa=function(){Is(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let t=0;t<i.length;t++)n.push(e[s])}return n},Vt.Z=function(t){Is(this);let e=[];if("string"==typeof t)Cs(this,t)&&(e=e.concat(this.g.get(As(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Vt.set=function(t,e){return Is(this),this.i=null,Cs(this,t=As(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Vt.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},Vt.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;""!==o[s]&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function Ds(t){this.l=t||Ns,jt.PerformanceNavigationTiming?t=0<(t=jt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(jt.g&&jt.g.Ka&&jt.g.Ka()&&jt.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ns=10;function ks(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Rs(t){return t.h?1:t.g?t.g.size:0}function xs(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Ls(t,e){t.g?t.g.add(e):t.h=e}function Ms(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Os(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ee(t.i)}function Ps(){}function Fs(){this.g=new Ps}function Vs(t,e,n){const s=n||"";try{rs(t,(function(t,n){let i=t;Kt(t)&&(i=nn(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function Us(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function Bs(t){this.l=t.fc||null,this.j=t.ob||!1}function qs(t,e){Ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=js,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ds.prototype.cancel=function(){if(this.i=Os(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Ps.prototype.stringify=function(t){return jt.JSON.stringify(t,void 0)},Ps.prototype.parse=function(t){return jt.JSON.parse(t,void 0)},Jt(Bs,On),Bs.prototype.g=function(){return new qs(this.l,this.j)},Bs.prototype.i=function(t){return function(){return t}}({}),Jt(qs,Ze);var js=0;function $s(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function zs(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ks(t)}function Ks(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Vt=qs.prototype).open=function(t,e){if(this.readyState!=js)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ks(this)},Vt.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||jt).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},Vt.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,zs(this)),this.readyState=js},Vt.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ks(this)),this.g&&(this.readyState=3,Ks(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==jt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$s(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},Vt.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zs(this):Ks(this),3==this.readyState&&$s(this)}},Vt.Za=function(t){this.g&&(this.response=this.responseText=t,zs(this))},Vt.Ya=function(t){this.g&&(this.response=t,zs(this))},Vt.ka=function(){this.g&&zs(this)},Vt.setRequestHeader=function(t,e){this.v.append(t,e)},Vt.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Vt.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(qs.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Gs=jt.JSON.parse;function Hs(t){Ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Qs,this.L=this.M=!1}Jt(Hs,Ze);var Qs="",Ws=/^https?$/i,Ys=["POST","PUT"];function Xs(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Js(t),ti(t)}function Js(t){t.F||(t.F=!0,tn(t,"complete"),tn(t,"error"))}function Zs(t){if(t.h&&void 0!==qt&&(!t.C[1]||4!=ni(t)||2!=t.da()))if(t.v&&4==ni(t))pn(t.La,0,t);else if(tn(t,"readystatechange"),4==ni(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.I).match(os)[1]||null;if(!i&&jt.self&&jt.self.location){var r=jt.self.location.protocol;i=r.substr(0,r.length-1)}s=!Ws.test(i?i.toLowerCase():"")}n=s}if(n)tn(t,"complete"),tn(t,"success");else{t.m=6;try{var o=2<ni(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.da()+"]",Js(t)}}finally{ti(t)}}}function ti(t,e){if(t.g){ei(t);const n=t.g,s=t.C[0]?$t:null;t.g=null,t.C=null,e||tn(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function ei(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(jt.clearTimeout(t.A),t.A=null)}function ni(t){return t.g?t.g.readyState:0}function si(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Qs:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ii(t){let e="";return Me(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ri(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=ii(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):ds(t,e,n))}function oi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ai(t){this.Ga=0,this.i=[],this.j=new Tn,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=oi("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=oi("baseRetryDelayMs",5e3,t),this.hb=oi("retryDelaySeedMs",1e4,t),this.eb=oi("forwardChannelMaxRetries",2,t),this.xa=oi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new Ds(t&&t.concurrentRequestLimit),this.Ja=new Fs,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function ci(t){if(hi(t),3==t.H){var e=t.W++,n=cs(t.G);ds(n,"SID",t.J),ds(n,"RID",e),ds(n,"TYPE","terminate"),fi(t,n),(e=new $n(t,t.j,e,void 0)).L=2,e.v=fs(cs(n)),n=!1,jt.navigator&&jt.navigator.sendBeacon&&(n=jt.navigator.sendBeacon(e.v.toString(),"")),!n&&jt.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ci(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Zn(e)}Ii(t)}function ui(t){t.g&&(yi(t),t.g.cancel(),t.g=null)}function hi(t){ui(t),t.u&&(jt.clearTimeout(t.u),t.u=null),wi(t),t.h.cancel(),t.m&&("number"==typeof t.m&&jt.clearTimeout(t.m),t.m=null)}function li(t){ks(t.h)||t.m||(t.m=!0,un(t.Na,t),t.C=0)}function di(t,e){var n;n=e?e.m:t.W++;const s=cs(t.G);ds(s,"SID",t.J),ds(s,"RID",n),ds(s,"AID",t.V),fi(t,s),t.o&&t.s&&ri(s,t.o,t.s),n=new $n(t,t.j,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=gi(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ls(t.h,n),Qn(n,s,e)}function fi(t,e){t.ma&&Me(t.ma,(function(t,n){ds(e,n,t)})),t.l&&rs({},(function(t,n){ds(e,n,t)}))}function gi(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Yt(t.l.Va,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{Vs(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.F=t,s}function pi(t){t.g||t.u||(t.ba=1,un(t.Ma,t),t.A=0)}function mi(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=xn(Yt(t.Ma,t),bi(t,t.A)),t.A++,!0)}function yi(t){null!=t.B&&(jt.clearTimeout(t.B),t.B=null)}function vi(t){t.g=new $n(t,t.j,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=cs(t.wa);ds(e,"RID","rpc"),ds(e,"SID",t.J),ds(e,"CI",t.M?"0":"1"),ds(e,"AID",t.V),ds(e,"TYPE","xmlhttp"),fi(t,e),t.o&&t.s&&ri(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=fs(cs(e)),n.s=null,n.S=!0,Wn(n,t)}function wi(t){null!=t.v&&(jt.clearTimeout(t.v),t.v=null)}function Ei(t,e){var n=null;if(t.g==e){wi(t),yi(t),t.g=null;var s=2}else{if(!xs(t.h,e))return;n=e.F,Ms(t.h,e),s=1}if(0!=t.H)if(t.ta=e.aa,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;tn(s=_n(),new Rn(s,n)),li(t)}else pi(t);else if(3==(i=e.o)||0==i&&0<t.ta||!(1==s&&function(t,e){return!(Rs(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.F.concat(t.i),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=xn(Yt(t.Na,t,e),bi(t,t.C)),t.C++,0)))}(t,e)||2==s&&mi(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ti(t,5);break;case 4:Ti(t,10);break;case 3:Ti(t,6);break;default:Ti(t,2)}}function bi(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Ti(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=Yt(t.pb,t);n||(n=new as("//www.google.com/images/cleardot.gif"),jt.location&&"http"==jt.location.protocol||us(n,"https"),fs(n)),function(t,e){const n=new Tn;if(jt.Image){const s=new Image;s.onload=Xt(Us,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Xt(Us,n,s,"TestLoadImage: error",!1,e),s.onabort=Xt(Us,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Xt(Us,n,s,"TestLoadImage: timeout",!1,e),jt.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else kn(2);t.H=0,t.l&&t.l.za(e),Ii(t),hi(t)}function Ii(t){if(t.H=0,t.pa=[],t.l){const e=Os(t.h);0==e.length&&0==t.i.length||(ne(t.pa,e),ne(t.pa,t.i),t.h.i.length=0,ee(t.i),t.i.length=0),t.l.ya()}}function Si(t,e,n){var s=n instanceof as?cs(n):new as(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),hs(s,s.m);else{var i=jt.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new as(null,void 0);s&&us(r,s),e&&(r.g=e),i&&hs(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&ds(s,n,e),ds(s,"VER",t.qa),fi(t,s),s}function Ci(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ha&&!t.va?new Hs(new Bs({ob:!0})):new Hs(t.va)).Oa(t.I),e}function _i(){}function Ai(){if(pe&&!(10<=Number(Ae)))throw Error("Environmental error: no available transport.")}function Di(t,e){Ze.call(this),this.g=new ai(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!re(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!re(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Ri(this)}function Ni(t){Bn.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function ki(){qn.call(this),this.status=1}function Ri(t){this.g=t}function xi(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Li(t,e,n){n||(n=0);var s=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;o=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=(n=(i=(r=(e=n+(o<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(i^r))+s[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(i^r))+s[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^n&(i^r))+s[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^e&(n^i))+s[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(e^n))+s[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(r^e))+s[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^r&(n^i))+s[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r&(n^i))+s[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r&(n^i))+s[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^r&(n^i))+s[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(e^n))+s[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(r^e))+s[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^e&(i^r))+s[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^i^r)+s[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^r)+s[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^r)+s[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^r)+s[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=r+(e^n^i)+s[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^e^n)+s[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^e)+s[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^(n|~r))+s[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(r|~n))+s[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~e))+s[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~r))+s[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(r|~n))+s[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~e))+s[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~r))+s[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(r|~n))+s[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~e))+s[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((r=(e=n+((o=e+(i^(n|~r))+s[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(e|~i))+s[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=r+((o=i+(e^(r|~n))+s[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}function Mi(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=0|t[i];s&&r==e||(n[i]=r,s=!1)}this.g=n}(Vt=Hs.prototype).Oa=function(t){this.M=t},Vt.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Vn.g(),this.C=this.u?Pn(this.u):Pn(Vn),this.g.onreadystatechange=Yt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void Xs(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=jt.FormData&&t instanceof jt.FormData,!(0<=te(Ys,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ei(this),0<this.B&&((this.L=function(t){return pe&&le(Ce,9,(function(){let t=0;const e=oe(String(de)).split("."),n=oe("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=ae(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||ae(0==i[2].length,0==r[2].length)||ae(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Yt(this.ua,this)):this.A=pn(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Xs(this,t)}},Vt.ua=function(){void 0!==qt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tn(this,"timeout"),this.abort(8))},Vt.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,tn(this,"complete"),tn(this,"abort"),ti(this))},Vt.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ti(this,!0)),Hs.$.N.call(this)},Vt.La=function(){this.s||(this.G||this.v||this.l?Zs(this):this.kb())},Vt.kb=function(){Zs(this)},Vt.da=function(){try{return 2<ni(this)?this.g.status:-1}catch(t){return-1}},Vt.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Vt.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Gs(e)}},Vt.Ia=function(){return this.m},Vt.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Vt=ai.prototype).qa=8,Vt.H=1,Vt.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new $n(this,this.j,t,void 0);let r=this.s;if(this.U&&(r?(r=Oe(r),Fe(r,this.U)):r=this.U),null!==this.o||this.O||(i.I=r,r=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=gi(this,i,e),ds(n=cs(this.G),"RID",t),ds(n,"CVER",22),this.F&&ds(n,"X-HTTP-Session-Id",this.F),fi(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(ii(r)))+"&"+e:this.o&&ri(n,this.o,r)),Ls(this.h,i),this.bb&&ds(n,"TYPE","init"),this.P?(ds(n,"$req",e),ds(n,"SID","null"),i.ba=!0,Qn(i,n,null)):Qn(i,n,e),this.H=2}}else 3==this.H&&(t?di(this,t):0==this.i.length||ks(this.h)||di(this))},Vt.Ma=function(){if(this.u=null,vi(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=xn(Yt(this.jb,this),t)}},Vt.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,kn(10),ui(this),vi(this))},Vt.ib=function(){null!=this.v&&(this.v=null,ui(this),mi(this),kn(19))},Vt.pb=function(t){t?(this.j.info("Successfully pinged google.com"),kn(2)):(this.j.info("Failed to ping google.com"),kn(1))},(Vt=_i.prototype).Ba=function(){},Vt.Aa=function(){},Vt.za=function(){},Vt.ya=function(){},Vt.Va=function(){},Ai.prototype.g=function(t,e){return new Di(t,e)},Jt(Di,Ze),Di.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;kn(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=Si(t,null,t.Y),li(t)},Di.prototype.close=function(){ci(this.g)},Di.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=nn(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.fb++,t)),3==e.H&&li(e)},Di.prototype.N=function(){this.g.l=null,delete this.j,ci(this.g),delete this.g,Di.$.N.call(this)},Jt(Ni,Bn),Jt(ki,qn),Jt(Ri,_i),Ri.prototype.Ba=function(){tn(this.g,"a")},Ri.prototype.Aa=function(t){tn(this.g,new Ni(t))},Ri.prototype.za=function(t){tn(this.g,new ki)},Ri.prototype.ya=function(){tn(this.g,"b")},Jt(xi,(function(){this.blockSize=-1})),xi.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},xi.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(0==i)for(;r<=n;)Li(this,t,r),r+=this.blockSize;if("string"==typeof t){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){Li(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){Li(this,s),i=0;break}}this.h=i,this.i+=e},xi.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};var Oi={};function Pi(t){return-128<=t&&128>t?le(Oi,t,(function(t){return new Mi([0|t],0>t?-1:0)})):new Mi([0|t],0>t?-1:0)}function Fi(t){if(isNaN(t)||!isFinite(t))return Ui;if(0>t)return zi(Fi(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=Vi;return new Mi(e,0)}var Vi=4294967296,Ui=Pi(0),Bi=Pi(1),qi=Pi(16777216);function ji(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function $i(t){return-1==t.h}function zi(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new Mi(n,~t.h).add(Bi)}function Ki(t,e){return t.add(zi(e))}function Gi(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Hi(t,e){this.g=t,this.h=e}function Qi(t,e){if(ji(e))throw Error("division by zero");if(ji(t))return new Hi(Ui,Ui);if($i(t))return e=Qi(zi(t),e),new Hi(zi(e.g),zi(e.h));if($i(e))return e=Qi(t,zi(e)),new Hi(zi(e.g),e.h);if(30<t.g.length){if($i(t)||$i(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Bi,s=e;0>=s.X(t);)n=Wi(n),s=Wi(s);var i=Yi(n,1),r=Yi(s,1);for(s=Yi(s,2),n=Yi(n,2);!ji(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=Yi(s,1),n=Yi(n,1)}return e=Ki(t,i.R(e)),new Hi(i,e)}for(i=Ui;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=48>=(s=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,s-48),o=(r=Fi(n)).R(e);$i(o)||0<o.X(t);)o=(r=Fi(n-=s)).R(e);ji(r)&&(r=Bi),i=i.add(r),t=Ki(t,o)}return new Hi(i,t)}function Wi(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new Mi(n,t.h)}function Yi(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new Mi(i,t.h)}(Vt=Mi.prototype).ea=function(){if($i(this))return-zi(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:Vi+s)*e,e*=Vi}return t},Vt.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(ji(this))return"0";if($i(this))return"-"+zi(this).toString(t);for(var e=Fi(Math.pow(t,6)),n=this,s="";;){var i=Qi(n,e).g,r=((0<(n=Ki(n,i.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(ji(n=i))return r+s;for(;6>r.length;)r="0"+r;s=r+s}},Vt.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},Vt.X=function(t){return $i(t=Ki(this,t))?-1:ji(t)?0:1},Vt.abs=function(){return $i(this)?zi(this):this},Vt.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(65535&this.D(i))+(65535&t.D(i)),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new Mi(n,-2147483648&n[n.length-1]?-1:0)},Vt.R=function(t){if(ji(this)||ji(t))return Ui;if($i(this))return $i(t)?zi(this).R(zi(t)):zi(zi(this).R(t));if($i(t))return zi(this.R(zi(t)));if(0>this.X(qi)&&0>t.X(qi))return Fi(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=65535&this.D(s),a=t.D(i)>>>16,c=65535&t.D(i);n[2*s+2*i]+=o*c,Gi(n,2*s+2*i),n[2*s+2*i+1]+=r*c,Gi(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,Gi(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,Gi(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new Mi(n,0)},Vt.gb=function(t){return Qi(this,t).h},Vt.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new Mi(n,this.h&t.h)},Vt.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new Mi(n,this.h|t.h)},Vt.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new Mi(n,this.h^t.h)},Ai.prototype.createWebChannel=Ai.prototype.g,Di.prototype.send=Di.prototype.u,Di.prototype.open=Di.prototype.m,Di.prototype.close=Di.prototype.close,Ln.NO_ERROR=0,Ln.TIMEOUT=8,Ln.HTTP_ERROR=6,Mn.COMPLETE="complete",Fn.EventType=Un,Un.OPEN="a",Un.CLOSE="b",Un.ERROR="c",Un.MESSAGE="d",Ze.prototype.listen=Ze.prototype.O,Hs.prototype.listenOnce=Hs.prototype.P,Hs.prototype.getLastError=Hs.prototype.Sa,Hs.prototype.getLastErrorCode=Hs.prototype.Ia,Hs.prototype.getStatus=Hs.prototype.da,Hs.prototype.getResponseJson=Hs.prototype.Wa,Hs.prototype.getResponseText=Hs.prototype.ja,Hs.prototype.send=Hs.prototype.ha,Hs.prototype.setWithCredentials=Hs.prototype.Oa,xi.prototype.digest=xi.prototype.l,xi.prototype.reset=xi.prototype.reset,xi.prototype.update=xi.prototype.j,Mi.prototype.add=Mi.prototype.add,Mi.prototype.multiply=Mi.prototype.R,Mi.prototype.modulo=Mi.prototype.gb,Mi.prototype.compare=Mi.prototype.X,Mi.prototype.toNumber=Mi.prototype.ea,Mi.prototype.toString=Mi.prototype.toString,Mi.prototype.getBits=Mi.prototype.D,Mi.fromNumber=Fi,Mi.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return zi(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var s=Fi(Math.pow(n,8)),i=Ui,r=0;r<e.length;r+=8){var o=Math.min(8,e.length-r),a=parseInt(e.substring(r,r+o),n);8>o?(o=Fi(Math.pow(n,o)),i=i.R(o).add(Fi(a))):i=(i=i.R(s)).add(Fi(a))}return i};var Xi=Bt.createWebChannelTransport=function(){return new Ai},Ji=Bt.getStatEventTarget=function(){return _n()},Zi=Bt.ErrorCode=Ln,tr=Bt.EventType=Mn,er=Bt.Event=Sn,nr=Bt.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},sr=Bt.FetchXmlHttpFactory=Bs,ir=Bt.WebChannel=Fn,rr=Bt.XhrIo=Hs,or=Bt.Md5=xi,ar=Bt.Integer=Mi;const cr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ur.UNAUTHENTICATED=new ur(null),ur.GOOGLE_CREDENTIALS=new ur("google-credentials-uid"),ur.FIRST_PARTY=new ur("first-party-uid"),ur.MOCK_USER=new ur("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let hr="9.22.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new K("@firebase/firestore");function dr(){return lr.logLevel}function fr(t,...e){if(lr.logLevel<=U.DEBUG){const n=e.map(mr);lr.debug(`Firestore (${hr}): ${t}`,...n)}}function gr(t,...e){if(lr.logLevel<=U.ERROR){const n=e.map(mr);lr.error(`Firestore (${hr}): ${t}`,...n)}}function pr(t,...e){if(lr.logLevel<=U.WARN){const n=e.map(mr);lr.warn(`Firestore (${hr}): ${t}`,...n)}}function mr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t="Unexpected state"){const e=`FIRESTORE (${hr}) INTERNAL ASSERTION FAILED: `+t;throw gr(e),new Error(e)}function vr(t,e){t||yr()}function wr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class br extends D{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Sr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(ur.UNAUTHENTICATED)))}shutdown(){}}class Cr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class _r{constructor(t){this.t=t,this.currentUser=ur.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Tr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Tr,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{fr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(fr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Tr)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(fr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(vr("string"==typeof e.accessToken),new Ir(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return vr(null===t||"string"==typeof t),new ur(t)}}class Ar{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=ur.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Dr{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new Ar(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(ur.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Nr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kr{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,e){const n=t=>{null!=t.error&&fr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.T;return this.T=t.token,fr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{fr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.I.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.I.getImmediate({optional:!0});t?s(t):fr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(vr("string"==typeof t.token),this.T=t.token,new Nr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rr(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const s=Rr(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function Lr(t,e){return t<e?-1:t>e?1:0}function Mr(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Or{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new br(Er.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new br(Er.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new br(Er.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new br(Er.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Or.fromMillis(Date.now())}static fromDate(t){return Or.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Or(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Lr(this.nanoseconds,t.nanoseconds):Lr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Pr(t)}static min(){return new Pr(new Or(0,0))}static max(){return new Pr(new Or(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e,n){void 0===e?e=0:e>t.length&&yr(),void 0===n?n=t.length-e:n>t.length-e&&yr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Fr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Fr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Vr extends Fr{construct(t,e,n){return new Vr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new br(Er.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Vr(e)}static emptyPath(){return new Vr([])}}const Ur=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Br extends Fr{construct(t,e,n){return new Br(t,e,n)}static isValidIdentifier(t){return Ur.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Br.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Br(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new br(Er.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new br(Er.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new br(Er.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new br(Er.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Br(e)}static emptyPath(){return new Br([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t){this.path=t}static fromPath(t){return new qr(Vr.fromString(t))}static fromName(t){return new qr(Vr.fromString(t).popFirst(5))}static empty(){return new qr(Vr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Vr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Vr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new qr(new Vr(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}jr.UNKNOWN_ID=-1;function $r(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=Pr.fromTimestamp(1e9===s?new Or(n+1,0):new Or(n,s));return new Kr(i,qr.empty(),e)}function zr(t){return new Kr(t.readTime,t.key,-1)}class Kr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Kr(Pr.min(),qr.empty(),-1)}static max(){return new Kr(Pr.max(),qr.empty(),-1)}}function Gr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=qr.comparator(t.documentKey,e.documentKey),0!==n?n:Lr(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qr{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(t){if(t.code!==Er.FAILED_PRECONDITION||t.message!==Hr)throw t;fr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&yr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Yr(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Yr?e:Yr.resolve(e)}catch(t){return Yr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Yr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Yr.reject(e)}static resolve(t){return new Yr(((e,n)=>{e(t)}))}static reject(t){return new Yr(((e,n)=>{n(t)}))}static waitFor(t){return new Yr(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Yr.resolve(!1);for(const n of t)e=e.next((t=>t?Yr.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new Yr(((n,s)=>{const i=t.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===i&&n(r)}),(t=>s(t)))}}))}static doWhile(t,e){return new Yr(((n,s)=>{const i=()=>{!0===t()?e().next((()=>{i()}),s):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>e.writeSequenceNumber(t))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function Zr(t){return null==t}function to(t){return 0===t&&1/t==-1/0}function eo(t){return"number"==typeof t&&Number.isInteger(t)&&!to(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jr.ct=-1;const no=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],so=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],io=so;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ro(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function oo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ao(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(t,e){this.comparator=t,this.root=e||ho.EMPTY}insert(t,e){return new co(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ho.BLACK,null,null))}remove(t){return new co(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ho.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new uo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new uo(this.root,t,this.comparator,!1)}getReverseIterator(){return new uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new uo(this.root,t,this.comparator,!0)}}class uo{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ho{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:ho.RED,this.left=null!=s?s:ho.EMPTY,this.right=null!=i?i:ho.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new ho(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ho.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return ho.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ho.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ho.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw yr();if(this.right.isRed())throw yr();const t=this.left.check();if(t!==this.right.check())throw yr();return t+(this.isRed()?0:1)}}ho.EMPTY=null,ho.RED=!0,ho.BLACK=!1,ho.EMPTY=new class{constructor(){this.size=0}get key(){throw yr()}get value(){throw yr()}get color(){throw yr()}get left(){throw yr()}get right(){throw yr()}copy(t,e,n,s,i){return this}insert(t,e,n){return new ho(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lo{constructor(t){this.comparator=t,this.data=new co(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new fo(this.data.getIterator())}getIteratorFrom(t){return new fo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof lo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new lo(this.comparator);return e.data=t,e}}class fo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class go{constructor(t){this.fields=t,t.sort(Br.comparator)}static empty(){return new go([])}unionWith(t){let e=new lo(Br.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new go(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Mr(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mo{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new po("Invalid base64 string: "+t):t}}(t);return new mo(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new mo(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Lr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}mo.EMPTY_BYTE_STRING=new mo("");const yo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vo(t){if(vr(!!t),"string"==typeof t){let e=0;const n=yo.exec(t);if(vr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:wo(t.seconds),nanos:wo(t.nanos)}}function wo(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Eo(t){return"string"==typeof t?mo.fromBase64String(t):mo.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function To(t){const e=t.mapValue.fields.__previous_value__;return bo(e)?To(e):e}function Io(t){const e=vo(t.mapValue.fields.__local_write_time__.timestampValue);return new Or(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t,e,n,s,i,r,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Co{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Co("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Co&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ao(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bo(t)?4:qo(t)?9007199254740991:10:yr()}function Do(t,e){if(t===e)return!0;const n=Ao(t);if(n!==Ao(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Io(t).isEqual(Io(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=vo(t.timestampValue),s=vo(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Eo(t.bytesValue).isEqual(Eo(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return wo(t.geoPointValue.latitude)===wo(e.geoPointValue.latitude)&&wo(t.geoPointValue.longitude)===wo(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return wo(t.integerValue)===wo(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=wo(t.doubleValue),s=wo(e.doubleValue);return n===s?to(n)===to(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return Mr(t.arrayValue.values||[],e.arrayValue.values||[],Do);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(ro(n)!==ro(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!Do(n[t],s[t])))return!1;return!0}(t,e);default:return yr()}}function No(t,e){return void 0!==(t.values||[]).find((t=>Do(t,e)))}function ko(t,e){if(t===e)return 0;const n=Ao(t),s=Ao(e);if(n!==s)return Lr(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Lr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=wo(t.integerValue||t.doubleValue),s=wo(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Ro(t.timestampValue,e.timestampValue);case 4:return Ro(Io(t),Io(e));case 5:return Lr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Eo(t),s=Eo(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=Lr(n[t],s[t]);if(0!==e)return e}return Lr(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Lr(wo(t.latitude),wo(e.latitude));return 0!==n?n:Lr(wo(t.longitude),wo(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=ko(n[t],s[t]);if(e)return e}return Lr(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===_o.mapValue&&e===_o.mapValue)return 0;if(t===_o.mapValue)return 1;if(e===_o.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=Lr(s[t],r[t]);if(0!==e)return e;const o=ko(n[s[t]],i[r[t]]);if(0!==o)return o}return Lr(s.length,r.length)}(t.mapValue,e.mapValue);default:throw yr()}}function Ro(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Lr(t,e);const n=vo(t),s=vo(e),i=Lr(n.seconds,s.seconds);return 0!==i?i:Lr(n.nanos,s.nanos)}function xo(t){return Lo(t)}function Lo(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=vo(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Eo(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,qr.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Lo(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${Lo(t.fields[i])}`;return n+"}"}(t.mapValue):yr()}function Mo(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Oo(t){return!!t&&"integerValue"in t}function Po(t){return!!t&&"arrayValue"in t}function Fo(t){return!!t&&"nullValue"in t}function Vo(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uo(t){return!!t&&"mapValue"in t}function Bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return oo(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Bo(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qo(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jo{constructor(t){this.value=t}static empty(){return new jo({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Uo(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Bo(e)}setAll(t){let e=Br.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=Bo(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Uo(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Do(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Uo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){oo(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new jo(Bo(this.value))}}function $o(t){const e=[];return oo(t.fields,((t,n)=>{const s=new Br([t]);if(Uo(n)){const t=$o(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new go(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class zo{constructor(t,e,n,s,i,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new zo(t,0,Pr.min(),Pr.min(),Pr.min(),jo.empty(),0)}static newFoundDocument(t,e,n,s){return new zo(t,1,e,Pr.min(),n,s,0)}static newNoDocument(t,e){return new zo(t,2,e,Pr.min(),Pr.min(),jo.empty(),0)}static newUnknownDocument(t,e){return new zo(t,3,e,Pr.min(),Pr.min(),jo.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Pr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=jo.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=jo.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Pr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof zo&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new zo(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t,e){this.position=t,this.inclusive=e}}function Go(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?qr.comparator(qr.fromName(o.referenceValue),n.key):ko(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function Ho(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Do(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t,e="asc"){this.field=t,this.dir=e}}function Wo(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{}class Xo extends Yo{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new ra(t,e,n):"array-contains"===e?new ua(t,n):"in"===e?new ha(t,n):"not-in"===e?new la(t,n):"array-contains-any"===e?new da(t,n):new Xo(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new oa(t,n):new aa(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(ko(e,this.value)):null!==e&&Ao(this.value)===Ao(e)&&this.matchesComparison(ko(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return yr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Jo extends Yo{constructor(t,e){super(),this.filters=t,this.op=e,this.lt=null}static create(t,e){return new Jo(t,e)}matches(t){return Zo(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.ft((t=>t.isInequality()));return null!==t?t.field:null}ft(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Zo(t){return"and"===t.op}function ta(t){return ea(t)&&Zo(t)}function ea(t){for(const e of t.filters)if(e instanceof Jo)return!1;return!0}function na(t){if(t instanceof Xo)return t.field.canonicalString()+t.op.toString()+xo(t.value);if(ta(t))return t.filters.map((t=>na(t))).join(",");{const e=t.filters.map((t=>na(t))).join(",");return`${t.op}(${e})`}}function sa(t,e){return t instanceof Xo?function(t,e){return e instanceof Xo&&t.op===e.op&&t.field.isEqual(e.field)&&Do(t.value,e.value)}(t,e):t instanceof Jo?function(t,e){return e instanceof Jo&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&sa(n,e.filters[s])),!0)}(t,e):void yr()}function ia(t){return t instanceof Xo?function(t){return`${t.field.canonicalString()} ${t.op} ${xo(t.value)}`}(t):t instanceof Jo?function(t){return t.op.toString()+" {"+t.getFilters().map(ia).join(" ,")+"}"}(t):"Filter"}class ra extends Xo{constructor(t,e,n){super(t,e,n),this.key=qr.fromName(n.referenceValue)}matches(t){const e=qr.comparator(t.key,this.key);return this.matchesComparison(e)}}class oa extends Xo{constructor(t,e){super(t,"in",e),this.keys=ca("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class aa extends Xo{constructor(t,e){super(t,"not-in",e),this.keys=ca("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function ca(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>qr.fromName(t.referenceValue)))}class ua extends Xo{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Po(e)&&No(e.arrayValue,this.value)}}class ha extends Xo{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&No(this.value.arrayValue,e)}}class la extends Xo{constructor(t,e){super(t,"not-in",e)}matches(t){if(No(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!No(this.value.arrayValue,e)}}class da extends Xo{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Po(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>No(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.dt=null}}function ga(t,e=null,n=[],s=[],i=null,r=null,o=null){return new fa(t,e,n,s,i,r,o)}function pa(t){const e=wr(t);if(null===e.dt){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>na(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Zr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>xo(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>xo(t))).join(",")),e.dt=t}return e.dt}function ma(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Wo(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sa(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ho(t.startAt,e.startAt)&&Ho(t.endAt,e.endAt)}function ya(t){return qr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class va{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function wa(t,e,n,s,i,r,o,a){return new va(t,e,n,s,i,r,o,a)}function Ea(t){return new va(t)}function ba(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ta(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ia(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function Sa(t){return null!==t.collectionGroup}function Ca(t){const e=wr(t);if(null===e.wt){e.wt=[];const t=Ia(e),n=Ta(e);if(null!==t&&null===n)t.isKeyField()||e.wt.push(new Qo(t)),e.wt.push(new Qo(Br.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.wt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Qo(Br.keyField(),t))}}}return e.wt}function _a(t){const e=wr(t);if(!e._t)if("F"===e.limitType)e._t=ga(e.path,e.collectionGroup,Ca(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Ca(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Qo(n.field,e))}const n=e.endAt?new Ko(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ko(e.startAt.position,e.startAt.inclusive):null;e._t=ga(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e._t}function Aa(t,e){e.getFirstInequalityField(),Ia(t);const n=t.filters.concat([e]);return new va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Da(t,e,n){return new va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Na(t,e){return ma(_a(t),_a(e))&&t.limitType===e.limitType}function ka(t){return`${pa(_a(t))}|lt:${t.limitType}`}function Ra(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>ia(t))).join(", ")}]`),Zr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>xo(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>xo(t))).join(",")),`Target(${e})`}(_a(t))}; limitType=${t.limitType})`}function xa(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):qr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Ca(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const s=Go(t,e,n);return t.inclusive?s<=0:s<0}(t.startAt,Ca(t),e))&&!(t.endAt&&!function(t,e,n){const s=Go(t,e,n);return t.inclusive?s>=0:s>0}(t.endAt,Ca(t),e))}(t,e)}function La(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ma(t){return(e,n)=>{let s=!1;for(const i of Ca(t)){const t=Oa(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function Oa(t,e,n){const s=t.field.isKeyField()?qr.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?ko(s,i):yr()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return yr()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){oo(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return ao(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new co(qr.comparator);function Va(){return Fa}const Ua=new co(qr.comparator);function Ba(...t){let e=Ua;for(const n of t)e=e.insert(n.key,n);return e}function qa(t){let e=Ua;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ja(){return za()}function $a(){return za()}function za(){return new Pa((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ka=new co(qr.comparator),Ga=new lo(qr.comparator);function Ha(...t){let e=Ga;for(const n of t)e=e.add(n);return e}const Qa=new lo(Lr);function Wa(){return Qa}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:to(e)?"-0":e}}function Xa(t){return{integerValue:""+t}}function Ja(t,e){return eo(e)?Xa(e):Ya(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(){this._=void 0}}function tc(t,e,n){return t instanceof sc?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&bo(e)&&(e=To(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ic?rc(t,e):t instanceof oc?ac(t,e):function(t,e){const n=nc(t,e),s=uc(n)+uc(t.gt);return Oo(n)&&Oo(t.gt)?Xa(s):Ya(t.serializer,s)}(t,e)}function ec(t,e,n){return t instanceof ic?rc(t,e):t instanceof oc?ac(t,e):n}function nc(t,e){var n;return t instanceof cc?Oo(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null}class sc extends Za{}class ic extends Za{constructor(t){super(),this.elements=t}}function rc(t,e){const n=hc(e);for(const e of t.elements)n.some((t=>Do(t,e)))||n.push(e);return{arrayValue:{values:n}}}class oc extends Za{constructor(t){super(),this.elements=t}}function ac(t,e){let n=hc(e);for(const e of t.elements)n=n.filter((t=>!Do(t,e)));return{arrayValue:{values:n}}}class cc extends Za{constructor(t,e){super(),this.serializer=t,this.gt=e}}function uc(t){return wo(t.integerValue||t.doubleValue)}function hc(t){return Po(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(t,e){this.version=t,this.transformResults=e}}class dc{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new dc}static exists(t){return new dc(void 0,t)}static updateTime(t){return new dc(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fc(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class gc{}function pc(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Cc(t.key,dc.none()):new Ec(t.key,t.data,dc.none());{const n=t.data,s=jo.empty();let i=new lo(Br.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),i=i.add(t)}return new bc(t.key,s,new go(i.toArray()),dc.none())}}function mc(t,e,n){t instanceof Ec?function(t,e,n){const s=t.value.clone(),i=Ic(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof bc?function(t,e,n){if(!fc(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Ic(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Tc(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function yc(t,e,n,s){return t instanceof Ec?function(t,e,n,s){if(!fc(t.precondition,e))return n;const i=t.value.clone(),r=Sc(t.fieldTransforms,s,e);return i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,s):t instanceof bc?function(t,e,n,s){if(!fc(t.precondition,e))return n;const i=Sc(t.fieldTransforms,s,e),r=e.data;return r.setAll(Tc(t)),r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):function(t,e,n){return fc(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function vc(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=nc(s.transform,t||null);null!=i&&(null===n&&(n=jo.empty()),n.set(s.field,i))}return n||null}function wc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Mr(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ic&&e instanceof ic||t instanceof oc&&e instanceof oc?Mr(t.elements,e.elements,Do):t instanceof cc&&e instanceof cc?Do(t.gt,e.gt):t instanceof sc&&e instanceof sc}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ec extends gc{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class bc extends gc{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Tc(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Ic(t,e,n){const s=new Map;vr(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,ec(o,a,n[i]))}return s}function Sc(t,e,n){const s=new Map;for(const i of t){const t=i.transform,r=n.data.field(i.field);s.set(i.field,tc(t,r,e))}return s}class Cc extends gc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _c extends gc{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&mc(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=yc(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=yc(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=$a();return this.mutations.forEach((s=>{const i=t.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=e.has(s.key)?null:o;const a=pc(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(Pr.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ha())}isEqual(t){return this.batchId===t.batchId&&Mr(this.mutations,t.mutations,((t,e)=>wc(t,e)))&&Mr(this.baseMutations,t.baseMutations,((t,e)=>wc(t,e)))}}class Dc{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){vr(t.mutations.length===n.length);let s=Ka;const i=t.mutations;for(let t=0;t<i.length;t++)s=s.insert(i[t].key,n[t].version);return new Dc(t,e,n,s)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rc,xc;function Lc(t){switch(t){default:return yr();case Er.CANCELLED:case Er.UNKNOWN:case Er.DEADLINE_EXCEEDED:case Er.RESOURCE_EXHAUSTED:case Er.INTERNAL:case Er.UNAVAILABLE:case Er.UNAUTHENTICATED:return!1;case Er.INVALID_ARGUMENT:case Er.NOT_FOUND:case Er.ALREADY_EXISTS:case Er.PERMISSION_DENIED:case Er.FAILED_PRECONDITION:case Er.ABORTED:case Er.OUT_OF_RANGE:case Er.UNIMPLEMENTED:case Er.DATA_LOSS:return!0}}function Mc(t){if(void 0===t)return gr("GRPC error has no .code"),Er.UNKNOWN;switch(t){case Rc.OK:return Er.OK;case Rc.CANCELLED:return Er.CANCELLED;case Rc.UNKNOWN:return Er.UNKNOWN;case Rc.DEADLINE_EXCEEDED:return Er.DEADLINE_EXCEEDED;case Rc.RESOURCE_EXHAUSTED:return Er.RESOURCE_EXHAUSTED;case Rc.INTERNAL:return Er.INTERNAL;case Rc.UNAVAILABLE:return Er.UNAVAILABLE;case Rc.UNAUTHENTICATED:return Er.UNAUTHENTICATED;case Rc.INVALID_ARGUMENT:return Er.INVALID_ARGUMENT;case Rc.NOT_FOUND:return Er.NOT_FOUND;case Rc.ALREADY_EXISTS:return Er.ALREADY_EXISTS;case Rc.PERMISSION_DENIED:return Er.PERMISSION_DENIED;case Rc.FAILED_PRECONDITION:return Er.FAILED_PRECONDITION;case Rc.ABORTED:return Er.ABORTED;case Rc.OUT_OF_RANGE:return Er.OUT_OF_RANGE;case Rc.UNIMPLEMENTED:return Er.UNIMPLEMENTED;case Rc.DATA_LOSS:return Er.DATA_LOSS;default:return yr()}}(xc=Rc||(Rc={}))[xc.OK=0]="OK",xc[xc.CANCELLED=1]="CANCELLED",xc[xc.UNKNOWN=2]="UNKNOWN",xc[xc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xc[xc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xc[xc.NOT_FOUND=5]="NOT_FOUND",xc[xc.ALREADY_EXISTS=6]="ALREADY_EXISTS",xc[xc.PERMISSION_DENIED=7]="PERMISSION_DENIED",xc[xc.UNAUTHENTICATED=16]="UNAUTHENTICATED",xc[xc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xc[xc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xc[xc.ABORTED=10]="ABORTED",xc[xc.OUT_OF_RANGE=11]="OUT_OF_RANGE",xc[xc.UNIMPLEMENTED=12]="UNIMPLEMENTED",xc[xc.INTERNAL=13]="INTERNAL",xc[xc.UNAVAILABLE=14]="UNAVAILABLE",xc[xc.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Pc}static getOrCreateInstance(){return null===Pc&&(Pc=new Oc),Pc}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let Pc=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=new ar([4294967295,4294967295],0);function Uc(t){const e=Fc().encode(t),n=new or;return n.update(e),new Uint8Array(n.digest())}function Bc(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new ar([n,s],0),new ar([i,r],0)]}class qc{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new jc(`Invalid padding: ${e}`);if(n<0)throw new jc(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new jc(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new jc(`Invalid padding when bitmap length is 0: ${e}`);this.It=8*t.length-e,this.Tt=ar.fromNumber(this.It)}Et(t,e,n){let s=t.add(e.multiply(ar.fromNumber(n)));return 1===s.compare(Vc)&&(s=new ar([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}vt(t){if(0===this.It)return!1;const e=Uc(t),[n,s]=Bc(e);for(let t=0;t<this.hashCount;t++){const e=this.Et(n,s,t);if(!this.At(e))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),r=new qc(i,s,e);return n.forEach((t=>r.insert(t))),r}insert(t){if(0===this.It)return;const e=Uc(t),[n,s]=Bc(e);for(let t=0;t<this.hashCount;t++){const e=this.Et(n,s,t);this.Rt(e)}}Rt(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class jc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,zc.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new $c(Pr.min(),s,new co(Lr),Va(),Ha())}}class zc{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new zc(n,e,Ha(),Ha(),Ha())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t,e,n,s){this.Pt=t,this.removedTargetIds=e,this.key=n,this.bt=s}}class Gc{constructor(t,e){this.targetId=t,this.Vt=e}}class Hc{constructor(t,e,n=mo.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Qc{constructor(){this.St=0,this.Dt=Xc(),this.Ct=mo.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(t){t.approximateByteSize()>0&&(this.Nt=!0,this.Ct=t)}Ot(){let t=Ha(),e=Ha(),n=Ha();return this.Dt.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:yr()}})),new zc(this.Ct,this.xt,t,e,n)}Ft(){this.Nt=!1,this.Dt=Xc()}Bt(t,e){this.Nt=!0,this.Dt=this.Dt.insert(t,e)}Lt(t){this.Nt=!0,this.Dt=this.Dt.remove(t)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Wc{constructor(t){this.Gt=t,this.Qt=new Map,this.jt=Va(),this.zt=Yc(),this.Wt=new co(Lr)}Ht(t){for(const e of t.Pt)t.bt&&t.bt.isFoundDocument()?this.Jt(e,t.bt):this.Yt(e,t.key,t.bt);for(const e of t.removedTargetIds)this.Yt(e,t.key,t.bt)}Xt(t){this.forEachTarget(t,(e=>{const n=this.Zt(e);switch(t.state){case 0:this.te(e)&&n.$t(t.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(t.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(e);break;case 3:this.te(e)&&(n.Kt(),n.$t(t.resumeToken));break;case 4:this.te(e)&&(this.ee(e),n.$t(t.resumeToken));break;default:yr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qt.forEach(((t,n)=>{this.te(n)&&e(n)}))}ne(t){var e;const n=t.targetId,s=t.Vt.count,i=this.se(n);if(i){const r=i.target;if(ya(r))if(0===s){const t=new qr(r.path);this.Yt(n,t,zo.newNoDocument(t,Pr.min()))}else vr(1===s);else{const i=this.ie(n);if(i!==s){const s=this.re(t,i);if(0!==s){this.ee(n);const t=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,t)}null===(e=Oc.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n){var s,i,r,o,a,c;const u={localCacheCount:e,existenceFilterCount:n.count},h=n.unchangedNames;return h&&(u.bloomFilter={applied:0===t,hashCount:null!==(s=null==h?void 0:h.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(o=null===(r=null===(i=null==h?void 0:h.bits)||void 0===i?void 0:i.bitmap)||void 0===r?void 0:r.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==h?void 0:h.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),u}(s,i,t.Vt))}}}}re(t,e){const{unchangedNames:n,count:s}=t.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:r=0},hashCount:o=0}=n;let a,c;try{a=Eo(i).toUint8Array()}catch(t){if(t instanceof po)return pr("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw t}try{c=new qc(a,r,o)}catch(t){return pr(t instanceof jc?"BloomFilter error: ":"Applying bloom filter failed: ",t),1}return 0===c.It?1:s!==e-this.oe(t.targetId,c)?2:0}oe(t,e){const n=this.Gt.getRemoteKeysForTarget(t);let s=0;return n.forEach((n=>{const i=this.Gt.ue(),r=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.vt(r)||(this.Yt(t,n,null),s++)})),s}ce(t){const e=new Map;this.Qt.forEach(((n,s)=>{const i=this.se(s);if(i){if(n.current&&ya(i.target)){const e=new qr(i.target.path);null!==this.jt.get(e)||this.ae(s,e)||this.Yt(s,e,zo.newNoDocument(e,t))}n.Mt&&(e.set(s,n.Ot()),n.Ft())}}));let n=Ha();this.zt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.se(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.jt.forEach(((e,n)=>n.setReadTime(t)));const s=new $c(t,e,this.Wt,this.jt,n);return this.jt=Va(),this.zt=Yc(),this.Wt=new co(Lr),s}Jt(t,e){if(!this.te(t))return;const n=this.ae(t,e.key)?2:0;this.Zt(t).Bt(e.key,n),this.jt=this.jt.insert(e.key,e),this.zt=this.zt.insert(e.key,this.he(e.key).add(t))}Yt(t,e,n){if(!this.te(t))return;const s=this.Zt(t);this.ae(t,e)?s.Bt(e,1):s.Lt(e),this.zt=this.zt.insert(e,this.he(e).delete(t)),n&&(this.jt=this.jt.insert(e,n))}removeTarget(t){this.Qt.delete(t)}ie(t){const e=this.Zt(t).Ot();return this.Gt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}qt(t){this.Zt(t).qt()}Zt(t){let e=this.Qt.get(t);return e||(e=new Qc,this.Qt.set(t,e)),e}he(t){let e=this.zt.get(t);return e||(e=new lo(Lr),this.zt=this.zt.insert(t,e)),e}te(t){const e=null!==this.se(t);return e||fr("WatchChangeAggregator","Detected inactive target",t),e}se(t){const e=this.Qt.get(t);return e&&e.kt?null:this.Gt.le(t)}ee(t){this.Qt.set(t,new Qc),this.Gt.getRemoteKeysForTarget(t).forEach((e=>{this.Yt(t,e,null)}))}ae(t,e){return this.Gt.getRemoteKeysForTarget(t).has(e)}}function Yc(){return new co(qr.comparator)}function Xc(){return new co(qr.comparator)}const Jc={asc:"ASCENDING",desc:"DESCENDING"},Zc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tu={and:"AND",or:"OR"};class eu{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function nu(t,e){return t.useProto3Json||Zr(e)?e:{value:e}}function su(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iu(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ru(t,e){return su(t,e.toTimestamp())}function ou(t){return vr(!!t),Pr.fromTimestamp(function(t){const e=vo(t);return new Or(e.seconds,e.nanos)}(t))}function au(t,e){return function(t){return new Vr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function cu(t){const e=Vr.fromString(t);return vr(Du(e)),e}function uu(t,e){return au(t.databaseId,e.path)}function hu(t,e){const n=cu(e);if(n.get(1)!==t.databaseId.projectId)throw new br(Er.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new br(Er.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new qr(gu(n))}function lu(t,e){return au(t.databaseId,e)}function du(t){const e=cu(t);return 4===e.length?Vr.emptyPath():gu(e)}function fu(t){return new Vr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gu(t){return vr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function pu(t,e,n){return{name:uu(t,e),fields:n.value.mapValue.fields}}function mu(t,e){let n;if(e instanceof Ec)n={update:pu(t,e.key,e.value)};else if(e instanceof Cc)n={delete:uu(t,e.key)};else if(e instanceof bc)n={update:pu(t,e.key,e.data),updateMask:Au(e.fieldMask)};else{if(!(e instanceof _c))return yr();n={verify:uu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof sc)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ic)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof oc)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof cc)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw yr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:ru(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:yr()}(t,e.precondition)),n}function yu(t,e){return{documents:[lu(t,e.path)]}}function vu(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=lu(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=lu(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0!==t.length)return _u(Jo.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Su(t.field),direction:bu(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=nu(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function wu(t){let e=du(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){vr(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=Eu(t);return e instanceof Jo&&ta(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Qo(Cu(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Zr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Ko(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Ko(n,e)}(n.endAt)),wa(e,i,o,r,a,"F",c,u)}function Eu(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Cu(t.unaryFilter.field);return Xo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Cu(t.unaryFilter.field);return Xo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Cu(t.unaryFilter.field);return Xo.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Cu(t.unaryFilter.field);return Xo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return yr()}}(t):void 0!==t.fieldFilter?function(t){return Xo.create(Cu(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return yr()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Jo.create(t.compositeFilter.filters.map((t=>Eu(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return yr()}}(t.compositeFilter.op))}(t):yr()}function bu(t){return Jc[t]}function Tu(t){return Zc[t]}function Iu(t){return tu[t]}function Su(t){return{fieldPath:t.canonicalString()}}function Cu(t){return Br.fromServerFormat(t.fieldPath)}function _u(t){return t instanceof Xo?function(t){if("=="===t.op){if(Vo(t.value))return{unaryFilter:{field:Su(t.field),op:"IS_NAN"}};if(Fo(t.value))return{unaryFilter:{field:Su(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Vo(t.value))return{unaryFilter:{field:Su(t.field),op:"IS_NOT_NAN"}};if(Fo(t.value))return{unaryFilter:{field:Su(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Su(t.field),op:Tu(t.op),value:t.value}}}(t):t instanceof Jo?function(t){const e=t.getFilters().map((t=>_u(t)));return 1===e.length?e[0]:{compositeFilter:{op:Iu(t.op),filters:e}}}(t):yr()}function Au(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Du(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(t,e,n,s,i=Pr.min(),r=Pr.min(),o=mo.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Nu(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Nu(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Nu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Nu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t){this.fe=t}}function Ru(t){const e=wu({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Da(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(){}_e(t,e){this.me(t,e),e.ge()}me(t,e){if("nullValue"in t)this.ye(e,5);else if("booleanValue"in t)this.ye(e,10),e.pe(t.booleanValue?1:0);else if("integerValue"in t)this.ye(e,15),e.pe(wo(t.integerValue));else if("doubleValue"in t){const n=wo(t.doubleValue);isNaN(n)?this.ye(e,13):(this.ye(e,15),to(n)?e.pe(0):e.pe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ye(e,20),"string"==typeof n?e.Ie(n):(e.Ie(`${n.seconds||""}`),e.pe(n.nanos||0))}else if("stringValue"in t)this.Te(t.stringValue,e),this.Ee(e);else if("bytesValue"in t)this.ye(e,30),e.Ae(Eo(t.bytesValue)),this.Ee(e);else if("referenceValue"in t)this.ve(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ye(e,45),e.pe(n.latitude||0),e.pe(n.longitude||0)}else"mapValue"in t?qo(t)?this.ye(e,Number.MAX_SAFE_INTEGER):(this.Re(t.mapValue,e),this.Ee(e)):"arrayValue"in t?(this.Pe(t.arrayValue,e),this.Ee(e)):yr()}Te(t,e){this.ye(e,25),this.be(t,e)}be(t,e){e.Ie(t)}Re(t,e){const n=t.fields||{};this.ye(e,55);for(const t of Object.keys(n))this.Te(t,e),this.me(n[t],e)}Pe(t,e){const n=t.values||[];this.ye(e,50);for(const t of n)this.me(t,e)}ve(t,e){this.ye(e,37),qr.fromName(t).path.forEach((t=>{this.ye(e,60),this.be(t,e)}))}ye(t,e){t.pe(e)}Ee(t){t.pe(2)}}xu.Ve=new xu;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lu{constructor(){this.rn=new Mu}addToCollectionParentIndex(t,e){return this.rn.add(e),Yr.resolve()}getCollectionParents(t,e){return Yr.resolve(this.rn.getEntries(e))}addFieldIndex(t,e){return Yr.resolve()}deleteFieldIndex(t,e){return Yr.resolve()}getDocumentsMatchingTarget(t,e){return Yr.resolve(null)}getIndexType(t,e){return Yr.resolve(0)}getFieldIndexes(t,e){return Yr.resolve([])}getNextCollectionGroupToUpdate(t){return Yr.resolve(null)}getMinOffset(t,e){return Yr.resolve(Kr.min())}getMinOffsetFromCollectionGroup(t,e){return Yr.resolve(Kr.min())}updateCollectionGroup(t,e,n){return Yr.resolve()}updateIndexEntries(t,e){return Yr.resolve()}}class Mu{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new lo(Vr.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new lo(Vr.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ou{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ou(t,Ou.DEFAULT_COLLECTION_PERCENTILE,Ou.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ou.DEFAULT_COLLECTION_PERCENTILE=10,Ou.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ou.DEFAULT=new Ou(41943040,Ou.DEFAULT_COLLECTION_PERCENTILE,Ou.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ou.DISABLED=new Ou(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pu{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static kn(){return new Pu(0)}static Mn(){return new Pu(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fu{constructor(){this.changes=new Pa((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,zo.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Yr.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vu{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&yc(n.mutation,t,go.empty(),Or.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ha()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ha()){const s=ja();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=Ba();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ja();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ha())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let i=Va();const r=za(),o=za();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof bc)?i=i.insert(e.key,e):void 0!==o?(r.set(e.key,o.mutation.getFieldMask()),yc(o.mutation,e,o.mutation.getFieldMask(),Or.now())):r.set(e.key,go.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Vu(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=za();let s=new co(((t,e)=>t-e)),i=Ha();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||go.empty();o=i.applyToLocalView(r,o),n.set(t,o);const a=(s.get(i.batchId)||Ha()).add(t);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=$a();c.forEach((t=>{if(!i.has(t)){const s=pc(e.get(t),n.get(t));null!==s&&u.set(t,s),i=i.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Yr.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return qr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Sa(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):Yr.resolve(ja());let o=-1,a=i;return r.next((e=>Yr.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Yr.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Ha()))).next((t=>({batchId:o,changes:qa(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new qr(e)).next((t=>{let e=Ba();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let i=Ba();return this.indexManager.getCollectionParents(t,s).next((r=>Yr.forEach(r,(r=>{const o=function(t,e){return new va(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(s));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s)))).next((t=>{s.forEach(((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,zo.newInvalidDocument(s)))}));let n=Ba();return t.forEach(((t,i)=>{const r=s.get(t);void 0!==r&&yc(r.mutation,i,go.empty(),Or.now()),xa(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(t){this.serializer=t,this.cs=new Map,this.hs=new Map}getBundleMetadata(t,e){return Yr.resolve(this.cs.get(e))}saveBundleMetadata(t,e){var n;return this.cs.set(e.id,{id:(n=e).id,version:n.version,createTime:ou(n.createTime)}),Yr.resolve()}getNamedQuery(t,e){return Yr.resolve(this.hs.get(e))}saveNamedQuery(t,e){return this.hs.set(e.name,function(t){return{name:t.name,query:Ru(t.bundledQuery),readTime:ou(t.readTime)}}(e)),Yr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(){this.overlays=new co(qr.comparator),this.ls=new Map}getOverlay(t,e){return Yr.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ja();return Yr.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.we(t,e,s)})),Yr.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.ls.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.ls.delete(n)),Yr.resolve()}getOverlaysForCollection(t,e,n){const s=ja(),i=e.length+1,r=new qr(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Yr.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new co(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=ja(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ja(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return Yr.resolve(o)}we(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.ls.get(s.largestBatchId).delete(n.key);this.ls.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Nc(e,n));let i=this.ls.get(e);void 0===i&&(i=Ha(),this.ls.set(e,i)),this.ls.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(){this.fs=new lo($u.ds),this.ws=new lo($u._s)}isEmpty(){return this.fs.isEmpty()}addReference(t,e){const n=new $u(t,e);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.ys(new $u(t,e))}ps(t,e){t.forEach((t=>this.removeReference(t,e)))}Is(t){const e=new qr(new Vr([])),n=new $u(e,t),s=new $u(e,t+1),i=[];return this.ws.forEachInRange([n,s],(t=>{this.ys(t),i.push(t.key)})),i}Ts(){this.fs.forEach((t=>this.ys(t)))}ys(t){this.fs=this.fs.delete(t),this.ws=this.ws.delete(t)}Es(t){const e=new qr(new Vr([])),n=new $u(e,t),s=new $u(e,t+1);let i=Ha();return this.ws.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new $u(t,0),n=this.fs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class $u{constructor(t,e){this.key=t,this.As=e}static ds(t,e){return qr.comparator(t.key,e.key)||Lr(t.As,e.As)}static _s(t,e){return Lr(t.As,e.As)||qr.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.vs=1,this.Rs=new lo($u.ds)}checkEmpty(t){return Yr.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Ac(i,e,n,s);this.mutationQueue.push(r);for(const e of s)this.Rs=this.Rs.add(new $u(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Yr.resolve(r)}lookupMutationBatch(t,e){return Yr.resolve(this.Ps(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.bs(n),i=s<0?0:s;return Yr.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Yr.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(t){return Yr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new $u(e,0),s=new $u(e,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,s],(t=>{const e=this.Ps(t.As);i.push(e)})),Yr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new lo(Lr);return e.forEach((t=>{const e=new $u(t,0),s=new $u(t,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([e,s],(t=>{n=n.add(t.As)}))})),Yr.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;qr.isDocumentKey(i)||(i=i.child(""));const r=new $u(new qr(i),0);let o=new lo(Lr);return this.Rs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.As)),!0)}),r),Yr.resolve(this.Vs(o))}Vs(t){const e=[];return t.forEach((t=>{const n=this.Ps(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){vr(0===this.Ss(e.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Yr.forEach(e.mutations,(s=>{const i=new $u(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Rs=n}))}Cn(t){}containsKey(t,e){const n=new $u(e,0),s=this.Rs.firstAfterOrEqual(n);return Yr.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,Yr.resolve()}Ss(t,e){return this.bs(t)}bs(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Ps(t){const e=this.bs(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t){this.Ds=t,this.docs=new co(qr.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.Ds(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Yr.resolve(n?n.document.mutableCopy():zo.newInvalidDocument(e))}getEntries(t,e){let n=Va();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():zo.newInvalidDocument(t))})),Yr.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Va();const r=e.path,o=new qr(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||Gr(zr(o),n)<=0||(s.has(o.key)||xa(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Yr.resolve(i)}getAllFromCollectionGroup(t,e,n,s){yr()}Cs(t,e){return Yr.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Gu(this)}getSize(t){return Yr.resolve(this.size)}}class Gu extends Fu{constructor(t){super(),this.os=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.os.addEntry(t,s)):this.os.removeEntry(n)})),Yr.waitFor(e)}getFromCache(t,e){return this.os.getEntry(t,e)}getAllFromCache(t,e){return this.os.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t){this.persistence=t,this.xs=new Pa((t=>pa(t)),ma),this.lastRemoteSnapshotVersion=Pr.min(),this.highestTargetId=0,this.Ns=0,this.ks=new ju,this.targetCount=0,this.Ms=Pu.kn()}forEachTarget(t,e){return this.xs.forEach(((t,n)=>e(n))),Yr.resolve()}getLastRemoteSnapshotVersion(t){return Yr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Yr.resolve(this.Ns)}allocateTargetId(t){return this.highestTargetId=this.Ms.next(),Yr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ns&&(this.Ns=e),Yr.resolve()}Fn(t){this.xs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ms=new Pu(e),this.highestTargetId=e),t.sequenceNumber>this.Ns&&(this.Ns=t.sequenceNumber)}addTargetData(t,e){return this.Fn(e),this.targetCount+=1,Yr.resolve()}updateTargetData(t,e){return this.Fn(e),Yr.resolve()}removeTargetData(t,e){return this.xs.delete(e.target),this.ks.Is(e.targetId),this.targetCount-=1,Yr.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.xs.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.xs.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Yr.waitFor(i).next((()=>s))}getTargetCount(t){return Yr.resolve(this.targetCount)}getTargetData(t,e){const n=this.xs.get(e)||null;return Yr.resolve(n)}addMatchingKeys(t,e,n){return this.ks.gs(e,n),Yr.resolve()}removeMatchingKeys(t,e,n){this.ks.ps(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Yr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.ks.Is(e),Yr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.ks.Es(e);return Yr.resolve(n)}containsKey(t,e){return Yr.resolve(this.ks.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(t,e){this.$s={},this.overlays={},this.Os=new Jr(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=t(this),this.Bs=new Hu(this),this.indexManager=new Lu,this.remoteDocumentCache=function(t){return new Ku(t)}((t=>this.referenceDelegate.Ls(t))),this.serializer=new ku(e),this.qs=new Bu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new qu,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.$s[t.toKey()];return n||(n=new zu(e,this.referenceDelegate),this.$s[t.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(t,e,n){fr("MemoryPersistence","Starting transaction:",t);const s=new Wu(this.Os.next());return this.referenceDelegate.Us(),n(s).next((t=>this.referenceDelegate.Ks(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}Gs(t,e){return Yr.or(Object.values(this.$s).map((n=>()=>n.containsKey(t,e))))}}class Wu extends Qr{constructor(t){super(),this.currentSequenceNumber=t}}class Yu{constructor(t){this.persistence=t,this.Qs=new ju,this.js=null}static zs(t){return new Yu(t)}get Ws(){if(this.js)return this.js;throw yr()}addReference(t,e,n){return this.Qs.addReference(n,e),this.Ws.delete(n.toString()),Yr.resolve()}removeReference(t,e,n){return this.Qs.removeReference(n,e),this.Ws.add(n.toString()),Yr.resolve()}markPotentiallyOrphaned(t,e){return this.Ws.add(e.toString()),Yr.resolve()}removeTarget(t,e){this.Qs.Is(e.targetId).forEach((t=>this.Ws.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ws.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Us(){this.js=new Set}Ks(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Yr.forEach(this.Ws,(n=>{const s=qr.fromPath(n);return this.Hs(t,s).next((t=>{t||e.removeEntry(s,Pr.min())}))})).next((()=>(this.js=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hs(t,e).next((t=>{t?this.Ws.delete(e.toString()):this.Ws.add(e.toString())}))}Ls(t){return 0}Hs(t,e){return Yr.or([()=>Yr.resolve(this.Qs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gs(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xu{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Fi=n,this.Bi=s}static Li(t,e){let n=Ha(),s=Ha();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new Xu(t,e.fromCache,n,s)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this.qi=!1}initialize(t,e){this.Ui=t,this.indexManager=e,this.qi=!0}getDocumentsMatchingQuery(t,e,n,s){return this.Ki(t,e).next((i=>i||this.Gi(t,e,s,n))).next((n=>n||this.Qi(t,e)))}Ki(t,e){if(ba(e))return Yr.resolve(null);let n=_a(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=Da(e,null,"F"),n=_a(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const i=Ha(...s);return this.Ui.getDocuments(t,i).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.ji(e,s);return this.zi(e,r,i,n.readTime)?this.Ki(t,Da(e,null,"F")):this.Wi(t,r,e,n)}))))})))))}Gi(t,e,n,s){return ba(e)||s.isEqual(Pr.min())?this.Qi(t,e):this.Ui.getDocuments(t,n).next((i=>{const r=this.ji(e,i);return this.zi(e,r,n,s)?this.Qi(t,e):(dr()<=U.DEBUG&&fr("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ra(e)),this.Wi(t,r,e,$r(s,-1)))}))}ji(t,e){let n=new lo(Ma(t));return e.forEach(((e,s)=>{xa(t,s)&&(n=n.add(s))})),n}zi(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Qi(t,e){return dr()<=U.DEBUG&&fr("QueryEngine","Using full collection scan to execute query:",Ra(e)),this.Ui.getDocumentsMatchingQuery(t,e,Kr.min())}Wi(t,e,n,s){return this.Ui.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t,e,n,s){this.persistence=t,this.Hi=e,this.serializer=s,this.Ji=new co(Lr),this.Yi=new Pa((t=>pa(t)),ma),this.Xi=new Map,this.Zi=t.getRemoteDocumentCache(),this.Bs=t.getTargetCache(),this.qs=t.getBundleCache(),this.tr(n)}tr(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Uu(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ji)))}}function th(t,e,n,s){return new Zu(t,e,n,s)}async function eh(t,e){const n=wr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((i=>(s=i,n.tr(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=Ha();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({er:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function nh(t){const e=wr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Bs.getLastRemoteSnapshotVersion(t)))}function sh(t,e,n){let s=Ha(),i=Ha();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=Va();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(Pr.min())?(e.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),s=s.insert(n,r)):fr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{nr:s,sr:i}}))}function ih(t,e){const n=wr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function rh(t,e){const n=wr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Bs.getTargetData(t,e).next((i=>i?(s=i,Yr.resolve(s)):n.Bs.allocateTargetId(t).next((i=>(s=new Nu(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.Bs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Ji.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(t.targetId,t),n.Yi.set(e,t.targetId)),t}))}async function oh(t,e,n){const s=wr(t),i=s.Ji.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Xr(t))throw t;fr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(i.target)}function ah(t,e,n){const s=wr(t);let i=Pr.min(),r=Ha();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=wr(t),i=s.Yi.get(n);return void 0!==i?Yr.resolve(s.Ji.get(i)):s.Bs.getTargetData(e,n)}(s,t,_a(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.Hi.getDocumentsMatchingQuery(t,e,n?i:Pr.min(),n?r:Ha()))).next((t=>(ch(s,La(e),t),{documents:t,ir:r})))))}function ch(t,e,n){let s=t.Xi.get(e)||Pr.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Xi.set(e,s)}class uh{constructor(){this.activeTargetIds=Wa()}lr(t){this.activeTargetIds=this.activeTargetIds.add(t)}dr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class hh{constructor(){this.Hr=new uh,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hr.lr(t),this.Jr[t]||"not-current"}updateQueryState(t,e,n){this.Jr[t]=e}removeLocalQueryTarget(t){this.Hr.dr(t)}isLocalQueryTarget(t){return this.Hr.activeTargetIds.has(t)}clearQueryState(t){delete this.Jr[t]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(t){return this.Hr.activeTargetIds.has(t)}start(){return this.Hr=new uh,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{Yr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(t){this.so.push(t)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){fr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.so)t(0)}no(){fr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.so)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh=null;function gh(){return null===fh?fh=268435456+Math.round(2147483648*Math.random()):fh++,"0x"+fh.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const ph={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t){this.ro=t.ro,this.oo=t.oo}uo(t){this.co=t}ao(t){this.ho=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.ro(t)}fo(){this.co()}wo(t){this.ho(t)}_o(t){this.lo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="WebChannelConnection";class vh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.mo=e+"://"+t.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(t,e,n,s,i){const r=gh(),o=this.To(t,e);fr("RestConnection",`Sending RPC '${t}' ${r}:`,o,n);const a={};return this.Eo(a,s,i),this.Ao(t,o,a,n).then((e=>(fr("RestConnection",`Received RPC '${t}' ${r}: `,e),e)),(e=>{throw pr("RestConnection",`RPC '${t}' ${r} failed with error: `,e,"url: ",o,"request:",n),e}))}vo(t,e,n,s,i,r){return this.Io(t,e,n,s,i)}Eo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+hr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}To(t,e){const n=ph[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ao(t,e,n,s){const i=gh();return new Promise(((r,o)=>{const a=new rr;a.setWithCredentials(!0),a.listenOnce(tr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Zi.NO_ERROR:const e=a.getResponseJson();fr(yh,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),r(e);break;case Zi.TIMEOUT:fr(yh,`RPC '${t}' ${i} timed out`),o(new br(Er.DEADLINE_EXCEEDED,"Request time out"));break;case Zi.HTTP_ERROR:const n=a.getStatus();if(fr(yh,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Er).indexOf(e)>=0?e:Er.UNKNOWN}(e.status);o(new br(t,e.message))}else o(new br(Er.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new br(Er.UNAVAILABLE,"Connection failed."));break;default:yr()}}finally{fr(yh,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(s);fr(yh,`RPC '${t}' ${i} sending request:`,s),a.send(e,"POST",c,n,15)}))}Ro(t,e,n){const s=gh(),i=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Xi(),o=Ji(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new sr({})),this.Eo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");fr(yh,`Creating RPC '${t}' stream ${s}: ${u}`,a);const h=r.createWebChannel(u,a);let l=!1,d=!1;const f=new mh({ro:e=>{d?fr(yh,`Not sending because RPC '${t}' stream ${s} is closed:`,e):(l||(fr(yh,`Opening RPC '${t}' stream ${s} transport.`),h.open(),l=!0),fr(yh,`RPC '${t}' stream ${s} sending:`,e),h.send(e))},oo:()=>h.close()}),g=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return g(h,ir.EventType.OPEN,(()=>{d||fr(yh,`RPC '${t}' stream ${s} transport opened.`)})),g(h,ir.EventType.CLOSE,(()=>{d||(d=!0,fr(yh,`RPC '${t}' stream ${s} transport closed`),f.wo())})),g(h,ir.EventType.ERROR,(e=>{d||(d=!0,pr(yh,`RPC '${t}' stream ${s} transport errored:`,e),f.wo(new br(Er.UNAVAILABLE,"The operation could not be completed")))})),g(h,ir.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];vr(!!i);const r=i,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){fr(yh,`RPC '${t}' stream ${s} received error:`,o);const e=o.status;let n=function(t){const e=Rc[t];if(void 0!==e)return Mc(e)}(e),i=o.message;void 0===n&&(n=Er.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),d=!0,f.wo(new br(n,i)),h.close()}else fr(yh,`RPC '${t}' stream ${s} received:`,i),f._o(i)}})),g(o,er.STAT_EVENT,(e=>{e.stat===nr.PROXY?fr(yh,`RPC '${t}' stream ${s} detected buffering proxy`):e.stat===nr.NOPROXY&&fr(yh,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t){return new eu(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t,e,n=1e3,s=1.5,i=6e4){this.ii=t,this.timerId=e,this.Po=n,this.bo=s,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(t){this.cancel();const e=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),s=Math.max(0,e-n);s>0&&fr("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,(()=>(this.Co=Date.now(),t()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,e,n,s,i,r,o,a){this.ii=t,this.$o=n,this.Oo=s,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new bh(t,e)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(t){this.Ho(),this.stream.send(t)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(t,e){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==t?this.qo.reset():e&&e.code===Er.RESOURCE_EXHAUSTED?(gr(e.toString()),gr("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):e&&e.code===Er.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.ao(e)}Yo(){}auth(){this.state=1;const t=this.Xo(this.Fo),e=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Fo===e&&this.Zo(t,n)}),(e=>{t((()=>{const t=new br(Er.UNKNOWN,"Fetching auth token failed: "+e.message);return this.tu(t)}))}))}Zo(t,e){const n=this.Xo(this.Fo);this.stream=this.eu(t,e),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((t=>{n((()=>this.tu(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(t){return fr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget((()=>this.Fo===t?e():(fr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ih extends Th{constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.serializer=i}eu(t,e){return this.connection.Ro("Listen",t,e)}onMessage(t){this.qo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:yr()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(t,e){return t.useProto3Json?(vr(void 0===e||"string"==typeof e),mo.fromBase64String(e||"")):(vr(void 0===e||e instanceof Uint8Array),mo.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Er.UNKNOWN:Mc(t.code);return new br(e,t.message||"")}(o);n=new Hc(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=hu(t,s.document.name),r=ou(s.document.updateTime),o=s.document.createTime?ou(s.document.createTime):Pr.min(),a=new jo({mapValue:{fields:s.document.fields}}),c=zo.newFoundDocument(i,r,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Kc(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=hu(t,s.document),r=s.readTime?ou(s.readTime):Pr.min(),o=zo.newNoDocument(i,r),a=s.removedTargetIds||[];n=new Kc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=hu(t,s.document),r=s.removedTargetIds||[];n=new Kc([],r,i,null)}else{if(!("filter"in e))return yr();{e.filter;const t=e.filter;t.targetId;const{count:s=0,unchangedNames:i}=t,r=new kc(s,i),o=t.targetId;n=new Gc(o,r)}}return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return Pr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Pr.min():e.readTime?ou(e.readTime):Pr.min()}(t);return this.listener.nu(e,n)}su(t){const e={};e.database=fu(this.serializer),e.addTarget=function(t,e){let n;const s=e.target;if(n=ya(s)?{documents:yu(t,s)}:{query:vu(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=iu(t,e.resumeToken);const s=nu(t,e.expectedCount);null!==s&&(n.expectedCount=s)}else if(e.snapshotVersion.compareTo(Pr.min())>0){n.readTime=su(t,e.snapshotVersion.toTimestamp());const s=nu(t,e.expectedCount);null!==s&&(n.expectedCount=s)}return n}(this.serializer,t);const n=function(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return yr()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,t);n&&(e.labels=n),this.Wo(e)}iu(t){const e={};e.database=fu(this.serializer),e.removeTarget=t,this.Wo(e)}}class Sh extends Th{constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(t,e){return this.connection.Ro("Write",t,e)}onMessage(t){if(vr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.ru){this.qo.reset();const e=function(t,e){return t&&t.length>0?(vr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?ou(t.updateTime):ou(e);return n.isEqual(Pr.min())&&(n=ou(e)),new lc(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=ou(t.commitTime);return this.listener.cu(n,e)}return vr(!t.writeResults||0===t.writeResults.length),this.ru=!0,this.listener.au()}hu(){const t={};t.database=fu(this.serializer),this.Wo(t)}uu(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>mu(this.serializer,t)))};this.Wo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new br(Er.FAILED_PRECONDITION,"The client has already been terminated.")}Io(t,e,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.Io(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Er.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new br(Er.UNKNOWN,t.toString())}))}vo(t,e,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.vo(t,e,n,i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Er.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new br(Er.UNKNOWN,t.toString())}))}terminate(){this.lu=!0}}class _h{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(t){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.yu("Offline")))}set(t){this.Tu(),this.wu=0,"Online"===t&&(this.mu=!1),this.yu(t)}yu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}pu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(gr(e),this.mu=!1):fr("OnlineStateTracker",e)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((t=>{n.enqueueAndForget((async()=>{Ph(this)&&(fr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=wr(t);e.vu.add(4),await Nh(e),e.bu.set("Unknown"),e.vu.delete(4),await Dh(e)}(this))}))})),this.bu=new _h(n,s)}}async function Dh(t){if(Ph(t))for(const e of t.Ru)await e(!0)}async function Nh(t){for(const e of t.Ru)await e(!1)}function kh(t,e){const n=wr(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),Oh(n)?Mh(n):tl(n).Ko()&&xh(n,e))}function Rh(t,e){const n=wr(t),s=tl(n);n.Au.delete(e),s.Ko()&&Lh(n,e),0===n.Au.size&&(s.Ko()?s.jo():Ph(n)&&n.bu.set("Unknown"))}function xh(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Pr.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}tl(t).su(e)}function Lh(t,e){t.Vu.qt(e),tl(t).iu(e)}function Mh(t){t.Vu=new Wc({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),tl(t).start(),t.bu.gu()}function Oh(t){return Ph(t)&&!tl(t).Uo()&&t.Au.size>0}function Ph(t){return 0===wr(t).vu.size}function Fh(t){t.Vu=void 0}async function Vh(t){t.Au.forEach(((e,n)=>{xh(t,e)}))}async function Uh(t,e){Fh(t),Oh(t)?(t.bu.Iu(e),Mh(t)):t.bu.set("Unknown")}async function Bh(t,e,n){if(t.bu.set("Online"),e instanceof Hc&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.Au.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.Au.delete(s),t.Vu.removeTarget(s))}(t,e)}catch(n){fr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await qh(t,n)}else if(e instanceof Kc?t.Vu.Ht(e):e instanceof Gc?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(Pr.min()))try{const e=await nh(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Vu.ce(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Au.get(s);i&&t.Au.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const s=t.Au.get(e);if(!s)return;t.Au.set(e,s.withResumeToken(mo.EMPTY_BYTE_STRING,s.snapshotVersion)),Lh(t,e);const i=new Nu(s.target,e,n,s.sequenceNumber);xh(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){fr("RemoteStore","Failed to raise snapshot:",e),await qh(t,e)}}async function qh(t,e,n){if(!Xr(e))throw e;t.vu.add(1),await Nh(t),t.bu.set("Offline"),n||(n=()=>nh(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{fr("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Dh(t)}))}function jh(t,e){return e().catch((n=>qh(t,n,e)))}async function $h(t){const e=wr(t),n=el(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;zh(e);)try{const t=await ih(e.localStore,s);if(null===t){0===e.Eu.length&&n.jo();break}s=t.batchId,Kh(e,t)}catch(t){await qh(e,t)}Gh(e)&&Hh(e)}function zh(t){return Ph(t)&&t.Eu.length<10}function Kh(t,e){t.Eu.push(e);const n=el(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function Gh(t){return Ph(t)&&!el(t).Uo()&&t.Eu.length>0}function Hh(t){el(t).start()}async function Qh(t){el(t).hu()}async function Wh(t){const e=el(t);for(const n of t.Eu)e.uu(n.mutations)}async function Yh(t,e,n){const s=t.Eu.shift(),i=Dc.from(s,e,n);await jh(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await $h(t)}async function Xh(t,e){e&&el(t).ou&&await async function(t,e){if(Lc(n=e.code)&&n!==Er.ABORTED){const n=t.Eu.shift();el(t).Qo(),await jh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await $h(t)}var n}(t,e),Gh(t)&&Hh(t)}async function Jh(t,e){const n=wr(t);n.asyncQueue.verifyOperationInProgress(),fr("RemoteStore","RemoteStore received new credentials");const s=Ph(n);n.vu.add(3),await Nh(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Dh(n)}async function Zh(t,e){const n=wr(t);e?(n.vu.delete(2),await Dh(n)):e||(n.vu.add(2),await Nh(n),n.bu.set("Unknown"))}function tl(t){return t.Su||(t.Su=function(t,e,n){const s=wr(t);return s.fu(),new Ih(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{uo:Vh.bind(null,t),ao:Uh.bind(null,t),nu:Bh.bind(null,t)}),t.Ru.push((async e=>{e?(t.Su.Qo(),Oh(t)?Mh(t):t.bu.set("Unknown")):(await t.Su.stop(),Fh(t))}))),t.Su}function el(t){return t.Du||(t.Du=function(t,e,n){const s=wr(t);return s.fu(),new Sh(e,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(t.datastore,t.asyncQueue,{uo:Qh.bind(null,t),ao:Xh.bind(null,t),au:Wh.bind(null,t),cu:Yh.bind(null,t)}),t.Ru.push((async e=>{e?(t.Du.Qo(),await $h(t)):(await t.Du.stop(),t.Eu.length>0&&(fr("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))}))),t.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class nl{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new nl(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new br(Er.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sl(t,e){if(gr("AsyncQueue",`${e}: ${t}`),Xr(t))return new br(Er.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(t){this.comparator=t?(e,n)=>t(e,n)||qr.comparator(e.key,n.key):(t,e)=>qr.comparator(t.key,e.key),this.keyedMap=Ba(),this.sortedSet=new co(this.comparator)}static emptySet(t){return new il(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof il))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new il;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this.Cu=new co(qr.comparator)}track(t){const e=t.doc.key,n=this.Cu.get(e);n?0!==t.type&&3===n.type?this.Cu=this.Cu.insert(e,t):3===t.type&&1!==n.type?this.Cu=this.Cu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Cu=this.Cu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Cu=this.Cu.remove(e):1===t.type&&2===n.type?this.Cu=this.Cu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Cu=this.Cu.insert(e,{type:2,doc:t.doc}):yr():this.Cu=this.Cu.insert(e,t)}xu(){const t=[];return this.Cu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class ol{constructor(t,e,n,s,i,r,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,s,i){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new ol(t,e,il.emptySet(e),r,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Na(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.Nu=void 0,this.listeners=[]}}class cl{constructor(){this.queries=new Pa((t=>ka(t)),Na),this.onlineState="Unknown",this.ku=new Set}}async function ul(t,e){const n=wr(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new al),i)try{r.Nu=await n.onListen(s)}catch(t){const n=sl(t,`Initialization of query '${Ra(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.Mu(n.onlineState),r.Nu&&e.$u(r.Nu)&&fl(n)}async function hl(t,e){const n=wr(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function ll(t,e){const n=wr(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.$u(t)&&(s=!0);i.Nu=t}}s&&fl(n)}function dl(t,e,n){const s=wr(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function fl(t){t.ku.forEach((t=>{t.next()}))}class gl{constructor(t,e,n){this.query=t,this.Ou=e,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ol(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Fu?this.Lu(t)&&(this.Ou.next(t),e=!0):this.qu(t,this.onlineState)&&(this.Uu(t),e=!0),this.Bu=t,e}onError(t){this.Ou.error(t)}Mu(t){this.onlineState=t;let e=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,t)&&(this.Uu(this.Bu),e=!0),e}qu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Ku||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Lu(t){if(t.docChanges.length>0)return!0;const e=this.Bu&&this.Bu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Uu(t){t=ol.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Fu=!0,this.Ou.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pl{constructor(t){this.key=t}}class ml{constructor(t){this.key=t}}class yl{constructor(t,e){this.query=t,this.Yu=e,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Ha(),this.mutatedKeys=Ha(),this.tc=Ma(t),this.ec=new il(this.tc)}get nc(){return this.Yu}sc(t,e){const n=e?e.ic:new rl,s=e?e.ec:this.ec;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),h=xa(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.rc(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.tc(h,a)>0||c&&this.tc(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(r=r.add(h),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{ec:r,ic:n,zi:o,mutatedKeys:i}}rc(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.ec;this.ec=t.ec,this.mutatedKeys=t.mutatedKeys;const i=t.ic.xu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return yr()}};return n(t)-n(e)}(t.type,e.type)||this.tc(t.doc,e.doc))),this.oc(n);const r=e?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new ol(this.query,t.ec,s,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:r}:{cc:r}}Mu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ec:this.ec,ic:new rl,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(t){return!this.Yu.has(t)&&!!this.ec.has(t)&&!this.ec.get(t).hasLocalMutations}oc(t){t&&(t.addedDocuments.forEach((t=>this.Yu=this.Yu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Yu=this.Yu.delete(t))),this.current=t.current)}uc(){if(!this.current)return[];const t=this.Zu;this.Zu=Ha(),this.ec.forEach((t=>{this.ac(t.key)&&(this.Zu=this.Zu.add(t.key))}));const e=[];return t.forEach((t=>{this.Zu.has(t)||e.push(new ml(t))})),this.Zu.forEach((n=>{t.has(n)||e.push(new pl(n))})),e}hc(t){this.Yu=t.ir,this.Zu=Ha();const e=this.sc(t.documents);return this.applyChanges(e,!0)}lc(){return ol.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class vl{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class wl{constructor(t){this.key=t,this.fc=!1}}class El{constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.dc={},this.wc=new Pa((t=>ka(t)),Na),this._c=new Map,this.mc=new Set,this.gc=new co(qr.comparator),this.yc=new Map,this.Ic=new ju,this.Tc={},this.Ec=new Map,this.Ac=Pu.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function bl(t,e){const n=Ul(t);let s,i;const r=n.wc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const t=await rh(n.localStore,_a(e)),r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await Tl(n,e,s,"current"===r,t.resumeToken),n.isPrimaryClient&&kh(n.remoteStore,t)}return i}async function Tl(t,e,n,s,i){t.Rc=(e,n,s)=>async function(t,e,n,s){let i=e.view.sc(n);i.zi&&(i=await ah(t.localStore,e.query,!1).then((({documents:t})=>e.view.sc(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return Ll(t,e.targetId,o.cc),o.snapshot}(t,e,n,s);const r=await ah(t.localStore,e,!0),o=new yl(e,r.ir),a=o.sc(r.documents),c=zc.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);Ll(t,n,u.cc);const h=new vl(e,n,o);return t.wc.set(e,h),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function Il(t,e){const n=wr(t),s=n.wc.get(e),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter((t=>!Na(t,e)))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await oh(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Rh(n.remoteStore,s.targetId),Rl(n,s.targetId)})).catch(Wr)):(Rl(n,s.targetId),await oh(n.localStore,s.targetId,!0))}async function Sl(t,e){const n=wr(t);try{const t=await function(t,e){const n=wr(t),s=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];e.targetChanges.forEach(((r,a)=>{const c=i.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(t,r.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(mo.EMPTY_BYTE_STRING,Pr.min()).withLastLimboFreeSnapshotVersion(Pr.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,s)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,u,r)&&o.push(n.Bs.updateTargetData(t,u))}));let a=Va(),c=Ha();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(sh(t,r,e.documentUpdates).next((t=>{a=t.nr,c=t.sr}))),!s.isEqual(Pr.min())){const e=n.Bs.getLastRemoteSnapshotVersion(t).next((e=>n.Bs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Yr.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ji=i,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.yc.get(e);s&&(vr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.fc=!0:t.modifiedDocuments.size>0?vr(s.fc):t.removedDocuments.size>0&&(vr(s.fc),s.fc=!1))})),await Pl(n,t,e)}catch(t){await Wr(t)}}function Cl(t,e,n){const s=wr(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.wc.forEach(((n,s)=>{const i=s.view.Mu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=wr(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Mu(e)&&(s=!0)})),s&&fl(n)}(s.eventManager,e),t.length&&s.dc.nu(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function _l(t,e,n){const s=wr(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.yc.get(e),r=i&&i.key;if(r){let t=new co(qr.comparator);t=t.insert(r,zo.newNoDocument(r,Pr.min()));const n=Ha().add(r),i=new $c(Pr.min(),new Map,new co(Lr),t,n);await Sl(s,i),s.gc=s.gc.remove(r),s.yc.delete(e),Ol(s)}else await oh(s.localStore,e,!1).then((()=>Rl(s,e,n))).catch(Wr)}async function Al(t,e){const n=wr(t),s=e.batch.batchId;try{const t=await function(t,e){const n=wr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=Yr.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);vr(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Ha();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(n.localStore,e);kl(n,s,null),Nl(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Pl(n,t)}catch(t){await Wr(t)}}async function Dl(t,e,n){const s=wr(t);try{const t=await function(t,e){const n=wr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(vr(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);kl(s,e,n),Nl(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Pl(s,t)}catch(n){await Wr(n)}}function Nl(t,e){(t.Ec.get(e)||[]).forEach((t=>{t.resolve()})),t.Ec.delete(e)}function kl(t,e,n){const s=wr(t);let i=s.Tc[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.Tc[s.currentUser.toKey()]=i}}function Rl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t._c.get(e))t.wc.delete(s),n&&t.dc.Pc(s,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach((e=>{t.Ic.containsKey(e)||xl(t,e)}))}function xl(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);null!==n&&(Rh(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Ol(t))}function Ll(t,e,n){for(const s of n)s instanceof pl?(t.Ic.addReference(s.key,e),Ml(t,s)):s instanceof ml?(fr("SyncEngine","Document no longer in limbo: "+s.key),t.Ic.removeReference(s.key,e),t.Ic.containsKey(s.key)||xl(t,s.key)):yr()}function Ml(t,e){const n=e.key,s=n.path.canonicalString();t.gc.get(n)||t.mc.has(s)||(fr("SyncEngine","New document in limbo: "+n),t.mc.add(s),Ol(t))}function Ol(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new qr(Vr.fromString(e)),s=t.Ac.next();t.yc.set(s,new wl(n)),t.gc=t.gc.insert(n,s),kh(t.remoteStore,new Nu(_a(Ea(n.path)),s,"TargetPurposeLimboResolution",Jr.ct))}}async function Pl(t,e,n){const s=wr(t),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach(((t,a)=>{o.push(s.Rc(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Xu.Li(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.dc.nu(i),await async function(t,e){const n=wr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Yr.forEach(e,(e=>Yr.forEach(e.Fi,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Yr.forEach(e.Bi,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Xr(t))throw t;fr("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ji.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.Ji=n.Ji.insert(e,i)}}}(s.localStore,r))}async function Fl(t,e){const n=wr(t);if(!n.currentUser.isEqual(e)){fr("SyncEngine","User change. New user:",e.toKey());const t=await eh(n.localStore,e);n.currentUser=e,function(t,e){t.Ec.forEach((t=>{t.forEach((t=>{t.reject(new br(Er.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.Ec.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Pl(n,t.er)}}function Vl(t,e){const n=wr(t),s=n.yc.get(e);if(s&&s.fc)return Ha().add(s.key);{let t=Ha();const s=n._c.get(e);if(!s)return t;for(const e of s){const s=n.wc.get(e);t=t.unionWith(s.view.nc)}return t}}function Ul(t){const e=wr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_l.bind(null,e),e.dc.nu=ll.bind(null,e.eventManager),e.dc.Pc=dl.bind(null,e.eventManager),e}function Bl(t){const e=wr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Al.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Dl.bind(null,e),e}class ql{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Eh(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return th(this.persistence,new Ju,t.initialUser,this.serializer)}createPersistence(t){return new Qu(Yu.zs,this.serializer)}createSharedClientState(t){return new hh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Cl(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fl.bind(null,this.syncEngine),await Zh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new cl}createDatastore(t){const e=Eh(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new vh(s));var s;return function(t,e,n,s){return new Ch(t,e,n,s)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){var e,n,s,i,r;return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>Cl(this.syncEngine,t,0),r=dh.D()?new dh:new lh,new Ah(e,n,s,i,r)}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new El(t,e,n,s,i,r);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=wr(t);fr("RemoteStore","RemoteStore shutting down."),e.vu.add(5),await Nh(e),e.Pu.shutdown(),e.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $l{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Sc(this.observer.next,t)}error(t){this.observer.error?this.Sc(this.observer.error,t):gr("Uncaught Error in snapshot listener:",t.toString())}Dc(){this.muted=!0}Sc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zl{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=ur.UNAUTHENTICATED,this.clientId=xr.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{fr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(fr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new br(Er.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=sl(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Kl(t,e){t.asyncQueue.verifyOperationInProgress(),fr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await eh(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Gl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ql(t);fr("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>Jh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Jh(e.remoteStore,n))),t._onlineComponents=e}function Hl(t){return"FirebaseError"===t.name?t.code===Er.FAILED_PRECONDITION||t.code===Er.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function Ql(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){fr("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Hl(n))throw n;pr("Error using user provided cache. Falling back to memory cache: "+n),await Kl(t,new ql)}}else fr("FirestoreClient","Using default OfflineComponentProvider"),await Kl(t,new ql);return t._offlineComponents}async function Wl(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(fr("FirestoreClient","Using user provided OnlineComponentProvider"),await Gl(t,t._uninitializedComponentsProvider._online)):(fr("FirestoreClient","Using default OnlineComponentProvider"),await Gl(t,new jl))),t._onlineComponents}function Yl(t){return Wl(t).then((t=>t.syncEngine))}async function Xl(t){const e=await Wl(t),n=e.eventManager;return n.onListen=bl.bind(null,e.syncEngine),n.onUnlisten=Il.bind(null,e.syncEngine),n}function Jl(t,e,n={}){const s=new Tr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new $l({next:n=>{e.enqueueAndForget((()=>hl(t,o))),n.fromCache&&"server"===s.source?i.reject(new br(Er.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new gl(n,r,{includeMetadataChanges:!0,Ku:!0});return ul(t,o)}(await Xl(t),t.asyncQueue,e,n,s))),s.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zl(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const td=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t,e,n){if(!n)throw new br(Er.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nd(t){if(!qr.isDocumentKey(t))throw new br(Er.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sd(t){if(qr.isDocumentKey(t))throw new br(Er.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function id(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":yr()}function rd(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new br(Er.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=id(t);throw new br(Er.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class od{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new br(Er.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new br(Er.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,s){if(!0===e&&!0===s)throw new br(Er.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zl(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new br(Er.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new br(Er.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new br(Er.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){var e,n;return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(e=this.experimentalLongPollingOptions,n=t.experimentalLongPollingOptions,e.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ad{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new od({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new br(Er.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new br(Er.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new od(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Sr;switch(t.type){case"firstParty":return new Dr(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new br(Er.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=td.get(t);e&&(fr("ComponentProvider","Removing Datastore"),td.delete(t),e.terminate())}(this),Promise.resolve()}}function cd(t,e,n,s={}){var i;const r=(t=rd(t,ad))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&pr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=ur.MOCK_USER;else{e=_(s.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new br(Er.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ur(r)}t._authCredentials=new Cr(new Ir(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ld(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ud(this.firestore,t,this._key)}}class hd{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new hd(this.firestore,t,this._query)}}class ld extends hd{constructor(t,e,n){super(t,e,Ea(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ud(this.firestore,null,new qr(t))}withConverter(t){return new ld(this.firestore,t,this._path)}}function dd(t,e,...n){if(t=L(t),ed("collection","path",e),t instanceof ad){const s=Vr.fromString(e,...n);return sd(s),new ld(t,null,s)}{if(!(t instanceof ud||t instanceof ld))throw new br(Er.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Vr.fromString(e,...n));return sd(s),new ld(t.firestore,null,s)}}function fd(t,e,...n){if(t=L(t),1===arguments.length&&(e=xr.A()),ed("doc","path",e),t instanceof ad){const s=Vr.fromString(e,...n);return nd(s),new ud(t,null,new qr(s))}{if(!(t instanceof ud||t instanceof ld))throw new br(Er.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Vr.fromString(e,...n));return nd(s),new ud(t.firestore,t instanceof ld?t.converter:null,new qr(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gd{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new bh(this,"async_queue_retry"),this.Xc=()=>{const t=wh();t&&fr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const t=wh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Zc(),this.ta(t)}enterRestrictedMode(t){if(!this.jc){this.jc=!0,this.Jc=t||!1;const e=wh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xc)}}enqueue(t){if(this.Zc(),this.jc)return new Promise((()=>{}));const e=new Tr;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Qc.push(t),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(t){if(!Xr(t))throw t;fr("AsyncQueue","Operation failed with retryable error: "+t)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(t){const e=this.Gc.then((()=>(this.Hc=!0,t().catch((t=>{this.Wc=t,this.Hc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t);throw gr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Hc=!1,t))))));return this.Gc=e,e}enqueueAfterDelay(t,e,n){this.Zc(),this.Yc.indexOf(t)>-1&&(e=0);const s=nl.createAndSchedule(this,t,e,n,(t=>this.na(t)));return this.zc.push(s),s}Zc(){this.Wc&&yr()}verifyOperationInProgress(){}async sa(){let t;do{t=this.Gc,await t}while(t!==this.Gc)}ia(t){for(const e of this.zc)if(e.timerId===t)return!0;return!1}ra(t){return this.sa().then((()=>{this.zc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.zc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.sa()}))}oa(t){this.Yc.push(t)}na(t){const e=this.zc.indexOf(t);this.zc.splice(e,1)}}class pd extends ad{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new gd,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||yd(this),this._firestoreClient.terminate()}}function md(t){return t._firestoreClient||yd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yd(t){var e,n,s;const i=t._freezeSettings(),r=function(t,e,n,s){return new So(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Zl(s.experimentalLongPollingOptions),s.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new zl(t._authCredentials,t._appCheckCredentials,t._queue,r),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=i.cache)||void 0===s?void 0:s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vd{constructor(t){this._byteString=t}static fromBase64String(t){try{return new vd(mo.fromBase64String(t))}catch(t){throw new br(Er.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new vd(mo.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new br(Er.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Br(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ed{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new br(Er.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new br(Er.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Lr(this._lat,t._lat)||Lr(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=/^__.*__$/;class Id{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new bc(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ec(t,this.data,e,this.fieldTransforms)}}function Sd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw yr()}}class Cd{constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(t){return new Cd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.aa({path:n,la:!1});return s.fa(t),s}da(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.aa({path:n,la:!1});return s.ua(),s}wa(t){return this.aa({path:void 0,la:!0})}_a(t){return Fd(t,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}ua(){if(this.path)for(let t=0;t<this.path.length;t++)this.fa(this.path.get(t))}fa(t){if(0===t.length)throw this._a("Document fields must not be empty");if(Sd(this.ca)&&Td.test(t))throw this._a('Document fields cannot begin and end with "__"')}}class _d{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Eh(t)}ya(t,e,n,s=!1){return new Cd({ca:t,methodName:e,ga:n,path:Br.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ad(t){const e=t._freezeSettings(),n=Eh(t._databaseId);return new _d(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Dd(t,e,n,s,i,r={}){const o=t.ya(r.merge||r.mergeFields?2:0,e,n,i);Ld("Data must be an object, but it was:",o,s);const a=Rd(s,o);let c,u;if(r.merge)c=new go(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=Md(e,s,n);if(!o.contains(i))throw new br(Er.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Vd(t,i)||t.push(i)}c=new go(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Id(new jo(a),c,u)}function Nd(t,e,n,s=!1){return kd(n,t.ya(s?4:3,e))}function kd(t,e){if(xd(t=L(t)))return Ld("Unsupported field value:",e,t),Rd(t,e);if(t instanceof Ed)return function(t,e){if(!Sd(e.ca))throw e._a(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e._a(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&4!==e.ca)throw e._a("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=kd(i,e.wa(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=L(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ja(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Or.fromDate(t);return{timestampValue:su(e.serializer,n)}}if(t instanceof Or){const n=new Or(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:su(e.serializer,n)}}if(t instanceof bd)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof vd)return{bytesValue:iu(e.serializer,t._byteString)};if(t instanceof ud){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:au(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e._a(`Unsupported field value: ${id(t)}`)}(t,e)}function Rd(t,e){const n={};return ao(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):oo(t,((t,s)=>{const i=kd(s,e.ha(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function xd(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Or||t instanceof bd||t instanceof vd||t instanceof ud||t instanceof Ed)}function Ld(t,e,n){if(!xd(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const s=id(n);throw"an object"===s?e._a(t+" a custom object"):e._a(t+" "+s)}}function Md(t,e,n){if((e=L(e))instanceof wd)return e._internalPath;if("string"==typeof e)return Pd(t,e);throw Fd("Field path arguments must be of type string or ",t,!1,void 0,n)}const Od=new RegExp("[~\\*/\\[\\]]");function Pd(t,e,n){if(e.search(Od)>=0)throw Fd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new wd(...e.split("."))._internalPath}catch(s){throw Fd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fd(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new br(Er.INVALID_ARGUMENT,a+t+c)}function Vd(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ud(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Bd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(qd("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Bd extends Ud{data(){return super.data()}}function qd(t,e){return"string"==typeof e?Pd(t,e):e instanceof wd?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new br(Er.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $d{}class zd extends $d{}function Kd(t,e,...n){let s=[];e instanceof $d&&s.push(e),s=s.concat(n),function(t){const e=t.filter((t=>t instanceof Qd)).length,n=t.filter((t=>t instanceof Gd)).length;if(e>1||e>0&&n>0)throw new br(Er.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const e of s)t=e._apply(t);return t}class Gd extends zd{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Gd(t,e,n)}_apply(t){const e=this._parse(t);return Xd(t._query,e),new hd(t.firestore,t.converter,Aa(t._query,e))}_parse(t){const e=Ad(t.firestore),n=function(t,e,n,s,i,r,o){let a;if(i.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new br(Er.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){Yd(o,r);const e=[];for(const n of o)e.push(Wd(s,t,n));a={arrayValue:{values:e}}}else a=Wd(s,t,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||Yd(o,r),a=Nd(n,"where",o,"in"===r||"not-in"===r);return Xo.create(i,r,a)}(t._query,0,e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function Hd(t,e,n){const s=e,i=qd("where",t);return Gd._create(i,s,n)}class Qd extends $d{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Qd(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:Jo.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const s=e.getFlattenedFilters();for(const t of s)Xd(n,t),n=Aa(n,t)}(t._query,e),new hd(t.firestore,t.converter,Aa(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function Wd(t,e,n){if("string"==typeof(n=L(n))){if(""===n)throw new br(Er.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sa(e)&&-1!==n.indexOf("/"))throw new br(Er.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(Vr.fromString(n));if(!qr.isDocumentKey(s))throw new br(Er.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Mo(t,new qr(s))}if(n instanceof ud)return Mo(t,n._key);throw new br(Er.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${id(n)}.`)}function Yd(t,e){if(!Array.isArray(t)||0===t.length)throw new br(Er.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xd(t,e){if(e.isInequality()){const n=Ia(t),s=e.field;if(null!==n&&!n.isEqual(s))throw new br(Er.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${s.toString()}'`);const i=Ta(t);null!==i&&Jd(t,s,i)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new br(Er.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new br(Er.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Jd(t,e,n){if(!n.isEqual(e))throw new br(Er.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Zd{convertValue(t,e="none"){switch(Ao(t)){case 0:return null;case 1:return t.booleanValue;case 2:return wo(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Eo(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw yr()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return oo(t,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new bd(wo(t.latitude),wo(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=To(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Io(t));default:return null}}convertTimestamp(t){const e=vo(t);return new Or(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Vr.fromString(t);vr(Du(n));const s=new Co(n.get(1),n.get(3)),i=new qr(n.popFirst(5));return s.isEqual(e)||gr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ef{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class nf extends Ud{constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new sf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(qd("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class sf extends nf{data(t={}){return super.data(t)}}class rf{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new ef(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new sf(this._firestore,this._userDataWriter,n.key,n,new ef(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new br(Er.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const s=new sf(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ef(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new sf(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ef(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:of(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function of(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return yr()}}class af extends Zd{constructor(t){super(),this.firestore=t}convertBytes(t){return new vd(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ud(this.firestore,null,e)}}function cf(t){t=rd(t,hd);const e=rd(t.firestore,pd),n=md(e),s=new af(e);return jd(t._query),Jl(n,t._query).then((n=>new rf(e,s,t,n)))}function uf(t,e){return function(t,e){const n=new Tr;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const s=Bl(t);try{const t=await function(t,e){const n=wr(t),s=Or.now(),i=e.reduce(((t,e)=>t.add(e.key)),Ha());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Va(),c=Ha();return n.Zi.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{r=i;const o=[];for(const t of e){const e=vc(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new bc(t.key,e,$o(e.value.mapValue),dc.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:qa(r)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.Tc[t.currentUser.toKey()];s||(s=new co(Lr)),s=s.insert(e,n),t.Tc[t.currentUser.toKey()]=s}(s,t.batchId,n),await Pl(s,t.changes),await $h(s.remoteStore)}catch(t){const e=sl(t,"Failed to persist write");n.reject(e)}}(await Yl(t),e,n))),n.promise}(md(t),e)}!function(t,e=!0){hr="9.22.0",wt(new M("firestore",((t,{instanceIdentifier:n,options:s})=>{const i=t.getProvider("app").getImmediate(),r=new pd(new _r(t.getProvider("auth-internal")),new kr(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new br(Er.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Co(t.options.projectId,e)}(i,n),i);return s=Object.assign({useFetchStreams:e},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),Ct(cr,"3.12.0",t),Ct(cr,"3.12.0","esm2017")}();const hf=function(t,e){const n="string"==typeof t?t:e||"(default)",s=Et("object"==typeof t?t:St(),"firestore").getImmediate({identifier:n});if(!s._initialized){const t=I("firestore");t&&cd(s,...t)}return s}(It({apiKey:"AIzaSyA0tY2Svlzr0j8F6Dv0WSXeIrsG6F_cY3I",authDomain:"agil-projektledning-grupp.firebaseapp.com",databaseURL:"https://agil-projektledning-grupp-default-rtdb.europe-west1.firebasedatabase.app",projectId:"agil-projektledning-grupp",storageBucket:"agil-projektledning-grupp.appspot.com",messagingSenderId:"926760801750",appId:"1:926760801750:web:e5f6e20c18babccafec077"}));(function(t,e,n){t=rd(t,ud);const s=rd(t.firestore,pd),i=tf(t.converter,e,n);return uf(s,[Dd(Ad(s),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,dc.none())])})(fd(hf,"companies","company13"),{name:"IoT Innovators",culture:"relaxed",size:"startup",workplace:"remote",industry:"IoT"}).then((()=>{console.log("Funkar, skickat!")})).catch((t=>{console.error("Gick inte, error!: ",t)})),async function(){const t=Kd(dd(hf,"companies"),Hd("workplace","==","remote"),Hd("size","==","startup"));(await cf(t)).forEach((t=>{console.log(t.id," => ",t.data())}))}();
//# sourceMappingURL=index.f91e19a1.js.map
