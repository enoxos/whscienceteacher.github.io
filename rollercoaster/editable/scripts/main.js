'use strict';function t(g,f,e,l){g.c.la(g.J,f,e,l,void 0)}function A(g,f,e,l){g.c.i?t(g,f,e,l):g.c.zb()._OnMessageFromDOM({type:"event",component:g.J,handler:f,dispatchOpts:l||null,data:e,responseId:null})}function J(g,f,e){g.c.b(g.J,f,e)}function K(g,f){for(const [e,l]of f)J(g,e,l)}window.T=class{constructor(g,f){this.c=g;this.J=f}Ia(){}};
window.ob=class{constructor(g,f){this.Ya=g;this.fc=f;this.C=-1;this.aa=-Infinity;this.lc=()=>{this.C=-1;this.aa=Date.now();this.K=!0;this.Ya();this.K=!1};this.Za=this.K=!1}};"use strict";function M(g,f){const e=f.elementId,l=g.Ka(e,f);g.h.set(e,l);l.style.boxSizing="border-box";f.isVisible||(l.style.display="none");l.addEventListener("focus",()=>{N(g,"elem-focused",e)});l.addEventListener("blur",()=>{N(g,"elem-blurred",e)});g.Y&&document.body.appendChild(l)}
function O(g,f,e){J(g,f,l=>{const p=g.h.get(l.elementId);return e(p,l)})}function N(g,f,e,l){l||(l={});l.elementId=e;t(g,f,l)}function P(g,f,e){var l;l||(l={});l.elementId=e;A(g,f,l)}
window.hb=class extends self.T{constructor(g,f){super(g,f);this.h=new Map;this.Y=!0;K(this,[["create",e=>M(this,e)],["destroy",e=>{{e=e.elementId;const l=this.h.get(e);this.Y&&l.parentElement.removeChild(l);this.h.delete(e)}}],["set-visible",e=>{this.Y&&(this.h.get(e.elementId).style.display=e.isVisible?"":"none")}],["update-position",e=>{if(this.Y){var l=this.h.get(e.elementId);l.style.left=e.left+"px";l.style.top=e.top+"px";l.style.width=e.width+"px";l.style.height=e.height+"px";e=e.fontSize;null!==
e&&(l.style.fontSize=e+"em")}}],["update-state",e=>{{const l=this.h.get(e.elementId);this.ma(l,e)}}],["focus",e=>this.va(e)],["set-css-style",e=>{this.h.get(e.elementId).style[e.prop]=e.val}],["set-attribute",e=>{this.h.get(e.elementId).setAttribute(e.name,e.val)}],["remove-attribute",e=>{this.h.get(e.elementId).removeAttribute(e.name)}]]);O(this,"get-element",e=>e)}Ka(){throw Error("required override");}ma(){throw Error("required override");}va(g){var f=this.h.get(g.elementId);g.focus?f.focus():
f.blur()}};"use strict";
{const g=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),f=/android/i.test(navigator.userAgent);let e=0;function l(k){const a=document.createElement("script");a.async=!1;a.type="module";return k.qc?new Promise(d=>{const h="c3_resolve_"+e;++e;self[h]=d;a.textContent=k.tc+`\n\nself["${h}"]();`;document.head.appendChild(a)}):new Promise((d,h)=>{a.onload=d;a.onerror=h;a.src=k;document.head.appendChild(a)})}let p=!1,x=!1;function y(){if(!p){try{new Worker("blob://",{get type(){x=
!0}})}catch(k){}p=!0}return x}let w=new Audio;const B={"audio/webm; codecs=opus":!!w.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!w.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!w.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!w.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!w.canPlayType("audio/mp4"),"audio/mpeg":!!w.canPlayType("audio/mpeg")};w=null;async function L(k){k=await G(k);return(new TextDecoder("utf-8")).decode(k)}
function G(k){return new Promise((a,d)=>{const h=new FileReader;h.onload=m=>a(m.target.result);h.onerror=m=>d(m);h.readAsArrayBuffer(k)})}const z=[];let C=0;window.RealFile=window.File;const D=[],u=new Map,E=new Map;let F=0;const H=[];self.runOnStartup=function(k){if("function"!==typeof k)throw Error("runOnStartup called without a function");H.push(k)};const b=new Set(["cordova","playable-ad","instant-games"]);let c=!1;window.o=class k{constructor(a){this.i=a.vc;this.M=null;this.f="";this.ga=a.sc;
this.R={};this.Ba=this.eb=null;this.Z=[];this.L=this.g=this.Ea=null;this.A=-1;this.kc=()=>this.Sb();this.cb=[];this.a=a.fb;this.$="file"===location.protocol.substr(0,4);!this.i||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&y()||(this.i=!1);if("playable-ad"===this.a||"instant-games"===this.a)this.i=!1;if("cordova"===this.a&&this.i)if(f){const d=/Chrome\/(\d+)/i.exec(navigator.userAgent);d&&90<=parseInt(d[1],10)||(this.i=!1)}else this.i=!1;this.ca=this.l=null;"html5"!==this.a&&"playable-ad"!==
this.a||!this.$||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");"html5"!==this.a||window.isSecureContext||console.warn("[Construct 3] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.b("runtime","cordova-fetch-local-file",d=>this.Fb(d));this.b("runtime","create-job-worker",
()=>this.Gb());"cordova"===this.a?document.addEventListener("deviceready",()=>this.Oa(a)):this.Oa(a)}lb(){return g&&"cordova"===this.a}ka(){const a=navigator.userAgent;return g&&b.has(this.a)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}jb(){return f}La(){return f&&b.has(this.a)}async Oa(a){"macos-wkwebview"===this.a&&this.ya({type:"ready"});if("playable-ad"===this.a){this.l=self.c3_base64files;this.ca={};await this.ub();for(let h=0,m=a.D.length;h<m;++h){var d=a.D[h].toLowerCase();this.ca.hasOwnProperty(d)?
a.D[h]={qc:!0,tc:this.ca[d]}:this.l.hasOwnProperty(d)&&(a.D[h]=URL.createObjectURL(this.l[d]))}}a.mc?this.f=a.mc:(d=location.origin,this.f=("null"===d?"file:///":d)+location.pathname,d=this.f.lastIndexOf("/"),-1!==d&&(this.f=this.f.substr(0,d+1)));a.xc&&(this.R=a.xc);d=new MessageChannel;this.M=d.port1;this.M.onmessage=h=>this._OnMessageFromRuntime(h.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(h=>this.Pb(h));this.L=new self.mb(this);await Q(this.L);"object"===typeof window.StatusBar&&
window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();this.i?await this.Bb(a,d.port2):await this.Ab(a,d.port2)}oa(a){a=this.R.hasOwnProperty(a)?this.R[a]:a.endsWith("/workermain.js")&&this.R.hasOwnProperty("workermain.js")?this.R["workermain.js"]:"playable-ad"===this.a&&this.l.hasOwnProperty(a.toLowerCase())?this.l[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ja(a,d,h){if(a.startsWith("blob:"))return new Worker(a,
h);if("cordova"===this.a&&this.$)return a=await this.ia(h.pc?a:this.ga+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),h);a=new URL(a,d);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),h)}return new Worker(a,h)}m(){return Math.max(window.innerWidth,1)}j(){return Math.max(window.innerHeight,1)}Na(a){var d=this.L;return{baseUrl:this.f,windowInnerWidth:this.m(),
windowInnerHeight:this.j(),devicePixelRatio:window.devicePixelRatio,isFullscreen:k.F(),projectData:a.Dc,previewImageBlobs:window.cr_previewImageBlobs||this.l,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,previewProjectFileSWUrls:window.cr_previewProjectFiles,swClientId:window.Bc||"",exportType:a.fb,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.Cc,jobScheduler:{inputPort:d.Aa,outputPort:d.Da,maxNumWorkers:d.ic},supportedAudioFormats:B,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||
this.ga+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.ga+"opus.wasm.wasm",isFileProtocol:this.$,isiOSCordova:this.lb(),isiOSWebView:this.ka(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async Bb(a,d){var h=this.oa(a.wc);this.eb=await this.ja(h,this.f,{type:"module",name:"Runtime",pc:!0});this.g=document.createElement("canvas");this.g.style.display="none";h=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;let m=a.Ha||[],
r=a.D;m=await Promise.all(m.map(n=>this.u(n)));r=await Promise.all(r.map(n=>this.u(n)));if("cordova"===this.a)for(let n=0,q=a.ha.length;n<q;++n){const v=a.ha[n],I=v[0];if(I===a.Ga||"scriptsInEvents.js"===I||I.endsWith("/scriptsInEvents.js"))v[1]=await this.u(I)}this.eb.postMessage(Object.assign(this.Na(a),{type:"init-runtime",isInWorker:!0,messagePort:d,canvas:h,workerDependencyScripts:m,engineScripts:r,projectScripts:a.ha,mainProjectScript:a.Ga,projectScriptsStatus:self.C3_ProjectScriptsStatus}),
[d,h,...R(this.L)]);this.Z=D.map(n=>new n(this));this.Ma();self.c3_callFunction=(n,q)=>this.Ea.Cb(n,q);"preview"===this.a&&(self.goToLastErrorScript=()=>this.la("runtime","go-to-last-error-script"))}async Ab(a,d){this.g=document.createElement("canvas");this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.Z=D.map(n=>new n(this));this.Ma();var h=a.D.map(n=>"string"===typeof n?(new URL(n,this.f)).toString():n);Array.isArray(a.Ha)&&h.unshift(...a.Ha);h=await Promise.all(h.map(n=>
this.u(n)));await Promise.all(h.map(n=>l(n)));h=self.C3_ProjectScriptsStatus;const m=a.Ga,r=a.ha;for(let [n,q]of r)if(q||(q=n),n===m)try{q=await this.u(q),await l(q),"preview"!==this.a||h[n]||this.Ua(n,"main script did not run to completion")}catch(v){this.Ua(n,v)}else if("scriptsInEvents.js"===n||n.endsWith("/scriptsInEvents.js"))q=await this.u(q),await l(q);"preview"===this.a&&"object"!==typeof self.yc.zc?(this.W(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),
alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Na(a),{isInWorker:!1,messagePort:d,canvas:this.g,runOnStartupFunctions:H}),this.Qa(),this.Ba=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.Ba,a))}Ua(a,d){this.W();console.error(`[Preview] Failed to load project main script (${a}): `,d);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Qa(){this.W()}W(){const a=
window.nc;a&&(a.parentElement.removeChild(a),window.nc=null)}async Gb(){const a=await S(this.L);return{outputPort:a,transferables:[a]}}zb(){if(this.i)throw Error("not available in worker mode");return this.Ba}la(a,d,h,m,r){this.M.postMessage({type:"event",component:a,handler:d,dispatchOpts:m||null,data:h,responseId:null},r)}nb(a,d){const h=F++,m=new Promise((r,n)=>{E.set(h,{resolve:r,reject:n})});this.M.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:d,responseId:h},
void 0);return m}["_OnMessageFromRuntime"](a){const d=a.type;if("event"===d)return this.Lb(a);if("result"===d)this.Vb(a);else if("runtime-ready"===d)this.Wb();else if("alert-error"===d)this.W(),alert(a.message);else if("creating-runtime"===d)this.Qa();else throw Error(`unknown message '${d}'`);}Lb(a){const d=a.component,h=a.handler,m=a.data,r=a.responseId;if(a=u.get(d))if(a=a.get(h)){var n=null;try{n=a(m)}catch(q){console.error(`Exception in '${d}' handler '${h}':`,q);null!==r&&this.V(r,!1,""+q);
return}if(null===r)return n;n&&n.then?n.then(q=>this.V(r,!0,q)).catch(q=>{console.error(`Rejection from '${d}' handler '${h}':`,q);this.V(r,!1,""+q)}):this.V(r,!0,n)}else console.warn(`[DOM] No handler '${h}' for component '${d}'`);else console.warn(`[DOM] No event handlers for component '${d}'`)}V(a,d,h){let m;h&&h.transferables&&(m=h.transferables);this.M.postMessage({type:"result",responseId:a,isOk:d,result:h},m)}Vb(a){const d=a.responseId,h=a.isOk;a=a.result;const m=E.get(d);h?m.resolve(a):m.reject(a);
E.delete(d)}b(a,d,h){let m=u.get(a);m||(m=new Map,u.set(a,m));if(m.has(d))throw Error(`[DOM] Component '${a}' already has handler '${d}'`);m.set(d,h)}static S(a){if(D.includes(a))throw Error("DOM handler already added");D.push(a)}Ma(){for(const a of this.Z)if("runtime"===a.J){this.Ea=a;return}throw Error("cannot find runtime DOM handler");}Pb(a){this.la("debugger","message",a)}Wb(){for(const a of this.Z)a.Ia()}static F(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||
c)}static X(a){c=!!a}Va(){-1===this.A&&this.cb.length&&(this.A=requestAnimationFrame(this.kc))}sb(){-1!==this.A&&(cancelAnimationFrame(this.A),this.A=-1)}Sb(){this.A=-1;for(const a of this.cb)a();this.Va()}xa(){this.Ea.xa()}ib(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}kb(a){return!this.ib(a)}async u(a){return"cordova"===this.a&&(a.startsWith("file:")||this.$&&this.kb(a))?(a.startsWith(this.f)&&(a=a.substr(this.f.length)),a=await this.ia(a),URL.createObjectURL(new Blob([a],
{type:"application/javascript"}))):a}async Fb(a){const d=a.filename;switch(a.as){case "text":return await this.gb(d);case "buffer":return await this.ia(d);default:throw Error("unsupported type");}}Ja(a){const d=window.cordova.file.applicationDirectory+"www/"+a.toLowerCase();return new Promise((h,m)=>{window.resolveLocalFileSystemURL(d,r=>{r.file(h,m)},m)})}async gb(a){a=await this.Ja(a);return await L(a)}na(){if(z.length&&!(8<=C)){C++;var a=z.shift();this.vb(a.filename,a.uc,a.oc)}}ia(a){return new Promise((d,
h)=>{z.push({filename:a,uc:m=>{C--;this.na();d(m)},oc:m=>{C--;this.na();h(m)}});this.na()})}async vb(a,d,h){try{const m=await this.Ja(a),r=await G(m);d(r)}catch(m){h(m)}}ya(a){if("windows-webview2"===this.a)window.chrome.webview.postMessage(JSON.stringify(a));else if("macos-wkwebview"===this.a)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async ub(){const a=[];for(const [d,h]of Object.entries(this.l))a.push(this.tb(d,h));await Promise.all(a)}async tb(a,
d){if("object"===typeof d)this.l[a]=new Blob([d.str],{type:d.type}),this.ca[a]=d.str;else{let h=await this.yb(d);h||(h=this.wb(d));this.l[a]=h}}async yb(a){try{return await (await fetch(a)).blob()}catch(d){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",d),null}}wb(a){a=this.bc(a);return this.rb(a.data,a.rc)}bc(a){var d=a.indexOf(",");if(0>
d)throw new URIError("expected comma in data: uri");var h=a.substring(d+1);d=a.substring(5,d).split(";");a=d[0]||"";const m=d[2];h="base64"===d[1]||"base64"===m?atob(h):decodeURIComponent(h);return{rc:a,data:h}}rb(a,d){var h=a.length;let m=h>>2,r=new Uint8Array(h),n=new Uint32Array(r.buffer,0,m),q,v;for(v=q=0;q<m;++q)n[q]=a.charCodeAt(v++)|a.charCodeAt(v++)<<8|a.charCodeAt(v++)<<16|a.charCodeAt(v++)<<24;for(h&=3;h--;)r[v]=a.charCodeAt(v),++v;return new Blob([r],{type:d})}}}"use strict";
{const g=self.o;function f(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const e=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),l={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},p={dispatchUserScriptEvent:!0},x={dispatchRuntimeEvent:!0};function y(b){return new Promise((c,k)=>{const a=document.createElement("link");a.onload=()=>c(a);a.onerror=d=>k(d);a.rel=
"stylesheet";a.href=b;document.head.appendChild(a)})}function w(b){return new Promise((c,k)=>{const a=new Image;a.onload=()=>c(a);a.onerror=d=>k(d);a.src=b})}async function B(b){b=URL.createObjectURL(b);try{return await w(b)}finally{URL.revokeObjectURL(b)}}function L(b){return new Promise((c,k)=>{let a=new FileReader;a.onload=d=>c(d.target.result);a.onerror=d=>k(d);a.readAsText(b)})}async function G(b,c,k){if(!/firefox/i.test(navigator.userAgent))return await B(b);var a=await L(b);a=(new DOMParser).parseFromString(a,
"image/svg+xml");const d=a.documentElement;if(d.hasAttribute("width")&&d.hasAttribute("height")){const h=d.getAttribute("width"),m=d.getAttribute("height");if(!h.includes("%")&&!m.includes("%"))return await B(b)}d.setAttribute("width",c+"px");d.setAttribute("height",k+"px");a=(new XMLSerializer).serializeToString(a);b=new Blob([a],{type:"image/svg+xml"});return await B(b)}function z(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const C=new Set(["input",
"textarea","datalist","select"]),D=new Set(["canvas","body","html"]);function u(b){D.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function E(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await B(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const c=b.getBoundingClientRect();document.body.removeChild(b);return[c.width,
c.height]}};self.C3_RasterSvgImageBlob=async function(b,c,k,a,d){b=await G(b,c,k);const h=document.createElement("canvas");h.width=a;h.height=d;h.getContext("2d").drawImage(b,0,0,c,k);return h};let F=!1;document.addEventListener("pause",()=>F=!0);document.addEventListener("resume",()=>F=!1);function H(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}g.S(class extends self.T{constructor(b){super(b,"runtime");this.$a=!0;this.B=-1;this.Fa="any";this.Wa=this.Xa=!1;this.v=
this.O=this.s=null;this.ea=this.da=0;this.bb=b.m();this.ba=b.j();this.P=0;b.b("canvas","update-size",a=>this.Zb(a));b.b("runtime","invoke-download",a=>this.Ob(a));b.b("runtime","raster-svg-image",a=>this.Tb(a));b.b("runtime","get-svg-image-size",a=>this.Mb(a));b.b("runtime","set-target-orientation",a=>this.Yb(a));b.b("runtime","register-sw",()=>this.Ub());b.b("runtime","post-to-debugger",a=>this.Sa(a));b.b("runtime","go-to-script",a=>this.Sa(a));b.b("runtime","before-start-ticking",()=>this.Eb());
b.b("runtime","debug-highlight",a=>this.Hb(a));b.b("runtime","enable-device-orientation",()=>this.qb());b.b("runtime","enable-device-motion",()=>this.pb());b.b("runtime","add-stylesheet",a=>this.Db(a));b.b("runtime","alert",a=>this.qa(a));b.b("runtime","hide-cordova-splash",()=>this.Nb());const c=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",a=>{const d=a.target;c.has(d.tagName.toLowerCase())||z(d)||a.preventDefault()});const k=b.g;window.addEventListener("selectstart",
u);window.addEventListener("gesturehold",u);k.addEventListener("selectstart",u);k.addEventListener("gesturehold",u);window.addEventListener("touchstart",u,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",u,{passive:!1}),k.addEventListener("pointerdown",u)):k.addEventListener("touchstart",u);this.N=0;window.addEventListener("mousedown",a=>{1===a.button&&a.preventDefault()});window.addEventListener("mousewheel",E,{passive:!1});window.addEventListener("wheel",E,
{passive:!1});window.addEventListener("resize",()=>this.$b());window.addEventListener("fullscreenchange",()=>this.G());window.addEventListener("webkitfullscreenchange",()=>this.G());window.addEventListener("mozfullscreenchange",()=>this.G());window.addEventListener("fullscreenerror",a=>this.sa(a));window.addEventListener("webkitfullscreenerror",a=>this.sa(a));window.addEventListener("mozfullscreenerror",a=>this.sa(a));b.ka()&&window.addEventListener("focusout",()=>{{const h=document.activeElement;
if(h){var a=h.tagName.toLowerCase();var d=new Set("email number password search tel text url".split(" "));a="textarea"===a?!0:"input"===a?d.has(h.type.toLowerCase()||"text"):z(h)}else a=!1}a||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=a=>this.ac(a);this.Ca=new Set;this.jc=new WeakSet;this.hc=!1}Eb(){"cordova"===this.c.a?(document.addEventListener("pause",()=>this.wa(!0)),document.addEventListener("resume",()=>this.wa(!1))):document.addEventListener("visibilitychange",()=>this.wa(document.hidden));
return{isSuspended:!(!document.hidden&&!F)}}Ia(){window.addEventListener("focus",()=>this.I("window-focus"));window.addEventListener("blur",()=>{this.I("window-blur",{parentHasFocus:H()});this.N=0});window.addEventListener("focusin",c=>{c=c.target;(C.has(c.tagName.toLowerCase())||z(c))&&this.I("keyboard-blur")});window.addEventListener("keydown",c=>this.Ra("keydown",c));window.addEventListener("keyup",c=>this.Ra("keyup",c));window.addEventListener("dblclick",c=>this.ta("dblclick",c,l));window.addEventListener("wheel",
c=>this.Qb(c));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",c=>{this.pa(c);this.H("pointerdown",c)}),this.c.i&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.O=new self.ob(()=>this.xb(),5),this.O.Za=!0,window.addEventListener("pointerrawupdate",c=>this.Rb(c))):window.addEventListener("pointermove",c=>this.H("pointermove",c)),window.addEventListener("pointerup",c=>this.H("pointerup",c)),window.addEventListener("pointercancel",c=>this.H("pointercancel",
c))):(window.addEventListener("mousedown",c=>{this.pa(c);this.ua("pointerdown",c)}),window.addEventListener("mousemove",c=>this.ua("pointermove",c)),window.addEventListener("mouseup",c=>this.ua("pointerup",c)),window.addEventListener("touchstart",c=>{this.pa(c);this.U("pointerdown",c)}),window.addEventListener("touchmove",c=>this.U("pointermove",c)),window.addEventListener("touchend",c=>this.U("pointerup",c)),window.addEventListener("touchcancel",c=>this.U("pointercancel",c)));const b=()=>this.xa();
window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0);this.c.jb()&&!this.c.La()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{this.ra(this.j(),navigator.virtualKeyboard.boundingRect.height)}))}ra(b,c){document.body.style.transform="";if(0<c){var k=document.activeElement;
k&&(k=k.getBoundingClientRect(),b=(k.top+k.bottom)/2-(b-c)/2,b>c&&(b=c),0>b&&(b=0),0<b&&(document.body.style.transform=`translateY(${-b}px)`))}}I(b,c){t(this,b,c||null,x)}m(){return this.c.m()}j(){return this.c.j()}$b(){const b=this.m(),c=this.j();if(this.c.La()){if(this.bb===b&&c<this.ba){this.P=this.ba-c;this.ra(this.ba,this.P);return}0<this.P&&(this.P=0,this.ra(c,this.P));this.bb=b;this.ba=c}this.I("window-resize",{innerWidth:b,innerHeight:c,devicePixelRatio:window.devicePixelRatio,isFullscreen:g.F()});
this.c.ka()&&(-1!==this.B&&clearTimeout(this.B),this.Ta(b,c,0))}cc(b,c,k){-1!==this.B&&clearTimeout(this.B);this.B=setTimeout(()=>this.Ta(b,c,k),48)}Ta(b,c,k){const a=this.m(),d=this.j();this.B=-1;a!=b||d!=c?this.I("window-resize",{innerWidth:a,innerHeight:d,devicePixelRatio:window.devicePixelRatio,isFullscreen:g.F()}):10>k&&this.cc(a,d,k+1)}Yb(b){this.Fa=b.targetOrientation}dc(){const b=this.Fa;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(c=>console.warn("[Construct 3] Failed to lock orientation: ",
c));else try{let c=!1;screen.lockOrientation?c=screen.lockOrientation(b):screen.webkitLockOrientation?c=screen.webkitLockOrientation(b):screen.mozLockOrientation?c=screen.mozLockOrientation(b):screen.msLockOrientation&&(c=screen.msLockOrientation(b));c||console.warn("[Construct 3] Failed to lock orientation")}catch(c){console.warn("[Construct 3] Failed to lock orientation: ",c)}}G(){const b=g.F();b&&"any"!==this.Fa&&this.dc();t(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.m(),innerHeight:this.j()})}sa(b){console.warn("[Construct 3] Fullscreen request failed: ",
b);t(this,"fullscreenerror",{isFullscreen:g.F(),innerWidth:this.m(),innerHeight:this.j()})}wa(b){b?this.c.sb():this.c.Va();t(this,"visibilitychange",{hidden:b})}Ra(b,c){"Backspace"===c.key&&u(c);const k=e.get(c.code)||c.code;A(this,b,{code:k,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},l)}Qb(b){t(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,
deltaMode:b.deltaMode,timeStamp:b.timeStamp},l)}ta(b,c,k){f(c)||A(this,b,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,movementX:c.movementX||0,movementY:c.movementY||0,timeStamp:c.timeStamp},k)}ua(b,c){if(!f(c)){var k=this.N;"pointerdown"===b&&0!==k?b="pointermove":"pointerup"===b&&0!==c.buttons&&(b="pointermove");A(this,b,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:k,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,
pageY:c.pageY,movementX:c.movementX||0,movementY:c.movementY||0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},l);this.N=c.buttons;this.ta(c.type,c,p)}}H(b,c){if(this.O&&"pointermove"!==b){var k=this.O;k.K||(-1!==k.C&&(self.clearTimeout(k.C),k.C=-1),k.aa=Date.now())}k=0;"mouse"===c.pointerType&&(k=this.N);A(this,b,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:k,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,
pageY:c.pageY,movementX:(c.movementX||0)+this.da,movementY:(c.movementY||0)+this.ea,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},l);this.ea=this.da=0;"mouse"===c.pointerType&&(k="mousemove","pointerdown"===b?k="mousedown":"pointerup"===b&&(k="mouseup"),this.ta(k,c,p),this.N=c.buttons)}Rb(b){this.v&&(this.da+=this.v.movementX||0,this.ea+=this.v.movementY||0);this.v=b;b=
this.O;if(-1===b.C){var c=Date.now(),k=c-b.aa,a=b.fc;k>=a&&b.Za?(b.aa=c,b.K=!0,b.Ya(),b.K=!1):b.C=self.setTimeout(b.lc,Math.max(a-k,4))}}xb(){this.H("pointermove",this.v);this.v=null}U(b,c){for(let k=0,a=c.changedTouches.length;k<a;++k){const d=c.changedTouches[k];A(this,b,{pointerId:d.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,movementX:c.movementX||0,movementY:c.movementY||0,width:2*(d.radiusX||d.webkitRadiusX||
0),height:2*(d.radiusY||d.webkitRadiusY||0),pressure:d.force||d.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:d.rotationAngle||0,timeStamp:c.timeStamp},l)}}pa(b){window!==window.top&&window.focus();this.Pa(b.target)&&document.activeElement&&!this.Pa(document.activeElement)&&document.activeElement.blur()}Pa(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}qb(){this.Xa||(this.Xa=!0,window.addEventListener("deviceorientation",b=>this.Jb(b)),window.addEventListener("deviceorientationabsolute",
b=>this.Kb(b)))}pb(){this.Wa||(this.Wa=!0,window.addEventListener("devicemotion",b=>this.Ib(b)))}Jb(b){t(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},l)}Kb(b){t(this,"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},l)}Ib(b){let c=null;var k=b.acceleration;k&&(c=
{x:k.x||0,y:k.y||0,z:k.z||0});k=null;var a=b.accelerationIncludingGravity;a&&(k={x:a.x||0,y:a.y||0,z:a.z||0});a=null;const d=b.rotationRate;d&&(a={alpha:d.alpha||0,beta:d.beta||0,gamma:d.gamma||0});t(this,"devicemotion",{acceleration:c,accelerationIncludingGravity:k,rotationRate:a,interval:b.interval,timeStamp:b.timeStamp},l)}Zb(b){const c=this.c.g;c.style.width=b.styleWidth+"px";c.style.height=b.styleHeight+"px";c.style.marginLeft=b.marginLeft+"px";c.style.marginTop=b.marginTop+"px";this.$a&&(c.style.display=
"",this.$a=!1)}Ob(b){const c=b.url;b=b.filename;const k=document.createElement("a"),a=document.body;k.textContent=b;k.href=c;k.download=b;a.appendChild(k);k.click();a.removeChild(k)}async Tb(b){var c=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);c=c?await createImageBitmap(b,c):await createImageBitmap(b);return{imageBitmap:c,transferables:[c]}}async Mb(b){return await self.C3_GetSvgImageSize(b.blob)}async Db(b){await y(b.url)}xa(){var b=
[...this.Ca];this.Ca.clear();if(!this.hc)for(const c of b)(b=c.play())&&b.catch(()=>{this.jc.has(c)||this.Ca.add(c)})}Nb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}Hb(b){if(b.show){this.s||(this.s=document.createElement("div"),this.s.id="inspectOutline",document.body.appendChild(this.s));var c=this.s;c.style.display="";c.style.left=b.left-1+"px";c.style.top=b.top-1+"px";c.style.width=b.width+2+"px";c.style.height=b.height+2+"px";c.textContent=b.name}else this.s&&
(this.s.style.display="none")}Ub(){window.C3_RegisterSW&&window.C3_RegisterSW()}Sa(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}Cb(b,c){return this.c.nb(this.J,{name:b,params:c})}qa(b){alert(b.message)}ac(b){"entered-fullscreen"===b?(g.X(!0),this.G()):"exited-fullscreen"===b?(g.X(!1),this.G()):console.warn("Unknown wrapper message: ",b)}})}"use strict";
async function Q(g){if(g.ec)throw Error("already initialised");g.ec=!0;var f=g.fa.oa("dispatchworker.js");g.za=await g.fa.ja(f,g.f,{name:"DispatchWorker"});f=new MessageChannel;g.Aa=f.port1;g.za.postMessage({type:"_init","in-port":f.port2},[f.port2]);g.Da=await S(g)}function R(g){return[g.Aa,g.Da]}
async function S(g){const f=g.ab.length;var e=g.fa.oa("jobworker.js");e=await g.fa.ja(e,g.f,{name:"JobWorker"+f});const l=new MessageChannel,p=new MessageChannel;g.za.postMessage({type:"_addJobWorker",port:l.port1},[l.port1]);e.postMessage({type:"init",number:f,"dispatch-port":l.port2,"output-port":p.port2},[l.port2,p.port2]);g.ab.push(e);return p.port1}
self.mb=class{constructor(g){this.fa=g;this.f=g.f;this.f="preview"===g.a?this.f+"workers/":this.f+g.ga;this.ic=Math.min(navigator.hardwareConcurrency||2,16);this.za=null;this.ab=[];this.Da=this.Aa=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.o({vc:!0,wc:"workermain.js",D:["scripts/c3runtime.js"],ha:[],Ga:"",sc:"scripts/",Ha:[],fb:"html5"}));"use strict";
async function U(g,f){f=f.type;let e=!0;0===f?e=await V():1===f&&(e=await W());t(g,"permission-result",{type:f,result:e})}async function V(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(g){return console.warn("[Touch] Failed to request orientation permission: ",g),!1}}
async function W(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(g){return console.warn("[Touch] Failed to request motion permission: ",g),!1}}self.o.S(class extends self.T{constructor(g){super(g,"touch");J(this,"request-permission",f=>U(this,f))}});"use strict";
function X(g){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(f=>t(g,"sw-message",f.data))}
function Y(g){g=g.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(g).catch(f=>console.warn("[Construct 3] Failed to lock orientation: ",f));else try{let f=!1;screen.lockOrientation?f=screen.lockOrientation(g):screen.webkitLockOrientation?f=screen.webkitLockOrientation(g):screen.mozLockOrientation?f=screen.mozLockOrientation(g):screen.msLockOrientation&&(f=screen.msLockOrientation(g));f||console.warn("[Construct 3] Failed to lock orientation")}catch(f){console.warn("[Construct 3] Failed to lock orientation: ",
f)}}
self.o.S(class extends self.T{constructor(g){super(g,"browser");this.a="";K(this,[["get-initial-state",f=>{this.a=f.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!==typeof window.is_scirra_arcade}}],["ready-for-sw-messages",()=>X(this)],
["alert",f=>this.qa(f)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",f=>this.va(f)],["vibrate",f=>{navigator.vibrate&&navigator.vibrate(f.pattern)}],["lock-orientation",f=>Y(f)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():
screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(f){}}],["navigate",f=>{var e=f.type;if("back"===e)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.history.back();else if("forward"===e)window.history.forward();else if("reload"===e)location.reload();else if("url"===e){e=f.url;const l=f.target;f=f.exportType;self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(e,"_system"):"preview"===
f||"windows-webview2"===f?window.open(e,"_blank"):this.Ac||(2===l?window.top.location=e:1===l?window.parent.location=e:window.location=e)}else"new-window"===e&&(e=f.url,f=f.tag,self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(e,"_system"):window.open(e,f))}],["request-fullscreen",f=>{if("windows-webview2"===this.a||"macos-wkwebview"===this.a)self.o.X(!0),this.c.ya({type:"set-fullscreen",fullscreen:!0});else{const e={navigationUI:"auto"};f=f.navUI;1===f?e.navigationUI="hide":
2===f&&(e.navigationUI="show");f=document.documentElement;f.requestFullscreen?f.requestFullscreen(e):f.mozRequestFullScreen?f.mozRequestFullScreen(e):f.msRequestFullscreen?f.msRequestFullscreen(e):f.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?f.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):f.webkitRequestFullScreen())}}],["exit-fullscreen",()=>{"windows-webview2"===this.a||"macos-wkwebview"===this.a?(self.o.X(!1),this.c.ya({type:"set-fullscreen",fullscreen:!1})):
document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",f=>{location.hash=f.hash}]]);window.addEventListener("online",()=>{t(this,"online-state",{isOnline:!0})});window.addEventListener("offline",()=>{t(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{t(this,"hashchange",{location:location.toString()})});
document.addEventListener("backbutton",()=>{t(this,"backbutton")})}qa(g){alert(g.message)}va(g){g=g.isFocus;if("nwjs"===this.a){const f="nwjs"===this.a?nw.Window.get():null;g?f.focus():f.blur()}else g?window.focus():window.blur()}});"use strict";
{function g(e){e.stopPropagation()}function f(e){13!==e.which&&27!==e.which&&e.stopPropagation()}self.o.S(class extends self.hb{constructor(e){super(e,"text-input");O(this,"scroll-to-bottom",l=>this.Xb(l))}Ka(e,l){let p;const x=l.type;"textarea"===x?(p=document.createElement("textarea"),p.style.resize="none"):(p=document.createElement("input"),p.type=x);p.style.position="absolute";p.autocomplete="off";p.addEventListener("touchstart",g);p.addEventListener("touchmove",g);p.addEventListener("touchend",
g);p.addEventListener("mousedown",g);p.addEventListener("mouseup",g);p.addEventListener("keydown",f);p.addEventListener("keyup",f);p.addEventListener("click",y=>{y.stopPropagation();P(this,"click",e)});p.addEventListener("dblclick",y=>{y.stopPropagation();P(this,"dblclick",e)});p.addEventListener("input",()=>N(this,"change",e,{text:p.value}));l.id&&(p.id=l.id);this.ma(p,l);return p}ma(e,l){e.value=l.text;e.placeholder=l.placeholder;e.title=l.title;e.disabled=!l.isEnabled;e.readOnly=l.isReadOnly;e.spellcheck=
l.spellCheck;l=l.maxLength;0>l?e.removeAttribute("maxlength"):e.setAttribute("maxlength",l)}Xb(e){e.scrollTop=e.scrollHeight}})};
