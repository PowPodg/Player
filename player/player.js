var playLib=function(n){var a={};function r(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}return r.m=n,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";var a=n(2);n(3),e.exports={createPlayer:a.createPlayer,deletePlayer:a.deletePlayer}},function(e,t,n){"use strict";function Y(){var e=document.createElementNS("http://www.w3.org/2000/svg","svg");return e.setAttribute("xmlns:dc","http://purl.org/dc/elements/1.1/"),e.setAttribute("xmlns:cc","http://creativecommons.org/ns#"),e.setAttribute("xmlns:rdf","http://www.w3.org/1999/02/22-rdf-syntax-ns#"),e.setAttribute("xmlns:svg","http://www.w3.org/2000/svg"),e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e.setAttribute("height","15px"),e.setAttribute("width","15px"),e.setAttribute("viewbox","0 0 100 100"),e.setAttribute("version","1.1"),e}e.exports={createPlayer:function(e){var t=document.createElement("div");t.className="Container",e.appendChild(t);var n=document.createElement("div");n.className="elements",t.appendChild(n);var a=document.createElement("div");a.className="nameTrack",n.appendChild(a);var r=document.createElement("span");r.id="nameTrack",r.innerHTML="Name track",a.appendChild(r);var i=document.createElement("div");i.className="control",n.appendChild(i);var d=document.createElement("div");d.className="n_button",d.id="startPlay",i.appendChild(d);var o=Y();d.appendChild(o);var l=document.createElementNS("http://www.w3.org/2000/svg","path");o.appendChild(l),l.setAttribute("d","M 0.42372881,15.42373 V 0.07728885 L 15.643769,7.7505093 Z");var c=document.createElement("div");c.className="pastTime",c.id="pastTime",c.innerHTML="00:00",i.appendChild(c);var s=document.createElement("div");s.className="contProgress",i.appendChild(s);var u=document.createElement("div");u.className="progress",u.id="progress",s.appendChild(u);var p=document.createElement("div");p.className="active",p.id="active",u.appendChild(p);var m=document.createElement("div");m.className="point",u.appendChild(m);var v=document.createElement("div");v.className="noactive",u.appendChild(v);var h=document.createElement("div");h.className="timeLeft",h.id="timeLeft",h.innerHTML="00:00",i.appendChild(h);var f=document.createElement("div");f.className="speed",i.appendChild(f);var w=document.createElement("div");w.className="selCont",w.id="selCont",f.appendChild(w),w.style.visibility="hidden";var C=document.createElement("select");C.id="selspeed";var b=new Option("0.5",.5);C.append(b),(b=new Option("1",1)).selected=!0,C.append(b),b=new Option("1.25",1.25),C.append(b),b=new Option("1.5",1.5),C.append(b),b=new Option("1.75",1.75),C.append(b),b=new Option("2",2),C.append(b),b=new Option("2.5",2.5),C.append(b),w.appendChild(C);var g=document.createElement("span");g.id="spanSpeed",g.innerHTML="1",f.appendChild(g);var E=document.createElement("span");g.appendChild(E),E.innerHTML="x";var y=document.createElement("div");y.className="volumeCont",i.appendChild(y);var L=document.createElement("div");L.className="volume",L.id="volume",y.appendChild(L);var N=document.createElement("div");N.className="levVolumeCont",L.appendChild(N);var M=document.createElement("div");M.className="levVolumeActiv",M.id="levVolumeActiv",N.appendChild(M);var A=document.createElement("div");A.className="levVolumeNoactiv",A.id="levVolumeNoactiv",N.appendChild(A);var T=document.createElement("div");T.className="point",T.id="pointVolume",N.appendChild(T);var x=document.createElement("div");x.className="speaker",x.id="speaker",y.appendChild(x);var S=Y();x.appendChild(S);var V=document.createElementNS("http://www.w3.org/2000/svg","path");S.appendChild(V),V.setAttribute("d","M 8.757291,0.09866204 C 8.5824867,0.01000818 8.3765392,0.03350694 8.225846,0.1627493 L 3.3393641,4.3188035 H 1.0046221 C 0.45107534,4.3188035 0,4.7983892 0,5.3869235 v 4.2724789 c 0,0.5896026 0.45107534,1.0681196 1.0046221,1.0681196 h 2.334742 l 4.8854772,4.156054 c 0.091421,0.07691 0.2029336,0.116426 0.3144468,0.116426 0.074342,0 0.148684,-0.01816 0.2180029,-0.05341 0.1737995,-0.08865 0.284308,-0.275575 0.284308,-0.480654 V 0.58038396 c 0,-0.20507908 -0.1105085,-0.39200004 -0.284308,-0.48172192 z");var H=document.createElementNS("http://www.w3.org/2000/svg","path");S.appendChild(H),H.setAttribute("d","m 11.584298,3.7462914 c -0.197911,-0.2072157 -0.515372,-0.2040109 -0.710268,0.00427 -0.194897,0.2104195 -0.192888,0.5479452 0.004,0.7562287 0.759495,0.7968176 1.177417,1.8681417 1.177417,3.0163703 0,1.148229 -0.417922,2.219553 -1.177417,3.0163706 -0.196906,0.206147 -0.198915,0.544741 -0.004,0.755161 0.09845,0.105744 0.228049,0.158081 0.356641,0.158081 0.127587,0 0.255174,-0.05127 0.353627,-0.154877 0.952381,-0.996556 1.47579,-2.3381142 1.47579,-3.7747356 0,-1.4366209 -0.523409,-2.7781796 -1.47579,-3.7768716 z");var O=document.createElementNS("http://www.w3.org/2000/svg","path");S.appendChild(O),O.setAttribute("d","m 13.001819,2.2413102 c -0.19791,-0.2082833 -0.515371,-0.2061469 -0.711272,0.0032 -0.194897,0.2093513 -0.192887,0.5479452 0.003,0.7551607 1.142255,1.2037709 1.771149,2.810223 1.771149,4.5234871 0,1.7132644 -0.628894,3.318648 -1.771149,4.522419 -0.195901,0.208284 -0.19791,0.546878 -0.003,0.756229 0.09946,0.104676 0.228049,0.157014 0.356641,0.157014 0.127587,0 0.256178,-0.05127 0.354631,-0.154877 1.334139,-1.404578 2.067513,-3.2801963 2.067513,-5.280785 0,-2.0005882 -0.733374,-3.8762068 -2.067513,-5.2818524 z");var k=document.createElement("div");k.className="download",k.id="download",i.appendChild(k);var _=Y();k.appendChild(_);var j=document.createElementNS("http://www.w3.org/2000/svg","path");_.appendChild(j),j.setAttribute("d","m 14.653094,7.3549511 c -0.24011,0 -0.432198,0.2049611 -0.432198,0.4611625 v 4.1948694 c 0,1.140951 -0.870798,2.066692 -1.936885,2.066692 H 2.8012796 c -1.0692884,0 -1.93688475,-0.929158 -1.93688475,-2.066692 V 7.7477931 c 0,-0.2562012 -0.19208775,-0.4611623 -0.43219743,-0.4611623 C 0.19208774,7.2866308 0,7.4915919 0,7.7477931 V 12.010983 C 0,13.660921 1.2581747,15 2.8012796,15 h 9.4827314 c 1.546307,0 2.801279,-1.342496 2.801279,-2.989017 V 7.8161136 c 0,-0.2527854 -0.192086,-0.4611625 -0.432196,-0.4611625 z");var P=document.createElementNS("http://www.w3.org/2000/svg","path");_.appendChild(P),P.setAttribute("d","m 7.2385065,11.338028 c 0.083238,0.08882 0.1952891,0.136642 0.3041389,0.136642 0.1088497,0 0.2209009,-0.04441 0.3041389,-0.136642 L 10.593639,8.4070846 c 0.169677,-0.181049 0.169677,-0.4714104 0,-0.6524593 -0.169677,-0.181049 -0.441802,-0.181049 -0.6114798,0 L 7.9748428,9.8998846 V 0.5434119 c 0,-0.25620215 -0.1920878,-0.46116321 -0.4321974,-0.46116321 -0.2401097,0 -0.4321974,0.20496106 -0.4321974,0.46116321 V 9.8998846 L 5.0999296,7.7546253 c -0.1696776,-0.181049 -0.4418017,-0.181049 -0.6114793,0 -0.1696775,0.1810489 -0.1696775,0.4714103 0,0.6524593 z");var R=document.createElement("div");R.className="unload",R.id="unload",i.appendChild(R);var B=Y();R.appendChild(B);var z=document.createElementNS("http://www.w3.org/2000/svg","path");B.appendChild(z),z.setAttribute("d","m 14.649549,7.6779788 c -0.240053,0 -0.432094,-0.2063508 -0.432094,-0.4642894 V 2.9903763 c 0,-1.1486873 -0.870587,-2.08070513 -1.936416,-2.08070513 H 2.8006018 c -1.0690297,0 -1.93641611,0.93545763 -1.93641611,2.08070513 V 7.282473 c 0,0.2579385 -0.19204126,0.4642895 -0.43209284,0.4642895 C 0.19204126,7.7467625 0,7.5404115 0,7.282473 V 2.9903763 C 0,1.3292512 1.2578703,-0.01890806 2.8006018,-0.01890806 h 9.4804372 c 1.545932,0 2.800602,1.35159896 2.800602,3.00928436 v 4.2233131 c 0,0.2544994 -0.192041,0.4642894 -0.432092,0.4642894 z");var Z=document.createElementNS("http://www.w3.org/2000/svg","path");function U(e){return(e=e.replace(/\?.*$/,"")).split("/").pop()}function I(e){var t=Math.floor(e/60),n=Math.floor(e%60);return t<10&&(t="0"+t),n<10&&(n="0"+n),t+":"+n}B.appendChild(Z),Z.setAttribute("d","m 7.2367551,3.6678946 c 0.083218,-0.08942 0.1952419,-0.137568 0.3040654,-0.137568 0.1088234,0 0.2208474,0.04471 0.3040653,0.137568 l 2.7461912,2.9508167 c 0.169635,0.1822765 0.169635,0.4746068 0,0.6568834 -0.169637,0.1822765 -0.441697,0.1822765 -0.6113326,0 L 7.9729132,5.1157894 v 9.4199156 c 0,0.257938 -0.1920412,0.464289 -0.4320927,0.464289 -0.2400516,0 -0.4320929,-0.206351 -0.4320929,-0.464289 V 5.1157894 l -2.010032,2.1598053 c -0.1696364,0.1822765 -0.4416948,0.1822765 -0.6113313,0 -0.1696364,-0.1822766 -0.1696364,-0.4746069 0,-0.6568834 z");var X=document.createElement("audio");t.appendChild(X);var F=void 0,J=void 0,q=void 0,D=!1,K=void 0;function $(e){var t=A.getBoundingClientRect(),n=t.right-t.left,a=e.clientX-t.left;X.volume=Math.abs(a/n);var r=100*a/n;M.style.width=r+"%"}g.addEventListener("click",function(){w.style.visibility="visible",g.innerHTML=C.value+"x"}),C.addEventListener("mouseout",function(){w.style.visibility="hidden",g.innerHTML=C.value+"x",X.playbackRate=C.value}),L.addEventListener("mousedown",function(e){L.addEventListener("mousemove",$,!1);var t=A.getBoundingClientRect(),n=t.right-t.left,a=e.clientX-t.left;X.volume=Math.abs(a/n);var r=100*a/n;M.style.width=r+"%"},!1),L.addEventListener("mouseup",function(e){L.removeEventListener("mousemove",$,!1)}),L.addEventListener("mouseout",function(e){L.removeEventListener("mousemove",$,!1)});var G=u.getBoundingClientRect(),Q=G.right-G.left;u.addEventListener("mousedown",function(e){var t=e.clientX-G.left;X.currentTime=F*t/Q});var W=null;return R.addEventListener("click",function(){if(X.pause(),X.currentTime=0,p.style.width="0%",l.setAttribute("d","M 0.42372881,15.42373 V 0.07728885 L 15.643769,7.7505093 Z"),W=prompt("Select the audio source file\nOK - URL file\nCANCEL - Local file","https://monfon.org/dl/739861853/Bobby_Helms_-_Jingle_Bell_Rock_(monfon.org).mp3"))K=W,X.src=K,X.load();else{var e=document.createElement("input");e.type="file",e.click(),e.onchange=function(e){var t=e.currentTarget.files[0];K=t.name,X.src=URL.createObjectURL(t),X.load()},e.remove()}D=!1,X.addEventListener("loadeddata",function(e){D=!0},!1),X.addEventListener("loadedmetadata",function(){F=X.duration,r.innerHTML=U(K),h.innerHTML=I(F),M.style.width="100%",X.playbackRate=C.value})}),k.addEventListener("click",function(){if(D)if(W){var e=document.createElement("a");e.href=K,e.setAttribute("download",U(K)),e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e)}else alert("Audio file is local");else alert("Audio file is not loaded")}),X.addEventListener("timeupdate",function(){J=X.currentTime,q=F-J;var e=100*J/F;p.style.width=e+"%",X.ended&&(p.style.width="0%",l.setAttribute("d","M 0.42372881,15.42373 V 0.07728885 L 15.643769,7.7505093 Z")),q?(c.innerHTML=I(J),h.innerHTML=I(q)):h.innerHTML="loading"}),d.addEventListener("click",function(){if(X.paused){if(!D)return void alert("Audio file is not loaded");X.play(),l.setAttribute("d","M 0,15.000001 H 5.1160217 V 0.20655562 H 0 Z M 10.232043,0.20655562 V 15.000001 h 5.116022 V 0.20655562 Z")}else X.pause(),l.setAttribute("d","M 0.42372881,15.42373 V 0.07728885 L 15.643769,7.7505093 Z")}),t},deletePlayer:function(e){try{for(var t=e.firstChild;t;)e.removeChild(t),t=e.firstChild;return e.parentNode.removeChild(e),e.remove(),!0}catch(e){return e}}}},function(e,t,n){var a=n(4),r=n(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},d=(a(e.i,r,i),r.locals?r.locals:{});e.exports=d},function(e,t,i){"use strict";var n,a,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},d=(a={},function(e){if(void 0===a[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}a[e]=t}return a[e]}),o={};function l(e,t,n){for(var a=0;a<t.length;a++){var r={css:t[a][1],media:t[a][2],sourceMap:t[a][3]};o[e][a]?o[e][a](r):o[e].push(h(r,n))}}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=i.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])}),"function"==typeof e.insert)e.insert(t);else{var r=d(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,a){var r=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),d=e.childNodes;d[t]&&e.removeChild(d[t]),d.length?e.insertBefore(i,d[t]):e.appendChild(i)}}var m=null,v=0;function h(t,e){var n,a,r;if(e.singleton){var i=v++;n=m=m||c(e),a=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=c(e),a=function(e,t,n){var a=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}.bind(null,n,e),r=function(){var e;null!==(e=n).parentNode&&e.parentNode.removeChild(e)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else r()}}e.exports=function(n,e,a){return(a=a||{}).singleton||"boolean"==typeof a.singleton||(a.singleton=r()),n=a.base?n+a.base:n,e=e||[],o[n]||(o[n]=[]),l(n,e,a),function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){o[n]||(o[n]=[]),l(n,e,a);for(var t=e.length;t<o[n].length;t++)o[n][t]();o[n].length=e.length,0===o[n].length&&delete o[n]}}}},function(e,t,n){}]);