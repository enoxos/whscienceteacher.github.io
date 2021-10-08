'use strict';function r(g,e,h,n){g.f.fa(g.I,e,h,n,void 0)}function C(g,e,h,n){g.f.i?r(g,e,h,n):g.f.ob()._OnMessageFromDOM({type:"event",component:g.I,handler:e,dispatchOpts:n||null,data:h,responseId:null})}function H(g,e,h){g.f.b(g.I,e,h)}function L(g,e){for(const [h,n]of e)H(g,h,n)}window.P=class{constructor(g,e){this.f=g;this.I=e}Ca(){}};
window.cb=class{constructor(g,e){this.Qa=g;this.Ub=e;this.B=-1;this.X=-Infinity;this.Zb=()=>{this.B=-1;this.X=Date.now();this.J=!0;this.Qa();this.J=!1};this.Ra=this.J=!1}};"use strict";function M(g,e){H(g,"get-element",h=>{const n=g.h.get(h.elementId);return e(n,h)})}
window.nc=class extends self.P{constructor(g,e){super(g,e);this.h=new Map;this.ra=!0;L(this,[["create",()=>{throw Error("required override");}],["destroy",h=>{{h=h.elementId;const n=this.h.get(h);this.ra&&n.parentElement.removeChild(n);this.h.delete(h)}}],["set-visible",h=>{this.ra&&(this.h.get(h.elementId).style.display=h.isVisible?"":"none")}],["update-position",h=>{if(this.ra){var n=this.h.get(h.elementId);n.style.left=h.left+"px";n.style.top=h.top+"px";n.style.width=h.width+"px";n.style.height=
h.height+"px";h=h.fontSize;null!==h&&(n.style.fontSize=h+"em")}}],["update-state",h=>{this.h.get(h.elementId);throw Error("required override");}],["focus",h=>this.na(h)],["set-css-style",h=>{this.h.get(h.elementId).style[h.prop]=h.val}],["set-attribute",h=>{this.h.get(h.elementId).setAttribute(h.name,h.val)}],["remove-attribute",h=>{this.h.get(h.elementId).removeAttribute(h.name)}]]);M(this,h=>h)}na(g){var e=this.h.get(g.elementId);g.focus?e.focus():e.blur()}};"use strict";
{const g=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);let e=0;function h(k){const a=document.createElement("script");a.async=!1;a.type="module";return k.dc?new Promise(d=>{const f="c3_resolve_"+e;++e;self[f]=d;a.textContent=k.hc+`\n\nself["${f}"]();`;document.head.appendChild(a)}):new Promise((d,f)=>{a.onload=d;a.onerror=f;a.src=k;document.head.appendChild(a)})}let n=!1,v=!1;function I(){if(!n){try{new Worker("blob://",{get type(){v=!0}})}catch(k){}n=!0}return v}const J=
/safari\//i.test(navigator.userAgent)&&!/chrome\/|chromium\/|edg\//i.test(navigator.userAgent);let w=new Audio;const y={"audio/webm; codecs=opus":!!w.canPlayType("audio/webm; codecs=opus")&&!J,"audio/ogg; codecs=opus":!!w.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!w.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!w.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!w.canPlayType("audio/mp4"),"audio/mpeg":!!w.canPlayType("audio/mpeg")};w=null;async function K(k){k=
await E(k);return(new TextDecoder("utf-8")).decode(k)}function E(k){return new Promise((a,d)=>{const f=new FileReader;f.onload=l=>a(l.target.result);f.onerror=l=>d(l);f.readAsArrayBuffer(k)})}const x=[];let z=0;window.RealFile=window.File;const A=[],t=new Map,B=new Map;let D=0;const F=[];self.runOnStartup=function(k){if("function"!==typeof k)throw Error("runOnStartup called without a function");F.push(k)};const b=new Set(["cordova","playable-ad","instant-games"]);let c=!1;window.s=class k{constructor(a){this.i=
a.jc;this.L=null;this.c="";this.$=a.fc;this.O={};this.va=this.Va=null;this.V=[];this.K=this.g=this.ya=null;this.v=-1;this.Yb=()=>this.Hb();this.Ua=[];this.a=a.Wa;this.W="file"===location.protocol.substr(0,4);!this.i||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&I()||(this.i=!1);if("playable-ad"===this.a||"instant-games"===this.a)this.i=!1;if("cordova"===this.a&&this.i)if(/android/i.test(navigator.userAgent)){const d=/Chrome\/(\d+)/i.exec(navigator.userAgent);d&&90<=parseInt(d[1],
10)||(this.i=!1)}else this.i=!1;this.Y=this.j=null;"html5"!==this.a&&"playable-ad"!==this.a||!this.W||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");this.b("runtime","cordova-fetch-local-file",d=>this.ub(d));this.b("runtime","create-job-worker",()=>this.vb());"cordova"===this.a?document.addEventListener("deviceready",()=>this.Ga(a)):this.Ga(a)}$a(){return g&&"cordova"===this.a}ea(){const a=
navigator.userAgent;return g&&b.has(this.a)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}async Ga(a){"macos-wkwebview"===this.a&&this.qa({type:"ready"});if("playable-ad"===this.a){this.j=self.c3_base64files;this.Y={};await this.jb();for(let f=0,l=a.C.length;f<l;++f){var d=a.C[f].toLowerCase();this.Y.hasOwnProperty(d)?a.C[f]={dc:!0,hc:this.Y[d]}:this.j.hasOwnProperty(d)&&(a.C[f]=URL.createObjectURL(this.j[d]))}}a.$b?this.c=a.$b:(d=location.origin,this.c=("null"===d?"file:///":d)+location.pathname,
d=this.c.lastIndexOf("/"),-1!==d&&(this.c=this.c.substr(0,d+1)));a.lc&&(this.O=a.lc);d=new MessageChannel;this.L=d.port1;this.L.onmessage=f=>this._OnMessageFromRuntime(f.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(f=>this.Eb(f));this.K=new self.ab(this);await N(this.K);"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();this.i?await this.qb(a,d.port2):await this.pb(a,d.port2)}ha(a){a=
this.O.hasOwnProperty(a)?this.O[a]:a.endsWith("/workermain.js")&&this.O.hasOwnProperty("workermain.js")?this.O["workermain.js"]:"playable-ad"===this.a&&this.j.hasOwnProperty(a.toLowerCase())?this.j[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async da(a,d,f){if(a.startsWith("blob:"))return new Worker(a,f);if("cordova"===this.a&&this.W)return a=await this.ca(f.cc?a:this.$+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),f);a=new URL(a,d);
if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),f)}return new Worker(a,f)}m(){return Math.max(window.innerWidth,1)}l(){return Math.max(window.innerHeight,1)}Fa(a){var d=this.K;return{baseUrl:this.c,windowInnerWidth:this.m(),windowInnerHeight:this.l(),devicePixelRatio:window.devicePixelRatio,isFullscreen:k.D(),projectData:a.sc,previewImageBlobs:window.cr_previewImageBlobs||this.j,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,
previewProjectFileSWUrls:window.cr_previewProjectFiles,swClientId:window.qc||"",exportType:a.Wa,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.rc,jobScheduler:{inputPort:d.ta,outputPort:d.xa,maxNumWorkers:d.Wb},supportedAudioFormats:y,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.$+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.$+"opus.wasm.wasm",isFileProtocol:this.W,isiOSCordova:this.$a(),isiOSWebView:this.ea(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async qb(a,
d){var f=this.ha(a.kc);this.Va=await this.da(f,this.c,{type:"module",name:"Runtime",cc:!0});this.g=document.createElement("canvas");this.g.style.display="none";f=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;let l=a.Ba||[],q=a.C;l=await Promise.all(l.map(m=>this.u(m)));q=await Promise.all(q.map(m=>this.u(m)));if("cordova"===this.a)for(let m=0,p=a.aa.length;m<p;++m){const u=a.aa[m],G=u[0];if(G===a.Aa||"scriptsInEvents.js"===G||G.endsWith("/scriptsInEvents.js"))u[1]=
await this.u(G)}this.Va.postMessage(Object.assign(this.Fa(a),{type:"init-runtime",isInWorker:!0,messagePort:d,canvas:f,workerDependencyScripts:l,engineScripts:q,projectScripts:a.aa,mainProjectScript:a.Aa,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[d,f,...O(this.K)]);this.V=A.map(m=>new m(this));this.Ea();self.c3_callFunction=(m,p)=>this.ya.rb(m,p);"preview"===this.a&&(self.goToLastErrorScript=()=>this.fa("runtime","go-to-last-error-script"))}async pb(a,d){this.g=document.createElement("canvas");
this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.V=A.map(m=>new m(this));this.Ea();var f=a.C.map(m=>"string"===typeof m?(new URL(m,this.c)).toString():m);Array.isArray(a.Ba)&&f.unshift(...a.Ba);f=await Promise.all(f.map(m=>this.u(m)));await Promise.all(f.map(m=>h(m)));f=self.C3_ProjectScriptsStatus;const l=a.Aa,q=a.aa;for(let [m,p]of q)if(p||(p=m),m===l)try{p=await this.u(p),await h(p),"preview"!==this.a||f[m]||this.Ma(m,"main script did not run to completion")}catch(u){this.Ma(m,
u)}else if("scriptsInEvents.js"===m||m.endsWith("/scriptsInEvents.js"))p=await this.u(p),await h(p);"preview"===this.a&&"object"!==typeof self.mc.oc?(this.T(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Fa(a),{isInWorker:!1,messagePort:d,canvas:this.g,runOnStartupFunctions:F}),this.Ia(),this.va=
self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.va,a))}Ma(a,d){this.T();console.error(`[Preview] Failed to load project main script (${a}): `,d);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Ia(){this.T()}T(){const a=window.ac;a&&(a.parentElement.removeChild(a),window.ac=null)}async vb(){const a=await Q(this.K);return{outputPort:a,transferables:[a]}}ob(){if(this.i)throw Error("not available in worker mode");
return this.va}fa(a,d,f,l,q){this.L.postMessage({type:"event",component:a,handler:d,dispatchOpts:l||null,data:f,responseId:null},q)}bb(a,d){const f=D++,l=new Promise((q,m)=>{B.set(f,{resolve:q,reject:m})});this.L.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:d,responseId:f},void 0);return l}["_OnMessageFromRuntime"](a){const d=a.type;if("event"===d)return this.Ab(a);if("result"===d)this.Kb(a);else if("runtime-ready"===d)this.Lb();else if("alert-error"===
d)this.T(),alert(a.message);else if("creating-runtime"===d)this.Ia();else throw Error(`unknown message '${d}'`);}Ab(a){const d=a.component,f=a.handler,l=a.data,q=a.responseId;if(a=t.get(d))if(a=a.get(f)){var m=null;try{m=a(l)}catch(p){console.error(`Exception in '${d}' handler '${f}':`,p);null!==q&&this.S(q,!1,""+p);return}if(null===q)return m;m&&m.then?m.then(p=>this.S(q,!0,p)).catch(p=>{console.error(`Rejection from '${d}' handler '${f}':`,p);this.S(q,!1,""+p)}):this.S(q,!0,m)}else console.warn(`[DOM] No handler '${f}' for component '${d}'`);
else console.warn(`[DOM] No event handlers for component '${d}'`)}S(a,d,f){let l;f&&f.transferables&&(l=f.transferables);this.L.postMessage({type:"result",responseId:a,isOk:d,result:f},l)}Kb(a){const d=a.responseId,f=a.isOk;a=a.result;const l=B.get(d);f?l.resolve(a):l.reject(a);B.delete(d)}b(a,d,f){let l=t.get(a);l||(l=new Map,t.set(a,l));if(l.has(d))throw Error(`[DOM] Component '${a}' already has handler '${d}'`);l.set(d,f)}static ba(a){if(A.includes(a))throw Error("DOM handler already added");A.push(a)}Ea(){for(const a of this.V)if("runtime"===
a.I){this.ya=a;return}throw Error("cannot find runtime DOM handler");}Eb(a){this.fa("debugger","message",a)}Lb(){for(const a of this.V)a.Ca()}static D(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||c)}static U(a){c=!!a}Na(){-1===this.v&&this.Ua.length&&(this.v=requestAnimationFrame(this.Yb))}hb(){-1!==this.v&&(cancelAnimationFrame(this.v),this.v=-1)}Hb(){this.v=-1;for(const a of this.Ua)a();this.Na()}pa(){this.ya.pa()}Ya(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||
"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}Za(a){return!this.Ya(a)}async u(a){return"cordova"===this.a&&(a.startsWith("file:")||this.W&&this.Za(a))?(a.startsWith(this.c)&&(a=a.substr(this.c.length)),a=await this.ca(a),URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async ub(a){const d=a.filename;switch(a.as){case "text":return await this.Xa(d);case "buffer":return await this.ca(d);default:throw Error("unsupported type");}}Da(a){const d=window.cordova.file.applicationDirectory+
"www/"+a.toLowerCase();return new Promise((f,l)=>{window.resolveLocalFileSystemURL(d,q=>{q.file(f,l)},l)})}async Xa(a){a=await this.Da(a);return await K(a)}ga(){if(x.length&&!(8<=z)){z++;var a=x.shift();this.kb(a.filename,a.ic,a.bc)}}ca(a){return new Promise((d,f)=>{x.push({filename:a,ic:l=>{z--;this.ga();d(l)},bc:l=>{z--;this.ga();f(l)}});this.ga()})}async kb(a,d,f){try{const l=await this.Da(a),q=await E(l);d(q)}catch(l){f(l)}}qa(a){if("windows-webview2"===this.a)window.chrome.webview.postMessage(JSON.stringify(a));
else if("macos-wkwebview"===this.a)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async jb(){const a=[];for(const [d,f]of Object.entries(this.j))a.push(this.ib(d,f));await Promise.all(a)}async ib(a,d){if("object"===typeof d)this.j[a]=new Blob([d.str],{type:d.type}),this.Y[a]=d.str;else{let f=await this.nb(d);f||(f=this.lb(d));this.j[a]=f}}async nb(a){try{return await (await fetch(a)).blob()}catch(d){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
d),null}}lb(a){a=this.Qb(a);return this.gb(a.data,a.ec)}Qb(a){var d=a.indexOf(",");if(0>d)throw new URIError("expected comma in data: uri");var f=a.substring(d+1);d=a.substring(5,d).split(";");a=d[0]||"";const l=d[2];f="base64"===d[1]||"base64"===l?atob(f):decodeURIComponent(f);return{ec:a,data:f}}gb(a,d){var f=a.length;let l=f>>2,q=new Uint8Array(f),m=new Uint32Array(q.buffer,0,l),p,u;for(u=p=0;p<l;++p)m[p]=a.charCodeAt(u++)|a.charCodeAt(u++)<<8|a.charCodeAt(u++)<<16|a.charCodeAt(u++)<<24;for(f&=
3;f--;)q[u]=a.charCodeAt(u),++u;return new Blob([q],{type:d})}}}"use strict";
{const g=self.s;function e(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const h=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),n={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},v={dispatchUserScriptEvent:!0},I={dispatchRuntimeEvent:!0};function J(b){return new Promise((c,k)=>{const a=document.createElement("link");a.onload=()=>c(a);a.onerror=d=>k(d);a.rel=
"stylesheet";a.href=b;document.head.appendChild(a)})}function w(b){return new Promise((c,k)=>{const a=new Image;a.onload=()=>c(a);a.onerror=d=>k(d);a.src=b})}async function y(b){b=URL.createObjectURL(b);try{return await w(b)}finally{URL.revokeObjectURL(b)}}function K(b){return new Promise((c,k)=>{let a=new FileReader;a.onload=d=>c(d.target.result);a.onerror=d=>k(d);a.readAsText(b)})}async function E(b,c,k){if(!/firefox/i.test(navigator.userAgent))return await y(b);var a=await K(b);a=(new DOMParser).parseFromString(a,
"image/svg+xml");const d=a.documentElement;if(d.hasAttribute("width")&&d.hasAttribute("height")){const f=d.getAttribute("width"),l=d.getAttribute("height");if(!f.includes("%")&&!l.includes("%"))return await y(b)}d.setAttribute("width",c+"px");d.setAttribute("height",k+"px");a=(new XMLSerializer).serializeToString(a);b=new Blob([a],{type:"image/svg+xml"});return await y(b)}function x(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const z=new Set(["input",
"textarea","datalist","select"]),A=new Set(["canvas","body","html"]);function t(b){A.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function B(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await y(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const c=b.getBoundingClientRect();document.body.removeChild(b);return[c.width,
c.height]}};self.C3_RasterSvgImageBlob=async function(b,c,k,a,d){b=await E(b,c,k);const f=document.createElement("canvas");f.width=a;f.height=d;f.getContext("2d").drawImage(b,0,0,c,k);return f};let D=!1;document.addEventListener("pause",()=>D=!0);document.addEventListener("resume",()=>D=!1);function F(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}g.ba(class extends self.P{constructor(b){super(b,"runtime");this.Sa=!0;this.A=-1;this.za="any";this.Oa=this.Pa=!1;this.ua=
this.N=this.o=null;b.b("canvas","update-size",a=>this.Nb(a));b.b("runtime","invoke-download",a=>this.Db(a));b.b("runtime","raster-svg-image",a=>this.Ib(a));b.b("runtime","get-svg-image-size",a=>this.Bb(a));b.b("runtime","set-target-orientation",a=>this.Mb(a));b.b("runtime","register-sw",()=>this.Jb());b.b("runtime","post-to-debugger",a=>this.Ka(a));b.b("runtime","go-to-script",a=>this.Ka(a));b.b("runtime","before-start-ticking",()=>this.tb());b.b("runtime","debug-highlight",a=>this.wb(a));b.b("runtime",
"enable-device-orientation",()=>this.fb());b.b("runtime","enable-device-motion",()=>this.eb());b.b("runtime","add-stylesheet",a=>this.sb(a));b.b("runtime","alert",a=>this.ja(a));b.b("runtime","hide-cordova-splash",()=>this.Cb());const c=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",a=>{const d=a.target;c.has(d.tagName.toLowerCase())||x(d)||a.preventDefault()});const k=b.g;window.addEventListener("selectstart",t);window.addEventListener("gesturehold",t);k.addEventListener("selectstart",
t);k.addEventListener("gesturehold",t);window.addEventListener("touchstart",t,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",t,{passive:!1}),k.addEventListener("pointerdown",t)):k.addEventListener("touchstart",t);this.M=0;window.addEventListener("mousedown",a=>{1===a.button&&a.preventDefault()});window.addEventListener("mousewheel",B,{passive:!1});window.addEventListener("wheel",B,{passive:!1});window.addEventListener("resize",()=>this.Ob());window.addEventListener("fullscreenchange",
()=>this.F());window.addEventListener("webkitfullscreenchange",()=>this.F());window.addEventListener("mozfullscreenchange",()=>this.F());window.addEventListener("fullscreenerror",a=>this.ka(a));window.addEventListener("webkitfullscreenerror",a=>this.ka(a));window.addEventListener("mozfullscreenerror",a=>this.ka(a));b.ea()&&window.addEventListener("focusout",()=>{{const f=document.activeElement;if(f){var a=f.tagName.toLowerCase();var d=new Set("email number password search tel text url".split(" "));
a="textarea"===a?!0:"input"===a?d.has(f.type.toLowerCase()||"text"):x(f)}else a=!1}a||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=a=>this.Pb(a);this.wa=new Set;this.Xb=new WeakSet;this.Vb=!1}tb(){"cordova"===this.f.a?(document.addEventListener("pause",()=>this.oa(!0)),document.addEventListener("resume",()=>this.oa(!1))):document.addEventListener("visibilitychange",()=>this.oa(document.hidden));return{isSuspended:!(!document.hidden&&!D)}}Ca(){window.addEventListener("focus",()=>
this.H("window-focus"));window.addEventListener("blur",()=>{this.H("window-blur",{parentHasFocus:F()});this.M=0});window.addEventListener("focusin",c=>{c=c.target;(z.has(c.tagName.toLowerCase())||x(c))&&this.H("keyboard-blur")});window.addEventListener("keydown",c=>this.Ja("keydown",c));window.addEventListener("keyup",c=>this.Ja("keyup",c));window.addEventListener("dblclick",c=>this.la("dblclick",c,n));window.addEventListener("wheel",c=>this.Fb(c));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",
c=>{this.ia(c);this.G("pointerdown",c)}),this.f.i&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.N=new self.cb(()=>this.mb(),5),this.N.Ra=!0,window.addEventListener("pointerrawupdate",c=>this.Gb(c))):window.addEventListener("pointermove",c=>this.G("pointermove",c)),window.addEventListener("pointerup",c=>this.G("pointerup",c)),window.addEventListener("pointercancel",c=>this.G("pointercancel",c))):(window.addEventListener("mousedown",c=>{this.ia(c);this.ma("pointerdown",c)}),
window.addEventListener("mousemove",c=>this.ma("pointermove",c)),window.addEventListener("mouseup",c=>this.ma("pointerup",c)),window.addEventListener("touchstart",c=>{this.ia(c);this.R("pointerdown",c)}),window.addEventListener("touchmove",c=>this.R("pointermove",c)),window.addEventListener("touchend",c=>this.R("pointerup",c)),window.addEventListener("touchcancel",c=>this.R("pointercancel",c)));const b=()=>this.pa();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);
window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0)}H(b,c){r(this,b,c||null,I)}m(){return this.f.m()}l(){return this.f.l()}Ob(){const b=this.m(),c=this.l();this.H("window-resize",{innerWidth:b,innerHeight:c,devicePixelRatio:window.devicePixelRatio,isFullscreen:g.D()});this.f.ea()&&(-1!==this.A&&clearTimeout(this.A),this.La(b,c,0))}Rb(b,c,k){-1!==this.A&&clearTimeout(this.A);this.A=setTimeout(()=>this.La(b,c,k),48)}La(b,c,k){const a=
this.m(),d=this.l();this.A=-1;a!=b||d!=c?this.H("window-resize",{innerWidth:a,innerHeight:d,devicePixelRatio:window.devicePixelRatio,isFullscreen:g.D()}):10>k&&this.Rb(a,d,k+1)}Mb(b){this.za=b.targetOrientation}Sb(){const b=this.za;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(c=>console.warn("[Construct 3] Failed to lock orientation: ",c));else try{let c=!1;screen.lockOrientation?c=screen.lockOrientation(b):screen.webkitLockOrientation?c=screen.webkitLockOrientation(b):
screen.mozLockOrientation?c=screen.mozLockOrientation(b):screen.msLockOrientation&&(c=screen.msLockOrientation(b));c||console.warn("[Construct 3] Failed to lock orientation")}catch(c){console.warn("[Construct 3] Failed to lock orientation: ",c)}}F(){const b=g.D();b&&"any"!==this.za&&this.Sb();r(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.m(),innerHeight:this.l()})}ka(b){console.warn("[Construct 3] Fullscreen request failed: ",b);r(this,"fullscreenerror",{isFullscreen:g.D(),innerWidth:this.m(),
innerHeight:this.l()})}oa(b){b?this.f.hb():this.f.Na();r(this,"visibilitychange",{hidden:b})}Ja(b,c){"Backspace"===c.key&&t(c);const k=h.get(c.code)||c.code;C(this,b,{code:k,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},n)}Fb(b){r(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,deltaMode:b.deltaMode,timeStamp:b.timeStamp},n)}la(b,c,
k){e(c)||C(this,b,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,timeStamp:c.timeStamp},k)}ma(b,c){if(!e(c)){var k=this.M;"pointerdown"===b&&0!==k?b="pointermove":"pointerup"===b&&0!==c.buttons&&(b="pointermove");C(this,b,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:k,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},
n);this.M=c.buttons;this.la(c.type,c,v)}}G(b,c){if(this.N&&"pointermove"!==b){var k=this.N;k.J||(-1!==k.B&&(self.clearTimeout(k.B),k.B=-1),k.X=Date.now())}k=0;"mouse"===c.pointerType&&(k=this.M);C(this,b,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:k,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,
twist:c.twist||0,timeStamp:c.timeStamp},n);"mouse"===c.pointerType&&(k="mousemove","pointerdown"===b?k="mousedown":"pointerup"===b&&(k="mouseup"),this.la(k,c,v),this.M=c.buttons)}Gb(b){this.ua=b;b=this.N;if(-1===b.B){var c=Date.now(),k=c-b.X,a=b.Ub;k>=a&&b.Ra?(b.X=c,b.J=!0,b.Qa(),b.J=!1):b.B=self.setTimeout(b.Zb,Math.max(a-k,4))}}mb(){this.G("pointermove",this.ua);this.ua=null}R(b,c){for(let k=0,a=c.changedTouches.length;k<a;++k){const d=c.changedTouches[k];C(this,b,{pointerId:d.identifier,pointerType:"touch",
button:0,buttons:0,lastButtons:0,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,width:2*(d.radiusX||d.webkitRadiusX||0),height:2*(d.radiusY||d.webkitRadiusY||0),pressure:d.force||d.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:d.rotationAngle||0,timeStamp:c.timeStamp},n)}}ia(b){window!==window.top&&window.focus();this.Ha(b.target)&&document.activeElement&&!this.Ha(document.activeElement)&&document.activeElement.blur()}Ha(b){return!b||b===document||b===window||b===document.body||
"canvas"===b.tagName.toLowerCase()}fb(){this.Pa||(this.Pa=!0,window.addEventListener("deviceorientation",b=>this.yb(b)),window.addEventListener("deviceorientationabsolute",b=>this.zb(b)))}eb(){this.Oa||(this.Oa=!0,window.addEventListener("devicemotion",b=>this.xb(b)))}yb(b){r(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},n)}zb(b){r(this,
"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},n)}xb(b){let c=null;var k=b.acceleration;k&&(c={x:k.x||0,y:k.y||0,z:k.z||0});k=null;var a=b.accelerationIncludingGravity;a&&(k={x:a.x||0,y:a.y||0,z:a.z||0});a=null;const d=b.rotationRate;d&&(a={alpha:d.alpha||0,beta:d.beta||0,gamma:d.gamma||0});r(this,"devicemotion",{acceleration:c,accelerationIncludingGravity:k,rotationRate:a,interval:b.interval,timeStamp:b.timeStamp},n)}Nb(b){const c=
this.f.g;c.style.width=b.styleWidth+"px";c.style.height=b.styleHeight+"px";c.style.marginLeft=b.marginLeft+"px";c.style.marginTop=b.marginTop+"px";this.Sa&&(c.style.display="",this.Sa=!1)}Db(b){const c=b.url;b=b.filename;const k=document.createElement("a"),a=document.body;k.textContent=b;k.href=c;k.download=b;a.appendChild(k);k.click();a.removeChild(k)}async Ib(b){var c=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);c=c?await createImageBitmap(b,
c):await createImageBitmap(b);return{imageBitmap:c,transferables:[c]}}async Bb(b){return await self.C3_GetSvgImageSize(b.blob)}async sb(b){await J(b.url)}pa(){var b=[...this.wa];this.wa.clear();if(!this.Vb)for(const c of b)(b=c.play())&&b.catch(()=>{this.Xb.has(c)||this.wa.add(c)})}Cb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}wb(b){if(b.show){this.o||(this.o=document.createElement("div"),this.o.id="inspectOutline",document.body.appendChild(this.o));var c=
this.o;c.style.display="";c.style.left=b.left-1+"px";c.style.top=b.top-1+"px";c.style.width=b.width+2+"px";c.style.height=b.height+2+"px";c.textContent=b.name}else this.o&&(this.o.style.display="none")}Jb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Ka(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}rb(b,c){return this.f.bb(this.I,{name:b,params:c})}ja(b){alert(b.message)}Pb(b){"entered-fullscreen"===b?(g.U(!0),this.F()):"exited-fullscreen"===b?(g.U(!1),this.F()):
console.warn("Unknown wrapper message: ",b)}})}"use strict";async function N(g){if(g.Tb)throw Error("already initialised");g.Tb=!0;var e=g.Z.ha("dispatchworker.js");g.sa=await g.Z.da(e,g.c,{name:"DispatchWorker"});e=new MessageChannel;g.ta=e.port1;g.sa.postMessage({type:"_init","in-port":e.port2},[e.port2]);g.xa=await Q(g)}function O(g){return[g.ta,g.xa]}
async function Q(g){const e=g.Ta.length;var h=g.Z.ha("jobworker.js");h=await g.Z.da(h,g.c,{name:"JobWorker"+e});const n=new MessageChannel,v=new MessageChannel;g.sa.postMessage({type:"_addJobWorker",port:n.port1},[n.port1]);h.postMessage({type:"init",number:e,"dispatch-port":n.port2,"output-port":v.port2},[n.port2,v.port2]);g.Ta.push(h);return v.port1}
self.ab=class{constructor(g){this.Z=g;this.c=g.c;this.c="preview"===g.a?this.c+"workers/":this.c+g.$;this.Wb=Math.min(navigator.hardwareConcurrency||2,16);this.sa=null;this.Ta=[];this.xa=this.ta=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.s({jc:!0,kc:"workermain.js",C:["scripts/c3runtime.js"],aa:[],Aa:"",fc:"scripts/",Ba:[],Wa:"html5"}));"use strict";
async function R(g,e){e=e.type;let h=!0;0===e?h=await S():1===e&&(h=await T());r(g,"permission-result",{type:e,result:h})}async function S(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(g){return console.warn("[Touch] Failed to request orientation permission: ",g),!1}}
async function T(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(g){return console.warn("[Touch] Failed to request motion permission: ",g),!1}}self.s.ba(class extends self.P{constructor(g){super(g,"touch");H(this,"request-permission",e=>R(this,e))}});"use strict";
function U(g){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(e=>r(g,"sw-message",e.data))}
function V(g){g=g.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(g).catch(e=>console.warn("[Construct 3] Failed to lock orientation: ",e));else try{let e=!1;screen.lockOrientation?e=screen.lockOrientation(g):screen.webkitLockOrientation?e=screen.webkitLockOrientation(g):screen.mozLockOrientation?e=screen.mozLockOrientation(g):screen.msLockOrientation&&(e=screen.msLockOrientation(g));e||console.warn("[Construct 3] Failed to lock orientation")}catch(e){console.warn("[Construct 3] Failed to lock orientation: ",
e)}}
self.s.ba(class extends self.P{constructor(g){super(g,"browser");this.a="";L(this,[["get-initial-state",e=>{this.a=e.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!==typeof window.is_scirra_arcade}}],["ready-for-sw-messages",()=>U(this)],
["alert",e=>this.ja(e)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",e=>this.na(e)],["vibrate",e=>{navigator.vibrate&&navigator.vibrate(e.pattern)}],["lock-orientation",e=>V(e)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():
screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(e){}}],["navigate",e=>{var h=e.type;if("back"===h)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.history.back();else if("forward"===h)window.history.forward();else if("reload"===h)location.reload();else if("url"===h){h=e.url;const n=e.target;e=e.exportType;self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(h,"_system"):"preview"===
e||"windows-webview2"===e?window.open(h,"_blank"):this.pc||(2===n?window.top.location=h:1===n?window.parent.location=h:window.location=h)}else"new-window"===h&&(h=e.url,e=e.tag,self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(h,"_system"):window.open(h,e))}],["request-fullscreen",e=>{if("windows-webview2"===this.a||"macos-wkwebview"===this.a)self.s.U(!0),this.f.qa({type:"set-fullscreen",fullscreen:!0});else{const h={navigationUI:"auto"};e=e.navUI;1===e?h.navigationUI="hide":
2===e&&(h.navigationUI="show");e=document.documentElement;e.requestFullscreen?e.requestFullscreen(h):e.mozRequestFullScreen?e.mozRequestFullScreen(h):e.msRequestFullscreen?e.msRequestFullscreen(h):e.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):e.webkitRequestFullScreen())}}],["exit-fullscreen",()=>{"windows-webview2"===this.a||"macos-wkwebview"===this.a?(self.s.U(!1),this.f.qa({type:"set-fullscreen",fullscreen:!1})):
document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",e=>{location.hash=e.hash}]]);window.addEventListener("online",()=>{r(this,"online-state",{isOnline:!0})});window.addEventListener("offline",()=>{r(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{r(this,"hashchange",{location:location.toString()})});
document.addEventListener("backbutton",()=>{r(this,"backbutton")})}ja(g){alert(g.message)}na(g){g=g.isFocus;if("nwjs"===this.a){const e="nwjs"===this.a?nw.Window.get():null;g?e.focus():e.blur()}else g?window.focus():window.blur()}});
