function k(b,a,c,d){b.i.ma(b.O,a,c,d,void 0)}function m(b,a,c,d){b.i.s?k(b,a,c,d):b.i.sb()._OnMessageFromDOM({type:"event",component:b.O,handler:a,dispatchOpts:d||null,data:c,responseId:null})}function n(b,a,c){b.i.h(b.O,a,c)}function p(b,a){for(const [c,d]of a)n(b,c,d)}window.L=class{constructor(b,a){this.i=b;this.O=a}Ga(){}};window.jb=class{constructor(b){this.Ra=b;this.Eb=5;this.J=-1;this.ba=-Infinity;this.Jb=()=>{this.J=-1;this.ba=Date.now();this.P=!0;this.Ra();this.P=!1};this.Sa=this.P=!1}};
"use strict";function aa(b,a){n(b,"get-element",c=>{const d=b.o.get(c.elementId);return a(d,c)})}
window.Yb=class extends self.L{constructor(b,a){super(b,a);this.o=new Map;this.ua=!0;p(this,[["create",()=>{throw Error("required override");}],["destroy",c=>{c=c.elementId;const d=this.o.get(c);this.ua&&d.parentElement.removeChild(d);this.o.delete(c)}],["set-visible",c=>{this.ua&&(this.o.get(c.elementId).style.display=c.isVisible?"":"none")}],["update-position",c=>{if(this.ua){var d=this.o.get(c.elementId);d.style.left=c.left+"px";d.style.top=c.top+"px";d.style.width=c.width+"px";d.style.height=
c.height+"px";c=c.fontSize;null!==c&&(d.style.fontSize=c+"em")}}],["update-state",c=>{this.o.get(c.elementId);throw Error("required override");}],["focus",c=>this.ra(c)],["set-css-style",c=>{this.o.get(c.elementId).style[c.prop]=c.val}],["set-attribute",c=>{this.o.get(c.elementId).setAttribute(c.name,c.val)}],["remove-attribute",c=>{this.o.get(c.elementId).removeAttribute(c.name)}]]);aa(this,c=>c)}ra(b){var a=this.o.get(b.elementId);b.focus?a.focus():a.blur()}};"use strict";
const q=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),t=/android/i.test(navigator.userAgent);let u=0;function v(b){const a=document.createElement("script");a.async=!1;a.type="module";return b.Ob?new Promise(c=>{const d="c3_resolve_"+u;++u;self[d]=c;a.textContent=b.Sb+`\n\nself["${d}"]();`;document.head.appendChild(a)}):new Promise((c,d)=>{a.onload=c;a.onerror=d;a.src=b;document.head.appendChild(a)})}let w=!1,x=!1;
function ba(){if(!w){try{new Worker("blob://",{get type(){x=!0}})}catch(b){}w=!0}return x}let y=new Audio;const ca={"audio/webm; codecs=opus":!!y.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!y.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!y.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!y.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!y.canPlayType("audio/mp4"),"audio/mpeg":!!y.canPlayType("audio/mpeg")};y=null;
async function da(b){b=await z(b);return(new TextDecoder("utf-8")).decode(b)}function z(b){return new Promise((a,c)=>{const d=new FileReader;d.onload=e=>a(e.target.result);d.onerror=e=>c(e);d.readAsArrayBuffer(b)})}const A=[];let C=0;window.RealFile=window.File;const D=[],E=new Map,F=new Map;let ea=0;const G=[];self.runOnStartup=function(b){if("function"!==typeof b)throw Error("runOnStartup called without a function");G.push(b)};const H=new Set(["cordova","playable-ad","instant-games"]);let fa=!1;
window.B=class b{constructor(a){this.s=a.Ub;this.S=null;this.m="";this.ha=a.Rb;this.W={};this.za=this.$a=null;this.aa=[];this.j=this.Ca=null;this.Va=!1;this.R=null;this.H=-1;this.Ib=()=>this.zb();this.Za=[];this.g=a.ab;this.ya="file"===location.protocol.substr(0,4);!this.s||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&ba()||(this.s=!1);if("playable-ad"===this.g||"instant-games"===this.g)this.s=!1;if("cordova"===this.g&&this.s)if(t){const c=/Chrome\/(\d+)/i.exec(navigator.userAgent);
c&&90<=parseInt(c[1],10)||(this.s=!1)}else this.s=!1;this.da=this.v=null;"html5"!==this.g||window.isSecureContext||console.warn("[Construct] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.h("runtime","cordova-fetch-local-file",c=>this.vb(c));this.h("runtime","create-job-worker",()=>this.wb());"cordova"===this.g?document.addEventListener("deviceready",()=>this.La(a)):this.La(a)}gb(){return q&&
"cordova"===this.g}la(){const a=navigator.userAgent;return q&&H.has(this.g)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}eb(){return t}Ia(){return t&&H.has(this.g)}async La(a){"macos-wkwebview"===this.g&&this.ta({type:"ready"});if("playable-ad"===this.g){this.v=self.c3_base64files;this.da={};await this.ob();for(let d=0,e=a.K.length;d<e;++d){var c=a.K[d].toLowerCase();this.da.hasOwnProperty(c)?a.K[d]={Ob:!0,Sb:this.da[c]}:this.v.hasOwnProperty(c)&&(a.K[d]=URL.createObjectURL(this.v[c]))}}a.Qb?
this.m=a.Qb:(c=location.origin,this.m=("null"===c?"file:///":c)+location.pathname,c=this.m.lastIndexOf("/"),-1!==c&&(this.m=this.m.substr(0,c+1)));a.Wb&&(this.W=a.Wb);c=new MessageChannel;this.S=c.port1;this.S.onmessage=d=>this._OnMessageFromRuntime(d.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(d=>this.yb(d));this.R=new self.hb(this);await ha(this.R);"object"===typeof window.StatusBar&&window.StatusBar.hide();if("object"===typeof window.AndroidFullScreen)try{await new Promise((d,
e)=>{window.AndroidFullScreen.immersiveMode(d,e)})}catch(d){console.error("Failed to enter Android immersive mode: ",d)}this.s?await this.ub(a,c.port2):await this.tb(a,c.port2)}oa(a){a=this.W.hasOwnProperty(a)?this.W[a]:a.endsWith("/workermain.js")&&this.W.hasOwnProperty("workermain.js")?this.W["workermain.js"]:"playable-ad"===this.g&&this.v.hasOwnProperty(a.toLowerCase())?this.v[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ka(a,c,d){if(a.startsWith("blob:"))return new Worker(a,
d);if("cordova"===this.g&&this.ya)return a=await this.ja(d.Nb?a:this.ha+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),d);a=new URL(a,c);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),d)}return new Worker(a,d)}A(){return Math.max(window.innerWidth,1)}u(){return Math.max(window.innerHeight,1)}Ka(a){var c=this.m,d=location.href,e=this.A(),f=this.u(),g=window.devicePixelRatio,
h=b.M(),l=a.cc,r=window.cr_previewImageBlobs||this.v,ra=window.cr_previewProjectFileBlobs,sa=window.cr_previewProjectFiles,ta=window.ac||"";a=a.ab;var ua=(new URLSearchParams(self.location.search)).has("debug"),I=this.R;return{runtimeBaseUrl:c,previewUrl:d,windowInnerWidth:e,windowInnerHeight:f,devicePixelRatio:g,isFullscreen:h,projectData:l,previewImageBlobs:r,previewProjectFileBlobs:ra,previewProjectFileSWUrls:sa,swClientId:ta,exportType:a,isDebug:ua,ife:!!self.bc,jobScheduler:{inputPort:I.xa,outputPort:I.Ba,
maxNumWorkers:I.Gb},supportedAudioFormats:ca,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.ha+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.ha+"opus.wasm.wasm",isFileProtocol:this.ya,isiOSCordova:this.gb(),isiOSWebView:this.la(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async ub(a,c){var d=this.oa(a.Vb);this.$a=await this.ka(d,this.m,{type:"module",name:"Runtime",Nb:!0});this.j=document.createElement("canvas");this.j.style.display="none";d=this.j.transferControlToOffscreen();
document.body.appendChild(this.j);window.c3canvas=this.j;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();let e=a.Fa||[],f=a.K;e=await Promise.all(e.map(g=>this.F(g)));f=await Promise.all(f.map(g=>this.F(g)));if("cordova"===this.g)for(let g=0,h=a.ia.length;g<h;++g){const l=a.ia[g],r=l[0];if(r===a.Ea||"scriptsInEvents.js"===r||r.endsWith("/scriptsInEvents.js"))l[1]=await this.F(r)}this.$a.postMessage(Object.assign(this.Ka(a),{type:"init-runtime",isInWorker:!0,messagePort:c,canvas:d,
workerDependencyScripts:e,engineScripts:f,projectScripts:a.ia,mainProjectScript:a.Ea,projectScriptsStatus:self.C3_ProjectScriptsStatus}),[c,d,...ia(this.R)]);this.aa=D.map(g=>new g(this));this.Ja();self.c3_callFunction=(g,h)=>{var l=this.Ca;return l.i.ib(l.O,{name:g,params:h})};"preview"===this.g&&(self.goToLastErrorScript=()=>this.ma("runtime","go-to-last-error-script"))}async tb(a,c){this.j=document.createElement("canvas");this.j.style.display="none";document.body.appendChild(this.j);window.c3canvas=
this.j;self.C3_InsertHTMLPlaceholders&&self.C3_InsertHTMLPlaceholders();this.aa=D.map(g=>new g(this));this.Ja();var d=a.K.map(g=>"string"===typeof g?(new URL(g,this.m)).toString():g);Array.isArray(a.Fa)&&d.unshift(...a.Fa);d=await Promise.all(d.map(g=>this.F(g)));await Promise.all(d.map(g=>v(g)));d=self.C3_ProjectScriptsStatus;const e=a.Ea,f=a.ia;for(let [g,h]of f)if(h||=g,g===e)try{h=await this.F(h),await v(h),"preview"!==this.g||d[g]||this.Na(g,"main script did not run to completion")}catch(l){this.Na(g,
l)}else if("scriptsInEvents.js"===g||g.endsWith("/scriptsInEvents.js"))h=await this.F(h),await v(h);"preview"===this.g&&"object"!==typeof self.Xb.Zb?(this.Z(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Ka(a),{isInWorker:!1,messagePort:c,canvas:this.j,runOnStartupFunctions:G}),this.Ma(),this.za=
self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.za,a))}Na(a,c){this.Z();console.error(`[Preview] Failed to load project main script (${a}): `,c);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Ma(){this.Z()}Z(){const a=window.Lb;a&&(a.parentElement.removeChild(a),window.Lb=null)}async wb(){const a=await ja(this.R);return{outputPort:a,transferables:[a]}}sb(){if(this.s)throw Error("not available in worker mode");
return this.za}ma(a,c,d,e,f){this.S.postMessage({type:"event",component:a,handler:c,dispatchOpts:e||null,data:d,responseId:null},f)}ib(a,c){const d=ea++,e=new Promise((f,g)=>{F.set(d,{resolve:f,reject:g})});this.S.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:c,responseId:d},void 0);return e}_OnMessageFromRuntime(a){const c=a.type;if("event"===c)return this.xb(a);if("result"===c)this.Ab(a);else if("runtime-ready"===c)this.Bb();else if("alert-error"===c)this.Z(),
alert(a.message);else if("creating-runtime"===c)this.Ma();else throw Error(`unknown message '${c}'`);}xb(a){const c=a.component,d=a.handler,e=a.data,f=a.responseId;if(a=E.get(c))if(a=a.get(d)){var g=null;try{g=a(e)}catch(h){console.error(`Exception in '${c}' handler '${d}':`,h);null!==f&&this.Y(f,!1,""+h);return}if(null===f)return g;g&&g.then?g.then(h=>this.Y(f,!0,h)).catch(h=>{console.error(`Rejection from '${c}' handler '${d}':`,h);this.Y(f,!1,""+h)}):this.Y(f,!0,g)}else console.warn(`[DOM] No handler '${d}' for component '${c}'`);
else console.warn(`[DOM] No event handlers for component '${c}'`)}Y(a,c,d){let e;d&&d.transferables&&(e=d.transferables);this.S.postMessage({type:"result",responseId:a,isOk:c,result:d},e)}Ab(a){const c=a.responseId,d=a.isOk;a=a.result;const e=F.get(c);d?e.resolve(a):e.reject(a);F.delete(c)}h(a,c,d){let e=E.get(a);e||(e=new Map,E.set(a,e));if(e.has(c))throw Error(`[DOM] Component '${a}' already has handler '${c}'`);e.set(c,d)}static X(a){if(D.includes(a))throw Error("DOM handler already added");D.push(a)}Ja(){for(const a of this.aa)if("runtime"===
a.O){this.Ca=a;return}throw Error("cannot find runtime DOM handler");}yb(a){this.ma("debugger","message",a)}Bb(){for(const a of this.aa)a.Ga()}static M(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||fa)}static $(a){fa=!!a}Oa(){-1===this.H&&this.Za.length&&(this.H=requestAnimationFrame(this.Ib))}mb(){-1!==this.H&&(cancelAnimationFrame(this.H),this.H=-1)}zb(){this.H=-1;for(const a of this.Za)a();this.Oa()}sa(){this.Ca.sa()}kb(){this.Va=!0}cb(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||
"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}fb(a){return!this.cb(a)}async F(a){return"cordova"===this.g&&(a.startsWith("file:")||this.ya&&this.fb(a))?(a.startsWith(this.m)&&(a=a.substr(this.m.length)),a=await this.ja(a),URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async vb(a){const c=a.filename;switch(a.as){case "text":return await this.bb(c);case "buffer":return await this.ja(c);default:throw Error("unsupported type");}}Ha(a){const c=window.cordova.file.applicationDirectory+
"www/"+a.toLowerCase();return new Promise((d,e)=>{window.resolveLocalFileSystemURL(c,f=>{f.file(d,e)},e)})}async bb(a){a=await this.Ha(a);return await da(a)}na(){if(A.length&&!(8<=C)){C++;var a=A.shift();this.pb(a.filename,a.Tb,a.Mb)}}ja(a){return new Promise((c,d)=>{A.push({filename:a,Tb:e=>{C--;this.na();c(e)},Mb:e=>{C--;this.na();d(e)}});this.na()})}async pb(a,c,d){try{const e=await this.Ha(a),f=await z(e);c(f)}catch(e){d(e)}}ta(a){if("windows-webview2"===this.g)window.chrome.webview.postMessage(JSON.stringify(a));
else if("macos-wkwebview"===this.g)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async ob(){const a=[];for(const [c,d]of Object.entries(this.v))a.push(this.nb(c,d));await Promise.all(a)}async nb(a,c){if("object"===typeof c)this.v[a]=new Blob([c.str],{type:c.type}),this.da[a]=c.str;else{let d=await this.rb(c);d||=this.qb(c);this.v[a]=d}}async rb(a){try{return await (await fetch(a)).blob()}catch(c){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
c),null}}qb(a){a=this.Cb(a);return this.lb(a.data,a.Pb)}Cb(a){var c=a.indexOf(",");if(0>c)throw new URIError("expected comma in data: uri");var d=a.substring(c+1);c=a.substring(5,c).split(";");a=c[0]||"";const e=c[2];d="base64"===c[1]||"base64"===e?atob(d):decodeURIComponent(d);return{Pb:a,data:d}}lb(a,c){var d=a.length;let e=d>>2,f=new Uint8Array(d),g=new Uint32Array(f.buffer,0,e),h,l;for(l=h=0;h<e;++h)g[h]=a.charCodeAt(l++)|a.charCodeAt(l++)<<8|a.charCodeAt(l++)<<16|a.charCodeAt(l++)<<24;for(d&=
3;d--;)f[l]=a.charCodeAt(l),++l;return new Blob([f],{type:c})}};"use strict";const J=self.B;function ka(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const la=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),K={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},ma={dispatchUserScriptEvent:!0},M={dispatchRuntimeEvent:!0};
function na(b){return new Promise((a,c)=>{const d=document.createElement("link");d.onload=()=>a(d);d.onerror=e=>c(e);d.rel="stylesheet";d.href=b;document.head.appendChild(d)})}function oa(b){return new Promise((a,c)=>{const d=new Image;d.onload=()=>a(d);d.onerror=e=>c(e);d.src=b})}async function N(b){b=URL.createObjectURL(b);try{return await oa(b)}finally{URL.revokeObjectURL(b)}}
function pa(b){return new Promise((a,c)=>{let d=new FileReader;d.onload=e=>a(e.target.result);d.onerror=e=>c(e);d.readAsText(b)})}
async function qa(b,a,c){if(!/firefox/i.test(navigator.userAgent))return await N(b);var d=await pa(b);d=(new DOMParser).parseFromString(d,"image/svg+xml");const e=d.documentElement;if(e.hasAttribute("width")&&e.hasAttribute("height")){const f=e.getAttribute("width"),g=e.getAttribute("height");if(!f.includes("%")&&!g.includes("%"))return await N(b)}e.setAttribute("width",a+"px");e.setAttribute("height",c+"px");d=(new XMLSerializer).serializeToString(d);b=new Blob([d],{type:"image/svg+xml"});return await N(b)}
function O(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const va=new Set(["input","textarea","datalist","select"]),wa=new Set(["canvas","body","html"]);function P(b){wa.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function xa(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}
self.C3_GetSvgImageSize=async function(b){b=await N(b);if(0<b.width&&0<b.height)return[b.width,b.height];b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const a=b.getBoundingClientRect();document.body.removeChild(b);return[a.width,a.height]};self.C3_RasterSvgImageBlob=async function(b,a,c,d,e){b=await qa(b,a,c);const f=document.createElement("canvas");f.width=d;f.height=e;f.getContext("2d").drawImage(b,0,0,a,c);return f};
let Q=!1;document.addEventListener("pause",()=>Q=!0);document.addEventListener("resume",()=>Q=!1);async function ya(b){var a=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);a=a?await createImageBitmap(b,a):await createImageBitmap(b);return{imageBitmap:a,transferables:[a]}}async function za(b){return await self.C3_GetSvgImageSize(b.blob)}
function Aa(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}function Ba(b){self.setTimeout(()=>{b.Ta=!0},1E3);"cordova"===b.i.g?(document.addEventListener("pause",()=>R(b,!0)),document.addEventListener("resume",()=>R(b,!1))):document.addEventListener("visibilitychange",()=>R(b,document.hidden));return{isSuspended:!(!document.hidden&&!Q)}}
function Ca(b){b.Qa||(b.Qa=!0,window.addEventListener("deviceorientation",a=>{b.l||k(b,"deviceorientation",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp,webkitCompassHeading:a.webkitCompassHeading,webkitCompassAccuracy:a.webkitCompassAccuracy},K)}),window.addEventListener("deviceorientationabsolute",a=>{b.l||k(b,"deviceorientationabsolute",{absolute:!!a.absolute,alpha:a.alpha||0,beta:a.beta||0,gamma:a.gamma||0,timeStamp:a.timeStamp},K)}))}
function Da(b){b.Pa||(b.Pa=!0,window.addEventListener("devicemotion",a=>{if(!b.l){var c=null,d=a.acceleration;d&&(c={x:d.x||0,y:d.y||0,z:d.z||0});d=null;var e=a.accelerationIncludingGravity;e&&(d={x:e.x||0,y:e.y||0,z:e.z||0});e=null;var f=a.rotationRate;f&&(e={alpha:f.alpha||0,beta:f.beta||0,gamma:f.gamma||0});k(b,"devicemotion",{acceleration:c,accelerationIncludingGravity:d,rotationRate:e,interval:a.interval,timeStamp:a.timeStamp},K)}}))}async function Ea(b){await na(b.url)}
function Fa(b,a){b.Ua=a.message;-1===b.wa&&(b.wa=setTimeout(()=>{b.wa=-1;const c=document.getElementById("exportToVideoMessage");c&&(c.textContent=b.Ua)},250))}function S(b){if(!b.l){var a=J.M();a&&"any"!==b.Da&&Ga(b);k(b,"fullscreenchange",{isFullscreen:a,innerWidth:b.A(),innerHeight:b.u()})}}function T(b,a){console.warn("[Construct] Fullscreen request failed: ",a);k(b,"fullscreenerror",{isFullscreen:J.M(),innerWidth:b.A(),innerHeight:b.u()})}
function R(b,a){a?b.i.mb():b.i.Oa();k(b,"visibilitychange",{hidden:a})}function Ha(b,a,c){"Backspace"===c.key&&P(c);if(!b.l){var d=la.get(c.code)||c.code;m(b,a,{code:d,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},K)}}
function U(b,a,c,d){b.l||ka(c)||m(b,a,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,movementX:c.movementX||0,movementY:c.movementY||0,timeStamp:c.timeStamp},d)}function V(b){window!==window.top&&window.focus();Ia(b.target)&&document.activeElement&&!Ia(document.activeElement)&&document.activeElement.blur()}
function W(b,a,c){if(!b.l){if(b.U&&"pointermove"!==a){var d=b.U;d.P||(-1!==d.J&&(self.clearTimeout(d.J),d.J=-1),d.ba=Date.now())}d=0;"mouse"===c.pointerType&&(d=b.T);m(b,a,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:d,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,movementX:(c.movementX||0)+b.ea,movementY:(c.movementY||0)+b.fa,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||
0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},K);b.ea=0;b.fa=0;"mouse"===c.pointerType&&(d="mousemove","pointerdown"===a?d="mousedown":"pointerup"===a&&(d="mouseup"),U(b,d,c,ma),b.T=c.buttons)}}
function X(b,a,c){if(!b.l&&!ka(c)){var d=b.T;"pointerdown"===a&&0!==d?a="pointermove":"pointerup"===a&&0!==c.buttons&&(a="pointermove");m(b,a,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:d,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,movementX:c.movementX||0,movementY:c.movementY||0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},K);b.T=c.buttons;U(b,c.type,c,ma)}}
function Y(b,a,c){if(!b.l)for(let d=0,e=c.changedTouches.length;d<e;++d){const f=c.changedTouches[d];m(b,a,{pointerId:f.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:f.clientX,clientY:f.clientY,pageX:f.pageX,pageY:f.pageY,movementX:c.movementX||0,movementY:c.movementY||0,width:2*(f.radiusX||f.webkitRadiusX||0),height:2*(f.radiusY||f.webkitRadiusY||0),pressure:f.force||f.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:f.rotationAngle||0,timeStamp:c.timeStamp},K)}}
function Z(b,a){document.body.style.transform="";if(0<a){var c=document.activeElement;c&&(c=c.getBoundingClientRect(),b=(c.top+c.bottom)/2-(b-a)/2,b>a&&(b=a),0>b&&(b=0),0<b&&(document.body.style.transform=`translateY(${-b}px)`))}}function Ja(b,a,c,d){const e=b.A(),f=b.u();b.I=-1;e!=a||f!=c?k(b,"window-resize",{innerWidth:e,innerHeight:f,devicePixelRatio:window.devicePixelRatio,isFullscreen:J.M()}):10>d&&Ka(b,e,f,d+1)}
function Ka(b,a,c,d){-1!==b.I&&clearTimeout(b.I);b.I=setTimeout(()=>Ja(b,a,c,d),48)}
function Ga(b){b=b.Da;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(a=>console.warn("[Construct] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(b):screen.webkitLockOrientation?a=screen.webkitLockOrientation(b):screen.mozLockOrientation?a=screen.mozLockOrientation(b):screen.msLockOrientation&&(a=screen.msLockOrientation(b));a||console.warn("[Construct] Failed to lock orientation")}catch(a){console.warn("[Construct] Failed to lock orientation: ",a)}}
function Ia(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}
J.X(class extends self.L{constructor(b){super(b,"runtime");this.Wa=!0;this.I=-1;this.Da="any";this.Pa=this.Qa=!1;this.C=null;this.l=!1;this.Ua="";this.wa=-1;this.G=this.U=null;this.fa=this.ea=0;this.Ta=!1;this.Ya=b.A();this.ca=b.u();this.V=0;b.h("canvas","update-size",d=>{var e=this.i;e.Va||(e=e.j,e.style.width=d.styleWidth+"px",e.style.height=d.styleHeight+"px",e.style.marginLeft=d.marginLeft+"px",e.style.marginTop=d.marginTop+"px",this.Wa&&(e.style.display="",this.Wa=!1))});b.h("runtime","invoke-download",
d=>{const e=d.url;d=d.filename;const f=document.createElement("a"),g=document.body;f.textContent=d;f.href=e;f.download=d;g.appendChild(f);f.click();g.removeChild(f)});b.h("runtime","raster-svg-image",d=>ya(d));b.h("runtime","get-svg-image-size",d=>za(d));b.h("runtime","set-target-orientation",d=>{this.Da=d.targetOrientation});b.h("runtime","register-sw",()=>{window.C3_RegisterSW&&window.C3_RegisterSW()});b.h("runtime","post-to-debugger",d=>Aa(d));b.h("runtime","go-to-script",d=>Aa(d));b.h("runtime",
"before-start-ticking",()=>Ba(this));b.h("runtime","debug-highlight",d=>{if(d.show){this.C||(this.C=document.createElement("div"),this.C.id="inspectOutline",document.body.appendChild(this.C));var e=this.C;e.style.display="";e.style.left=d.left-1+"px";e.style.top=d.top-1+"px";e.style.width=d.width+2+"px";e.style.height=d.height+2+"px";e.textContent=d.name}else this.C&&(this.C.style.display="none")});b.h("runtime","enable-device-orientation",()=>Ca(this));b.h("runtime","enable-device-motion",()=>Da(this));
b.h("runtime","add-stylesheet",d=>Ea(d));b.h("runtime","alert",d=>this.pa(d));b.h("runtime","hide-cordova-splash",()=>{navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()});b.h("runtime","set-exporting-to-video",d=>{this.l=!0;const e=document.createElement("h1");e.id="exportToVideoMessage";e.textContent=d.message;document.body.prepend(e);document.body.classList.add("exportingToVideo");this.i.j.style.display="";this.i.kb()});b.h("runtime","export-to-video-progress",d=>
Fa(this,d));b.h("runtime","exported-to-video",d=>{window.Kb({type:"exported-video",blob:d.blob,time:d.time})});b.h("runtime","exported-to-image-sequence",d=>{window.Kb({type:"exported-image-sequence",blobArr:d.blobArr,time:d.time})});const a=new Set(["input","textarea","datalist"]);window.addEventListener("contextmenu",d=>{const e=d.target;a.has(e.tagName.toLowerCase())||O(e)||d.preventDefault()});const c=b.j;window.addEventListener("selectstart",P);window.addEventListener("gesturehold",P);c.addEventListener("selectstart",
P);c.addEventListener("gesturehold",P);window.addEventListener("touchstart",P,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",P,{passive:!1}),c.addEventListener("pointerdown",P)):c.addEventListener("touchstart",P);this.T=0;window.addEventListener("mousedown",d=>{1===d.button&&d.preventDefault()});window.addEventListener("mousewheel",xa,{passive:!1});window.addEventListener("wheel",xa,{passive:!1});window.addEventListener("resize",()=>{a:{if(!this.l){var d=this.A();
var e=this.u();if(this.i.Ia()){if(this.Ta){if(this.Ya===d&&e<this.ca){this.V=this.ca-e;Z(this.ca,this.V);d=void 0;break a}0<this.V&&(this.V=0,Z(e,this.V))}this.Ya=d;this.ca=e}k(this,"window-resize",{innerWidth:d,innerHeight:e,devicePixelRatio:window.devicePixelRatio,isFullscreen:J.M()});this.i.la()&&(-1!==this.I&&clearTimeout(this.I),Ja(this,d,e,0))}d=void 0}return d});window.addEventListener("fullscreenchange",()=>S(this));window.addEventListener("webkitfullscreenchange",()=>S(this));window.addEventListener("mozfullscreenchange",
()=>S(this));window.addEventListener("fullscreenerror",d=>T(this,d));window.addEventListener("webkitfullscreenerror",d=>T(this,d));window.addEventListener("mozfullscreenerror",d=>T(this,d));if(b.la())if(window.visualViewport){let d=Infinity;window.visualViewport.addEventListener("resize",()=>{const e=window.visualViewport.height;e>d&&(document.scrollingElement.scrollTop=0);d=e})}else window.addEventListener("focusout",()=>{{const f=document.activeElement;if(f){var d=f.tagName.toLowerCase();var e=
new Set("email number password search tel text url".split(" "));d="textarea"===d?!0:"input"===d?e.has(f.type.toLowerCase()||"text"):O(f)}else d=!1}d||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=d=>{"entered-fullscreen"===d?(J.$(!0),S(this)):"exited-fullscreen"===d?(J.$(!1),S(this)):console.warn("Unknown wrapper message: ",d)};this.Aa=new Set;this.Hb=new WeakSet;this.Fb=!1}Ga(){window.addEventListener("focus",()=>{k(this,"window-focus",null,M)});window.addEventListener("blur",
()=>{try{var a=window.parent&&window.parent.document.hasFocus()}catch(c){a=!1}k(this,"window-blur",{parentHasFocus:a},M);this.T=0});window.addEventListener("focusin",a=>{a=a.target;(va.has(a.tagName.toLowerCase())||O(a))&&k(this,"keyboard-blur",null,M)});window.addEventListener("keydown",a=>Ha(this,"keydown",a));window.addEventListener("keyup",a=>Ha(this,"keyup",a));window.addEventListener("dblclick",a=>U(this,"dblclick",a,K));window.addEventListener("wheel",a=>{this.l||k(this,"wheel",{clientX:a.clientX,
clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},K)});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",a=>{V(a);W(this,"pointerdown",a)}),this.i.s&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.U=new self.jb(()=>{W(this,"pointermove",this.G);this.G=null}),this.U.Sa=!0,window.addEventListener("pointerrawupdate",a=>{this.G&&(this.ea+=this.G.movementX||0,this.fa+=
this.G.movementY||0);this.G=a;a=this.U;if(-1===a.J){var c=Date.now(),d=c-a.ba,e=a.Eb;d>=e&&a.Sa?(a.ba=c,a.P=!0,a.Ra(),a.P=!1):a.J=self.setTimeout(a.Jb,Math.max(e-d,4))}})):window.addEventListener("pointermove",a=>W(this,"pointermove",a)),window.addEventListener("pointerup",a=>W(this,"pointerup",a)),window.addEventListener("pointercancel",a=>W(this,"pointercancel",a))):(window.addEventListener("mousedown",a=>{V(a);X(this,"pointerdown",a)}),window.addEventListener("mousemove",a=>X(this,"pointermove",
a)),window.addEventListener("mouseup",a=>X(this,"pointerup",a)),window.addEventListener("touchstart",a=>{V(a);Y(this,"pointerdown",a)}),window.addEventListener("touchmove",a=>Y(this,"pointermove",a)),window.addEventListener("touchend",a=>Y(this,"pointerup",a)),window.addEventListener("touchcancel",a=>Y(this,"pointercancel",a)));const b=()=>this.sa();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,!0);window.addEventListener("keydown",
b,!0);window.addEventListener("gamepadconnected",b,!0);this.i.eb()&&!this.i.Ia()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{Z(this.u(),navigator.virtualKeyboard.boundingRect.height)}))}A(){return this.i.A()}u(){return this.i.u()}sa(){var b=[...this.Aa];this.Aa.clear();if(!this.Fb)for(const a of b)(b=a.play())&&b.catch(()=>{this.Hb.has(a)||this.Aa.add(a)})}pa(b){alert(b.message)}});"use strict";
async function ha(b){if(b.Db)throw Error("already initialised");b.Db=!0;var a=b.ga.oa("dispatchworker.js");b.va=await b.ga.ka(a,b.N,{name:"DispatchWorker"});a=new MessageChannel;b.xa=a.port1;b.va.postMessage({type:"_init","in-port":a.port2},[a.port2]);b.Ba=await ja(b)}function ia(b){return[b.xa,b.Ba]}
async function ja(b){const a=b.Xa.length;var c=b.ga.oa("jobworker.js");c=await b.ga.ka(c,b.N,{name:"JobWorker"+a});const d=new MessageChannel,e=new MessageChannel;b.va.postMessage({type:"_addJobWorker",port:d.port1},[d.port1]);c.postMessage({type:"init",number:a,"dispatch-port":d.port2,"output-port":e.port2},[d.port2,e.port2]);b.Xa.push(c);return e.port1}
self.hb=class{constructor(b){this.ga=b;this.N=b.m;this.N="preview"===b.g?this.N+"workers/":this.N+b.ha;this.Gb=Math.min(navigator.hardwareConcurrency||2,16);this.va=null;this.Xa=[];this.Ba=this.xa=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.B({Ub:!1,Vb:"workermain.js",K:["scripts/c3runtime.js"],ia:[],Ea:"",Rb:"scripts/",Fa:[],ab:"html5"}));"use strict";
async function La(b,a){a=a.type;let c=!0;0===a?c=await Ma():1===a&&(c=await Na());k(b,"permission-result",{type:a,result:c})}async function Ma(){if(!self.DeviceOrientationEvent||!self.DeviceOrientationEvent.requestPermission)return!0;try{return"granted"===await self.DeviceOrientationEvent.requestPermission()}catch(b){return console.warn("[Touch] Failed to request orientation permission: ",b),!1}}
async function Na(){if(!self.DeviceMotionEvent||!self.DeviceMotionEvent.requestPermission)return!0;try{return"granted"===await self.DeviceMotionEvent.requestPermission()}catch(b){return console.warn("[Touch] Failed to request motion permission: ",b),!1}}self.B.X(class extends self.L{constructor(b){super(b,"touch");n(this,"request-permission",a=>La(this,a))}});"use strict";
function Oa(b){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(a=>k(b,"sw-message",a.data))}
function Pa(b){b=b.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(a=>console.warn("[Construct] Failed to lock orientation: ",a));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(b):screen.webkitLockOrientation?a=screen.webkitLockOrientation(b):screen.mozLockOrientation?a=screen.mozLockOrientation(b):screen.msLockOrientation&&(a=screen.msLockOrientation(b));a||console.warn("[Construct] Failed to lock orientation")}catch(a){console.warn("[Construct] Failed to lock orientation: ",
a)}}
self.B.X(class extends self.L{constructor(b){super(b,"browser");this.g="";p(this,[["get-initial-state",a=>this.qa(a)],["ready-for-sw-messages",()=>Oa(this)],["alert",a=>this.pa(a)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",a=>this.ra(a)],["vibrate",a=>{navigator.vibrate&&navigator.vibrate(a.pattern)}],["lock-orientation",a=>Pa(a)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?
screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(a){}}],["navigate",a=>{var c=a.type;if("back"===c)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.history.back();else if("forward"===c)window.history.forward();else if("reload"===c)location.reload();else if("url"===
c){c=a.url;const d=a.target;a=a.exportType;self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(c,"_system"):"preview"===a||"windows-webview2"===a?window.open(c,"_blank"):this.$b||(2===d?window.top.location=c:1===d?window.parent.location=c:window.location=c)}else"new-window"===c&&(c=a.url,a=a.tag,self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(c,"_system"):window.open(c,a))}],["request-fullscreen",a=>{if("windows-webview2"===this.g||"macos-wkwebview"===this.g)self.B.$(!0),
this.i.ta({type:"set-fullscreen",fullscreen:!0});else{const c={navigationUI:"auto"};a=a.navUI;1===a?c.navigationUI="hide":2===a&&(c.navigationUI="show");a=document.documentElement;a.requestFullscreen?a.requestFullscreen(c):a.mozRequestFullScreen?a.mozRequestFullScreen(c):a.msRequestFullscreen?a.msRequestFullscreen(c):a.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):a.webkitRequestFullScreen())}}],["exit-fullscreen",
()=>{"windows-webview2"===this.g||"macos-wkwebview"===this.g?(self.B.$(!1),this.i.ta({type:"set-fullscreen",fullscreen:!1})):document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",a=>{location.hash=a.hash}]]);window.addEventListener("online",()=>{k(this,"online-state",{isOnline:!0})});window.addEventListener("offline",
()=>{k(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{k(this,"hashchange",{location:location.toString()})});document.addEventListener("backbutton",()=>{k(this,"backbutton")})}qa(b){this.g=b.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
isConstructArcade:"undefined"!==typeof window.is_scirra_arcade}}pa(b){alert(b.message)}ra(b){b=b.isFocus;if("nwjs"===this.g){const a="nwjs"===this.g?nw.Window.get():null;b?a.focus():a.blur()}else b?window.focus():window.blur()}});"use strict";
async function Qa(b){if(!b.D)try{b.D=await navigator.wakeLock.request("screen"),b.D.addEventListener("release",()=>{console.log("[Construct] Screen wake lock released");b.D=null;k(b,"wake-lock-released")}),console.log("[Construct] Screen wake lock acquired"),k(b,"wake-lock-acquired")}catch(a){console.warn("[Construct] Failed to acquire screen wake lock: ",a),k(b,"wake-lock-error")}}
function Ra(){var b=document.body;const a=b.style;a.setProperty("--temp-sai-top","env(safe-area-inset-top)");a.setProperty("--temp-sai-right","env(safe-area-inset-right)");a.setProperty("--temp-sai-bottom","env(safe-area-inset-bottom)");a.setProperty("--temp-sai-left","env(safe-area-inset-left)");b=getComputedStyle(b);b=[b.getPropertyValue("--temp-sai-top"),b.getPropertyValue("--temp-sai-right"),b.getPropertyValue("--temp-sai-bottom"),b.getPropertyValue("--temp-sai-left")].map(c=>{c=parseInt(c,10);
return isFinite(c)?c:0});a.removeProperty("--temp-sai-top");a.removeProperty("--temp-sai-right");a.removeProperty("--temp-sai-bottom");a.removeProperty("--temp-sai-left");return b}
self.B.X(class extends self.L{constructor(b){super(b,"platform-info");p(this,[["get-initial-state",()=>this.qa()],["request-wake-lock",()=>Qa(this)],["release-wake-lock",()=>{this.D&&(this.D.release(),this.D=null)}]]);window.addEventListener("resize",()=>{k(this,"window-resize",{windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,safeAreaInset:Ra()})});this.D=null}qa(){return{screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,
safeAreaInset:Ra(),supportsWakeLock:!!navigator.wakeLock}}});
