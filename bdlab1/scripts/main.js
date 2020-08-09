'use strict';function r(l,d,f,p){l.g.Y(l.C,d,f,p,void 0)}function x(l,d,f,p){l.g.s?r(l,d,f,p):l.g.lb()._OnMessageFromDOM({type:"event",component:l.C,handler:d,dispatchOpts:p||null,data:f,responseId:null})}function C(l,d,f){l.g.a(l.C,d,f)}function D(l,d){for(const [f,p]of d)C(l,f,p)}window.v=class{constructor(l,d){this.g=l;this.C=d}ua(){}};
window.$a=class{constructor(l,d){this.La=l;this.Qb=d;this.o=-1;this.T=-Infinity;this.Vb=()=>{this.o=-1;this.T=Date.now();this.D=!0;this.La();this.D=!1};this.Ma=this.D=!1}};"use strict";function E(l,d){C(l,"get-element",f=>{const p=l.h.get(f.elementId);return d(p,f)})}
window.hc=class extends self.v{constructor(l,d){super(l,d);this.h=new Map;this.ja=!0;D(this,[["create",()=>{throw Error("required override");}],["destroy",f=>{{f=f.elementId;const p=this.h.get(f);this.ja&&p.parentElement.removeChild(p);this.h.delete(f)}}],["set-visible",f=>{this.ja&&(this.h.get(f.elementId).style.display=f.isVisible?"":"none")}],["update-position",f=>{if(this.ja){var p=this.h.get(f.elementId);p.style.left=f.left+"px";p.style.top=f.top+"px";p.style.width=f.width+"px";p.style.height=
f.height+"px";f=f.fontSize;null!==f&&(p.style.fontSize=f+"em")}}],["update-state",f=>{this.h.get(f.elementId);throw Error("required override");}],["focus",f=>this.ga(f)],["set-css-style",f=>{this.h.get(f.elementId).style[f.prop]=f.val}],["set-attribute",f=>{this.h.get(f.elementId).setAttribute(f.name,f.val)}],["remove-attribute",f=>{this.h.get(f.elementId).removeAttribute(f.name)}]]);E(this,f=>f)}ga(l){const d=this.h.get(l.elementId);l.focus?d.focus():d.blur()}};"use strict";
{var F=function(n){return k.has(n)},G=function(n){return new Promise((b,e)=>{const g=new FileReader;g.onload=m=>b(m.target.result);g.onerror=m=>e(m);g.readAsArrayBuffer(n)})},H=async function(n){n=await G(n);return(new TextDecoder("utf-8")).decode(n)},I=function(n){if(n.Yb){const b=document.createElement("script");b.async=!1;b.textContent=n.ac;document.head.appendChild(b)}else return new Promise((b,e)=>{const g=document.createElement("script");g.onload=b;g.onerror=e;g.async=!1;g.src=n;document.head.appendChild(g)})};
const l=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);let d=new Audio;const f={"audio/webm; codecs=opus":!!d.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!d.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!d.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!d.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!d.canPlayType("audio/mp4"),"audio/mpeg":!!d.canPlayType("audio/mpeg")};d=null;const p=[];let u=0;window.RealFile=
window.File;const B=[],z=new Map,a=new Map;let c=0;const h=[];self.nc=function(n){if("function"!==typeof n)throw Error("runOnStartup called without a function");h.push(n)};const k=new Set(["cordova","playable-ad","instant-games"]);window.A=class n{constructor(b){this.s=b.cc;this.G=null;this.c="";this.ra=b.$b;this.J={};this.na=this.Ra=null;this.S=[];this.F=this.f=this.qa=null;this.l=-1;this.Ub=()=>this.Db();this.Pa=[];this.b=b.Sa;F(this.b)&&this.s&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),
this.s=!1);this.Qa=!1;this.U=this.i=null;"html5"!==this.b&&"playable-ad"!==this.b||"file"!==location.protocol.substr(0,4)||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");this.a("runtime","cordova-fetch-local-file",e=>this.rb(e));this.a("runtime","create-job-worker",()=>this.sb());"cordova"===this.b?document.addEventListener("deviceready",()=>this.Ca(b)):this.Ca(b)}xa(){return l&&"cordova"===
this.b}L(){return l&&F(this.b)||navigator.standalone}async Ca(b){if("playable-ad"===this.b){this.i=self.c3_base64files;this.U={};await this.gb();for(let g=0,m=b.u.length;g<m;++g){var e=b.u[g].toLowerCase();this.U.hasOwnProperty(e)?b.u[g]={Yb:!0,ac:this.U[e]}:this.i.hasOwnProperty(e)&&(b.u[g]=URL.createObjectURL(this.i[e]))}}b.Wb?this.c=b.Wb:(e=location.origin,this.c=("null"===e?"file:///":e)+location.pathname,e=this.c.lastIndexOf("/"),-1!==e&&(this.c=this.c.substr(0,e+1)));if(b.ec)for(const [g,m]of Object.entries(b.ec))this.J[g]=
URL.createObjectURL(m);e=new MessageChannel;this.G=e.port1;this.G.onmessage=g=>this._OnMessageFromRuntime(g.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(g=>this.Ab(g));this.F=new self.Ya(this);await this.F.Xa();this.ya();"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();await this.Nb();this.s?await this.nb(b,e.port2):await this.mb(b,e.port2)}$(b){return this.J.hasOwnProperty(b)?
this.J[b]:b.endsWith("/workermain.js")&&this.J.hasOwnProperty("workermain.js")?this.J["workermain.js"]:"playable-ad"===this.b&&this.i.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.i[b.toLowerCase()]):b}async W(b,e,g){if(b.startsWith("blob:"))return new Worker(b,g);if(this.xa()&&"file:"===location.protocol)return b=await this.wa(this.ra+b),new Worker(URL.createObjectURL(new Blob([b],{type:"application/javascript"})),g);b=new URL(b,e);if(location.origin!==b.origin){b=await fetch(b);if(!b.ok)throw Error("failed to fetch worker script");
b=await b.blob();return new Worker(URL.createObjectURL(b),g)}return new Worker(b,g)}ya(){if(this.L()){const b=document.documentElement.style,e=document.body.style,g=window.innerWidth<window.innerHeight,m=g?window.screen.width:window.screen.height;e.height=b.height=(g?window.screen.height:window.screen.width)+"px";e.width=b.width=m+"px"}}Ba(b){return{baseUrl:this.c,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:n.X(),projectData:b.mc,
previewImageBlobs:window.cr_previewImageBlobs||this.i,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:b.Sa,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.lc,jobScheduler:this.F.Va(),supportedAudioFormats:f,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.ra+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.ra+"opus.wasm.wasm",isiOSCordova:this.xa(),isiOSWebView:this.L(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async nb(b,e){var g=
this.$(b.dc);this.Ra=await this.W(g,this.c,{name:"Runtime"});this.f=document.createElement("canvas");this.f.style.display="none";g=this.f.transferControlToOffscreen();document.body.appendChild(this.f);window.c3canvas=this.f;this.Ra.postMessage(Object.assign(this.Ba(b),{type:"init-runtime",isInWorker:!0,messagePort:e,canvas:g,workerDependencyScripts:b.ta||[],engineScripts:b.u,projectScripts:window.kc,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[e,g,...this.F.Wa()]);this.S=B.map(m=>new m(this));
this.Aa();self.c3_callFunction=(m,q)=>this.qa.ob(m,q);"preview"===this.b&&(self.goToLastErrorScript=()=>this.Y("runtime","go-to-last-error-script"))}async mb(b,e){this.f=document.createElement("canvas");this.f.style.display="none";document.body.appendChild(this.f);window.c3canvas=this.f;this.S=B.map(m=>new m(this));this.Aa();const g=b.u.map(m=>"string"===typeof m?(new URL(m,this.c)).toString():m);Array.isArray(b.ta)&&g.unshift(...b.ta);await Promise.all(g.map(m=>I(m)));if(b.Ta&&0<b.Ta.length){const m=
self.C3_ProjectScriptsStatus;try{if(await Promise.all(b.Ta.map(q=>I(q[1]))),Object.values(m).some(q=>!q)){self.setTimeout(()=>this.Ha(m),100);return}}catch(q){console.error("[Preview] Error loading project scripts: ",q);self.setTimeout(()=>this.Ha(m),100);return}}"preview"===this.b&&"object"!==typeof self.fc.ic?(console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):
(b=Object.assign(this.Ba(b),{isInWorker:!1,messagePort:e,canvas:this.f,runOnStartupFunctions:h}),this.na=self.C3_CreateRuntime(b),await self.C3_InitRuntime(this.na,b))}Ha(b){b=`Failed to load project script '${Object.entries(b).filter(e=>!e[1]).map(e=>e[0])[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+b);alert(b)}async sb(){const b=await this.F.za();return{outputPort:b,transferables:[b]}}lb(){if(this.s)throw Error("not available in worker mode");return this.na}Y(b,
e,g,m,q){this.G.postMessage({type:"event",component:b,handler:e,dispatchOpts:m||null,data:g,responseId:null},this.Qa?void 0:q)}Za(b,e){const g=c++,m=new Promise((q,w)=>{a.set(g,{resolve:q,reject:w})});this.G.postMessage({type:"event",component:b,handler:"js-invoke-function",dispatchOpts:null,data:e,responseId:g},void 0);return m}["_OnMessageFromRuntime"](b){const e=b.type;if("event"===e)return this.xb(b);if("result"===e)this.Gb(b);else if("runtime-ready"===e)this.Hb();else if("alert"===e)alert(b.message);
else throw Error(`unknown message '${e}'`);}xb(b){const e=b.component,g=b.handler,m=b.data,q=b.responseId;if(b=z.get(e))if(b=b.get(g)){var w=null;try{w=b(m)}catch(t){console.error(`Exception in '${e}' handler '${g}':`,t);null!==q&&this.P(q,!1,""+t);return}if(null===q)return w;w&&w.then?w.then(t=>this.P(q,!0,t)).catch(t=>{console.error(`Rejection from '${e}' handler '${g}':`,t);this.P(q,!1,""+t)}):this.P(q,!0,w)}else console.warn(`[DOM] No handler '${g}' for component '${e}'`);else console.warn(`[DOM] No event handlers for component '${e}'`)}P(b,
e,g){let m;g&&g.transferables&&(m=g.transferables);this.G.postMessage({type:"result",responseId:b,isOk:e,result:g},m)}Gb(b){const e=b.responseId,g=b.isOk;b=b.result;const m=a.get(e);g?m.resolve(b):m.reject(b);a.delete(e)}a(b,e,g){let m=z.get(b);m||(m=new Map,z.set(b,m));if(m.has(e))throw Error(`[DOM] Component '${b}' already has handler '${e}'`);m.set(e,g)}static K(b){if(B.includes(b))throw Error("DOM handler already added");B.push(b)}Aa(){for(const b of this.S)if("runtime"===b.C){this.qa=b;return}throw Error("cannot find runtime DOM handler");
}Ab(b){this.Y("debugger","message",b)}Hb(){for(const b of this.S)b.ua()}static X(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}Ia(){-1===this.l&&this.Pa.length&&(this.l=requestAnimationFrame(this.Ub))}eb(){-1!==this.l&&(cancelAnimationFrame(this.l),this.l=-1)}Db(){this.l=-1;for(const b of this.Pa)b();this.Ia()}ia(){this.qa.ia()}async rb(b){const e=b.filename;switch(b.as){case "text":return await this.Ua(e);case "buffer":return await this.wa(e);
default:throw Error("unsupported type");}}va(b){const e=window.cordova.file.applicationDirectory+"www/"+b.toLowerCase();return new Promise((g,m)=>{window.resolveLocalFileSystemURL(e,q=>{q.file(g,m)},m)})}async Ua(b){b=await this.va(b);return await H(b)}Z(){if(p.length&&!(8<=u)){u++;var b=p.shift();this.hb(b.filename,b.bc,b.Xb)}}wa(b){return new Promise((e,g)=>{p.push({filename:b,bc:m=>{u--;this.Z();e(m)},Xb:m=>{u--;this.Z();g(m)}});this.Z()})}async hb(b,e,g){try{const m=await this.va(b),q=await G(m);
e(q)}catch(m){g(m)}}async gb(){const b=[];for(const [e,g]of Object.entries(this.i))b.push(this.fb(e,g));await Promise.all(b)}async fb(b,e){if("object"===typeof e)this.i[b]=new Blob([e.str],{type:e.type}),this.U[b]=e.str;else{let g=await this.kb(e);g||(g=this.ib(e));this.i[b]=g}}async kb(b){try{return await (await fetch(b)).blob()}catch(e){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
e),null}}ib(b){b=this.Lb(b);return this.cb(b.data,b.Zb)}Lb(b){var e=b.indexOf(",");if(0>e)throw new URIError("expected comma in data: uri");var g=b.substring(e+1);e=b.substring(5,e).split(";");b=e[0]||"";const m=e[2];g="base64"===e[1]||"base64"===m?atob(g):decodeURIComponent(g);return{Zb:b,data:g}}cb(b,e){var g=b.length;let m=g>>2,q=new Uint8Array(g),w=new Uint32Array(q.buffer,0,m),t,y;for(y=t=0;t<m;++t)w[t]=b.charCodeAt(y++)|b.charCodeAt(y++)<<8|b.charCodeAt(y++)<<16|b.charCodeAt(y++)<<24;for(g&=
3;g--;)q[y]=b.charCodeAt(y),++y;return new Blob([q],{type:e})}Nb(){let b=null;const e=new Promise(q=>b=q),g=new ArrayBuffer(1),m=new MessageChannel;m.port2.onmessage=q=>{q.data&&q.data.arrayBuffer||(this.Qa=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables."));b()};m.port1.postMessage({arrayBuffer:g},[g]);return e}}}"use strict";
{var K=function(){const a=document.activeElement;if(!a)return!1;const c=a.tagName.toLowerCase(),h=new Set("email number password search tel text url".split(" "));return"textarea"===c?!0:"input"===c?h.has(a.type.toLowerCase()||"text"):J(a)},L=function(){try{return window.parent&&window.parent.document.hasFocus()}catch(a){return!1}},M=function(a){(a.metaKey||a.ctrlKey)&&a.preventDefault()},N=function(a){B.has(a.target.tagName.toLowerCase())&&a.preventDefault()},J=function(a){do{if(a.parentNode&&a.hasAttribute("contenteditable"))return!0;
a=a.parentNode}while(a);return!1},Q=async function(a,c,h){if(!/firefox/i.test(navigator.userAgent))return await O(a);var k=await P(a);k=(new DOMParser).parseFromString(k,"image/svg+xml");const n=k.documentElement;if(n.hasAttribute("width")&&n.hasAttribute("height")){const b=n.getAttribute("width"),e=n.getAttribute("height");if(!b.includes("%")&&!e.includes("%"))return await O(a)}n.setAttribute("width",c+"px");n.setAttribute("height",h+"px");k=(new XMLSerializer).serializeToString(k);a=new Blob([k],
{type:"image/svg+xml"});return await O(a)},P=function(a){return new Promise((c,h)=>{let k=new FileReader;k.onload=n=>c(n.target.result);k.onerror=n=>h(n);k.readAsText(a)})},O=async function(a){a=URL.createObjectURL(a);try{return await R(a)}finally{URL.revokeObjectURL(a)}},R=function(a){return new Promise((c,h)=>{const k=new Image;k.onload=()=>c(k);k.onerror=n=>h(n);k.src=a})},S=function(a){return new Promise((c,h)=>{const k=document.createElement("link");k.onload=()=>c(k);k.onerror=n=>h(n);k.rel=
"stylesheet";k.href=a;document.head.appendChild(k)})},T=function(a){return a.sourceCapabilities&&a.sourceCapabilities.firesTouchEvents||a.originalEvent&&a.originalEvent.sourceCapabilities&&a.originalEvent.sourceCapabilities.firesTouchEvents};const l=self.A,d=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),f={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},p={dispatchUserScriptEvent:!0},u={dispatchRuntimeEvent:!0},B=new Set(["canvas","body","html"]);self.C3_GetSvgImageSize=async function(a){a=
await O(a);if(0<a.width&&0<a.height)return[a.width,a.height];{a.style.position="absolute";a.style.left="0px";a.style.top="0px";a.style.visibility="hidden";document.body.appendChild(a);const c=a.getBoundingClientRect();document.body.removeChild(a);return[c.width,c.height]}};self.C3_RasterSvgImageBlob=async function(a,c,h,k,n){a=await Q(a,c,h);const b=document.createElement("canvas");b.width=k;b.height=n;b.getContext("2d").drawImage(a,0,0,c,h);return b};let z=!1;document.addEventListener("pause",()=>
z=!0);document.addEventListener("resume",()=>z=!1);l.K(class extends self.v{constructor(a){super(a,"runtime");this.Na=!0;this.m=-1;this.sa="any";this.Ja=this.Ka=!1;this.ma=this.I=this.j=null;a.a("canvas","update-size",k=>this.Jb(k));a.a("runtime","invoke-download",k=>this.zb(k));a.a("runtime","raster-svg-image",k=>this.Eb(k));a.a("runtime","get-svg-image-size",k=>this.yb(k));a.a("runtime","set-target-orientation",k=>this.Ib(k));a.a("runtime","register-sw",()=>this.Fb());a.a("runtime","post-to-debugger",
k=>this.Fa(k));a.a("runtime","go-to-script",k=>this.Fa(k));a.a("runtime","before-start-ticking",()=>this.qb());a.a("runtime","debug-highlight",k=>this.tb(k));a.a("runtime","enable-device-orientation",()=>this.bb());a.a("runtime","enable-device-motion",()=>this.ab());a.a("runtime","add-stylesheet",k=>this.pb(k));a.a("runtime","alert",k=>this.ba(k));const c=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",k=>{const n=k.target;c.has(n.tagName.toLowerCase())||J(n)||k.preventDefault()});
const h=a.f;window.addEventListener("selectstart",N);window.addEventListener("gesturehold",N);h.addEventListener("selectstart",N);h.addEventListener("gesturehold",N);window.addEventListener("touchstart",N,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",N,{passive:!1}),h.addEventListener("pointerdown",N)):h.addEventListener("touchstart",N);this.H=0;window.addEventListener("mousedown",k=>{1===k.button&&k.preventDefault()});window.addEventListener("mousewheel",
M,{passive:!1});window.addEventListener("wheel",M,{passive:!1});window.addEventListener("resize",()=>this.Kb());a.L()&&window.addEventListener("focusout",()=>{K()||(document.scrollingElement.scrollTop=0)});this.oa=new Set;this.Tb=new WeakSet;this.Rb=!1}qb(){"cordova"===this.g.b?(document.addEventListener("pause",()=>this.ha(!0)),document.addEventListener("resume",()=>this.ha(!1))):document.addEventListener("visibilitychange",()=>this.ha(document.hidden));return{isSuspended:!(!document.hidden&&!z)}}ua(){window.addEventListener("focus",
()=>this.R("window-focus"));window.addEventListener("blur",()=>{this.R("window-blur",{parentHasFocus:L()});this.H=0});window.addEventListener("fullscreenchange",()=>this.ca());window.addEventListener("webkitfullscreenchange",()=>this.ca());window.addEventListener("mozfullscreenchange",()=>this.ca());window.addEventListener("fullscreenerror",c=>this.da(c));window.addEventListener("webkitfullscreenerror",c=>this.da(c));window.addEventListener("mozfullscreenerror",c=>this.da(c));window.addEventListener("keydown",
c=>this.Ea("keydown",c));window.addEventListener("keyup",c=>this.Ea("keyup",c));window.addEventListener("dblclick",c=>this.ea("dblclick",c,f));window.addEventListener("wheel",c=>this.Bb(c));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",c=>{this.aa(c);this.B("pointerdown",c)}),this.g.s&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.I=new self.$a(()=>this.jb(),5),this.I.Ma=!0,window.addEventListener("pointerrawupdate",c=>this.Cb(c))):window.addEventListener("pointermove",
c=>this.B("pointermove",c)),window.addEventListener("pointerup",c=>this.B("pointerup",c)),window.addEventListener("pointercancel",c=>this.B("pointercancel",c))):(window.addEventListener("mousedown",c=>{this.aa(c);this.fa("pointerdown",c)}),window.addEventListener("mousemove",c=>this.fa("pointermove",c)),window.addEventListener("mouseup",c=>this.fa("pointerup",c)),window.addEventListener("touchstart",c=>{this.aa(c);this.O("pointerdown",c)}),window.addEventListener("touchmove",c=>this.O("pointermove",
c)),window.addEventListener("touchend",c=>this.O("pointerup",c)),window.addEventListener("touchcancel",c=>this.O("pointercancel",c)));const a=()=>this.ia();window.addEventListener("pointerup",a,!0);window.addEventListener("touchend",a,!0);window.addEventListener("click",a,!0);window.addEventListener("keydown",a,!0);window.addEventListener("gamepadconnected",a,!0)}R(a,c){r(this,a,c||null,u)}N(){return Math.max(window.innerWidth,1)}M(){return Math.max(window.innerHeight,1)}Kb(){const a=this.N(),c=this.M();
this.R("window-resize",{innerWidth:a,innerHeight:c,devicePixelRatio:window.devicePixelRatio});this.g.L()&&(-1!==this.m&&clearTimeout(this.m),this.Ga(a,c,0))}Mb(a,c,h){-1!==this.m&&clearTimeout(this.m);this.m=setTimeout(()=>this.Ga(a,c,h),48)}Ga(a,c,h){const k=this.N(),n=this.M();this.m=-1;k!=a||n!=c?this.R("window-resize",{innerWidth:k,innerHeight:n,devicePixelRatio:window.devicePixelRatio}):10>h&&this.Mb(k,n,h+1)}Ib(a){this.sa=a.targetOrientation}Ob(){const a=this.sa;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(a).catch(c=>
console.warn("[Construct 3] Failed to lock orientation: ",c));else try{let c=!1;screen.lockOrientation?c=screen.lockOrientation(a):screen.webkitLockOrientation?c=screen.webkitLockOrientation(a):screen.mozLockOrientation?c=screen.mozLockOrientation(a):screen.msLockOrientation&&(c=screen.msLockOrientation(a));c||console.warn("[Construct 3] Failed to lock orientation")}catch(c){console.warn("[Construct 3] Failed to lock orientation: ",c)}}ca(){const a=l.X();a&&"any"!==this.sa&&this.Ob();r(this,"fullscreenchange",
{isFullscreen:a,innerWidth:this.N(),innerHeight:this.M()})}da(a){console.warn("[Construct 3] Fullscreen request failed: ",a);r(this,"fullscreenerror",{isFullscreen:l.X(),innerWidth:this.N(),innerHeight:this.M()})}ha(a){a?this.g.eb():this.g.Ia();r(this,"visibilitychange",{hidden:a})}Ea(a,c){"Backspace"===c.key&&N(c);const h=d.get(c.code)||c.code;x(this,a,{code:h,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},f)}Bb(a){r(this,
"wheel",{clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},f)}ea(a,c,h){T(c)||x(this,a,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,timeStamp:c.timeStamp},h)}fa(a,c){if(!T(c)){var h=this.H;"pointerdown"===a&&0!==h?a="pointermove":"pointerup"===a&&0!==c.buttons&&(a="pointermove");x(this,a,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,
lastButtons:h,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},f);this.H=c.buttons;this.ea(c.type,c,p)}}B(a,c){if(this.I&&"pointermove"!==a){var h=this.I;h.D||(-1!==h.o&&(self.clearTimeout(h.o),h.o=-1),h.T=Date.now())}h=0;"mouse"===c.pointerType&&(h=this.H);x(this,a,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:h,clientX:c.clientX,clientY:c.clientY,
pageX:c.pageX,pageY:c.pageY,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},f);"mouse"===c.pointerType&&(h="mousemove","pointerdown"===a?h="mousedown":"pointerup"===a&&(h="pointerup"),this.ea(h,c,p),this.H=c.buttons)}Cb(a){this.ma=a;a=this.I;if(-1===a.o){var c=Date.now(),h=c-a.T,k=a.Qb;h>=k&&a.Ma?(a.T=c,a.D=!0,a.La(),a.D=!1):a.o=self.setTimeout(a.Vb,Math.max(k-h,4))}}jb(){this.B("pointermove",
this.ma);this.ma=null}O(a,c){for(let h=0,k=c.changedTouches.length;h<k;++h){const n=c.changedTouches[h];x(this,a,{pointerId:n.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:n.clientX,clientY:n.clientY,pageX:n.pageX,pageY:n.pageY,width:2*(n.radiusX||n.webkitRadiusX||0),height:2*(n.radiusY||n.webkitRadiusY||0),pressure:n.force||n.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:n.rotationAngle||0,timeStamp:c.timeStamp},f)}}aa(a){window!==window.top&&window.focus();
this.Da(a.target)&&document.activeElement&&!this.Da(document.activeElement)&&document.activeElement.blur()}Da(a){return!a||a===document||a===window||a===document.body||"canvas"===a.tagName.toLowerCase()}bb(){this.Ka||(this.Ka=!0,window.addEventListener("deviceorientation",a=>this.vb(a)),window.addEventListener("deviceorientationabsolute",a=>this.wb(a)))}ab(){this.Ja||(this.Ja=!0,window.addEventListener("devicemotion",a=>this.ub(a)))}vb(a){r(this,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||
0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},f)}wb(a){r(this,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},f)}ub(a){let c=null;var h=a.acceleration;h&&(c={x:h.x||0,y:h.y||0,z:h.z||0});h=null;var k=a.accelerationIncludingGravity;k&&(h={x:k.x||0,y:k.y||0,z:k.z||0});k=null;const n=a.rotationRate;n&&(k={alpha:n.alpha||0,beta:n.beta||
0,gamma:n.gamma||0});r(this,"devicemotion",{acceleration:c,accelerationIncludingGravity:h,rotationRate:k,interval:a.interval,timeStamp:a.timeStamp},f)}Jb(a){const c=this.g,h=c.f;h.style.width=a.styleWidth+"px";h.style.height=a.styleHeight+"px";h.style.marginLeft=a.marginLeft+"px";h.style.marginTop=a.marginTop+"px";c.ya();this.Na&&(h.style.display="",this.Na=!1)}zb(a){const c=a.url;a=a.filename;const h=document.createElement("a"),k=document.body;h.textContent=a;h.href=c;h.download=a;k.appendChild(h);
h.click();k.removeChild(h)}async Eb(a){var c=a.imageBitmapOpts;a=await self.C3_RasterSvgImageBlob(a.blob,a.imageWidth,a.imageHeight,a.surfaceWidth,a.surfaceHeight);c=c?await createImageBitmap(a,c):await createImageBitmap(a);return{imageBitmap:c,transferables:[c]}}async yb(a){return await self.C3_GetSvgImageSize(a.blob)}async pb(a){await S(a.url)}ia(){var a=[...this.oa];this.oa.clear();if(!this.Rb)for(const c of a)(a=c.play())&&a.catch(()=>{this.Tb.has(c)||this.oa.add(c)})}tb(a){if(a.show){this.j||
(this.j=document.createElement("div"),this.j.id="inspectOutline",document.body.appendChild(this.j));var c=this.j;c.style.display="";c.style.left=a.left-1+"px";c.style.top=a.top-1+"px";c.style.width=a.width+2+"px";c.style.height=a.height+2+"px";c.textContent=a.name}else this.j&&(this.j.style.display="none")}Fb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Fa(a){window.c3_postToMessagePort&&(a.from="runtime",window.c3_postToMessagePort(a))}ob(a,c){return this.g.Za(this.C,{name:a,params:c})}ba(a){alert(a.message)}})}"use strict";
{const l=document.currentScript.src;self.Ya=class{constructor(d){this.V=d;this.c=l?l.substr(0,l.lastIndexOf("/")+1):d.c;this.Sb=Math.min(navigator.hardwareConcurrency||2,16);this.ka=null;this.Oa=[];this.pa=this.la=null}async Xa(){if(this.Pb)throw Error("already initialised");this.Pb=!0;var d=this.V.$("dispatchworker.js");this.ka=await this.V.W(d,this.c,{name:"DispatchWorker"});d=new MessageChannel;this.la=d.port1;this.ka.postMessage({type:"_init","in-port":d.port2},[d.port2]);this.pa=await this.za()}async za(){const d=
this.Oa.length;var f=this.V.$("jobworker.js");f=await this.V.W(f,this.c,{name:"JobWorker"+d});const p=new MessageChannel,u=new MessageChannel;this.ka.postMessage({type:"_addJobWorker",port:p.port1},[p.port1]);f.postMessage({type:"init",number:d,"dispatch-port":p.port2,"output-port":u.port2},[p.port2,u.port2]);this.Oa.push(f);return u.port1}Va(){return{inputPort:this.la,outputPort:this.pa,maxNumWorkers:this.Sb}}Wa(){return[this.la,this.pa]}}}"use strict";
window.C3_IsSupported&&(window.c3_runtimeInterface=new self.A({cc:"undefined"!==typeof OffscreenCanvas,dc:"workermain.js",u:["scripts/c3runtime.js"],$b:"scripts/",ta:[],Sa:"html5"}));"use strict";async function U(l,d){d=d.type;let f=!0;0===d?f=await V():1===d&&(f=await W());r(l,"permission-result",{type:d,result:f})}
async function V(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(l){return console.warn("[Touch] Failed to request orientation permission: ",l),!1}}
async function W(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(l){return console.warn("[Touch] Failed to request motion permission: ",l),!1}}self.A.K(class extends self.v{constructor(l){super(l,"touch");C(this,"request-permission",d=>U(this,d))}});"use strict";
function X(l){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(d=>r(l,"sw-message",d.data))}
function Y(l){l=l.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(l).catch(d=>console.warn("[Construct 3] Failed to lock orientation: ",d));else try{let d=!1;screen.lockOrientation?d=screen.lockOrientation(l):screen.webkitLockOrientation?d=screen.webkitLockOrientation(l):screen.mozLockOrientation?d=screen.mozLockOrientation(l):screen.msLockOrientation&&(d=screen.msLockOrientation(l));d||console.warn("[Construct 3] Failed to lock orientation")}catch(d){console.warn("[Construct 3] Failed to lock orientation: ",
d)}}
self.A.K(class extends self.v{constructor(l){super(l,"browser");this.b="";D(this,[["get-initial-state",d=>{this.b=d.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!==typeof window.is_scirra_arcade}}],["ready-for-sw-messages",()=>X(this)],
["alert",d=>this.ba(d)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",d=>this.ga(d)],["vibrate",d=>{navigator.vibrate&&navigator.vibrate(d.pattern)}],["lock-orientation",d=>Y(d)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():
screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(d){}}],["navigate",d=>{var f=d.type;if("back"===f)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===f)window.forward();else if("home"===f)window.home();else if("reload"===f)location.reload();else if("url"===f){f=d.url;var p=d.target;d=d.exportType;"windows-uwp"===d&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(f)):
self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(f,"_system"):"preview"===d?window.open(f,"_blank"):this.jc||(2===p?window.top.location=f:1===p?window.parent.location=f:window.location=f)}else"new-window"===f&&(f=d.url,p=d.tag,"windows-uwp"===d.exportType&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(f)):self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(f,"_system"):window.open(f,p))}],["request-fullscreen",
d=>{{const f={navigationUI:"auto"};d=d.navUI;1===d?f.navigationUI="hide":2===d&&(f.navigationUI="show");d=document.documentElement;d.requestFullscreen?d.requestFullscreen(f):d.mozRequestFullScreen?d.mozRequestFullScreen(f):d.msRequestFullscreen?d.msRequestFullscreen(f):d.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?d.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):d.webkitRequestFullScreen())}}],["exit-fullscreen",()=>{document.exitFullscreen?document.exitFullscreen():
document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",d=>{location.hash=d.hash}]]);window.addEventListener("online",()=>{r(this,"online-state",{isOnline:!0})});window.addEventListener("offline",()=>{r(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{r(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",
()=>{r(this,"backbutton")});"undefined"!==typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",d=>{d.handled=!0;r(this,"backbutton")})}ba(l){alert(l.message)}ga(l){l=l.isFocus;if("nwjs"===this.b){const d="nwjs"===this.b?nw.Window.get():null;l?d.focus():d.blur()}else l?window.focus():window.blur()}});"use strict";self.A.K(class extends self.v{constructor(l){super(l,"mouse");C(this,"cursor",d=>{document.documentElement.style.cursor=d})}});