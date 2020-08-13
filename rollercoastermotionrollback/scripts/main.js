'use strict';function r(g,d,e,p){g.h.Z(g.B,d,e,p,void 0)}function x(g,d,e,p){g.h.s?r(g,d,e,p):g.h.ob()._OnMessageFromDOM({type:"event",component:g.B,handler:d,dispatchOpts:p||null,data:e,responseId:null})}function A(g,d,e){g.h.a(g.B,d,e)}function B(g,d){for(const [e,p]of d)A(g,e,p)}window.K=class{constructor(g,d){this.h=g;this.B=d}va(){}};
window.cb=class{constructor(g,d){this.Na=g;this.Tb=d;this.o=-1;this.U=-Infinity;this.Yb=()=>{this.o=-1;this.U=Date.now();this.C=!0;this.Na();this.C=!1};this.Oa=this.C=!1}};"use strict";function D(g,d){const e=d.elementId,p=g.ya(e,d);g.g.set(e,p);d.isVisible||(p.style.display="none");p.addEventListener("focus",()=>{E(g,"elem-focused",e)});p.addEventListener("blur",()=>{E(g,"elem-blurred",e)});g.S&&document.body.appendChild(p)}
function F(g,d){A(g,"get-element",e=>{const p=g.g.get(e.elementId);return d(p,e)})}function E(g,d,e,p){p||(p={});p.elementId=e;r(g,d,p)}
window.Xa=class extends self.K{constructor(g,d){super(g,d);this.g=new Map;this.S=!0;B(this,[["create",e=>D(this,e)],["destroy",e=>{{e=e.elementId;const p=this.g.get(e);this.S&&p.parentElement.removeChild(p);this.g.delete(e)}}],["set-visible",e=>{this.S&&(this.g.get(e.elementId).style.display=e.isVisible?"":"none")}],["update-position",e=>{if(this.S){var p=this.g.get(e.elementId);p.style.left=e.left+"px";p.style.top=e.top+"px";p.style.width=e.width+"px";p.style.height=e.height+"px";e=e.fontSize;null!==
e&&(p.style.fontSize=e+"em")}}],["update-state",e=>{{const p=this.g.get(e.elementId);this.$(p,e)}}],["focus",e=>this.ia(e)],["set-css-style",e=>{this.g.get(e.elementId).style[e.prop]=e.val}],["set-attribute",e=>{this.g.get(e.elementId).setAttribute(e.name,e.val)}],["remove-attribute",e=>{this.g.get(e.elementId).removeAttribute(e.name)}]]);F(this,e=>e)}ya(){throw Error("required override");}$(){throw Error("required override");}ia(g){const d=this.g.get(g.elementId);g.focus?d.focus():d.blur()}};"use strict";
{var G=function(n){return l.has(n)},H=function(n){return new Promise((b,f)=>{const h=new FileReader;h.onload=m=>b(m.target.result);h.onerror=m=>f(m);h.readAsArrayBuffer(n)})},I=async function(n){n=await H(n);return(new TextDecoder("utf-8")).decode(n)},J=function(n){if(n.ac){const b=document.createElement("script");b.async=!1;b.textContent=n.dc;document.head.appendChild(b)}else return new Promise((b,f)=>{const h=document.createElement("script");h.onload=b;h.onerror=f;h.async=!1;h.src=n;document.head.appendChild(h)})};
const g=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);let d=new Audio;const e={"audio/webm; codecs=opus":!!d.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!d.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!d.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!d.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!d.canPlayType("audio/mp4"),"audio/mpeg":!!d.canPlayType("audio/mpeg")};d=null;const p=[];let u=0;window.RealFile=
window.File;const C=[],z=new Map,a=new Map;let c=0;const k=[];self.pc=function(n){if("function"!==typeof n)throw Error("runOnStartup called without a function");k.push(n)};const l=new Set(["cordova","playable-ad","instant-games"]);window.v=class n{constructor(b){this.s=b.fc;this.F=null;this.c="";this.sa=b.cc;this.I={};this.oa=this.Ta=null;this.T=[];this.D=this.f=this.ra=null;this.l=-1;this.Xb=()=>this.Gb();this.Ra=[];this.b=b.Ua;G(this.b)&&this.s&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),
this.s=!1);this.Sa=!1;this.V=this.i=null;"html5"!==this.b&&"playable-ad"!==this.b||"file"!==location.protocol.substr(0,4)||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");this.a("runtime","cordova-fetch-local-file",f=>this.ub(f));this.a("runtime","create-job-worker",()=>this.vb());"cordova"===this.b?document.addEventListener("deviceready",()=>this.Ea(b)):this.Ea(b)}za(){return g&&"cordova"===
this.b}L(){return g&&G(this.b)||navigator.standalone}async Ea(b){if("playable-ad"===this.b){this.i=self.c3_base64files;this.V={};await this.jb();for(let h=0,m=b.u.length;h<m;++h){var f=b.u[h].toLowerCase();this.V.hasOwnProperty(f)?b.u[h]={ac:!0,dc:this.V[f]}:this.i.hasOwnProperty(f)&&(b.u[h]=URL.createObjectURL(this.i[f]))}}b.Zb?this.c=b.Zb:(f=location.origin,this.c=("null"===f?"file:///":f)+location.pathname,f=this.c.lastIndexOf("/"),-1!==f&&(this.c=this.c.substr(0,f+1)));if(b.ic)for(const [h,m]of Object.entries(b.ic))this.I[h]=
URL.createObjectURL(m);f=new MessageChannel;this.F=f.port1;this.F.onmessage=h=>this._OnMessageFromRuntime(h.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(h=>this.Db(h));this.D=new self.ab(this);await this.D.$a();this.Aa();"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();await this.Qb();this.s?await this.qb(b,f.port2):await this.pb(b,f.port2)}ba(b){return this.I.hasOwnProperty(b)?
this.I[b]:b.endsWith("/workermain.js")&&this.I.hasOwnProperty("workermain.js")?this.I["workermain.js"]:"playable-ad"===this.b&&this.i.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.i[b.toLowerCase()]):b}async X(b,f,h){if(b.startsWith("blob:"))return new Worker(b,h);if(this.za()&&"file:"===location.protocol)return b=await this.xa(this.sa+b),new Worker(URL.createObjectURL(new Blob([b],{type:"application/javascript"})),h);b=new URL(b,f);if(location.origin!==b.origin){b=await fetch(b);if(!b.ok)throw Error("failed to fetch worker script");
b=await b.blob();return new Worker(URL.createObjectURL(b),h)}return new Worker(b,h)}Aa(){if(this.L()){const b=document.documentElement.style,f=document.body.style,h=window.innerWidth<window.innerHeight,m=h?window.screen.width:window.screen.height;f.height=b.height=(h?window.screen.height:window.screen.width)+"px";f.width=b.width=m+"px"}}Da(b){return{baseUrl:this.c,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:n.Y(),projectData:b.oc,
previewImageBlobs:window.cr_previewImageBlobs||this.i,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:b.Ua,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.nc,jobScheduler:this.D.Ya(),supportedAudioFormats:e,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.sa+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.sa+"opus.wasm.wasm",isiOSCordova:this.za(),isiOSWebView:this.L(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async qb(b,f){var h=
this.ba(b.hc);this.Ta=await this.X(h,this.c,{name:"Runtime"});this.f=document.createElement("canvas");this.f.style.display="none";h=this.f.transferControlToOffscreen();document.body.appendChild(this.f);window.c3canvas=this.f;this.Ta.postMessage(Object.assign(this.Da(b),{type:"init-runtime",isInWorker:!0,messagePort:f,canvas:h,workerDependencyScripts:b.ua||[],engineScripts:b.u,projectScripts:window.mc,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[f,h,...this.D.Za()]);this.T=C.map(m=>new m(this));
this.Ca();self.c3_callFunction=(m,q)=>this.ra.rb(m,q);"preview"===this.b&&(self.goToLastErrorScript=()=>this.Z("runtime","go-to-last-error-script"))}async pb(b,f){this.f=document.createElement("canvas");this.f.style.display="none";document.body.appendChild(this.f);window.c3canvas=this.f;this.T=C.map(m=>new m(this));this.Ca();const h=b.u.map(m=>"string"===typeof m?(new URL(m,this.c)).toString():m);Array.isArray(b.ua)&&h.unshift(...b.ua);await Promise.all(h.map(m=>J(m)));if(b.Va&&0<b.Va.length){const m=
self.C3_ProjectScriptsStatus;try{if(await Promise.all(b.Va.map(q=>J(q[1]))),Object.values(m).some(q=>!q)){self.setTimeout(()=>this.Ja(m),100);return}}catch(q){console.error("[Preview] Error loading project scripts: ",q);self.setTimeout(()=>this.Ja(m),100);return}}"preview"===this.b&&"object"!==typeof self.jc.kc?(console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):
(b=Object.assign(this.Da(b),{isInWorker:!1,messagePort:f,canvas:this.f,runOnStartupFunctions:k}),this.oa=self.C3_CreateRuntime(b),await self.C3_InitRuntime(this.oa,b))}Ja(b){b=`Failed to load project script '${Object.entries(b).filter(f=>!f[1]).map(f=>f[0])[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b);alert(b)}async vb(){const b=await this.D.Ba();return{outputPort:b,transferables:[b]}}ob(){if(this.s)throw Error("not available in worker mode");return this.oa}Z(b,
f,h,m,q){this.F.postMessage({type:"event",component:b,handler:f,dispatchOpts:m||null,data:h,responseId:null},this.Sa?void 0:q)}bb(b,f){const h=c++,m=new Promise((q,w)=>{a.set(h,{resolve:q,reject:w})});this.F.postMessage({type:"event",component:b,handler:"js-invoke-function",dispatchOpts:null,data:f,responseId:h},void 0);return m}["_OnMessageFromRuntime"](b){const f=b.type;if("event"===f)return this.Ab(b);if("result"===f)this.Jb(b);else if("runtime-ready"===f)this.Kb();else if("alert"===f)alert(b.message);
else throw Error(`unknown message '${f}'`);}Ab(b){const f=b.component,h=b.handler,m=b.data,q=b.responseId;if(b=z.get(f))if(b=b.get(h)){var w=null;try{w=b(m)}catch(t){console.error(`Exception in '${f}' handler '${h}':`,t);null!==q&&this.P(q,!1,""+t);return}if(null===q)return w;w&&w.then?w.then(t=>this.P(q,!0,t)).catch(t=>{console.error(`Rejection from '${f}' handler '${h}':`,t);this.P(q,!1,""+t)}):this.P(q,!0,w)}else console.warn(`[DOM] No handler '${h}' for component '${f}'`);else console.warn(`[DOM] No event handlers for component '${f}'`)}P(b,
f,h){let m;h&&h.transferables&&(m=h.transferables);this.F.postMessage({type:"result",responseId:b,isOk:f,result:h},m)}Jb(b){const f=b.responseId,h=b.isOk;b=b.result;const m=a.get(f);h?m.resolve(b):m.reject(b);a.delete(f)}a(b,f,h){let m=z.get(b);m||(m=new Map,z.set(b,m));if(m.has(f))throw Error(`[DOM] Component '${b}' already has handler '${f}'`);m.set(f,h)}static J(b){if(C.includes(b))throw Error("DOM handler already added");C.push(b)}Ca(){for(const b of this.T)if("runtime"===b.B){this.ra=b;return}throw Error("cannot find runtime DOM handler");
}Db(b){this.Z("debugger","message",b)}Kb(){for(const b of this.T)b.va()}static Y(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}Ka(){-1===this.l&&this.Ra.length&&(this.l=requestAnimationFrame(this.Xb))}hb(){-1!==this.l&&(cancelAnimationFrame(this.l),this.l=-1)}Gb(){this.l=-1;for(const b of this.Ra)b();this.Ka()}ka(){this.ra.ka()}async ub(b){const f=b.filename;switch(b.as){case "text":return await this.Wa(f);case "buffer":return await this.xa(f);
default:throw Error("unsupported type");}}wa(b){const f=window.cordova.file.applicationDirectory+"www/"+b.toLowerCase();return new Promise((h,m)=>{window.resolveLocalFileSystemURL(f,q=>{q.file(h,m)},m)})}async Wa(b){b=await this.wa(b);return await I(b)}aa(){if(p.length&&!(8<=u)){u++;var b=p.shift();this.kb(b.filename,b.ec,b.$b)}}xa(b){return new Promise((f,h)=>{p.push({filename:b,ec:m=>{u--;this.aa();f(m)},$b:m=>{u--;this.aa();h(m)}});this.aa()})}async kb(b,f,h){try{const m=await this.wa(b),q=await H(m);
f(q)}catch(m){h(m)}}async jb(){const b=[];for(const [f,h]of Object.entries(this.i))b.push(this.ib(f,h));await Promise.all(b)}async ib(b,f){if("object"===typeof f)this.i[b]=new Blob([f.str],{type:f.type}),this.V[b]=f.str;else{let h=await this.nb(f);h||(h=this.lb(f));this.i[b]=h}}async nb(b){try{return await (await fetch(b)).blob()}catch(f){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
f),null}}lb(b){b=this.Ob(b);return this.gb(b.data,b.bc)}Ob(b){var f=b.indexOf(",");if(0>f)throw new URIError("expected comma in data: uri");var h=b.substring(f+1);f=b.substring(5,f).split(";");b=f[0]||"";const m=f[2];h="base64"===f[1]||"base64"===m?atob(h):decodeURIComponent(h);return{bc:b,data:h}}gb(b,f){var h=b.length;let m=h>>2,q=new Uint8Array(h),w=new Uint32Array(q.buffer,0,m),t,y;for(y=t=0;t<m;++t)w[t]=b.charCodeAt(y++)|b.charCodeAt(y++)<<8|b.charCodeAt(y++)<<16|b.charCodeAt(y++)<<24;for(h&=
3;h--;)q[y]=b.charCodeAt(y),++y;return new Blob([q],{type:f})}Qb(){let b=null;const f=new Promise(q=>b=q),h=new ArrayBuffer(1),m=new MessageChannel;m.port2.onmessage=q=>{q.data&&q.data.arrayBuffer||(this.Sa=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables."));b()};m.port1.postMessage({arrayBuffer:h},[h]);return f}}}"use strict";
{var M=function(){const a=document.activeElement;if(!a)return!1;const c=a.tagName.toLowerCase(),k=new Set("email number password search tel text url".split(" "));return"textarea"===c?!0:"input"===c?k.has(a.type.toLowerCase()||"text"):L(a)},N=function(){try{return window.parent&&window.parent.document.hasFocus()}catch(a){return!1}},O=function(a){(a.metaKey||a.ctrlKey)&&a.preventDefault()},P=function(a){C.has(a.target.tagName.toLowerCase())&&a.preventDefault()},L=function(a){do{if(a.parentNode&&a.hasAttribute("contenteditable"))return!0;
a=a.parentNode}while(a);return!1},S=async function(a,c,k){if(!/firefox/i.test(navigator.userAgent))return await Q(a);var l=await R(a);l=(new DOMParser).parseFromString(l,"image/svg+xml");const n=l.documentElement;if(n.hasAttribute("width")&&n.hasAttribute("height")){const b=n.getAttribute("width"),f=n.getAttribute("height");if(!b.includes("%")&&!f.includes("%"))return await Q(a)}n.setAttribute("width",c+"px");n.setAttribute("height",k+"px");l=(new XMLSerializer).serializeToString(l);a=new Blob([l],
{type:"image/svg+xml"});return await Q(a)},R=function(a){return new Promise((c,k)=>{let l=new FileReader;l.onload=n=>c(n.target.result);l.onerror=n=>k(n);l.readAsText(a)})},Q=async function(a){a=URL.createObjectURL(a);try{return await T(a)}finally{URL.revokeObjectURL(a)}},T=function(a){return new Promise((c,k)=>{const l=new Image;l.onload=()=>c(l);l.onerror=n=>k(n);l.src=a})},U=function(a){return new Promise((c,k)=>{const l=document.createElement("link");l.onload=()=>c(l);l.onerror=n=>k(n);l.rel=
"stylesheet";l.href=a;document.head.appendChild(l)})},V=function(a){return a.sourceCapabilities&&a.sourceCapabilities.firesTouchEvents||a.originalEvent&&a.originalEvent.sourceCapabilities&&a.originalEvent.sourceCapabilities.firesTouchEvents};const g=self.v,d=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),e={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},p={dispatchUserScriptEvent:!0},u={dispatchRuntimeEvent:!0},C=new Set(["canvas","body","html"]);self.C3_GetSvgImageSize=async function(a){a=
await Q(a);if(0<a.width&&0<a.height)return[a.width,a.height];{a.style.position="absolute";a.style.left="0px";a.style.top="0px";a.style.visibility="hidden";document.body.appendChild(a);const c=a.getBoundingClientRect();document.body.removeChild(a);return[c.width,c.height]}};self.C3_RasterSvgImageBlob=async function(a,c,k,l,n){a=await S(a,c,k);const b=document.createElement("canvas");b.width=l;b.height=n;b.getContext("2d").drawImage(a,0,0,c,k);return b};let z=!1;document.addEventListener("pause",()=>
z=!0);document.addEventListener("resume",()=>z=!1);g.J(class extends self.K{constructor(a){super(a,"runtime");this.Pa=!0;this.m=-1;this.ta="any";this.La=this.Ma=!1;this.na=this.H=this.j=null;a.a("canvas","update-size",l=>this.Mb(l));a.a("runtime","invoke-download",l=>this.Cb(l));a.a("runtime","raster-svg-image",l=>this.Hb(l));a.a("runtime","get-svg-image-size",l=>this.Bb(l));a.a("runtime","set-target-orientation",l=>this.Lb(l));a.a("runtime","register-sw",()=>this.Ib());a.a("runtime","post-to-debugger",
l=>this.Ha(l));a.a("runtime","go-to-script",l=>this.Ha(l));a.a("runtime","before-start-ticking",()=>this.tb());a.a("runtime","debug-highlight",l=>this.wb(l));a.a("runtime","enable-device-orientation",()=>this.fb());a.a("runtime","enable-device-motion",()=>this.eb());a.a("runtime","add-stylesheet",l=>this.sb(l));a.a("runtime","alert",l=>this.da(l));const c=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",l=>{const n=l.target;c.has(n.tagName.toLowerCase())||L(n)||l.preventDefault()});
const k=a.f;window.addEventListener("selectstart",P);window.addEventListener("gesturehold",P);k.addEventListener("selectstart",P);k.addEventListener("gesturehold",P);window.addEventListener("touchstart",P,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",P,{passive:!1}),k.addEventListener("pointerdown",P)):k.addEventListener("touchstart",P);this.G=0;window.addEventListener("mousedown",l=>{1===l.button&&l.preventDefault()});window.addEventListener("mousewheel",
O,{passive:!1});window.addEventListener("wheel",O,{passive:!1});window.addEventListener("resize",()=>this.Nb());a.L()&&window.addEventListener("focusout",()=>{M()||(document.scrollingElement.scrollTop=0)});this.pa=new Set;this.Wb=new WeakSet;this.Ub=!1}tb(){"cordova"===this.h.b?(document.addEventListener("pause",()=>this.ja(!0)),document.addEventListener("resume",()=>this.ja(!1))):document.addEventListener("visibilitychange",()=>this.ja(document.hidden));return{isSuspended:!(!document.hidden&&!z)}}va(){window.addEventListener("focus",
()=>this.R("window-focus"));window.addEventListener("blur",()=>{this.R("window-blur",{parentHasFocus:N()});this.G=0});window.addEventListener("fullscreenchange",()=>this.ea());window.addEventListener("webkitfullscreenchange",()=>this.ea());window.addEventListener("mozfullscreenchange",()=>this.ea());window.addEventListener("fullscreenerror",c=>this.fa(c));window.addEventListener("webkitfullscreenerror",c=>this.fa(c));window.addEventListener("mozfullscreenerror",c=>this.fa(c));window.addEventListener("keydown",
c=>this.Ga("keydown",c));window.addEventListener("keyup",c=>this.Ga("keyup",c));window.addEventListener("dblclick",c=>this.ga("dblclick",c,e));window.addEventListener("wheel",c=>this.Eb(c));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",c=>{this.ca(c);this.A("pointerdown",c)}),this.h.s&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.H=new self.cb(()=>this.mb(),5),this.H.Oa=!0,window.addEventListener("pointerrawupdate",c=>this.Fb(c))):window.addEventListener("pointermove",
c=>this.A("pointermove",c)),window.addEventListener("pointerup",c=>this.A("pointerup",c)),window.addEventListener("pointercancel",c=>this.A("pointercancel",c))):(window.addEventListener("mousedown",c=>{this.ca(c);this.ha("pointerdown",c)}),window.addEventListener("mousemove",c=>this.ha("pointermove",c)),window.addEventListener("mouseup",c=>this.ha("pointerup",c)),window.addEventListener("touchstart",c=>{this.ca(c);this.O("pointerdown",c)}),window.addEventListener("touchmove",c=>this.O("pointermove",
c)),window.addEventListener("touchend",c=>this.O("pointerup",c)),window.addEventListener("touchcancel",c=>this.O("pointercancel",c)));const a=()=>this.ka();window.addEventListener("pointerup",a,!0);window.addEventListener("touchend",a,!0);window.addEventListener("click",a,!0);window.addEventListener("keydown",a,!0);window.addEventListener("gamepadconnected",a,!0)}R(a,c){r(this,a,c||null,u)}N(){return Math.max(window.innerWidth,1)}M(){return Math.max(window.innerHeight,1)}Nb(){const a=this.N(),c=this.M();
this.R("window-resize",{innerWidth:a,innerHeight:c,devicePixelRatio:window.devicePixelRatio});this.h.L()&&(-1!==this.m&&clearTimeout(this.m),this.Ia(a,c,0))}Pb(a,c,k){-1!==this.m&&clearTimeout(this.m);this.m=setTimeout(()=>this.Ia(a,c,k),48)}Ia(a,c,k){const l=this.N(),n=this.M();this.m=-1;l!=a||n!=c?this.R("window-resize",{innerWidth:l,innerHeight:n,devicePixelRatio:window.devicePixelRatio}):10>k&&this.Pb(l,n,k+1)}Lb(a){this.ta=a.targetOrientation}Rb(){const a=this.ta;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(a).catch(c=>
console.warn("[Construct 3] Failed to lock orientation: ",c));else try{let c=!1;screen.lockOrientation?c=screen.lockOrientation(a):screen.webkitLockOrientation?c=screen.webkitLockOrientation(a):screen.mozLockOrientation?c=screen.mozLockOrientation(a):screen.msLockOrientation&&(c=screen.msLockOrientation(a));c||console.warn("[Construct 3] Failed to lock orientation")}catch(c){console.warn("[Construct 3] Failed to lock orientation: ",c)}}ea(){const a=g.Y();a&&"any"!==this.ta&&this.Rb();r(this,"fullscreenchange",
{isFullscreen:a,innerWidth:this.N(),innerHeight:this.M()})}fa(a){console.warn("[Construct 3] Fullscreen request failed: ",a);r(this,"fullscreenerror",{isFullscreen:g.Y(),innerWidth:this.N(),innerHeight:this.M()})}ja(a){a?this.h.hb():this.h.Ka();r(this,"visibilitychange",{hidden:a})}Ga(a,c){"Backspace"===c.key&&P(c);const k=d.get(c.code)||c.code;x(this,a,{code:k,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},e)}Eb(a){r(this,
"wheel",{clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},e)}ga(a,c,k){V(c)||x(this,a,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,timeStamp:c.timeStamp},k)}ha(a,c){if(!V(c)){var k=this.G;"pointerdown"===a&&0!==k?a="pointermove":"pointerup"===a&&0!==c.buttons&&(a="pointermove");x(this,a,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,
lastButtons:k,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},e);this.G=c.buttons;this.ga(c.type,c,p)}}A(a,c){if(this.H&&"pointermove"!==a){var k=this.H;k.C||(-1!==k.o&&(self.clearTimeout(k.o),k.o=-1),k.U=Date.now())}k=0;"mouse"===c.pointerType&&(k=this.G);x(this,a,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:k,clientX:c.clientX,clientY:c.clientY,
pageX:c.pageX,pageY:c.pageY,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},e);"mouse"===c.pointerType&&(k="mousemove","pointerdown"===a?k="mousedown":"pointerup"===a&&(k="pointerup"),this.ga(k,c,p),this.G=c.buttons)}Fb(a){this.na=a;a=this.H;if(-1===a.o){var c=Date.now(),k=c-a.U,l=a.Tb;k>=l&&a.Oa?(a.U=c,a.C=!0,a.Na(),a.C=!1):a.o=self.setTimeout(a.Yb,Math.max(l-k,4))}}mb(){this.A("pointermove",
this.na);this.na=null}O(a,c){for(let k=0,l=c.changedTouches.length;k<l;++k){const n=c.changedTouches[k];x(this,a,{pointerId:n.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:n.clientX,clientY:n.clientY,pageX:n.pageX,pageY:n.pageY,width:2*(n.radiusX||n.webkitRadiusX||0),height:2*(n.radiusY||n.webkitRadiusY||0),pressure:n.force||n.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:n.rotationAngle||0,timeStamp:c.timeStamp},e)}}ca(a){window!==window.top&&window.focus();
this.Fa(a.target)&&document.activeElement&&!this.Fa(document.activeElement)&&document.activeElement.blur()}Fa(a){return!a||a===document||a===window||a===document.body||"canvas"===a.tagName.toLowerCase()}fb(){this.Ma||(this.Ma=!0,window.addEventListener("deviceorientation",a=>this.yb(a)),window.addEventListener("deviceorientationabsolute",a=>this.zb(a)))}eb(){this.La||(this.La=!0,window.addEventListener("devicemotion",a=>this.xb(a)))}yb(a){r(this,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||
0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},e)}zb(a){r(this,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},e)}xb(a){let c=null;var k=a.acceleration;k&&(c={x:k.x||0,y:k.y||0,z:k.z||0});k=null;var l=a.accelerationIncludingGravity;l&&(k={x:l.x||0,y:l.y||0,z:l.z||0});l=null;const n=a.rotationRate;n&&(l={alpha:n.alpha||0,beta:n.beta||
0,gamma:n.gamma||0});r(this,"devicemotion",{acceleration:c,accelerationIncludingGravity:k,rotationRate:l,interval:a.interval,timeStamp:a.timeStamp},e)}Mb(a){const c=this.h,k=c.f;k.style.width=a.styleWidth+"px";k.style.height=a.styleHeight+"px";k.style.marginLeft=a.marginLeft+"px";k.style.marginTop=a.marginTop+"px";c.Aa();this.Pa&&(k.style.display="",this.Pa=!1)}Cb(a){const c=a.url;a=a.filename;const k=document.createElement("a"),l=document.body;k.textContent=a;k.href=c;k.download=a;l.appendChild(k);
k.click();l.removeChild(k)}async Hb(a){var c=a.imageBitmapOpts;a=await self.C3_RasterSvgImageBlob(a.blob,a.imageWidth,a.imageHeight,a.surfaceWidth,a.surfaceHeight);c=c?await createImageBitmap(a,c):await createImageBitmap(a);return{imageBitmap:c,transferables:[c]}}async Bb(a){return await self.C3_GetSvgImageSize(a.blob)}async sb(a){await U(a.url)}ka(){var a=[...this.pa];this.pa.clear();if(!this.Ub)for(const c of a)(a=c.play())&&a.catch(()=>{this.Wb.has(c)||this.pa.add(c)})}wb(a){if(a.show){this.j||
(this.j=document.createElement("div"),this.j.id="inspectOutline",document.body.appendChild(this.j));var c=this.j;c.style.display="";c.style.left=a.left-1+"px";c.style.top=a.top-1+"px";c.style.width=a.width+2+"px";c.style.height=a.height+2+"px";c.textContent=a.name}else this.j&&(this.j.style.display="none")}Ib(){window.C3_RegisterSW&&window.C3_RegisterSW()}Ha(a){window.c3_postToMessagePort&&(a.from="runtime",window.c3_postToMessagePort(a))}rb(a,c){return this.h.bb(this.B,{name:a,params:c})}da(a){alert(a.message)}})}"use strict";
{const g=document.currentScript.src;self.ab=class{constructor(d){this.W=d;this.c=g?g.substr(0,g.lastIndexOf("/")+1):d.c;this.Vb=Math.min(navigator.hardwareConcurrency||2,16);this.la=null;this.Qa=[];this.qa=this.ma=null}async $a(){if(this.Sb)throw Error("already initialised");this.Sb=!0;var d=this.W.ba("dispatchworker.js");this.la=await this.W.X(d,this.c,{name:"DispatchWorker"});d=new MessageChannel;this.ma=d.port1;this.la.postMessage({type:"_init","in-port":d.port2},[d.port2]);this.qa=await this.Ba()}async Ba(){const d=
this.Qa.length;var e=this.W.ba("jobworker.js");e=await this.W.X(e,this.c,{name:"JobWorker"+d});const p=new MessageChannel,u=new MessageChannel;this.la.postMessage({type:"_addJobWorker",port:p.port1},[p.port1]);e.postMessage({type:"init",number:d,"dispatch-port":p.port2,"output-port":u.port2},[p.port2,u.port2]);this.Qa.push(e);return u.port1}Ya(){return{inputPort:this.ma,outputPort:this.qa,maxNumWorkers:this.Vb}}Za(){return[this.ma,this.qa]}}}"use strict";
window.C3_IsSupported&&(window.c3_runtimeInterface=new self.v({fc:"undefined"!==typeof OffscreenCanvas,hc:"workermain.js",u:["scripts/c3runtime.js"],cc:"scripts/",ua:[],Ua:"html5"}));"use strict";function W(g){g.stopPropagation()}
self.v.J(class extends self.Xa{constructor(g){super(g,"sliderbar")}ya(g,d){const e=document.createElement("input");e.type="range";e.style.position="absolute";e.style.userSelect="none";e.style.webkitUserSelect="none";e.addEventListener("touchstart",W);e.addEventListener("touchmove",W);e.addEventListener("touchend",W);e.addEventListener("mousedown",W);e.addEventListener("mouseup",W);e.addEventListener("keydown",W);e.addEventListener("keyup",W);e.addEventListener("click",()=>{var p;p||(p={});p.elementId=
g;x(this,"click",p)});e.addEventListener("change",()=>E(this,"change",g,{value:parseFloat(e.value)}));e.addEventListener("input",()=>E(this,"input",g,{value:parseFloat(e.value)}));d.id&&(e.id=d.id);this.$(e,d);return e}$(g,d){g.max=d.max;g.min=d.min;g.step=d.step;g.value=d.value;g.disabled=!d.isEnabled;g.title=d.title}});"use strict";async function X(g,d){d=d.type;let e=!0;0===d?e=await Y():1===d&&(e=await Z());r(g,"permission-result",{type:d,result:e})}
async function Y(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(g){return console.warn("[Touch] Failed to request orientation permission: ",g),!1}}
async function Z(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(g){return console.warn("[Touch] Failed to request motion permission: ",g),!1}}self.v.J(class extends self.K{constructor(g){super(g,"touch");A(this,"request-permission",d=>X(this,d))}});"use strict";
function aa(g){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(d=>r(g,"sw-message",d.data))}
function ba(g){g=g.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(g).catch(d=>console.warn("[Construct 3] Failed to lock orientation: ",d));else try{let d=!1;screen.lockOrientation?d=screen.lockOrientation(g):screen.webkitLockOrientation?d=screen.webkitLockOrientation(g):screen.mozLockOrientation?d=screen.mozLockOrientation(g):screen.msLockOrientation&&(d=screen.msLockOrientation(g));d||console.warn("[Construct 3] Failed to lock orientation")}catch(d){console.warn("[Construct 3] Failed to lock orientation: ",
d)}}
self.v.J(class extends self.K{constructor(g){super(g,"browser");this.b="";B(this,[["get-initial-state",d=>{this.b=d.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!==typeof window.is_scirra_arcade}}],["ready-for-sw-messages",()=>aa(this)],
["alert",d=>this.da(d)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",d=>this.ia(d)],["vibrate",d=>{navigator.vibrate&&navigator.vibrate(d.pattern)}],["lock-orientation",d=>ba(d)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():
screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(d){}}],["navigate",d=>{var e=d.type;if("back"===e)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===e)window.forward();else if("home"===e)window.home();else if("reload"===e)location.reload();else if("url"===e){e=d.url;var p=d.target;d=d.exportType;"windows-uwp"===d&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(e)):
self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(e,"_system"):"preview"===d?window.open(e,"_blank"):this.lc||(2===p?window.top.location=e:1===p?window.parent.location=e:window.location=e)}else"new-window"===e&&(e=d.url,p=d.tag,"windows-uwp"===d.exportType&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(e)):self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(e,"_system"):window.open(e,p))}],["request-fullscreen",
d=>{{const e={navigationUI:"auto"};d=d.navUI;1===d?e.navigationUI="hide":2===d&&(e.navigationUI="show");d=document.documentElement;d.requestFullscreen?d.requestFullscreen(e):d.mozRequestFullScreen?d.mozRequestFullScreen(e):d.msRequestFullscreen?d.msRequestFullscreen(e):d.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?d.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):d.webkitRequestFullScreen())}}],["exit-fullscreen",()=>{document.exitFullscreen?document.exitFullscreen():
document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",d=>{location.hash=d.hash}]]);window.addEventListener("online",()=>{r(this,"online-state",{isOnline:!0})});window.addEventListener("offline",()=>{r(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{r(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",
()=>{r(this,"backbutton")});"undefined"!==typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",d=>{d.handled=!0;r(this,"backbutton")})}da(g){alert(g.message)}ia(g){g=g.isFocus;if("nwjs"===this.b){const d="nwjs"===this.b?nw.Window.get():null;g?d.focus():d.blur()}else g?window.focus():window.blur()}});