(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[function(t,e,n){"use strict";var r=n(4),i=n(5),s=n(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=133;function a(t,e){const{element:{content:n},parts:r}=t,i=document.createTreeWalker(n,o,null,!1);let s=u(r),a=r[s],c=-1,l=0;const d=[];let h=null;for(;i.nextNode();){c++;const t=i.currentNode;for(t.previousSibling===h&&(h=null),e.has(t)&&(d.push(t),null===h&&(h=t)),null!==h&&l++;void 0!==a&&a.index===c;)a.index=null!==h?-1:a.index-l,a=r[s=u(r,s)]}d.forEach(t=>t.parentNode.removeChild(t))}const c=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,o,null,!1);for(;n.nextNode();)e++;return e},u=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(Object(s.d)(e))return n}return-1};var l=n(9),d=n(7),h=n(10),p=n(6);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const f=(t,e)=>`${t}--${e}`;let m=!0;void 0===window.ShadyCSS?m=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),m=!1);const y=["html","svg"],b=new Set,v=(t,e,n)=>{b.add(n);const r=t.querySelectorAll("style");if(0===r.length)return void window.ShadyCSS.prepareTemplateStyles(e.element,n);const i=document.createElement("style");for(let t=0;t<r.length;t++){const e=r[t];e.parentNode.removeChild(e),i.textContent+=e.textContent}if((t=>{y.forEach(e=>{const n=d.a.get(f(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),a(t,n)})})})(n),function(t,e,n=null){const{element:{content:r},parts:i}=t;if(null===n||void 0===n)return void r.appendChild(e);const s=document.createTreeWalker(r,o,null,!1);let a=u(i),l=0,d=-1;for(;s.nextNode();)for(d++,s.currentNode===n&&(l=c(e),n.parentNode.insertBefore(e,n));-1!==a&&i[a].index===d;){if(l>0){for(;-1!==a;)i[a].index+=l,a=u(i,a);return}a=u(i,a)}}(e,i,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,n),window.ShadyCSS.nativeShadow){const n=e.element.content.querySelector("style");t.insertBefore(n.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(i,e.element.content.firstChild);const t=new Set;t.add(i),a(e,t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
window.JSCompiler_renameProperty=((t,e)=>t);const g={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},w=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:w},S=Promise.resolve(!0),O=1,x=4,P=8,E=16,j=32;class C extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=S,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const r=this._attributeNameForProperty(n,e);void 0!==r&&(this._attributeToPropertyMap.set(r,n),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=_){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(e){const r=this[t];this[n]=e,this.requestUpdate(t,r)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const t=Object.getPrototypeOf(this);if("function"==typeof t.finalize&&t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=w){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,r=e.converter||g,i="function"==typeof r?r:r.fromAttribute;return i?i(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,r=e.converter;return(r&&r.toAttribute||g.toAttribute)(t,n)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|j,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=_){const r=this.constructor,i=r._attributeNameForProperty(t,n);if(void 0!==i){const t=r._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=this._updateState|P,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=this._updateState&~P}}_attributeToProperty(t,e){if(this._updateState&P)return;const n=this.constructor,r=n._attributeToPropertyMap.get(t);if(void 0!==r){const t=n._classProperties.get(r)||_;this._updateState=this._updateState|E,this[r]=n._propertyValueFromAttribute(e,t),this._updateState=this._updateState&~E}}requestUpdate(t,e){let n=!0;if(void 0!==t&&!this._changedProperties.has(t)){const r=this.constructor,i=r._classProperties.get(t)||_;r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.set(t,e),!0!==i.reflect||this._updateState&E||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}return!this._hasRequestedUpdate&&n&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let t;this._updateState=this._updateState|x;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);const n=this.performUpdate();null!=n&&"function"==typeof n.then&&await n,t(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&j}get _hasRequestedUpdate(){return this._updateState&x}get hasUpdated(){return this._updateState&O}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&O||(this._updateState=this._updateState|O,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~x}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}C.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const N=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),T=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}}:Object.assign({},e,{finisher(n){n.createProperty(e.key,t)}}),A=(t,e,n)=>{e.constructor.createProperty(n,t)};function k(t){return(e,n)=>void 0!==n?A(t,e,n):T(t,e)}I((t,e)=>t.querySelector(e)),I((t,e)=>t.querySelectorAll(e));const R=(t,e,n)=>{Object.defineProperty(e,n,t)},V=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t});function I(t){return e=>(n,r)=>{const i={get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0};return void 0!==r?R(i,n,r):V(i,n)}}const U="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();n.d(e,"a",function(){return L}),n.d(e,"b",function(){return N}),n.d(e,"d",function(){return k}),n.d(e,"c",function(){return r.d}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const M=t=>t.flat?t.flat(1/0):function t(e,n=[]){for(let r=0,i=e.length;r<i;r++){const i=e[r];Array.isArray(i)?t(i,n):n.push(i)}return n}(t);class L extends C{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){M(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?U?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof r.b&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}L.finalized=!0,L.render=((t,e,n)=>{const r=n.scopeName,o=l.a.has(e),a=e instanceof ShadowRoot&&m&&t instanceof p.b,c=a&&!b.has(r),u=c?document.createDocumentFragment():e;if(Object(l.b)(t,u,Object.assign({templateFactory:(t=>e=>{const n=f(e.type,t);let r=d.a.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},d.a.set(n,r));let i=r.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(s.f);if(void 0===(i=r.keyString.get(o))){const n=e.getTemplateElement();m&&window.ShadyCSS.prepareTemplateDom(n,t),i=new s.a(e,n),r.keyString.set(o,i)}return r.stringsArray.set(e.strings,i),i})(r)},n)),c){const t=l.a.get(u);l.a.delete(u),t.value instanceof h.a&&v(u,t.value.template,r),Object(i.b)(e,e.firstChild),e.appendChild(u),l.a.set(e,t)}!o&&a&&window.ShadyCSS.styleElement(e.host)})},function(t,e,n){"use strict";n.d(e,"f",function(){return r}),n.d(e,"g",function(){return i}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return a}),n.d(e,"d",function(){return c}),n.d(e,"c",function(){return u}),n.d(e,"e",function(){return l});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${r}--\x3e`,s=new RegExp(`${r}|${i}`),o="$lit$";class a{constructor(t,e){this.parts=[],this.element=e;let n=-1,i=0;const a=[],c=e=>{const d=e.content,h=document.createTreeWalker(d,133,null,!1);let p=0;for(;h.nextNode();){n++;const e=h.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const a=e.attributes;let c=0;for(let t=0;t<a.length;t++)a[t].value.indexOf(r)>=0&&c++;for(;c-- >0;){const r=t.strings[i],a=l.exec(r)[2],c=a.toLowerCase()+o,u=e.getAttribute(c).split(s);this.parts.push({type:"attribute",index:n,name:a,strings:u}),e.removeAttribute(c),i+=u.length-1}}"TEMPLATE"===e.tagName&&c(e)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(r)>=0){const r=e.parentNode,o=t.split(s),c=o.length-1;for(let t=0;t<c;t++)r.insertBefore(""===o[t]?u():document.createTextNode(o[t]),e),this.parts.push({type:"node",index:++n});""===o[c]?(r.insertBefore(u(),e),a.push(e)):e.data=o[c],i+=c}}else if(8===e.nodeType)if(e.data===r){const t=e.parentNode;null!==e.previousSibling&&n!==p||(n++,t.insertBefore(u(),e)),p=n,this.parts.push({type:"node",index:n}),null===e.nextSibling?e.data="":(a.push(e),n--),i++}else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)this.parts.push({type:"node",index:-1})}}};c(e);for(const t of a)t.parentNode.removeChild(t)}}const c=t=>-1!==t.index,u=()=>document.createComment(""),l=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(t,e,n){"use strict";n.d(e,"f",function(){return u}),n.d(e,"a",function(){return l}),n.d(e,"d",function(){return h}),n.d(e,"b",function(){return p}),n.d(e,"e",function(){return f}),n.d(e,"c",function(){return b});var r=n(8),i=n(5),s=n(3),o=n(10),a=n(6),c=n(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const u=t=>null===t||!("object"==typeof t||"function"==typeof t);class l{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new d(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let r=0;r<e;r++){n+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)n+="string"==typeof e?e:String(e);else n+="string"==typeof t?t:String(t)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class d{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===s.a||u(t)&&t===this.value||(this.value=t,Object(r.b)(t)||(this.committer.dirty=!0))}commit(){for(;Object(r.b)(this.value);){const t=this.value;this.value=s.a,t(this)}this.value!==s.a&&this.committer.commit()}}class h{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(Object(c.c)()),this.endNode=t.appendChild(Object(c.c)())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=Object(c.c)()),t._insert(this.endNode=Object(c.c)())}insertAfterPart(t){t._insert(this.startNode=Object(c.c)()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;Object(r.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=s.a,t(this)}const t=this._pendingValue;t!==s.a&&(u(t)?t!==this.value&&this._commitText(t):t instanceof a.b?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):t===s.b?(this.value=s.b,this.clear()):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&3===e.nodeType?e.data=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof o.a&&this.value.template===e)this.value.update(t.values);else{const n=new o.a(e,t.processor,this.options),r=n._clone();n.update(t.values),this._commitNode(r),this.value=n}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,r=0;for(const i of t)void 0===(n=e[r])&&(n=new h(this.options),e.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(e[r-1])),n.setValue(i),n.commit(),r++;r<e.length&&(e.length=r,this.clear(n&&n.endNode))}clear(t=this.startNode){Object(i.b)(this.startNode.parentNode,t.nextSibling,this.endNode)}}class p{constructor(t,e,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this._pendingValue=t}commit(){for(;Object(r.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=s.a,t(this)}if(this._pendingValue===s.a)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=s.a}}class f extends l{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new m(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class m extends d{}let y=!1;try{const t={get capture(){return y=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class b{constructor(t,e,n){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this._boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this._pendingValue=t}commit(){for(;Object(r.b)(this._pendingValue);){const t=this._pendingValue;this._pendingValue=s.a,t(this)}if(this._pendingValue===s.a)return;const t=this._pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),i&&(this._options=v(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=s.a}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const v=t=>t&&(y?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i});
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r={},i={}},function(t,e,n){"use strict";var r=n(2);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const i=new class{handleAttributeExpressions(t,e,n,i){const s=e[0];return"."===s?new r.e(t,e.slice(1),n).parts:"@"===s?[new r.c(t,e.slice(1),i.eventContext)]:"?"===s?[new r.b(t,e.slice(1),n)]:new r.a(t,e,n).parts}handleTextExpression(t){return new r.d(t)}};var s=n(6),o=n(8);n(5),n(3),n(9),n(7),n(10),n(1);n.d(e,"d",function(){return a}),n.d(e,"c",function(){return o.a}),n.d(e,"a",function(){return r.d}),n.d(e,"b",function(){return s.b}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const a=(t,...e)=>new s.b(t,e,"html",i)},function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"b",function(){return s});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,n=null,r=null)=>{let i=e;for(;i!==n;){const e=i.nextSibling;t.insertBefore(i,r),i=e}},s=(t,e,n=null)=>{let r=e;for(;r!==n;){const e=r.nextSibling;t.removeChild(r),r=e}}},function(t,e,n){"use strict";n.d(e,"b",function(){return s}),n.d(e,"a",function(){return o});var r=n(5),i=n(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class s{constructor(t,e,n,r){this.strings=t,this.values=e,this.type=n,this.processor=r}getHTML(){const t=this.strings.length-1;let e="";for(let n=0;n<t;n++){const t=this.strings[n],r=i.e.exec(t);e+=r?t.substr(0,r.index)+r[1]+r[2]+i.b+r[3]+i.f:t+i.g}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class o extends s{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),Object(r.c)(e,n.firstChild),t}}},function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return s});var r=n(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function i(t){let e=s.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},s.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(r.f);return void 0===(n=e.keyString.get(i))&&(n=new r.a(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const s=new Map},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=new WeakMap,i=t=>(...e)=>{const n=t(...e);return r.set(n,!0),n},s=t=>"function"==typeof t&&r.has(t)},function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a});var r=n(5),i=n(2),s=n(7);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=new WeakMap,a=(t,e,n)=>{let a=o.get(e);void 0===a&&(Object(r.b)(e,e.firstChild),o.set(e,a=new i.d(Object.assign({templateFactory:s.b},n))),a.appendInto(e)),a.setValue(t),a.commit()}},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(5),i=n(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class s{constructor(t,e,n){this._parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this._parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this._parts)void 0!==t&&t.commit()}_clone(){const t=r.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let n=0,s=0;const o=t=>{const r=document.createTreeWalker(t,133,null,!1);let a=r.nextNode();for(;n<e.length&&null!==a;){const t=e[n];if(Object(i.d)(t))if(s===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(a,t.name,t.strings,this.options));n++}else s++,"TEMPLATE"===a.nodeName&&o(a.content),a=r.nextNode();else this._parts.push(void 0),n++}};return o(t),r.a&&(document.adoptNode(t),customElements.upgrade(t)),t}}},function(t,e,n){"use strict";n.d(e,"d",function(){return a}),n.d(e,"b",function(){return u}),n.d(e,"a",function(){return h}),n.d(e,"c",function(){return d});var r=n(14),i=function(){return Math.random().toString(36).substring(7).split("").join(".")},s={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function o(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function a(t,e,n){var i;if("function"==typeof e&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof e&&void 0===n&&(n=e,e=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(a)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var c=t,u=e,l=[],d=l,h=!1;function p(){d===l&&(d=l.slice())}function f(){if(h)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return u}function m(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(h)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var e=!0;return p(),d.push(t),function(){if(e){if(h)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");e=!1,p();var n=d.indexOf(t);d.splice(n,1)}}}function y(t){if(!o(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(h)throw new Error("Reducers may not dispatch actions.");try{h=!0,u=c(u,t)}finally{h=!1}for(var e=l=d,n=0;n<e.length;n++){(0,e[n])()}return t}return y({type:s.INIT}),(i={dispatch:y,subscribe:m,getState:f,replaceReducer:function(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");c=t,y({type:s.REPLACE})}})[r.a]=function(){var t,e=m;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new TypeError("Expected the observer to be an object.");function n(){t.next&&t.next(f())}return n(),{unsubscribe:e(n)}}})[r.a]=function(){return this},t},i}function c(t,e){var n=e&&e.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function u(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];0,"function"==typeof t[i]&&(n[i]=t[i])}var o,a=Object.keys(n);try{!function(t){Object.keys(t).forEach(function(e){var n=t[e];if(void 0===n(void 0,{type:s.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:s.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+s.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(t){o=t}return function(t,e){if(void 0===t&&(t={}),o)throw o;for(var r=!1,i={},s=0;s<a.length;s++){var u=a[s],l=n[u],d=t[u],h=l(d,e);if(void 0===h){var p=c(u,e);throw new Error(p)}i[u]=h,r=r||h!==d}return r?i:t}}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce(function(t,e){return function(){return t(e.apply(void 0,arguments))}})}function h(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(){var n=t.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},i={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},s=e.map(function(t){return t(i)});return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){l(t,e,n[e])})}return t}({},n,{dispatch:r=d.apply(void 0,s)(n.dispatch)})}}}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const r=t=>{return e=>(n,r)=>{let i={};const s=e(n,r);return Object.assign({},s,{addReducers(e){const n=Object.assign({},i,e);this.replaceReducer(t(i=n))}})}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(r),s=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(s).concat([i]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var s=this[i][0];"number"==typeof s&&(r[s]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e,n){"use strict";(function(t,r){var i,s=n(20);i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:r;var o=Object(s.a)(i);e.a=o}).call(this,n(26),n(27)(t))},,,,,function(t,e,n){"use strict";function r(t){return function(e){var n=e.dispatch,r=e.getState;return function(e){return function(i){return"function"==typeof i?i(n,r,t):e(i)}}}}var i=r();i.withExtraArgument=r,e.a=i},function(t,e,n){"use strict";function r(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";var r=n(0),i=n(2),s=n(4);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const o=new WeakMap,a=Object(s.c)(t=>e=>{if(!(e instanceof s.a))throw new Error("unsafeHTML can only be used in text bindings");const n=o.get(e);if(void 0!==n&&Object(i.f)(t)&&t===n.value&&e.value===n.fragment)return;const r=document.createElement("template");r.innerHTML=t;const a=document.importNode(r.content,!0);e.setValue(a),o.set(e,{value:t,fragment:a})}),c=t=>e=>(class extends e{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=t.subscribe(()=>this.stateChanged(t.getState())),this.stateChanged(t.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(t){}});n(12);
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const u=(t,e)=>{const{pattern:n,keys:r}=function(t){var e,n,r,i=[],s="",o=t.split("/");for(o[0]||o.shift();r=o.shift();)"*"===(e=r[0])?(i.push("wild"),s+="/(.*)"):":"===e?(n="?"===r[r.length-1],i.push(r.substring(1,n?r.length-1:r.length)),s+=n?"(?:/([^/]+?))?":"/([^/]+?)"):s+="/"+r;return i.length&&(s+="(?:/)?"),{keys:i,pattern:new RegExp("^"+s+"/?$","i")}}(t),i=e.replace(/\?.*/,""),s=n.exec(i),o=n.test(i);return{active:o,params:o?r.reduce((t,e,n)=>Object.assign({},t,{[e]:s&&s[n+1]||""}),{}):{}}},l=({router:{routes:t}},e)=>t&&e&&t[e]||{},d=(t,e)=>e?!!l(t,e).active:(({router:{routes:t}})=>Object.keys(t).reduce((e,n)=>e&&!t[n].active,!0))(t);var h=function(t,e,n,r){var i,s=arguments.length,o=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(o=(s<3?i(o):s>3?i(e,n,o):i(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o};let p,f=!1;var m=t=>{let e=class extends(c(t)(r.a)){constructor(){super(...arguments),this.active=!1,this.params={},this.isResolving=!1,this.scrollOpt={},this.scrollDisable=!1}firstUpdated(){f||((t=>{document.body.addEventListener("click",e=>{if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;const n=e.composedPath().filter(t=>"A"===t.tagName)[0];if(!n||n.target||n.hasAttribute("download")||"external"===n.getAttribute("rel"))return;const r=n.href;if(!r||-1!==r.indexOf("mailto:"))return;const i=window.location,s=i.origin||i.protocol+"//"+i.host;0===r.indexOf(s)&&(e.preventDefault(),r!==i.href&&(window.history.pushState({},"",r),t(i,e)))}),window.addEventListener("popstate",e=>t(window.location,e)),t(window.location,null)})(({pathname:e,search:n,hash:r})=>{const i=window.decodeURIComponent(e+n+r);return t.dispatch((t=>({type:"SET_ACTIVE_ROUTE",path:t}))(i))}),f=!0),this.path&&t.dispatch((t=>({type:"ADD_ROUTE",path:t}))(this.path))}stateChanged(t){this.active=d(t,this.path),this.params=((t,e)=>l(t,e).params||{})(t,this.path),this.active&&this.resolve&&(this.isResolving=!0,this.resolve().then(()=>{this.isResolving=!1}).catch(()=>{this.isResolving=!1})),this.active&&!this.scrollDisable&&this.scrollOpt&&(0!==Object.keys(this.scrollOpt).length?this.scrollIntoView(Object.assign({},this.scrollOpt)):window.scrollTo(0,0))}getTemplate(t,e){const n=t.replace(/[^A-Za-z-]/,"");let i="";return e&&(i=Object.keys(e).map(t=>` ${t}="${this.params[t]}"`).join("")),r["c"]`${a(`<${n}${i}></${n}>`)}`}render(){return this.active?this.resolve&&this.isResolving?this.loading?this.getTemplate(this.loading):r["c"]``:this.component?this.getTemplate(this.component,this.params):r["c"]`<slot></slot>`:r["c"]``}};h([Object(r.d)({type:Boolean,reflect:!0})],e.prototype,"active",void 0),h([Object(r.d)({type:String})],e.prototype,"component",void 0),h([Object(r.d)({type:Object})],e.prototype,"params",void 0),h([Object(r.d)({type:String})],e.prototype,"path",void 0),h([Object(r.d)({type:Boolean})],e.prototype,"isResolving",void 0),h([Object(r.d)({type:Function})],e.prototype,"resolve",void 0),h([Object(r.d)({type:String})],e.prototype,"loading",void 0),h([Object(r.d)({type:Object})],e.prototype,"scrollOpt",void 0),h([Object(r.d)({type:Boolean})],e.prototype,"scrollDisable",void 0),e=h([Object(r.b)("lit-route")],e),p=e};const y={activeRoute:"/",routes:{}};var b=(t=y,{type:e="",path:n=""}={})=>{switch(e){case"NAVIGATE":case"SET_ACTIVE_ROUTE":return Object.assign({},t,{activeRoute:n,routes:Object.keys(t.routes).reduce((t,e)=>Object.assign({},t,{[e]:u(e,n)}),{})});case"ADD_ROUTE":return Object.assign({},t,{routes:Object.assign({},t.routes,{[n]:u(n,t.activeRoute)})});default:return t}};n.d(e,"a",function(){return v});const v=t=>{t.addReducers({router:b}),m(t)}},,,,,function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}}]]);