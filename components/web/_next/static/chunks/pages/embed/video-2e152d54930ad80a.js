(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3126,4205,5319],{61357:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/video",function(){return n(22383)}])},1437:function(e,t,n){"use strict";n.d(t,{X:function(){return g}});var i=n(85893),s=n(86655),r=n(54284),a=n(85727),l=n(67294),o=n(5152),c=n.n(o),h=n(93967),u=n.n(h),d=n(95416),m=n.n(d);let f=c()(()=>Promise.all([n.e(3908),n.e(8018)]).then(n.t.bind(n,38018,23)),{loadableGenerated:{webpack:()=>[38018]},ssr:!1}),g=e=>{let t,{online:n,lastConnectTime:o,lastDisconnectTime:c,viewerCount:h,className:d}=e,[,g]=(0,l.useState)(new Date);(0,l.useEffect)(()=>{let e=setInterval(()=>g(new Date),1e3);return()=>{clearInterval(e)}},[]);let p="";if(n&&o){let e=function(e){let t=(0,s.y)({start:e,end:new Date});return t.days>=1?(0,r.L)({days:t.days,hours:t.hours>0?t.hours:0}):t.hours>=1?(0,r.L)({hours:t.hours,minutes:t.minutes>0?t.minutes:0}):(0,r.L)({minutes:t.minutes>0?t.minutes:0,seconds:t.seconds>0?t.seconds:0})}(new Date(o));p="Live for  ".concat(e),t=h>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:m().viewerIcon,children:(0,i.jsx)(f,{})}),(0,i.jsx)("span",{children:" ".concat(h)})]})}else!n&&(p="Offline",c&&(t="Last live ".concat((0,a.Q)(new Date(c))," ago.")));return(0,i.jsxs)("div",{className:u()(m().statusbar,d),role:"status",children:[(0,i.jsx)("span",{"aria-live":"off",className:m().onlineMessage,children:p}),(0,i.jsx)("span",{className:m().viewerCount,children:t})]})};g.defaultProps={lastConnectTime:null,lastDisconnectTime:null}},66421:function(e,t,n){"use strict";n.r(t),n.d(t,{OwncastPlayer:function(){return D}});var i=n(85893),s=n(67294),r=n(4480),a=n(46977),l=n(93967),o=n.n(l),c=n(4511),h=n(85215),u=n(77726),d=n.n(u);n(90169);let m=e=>{let{options:t,onReady:n}=e,r=s.useRef(null),a=s.useRef(null);return s.useEffect(()=>{var e;if(!a.current){let e=r.current,i=a.current=(0,h.Z)(e,t,()=>(console.debug("player is ready"),n&&n(i,h.Z)));i.autoplay(t.autoplay),i.src(t.sources)}(null===(e=h.Z.getPlayer(r.current).tech({IWillNotUseThisInPlugins:!0}))||void 0===e?void 0:e.vhs)&&(h.Z.getPlayer(r.current).tech({IWillNotUseThisInPlugins:!0}).vhs.xhr.beforeRequest=e=>{if(e.uri.match("m3u8")){let t=Math.random().toString(16).substr(2,8);e.uri="".concat(e.uri,"?cachebust=").concat(t)}return e})},[t,r]),(0,i.jsx)("div",{"data-vjs-player":!0,children:(0,i.jsx)("video",{ref:r,className:"video-js vjs-big-play-centered vjs-show-big-play-button-on-pause ".concat(d().player," vjs-owncast")})})};class f{start(){this.stop(),this.timer=setInterval(()=>{!function(){try{fetch("/api/ping")}catch(e){console.error(e)}}()},4e3)}stop(){clearInterval(this.timer)}}let g={position:"absolute",width:"100%",height:"100%"},p=e=>{let{src:t="",width:n,height:r,objectFit:a="fill",duration:l="1s",className:o}=e,c=(0,s.useMemo)(()=>({display:"inline-block",position:"relative",width:n,height:r}),[n,r]),h=(0,s.useMemo)(()=>[{...g,objectFit:a,opacity:0,transition:"opacity ".concat(l)},{...g,objectFit:a,opacity:1,transition:"opacity ".concat(l)},{...g,objectFit:a,opacity:0}],[a,l]),[u,d]=(0,s.useState)(0),[m,f]=(0,s.useState)(["",""]),p=t!==m[1]?t:"",y=()=>{d((u+1)%3),f([m[1],p])};return(0,i.jsx)("span",{style:c,className:o,children:[...m,p].map((e,t)=>""!==e&&(0,i.jsx)("img",{src:e,alt:"",style:h[t],onLoad:2===t?y:void 0},e))})};p.defaultProps={objectFit:"fill",duration:"3s"};var y=n(63313),b=n.n(y);let v=e=>{let t,{online:n,initialSrc:r,src:a}=e,[l,o]=(0,s.useState)(r),[c,h]=(0,s.useState)("0s");return(0,s.useEffect)(()=>{clearInterval(t),t=setInterval(()=>{"0s"===c&&h("3s"),o("".concat(a,"?").concat(Date.now()))},2e4)},[]),(0,i.jsxs)("div",{className:b().poster,children:[!n&&(0,i.jsx)("img",{src:r,alt:"logo"}),n&&(0,i.jsx)(p,{src:l,duration:c,objectFit:"contain",height:"auto",width:"100%",className:b().image})]})};var w=n(42588),T=n(14413);class k{stop(){clearInterval(this.sendMetricsTimer),this.player.off()}setClockSkew(e){this.clockSkewMs=e}videoJSReady(){let e=this.player.tech({IWillNotUseThisInPlugins:!0});this.supportsDetailedMetrics=!!e,null==e||e.on("usage",e=>{"vhs-unknown-waiting"===e.name&&this.setIsBuffering(!0),"vhs-rendition-change-abr"===e.name&&this.incrementQualityVariantChanges()}),this.player.textTracks().addEventListener("cuechange",()=>{this.incrementQualityVariantChanges()})}handlePlaying(){clearInterval(this.collectPlaybackMetricsTimer),this.collectPlaybackMetricsTimer=setInterval(()=>{this.collectPlaybackMetrics()},5e3)}handleEnded(){clearInterval(this.collectPlaybackMetricsTimer)}handleBuffering(){this.incrementErrorCount(1),this.setIsBuffering(!0)}handleNoLongerBuffering(){this.setIsBuffering(!1)}handleError(){this.incrementErrorCount(1)}incrementErrorCount(e){this.errors+=e}incrementQualityVariantChanges(){if(!this.hasPerformedInitialVariantChange){this.hasPerformedInitialVariantChange=!0;return}this.qualityVariantChanges++}setIsBuffering(e){if(this.isBuffering=e,!e){clearTimeout(this.bufferingDurationTimer);return}this.bufferingDurationTimer=setTimeout(()=>{this.incrementErrorCount(1)},500)}trackSegmentDownloadTime(e){this.segmentDownloadTime.push(e)}trackBandwidth(e){this.bandwidthTracking.push(e)}trackLatency(e){this.latencyTracking.push(e)}collectPlaybackMetrics(){let e=this.player.tech({IWillNotUseThisInPlugins:!0});if(!e||!e.vhs||this.player.paused()||2!==this.player.networkState())return;let t=e.vhs.systemBandwidth;this.trackBandwidth(t);try{let t=function(e){let t;let n=e.vhs.playlists.media(),i=e.currentTime();for(let e=0,s=n.segments.length;e<s;e++)if(i<n.segments[e].end){t=n.segments[e];break}return t||([t]=n.segments),t}(e);if(!t||!t.dateTimeObject)return;let n=t.dateTimeObject.getTime(),i=new Date().getTime()+this.clockSkewMs-n;if(i<0||i/1e3>=100)return;this.trackLatency(i)}catch(e){console.warn(e)}}async send(){let e;if(0===this.segmentDownloadTime.length||!this.player||this.player.paused())return;let t=this.errors;if(this.supportsDetailedMetrics){let n=e=>e.reduce((e,t)=>e+t,0)/e.length,i=n(this.segmentDownloadTime)/1e3;e={bandwidth:Math.round(n(this.bandwidthTracking)/1e3*1e3)/1e3,latency:Math.round(n(this.latencyTracking)/1e3*1e3)/1e3,downloadDuration:Math.round(1e3*i)/1e3,errors:t+(this.isBuffering?1:0),qualityVariantChanges:this.qualityVariantChanges}}else e={errors:t+(this.isBuffering?1:0)};this.errors=0,this.qualityVariantChanges=0,this.segmentDownloadTime=[],this.bandwidthTracking=[],this.latencyTracking=[];let n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};try{await fetch("/api/metrics/playback",n)}catch(e){console.error(e)}}constructor(e,t){var n=this;this.player=e,this.supportsDetailedMetrics=!1,this.hasPerformedInitialVariantChange=!1,this.clockSkewMs=0,this.segmentDownloadTime=[],this.bandwidthTracking=[],this.latencyTracking=[],this.errors=0,this.qualityVariantChanges=0,this.isBuffering=!1,this.bufferingDurationTimer=0,this.collectPlaybackMetricsTimer=0,this.videoJSReady=this.videoJSReady.bind(this),this.handlePlaying=this.handlePlaying.bind(this),this.handleBuffering=this.handleBuffering.bind(this),this.handleEnded=this.handleEnded.bind(this),this.handleError=this.handleError.bind(this),this.send=this.send.bind(this),this.collectPlaybackMetrics=this.collectPlaybackMetrics.bind(this),this.handleNoLongerBuffering=this.handleNoLongerBuffering.bind(this),this.sendMetricsTimer=0,this.player.on("canplaythrough",this.handleNoLongerBuffering),this.player.on("error",this.handleError),this.player.on("stalled",this.handleBuffering),this.player.on("waiting",this.handleBuffering),this.player.on("playing",this.handlePlaying),this.player.on("ended",this.handleEnded);let i=t.xhr;t.Vhs.xhr=function(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];if(t[0].uri.match(".ts")){let e=new Date,i=t[1];t[1]=(t,s,r)=>{let a=new Date().getTime()-e.getTime();n.trackSegmentDownloadTime(a),i(t,s,r)}}return i(...t)},this.videoJSReady(),this.sendMetricsTimer=setInterval(()=>{this.send()},1e4)}}class j{setClockSkew(e){this.clockSkewMs=e}check(){if(new Date().getTime()-this.startupTime.getTime()<1e4||this.player.paused()||this.player.seeking()||this.inTimeout||!this.enabled)return;let e=this.player.tech({IWillNotUseThisInPlugins:!0});if(!e||!e.vhs||2!==this.player.networkState())return;let t=0;try{if(0===e.vhs.stats.buffered.length){this.timeout();return}e.vhs.stats.buffered.forEach(e=>{t+=e.end-e.start})}catch(e){console.error(e)}let n=e.vhs.playlists.media().attributes.BANDWIDTH,i=e.vhs.systemBandwidth/n;try{let n=function(e){let t;let n=e.vhs.playlists.media(),i=e.currentTime();for(let e=0,s=n.segments.length;e<s;e++)if(i<n.segments[e].end){t=n.segments[e];break}return t||([t]=n.segments),t}(e);if(!n)return;if(i<1.8&&t<6*n.duration){this.timeout();return}let s=Math.max(4e3,1e3*n.duration*1.8),r=this.bufferedAtLatency.concat([s]),a=r.reduce((e,t)=>e+t,0)/r.length,l=Math.max(1.4*a,Math.min(1e3*n.duration*2.6,15e3));a>=l&&(l=a+3e3);let o=n.dateTimeObject.getTime(),c=new Date().getTime()+this.clockSkewMs-o;if(this.currentLatency=c,Math.abs(c)>8e4){this.timeout();return}if(c>l){if(this.shouldJumpToLive()&&c>l+5e3){let t=c/1e3-3*n.duration,i=this.player.currentTime()+t;console.info("latency",c/1e3,"jumping",t,"to live from ",this.player.currentTime()," to ",i);let s=e.vhs.stats.buffered[0].end,r=e.vhs.stats.buffered[0].start;if(i>r<s){this.jump(i);return}}let t=.33*i;(t=Math.max(Math.min(t,1.08),1))>this.playbackRate+.02&&(t=this.playbackRate+.02),t=Math.round(1e3*t)/1e3,this.start(t)}else c<=a&&this.stop();console.info("latency",c/1e3,"min",a/1e3,"max",l/1e3,"playback rate",this.playbackRate,"enabled:",this.enabled,"running: ",this.running,"skew: ",this.clockSkewMs,"rebuffer events: ",this.bufferingCounter)}catch(e){}}shouldJumpToLive(){return!(this.bufferingCounter>1)&&new Date().getTime()-this.lastJumpOccurred>2e4}jump(e){this.jumpingToLiveIgnoreBuffer=!0,this.performedInitialLiveJump=!0,this.lastJumpOccurred=new Date,console.info("current time",this.player.currentTime(),"seeking to",e),this.player.currentTime(e),setTimeout(()=>{this.jumpingToLiveIgnoreBuffer=!1},5e3)}setPlaybackRate(e){this.playbackRate=e,this.player.playbackRate(e)}start(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;!this.inTimeout&&this.enabled&&e!==this.playbackRate&&(this.running=!0,this.setPlaybackRate(e))}stop(){this.running&&console.log("stopping latency compensator..."),this.running=!1,this.setPlaybackRate(1)}enable(){this.enabled=!0,clearInterval(this.checkTimer),clearTimeout(this.bufferingTimer),this.checkTimer=setInterval(()=>{this.check()},3e3)}disable(){clearInterval(this.checkTimer),clearTimeout(this.timeoutTimer),this.stop(),this.enabled=!1}timeout(){this.jumpingToLiveIgnoreBuffer||(this.inTimeout=!0,this.stop(),clearTimeout(this.timeoutTimer),this.timeoutTimer=setTimeout(()=>{this.endTimeout()},3e4))}endTimeout(){clearTimeout(this.timeoutTimer),this.inTimeout=!1}handlePlaying(){let e=this.playing;this.playing=!0,clearTimeout(this.bufferingTimer),this.enabled&&this.shouldJumpToLive()&&(e||(this.jumpingToLiveIgnoreBuffer=!0,this.player.liveTracker.seekToLiveEdge(),this.lastJumpOccurred=new Date))}handlePause(){this.playing=!1}handleEnded(){this.enabled&&this.disable()}handleError(){this.enabled&&this.timeout()}countBufferingEvent(){if(this.bufferingCounter+=1,this.bufferingCounter>4){this.disable();return}this.bufferedAtLatency.push(this.currentLatency),console.log("latency compensation timeout due to buffering:",this.bufferingCounter,"buffering events of",4),setTimeout(()=>{this.bufferingCounter>0&&(this.bufferingCounter-=1)},18e4)}handleBuffering(){if(this.enabled&&!this.inTimeout){if(this.jumpingToLiveIgnoreBuffer){this.jumpingToLiveIgnoreBuffer=!1;return}this.timeout(),clearTimeout(this.bufferingTimer),this.bufferingTimer=setTimeout(()=>{this.countBufferingEvent()},200)}}constructor(e){this.player=e,this.playing=!1,this.enabled=!1,this.running=!1,this.inTimeout=!1,this.jumpingToLiveIgnoreBuffer=!1,this.timeoutTimer=0,this.checkTimer=0,this.bufferingCounter=0,this.bufferingTimer=0,this.playbackRate=1,this.lastJumpOccurred=null,this.startupTime=new Date,this.clockSkewMs=0,this.currentLatency=null,this.bufferedAtLatency=[],this.player.on("playing",this.handlePlaying.bind(this)),this.player.on("pause",this.handlePause.bind(this)),this.player.on("error",this.handleError.bind(this)),this.player.on("waiting",this.handleBuffering.bind(this)),this.player.on("stalled",this.handleBuffering.bind(this)),this.player.on("ended",this.handleEnded.bind(this)),this.player.on("canplaythrough",this.handlePlaying.bind(this)),this.player.on("canplay",this.handlePlaying.bind(this)),this.check=this.check.bind(this),this.start=this.start.bind(this),this.enable=this.enable.bind(this),this.countBufferingEvent=this.countBufferingEvent.bind(this)}}var _=n(119),x=n.n(_);class C{static async getVideoQualities(){let e=[];try{let t=await fetch(C.VIDEO_CONFIG_URL);e=await t.json()}catch(e){console.error(e)}return e}}C.VIDEO_CONFIG_URL="/api/video/variants";let E=(0,s.createContext)(C);var I=n(2906);let P="owncast_volume",B="latencyCompensatorEnabled",N=new f,S=null,M=null,L=!1,D=e=>{let{source:t,online:n,initiallyMuted:l=!1,title:h,className:u}=e,d=(0,s.useContext)(E),f=s.useRef(null),[g,p]=(0,r.FV)(T.We),y=(0,r.sJ)(T.g8),b=()=>{try{f.current.volume((0,w.$o)(P)||1)}catch(e){console.warn(e)}},_=()=>{(0,w.qQ)(P,f.current.muted()?0:f.current.volume())},C=()=>{f.current.paused()?f.current.play():f.current.pause()},D=()=>{M&&M.stop(),L=!0,(M=new j(f.current)).setClockSkew(y),M.enable(),(0,w.qQ)(B,!0)},O=()=>{M&&M.disable(),M=null,L=!1,(0,w.qQ)(B,!1)},R=()=>(L?O():D(),L),F=e=>{let t=e.tech({IWillNotUseThisInPlugins:!0});t&&t.vhs&&("true"===(0,w.$o)(B)&&t&&t.vhs?D():O())},V=async(e,t)=>{let n=function(e,t,n,i){let s=t.getComponent("MenuItem"),r=t.getComponent("MenuItem"),a=t.getComponent("MenuButton");class l extends s{createEl(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"button",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=super.createEl(e,t,n);return i.innerHTML='<hr style="opacity: 0.3; margin-left: 10px; margin-right: 10px;" />',i}constructor(e,t){super(e,t)}}let o=new r(e,{selectable:!0,label:"minimize latency (experimental)"});o.on("click",()=>{let e=i();o.selected(e)});let c=new l(e,{selectable:!1});class h extends a{createItems(){let t;let i=e.tech({IWillNotUseThisInPlugins:!0}),s=new r(e,{selectable:!0,selected:!0,label:"Auto"}),a=Array(n.length);n.forEach(t=>{a[t.index]=new r(e,{selectable:!0,label:t.name})}),t="ontouchstart"in window?"touchend":"click";for(let e=0;e<a.length;e+=1)a[e].on(t,()=>{if(!i){console.warn("Invalid attempt to access null player tech");return}i.vhs.representations().forEach((t,n)=>{let i=n===e;t.enabled(i),a[n].selected(i)}),s.selected(!1)});s.on(t,()=>{i.vhs.representations().forEach(e=>{e.enabled(!0)}),a.forEach(e=>e.selected(!1)),s.selected(!0)});let l=!!i&&!!i.vhs;return n.length<2&&l?[o]:n.length>1&&l?[s,...a,c,o]:l||1!==n.length?[s,...a]:[]}constructor(){super(e)}}let u=new h;return u.el().setAttribute("aria-label","Settings"),u.addClass("vjs-quality-selector"),t.registerComponent("MenuButton",h),u}(e,t,await d.getVideoQualities(),R);e.controlBar.addChild(n,{},e.controlBar.children_.length-2),F(e)},J=(e,t)=>{if(window.hasOwnProperty("WebKitPlaybackTargetAvailabilityEvent")){let n=t.getComponent("Button");class i extends n{handleClick(){try{document.getElementsByTagName("video")[0].webkitShowPlaybackTargetPicker()}catch(e){console.error(e)}}constructor(){super(e)}}let s=new i;e.controlBar.addChild(s).addClass("vjs-airplay")}};return(0,a.y1)("space",e=>{e.preventDefault(),C()}),(0,a.y1)("f",()=>{f.current.isFullscreen()?f.current.exitFullscreen():f.current.requestFullscreen()},{enableOnContentEditable:!1}),(0,a.y1)("m",()=>{f.current.muted()||0===f.current.volume()?f.current.volume(.7):f.current.volume(0)},{enableOnContentEditable:!1}),(0,a.y1)("0",()=>f.current.volume(f.current.volume()+.1),{enableOnContentEditable:!1}),(0,a.y1)("9",()=>f.current.volume(f.current.volume()-.1),{enableOnContentEditable:!1}),(0,s.useEffect)(()=>{S&&S.setClockSkew(y)},[y]),(0,s.useEffect)(()=>()=>{O(),null==S||S.stop()},[]),(0,i.jsx)(c.SV,{fallbackRender:e=>{let{error:t,resetErrorBoundary:n}=e;return(0,i.jsx)(I.A,{componentName:"OwncastPlayer",message:t.message,retryFunction:n})},children:(0,i.jsxs)("div",{className:o()(x().container,u),id:"player",children:[n&&(0,i.jsx)("div",{className:x().player,children:(0,i.jsx)(m,{options:{autoplay:!1,controls:!0,responsive:!0,fluid:!1,fill:!0,playsinline:!0,liveui:!0,preload:"auto",muted:l,controlBar:{progressControl:{seekBar:!1}},html5:{vhs:{enableLowInitialPlaylist:!0,experimentalBufferBasedABR:!0,useNetworkInformationApi:!0,maxPlaylistRetries:30}},liveTracker:{trackingThreshold:0,liveTolerance:15},sources:[{src:t,type:"application/x-mpegURL"}]},onReady:(e,t)=>{f.current=e,b(),J(e,t),e.on("waiting",()=>{console.debug("player is waiting")}),e.on("dispose",()=>{console.debug("player will dispose"),N.stop()}),e.on("playing",()=>{console.debug("player is playing"),N.start(),p(!0)}),e.on("pause",()=>{console.debug("player is paused"),N.stop(),p(!1)}),e.on("ended",()=>{console.debug("player is ended"),N.stop(),p(!1)}),t.hookOnce(),e.on("volumechange",_),(S=new k(e,t)).setClockSkew(y),V(e,t)},"aria-label":h})}),(0,i.jsx)("div",{className:x().poster,children:!g&&(0,i.jsx)(v,{online:n,initialSrc:"/thumbnail.jpg",src:"/thumbnail.jpg"})})]})})}},22383:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var i,s,r=n(85893),a=n(1822),l=n.n(a),o=n(67294),c=n(4480),h=n(11163),u=n(27779),d=n(14413),m=n(1437),f=n(66421),g=n(14217),p=n(71693),y=n.n(p),b=n(93967),v=n.n(b),w=n(9008),T=n.n(w),k=n(73745),j=n(69361),_=n(68175),x=n(51095),C=n(14424),E=n(77889),I=n(26760),P=n.n(I),B=n(88735);let{Title:N}=k.default;(i=s||(s={}))[i.CannotFollow=1]="CannotFollow",i[i.CanFollow=2]="CanFollow",i[i.FollowPrompt=3]="FollowPrompt",i[i.InProgress=4]="InProgress";let S=e=>{let{streamName:t,subtitle:n,image:i,supportsFollows:s}=e,[a,l]=(0,o.useState)(2),[c,h]=(0,o.useState)(null),[u,d]=(0,o.useState)(!1),[m,f]=(0,o.useState)(!1),[g,p]=(0,o.useState)(null);(0,o.useEffect)(()=>{s||l(1)},[s]);let y=async()=>{l(3)},b=async()=>{f(!0),l(1);try{let e=c.replace(/^@+/,""),t=await fetch("/api/remotefollow",{method:"POST",body:JSON.stringify({account:e})}),n=await t.json();if(n.redirectUrl&&window.open(n.redirectUrl,"_blank"),!n.success){p(n.message),f(!1);return}if(!n.redirectUrl){p("Unable to follow."),f(!1);return}}catch(e){p(e.message)}f(!1)},w=e=>{h(e),(0,B.ME)(e)?d(!0):d(!1)};return(0,r.jsxs)("div",{children:[(0,r.jsx)(T(),{children:(0,r.jsx)("title",{children:t})}),(0,r.jsx)("div",{className:v()(P().offlineContainer),children:(0,r.jsx)(j.Z,{spinning:m,children:(0,r.jsxs)("div",{className:P().content,children:[(0,r.jsx)("div",{className:P().heading,children:"This stream is not currently live."}),(0,r.jsx)("div",{className:P().message,dangerouslySetInnerHTML:{__html:n}}),(0,r.jsx)("div",{className:P().pageLogo,style:{backgroundImage:"url(".concat(i,")")}}),(0,r.jsx)("div",{className:P().pageName,children:t}),g&&(0,r.jsx)(_.Z,{message:"Follow Error",description:g,type:"error",showIcon:!0}),2===a&&(0,r.jsx)(x.Z,{className:P().submitButton,type:"primary",onClick:y,children:"Follow Server"}),4===a&&(0,r.jsx)(N,{level:4,className:P().heading,children:"Follow the instructions on your Fediverse server to complete the follow."}),3===a&&(0,r.jsxs)("div",{children:[(0,r.jsx)(C.default,{value:c,size:"large",onChange:e=>w(e.target.value),placeholder:"Your fediverse account @account@server",defaultValue:c}),(0,r.jsx)("div",{className:P().footer,children:"You'll be redirected to your Fediverse server and asked to confirm the action."}),(0,r.jsx)(E.Z,{className:P().buttons,children:(0,r.jsx)(x.Z,{className:P().submitButton,disabled:!u,type:"primary",onClick:b,children:"Submit and Follow"})})]})]})})})]})};function M(){var e;let t=(0,c.sJ)(d.RI),n=(0,c.sJ)(d.g1),i=(0,c.sJ)(d.Q),{name:s,summary:a,offlineMessage:p,federation:b}=n,{viewerCount:v,lastConnectTime:w,lastDisconnectTime:T,streamTitle:k}=t,j=(0,c.sJ)(d.YW),{enabled:_}=b,x=(null!==(e=(0,h.useRouter)().asPath.split("?")[1])&&void 0!==e?e:"").split("&").reduce((e,t)=>{let[n,i]=t.split("=");return{...e,[n]:i}},{}),C="true"===x.initiallyMuted,E=_&&"false"!==x.supportsSocialFollow,I=(0,r.jsx)(u.Z,{active:!0,style:{padding:"10px"},paragraph:{rows:10}});(0,o.useEffect)(()=>{document.body.classList.add("body-background")},[]);let P=(0,r.jsx)(S,{streamName:s,subtitle:p||a,image:"/logo",supportsFollows:E}),B=(0,r.jsxs)("div",{className:"jsx-c9ad39c4496ab6bc "+(y().onlineContainer||""),children:[(0,r.jsx)(l(),{id:"c9ad39c4496ab6bc",children:".body-background{background:var(--theme-color-components-video-status-bar-background)}"}),(0,r.jsx)(f.OwncastPlayer,{source:"/hls/stream.m3u8",online:j,initiallyMuted:C,title:k||s}),(0,r.jsx)(m.X,{online:j,lastConnectTime:w,lastDisconnectTime:T,viewerCount:v})]});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.me,{}),(0,r.jsx)(g.Q,{}),(0,r.jsx)("div",{className:"video-embed",children:i.appLoading?I:j?B:P})]})}},88735:function(e,t,n){"use strict";n.d(t,{Kf:function(){return r},ME:function(){return a},ax:function(){return i},jv:function(){return s}});let i="https?://.*";function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["http:","https:"];try{let n=new URL(e);if(""===n.protocol||""===n.hostname||!t.includes(n.protocol))return!1}catch(e){return!1}return!0}function r(e,t){e.startsWith("@")&&(e=e.slice(1));let n=e.split(/:|@/),[i,s,r]=n;return i===t&&3===n.length&&!!i&&!!s&&!!r}function a(e){let t=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}},26760:function(e){e.exports={offlineContainer:"OfflineEmbed_offlineContainer__fdZ07",content:"OfflineEmbed_content__j10dd",message:"OfflineEmbed_message__ZSzJ6",heading:"OfflineEmbed_heading__KnMu3",pageLogo:"OfflineEmbed_pageLogo__cl5VS",pageName:"OfflineEmbed_pageName__9lEC_",submitButton:"OfflineEmbed_submitButton__UhIpB",footer:"OfflineEmbed_footer__sL75T"}},95416:function(e){e.exports={statusbar:"Statusbar_statusbar__b24qe",onlineMessage:"Statusbar_onlineMessage__FJnEa",viewerCount:"Statusbar_viewerCount__pfDDX",viewerIcon:"Statusbar_viewerIcon__U_j6P"}},119:function(e){e.exports={container:"OwncastPlayer_container__CR5Ry",player:"OwncastPlayer_player__dCDjy",poster:"OwncastPlayer_poster__tbpwE"}},77726:function(e){e.exports={player:"VideoJS_player__GD36e"}},63313:function(e){e.exports={poster:"VideoPoster_poster__6rnLj",image:"VideoPoster_image__8kRcw"}},71693:function(e){e.exports={onlineContainer:"VideoEmbed_onlineContainer__5XevB"}},25893:function(){}},function(e){e.O(0,[2544,2016,4992,9831,3745,3109,5727,5888,6728,8559,7824,6637,1941,2888,9774,179],function(){return e(e.s=61357)}),_N_E=e.O()}]);