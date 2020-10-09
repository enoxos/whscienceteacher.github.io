'use strict';function r(l,k,g,m){l.g.W(l.A,k,g,m,void 0)}function w(l,k,g,m){l.g.j?r(l,k,g,m):l.g.jb()._OnMessageFromDOM({type:"event",component:l.A,handler:k,dispatchOpts:m||null,data:g,responseId:null})}function D(l,k,g){l.g.a(l.A,k,g)}function E(l,k){for(const [g,m]of k)D(l,g,m)}window.U=class{constructor(l,k){this.g=l;this.A=k}sa(){}};
window.Ya=class{constructor(l,k){this.Ja=l;this.Qb=k;this.s=-1;this.P=-Infinity;this.Vb=()=>{this.s=-1;this.P=Date.now();this.B=!0;this.Ja();this.B=!1};this.Ka=this.B=!1}};"use strict";function F(l,k){D(l,"get-element",g=>{const m=l.h.get(g.elementId);return k(m,g)})}
window.hc=class extends self.U{constructor(l,k){super(l,k);this.h=new Map;this.ga=!0;E(this,[["create",()=>{throw Error("required override");}],["destroy",g=>{{g=g.elementId;const m=this.h.get(g);this.ga&&m.parentElement.removeChild(m);this.h.delete(g)}}],["set-visible",g=>{this.ga&&(this.h.get(g.elementId).style.display=g.isVisible?"":"none")}],["update-position",g=>{if(this.ga){var m=this.h.get(g.elementId);m.style.left=g.left+"px";m.style.top=g.top+"px";m.style.width=g.width+"px";m.style.height=
g.height+"px";g=g.fontSize;null!==g&&(m.style.fontSize=g+"em")}}],["update-state",g=>{this.h.get(g.elementId);throw Error("required override");}],["focus",g=>{{const m=this.h.get(g.elementId);g.focus?m.focus():m.blur()}}],["set-css-style",g=>{this.h.get(g.elementId).style[g.prop]=g.val}],["set-attribute",g=>{this.h.get(g.elementId).setAttribute(g.name,g.val)}],["remove-attribute",g=>{this.h.get(g.elementId).removeAttribute(g.name)}]]);F(this,g=>g)}};"use strict";
{const l=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);function k(p){if(p.Yb){const c=document.createElement("script");c.async=!1;c.textContent=p.ac;document.head.appendChild(c)}else return new Promise((c,e)=>{const a=document.createElement("script");a.onload=c;a.onerror=e;a.async=!1;a.src=p;document.head.appendChild(a)})}let g=new Audio;const m={"audio/webm; codecs=opus":!!g.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!g.canPlayType("audio/ogg; codecs=opus"),
"audio/webm; codecs=vorbis":!!g.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!g.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!g.canPlayType("audio/mp4"),"audio/mpeg":!!g.canPlayType("audio/mpeg")};g=null;async function u(p){p=await A(p);return(new TextDecoder("utf-8")).decode(p)}function A(p){return new Promise((c,e)=>{const a=new FileReader;a.onload=b=>c(b.target.result);a.onerror=b=>e(b);a.readAsArrayBuffer(p)})}const x=[];let v=0;window.RealFile=window.File;const t=
[],y=new Map,z=new Map;let B=0;const C=[];self.mc=function(p){if("function"!==typeof p)throw Error("runOnStartup called without a function");C.push(p)};const q=new Set(["cordova","playable-ad","instant-games"]);window.X=class p{constructor(c){this.j=c.cc;this.D=null;this.b="";this.oa=c.$b;this.H={};this.ka=this.Pa=null;this.O=[];this.C=this.c=this.na=null;this.m=-1;this.Ub=()=>this.Db();this.Na=[];this.f=c.Qa;!this.j||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation||(this.j=!1);q.has(this.f)&&
this.j&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.j=!1);this.Oa=!1;this.R=this.i=null;"html5"!==this.f&&"playable-ad"!==this.f||"file"!==location.protocol.substr(0,4)||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");this.a("runtime","cordova-fetch-local-file",e=>this.qb(e));this.a("runtime",
"create-job-worker",()=>this.rb());"cordova"===this.f?document.addEventListener("deviceready",()=>this.Aa(c)):this.Aa(c)}va(){return l&&"cordova"===this.f}I(){return l&&q.has(this.f)||navigator.standalone}async Aa(c){if("playable-ad"===this.f){this.i=self.c3_base64files;this.R={};await this.eb();for(let a=0,b=c.u.length;a<b;++a){var e=c.u[a].toLowerCase();this.R.hasOwnProperty(e)?c.u[a]={Yb:!0,ac:this.R[e]}:this.i.hasOwnProperty(e)&&(c.u[a]=URL.createObjectURL(this.i[e]))}}c.Wb?this.b=c.Wb:(e=location.origin,
this.b=("null"===e?"file:///":e)+location.pathname,e=this.b.lastIndexOf("/"),-1!==e&&(this.b=this.b.substr(0,e+1)));if(c.ec)for(const [a,b]of Object.entries(c.ec))this.H[a]=URL.createObjectURL(b);e=new MessageChannel;this.D=e.port1;this.D.onmessage=a=>this._OnMessageFromRuntime(a.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(a=>this.Ab(a));this.C=new self.Wa(this);await this.C.Va();this.wa();"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&
window.AndroidFullScreen.immersiveMode();await this.Nb();this.j?await this.lb(c,e.port2):await this.kb(c,e.port2)}Z(c){return this.H.hasOwnProperty(c)?this.H[c]:c.endsWith("/workermain.js")&&this.H.hasOwnProperty("workermain.js")?this.H["workermain.js"]:"playable-ad"===this.f&&this.i.hasOwnProperty(c.toLowerCase())?URL.createObjectURL(this.i[c.toLowerCase()]):c}async T(c,e,a){if(c.startsWith("blob:"))return new Worker(c,a);if(this.va()&&"file:"===location.protocol)return c=await this.ua(this.oa+c),
new Worker(URL.createObjectURL(new Blob([c],{type:"application/javascript"})),a);c=new URL(c,e);if(location.origin!==c.origin){c=await fetch(c);if(!c.ok)throw Error("failed to fetch worker script");c=await c.blob();return new Worker(URL.createObjectURL(c),a)}return new Worker(c,a)}wa(){if(this.I()){const c=document.documentElement.style,e=document.body.style,a=window.innerWidth<window.innerHeight,b=a?window.screen.width:window.screen.height;e.height=c.height=(a?window.screen.height:window.screen.width)+
"px";e.width=c.width=b+"px"}}za(c){return{baseUrl:this.b,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:p.V(),projectData:c.lc,previewImageBlobs:window.cr_previewImageBlobs||this.i,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:c.Qa,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.kc,jobScheduler:this.C.Ta(),supportedAudioFormats:m,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.oa+
"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.oa+"opus.wasm.wasm",isiOSCordova:this.va(),isiOSWebView:this.I(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async lb(c,e){var a=this.Z(c.dc);this.Pa=await this.T(a,this.b,{name:"Runtime"});this.c=document.createElement("canvas");this.c.style.display="none";a=this.c.transferControlToOffscreen();document.body.appendChild(this.c);window.c3canvas=this.c;this.Pa.postMessage(Object.assign(this.za(c),{type:"init-runtime",isInWorker:!0,
messagePort:e,canvas:a,workerDependencyScripts:c.qa||[],engineScripts:c.u,projectScripts:window.jc,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[e,a,...this.C.Ua()]);this.O=t.map(b=>new b(this));this.ya();self.c3_callFunction=(b,d)=>this.na.mb(b,d);"preview"===this.f&&(self.goToLastErrorScript=()=>this.W("runtime","go-to-last-error-script"))}async kb(c,e){this.c=document.createElement("canvas");this.c.style.display="none";document.body.appendChild(this.c);window.c3canvas=this.c;this.O=t.map(b=>
new b(this));this.ya();const a=c.u.map(b=>"string"===typeof b?(new URL(b,this.b)).toString():b);Array.isArray(c.qa)&&a.unshift(...c.qa);await Promise.all(a.map(b=>k(b)));if(c.Ra&&0<c.Ra.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(c.Ra.map(d=>k(d[1]))),Object.values(b).some(d=>!d)){self.setTimeout(()=>this.Fa(b),100);return}}catch(d){console.error("[Preview] Error loading project scripts: ",d);self.setTimeout(()=>this.Fa(b),100);return}}"preview"===this.f&&"object"!==typeof self.fc.ic?
(console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(c=Object.assign(this.za(c),{isInWorker:!1,messagePort:e,canvas:this.c,runOnStartupFunctions:C}),this.ka=self.C3_CreateRuntime(c),await self.C3_InitRuntime(this.ka,c))}Fa(c){c=`Failed to load project script '${Object.entries(c).filter(e=>!e[1]).map(e=>e[0])[0]}'. Check all your JavaScript code has valid syntax.`;
console.error("[Preview] "+c);alert(c)}async rb(){const c=await this.C.xa();return{outputPort:c,transferables:[c]}}jb(){if(this.j)throw Error("not available in worker mode");return this.ka}W(c,e,a,b,d){this.D.postMessage({type:"event",component:c,handler:e,dispatchOpts:b||null,data:a,responseId:null},this.Oa?void 0:d)}Xa(c,e){const a=B++,b=new Promise((d,f)=>{z.set(a,{resolve:d,reject:f})});this.D.postMessage({type:"event",component:c,handler:"js-invoke-function",dispatchOpts:null,data:e,responseId:a},
void 0);return b}["_OnMessageFromRuntime"](c){const e=c.type;if("event"===e)return this.wb(c);if("result"===e)this.Gb(c);else if("runtime-ready"===e)this.Hb();else if("alert"===e)alert(c.message);else throw Error(`unknown message '${e}'`);}wb(c){const e=c.component,a=c.handler,b=c.data,d=c.responseId;if(c=y.get(e))if(c=c.get(a)){var f=null;try{f=c(b)}catch(h){console.error(`Exception in '${e}' handler '${a}':`,h);null!==d&&this.M(d,!1,""+h);return}if(null===d)return f;f&&f.then?f.then(h=>this.M(d,
!0,h)).catch(h=>{console.error(`Rejection from '${e}' handler '${a}':`,h);this.M(d,!1,""+h)}):this.M(d,!0,f)}else console.warn(`[DOM] No handler '${a}' for component '${e}'`);else console.warn(`[DOM] No event handlers for component '${e}'`)}M(c,e,a){let b;a&&a.transferables&&(b=a.transferables);this.D.postMessage({type:"result",responseId:c,isOk:e,result:a},b)}Gb(c){const e=c.responseId,a=c.isOk;c=c.result;const b=z.get(e);a?b.resolve(c):b.reject(c);z.delete(e)}a(c,e,a){let b=y.get(c);b||(b=new Map,
y.set(c,b));if(b.has(e))throw Error(`[DOM] Component '${c}' already has handler '${e}'`);b.set(e,a)}static ra(c){if(t.includes(c))throw Error("DOM handler already added");t.push(c)}ya(){for(const c of this.O)if("runtime"===c.A){this.na=c;return}throw Error("cannot find runtime DOM handler");}Ab(c){this.W("debugger","message",c)}Hb(){for(const c of this.O)c.sa()}static V(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}Ga(){-1===this.m&&this.Na.length&&
(this.m=requestAnimationFrame(this.Ub))}bb(){-1!==this.m&&(cancelAnimationFrame(this.m),this.m=-1)}Db(){this.m=-1;for(const c of this.Na)c();this.Ga()}fa(){this.na.fa()}async qb(c){const e=c.filename;switch(c.as){case "text":return await this.Sa(e);case "buffer":return await this.ua(e);default:throw Error("unsupported type");}}ta(c){const e=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((a,b)=>{window.resolveLocalFileSystemURL(e,d=>{d.file(a,b)},b)})}async Sa(c){c=
await this.ta(c);return await u(c)}Y(){if(x.length&&!(8<=v)){v++;var c=x.shift();this.fb(c.filename,c.bc,c.Xb)}}ua(c){return new Promise((e,a)=>{x.push({filename:c,bc:b=>{v--;this.Y();e(b)},Xb:b=>{v--;this.Y();a(b)}});this.Y()})}async fb(c,e,a){try{const b=await this.ta(c),d=await A(b);e(d)}catch(b){a(b)}}async eb(){const c=[];for(const [e,a]of Object.entries(this.i))c.push(this.cb(e,a));await Promise.all(c)}async cb(c,e){if("object"===typeof e)this.i[c]=new Blob([e.str],{type:e.type}),this.R[c]=
e.str;else{let a=await this.ib(e);a||(a=this.gb(e));this.i[c]=a}}async ib(c){try{return await (await fetch(c)).blob()}catch(e){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",e),null}}gb(c){c=this.Lb(c);return this.ab(c.data,c.Zb)}Lb(c){var e=c.indexOf(",");if(0>e)throw new URIError("expected comma in data: uri");var a=c.substring(e+1);
e=c.substring(5,e).split(";");c=e[0]||"";const b=e[2];a="base64"===e[1]||"base64"===b?atob(a):decodeURIComponent(a);return{Zb:c,data:a}}ab(c,e){var a=c.length;let b=a>>2,d=new Uint8Array(a),f=new Uint32Array(d.buffer,0,b),h,n;for(n=h=0;h<b;++h)f[h]=c.charCodeAt(n++)|c.charCodeAt(n++)<<8|c.charCodeAt(n++)<<16|c.charCodeAt(n++)<<24;for(a&=3;a--;)d[n]=c.charCodeAt(n),++n;return new Blob([d],{type:e})}Nb(){let c=null;const e=new Promise(d=>c=d),a=new ArrayBuffer(1),b=new MessageChannel;b.port2.onmessage=
d=>{d.data&&d.data.arrayBuffer||(this.Oa=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables."));c()};b.port1.postMessage({arrayBuffer:a},[a]);return e}}}"use strict";
{const l=self.X;function k(a){return a.sourceCapabilities&&a.sourceCapabilities.firesTouchEvents||a.originalEvent&&a.originalEvent.sourceCapabilities&&a.originalEvent.sourceCapabilities.firesTouchEvents}const g=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),m={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},u={dispatchUserScriptEvent:!0},A={dispatchRuntimeEvent:!0};function x(a){return new Promise((b,d)=>{const f=document.createElement("link");f.onload=()=>b(f);f.onerror=h=>d(h);f.rel=
"stylesheet";f.href=a;document.head.appendChild(f)})}function v(a){return new Promise((b,d)=>{const f=new Image;f.onload=()=>b(f);f.onerror=h=>d(h);f.src=a})}async function t(a){a=URL.createObjectURL(a);try{return await v(a)}finally{URL.revokeObjectURL(a)}}function y(a){return new Promise((b,d)=>{let f=new FileReader;f.onload=h=>b(h.target.result);f.onerror=h=>d(h);f.readAsText(a)})}async function z(a,b,d){if(!/firefox/i.test(navigator.userAgent))return await t(a);var f=await y(a);f=(new DOMParser).parseFromString(f,
"image/svg+xml");const h=f.documentElement;if(h.hasAttribute("width")&&h.hasAttribute("height")){const n=h.getAttribute("width"),G=h.getAttribute("height");if(!n.includes("%")&&!G.includes("%"))return await t(a)}h.setAttribute("width",b+"px");h.setAttribute("height",d+"px");f=(new XMLSerializer).serializeToString(f);a=new Blob([f],{type:"image/svg+xml"});return await t(a)}function B(a){do{if(a.parentNode&&a.hasAttribute("contenteditable"))return!0;a=a.parentNode}while(a);return!1}const C=new Set(["canvas",
"body","html"]);function q(a){C.has(a.target.tagName.toLowerCase())&&a.preventDefault()}function p(a){(a.metaKey||a.ctrlKey)&&a.preventDefault()}self.C3_GetSvgImageSize=async function(a){a=await t(a);if(0<a.width&&0<a.height)return[a.width,a.height];{a.style.position="absolute";a.style.left="0px";a.style.top="0px";a.style.visibility="hidden";document.body.appendChild(a);const b=a.getBoundingClientRect();document.body.removeChild(a);return[b.width,b.height]}};self.C3_RasterSvgImageBlob=async function(a,
b,d,f,h){a=await z(a,b,d);const n=document.createElement("canvas");n.width=f;n.height=h;n.getContext("2d").drawImage(a,0,0,b,d);return n};let c=!1;document.addEventListener("pause",()=>c=!0);document.addEventListener("resume",()=>c=!1);function e(){try{return window.parent&&window.parent.document.hasFocus()}catch(a){return!1}}l.ra(class extends self.U{constructor(a){super(a,"runtime");this.La=!0;this.o=-1;this.pa="any";this.Ha=this.Ia=!1;this.ja=this.G=this.l=null;a.a("canvas","update-size",f=>this.Jb(f));
a.a("runtime","invoke-download",f=>this.zb(f));a.a("runtime","raster-svg-image",f=>this.Eb(f));a.a("runtime","get-svg-image-size",f=>this.xb(f));a.a("runtime","set-target-orientation",f=>this.Ib(f));a.a("runtime","register-sw",()=>this.Fb());a.a("runtime","post-to-debugger",f=>this.Da(f));a.a("runtime","go-to-script",f=>this.Da(f));a.a("runtime","before-start-ticking",()=>this.pb());a.a("runtime","debug-highlight",f=>this.sb(f));a.a("runtime","enable-device-orientation",()=>this.$a());a.a("runtime",
"enable-device-motion",()=>this.Za());a.a("runtime","add-stylesheet",f=>this.nb(f));a.a("runtime","alert",f=>this.ob(f));a.a("runtime","hide-cordova-splash",()=>this.yb());const b=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",f=>{const h=f.target;b.has(h.tagName.toLowerCase())||B(h)||f.preventDefault()});const d=a.c;window.addEventListener("selectstart",q);window.addEventListener("gesturehold",q);d.addEventListener("selectstart",q);d.addEventListener("gesturehold",
q);window.addEventListener("touchstart",q,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",q,{passive:!1}),d.addEventListener("pointerdown",q)):d.addEventListener("touchstart",q);this.F=0;window.addEventListener("mousedown",f=>{1===f.button&&f.preventDefault()});window.addEventListener("mousewheel",p,{passive:!1});window.addEventListener("wheel",p,{passive:!1});window.addEventListener("resize",()=>this.Kb());a.I()&&window.addEventListener("focusout",()=>{{const n=
document.activeElement;if(n){var f=n.tagName.toLowerCase();var h=new Set("email number password search tel text url".split(" "));f="textarea"===f?!0:"input"===f?h.has(n.type.toLowerCase()||"text"):B(n)}else f=!1}f||(document.scrollingElement.scrollTop=0)});this.la=new Set;this.Tb=new WeakSet;this.Rb=!1}pb(){"cordova"===this.g.f?(document.addEventListener("pause",()=>this.ea(!0)),document.addEventListener("resume",()=>this.ea(!1))):document.addEventListener("visibilitychange",()=>this.ea(document.hidden));
return{isSuspended:!(!document.hidden&&!c)}}sa(){window.addEventListener("focus",()=>this.N("window-focus"));window.addEventListener("blur",()=>{this.N("window-blur",{parentHasFocus:e()});this.F=0});window.addEventListener("fullscreenchange",()=>this.aa());window.addEventListener("webkitfullscreenchange",()=>this.aa());window.addEventListener("mozfullscreenchange",()=>this.aa());window.addEventListener("fullscreenerror",b=>this.ba(b));window.addEventListener("webkitfullscreenerror",b=>this.ba(b));
window.addEventListener("mozfullscreenerror",b=>this.ba(b));window.addEventListener("keydown",b=>this.Ca("keydown",b));window.addEventListener("keyup",b=>this.Ca("keyup",b));window.addEventListener("dblclick",b=>this.ca("dblclick",b,m));window.addEventListener("wheel",b=>this.Bb(b));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",b=>{this.$(b);this.v("pointerdown",b)}),this.g.j&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.G=new self.Ya(()=>this.hb(),
5),this.G.Ka=!0,window.addEventListener("pointerrawupdate",b=>this.Cb(b))):window.addEventListener("pointermove",b=>this.v("pointermove",b)),window.addEventListener("pointerup",b=>this.v("pointerup",b)),window.addEventListener("pointercancel",b=>this.v("pointercancel",b))):(window.addEventListener("mousedown",b=>{this.$(b);this.da("pointerdown",b)}),window.addEventListener("mousemove",b=>this.da("pointermove",b)),window.addEventListener("mouseup",b=>this.da("pointerup",b)),window.addEventListener("touchstart",
b=>{this.$(b);this.L("pointerdown",b)}),window.addEventListener("touchmove",b=>this.L("pointermove",b)),window.addEventListener("touchend",b=>this.L("pointerup",b)),window.addEventListener("touchcancel",b=>this.L("pointercancel",b)));const a=()=>this.fa();window.addEventListener("pointerup",a,!0);window.addEventListener("touchend",a,!0);window.addEventListener("click",a,!0);window.addEventListener("keydown",a,!0);window.addEventListener("gamepadconnected",a,!0)}N(a,b){r(this,a,b||null,A)}K(){return Math.max(window.innerWidth,
1)}J(){return Math.max(window.innerHeight,1)}Kb(){const a=this.K(),b=this.J();this.N("window-resize",{innerWidth:a,innerHeight:b,devicePixelRatio:window.devicePixelRatio});this.g.I()&&(-1!==this.o&&clearTimeout(this.o),this.Ea(a,b,0))}Mb(a,b,d){-1!==this.o&&clearTimeout(this.o);this.o=setTimeout(()=>this.Ea(a,b,d),48)}Ea(a,b,d){const f=this.K(),h=this.J();this.o=-1;f!=a||h!=b?this.N("window-resize",{innerWidth:f,innerHeight:h,devicePixelRatio:window.devicePixelRatio}):10>d&&this.Mb(f,h,d+1)}Ib(a){this.pa=
a.targetOrientation}Ob(){const a=this.pa;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(a).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let b=!1;screen.lockOrientation?b=screen.lockOrientation(a):screen.webkitLockOrientation?b=screen.webkitLockOrientation(a):screen.mozLockOrientation?b=screen.mozLockOrientation(a):screen.msLockOrientation&&(b=screen.msLockOrientation(a));b||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",
b)}}aa(){const a=l.V();a&&"any"!==this.pa&&this.Ob();r(this,"fullscreenchange",{isFullscreen:a,innerWidth:this.K(),innerHeight:this.J()})}ba(a){console.warn("[Construct 3] Fullscreen request failed: ",a);r(this,"fullscreenerror",{isFullscreen:l.V(),innerWidth:this.K(),innerHeight:this.J()})}ea(a){a?this.g.bb():this.g.Ga();r(this,"visibilitychange",{hidden:a})}Ca(a,b){"Backspace"===b.key&&q(b);const d=g.get(b.code)||b.code;w(this,a,{code:d,key:b.key,which:b.which,repeat:b.repeat,altKey:b.altKey,ctrlKey:b.ctrlKey,
metaKey:b.metaKey,shiftKey:b.shiftKey,timeStamp:b.timeStamp},m)}Bb(a){r(this,"wheel",{clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},m)}ca(a,b,d){k(b)||w(this,a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,timeStamp:b.timeStamp},d)}da(a,b){if(!k(b)){var d=this.F;"pointerdown"===a&&0!==d?a="pointermove":"pointerup"===a&&0!==b.buttons&&(a=
"pointermove");w(this,a,{pointerId:1,pointerType:"mouse",button:b.button,buttons:b.buttons,lastButtons:d,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:b.timeStamp},m);this.F=b.buttons;this.ca(b.type,b,u)}}v(a,b){if(this.G&&"pointermove"!==a){var d=this.G;d.B||(-1!==d.s&&(self.clearTimeout(d.s),d.s=-1),d.P=Date.now())}d=0;"mouse"===b.pointerType&&(d=this.F);w(this,a,{pointerId:b.pointerId,pointerType:b.pointerType,
button:b.button,buttons:b.buttons,lastButtons:d,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,width:b.width||0,height:b.height||0,pressure:b.pressure||0,tangentialPressure:b.tangentialPressure||0,tiltX:b.tiltX||0,tiltY:b.tiltY||0,twist:b.twist||0,timeStamp:b.timeStamp},m);"mouse"===b.pointerType&&(d="mousemove","pointerdown"===a?d="mousedown":"pointerup"===a&&(d="pointerup"),this.ca(d,b,u),this.F=b.buttons)}Cb(a){this.ja=a;a=this.G;if(-1===a.s){var b=Date.now(),d=b-a.P,f=a.Qb;d>=
f&&a.Ka?(a.P=b,a.B=!0,a.Ja(),a.B=!1):a.s=self.setTimeout(a.Vb,Math.max(f-d,4))}}hb(){this.v("pointermove",this.ja);this.ja=null}L(a,b){for(let d=0,f=b.changedTouches.length;d<f;++d){const h=b.changedTouches[d];w(this,a,{pointerId:h.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:h.clientX,clientY:h.clientY,pageX:h.pageX,pageY:h.pageY,width:2*(h.radiusX||h.webkitRadiusX||0),height:2*(h.radiusY||h.webkitRadiusY||0),pressure:h.force||h.webkitForce||0,tangentialPressure:0,tiltX:0,
tiltY:0,twist:h.rotationAngle||0,timeStamp:b.timeStamp},m)}}$(a){window!==window.top&&window.focus();this.Ba(a.target)&&document.activeElement&&!this.Ba(document.activeElement)&&document.activeElement.blur()}Ba(a){return!a||a===document||a===window||a===document.body||"canvas"===a.tagName.toLowerCase()}$a(){this.Ia||(this.Ia=!0,window.addEventListener("deviceorientation",a=>this.ub(a)),window.addEventListener("deviceorientationabsolute",a=>this.vb(a)))}Za(){this.Ha||(this.Ha=!0,window.addEventListener("devicemotion",
a=>this.tb(a)))}ub(a){r(this,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},m)}vb(a){r(this,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},m)}tb(a){let b=null;var d=a.acceleration;d&&(b={x:d.x||0,y:d.y||0,z:d.z||0});d=null;var f=a.accelerationIncludingGravity;f&&(d={x:f.x||
0,y:f.y||0,z:f.z||0});f=null;const h=a.rotationRate;h&&(f={alpha:h.alpha||0,beta:h.beta||0,gamma:h.gamma||0});r(this,"devicemotion",{acceleration:b,accelerationIncludingGravity:d,rotationRate:f,interval:a.interval,timeStamp:a.timeStamp},m)}Jb(a){const b=this.g,d=b.c;d.style.width=a.styleWidth+"px";d.style.height=a.styleHeight+"px";d.style.marginLeft=a.marginLeft+"px";d.style.marginTop=a.marginTop+"px";b.wa();this.La&&(d.style.display="",this.La=!1)}zb(a){const b=a.url;a=a.filename;const d=document.createElement("a"),
f=document.body;d.textContent=a;d.href=b;d.download=a;f.appendChild(d);d.click();f.removeChild(d)}async Eb(a){var b=a.imageBitmapOpts;a=await self.C3_RasterSvgImageBlob(a.blob,a.imageWidth,a.imageHeight,a.surfaceWidth,a.surfaceHeight);b=b?await createImageBitmap(a,b):await createImageBitmap(a);return{imageBitmap:b,transferables:[b]}}async xb(a){return await self.C3_GetSvgImageSize(a.blob)}async nb(a){await x(a.url)}fa(){var a=[...this.la];this.la.clear();if(!this.Rb)for(const b of a)(a=b.play())&&
a.catch(()=>{this.Tb.has(b)||this.la.add(b)})}yb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}sb(a){if(a.show){this.l||(this.l=document.createElement("div"),this.l.id="inspectOutline",document.body.appendChild(this.l));var b=this.l;b.style.display="";b.style.left=a.left-1+"px";b.style.top=a.top-1+"px";b.style.width=a.width+2+"px";b.style.height=a.height+2+"px";b.textContent=a.name}else this.l&&(this.l.style.display="none")}Fb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Da(a){window.c3_postToMessagePort&&
(a.from="runtime",window.c3_postToMessagePort(a))}mb(a,b){return this.g.Xa(this.A,{name:a,params:b})}ob(a){alert(a.message)}})}"use strict";
{const l=document.currentScript.src;self.Wa=class{constructor(k){this.S=k;this.b=l?l.substr(0,l.lastIndexOf("/")+1):k.b;this.Sb=Math.min(navigator.hardwareConcurrency||2,16);this.ha=null;this.Ma=[];this.ma=this.ia=null}async Va(){if(this.Pb)throw Error("already initialised");this.Pb=!0;var k=this.S.Z("dispatchworker.js");this.ha=await this.S.T(k,this.b,{name:"DispatchWorker"});k=new MessageChannel;this.ia=k.port1;this.ha.postMessage({type:"_init","in-port":k.port2},[k.port2]);this.ma=await this.xa()}async xa(){const k=
this.Ma.length;var g=this.S.Z("jobworker.js");g=await this.S.T(g,this.b,{name:"JobWorker"+k});const m=new MessageChannel,u=new MessageChannel;this.ha.postMessage({type:"_addJobWorker",port:m.port1},[m.port1]);g.postMessage({type:"init",number:k,"dispatch-port":m.port2,"output-port":u.port2},[m.port2,u.port2]);this.Ma.push(g);return u.port1}Ta(){return{inputPort:this.ia,outputPort:this.ma,maxNumWorkers:this.Sb}}Ua(){return[this.ia,this.ma]}}}"use strict";
window.C3_IsSupported&&(window.c3_runtimeInterface=new self.X({cc:!0,dc:"workermain.js",u:["scripts/c3runtime.js"],$b:"scripts/",qa:[],Qa:"html5"}));"use strict";async function H(l,k){k=k.type;let g=!0;0===k?g=await I():1===k&&(g=await J());r(l,"permission-result",{type:k,result:g})}
async function I(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(l){return console.warn("[Touch] Failed to request orientation permission: ",l),!1}}
async function J(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(l){return console.warn("[Touch] Failed to request motion permission: ",l),!1}}self.X.ra(class extends self.U{constructor(l){super(l,"touch");D(this,"request-permission",k=>H(this,k))}});