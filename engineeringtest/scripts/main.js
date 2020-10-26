'use strict';function r(h,l,g,m){h.g.Y(h.B,l,g,m,void 0)}function w(h,l,g,m){h.g.l?r(h,l,g,m):h.g.hb()._OnMessageFromDOM({type:"event",component:h.B,handler:l,dispatchOpts:m||null,data:g,responseId:null})}function D(h,l,g){h.g.a(h.B,l,g)}function E(h,l){for(const [g,m]of l)D(h,g,m)}window.W=class{constructor(h,l){this.g=h;this.B=l}ta(){}};
window.Wa=class{constructor(h,l){this.Ka=h;this.Ob=l;this.u=-1;this.R=-Infinity;this.Tb=()=>{this.u=-1;this.R=Date.now();this.C=!0;this.Ka();this.C=!1};this.La=this.C=!1}};"use strict";function F(h,l){D(h,"get-element",g=>{const m=h.h.get(g.elementId);return l(m,g)})}
window.ec=class extends self.W{constructor(h,l){super(h,l);this.h=new Map;this.ia=!0;E(this,[["create",()=>{throw Error("required override");}],["destroy",g=>{{g=g.elementId;const m=this.h.get(g);this.ia&&m.parentElement.removeChild(m);this.h.delete(g)}}],["set-visible",g=>{this.ia&&(this.h.get(g.elementId).style.display=g.isVisible?"":"none")}],["update-position",g=>{if(this.ia){var m=this.h.get(g.elementId);m.style.left=g.left+"px";m.style.top=g.top+"px";m.style.width=g.width+"px";m.style.height=
g.height+"px";g=g.fontSize;null!==g&&(m.style.fontSize=g+"em")}}],["update-state",g=>{this.h.get(g.elementId);throw Error("required override");}],["focus",g=>{{const m=this.h.get(g.elementId);g.focus?m.focus():m.blur()}}],["set-css-style",g=>{this.h.get(g.elementId).style[g.prop]=g.val}],["set-attribute",g=>{this.h.get(g.elementId).setAttribute(g.name,g.val)}],["remove-attribute",g=>{this.h.get(g.elementId).removeAttribute(g.name)}]]);F(this,g=>g)}};"use strict";
{const h=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);function l(p){if(p.Wb){const c=document.createElement("script");c.async=!1;c.textContent=p.Zb;document.head.appendChild(c)}else return new Promise((c,e)=>{const a=document.createElement("script");a.onload=c;a.onerror=e;a.async=!1;a.src=p;document.head.appendChild(a)})}let g=new Audio;const m={"audio/webm; codecs=opus":!!g.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!g.canPlayType("audio/ogg; codecs=opus"),
"audio/webm; codecs=vorbis":!!g.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!g.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!g.canPlayType("audio/mp4"),"audio/mpeg":!!g.canPlayType("audio/mpeg")};g=null;async function u(p){p=await A(p);return(new TextDecoder("utf-8")).decode(p)}function A(p){return new Promise((c,e)=>{const a=new FileReader;a.onload=b=>c(b.target.result);a.onerror=b=>e(b);a.readAsArrayBuffer(p)})}const x=[];let v=0;window.RealFile=window.File;const t=
[],y=new Map,z=new Map;let B=0;const C=[];self.lc=function(p){if("function"!==typeof p)throw Error("runOnStartup called without a function");C.push(p)};const q=new Set(["cordova","playable-ad","instant-games"]);window.Z=class p{constructor(c){this.l=c.ac;this.F=null;this.b="";this.U=c.Yb;this.I={};this.j=this.ma=this.Qa=null;this.P=[];this.D=this.f=this.pa=null;this.o=-1;this.Sb=()=>this.Bb();this.Oa=[];this.c=c.Ra;!this.l||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation||(this.l=!1);
q.has(this.c)&&this.l&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.l=!1);this.Pa=!1;this.S=this.i=null;"html5"!==this.c&&"playable-ad"!==this.c||"file"!==location.protocol.substr(0,4)||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");this.a("runtime","cordova-fetch-local-file",e=>this.ob(e));
this.a("runtime","create-job-worker",()=>this.pb());"cordova"===this.c?document.addEventListener("deviceready",()=>this.Aa(c)):this.Aa(c)}wa(){return h&&"cordova"===this.c}J(){return h&&q.has(this.c)||navigator.standalone}async Aa(c){"preview"===this.c&&(this.j=document.createElement("div"),this.j.className="previewLoadingMessage",this.j.textContent=c.jc,document.body.appendChild(this.j));if("playable-ad"===this.c){this.i=self.c3_base64files;this.S={};await this.bb();for(let a=0,b=c.v.length;a<b;++a){var e=
c.v[a].toLowerCase();this.S.hasOwnProperty(e)?c.v[a]={Wb:!0,Zb:this.S[e]}:this.i.hasOwnProperty(e)&&(c.v[a]=URL.createObjectURL(this.i[e]))}}c.Ub?this.b=c.Ub:(e=location.origin,this.b=("null"===e?"file:///":e)+location.pathname,e=this.b.lastIndexOf("/"),-1!==e&&(this.b=this.b.substr(0,e+1)));if(c.cc)for(const [a,b]of Object.entries(c.cc))this.I[a]=URL.createObjectURL(b);e=new MessageChannel;this.F=e.port1;this.F.onmessage=a=>this._OnMessageFromRuntime(a.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(a=>
this.yb(a));this.D=new self.Ua(this);await G(this.D);this.xa();"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();await this.Lb();this.l?await this.jb(c,e.port2):await this.ib(c,e.port2)}aa(c){return this.I.hasOwnProperty(c)?this.I[c]:c.endsWith("/workermain.js")&&this.I.hasOwnProperty("workermain.js")?this.I["workermain.js"]:"playable-ad"===this.c&&this.i.hasOwnProperty(c.toLowerCase())?URL.createObjectURL(this.i[c.toLowerCase()]):
c}async V(c,e,a){if(c.startsWith("blob:"))return new Worker(c,a);if(this.wa()&&"file:"===location.protocol)return c=await this.va(this.U+c),new Worker(URL.createObjectURL(new Blob([c],{type:"application/javascript"})),a);c=new URL(c,e);if(location.origin!==c.origin){c=await fetch(c);if(!c.ok)throw Error("failed to fetch worker script");c=await c.blob();return new Worker(URL.createObjectURL(c),a)}return new Worker(c,a)}xa(){if(this.J()){const c=document.documentElement.style,e=document.body.style,
a=window.innerWidth<window.innerHeight,b=a?window.screen.width:window.screen.height;e.height=c.height=(a?window.screen.height:window.screen.width)+"px";e.width=c.width=b+"px"}}za(c){var e=this.D;return{baseUrl:this.b,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:p.X(),projectData:c.kc,previewImageBlobs:window.cr_previewImageBlobs||this.i,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,exportType:c.Ra,isDebug:-1<
self.location.search.indexOf("debug"),ife:!!self.ic,jobScheduler:{inputPort:e.ka,outputPort:e.oa,maxNumWorkers:e.Qb},supportedAudioFormats:m,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.U+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.U+"opus.wasm.wasm",isiOSCordova:this.wa(),isiOSWebView:this.J(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async jb(c,e){var a=this.aa(c.bc);this.Qa=await this.V(a,this.b,{name:"Runtime"});this.f=document.createElement("canvas");
this.f.style.display="none";a=this.f.transferControlToOffscreen();document.body.appendChild(this.f);window.c3canvas=this.f;this.Qa.postMessage(Object.assign(this.za(c),{type:"init-runtime",isInWorker:!0,messagePort:e,canvas:a,workerDependencyScripts:c.ra||[],engineScripts:c.v,projectScripts:window.hc,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[e,a,...H(this.D)]);this.P=t.map(b=>new b(this));this.ya();self.c3_callFunction=(b,d)=>this.pa.kb(b,d);"preview"===this.c&&(self.goToLastErrorScript=
()=>this.Y("runtime","go-to-last-error-script"))}async ib(c,e){this.f=document.createElement("canvas");this.f.style.display="none";document.body.appendChild(this.f);window.c3canvas=this.f;this.P=t.map(b=>new b(this));this.ya();const a=c.v.map(b=>"string"===typeof b?(new URL(b,this.b)).toString():b);Array.isArray(c.ra)&&a.unshift(...c.ra);await Promise.all(a.map(b=>l(b)));if(c.Sa&&0<c.Sa.length){const b=self.C3_ProjectScriptsStatus;try{if(await Promise.all(c.Sa.map(d=>l(d[1]))),Object.values(b).some(d=>
!d)){self.setTimeout(()=>this.Ga(b),100);return}}catch(d){console.error("[Preview] Error loading project scripts: ",d);self.setTimeout(()=>this.Ga(b),100);return}}"preview"===this.c&&"object"!==typeof self.dc.fc?(console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(c=Object.assign(this.za(c),{isInWorker:!1,messagePort:e,
canvas:this.f,runOnStartupFunctions:C}),this.Ca(),this.ma=self.C3_CreateRuntime(c),await self.C3_InitRuntime(this.ma,c))}Ga(c){c=`Failed to load project script '${Object.entries(c).filter(e=>!e[1]).map(e=>e[0])[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+c);alert(c)}Ca(){this.j&&(this.j.parentElement.removeChild(this.j),this.j=null)}async pb(){const c=await I(this.D);return{outputPort:c,transferables:[c]}}hb(){if(this.l)throw Error("not available in worker mode");
return this.ma}Y(c,e,a,b,d){this.F.postMessage({type:"event",component:c,handler:e,dispatchOpts:b||null,data:a,responseId:null},this.Pa?void 0:d)}Va(c,e){const a=B++,b=new Promise((d,f)=>{z.set(a,{resolve:d,reject:f})});this.F.postMessage({type:"event",component:c,handler:"js-invoke-function",dispatchOpts:null,data:e,responseId:a},void 0);return b}["_OnMessageFromRuntime"](c){const e=c.type;if("event"===e)return this.ub(c);if("result"===e)this.Eb(c);else if("runtime-ready"===e)this.Fb();else if("alert"===
e)alert(c.message);else if("creating-runtime"===e)this.Ca();else throw Error(`unknown message '${e}'`);}ub(c){const e=c.component,a=c.handler,b=c.data,d=c.responseId;if(c=y.get(e))if(c=c.get(a)){var f=null;try{f=c(b)}catch(k){console.error(`Exception in '${e}' handler '${a}':`,k);null!==d&&this.N(d,!1,""+k);return}if(null===d)return f;f&&f.then?f.then(k=>this.N(d,!0,k)).catch(k=>{console.error(`Rejection from '${e}' handler '${a}':`,k);this.N(d,!1,""+k)}):this.N(d,!0,f)}else console.warn(`[DOM] No handler '${a}' for component '${e}'`);
else console.warn(`[DOM] No event handlers for component '${e}'`)}N(c,e,a){let b;a&&a.transferables&&(b=a.transferables);this.F.postMessage({type:"result",responseId:c,isOk:e,result:a},b)}Eb(c){const e=c.responseId,a=c.isOk;c=c.result;const b=z.get(e);a?b.resolve(c):b.reject(c);z.delete(e)}a(c,e,a){let b=y.get(c);b||(b=new Map,y.set(c,b));if(b.has(e))throw Error(`[DOM] Component '${c}' already has handler '${e}'`);b.set(e,a)}static sa(c){if(t.includes(c))throw Error("DOM handler already added");t.push(c)}ya(){for(const c of this.P)if("runtime"===
c.B){this.pa=c;return}throw Error("cannot find runtime DOM handler");}yb(c){this.Y("debugger","message",c)}Fb(){for(const c of this.P)c.ta()}static X(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}Ha(){-1===this.o&&this.Oa.length&&(this.o=requestAnimationFrame(this.Sb))}$a(){-1!==this.o&&(cancelAnimationFrame(this.o),this.o=-1)}Bb(){this.o=-1;for(const c of this.Oa)c();this.Ha()}ha(){this.pa.ha()}async ob(c){const e=c.filename;switch(c.as){case "text":return await this.Ta(e);
case "buffer":return await this.va(e);default:throw Error("unsupported type");}}ua(c){const e=window.cordova.file.applicationDirectory+"www/"+c.toLowerCase();return new Promise((a,b)=>{window.resolveLocalFileSystemURL(e,d=>{d.file(a,b)},b)})}async Ta(c){c=await this.ua(c);return await u(c)}$(){if(x.length&&!(8<=v)){v++;var c=x.shift();this.cb(c.filename,c.$b,c.Vb)}}va(c){return new Promise((e,a)=>{x.push({filename:c,$b:b=>{v--;this.$();e(b)},Vb:b=>{v--;this.$();a(b)}});this.$()})}async cb(c,e,a){try{const b=
await this.ua(c),d=await A(b);e(d)}catch(b){a(b)}}async bb(){const c=[];for(const [e,a]of Object.entries(this.i))c.push(this.ab(e,a));await Promise.all(c)}async ab(c,e){if("object"===typeof e)this.i[c]=new Blob([e.str],{type:e.type}),this.S[c]=e.str;else{let a=await this.gb(e);a||(a=this.eb(e));this.i[c]=a}}async gb(c){try{return await (await fetch(c)).blob()}catch(e){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
e),null}}eb(c){c=this.Jb(c);return this.Za(c.data,c.Xb)}Jb(c){var e=c.indexOf(",");if(0>e)throw new URIError("expected comma in data: uri");var a=c.substring(e+1);e=c.substring(5,e).split(";");c=e[0]||"";const b=e[2];a="base64"===e[1]||"base64"===b?atob(a):decodeURIComponent(a);return{Xb:c,data:a}}Za(c,e){var a=c.length;let b=a>>2,d=new Uint8Array(a),f=new Uint32Array(d.buffer,0,b),k,n;for(n=k=0;k<b;++k)f[k]=c.charCodeAt(n++)|c.charCodeAt(n++)<<8|c.charCodeAt(n++)<<16|c.charCodeAt(n++)<<24;for(a&=
3;a--;)d[n]=c.charCodeAt(n),++n;return new Blob([d],{type:e})}Lb(){let c=null;const e=new Promise(d=>c=d),a=new ArrayBuffer(1),b=new MessageChannel;b.port2.onmessage=d=>{d.data&&d.data.arrayBuffer||(this.Pa=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables."));c()};b.port1.postMessage({arrayBuffer:a},[a]);return e}}}"use strict";
{const h=self.Z;function l(a){return a.sourceCapabilities&&a.sourceCapabilities.firesTouchEvents||a.originalEvent&&a.originalEvent.sourceCapabilities&&a.originalEvent.sourceCapabilities.firesTouchEvents}const g=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),m={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},u={dispatchUserScriptEvent:!0},A={dispatchRuntimeEvent:!0};function x(a){return new Promise((b,d)=>{const f=document.createElement("link");f.onload=()=>b(f);f.onerror=k=>d(k);f.rel=
"stylesheet";f.href=a;document.head.appendChild(f)})}function v(a){return new Promise((b,d)=>{const f=new Image;f.onload=()=>b(f);f.onerror=k=>d(k);f.src=a})}async function t(a){a=URL.createObjectURL(a);try{return await v(a)}finally{URL.revokeObjectURL(a)}}function y(a){return new Promise((b,d)=>{let f=new FileReader;f.onload=k=>b(k.target.result);f.onerror=k=>d(k);f.readAsText(a)})}async function z(a,b,d){if(!/firefox/i.test(navigator.userAgent))return await t(a);var f=await y(a);f=(new DOMParser).parseFromString(f,
"image/svg+xml");const k=f.documentElement;if(k.hasAttribute("width")&&k.hasAttribute("height")){const n=k.getAttribute("width"),J=k.getAttribute("height");if(!n.includes("%")&&!J.includes("%"))return await t(a)}k.setAttribute("width",b+"px");k.setAttribute("height",d+"px");f=(new XMLSerializer).serializeToString(f);a=new Blob([f],{type:"image/svg+xml"});return await t(a)}function B(a){do{if(a.parentNode&&a.hasAttribute("contenteditable"))return!0;a=a.parentNode}while(a);return!1}const C=new Set(["canvas",
"body","html"]);function q(a){C.has(a.target.tagName.toLowerCase())&&a.preventDefault()}function p(a){(a.metaKey||a.ctrlKey)&&a.preventDefault()}self.C3_GetSvgImageSize=async function(a){a=await t(a);if(0<a.width&&0<a.height)return[a.width,a.height];{a.style.position="absolute";a.style.left="0px";a.style.top="0px";a.style.visibility="hidden";document.body.appendChild(a);const b=a.getBoundingClientRect();document.body.removeChild(a);return[b.width,b.height]}};self.C3_RasterSvgImageBlob=async function(a,
b,d,f,k){a=await z(a,b,d);const n=document.createElement("canvas");n.width=f;n.height=k;n.getContext("2d").drawImage(a,0,0,b,d);return n};let c=!1;document.addEventListener("pause",()=>c=!0);document.addEventListener("resume",()=>c=!1);function e(){try{return window.parent&&window.parent.document.hasFocus()}catch(a){return!1}}h.sa(class extends self.W{constructor(a){super(a,"runtime");this.Ma=!0;this.s=-1;this.qa="any";this.Ia=this.Ja=!1;this.la=this.H=this.m=null;a.a("canvas","update-size",f=>this.Hb(f));
a.a("runtime","invoke-download",f=>this.xb(f));a.a("runtime","raster-svg-image",f=>this.Cb(f));a.a("runtime","get-svg-image-size",f=>this.vb(f));a.a("runtime","set-target-orientation",f=>this.Gb(f));a.a("runtime","register-sw",()=>this.Db());a.a("runtime","post-to-debugger",f=>this.Ea(f));a.a("runtime","go-to-script",f=>this.Ea(f));a.a("runtime","before-start-ticking",()=>this.nb());a.a("runtime","debug-highlight",f=>this.qb(f));a.a("runtime","enable-device-orientation",()=>this.Ya());a.a("runtime",
"enable-device-motion",()=>this.Xa());a.a("runtime","add-stylesheet",f=>this.lb(f));a.a("runtime","alert",f=>this.mb(f));a.a("runtime","hide-cordova-splash",()=>this.wb());const b=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",f=>{const k=f.target;b.has(k.tagName.toLowerCase())||B(k)||f.preventDefault()});const d=a.f;window.addEventListener("selectstart",q);window.addEventListener("gesturehold",q);d.addEventListener("selectstart",q);d.addEventListener("gesturehold",
q);window.addEventListener("touchstart",q,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",q,{passive:!1}),d.addEventListener("pointerdown",q)):d.addEventListener("touchstart",q);this.G=0;window.addEventListener("mousedown",f=>{1===f.button&&f.preventDefault()});window.addEventListener("mousewheel",p,{passive:!1});window.addEventListener("wheel",p,{passive:!1});window.addEventListener("resize",()=>this.Ib());a.J()&&window.addEventListener("focusout",()=>{{const n=
document.activeElement;if(n){var f=n.tagName.toLowerCase();var k=new Set("email number password search tel text url".split(" "));f="textarea"===f?!0:"input"===f?k.has(n.type.toLowerCase()||"text"):B(n)}else f=!1}f||(document.scrollingElement.scrollTop=0)});this.na=new Set;this.Rb=new WeakSet;this.Pb=!1}nb(){"cordova"===this.g.c?(document.addEventListener("pause",()=>this.ga(!0)),document.addEventListener("resume",()=>this.ga(!1))):document.addEventListener("visibilitychange",()=>this.ga(document.hidden));
return{isSuspended:!(!document.hidden&&!c)}}ta(){window.addEventListener("focus",()=>this.O("window-focus"));window.addEventListener("blur",()=>{this.O("window-blur",{parentHasFocus:e()});this.G=0});window.addEventListener("fullscreenchange",()=>this.ca());window.addEventListener("webkitfullscreenchange",()=>this.ca());window.addEventListener("mozfullscreenchange",()=>this.ca());window.addEventListener("fullscreenerror",b=>this.da(b));window.addEventListener("webkitfullscreenerror",b=>this.da(b));
window.addEventListener("mozfullscreenerror",b=>this.da(b));window.addEventListener("keydown",b=>this.Da("keydown",b));window.addEventListener("keyup",b=>this.Da("keyup",b));window.addEventListener("dblclick",b=>this.ea("dblclick",b,m));window.addEventListener("wheel",b=>this.zb(b));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",b=>{this.ba(b);this.A("pointerdown",b)}),this.g.l&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.H=new self.Wa(()=>this.fb(),
5),this.H.La=!0,window.addEventListener("pointerrawupdate",b=>this.Ab(b))):window.addEventListener("pointermove",b=>this.A("pointermove",b)),window.addEventListener("pointerup",b=>this.A("pointerup",b)),window.addEventListener("pointercancel",b=>this.A("pointercancel",b))):(window.addEventListener("mousedown",b=>{this.ba(b);this.fa("pointerdown",b)}),window.addEventListener("mousemove",b=>this.fa("pointermove",b)),window.addEventListener("mouseup",b=>this.fa("pointerup",b)),window.addEventListener("touchstart",
b=>{this.ba(b);this.M("pointerdown",b)}),window.addEventListener("touchmove",b=>this.M("pointermove",b)),window.addEventListener("touchend",b=>this.M("pointerup",b)),window.addEventListener("touchcancel",b=>this.M("pointercancel",b)));const a=()=>this.ha();window.addEventListener("pointerup",a,!0);window.addEventListener("touchend",a,!0);window.addEventListener("click",a,!0);window.addEventListener("keydown",a,!0);window.addEventListener("gamepadconnected",a,!0)}O(a,b){r(this,a,b||null,A)}L(){return Math.max(window.innerWidth,
1)}K(){return Math.max(window.innerHeight,1)}Ib(){const a=this.L(),b=this.K();this.O("window-resize",{innerWidth:a,innerHeight:b,devicePixelRatio:window.devicePixelRatio});this.g.J()&&(-1!==this.s&&clearTimeout(this.s),this.Fa(a,b,0))}Kb(a,b,d){-1!==this.s&&clearTimeout(this.s);this.s=setTimeout(()=>this.Fa(a,b,d),48)}Fa(a,b,d){const f=this.L(),k=this.K();this.s=-1;f!=a||k!=b?this.O("window-resize",{innerWidth:f,innerHeight:k,devicePixelRatio:window.devicePixelRatio}):10>d&&this.Kb(f,k,d+1)}Gb(a){this.qa=
a.targetOrientation}Mb(){const a=this.qa;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(a).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let b=!1;screen.lockOrientation?b=screen.lockOrientation(a):screen.webkitLockOrientation?b=screen.webkitLockOrientation(a):screen.mozLockOrientation?b=screen.mozLockOrientation(a):screen.msLockOrientation&&(b=screen.msLockOrientation(a));b||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",
b)}}ca(){const a=h.X();a&&"any"!==this.qa&&this.Mb();r(this,"fullscreenchange",{isFullscreen:a,innerWidth:this.L(),innerHeight:this.K()})}da(a){console.warn("[Construct 3] Fullscreen request failed: ",a);r(this,"fullscreenerror",{isFullscreen:h.X(),innerWidth:this.L(),innerHeight:this.K()})}ga(a){a?this.g.$a():this.g.Ha();r(this,"visibilitychange",{hidden:a})}Da(a,b){"Backspace"===b.key&&q(b);const d=g.get(b.code)||b.code;w(this,a,{code:d,key:b.key,which:b.which,repeat:b.repeat,altKey:b.altKey,ctrlKey:b.ctrlKey,
metaKey:b.metaKey,shiftKey:b.shiftKey,timeStamp:b.timeStamp},m)}zb(a){r(this,"wheel",{clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},m)}ea(a,b,d){l(b)||w(this,a,{button:b.button,buttons:b.buttons,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,timeStamp:b.timeStamp},d)}fa(a,b){if(!l(b)){var d=this.G;"pointerdown"===a&&0!==d?a="pointermove":"pointerup"===a&&0!==b.buttons&&(a=
"pointermove");w(this,a,{pointerId:1,pointerType:"mouse",button:b.button,buttons:b.buttons,lastButtons:d,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:b.timeStamp},m);this.G=b.buttons;this.ea(b.type,b,u)}}A(a,b){if(this.H&&"pointermove"!==a){var d=this.H;d.C||(-1!==d.u&&(self.clearTimeout(d.u),d.u=-1),d.R=Date.now())}d=0;"mouse"===b.pointerType&&(d=this.G);w(this,a,{pointerId:b.pointerId,pointerType:b.pointerType,
button:b.button,buttons:b.buttons,lastButtons:d,clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,width:b.width||0,height:b.height||0,pressure:b.pressure||0,tangentialPressure:b.tangentialPressure||0,tiltX:b.tiltX||0,tiltY:b.tiltY||0,twist:b.twist||0,timeStamp:b.timeStamp},m);"mouse"===b.pointerType&&(d="mousemove","pointerdown"===a?d="mousedown":"pointerup"===a&&(d="pointerup"),this.ea(d,b,u),this.G=b.buttons)}Ab(a){this.la=a;a=this.H;if(-1===a.u){var b=Date.now(),d=b-a.R,f=a.Ob;d>=
f&&a.La?(a.R=b,a.C=!0,a.Ka(),a.C=!1):a.u=self.setTimeout(a.Tb,Math.max(f-d,4))}}fb(){this.A("pointermove",this.la);this.la=null}M(a,b){for(let d=0,f=b.changedTouches.length;d<f;++d){const k=b.changedTouches[d];w(this,a,{pointerId:k.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:k.clientX,clientY:k.clientY,pageX:k.pageX,pageY:k.pageY,width:2*(k.radiusX||k.webkitRadiusX||0),height:2*(k.radiusY||k.webkitRadiusY||0),pressure:k.force||k.webkitForce||0,tangentialPressure:0,tiltX:0,
tiltY:0,twist:k.rotationAngle||0,timeStamp:b.timeStamp},m)}}ba(a){window!==window.top&&window.focus();this.Ba(a.target)&&document.activeElement&&!this.Ba(document.activeElement)&&document.activeElement.blur()}Ba(a){return!a||a===document||a===window||a===document.body||"canvas"===a.tagName.toLowerCase()}Ya(){this.Ja||(this.Ja=!0,window.addEventListener("deviceorientation",a=>this.sb(a)),window.addEventListener("deviceorientationabsolute",a=>this.tb(a)))}Xa(){this.Ia||(this.Ia=!0,window.addEventListener("devicemotion",
a=>this.rb(a)))}sb(a){r(this,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},m)}tb(a){r(this,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},m)}rb(a){let b=null;var d=a.acceleration;d&&(b={x:d.x||0,y:d.y||0,z:d.z||0});d=null;var f=a.accelerationIncludingGravity;f&&(d={x:f.x||
0,y:f.y||0,z:f.z||0});f=null;const k=a.rotationRate;k&&(f={alpha:k.alpha||0,beta:k.beta||0,gamma:k.gamma||0});r(this,"devicemotion",{acceleration:b,accelerationIncludingGravity:d,rotationRate:f,interval:a.interval,timeStamp:a.timeStamp},m)}Hb(a){const b=this.g,d=b.f;d.style.width=a.styleWidth+"px";d.style.height=a.styleHeight+"px";d.style.marginLeft=a.marginLeft+"px";d.style.marginTop=a.marginTop+"px";b.xa();this.Ma&&(d.style.display="",this.Ma=!1)}xb(a){const b=a.url;a=a.filename;const d=document.createElement("a"),
f=document.body;d.textContent=a;d.href=b;d.download=a;f.appendChild(d);d.click();f.removeChild(d)}async Cb(a){var b=a.imageBitmapOpts;a=await self.C3_RasterSvgImageBlob(a.blob,a.imageWidth,a.imageHeight,a.surfaceWidth,a.surfaceHeight);b=b?await createImageBitmap(a,b):await createImageBitmap(a);return{imageBitmap:b,transferables:[b]}}async vb(a){return await self.C3_GetSvgImageSize(a.blob)}async lb(a){await x(a.url)}ha(){var a=[...this.na];this.na.clear();if(!this.Pb)for(const b of a)(a=b.play())&&
a.catch(()=>{this.Rb.has(b)||this.na.add(b)})}wb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}qb(a){if(a.show){this.m||(this.m=document.createElement("div"),this.m.id="inspectOutline",document.body.appendChild(this.m));var b=this.m;b.style.display="";b.style.left=a.left-1+"px";b.style.top=a.top-1+"px";b.style.width=a.width+2+"px";b.style.height=a.height+2+"px";b.textContent=a.name}else this.m&&(this.m.style.display="none")}Db(){window.C3_RegisterSW&&window.C3_RegisterSW()}Ea(a){window.c3_postToMessagePort&&
(a.from="runtime",window.c3_postToMessagePort(a))}kb(a,b){return this.g.Va(this.B,{name:a,params:b})}mb(a){alert(a.message)}})}"use strict";async function G(h){if(h.Nb)throw Error("already initialised");h.Nb=!0;var l=h.T.aa("dispatchworker.js");h.ja=await h.T.V(l,h.b,{name:"DispatchWorker"});l=new MessageChannel;h.ka=l.port1;h.ja.postMessage({type:"_init","in-port":l.port2},[l.port2]);h.oa=await I(h)}function H(h){return[h.ka,h.oa]}
async function I(h){const l=h.Na.length;var g=h.T.aa("jobworker.js");g=await h.T.V(g,h.b,{name:"JobWorker"+l});const m=new MessageChannel,u=new MessageChannel;h.ja.postMessage({type:"_addJobWorker",port:m.port1},[m.port1]);g.postMessage({type:"init",number:l,"dispatch-port":m.port2,"output-port":u.port2},[m.port2,u.port2]);h.Na.push(g);return u.port1}
self.Ua=class{constructor(h){this.T=h;this.b=h.b;this.b="preview"===h.c?this.b+"c3/workers/":this.b+h.U;this.Qb=Math.min(navigator.hardwareConcurrency||2,16);this.ja=null;this.Na=[];this.oa=this.ka=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.Z({ac:!0,bc:"workermain.js",v:["scripts/c3runtime.js"],Yb:"scripts/",ra:[],Ra:"html5"}));"use strict";
async function K(h,l){l=l.type;let g=!0;0===l?g=await L():1===l&&(g=await M());r(h,"permission-result",{type:l,result:g})}async function L(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(h){return console.warn("[Touch] Failed to request orientation permission: ",h),!1}}
async function M(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(h){return console.warn("[Touch] Failed to request motion permission: ",h),!1}}self.Z.sa(class extends self.W{constructor(h){super(h,"touch");D(this,"request-permission",l=>K(this,l))}});