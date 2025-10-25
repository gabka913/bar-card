function t(t,e,i,n){var a,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(r=(o<3?a(r):o>3?a(e,i,r):a(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}function e(...t){const i=t=>t&&"object"==typeof t;return t.reduce(((t,n)=>(Object.keys(n).forEach((a=>{const o=t[a],r=n[a];Array.isArray(o)&&Array.isArray(r)?t[a]=o.concat(...r):i(o)&&i(r)?t[a]=e(o,r):t[a]=r})),t)),{})}function i(t,e){if("number"==typeof e)return e;if(void 0===t)return 0;if("string"==typeof e){const t=parseFloat(e);if(!isNaN(t))return t}if(t.states[e]){const i=parseFloat(t.states[e].state);return isNaN(i)?0:i}return 0}function n(t,e,i){if(e.has("config")||i)return!0;for(const i of t._configArray)if(i.entity){const n=e.get("hass");if(n){if(n.states[i.entity]!==t.hass.states[i.entity])return!0;continue}return!0}return!1}function a(t,e,i){const n=t[e],a=t.slice();return a.splice(e,1),a.splice(i,0,n),a}var o,r;function s(t){return t.substr(0,t.indexOf("."))}"function"==typeof SuppressedError&&SuppressedError,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(o||(o={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(r||(r={}));var c=["closed","locked","off"],l=function(t,e,i,n){n=n||{},i=null==i?{}:i;var a=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return a.detail=i,t.dispatchEvent(a),a},d={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function h(t,e){if(t in d)return d[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return e&&"off"===e?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===e?"mdi:window-closed":"mdi:window-open";case"lock":return e&&"unlocked"===e?"mdi:lock-open":"mdi:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"mdi:cast-connected":"mdi:cast";case"zwave":switch(e){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),"mdi:bookmark"}}var p=function(t){l(window,"haptic",t)},u=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var n,a=s(e),o="group"===a?"homeassistant":a;switch(a){case"lock":n=i?"unlock":"lock";break;case"cover":n=i?"open_cover":"close_cover";break;default:n=i?"turn_on":"turn_off"}return t.callService(o,n,{entity_id:e})}(t,e,c.includes(t.states[e].state))},g=function(t,e,i,n){if(n||(n={action:"more-info"}),!n.confirmation||n.confirmation.exemptions&&n.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(p("warning"),confirm(n.confirmation.text||"Are you sure you want to "+n.action+"?")))switch(n.action){case"more-info":(i.entity||i.camera_image)&&l(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":n.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),l(window,"location-changed",{replace:i})}(0,n.navigation_path);break;case"url":n.url_path&&window.open(n.url_path);break;case"toggle":i.entity&&(u(e,i.entity),p("success"));break;case"call-service":if(!n.service)return void p("failure");var a=n.service.split(".",2);e.callService(a[0],a[1],n.service_data,n.target),p("success");break;case"fire-dom-event":l(t,"ll-custom",n)}};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=globalThis,f=m.ShadowRoot&&(void 0===m.ShadyCSS||m.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,v=Symbol(),b=new WeakMap;let $=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==v)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(f&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=b.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&b.set(e,t))}return t}toString(){return this.cssText}};const _=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new $(i,t,v)},y=f?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new $("string"==typeof t?t:t+"",void 0,v))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:w,defineProperty:x,getOwnPropertyDescriptor:A,getOwnPropertyNames:E,getOwnPropertySymbols:S,getPrototypeOf:k}=Object,C=globalThis,O=C.trustedTypes,T=O?O.emptyScript:"",j=C.reactiveElementPolyfillSupport,N=(t,e)=>t,P={toAttribute(t,e){switch(e){case Boolean:t=t?T:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},M=(t,e)=>!w(t,e),I={attribute:!0,type:String,converter:P,reflect:!1,useDefault:!1,hasChanged:M};Symbol.metadata??=Symbol("metadata"),C.litPropertyMetadata??=new WeakMap;let U=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=I){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&x(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:a}=A(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const o=n?.call(this);a?.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??I}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;const t=k(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){const t=this.properties,e=[...E(t),...S(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(y(t))}else void 0!==t&&e.push(y(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(f)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),n=m.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:P).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:P;this._$Em=n,this[n]=a.fromAttribute(e,t.type)??this._$Ej?.get(n)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const n=this.constructor,a=this[t];if(i??=n.getPropertyOptions(t),!((i.hasChanged??M)(a,e)||i.useDefault&&i.reflect&&a===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:a},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==a||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}};U.elementStyles=[],U.shadowRootOptions={mode:"open"},U[N("elementProperties")]=new Map,U[N("finalized")]=new Map,j?.({ReactiveElement:U}),(C.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H=globalThis,z=H.trustedTypes,R=z?z.createPolicy("lit-html",{createHTML:t=>t}):void 0,D="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,V="?"+L,B=`<${V}>`,W=document,q=()=>W.createComment(""),F=t=>null===t||"object"!=typeof t&&"function"!=typeof t,J=Array.isArray,K="[ \t\n\f\r]",X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Y=/-->/g,Z=/>/g,G=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Q=/'/g,tt=/"/g,et=/^(?:script|style|textarea|title)$/i,it=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),nt=Symbol.for("lit-noChange"),at=Symbol.for("lit-nothing"),ot=new WeakMap,rt=W.createTreeWalker(W,129);function st(t,e){if(!J(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==R?R.createHTML(e):e}const ct=(t,e)=>{const i=t.length-1,n=[];let a,o=2===e?"<svg>":3===e?"<math>":"",r=X;for(let e=0;e<i;e++){const i=t[e];let s,c,l=-1,d=0;for(;d<i.length&&(r.lastIndex=d,c=r.exec(i),null!==c);)d=r.lastIndex,r===X?"!--"===c[1]?r=Y:void 0!==c[1]?r=Z:void 0!==c[2]?(et.test(c[2])&&(a=RegExp("</"+c[2],"g")),r=G):void 0!==c[3]&&(r=G):r===G?">"===c[0]?(r=a??X,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,s=c[1],r=void 0===c[3]?G:'"'===c[3]?tt:Q):r===tt||r===Q?r=G:r===Y||r===Z?r=X:(r=G,a=void 0);const h=r===G&&t[e+1].startsWith("/>")?" ":"";o+=r===X?i+B:l>=0?(n.push(s),i.slice(0,l)+D+i.slice(l)+L+h):i+L+(-2===l?e:h)}return[st(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class lt{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let a=0,o=0;const r=t.length-1,s=this.parts,[c,l]=ct(t,e);if(this.el=lt.createElement(c,i),rt.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=rt.nextNode())&&s.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(D)){const e=l[o++],i=n.getAttribute(t).split(L),r=/([.?@])?(.*)/.exec(e);s.push({type:1,index:a,name:r[2],strings:i,ctor:"."===r[1]?gt:"?"===r[1]?mt:"@"===r[1]?ft:ut}),n.removeAttribute(t)}else t.startsWith(L)&&(s.push({type:6,index:a}),n.removeAttribute(t));if(et.test(n.tagName)){const t=n.textContent.split(L),e=t.length-1;if(e>0){n.textContent=z?z.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],q()),rt.nextNode(),s.push({type:2,index:++a});n.append(t[e],q())}}}else if(8===n.nodeType)if(n.data===V)s.push({type:2,index:a});else{let t=-1;for(;-1!==(t=n.data.indexOf(L,t+1));)s.push({type:7,index:a}),t+=L.length-1}a++}}static createElement(t,e){const i=W.createElement("template");return i.innerHTML=t,i}}function dt(t,e,i=t,n){if(e===nt)return e;let a=void 0!==n?i._$Co?.[n]:i._$Cl;const o=F(e)?void 0:e._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(t),a._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=a:i._$Cl=a),void 0!==a&&(e=dt(t,a._$AS(t,e.values),a,n)),e}class ht{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??W).importNode(e,!0);rt.currentNode=n;let a=rt.nextNode(),o=0,r=0,s=i[0];for(;void 0!==s;){if(o===s.index){let e;2===s.type?e=new pt(a,a.nextSibling,this,t):1===s.type?e=new s.ctor(a,s.name,s.strings,this,t):6===s.type&&(e=new vt(a,this,t)),this._$AV.push(e),s=i[++r]}o!==s?.index&&(a=rt.nextNode(),o++)}return rt.currentNode=W,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class pt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=at,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=dt(this,t,e),F(t)?t===at||null==t||""===t?(this._$AH!==at&&this._$AR(),this._$AH=at):t!==this._$AH&&t!==nt&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>J(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==at&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(W.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=lt.createElement(st(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new ht(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=ot.get(t.strings);return void 0===e&&ot.set(t.strings,e=new lt(t)),e}k(t){J(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const a of t)n===e.length?e.push(i=new pt(this.O(q()),this.O(q()),this,this.options)):i=e[n],i._$AI(a),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class ut{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,a){this.type=1,this._$AH=at,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=at}_$AI(t,e=this,i,n){const a=this.strings;let o=!1;if(void 0===a)t=dt(this,t,e,0),o=!F(t)||t!==this._$AH&&t!==nt,o&&(this._$AH=t);else{const n=t;let r,s;for(t=a[0],r=0;r<a.length-1;r++)s=dt(this,n[i+r],e,r),s===nt&&(s=this._$AH[r]),o||=!F(s)||s!==this._$AH[r],s===at?t=at:t!==at&&(t+=(s??"")+a[r+1]),this._$AH[r]=s}o&&!n&&this.j(t)}j(t){t===at?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class gt extends ut{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===at?void 0:t}}class mt extends ut{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==at)}}class ft extends ut{constructor(t,e,i,n,a){super(t,e,i,n,a),this.type=5}_$AI(t,e=this){if((t=dt(this,t,e,0)??at)===nt)return;const i=this._$AH,n=t===at&&i!==at||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==at&&(i===at||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class vt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){dt(this,t)}}const bt=H.litHtmlPolyfillSupport;bt?.(lt,pt),(H.litHtmlVersions??=[]).push("3.3.0");const $t=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _t=class extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let a=n._$litPart$;if(void 0===a){const t=i?.renderBefore??null;n._$litPart$=a=new pt(e.insertBefore(q(),t),t,void 0,i??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return nt}};_t._$litElement$=!0,_t.finalized=!0,$t.litElementHydrateSupport?.({LitElement:_t});const yt=$t.litElementPolyfillSupport;yt?.({LitElement:_t}),($t.litElementVersions??=[]).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const wt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};let xt=class extends _t{hass;_config={entity_config:!1,animation:void 0,attribute:void 0,color:"",columns:0,complementary:!1,decimal:void 0,direction:"",entities:void 0,entity_row:!1,entity:"",height:"",icon:void 0,limit_value:!1,max:"",min:"",name:"",show_percent_value:!1,positions:{icon:"outside",indicator:"outside",name:"inside",min:"off",max:"off",value:"inside"},severity:void 0,stack:"",target:void 0,title:"",type:"",unit_of_measurement:"",width:""};_toggle;_configArray=[];_entityOptionsArray=[];_options;shouldUpdate(t){return n(this,t,!0)}setConfig(t){this._config={...t},t.entity||t.entities||(this._config.entity="none"),this._config.entity&&(this._configArray.push({entity:t.entity}),this._config.entities=[{entity:t.entity}]),this._configArray=function(t){const i=[];if(t.entities){for(const n of t.entities)if("string"==typeof n){const t=e({},{entity:n});i.push(t)}else if("object"==typeof n){const t=e({},n);i.push(t)}}else i.push(t);return i}(this._config),this._config.animation&&0===Object.entries(this._config.animation).length&&(delete this._config.animation,l(this,"config-changed",{config:this._config})),this._config.positions&&0===Object.entries(this._config.positions).length&&(this._config.positions={icon:"outside",indicator:"outside",name:"inside",min:"off",max:"off",value:"inside"},l(this,"config-changed",{config:this._config}));for(const t of this._configArray)t.animation&&0===Object.entries(t.animation).length&&delete t.animation,t.positions&&0===Object.entries(t.positions).length&&(t.positions=void 0);this._config.entities=this._configArray,l(this,"config-changed",{config:this._config});const i={icon:"format-list-numbered",name:"Bar",secondary:"Bar settings.",show:!1},n={icon:"numeric",name:"Value",secondary:"Value settings.",show:!1},a={icon:"card-bulleted",name:"Card",secondary:"Card settings.",show:!1},o={icon:"arrow-expand-horizontal",name:"Positions",secondary:"Set positions of card elements.",show:!1},r={icon:"exclamation-thick",name:"Severity",secondary:"Define bar colors based on value.",show:!1},s={icon:"animation",name:"Animation",secondary:"Define animation settings.",show:!1},c={show:!1,options:{positions:{...o},bar:{...i},value:{...n},severity:{...r},actions:{icon:"gesture-tap",name:"Actions",secondary:"Coming soon... Use code editor for Actions.",show:!1},animation:{...s}}};for(const{}of this._configArray)this._entityOptionsArray.push({...c});this._options||(this._options={entities:{icon:"tune",name:"Entities",secondary:"Manage card entities.",show:!0,options:{entities:this._entityOptionsArray}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the global name, icon, etc.",show:!1,options:{positions:o,bar:i,value:n,card:a,severity:r,animation:s}}})}render(){return it`
      ${this._createEntitiesElement()} ${this._createAppearanceElement()}
    `}_createActionsElement(t){const e=this._options?.entities.options.entities[t].options.actions;return it`
      <div class="sub-category" style="opacity: 0.5;">
        <div>
          <div class="row">
            <ha-icon .icon=${`mdi:${e.icon}`}></ha-icon>
            <div class="title">${e.name}</div>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
      </div>
    `}_createEntitiesValues(){if(!this.hass||!this._config)return[it``];const t=this._options.entities,e=[];for(const i of this._configArray){const n=this._configArray.indexOf(i);e.push(it`
        <div class="sub-category" style="display: flex; flex-direction: row; align-items: center;">
          <div style="display: flex; align-items: center; flex-direction: column;">
            <div
              style="font-size: 10px; margin-bottom: -8px; opacity: 0.5;"
              @click=${this._toggleThing}
              .options=${t.options.entities[n]}
              .optionsTarget=${t.options.entities}
              .index=${n}
            >
              options
            </div>
            <ha-icon
              icon="mdi:chevron-${t.options.entities[n].show?"up":"down"}"
              @click=${this._toggleThing}
              .options=${t.options.entities[n]}
              .optionsTarget=${t.options.entities}
              .index=${n}
            ></ha-icon>
          </div>
          <div class="value" style="flex-grow: 1;">
            <paper-input
              label="Entity"
              @value-changed=${this._valueChanged}
              .configAttribute=${"entity"}
              .configObject=${this._configArray[n]}
              .value=${i.entity}
            >
            </paper-input>
          </div>
          ${0!==n?it`
                <ha-icon
                  class="ha-icon-large"
                  icon="mdi:arrow-up"
                  @click=${this._moveEntity}
                  .configDirection=${"up"}
                  .configArray=${this._config.entities}
                  .arrayAttribute=${"entities"}
                  .arraySource=${this._config}
                  .index=${n}
                ></ha-icon>
              `:it`
                <ha-icon icon="mdi:arrow-up" style="opacity: 25%;" class="ha-icon-large"></ha-icon>
              `}
          ${n!==this._configArray.length-1?it`
                <ha-icon
                  class="ha-icon-large"
                  icon="mdi:arrow-down"
                  @click=${this._moveEntity}
                  .configDirection=${"down"}
                  .configArray=${this._config.entities}
                  .arrayAttribute=${"entities"}
                  .arraySource=${this._config}
                  .index=${n}
                ></ha-icon>
              `:it`
                <ha-icon icon="mdi:arrow-down" style="opacity: 25%;" class="ha-icon-large"></ha-icon>
              `}
          <ha-icon
            class="ha-icon-large"
            icon="mdi:close"
            @click=${this._removeEntity}
            .configAttribute=${"entity"}
            .configArray=${"entities"}
            .configIndex=${n}
          ></ha-icon>
        </div>
        ${t.options.entities[n].show?it`
              <div class="options">
                ${this._createBarElement(n)} ${this._createValueElement(n)}
                ${this._createPositionsElement(n)} ${this._createSeverityElement(n)}
                ${this._createAnimationElement(n)} ${this._createActionsElement(n)}
              </div>
            `:""}
      `)}return e}_createEntitiesElement(){if(!this.hass||!this._config)return it``;const t=this._options.entities;return it`
      <div class="card-config">
        <div class="option" @click=${this._toggleThing} .options=${t} .optionsTarget=${this._options}>
          <div class="row">
            <ha-icon .icon=${`mdi:${t.icon}`}></ha-icon>
            <div class="title">${t.name}</div>
            <ha-icon .icon=${t.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
        ${t.show?it`
              <div class="card-background" style="max-height: 400px; overflow: auto;">
                ${this._createEntitiesValues()}
                <div class="sub-category" style="display: flex; flex-direction: column; align-items: flex-end;">
                  <ha-fab
                    mini
                    icon="mdi:plus"
                    @click=${this._addEntity}
                    .configArray=${this._configArray}
                    .configAddValue=${"entity"}
                    .sourceArray=${this._config.entities}
                  ></ha-fab>
                </div>
              </div>
            `:""}
      </div>
    `}_createAppearanceElement(){if(!this.hass)return it``;const t=this._options.appearance;return it`
        <div class="option" @click=${this._toggleThing} .options=${t} .optionsTarget=${this._options}>
          <div class="row">
            <ha-icon .icon=${`mdi:${t.icon}`}></ha-icon>
            <div class="title">${t.name}</div>
            <ha-icon
              .icon=${t.show?"mdi:chevron-up":"mdi:chevron-down"}
              style="margin-left: auto;"
            ></ha-icon>
          </div>
          <div class="secondary">${t.secondary}</div>
        </div>
        ${t.show?it`
                <div class="card-background">
                  ${this._createCardElement()} ${this._createBarElement(null)} ${this._createValueElement(null)}
                  ${this._createPositionsElement(null)} ${this._createSeverityElement(null)}
                  ${this._createAnimationElement(null)}
                </div>
              `:""}
      </div>`}_createBarElement(t){let e,i;return null!==t?(e=this._options.entities.options.entities[t].options.bar,i=this._configArray[t]):(e=this._options.appearance.options.bar,i=this._config),it`
      <div class="category" id="bar">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${e}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${e.icon}`}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?it`
              <div class="value">
                <div>
                  <paper-dropdown-menu
                    label="Direction"
                    @selected-item-changed=${this._valueChanged}
                    .configObject=${i}
                    .configAttribute=${"direction"}
                    .ignoreNull=${!0}
                  >
                    <paper-listbox
                      slot="dropdown-content"
                      attr-for-selected="item-name"
                      selected="${i.direction?i.direction:null}"
                    >
                      <paper-item item-name="right">right</paper-item>
                      <paper-item item-name="up">up</paper-item>
                    </paper-listbox>
                  </paper-dropdown-menu>
                  ${i.direction?it`
                        <ha-icon
                          class="ha-icon-large"
                          icon="mdi:close"
                          @click=${this._valueChanged}
                          .value=${""}
                          .configAttribute=${"direction"}
                          .configObject=${i}
                        ></ha-icon>
                      `:""}
                </div>
                ${null!==t?it`
                      <paper-input
                        label="Name"
                        .value="${i.name?i.name:""}"
                        editable
                        .configAttribute=${"name"}
                        .configObject=${i}
                        @value-changed=${this._valueChanged}
                      ></paper-input>
                    `:""}
                <paper-input
                  label="Icon"
                  .value="${i.icon?i.icon:""}"
                  editable
                  .configAttribute=${"icon"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Height"
                  .value="${i.height?i.height:""}"
                  editable
                  .configAttribute=${"height"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Width"
                  .value="${i.width?i.width:""}"
                  editable
                  .configAttribute=${"width"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Color"
                  .value="${i.color?i.color:""}"
                  editable
                  .configAttribute=${"color"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
              </div>
            `:""}
      </div>
    `}_createAnimationElement(t){let e,i;return null!==t?(e=this._options.entities.options.entities[t].options.animation,i=this._configArray[t]):(e=this._options.appearance.options.animation,i=this._config),i.animation={...i.animation},it`
      <div class="category" id="bar">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${e}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${e.icon}`}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?i.animation?it`
                <div class="value">
                  <div>
                    <paper-dropdown-menu
                      label="State"
                      @selected-item-changed=${this._valueChanged}
                      .configAttribute=${"state"}
                      .configObject=${i.animation}
                      .index=${t}
                      .ignoreNull=${!0}
                    >
                      <paper-listbox
                        slot="dropdown-content"
                        attr-for-selected="item-name"
                        selected="${i.animation.state?i.animation.state:null}"
                      >
                        <paper-item item-name="on">on</paper-item>
                        <paper-item item-name="off">off</paper-item>
                      </paper-listbox>
                    </paper-dropdown-menu>
                    ${i.animation.state?it`
                          <ha-icon
                            class="ha-icon-large"
                            icon="mdi:close"
                            @click=${this._valueChanged}
                            .value=${""}
                            .configAttribute=${"state"}
                            .configObject=${i.animation}
                            .index=${t}
                          ></ha-icon>
                        `:""}
                  </div>
                  <paper-input
                    label="Speed"
                    .value="${i.animation.speed?i.animation.speed:""}"
                    editable
                    @value-changed=${this._valueChanged}
                    .configAttribute=${"speed"}
                    .configObject=${i.animation}
                    .index=${t}
                  ></paper-input>
                </div>
              `:it`
                <div class="value">
                  <div>
                    <paper-dropdown-menu
                      label="State"
                      @selected-item-changed=${this._valueChanged}
                      .configObject=${i}
                      .configAttribute=${"state"}
                      .configAdd=${"animation"}
                      .index=${t}
                      .ignoreNull=${!0}
                    >
                      <paper-listbox slot="dropdown-content" attr-for-selected="item-name">
                        <paper-item item-name="on">on</paper-item>
                        <paper-item item-name="off">off</paper-item>
                      </paper-listbox>
                    </paper-dropdown-menu>
                  </div>
                  <paper-input
                    label="Speed"
                    editable
                    .value=${""}
                    @value-changed=${this._valueChanged}
                    .configAttribute=${"speed"}
                    .configObject=${i}
                    .configAdd=${"animation"}
                    .index=${t}
                  ></paper-input>
                </div>
              `:""}
      </div>
    `}_createSeverityElement(t){let e,i;null!==t?(e=this._options.entities.options.entities[t].options.severity,i=this._configArray[t]):(e=this._options.appearance.options.severity,i=this._config);const n=i.severity?i.severity.length:0;return it`
      <div class="category" id="bar">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${e}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${e.icon}`}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?it`
              <div class="card-background" style="overflow: auto; max-height: 420px;">
                ${n>0?it`
                      ${this._createSeverityValues(t)}
                    `:""}
                <div class="sub-category" style="display: flex; flex-direction: column; align-items: flex-end;">
                  <ha-fab mini icon="mdi:plus" @click=${this._addSeverity} .index=${t}></ha-fab>
                </div>
              </div>
            `:""}
      </div>
    `}_createSeverityValues(t){let e;e=null===t?this._config:this._configArray[t];const i=[];for(const n of e.severity){const a=e.severity.indexOf(n);i.push(it`
        <div class="sub-category" style="display: flex; flex-direction: row; align-items: center;">
          <div class="value">
            <div style="display:flex;">
              <paper-input
                label="From"
                type="number"
                .value="${n.from||0===n.from?n.from:""}"
                editable
                .severityAttribute=${"from"}
                .index=${t}
                .severityIndex=${a}
                @value-changed=${this._updateSeverity}
              ></paper-input>
              <paper-input
                label="To"
                type="number"
                .value="${n.to?n.to:""}"
                editable
                .severityAttribute=${"to"}
                .index=${t}
                .severityIndex=${a}
                @value-changed=${this._updateSeverity}
              ></paper-input>
            </div>
            <div style="display:flex;">
              <paper-input
                label="Color"
                .value="${n.color?n.color:""}"
                editable
                .severityAttribute=${"color"}
                .index=${t}
                .severityIndex=${a}
                @value-changed=${this._updateSeverity}
              ></paper-input>
              <paper-input
                label="Icon"
                .value="${n.icon?n.icon:""}"
                editable
                .severityAttribute=${"icon"}
                .index=${t}
                .severityIndex=${a}
                @value-changed=${this._updateSeverity}
              ></paper-input>
            </div>
            ${n.hide?it`
                  <ha-switch
                    checked
                    .severityAttribute=${"hide"}
                    .index=${t}
                    .severityIndex=${a}
                    .value=${!n.hide}
                    @change=${this._updateSeverity}
                    >Hide</ha-switch
                  >
                `:it`
                  <ha-switch
                    unchecked
                    .severityAttribute=${"hide"}
                    .index=${t}
                    .severityIndex=${a}
                    .value=${!n.hide}
                    @change=${this._updateSeverity}
                    >Hide</ha-switch
                  >
                `}
          </div>
          <div style="display: flex;">
            ${0!==a?it`
                  <ha-icon
                    class="ha-icon-large"
                    icon="mdi:arrow-up"
                    @click=${this._moveSeverity}
                    .configDirection=${"up"}
                    .index=${t}
                    .severityIndex=${a}
                  ></ha-icon>
                `:it`
                  <ha-icon icon="mdi:arrow-up" style="opacity: 25%;" class="ha-icon-large"></ha-icon>
                `}
            ${a!==e.severity.length-1?it`
                  <ha-icon
                    class="ha-icon-large"
                    icon="mdi:arrow-down"
                    @click=${this._moveSeverity}
                    .configDirection=${"down"}
                    .index=${t}
                    .severityIndex=${a}
                  ></ha-icon>
                `:it`
                  <ha-icon icon="mdi:arrow-down" style="opacity: 25%;" class="ha-icon-large"></ha-icon>
                `}
            <ha-icon
              class="ha-icon-large"
              icon="mdi:close"
              @click=${this._removeSeverity}
              .index=${t}
              .severityIndex=${a}
            ></ha-icon>
          </div>
        </div>
      `)}return i}_createCardElement(){if(!this.hass)return it``;const t=this._config,e=this._options.appearance.options.card;return it`
      <div class="category" id="card">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${e}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${e.icon}`}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?it`
              <div class="value-container">
                <paper-input
                  editable
                  label="Header Title"
                  .value="${t.title?t.title:""}"
                  .configObject=${t}
                  .configAttribute=${"title"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Columns"
                  .value=${t.columns?t.columns:""}
                  .configObject=${t}
                  .configAttribute=${"columns"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <div>
                  ${t.entity_row?it`
                        <ha-switch
                          checked
                          .configAttribute=${"entity_row"}
                          .configObject=${t}
                          .value=${!t.entity_row}
                          @change=${this._valueChanged}
                          >Entity Row</ha-switch
                        >
                      `:it`
                        <ha-switch
                          unchecked
                          .configAttribute=${"entity_row"}
                          .configObject=${t}
                          .value=${!t.entity_row}
                          @change=${this._valueChanged}
                          >Entity Row</ha-switch
                        >
                      `}
                </div>
              </div>
            `:""}
      </div>
    `}_createPositionsValues(t){let e;e=null===t?this._config:this._configArray[t],e.positions={...e.positions};const i=[],n=Object.keys({icon:"outside",indicator:"outside",name:"inside",min:"off",max:"off",value:"inside"});for(const t of n){let n=e.positions[t];"min"===t&&!e.positions.min&&e.positions.minmax&&(n=e.positions.minmax),"max"===t&&!e.positions.max&&e.positions.minmax&&(n=e.positions.minmax),n?i.push(it`
          <div class="value">
            <paper-dropdown-menu
              label="${t}"
              @value-changed=${this._valueChanged}
              .configAttribute=${t}
              .configObject=${e.positions}
              .ignoreNull=${!0}
            >
              <paper-listbox
                slot="dropdown-content"
                attr-for-selected="item-name"
                .selected=${n}
              >
                <paper-item item-name="inside">inside</paper-item>
                <paper-item item-name="outside">outside</paper-item>
                <paper-item item-name="off">off</paper-item>
              </paper-listbox>
            </paper-dropdown-menu>
            <ha-icon
              class="ha-icon-large"
              icon="mdi:close"
              @click=${this._valueChanged}
              .value=${""}
              .configAttribute=${t}
              .configObject=${e.positions}
            ></ha-icon>
          </div>
        `):i.push(it`
          <div class="value">
            <paper-dropdown-menu
              label="${t}"
              @value-changed=${this._valueChanged}
              .configAttribute=${t}
              .configObject=${e.positions}
            >
              <paper-listbox slot="dropdown-content" .selected=${null}>
                <paper-item>inside</paper-item>
                <paper-item>outside</paper-item>
                <paper-item>off</paper-item>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
        `)}return i}_createPositionsElement(t){if(!this.hass)return it``;let e;return e=null===t?this._options.appearance.options.positions:this._options.entities.options.entities[t].options.positions,it`
      <div class="category">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${e}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${e.icon}`}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?it`
              ${this._createPositionsValues(t)}
            `:""}
      </div>
    `}_createValueElement(t){if(!this.hass)return it``;let e,i;return null!==t?(e=this._options.entities.options.entities[t].options.value,i=this._configArray[t]):(e=this._options.appearance.options.value,i=this._config),it`
      <div class="category" id="value">
        <div
          class="sub-category"
          @click=${this._toggleThing}
          .options=${e}
          .optionsTarget=${this._options.appearance.options}
        >
          <div class="row">
            <ha-icon .icon=${`mdi:${e.icon}`}></ha-icon>
            <div class="title">${e.name}</div>
            <ha-icon .icon=${e.show?"mdi:chevron-up":"mdi:chevron-down"} style="margin-left: auto;"></ha-icon>
          </div>
          <div class="secondary">${e.secondary}</div>
        </div>
        ${e.show?it`
              <div class="value">
                ${i.limit_value?it`
                      <ha-switch
                        checked
                        .configAttribute=${"limit_value"}
                        .configObject=${i}
                        .value=${!i.limit_value}
                        @change=${this._valueChanged}
                        >Limit Value</ha-switch
                      >
                    `:it`
                      <ha-switch
                        unchecked
                        .configObject=${i}
                        .configAttribute=${"limit_value"}
                        .value=${!i.limit_value}
                        @change=${this._valueChanged}
                        >Limit Value</ha-switch
                      >
                    `}
                ${i.complementary?it`
                      <ha-switch
                        checked
                        .configAttribute=${"complementary"}
                        .configObject=${i}
                        .value=${!i.complementary}
                        @change=${this._valueChanged}
                        >Complementary</ha-switch
                      >
                    `:it`
                      <ha-switch
                        unchecked
                        .configObject=${i}
                        .configAttribute=${"complementary"}
                        .value=${!i.complementary}
                        @change=${this._valueChanged}
                        >Complementary</ha-switch
                      >
                    `}
                <paper-input
                  class="value-number"
                  label="Decimal"
                  type="number"
                  .value="${i.decimal?i.decimal:""}"
                  editable
                  .configAttribute=${"decimal"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Min"
                  .value="${i.min?i.min:""}"
                  editable
                  .configAttribute=${"min"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Max"
                  .value="${i.max?i.max:""}"
                  editable
                  .configAttribute=${"max"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  class="value-number"
                  type="number"
                  label="Target"
                  .value="${i.target?i.target:""}"
                  editable
                  .configAttribute=${"target"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Unit of Measurement"
                  .value="${i.unit_of_measurement?i.unit_of_measurement:""}"
                  editable
                  .configAttribute=${"unit_of_measurement"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <paper-input
                  label="Attribute"
                  .value="${i.attribute?i.attribute:""}"
                  editable
                  .configAttribute=${"attribute"}
                  .configObject=${i}
                  @value-changed=${this._valueChanged}
                ></paper-input>
              </div>
            `:""}
      </div>
    `}_toggleThing(t){const e=t.target.options,i=!e.show;if(t.target.optionsTarget)if(Array.isArray(t.target.optionsTarget))for(const e of t.target.optionsTarget)e.show=!1;else for(const[e]of Object.entries(t.target.optionsTarget))t.target.optionsTarget[e].show=!1;e.show=i,this._toggle=!this._toggle}_addEntity(t){if(!this._config||!this.hass)return;const e=t.target;let i;i=e.configAddObject?e.configAddObject:{[e.configAddValue]:""};const n=e.configArray.slice();n.push(i),this._config.entities=n,l(this,"config-changed",{config:this._config})}_moveEntity(t){if(!this._config||!this.hass)return;const e=t.target;let i=e.configArray.slice();"up"==e.configDirection?i=a(i,e.index,e.index-1):"down"==e.configDirection&&(i=a(i,e.index,e.index+1)),this._config.entities=i,l(this,"config-changed",{config:this._config})}_removeEntity(t){if(!this._config||!this.hass)return;const e=t.target,i=[];let n=0;for(const t of this._configArray)e.configIndex!==n&&i.push(t),n++;const a={[e.configArray]:i};this._config=Object.assign(this._config,a),l(this,"config-changed",{config:this._config})}_addSeverity(t){if(!this._config||!this.hass)return;const e=t.target;let i;i=null===e.index?this._config.severity:this._config.entities[e.index].severity,i||(i=[]);const n=i.slice();n.push({from:"",to:"",color:""}),null===e.index?this._config.severity=n:this._configArray[e.index].severity=n,this._config.entities=this._configArray,l(this,"config-changed",{config:this._config})}_moveSeverity(t){if(!this._config||!this.hass)return;const e=t.target;let i;i=null===e.index?this._config.severity:this._config.entities[e.index].severity;let n=i.slice();"up"==e.configDirection?n=a(n,e.severityIndex,e.severityIndex-1):"down"==e.configDirection&&(n=a(n,e.severityIndex,e.severityIndex+1)),null===e.index?this._config.severity=n:this._configArray[e.index].severity=n,this._config.entities=this._configArray,l(this,"config-changed",{config:this._config})}_removeSeverity(t){if(!this._config||!this.hass)return;const e=t.target;let i;i=null===e.index?this._config.severity:this._configArray[e.index].severity;const n=i.slice(),a=[];let o=0;for(const{}of n)e.severityIndex!==o&&a.push(n[o]),o++;null===e.index?0===a.length?this._config.severity=void 0:this._config.severity=a:0===a.length?this._configArray[e.index].severity=void 0:this._configArray[e.index].severity=a,this._config.entities=this._configArray,l(this,"config-changed",{config:this._config})}_updateSeverity(t){const e=t.target;let i;i=null===e.index?this._config.severity:this._configArray[e.index].severity;const n=[];for(const t in i)if(e.severityIndex==t){const a={...i[t]},o={[e.severityAttribute]:e.value},r=Object.assign(a,o);""==e.value&&(r[e.severityAttribute]=void 0),n.push(r)}else n.push(i[t]);null===e.index?this._config.severity=n:this._configArray[e.index].severity=n,this._config.entities=this._configArray,l(this,"config-changed",{config:this._config})}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;if(e.configObject[e.configAttribute]!=e.value){if(e.configAdd&&""!==e.value&&(e.configObject=Object.assign(e.configObject,{[e.configAdd]:{[e.configAttribute]:e.value}})),e.configAttribute&&e.configObject&&!e.configAdd)if(""==e.value||!1===e.value){if(1==e.ignoreNull)return;e.configObject[e.configAttribute]=void 0}else console.log(e.configObject),e.configObject[e.configAttribute]=e.value;this._config.entities=this._configArray,l(this,"config-changed",{config:this._config})}}static get styles(){return _`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .options {
        background: var(--primary-background-color);
        border-radius: var(--ha-card-border-radius);
        cursor: pointer;
        padding: 8px;
      }
      .sub-category {
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
        margin-top: 14px;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .value {
        padding: 0px 8px;
      }
      .value-container {
        padding: 0px 8px;
        transition: all 0.5s ease-in-out;
      }
      .value-container:target {
        height: 50px;
      }
      .value-number {
        width: 100px;
      }
      ha-fab {
        margin: 8px;
      }
      ha-switch {
        padding: 16px 0;
      }
      .card-background {
        background: var(--ha-card-background);
        border-radius: var(--ha-card-border-radius);
        padding: 8px;
      }
      .category {
        background: #0000;
      }
      .ha-icon-large {
        cursor: pointer;
        margin: 0px 4px;
      }
    `}};xt=t([wt("bar-card-editor")],xt),window.customCards=window.customCards||[],window.customCards.push({type:"bar-card",name:"Bar Card",preview:!1,description:"A customizable bar card."});const At={en:{common:{version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",entity_not_available:"Entity not available"}},nb:{common:{version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"}}};function Et(t,e="",i=""){const n=t.split(".")[0],a=t.split(".")[1],o=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let r;try{r=At[o][n][a]}catch(t){r=At.en[n][a]}return void 0===r&&(r=At.en[n][a]),""!==e&&""!==i&&(r=r.replace(e,i)),r}const St=it`
  <style>
    .warning {
      display: block;
      color: black;
      background-color: #fce588;
      padding: 8px;
    }
    #states {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    #states > * {
      margin-bottom: 8px;
    }
    #states > :last-child {
      margin-top: 0px;
      margin-bottom: 0px;
    }
    #states > :first-child {
      margin-top: 0px;
    }
    ha-card {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    bar-card-row {
      display: flex;
      flex-grow: 1;
    }
    bar-card-row > div {
      flex-basis: 100%;
    }
    bar-card-row:empty {
      display: none;
    }
    bar-card-card {
      display: flex;
      flex-basis: 100%;
      flex-direction: row;
      margin-right: 8px;
    }
    bar-card-card:last-child {
      margin-right: 0px;
    }
    bar-card-background {
      cursor: pointer;
      flex-grow: 1;
      position: relative;
      transition: width 0.3s ease;
    }
    bar-card-iconbar {
      color: var(--ha-icon-color);
      align-items: center;
      align-self: center;
      display: flex;
      height: 40px;
      justify-content: center;
      position: relative;
      width: 40px;
    }
    bar-card-currentbar,
    bar-card-backgroundbar,
    bar-card-contentbar,
    bar-card-minmaxbar,
    bar-card-targetbar,
    bar-card-animationbar {
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: var(--bar-card-border-radius, var(--ha-card-border-radius));
    }
    bar-card-contentbar {
      align-items: center;
      color: var(--primary-text-color);
      display: flex;
      justify-content: space-between;
    }

    bar-card-minmaxbar {
      height: 1.2em;
      color: var(--primary-text-color);
      display: flex;
      justify-content: space-between;
    }
    .contentbar-direction-right {
      flex-direction: row;
    }
    bar-card-contentbar.contentbar-direction-right {
      width: var(--bar-percent);
    }

    .contentbar-direction-up {
      flex-direction: column;
    }
    bar-card-contentbar.contentbar-direction-up {
      height: var(--bar-percent);
    }
    bar-card-backgroundbar {
      background: var(--bar-color);
      filter: brightness(0.5);
      opacity: 0.25;
    }
    bar-card-currentbar {
      background: linear-gradient(
        to var(--bar-direction),
        var(--bar-color) var(--bar-percent),
        #0000 var(--bar-percent),
        #0000 var(--bar-percent)
      );
    }
    bar-card-currentbar.gradient-bar {
      background: linear-gradient(
        to var(--bar-direction),
        var(--gradient-start-color) 0%,
        var(--gradient-end-color) var(--bar-percent),
        #0000 var(--bar-percent),
        #0000 var(--bar-percent)
      );
      width: 100%;
      height: 100%;
    }
    bar-card-currentbar.gradient-bar.vertical {
      background: linear-gradient(
        to var(--bar-direction),
        var(--gradient-start-color) 0%,
        var(--gradient-end-color) var(--bar-percent),
        #0000 var(--bar-percent),
        #0000 var(--bar-percent)
      );
      width: 100%;
      height: 100%;
    }
    bar-card-targetbar {
      background: linear-gradient(
        to var(--bar-direction),
        #0000 var(--bar-percent),
        var(--bar-color) var(--bar-percent),
        var(--bar-color) var(--bar-target-percent),
        #0000 var(--bar-target-percent)
      );
      display: var(--target-display);
      filter: brightness(0.66);
      opacity: 0.33;
    }
    bar-card-markerbar {
      background: var(--bar-color);
      filter: brightness(0.75);
      opacity: 50%;
      position: absolute;
    }
    bar-card-animationbar {
      background-repeat: no-repeat;
      filter: brightness(0.75);
      opacity: 0%;
    }
    .animationbar-horizontal {
      background: linear-gradient(to var(--animation-direction), var(--bar-color) 0%, var(--bar-color) 1%, #0000 1%);
    }
    .animationbar-vertical {
      background: linear-gradient(to var(--animation-direction), #0000 0%, #0000 1%, var(--bar-color) 1%);
    }
    @keyframes animation-increase {
      0% {
        opacity: 50%;
        background-size: var(--bar-percent) 100%;
      }
      100% {
        opacity: 0%;
        background-size: 10000% 100%;
      }
    }
    @keyframes animation-decrease {
      0% {
        opacity: 0%;
        background-size: 10000%;
      }
      100% {
        opacity: 50%;
        background-size: var(--bar-percent);
      }
    }
    @keyframes animation-increase-vertical {
      0% {
        opacity: 50%;
        background-size: 100% var(--bar-percent);
      }
      100% {
        background-size: 100% 0%;
        opacity: 0%;
      }
    }
    @keyframes animation-decrease-vertical {
      0% {
        background-size: 100% 100%;
        opacity: 0%;
      }
      100% {
        opacity: 50%;
        background-size: 100% var(--bar-percent);
      }
    }
    bar-card-indicator {
      align-self: center;
      color: var(--bar-color);
      filter: brightness(0.75);
      height: 16px;
      width: 16px;
      position: relative;
      text-align: center;
      opacity: 0;
    }
    .indicator-direction-right {
      margin-right: -16px;
      left: -6px;
    }
    .indicator-direction-up {
      margin: 4px;
    }
    .indicator-show {
      animation: bar-card-indicator-fade 2s forwards;
    }
    @keyframes bar-card-indicator-fade-a {
      0% { opacity: 1; }
      100% { opacity: 0; }
    }
    @keyframes bar-card-indicator-fade-b {
      0% { opacity: 1; }
      100% { opacity: 0; }
    }
    bar-card-name {
      align-items: center;
      align-self: center;
      justify-content: center;
      margin: 4px 10px 4px 4px;
      overflow: hidden;
      position: relative;
      text-align: left;
      text-overflow: ellipsis;
    }
    bar-card-name,
    bar-card-value {
      line-height: 1;      /* makes line-height = font-size */
      flex-shrink: 0;
    }
    bar-card-value {
      margin-left: auto;
    }
    bar-card-value-percent {
      display: block;
      font-size: 12px;
      opacity: 0.7;
      text-align: right;
    }

    .name-outside {
      margin-left: 16px;
    }
    bar-card-value,
    bar-card-min,
    bar-card-max,
    bar-card-divider {
      align-self: center;
      position: relative;
    }
    bar-card-min,
    bar-card-max,
    bar-card-divider {
      font-size: 10px;
      margin: 2px;
      opacity: 0.5;
      padding: 0px 2px;
    }
    bar-card-max {
      margin-left: auto;
    }
    .min-direction-up {
      margin-top: auto;
    }
    .min-direction-right {
      margin-left: auto;
    }
    bar-card-divider {
      margin-left: 0px;
      margin-right: 0px;
    }
    bar-card-value {
      white-space: nowrap;
      margin: 4px;
    }
    .value-direction-right {
      margin-left: auto;
    }
    .value-direction-up {
      margin-top: auto;
    }
  </style>
`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,kt=6;class Ct{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const Ot="ontouchstart"in window||navigator.maxTouchPoints>0;class Tt extends HTMLElement{holdTime;timer;held;cooldownStart;cooldownEnd;dblClickTimeout;constructor(){super(),this.holdTime=500,this.timer=void 0,this.held=!1,this.cooldownStart=!1,this.cooldownEnd=!1}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Ot?"100px":"50px",height:Ot?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none"});["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1}));const i=t=>{if(this.cooldownStart)return;let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime),this.cooldownStart=!0,window.setTimeout((()=>this.cooldownStart=!1),100)},n=i=>{this.cooldownEnd||["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?l(t,"action",{action:"hold"}):e.hasDoubleClick?1===i.detail||"keyup"===i.type?this.dblClickTimeout=window.setTimeout((()=>{l(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),l(t,"action",{action:"double_tap"})):l(t,"action",{action:"tap"}),this.cooldownEnd=!0,window.setTimeout((()=>this.cooldownEnd=!1),100))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",n),t.addEventListener("touchcancel",n),t.addEventListener("keyup",(t=>{if(13===t.keyCode)return n(t)}));/iPhone OS 13_/.test(window.navigator.userAgent)||(t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",n))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null})}stopAnimation(){this.style.display="none"}}customElements.define("action-handler-bar",Tt);const jt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-bar"))return t.querySelector("action-handler-bar");const e=document.createElement("action-handler-bar");return t.appendChild(e),e})();i&&i.bind(t,e)};const Nt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Ct{update(t,[e,i]){t.type===kt&&jt(t.element,i)}render(t,e){}});let Pt=class extends _t{static async getConfigElement(){return document.createElement("bar-card-editor")}static getStubConfig(){return{}}_hass;_config;_configArray=[];_stateArray=[];_animationState=[];_indicatorToggle=[];_rowAmount=1;shouldUpdate(t){return n(this,t,!1)}firstUpdated(){this._equalizeBarWidths()}updated(t){(t.has("_config")||t.has("_hass"))&&this._equalizeBarWidths()}setConfig(t){if(!t)throw new Error(Et("common.invalid_configuration"));this._config=e({animation:{state:"off",speed:5},color:"var(--bar-card-color, var(--primary-color))",columns:1,direction:"right",max:100,min:0,show_percent_value:!1,positions:{icon:"outside",indicator:"outside",name:"inside",min:"off",max:"off",value:"inside"}},t),"horizontal"==this._config.stack&&(this._config.columns=this._config.entities.length),this._configArray=function(t){const i=[];if(t.entities){for(const n of t.entities)if("string"==typeof n){const a=e({},t);delete a.entities;const o=e(a,{entity:n});i.push(o)}else if("object"==typeof n){const a=e({},t);delete a.entities;const o=e(a,n);i.push(o)}}else i.push(t);return i}(this._config),this._rowAmount=this._configArray.length/this._config.columns}_showMoreInfo(t){this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}_handleAction(t){if(this._hass&&t.detail&&t.detail.action){const e=parseInt(t.target.dataset.configIndex||"0"),i=this._configArray[e]||this._config;!function(t,e,i,n){var a;"double_tap"===n&&i.double_tap_action?a=i.double_tap_action:"hold"===n&&i.hold_action?a=i.hold_action:"tap"===n&&i.tap_action&&(a=i.tap_action),g(t,e,i,a)}(t.target,this._hass,i,t.detail.action)}}render(){return this._config&&this._hass?it`
      <ha-card
        .header=${this._config.title?this._config.title:null}
        style="${this._config.entity_row?"background: #0000; box-shadow: none;":""}"
      >
        <div
          id="states"
          class="card-content"
          style="${this._config.entity_row?"padding: 0px;":""} ${"up"==this._config.direction?"":"flex-grow: 0;"}"
        >
          ${this._createBarArray()}
        </div>
      </ha-card>
      ${St}
    `:it``}_createBarArray(){const t=[];for(let e=0;e<this._configArray.length;e++)(t.length+1)*this._config.columns==e&&t.push(this._config.columns),this._configArray.length==e+1&&t.push(this._configArray.length-t.length*this._config.columns);const e=[];for(let n=0;n<t.length;n++){const a=[];for(let e=0;e<t[n];e++){const t=n*this._config.columns+e,o=this._configArray[t],r=this._hass.states[o.entity];if(!r){a.push(it`
            <div class="warning" style="margin-bottom: 8px;">
              ${Et("common.entity_not_available")}: ${o.entity}
            </div>
          `);continue}let c;if(c=o.attribute?r.attributes[o.attribute]:r.state,o.severity&&this._computeSeverityVisibility(c,t))continue;let l=i(this._hass,o.max),d=i(this._hass,o.min);l<=d&&(0===l&&0===d?(d=0,l=100):l=d+Math.max(1,.1*Math.abs(d))),o.limit_value&&(c=Math.min(c,l),c=Math.max(c,d)),isNaN(Number(c))||(0==o.decimal?c=Number(c).toFixed(0):o.decimal&&(c=Number(c).toFixed(o.decimal)));const p=Math.round(2*this._getLineHeightPx()),u=o.height??p;let g,m,f,v="stretch",b="13px",$="right",_="row",y="left",w="height: 100%; width: 2px;";switch(o.direction){case"right":$="right",y="left";break;case"up":b="0px",$="top",_="column-reverse",y="bottom",w="height: 2px; width: 100%;"}switch(f=this._computeSeverityIcon(c,t)?this._computeSeverityIcon(c,t):o.icon?o.icon:r.attributes.icon?r.attributes.icon:h(s(o.entity),c),o.positions.icon){case"outside":g=it`
              <bar-card-iconbar>
                <ha-icon icon="${f}"></ha-icon>
              </bar-card-iconbar>
            `;break;case"inside":m=it`
              <bar-card-iconbar>
                <ha-icon icon="${f}"></ha-icon>
              </bar-card-iconbar>
            `,b="0px";break;case"off":b="0px"}const x=o.name?o.name:r.attributes.friendly_name;let A,E,S,k,C,O;switch(o.positions.name){case"outside":A=it`
              <bar-card-name
                class="${o.entity_row?"name-outside":""}"
                style="${"up"==o.direction?"":o.width?`width: calc(100% - ${o.width});`:""}"
                >${x}</bar-card-name
              >
            `,b="auto";break;case"inside":E=it`
              <bar-card-name>${x}</bar-card-name>
            `}S=isNaN(Number(c))?"":o.unit_of_measurement?o.unit_of_measurement:r.attributes.unit_of_measurement;const T=o.positions.min||(o.positions.minmax?o.positions.minmax:"off"),j=o.positions.max||(o.positions.minmax?o.positions.minmax:"off");let N,P;"outside"!==T&&"outside"!==j||(k=it`
            ${"outside"===T?it`<bar-card-min>${d}${S}</bar-card-min>`:""}
            ${"outside"===T&&"outside"===j?it`<bar-card-divider>/</bar-card-divider>`:""}
            ${"outside"===j?it`<bar-card-max>${l}${S}</bar-card-max>`:""}
          `),"inside"===T&&(C=it`<bar-card-min>${d}${S}</bar-card-min>`),"inside"===j&&(O=it`<bar-card-max>${l}${S}</bar-card-max>`);let M=it``;if(!0===o.show_percent_value){const t=Math.round(c/l*1e4)/100;M=it`<bar-card-value-percent>${t}%</bar-card-value-percent>`}switch(o.positions.value){case"outside":N=it`
              <bar-card-value class="${"up"==o.direction?"value-direction-up":"value-direction-right"}"
                >${o.complementary?l-c:c} ${S}</bar-card-value
              >
            `;break;case"inside":P=it`
              <bar-card-value
                class="${"up"==o.direction?"value-direction-up":"value-direction-right"}"
                >${o.complementary?l-c:c} ${S}${M}</bar-card-value
              >
            `}let I="";c>this._stateArray[t]?(I="▲","up"==o.direction?this._animationState[t]="animation-increase-vertical":this._animationState[t]="animation-increase"):c<this._stateArray[t]?(I="▼","up"==o.direction?this._animationState[t]="animation-decrease-vertical":this._animationState[t]="animation-decrease"):this._animationState[t]=this._animationState[t],isNaN(Number(c))&&(I="");const U=this._computeBarColor(c,t),H=U.startsWith("linear-gradient"),z=H?"":U;let R,D;const L=this._indicatorToggle[t]?"bar-card-indicator-fade-a":"bar-card-indicator-fade-b",V=I?`opacity:1; animation: ${L} 2s forwards;`:"";switch(o.positions.indicator){case"outside":R=it`
              <bar-card-indicator
                class="${"up"==o.direction?"":"indicator-direction-right"}"
                style="--bar-color: ${H?o.gradient?.end_color||"#ff0000":z}; ${V}"
                >${I}</bar-card-indicator
              >
            `;break;case"inside":D=it`
              <bar-card-indicator style="--bar-color: ${H?o.gradient?.end_color||"#ff0000":z}; ${V}">${I}</bar-card-indicator>
            `}const B=this._computePercent(c,t,l,d),W=this._computePercent(o.target,t,l,d);let q=B,F=this._computePercent(o.target,t,l,d);F<q&&(q=F,F=B);let J="#00ff00",K="#00ff00",X="var(--primary-text-color)",Y="none";if(H){const t=o.gradient?.start_color||"#00ff00",e=o.gradient?.middle_color||"#ffff00",i=o.gradient?.end_color||"#ff0000";if(B<=50){const i=B/50;J=t,K=this._interpolateColor(t,e,i)}else{const n=(B-50)/50;J=t,K=this._interpolateColor(e,i,n)}const n=Math.min(85,B);let a;if(n<=50){const i=n/50;a=this._interpolateColor(t,e,i)}else{const t=(n-50)/50;a=this._interpolateColor(e,i,t)}X=this._getContrastingTextColor(a),Y=this._getTextShadow(a)}let Z="";o.width&&(v="center",Z=`width: ${o.width}`);const G=this._animationState[t];let Q="right",tt=100*B,et="animationbar-horizontal";"animation-increase-vertical"!=G&&"animation-decrease-vertical"!=G||(Q="bottom",et="animationbar-vertical",tt=100*(100-B)),a.push(it`
          <bar-card-card
            style="flex-direction: ${_}; align-items: ${v};"
          >
            ${g} ${R} ${A}
            <bar-card-background
              style="margin-left: ${b}; height: ${u}${"number"==typeof u?"px":""}; ${Z}"
              data-config-index="${t}"
              ${Nt(this,{hasDoubleClick:void 0!==o.double_tap_action})}
              @action=${this._handleAction}
            >
              <bar-card-backgroundbar style="--bar-color: ${H?K:z};"></bar-card-backgroundbar>
              ${"on"===o.animation.state?it`
                    <bar-card-animationbar
                      style="animation: ${G} ${o.animation.speed}s infinite ease-out;
                             --bar-percent: ${tt}%;
                             --bar-color: ${H?o.gradient?.start_color||"#00ff00":z};
                             --animation-direction: ${Q};"
                      class="${et}"
                    ></bar-card-animationbar>
                  `:""}
              <bar-card-currentbar
                class="${H?"gradient-bar "+("up"===o.direction?"vertical":""):""}"
                style="${H?`--gradient-start-color: ${J}; --gradient-end-color: ${K}; --bar-percent: ${B}%; --bar-direction: ${$}`:`--bar-color: ${z}; --bar-percent: ${B}%; --bar-direction: ${$}`}"
              ></bar-card-currentbar>
              ${o.target?it`
                    <bar-card-targetbar
                      style="--bar-color: ${H?o.gradient?.end_color||"#ff0000":z};
                             --bar-percent: ${q}%;
                             --bar-target-percent: ${F}%;
                             --bar-direction: ${$};"
                    ></bar-card-targetbar>
                    <bar-card-markerbar
                      style="--bar-color: ${H?o.gradient?.end_color||"#ff0000":z};
                             --bar-target-percent: ${W}%;
                             ${y}: calc(${W}% - 1px);
                             ${w}"
                    ></bar-card-markerbar>
                  `:""}
              <bar-card-minmaxbar
                class="${"up"===o.direction?"contentbar-direction-up":"contentbar-direction-right"}"
              >
                ${C} ${O}
              </bar-card-minmaxbar>
              <bar-card-contentbar
                style="--bar-percent: ${B}%; ${H?`color: ${X}; text-shadow: ${Y};`:""}"

                class="${"up"===o.direction?"contentbar-direction-up":"contentbar-direction-right"}"
              >
                ${m} ${D} ${E} ${P}
              </bar-card-contentbar>
            </bar-card-background>
            ${k} ${N}
          </bar-card-card>
        `),c!==this._stateArray[t]&&(this._stateArray[t]=c),this._indicatorToggle[t]=!this._indicatorToggle[t]}e.push(a)}let n="column";(this._config.columns||this._config.stack)&&(n="row");const a=[];for(const t of e)a.push(it`
        <bar-card-row style="flex-direction: ${n};">${t}</bar-card-row>
      `);return a}_computeBarColor(t,e){const i=this._configArray[e];let n;if(i.severity)n=this._computeSeverityColor(t,e);else if("unavailable"==t)n=`var(--bar-card-disabled-color, ${i.color})`;else if(i.color&&"var(--bar-card-color, var(--primary-color))"!==i.color)n=i.color;else{n=`linear-gradient(to right, ${i.gradient?.start_color||"#00ff00"} 0%, ${i.gradient?.middle_color||"#ffff00"} 50%, ${i.gradient?.end_color||"#ff0000"} 100%)`}return n}_computeSeverityColor(t,e){const i=this._configArray[e],n=Number(t),a=i.severity;let o;return isNaN(n)?a.forEach((e=>{t==e.text&&(o=e.color)})):a.forEach((t=>{n>=t.from&&n<=t.to&&(o=t.color)})),null==o&&(o=i.color),o}_computeSeverityVisibility(t,e){const i=this._configArray[e],n=Number(t),a=i.severity;let o=!1;return isNaN(n)?a.forEach((e=>{t==e.text&&(o=e.hide)})):a.forEach((t=>{n>=t.from&&n<=t.to&&(o=t.hide)})),o}_computeSeverityIcon(t,e){const i=this._configArray[e],n=Number(t),a=i.severity;let o=!1;return!!a&&(isNaN(n)?a.forEach((e=>{t==e.text&&(o=e.icon)})):a.forEach((t=>{n>=t.from&&n<=t.to&&(o=t.icon)})),o)}_computePercent(t,e,i,n){const a=this._configArray[e],o=Number(t);if("unavailable"==t)return 0;if(isNaN(o))return 100;if(i===n)return o>=i?100:0;switch(a.direction){case"right-reverse":case"left-reverse":case"up-reverse":case"down-reverse":return 100-100*(o-n)/(i-n);default:return 100*(o-n)/(i-n)}}_interpolateColor(t,e,i){const n=t.substring(1),a=e.substring(1),o=parseInt(n.substring(0,2),16),r=parseInt(n.substring(2,4),16),s=parseInt(n.substring(4,6),16),c=parseInt(a.substring(0,2),16),l=parseInt(a.substring(2,4),16),d=parseInt(a.substring(4,6),16),h=Math.round(o+(c-o)*i),p=Math.round(r+(l-r)*i),u=Math.round(s+(d-s)*i);return`#${h.toString(16).padStart(2,"0")}${p.toString(16).padStart(2,"0")}${u.toString(16).padStart(2,"0")}`}_getLuminance(t){const e=t.substring(1),i=parseInt(e.substring(0,2),16)/255,n=parseInt(e.substring(2,4),16)/255,a=parseInt(e.substring(4,6),16)/255,o=t=>t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4);return.2126*o(i)+.7152*o(n)+.0722*o(a)}_getContrastingTextColor(t){return this._getLuminance(t)<.5?"#ffffff":"#000000"}_getTextShadow(t){const e=this._getLuminance(t);return e<.3?"1px 1px 2px rgba(255, 255, 255, 0.3)":e>.7?"1px 1px 2px rgba(0, 0, 0, 0.5)":e<.5?"1px 1px 3px rgba(0, 0, 0, 0.8)":"1px 1px 3px rgba(255, 255, 255, 0.8)"}_getLineHeightPx(){try{const t=getComputedStyle(document.body),e=parseFloat(t.lineHeight);if(!isNaN(e)&&isFinite(e))return e;const i=parseFloat(t.fontSize)||14,n=parseFloat(t.getPropertyValue("--ha-line-height-normal"));if(!isNaN(n)&&isFinite(n))return i*n}catch{}return 20}getCardSize(){if(this._config.height){const t=this._config.height.toString();return Math.trunc(Number(t.replace("px",""))/50*this._rowAmount)+1}return this._rowAmount+1}set hass(t){const e=this._hass;this._hass=t,this.requestUpdate("hass",e)}get hass(){return this._hass}_equalizeBarWidths(){!1!==this._config?.auto_width&&setTimeout((()=>{const t=this.shadowRoot?.querySelectorAll("bar-card-background");if(!t||0===t.length)return;let e=1/0;t.forEach((t=>{const i=t.getBoundingClientRect().width;i<e&&(e=i)})),t.forEach((t=>{t.style.width=`${e}px`,t.style.flexGrow="0",t.style.flexShrink="0"}))}),100)}};Pt=t([wt("bar-card")],Pt);export{Pt as BarCard};
