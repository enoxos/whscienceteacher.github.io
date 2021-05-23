'use strict';function q(g,f,h,l){g.f.ca(g.H,f,h,l,void 0)}function A(g,f,h,l){g.f.l?q(g,f,h,l):g.f.ob()._OnMessageFromDOM({type:"event",component:g.H,handler:f,dispatchOpts:l||null,data:h,responseId:null})}function F(g,f,h){g.f.a(g.H,f,h)}function K(g,f){for(const [h,l]of f)F(g,h,l)}window.C=class{constructor(g,f){this.f=g;this.H=f}za(){}};
window.cb=class{constructor(g,f){this.Pa=g;this.Tb=f;this.A=-1;this.V=-Infinity;this.Yb=()=>{this.A=-1;this.V=Date.now();this.I=!0;this.Pa();this.I=!1};this.Qa=this.I=!1}};"use strict";function L(g,f){F(g,"get-element",h=>{const l=g.h.get(h.elementId);return f(l,h)})}
window.lc=class extends self.C{constructor(g,f){super(g,f);this.h=new Map;this.pa=!0;K(this,[["create",()=>{throw Error("required override");}],["destroy",h=>{{h=h.elementId;const l=this.h.get(h);this.pa&&l.parentElement.removeChild(l);this.h.delete(h)}}],["set-visible",h=>{this.pa&&(this.h.get(h.elementId).style.display=h.isVisible?"":"none")}],["update-position",h=>{if(this.pa){var l=this.h.get(h.elementId);l.style.left=h.left+"px";l.style.top=h.top+"px";l.style.width=h.width+"px";l.style.height=
h.height+"px";h=h.fontSize;null!==h&&(l.style.fontSize=h+"em")}}],["update-state",h=>{this.h.get(h.elementId);throw Error("required override");}],["focus",h=>this.ma(h)],["set-css-style",h=>{this.h.get(h.elementId).style[h.prop]=h.val}],["set-attribute",h=>{this.h.get(h.elementId).setAttribute(h.name,h.val)}],["remove-attribute",h=>{this.h.get(h.elementId).removeAttribute(h.name)}]]);L(this,h=>h)}ma(g){var f=this.h.get(g.elementId);g.focus?f.focus():f.blur()}};"use strict";
{const g=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent);let f=0;function h(d,a){const c=document.createElement("script");c.async=!1;"module"===a&&(c.type="module");return d.bc?new Promise(e=>{const k="c3_resolve_"+f;++f;self[k]=e;c.textContent=d.ec+`\n\nself["${k}"]();`;document.head.appendChild(c)}):new Promise((e,k)=>{c.onload=e;c.onerror=k;c.src=d;document.head.appendChild(c)})}let l=!1,u=!1;function I(){if(!l){try{new Worker("blob://",{get type(){u=!0}})}catch(d){}l=
!0}return u}let v=new Audio;const J={"audio/webm; codecs=opus":!!v.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!v.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!v.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!v.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!v.canPlayType("audio/mp4"),"audio/mpeg":!!v.canPlayType("audio/mpeg")};v=null;async function x(d){d=await G(d);return(new TextDecoder("utf-8")).decode(d)}function G(d){return new Promise((a,
c)=>{const e=new FileReader;e.onload=k=>a(k.target.result);e.onerror=k=>c(k);e.readAsArrayBuffer(d)})}const B=[];let w=0;window.RealFile=window.File;const y=[],r=new Map,z=new Map;let E=0;const H=[];self.runOnStartup=function(d){if("function"!==typeof d)throw Error("runOnStartup called without a function");H.push(d)};const b=new Set(["cordova","playable-ad","instant-games"]);window.D=class d{constructor(a){this.l=a.hc;this.K=null;this.c="";this.Y=a.dc;this.i=a.Xa;this.N={};this.ta=this.Ua=null;this.U=
[];this.J=this.g=this.wa=null;this.u=-1;this.Xb=()=>this.Hb();this.Ta=[];this.b=a.Va;!this.l||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&("module"!==this.i||I())||(this.l=!1);b.has(this.b)&&this.l&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in WebViews due to crbug.com/923007. Reverting to DOM mode."),this.l=!1);this.W=this.j=null;"html5"!==this.b&&"playable-ad"!==this.b||"file"!==location.protocol.substr(0,4)||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");
this.a("runtime","cordova-fetch-local-file",c=>this.ub(c));this.a("runtime","create-job-worker",()=>this.vb());"cordova"===this.b?document.addEventListener("deviceready",()=>this.Ea(a)):this.Ea(a)}Ba(){return g&&"cordova"===this.b}ba(){return g&&b.has(this.b)||navigator.standalone}async Ea(a){if("playable-ad"===this.b){this.j=self.c3_base64files;this.W={};await this.jb();for(let e=0,k=a.B.length;e<k;++e){var c=a.B[e].toLowerCase();this.W.hasOwnProperty(c)?a.B[e]={bc:!0,ec:this.W[c]}:this.j.hasOwnProperty(c)&&
(a.B[e]=URL.createObjectURL(this.j[c]))}}a.Zb?this.c=a.Zb:(c=location.origin,this.c=("null"===c?"file:///":c)+location.pathname,c=this.c.lastIndexOf("/"),-1!==c&&(this.c=this.c.substr(0,c+1)));a.jc&&(this.N=a.jc);c=new MessageChannel;this.K=c.port1;this.K.onmessage=e=>this._OnMessageFromRuntime(e.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(e=>this.Eb(e));this.J=new self.ab(this);await M(this.J);"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&
window.AndroidFullScreen.immersiveMode();this.l?await this.qb(a,c.port2):await this.pb(a,c.port2)}ea(a){a=this.N.hasOwnProperty(a)?this.N[a]:a.endsWith("/workermain.js")&&this.N.hasOwnProperty("workermain.js")?this.N["workermain.js"]:"playable-ad"===this.b&&this.j.hasOwnProperty(a.toLowerCase())?this.j[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async $(a,c,e){if(a.startsWith("blob:"))return new Worker(a,e);if(this.Ba()&&"file:"===location.protocol)return a=await this.Z(this.Y+
a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),e);a=new URL(a,c);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),e)}return new Worker(a,e)}o(){return Math.max(window.innerWidth,1)}m(){return Math.max(window.innerHeight,1)}Da(a){var c=this.J;return{baseUrl:this.c,windowInnerWidth:this.o(),windowInnerHeight:this.m(),devicePixelRatio:window.devicePixelRatio,
isFullscreen:d.aa(),projectData:a.qc,scriptsType:a.Xa,previewImageBlobs:window.cr_previewImageBlobs||this.j,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,previewProjectFileSWUrls:window.cr_previewProjectFiles,swClientId:window.oc||"",exportType:a.Va,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.pc,jobScheduler:{inputPort:c.ra,outputPort:c.va,maxNumWorkers:c.Vb},supportedAudioFormats:J,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.Y+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||
this.Y+"opus.wasm.wasm",isiOSCordova:this.Ba(),isiOSWebView:this.ba(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async qb(a,c){var e=this.ea(a.ic);this.Ua=await this.$(e,this.c,{type:this.i,name:"Runtime"});this.g=document.createElement("canvas");this.g.style.display="none";e=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;this.Ua.postMessage(Object.assign(this.Da(a),{type:"init-runtime",isInWorker:!0,messagePort:c,canvas:e,workerDependencyScripts:a.ya||
[],engineScripts:a.B,projectScripts:a.O,mainProjectScript:a.Wa,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[c,e,...N(this.J)]);this.U=y.map(k=>new k(this));this.Ca();self.c3_callFunction=(k,m)=>this.wa.rb(k,m);"preview"===this.b&&(self.goToLastErrorScript=()=>this.ca("runtime","go-to-last-error-script"))}async pb(a,c){this.g=document.createElement("canvas");this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.U=y.map(m=>new m(this));this.Ca();var e=a.B.map(m=>
"string"===typeof m?(new URL(m,this.c)).toString():m);Array.isArray(a.ya)&&e.unshift(...a.ya);e=await Promise.all(e.map(m=>this.ga(m,this.i)));await Promise.all(e.map(m=>h(m,this.i)));const k=self.C3_ProjectScriptsStatus;if("module"===this.i){e=a.Wa;const m=a.O;for(let [p,n]of m)if(n||(n=p),p===e)try{n=await this.ga(n,this.i),await h(n,this.i),"preview"!==this.b||k[p]||this.Ka(p,"main script did not run to completion")}catch(t){this.Ka(p,t)}else if("scriptsInEvents.js"===p||p.endsWith("/scriptsInEvents.js"))n=
await this.ga(n,this.i),await h(n,this.i)}else if(a.O&&0<a.O.length)try{if(await Promise.all(a.O.map(m=>h(m[1],this.i))),Object.values(k).some(m=>!m)){self.setTimeout(()=>this.La(k),100);return}}catch(m){console.error("[Preview] Error loading project scripts: ",m);self.setTimeout(()=>this.La(k),100);return}"preview"===this.b&&"object"!==typeof self.kc.mc?(this.G(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):
(a=Object.assign(this.Da(a),{isInWorker:!1,messagePort:c,canvas:this.g,runOnStartupFunctions:H}),this.Ga(),this.ta=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.ta,a))}La(a){this.G();a=`Failed to load project script '${Object.entries(a).filter(c=>!c[1]).map(c=>c[0])[0]}'. Check all your JavaScript code has valid syntax.`;console.error("[Preview] "+a);alert(a)}Ka(a,c){this.G();console.error(`[Preview] Failed to load project main script (${a}): `,c);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Ga(){this.G()}G(){const a=
window.$b;a&&(a.parentElement.removeChild(a),window.$b=null)}async vb(){const a=await O(this.J);return{outputPort:a,transferables:[a]}}ob(){if(this.l)throw Error("not available in worker mode");return this.ta}ca(a,c,e,k,m){this.K.postMessage({type:"event",component:a,handler:c,dispatchOpts:k||null,data:e,responseId:null},m)}bb(a,c){const e=E++,k=new Promise((m,p)=>{z.set(e,{resolve:m,reject:p})});this.K.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:c,responseId:e},
void 0);return k}["_OnMessageFromRuntime"](a){const c=a.type;if("event"===c)return this.Ab(a);if("result"===c)this.Kb(a);else if("runtime-ready"===c)this.Lb();else if("alert-error"===c)this.G(),alert(a.message);else if("creating-runtime"===c)this.Ga();else throw Error(`unknown message '${c}'`);}Ab(a){const c=a.component,e=a.handler,k=a.data,m=a.responseId;if(a=r.get(c))if(a=a.get(e)){var p=null;try{p=a(k)}catch(n){console.error(`Exception in '${c}' handler '${e}':`,n);null!==m&&this.S(m,!1,""+n);
return}if(null===m)return p;p&&p.then?p.then(n=>this.S(m,!0,n)).catch(n=>{console.error(`Rejection from '${c}' handler '${e}':`,n);this.S(m,!1,""+n)}):this.S(m,!0,p)}else console.warn(`[DOM] No handler '${e}' for component '${c}'`);else console.warn(`[DOM] No event handlers for component '${c}'`)}S(a,c,e){let k;e&&e.transferables&&(k=e.transferables);this.K.postMessage({type:"result",responseId:a,isOk:c,result:e},k)}Kb(a){const c=a.responseId,e=a.isOk;a=a.result;const k=z.get(c);e?k.resolve(a):k.reject(a);
z.delete(c)}a(a,c,e){let k=r.get(a);k||(k=new Map,r.set(a,k));if(k.has(c))throw Error(`[DOM] Component '${a}' already has handler '${c}'`);k.set(c,e)}static P(a){if(y.includes(a))throw Error("DOM handler already added");y.push(a)}Ca(){for(const a of this.U)if("runtime"===a.H){this.wa=a;return}throw Error("cannot find runtime DOM handler");}Eb(a){this.ca("debugger","message",a)}Lb(){for(const a of this.U)a.za()}static aa(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}Ma(){-1===
this.u&&this.Ta.length&&(this.u=requestAnimationFrame(this.Xb))}hb(){-1!==this.u&&(cancelAnimationFrame(this.u),this.u=-1)}Hb(){this.u=-1;for(const a of this.Ta)a();this.Ma()}oa(){this.wa.oa()}Za(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}$a(a){return!this.Za(a)}async ga(a,c){return"cordova"===this.b&&"module"===c&&(a.startsWith("file:")||"file:"===location.protocol&&this.$a(a))?(a.startsWith(this.c)&&(a=a.substr(this.c.length)),a=await this.Z(a),URL.createObjectURL(new Blob([a],
{type:"application/javascript"}))):a}async ub(a){const c=a.filename;switch(a.as){case "text":return await this.Ya(c);case "buffer":return await this.Z(c);default:throw Error("unsupported type");}}Aa(a){const c=window.cordova.file.applicationDirectory+"www/"+a.toLowerCase();return new Promise((e,k)=>{window.resolveLocalFileSystemURL(c,m=>{m.file(e,k)},k)})}async Ya(a){a=await this.Aa(a);return await x(a)}da(){if(B.length&&!(8<=w)){w++;var a=B.shift();this.kb(a.filename,a.fc,a.ac)}}Z(a){return new Promise((c,
e)=>{B.push({filename:a,fc:k=>{w--;this.da();c(k)},ac:k=>{w--;this.da();e(k)}});this.da()})}async kb(a,c,e){try{const k=await this.Aa(a),m=await G(k);c(m)}catch(k){e(k)}}async jb(){const a=[];for(const [c,e]of Object.entries(this.j))a.push(this.ib(c,e));await Promise.all(a)}async ib(a,c){if("object"===typeof c)this.j[a]=new Blob([c.str],{type:c.type}),this.W[a]=c.str;else{let e=await this.nb(c);e||(e=this.lb(c));this.j[a]=e}}async nb(a){try{return await (await fetch(a)).blob()}catch(c){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
c),null}}lb(a){a=this.Pb(a);return this.gb(a.data,a.cc)}Pb(a){var c=a.indexOf(",");if(0>c)throw new URIError("expected comma in data: uri");var e=a.substring(c+1);c=a.substring(5,c).split(";");a=c[0]||"";const k=c[2];e="base64"===c[1]||"base64"===k?atob(e):decodeURIComponent(e);return{cc:a,data:e}}gb(a,c){var e=a.length;let k=e>>2,m=new Uint8Array(e),p=new Uint32Array(m.buffer,0,k),n,t;for(t=n=0;n<k;++n)p[n]=a.charCodeAt(t++)|a.charCodeAt(t++)<<8|a.charCodeAt(t++)<<16|a.charCodeAt(t++)<<24;for(e&=
3;e--;)m[t]=a.charCodeAt(t),++t;return new Blob([m],{type:c})}}}"use strict";
{const g=self.D;function f(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const h=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),l={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},u={dispatchUserScriptEvent:!0},I={dispatchRuntimeEvent:!0};function v(b){return new Promise((d,a)=>{const c=document.createElement("link");c.onload=()=>d(c);c.onerror=e=>a(e);c.rel=
"stylesheet";c.href=b;document.head.appendChild(c)})}function J(b){return new Promise((d,a)=>{const c=new Image;c.onload=()=>d(c);c.onerror=e=>a(e);c.src=b})}async function x(b){b=URL.createObjectURL(b);try{return await J(b)}finally{URL.revokeObjectURL(b)}}function G(b){return new Promise((d,a)=>{let c=new FileReader;c.onload=e=>d(e.target.result);c.onerror=e=>a(e);c.readAsText(b)})}async function B(b,d,a){if(!/firefox/i.test(navigator.userAgent))return await x(b);var c=await G(b);c=(new DOMParser).parseFromString(c,
"image/svg+xml");const e=c.documentElement;if(e.hasAttribute("width")&&e.hasAttribute("height")){const k=e.getAttribute("width"),m=e.getAttribute("height");if(!k.includes("%")&&!m.includes("%"))return await x(b)}e.setAttribute("width",d+"px");e.setAttribute("height",a+"px");c=(new XMLSerializer).serializeToString(c);b=new Blob([c],{type:"image/svg+xml"});return await x(b)}function w(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const y=new Set(["canvas",
"body","html"]);function r(b){y.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function z(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await x(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const d=b.getBoundingClientRect();document.body.removeChild(b);return[d.width,d.height]}};self.C3_RasterSvgImageBlob=async function(b,
d,a,c,e){b=await B(b,d,a);const k=document.createElement("canvas");k.width=c;k.height=e;k.getContext("2d").drawImage(b,0,0,d,a);return k};let E=!1;document.addEventListener("pause",()=>E=!0);document.addEventListener("resume",()=>E=!1);function H(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}g.P(class extends self.C{constructor(b){super(b,"runtime");this.Ra=!0;this.v=-1;this.xa="any";this.Na=this.Oa=!1;this.sa=this.M=this.s=null;b.a("canvas","update-size",c=>this.Nb(c));
b.a("runtime","invoke-download",c=>this.Db(c));b.a("runtime","raster-svg-image",c=>this.Ib(c));b.a("runtime","get-svg-image-size",c=>this.Bb(c));b.a("runtime","set-target-orientation",c=>this.Mb(c));b.a("runtime","register-sw",()=>this.Jb());b.a("runtime","post-to-debugger",c=>this.Ia(c));b.a("runtime","go-to-script",c=>this.Ia(c));b.a("runtime","before-start-ticking",()=>this.tb());b.a("runtime","debug-highlight",c=>this.wb(c));b.a("runtime","enable-device-orientation",()=>this.fb());b.a("runtime",
"enable-device-motion",()=>this.eb());b.a("runtime","add-stylesheet",c=>this.sb(c));b.a("runtime","alert",c=>this.ha(c));b.a("runtime","hide-cordova-splash",()=>this.Cb());const d=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",c=>{const e=c.target;d.has(e.tagName.toLowerCase())||w(e)||c.preventDefault()});const a=b.g;window.addEventListener("selectstart",r);window.addEventListener("gesturehold",r);a.addEventListener("selectstart",r);a.addEventListener("gesturehold",
r);window.addEventListener("touchstart",r,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",r,{passive:!1}),a.addEventListener("pointerdown",r)):a.addEventListener("touchstart",r);this.L=0;window.addEventListener("mousedown",c=>{1===c.button&&c.preventDefault()});window.addEventListener("mousewheel",z,{passive:!1});window.addEventListener("wheel",z,{passive:!1});window.addEventListener("resize",()=>this.Ob());window.addEventListener("fullscreenchange",()=>this.ia());
window.addEventListener("webkitfullscreenchange",()=>this.ia());window.addEventListener("mozfullscreenchange",()=>this.ia());window.addEventListener("fullscreenerror",c=>this.ja(c));window.addEventListener("webkitfullscreenerror",c=>this.ja(c));window.addEventListener("mozfullscreenerror",c=>this.ja(c));b.ba()&&window.addEventListener("focusout",()=>{{const k=document.activeElement;if(k){var c=k.tagName.toLowerCase();var e=new Set("email number password search tel text url".split(" "));c="textarea"===
c?!0:"input"===c?e.has(k.type.toLowerCase()||"text"):w(k)}else c=!1}c||(document.scrollingElement.scrollTop=0)});this.ua=new Set;this.Wb=new WeakSet;this.Ub=!1}tb(){"cordova"===this.f.b?(document.addEventListener("pause",()=>this.na(!0)),document.addEventListener("resume",()=>this.na(!1))):document.addEventListener("visibilitychange",()=>this.na(document.hidden));return{isSuspended:!(!document.hidden&&!E)}}za(){window.addEventListener("focus",()=>this.T("window-focus"));window.addEventListener("blur",
()=>{this.T("window-blur",{parentHasFocus:H()});this.L=0});window.addEventListener("keydown",d=>this.Ha("keydown",d));window.addEventListener("keyup",d=>this.Ha("keyup",d));window.addEventListener("dblclick",d=>this.ka("dblclick",d,l));window.addEventListener("wheel",d=>this.Fb(d));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",d=>{this.fa(d);this.F("pointerdown",d)}),this.f.l&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.M=new self.cb(()=>this.mb(),
5),this.M.Qa=!0,window.addEventListener("pointerrawupdate",d=>this.Gb(d))):window.addEventListener("pointermove",d=>this.F("pointermove",d)),window.addEventListener("pointerup",d=>this.F("pointerup",d)),window.addEventListener("pointercancel",d=>this.F("pointercancel",d))):(window.addEventListener("mousedown",d=>{this.fa(d);this.la("pointerdown",d)}),window.addEventListener("mousemove",d=>this.la("pointermove",d)),window.addEventListener("mouseup",d=>this.la("pointerup",d)),window.addEventListener("touchstart",
d=>{this.fa(d);this.R("pointerdown",d)}),window.addEventListener("touchmove",d=>this.R("pointermove",d)),window.addEventListener("touchend",d=>this.R("pointerup",d)),window.addEventListener("touchcancel",d=>this.R("pointercancel",d)));const b=()=>this.oa();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0)}T(b,d){q(this,b,d||null,I)}o(){return this.f.o()}m(){return this.f.m()}Ob(){const b=
this.o(),d=this.m();this.T("window-resize",{innerWidth:b,innerHeight:d,devicePixelRatio:window.devicePixelRatio});this.f.ba()&&(-1!==this.v&&clearTimeout(this.v),this.Ja(b,d,0))}Qb(b,d,a){-1!==this.v&&clearTimeout(this.v);this.v=setTimeout(()=>this.Ja(b,d,a),48)}Ja(b,d,a){const c=this.o(),e=this.m();this.v=-1;c!=b||e!=d?this.T("window-resize",{innerWidth:c,innerHeight:e,devicePixelRatio:window.devicePixelRatio}):10>a&&this.Qb(c,e,a+1)}Mb(b){this.xa=b.targetOrientation}Rb(){const b=this.xa;if(screen.orientation&&
screen.orientation.lock)screen.orientation.lock(b).catch(d=>console.warn("[Construct 3] Failed to lock orientation: ",d));else try{let d=!1;screen.lockOrientation?d=screen.lockOrientation(b):screen.webkitLockOrientation?d=screen.webkitLockOrientation(b):screen.mozLockOrientation?d=screen.mozLockOrientation(b):screen.msLockOrientation&&(d=screen.msLockOrientation(b));d||console.warn("[Construct 3] Failed to lock orientation")}catch(d){console.warn("[Construct 3] Failed to lock orientation: ",d)}}ia(){const b=
g.aa();b&&"any"!==this.xa&&this.Rb();q(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.o(),innerHeight:this.m()})}ja(b){console.warn("[Construct 3] Fullscreen request failed: ",b);q(this,"fullscreenerror",{isFullscreen:g.aa(),innerWidth:this.o(),innerHeight:this.m()})}na(b){b?this.f.hb():this.f.Ma();q(this,"visibilitychange",{hidden:b})}Ha(b,d){"Backspace"===d.key&&r(d);const a=h.get(d.code)||d.code;A(this,b,{code:a,key:d.key,which:d.which,repeat:d.repeat,altKey:d.altKey,ctrlKey:d.ctrlKey,
metaKey:d.metaKey,shiftKey:d.shiftKey,timeStamp:d.timeStamp},l)}Fb(b){q(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,deltaMode:b.deltaMode,timeStamp:b.timeStamp},l)}ka(b,d,a){f(d)||A(this,b,{button:d.button,buttons:d.buttons,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,timeStamp:d.timeStamp},a)}la(b,d){if(!f(d)){var a=this.L;"pointerdown"===b&&0!==a?b="pointermove":"pointerup"===b&&0!==d.buttons&&(b=
"pointermove");A(this,b,{pointerId:1,pointerType:"mouse",button:d.button,buttons:d.buttons,lastButtons:a,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:d.timeStamp},l);this.L=d.buttons;this.ka(d.type,d,u)}}F(b,d){if(this.M&&"pointermove"!==b){var a=this.M;a.I||(-1!==a.A&&(self.clearTimeout(a.A),a.A=-1),a.V=Date.now())}a=0;"mouse"===d.pointerType&&(a=this.L);A(this,b,{pointerId:d.pointerId,pointerType:d.pointerType,
button:d.button,buttons:d.buttons,lastButtons:a,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,width:d.width||0,height:d.height||0,pressure:d.pressure||0,tangentialPressure:d.tangentialPressure||0,tiltX:d.tiltX||0,tiltY:d.tiltY||0,twist:d.twist||0,timeStamp:d.timeStamp},l);"mouse"===d.pointerType&&(a="mousemove","pointerdown"===b?a="mousedown":"pointerup"===b&&(a="mouseup"),this.ka(a,d,u),this.L=d.buttons)}Gb(b){this.sa=b;b=this.M;if(-1===b.A){var d=Date.now(),a=d-b.V,c=b.Tb;a>=c&&
b.Qa?(b.V=d,b.I=!0,b.Pa(),b.I=!1):b.A=self.setTimeout(b.Yb,Math.max(c-a,4))}}mb(){this.F("pointermove",this.sa);this.sa=null}R(b,d){for(let a=0,c=d.changedTouches.length;a<c;++a){const e=d.changedTouches[a];A(this,b,{pointerId:e.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,width:2*(e.radiusX||e.webkitRadiusX||0),height:2*(e.radiusY||e.webkitRadiusY||0),pressure:e.force||e.webkitForce||0,tangentialPressure:0,tiltX:0,
tiltY:0,twist:e.rotationAngle||0,timeStamp:d.timeStamp},l)}}fa(b){window!==window.top&&window.focus();this.Fa(b.target)&&document.activeElement&&!this.Fa(document.activeElement)&&document.activeElement.blur()}Fa(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}fb(){this.Oa||(this.Oa=!0,window.addEventListener("deviceorientation",b=>this.yb(b)),window.addEventListener("deviceorientationabsolute",b=>this.zb(b)))}eb(){this.Na||(this.Na=!0,window.addEventListener("devicemotion",
b=>this.xb(b)))}yb(b){q(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},l)}zb(b){q(this,"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},l)}xb(b){let d=null;var a=b.acceleration;a&&(d={x:a.x||0,y:a.y||0,z:a.z||0});a=null;var c=b.accelerationIncludingGravity;c&&(a={x:c.x||
0,y:c.y||0,z:c.z||0});c=null;const e=b.rotationRate;e&&(c={alpha:e.alpha||0,beta:e.beta||0,gamma:e.gamma||0});q(this,"devicemotion",{acceleration:d,accelerationIncludingGravity:a,rotationRate:c,interval:b.interval,timeStamp:b.timeStamp},l)}Nb(b){const d=this.f.g;d.style.width=b.styleWidth+"px";d.style.height=b.styleHeight+"px";d.style.marginLeft=b.marginLeft+"px";d.style.marginTop=b.marginTop+"px";this.Ra&&(d.style.display="",this.Ra=!1)}Db(b){const d=b.url;b=b.filename;const a=document.createElement("a"),
c=document.body;a.textContent=b;a.href=d;a.download=b;c.appendChild(a);a.click();c.removeChild(a)}async Ib(b){var d=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);d=d?await createImageBitmap(b,d):await createImageBitmap(b);return{imageBitmap:d,transferables:[d]}}async Bb(b){return await self.C3_GetSvgImageSize(b.blob)}async sb(b){await v(b.url)}oa(){var b=[...this.ua];this.ua.clear();if(!this.Ub)for(const d of b)(b=d.play())&&
b.catch(()=>{this.Wb.has(d)||this.ua.add(d)})}Cb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}wb(b){if(b.show){this.s||(this.s=document.createElement("div"),this.s.id="inspectOutline",document.body.appendChild(this.s));var d=this.s;d.style.display="";d.style.left=b.left-1+"px";d.style.top=b.top-1+"px";d.style.width=b.width+2+"px";d.style.height=b.height+2+"px";d.textContent=b.name}else this.s&&(this.s.style.display="none")}Jb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Ia(b){window.c3_postToMessagePort&&
(b.from="runtime",window.c3_postToMessagePort(b))}rb(b,d){return this.f.bb(this.H,{name:b,params:d})}ha(b){alert(b.message)}})}"use strict";async function M(g){if(g.Sb)throw Error("already initialised");g.Sb=!0;var f=g.X.ea("dispatchworker.js");g.qa=await g.X.$(f,g.c,{name:"DispatchWorker"});f=new MessageChannel;g.ra=f.port1;g.qa.postMessage({type:"_init","in-port":f.port2},[f.port2]);g.va=await O(g)}function N(g){return[g.ra,g.va]}
async function O(g){const f=g.Sa.length;var h=g.X.ea("jobworker.js");h=await g.X.$(h,g.c,{name:"JobWorker"+f});const l=new MessageChannel,u=new MessageChannel;g.qa.postMessage({type:"_addJobWorker",port:l.port1},[l.port1]);h.postMessage({type:"init",number:f,"dispatch-port":l.port2,"output-port":u.port2},[l.port2,u.port2]);g.Sa.push(h);return u.port1}
self.ab=class{constructor(g){this.X=g;this.c=g.c;this.c="preview"===g.b?this.c+"c3/workers/":this.c+g.Y;this.Vb=Math.min(navigator.hardwareConcurrency||2,16);this.qa=null;this.Sa=[];this.va=this.ra=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.D({hc:!0,ic:"workermain.js",B:["scripts/c3runtime.js"],O:[],Wa:"",Xa:"module",dc:"scripts/",ya:[],Va:"html5"}));"use strict";
async function P(g,f){f=f.type;let h=!0;0===f?h=await Q():1===f&&(h=await R());q(g,"permission-result",{type:f,result:h})}async function Q(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(g){return console.warn("[Touch] Failed to request orientation permission: ",g),!1}}
async function R(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(g){return console.warn("[Touch] Failed to request motion permission: ",g),!1}}self.D.P(class extends self.C{constructor(g){super(g,"touch");F(this,"request-permission",f=>P(this,f))}});"use strict";
function S(g){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(f=>q(g,"sw-message",f.data))}
function T(g){g=g.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(g).catch(f=>console.warn("[Construct 3] Failed to lock orientation: ",f));else try{let f=!1;screen.lockOrientation?f=screen.lockOrientation(g):screen.webkitLockOrientation?f=screen.webkitLockOrientation(g):screen.mozLockOrientation?f=screen.mozLockOrientation(g):screen.msLockOrientation&&(f=screen.msLockOrientation(g));f||console.warn("[Construct 3] Failed to lock orientation")}catch(f){console.warn("[Construct 3] Failed to lock orientation: ",
f)}}
self.D.P(class extends self.C{constructor(g){super(g,"browser");this.b="";K(this,[["get-initial-state",f=>{this.b=f.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isScirraArcade:"undefined"!==typeof window.is_scirra_arcade}}],["ready-for-sw-messages",()=>S(this)],
["alert",f=>this.ha(f)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",f=>this.ma(f)],["vibrate",f=>{navigator.vibrate&&navigator.vibrate(f.pattern)}],["lock-orientation",f=>T(f)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():
screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(f){}}],["navigate",f=>{var h=f.type;if("back"===h)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.back();else if("forward"===h)window.forward();else if("home"===h)window.home();else if("reload"===h)location.reload();else if("url"===h){h=f.url;var l=f.target;f=f.exportType;"windows-uwp"===f&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(h)):
self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(h,"_system"):"preview"===f||"windows-webview2"===f?window.open(h,"_blank"):this.nc||(2===l?window.top.location=h:1===l?window.parent.location=h:window.location=h)}else"new-window"===h&&(h=f.url,l=f.tag,"windows-uwp"===f.exportType&&"undefined"!==typeof Windows?Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(h)):self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(h,"_system"):window.open(h,l))}],
["request-fullscreen",f=>{{const h={navigationUI:"auto"};f=f.navUI;1===f?h.navigationUI="hide":2===f&&(h.navigationUI="show");f=document.documentElement;f.requestFullscreen?f.requestFullscreen(h):f.mozRequestFullScreen?f.mozRequestFullScreen(h):f.msRequestFullscreen?f.msRequestFullscreen(h):f.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?f.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):f.webkitRequestFullScreen())}}],["exit-fullscreen",()=>{document.exitFullscreen?
document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",f=>{location.hash=f.hash}]]);window.addEventListener("online",()=>{q(this,"online-state",{isOnline:!0})});window.addEventListener("offline",()=>{q(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{q(this,"hashchange",{location:location.toString()})});
document.addEventListener("backbutton",()=>{q(this,"backbutton")});"undefined"!==typeof Windows&&Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested",f=>{f.handled=!0;q(this,"backbutton")})}ha(g){alert(g.message)}ma(g){g=g.isFocus;if("nwjs"===this.b){const f="nwjs"===this.b?nw.Window.get():null;g?f.focus():f.blur()}else g?window.focus():window.blur()}});"use strict";
self.D.P(class extends self.C{constructor(g){super(g,"mouse");F(this,"cursor",f=>{document.documentElement.style.cursor=f})}});
