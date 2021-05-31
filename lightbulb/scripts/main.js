'use strict';function p(g,f,h,l){g.f.da(g.I,f,h,l,void 0)}function A(g,f,h,l){g.f.l?p(g,f,h,l):g.f.qb()._OnMessageFromDOM({type:"event",component:g.I,handler:f,dispatchOpts:l||null,data:h,responseId:null})}function H(g,f,h){g.f.a(g.I,f,h)}function I(g,f){for(const [h,l]of f)H(g,h,l)}window.D=class{constructor(g,f){this.f=g;this.I=f}Ba(){}};
window.fb=class{constructor(g,f){this.Ra=g;this.Vb=f;this.B=-1;this.W=-Infinity;this.$b=()=>{this.B=-1;this.W=Date.now();this.J=!0;this.Ra();this.J=!1};this.Sa=this.J=!1}};"use strict";function L(g,f){H(g,"get-element",h=>{const l=g.h.get(h.elementId);return f(l,h)})}
window.nc=class extends self.D{constructor(g,f){super(g,f);this.h=new Map;this.ra=!0;I(this,[["create",()=>{throw Error("required override");}],["destroy",h=>{{h=h.elementId;const l=this.h.get(h);this.ra&&l.parentElement.removeChild(l);this.h.delete(h)}}],["set-visible",h=>{this.ra&&(this.h.get(h.elementId).style.display=h.isVisible?"":"none")}],["update-position",h=>{if(this.ra){var l=this.h.get(h.elementId);l.style.left=h.left+"px";l.style.top=h.top+"px";l.style.width=h.width+"px";l.style.height=
h.height+"px";h=h.fontSize;null!==h&&(l.style.fontSize=h+"em")}}],["update-state",h=>{this.h.get(h.elementId);throw Error("required override");}],["focus",h=>this.oa(h)],["set-css-style",h=>{this.h.get(h.elementId).style[h.prop]=h.val}],["set-attribute",h=>{this.h.get(h.elementId).setAttribute(h.name,h.val)}],["remove-attribute",h=>{this.h.get(h.elementId).removeAttribute(h.name)}]]);L(this,h=>h)}oa(g){var f=this.h.get(g.elementId);g.focus?f.focus():f.blur()}};"use strict";
{const g=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);let f=0;function h(d,a){const c=document.createElement("script");c.async=!1;"module"===a&&(c.type="module");return d.dc?new Promise(e=>{const k="c3_resolve_"+f;++f;self[k]=e;c.textContent=d.hc+`\n\nself["${k}"]();`;document.head.appendChild(c)}):new Promise((e,k)=>{c.onload=e;c.onerror=k;c.src=d;document.head.appendChild(c)})}let l=!1,u=!1;function J(){if(!l){try{new Worker("blob://",{get type(){u=!0}})}catch(d){}l=
!0}return u}let v=new Audio;const K={"audio/webm; codecs=opus":!!v.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!v.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!v.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!v.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!v.canPlayType("audio/mp4"),"audio/mpeg":!!v.canPlayType("audio/mpeg")};v=null;async function x(d){d=await E(d);return(new TextDecoder("utf-8")).decode(d)}function E(d){return new Promise((a,
c)=>{const e=new FileReader;e.onload=k=>a(k.target.result);e.onerror=k=>c(k);e.readAsArrayBuffer(d)})}const B=[];let w=0;window.RealFile=window.File;const y=[],r=new Map,z=new Map;let C=0;const G=[];self.runOnStartup=function(d){if("function"!==typeof d)throw Error("runOnStartup called without a function");G.push(d)};const b=new Set(["cordova","playable-ad","instant-games"]);window.F=class d{constructor(a){this.l=a.jc;this.L=null;this.c="";this.Z=a.fc;this.i=a.Za;this.O={};this.va=this.Wa=null;this.V=
[];this.K=this.g=this.ya=null;this.v=-1;this.Zb=()=>this.Jb();this.Va=[];this.b=a.Xa;!this.l||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&("module"!==this.i||J())||(this.l=!1);b.has(this.b)&&this.l&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.l=!1);this.X=this.j=null;"html5"!==this.b&&"playable-ad"!==this.b||"file"!==location.protocol.substr(0,4)||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");
this.a("runtime","cordova-fetch-local-file",c=>this.wb(c));this.a("runtime","create-job-worker",()=>this.xb());"cordova"===this.b?document.addEventListener("deviceready",()=>this.Ga(a)):this.Ga(a)}Da(){return g&&"cordova"===this.b}ca(){return g&&b.has(this.b)||navigator.standalone}async Ga(a){if("playable-ad"===this.b){this.j=self.c3_base64files;this.X={};await this.lb();for(let e=0,k=a.C.length;e<k;++e){var c=a.C[e].toLowerCase();this.X.hasOwnProperty(c)?a.C[e]={dc:!0,hc:this.X[c]}:this.j.hasOwnProperty(c)&&
(a.C[e]=URL.createObjectURL(this.j[c]))}}a.ac?this.c=a.ac:(c=location.origin,this.c=("null"===c?"file:///":c)+location.pathname,c=this.c.lastIndexOf("/"),-1!==c&&(this.c=this.c.substr(0,c+1)));a.lc&&(this.O=a.lc);c=new MessageChannel;this.L=c.port1;this.L.onmessage=e=>this._OnMessageFromRuntime(e.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(e=>this.Gb(e));this.K=new self.cb(this);await M(this.K);"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&
window.AndroidFullScreen.immersiveMode();this.l?await this.sb(a,c.port2):await this.rb(a,c.port2)}fa(a){a=this.O.hasOwnProperty(a)?this.O[a]:a.endsWith("/workermain.js")&&this.O.hasOwnProperty("workermain.js")?this.O["workermain.js"]:"playable-ad"===this.b&&this.j.hasOwnProperty(a.toLowerCase())?this.j[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async aa(a,c,e){if(a.startsWith("blob:"))return new Worker(a,e);if(this.Da()&&"file:"===location.protocol)return a=await this.$(this.Z+
a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),e);a=new URL(a,c);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),e)}return new Worker(a,e)}o(){return Math.max(window.innerWidth,1)}m(){return Math.max(window.innerHeight,1)}Fa(a){var c=this.K;return{baseUrl:this.c,windowInnerWidth:this.o(),windowInnerHeight:this.m(),devicePixelRatio:window.devicePixelRatio,
isFullscreen:d.ba(),projectData:a.sc,scriptsType:a.Za,previewImageBlobs:window.cr_previewImageBlobs||this.j,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,previewProjectFileSWUrls:window.cr_previewProjectFiles,swClientId:window.qc||"",exportType:a.Xa,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.rc,jobScheduler:{inputPort:c.ta,outputPort:c.xa,maxNumWorkers:c.Xb},supportedAudioFormats:K,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.Z+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||
this.Z+"opus.wasm.wasm",isiOSCordova:this.Da(),isiOSWebView:this.ca(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async sb(a,c){var e=this.fa(a.kc);this.Wa=await this.aa(e,this.c,{type:this.i,name:"Runtime"});this.g=document.createElement("canvas");this.g.style.display="none";e=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;this.Wa.postMessage(Object.assign(this.Fa(a),{type:"init-runtime",isInWorker:!0,messagePort:c,canvas:e,workerDependencyScripts:a.Aa||
[],engineScripts:a.C,projectScripts:a.P,mainProjectScript:a.Ya,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[c,e,...N(this.K)]);this.V=y.map(k=>new k(this));this.Ea();self.c3_callFunction=(k,m)=>this.ya.tb(k,m);"preview"===this.b&&(self.goToLastErrorScript=()=>this.da("runtime","go-to-last-error-script"))}async rb(a,c){this.g=document.createElement("canvas");this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.V=y.map(m=>new m(this));this.Ea();var e=a.C.map(m=>
"string"===typeof m?(new URL(m,this.c)).toString():m);Array.isArray(a.Aa)&&e.unshift(...a.Aa);e=await Promise.all(e.map(m=>this.ha(m,this.i)));await Promise.all(e.map(m=>h(m,this.i)));const k=self.C3_ProjectScriptsStatus;if("module"===this.i){e=a.Ya;const m=a.P;for(let [q,n]of m)if(n||(n=q),q===e)try{n=await this.ha(n,this.i),await h(n,this.i),"preview"!==this.b||k[q]||this.Ma(q,"main script did not run to completion")}catch(t){this.Ma(q,t)}else if("scriptsInEvents.js"===q||q.endsWith("/scriptsInEvents.js"))n=
await this.ha(n,this.i),await h(n,this.i)}else if(a.P&&0<a.P.length)try{if(await Promise.all(a.P.map(m=>h(m[1],this.i))),Object.values(k).some(m=>!m)){self.setTimeout(()=>this.Na(k),100);return}}catch(m){console.error("[Preview] Error loading project scripts: ",m);self.setTimeout(()=>this.Na(k),100);return}"preview"===this.b&&"object"!==typeof self.mc.oc?(this.H(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):
(a=Object.assign(this.Fa(a),{isInWorker:!1,messagePort:c,canvas:this.g,runOnStartupFunctions:G}),this.Ia(),this.va=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.va,a))}Na(a){this.H();a=`Failed to load project script '${Object.entries(a).filter(c=>!c[1]).map(c=>c[0])[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+a);alert(a)}Ma(a,c){this.H();console.error(`[Preview] Failed to load project main script (${a}): `,c);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Ia(){this.H()}H(){const a=
window.bc;a&&(a.parentElement.removeChild(a),window.bc=null)}async xb(){const a=await O(this.K);return{outputPort:a,transferables:[a]}}qb(){if(this.l)throw Error("not available in worker mode");return this.va}da(a,c,e,k,m){this.L.postMessage({type:"event",component:a,handler:c,dispatchOpts:k||null,data:e,responseId:null},m)}eb(a,c){const e=C++,k=new Promise((m,q)=>{z.set(e,{resolve:m,reject:q})});this.L.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:c,responseId:e},
void 0);return k}["_OnMessageFromRuntime"](a){const c=a.type;if("event"===c)return this.Cb(a);if("result"===c)this.Mb(a);else if("runtime-ready"===c)this.Nb();else if("alert-error"===c)this.H(),alert(a.message);else if("creating-runtime"===c)this.Ia();else throw Error(`unknown message '${c}'`);}Cb(a){const c=a.component,e=a.handler,k=a.data,m=a.responseId;if(a=r.get(c))if(a=a.get(e)){var q=null;try{q=a(k)}catch(n){console.error(`Exception in '${c}' handler '${e}':`,n);null!==m&&this.T(m,!1,""+n);
return}if(null===m)return q;q&&q.then?q.then(n=>this.T(m,!0,n)).catch(n=>{console.error(`Rejection from '${c}' handler '${e}':`,n);this.T(m,!1,""+n)}):this.T(m,!0,q)}else console.warn(`[DOM] No handler '${e}' for component '${c}'`);else console.warn(`[DOM] No event handlers for component '${c}'`)}T(a,c,e){let k;e&&e.transferables&&(k=e.transferables);this.L.postMessage({type:"result",responseId:a,isOk:c,result:e},k)}Mb(a){const c=a.responseId,e=a.isOk;a=a.result;const k=z.get(c);e?k.resolve(a):k.reject(a);
z.delete(c)}a(a,c,e){let k=r.get(a);k||(k=new Map,r.set(a,k));if(k.has(c))throw Error(`[DOM] Component '${a}' already has handler '${c}'`);k.set(c,e)}static R(a){if(y.includes(a))throw Error("DOM handler already added");y.push(a)}Ea(){for(const a of this.V)if("runtime"===a.I){this.ya=a;return}throw Error("cannot find runtime DOM handler");}Gb(a){this.da("debugger","message",a)}Nb(){for(const a of this.V)a.Ba()}static ba(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}Oa(){-1===
this.v&&this.Va.length&&(this.v=requestAnimationFrame(this.Zb))}jb(){-1!==this.v&&(cancelAnimationFrame(this.v),this.v=-1)}Jb(){this.v=-1;for(const a of this.Va)a();this.Oa()}qa(){this.ya.qa()}ab(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}bb(a){return!this.ab(a)}async ha(a,c){return"cordova"===this.b&&"module"===c&&(a.startsWith("file:")||"file:"===location.protocol&&this.bb(a))?(a.startsWith(this.c)&&(a=a.substr(this.c.length)),a=await this.$(a),URL.createObjectURL(new Blob([a],
{type:"application/javascript"}))):a}async wb(a){const c=a.filename;switch(a.as){case "text":return await this.$a(c);case "buffer":return await this.$(c);default:throw Error("unsupported type");}}Ca(a){const c=window.cordova.file.applicationDirectory+"www/"+a.toLowerCase();return new Promise((e,k)=>{window.resolveLocalFileSystemURL(c,m=>{m.file(e,k)},k)})}async $a(a){a=await this.Ca(a);return await x(a)}ea(){if(B.length&&!(8<=w)){w++;var a=B.shift();this.mb(a.filename,a.ic,a.cc)}}$(a){return new Promise((c,
e)=>{B.push({filename:a,ic:k=>{w--;this.ea();c(k)},cc:k=>{w--;this.ea();e(k)}});this.ea()})}async mb(a,c,e){try{const k=await this.Ca(a),m=await E(k);c(m)}catch(k){e(k)}}async lb(){const a=[];for(const [c,e]of Object.entries(this.j))a.push(this.kb(c,e));await Promise.all(a)}async kb(a,c){if("object"===typeof c)this.j[a]=new Blob([c.str],{type:c.type}),this.X[a]=c.str;else{let e=await this.pb(c);e||(e=this.nb(c));this.j[a]=e}}async pb(a){try{return await (await fetch(a)).blob()}catch(c){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
c),null}}nb(a){a=this.Rb(a);return this.ib(a.data,a.ec)}Rb(a){var c=a.indexOf(",");if(0>c)throw new URIError("expected comma in data: uri");var e=a.substring(c+1);c=a.substring(5,c).split(";");a=c[0]||"";const k=c[2];e="base64"===c[1]||"base64"===k?atob(e):decodeURIComponent(e);return{ec:a,data:e}}ib(a,c){var e=a.length;let k=e>>2,m=new Uint8Array(e),q=new Uint32Array(m.buffer,0,k),n,t;for(t=n=0;n<k;++n)q[n]=a.charCodeAt(t++)|a.charCodeAt(t++)<<8|a.charCodeAt(t++)<<16|a.charCodeAt(t++)<<24;for(e&=
3;e--;)m[t]=a.charCodeAt(t),++t;return new Blob([m],{type:c})}}}"use strict";
{const g=self.F;function f(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const h=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),l={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},u={dispatchUserScriptEvent:!0},J={dispatchRuntimeEvent:!0};function v(b){return new Promise((d,a)=>{const c=document.createElement("link");c.onload=()=>d(c);c.onerror=e=>a(e);c.rel=
"stylesheet";c.href=b;document.head.appendChild(c)})}function K(b){return new Promise((d,a)=>{const c=new Image;c.onload=()=>d(c);c.onerror=e=>a(e);c.src=b})}async function x(b){b=URL.createObjectURL(b);try{return await K(b)}finally{URL.revokeObjectURL(b)}}function E(b){return new Promise((d,a)=>{let c=new FileReader;c.onload=e=>d(e.target.result);c.onerror=e=>a(e);c.readAsText(b)})}async function B(b,d,a){if(!/firefox/i.test(navigator.userAgent))return await x(b);var c=await E(b);c=(new DOMParser).parseFromString(c,
"image/svg+xml");const e=c.documentElement;if(e.hasAttribute("width")&&e.hasAttribute("height")){const k=e.getAttribute("width"),m=e.getAttribute("height");if(!k.includes("%")&&!m.includes("%"))return await x(b)}e.setAttribute("width",d+"px");e.setAttribute("height",a+"px");c=(new XMLSerializer).serializeToString(c);b=new Blob([c],{type:"image/svg+xml"});return await x(b)}function w(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const y=new Set(["canvas",
"body","html"]);function r(b){y.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function z(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await x(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const d=b.getBoundingClientRect();document.body.removeChild(b);return[d.width,d.height]}};self.C3_RasterSvgImageBlob=async function(b,
d,a,c,e){b=await B(b,d,a);const k=document.createElement("canvas");k.width=c;k.height=e;k.getContext("2d").drawImage(b,0,0,d,a);return k};let C=!1;document.addEventListener("pause",()=>C=!0);document.addEventListener("resume",()=>C=!1);function G(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}g.R(class extends self.D{constructor(b){super(b,"runtime");this.Ta=!0;this.A=-1;this.za="any";this.Pa=this.Qa=!1;this.ua=this.N=this.s=null;b.a("canvas","update-size",c=>this.Pb(c));
b.a("runtime","invoke-download",c=>this.Fb(c));b.a("runtime","raster-svg-image",c=>this.Kb(c));b.a("runtime","get-svg-image-size",c=>this.Db(c));b.a("runtime","set-target-orientation",c=>this.Ob(c));b.a("runtime","register-sw",()=>this.Lb());b.a("runtime","post-to-debugger",c=>this.Ka(c));b.a("runtime","go-to-script",c=>this.Ka(c));b.a("runtime","before-start-ticking",()=>this.vb());b.a("runtime","debug-highlight",c=>this.yb(c));b.a("runtime","enable-device-orientation",()=>this.hb());b.a("runtime",
"enable-device-motion",()=>this.gb());b.a("runtime","add-stylesheet",c=>this.ub(c));b.a("runtime","alert",c=>this.ia(c));b.a("runtime","hide-cordova-splash",()=>this.Eb());const d=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",c=>{const e=c.target;d.has(e.tagName.toLowerCase())||w(e)||c.preventDefault()});const a=b.g;window.addEventListener("selectstart",r);window.addEventListener("gesturehold",r);a.addEventListener("selectstart",r);a.addEventListener("gesturehold",
r);window.addEventListener("touchstart",r,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",r,{passive:!1}),a.addEventListener("pointerdown",r)):a.addEventListener("touchstart",r);this.M=0;window.addEventListener("mousedown",c=>{1===c.button&&c.preventDefault()});window.addEventListener("mousewheel",z,{passive:!1});window.addEventListener("wheel",z,{passive:!1});window.addEventListener("resize",()=>this.Qb());window.addEventListener("fullscreenchange",()=>this.ja());
window.addEventListener("webkitfullscreenchange",()=>this.ja());window.addEventListener("mozfullscreenchange",()=>this.ja());window.addEventListener("fullscreenerror",c=>this.ka(c));window.addEventListener("webkitfullscreenerror",c=>this.ka(c));window.addEventListener("mozfullscreenerror",c=>this.ka(c));b.ca()&&window.addEventListener("focusout",()=>{{const k=document.activeElement;if(k){var c=k.tagName.toLowerCase();var e=new Set("email number password search tel text url".split(" "));c="textarea"===
c?!0:"input"===c?e.has(k.type.toLowerCase()||"text"):w(k)}else c=!1}c||(document.scrollingElement.scrollTop=0)});this.wa=new Set;this.Yb=new WeakSet;this.Wb=!1}vb(){"cordova"===this.f.b?(document.addEventListener("pause",()=>this.pa(!0)),document.addEventListener("resume",()=>this.pa(!1))):document.addEventListener("visibilitychange",()=>this.pa(document.hidden));return{isSuspended:!(!document.hidden&&!C)}}Ba(){window.addEventListener("focus",()=>this.U("window-focus"));window.addEventListener("blur",
()=>{this.U("window-blur",{parentHasFocus:G()});this.M=0});window.addEventListener("keydown",d=>this.Ja("keydown",d));window.addEventListener("keyup",d=>this.Ja("keyup",d));window.addEventListener("dblclick",d=>this.ma("dblclick",d,l));window.addEventListener("wheel",d=>this.Hb(d));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",d=>{this.ga(d);this.G("pointerdown",d)}),this.f.l&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.N=new self.fb(()=>this.ob(),
5),this.N.Sa=!0,window.addEventListener("pointerrawupdate",d=>this.Ib(d))):window.addEventListener("pointermove",d=>this.G("pointermove",d)),window.addEventListener("pointerup",d=>this.G("pointerup",d)),window.addEventListener("pointercancel",d=>this.G("pointercancel",d))):(window.addEventListener("mousedown",d=>{this.ga(d);this.na("pointerdown",d)}),window.addEventListener("mousemove",d=>this.na("pointermove",d)),window.addEventListener("mouseup",d=>this.na("pointerup",d)),window.addEventListener("touchstart",
d=>{this.ga(d);this.S("pointerdown",d)}),window.addEventListener("touchmove",d=>this.S("pointermove",d)),window.addEventListener("touchend",d=>this.S("pointerup",d)),window.addEventListener("touchcancel",d=>this.S("pointercancel",d)));const b=()=>this.qa();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0)}U(b,d){p(this,b,d||null,J)}o(){return this.f.o()}m(){return this.f.m()}Qb(){const b=
this.o(),d=this.m();this.U("window-resize",{innerWidth:b,innerHeight:d,devicePixelRatio:window.devicePixelRatio});this.f.ca()&&(-1!==this.A&&clearTimeout(this.A),this.La(b,d,0))}Sb(b,d,a){-1!==this.A&&clearTimeout(this.A);this.A=setTimeout(()=>this.La(b,d,a),48)}La(b,d,a){const c=this.o(),e=this.m();this.A=-1;c!=b||e!=d?this.U("window-resize",{innerWidth:c,innerHeight:e,devicePixelRatio:window.devicePixelRatio}):10>a&&this.Sb(c,e,a+1)}Ob(b){this.za=b.targetOrientation}Tb(){const b=this.za;if(screen.orientation&&
screen.orientation.lock)screen.orientation.lock(b).catch(d=>console.warn("[Construct 3] Failed to lock orientation: ",d));else try{let d=!1;screen.lockOrientation?d=screen.lockOrientation(b):screen.webkitLockOrientation?d=screen.webkitLockOrientation(b):screen.mozLockOrientation?d=screen.mozLockOrientation(b):screen.msLockOrientation&&(d=screen.msLockOrientation(b));d||console.warn("[Construct 3] Failed to lock orientation")}catch(d){console.warn("[Construct 3] Failed to lock orientation: ",d)}}ja(){const b=
g.ba();b&&"any"!==this.za&&this.Tb();p(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.o(),innerHeight:this.m()})}ka(b){console.warn("[Construct 3] Fullscreen request failed: ",b);p(this,"fullscreenerror",{isFullscreen:g.ba(),innerWidth:this.o(),innerHeight:this.m()})}pa(b){b?this.f.jb():this.f.Oa();p(this,"visibilitychange",{hidden:b})}Ja(b,d){"Backspace"===d.key&&r(d);const a=h.get(d.code)||d.code;A(this,b,{code:a,key:d.key,which:d.which,repeat:d.repeat,altKey:d.altKey,ctrlKey:d.ctrlKey,
metaKey:d.metaKey,shiftKey:d.shiftKey,timeStamp:d.timeStamp},l)}Hb(b){p(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,deltaMode:b.deltaMode,timeStamp:b.timeStamp},l)}ma(b,d,a){f(d)||A(this,b,{button:d.button,buttons:d.buttons,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,timeStamp:d.timeStamp},a)}na(b,d){if(!f(d)){var a=this.M;"pointerdown"===b&&0!==a?b="pointermove":"pointerup"===b&&0!==d.buttons&&(b=
"pointermove");A(this,b,{pointerId:1,pointerType:"mouse",button:d.button,buttons:d.buttons,lastButtons:a,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:d.timeStamp},l);this.M=d.buttons;this.ma(d.type,d,u)}}G(b,d){if(this.N&&"pointermove"!==b){var a=this.N;a.J||(-1!==a.B&&(self.clearTimeout(a.B),a.B=-1),a.W=Date.now())}a=0;"mouse"===d.pointerType&&(a=this.M);A(this,b,{pointerId:d.pointerId,pointerType:d.pointerType,
button:d.button,buttons:d.buttons,lastButtons:a,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,width:d.width||0,height:d.height||0,pressure:d.pressure||0,tangentialPressure:d.tangentialPressure||0,tiltX:d.tiltX||0,tiltY:d.tiltY||0,twist:d.twist||0,timeStamp:d.timeStamp},l);"mouse"===d.pointerType&&(a="mousemove","pointerdown"===b?a="mousedown":"pointerup"===b&&(a="mouseup"),this.ma(a,d,u),this.M=d.buttons)}Ib(b){this.ua=b;b=this.N;if(-1===b.B){var d=Date.now(),a=d-b.W,c=b.Vb;a>=c&&
b.Sa?(b.W=d,b.J=!0,b.Ra(),b.J=!1):b.B=self.setTimeout(b.$b,Math.max(c-a,4))}}ob(){this.G("pointermove",this.ua);this.ua=null}S(b,d){for(let a=0,c=d.changedTouches.length;a<c;++a){const e=d.changedTouches[a];A(this,b,{pointerId:e.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,width:2*(e.radiusX||e.webkitRadiusX||0),height:2*(e.radiusY||e.webkitRadiusY||0),pressure:e.force||e.webkitForce||0,tangentialPressure:0,tiltX:0,
tiltY:0,twist:e.rotationAngle||0,timeStamp:d.timeStamp},l)}}ga(b){window!==window.top&&window.focus();this.Ha(b.target)&&document.activeElement&&!this.Ha(document.activeElement)&&document.activeElement.blur()}Ha(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}hb(){this.Qa||(this.Qa=!0,window.addEventListener("deviceorientation",b=>this.Ab(b)),window.addEventListener("deviceorientationabsolute",b=>this.Bb(b)))}gb(){this.Pa||(this.Pa=!0,window.addEventListener("devicemotion",
b=>this.zb(b)))}Ab(b){p(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},l)}Bb(b){p(this,"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},l)}zb(b){let d=null;var a=b.acceleration;a&&(d={x:a.x||0,y:a.y||0,z:a.z||0});a=null;var c=b.accelerationIncludingGravity;c&&(a={x:c.x||
0,y:c.y||0,z:c.z||0});c=null;const e=b.rotationRate;e&&(c={alpha:e.alpha||0,beta:e.beta||0,gamma:e.gamma||0});p(this,"devicemotion",{acceleration:d,accelerationIncludingGravity:a,rotationRate:c,interval:b.interval,timeStamp:b.timeStamp},l)}Pb(b){const d=this.f.g;d.style.width=b.styleWidth+"px";d.style.height=b.styleHeight+"px";d.style.marginLeft=b.marginLeft+"px";d.style.marginTop=b.marginTop+"px";this.Ta&&(d.style.display="",this.Ta=!1)}Fb(b){const d=b.url;b=b.filename;const a=document.createElement("a"),
c=document.body;a.textContent=b;a.href=d;a.download=b;c.appendChild(a);a.click();c.removeChild(a)}async Kb(b){var d=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);d=d?await createImageBitmap(b,d):await createImageBitmap(b);return{imageBitmap:d,transferables:[d]}}async Db(b){return await self.C3_GetSvgImageSize(b.blob)}async ub(b){await v(b.url)}qa(){var b=[...this.wa];this.wa.clear();if(!this.Wb)for(const d of b)(b=d.play())&&
b.catch(()=>{this.Yb.has(d)||this.wa.add(d)})}Eb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}yb(b){if(b.show){this.s||(this.s=document.createElement("div"),this.s.id="inspectOutline",document.body.appendChild(this.s));var d=this.s;d.style.display="";d.style.left=b.left-1+"px";d.style.top=b.top-1+"px";d.style.width=b.width+2+"px";d.style.height=b.height+2+"px";d.textContent=b.name}else this.s&&(this.s.style.display="none")}Lb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Ka(b){window.c3_postToMessagePort&&
(b.from="runtime",window.c3_postToMessagePort(b))}tb(b,d){return this.f.eb(this.I,{name:b,params:d})}ia(b){alert(b.message)}})}"use strict";async function M(g){if(g.Ub)throw Error("already initialised");g.Ub=!0;var f=g.Y.fa("dispatchworker.js");g.sa=await g.Y.aa(f,g.c,{name:"DispatchWorker"});f=new MessageChannel;g.ta=f.port1;g.sa.postMessage({type:"_init","in-port":f.port2},[f.port2]);g.xa=await O(g)}function N(g){return[g.ta,g.xa]}
async function O(g){const f=g.Ua.length;var h=g.Y.fa("jobworker.js");h=await g.Y.aa(h,g.c,{name:"JobWorker"+f});const l=new MessageChannel,u=new MessageChannel;g.sa.postMessage({type:"_addJobWorker",port:l.port1},[l.port1]);h.postMessage({type:"init",number:f,"dispatch-port":l.port2,"output-port":u.port2},[l.port2,u.port2]);g.Ua.push(h);return u.port1}
self.cb=class{constructor(g){this.Y=g;this.c=g.c;this.c="preview"===g.b?this.c+"c3/workers/":this.c+g.Z;this.Xb=Math.min(navigator.hardwareConcurrency||2,16);this.sa=null;this.Ua=[];this.xa=this.ta=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.F({jc:!1,kc:"workermain.js",C:["scripts/c3runtime.js"],P:[],Ya:"",Za:"module",fc:"scripts/",Aa:[],Xa:"html5"}));"use strict";
async function P(g,f){f=f.type;let h=!0;0===f?h=await Q():1===f&&(h=await R());p(g,"permission-result",{type:f,result:h})}async function Q(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(g){return console.warn("[Touch] Failed to request orientation permission: ",g),!1}}
async function R(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(g){return console.warn("[Touch] Failed to request motion permission: ",g),!1}}self.F.R(class extends self.D{constructor(g){super(g,"touch");H(this,"request-permission",f=>P(this,f))}});"use strict";
function S(g){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(f=>p(g,"sw-message",f.data))}
function T(g){g=g.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(g).catch(f=>console.warn("[Construct 3] Failed to lock orientation: ",f));else try{let f=!1;screen.lockOrientation?f=screen.lockOrientation(g):screen.webkitLockOrientation?f=screen.webkitLockOrientation(g):screen.mozLockOrientation?f=screen.mozLockOrientation(g):screen.msLockOrientation&&(f=screen.msLockOrientation(g));f||console.warn("[Construct 3] Failed to lock orientation")}catch(f){console.warn("[Construct 3] Failed to lock orientation: ",
f)}}
self.F.R(class extends self.D{constructor(g){super(g,"browser");this.b="";I(this,[["get-initial-state",f=>this.la(f)],["ready-for-sw-messages",()=>S(this)],["alert",f=>this.ia(f)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",f=>this.oa(f)],["vibrate",f=>{navigator.vibrate&&navigator.vibrate(f.pattern)}],["lock-orientation",f=>T(f)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?
screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(f){}}],["navigate",f=>{var h=f.type;if("back"===h)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===h)window.forward();else if("home"===h)window.home();else if("reload"===h)location.reload();
else if("url"===h){h=f.url;var l=f.target;f=f.exportType;"windows-uwp"===f&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(h)):self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(h,"_system"):"preview"===f||"windows-webview2"===f?window.open(h,"_blank"):this.pc||(2===l?window.top.location=h:1===l?window.parent.location=h:window.location=h)}else"new-window"===h&&(h=f.url,l=f.tag,"windows-uwp"===f.exportType&&"undefined"!==typeof Windows?
Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(h)):self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(h,"_system"):window.open(h,l))}],["request-fullscreen",f=>{{const h={navigationUI:"auto"};f=f.navUI;1===f?h.navigationUI="hide":2===f&&(h.navigationUI="show");f=document.documentElement;f.requestFullscreen?f.requestFullscreen(h):f.mozRequestFullScreen?f.mozRequestFullScreen(h):f.msRequestFullscreen?f.msRequestFullscreen(h):f.webkitRequestFullScreen&&("undefined"!==
typeof Element.ALLOW_KEYBOARD_INPUT?f.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):f.webkitRequestFullScreen())}}],["exit-fullscreen",()=>{document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",f=>{location.hash=f.hash}]]);window.addEventListener("online",()=>{p(this,"online-state",{isOnline:!0})});window.addEventListener("offline",
()=>{p(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{p(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",()=>{p(this,"backbutton")});"undefined"!==typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",f=>{f.handled=!0;p(this,"backbutton")})}la(g){this.b=g.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,
isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!==typeof window.is_scirra_arcade}}ia(g){alert(g.message)}oa(g){g=g.isFocus;if("nwjs"===this.b){const f="nwjs"===this.b?nw.Window.get():null;g?f.focus():f.blur()}else g?window.focus():window.blur()}});"use strict";
async function U(g){if(!g.u)try{g.u=await navigator.wakeLock.request("screen"),g.u.addEventListener("release",()=>{console.log("[Construct 3] Screen wake lock released");g.u=null;p(g,"wake-lock-released")}),console.log("[Construct 3] Screen wake lock acquired"),p(g,"wake-lock-acquired")}catch(f){console.warn("[Construct 3] Failed to acquire screen wake lock: ",f),p(g,"wake-lock-error")}}
function V(){var g=document.body;const f=g.style;f.setProperty("--temp-sai-top","env(safe-area-inset-top)");f.setProperty("--temp-sai-right","env(safe-area-inset-right)");f.setProperty("--temp-sai-bottom","env(safe-area-inset-bottom)");f.setProperty("--temp-sai-left","env(safe-area-inset-left)");g=getComputedStyle(g);g=[g.getPropertyValue("--temp-sai-top"),g.getPropertyValue("--temp-sai-right"),g.getPropertyValue("--temp-sai-bottom"),g.getPropertyValue("--temp-sai-left")].map(h=>{h=parseInt(h,10);
return isFinite(h)?h:0});f.removeProperty("--temp-sai-top");f.removeProperty("--temp-sai-right");f.removeProperty("--temp-sai-bottom");f.removeProperty("--temp-sai-left");return g}
self.F.R(class extends self.D{constructor(g){super(g,"platform-info");I(this,[["get-initial-state",()=>this.la()],["request-wake-lock",()=>U(this)],["release-wake-lock",()=>{this.u&&(this.u.release(),this.u=null)}]]);window.addEventListener("resize",()=>{p(this,"window-resize",{windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,safeAreaInset:V()})});this.u=null}la(){return{screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
safeAreaInset:V(),supportsWakeLock:!!navigator.wakeLock}}});
