function k(b,a,c,d){b.i.na(b.P,a,c,d,void 0)}function m(b,a,c,d){b.i.u?k(b,a,c,d):b.i.tb()._OnMessageFromDOM({type:"event",component:b.P,handler:a,dispatchOpts:d||null,data:c,responseId:null})}function n(b,a,c){b.i.h(b.P,a,c)}function p(b,a){for(const [c,d]of a)n(b,c,d)}window.M=class{constructor(b,a){this.i=b;this.P=a}Ha(){}};window.kb=class{constructor(b){this.Sa=b;this.Fb=5;this.K=-1;this.ca=-Infinity;this.Kb=()=>{this.K=-1;this.ca=Date.now();this.R=!0;this.Sa();this.R=!1};this.Ta=this.R=!1}};
"use strict";function aa(b,a){n(b,"get-element",c=>{const d=b.s.get(c.elementId);return a(d,c)})}
window.Zb=class extends self.M{constructor(b,a){super(b,a);this.s=new Map;this.va=!0;p(this,[["create",()=>{throw Error("required override");}],["destroy",c=>{c=c.elementId;const d=this.s.get(c);this.va&&d.parentElement.removeChild(d);this.s.delete(c)}],["set-visible",c=>{this.va&&(this.s.get(c.elementId).style.display=c.isVisible?"":"none")}],["update-position",c=>{if(this.va){var d=this.s.get(c.elementId);d.style.left=c.left+"px";d.style.top=c.top+"px";d.style.width=c.width+"px";d.style.height=
c.height+"px";c=c.fontSize;null!==c&&(d.style.fontSize=c+"em")}}],["update-state",c=>{this.s.get(c.elementId);throw Error("required override");}],["focus",c=>this.sa(c)],["set-css-style",c=>{this.s.get(c.elementId).style[c.prop]=c.val}],["set-attribute",c=>{this.s.get(c.elementId).setAttribute(c.name,c.val)}],["remove-attribute",c=>{this.s.get(c.elementId).removeAttribute(c.name)}]]);aa(this,c=>c)}sa(b){var a=this.s.get(b.elementId);b.focus?a.focus():a.blur()}};"use strict";
const q=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),t=/android/i.test(navigator.userAgent);let u=0;function v(b){const a=document.createElement("script");a.async=!1;a.type="module";return b.Pb?new Promise(c=>{const d="c3_resolve_"+u;++u;self[d]=c;a.textContent=b.Tb+`\n\nself["${d}"]();`;document.head.appendChild(a)}):new Promise((c,d)=>{a.onload=c;a.onerror=d;a.src=b;document.head.appendChild(a)})}let w=!1,x=!1;
function ba(){if(!w){try{new Worker("blob://",{get type(){x=!0}})}catch(b){}w=!0}return x}let y=new Audio;const ca={"audio/webm; codecs=opus":!!y.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!y.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!y.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!y.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!y.canPlayType("audio/mp4"),"audio/mpeg":!!y.canPlayType("audio/mpeg")};y=null;
async function da(b){b=await z(b);return(new TextDecoder("utf-8")).decode(b)}function z(b){return new Promise((a,c)=>{const d=new FileReader;d.onload=e=>a(e.target.result);d.onerror=e=>c(e);d.readAsArrayBuffer(b)})}const A=[];let B=0;window.RealFile=window.File;const D=[],E=new Map,F=new Map;let ea=0;const G=[];self.runOnStartup=function(b){if("function"!==typeof b)throw Error("runOnStartup called without a function");G.push(b)};const H=new Set(["cordova","playable-ad","instant-games"]);let fa=!1;
window.C=class b{constructor(a){this.u=a.Vb;this.T=null;this.o="";this.ia=a.Sb;this.X={};this.Aa=this.ab=null;this.ba=[];this.j=this.Da=null;this.Wa=!1;this.S=null;this.I=-1;this.Jb=()=>this.Ab();this.$a=[];this.g=a.bb;this.za="file"===location.protocol.substr(0,4);!this.u||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&ba()||(this.u=!1);if("playable-ad"===this.g||"instant-games"===this.g)this.u=!1;if("cordova"===this.g&&this.u)if(t){const c=/Chrome\/(\d+)/i.exec(navigator.userAgent);
c&&90<=parseInt(c[1],10)||(this.u=!1)}else this.u=!1;this.ea=this.A=null;"html5"!==this.g||window.isSecureContext||console.warn("[Construct] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.h("runtime","cordova-fetch-local-file",c=>this.wb(c));this.h("runtime","create-job-worker",()=>this.xb());"cordova"===this.g?document.addEventListener("deviceready",()=>this.Ma(a)):this.Ma(a)}hb(){return q&&
"cordova"===this.g}ma(){const a=navigator.userAgent;return q&&H.has(this.g)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}fb(){return t}Ja(){return t&&H.has(this.g)}async Ma(a){"macos-wkwebview"===this.g&&this.ua({type:"ready"});if("playable-ad"===this.g){this.A=self.c3_base64files;this.ea={};await this.pb();for(let d=0,e=a.L.length;d<e;++d){var c=a.L[d].toLowerCase();this.ea.hasOwnProperty(c)?a.L[d]={Pb:!0,Tb:this.ea[c]}:this.A.hasOwnProperty(c)&&(a.L[d]=URL.createObjectURL(this.A[c]))}}a.Rb?
this.o=a.Rb:(c=location.origin,this.o=("null"===c?"file:///":c)+location.pathname,c=this.o.lastIndexOf("/"),-1!==c&&(this.o=this.o.substr(0,c+1)));a.Xb&&(this.X=a.Xb);c=new MessageChannel;this.T=c.port1;this.T.onmessage=d=>this._OnMessageFromRuntime(d.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(d=>this.zb(d));this.S=new self.ib(this);await ha(this.S);"object"===typeof window.StatusBar&&window.StatusBar.hide();if("object"===typeof window.AndroidFullScreen)try{await new Promise((d,
e)=>{window.AndroidFullScreen.immersiveMode(d,e)})}catch(d){console.error("Failed to enter Android immersive mode: ",d)}this.u?await this.vb(a,c.port2):await this.ub(a,c.port2)}pa(a){a=this.X.hasOwnProperty(a)?this.X[a]:a.endsWith("/workermain.js")&&this.X.hasOwnProperty("workermain.js")?this.X["workermain.js"]:"playable-ad"===this.g&&this.A.hasOwnProperty(a.toLowerCase())?this.A[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async la(a,c,d){if(a.startsWith("blob:"))return new Worker(a,
d);if("cordova"===this.g&&this.za)return a=await this.ka(d.Ob?a:this.ia+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),d);a=new URL(a,c);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),d)}return new Worker(a,d)}B(){return Math.max(window.innerWidth,1)}v(){return Math.max(window.innerHeight,1)}La(a){var c=this.o,d=location.href,e=this.B(),f=this.v(),g=window.devicePixelRatio,
h=b.N(),l=a.dc,r=window.cr_previewImageBlobs||this.A,ra=window.cr_previewProjectFileBlobs,sa=window.cr_previewProjectFiles,ta=window.bc||"";a=a.bb;var ua=(new URLSearchParams(self.location.search)).has("debug"),I=this.S;return{runtimeBaseUrl:c,previewUrl:d,windowInnerWidth:e,windowInnerHeight:f,devicePixelRatio:g,isFullscreen:h,projectData:l,previewImageBlobs:r,previewProjectFileBlobs:ra,previewProjectFileSWUrls:sa,swClientId:ta,exportType:a,isDebug:ua,ife:!!self.cc,jobScheduler:{inputPort:I.ya,outputPort:I.Ca,
maxNumWorkers:I.Hb},supportedAudioFormats:ca,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.ia+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.ia+"opus.wasm.wasm",isFileProtocol:this.za,isiOSCordova:this.hb(),isiOSWebView:this.ma(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async vb(a,c){var d=this.pa(a.Wb);this.ab=await this.la(d,this.o,{type:"module",name:"Runtime",Ob:!0});this.j=document.createElement("canvas");this.j.style.display="none";d=this.j.transferControlToOffscreen();
document.body.appendChild(this.j);window.c3canvas=this.j;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();let e=a.Ga||[],f=a.L;e=await Promise.all(e.map(g=>this.G(g)));f=await Promise.all(f.map(g=>this.G(g)));if("cordova"===this.g)for(let g=0,h=a.ja.length;g<h;++g){const l=a.ja[g],r=l[0];if(r===a.Fa||"scriptsInEvents.js"===r||r.endsWith("/scriptsInEvents.js"))l[1]=await this.G(r)}this.ab.postMessage(Object.assign(this.La(a),{type:"init-runtime",isInWorker:!0,messagePort:c,canvas:d,
workerDependencyScripts:e,engineScripts:f,projectScripts:a.ja,mainProjectScript:a.Fa,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[c,d,...ia(this.S)]);this.ba=D.map(g=>new g(this));this.Ka();self.c3_callFunction=(g,h)=>{var l=this.Da;return l.i.jb(l.P,{name:g,params:h})};"preview"===this.g&&(self.goToLastErrorScript=()=>this.na("runtime","go-to-last-error-script"))}async ub(a,c){this.j=document.createElement("canvas");this.j.style.display="none";document.body.appendChild(this.j);window.c3canvas=
this.j;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();this.ba=D.map(g=>new g(this));this.Ka();var d=a.L.map(g=>"string"===typeof g?(new URL(g,this.o)).toString():g);Array.isArray(a.Ga)&&d.unshift(...a.Ga);d=await Promise.all(d.map(g=>this.G(g)));await Promise.all(d.map(g=>v(g)));d=self.C3_ProjectScriptsStatus;const e=a.Fa,f=a.ja;for(let [g,h]of f)if(h||(h=g),g===e)try{h=await this.G(h),await v(h),"preview"!==this.g||d[g]||this.Oa(g,"main script did not run to completion")}catch(l){this.Oa(g,
l)}else if("scriptsInEvents.js"===g||g.endsWith("/scriptsInEvents.js"))h=await this.G(h),await v(h);"preview"===this.g&&"object"!==typeof self.Yb.$b?(this.$(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.La(a),{isInWorker:!1,messagePort:c,canvas:this.j,runOnStartupFunctions:G}),this.Na(),this.Aa=
self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.Aa,a))}Oa(a,c){this.$();console.error(`[Preview] Failed to load project main script (${a}): `,c);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Na(){this.$()}$(){const a=window.Mb;a&&(a.parentElement.removeChild(a),window.Mb=null)}async xb(){const a=await ja(this.S);return{outputPort:a,transferables:[a]}}tb(){if(this.u)throw Error("not available in worker mode");
return this.Aa}na(a,c,d,e,f){this.T.postMessage({type:"event",component:a,handler:c,dispatchOpts:e||null,data:d,responseId:null},f)}jb(a,c){const d=ea++,e=new Promise((f,g)=>{F.set(d,{resolve:f,reject:g})});this.T.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:c,responseId:d},void 0);return e}_OnMessageFromRuntime(a){const c=a.type;if("event"===c)return this.yb(a);if("result"===c)this.Bb(a);else if("runtime-ready"===c)this.Cb();else if("alert-error"===c)this.$(),
alert(a.message);else if("creating-runtime"===c)this.Na();else throw Error(`unknown message '${c}'`);}yb(a){const c=a.component,d=a.handler,e=a.data,f=a.responseId;if(a=E.get(c))if(a=a.get(d)){var g=null;try{g=a(e)}catch(h){console.error(`Exception in '${c}' handler '${d}':`,h);null!==f&&this.Z(f,!1,""+h);return}if(null===f)return g;g&&g.then?g.then(h=>this.Z(f,!0,h)).catch(h=>{console.error(`Rejection from '${c}' handler '${d}':`,h);this.Z(f,!1,""+h)}):this.Z(f,!0,g)}else console.warn(`[DOM] No handler '${d}' for component '${c}'`);
else console.warn(`[DOM] No event handlers for component '${c}'`)}Z(a,c,d){let e;d&&d.transferables&&(e=d.transferables);this.T.postMessage({type:"result",responseId:a,isOk:c,result:d},e)}Bb(a){const c=a.responseId,d=a.isOk;a=a.result;const e=F.get(c);d?e.resolve(a):e.reject(a);F.delete(c)}h(a,c,d){let e=E.get(a);e||(e=new Map,E.set(a,e));if(e.has(c))throw Error(`[DOM] Component '${a}' already has handler '${c}'`);e.set(c,d)}static Y(a){if(D.includes(a))throw Error("DOM handler already added");D.push(a)}Ka(){for(const a of this.ba)if("runtime"===
a.P){this.Da=a;return}throw Error("cannot find runtime DOM handler");}zb(a){this.na("debugger","message",a)}Cb(){for(const a of this.ba)a.Ha()}static N(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||fa)}static aa(a){fa=!!a}Pa(){-1===this.I&&this.$a.length&&(this.I=requestAnimationFrame(this.Jb))}nb(){-1!==this.I&&(cancelAnimationFrame(this.I),this.I=-1)}Ab(){this.I=-1;for(const a of this.$a)a();this.Pa()}ta(){this.Da.ta()}lb(){this.Wa=!0}eb(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||
"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}gb(a){return!this.eb(a)}async G(a){return"cordova"===this.g&&(a.startsWith("file:")||this.za&&this.gb(a))?(a.startsWith(this.o)&&(a=a.substr(this.o.length)),a=await this.ka(a),URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async wb(a){const c=a.filename;switch(a.as){case "text":return await this.cb(c);case "buffer":return await this.ka(c);default:throw Error("unsupported type");}}Ia(a){const c=window.cordova.file.applicationDirectory+
"www/"+a.toLowerCase();return new Promise((d,e)=>{window.resolveLocalFileSystemURL(c,f=>{f.file(d,e)},e)})}async cb(a){a=await this.Ia(a);return await da(a)}oa(){if(A.length&&!(8<=B)){B++;var a=A.shift();this.qb(a.filename,a.Ub,a.Nb)}}ka(a){return new Promise((c,d)=>{A.push({filename:a,Ub:e=>{B--;this.oa();c(e)},Nb:e=>{B--;this.oa();d(e)}});this.oa()})}async qb(a,c,d){try{const e=await this.Ia(a),f=await z(e);c(f)}catch(e){d(e)}}ua(a){if("windows-webview2"===this.g)window.chrome.webview.postMessage(JSON.stringify(a));
else if("macos-wkwebview"===this.g)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async pb(){const a=[];for(const [c,d]of Object.entries(this.A))a.push(this.ob(c,d));await Promise.all(a)}async ob(a,c){if("object"===typeof c)this.A[a]=new Blob([c.str],{type:c.type}),this.ea[a]=c.str;else{let d=await this.sb(c);d||(d=this.rb(c));this.A[a]=d}}async sb(a){try{return await (await fetch(a)).blob()}catch(c){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
c),null}}rb(a){a=this.Db(a);return this.mb(a.data,a.Qb)}Db(a){var c=a.indexOf(",");if(0>c)throw new URIError("expected comma in data: uri");var d=a.substring(c+1);c=a.substring(5,c).split(";");a=c[0]||"";const e=c[2];d="base64"===c[1]||"base64"===e?atob(d):decodeURIComponent(d);return{Qb:a,data:d}}mb(a,c){var d=a.length;let e=d>>2,f=new Uint8Array(d),g=new Uint32Array(f.buffer,0,e),h,l;for(l=h=0;h<e;++h)g[h]=a.charCodeAt(l++)|a.charCodeAt(l++)<<8|a.charCodeAt(l++)<<16|a.charCodeAt(l++)<<24;for(d&=
3;d--;)f[l]=a.charCodeAt(l),++l;return new Blob([f],{type:c})}};"use strict";const J=self.C;function ka(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const la=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),K={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},ma={dispatchUserScriptEvent:!0},L={dispatchRuntimeEvent:!0};
function na(b){return new Promise((a,c)=>{const d=document.createElement("link");d.onload=()=>a(d);d.onerror=e=>c(e);d.rel="stylesheet";d.href=b;document.head.appendChild(d)})}function oa(b){return new Promise((a,c)=>{const d=new Image;d.onload=()=>a(d);d.onerror=e=>c(e);d.src=b})}async function N(b){b=URL.createObjectURL(b);try{return await oa(b)}finally{URL.revokeObjectURL(b)}}
function pa(b){return new Promise((a,c)=>{let d=new FileReader;d.onload=e=>a(e.target.result);d.onerror=e=>c(e);d.readAsText(b)})}
async function qa(b,a,c){if(!/firefox/i.test(navigator.userAgent))return await N(b);var d=await pa(b);d=(new DOMParser).parseFromString(d,"image/svg+xml");const e=d.documentElement;if(e.hasAttribute("width")&&e.hasAttribute("height")){const f=e.getAttribute("width"),g=e.getAttribute("height");if(!f.includes("%")&&!g.includes("%"))return await N(b)}e.setAttribute("width",a+"px");e.setAttribute("height",c+"px");d=(new XMLSerializer).serializeToString(d);b=new Blob([d],{type:"image/svg+xml"});return await N(b)}
function O(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const va=new Set(["input","textarea","datalist","select"]),wa=new Set(["canvas","body","html"]);function P(b){wa.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function xa(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}
self.C3_GetSvgImageSize=async function(b){b=await N(b);if(0<b.width&&0<b.height)return[b.width,b.height];b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const a=b.getBoundingClientRect();document.body.removeChild(b);return[a.width,a.height]};self.C3_RasterSvgImageBlob=async function(b,a,c,d,e){b=await qa(b,a,c);const f=document.createElement("canvas");f.width=d;f.height=e;f.getContext("2d").drawImage(b,0,0,a,c);return f};
let Q=!1;document.addEventListener("pause",()=>Q=!0);document.addEventListener("resume",()=>Q=!1);async function ya(b){var a=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);a=a?await createImageBitmap(b,a):await createImageBitmap(b);return{imageBitmap:a,transferables:[a]}}async function za(b){return await self.C3_GetSvgImageSize(b.blob)}
function Aa(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}function Ba(b){self.setTimeout(()=>{b.Ua=!0},1E3);"cordova"===b.i.g?(document.addEventListener("pause",()=>R(b,!0)),document.addEventListener("resume",()=>R(b,!1))):document.addEventListener("visibilitychange",()=>R(b,document.hidden));return{isSuspended:!(!document.hidden&&!Q)}}
function Ca(b){b.Ra||(b.Ra=!0,window.addEventListener("deviceorientation",a=>{b.l||k(b,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},K)}),window.addEventListener("deviceorientationabsolute",a=>{b.l||k(b,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},K)}))}
function Da(b){b.Qa||(b.Qa=!0,window.addEventListener("devicemotion",a=>{if(!b.l){var c=null,d=a.acceleration;d&&(c={x:d.x||0,y:d.y||0,z:d.z||0});d=null;var e=a.accelerationIncludingGravity;e&&(d={x:e.x||0,y:e.y||0,z:e.z||0});e=null;var f=a.rotationRate;f&&(e={alpha:f.alpha||0,beta:f.beta||0,gamma:f.gamma||0});k(b,"devicemotion",{acceleration:c,accelerationIncludingGravity:d,rotationRate:e,interval:a.interval,timeStamp:a.timeStamp},K)}}))}async function Ea(b){await na(b.url)}
function Fa(b,a){b.Va=a.message;-1===b.xa&&(b.xa=setTimeout(()=>{b.xa=-1;const c=document.getElementById("exportToVideoMessage");c&&(c.textContent=b.Va)},250))}function S(b){if(!b.l){var a=J.N();a&&"any"!==b.Ea&&Ga(b);k(b,"fullscreenchange",{isFullscreen:a,innerWidth:b.B(),innerHeight:b.v()})}}function T(b,a){console.warn("[Construct] Fullscreen request failed: ",a);k(b,"fullscreenerror",{isFullscreen:J.N(),innerWidth:b.B(),innerHeight:b.v()})}
function R(b,a){a?b.i.nb():b.i.Pa();k(b,"visibilitychange",{hidden:a})}function Ha(b,a,c){"Backspace"===c.key&&P(c);if(!b.l){var d=la.get(c.code)||c.code;m(b,a,{code:d,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},K)}}
function U(b,a,c,d){b.l||ka(c)||m(b,a,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY+b.m,pageX:c.pageX,pageY:c.pageY+b.m,movementX:c.movementX||0,movementY:c.movementY||0,timeStamp:c.timeStamp},d)}function V(b){window!==window.top&&window.focus();Ia(b.target)&&document.activeElement&&!Ia(document.activeElement)&&document.activeElement.blur()}
function W(b,a,c){if(!b.l){if(b.V&&"pointermove"!==a){var d=b.V;d.R||(-1!==d.K&&(self.clearTimeout(d.K),d.K=-1),d.ca=Date.now())}d=0;"mouse"===c.pointerType&&(d=b.U);m(b,a,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:d,clientX:c.clientX,clientY:c.clientY+b.m,pageX:c.pageX,pageY:c.pageY+b.m,movementX:(c.movementX||0)+b.fa,movementY:(c.movementY||0)+b.ga,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||
0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},K);b.fa=0;b.ga=0;"mouse"===c.pointerType&&(d="mousemove","pointerdown"===a?d="mousedown":"pointerup"===a&&(d="mouseup"),U(b,d,c,ma),b.U=c.buttons)}}
function X(b,a,c){if(!b.l&&!ka(c)){var d=b.U;"pointerdown"===a&&0!==d?a="pointermove":"pointerup"===a&&0!==c.buttons&&(a="pointermove");m(b,a,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:d,clientX:c.clientX,clientY:c.clientY+b.m,pageX:c.pageX,pageY:c.pageY+b.m,movementX:c.movementX||0,movementY:c.movementY||0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},K);b.U=c.buttons;U(b,c.type,c,ma)}}
function Y(b,a,c){if(!b.l)for(let d=0,e=c.changedTouches.length;d<e;++d){const f=c.changedTouches[d];m(b,a,{pointerId:f.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:f.clientX,clientY:f.clientY+b.m,pageX:f.pageX,pageY:f.pageY+b.m,movementX:c.movementX||0,movementY:c.movementY||0,width:2*(f.radiusX||f.webkitRadiusX||0),height:2*(f.radiusY||f.webkitRadiusY||0),pressure:f.force||f.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:f.rotationAngle||0,timeStamp:c.timeStamp},
K)}}function Z(b,a,c){document.body.style.transform="";b.m=0;if(0<c){var d=document.activeElement;d&&(d=d.getBoundingClientRect(),a=(d.top+d.bottom)/2-(a-c)/2,a>c&&(a=c),0>a&&(a=0),0<a&&(document.body.style.transform=`translateY(${-a}px)`,b.m=a))}}function Ja(b,a,c,d){const e=b.B(),f=b.v();b.J=-1;e!=a||f!=c?k(b,"window-resize",{innerWidth:e,innerHeight:f,devicePixelRatio:window.devicePixelRatio,isFullscreen:J.N()}):10>d&&Ka(b,e,f,d+1)}
function Ka(b,a,c,d){-1!==b.J&&clearTimeout(b.J);b.J=setTimeout(()=>Ja(b,a,c,d),48)}
function Ga(b){b=b.Ea;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(a=>console.warn("[Construct] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(b):screen.webkitLockOrientation?a=screen.webkitLockOrientation(b):screen.mozLockOrientation?a=screen.mozLockOrientation(b):screen.msLockOrientation&&(a=screen.msLockOrientation(b));a||console.warn("[Construct] Failed to lock orientation")}catch(a){console.warn("[Construct] Failed to lock orientation: ",a)}}
function Ia(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}
J.Y(class extends self.M{constructor(b){super(b,"runtime");this.Xa=!0;this.J=-1;this.Ea="any";this.Qa=this.Ra=!1;this.D=null;this.l=!1;this.Va="";this.xa=-1;this.H=this.V=null;this.ga=this.fa=0;this.Ua=!1;this.Za=b.B();this.da=b.v();this.m=this.W=0;b.h("canvas","update-size",d=>{var e=this.i;e.Wa||(e=e.j,e.style.width=d.styleWidth+"px",e.style.height=d.styleHeight+"px",e.style.marginLeft=d.marginLeft+"px",e.style.marginTop=d.marginTop+"px",this.Xa&&(e.style.display="",this.Xa=!1))});b.h("runtime",
"invoke-download",d=>{const e=d.url;d=d.filename;const f=document.createElement("a"),g=document.body;f.textContent=d;f.href=e;f.download=d;g.appendChild(f);f.click();g.removeChild(f)});b.h("runtime","raster-svg-image",d=>ya(d));b.h("runtime","get-svg-image-size",d=>za(d));b.h("runtime","set-target-orientation",d=>{this.Ea=d.targetOrientation});b.h("runtime","register-sw",()=>{window.C3_RegisterSW&&window.C3_RegisterSW()});b.h("runtime","post-to-debugger",d=>Aa(d));b.h("runtime","go-to-script",d=>
Aa(d));b.h("runtime","before-start-ticking",()=>Ba(this));b.h("runtime","debug-highlight",d=>{if(d.show){this.D||(this.D=document.createElement("div"),this.D.id="inspectOutline",document.body.appendChild(this.D));var e=this.D;e.style.display="";e.style.left=d.left-1+"px";e.style.top=d.top-1+"px";e.style.width=d.width+2+"px";e.style.height=d.height+2+"px";e.textContent=d.name}else this.D&&(this.D.style.display="none")});b.h("runtime","enable-device-orientation",()=>Ca(this));b.h("runtime","enable-device-motion",
()=>Da(this));b.h("runtime","add-stylesheet",d=>Ea(d));b.h("runtime","alert",d=>this.qa(d));b.h("runtime","hide-cordova-splash",()=>{navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()});b.h("runtime","set-exporting-to-video",d=>{this.l=!0;const e=document.createElement("h1");e.id="exportToVideoMessage";e.textContent=d.message;document.body.prepend(e);document.body.classList.add("exportingToVideo");this.i.j.style.display="";this.i.lb()});b.h("runtime","export-to-video-progress",
d=>Fa(this,d));b.h("runtime","exported-to-video",d=>{window.Lb({type:"exported-video",blob:d.blob,time:d.time})});b.h("runtime","exported-to-image-sequence",d=>{window.Lb({type:"exported-image-sequence",blobArr:d.blobArr,time:d.time,gif:d.gif})});const a=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",d=>{const e=d.target;a.has(e.tagName.toLowerCase())||O(e)||d.preventDefault()});const c=b.j;window.addEventListener("selectstart",P);window.addEventListener("gesturehold",
P);c.addEventListener("selectstart",P);c.addEventListener("gesturehold",P);window.addEventListener("touchstart",P,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",P,{passive:!1}),c.addEventListener("pointerdown",P)):c.addEventListener("touchstart",P);this.U=0;window.addEventListener("mousedown",d=>{1===d.button&&d.preventDefault()});window.addEventListener("mousewheel",xa,{passive:!1});window.addEventListener("wheel",xa,{passive:!1});window.addEventListener("resize",
()=>{a:{if(!this.l){var d=this.B();var e=this.v();if(this.i.Ja()){if(this.Ua){if(this.Za===d&&e<this.da){this.W=this.da-e;Z(this,this.da,this.W);d=void 0;break a}0<this.W&&(this.W=0,Z(this,e,this.W))}this.Za=d;this.da=e}k(this,"window-resize",{innerWidth:d,innerHeight:e,devicePixelRatio:window.devicePixelRatio,isFullscreen:J.N()});this.i.ma()&&(-1!==this.J&&clearTimeout(this.J),Ja(this,d,e,0))}d=void 0}return d});window.addEventListener("fullscreenchange",()=>S(this));window.addEventListener("webkitfullscreenchange",
()=>S(this));window.addEventListener("mozfullscreenchange",()=>S(this));window.addEventListener("fullscreenerror",d=>T(this,d));window.addEventListener("webkitfullscreenerror",d=>T(this,d));window.addEventListener("mozfullscreenerror",d=>T(this,d));if(b.ma())if(window.visualViewport){let d=Infinity;window.visualViewport.addEventListener("resize",()=>{const e=window.visualViewport.height;e>d&&(document.scrollingElement.scrollTop=0);d=e})}else window.addEventListener("focusout",()=>{{const f=document.activeElement;
if(f){var d=f.tagName.toLowerCase();var e=new Set("email number password search tel text url".split(" "));d="textarea"===d?!0:"input"===d?e.has(f.type.toLowerCase()||"text"):O(f)}else d=!1}d||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=d=>{"entered-fullscreen"===d?(J.aa(!0),S(this)):"exited-fullscreen"===d?(J.aa(!1),S(this)):console.warn("Unknown wrapper message: ",d)};this.Ba=new Set;this.Ib=new WeakSet;this.Gb=!1}Ha(){window.addEventListener("focus",()=>{k(this,"window-focus",
null,L)});window.addEventListener("blur",()=>{try{var a=window.parent&&window.parent.document.hasFocus()}catch(c){a=!1}k(this,"window-blur",{parentHasFocus:a},L);this.U=0});window.addEventListener("focusin",a=>{a=a.target;(va.has(a.tagName.toLowerCase())||O(a))&&k(this,"keyboard-blur",null,L)});window.addEventListener("keydown",a=>Ha(this,"keydown",a));window.addEventListener("keyup",a=>Ha(this,"keyup",a));window.addEventListener("dblclick",a=>U(this,"dblclick",a,K));window.addEventListener("wheel",
a=>{this.l||k(this,"wheel",{clientX:a.clientX,clientY:a.clientY+this.m,pageX:a.pageX,pageY:a.pageY+this.m,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},K)});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",a=>{V(a);W(this,"pointerdown",a)}),this.i.u&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.V=new self.kb(()=>{W(this,"pointermove",this.H);this.H=null}),this.V.Ta=!0,window.addEventListener("pointerrawupdate",
a=>{this.H&&(this.fa+=this.H.movementX||0,this.ga+=this.H.movementY||0);this.H=a;a=this.V;if(-1===a.K){var c=Date.now(),d=c-a.ca,e=a.Fb;d>=e&&a.Ta?(a.ca=c,a.R=!0,a.Sa(),a.R=!1):a.K=self.setTimeout(a.Kb,Math.max(e-d,4))}})):window.addEventListener("pointermove",a=>W(this,"pointermove",a)),window.addEventListener("pointerup",a=>W(this,"pointerup",a)),window.addEventListener("pointercancel",a=>W(this,"pointercancel",a))):(window.addEventListener("mousedown",a=>{V(a);X(this,"pointerdown",a)}),window.addEventListener("mousemove",
a=>X(this,"pointermove",a)),window.addEventListener("mouseup",a=>X(this,"pointerup",a)),window.addEventListener("touchstart",a=>{V(a);Y(this,"pointerdown",a)}),window.addEventListener("touchmove",a=>Y(this,"pointermove",a)),window.addEventListener("touchend",a=>Y(this,"pointerup",a)),window.addEventListener("touchcancel",a=>Y(this,"pointercancel",a)));const b=()=>this.ta();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,!0);window.addEventListener("keydown",
b,!0);window.addEventListener("gamepadconnected",b,!0);this.i.fb()&&!this.i.Ja()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{Z(this,this.v(),navigator.virtualKeyboard.boundingRect.height)}))}B(){return this.i.B()}v(){return this.i.v()}ta(){var b=[...this.Ba];this.Ba.clear();if(!this.Gb)for(const a of b)(b=a.play())&&b.catch(()=>{this.Ib.has(a)||this.Ba.add(a)})}qa(b){alert(b.message)}});"use strict";
async function ha(b){if(b.Eb)throw Error("already initialised");b.Eb=!0;var a=b.ha.pa("dispatchworker.js");b.wa=await b.ha.la(a,b.O,{name:"DispatchWorker"});a=new MessageChannel;b.ya=a.port1;b.wa.postMessage({type:"_init","in-port":a.port2},[a.port2]);b.Ca=await ja(b)}function ia(b){return[b.ya,b.Ca]}
async function ja(b){const a=b.Ya.length;var c=b.ha.pa("jobworker.js");c=await b.ha.la(c,b.O,{name:"JobWorker"+a});const d=new MessageChannel,e=new MessageChannel;b.wa.postMessage({type:"_addJobWorker",port:d.port1},[d.port1]);c.postMessage({type:"init",number:a,"dispatch-port":d.port2,"output-port":e.port2},[d.port2,e.port2]);b.Ya.push(c);return e.port1}
self.ib=class{constructor(b){this.ha=b;this.O=b.o;this.O="preview"===b.g?this.O+"workers/":this.O+b.ia;this.Hb=Math.min(navigator.hardwareConcurrency||2,16);this.wa=null;this.Ya=[];this.Ca=this.ya=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.C({Vb:!1,Wb:"workermain.js",L:["scripts/c3runtime.js"],ja:[],Fa:"",Sb:"scripts/",Ga:[],bb:"html5"}));"use strict";
async function La(b,a){a=a.type;let c=!0;0===a?c=await Ma():1===a&&(c=await Na());k(b,"permission-result",{type:a,result:c})}async function Ma(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(b){return console.warn("[Touch] Failed to request orientation permission: ",b),!1}}
async function Na(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(b){return console.warn("[Touch] Failed to request motion permission: ",b),!1}}self.C.Y(class extends self.M{constructor(b){super(b,"touch");n(this,"request-permission",a=>La(this,a))}});"use strict";
function Oa(b){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(a=>k(b,"sw-message",a.data))}
function Pa(b){b=b.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(a=>console.warn("[Construct] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(b):screen.webkitLockOrientation?a=screen.webkitLockOrientation(b):screen.mozLockOrientation?a=screen.mozLockOrientation(b):screen.msLockOrientation&&(a=screen.msLockOrientation(b));a||console.warn("[Construct] Failed to lock orientation")}catch(a){console.warn("[Construct] Failed to lock orientation: ",
a)}}
self.C.Y(class extends self.M{constructor(b){super(b,"browser");this.g="";p(this,[["get-initial-state",a=>this.ra(a)],["ready-for-sw-messages",()=>Oa(this)],["alert",a=>this.qa(a)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",a=>this.sa(a)],["vibrate",a=>{navigator.vibrate&&navigator.vibrate(a.pattern)}],["lock-orientation",a=>Pa(a)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?
screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(a){}}],["navigate",a=>{var c=a.type;if("back"===c)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.history.back();else if("forward"===c)window.history.forward();else if("reload"===c)location.reload();else if("url"===
c){c=a.url;const d=a.target;a=a.exportType;self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(c,"_system"):"preview"===a||"windows-webview2"===a?window.open(c,"_blank"):this.ac||(2===d?window.top.location=c:1===d?window.parent.location=c:window.location=c)}else"new-window"===c&&(c=a.url,a=a.tag,self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(c,"_system"):window.open(c,a))}],["request-fullscreen",a=>{if("windows-webview2"===this.g||"macos-wkwebview"===this.g)self.C.aa(!0),
this.i.ua({type:"set-fullscreen",fullscreen:!0});else{const c={navigationUI:"auto"};a=a.navUI;1===a?c.navigationUI="hide":2===a&&(c.navigationUI="show");a=document.documentElement;a.requestFullscreen?a.requestFullscreen(c):a.mozRequestFullScreen?a.mozRequestFullScreen(c):a.msRequestFullscreen?a.msRequestFullscreen(c):a.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):a.webkitRequestFullScreen())}}],["exit-fullscreen",
()=>{"windows-webview2"===this.g||"macos-wkwebview"===this.g?(self.C.aa(!1),this.i.ua({type:"set-fullscreen",fullscreen:!1})):document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",a=>{location.hash=a.hash}]]);window.addEventListener("online",()=>{k(this,"online-state",{isOnline:!0})});window.addEventListener("offline",
()=>{k(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{k(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",()=>{k(this,"backbutton")})}ra(b){this.g=b.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
isConstructArcade:"undefined"!==typeof window.is_scirra_arcade}}qa(b){alert(b.message)}sa(b){b=b.isFocus;if("nwjs"===this.g){const a="nwjs"===this.g?nw.Window.get():null;b?a.focus():a.blur()}else b?window.focus():window.blur()}});"use strict";
async function Qa(b){if(!b.F)try{b.F=await navigator.wakeLock.request("screen"),b.F.addEventListener("release",()=>{console.log("[Construct] Screen wake lock released");b.F=null;k(b,"wake-lock-released")}),console.log("[Construct] Screen wake lock acquired"),k(b,"wake-lock-acquired")}catch(a){console.warn("[Construct] Failed to acquire screen wake lock: ",a),k(b,"wake-lock-error")}}
function Ra(){var b=document.body;const a=b.style;a.setProperty("--temp-sai-top","env(safe-area-inset-top)");a.setProperty("--temp-sai-right","env(safe-area-inset-right)");a.setProperty("--temp-sai-bottom","env(safe-area-inset-bottom)");a.setProperty("--temp-sai-left","env(safe-area-inset-left)");b=getComputedStyle(b);b=[b.getPropertyValue("--temp-sai-top"),b.getPropertyValue("--temp-sai-right"),b.getPropertyValue("--temp-sai-bottom"),b.getPropertyValue("--temp-sai-left")].map(c=>{c=parseInt(c,10);
return isFinite(c)?c:0});a.removeProperty("--temp-sai-top");a.removeProperty("--temp-sai-right");a.removeProperty("--temp-sai-bottom");a.removeProperty("--temp-sai-left");return b}
self.C.Y(class extends self.M{constructor(b){super(b,"platform-info");p(this,[["get-initial-state",()=>this.ra()],["request-wake-lock",()=>Qa(this)],["release-wake-lock",()=>{this.F&&(this.F.release(),this.F=null)}]]);window.addEventListener("resize",()=>{k(this,"window-resize",{windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,safeAreaInset:Ra()})});this.F=null}ra(){return{screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
safeAreaInset:Ra(),supportsWakeLock:!!navigator.wakeLock}}});
