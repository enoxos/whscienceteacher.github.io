'use strict';function q(k,d,g,m){k.g.Y(k.C,d,g,m,void 0)}function x(k,d,g,m){k.g.j?q(k,d,g,m):k.g.lb()._OnMessageFromDOM({type:"event",component:k.C,handler:d,dispatchOpts:m||null,data:g,responseId:null})}function C(k,d,g){k.g.a(k.C,d,g)}function G(k,d){for(const [g,m]of d)C(k,g,m)}window.v=class{constructor(k,d){this.g=k;this.C=d}ua(){}};
window.$a=class{constructor(k,d){this.La=k;this.Rb=d;this.s=-1;this.T=-Infinity;this.Wb=()=>{this.s=-1;this.T=Date.now();this.D=!0;this.La();this.D=!1};this.Ma=this.D=!1}};"use strict";function H(k,d){C(k,"get-element",g=>{const m=k.h.get(g.elementId);return d(m,g)})}
window.ic=class extends self.v{constructor(k,d){super(k,d);this.h=new Map;this.ja=!0;G(this,[["create",()=>{throw Error("required override");}],["destroy",g=>{{g=g.elementId;const m=this.h.get(g);this.ja&&m.parentElement.removeChild(m);this.h.delete(g)}}],["set-visible",g=>{this.ja&&(this.h.get(g.elementId).style.display=g.isVisible?"":"none")}],["update-position",g=>{if(this.ja){var m=this.h.get(g.elementId);m.style.left=g.left+"px";m.style.top=g.top+"px";m.style.width=g.width+"px";m.style.height=
g.height+"px";g=g.fontSize;null!==g&&(m.style.fontSize=g+"em")}}],["update-state",g=>{this.h.get(g.elementId);throw Error("required override");}],["focus",g=>this.ga(g)],["set-css-style",g=>{this.h.get(g.elementId).style[g.prop]=g.val}],["set-attribute",g=>{this.h.get(g.elementId).setAttribute(g.name,g.val)}],["remove-attribute",g=>{this.h.get(g.elementId).removeAttribute(g.name)}]]);H(this,g=>g)}ga(k){var d=this.h.get(k.elementId);k.focus?d.focus():d.blur()}};"use strict";
{const k=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);function d(p){if(p.Zb){const c=document.createElement("script");c.async=!1;c.textContent=p.bc;document.head.appendChild(c)}else return new Promise((c,f)=>{const a=document.createElement("script");a.onload=c;a.onerror=f;a.async=!1;a.src=p;document.head.appendChild(a)})}let g=new Audio;const m={"audio/webm; codecs=opus":!!g.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!g.canPlayType("audio/ogg; codecs=opus"),
"audio/webm; codecs=vorbis":!!g.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!g.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!g.canPlayType("audio/mp4"),"audio/mpeg":!!g.canPlayType("audio/mpeg")};g=null;async function u(p){p=await D(p);return(new TextDecoder("utf-8")).decode(p)}function D(p){return new Promise((c,f)=>{const a=new FileReader;a.onload=b=>c(b.target.result);a.onerror=b=>f(b);a.readAsArrayBuffer(p)})}const y=[];let w=0;window.RealFile=window.File;const t=
[],z=new Map,B=new Map;let E=0;const F=[];self.oc=function(p){if("function"!==typeof p)throw Error("runOnStartup called without a function");F.push(p)};const r=new Set(["cordova","playable-ad","instant-games"]);window.A=class p{constructor(c){this.j=c.dc;this.G=null;this.c="";this.ra=c.ac;this.J={};this.na=this.Ra=null;this.S=[];this.F=this.f=this.qa=null;this.m=-1;this.Vb=()=>this.Eb();this.Pa=[];this.b=c.Sa;!this.j||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation||(this.j=!1);r.has(this.b)&&
this.j&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.j=!1);this.Qa=!1;this.U=this.i=null;"html5"!==this.b&&"playable-ad"!==this.b||"file"!==location.protocol.substr(0,4)||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");this.a("runtime","cordova-fetch-local-file",f=>this.rb(f));this.a("runtime",
"create-job-worker",()=>this.sb());"cordova"===this.b?document.addEventListener("deviceready",()=>this.Ca(c)):this.Ca(c)}xa(){return k&&"cordova"===this.b}L(){return k&&r.has(this.b)||navigator.standalone}async Ca(c){if("playable-ad"===this.b){this.i=self.c3_base64files;this.U={};await this.gb();for(let a=0,b=c.u.length;a<b;++a){var f=c.u[a].toLowerCase();this.U.hasOwnProperty(f)?c.u[a]={Zb:!0,bc:this.U[f]}:this.i.hasOwnProperty(f)&&(c.u[a]=URL.createObjectURL(this.i[f]))}}c.Xb?this.c=c.Xb:(f=location.origin,
this.c=("null"===f?"file:///":f)+location.pathname,f=this.c.lastIndexOf("/"),-1!==f&&(this.c=this.c.substr(0,f+1)));if(c.fc)for(const [a,b]of Object.entries(c.fc))this.J[a]=URL.createObjectURL(b);f=new MessageChannel;this.G=f.port1;this.G.onmessage=a=>this._OnMessageFromRuntime(a.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(a=>this.Bb(a));this.F=new self.Ya(this);await this.F.Xa();this.ya();"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&
window.AndroidFullScreen.immersiveMode();await this.Ob();this.j?await this.nb(c,f.port2):await this.mb(c,f.port2)}$(c){return this.J.hasOwnProperty(c)?this.J[c]:c.endsWith("/workermain.js")&&this.J.hasOwnProperty("workermain.js")?this.J["workermain.js"]:"playable-ad"===this.b&&this.i.hasOwnProperty(c.toLowerCase())?URL.createObjectURL(this.i[c.toLowerCase()]):c}async W(c,f,a){if(c.startsWith("blob:"))return new Worker(c,a);if(this.xa()&&"file:"===location.protocol)return c=await this.wa(this.ra+c),
new Worker(URL.createObjectURL(new Blob([c],{type:"application/javascript"})),a);c=new URL(c,f);if(location.origin!==c.origin){c=await fetch(c);if(!c.ok)throw Error("failed to fetch worker script");c=await c.blob();return new Worker(URL.createObjectURL(c),a)}return new Worker(c,a)}ya(){if(this.L()){const c=document.documentElement.style,f=document.body.style,a=window.innerWidth<window.innerHeight,b=a?window.screen.width:window.screen.height;f.height=c.height=(a?window.screen.height:window.screen.width)+
"px";f.width=c.width=b+"px"}}Ba(c){return{baseUrl:this.c,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:p.X(),projectData:c.nc,previewImageBlobs:window.cr_previewImageBlobs||this.i,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:c.Sa,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.mc,jobScheduler:this.F.Va(),supportedAudioFormats:m,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.ra+
"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.ra+"opus.wasm.wasm",isiOSCordova:this.xa(),isiOSWebView:this.L(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async nb(c,f){var a=this.$(c.ec);this.Ra=await this.W(a,this.c,{name:"Runtime"});this.f=document.createElement("canvas");this.f.style.display="none";a=this.f.transferControlToOffscreen();document.body.appendChild(this.f);window.c3canvas=this.f;this.Ra.postMessage(Object.assign(this.Ba(c),{type:"init-runtime",isInWorker:!0,
messagePort:f,canvas:a,workerDependencyScripts:c.ta||[],engineScripts:c.u,projectScripts:window.lc,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[f,a,...this.F.Wa()]);this.S=t.map(b=>new b(this));this.Aa();self.c3_callFunction=(b,e)=>this.qa.ob(b,e);"preview"===this.b&&(self.goToLastErrorScript=()=>this.Y("runtime","go-to-last-error-script"))}async mb(c,f){this.f=document.createElement("canvas");this.f.style.display="none";document.body.appendChild(this.f);window.c3canvas=this.f;this.S=t.map(b=>
new b(this));this.Aa();const a=c.u.map(b=>"string"===typeof b?(new URL(b,this.c)).toString():b);Array.isArray(c.ta)&&a.unshift(...c.ta);await Promise.all(a.map(b=>d(b)));if(c.Ta&&0<c.Ta.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(c.Ta.map(e=>d(e[1]))),Object.values(b).some(e=>!e)){self.setTimeout(()=>this.Ha(b),100);return}}catch(e){console.error("[Preview] Error loading project scripts: ",e);self.setTimeout(()=>this.Ha(b),100);return}}"preview"===this.b&&"object"!==typeof self.hc.jc?
(console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(c=Object.assign(this.Ba(c),{isInWorker:!1,messagePort:f,canvas:this.f,runOnStartupFunctions:F}),this.na=self.C3_CreateRuntime(c),await self.C3_InitRuntime(this.na,c))}Ha(c){c=`Failed to load project script '${Object.entries(c).filter(f=>!f[1]).map(f=>f[0])[0]}'. Check all your JavaScript code has valid syntax.`;
console.error("[Preview] "+c);alert(c)}async sb(){const c=await this.F.za();return{outputPort:c,transferables:[c]}}lb(){if(this.j)throw Error("not available in worker mode");return this.na}Y(c,f,a,b,e){this.G.postMessage({type:"event",component:c,handler:f,dispatchOpts:b||null,data:a,responseId:null},this.Qa?void 0:e)}Za(c,f){const a=E++,b=new Promise((e,h)=>{B.set(a,{resolve:e,reject:h})});this.G.postMessage({type:"event",component:c,handler:"js-invoke-function",dispatchOpts:null,data:f,responseId:a},
void 0);return b}["_OnMessageFromRuntime"](c){const f=c.type;if("event"===f)return this.xb(c);if("result"===f)this.Hb(c);else if("runtime-ready"===f)this.Ib();else if("alert"===f)alert(c.message);else throw Error(`unknown message '${f}'`);}xb(c){const f=c.component,a=c.handler,b=c.data,e=c.responseId;if(c=z.get(f))if(c=c.get(a)){var h=null;try{h=c(b)}catch(l){console.error(`Exception in '${f}' handler '${a}':`,l);null!==e&&this.P(e,!1,""+l);return}if(null===e)return h;h&&h.then?h.then(l=>this.P(e,
!0,l)).catch(l=>{console.error(`Rejection from '${f}' handler '${a}':`,l);this.P(e,!1,""+l)}):this.P(e,!0,h)}else console.warn(`[DOM] No handler '${a}' for component '${f}'`);else console.warn(`[DOM] No event handlers for component '${f}'`)}P(c,f,a){let b;a&&a.transferables&&(b=a.transferables);this.G.postMessage({type:"result",responseId:c,isOk:f,result:a},b)}Hb(c){const f=c.responseId,a=c.isOk;c=c.result;const b=B.get(f);a?b.resolve(c):b.reject(c);B.delete(f)}a(c,f,a){let b=z.get(c);b||(b=new Map,
z.set(c,b));if(b.has(f))throw Error(`[DOM] Component '${c}' already has handler '${f}'`);b.set(f,a)}static K(c){if(t.includes(c))throw Error("DOM handler already added");t.push(c)}Aa(){for(const c of this.S)if("runtime"===c.C){this.qa=c;return}throw Error("cannot find runtime DOM handler");}Bb(c){this.Y("debugger","message",c)}Ib(){for(const c of this.S)c.ua()}static X(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}Ia(){-1===this.m&&this.Pa.length&&
(this.m=requestAnimationFrame(this.Vb))}eb(){-1!==this.m&&(cancelAnimationFrame(this.m),this.m=-1)}Eb(){this.m=-1;for(const c of this.Pa)c();this.Ia()}ia(){this.qa.ia()}async rb(c){const f=c.filename;switch(c.as){case "text":return await this.Ua(f);case "buffer":return await this.wa(f);default:throw Error("unsupported type");}}va(c){const f=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((a,b)=>{window.resolveLocalFileSystemURL(f,e=>{e.file(a,b)},b)})}async Ua(c){c=
await this.va(c);return await u(c)}Z(){if(y.length&&!(8<=w)){w++;var c=y.shift();this.hb(c.filename,c.cc,c.Yb)}}wa(c){return new Promise((f,a)=>{y.push({filename:c,cc:b=>{w--;this.Z();f(b)},Yb:b=>{w--;this.Z();a(b)}});this.Z()})}async hb(c,f,a){try{const b=await this.va(c),e=await D(b);f(e)}catch(b){a(b)}}async gb(){const c=[];for(const [f,a]of Object.entries(this.i))c.push(this.fb(f,a));await Promise.all(c)}async fb(c,f){if("object"===typeof f)this.i[c]=new Blob([f.str],{type:f.type}),this.U[c]=
f.str;else{let a=await this.kb(f);a||(a=this.ib(f));this.i[c]=a}}async kb(c){try{return await (await fetch(c)).blob()}catch(f){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",f),null}}ib(c){c=this.Mb(c);return this.cb(c.data,c.$b)}Mb(c){var f=c.indexOf(",");if(0>f)throw new URIError("expected comma in data: uri");var a=c.substring(f+1);
f=c.substring(5,f).split(";");c=f[0]||"";const b=f[2];a="base64"===f[1]||"base64"===b?atob(a):decodeURIComponent(a);return{$b:c,data:a}}cb(c,f){var a=c.length;let b=a>>2,e=new Uint8Array(a),h=new Uint32Array(e.buffer,0,b),l,n;for(n=l=0;l<b;++l)h[l]=c.charCodeAt(n++)|c.charCodeAt(n++)<<8|c.charCodeAt(n++)<<16|c.charCodeAt(n++)<<24;for(a&=3;a--;)e[n]=c.charCodeAt(n),++n;return new Blob([e],{type:f})}Ob(){let c=null;const f=new Promise(e=>c=e),a=new ArrayBuffer(1),b=new MessageChannel;b.port2.onmessage=
e=>{e.data&&e.data.arrayBuffer||(this.Qa=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables."));c()};b.port1.postMessage({arrayBuffer:a},[a]);return f}}}"use strict";
{const k=self.A;function d(a){return a.sourceCapabilities&&a.sourceCapabilities.firesTouchEvents||a.originalEvent&&a.originalEvent.sourceCapabilities&&a.originalEvent.sourceCapabilities.firesTouchEvents}const g=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),m={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},u={dispatchUserScriptEvent:!0},D={dispatchRuntimeEvent:!0};function y(a){return new Promise((b,e)=>{const h=document.createElement("link");h.onload=()=>b(h);h.onerror=l=>e(l);h.rel=
"stylesheet";h.href=a;document.head.appendChild(h)})}function w(a){return new Promise((b,e)=>{const h=new Image;h.onload=()=>b(h);h.onerror=l=>e(l);h.src=a})}async function t(a){a=URL.createObjectURL(a);try{return await w(a)}finally{URL.revokeObjectURL(a)}}function z(a){return new Promise((b,e)=>{let h=new FileReader;h.onload=l=>b(l.target.result);h.onerror=l=>e(l);h.readAsText(a)})}async function B(a,b,e){if(!/firefox/i.test(navigator.userAgent))return await t(a);var h=await z(a);h=(new DOMParser).parseFromString(h,
"image/svg+xml");const l=h.documentElement;if(l.hasAttribute("width")&&l.hasAttribute("height")){const n=l.getAttribute("width"),I=l.getAttribute("height");if(!n.includes("%")&&!I.includes("%"))return await t(a)}l.setAttribute("width",b+"px");l.setAttribute("height",e+"px");h=(new XMLSerializer).serializeToString(h);a=new Blob([h],{type:"image/svg+xml"});return await t(a)}function E(a){do{if(a.parentNode&&a.hasAttribute("contenteditable"))return!0;a=a.parentNode}while(a);return!1}const F=new Set(["canvas",
"body","html"]);function r(a){F.has(a.target.tagName.toLowerCase())&&a.preventDefault()}function p(a){(a.metaKey||a.ctrlKey)&&a.preventDefault()}self.C3_GetSvgImageSize=async function(a){a=await t(a);if(0<a.width&&0<a.height)return[a.width,a.height];{a.style.position="absolute";a.style.left="0px";a.style.top="0px";a.style.visibility="hidden";document.body.appendChild(a);const b=a.getBoundingClientRect();document.body.removeChild(a);return[b.width,b.height]}};self.C3_RasterSvgImageBlob=async function(a,
b,e,h,l){a=await B(a,b,e);const n=document.createElement("canvas");n.width=h;n.height=l;n.getContext("2d").drawImage(a,0,0,b,e);return n};let c=!1;document.addEventListener("pause",()=>c=!0);document.addEventListener("resume",()=>c=!1);function f(){try{return window.parent&&window.parent.document.hasFocus()}catch(a){return!1}}k.K(class extends self.v{constructor(a){super(a,"runtime");this.Na=!0;this.o=-1;this.sa="any";this.Ja=this.Ka=!1;this.ma=this.I=this.l=null;a.a("canvas","update-size",h=>this.Kb(h));
a.a("runtime","invoke-download",h=>this.Ab(h));a.a("runtime","raster-svg-image",h=>this.Fb(h));a.a("runtime","get-svg-image-size",h=>this.yb(h));a.a("runtime","set-target-orientation",h=>this.Jb(h));a.a("runtime","register-sw",()=>this.Gb());a.a("runtime","post-to-debugger",h=>this.Fa(h));a.a("runtime","go-to-script",h=>this.Fa(h));a.a("runtime","before-start-ticking",()=>this.qb());a.a("runtime","debug-highlight",h=>this.tb(h));a.a("runtime","enable-device-orientation",()=>this.bb());a.a("runtime",
"enable-device-motion",()=>this.ab());a.a("runtime","add-stylesheet",h=>this.pb(h));a.a("runtime","alert",h=>this.ba(h));a.a("runtime","hide-cordova-splash",()=>this.zb());const b=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",h=>{const l=h.target;b.has(l.tagName.toLowerCase())||E(l)||h.preventDefault()});const e=a.f;window.addEventListener("selectstart",r);window.addEventListener("gesturehold",r);e.addEventListener("selectstart",r);e.addEventListener("gesturehold",
r);window.addEventListener("touchstart",r,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",r,{passive:!1}),e.addEventListener("pointerdown",r)):e.addEventListener("touchstart",r);this.H=0;window.addEventListener("mousedown",h=>{1===h.button&&h.preventDefault()});window.addEventListener("mousewheel",p,{passive:!1});window.addEventListener("wheel",p,{passive:!1});window.addEventListener("resize",()=>this.Lb());a.L()&&window.addEventListener("focusout",()=>{{const n=
document.activeElement;if(n){var h=n.tagName.toLowerCase();var l=new Set("email number password search tel text url".split(" "));h="textarea"===h?!0:"input"===h?l.has(n.type.toLowerCase()||"text"):E(n)}else h=!1}h||(document.scrollingElement.scrollTop=0)});this.oa=new Set;this.Ub=new WeakSet;this.Sb=!1}qb(){"cordova"===this.g.b?(document.addEventListener("pause",()=>this.ha(!0)),document.addEventListener("resume",()=>this.ha(!1))):document.addEventListener("visibilitychange",()=>this.ha(document.hidden));
return{isSuspended:!(!document.hidden&&!c)}}ua(){window.addEventListener("focus",()=>this.R("window-focus"));window.addEventListener("blur",()=>{this.R("window-blur",{parentHasFocus:f()});this.H=0});window.addEventListener("fullscreenchange",()=>this.ca());window.addEventListener("webkitfullscreenchange",()=>this.ca());window.addEventListener("mozfullscreenchange",()=>this.ca());window.addEventListener("fullscreenerror",b=>this.da(b));window.addEventListener("webkitfullscreenerror",b=>this.da(b));
window.addEventListener("mozfullscreenerror",b=>this.da(b));window.addEventListener("keydown",b=>this.Ea("keydown",b));window.addEventListener("keyup",b=>this.Ea("keyup",b));window.addEventListener("dblclick",b=>this.ea("dblclick",b,m));window.addEventListener("wheel",b=>this.Cb(b));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",b=>{this.aa(b);this.B("pointerdown",b)}),this.g.j&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.I=new self.$a(()=>this.jb(),
5),this.I.Ma=!0,window.addEventListener("pointerrawupdate",b=>this.Db(b))):window.addEventListener("pointermove",b=>this.B("pointermove",b)),window.addEventListener("pointerup",b=>this.B("pointerup",b)),window.addEventListener("pointercancel",b=>this.B("pointercancel",b))):(window.addEventListener("mousedown",b=>{this.aa(b);this.fa("pointerdown",b)}),window.addEventListener("mousemove",b=>this.fa("pointermove",b)),window.addEventListener("mouseup",b=>this.fa("pointerup",b)),window.addEventListener("touchstart",
b=>{this.aa(b);this.O("pointerdown",b)}),window.addEventListener("touchmove",b=>this.O("pointermove",b)),window.addEventListener("touchend",b=>this.O("pointerup",b)),window.addEventListener("touchcancel",b=>this.O("pointercancel",b)));const a=()=>this.ia();window.addEventListener("pointerup",a,!0);window.addEventListener("touchend",a,!0);window.addEventListener("click",a,!0);window.addEventListener("keydown",a,!0);window.addEventListener("gamepadconnected",a,!0)}R(a,b){q(this,a,b||null,D)}N(){return Math.max(window.innerWidth,
1)}M(){return Math.max(window.innerHeight,1)}Lb(){const a=this.N(),b=this.M();this.R("window-resize",{innerWidth:a,innerHeight:b,devicePixelRatio:window.devicePixelRatio});this.g.L()&&(-1!==this.o&&clearTimeout(this.o),this.Ga(a,b,0))}Nb(a,b,e){-1!==this.o&&clearTimeout(this.o);this.o=setTimeout(()=>this.Ga(a,b,e),48)}Ga(a,b,e){const h=this.N(),l=this.M();this.o=-1;h!=a||l!=b?this.R("window-resize",{innerWidth:h,innerHeight:l,devicePixelRatio:window.devicePixelRatio}):10>e&&this.Nb(h,l,e+1)}Jb(a){this.sa=
a.targetOrientation}Pb(){const a=this.sa;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(a).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let b=!1;screen.lockOrientation?b=screen.lockOrientation(a):screen.webkitLockOrientation?b=screen.webkitLockOrientation(a):screen.mozLockOrientation?b=screen.mozLockOrientation(a):screen.msLockOrientation&&(b=screen.msLockOrientation(a));b||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",
b)}}ca(){const a=k.X();a&&"any"!==this.sa&&this.Pb();q(this,"fullscreenchange",{isFullscreen:a,innerWidth:this.N(),innerHeight:this.M()})}da(a){console.warn("[Construct 3] Fullscreen request failed: ",a);q(this,"fullscreenerror",{isFullscreen:k.X(),innerWidth:this.N(),innerHeight:this.M()})}ha(a){a?this.g.eb():this.g.Ia();q(this,"visibilitychange",{hidden:a})}Ea(a,b){"Backspace"===b.key&&r(b);const e=g.get(b.code)||b.code;x(this,a,{code:e,key:b.key,which:b.which,repeat:b.repeat,altKey:b.altKey,ctrlKey:b.ctrlKey,
metaKey:b.metaKey,shiftKey:b.shiftKey,timeStamp:b.timeStamp},m)}Cb(a){q(this,"wheel",{clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},m)}ea(a,b,e){d(b)||x(this,a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,timeStamp:b.timeStamp},e)}fa(a,b){if(!d(b)){var e=this.H;"pointerdown"===a&&0!==e?a="pointermove":"pointerup"===a&&0!==b.buttons&&(a=
"pointermove");x(this,a,{pointerId:1,pointerType:"mouse",button:b.button,buttons:b.buttons,lastButtons:e,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:b.timeStamp},m);this.H=b.buttons;this.ea(b.type,b,u)}}B(a,b){if(this.I&&"pointermove"!==a){var e=this.I;e.D||(-1!==e.s&&(self.clearTimeout(e.s),e.s=-1),e.T=Date.now())}e=0;"mouse"===b.pointerType&&(e=this.H);x(this,a,{pointerId:b.pointerId,pointerType:b.pointerType,
button:b.button,buttons:b.buttons,lastButtons:e,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,width:b.width||0,height:b.height||0,pressure:b.pressure||0,tangentialPressure:b.tangentialPressure||0,tiltX:b.tiltX||0,tiltY:b.tiltY||0,twist:b.twist||0,timeStamp:b.timeStamp},m);"mouse"===b.pointerType&&(e="mousemove","pointerdown"===a?e="mousedown":"pointerup"===a&&(e="pointerup"),this.ea(e,b,u),this.H=b.buttons)}Db(a){this.ma=a;a=this.I;if(-1===a.s){var b=Date.now(),e=b-a.T,h=a.Rb;e>=
h&&a.Ma?(a.T=b,a.D=!0,a.La(),a.D=!1):a.s=self.setTimeout(a.Wb,Math.max(h-e,4))}}jb(){this.B("pointermove",this.ma);this.ma=null}O(a,b){for(let e=0,h=b.changedTouches.length;e<h;++e){const l=b.changedTouches[e];x(this,a,{pointerId:l.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:l.clientX,clientY:l.clientY,pageX:l.pageX,pageY:l.pageY,width:2*(l.radiusX||l.webkitRadiusX||0),height:2*(l.radiusY||l.webkitRadiusY||0),pressure:l.force||l.webkitForce||0,tangentialPressure:0,tiltX:0,
tiltY:0,twist:l.rotationAngle||0,timeStamp:b.timeStamp},m)}}aa(a){window!==window.top&&window.focus();this.Da(a.target)&&document.activeElement&&!this.Da(document.activeElement)&&document.activeElement.blur()}Da(a){return!a||a===document||a===window||a===document.body||"canvas"===a.tagName.toLowerCase()}bb(){this.Ka||(this.Ka=!0,window.addEventListener("deviceorientation",a=>this.vb(a)),window.addEventListener("deviceorientationabsolute",a=>this.wb(a)))}ab(){this.Ja||(this.Ja=!0,window.addEventListener("devicemotion",
a=>this.ub(a)))}vb(a){q(this,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},m)}wb(a){q(this,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},m)}ub(a){let b=null;var e=a.acceleration;e&&(b={x:e.x||0,y:e.y||0,z:e.z||0});e=null;var h=a.accelerationIncludingGravity;h&&(e={x:h.x||
0,y:h.y||0,z:h.z||0});h=null;const l=a.rotationRate;l&&(h={alpha:l.alpha||0,beta:l.beta||0,gamma:l.gamma||0});q(this,"devicemotion",{acceleration:b,accelerationIncludingGravity:e,rotationRate:h,interval:a.interval,timeStamp:a.timeStamp},m)}Kb(a){const b=this.g,e=b.f;e.style.width=a.styleWidth+"px";e.style.height=a.styleHeight+"px";e.style.marginLeft=a.marginLeft+"px";e.style.marginTop=a.marginTop+"px";b.ya();this.Na&&(e.style.display="",this.Na=!1)}Ab(a){const b=a.url;a=a.filename;const e=document.createElement("a"),
h=document.body;e.textContent=a;e.href=b;e.download=a;h.appendChild(e);e.click();h.removeChild(e)}async Fb(a){var b=a.imageBitmapOpts;a=await self.C3_RasterSvgImageBlob(a.blob,a.imageWidth,a.imageHeight,a.surfaceWidth,a.surfaceHeight);b=b?await createImageBitmap(a,b):await createImageBitmap(a);return{imageBitmap:b,transferables:[b]}}async yb(a){return await self.C3_GetSvgImageSize(a.blob)}async pb(a){await y(a.url)}ia(){var a=[...this.oa];this.oa.clear();if(!this.Sb)for(const b of a)(a=b.play())&&
a.catch(()=>{this.Ub.has(b)||this.oa.add(b)})}zb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}tb(a){if(a.show){this.l||(this.l=document.createElement("div"),this.l.id="inspectOutline",document.body.appendChild(this.l));var b=this.l;b.style.display="";b.style.left=a.left-1+"px";b.style.top=a.top-1+"px";b.style.width=a.width+2+"px";b.style.height=a.height+2+"px";b.textContent=a.name}else this.l&&(this.l.style.display="none")}Gb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Fa(a){window.c3_postToMessagePort&&
(a.from="runtime",window.c3_postToMessagePort(a))}ob(a,b){return this.g.Za(this.C,{name:a,params:b})}ba(a){alert(a.message)}})}"use strict";
{const k=document.currentScript.src;self.Ya=class{constructor(d){this.V=d;this.c=k?k.substr(0,k.lastIndexOf("/")+1):d.c;this.Tb=Math.min(navigator.hardwareConcurrency||2,16);this.ka=null;this.Oa=[];this.pa=this.la=null}async Xa(){if(this.Qb)throw Error("already initialised");this.Qb=!0;var d=this.V.$("dispatchworker.js");this.ka=await this.V.W(d,this.c,{name:"DispatchWorker"});d=new MessageChannel;this.la=d.port1;this.ka.postMessage({type:"_init","in-port":d.port2},[d.port2]);this.pa=await this.za()}async za(){const d=
this.Oa.length;var g=this.V.$("jobworker.js");g=await this.V.W(g,this.c,{name:"JobWorker"+d});const m=new MessageChannel,u=new MessageChannel;this.ka.postMessage({type:"_addJobWorker",port:m.port1},[m.port1]);g.postMessage({type:"init",number:d,"dispatch-port":m.port2,"output-port":u.port2},[m.port2,u.port2]);this.Oa.push(g);return u.port1}Va(){return{inputPort:this.la,outputPort:this.pa,maxNumWorkers:this.Tb}}Wa(){return[this.la,this.pa]}}}"use strict";
window.C3_IsSupported&&(window.c3_runtimeInterface=new self.A({dc:!0,ec:"workermain.js",u:["scripts/c3runtime.js"],ac:"scripts/",ta:[],Sa:"html5"}));"use strict";async function J(k,d){d=d.type;let g=!0;0===d?g=await K():1===d&&(g=await L());q(k,"permission-result",{type:d,result:g})}
async function K(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(k){return console.warn("[Touch] Failed to request orientation permission: ",k),!1}}
async function L(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(k){return console.warn("[Touch] Failed to request motion permission: ",k),!1}}self.A.K(class extends self.v{constructor(k){super(k,"touch");C(this,"request-permission",d=>J(this,d))}});"use strict";
function M(k){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(d=>q(k,"sw-message",d.data))}
function N(k){k=k.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(k).catch(d=>console.warn("[Construct 3] Failed to lock orientation: ",d));else try{let d=!1;screen.lockOrientation?d=screen.lockOrientation(k):screen.webkitLockOrientation?d=screen.webkitLockOrientation(k):screen.mozLockOrientation?d=screen.mozLockOrientation(k):screen.msLockOrientation&&(d=screen.msLockOrientation(k));d||console.warn("[Construct 3] Failed to lock orientation")}catch(d){console.warn("[Construct 3] Failed to lock orientation: ",
d)}}
self.A.K(class extends self.v{constructor(k){super(k,"browser");this.b="";G(this,[["get-initial-state",d=>{this.b=d.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!==typeof window.is_scirra_arcade}}],["ready-for-sw-messages",()=>M(this)],
["alert",d=>this.ba(d)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",d=>this.ga(d)],["vibrate",d=>{navigator.vibrate&&navigator.vibrate(d.pattern)}],["lock-orientation",d=>N(d)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():
screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(d){}}],["navigate",d=>{var g=d.type;if("back"===g)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===g)window.forward();else if("home"===g)window.home();else if("reload"===g)location.reload();else if("url"===g){g=d.url;var m=d.target;d=d.exportType;"windows-uwp"===d&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(g)):
self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(g,"_system"):"preview"===d?window.open(g,"_blank"):this.kc||(2===m?window.top.location=g:1===m?window.parent.location=g:window.location=g)}else"new-window"===g&&(g=d.url,m=d.tag,"windows-uwp"===d.exportType&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(g)):self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(g,"_system"):window.open(g,m))}],["request-fullscreen",
d=>{{const g={navigationUI:"auto"};d=d.navUI;1===d?g.navigationUI="hide":2===d&&(g.navigationUI="show");d=document.documentElement;d.requestFullscreen?d.requestFullscreen(g):d.mozRequestFullScreen?d.mozRequestFullScreen(g):d.msRequestFullscreen?d.msRequestFullscreen(g):d.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?d.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):d.webkitRequestFullScreen())}}],["exit-fullscreen",()=>{document.exitFullscreen?document.exitFullscreen():
document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",d=>{location.hash=d.hash}]]);window.addEventListener("online",()=>{q(this,"online-state",{isOnline:!0})});window.addEventListener("offline",()=>{q(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{q(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",
()=>{q(this,"backbutton")});"undefined"!==typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",d=>{d.handled=!0;q(this,"backbutton")})}ba(k){alert(k.message)}ga(k){k=k.isFocus;if("nwjs"===this.b){const d="nwjs"===this.b?nw.Window.get():null;k?d.focus():d.blur()}else k?window.focus():window.blur()}});"use strict";self.A.K(class extends self.v{constructor(k){super(k,"mouse");C(this,"cursor",d=>{document.documentElement.style.cursor=d})}});