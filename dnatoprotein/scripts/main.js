'use strict';function r(h,l,g,m){h.f.Z(h.D,l,g,m,void 0)}function w(h,l,g,m){h.f.l?r(h,l,g,m):h.f.hb()._OnMessageFromDOM({type:"event",component:h.D,handler:l,dispatchOpts:m||null,data:g,responseId:null})}function D(h,l,g){h.f.a(h.D,l,g)}function E(h,l){for(const [g,m]of l)D(h,g,m)}window.X=class{constructor(h,l){this.f=h;this.D=l}ua(){}};
window.Wa=class{constructor(h,l){this.La=h;this.Nb=l;this.A=-1;this.S=-Infinity;this.Sb=()=>{this.A=-1;this.S=Date.now();this.F=!0;this.La();this.F=!1};this.Ma=this.F=!1}};"use strict";function F(h,l){D(h,"get-element",g=>{const m=h.h.get(g.elementId);return l(m,g)})}
window.dc=class extends self.X{constructor(h,l){super(h,l);this.h=new Map;this.ja=!0;E(this,[["create",()=>{throw Error("required override");}],["destroy",g=>{{g=g.elementId;const m=this.h.get(g);this.ja&&m.parentElement.removeChild(m);this.h.delete(g)}}],["set-visible",g=>{this.ja&&(this.h.get(g.elementId).style.display=g.isVisible?"":"none")}],["update-position",g=>{if(this.ja){var m=this.h.get(g.elementId);m.style.left=g.left+"px";m.style.top=g.top+"px";m.style.width=g.width+"px";m.style.height=
g.height+"px";g=g.fontSize;null!==g&&(m.style.fontSize=g+"em")}}],["update-state",g=>{this.h.get(g.elementId);throw Error("required override");}],["focus",g=>{{const m=this.h.get(g.elementId);g.focus?m.focus():m.blur()}}],["set-css-style",g=>{this.h.get(g.elementId).style[g.prop]=g.val}],["set-attribute",g=>{this.h.get(g.elementId).setAttribute(g.name,g.val)}],["remove-attribute",g=>{this.h.get(g.elementId).removeAttribute(g.name)}]]);F(this,g=>g)}};"use strict";
{const h=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);function l(p){if(p.Vb){const c=document.createElement("script");c.async=!1;c.textContent=p.Yb;document.head.appendChild(c)}else return new Promise((c,d)=>{const a=document.createElement("script");a.onload=c;a.onerror=d;a.async=!1;a.src=p;document.head.appendChild(a)})}let g=new Audio;const m={"audio/webm; codecs=opus":!!g.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!g.canPlayType("audio/ogg; codecs=opus"),
"audio/webm; codecs=vorbis":!!g.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!g.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!g.canPlayType("audio/mp4"),"audio/mpeg":!!g.canPlayType("audio/mpeg")};g=null;async function u(p){p=await A(p);return(new TextDecoder("utf-8")).decode(p)}function A(p){return new Promise((c,d)=>{const a=new FileReader;a.onload=b=>c(b.target.result);a.onerror=b=>d(b);a.readAsArrayBuffer(p)})}const x=[];let v=0;window.RealFile=window.File;const t=
[],y=new Map,z=new Map;let B=0;const C=[];self.kc=function(p){if("function"!==typeof p)throw Error("runOnStartup called without a function");C.push(p)};const q=new Set(["cordova","playable-ad","instant-games"]);window.$=class p{constructor(c){this.l=c.$b;this.H=null;this.b="";this.V=c.Xb;this.K={};this.j=this.na=this.Qa=null;this.R=[];this.G=this.g=this.qa=null;this.u=-1;this.Rb=()=>this.Bb();this.Pa=[];this.c=c.Ra;!this.l||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation||(this.l=!1);
q.has(this.c)&&this.l&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.l=!1);this.T=this.i=null;"html5"!==this.c&&"playable-ad"!==this.c||"file"!==location.protocol.substr(0,4)||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");this.a("runtime","cordova-fetch-local-file",d=>this.ob(d));this.a("runtime",
"create-job-worker",()=>this.pb());"cordova"===this.c?document.addEventListener("deviceready",()=>this.Ba(c)):this.Ba(c)}xa(){return h&&"cordova"===this.c}L(){return h&&q.has(this.c)||navigator.standalone}async Ba(c){"preview"===this.c&&(this.j=document.createElement("div"),this.j.className="previewLoadingMessage",this.j.textContent=c.ic,document.body.appendChild(this.j));if("playable-ad"===this.c){this.i=self.c3_base64files;this.T={};await this.bb();for(let a=0,b=c.B.length;a<b;++a){var d=c.B[a].toLowerCase();
this.T.hasOwnProperty(d)?c.B[a]={Vb:!0,Yb:this.T[d]}:this.i.hasOwnProperty(d)&&(c.B[a]=URL.createObjectURL(this.i[d]))}}c.Tb?this.b=c.Tb:(d=location.origin,this.b=("null"===d?"file:///":d)+location.pathname,d=this.b.lastIndexOf("/"),-1!==d&&(this.b=this.b.substr(0,d+1)));if(c.bc)for(const [a,b]of Object.entries(c.bc))this.K[a]=URL.createObjectURL(b);d=new MessageChannel;this.H=d.port1;this.H.onmessage=a=>this._OnMessageFromRuntime(a.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(a=>
this.yb(a));this.G=new self.Ua(this);await G(this.G);this.ya();"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();this.l?await this.jb(c,d.port2):await this.ib(c,d.port2)}ba(c){return this.K.hasOwnProperty(c)?this.K[c]:c.endsWith("/workermain.js")&&this.K.hasOwnProperty("workermain.js")?this.K["workermain.js"]:"playable-ad"===this.c&&this.i.hasOwnProperty(c.toLowerCase())?URL.createObjectURL(this.i[c.toLowerCase()]):
c}async W(c,d,a){if(c.startsWith("blob:"))return new Worker(c,a);if(this.xa()&&"file:"===location.protocol)return c=await this.wa(this.V+c),new Worker(URL.createObjectURL(new Blob([c],{type:"application/javascript"})),a);c=new URL(c,d);if(location.origin!==c.origin){c=await fetch(c);if(!c.ok)throw Error("failed to fetch worker script");c=await c.blob();return new Worker(URL.createObjectURL(c),a)}return new Worker(c,a)}o(){return Math.max(window.innerWidth,1)}m(){return Math.max(window.innerHeight,
1)}ya(){if(this.L()){const c=document.documentElement.style,d=document.body.style,a=window.innerWidth<window.innerHeight,b=a?window.screen.width:window.screen.height;d.height=c.height=(a?window.screen.height:window.screen.width)+"px";d.width=c.width=b+"px"}}Aa(c){var d=this.G;return{baseUrl:this.b,windowInnerWidth:this.o(),windowInnerHeight:this.m(),devicePixelRatio:window.devicePixelRatio,isFullscreen:p.Y(),projectData:c.jc,previewImageBlobs:window.cr_previewImageBlobs||this.i,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,
exportType:c.Ra,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.hc,jobScheduler:{inputPort:d.la,outputPort:d.pa,maxNumWorkers:d.Pb},supportedAudioFormats:m,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.V+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.V+"opus.wasm.wasm",isiOSCordova:this.xa(),isiOSWebView:this.L(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async jb(c,d){var a=this.ba(c.ac);this.Qa=await this.W(a,this.b,{name:"Runtime"});this.g=document.createElement("canvas");
this.g.style.display="none";a=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;this.Qa.postMessage(Object.assign(this.Aa(c),{type:"init-runtime",isInWorker:!0,messagePort:d,canvas:a,workerDependencyScripts:c.sa||[],engineScripts:c.B,projectScripts:window.fc,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[d,a,...H(this.G)]);this.R=t.map(b=>new b(this));this.za();self.c3_callFunction=(b,e)=>this.qa.kb(b,e);"preview"===this.c&&(self.goToLastErrorScript=
()=>this.Z("runtime","go-to-last-error-script"))}async ib(c,d){this.g=document.createElement("canvas");this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.R=t.map(b=>new b(this));this.za();const a=c.B.map(b=>"string"===typeof b?(new URL(b,this.b)).toString():b);Array.isArray(c.sa)&&a.unshift(...c.sa);await Promise.all(a.map(b=>l(b)));if(c.Sa&&0<c.Sa.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(c.Sa.map(e=>l(e[1]))),Object.values(b).some(e=>
!e)){self.setTimeout(()=>this.Ha(b),100);return}}catch(e){console.error("[Preview] Error loading project scripts: ",e);self.setTimeout(()=>this.Ha(b),100);return}}"preview"===this.c&&"object"!==typeof self.cc.ec?(this.P(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(c=Object.assign(this.Aa(c),{isInWorker:!1,messagePort:d,
canvas:this.g,runOnStartupFunctions:C}),this.Da(),this.na=self.C3_CreateRuntime(c),await self.C3_InitRuntime(this.na,c))}Ha(c){this.P();c=`Failed to load project script '${Object.entries(c).filter(d=>!d[1]).map(d=>d[0])[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+c);alert(c)}Da(){this.P()}P(){this.j&&(this.j.parentElement.removeChild(this.j),this.j=null)}async pb(){const c=await I(this.G);return{outputPort:c,transferables:[c]}}hb(){if(this.l)throw Error("not available in worker mode");
return this.na}Z(c,d,a,b,e){this.H.postMessage({type:"event",component:c,handler:d,dispatchOpts:b||null,data:a,responseId:null},e)}Va(c,d){const a=B++,b=new Promise((e,f)=>{z.set(a,{resolve:e,reject:f})});this.H.postMessage({type:"event",component:c,handler:"js-invoke-function",dispatchOpts:null,data:d,responseId:a},void 0);return b}["_OnMessageFromRuntime"](c){const d=c.type;if("event"===d)return this.ub(c);if("result"===d)this.Eb(c);else if("runtime-ready"===d)this.Fb();else if("alert-error"===
d)this.P(),alert(c.message);else if("creating-runtime"===d)this.Da();else throw Error(`unknown message '${d}'`);}ub(c){const d=c.component,a=c.handler,b=c.data,e=c.responseId;if(c=y.get(d))if(c=c.get(a)){var f=null;try{f=c(b)}catch(k){console.error(`Exception in '${d}' handler '${a}':`,k);null!==e&&this.N(e,!1,""+k);return}if(null===e)return f;f&&f.then?f.then(k=>this.N(e,!0,k)).catch(k=>{console.error(`Rejection from '${d}' handler '${a}':`,k);this.N(e,!1,""+k)}):this.N(e,!0,f)}else console.warn(`[DOM] No handler '${a}' for component '${d}'`);
else console.warn(`[DOM] No event handlers for component '${d}'`)}N(c,d,a){let b;a&&a.transferables&&(b=a.transferables);this.H.postMessage({type:"result",responseId:c,isOk:d,result:a},b)}Eb(c){const d=c.responseId,a=c.isOk;c=c.result;const b=z.get(d);a?b.resolve(c):b.reject(c);z.delete(d)}a(c,d,a){let b=y.get(c);b||(b=new Map,y.set(c,b));if(b.has(d))throw Error(`[DOM] Component '${c}' already has handler '${d}'`);b.set(d,a)}static ta(c){if(t.includes(c))throw Error("DOM handler already added");t.push(c)}za(){for(const c of this.R)if("runtime"===
c.D){this.qa=c;return}throw Error("cannot find runtime DOM handler");}yb(c){this.Z("debugger","message",c)}Fb(){for(const c of this.R)c.ua()}static Y(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}Ia(){-1===this.u&&this.Pa.length&&(this.u=requestAnimationFrame(this.Rb))}$a(){-1!==this.u&&(cancelAnimationFrame(this.u),this.u=-1)}Bb(){this.u=-1;for(const c of this.Pa)c();this.Ia()}ia(){this.qa.ia()}async ob(c){const d=c.filename;switch(c.as){case "text":return await this.Ta(d);
case "buffer":return await this.wa(d);default:throw Error("unsupported type");}}va(c){const d=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((a,b)=>{window.resolveLocalFileSystemURL(d,e=>{e.file(a,b)},b)})}async Ta(c){c=await this.va(c);return await u(c)}aa(){if(x.length&&!(8<=v)){v++;var c=x.shift();this.cb(c.filename,c.Zb,c.Ub)}}wa(c){return new Promise((d,a)=>{x.push({filename:c,Zb:b=>{v--;this.aa();d(b)},Ub:b=>{v--;this.aa();a(b)}});this.aa()})}async cb(c,d,
a){try{const b=await this.va(c),e=await A(b);d(e)}catch(b){a(b)}}async bb(){const c=[];for(const [d,a]of Object.entries(this.i))c.push(this.ab(d,a));await Promise.all(c)}async ab(c,d){if("object"===typeof d)this.i[c]=new Blob([d.str],{type:d.type}),this.T[c]=d.str;else{let a=await this.gb(d);a||(a=this.eb(d));this.i[c]=a}}async gb(c){try{return await (await fetch(c)).blob()}catch(d){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
d),null}}eb(c){c=this.Jb(c);return this.Za(c.data,c.Wb)}Jb(c){var d=c.indexOf(",");if(0>d)throw new URIError("expected comma in data: uri");var a=c.substring(d+1);d=c.substring(5,d).split(";");c=d[0]||"";const b=d[2];a="base64"===d[1]||"base64"===b?atob(a):decodeURIComponent(a);return{Wb:c,data:a}}Za(c,d){var a=c.length;let b=a>>2,e=new Uint8Array(a),f=new Uint32Array(e.buffer,0,b),k,n;for(n=k=0;k<b;++k)f[k]=c.charCodeAt(n++)|c.charCodeAt(n++)<<8|c.charCodeAt(n++)<<16|c.charCodeAt(n++)<<24;for(a&=
3;a--;)e[n]=c.charCodeAt(n),++n;return new Blob([e],{type:d})}}}"use strict";
{const h=self.$;function l(a){return a.sourceCapabilities&&a.sourceCapabilities.firesTouchEvents||a.originalEvent&&a.originalEvent.sourceCapabilities&&a.originalEvent.sourceCapabilities.firesTouchEvents}const g=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),m={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},u={dispatchUserScriptEvent:!0},A={dispatchRuntimeEvent:!0};function x(a){return new Promise((b,e)=>{const f=document.createElement("link");f.onload=()=>b(f);f.onerror=k=>e(k);f.rel=
"stylesheet";f.href=a;document.head.appendChild(f)})}function v(a){return new Promise((b,e)=>{const f=new Image;f.onload=()=>b(f);f.onerror=k=>e(k);f.src=a})}async function t(a){a=URL.createObjectURL(a);try{return await v(a)}finally{URL.revokeObjectURL(a)}}function y(a){return new Promise((b,e)=>{let f=new FileReader;f.onload=k=>b(k.target.result);f.onerror=k=>e(k);f.readAsText(a)})}async function z(a,b,e){if(!/firefox/i.test(navigator.userAgent))return await t(a);var f=await y(a);f=(new DOMParser).parseFromString(f,
"image/svg+xml");const k=f.documentElement;if(k.hasAttribute("width")&&k.hasAttribute("height")){const n=k.getAttribute("width"),J=k.getAttribute("height");if(!n.includes("%")&&!J.includes("%"))return await t(a)}k.setAttribute("width",b+"px");k.setAttribute("height",e+"px");f=(new XMLSerializer).serializeToString(f);a=new Blob([f],{type:"image/svg+xml"});return await t(a)}function B(a){do{if(a.parentNode&&a.hasAttribute("contenteditable"))return!0;a=a.parentNode}while(a);return!1}const C=new Set(["canvas",
"body","html"]);function q(a){C.has(a.target.tagName.toLowerCase())&&a.preventDefault()}function p(a){(a.metaKey||a.ctrlKey)&&a.preventDefault()}self.C3_GetSvgImageSize=async function(a){a=await t(a);if(0<a.width&&0<a.height)return[a.width,a.height];{a.style.position="absolute";a.style.left="0px";a.style.top="0px";a.style.visibility="hidden";document.body.appendChild(a);const b=a.getBoundingClientRect();document.body.removeChild(a);return[b.width,b.height]}};self.C3_RasterSvgImageBlob=async function(a,
b,e,f,k){a=await z(a,b,e);const n=document.createElement("canvas");n.width=f;n.height=k;n.getContext("2d").drawImage(a,0,0,b,e);return n};let c=!1;document.addEventListener("pause",()=>c=!0);document.addEventListener("resume",()=>c=!1);function d(){try{return window.parent&&window.parent.document.hasFocus()}catch(a){return!1}}h.ta(class extends self.X{constructor(a){super(a,"runtime");this.Na=!0;this.v=-1;this.ra="any";this.Ja=this.Ka=!1;this.ma=this.J=this.s=null;a.a("canvas","update-size",f=>this.Hb(f));
a.a("runtime","invoke-download",f=>this.xb(f));a.a("runtime","raster-svg-image",f=>this.Cb(f));a.a("runtime","get-svg-image-size",f=>this.vb(f));a.a("runtime","set-target-orientation",f=>this.Gb(f));a.a("runtime","register-sw",()=>this.Db());a.a("runtime","post-to-debugger",f=>this.Fa(f));a.a("runtime","go-to-script",f=>this.Fa(f));a.a("runtime","before-start-ticking",()=>this.nb());a.a("runtime","debug-highlight",f=>this.qb(f));a.a("runtime","enable-device-orientation",()=>this.Ya());a.a("runtime",
"enable-device-motion",()=>this.Xa());a.a("runtime","add-stylesheet",f=>this.lb(f));a.a("runtime","alert",f=>this.mb(f));a.a("runtime","hide-cordova-splash",()=>this.wb());const b=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",f=>{const k=f.target;b.has(k.tagName.toLowerCase())||B(k)||f.preventDefault()});const e=a.g;window.addEventListener("selectstart",q);window.addEventListener("gesturehold",q);e.addEventListener("selectstart",q);e.addEventListener("gesturehold",
q);window.addEventListener("touchstart",q,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",q,{passive:!1}),e.addEventListener("pointerdown",q)):e.addEventListener("touchstart",q);this.I=0;window.addEventListener("mousedown",f=>{1===f.button&&f.preventDefault()});window.addEventListener("mousewheel",p,{passive:!1});window.addEventListener("wheel",p,{passive:!1});window.addEventListener("resize",()=>this.Ib());a.L()&&window.addEventListener("focusout",()=>{{const n=
document.activeElement;if(n){var f=n.tagName.toLowerCase();var k=new Set("email number password search tel text url".split(" "));f="textarea"===f?!0:"input"===f?k.has(n.type.toLowerCase()||"text"):B(n)}else f=!1}f||(document.scrollingElement.scrollTop=0)});this.oa=new Set;this.Qb=new WeakSet;this.Ob=!1}nb(){"cordova"===this.f.c?(document.addEventListener("pause",()=>this.ha(!0)),document.addEventListener("resume",()=>this.ha(!1))):document.addEventListener("visibilitychange",()=>this.ha(document.hidden));
return{isSuspended:!(!document.hidden&&!c)}}ua(){window.addEventListener("focus",()=>this.O("window-focus"));window.addEventListener("blur",()=>{this.O("window-blur",{parentHasFocus:d()});this.I=0});window.addEventListener("fullscreenchange",()=>this.da());window.addEventListener("webkitfullscreenchange",()=>this.da());window.addEventListener("mozfullscreenchange",()=>this.da());window.addEventListener("fullscreenerror",b=>this.ea(b));window.addEventListener("webkitfullscreenerror",b=>this.ea(b));
window.addEventListener("mozfullscreenerror",b=>this.ea(b));window.addEventListener("keydown",b=>this.Ea("keydown",b));window.addEventListener("keyup",b=>this.Ea("keyup",b));window.addEventListener("dblclick",b=>this.fa("dblclick",b,m));window.addEventListener("wheel",b=>this.zb(b));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",b=>{this.ca(b);this.C("pointerdown",b)}),this.f.l&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.J=new self.Wa(()=>this.fb(),
5),this.J.Ma=!0,window.addEventListener("pointerrawupdate",b=>this.Ab(b))):window.addEventListener("pointermove",b=>this.C("pointermove",b)),window.addEventListener("pointerup",b=>this.C("pointerup",b)),window.addEventListener("pointercancel",b=>this.C("pointercancel",b))):(window.addEventListener("mousedown",b=>{this.ca(b);this.ga("pointerdown",b)}),window.addEventListener("mousemove",b=>this.ga("pointermove",b)),window.addEventListener("mouseup",b=>this.ga("pointerup",b)),window.addEventListener("touchstart",
b=>{this.ca(b);this.M("pointerdown",b)}),window.addEventListener("touchmove",b=>this.M("pointermove",b)),window.addEventListener("touchend",b=>this.M("pointerup",b)),window.addEventListener("touchcancel",b=>this.M("pointercancel",b)));const a=()=>this.ia();window.addEventListener("pointerup",a,!0);window.addEventListener("touchend",a,!0);window.addEventListener("click",a,!0);window.addEventListener("keydown",a,!0);window.addEventListener("gamepadconnected",a,!0)}O(a,b){r(this,a,b||null,A)}o(){return this.f.o()}m(){return this.f.m()}Ib(){const a=
this.o(),b=this.m();this.O("window-resize",{innerWidth:a,innerHeight:b,devicePixelRatio:window.devicePixelRatio});this.f.L()&&(-1!==this.v&&clearTimeout(this.v),this.Ga(a,b,0))}Kb(a,b,e){-1!==this.v&&clearTimeout(this.v);this.v=setTimeout(()=>this.Ga(a,b,e),48)}Ga(a,b,e){const f=this.o(),k=this.m();this.v=-1;f!=a||k!=b?this.O("window-resize",{innerWidth:f,innerHeight:k,devicePixelRatio:window.devicePixelRatio}):10>e&&this.Kb(f,k,e+1)}Gb(a){this.ra=a.targetOrientation}Lb(){const a=this.ra;if(screen.orientation&&
screen.orientation.lock)screen.orientation.lock(a).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let b=!1;screen.lockOrientation?b=screen.lockOrientation(a):screen.webkitLockOrientation?b=screen.webkitLockOrientation(a):screen.mozLockOrientation?b=screen.mozLockOrientation(a):screen.msLockOrientation&&(b=screen.msLockOrientation(a));b||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}da(){const a=
h.Y();a&&"any"!==this.ra&&this.Lb();r(this,"fullscreenchange",{isFullscreen:a,innerWidth:this.o(),innerHeight:this.m()})}ea(a){console.warn("[Construct 3] Fullscreen request failed: ",a);r(this,"fullscreenerror",{isFullscreen:h.Y(),innerWidth:this.o(),innerHeight:this.m()})}ha(a){a?this.f.$a():this.f.Ia();r(this,"visibilitychange",{hidden:a})}Ea(a,b){"Backspace"===b.key&&q(b);const e=g.get(b.code)||b.code;w(this,a,{code:e,key:b.key,which:b.which,repeat:b.repeat,altKey:b.altKey,ctrlKey:b.ctrlKey,metaKey:b.metaKey,
shiftKey:b.shiftKey,timeStamp:b.timeStamp},m)}zb(a){r(this,"wheel",{clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},m)}fa(a,b,e){l(b)||w(this,a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,timeStamp:b.timeStamp},e)}ga(a,b){if(!l(b)){var e=this.I;"pointerdown"===a&&0!==e?a="pointermove":"pointerup"===a&&0!==b.buttons&&(a="pointermove");w(this,
a,{pointerId:1,pointerType:"mouse",button:b.button,buttons:b.buttons,lastButtons:e,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:b.timeStamp},m);this.I=b.buttons;this.fa(b.type,b,u)}}C(a,b){if(this.J&&"pointermove"!==a){var e=this.J;e.F||(-1!==e.A&&(self.clearTimeout(e.A),e.A=-1),e.S=Date.now())}e=0;"mouse"===b.pointerType&&(e=this.I);w(this,a,{pointerId:b.pointerId,pointerType:b.pointerType,button:b.button,
buttons:b.buttons,lastButtons:e,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,width:b.width||0,height:b.height||0,pressure:b.pressure||0,tangentialPressure:b.tangentialPressure||0,tiltX:b.tiltX||0,tiltY:b.tiltY||0,twist:b.twist||0,timeStamp:b.timeStamp},m);"mouse"===b.pointerType&&(e="mousemove","pointerdown"===a?e="mousedown":"pointerup"===a&&(e="pointerup"),this.fa(e,b,u),this.I=b.buttons)}Ab(a){this.ma=a;a=this.J;if(-1===a.A){var b=Date.now(),e=b-a.S,f=a.Nb;e>=f&&a.Ma?(a.S=b,
a.F=!0,a.La(),a.F=!1):a.A=self.setTimeout(a.Sb,Math.max(f-e,4))}}fb(){this.C("pointermove",this.ma);this.ma=null}M(a,b){for(let e=0,f=b.changedTouches.length;e<f;++e){const k=b.changedTouches[e];w(this,a,{pointerId:k.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:k.clientX,clientY:k.clientY,pageX:k.pageX,pageY:k.pageY,width:2*(k.radiusX||k.webkitRadiusX||0),height:2*(k.radiusY||k.webkitRadiusY||0),pressure:k.force||k.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:k.rotationAngle||
0,timeStamp:b.timeStamp},m)}}ca(a){window!==window.top&&window.focus();this.Ca(a.target)&&document.activeElement&&!this.Ca(document.activeElement)&&document.activeElement.blur()}Ca(a){return!a||a===document||a===window||a===document.body||"canvas"===a.tagName.toLowerCase()}Ya(){this.Ka||(this.Ka=!0,window.addEventListener("deviceorientation",a=>this.sb(a)),window.addEventListener("deviceorientationabsolute",a=>this.tb(a)))}Xa(){this.Ja||(this.Ja=!0,window.addEventListener("devicemotion",a=>this.rb(a)))}sb(a){r(this,
"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},m)}tb(a){r(this,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},m)}rb(a){let b=null;var e=a.acceleration;e&&(b={x:e.x||0,y:e.y||0,z:e.z||0});e=null;var f=a.accelerationIncludingGravity;f&&(e={x:f.x||0,y:f.y||0,z:f.z||0});
f=null;const k=a.rotationRate;k&&(f={alpha:k.alpha||0,beta:k.beta||0,gamma:k.gamma||0});r(this,"devicemotion",{acceleration:b,accelerationIncludingGravity:e,rotationRate:f,interval:a.interval,timeStamp:a.timeStamp},m)}Hb(a){const b=this.f,e=b.g;e.style.width=a.styleWidth+"px";e.style.height=a.styleHeight+"px";e.style.marginLeft=a.marginLeft+"px";e.style.marginTop=a.marginTop+"px";b.ya();this.Na&&(e.style.display="",this.Na=!1)}xb(a){const b=a.url;a=a.filename;const e=document.createElement("a"),f=
document.body;e.textContent=a;e.href=b;e.download=a;f.appendChild(e);e.click();f.removeChild(e)}async Cb(a){var b=a.imageBitmapOpts;a=await self.C3_RasterSvgImageBlob(a.blob,a.imageWidth,a.imageHeight,a.surfaceWidth,a.surfaceHeight);b=b?await createImageBitmap(a,b):await createImageBitmap(a);return{imageBitmap:b,transferables:[b]}}async vb(a){return await self.C3_GetSvgImageSize(a.blob)}async lb(a){await x(a.url)}ia(){var a=[...this.oa];this.oa.clear();if(!this.Ob)for(const b of a)(a=b.play())&&a.catch(()=>
{this.Qb.has(b)||this.oa.add(b)})}wb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}qb(a){if(a.show){this.s||(this.s=document.createElement("div"),this.s.id="inspectOutline",document.body.appendChild(this.s));var b=this.s;b.style.display="";b.style.left=a.left-1+"px";b.style.top=a.top-1+"px";b.style.width=a.width+2+"px";b.style.height=a.height+2+"px";b.textContent=a.name}else this.s&&(this.s.style.display="none")}Db(){window.C3_RegisterSW&&window.C3_RegisterSW()}Fa(a){window.c3_postToMessagePort&&
(a.from="runtime",window.c3_postToMessagePort(a))}kb(a,b){return this.f.Va(this.D,{name:a,params:b})}mb(a){alert(a.message)}})}"use strict";async function G(h){if(h.Mb)throw Error("already initialised");h.Mb=!0;var l=h.U.ba("dispatchworker.js");h.ka=await h.U.W(l,h.b,{name:"DispatchWorker"});l=new MessageChannel;h.la=l.port1;h.ka.postMessage({type:"_init","in-port":l.port2},[l.port2]);h.pa=await I(h)}function H(h){return[h.la,h.pa]}
async function I(h){const l=h.Oa.length;var g=h.U.ba("jobworker.js");g=await h.U.W(g,h.b,{name:"JobWorker"+l});const m=new MessageChannel,u=new MessageChannel;h.ka.postMessage({type:"_addJobWorker",port:m.port1},[m.port1]);g.postMessage({type:"init",number:l,"dispatch-port":m.port2,"output-port":u.port2},[m.port2,u.port2]);h.Oa.push(g);return u.port1}
self.Ua=class{constructor(h){this.U=h;this.b=h.b;this.b="preview"===h.c?this.b+"c3/workers/":this.b+h.V;this.Pb=Math.min(navigator.hardwareConcurrency||2,16);this.ka=null;this.Oa=[];this.pa=this.la=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.$({$b:!0,ac:"workermain.js",B:["scripts/c3runtime.js"],Xb:"scripts/",sa:[],Ra:"html5"}));"use strict";
async function K(h,l){l=l.type;let g=!0;0===l?g=await L():1===l&&(g=await M());r(h,"permission-result",{type:l,result:g})}async function L(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(h){return console.warn("[Touch] Failed to request orientation permission: ",h),!1}}
async function M(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(h){return console.warn("[Touch] Failed to request motion permission: ",h),!1}}self.$.ta(class extends self.X{constructor(h){super(h,"touch");D(this,"request-permission",l=>K(this,l))}});