!function(t,e){"function"==typeof define&&define.amd?define([],e()):"object"==typeof module&&module.exports?module.exports=e():function n(){document&&document.body?t.zenscroll=e():setTimeout(n,9)}()}(this,function(){"use strict";var t=function(t){return"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t)["scroll-behavior"]};if("undefined"==typeof window||!("document"in window))return{};var e=function(e,n,o){n=n||999,o||0===o||(o=9);var i,r=function(t){i=t},u=function(){clearTimeout(i),r(0)},c=function(t){return Math.max(0,e.getTopOf(t)-o)},f=function(o,i,c){if(u(),0===i||i&&i<0||t(e.body))e.toY(o),c&&c();else{var f=e.getY(),a=Math.max(0,o)-f,s=(new Date).getTime();i=i||Math.min(Math.abs(a),n),function t(){r(setTimeout(function(){var n=Math.min(1,((new Date).getTime()-s)/i),o=Math.max(0,Math.floor(f+a*(n<.5?2*n*n:n*(4-2*n)-1)));e.toY(o),n<1&&e.getHeight()+o<e.body.scrollHeight?t():(setTimeout(u,99),c&&c())},9))}()}},a=function(t,e,n){f(c(t),e,n)},s=function(t,n,i){var r=t.getBoundingClientRect().height,u=e.getTopOf(t)+r,s=e.getHeight(),l=e.getY(),d=l+s;c(t)<l||r+o>s?a(t,n,i):u+o>d?f(u-s+o,n,i):i&&i()},l=function(t,n,o,i){f(Math.max(0,e.getTopOf(t)-e.getHeight()/2+(o||t.getBoundingClientRect().height/2)),n,i)};return{setup:function(t,e){return(0===t||t)&&(n=t),(0===e||e)&&(o=e),{defaultDuration:n,edgeOffset:o}},to:a,toY:f,intoView:s,center:l,stop:u,moving:function(){return!!i},getY:e.getY,getTopOf:e.getTopOf}},n=document.documentElement,o=function(){return window.scrollY||n.scrollTop},i=e({body:document.body,toY:function(t){window.scrollTo(0,t)},getY:o,getHeight:function(){return window.innerHeight||n.clientHeight},getTopOf:function(t){return t.getBoundingClientRect().top+o()-n.offsetTop}});if(i.createScroller=function(t,n,o){return e({body:t,toY:function(e){t.scrollTop=e},getY:function(){return t.scrollTop},getHeight:function(){return Math.min(t.offsetHeight,window.innerHeight)},getTopOf:function(t){return t.offsetTop}},n,o)},"addEventListener"in window&&!window.noZensmooth&&!t(document.body)){var r="scrollRestoration"in history;r&&(history.scrollRestoration="auto"),window.addEventListener("load",function(){r&&(setTimeout(function(){history.scrollRestoration="manual"},9),window.addEventListener("popstate",function(t){t.state&&"zenscrollY"in t.state&&i.toY(t.state.zenscrollY)},!1)),window.location.hash&&setTimeout(function(){if(i.setup().edgeOffset){var t=window.location.hash;try{t=decodeURIComponent(t)}catch(t){}var e=document.getElementById(t.substring(1));e&&Math.abs(i.getY()-i.getTopOf(e))<9?i.intoView(e,0):(console.warn("target element out of range",t,i.getY(),i.getTopOf(e)),setTimeout(function(){console.log(i.getY())},9),setTimeout(function(){console.log(i.getY())},250))}},9)},!1);var u=new RegExp("(^|\\s)noZensmooth(\\s|$)");window.addEventListener("click",function(t){for(var e=t.target;e&&"A"!==e.tagName;)e=e.parentNode;if(!(!e||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){if(r)try{history.replaceState({zenscrollY:i.getY()},"")}catch(t){}var n=e.getAttribute("href")||"";if(0===n.indexOf("#")&&!u.test(e.className)){var o=0,c=document.getElementById(n.substring(1));if("#"!==n){if(!c)return;o=i.getTopOf(c)}t.preventDefault();var f=function(){window.location=n},a=i.setup().edgeOffset;a&&(o=Math.max(0,o-a),f=function(){history.pushState(null,"",n)}),i.toY(o,null,f)}}},!1)}return i});