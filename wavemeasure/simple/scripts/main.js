'use strict';function p(g,e,h,l){g.f.ca(g.F,e,h,l,void 0)}function z(g,e,h,l){g.f.l?p(g,e,h,l):g.f.pb()._OnMessageFromDOM({type:"event",component:g.F,handler:e,dispatchOpts:l||null,data:h,responseId:null})}function E(g,e,h){g.f.a(g.F,e,h)}function H(g,e){for(const [h,l]of e)E(g,h,l)}window.N=class{constructor(g,e){this.f=g;this.F=e}za(){}};
window.eb=class{constructor(g,e){this.Qa=g;this.Ub=e;this.A=-1;this.V=-Infinity;this.Zb=()=>{this.A=-1;this.V=Date.now();this.G=!0;this.Qa();this.G=!1};this.Ra=this.G=!1}};"use strict";function I(g,e){E(g,"get-element",h=>{const l=g.h.get(h.elementId);return e(l,h)})}
window.mc=class extends self.N{constructor(g,e){super(g,e);this.h=new Map;this.pa=!0;H(this,[["create",()=>{throw Error("required override");}],["destroy",h=>{{h=h.elementId;const l=this.h.get(h);this.pa&&l.parentElement.removeChild(l);this.h.delete(h)}}],["set-visible",h=>{this.pa&&(this.h.get(h.elementId).style.display=h.isVisible?"":"none")}],["update-position",h=>{if(this.pa){var l=this.h.get(h.elementId);l.style.left=h.left+"px";l.style.top=h.top+"px";l.style.width=h.width+"px";l.style.height=
h.height+"px";h=h.fontSize;null!==h&&(l.style.fontSize=h+"em")}}],["update-state",h=>{this.h.get(h.elementId);throw Error("required override");}],["focus",h=>this.ma(h)],["set-css-style",h=>{this.h.get(h.elementId).style[h.prop]=h.val}],["set-attribute",h=>{this.h.get(h.elementId).setAttribute(h.name,h.val)}],["remove-attribute",h=>{this.h.get(h.elementId).removeAttribute(h.name)}]]);I(this,h=>h)}ma(g){var e=this.h.get(g.elementId);g.focus?e.focus():e.blur()}};"use strict";
{const g=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);function e(b,a){const c=document.createElement("script");c.async=!1;"module"===a&&(c.type="module");if(b.cc)c.textContent=b.fc,document.head.appendChild(c);else return new Promise((d,f)=>{c.onload=d;c.onerror=f;c.src=b;document.head.appendChild(c)})}let h=!1,l=!1;function u(){if(!h){try{new Worker("blob://",{get type(){l=!0}})}catch(b){}h=!0}return l}let t=new Audio;const F={"audio/webm; codecs=opus":!!t.canPlayType("audio/webm; codecs=opus"),
"audio/ogg; codecs=opus":!!t.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!t.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!t.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!t.canPlayType("audio/mp4"),"audio/mpeg":!!t.canPlayType("audio/mpeg")};t=null;async function G(b){b=await v(b);return(new TextDecoder("utf-8")).decode(b)}function v(b){return new Promise((a,c)=>{const d=new FileReader;d.onload=f=>a(f.target.result);d.onerror=f=>c(f);d.readAsArrayBuffer(b)})}
const A=[];let x=0;window.RealFile=window.File;const w=[],B=new Map,q=new Map;let C=0;const y=[];self.runOnStartup=function(b){if("function"!==typeof b)throw Error("runOnStartup called without a function");y.push(b)};const D=new Set(["cordova","playable-ad","instant-games"]);window.P=class b{constructor(a){this.l=a.ic;this.I=null;this.c="";this.Y=a.ec;this.i=a.Ya;this.L={};this.ta=this.Va=null;this.U=[];this.H=this.g=this.wa=null;this.u=-1;this.Yb=()=>this.Ib();this.Ua=[];this.b=a.Wa;!this.l||"undefined"!==
typeof OffscreenCanvas&&navigator.userActivation&&("module"!==this.i||u())||(this.l=!1);D.has(this.b)&&this.l&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.l=!1);this.W=this.j=null;"html5"!==this.b&&"playable-ad"!==this.b||"file"!==location.protocol.substr(0,4)||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");
this.a("runtime","cordova-fetch-local-file",c=>this.vb(c));this.a("runtime","create-job-worker",()=>this.wb());"cordova"===this.b?document.addEventListener("deviceready",()=>this.Fa(a)):this.Fa(a)}Ba(){return g&&"cordova"===this.b}O(){return g&&D.has(this.b)||navigator.standalone}async Fa(a){if("playable-ad"===this.b){this.j=self.c3_base64files;this.W={};await this.kb();for(let d=0,f=a.B.length;d<f;++d){var c=a.B[d].toLowerCase();this.W.hasOwnProperty(c)?a.B[d]={cc:!0,fc:this.W[c]}:this.j.hasOwnProperty(c)&&
(a.B[d]=URL.createObjectURL(this.j[c]))}}a.$b?this.c=a.$b:(c=location.origin,this.c=("null"===c?"file:///":c)+location.pathname,c=this.c.lastIndexOf("/"),-1!==c&&(this.c=this.c.substr(0,c+1)));a.kc&&(this.L=a.kc);c=new MessageChannel;this.I=c.port1;this.I.onmessage=d=>this._OnMessageFromRuntime(d.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(d=>this.Fb(d));this.H=new self.bb(this);await J(this.H);this.Ca();"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===
typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();this.l?await this.rb(a,c.port2):await this.qb(a,c.port2)}ea(a){a=this.L.hasOwnProperty(a)?this.L[a]:a.endsWith("/workermain.js")&&this.L.hasOwnProperty("workermain.js")?this.L["workermain.js"]:"playable-ad"===this.b&&this.j.hasOwnProperty(a.toLowerCase())?this.j[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async aa(a,c,d){if(a.startsWith("blob:"))return new Worker(a,d);if(this.Ba()&&"file:"===location.protocol)return a=
await this.$(this.Y+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),d);a=new URL(a,c);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),d)}return new Worker(a,d)}o(){return Math.max(window.innerWidth,1)}m(){return Math.max(window.innerHeight,1)}Ca(){if(this.O()){const a=document.documentElement.style,c=document.body.style,d=window.innerWidth<window.innerHeight,
f=d?window.screen.width:window.screen.height;c.height=a.height=(d?window.screen.height:window.screen.width)+"px";c.width=a.width=f+"px"}}Ea(a){var c=this.H;return{baseUrl:this.c,windowInnerWidth:this.o(),windowInnerHeight:this.m(),devicePixelRatio:window.devicePixelRatio,isFullscreen:b.ba(),projectData:a.rc,scriptsType:a.Ya,previewImageBlobs:window.cr_previewImageBlobs||this.j,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,previewProjectFileUrls:window.cr_previewProjectFiles,swClientId:window.pc||
"",exportType:a.Wa,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.qc,jobScheduler:{inputPort:c.ra,outputPort:c.va,maxNumWorkers:c.Wb},supportedAudioFormats:F,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.Y+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.Y+"opus.wasm.wasm",isiOSCordova:this.Ba(),isiOSWebView:this.O(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async rb(a,c){var d=this.ea(a.jc);this.Va=await this.aa(d,this.c,{type:this.i,name:"Runtime"});
this.g=document.createElement("canvas");this.g.style.display="none";d=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;this.Va.postMessage(Object.assign(this.Ea(a),{type:"init-runtime",isInWorker:!0,messagePort:c,canvas:d,workerDependencyScripts:a.ya||[],engineScripts:a.B,projectScripts:a.M,mainProjectScript:a.Xa,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[c,d,...K(this.H)]);this.U=w.map(f=>new f(this));this.Da();self.c3_callFunction=(f,k)=>this.wa.sb(f,
k);"preview"===this.b&&(self.goToLastErrorScript=()=>this.ca("runtime","go-to-last-error-script"))}async qb(a,c){this.g=document.createElement("canvas");this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.U=w.map(k=>new k(this));this.Da();var d=a.B.map(k=>"string"===typeof k?(new URL(k,this.c)).toString():k);Array.isArray(a.ya)&&d.unshift(...a.ya);d=await Promise.all(d.map(k=>this.ga(k,this.i)));await Promise.all(d.map(k=>e(k,this.i)));const f=self.C3_ProjectScriptsStatus;
if("module"===this.i){d=a.Xa;const k=a.M;for(let [n,m]of k)if(m||(m=n),n===d)try{m=await this.ga(m,this.i),await e(m,this.i),"preview"!==this.b||f[n]||this.La(n,"main script did not run to completion")}catch(r){this.La(n,r)}else if("scriptsInEvents.js"===n||n.endsWith("/scriptsInEvents.js"))m=await this.ga(m,this.i),await e(m,this.i)}else if(a.M&&0<a.M.length)try{if(await Promise.all(a.M.map(k=>e(k[1],this.i))),Object.values(f).some(k=>!k)){self.setTimeout(()=>this.Ma(f),100);return}}catch(k){console.error("[Preview] Error loading project scripts: ",
k);self.setTimeout(()=>this.Ma(f),100);return}"preview"===this.b&&"object"!==typeof self.lc.nc?(this.D(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Ea(a),{isInWorker:!1,messagePort:c,canvas:this.g,runOnStartupFunctions:y}),this.Ha(),this.ta=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.ta,
a))}Ma(a){this.D();a=`Failed to load project script '${Object.entries(a).filter(c=>!c[1]).map(c=>c[0])[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+a);alert(a)}La(a,c){this.D();console.error(`[Preview] Failed to load project main script (${a}): `,c);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Ha(){this.D()}D(){const a=window.ac;a&&(a.parentElement.removeChild(a),
window.ac=null)}async wb(){const a=await L(this.H);return{outputPort:a,transferables:[a]}}pb(){if(this.l)throw Error("not available in worker mode");return this.ta}ca(a,c,d,f,k){this.I.postMessage({type:"event",component:a,handler:c,dispatchOpts:f||null,data:d,responseId:null},k)}cb(a,c){const d=C++,f=new Promise((k,n)=>{q.set(d,{resolve:k,reject:n})});this.I.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:c,responseId:d},void 0);return f}["_OnMessageFromRuntime"](a){const c=
a.type;if("event"===c)return this.Bb(a);if("result"===c)this.Lb(a);else if("runtime-ready"===c)this.Mb();else if("alert-error"===c)this.D(),alert(a.message);else if("creating-runtime"===c)this.Ha();else throw Error(`unknown message '${c}'`);}Bb(a){const c=a.component,d=a.handler,f=a.data,k=a.responseId;if(a=B.get(c))if(a=a.get(d)){var n=null;try{n=a(f)}catch(m){console.error(`Exception in '${c}' handler '${d}':`,m);null!==k&&this.S(k,!1,""+m);return}if(null===k)return n;n&&n.then?n.then(m=>this.S(k,
!0,m)).catch(m=>{console.error(`Rejection from '${c}' handler '${d}':`,m);this.S(k,!1,""+m)}):this.S(k,!0,n)}else console.warn(`[DOM] No handler '${d}' for component '${c}'`);else console.warn(`[DOM] No event handlers for component '${c}'`)}S(a,c,d){let f;d&&d.transferables&&(f=d.transferables);this.I.postMessage({type:"result",responseId:a,isOk:c,result:d},f)}Lb(a){const c=a.responseId,d=a.isOk;a=a.result;const f=q.get(c);d?f.resolve(a):f.reject(a);q.delete(c)}a(a,c,d){let f=B.get(a);f||(f=new Map,
B.set(a,f));if(f.has(c))throw Error(`[DOM] Component '${a}' already has handler '${c}'`);f.set(c,d)}static Z(a){if(w.includes(a))throw Error("DOM handler already added");w.push(a)}Da(){for(const a of this.U)if("runtime"===a.F){this.wa=a;return}throw Error("cannot find runtime DOM handler");}Fb(a){this.ca("debugger","message",a)}Mb(){for(const a of this.U)a.za()}static ba(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}Na(){-1===this.u&&this.Ua.length&&
(this.u=requestAnimationFrame(this.Yb))}ib(){-1!==this.u&&(cancelAnimationFrame(this.u),this.u=-1)}Ib(){this.u=-1;for(const a of this.Ua)a();this.Na()}oa(){this.wa.oa()}$a(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}ab(a){return!this.$a(a)}async ga(a,c){return"cordova"===this.b&&"module"===c&&(a.startsWith("file:")||"file:"===location.protocol&&this.ab(a))?(a.startsWith(this.c)&&(a=a.substr(this.c.length)),a=await this.$(a),URL.createObjectURL(new Blob([a],
{type:"application/javascript"}))):a}async vb(a){const c=a.filename;switch(a.as){case "text":return await this.Za(c);case "buffer":return await this.$(c);default:throw Error("unsupported type");}}Aa(a){const c=window.cordova.file.applicationDirectory+"www/"+a.toLowerCase();return new Promise((d,f)=>{window.resolveLocalFileSystemURL(c,k=>{k.file(d,f)},f)})}async Za(a){a=await this.Aa(a);return await G(a)}da(){if(A.length&&!(8<=x)){x++;var a=A.shift();this.lb(a.filename,a.hc,a.bc)}}$(a){return new Promise((c,
d)=>{A.push({filename:a,hc:f=>{x--;this.da();c(f)},bc:f=>{x--;this.da();d(f)}});this.da()})}async lb(a,c,d){try{const f=await this.Aa(a),k=await v(f);c(k)}catch(f){d(f)}}async kb(){const a=[];for(const [c,d]of Object.entries(this.j))a.push(this.jb(c,d));await Promise.all(a)}async jb(a,c){if("object"===typeof c)this.j[a]=new Blob([c.str],{type:c.type}),this.W[a]=c.str;else{let d=await this.ob(c);d||(d=this.mb(c));this.j[a]=d}}async ob(a){try{return await (await fetch(a)).blob()}catch(c){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
c),null}}mb(a){a=this.Qb(a);return this.hb(a.data,a.dc)}Qb(a){var c=a.indexOf(",");if(0>c)throw new URIError("expected comma in data: uri");var d=a.substring(c+1);c=a.substring(5,c).split(";");a=c[0]||"";const f=c[2];d="base64"===c[1]||"base64"===f?atob(d):decodeURIComponent(d);return{dc:a,data:d}}hb(a,c){var d=a.length;let f=d>>2,k=new Uint8Array(d),n=new Uint32Array(k.buffer,0,f),m,r;for(r=m=0;m<f;++m)n[m]=a.charCodeAt(r++)|a.charCodeAt(r++)<<8|a.charCodeAt(r++)<<16|a.charCodeAt(r++)<<24;for(d&=
3;d--;)k[r]=a.charCodeAt(r),++r;return new Blob([k],{type:c})}}}"use strict";
{const g=self.P;function e(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const h=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),l={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},u={dispatchUserScriptEvent:!0},t={dispatchRuntimeEvent:!0};function F(b){return new Promise((a,c)=>{const d=document.createElement("link");d.onload=()=>a(d);d.onerror=f=>c(f);d.rel=
"stylesheet";d.href=b;document.head.appendChild(d)})}function G(b){return new Promise((a,c)=>{const d=new Image;d.onload=()=>a(d);d.onerror=f=>c(f);d.src=b})}async function v(b){b=URL.createObjectURL(b);try{return await G(b)}finally{URL.revokeObjectURL(b)}}function A(b){return new Promise((a,c)=>{let d=new FileReader;d.onload=f=>a(f.target.result);d.onerror=f=>c(f);d.readAsText(b)})}async function x(b,a,c){if(!/firefox/i.test(navigator.userAgent))return await v(b);var d=await A(b);d=(new DOMParser).parseFromString(d,
"image/svg+xml");const f=d.documentElement;if(f.hasAttribute("width")&&f.hasAttribute("height")){const k=f.getAttribute("width"),n=f.getAttribute("height");if(!k.includes("%")&&!n.includes("%"))return await v(b)}f.setAttribute("width",a+"px");f.setAttribute("height",c+"px");d=(new XMLSerializer).serializeToString(d);b=new Blob([d],{type:"image/svg+xml"});return await v(b)}function w(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const B=new Set(["canvas",
"body","html"]);function q(b){B.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function C(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await v(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const a=b.getBoundingClientRect();document.body.removeChild(b);return[a.width,a.height]}};self.C3_RasterSvgImageBlob=async function(b,
a,c,d,f){b=await x(b,a,c);const k=document.createElement("canvas");k.width=d;k.height=f;k.getContext("2d").drawImage(b,0,0,a,c);return k};let y=!1;document.addEventListener("pause",()=>y=!0);document.addEventListener("resume",()=>y=!1);function D(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}g.Z(class extends self.N{constructor(b){super(b,"runtime");this.Sa=!0;this.v=-1;this.xa="any";this.Oa=this.Pa=!1;this.sa=this.K=this.s=null;b.a("canvas","update-size",d=>this.Ob(d));
b.a("runtime","invoke-download",d=>this.Eb(d));b.a("runtime","raster-svg-image",d=>this.Jb(d));b.a("runtime","get-svg-image-size",d=>this.Cb(d));b.a("runtime","set-target-orientation",d=>this.Nb(d));b.a("runtime","register-sw",()=>this.Kb());b.a("runtime","post-to-debugger",d=>this.Ja(d));b.a("runtime","go-to-script",d=>this.Ja(d));b.a("runtime","before-start-ticking",()=>this.ub());b.a("runtime","debug-highlight",d=>this.xb(d));b.a("runtime","enable-device-orientation",()=>this.gb());b.a("runtime",
"enable-device-motion",()=>this.fb());b.a("runtime","add-stylesheet",d=>this.tb(d));b.a("runtime","alert",d=>this.ha(d));b.a("runtime","hide-cordova-splash",()=>this.Db());const a=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",d=>{const f=d.target;a.has(f.tagName.toLowerCase())||w(f)||d.preventDefault()});const c=b.g;window.addEventListener("selectstart",q);window.addEventListener("gesturehold",q);c.addEventListener("selectstart",q);c.addEventListener("gesturehold",
q);window.addEventListener("touchstart",q,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",q,{passive:!1}),c.addEventListener("pointerdown",q)):c.addEventListener("touchstart",q);this.J=0;window.addEventListener("mousedown",d=>{1===d.button&&d.preventDefault()});window.addEventListener("mousewheel",C,{passive:!1});window.addEventListener("wheel",C,{passive:!1});window.addEventListener("resize",()=>this.Pb());b.O()&&window.addEventListener("focusout",()=>{{const k=
document.activeElement;if(k){var d=k.tagName.toLowerCase();var f=new Set("email number password search tel text url".split(" "));d="textarea"===d?!0:"input"===d?f.has(k.type.toLowerCase()||"text"):w(k)}else d=!1}d||(document.scrollingElement.scrollTop=0)});this.ua=new Set;this.Xb=new WeakSet;this.Vb=!1}ub(){"cordova"===this.f.b?(document.addEventListener("pause",()=>this.na(!0)),document.addEventListener("resume",()=>this.na(!1))):document.addEventListener("visibilitychange",()=>this.na(document.hidden));
return{isSuspended:!(!document.hidden&&!y)}}za(){window.addEventListener("focus",()=>this.T("window-focus"));window.addEventListener("blur",()=>{this.T("window-blur",{parentHasFocus:D()});this.J=0});window.addEventListener("fullscreenchange",()=>this.ia());window.addEventListener("webkitfullscreenchange",()=>this.ia());window.addEventListener("mozfullscreenchange",()=>this.ia());window.addEventListener("fullscreenerror",a=>this.ja(a));window.addEventListener("webkitfullscreenerror",a=>this.ja(a));
window.addEventListener("mozfullscreenerror",a=>this.ja(a));window.addEventListener("keydown",a=>this.Ia("keydown",a));window.addEventListener("keyup",a=>this.Ia("keyup",a));window.addEventListener("dblclick",a=>this.ka("dblclick",a,l));window.addEventListener("wheel",a=>this.Gb(a));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",a=>{this.fa(a);this.C("pointerdown",a)}),this.f.l&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.K=new self.eb(()=>this.nb(),
5),this.K.Ra=!0,window.addEventListener("pointerrawupdate",a=>this.Hb(a))):window.addEventListener("pointermove",a=>this.C("pointermove",a)),window.addEventListener("pointerup",a=>this.C("pointerup",a)),window.addEventListener("pointercancel",a=>this.C("pointercancel",a))):(window.addEventListener("mousedown",a=>{this.fa(a);this.la("pointerdown",a)}),window.addEventListener("mousemove",a=>this.la("pointermove",a)),window.addEventListener("mouseup",a=>this.la("pointerup",a)),window.addEventListener("touchstart",
a=>{this.fa(a);this.R("pointerdown",a)}),window.addEventListener("touchmove",a=>this.R("pointermove",a)),window.addEventListener("touchend",a=>this.R("pointerup",a)),window.addEventListener("touchcancel",a=>this.R("pointercancel",a)));const b=()=>this.oa();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0)}T(b,a){p(this,b,a||null,t)}o(){return this.f.o()}m(){return this.f.m()}Pb(){const b=
this.o(),a=this.m();this.T("window-resize",{innerWidth:b,innerHeight:a,devicePixelRatio:window.devicePixelRatio});this.f.O()&&(-1!==this.v&&clearTimeout(this.v),this.Ka(b,a,0))}Rb(b,a,c){-1!==this.v&&clearTimeout(this.v);this.v=setTimeout(()=>this.Ka(b,a,c),48)}Ka(b,a,c){const d=this.o(),f=this.m();this.v=-1;d!=b||f!=a?this.T("window-resize",{innerWidth:d,innerHeight:f,devicePixelRatio:window.devicePixelRatio}):10>c&&this.Rb(d,f,c+1)}Nb(b){this.xa=b.targetOrientation}Sb(){const b=this.xa;if(screen.orientation&&
screen.orientation.lock)screen.orientation.lock(b).catch(a=>console.warn("[Construct 3] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(b):screen.webkitLockOrientation?a=screen.webkitLockOrientation(b):screen.mozLockOrientation?a=screen.mozLockOrientation(b):screen.msLockOrientation&&(a=screen.msLockOrientation(b));a||console.warn("[Construct 3] Failed to lock orientation")}catch(a){console.warn("[Construct 3] Failed to lock orientation: ",a)}}ia(){const b=
g.ba();b&&"any"!==this.xa&&this.Sb();p(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.o(),innerHeight:this.m()})}ja(b){console.warn("[Construct 3] Fullscreen request failed: ",b);p(this,"fullscreenerror",{isFullscreen:g.ba(),innerWidth:this.o(),innerHeight:this.m()})}na(b){b?this.f.ib():this.f.Na();p(this,"visibilitychange",{hidden:b})}Ia(b,a){"Backspace"===a.key&&q(a);const c=h.get(a.code)||a.code;z(this,b,{code:c,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,
metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},l)}Gb(b){p(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,deltaMode:b.deltaMode,timeStamp:b.timeStamp},l)}ka(b,a,c){e(a)||z(this,b,{button:a.button,buttons:a.buttons,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,timeStamp:a.timeStamp},c)}la(b,a){if(!e(a)){var c=this.J;"pointerdown"===b&&0!==c?b="pointermove":"pointerup"===b&&0!==a.buttons&&(b=
"pointermove");z(this,b,{pointerId:1,pointerType:"mouse",button:a.button,buttons:a.buttons,lastButtons:c,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:a.timeStamp},l);this.J=a.buttons;this.ka(a.type,a,u)}}C(b,a){if(this.K&&"pointermove"!==b){var c=this.K;c.G||(-1!==c.A&&(self.clearTimeout(c.A),c.A=-1),c.V=Date.now())}c=0;"mouse"===a.pointerType&&(c=this.J);z(this,b,{pointerId:a.pointerId,pointerType:a.pointerType,
button:a.button,buttons:a.buttons,lastButtons:c,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},l);"mouse"===a.pointerType&&(c="mousemove","pointerdown"===b?c="mousedown":"pointerup"===b&&(c="mouseup"),this.ka(c,a,u),this.J=a.buttons)}Hb(b){this.sa=b;b=this.K;if(-1===b.A){var a=Date.now(),c=a-b.V,d=b.Ub;c>=d&&
b.Ra?(b.V=a,b.G=!0,b.Qa(),b.G=!1):b.A=self.setTimeout(b.Zb,Math.max(d-c,4))}}nb(){this.C("pointermove",this.sa);this.sa=null}R(b,a){for(let c=0,d=a.changedTouches.length;c<d;++c){const f=a.changedTouches[c];z(this,b,{pointerId:f.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:f.clientX,clientY:f.clientY,pageX:f.pageX,pageY:f.pageY,width:2*(f.radiusX||f.webkitRadiusX||0),height:2*(f.radiusY||f.webkitRadiusY||0),pressure:f.force||f.webkitForce||0,tangentialPressure:0,tiltX:0,
tiltY:0,twist:f.rotationAngle||0,timeStamp:a.timeStamp},l)}}fa(b){window!==window.top&&window.focus();this.Ga(b.target)&&document.activeElement&&!this.Ga(document.activeElement)&&document.activeElement.blur()}Ga(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}gb(){this.Pa||(this.Pa=!0,window.addEventListener("deviceorientation",b=>this.zb(b)),window.addEventListener("deviceorientationabsolute",b=>this.Ab(b)))}fb(){this.Oa||(this.Oa=!0,window.addEventListener("devicemotion",
b=>this.yb(b)))}zb(b){p(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},l)}Ab(b){p(this,"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},l)}yb(b){let a=null;var c=b.acceleration;c&&(a={x:c.x||0,y:c.y||0,z:c.z||0});c=null;var d=b.accelerationIncludingGravity;d&&(c={x:d.x||
0,y:d.y||0,z:d.z||0});d=null;const f=b.rotationRate;f&&(d={alpha:f.alpha||0,beta:f.beta||0,gamma:f.gamma||0});p(this,"devicemotion",{acceleration:a,accelerationIncludingGravity:c,rotationRate:d,interval:b.interval,timeStamp:b.timeStamp},l)}Ob(b){const a=this.f,c=a.g;c.style.width=b.styleWidth+"px";c.style.height=b.styleHeight+"px";c.style.marginLeft=b.marginLeft+"px";c.style.marginTop=b.marginTop+"px";a.Ca();this.Sa&&(c.style.display="",this.Sa=!1)}Eb(b){const a=b.url;b=b.filename;const c=document.createElement("a"),
d=document.body;c.textContent=b;c.href=a;c.download=b;d.appendChild(c);c.click();d.removeChild(c)}async Jb(b){var a=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);a=a?await createImageBitmap(b,a):await createImageBitmap(b);return{imageBitmap:a,transferables:[a]}}async Cb(b){return await self.C3_GetSvgImageSize(b.blob)}async tb(b){await F(b.url)}oa(){var b=[...this.ua];this.ua.clear();if(!this.Vb)for(const a of b)(b=a.play())&&
b.catch(()=>{this.Xb.has(a)||this.ua.add(a)})}Db(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}xb(b){if(b.show){this.s||(this.s=document.createElement("div"),this.s.id="inspectOutline",document.body.appendChild(this.s));var a=this.s;a.style.display="";a.style.left=b.left-1+"px";a.style.top=b.top-1+"px";a.style.width=b.width+2+"px";a.style.height=b.height+2+"px";a.textContent=b.name}else this.s&&(this.s.style.display="none")}Kb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Ja(b){window.c3_postToMessagePort&&
(b.from="runtime",window.c3_postToMessagePort(b))}sb(b,a){return this.f.cb(this.F,{name:b,params:a})}ha(b){alert(b.message)}})}"use strict";async function J(g){if(g.Tb)throw Error("already initialised");g.Tb=!0;var e=g.X.ea("dispatchworker.js");g.qa=await g.X.aa(e,g.c,{name:"DispatchWorker"});e=new MessageChannel;g.ra=e.port1;g.qa.postMessage({type:"_init","in-port":e.port2},[e.port2]);g.va=await L(g)}function K(g){return[g.ra,g.va]}
async function L(g){const e=g.Ta.length;var h=g.X.ea("jobworker.js");h=await g.X.aa(h,g.c,{name:"JobWorker"+e});const l=new MessageChannel,u=new MessageChannel;g.qa.postMessage({type:"_addJobWorker",port:l.port1},[l.port1]);h.postMessage({type:"init",number:e,"dispatch-port":l.port2,"output-port":u.port2},[l.port2,u.port2]);g.Ta.push(h);return u.port1}
self.bb=class{constructor(g){this.X=g;this.c=g.c;this.c="preview"===g.b?this.c+"c3/workers/":this.c+g.Y;this.Wb=Math.min(navigator.hardwareConcurrency||2,16);this.qa=null;this.Ta=[];this.va=this.ra=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.P({ic:!1,jc:"workermain.js",B:["scripts/c3runtime.js"],M:[],Xa:"",Ya:"module",ec:"scripts/",ya:[],Wa:"html5"}));"use strict";
async function M(g,e){e=e.type;let h=!0;0===e?h=await O():1===e&&(h=await Q());p(g,"permission-result",{type:e,result:h})}async function O(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(g){return console.warn("[Touch] Failed to request orientation permission: ",g),!1}}
async function Q(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(g){return console.warn("[Touch] Failed to request motion permission: ",g),!1}}self.P.Z(class extends self.N{constructor(g){super(g,"touch");E(this,"request-permission",e=>M(this,e))}});"use strict";
function R(g){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(e=>p(g,"sw-message",e.data))}
function S(g){g=g.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(g).catch(e=>console.warn("[Construct 3] Failed to lock orientation: ",e));else try{let e=!1;screen.lockOrientation?e=screen.lockOrientation(g):screen.webkitLockOrientation?e=screen.webkitLockOrientation(g):screen.mozLockOrientation?e=screen.mozLockOrientation(g):screen.msLockOrientation&&(e=screen.msLockOrientation(g));e||console.warn("[Construct 3] Failed to lock orientation")}catch(e){console.warn("[Construct 3] Failed to lock orientation: ",
e)}}
self.P.Z(class extends self.N{constructor(g){super(g,"browser");this.b="";H(this,[["get-initial-state",e=>{this.b=e.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!==typeof window.is_scirra_arcade}}],["ready-for-sw-messages",()=>R(this)],
["alert",e=>this.ha(e)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",e=>this.ma(e)],["vibrate",e=>{navigator.vibrate&&navigator.vibrate(e.pattern)}],["lock-orientation",e=>S(e)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():
screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(e){}}],["navigate",e=>{var h=e.type;if("back"===h)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===h)window.forward();else if("home"===h)window.home();else if("reload"===h)location.reload();else if("url"===h){h=e.url;var l=e.target;e=e.exportType;"windows-uwp"===e&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(h)):
self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(h,"_system"):"preview"===e?window.open(h,"_blank"):this.oc||(2===l?window.top.location=h:1===l?window.parent.location=h:window.location=h)}else"new-window"===h&&(h=e.url,l=e.tag,"windows-uwp"===e.exportType&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(h)):self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(h,"_system"):window.open(h,l))}],["request-fullscreen",
e=>{{const h={navigationUI:"auto"};e=e.navUI;1===e?h.navigationUI="hide":2===e&&(h.navigationUI="show");e=document.documentElement;e.requestFullscreen?e.requestFullscreen(h):e.mozRequestFullScreen?e.mozRequestFullScreen(h):e.msRequestFullscreen?e.msRequestFullscreen(h):e.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):e.webkitRequestFullScreen())}}],["exit-fullscreen",()=>{document.exitFullscreen?document.exitFullscreen():
document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",e=>{location.hash=e.hash}]]);window.addEventListener("online",()=>{p(this,"online-state",{isOnline:!0})});window.addEventListener("offline",()=>{p(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{p(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",
()=>{p(this,"backbutton")});"undefined"!==typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",e=>{e.handled=!0;p(this,"backbutton")})}ha(g){alert(g.message)}ma(g){g=g.isFocus;if("nwjs"===this.b){const e="nwjs"===this.b?nw.Window.get():null;g?e.focus():e.blur()}else g?window.focus():window.blur()}});
