'use strict';function t(e,g,f,l){e.c.ma(e.K,g,f,l,void 0)}function A(e,g,f,l){e.c.i?t(e,g,f,l):e.c.Bb()._OnMessageFromDOM({type:"event",component:e.K,handler:g,dispatchOpts:l||null,data:f,responseId:null})}function J(e,g,f){e.c.b(e.K,g,f)}function K(e,g){for(const [f,l]of g)J(e,f,l)}window.U=class{constructor(e,g){this.c=e;this.K=g}Ka(){}};
window.qb=class{constructor(e,g){this.$a=e;this.ic=g;this.D=-1;this.ba=-Infinity;this.nc=()=>{this.D=-1;this.ba=Date.now();this.L=!0;this.$a();this.L=!1};this.ab=this.L=!1}};"use strict";function M(e,g){const f=g.elementId,l=e.Ma(f,g);e.h.set(f,l);l.style.boxSizing="border-box";g.isVisible||(l.style.display="none");l.addEventListener("focus",()=>{N(e,"elem-focused",f)});l.addEventListener("blur",()=>{N(e,"elem-blurred",f)});e.Z&&document.body.appendChild(l)}
function O(e,g,f){J(e,g,l=>{const p=e.h.get(l.elementId);return f(p,l)})}function N(e,g,f,l){l||(l={});l.elementId=f;t(e,g,l)}function P(e,g,f){var l;l||(l={});l.elementId=f;A(e,g,l)}
window.jb=class extends self.U{constructor(e,g){super(e,g);this.h=new Map;this.Z=!0;K(this,[["create",f=>M(this,f)],["destroy",f=>{{f=f.elementId;const l=this.h.get(f);this.Z&&l.parentElement.removeChild(l);this.h.delete(f)}}],["set-visible",f=>{this.Z&&(this.h.get(f.elementId).style.display=f.isVisible?"":"none")}],["update-position",f=>{if(this.Z){var l=this.h.get(f.elementId);l.style.left=f.left+"px";l.style.top=f.top+"px";l.style.width=f.width+"px";l.style.height=f.height+"px";f=f.fontSize;null!==
f&&(l.style.fontSize=f+"em")}}],["update-state",f=>{{const l=this.h.get(f.elementId);this.na(l,f)}}],["focus",f=>this.xa(f)],["set-css-style",f=>{this.h.get(f.elementId).style[f.prop]=f.val}],["set-attribute",f=>{this.h.get(f.elementId).setAttribute(f.name,f.val)}],["remove-attribute",f=>{this.h.get(f.elementId).removeAttribute(f.name)}]]);O(this,"get-element",f=>f)}Ma(){throw Error("required override");}na(){throw Error("required override");}xa(e){var g=this.h.get(e.elementId);e.focus?g.focus():
g.blur()}};"use strict";
{const e=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),g=/android/i.test(navigator.userAgent);let f=0;function l(k){const a=document.createElement("script");a.async=!1;a.type="module";return k.sc?new Promise(d=>{const h="c3_resolve_"+f;++f;self[h]=d;a.textContent=k.vc+`\n\nself["${h}"]();`;document.head.appendChild(a)}):new Promise((d,h)=>{a.onload=d;a.onerror=h;a.src=k;document.head.appendChild(a)})}let p=!1,x=!1;function y(){if(!p){try{new Worker("blob://",{get type(){x=
!0}})}catch(k){}p=!0}return x}let w=new Audio;const B={"audio/webm; codecs=opus":!!w.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!w.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!w.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!w.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!w.canPlayType("audio/mp4"),"audio/mpeg":!!w.canPlayType("audio/mpeg")};w=null;async function L(k){k=await G(k);return(new TextDecoder("utf-8")).decode(k)}
function G(k){return new Promise((a,d)=>{const h=new FileReader;h.onload=m=>a(m.target.result);h.onerror=m=>d(m);h.readAsArrayBuffer(k)})}const z=[];let C=0;window.RealFile=window.File;const D=[],u=new Map,E=new Map;let F=0;const H=[];self.runOnStartup=function(k){if("function"!==typeof k)throw Error("runOnStartup called without a function");H.push(k)};const b=new Set(["cordova","playable-ad","instant-games"]);let c=!1;window.o=class k{constructor(a){this.i=a.xc;this.N=null;this.f="";this.ha=a.uc;
this.S={};this.Da=this.gb=null;this.$=[];this.M=this.g=this.Ga=null;this.B=-1;this.mc=()=>this.Ub();this.fb=[];this.a=a.hb;this.aa="file"===location.protocol.substr(0,4);!this.i||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&y()||(this.i=!1);if("playable-ad"===this.a||"instant-games"===this.a)this.i=!1;if("cordova"===this.a&&this.i)if(g){const d=/Chrome\/(\d+)/i.exec(navigator.userAgent);d&&90<=parseInt(d[1],10)||(this.i=!1)}else this.i=!1;this.da=this.l=null;"html5"!==this.a&&"playable-ad"!==
this.a||!this.aa||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");"html5"!==this.a||window.isSecureContext||console.warn("[Construct 3] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.b("runtime","cordova-fetch-local-file",d=>this.Hb(d));this.b("runtime","create-job-worker",
()=>this.Ib());"cordova"===this.a?document.addEventListener("deviceready",()=>this.Qa(a)):this.Qa(a)}nb(){return e&&"cordova"===this.a}la(){const a=navigator.userAgent;return e&&b.has(this.a)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}lb(){return g}Na(){return g&&b.has(this.a)}async Qa(a){"macos-wkwebview"===this.a&&this.Aa({type:"ready"});if("playable-ad"===this.a){this.l=self.c3_base64files;this.da={};await this.wb();for(let h=0,m=a.F.length;h<m;++h){var d=a.F[h].toLowerCase();this.da.hasOwnProperty(d)?
a.F[h]={sc:!0,vc:this.da[d]}:this.l.hasOwnProperty(d)&&(a.F[h]=URL.createObjectURL(this.l[d]))}}a.oc?this.f=a.oc:(d=location.origin,this.f=("null"===d?"file:///":d)+location.pathname,d=this.f.lastIndexOf("/"),-1!==d&&(this.f=this.f.substr(0,d+1)));a.zc&&(this.S=a.zc);d=new MessageChannel;this.N=d.port1;this.N.onmessage=h=>this._OnMessageFromRuntime(h.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(h=>this.Rb(h));this.M=new self.ob(this);await Q(this.M);"object"===typeof window.StatusBar&&
window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();this.i?await this.Db(a,d.port2):await this.Cb(a,d.port2)}pa(a){a=this.S.hasOwnProperty(a)?this.S[a]:a.endsWith("/workermain.js")&&this.S.hasOwnProperty("workermain.js")?this.S["workermain.js"]:"playable-ad"===this.a&&this.l.hasOwnProperty(a.toLowerCase())?this.l[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ka(a,d,h){if(a.startsWith("blob:"))return new Worker(a,
h);if("cordova"===this.a&&this.aa)return a=await this.ja(h.rc?a:this.ha+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),h);a=new URL(a,d);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),h)}return new Worker(a,h)}m(){return Math.max(window.innerWidth,1)}j(){return Math.max(window.innerHeight,1)}Pa(a){var d=this.M;return{baseUrl:this.f,windowInnerWidth:this.m(),
windowInnerHeight:this.j(),devicePixelRatio:window.devicePixelRatio,isFullscreen:k.G(),projectData:a.Fc,previewImageBlobs:window.cr_previewImageBlobs||this.l,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,previewProjectFileSWUrls:window.cr_previewProjectFiles,swClientId:window.Dc||"",exportType:a.hb,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.Ec,jobScheduler:{inputPort:d.Ca,outputPort:d.Fa,maxNumWorkers:d.kc},supportedAudioFormats:B,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||
this.ha+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.ha+"opus.wasm.wasm",isFileProtocol:this.aa,isiOSCordova:this.nb(),isiOSWebView:this.la(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async Db(a,d){var h=this.pa(a.yc);this.gb=await this.ka(h,this.f,{type:"module",name:"Runtime",rc:!0});this.g=document.createElement("canvas");this.g.style.display="none";h=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;let m=a.Ja||[],
r=a.F;m=await Promise.all(m.map(n=>this.v(n)));r=await Promise.all(r.map(n=>this.v(n)));if("cordova"===this.a)for(let n=0,q=a.ia.length;n<q;++n){const v=a.ia[n],I=v[0];if(I===a.Ia||"scriptsInEvents.js"===I||I.endsWith("/scriptsInEvents.js"))v[1]=await this.v(I)}this.gb.postMessage(Object.assign(this.Pa(a),{type:"init-runtime",isInWorker:!0,messagePort:d,canvas:h,workerDependencyScripts:m,engineScripts:r,projectScripts:a.ia,mainProjectScript:a.Ia,projectScriptsStatus:self.C3_ProjectScriptsStatus}),
[d,h,...R(this.M)]);this.$=D.map(n=>new n(this));this.Oa();self.c3_callFunction=(n,q)=>this.Ga.Eb(n,q);"preview"===this.a&&(self.goToLastErrorScript=()=>this.ma("runtime","go-to-last-error-script"))}async Cb(a,d){this.g=document.createElement("canvas");this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.$=D.map(n=>new n(this));this.Oa();var h=a.F.map(n=>"string"===typeof n?(new URL(n,this.f)).toString():n);Array.isArray(a.Ja)&&h.unshift(...a.Ja);h=await Promise.all(h.map(n=>
this.v(n)));await Promise.all(h.map(n=>l(n)));h=self.C3_ProjectScriptsStatus;const m=a.Ia,r=a.ia;for(let [n,q]of r)if(q||(q=n),n===m)try{q=await this.v(q),await l(q),"preview"!==this.a||h[n]||this.Wa(n,"main script did not run to completion")}catch(v){this.Wa(n,v)}else if("scriptsInEvents.js"===n||n.endsWith("/scriptsInEvents.js"))q=await this.v(q),await l(q);"preview"===this.a&&"object"!==typeof self.Ac.Bc?(this.X(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),
alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Pa(a),{isInWorker:!1,messagePort:d,canvas:this.g,runOnStartupFunctions:H}),this.Sa(),this.Da=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.Da,a))}Wa(a,d){this.X();console.error(`[Preview] Failed to load project main script (${a}): `,d);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Sa(){this.X()}X(){const a=
window.pc;a&&(a.parentElement.removeChild(a),window.pc=null)}async Ib(){const a=await S(this.M);return{outputPort:a,transferables:[a]}}Bb(){if(this.i)throw Error("not available in worker mode");return this.Da}ma(a,d,h,m,r){this.N.postMessage({type:"event",component:a,handler:d,dispatchOpts:m||null,data:h,responseId:null},r)}pb(a,d){const h=F++,m=new Promise((r,n)=>{E.set(h,{resolve:r,reject:n})});this.N.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:d,responseId:h},
void 0);return m}["_OnMessageFromRuntime"](a){const d=a.type;if("event"===d)return this.Nb(a);if("result"===d)this.Xb(a);else if("runtime-ready"===d)this.Yb();else if("alert-error"===d)this.X(),alert(a.message);else if("creating-runtime"===d)this.Sa();else throw Error(`unknown message '${d}'`);}Nb(a){const d=a.component,h=a.handler,m=a.data,r=a.responseId;if(a=u.get(d))if(a=a.get(h)){var n=null;try{n=a(m)}catch(q){console.error(`Exception in '${d}' handler '${h}':`,q);null!==r&&this.W(r,!1,""+q);
return}if(null===r)return n;n&&n.then?n.then(q=>this.W(r,!0,q)).catch(q=>{console.error(`Rejection from '${d}' handler '${h}':`,q);this.W(r,!1,""+q)}):this.W(r,!0,n)}else console.warn(`[DOM] No handler '${h}' for component '${d}'`);else console.warn(`[DOM] No event handlers for component '${d}'`)}W(a,d,h){let m;h&&h.transferables&&(m=h.transferables);this.N.postMessage({type:"result",responseId:a,isOk:d,result:h},m)}Xb(a){const d=a.responseId,h=a.isOk;a=a.result;const m=E.get(d);h?m.resolve(a):m.reject(a);
E.delete(d)}b(a,d,h){let m=u.get(a);m||(m=new Map,u.set(a,m));if(m.has(d))throw Error(`[DOM] Component '${a}' already has handler '${d}'`);m.set(d,h)}static T(a){if(D.includes(a))throw Error("DOM handler already added");D.push(a)}Oa(){for(const a of this.$)if("runtime"===a.K){this.Ga=a;return}throw Error("cannot find runtime DOM handler");}Rb(a){this.ma("debugger","message",a)}Yb(){for(const a of this.$)a.Ka()}static G(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||
c)}static Y(a){c=!!a}Xa(){-1===this.B&&this.fb.length&&(this.B=requestAnimationFrame(this.mc))}ub(){-1!==this.B&&(cancelAnimationFrame(this.B),this.B=-1)}Ub(){this.B=-1;for(const a of this.fb)a();this.Xa()}za(){this.Ga.za()}kb(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}mb(a){return!this.kb(a)}async v(a){return"cordova"===this.a&&(a.startsWith("file:")||this.aa&&this.mb(a))?(a.startsWith(this.f)&&(a=a.substr(this.f.length)),a=await this.ja(a),URL.createObjectURL(new Blob([a],
{type:"application/javascript"}))):a}async Hb(a){const d=a.filename;switch(a.as){case "text":return await this.ib(d);case "buffer":return await this.ja(d);default:throw Error("unsupported type");}}La(a){const d=window.cordova.file.applicationDirectory+"www/"+a.toLowerCase();return new Promise((h,m)=>{window.resolveLocalFileSystemURL(d,r=>{r.file(h,m)},m)})}async ib(a){a=await this.La(a);return await L(a)}oa(){if(z.length&&!(8<=C)){C++;var a=z.shift();this.xb(a.filename,a.wc,a.qc)}}ja(a){return new Promise((d,
h)=>{z.push({filename:a,wc:m=>{C--;this.oa();d(m)},qc:m=>{C--;this.oa();h(m)}});this.oa()})}async xb(a,d,h){try{const m=await this.La(a),r=await G(m);d(r)}catch(m){h(m)}}Aa(a){if("windows-webview2"===this.a)window.chrome.webview.postMessage(JSON.stringify(a));else if("macos-wkwebview"===this.a)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async wb(){const a=[];for(const [d,h]of Object.entries(this.l))a.push(this.vb(d,h));await Promise.all(a)}async vb(a,
d){if("object"===typeof d)this.l[a]=new Blob([d.str],{type:d.type}),this.da[a]=d.str;else{let h=await this.Ab(d);h||(h=this.yb(d));this.l[a]=h}}async Ab(a){try{return await (await fetch(a)).blob()}catch(d){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",d),null}}yb(a){a=this.dc(a);return this.tb(a.data,a.tc)}dc(a){var d=a.indexOf(",");if(0>
d)throw new URIError("expected comma in data: uri");var h=a.substring(d+1);d=a.substring(5,d).split(";");a=d[0]||"";const m=d[2];h="base64"===d[1]||"base64"===m?atob(h):decodeURIComponent(h);return{tc:a,data:h}}tb(a,d){var h=a.length;let m=h>>2,r=new Uint8Array(h),n=new Uint32Array(r.buffer,0,m),q,v;for(v=q=0;q<m;++q)n[q]=a.charCodeAt(v++)|a.charCodeAt(v++)<<8|a.charCodeAt(v++)<<16|a.charCodeAt(v++)<<24;for(h&=3;h--;)r[v]=a.charCodeAt(v),++v;return new Blob([r],{type:d})}}}"use strict";
{const e=self.o;function g(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const f=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),l={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},p={dispatchUserScriptEvent:!0},x={dispatchRuntimeEvent:!0};function y(b){return new Promise((c,k)=>{const a=document.createElement("link");a.onload=()=>c(a);a.onerror=d=>k(d);a.rel=
"stylesheet";a.href=b;document.head.appendChild(a)})}function w(b){return new Promise((c,k)=>{const a=new Image;a.onload=()=>c(a);a.onerror=d=>k(d);a.src=b})}async function B(b){b=URL.createObjectURL(b);try{return await w(b)}finally{URL.revokeObjectURL(b)}}function L(b){return new Promise((c,k)=>{let a=new FileReader;a.onload=d=>c(d.target.result);a.onerror=d=>k(d);a.readAsText(b)})}async function G(b,c,k){if(!/firefox/i.test(navigator.userAgent))return await B(b);var a=await L(b);a=(new DOMParser).parseFromString(a,
"image/svg+xml");const d=a.documentElement;if(d.hasAttribute("width")&&d.hasAttribute("height")){const h=d.getAttribute("width"),m=d.getAttribute("height");if(!h.includes("%")&&!m.includes("%"))return await B(b)}d.setAttribute("width",c+"px");d.setAttribute("height",k+"px");a=(new XMLSerializer).serializeToString(a);b=new Blob([a],{type:"image/svg+xml"});return await B(b)}function z(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const C=new Set(["input",
"textarea","datalist","select"]),D=new Set(["canvas","body","html"]);function u(b){D.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function E(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await B(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const c=b.getBoundingClientRect();document.body.removeChild(b);return[c.width,
c.height]}};self.C3_RasterSvgImageBlob=async function(b,c,k,a,d){b=await G(b,c,k);const h=document.createElement("canvas");h.width=a;h.height=d;h.getContext("2d").drawImage(b,0,0,c,k);return h};let F=!1;document.addEventListener("pause",()=>F=!0);document.addEventListener("resume",()=>F=!1);function H(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}e.T(class extends self.U{constructor(b){super(b,"runtime");this.bb=!0;this.C=-1;this.Ha="any";this.Ya=this.Za=!1;this.A=
this.P=this.s=null;this.fa=this.ea=0;this.eb=b.m();this.ca=b.j();this.R=0;b.b("canvas","update-size",a=>this.ac(a));b.b("runtime","invoke-download",a=>this.Qb(a));b.b("runtime","raster-svg-image",a=>this.Vb(a));b.b("runtime","get-svg-image-size",a=>this.Ob(a));b.b("runtime","set-target-orientation",a=>this.$b(a));b.b("runtime","register-sw",()=>this.Wb());b.b("runtime","post-to-debugger",a=>this.Ua(a));b.b("runtime","go-to-script",a=>this.Ua(a));b.b("runtime","before-start-ticking",()=>this.Gb());
b.b("runtime","debug-highlight",a=>this.Jb(a));b.b("runtime","enable-device-orientation",()=>this.sb());b.b("runtime","enable-device-motion",()=>this.rb());b.b("runtime","add-stylesheet",a=>this.Fb(a));b.b("runtime","alert",a=>this.ra(a));b.b("runtime","hide-cordova-splash",()=>this.Pb());const c=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",a=>{const d=a.target;c.has(d.tagName.toLowerCase())||z(d)||a.preventDefault()});const k=b.g;window.addEventListener("selectstart",
u);window.addEventListener("gesturehold",u);k.addEventListener("selectstart",u);k.addEventListener("gesturehold",u);window.addEventListener("touchstart",u,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",u,{passive:!1}),k.addEventListener("pointerdown",u)):k.addEventListener("touchstart",u);this.O=0;window.addEventListener("mousedown",a=>{1===a.button&&a.preventDefault()});window.addEventListener("mousewheel",E,{passive:!1});window.addEventListener("wheel",E,
{passive:!1});window.addEventListener("resize",()=>this.bc());window.addEventListener("fullscreenchange",()=>this.H());window.addEventListener("webkitfullscreenchange",()=>this.H());window.addEventListener("mozfullscreenchange",()=>this.H());window.addEventListener("fullscreenerror",a=>this.ta(a));window.addEventListener("webkitfullscreenerror",a=>this.ta(a));window.addEventListener("mozfullscreenerror",a=>this.ta(a));b.la()&&window.addEventListener("focusout",()=>{{const h=document.activeElement;
if(h){var a=h.tagName.toLowerCase();var d=new Set("email number password search tel text url".split(" "));a="textarea"===a?!0:"input"===a?d.has(h.type.toLowerCase()||"text"):z(h)}else a=!1}a||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=a=>this.cc(a);this.Ea=new Set;this.lc=new WeakSet;this.jc=!1}Gb(){"cordova"===this.c.a?(document.addEventListener("pause",()=>this.ya(!0)),document.addEventListener("resume",()=>this.ya(!1))):document.addEventListener("visibilitychange",()=>this.ya(document.hidden));
return{isSuspended:!(!document.hidden&&!F)}}Ka(){window.addEventListener("focus",()=>this.J("window-focus"));window.addEventListener("blur",()=>{this.J("window-blur",{parentHasFocus:H()});this.O=0});window.addEventListener("focusin",c=>{c=c.target;(C.has(c.tagName.toLowerCase())||z(c))&&this.J("keyboard-blur")});window.addEventListener("keydown",c=>this.Ta("keydown",c));window.addEventListener("keyup",c=>this.Ta("keyup",c));window.addEventListener("dblclick",c=>this.va("dblclick",c,l));window.addEventListener("wheel",
c=>this.Sb(c));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",c=>{this.qa(c);this.I("pointerdown",c)}),this.c.i&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.P=new self.qb(()=>this.zb(),5),this.P.ab=!0,window.addEventListener("pointerrawupdate",c=>this.Tb(c))):window.addEventListener("pointermove",c=>this.I("pointermove",c)),window.addEventListener("pointerup",c=>this.I("pointerup",c)),window.addEventListener("pointercancel",c=>this.I("pointercancel",
c))):(window.addEventListener("mousedown",c=>{this.qa(c);this.wa("pointerdown",c)}),window.addEventListener("mousemove",c=>this.wa("pointermove",c)),window.addEventListener("mouseup",c=>this.wa("pointerup",c)),window.addEventListener("touchstart",c=>{this.qa(c);this.V("pointerdown",c)}),window.addEventListener("touchmove",c=>this.V("pointermove",c)),window.addEventListener("touchend",c=>this.V("pointerup",c)),window.addEventListener("touchcancel",c=>this.V("pointercancel",c)));const b=()=>this.za();
window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0);this.c.lb()&&!this.c.Na()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{this.sa(this.j(),navigator.virtualKeyboard.boundingRect.height)}))}sa(b,c){document.body.style.transform="";if(0<c){var k=document.activeElement;
k&&(k=k.getBoundingClientRect(),b=(k.top+k.bottom)/2-(b-c)/2,b>c&&(b=c),0>b&&(b=0),0<b&&(document.body.style.transform=`translateY(${-b}px)`))}}J(b,c){t(this,b,c||null,x)}m(){return this.c.m()}j(){return this.c.j()}bc(){const b=this.m(),c=this.j();if(this.c.Na()){if(this.eb===b&&c<this.ca){this.R=this.ca-c;this.sa(this.ca,this.R);return}0<this.R&&(this.R=0,this.sa(c,this.R));this.eb=b;this.ca=c}this.J("window-resize",{innerWidth:b,innerHeight:c,devicePixelRatio:window.devicePixelRatio,isFullscreen:e.G()});
this.c.la()&&(-1!==this.C&&clearTimeout(this.C),this.Va(b,c,0))}ec(b,c,k){-1!==this.C&&clearTimeout(this.C);this.C=setTimeout(()=>this.Va(b,c,k),48)}Va(b,c,k){const a=this.m(),d=this.j();this.C=-1;a!=b||d!=c?this.J("window-resize",{innerWidth:a,innerHeight:d,devicePixelRatio:window.devicePixelRatio,isFullscreen:e.G()}):10>k&&this.ec(a,d,k+1)}$b(b){this.Ha=b.targetOrientation}fc(){const b=this.Ha;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(c=>console.warn("[Construct 3] Failed to lock orientation: ",
c));else try{let c=!1;screen.lockOrientation?c=screen.lockOrientation(b):screen.webkitLockOrientation?c=screen.webkitLockOrientation(b):screen.mozLockOrientation?c=screen.mozLockOrientation(b):screen.msLockOrientation&&(c=screen.msLockOrientation(b));c||console.warn("[Construct 3] Failed to lock orientation")}catch(c){console.warn("[Construct 3] Failed to lock orientation: ",c)}}H(){const b=e.G();b&&"any"!==this.Ha&&this.fc();t(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.m(),innerHeight:this.j()})}ta(b){console.warn("[Construct 3] Fullscreen request failed: ",
b);t(this,"fullscreenerror",{isFullscreen:e.G(),innerWidth:this.m(),innerHeight:this.j()})}ya(b){b?this.c.ub():this.c.Xa();t(this,"visibilitychange",{hidden:b})}Ta(b,c){"Backspace"===c.key&&u(c);const k=f.get(c.code)||c.code;A(this,b,{code:k,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},l)}Sb(b){t(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,
deltaMode:b.deltaMode,timeStamp:b.timeStamp},l)}va(b,c,k){g(c)||A(this,b,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,movementX:c.movementX||0,movementY:c.movementY||0,timeStamp:c.timeStamp},k)}wa(b,c){if(!g(c)){var k=this.O;"pointerdown"===b&&0!==k?b="pointermove":"pointerup"===b&&0!==c.buttons&&(b="pointermove");A(this,b,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:k,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,
pageY:c.pageY,movementX:c.movementX||0,movementY:c.movementY||0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},l);this.O=c.buttons;this.va(c.type,c,p)}}I(b,c){if(this.P&&"pointermove"!==b){var k=this.P;k.L||(-1!==k.D&&(self.clearTimeout(k.D),k.D=-1),k.ba=Date.now())}k=0;"mouse"===c.pointerType&&(k=this.O);A(this,b,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:k,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,
pageY:c.pageY,movementX:(c.movementX||0)+this.ea,movementY:(c.movementY||0)+this.fa,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},l);this.fa=this.ea=0;"mouse"===c.pointerType&&(k="mousemove","pointerdown"===b?k="mousedown":"pointerup"===b&&(k="mouseup"),this.va(k,c,p),this.O=c.buttons)}Tb(b){this.A&&(this.ea+=this.A.movementX||0,this.fa+=this.A.movementY||0);this.A=b;b=
this.P;if(-1===b.D){var c=Date.now(),k=c-b.ba,a=b.ic;k>=a&&b.ab?(b.ba=c,b.L=!0,b.$a(),b.L=!1):b.D=self.setTimeout(b.nc,Math.max(a-k,4))}}zb(){this.I("pointermove",this.A);this.A=null}V(b,c){for(let k=0,a=c.changedTouches.length;k<a;++k){const d=c.changedTouches[k];A(this,b,{pointerId:d.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,movementX:c.movementX||0,movementY:c.movementY||0,width:2*(d.radiusX||d.webkitRadiusX||
0),height:2*(d.radiusY||d.webkitRadiusY||0),pressure:d.force||d.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:d.rotationAngle||0,timeStamp:c.timeStamp},l)}}qa(b){window!==window.top&&window.focus();this.Ra(b.target)&&document.activeElement&&!this.Ra(document.activeElement)&&document.activeElement.blur()}Ra(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}sb(){this.Za||(this.Za=!0,window.addEventListener("deviceorientation",b=>this.Lb(b)),window.addEventListener("deviceorientationabsolute",
b=>this.Mb(b)))}rb(){this.Ya||(this.Ya=!0,window.addEventListener("devicemotion",b=>this.Kb(b)))}Lb(b){t(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},l)}Mb(b){t(this,"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},l)}Kb(b){let c=null;var k=b.acceleration;k&&(c=
{x:k.x||0,y:k.y||0,z:k.z||0});k=null;var a=b.accelerationIncludingGravity;a&&(k={x:a.x||0,y:a.y||0,z:a.z||0});a=null;const d=b.rotationRate;d&&(a={alpha:d.alpha||0,beta:d.beta||0,gamma:d.gamma||0});t(this,"devicemotion",{acceleration:c,accelerationIncludingGravity:k,rotationRate:a,interval:b.interval,timeStamp:b.timeStamp},l)}ac(b){const c=this.c.g;c.style.width=b.styleWidth+"px";c.style.height=b.styleHeight+"px";c.style.marginLeft=b.marginLeft+"px";c.style.marginTop=b.marginTop+"px";this.bb&&(c.style.display=
"",this.bb=!1)}Qb(b){const c=b.url;b=b.filename;const k=document.createElement("a"),a=document.body;k.textContent=b;k.href=c;k.download=b;a.appendChild(k);k.click();a.removeChild(k)}async Vb(b){var c=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);c=c?await createImageBitmap(b,c):await createImageBitmap(b);return{imageBitmap:c,transferables:[c]}}async Ob(b){return await self.C3_GetSvgImageSize(b.blob)}async Fb(b){await y(b.url)}za(){var b=
[...this.Ea];this.Ea.clear();if(!this.jc)for(const c of b)(b=c.play())&&b.catch(()=>{this.lc.has(c)||this.Ea.add(c)})}Pb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}Jb(b){if(b.show){this.s||(this.s=document.createElement("div"),this.s.id="inspectOutline",document.body.appendChild(this.s));var c=this.s;c.style.display="";c.style.left=b.left-1+"px";c.style.top=b.top-1+"px";c.style.width=b.width+2+"px";c.style.height=b.height+2+"px";c.textContent=b.name}else this.s&&
(this.s.style.display="none")}Wb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Ua(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}Eb(b,c){return this.c.pb(this.K,{name:b,params:c})}ra(b){alert(b.message)}cc(b){"entered-fullscreen"===b?(e.Y(!0),this.H()):"exited-fullscreen"===b?(e.Y(!1),this.H()):console.warn("Unknown wrapper message: ",b)}})}"use strict";
async function Q(e){if(e.hc)throw Error("already initialised");e.hc=!0;var g=e.ga.pa("dispatchworker.js");e.Ba=await e.ga.ka(g,e.f,{name:"DispatchWorker"});g=new MessageChannel;e.Ca=g.port1;e.Ba.postMessage({type:"_init","in-port":g.port2},[g.port2]);e.Fa=await S(e)}function R(e){return[e.Ca,e.Fa]}
async function S(e){const g=e.cb.length;var f=e.ga.pa("jobworker.js");f=await e.ga.ka(f,e.f,{name:"JobWorker"+g});const l=new MessageChannel,p=new MessageChannel;e.Ba.postMessage({type:"_addJobWorker",port:l.port1},[l.port1]);f.postMessage({type:"init",number:g,"dispatch-port":l.port2,"output-port":p.port2},[l.port2,p.port2]);e.cb.push(f);return p.port1}
self.ob=class{constructor(e){this.ga=e;this.f=e.f;this.f="preview"===e.a?this.f+"workers/":this.f+e.ha;this.kc=Math.min(navigator.hardwareConcurrency||2,16);this.Ba=null;this.cb=[];this.Fa=this.Ca=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.o({xc:!0,yc:"workermain.js",F:["scripts/c3runtime.js"],ia:[],Ia:"",uc:"scripts/",Ja:[],hb:"html5"}));"use strict";
{function e(f){f.stopPropagation()}function g(f){13!==f.which&&27!==f.which&&f.stopPropagation()}self.o.T(class extends self.jb{constructor(f){super(f,"text-input");O(this,"scroll-to-bottom",l=>this.Zb(l))}Ma(f,l){let p;const x=l.type;"textarea"===x?(p=document.createElement("textarea"),p.style.resize="none"):(p=document.createElement("input"),p.type=x);p.style.position="absolute";p.autocomplete="off";p.addEventListener("touchstart",e);p.addEventListener("touchmove",e);p.addEventListener("touchend",
e);p.addEventListener("mousedown",e);p.addEventListener("mouseup",e);p.addEventListener("keydown",g);p.addEventListener("keyup",g);p.addEventListener("click",y=>{y.stopPropagation();P(this,"click",f)});p.addEventListener("dblclick",y=>{y.stopPropagation();P(this,"dblclick",f)});p.addEventListener("input",()=>N(this,"change",f,{text:p.value}));l.id&&(p.id=l.id);this.na(p,l);return p}na(f,l){f.value=l.text;f.placeholder=l.placeholder;f.title=l.title;f.disabled=!l.isEnabled;f.readOnly=l.isReadOnly;f.spellcheck=
l.spellCheck;l=l.maxLength;0>l?f.removeAttribute("maxlength"):f.setAttribute("maxlength",l)}Zb(f){f.scrollTop=f.scrollHeight}})}"use strict";function T(e){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(g=>t(e,"sw-message",g.data))}
function V(e){e=e.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(e).catch(g=>console.warn("[Construct 3] Failed to lock orientation: ",g));else try{let g=!1;screen.lockOrientation?g=screen.lockOrientation(e):screen.webkitLockOrientation?g=screen.webkitLockOrientation(e):screen.mozLockOrientation?g=screen.mozLockOrientation(e):screen.msLockOrientation&&(g=screen.msLockOrientation(e));g||console.warn("[Construct 3] Failed to lock orientation")}catch(g){console.warn("[Construct 3] Failed to lock orientation: ",
g)}}
self.o.T(class extends self.U{constructor(e){super(e,"browser");this.a="";K(this,[["get-initial-state",g=>this.ua(g)],["ready-for-sw-messages",()=>T(this)],["alert",g=>this.ra(g)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",g=>this.xa(g)],["vibrate",g=>{navigator.vibrate&&navigator.vibrate(g.pattern)}],["lock-orientation",g=>V(g)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?
screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(g){}}],["navigate",g=>{var f=g.type;if("back"===f)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.history.back();else if("forward"===f)window.history.forward();else if("reload"===f)location.reload();else if("url"===
f){f=g.url;const l=g.target;g=g.exportType;self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(f,"_system"):"preview"===g||"windows-webview2"===g?window.open(f,"_blank"):this.Cc||(2===l?window.top.location=f:1===l?window.parent.location=f:window.location=f)}else"new-window"===f&&(f=g.url,g=g.tag,self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(f,"_system"):window.open(f,g))}],["request-fullscreen",g=>{if("windows-webview2"===this.a||"macos-wkwebview"===this.a)self.o.Y(!0),
this.c.Aa({type:"set-fullscreen",fullscreen:!0});else{const f={navigationUI:"auto"};g=g.navUI;1===g?f.navigationUI="hide":2===g&&(f.navigationUI="show");g=document.documentElement;g.requestFullscreen?g.requestFullscreen(f):g.mozRequestFullScreen?g.mozRequestFullScreen(f):g.msRequestFullscreen?g.msRequestFullscreen(f):g.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?g.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):g.webkitRequestFullScreen())}}],["exit-fullscreen",
()=>{"windows-webview2"===this.a||"macos-wkwebview"===this.a?(self.o.Y(!1),this.c.Aa({type:"set-fullscreen",fullscreen:!1})):document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",g=>{location.hash=g.hash}]]);window.addEventListener("online",()=>{t(this,"online-state",{isOnline:!0})});window.addEventListener("offline",
()=>{t(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{t(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",()=>{t(this,"backbutton")})}ua(e){this.a=e.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
isScirraArcade:"undefined"!==typeof window.is_scirra_arcade}}ra(e){alert(e.message)}xa(e){e=e.isFocus;if("nwjs"===this.a){const g="nwjs"===this.a?nw.Window.get():null;e?g.focus():g.blur()}else e?window.focus():window.blur()}});"use strict";
async function W(e){if(!e.u)try{e.u=await navigator.wakeLock.request("screen"),e.u.addEventListener("release",()=>{console.log("[Construct 3] Screen wake lock released");e.u=null;t(e,"wake-lock-released")}),console.log("[Construct 3] Screen wake lock acquired"),t(e,"wake-lock-acquired")}catch(g){console.warn("[Construct 3] Failed to acquire screen wake lock: ",g),t(e,"wake-lock-error")}}
function X(){var e=document.body;const g=e.style;g.setProperty("--temp-sai-top","env(safe-area-inset-top)");g.setProperty("--temp-sai-right","env(safe-area-inset-right)");g.setProperty("--temp-sai-bottom","env(safe-area-inset-bottom)");g.setProperty("--temp-sai-left","env(safe-area-inset-left)");e=getComputedStyle(e);e=[e.getPropertyValue("--temp-sai-top"),e.getPropertyValue("--temp-sai-right"),e.getPropertyValue("--temp-sai-bottom"),e.getPropertyValue("--temp-sai-left")].map(f=>{f=parseInt(f,10);
return isFinite(f)?f:0});g.removeProperty("--temp-sai-top");g.removeProperty("--temp-sai-right");g.removeProperty("--temp-sai-bottom");g.removeProperty("--temp-sai-left");return e}
self.o.T(class extends self.U{constructor(e){super(e,"platform-info");K(this,[["get-initial-state",()=>this.ua()],["request-wake-lock",()=>W(this)],["release-wake-lock",()=>{this.u&&(this.u.release(),this.u=null)}]]);window.addEventListener("resize",()=>{t(this,"window-resize",{windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,safeAreaInset:X()})});this.u=null}ua(){return{screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
safeAreaInset:X(),supportsWakeLock:!!navigator.wakeLock}}});
