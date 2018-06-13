!function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.3",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b),"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:this,document);
/*! Respond.js v1.4.2: min/max-width media query polyfill * Copyright 2013 Scott Jehl
 * Licensed under https://github.com/scottjehl/Respond/blob/master/LICENSE-MIT
 *  */

!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){u(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))};if(c.ajax=f,c.queue=d,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var g,h,i,j=a.document,k=j.documentElement,l=[],m=[],n=[],o={},p=30,q=j.getElementsByTagName("head")[0]||k,r=j.getElementsByTagName("base")[0],s=q.getElementsByTagName("link"),t=function(){var a,b=j.createElement("div"),c=j.body,d=k.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=j.createElement("body"),c.style.background="none"),k.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&k.insertBefore(c,k.firstChild),a=b.offsetWidth,f?k.removeChild(c):c.removeChild(b),k.style.fontSize=d,e&&(c.style.fontSize=e),a=i=parseFloat(a)},u=function(b){var c="clientWidth",d=k[c],e="CSS1Compat"===j.compatMode&&d||j.body[c]||d,f={},o=s[s.length-1],r=(new Date).getTime();if(b&&g&&p>r-g)return a.clearTimeout(h),h=a.setTimeout(u,p),void 0;g=r;for(var v in l)if(l.hasOwnProperty(v)){var w=l[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?i||t():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?i||t():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(m[w.rules]))}for(var C in n)n.hasOwnProperty(C)&&n[C]&&n[C].parentNode===q&&q.removeChild(n[C]);n.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=j.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,q.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(j.createTextNode(F)),n.push(E)}},v=function(a,b,d){var e=a.replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var g=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},h=!f&&d;b.length&&(b+="/"),h&&(f=1);for(var i=0;f>i;i++){var j,k,n,o;h?(j=d,m.push(g(a))):(j=e[i].match(c.regex.findStyles)&&RegExp.$1,m.push(RegExp.$2&&g(RegExp.$2))),n=j.split(","),o=n.length;for(var p=0;o>p;p++)k=n[p],l.push({media:k.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:m.length-1,hasquery:k.indexOf("(")>-1,minw:k.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:k.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},w=function(){if(d.length){var b=d.shift();f(b.href,function(c){v(c,b.href,b.media),o[b.href]=!0,a.setTimeout(function(){w()},0)})}},x=function(){for(var b=0;b<s.length;b++){var c=s[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!o[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(v(c.styleSheet.rawCssText,e,f),o[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!r||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}w()};x(),c.update=x,c.getEmValue=t,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
if("undefined"==typeof jQuery)throw new Error("AdminLTE requires jQuery");+function(a){"use strict";function b(b){return this.each(function(){var e=a(this),g=e.data(c);if(!g){var h=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,g=new f(e,h))}if("string"==typeof g){if(void 0===g[b])throw new Error("No method named "+b);g[b]()}})}var c="lte.boxrefresh",d={source:"",params:{},trigger:".refresh-btn",content:".box-body",loadInContent:!0,responseType:"",overlayTemplate:'<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>',onLoadStart:function(){},onLoadDone:function(a){return a}},e={data:'[data-widget="box-refresh"]'},f=function(b,c){if(this.element=b,this.options=c,this.$overlay=a(c.overlay),""===c.source)throw new Error("Source url was not defined. Please specify a url in your BoxRefresh source option.");this._setUpListeners(),this.load()};f.prototype.load=function(){this._addOverlay(),this.options.onLoadStart.call(a(this)),a.get(this.options.source,this.options.params,function(b){this.options.loadInContent&&a(this.options.content).html(b),this.options.onLoadDone.call(a(this),b),this._removeOverlay()}.bind(this),""!==this.options.responseType&&this.options.responseType)},f.prototype._setUpListeners=function(){a(this.element).on("click",e.trigger,function(a){a&&a.preventDefault(),this.load()}.bind(this))},f.prototype._addOverlay=function(){a(this.element).append(this.$overlay)},f.prototype._removeOverlay=function(){a(this.element).remove(this.$overlay)};var g=a.fn.boxRefresh;a.fn.boxRefresh=b,a.fn.boxRefresh.Constructor=f,a.fn.boxRefresh.noConflict=function(){return a.fn.boxRefresh=g,this},a(window).on("load",function(){a(e.data).each(function(){b.call(a(this))})})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var g=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new h(e,g))}if("string"==typeof b){if(void 0===f[b])throw new Error("No method named "+b);f[b]()}})}var c="lte.boxwidget",d={animationSpeed:500,collapseTrigger:'[data-widget="collapse"]',removeTrigger:'[data-widget="remove"]',collapseIcon:"fa-minus",expandIcon:"fa-plus",removeIcon:"fa-times"},e={data:".box",collapsed:".collapsed-box",body:".box-body",footer:".box-footer",tools:".box-tools"},f={collapsed:"collapsed-box"},g={collapsed:"collapsed.boxwidget",expanded:"expanded.boxwidget",removed:"removed.boxwidget"},h=function(a,b){this.element=a,this.options=b,this._setUpListeners()};h.prototype.toggle=function(){a(this.element).is(e.collapsed)?this.expand():this.collapse()},h.prototype.expand=function(){var b=a.Event(g.expanded),c=this.options.collapseIcon,d=this.options.expandIcon;a(this.element).removeClass(f.collapsed),a(this.element).find(e.tools).find("."+d).removeClass(d).addClass(c),a(this.element).find(e.body+", "+e.footer).slideDown(this.options.animationSpeed,function(){a(this.element).trigger(b)}.bind(this))},h.prototype.collapse=function(){var b=a.Event(g.collapsed),c=this.options.collapseIcon,d=this.options.expandIcon;a(this.element).find(e.tools).find("."+c).removeClass(c).addClass(d),a(this.element).find(e.body+", "+e.footer).slideUp(this.options.animationSpeed,function(){a(this.element).addClass(f.collapsed),a(this.element).trigger(b)}.bind(this))},h.prototype.remove=function(){var b=a.Event(g.removed);a(this.element).slideUp(this.options.animationSpeed,function(){a(this.element).trigger(b),a(this.element).remove()}.bind(this))},h.prototype._setUpListeners=function(){var b=this;a(this.element).on("click",this.options.collapseTrigger,function(a){a&&a.preventDefault(),b.toggle()}),a(this.element).on("click",this.options.removeTrigger,function(a){a&&a.preventDefault(),b.remove()})};var i=a.fn.boxWidget;a.fn.boxWidget=b,a.fn.boxWidget.Constructor=h,a.fn.boxWidget.noConflict=function(){return a.fn.boxWidget=i,this},a(window).on("load",function(){a(e.data).each(function(){b.call(a(this))})})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var g=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new h(e,g))}"string"==typeof b&&f.toggle()})}var c="lte.controlsidebar",d={slide:!0},e={sidebar:".control-sidebar",data:'[data-toggle="control-sidebar"]',open:".control-sidebar-open",bg:".control-sidebar-bg",wrapper:".wrapper",content:".content-wrapper",boxed:".layout-boxed"},f={open:"control-sidebar-open",fixed:"fixed"},g={collapsed:"collapsed.controlsidebar",expanded:"expanded.controlsidebar"},h=function(a,b){this.element=a,this.options=b,this.hasBindedResize=!1,this.init()};h.prototype.init=function(){a(this.element).is(e.data)||a(this).on("click",this.toggle),this.fix(),a(window).resize(function(){this.fix()}.bind(this))},h.prototype.toggle=function(b){b&&b.preventDefault(),this.fix(),a(e.sidebar).is(e.open)||a("body").is(e.open)?this.collapse():this.expand()},h.prototype.expand=function(){this.options.slide?a(e.sidebar).addClass(f.open):a("body").addClass(f.open),a(this.element).trigger(a.Event(g.expanded))},h.prototype.collapse=function(){a("body, "+e.sidebar).removeClass(f.open),a(this.element).trigger(a.Event(g.collapsed))},h.prototype.fix=function(){a("body").is(e.boxed)&&this._fixForBoxed(a(e.bg))},h.prototype._fixForBoxed=function(b){b.css({position:"absolute",height:a(e.wrapper).height()})};var i=a.fn.controlSidebar;a.fn.controlSidebar=b,a.fn.controlSidebar.Constructor=h,a.fn.controlSidebar.noConflict=function(){return a.fn.controlSidebar=i,this},a(document).on("click",e.data,function(c){c&&c.preventDefault(),b.call(a(this),"toggle")})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data(c);e||d.data(c,e=new f(d)),"string"==typeof b&&e.toggle(d)})}var c="lte.directchat",d={data:'[data-widget="chat-pane-toggle"]',box:".direct-chat"},e={open:"direct-chat-contacts-open"},f=function(a){this.element=a};f.prototype.toggle=function(a){a.parents(d.box).first().toggleClass(e.open)};var g=a.fn.directChat;a.fn.directChat=b,a.fn.directChat.Constructor=f,a.fn.directChat.noConflict=function(){return a.fn.directChat=g,this},a(document).on("click",d.data,function(c){c&&c.preventDefault(),b.call(a(this),"toggle")})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var h=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new g(h))}if("string"==typeof b){if(void 0===f[b])throw new Error("No method named "+b);f[b]()}})}var c="lte.layout",d={slimscroll:!0,resetHeight:!0},e={wrapper:".wrapper",contentWrapper:".content-wrapper",layoutBoxed:".layout-boxed",mainFooter:".main-footer",mainHeader:".main-header",sidebar:".sidebar",controlSidebar:".control-sidebar",fixed:".fixed",sidebarMenu:".sidebar-menu",logo:".main-header .logo"},f={fixed:"fixed",holdTransition:"hold-transition"},g=function(a){this.options=a,this.bindedResize=!1,this.activate()};g.prototype.activate=function(){this.fix(),this.fixSidebar(),a("body").removeClass(f.holdTransition),this.options.resetHeight&&a("body, html, "+e.wrapper).css({height:"auto","min-height":"100%"}),this.bindedResize||(a(window).resize(function(){this.fix(),this.fixSidebar(),a(e.logo+", "+e.sidebar).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){this.fix(),this.fixSidebar()}.bind(this))}.bind(this)),this.bindedResize=!0),a(e.sidebarMenu).on("expanded.tree",function(){this.fix(),this.fixSidebar()}.bind(this)),a(e.sidebarMenu).on("collapsed.tree",function(){this.fix(),this.fixSidebar()}.bind(this))},g.prototype.fix=function(){a(e.layoutBoxed+" > "+e.wrapper).css("overflow","hidden");var b=a(e.mainFooter).outerHeight()||0,c=a(e.mainHeader).outerHeight()+b,d=a(window).height(),g=a(e.sidebar).height()||0;if(a("body").hasClass(f.fixed))a(e.contentWrapper).css("min-height",d-b);else{var h;d>=g?(a(e.contentWrapper).css("min-height",d-c),h=d-c):(a(e.contentWrapper).css("min-height",g),h=g);var i=a(e.controlSidebar);void 0!==i&&i.height()>h&&a(e.contentWrapper).css("min-height",i.height())}},g.prototype.fixSidebar=function(){if(!a("body").hasClass(f.fixed))return void(void 0!==a.fn.slimScroll&&a(e.sidebar).slimScroll({destroy:!0}).height("auto"));this.options.slimscroll&&void 0!==a.fn.slimScroll&&a(e.sidebar).slimScroll({height:a(window).height()-a(e.mainHeader).height()+"px",color:"rgba(0,0,0,0.2)",size:"3px"})};var h=a.fn.layout;a.fn.layout=b,a.fn.layout.Constuctor=g,a.fn.layout.noConflict=function(){return a.fn.layout=h,this},a(window).on("load",function(){b.call(a("body"))})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var g=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new h(g))}"toggle"===b&&f.toggle()})}var c="lte.pushmenu",d={collapseScreenSize:767,expandOnHover:!1,expandTransitionDelay:200},e={collapsed:".sidebar-collapse",open:".sidebar-open",mainSidebar:".main-sidebar",contentWrapper:".content-wrapper",searchInput:".sidebar-form .form-control",button:'[data-toggle="push-menu"]',mini:".sidebar-mini",expanded:".sidebar-expanded-on-hover",layoutFixed:".fixed"},f={collapsed:"sidebar-collapse",open:"sidebar-open",mini:"sidebar-mini",expanded:"sidebar-expanded-on-hover",expandFeature:"sidebar-mini-expand-feature",layoutFixed:"fixed"},g={expanded:"expanded.pushMenu",collapsed:"collapsed.pushMenu"},h=function(a){this.options=a,this.init()};h.prototype.init=function(){(this.options.expandOnHover||a("body").is(e.mini+e.layoutFixed))&&(this.expandOnHover(),a("body").addClass(f.expandFeature)),a(e.contentWrapper).click(function(){a(window).width()<=this.options.collapseScreenSize&&a("body").hasClass(f.open)&&this.close()}.bind(this)),a(e.searchInput).click(function(a){a.stopPropagation()})},h.prototype.toggle=function(){var b=a(window).width(),c=!a("body").hasClass(f.collapsed);b<=this.options.collapseScreenSize&&(c=a("body").hasClass(f.open)),c?this.close():this.open()},h.prototype.open=function(){a(window).width()>this.options.collapseScreenSize?a("body").removeClass(f.collapsed).trigger(a.Event(g.expanded)):a("body").addClass(f.open).trigger(a.Event(g.expanded))},h.prototype.close=function(){a(window).width()>this.options.collapseScreenSize?a("body").addClass(f.collapsed).trigger(a.Event(g.collapsed)):a("body").removeClass(f.open+" "+f.collapsed).trigger(a.Event(g.collapsed))},h.prototype.expandOnHover=function(){a(e.mainSidebar).hover(function(){a("body").is(e.mini+e.collapsed)&&a(window).width()>this.options.collapseScreenSize&&this.expand()}.bind(this),function(){a("body").is(e.expanded)&&this.collapse()}.bind(this))},h.prototype.expand=function(){setTimeout(function(){a("body").removeClass(f.collapsed).addClass(f.expanded)},this.options.expandTransitionDelay)},h.prototype.collapse=function(){setTimeout(function(){a("body").removeClass(f.expanded).addClass(f.collapsed)},this.options.expandTransitionDelay)};var i=a.fn.pushMenu;a.fn.pushMenu=b,a.fn.pushMenu.Constructor=h,a.fn.pushMenu.noConflict=function(){return a.fn.pushMenu=i,this},a(document).on("click",e.button,function(c){c.preventDefault(),b.call(a(this),"toggle")}),a(window).on("load",function(){b.call(a(e.button))})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var e=a(this),f=e.data(c);if(!f){var h=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,f=new g(e,h))}if("string"==typeof f){if(void 0===f[b])throw new Error("No method named "+b);f[b]()}})}var c="lte.todolist",d={onCheck:function(a){return a},onUnCheck:function(a){return a}},e={data:'[data-widget="todo-list"]'},f={done:"done"},g=function(a,b){this.element=a,this.options=b,this._setUpListeners()};g.prototype.toggle=function(a){if(a.parents(e.li).first().toggleClass(f.done),!a.prop("checked"))return void this.unCheck(a);this.check(a)},g.prototype.check=function(a){this.options.onCheck.call(a)},g.prototype.unCheck=function(a){this.options.onUnCheck.call(a)},g.prototype._setUpListeners=function(){var b=this;a(this.element).on("change ifChanged","input:checkbox",function(){b.toggle(a(this))})};var h=a.fn.todoList;a.fn.todoList=b,a.fn.todoList.Constructor=g,a.fn.todoList.noConflict=function(){return a.fn.todoList=h,this},a(window).on("load",function(){a(e.data).each(function(){b.call(a(this))})})}(jQuery),function(a){"use strict";function b(b){return this.each(function(){var e=a(this);if(!e.data(c)){var f=a.extend({},d,e.data(),"object"==typeof b&&b);e.data(c,new h(e,f))}})}var c="lte.tree",d={animationSpeed:500,accordion:!0,followLink:!1,trigger:".treeview a"},e={tree:".tree",treeview:".treeview",treeviewMenu:".treeview-menu",open:".menu-open, .active",li:"li",data:'[data-widget="tree"]',active:".active"},f={open:"menu-open",tree:"tree"},g={collapsed:"collapsed.tree",expanded:"expanded.tree"},h=function(b,c){this.element=b,this.options=c,a(this.element).addClass(f.tree),a(e.treeview+e.active,this.element).addClass(f.open),this._setUpListeners()};h.prototype.toggle=function(a,b){var c=a.next(e.treeviewMenu),d=a.parent(),g=d.hasClass(f.open);d.is(e.treeview)&&(this.options.followLink&&"#"!==a.attr("href")||b.preventDefault(),g?this.collapse(c,d):this.expand(c,d))},h.prototype.expand=function(b,c){var d=a.Event(g.expanded);if(this.options.accordion){var h=c.siblings(e.open),i=h.children(e.treeviewMenu);this.collapse(i,h)}c.addClass(f.open),b.slideDown(this.options.animationSpeed,function(){a(this.element).trigger(d)}.bind(this))},h.prototype.collapse=function(b,c){var d=a.Event(g.collapsed);b.find(e.open).removeClass(f.open),c.removeClass(f.open),b.slideUp(this.options.animationSpeed,function(){b.find(e.open+" > "+e.treeview).slideUp(),a(this.element).trigger(d)}.bind(this))},h.prototype._setUpListeners=function(){var b=this;a(this.element).on("click",this.options.trigger,function(c){b.toggle(a(this),c)})};var i=a.fn.tree;a.fn.tree=b,a.fn.tree.Constructor=h,a.fn.tree.noConflict=function(){return a.fn.tree=i,this},a(window).on("load",function(){a(e.data).each(function(){b.call(a(this))})})}(jQuery);
(function(root,factory){if(typeof define==="function"&&define.amd){define(factory)}else{if(typeof exports==="object"){module.exports=factory()}else{root.NProgress=factory()}}})(this,function(){var NProgress={};NProgress.version="0.2.0";var Settings=NProgress.settings={minimum:0.08,easing:"linear",positionUsing:"",speed:200,trickle:true,trickleSpeed:200,showSpinner:true,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};NProgress.configure=function(options){var key,value;for(key in options){value=options[key];if(value!==undefined&&options.hasOwnProperty(key)){Settings[key]=value}}return this};NProgress.status=null;NProgress.set=function(n){var started=NProgress.isStarted();n=clamp(n,Settings.minimum,1);NProgress.status=(n===1?null:n);var progress=NProgress.render(!started),bar=progress.querySelector(Settings.barSelector),speed=Settings.speed,ease=Settings.easing;progress.offsetWidth;queue(function(next){if(Settings.positionUsing===""){Settings.positionUsing=NProgress.getPositioningCSS()}css(bar,barPositionCSS(n,speed,ease));if(n===1){css(progress,{transition:"none",opacity:1});progress.offsetWidth;setTimeout(function(){css(progress,{transition:"all "+speed+"ms linear",opacity:0});setTimeout(function(){NProgress.remove();next()},speed)},speed)}else{setTimeout(next,speed)}});return this};NProgress.isStarted=function(){return typeof NProgress.status==="number"};NProgress.start=function(){if(!NProgress.status){NProgress.set(0)}var work=function(){setTimeout(function(){if(!NProgress.status){return}NProgress.trickle();work()},Settings.trickleSpeed)};if(Settings.trickle){work()}return this};NProgress.done=function(force){if(!force&&!NProgress.status){return this}return NProgress.inc(0.3+0.5*Math.random()).set(1)};NProgress.inc=function(amount){var n=NProgress.status;if(!n){return NProgress.start()}else{if(n>1){return}else{if(typeof amount!=="number"){if(n>=0&&n<0.2){amount=0.1}else{if(n>=0.2&&n<0.5){amount=0.04}else{if(n>=0.5&&n<0.8){amount=0.02}else{if(n>=0.8&&n<0.99){amount=0.005}else{amount=0}}}}}n=clamp(n+amount,0,0.994);return NProgress.set(n)}}};NProgress.trickle=function(){return NProgress.inc()};(function(){var initial=0,current=0;NProgress.promise=function($promise){if(!$promise||$promise.state()==="resolved"){return this}if(current===0){NProgress.start()}initial++;current++;$promise.always(function(){current--;if(current===0){initial=0;NProgress.done()}else{NProgress.set((initial-current)/initial)}});return this}})();NProgress.render=function(fromStart){if(NProgress.isRendered()){return document.getElementById("nprogress")}addClass(document.documentElement,"nprogress-busy");var progress=document.createElement("div");progress.id="nprogress";progress.innerHTML=Settings.template;var bar=progress.querySelector(Settings.barSelector),perc=fromStart?"-100":toBarPerc(NProgress.status||0),parent=document.querySelector(Settings.parent),spinner;css(bar,{transition:"all 0 linear",transform:"translate3d("+perc+"%,0,0)"});if(!Settings.showSpinner){spinner=progress.querySelector(Settings.spinnerSelector);spinner&&removeElement(spinner)}if(parent!=document.body){addClass(parent,"nprogress-custom-parent")}parent.appendChild(progress);return progress};NProgress.remove=function(){removeClass(document.documentElement,"nprogress-busy");removeClass(document.querySelector(Settings.parent),"nprogress-custom-parent");var progress=document.getElementById("nprogress");progress&&removeElement(progress)};NProgress.isRendered=function(){return !!document.getElementById("nprogress")};NProgress.getPositioningCSS=function(){var bodyStyle=document.body.style;var vendorPrefix=("WebkitTransform" in bodyStyle)?"Webkit":("MozTransform" in bodyStyle)?"Moz":("msTransform" in bodyStyle)?"ms":("OTransform" in bodyStyle)?"O":"";if(vendorPrefix+"Perspective" in bodyStyle){return"translate3d"}else{if(vendorPrefix+"Transform" in bodyStyle){return"translate"}else{return"margin"}}};function clamp(n,min,max){if(n<min){return min}if(n>max){return max}return n}function toBarPerc(n){return(-1+n)*100}function barPositionCSS(n,speed,ease){var barCSS;if(Settings.positionUsing==="translate3d"){barCSS={transform:"translate3d("+toBarPerc(n)+"%,0,0)"}}else{if(Settings.positionUsing==="translate"){barCSS={transform:"translate("+toBarPerc(n)+"%,0)"}}else{barCSS={"margin-left":toBarPerc(n)+"%"}}}barCSS.transition="all "+speed+"ms "+ease;return barCSS}var queue=(function(){var pending=[];function next(){var fn=pending.shift();if(fn){fn(next)}}return function(fn){pending.push(fn);if(pending.length==1){next()}}})();var css=(function(){var cssPrefixes=["Webkit","O","Moz","ms"],cssProps={};function camelCase(string){return string.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(match,letter){return letter.toUpperCase()})}function getVendorProp(name){var style=document.body.style;if(name in style){return name}var i=cssPrefixes.length,capName=name.charAt(0).toUpperCase()+name.slice(1),vendorName;while(i--){vendorName=cssPrefixes[i]+capName;if(vendorName in style){return vendorName}}return name}function getStyleProp(name){name=camelCase(name);return cssProps[name]||(cssProps[name]=getVendorProp(name))}function applyCss(element,prop,value){prop=getStyleProp(prop);element.style[prop]=value}return function(element,properties){var args=arguments,prop,value;if(args.length==2){for(prop in properties){value=properties[prop];if(value!==undefined&&properties.hasOwnProperty(prop)){applyCss(element,prop,value)}}}else{applyCss(element,args[1],args[2])}}})();function hasClass(element,name){var list=typeof element=="string"?element:classList(element);return list.indexOf(" "+name+" ")>=0}function addClass(element,name){var oldList=classList(element),newList=oldList+name;if(hasClass(oldList,name)){return}element.className=newList.substring(1)}function removeClass(element,name){var oldList=classList(element),newList;if(!hasClass(element,name)){return}newList=oldList.replace(" "+name+" "," ");element.className=newList.substring(1,newList.length-1)}function classList(element){return(" "+(element&&element.className||"")+" ").replace(/\s+/gi," ")}function removeElement(element){element&&element.parentNode&&element.parentNode.removeChild(element)}return NProgress});
!function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.iziToast=e(t)}("undefined"!=typeof global?global:window||this.window||this.global,function(t){"use strict";var e={},o="iziToast",n=(document.querySelector("body"),!!/Mobi/.test(navigator.userAgent)),s=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),i="undefined"!=typeof InstallTrigger,a="ontouchstart"in document.documentElement,r=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],l={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},d=568,c={},u={id:null,"class":"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,rtl:!1,position:"bottomRight",target:"",targetFirst:!0,toastOnce:!1,timeout:5e3,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),"function"!=typeof window.CustomEvent){var p=function(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),o};p.prototype=window.Event.prototype,window.CustomEvent=p}var m=function(t,e,o){if("[object Object]"===Object.prototype.toString.call(t))for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(o,t[n],n,t);else if(t)for(var s=0,i=t.length;i>s;s++)e.call(o,t[s],s,t)},g=function(t,e){var o={};return m(t,function(e,n){o[n]=t[n]}),m(e,function(t,n){o[n]=e[n]}),o},f=function(t){var e=document.createDocumentFragment(),o=document.createElement("div");for(o.innerHTML=t;o.firstChild;)e.appendChild(o.firstChild);return e},v=function(t){return"#"==t.substring(0,1)||"rgb"==t.substring(0,3)||"hsl"==t.substring(0,3)},y=function(){return{move:function(t,e,n,a){var r,l=.3,d=180;0!==a&&(t.classList.add(o+"-dragged"),t.style.transform="translateX("+a+"px)",a>0?(r=(d-a)/d,l>r&&e.hide(t,g(n,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),"drag")):(r=(d+a)/d,l>r&&e.hide(t,g(n,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),"drag")),t.style.opacity=r,l>r&&((s||i)&&(t.style.left=a+"px"),t.parentNode.style.opacity=l,this.stopMoving(t,null)))},startMoving:function(t,e,o,n){n=n||window.event;var s=a?n.touches[0].clientX:n.clientX,i=t.style.transform.replace("px)","");i=i.replace("translateX(","");var r=s-i;t.classList.remove(o.transitionIn),t.classList.remove(o.transitionInMobile),t.style.transition="",a?document.ontouchmove=function(n){n.preventDefault(),n=n||window.event;var s=n.touches[0].clientX,i=s-r;y.move(t,e,o,i)}:document.onmousemove=function(n){n.preventDefault(),n=n||window.event;var s=n.clientX,i=s-r;y.move(t,e,o,i)}},stopMoving:function(t,e){a?document.ontouchmove=function(){}:document.onmousemove=function(){},t.style.opacity="",t.style.transform="",t.classList.contains(o+"-dragged")&&(t.classList.remove(o+"-dragged"),t.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){t.style.transition=""},400))}}}();return e.destroy=function(){m(document.querySelectorAll("."+o+"-wrapper"),function(t,e){t.remove()}),m(document.querySelectorAll("."+o),function(t,e){t.remove()}),document.removeEventListener(o+"-opened",{},!1),document.removeEventListener(o+"-opening",{},!1),document.removeEventListener(o+"-closing",{},!1),document.removeEventListener(o+"-closed",{},!1),document.removeEventListener("keyup",{},!1),c={}},e.settings=function(t){e.destroy(),c=t,u=g(u,t||{})},m(l,function(t,o){e[o]=function(e){var o=g(c,e||{});o=g(t,o||{}),this.show(o)}}),e.progress=function(t,e,n){var s=this,i=g(s.settings,e||{}),a=t.querySelector("."+o+"-progressbar div");return{start:function(){null!==a&&(a.style.transition="width "+i.timeout+"ms "+i.progressBarEasing,a.style.width="0%"),i.TIME.START=(new Date).getTime(),i.TIME.END=i.TIME.START+i.timeout,i.TIME.TIMER=setTimeout(function(){clearTimeout(i.TIME.TIMER),t.classList.contains(o+"-closing")||(s.hide(t,i,"timeout"),"function"==typeof n&&n.apply(s))},i.timeout)},pause:function(){if(i.TIME.REMAINING=i.TIME.END-(new Date).getTime(),clearTimeout(i.TIME.TIMER),null!==a){var t=window.getComputedStyle(a),e=t.getPropertyValue("width");a.style.transition="none",a.style.width=e}"function"==typeof n&&setTimeout(function(){n.apply(s)},10)},resume:function(){null!==a&&(a.style.transition="width "+i.TIME.REMAINING+"ms "+i.progressBarEasing,a.style.width="0%"),i.TIME.END=(new Date).getTime()+i.TIME.REMAINING,i.TIME.TIMER=setTimeout(function(){clearTimeout(i.TIME.TIMER),t.classList.contains(o+"-closing")||(s.hide(t,i,"timeout"),"function"==typeof n&&n.apply(s))},i.TIME.REMAINING)},reset:function(){clearTimeout(i.TIME.TIMER),null!==a&&(a.style.transition="none",a.style.width="100%"),"function"==typeof n&&setTimeout(function(){n.apply(s)},10)}}},e.hide=function(t,e,s){var i=g(this.settings,e||{});if(s=s||null,"object"!=typeof t&&(t=document.querySelector(t)),t.classList.contains(o+"-opening"))return!1;t.classList.add(o+"-closing"),i.closedBy=s,i.REF=t.getAttribute("data-iziToast-ref"),function(){var t=document.querySelector("."+o+"-overlay");if(null!==t){var e=t.getAttribute("data-iziToast-ref");e=e.split(",");var n=e.indexOf(i.REF);-1!==n&&e.splice(n,1),t.setAttribute("data-iziToast-ref",e.join()),0===e.length&&(t.classList.remove("fadeIn"),t.classList.add("fadeOut"),setTimeout(function(){t.remove()},700))}}(),(i.transitionIn||i.transitionInMobile)&&(t.classList.remove(i.transitionIn),t.classList.remove(i.transitionInMobile)),n||window.innerWidth<=d?i.transitionOutMobile&&t.classList.add(i.transitionOutMobile):i.transitionOut&&t.classList.add(i.transitionOut);var a=t.parentNode.offsetHeight;t.parentNode.style.height=a+"px",t.style.pointerEvents="none",(!n||window.innerWidth>d)&&(t.parentNode.style.transitionDelay="0.2s");try{i.closedBy=s;var r=new CustomEvent(o+"-closing",{detail:i,bubbles:!0,cancelable:!0});document.dispatchEvent(r)}catch(l){console.warn(l)}setTimeout(function(){t.parentNode.style.height="0px",t.parentNode.style.overflow="",setTimeout(function(){t.parentNode.remove();try{i.closedBy=s;var e=new CustomEvent(o+"-closed",{detail:i,bubbles:!0,cancelable:!0});document.dispatchEvent(e)}catch(n){console.warn(n)}"undefined"!=typeof i.onClosed&&i.onClosed.apply(null,[i,t,s])},1e3)},200),"undefined"!=typeof i.onClosing&&i.onClosing.apply(null,[i,t,s])},e.show=function(t){var e=this,s=g(c,t||{});if(s=g(u,s),s.TIME={},s.toastOnce&&s.id&&document.querySelectorAll("."+o+"#"+s.id).length>0)return!1;s.REF=(new Date).getTime(),e.settings=s;var i={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),icon:document.createElement("i"),cover:document.createElement("div"),buttons:document.createElement("div"),wrapper:null};i.toast.setAttribute("data-iziToast-ref",s.REF),i.toast.appendChild(i.toastBody),i.toastCapsule.appendChild(i.toast),function(){if(i.toast.classList.add(o),i.toast.classList.add(o+"-opening"),i.toastCapsule.classList.add(o+"-capsule"),i.toastBody.classList.add(o+"-body"),i.toastTexts.classList.add(o+"-texts"),n||window.innerWidth<=d?s.transitionInMobile&&i.toast.classList.add(s.transitionInMobile):s.transitionIn&&i.toast.classList.add(s.transitionIn),s["class"]){var t=s["class"].split(" ");m(t,function(t,e){i.toast.classList.add(t)})}s.id&&(i.toast.id=s.id),s.rtl&&i.toast.classList.add(o+"-rtl"),s.layout>1&&i.toast.classList.add(o+"-layout"+s.layout),s.balloon&&i.toast.classList.add(o+"-balloon"),s.maxWidth&&(isNaN(s.maxWidth)?i.toast.style.maxWidth=s.maxWidth:i.toast.style.maxWidth=s.maxWidth+"px"),""===s.theme&&"light"===s.theme||i.toast.classList.add(o+"-theme-"+s.theme),s.color&&(v(s.color)?i.toast.style.background=s.color:i.toast.classList.add(o+"-color-"+s.color)),s.backgroundColor&&(i.toast.style.background=s.backgroundColor,s.balloon&&(i.toast.style.borderColor=s.backgroundColor))}(),function(){s.image&&(i.cover.classList.add(o+"-cover"),i.cover.style.width=s.imageWidth+"px",i.cover.style.backgroundImage="url("+s.image+")",s.rtl?i.toastBody.style.marginRight=s.imageWidth+10+"px":i.toastBody.style.marginLeft=s.imageWidth+10+"px",i.toast.appendChild(i.cover))}(),function(){s.close?(i.buttonClose=document.createElement("button"),i.buttonClose.classList.add(o+"-close"),i.buttonClose.addEventListener("click",function(t){t.target;e.hide(i.toast,{},"button")}),i.toast.appendChild(i.buttonClose)):s.rtl?i.toast.style.paddingLeft="20px":i.toast.style.paddingRight="20px"}(),function(){s.timeout&&(s.progressBar&&(i.progressBar=document.createElement("div"),i.progressBarDiv=document.createElement("div"),i.progressBar.classList.add(o+"-progressbar"),i.progressBarDiv.style.background=s.progressBarColor,i.progressBar.appendChild(i.progressBarDiv),i.toast.appendChild(i.progressBar)),s.pauseOnHover&&!s.resetOnHover&&(i.toast.addEventListener("mouseenter",function(t){this.classList.add(o+"-paused"),e.progress(i.toast,s).pause()}),i.toast.addEventListener("mouseleave",function(t){this.classList.remove(o+"-paused"),e.progress(i.toast,s).resume()})),s.resetOnHover&&(i.toast.addEventListener("mouseenter",function(t){this.classList.add(o+"-reseted"),e.progress(i.toast,s).reset()}),i.toast.addEventListener("mouseleave",function(t){this.classList.remove(o+"-reseted"),e.progress(i.toast,s).start()})))}(),function(){s.icon&&(i.icon.setAttribute("class",o+"-icon "+s.icon),s.iconText&&i.icon.appendChild(document.createTextNode(s.iconText)),s.rtl?i.toastBody.style.paddingRight="33px":i.toastBody.style.paddingLeft="33px",s.iconColor&&(i.icon.style.color=s.iconColor),i.toastBody.appendChild(i.icon))}(),function(){s.title.length>0&&(i.strong=document.createElement("strong"),i.strong.classList.add(o+"-title"),i.strong.appendChild(f(s.title)),i.toastTexts.appendChild(i.strong),s.titleColor&&(i.strong.style.color=s.titleColor),s.titleSize&&(isNaN(s.titleSize)?i.strong.style.fontSize=s.titleSize:i.strong.style.fontSize=s.titleSize+"px"),s.titleLineHeight&&(isNaN(s.titleSize)?i.strong.style.lineHeight=s.titleLineHeight:i.strong.style.lineHeight=s.titleLineHeight+"px"))}(),function(){s.message.length>0&&(i.p=document.createElement("p"),i.p.classList.add(o+"-message"),i.p.appendChild(f(s.message)),i.toastTexts.appendChild(i.p),s.messageColor&&(i.p.style.color=s.messageColor),s.messageSize&&(isNaN(s.titleSize)?i.p.style.fontSize=s.messageSize:i.p.style.fontSize=s.messageSize+"px"),s.messageLineHeight&&(isNaN(s.titleSize)?i.p.style.lineHeight=s.messageLineHeight:i.p.style.lineHeight=s.messageLineHeight+"px"))}(),s.title.length>0&&s.message.length>0&&(s.rtl?i.strong.style.marginLeft="10px":2===s.layout||s.rtl||(i.strong.style.marginRight="10px")),i.toastBody.appendChild(i.toastTexts),function(){s.buttons.length>0&&(i.buttons.classList.add(o+"-buttons"),s.title.length>0&&0===s.message.length&&(s.rtl?i.strong.style.marginLeft="15px":i.strong.style.marginRight="15px"),s.message.length>0&&(s.rtl?i.p.style.marginLeft="15px":i.p.style.marginRight="15px",i.p.style.marginBottom="0"),m(s.buttons,function(t,n){i.buttons.appendChild(f(t[0]));var s=i.buttons.childNodes;s[n].classList.add(o+"-buttons-child"),t[2]&&setTimeout(function(){s[n].focus()},300),s[n].addEventListener("click",function(o){o.preventDefault();var n=t[1];return new n(e,i.toast)})})),i.toastBody.appendChild(i.buttons)}(),function(){i.toastCapsule.style.visibility="hidden",setTimeout(function(){var t=i.toast.offsetHeight,o=i.toast.currentStyle||window.getComputedStyle(i.toast),n=o.marginTop;n=n.split("px"),n=parseInt(n[0]);var a=o.marginBottom;a=a.split("px"),a=parseInt(a[0]),i.toastCapsule.style.visibility="",i.toastCapsule.style.height=t+a+n+"px",setTimeout(function(){i.toastCapsule.style.height="auto",s.target&&(i.toastCapsule.style.overflow="visible")},1e3),s.timeout&&e.progress(i.toast).start()},100)}(),function(){var t=s.position;if(s.target)i.wrapper=document.querySelector(s.target),i.wrapper.classList.add(o+"-target"),s.targetFirst?i.wrapper.insertBefore(i.toastCapsule,i.wrapper.firstChild):i.wrapper.appendChild(i.toastCapsule);else{if(-1==r.indexOf(s.position))return void console.warn("["+o+"] Incorrect position.\nIt can be › "+r);t=n||window.innerWidth<=d?"bottomLeft"==s.position||"bottomRight"==s.position||"bottomCenter"==s.position?o+"-wrapper-bottomCenter":"topLeft"==s.position||"topRight"==s.position||"topCenter"==s.position?o+"-wrapper-topCenter":o+"-wrapper-center":o+"-wrapper-"+t,i.wrapper=document.querySelector("."+o+"-wrapper."+t),i.wrapper||(i.wrapper=document.createElement("div"),i.wrapper.classList.add(o+"-wrapper"),i.wrapper.classList.add(t),document.body.appendChild(i.wrapper)),"topLeft"==s.position||"topCenter"==s.position||"topRight"==s.position?i.wrapper.insertBefore(i.toastCapsule,i.wrapper.firstChild):i.wrapper.appendChild(i.toastCapsule)}isNaN(s.zindex)?console.warn("["+o+"] Invalid zIndex."):i.wrapper.style.zIndex=s.zindex}(),function(){s.overlay&&(null!==document.querySelector("."+o+"-overlay.fadeIn")?(i.overlay=document.querySelector("."+o+"-overlay"),i.overlay.setAttribute("data-iziToast-ref",i.overlay.getAttribute("data-iziToast-ref")+","+s.REF),isNaN(s.zindex)||null===s.zindex||(i.overlay.style.zIndex=s.zindex-1)):(i.overlay.classList.add(o+"-overlay"),i.overlay.classList.add("fadeIn"),i.overlay.style.background=s.overlayColor,i.overlay.setAttribute("data-iziToast-ref",s.REF),isNaN(s.zindex)||null===s.zindex||(i.overlay.style.zIndex=s.zindex-1),document.querySelector("body").appendChild(i.overlay)),s.overlayClose?(i.overlay.removeEventListener("click",{}),i.overlay.addEventListener("click",function(t){e.hide(i.toast,{},"overlay")})):i.overlay.removeEventListener("click",{}))}(),function(){if(s.animateInside){i.toast.classList.add(o+"-animateInside");var t=[200,100,300];if("bounceInLeft"==s.transitionIn&&(t=[400,200,400]),s.title.length>0&&setTimeout(function(){i.strong.classList.add("slideIn")},t[0]),s.message.length>0&&setTimeout(function(){i.p.classList.add("slideIn")},t[1]),s.icon&&setTimeout(function(){i.icon.classList.add("revealIn")},t[2]),s.buttons.length>0&&i.buttons){var e=150;m(i.buttons.childNodes,function(t,o){setTimeout(function(){t.classList.add("revealIn")},e),e+=150})}}}(),s.onOpening.apply(null,[s,i.toast]);try{var l=new CustomEvent(o+"-opening",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(l)}catch(p){console.warn(p)}setTimeout(function(){i.toast.classList.remove(o+"-opening"),i.toast.classList.add(o+"-opened");try{var t=new CustomEvent(o+"-opened",{detail:s,bubbles:!0,cancelable:!0});document.dispatchEvent(t)}catch(e){console.warn(e)}s.onOpened.apply(null,[s,i.toast])},1e3),s.drag&&(a?(i.toast.addEventListener("touchstart",function(t){y.startMoving(this,e,s,t)},!1),i.toast.addEventListener("touchend",function(t){y.stopMoving(this,t)},!1)):(i.toast.addEventListener("mousedown",function(t){t.preventDefault(),y.startMoving(this,e,s,t)},!1),i.toast.addEventListener("mouseup",function(t){t.preventDefault(),y.stopMoving(this,t)},!1))),s.closeOnEscape&&document.addEventListener("keyup",function(t){t=t||window.event,27==t.keyCode&&e.hide(i.toast,{},"esc")}),e.toast=i.toast},e});
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.ui=a.ui||{};a.ui.version="1.12.1";!function(){function b(a,b,c){return[parseFloat(a[0])*(l.test(a[0])?b/100:1),parseFloat(a[1])*(l.test(a[1])?c/100:1)]}function c(b,c){return parseInt(a.css(b,c),10)||0}function d(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}var e,f=Math.max,g=Math.abs,h=/left|center|right/,i=/top|center|bottom/,j=/[\+\-]\d+(\.[\d]+)?%?/,k=/^\w+/,l=/%$/,m=a.fn.pos;a.pos={scrollbarWidth:function(){if(void 0!==e)return e;var b,c,d=a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),f=d.children()[0];return a("body").append(d),b=f.offsetWidth,d.css("overflow","scroll"),c=f.offsetWidth,b===c&&(c=d[0].clientWidth),d.remove(),e=b-c},getScrollInfo:function(b){var c=b.isWindow||b.isDocument?"":b.element.css("overflow-x"),d=b.isWindow||b.isDocument?"":b.element.css("overflow-y"),e="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth;return{width:"scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight?a.pos.scrollbarWidth():0,height:e?a.pos.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]),e=!!c[0]&&9===c[0].nodeType;return{element:c,isWindow:d,isDocument:e,offset:d||e?{left:0,top:0}:a(b).offset(),scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:c.outerWidth(),height:c.outerHeight()}}},a.fn.pos=function(e){if(!e||!e.of)return m.apply(this,arguments);e=a.extend({},e);var l,n,o,p,q,r,s=a(e.of),t=a.pos.getWithinInfo(e.within),u=a.pos.getScrollInfo(t),v=(e.collision||"flip").split(" "),w={};return r=d(s),s[0].preventDefault&&(e.at="left top"),n=r.width,o=r.height,p=r.offset,q=a.extend({},p),a.each(["my","at"],function(){var a,b,c=(e[this]||"").split(" ");1===c.length&&(c=h.test(c[0])?c.concat(["center"]):i.test(c[0])?["center"].concat(c):["center","center"]),c[0]=h.test(c[0])?c[0]:"center",c[1]=i.test(c[1])?c[1]:"center",a=j.exec(c[0]),b=j.exec(c[1]),w[this]=[a?a[0]:0,b?b[0]:0],e[this]=[k.exec(c[0])[0],k.exec(c[1])[0]]}),1===v.length&&(v[1]=v[0]),"right"===e.at[0]?q.left+=n:"center"===e.at[0]&&(q.left+=n/2),"bottom"===e.at[1]?q.top+=o:"center"===e.at[1]&&(q.top+=o/2),l=b(w.at,n,o),q.left+=l[0],q.top+=l[1],this.each(function(){var d,h,i=a(this),j=i.outerWidth(),k=i.outerHeight(),m=c(this,"marginLeft"),r=c(this,"marginTop"),x=j+m+c(this,"marginRight")+u.width,y=k+r+c(this,"marginBottom")+u.height,z=a.extend({},q),A=b(w.my,i.outerWidth(),i.outerHeight());"right"===e.my[0]?z.left-=j:"center"===e.my[0]&&(z.left-=j/2),"bottom"===e.my[1]?z.top-=k:"center"===e.my[1]&&(z.top-=k/2),z.left+=A[0],z.top+=A[1],d={marginLeft:m,marginTop:r},a.each(["left","top"],function(b,c){a.ui.pos[v[b]]&&a.ui.pos[v[b]][c](z,{targetWidth:n,targetHeight:o,elemWidth:j,elemHeight:k,collisionPosition:d,collisionWidth:x,collisionHeight:y,offset:[l[0]+A[0],l[1]+A[1]],my:e.my,at:e.at,within:t,elem:i})}),e.using&&(h=function(a){var b=p.left-z.left,c=b+n-j,d=p.top-z.top,h=d+o-k,l={target:{element:s,left:p.left,top:p.top,width:n,height:o},element:{element:i,left:z.left,top:z.top,width:j,height:k},horizontal:c<0?"left":b>0?"right":"center",vertical:h<0?"top":d>0?"bottom":"middle"};n<j&&g(b+c)<n&&(l.horizontal="center"),o<k&&g(d+h)<o&&(l.vertical="middle"),f(g(b),g(c))>f(g(d),g(h))?l.important="horizontal":l.important="vertical",e.using.call(this,a,l)}),i.offset(a.extend(z,{using:h}))})},a.ui.pos={_trigger:function(a,b,c,d){b.elem&&b.elem.trigger({type:c,position:a,positionData:b,triggered:d})},fit:{left:function(b,c){a.ui.pos._trigger(b,c,"posCollide","fitLeft");var d,e=c.within,g=e.isWindow?e.scrollLeft:e.offset.left,h=e.width,i=b.left-c.collisionPosition.marginLeft,j=g-i,k=i+c.collisionWidth-h-g;c.collisionWidth>h?j>0&&k<=0?(d=b.left+j+c.collisionWidth-h-g,b.left+=j-d):b.left=k>0&&j<=0?g:j>k?g+h-c.collisionWidth:g:j>0?b.left+=j:k>0?b.left-=k:b.left=f(b.left-i,b.left),a.ui.pos._trigger(b,c,"posCollided","fitLeft")},top:function(b,c){a.ui.pos._trigger(b,c,"posCollide","fitTop");var d,e=c.within,g=e.isWindow?e.scrollTop:e.offset.top,h=c.within.height,i=b.top-c.collisionPosition.marginTop,j=g-i,k=i+c.collisionHeight-h-g;c.collisionHeight>h?j>0&&k<=0?(d=b.top+j+c.collisionHeight-h-g,b.top+=j-d):b.top=k>0&&j<=0?g:j>k?g+h-c.collisionHeight:g:j>0?b.top+=j:k>0?b.top-=k:b.top=f(b.top-i,b.top),a.ui.pos._trigger(b,c,"posCollided","fitTop")}},flip:{left:function(b,c){a.ui.pos._trigger(b,c,"posCollide","flipLeft");var d,e,f=c.within,h=f.offset.left+f.scrollLeft,i=f.width,j=f.isWindow?f.scrollLeft:f.offset.left,k=b.left-c.collisionPosition.marginLeft,l=k-j,m=k+c.collisionWidth-i-j,n="left"===c.my[0]?-c.elemWidth:"right"===c.my[0]?c.elemWidth:0,o="left"===c.at[0]?c.targetWidth:"right"===c.at[0]?-c.targetWidth:0,p=-2*c.offset[0];l<0?((d=b.left+n+o+p+c.collisionWidth-i-h)<0||d<g(l))&&(b.left+=n+o+p):m>0&&((e=b.left-c.collisionPosition.marginLeft+n+o+p-j)>0||g(e)<m)&&(b.left+=n+o+p),a.ui.pos._trigger(b,c,"posCollided","flipLeft")},top:function(b,c){a.ui.pos._trigger(b,c,"posCollide","flipTop");var d,e,f=c.within,h=f.offset.top+f.scrollTop,i=f.height,j=f.isWindow?f.scrollTop:f.offset.top,k=b.top-c.collisionPosition.marginTop,l=k-j,m=k+c.collisionHeight-i-j,n="top"===c.my[1],o=n?-c.elemHeight:"bottom"===c.my[1]?c.elemHeight:0,p="top"===c.at[1]?c.targetHeight:"bottom"===c.at[1]?-c.targetHeight:0,q=-2*c.offset[1];l<0?((e=b.top+o+p+q+c.collisionHeight-i-h)<0||e<g(l))&&(b.top+=o+p+q):m>0&&((d=b.top-c.collisionPosition.marginTop+o+p+q-j)>0||g(d)<m)&&(b.top+=o+p+q),a.ui.pos._trigger(b,c,"posCollided","flipTop")}},flipfit:{left:function(){a.ui.pos.flip.left.apply(this,arguments),a.ui.pos.fit.left.apply(this,arguments)},top:function(){a.ui.pos.flip.top.apply(this,arguments),a.ui.pos.fit.top.apply(this,arguments)}}},function(){var b,c,d,e,f,g=document.getElementsByTagName("body")[0],h=document.createElement("div");b=document.createElement(g?"div":"body"),d={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},g&&a.extend(d,{position:"absolute",left:"-1000px",top:"-1000px"});for(f in d)b.style[f]=d[f];b.appendChild(h),c=g||document.documentElement,c.insertBefore(b,c.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",e=a(h).offset().left,a.support.offsetFractions=e>10&&e<11,b.innerHTML="",c.removeChild(b)}()}();a.ui.position}),function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):window.jQuery&&!window.jQuery.fn.iconpicker&&a(window.jQuery)}(function(a){"use strict";var b={isEmpty:function(a){return!1===a||""===a||null===a||void 0===a},isEmptyObject:function(a){return!0===this.isEmpty(a)||0===a.length},isElement:function(b){return a(b).length>0},isString:function(a){return"string"==typeof a||a instanceof String},isArray:function(b){return a.isArray(b)},inArray:function(b,c){return-1!==a.inArray(b,c)},throwError:function(a){throw"Font Awesome Icon Picker Exception: "+a}},c=function(d,e){this._id=c._idCounter++,this.element=a(d).addClass("iconpicker-element"),this._trigger("iconpickerCreate"),this.options=a.extend({},c.defaultOptions,this.element.data(),e),this.options.templates=a.extend({},c.defaultOptions.templates,this.options.templates),this.options.originalPlacement=this.options.placement,this.container=!!b.isElement(this.options.container)&&a(this.options.container),!1===this.container&&(this.element.is(".dropdown-toggle")?this.container=a("~ .dropdown-menu:first",this.element):this.container=this.element.is("input,textarea,button,.btn")?this.element.parent():this.element),this.container.addClass("iconpicker-container"),this.isDropdownMenu()&&(this.options.templates.search=!1,this.options.templates.buttons=!1,this.options.placement="inline"),this.input=!!this.element.is("input,textarea")&&this.element.addClass("iconpicker-input"),!1===this.input&&(this.input=this.container.find(this.options.input),this.input.is("input,textarea")||(this.input=!1)),this.component=this.isDropdownMenu()?this.container.parent().find(this.options.component):this.container.find(this.options.component),0===this.component.length?this.component=!1:this.component.find("i").addClass("iconpicker-component"),this._createPopover(),this._createIconpicker(),0===this.getAcceptButton().length&&(this.options.mustAccept=!1),this.isInputGroup()?this.container.parent().append(this.popover):this.container.append(this.popover),this._bindElementEvents(),this._bindWindowEvents(),this.update(this.options.selected),this.isInline()&&this.show(),this._trigger("iconpickerCreated")};c._idCounter=0,c.defaultOptions={title:!1,selected:!1,defaultValue:!1,placement:"bottom",collision:"none",animation:!0,hideOnSelect:!1,showFooter:!1,searchInFooter:!1,mustAccept:!1,selectedCustomClass:"bg-primary",icons:[],fullClassFormatter:function(a){return"fa "+a},input:"input,.iconpicker-input",inputSearch:!1,container:!1,component:".input-group-addon,.iconpicker-component",templates:{popover:'<div class="iconpicker-popover popover"><div class="arrow"></div><div class="popover-title"></div><div class="popover-content"></div></div>',footer:'<div class="popover-footer"></div>',buttons:'<button class="iconpicker-btn iconpicker-btn-cancel btn btn-default btn-sm">Cancel</button> <button class="iconpicker-btn iconpicker-btn-accept btn btn-primary btn-sm">Accept</button>',search:'<input type="search" class="form-control iconpicker-search" placeholder="Type to filter" />',iconpicker:'<div class="iconpicker"><div class="iconpicker-items"></div></div>',iconpickerItem:'<a role="button" href="#" class="iconpicker-item"><i></i></a>'}},c.batch=function(b,c){var d=Array.prototype.slice.call(arguments,2);return a(b).each(function(){var b=a(this).data("iconpicker");b&&b[c].apply(b,d)})},c.prototype={constructor:c,options:{},_id:0,_trigger:function(b,c){c=c||{},this.element.trigger(a.extend({type:b,iconpickerInstance:this},c))},_createPopover:function(){this.popover=a(this.options.templates.popover);var c=this.popover.find(".popover-title");if(this.options.title&&c.append(a('<div class="popover-title-text">'+this.options.title+"</div>")),this.hasSeparatedSearchInput()&&!this.options.searchInFooter?c.append(this.options.templates.search):this.options.title||c.remove(),this.options.showFooter&&!b.isEmpty(this.options.templates.footer)){var d=a(this.options.templates.footer);this.hasSeparatedSearchInput()&&this.options.searchInFooter&&d.append(a(this.options.templates.search)),b.isEmpty(this.options.templates.buttons)||d.append(a(this.options.templates.buttons)),this.popover.append(d)}return!0===this.options.animation&&this.popover.addClass("fade"),this.popover},_createIconpicker:function(){var b=this;this.iconpicker=a(this.options.templates.iconpicker);var c=function(c){var d=a(this);return d.is("i")&&(d=d.parent()),b._trigger("iconpickerSelect",{iconpickerItem:d,iconpickerValue:b.iconpickerValue}),!1===b.options.mustAccept?(b.update(d.data("iconpickerValue")),b._trigger("iconpickerSelected",{iconpickerItem:this,iconpickerValue:b.iconpickerValue})):b.update(d.data("iconpickerValue"),!0),b.options.hideOnSelect&&!1===b.options.mustAccept&&b.hide(),c.preventDefault(),!1};for(var d in this.options.icons)if("string"==typeof this.options.icons[d]){var e=a(this.options.templates.iconpickerItem);e.find("i").addClass(this.options.fullClassFormatter(this.options.icons[d])),e.data("iconpickerValue",this.options.icons[d]).on("click.iconpicker",c),this.iconpicker.find(".iconpicker-items").append(e.attr("title","."+this.options.icons[d]))}return this.popover.find(".popover-content").append(this.iconpicker),this.iconpicker},_isEventInsideIconpicker:function(b){var c=a(b.target);return!((!c.hasClass("iconpicker-element")||c.hasClass("iconpicker-element")&&!c.is(this.element))&&0===c.parents(".iconpicker-popover").length)},_bindElementEvents:function(){var c=this;this.getSearchInput().on("keyup.iconpicker",function(){c.filter(a(this).val().toLowerCase())}),this.getAcceptButton().on("click.iconpicker",function(){var a=c.iconpicker.find(".iconpicker-selected").get(0);c.update(c.iconpickerValue),c._trigger("iconpickerSelected",{iconpickerItem:a,iconpickerValue:c.iconpickerValue}),c.isInline()||c.hide()}),this.getCancelButton().on("click.iconpicker",function(){c.isInline()||c.hide()}),this.element.on("focus.iconpicker",function(a){c.show(),a.stopPropagation()}),this.hasComponent()&&this.component.on("click.iconpicker",function(){c.toggle()}),this.hasInput()&&this.input.on("keyup.iconpicker",function(d){b.inArray(d.keyCode,[38,40,37,39,16,17,18,9,8,91,93,20,46,186,190,46,78,188,44,86])?c._updateFormGroupStatus(!1!==c.getValid(this.value)):c.update(),!0===c.options.inputSearch&&c.filter(a(this).val().toLowerCase())})},_bindWindowEvents:function(){var b=a(window.document),c=this,d=".iconpicker.inst"+this._id;return a(window).on("resize.iconpicker"+d+" orientationchange.iconpicker"+d,function(a){c.popover.hasClass("in")&&c.updatePlacement()}),c.isInline()||b.on("mouseup"+d,function(a){return c._isEventInsideIconpicker(a)||c.isInline()||c.hide(),a.stopPropagation(),a.preventDefault(),!1}),!1},_unbindElementEvents:function(){this.popover.off(".iconpicker"),this.element.off(".iconpicker"),this.hasInput()&&this.input.off(".iconpicker"),this.hasComponent()&&this.component.off(".iconpicker"),this.hasContainer()&&this.container.off(".iconpicker")},_unbindWindowEvents:function(){a(window).off(".iconpicker.inst"+this._id),a(window.document).off(".iconpicker.inst"+this._id)},updatePlacement:function(b,c){b=b||this.options.placement,this.options.placement=b,c=c||this.options.collision,c=!0===c?"flip":c;var d={at:"right bottom",my:"right top",of:this.hasInput()&&!this.isInputGroup()?this.input:this.container,collision:!0===c?"flip":c,within:window};if(this.popover.removeClass("inline topLeftCorner topLeft top topRight topRightCorner rightTop right rightBottom bottomRight bottomRightCorner bottom bottomLeft bottomLeftCorner leftBottom left leftTop"),"object"==typeof b)return this.popover.pos(a.extend({},d,b));switch(b){case"inline":d=!1;break;case"topLeftCorner":d.my="right bottom",d.at="left top";break;case"topLeft":d.my="left bottom",d.at="left top";break;case"top":d.my="center bottom",d.at="center top";break;case"topRight":d.my="right bottom",d.at="right top";break;case"topRightCorner":d.my="left bottom",d.at="right top";break;case"rightTop":d.my="left bottom",d.at="right center";break;case"right":d.my="left center",d.at="right center";break;case"rightBottom":d.my="left top",d.at="right center";break;case"bottomRightCorner":d.my="left top",d.at="right bottom";break;case"bottomRight":d.my="right top",d.at="right bottom";break;case"bottom":d.my="center top",d.at="center bottom";break;case"bottomLeft":d.my="left top",d.at="left bottom";break;case"bottomLeftCorner":d.my="right top",d.at="left bottom";break;case"leftBottom":d.my="right top",d.at="left center";break;case"left":d.my="right center",d.at="left center";break;case"leftTop":d.my="right bottom",d.at="left center";break;default:return!1}return this.popover.css({display:"inline"===this.options.placement?"":"block"}),!1!==d?this.popover.pos(d).css("maxWidth",a(window).width()-this.container.offset().left-5):this.popover.css({top:"auto",right:"auto",bottom:"auto",left:"auto",maxWidth:"none"}),this.popover.addClass(this.options.placement),!0},_updateComponents:function(){if(this.iconpicker.find(".iconpicker-item.iconpicker-selected").removeClass("iconpicker-selected "+this.options.selectedCustomClass),this.iconpickerValue&&this.iconpicker.find("."+this.options.fullClassFormatter(this.iconpickerValue).replace(/ /g,".")).parent().addClass("iconpicker-selected "+this.options.selectedCustomClass),this.hasComponent()){var a=this.component.find("i");a.length>0?a.attr("class",this.options.fullClassFormatter(this.iconpickerValue)):this.component.html(this.getHtml())}},_updateFormGroupStatus:function(a){return!!this.hasInput()&&(!1!==a?this.input.parents(".form-group:first").removeClass("has-error"):this.input.parents(".form-group:first").addClass("has-error"),!0)},getValid:function(c){b.isString(c)||(c="");var d=""===c;return c=a.trim(c),!(!b.inArray(c,this.options.icons)&&!d)&&c},setValue:function(a){var b=this.getValid(a);return!1!==b?(this.iconpickerValue=b,this._trigger("iconpickerSetValue",{iconpickerValue:b}),this.iconpickerValue):(this._trigger("iconpickerInvalid",{iconpickerValue:a}),!1)},getHtml:function(){return'<i class="'+this.options.fullClassFormatter(this.iconpickerValue)+'"></i>'},setSourceValue:function(a){return a=this.setValue(a),!1!==a&&""!==a&&(this.hasInput()?this.input.val(this.iconpickerValue):this.element.data("iconpickerValue",this.iconpickerValue),this._trigger("iconpickerSetSourceValue",{iconpickerValue:a})),a},getSourceValue:function(a){a=a||this.options.defaultValue;var b=a;return b=this.hasInput()?this.input.val():this.element.data("iconpickerValue"),void 0!==b&&""!==b&&null!==b&&!1!==b||(b=a),b},hasInput:function(){return!1!==this.input},isInputSearch:function(){return this.hasInput()&&!0===this.options.inputSearch},isInputGroup:function(){return this.container.is(".input-group")},isDropdownMenu:function(){return this.container.is(".dropdown-menu")},hasSeparatedSearchInput:function(){return!1!==this.options.templates.search&&!this.isInputSearch()},hasComponent:function(){return!1!==this.component},hasContainer:function(){return!1!==this.container},getAcceptButton:function(){return this.popover.find(".iconpicker-btn-accept")},getCancelButton:function(){return this.popover.find(".iconpicker-btn-cancel")},getSearchInput:function(){return this.popover.find(".iconpicker-search")},filter:function(c){if(b.isEmpty(c))return this.iconpicker.find(".iconpicker-item").show(),a(!1);var d=[];return this.iconpicker.find(".iconpicker-item").each(function(){var b=a(this),e=b.attr("title").toLowerCase(),f=!1;try{f=new RegExp(c,"g")}catch(a){f=!1}!1!==f&&e.match(f)?(d.push(b),b.show()):b.hide()}),d},show:function(){if(this.popover.hasClass("in"))return!1;a.iconpicker.batch(a(".iconpicker-popover.in:not(.inline)").not(this.popover),"hide"),this._trigger("iconpickerShow"),this.updatePlacement(),this.popover.addClass("in"),setTimeout(a.proxy(function(){this.popover.css("display",this.isInline()?"":"block"),this._trigger("iconpickerShown")},this),this.options.animation?300:1)},hide:function(){if(!this.popover.hasClass("in"))return!1;this._trigger("iconpickerHide"),this.popover.removeClass("in"),setTimeout(a.proxy(function(){this.popover.css("display","none"),this.getSearchInput().val(""),this.filter(""),this._trigger("iconpickerHidden")},this),this.options.animation?300:1)},toggle:function(){this.popover.is(":visible")?this.hide():this.show(!0)},update:function(a,b){return a=a||this.getSourceValue(this.iconpickerValue),this._trigger("iconpickerUpdate"),!0===b?a=this.setValue(a):(a=this.setSourceValue(a),this._updateFormGroupStatus(!1!==a)),!1!==a&&this._updateComponents(),this._trigger("iconpickerUpdated"),a},destroy:function(){this._trigger("iconpickerDestroy"),this.element.removeData("iconpicker").removeData("iconpickerValue").removeClass("iconpicker-element"),this._unbindElementEvents(),this._unbindWindowEvents(),a(this.popover).remove(),this._trigger("iconpickerDestroyed")},disable:function(){return!!this.hasInput()&&(this.input.prop("disabled",!0),!0)},enable:function(){return!!this.hasInput()&&(this.input.prop("disabled",!1),!0)},isDisabled:function(){return!!this.hasInput()&&!0===this.input.prop("disabled")},isInline:function(){return"inline"===this.options.placement||this.popover.hasClass("inline")}},a.iconpicker=c,a.fn.iconpicker=function(b){return this.each(function(){var d=a(this);d.data("iconpicker")||d.data("iconpicker",new c(this,"object"==typeof b?b:{}))})},c.defaultOptions.icons=["fa-500px","fa-address-book","fa-address-book-o","fa-address-card","fa-address-card-o","fa-adjust","fa-adn","fa-align-center","fa-align-justify","fa-align-left","fa-align-right","fa-amazon","fa-ambulance","fa-american-sign-language-interpreting","fa-anchor","fa-android","fa-angellist","fa-angle-double-down","fa-angle-double-left","fa-angle-double-right","fa-angle-double-up","fa-angle-down","fa-angle-left","fa-angle-right","fa-angle-up","fa-apple","fa-archive","fa-area-chart","fa-arrow-circle-down","fa-arrow-circle-left","fa-arrow-circle-o-down","fa-arrow-circle-o-left","fa-arrow-circle-o-right","fa-arrow-circle-o-up","fa-arrow-circle-right","fa-arrow-circle-up","fa-arrow-down","fa-arrow-left","fa-arrow-right","fa-arrow-up","fa-arrows","fa-arrows-alt","fa-arrows-h","fa-arrows-v","fa-asl-interpreting","fa-assistive-listening-systems","fa-asterisk","fa-at","fa-audio-description","fa-automobile","fa-backward","fa-balance-scale","fa-ban","fa-bandcamp","fa-bank","fa-bar-chart","fa-bar-chart-o","fa-barcode","fa-bars","fa-bath","fa-bathtub","fa-battery","fa-battery-0","fa-battery-1","fa-battery-2","fa-battery-3","fa-battery-4","fa-battery-empty","fa-battery-full","fa-battery-half","fa-battery-quarter","fa-battery-three-quarters","fa-bed","fa-beer","fa-behance","fa-behance-square","fa-bell","fa-bell-o","fa-bell-slash","fa-bell-slash-o","fa-bicycle","fa-binoculars","fa-birthday-cake","fa-bitbucket","fa-bitbucket-square","fa-bitcoin","fa-black-tie","fa-blind","fa-bluetooth","fa-bluetooth-b","fa-bold","fa-bolt","fa-bomb","fa-book","fa-bookmark","fa-bookmark-o","fa-braille","fa-briefcase","fa-btc","fa-bug","fa-building","fa-building-o","fa-bullhorn","fa-bullseye","fa-bus","fa-buysellads","fa-cab","fa-calculator","fa-calendar","fa-calendar-check-o","fa-calendar-minus-o","fa-calendar-o","fa-calendar-plus-o","fa-calendar-times-o","fa-camera","fa-camera-retro","fa-car","fa-caret-down","fa-caret-left","fa-caret-right","fa-caret-square-o-down","fa-caret-square-o-left","fa-caret-square-o-right","fa-caret-square-o-up","fa-caret-up","fa-cart-arrow-down","fa-cart-plus","fa-cc","fa-cc-amex","fa-cc-diners-club","fa-cc-discover","fa-cc-jcb","fa-cc-mastercard","fa-cc-paypal","fa-cc-stripe","fa-cc-visa","fa-certificate","fa-chain","fa-chain-broken","fa-check","fa-check-circle","fa-check-circle-o","fa-check-square","fa-check-square-o","fa-chevron-circle-down","fa-chevron-circle-left","fa-chevron-circle-right","fa-chevron-circle-up","fa-chevron-down","fa-chevron-left","fa-chevron-right","fa-chevron-up","fa-child","fa-chrome","fa-circle","fa-circle-o","fa-circle-o-notch","fa-circle-thin","fa-clipboard","fa-clock-o","fa-clone","fa-close","fa-cloud","fa-cloud-download","fa-cloud-upload","fa-cny","fa-code","fa-code-fork","fa-codepen","fa-codiepie","fa-coffee","fa-cog","fa-cogs","fa-columns","fa-comment","fa-comment-o","fa-commenting","fa-commenting-o","fa-comments","fa-comments-o","fa-compass","fa-compress","fa-connectdevelop","fa-contao","fa-copy","fa-copyright","fa-creative-commons","fa-credit-card","fa-credit-card-alt","fa-crop","fa-crosshairs","fa-css3","fa-cube","fa-cubes","fa-cut","fa-cutlery","fa-dashboard","fa-dashcube","fa-database","fa-deaf","fa-deafness","fa-dedent","fa-delicious","fa-desktop","fa-deviantart","fa-diamond","fa-digg","fa-dollar","fa-dot-circle-o","fa-download","fa-dribbble","fa-drivers-license","fa-drivers-license-o","fa-dropbox","fa-drupal","fa-edge","fa-edit","fa-eercast","fa-eject","fa-ellipsis-h","fa-ellipsis-v","fa-empire","fa-envelope","fa-envelope-o","fa-envelope-open","fa-envelope-open-o","fa-envelope-square","fa-envira","fa-eraser","fa-etsy","fa-eur","fa-euro","fa-exchange","fa-exclamation","fa-exclamation-circle","fa-exclamation-triangle","fa-expand","fa-expeditedssl","fa-external-link","fa-external-link-square","fa-eye","fa-eye-slash","fa-eyedropper","fa-fa","fa-facebook","fa-facebook-f","fa-facebook-official","fa-facebook-square","fa-fast-backward","fa-fast-forward","fa-fax","fa-feed","fa-female","fa-fighter-jet","fa-file","fa-file-archive-o","fa-file-audio-o","fa-file-code-o","fa-file-excel-o","fa-file-image-o","fa-file-movie-o","fa-file-o","fa-file-pdf-o","fa-file-photo-o","fa-file-picture-o","fa-file-powerpoint-o","fa-file-sound-o","fa-file-text","fa-file-text-o","fa-file-video-o","fa-file-word-o","fa-file-zip-o","fa-files-o","fa-film","fa-filter","fa-fire","fa-fire-extinguisher","fa-firefox","fa-first-order","fa-flag","fa-flag-checkered","fa-flag-o","fa-flash","fa-flask","fa-flickr","fa-floppy-o","fa-folder","fa-folder-o","fa-folder-open","fa-folder-open-o","fa-font","fa-font-awesome","fa-fonticons","fa-fort-awesome","fa-forumbee","fa-forward","fa-foursquare","fa-free-code-camp","fa-frown-o","fa-futbol-o","fa-gamepad","fa-gavel","fa-gbp","fa-ge","fa-gear","fa-gears","fa-genderless","fa-get-pocket","fa-gg","fa-gg-circle","fa-gift","fa-git","fa-git-square","fa-github","fa-github-alt","fa-github-square","fa-gitlab","fa-gittip","fa-glass","fa-glide","fa-glide-g","fa-globe","fa-google","fa-google-plus","fa-google-plus-circle","fa-google-plus-official","fa-google-plus-square","fa-google-wallet","fa-graduation-cap","fa-gratipay","fa-grav","fa-group","fa-h-square","fa-hacker-news","fa-hand-grab-o","fa-hand-lizard-o","fa-hand-o-down","fa-hand-o-left","fa-hand-o-right","fa-hand-o-up","fa-hand-paper-o","fa-hand-peace-o","fa-hand-pointer-o","fa-hand-rock-o","fa-hand-scissors-o","fa-hand-spock-o","fa-hand-stop-o","fa-handshake-o","fa-hard-of-hearing","fa-hashtag","fa-hdd-o","fa-header","fa-headphones","fa-heart","fa-heart-o","fa-heartbeat","fa-history","fa-home","fa-hospital-o","fa-hotel","fa-hourglass","fa-hourglass-1","fa-hourglass-2","fa-hourglass-3","fa-hourglass-end","fa-hourglass-half","fa-hourglass-o","fa-hourglass-start","fa-houzz","fa-html5","fa-i-cursor","fa-id-badge","fa-id-card","fa-id-card-o","fa-ils","fa-image","fa-imdb","fa-inbox","fa-indent","fa-industry","fa-info","fa-info-circle","fa-inr","fa-instagram","fa-institution","fa-internet-explorer","fa-intersex","fa-ioxhost","fa-italic","fa-joomla","fa-jpy","fa-jsfiddle","fa-key","fa-keyboard-o","fa-krw","fa-language","fa-laptop","fa-lastfm","fa-lastfm-square","fa-leaf","fa-leanpub","fa-legal","fa-lemon-o","fa-level-down","fa-level-up","fa-life-bouy","fa-life-buoy","fa-life-ring","fa-life-saver","fa-lightbulb-o","fa-line-chart","fa-link","fa-linkedin","fa-linkedin-square","fa-linode","fa-linux","fa-list","fa-list-alt","fa-list-ol","fa-list-ul","fa-location-arrow","fa-lock","fa-long-arrow-down","fa-long-arrow-left","fa-long-arrow-right","fa-long-arrow-up","fa-low-vision","fa-magic","fa-magnet","fa-mail-forward","fa-mail-reply","fa-mail-reply-all","fa-male","fa-map","fa-map-marker","fa-map-o","fa-map-pin","fa-map-signs","fa-mars","fa-mars-double","fa-mars-stroke","fa-mars-stroke-h","fa-mars-stroke-v","fa-maxcdn","fa-meanpath","fa-medium","fa-medkit","fa-meetup","fa-meh-o","fa-mercury","fa-microchip","fa-microphone","fa-microphone-slash","fa-minus","fa-minus-circle","fa-minus-square","fa-minus-square-o","fa-mixcloud","fa-mobile","fa-mobile-phone","fa-modx","fa-money","fa-moon-o","fa-mortar-board","fa-motorcycle","fa-mouse-pointer","fa-music","fa-navicon","fa-neuter","fa-newspaper-o","fa-object-group","fa-object-ungroup","fa-odnoklassniki","fa-odnoklassniki-square","fa-opencart","fa-openid","fa-opera","fa-optin-monster","fa-outdent","fa-pagelines","fa-paint-brush","fa-paper-plane","fa-paper-plane-o","fa-paperclip","fa-paragraph","fa-paste","fa-pause","fa-pause-circle","fa-pause-circle-o","fa-paw","fa-paypal","fa-pencil","fa-pencil-square","fa-pencil-square-o","fa-percent","fa-phone","fa-phone-square","fa-photo","fa-picture-o","fa-pie-chart","fa-pied-piper","fa-pied-piper-alt","fa-pied-piper-pp","fa-pinterest","fa-pinterest-p","fa-pinterest-square","fa-plane","fa-play","fa-play-circle","fa-play-circle-o","fa-plug","fa-plus","fa-plus-circle","fa-plus-square","fa-plus-square-o","fa-podcast","fa-power-off","fa-print","fa-product-hunt","fa-puzzle-piece","fa-qq","fa-qrcode","fa-question","fa-question-circle","fa-question-circle-o","fa-quora","fa-quote-left","fa-quote-right","fa-ra","fa-random","fa-ravelry","fa-rebel","fa-recycle","fa-reddit","fa-reddit-alien","fa-reddit-square","fa-refresh","fa-registered","fa-remove","fa-renren","fa-reorder","fa-repeat","fa-reply","fa-reply-all","fa-resistance","fa-retweet","fa-rmb","fa-road","fa-rocket","fa-rotate-left","fa-rotate-right","fa-rouble","fa-rss","fa-rss-square","fa-rub","fa-ruble","fa-rupee","fa-s15","fa-safari","fa-save","fa-scissors","fa-scribd","fa-search","fa-search-minus","fa-search-plus","fa-sellsy","fa-send","fa-send-o","fa-server","fa-share","fa-share-alt","fa-share-alt-square","fa-share-square","fa-share-square-o","fa-shekel","fa-sheqel","fa-shield","fa-ship","fa-shirtsinbulk","fa-shopping-bag","fa-shopping-basket","fa-shopping-cart","fa-shower","fa-sign-in","fa-sign-language","fa-sign-out","fa-signal","fa-signing","fa-simplybuilt","fa-sitemap","fa-skyatlas","fa-skype","fa-slack","fa-sliders","fa-slideshare","fa-smile-o","fa-snapchat","fa-snapchat-ghost","fa-snapchat-square","fa-snowflake-o","fa-soccer-ball-o","fa-sort","fa-sort-alpha-asc","fa-sort-alpha-desc","fa-sort-amount-asc","fa-sort-amount-desc","fa-sort-asc","fa-sort-desc","fa-sort-down","fa-sort-numeric-asc","fa-sort-numeric-desc","fa-sort-up","fa-soundcloud","fa-space-shuttle","fa-spinner","fa-spoon","fa-spotify","fa-square","fa-square-o","fa-stack-exchange","fa-stack-overflow","fa-star","fa-star-half","fa-star-half-empty","fa-star-half-full","fa-star-half-o","fa-star-o","fa-steam","fa-steam-square","fa-step-backward","fa-step-forward","fa-stethoscope","fa-sticky-note","fa-sticky-note-o","fa-stop","fa-stop-circle","fa-stop-circle-o","fa-street-view","fa-strikethrough","fa-stumbleupon","fa-stumbleupon-circle","fa-subscript","fa-subway","fa-suitcase","fa-sun-o","fa-superpowers","fa-superscript","fa-support","fa-table","fa-tablet","fa-tachometer","fa-tag","fa-tags","fa-tasks","fa-taxi","fa-telegram","fa-television","fa-tencent-weibo","fa-terminal","fa-text-height","fa-text-width","fa-th","fa-th-large","fa-th-list","fa-themeisle","fa-thermometer","fa-thermometer-0","fa-thermometer-1","fa-thermometer-2","fa-thermometer-3","fa-thermometer-4","fa-thermometer-empty","fa-thermometer-full","fa-thermometer-half","fa-thermometer-quarter","fa-thermometer-three-quarters","fa-thumb-tack","fa-thumbs-down","fa-thumbs-o-down","fa-thumbs-o-up","fa-thumbs-up","fa-ticket","fa-times","fa-times-circle","fa-times-circle-o","fa-times-rectangle","fa-times-rectangle-o","fa-tint","fa-toggle-down","fa-toggle-left","fa-toggle-off","fa-toggle-on","fa-toggle-right","fa-toggle-up","fa-trademark","fa-train","fa-transgender","fa-transgender-alt","fa-trash","fa-trash-o","fa-tree","fa-trello","fa-tripadvisor","fa-trophy","fa-truck","fa-try","fa-tty","fa-tumblr","fa-tumblr-square","fa-turkish-lira","fa-tv","fa-twitch","fa-twitter","fa-twitter-square","fa-umbrella","fa-underline","fa-undo","fa-universal-access","fa-university","fa-unlink","fa-unlock","fa-unlock-alt","fa-unsorted","fa-upload","fa-usb","fa-usd","fa-user","fa-user-circle","fa-user-circle-o","fa-user-md","fa-user-o","fa-user-plus","fa-user-secret","fa-user-times","fa-users","fa-vcard","fa-vcard-o","fa-venus","fa-venus-double","fa-venus-mars","fa-viacoin","fa-viadeo","fa-viadeo-square","fa-video-camera","fa-vimeo","fa-vimeo-square","fa-vine","fa-vk","fa-volume-control-phone","fa-volume-down","fa-volume-off","fa-volume-up","fa-warning","fa-wechat","fa-weibo","fa-weixin","fa-whatsapp","fa-wheelchair","fa-wheelchair-alt","fa-wifi","fa-wikipedia-w","fa-window-close","fa-window-close-o","fa-window-maximize","fa-window-minimize","fa-window-restore","fa-windows","fa-won","fa-wordpress","fa-wpbeginner","fa-wpexplorer","fa-wpforms","fa-wrench","fa-xing","fa-xing-square","fa-y-combinator","fa-y-combinator-square","fa-yahoo","fa-yc","fa-yc-square","fa-yelp","fa-yen","fa-yoast","fa-youtube","fa-youtube-play","fa-youtube-square"]});
(function (factory) {
    if (typeof window.define === 'function') {
        if (window.define.amd) {
            // AMD模式
            window.define('wangEditor', ["jquery"], factory);
        } else if (window.define.cmd) {
            // CMD模式
            window.define(function (require, exports, module) {
                return factory;
            });
        } else {
            // 全局模式
            factory(window.jQuery);
        }
    } else if (typeof module === "object" && typeof module.exports === "object") {
        // commonjs

        // 引用 css —— webapck
        require('../../vendor/wangeditor/css/wangEditor.css');
        module.exports = factory(
            // 传入 jquery ，支持使用 npm 方式或者自己定义jquery的路径
            require('jquery')
        );
    } else {
        // 全局模式
        factory(window.jQuery);
    }
})(function($){
    
    // 验证是否引用jquery
    if (!$ || !$.fn || !$.fn.jquery) {
        return;
    }

    // 定义扩展函数
    var _e = function (fn) {
        var E = window.wangEditor;
        if (E) {
            // 执行传入的函数
            fn(E, $);
        }
    };
// 定义构造函数
(function (window, $) {
    if (window.wangEditor) {
        return;
    }

    // 编辑器（整体）构造函数
    var E = function (elem) {
        // 支持 id 和 element 两种形式
        if (typeof elem === 'string') {
            elem = '#' + elem;
        }

        // ---------------获取基本节点------------------
        var $elem = $(elem);
        if ($elem.length !== 1) {
            return;
        }
        var nodeName = $elem[0].nodeName;
        if (nodeName !== 'TEXTAREA' && nodeName !== 'DIV') {
            // 只能是 textarea 和 div ，其他类型的元素不行
            return;   
        }
        this.valueNodeName = nodeName.toLowerCase();
        this.$valueContainer = $elem;

        // 记录 elem 的 prev 和 parent（最后渲染 editor 要用到）
        this.$prev = $elem.prev();
        this.$parent = $elem.parent();

        // ------------------初始化------------------
        this.init();
    };

    E.fn = E.prototype;

    E.$body = $('body');
    E.$document = $(document);
    E.$window = $(window);
    E.userAgent = navigator.userAgent;
    E.getComputedStyle = window.getComputedStyle;
    E.w3cRange = typeof document.createRange === 'function';
    E.hostname = location.hostname.toLowerCase();
    E.websiteHost = 'wangeditor.github.io|www.wangeditor.com|wangeditor.coding.me';
    E.isOnWebsite = E.websiteHost.indexOf(E.hostname) >= 0;
    E.docsite = 'http://www.kancloud.cn/wangfupeng/wangeditor2/113961';

    // 暴露给全局对象
    window.wangEditor = E;

    // 注册 plugin 事件，用于用户自定义插件
    // 用户在引用 wangEditor.js 之后，还可以通过 E.plugin() 注入自定义函数，
    // 该函数将会在 editor.create() 方法的最后一步执行
    E.plugin = function (fn) {
        if (!E._plugins) {
            E._plugins = [];
        }

        if (typeof fn === 'function') {
            E._plugins.push(fn);
        }
    };

})(window, $);
// editor 绑定事件
_e(function (E, $) {

    E.fn.init = function () {

        // 初始化 editor 默认配置
        this.initDefaultConfig();

        // 增加container
        this.addEditorContainer();

        // 增加编辑区域
        this.addTxt();

        // 增加menuContainer
        this.addMenuContainer();

        // 初始化菜单集合
        this.menus = {};

        // 初始化commandHooks
        this.commandHooks();

    };

});
// editor api
_e(function (E, $) {

    // 预定义 ready 事件
    E.fn.ready = function (fn) {

        if (!this.readyFns) {
            this.readyFns = [];
        }

        this.readyFns.push(fn);
    };

    // 处理ready事件
    E.fn.readyHeadler = function () {
        var fns = this.readyFns;

        while (fns.length) {
            fns.shift().call(this);
        }
    };

    // 更新内容到 $valueContainer
    E.fn.updateValue = function () {
        var editor = this;
        var $valueContainer = editor.$valueContainer;
        var $txt = editor.txt.$txt;

        if ($valueContainer === $txt) {
            // 传入生成编辑器的div，即是编辑区域
            return;
        }

        var value = $txt.html();
        $valueContainer.val(value);
    };

    // 获取初始化的内容
    E.fn.getInitValue = function () {
        var editor = this;
        var $valueContainer = editor.$valueContainer;
        var currentValue = '';
        var nodeName = editor.valueNodeName;
        if (nodeName === 'div') {
            currentValue = $valueContainer.html();
        } else if (nodeName === 'textarea') {
            currentValue = $valueContainer.val();
        }

        return currentValue;
    };

    // 触发菜单updatestyle
    E.fn.updateMenuStyle = function () {
        var menus = this.menus;

        $.each(menus, function (k, menu) {
            menu.updateSelected();
        });
    };

    // 除了传入的 menuIds，其他全部启用
    E.fn.enableMenusExcept = function (menuIds) {
        if (this._disabled) {
            // 编辑器处于禁用状态，则不执行改操作
            return;
        }
        // menuIds参数：支持数组和字符串
        menuIds = menuIds || [];
        if (typeof menuIds === 'string') {
            menuIds = [menuIds];
        }

        $.each(this.menus, function (k, menu) {
            if (menuIds.indexOf(k) >= 0) {
                return;
            }
            menu.disabled(false);
        });
    };

    // 除了传入的 menuIds，其他全部禁用
    E.fn.disableMenusExcept = function (menuIds) {
        if (this._disabled) {
            // 编辑器处于禁用状态，则不执行改操作
            return;
        }
        // menuIds参数：支持数组和字符串
        menuIds = menuIds || [];
        if (typeof menuIds === 'string') {
            menuIds = [menuIds];
        }

        $.each(this.menus, function (k, menu) {
            if (menuIds.indexOf(k) >= 0) {
                return;
            }
            menu.disabled(true);
        });
    };

    // 隐藏所有 dropPanel droplist modal
    E.fn.hideDropPanelAndModal = function () {
        var menus = this.menus;

        $.each(menus, function (k, menu) {
            var m = menu.dropPanel || menu.dropList || menu.modal;
            if (m && m.hide) {
                m.hide();
            }
        });
    };

});
// selection range API
_e(function (E, $) {

    // 用到 w3c range 的函数，如果检测到浏览器不支持 w3c range，则赋值为空函数
    var ieRange = !E.w3cRange;
    function emptyFn() {}

    // 设置或读取当前的range
    E.fn.currentRange = function (cr){
        if (cr) {
            this._rangeData = cr;
        } else {
            return this._rangeData;
        }
    };

    // 将当前选区折叠
    E.fn.collapseRange = function (range, opt) {
        // opt 参数说明：'start'-折叠到开始; 'end'-折叠到结束
        opt = opt || 'end';
        opt = opt === 'start' ? true : false;

        range = range || this.currentRange();
        
        if (range) {
            // 合并，保存
            range.collapse(opt);
            this.currentRange(range);
        }
    };

    // 获取选区的文字
    E.fn.getRangeText = ieRange ? emptyFn : function (range) {
        range = range || this.currentRange();
        if (!range) {
            return;
        }
        return range.toString();
    };

    // 获取选区对应的DOM对象
    E.fn.getRangeElem = ieRange ? emptyFn : function (range) {
        range = range || this.currentRange();
        var dom = range.commonAncestorContainer;

        if (dom.nodeType === 1) {
            return dom;
        } else {
            return dom.parentNode;
        }
    };

    // 选区内容是否为空？
    E.fn.isRangeEmpty = ieRange ? emptyFn : function (range) {
        range = range || this.currentRange();

        if (range && range.startContainer) {
            if (range.startContainer === range.endContainer) {
                if (range.startOffset === range.endOffset) {
                    return true;
                }
            }
        }

        return false;
    };

    // 保存选区数据
    E.fn.saveSelection = ieRange ? emptyFn : function (range) {
        var self = this,
            _parentElem,
            selection,
            txt = self.txt.$txt.get(0);

        if (range) {
            _parentElem = range.commonAncestorContainer;
        } else {
            selection = document.getSelection();
            if (selection.getRangeAt && selection.rangeCount) {
                range = document.getSelection().getRangeAt(0);
                _parentElem = range.commonAncestorContainer;
            }
        }
        // 确定父元素一定要包含在编辑器区域内
        if (_parentElem && ($.contains(txt, _parentElem) || txt === _parentElem) ) {
            // 保存选择区域
            self.currentRange(range);
        }
    };

    // 恢复选中区域
    E.fn.restoreSelection = ieRange ? emptyFn : function (range) {
        var selection;

        range = range || this.currentRange();

        if (!range) {
            return;
        }

        // 使用 try catch 来防止 IE 某些情况报错
        try {
            selection = document.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        } catch (ex) {

        }
    };

    // 根据elem恢复选区
    E.fn.restoreSelectionByElem = ieRange ? emptyFn : function (elem, opt) {
        // opt参数说明：'start'-折叠到开始，'end'-折叠到结束，'all'-全部选中
        if (!elem) {
            return;
        }
        opt = opt || 'end'; // 默认为折叠到结束

        // 根据elem获取选区
        this.setRangeByElem(elem);

        // 根据 opt 折叠选区
        if (opt === 'start') {
            this.collapseRange(this.currentRange(), 'start');
        }
        if (opt === 'end') {
            this.collapseRange(this.currentRange(), 'end');
        }
        
        // 恢复选区
        this.restoreSelection();
    };

    // 初始化选区
    E.fn.initSelection = ieRange ? emptyFn : function () {
        var editor = this;
        if( editor.currentRange() ){
            //如果currentRange有值，则不用再初始化
            return;
        }

        var range;
        var $txt = editor.txt.$txt;
        var $firstChild = $txt.children().first();
        
        if ($firstChild.length) {
            editor.restoreSelectionByElem($firstChild.get(0));
        }
    };

    // 根据元素创建选区
    E.fn.setRangeByElem = ieRange ? emptyFn : function (elem) {
        var editor = this;
        var txtElem = editor.txt.$txt.get(0);
        if (!elem || !$.contains(txtElem, elem)) {
            return;
        }

        // 找到elem的第一个 textNode 和 最后一个 textNode
        var firstTextNode = elem.firstChild;
        while (firstTextNode) {
            if (firstTextNode.nodeType === 3) {
                break;
            }
            // 继续向下
            firstTextNode = firstTextNode.firstChild;
        }
        var lastTextNode = elem.lastChild;
        while (lastTextNode) {
            if (lastTextNode.nodeType === 3) {
                break;
            }
            // 继续向下
            lastTextNode = lastTextNode.lastChild;
        }
        
        var range = document.createRange();
        if (firstTextNode && lastTextNode) {
            // 说明 elem 有内容，能取到子元素
            range.setStart(firstTextNode, 0);
            range.setEnd(lastTextNode, lastTextNode.textContent.length);
        } else {
            // 说明 elem 无内容
            range.setStart(elem, 0);
            range.setEnd(elem, 0);
        }

        // 保存选区
        editor.saveSelection(range);
    };

});
// selection range API - IE8及以下
_e(function (E, $) {

    if (E.w3cRange) {
        // 说明支持 W3C 的range方法
        return;
    }

    // -----------------IE8时，需要重写以下方法-------------------

    // 获取选区的文字
    E.fn.getRangeText = function (range) {
        range = range || this.currentRange();
        if (!range) {
            return;
        }
        return range.text;
    };

    // 获取选区对应的DOM对象
    E.fn.getRangeElem = function (range) {
        range = range || this.currentRange();
        if (!range) {
            return;
        }
        var dom = range.parentElement();

        if (dom.nodeType === 1) {
            return dom;
        } else {
            return dom.parentNode;
        }
    };

    // 选区内容是否为空？
    E.fn.isRangeEmpty = function (range) {
        range = range || this.currentRange();

        if (range && range.text) {
            return false;
        }

        return true;
    };

    // 保存选区数据
    E.fn.saveSelection = function (range) {
        var self = this,
            _parentElem,
            selection,
            txt = self.txt.$txt.get(0);

        if (range) {
            _parentElem = range.parentElement();
        } else {
            range = document.selection.createRange();
            if(typeof range.parentElement === 'undefined'){
                //IE6、7中，insertImage后会执行此处
                //由于找不到range.parentElement，所以干脆将_parentElem赋值为null
                _parentElem = null;
            }else{
                _parentElem = range.parentElement();
            }
        }

        // 确定父元素一定要包含在编辑器区域内
        if (_parentElem && ($.contains(txt, _parentElem) || txt === _parentElem) ) {
            // 保存选择区域
            self.currentRange(range);
        }
    };

    // 恢复选中区域
    E.fn.restoreSelection = function (currentRange){
        var editor = this,
            selection,
            range;

        currentRange = currentRange || editor.currentRange();
        if(!currentRange){
            return;
        }

        range = document.selection.createRange();
        try {
            // 此处，plupload上传上传图片时，IE8-会报一个『参数无效』的错误
            range.setEndPoint('EndToEnd', currentRange);
        } catch (ex) {

        }
        
        if(currentRange.text.length === 0){
            try {
                // IE8 插入表情会报错
                range.collapse(false);
            } catch (ex) {
                
            }
            
        }else{
            range.setEndPoint('StartToStart', currentRange);
        }
        range.select();
    };

});
// editor command hooks
_e(function (E, $) {
    
    E.fn.commandHooks = function () {
        var editor = this;
        var commandHooks = {};
        
        // insertHtml
        commandHooks.insertHtml = function (html) {
            var $elem = $(html);
            var rangeElem = editor.getRangeElem();
            var targetElem;
            
            targetElem = editor.getLegalTags(rangeElem);
            if (!targetElem) {
                return;
            }

            $(targetElem).after($elem);
        };

        // 保存到对象
        editor.commandHooks = commandHooks;
    };

});
// editor command API
_e(function (E, $) {

    // 基本命令
    E.fn.command = function (e, commandName, commandValue, callback) {
        var editor = this;
        var hooks;
        
        function commandFn() {
            if (!commandName) {
                return;
            }
            if (editor.queryCommandSupported(commandName)) {
                // 默认命令
                document.execCommand(commandName, false, commandValue);
            } else {
                // hooks 命令
                hooks = editor.commandHooks;
                if (commandName in hooks) {
                    hooks[commandName](commandValue);
                }
            }
        }

        this.customCommand(e, commandFn, callback);
    };

    // 针对一个elem对象执行基础命令
    E.fn.commandForElem = function (elemOpt, e, commandName, commandValue, callback) {
        // 取得查询elem的查询条件和验证函数
        var selector;
        var check;
        if (typeof elemOpt === 'string') {
            selector = elemOpt;
        } else {
            selector = elemOpt.selector;
            check = elemOpt.check;
        }

        // 查询elem
        var rangeElem = this.getRangeElem();
        rangeElem = this.getSelfOrParentByName(rangeElem, selector, check);

        // 根据elem设置range
        if (rangeElem) {
            this.setRangeByElem(rangeElem);
        }

        // 然后执行基础命令
        this.command(e, commandName, commandValue, callback);
    };

    // 自定义命令
    E.fn.customCommand = function (e, commandFn, callback) {
        var editor = this;
        var range = editor.currentRange();

        if (!range) {
            // 目前没有选区，则无法执行命令
            e && e.preventDefault();
            return;
        }
        // 记录内容，以便撤销（执行命令之前就要记录）
        editor.undoRecord();

        // 恢复选区（有 range 参数）
        this.restoreSelection(range);

        // 执行命令事件
        commandFn.call(editor);

        // 保存选区（无参数，要从浏览器直接获取range信息）
        this.saveSelection();
        // 重新恢复选区（无参数，要取得刚刚从浏览器得到的range信息）
        this.restoreSelection();

        // 执行 callback
        if (callback && typeof callback === 'function') {
            callback.call(editor);
        }

        // 最后插入空行
        editor.txt.insertEmptyP();

        // 包裹暴露的img和text
        editor.txt.wrapImgAndText();

        // 更新内容
        editor.updateValue();

        // 更新菜单样式
        editor.updateMenuStyle();

        // 隐藏 dropPanel dropList modal  设置 200ms 间隔
        function hidePanelAndModal() {
            editor.hideDropPanelAndModal();
        } 
        setTimeout(hidePanelAndModal, 200);

        if (e) {
            e.preventDefault();
        }
    };

    // 封装 document.queryCommandValue 函数
    // IE8 直接执行偶尔会报错，因此直接用 try catch 封装一下
    E.fn.queryCommandValue = function (commandName) {
        var result = '';
        try {
            result = document.queryCommandValue(commandName);
        } catch (ex) {

        }
        return result;
    };

    // 封装 document.queryCommandState 函数
    // IE8 直接执行偶尔会报错，因此直接用 try catch 封装一下
    E.fn.queryCommandState = function (commandName) {
        var result = false;
        try {
            result = document.queryCommandState(commandName);
        } catch (ex) {

        }
        return result;
    };

    // 封装 document.queryCommandSupported 函数
    E.fn.queryCommandSupported = function (commandName) {
        var result = false;
        try {
            result = document.queryCommandSupported(commandName);
        } catch (ex) {

        }
        return result;
    };

});
// dom selector
_e(function (E, $) {

    var matchesSelector;

    // matchesSelector hook
    function _matchesSelectorForIE(selector) {
        var elem = this;
        var $elems = $(selector);
        var result = false;

        // 用jquery查找 selector 所有对象，如果其中有一个和传入 elem 相同，则证明 elem 符合 selector
        $elems.each(function () {
            if (this === elem) {
                result = true;
                return false;
            }
        });

        return result;
    }

    // 从当前的elem，往上去查找合法标签 如 p head table blockquote ul ol 等
    E.fn.getLegalTags = function (elem) {
        var legalTags = this.config.legalTags;
        if (!legalTags) {
            E.error('配置项中缺少 legalTags 的配置');
            return;
        }
        return this.getSelfOrParentByName(elem, legalTags);
    };

    // 根据条件，查询自身或者父元素，符合即返回
    E.fn.getSelfOrParentByName = function (elem, selector, check) {

        if (!elem || !selector) {
            return;
        }

        if (!matchesSelector) {
            // 定义 matchesSelector 函数
            matchesSelector = elem.webkitMatchesSelector || 
                              elem.mozMatchesSelector ||
                              elem.oMatchesSelector || 
                              elem.matchesSelector;
        }
        if (!matchesSelector) {
            // 如果浏览器本身不支持 matchesSelector 则使用自定义的hook
            matchesSelector = _matchesSelectorForIE;
        }

        var txt = this.txt.$txt.get(0);

        while (elem && txt !== elem && $.contains(txt, elem)) {
            if (matchesSelector.call(elem, selector)) {
                // 符合 selector 查询条件

                if (!check) {
                    // 没有 check 验证函数，直接返回即可
                    return elem;
                }

                if (check(elem)) {
                    // 如果有 check 验证函数，还需 check 函数的确认
                    return elem;
                }
            }

            // 如果上一步没经过验证，则将跳转到父元素
            elem = elem.parentNode;
        }

        return;
    };

});
// undo redo
_e(function (E, $) {

    var length = 20;  // 缓存的最大长度
    function _getRedoList(editor) {
        if (editor._redoList == null) {
            editor._redoList = [];
        }
        return editor._redoList;
    }
    function _getUndoList(editor) {
        if (editor._undoList == null) {
            editor._undoList = [];
        }
        return editor._undoList;
    }

    // 数据处理
    function _handle(editor, data, type) {
        // var range = data.range;
        // var range2 = range.cloneRange && range.cloneRange();
        var val = data.val;
        var html = editor.txt.$txt.html();

        if(val == null) {
            return;
        }

        if (val === html) {
            if (type === 'redo') { 
                editor.redo();
                return;
            } else if (type === 'undo') {
                editor.undo();
                return;
            } else {
                return;
            }
        }

        // 保存数据
        editor.txt.$txt.html(val);
        // 更新数据到textarea（有必要的话）
        editor.updateValue();

        // onchange 事件
        if (editor.onchange && typeof editor.onchange === 'function') {
            editor.onchange.call(editor);
        }

        // ?????
        // 注释：$txt 被重新赋值之后，range会被重置，cloneRange() 也不好使
        // // 重置选区
        // if (range2) {
        //     editor.restoreSelection(range2);
        // }
    }

    // 记录
    E.fn.undoRecord = function () {
        var editor = this;
        var $txt = editor.txt.$txt;
        var val = $txt.html();
        var undoList = _getUndoList(editor);
        var redoList = _getRedoList(editor);
        var currentVal = undoList.length ? undoList[0] : '';

        if (val === currentVal.val) {
            return;
        }

        // 清空 redolist
        if (redoList.length) {
            redoList = [];
        }

        // 添加数据到 undoList
        undoList.unshift({
            range: editor.currentRange(),  // 将当前的range也记录下
            val: val
        });

        // 限制 undoList 长度
        if (undoList.length > length) {
            undoList.pop();
        }
    };

    // undo 操作
    E.fn.undo = function () {
        var editor = this;
        var undoList = _getUndoList(editor);
        var redoList = _getRedoList(editor);

        if (!undoList.length) {
            return;
        }

        // 取出 undolist 第一个值，加入 redolist
        var data = undoList.shift();
        redoList.unshift(data);

        // 并修改编辑器的内容
        _handle(this, data, 'undo');
    };

    // redo 操作
    E.fn.redo = function () {
        var editor = this;
        var undoList = _getUndoList(editor);
        var redoList = _getRedoList(editor);
        if (!redoList.length) {
            return;
        }

        // 取出 redolist 第一个值，加入 undolist
        var data = redoList.shift();
        undoList.unshift(data);

        // 并修改编辑器的内容
        _handle(this, data, 'redo');
    };
});
// 暴露给用户的 API
_e(function (E, $) {

    // 创建编辑器
    E.fn.create = function () {
        var editor = this;

        // 检查 E.$body 是否有值
        // 如果在 body 之前引用了 js 文件，body 尚未加载，可能没有值
        if (!E.$body || E.$body.length === 0) {
            E.$body = $('body');
            E.$document = $(document);
            E.$window = $(window);
        }

        // 执行 addMenus 之前：
        // 1. 允许用户修改 editor.UI 自定义配置UI
        // 2. 允许用户通过修改 editor.menus 来自定义配置菜单
        // 因此要在 create 时执行，而不是 init           
        editor.addMenus();

        // 渲染
        editor.renderMenus();
        editor.renderMenuContainer();
        editor.renderTxt();
        editor.renderEditorContainer();

        // 绑定事件
        editor.eventMenus();
        editor.eventMenuContainer();
        editor.eventTxt();

        // 处理ready事件
        editor.readyHeadler();

        // 初始化选区
        editor.initSelection();

        // $txt 快捷方式
        editor.$txt = editor.txt.$txt;

        // 执行用户自定义事件，通过 E.ready() 添加
        var _plugins = E._plugins;
        if (_plugins && _plugins.length) {
            $.each(_plugins, function (k, val) {
                val.call(editor);
            });
        }
    };

    // 禁用编辑器
    E.fn.disable = function () {
        this.txt.$txt.removeAttr('contenteditable');
        this.disableMenusExcept();

        // 先禁用，再记录状态
        this._disabled = true;
    };
    // 启用编辑器
    E.fn.enable = function () {
        // 先解除状态记录，再启用
        this._disabled = false;
        this.txt.$txt.attr('contenteditable', 'true');
        this.enableMenusExcept();
    };

    // 销毁编辑器
    E.fn.destroy = function () {
        var self = this;
        var $valueContainer = self.$valueContainer;
        var $editorContainer = self.$editorContainer;
        var valueNodeName = self.valueNodeName;

        if (valueNodeName === 'div') {
            // div 生成的编辑器
            $valueContainer.removeAttr('contenteditable');
            $editorContainer.after($valueContainer);
            $editorContainer.hide();
        } else {
            // textarea 生成的编辑器
            $valueContainer.show();
            $editorContainer.hide();
        }
    };

    // 撤销 销毁编辑器
    E.fn.undestroy = function () {
        var self = this;
        var $valueContainer = self.$valueContainer;
        var $editorContainer = self.$editorContainer;
        var $menuContainer = self.menuContainer.$menuContainer;
        var valueNodeName = self.valueNodeName;

        if (valueNodeName === 'div') {
            // div 生成的编辑器
            $valueContainer.attr('contenteditable', 'true');
            $menuContainer.after($valueContainer);
            $editorContainer.show();
        } else {
            // textarea 生成的编辑器
            $valueContainer.hide();
            $editorContainer.show();
        }
    };

    // 清空内容的快捷方式
    E.fn.clear = function () {
        var editor = this;
        var $txt = editor.txt.$txt;
        $txt.html('<p><br></p>');
        editor.restoreSelectionByElem($txt.find('p').get(0));
    };

});
// menuContainer 构造函数
_e(function (E, $) {

    // 定义构造函数
    var MenuContainer = function (editor) {
        this.editor = editor;
        this.init();
    };

    MenuContainer.fn = MenuContainer.prototype;

    // 暴露给 E 即 window.wangEditor
    E.MenuContainer = MenuContainer;

});
// MenuContainer.fn bind fn
_e(function (E, $) {

    var MenuContainer = E.MenuContainer;

    // 初始化
    MenuContainer.fn.init = function () {
        var self = this;
        var $menuContainer = $('<div class="wangEditor-menu-container clearfix"></div>');

        self.$menuContainer = $menuContainer;

        // change shadow
        self.changeShadow();
    };

    // 编辑区域滚动时，增加shadow
    MenuContainer.fn.changeShadow = function () {
        var $menuContainer = this.$menuContainer;
        var editor = this.editor;
        var $txt = editor.txt.$txt;

        $txt.on('scroll', function () {
            if ($txt.scrollTop() > 10) {
                $menuContainer.addClass('wangEditor-menu-shadow');
            } else {
                $menuContainer.removeClass('wangEditor-menu-shadow');
            }
        });
    };

});
// MenuContainer.fn API
_e(function (E, $) {

    var MenuContainer = E.MenuContainer;

    MenuContainer.fn.render = function () {
        var $menuContainer = this.$menuContainer;
        var $editorContainer = this.editor.$editorContainer;

        $editorContainer.append($menuContainer);
    };
    
    // 获取菜单栏的高度
    MenuContainer.fn.height = function () {
        var $menuContainer = this.$menuContainer;
        return $menuContainer.height();
    };

    // 添加菜单
    MenuContainer.fn.appendMenu = function (groupIdx, menu) {
        // 判断是否需要新增一个菜单组
        this._addGroup(groupIdx);
        // 增加菜单（返回 $menuItem）
        return this._addOneMenu(menu);
    };
    MenuContainer.fn._addGroup = function (groupIdx) {
        var $menuContainer = this.$menuContainer;
        var $menuGroup;
        if (!this.$currentGroup || this.currentGroupIdx !== groupIdx) {
            $menuGroup = $('<div class="menu-group clearfix"></div>');
            $menuContainer.append($menuGroup);

            this.$currentGroup = $menuGroup;
            this.currentGroupIdx = groupIdx;
        }
    };
    MenuContainer.fn._addOneMenu = function (menu) {
        var $menuNormal = menu.$domNormal;
        var $menuSelected = menu.$domSelected;

        var $menuGroup = this.$currentGroup;
        var $item = $('<div class="menu-item clearfix"></div>');
        $menuSelected.hide();
        $item.append($menuNormal).append($menuSelected);
        $menuGroup.append($item);

        return $item;
    };

});
// menu 构造函数
_e(function (E, $) {

    // 定义构造函数
    var Menu = function (opt) {
        this.editor = opt.editor;
        this.id = opt.id;
        this.title = opt.title;
        this.$domNormal = opt.$domNormal;
        this.$domSelected = opt.$domSelected || opt.$domNormal;

        // document.execCommand 的参数
        this.commandName = opt.commandName;
        this.commandValue = opt.commandValue;
        this.commandNameSelected = opt.commandNameSelected || opt.commandName;
        this.commandValueSelected = opt.commandValueSelected || opt.commandValue;
    };

    Menu.fn = Menu.prototype;

    // 暴露给 E 即 window.wangEditor
    E.Menu = Menu;
});
// Menu.fn 初始化绑定的事件
_e(function (E, $) {

    var Menu = E.Menu;

    // 初始化UI
    Menu.fn.initUI = function () {
        var editor = this.editor;
        var uiConfig = editor.UI.menus;
        var menuId = this.id;
        var menuUI = uiConfig[menuId];

        if (this.$domNormal && this.$domSelected) {
            // 自定义的菜单中，已经传入了 $dom 无需从配置文件中查找生成
            return;
        }

        if (menuUI == null) {
            E.warn('editor.UI配置中，没有菜单 "' + menuId + '" 的UI配置，只能取默认值');
            
            // 必须写成 uiConfig['default'];
            // 写成 uiConfig.default IE8会报错
            menuUI = uiConfig['default'];
        }

        // 正常状态
        this.$domNormal = $(menuUI.normal);

        // 选中状态
        if (/^\./.test(menuUI.selected)) {
            // 增加一个样式
            this.$domSelected = this.$domNormal.clone().addClass(menuUI.selected.slice(1));
        } else {
            // 一个新的dom对象
            this.$domSelected = $(menuUI.selected);
        }
    };

});
// Menu.fn API
_e(function (E, $) {

    var Menu = E.Menu;

    // 渲染菜单
    Menu.fn.render = function (groupIdx) {
        // 渲染UI
        this.initUI();
        
        var editor = this.editor;
        var menuContainer = editor.menuContainer;
        var $menuItem = menuContainer.appendMenu(groupIdx, this);
        var onRender = this.onRender;

        // 渲染tip
        this._renderTip($menuItem);

        // 执行 onRender 函数
        if (onRender && typeof onRender === 'function') {
            onRender.call(this);
        }
    };
    Menu.fn._renderTip = function ($menuItem) {
        var self = this;
        var editor = self.editor;
        var title = self.title;
        var $tip = $('<div class="menu-tip"></div>');
        // var $triangle = $('<i class="tip-triangle"></i>'); // 小三角

        // 计算 tip 宽度
        var $tempDiv;
        if (!self.tipWidth) {
            // 设置一个纯透明的 p（absolute;top:-10000px;不会显示在内容区域）
            // 内容赋值为 title ，为了计算tip宽度
            $tempDiv = $('<p style="opacity:0; filter:Alpha(opacity=0); position:absolute;top:-10000px;">' + title + '</p>');
            // 先添加到body，计算完再 remove
            E.$body.append($tempDiv);
            editor.ready(function () {
                var editor = this;
                var titleWidth = $tempDiv.outerWidth() + 5; // 多出 5px 的冗余
                var currentWidth = $tip.outerWidth();
                var currentMarginLeft = parseFloat($tip.css('margin-left'), 10);
                // 计算完，拿到数据，则弃用
                $tempDiv.remove();
                $tempDiv = null;

                // 重新设置样式
                $tip.css({
                    width: titleWidth,
                    'margin-left': currentMarginLeft + (currentWidth - titleWidth)/2
                });

                // 存储
                self.tipWidth = titleWidth;
            });
        }

        // $tip.append($triangle);
        $tip.append(title);
        $menuItem.append($tip);

        function show() {
            $tip.show();
        }
        function hide() {
            $tip.hide();
        }

        var timeoutId;
        $menuItem.find('a').on('mouseenter', function (e) {
            if (!self.active() && !self.disabled()) {
                timeoutId = setTimeout(show, 200);
            }
        }).on('mouseleave', function (e) {
            timeoutId && clearTimeout(timeoutId);
            hide();
        }).on('click', hide);
    };

    // 绑定事件
    Menu.fn.bindEvent = function () {
        var self = this;

        var $domNormal = self.$domNormal;
        var $domSelected = self.$domSelected;

        // 试图获取该菜单定义的事件（未selected），没有则自己定义
        var clickEvent = self.clickEvent;
        if (!clickEvent) {
            clickEvent = function (e) {
                // -----------dropPanel dropList modal-----------
                var dropObj = self.dropPanel || self.dropList || self.modal;
                if (dropObj && dropObj.show) {
                    if (dropObj.isShowing) {
                        dropObj.hide();
                    } else {
                        dropObj.show();
                    }
                    return;
                }

                // -----------command-----------
                var editor = self.editor;
                var commandName;
                var commandValue;

                var selected = self.selected;
                if (selected) {
                    commandName = self.commandNameSelected;
                    commandValue = self.commandValueSelected;
                } else {
                    commandName = self.commandName;
                    commandValue = self.commandValue;
                }

                if (commandName) {
                    // 执行命令
                    editor.command(e, commandName, commandValue);
                } else {
                    // 提示
                    e.preventDefault();
                }
            };
        }
        // 获取菜单定义的selected情况下的点击事件
        var clickEventSelected = self.clickEventSelected || clickEvent;

        // 将事件绑定到菜单dom上
        $domNormal.click(function (e) {
            if (!self.disabled()) {
                clickEvent.call(self, e);
                self.updateSelected();
            }
            e.preventDefault();
        });
        $domSelected.click(function (e) {
            if (!self.disabled()) {
                clickEventSelected.call(self, e);
                self.updateSelected();
            }
            e.preventDefault();
        });
    };

    // 更新选中状态
    Menu.fn.updateSelected = function () {
        var self = this;
        var editor = self.editor;

        // 试图获取用户自定义的判断事件
        var updateSelectedEvent = self.updateSelectedEvent;
        if (!updateSelectedEvent) {
            // 用户未自定义，则设置默认值
            updateSelectedEvent = function () {
                var self = this;
                var editor = self.editor;
                var commandName = self.commandName;
                var commandValue = self.commandValue;

                if (commandValue) {
                    if (editor.queryCommandValue(commandName).toLowerCase() === commandValue.toLowerCase()) {
                        return true;
                    }
                } else if (editor.queryCommandState(commandName)) {
                    return true;
                }

                return false;
            };
        }

        // 获取结果
        var result = updateSelectedEvent.call(self);
        result = !!result;

        // 存储结果、显示效果
        self.changeSelectedState(result);
    };

    // 切换选中状态、显示效果
    Menu.fn.changeSelectedState = function (state) {
        var self = this;
        var selected = self.selected;

        if (state != null && typeof state === 'boolean') {
            if (selected === state) {
                // 计算结果和当前的状态一样
                return;
            }
            // 存储结果
            self.selected = state;

            // 切换菜单的显示
            if (state) {
                // 选中
                self.$domNormal.hide();
                self.$domSelected.show();
            } else {
                // 未选中
                self.$domNormal.show();
                self.$domSelected.hide();
            }
        } // if
    };

    // 点击菜单，显示了 dropPanel modal 时，菜单的状态 
    Menu.fn.active = function (active) {
        if (active == null) {
            return this._activeState;
        }
        this._activeState = active;
    };
    Menu.fn.activeStyle = function (active) {
        var selected = this.selected;
        var $dom = this.$domNormal;
        var $domSelected = this.$domSelected;

        if (active) {
            $dom.addClass('active');
            $domSelected.addClass('active');
        } else {
            $dom.removeClass('active');
            $domSelected.removeClass('active');
        }

        // 记录状态 （ menu hover 时会取状态用 ）
        this.active(active);
    };

    // 菜单的启用和禁用
    Menu.fn.disabled = function (opt) {
        // 参数为空，取值
        if (opt == null) {
            return !!this._disabled;
        }

        if (this._disabled === opt) {
            // 要设置的参数值和当前参数只一样，无需再次设置
            return;
        }

        var $dom = this.$domNormal;
        var $domSelected = this.$domSelected;

        // 设置样式
        if (opt) {
            $dom.addClass('disable');
            $domSelected.addClass('disable');
        } else {
            $dom.removeClass('disable');
            $domSelected.removeClass('disable');
        }

        // 存储
        this._disabled = opt;
    };

});
// dropList 构造函数
_e(function (E, $) {

    // 定义构造函数
    var DropList = function (editor, menu, opt) {
        this.editor = editor;
        this.menu = menu;

        // list 的数据源，格式 {'commandValue': 'title', ...}
        this.data = opt.data;
        // 要为每个item自定义的模板
        this.tpl = opt.tpl;
        // 为了执行 editor.commandForElem 而传入的elem查询方式
        this.selectorForELemCommand = opt.selectorForELemCommand;

        // 执行事件前后的钩子
        this.beforeEvent = opt.beforeEvent;
        this.afterEvent = opt.afterEvent;

        // 初始化
        this.init();
    };

    DropList.fn = DropList.prototype;

    // 暴露给 E 即 window.wangEditor
    E.DropList = DropList;
});
// dropList fn bind
_e(function (E, $) {

    var DropList = E.DropList;

    // init
    DropList.fn.init = function () {
        var self = this;

        // 生成dom对象
        self.initDOM();

        // 绑定command事件
        self.bindEvent();

        // 声明隐藏的事件
        self.initHideEvent();
    };

    // 初始化dom结构
    DropList.fn.initDOM = function () {
        var self = this;
        var data = self.data;
        var tpl = self.tpl || '<span>{#title}</span>';
        var $list = $('<div class="wangEditor-drop-list clearfix"></div>');

        var itemContent;
        var $item;
        $.each(data, function (commandValue, title) {
            itemContent = tpl.replace(/{#commandValue}/ig, commandValue).replace(/{#title}/ig, title);
            $item = $('<a href="#" commandValue="' + commandValue + '"></a>');
            $item.append(itemContent);
            $list.append($item);
        });

        self.$list = $list;
    };

    // 绑定事件
    DropList.fn.bindEvent = function () {
        var self = this;
        var editor = self.editor;
        var menu = self.menu;
        var commandName = menu.commandName;
        var selectorForELemCommand = self.selectorForELemCommand;
        var $list = self.$list;

        // 执行事件前后的钩子函数
        var beforeEvent = self.beforeEvent;
        var afterEvent = self.afterEvent;

        $list.on('click', 'a[commandValue]', function (e) {
            // 正式命令执行之前
            if (beforeEvent && typeof beforeEvent === 'function') {
                beforeEvent.call(e);
            }

            // 执行命令
            var commandValue = $(e.currentTarget).attr('commandValue');
            if (menu.selected && editor.isRangeEmpty() && selectorForELemCommand) {
                // 当前处于选中状态，并且选中内容为空
                editor.commandForElem(selectorForELemCommand, e, commandName, commandValue);
            } else {
                // 当前未处于选中状态，或者有选中内容。则执行默认命令
                editor.command(e, commandName, commandValue);
            }

            // 正式命令之后的钩子
            if (afterEvent && typeof afterEvent === 'function') {
                afterEvent.call(e);
            }
        });
    };

    // 点击其他地方，立即隐藏 droplist
    DropList.fn.initHideEvent = function () {
        var self = this;

        // 获取 list elem
        var thisList = self.$list.get(0);

        E.$body.on('click', function (e) {
            if (!self.isShowing) {
                return;
            }
            var trigger = e.target;

            // 获取菜单elem
            var menu = self.menu;
            var menuDom;
            if (menu.selected) {
                menuDom = menu.$domSelected.get(0);
            } else {
                menuDom = menu.$domNormal.get(0);
            }

            if (menuDom === trigger || $.contains(menuDom, trigger)) {
                // 说明由本菜单点击触发的
                return;
            }

            if (thisList === trigger || $.contains(thisList, trigger)) {
                // 说明由本list点击触发的
                return;
            }

            // 其他情况，隐藏 list
            self.hide();
        });

        E.$window.scroll(function () {
            self.hide();
        });

        E.$window.on('resize', function () {
            self.hide();
        });
    };

});
// dropListfn api
_e(function (E, $) {
    
    var DropList = E.DropList;

    // 渲染
    DropList.fn._render = function () {
        var self = this;
        var editor = self.editor;
        var $list = self.$list;

        // 渲染到页面
        editor.$editorContainer.append($list);

        // 记录状态
        self.rendered = true;
    };

    // 定位
    DropList.fn._position = function () {
        var self = this;
        var $list = self.$list;
        var editor = self.editor;
        var menu = self.menu;
        var $menuContainer = editor.menuContainer.$menuContainer;
        var $menuDom = menu.selected ? menu.$domSelected : menu.$domNormal;
        // 注意这里的 offsetParent() 要返回 .menu-item 的 position
        // 因为 .menu-item 是 position:relative
        var menuPosition = $menuDom.offsetParent().position();

        // 取得 menu 的位置、尺寸属性
        var menuTop = menuPosition.top;
        var menuLeft = menuPosition.left;
        var menuHeight = $menuDom.offsetParent().height();
        var menuWidth = $menuDom.offsetParent().width();

        // 取得 list 的尺寸属性
        var listWidth = $list.outerWidth();
        // var listHeight = $list.outerHeight();

        // 取得 $txt 的尺寸
        var txtWidth = editor.txt.$txt.outerWidth();

        // ------------开始计算-------------

        // 初步计算 list 位置属性
        var top = menuTop + menuHeight;
        var left = menuLeft + menuWidth/2;
        var marginLeft = 0 - menuWidth/2;

        // 如果超出了有边界，则要左移（且和右侧有间隙）
        var valWithTxt = (left + listWidth) - txtWidth;
        if (valWithTxt > -10) {
            marginLeft = marginLeft - valWithTxt - 10;
        }
        // 设置样式
        $list.css({
            top: top,
            left: left,
            'margin-left': marginLeft
        });

        // 如果因为向下滚动而导致菜单fixed，则再加一步处理
        if (editor._isMenufixed) {
            top = top + (($menuContainer.offset().top + $menuContainer.outerHeight()) - $list.offset().top);

            // 重新设置top
            $list.css({
                top: top
            });
        }
    };

    // 显示
    DropList.fn.show = function () {
        var self = this;
        var menu = self.menu;
        if (!self.rendered) {
            // 第一次show之前，先渲染
            self._render();
        }

        if (self.isShowing) {
            return;
        }

        var $list = self.$list;
        $list.show();

        // 定位
        self._position();

        // 记录状态
        self.isShowing = true;

        // 菜单状态
        menu.activeStyle(true);
    };

    // 隐藏
    DropList.fn.hide = function () {
        var self = this;
        var menu = self.menu;
        if (!self.isShowing) {
            return;
        }

        var $list = self.$list;
        $list.hide();

        // 记录状态
        self.isShowing = false;

        // 菜单状态
        menu.activeStyle(false);
    };
});
// dropPanel 构造函数
_e(function (E, $) {

    // 定义构造函数
    var DropPanel = function (editor, menu, opt) {
        this.editor = editor;
        this.menu = menu;
        this.$content = opt.$content;
        this.width = opt.width || 200;
        this.height = opt.height;
        this.onRender = opt.onRender;

        // init
        this.init();
    };

    DropPanel.fn = DropPanel.prototype;

    // 暴露给 E 即 window.wangEditor
    E.DropPanel = DropPanel;
});
// dropPanel fn bind
_e(function (E, $) {

    var DropPanel = E.DropPanel;

    // init
    DropPanel.fn.init = function () {
        var self = this;

        // 生成dom对象
        self.initDOM();

        // 声明隐藏的事件
        self.initHideEvent();
    };

    // init DOM
    DropPanel.fn.initDOM = function () {
        var self = this;
        var $content = self.$content;
        var width = self.width;
        var height = self.height;
        var $panel = $('<div class="wangEditor-drop-panel clearfix"></div>');
        var $triangle = $('<div class="tip-triangle"></div>');

        $panel.css({
            width: width,
            height: height ? height : 'auto'
        });
        $panel.append($triangle);
        $panel.append($content);

        // 添加对象数据
        self.$panel = $panel;
        self.$triangle = $triangle;
    };

    // 点击其他地方，立即隐藏 dropPanel
    DropPanel.fn.initHideEvent = function () {
        var self = this;

        // 获取 panel elem
        var thisPanle = self.$panel.get(0);

        E.$body.on('click', function (e) {
            if (!self.isShowing) {
                return;
            }
            var trigger = e.target;

            // 获取菜单elem
            var menu = self.menu;
            var menuDom;
            if (menu.selected) {
                menuDom = menu.$domSelected.get(0);
            } else {
                menuDom = menu.$domNormal.get(0);
            }

            if (menuDom === trigger || $.contains(menuDom, trigger)) {
                // 说明由本菜单点击触发的
                return;
            }

            if (thisPanle === trigger || $.contains(thisPanle, trigger)) {
                // 说明由本panel点击触发的
                return;
            }

            // 其他情况，隐藏 panel
            self.hide();
        });

        E.$window.scroll(function (e) {
            self.hide();
        });

        E.$window.on('resize', function () {
            self.hide();
        });
    };

});
// dropPanel fn api
_e(function (E, $) {
   
    var DropPanel = E.DropPanel;

    // 渲染
    DropPanel.fn._render = function () {
        var self = this;
        var onRender = self.onRender;
        var editor = self.editor;
        var $panel = self.$panel;

        // 渲染到页面
        editor.$editorContainer.append($panel);

        // 渲染后的回调事件
        onRender && onRender.call(self);

        // 记录状态
        self.rendered = true;
    };

    // 定位
    DropPanel.fn._position = function () {
        var self = this;
        var $panel = self.$panel;
        var $triangle = self.$triangle;
        var editor = self.editor;
        var $menuContainer = editor.menuContainer.$menuContainer;
        var menu = self.menu;
        var $menuDom = menu.selected ? menu.$domSelected : menu.$domNormal;
        // 注意这里的 offsetParent() 要返回 .menu-item 的 position
        // 因为 .menu-item 是 position:relative
        var menuPosition = $menuDom.offsetParent().position();

        // 取得 menu 的位置、尺寸属性
        var menuTop = menuPosition.top;
        var menuLeft = menuPosition.left;
        var menuHeight = $menuDom.offsetParent().height();
        var menuWidth = $menuDom.offsetParent().width();

        // 取得 panel 的尺寸属性
        var panelWidth = $panel.outerWidth();
        // var panelHeight = $panel.outerHeight();

        // 取得 $txt 的尺寸
        var txtWidth = editor.txt.$txt.outerWidth();

        // ------------开始计算-------------

        // 初步计算 panel 位置属性
        var top = menuTop + menuHeight;
        var left = menuLeft + menuWidth/2;
        var marginLeft = 0 - panelWidth/2;
        var marginLeft2 = marginLeft;  // 下文用于和 marginLeft 比较，来设置三角形tip的位置

        // 如果超出了左边界，则移动回来（要和左侧有10px间隙）
        if ((0 - marginLeft) > (left - 10)) {
            marginLeft = 0 - (left - 10);
        }

        // 如果超出了有边界，则要左移（且和右侧有10px间隙）
        var valWithTxt = (left + panelWidth + marginLeft) - txtWidth;
        if (valWithTxt > -10) {
            marginLeft = marginLeft - valWithTxt - 10;
        }

        // 设置样式
        $panel.css({
            top: top,
            left: left,
            'margin-left': marginLeft
        });

        // 如果因为向下滚动而导致菜单fixed，则再加一步处理
        if (editor._isMenufixed) {
            top = top + (($menuContainer.offset().top + $menuContainer.outerHeight()) - $panel.offset().top);

            // 重新设置top
            $panel.css({
                top: top
            });
        }

        // 设置三角形 tip 的位置
        $triangle.css({
            'margin-left': marginLeft2 - marginLeft - 5
        });
    };

    // focus 第一个 input
    DropPanel.fn.focusFirstInput = function () {
        var self = this;
        var $panel = self.$panel;
        $panel.find('input[type=text],textarea').each(function () {
            var $input = $(this);
            if ($input.attr('disabled') == null) {
                $input.focus();
                return false;
            }
        });
    };

    // 显示
    DropPanel.fn.show = function () {
        var self = this;
        var menu = self.menu;
        if (!self.rendered) {
            // 第一次show之前，先渲染
            self._render();
        }

        if (self.isShowing) {
            return;
        }

        var $panel = self.$panel;
        $panel.show();

        // 定位
        self._position();

        // 记录状态
        self.isShowing = true;

        // 菜单状态
        menu.activeStyle(true);

        if (E.w3cRange) {
            // 高级浏览器
            self.focusFirstInput();
        } else {
            // 兼容 IE8 input placeholder
            E.placeholderForIE8($panel);
        }
    };

    // 隐藏
    DropPanel.fn.hide = function () {
        var self = this;
        var menu = self.menu;
        if (!self.isShowing) {
            return;
        }

        var $panel = self.$panel;
        $panel.hide();

        // 记录状态
        self.isShowing = false;

        // 菜单状态
        menu.activeStyle(false);
    };

});
// modal 构造函数
_e(function (E, $) {

    // 定义构造函数
    var Modal = function (editor, menu, opt) {
        this.editor = editor;
        this.menu = menu;
        this.$content = opt.$content;

        this.init();
    };

    Modal.fn = Modal.prototype;

    // 暴露给 E 即 window.wangEditor
    E.Modal = Modal;
});
// modal fn bind
_e(function (E, $) {

    var Modal = E.Modal;

    Modal.fn.init = function () {
        var self = this;

        // 初始化dom
        self.initDom();

        // 初始化隐藏事件
        self.initHideEvent();
    };

    // 初始化dom
    Modal.fn.initDom = function () {
        var self = this;
        var $content = self.$content;
        var $modal = $('<div class="wangEditor-modal"></div>');
        var $close = $('<div class="wangEditor-modal-close"><i class="wangeditor-menu-img-cancel-circle"></i></div>');

        $modal.append($close);
        $modal.append($content);

        // 记录数据
        self.$modal = $modal;
        self.$close = $close;
    };

    // 初始化隐藏事件
    Modal.fn.initHideEvent = function () {
        var self = this;
        var $close = self.$close;
        var modal = self.$modal.get(0);

        // 点击 $close 按钮，隐藏
        $close.click(function () {
            self.hide();
        });

        // 点击其他部分，隐藏
        E.$body.on('click', function (e) {
            if (!self.isShowing) {
                return;
            }
            var trigger = e.target;

            // 获取菜单elem
            var menu = self.menu;
            var menuDom;
            if (menu) {
                if (menu.selected) {
                    menuDom = menu.$domSelected.get(0);
                } else {
                    menuDom = menu.$domNormal.get(0);
                }

                if (menuDom === trigger || $.contains(menuDom, trigger)) {
                    // 说明由本菜单点击触发的
                    return;
                }
            }

            if (modal === trigger || $.contains(modal, trigger)) {
                // 说明由本panel点击触发的
                return;
            }

            // 其他情况，隐藏 panel
            self.hide();
        });
    };
});
// modal fn api
_e(function (E, $) {

    var Modal = E.Modal;

    // 渲染
    Modal.fn._render = function () {
        var self = this;
        var editor = self.editor;
        var $modal = self.$modal;

        // $modal的z-index，在配置的z-index基础上再 +10
        $modal.css('z-index', editor.config.zindex + 10 + '');

        // 渲染到body最后面
        E.$body.append($modal);

        // 记录状态
        self.rendered = true;
    };

    // 定位
    Modal.fn._position = function () {
        var self = this;
        var $modal = self.$modal;
        var top = $modal.offset().top;
        var width = $modal.outerWidth();
        var height = $modal.outerHeight();
        var marginLeft = 0 - (width / 2);
        var marginTop = 0 - (height / 2);
        var sTop = E.$window.scrollTop();

        // 保证modal最顶部，不超过浏览器上边框
        if ((height / 2) > top) {
            marginTop = 0 - top;
        }

        $modal.css({
            'margin-left': marginLeft + 'px',
            'margin-top': (marginTop + sTop) + 'px'
        });
    };

    // 显示
    Modal.fn.show = function () {
        var self = this;
        var menu = self.menu;
        if (!self.rendered) {
            // 第一次show之前，先渲染
            self._render();
        }

        if (self.isShowing) {
            return;
        }
        // 记录状态
        self.isShowing = true;

        var $modal = self.$modal;
        $modal.show();

        // 定位
        self._position();

        // 激活菜单状态
        menu && menu.activeStyle(true);
    };

    // 隐藏
    Modal.fn.hide = function () {
        var self = this;
        var menu = self.menu;
        if (!self.isShowing) {
            return;
        }
        // 记录状态
        self.isShowing = false;

        // 隐藏
        var $modal = self.$modal;
        $modal.hide();

        // 菜单状态
        menu && menu.activeStyle(false);
    };
});
// txt 构造函数
_e(function (E, $) {

    // 定义构造函数
    var Txt = function (editor) {
        this.editor = editor;

        // 初始化
        this.init();
    };

    Txt.fn = Txt.prototype;

    // 暴露给 E 即 window.wangEditor
    E.Txt = Txt;
});
// Txt.fn bind fn
_e(function (E, $) {

    var Txt = E.Txt;

    // 初始化
    Txt.fn.init = function () {
        var self = this;
        var editor = self.editor;
        var $valueContainer = editor.$valueContainer;
        var currentValue = editor.getInitValue();
        var $txt;

        if ($valueContainer.get(0).nodeName === 'DIV') {
            // 如果传入生成编辑器的元素就是div，则直接使用
            $txt = $valueContainer;
            $txt.addClass("wangEditor-txt");
            $txt.attr('contentEditable', 'true');
        } else {
            // 如果不是div（是textarea），则创建一个div
            $txt = $(
                '<div class="wangEditor-txt" contentEditable="true">' +
                    currentValue +
                '</div>'
            );
        }

        // 试图最后插入一个空行，ready之后才行
        editor.ready(function () {
            self.insertEmptyP();
        });

        self.$txt = $txt;

        // 删除时，如果没有内容了，就添加一个 <p><br></p>
        self.contentEmptyHandle();

        // enter时，不能使用 div 换行
        self.bindEnterForDiv();

        // enter时，用 p 包裹 text
        self.bindEnterForText();

        // tab 插入4个空格
        self.bindTabEvent();

        // 处理粘贴内容
        self.bindPasteFilter();

        // $txt.formatText() 方法
        self.bindFormatText();

        // 定义 $txt.html() 方法
        self.bindHtml();
    };

    // 删除时，如果没有内容了，就添加一个 <p><br></p>
    Txt.fn.contentEmptyHandle = function () {
        var self = this;
        var editor = self.editor;
        var $txt = self.$txt;
        var $p;

        $txt.on('keydown', function (e) {
            if (e.keyCode !== 8) {
                return;
            }
            var txtHtml = $.trim($txt.html().toLowerCase());
            if (txtHtml === '<p><br></p>') {
                // 如果最后还剩余一个空行，就不再继续删除了
                e.preventDefault();
                return;
            }
        });

        $txt.on('keyup', function (e) {
            if (e.keyCode !== 8) {
                return;
            }
            var txtHtml = $.trim($txt.html().toLowerCase());
            // ff时用 txtHtml === '<br>' 判断，其他用 !txtHtml 判断
            if (!txtHtml || txtHtml === '<br>') {
                // 内容空了
                $p = $('<p><br/></p>');
                $txt.html(''); // 一定要先清空，否则在 ff 下有问题
                $txt.append($p);
                editor.restoreSelectionByElem($p.get(0));
            }
        });
    };

    // enter时，不能使用 div 换行
    Txt.fn.bindEnterForDiv = function () {
        var tags = E.config.legalTags; // 配置中编辑器要求的合法标签，如 p head table blockquote ul ol 等
        var self = this;
        var editor = self.editor;
        var $txt = self.$txt;

        var $keydownDivElem;
        function divHandler() {
            if (!$keydownDivElem) {
                return;
            }

            var $pElem = $('<p>' + $keydownDivElem.html() + '</p>');
            $keydownDivElem.after($pElem);
            $keydownDivElem.remove();
        }

        $txt.on('keydown keyup', function (e) {
            if (e.keyCode !== 13) {
                return;
            }
            // 查找合法标签
            var rangeElem = editor.getRangeElem();
            var targetElem = editor.getLegalTags(rangeElem);
            var $targetElem;
            var $pElem;

            if (!targetElem) {
                // 没找到合法标签，就去查找 div
                targetElem = editor.getSelfOrParentByName(rangeElem, 'div');
                if (!targetElem) {
                    return;
                }
                $targetElem = $(targetElem);

                if (e.type === 'keydown') {
                    // 异步执行（同步执行会出现问题）
                    $keydownDivElem = $targetElem;
                    setTimeout(divHandler, 0);
                }

                if (e.type === 'keyup') {
                    // 将 div 的内容移动到 p 里面，并移除 div
                    $pElem = $('<p>' + $targetElem.html() + '</p>');
                    $targetElem.after($pElem);
                    $targetElem.remove();

                    // 如果是回车结束，将选区定位到行首
                    editor.restoreSelectionByElem($pElem.get(0), 'start');
                }
            }
        });
    };

    // enter时，用 p 包裹 text
    Txt.fn.bindEnterForText = function () {
        var self = this;
        var $txt = self.$txt;
        var handle;
        $txt.on('keyup', function (e) {
            if (e.keyCode !== 13) {
                return;
            }
            if (!handle) {
                handle = function() {
                    self.wrapImgAndText();
                };
            }
            setTimeout(handle);
        });
    };

    // tab 时，插入4个空格
    Txt.fn.bindTabEvent = function () {
        var self = this;
        var editor = self.editor;
        var $txt = self.$txt;

        $txt.on('keydown', function (e) {
            if (e.keyCode !== 9) {
                // 只监听 tab 按钮
                return;
            }
            // 如果浏览器支持 insertHtml 则插入4个空格。如果不支持，就不管了
            if (editor.queryCommandSupported('insertHtml')) {
                editor.command(e, 'insertHtml', '&nbsp;&nbsp;&nbsp;&nbsp;');
            }
        });
    };

    // 处理粘贴内容
    Txt.fn.bindPasteFilter = function () {
        var self = this;
        var editor = self.editor;
        var resultHtml = '';  //存储最终的结果
        var $txt = self.$txt;
        var legalTags = editor.config.legalTags;
        var legalTagArr = legalTags.split(',');

        $txt.on('paste', function (e) {
            if (!editor.config.pasteFilter) {
                // 配置中取消了粘贴过滤
                return;
            }

            var currentNodeName = editor.getRangeElem().nodeName;
            if (currentNodeName === 'TD' || currentNodeName === 'TH') {
                // 在表格的单元格中粘贴，忽略所有内容。否则会出现异常情况
                return;
            }

            resultHtml = ''; // 先清空 resultHtml

            var pasteHtml, $paste, docSplitHtml;
            var data = e.clipboardData || e.originalEvent.clipboardData;
            var ieData = window.clipboardData;

            if (editor.config.pasteText) {
                // 只粘贴纯文本

                if (data && data.getData) {
                    // w3c
                    pasteHtml = data.getData('text/plain');
                } else if (ieData && ieData.getData) {
                    // IE
                    pasteHtml = ieData.getData('text');
                } else {
                    // 其他情况
                    return;
                }

                // 拼接为 <p> 标签
                if (pasteHtml) {
                    resultHtml = '<p>' + pasteHtml + '</p>';
                }

            } else {
                // 粘贴过滤了样式的、只有标签的 html

                if (data && data.getData) {
                    // w3c

                    // 获取粘贴过来的html
                    pasteHtml = data.getData('text/html');

                    // 过滤从 word excel 粘贴过来的乱码
                    docSplitHtml = pasteHtml.split('</html>');
                    if (docSplitHtml.length === 2) {
                        pasteHtml = docSplitHtml[0];
                    }

                    if (pasteHtml) {
                        // 创建dom
                        $paste = $('<div>' + pasteHtml + '</div>');
                        // 处理，并将结果存储到 resultHtml 『全局』变量
                        handle($paste.get(0));
                    } else {
                        // 得不到html，试图获取text
                        pasteHtml = data.getData('text/plain');
                        if (pasteHtml) {
                            // 替换特殊字符
                            pasteHtml = pasteHtml.replace(/[ ]/g, '&nbsp;')
                                                 .replace(/</g, '&lt;')
                                                 .replace(/>/g, '&gt;')
                                                 .replace(/\n/g, '</p><p>');
                            // 拼接
                            resultHtml = '<p>' + pasteHtml + '</p>';

                            // 查询链接
                            resultHtml = resultHtml.replace(/<p>(https?:\/\/.*?)<\/p>/ig, function (match, link) {
                                return '<p><a href="' + link + '" target="_blank">' + link + '</p>';
                            });
                        }
                    }
                    
                } else if (ieData && ieData.getData) {
                    // IE 直接从剪切板中取出纯文本格式
                    resultHtml = ieData.getData('text');
                    if (!resultHtml) {
                        return;
                    }
                    // 拼接为 <p> 标签
                    resultHtml = '<p>' + resultHtml + '</p>';
                    resultHtml = resultHtml.replace(new RegExp('\n', 'g'), '</p><p>');
                } else {
                    // 其他情况
                    return;
                }
            }

            // 执行命令
            if (resultHtml) {
                editor.command(e, 'insertHtml', resultHtml);

                // 删除内容为空的 p 和嵌套的 p
                self.clearEmptyOrNestP();
            }
        });

        // 处理粘贴的内容
        function handle(elem) {
            if (!elem || !elem.nodeType || !elem.nodeName) {
                return;
            }
            var $elem;
            var nodeName = elem.nodeName.toLowerCase();
            var nodeType = elem.nodeType;
            var childNodesClone;

            // 只处理文本和普通node标签
            if (nodeType !== 3 && nodeType !== 1) {
                return;
            }

            $elem = $(elem);

            // 如果是容器，则继续深度遍历
            if (nodeName === 'div') {
                childNodesClone = [];
                $.each(elem.childNodes, function (index, item) {
                    // elem.childNodes 可获取TEXT节点，而 $elem.children() 就获取不到
                    // 先将 elem.childNodes 拷贝一份，一面在循环递归过程中 elem 发生变化
                    childNodesClone.push(item);
                });
                // 遍历子元素，执行操作
                $.each(childNodesClone, function () {
                    handle(this);
                });
                return;
            }
            
            if (legalTagArr.indexOf(nodeName) >= 0) {
                // 如果是合法标签之内的，则根据元素类型，获取值
                resultHtml += getResult(elem);
            } else if (nodeType === 3) {
                // 如果是文本，则直接插入 p 标签
                resultHtml += '<p>' + elem.textContent + '</p>';
            } else if (nodeName === 'br') {
                // <br>保留
                resultHtml += '<br/>';
            }
            else {
                // 忽略的标签
                if (['meta', 'style', 'script', 'object', 'form', 'iframe', 'hr'].indexOf(nodeName) >= 0) {
                    return;
                }
                // 其他标签，移除属性，插入 p 标签
                $elem = $(removeAttrs(elem));
                // 注意，这里的 clone() 是必须的，否则会出错
                resultHtml += $('<div>').append($elem.clone()).html();
            }
        }

        // 获取元素的结果
        function getResult(elem) {
            var nodeName = elem.nodeName.toLowerCase();
            var $elem;
            var htmlForP = '';
            var htmlForLi = '';

            if (['blockquote'].indexOf(nodeName) >= 0) {

                // 直接取出元素text即可
                $elem = $(elem);
                return '<' + nodeName + '>' + $elem.text() + '</' + nodeName + '>';

            } else if (['p', 'h1', 'h2', 'h3', 'h4', 'h5'].indexOf(nodeName) >= 0) {

                //p head 取出 text 和链接
                elem = removeAttrs(elem);
                $elem = $(elem);
                htmlForP = $elem.html();

                // 剔除 a img 之外的元素
                htmlForP = htmlForP.replace(/<.*?>/ig, function (tag) {
                    if (tag === '</a>' || tag.indexOf('<a ') === 0 || tag.indexOf('<img ') === 0) {
                        return tag;
                    } else {
                        return '';
                    }
                });

                return '<' + nodeName + '>' + htmlForP + '</' + nodeName + '>';

            } else if (['ul', 'ol'].indexOf(nodeName) >= 0) {
                
                // ul ol元素，获取子元素（li元素）的text link img，再拼接
                $elem = $(elem);
                $elem.children().each(function () {
                    var $li = $(removeAttrs(this));
                    var html = $li.html();

                    html = html.replace(/<.*?>/ig, function (tag) {
                        if (tag === '</a>' || tag.indexOf('<a ') === 0 || tag.indexOf('<img ') === 0) {
                            return tag;
                        } else {
                            return '';
                        }
                    });

                    htmlForLi += '<li>' + html + '</li>';
                });
                return '<' + nodeName + '>' + htmlForLi + '</' + nodeName + '>';
            
            } else {
                
                // 其他元素，移除元素属性
                $elem = $(removeAttrs(elem));
                return $('<div>').append($elem).html();
            }
        }

        // 移除一个元素（子元素）的attr
        function removeAttrs(elem) {
            var attrs = elem.attributes || [];
            var attrNames = [];
            var exception = ['href', 'target', 'src', 'alt', 'rowspan', 'colspan']; //例外情况

            // 先存储下elem中所有 attr 的名称
            $.each(attrs, function (key, attr) {
                if (attr && attr.nodeType === 2) {
                    attrNames.push(attr.nodeName);
                }
            });
            // 再根据名称删除所有attr
            $.each(attrNames, function (key, attr) {
                if (exception.indexOf(attr) < 0) {
                    // 除了 exception 规定的例外情况，删除其他属性
                    elem.removeAttribute(attr);
                }
            });


            // 递归子节点
            var children = elem.childNodes;
            if (children.length) {
                $.each(children, function (key, value) {
                    removeAttrs(value);
                });
            }

            return elem;
        }
    };

    // 绑定 $txt.formatText() 方法
    Txt.fn.bindFormatText = function () {
        var self = this;
        var editor = self.editor;
        var $txt = self.$txt;
        var legalTags = E.config.legalTags;
        var legalTagArr = legalTags.split(',');
        var length = legalTagArr.length;
        var regArr = [];

        // 将 E.config.legalTags 配置的有效字符，生成正则表达式
        $.each(legalTagArr, function (k, tag) {
            var reg = '\>\\s*\<(' + tag + ')\>';
            regArr.push(new RegExp(reg, 'ig'));
        });

        // 增加 li 
        regArr.push(new RegExp('\>\\s*\<(li)\>', 'ig'));

        // 增加 tr
        regArr.push(new RegExp('\>\\s*\<(tr)\>', 'ig'));

        // 增加 code
        regArr.push(new RegExp('\>\\s*\<(code)\>', 'ig'));

        // 生成 formatText 方法
        $txt.formatText = function () {
            var $temp = $('<div>');
            var html = $txt.html();

            // 去除空格
            html = html.replace(/\s*</ig, '<');

            // 段落、表格之间换行
            $.each(regArr, function (k, reg) {
                if (!reg.test(html)) {
                    return;
                }
                html = html.replace(reg, function (matchStr, tag) {
                    return '>\n<' + tag + '>';
                });
            });

            $temp.html(html);
            return $temp.text();
        };
    };

    // 定制 $txt.html 方法
    Txt.fn.bindHtml = function () {
        var self = this;
        var editor = self.editor;
        var $txt = self.$txt;
        var $valueContainer = editor.$valueContainer;
        var valueNodeName = editor.valueNodeName;

        $txt.html = function (html) {
            var result;

            if (valueNodeName === 'div') {
                // div 生成的编辑器，取值、赋值，都直接触发jquery的html方法
                result = $.fn.html.call($txt, html);
            }

            // textarea 生成的编辑器，则需要考虑赋值时，也给textarea赋值

            if (html === undefined) {
                // 取值，直接触发jquery原生html方法
                result = $.fn.html.call($txt);

                // 替换 html 中，src和href属性中的 & 字符。
                // 因为 .html() 或者 .innerHTML 会把所有的 & 字符都改成 &amp; 但是 src 和 href 中的要保持 &
                result = result.replace(/(href|src)\=\"(.*)\"/igm, function (a, b, c) {
                    return b + '="' + c.replace('&amp;', '&') + '"';
                });
            } else {
                // 赋值，需要同时给 textarea 赋值
                result = $.fn.html.call($txt, html);
                $valueContainer.val(html);
            }

            if (html === undefined) {
                return result;
            } else {
                // 手动触发 change 事件，因为 $txt 监控了 change 事件来判断是否需要执行 editor.onchange 
                $txt.change();
            }
        };
    };
});
// Txt.fn api
_e(function (E, $) {

    var Txt = E.Txt;

    var txtChangeEventNames = 'propertychange change click keyup input paste';

    // 渲染
    Txt.fn.render = function () {
        var $txt = this.$txt;
        var $editorContainer = this.editor.$editorContainer;
        $editorContainer.append($txt);
    };

    // 计算高度
    Txt.fn.initHeight = function () {
        var editor = this.editor;
        var $txt = this.$txt;
        var valueContainerHeight = editor.$valueContainer.height();
        var menuHeight = editor.menuContainer.height();
        var txtHeight = valueContainerHeight - menuHeight;

        // 限制最小为 50px
        txtHeight = txtHeight < 50 ? 50 : txtHeight;

        $txt.height(txtHeight);

        // 记录原始高度
        editor.valueContainerHeight = valueContainerHeight;

        // 设置 max-height
        this.initMaxHeight(txtHeight, menuHeight);
    };

    // 计算最大高度
    Txt.fn.initMaxHeight = function (txtHeight, menuHeight) {
        var editor = this.editor;
        var $menuContainer = editor.menuContainer.$menuContainer;
        var $txt = this.$txt;
        var $wrap = $('<div>');

        // 需要浏览器支持 max-height，否则不管
        if (window.getComputedStyle && 'max-height'in window.getComputedStyle($txt.get(0))) {
            // 获取 max-height 并判断是否有值
            var maxHeight = parseInt(editor.$valueContainer.css('max-height'));
            if (isNaN(maxHeight)) {
                return;
            }

            // max-height 和『全屏』暂时有冲突
            if (editor.menus.fullscreen) {
                E.warn('max-height和『全屏』菜单一起使用时，会有一些问题尚未解决，请暂时不要两个同时使用');
                return;
            }

            // 标记
            editor.useMaxHeight = true;

            // 设置maxheight
            $wrap.css({
                'max-height': (maxHeight - menuHeight) + 'px',
                'overflow-y': 'auto'
            });
            $txt.css({
                'height': 'auto',
                'overflow-y': 'visible',
                'min-height': txtHeight + 'px'
            });

            // 滚动式，菜单阴影
            $wrap.on('scroll', function () {
                if ($txt.parent().scrollTop() > 10) {
                    $menuContainer.addClass('wangEditor-menu-shadow');
                } else {
                    $menuContainer.removeClass('wangEditor-menu-shadow');
                }
            });

            // 需在编辑器区域外面再包裹一层
            $txt.wrap($wrap);
        }
    };

    // 保存选区
    Txt.fn.saveSelectionEvent = function () {
        var $txt = this.$txt;
        var editor = this.editor;
        var timeoutId;
        var dt = Date.now();

        function save() {
            editor.saveSelection();
        }

        // 同步保存选区
        function saveSync() {
            // 100ms之内，不重复保存
            if (Date.now() - dt < 100) {
                return;
            }

            dt = Date.now();
            save();
        }

        // 异步保存选区
        function saveAync() {
            // 节流，防止高频率重复操作
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(save, 300);
        }

        // txt change 、focus、blur 时随时保存选区
        $txt.on(txtChangeEventNames + ' focus blur', function (e) {
            // 先同步保存选区，为了让接下来就马上要执行 editor.getRangeElem() 的程序
            // 能够获取到正确的 rangeElem
            saveSync();

            // 再异步保存选区，为了确定更加准确的选区，为后续的操作做准备
            saveAync();
        });

        // 鼠标拖拽选择时，可能会拖拽到编辑器区域外面再松手，此时 $txt 就监听不到 click事件了
        $txt.on('mousedown', function () {
            $txt.on('mouseleave.saveSelection', function (e) {
                // 先同步后异步，如上述注释
                saveSync();
                saveAync();

                // 顺道吧菜单状态也更新了
                editor.updateMenuStyle();
            });
        }).on('mouseup', function () {
            $txt.off('mouseleave.saveSelection');
        });
        
    };

    // 随时更新 value
    Txt.fn.updateValueEvent = function () {
        var $txt = this.$txt;
        var editor = this.editor;
        var timeoutId, oldValue;

        // 触发 onchange 事件
        function doOnchange() {
            var val = $txt.html();
            if (oldValue === val) {
                // 无变化
                return;
            }

            // 触发 onchange 事件
            if (editor.onchange && typeof editor.onchange === 'function') {
                editor.onchange.call(editor);
            }

            // 更新内容
            editor.updateValue();

            // 记录最新内容
            oldValue = val;
        }

        // txt change 时随时更新内容
        $txt.on(txtChangeEventNames, function (e) {
            // 初始化
            if (oldValue == null) {
                oldValue = $txt.html();
            }

            // 监控内容变化（停止操作 100ms 之后立即执行）
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(doOnchange, 100);
        });
    };

    // 随时更新 menustyle
    Txt.fn.updateMenuStyleEvent = function () {
        var $txt = this.$txt;
        var editor = this.editor;

        // txt change 时随时更新内容
        $txt.on(txtChangeEventNames, function (e) {
            editor.updateMenuStyle();
        });
    };

    // 最后插入试图插入 <p><br><p>
    Txt.fn.insertEmptyP = function () {
        var $txt = this.$txt;
        var $children = $txt.children();

        if ($children.length === 0) {
            $txt.append($('<p><br></p>'));
            return;
        }

        if ($.trim($children.last().html()).toLowerCase() !== '<br>') {
            $txt.append($('<p><br></p>'));
        }
    };

    // 将编辑器暴露出来的文字和图片，都用 p 来包裹
    Txt.fn.wrapImgAndText = function () {
        var $txt = this.$txt;
        var $imgs = $txt.children('img');
        var txt = $txt[0];
        var childNodes = txt.childNodes;
        var childrenLength = childNodes.length;
        var i, childNode, p;

        // 处理图片
        $imgs.length && $imgs.each(function () {
            $(this).wrap('<p>');
        });

        // 处理文字
        for (i = 0; i < childrenLength; i++) {
            childNode = childNodes[i];
            if (childNode.nodeType === 3 && childNode.textContent && $.trim(childNode.textContent)) {
                $(childNode).wrap('<p>');
            }
        }
    };

    // 清空内容为空的<p>，以及重复包裹的<p>（在windows下的chrome粘贴文字之后，会出现上述情况）
    Txt.fn.clearEmptyOrNestP = function () {
        var $txt = this.$txt;
        var $pList = $txt.find('p');

        $pList.each(function () {
            var $p = $(this);
            var $children = $p.children();
            var childrenLength = $children.length;
            var $firstChild;
            var content = $.trim($p.html());

            // 内容为空的p
            if (!content) {
                $p.remove();
                return;
            }

            // 嵌套的p
            if (childrenLength === 1) {
                $firstChild = $children.first();
                if ($firstChild.get(0) && $firstChild.get(0).nodeName === 'P') {
                    $p.html( $firstChild.html() );
                }
            }
        });
    };

    // 获取 scrollTop
    Txt.fn.scrollTop = function (val) {
        var self = this;
        var editor = self.editor;
        var $txt = self.$txt;

        if (editor.useMaxHeight) {
            return $txt.parent().scrollTop(val);
        } else {
            return $txt.scrollTop(val);
        }
    };

    // 鼠标hover时候，显示p、head的高度
    Txt.fn.showHeightOnHover = function () {
        var editor = this.editor;
        var $editorContainer = editor.$editorContainer;
        var menuContainer = editor.menuContainer;
        var $txt = this.$txt;
        var $tip = $('<i class="height-tip"><i>');
        var isTipInTxt = false;

        function addAndShowTip($target) {
            if (!isTipInTxt) {
                $editorContainer.append($tip);
                isTipInTxt = true;
            }

            var txtTop = $txt.position().top;
            var txtHeight = $txt.outerHeight();

            var height = $target.height();
            var top = $target.position().top;
            var marginTop = parseInt($target.css('margin-top'), 10);
            var paddingTop = parseInt($target.css('padding-top'), 10);
            var marginBottom = parseInt($target.css('margin-bottom'), 10);
            var paddingBottom = parseInt($target.css('padding-bottom'), 10);

            // 计算初步的结果
            var resultHeight = height + paddingTop + marginTop + paddingBottom + marginBottom;
            var resultTop = top + menuContainer.height();
            
            // var spaceValue;

            // // 判断是否超出下边界
            // spaceValue = (resultTop + resultHeight) - (txtTop + txtHeight);
            // if (spaceValue > 0) {
            //     resultHeight = resultHeight - spaceValue;
            // }

            // // 判断是否超出了下边界
            // spaceValue = txtTop > resultTop;
            // if (spaceValue) {
            //     resultHeight = resultHeight - spaceValue;
            //     top = top + spaceValue;
            // }

            // 按照最终结果渲染
            $tip.css({
                height: height + paddingTop + marginTop + paddingBottom + marginBottom,
                top: top + menuContainer.height()
            });
        }
        function removeTip() {
            if (!isTipInTxt) {
                return;
            }
            $tip.remove();
            isTipInTxt = false;
        }

        $txt.on('mouseenter', 'ul,ol,blockquote,p,h1,h2,h3,h4,h5,table,pre', function (e) {
            addAndShowTip($(e.currentTarget));
        }).on('mouseleave', function () {
            removeTip();
        });
    };

});
// 工具函数
_e(function (E, $) {

    // IE8 [].indexOf()
    if(!Array.prototype.indexOf){
        //IE低版本不支持 arr.indexOf 
        Array.prototype.indexOf = function(elem){
            var i = 0,
                length = this.length;
            for(; i<length; i++){
                if(this[i] === elem){
                    return i;
                }
            }
            return -1;
        };
        //IE低版本不支持 arr.lastIndexOf
        Array.prototype.lastIndexOf = function(elem){
            var length = this.length;
            for(length = length - 1; length >= 0; length--){
                if(this[length] === elem){
                    return length;
                }
            }
            return -1;
        };
    }

    // IE8 Date.now()
    if (!Date.now) {
        Date.now = function () {
            return new Date().valueOf(); 
        };
    }

    // console.log && console.warn && console.error
    var console = window.console;
    var emptyFn = function () {};
    $.each(['info', 'log', 'warn', 'error'], function (key, value) {
        if (console == null) {
            E[value] = emptyFn;
        } else {
            E[value] = function (info) {
                // 通过配置来控制打印输出
                if (E.config && E.config.printLog) {

                }
            };
        }
    });

    // 获取随机数
    E.random = function () {
        return Math.random().toString().slice(2);
    };

    // 浏览器是否支持 placeholder
    E.placeholder = 'placeholder' in document.createElement('input');

    // 兼容IE8的 input placeholder
    E.placeholderForIE8 = function ($container) {
        if (E.placeholder) {
            return;
        }
        $container.find('input[placeholder]').each(function () {
            var $input = $(this);
            var placeholder = $input.attr('placeholder');

            if ($input.val() === '') {
                $input.css('color', '#666');
                $input.val(placeholder);

                $input.on('focus.placeholder click.placeholder', function () {
                    $input.val('');
                    $input.css('color', '#333');
                    $input.off('focus.placeholder click.placeholder');
                });
            }
        });
    };
});
// 语言包
_e(function (E, $) {
    E.langs = {};
    
    // 中文
    E.langs['zh-cn'] = {
        bold: '粗体',
        underline: '下划线',
        italic: '斜体',
        forecolor: '文字颜色',
        bgcolor: '背景色',
        strikethrough: '删除线',
        eraser: '清空格式',
        source: '源码',
        quote: '引用',
        fontfamily: '字体',
        fontsize: '字号',
        head: '标题',
        orderlist: '有序列表',
        unorderlist: '无序列表',
        alignleft: '左对齐',
        aligncenter: '居中',
        alignright: '右对齐',
        link: '链接',
        text: '文本',
        submit: '提交',
        cancel: '取消',
        unlink: '取消链接',
        table: '表格',
        emotion: '表情',
        img: '图片',
        uploadImg: '上传图片',
        linkImg: '网络图片',
        video: '视频',
        'width': '宽',
        'height': '高',
        location: '位置',
        loading: '加载中',
        searchlocation: '搜索位置',
        dynamicMap: '动态地图',
        clearLocation: '清除位置',
        langDynamicOneLocation: '动态地图只能显示一个位置',
        insertcode: '插入代码',
        undo: '撤销',
        redo: '重复',
        fullscreen: '全屏',
        openLink: '打开链接'
    };

    // 英文
    E.langs.en = {
        bold: 'Bold',
        underline: 'Underline',
        italic: 'Italic',
        forecolor: 'Color',
        bgcolor: 'Backcolor',
        strikethrough: 'Strikethrough',
        eraser: 'Eraser',
        source: 'Codeview',
        quote: 'Quote',
        fontfamily: 'Font family',
        fontsize: 'Font size',
        head: 'Head',
        orderlist: 'Ordered list',
        unorderlist: 'Unordered list',
        alignleft: 'Align left',
        aligncenter: 'Align center',
        alignright: 'Align right',
        link: 'Insert link',
        text: 'Text',
        submit: 'Submit',
        cancel: 'Cancel',
        unlink: 'Unlink',
        table: 'Table',
        emotion: 'Emotions',
        img: 'Image',
        uploadImg: 'Upload',
        linkImg: 'Link',
        video: 'Video',
        'width': 'width',
        'height': 'height',
        location: 'Location',
        loading: 'Loading',
        searchlocation: 'search',
        dynamicMap: 'Dynamic',
        clearLocation: 'Clear',
        langDynamicOneLocation: 'Only one location in dynamic map',
        insertcode: 'Insert Code',
        undo: 'Undo',
        redo: 'Redo',
        fullscreen: 'Full screnn',
        openLink: 'open link'
    };
});
// 全局配置
_e(function (E, $) {

    E.config = {};

    // 全屏时的 z-index
    E.config.zindex = 10000;

    // 是否打印log
    E.config.printLog = true;

    // 菜单吸顶：false - 不吸顶；number - 吸顶，值为top值
    E.config.menuFixed = 0;

    // 编辑源码时，过滤 javascript
    E.config.jsFilter = true;

    // 编辑器允许的标签
    E.config.legalTags = 'p,h1,h2,h3,h4,h5,h6,blockquote,table,ul,ol,pre';

    // 语言包
    E.config.lang = E.langs['zh-cn'];

    // 菜单配置
    E.config.menus = [
        'source',
        '|',
        'bold',
        'underline',
        'italic',
        'strikethrough',
        'eraser',
        'forecolor',
        'bgcolor',
        '|',
        'quote',
        'fontfamily',
        'fontsize',
        'head',
        'unorderlist',
        'orderlist',
        'alignleft',
        'aligncenter',
        'alignright',
        '|',
        'link',
        'unlink',
        'table',
        'emotion',
        '|',
        'img',
        'video',
        'location',
        'insertcode',
        '|',
        'undo',
        'redo',
        'fullscreen'
    ];

    // 颜色配置
    E.config.colors = {
        // 'value': 'title'
        '#880000': '暗红色',
        '#800080': '紫色',
        '#ff0000': '红色',
        '#ff00ff': '鲜粉色',
        '#000080': '深蓝色',
        '#0000ff': '蓝色',
        '#00ffff': '湖蓝色',
        '#008080': '蓝绿色',
        '#008000': '绿色',
        '#808000': '橄榄色',
        '#00ff00': '浅绿色',
        '#ffcc00': '橙黄色',
        '#808080': '灰色',
        '#c0c0c0': '银色',
        '#000000': '黑色',
        '#ffffff': '白色'
    };

    // 字体
    E.config.familys = [
        '宋体', '黑体', '楷体', '微软雅黑',
        'Arial', 'Verdana', 'Georgia',
        'Times New Roman', 'Microsoft JhengHei',
        'Trebuchet MS', 'Courier New', 'Impact', 'Comic Sans MS', 'Consolas'
    ];

    // 字号
    E.config.fontsizes = {
        // 格式：'value': 'title'
        1: '12px',
        2: '13px',
        3: '16px',
        4: '18px',
        5: '24px',
        6: '32px',
        7: '48px'
    };

    // 表情包
    E.config.emotionsShow = 'icon'; // 显示项，默认为'icon'，也可以配置成'value'
    E.config.emotions = {
        // 'default': {
        //     title: '默认',
        //     data: './emotions.data'
        // },
        'weibo': {
            title: '微博表情',
            data: [
                {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7a/shenshou_thumb.gif',
                    value: '[草泥马]'    
                },
                {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/60/horse2_thumb.gif',
                    value: '[神马]'    
                },
                {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/fuyun_thumb.gif',
                    value: '[浮云]'    
                },
                {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c9/geili_thumb.gif',
                    value: '[给力]'    
                },
                {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/f2/wg_thumb.gif',
                    value: '[围观]'    
                },
                {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/70/vw_thumb.gif',
                    value: '[威武]'
                },
                {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/6e/panda_thumb.gif',
                    value: '[熊猫]'
                },
                {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/81/rabbit_thumb.gif',
                    value: '[兔子]'
                },
                {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/otm_thumb.gif',
                    value: '[奥特曼]'
                },
                {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/15/j_thumb.gif',
                    value: '[囧]'
                },
                {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/89/hufen_thumb.gif',
                    value: '[互粉]'
                },
                {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/c4/liwu_thumb.gif',
                    value: '[礼物]'
                },
                {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/ac/smilea_thumb.gif',
                    value: '[呵呵]'
                },
                {
                    icon: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/0b/tootha_thumb.gif',
                    value: '[哈哈]'
                }
            ]
        }
    };

    // 百度地图的key
    E.config.mapAk = 'TVhjYjq1ICT2qqL5LdS8mwas';

    // 上传图片的配置
    // server地址
    E.config.uploadImgUrl = '';
    // 超时时间
    E.config.uploadTimeout = 20 * 1000;
    // 用于存储上传回调事件
    E.config.uploadImgFns = {};
    // 自定义上传图片的filename
    E.config.uploadImgFileName = 'ChooseFile';

    // 自定义上传，设置为 true 之后，显示上传图标
    E.config.customUpload = false;
    // 自定义上传的init事件
    // E.config.customUploadInit = function () {....};

    // 自定义上传时传递的参数（如 token）
    E.config.uploadParams = {
        /* token: 'abcdef12345' */
    };

    // 自定义上传是的header参数
    E.config.uploadHeaders = {
         /* 'Accept' : 'text/x-json' */
    };

    // 跨域上传时传递 cookie，默认为 true
    E.config.withCredentials = true;

    // 隐藏网络图片，默认为 false
    E.config.hideLinkImg = false;

    // 是否过滤粘贴内容
    E.config.pasteFilter = true;

    // 是否粘贴纯文本，当 editor.config.pasteFilter === false 时候，此配置将失效
    E.config.pasteText = false;

    // 插入代码时，默认的语言
    E.config.codeDefaultLang = 'javascript';

});
// 全局UI
_e(function (E, $) {

     E.UI = {};

     // 为菜单自定义配置的UI
     E.UI.menus = {
        // 这个 default 不加引号，在 IE8 会报错
        'default': {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-command"></i></a>',
            selected: '.selected'
        },
        bold: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-bold"></i></a>',
            selected: '.selected'
        },
        underline: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-underline"></i></a>',
            selected: '.selected'
        },
        italic: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-italic"></i></a>',
            selected: '.selected'
        },
        forecolor: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-pencil"></i></a>',
            selected: '.selected'
        },
        bgcolor: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-brush"></i></a>',
            selected: '.selected'
        },
        strikethrough: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-strikethrough"></i></a>',
            selected: '.selected'
        },
        eraser: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-eraser"></i></a>',
            selected: '.selected'
        },
        quote: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-quotes-left"></i></a>',
            selected: '.selected'
        },
        source: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-code"></i></a>',
            selected: '.selected'
        },
        fontfamily: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-font2"></i></a>',
            selected: '.selected'
        },
        fontsize: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-text-height"></i></a>',
            selected: '.selected'
        },
        head: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-header"></i></a>',
            selected: '.selected'
        },
        orderlist: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-list-numbered"></i></a>',
            selected: '.selected'
        },
        unorderlist: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-list-bullet"></i></a>',
            selected: '.selected'
        },
        alignleft: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-align-left"></i></a>',
            selected: '.selected'
        },
        aligncenter: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-align-center"></i></a>',
            selected: '.selected'
        },
        alignright: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-align-right"></i></a>',
            selected: '.selected'
        },
        link: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-link"></i></a>',
            selected: '.selected'
        },
        unlink: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-unlink"></i></a>',
            selected: '.selected'
        },
        table: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-table"></i></a>',
            selected: '.selected'
        },
        emotion: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-happy"></i></a>',
            selected: '.selected'
        },
        img: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-picture"></i></a>',
            selected: '.selected'
        },
        video: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-play"></i></a>',
            selected: '.selected'
        },
        location: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-location"></i></a>',
            selected: '.selected'
        },
        insertcode: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-terminal"></i></a>',
            selected: '.selected'
        },
        undo: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-ccw"></i></a>',
            selected: '.selected'
        },
        redo: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-cw"></i></a>',
            selected: '.selected'
        },
        fullscreen: {
            normal: '<a href="#" tabindex="-1"><i class="wangeditor-menu-img-enlarge2"></i></a>',
            selected: '<a href="#" tabindex="-1" class="selected"><i class="wangeditor-menu-img-shrink2"></i></a>'
        }
     };
     
});
// 对象配置
_e(function (E, $) {

    E.fn.initDefaultConfig = function () {
        var editor = this;
        editor.config = $.extend({}, E.config);
        editor.UI = $.extend({}, E.UI);
    };

});
// 增加 container
_e(function (E, $) {

    E.fn.addEditorContainer = function () {
        this.$editorContainer = $('<div class="wangEditor-container"></div>');
    };

});
// 增加编辑区域对象
_e(function (E, $) {

    E.fn.addTxt = function () {
        var editor = this;
        var txt = new E.Txt(editor);

        editor.txt = txt;
    };

});
// 增加menuContainer对象
_e(function (E, $) {

    E.fn.addMenuContainer = function () {
        var editor = this;
        editor.menuContainer = new E.MenuContainer(editor);
    };

});
// 增加menus
_e(function (E, $) {

    // 存储创建菜单的函数
    E.createMenuFns = [];
    E.createMenu = function (fn) {
        E.createMenuFns.push(fn);
    };

    // 创建所有菜单
    E.fn.addMenus = function () {
        var editor = this;
        var menuIds = editor.config.menus;

        // 检验 menuId 是否在配置中存在
        function check(menuId) {
            if (menuIds.indexOf(menuId) >= 0) {
                return true;
            }
            return false;
        }

        // 遍历所有的菜单创建函数，并执行
        $.each(E.createMenuFns, function (k, createMenuFn) {
            createMenuFn.call(editor, check);
        });
    };

});
// bold菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'bold';
        if (!check(menuId)) {
            return;
        }

        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.bold,
            commandName: 'Bold'
        });

        // 定义选中状态下的click事件
        menu.clickEventSelected = function (e) {
            var isRangeEmpty = editor.isRangeEmpty();
            if (!isRangeEmpty) {
                // 如果选区有内容，则执行基础命令
                editor.command(e, 'Bold');
            } else {
                // 如果选区没有内容
                editor.commandForElem('b,strong,h1,h2,h3,h4,h5', e, 'Bold');
            }
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// underline菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'underline';
        if (!check(menuId)) {
            return;
        }

        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.underline,
            commandName: 'Underline'
        });

        // 定义选中状态下的click事件
        menu.clickEventSelected = function (e) {
            var isRangeEmpty = editor.isRangeEmpty();
            if (!isRangeEmpty) {
                // 如果选区有内容，则执行基础命令
                editor.command(e, 'Underline');
            } else {
                // 如果选区没有内容
                editor.commandForElem('u,a', e, 'Underline');
            }
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// italic 菜单
_e(function (E, $) {
    
    E.createMenu(function (check) {
        var menuId = 'italic';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.italic,
            commandName: 'Italic'
        });

        // 定义选中状态下的click事件
        menu.clickEventSelected = function (e) {
            var isRangeEmpty = editor.isRangeEmpty();
            if (!isRangeEmpty) {
                // 如果选区有内容，则执行基础命令
                editor.command(e, 'Italic');
            } else {
                // 如果选区没有内容
                editor.commandForElem('i', e, 'Italic');
            }
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// forecolor 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'forecolor';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;
        var configColors = editor.config.colors;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.forecolor
        });

        // 创建 dropPanel
        var $content = $('<div></div>');
        $.each(configColors, function (k, v) {
            $content.append(
                [
                    '<a href="#" class="color-item"',
                    '    title="' + v + '" commandValue="' + k + '" ',
                    '    style="color: ' + k + '" ',
                    '><i class="wangeditor-menu-img-pencil"></i></a>'
                ].join('')
            );
        });
        $content.on('click', 'a[commandValue]', function (e) {
            // 执行命令
            var $elem = $(this);
            var commandValue = $elem.attr('commandValue');

            if (menu.selected && editor.isRangeEmpty()) {
                // 当前处于选中状态，并且选中内容为空
                editor.commandForElem('font[color]', e, 'forecolor', commandValue);
            } else {
                // 当前未处于选中状态，或者有选中内容。则执行默认命令
                editor.command(e, 'forecolor', commandValue);
            }
        });
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $content,
            width: 125
        });

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'font[color]');
            if (rangeElem) {
                return true;
            }
            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// bgcolor 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'bgcolor';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;
        var configColors = editor.config.colors;

        // 检查元素是否有 background-color: 内联样式
        function checkElemFn(elem) {
            var cssText;
            if (elem && elem.style && elem.style.cssText != null) {
                cssText = elem.style.cssText;
                if (cssText && cssText.indexOf('background-color:') >= 0) {
                    return true;
                }
            }
            return false;
        }

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.bgcolor
        });

        // 创建 dropPanel
        var $content = $('<div></div>');
        $.each(configColors, function (k, v) {
            $content.append(
                [
                    '<a href="#" class="color-item"',
                    '    title="' + v + '" commandValue="' + k + '" ',
                    '    style="color: ' + k + '" ',
                    '><i class="wangeditor-menu-img-brush"></i></a>'
                ].join('')
            );
        });
        $content.on('click', 'a[commandValue]', function (e) {
            // 执行命令

            var $elem = $(this);
            var commandValue = $elem.attr('commandValue');

            if (menu.selected && editor.isRangeEmpty()) {
                // 当前处于选中状态，并且选中内容为空。使用 commandForElem 执行命令
                editor.commandForElem({
                    selector: 'span,font',
                    check: checkElemFn
                }, e, 'BackColor', commandValue);
            } else {
                // 当前未处于选中状态，或者有选中内容。则执行默认命令
                editor.command(e, 'BackColor', commandValue);
            }
        });
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $content,
            width: 125
        });

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'span,font', checkElemFn);
            
            if (rangeElem) {
                return true;
            }
            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// strikethrough 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'strikethrough';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.strikethrough,
            commandName: 'StrikeThrough'
        });

        // 定义选中状态下的click事件
        menu.clickEventSelected = function (e) {
            var isRangeEmpty = editor.isRangeEmpty();
            if (!isRangeEmpty) {
                // 如果选区有内容，则执行基础命令
                editor.command(e, 'StrikeThrough');
            } else {
                // 如果选区没有内容
                editor.commandForElem('strike', e, 'StrikeThrough');
            }
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// eraser 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'eraser';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.eraser,
            commandName: 'RemoveFormat'
        });

        // 定义点击事件
        menu.clickEvent = function (e) {
            var isRangeEmpty = editor.isRangeEmpty();

            if (!isRangeEmpty) {
                // 选区不是空的，则执行默认命令
                editor.command(e, 'RemoveFormat');
                return;
            }

            var $clearElem;

            // 自定义的命令函数
            function commandFn() {
                var editor = this;
                var rangeElem;
                var pElem, $pElem;
                var quoteElem, $quoteElem;
                var listElem, $listElem;

                // 获取选区 elem
                rangeElem = editor.getRangeElem();
                // 第一步，获取 quote 父元素
                quoteElem = editor.getSelfOrParentByName(rangeElem, 'blockquote');
                if (quoteElem) {
                    $quoteElem = $(quoteElem);
                    $clearElem = $('<p>' + $quoteElem.text() + '</p>');
                    $quoteElem.after($clearElem).remove();
                }
                // 第二步，获取 p h 父元素
                pElem = editor.getSelfOrParentByName(rangeElem, 'p,h1,h2,h3,h4,h5');
                if (pElem) {
                    $pElem = $(pElem);
                    $clearElem = $('<p>' + $pElem.text() + '</p>');
                    $pElem.after($clearElem).remove();
                }
                // 第三步，获取list
                listElem = editor.getSelfOrParentByName(rangeElem, 'ul,ol');
                if (listElem) {
                    $listElem = $(listElem);
                    $clearElem = $('<p>' + $listElem.text() + '</p>');
                    $listElem.after($clearElem).remove();
                }
            }

            // 自定义 callback 事件
            function callback() {
                // callback中，设置range为clearElem
                var editor = this;
                if ($clearElem) {
                    editor.restoreSelectionByElem($clearElem.get(0));
                }
            }

            // 执行自定义命令
            editor.customCommand(e, commandFn, callback);
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// source 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'source';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;
        var txtHtml;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.source
        });

        menu.isShowCode = false;

        // 更新内容
        function updateValue() {
            var $code = menu.$codeTextarea;
            var $txt = editor.txt.$txt;
            var value = $.trim($code.val()); // 取值

            if (!value) {
                value = '<p><br></p>';
            }
            
            // 过滤js代码
            if (editor.config.jsFilter) {
                
                value = value.replace(/<script[\s\S]*?<\/script>/ig, '');
            }
            // 赋值
            try {
                $txt.html(value);
            } catch (ex) {
                // 更新 html 源码出错，一般都是取消了 js 过滤之后，js报错导致的
            }
        }

        // 定义click事件
        menu.clickEvent = function (e) {
            var self = this;
            var editor = self.editor;
            var $txt = editor.txt.$txt;
            var txtOuterHeight = $txt.outerHeight();
            var txtHeight = $txt.height();

            if (!self.$codeTextarea) {
                self.$codeTextarea = $('<textarea class="code-textarea"></textarea>');
            }
            var $code = self.$codeTextarea;
            $code.css({
                height: txtHeight,
                'margin-top': txtOuterHeight - txtHeight
            });

            // 赋值
            $code.val($txt.html());

            // 监控变化
            $code.on('change', function (e) {
                updateValue();
            });

            // 渲染
            $txt.after($code).hide();
            $code.show();

            // 更新状态
            menu.isShowCode = true;

            // 执行 updateSelected 事件
            this.updateSelected();

            // 禁用其他菜单
            editor.disableMenusExcept('source');

            // 记录当前html值
            txtHtml = $txt.html();
        };

        // 定义选中状态下的click事件
        menu.clickEventSelected = function (e) {
            var self = this;
            var editor = self.editor;
            var $txt = editor.txt.$txt;
            var $code = self.$codeTextarea;
            var value;

            if (!$code) {
                return;
            }

            // 更新内容
            updateValue();

            // 渲染
            $code.after($txt).hide();
            $txt.show();

            // 更新状态
            menu.isShowCode = false;

            // 执行 updateSelected 事件
            this.updateSelected();

            // 启用其他菜单
            editor.enableMenusExcept('source');

            // 判断是否执行 onchange 事件
            if ($txt.html() !== txtHtml) {
                if (editor.onchange && typeof editor.onchange === 'function') {
                    editor.onchange.call(editor);
                }
            }
        };

        // 定义切换选中状态事件
        menu.updateSelectedEvent = function () {
            return this.isShowCode;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// quote 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'quote';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.quote,
            commandName: 'formatBlock',
            commandValue: 'blockquote'
        });

        // 定义click事件
        menu.clickEvent = function (e) {
            var rangeElem = editor.getRangeElem();
            var $rangeElem;
            if (!rangeElem) {
                e.preventDefault();
                return;
            }
            var currentQuote = editor.getSelfOrParentByName(rangeElem, 'blockquote');
            var $quote;

            if (currentQuote) {
                // 说明当前在quote之内，不做任何处理
                e.preventDefault();
                return;
            }

            rangeElem = editor.getLegalTags(rangeElem);
            $rangeElem = $(rangeElem);

            // 无文字，则不允许执行引用
            if (!$rangeElem.text()) {
                return;
            }


            if (!rangeElem) {
                // 执行默认命令
                // IE8 下执行此处（不过，经测试代码无效，也不报错）
                editor.command(e, 'formatBlock', 'blockquote');
                return;
            }

            // 自定义command事件
            function commandFn() {
                $quote = $('<p>' + $rangeElem.text() + '</p>');
                $rangeElem.after($quote).remove();
                $quote.wrap('<blockquote>');
            }

            // 自定义 callback 事件
            function callback() {
                // callback中，设置range为quote
                var editor = this;
                if ($quote) {
                    editor.restoreSelectionByElem($quote.get(0));
                }
            }

            // 执行自定义命令
            editor.customCommand(e, commandFn, callback);
        };

        // 定义选中状态下的click事件
        menu.clickEventSelected = function (e) {
            var rangeElem;
            var quoteElem;
            var $lastChild;

            // 获取当前选区的elem，并试图往上找 quote 元素
            rangeElem = editor.getRangeElem();
            quoteElem = editor.getSelfOrParentByName(rangeElem, 'blockquote');
            if (!quoteElem) {
                // 没找到，则返回
                e.preventDefault();
                return;
            }

            // 自定义的command事件
            function commandFn() {
                var $quoteElem;
                var $children;

                $quoteElem = $(quoteElem);
                $children = $quoteElem.children();
                if ($children.length) {
                    $children.each(function (k) {
                        var $item = $(this);
                        if ($item.get(0).nodeName === 'P') {
                            $quoteElem.after($item);
                        } else {
                            $quoteElem.after('<p>' + $item.text() + '</p>');
                        }
                        $lastChild = $item;  // 记录最后一个子元素，用于callback中的range定位
                    });
                    $quoteElem.remove();
                    return;
                }
            }

            // 自定义的callback函数
            function callback() {
                // callback中，设置range为lastChild
                var editor = this;
                if ($lastChild) {
                    editor.restoreSelectionByElem($lastChild.get(0));
                }
            }

            // 执行自定义命令
            editor.customCommand(e, commandFn, callback);
        };

        // 定义更新选中状态的事件
        menu.updateSelectedEvent = function () {
            var self = this; //菜单对象
            var editor = self.editor;
            var rangeElem;

            rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'blockquote');

            if (rangeElem) {
                return true;
            }

            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;

        // --------------- 两次点击 enter 跳出引用 ---------------
        editor.ready(function () {
            var editor = this;
            var $txt = editor.txt.$txt;
            var isPrevEnter = false;  // 是不是刚刚在quote中按了 enter 键
            $txt.on('keydown', function (e) {
                if (e.keyCode !== 13) {
                    // 不是 enter 键
                    isPrevEnter = false;
                    return;
                }

                var rangeElem = editor.getRangeElem();
                rangeElem = editor.getSelfOrParentByName(rangeElem, 'blockquote');
                if (!rangeElem) {
                    // 选区不是 quote
                    isPrevEnter = false;
                    return;
                }

                if (!isPrevEnter) {
                    // 最近没有在qote中按enter键
                    isPrevEnter = true;
                    return;
                }

                var currentRangeElem = editor.getRangeElem();
                var $currentRangeElem = $(currentRangeElem);
                if ($currentRangeElem.length) {
                    $currentRangeElem.parent().after($currentRangeElem);
                }

                // 设置选区
                editor.restoreSelectionByElem(currentRangeElem, 'start');

                isPrevEnter = false;
                // 阻止默认行文
                e.preventDefault();

            });
        }); // editor.ready(

        // --------------- 处理quote中无内容时不能删除的问题 ---------------
        editor.ready(function () {
            var editor = this;
            var $txt = editor.txt.$txt;
            var $rangeElem;

            function commandFn() {
                $rangeElem && $rangeElem.remove();
            }
            function callback() {
                if (!$rangeElem) {
                    return;
                }
                var $prev = $rangeElem.prev();
                if ($prev.length) {
                    // 有 prev 则定位到 prev 最后
                    editor.restoreSelectionByElem($prev.get(0));
                } else {
                    // 无 prev 则初始化选区
                    editor.initSelection();
                }
            }

            $txt.on('keydown', function (e) {
                if (e.keyCode !== 8) {
                    // 不是 backspace 键
                    return;
                }

                var rangeElem = editor.getRangeElem();
                rangeElem = editor.getSelfOrParentByName(rangeElem, 'blockquote');
                if (!rangeElem) {
                    // 选区不是 quote
                    return;
                }
                $rangeElem = $(rangeElem);

                var text = $rangeElem.text();
                if (text) {
                    // quote 中还有内容
                    return;
                }
                editor.customCommand(e, commandFn, callback);

            }); // $txt.on
        }); // editor.ready(
    });

});
// 字体 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'fontfamily';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;
        var configFamilys = editor.config.familys;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.fontfamily,
            commandName: 'fontName'
        });

        // 初始化数据
        var data  = {};
        /*
            data 需要的结构
            {
                'commandValue': 'title'
                ...
            }
        */
        $.each(configFamilys, function (k, v) {
            // configFamilys 是数组，data 是对象
            data[v] = v;
        });

        // 创建droplist
        var tpl = '<span style="font-family:{#commandValue};">{#title}</span>';
        menu.dropList = new E.DropList(editor, menu, {
            data: data,
            tpl: tpl,
            selectorForELemCommand: 'font[face]'  // 为了执行 editor.commandForElem 而传入的elem查询方式
        });

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'font[face]');
            if (rangeElem) {
                return true;
            }
            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });
});
// 字号 菜单
_e(function (E, $) {
    E.createMenu(function (check) {
        var menuId = 'fontsize';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;
        var configSize = editor.config.fontsizes;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.fontsize,
            commandName: 'fontSize'
        });

        // 初始化数据
        var data  = configSize;
        /*
            data 需要的结构
            {
                'commandValue': 'title'
                ...
            }
        */

        // 创建droplist
        var tpl = '<span style="font-size:{#title};">{#title}</span>';
        menu.dropList = new E.DropList(editor, menu, {
            data: data,
            tpl: tpl,
            selectorForELemCommand: 'font[size]'  // 为了执行 editor.commandForElem 而传入的elem查询方式
        });

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'font[size]');
            if (rangeElem) {
                return true;
            }
            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });
});
// head 菜单
_e(function (E, $) {
    E.createMenu(function (check) {
        var menuId = 'head';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.head,
            commandName: 'formatBlock'
        });

        // 初始化数据
        var data  = {
            '<h1>': '标题1',
            '<h2>': '标题2',
            '<h3>': '标题3',
            '<h4>': '标题4',
            '<h5>': '标题5'
        };
        /*
            data 需要的结构
            {
                'commandValue': 'title'
                ...
            }
        */

        var isOrderedList;
        function beforeEvent(e) {
            if (editor.queryCommandState('InsertOrderedList')) {
                isOrderedList = true;

                // 先取消有序列表
                editor.command(e, 'InsertOrderedList');
            } else {
                isOrderedList = false;
            }
        }

        function afterEvent(e) {
            if (isOrderedList) {
                // 再设置有序列表
                editor.command(e, 'InsertOrderedList');
            }
        }

        // 创建droplist
        var tpl = '{#commandValue}{#title}';
        menu.dropList = new E.DropList(editor, menu, {
            data: data,
            tpl: tpl,
            // 对 ol 直接设置 head，会出现每个 li 的 index 都变成 1 的问题，因此要先取消 ol，然后设置 head，最后再增加上 ol
            beforeEvent: beforeEvent,
            afterEvent: afterEvent
        });

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'h1,h2,h3,h4,h5');
            if (rangeElem) {
                return true;
            }
            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });
});
// unorderlist 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'unorderlist';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.unorderlist,
            commandName: 'InsertUnorderedList'
        });

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// orderlist 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'orderlist';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.orderlist,
            commandName: 'InsertOrderedList'
        });

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// alignleft 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'alignleft';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.alignleft,
            commandName: 'JustifyLeft'
        });

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'p,h1,h2,h3,h4,h5,li', function (elem) {
                var cssText;
                if (elem && elem.style && elem.style.cssText != null) {
                    cssText = elem.style.cssText;
                    if (cssText && /text-align:\s*left;/.test(cssText)) {
                        return true;
                    }
                }
                if ($(elem).attr('align') === 'left') {
                    // ff 中，设置align-left之后，会是 <p align="left">xxx</p>
                    return true;
                }
                return false;
            });
            if (rangeElem) {
                return true;
            }
            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// aligncenter 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'aligncenter';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.aligncenter,
            commandName: 'JustifyCenter'
        });

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'p,h1,h2,h3,h4,h5,li', function (elem) {
                var cssText;
                if (elem && elem.style && elem.style.cssText != null) {
                    cssText = elem.style.cssText;
                    if (cssText && /text-align:\s*center;/.test(cssText)) {
                        return true;
                    }
                }
                if ($(elem).attr('align') === 'center') {
                    // ff 中，设置align-center之后，会是 <p align="center">xxx</p>
                    return true;
                }
                return false;
            });
            if (rangeElem) {
                return true;
            }
            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// alignright 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'alignright';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.alignright,
            commandName: 'JustifyRight'
        });

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'p,h1,h2,h3,h4,h5,li', function (elem) {
                var cssText;
                if (elem && elem.style && elem.style.cssText != null) {
                    cssText = elem.style.cssText;
                    if (cssText && /text-align:\s*right;/.test(cssText)) {
                        return true;
                    }
                }
                if ($(elem).attr('align') === 'right') {
                    // ff 中，设置align-right之后，会是 <p align="right">xxx</p>
                    return true;
                }
                return false;
            });
            if (rangeElem) {
                return true;
            }
            return false;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// link 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'link';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.link
        });

        // 创建 dropPanel
        var $content = $('<div></div>');
        var $div1 = $('<div style="margin:20px 10px;" class="clearfix"></div>');
        var $div2 = $div1.clone();
        var $div3 = $div1.clone().css('margin', '0 10px');
        var $textInput = $('<input type="text" class="block" placeholder="' + lang.text + '"/>');
        var $urlInput = $('<input type="text" class="block" placeholder="' + lang.link + '"/>');
        var $btnSubmit = $('<button class="right">' + lang.submit + '</button>');
        var $btnCancel = $('<button class="right gray">' + lang.cancel + '</button>');

        $div1.append($textInput);
        $div2.append($urlInput);
        $div3.append($btnSubmit).append($btnCancel);
        $content.append($div1).append($div2).append($div3);
        
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $content,
            width: 300
        });

        // 定义click事件
        menu.clickEvent = function (e) {
            var menu = this;
            var dropPanel = menu.dropPanel;

            // -------------隐藏----------------
            if (dropPanel.isShowing) {
                dropPanel.hide();
                return;
            }

            // -------------显示----------------

            // 重置 input
            $textInput.val('');
            $urlInput.val('http://');

            // 获取url
            var url = '';
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'a');
            if (rangeElem) {
                url = rangeElem.href || '';
            }

            // 获取 text
            var text = '';
            var isRangeEmpty = editor.isRangeEmpty();
            if (!isRangeEmpty) {
                // 选区不是空
                text = editor.getRangeText() || '';
            } else if (rangeElem) {
                // 如果选区空，并且在 a 标签之内
                text = rangeElem.textContent || rangeElem.innerHTML;
            }

            // 设置 url 和 text
            url && $urlInput.val(url);
            text && $textInput.val(text);

            // 如果有选区内容，textinput 不能修改
            if (!isRangeEmpty) {
                $textInput.attr('disabled', true);
            } else {
                $textInput.removeAttr('disabled');
            }

            // 显示（要设置好了所有input的值和属性之后再显示）
            dropPanel.show();
        };

        // 定义 update selected 事件
        menu.updateSelectedEvent = function () {
            var rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'a');
            if (rangeElem) {
                return true;
            }
            return false;
        };

        // 『取消』 按钮
        $btnCancel.click(function (e) {
            e.preventDefault();
            menu.dropPanel.hide();
        });

        // 『确定』按钮
        $btnSubmit.click(function (e) {
            e.preventDefault();
            var rangeElem = editor.getRangeElem();
            var targetElem = editor.getSelfOrParentByName(rangeElem, 'a');
            var isRangeEmpty = editor.isRangeEmpty();

            var $linkElem, linkHtml;
            var commandFn, callback;
            var $txt = editor.txt.$txt;
            var $oldLinks, $newLinks;
            var uniqId = 'link' + E.random();

            // 获取数据
            var url = $.trim($urlInput.val());
            var text = $.trim($textInput.val());

            if (!url) {
                menu.dropPanel.focusFirstInput();
                return;
            }
            if (!text) {
                text = url;
            }

            if (!isRangeEmpty) {
                // 选中区域有内容，则执行默认命令

                // 获取目前 txt 内所有链接，并为当前链接做一个标记
                $oldLinks = $txt.find('a');
                $oldLinks.attr(uniqId, '1');

                // 执行命令 
                editor.command(e, 'createLink', url);

                // 去的没有标记的链接，即刚刚插入的链接
                $newLinks = $txt.find('a').not('[' + uniqId + ']');
                $newLinks.attr('target', '_blank'); // 增加 _blank

                // 去掉之前做的标记
                $oldLinks.removeAttr(uniqId);

            } else if (targetElem) {
                // 无选中区域，在 a 标签之内，修改该 a 标签的内容和链接
                $linkElem = $(targetElem);
                commandFn = function () {
                    $linkElem.attr('href', url);
                    $linkElem.text(text);
                };
                callback = function () {
                    var editor = this;
                    editor.restoreSelectionByElem(targetElem);
                };
                // 执行命令
                editor.customCommand(e, commandFn, callback);
            } else {
                // 无选中区域，不在 a 标签之内，插入新的链接

                linkHtml = '<a href="' + url + '" target="_blank">' + text + '</a>';
                if (E.userAgent.indexOf('Firefox') > 0) {
                    linkHtml += '<span>&nbsp;</span>';
                }
                editor.command(e, 'insertHtml', linkHtml);
            }

        });
        
        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// unlink 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'unlink';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.unlink,
            commandName: 'unLink'
        });

        // click 事件
        menu.clickEvent = function  (e) {
            var isRangeEmpty = editor.isRangeEmpty();
            if (!isRangeEmpty) {
                // 有选中区域，或者IE8，执行默认命令
                editor.command(e, 'unLink');
                return;
            }

            // 无选中区域...

            var rangeElem = editor.getRangeElem();
            var aElem = editor.getSelfOrParentByName(rangeElem, 'a');
            if (!aElem) {
                // 不在 a 之内，返回
                e.preventDefault();
                return;
            }

            // 在 a 之内
            var $a = $(aElem);
            var $span = $('<span>' + $a.text() + '</span>');
            function commandFn() {
                $a.after($span).remove();
            }
            function callback() {
                editor.restoreSelectionByElem($span.get(0));
            }
            editor.customCommand(e, commandFn, callback);
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// table 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'table';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.table
        });

        // dropPanel 内容
        var $content = $('<div style="font-size: 14px; color: #666; text-align:right;"></div>');
        var $table = $('<table class="choose-table" style="margin-bottom:10px;margin-top:5px;">');
        var $row = $('<span>0</span>');
        var $rowspan = $('<span> 行 </span>');
        var $col = $('<span>0</span>');
        var $colspan = $('<span> 列</span>');
        var $tr;
        var i, j;

        // 创建一个n行n列的表格
        for (i = 0; i < 15; i++) {
            $tr = $('<tr index="' + (i + 1) + '">');
            for (j = 0; j < 20; j++) {
                $tr.append($('<td index="' + (j + 1) + '">'));
            }
            $table.append($tr);
        }
        $content.append($table);
        $content.append($row).append($rowspan).append($col).append($colspan);

        // 定义table事件
        $table.on('mouseenter', 'td', function (e) {
            var $currentTd = $(e.currentTarget);
            var currentTdIndex = $currentTd.attr('index');
            var $currentTr = $currentTd.parent();
            var currentTrIndex = $currentTr.attr('index');

            // 显示
            $row.text(currentTrIndex);
            $col.text(currentTdIndex);

            // 遍历设置背景颜色
            $table.find('tr').each(function () {
                var $tr = $(this);
                var trIndex = $tr.attr('index');
                if (parseInt(trIndex, 10) <= parseInt(currentTrIndex, 10)) {
                    // 该行需要可能需要设置背景色
                    $tr.find('td').each(function () {
                        var $td = $(this);
                        var tdIndex = $td.attr('index');
                        if (parseInt(tdIndex, 10) <= parseInt(currentTdIndex, 10)) {
                            // 需要设置背景色
                            $td.addClass('active');
                        } else {
                            // 需要移除背景色
                            $td.removeClass('active');
                        }
                    });
                } else {
                    // 改行不需要设置背景色
                    $tr.find('td').removeClass('active');
                }
            });
        }).on('mouseleave', function (e) {
            // mouseleave 删除背景色
            $table.find('td').removeClass('active');

            $row.text(0);
            $col.text(0);
        });

        // 插入表格
        $table.on('click', 'td', function (e) {
            var $currentTd = $(e.currentTarget);
            var currentTdIndex = $currentTd.attr('index');
            var $currentTr = $currentTd.parent();
            var currentTrIndex = $currentTr.attr('index');

            var rownum = parseInt(currentTrIndex, 10);
            var colnum = parseInt(currentTdIndex, 10);

            // -------- 拼接tabel html --------

            var i, j;
            var tableHtml = '<table>';
            for (i = 0; i < rownum; i++) {
                tableHtml += '<tr>';

                for (j = 0; j < colnum; j++) {
                    tableHtml += '<td><span>&nbsp;</span></td>';
                }
                tableHtml += '</tr>';
            }
            tableHtml += '</table>';

            // -------- 执行命令 --------
            editor.command(e, 'insertHtml', tableHtml);
        });

        // 创建 panel
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $content,
            width: 262
        });

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// emotion 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'emotion';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var config = editor.config;
        var lang = config.lang;
        var configEmotions = config.emotions;
        var emotionsShow = config.emotionsShow;

        // 记录每一个表情图片的地址
        editor.emotionUrls = [];

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.emotion
        });

        // 添加表情图片的函数
        function insertEmotionImgs(data, $tabContent) {
            // 添加表情图片
            $.each(data, function (k, emotion) {
                var src = emotion.icon || emotion.url;
                var value = emotion.value || emotion.title;
                // 通过配置 editor.config.emotionsShow 的值来修改插入到编辑器的内容（图片/value）
                var commandValue = emotionsShow === 'icon' ? src : value;
                var $command = $('<a href="#" commandValue="' + commandValue + '"></a>');
                var $img = $('<img>');
                $img.attr('_src', src);  // 先将 src 复制到 '_src' 属性，先不加载

                $command.append($img);
                $tabContent.append($command);

                // 记录下每一个表情图片的地址
                editor.emotionUrls.push(src);
            });
        }

        // 拼接 dropPanel 内容
        var $panelContent = $('<div class="panel-tab"></div>');
        var $tabContainer = $('<div class="tab-container"></div>');
        var $contentContainer = $('<div class="content-container emotion-content-container"></div>');
        $.each(configEmotions, function (k, emotion) {
            var title = emotion.title;
            var data = emotion.data;

            E.log('正在处理 ' + title + ' 表情的数据...');

            // 增加该组表情的tab和content
            var $tab = $('<a href="#">' + title +' </a>');
            $tabContainer.append($tab);
            var $tabContent = $('<div class="content"></div>');
            $contentContainer.append($tabContent);

            // tab 切换事件
            $tab.click(function (e) {
                $tabContainer.children().removeClass('selected');
                $contentContainer.children().removeClass('selected');
                $tabContent.addClass('selected');
                $tab.addClass('selected');
                e.preventDefault();
            });

            // 处理data
            if (typeof data === 'string') {
                // url 形式，需要通过ajax从该url获取数据
                E.log('将通过 ' + data + ' 地址ajax下载表情包');
                $.get(data, function (result) {
                    result = $.parseJSON(result);
                    E.log('下载完毕，得到 ' + result.length + ' 个表情');
                    insertEmotionImgs(result, $tabContent);
                });
                
            } else if ( Object.prototype.toString.call(data).toLowerCase().indexOf('array') > 0 ) {
                // 数组，即 data 直接就是表情包数据
                insertEmotionImgs(data, $tabContent);
            } else {
                // 其他情况，data格式不对
                E.error('data 数据格式错误，请修改为正确格式，参考文档：' + E.docsite);
                return;
            }
        });
        $panelContent.append($tabContainer).append($contentContainer);

        // 默认显示第一个tab
        $tabContainer.children().first().addClass('selected');
        $contentContainer.children().first().addClass('selected');

        // 插入表情command事件
        $contentContainer.on('click', 'a[commandValue]', function (e) {
            var $a = $(e.currentTarget);
            var commandValue = $a.attr('commandValue');
            var img;

            // commandValue 有可能是图片url，也有可能是表情的 value，需要区别对待

            if (emotionsShow === 'icon') {
                // 插入图片
                editor.command(e, 'InsertImage', commandValue);
            } else {
                // 插入value
                editor.command(e, 'insertHtml', '<span>' + commandValue + '</span>');
            }

            e.preventDefault();
        });

        // 添加panel
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $panelContent,
            width: 350
        });

        // 定义click事件（异步加载表情图片）
        menu.clickEvent = function (e) {
            var menu = this;
            var dropPanel = menu.dropPanel;

            // -------------隐藏-------------
            if (dropPanel.isShowing) {
                dropPanel.hide();
                return;
            }

            // -------------显示-------------
            dropPanel.show();

            // 异步加载图片
            if (menu.imgLoaded) {
                return;
            }
            $contentContainer.find('img').each(function () {
                var $img = $(this);
                var _src = $img.attr('_src');
                $img.on('error', function () {
                    E.error('加载不出表情图片 ' + _src);
                });
                $img.attr('src', _src);
                $img.removeAttr('_src');
            });
            menu.imgLoaded = true;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// img 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'img';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.img
        });

        // 创建 panel content
        var $panelContent = $('<div class="panel-tab"></div>');
        var $tabContainer = $('<div class="tab-container"></div>');
        var $contentContainer = $('<div class="content-container"></div>');
        $panelContent.append($tabContainer).append($contentContainer);

        // tab
        var $uploadTab = $('<a href="#">' + lang.uploadImg + '</a>');
        var $linkTab = $('<a href="#">' + lang.linkImg + '</a>');
        $tabContainer.append($uploadTab).append($linkTab);

        // 上传图片 content
        var $uploadContent = $('<div class="content"></div>');
        $contentContainer.append($uploadContent);

        // 网络图片 content
        var $linkContent = $('<div class="content"></div>');
        $contentContainer.append($linkContent);
        linkContentHandler(editor, menu, $linkContent);

        // 添加panel
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $panelContent,
            width: 400,
            onRender: function () {
                // 渲染后的回调事件，用于执行自定义上传的init
                // 因为渲染之后，上传面板的dom才会被渲染到页面，才能让第三方空间获取到
                var init = editor.config.customUploadInit;
                init && init.call(editor);
            }
        });

        // 增加到editor对象中
        editor.menus[menuId] = menu;

        // tab 切换事件
        function tabToggle() {
            $uploadTab.click(function (e) {
                $tabContainer.children().removeClass('selected');
                $contentContainer.children().removeClass('selected');
                $uploadContent.addClass('selected');
                $uploadTab.addClass('selected');
                e.preventDefault();
            });
            $linkTab.click(function (e) {
                $tabContainer.children().removeClass('selected');
                $contentContainer.children().removeClass('selected');
                $linkContent.addClass('selected');
                $linkTab.addClass('selected');
                e.preventDefault();

                // focus input
                if (E.placeholder) {
                    $linkContent.find('input[type=text]').focus();
                }
            });

            // 默认情况
            // $uploadTab.addClass('selected');
            // $uploadContent.addClass('selected');
            $uploadTab.click();
        }

        // 隐藏上传图片
        function hideUploadImg() {
            $tabContainer.remove();
            $uploadContent.remove();
            $linkContent.addClass('selected');
        }

        // 隐藏网络图片
        function hideLinkImg() {
            $tabContainer.remove();
            $linkContent.remove();
            $uploadContent.addClass('selected');
        }

        // 判断用户是否配置了上传图片
        editor.ready(function () {
            var editor = this;
            var config = editor.config;
            var uploadImgUrl = config.uploadImgUrl;
            var customUpload = config.customUpload;
            var linkImg = config.hideLinkImg;
            var $uploadImgPanel;

            if (uploadImgUrl || customUpload) {
                // 第一，暴露出 $uploadContent 以便用户自定义 ！！！重要
                editor.$uploadContent = $uploadContent;

                // 第二，绑定tab切换事件
                tabToggle();

                if (linkImg) {
                    // 隐藏网络图片
                    hideLinkImg();
                }
            } else {
                // 未配置上传图片功能
                hideUploadImg();
            }

            // 点击 $uploadContent 立即隐藏 dropPanel
            // 为了兼容IE8、9的上传，因为IE8、9使用 modal 上传
            // 这里使用异步，为了不妨碍高级浏览器通过点击 $uploadContent 选择文件
            function hidePanel() {
                menu.dropPanel.hide();
            }
            $uploadContent.click(function () {
                setTimeout(hidePanel);
            });
        });
    });

    // --------------- 处理网络图片content ---------------
    function linkContentHandler (editor, menu, $linkContent) {
        var lang = editor.config.lang;
        var $urlContainer = $('<div style="margin:20px 10px 10px 10px;"></div>');
        var $urlInput = $('<input type="text" class="block" placeholder="http://"/>');
        $urlContainer.append($urlInput);
        var $btnSubmit = $('<button class="right">' + lang.submit + '</button>');
        var $btnCancel = $('<button class="right gray">' + lang.cancel + '</button>');

        $linkContent.append($urlContainer).append($btnSubmit).append($btnCancel);

        // 取消
        $btnCancel.click(function (e) {
            e.preventDefault();
            menu.dropPanel.hide();
        });

        // callback 
        function callback() {
            $urlInput.val('');
        }

        // 确定
        $btnSubmit.click(function (e) {
            e.preventDefault();
            var url = $.trim($urlInput.val());
            if (!url) {
                // 无内容
                $urlInput.focus();
                return;
            }

            var imgHtml = '<img style="max-width:100%;" src="' + url + '"/>';
            editor.command(e, 'insertHtml', imgHtml, callback);
        });
    }

});
// video 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'video';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;
        var reg = /^<(iframe)|(embed)/i;  // <iframe... 或者 <embed... 格式

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.video
        });

        // 创建 panel 内容
        var $content = $('<div></div>');
        var $linkInputContainer = $('<div style="margin:20px 10px;"></div>');
        var $linkInput = $('<input type="text" class="block" placeholder=\'格式如：<iframe src="..." frameborder=0 allowfullscreen></iframe>\'/>');
        $linkInputContainer.append($linkInput);
        var $sizeContainer = $('<div style="margin:20px 10px;"></div>');
        var $widthInput = $('<input type="text" value="640" style="width:50px;text-align:center;"/>');
        var $heightInput = $('<input type="text" value="498" style="width:50px;text-align:center;"/>');
        $sizeContainer.append('<span> ' + lang.width + ' </span>')
                      .append($widthInput)
                      .append('<span> px &nbsp;&nbsp;&nbsp;</span>')
                      .append('<span> ' + lang.height + ' </span>')
                      .append($heightInput)
                      .append('<span> px </span>');
        var $btnContainer = $('<div></div>');
        var $howToCopy = $('<a href="http://www.kancloud.cn/wangfupeng/wangeditor2/134973" target="_blank" style="display:inline-block;margin-top:10px;margin-left:10px;color:#999;">如何复制视频链接？</a>');
        var $btnSubmit = $('<button class="right">' + lang.submit + '</button>');
        var $btnCancel = $('<button class="right gray">' + lang.cancel + '</button>');
        $btnContainer.append($howToCopy).append($btnSubmit).append($btnCancel);
        $content.append($linkInputContainer).append($sizeContainer).append($btnContainer);

        // 取消按钮
        $btnCancel.click(function (e) {
            e.preventDefault();
            $linkInput.val('');
            menu.dropPanel.hide();
        });

        // 确定按钮
        $btnSubmit.click(function (e) {
            e.preventDefault();
            var link = $.trim($linkInput.val());
            var $link;
            var width = parseInt($widthInput.val());
            var height = parseInt($heightInput.val());
            var $div = $('<div>');
            var html = '<p>{content}</p>';

            // 验证数据
            if (!link) {
                menu.dropPanel.focusFirstInput();
                return;
            }

            if (!reg.test(link)) {
                alert('视频链接格式错误！');
                menu.dropPanel.focusFirstInput();
                return;
            }

            if (isNaN(width) || isNaN(height)) {
                alert('宽度或高度不是数字！');
                return;
            }

            $link = $(link);

            // 设置高度和宽度
            $link.attr('width', width)
                 .attr('height', height);

            // 拼接字符串
            html = html.replace('{content}', $div.append($link).html());

            // 执行命令
            editor.command(e, 'insertHtml', html);
            $linkInput.val('');
        });

        // 创建panel
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $content,
            width: 400
        });

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// location 菜单
_e(function (E, $) {

    // 判断浏览器的 input 是否支持 keyup
    var inputKeyup = (function (input) {
        return 'onkeyup' in input;
    })(document.createElement('input'));

    // 百度地图的key
    E.baiduMapAk = 'TVhjYjq1ICT2qqL5LdS8mwas';

    // 一个页面中，如果有多个编辑器，地图会出现问题。这个参数记录一下，如果超过 1 就提示
    E.numberOfLocation = 0;

    E.createMenu(function (check) {
        var menuId = 'location';
        if (!check(menuId)) {
            return;
        }

        if (++E.numberOfLocation > 1) {
            E.error('目前不支持在一个页面多个编辑器上同时使用地图，可通过自定义菜单配置去掉地图菜单');
            return;
        }

        var editor = this;
        var config = editor.config;
        var lang = config.lang;
        var ak = config.mapAk;

        // 地图的变量存储到这个地方
        editor.mapData = {};
        var mapData = editor.mapData;

        // ---------- 地图事件 ----------
        mapData.markers = [];
        mapData.mapContainerId = 'map' + E.random();

        mapData.clearLocations = function () {
            var map = mapData.map;
            if (!map) {
                return;
            }
            map.clearOverlays();

            //同时，清空marker数组
            mapData.markers = [];
        };

        mapData.searchMap = function () {
            var map = mapData.map;
            if (!map) {
                return;
            }

            var BMap = window.BMap;
            var cityName = $cityInput.val();
            var locationName = $searchInput.val();
            var myGeo, marker;

            if(cityName !== ''){
                if(!locationName || locationName === ''){
                    map.centerAndZoom(cityName, 11);
                }

                //地址解析
                if(locationName && locationName !== ''){
                    myGeo = new BMap.Geocoder();
                    // 将地址解析结果显示在地图上,并调整地图视野
                    myGeo.getPoint(locationName, function(point){
                        if (point) {
                            map.centerAndZoom(point, 13);
                            marker = new BMap.Marker(point);
                            map.addOverlay(marker);
                            marker.enableDragging();  //允许拖拽
                            mapData.markers.push(marker);  //将marker加入到数组中
                        }else{
                            // alert('未找到');
                            map.centerAndZoom(cityName, 11);  //找不到则重新定位到城市
                        }
                    }, cityName);
                }
            } // if(cityName !== '')
        };

        // load script 之后的 callback
        var hasCallback = false;
        window.baiduMapCallBack = function(){
            // 避免重复加载
            if (hasCallback) {
                return;
            } else {
                hasCallback = true;
            }

            var BMap = window.BMap;
            if (!mapData.map) {
                // 创建Map实例
                mapData.map = new BMap.Map(mapData.mapContainerId);
            }
            var map = mapData.map;

            map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
            map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
            map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

            //根据IP定位
            function locationFun(result){
                var cityName = result.name;
                map.setCenter(cityName);

                // 设置城市名称
                $cityInput.val(cityName);
                if (E.placeholder) {
                    $searchInput.focus();
                }
                var timeoutId, searchFn;
                if (inputKeyup) {
                   // 并绑定搜索事件 - input 支持 keyup
                   searchFn = function (e) {
                       if (e.type === 'keyup' && e.keyCode === 13) {
                           e.preventDefault();
                       }
                       if (timeoutId) {
                           clearTimeout(timeoutId);
                       }
                       timeoutId = setTimeout(mapData.searchMap, 500);
                   };
                   $cityInput.on('keyup change paste', searchFn);
                   $searchInput.on('keyup change paste', searchFn); 
                } else {
                    // 并绑定搜索事件 - input 不支持 keyup
                    searchFn = function () {
                        if (!$content.is(':visible')) {
                            // panel 不显示了，就不用再监控了
                            clearTimeout(timeoutId);
                            return;
                        }

                        var currentCity = '';
                        var currentSearch = '';
                        var city = $cityInput.val();
                        var search = $searchInput.val();

                        if (city !== currentCity || search !== currentSearch) {
                            // 刚获取的数据和之前的数据不一致，执行查询
                            mapData.searchMap();
                            // 更新数据
                            currentCity = city;
                            currentSearch = search;
                        }

                        // 继续监控
                        if (timeoutId) {
                            clearTimeout(timeoutId);
                        }
                        timeoutId = setTimeout(searchFn, 1000);
                    };
                    // 开始监控
                    timeoutId = setTimeout(searchFn, 1000);
                }
            }
            var myCity = new BMap.LocalCity();
            myCity.get(locationFun);

            //鼠标点击，创建位置
            map.addEventListener("click", function(e){
                var marker = new BMap.Marker(new BMap.Point(e.point.lng, e.point.lat)); 
                map.addOverlay(marker);  
                marker.enableDragging();
                mapData.markers.push(marker);  //加入到数组中
            }, false);
        };

        mapData.loadMapScript = function () {
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://api.map.baidu.com/api?v=2.0&ak=" + ak + "&s=1&callback=baiduMapCallBack";  // baiduMapCallBack是一个本地函数
            try {
                // IE10- 报错
                document.body.appendChild(script);
            } catch (ex) {
                E.error('加载地图过程中发生错误');
            }
        };

        // 初始化地图
        mapData.initMap = function () {
            if (window.BMap) {
                // 不是第一次，直接处理地图即可
                window.baiduMapCallBack();
            } else {
                // 第一次，先加载地图 script，再处理地图（script加载完自动执行处理）
                mapData.loadMapScript();
            }
        };

        // ---------- 创建 menu 对象 ----------

        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.location
        });

        editor.menus[menuId] = menu;

        // ---------- 构建UI ----------

        // panel content 
        var $content = $('<div></div>');

        // 搜索框
        var $inputContainer = $('<div style="margin:10px 0;"></div>');
        var $cityInput = $('<input type="text"/>');
        $cityInput.css({
            width: '80px',
            'text-align': 'center'
        });
        var $searchInput = $('<input type="text"/>');
        $searchInput.css({
            width: '300px',
            'margin-left': '10px'
        }).attr('placeholder', lang.searchlocation);
        var $clearBtn = $('<button class="right link">' + lang.clearLocation + '</button>');
        $inputContainer.append($clearBtn)
                       .append($cityInput)
                       .append($searchInput);
        $content.append($inputContainer);

        // 清除位置按钮
        $clearBtn.click(function (e) {
            $searchInput.val('');
            $searchInput.focus();
            mapData.clearLocations();
            e.preventDefault();
        });

        // 地图
        var $map = $('<div id="' + mapData.mapContainerId + '"></div>');
        $map.css({
            height: '260px',
            width: '100%',
            position: 'relative',
            'margin-top': '10px',
            border: '1px solid #f1f1f1'
        });
        var $mapLoading = $('<span>' + lang.loading + '</span>');
        $mapLoading.css({
            position: 'absolute',
            width: '100px',
            'text-align': 'center',
            top: '45%',
            left: '50%',
            'margin-left': '-50px'
        });
        $map.append($mapLoading);
        $content.append($map);

        // 按钮
        var $btnContainer = $('<div style="margin:10px 0;"></div>');
        var $btnSubmit = $('<button class="right">' + lang.submit + '</button>');
        var $btnCancel = $('<button class="right gray">' + lang.cancel + '</button>');
        var $checkLabel = $('<label style="display:inline-block;margin-top:10px;color:#666;"></label>');
        var $check = $('<input type="checkbox">');
        $checkLabel.append($check).append('<span style="display:inline-block;margin-left:5px;">  ' + lang.dynamicMap + '</span>');
        $btnContainer.append($checkLabel)
                     .append($btnSubmit)
                     .append($btnCancel);
        $content.append($btnContainer);

        function callback() {
            $searchInput.val('');
        }

        // 『取消』按钮事件
        $btnCancel.click(function (e) {
            e.preventDefault();
            callback();
            menu.dropPanel.hide();
        });

        // 『确定』按钮事件
        $btnSubmit.click(function (e) {
            e.preventDefault();
            var map = mapData.map,
                isDynamic = $check.is(':checked'),
                markers =  mapData.markers,

                center = map.getCenter(),
                centerLng = center.lng,
                centerLat = center.lat,

                zoom = map.getZoom(),

                size = map.getSize(),
                sizeWidth = size.width,
                sizeHeight = size.height,

                position,
                src,
                iframe;

            if(isDynamic){
                //动态地址
                src = 'http://ueditor.baidu.com/ueditor/dialogs/map/show.html#';
            }else{
                //静态地址
                src = 'http://api.map.baidu.com/staticimage?';
            }

            //src参数
            src = src +'center=' + centerLng + ',' + centerLat +
                '&zoom=' + zoom +
                '&width=' + sizeWidth +
                '&height=' + sizeHeight;
            if(markers.length > 0){
                src = src + '&markers=';

                //添加所有的marker
                $.each(markers, function(key, value){
                    position = value.getPosition();
                    if(key > 0){
                        src = src + '|';
                    }
                    src = src + position.lng + ',' + position.lat;
                });
            }

            if(isDynamic){
                if(markers.length > 1){
                    alert( lang.langDynamicOneLocation );
                    return;
                }

                src += '&markerStyles=l,A';

                //插入iframe
                iframe = '<iframe class="ueditor_baidumap" src="{src}" frameborder="0" width="' + sizeWidth + '" height="' + sizeHeight + '"></iframe>';
                iframe = iframe.replace('{src}', src);
                editor.command(e, 'insertHtml', iframe, callback);
            }else{
                //插入图片
                editor.command(e, 'insertHtml', '<img style="max-width:100%;" src="' + src + '"/>', callback);
            }
        });

        // 根据 UI 创建菜单 panel
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $content,
            width: 500
        });

        // ---------- 事件 ----------

        // render 时执行事件
        menu.onRender = function () {
            if (ak === E.baiduMapAk) {
                E.warn('建议在配置中自定义百度地图的mapAk，否则可能影响地图功能，文档：' + E.docsite);
            }
        };

        // click 事件
        menu.clickEvent = function (e) {
            var menu = this;
            var dropPanel = menu.dropPanel;
            var firstTime = false;

            // -------------隐藏-------------
            if (dropPanel.isShowing) {
                dropPanel.hide();
                return;
            }

            // -------------显示-------------
            if (!mapData.map) {
                // 第一次，先加载地图
                firstTime = true;
            }
            
            dropPanel.show();
            mapData.initMap();

            if (!firstTime) {
                $searchInput.focus();
            }
        };

    });

});
// insertcode 菜单
_e(function (E, $) {

    // 加载 highlightjs 代码
    function loadHljs() {
        if (E.userAgent.indexOf('MSIE 8') > 0) {
            // 不支持 IE8
            return;
        }
        if (window.hljs) {
            // 不要重复加载
            return;
        }
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//cdn.bootcss.com/highlight.js/9.2.0/highlight.min.js";
        document.body.appendChild(script);
    }
    

    E.createMenu(function (check) {
        var menuId = 'insertcode';
        if (!check(menuId)) {
            return;
        }

        // 加载 highlightjs 代码
        setTimeout(loadHljs, 0);

        var editor = this;
        var config = editor.config;
        var lang = config.lang;
        var $txt = editor.txt.$txt;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.insertcode
        });

        // click 事件
        menu.clickEvent = function (e) {
            var menu = this;
            var dropPanel = menu.dropPanel;

            // 隐藏
            if (dropPanel.isShowing) {
                dropPanel.hide();
                return;
            }

            // 显示
            $textarea.val('');
            dropPanel.show();

            // highlightjs 语言列表
            var hljs = window.hljs;
            if (hljs && hljs.listLanguages) {
                if ($langSelect.children().length !== 0) {
                    return;
                }
                $langSelect.css({
                    'margin-top': '9px',
                    'margin-left': '5px'
                });
                $.each(hljs.listLanguages(), function (key, lang) {
                    if (lang === 'xml') {
                        lang = 'html';
                    }
                    if (lang === config.codeDefaultLang) {
                        $langSelect.append('<option value="' + lang + '" selected="selected">' + lang + '</option>');
                    } else {
                        $langSelect.append('<option value="' + lang + '">' + lang + '</option>');
                    }
                });
            } else {
                $langSelect.hide();
            }
        };

        // 选中状态下的 click 事件
        menu.clickEventSelected = function (e) {
            var menu = this;
            var dropPanel = menu.dropPanel;

            // 隐藏
            if (dropPanel.isShowing) {
                dropPanel.hide();
                return;
            }

            // 显示
            dropPanel.show();

            var rangeElem = editor.getRangeElem();
            var targetElem = editor.getSelfOrParentByName(rangeElem, 'pre');
            var $targetElem;
            var className;
            if (targetElem) {
                // 确定找到 pre 之后，再找 code
                targetElem = editor.getSelfOrParentByName(rangeElem, 'code');
            }
            if (!targetElem) {
                return;
            }
            $targetElem = $(targetElem);

            // 赋值内容
            $textarea.val($targetElem.text());
            if ($langSelect) {
                // 赋值语言
                className = $targetElem.attr('class');
                if (className) {
                    $langSelect.val(className.split(' ')[0]);
                }
            }
        };

        // 定义更新选中状态的事件
        menu.updateSelectedEvent = function () {
            var self = this; //菜单对象
            var editor = self.editor;
            var rangeElem;

            rangeElem = editor.getRangeElem();
            rangeElem = editor.getSelfOrParentByName(rangeElem, 'pre');

            if (rangeElem) {
                return true;
            }

            return false;
        };

        // 创建 panel
        var $content = $('<div></div>');
        var $textarea = $('<textarea></textarea>');
        var $langSelect = $('<select></select>');
        contentHandle($content);
        menu.dropPanel = new E.DropPanel(editor, menu, {
            $content: $content,
            width: 500
        });

        // 增加到editor对象中
        editor.menus[menuId] = menu;

        // ------ 增加 content 内容 ------
        function contentHandle($content) {
            // textarea 区域
            var $textareaContainer = $('<div></div>');
            $textareaContainer.css({
                margin: '15px 5px 5px 5px',
                height: '160px',
                'text-align': 'center'
            });
            $textarea.css({
                width: '100%',
                height: '100%',
                padding: '10px'
            });
            $textarea.on('keydown', function (e) {
                // 取消 tab 键默认行为
                if (e.keyCode === 9) {
                    e.preventDefault();
                }
            });
            $textareaContainer.append($textarea);
            $content.append($textareaContainer);

            // 按钮区域
            var $btnContainer = $('<div></div>');
            var $btnSubmit = $('<button class="right">' + lang.submit + '</button>');
            var $btnCancel = $('<button class="right gray">' + lang.cancel + '</button>');

            $btnContainer.append($btnSubmit).append($btnCancel).append($langSelect);
            $content.append($btnContainer);

            // 取消按钮
            $btnCancel.click(function (e) {
                e.preventDefault();
                menu.dropPanel.hide();
            });

            // 确定按钮
            var codeTpl = '<pre style="max-width:100%;overflow-x:auto;"><code{#langClass}>{#content}</code></pre>';
            $btnSubmit.click(function (e) {
                e.preventDefault();
                var val = $textarea.val();
                if (!val) {
                    // 无内容
                    $textarea.focus();
                    return;
                }

                var rangeElem = editor.getRangeElem();
                if ($.trim($(rangeElem).text()) && codeTpl.indexOf('<p><br></p>') !== 0) {
                    codeTpl = '<p><br></p>' + codeTpl;
                }

                var lang = $langSelect ? $langSelect.val() : ''; // 获取高亮语言
                var langClass = '';
                var doHightlight = function () {
                    $txt.find('pre code').each(function (i, block) {
                        var $block = $(block);
                        if ($block.attr('codemark')) {
                            // 有 codemark 标记的代码块，就不再重新格式化了
                            return;
                        } else if (window.hljs) {
                            // 新代码块，格式化之后，立即标记 codemark
                            window.hljs.highlightBlock(block);
                            $block.attr('codemark', '1');
                        }
                    });
                };

                // 语言高亮样式
                if (lang) {
                    langClass = ' class="' + lang + ' hljs"';
                }

                // 替换标签
                val = val.replace(/&/gm, '&amp;')
                         .replace(/</gm, '&lt;')
                         .replace(/>/gm, '&gt;');

                // ---- menu 未选中状态 ----
                if (!menu.selected) {
                    // 拼接html
                    var html = codeTpl.replace('{#langClass}', langClass).replace('{#content}', val);
                    editor.command(e, 'insertHtml', html, doHightlight);
                    return;
                }

                // ---- menu 选中状态 ----
                var targetElem = editor.getSelfOrParentByName(rangeElem, 'pre');
                var $targetElem;
                if (targetElem) {
                    // 确定找到 pre 之后，再找 code
                    targetElem = editor.getSelfOrParentByName(rangeElem, 'code');
                }
                if (!targetElem) {
                    return;
                }
                $targetElem = $(targetElem);

                function commandFn() {
                    var className;
                    if (lang) {
                        className = $targetElem.attr('class');
                        if (className !== lang + ' hljs') {
                            $targetElem.attr('class', lang + ' hljs');
                        }
                    }
                    $targetElem.html(val);
                }
                function callback() {
                    editor.restoreSelectionByElem(targetElem);
                    doHightlight();
                }
                editor.customCommand(e, commandFn, callback);
            });
        }

        // ------ enter 时，不另起标签，只换行 ------
        $txt.on('keydown', function (e) {
            if (e.keyCode !== 13) {
                return;
            }
            var rangeElem = editor.getRangeElem();
            var targetElem = editor.getSelfOrParentByName(rangeElem, 'code');
            if (!targetElem) {
                return;
            }

            editor.command(e, 'insertHtml', '\n');
        });

        // ------ 点击时，禁用其他标签 ------
        function updateMenu() {
            var rangeElem = editor.getRangeElem();
            var targetElem = editor.getSelfOrParentByName(rangeElem, 'code');
            if (targetElem) {
                // 在 code 之内，禁用其他菜单
                editor.disableMenusExcept('insertcode');
            } else {
                // 不是在 code 之内，启用其他菜单
                editor.enableMenusExcept('insertcode');
            }
        }
        $txt.on('keydown click', function (e) {
            // 此处必须使用 setTimeout 异步处理，否则不对
            setTimeout(updateMenu);
        });
    });

});
// undo 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'undo';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.undo
        });

        // click 事件
        menu.clickEvent = function (e) {
            editor.undo();
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;


        // ------------ 初始化时、enter 时、打字中断时，做记录 ------------
        // ------------ ctrl + z 是调用记录撤销，而不是使用浏览器默认的撤销 ------------
        editor.ready(function () {
            var editor = this;
            var $txt = editor.txt.$txt;
            var timeoutId;

            // 执行undo记录
            function undo() {
                editor.undoRecord();
            }

            $txt.on('keydown', function (e) {
                var keyCode = e.keyCode;

                // 撤销 ctrl + z
                if (e.ctrlKey && keyCode === 90) {
                    editor.undo();
                    return;
                }

                if (keyCode === 13) {
                    // enter 做记录
                    undo();
                } else {
                    // keyup 之后 1s 之内不操作，则做一次记录
                    if (timeoutId) {
                        clearTimeout(timeoutId);
                    }
                    timeoutId = setTimeout(undo, 1000);
                }
            });

            // 初始化做记录
            editor.undoRecord();
        });
    });

});
// redo 菜单
_e(function (E, $) {

    E.createMenu(function (check) {
        var menuId = 'redo';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var lang = editor.config.lang;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.redo
        });

        // click 事件
        menu.clickEvent = function (e) {
            editor.redo();
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// 全屏 菜单
_e(function (E, $) {

    // 记录全屏时的scrollTop
    var scrollTopWhenFullScreen;

    E.createMenu(function (check) {
        var menuId = 'fullscreen';
        if (!check(menuId)) {
            return;
        }
        var editor = this;
        var $txt = editor.txt.$txt;
        var config = editor.config;
        var zIndexConfig = config.zindex || 10000;
        var lang = config.lang;

        var isSelected = false;
        var zIndex;

        var maxHeight;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,
            id: menuId,
            title: lang.fullscreen
        });

        // 定义click事件
        menu.clickEvent = function (e) {
            // 增加样式
            var $editorContainer = editor.$editorContainer;
            $editorContainer.addClass('wangEditor-fullscreen');

            // （先保存当前的）再设置z-index
            zIndex = $editorContainer.css('z-index');
            $editorContainer.css('z-index', zIndexConfig);

            var $wrapper;
            var txtHeight = $txt.height();
            var txtOuterHeight = $txt.outerHeight();

            if (editor.useMaxHeight) {
                // 记录 max-height，并暂时去掉maxheight
                maxHeight = $txt.css('max-height');
                $txt.css('max-height', 'none');

                // 如果使用了maxHeight， 将$txt从它的父元素中移出来
                $wrapper = $txt.parent();
                $wrapper.after($txt);
                $wrapper.remove();
                $txt.css('overflow-y', 'auto');
            }

            // 设置高度到全屏
            var menuContainer = editor.menuContainer;
            $txt.height(
                E.$window.height() - 
                menuContainer.height() - 
                (txtOuterHeight - txtHeight)  // 去掉内边距和外边距
            );

            // 取消menuContainer的内联样式（menu吸顶时，会为 menuContainer 设置一些内联样式）
            editor.menuContainer.$menuContainer.attr('style', '');

            // 保存状态
            isSelected = true;

            // 记录编辑器是否全屏
            editor.isFullScreen = true;

            // 记录设置全屏时的高度
            scrollTopWhenFullScreen = E.$window.scrollTop();
        };

        // 定义选中状态的 click 事件
        menu.clickEventSelected = function (e) {
            // 取消样式
            var $editorContainer = editor.$editorContainer;
            $editorContainer.removeClass('wangEditor-fullscreen');
            $editorContainer.css('z-index', zIndex);

            // 还原height
            if (editor.useMaxHeight) {
                $txt.css('max-height', maxHeight);
            } else {
                // editor.valueContainerHeight 在 editor.txt.initHeight() 中事先保存了
                editor.$valueContainer.css('height', editor.valueContainerHeight);
            }

            // 重新计算高度
            editor.txt.initHeight();

            // 保存状态
            isSelected = false;

            // 记录编辑器是否全屏
            editor.isFullScreen = false;

            // 还原scrollTop
            if (scrollTopWhenFullScreen != null) {
                E.$window.scrollTop(scrollTopWhenFullScreen);
            }
        };

        // 定义选中事件
        menu.updateSelectedEvent = function (e) {
            return isSelected;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// 渲染menus
_e(function (E, $) {

    E.fn.renderMenus = function () {

        var editor = this;
        var menus = editor.menus;
        var menuIds = editor.config.menus;
        var menuContainer = editor.menuContainer;

        var menu;
        var groupIdx = 0;
        $.each(menuIds, function (k, v) {
            if (v === '|') {
                groupIdx++;
                return;
            }

            menu = menus[v];
            if (menu) {
                menu.render(groupIdx);
            }
        });
    };

});
// 渲染menus
_e(function (E, $) {

    E.fn.renderMenuContainer = function () {

        var editor = this;
        var menuContainer = editor.menuContainer;
        var $editorContainer = editor.$editorContainer;

        menuContainer.render();

    };

});
// 渲染 txt
_e(function (E, $) {

    E.fn.renderTxt = function () {

        var editor = this;
        var txt = editor.txt;

        txt.render();

        // ready 时候，计算txt的高度
        editor.ready(function () {
            txt.initHeight();
        });
    };

});
// 渲染 container
_e(function (E, $) {

    E.fn.renderEditorContainer = function () {

        var editor = this;
        var $valueContainer = editor.$valueContainer;
        var $editorContainer = editor.$editorContainer;
        var $txt = editor.txt.$txt;
        var $prev, $parent;

        // 将编辑器渲染到页面中
        if ($valueContainer === $txt) {
            $prev = editor.$prev;
            $parent = editor.$parent;

            if ($prev && $prev.length) {
                // 有前置节点，就插入到前置节点的后面
                $prev.after($editorContainer);
            } else {
                // 没有前置节点，就直接插入到父元素
                $parent.prepend($editorContainer);
            }

        } else {
            $valueContainer.after($editorContainer);
            $valueContainer.hide();
        }

        // 设置宽度（这样设置宽度有问题）
        // $editorContainer.css('width', $valueContainer.css('width'));
    };

});
// 菜单事件
_e(function (E, $) {

    // 绑定每个菜单的click事件
    E.fn.eventMenus = function () {

        var menus = this.menus;

        // 绑定菜单的点击事件
        $.each(menus, function (k, v) {
            v.bindEvent();
        });

    };

});
// 菜单container事件
_e(function (E, $) {

    E.fn.eventMenuContainer = function () {

    };

});
// 编辑区域事件
_e(function (E, $) {

    E.fn.eventTxt = function () {

        var txt = this.txt;

        // txt内容变化时，保存选区
        txt.saveSelectionEvent();

        // txt内容变化时，随时更新 value
        txt.updateValueEvent();

        // txt内容变化时，随时更新 menu style
        txt.updateMenuStyleEvent();

        // // 鼠标hover时，显示 p head 高度（暂时关闭这个功能）
        // if (!/ie/i.test(E.userAgent)) {
        //     // 暂时不支持IE
        //     txt.showHeightOnHover();
        // }
    };

});
// 上传图片事件
_e(function (E, $) {

    E.plugin(function () {
        var editor = this;
        var fns = editor.config.uploadImgFns; // editor.config.uploadImgFns = {} 在config文件中定义了

        // -------- 定义load函数 --------
        fns.onload || (fns.onload = function (resultText, xhr) {
            E.log('上传结束，返回结果为 ' + resultText);

            var editor = this;
            var originalName = editor.uploadImgOriginalName || '';  // 上传图片时，已经将图片的名字存在 editor.uploadImgOriginalName
            var img;
            if (resultText.indexOf('error|') === 0) {
                // 提示错误
                E.warn('上传失败：' + resultText.split('|')[1]);
                alert(resultText.split('|')[1]);
            } else {
                E.log('上传成功，即将插入编辑区域，结果为：' + resultText);

                // 将结果插入编辑器
                img = document.createElement('img');
                img.onload = function () {
                    var html = '<img src="' + resultText + '" alt="' + originalName + '" style="max-width:100%;"/>';
                    editor.command(null, 'insertHtml', html);

                    E.log('已插入图片，地址 ' + resultText);
                    img = null;
                };
                img.onerror = function () {
                    E.error('使用返回的结果获取图片，发生错误。请确认以下结果是否正确：' + resultText);
                    img = null;
                };
                img.src = resultText;
            }

        });

        // -------- 定义tiemout函数 --------
        fns.ontimeout || (fns.ontimeout = function (xhr) {
            E.error('上传图片超时');
            alert('上传图片超时');
        });

        // -------- 定义error函数 --------
        fns.onerror || (fns.onerror = function (xhr) {
            E.error('上传上图片发生错误');
            alert('上传上图片发生错误');
        });

    });
});
// xhr 上传图片
_e(function (E, $) {

    if (!window.FileReader || !window.FormData) {
        // 如果不支持html5的文档操作，直接返回
        return;
    }

    E.plugin(function () {

        var editor = this;
        var config = editor.config;
        var uploadImgUrl = config.uploadImgUrl;
        var uploadTimeout = config.uploadTimeout;

        // 获取配置中的上传事件
        var uploadImgFns = config.uploadImgFns;
        var onload = uploadImgFns.onload;
        var ontimeout = uploadImgFns.ontimeout;
        var onerror = uploadImgFns.onerror;

        if (!uploadImgUrl) {
            return;
        }

        // -------- 将以base64的图片url数据转换为Blob --------
        function convertBase64UrlToBlob(urlData, filetype){
            //去掉url的头，并转换为byte
            var bytes = window.atob(urlData.split(',')[1]);
            
            //处理异常,将ascii码小于0的转换为大于0
            var ab = new ArrayBuffer(bytes.length);
            var ia = new Uint8Array(ab);
            var i;
            for (i = 0; i < bytes.length; i++) {
                ia[i] = bytes.charCodeAt(i);
            }

            return new Blob([ab], {type : filetype});
        }

        // -------- 插入图片的方法 --------
        function insertImg(src, event) {
            var img = document.createElement('img');
            img.onload = function () {
                var html = '<img src="' + src + '" style="max-width:100%;"/>';
                editor.command(event, 'insertHtml', html);

                E.log('已插入图片，地址 ' + src);
                img = null;
            };
            img.onerror = function () {
                E.error('使用返回的结果获取图片，发生错误。请确认以下结果是否正确：' + src);
                img = null;
            };
            img.src = src;
        }

        // -------- onprogress 事件 --------
        function updateProgress(e) {
            if (e.lengthComputable) {
                var percentComplete = e.loaded / e.total;
                editor.showUploadProgress(percentComplete * 100);
            }
        }

        // -------- xhr 上传图片 --------
        editor.xhrUploadImg = function (opt) {
            // opt 数据
            var event = opt.event;
            var fileName = opt.filename || '';
            var base64 = opt.base64;
            var fileType = opt.fileType || 'image/png'; // 无扩展名则默认使用 png
            var name = opt.name || 'wangEditor_upload_file';
            var loadfn = opt.loadfn || onload;
            var errorfn = opt.errorfn || onerror;
            var timeoutfn = opt.timeoutfn || ontimeout;

            // 上传参数（如 token）
            var params = editor.config.uploadParams || {};

            // headers
            var headers = editor.config.uploadHeaders || {};

            // 获取文件扩展名
            var fileExt = 'png';  // 默认为 png
            if (fileName.indexOf('.') > 0) {
                // 原来的文件名有扩展名
                fileExt = fileName.slice(fileName.lastIndexOf('.') - fileName.length + 1);
            } else if (fileType.indexOf('/') > 0 && fileType.split('/')[1]) {
                // 文件名没有扩展名，通过类型获取，如从 'image/png' 取 'png'
                fileExt = fileType.split('/')[1];
            }

            // ------------ begin 预览模拟上传 ------------
            if (E.isOnWebsite) {
                E.log('预览模拟上传');
                insertImg(base64, event);
                return;
            }
            // ------------ end 预览模拟上传 ------------

            // 变量声明
            var xhr = new XMLHttpRequest();
            var timeoutId;
            var src;
            var formData = new FormData();

            // 超时处理
            function timeoutCallback() {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                if (xhr && xhr.abort) {
                    xhr.abort();
                }

                // 超时了就阻止默认行为
                event.preventDefault();

                // 执行回调函数，提示什么内容，都应该在回调函数中定义
                timeoutfn && timeoutfn.call(editor, xhr);

                // 隐藏进度条
                editor.hideUploadProgress();
            }

            xhr.onload = function () {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                // 记录文件名到 editor.uploadImgOriginalName ，插入图片时，可做 alt 属性用
                editor.uploadImgOriginalName = fileName;
                if (fileName.indexOf('.') > 0) {
                    editor.uploadImgOriginalName = fileName.split('.')[0];
                }

                // 执行load函数，任何操作，都应该在load函数中定义
                loadfn && loadfn.call(editor, xhr.responseText, xhr);

                // 隐藏进度条
                editor.hideUploadProgress();
            };
            xhr.onerror = function () {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }

                // 超时了就阻止默认行为
                event.preventDefault();

                // 执行error函数，错误提示，应该在error函数中定义
                errorfn && errorfn.call(editor, xhr);

                // 隐藏进度条
                editor.hideUploadProgress();
            };
            // xhr.onprogress = updateProgress;
            xhr.upload.onprogress = updateProgress;

            // 填充数据
            formData.append(name, convertBase64UrlToBlob(base64, fileType), E.random() + '.' + fileExt);

            // 添加参数
            $.each(params, function (key, value) {
                formData.append(key, value);
            });

            // 开始上传
            xhr.open('POST', uploadImgUrl, true);
            // xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");  // 将参数解析成传统form的方式上传

            // 修改自定义配置的headers
            $.each(headers, function (key, value) {
                xhr.setRequestHeader(key, value);
            });

            // 跨域上传时，传cookie
            xhr.withCredentials = editor.config.withCredentials || true;

            // 发送数据
            xhr.send(formData);
            timeoutId = setTimeout(timeoutCallback, uploadTimeout);

            E.log('开始上传...并开始超时计算');
        };
    });
});
// 进度条
_e(function (E, $) {

    E.plugin(function () {

        var editor = this;
        var menuContainer = editor.menuContainer;
        var menuHeight = menuContainer.height();
        var $editorContainer = editor.$editorContainer;
        var width = $editorContainer.width();
        var $progress = $('<div class="wangEditor-upload-progress"></div>');

        // 渲染事件
        var isRender = false;
        function render() {
            if (isRender) {
                return;
            }
            isRender = true;

            $progress.css({
                top: menuHeight + 'px'
            });
            $editorContainer.append($progress);
        }

        // ------ 显示进度 ------
        editor.showUploadProgress = function (progress) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }

            // 显示之前，先判断是否渲染
            render();

            $progress.show();
            $progress.width(progress * width / 100);
        };

        // ------ 隐藏进度条 ------
        var timeoutId;
        function hideProgress() {
            $progress.hide();
            timeoutId = null;
        }
        editor.hideUploadProgress = function (time) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            time = time || 750;
            timeoutId = setTimeout(hideProgress, time);
        };
    });
});
// upload img 插件
_e(function (E, $) {

    E.plugin(function () {
        var editor = this;
        var config = editor.config;
        var uploadImgUrl = config.uploadImgUrl;
        var uploadTimeout = config.uploadTimeout;
        var event;

        if (!uploadImgUrl) {
            return;
        }

        // 获取editor的上传dom
        var $uploadContent = editor.$uploadContent;
        if (!$uploadContent) {
            return;
        }

        // 自定义UI，并添加到上传dom节点上
        var $uploadIcon = $('<div class="upload-icon-container"><i class="wangeditor-menu-img-upload"></i></div>');
        $uploadContent.append($uploadIcon);

        // ---------- 构建上传对象 ----------
        var upfile = new E.UploadFile({
            editor: editor,
            uploadUrl: uploadImgUrl,
            timeout: uploadTimeout,
            fileAccept: 'image/jpg,image/jpeg,image/png,image/gif,image/bmp'    // 只允许选择图片 
        });

        // 选择本地文件，上传
        $uploadIcon.click(function (e) {
            event = e;
            upfile.selectFiles();
        });
    });
});
// h5 方式上传图片
_e(function (E, $) {

    if (!window.FileReader || !window.FormData) {
        // 如果不支持html5的文档操作，直接返回
        return;
    }

    // 构造函数
    var UploadFile = function (opt) {
        this.editor = opt.editor;
        this.uploadUrl = opt.uploadUrl;
        this.timeout = opt.timeout;
        this.fileAccept = opt.fileAccept;
        this.multiple = true;
    };

    UploadFile.fn = UploadFile.prototype;

    // clear
    UploadFile.fn.clear = function () {
        this.$input.val('');
        E.log('input value 已清空');
    };

    // 渲染
    UploadFile.fn.render = function () {
        var self = this;
        if (self._hasRender) {
            // 不要重复渲染
            return;
        }

        E.log('渲染dom');

        var fileAccept = self.fileAccept;
        var acceptTpl = fileAccept ? 'accept="' + fileAccept + '"' : '';
        var multiple = self.multiple;
        var multipleTpl = multiple ? 'multiple="multiple"' : '';
        var $input = $('<input type="file" ' + acceptTpl + ' ' + multipleTpl + '/>');
        var $container = $('<div style="display:none;"></div>');

        $container.append($input);
        E.$body.append($container);

        // onchange 事件
        $input.on('change', function (e) {
            self.selected(e, $input.get(0));
        });

        // 记录对象数据
        self.$input = $input;

        // 记录
        self._hasRender = true;
    };

    // 选择
    UploadFile.fn.selectFiles = function () {
        var self = this;

        E.log('使用 html5 方式上传');

        // 先渲染
        self.render();

        // 选择
        E.log('选择文件');
        self.$input.click();
    };

    // 选中文件之后
    UploadFile.fn.selected = function (e, input) {
        var self = this;
        var files = input.files || [];
        if (files.length === 0) {
            return;
        }

        E.log('选中 ' + files.length + ' 个文件');

        // 遍历选中的文件，预览、上传
        $.each(files, function (key, value) {
            self.upload(value);
        });
    };

    // 上传单个文件
    UploadFile.fn.upload = function (file) {
        var self = this;
        var editor = self.editor;
        var filename = file.name || '';
        var fileType = file.type || '';
        var uploadImgFns = editor.config.uploadImgFns;
        var uploadFileName = editor.config.uploadImgFileName || 'wangEditorH5File';
        var onload = uploadImgFns.onload;
        var ontimeout = uploadImgFns.ontimeout;
        var onerror = uploadImgFns.onerror;
        var reader = new FileReader();

        if (!onload || !ontimeout || !onerror) {
            E.error('请为编辑器配置上传图片的 onload ontimeout onerror 回调事件');
            return;
        }


        E.log('开始执行 ' + filename + ' 文件的上传');

        // 清空 input 数据
        function clearInput() {
            self.clear();
        }

        // onload事件
        reader.onload = function (e) {
            E.log('已读取' + filename + '文件');

            var base64 = e.target.result || this.result;
            editor.xhrUploadImg({
                event: e,
                filename: filename,
                base64: base64,
                fileType: fileType,
                name: uploadFileName,
                loadfn: function (resultText, xhr) {
                    clearInput();
                    // 执行配置中的方法
                    var editor = this;
                    onload.call(editor, resultText, xhr);
                },
                errorfn: function (xhr) {
                    clearInput();
                    if (E.isOnWebsite) {
                        alert('wangEditor官网暂时没有服务端，因此报错。实际项目中不会发生');
                    }
                    // 执行配置中的方法
                    var editor = this;
                    onerror.call(editor, xhr);
                },
                timeoutfn: function (xhr) {
                    clearInput();
                    if (E.isOnWebsite) {
                        alert('wangEditor官网暂时没有服务端，因此超时。实际项目中不会发生');
                    }
                    // 执行配置中的方法
                    var editor = this;
                    ontimeout(editor, xhr);
                }
            });
        };

        // 开始取文件
        reader.readAsDataURL(file);
    };

    // 暴露给 E
    E.UploadFile = UploadFile;

});
// form方式上传图片
_e(function (E, $) {

    if (window.FileReader && window.FormData) {
        // 如果支持 html5 上传，则返回
        return;
    }
    
    // 构造函数
    var UploadFile = function (opt) {
        this.editor = opt.editor;
        this.uploadUrl = opt.uploadUrl;
        this.timeout = opt.timeout;
        this.fileAccept = opt.fileAccept;
        this.multiple = false;
    };

    UploadFile.fn = UploadFile.prototype;

    // clear
    UploadFile.fn.clear = function () {
        this.$input.val('');
        E.log('input value 已清空');
    };

    // 隐藏modal
    UploadFile.fn.hideModal = function () {
        this.modal.hide();
    };

    // 渲染
    UploadFile.fn.render = function () {
        var self = this;
        var editor = self.editor;
        var uploadFileName = editor.config.uploadImgFileName || 'wangEditorFormFile';
        if (self._hasRender) {
            // 不要重复渲染
            return;
        }

        // 服务器端路径
        var uploadUrl = self.uploadUrl;

        E.log('渲染dom');

        // 创建 form 和 iframe
        var iframeId = 'iframe' + E.random();
        var $iframe = $('<iframe name="' + iframeId + '" id="' + iframeId + '" frameborder="0" width="0" height="0"></iframe>');
        var multiple = self.multiple;
        var multipleTpl = multiple ? 'multiple="multiple"' : '';
        var $p = $('<p>选择图片并上传</p>');
        var $input = $('<input type="file" ' + multipleTpl + ' name="' + uploadFileName + '"/>');
        var $btn = $('<input type="submit" value="上传"/>');
        var $form = $('<form enctype="multipart/form-data" method="post" action="' + uploadUrl + '" target="' + iframeId + '"></form>');
        var $container = $('<div style="margin:10px 20px;"></div>');

        $form.append($p).append($input).append($btn);

        // 增加用户配置的参数，如 token
        $.each(editor.config.uploadParams, function (key, value) {
            $form.append( $('<input type="hidden" name="' + key + '" value="' + value + '"/>') );
        });

        $container.append($form);
        $container.append($iframe);

        self.$input = $input;
        self.$iframe = $iframe;

        // 生成 modal
        var modal = new E.Modal(editor, undefined, {
            $content: $container
        });
        self.modal = modal;

        // 记录
        self._hasRender = true;
    };

    // 绑定 iframe load 事件
    UploadFile.fn.bindLoadEvent = function () {
        var self = this;
        if (self._hasBindLoad) {
            // 不要重复绑定
            return;
        }

        var editor = self.editor;
        var $iframe = self.$iframe;
        var iframe = $iframe.get(0);
        var iframeWindow = iframe.contentWindow;
        var onload = editor.config.uploadImgFns.onload;

        // 定义load事件
        function onloadFn() {
            var resultText = $.trim(iframeWindow.document.body.innerHTML);
            if (!resultText) {
                return;
            }

            // 获取文件名
            var fileFullName = self.$input.val();  // 结果如 C:\folder\abc.png 格式
            var fileOriginalName = fileFullName;
            if (fileFullName.lastIndexOf('\\') >= 0) {
                // 获取 abc.png 格式
                fileOriginalName = fileFullName.slice(fileFullName.lastIndexOf('\\') + 1);
                if (fileOriginalName.indexOf('.') > 0) {
                    // 获取 abc （即不带扩展名的文件名）
                    fileOriginalName = fileOriginalName.split('.')[0];
                }
            }

            // 将文件名暂存到 editor.uploadImgOriginalName ，插入图片时，可作为 alt 属性来用
            editor.uploadImgOriginalName = fileOriginalName;

            // 执行load函数，插入图片的操作，应该在load函数中执行
            onload.call(editor, resultText);

            // 清空 input 数据
            self.clear();

            // 隐藏modal
            self.hideModal();
        }

        // 绑定 load 事件
        if (iframe.attachEvent) {
            iframe.attachEvent('onload', onloadFn);
        } else {
            iframe.onload = onloadFn;
        }

        // 记录
        self._hasBindLoad = true;
    };

    UploadFile.fn.show = function () {
        var self = this;
        var modal = self.modal;

        function show() {
            modal.show();
            self.bindLoadEvent();
        }
        setTimeout(show);
    };

    // 选择
    UploadFile.fn.selectFiles = function () {
        var self = this;

        E.log('使用 form 方式上传');

        // 先渲染
        self.render();

        // 先清空
        self.clear();

        // 显示
        self.show();
    };

    // 暴露给 E
    E.UploadFile = UploadFile;

});
// upload img 插件 粘贴图片
_e(function (E, $) {
    
    E.plugin(function () {
        var editor = this;
        var txt = editor.txt;
        var $txt = txt.$txt;
        var config = editor.config;
        var uploadImgUrl = config.uploadImgUrl;
        var uploadFileName = config.uploadImgFileName || 'wangEditorPasteFile';
        var pasteEvent;
        var $imgsBeforePaste;

        // 未配置上传图片url，则忽略
        if (!uploadImgUrl) {
            return;
        }

        // -------- 非 chrome 下，通过查找粘贴的图片的方式上传 --------
        function findPasteImgAndUpload() {
            var reg = /^data:(image\/\w+);base64/;
            var $imgs = $txt.find('img');

            E.log('粘贴后，检查到编辑器有' + $imgs.length + '个图片。开始遍历图片，试图找到刚刚粘贴过来的图片');

            $.each($imgs, function () {
                var img = this;
                var $img = $(img);
                var flag;
                var base64 = $img.attr('src');
                var type;

                // 判断当前图片是否是粘贴之前的
                $imgsBeforePaste.each(function () {
                    if (img === this) {
                        // 当前图片是粘贴之前的
                        flag = true;
                        return false;
                    }
                });

                // 当前图片是粘贴之前的，则忽略
                if (flag) {
                    return;
                }

                E.log('找到一个粘贴过来的图片');

                if (reg.test(base64)) {
                    // 得到的粘贴的图片是 base64 格式，符合要求
                    E.log('src 是 base64 格式，可以上传');
                    type = base64.match(reg)[1];
                    editor.xhrUploadImg({
                        event: pasteEvent,
                        base64: base64,
                        fileType: type,
                        name: uploadFileName
                    });
                } else {
                    E.log('src 为 ' + base64 + ' ，不是 base64 格式，暂时不支持上传');
                }

                // 最终移除原图片
                $img.remove();
            });

            E.log('遍历结束');
        }

        // 开始监控粘贴事件
        $txt.on('paste', function (e) {
            pasteEvent = e;
            var data = pasteEvent.clipboardData || pasteEvent.originalEvent.clipboardData;
            var text;
            var items;

            // -------- 试图获取剪切板中的文字，有文字的情况下，就不处理图片粘贴 --------
            if (data == null) {
                text = window.clipboardData && window.clipboardData.getData('text');
            } else {
                text = data.getData('text/plain') || data.getData('text/html');
            }
            if (text) {
                return;
            }

            items = data && data.items;
            if (items) {
                // -------- chrome 可以用 data.items 取出图片 -----
                E.log('通过 data.items 得到了数据');

                $.each(items, function (key, value) {
                    var fileType = value.type || '';
                    if(fileType.indexOf('image') < 0) {
                        // 不是图片
                        return;
                    }

                    var file = value.getAsFile();
                    var reader = new FileReader();

                    E.log('得到一个粘贴图片');

                    reader.onload = function (e) {
                        E.log('读取到粘贴的图片');

                        // 执行上传
                        var base64 = e.target.result || this.result;
                        editor.xhrUploadImg({
                            event: pasteEvent,
                            base64: base64,
                            fileType: fileType,
                            name: uploadFileName
                        });
                    };

                    //读取粘贴的文件
                    reader.readAsDataURL(file);
                });
            } else {
                // -------- 非 chrome 不能用 data.items 取图片 -----

                E.log('未从 data.items 得到数据，使用检测粘贴图片的方式');

                // 获取
                $imgsBeforePaste = $txt.find('img');
                E.log('粘贴前，检查到编辑器有' + $imgsBeforePaste.length + '个图片');

                // 异步上传找到的图片
                setTimeout(findPasteImgAndUpload, 0);
            }
        });

    });
});
// 拖拽上传图片 插件 
_e(function (E, $) {

    E.plugin(function () {

        var editor = this;
        var txt = editor.txt;
        var $txt = txt.$txt;
        var config = editor.config;
        var uploadImgUrl = config.uploadImgUrl;
        var uploadFileName = config.uploadImgFileName || 'wangEditorDragFile';

        // 未配置上传图片url，则忽略
        if (!uploadImgUrl) {
            return;
        }

        // 阻止浏览器默认行为
        E.$document.on('dragleave drop dragenter dragover', function (e) {
            e.preventDefault();
        });

        // 监控 $txt drop 事件
        $txt.on('drop', function (dragEvent) {
            dragEvent.preventDefault();

            var originalEvent = dragEvent.originalEvent;
            var files = originalEvent.dataTransfer && originalEvent.dataTransfer.files;

            if (!files || !files.length) {
                return;
            }

            $.each(files, function (k, file) {
                var type = file.type;
                var name = file.name;

                if (type.indexOf('image/') < 0) {
                    // 只接收图片
                    return;
                }

                E.log('得到图片 ' + name);

                var reader = new FileReader();
                reader.onload = function (e) {
                    E.log('读取到图片 ' + name);

                    // 执行上传
                    var base64 = e.target.result || this.result;
                    editor.xhrUploadImg({
                        event: dragEvent,
                        base64: base64,
                        fileType: type,
                        name: uploadFileName
                    });
                };

                //读取粘贴的文件
                reader.readAsDataURL(file);

            });
        });
    });

});
// 编辑器区域 table toolbar
_e(function (E, $) {

    E.plugin(function () {
        var editor = this;
        var txt = editor.txt;
        var $txt = txt.$txt;
        var html = '';
        // 说明：设置了 max-height 之后，$txt.parent() 负责滚动处理
        var $currentTxt = editor.useMaxHeight ? $txt.parent() : $txt;
        var $currentTable;

        // 用到的dom节点
        var isRendered = false;
        var $toolbar = $('<div class="txt-toolbar"></div>');
        var $triangle = $('<div class="tip-triangle"></div>');
        var $delete = $('<a href="#"><i class="wangeditor-menu-img-trash-o"></i></a>');
        var $zoomSmall = $('<a href="#"><i class="wangeditor-menu-img-search-minus"></i></a>');
        var $zoomBig = $('<a href="#"><i class="wangeditor-menu-img-search-plus"></i></a>');

        // 渲染到页面
        function render() {
            if (isRendered) {
                return;
            }
            
            // 绑定事件
            bindEvent();

            // 拼接 渲染到页面上
            $toolbar.append($triangle)
                    .append($delete)
                    .append($zoomSmall)
                    .append($zoomBig);
            editor.$editorContainer.append($toolbar);
            isRendered = true;
        }

        // 绑定事件
        function bindEvent() {
            // 统一执行命令的方法
            var commandFn;
            function command(e, callback) {
                // 执行命令之前，先存储html内容
                html = $txt.html();
                // 监控内容变化
                var cb = function  () {
                    if (callback) {
                        callback();
                    }
                    if (html !== $txt.html()) {
                        $txt.change();
                    }
                };
                // 执行命令
                if (commandFn) {
                    editor.customCommand(e, commandFn, cb);
                }
            }

            // 删除
            $delete.click(function (e) {
                commandFn = function () {
                    $currentTable.remove();
                };
                command(e, function () {
                    setTimeout(hide, 100);
                });
            });

            // 放大
            $zoomBig.click(function (e) {
                commandFn = function () {
                    $currentTable.css({
                        width: '100%'
                    });
                };
                command(e, function () {
                    setTimeout(show);
                });
            });

            // 缩小
            $zoomSmall.click(function (e) {
                commandFn = function () {
                    $currentTable.css({
                        width: 'auto'
                    });
                };
                command(e, function () {
                    setTimeout(show);
                });
            });
        }

        // 显示 toolbar
        function show() {
            if (editor._disabled) {
                // 编辑器已经被禁用，则不让显示
                return;
            }
            if ($currentTable == null) {
                return;
            }
            $currentTable.addClass('clicked');
            var tablePosition = $currentTable.position();
            var tableTop = tablePosition.top;
            var tableLeft = tablePosition.left;
            var tableHeight = $currentTable.outerHeight();
            var tableWidth = $currentTable.outerWidth();

            // --- 定位 toolbar ---

            // 计算初步结果
            var top = tableTop + tableHeight;
            var left = tableLeft;
            var marginLeft = 0;

            var txtTop = $currentTxt.position().top;
            var txtHeight = $currentTxt.outerHeight();
            if (top > (txtTop + txtHeight)) {
                // top 不得超出编辑范围
                top = txtTop + txtHeight;
            }

            // 显示（方便计算 margin）
            $toolbar.show();

            // 计算 margin
            var width = $toolbar.outerWidth();
            marginLeft = tableWidth / 2 - width / 2;

            // 定位
            $toolbar.css({
                top: top + 5,
                left: left,
                'margin-left': marginLeft
            });
            // 如果定位太靠左了
            if (marginLeft < 0) {
                // 得到三角形的margin-left
                $toolbar.css('margin-left', '0');
                $triangle.hide();
            } else {
                $triangle.show();
            }
        }
        
        // 隐藏 toolbar
        function hide() {
            if ($currentTable == null) {
                return;
            }
            $currentTable.removeClass('clicked');
            $currentTable = null;
            $toolbar.hide();
        }

        // click table 事件
        $currentTxt.on('click', 'table', function (e) {
            var $table = $(e.currentTarget);

            // 渲染
            render();

            if ($currentTable && ($currentTable.get(0) === $table.get(0))) {
                setTimeout(hide, 100);
                return;
            }

            // 显示 toolbar
            $currentTable = $table;
            show();

            // 阻止冒泡
            e.preventDefault();
            e.stopPropagation();
            
        }).on('click keydown scroll', function (e) {
            setTimeout(hide, 100);
        });
        E.$body.on('click keydown scroll', function (e) {
            setTimeout(hide, 100);
        });
    });

});
// 编辑器区域 img toolbar
_e(function (E, $) {

    if (E.userAgent.indexOf('MSIE 8') > 0) {
        return;
    }
    
    E.plugin(function () {
        var editor = this;
        var lang = editor.config.lang;
        var txt = editor.txt;
        var $txt = txt.$txt;
        var html = '';
        // 说明：设置了 max-height 之后，$txt.parent() 负责滚动处理
        var $currentTxt = editor.useMaxHeight ? $txt.parent() : $txt;
        var $editorContainer = editor.$editorContainer;
        var $currentImg;
        var currentLink = '';

        // 用到的dom节点
        var isRendered = false;
        var $dragPoint = $('<div class="img-drag-point"></div>');

        var $toolbar = $('<div class="txt-toolbar"></div>');
        var $triangle = $('<div class="tip-triangle"></div>');

        var $menuContainer = $('<div></div>');
        var $delete = $('<a href="#"><i class="wangeditor-menu-img-trash-o"></i></a>');
        var $zoomSmall = $('<a href="#"><i class="wangeditor-menu-img-search-minus"></i></a>');
        var $zoomBig = $('<a href="#"><i class="wangeditor-menu-img-search-plus"></i></a>');
        // var $floatLeft = $('<a href="#"><i class="wangeditor-menu-img-align-left"></i></a>');
        // var $noFloat = $('<a href="#"><i class="wangeditor-menu-img-align-justify"></i></a>');
        // var $floatRight = $('<a href="#"><i class="wangeditor-menu-img-align-right"></i></a>');
        var $alignLeft = $('<a href="#"><i class="wangeditor-menu-img-align-left"></i></a>');
        var $alignCenter = $('<a href="#"><i class="wangeditor-menu-img-align-center"></i></a>');
        var $alignRight = $('<a href="#"><i class="wangeditor-menu-img-align-right"></i></a>');
        var $link = $('<a href="#"><i class="wangeditor-menu-img-link"></i></a>');
        var $unLink = $('<a href="#"><i class="wangeditor-menu-img-unlink"></i></a>');

        var $linkInputContainer = $('<div style="display:none;"></div>');
        var $linkInput = $('<input type="text" style="height:26px; margin-left:10px; width:200px;"/>');
        var $linkBtnSubmit = $('<button class="right">' + lang.submit + '</button>');
        var $linkBtnCancel = $('<button class="right gray">' + lang.cancel + '</button>');

        // 记录是否正在拖拽
        var isOnDrag = false;

        // 获取 / 设置 链接
        function imgLink(e, url) {
            if (!$currentImg) {
                return;
            }
            var commandFn;
            var callback = function () {
                // 及时保存currentLink
                if (url != null) {
                    currentLink = url;
                }
                if (html !== $txt.html()) {
                    $txt.change();
                }
            };
            var $link;
            var inLink = false;
            var $parent = $currentImg.parent();
            if ($parent.get(0).nodeName.toLowerCase() === 'a') {
                // 父元素就是图片链接
                $link = $parent;
                inLink = true;
            } else {
                // 父元素不是图片链接，则重新创建一个链接
                $link = $('<a target="_blank"></a>');
            }

            if (url == null) {
                // url 无值，是获取链接
                return $link.attr('href') || '';
            } else if (url === '') {
                // url 是空字符串，是取消链接
                if (inLink) {
                    commandFn = function () {
                        $currentImg.unwrap();
                    };
                }
            } else {
                // url 有值，是设置链接
                if (url === currentLink) {
                    return;
                }
                commandFn = function () {
                    $link.attr('href', url);

                    if (!inLink) {
                        // 当前图片未包含在链接中，则包含进来
                        $currentImg.wrap($link);
                    }
                };
            }

            // 执行命令
            if (commandFn) {
                // 记录下执行命令之前的html内容
                html = $txt.html();
                // 执行命令
                editor.customCommand(e, commandFn, callback);
            }
        }

        // 渲染到页面
        function render() {
            if (isRendered) {
                return;
            }
            
            // 绑定事件
            bindToolbarEvent();
            bindDragEvent();

            // 菜单放入 container
            $menuContainer.append($delete)
                            .append($zoomSmall)
                            .append($zoomBig)
                            // .append($floatLeft)
                            // .append($noFloat)
                            // .append($floatRight);
                            .append($alignLeft)
                            .append($alignCenter)
                            .append($alignRight)
                            .append($link)
                            .append($unLink);

            // 链接input放入container
            $linkInputContainer.append($linkInput)
                               .append($linkBtnCancel)
                               .append($linkBtnSubmit);

            // 拼接 渲染到页面上
            $toolbar.append($triangle)
                    .append($menuContainer)
                    .append($linkInputContainer);
                    
            editor.$editorContainer.append($toolbar).append($dragPoint);
            isRendered = true;
        }

        // 绑定toolbar事件
        function bindToolbarEvent() {
            // 统一执行命令的方法
            var commandFn;
            function customCommand(e, callback) {
                var cb;
                // 记录下执行命令之前的html内容
                html = $txt.html();
                cb = function () {
                    if (callback) {
                        callback();
                    }
                    if (html !== $txt.html()) {
                        $txt.change();
                    }
                };
                // 执行命令
                if (commandFn) {
                    editor.customCommand(e, commandFn, cb);
                }
            }

            // 删除
            $delete.click(function (e) {
                // 删除之前先unlink
                imgLink(e, '');

                // 删除图片
                commandFn = function () {
                    $currentImg.remove();
                };
                customCommand(e, function () {
                    setTimeout(hide, 100);
                });
            });

            // 放大
            $zoomBig.click(function (e) {
                commandFn = function () {
                    var img = $currentImg.get(0);
                    var width = img.width;
                    var height = img.height;
                    width = width * 1.1;
                    height = height * 1.1;

                    $currentImg.css({
                        width: width + 'px',
                        height: height + 'px'
                    });
                };
                customCommand(e, function () {
                    setTimeout(show);
                });
            });

            // 缩小
            $zoomSmall.click(function (e) {
                commandFn = function () {
                    var img = $currentImg.get(0);
                    var width = img.width;
                    var height = img.height;
                    width = width * 0.9;
                    height = height * 0.9;

                    $currentImg.css({
                        width: width + 'px',
                        height: height + 'px'
                    });
                };
                customCommand(e, function () {
                    setTimeout(show);
                });
            });

            // // 左浮动
            // $floatLeft.click(function (e) {
            //     commandFn = function () {
            //         $currentImg.css({
            //             float: 'left'
            //         });
            //     };
            //     customCommand(e, function () {
            //         setTimeout(hide, 100);
            //     });
            // });

            // alignLeft
            $alignLeft.click(function (e) {
                commandFn = function () {
                    // 如果 img 增加了链接，那么 img.parent() 就是 a 标签，设置 align 没用的，因此必须找到 P 父节点来设置 align
                    $currentImg.parents('p').css({
                        'text-align': 'left'
                    }).attr('align', 'left');
                };
                customCommand(e, function () {
                    setTimeout(hide, 100);
                });
            });

            // // 右浮动
            // $floatRight.click(function (e) {
            //     commandFn = function () {
            //         $currentImg.css({
            //             float: 'right'
            //         });
            //     };
            //     customCommand(e, function () {
            //         setTimeout(hide, 100);
            //     });
            // });

            // alignRight
            $alignRight.click(function (e) {
                commandFn = function () {
                    // 如果 img 增加了链接，那么 img.parent() 就是 a 标签，设置 align 没用的，因此必须找到 P 父节点来设置 align
                    $currentImg.parents('p').css({
                        'text-align': 'right'
                    }).attr('align', 'right');
                };
                customCommand(e, function () {
                    setTimeout(hide, 100);
                });
            });

            // // 无浮动
            // $noFloat.click(function (e) {
            //     commandFn = function () {
            //         $currentImg.css({
            //             float: 'none'
            //         });
            //     };
            //     customCommand(e, function () {
            //         setTimeout(hide, 100);
            //     });
            // });

            // alignCenter
            $alignCenter.click(function (e) {
                commandFn = function () {
                    // 如果 img 增加了链接，那么 img.parent() 就是 a 标签，设置 align 没用的，因此必须找到 P 父节点来设置 align
                    $currentImg.parents('p').css({
                        'text-align': 'center'
                    }).attr('align', 'center');
                };
                customCommand(e, function () {
                    setTimeout(hide, 100);
                });
            });

            // link
            // 显示链接input
            $link.click(function (e) {
                e.preventDefault();

                // 获取当前链接，并显示
                currentLink = imgLink(e);
                $linkInput.val(currentLink);

                $menuContainer.hide();
                $linkInputContainer.show();
            });
            // 设置链接
            $linkBtnSubmit.click(function (e) {
                e.preventDefault();

                var url = $.trim($linkInput.val());
                if (url) {
                    // 设置链接，同时会自动更新 currentLink 的值
                    imgLink(e, url);
                }

                // 隐藏 toolbar
                setTimeout(hide);
            });
            // 取消设置链接
            $linkBtnCancel.click(function (e) {
                e.preventDefault();

                // 重置链接 input
                $linkInput.val(currentLink);

                $menuContainer.show();
                $linkInputContainer.hide();
            });

            // unlink
            $unLink.click(function (e) {
                e.preventDefault();

                // 执行 unlink
                imgLink(e, '');

                // 隐藏 toolbar
                setTimeout(hide);
            });
        }

        // 绑定drag事件
        function bindDragEvent() {
            var _x, _y;
            var dragMarginLeft, dragMarginTop;
            var imgWidth, imgHeight;

            function mousemove (e) {
                var diffX, diffY;

                // 计算差额
                diffX = e.pageX - _x;
                diffY = e.pageY - _y;

                // --------- 计算拖拽点的位置 ---------
                var currentDragMarginLeft = dragMarginLeft + diffX;
                var currentDragMarginTop = dragMarginTop + diffY;
                $dragPoint.css({
                    'margin-left': currentDragMarginLeft,
                    'margin-top': currentDragMarginTop
                });

                // --------- 计算图片的大小 ---------
                var currentImgWidth = imgWidth + diffX;
                var currentImggHeight = imgHeight + diffY;
                $currentImg && $currentImg.css({
                    width: currentImgWidth,
                    height: currentImggHeight
                });
            }

            $dragPoint.on('mousedown', function(e){
                if (!$currentImg) {
                    return;
                }
                // 当前鼠标位置
                _x = e.pageX;
                _y = e.pageY;

                // 当前拖拽点的位置
                dragMarginLeft = parseFloat($dragPoint.css('margin-left'), 10);
                dragMarginTop = parseFloat($dragPoint.css('margin-top'), 10);

                // 当前图片的大小
                imgWidth = $currentImg.width();
                imgHeight = $currentImg.height();

                // 隐藏 $toolbar
                $toolbar.hide();

                // 绑定计算事件
                E.$document.on('mousemove._dragResizeImg', mousemove);
                E.$document.on('mouseup._dragResizeImg', function (e) {
                    // 取消绑定
                    E.$document.off('mousemove._dragResizeImg');
                    E.$document.off('mouseup._dragResizeImg');

                    // 隐藏，并还原拖拽点的位置
                    hide();
                    $dragPoint.css({
                        'margin-left': dragMarginLeft,
                        'margin-top': dragMarginTop
                    });

                    // 记录
                    isOnDrag = false;
                });

                // 记录
                isOnDrag = true;
            });
        }

        // 显示 toolbar
        function show() {
            if (editor._disabled) {
                // 编辑器已经被禁用，则不让显示
                return;
            }
            if ($currentImg == null) {
                return;
            }
            $currentImg.addClass('clicked');
            var imgPosition = $currentImg.position();
            var imgTop = imgPosition.top;
            var imgLeft = imgPosition.left;
            var imgHeight = $currentImg.outerHeight();
            var imgWidth = $currentImg.outerWidth();


            // --- 定位 dragpoint ---
            $dragPoint.css({
                top: imgTop + imgHeight,
                left: imgLeft + imgWidth
            });

            // --- 定位 toolbar ---

            // 计算初步结果
            var top = imgTop + imgHeight;
            var left = imgLeft;
            var marginLeft = 0;

            var txtTop = $currentTxt.position().top;
            var txtHeight = $currentTxt.outerHeight();
            if (top > (txtTop + txtHeight)) {
                // top 不得超出编辑范围
                top = txtTop + txtHeight;
            } else {
                // top 超出编辑范围，dragPoint就不显示了
                $dragPoint.show();
            }

            // 显示（方便计算 margin）
            $toolbar.show();

            // 计算 margin
            var width = $toolbar.outerWidth();
            marginLeft = imgWidth / 2 - width / 2;

            // 定位
            $toolbar.css({
                top: top + 5,
                left: left,
                'margin-left': marginLeft
            });
            // 如果定位太靠左了
            if (marginLeft < 0) {
                // 得到三角形的margin-left
                $toolbar.css('margin-left', '0');
                $triangle.hide();
            } else {
                $triangle.show();
            }

            // disable 菜单
            editor.disableMenusExcept();
        }
        
        // 隐藏 toolbar
        function hide() {
            if ($currentImg == null) {
                return;
            }
            $currentImg.removeClass('clicked');
            $currentImg = null;

            $toolbar.hide();
            $dragPoint.hide();

            // enable 菜单
            editor.enableMenusExcept();
        }

        // 判断img是否是一个表情
        function isEmotion(imgSrc) {
            var result = false;
            if (!editor.emotionUrls) {
                return result;
            }
            $.each(editor.emotionUrls, function (index, url) {
                var flag = false;
                if (imgSrc === url) {
                    result = true;
                    flag = true;
                }
                if (flag) {
                    return false;  // break 循环
                }
            });
            return result;
        }

        // click img 事件
        $currentTxt.on('mousedown', 'img', function (e) {
            e.preventDefault();
        }).on('click', 'img', function (e) {
            var $img = $(e.currentTarget);
            var src = $img.attr('src');

            if (!src || isEmotion(src)) {
                // 是一个表情图标
                return;
            }

            // ---------- 不是表情图标 ---------- 

            // 渲染
            render();

            if ($currentImg && ($currentImg.get(0) === $img.get(0))) {
                setTimeout(hide, 100);
                return;
            }

            // 显示 toolbar
            $currentImg = $img;
            show();

            // 默认显示menuContainer，其他默认隐藏
            $menuContainer.show();
            $linkInputContainer.hide();

            // 阻止冒泡
            e.preventDefault();
            e.stopPropagation();
            
        }).on('click keydown scroll', function (e) {
            if (!isOnDrag) {
                setTimeout(hide, 100);
            }
        });

    });

});
// 编辑区域 link toolbar
_e(function (E, $) {
    E.plugin(function () {
        var editor = this;
        var lang = editor.config.lang;
        var $txt = editor.txt.$txt;

        // 当前命中的链接
        var $currentLink;

        var $toolbar = $('<div class="txt-toolbar"></div>');
        var $triangle = $('<div class="tip-triangle"></div>');
        var $triggerLink = $('<a href="#" target="_blank"><i class="wangeditor-menu-img-link"></i> ' + lang.openLink + '</a>');
        var isRendered;

        // 记录当前的显示/隐藏状态
        var isShow = false;

        var showTimeoutId, hideTimeoutId;
        var showTimeoutIdByToolbar, hideTimeoutIdByToolbar;

        // 渲染 dom
        function render() {
            if (isRendered) {
                return;
            }

            $toolbar.append($triangle)
                    .append($triggerLink);

            editor.$editorContainer.append($toolbar);

            isRendered = true;
        }

        // 定位
        function setPosition() {
            if (!$currentLink) {
                return;
            }

            var position = $currentLink.position();
            var left = position.left;
            var top = position.top;
            var height = $currentLink.height();

            // 初步计算top值
            var topResult = top + height + 5;

            // 判断 toolbar 是否超过了编辑器区域的下边界
            var menuHeight = editor.menuContainer.height();
            var txtHeight = editor.txt.$txt.outerHeight();
            if (topResult > menuHeight + txtHeight) {
                topResult = menuHeight + txtHeight + 5;
            }

            // 最终设置
            $toolbar.css({
                top: topResult,
                left: left
            });
        }

        // 显示 toolbar
        function show() {
            if (isShow) {
                return;
            }

            if (!$currentLink) {
                return;
            }

            render();

            $toolbar.show();

            // 设置链接
            var href = $currentLink.attr('href');
            $triggerLink.attr('href', href);

            // 定位
            setPosition();

            isShow = true;
        }

        // 隐藏 toolbar
        function hide() {
            if (!isShow) {
                return;
            }

            if (!$currentLink) {
                return;
            }

            $toolbar.hide();
            isShow = false;
        }

        // $txt 绑定事件
        $txt.on('mouseenter', 'a', function (e) {
            // 延时 500ms 显示toolbar
            if (showTimeoutId) {
                clearTimeout(showTimeoutId);
            }
            showTimeoutId = setTimeout(function () {
                var a = e.currentTarget;
                var $a = $(a);
                $currentLink = $a;

                var $img = $a.children('img');
                if ($img.length) {
                    // 该链接下包含一个图片

                    // 图片点击时，隐藏toolbar
                    $img.click(function (e) {
                        hide();
                    });

                    if ($img.hasClass('clicked')) {
                        // 图片还处于clicked状态，则不显示toolbar
                        return;
                    }
                }

                // 显示toolbar
                show();
            }, 500);
        }).on('mouseleave', 'a', function (e) {
            // 延时 500ms 隐藏toolbar
            if (hideTimeoutId) {
                clearTimeout(hideTimeoutId);
            }
            hideTimeoutId = setTimeout(hide, 500);
        }).on('click keydown scroll', function (e) {
            setTimeout(hide, 100);
        });
        // $toolbar 绑定事件
        $toolbar.on('mouseenter', function (e) {
            // 先中断掉 $txt.mouseleave 导致的隐藏
            if (hideTimeoutId) {
                clearTimeout(hideTimeoutId);
            }
        }).on('mouseleave', function (e) {
            // 延时 500ms 显示toolbar
            if (showTimeoutIdByToolbar) {
                clearTimeout(showTimeoutIdByToolbar);
            }
            showTimeoutIdByToolbar = setTimeout(hide, 500);
        });
    });
});
// menu吸顶
_e(function (E, $) {

    E.plugin(function () {
        var editor = this;
        var menuFixed = editor.config.menuFixed;
        if (menuFixed === false || typeof menuFixed !== 'number') {
            // 没有配置菜单吸顶
            return;
        }
        var bodyMarginTop = parseFloat(E.$body.css('margin-top'), 10);
        if (isNaN(bodyMarginTop)) {
            bodyMarginTop = 0;
        }

        var $editorContainer = editor.$editorContainer;
        var editorTop = $editorContainer.offset().top;
        var editorHeight = $editorContainer.outerHeight();
        
        var $menuContainer = editor.menuContainer.$menuContainer;
        var menuCssPosition = $menuContainer.css('position');
        var menuCssTop = $menuContainer.css('top');
        var menuTop = $menuContainer.offset().top;
        var menuHeight = $menuContainer.outerHeight();
        
        var $txt = editor.txt.$txt;

        E.$window.scroll(function () {
            //全屏模式不支持
            if (editor.isFullScreen) {
                return;
            }

            var sTop = E.$window.scrollTop();

            // 需要重新计算宽度，因为浏览器可能此时出现滚动条
            var menuWidth = $menuContainer.width();

            // 如果 menuTop === 0 说明此前编辑器一直隐藏，后来显示出来了，要重新计算相关数据
            if (menuTop === 0) {
                menuTop = $menuContainer.offset().top;
                editorTop = $editorContainer.offset().top;
                editorHeight = $editorContainer.outerHeight();
                menuHeight = $menuContainer.outerHeight();
            }

            if (sTop >= menuTop && sTop + menuFixed + menuHeight + 30 < editorTop + editorHeight) {
                // 吸顶
                $menuContainer.css({
                    position: 'fixed',
                    top: menuFixed
                });

                // 固定宽度
                $menuContainer.width(menuWidth);

                // 增加body margin-top
                E.$body.css({
                    'margin-top': bodyMarginTop + menuHeight
                });

                // 记录
                if (!editor._isMenufixed) {
                    editor._isMenufixed = true;
                }
            } else {
                // 取消吸顶
                $menuContainer.css({
                    position: menuCssPosition,
                    top: menuCssTop
                });

                // 取消宽度固定
                $menuContainer.css('width', '100%');

                // 还原 body margin-top
                E.$body.css({
                    'margin-top': bodyMarginTop
                });

                // 撤销记录
                if (editor._isMenufixed) {
                    editor._isMenufixed = false;
                }
            }
        });
    });

});
// 缩进 菜单插件
_e(function (E, $) {

    // 用 createMenu 方法创建菜单
    E.createMenu(function (check) {

        // 定义菜单id，不要和其他菜单id重复。编辑器自带的所有菜单id，可通过『参数配置-自定义菜单』一节查看
        var menuId = 'indent';

        // check将检查菜单配置（『参数配置-自定义菜单』一节描述）中是否该菜单id，如果没有，则忽略下面的代码。
        if (!check(menuId)) {
            return;
        }

        // this 指向 editor 对象自身
        var editor = this;

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,  // 编辑器对象
            id: menuId,  // 菜单id
            title: '缩进', // 菜单标题

            // 正常状态和选中装下的dom对象，样式需要自定义
            $domNormal: $('<a href="#" tabindex="-1"><i class="wangeditor-menu-img-indent-left"></i></a>'),
            $domSelected: $('<a href="#" tabindex="-1" class="selected"><i class="wangeditor-menu-img-indent-left"></i></a>')
        });

        // 菜单正常状态下，点击将触发该事件
        menu.clickEvent = function (e) {
            var elem = editor.getRangeElem();
            var p = editor.getSelfOrParentByName(elem, 'p');
            var $p;

            if (!p) {
                // 未找到 p 元素，则忽略
                return e.preventDefault();
            }
            $p = $(p);

            // 使用自定义命令
            function commandFn() {
                $p.css('text-indent', '2em');
            }
            editor.customCommand(e, commandFn);
        };

        // 菜单选中状态下，点击将触发该事件
        menu.clickEventSelected = function (e) {
            var elem = editor.getRangeElem();
            var p = editor.getSelfOrParentByName(elem, 'p');
            var $p;

            if (!p) {
                // 未找到 p 元素，则忽略
                return e.preventDefault();
            }
            $p = $(p);

            // 使用自定义命令
            function commandFn() {
                $p.css('text-indent', '0');
            }
            editor.customCommand(e, commandFn);
        };

        // 根据当前选区，自定义更新菜单的选中状态或者正常状态
        menu.updateSelectedEvent = function () {
            // 获取当前选区所在的父元素
            var elem = editor.getRangeElem();
            var p = editor.getSelfOrParentByName(elem, 'p');
            var $p;
            var indent;

            if (!p) {
                // 未找到 p 元素，则标记为未处于选中状态
                return false;
            }
            $p = $(p);
            indent = $p.css('text-indent');

            if (!indent || indent === '0px') {
                // 得到的p，text-indent 属性是 0，则标记为未处于选中状态
                return false;
            }

            // 找到 p 元素，并且 text-indent 不是 0，则标记为选中状态
            return true;
        };

        // 增加到editor对象中
        editor.menus[menuId] = menu;
    });

});
// 行高 菜单插件
_e(function (E, $) {

    // 用 createMenu 方法创建菜单
    E.createMenu(function (check) {

        // 定义菜单id，不要和其他菜单id重复。编辑器自带的所有菜单id，可通过『参数配置-自定义菜单』一节查看
        var menuId = 'lineheight';

        // check将检查菜单配置（『参数配置-自定义菜单』一节描述）中是否该菜单id，如果没有，则忽略下面的代码。
        if (!check(menuId)) {
            return;
        }

        // this 指向 editor 对象自身
        var editor = this;

        // 由于浏览器自身不支持 lineHeight 命令，因此要做一个hook
        editor.commandHooks.lineHeight = function (value) {
            var rangeElem = editor.getRangeElem();
            var targetElem = editor.getSelfOrParentByName(rangeElem, 'p,h1,h2,h3,h4,h5,pre');
            if (!targetElem) {
                return;
            }
            $(targetElem).css('line-height', value + '');
        };

        // 创建 menu 对象
        var menu = new E.Menu({
            editor: editor,  // 编辑器对象
            id: menuId,  // 菜单id
            title: '行高', // 菜单标题
            commandName: 'lineHeight', // 命令名称

            // 正常状态和选中装下的dom对象，样式需要自定义
            $domNormal: $('<a href="#" tabindex="-1"><i class="wangeditor-menu-img-arrows-v"></i></a>'),
            $domSelected: $('<a href="#" tabindex="-1" class="selected"><i class="wangeditor-menu-img-arrows-v"></i></a>')
        });

        // 数据源
        var data  = {
            // 格式： 'value' : 'title'
            '1.0': '1.0倍',
            '1.5': '1.5倍',
            '1.8': '1.8倍',
            '2.0': '2.0倍',
            '2.5': '2.5倍',
            '3.0': '3.0倍'
        };

        // 为menu创建droplist对象
        var tpl = '<span style="line-height:{#commandValue}">{#title}</span>';
        menu.dropList = new E.DropList(editor, menu, {
            data: data,  // 传入数据源
            tpl: tpl  // 传入模板
        });

        // 增加到editor对象中
        editor.menus[menuId] = menu;

    });

});
// 自定义上传
_e(function (E, $) {

    E.plugin(function () {

        var editor = this;
        var customUpload = editor.config.customUpload;
        if (!customUpload) {
            return;
        } else if (editor.config.uploadImgUrl) {
            alert('自定义上传无效，详看浏览器日志console.log');
            E.error('已经配置了 uploadImgUrl ，就不能再配置 customUpload ，两者冲突。将导致自定义上传无效。');
            return;
        }

        var $uploadContent = editor.$uploadContent;
        if (!$uploadContent) {
            E.error('自定义上传，无法获取 editor.$uploadContent');
        }

        // UI
        var $uploadIcon = $('<div class="upload-icon-container"><i class="wangeditor-menu-img-upload"></i></div>');
        $uploadContent.append($uploadIcon);

        // 设置id，并暴露
        var btnId = 'upload' + E.random();
        var containerId = 'upload' + E.random();
        $uploadIcon.attr('id', btnId);
        $uploadContent.attr('id', containerId);

        editor.customUploadBtnId = btnId;
        editor.customUploadContainerId = containerId;
    });

});
// 版权提示
_e(function (E, $) {
    E.info('本页面富文本编辑器由 wangEditor 提供 http://wangeditor.github.io/ ');
});
    
    // 最终返回wangEditor构造函数
    return window.wangEditor;
});
(function($){function fnPjax(selector,container,options){options=optionsFor(container,options);return this.on("click.pjax",selector,function(event){var opts=options;if(!opts.container){opts=$.extend({},options);opts.container=$(this).attr("data-pjax")}handleClick(event,opts)})}function handleClick(event,container,options){options=optionsFor(container,options);var link=event.currentTarget;var $link=$(link);if(link.tagName.toUpperCase()!=="A"){throw"$.fn.pjax or $.pjax.click requires an anchor element"}if(event.which>1||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey){return}if(location.protocol!==link.protocol||location.hostname!==link.hostname){return}if(link.href.indexOf("#")>-1&&stripHash(link)==stripHash(location)){return}if(event.isDefaultPrevented()){return}var defaults={url:link.href,container:$link.attr("data-pjax"),target:link};var opts=$.extend({},defaults,options);var clickEvent=$.Event("pjax:click");$link.trigger(clickEvent,[opts]);if(!clickEvent.isDefaultPrevented()){pjax(opts);event.preventDefault();$link.trigger("pjax:clicked",[opts])}}function handleSubmit(event,container,options){options=optionsFor(container,options);var form=event.currentTarget;var $form=$(form);if(form.tagName.toUpperCase()!=="FORM"){throw"$.pjax.submit requires a form element"}var defaults={type:($form.attr("method")||"GET").toUpperCase(),url:$form.attr("action"),container:$form.attr("data-pjax"),target:form};if(defaults.type!=="GET"&&window.FormData!==undefined){defaults.data=new FormData(form);defaults.processData=false;defaults.contentType=false}else{if($form.find(":file").length){return}defaults.data=$form.serializeArray()}pjax($.extend({},defaults,options));event.preventDefault()}function pjax(options){options=$.extend(true,{},$.ajaxSettings,pjax.defaults,options);if($.isFunction(options.url)){options.url=options.url()}var hash=parseURL(options.url).hash;var containerType=$.type(options.container);if(containerType!=="string"){throw"expected string value for 'container' option; got "+containerType}var context=options.context=$(options.container);if(!context.length){throw"the container selector '"+options.container+"' did not match anything"}if(!options.data){options.data={}}if($.isArray(options.data)){options.data.push({name:"_pjax",value:options.container})}else{options.data._pjax=options.container}function fire(type,args,props){if(!props){props={}}props.relatedTarget=options.target;var event=$.Event(type,props);context.trigger(event,args);return !event.isDefaultPrevented()}var timeoutTimer;options.beforeSend=function(xhr,settings){if(settings.type!=="GET"){settings.timeout=0}xhr.setRequestHeader("X-PJAX","true");xhr.setRequestHeader("X-PJAX-Container",options.container);if(!fire("pjax:beforeSend",[xhr,settings])){return false}if(settings.timeout>0){timeoutTimer=setTimeout(function(){if(fire("pjax:timeout",[xhr,options])){xhr.abort("timeout")}},settings.timeout);settings.timeout=0}var url=parseURL(settings.url);if(hash){url.hash=hash}options.requestUrl=stripInternalParams(url)};options.complete=function(xhr,textStatus){if(timeoutTimer){clearTimeout(timeoutTimer)}fire("pjax:complete",[xhr,textStatus,options]);fire("pjax:end",[xhr,options])};options.error=function(xhr,textStatus,errorThrown){var container=extractContainer("",xhr,options);var allowed=fire("pjax:error",[xhr,textStatus,errorThrown,options]);if(options.type=="GET"&&textStatus!=="abort"&&allowed){locationReplace(container.url)}};options.success=function(data,status,xhr){var previousState=pjax.state;var currentVersion=typeof $.pjax.defaults.version==="function"?$.pjax.defaults.version():$.pjax.defaults.version;var latestVersion=xhr.getResponseHeader("X-PJAX-Version");var container=extractContainer(data,xhr,options);var url=parseURL(container.url);if(hash){url.hash=hash;container.url=url.href}if(currentVersion&&latestVersion&&currentVersion!==latestVersion){locationReplace(container.url);return}if(!container.contents){locationReplace(container.url);return}pjax.state={id:options.id||uniqueId(),url:container.url,title:container.title,container:options.container,fragment:options.fragment,timeout:options.timeout};if(options.push||options.replace){window.history.replaceState(pjax.state,container.title,container.url)}var blurFocus=$.contains(context,document.activeElement);if(blurFocus){try{document.activeElement.blur()}catch(e){}}if(container.title){document.title=container.title}fire("pjax:beforeReplace",[container.contents,options],{state:pjax.state,previousState:previousState});context.html(container.contents);var autofocusEl=context.find("input[autofocus], textarea[autofocus]").last()[0];if(autofocusEl&&document.activeElement!==autofocusEl){autofocusEl.focus()}executeScriptTags(container.scripts);var scrollTo=options.scrollTo;if(hash){var name=decodeURIComponent(hash.slice(1));var target=document.getElementById(name)||document.getElementsByName(name)[0];if(target){scrollTo=$(target).offset().top}}if(typeof scrollTo=="number"){$(window).scrollTop(scrollTo)}fire("pjax:success",[data,status,xhr,options])};if(!pjax.state){pjax.state={id:uniqueId(),url:window.location.href,title:document.title,container:options.container,fragment:options.fragment,timeout:options.timeout};window.history.replaceState(pjax.state,document.title)}abortXHR(pjax.xhr);pjax.options=options;var xhr=pjax.xhr=$.ajax(options);if(xhr.readyState>0){if(options.push&&!options.replace){cachePush(pjax.state.id,[options.container,cloneContents(context)]);window.history.pushState(null,"",options.requestUrl)}fire("pjax:start",[xhr,options]);fire("pjax:send",[xhr,options])}return pjax.xhr}function pjaxReload(container,options){var defaults={url:window.location.href,push:false,replace:true,scrollTo:false};return pjax($.extend(defaults,optionsFor(container,options)))}function locationReplace(url){window.history.replaceState(null,"",pjax.state.url);window.location.replace(url)}var initialPop=true;var initialURL=window.location.href;var initialState=window.history.state;if(initialState&&initialState.container){pjax.state=initialState}if("state" in window.history){initialPop=false}function onPjaxPopstate(event){if(!initialPop){abortXHR(pjax.xhr)}var previousState=pjax.state;var state=event.state;var direction;if(state&&state.container){if(initialPop&&initialURL==state.url){return}if(previousState){if(previousState.id===state.id){return}direction=previousState.id<state.id?"forward":"back"}var cache=cacheMapping[state.id]||[];var containerSelector=cache[0]||state.container;var container=$(containerSelector),contents=cache[1];if(container.length){if(previousState){cachePop(direction,previousState.id,[containerSelector,cloneContents(container)])}var popstateEvent=$.Event("pjax:popstate",{state:state,direction:direction});container.trigger(popstateEvent);var options={id:state.id,url:state.url,container:containerSelector,push:false,fragment:state.fragment,timeout:state.timeout,scrollTo:false};if(contents){container.trigger("pjax:start",[null,options]);pjax.state=state;if(state.title){document.title=state.title}var beforeReplaceEvent=$.Event("pjax:beforeReplace",{state:state,previousState:previousState});container.trigger(beforeReplaceEvent,[contents,options]);container.html(contents);container.trigger("pjax:end",[null,options])}else{pjax(options)}container[0].offsetHeight}else{locationReplace(location.href)}}initialPop=false}function fallbackPjax(options){var url=$.isFunction(options.url)?options.url():options.url,method=options.type?options.type.toUpperCase():"GET";var form=$("<form>",{method:method==="GET"?"GET":"POST",action:url,style:"display:none"});if(method!=="GET"&&method!=="POST"){form.append($("<input>",{type:"hidden",name:"_method",value:method.toLowerCase()}))}var data=options.data;if(typeof data==="string"){$.each(data.split("&"),function(index,value){var pair=value.split("=");form.append($("<input>",{type:"hidden",name:pair[0],value:pair[1]}))})}else{if($.isArray(data)){$.each(data,function(index,value){form.append($("<input>",{type:"hidden",name:value.name,value:value.value}))})}else{if(typeof data==="object"){var key;for(key in data){form.append($("<input>",{type:"hidden",name:key,value:data[key]}))}}}}$(document.body).append(form);form.submit()}function abortXHR(xhr){if(xhr&&xhr.readyState<4){xhr.onreadystatechange=$.noop;xhr.abort()}}function uniqueId(){return(new Date).getTime()}function cloneContents(container){var cloned=container.clone();cloned.find("script").each(function(){if(!this.src){$._data(this,"globalEval",false)}});return cloned.contents()}function stripInternalParams(url){url.search=url.search.replace(/([?&])(_pjax|_)=[^&]*/g,"").replace(/^&/,"");return url.href.replace(/\?($|#)/,"$1")}function parseURL(url){var a=document.createElement("a");a.href=url;return a}function stripHash(location){return location.href.replace(/#.*/,"")}function optionsFor(container,options){if(container&&options){options=$.extend({},options);options.container=container;return options}else{if($.isPlainObject(container)){return container}else{return{container:container}}}}function findAll(elems,selector){return elems.filter(selector).add(elems.find(selector))}function parseHTML(html){return $.parseHTML(html,document,true)}function extractContainer(data,xhr,options){var obj={},fullDocument=/<html/i.test(data);var serverUrl=xhr.getResponseHeader("X-PJAX-URL");obj.url=serverUrl?stripInternalParams(parseURL(serverUrl)):options.requestUrl;var $head,$body;if(fullDocument){$body=$(parseHTML(data.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]));var head=data.match(/<head[^>]*>([\s\S.]*)<\/head>/i);$head=head!=null?$(parseHTML(head[0])):$body}else{$head=$body=$(parseHTML(data))}if($body.length===0){return obj}obj.title=findAll($head,"title").last().text();if(options.fragment){var $fragment=$body;if(options.fragment!=="body"){$fragment=findAll($fragment,options.fragment).first()}if($fragment.length){obj.contents=options.fragment==="body"?$fragment:$fragment.contents();if(!obj.title){obj.title=$fragment.attr("title")||$fragment.data("title")}}}else{if(!fullDocument){obj.contents=$body}}if(obj.contents){obj.contents=obj.contents.not(function(){return $(this).is("title")});obj.contents.find("title").remove();obj.scripts=findAll(obj.contents,"script[src]").remove();obj.contents=obj.contents.not(obj.scripts)}if(obj.title){obj.title=$.trim(obj.title)}return obj}function executeScriptTags(scripts){if(!scripts){return}var existingScripts=$("script[src]");scripts.each(function(){var src=this.src;var matchedScripts=existingScripts.filter(function(){return this.src===src});if(matchedScripts.length){return}var script=document.createElement("script");var type=$(this).attr("type");if(type){script.type=type}script.src=$(this).attr("src");document.head.appendChild(script)})}var cacheMapping={};var cacheForwardStack=[];var cacheBackStack=[];function cachePush(id,value){cacheMapping[id]=value;cacheBackStack.push(id);trimCacheStack(cacheForwardStack,0);trimCacheStack(cacheBackStack,pjax.defaults.maxCacheLength)}function cachePop(direction,id,value){var pushStack,popStack;cacheMapping[id]=value;if(direction==="forward"){pushStack=cacheBackStack;popStack=cacheForwardStack}else{pushStack=cacheForwardStack;popStack=cacheBackStack}pushStack.push(id);id=popStack.pop();if(id){delete cacheMapping[id]}trimCacheStack(pushStack,pjax.defaults.maxCacheLength)}function trimCacheStack(stack,length){while(stack.length>length){delete cacheMapping[stack.shift()]}}function findVersion(){return $("meta").filter(function(){var name=$(this).attr("http-equiv");return name&&name.toUpperCase()==="X-PJAX-VERSION"}).attr("content")}function enable(){$.fn.pjax=fnPjax;$.pjax=pjax;$.pjax.enable=$.noop;$.pjax.disable=disable;$.pjax.click=handleClick;$.pjax.submit=handleSubmit;$.pjax.reload=pjaxReload;$.pjax.defaults={timeout:650,push:true,replace:false,type:"GET",dataType:"html",scrollTo:0,maxCacheLength:20,version:findVersion};$(window).on("popstate.pjax",onPjaxPopstate)}function disable(){$.fn.pjax=function(){return this};$.pjax=fallbackPjax;$.pjax.enable=enable;$.pjax.disable=$.noop;$.pjax.click=$.noop;$.pjax.submit=$.noop;$.pjax.reload=function(){window.location.reload()};$(window).off("popstate.pjax",onPjaxPopstate)}if($.event.props&&$.inArray("state",$.event.props)<0){$.event.props.push("state")}else{if(!("state" in $.Event.prototype)){$.event.addProp("state")}}$.support.pjax=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/);if($.support.pjax){enable()}else{disable()}})(jQuery);
var Applocation = {
    init: function () {

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                'Authorization': $('meta[name="api_token"]').attr('content')
            }
        })

        $('[data-toggle="tooltip"]').tooltip()

        $('.destroy').on('click', function (event) {
            event.preventDefault()
            var url = $(this).attr('href')
            iziToast.question({
                timeout: 10000,
                close: false,
                overlay: true,
                toastOnce: true,
                backgroundColor: '#DC143C',
                theme: 'dark',
                progressBarColor: '#fff',
                id: 'Notice_Delete',
                zindex: 999,
                title: '警告',
                message: '确定要执行删除操作吗?',
                position: 'center',
                buttons: [
                    ['<button><b>确定</b></button>', function (instance, toast) {
                        instance.hide(toast, {transitionOut: 'fadeOut'}, 'button')
                        $.ajax({
                            type: 'POST',
                            url: url,
                            data: {_method: 'delete'},
                            success: respond => {
                                return respond.status
                                    ? succeed(respond.message, window.location.href)
                                    : failed(respond.message)
                            }
                        })
                    }],
                    ['<button>取消</button>', function (instance, toast) {
                        instance.hide(toast, {transitionOut: 'fadeOut'}, 'button')
                    }]
                ]
            })
        })


        $('.confirm_order').on('click', function (event) {
            event.preventDefault()
            var url = $(this).attr('href')
            iziToast.question({
                timeout: 10000,
                close: false,
                overlay: true,
                toastOnce: true,
                backgroundColor: '#3c8dbc',
                theme: 'dark',
                progressBarColor: '#fff',
                id: 'Notice_Delete',
                zindex: 999,
                title: '警告',
                message: '确定已成功派单?',
                position: 'center',
                buttons: [
                    ['<button><b>确定</b></button>', function (instance, toast) {
                        instance.hide(toast, {transitionOut: 'fadeOut'}, 'button')
                        $.ajax({
                            type: 'POST',
                            url: url,
                            data: {_method: 'get'},
                            success: respond => {
                                return respond.status
                                    ? succeed(respond.message,url = 'https://hkzj0571.top/admin/orders')
                                    : failed(respond.message)
                            }
                        })
                    }],
                    ['<button>取消</button>', function (instance, toast) {
                        instance.hide(toast, {transitionOut: 'fadeOut'}, 'button')
                    }]
                ]
            })
        })

        $('.finish_order').on('click', function (event) {
            event.preventDefault()
            var url = $(this).attr('href')
            iziToast.question({
                timeout: 10000,
                close: false,
                overlay: true,
                toastOnce: true,
                backgroundColor: '#3c8dbc',
                theme: 'dark',
                progressBarColor: '#fff',
                id: 'Notice_Delete',
                zindex: 999,
                title: '警告',
                message: '确定订单已完成?',
                position: 'center',
                buttons: [
                    ['<button><b>确定</b></button>', function (instance, toast) {
                        instance.hide(toast, {transitionOut: 'fadeOut'}, 'button')
                        $.ajax({
                            type: 'POST',
                            url: url,
                            data: {_method: 'put'},
                            success: respond => {
                                return respond.status
                                    ? succeed(respond.message,url = 'https://hkzj0571.top/admin/orders')
                                    : failed(respond.message)
                            }
                        })
                    }],
                    ['<button>取消</button>', function (instance, toast) {
                        instance.hide(toast, {transitionOut: 'fadeOut'}, 'button')
                    }]
                ]
            })
        })



        $('.loon').each(function () {
            if ($(this).attr('href') == window.location.href) {
                $(this).parent().addClass('active').parent().parent().addClass('active')
            }
        })

        $('.loon').on('click', function () {
            $('.loon').parent().removeClass('active').parent().parent().removeClass('active')
            $(this).parent().addClass('active').parent().parent().addClass('active')
        })

        // $('.filter-bar').on('change', function () {
        //     $('.filter-bar').each(function () {
        //         window.location.host.updateSearchParam($(this).attr('name'), $(this).val(), false)
        //     })
        //     to(window.location.href)
        // })

        window.failed = (message, url = null) => iziToast.error({
            timeout:1000,
            title: message,
            transitionIn: 'fadeInDown',
            zindex: 9999999999999,
            onClosed: () => {
                if (url !== null) return typeof url == 'function' ? url() : to(url)
            }
        })

        window.succeed = (message, url = null) => iziToast.success({
            timeout:1000,
            title: message,
            transitionIn: 'fadeInDown',
            zindex: 9999999999999,
            onClosed: () => {
                if (url !== null) return typeof url == 'function' ? url() : to(url)
            }
        })

        window.to = url => $('#anchor').attr('href', url).click()

        window.toSubmit = function (init) {
            $.ajax({
                type: init.method,
                url: init.action,
                data: init.el.serialize(),
                success: respond => {
                    return respond.status
                        ? (init.callback
                            ? init.callback()
                            : succeed(respond.message, init.jump))
                        : failed(respond.message)
                }
            })
        }

        $('.select-all').on('click', function () {
            $('.table-check').click()
        })

        $('.btn-file').on('click', function () {
            var self = $(this)
            var input = document.createElement('input')
            input.setAttribute('type', 'file')
            input.click()

            $(input).on('change', function () {
                var formData = new FormData();
                formData.append('file', $(this)[0].files[0]);
                $.ajax({
                    url: '/admin/upload',
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (respond) {
                        if (respond.status) {
                            succeed('文件上传成功')
                            self.parent().prev().val(respond.data.url)
                            self.parent().parent().prev().attr('src',respond.data.url)
                            self.parent().parent().prev().show()

                        } else {
                            failed(respond.message)
                        }
                },
                error: function (responseStr) {
                    failed('文件上传失败！')
                }
            });
            })
        })

        try {
            var editor = new wangEditor('PickEditor')
            editor.config.uploadImgUrl = '/wangeditor/server'
            editor.create()
        } catch(error) {

        }


        $('.btn-batch').on('click', function () {
            var url = $(this).attr('batch-url')
            iziToast.question({
                timeout: 10000,
                close: false,
                overlay: true,
                toastOnce: true,
                backgroundColor: '#DC143C',
                theme: 'dark',
                progressBarColor: '#fff',
                id: 'Notice_Delete',
                zindex: 999,
                title: '警告',
                message: '确定要执行批量删除操作吗?',
                position: 'center',
                buttons: [
                    ['<button><b>确定</b></button>', function (instance, toast) {
                        instance.hide(toast, {transitionOut: 'fadeOut'}, 'button')
                        var id = []
                        $('.table-check').each(function () {
                            if ($(this).is(":checked")) id.push($(this).val())
                        })
                        $.ajax({
                            type: "POST",
                            url: url,
                            data: {id: id, _method: 'delete'},
                            async: false,
                            success: function (respond) {
                                return respond.status
                                    ? succeed(respond.message, window.location.href)
                                    : failed(respond.message)
                            }
                        })
                    }],
                    ['<button>取消</button>', function (instance, toast) {
                        instance.hide(toast, {transitionOut: 'fadeOut'}, 'button')
                    }]
                ]
            })
        })
    }
}

$(document).ready(function () {
    Applocation.init()
    $(document).pjax('a:not(a[target="_blank"])', '#main', {timeout: 1600, maxCacheLength: 500})
    $(document).on('pjax:start', function () {
        NProgress.start()
    })
    $(document).on('pjax:end', function () {
        NProgress.done()
        Applocation.init()
    })
})
