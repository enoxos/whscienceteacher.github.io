'use strict';function r(h,e,k,n){h.c.ja(h.J,e,k,n,void 0)}function C(h,e,k,n){h.c.i?r(h,e,k,n):h.c.Bb()._OnMessageFromDOM({type:"event",component:h.J,handler:e,dispatchOpts:n||null,data:k,responseId:null})}function L(h,e,k){h.c.b(h.J,e,k)}function M(h,e){for(const [k,n]of e)L(h,k,n)}window.ha=class{constructor(h,e){this.c=h;this.J=e}Ia(){}};
window.ob=class{constructor(h,e){this.Xa=h;this.kc=e;this.B=-1;this.Y=-Infinity;this.pc=()=>{this.B=-1;this.Y=Date.now();this.K=!0;this.Xa();this.K=!1};this.Ya=this.K=!1}};"use strict";function N(h,e){L(h,"get-element",k=>{const n=h.h.get(k.elementId);return e(n,k)})}
window.Dc=class extends self.ha{constructor(h,e){super(h,e);this.h=new Map;this.wa=!0;M(this,[["create",()=>{throw Error("required override");}],["destroy",k=>{{k=k.elementId;const n=this.h.get(k);this.wa&&n.parentElement.removeChild(n);this.h.delete(k)}}],["set-visible",k=>{this.wa&&(this.h.get(k.elementId).style.display=k.isVisible?"":"none")}],["update-position",k=>{if(this.wa){var n=this.h.get(k.elementId);n.style.left=k.left+"px";n.style.top=k.top+"px";n.style.width=k.width+"px";n.style.height=
k.height+"px";k=k.fontSize;null!==k&&(n.style.fontSize=k+"em")}}],["update-state",k=>{this.h.get(k.elementId);throw Error("required override");}],["focus",k=>this.sa(k)],["set-css-style",k=>{this.h.get(k.elementId).style[k.prop]=k.val}],["set-attribute",k=>{this.h.get(k.elementId).setAttribute(k.name,k.val)}],["remove-attribute",k=>{this.h.get(k.elementId).removeAttribute(k.name)}]]);N(this,k=>k)}sa(h){var e=this.h.get(h.elementId);h.focus?e.focus():e.blur()}};"use strict";
{const h=/(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),e=/android/i.test(navigator.userAgent);let k=0;function n(g){const a=document.createElement("script");a.async=!1;a.type="module";return g.uc?new Promise(d=>{const f="c3_resolve_"+k;++k;self[f]=d;a.textContent=g.xc+`\n\nself["${f}"]();`;document.head.appendChild(a)}):new Promise((d,f)=>{a.onload=d;a.onerror=f;a.src=g;document.head.appendChild(a)})}let v=!1,E=!1;function J(){if(!v){try{new Worker("blob://",{get type(){E=
!0}})}catch(g){}v=!0}return E}let w=new Audio;const y={"audio/webm; codecs=opus":!!w.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!w.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!w.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!w.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!w.canPlayType("audio/mp4"),"audio/mpeg":!!w.canPlayType("audio/mpeg")};w=null;async function K(g){g=await G(g);return(new TextDecoder("utf-8")).decode(g)}
function G(g){return new Promise((a,d)=>{const f=new FileReader;f.onload=l=>a(l.target.result);f.onerror=l=>d(l);f.readAsArrayBuffer(g)})}const x=[];let z=0;window.RealFile=window.File;const A=[],t=new Map,B=new Map;let D=0;const H=[];self.runOnStartup=function(g){if("function"!==typeof g)throw Error("runOnStartup called without a function");H.push(g)};const b=new Set(["cordova","playable-ad","instant-games"]);let c=!1;window.F=class g{constructor(a){this.i=a.zc;this.M=null;this.f="";this.da=a.wc;
this.R={};this.Aa=this.fb=null;this.W=[];this.g=this.Da=null;this.$a=!1;this.L=null;this.v=-1;this.oc=()=>this.Wb();this.eb=[];this.a=a.gb;this.X="file"===location.protocol.substr(0,4);!this.i||"undefined"!==typeof OffscreenCanvas&&navigator.userActivation&&J()||(this.i=!1);if("playable-ad"===this.a||"instant-games"===this.a)this.i=!1;if("cordova"===this.a&&this.i)if(e){const d=/Chrome\/(\d+)/i.exec(navigator.userAgent);d&&90<=parseInt(d[1],10)||(this.i=!1)}else this.i=!1;this.$=this.l=null;"html5"!==
this.a&&"playable-ad"!==this.a||!this.X||alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)");"html5"!==this.a||window.isSecureContext||console.warn("[Construct 3] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");this.b("runtime","cordova-fetch-local-file",d=>this.Hb(d));this.b("runtime",
"create-job-worker",()=>this.Ib());"cordova"===this.a?document.addEventListener("deviceready",()=>this.Na(a)):this.Na(a)}lb(){return h&&"cordova"===this.a}ia(){const a=navigator.userAgent;return h&&b.has(this.a)||navigator.standalone||/crios\/|fxios\/|edgios\//i.test(a)}jb(){return e}Ka(){return e&&b.has(this.a)}async Na(a){"macos-wkwebview"===this.a&&this.va({type:"ready"});if("playable-ad"===this.a){this.l=self.c3_base64files;this.$={};await this.vb();for(let f=0,l=a.C.length;f<l;++f){var d=a.C[f].toLowerCase();
this.$.hasOwnProperty(d)?a.C[f]={uc:!0,xc:this.$[d]}:this.l.hasOwnProperty(d)&&(a.C[f]=URL.createObjectURL(this.l[d]))}}a.qc?this.f=a.qc:(d=location.origin,this.f=("null"===d?"file:///":d)+location.pathname,d=this.f.lastIndexOf("/"),-1!==d&&(this.f=this.f.substr(0,d+1)));a.Bc&&(this.R=a.Bc);d=new MessageChannel;this.M=d.port1;this.M.onmessage=f=>this._OnMessageFromRuntime(f.data);window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(f=>this.Tb(f));this.L=new self.mb(this);await O(this.L);
"object"===typeof window.StatusBar&&window.StatusBar.hide();"object"===typeof window.AndroidFullScreen&&window.AndroidFullScreen.immersiveMode();this.i?await this.Db(a,d.port2):await this.Cb(a,d.port2)}la(a){a=this.R.hasOwnProperty(a)?this.R[a]:a.endsWith("/workermain.js")&&this.R.hasOwnProperty("workermain.js")?this.R["workermain.js"]:"playable-ad"===this.a&&this.l.hasOwnProperty(a.toLowerCase())?this.l[a.toLowerCase()]:a;a instanceof Blob&&(a=URL.createObjectURL(a));return a}async ga(a,d,f){if(a.startsWith("blob:"))return new Worker(a,
f);if("cordova"===this.a&&this.X)return a=await this.fa(f.tc?a:this.da+a),new Worker(URL.createObjectURL(new Blob([a],{type:"application/javascript"})),f);a=new URL(a,d);if(location.origin!==a.origin){a=await fetch(a);if(!a.ok)throw Error("failed to fetch worker script");a=await a.blob();return new Worker(URL.createObjectURL(a),f)}return new Worker(a,f)}m(){return Math.max(window.innerWidth,1)}j(){return Math.max(window.innerHeight,1)}Ma(a){var d=this.L;return{baseUrl:this.f,previewUrl:location.href,
windowInnerWidth:this.m(),windowInnerHeight:this.j(),devicePixelRatio:window.devicePixelRatio,isFullscreen:g.D(),projectData:a.Jc,previewImageBlobs:window.cr_previewImageBlobs||this.l,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,previewProjectFileSWUrls:window.cr_previewProjectFiles,swClientId:window.Hc||"",exportType:a.gb,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.Ic,jobScheduler:{inputPort:d.za,outputPort:d.Ca,maxNumWorkers:d.mc},supportedAudioFormats:y,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||
this.da+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.da+"opus.wasm.wasm",isFileProtocol:this.X,isiOSCordova:this.lb(),isiOSWebView:this.ia(),isFBInstantAvailable:"undefined"!==typeof self.FBInstant}}async Db(a,d){var f=this.la(a.Ac);this.fb=await this.ga(f,this.f,{type:"module",name:"Runtime",tc:!0});this.g=document.createElement("canvas");this.g.style.display="none";f=this.g.transferControlToOffscreen();document.body.appendChild(this.g);window.c3canvas=this.g;let l=a.Ga||[],
q=a.C;l=await Promise.all(l.map(m=>this.s(m)));q=await Promise.all(q.map(m=>this.s(m)));if("cordova"===this.a)for(let m=0,p=a.ea.length;m<p;++m){const u=a.ea[m],I=u[0];if(I===a.Fa||"scriptsInEvents.js"===I||I.endsWith("/scriptsInEvents.js"))u[1]=await this.s(I)}this.fb.postMessage(Object.assign(this.Ma(a),{type:"init-runtime",isInWorker:!0,messagePort:d,canvas:f,workerDependencyScripts:l,engineScripts:q,projectScripts:a.ea,mainProjectScript:a.Fa,projectScriptsStatus:self.C3_ProjectScriptsStatus}),
[d,f,...P(this.L)]);this.W=A.map(m=>new m(this));this.La();self.c3_callFunction=(m,p)=>this.Da.Eb(m,p);"preview"===this.a&&(self.goToLastErrorScript=()=>this.ja("runtime","go-to-last-error-script"))}async Cb(a,d){this.g=document.createElement("canvas");this.g.style.display="none";document.body.appendChild(this.g);window.c3canvas=this.g;this.W=A.map(m=>new m(this));this.La();var f=a.C.map(m=>"string"===typeof m?(new URL(m,this.f)).toString():m);Array.isArray(a.Ga)&&f.unshift(...a.Ga);f=await Promise.all(f.map(m=>
this.s(m)));await Promise.all(f.map(m=>n(m)));f=self.C3_ProjectScriptsStatus;const l=a.Fa,q=a.ea;for(let [m,p]of q)if(p||(p=m),m===l)try{p=await this.s(p),await n(p),"preview"!==this.a||f[m]||this.Ta(m,"main script did not run to completion")}catch(u){this.Ta(m,u)}else if("scriptsInEvents.js"===m||m.endsWith("/scriptsInEvents.js"))p=await this.s(p),await n(p);"preview"===this.a&&"object"!==typeof self.Cc.Ec?(this.U(),console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."),
alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")):(a=Object.assign(this.Ma(a),{isInWorker:!1,messagePort:d,canvas:this.g,runOnStartupFunctions:H}),this.Pa(),this.Aa=self.C3_CreateRuntime(a),await self.C3_InitRuntime(this.Aa,a))}Ta(a,d){this.U();console.error(`[Preview] Failed to load project main script (${a}): `,d);alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)}Pa(){this.U()}U(){const a=
window.rc;a&&(a.parentElement.removeChild(a),window.rc=null)}async Ib(){const a=await Q(this.L);return{outputPort:a,transferables:[a]}}Bb(){if(this.i)throw Error("not available in worker mode");return this.Aa}ja(a,d,f,l,q){this.M.postMessage({type:"event",component:a,handler:d,dispatchOpts:l||null,data:f,responseId:null},q)}nb(a,d){const f=D++,l=new Promise((q,m)=>{B.set(f,{resolve:q,reject:m})});this.M.postMessage({type:"event",component:a,handler:"js-invoke-function",dispatchOpts:null,data:d,responseId:f},
void 0);return l}["_OnMessageFromRuntime"](a){const d=a.type;if("event"===d)return this.Nb(a);if("result"===d)this.Zb(a);else if("runtime-ready"===d)this.$b();else if("alert-error"===d)this.U(),alert(a.message);else if("creating-runtime"===d)this.Pa();else throw Error(`unknown message '${d}'`);}Nb(a){const d=a.component,f=a.handler,l=a.data,q=a.responseId;if(a=t.get(d))if(a=a.get(f)){var m=null;try{m=a(l)}catch(p){console.error(`Exception in '${d}' handler '${f}':`,p);null!==q&&this.T(q,!1,""+p);
return}if(null===q)return m;m&&m.then?m.then(p=>this.T(q,!0,p)).catch(p=>{console.error(`Rejection from '${d}' handler '${f}':`,p);this.T(q,!1,""+p)}):this.T(q,!0,m)}else console.warn(`[DOM] No handler '${f}' for component '${d}'`);else console.warn(`[DOM] No event handlers for component '${d}'`)}T(a,d,f){let l;f&&f.transferables&&(l=f.transferables);this.M.postMessage({type:"result",responseId:a,isOk:d,result:f},l)}Zb(a){const d=a.responseId,f=a.isOk;a=a.result;const l=B.get(d);f?l.resolve(a):l.reject(a);
B.delete(d)}b(a,d,f){let l=t.get(a);l||(l=new Map,t.set(a,l));if(l.has(d))throw Error(`[DOM] Component '${a}' already has handler '${d}'`);l.set(d,f)}static Ha(a){if(A.includes(a))throw Error("DOM handler already added");A.push(a)}La(){for(const a of this.W)if("runtime"===a.J){this.Da=a;return}throw Error("cannot find runtime DOM handler");}Tb(a){this.ja("debugger","message",a)}$b(){for(const a of this.W)a.Ia()}static D(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||
c)}static V(a){c=!!a}Ua(){-1===this.v&&this.eb.length&&(this.v=requestAnimationFrame(this.oc))}tb(){-1!==this.v&&(cancelAnimationFrame(this.v),this.v=-1)}Wb(){this.v=-1;for(const a of this.eb)a();this.Ua()}ua(){this.Da.ua()}pb(){this.$a=!0}ib(a){return/^(?:[a-z\-]+:)?\/\//.test(a)||"data:"===a.substr(0,5)||"blob:"===a.substr(0,5)}kb(a){return!this.ib(a)}async s(a){return"cordova"===this.a&&(a.startsWith("file:")||this.X&&this.kb(a))?(a.startsWith(this.f)&&(a=a.substr(this.f.length)),a=await this.fa(a),
URL.createObjectURL(new Blob([a],{type:"application/javascript"}))):a}async Hb(a){const d=a.filename;switch(a.as){case "text":return await this.hb(d);case "buffer":return await this.fa(d);default:throw Error("unsupported type");}}Ja(a){const d=window.cordova.file.applicationDirectory+"www/"+a.toLowerCase();return new Promise((f,l)=>{window.resolveLocalFileSystemURL(d,q=>{q.file(f,l)},l)})}async hb(a){a=await this.Ja(a);return await K(a)}ka(){if(x.length&&!(8<=z)){z++;var a=x.shift();this.wb(a.filename,
a.yc,a.sc)}}fa(a){return new Promise((d,f)=>{x.push({filename:a,yc:l=>{z--;this.ka();d(l)},sc:l=>{z--;this.ka();f(l)}});this.ka()})}async wb(a,d,f){try{const l=await this.Ja(a),q=await G(l);d(q)}catch(l){f(l)}}va(a){if("windows-webview2"===this.a)window.chrome.webview.postMessage(JSON.stringify(a));else if("macos-wkwebview"===this.a)window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));else throw Error("cannot send wrapper message");}async vb(){const a=[];for(const [d,f]of Object.entries(this.l))a.push(this.ub(d,
f));await Promise.all(a)}async ub(a,d){if("object"===typeof d)this.l[a]=new Blob([d.str],{type:d.type}),this.$[a]=d.str;else{let f=await this.Ab(d);f||(f=this.xb(d));this.l[a]=f}}async Ab(a){try{return await (await fetch(a)).blob()}catch(d){return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",d),null}}xb(a){a=this.ec(a);return this.sb(a.data,
a.vc)}ec(a){var d=a.indexOf(",");if(0>d)throw new URIError("expected comma in data: uri");var f=a.substring(d+1);d=a.substring(5,d).split(";");a=d[0]||"";const l=d[2];f="base64"===d[1]||"base64"===l?atob(f):decodeURIComponent(f);return{vc:a,data:f}}sb(a,d){var f=a.length;let l=f>>2,q=new Uint8Array(f),m=new Uint32Array(q.buffer,0,l),p,u;for(u=p=0;p<l;++p)m[p]=a.charCodeAt(u++)|a.charCodeAt(u++)<<8|a.charCodeAt(u++)<<16|a.charCodeAt(u++)<<24;for(f&=3;f--;)q[u]=a.charCodeAt(u),++u;return new Blob([q],
{type:d})}}}"use strict";
{const h=self.F;function e(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}const k=new Map([["OSLeft","MetaLeft"],["OSRight","MetaRight"]]),n={dispatchRuntimeEvent:!0,dispatchUserScriptEvent:!0},v={dispatchUserScriptEvent:!0},E={dispatchRuntimeEvent:!0};function J(b){return new Promise((c,g)=>{const a=document.createElement("link");a.onload=()=>c(a);a.onerror=d=>g(d);a.rel=
"stylesheet";a.href=b;document.head.appendChild(a)})}function w(b){return new Promise((c,g)=>{const a=new Image;a.onload=()=>c(a);a.onerror=d=>g(d);a.src=b})}async function y(b){b=URL.createObjectURL(b);try{return await w(b)}finally{URL.revokeObjectURL(b)}}function K(b){return new Promise((c,g)=>{let a=new FileReader;a.onload=d=>c(d.target.result);a.onerror=d=>g(d);a.readAsText(b)})}async function G(b,c,g){if(!/firefox/i.test(navigator.userAgent))return await y(b);var a=await K(b);a=(new DOMParser).parseFromString(a,
"image/svg+xml");const d=a.documentElement;if(d.hasAttribute("width")&&d.hasAttribute("height")){const f=d.getAttribute("width"),l=d.getAttribute("height");if(!f.includes("%")&&!l.includes("%"))return await y(b)}d.setAttribute("width",c+"px");d.setAttribute("height",g+"px");a=(new XMLSerializer).serializeToString(a);b=new Blob([a],{type:"image/svg+xml"});return await y(b)}function x(b){do{if(b.parentNode&&b.hasAttribute("contenteditable"))return!0;b=b.parentNode}while(b);return!1}const z=new Set(["input",
"textarea","datalist","select"]),A=new Set(["canvas","body","html"]);function t(b){A.has(b.target.tagName.toLowerCase())&&b.preventDefault()}function B(b){(b.metaKey||b.ctrlKey)&&b.preventDefault()}self.C3_GetSvgImageSize=async function(b){b=await y(b);if(0<b.width&&0<b.height)return[b.width,b.height];{b.style.position="absolute";b.style.left="0px";b.style.top="0px";b.style.visibility="hidden";document.body.appendChild(b);const c=b.getBoundingClientRect();document.body.removeChild(b);return[c.width,
c.height]}};self.C3_RasterSvgImageBlob=async function(b,c,g,a,d){b=await G(b,c,g);const f=document.createElement("canvas");f.width=a;f.height=d;f.getContext("2d").drawImage(b,0,0,c,g);return f};let D=!1;document.addEventListener("pause",()=>D=!0);document.addEventListener("resume",()=>D=!1);function H(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}h.Ha(class extends self.ha{constructor(b){super(b,"runtime");this.ab=!0;this.A=-1;this.Ea="any";this.Va=this.Wa=!1;this.o=
null;this.Za="";this.ya=-1;this.u=this.O=null;this.ba=this.aa=0;this.cb=b.m();this.Z=b.j();this.P=0;b.b("canvas","update-size",a=>this.bc(a));b.b("runtime","invoke-download",a=>this.Sb(a));b.b("runtime","raster-svg-image",a=>this.Xb(a));b.b("runtime","get-svg-image-size",a=>this.Qb(a));b.b("runtime","set-target-orientation",a=>this.ac(a));b.b("runtime","register-sw",()=>this.Yb());b.b("runtime","post-to-debugger",a=>this.Ra(a));b.b("runtime","go-to-script",a=>this.Ra(a));b.b("runtime","before-start-ticking",
()=>this.Gb());b.b("runtime","debug-highlight",a=>this.Jb(a));b.b("runtime","enable-device-orientation",()=>this.rb());b.b("runtime","enable-device-motion",()=>this.qb());b.b("runtime","add-stylesheet",a=>this.Fb(a));b.b("runtime","alert",a=>this.na(a));b.b("runtime","hide-cordova-splash",()=>this.Rb());b.b("runtime","set-exporting-to-video",a=>this.hc(a));b.b("runtime","export-to-video-progress",a=>this.Ob(a));b.b("runtime","exported-to-video",a=>this.Pb(a));const c=new Set(["input","textarea","datalist"]);
window.addEventListener("contextmenu",a=>{const d=a.target;c.has(d.tagName.toLowerCase())||x(d)||a.preventDefault()});const g=b.g;window.addEventListener("selectstart",t);window.addEventListener("gesturehold",t);g.addEventListener("selectstart",t);g.addEventListener("gesturehold",t);window.addEventListener("touchstart",t,{passive:!1});"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",t,{passive:!1}),g.addEventListener("pointerdown",t)):g.addEventListener("touchstart",t);this.N=
0;window.addEventListener("mousedown",a=>{1===a.button&&a.preventDefault()});window.addEventListener("mousewheel",B,{passive:!1});window.addEventListener("wheel",B,{passive:!1});window.addEventListener("resize",()=>this.cc());window.addEventListener("fullscreenchange",()=>this.G());window.addEventListener("webkitfullscreenchange",()=>this.G());window.addEventListener("mozfullscreenchange",()=>this.G());window.addEventListener("fullscreenerror",a=>this.pa(a));window.addEventListener("webkitfullscreenerror",
a=>this.pa(a));window.addEventListener("mozfullscreenerror",a=>this.pa(a));if(b.ia())if(window.visualViewport){let a=Infinity;window.visualViewport.addEventListener("resize",()=>{const d=window.visualViewport.height;d>a&&(document.scrollingElement.scrollTop=0);a=d})}else window.addEventListener("focusout",()=>{{const f=document.activeElement;if(f){var a=f.tagName.toLowerCase();var d=new Set("email number password search tel text url".split(" "));a="textarea"===a?!0:"input"===a?d.has(f.type.toLowerCase()||
"text"):x(f)}else a=!1}a||(document.scrollingElement.scrollTop=0)});self.C3WrapperOnMessage=a=>this.dc(a);this.Ba=new Set;this.nc=new WeakSet;this.lc=!1}Gb(){"cordova"===this.c.a?(document.addEventListener("pause",()=>this.ta(!0)),document.addEventListener("resume",()=>this.ta(!1))):document.addEventListener("visibilitychange",()=>this.ta(document.hidden));return{isSuspended:!(!document.hidden&&!D)}}Ia(){window.addEventListener("focus",()=>this.I("window-focus"));window.addEventListener("blur",()=>
{this.I("window-blur",{parentHasFocus:H()});this.N=0});window.addEventListener("focusin",c=>{c=c.target;(z.has(c.tagName.toLowerCase())||x(c))&&this.I("keyboard-blur")});window.addEventListener("keydown",c=>this.Qa("keydown",c));window.addEventListener("keyup",c=>this.Qa("keyup",c));window.addEventListener("dblclick",c=>this.qa("dblclick",c,n));window.addEventListener("wheel",c=>this.Ub(c));"undefined"!==typeof PointerEvent?(window.addEventListener("pointerdown",c=>{this.ma(c);this.H("pointerdown",
c)}),this.c.i&&"undefined"!==typeof window.onpointerrawupdate&&self===self.top?(this.O=new self.ob(()=>this.yb(),5),this.O.Ya=!0,window.addEventListener("pointerrawupdate",c=>this.Vb(c))):window.addEventListener("pointermove",c=>this.H("pointermove",c)),window.addEventListener("pointerup",c=>this.H("pointerup",c)),window.addEventListener("pointercancel",c=>this.H("pointercancel",c))):(window.addEventListener("mousedown",c=>{this.ma(c);this.ra("pointerdown",c)}),window.addEventListener("mousemove",
c=>this.ra("pointermove",c)),window.addEventListener("mouseup",c=>this.ra("pointerup",c)),window.addEventListener("touchstart",c=>{this.ma(c);this.S("pointerdown",c)}),window.addEventListener("touchmove",c=>this.S("pointermove",c)),window.addEventListener("touchend",c=>this.S("pointerup",c)),window.addEventListener("touchcancel",c=>this.S("pointercancel",c)));const b=()=>this.ua();window.addEventListener("pointerup",b,!0);window.addEventListener("touchend",b,!0);window.addEventListener("click",b,
!0);window.addEventListener("keydown",b,!0);window.addEventListener("gamepadconnected",b,!0);this.c.jb()&&!this.c.Ka()&&navigator.virtualKeyboard&&(navigator.virtualKeyboard.overlaysContent=!0,navigator.virtualKeyboard.addEventListener("geometrychange",()=>{this.oa(this.j(),navigator.virtualKeyboard.boundingRect.height)}))}oa(b,c){document.body.style.transform="";if(0<c){var g=document.activeElement;g&&(g=g.getBoundingClientRect(),b=(g.top+g.bottom)/2-(b-c)/2,b>c&&(b=c),0>b&&(b=0),0<b&&(document.body.style.transform=
`translateY(${-b}px)`))}}I(b,c){r(this,b,c||null,E)}m(){return this.c.m()}j(){return this.c.j()}cc(){const b=this.m(),c=this.j();if(this.c.Ka()){if(this.cb===b&&c<this.Z){this.P=this.Z-c;this.oa(this.Z,this.P);return}0<this.P&&(this.P=0,this.oa(c,this.P));this.cb=b;this.Z=c}this.I("window-resize",{innerWidth:b,innerHeight:c,devicePixelRatio:window.devicePixelRatio,isFullscreen:h.D()});this.c.ia()&&(-1!==this.A&&clearTimeout(this.A),this.Sa(b,c,0))}fc(b,c,g){-1!==this.A&&clearTimeout(this.A);this.A=
setTimeout(()=>this.Sa(b,c,g),48)}Sa(b,c,g){const a=this.m(),d=this.j();this.A=-1;a!=b||d!=c?this.I("window-resize",{innerWidth:a,innerHeight:d,devicePixelRatio:window.devicePixelRatio,isFullscreen:h.D()}):10>g&&this.fc(a,d,g+1)}ac(b){this.Ea=b.targetOrientation}ic(){const b=this.Ea;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(b).catch(c=>console.warn("[Construct 3] Failed to lock orientation: ",c));else try{let c=!1;screen.lockOrientation?c=screen.lockOrientation(b):screen.webkitLockOrientation?
c=screen.webkitLockOrientation(b):screen.mozLockOrientation?c=screen.mozLockOrientation(b):screen.msLockOrientation&&(c=screen.msLockOrientation(b));c||console.warn("[Construct 3] Failed to lock orientation")}catch(c){console.warn("[Construct 3] Failed to lock orientation: ",c)}}G(){const b=h.D();b&&"any"!==this.Ea&&this.ic();r(this,"fullscreenchange",{isFullscreen:b,innerWidth:this.m(),innerHeight:this.j()})}pa(b){console.warn("[Construct 3] Fullscreen request failed: ",b);r(this,"fullscreenerror",
{isFullscreen:h.D(),innerWidth:this.m(),innerHeight:this.j()})}ta(b){b?this.c.tb():this.c.Ua();r(this,"visibilitychange",{hidden:b})}Qa(b,c){"Backspace"===c.key&&t(c);const g=k.get(c.code)||c.code;C(this,b,{code:g,key:c.key,which:c.which,repeat:c.repeat,altKey:c.altKey,ctrlKey:c.ctrlKey,metaKey:c.metaKey,shiftKey:c.shiftKey,timeStamp:c.timeStamp},n)}Ub(b){r(this,"wheel",{clientX:b.clientX,clientY:b.clientY,pageX:b.pageX,pageY:b.pageY,deltaX:b.deltaX,deltaY:b.deltaY,deltaZ:b.deltaZ,deltaMode:b.deltaMode,
timeStamp:b.timeStamp},n)}qa(b,c,g){e(c)||C(this,b,{button:c.button,buttons:c.buttons,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,movementX:c.movementX||0,movementY:c.movementY||0,timeStamp:c.timeStamp},g)}ra(b,c){if(!e(c)){var g=this.N;"pointerdown"===b&&0!==g?b="pointermove":"pointerup"===b&&0!==c.buttons&&(b="pointermove");C(this,b,{pointerId:1,pointerType:"mouse",button:c.button,buttons:c.buttons,lastButtons:g,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,
movementX:c.movementX||0,movementY:c.movementY||0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,timeStamp:c.timeStamp},n);this.N=c.buttons;this.qa(c.type,c,v)}}H(b,c){if(this.O&&"pointermove"!==b){var g=this.O;g.K||(-1!==g.B&&(self.clearTimeout(g.B),g.B=-1),g.Y=Date.now())}g=0;"mouse"===c.pointerType&&(g=this.N);C(this,b,{pointerId:c.pointerId,pointerType:c.pointerType,button:c.button,buttons:c.buttons,lastButtons:g,clientX:c.clientX,clientY:c.clientY,pageX:c.pageX,pageY:c.pageY,
movementX:(c.movementX||0)+this.aa,movementY:(c.movementY||0)+this.ba,width:c.width||0,height:c.height||0,pressure:c.pressure||0,tangentialPressure:c.tangentialPressure||0,tiltX:c.tiltX||0,tiltY:c.tiltY||0,twist:c.twist||0,timeStamp:c.timeStamp},n);this.ba=this.aa=0;"mouse"===c.pointerType&&(g="mousemove","pointerdown"===b?g="mousedown":"pointerup"===b&&(g="mouseup"),this.qa(g,c,v),this.N=c.buttons)}Vb(b){this.u&&(this.aa+=this.u.movementX||0,this.ba+=this.u.movementY||0);this.u=b;b=this.O;if(-1===
b.B){var c=Date.now(),g=c-b.Y,a=b.kc;g>=a&&b.Ya?(b.Y=c,b.K=!0,b.Xa(),b.K=!1):b.B=self.setTimeout(b.pc,Math.max(a-g,4))}}yb(){this.H("pointermove",this.u);this.u=null}S(b,c){for(let g=0,a=c.changedTouches.length;g<a;++g){const d=c.changedTouches[g];C(this,b,{pointerId:d.identifier,pointerType:"touch",button:0,buttons:0,lastButtons:0,clientX:d.clientX,clientY:d.clientY,pageX:d.pageX,pageY:d.pageY,movementX:c.movementX||0,movementY:c.movementY||0,width:2*(d.radiusX||d.webkitRadiusX||0),height:2*(d.radiusY||
d.webkitRadiusY||0),pressure:d.force||d.webkitForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:d.rotationAngle||0,timeStamp:c.timeStamp},n)}}ma(b){window!==window.top&&window.focus();this.Oa(b.target)&&document.activeElement&&!this.Oa(document.activeElement)&&document.activeElement.blur()}Oa(b){return!b||b===document||b===window||b===document.body||"canvas"===b.tagName.toLowerCase()}rb(){this.Wa||(this.Wa=!0,window.addEventListener("deviceorientation",b=>this.Lb(b)),window.addEventListener("deviceorientationabsolute",
b=>this.Mb(b)))}qb(){this.Va||(this.Va=!0,window.addEventListener("devicemotion",b=>this.Kb(b)))}Lb(b){r(this,"deviceorientation",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp,webkitCompassHeading:b.webkitCompassHeading,webkitCompassAccuracy:b.webkitCompassAccuracy},n)}Mb(b){r(this,"deviceorientationabsolute",{absolute:!!b.absolute,alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},n)}Kb(b){let c=null;var g=b.acceleration;g&&(c=
{x:g.x||0,y:g.y||0,z:g.z||0});g=null;var a=b.accelerationIncludingGravity;a&&(g={x:a.x||0,y:a.y||0,z:a.z||0});a=null;const d=b.rotationRate;d&&(a={alpha:d.alpha||0,beta:d.beta||0,gamma:d.gamma||0});r(this,"devicemotion",{acceleration:c,accelerationIncludingGravity:g,rotationRate:a,interval:b.interval,timeStamp:b.timeStamp},n)}bc(b){var c=this.c;c.$a||(c=c.g,c.style.width=b.styleWidth+"px",c.style.height=b.styleHeight+"px",c.style.marginLeft=b.marginLeft+"px",c.style.marginTop=b.marginTop+"px",this.ab&&
(c.style.display="",this.ab=!1))}Sb(b){const c=b.url;b=b.filename;const g=document.createElement("a"),a=document.body;g.textContent=b;g.href=c;g.download=b;a.appendChild(g);g.click();a.removeChild(g)}async Xb(b){var c=b.imageBitmapOpts;b=await self.C3_RasterSvgImageBlob(b.blob,b.imageWidth,b.imageHeight,b.surfaceWidth,b.surfaceHeight);c=c?await createImageBitmap(b,c):await createImageBitmap(b);return{imageBitmap:c,transferables:[c]}}async Qb(b){return await self.C3_GetSvgImageSize(b.blob)}async Fb(b){await J(b.url)}ua(){var b=
[...this.Ba];this.Ba.clear();if(!this.lc)for(const c of b)(b=c.play())&&b.catch(()=>{this.nc.has(c)||this.Ba.add(c)})}Rb(){navigator.splashscreen&&navigator.splashscreen.hide&&navigator.splashscreen.hide()}Jb(b){if(b.show){this.o||(this.o=document.createElement("div"),this.o.id="inspectOutline",document.body.appendChild(this.o));var c=this.o;c.style.display="";c.style.left=b.left-1+"px";c.style.top=b.top-1+"px";c.style.width=b.width+2+"px";c.style.height=b.height+2+"px";c.textContent=b.name}else this.o&&
(this.o.style.display="none")}Yb(){window.C3_RegisterSW&&window.C3_RegisterSW()}Ra(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}Eb(b,c){return this.c.nb(this.J,{name:b,params:c})}na(b){alert(b.message)}dc(b){"entered-fullscreen"===b?(h.V(!0),this.G()):"exited-fullscreen"===b?(h.V(!1),this.G()):console.warn("Unknown wrapper message: ",b)}hc(b){const c=document.createElement("h1");c.id="exportToVideoMessage";c.textContent=b.message;document.body.prepend(c);document.body.classList.add("exportingToVideo");
this.c.g.style.display="";this.c.pb()}Ob(b){this.Za=b.message;-1===this.ya&&(this.ya=setTimeout(()=>this.zb(),250))}zb(){this.ya=-1;const b=document.getElementById("exportToVideoMessage");b&&(b.textContent=this.Za)}Pb(b){window.Gc({type:"exported-video",blob:b.blob,time:b.time})}})}"use strict";
async function O(h){if(h.jc)throw Error("already initialised");h.jc=!0;var e=h.ca.la("dispatchworker.js");h.xa=await h.ca.ga(e,h.f,{name:"DispatchWorker"});e=new MessageChannel;h.za=e.port1;h.xa.postMessage({type:"_init","in-port":e.port2},[e.port2]);h.Ca=await Q(h)}function P(h){return[h.za,h.Ca]}
async function Q(h){const e=h.bb.length;var k=h.ca.la("jobworker.js");k=await h.ca.ga(k,h.f,{name:"JobWorker"+e});const n=new MessageChannel,v=new MessageChannel;h.xa.postMessage({type:"_addJobWorker",port:n.port1},[n.port1]);k.postMessage({type:"init",number:e,"dispatch-port":n.port2,"output-port":v.port2},[n.port2,v.port2]);h.bb.push(k);return v.port1}
self.mb=class{constructor(h){this.ca=h;this.f=h.f;this.f="preview"===h.a?this.f+"workers/":this.f+h.da;this.mc=Math.min(navigator.hardwareConcurrency||2,16);this.xa=null;this.bb=[];this.Ca=this.za=null}};"use strict";window.C3_IsSupported&&(window.c3_runtimeInterface=new self.F({zc:!0,Ac:"workermain.js",C:["scripts/c3runtime.js"],ea:[],Fa:"",wc:"scripts/",Ga:[],gb:"html5"}));"use strict";
function R(h){window.C3_RegisterSW&&window.OfflineClientInfo&&window.OfflineClientInfo.SetMessageCallback(e=>r(h,"sw-message",e.data))}
function S(h){h=h.orientation;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(h).catch(e=>console.warn("[Construct 3] Failed to lock orientation: ",e));else try{let e=!1;screen.lockOrientation?e=screen.lockOrientation(h):screen.webkitLockOrientation?e=screen.webkitLockOrientation(h):screen.mozLockOrientation?e=screen.mozLockOrientation(h):screen.msLockOrientation&&(e=screen.msLockOrientation(h));e||console.warn("[Construct 3] Failed to lock orientation")}catch(e){console.warn("[Construct 3] Failed to lock orientation: ",
e)}}
self.F.Ha(class extends self.ha{constructor(h){super(h,"browser");this.a="";M(this,[["get-initial-state",e=>{this.a=e.exportType;return{location:location.toString(),isOnline:!!navigator.onLine,referrer:document.referrer,title:document.title,isCookieEnabled:!!navigator.cookieEnabled,screenWidth:screen.width,screenHeight:screen.height,windowOuterWidth:window.outerWidth,windowOuterHeight:window.outerHeight,isConstructArcade:"undefined"!==typeof window.is_scirra_arcade}}],["ready-for-sw-messages",()=>
R(this)],["alert",e=>this.na(e)],["close",()=>{navigator.app&&navigator.app.exitApp?navigator.app.exitApp():navigator.device&&navigator.device.exitApp?navigator.device.exitApp():window.close()}],["set-focus",e=>this.sa(e)],["vibrate",e=>{navigator.vibrate&&navigator.vibrate(e.pattern)}],["lock-orientation",e=>S(e)],["unlock-orientation",()=>{try{screen.orientation&&screen.orientation.unlock?screen.orientation.unlock():screen.unlockOrientation?screen.unlockOrientation():screen.webkitUnlockOrientation?
screen.webkitUnlockOrientation():screen.mozUnlockOrientation?screen.mozUnlockOrientation():screen.msUnlockOrientation&&screen.msUnlockOrientation()}catch(e){}}],["navigate",e=>{var k=e.type;if("back"===k)navigator.app&&navigator.app.backHistory?navigator.app.backHistory():window.history.back();else if("forward"===k)window.history.forward();else if("reload"===k)location.reload();else if("url"===k){k=e.url;const n=e.target;e=e.exportType;self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(k,
"_system"):"preview"===e||"windows-webview2"===e?window.open(k,"_blank"):this.Fc||(2===n?window.top.location=k:1===n?window.parent.location=k:window.location=k)}else"new-window"===k&&(k=e.url,e=e.tag,self.cordova&&self.cordova.InAppBrowser?self.cordova.InAppBrowser.open(k,"_system"):window.open(k,e))}],["request-fullscreen",e=>{if("windows-webview2"===this.a||"macos-wkwebview"===this.a)self.F.V(!0),this.c.va({type:"set-fullscreen",fullscreen:!0});else{const k={navigationUI:"auto"};e=e.navUI;1===e?
k.navigationUI="hide":2===e&&(k.navigationUI="show");e=document.documentElement;e.requestFullscreen?e.requestFullscreen(k):e.mozRequestFullScreen?e.mozRequestFullScreen(k):e.msRequestFullscreen?e.msRequestFullscreen(k):e.webkitRequestFullScreen&&("undefined"!==typeof Element.ALLOW_KEYBOARD_INPUT?e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):e.webkitRequestFullScreen())}}],["exit-fullscreen",()=>{"windows-webview2"===this.a||"macos-wkwebview"===this.a?(self.F.V(!1),this.c.va({type:"set-fullscreen",
fullscreen:!1})):document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}],["set-hash",e=>{location.hash=e.hash}]]);window.addEventListener("online",()=>{r(this,"online-state",{isOnline:!0})});window.addEventListener("offline",()=>{r(this,"online-state",{isOnline:!1})});window.addEventListener("hashchange",()=>{r(this,"hashchange",
{location:location.toString()})});document.addEventListener("backbutton",()=>{r(this,"backbutton")})}na(h){alert(h.message)}sa(h){h=h.isFocus;if("nwjs"===this.a){const e="nwjs"===this.a?nw.Window.get():null;h?e.focus():e.blur()}else h?window.focus():window.blur()}});
