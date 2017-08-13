!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):"object"==typeof exports?exports.Tooltip=e():t.Tooltip=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var i=n(58),r=n(57),o=n(52),s=n(54),u=n(55),f=function(t){var e=o(t),n=r(e),f=e.target,c=e.throttle,a=i(function(t){n&&n.set(t)},c),h=i(function(){n&&n.hold(),setTimeout(function(){n&&n.onHold()&&n.set(null)},c)},c),l=s(f,e.selector,a),p=u(f,e.selector,h);return{destroy:function(){n.destroy(),l(),p(),f=null,n=null,e=null}}};t.exports=f},function(t,e,n){t.exports=n(39)},function(t,e){(function(e){"use strict";var n;t.exports=function(){return!n&&e.document&&(n=e.document.createElement("div")),n||(n={style:{}}),n}}).call(e,function(){return this}())},function(t,e,n){"use strict";var i,r,o=n(4),s=["ms","Moz","Webkit","O"],u=n(2);t.exports=function(t){if(void 0!==r)return r;i=i||u();for(var e,n,f=0,c=s.length;c>f;f++)if(n=s[f],e=n+o(t),"undefined"!=typeof i.style[e])return r=n;return r}},function(t){"use strict";t.exports=function(t){return t?t.charAt(0).toUpperCase()+t.slice(1):""}},function(t){"use strict";function e(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function n(t){var e=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(t))),e.filter(function(e){return i.call(t,e)})}var i=Object.prototype.propertyIsEnumerable;t.exports=Object.assign||function(t){for(var i,r,o=e(t),s=1;s<arguments.length;s++){i=arguments[s],r=n(Object(i));for(var u=0;u<r.length;u++)o[r[u]]=i[r[u]]}return o}},function(t){"use strict";t.exports={alignItems:1,justifyContent:1,flex:1,flexFlow:1,flexGrow:1,flexShrink:1,flexBasis:1,flexDirection:1,flexWrap:1,alignContent:1,alignSelf:1,userSelect:1,transform:1,transition:1,transformOrigin:1,transformStyle:1,transitionProperty:1,transitionDuration:1,transitionTimingFunction:1,transitionDelay:1,borderImage:1,borderImageSlice:1,boxShadow:1,backgroundClip:1,backfaceVisibility:1,perspective:1,perspectiveOrigin:1,animation:1,animationDuration:1,animationName:1,animationDelay:1,animationDirection:1,animationIterationCount:1,animationTimingFunction:1,animationPlayState:1,animationFillMode:1,appearance:1}},function(t){"use strict";function e(t,e){function n(i){function r(){var r=arguments.length,o=[].concat(i);return r&&o.push.apply(o,arguments),o.length<e?n(o):t.apply(this,o)}return r}return"number"!=typeof e&&(e=t.length),n([])}var n=Object.prototype.hasOwnProperty;t.exports=e(function(t,e){return n.call(t,e)})},function(t){"use strict";t.exports=function(t){var e=!0;return t.right<t.left&&(e=!1,t.right=t.left),t.bottom<t.top&&(e=!1,t.bottom=t.top),e}},function(t){"use exports";t.exports={animation:1,"column-count":1,columns:1,"font-weight":1,opacity:1,"order  ":1,"z-index":1,zoom:1,flex:1,"box-flex":1,transform:1,perspective:1,"box-pack":1,"box-align":1,colspan:1,rowspan:1}},function(t){"use strict";var e=Object.prototype.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,e,n){"use strict";var i=n(15),r=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,o="undefined"==typeof document?{}:document.documentElement.style,s=function(){var t=function(){for(var t in o)if(r.test(t))return t.match(r)[0];return"WebkitOpacity"in o?"Webkit":"KhtmlOpacity"in o?"Khtml":""}(),e=t.toLowerCase();return{style:t,css:"-"+e+"-",dom:{Webkit:"WebKit",ms:"MS",o:"WebKit"}[t]||i(t)}}();t.exports=s},function(t){t.exports={"border-radius":1,"border-top-left-radius":1,"border-top-right-radius":1,"border-bottom-left-radius":1,"border-bottom-right-radius":1,"box-shadow":1,order:1,flex:function(t,e){return[e+"box-flex"]},"box-flex":1,"box-align":1,animation:1,"animation-duration":1,"animation-name":1,transition:1,"transition-duration":1,transform:1,"transform-style":1,"transform-origin":1,"backface-visibility":1,perspective:1,"box-pack":1}},function(t,e,n){"use strict";var i=function(t,e){return e?e.toUpperCase():""},r=n(47);t.exports=function(t){return t?t.replace(r,i):""}},function(t,e,n){"use strict";var i=n(48);t.exports=function(t){return i(t).toLowerCase()}},function(t){"use strict";t.exports=function(t){return t.length?t.charAt(0).toUpperCase()+t.substring(1):t}},function(t,e,n){"use strict";var i=(n(11),n(43)),r=n(14),o=n(13),s=n(10),u=n(45),f=n(44),c=function(t,e,n,r){i(e).forEach(function(e){t[r?r(e):e]=n})},a=function(t){t=(t||"").split(";");var e={};return t.forEach(function(t){var n=t.split(":");2==n.length&&(e[n[0].trim()]=n[1].trim())}),e},h={cssUnitless:n(9)},l=function(t,e,n,i){"string"==typeof t&&(t=a(t)),e=e||h,e.cssUnitless=e.cssUnitless||h.cssUnitless,i=i||{};var p,g,m,v,d,y,b,x,_=e.scope||{},w=null!=e.addUnits?e.addUnits:_&&null!=_.addUnits?_.addUnits:!0,O=(null!=e.cssUnitless?e.cssUnitless:_?_.cssUnitless:null)||{},P=(e.cssUnit||_?_.cssUnit:null)||"px",E=e.prefixProperties||(_?_.prefixProperties:null)||{},j=e.camelize,C=j?o:r;for(m in t)if(s(t,m)){if(v=t[m],g=r(n?n+m:m),p=!1,x=!1,f(v)&&(b=v.call(_||t,v,m,g,t),u(b)&&null!=b.value?(v=b.value,x=b.prefix,g=b.name?r(b.name):g):v=b),d=typeof v,y="number"==d||"string"==d&&""!=v&&1*v==v,null==v||null==g||""===g)continue;if((y||"string"==d)&&(p=!0),!p&&null!=v.value&&v.prefix&&(p=!0,x=v.prefix,v=v.value),p){if(x=x||!!E[g],y&&(v=!w||g in O?v+"":v+P),"border"!=g&&(g.indexOf("border")||~g.indexOf("radius")||~g.indexOf("width"))||!y||(g+="-width"),!g.indexOf("border-radius-")&&(g.replace(/border(-radius)(-(.*))/,function(t,e,n){var i={"-top":["-top-left","-top-right"],"-left":["-top-left","-bottom-left"],"-right":["-top-right","-bottom-right"],"-bottom":["-bottom-left","-bottom-right"]};n in i?(g=[],i[n].forEach(function(t){g.push("border"+t+e)})):g="border"+n+e}),Array.isArray(g))){g.forEach(function(t){x?c(i,t,v,C):i[C(t)]=v});continue}x?c(i,g,v,C):i[C(g)]=v}else l(v,e,g+"-",i)}return i};t.exports=l},function(t,e,n){"use strict";var i=n(22);t.exports=function(t,e){return function(n){for(var r=n.target;r;){if(i(r,e))return r;if(r==t)return;r=r.parentNode}}}},function(t){"use strict";var e={top:"bc-tc",bottom:"tc-bc",left:"rc-lc",right:"lc-rc",topleft:"br-tl",topright:"bl-tr",bottomleft:"tr-bl",bottomright:"tl-br"};t.exports=function(t){return t=t||["topleft","topright","bottomleft","bottomright","top","bottom"],t.map(function(t){return t=t.trim(),e[t]||t}).filter(function(t){return!!t})}},function(t,e,n){"use strict";function i(t,e){return e=r(o(e)),Object.keys(e).forEach(function(n){t.style[n]=e[n]}),t}var r=n(42).object,o=n(28);t.exports=function(t){var e=[].slice.call(arguments,1);return e.forEach(function(e){i(t,e)}),t}},function(t){var e=function(){"use strict";function t(e,n,i,r){function s(e,i){if(null===e)return null;if(0==i)return e;var u,h;if("object"!=typeof e)return e;if(t.__isArray(e))u=[];else if(t.__isRegExp(e))u=new RegExp(e.source,o(e)),e.lastIndex&&(u.lastIndex=e.lastIndex);else if(t.__isDate(e))u=new Date(e.getTime());else{if(a&&Buffer.isBuffer(e))return u=new Buffer(e.length),e.copy(u),u;"undefined"==typeof r?(h=Object.getPrototypeOf(e),u=Object.create(h)):(u=Object.create(r),h=r)}if(n){var l=f.indexOf(e);if(-1!=l)return c[l];f.push(e),c.push(u)}for(var p in e){var g;h&&(g=Object.getOwnPropertyDescriptor(h,p)),g&&null==g.set||(u[p]=s(e[p],i-1))}return u}var u;"object"==typeof n&&(i=n.depth,r=n.prototype,u=n.filter,n=n.circular);var f=[],c=[],a="undefined"!=typeof Buffer;return"undefined"==typeof n&&(n=!0),"undefined"==typeof i&&(i=1/0),s(e,i)}function e(t){return Object.prototype.toString.call(t)}function n(t){return"object"==typeof t&&"[object Date]"===e(t)}function i(t){return"object"==typeof t&&"[object Array]"===e(t)}function r(t){return"object"==typeof t&&"[object RegExp]"===e(t)}function o(t){var e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),e}return t.clonePrototype=function(t){if(null===t)return null;var e=function(){};return e.prototype=t,new e},t.__objToStr=e,t.__isDate=n,t.__isArray=i,t.__isRegExp=r,t.__getRegExpFlags=o,t}();"object"==typeof t&&t.exports&&(t.exports=e)},function(t){function e(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}/*!
	 * escape-html
	 * Copyright(c) 2012-2013 TJ Holowaychuk
	 * MIT Licensed
	 */
t.exports=e},function(t){"use strict";function e(t,e){if(i)return i.call(t,e);for(var n=t.parentNode.querySelectorAll(e),r=0;r<n.length;r++)if(n[r]==t)return!0;return!1}var n=Element.prototype,i=n.matches||n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector;t.exports=e},function(t,e,n){"use strict";var i=n(4),r=n(3),o=n(6);t.exports=function(t){if(!o[t])return t;var e=r(t);return e?e+i(t):t}},function(t,e,n){"use strict";var i,r,o=n(3),s=n(23),u=n(2),f={};t.exports=function(t,e,n){r=r||u(),i=i||r.style;var c=t+": "+e;if(f[c])return f[c];var a,h,l;return!n&&t in i||(a=o("appearance"),a&&(h=s(t,e),l="-"+a.toLowerCase()+"-"+e,h in i&&(r.style[h]="",r.style[h]=l,""!==r.style[h]&&(e=l)))),f[c]=e,e}},function(t,e,n){"use strict";var i=n(26),r=n(6);t.exports=function(t,e){return r[t]?i(t,e):t}},function(t,e,n){"use strict";var i,r,o=n(4),s=n(3),u=n(2),f={};t.exports=function(t){r=r||u(),i=i||r.style;var e=t;if(f[e])return f[e];var n,c;return t in i||(n=s("appearance"),n&&(c=n+o(t),c in i&&(t=c))),f[e]=t,t}},function(t){"use strict";t.exports=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},function(t,e,n){"use strict";function i(t,e){var n={key:t,value:e};return(c.plugins||[]).forEach(function(i){var r=u(function(n){return i(t,e,n)},n);r&&(n=r)}),n}function r(t,e){var n=i(t,e);return u(function(t){return{key:s(t.key,t.value),value:t.value}},n)}var o=n(27),s=n(25),u=n(29),f=n(30),c=function(t){var e,n,i={};for(e in t)if(o(t,e)){if(n=r(e,t[e]),!n)continue;u(function(t){i[t.key]=t.value},n)}return i};t.exports=f(c)},function(t){"use strict";t.exports=function(t,e){return e?Array.isArray(e)?e.map(t).filter(function(t){return!!t}):t(e):void 0}},function(t,e,n){"use strict";var i=n(24);t.exports=function(t){return t.plugins=t.plugins||[function(){var t={flex:1,"inline-flex":1};return function(e,n){return"display"===e&&n in t?{key:e,value:i(e,n,!0)}:void 0}}()],t.plugin=function(e){t.plugins=t.plugins||[],t.plugins.push(e)},t}},function(t,e,n){"use strict";var i=n(1);i.prototype.alignToRegion=function(t,e){return i.align(this,t,e),this},i.prototype.alignToPoint=function(t,e){return i.alignToPoint(this,t,e),this}},function(t,e,n){"use strict";var i=n(1);i.align=function(t,e,n){return e=i.from(e),n=(n||"c-c").split("-"),2!=n.length&&console.warn("Incorrect region alignment! The align parameter need to be in the form 'br-c', that is, a - separated string!",n),i.alignToPoint(t,e.getPoint(n[1]),n[0])},i.alignToPoint=function(t,e,n){t=i.from(t);var r=t.getPoint(n),o=0,s={};return null!=r.x&&null!=e.x&&(o++,s.left=e.x-r.x),null!=r.y&&null!=e.y&&(o++,s.top=e.y-r.y),o&&t.shift(s),t}},function(t,e,n){"use strict";function i(t,e,n,i){e=r.from(e),i=i||{};var o=i.constrain,s=i.sync,u=i.offset||[],f=!1,c=!1,a=t.clone();Array.isArray(n)||(n=n?[n]:[]),Array.isArray(u)||(u=u?[u]:[]),o&&(o=o===!0?r.getDocRegion():o.getRegion()),s&&(s.size?(f=!0,c=!0):(f=s===!0?!0:s.width||!1,c=s===!0?!0:s.height||!1)),f&&a.setWidth(e.getWidth()),c&&a.setHeight(e.getHeight());for(var h,l,p,g,m=0,v=n.length,d=-1,y=-1;v>m;m++){if(l=n[m],h=u[m],a.alignToRegion(e,l),h&&(Array.isArray(h)||(h=u[m]=[h.x||h.left,h.y||h.top]),a.shift({left:h[0],top:h[1]})),!o)return t.set(a),l;if(p=a.getIntersection(o),p&&p.equals(a))return t.set(a),l;p&&(g=p.getArea())>d&&(d=g,y=m)}return~y?(l=n[y],h=u[y],a.alignToRegion(e,l),h&&a.shift({left:h[0],top:h[1]}),p=a.getIntersection(o),a.setRegion(p),a.alignToRegion(e,l),h&&a.shift({left:h[0],top:h[1]}),t.set(a),l):void 0}var r=n(1);t.exports=i},function(t,e,n){"use strict";function i(t,e,n,i){t=o.from(t);var s=t.clone(),u=r(s,e,n,i);return{position:u,region:s,widthChanged:s.getWidth()!=t.getWidth(),heightChanged:s.getHeight()!=t.getHeight(),positionChanged:s.equalsPosition(t)}}var r=n(33),o=n(1);t.exports=i},function(t,e,n){"use strict";var i=n(1);n(32),n(31);var r=n(34);i.alignRegions=function(t,e,n,i){var o=r(t,e,n,i),s=o.region;return s.equals(t)||t.setRegion(s),o.position},i.prototype.alignTo=function(t,e,n){n=n||{};var o=this,s=i.from(t),u=r(o,s,e,n),f=u.region;return f.equalsSize(o)||this.setSize(f.getSize()),f.equalsPosition(o)||this.setPosition(f.getPosition(),{absolute:!!n.absolute}),u.position},t.exports=i},function(t){t.exports=function(){"use strict";var t={};return function(e){if(!t[e]){for(var n=[],i=0;e>i;i++)n.push("a["+i+"]");t[e]=new Function("c","a","return new c("+n.join(",")+")")}return t[e]}}()},function(t,e,n){var i=n(36);t.exports=function(t,e){return i(e.length)(t,e)}},function(t){"use strict";function e(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=Object.assign||function(t){for(var n,i,r=e(t),o=1;o<arguments.length;o++){n=arguments[o],i=Object.keys(Object(n));for(var s=0;s<i.length;s++)r[i[s]]=n[i[s]]}return r}},function(t,e,n){"use strict";function i(t,e,n){return t&&n.forEach(function(n){r(t,n)&&(e[n]=t[n])}),e}var r=n(7),o=n(37),s=n(38),u=n(51).EventEmitter,f=n(40),c=n(8),a=Object.prototype.toString,h=function(t){return"[object Object]"===a.apply(t)},l={cy:"YCenter",cx:"XCenter",t:"Top",tc:"TopCenter",tl:"TopLeft",tr:"TopRight",b:"Bottom",bc:"BottomCenter",bl:"BottomLeft",br:"BottomRight",l:"Left",lc:"LeftCenter",r:"Right",rc:"RightCenter",c:"Center"},p=function(t,e,n,r){return this instanceof p?(u.call(this),h(t)?(i(t,this,["top","right","bottom","left"]),null==t.bottom&&null!=t.height&&(this.bottom=this.top+t.height),null==t.right&&null!=t.width&&(this.right=this.left+t.width),t.emitChangeEvents&&(this.emitChangeEvents=t.emitChangeEvents)):(this.top=t,this.right=e,this.bottom=n,this.left=r),this[0]=this.left,this[1]=this.top,void c(this)):o(p,arguments)};f(p,u),s(p.prototype,{emitChangeEvents:!1,getRegion:function(t){return t?this.clone():this},setRegion:function(t){return this.set(t instanceof p?t.get():t),this},validate:function(){return p.validate(this)},_before:function(){return this.emitChangeEvents?i(this,{},["left","top","bottom","right"]):void 0},_after:function(t){this.emitChangeEvents&&((this.top!=t.top||this.left!=t.left)&&this.emitPositionChange(),(this.right!=t.right||this.bottom!=t.bottom)&&this.emitSizeChange())},notifyPositionChange:function(){this.emit("changeposition",this)},emitPositionChange:function(){this.notifyPositionChange()},notifySizeChange:function(){this.emit("changesize",this)},emitSizeChange:function(){this.notifySizeChange()},add:function(t){var e,n=this._before();for(e in t)r(t,e)&&(this[e]+=t[e]);return this[0]=this.left,this[1]=this.top,this._after(n),this},substract:function(t){var e,n=this._before();for(e in t)r(t,e)&&(this[e]-=t[e]);return this[0]=this.left,this[1]=this.top,this._after(n),this},getSize:function(){return{width:this.width,height:this.height}},setPosition:function(t){var e=this.width,n=this.height;return void 0!=t.left&&(t.right=t.left+e),void 0!=t.top&&(t.bottom=t.top+n),this.set(t)},setSize:function(t){return void 0!=t.height&&void 0!=t.width?this.set({right:this.left+t.width,bottom:this.top+t.height}):(void 0!=t.width&&this.setWidth(t.width),void 0!=t.height&&this.setHeight(t.height),this)},setWidth:function(t){return this.set({right:this.left+t})},setHeight:function(t){return this.set({bottom:this.top+t})},set:function(t){var e=this._before();return i(t,this,["left","top","bottom","right"]),null==t.bottom&&null!=t.height&&(this.bottom=this.top+t.height),null==t.right&&null!=t.width&&(this.right=this.left+t.width),this[0]=this.left,this[1]=this.top,this._after(e),this},get:function(t){return t?this[t]:i(this,{},["left","right","top","bottom"])},shift:function(t){var e=this._before();return t.top&&(this.top+=t.top,this.bottom+=t.top),t.left&&(this.left+=t.left,this.right+=t.left),this[0]=this.left,this[1]=this.top,this._after(e),this},unshift:function(t){return t.top&&(t.top*=-1),t.left&&(t.left*=-1),this.shift(t)},equals:function(t){return this.equalsPosition(t)&&this.equalsSize(t)},equalsSize:function(t){var e=t instanceof p,n={width:null==t.width&&e?t.getWidth():t.width,height:null==t.height&&e?t.getHeight():t.height};return this.getWidth()==n.width&&this.getHeight()==n.height},equalsPosition:function(t){return this.top==t.top&&this.left==t.left},addLeft:function(t){var e=this._before();return this.left=this[0]=this.left+t,this._after(e),this},addTop:function(t){var e=this._before();return this.top=this[1]=this.top+t,this._after(e),this},addBottom:function(t){var e=this._before();return this.bottom+=t,this._after(e),this},addRight:function(t){var e=this._before();return this.right+=t,this._after(e),this},minTop:function(){return this.expand({top:1})},maxBottom:function(){return this.expand({bottom:1})},minLeft:function(){return this.expand({left:1})},maxRight:function(){return this.expand({right:1})},expand:function(t,e){var n,o=e||p.getDocRegion(),s=[],u=this._before();for(n in t)r(t,n)&&s.push(n);return i(o,this,s),this[0]=this.left,this[1]=this.top,this._after(u),this},clone:function(){return new p({top:this.top,left:this.left,right:this.right,bottom:this.bottom})},containsPoint:function(t,e){return 1==arguments.length&&(e=t.y,t=t.x),this.left<=t&&t<=this.right&&this.top<=e&&e<=this.bottom},containsRegion:function(t){return this.containsPoint(t.left,t.top)&&this.containsPoint(t.right,t.bottom)},diffHeight:function(t){return this.diff(t,{top:!0,bottom:!0})},diffWidth:function(t){return this.diff(t,{left:!0,right:!0})},diff:function(t,e){var n,i={};for(n in e)r(e,n)&&(i[n]=this[n]-t[n]);return i},getPosition:function(){return{left:this.left,top:this.top}},getPoint:function(t,e){l[t]||console.warn("The position ",t," could not be found! Available options are tl, bl, tr, br, l, r, t, b.");var n="getPoint"+l[t],i=this[n]();return e?{left:i.x,top:i.y}:i},getPointYCenter:function(){return{x:null,y:this.top+this.getHeight()/2}},getPointXCenter:function(){return{x:this.left+this.getWidth()/2,y:null}},getPointTop:function(){return{x:null,y:this.top}},getPointTopCenter:function(){return{x:this.left+this.getWidth()/2,y:this.top}},getPointTopLeft:function(){return{x:this.left,y:this.top}},getPointTopRight:function(){return{x:this.right,y:this.top}},getPointBottom:function(){return{x:null,y:this.bottom}},getPointBottomCenter:function(){return{x:this.left+this.getWidth()/2,y:this.bottom}},getPointBottomLeft:function(){return{x:this.left,y:this.bottom}},getPointBottomRight:function(){return{x:this.right,y:this.bottom}},getPointLeft:function(){return{x:this.left,y:null}},getPointLeftCenter:function(){return{x:this.left,y:this.top+this.getHeight()/2}},getPointRight:function(){return{x:this.right,y:null}},getPointRightCenter:function(){return{x:this.right,y:this.top+this.getHeight()/2}},getPointCenter:function(){return{x:this.left+this.getWidth()/2,y:this.top+this.getHeight()/2}},getHeight:function(){return this.bottom-this.top},getWidth:function(){return this.right-this.left},getTop:function(){return this.top},getLeft:function(){return this.left},getBottom:function(){return this.bottom},getRight:function(){return this.right},getArea:function(){return this.getWidth()*this.getHeight()},constrainTo:function(t){var e,n=this.getIntersection(t);if(!n||!n.equals(this)){var i=t.getWidth(),r=t.getHeight();return this.getWidth()>i&&(this.left=t.left,this.setWidth(i)),this.getHeight()>r&&(this.top=t.top,this.setHeight(r)),e={},this.right>t.right&&(e.left=t.right-this.right),this.bottom>t.bottom&&(e.top=t.bottom-this.bottom),this.left<t.left&&(e.left=t.left-this.left),this.top<t.top&&(e.top=t.top-this.top),this.shift(e),!0}return!1},__IS_REGION:!0}),Object.defineProperties(p.prototype,{width:{get:function(){return this.getWidth()},set:function(t){return this.setWidth(t)}},height:{get:function(){return this.getHeight()},set:function(t){return this.setHeight(t)}}}),n(41)(p),t.exports=p},function(t){"use strict";t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}},function(t,e,n){"use strict";var i=n(7),r=n(8);t.exports=function(t){var e=Math.max,n=Math.min,o={init:function(){var e,n,r={getIntersection:!0,getIntersectionArea:!0,getIntersectionHeight:!0,getIntersectionWidth:!0,getUnion:!0},o=t.prototype,s=i(r);for(n in r)s(n)&&(e=r[n],"string"!=typeof e&&(e=n),function(e,n,i){e[n]=function(e){return t[i]||console.warn("cannot find method ",i," on ",t),t[i](this,e)}}(o,e,n))},validate:r,getDocRegion:function(){return t.fromDOM(document.documentElement)},from:function(e){if(e.__IS_REGION)return e;if("undefined"!=typeof document){if("undefined"!=typeof HTMLElement&&e instanceof HTMLElement)return t.fromDOM(e);if(e.type&&"undefined"!=typeof e.pageX&&"undefined"!=typeof e.pageY)return t.fromEvent(e)}return t(e)},fromEvent:function(e){return t.fromPoint({x:e.pageX,y:e.pageY})},fromDOM:function(e){var n=e.getBoundingClientRect();return new t({top:n.top,left:n.left,bottom:n.bottom,right:n.right})},getIntersection:function(e,n){var i=this.getIntersectionArea(e,n);return i?new t(i):!1},getIntersectionWidth:function(t,i){var r=n(t.right,i.right),o=e(t.left,i.left);return r>o?r-o:0},getIntersectionHeight:function(t,i){var r=e(t.top,i.top),o=n(t.bottom,i.bottom);return o>r?o-r:0},getIntersectionArea:function(t,i){var r=e(t.top,i.top),o=n(t.right,i.right),s=n(t.bottom,i.bottom),u=e(t.left,i.left);return s>r&&o>u?{top:r,right:o,bottom:s,left:u,width:o-u,height:s-r}:!1},getUnion:function(i,r){var o=n(i.top,r.top),s=e(i.right,r.right),u=e(i.bottom,r.bottom),f=n(i.left,r.left);return new t(o,s,u,f)},getRegion:function(e){return t.from(e)},fromPoint:function(e){return new t({top:e.y,bottom:e.y,left:e.x,right:e.x})}};Object.keys(o).forEach(function(e){t[e]=o[e]}),t.init()}},function(t,e,n){"use strict";t.exports={prefixProperties:n(12),cssUnitless:n(9),object:n(16),string:n(50)}},function(t,e,n){t.exports=n(46)()},function(t){"use strict";var e=Object.prototype.toString;t.exports=function(t){return"[object Function]"===e.apply(t)}},function(t){"use strict";var e=Object.prototype.toString;t.exports=function(t){return!!t&&"[object Object]"===e.call(t)}},function(t,e,n){"use strict";var i=n(13),r=n(14),o=n(49),s=n(15),u=n(11),f=n(12),c="undefined"==typeof document?{}:document.documentElement.style;t.exports=function(t){return function(e,n){n=n||{};var a=o(i(e)),h=r(e),l=t?a:h,p=u.style?t?u.style:u.css:"";if(a in c)return n.asString?l:[l];var g=l,m=f[h],v=[];if(t&&(g=s(l)),"function"==typeof m){var d=m(l,p)||[];d&&!Array.isArray(d)&&(d=[d]),d.length&&(d=d.map(function(e){return t?o(i(e)):r(e)})),v=v.concat(d)}return p&&v.push(p+g),v.push(l),n.asString||1==v.length?v[0]:v}}},function(t){t.exports=/[-\s]+(.)?/g},function(t){"use strict";var e=/::/g,n=/([A-Z]+)([A-Z][a-z])/g,i=/([a-z\d])([A-Z])/g,r=/_/g;t.exports=function(t,o){return t?t.replace(e,"/").replace(n,"$1_$2").replace(i,"$1_$2").replace(r,o||"-"):""}},function(t){"use strict";t.exports=function(t){return t.length?t.charAt(0).toLowerCase()+t.substring(1):t}},function(t,e,n){"use strict";var i=n(16),r=n(10);t.exports=function(t,e){t=i(t,e);var n,o=[];for(n in t)r(t,n)&&o.push(n+": "+t[n]);return o.join("; ")}},function(t){function e(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(t){return"function"==typeof t}function i(t){return"number"==typeof t}function r(t){return"object"==typeof t&&null!==t}function o(t){return void 0===t}t.exports=e,e.EventEmitter=e,e.prototype._events=void 0,e.prototype._maxListeners=void 0,e.defaultMaxListeners=10,e.prototype.setMaxListeners=function(t){if(!i(t)||0>t||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},e.prototype.emit=function(t){var e,i,s,u,f,c;if(this._events||(this._events={}),"error"===t&&(!this._events.error||r(this._events.error)&&!this._events.error.length)){if(e=arguments[1],e instanceof Error)throw e;throw TypeError('Uncaught, unspecified "error" event.')}if(i=this._events[t],o(i))return!1;if(n(i))switch(arguments.length){case 1:i.call(this);break;case 2:i.call(this,arguments[1]);break;case 3:i.call(this,arguments[1],arguments[2]);break;default:for(s=arguments.length,u=new Array(s-1),f=1;s>f;f++)u[f-1]=arguments[f];i.apply(this,u)}else if(r(i)){for(s=arguments.length,u=new Array(s-1),f=1;s>f;f++)u[f-1]=arguments[f];for(c=i.slice(),s=c.length,f=0;s>f;f++)c[f].apply(this,u)}return!0},e.prototype.addListener=function(t,i){var s;if(!n(i))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,n(i.listener)?i.listener:i),this._events[t]?r(this._events[t])?this._events[t].push(i):this._events[t]=[this._events[t],i]:this._events[t]=i,r(this._events[t])&&!this._events[t].warned){var s;s=o(this._maxListeners)?e.defaultMaxListeners:this._maxListeners,s&&s>0&&this._events[t].length>s&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace())}return this},e.prototype.on=e.prototype.addListener,e.prototype.once=function(t,e){function i(){this.removeListener(t,i),r||(r=!0,e.apply(this,arguments))}if(!n(e))throw TypeError("listener must be a function");var r=!1;return i.listener=e,this.on(t,i),this},e.prototype.removeListener=function(t,e){var i,o,s,u;if(!n(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(i=this._events[t],s=i.length,o=-1,i===e||n(i.listener)&&i.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(r(i)){for(u=s;u-->0;)if(i[u]===e||i[u].listener&&i[u].listener===e){o=u;break}if(0>o)return this;1===i.length?(i.length=0,delete this._events[t]):i.splice(o,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},e.prototype.removeAllListeners=function(t){var e,i;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(i=this._events[t],n(i))this.removeListener(t,i);else for(;i.length;)this.removeListener(t,i[i.length-1]);return delete this._events[t],this},e.prototype.listeners=function(t){var e;return e=this._events&&this._events[t]?n(this._events[t])?[this._events[t]]:this._events[t].slice():[]},e.listenerCount=function(t,e){var i;return i=t._events&&t._events[e]?n(t._events[e])?1:t._events[e].length:0}},function(t,e,n){"use strict";var i=n(5),r=n(20),o={attrName:"data-tooltip",throttle:10,showDelay:500,offset:{x:5,y:5},hideOnChange:!0,hideOnChangeDelay:500,className:"tooltip",style:{padding:5,border:"1px solid gray",background:"white",boxSizing:"border-box",pointerEvents:"none",position:"absolute",visibility:"hidden",display:"inline-block",transform:"translate3d(0px, 0px, 0px)",transition:"opacity 0.3s"},visibleStyle:{opacity:1,visibility:"visible"},hiddenStyle:{opacity:0}},s=n(18),u=0;t.exports=function(t){t=t||{};var e=i({},o.style,t.style),n=i({},o.visibleStyle,t.visibleStyle),f=i({},o.hiddenStyle,t.hiddenStyle),c=r(i({},o,t));return c.style=e,c.visibleStyle=n,c.hiddenStyle=f,c.selector="["+c.attrName+"]",c.alignPositions=s(c.alignPositions),c.target=c.target||document.documentElement,c.id=u++,c}},function(t){"use strict";t.exports=function(t,e){var n={};return Object.keys(t).forEach(function(i){n[i]=e(t[i])}),n}},function(t,e,n){"use strict";var i=n(17);t.exports=function(t,e,n){var r=i(t,e),o=function(t){{var e;t.target,t.relatedTarget}(e=r(t))&&n(e,t)};return t.addEventListener("mouseover",o),function(){t.removeEventListener("mouseover",o)}}},function(t,e,n){"use strict";function i(){return!0}function r(t,e){for(var n=e;n&&n!==t;)n=n.parentNode;return n!==t}var o=n(17);t.exports=function(t,e,n,s){var u=s&&s.allowNested?i:r,f=o(t,e),c=function(t){var e,i=t.target,r=t.relatedTarget;(!r||r!==i&&u(i,r))&&(e=f(t))&&n(e,t)};return t.addEventListener("mouseout",c),function(){t.removeEventListener("mouseout",c)}}},function(t){"use strict";t.exports=function(t){var e={};return t.split(";").forEach(function(t){var n=t.split(":");n.length&&(e[n[0].trim()]=n[1].trim())}),e}},function(t,e,n){"use strict";function i(t){return l(t,function(){return""})}var r=n(35),o=n(5),s=n(21),u=n(19),f=n(59),c=n(56),a=n(60),h=n(18),l=n(53);t.exports=function(t){function e(e){var n=e.getAttribute(t.attrName),p=a(t);p.innerHTML=t.escape?s(n):n;var g=t.alignPositions,m=r.from(p),v=r.from(e),d=e.getAttribute(t.attrName+"-positions"),y=e.getAttribute(t.attrName+"-style"),b=o({},l,t.style);y&&(y=c(y),l=i(y),o(b,y)),d&&(g=h(d.split(";")));m.alignTo(v,g,{offset:f(t.offset,g),constrain:!0});u(p,b,t.visibleStyle,{top:m.top,left:m.left})}function n(){u(a(t),t.hiddenStyle)}var l,p=function(){var i,r;return function(o){o!=i&&(r&&(clearTimeout(r),r=null),o?t.showDelay?r=setTimeout(function(){r=null,e(o)},t.showDelay):e(o):n()),i=o}}(),g=function(){var e,n;return function(i){i!=e&&(e=i,t.hideOnChange&&((n||i)&&(n&&clearTimeout(n),n=setTimeout(function(){n=null,p(e)},t.hideOnChangeDelay)),i=null),p(i))}}(),m=!1;return{destroy:function(){a.destroy(t)},hold:function(){m=!0},onHold:function(){return m},set:function(t){m=!1,g(t)}}}},function(t){"use strict";t.exports=function(t,e,n){var i,r,o=-1;return void 0===e&&(e=0),0>e?t:function(){i=n||this,r=arguments,-1!==o||(o=setTimeout(function(){t.apply(i,r),i=null,o=-1},e))}}},function(t){"use strict";var e={t:{x:1,y:1},l:{x:1,y:1},b:{x:1,y:-1},r:{x:-1,y:1}};t.exports=function(t,n){if(t){var i;Array.isArray(t)&&(i=t),i=void 0!=t.x?[t.x,t.y]:[t.left,t.top];var r=i[0],o=i[1];return n.map(function(t){var n=t.split("-"),i=n[0],s=i[0],u=i[1],f=e[s],c=e[u],a=1,h=1;return f&&(a*=f.x,h*=f.y),c&&(a*=c.x,h*=c.y),[r*a,o*h]})}}},function(t,e,n){"use strict";var i=n(19),r={},o=function(t){var e=r[t.id];return e||(e=i(document.createElement("div"),t.style||{}),e.className=t.className,document.body.appendChild(e),r[t.id]=e),e};o.destroy=function(t){var e=r[t.id];if(e){var n=e.parentNode;n&&n.removeChild(e)}},t.exports=o}])});