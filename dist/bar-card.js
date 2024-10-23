Object.defineProperty(exports,"__esModule",{value:!0}),exports.BarCard=void 0;const t=require("tslib");require("./editor");const e=require("./action-handler-directive"),i=require("./localize/localize"),r=require("./helpers"),a=require("./styles"),n=require("custom-card-helpers"),o=require("lit-element"),c=require("lit-element/decorators"),s=require("lit-html");let l=(()=>{let l,d,h=[(0,c.customElement)("bar-card")],m=[],u=o.LitElement;return class extends u{static{d=this}static{const e="function"==typeof Symbol&&Symbol.metadata?Object.create(u[Symbol.metadata]??null):void 0;t.__esDecorate(null,l={value:d},h,{kind:"class",name:d.name,metadata:e},null,m),d=l.value,e&&Object.defineProperty(d,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:e}),t.__runInitializers(d,m)}static async getConfigElement(){return document.createElement("bar-card-editor")}static getStubConfig(){return{}}hass;_config;_configArray=[];_stateArray=[];_animationState=[];_rowAmount=1;shouldUpdate(t){return(0,r.hasConfigOrEntitiesChanged)(this,t,!1)}setConfig(t){if(!t)throw new Error((0,i.localize)("common.invalid_configuration"));this._config=(0,r.mergeDeep)({animation:{state:"off",speed:5},color:"var(--bar-card-color, var(--primary-color))",columns:1,direction:"right",max:100,min:0,positions:{icon:"outside",indicator:"outside",name:"inside",minmax:"off",value:"inside"}},t),"horizontal"==this._config.stack&&(this._config.columns=this._config.entities.length),this._configArray=(0,r.createConfigArray)(this._config),this._rowAmount=this._configArray.length/this._config.columns}render(){return this._config&&this.hass?s.html`
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
      ${a.styles}
    `:s.html``}_createBarArray(){const t=[];for(let e=0;e<this._configArray.length;e++)(t.length+1)*this._config.columns==e&&t.push(this._config.columns),this._configArray.length==e+1&&t.push(this._configArray.length-t.length*this._config.columns);const a=[];for(let o=0;o<t.length;o++){const c=[];for(let a=0;a<t[o];a++){const t=o*this._config.columns+a,l=this._configArray[t],d=this.hass.states[l.entity];if(!d){c.push(s.html`
            <div class="warning" style="margin-bottom: 8px;">
              ${(0,i.localize)("common.entity_not_available")}: ${l.entity}
            </div>
          `);continue}let h;if(h=l.attribute?d.attributes[l.attribute]:d.state,l.severity&&this._computeSeverityVisibility(h,t))continue;const m=(0,r.getMaxMinBasedOnType)(this.hass,l.max),u=(0,r.getMaxMinBasedOnType)(this.hass,l.min);l.limit_value&&(h=Math.min(h,m),h=Math.max(h,u)),isNaN(Number(h))||(0==l.decimal?h=Number(h).toFixed(0):l.decimal&&(h=Number(h).toFixed(l.decimal)));let b=40;l.height&&(b=l.height);let g,_,f,p="stretch",$="0px 0px 0px 13px",y="right",v="row",x="left",w="height: 100%; width: 2px;";switch(l.direction){case"right":y="right",x="left";break;case"up":$="0px",y="top",v="column-reverse",x="bottom",w="height: 2px; width: 100%;"}switch(f=this._computeSeverityIcon(h,t)?this._computeSeverityIcon(h,t):l.icon?l.icon:d.attributes.icon?d.attributes.icon:(0,n.domainIcon)((0,n.computeDomain)(l.entity),h),l.positions.icon){case"outside":g=s.html`
              <bar-card-iconbar>
                <ha-icon icon="${f}"></ha-icon>
              </bar-card-iconbar>
            `;break;case"inside":_=s.html`
              <bar-card-iconbar>
                <ha-icon icon="${f}"></ha-icon>
              </bar-card-iconbar>
            `,$="0px";break;case"off":$="0px"}const A=l.name?l.name:d.attributes.friendly_name;let N,S,k,C,E,q,z;switch(l.positions.name){case"outside":N=s.html`
              <bar-card-name
                class="${l.entity_row?"name-outside":""}"
                style="${"up"==l.direction?"":l.width?`width: calc(100% - ${l.width});`:""}"
                >${A}</bar-card-name
              >
            `,$="0px";break;case"inside":S=s.html`
              <bar-card-name>${A}</bar-card-name>
            `}switch(k=isNaN(Number(h))?"":l.unit_of_measurement?l.unit_of_measurement:d.attributes.unit_of_measurement,l.positions.minmax){case"outside":C=s.html`
              <bar-card-min>${m}${k}</bar-card-min>
              <bar-card-divider>/</bar-card-divider>
              <bar-card-max>${m}${k}</bar-card-max>
            `;break;case"inside":E=s.html`
              <bar-card-min class="${"up"==l.direction?"min-direction-up":"min-direction-right"}"
                >${u}${k}</bar-card-min
              >
              <bar-card-divider>/</bar-card-divider>
              <bar-card-max> ${m}${k}</bar-card-max>
            `}switch(l.positions.value){case"outside":q=s.html`
              <bar-card-value class="${"up"==l.direction?"value-direction-up":"value-direction-right"}"
                >${l.complementary?m-h:h} ${k}</bar-card-value
              >
            `;break;case"inside":z=s.html`
              <bar-card-value
                class="${"inside"==l.positions.minmax?"":"up"==l.direction?"value-direction-up":"value-direction-right"}"
                >${l.complementary?m-h:h} ${k}</bar-card-value
              >
            `;break;case"off":$="0px"}let B="";h>this._stateArray[t]?(B="▲","up"==l.direction?this._animationState[t]="animation-increase-vertical":this._animationState[t]="animation-increase"):h<this._stateArray[t]?(B="▼","up"==l.direction?this._animationState[t]="animation-decrease-vertical":this._animationState[t]="animation-decrease"):this._animationState[t]=this._animationState[t],isNaN(Number(h))&&(B="");const M=this._computeBarColor(h,t);let O,P;switch(l.positions.indicator){case"outside":O=s.html`
              <bar-card-indicator
                class="${"up"==l.direction?"":"indicator-direction-right"}"
                style="--bar-color: ${M};"
                >${B}</bar-card-indicator
              >
            `;break;case"inside":P=s.html`
              <bar-card-indicator style="--bar-color: ${M};">${B}</bar-card-indicator>
            `}const I=this._computePercent(h,t,m,u),D=this._computePercent(l.target,t,m,u);let j=I,H=this._computePercent(l.target,t,m,u);H<j&&(j=H,H=I);let F="";l.width&&(p="center",F=`width: ${l.width}`);const T=this._animationState[t];let V="right",L=100*I,U="animationbar-horizontal";"animation-increase-vertical"!=T&&"animation-decrease-vertical"!=T||(V="bottom",U="animationbar-vertical",L=100*(100-I)),c.push(s.html`
          <bar-card-card
            style="flex-direction: ${v}; align-items: ${p};"
            @action=${this._handleAction}
            .config=${l}
            .actionHandler=${(0,e.actionHandler)(this,{hasHold:(0,n.hasAction)(l.hold_action),hasDoubleClick:(0,n.hasAction)(l.double_tap_action)})}
          >
            ${g} ${O} ${N}
            <bar-card-background
              style="margin: ${$}; height: ${b}${"number"==typeof b?"px":""}; ${F}"
            >
              <bar-card-backgroundbar style="--bar-color: ${M};"></bar-card-backgroundbar>
              ${"on"==l.animation.state?s.html`
                    <bar-card-animationbar
                      style="animation: ${T} ${l.animation.speed}s infinite ease-out; --bar-percent: ${L}%; --bar-color: ${M}; --animation-direction: ${V};"
                      class="${U}"
                    ></bar-card-animationbar>
                  `:""}
              <bar-card-currentbar
                style="--bar-color: ${M}; --bar-percent: ${I}%; --bar-direction: ${y}"
              ></bar-card-currentbar>
              ${l.target?s.html`
                    <bar-card-targetbar
                      style="--bar-color: ${M}; --bar-percent: ${j}%; --bar-target-percent: ${H}%; --bar-direction: ${y};"
                    ></bar-card-targetbar>
                    <bar-card-markerbar
                      style="--bar-color: ${M}; --bar-target-percent: ${D}%; ${x}: calc(${D}% - 1px); ${w}}"
                    ></bar-card-markerbar>
                  `:""}
              <bar-card-contentbar
                class="${"up"==l.direction?"contentbar-direction-up":"contentbar-direction-right"}"
              >
                ${_} ${P} ${S} ${E} ${z}
              </bar-card-contentbar>
            </bar-card-background>
            ${C} ${q}
          </bar-card-card>
        `),h!==this._stateArray[t]&&(this._stateArray[t]=h)}a.push(c)}let o="column";(this._config.columns||this._config.stack)&&(o="row");const c=[];for(const t of a)c.push(s.html`
        <bar-card-row style="flex-direction: ${o};">${t}</bar-card-row>
      `);return c}_computeBarColor(t,e){const i=this._configArray[e];let r;return r=i.severity?this._computeSeverityColor(t,e):"unavailable"==t?`var(--bar-card-disabled-color, ${i.color})`:i.color,r}_computeSeverityColor(t,e){const i=this._configArray[e],r=Number(t),a=i.severity;let n;return isNaN(r)?a.forEach((e=>{t==e.text&&(n=e.color)})):a.forEach((t=>{r>=t.from&&r<=t.to&&(n=t.color)})),null==n&&(n=i.color),n}_computeSeverityVisibility(t,e){const i=this._configArray[e],r=Number(t),a=i.severity;let n=!1;return isNaN(r)?a.forEach((e=>{t==e.text&&(n=e.hide)})):a.forEach((t=>{r>=t.from&&r<=t.to&&(n=t.hide)})),n}_computeSeverityIcon(t,e){const i=this._configArray[e],r=Number(t),a=i.severity;let n=!1;return!!a&&(isNaN(r)?a.forEach((e=>{t==e.text&&(n=e.icon)})):a.forEach((t=>{r>=t.from&&r<=t.to&&(n=t.icon)})),n)}_computePercent(t,e,i,r){const a=this._configArray[e],n=Number(t);if("unavailable"==t)return 0;if(isNaN(n))return 100;switch(a.direction){case"right-reverse":case"left-reverse":case"up-reverse":case"down-reverse":return 100-100*(n-r)/(i-r);default:return 100*(n-r)/(i-r)}}_handleAction(t){this.hass&&t.target.config&&t.detail.action&&(0,n.handleAction)(this,this.hass,t.target.config,t.detail.action)}getCardSize(){if(this._config.height){const t=this._config.height.toString();return Math.trunc(Number(t.replace("px",""))/50*this._rowAmount)+1}return this._rowAmount+1}},d})();exports.BarCard=l;
