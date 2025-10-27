function t(t,e,i,r){var o,n=arguments.length,a=n<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(n<3?o(a):n>3?o(e,i,a):o(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new n(i,t,r)},s=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,r))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,g=globalThis,m=g.trustedTypes,f=m?m.emptyScript:"",b=g.reactiveElementPolyfillSupport,_=(t,e)=>t,v={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!c(t,e),$={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);void 0!==r&&l(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const n=r?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...h(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{if(i)t.adoptedStyleSheets=r.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of r){const r=document.createElement("style"),o=e.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=i.cssText,t.appendChild(r)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:v;this._$Em=r,this[r]=o.fromAttribute(e,t.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const r=this.constructor,o=this[t];if(i??=r.getPropertyOptions(t),!((i.hasChanged??y)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:r,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,i,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[_("elementProperties")]=new Map,x[_("finalized")]=new Map,b?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,A=w.trustedTypes,k=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+C,P=`<${E}>`,N=document,O=()=>N.createComment(""),T=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,U="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,D=/>/g,R=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,j=/"/g,B=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),q=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),W=new WeakMap,F=N.createTreeWalker(N,129);function G(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const J=(t,e)=>{const i=t.length-1,r=[];let o,n=2===e?"<svg>":3===e?"<math>":"",a=I;for(let e=0;e<i;e++){const i=t[e];let s,c,l=-1,d=0;for(;d<i.length&&(a.lastIndex=d,c=a.exec(i),null!==c);)d=a.lastIndex,a===I?"!--"===c[1]?a=z:void 0!==c[1]?a=D:void 0!==c[2]?(B.test(c[2])&&(o=RegExp("</"+c[2],"g")),a=R):void 0!==c[3]&&(a=R):a===R?">"===c[0]?(a=o??I,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?R:'"'===c[3]?j:H):a===j||a===H?a=R:a===z||a===D?a=I:(a=R,o=void 0);const h=a===R&&t[e+1].startsWith("/>")?" ":"";n+=a===I?i+P:l>=0?(r.push(s),i.slice(0,l)+S+i.slice(l)+C+h):i+C+(-2===l?e:h)}return[G(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class K{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,n=0;const a=t.length-1,s=this.parts,[c,l]=J(t,e);if(this.el=K.createElement(c,i),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=F.nextNode())&&s.length<a;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(S)){const e=l[n++],i=r.getAttribute(t).split(C),a=/([.?@])?(.*)/.exec(e);s.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?tt:"?"===a[1]?et:"@"===a[1]?it:Q}),r.removeAttribute(t)}else t.startsWith(C)&&(s.push({type:6,index:o}),r.removeAttribute(t));if(B.test(r.tagName)){const t=r.textContent.split(C),e=t.length-1;if(e>0){r.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],O()),F.nextNode(),s.push({type:2,index:++o});r.append(t[e],O())}}}else if(8===r.nodeType)if(r.data===E)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(C,t+1));)s.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const i=N.createElement("template");return i.innerHTML=t,i}}function X(t,e,i=t,r){if(e===q)return e;let o=void 0!==r?i._$Co?.[r]:i._$Cl;const n=T(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,r)),void 0!==r?(i._$Co??=[])[r]=o:i._$Cl=o),void 0!==o&&(e=X(t,o._$AS(t,e.values),o,r)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??N).importNode(e,!0);F.currentNode=r;let o=F.nextNode(),n=0,a=0,s=i[0];for(;void 0!==s;){if(n===s.index){let e;2===s.type?e=new Z(o,o.nextSibling,this,t):1===s.type?e=new s.ctor(o,s.name,s.strings,this,t):6===s.type&&(e=new rt(o,this,t)),this._$AV.push(e),s=i[++a]}n!==s?.index&&(o=F.nextNode(),n++)}return F.currentNode=N,r}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),T(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==q&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new Y(r,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new K(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new Z(this.O(O()),this.O(O()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,r){const o=this.strings;let n=!1;if(void 0===o)t=X(this,t,e,0),n=!T(t)||t!==this._$AH&&t!==q,n&&(this._$AH=t);else{const r=t;let a,s;for(t=o[0],a=0;a<o.length-1;a++)s=X(this,r[i+a],e,a),s===q&&(s=this._$AH[a]),n||=!T(s)||s!==this._$AH[a],s===V?t=V:t!==V&&(t+=(s??"")+o[a+1]),this._$AH[a]=s}n&&!r&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class it extends Q{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??V)===q)return;const i=this._$AH,r=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==V&&(i===V||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class rt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const ot=w.litHtmlPolyfillSupport;ot?.(K,Z),(w.litHtmlVersions??=[]).push("3.3.0");const nt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let at=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const r=i?.renderBefore??e;let o=r._$litPart$;if(void 0===o){const t=i?.renderBefore??null;r._$litPart$=o=new Z(e.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}};at._$litElement$=!0,at.finalized=!0,nt.litElementHydrateSupport?.({LitElement:at});const st=nt.litElementPolyfillSupport;st?.({LitElement:at}),(nt.litElementVersions??=[]).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},lt=(t=ct,e,i)=>{const{kind:r,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===r){const{name:r}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,o,t)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=i;return function(i){const o=this[r];e.call(this,i),this.requestUpdate(r,o,t)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dt,ht;function pt(t){return t.substr(0,t.indexOf("."))}!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(dt||(dt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(ht||(ht={}));var ut=["closed","locked","off"],gt=function(t,e,i,r){r=r||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return o.detail=i,t.dispatchEvent(o),o},mt={alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",configurator:"mdi:settings",conversation:"mdi:text-to-speech",device_tracker:"mdi:account",fan:"mdi:fan",group:"mdi:google-circles-communities",history_graph:"mdi:chart-line",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",input_boolean:"mdi:drawing",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:textbox",light:"mdi:lightbulb",mailbox:"mdi:mailbox",notify:"mdi:comment-alert",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:google-pages",script:"mdi:file-document",sensor:"mdi:eye",simple_alarm:"mdi:bell",sun:"mdi:white-balance-sunny",switch:"mdi:flash",timer:"mdi:timer",updater:"mdi:cloud-upload",vacuum:"mdi:robot-vacuum",water_heater:"mdi:thermometer",weblink:"mdi:open-in-new"};function ft(t,e){if(t in mt)return mt[t];switch(t){case"alarm_control_panel":switch(e){case"armed_home":return"mdi:bell-plus";case"armed_night":return"mdi:bell-sleep";case"disarmed":return"mdi:bell-outline";case"triggered":return"mdi:bell-ring";default:return"mdi:bell"}case"binary_sensor":return e&&"off"===e?"mdi:radiobox-blank":"mdi:checkbox-marked-circle";case"cover":return"closed"===e?"mdi:window-closed":"mdi:window-open";case"lock":return e&&"unlocked"===e?"mdi:lock-open":"mdi:lock";case"media_player":return e&&"off"!==e&&"idle"!==e?"mdi:cast-connected":"mdi:cast";case"zwave":switch(e){case"dead":return"mdi:emoticon-dead";case"sleeping":return"mdi:sleep";case"initializing":return"mdi:timer-sand";default:return"mdi:z-wave"}default:return console.warn("Unable to find icon for domain "+t+" ("+e+")"),"mdi:bookmark"}}var bt=function(t){gt(window,"haptic",t)},_t=function(t,e){return function(t,e,i){void 0===i&&(i=!0);var r,o=pt(e),n="group"===o?"homeassistant":o;switch(o){case"lock":r=i?"unlock":"lock";break;case"cover":r=i?"open_cover":"close_cover";break;default:r=i?"turn_on":"turn_off"}return t.callService(n,r,{entity_id:e})}(t,e,ut.includes(t.states[e].state))},vt=function(t,e,i,r){if(r||(r={action:"more-info"}),!r.confirmation||r.confirmation.exemptions&&r.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(bt("warning"),confirm(r.confirmation.text||"Are you sure you want to "+r.action+"?")))switch(r.action){case"more-info":(i.entity||i.camera_image)&&gt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":r.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),gt(window,"location-changed",{replace:i})}(0,r.navigation_path);break;case"url":r.url_path&&window.open(r.url_path);break;case"toggle":i.entity&&(_t(e,i.entity),bt("success"));break;case"call-service":if(!r.service)return void bt("failure");var o=r.service.split(".",2);e.callService(o[0],o[1],r.service_data,r.target),bt("success");break;case"fire-dom-event":gt(t,"ll-custom",r)}};class yt extends at{constructor(){super(...arguments),this._config={entity_config:!1,animation:void 0,attribute:void 0,color:"",columns:0,complementary:!1,decimal:void 0,direction:"",entities:[],entity_row:!1,entity:"",height:"",icon:void 0,limit_value:!1,max:"",min:"",name:"",positions:void 0,severity:void 0,stack:"",target:void 0,title:"",type:"",unit_of_measurement:"",width:""},this._configArray=[],this._entityOptionsArray=[],this._draggedIndex=null}setConfig(t){this._config={...t,entities:t.entities||[]}}get _allEntities(){return this.hass?Object.keys(this.hass.states).filter((t=>t.startsWith("sensor."))).sort():[]}_ensureAnimationConfig(){this._config.animation||(this._config.animation={})}_addEntity(){this._config.entities||(this._config.entities=[]),this._config.entities=[...this._config.entities,{entity:""}],this._saveConfig(),this.requestUpdate()}_removeEntity(t){if(!this._config.entities)return;const e=[...this._config.entities];e.splice(t,1),this._config.entities=e,this._saveConfig(),this.requestUpdate()}_onSorted(t){if(!this._config.entities)return;const{oldIndex:e,newIndex:i}=t.detail;if(e===i)return;const r=[...this._config.entities],[o]=r.splice(e,1);r.splice(i,0,o),this._config.entities=r,this._saveConfig(),this.requestUpdate()}_onDragStart(t,e){this._draggedIndex=e,t.dataTransfer&&(t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/html",""));t.target.style.opacity="0.5"}_onDragOver(t){t.preventDefault(),t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.currentTarget.style.borderTop="2px solid var(--primary-color)"}_onDrop(t,e){t.preventDefault();if(t.currentTarget.style.borderTop="",null===this._draggedIndex||this._draggedIndex===e)return;if(!this._config.entities)return;const i=[...this._config.entities],[r]=i.splice(this._draggedIndex,1);i.splice(e,0,r),this._config.entities=i,this._saveConfig(),this.requestUpdate()}_onDragEnd(t){t.target.style.opacity="",this._draggedIndex=null;const e=this.shadowRoot?.querySelectorAll(".entity-row");e?.forEach((t=>{t.style.borderTop=""}))}_updateEntity(t,e){if(!this._config.entities)return;const i=e.target.value,r=[...this._config.entities];r[t]={entity:i},this._config.entities=r,this._saveConfig(),this.requestUpdate()}_updateBarConfig(t){const e=t.target,i=e.name;let r=e.value.trim();"limit_value"!==i&&"min"!==i&&"max"!==i||(r=""===r?void 0:Number(r)),this._config={...this._config,[i]:r||void 0},this._saveConfig()}_updateCardConfig(t){const e=t.target,i=e.name;let r=e.value.trim();"columns"!==i&&"decimal"!==i||(r=""===r?void 0:Number(r)),this._config={...this._config,[i]:r||void 0},this._saveConfig()}_updateAnimationSpeed(t){const e=t.target.value.trim();this._ensureAnimationConfig();const i=this._config.animation||{};if(e)this._config={...this._config,animation:{...i,speed:e}};else{const{speed:t,...e}=i;this._config={...this._config,animation:e}}if(!this._config.animation?.state&&!this._config.animation?.speed){const{animation:t,...e}=this._config;this._config=e}this._saveConfig()}_updateAnimationSwitch(t){const e=t.target.checked;this._ensureAnimationConfig();const i=this._config.animation||{};if(this._config=e?{...this._config,animation:{...i,state:"on",speed:i.speed||"1s"}}:{...this._config,animation:{...i,state:"off"}},"off"===this._config.animation?.state&&!this._config.animation?.speed){const{animation:t,...e}=this._config;this._config=e}this._saveConfig(),this.requestUpdate()}_updateComplementarySwitch(t){const e=t.target.checked;this._config={...this._config,complementary:e},this._saveConfig()}_ensurePositionsConfig(){this._config.positions||(this._config={...this._config,positions:{}})}_updatePositionOption(t){const e=t.target,i=e.value,r=e.name;this._ensurePositionsConfig();const o=this._config.positions||{};if(i&&""!==i)this._config={...this._config,positions:{...o,[r]:i}};else{const{[r]:t,...e}=o;this._config={...this._config,positions:e}}if(0===Object.keys(this._config.positions||{}).length){const{positions:t,...e}=this._config;this._config=e}this._saveConfig()}_addSeverity(){if(!this._config)return;const t=this._config.severity||[];this._config={...this._config,severity:[...t,{from:"",to:"",color:""}]},this._saveConfig()}_removeSeverity(t){if(!this._config||!this._config.severity)return;const e=this._config.severity.filter(((e,i)=>i!==t));if(0===e.length){const{severity:t,...e}=this._config;this._config=e}else this._config={...this._config,severity:e};this._saveConfig()}_updateSeverity(t,e,i){const r=t.target.value.trim();if(!this._config.severity)return;const o=[...this._config.severity];if("from"===i||"to"===i){const t=""===r?"":isNaN(Number(r))?r:Number(r);o[e]={...o[e],[i]:t}}else o[e]={...o[e],[i]:r};this._config={...this._config,severity:o},this._saveConfig()}_getColorForPicker(t){return t?t.startsWith("#")&&9===t.length?t.substring(0,7):t.startsWith("#")?t:"#ffffff":"#ffffff"}_updateColorFromPicker(t,e){const i=t.target.value,r=this._config.severity?.[e];if(r){let t=i;if(r.color&&9===r.color.length&&r.color.startsWith("#")){t=i+r.color.substring(7,9)}const o=[...this._config.severity||[]];o[e]={...o[e],color:t},this._config={...this._config,severity:o},this._saveConfig()}}_saveConfig(){if(!this._config)return;const t={...this._config,entities:(this._config.entities||[]).filter((t=>""!==t.entity.trim()))};gt(this,"config-changed",{config:t})}updated(){this._updateColorPreviews()}_updateColorPreviews(){const t=this.shadowRoot?.querySelectorAll(".color-preview");t?.forEach(((t,e)=>{const i=this._config.severity?.[e],r=t.querySelector(".color-overlay");if(r&&r.remove(),i?.color){9===i.color.length&&i.color.startsWith("#")?(t.style.backgroundImage="\n            linear-gradient(45deg, var(--card-background-color) 25%, var(--primary-background-color) 25%), \n            linear-gradient(-45deg, var(--card-background-color) 25%, var(--primary-background-color) 25%), \n            linear-gradient(45deg, var(--primary-background-color) 75%, var(--card-background-color) 75%), \n            linear-gradient(-45deg, var(--primary-background-color) 75%, var(--card-background-color) 75%)\n          ",t.style.backgroundSize="4px 4px",t.style.backgroundPosition="0 0, 0 2px, 2px -2px, -2px 0px",t.style.backgroundColor="var(--card-background-color)"):(t.style.backgroundImage="none",t.style.backgroundColor="var(--card-background-color)");const e=document.createElement("div");e.className="color-overlay",e.style.cssText=`\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          background-color: ${i.color};\n          border-radius: 2px;\n          pointer-events: none;\n        `,t.appendChild(e)}else t.style.backgroundImage="none",t.style.backgroundColor="#f0f0f0"}))}render(){return this.hass&&this._config?L`
      <ha-card header="Bar Card Configuration">
        <div class="card-content">
          <h3>Entities</h3>
          <div class="entities-list">
            ${(this._config.entities||[]).map(((t,e)=>L`
                <div 
                  class="entity-row"
                  draggable="true"
                  @dragstart=${t=>this._onDragStart(t,e)}
                  @dragover=${this._onDragOver}
                  @drop=${t=>this._onDrop(t,e)}
                  @dragend=${this._onDragEnd}
                >
                                    <div class="handle" title="Drag to reorder">
                    ⋮⋮
                  </div>
                  <input
                    type="text"
                    list="entity-list-${e}"
                    .value=${t.entity}
                    @input=${t=>this._updateEntity(e,t)}
                    placeholder="Select an entity..."
                    draggable="false"
                  />
                  <datalist id="entity-list-${e}">
                    ${this._allEntities.map((t=>L`<option value=${t}></option>`))}
                  </datalist>
                  <div class="buttons">
                    <button
                      type="button"
                      class="icon-button delete"
                      @click=${()=>this._removeEntity(e)}
                      title="Remove"
                      draggable="false"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              `))}
          </div>
          <button
            type="button"
            class="add-button"
            @click=${this._addEntity}
          >
            + Add Entity
          </button>

          <hr />
          <h3>Bar Options</h3>
          <div class="options-grid">
            <label>
              Limit Value:
              <input
                type="number"
                name="limit_value"
                .value=${this._config.limit_value?.toString()??""}
                @input=${this._updateBarConfig}
                placeholder="e.g. 100"
              />
            </label>

            <label>
              Min:
              <input
                type="number"
                name="min"
                .value=${this._config.min?.toString()??""}
                @input=${this._updateBarConfig}
                placeholder="e.g. 0"
              />
            </label>

            <label>
              Max:
              <input
                type="number"
                name="max"
                .value=${this._config.max?.toString()??""}
                @input=${this._updateBarConfig}
                placeholder="e.g. 100"
              />
            </label>

            <label>
              Width:
              <input
                type="text"
                name="width"
                .value=${this._config.width||""}
                @input=${this._updateBarConfig}
                placeholder="e.g. 100px"
              />
            </label>

            <label>
              Height:
              <input
                type="text"
                name="height"
                .value=${this._config.height?.toString()??""}
                @input=${this._updateBarConfig}
                placeholder="e.g. 40px"
              />
            </label>

            <label>
              Color:
              <input
                type="text"
                name="color"
                .value=${this._config.color??""}
                @input=${this._updateBarConfig}
                placeholder="e.g. #00bcd4"
              />
            </label>
          </div>

          <hr />
          <h3>Card Options</h3>
          <div class="options-grid">
            <label>
              Columns:
              <input
                type="number"
                name="columns"
                .value=${this._config.columns?.toString()??""}
                @input=${this._updateCardConfig}
                placeholder="e.g. 1"
                min="1"
              />
            </label>

            <label>
              Direction:
              <select
                name="direction"
                .value=${this._config.direction??""}
                @change=${this._updateCardConfig}
              >
                <option value="">Select direction</option>
                <option value="up">Up</option>
                <option value="right">Right</option>
              </select>
            </label>

            <label>
              Name:
              <input
                type="text"
                name="name"
                .value=${this._config.name??""}
                @input=${this._updateCardConfig}
                placeholder="e.g. Sensor name"
              />
            </label>

            <label>
              Title:
              <input
                type="text"
                name="title"
                .value=${this._config.title??""}
                @input=${this._updateCardConfig}
                placeholder="e.g. My Dashboard"
              />
            </label>

            <label>
              Unit of Measurement:
              <input
                type="text"
                name="unit_of_measurement"
                .value=${this._config.unit_of_measurement??""}
                @input=${this._updateCardConfig}
                placeholder="e.g. %"
              />
            </label>

            <label>
              <div class="switch-label">
                <ha-switch
                  .checked=${this._config.complementary||!1}
                  @change=${this._updateComplementarySwitch}
                ></ha-switch>
                <span>Complementary</span>
              </div>
            </label>

            <label>
              Decimal:
              <input
                type="number"
                name="decimal"
                .value=${this._config.decimal?.toString()??""}
                @input=${this._updateCardConfig}
                placeholder="e.g. 2"
                min="0"
                max="10"
              />
            </label>
          </div>

          <hr />
          <h3>Animation Options</h3>
          <div class="options-grid">
            <div class="switch-label">
              <ha-switch
                .checked=${"on"===this._config.animation?.state}
                @change=${this._updateAnimationSwitch}
              ></ha-switch>
              <span>Enable animation</span>
            </div>

            <label>
              Speed:
              <input
                type="text"
                name="speed"
                .value=${this._config.animation?.speed??""}
                @input=${this._updateAnimationSpeed}
                placeholder="e.g. 1s"
                .disabled=${"on"!==this._config.animation?.state}
              />
            </label>
          </div>

          <hr />
          <h3>Position Options</h3>
          <div class="options-grid">
            <label>
              Icon position:
              <select
                name="icon"
                .value=${this._config.positions?.icon??""}
                @change=${this._updatePositionOption}
              >
                <option value="">Default</option>
                <option value="outside">Outside</option>
                <option value="inside">Inside</option>
                <option value="off">Off</option>
              </select>
            </label>

            <label>
              Indicator position:
              <select
                name="indicator"
                .value=${this._config.positions?.indicator??""}
                @change=${this._updatePositionOption}
              >
                <option value="">Default</option>
                <option value="outside">Outside</option>
                <option value="inside">Inside</option>
                <option value="off">Off</option>
              </select>
            </label>

            <label>
              Name position:
              <select
                name="name"
                .value=${this._config.positions?.name??""}
                @change=${this._updatePositionOption}
              >
                <option value="">Default</option>
                <option value="inside">Inside</option>
                <option value="outside">Outside</option>
                <option value="off">Off</option>
              </select>
            </label>

            <label>
              Min/Max position:
              <select
                name="minmax"
                .value=${this._config.positions?.minmax??""}
                @change=${this._updatePositionOption}
              >
                <option value="">Default</option>
                <option value="off">Off</option>
                <option value="inside">Inside</option>
                <option value="outside">Outside</option>
              </select>
            </label>

            <label>
              Value position:
              <select
                name="value"
                .value=${this._config.positions?.value??""}
                @change=${this._updatePositionOption}
              >
                <option value="">Default</option>
                <option value="inside">Inside</option>
                <option value="outside">Outside</option>
                <option value="off">Off</option>
              </select>
            </label>
          </div>

          <hr />
          <h3>Severity Options</h3>
          <div class="severity-section">
            ${(this._config.severity||[]).map(((t,e)=>L`
              <div class="severity-row">
                <div class="severity-inputs">
                  <label>
                    From:
                    <input
                      type="number"
                      .value=${t.from.toString()}
                      @input=${t=>this._updateSeverity(t,e,"from")}
                      placeholder="0"
                    />
                  </label>
                  
                  <label>
                    To:
                    <input
                      type="number"
                      .value=${t.to.toString()}
                      @input=${t=>this._updateSeverity(t,e,"to")}
                      placeholder="100"
                    />
                  </label>
                  
                  <label>
                    Color:
                    <div class="color-input-group">
                      <input
                        type="text"
                        .value=${t.color||""}
                        @input=${t=>this._updateSeverity(t,e,"color")}
                        placeholder="e.g. #ff0000"
                        class="color-text-input"
                      />
                      <label class="color-preview-wrapper">
                        <div 
                          class="color-preview" 
                          title="Click to choose color"
                        ></div>
                        <input
                          type="color"
                          class="color-picker-hidden"
                          .value=${this._getColorForPicker(t.color)}
                          @input=${t=>this._updateColorFromPicker(t,e)}
                        />
                      </label>
                    </div>
                  </label>
                </div>
                
                <button
                  class="icon-button delete"
                  @click=${()=>this._removeSeverity(e)}
                  title="Remove severity rule"
                >
                  ✕
                </button>
              </div>
            `))}
            
            <div class="add-severity">
              <button
                class="icon-button add"
                @click=${this._addSeverity}
                title="Add severity rule"
              >
                +
              </button>
              <span>Voeg severity regel toe</span>
            </div>
          </div>
        </div>
      </ha-card>
    `:L``}static{this.styles=a`
    .entity-row {
      display: flex;
      align-items: center;
      margin-bottom: 0.5em;
      padding: 8px;
      border: 1px solid var(--divider-color);
      border-radius: 4px;
      background-color: var(--card-background-color);
      transition: all 0.2s ease;
      cursor: default;
    }
    .entity-row[draggable="true"] {
      cursor: grab;
    }
    .entity-row[draggable="true"]:active {
      cursor: grabbing;
    }
    .entity-row:hover {
      background-color: var(--table-row-background-color, var(--primary-background-color));
    }
    .entity-row input {
      flex: 1;
      padding: 8px;
      border: 1px solid var(--divider-color);
      border-radius: 4px;
      background-color: var(--card-background-color);
      color: var(--primary-text-color);
      font-size: 14px;
      margin: 0 8px;
    }
    .entity-row input:focus {
      outline: none;
      border-color: var(--primary-color);
    }
    .handle {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: grab;
      color: var(--secondary-text-color);
      width: 32px;
      height: 32px;
      margin-right: 8px;
      padding: 4px;
      border-radius: 4px;
      transition: background-color 0.2s;
      user-select: none;
    }
    .handle:hover {
      background-color: var(--divider-color);
      color: var(--primary-text-color);
    }
    .handle:active {
      cursor: grabbing;
      background-color: var(--primary-color);
      color: var(--text-primary-color);
    }
    .handle ha-icon {
      --mdc-icon-size: 20px;
      pointer-events: none;
    }
    .buttons {
      display: flex;
      flex-shrink: 0;
      margin-left: 0.5em;
      gap: 4px;
    }
    .icon-button {
      width: 32px;
      height: 32px;
      border: 1px solid var(--divider-color);
      border-radius: 4px;
      background-color: var(--card-background-color);
      color: var(--primary-text-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: bold;
      transition: all 0.2s;
    }
    .icon-button:hover:not(:disabled) {
      background-color: var(--primary-color);
      color: var(--text-primary-color);
    }
    .icon-button:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
    .icon-button.delete {
      color: var(--error-color);
    }
    .icon-button.delete:hover:not(:disabled) {
      background-color: var(--error-color);
      color: white;
    }
    .options-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1em 1.5em;
      margin-bottom: 1.5em;
      align-items: start;
    }
    .options-grid label {
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-weight: 500;
      font-size: 14px;
      color: var(--primary-text-color);
    }
    .options-grid input,
    .options-grid select {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      background-color: var(--card-background-color);
      color: var(--primary-text-color);
      font-size: 14px;
      font-family: inherit;
      transition: border-color 0.2s ease;
      box-sizing: border-box;
    }
    .options-grid input:focus,
    .options-grid select:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 1px var(--primary-color);
    }
    .options-grid input:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: var(--disabled-color, var(--divider-color));
    }
    ha-switch {
      align-self: flex-start;
      margin-top: 2px;
    }
    .switch-label {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      font-weight: 500;
      font-size: 14px;
      color: var(--primary-text-color);
    }
    .severity-section {
      margin-bottom: 1em;
    }
    .severity-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;
      padding: 8px;
      border: 1px solid var(--divider-color);
      border-radius: 4px;
      background-color: var(--card-background-color);
    }
    .severity-inputs {
      display: grid;
      grid-template-columns: 80px 80px 1fr;
      gap: 8px;
      flex: 1;
      width: 100%;
      min-width: 0; /* Ensures the grid doesn't break out of the container */
    }
    .severity-inputs label {
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 14px;
      min-width: 0; /* Prevents overflow */
    }
    .severity-inputs input {
      width: 100%;
      padding: 6px;
      border: 1px solid var(--divider-color);
      border-radius: 4px;
      background-color: var(--card-background-color);
      color: var(--primary-text-color);
      font-size: 14px;
      box-sizing: border-box;
      min-width: 0; /* Prevents overflow */
    }
    .severity-inputs input:focus {
      outline: none;
      border-color: var(--primary-color);
    }
    .add-severity {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
      padding: 8px;
    }
    .icon-button.add {
      background-color: var(--primary-color);
      color: var(--text-primary-color);
    }
    .icon-button.add:hover {
      background-color: var(--primary-color);
      opacity: 0.8;
    }
    .color-input-group {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .color-text-input {
      flex: 1;
      padding: 6px;
      border: 1px solid var(--divider-color);
      border-radius: 4px;
      background-color: var(--card-background-color);
      color: var(--primary-text-color);
      font-size: 14px;
      box-sizing: border-box;
    }
    .color-text-input:focus {
      outline: none;
      border-color: var(--primary-color);
    }
    .color-preview-wrapper {
      position: relative;
      display: inline-block;
      cursor: pointer;
    }
    .color-preview {
      width: 32px;
      height: 32px;
      border: 2px solid var(--divider-color);
      border-radius: 4px;
      cursor: pointer;
      position: relative;
      background-color: var(--card-background-color);
    }
    .color-preview:hover {
      border-color: var(--primary-color);
    }
    .color-picker-hidden {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
    hr {
      margin: 1.5em 0;
      border: none;
      border-top: 1px solid var(--divider-color);
    }
  `}}t([function(t){return(e,i)=>"object"==typeof i?lt(t,e,i):((t,e,i)=>{const r=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),r?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}({attribute:!1})],yt.prototype,"hass",void 0),customElements.define("bar-card-editor",yt);const $t={en:{common:{version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",entity_not_available:"Entity not available"},editor:{entity:"Entity (required)",name:"Name",title:"Title",unit_of_measurement:"Unit of Measurement",icon:"Icon",color:"Color",height:"Height",width:"Width",auto_width:"Auto Width",direction:"Direction",min_value:"Minimum Value",max_value:"Maximum Value",target_value:"Target Value",attribute:"Attribute",decimal_places:"Decimal Places",show_percentage:"Show Percentage Value",limit_value:"Limit Value to Min/Max",complementary:"Complementary (invert bar)",columns:"Columns",stack:"Stack",entity_row:"Entity Row Mode",animation:"Animation",tap_action:"Tap Action",hold_action:"Hold Action",double_tap_action:"Double Tap Action",add_entities:"Add Multiple Entities",add_severity:"Add Severity Settings",add_gradient:"Add Gradient",remove_entities:"Remove multiple entities",remove_severity:"Remove severity settings",remove_gradient:"Remove gradient settings",required_settings:"Required Settings",display_settings:"Display Settings",bar_appearance:"Bar Appearance",value_settings:"Value Settings",position_settings:"Element Positions",layout_settings:"Layout Settings",actions:"Actions",advanced:"Advanced",gradient_settings:"Gradient Settings",start_color:"Start Color",middle_color:"Middle Color (optional)",end_color:"End Color",icon_position:"Icon Position",name_position:"Name Position",value_position:"Value Position",min_position:"Min Position",max_position:"Max Position",severity_settings:"Severity Settings",multiple_entities:"Multiple Entities"}},nb:{common:{version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"}}};function xt(t,e="",i=""){const r=t.split(".")[0],o=t.split(".")[1],n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let a;try{a=$t[n][r][o]}catch(t){a=$t.en[r][o]}return void 0===a&&(a=$t.en[r][o]),""!==e&&""!==i&&(a=a.replace(e,i)),a}function wt(...t){const e=t=>t&&"object"==typeof t;return t.reduce(((t,i)=>(Object.keys(i).forEach((r=>{const o=t[r],n=i[r];Array.isArray(o)&&Array.isArray(n)?t[r]=o.concat(...n):e(o)&&e(n)?t[r]=wt(o,n):t[r]=n})),t)),{})}function At(t,e){if("number"==typeof e)return e;if(void 0===t)return 0;if("string"==typeof e){const t=parseFloat(e);if(!isNaN(t))return t}if(t.states[e]){const i=parseFloat(t.states[e].state);return isNaN(i)?0:i}return 0}const kt=L`
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
 */,St=6;class Ct{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const Et="ontouchstart"in window||navigator.maxTouchPoints>0;class Pt extends HTMLElement{constructor(){super(),this.holdTime=500,this.timer=void 0,this.held=!1,this.cooldownStart=!1,this.cooldownEnd=!1}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Et?"100px":"50px",height:Et?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none"});["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1}));const i=t=>{if(this.cooldownStart)return;let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime),this.cooldownStart=!0,window.setTimeout((()=>this.cooldownStart=!1),100)},r=i=>{this.cooldownEnd||["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?gt(t,"action",{action:"hold"}):e.hasDoubleClick?1===i.detail||"keyup"===i.type?this.dblClickTimeout=window.setTimeout((()=>{gt(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),gt(t,"action",{action:"double_tap"})):gt(t,"action",{action:"tap"}),this.cooldownEnd=!0,window.setTimeout((()=>this.cooldownEnd=!1),100))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",r),t.addEventListener("touchcancel",r),t.addEventListener("keyup",(t=>{if(13===t.keyCode)return r(t)}));/iPhone OS 13_/.test(window.navigator.userAgent)||(t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",r))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null})}stopAnimation(){this.style.display="none"}}customElements.define("action-handler-bar",Pt);const Nt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-bar"))return t.querySelector("action-handler-bar");const e=document.createElement("action-handler-bar");return t.appendChild(e),e})();i&&i.bind(t,e)};const Ot=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Ct{update(t,[e,i]){t.type===St&&Nt(t.element,i)}render(t,e){}});let Tt=class extends at{constructor(){super(...arguments),this._configArray=[],this._stateArray=[],this._animationState=[],this._indicatorToggle=[],this._rowAmount=1}static async getConfigElement(){return document.createElement("bar-card-editor")}static getStubConfig(){return{entity:"sensor.example",name:"Example Bar Card"}}shouldUpdate(t){return function(t,e,i){if(e.has("config")||i)return!0;for(const i of t._configArray)if(i.entity){const r=e.get("hass");if(r){if(r.states[i.entity]!==t.hass.states[i.entity])return!0;continue}return!0}return!1}(this,t,!1)}firstUpdated(){this._equalizeBarWidths()}updated(t){(t.has("_config")||t.has("_hass"))&&this._equalizeBarWidths()}setConfig(t){if(!t)throw new Error(xt("common.invalid_configuration"));this._config=wt({animation:{state:"off",speed:5},color:"var(--bar-card-color, var(--primary-color))",columns:1,direction:"right",max:100,min:0,show_percent_value:!1,positions:{icon:"outside",indicator:"outside",name:"inside",min:"off",max:"off",value:"inside"}},t),"horizontal"==this._config.stack&&(this._config.columns=this._config.entities.length),this._configArray=function(t){const e=[];if(t.entities){for(const i of t.entities)if("string"==typeof i){const r=wt({},t);delete r.entities;const o=wt(r,{entity:i});e.push(o)}else if("object"==typeof i){const r=wt({},t);delete r.entities;const o=wt(r,i);e.push(o)}}else e.push(t);return e}(this._config),this._rowAmount=this._configArray.length/this._config.columns}_showMoreInfo(t){this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}_handleAction(t){if(this._hass&&t.detail&&t.detail.action){const e=parseInt(t.target.dataset.configIndex||"0"),i=this._configArray[e]||this._config;!function(t,e,i,r){var o;"double_tap"===r&&i.double_tap_action?o=i.double_tap_action:"hold"===r&&i.hold_action?o=i.hold_action:"tap"===r&&i.tap_action&&(o=i.tap_action),vt(t,e,i,o)}(t.target,this._hass,i,t.detail.action)}}render(){return this._config&&this._hass?L`
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
      ${kt}
    `:L``}_createBarArray(){const t=[];for(let e=0;e<this._configArray.length;e++)(t.length+1)*this._config.columns==e&&t.push(this._config.columns),this._configArray.length==e+1&&t.push(this._configArray.length-t.length*this._config.columns);const e=[];for(let i=0;i<t.length;i++){const r=[];for(let e=0;e<t[i];e++){const t=i*this._config.columns+e,o=this._configArray[t],n=this._hass.states[o.entity];if(!n){r.push(L`
            <div class="warning" style="margin-bottom: 8px;">
              ${xt("common.entity_not_available")}: ${o.entity}
            </div>
          `);continue}let a;if(a=o.attribute?n.attributes[o.attribute]:n.state,o.severity&&this._computeSeverityVisibility(a,t))continue;let s=At(this._hass,o.max),c=At(this._hass,o.min);s<=c&&(0===s&&0===c?(c=0,s=100):s=c+Math.max(1,.1*Math.abs(c))),o.limit_value&&(a=Math.min(a,s),a=Math.max(a,c)),isNaN(Number(a))||(0==o.decimal?a=Number(a).toFixed(0):o.decimal&&(a=Number(a).toFixed(o.decimal)));const l=Math.round(2*this._getLineHeightPx()),d=o.height??l;let h,p,u,g="stretch",m="13px",f="right",b="row",_="left",v="height: 100%; width: 2px;";switch(o.direction){case"right":f="right",_="left";break;case"up":m="0px",f="top",b="column-reverse",_="bottom",v="height: 2px; width: 100%;"}switch(u=this._computeSeverityIcon(a,t)?this._computeSeverityIcon(a,t):o.icon?o.icon:n.attributes.icon?n.attributes.icon:ft(pt(o.entity),a),o.positions.icon){case"outside":h=L`
              <bar-card-iconbar>
                <ha-icon icon="${u}"></ha-icon>
              </bar-card-iconbar>
            `;break;case"inside":p=L`
              <bar-card-iconbar>
                <ha-icon icon="${u}"></ha-icon>
              </bar-card-iconbar>
            `,m="0px";break;case"off":m="0px"}const y=o.name?o.name:n.attributes.friendly_name;let $,x,w,A,k,S;switch(o.positions.name){case"outside":$=L`
              <bar-card-name
                class="${o.entity_row?"name-outside":""}"
                style="${"up"==o.direction?"":o.width?`width: calc(100% - ${o.width});`:""}"
                >${y}</bar-card-name
              >
            `,m="auto";break;case"inside":x=L`
              <bar-card-name>${y}</bar-card-name>
            `}w=isNaN(Number(a))?"":o.unit_of_measurement?o.unit_of_measurement:n.attributes.unit_of_measurement;const C=o.positions.min||(o.positions.minmax?o.positions.minmax:"off"),E=o.positions.max||(o.positions.minmax?o.positions.minmax:"off");let P,N;"outside"!==C&&"outside"!==E||(A=L`
            ${"outside"===C?L`<bar-card-min>${c}${w}</bar-card-min>`:""}
            ${"outside"===C&&"outside"===E?L`<bar-card-divider>/</bar-card-divider>`:""}
            ${"outside"===E?L`<bar-card-max>${s}${w}</bar-card-max>`:""}
          `),"inside"===C&&(k=L`<bar-card-min>${c}${w}</bar-card-min>`),"inside"===E&&(S=L`<bar-card-max>${s}${w}</bar-card-max>`);let O=L``;if(!0===o.show_percent_value){const t=Math.round(a/s*1e4)/100;O=L`<bar-card-value-percent>${t}%</bar-card-value-percent>`}switch(o.positions.value){case"outside":P=L`
              <bar-card-value class="${"up"==o.direction?"value-direction-up":"value-direction-right"}"
                >${o.complementary?s-a:a} ${w}</bar-card-value
              >
            `;break;case"inside":N=L`
              <bar-card-value
                class="${"up"==o.direction?"value-direction-up":"value-direction-right"}"
                >${o.complementary?s-a:a} ${w}${O}</bar-card-value
              >
            `}let T="";a>this._stateArray[t]?(T="▲","up"==o.direction?this._animationState[t]="animation-increase-vertical":this._animationState[t]="animation-increase"):a<this._stateArray[t]?(T="▼","up"==o.direction?this._animationState[t]="animation-decrease-vertical":this._animationState[t]="animation-decrease"):this._animationState[t]=this._animationState[t],isNaN(Number(a))&&(T="");const M=this._computeBarColor(a,t),U=M.startsWith("linear-gradient"),I=U?"":M;let z,D;const R=this._indicatorToggle[t]?"bar-card-indicator-fade-a":"bar-card-indicator-fade-b",H=T?`opacity:1; animation: ${R} 2s forwards;`:"";switch(o.positions.indicator){case"outside":z=L`
              <bar-card-indicator
                class="${"up"==o.direction?"":"indicator-direction-right"}"
                style="--bar-color: ${U?o.gradient?.end_color||"#ff0000":I}; ${H}"
                >${T}</bar-card-indicator
              >
            `;break;case"inside":D=L`
              <bar-card-indicator style="--bar-color: ${U?o.gradient?.end_color||"#ff0000":I}; ${H}">${T}</bar-card-indicator>
            `}const j=this._computePercent(a,t,s,c),B=this._computePercent(o.target,t,s,c);let q=j,V=this._computePercent(o.target,t,s,c);V<q&&(q=V,V=j);let W="#00ff00",F="#00ff00",G="var(--primary-text-color)",J="none";if(U){const t=o.gradient?.start_color||"#00ff00",e=o.gradient?.middle_color||"#ffff00",i=o.gradient?.end_color||"#ff0000";if(j<=50){const i=j/50;W=t,F=this._interpolateColor(t,e,i)}else{const r=(j-50)/50;W=t,F=this._interpolateColor(e,i,r)}const r=Math.min(85,j);let n;if(r<=50){const i=r/50;n=this._interpolateColor(t,e,i)}else{const t=(r-50)/50;n=this._interpolateColor(e,i,t)}G=this._getContrastingTextColor(n),J=this._getTextShadow(n)}let K="";o.width&&(g="center",K=`width: ${o.width}`);const X=this._animationState[t];let Y="right",Z=100*j,Q="animationbar-horizontal";"animation-increase-vertical"!=X&&"animation-decrease-vertical"!=X||(Y="bottom",Q="animationbar-vertical",Z=100*(100-j)),r.push(L`
          <bar-card-card
            style="flex-direction: ${b}; align-items: ${g};"
          >
            ${h} ${z} ${$}
            <bar-card-background
              style="margin-left: ${m}; height: ${d}${"number"==typeof d?"px":""}; ${K}"
              data-config-index="${t}"
              ${Ot(this,{hasDoubleClick:void 0!==o.double_tap_action})}
              @action=${this._handleAction}
            >
              <bar-card-backgroundbar style="--bar-color: ${U?F:I};"></bar-card-backgroundbar>
              ${"on"===o.animation.state?L`
                    <bar-card-animationbar
                      style="animation: ${X} ${o.animation.speed}s infinite ease-out;
                             --bar-percent: ${Z}%;
                             --bar-color: ${U?o.gradient?.start_color||"#00ff00":I};
                             --animation-direction: ${Y};"
                      class="${Q}"
                    ></bar-card-animationbar>
                  `:""}
              <bar-card-currentbar
                class="${U?"gradient-bar "+("up"===o.direction?"vertical":""):""}"
                style="${U?`--gradient-start-color: ${W}; --gradient-end-color: ${F}; --bar-percent: ${j}%; --bar-direction: ${f}`:`--bar-color: ${I}; --bar-percent: ${j}%; --bar-direction: ${f}`}"
              ></bar-card-currentbar>
              ${o.target?L`
                    <bar-card-targetbar
                      style="--bar-color: ${U?o.gradient?.end_color||"#ff0000":I};
                             --bar-percent: ${q}%;
                             --bar-target-percent: ${V}%;
                             --bar-direction: ${f};"
                    ></bar-card-targetbar>
                    <bar-card-markerbar
                      style="--bar-color: ${U?o.gradient?.end_color||"#ff0000":I};
                             --bar-target-percent: ${B}%;
                             ${_}: calc(${B}% - 1px);
                             ${v}"
                    ></bar-card-markerbar>
                  `:""}
              <bar-card-minmaxbar
                class="${"up"===o.direction?"contentbar-direction-up":"contentbar-direction-right"}"
              >
                ${k} ${S}
              </bar-card-minmaxbar>
              <bar-card-contentbar
                style="--bar-percent: ${j}%; ${U?`color: ${G}; text-shadow: ${J};`:""}"

                class="${"up"===o.direction?"contentbar-direction-up":"contentbar-direction-right"}"
              >
                ${p} ${D} ${x} ${N}
              </bar-card-contentbar>
            </bar-card-background>
            ${A} ${P}
          </bar-card-card>
        `),a!==this._stateArray[t]&&(this._stateArray[t]=a),this._indicatorToggle[t]=!this._indicatorToggle[t]}e.push(r)}let i="column";(this._config.columns||this._config.stack)&&(i="row");const r=[];for(const t of e)r.push(L`
        <bar-card-row style="flex-direction: ${i};">${t}</bar-card-row>
      `);return r}_computeBarColor(t,e){const i=this._configArray[e];let r;if(i.severity)r=this._computeSeverityColor(t,e);else if("unavailable"==t)r=`var(--bar-card-disabled-color, ${i.color})`;else if(i.color&&"var(--bar-card-color, var(--primary-color))"!==i.color)r=i.color;else{r=`linear-gradient(to right, ${i.gradient?.start_color||"#00ff00"} 0%, ${i.gradient?.middle_color||"#ffff00"} 50%, ${i.gradient?.end_color||"#ff0000"} 100%)`}return r}_computeSeverityColor(t,e){const i=this._configArray[e],r=Number(t),o=i.severity;let n;return isNaN(r)?o.forEach((e=>{t==e.text&&(n=e.color)})):o.forEach((t=>{r>=t.from&&r<=t.to&&(n=t.color)})),null==n&&(n=i.color),n}_computeSeverityVisibility(t,e){const i=this._configArray[e],r=Number(t),o=i.severity;let n=!1;return isNaN(r)?o.forEach((e=>{t==e.text&&(n=e.hide)})):o.forEach((t=>{r>=t.from&&r<=t.to&&(n=t.hide)})),n}_computeSeverityIcon(t,e){const i=this._configArray[e],r=Number(t),o=i.severity;let n=!1;return!!o&&(isNaN(r)?o.forEach((e=>{t==e.text&&(n=e.icon)})):o.forEach((t=>{r>=t.from&&r<=t.to&&(n=t.icon)})),n)}_computePercent(t,e,i,r){const o=this._configArray[e],n=Number(t);if("unavailable"==t)return 0;if(isNaN(n))return 100;if(i===r)return n>=i?100:0;switch(o.direction){case"right-reverse":case"left-reverse":case"up-reverse":case"down-reverse":return 100-100*(n-r)/(i-r);default:return 100*(n-r)/(i-r)}}_interpolateColor(t,e,i){const r=t.substring(1),o=e.substring(1),n=parseInt(r.substring(0,2),16),a=parseInt(r.substring(2,4),16),s=parseInt(r.substring(4,6),16),c=parseInt(o.substring(0,2),16),l=parseInt(o.substring(2,4),16),d=parseInt(o.substring(4,6),16),h=Math.round(n+(c-n)*i),p=Math.round(a+(l-a)*i),u=Math.round(s+(d-s)*i);return`#${h.toString(16).padStart(2,"0")}${p.toString(16).padStart(2,"0")}${u.toString(16).padStart(2,"0")}`}_getLuminance(t){const e=t.substring(1),i=parseInt(e.substring(0,2),16)/255,r=parseInt(e.substring(2,4),16)/255,o=parseInt(e.substring(4,6),16)/255,n=t=>t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4);return.2126*n(i)+.7152*n(r)+.0722*n(o)}_getContrastingTextColor(t){return this._getLuminance(t)<.5?"#ffffff":"#000000"}_getTextShadow(t){const e=this._getLuminance(t);return e<.3?"1px 1px 2px rgba(255, 255, 255, 0.3)":e>.7?"1px 1px 2px rgba(0, 0, 0, 0.5)":e<.5?"1px 1px 3px rgba(0, 0, 0, 0.8)":"1px 1px 3px rgba(255, 255, 255, 0.8)"}_getLineHeightPx(){try{const t=getComputedStyle(document.body),e=parseFloat(t.lineHeight);if(!isNaN(e)&&isFinite(e))return e;const i=parseFloat(t.fontSize)||14,r=parseFloat(t.getPropertyValue("--ha-line-height-normal"));if(!isNaN(r)&&isFinite(r))return i*r}catch{}return 20}getCardSize(){if(this._config.height){const t=this._config.height.toString();return Math.trunc(Number(t.replace("px",""))/50*this._rowAmount)+1}return this._rowAmount+1}set hass(t){const e=this._hass;this._hass=t,this.requestUpdate("hass",e)}get hass(){return this._hass}_equalizeBarWidths(){!1!==this._config?.auto_width&&setTimeout((()=>{const t=this.shadowRoot?.querySelectorAll("bar-card-background");if(!t||0===t.length)return;let e=1/0;t.forEach((t=>{const i=t.getBoundingClientRect().width;i<e&&(e=i)})),t.forEach((t=>{t.style.width=`${e}px`,t.style.flexGrow="0",t.style.flexShrink="0"}))}),100)}};Tt=t([(t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)})("bar-card")],Tt),window.customCards=window.customCards||[],window.customCards.push({type:"custom:bar-card",name:"Bar Card",preview:!1,description:"A customizable progress bar card for Home Assistant",documentationURL:"https://github.com/custom-cards/bar-card"});export{Tt as BarCard};
